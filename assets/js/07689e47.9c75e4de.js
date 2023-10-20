"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u6539\u8fdb\u7684\u8fed\u4ee3"},l=void 0,i={unversionedId:"QoL Improvements/Improved Iteration",id:"QoL Improvements/Improved Iteration",title:"\u6539\u8fdb\u7684\u8fed\u4ee3",description:"Pluto \u5728\u51e0\u4e2a\u65b9\u9762\u6539\u8fdb\u4e86\u8fed\u4ee3\u3002",source:"@site/docs/QoL Improvements/Improved Iteration.md",sourceDirName:"QoL Improvements",slug:"/QoL Improvements/Improved Iteration",permalink:"/docs/QoL Improvements/Improved Iteration",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6539\u8fdb\u7684\u8fed\u4ee3"},sidebar:"tutorialSidebar",previous:{title:"\u5e03\u5c14\u503c\u8fde\u63a5",permalink:"/docs/QoL Improvements/Boolean Concatenation"},next:{title:"let \u522b\u540d\u7528\u4e8e local",permalink:"/docs/QoL Improvements/Let Alias For Local"}},p={},c=[{value:"\u5e7f\u4e49\u8fed\u4ee3",id:"\u5e7f\u4e49\u8fed\u4ee3",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pluto \u5728\u51e0\u4e2a\u65b9\u9762\u6539\u8fdb\u4e86\u8fed\u4ee3\u3002"),(0,o.kt)("h2",{id:"\u5e7f\u4e49\u8fed\u4ee3"},"\u5e7f\u4e49\u8fed\u4ee3"),(0,o.kt)("p",null,"\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pairs")," \u51fd\u6570\u8fdb\u884c\u7b80\u5355\u8fed\u4ee3\u662f\u591a\u4f59\u7684\u3002\u73b0\u5728\u8fd9\u4e00\u64cd\u4f5c\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u6ca1\u6709\u8be5\u51fd\u6570\uff0c\u5219\u7531\u865a\u62df\u673a\u5904\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u65b0\u4ee3\u7801"',showLineNumbers:!0,title:'"\u65b0\u4ee3\u7801"'},'local t = { 1, 2, 3, "hello", "world" }\nfor key, value in t do\n    print(key, value)\nend\n')),(0,o.kt)("p",null,"\u4ece\u5faa\u73af\u51c6\u5907\u4e2d\u7701\u7565\u8be5\u51fd\u6570\u65f6\uff0c\u4f1a\u9690\u5f0f\u63d2\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"pairs"),"\u3002\u56e0\u6b64\uff0c\u8be5\u4ee3\u7801\u4e0e\u6b64\u4ee3\u7801\u5b8c\u5168\u76f8\u540c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u8001\u4ee3\u7801"',showLineNumbers:!0,title:'"\u8001\u4ee3\u7801"'},'local t = { 1, 2, 3, "hello", "world" }\nfor key, value in pairs(t) do\n    print(key, value)\nend\n')),(0,o.kt)("p",null,"\u8fd9\u4e0e for \u5faa\u73af\u7684\u4f18\u5316\u517c\u5bb9\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u529f\u80fd\u7684\u5b57\u8282\u7801\u4e0e Lua \u4e0d\u5411\u540e\u517c\u5bb9\u3002")))}m.isMDXComponent=!0}}]);