"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3177],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){return function(t){var n=p(t.components);return r.createElement(e,i({},t,{components:n}))}},p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,u=c["".concat(o,".").concat(m)]||c[m]||f[m]||i;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(83117),a=(n(67294),n(3905));const i={id:"nativejsref",title:"Module: NativeJSRef",sidebar_label:"NativeJSRef",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/core/modules/nativejsref",id:"version-0.2.0/api/core/modules/nativejsref",title:"Module: NativeJSRef",description:"Interfaces",source:"@site/versioned_docs/version-0.2.0/api/core/modules/nativejsref.md",sourceDirName:"api/core/modules",slug:"/api/core/modules/nativejsref",permalink:"/live-website/docs/api/core/modules/nativejsref",draft:!1,editUrl:null,tags:[],version:"0.2.0",sidebarPosition:0,frontMatter:{id:"nativejsref",title:"Module: NativeJSRef",sidebar_label:"NativeJSRef",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Models",permalink:"/live-website/docs/api/core/modules/models"},next:{title:"text",permalink:"/live-website/docs/api/core/modules/text"}},s={},d=[{value:"Interfaces",id:"interfaces",level:2},{value:"Functions",id:"functions",level:2},{value:"toPlainNativeJSRef",id:"toplainnativejsref",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"interfaces"},"Interfaces"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/live-website/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef"))),(0,a.mdx)("h2",{id:"functions"},"Functions"),(0,a.mdx)("h3",{id:"toplainnativejsref"},"toPlainNativeJSRef"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"toPlainNativeJSRef"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"ref"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live-website/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,a.mdx)("p",null,"TODO(T122223365) Temporary solution to make new JSI-based native media\nobjects work with the old React Native architecture. For example, the\ndrawImage of the canvas expects a NativeJSRef, which itself only needs to\nhave an ID property with a UUID that resolves to an object on the native\nside."),(0,a.mdx)("p",null,"The new JSI-based native media objects have this ID too to make them\ncompatible with current approach of sending objects between native and\nthe JS thread. However, a JSI-based native media object might have other\nproperties and functions that aren't serializable by the bridge."),(0,a.mdx)("p",null,"This helper function only selects the ID property of the ref, which\nguarantees that the resulting NativeJSRef object is serializable."),(0,a.mdx)("p",null,"This function can be removed once all callsites have been migrated to use\nthe new React Native architecture."),(0,a.mdx)("h4",{id:"parameters"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"ref")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"/live-website/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"A NativeJSRef or a native media object.")))),(0,a.mdx)("h4",{id:"returns"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live-website/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,a.mdx)("p",null,"A Plain NativeJSRef object with only the ID property."),(0,a.mdx)("h4",{id:"defined-in"},"Defined in"),(0,a.mdx)("p",null,"NativeJSRef.ts:88"))}p.isMDXComponent=!0}}]);