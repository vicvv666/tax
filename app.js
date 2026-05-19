// 税算寶 - Global Tax Calculator v1.0
// ===== i18n =====
const I18N = {
"en":{
brand:'税算寶',tagline:'Global Tax Calculator — Smart, Fast, Accurate',
tabIncome:'💰 Income Tax',tabVat:'🧾 VAT/GST',tabMortgage:'🏠 Mortgage',tabPayroll:'💼 Payroll',tabBonus:'📊 Bonus',tabFund:'🏦 Housing Fund',tabCompare:'⚖️ Tax Compare',tabHistory:'📋 History',
login:'Login',register:'Register',logout:'Logout',upgrade:'Upgrade',account:'Account',
username:'Username',password:'Password',country:'Country / Region',salary:'Annual Salary',calculate:'Calculate',
result:'Result',monthlyTax:'Monthly Tax',annualTax:'Annual Tax',effectiveRate:'Effective Rate',takeHome:'Take-home Pay',
netIncome:'Net Income',grossIncome:'Gross Income',addTax:'Add Tax',removeTax:'Remove Tax',
vatRate:'VAT/GST Rate',amount:'Amount',inclusive:'Inclusive',exclusive:'Exclusive',
loanAmt:'Loan Amount',rate:'Interest Rate (%)',termYears:'Term (Years)',monthlyPay:'Monthly Payment',totalInterest:'Total Interest',
addEmployee:'Add Employee',sampleData:'Sample Data',genPayroll:'Generate Payslip',name:'Name',monthly:'Monthly',
exportCsv:'Export CSV',bonus:'Year-end Bonus',optimize:'Optimize',separate:'Separate Tax',combined:'Combined Tax',
savesMore:'saves more',empRate:'Employee Rate %',corpRate:'Employer Rate %',base:'Base Salary',
compareCountry:'Compare Country',countryA:'Country A',countryB:'Country B',
clearAll:'Clear All',noHistory:'No saved calculations',date:'Date',type:'Type',
free:'Free',pro:'Pro',enterprise:'Enterprise',perMonth:'/mo',perYear:'/yr',
current:'Current Plan',activate:'Activate',proFeatures:'All calculators + Batch payroll + Export + History',
entFeatures:'Everything in Pro + API access + White-label + Priority support',
basicCalc:'Basic calculators: Income Tax, VAT, Mortgage',
loginSuccess:'Login successful!',registerSuccess:'Registration successful!',loginFail:'Invalid credentials',registerFail:'Registration failed',
upgradeSuccess:'Plan activated!',needLogin:'Please login first',proRequired:'Pro membership required',
demoHint:'',regUserHint:'Username (3+ chars)',regPassHint:'Password (6+ chars)',
upgradeHint:'Scan QR code to pay, then click "I have paid"',
monthly:'Monthly',perUse:'Per Use',month:'month',time:'time',paidAlready:'I have paid',
paymentPending:'Payment pending, waiting for verification...',
paymentSubmitted:'Payment submitted! Waiting for admin verification.',
submitting:'Submitting...',close:'Close',error:'Error',
expiresAt:'Expires',
disclaimer:'Disclaimer',discClick:'View Disclaimer',
discText:'The tax calculators, payroll generators and other online tools provided on this site are for personal reference calculation, internal financial record-keeping, account reconciliation and personal archiving purposes only. All calculated results are simulated references and do not carry official legal authority. The automatic calculation results are based on publicly available tax rate formulas and have not been reviewed by official tax authorities. Actual tax amounts, social insurance and housing fund contributions shall be subject to final verification by local tax bureaus and social security departments. The payroll generation feature is strictly for users to create personal records using their own genuine income information. It is strictly prohibited to use this tool for forging income certificates, creating false pay slips, or for any fraudulent purposes including loan applications, visa applications, job applications, rental applications, or any other illegal activities. Users who violate these rules and produce or use false documents shall bear full responsibility for all civil disputes, administrative penalties, and legal liabilities arising therefrom. This site shall not bear any joint liability. This site strives to maintain the accuracy of data and formulas but shall not be liable for any calculation deviations caused by system failures, tax policy changes, parameter setting errors, or other factors. By voluntarily using any tools on this site, users acknowledge that they have read and agreed to all terms of this disclaimer. Those who do not agree should immediately stop using all services on this site. This site reserves the right to modify tool features, pricing models, and this disclaimer at any time, with changes taking effect upon publication on the site.',
footerTxt:'© 2026 税算寶 | Global Tax Calculator',contact:'Contact',privacy:'Privacy Policy',terms:'Terms of Service',privacyTxt:'税算寶 respects your privacy. We collect only the minimum information necessary to provide our services: username and encrypted password for authentication, calculation history stored locally on your device. We do not sell, share, or transfer your personal data to third parties. Payment processing is handled by third-party payment platforms (Alipay, WeChat Pay, PayPal); we do not store your payment credentials. We use localStorage to save preferences (language, login token) on your device. You may clear this data at any time by logging out or clearing browser data. We use standard security measures to protect your data but cannot guarantee absolute security of internet transmissions. We may update this policy periodically; continued use constitutes acceptance of changes. Contact: vichoo2020@gmail.com',termsTxt:'By using 税算寶, you agree to the following: 1. All tax calculations are for reference only and do not constitute official tax advice. Results are based on publicly available tax rate formulas and may not reflect your actual tax liability. 2. The payroll generator is for personal record-keeping only. Falsifying income documents is strictly prohibited and may result in legal consequences. 3. Pro membership fees are non-refundable once activated. 4. We reserve the right to modify features, pricing, and these terms at any time. Changes take effect upon publication on this site. 5. We are not liable for any losses arising from the use of our tools, including but not limited to calculation errors, system downtime, or data loss. 6. You must not reverse-engineer, decompile, or redistribute the application. 7. These terms are governed by the laws of the jurisdiction in which you reside. Contact: vichoo2020@gmail.com',
cn:'China 🇨🇳',us:'United States 🇺🇸',uk:'United Kingdom 🇬🇧',au:'Australia 🇦🇺',ca:'Canada 🇨🇦',jp:'Japan 🇯🇵',hk:'Hong Kong 🇭🇰',
currency:'Currency',deduction:'Deduction',taxableIncome:'Taxable Income',taxAmount:'Tax Amount',
payPerUse:'Pay-per-use',onetime:'one-time',
},
"zh-TW":{
brand:'稅算寶',tagline:'全球稅務計算器 — 智能、快速、準確',
tabIncome:'💰 所得稅',tabVat:'🧾 增值稅/消費稅',tabMortgage:'🏠 房貸',tabPayroll:'💼 薪資單',tabBonus:'📊 年終獎',tabFund:'🏦 公積金',tabCompare:'⚖️ 稅務對比',tabHistory:'📋 記錄',
login:'登入',register:'註冊',logout:'登出',upgrade:'升級',account:'帳戶',
username:'使用者名稱',password:'密碼',country:'國家/地區',salary:'年薪',calculate:'計算',
result:'計算結果',monthlyTax:'月度稅額',annualTax:'年度稅額',effectiveRate:'有效稅率',takeHome:'到手收入',
netIncome:'淨收入',grossIncome:'含稅收入',addTax:'加稅',removeTax:'除稅',
vatRate:'增值稅/消費稅稅率',amount:'金額',inclusive:'含稅',exclusive:'不含稅',
loanAmt:'貸款金額',rate:'利率 (%)',termYears:'期限（年）',monthlyPay:'月供',totalInterest:'總利息',
addEmployee:'➕ 添加員工',sampleData:'📥 示例數據',genPayroll:'📋 批量生成',name:'姓名',monthly:'月薪',
exportCsv:'📥 匯出 CSV',bonus:'年終獎金',optimize:'優化計算',separate:'單獨計稅',combined:'合併計稅',
savesMore:'更划算',empRate:'個人比例 %',corpRate:'企業比例 %',base:'基數',
compareCountry:'跨國對比',countryA:'國家 A',countryB:'國家 B',
clearAll:'🗑️ 清空',noHistory:'暫無記錄',date:'日期',type:'類型',
free:'免費版',pro:'Pro 版',enterprise:'企業版',perMonth:'/月',perYear:'/年',
current:'當前方案',activate:'啟用',proFeatures:'全功能計算器 + 批量薪資單 + 匯出 + 記錄',
entFeatures:'Pro 全部 + API + 白標 + 優先支援',
basicCalc:'基礎計算器：所得稅、增值稅、房貸',
loginSuccess:'登入成功！',registerSuccess:'註冊成功！',loginFail:'帳號或密碼錯誤',registerFail:'註冊失敗',
upgradeSuccess:'方案已啟用！',needLogin:'請先登入',proRequired:'需要 Pro 會員',
demoHint:'',regUserHint:'使用者名稱（3字元以上）',regPassHint:'密碼（6字元以上）',
upgradeHint:'掃碼付款後，點擊「我已付款」',
monthly:'月費',perUse:'按次',month:'月',time:'次',paidAlready:'我已付款',
paymentPending:'付款待確認，請等待驗證...',
paymentSubmitted:'付款已提交！等待管理員驗證。',
submitting:'提交中...',close:'關閉',error:'錯誤',
expiresAt:'到期日',
disclaimer:'免責聲明',discClick:'查看免責聲明',
discText:'本站所提供之稅務計算器、薪資單生成器等線上工具，僅供個人參考計算、內部收支記錄、財務對賬及自用備檔使用，所有數據結果僅為模擬參考，不具備官方法律效力。本工具自動計算結果僅依公開稅率公式運算，未經官方稅務單位審核，實際應繳稅額、社保公積金金額請以當地稅務局、人社部門最終核定數據為準。本站薪資單生成功能，僅允許用戶填寫真實個人收入資料製作自用記錄，嚴禁用於偽造收入證明、虛假薪資單、辦理貸款、簽證、求職、租房及一切違規欺詐用途。使用者若違反規定製作使用虛假單據，所產生之一切民事糾紛、行政處罰及法律責任，均由使用者自行全權承擔，本站不承擔任何連帶責任。本站盡力維護數據公式準確性，但不因系統故障、稅率政策變更、參數設置錯誤等因素造成之計算偏差承擔任何賠償責任。使用者自願使用本站所有工具，即代表已完整閱讀並同意本免責聲明全部條款，不同意者請立即停止使用本站所有服務。本站保留隨時修改工具功能、收費模式及本免責聲明之權利，修改後於網站公佈即生效。',
footerTxt:'© 2026 稅算寶 | 全球稅務計算器',contact:'聯絡我們',privacy:'隱私條款',terms:'用戶協議',privacyTxt:'税算寶尊重您的隱私權。我們僅收集提供服務所需的最少資訊：使用者名稱與加密密碼用於身份驗證，計算記錄存儲於您的設備本地。我們不會出售、分享或轉讓您的個人資料給第三方。付款處理由第三方支付平台（支付寶、微信支付、PayPal）處理；我們不存儲您的付款憑證。我們使用 localStorage 在您的設備上保存偏好設定（語言、登入令牌）。您可隨時透過登出或清除瀏覽器資料來清除這些資訊。我們採用標準安全措施保護您的資料，但無法保證網路傳輸的絕對安全。我們可能會定期更新此政策；繼續使用即表示接受更改。聯絡：vichoo2020@gmail.com',termsTxt:'使用稅算寶即表示您同意以下條款：1. 所有稅務計算僅供參考，不構成官方稅務建議。結果基於公開稅率公式，可能無法反映您的實際納稅義務。2. 薪資單生成器僅供個人記錄使用。嚴禁偽造收入文件，違者可能承擔法律後果。3. Pro 會員費用一經啟用概不退款。4. 我們保留隨時修改功能、定價及這些條款的權利。更改在本站公佈後即生效。5. 我們對使用本工具造成的任何損失不承擔責任，包括但不限於計算錯誤、系統停機或資料丟失。6. 您不得對本應用程式進行反向工程、反編譯或重新分發。7. 這些條款受您居住地司法管轄區的法律管轄。聯絡：vichoo2020@gmail.com',
cn:'中國 🇨🇳',us:'美國 🇺🇸',uk:'英國 🇬🇧',au:'澳洲 🇦🇺',ca:'加拿大 🇨🇦',jp:'日本 🇯🇵',hk:'香港 🇭🇰',
currency:'貨幣',deduction:'免稅額',taxableIncome:'應稅所得',taxAmount:'應納稅額',
payPerUse:'按次付費',onetime:'一次',
},
"zh-CN":{
brand:'税算寶',tagline:'全球税务计算器 — 智能、快速、准确',
tabIncome:'💰 所得税',tabVat:'🧾 增值税/消费税',tabMortgage:'🏠 房贷',tabPayroll:'💼 薪资单',tabBonus:'📊 年终奖',tabFund:'🏦 公积金',tabCompare:'⚖️ 税务对比',tabHistory:'📋 记录',
login:'登录',register:'注册',logout:'退出',upgrade:'升级',account:'账户',
username:'用户名',password:'密码',country:'国家/地区',salary:'年薪',calculate:'计算',
result:'计算结果',monthlyTax:'月度税额',annualTax:'年度税额',effectiveRate:'有效税率',takeHome:'到手收入',
netIncome:'净收入',grossIncome:'含税收入',addTax:'加税',removeTax:'除税',
vatRate:'增值税/消费税税率',amount:'金额',inclusive:'含税',exclusive:'不含税',
loanAmt:'贷款金额',rate:'利率 (%)',termYears:'期限（年）',monthlyPay:'月供',totalInterest:'总利息',
addEmployee:'➕ 添加员工',sampleData:'📥 示例数据',genPayroll:'📋 批量生成',name:'姓名',monthly:'月薪',
exportCsv:'📥 导出 CSV',bonus:'年终奖金',optimize:'优化计算',separate:'单独计税',combined:'合并计税',
savesMore:'更划算',empRate:'个人比例 %',corpRate:'企业比例 %',base:'基数',
compareCountry:'跨国对比',countryA:'国家 A',countryB:'国家 B',
clearAll:'🗑️ 清空',noHistory:'暂无记录',date:'日期',type:'类型',
free:'免费版',pro:'Pro 版',enterprise:'企业版',perMonth:'/月',perYear:'/年',
current:'当前方案',activate:'启用',proFeatures:'全功能计算器 + 批量薪资单 + 导出 + 记录',
entFeatures:'Pro 全部 + API + 白标 + 优先支持',
basicCalc:'基础计算器：所得税、增值税、房贷',
loginSuccess:'登录成功！',registerSuccess:'注册成功！',loginFail:'账号或密码错误',registerFail:'注册失败',
upgradeSuccess:'方案已启用！',needLogin:'请先登录',proRequired:'需要 Pro 会员',
demoHint:'',regUserHint:'用户名（3字以上）',regPassHint:'密码（6字以上）',
upgradeHint:'扫码付款后，点击「我已付款」',
monthly:'月费',perUse:'按次',month:'月',time:'次',paidAlready:'我已付款',
paymentPending:'付款待确认，请等待验证...',
paymentSubmitted:'付款已提交！等待管理员验证。',
submitting:'提交中...',close:'关闭',error:'错误',
expiresAt:'到期日',
disclaimer:'免责声明',discClick:'查看免责声明',
discText:'本站所提供之税务计算器、薪资单生成器等线上工具，仅供个人参考计算、内部收支记录、财务对账及自用备档使用，所有数据结果仅为模拟参考，不具备官方法律效力。本工具自动计算结果仅依公开税率公式运算，未经官方税务单位审核，实际应缴税额、社保公积金金额请以当地税务局、人社部门最终核定数据为准。本站薪资单生成功能，仅允许用户填写真实个人收入资料制作自用记录，严禁用于伪造收入证明、虚假薪资单、办理贷款、签证、求职、租房及一切违规欺诈用途。使用者若违反规定制作使用虚假单据，所产生之一切民事纠纷、行政处罚及法律责任，均由使用者自行全权承担，本站不承担任何连带责任。本站尽力维护数据公式准确性，但不因系统故障、税率政策变更、参数设置错误等因素造成之计算偏差承担任何赔偿责任。使用者自愿使用本站所有工具，即代表已完整阅读并同意本免责声明全部条款，不同意者请立即停止使用本站所有服务。本站保留随时修改工具功能、收费模式及本免责声明之权利，修改后于网站公布即生效。',
footerTxt:'© 2026 税算寶 | 全球税务计算器',contact:'联系我们',privacy:'隐私条款',terms:'用户协议',privacyTxt:'税算寶尊重您的隐私权。我们仅收集提供服务所需的最少信息：用户名与加密密码用于身份验证，计算记录存储于您的设备本地。我们不会出售、分享或转让您的个人数据给第三方。付款处理由第三方支付平台（支付宝、微信支付、PayPal）处理；我们不存储您的付款凭证。我们使用 localStorage 在您的设备上保存偏好设置（语言、登录令牌）。您可随时通过退出或清除浏览器数据来清除这些信息。我们采用标准安全措施保护您的数据，但无法保证网络传输的绝对安全。我们可能会定期更新此政策；继续使用即表示接受更改。联系：vichoo2020@gmail.com',termsTxt:'使用税算寶即表示您同意以下条款：1. 所有税务计算仅供参考，不构成官方税务建议。结果基于公开税率公式，可能无法反映您的实际纳税义务。2. 薪资单生成器仅供个人记录使用。严禁伪造收入文件，违者可能承担法律后果。3. Pro 会员费用一经启用概不退款。4. 我们保留随时修改功能、定价及这些条款的权利。更改在本站公布后即生效。5. 我们对使用本工具造成的任何损失不承担责任，包括但不限于计算错误、系统停机或数据丢失。6. 您不得对本应用程序进行反向工程、反编译或重新分发。7. 这些条款受您居住地司法管辖区的法律管辖。联系：vichoo2020@gmail.com',
cn:'中国 🇨🇳',us:'美国 🇺🇸',uk:'英国 🇬🇧',au:'澳洲 🇦🇺',ca:'加拿大 🇨🇦',jp:'日本 🇯🇵',hk:'香港 🇭🇰',
currency:'货币',deduction:'免税额',taxableIncome:'应税所得',taxAmount:'应纳税额',
payPerUse:'按次付费',onetime:'一次',
}
};

