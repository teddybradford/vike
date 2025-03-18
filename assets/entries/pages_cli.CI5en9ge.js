import{j as e,i,L as t,o as a}from"../chunks/chunk-BX0O3VL4.js";import{L as n}from"../chunks/chunk-B_dgwVtz.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DhPDvfVs.js";/* empty css                      */const o=[{pageSectionId:"vike-settings",pageSectionLevel:2,pageSectionTitle:"Vike settings"},{pageSectionId:"vite-settings",pageSectionLevel:2,pageSectionTitle:"Vite settings"},{pageSectionId:"json5-syntax",pageSectionLevel:2,pageSectionTitle:"JSON5 syntax"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(r){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Usage:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$ vike dev"})," Start development server."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$ vike build"})," Build for production."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$ vike preview"})," Start preview server using production build (only works for ",e.jsx(n,{href:"/glossary#ssg",children:"SSG apps"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$ vike prerender"})," ",e.jsx(n,{href:"/pre-rendering",children:"Pre-render"})," pages (only needed when ",e.jsx(n,{href:"/prerender#disableautorun",children:e.jsx(s.code,{children:"partial.disableAutoRun"})})," is ",e.jsx(s.code,{children:"true"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$ vike -v"})," Print Vike's installed version."]}),`
`]}),`
`,e.jsx("h2",{id:"vike-settings",children:"Vike settings"}),`
`,e.jsxs(s.p,{children:["You can pass ",e.jsx(n,{href:"/settings",children:"Vike settings"})," to the CLI, for example:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Make development server available over LAN and public addresses"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" vike"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" --host"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Change port"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" vike"}),e.jsx(s.span,{style:{color:"#032F62"},children:" preview"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" --port"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" 1234"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Change pre-render settings"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:" vike"}),e.jsx(s.span,{style:{color:"#032F62"},children:" build"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" --prerender"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "{parallel:4,noExtraDir:true}"'})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["These are Vike settings, see ",e.jsx(n,{href:"/host",noBreadcrumb:!0}),", ",e.jsx(n,{href:"/port",noBreadcrumb:!0}),", and ",e.jsx(n,{href:"/prerender",noBreadcrumb:!0}),"."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The CLI option value syntax is JavaScript-like, see ",e.jsx(n,{href:"#json5-syntax"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["You can also use the ",e.jsx(s.code,{children:"VIKE_CONFIG"})," environment variable, for example:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Make development server available over LAN and public addresses"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:' VIKE_CONFIG="{host:true}"'}),e.jsx(s.span,{style:{color:"#032F62"},children:" vike"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Also when running Vike's CLI over a package.json script"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:' VIKE_CONFIG="{prerender:{parallel:4,noExtraDir:true}}"'}),e.jsx(s.span,{style:{color:"#032F62"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" build"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"VIKE_CONFIG"})," value syntax is JavaScript-like, see ",e.jsx(n,{href:"#json5-syntax"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"vite-settings",children:"Vite settings"}),`
`,e.jsxs(s.p,{children:["You can use the ",e.jsx(s.code,{children:"VITE_CONFIG"})," environment variable to pass ",e.jsx(s.a,{href:"https://vite.dev/config/",children:"Vite settings"}),", for example:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Set Vite's server.host setting to true"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:' VITE_CONFIG="{server:{host:true}}"'}),e.jsx(s.span,{style:{color:"#032F62"},children:" vike"}),e.jsx(s.span,{style:{color:"#032F62"},children:" dev"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Also when running Vike's CLI over a package.json script"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(s.span,{style:{color:"#032F62"},children:` VITE_CONFIG="{build:{outDir:'build'}}"`}),e.jsx(s.span,{style:{color:"#032F62"},children:" npm"}),e.jsx(s.span,{style:{color:"#032F62"},children:" run"}),e.jsx(s.span,{style:{color:"#032F62"},children:" build"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"VITE_CONFIG"})," value syntax is JavaScript-like, see ",e.jsx(n,{href:"#json5-syntax"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"json5-syntax",children:"JSON5 syntax"}),`
`,e.jsxs(s.p,{children:["You can set the value of CLI options, ",e.jsx(s.code,{children:"VITE_CONFIG"}),", and ",e.jsx(s.code,{children:"VIKE_CONFIG"})," using JavaScript-like syntax, ",e.jsx(s.a,{href:"https://json.org/example.html",children:"JSON syntax"}),", or ",e.jsx(s.a,{href:"https://json5.org/#example",children:"JSON5 syntax"}),". (Vike uses ",e.jsx(s.a,{href:"https://json5.org",children:"JSON5"})," to parse the values.)"]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/api"}),`
`]}),`
`]})]})}function d(r={}){const{wrapper:s}=r.components||{};return s?e.jsx(s,{...r,children:e.jsx(l,{...r})}):l(r)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),S={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/cli/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}}};export{S as configValuesSerialized};
