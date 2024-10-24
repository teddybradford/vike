import{j as e,L as l,o as s}from"../chunks/chunk-BDl3L7LG.js";import{L as t}from"../chunks/chunk-C57YDwx2.js";/* empty css                      *//* empty css                      *//* empty css                      */import{U as i}from"../chunks/chunk-BqRrYk9k.js";import{I as a}from"../chunks/chunk-CFYQxlJp.js";/* empty css                      *//* empty css                      */import"../chunks/chunk-u42NeO_H.js";/* empty css                      *//* empty css                      */const d=[{pageSectionId:"without-vike-react-vue-solid",pageSectionLevel:2,pageSectionTitle:"Without `vike-{react,vue,solid}`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function o(r){const n={blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Environment: client."}),`
`,e.jsx(a,{by:e.jsx(i,{name:!0,list:["vike-react","vike-vue"]}),children:e.jsx(n.code,{children:"onBeforeRenderClient()"})}),`
`,e.jsx(n.p,{children:"Hook called at the beginning of rendering the page on the client-side. It's usually used for integrating tools, such as state management tools."}),`
`,e.jsxs(n.p,{children:["It's called upon rendering the first page (e.g. ",e.jsx(t,{href:"/hydration",children:"hydration"})," when using ",e.jsx(t,{href:"/ssr",children:"SSR"}),") and upon page navigation."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you want to perform an action only upon hydration then use ",e.jsx(t,{href:"/pageContext#:~:text=pageContext.isHydration,-%3A",children:e.jsx(n.code,{children:"pageContext.isHydration"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +onBeforeRenderClient.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onBeforeRenderClient"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (pageContext.isHydration) {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(n.p,{children:["It's called by ",e.jsx(n.code,{children:"vike-{react,vue}"})," at the beginning of its ",e.jsx(t,{href:"/onRenderClient",children:e.jsx(n.code,{children:"onRenderClient()"})})," implementation."]}),`
`,e.jsxs("h2",{id:"without-vike-react-vue-solid",children:["Without ",e.jsx("code",{children:"vike-{react,vue,solid}"})]}),`
`,e.jsxs(n.p,{children:["If you don't use a ",e.jsx(i,{}),", then you don't need ",e.jsx(n.code,{children:"onBeforeRenderClient()"})," nor ",e.jsx(t,{href:"/onAfterRenderClient",children:e.jsx(n.code,{children:"onAfterRenderClient()"})})," since you already have full control over the client-side rendering at your ",e.jsx(t,{href:"/onRenderClient",children:e.jsx(n.code,{children:"onRenderClient()"})})," hook."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onAfterRenderClient"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onRenderClient"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onHydrationEnd"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onPageTransitionStart"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onPageTransitionEnd"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onBeforeRenderHtml"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onAfterRenderHtml"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/hooks"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/client"}),`
`]}),`
`]})]})}function c(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:l}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/onBeforeRenderClient/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{T as configValuesSerialized};