let LANG=localStorage.getItem("tcp_lang")||(navigator.language.startsWith("zh-CN")?"zh-CN":navigator.language.startsWith("zh")?"zh-TW":"en");
function t(k){return(I18N[LANG]||I18N.en)[k]||I18N.en[k]||k}

// ===== Tax Data (2024-2025) =====
const TAX={
CN:{name:'cn',cur:'\u00a5',curCode:'CNY',ded:60000,
  brackets:[36000,144000,300000,420000,660000,960000],
  rates:[3,10,20,25,30,35,45],
  vat:[{r:13,l:'13%'},{r:9,l:'9%'},{r:6,l:'6%'},{r:3,l:'3%'},{r:1,l:'1%'}],
  fundMax:31884,fundRates:{emp:0.12,corp:0.12}},
US:{name:'us',cur:'$',curCode:'USD',ded:14600,
  brackets:[11600,47150,100525,191950,243725,609350],
  rates:[10,12,22,24,32,35,37],
  vat:[{r:0,l:'No federal VAT'}],
  fundMax:0,fundRates:{emp:0,corp:0}},
UK:{name:'uk',cur:'\u00a3',curCode:'GBP',ded:12570,
  brackets:[50270,125140],
  rates:[20,40,45],
  vat:[{r:20,l:'20% Standard'},{r:5,l:'5% Reduced'},{r:0,l:'0% Zero'}],
  fundMax:0,fundRates:{emp:0,corp:0}},
AU:{name:'au',cur:'A$',curCode:'AUD',ded:18200,
  brackets:[45000,135000,190000],
  rates:[16,30,37,45],
  vat:[{r:10,l:'10% GST'},{r:0,l:'0% GST-free'}],
  fundMax:0,fundRates:{emp:0,corp:0}},
CA:{name:'ca',cur:'C$',curCode:'CAD',ded:15705,
  brackets:[55867,111733,154906,220000],
  rates:[15,20.5,26,29,33],
  vat:[{r:5,l:'5% GST'},{r:13,l:'13% HST (ON)'},{r:15,l:'15% HST (Atlantic)'}],
  fundMax:0,fundRates:{emp:0,corp:0}},
JP:{name:'jp',cur:'\u00a5',curCode:'JPY',ded:480000,
  brackets:[1950000,3300000,6950000,9000000,18000000,40000000],
  rates:[5,10,20,23,33,40,45],
 vat:[{r:10,l:'10% Standard'},{r:8,l:'8% Reduced'}],
 fundMax:0,fundRates:{emp:0,corp:0}},
HK:{name:'hk',cur:'HK$',curCode:'HKD',ded:132000,
 brackets:[50000,100000,150000,200000,2500000],
 rates:[2,6,10,14,17],
 vat:[{r:0,l:'No VAT/GST'}],
 fundMax:0,fundRates:{emp:0.05,corp:0.05}}
};

