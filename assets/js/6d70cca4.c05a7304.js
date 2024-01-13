"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[3049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u590d\u5408\u64cd\u4f5c\u7b26"},l=void 0,i={unversionedId:"New Operators/Compound Operators",id:"New Operators/Compound Operators",title:"\u590d\u5408\u64cd\u4f5c\u7b26",description:"Pluto \u5b9e\u73b0\u4e86\u5927\u91cf\u7684\u590d\u5408\u64cd\u4f5c\u7b26\uff0c\u800c\u4e14\u5b83\u4eec\u7684\u786e\u6bd4 Lua \u4e2d\u7684\u5bf9\u5e94\u64cd\u4f5c\u66f4\u5feb\u3002",source:"@site/docs/New Operators/Compound Operators.md",sourceDirName:"New Operators",slug:"/New Operators/Compound Operators",permalink:"/docs/New Operators/Compound Operators",draft:!1,tags:[],version:"current",frontMatter:{title:"\u590d\u5408\u64cd\u4f5c\u7b26"},sidebar:"tutorialSidebar",previous:{title:"\u5907\u9009\u64cd\u4f5c\u7b26",permalink:"/docs/New Operators/Alternative Operators"},next:{title:"\u9012\u589e\u64cd\u4f5c\u7b26",permalink:"/docs/New Operators/Increment Operator"}},p={},u=[],c={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pluto \u5b9e\u73b0\u4e86\u5927\u91cf\u7684\u590d\u5408\u64cd\u4f5c\u7b26\uff0c\u800c\u4e14\u5b83\u4eec\u7684\u786e\u6bd4 Lua \u4e2d\u7684\u5bf9\u5e94\u64cd\u4f5c\u66f4\u5feb\u3002"),(0,a.kt)("h1",{id:"\u6dfb\u52a0\u9879"},"\u6dfb\u52a0\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d6\u4f59: ",(0,a.kt)("inlineCode",{parentName:"li"},"%=")),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"li"},"+=")),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"li"},"-=")),(0,a.kt)("li",{parentName:"ul"},"\u4e58\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"li"},"*=")),(0,a.kt)("li",{parentName:"ul"},"\u4f4d\u6216: ",(0,a.kt)("inlineCode",{parentName:"li"},"|=")),(0,a.kt)("li",{parentName:"ul"},"\u4f4d\u4e0e: ",(0,a.kt)("inlineCode",{parentName:"li"},"&=")),(0,a.kt)("li",{parentName:"ul"},"\u4f4d\u5de6\u79fb: ",(0,a.kt)("inlineCode",{parentName:"li"},"<<=")),(0,a.kt)("li",{parentName:"ul"},"\u4f4d\u53f3\u79fb: ",(0,a.kt)("inlineCode",{parentName:"li"},">>=")),(0,a.kt)("li",{parentName:"ul"},"\u6307\u6570\u8fd0\u7b97: ",(0,a.kt)("inlineCode",{parentName:"li"},"^=")),(0,a.kt)("li",{parentName:"ul"},"\u6d6e\u70b9\u9664\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"li"},"/=")),(0,a.kt)("li",{parentName:"ul"},"\u6574\u6570\u9664\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"li"},"//=")),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u503c\u5408\u5e76: ",(0,a.kt)("inlineCode",{parentName:"li"},"??=")),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u8fde\u63a5: ",(0,a.kt)("inlineCode",{parentName:"li"},"..="))),(0,a.kt)("h1",{id:"\u5b83\u4eec\u4e3a\u4ec0\u4e48\u66f4\u5feb"},"\u5b83\u4eec\u4e3a\u4ec0\u4e48\u66f4\u5feb\uff1f"),(0,a.kt)("p",null,"\u5b83\u4eec\u5c06\u5de6\u64cd\u4f5c\u6570\u5b58\u50a8\u5728\u4e00\u4e2a\u4e34\u65f6\u5bc4\u5b58\u5668\u4e2d\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u67e5\u627e\u64cd\u4f5c\uff0c\u8fd9\u4f7f\u5b83\u4eec\u5927\u81f4\u5feb\u4e8630%\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'},"local a = 5\n\n-- \u65e7\u7684\na = a + 5\n\n-- \u65b0\u7684\na += 5\n")))}s.isMDXComponent=!0}}]);