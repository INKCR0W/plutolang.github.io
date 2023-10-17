"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"VM Dump"},l=void 0,i={unversionedId:"For Integrators/VM Dump",id:"For Integrators/VM Dump",title:"VM Dump",description:"Pluto \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u9009\u7684\u3001\u53ef\u914d\u7f6e\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u67e5\u770b\u5728 Lua VM \u4e2d\u6267\u884c\u7684\u6bcf\u6761\u6307\u4ee4\u3002",source:"@site/docs/For Integrators/VM Dump.md",sourceDirName:"For Integrators",slug:"/For Integrators/VM Dump",permalink:"/docs/For Integrators/VM Dump",draft:!1,tags:[],version:"current",frontMatter:{title:"VM Dump"},sidebar:"tutorialSidebar",previous:{title:"\u65e0\u9650\u5faa\u73af\u9884\u9632",permalink:"/docs/For Integrators/Infinite Loop Prevention"}},u={},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5b83\u770b\u8d77\u6765\u50cf\u8fd9\u6837",id:"\u5b83\u770b\u8d77\u6765\u50cf\u8fd9\u6837",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pluto \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u9009\u7684\u3001\u53ef\u914d\u7f6e\u7684\u529f\u80fd\uff0c\u53ef\u4ee5\u67e5\u770b\u5728 Lua VM \u4e2d\u6267\u884c\u7684\u6bcf\u6761\u6307\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"VM Dump \u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"luaconf.h")," \u6216\u4f60\u7684\u6784\u5efa\u914d\u7f6e\u4e2d\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"PLUTO_VMDUMP")," \u6765\u542f\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u8f93\u51fa\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"PLUTO_VMDUMP_COND")," \u6765\u8bbe\u7f6e VM Dump \u6fc0\u6d3b\u65f6\u7684\u81ea\u5b9a\u4e49\u6761\u4ef6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6761\u4ef6\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u867d\u7136\u4e0d\u662f VM Dump \u7684\u7279\u5b9a\u914d\u7f6e\uff0c\u4f46\u503c\u5f97\u6ce8\u610f\u7684\u662f\u4f60\u53ef\u4ee5\u4fee\u6539\u8f93\u51fa\u5b8f ",(0,a.kt)("inlineCode",{parentName:"li"},"lua_writestring")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"lua_writeline"),"\u3002")),(0,a.kt)("h2",{id:"\u5b83\u770b\u8d77\u6765\u50cf\u8fd9\u6837"},"\u5b83\u770b\u8d77\u6765\u50cf\u8fd9\u6837"),(0,a.kt)("p",null,"\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local value = 3\nswitch value do\n  case 1:\n  case 2:\n  case 3:\n  case 4:\n  case 5:\n    print("Got 1-5.")\n    break\n  default:\n    print("Value is greater than 5.")\nend\n-- Break jumps here.\n')),(0,a.kt)("p",null,"\u5b83\u5c06\u8f93\u51fa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VARARGPREP 0        ; prepare for 0 varargs\nLOADI      0 3      ; push 3\nMOVE       1 0      ; move 3 into R(A)\nEQI        1 1 0    ; 3 == 1\nEQI        1 2 1    ; 3 == 2\nEQI        1 3 1    ; 3 == 3\nGETTABUP   2 0 0    ; push T['print'] for function-0x247d2882520 (T=table-0x247d29ec9c8)                                              \nLOADK      3 1      ; push \"Got 1-5.\"\n<OUTPUT> Got 1-5.\nCALL       2 2 1    ; call cfunc (nresults=0 nparams=0)                                                                                                              \nJMP        13       ; offset=13 newpc=0x247d29e90d8\nRETURN     1 1 1    ; return 0 value(s)\n")))}m.isMDXComponent=!0}}]);