// ===== State =====
let user=null,token=localStorage.getItem('tcp_token'),activeTab='income';
let payrollRows=[],history=JSON.parse(localStorage.getItem('tcp_hist')||'[]');

// ===== API =====
var API_BASE=(function(){
 if(location.protocol==='file:'||location.hostname===''){
 return'https://taxcalc-proxy.onrender.com';
 }
 if(location.hostname.endsWith('github.io')){
 return'https://taxcalc-api.vichoo2020.workers.dev';
 }
 return location.origin;
})();
var IS_OFFLINE=false;
var IS_APK=(location.protocol==='file:');

// APK: Use AndroidApi.fetch() bridge (Kotlin @JavascriptInterface with browser-like headers)
// Web: Use fetch() normally
window.__apiCb={};
var _apiCbId=0;
function nativeFetch(method,url,bodyObj,headersObj){
 return new Promise(function(resolve){
 var cbId='cb_'+(++_apiCbId);
 var settled=false;
 var timer=setTimeout(function(){
 if(!settled){settled=true;delete window.__apiCb[cbId];
 resolve({error:'NativeFetch timeout (15s)',_debug_url:url});}
 },16000);
 window.__apiCb[cbId]=function(status,bodyStr){
 if(settled)return;settled=true;clearTimeout(timer);
 try{var d=JSON.parse(bodyStr);d._httpStatus=status;resolve(d)}
 catch(e){resolve({error:'Parse error',status:status,_body:bodyStr?.substring(0,80)})}
 };
 try{
 var hdrJson=JSON.stringify(headersObj||{});
 var bodyJson=bodyObj?JSON.stringify(bodyObj):'';
 window.AndroidApi.fetch(cbId,method,url,bodyJson,hdrJson);
 }catch(e){
 if(!settled){settled=true;clearTimeout(timer);
 resolve({error:'AndroidApi.call failed: '+e.message,_debug_url:url});}
 }
 });
}

async function api(url,opts={}){ 
if(!opts.headers)opts.headers={};
opts.headers['Content-Type']='application/json';
if(token)opts.headers['Authorization']='Bearer '+token;
var fullUrl=url.startsWith('http')?url:API_BASE+url;
var method=(opts.method||'GET').toUpperCase();
var bodyObj=opts.body?JSON.parse(opts.body):null;

// APK: Use AndroidApi bridge with browser-like UA + Origin headers
if(IS_APK&&window.AndroidApi){
 try{
 var hdrs={};
 if(token)hdrs['Authorization']='Bearer '+token;
 var data=await nativeFetch(method,fullUrl,bodyObj,hdrs);
 IS_OFFLINE=false;
 saveCloudToLocal(url,data);
 return data;
 }catch(e){
 IS_OFFLINE=true;
 return offlineApi(url,opts);
 }
}

// Web: Use fetch() with CORS
try{
var fetchOpts={method:method,headers:{'Content-Type':'application/json','Accept':'application/json'}};
if(token)fetchOpts.headers['Authorization']='Bearer '+token;
if(bodyObj&&method!=='GET')fetchOpts.body=JSON.stringify(bodyObj);
const r=await fetch(fullUrl,fetchOpts);
IS_OFFLINE=false;
var data=await r.json();
saveCloudToLocal(url,data);
return data;
}catch(e){
IS_OFFLINE=true;
return offlineApi(url,opts);
}
}

// Save cloud response to localStorage for offline access next time
function saveCloudToLocal(url,data){
if(!data||!data.ok)return;
try{
if(url==='/api/register'||url==='/api/login'){
if(data.token)localStorage.setItem('tcp_token',data.token);
if(data.user){
localStorage.setItem('tcp_offline_user',JSON.stringify(data.user));
var users=JSON.parse(localStorage.getItem('tcp_offline_users')||'{}');
users[data.user.username]={password:'_cloud_',membership:data.user.membership||'free',expires_at:data.user.expires_at||null};
localStorage.setItem('tcp_offline_users',JSON.stringify(users));
}
}
if(url==='/api/user'){
if(data.user)localStorage.setItem('tcp_offline_user',JSON.stringify(data.user));
}
}catch(e){}
}

