"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u4fdd\u7559\u6807\u8bc6\u7b26"},a=void 0,l={unversionedId:"QoL Improvements/Reserved Identifiers",id:"QoL Improvements/Reserved Identifiers",title:"\u4fdd\u7559\u6807\u8bc6\u7b26",description:"Pluto\u5141\u8bb8\u60a8\u5728\u4f7f\u7528\u7b80\u5316\u7684\u8868\u8fbe\u5f0f\u8bed\u6cd5\u548cgoto\u6807\u7b7e\u65f6\uff0c\u5c06\u4fdd\u7559\u6807\u8bb0\uff0c\u4f8b\u5982\u6765\u81eaLua\u7684if\u548c\u6765\u81eaPluto\u7684class\uff0c\u4f5c\u4e3a\u6807\u8bc6\u7b26\u3002",source:"@site/docs/QoL Improvements/Reserved Identifiers.md",sourceDirName:"QoL Improvements",slug:"/QoL Improvements/Reserved Identifiers",permalink:"/docs/QoL Improvements/Reserved Identifiers",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4fdd\u7559\u6807\u8bc6\u7b26"},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664\u4e86\u5c40\u90e8\u53d8\u91cf\u9650\u5236",permalink:"/docs/QoL Improvements/Removed Locals Limit"},next:{title:"\u8bed\u6cd5\u9519\u8bef",permalink:"/docs/QoL Improvements/Syntax Errors"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pluto\u5141\u8bb8\u60a8\u5728\u4f7f\u7528\u7b80\u5316\u7684\u8868\u8fbe\u5f0f\u8bed\u6cd5\u548cgoto\u6807\u7b7e\u65f6\uff0c\u5c06\u4fdd\u7559\u6807\u8bb0\uff0c\u4f8b\u5982\u6765\u81eaLua\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"if"),"\u548c\u6765\u81eaPluto\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"class"),"\uff0c\u4f5c\u4e3a\u6807\u8bc6\u7b26\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u7b80\u5316\u7684\u8868\u8fbe\u5f0f\u8bed\u6cd5\u5c06\u4fdd\u7559\u6807\u8bb0\u4f5c\u4e3a\u6807\u8bc6\u7b26"',showLineNumbers:!0,title:'"\u4f7f\u7528\u7b80\u5316\u7684\u8868\u8fbe\u5f0f\u8bed\u6cd5\u5c06\u4fdd\u7559\u6807\u8bb0\u4f5c\u4e3a\u6807\u8bc6\u7b26"'},'local t = {\n    class = "key"\n}\nprint(t.class)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4fdd\u7559\u6807\u8bb0\u4f5c\u4e3a\u8df3\u8f6c\u6807\u7b7e\u7684\u6807\u8bc6\u7b26"',showLineNumbers:!0,title:'"\u4fdd\u7559\u6807\u8bb0\u4f5c\u4e3a\u8df3\u8f6c\u6807\u7b7e\u7684\u6807\u8bc6\u7b26"'},"-- \u8f93\u51fa\u6bcf\u4e00\u4e2a\u4e0d\u662f 5 \u7684\u6570\nfor i = 1, 10 do\n    if i == 5 then\n        goto continue\n    end\n    print(i)\n    ::continue::\nend\n")),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u53d8\u91cf\u540d\u548c\u51fd\u6570\u8c03\u7528\u4e0d\u5141\u8bb8\u4f7f\u7528\u4fdd\u7559\u6807\u8bb0\u4f5c\u4e3a\u6807\u8bc6\u7b26\u3002"))}m.isMDXComponent=!0}}]);