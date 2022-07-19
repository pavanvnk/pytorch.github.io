"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4281],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>a,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>c});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=i.createContext({}),c=function(e){return function(n){var t=u(n.components);return i.createElement(e,l({},n,{components:t}))}},u=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,a=m(e,["components","mdxType","originalType","parentName"]),c=u(t),s=r,f=c["".concat(o,".").concat(s)]||c[s]||p[s]||l;return t?i.createElement(f,d(d({ref:n},a),{},{components:t})):i.createElement(f,d({ref:n},a))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var d={};for(var m in n)hasOwnProperty.call(n,m)&&(d[m]=n[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var a=2;a<l;a++)o[a]=t[a];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=t(83117),r=(t(67294),t(3905));const l={id:"mobilemodelmodule.modelresultmetrics",title:"Interface: ModelResultMetrics",sidebar_label:"ModelResultMetrics",custom_edit_url:null},o=void 0,d={unversionedId:"api/core/interfaces/mobilemodelmodule.modelresultmetrics",id:"version-0.2.0/api/core/interfaces/mobilemodelmodule.modelresultmetrics",title:"Interface: ModelResultMetrics",description:"MobileModelModule.ModelResultMetrics",source:"@site/versioned_docs/version-0.2.0/api/core/interfaces/mobilemodelmodule.modelresultmetrics.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/mobilemodelmodule.modelresultmetrics",permalink:"/live-website/docs/api/core/interfaces/mobilemodelmodule.modelresultmetrics",draft:!1,editUrl:null,tags:[],version:"0.2.0",frontMatter:{id:"mobilemodelmodule.modelresultmetrics",title:"Interface: ModelResultMetrics",sidebar_label:"ModelResultMetrics",custom_edit_url:null},sidebar:"api",previous:{title:"ModelResult",permalink:"/live-website/docs/api/core/interfaces/mobilemodelmodule.modelresult"},next:{title:"NativeJSRef",permalink:"/live-website/docs/api/core/interfaces/nativejsref.nativejsref-1"}},m={},a=[{value:"Properties",id:"properties",level:2},{value:"inferenceTime",id:"inferencetime",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"packTime",id:"packtime",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"totalTime",id:"totaltime",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"unpackTime",id:"unpacktime",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:a};function u(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/live-website/docs/api/core/modules/mobilemodelmodule"},"MobileModelModule"),".ModelResultMetrics"),(0,r.mdx)("h2",{id:"properties"},"Properties"),(0,r.mdx)("h3",{id:"inferencetime"},"inferenceTime"),(0,r.mdx)("p",null,"\u2022 ",(0,r.mdx)("strong",{parentName:"p"},"inferenceTime"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"The model inference time in milliseconds."),(0,r.mdx)("h4",{id:"defined-in"},"Defined in"),(0,r.mdx)("p",null,"MobileModelModule.ts:26"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"packtime"},"packTime"),(0,r.mdx)("p",null,"\u2022 ",(0,r.mdx)("strong",{parentName:"p"},"packTime"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"The pack time in milliseconds."),(0,r.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,r.mdx)("p",null,"MobileModelModule.ts:30"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"totaltime"},"totalTime"),(0,r.mdx)("p",null,"\u2022 ",(0,r.mdx)("strong",{parentName:"p"},"totalTime"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"The pack time, model inference time, and unpack time in milliseconds."),(0,r.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,r.mdx)("p",null,"MobileModelModule.ts:22"),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"unpacktime"},"unpackTime"),(0,r.mdx)("p",null,"\u2022 ",(0,r.mdx)("strong",{parentName:"p"},"unpackTime"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"The unpack time in milliseconds."),(0,r.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,r.mdx)("p",null,"MobileModelModule.ts:34"))}u.isMDXComponent=!0}}]);