function offlineApi(url,opts){
 var body=opts.body?JSON.parse(opts.body):{};
 // Register: MUST go to cloud — never allow local-only registration
 if(url==='/api/register'){
 return{error:'⚠️ Registration requires network. Please check your internet connection and try again.'};
 }
 // Offline login — check local first, then try cloud
 if(url==='/api/login'){
 var users=JSON.parse(localStorage.getItem('tcp_offline_users')||'{}');
 var u=users[body.username];
 if(!u||u.password!==body.password)return{error:'Invalid username or password'};
 var fakeToken=btoa(JSON.stringify({sub:Date.now(),username:body.username,exp:'2027-12-31T23:59:59'}));
 return{ok:true,token:fakeToken,user:{id:Date.now(),username:body.username,membership:u.membership,expires_at:u.expires_at}};
 }
 // Offline get user
 if(url==='/api/user'){
  var stored=JSON.parse(localStorage.getItem('tcp_offline_user')||'null');
  if(stored)return{ok:true,user:stored,payments:[],pricing:MEMBERSHIP_PRICING||{}};
  return{error:'Not logged in'};
 }
 // Offline payment submit
 if(url==='/api/submit-payment')return{ok:true};
 if(url==='/api/payment-status')return{ok:true,payments:[]};
 return{error:'Network unavailable - offline mode'};
}

// Sync offline users to cloud when back online
async function syncOfflineUsers(){
var queue=JSON.parse(localStorage.getItem('tcp_sync_queue')||'[]');
if(!queue.length)return;
var remaining=[];
for(var i=0;i<queue.length;i++){
var item=queue[i];
if(item.type==='register'){
try{
var r=await fetch(API_BASE+'/api/register',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({username:item.username,password:item.password})
});
var data=await r.json();
if(data.ok){
var lr=await fetch(API_BASE+'/api/login',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({username:item.username,password:item.password})
});
var ld=await lr.json();
if(ld.ok){
token=ld.token;localStorage.setItem('tcp_token',token);
user=ld.user;localStorage.setItem('tcp_offline_user',JSON.stringify(ld.user));
updateUI();
}
continue;
}
}catch(e){}
}
remaining.push(item);
}
if(remaining.length!==queue.length){
localStorage.setItem('tcp_sync_queue',JSON.stringify(remaining));
if(!remaining.length)toast('☁️ Cloud sync complete','ok');
}
}

function MEMBERSHIP_PRICING(){return{free:{monthly_cny:0,monthly_usd:0},pro:{monthly_cny:19,monthly_usd:2.88}};}


// ===== Auth =====
async function doLogin(){
 const u=document.getElementById('authUser').value.trim(),p=document.getElementById('authPass').value;
 if(!u||!p)return toast(t('needLogin'),'err');
 toast('⏳ Logging in...','ok');
 const r=await api('/api/login',{method:'POST',body:JSON.stringify({username:u,password:p})});
 if(r.ok){token=r.token;localStorage.setItem('tcp_token',token);localStorage.setItem('tcp_cred',b64Enc(u+':'+p));user=r.user;localStorage.setItem('tcp_offline_user',JSON.stringify(r.user));closeModal('authModal');updateUI();toast(t('loginSuccess'),'ok');if(IS_OFFLINE)toast('📡 Offline mode','ok')}
 else toast(r.error||t('loginFail'),'err');
}
async function doRegister(){
 const u=document.getElementById('regUser').value.trim(),p=document.getElementById('regPass').value;
 if(!u||!p)return;
 toast('⏳ Registering...','ok');
 const r=await api('/api/register',{method:'POST',body:JSON.stringify({username:u,password:p})});
 if(r.ok){token=r.token;localStorage.setItem('tcp_token',token);localStorage.setItem('tcp_cred',b64Enc(u+':'+p));user=r.user;localStorage.setItem('tcp_offline_user',JSON.stringify(r.user));closeModal('authModal');updateUI();toast(t('registerSuccess'),'ok');if(IS_OFFLINE)toast('📡 Offline mode','ok')}
 else toast(r.error||t('registerFail'),'err');
}
async function loadUser(){
  if(!token)return;
  const r=await api('/api/user');
  if(r.ok){user=r.user;updateUI();return}
  // Token expired — try auto re-login with saved credentials
  const saved=b64Dec(localStorage.getItem('tcp_cred')||'');
  if(saved){const[su,sp]=saved.split(':');if(su&&sp){
    const r2=await api('/api/login',{method:'POST',body:JSON.stringify({username:su,password:sp})});
    if(r2.ok){token=r2.token;localStorage.setItem('tcp_token',token);user=r2.user;updateUI();return}
  }}
  // Full fail — clear stale token
  token=null;localStorage.removeItem('tcp_token');updateUI();
}
function doLogout(){token=null;user=null;localStorage.removeItem('tcp_token');localStorage.removeItem('tcp_cred');localStorage.removeItem('tcp_offline_user');closeModal('authModal');resetAuthModal();updateUI();toast(t('logout'),'ok')}
function b64Enc(s){return btoa(unescape(encodeURIComponent(s)))}
function b64Dec(s){try{return decodeURIComponent(escape(atob(s)))}catch(e){return''}}

// ===== Tax Calculation =====
function calcIncome(country,annualIncome){
  const c=TAX[country];if(!c)return{};let tax=0,prev=0;
  const taxable=Math.max(0,annualIncome-c.ded);
  for(let i=0;i<c.rates.length;i++){
    const bracket=c.brackets[i]||Infinity;const amt=Math.min(taxable,bracket)-prev;
    if(amt>0)tax+=amt*c.rates[i]/100;prev=bracket;
    if(taxable<=bracket)break;
  }
  const net=annualIncome-tax;const effRate=annualIncome>0?(tax/annualIncome*100):0;
  return{annual:annualIncome,taxable,annualTax:tax,net,effRate:effRate.toFixed(1),monthly:annualIncome/12,monthlyTax:tax/12,monthlyNet:net/12,currency:c.cur,country:c.name,deduction:c.ded};
}

function calcVat(amount,rate,mode){
  if(mode==='add')return{net:amount,gross:amount*(1+rate/100),tax:amount*rate/100};
  else return{net:amount/(1+rate/100),gross:amount,tax:amount-amount/(1+rate/100)};
}

function calcMortgage(principal,ratePct,years){
  const r=ratePct/100/12;const n=years*12;
  if(r===0)return{monthly:principal/n,total:principal,nInt:0};
  const m=principal*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  const total=m*n;return{monthly:m,total:total,nInt:total-principal};
}

// ===== UI Rendering =====
function updateUI(){
 document.getElementById('brandName').textContent=t('brand');
 // Show hero cover on web (not APK)
 var hero=document.getElementById('heroCover');
 if(hero){hero.style.display=IS_APK?'none':'block';}
  const langLabels={en:'EN','zh-TW':'\u7e41','zh-CN':'\u7b80'};
  document.getElementById('langBtn').textContent='\ud83c\udf10 '+(langLabels[LANG]||'EN');
  // highlight active lang option
  document.querySelectorAll('.lang-opt').forEach(function(el){
    var l=el.getAttribute('onclick').match(/'([^']+)'/)[1];
    el.classList.toggle('active',l===LANG);
  });
const ub=document.getElementById('authBtn');
if(user){var uname=user.username.length>6?user.username.slice(0,6)+'…':user.username;ub.innerHTML='👤 '+uname;ub.title=user.username}
else{ub.innerHTML='👤 '+t('login');ub.title=''}
  // Auth modal i18n
  var at=document.getElementById('authTitle');if(at)at.textContent=t('login');
 var lt=document.getElementById('showRegBtn');if(lt)lt.textContent=t('register');
 var rt=document.getElementById('showLoginBtn');if(rt)rt.textContent=t('login');
  var ul=document.getElementById('authUserLabel');if(ul)ul.textContent=t('username');
  var pl=document.getElementById('authPassLabel');if(pl)pl.textContent=t('password');
  var lb=document.getElementById('authLoginBtn');if(lb)lb.textContent=t('login');
  var dh=document.getElementById('authDemoHint');if(dh)dh.textContent=t('demoHint');
  var rl=document.getElementById('regUserLabel');if(rl)rl.textContent=t('regUserHint');
  var rpl=document.getElementById('regPassLabel');if(rpl)rpl.textContent=t('regPassHint');
  var rb=document.getElementById('authRegBtn');if(rb)rb.textContent=t('register');
  renderTabs();renderActiveSection();renderFooter();
}

