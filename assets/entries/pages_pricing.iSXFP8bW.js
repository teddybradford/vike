import{j as e,a as t,L as k,o as S,i as v}from"../chunks/chunk-glUwZz9m.js";import{L as o}from"../chunks/chunk-B_BJqwbg.js";/* empty css                      */import{a as T}from"../chunks/chunk-BXYFtLLO.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-D0cafvuH.js";import{O as P}from"../chunks/chunk-7j5OQDDi.js";/* empty css                      *//* empty css                      *//* empty css                      */const m="#a00",g="#0a0",I="#e90";function h(){return e.jsx(e.Fragment,{children:" |"})}function O(){return e.jsx("span",{style:{color:g,fontSize:"1.9em",display:"block"},children:"✓"})}function C(){return e.jsx("span",{style:{color:m,fontSize:"1.6em",display:"block"},children:"✗"})}function V({value:i}){const u=x(),s=F(i);return e.jsx("div",{className:"value-gauge",style:{height:9,borderWidth:1,borderStyle:"solid",borderColor:"#ddd",borderRadius:10,display:"flex",padding:"1px 2px"},children:e.jsx("div",{style:{height:"100%",width:u,backgroundColor:s,borderRadius:10}})});function x(){return t(i>0&&i<100),"calc("+i/100+" * 100%)"}}function F(i){return t(i>0&&i<100),i<50?m:i>=75?g:I}function p({name:i,children:n}){return e.jsxs(e.Fragment,{children:[e.jsx("em",{children:i}),": ",n]})}function L({entries:i,skip_links:n}){return e.jsx("div",{className:"values-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(s,{children:""}),e.jsx(s,{children:"Trans­parent"}),e.jsx(s,{children:"Fork­able"}),e.jsx(s,{children:"Access­ible"}),e.jsx(s,{children:"Sustai­nable"}),e.jsx(s,{children:"Inde­pendent"})]})}),e.jsx("tbody",{children:i.map((r,l)=>e.jsx(u,{...r},l))})]})});function u({modelName:r,transparent:l,forkable:d,accessible:j,independent:b,sustainable:w}){return e.jsxs("tr",{children:[e.jsx(a,{children:r}),e.jsx(a,{children:e.jsx(c,{val:l})}),e.jsx(a,{children:e.jsx(c,{val:d})}),e.jsx(a,{children:e.jsx(c,{val:j})}),e.jsx(a,{children:e.jsx(c,{val:w})}),e.jsx(a,{children:e.jsx(c,{val:b})})]})}function s({children:r,...l}){if(t(Object.keys(l).length===0),!r)return e.jsx("th",{});const d=r,j=n?d:e.jsx("a",{href:x(d),children:d});return e.jsx("th",{align:"center",children:j})}function x(r){return t(r.constructor===String),t(!r.includes("&shy;"),{value_name:r}),t(!r.includes("%C2%AD"),{value_name:r}),"/values"}function a({children:r}){return e.jsx("td",{align:"center",children:r})}function c({val:r}){return t(0<=r&&r<=1),r===1?e.jsx(O,{}):r===0?e.jsx(C,{}):e.jsx(V,{value:r*100})}}function z(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Transparent"}),": anyone can read the code."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Forkable"}),": anyone can modify the code and publish its own version."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Accessible"}),": anyone can use the code, no matter how much money at disposal."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Sustainable"}),": the project's developers are financially supported."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Independent"}),": the project isn't influenced by outside interests."]})]})})}function f(i){const n={li:"li",p:"p",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(L,{entries:[{modelName:e.jsx(e.Fragment,{children:"Open Source Pricing"}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Donations"]}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:.3},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Company Backed"]}),transparent:1,forkable:1,accessible:1,independent:0,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Open Core"]}),transparent:.7,forkable:.7,accessible:.7,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(h,{})," Public Source"]}),transparent:1,forkable:0,accessible:.45,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(h,{})," Closed Source"]}),transparent:0,forkable:0,accessible:.45,independent:1,sustainable:1}],skip_links:!0}),`
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
`]})]})}function N(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(f,{...i})}):f(i)}const D=[{pageSectionId:"pricing",pageSectionLevel:4,pageSectionTitle:"Pricing"},{pageSectionId:"open-source-pricing",pageSectionLevel:4,pageSectionTitle:"Open Source Pricing"},{pageSectionId:"when-is-an-app-considered-small-or-large",pageSectionLevel:2,pageSectionTitle:'When is an app considered "small" or "large"?'},{pageSectionId:"do-sponsors-have-to-pay",pageSectionLevel:2,pageSectionTitle:"Do sponsors have to pay?"},{pageSectionId:"how-does-it-work",pageSectionLevel:2,pageSectionTitle:"How does it work?"},{pageSectionId:"why-zero-investors",pageSectionLevel:2,pageSectionTitle:"Why zero-investors?"},{pageSectionId:"is-vike-still-free-software",pageSectionLevel:2,pageSectionTitle:"Is Vike still Free Software?"},{pageSectionId:"why-not-another-business-model",pageSectionLevel:2,pageSectionTitle:"Why not another business model?"}];function y(i){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"The Open Source Pricing isn't implemented yet."}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:37,marginBottom:30},children:e.jsx("img",{src:P,style:{maxWidth:"100%"}})}),`
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
`,e.jsx(n.p,{children:"The Open Source Pricing is a major milestone for Vike's growth. It preserves what makes open source special while ensuring Vike's priorities are aligned with the interests of its users, for a transparent and sustainable relationship."}),`
`,e.jsx("h4",{id:"pricing",children:"Pricing"}),`
`,e.jsx(o,{doNotInferSectionTitle:!0,href:"#when-is-an-app-considered-small-or-large"}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{doNotInferSectionTitle:!0,href:"#do-sponsors-have-to-pay"}),`
`,e.jsx("br",{}),`
`,e.jsx("h4",{id:"open-source-pricing",children:"Open Source Pricing"}),`
`,e.jsx(o,{doNotInferSectionTitle:!0,href:"#how-does-it-work"}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{doNotInferSectionTitle:!0,href:"#why-zero-investors"}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{doNotInferSectionTitle:!0,href:"#is-vike-still-free-software"}),`
`,e.jsx("br",{}),`
`,e.jsx(o,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model"}),`
`,e.jsx("br",{}),`
`,e.jsx("h2",{id:"when-is-an-app-considered-small-or-large",children:'When is an app considered "small" or "large"?'}),`
`,e.jsx(n.p,{children:'An app is considered "large" if it has three or more developers who have committed regularly over the past three months.'}),`
`,e.jsx(n.p,{children:"Consequently:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vike is free for small projects."}),`
`,e.jsx(n.li,{children:"Vike is free for large projects that are still in their infancy."}),`
`,e.jsx(n.li,{children:"Finished large projects can be maintained for free with up to two full-time developers."}),`
`,e.jsx(n.li,{children:"Small contributors, such as a designer making occasional commits, are free."}),`
`]}),`
`,e.jsx(n.p,{children:"You can apply for a free license key if your app is considered large but your company isn't large enough to pay for a license key."}),`
`,e.jsx("h2",{id:"do-sponsors-have-to-pay",children:"Do sponsors have to pay?"}),`
`,e.jsx(n.p,{children:"No, Vike stays 100% gratis for companies sponsoring Vike (Bronze, Silver, Gold, and Platinum). Reach out and we will give you a free license key."}),`
`,e.jsx("h2",{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"For new or small projects, you can use Vike just like any other open-source tool: 100% gratis and without any license key."}),`
`,e.jsxs(n.p,{children:["For larger projects, Vike shows a pesky toaster ",e.jsx(n.code,{children:"Get your license key at ..."})," that you can remove by purchasing a license key. (You can apply for a free license key if you have limited resources.) You install the key by running ",e.jsx(n.code,{children:"$ vike add-key 4f7D-K1q2-9X5W-J6G3-b9t1"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See also: ",e.jsx(o,{doNotInferSectionTitle:!0,href:"#when-is-an-app-considered-small-or-large"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"vike"})," npm package will adopt a proprietary license requiring companies outside the free tier to purchase a license key. Vike's Git repository stays 100% MIT-licensed."]}),`
`,e.jsx(n.p,{children:"In theory, since Vike is 100% open source, you could fork it, remove the pesky toaster, and build your own npm package. But maintaining a fork requires effort, so you might as well apply for a free license key which is much easier. We believe a trust-based relationship is mutually beneficial, whereas going rogue is a brittle setup with potential unforeseen setbacks."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"vike"})," npm package works 100% offline, using asymmetric encryption (to validate license keys) and reading your Git history (to distinguish small apps from larger apps). It doesn't send any telemetry nor server requests."]}),`
`,e.jsx("h2",{id:"why-zero-investors",children:"Why zero-investors?"}),`
`,e.jsx(n.p,{children:"If a project accepts investor funding, it will eventually have to take radical decisions to generate massive amounts of revenue — typically aiming for $100 million annually which is the kind of return investors hope for when they invest."}),`
`,e.jsx(n.p,{children:"This is often achieved with aggressive techniques such as vendor lock-in and steep fees. At the end of day, it will inevitably result in users having to pay a hefty bill in one form or another."}),`
`,e.jsx(n.p,{children:"In contrast, the Open Source Pricing introduces a business relationship with users that is transparent, sustainable and stable."}),`
`,e.jsx("h2",{id:"is-vike-still-free-software",children:"Is Vike still Free Software?"}),`
`,e.jsxs(n.p,{children:['Vike is still free as in "free speech" (not as in free beer), see explanations ',e.jsx(n.a,{href:"https://www.gnu.org/philosophy/free-sw.en.html",children:"by the Free Software Foundation"})," and ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Free_software",children:"by Wikipedia"}),"."]}),`
`,e.jsxs(n.p,{children:["We believe in Libre Software and we invented the Open Source Pricing because ",e.jsx(o,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model",children:"other business models contradict Libre Software values"}),"."]}),`
`,e.jsx(n.p,{children:"Code remains not only 100% open source but also 100% accessible: we believe money (and the lack thereof) should never prevent anyone from using code."}),`
`,e.jsx("h2",{id:"why-not-another-business-model",children:"Why not another business model?"}),`
`,e.jsx(n.p,{children:"We believe other business models are flawed in fundamental ways."}),`
`,e.jsx(n.p,{children:"The Open Source Pricing means:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"As an enginner, a much better software while everything stays 100% gratis."}),`
`,e.jsx(n.li,{children:"As a company, a transparent and sustainable relationship with a tool that is foundational to your stack."}),`
`]}),`
`,e.jsx(n.p,{children:"Compared to other business models:"}),`
`,e.jsx(N,{})]})}function A(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(y,{...i})}):y(i)}const R=Object.freeze(Object.defineProperty({__proto__:null,default:A,pageSectionsExport:D},Symbol.toStringTag,{value:"Module"})),Q={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:k}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:S}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pricing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:R}}};export{Q as configValuesSerialized};
