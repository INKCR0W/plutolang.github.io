"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5509],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>k});var l=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)i=o[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)i=o[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(i),m=n,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return i?l.createElement(k,r(r({ref:t},p),{},{components:i})):l.createElement(k,r({ref:t},p))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:n,r[1]=a;for(var u=2;u<o;u++)r[u]=i[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}m.displayName="MDXCreateElement"},548:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var l=i(7462),n=(i(7294),i(3905));const o={sidebar_position:1,title:"IO \u51fd\u6570"},r=void 0,a={unversionedId:"Runtime Environment/IO Functions",id:"Runtime Environment/IO Functions",title:"IO \u51fd\u6570",description:"\u7531 Pluto \u5b9e\u73b0\u7684 io \u5e93\u7684\u65b0\u51fd\u6570\u3002",source:"@site/docs/Runtime Environment/IO Functions.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/IO Functions",permalink:"/docs/Runtime Environment/IO Functions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"IO \u51fd\u6570"},sidebar:"tutorialSidebar",previous:{title:"\u8fd0\u884c\u73af\u5883",permalink:"/docs/category/\u8fd0\u884c\u73af\u5883"},next:{title:"OS \u51fd\u6570",permalink:"/docs/Runtime Environment/OS Functions"}},s={},u=[{value:"io.isdir",id:"ioisdir",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"io.isfile",id:"ioisfile",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"io.listdir",id:"iolistdir",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-2",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"io.exists",id:"ioexists",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-3",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4},{value:"io.copyto",id:"iocopyto",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-4",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:4},{value:"io.filesize",id:"iofilesize",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:4},{value:"io.makedir",id:"iomakedir",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-6",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-6",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:4},{value:"io.makedirs",id:"iomakedirs",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-7",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:4},{value:"io.absolute",id:"ioabsolute",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-8",level:4},{value:"\u8fd4\u56de",id:"\u8fd4\u56de-7",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7531 Pluto \u5b9e\u73b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"io")," \u5e93\u7684\u65b0\u51fd\u6570\u3002"),(0,n.kt)("h3",{id:"ioisdir"},"io.isdir"),(0,n.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u8005\u6587\u4ef6\u6d41\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,n.kt)("p",null,"A boolean indicating if the path led toward a directory."),(0,n.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'local path = "./dir/main/"\nlocal bool = io.isdir(path)\nif bool then\n    print("Directory!")\nelse\n    print("Not a directory!")\nend\n')),(0,n.kt)("h3",{id:"ioisfile"},"io.isfile"),(0,n.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u8005\u6587\u4ef6\u6d41\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-1"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8def\u5f84\u662f\u5426\u6307\u5411\u6587\u4ef6\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'local path = "./isfile/file"\nlocal bool = io.isdir(path)\nif bool then\n    print("File!")\nelse\n    print("Not a file!")\nend\n')),(0,n.kt)("h3",{id:"iolistdir"},"io.listdir"),(0,n.kt)("p",null,"\u5217\u51fa\u4e00\u4e2a\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u76ee\u5f55\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u5bf9\u5b50\u76ee\u5f55\u8fdb\u884c\u9012\u5f52\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-2"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5c06\u7d22\u5f15\u6620\u5c04\u5230\u6587\u4ef6\u8def\u5f84\u7684\u8868\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'for _, filepath in io.listdir(".") do\n    print(filepath)\nend\n')),(0,n.kt)("h3",{id:"ioexists"},"io.exists"),(0,n.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u8005\u6587\u4ef6\u6d41\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-3"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u5e03\u5c14\u503c\uff0c\u8868\u793a\u8def\u5f84\u662f\u5426\u6307\u5411\u73b0\u6709\u6587\u4ef6\u6216\u76ee\u5f55\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'if io.exists("cfg/config.txt") then\n    print("Config exists!")\nelse\n    print("Config does not exist!")\nend\n')),(0,n.kt)("h3",{id:"iocopyto"},"io.copyto"),(0,n.kt)("p",null,"\u5c06\u4e00\u4e2a\u6587\u4ef6\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u6587\u4ef6\uff0c\u5fc5\u8981\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u8005\u6587\u4ef6\u6d41\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8981\u590d\u5236\u5230\u7684\u6587\u4ef6\u7684\u8def\u5f84\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-4"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u5e03\u5c14\u503c\uff0c\u8868\u793a\u6587\u4ef6\u662f\u5426\u590d\u5236\u6210\u529f\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'if io.copyto("./cfg/config.txt", "./backup_cfg/config.txt") then\n    print("Successfully created a backup config!")\nelse\n    print("Failed to create a backup config.")\nend\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u4ece 0.3.2 \u8d77\uff0c\u5931\u8d25\u65f6\u53ef\u80fd\u4f1a\u629b\u51fa\u5f02\u5e38\u3002")),(0,n.kt)("h3",{id:"iofilesize"},"io.filesize"),(0,n.kt)("p",null,"\u4ee5 kb \u4e3a\u5355\u4f4d\u83b7\u53d6\u6587\u4ef6\u5927\u5c0f\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u8005\u6587\u4ef6\u6d41\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-5"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u4e00\u4e2a\u6d6e\u70b9\u6570"),(0,n.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'if io.filesize("cfg/config.txt") < 1.0 then\n    print("Config is too small or empty.")\nend\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u4ece 0.3.2 \u8d77\uff0c\u5931\u8d25\u65f6\u53ef\u80fd\u4f1a\u629b\u51fa\u5f02\u5e38\u3002")),(0,n.kt)("h3",{id:"iomakedir"},"io.makedir"),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55"),(0,n.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u65b0\u76ee\u5f55\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-6"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u5e03\u5c14\u503c\uff0c\u8868\u793a\u76ee\u5f55\u662f\u5426\u521b\u5efa\u6210\u529f\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'if io.makedir("./cfg") then\n    print("Created cfg directory.")\nelse\n    print("Failed to create cfg directory.")\nend\n')),(0,n.kt)("h3",{id:"iomakedirs"},"io.makedirs"),(0,n.kt)("p",null,"\u5728\u7ed9\u5b9a\u8def\u5f84\u4e0b\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u548c\u6240\u6709\u4e0d\u5b58\u5728\u7684\u7236\u76ee\u5f55\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u65b0\u76ee\u5f55\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u3002")),(0,n.kt)("h4",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'io.makedirs("A/B/C") --\x3e Creates "C:\\Users\\Username\\Desktop\\Project\\A\\B\\C"\n')),(0,n.kt)("h3",{id:"ioabsolute"},"io.absolute"),(0,n.kt)("p",null,"\u5c06\u76f8\u5bf9\u8def\u5f84\u8f6c\u6362\u4e3a\u7edd\u5bf9\u8def\u5f84\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8def\u5f84\u5b57\u7b26\u4e32\u6216\u8005\u6587\u4ef6\u6d41\u3002")),(0,n.kt)("h4",{id:"\u8fd4\u56de-7"},"\u8fd4\u56de"),(0,n.kt)("p",null,"\u8868\u793a\u6587\u4ef6\u8def\u5f84\u7684\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="\u4f7f\u7528\u793a\u4f8b"',showLineNumbers:!0,title:'"\u4f7f\u7528\u793a\u4f8b"'},'--\x3e cfg/config.txt\nio.absolute("cfg/cfg.txt") --\x3e "C:\\Users\\Username\\Desktop\\Project\\cfg\\cfg.txt"\n')))}c.isMDXComponent=!0}}]);