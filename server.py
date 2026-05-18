"""
TaxCalc Pro - Flask Backend
Global tax calculator web app with member/payment system
"""
import os
import json
import hmac
import hashlib
import base64
import sqlite3
from datetime import datetime, timedelta
from functools import wraps

from flask import Flask, request, jsonify, g, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash

# ── App Configuration ──────────────────────────────────────────────────────
app = Flask(__name__, static_folder=".", static_url_path="")
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "taxcalc-pro-secret-key-2026")
app.config["JSON_SORT_KEYS"] = False
app.config["DATABASE"] = os.path.join(os.path.dirname(os.path.abspath(__file__)), "taxcalc.db")

# Stripe configuration
STRIPE_SECRET_KEY = os.environ.get("STRIPE_SECRET_KEY", "sk_test_placeholder")
STRIPE_WEBHOOK_SECRET = os.environ.get("STRIPE_WEBHOOK_SECRET", "whsec_placeholder")
STRIPE_PRO_MONTHLY_PRICE = os.environ.get("STRIPE_PRO_MONTHLY_PRICE", "price_pro_monthly")
STRIPE_PRO_YEARLY_PRICE = os.environ.get("STRIPE_PRO_YEARLY_PRICE", "price_pro_yearly")
STRIPE_ENTERPRISE_PRICE = os.environ.get("STRIPE_ENTERPRISE_PRICE", "price_enterprise_monthly")

# Membership pricing constants (RMB + USD)
MEMBERSHIP_PRICING = {
 "free": {"monthly_cny": 0, "monthly_usd": 0, "per_use_cny": 0, "per_use_usd": 0, "label": "Free"},
 "pro": {"monthly_cny": 19, "monthly_usd": 2.88, "per_use_cny": 1, "per_use_usd": 0.15, "label": "Pro"},
}

# QR code directory
QR_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "qr")

# ── Database Helpers ───────────────────────────────────────────────────────

def get_db():
    """Get a database connection for the current request."""
    if "db" not in g:
        g.db = sqlite3.connect(app.config["DATABASE"])
        g.db.row_factory = sqlite3.Row
        g.db.execute("PRAGMA journal_mode=WAL")
        g.db.execute("PRAGMA foreign_keys=ON")
    return g.db


