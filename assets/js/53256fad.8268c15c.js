"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="\u5de5\u5177",l={unversionedId:"Tooling",id:"Tooling",title:"\u5de5\u5177",description:"\u867d\u7136\u7406\u8bba\u4e0a Pluto \u53ef\u4ee5\u4f7f\u7528\u9762\u5411 Lua \u7684\u5de5\u5177\uff0c\u4f46\u540c\u65f6\u4e5f\u6709\u4e13\u95e8\u7684\u63d2\u4ef6\u6765\u4f18\u5316\u4f60\u5728VS Code\uff0c Sublime Text\u7b49\u4e2d\u7684\u7f16\u7801\u4f53\u9a8c\u3002",source:"@site/docs/Tooling.md",sourceDirName:".",slug:"/Tooling",permalink:"/docs/Tooling",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u4f60\u7684 Pluto \u4e4b\u65c5",permalink:"/docs/Getting Started"},next:{title:"Beginner's Guide",permalink:"/docs/Beginners Guide"}},u={},c=[{value:"\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a",id:"\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a",level:2},{value:"LSP\u670d\u52a1\u5668",id:"lsp\u670d\u52a1\u5668",level:2}],p={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,o.kt)("p",null,"\u867d\u7136\u7406\u8bba\u4e0a Pluto \u53ef\u4ee5\u4f7f\u7528\u9762\u5411 Lua \u7684\u5de5\u5177\uff0c\u4f46\u540c\u65f6\u4e5f\u6709\u4e13\u95e8\u7684\u63d2\u4ef6\u6765\u4f18\u5316\u4f60\u5728VS Code\uff0c Sublime Text\u7b49\u4e2d\u7684\u7f16\u7801\u4f53\u9a8c\u3002"),(0,o.kt)("h2",{id:"\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a"},"\u8bed\u6cd5\u9ad8\u4eae\u663e\u793a"),(0,o.kt)("p",null,"Pluto\u6709\u4e00\u4e2a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PlutoLang/Syntax-Highlighting"},"TextMate\u6346\u7ed1\u5305"),"\u3002\u5b83\u63d0\u4f9b\u8bed\u6cd5\u9ad8\u4eae\u548c\u5173\u952e\u5b57\u8054\u60f3(\u4f8b\u5982\uff0c\u5f53\u4f60\u8f93\u5165\u201cfun\u201d\uff0c\u7136\u540e\u6309tab\u952e)\u3002\u8fd9\u53ef\u4ee5\u5728\u5f88\u591a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff0c\u5305\u62ecSublime Text\u548cVS Code\u3002"),(0,o.kt)("h2",{id:"lsp\u670d\u52a1\u5668"},"LSP\u670d\u52a1\u5668"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PlutoLang/pluto-language-server"},"pluto-language-server"),"\u662f\u4e00\u4e2a\u5728 plutoc \u7684\u57fa\u7840\u4e0a\u6784\u5efa\u7684\u7b80\u5355\u5c01\u88c5\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7 LSP\uff08Language Server Protocol\uff09\u5411\u60a8\u7684\u6587\u672c\u7f16\u8f91\u5668\u63d0\u4f9b\u8b66\u544a\u3001\u9519\u8bef\u3001\u5efa\u8bae/\u81ea\u52a8\u8865\u5168\u7b49\u529f\u80fd\u3002"))}f.isMDXComponent=!0}}]);