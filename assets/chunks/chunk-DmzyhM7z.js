import{a as s,u as c,j as e,p as m}from"./chunk-DXIR04UW.js";import{L as o}from"./chunk-CHgHFBtv.js";/* empty css              */import{C as a}from"./chunk-BvdzzYvC.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./chunk-DWElet6Q.js";function y({tool:r,url:t,hasExtension:i}){s(t,"The `url` prop is required"),i!==void 0&&s(r,"The `tool` prop is required when the `hasExtension` prop is provided");const n=c();return e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Documentation about using Vike with ",e.jsx("a",{href:t,children:m(n.pageTitle)}),"."]}),e.jsxs(a,{children:["This page is maintained by the community and may contain outdated information;"," ",e.jsx("a",{href:p(n.urlPathname),target:"_blank",children:"PR welcome"})," ","to update or improve it."]}),i!==void 0&&e.jsx(d,{toolName:r,toolTitle:n.pageTitle,hasExtension:i})]})}function d({toolName:r,toolTitle:t,hasExtension:i}){return i===!1?e.jsxs(a,{children:["There isn't a ",e.jsx(o,{href:"/extensions",children:"Vike extension"})," for ",t," yet, but"," ",e.jsx("a",{href:"https://github.com/vikejs/vike/issues/1715",children:"contributions welcome to create one"}),". In the meantime, you can manually integrate ",t,"."]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["If you are using ",e.jsxs(o,{href:`/vike-${i}`,children:["vike-",i]})," you can use"," ",e.jsx("code",{children:e.jsxs("a",{href:`https://github.com/vikejs/vike-${i}/tree/main/packages/vike-${i}-${r}#readme`,children:["vike-",i,"-",r]})})," ","for automatic integration."]}),e.jsx("blockquote",{children:e.jsxs("p",{children:["The"," ",e.jsxs("code",{children:["vike-",i,"-",r]})," ","extension requires"," ",e.jsx("code",{children:e.jsxs(o,{href:`/vike-${i}`,children:["vike-",i]})}),"."]})})]})}function p(r){return`https://github.com/vikejs/vike/blob/main/docs/pages${r}/+Page.mdx?plain=1`}export{y as C};