function renderTabs(){
  const tabs=[
    {id:'income',key:'tabIncome',pro:false},
    {id:'vat',key:'tabVat',pro:false},
    {id:'mortgage',key:'tabMortgage',pro:false},
    {id:'payroll',key:'tabPayroll',pro:true},
    {id:'bonus',key:'tabBonus',pro:false},
    {id:'fund',key:'tabFund',pro:false},
    {id:'compare',key:'tabCompare',pro:true},
    {id:'history',key:'tabHistory',pro:false}
  ];
  const isPro=user&&user.membership!=='free';
  document.getElementById('tabBar').innerHTML=tabs.map(function(tb){
    let cls='tab';if(tb.id===activeTab)cls+=' active';
    if(tb.pro&&!isPro)cls+=' locked';
    return '<div class="'+cls+'" onclick="switchTab(\''+tb.id+'\','+tb.pro+')">'+t(tb.key)+'<\/div>';
  }).join('');
}

function switchTab(id,pro){
  const isPro=user&&user.membership!=='free';
  if(pro&&!isPro){showUpgrade();return}
  activeTab=id;renderTabs();renderActiveSection();
}

function renderActiveSection(){
  const app=document.getElementById('appArea');app.innerHTML='';
  const fns={income:renderIncome,vat:renderVat,mortgage:renderMortgage,payroll:renderPayroll,bonus:renderBonus,fund:renderFund,compare:renderCompare,history:renderHistory};
  const fn=fns[activeTab];if(fn)fn(app);
}

function renderIncome(app){
  const keys=Object.keys(TAX);
  app.innerHTML='<div class="sec active card"><h3>'+t('tabIncome')+'<\/h3>'+
  '<div class="fg"><label>'+t('country')+'<\/label><select id="incCountry">'+keys.map(function(k){return '<option value="'+k+'">'+t(k.toLowerCase())+'<\/option>'}).join('')+'<\/select><\/div>'+
  '<div class="fg"><label>'+t('salary')+' ('+TAX[keys[0]].cur+')<\/label><input type="number" id="incSalary" value="100000"><\/div>'+
  '<div class="fg"><button class="btn btn-pri" onclick="doCalcIncome()" style="width:100%">'+t('calculate')+'<\/button><\/div>'+
  '<div id="incResult"><\/div><\/div>';
}
function doCalcIncome(){
  const c=document.getElementById('incCountry').value;
  const s=parseFloat(document.getElementById('incSalary').value)||0;
  const r=calcIncome(c,s);const cur=r.currency;
  document.getElementById('incResult').innerHTML='<div class="result">'+
  '<div class="r-big"><div class="num">'+cur+fmt(r.net)+'<\/div><div class="lbl">'+t('takeHome')+'<\/div><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('salary')+'<\/span><span class="r-val">'+cur+fmt(r.annual)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('deduction')+'<\/span><span class="r-val">'+cur+fmt(r.deduction)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('taxableIncome')+'<\/span><span class="r-val">'+cur+fmt(r.taxable)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('taxAmount')+'<\/span><span class="r-val" style="color:var(--danger)">'+cur+fmt(r.annualTax)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('effectiveRate')+'<\/span><span class="r-val">'+r.effRate+'%<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('monthlyTax')+'<\/span><span class="r-val">'+cur+fmt(r.monthlyTax)+'<\/span><\/div>'+
  '<\/div>';
  saveHistory('Income Tax',t(c.toLowerCase())+' '+cur+fmt(s));
}

function renderVat(app){
  var vatOpts='';
  var countries=[['CN','China'],['UK','UK'],['AU','Australia'],['JP','Japan'],['CA','Canada'],['HK','Hong Kong']];
  countries.forEach(function(c){
    var vats=TAX[c[0]].vat;
    if(vats&&vats.length&&vats[0].r>0){
      vatOpts+=vats.map(function(v){return '<option value="'+v.r+'">'+c[1]+' '+v.l+'<\/option>'}).join('');
    }
  });
  app.innerHTML='<div class="sec active card"><h3>'+t('tabVat')+'<\/h3>'+
  '<div class="fg"><label>'+t('amount')+'<\/label><input type="number" id="vatAmt" value="1000"><\/div>'+
  '<div class="fr"><div class="fg"><label>'+t('vatRate')+'<\/label><select id="vatRate">'+vatOpts+'<\/select><\/div>'+
  '<div class="fg"><label>Mode<\/label><select id="vatMode"><option value="add">'+t('addTax')+'<\/option><option value="remove">'+t('removeTax')+'<\/option><\/select><\/div><\/div>'+
  '<button class="btn btn-pri" onclick="doCalcVat()" style="width:100%">'+t('calculate')+'<\/button>'+
  '<div id="vatResult"><\/div><\/div>';
}
function doCalcVat(){
  const a=parseFloat(document.getElementById('vatAmt').value)||0;
  const r=parseFloat(document.getElementById('vatRate').value)||0;
  const m=document.getElementById('vatMode').value;
  const res=calcVat(a,r,m);
  document.getElementById('vatResult').innerHTML='<div class="result">'+
  '<div class="r-row"><span class="r-lbl">'+t('netIncome')+'<\/span><span class="r-val">'+fmt(res.net)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('grossIncome')+'<\/span><span class="r-val">'+fmt(res.gross)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">Tax<\/span><span class="r-val">'+fmt(res.tax)+'<\/span><\/div>'+
  '<\/div>';
  saveHistory('VAT/GST',r+'% '+fmt(a));
}

function renderMortgage(app){
  app.innerHTML='<div class="sec active card"><h3>'+t('tabMortgage')+'<\/h3>'+
  '<div class="fg"><label>'+t('loanAmt')+'<\/label><input type="number" id="mortAmt" value="500000"><\/div>'+
  '<div class="fr"><div class="fg"><label>'+t('rate')+'<\/label><input type="number" id="mortRate" value="6.5" step="0.1"><\/div>'+
  '<div class="fg"><label>'+t('termYears')+'<\/label><input type="number" id="mortTerm" value="30"><\/div><\/div>'+
  '<button class="btn btn-pri" onclick="doCalcMort()" style="width:100%">'+t('calculate')+'<\/button>'+
  '<div id="mortResult"><\/div><\/div>';
}
function doCalcMort(){
  const p=parseFloat(document.getElementById('mortAmt').value)||0;
  const r=parseFloat(document.getElementById('mortRate').value)||0;
  const y=parseInt(document.getElementById('mortTerm').value)||30;
  const res=calcMortgage(p,r,y);
  document.getElementById('mortResult').innerHTML='<div class="result">'+
  '<div class="r-big"><div class="num">$'+fmt(res.monthly)+'<\/div><div class="lbl">'+t('monthlyPay')+'<\/div><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('loanAmt')+'<\/span><span class="r-val">$'+fmt(p)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('totalInterest')+'<\/span><span class="r-val" style="color:var(--accent)">$'+fmt(res.nInt)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">Total Repaid<\/span><span class="r-val">$'+fmt(res.total)+'<\/span><\/div>'+
  '<\/div>';
  saveHistory('Mortgage','$'+fmt(p)+' '+r+'% '+y+'yr');
}

