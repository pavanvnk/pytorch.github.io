"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9864],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>p});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=l.createContext({}),p=function(e){return function(t){var a=s(t.components);return l.createElement(e,r({},t,{components:a}))}},s=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return l.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,f=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return a?l.createElement(f,i(i({ref:t},m),{},{components:a})):l.createElement(f,i({ref:t},m))}));function x(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,d=new Array(r);d[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var m=2;m<r;m++)d[m]=a[m];return l.createElement.apply(null,d)}return l.createElement.apply(null,a)}f.displayName="MDXCreateElement"},68562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=a(83117),n=(a(67294),a(3905));const r={id:"mobilemodelmodule.mobilemodel",title:"Interface: MobileModel",sidebar_label:"MobileModel",custom_edit_url:null},d=void 0,i={unversionedId:"api/core/interfaces/mobilemodelmodule.mobilemodel",id:"version-0.2.0/api/core/interfaces/mobilemodelmodule.mobilemodel",title:"Interface: MobileModel",description:"MobileModelModule.MobileModel",source:"@site/versioned_docs/version-0.2.0/api/core/interfaces/mobilemodelmodule.mobilemodel.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/mobilemodelmodule.mobilemodel",permalink:"/live-website/docs/api/core/interfaces/mobilemodelmodule.mobilemodel",draft:!1,editUrl:null,tags:[],version:"0.2.0",frontMatter:{id:"mobilemodelmodule.mobilemodel",title:"Interface: MobileModel",sidebar_label:"MobileModel",custom_edit_url:null},sidebar:"api",previous:{title:"Image",permalink:"/live-website/docs/api/core/interfaces/imagemodule.image"},next:{title:"ModelResult",permalink:"/live-website/docs/api/core/interfaces/mobilemodelmodule.modelresult"}},o={},m=[{value:"Methods",id:"methods",level:2},{value:"download",id:"download",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"execute",id:"execute",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"preload",id:"preload",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"unload",id:"unload",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}],p={toc:m};function s(e){let{components:t,...a}=e;return(0,n.mdx)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/live-website/docs/api/core/modules/mobilemodelmodule"},"MobileModelModule"),".MobileModel"),(0,n.mdx)("h2",{id:"methods"},"Methods"),(0,n.mdx)("h3",{id:"download"},"download"),(0,n.mdx)("p",null,"\u25b8 ",(0,n.mdx)("strong",{parentName:"p"},"download"),"(",(0,n.mdx)("inlineCode",{parentName:"p"},"modelPath"),"): ",(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<string",">"),(0,n.mdx)("p",null,"Download a model to the local file system and return the local file path\nas a model. If the model path is a file path already, it will return the\nsame path as a result."),(0,n.mdx)("h4",{id:"parameters"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"modelPath")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/live-website/docs/api/core/modules/models#modelpath"},"ModelPath")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The model path as require or uri (i.e., ",(0,n.mdx)("inlineCode",{parentName:"td"},"require"),").")))),(0,n.mdx)("h4",{id:"returns"},"Returns"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<string",">"),(0,n.mdx)("h4",{id:"defined-in"},"Defined in"),(0,n.mdx)("p",null,"MobileModelModule.ts:70"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"execute"},"execute"),(0,n.mdx)("p",null,"\u25b8 ",(0,n.mdx)("strong",{parentName:"p"},"execute"),"<T",">","(",(0,n.mdx)("inlineCode",{parentName:"p"},"modelPath"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.mdx)("a",{parentName:"p",href:"/live-website/docs/api/core/interfaces/mobilemodelmodule.modelresult"},"ModelResult"),"<T",">",">"),(0,n.mdx)("p",null,"Run inference on a model."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-typescript"},"const classificationModel = require('../models/mobilenet_v3_small.ptl');\n\n// or\n\nconst classificationModel = require('https://example.com/models/mobilenet_v3_small.ptl');\n\nconst image: Image = await ImageUtils.fromURL('https://image.url');\n\nconst { result: {maxIdx} } = await MobileModel.execute(\n  classificationModel,\n  {\n    image,\n  }\n);\n\nconst topClass = ImageClasses(scores);\n")),(0,n.mdx)("h4",{id:"type-parameters"},"Type parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"T"))))),(0,n.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"modelPath")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/live-website/docs/api/core/modules/models#modelpath"},"ModelPath")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The model path as require or uri (i.e., ",(0,n.mdx)("inlineCode",{parentName:"td"},"require"),").")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"params")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"any")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The input parameters for the model.")))),(0,n.mdx)("h4",{id:"returns-1"},"Returns"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.mdx)("a",{parentName:"p",href:"/live-website/docs/api/core/interfaces/mobilemodelmodule.modelresult"},"ModelResult"),"<T",">",">"),(0,n.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,n.mdx)("p",null,"MobileModelModule.ts:113"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"preload"},"preload"),(0,n.mdx)("p",null,"\u25b8 ",(0,n.mdx)("strong",{parentName:"p"},"preload"),"(",(0,n.mdx)("inlineCode",{parentName:"p"},"modelPath"),"): ",(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Preload a model. If a model is not preloaded, it will be loaded during the\nfirst inference call. However, the first inference time will therefore\ntake significantly longer. This function allows to preload a model ahead\nof time before running the first inference."),(0,n.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,n.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("inlineCode",{parentName:"td"},"modelPath")),(0,n.mdx)("td",{parentName:"tr",align:"left"},(0,n.mdx)("a",{parentName:"td",href:"/live-website/docs/api/core/modules/models#modelpath"},"ModelPath")),(0,n.mdx)("td",{parentName:"tr",align:"left"},"The model path as require or uri (i.e., ",(0,n.mdx)("inlineCode",{parentName:"td"},"require"),").")))),(0,n.mdx)("h4",{id:"returns-2"},"Returns"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,n.mdx)("p",null,"MobileModelModule.ts:79"),(0,n.mdx)("hr",null),(0,n.mdx)("h3",{id:"unload"},"unload"),(0,n.mdx)("p",null,"\u25b8 ",(0,n.mdx)("strong",{parentName:"p"},"unload"),"(): ",(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("p",null,"Unload all model. If any model were loaded previously, they will be discarded.\nThis function allows to load a new version of a model without restarting the\napp."),(0,n.mdx)("h4",{id:"returns-3"},"Returns"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,n.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,n.mdx)("p",null,"MobileModelModule.ts:86"))}s.isMDXComponent=!0}}]);