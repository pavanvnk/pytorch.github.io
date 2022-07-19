"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4365],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=o,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.default)(r,l),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(83117),o=n(67294),r=n(86010),l=n(72389),i=n(67392),s=n(7094),d=n(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n;const{lazy:l,block:c,defaultValue:u,values:h,groupId:v,className:f}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===u?u:null!=(t=null!=u?u:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==x&&!y.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:_}=(0,s.U)(),[N,C]=(0,o.useState)(x),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=v){const e=w[v];null!=e&&e!==N&&y.some((t=>t.value===e))&&C(e)}const k=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==N&&(T(t),C(a),null!=v&&_(v,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=P.indexOf(e.currentTarget)+1;n=null!=(a=P[t])?a:P[0];break}case"ArrowLeft":{var o;const t=P.indexOf(e.currentTarget)-1;n=null!=(o=P[t])?o:P[P.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.default)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":c},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>P.push(e),onKeyDown:O,onFocus:k,onClick:k},l,{className:(0,r.default)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,l.default)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},43868:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const o="surveyLinkBox_bC1w";function r(e){let{docTitle:t}=e;return a.createElement("a",{href:"https://github.com/pytorch/live/issues/new?assignees=&labels=Tutorial+Feedback&template=tutorial_feedback.yml",target:"_blank"},a.createElement("div",{className:o},"Share what we can improve!"))}},36117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905)),r=(n(65488),n(85162),n(43868));const l={id:"prepare-custom-model",sidebar_position:4,title:"Prepare Custom Model"},i=void 0,s={unversionedId:"tutorials/prepare-custom-model",id:"version-0.1/tutorials/prepare-custom-model",title:"Prepare Custom Model",description:"In this tutorial, we will learn how to prepare a custom AI model so that it can be integrated into a PyTorch Live demo.",source:"@site/versioned_docs/version-0.1/tutorials/prepare-custom-model.mdx",sourceDirName:"tutorials",slug:"/tutorials/prepare-custom-model",permalink:"/live-website/docs/0.1/tutorials/prepare-custom-model",draft:!1,editUrl:"https://github.com/pytorch/live/edit/main/website/versioned_docs/version-0.1/tutorials/prepare-custom-model.mdx",tags:[],version:"0.1",sidebarPosition:4,frontMatter:{id:"prepare-custom-model",sidebar_position:4,title:"Prepare Custom Model"},sidebar:"docs",previous:{title:"MNIST Digit Classification",permalink:"/live-website/docs/0.1/tutorials/mnist-digit-classification"},next:{title:"Server Model",permalink:"/live-website/docs/0.1/tutorials/server-model"}},d={},p=[{value:"In this tutorial, we will learn how to prepare a custom AI model so that it can be integrated into a PyTorch Live demo.",id:"in-this-tutorial-we-will-learn-how-to-prepare-a-custom-ai-model-so-that-it-can-be-integrated-into-a-pytorch-live-demo",level:3},{value:"Create Live Spec",id:"create-live-spec",level:2},{value:"Bundle Live Spec with Model",id:"bundle-live-spec-with-model",level:2},{value:"Set up Python virtual environment",id:"set-up-python-virtual-environment",level:3},{value:"Install <code>torch</code> and <code>torchvision</code> dependencies",id:"install-torch-and-torchvision-dependencies",level:3},{value:"Build the Model",id:"build-the-model",level:3},{value:"Learn More About Live Spec",id:"learn-more-about-live-spec",level:2},{value:"Give us feedback",id:"give-us-feedback",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:"tutorial-page"},(0,o.mdx)("h3",{id:"in-this-tutorial-we-will-learn-how-to-prepare-a-custom-ai-model-so-that-it-can-be-integrated-into-a-pytorch-live-demo"},"In this tutorial, we will learn how to prepare a custom AI model so that it can be integrated into a PyTorch Live demo."),(0,o.mdx)("p",null,"PyTorch Live works with high-level data types such as images and strings. To run inference, these high-level data types need to be transformed into tensors and the model output needs to be transformed into high-level data types. Transforming a high-level data type into a tensor is called ",(0,o.mdx)("inlineCode",{parentName:"p"},"pack")," and transforming a tensor into a high-level data type is called ",(0,o.mdx)("inlineCode",{parentName:"p"},"unpack"),"."),(0,o.mdx)("p",null,"Each model will have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"pack")," and an ",(0,o.mdx)("inlineCode",{parentName:"p"},"unpack"),". Both are specified in the PyTorch Live Spec (or Live Spec for short). The Live Spec has to be bundled with the model ",(0,o.mdx)("inlineCode",{parentName:"p"},"ptl")," file as ",(0,o.mdx)("inlineCode",{parentName:"p"},"extra_files"),"."),(0,o.mdx)("p",null,"This section will guide you step-by-step for how to bundle the Live Spec with ",(0,o.mdx)("inlineCode",{parentName:"p"},"pack")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"unpack")," for an image classification model, more specifically the MobileNet V3 (small) model."),(0,o.mdx)("p",null,"We can do this bundling step from anywhere in our filesystem that has access to ",(0,o.mdx)("inlineCode",{parentName:"p"},"python"),". If you already have a PyTorch Live project, follow these steps from a subdirectory in the project directory, for example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"<PYTORCH_LIVE_PROJECT>/models"),", so that the bundled model is in place and ready to go when we're done."),(0,o.mdx)("h2",{id:"create-live-spec"},"Create Live Spec"),(0,o.mdx)("p",null,"Create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"live.spec.json")," file and insert the following definition."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json",metastring:"title=live.spec.json",title:"live.spec.json"},'{\n  "pack": {\n    "type": "tensor_from_image",\n    "image": "image",\n    "transforms": [\n      {\n        "type": "image_to_image",\n        "name": "center_crop"\n      },\n      {\n        "type": "image_to_image",\n        "name": "scale",\n        "width": 224,\n        "height": 224\n      },\n      {\n        "type": "image_to_tensor",\n        "name": "rgb_norm",\n        "mean": [0.485, 0.456, 0.406],\n        "std": [0.229, 0.224, 0.225]\n      }\n    ]\n  },\n  "unpack": {\n    "type": "argmax",\n    "dtype": "float",\n    "key": "maxIdx",\n    "valueKey": "confidence"\n  }\n}\n')),(0,o.mdx)("h2",{id:"bundle-live-spec-with-model"},"Bundle Live Spec with Model"),(0,o.mdx)("p",null,"Next is to download and bundle the Live Spec with the MobileNet V3 model using a Python script."),(0,o.mdx)("h3",{id:"set-up-python-virtual-environment"},"Set up Python virtual environment"),(0,o.mdx)("p",null,"It is recommended to run the Pyhton script in a virtual environment. Python offers a command to create a virtual environment with the following command."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,o.mdx)("h3",{id:"install-torch-and-torchvision-dependencies"},"Install ",(0,o.mdx)("inlineCode",{parentName:"h3"},"torch")," and ",(0,o.mdx)("inlineCode",{parentName:"h3"},"torchvision")," dependencies"),(0,o.mdx)("p",null,"The Python script requires ",(0,o.mdx)("inlineCode",{parentName:"p"},"torch")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"torchvision"),". Use the Python package manager (",(0,o.mdx)("inlineCode",{parentName:"p"},"pip3")," or simply ",(0,o.mdx)("inlineCode",{parentName:"p"},"pip")," in a virtual environment) to install both dependencies."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"pip3 install torch torchvision\n")),(0,o.mdx)("h3",{id:"build-the-model"},"Build the Model"),(0,o.mdx)("p",null,"The following script will download the MobileNet V3 model from the PyTorch Hub, optimize it for mobile use, and bundle the Live Spec as extra file with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ptl")," file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-py",metastring:"title=make_model.py",title:"make_model.py"},'from pathlib import Path\n\nimport torch\nimport torchvision\nfrom torch.utils.mobile_optimizer import optimize_for_mobile\n\nmodel = torchvision.models.mobilenet_v3_small(pretrained=True)\nmodel.eval()\n\nscripted_model = torch.jit.script(model)\noptimized_model = optimize_for_mobile(scripted_model)\nspec = Path("live.spec.json").read_text()\nextra_files = {}\nextra_files["model/live.spec.json"] = spec\noptimized_model._save_for_lite_interpreter("mobilenet_v3_small.ptl", _extra_files=extra_files)\n\nprint("model successfully exported")\n')),(0,o.mdx)("p",null,"Create the ",(0,o.mdx)("inlineCode",{parentName:"p"},"make_model.py")," file, add the Python script above, and then run Python script to create ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobilenet_v3_small.ptl"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-shell"},"python3 make_model.py\n")),(0,o.mdx)("p",null,"If you already have a PyTorch Live project, and you haven't run the commands in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<PYTORCH_LIVE_PROJECT>/models")," directory, copy ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobilenet_v3_small.ptl")," to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<PYTORCH_LIVE_PROJECT>/models")," directory. It will now be accessible to load and run in your PyTorch Live project using the path ",(0,o.mdx)("inlineCode",{parentName:"p"},"models/mobilenet_v3_small.ptl"),"."),(0,o.mdx)("h2",{id:"learn-more-about-live-spec"},"Learn More About Live Spec"),(0,o.mdx)("p",null,"For additional details about the Live Spec JSON format and its transforms, read the ",(0,o.mdx)("a",{parentName:"p",href:"/live-website/docs/0.1/api/model-spec"},"model specification")," page in the API documentation."),(0,o.mdx)("h2",{id:"give-us-feedback"},"Give us feedback"),(0,o.mdx)(r.Z,{docTitle:"Prepare Custom Model",mdxType:"SurveyLinkButton"})))}c.isMDXComponent=!0}}]);