function renderPayroll(app){
 if(!payrollRows.length)payrollRows=[{name:'Alice',salary:80000},{name:'Bob',salary:120000}];
 app.innerHTML='<div class="sec active card"><h3>'+t('tabPayroll')+' 🔒</h3>'+
 '<div class="fg"><label>'+t('country')+'<\/label><select id="payCountry">'+Object.keys(TAX).map(function(k){return '<option value="'+k+'">'+t(k.toLowerCase())+'<\/option>'}).join('')+'<\/select><\/div>'+
 '<div id="payRows">'+payrollRows.map(function(r,i){return '<div class="payroll-row">'+
 '<input value="'+r.name+'" placeholder="'+t('name')+'" onchange="payrollRows['+i+'].name=this.value" style="flex:2">'+
 '<input type="number" value="'+r.salary+'" placeholder="'+t('salary')+'" onchange="payrollRows['+i+'].salary=parseFloat(this.value)||0" style="flex:3">'+
 '<button style="background:var(--err);color:#fff;border:0;border-radius:8px;padding:8px 12px;cursor:pointer;font-size:16px;font-weight:700" onclick="payrollRows.splice('+i+',1);renderActiveSection()">✕<\/button>'+
 '<\/div>'}).join('')+'<\/div>'+
 '<div style="display:flex;gap:8px;margin:10px 0">'+
 '<button class="btn btn-ghost" onclick="payrollRows.push({name:\'\',salary:0});renderActiveSection()">➕ '+t('addEmployee')+'<\/button>'+
 '<button class="btn btn-ghost" onclick="payrollRows=[{name:\'Alice\',salary:80000},{name:\'Bob\',salary:120000},{name:\'Charlie\',salary:60000}];renderActiveSection()">📥 '+t('sampleData')+'<\/button>'+
 '<\/div>'+
 '<button class="btn btn-pri" onclick="doCalcPayroll()" style="width:100%;font-size:16px;padding:14px">'+t('genPayroll')+'<\/button>'+
 '<div id="payResult"><\/div><\/div>';
}
function doCalcPayroll(){
 const c=document.getElementById('payCountry').value;
 const cur=TAX[c].cur;
 let html='<div style="margin-top:16px;overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:var(--card2)"><th style="padding:10px;text-align:left;color:var(--dim);border-bottom:2px solid var(--pri)">#<\/th><th style="padding:10px;text-align:left;color:var(--dim);border-bottom:2px solid var(--pri)">'+t('name')+'<\/th><th style="padding:10px;text-align:right;color:var(--dim);border-bottom:2px solid var(--pri)">'+t('salary')+'<\/th><th style="padding:10px;text-align:right;color:var(--dim);border-bottom:2px solid var(--pri)">'+t('taxAmount')+'<\/th><th style="padding:10px;text-align:right;color:var(--dim);border-bottom:2px solid var(--pri)">'+t('takeHome')+'<\/th><\/tr>';
 let totS=0,totT=0,totN=0;
 payrollRows.forEach(function(r,i){
  const res=calcIncome(c,r.salary);totS+=r.salary;totT+=res.annualTax;totN+=res.net;
  html+='<tr style="border-bottom:1px solid var(--border)"><td style="padding:10px;color:var(--dim)">'+(i+1)+'<\/td><td style="padding:10px;font-weight:700">'+(r.name||'-')+'<\/td><td style="padding:10px;text-align:right">'+cur+fmt(r.salary)+'<\/td><td style="padding:10px;text-align:right;color:var(--err)">'+cur+fmt(res.annualTax)+'<\/td><td style="padding:10px;text-align:right;color:var(--pri);font-weight:800">'+cur+fmt(res.net)+'<\/td><\/tr>';
 });
 html+='<tr style="background:var(--card2);font-weight:800"><td style="padding:10px"><\/td><td style="padding:10px">Total<\/td><td style="padding:10px;text-align:right">'+cur+fmt(totS)+'<\/td><td style="padding:10px;text-align:right;color:var(--err)">'+cur+fmt(totT)+'<\/td><td style="padding:10px;text-align:right;color:var(--pri)">'+cur+fmt(totN)+'<\/td><\/tr><\/table><\/div>';
 html+='<div style="display:flex;gap:8px;margin-top:12px"><button class="btn btn-ghost" onclick="exportPayrollCsv()">📄 '+t('exportCsv')+'<\/button><\/div>';
 document.getElementById('payResult').innerHTML=html;
 saveHistory('Payroll',payrollRows.length+' employees '+t(c.toLowerCase()));
}

function renderBonus(app){
  app.innerHTML='<div class="sec active card"><h3>'+t('tabBonus')+' <span class="badge badge-pro">PRO<\/span><\/h3>'+
  '<div class="fg"><label>'+t('salary')+' (Annual)<\/label><input type="number" id="bonusSalary" value="120000"><\/div>'+
  '<div class="fg"><label>'+t('bonus')+' (Annual)<\/label><input type="number" id="bonusAmt" value="30000"><\/div>'+
  '<div class="fg"><label>'+t('country')+'<\/label><select id="bonusCountry">'+Object.keys(TAX).map(function(k){return '<option value="'+k+'">'+t(k.toLowerCase())+'<\/option>'}).join('')+'<\/select><\/div>'+
  '<button class="btn btn-pri" onclick="doCalcBonus()" style="width:100%">'+t('optimize')+'<\/button>'+
  '<div id="bonusResult"><\/div><\/div>';
}
function doCalcBonus(){
  const c=document.getElementById('bonusCountry').value;
  const s=parseFloat(document.getElementById('bonusSalary').value)||0;
  const b=parseFloat(document.getElementById('bonusAmt').value)||0;
  const r1=calcIncome(c,s+b);const r2a=calcIncome(c,s);const r2b=calcIncome(c,b);
  const sepTax=r2a.annualTax+r2b.annualTax;const comTax=r1.annualTax;
  const cur=TAX[c].cur;const better=sepTax<comTax?'sep':'com';
  document.getElementById('bonusResult').innerHTML='<div class="result">'+
  '<div class="r-big"><div class="num" style="color:var(--accent)">'+(better==='sep'?'\u2713 '+t('separate'):'\u2713 '+t('combined'))+'<\/div><div class="lbl">'+t('savesMore')+' ('+cur+fmt(Math.abs(sepTax-comTax))+')<\/div><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('separate')+'<\/span><span class="r-val">'+cur+fmt(sepTax)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('combined')+'<\/span><span class="r-val">'+cur+fmt(comTax)+'<\/span><\/div>'+
  '<\/div>';
  saveHistory('Bonus Opt',cur+fmt(b));
}

function renderFund(app){
  app.innerHTML='<div class="sec active card"><h3>'+t('tabFund')+' (\ud83c\udde8\ud83c\uddf3)<\/h3>'+
  '<div class="fg"><label>'+t('salary')+' ('+t('monthly')+')<\/label><input type="number" id="fundSalary" value="15000"><\/div>'+
  '<div class="fr"><div class="fg"><label>'+t('empRate')+'<\/label><input type="number" id="fundEmpRate" value="12" min="5" max="12"><\/div>'+
  '<div class="fg"><label>'+t('corpRate')+'<\/label><input type="number" id="fundCorpRate" value="12" min="5" max="12"><\/div><\/div>'+
  '<div class="fg"><label>Max Base<\/label><input type="number" id="fundMax" value="31884"><\/div>'+
  '<button class="btn btn-pri" onclick="doCalcFund()" style="width:100%">'+t('calculate')+'<\/button>'+
  '<div id="fundResult"><\/div><\/div>';
}
function doCalcFund(){
  const s=parseFloat(document.getElementById('fundSalary').value)||0;
  const er=parseFloat(document.getElementById('fundEmpRate').value)||12;
  const cr=parseFloat(document.getElementById('fundCorpRate').value)||12;
  const mx=parseFloat(document.getElementById('fundMax').value)||31884;
  const base=Math.min(s,mx);const emp=base*er/100;const corp=base*cr/100;
  document.getElementById('fundResult').innerHTML='<div class="result">'+
  '<div class="r-big"><div class="num">\u00a5'+fmt(emp+corp)+'<\/div><div class="lbl">Monthly Total<\/div><\/div>'+
  '<div class="r-row"><span class="r-lbl">Base<\/span><span class="r-val">\u00a5'+fmt(base)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('empRate')+' ('+er+'%)<\/span><span class="r-val" style="color:var(--danger)">-\u00a5'+fmt(emp)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('corpRate')+' ('+cr+'%)<\/span><span class="r-val" style="color:var(--sec)">+\u00a5'+fmt(corp)+'<\/span><\/div>'+
  '<\/div>';
  saveHistory('Housing Fund','\u00a5'+fmt(s));
}

