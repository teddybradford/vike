import{r as a,a as c,j as e,i as p,L as u,o as h}from"../chunks/chunk-CJmB2W3o.js";import{L as n}from"../chunks/chunk-uhW91TrT.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-D5Gb1yT8.js";import{U as f}from"../chunks/chunk-CwVQglXk.js";/* empty css                      *//* empty css                      */const d="https://cdn.jsdelivr.net/npm/@batijs/elements/dist/elements/full.js";function m(){const[o,t]=a.useState(!0);return a.useEffect(()=>{if(r()){t(!1);return}const i=document.createElement("script");i.type="module",i.src=d,i.onload=()=>{t(!1)},document.head.appendChild(i),c(r())},[]),o?e.jsx("div",{style:{textAlign:"center",fontSize:"2em",margin:100,paddingBottom:50},children:"Loading scaffolder..."}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"container",children:e.jsx("bati-widget",{theme:"light"})})})}function r(){return!!document.querySelector(`script[src="${d}"]`)}const x="/assets/static/bati-logo.BFdUWfho.svg",s=16;function g(){return e.jsxs("p",{style:{color:"#888",fontSize:"14px",textAlign:"center"},children:["Powered by"," ",e.jsxs("a",{href:"https://github.com/vikejs/bati",children:["Bati"," ",e.jsx("img",{src:x,style:{width:s,height:s,display:"inline-block",verticalAlign:"text-top"}})]})]})}const j=[{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(o){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:30}}),`
`,e.jsx(m,{}),`
`,e.jsx(g,{}),`
`,e.jsx("div",{style:{height:10}}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Requirement:"})," you need ",e.jsx(t.a,{href:"https://nodejs.org",children:"Node.js"})," installed (or Deno/Bun). It includes the package manager ",e.jsx(t.code,{children:"npm"})," (you can also use any other package manager)."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Scaffolded apps use Vike extensions such as ",e.jsx(f,{name:!0}),". See ",e.jsx(n,{href:"/new/core",children:"vike.dev/new/core"})," if you want to scaffold an app that directly uses Vike core (without any Vike extension)."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"/new/core"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(n,{href:"/add"}),`
`]}),`
`]})]})}function y(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(l,{...o})}):l(o)}const S=Object.freeze(Object.defineProperty({__proto__:null,default:y,pageSectionsExport:j},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/new/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:u}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{C as configValuesSerialized};
