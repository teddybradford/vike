import{i as l,s as o,a as c,b as a,r as s,c as u,g as f,m as d,d as g,e as k,f as p,h as y,j as S,k as C}from"../chunks/chunk-BRNP8JyN.js";function m(){document.addEventListener("click",P)}async function P(t){if(!N(t))return;const i=h(t.target);if(!i)return;const n=i.getAttribute("href");if(n!=null&&n.includes("#")&&l(n)){t.preventDefault(),o(n.split("#")[1]);return}if(c(i))return;a(n),t.preventDefault();let e;{const r=i.getAttribute("keep-scroll-position");r!==null&&(e={preserveScroll:r!=="false"})}await s({scrollTarget:e,urlOriginal:n,isBackwardNavigation:!1})}function N(t){return t.button===0&&!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey}function h(t){for(;t.tagName!=="A";){const{parentNode:i}=t;if(!i)return null;t=i}return t}async function w(){L();const t=A();m(),u(),await t}async function A(){a(f()===0),await s({scrollTarget:{preserveScroll:!0},isBackwardNavigation:null,isClientSideNavigation:!1})}function L(){d(),g(),k(),p(),y()}S();C();w();
