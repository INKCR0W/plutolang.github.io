"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"\u7279\u6b8a\u8ba1\u7b97"},a=void 0,l={unversionedId:"Optimizations/Special Arthimetic",id:"Optimizations/Special Arthimetic",title:"\u7279\u6b8a\u8ba1\u7b97",description:"Pluto \u4f1a\u5728\u7f16\u8bd1\u65f6\u5bf9\u7279\u6b8a\u7b97\u672f\u7b97\u6cd5\u8fdb\u884c\u4f18\u5316\u3002",source:"@site/docs/Optimizations/Special Arthimetic.md",sourceDirName:"Optimizations",slug:"/Optimizations/Special Arthimetic",permalink:"/docs/Optimizations/Special Arthimetic",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7279\u6b8a\u8ba1\u7b97"},sidebar:"tutorialSidebar",previous:{title:"\u957f\u8df3\u8f6c",permalink:"/docs/Optimizations/Long Jump"},next:{title:"\u8868\u957f\u5ea6",permalink:"/docs/Optimizations/Table Length"}},p={},c=[],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pluto \u4f1a\u5728\u7f16\u8bd1\u65f6\u5bf9\u7279\u6b8a\u7b97\u672f\u7b97\u6cd5\u8fdb\u884c\u4f18\u5316\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x << 1")," => ",(0,i.kt)("inlineCode",{parentName:"li"},"x + x")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x ** 2")," => ",(0,i.kt)("inlineCode",{parentName:"li"},"x * x")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x // 2")," => ",(0,i.kt)("inlineCode",{parentName:"li"},"x >> 1"))),(0,i.kt)("p",null,"\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u6700\u591a\u53ef\u63d0\u5347 20% \u7684\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u4ec5\u5728\u4e24\u4e2a\u64cd\u4f5c\u6570\u90fd\u662f\u6574\u6570\u4e14\u4e0d\u6d89\u53ca\u5143\u65b9\u6cd5\u8c03\u7528\u65f6\u624d\u4f1a\u88ab\u4f18\u5316\u3002"))}s.isMDXComponent=!0}}]);