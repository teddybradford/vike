import{j as e,b as i,i as a,L as o,o as d}from"../chunks/chunk-DT52EIfE.js";import{L as s}from"../chunks/chunk-0NSwYJr3.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BKjKfl3T.js";import{U as r}from"../chunks/chunk-CubZrN-t.js";/* empty css                      *//* empty css                      */const c=[{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function t(l){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["The following shows how to add SSR / ",e.jsx(s,{href:"/pre-rendering",children:"pre-rendering (aka SSG)"})," to an existing ",e.jsx(n.a,{href:"https://vitejs.dev",children:"Vite"})," app:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/brillout/vite-to-vike",children:"Example of adding SSR/SSG to a Vite + React app"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/brillout/vite-to-vike/tree/vue",children:"Example of adding SSR/SSG to a Vite + Vue app"})}),`
`]}),`
`,e.jsx(n.p,{children:"It showcases how to do so in a step-by-step, progressive, and customizable fashion:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Choose between SSR and pre-rendering (SSG)."}),`
`,e.jsxs(n.li,{children:["With or without ",e.jsx(r,{name:!0,list:["vike-react","vike-vue"]}),"."]}),`
`,e.jsxs(n.li,{children:["With ",e.jsx(s,{href:"/server-routing",children:"Server Routing"})," or ",e.jsx(s,{href:"/client-routing",children:"Client Routing"}),"."]}),`
`,e.jsx(n.li,{children:"Progressively migrate towards the stack you (eventually) want."}),`
`]}),`
`,e.jsxs(n.p,{children:["You can choose whether you want to migrate towards a full-fledged SSR/SSG framework DX (like Next.js and Nuxt by using ",e.jsx(r,{name:!0}),"), or add a minimal SSR/SSG implementation (applying a minimal amount of changes to your existing code), or something in-between."]}),`
`,e.jsx(n.p,{children:"This way, you can move quickly while progressively choosing your stack as you go."}),`
`,e.jsx(n.p,{children:"On a high-level, this is how you add Vike to your existing Vite app:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Add Vike to your ",e.jsx(n.code,{children:"vite.config.js"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Example: ",e.jsx(i,{path:"/boilerplates/boilerplate-react/vite.config.js"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Use Vike's CLI instead of Vite's CLI."}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"json5","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"json5","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// package.json"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"{"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'  "scripts"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": {"})]}),`
`,e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'    "dev"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:'"vite"'}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'    "dev"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:'"vike dev"'}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'    "build"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:'"vite build"'}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'    "build"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:'"vike build"'}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'    "preview"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:'"vite preview"'}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:'    "preview"'}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:'"vike preview"'}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Enable pre-rendering, or",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See ",e.jsx(s,{href:"/pre-rendering"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["add a ",e.jsx(s,{href:"/express",children:"Express.js"}),"/",e.jsx(s,{href:"/hono",children:"Hono"}),"/",e.jsx(s,{href:"/fastify",children:"Fastify"}),"/",e.jsx(s,{href:"/server-integration",children:"..."})," server (or add ",e.jsx(s,{href:"/renderPage",children:"Vike's server middleware"})," if you already have one).",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(i,{path:"/boilerplates/boilerplate-react/server/index.js"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(r,{name:!0}),", or"]}),`
`,e.jsxs(n.li,{children:["define ",e.jsx(s,{href:"/onAfterRenderClient",children:e.jsx(n.code,{children:"+onRenderClient.js"})})," and ",e.jsx(s,{href:"/onRenderHtml",children:e.jsx(n.code,{children:"+onRenderHtml.js"})}),".",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"Vue",path:"/boilerplates/boilerplate-vue/renderer/"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"Vue + TypeScript",path:"/boilerplates/boilerplate-vue-ts/renderer/"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"React",path:"/boilerplates/boilerplate-react/renderer/"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"React + TypeScript",path:"/boilerplates/boilerplate-react-ts/renderer/"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Create your first ",e.jsx(s,{href:"/Page",children:e.jsx(n.code,{children:"+Page.js"})})," file."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"Vue",path:"/boilerplates/boilerplate-vue/pages/index/+Page.vue"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"Vue + TypeScript",path:"/boilerplates/boilerplate-vue-ts/pages/index/+Page.vue"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"React",path:"/boilerplates/boilerplate-react/pages/index/+Page.jsx"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{text:"React + TypeScript",path:"/boilerplates/boilerplate-react-ts/pages/index/+Page.tsx"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/new"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/new/core"}),`
`]}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike/tree/main/boilerplates",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike"})," > ",e.jsx(n.code,{children:"boilerplates/"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike/tree/main/examples/react-minimal",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike"})," > ",e.jsx(n.code,{children:"examples/react-minimal"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike/tree/main/examples/react-full",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike"})," > ",e.jsx(n.code,{children:"examples/react-full"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike/tree/main/examples/vue-minimal",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike"})," > ",e.jsx(n.code,{children:"examples/vue-minimal"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike/tree/main/examples/vue-full",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike"})," > ",e.jsx(n.code,{children:"examples/vue-full"})]})}),`
`]})]})}function h(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(t,{...l})}):t(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:d}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/add/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}}};export{T as configValuesSerialized};
