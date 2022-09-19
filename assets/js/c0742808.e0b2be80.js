"use strict";(self.webpackChunknewsfetch_website=self.webpackChunknewsfetch_website||[]).push([[15],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,d=f["".concat(s,".").concat(p)]||f[p]||m[p]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>E,default:()=>P,frontMatter:()=>v,metadata:()=>x,toc:()=>k});var n=r(7462),o=r(7294),a=r(3905),c=r(6010),i=r(2802),s=r(9960),l=r(3919),u=r(5999);const m="cardContainer_fWXF",f="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return o.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",m)},r)}function y(e){let{href:t,icon:r,title:n,description:a}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,c.Z)("text--truncate",f),title:n},r," ",n),a&&o.createElement("p",{className:(0,c.Z)("text--truncate",p),title:a},a))}function b(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?o.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return o.createElement(y,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const r=(0,i.jA)();return o.createElement(O,{items:r.items,className:t})}function O(e){const{items:t,className:r}=e;if(!t)return o.createElement(w,e);const n=(0,i.MN)(t);return o.createElement("section",{className:(0,c.Z)("row",r)},n.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(g,{item:e})))))}const v={sidebar_position:51},E="Features",x={unversionedId:"features/index",id:"features/index",title:"Features",description:"",source:"@site/docs/features/index.md",sourceDirName:"features",slug:"/features/",permalink:"/docs/features/",draft:!1,tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Common Crawl News Extraction",permalink:"/docs/features/common-crawl-news-extraction"}},j={},k=[],N={toc:k};function P(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)(O,{mdxType:"DocCardList"}))}P.isMDXComponent=!0}}]);