@app.teardown_appcontext
def close_db(exc):
    """Close database connection on app teardown."""
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    """Initialize the database schema."""
    db = sqlite3.connect(app.config["DATABASE"])
    db.execute("PRAGMA journal_mode=WAL")
    db.execute("PRAGMA foreign_keys=ON")
    db.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            membership TEXT DEFAULT 'free',
            stripe_customer_id TEXT,
            expires_at DATETIME,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
 CREATE TABLE IF NOT EXISTS payments (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
 stripe_session_id TEXT,
 amount REAL,
 currency TEXT DEFAULT 'cny',
 status TEXT DEFAULT 'pending',
 payment_method TEXT DEFAULT 'alipay',
 plan_type TEXT DEFAULT 'monthly',
 verified_by TEXT,
 verified_at DATETIME,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP
 );
    """)
    db.commit()
    db.close()


# ── Token (JWT-like) Helpers ───────────────────────────────────────────────

def create_token(user_id: int, username: str, hours: int = 72) -> str:
    """Create a signed HMAC token: base64(header).base64(payload).signature"""
    now = datetime.utcnow()
    expiry = now + timedelta(hours=hours)
    header = {"alg": "HS256", "typ": "JWT"}
    payload = {
        "sub": user_id,
        "username": username,
        "exp": expiry.isoformat(),
        "iat": now.isoformat(),
    }
    h = base64.urlsafe_b64encode(json.dumps(header, separators=(",", ":")).encode()).rstrip(b"=").decode()
    p = base64.urlsafe_b64encode(json.dumps(payload, separators=(",", ":")).encode()).rstrip(b"=").decode()
    sig = hmac.new(app.config["SECRET_KEY"].encode(), f"{h}.{p}".encode(), hashlib.sha256).hexdigest()
    return f"{h}.{p}.{sig}"


def verify_token(token: str) -> dict | None:
    """Verify and decode a signed HMAC token. Returns payload dict or None."""
    try:
        parts = token.split(".")
        if len(parts) != 3:
            return None
        h, p, sig = parts
        expected_sig = hmac.new(app.config["SECRET_KEY"].encode(), f"{h}.{p}".encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(sig, expected_sig):
            return None
        # Decode payload (add back padding)
        padded = p + "=" * (4 - len(p) % 4)
        payload = json.loads(base64.urlsafe_b64decode(padded).decode())
        # Check expiry
        if datetime.fromisoformat(payload["exp"]).replace(tzinfo=None) < datetime.utcnow():
            return None
        return payload
    except Exception:
        return None


# ── Auth Decorator ─────────────────────────────────────────────────────────

def login_required(f):
    """Decorator to require a valid Bearer token on the request."""
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):
            return jsonify({"error": "Missing or invalid Authorization header"}), 401
        token = auth_header[7:]
        payload = verify_token(token)
        if payload is None:
            return jsonify({"error": "Invalid or expired token"}), 401
        g.user_payload = payload
        g.user_id = payload["sub"]
        g.username = payload["username"]
        return f(*args, **kwargs)
    return decorated


def membership_required(*levels):
    """Decorator to require a specific membership level (or higher)."""
    level_order = {"free": 0, "pro": 1, "enterprise": 2}

    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            db = get_db()
            row = db.execute("SELECT membership FROM users WHERE id = ?", (g.user_id,)).fetchone()
            if row is None:
                return jsonify({"error": "User not found"}), 404
            user_level = level_order.get(row["membership"], 0)
            required_level = min(level_order.get(lv, 0) for lv in levels)
            if user_level < required_level:
                return jsonify({"error": f"Membership '{row['membership']}' insufficient. Requires one of: {levels}"}), 403
            return f(*args, **kwargs)
        return decorated
    return decorator


# ── CORS Headers ───────────────────────────────────────────────────────────

@app.after_request
def add_cors_headers(response):
    """Add CORS headers to all API responses."""
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return response


@app.before_request
def handle_options():
    """Handle CORS preflight requests."""
    if request.method == "OPTIONS":
        return jsonify({"ok": True}), 204


# ── Static File Serving ────────────────────────────────────────────────────

@app.route("/")
def serve_index():
    """Serve the SPA index.html."""
    return send_from_directory(".", "index.html")

@app.route("/download/<path:filename>")
def serve_download(filename):
    """Serve APK and other downloadable files."""
    dl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "download")
    return send_from_directory(dl_dir, filename, as_attachment=True)


@app.route("/<path:path>")
def serve_static(path):
    """Serve static files (icons, manifest.json, etc.)."""
    # Don't intercept API routes
    if path.startswith("api/"):
        return jsonify({"error": "Not found"}), 404
    return send_from_directory(".", path)


# ── Auth Endpoints ─────────────────────────────────────────────────────────

@app.route("/api/register", methods=["POST"])
def api_register():
    """Register a new user with username and password."""
    data = request.get_json(silent=True) or {}
    username = data.get("username", "").strip()
    password = data.get("password", "")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400
    if len(username) < 3:
        return jsonify({"error": "Username must be at least 3 characters"}), 400
    if len(password) < 6:
        return jsonify({"error": "Password must be at least 6 characters"}), 400
    if len(username) > 50:
        return jsonify({"error": "Username must be at most 50 characters"}), 400

    password_hash = generate_password_hash(password)
    db = get_db()

    try:
        cursor = db.execute(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            (username, password_hash),
        )
        db.commit()
        user_id = cursor.lastrowid
    except sqlite3.IntegrityError:
        return jsonify({"error": "Username already exists"}), 409

    token = create_token(user_id, username)
    return jsonify({
        "ok": True,
        "token": token,
        "user": {
            "id": user_id,
            "username": username,
            "membership": "free",
            "expires_at": None,
        },
    }), 201


@app.route("/api/login", methods=["POST"])
def api_login():
    """Login with username and password, returns JWT token."""
    data = request.get_json(silent=True) or {}
    username = data.get("username", "").strip()
    password = data.get("password", "")

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    db = get_db()
    row = db.execute(
        "SELECT id, username, password_hash, membership, expires_at FROM users WHERE username = ?",
        (username,),
    ).fetchone()

    if row is None or not check_password_hash(row["password_hash"], password):
        return jsonify({"error": "Invalid username or password"}), 401

    # Check if membership has expired
    membership = row["membership"]
    expires_at = row["expires_at"]
    if membership != "free" and expires_at:
        exp_dt = datetime.fromisoformat(expires_at)
        if exp_dt.tzinfo is not None:
            exp_dt = exp_dt.replace(tzinfo=None)
        if exp_dt < datetime.utcnow():
            membership = "free"
            db.execute("UPDATE users SET membership = 'free' WHERE id = ?", (row["id"],))
            db.commit()

    token = create_token(row["id"], row["username"])
    return jsonify({
        "ok": True,
        "token": token,
        "user": {
            "id": row["id"],
            "username": row["username"],
            "membership": membership,
            "expires_at": expires_at,
        },
    })


@app.route("/api/user", methods=["GET"])
@login_required
def api_user():
    """Get current user info and membership status."""
    db = get_db()
    row = db.execute(
        "SELECT id, username, membership, stripe_customer_id, expires_at, created_at FROM users WHERE id = ?",
        (g.user_id,),
    ).fetchone()

    if row is None:
        return jsonify({"error": "User not found"}), 404

    # Check membership expiry
    membership = row["membership"]
    expires_at = row["expires_at"]
    if membership != "free" and expires_at:
        exp_dt = datetime.fromisoformat(expires_at)
        if exp_dt.tzinfo is not None:
            exp_dt = exp_dt.replace(tzinfo=None)
        if exp_dt < datetime.utcnow():
            membership = "free"
            db.execute("UPDATE users SET membership = 'free' WHERE id = ?", (row["id"],))
            db.commit()

    # Get payment history
    payments = db.execute(
        "SELECT id, stripe_session_id, amount, currency, status, created_at FROM payments WHERE user_id = ? ORDER BY created_at DESC LIMIT 20",
        (g.user_id,),
    ).fetchall()

    return jsonify({
        "ok": True,
        "user": {
            "id": row["id"],
            "username": row["username"],
            "membership": membership,
            "stripe_customer_id": row["stripe_customer_id"],
            "expires_at": expires_at,
            "created_at": row["created_at"],
        },
        "payments": [dict(p) for p in payments],
        "pricing": MEMBERSHIP_PRICING,
    })


# ── Stripe Integration ─────────────────────────────────────────────────────

@app.route("/api/create-checkout-session", methods=["POST"])
@login_required
def api_create_checkout_session():
    """Create a Stripe Checkout Session for subscription purchase."""
    data = request.get_json(silent=True) or {}
    plan = data.get("plan", "")  # "pro_monthly", "pro_yearly", "enterprise_monthly"
    currency = data.get("currency", "usd")

    price_map = {
        "pro_monthly": STRIPE_PRO_MONTHLY_PRICE,
        "pro_yearly": STRIPE_PRO_YEARLY_PRICE,
        "enterprise_monthly": STRIPE_ENTERPRISE_PRICE,
    }

    if plan not in price_map:
        return jsonify({"error": f"Invalid plan. Choose from: {list(price_map.keys())}"}), 400

    try:
        import stripe
        stripe.api_key = STRIPE_SECRET_KEY

        # Get or create Stripe customer
        db = get_db()
        row = db.execute("SELECT stripe_customer_id FROM users WHERE id = ?", (g.user_id,)).fetchone()

        customer_id = row["stripe_customer_id"] if row and row["stripe_customer_id"] else None

        if not customer_id:
            customer = stripe.Customer.create(
                metadata={"user_id": g.user_id, "username": g.username}
            )
            customer_id = customer.id
            db.execute("UPDATE users SET stripe_customer_id = ? WHERE id = ?", (customer_id, g.user_id))
            db.commit()

        # Determine success/cancel URLs
        base_url = request.host_url.rstrip("/")
        success_url = data.get("success_url", f"{base_url}?checkout=success")
        cancel_url = data.get("cancel_url", f"{base_url}?checkout=cancel")

        session = stripe.checkout.Session.create(
            customer=customer_id,
            mode="subscription",
            line_items=[{"price": price_map[plan], "quantity": 1}],
            success_url=success_url,
            cancel_url=cancel_url,
            metadata={"user_id": g.user_id, "plan": plan},
        )

        # Record pending payment
        amount = 0
        if plan == "pro_monthly":
            amount = MEMBERSHIP_PRICING["pro"]["monthly"]
        elif plan == "pro_yearly":
            amount = MEMBERSHIP_PRICING["pro"]["yearly"]
        elif plan == "enterprise_monthly":
            amount = MEMBERSHIP_PRICING["enterprise"]["monthly"]

        db.execute(
            "INSERT INTO payments (user_id, stripe_session_id, amount, currency, status) VALUES (?, ?, ?, ?, ?)",
            (g.user_id, session.id, amount, currency, "pending"),
        )
        db.commit()

        return jsonify({"ok": True, "session_id": session.id, "url": session.url})

    except ImportError:
        return jsonify({"error": "Stripe library not installed. Run: pip install stripe"}), 500
    except Exception as e:
        return jsonify({"error": f"Stripe error: {str(e)}"}), 500


@app.route("/api/stripe-webhook", methods=["POST"])
def api_stripe_webhook():
    """Handle Stripe webhook events (checkout.session.completed, etc.)."""
    payload = request.data
    sig_header = request.headers.get("Stripe-Signature", "")

    try:
        import stripe
        stripe.api_key = STRIPE_SECRET_KEY

        if STRIPE_WEBHOOK_SECRET and STRIPE_WEBHOOK_SECRET != "whsec_placeholder":
            event = stripe.Webhook.construct_event(payload, sig_header, STRIPE_WEBHOOK_SECRET)
        else:
            # In demo/dev mode, skip signature verification
            event = json.loads(payload)

    except ImportError:
        return jsonify({"error": "Stripe library not installed"}), 500
    except Exception as e:
        return jsonify({"error": f"Webhook verification failed: {str(e)}"}), 400

    event_type = event.get("type", "")

    if event_type == "checkout.session.completed":
        session_obj = event["data"]["object"]
        session_id = session_obj.get("id")
        metadata = session_obj.get("metadata", {})
        user_id = metadata.get("user_id")
        plan = metadata.get("plan", "")

        if not user_id:
            return jsonify({"error": "No user_id in session metadata"}), 400

        db = get_db()

        # Determine membership level and duration from plan
        membership_map = {
            "pro_monthly": ("pro", 30),
            "pro_yearly": ("pro", 365),
            "enterprise_monthly": ("enterprise", 30),
        }

        if plan in membership_map:
            level, days = membership_map[plan]
            expires_at = (datetime.utcnow() + timedelta(days=days)).isoformat()
            db.execute(
                "UPDATE users SET membership = ?, expires_at = ? WHERE id = ?",
                (level, expires_at, user_id),
            )
            db.execute(
                "UPDATE payments SET status = 'completed' WHERE stripe_session_id = ?",
                (session_id,),
            )
            db.commit()

    elif event_type == "customer.subscription.deleted":
        # Subscription was cancelled — downgrade to free
        sub_obj = event["data"]["object"]
        customer_id = sub_obj.get("customer")
        if customer_id:
            db = get_db()
            db.execute(
                "UPDATE users SET membership = 'free', expires_at = NULL WHERE stripe_customer_id = ?",
                (customer_id,),
            )
            db.commit()

    return jsonify({"ok": True, "received": True})


# ── QR Code & Payment Verification ───────────────────────────────────────────

@app.route("/api/qr/<name>")
def api_qr(name):
    """Serve QR code images: alipay, wechat, paypal"""
    allowed = {"alipay": "alipay.jpg", "wechat": "wechat.png", "paypal": "paypal.jpg"}
    if name not in allowed:
        return jsonify({"error": "Unknown QR type"}), 404
    return send_from_directory(QR_DIR, allowed[name])


@app.route("/api/submit-payment", methods=["POST"])
@login_required
def api_submit_payment():
    """User submits a payment claim after scanning QR code.
    Admin must verify before membership is activated."""
    data = request.get_json(silent=True) or {}
    method = data.get("method", "alipay")  # alipay, wechat, paypal
    plan_type = data.get("plan_type", "monthly")  # monthly, per_use
    
    if method not in ("alipay", "wechat", "paypal"):
        return jsonify({"error": "Invalid payment method"}), 400
    if plan_type not in ("monthly", "per_use"):
        return jsonify({"error": "Invalid plan type"}), 400
    
    # Determine amount based on method and plan
    pricing = MEMBERSHIP_PRICING["pro"]
    if method == "paypal":
        amount = pricing["per_use_usd"] if plan_type == "per_use" else pricing["monthly_usd"]
        currency = "usd"
    else:
        amount = pricing["per_use_cny"] if plan_type == "per_use" else pricing["monthly_cny"]
        currency = "cny"
    
    db = get_db()
    cursor = db.execute(
        "INSERT INTO payments (user_id, amount, currency, status, payment_method, plan_type) VALUES (?, ?, ?, ?, ?, ?)",
        (g.user_id, amount, currency, "pending", method, plan_type),
    )
    db.commit()
    
    return jsonify({
        "ok": True,
        "payment_id": cursor.lastrowid,
        "amount": amount,
        "currency": currency,
        "method": method,
        "plan_type": plan_type,
        "status": "pending",
        "message": "Payment submitted. Please wait for admin verification."
    })


@app.route("/api/verify-payment/<int:payment_id>", methods=["POST"])
def api_verify_payment(payment_id):
    """Admin endpoint to verify a payment and activate membership.
    Uses a simple admin secret for auth."""
    data = request.get_json(silent=True) or {}
    admin_key = data.get("admin_key", "")
    
    # Simple admin auth (in production use proper auth)
    if admin_key != os.environ.get("ADMIN_KEY", "taxcalc2026"):
        return jsonify({"error": "Invalid admin key"}), 403
    
    db = get_db()
    payment = db.execute("SELECT * FROM payments WHERE id = ?", (payment_id,)).fetchone()
    if not payment:
        return jsonify({"error": "Payment not found"}), 404
    if payment["status"] == "completed":
        return jsonify({"error": "Payment already verified"}), 400
    
    # Update payment status
    db.execute(
        "UPDATE payments SET status = ?, verified_by = ?, verified_at = ? WHERE id = ?",
        ("completed", "admin", datetime.utcnow().isoformat(), payment_id),
    )
    
    # Activate membership based on plan_type
    user_id = payment["user_id"]
    plan_type = payment["plan_type"]
    
    if plan_type == "monthly":
        # Check if user already has active pro, extend it
        user = db.execute("SELECT membership, expires_at FROM users WHERE id = ?", (user_id,)).fetchone()
        if user and user["membership"] == "pro" and user["expires_at"]:
            existing = datetime.fromisoformat(user["expires_at"]).replace(tzinfo=None)
            if existing > datetime.utcnow():
                expires_at = (existing + timedelta(days=30)).isoformat()
            else:
                expires_at = (datetime.utcnow() + timedelta(days=30)).isoformat()
        else:
            expires_at = (datetime.utcnow() + timedelta(days=30)).isoformat()
        db.execute("UPDATE users SET membership = ?, expires_at = ? WHERE id = ?", ("pro", expires_at, user_id))
    else:
        # Per-use: activate pro for 24 hours
        expires_at = (datetime.utcnow() + timedelta(hours=24)).isoformat()
        db.execute("UPDATE users SET membership = ?, expires_at = ? WHERE id = ?", ("pro", expires_at, user_id))
    
    db.commit()
    
    return jsonify({"ok": True, "message": "Payment verified, membership activated", "user_id": user_id, "plan_type": plan_type})


@app.route("/api/payment-status", methods=["GET"])
@login_required
def api_payment_status():
    """Check pending payments for current user."""
    db = get_db()
    payments = db.execute(
        "SELECT id, amount, currency, status, payment_method, plan_type, created_at FROM payments WHERE user_id = ? ORDER BY created_at DESC LIMIT 10",
        (g.user_id,),
    ).fetchall()
    return jsonify({
        "ok": True,
        "payments": [dict(p) for p in payments],
        "has_pending": any(p["status"] == "pending" for p in payments),
    })


@app.route("/api/activate-pro", methods=["POST"])
@login_required
def api_activate_pro():
    """Admin/demo endpoint: manually activate Pro membership."""
    data = request.get_json(silent=True) or {}
    admin_key = data.get("admin_key", "")
    days = data.get("days", 30)
    
    # Require admin key
    if admin_key != os.environ.get("ADMIN_KEY", "taxcalc2026"):
        return jsonify({"error": "Admin key required. Use /api/submit-payment for QR payment flow."}), 403
    
    expires_at = (datetime.utcnow() + timedelta(days=days)).isoformat()
    db = get_db()
    db.execute(
        "UPDATE users SET membership = ?, expires_at = ? WHERE id = ?",
        ("pro", expires_at, g.user_id),
    )
    db.execute(
        "INSERT INTO payments (user_id, amount, currency, status, payment_method, plan_type, verified_by) VALUES (?, ?, ?, ?, ?, ?, ?)",
        (g.user_id, 0, "cny", "completed", "admin", "monthly", "admin"),
    )
    db.commit()

    return jsonify({
        "ok": True,
        "message": f"{plan.title()} membership activated for {days} days (demo)",
        "membership": plan,
        "expires_at": expires_at,
    })


# ── Utility / Health Endpoints ─────────────────────────────────────────────

@app.route("/api/health", methods=["GET"])
def api_health():
    """Health check endpoint."""
    return jsonify({
        "ok": True,
        "service": "TaxCalc Pro API",
        "version": "1.0.0",
        "timestamp": datetime.utcnow().isoformat(),
    })


@app.route("/api/pricing", methods=["GET"])
def api_pricing():
    """Get membership pricing information."""
    return jsonify({"ok": True, "pricing": MEMBERSHIP_PRICING})


# ── Main ───────────────────────────────────────────────────────────────────

if __name__ == "__main__":
 init_db()
 # Auto-create demo accounts if not exist
 with app.app_context():
     from werkzeug.security import generate_password_hash
     from datetime import datetime, timedelta
     db = get_db()
     existing = db.execute("SELECT COUNT(*) FROM users").fetchone()[0]
     if existing == 0:
         expires = (datetime.utcnow() + timedelta(days=365)).isoformat()
         db.execute("INSERT INTO users (username, password_hash, membership, expires_at) VALUES (?, ?, ?, ?)",
             ("demo", generate_password_hash("demo123"), "pro", expires))
         db.execute("INSERT INTO users (username, password_hash, membership) VALUES (?, ?, ?)",
             ("testuser", generate_password_hash("test123"), "free"))
         db.commit()
         print("✅ Demo accounts created: demo/demo123 (Pro), testuser/test123 (Free)")
     else:
         print(f"📊 {existing} users already in DB")
 port = int(os.environ.get("PORT", 3000))
 debug = os.environ.get("FLASK_DEBUG", "1") == "1"
 print(f"🧮 TaxCalc Pro API starting on http://0.0.0.0:{port}")
 app.run(host="0.0.0.0", port=port, debug=debug)
