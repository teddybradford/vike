import{j as e,b as r,i as t,L as o,o as i}from"../chunks/chunk-DeGN3y0K.js";import{L as l}from"../chunks/chunk-Dg_V_Tix.js";/* empty css                      */import{W as c}from"../chunks/chunk-DRF4EfWc.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-se29VwVW.js";/* empty css                      *//* empty css                      */const d=[{pageSectionId:"examples",pageSectionLevel:2,pageSectionTitle:"Examples"},{pageSectionId:"usage",pageSectionLevel:2,pageSectionTitle:"Usage"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function a(n){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"injectFilter()"})," hook allows you to control where and what tags Vike injects in the HTML, most notably ",e.jsx(l,{href:"/preloading",children:"preload"})," tags."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["If you merely want to change the position of scripts, you can use the ",e.jsxs(l,{href:"/injectScriptsAt",children:[e.jsx(s.code,{children:"injectScriptsAt"})," setting"]})," instead."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Vite also injects preload tags, see ",e.jsxs(s.a,{href:"https://vitejs.dev/config/build-options#build-modulepreload",children:["Vite > Config > ",e.jsx(s.code,{children:"build.modulePreload"})]}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"examples",children:"Examples"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(r,{path:"/examples/custom-preload/renderer/+onRenderHtml.tsx"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(r,{path:"/test/preload/renderer/+onRenderHtml.tsx"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"usage",children:"Usage"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"injectFilter()"})," is called only in production: it has no effect in development. (Because, in development, the dependency graph is ",e.jsx(l,{href:"/lazy-transpiling",children:"lazily discovered"})," and therefore not fully known upon rendering HTML.)"]}),`
`]}),`
`,e.jsxs(c,{children:[e.jsx(s.code,{children:"injectFilter()"})," is a beta feature. (Which means breaking changes may occur during any minor version update.)"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /renderer/+onRenderHtml.ts"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { onRenderHtml }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { InjectFilterEntry } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'vike/types'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" onRenderHtml"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(s.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"  // ..."})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" documentHtml"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" escapeInject"}),e.jsx(s.span,{style:{color:"#032F62"},children:"`<!DOCTYPE html>"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"    <html>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"      <body>"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:'        <div id="root">${'}),e.jsx(s.span,{style:{color:"#24292E"},children:"stream"}),e.jsx(s.span,{style:{color:"#032F62"},children:"}</div>"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"      </body>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"    </html>`"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" injectFilter"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209"},children:"assets"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" InjectFilterEntry"}),e.jsx(s.span,{style:{color:"#24292E"},children:"[])"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" void"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" =>"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    assets."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"forEach"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#E36209"},children:"asset"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" =>"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"      if"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ("})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"        // We don't touch entry assets (recommended)"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"        asset.isEntry "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"||"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"        // We don't touch JavaScript preloading (recommended)"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"        asset.assetType "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"==="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'script'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"      ) {"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#D73A49"},children:"        return"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"      }"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"      // Preload images"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"      if"}),e.jsx(s.span,{style:{color:"#24292E"},children:" (asset.assetType "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"==="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'image'"}),e.jsx(s.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"        asset.inject "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'HTML_BEGIN'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"      }"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"      // Don't preload fonts"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"      if"}),e.jsx(s.span,{style:{color:"#24292E"},children:" (asset.assetType "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"==="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'font'"}),e.jsx(s.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"        asset.inject "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5"},children:" false"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"      }"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"      // Preload videos"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"      if"}),e.jsx(s.span,{style:{color:"#24292E"},children:" (asset.mediaType?."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"startsWith"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#032F62"},children:"'video'"}),e.jsx(s.span,{style:{color:"#24292E"},children:")) {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"        asset.inject "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'HTML_END'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"      }"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    })"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { documentHtml, injectFilter }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"type"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" InjectFilterEntry"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E36209"},children:"  inject"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" false"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'HTML_BEGIN'"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'HTML_END'"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" // Whether and where to inject"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E36209"},children:"  src"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" string"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" // Asset's URL"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E36209"},children:"  assetType"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "image"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "script"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "font"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "style"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "audio"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "video"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "document"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:'             "fetch"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "track"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "worker"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "embed"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "object"'}),e.jsx(s.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" null"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E36209"},children:"  mediaType"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" string"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" // MIME type"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#E36209"},children:"  isEntry"}),e.jsx(s.span,{style:{color:"#D73A49"},children:":"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" boolean"}),e.jsx(s.span,{style:{color:"#6A737D"},children:' // true  ⇒ <script> or <link rel="stylesheet" type="text/css">'})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:'                   // false ⇒ preload tag, e.g. <link rel="preload" as="font">'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(l,{href:"/preloading"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(l,{href:"/streaming"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(l,{href:"/injectScriptsAt"}),`
`]}),`
`,e.jsx(s.li,{children:e.jsxs(s.a,{href:"https://vitejs.dev/config/build-options#build-modulepreload",children:["Vite > Config > ",e.jsx(s.code,{children:"build.modulePreload"})]})}),`
`]})]})}function p(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:p,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/injectFilter/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}}};export{v as configValuesSerialized};