function renderCompare(app){
  const ks=Object.keys(TAX);
  app.innerHTML='<div class="sec active card"><h3>'+t('tabCompare')+' <span class="badge badge-pro">PRO<\/span><\/h3>'+
  '<div class="fg"><label>'+t('salary')+' (Annual)<\/label><input type="number" id="cmpSalary" value="100000"><\/div>'+
  '<div class="fr"><div class="fg"><label>'+t('countryA')+'<\/label><select id="cmpA">'+ks.map(function(k){return '<option value="'+k+'"'+(k==='US'?' selected':'')+'>'+t(k.toLowerCase())+'<\/option>'}).join('')+'<\/select><\/div>'+
  '<div class="fg"><label>'+t('countryB')+'<\/label><select id="cmpB">'+ks.map(function(k){return '<option value="'+k+'"'+(k==='UK'?' selected':'')+'>'+t(k.toLowerCase())+'<\/option>'}).join('')+'<\/select><\/div><\/div>'+
  '<button class="btn btn-pri" onclick="doCalcCompare()" style="width:100%">'+t('calculate')+'<\/button>'+
  '<div id="cmpResult"><\/div><\/div>';
}
function doCalcCompare(){
  const s=parseFloat(document.getElementById('cmpSalary').value)||0;
  const a=document.getElementById('cmpA').value,b=document.getElementById('cmpB').value;
  const ra=calcIncome(a,s),rb=calcIncome(b,s);
  const ca=TAX[a].cur,cb=TAX[b].cur;
  document.getElementById('cmpResult').innerHTML='<div class="result">'+
  '<div class="r-big"><div class="num" style="font-size:20px">'+t(a.toLowerCase())+' vs '+t(b.toLowerCase())+'<\/div><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('countryA')+' '+t('takeHome')+'<\/span><span class="r-val" style="color:var(--pri)">'+ca+fmt(ra.net)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('countryB')+' '+t('takeHome')+'<\/span><span class="r-val" style="color:var(--sec)">'+cb+fmt(rb.net)+'<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('countryA')+' '+t('effectiveRate')+'<\/span><span class="r-val">'+ra.effRate+'%<\/span><\/div>'+
  '<div class="r-row"><span class="r-lbl">'+t('countryB')+' '+t('effectiveRate')+'<\/span><span class="r-val">'+rb.effRate+'%<\/span><\/div>'+
  '<\/div>';
  saveHistory('Tax Compare',t(a.toLowerCase())+' vs '+t(b.toLowerCase()));
}

function renderHistory(app){
  app.innerHTML='<div class="sec active card"><h3>'+t('tabHistory')+' <span class="badge badge-pro">PRO<\/span><\/h3>'+
  '<button class="btn btn-dan" style="margin-bottom:12px" onclick="history=[];localStorage.setItem(\'tcp_hist\',\'[]\');renderActiveSection()">'+t('clearAll')+'<\/button>'+
  (history.length?'<table class="ptbl"><tr><th>'+t('date')+'<\/th><th>'+t('type')+'<\/th><th>Detail<\/th><\/tr>'+history.map(function(h){return '<tr><td>'+h.date+'<\/td><td>'+h.type+'<\/td><td>'+h.detail+'<\/td><\/tr>'}).join('')+'<\/table>'
  :'<p style="color:var(--dim);text-align:center;padding:20px">'+t('noHistory')+'<\/p>')+
  (history.length?'<button class="btn btn-ghost" style="margin-top:8px" onclick="exportHistoryCsv()">'+t('exportCsv')+'<\/button>':'')+
  '<\/div>';
}

// ===== Helpers =====
function fmt(n){return n==null?'0':Number(n).toLocaleString('en',{minimumFractionDigits:0,maximumFractionDigits:0})}
function saveHistory(type,detail){
  history.unshift({date:new Date().toLocaleString(),type:type,detail:detail});
  if(history.length>100)history.pop();
  localStorage.setItem('tcp_hist',JSON.stringify(history));
}
function exportPayrollCsv(){
  let csv='Name,Salary,Tax,Net\n';const c=document.getElementById('payCountry')?document.getElementById('payCountry').value:'US';const cur=TAX[c].cur;
  payrollRows.forEach(function(r){const res=calcIncome(c,r.salary);csv+=r.name+','+r.salary+','+res.annualTax.toFixed(0)+','+res.net.toFixed(0)+'\n'});
  downloadCsv(csv,'payroll.csv');
}
function exportHistoryCsv(){
  let csv='Date,Type,Detail\n';history.forEach(function(h){csv+=h.date+','+h.type+','+h.detail+'\n'});
  downloadCsv(csv,'history.csv');
}
function downloadCsv(csv,name){
  const b=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');
  a.href=URL.createObjectURL(b);a.download=name;a.click();
}

