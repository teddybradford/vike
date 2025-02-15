import{a,j as e,b as n,i as t,L as c,o as i}from"../chunks/chunk-BE2eZh9O.js";import{L as d}from"../chunks/chunk-BwmONtge.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-lKW7fzw6.js";/* empty css                      */function r({prop:l}){a(!l.startsWith("import")),a(!l.startsWith("."));const s="import.meta."+l;return e.jsx("code",{children:s})}const h=[{pageSectionId:"base",pageSectionLevel:2,pageSectionTitle:"`base`"},{pageSectionId:"baseassets",pageSectionLevel:2,pageSectionTitle:"`baseAssets`"},{pageSectionId:"baseserver",pageSectionLevel:2,pageSectionTitle:"`baseServer`"},{pageSectionId:"setup",pageSectionLevel:2,pageSectionTitle:"Setup"}];function o(l){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"What is the Base URL?"}),` The Base URL (aka Public Path) configures the URL root of your website.
For example, instead of serving your website at `,e.jsx(s.code,{children:"https://example.org/*"})," (the Base URL is ",e.jsx(s.code,{children:"/"}),"), you can serve your website at ",e.jsx(s.code,{children:"https://example.org/some-base/*"})," by setting the Base URL to ",e.jsx(s.code,{children:"/some-base/"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"base",children:e.jsx("code",{children:"base"})}),`
`,e.jsx(s.p,{children:"To change the Base URL:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Set ",e.jsx(s.a,{href:"https://vitejs.dev/config/shared-options.html#base",children:e.jsx(s.code,{children:"vite.config.js#base"})}),".",`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  base: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'/some-base/'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(s.a,{href:"https://vitejs.dev/guide/build.html#public-base-path",children:e.jsx(r,{prop:"env.BASE_URL"})})," to implement a ",e.jsx(s.code,{children:"<Link>"})," component that prepends the Base URL. Example: ",e.jsx(n,{path:"/examples/base-url/components/Link.jsx"}),"."]}),`
`,e.jsxs(s.li,{children:["Use ",e.jsx(r,{prop:"env.BASE_URL"})," for referencing static assets living in ",e.jsx(s.a,{href:"/static-directory#public",children:e.jsx(s.code,{children:"public/"})}),". Example: ",e.jsx(n,{path:"/examples/base-url/renderer/+onRenderHtml.jsx"}),"."]}),`
`]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"html","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"html","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"<!-- view-source:https://my-website.com/some-base/ -->"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"<!-- Website is served at https://my-website.com/some-base/ and"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"     asset URLs are prepended with the Base URL /some-base/ -->"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"<"}),e.jsx(s.span,{style:{color:"#22863A"},children:"html"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"head"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"link"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/logo.svg"'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" rel"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"icon"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"link"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/style.css"'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" rel"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"stylesheet"'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" type"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"text/css"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"head"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"body"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"nav"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">Landing Page</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/about"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">About Page</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"nav"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"script"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" src"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/script.js"'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" type"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"module"'}),e.jsx(s.span,{style:{color:"#24292E"},children:"></"}),e.jsx(s.span,{style:{color:"#22863A"},children:"script"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"body"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"html"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{path:"/examples/base-url/"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"baseassets",children:e.jsx("code",{children:"baseAssets"})}),`
`,e.jsx(s.p,{children:"You can change the base only for your asset URLs, while the base of your page URLs is left unchanged."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"The most common use case is when deploying assets to a CDN."}),`
`]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  baseAssets: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'https://cdn.example.org/my-website-assets/'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.p,{children:["The base of your page URLs isn't changed: your website is still served at ",e.jsx(s.code,{children:"https://my-website.com/*"})," (the Base URL is still ",e.jsx(s.code,{children:"/"}),")."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"html","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"html","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"<!-- view-source:https://my-website.com/ -->"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"<"}),e.jsx(s.span,{style:{color:"#22863A"},children:"html"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"head"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"    <!-- Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"link"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/logo.svg"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      rel"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"icon"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    >"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"link"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/style.css"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      rel"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"stylesheet"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      type"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"text/css"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    >"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"head"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"body"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"nav"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"      <!-- Base URL is '/' -->"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">Landing Page</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/about"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">About Page</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"nav"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"    <!-- Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"script"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" src"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/script.js"'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" type"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"module"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  </"}),e.jsx(s.span,{style:{color:"#24292E"},children:"body"}),e.jsx(s.span,{style:{color:"#D73A49"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"</"}),e.jsx(s.span,{style:{color:"#24292E"},children:"html"}),e.jsx(s.span,{style:{color:"#D73A49"},children:">"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use ",e.jsx(s.code,{children:"process.env.BASE_ASSETS"})," and ",e.jsx(r,{prop:"env.BASE_ASSETS"})," to access the ",e.jsx(s.code,{children:"baseAssets"})," value in your code."]}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{path:"/examples/base-url-cdn/"}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:["By default, the ",e.jsx(s.code,{children:"baseAssets"})," setting applies to both development and production. You can apply it only to production by using ",e.jsx(s.code,{children:"process.env.NODE_ENV"}),":"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" isProduction"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" process.env."}),e.jsx(s.span,{style:{color:"#005CC5"},children:"NODE_ENV"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ==="}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'production'"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" baseAssets"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" isProduction "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"?"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'https://cdn.example.org/my-website-assets/'"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" :"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" undefined"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  baseAssets"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["There is ",e.jsx(s.a,{href:"https://github.com/vikejs/vike/issues/1794",children:"work-in-progress to apply it only in production by default"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"baseserver",children:e.jsx("code",{children:"baseServer"})}),`
`,e.jsx(s.p,{children:"You can do both:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Deploy your static assets to a CDN using the ",e.jsx(s.code,{children:"baseAssets"})," setting."]}),`
`,e.jsxs(s.li,{children:["Change the Base URL of your server using the ",e.jsx(s.code,{children:"baseServer"})," setting."]}),`
`]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  baseAssets: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'https://cdn.example.org/my-website-assets/'"}),e.jsx(s.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  baseServer: "}),e.jsx(s.span,{style:{color:"#032F62"},children:"'/some-base/'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"html","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"html","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"<!-- view-source:https://my-website.com/some-base/ -->"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"<"}),e.jsx(s.span,{style:{color:"#22863A"},children:"html"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"head"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"    <!-- Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"link"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/logo.svg"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      rel"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"icon"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    >"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"link"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/style.css"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      rel"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"stylesheet"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"      type"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"text/css"'})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    >"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"head"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"body"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"nav"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"      <!-- Base URL is '/some-base/' -->"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">Landing Page</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" href"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"/some-base/about"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">About Page</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"a"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    </"}),e.jsx(s.span,{style:{color:"#22863A"},children:"nav"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"    <!-- Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#22863A"},children:"script"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" src"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/script.js"'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" type"}),e.jsx(s.span,{style:{color:"#24292E"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"module"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  </"}),e.jsx(s.span,{style:{color:"#24292E"},children:"body"}),e.jsx(s.span,{style:{color:"#D73A49"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"</"}),e.jsx(s.span,{style:{color:"#24292E"},children:"html"}),e.jsx(s.span,{style:{color:"#D73A49"},children:">"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use ",e.jsx(s.code,{children:"process.env.BASE_SERVER"})," and ",e.jsx(r,{prop:"env.BASE_SERVER"})," to access the ",e.jsx(s.code,{children:"baseServer"})," value in your code."]}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{path:"/examples/base-url-server/"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"setup",children:"Setup"}),`
`,e.jsxs(s.p,{children:["If you set a Base URL for your SSR server, then make sure to properly install ",e.jsx(d,{href:"/renderPage",children:e.jsx(s.code,{children:"renderPage()"})}),"."]}),`
`,e.jsx(s.p,{children:"You can use your server to only route URLs that include the Base URL, for example with Express.js:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`// Make sure \`/some-base/\` aligns with your base setting
app.get('/some-base/*', async (req, res) => {
  // Keep the Base URL (Vike expects it)
  const pageContextInit = { urlOriginal: req.url }
  const pageContext = await renderPage(pageContextInit)
  assert(!pageContext.isBaseMissing)
  // ...
})
`})}),`
`,e.jsxs(s.p,{children:["Or you can use ",e.jsx(s.code,{children:"pageContext.isBaseMissing"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`app.get('*', async (req, res, next) => {
  const pageContextInit = { urlOriginal: req.url }
  const pageContext = await renderPage(pageContextInit)
  if (pageContext.isBaseMissing) return next()
  // ...
})
`})}),`
`,e.jsx(s.p,{children:"Both approaches work equally well."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["When the Base URL is missing then ",e.jsx(s.code,{children:"await renderPage()"})," is effectively synchronous and very quick: the superflous Vike middleware call is negligible."]}),`
`]})]})}function p(l={}){const{wrapper:s}=l.components||{};return s?e.jsx(s,{...l,children:e.jsx(o,{...l})}):o(l)}const x=Object.freeze(Object.defineProperty({__proto__:null,default:p,pageSectionsExport:h},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/base-url/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:c}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}}};export{F as configValuesSerialized};
