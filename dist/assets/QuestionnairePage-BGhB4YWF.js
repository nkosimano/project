import{c as $,r as x,j as e,C as D,a as W,B as N,X as H}from"./index-Dtva5CPq.js";import{s as F,S as O}from"./sesClient-B3mKcAev.js";import{C as V}from"./circle-check-big-Crz8lS8W.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),P=[{id:"business-type",type:"single-choice",category:"Business Overview",title:"What type of business are you?",description:"Help us understand your industry and business model",required:!0,options:[{id:"startup",text:"Startup/New Business",value:"startup"},{id:"small-business",text:"Small Business (1-50 employees)",value:"small-business"},{id:"medium-business",text:"Medium Business (51-250 employees)",value:"medium-business"},{id:"enterprise",text:"Enterprise (250+ employees)",value:"enterprise"},{id:"nonprofit",text:"Non-profit Organization",value:"nonprofit"},{id:"freelancer",text:"Freelancer/Consultant",value:"freelancer"}]},{id:"industry",type:"single-choice",category:"Business Overview",title:"Which industry best describes your business?",required:!0,options:[{id:"technology",text:"Technology & Software",value:"technology"},{id:"healthcare",text:"Healthcare & Medical",value:"healthcare"},{id:"finance",text:"Finance & Banking",value:"finance"},{id:"retail",text:"Retail & E-commerce",value:"retail"},{id:"education",text:"Education & Training",value:"education"},{id:"manufacturing",text:"Manufacturing & Industrial",value:"manufacturing"},{id:"professional",text:"Professional Services",value:"professional"},{id:"creative",text:"Creative & Design",value:"creative"},{id:"hospitality",text:"Hospitality & Tourism",value:"hospitality"},{id:"other",text:"Other",value:"other"}]},{id:"business-goals",type:"multiple-choice",category:"Business Overview",title:"What are your primary business goals for this project?",description:"Select all that apply",required:!0,options:[{id:"increase-sales",text:"Increase online sales",value:"increase-sales"},{id:"brand-awareness",text:"Build brand awareness",value:"brand-awareness"},{id:"lead-generation",text:"Generate more leads",value:"lead-generation"},{id:"customer-service",text:"Improve customer service",value:"customer-service"},{id:"internal-efficiency",text:"Increase internal efficiency",value:"internal-efficiency"},{id:"market-expansion",text:"Expand to new markets",value:"market-expansion"},{id:"digital-transformation",text:"Digital transformation",value:"digital-transformation"}]},{id:"current-website",type:"single-choice",category:"Current Situation",title:"Do you currently have a website?",required:!0,options:[{id:"no-website",text:"No, this is our first website",value:"no-website"},{id:"outdated",text:"Yes, but it's outdated and needs a complete redesign",value:"outdated"},{id:"basic",text:"Yes, but it's very basic and needs major improvements",value:"basic"},{id:"good",text:"Yes, it's decent but needs some enhancements",value:"good"},{id:"multiple",text:"We have multiple websites that need consolidation",value:"multiple"}]},{id:"current-challenges",type:"multiple-choice",category:"Current Situation",title:"What challenges are you currently facing?",description:"Select all that apply",required:!0,options:[{id:"low-traffic",text:"Low website traffic",value:"low-traffic"},{id:"poor-conversion",text:"Poor conversion rates",value:"poor-conversion"},{id:"outdated-design",text:"Outdated design and user experience",value:"outdated-design"},{id:"mobile-issues",text:"Mobile responsiveness issues",value:"mobile-issues"},{id:"slow-loading",text:"Slow loading times",value:"slow-loading"},{id:"seo-problems",text:"Poor search engine visibility",value:"seo-problems"},{id:"content-management",text:"Difficulty updating content",value:"content-management"},{id:"security-concerns",text:"Security vulnerabilities",value:"security-concerns"}]},{id:"digital-presence",type:"scale",category:"Current Situation",title:"How would you rate your current digital presence?",description:"Consider your website, social media, and online visibility",required:!0,min:1,max:10,scaleLabels:{min:"Very Poor",max:"Excellent"}},{id:"project-type",type:"single-choice",category:"Project Requirements",title:"What type of digital solution do you need?",required:!0,options:[{id:"marketing-website",text:"Marketing Website (showcase your business)",value:"marketing-website"},{id:"ecommerce",text:"E-commerce Store (sell products online)",value:"ecommerce"},{id:"web-application",text:"Web Application (custom functionality)",value:"web-application"},{id:"internal-portal",text:"Internal Portal/Intranet (team collaboration)",value:"internal-portal"},{id:"marketplace",text:"Marketplace Platform (connect buyers and sellers)",value:"marketplace"},{id:"booking-system",text:"Booking/Reservation System",value:"booking-system"},{id:"not-sure",text:"Not sure - need consultation",value:"not-sure"}]},{id:"key-features",type:"multiple-choice",category:"Project Requirements",title:"Which features are essential for your project?",description:"Select all that are important to you",required:!0,options:[{id:"contact-forms",text:"Contact forms and lead capture",value:"contact-forms"},{id:"online-payments",text:"Online payment processing",value:"online-payments"},{id:"user-accounts",text:"User registration and accounts",value:"user-accounts"},{id:"content-management",text:"Easy content management system",value:"content-management"},{id:"search-functionality",text:"Advanced search functionality",value:"search-functionality"},{id:"social-integration",text:"Social media integration",value:"social-integration"},{id:"analytics",text:"Analytics and reporting",value:"analytics"},{id:"multilingual",text:"Multi-language support",value:"multilingual"},{id:"api-integration",text:"Third-party API integrations",value:"api-integration"},{id:"mobile-app",text:"Mobile app companion",value:"mobile-app"}]},{id:"target-audience",type:"textarea",category:"Project Requirements",title:"Describe your target audience",description:"Who are your ideal customers? Include demographics, interests, and behaviors.",required:!0,placeholder:"e.g., Small business owners aged 30-50 who are looking for digital solutions to grow their business..."},{id:"design-style",type:"single-choice",category:"Design & User Experience",title:"What design style appeals to you most?",required:!0,options:[{id:"modern-minimal",text:"Modern & Minimalist",value:"modern-minimal"},{id:"bold-creative",text:"Bold & Creative",value:"bold-creative"},{id:"professional-corporate",text:"Professional & Corporate",value:"professional-corporate"},{id:"warm-friendly",text:"Warm & Friendly",value:"warm-friendly"},{id:"luxury-premium",text:"Luxury & Premium",value:"luxury-premium"},{id:"playful-fun",text:"Playful & Fun",value:"playful-fun"},{id:"classic-timeless",text:"Classic & Timeless",value:"classic-timeless"}]},{id:"color-preferences",type:"multiple-choice",category:"Design & User Experience",title:"Which color schemes do you prefer?",description:"Select up to 3 options",required:!0,options:[{id:"blue-trust",text:"Blues (trust, professionalism)",value:"blue-trust"},{id:"green-growth",text:"Greens (growth, nature)",value:"green-growth"},{id:"red-energy",text:"Reds (energy, passion)",value:"red-energy"},{id:"purple-luxury",text:"Purples (luxury, creativity)",value:"purple-luxury"},{id:"orange-enthusiasm",text:"Oranges (enthusiasm, warmth)",value:"orange-enthusiasm"},{id:"neutral-sophisticated",text:"Neutrals (sophisticated, timeless)",value:"neutral-sophisticated"},{id:"monochrome",text:"Black & White (classic, bold)",value:"monochrome"}]},{id:"user-experience-priority",type:"scale",category:"Design & User Experience",title:"How important is cutting-edge user experience to you?",description:"Consider animations, interactions, and modern web features",required:!0,min:1,max:10,scaleLabels:{min:"Simple is fine",max:"Must be cutting-edge"}},{id:"technical-complexity",type:"single-choice",category:"Technical Requirements",title:"What level of technical complexity do you need?",required:!0,options:[{id:"simple",text:"Simple - Basic website with standard features",value:"simple"},{id:"moderate",text:"Moderate - Some custom features and integrations",value:"moderate"},{id:"complex",text:"Complex - Advanced functionality and custom development",value:"complex"},{id:"enterprise",text:"Enterprise - Highly complex with multiple systems integration",value:"enterprise"}]},{id:"integrations-needed",type:"multiple-choice",category:"Technical Requirements",title:"Which third-party integrations do you need?",description:"Select all that apply",required:!1,options:[{id:"crm",text:"CRM System (Salesforce, HubSpot, etc.)",value:"crm"},{id:"email-marketing",text:"Email Marketing (Mailchimp, Constant Contact)",value:"email-marketing"},{id:"payment-gateways",text:"Payment Gateways (Stripe, PayPal)",value:"payment-gateways"},{id:"inventory",text:"Inventory Management Systems",value:"inventory"},{id:"accounting",text:"Accounting Software (QuickBooks, Xero)",value:"accounting"},{id:"social-media",text:"Social Media Platforms",value:"social-media"},{id:"analytics",text:"Analytics Tools (Google Analytics, etc.)",value:"analytics"},{id:"booking",text:"Booking/Scheduling Systems",value:"booking"}]},{id:"performance-requirements",type:"scale",category:"Technical Requirements",title:"How critical is website performance and speed?",description:"Consider your audience and business needs",required:!0,min:1,max:10,scaleLabels:{min:"Standard is fine",max:"Must be lightning fast"}},{id:"timeline",type:"single-choice",category:"Timeline & Budget",title:"What is your ideal project timeline?",required:!0,options:[{id:"asap",text:"ASAP - We need this urgently",value:"asap"},{id:"1-month",text:"1 Month - Quick turnaround needed",value:"1-month"},{id:"2-3-months",text:"2-3 Months - Standard timeline",value:"2-3-months"},{id:"3-6-months",text:"3-6 Months - We can wait for quality",value:"3-6-months"},{id:"flexible",text:"Flexible - Quality over speed",value:"flexible"}]},{id:"budget-range",type:"single-choice",category:"Timeline & Budget",title:"What is your budget range for this project?",required:!0,options:[{id:"under-10k",text:"Under R 10,000",value:"under-10k"},{id:"10k-25k",text:"R 10,000 - R 25,000",value:"10k-25k"},{id:"25k-50k",text:"R 25,000 - R 50,000",value:"25k-50k"},{id:"50k-100k",text:"R 50,000 - R 100,000",value:"50k-100k"},{id:"over-100k",text:"Over R 100,000",value:"over-100k"},{id:"discuss",text:"Let's discuss based on requirements",value:"discuss"}]},{id:"budget-flexibility",type:"scale",category:"Timeline & Budget",title:"How flexible is your budget?",description:"If we recommend additional features that would benefit your project",required:!0,min:1,max:10,scaleLabels:{min:"Fixed budget",max:"Very flexible"}},{id:"inspiration",type:"textarea",category:"Additional Information",title:"Do you have any websites that inspire you?",description:"Share URLs or describe websites you admire and why",required:!1,placeholder:"e.g., I love the clean design of Apple.com and the user experience of Airbnb..."},{id:"special-requirements",type:"textarea",category:"Additional Information",title:"Any special requirements or concerns?",description:"Accessibility needs, compliance requirements, unique challenges, etc.",required:!1,placeholder:"e.g., Must be GDPR compliant, needs to work with screen readers, integration with legacy system..."},{id:"success-metrics",type:"textarea",category:"Additional Information",title:"How will you measure the success of this project?",description:"What specific outcomes are you hoping to achieve?",required:!0,placeholder:"e.g., Increase online inquiries by 50%, improve user engagement, reduce bounce rate..."},{id:"contact-info",type:"contact",category:"Contact Information",title:"Your Contact Information",description:"We'll use this to send you a personalized proposal",required:!0}],A={currentQuestionIndex:0,responses:[],isComplete:!1,isSubmitting:!1,showSuccessModal:!1},X=()=>{const[t,s]=x.useState(A),[a,l]=x.useState({name:"",email:"",company:"",phone:""}),d=P[t.currentQuestionIndex],m=P.length,h=(t.currentQuestionIndex+1)/m*100,C=x.useCallback((n,r)=>{s(c=>{const v=c.responses.findIndex(b=>b.questionId===n),u={questionId:n,answer:r,timestamp:new Date};let p;return v>=0?(p=[...c.responses],p[v]=u):p=[...c.responses,u],{...c,responses:p}})},[]),_=x.useCallback(n=>{l(r=>({...r,...n}))},[]),f=x.useCallback(()=>{s(n=>{const r=n.currentQuestionIndex+1;return{...n,currentQuestionIndex:r,isComplete:r>=m}})},[m]),S=x.useCallback(()=>{s(n=>({...n,currentQuestionIndex:Math.max(0,n.currentQuestionIndex-1)}))},[]),I=x.useCallback(n=>{s(r=>({...r,currentQuestionIndex:Math.max(0,Math.min(n,m-1))}))},[m]),o=x.useCallback(n=>{var r;return(r=t.responses.find(c=>c.questionId===n))==null?void 0:r.answer},[t.responses]),q=x.useCallback(()=>{if(!d)return!1;if(d.type==="contact")return!!(a.name&&a.email&&a.company);const n=o(d.id);return d.required?Array.isArray(n)?n.length>0:n!==void 0&&n!==""&&n!==null:!0},[d,o,a]),B=x.useCallback(()=>{const n=P.reduce((c,v)=>{c[v.category]||(c[v.category]=[]);const u=t.responses.find(p=>p.questionId===v.id);return(u||v.type==="contact")&&c[v.category].push({question:v,response:v.type==="contact"?a:u}),c},{});let r=`
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RuleRev - New Discovery Submission</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: #f8fafc;
            background: linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 100%);
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 50%, #20b2aa 100%);
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            color: #1e293b;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            color: #334155;
            font-size: 16px;
        }
        .content {
            padding: 30px;
        }
        .contact-info {
            background: rgba(0, 245, 255, 0.1);
            border: 1px solid rgba(0, 245, 255, 0.2);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
        }
        .contact-info h2 {
            margin: 0 0 15px 0;
            color: #00f5ff;
            font-size: 20px;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .contact-item {
            display: flex;
            flex-direction: column;
        }
        .contact-label {
            font-size: 12px;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .contact-value {
            font-size: 16px;
            color: #f8fafc;
            font-weight: 500;
        }
        .section {
            margin-bottom: 40px;
        }
        .section-title {
            color: #00f5ff;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #00f5ff;
            display: inline-block;
        }
        .question-item {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 15px;
            border-left: 4px solid #1e90ff;
        }
        .question-title {
            color: #cbd5e1;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .question-answer {
            color: #f8fafc;
            font-size: 15px;
            line-height: 1.5;
        }
        .scale-answer {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #00f5ff 0%, #1e90ff 100%);
            color: #1e293b;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 600;
            margin-right: 10px;
        }
        .multiple-choice {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .choice-tag {
            background: rgba(30, 144, 255, 0.2);
            color: #87ceeb;
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 14px;
            border: 1px solid rgba(30, 144, 255, 0.3);
        }
        .footer {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px 30px;
            text-align: center;
            color: #94a3b8;
            font-size: 14px;
        }
        .timestamp {
            color: #64748b;
            font-size: 12px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>RuleRev - New Project Inquiry</h1>
            <p>Comprehensive Discovery Submission</p>
        </div>
        
        <div class="content">
            <div class="contact-info">
                <h2>Contact Information</h2>
                <div class="contact-grid">
                    <div class="contact-item">
                        <div class="contact-label">Name</div>
                        <div class="contact-value">${a.name}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Email</div>
                        <div class="contact-value">${a.email}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Company</div>
                        <div class="contact-value">${a.company}</div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-label">Phone</div>
                        <div class="contact-value">${a.phone||"Not provided"}</div>
                    </div>
                </div>
            </div>
    `;return Object.entries(n).forEach(([c,v])=>{c!=="Contact Information"&&(r+=`
            <div class="section">
                <h2 class="section-title">${c}</h2>
      `,v.forEach(({question:u,response:p})=>{var R;if(!p)return;let b="";if(u.type==="scale")b=`<span class="scale-answer">${p.answer}/10</span>`,u.scaleLabels&&(b+=`<span style="color: #94a3b8; font-size: 14px;">(${u.scaleLabels.min} → ${u.scaleLabels.max})</span>`);else if(u.type==="multiple-choice"){const k=p.answer;b='<div class="multiple-choice">',k.forEach(T=>{var L;const Q=(L=u.options)==null?void 0:L.find(z=>z.value===T);b+=`<span class="choice-tag">${(Q==null?void 0:Q.text)||T}</span>`}),b+="</div>"}else if(u.type==="single-choice"){const k=(R=u.options)==null?void 0:R.find(T=>T.value===p.answer);b=`<div class="question-answer">${(k==null?void 0:k.text)||p.answer}</div>`}else b=`<div class="question-answer">${String(p.answer).replace(/\n/g,"<br>")}</div>`;r+=`
                <div class="question-item">
                    <div class="question-title">${u.title}</div>
                    ${b}
                    <div class="timestamp">Answered: ${new Date(p.timestamp).toLocaleString()}</div>
                </div>
        `}),r+="</div>")}),r+=`
        </div>
        
        <div class="footer">
            <p>This discovery was submitted through the RuleRev website.</p>
            <p>Submission Date: ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
    `,r},[t.responses,a]),M=x.useCallback(async()=>{s(n=>({...n,isSubmitting:!0}));try{const n=B();if(await F({contactInfo:a,responses:t.responses,emailContent:n}))s(c=>({...c,isSubmitting:!1,showSuccessModal:!0}));else throw new Error("Failed to send discovery email")}catch(n){console.error("Error submitting discovery:",n),s(r=>({...r,isSubmitting:!1}))}},[t.responses,a,B]),E=x.useCallback(()=>{s(n=>({...n,showSuccessModal:!1}))},[]),G=x.useCallback(()=>{s(A),l({name:"",email:"",company:"",phone:""})},[]);return{state:t,contactInfo:a,currentQuestion:d,totalQuestions:m,progress:h,updateResponse:C,updateContactInfo:_,nextQuestion:f,previousQuestion:S,goToQuestion:I,getCurrentResponse:o,isCurrentQuestionAnswered:q,submitQuestionnaire:M,closeSuccessModal:E,resetQuestionnaire:G}},J="_questionCard_15g6y_6",K="_questionBody_15g6y_13",Z="_questionHeader_15g6y_20",ee="_categoryTag_15g6y_24",te="_questionTitle_15g6y_37",se="_required_15g6y_44",ie="_questionDescription_15g6y_49",ae="_questionContent_15g6y_56",ne="_choiceGrid_15g6y_67",oe="_choiceButton_15g6y_73",re="_scaleContainer_15g6y_91",le="_scaleLabels_15g6y_99",ce="_scaleLabel_15g6y_99",de="_scaleSlider_15g6y_112",ue="_slider_15g6y_121",me="_scaleValue_15g6y_152",pe="_textInput_15g6y_166",xe="_textarea_15g6y_167",ge="_contactForm_15g6y_202",he="_contactGrid_15g6y_206",ve="_formGroup_15g6y_212",ye="_label_15g6y_218",i={questionCard:J,questionBody:K,questionHeader:Z,categoryTag:ee,questionTitle:te,required:se,questionDescription:ie,questionContent:ae,choiceGrid:ne,choiceButton:oe,scaleContainer:re,scaleLabels:le,scaleLabel:ce,scaleSlider:de,slider:ue,scaleValue:me,textInput:pe,textarea:xe,contactForm:ge,contactGrid:he,formGroup:ve,label:ye},fe=({question:t,response:s,contactInfo:a,onResponseChange:l,onContactInfoChange:d})=>{const m=()=>{var h,C,_,f;switch(t.type){case"single-choice":return e.jsx("div",{className:i.choiceGrid,children:(h=t.options)==null?void 0:h.map(o=>e.jsx(N,{variant:s===o.value?"accent":"glass",className:i.choiceButton,onClick:()=>l(t.id,o.value),children:o.text},o.id))});case"multiple-choice":const S=Array.isArray(s)?s:[];return e.jsx("div",{className:i.choiceGrid,children:(C=t.options)==null?void 0:C.map(o=>{const q=S.includes(o.value);return e.jsx(N,{variant:q?"accent":"glass",className:i.choiceButton,onClick:()=>{const B=q?S.filter(M=>M!==o.value):[...S,o.value];l(t.id,B)},children:o.text},o.id)})});case"scale":const I=typeof s=="number"?s:t.min||1;return e.jsxs("div",{className:i.scaleContainer,children:[e.jsxs("div",{className:i.scaleLabels,children:[e.jsx("span",{className:i.scaleLabel,children:(_=t.scaleLabels)==null?void 0:_.min}),e.jsx("span",{className:i.scaleLabel,children:(f=t.scaleLabels)==null?void 0:f.max})]}),e.jsxs("div",{className:i.scaleSlider,children:[e.jsx("input",{type:"range",min:t.min||1,max:t.max||10,value:I,onChange:o=>l(t.id,parseInt(o.target.value)),className:i.slider}),e.jsxs("div",{className:i.scaleValue,children:[I," / ",t.max||10]})]})]});case"text":return e.jsx("input",{type:"text",value:typeof s=="string"?s:"",onChange:o=>l(t.id,o.target.value),placeholder:t.placeholder,className:i.textInput});case"textarea":return e.jsx("textarea",{value:typeof s=="string"?s:"",onChange:o=>l(t.id,o.target.value),placeholder:t.placeholder,rows:6,className:i.textarea});case"contact":return e.jsx("div",{className:i.contactForm,children:e.jsxs("div",{className:i.contactGrid,children:[e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{className:i.label,children:"Full Name *"}),e.jsx("input",{type:"text",value:a.name,onChange:o=>d({name:o.target.value}),className:i.textInput,placeholder:"Your full name",required:!0})]}),e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{className:i.label,children:"Email Address *"}),e.jsx("input",{type:"email",value:a.email,onChange:o=>d({email:o.target.value}),className:i.textInput,placeholder:"your.email@example.com",required:!0})]}),e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{className:i.label,children:"Company Name *"}),e.jsx("input",{type:"text",value:a.company,onChange:o=>d({company:o.target.value}),className:i.textInput,placeholder:"Your company name",required:!0})]}),e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{className:i.label,children:"Phone Number"}),e.jsx("input",{type:"tel",value:a.phone,onChange:o=>d({phone:o.target.value}),className:i.textInput,placeholder:"+27 (0) 61 450 9800"})]})]})});default:return e.jsx("div",{children:"Unsupported question type"})}};return e.jsx(D,{variant:"elevated",className:i.questionCard,children:e.jsxs(W,{className:i.questionBody,children:[e.jsxs("div",{className:i.questionHeader,children:[e.jsx("div",{className:i.categoryTag,children:t.category}),e.jsxs("h2",{className:i.questionTitle,children:[t.title,t.required&&e.jsx("span",{className:i.required,children:"*"})]}),t.description&&e.jsx("p",{className:i.questionDescription,children:t.description})]}),e.jsx("div",{className:i.questionContent,children:m()})]})})},be="_progressContainer_1r1tm_6",_e="_progressBar_1r1tm_20",we="_progressFill_1r1tm_30",Ce="_progressText_1r1tm_49",je="_currentStep_1r1tm_57",Ne="_percentage_1r1tm_63",ke="_stepIndicators_1r1tm_71",Se="_stepIndicator_1r1tm_71",Ie="_clickable_1r1tm_95",qe="_completed_1r1tm_105",Be="_active_1r1tm_111",Te="_moreIndicator_1r1tm_119",y={progressContainer:be,progressBar:_e,progressFill:we,progressText:Ce,currentStep:je,percentage:Ne,stepIndicators:ke,stepIndicator:Se,clickable:Ie,completed:qe,active:Be,moreIndicator:Te},Me=({current:t,total:s,progress:a,onStepClick:l})=>e.jsxs("div",{className:y.progressContainer,children:[e.jsx("div",{className:y.progressBar,children:e.jsx("div",{className:y.progressFill,style:{width:`${a}%`}})}),e.jsxs("div",{className:y.progressText,children:[e.jsxs("span",{className:y.currentStep,children:["Question ",t," of ",s]}),e.jsxs("span",{className:y.percentage,children:[Math.round(a),"% Complete"]})]}),e.jsxs("div",{className:y.stepIndicators,children:[Array.from({length:Math.min(s,10)},(d,m)=>{const h=m+1,C=h===t,_=h<t,f=h<=t;return e.jsx("button",{className:`${y.stepIndicator} ${C?y.active:""} ${_?y.completed:""} ${f?y.clickable:""}`,onClick:()=>f&&l(m),disabled:!f,"aria-label":`Go to question ${h}`,children:_?"✓":h},m)}),s>10&&e.jsxs("span",{className:y.moreIndicator,children:["+",s-10," more"]})]})]}),Qe="_navigationControls_4sor9_6",Pe="_controlsContainer_4sor9_16",Re="_leftControls_4sor9_23",Le="_centerInfo_4sor9_28",Ae="_rightControls_4sor9_33",$e="_questionCounter_4sor9_38",De="_submitButton_4sor9_48",We="_proceedHint_4sor9_67",Ee="_hintText_4sor9_76",w={navigationControls:Qe,controlsContainer:Pe,leftControls:Re,centerInfo:Le,rightControls:Ae,questionCounter:$e,submitButton:De,proceedHint:We,hintText:Ee},Ge=({currentIndex:t,totalQuestions:s,canProceed:a,isSubmitting:l,isComplete:d,onPrevious:m,onNext:h,onSubmit:C})=>{const _=t===0,f=t===s-1;return e.jsxs("div",{className:w.navigationControls,children:[e.jsxs("div",{className:w.controlsContainer,children:[e.jsx("div",{className:w.leftControls,children:!_&&e.jsx(N,{variant:"ghost",leftIcon:e.jsx(U,{size:20}),onClick:m,disabled:l,children:"Previous"})}),e.jsx("div",{className:w.centerInfo,children:e.jsxs("span",{className:w.questionCounter,children:[t+1," of ",s]})}),e.jsx("div",{className:w.rightControls,children:f?e.jsx(N,{variant:"accent",size:"large",rightIcon:l?void 0:e.jsx(O,{size:20}),onClick:C,disabled:!a||l,loading:l,className:w.submitButton,children:l?"Submitting...":"Submit Discovery"}):e.jsx(N,{variant:a?"accent":"ghost",rightIcon:e.jsx(Y,{size:20}),onClick:h,disabled:!a,children:"Next Question"})})]}),!a&&e.jsx("div",{className:w.proceedHint,children:e.jsx("p",{className:w.hintText,children:"Please answer this question to continue"})})]})},ze="_modalOverlay_15vr0_6",He="_modal_15vr0_6",Fe="_modalBody_15vr0_29",Oe="_closeButton_15vr0_35",Ve="_icon_15vr0_53",Ue="_title_15vr0_61",Ye="_content_15vr0_71",Xe="_message_15vr0_76",Je="_nextSteps_15vr0_83",Ke="_nextStepsTitle_15vr0_90",Ze="_stepsList_15vr0_96",et="_actions_15vr0_119",tt="_homeButton_15vr0_126",g={modalOverlay:ze,modal:He,modalBody:Fe,closeButton:Oe,icon:Ve,title:Ue,content:Ye,message:Xe,nextSteps:Je,nextStepsTitle:Ke,stepsList:Ze,actions:et,homeButton:tt},st=({onClose:t})=>e.jsx("div",{className:g.modalOverlay,onClick:t,children:e.jsx(D,{variant:"elevated",className:g.modal,onClick:s=>s.stopPropagation(),children:e.jsxs(W,{className:g.modalBody,children:[e.jsx("button",{className:g.closeButton,onClick:t,"aria-label":"Close modal",children:e.jsx(H,{size:24})}),e.jsx("div",{className:g.icon,children:e.jsx(V,{size:64})}),e.jsx("h2",{className:g.title,children:"Discovery Submitted Successfully!"}),e.jsxs("div",{className:g.content,children:[e.jsx("p",{className:g.message,children:"Thank you for taking the time to complete our comprehensive discovery process. Your detailed responses will help us create the perfect digital solution for your needs."}),e.jsxs("div",{className:g.nextSteps,children:[e.jsx("h3",{className:g.nextStepsTitle,children:"What happens next?"}),e.jsxs("ul",{className:g.stepsList,children:[e.jsx("li",{children:"We'll review your responses within 24 hours"}),e.jsx("li",{children:"Our team will prepare a personalized proposal"}),e.jsx("li",{children:"We'll schedule a consultation call to discuss your project"}),e.jsx("li",{children:"Together, we'll refine the perfect solution for you"})]})]})]}),e.jsxs("div",{className:g.actions,children:[e.jsx(N,{variant:"accent",onClick:()=>window.location.href="/",className:g.homeButton,children:"Return to Homepage"}),e.jsx(N,{variant:"ghost",onClick:t,children:"Close"})]})]})})}),it="_discoveryPage_stdwm_6",at="_header_stdwm_13",nt="_title_stdwm_21",ot="_subtitle_stdwm_31",rt="_content_stdwm_40",lt="_questionContainer_stdwm_45",ct="_errorState_stdwm_50",j={discoveryPage:it,header:at,title:nt,subtitle:ot,content:rt,questionContainer:lt,errorState:ct},pt=()=>{const t=X(),{state:s,currentQuestion:a,totalQuestions:l,progress:d}=t;return a?e.jsx("div",{className:j.discoveryPage,children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:j.header,children:[e.jsx("h1",{className:j.title,children:"Project Discovery"}),e.jsx("p",{className:j.subtitle,children:"Help us understand your needs so we can create the perfect solution for you."}),e.jsx(Me,{current:s.currentQuestionIndex+1,total:l,progress:d,onStepClick:t.goToQuestion})]}),e.jsxs("div",{className:j.content,children:[e.jsx("div",{className:j.questionContainer,children:e.jsx(fe,{question:a,response:t.getCurrentResponse(a.id),contactInfo:t.contactInfo,onResponseChange:t.updateResponse,onContactInfoChange:t.updateContactInfo})}),e.jsx(Ge,{currentIndex:s.currentQuestionIndex,totalQuestions:l,canProceed:t.isCurrentQuestionAnswered(),isSubmitting:s.isSubmitting,isComplete:s.isComplete,onPrevious:t.previousQuestion,onNext:t.nextQuestion,onSubmit:t.submitQuestionnaire})]}),s.showSuccessModal&&e.jsx(st,{onClose:t.closeSuccessModal})]})}):e.jsx("div",{className:j.discoveryPage,children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:j.errorState,children:[e.jsx("h1",{children:"Discovery Complete"}),e.jsx("p",{children:"Thank you for your responses!"})]})})})};export{pt as QuestionnairePage};
