"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:10,title:"For-As \u5faa\u73af"},i=void 0,l={unversionedId:"New Features/For-As Loop",id:"New Features/For-As Loop",title:"For-As \u5faa\u73af",description:"\u5f53\u60a8\u53ea\u60f3\u904d\u5386\u8868\u7684\u503c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528Pluto\u7684for-as\u8bed\u6cd5\u3002",source:"@site/docs/New Features/For-As Loop.md",sourceDirName:"New Features",slug:"/New Features/For-As Loop",permalink:"/docs/New Features/For-As Loop",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"For-As \u5faa\u73af"},sidebar:"tutorialSidebar",previous:{title:"\u679a\u4e3e",permalink:"/docs/New Features/Enumerations"},next:{title:"Switch \u8bed\u53e5",permalink:"/docs/New Features/Switch Statement"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f53\u60a8\u53ea\u60f3\u904d\u5386\u8868\u7684\u503c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528Pluto\u7684for-as\u8bed\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u65b0\u65b9\u6cd5"',showLineNumbers:!0,title:'"\u65b0\u65b9\u6cd5"'},'local t = { 1, 2, 3, "hello", "world" }\nfor t as value do\n    print(value)\nend\n\n-- 1\n-- 2\n-- 3\n-- hello\n-- world\n')),(0,o.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Old Code"',showLineNumbers:!0,title:'"Old','Code"':!0},'local t = { 1, 2, 3, "hello", "world" }\nfor _, value in t do\n    print(value)\nend\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u529f\u80fd\u7684\u5b57\u8282\u7801\u53ea\u6709\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"pairs"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"ipairs"),"\u65f6\u624d\u4e0eLua\u5411\u540e\u517c\u5bb9\u3002")))}d.isMDXComponent=!0}}]);