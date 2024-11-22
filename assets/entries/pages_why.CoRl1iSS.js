import{j as e,L as r,o as s,i as l}from"../chunks/chunk-Ob4EiYc1.js";import{L as i}from"../chunks/chunk-Cb6If-mG.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BhjItjud.js";/* empty css                      *//* empty css                      */const a=[{pageSectionId:"architecture",pageSectionLevel:2,pageSectionTitle:"Architecture"},{pageSectionId:"flexible-by-design",pageSectionLevel:3,pageSectionTitle:"Flexible by design"},{pageSectionId:"flexible-and-reliable-by-prioritization",pageSectionLevel:3,pageSectionTitle:"Flexible and reliable, by prioritization"},{pageSectionId:"conservative-or-cutting-edge-your-choice",pageSectionLevel:3,pageSectionTitle:"Conservative or cutting-edge, your choice"},{pageSectionId:"choose-as-you-grow",pageSectionLevel:3,pageSectionTitle:"Choose as you grow"},{pageSectionId:"future-proof",pageSectionLevel:3,pageSectionTitle:"Future-proof"},{pageSectionId:"build-your-own-framework",pageSectionLevel:3,pageSectionTitle:"Build your own framework"},{pageSectionId:"philosophy",pageSectionLevel:2,pageSectionTitle:"Philosophy"},{pageSectionId:"seperation-of-concerns",pageSectionLevel:3,pageSectionTitle:"Seperation of concerns"},{pageSectionId:"flourishing-do-one-thing-do-it-well-ecosystem",pageSectionLevel:3,pageSectionTitle:"Flourishing do-one-thing-do-it-well ecosystem"},{pageSectionId:"strong-leadership",pageSectionLevel:3,pageSectionTitle:"Strong leadership"},{pageSectionId:"user-driven",pageSectionLevel:3,pageSectionTitle:"User-driven"}];function t(o){const n={blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Deep dive into what makes Vike special."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vike's ",e.jsx(i,{href:"#architecture",children:"architecture"}),", enabling unprecedented flexibility and reliability."]}),`
`,e.jsxs(n.li,{children:["Vike's ",e.jsx(i,{href:"#philosophy",children:"philosophy"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"From high-level design to the smallest details, Vike is built with flexibility and reliability in mind."}),`
`,e.jsx("h3",{id:"flexible-by-design",children:"Flexible by design"}),`
`,e.jsx(n.p,{children:"Vike's flexibility is powered by low-level APIs."}),`
`,e.jsxs(n.p,{children:["For example, Vike's low-level hooks ",e.jsx(i,{href:"/onRenderHtml",children:e.jsx(n.code,{children:"onRenderHtml()"})})," and ",e.jsx(i,{href:"/onRenderClient",children:e.jsx(n.code,{children:"onRenderClient()"})})," give you full control over integrating any:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UI framework (React, Vue, ...)"}),`
`,e.jsx(n.li,{children:"Rendering strategy (SSR, SSG, SPA, islands, ...)"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For a quick start, we recommend using ",e.jsx(i,{href:"/extensions",children:"Vike extensions"})," instead of directly using these low-level APIs. For example, you can use ",e.jsx(n.code,{children:"vike-react"})," or ",e.jsx(n.code,{children:"vike-vue"})," for a quick start similar to Next.js or Nuxt."]}),`
`,e.jsxs(n.p,{children:["Later, if the need arises for more control, you can ",e.jsx(i,{href:"/eject",children:"eject"})," ",e.jsx(n.code,{children:"vike-react"}),"/",e.jsx(n.code,{children:"vike-vue"})," for a custom React/Vue integration."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Another example is Vike's server middleware ",e.jsx(i,{href:"/renderPage",children:e.jsx("code",{children:"renderPage()"})})," enabling you to embed Vike into any:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Server (Express.js, Hono, Fastify, ...)"}),`
`,e.jsx(n.li,{children:"Deployement (AWS, Cloudflare, Vercel, ...)"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Alternatively, you can ",e.jsx(i,{href:"/pre-rending",children:"pre-render your pages"})," and deploy your app to any static host."]}),`
`]}),`
`,e.jsx("h3",{id:"flexible-and-reliable-by-prioritization",children:"Flexible and reliable, by prioritization"}),`
`,e.jsx(n.p,{children:"If you create a feature request and explain why it's blocking you then we'll treat it with higher priority."}),`
`,e.jsx(n.p,{children:"We quickly fix bugs (usually under 24 hours)."}),`
`,e.jsx("h3",{id:"conservative-or-cutting-edge-your-choice",children:"Conservative or cutting-edge, your choice"}),`
`,e.jsxs(n.p,{children:["Vike in itself is a flexible and reliable core with, on top of it, extensions that integrate tools. It's a robust foundation fostering a diverse ecosystem of ",e.jsx(i,{href:"/extensions",children:"Vike extensions"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Stable extensions, focusing on supporting conservative stacks in a long-term fashion."}),`
`,e.jsx(n.li,{children:"Cutting-edge extensions, focusing on experimenting and adopting new approaches."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For example, we are experimenting with RSC (React Server Components) in a separate extension ",e.jsx(n.code,{children:"vike-react-rsc"}),". This allows us to quickly iterate without disrupting ",e.jsx(n.code,{children:"vike-react"})," users. We will be able to maintain both extensions for the foreseeable future, enabling you to adopt RSC only if and when you want."]}),`
`]}),`
`,e.jsx(n.p,{children:"This gives you choice:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you prefer stability, choose stable extensions.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"You get unparalleled stability: Vike it itself is stable and Vike extensions are a thin layer of glue code that can be maintained for a long time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If you have special requirements or want to explore new approaches: choose cutting-edge extensions, ",e.jsx(i,{href:"/eject",children:"eject extensions"}),", write your own extensions, or ",e.jsx(i,{href:"/build-your-own-framework",children:"build your own framework"}),".",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Vike's do-one-thing-do-it-well architecture provides unparalleled opportunities to experiment and push the envelope."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Vike enables you to keep your current stack while progressively migrating towards new tools and approaches at your own pace."}),`
`,e.jsx("h3",{id:"choose-as-you-grow",children:"Choose as you grow"}),`
`,e.jsx(n.p,{children:"You can continuously and progressively adapt your stack to your evolving needs."}),`
`,e.jsx(n.p,{children:"You can do so:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["One page at a time.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Vike enables you to ",e.jsx(i,{href:"/config#powerful",children:"progressively change your stack on a page-by-page basis"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["One architectural component at a time.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"With Vike, you can switch architectural components independently of each other."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Say goodbye to big never-ending migrations."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You can start with SPA and, later if you end up needing SSR, ",e.jsx(i,{href:"/ssr",children:"you can progressively add SSR"})," one page at a time."]}),`
`,e.jsx(n.li,{children:"You can start with RPC and, later if the need arises, you can progressively switch to GraphQL."}),`
`]}),`
`]}),`
`,e.jsx("h3",{id:"future-proof",children:"Future-proof"}),`
`,e.jsx(n.p,{children:"Vike's flexible core is unopinionated and open to JavaScript's rapidly evolving ecosystem."}),`
`,e.jsx(n.p,{children:"Vike is a robust foundation (Vike itself) with a thin and flexible layer (Vike extensions) quickly adapting to the tools and approaches of tomorrow."}),`
`,e.jsx("h3",{id:"build-your-own-framework",children:"Build your own framework"}),`
`,e.jsxs(n.p,{children:["Vike enables you to ",e.jsx(i,{href:"/build-your-own-framework",children:"build company internal frameworks"}),", empowering your Software Architects to fully own the architecture while providing your Product Developers with a company framework to quickly experiment, test, iterate and ship production-grade apps."]}),`
`,e.jsx(n.p,{children:"Your framework can include everything (frontend, backend, data fetching, authentication, deployement, ...) so that your Product Developers can focus on what they do best: building user interfaces."}),`
`,e.jsx(n.p,{children:"Vike enables you to build your own internal ecosystem of tools. It's a powerful way to scale your teams, and to ensure a cohesive stack throughout your company."}),`
`,e.jsx("h2",{id:"philosophy",children:"Philosophy"}),`
`,e.jsx(n.p,{children:"Vike is driven by our core principles."}),`
`,e.jsx("h3",{id:"seperation-of-concerns",children:"Seperation of concerns"}),`
`,e.jsx(n.p,{children:"Vike is carefully designed with a clean separation of concerns, for unprecedented flexibility and robustness."}),`
`,e.jsx(n.p,{children:"You can choose any core architectural components, and progressively switch them as you grow."}),`
`,e.jsx("h3",{id:"flourishing-do-one-thing-do-it-well-ecosystem",children:"Flourishing do-one-thing-do-it-well ecosystem"}),`
`,e.jsx(n.p,{children:"Vike's seperation of concerns enables architectural components to be developed independently of each other."}),`
`,e.jsx(n.p,{children:"A vibrant ecosystem of do-one-thing-do-it-well tools competing with each other is one of the strongest driving force behind JavaScript's success."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Other frameworks tightly couple architectural components together, which is a structural hindrance that prevents innovation."}),`
`,e.jsxs(n.p,{children:["For example, Vike doesn't have built-in ",e.jsx(i,{href:"/https://telefunc.com/RPC",children:"RPC"})," (aka Server Actions), enabling RPC approaches to be developed and innovated independently of Vike."]}),`
`,e.jsx(n.p,{children:"Another example is the seamlessly integration of GraphQL tools — something that is notoriously hard (sometimes not even feasible) with other frameworks."}),`
`]}),`
`,e.jsx("h3",{id:"strong-leadership",children:"Strong leadership"}),`
`,e.jsx(n.p,{children:"Vike is an independent project 100% led by engineers that don't serve the interests of any unrelated business: we only serve your interests."}),`
`,e.jsx(n.p,{children:"We meticulously care about each aspect of Vike; our passion is at the heart of makes Vike unique. For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vike's team is responsive and we provide ",e.jsx(i,{href:"/faq#how-can-i-reach-out-for-help",children:"a clear guideline"})," on how to receive reliable assistance."]}),`
`,e.jsxs(n.li,{children:["We carefully designed Vike's ",e.jsx(n.em,{children:"Open Source Pricing"})," to keep code 100% open source (MIT license) and 100% gratis for software engineers while asking companies to pay a small amount. For a transparent and sustainable relationship, while keeping Vike accessible to everyone."]}),`
`]}),`
`,e.jsx("h3",{id:"user-driven",children:"User-driven"}),`
`,e.jsx(n.p,{children:"We listen to users and engage in constructive conversations. We aren't driven by implementing fancy features, we are driven by implementing features that solve real user problems."}),`
`,e.jsx(n.p,{children:"Thanks to our Open Source Pricing your success directly translates in (financial) success for us."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Other frameworks that make money from JavaScript server deployments are naturally inclined to have skewed prioritization."}),`
`]})]})}function c(o={}){const{wrapper:n}=o.components||{};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),w={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:l}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/why/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{w as configValuesSerialized};
