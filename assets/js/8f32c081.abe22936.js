"use strict";(self.webpackChunknewsfetch_website=self.webpackChunknewsfetch_website||[]).push([[304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:54},i="Sample Data",s={unversionedId:"features/sample-data",id:"features/sample-data",title:"Sample Data",description:"Sample data is available in the repository. It is located in the folder sample-data under the root directory of the repository.",source:"@site/docs/features/sample-data.md",sourceDirName:"features",slug:"/features/sample-data",permalink:"/docs/features/sample-data",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"tutorialSidebar",previous:{title:"Docker images",permalink:"/docs/features/docker"},next:{title:"API",permalink:"/docs/features/api"}},p={},l=[],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sample-data"},"Sample Data"),(0,n.kt)("p",null,"Sample data is available in the repository. It is located in the folder ",(0,n.kt)("inlineCode",{parentName:"p"},"sample-data")," under the root directory of the repository."),(0,n.kt)("p",null,"The sample data is provided in multiple languages and in the format that is the first stage of the extraction process, and then in the format that is the processed data."),(0,n.kt)("p",null,"The sample data is in the format that is expected by the API. The API is based on FastAPI and uses SQLAlchemy. The data model can be found in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"newsfetch-api/core/db_models.py"),". The wire format of the data is defined in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"newsfetch-core/api_schemas.py"),".\nThis data can be used in the API to populate the database. It is our hope that this will serve as a starting point for the other experiments that can be built with NewsFetch."))}d.isMDXComponent=!0}}]);