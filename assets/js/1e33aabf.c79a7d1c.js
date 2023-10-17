"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"QoL Improvements/Syntax Errors",id:"QoL Improvements/Syntax Errors",title:"Syntax Errors",description:"The messages for syntax errors are enhanced. They include tailored messages and code snippets, which should help newer programmers identify problems quicker. It's not a game changer, but it's neat.",source:"@site/docs/QoL Improvements/Syntax Errors.md",sourceDirName:"QoL Improvements",slug:"/QoL Improvements/Syntax Errors",permalink:"/docs/QoL Improvements/Syntax Errors",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reserved Identifiers",permalink:"/docs/QoL Improvements/Reserved Identifiers"},next:{title:"Runtime Environment",permalink:"/docs/category/runtime-environment"}},s={},p=[{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"ANSI Coloring",id:"ansi-coloring",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The messages for syntax errors are enhanced. They include tailored messages and code snippets, which should help newer programmers identify problems quicker. It's not a game changer, but it's neat."),(0,o.kt)("h3",{id:"example-1"},"Example 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Problematic Code"',showLineNumbers:!0,title:'"Problematic','Code"':!0},'if a < b and t == 5 return "Gottem" end\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Emitted Syntax Error"',title:'"Emitted',Syntax:!0,'Error"':!0},"syntax error: file.pluto:1: expected 'then' to delimit condition.\n    1 | if a < b and t == 5 return \"Gottem\" end\n      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: expected 'then' symbol.\n")),(0,o.kt)("h3",{id:"example-2"},"Example 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Problematic Code"',showLineNumbers:!0,title:'"Problematic','Code"':!0},"local fn = |a, b, c| => (a == b and a < c)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Emitted Syntax Error"',title:'"Emitted',Syntax:!0,'Error"':!0},"syntax error: file.pluto:1: impromper lambda definition\n    1 | local fn = |a, b, c| => (a == b and a < c)\n      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: expected '->' arrow syntax for lambda expression.\n")),(0,o.kt)("h2",{id:"ansi-coloring"},"ANSI Coloring"),(0,o.kt)("p",null,"These errors support coloring, but it's disabled by default. Define the ",(0,o.kt)("inlineCode",{parentName:"p"},"PLUTO_USE_COLORED_OUTPUT")," macro in ",(0,o.kt)("inlineCode",{parentName:"p"},"luaconf.h")," or your build config to enable colored error messages."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For Windows users, you can enable ANSI coloring support with the following command:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REG ADD HKCU\\CONSOLE /f /v VirtualTerminalLevel /t REG_DWORD /d 1")))))}u.isMDXComponent=!0}}]);