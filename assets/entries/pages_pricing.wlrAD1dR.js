import{j as e,a as o,L as k,o as v,i as S}from"../chunks/chunk-BK1_KbKq.js";import{L as t}from"../chunks/chunk-eFucKa_V.js";/* empty css                      */import{a as T}from"../chunks/chunk-BqOfUfiH.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BdLdLbhk.js";import{O as P}from"../chunks/chunk-CuZE0ouz.js";/* empty css                      *//* empty css                      *//* empty css                      */const m="#a00",g="#0a0",I="#e90";function h(){return e.jsx(e.Fragment,{children:" |"})}function O(){return e.jsx("span",{style:{color:g,fontSize:"1.9em",display:"block"},children:"✓"})}function C(){return e.jsx("span",{style:{color:m,fontSize:"1.6em",display:"block"},children:"✗"})}function V({value:i}){const u=x(),r=F(i);return e.jsx("div",{className:"value-gauge",style:{height:9,borderWidth:1,borderStyle:"solid",borderColor:"#ddd",borderRadius:10,display:"flex",padding:"1px 2px"},children:e.jsx("div",{style:{height:"100%",width:u,backgroundColor:r,borderRadius:10}})});function x(){return o(i>0&&i<100),"calc("+i/100+" * 100%)"}}function F(i){return o(i>0&&i<100),i<50?m:i>=75?g:I}function p({name:i,children:n}){return e.jsxs(e.Fragment,{children:[e.jsx("em",{children:i}),": ",n]})}function L({entries:i,skip_links:n}){return e.jsx("div",{className:"values-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(r,{children:""}),e.jsx(r,{children:"Trans­parent"}),e.jsx(r,{children:"Fork­able"}),e.jsx(r,{children:"Access­ible"}),e.jsx(r,{children:"Sustai­nable"}),e.jsx(r,{children:"Inde­pendent"})]})}),e.jsx("tbody",{children:i.map((s,l)=>e.jsx(u,{...s},l))})]})});function u({modelName:s,transparent:l,forkable:d,accessible:j,independent:w,sustainable:b}){return e.jsxs("tr",{children:[e.jsx(a,{children:s}),e.jsx(a,{children:e.jsx(c,{val:l})}),e.jsx(a,{children:e.jsx(c,{val:d})}),e.jsx(a,{children:e.jsx(c,{val:j})}),e.jsx(a,{children:e.jsx(c,{val:b})}),e.jsx(a,{children:e.jsx(c,{val:w})})]})}function r({children:s,...l}){if(o(Object.keys(l).length===0),!s)return e.jsx("th",{});const d=s,j=n?d:e.jsx("a",{href:x(d),children:d});return e.jsx("th",{align:"center",children:j})}function x(s){return o(s.constructor===String),o(!s.includes("&shy;"),{value_name:s}),o(!s.includes("%C2%AD"),{value_name:s}),"/values"}function a({children:s}){return e.jsx("td",{align:"center",children:s})}function c({val:s}){return o(0<=s&&s<=1),s===1?e.jsx(O,{}):s===0?e.jsx(C,{}):e.jsx(V,{value:s*100})}}function z(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Transparent"}),": anyone can read the code."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Forkable"}),": anyone can modify the code and publish its own version."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Accessible"}),": anyone can use the code, no matter how much money at disposal."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Sustainable"}),": the project's developers are financially supported."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Independent"}),": the project isn't influenced by outside interests."]})]})})}function y(i){const n={li:"li",p:"p",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(L,{entries:[{modelName:e.jsx(e.Fragment,{children:"Open Source Pricing"}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Donations"]}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:.3},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Company Backed"]}),transparent:1,forkable:1,accessible:1,independent:0,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Open Core"]}),transparent:.7,forkable:.7,accessible:.7,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(h,{})," Public Source"]}),transparent:1,forkable:0,accessible:.45,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(h,{})," Closed Source"]}),transparent:0,forkable:0,accessible:.45,independent:1,sustainable:1}],skip_links:!0}),`
`,e.jsx(n.p,{children:"Values:"}),`
`,e.jsx(z,{}),`
`,e.jsx(n.p,{children:"Business Models:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(p,{name:"Open Source | Donations",children:"some projects, due to their very high number of users and low developing cost, can sustain solely on donations."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(p,{name:"Open Source | Company Backed",children:"a company open sourcing some of its internal tool."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(p,{name:"Open Source | Open Core",children:"the code is open source but some extensions/features are proprietary."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(p,{name:"Proprietary | Public Source",children:"proprietary but the code is publicly available to be read."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(p,{name:"Proprietary | Closed Source",children:"closed sourced, not forkable, usually expensive."}),`
`]}),`
`]})]})}function N(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(y,{...i})}):y(i)}const A=[{pageSectionId:"pricing",pageSectionLevel:4,pageSectionTitle:"Pricing"},{pageSectionId:"open-source-pricing",pageSectionLevel:4,pageSectionTitle:"Open Source Pricing"},{pageSectionId:"how-does-it-work",pageSectionLevel:3,pageSectionTitle:"How does it work?"},{pageSectionId:"when-is-an-app-considered-small-or-large",pageSectionLevel:3,pageSectionTitle:'When is an app considered "small" or "large"?'},{pageSectionId:"do-sponsors-have-to-pay",pageSectionLevel:3,pageSectionTitle:"Do sponsors have to pay?"},{pageSectionId:"why-zero-investors",pageSectionLevel:3,pageSectionTitle:"Why zero investors?"},{pageSectionId:"is-vike-still-free-software",pageSectionLevel:3,pageSectionTitle:"Is Vike still Free Software?"},{pageSectionId:"why-not-another-business-model",pageSectionLevel:3,pageSectionTitle:"Why not another business model?"}];function f(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"The Open Source Pricing isn't implemented yet."}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:37,marginBottom:30},children:e.jsx("img",{src:P,style:{maxWidth:"100%"}})}),`
`,e.jsxs(n.p,{children:["Vike will soon introduce what we call an ",e.jsx(n.em,{children:"Open Source Pricing"}),": a new kind of business model that keeps Vike open source, as well as accessible (so that everyone, regardless of financial resources, can use Vike)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The entire code ",e.jsx(n.strong,{children:"stays 100% open source"})," (MIT License)."]}),`
`,e.jsxs(n.li,{children:["Everything ",e.jsx(n.strong,{children:"stays 100% gratis for engineers"}),". You don't need any license key and you can use Vike without any restrictions, just like any other open source tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For companies:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pay what you can"}),". Companies choose the amount they want to pay while we trust them to make a fair choice. (If too many pay too little, we may switch to a fixed pricing.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Free for small apps"}),". For new and small Vike apps, Vike is 100% gratis and you don't need any license key: everything works just like any other open source tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Apply for a free license key"}),".  For larger apps, you can apply for a free license key if your team cannot afford one or didn't incorporate a company yet. Write two or three sentences explaining your situation and we will give you a free license key valid for six months (you can apply again after six months)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"The Open Source Pricing is a major milestone for Vike's growth. It preserves what makes open source special while ensuring Vike's priorities are aligned with the interests of its users, for a transparent and sustainable relationship."}),`
`,e.jsx("h4",{id:"pricing",children:"Pricing"}),`
`,e.jsx(t,{doNotInferSectionTitle:!0,href:"#how-does-it-work"}),`
`,e.jsx("br",{}),`
`,e.jsx(t,{doNotInferSectionTitle:!0,href:"#when-is-an-app-considered-small-or-large"}),`
`,e.jsx("br",{}),`
`,e.jsx(t,{doNotInferSectionTitle:!0,href:"#do-sponsors-have-to-pay"}),`
`,e.jsx("br",{}),`
`,e.jsx("h4",{id:"open-source-pricing",children:"Open Source Pricing"}),`
`,e.jsx(t,{doNotInferSectionTitle:!0,href:"#why-zero-investors"}),`
`,e.jsx("br",{}),`
`,e.jsx(t,{doNotInferSectionTitle:!0,href:"#is-vike-still-free-software"}),`
`,e.jsx("br",{}),`
`,e.jsx(t,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model"}),`
`,e.jsx("br",{}),`
`,e.jsx("h3",{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"For new or small projects nothing changes: you can use Vike just like any other open-source tool, 100% gratis and without any license key."}),`
`,e.jsxs(n.p,{children:["For larger projects, Vike shows a pesky toaster in production ",e.jsx(n.code,{children:"Get your license key at ..."})," which you can remove by purchasing a license key and installing it with ",e.jsx(n.code,{children:"$ vike add-key 4f7DK1q29X5WJ6G3b9t1"}),"."]}),`
`,e.jsxs(n.p,{children:["In theory, since Vike is 100% open source, you can fork Vike and remove the pesky toaster's code. But we will obfuscate the pesky toaster's code so that it's difficult to find — more difficult than applying for a free license key. (We'll also prevent tricks such as ",e.jsx(n.code,{children:".pesky-toaster { display: none }"}),".)"]}),`
`,e.jsx("h3",{id:"when-is-an-app-considered-small-or-large",children:'When is an app considered "small" or "large"?'}),`
`,e.jsx(n.p,{children:"The pesky toaster includes an heuristic to determine whether your app is:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A small-ish or new project, such as a single-person project or a startup getting started."}),`
`,e.jsx(n.li,{children:"A larger project developed by a team implementing an enterprise-grade app."}),`
`]}),`
`,e.jsx(n.p,{children:"If the heuristic considers your app small then the pesky toaster isn't shown and you don't need any license key: you can use Vike just like any other open source tool."}),`
`,e.jsx(n.p,{children:"If your app is considered large, the pesky toaster starts to be shown during development and you'll need a license key to remove it: you can then either purchase or apply for a free one."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`There isn't a clear-cut definition, and the heuristic is subject to change. You can think of it as a "gracious free-tier heuristic".`}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The heuristic will be generous when determining whether your app qualifies for the free tier. If you believe it mistakenly classifies your app as a larger project, then please reach out and we will give you a free license key until we fix the heuristic."}),`
`]}),`
`,e.jsx("h3",{id:"do-sponsors-have-to-pay",children:"Do sponsors have to pay?"}),`
`,e.jsx(n.p,{children:"No, Vike stays 100% gratis for companies sponsoring Vike (Bronze, Silver, Gold, and Platinum). Reach out and we will give you a free license key."}),`
`,e.jsx("h3",{id:"why-zero-investors",children:"Why zero investors?"}),`
`,e.jsx(n.p,{children:"If a project accepts investor funding, it will eventually have to take radical decisions to generate massive amounts of revenue — typically aiming for $100 million annually which is the kind of return investors hope for when they invest."}),`
`,e.jsx(n.p,{children:"This is often achieved with aggressive techniques such as vendor lock-in and steep fees. At the end of day, it wil inevitably result in users having to pay a very hefty bill in some form or another."}),`
`,e.jsx(n.p,{children:"In contrast, the Open Source Pricing introduces a business relationship with users that is transparent, sustainable and stable."}),`
`,e.jsx("h3",{id:"is-vike-still-free-software",children:"Is Vike still Free Software?"}),`
`,e.jsxs(n.p,{children:['Vike is still free as in "free speech" (not as in free beer), see explanations ',e.jsx(n.a,{href:"https://www.gnu.org/philosophy/free-sw.en.html",children:"by the Free Software Foundation"})," and ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Free_software",children:"by Wikipedia"}),"."]}),`
`,e.jsxs(n.p,{children:["We believe in Libre Software and we invented the Open Source Pricing because ",e.jsx(t,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model",children:"other business models contradict Libre Software values"}),"."]}),`
`,e.jsx(n.p,{children:"Code remains not only 100% open source but also 100% accessible: we believe money (and the lack thereof) should never prevent anyone from using code."}),`
`,e.jsx("h3",{id:"why-not-another-business-model",children:"Why not another business model?"}),`
`,e.jsx(n.p,{children:"We believe other business models are flawed in fundamental ways."}),`
`,e.jsx(n.p,{children:"The Open Source Pricing means:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"As an enginner, a much better software while everything stays 100% gratis."}),`
`,e.jsx(n.li,{children:"As a company, a transparent and sustainable relationship with a tool that is foundational to your stack."}),`
`]}),`
`,e.jsx(n.p,{children:"Compared to other business models:"}),`
`,e.jsx(N,{})]})}function D(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(f,{...i})}):f(i)}const R=Object.freeze(Object.defineProperty({__proto__:null,default:D,pageSectionsExport:A},Symbol.toStringTag,{value:"Module"})),Q={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:k}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:v}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pricing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:R}}};export{Q as configValuesSerialized};
