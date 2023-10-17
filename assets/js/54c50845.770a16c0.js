"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6705],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={},i=void 0,s={unversionedId:"New Features/Object-Oriented Programming",id:"New Features/Object-Oriented Programming",title:"Object-Oriented Programming",description:"Pluto makes a plethora of improvements when it comes to object-oriented programming.",source:"@site/docs/New Features/Object-Oriented Programming.md",sourceDirName:"New Features",slug:"/New Features/Object-Oriented Programming",permalink:"/docs/New Features/Object-Oriented Programming",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compiler Warnings",permalink:"/docs/New Features/Compiler Warnings"},next:{title:"QoL Improvements",permalink:"/docs/category/qol-improvements"}},l={},c=[{value:"Method Creation",id:"method-creation",level:2},{value:"Static Functions",id:"static-functions",level:2},{value:"New Expression",id:"new-expression",level:2},{value:"Class Statement",id:"class-statement",level:2},{value:"Class Expression",id:"class-expression",level:3},{value:"Extends",id:"extends",level:3},{value:"Parent Expression",id:"parent-expression",level:2},{value:"Constructor Promotion",id:"constructor-promotion",level:2},{value:"Instanceof Operator",id:"instanceof-operator",level:2},{value:"Using Compatibility Mode?",id:"using-compatibility-mode",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pluto makes a plethora of improvements when it comes to object-oriented programming."),(0,o.kt)("h2",{id:"method-creation"},"Method Creation"),(0,o.kt)("p",null,"A series of methods was otherwise ugly to implement into a Lua table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Old Code"',showLineNumbers:!0,title:'"Old','Code"':!0},"local t = {}\n\nfunction t:f1(...) end\nfunction t:f2(...) end\nfunction t:f3(...) end\n")),(0,o.kt)("p",null,"Now, you can inline these statements inside of your table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="New Code"',showLineNumbers:!0,title:'"New','Code"':!0},"local t = {\n    function f1() end,\n    function f2() end,\n    function f3() end\n}\n")),(0,o.kt)("p",null,"This automatically marks the functions as methods."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind, this produces ",(0,o.kt)("em",{parentName:"p"},"methods"),", meaning you'll need to use the colon invocation syntax to avoid positional ambiguities in your parameters.")),(0,o.kt)("h2",{id:"static-functions"},"Static Functions"),(0,o.kt)("p",null,"For consistency with the above syntax, you can use 'static function' to declare non-method functions in your tables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local t = {\n    static function say(msg)\n        print(msg)\n    end\n}\nt.say("Hello") -- "Hello"\n')),(0,o.kt)("h2",{id:"new-expression"},"New Expression"),(0,o.kt)("p",null,"Pluto adds an easy way to make instances with the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," expression. This expression will also call the ",(0,o.kt)("inlineCode",{parentName:"p"},"__construct")," method if it exists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local Human = {\n    function __construct(name)\n        self.name = name\n    end\n}\nlocal john = new Human("John")\nprint(john.name) -- John\n')),(0,o.kt)("h2",{id:"class-statement"},"Class Statement"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," statement is similar to a table constructor, but it does not require commas or semicolons:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'class Human\n    function __construct(name)\n        self.name = name\n    end\n\n    function __gc()\n        print(self.name .. " died of irrelevance")\n    end\nend\nlocal john = new Human("John")\n')),(0,o.kt)("p",null,"The class statement also supports modifiers: ",(0,o.kt)("inlineCode",{parentName:"p"},"local class NAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"export class NAME")),(0,o.kt)("h3",{id:"class-expression"},"Class Expression"),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," expression, which can be used e.g. when assigning to a variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},"local Human = class\n    function __construct(name)\n        self.name = name\n    end\nend\n")),(0,o.kt)("h3",{id:"extends"},"Extends"),(0,o.kt)("p",null,"The class statement also supports ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," to specify a parent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},"class Entity\n    age = 1\nend\n\nclass Human extends Entity\nend\n\nlocal human = new Human()\nprint(human.age) -- 1\n")),(0,o.kt)("p",null,"This also adds a ",(0,o.kt)("inlineCode",{parentName:"p"},"__parent")," field to Human."),(0,o.kt)("h2",{id:"parent-expression"},"Parent Expression"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," expression is a shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__parent"),", which also supports method call syntax, in which case it's a shorthand for ",(0,o.kt)("inlineCode",{parentName:"p"},"self.__parent.METHOD(self, ...)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'class Entity\n    function __construct(name)\n        self.name = name\n    end\nend\n\nclass Human extends Entity\n    -- If we don\'t define __construct, the parent-constructor would be called automatically.\n    -- However, if we overwrite it, we can use parent:__construct to call it manually.\n    function __construct(name)\n        parent:__construct(name)\n    end\nend\n\nlocal human = new Human("John")\nprint(human.name) -- "John"\n')),(0,o.kt)("p",null,'Note that if you have a local variable (or function parameter) called "parent", the ',(0,o.kt)("inlineCode",{parentName:"p"},"parent")," expression will defer to it."),(0,o.kt)("h2",{id:"constructor-promotion"},"Constructor Promotion"),(0,o.kt)("p",null,"Because a common task of ",(0,o.kt)("inlineCode",{parentName:"p"},"__construct")," methods is to assign the value of arguments to table fields, Pluto provides a simple syntax to reduce this boilerplate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'class Human\n    function __construct(public name)\n    end\nend\n\nlocal human = new Human("John")\nprint(human.name) -- "John"\n')),(0,o.kt)("h2",{id:"instanceof-operator"},"Instanceof Operator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"instanceof")," operator can be used to check if a table is a class instance, including inherited classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},"class Entity end\nclass Human extends Entity end\nlocal e = new Entity()\nlocal h = new Human()\nprint(e instanceof Entity) -- true\nprint(e instanceof Human) -- false\nprint(h instanceof Entity) -- true (by inheritance)\nprint(h instanceof Human) -- true\n")),(0,o.kt)("p",null,"It can also be used as a function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},"class Entity end\nlocal e = new Entity()\nprint(instanceof(e, Entity)) -- true\n")),(0,o.kt)("h2",{id:"using-compatibility-mode"},"Using Compatibility Mode?"),(0,o.kt)("p",null,"Some of the syntax discussed here may be different due to compatiblity mode:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"pluto_new")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"class")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"pluto_class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"pluto_parent"))))}m.isMDXComponent=!0}}]);