// ===== Modals =====
function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
function showAuth(){
 if(user){showUserModal();return}
 resetAuthModal();
 openModal('authModal');
}
function resetAuthModal(){
 var l=document.getElementById('authLogin'),r=document.getElementById('authRegister');
 if(!l)return;
 // Restore login form HTML
 l.innerHTML='<div class="fg"><label id="authUserLabel">'+t('username')+'</label><input id="authUser" type="text" autocomplete="username"></div>'+
 '<div class="fg"><label id="authPassLabel">'+t('password')+'</label><input id="authPass" type="password" autocomplete="current-password"></div>'+
 '<button class="btn btn-pri" style="width:100%;margin-bottom:10px" id="authLoginBtn" onclick="doLogin()">'+t('login')+'</button>'+
 '<div style="text-align:center;margin-bottom:8px"><button class="btn btn-ghost" style="font-size:13px" id="showRegBtn" onclick="toggleAuth()">'+t('register')+'</button></div>';
 l.style.display='block';
 r.innerHTML='<div class="fg"><label id="regUserLabel">'+t('username')+'</label><input id="regUser" type="text" autocomplete="username"></div>'+
 '<div class="fg"><label id="regPassLabel">'+t('password')+'</label><input id="regPass" type="password" autocomplete="new-password"></div>'+
 '<button class="btn btn-pri" style="width:100%;margin-bottom:10px" id="authRegBtn" onclick="doRegister()">'+t('register')+'</button>'+
 '<div style="text-align:center;margin-bottom:8px"><button class="btn btn-ghost" style="font-size:13px" id="showLoginBtn" onclick="toggleAuth()">'+t('login')+'</button></div>';
 r.style.display='none';
 document.getElementById('authTitle').textContent=t('login');
}
function toggleAuth(){
 var l=document.getElementById('authLogin'),r=document.getElementById('authRegister');
 if(l.style.display==='none'){
  resetAuthModal();
 }else{
  l.style.display='none';r.style.display='block';document.getElementById('authTitle').textContent=t('register');
 }
}
function showUserModal(){
 document.getElementById('authTitle').textContent=t('account');
 const m=user.membership;
 document.getElementById('authLogin').innerHTML=
 '<p style="margin:12px 0">'+t('username')+': <b>'+user.username+'<\/b> ('+t(m)+')<\/p>'+
 (m==='free'?'<button class="btn btn-pri" style="width:100%;margin:8px 0" onclick="closeModal(\'authModal\');showUpgrade()">\u2b06\ufe0f '+t('upgrade')+'<\/button>':'')+
 '<button class="btn btn-ghost" style="width:100%;color:var(--err);border-color:var(--err)" onclick="doLogout()">\ud83d\udeaa '+t('logout')+'<\/button>';
 document.getElementById('authLogin').style.display='block';
 document.getElementById('authRegister').style.display='none';
 openModal('authModal');
}
function showUpgrade(){
 if(!user){showAuth();return}
 renderPaymentModal();
 openModal('priceModal');
 startPaymentPolling();
}
function renderPaymentModal(){
 var m=user.membership;
 var isPro=m&&m!=='free';
 var html='<div style="text-align:center;margin-bottom:16px">';
 if(isPro){
 html+='<p style="color:var(--pri);font-size:18px;font-weight:800">\u2713 '+t('current')+': '+t(m)+'<\/p>';
 html+='<p style="color:var(--dim);font-size:14px">'+t('expiresAt')+': '+(user.expires_at||'-')+'<\/p>';
 html+='<\/div><button class="btn btn-ghost" style="width:100%" onclick="closeModal(\'priceModal\')">'+t('close')+'<\/button>';
 } else {
 html+='<p style="color:var(--dim);font-size:15px;margin-bottom:16px">'+t('upgradeHint')+'<\/p><\/div>';
 // Plan type - big prominent buttons
 html+='<div style="display:flex;gap:12px;margin-bottom:20px">';
 html+='<button id="planTabMonthly" onclick="switchPlanTab(\'monthly\')" style="flex:1;padding:18px 10px;font-size:22px;font-weight:900;border-radius:16px;border:2px solid var(--pri);background:var(--pri-dim);color:var(--pri);cursor:pointer;transition:all .25s;line-height:1.3">';
 html+='<div>'+t('monthly')+'<\/div><div style="font-size:28px;margin-top:4px">\u00a519<\/div><div style="font-size:12px;font-weight:500;color:var(--dim)">\/'+t('month')+'<\/div><\/button>';
 html+='<button id="planTabPerUse" onclick="switchPlanTab(\'per_use\')" style="flex:1;padding:18px 10px;font-size:22px;font-weight:900;border-radius:16px;border:2px solid var(--border);background:transparent;color:var(--dim);cursor:pointer;transition:all .25s;line-height:1.3">';
 html+='<div>'+t('perUse')+'<\/div><div style="font-size:28px;margin-top:4px">\u00a51<\/div><div style="font-size:12px;font-weight:500;color:var(--dim)">\/'+t('time')+'<\/div><\/button>';
 html+='<\/div>';
 // Pay method
 html+='<div style="display:flex;gap:10px;margin-bottom:18px">';
 html+='<button id="payTabAlipay" onclick="switchPayTab(\'alipay\')" style="flex:1;padding:14px 8px;font-size:20px;font-weight:900;border-radius:14px;border:2px solid var(--pri);background:var(--pri-dim);color:var(--pri);cursor:pointer;transition:all .2s">\u652f\u4ed8\u5b9d<\/button>';
 html+='<button id="payTabWechat" onclick="switchPayTab(\'wechat\')" style="flex:1;padding:14px 8px;font-size:20px;font-weight:900;border-radius:14px;border:2px solid var(--border);background:transparent;color:var(--dim);cursor:pointer;transition:all .2s">\u5fae\u4fe1<\/button>';
 html+='<button id="payTabPaypal" onclick="switchPayTab(\'paypal\')" style="flex:1;padding:14px 8px;font-size:20px;font-weight:900;border-radius:14px;border:2px solid var(--border);background:transparent;color:var(--dim);cursor:pointer;transition:all .2s">PayPal<\/button>';
 html+='<\/div>';
 // QR code
 html+='<div id="payQRBox" style="text-align:center;margin:12px auto">';
 html+='<img id="payQRImg" src="'+API_BASE+'/api/qr/alipay" style="width:260px;height:auto;max-height:360px;border-radius:12px;border:2px solid var(--border);display:block;margin:0 auto" onerror="this.alt=\'QR loading...\'">';
 html+='<p id="payAmtLabel" style="margin-top:12px;font-size:28px;font-weight:900;color:var(--pri)">¥19</p>';
 html+='<p id="payMethodLabel" style="color:var(--dim);font-size:18px;font-weight:700">\u652f\u4ed8\u5b9d\u626b\u7801\u4ed8\u6b3e<\/p>';
 html+='<\/div>';
 // Submit button
 html+='<button class="btn btn-pri" style="width:100%;margin-top:12px;font-size:16px;padding:14px" onclick="submitPayment()">'+t('paidAlready')+'<\/button>';
 html+='<div id="payStatus" style="text-align:center;margin-top:8px;font-size:13px;color:var(--dim)"><\/div>';
 }
 document.getElementById('priceGrid').innerHTML=html;
}
var curPayMethod='alipay',curPlanType='monthly',payPollTimer=null;
function switchPayTab(m){
 curPayMethod=m;
 var as='flex:1;padding:14px 8px;font-size:20px;font-weight:900;border-radius:14px;border:2px solid var(--pri);background:var(--pri-dim);color:var(--pri);cursor:pointer';
 var is='flex:1;padding:14px 8px;font-size:20px;font-weight:900;border-radius:14px;border:2px solid var(--border);background:transparent;color:var(--dim);cursor:pointer';
 ['alipay','wechat','paypal'].forEach(function(k){
  var el=document.getElementById('payTab'+k.charAt(0).toUpperCase()+k.slice(1));
  if(el)el.style.cssText=k===m?as:is;
 });
 var qrImg=document.getElementById('payQRImg');
 if(qrImg)qrImg.src=API_BASE+'/api/qr/'+m;
 updatePayAmount();
}
function switchPlanTab(p){
 curPlanType=p;
 var planAS='flex:1;padding:18px 10px;font-size:22px;font-weight:900;border-radius:16px;border:2px solid var(--pri);background:var(--pri-dim);color:var(--pri);cursor:pointer;transition:all .25s;line-height:1.3';
 var planIS='flex:1;padding:18px 10px;font-size:22px;font-weight:900;border-radius:16px;border:2px solid var(--border);background:transparent;color:var(--dim);cursor:pointer;transition:all .25s;line-height:1.3';
 var mEl=document.getElementById('planTabMonthly');
 var pEl=document.getElementById('planTabPerUse');
 if(mEl)mEl.style.cssText=p==='monthly'?planAS:planIS;
 if(pEl)pEl.style.cssText=p==='per_use'?planAS:planIS;
 updatePayAmount();
}
function updatePayAmount(){
 var label=document.getElementById('payAmtLabel');
 var mLabel=document.getElementById('payMethodLabel');
 if(!label)return;
 if(curPayMethod==='paypal'){
  label.textContent=curPlanType==='monthly'?'$2.88':'$0.15';
  mLabel.textContent='PayPal QR Payment';
 } else {
  label.textContent=curPlanType==='monthly'?'\u00a519':'\u00a51';
  var names={alipay:'\u652f\u4ed8\u5b9d',wechat:'\u5fae\u4fe1'};
  mLabel.textContent=(names[curPayMethod]||'')+'\u626b\u7801\u4ed8\u6b3e';
 }
}
async function submitPayment(){
 if(!user)return toast(t('needLogin'),'err');
 var statusEl=document.getElementById('payStatus');
 if(statusEl)statusEl.textContent=t('submitting');
 // 1. Submit payment record
 var r=await api('/api/submit-payment',{method:'POST',body:JSON.stringify({method:curPayMethod,plan_type:curPlanType})});
 if(r.ok&&r.payment_id){
 // 2. Verify payment → upgrade to pro
 var v=await api('/api/verify-payment/'+r.payment_id,{method:'POST'});
 if(v.ok&&v.membership==='pro'){
 if(statusEl)statusEl.innerHTML='<span style="color:#10b981;font-weight:900">✅ Pro 已激活！</span>';
 await loadUser();
 setTimeout(function(){closeModal('priceModal');toast('🎉 Pro 会员已激活！','ok');},1500);
 } else {
 if(statusEl)statusEl.innerHTML='<span style="color:var(--accent)">'+t('paymentPending')+'</span>';
 toast(t('paymentSubmitted'),'ok');
 }
 } else {
 if(statusEl)statusEl.innerHTML='<span style="color:var(--danger)">'+(r.error||t('error'))+'</span>';
 }
}
function startPaymentPolling(){
  if(payPollTimer)clearInterval(payPollTimer);
  payPollTimer=setInterval(async function(){
    if(!token)return;
    var r=await api('/api/payment-status');
    if(r.ok&&r.payments){
      var completed=r.payments.find(function(p){return p.status==='completed'});
      if(completed){
        clearInterval(payPollTimer);payPollTimer=null;
        await loadUser();
        closeModal('priceModal');
        toast(t('upgradeSuccess'),'ok');
      }
    }
  },5000);
}

// ===== Lang =====
function setLang(l){LANG=l;localStorage.setItem('tcp_lang',LANG);document.getElementById('langMenu').classList.remove('open');updateUI()}
function toggleLangDropdown(){document.getElementById('langMenu').classList.toggle('open')}
// close dropdown when clicking outside
document.addEventListener('click',function(e){if(!e.target.closest('.lang-dropdown'))document.getElementById('langMenu').classList.remove('open')});
function renderFooter(){
 document.getElementById('footerTxt').textContent=t('footerTxt');
 document.getElementById('discClick').textContent=t('discClick');
 var dt=document.getElementById('discTitle');if(dt)dt.textContent=t('disclaimer');
 var dc=document.getElementById('discText');if(dc)dc.textContent=t('discText');
 var pt=document.getElementById('privacyTitle');if(pt)pt.textContent=t('privacy');
 var pp=document.getElementById('privacyText');if(pp)pp.textContent=t('privacyTxt');
 var tt=document.getElementById('termsTitle');if(tt)tt.textContent=t('terms');
 var tp=document.getElementById('termsText');if(tp)tp.textContent=t('termsTxt');
 var pl=document.getElementById('privacyLink');if(pl)pl.textContent=t('privacy');
 var tl=document.getElementById('termsLink');if(tl)tl.textContent=t('terms');
}
function toggleDisc(){toggleModal('discModal')}
function togglePrivacy(){toggleModal('privacyModal')}
function toggleTerms(){toggleModal('termsModal')}

// ===== Toast =====
function toast(msg,cls){
  cls=cls||'ok';
  const el=document.createElement('div');el.className='toast '+cls;el.textContent=msg;
  document.body.appendChild(el);setTimeout(function(){el.remove()},3000);
}

// ===== Init =====
updateUI();loadUser();
