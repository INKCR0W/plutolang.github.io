"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4,title:"Lambda \u8868\u8fbe\u5f0f"},i=void 0,s={unversionedId:"New Features/Lambda Expressions",id:"New Features/Lambda Expressions",title:"Lambda \u8868\u8fbe\u5f0f",description:"Lambda\u8868\u8fbe\u5f0f\u662f\u4e00\u79cd\u7528\u4e8e\u8bc4\u4f30\u5feb\u901f\u8868\u8fbe\u5f0f\u7684\u51fd\u6570\u5bf9\u8c61\u7684\u7b80\u5199\u65b9\u5f0f\u3002\u770b\u770b\u8fd9\u6bb5\u4ee3\u7801\uff1a",source:"@site/docs/New Features/Lambda Expressions.md",sourceDirName:"New Features",slug:"/New Features/Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Lambda \u8868\u8fbe\u5f0f"},sidebar:"tutorialSidebar",previous:{title:"Continue \u8bed\u53e5",permalink:"/docs/New Features/Continue Statement"},next:{title:"\u8868\u51bb\u7ed3",permalink:"/docs/New Features/Table Freezing"}},l={},c=[{value:"\u8bd5\u4e00\u8bd5",id:"\u8bd5\u4e00\u8bd5",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lambda\u8868\u8fbe\u5f0f\u662f\u4e00\u79cd\u7528\u4e8e\u8bc4\u4f30\u5feb\u901f\u8868\u8fbe\u5f0f\u7684\u51fd\u6570\u5bf9\u8c61\u7684\u7b80\u5199\u65b9\u5f0f\u3002\u770b\u770b\u8fd9\u6bb5\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u65e7\u65b9\u6cd5"',showLineNumbers:!0,title:'"\u65e7\u65b9\u6cd5"'},'local s1 = "123"\nlocal s2 = s1:gsub(".", function (c) return tonumber(c) + 1 end)\nprint(s2) -- "234"\n')),(0,a.kt)("p",null,"Lambda\u8868\u8fbe\u5f0f\u53ea\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\uff0c\u56e0\u4e3a\u4f60\u53ef\u4ee5\u8fd9\u6837\u4ee3\u66ff\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="\u65b0\u65b9\u6cd5"',title:'"\u65b0\u65b9\u6cd5"'},'local s1 = "123"\nlocal s2 = s1:gsub(".", |c| -> tonumber(c) + 1)\nprint(s2) -- "234"\n')),(0,a.kt)("p",null,"\u5728\u4efb\u4f55\u9700\u8981\u51fd\u6570\u5bf9\u8c61\u7684\u5730\u65b9\uff0clambda\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u56e0\u4e3alambda\u53ea\u662f\u4e00\u4e2a\u51fd\u6570\u3002"),(0,a.kt)("h4",{id:"\u8bd5\u4e00\u8bd5"},(0,a.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20str%20%3D%20%22123%22%0D%0Alocal%20inc_str%20%3D%20str%3Agsub(%22.%22%2C%20%7Cc%7C%20-%3E%20tonumber(c)%20%2B%201)%0D%0Aprint(inc_str)%20--%20%22234%22"},"\u8bd5\u4e00\u8bd5")))}m.isMDXComponent=!0}}]);