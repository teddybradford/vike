import{j as e,a as c,i as C,L as z,o as V}from"../chunks/chunk-II4nLrbZ.js";import{L as a}from"../chunks/chunk-xfD1o6Zt.js";/* empty css                      */import{a as P}from"../chunks/chunk-CaAxhSTQ.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DVHWICYK.js";import{O as L}from"../chunks/chunk-7j5OQDDi.js";/* empty css                      *//* empty css                      *//* empty css                      */const v="#a00",T="#0a0",O="#e90";function x(){return e.jsx(e.Fragment,{children:" |"})}function A(){return e.jsx("span",{style:{color:T,fontSize:"1.9em",display:"block"},children:"✓"})}function R(){return e.jsx("span",{style:{color:v,fontSize:"1.6em",display:"block"},children:"✗"})}function N({value:i}){const o=p(),r=D(i);return e.jsx("div",{className:"value-gauge",style:{height:9,borderWidth:1,borderStyle:"solid",borderColor:"#ddd",borderRadius:10,display:"flex",padding:"1px 2px"},children:e.jsx("div",{style:{height:"100%",width:o,backgroundColor:r,borderRadius:10}})});function p(){return c(i>0&&i<100),"calc("+i/100+" * 100%)"}}function D(i){return c(i>0&&i<100),i<50?v:i>=75?T:O}function m({name:i,children:n}){return e.jsxs(e.Fragment,{children:[e.jsx("em",{children:i}),": ",n]})}function _({entries:i,skip_links:n}){return e.jsx("div",{className:"values-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(r,{children:""}),e.jsx(r,{children:"Trans­parent"}),e.jsx(r,{children:"Fork­able"}),e.jsx(r,{children:"Access­ible"}),e.jsx(r,{children:"Sustai­nable"}),e.jsx(r,{children:"Inde­pendent"})]})}),e.jsx("tbody",{children:i.map((s,d)=>e.jsx(o,{...s},d))})]})});function o({modelName:s,transparent:d,forkable:u,accessible:y,independent:F,sustainable:I}){return e.jsxs("tr",{children:[e.jsx(t,{children:s}),e.jsx(t,{children:e.jsx(l,{val:d})}),e.jsx(t,{children:e.jsx(l,{val:u})}),e.jsx(t,{children:e.jsx(l,{val:y})}),e.jsx(t,{children:e.jsx(l,{val:I})}),e.jsx(t,{children:e.jsx(l,{val:F})})]})}function r({children:s,...d}){if(c(Object.keys(d).length===0),!s)return e.jsx("th",{});const u=s,y=n?u:e.jsx("a",{href:p(u),children:u});return e.jsx("th",{align:"center",children:y})}function p(s){return c(s.constructor===String),c(!s.includes("&shy;"),{value_name:s}),c(!s.includes("%C2%AD"),{value_name:s}),"/values"}function t({children:s}){return e.jsx("td",{align:"center",children:s})}function l({val:s}){return c(0<=s&&s<=1),s===1?e.jsx(A,{}):s===0?e.jsx(R,{}):e.jsx(N,{value:s*100})}}function E(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Transparent"}),": anyone can read the code."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Forkable"}),": anyone can modify the code and publish its own version."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Accessible"}),": anyone can use the code, no matter how much money at disposal."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Sustainable"}),": the project's developers are financially supported."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Independent"}),": the project isn't influenced by outside interests."]})]})})}function f(i){const n={li:"li",p:"p",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(_,{entries:[{modelName:e.jsx(e.Fragment,{children:"Open Source Pricing"}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(x,{})," Donations"]}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:.3},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(x,{})," Company Backed"]}),transparent:1,forkable:1,accessible:1,independent:0,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(x,{})," Open Core"]}),transparent:.7,forkable:.7,accessible:.7,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(x,{})," Public Source"]}),transparent:1,forkable:0,accessible:.45,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(x,{})," Closed Source"]}),transparent:0,forkable:0,accessible:.45,independent:1,sustainable:1}],skip_links:!0}),`
`,e.jsx(n.p,{children:"Values:"}),`
`,e.jsx(E,{}),`
`,e.jsx(n.p,{children:"Business Models:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(m,{name:"Open Source | Donations",children:"some projects, due to their very high number of users and low developing cost, can sustain solely on donations."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(m,{name:"Open Source | Company Backed",children:"a company open sourcing some of its internal tool."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(m,{name:"Open Source | Open Core",children:"the code is open source but some extensions/features are proprietary."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(m,{name:"Proprietary | Public Source",children:"proprietary but the code is publicly available to be read."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(m,{name:"Proprietary | Closed Source",children:"closed sourced, not forkable, usually expensive."}),`
`]}),`
`]})]})}function M(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(f,{...i})}):f(i)}const h={table:{borderCollapse:"collapse",width:"100%",maxWidth:"600px",textAlign:"center",fontFamily:"Arial, sans-serif",border:"1px solid #ddd"},cell:{padding:"15px 35px",border:"1px solid #ddd",fontSize:"16px"},subtext:{fontSize:"12px",fontWeight:"normal",color:"#6b7280"},priceContainer:{display:"flex",alignItems:"baseline",whiteSpace:"nowrap",justifyContent:"center",gap:"5px"},priceSubtext:{fontSize:"13px",color:"#6b7280"},recommendation:{fontSize:"12px",color:"#666",marginTop:"2px"}},b=[["0-50","50-100","100-200"],["50-100","100-200","200-500"],["100-200","200-500","500-2000"]],w=["Small organization","Midsize organization","Large organization"],g=["≤2 regular committers","Hobby use case"],W=["Small use case","Midsize use case","Large use case"],j=g.concat(W);function q(){return e.jsx("table",{style:h.table,children:e.jsx("tbody",{children:k(j.length+1).map(i=>e.jsx("tr",{children:k(w.length+1).map(n=>{let o="",r=h.cell;if(i===0&&n>0)o=w[n-1];else if(n===0&&i>0)o=e.jsxs(e.Fragment,{children:[j[i-1],j[i-1]!=="≤2 regular committers"&&e.jsx("div",{style:h.subtext,children:"≥3 regular committers"})]}),r={...r,whiteSpace:"nowrap",textAlign:"left"};else if(i>0&&n>0){const p=j[i-1];if(g.includes(p))o=e.jsx("b",{children:"Free"});else{const t=i-g.length-1;if(t>=0&&t<b.length){const l=b[t][n-1];o=e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:h.priceContainer,children:[e.jsx("b",{children:`${l}$`}),e.jsx("span",{style:h.priceSubtext,children:"/ month"})]}),e.jsx("div",{style:h.recommendation,children:"Recommendation"})]})}}}return e.jsx("td",{style:r,children:o},n)})},i))})})}function k(i){return Array.from({length:i},(n,o)=>o)}const U=[{pageSectionId:"pricing",pageSectionLevel:4,pageSectionTitle:"Pricing"},{pageSectionId:"open-source-pricing",pageSectionLevel:4,pageSectionTitle:"Open Source Pricing"},{pageSectionId:"who-pays-and-how-much",pageSectionLevel:2,pageSectionTitle:"Who pays and how much?"},{pageSectionId:"free-tier",pageSectionLevel:3,pageSectionTitle:"Free tier"},{pageSectionId:"recommendation",pageSectionLevel:3,pageSectionTitle:"Recommendation"},{pageSectionId:"do-sponsors-have-to-pay",pageSectionLevel:2,pageSectionTitle:"Do sponsors have to pay?"},{pageSectionId:"how-does-it-apply-to-monorepos",pageSectionLevel:2,pageSectionTitle:"How does it apply to monorepos?"},{pageSectionId:"how-does-it-work",pageSectionLevel:2,pageSectionTitle:"How does it work?"},{pageSectionId:"why-zero-investors",pageSectionLevel:2,pageSectionTitle:"Why zero-investors?"},{pageSectionId:"is-vike-still-free-software",pageSectionLevel:2,pageSectionTitle:"Is Vike still Free Software?"},{pageSectionId:"why-not-another-business-model",pageSectionLevel:2,pageSectionTitle:"Why not another business model?"}];function S(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:"The Open Source Pricing isn't implemented yet."}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:37,marginBottom:30},children:e.jsx("img",{src:L,style:{maxWidth:"100%"}})}),`
`,e.jsxs(n.p,{children:["Vike will soon introduce what we call an ",e.jsx(n.em,{children:"Open Source Pricing"}),": a new kind of business model that keeps Vike open source, as well as accessible (so that everyone, regardless of financial resources, can use Vike)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The entire code ",e.jsx(n.strong,{children:"stays 100% open source"})," (MIT License)."]}),`
`,e.jsxs(n.li,{children:["Everything ",e.jsx(n.strong,{children:"stays 100% gratis for engineers"}),". You don't need any license key and you can use Vike without any restrictions, just like any other open source tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For companies:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pay what you can"}),". Companies choose the amount they want to pay while we trust them to make a fair choice. (If too many pay too little, we may switch to a fixed pricing.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Free for small apps"}),". For new and small Vike apps, Vike is 100% gratis and you don't need any license key: everything works just like any other open source tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Apply for a free license key"}),". For larger apps, you can apply for a free license key if your team cannot afford one or didn't incorporate a company yet. Write two or three sentences explaining your situation and we will give you a free license key."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"The Open Source Pricing is a major milestone for Vike's growth. It preserves what makes open source special while aligning Vike's priorities with user interests, fostering a transparent and sustainable relationship."}),`
`,e.jsx("h4",{id:"pricing",children:"Pricing"}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#who-pays-and-how-much"}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#do-sponsors-have-to-pay"}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#how-does-it-apply-to-monorepos"}),`
`,e.jsx("br",{}),`
`,e.jsx("h4",{id:"open-source-pricing",children:"Open Source Pricing"}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#how-does-it-work"}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#why-zero-investors"}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#is-vike-still-free-software"}),`
`,e.jsx("br",{}),`
`,e.jsx(a,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model"}),`
`,e.jsx("br",{}),`
`,e.jsx("h2",{id:"who-pays-and-how-much",children:"Who pays and how much?"}),`
`,e.jsx(q,{}),`
`,e.jsx("h3",{id:"free-tier",children:"Free tier"}),`
`,e.jsxs(n.p,{children:["Vike's free tier is determined by what we call the ",e.jsx(n.em,{children:"double three cut-off"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.strong,{children:[e.jsx(n.code,{children:">=3"})," regular committers for the past ",e.jsx(n.code,{children:">=3"})," months"]})}),`
`]}),`
`,e.jsx(n.p,{children:"Consequently:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vike is free for small projects. (Maintained by ",e.jsx(n.code,{children:"<=2"})," regular committers.)"]}),`
`,e.jsxs(n.li,{children:["Vike is free for large projects in their infancy. (With a 3-month free trial from the moment the projects starts having ",e.jsx(n.code,{children:">=3"})," regular committers.)"]}),`
`,e.jsx(n.li,{children:"Vike is free for finished projects. (That can be maintained for free with up to two full-time developers.)"}),`
`]}),`
`,e.jsxs(n.p,{children:["If you are within the ",e.jsx(n.strong,{children:"free tier then you don't need any license key"})," and you can use Vike without any restrictions — just like any other open source tool. (See also ",e.jsx(a,{href:"#how-does-it-work"}),")"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Small contributors that make only occasional commits (bots, designers, technical manager, ...) aren't counted as "regular committers".`}),`
`]}),`
`,e.jsx("h3",{id:"recommendation",children:"Recommendation"}),`
`,e.jsx(n.p,{children:"The table above is only a recommendation and you can choose any amount instead — we trust companies to make a fair choice."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Don't hesitate to apply for a free license key"})," if you have ",e.jsx(n.code,{children:">=3"})," regular committers but haven't incorporated yet, just want to experiment, or have a use case you believe should be free."]}),`
`,e.jsx(n.p,{children:"Keeping Vike accessible to everyone is a primary objective of the Open Source Pricing."}),`
`]}),`
`,e.jsx(n.p,{children:"Size estimations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small organization"}),": 0-20 employees."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Midsize organization"}),": 20-70 employees."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large organization"}),": >70 employees. (Also counting the employees of parent companies.)"]}),`
`]}),`
`,e.jsx("div",{style:{marginTop:-15,height:1}}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hobby use case"}),": Vike is used for experimenting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small use case"}),": Vike is used for developing a ",e.jsx(n.strong,{children:"project that plays only a marginal role"})," for your company. For example a landing page or a simple internal app."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Midsize use case"}),": Vike is used for developing a ",e.jsx(n.strong,{children:"project that plays only a minor role"}),". For example a one-shot Vike usage for a significant internal app."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Large use case"}),": Vike is used for developing a ",e.jsx(n.strong,{children:"project that plays a significant role"}),". For example an app with many users or building your own internal framework."]}),`
`]}),`
`,e.jsx("h2",{id:"do-sponsors-have-to-pay",children:"Do sponsors have to pay?"}),`
`,e.jsx(n.p,{children:"No, Vike stays 100% gratis for companies sponsoring Vike. Reach out and we will give you a free license key."}),`
`,e.jsx("h2",{id:"how-does-it-apply-to-monorepos",children:"How does it apply to monorepos?"}),`
`,e.jsx(n.p,{children:"It only applies to apps."}),`
`,e.jsxs(n.p,{children:["For example, in the following, it applies only to ",e.jsx(n.code,{children:"my-app/"})," and ",e.jsx(n.code,{children:"my-other-app/"}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/packages/my-own-framework/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/packages/my-app/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/packages/my-other-app/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6F42C1"},children:"/packages/some-vike-component-wrapper/"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See also: ",e.jsx(a,{href:"/build-your-own-framework"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"For new or small projects, you can use Vike just like any other open-source tool: 100% gratis and without any license key."}),`
`,e.jsxs(n.p,{children:["For larger projects, Vike shows a pesky toaster ",e.jsx(n.code,{children:"Get your license key at ..."})," in development (it's never shown in production) that you can remove by purchasing a license key. You install the key by adding it to your ",e.jsx(n.code,{children:"+config.js"})," file, or by setting the ",e.jsx(n.code,{children:"VIKE_KEY"})," environment variable."]}),`
`,e.jsxs(n.p,{children:["Also, the npm package ",e.jsx(n.code,{children:"vike"})," will adopt a proprietary license requiring companies outside the free tier to purchase a license key. Vike's Git repository stays 100% MIT-licensed."]}),`
`,e.jsx(n.p,{children:"In theory, since Vike is 100% open source, you could fork it, remove the pesky toaster, and build your own npm package. But maintaining a fork requires effort — you might as well apply for a free license key which is much easier."}),`
`,e.jsxs(n.p,{children:["On the the npm package ",e.jsx(n.code,{children:"vike"})," side, th Open Source pricing works 100% offline: it uses asymmetric encryption to validate license keys, and reads your Git history to distinguish small apps from larger apps. It doesn't send any telemetry nor server requests."]}),`
`,e.jsx("h2",{id:"why-zero-investors",children:"Why zero-investors?"}),`
`,e.jsx(n.p,{children:"If a project accepts investor funding, it will eventually have to take radical decisions to generate massive amounts of revenue — typically aiming for $100 million annually which is the kind of return investors hope for when they invest."}),`
`,e.jsx(n.p,{children:"This is often achieved with aggressive techniques such as vendor lock-in and steep fees. At the end of day, it will inevitably result in users having to pay a hefty bill in one form or another."}),`
`,e.jsx(n.p,{children:"In contrast, the Open Source Pricing introduces a business relationship with users that is transparent, sustainable and stable."}),`
`,e.jsx("h2",{id:"is-vike-still-free-software",children:"Is Vike still Free Software?"}),`
`,e.jsxs(n.p,{children:['Vike is still free as in "free speech" (not as in free beer), see explanations ',e.jsx(n.a,{href:"https://www.gnu.org/philosophy/free-sw.en.html",children:"by the Free Software Foundation"})," and ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Free_software",children:"by Wikipedia"}),"."]}),`
`,e.jsxs(n.p,{children:["We believe in Libre Software and we invented the Open Source Pricing because ",e.jsx(a,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model",children:"other business models contradict Libre Software values"}),"."]}),`
`,e.jsx(n.p,{children:"Code remains not only 100% open source but also 100% accessible: we believe money (and the lack thereof) should never prevent anyone from using code."}),`
`,e.jsx("h2",{id:"why-not-another-business-model",children:"Why not another business model?"}),`
`,e.jsx(n.p,{children:"We believe other business models are flawed in fundamental ways."}),`
`,e.jsx(n.p,{children:"The Open Source Pricing means:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"As an enginner, a much better software while everything stays 100% gratis."}),`
`,e.jsx(n.li,{children:"As a company, a transparent and sustainable relationship with a tool that is foundational to your stack."}),`
`]}),`
`,e.jsx(n.p,{children:"Compared to other business models:"}),`
`,e.jsx(M,{})]})}function B(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(S,{...i})}):S(i)}const H=Object.freeze(Object.defineProperty({__proto__:null,default:B,pageSectionsExport:U},Symbol.toStringTag,{value:"Module"})),te={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:V}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pricing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:z}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}}};export{te as configValuesSerialized};
