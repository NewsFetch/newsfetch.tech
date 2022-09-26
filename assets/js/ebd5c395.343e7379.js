"use strict";(self.webpackChunknewsfetch_website=self.webpackChunknewsfetch_website||[]).push([[8078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:55},o="API",l={unversionedId:"features/api",id:"features/api",title:"API",description:"To demonstrate the usage of NewsFetch, we have created a simple API using FastAPI.",source:"@site/docs/features/api.md",sourceDirName:"features",slug:"/features/api",permalink:"/docs/features/api",draft:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"tutorialSidebar",previous:{title:"Sample Data",permalink:"/docs/features/sample-data"},next:{title:"Enriched News",permalink:"/docs/features/enriched-news"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Endpoints",id:"endpoints",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("p",null,"To demonstrate the usage of NewsFetch, we have created a simple API using FastAPI."),(0,r.kt)("admonition",{title:"Try It Out!!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The API is deployed on Render and can be accessed at ",(0,r.kt)("a",{parentName:"p",href:"https://api.newsfetch.tech/docs"},"https://api.newsfetch.tech/docs"),".")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"To use Docker images refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/docker"},"Docker")," page."),(0,r.kt)("h2",{id:"local-development"},"Local Development"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install the API, first clone the repository, and navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"newsfetch-api")," directory."),(0,r.kt)("p",null,"Other installation instructions are the same as for the whole project and can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro"},"here"),"."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To start the API, first activate the virtual environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source venv/bin/activate\n")),(0,r.kt)("p",null,"Then, make a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},".env.sample")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),", and start the API."),(0,r.kt)("p",null,"This will start the API with SQLite database. To use a different database, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file.\nThe sample API uses SQLAlchemy, and supports all databases supported by SQLAlchemy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn fast_api.main:app --reload\n")),(0,r.kt)("p",null,"This will start the API on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,r.kt)("h3",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"The endpoints are documented with OpenAPI and can be accessed at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/docs"),"."),(0,r.kt)("p",null,"To populate the database with sample data, run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python ingest_data.py\n")),(0,r.kt)("p",null,"This will ingest data from the directory specified in the environment variable\nSOURCE_FOLDER to the database via the API. The API endpoint is specified in the\nenvironment variable API_ENDPOINT."),(0,r.kt)("p",null,"The data being ingested is expected to have the valid format that has been defined in the APIs datamodel.\nThe datamodel can be found in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"newsfetch-api/core/db_models.py"),".\nThe wire format of the data is defined in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"newsfetch-core/api_schemas.py"),"."))}d.isMDXComponent=!0}}]);