"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:12,title:"\u7c7b\u578b\u63d0\u793a"},l=void 0,o={unversionedId:"New Features/Type Hinting",id:"New Features/Type Hinting",title:"\u7c7b\u578b\u63d0\u793a",description:"\u7c7b\u578b\u63d0\u793a\uff08Type-hinting\uff09\u770b\u8d77\u6765\u662f\u8fd9\u6837\uff1a",source:"@site/docs/New Features/Type Hinting.md",sourceDirName:"New Features",slug:"/New Features/Type Hinting",permalink:"/docs/New Features/Type Hinting",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"\u7c7b\u578b\u63d0\u793a"},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u53c2\u6570",permalink:"/docs/New Features/Named Arguments"},next:{title:"In \u8868\u8fbe\u5f0f",permalink:"/docs/New Features/In Expressions"}},p={},u=[{value:"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u7c7b\u578b\uff1f",id:"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u7c7b\u578b",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7c7b\u578b\u63d0\u793a\uff08Type-hinting\uff09\u770b\u8d77\u6765\u662f\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local var: string = "hello world"\n')),(0,i.kt)("p",null,"\u5b83\u5728\u51fd\u6570\u4e2d\u4e5f\u53ef\u4ee5\u5de5\u4f5c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local function myfunc(a: string, b: string): number\n    return tonumber(a) + tonumber(b)\nend\n\nprint(myfunc(1, "1")) --\x3e \u8fd9\u5c06\u5f97\u5230\u4e00\u4e2a\u5173\u4e8e\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u8b66\u544a\n')),(0,i.kt)("p",null,"\u8fd9\u5bf9\u6027\u80fd\u6ca1\u6709\u5f71\u54cd\u3002\u8fd9\u5b8c\u5168\u662f\u5728\u7f16\u8bd1\u9636\u6bb5\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("h3",{id:"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u7c7b\u578b"},"\u6211\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u7c7b\u578b\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"bool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userdata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void")," (\u4ec5\u8fd4\u56de\u7c7b\u578b)")),(0,i.kt)("p",null,"\u5728\u7c7b\u578b\u63d0\u793a\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u524d\u7f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," \u6765\u8868\u793a\u53ef\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," \u7684\u7c7b\u578b\uff0c\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"?string")," \u8868\u793a\u5b83\u53ef\u4ee5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," \u6216\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," \u6765\u5206\u9694\u4e0d\u540c\u7684\u7c7b\u578b\u9009\u62e9\uff0c\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"string|int")," \u8868\u793a\u5b83\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u6574\u6570\u3002"),(0,i.kt)("p",null,"\u5c06\u6240\u6709\u8fd9\u4e9b\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"?string|int")," \u6765\u8868\u793a\u5b83\u53ef\u4ee5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"\u3001\u5b57\u7b26\u4e32\u6216\u6574\u6570\u7684\u4efb\u4f55\u4e00\u79cd\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u5c1a\u672a\u5b8c\u6210\u7684\u529f\u80fd\uff0c\u5f88\u96be\u5b9e\u73b0 one-pass compiler\u3002\u5141\u8bb8\u5b58\u5728\u4e00\u4e9b\u8986\u76d6\u4e0d\u8db3\u7684\u60c5\u51b5\uff0c\u5e76\u62a5\u544a\u4efb\u4f55\u9519\u8bef\u3002")))}m.isMDXComponent=!0}}]);