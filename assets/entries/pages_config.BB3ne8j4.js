import{j as e,L as i,o as r,i as t}from"../chunks/chunk-DDL8FpfR.js";import{L as n}from"../chunks/chunk-DWKnVLy7.js";/* empty css                      */import{a as o}from"../chunks/chunk-0ZzQ4aJE.js";import{F as d}from"../chunks/chunk-DI5DJv6H.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B--HK5tK.js";/* empty css                      */const c=[{pageSectionId:"files",pageSectionLevel:2,pageSectionTitle:"`+` files"},{pageSectionId:"inheritance",pageSectionLevel:2,pageSectionTitle:"Inheritance"},{pageSectionId:"defaults",pageSectionLevel:3,pageSectionTitle:"Defaults"},{pageSectionId:"domain-driven-file-structure",pageSectionLevel:3,pageSectionTitle:"Domain-driven File Structure"},{pageSectionId:"pointer-imports",pageSectionLevel:2,pageSectionTitle:"Pointer imports"},{pageSectionId:"config-code-isn-t-runtime-code",pageSectionLevel:4,pageSectionTitle:"Config code isn't runtime code"},{pageSectionId:"forbidden-runtime-code",pageSectionLevel:4,pageSectionTitle:"Forbidden runtime code"},{pageSectionId:"manually-mark-pointer-imports",pageSectionLevel:4,pageSectionTitle:"Manually mark pointer imports"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function a(l){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Everything there is to know about how config files work."}),`
`,e.jsx(s.p,{children:"For the list of configurations, see instead:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/settings"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/hooks"}),`
`]}),`
`]}),`
`,e.jsxs("h2",{id:"files",children:[e.jsx("code",{children:"+"})," files"]}),`
`,e.jsxs(s.p,{children:["You configure your Vike app by creating ",e.jsx(s.code,{children:"+"})," files such as ",e.jsx(s.code,{children:"+config.js"}),"."]}),`
`,e.jsxs(s.p,{children:["For example, you can set the ",e.jsx(n,{href:"/Page",children:e.jsx(s.code,{children:"Page"})})," and ",e.jsx(n,{href:"/Layout",children:e.jsx(s.code,{children:"Layout"})})," settings of a page by defining ",e.jsx(s.code,{children:"+config.js"}),":"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Page "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './Page'"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Layout "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './Layout'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Page,"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Layout"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/Page.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" /* ... */"})]})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/Layout.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" /* ... */"})]})]})})}),`
`,e.jsx(s.p,{children:"For more convenience, you can also do this:"}),`
`,e.jsx(d,{children:e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Page "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './Page'"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Layout "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './Layout'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Page,"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Layout"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{className:"diff remove","data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/Page.jsx"})}),`
`,e.jsx(s.span,{className:"diff add","data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/+Page.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" /* ... */"})]})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{className:"diff remove","data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/Layout.jsx"})}),`
`,e.jsx(s.span,{className:"diff add","data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/+Layout.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#6A737D"},children:" /* ... */"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Except of ",e.jsx(s.code,{children:"+config.js"}),", any ",e.jsx(s.code,{children:"+"})," file corresponds to a ",e.jsx(n,{href:"/settings",children:"Vike setting"})," or a ",e.jsx(n,{href:"/hooks",children:"Vike hook"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"inheritance",children:"Inheritance"}),`
`,e.jsx(s.p,{children:"You can apply configurations to all pages, a group of pages, or only one page. For example:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/index/+Page.jsx"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/about/+Page.jsx"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /about"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Layout for marketing pages"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/+Layout.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/index/+Page.jsx"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /admin-panel"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/users/+Page.jsx"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /admin-panel/users"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Layout for admin pages"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/+Layout.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/product/@id/+Page.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Layout for the product page"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/product/@id/+Layout.jsx"})})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The directory ",e.jsx(s.code,{children:"(marketing)"})," is used for ",e.jsx(n,{href:"/routing#groups",children:"grouping"})," and is ignored by ",e.jsx(n,{href:"/filesystem-routing",children:"Filesystem Routing"}),"."]}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pages/(marketing)/+Layout.jsx"})," applies to all pages living at ",e.jsx(s.code,{children:"pages/(marketing)/**"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pages/admin-panel/+Layout.jsx"})," applies to all pages living at ",e.jsx(s.code,{children:"pages/admin-panel/**"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pages/product/@id/+Layout.jsx"})," applies to one page ",e.jsx(s.code,{children:"pages/product/@id/+Page.jsx"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Technically ",e.jsx(s.code,{children:"pages/product/@id/+Layout.jsx"})," applies to all pages at ",e.jsx(s.code,{children:"/pages/product/@id/**"})," but there is only one page living there."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("h3",{id:"defaults",children:"Defaults"}),`
`,e.jsx(s.p,{children:"You can set defaults and override them. For example:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"  // Disable SSR by default"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  ssr: "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/(marketing)/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"  // Enable SSR for marketing pages"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  ssr: "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"true"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Cumulative configurations, such as ",e.jsx(n,{href:"/Layout",children:e.jsx(s.code,{children:"<Layout>"})}),", don't get overridden. See ",e.jsxs(s.a,{href:"https://github.com/vikejs/vike/issues/1692",children:["#1692 - [Cumulative configs] New settings ",e.jsx(s.code,{children:"override"})," and ",e.jsx(s.code,{children:"default"})]}),"."]}),`
`]}),`
`,e.jsx("h3",{id:"domain-driven-file-structure",children:"Domain-driven File Structure"}),`
`,e.jsxs(s.p,{children:["You can use a ",e.jsx(n,{href:"/file-structure#domain-driven",children:"domain-driven file structure"})," for better organization and for improved configuration inheritance."]}),`
`,e.jsx("h2",{id:"pointer-imports",children:"Pointer imports"}),`
`,e.jsx(s.p,{children:"Internally, Vike transforms this:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Environment: config"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Layout "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" '../layouts/LayoutDefault.jsx'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Layout"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:"Into:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Environment: config"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{className:"diff remove","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Layout "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" '../layouts/LayoutDefault.jsx'"})]}),`
`,e.jsxs(s.span,{className:"diff add","data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" Layout"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'import:../layouts/LayoutDefault.jsx:default'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Layout"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.p,{children:["This enables Vike to load the file ",e.jsx(s.code,{children:"/pages/+config.js"})," without having to load ",e.jsx(s.code,{children:"LayoutDefault.jsx"}),". This means that Vike can quickly load all your ",e.jsx(s.code,{children:"+config.js"})," files without having to load any runtime code."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["These fake imports, which we call ",e.jsx(s.em,{children:"pointer imports"}),", apply only to ",e.jsx(s.code,{children:"+config.js"})," files. Imports in other ",e.jsx(s.code,{children:"+"})," files are normal imports."]}),`
`]}),`
`,e.jsx(s.p,{children:"It's similar to when you import images:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" logo "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" '../images/logo.svg'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// When you import an image, you don't actually load it: you get a URL instead."})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E"},children:"(logo) "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"// Prints: /assets/logo.svg"})]})]})})}),`
`,e.jsxs(s.p,{children:["Vike transforms an import inside ",e.jsx(s.code,{children:"+config.js"})," to be a pointer import if and only if the import resolves to a file that doesn't end with ",e.jsx(s.code,{children:".js"}),"/",e.jsx(s.code,{children:".ts"}),"/",e.jsx(s.code,{children:".mjs"}),"/",e.jsx(s.code,{children:".mts"}),"/",e.jsx(s.code,{children:".cjs"}),"/",e.jsx(s.code,{children:".cts"}),"."]}),`
`,e.jsxs(s.p,{children:["For example, an import that resolves to a ",e.jsx(s.code,{children:".jsx"})," or ",e.jsx(s.code,{children:".vue"})," file is transformed to be a pointer import:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/ssr.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Environment: config"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" false"})]})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Environment: config"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Resolves to the file LayoutDefault.jsx (a .jsx file) => pointer import"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" Layout "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" '../layouts/LayoutDefault'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Resolves to the file ssr.js (a .js file) => normal import"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ssr "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './ssr'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E"},children:"(Layout) "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"// Prints: import:../layouts/LayoutDefault:default"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E"},children:"(ssr) "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"// Prints: false"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  Layout,"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  ssr"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.code,{children:".jsx"})," or ",e.jsx(s.code,{children:".vue"})," file is meant to be client-/server-side runtime code (it isn't used for defining configuration logic). It therefore makes sense to treat ",e.jsx(s.code,{children:".jsx"})," and ",e.jsx(s.code,{children:".vue"})," imports as pointer imports."]}),`
`]}),`
`,e.jsx("h4",{id:"config-code-isn-t-runtime-code",children:"Config code isn't runtime code"}),`
`,e.jsx(s.p,{children:"The config code itself is never included in runtimes:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/some-page/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// A CSS import in a config file doesn't have any effect. CSS should"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// be imported in runtime files such as +Page.jsx instead."})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './some.css'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// This log is printed only when Vike loads this +config.js file (at development and when"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// building your app). This log isn't included in the client nor server runtime."})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Consequently, you won't see this log in production."})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#032F62"},children:'"I will never be logged in production"'}),e.jsx(s.span,{style:{color:"#24292E"},children:")"})]})]})})}),`
`,e.jsx("h4",{id:"forbidden-runtime-code",children:"Forbidden runtime code"}),`
`,e.jsx(s.p,{children:"If you get this error:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsx(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"[Wrong Usage] title defined by "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"/"}),e.jsx(s.span,{style:{color:"#24292E"},children:"pages"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"/+"}),e.jsx(s.span,{style:{color:"#24292E"},children:"config.js must be defined over a so"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"-"}),e.jsx(s.span,{style:{color:"#24292E"},children:"called "}),e.jsx(s.span,{style:{color:"#032F62"},children:'"pointer import"'})]})})})}),`
`,e.jsxs(s.p,{children:["Then this means you're trying to define runtime code inside a ",e.jsx(s.code,{children:"+config.js"})," file which is forbidden."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"  // ❌ Forbidden: the function title() is runtime code"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"  title"}),e.jsx(s.span,{style:{color:"#24292E"},children:": ("}),e.jsx(s.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(s.span,{style:{color:"#24292E"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E"},children:" pageContext.data.title"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"title()"})," function is called at runtime (when the page is rendered) and ",e.jsx(s.em,{children:"not"})," at config time (when Vike loads ",e.jsx(s.code,{children:"+config.js"})," files)."]}),`
`]}),`
`,e.jsx(s.p,{children:"Instead do this:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+title.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// ✅ Allowed: Vike is able to lazily load this function at runtime"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(s.span,{style:{color:"#24292E"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E"},children:" pageContext.data.title"})]})]})})}),`
`,e.jsx(s.p,{children:"Or this:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// ✅ Allowed: same as defining +title.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" title "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './title'"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" with"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { type: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'pointer'"}),e.jsx(s.span,{style:{color:"#24292E"},children:" }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  title"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h4",{id:"manually-mark-pointer-imports",children:"Manually mark pointer imports"}),`
`,e.jsx(s.p,{children:"You can manually mark an import to be a pointer import:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// Environment: config"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ssr "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" './ssr'"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" with"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { type: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'pointer'"}),e.jsx(s.span,{style:{color:"#24292E"},children:" }"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E"},children:"(ssr) "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"// Prints: import:./ssr:default"})]})]})})}),`
`,e.jsxs(o,{children:["The ",e.jsx(s.code,{children:"with { type: 'pointer' }"})," import attribute isn't implement yet, see workaround at ",e.jsx(s.a,{href:"https://github.com/vikejs/vike/issues/1500",children:"#1500"}),"."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/filesystem-routing"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/file-structure#domain-driven"}),`
`]}),`
`]})]})}function h(l={}){const{wrapper:s}=l.components||{};return s?e.jsx(s,{...l,children:e.jsx(a,{...l})}):a(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/config/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{v as configValuesSerialized};
