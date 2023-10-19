---
sidebar_position: 4
title: Lambda 表达式
---
Lambda表达式是一种用于评估快速表达式的函数对象的简写方式。看看这段代码：
```pluto showLineNumbers title="旧方法"
local s1 = "123"
local s2 = s1:gsub(".", function (c) return tonumber(c) + 1 end)
print(s2) -- "234"
```
Lambda表达式只是一种语法糖，因为你可以这样代替：
```pluto title="新方法"
local s1 = "123"
local s2 = s1:gsub(".", |c| -> tonumber(c) + 1)
print(s2) -- "234"
```
在任何需要函数对象的地方，lambda都可以使用，因为lambda只是一个函数。

#### [试一试](https://pluto-lang.org/web/#code=local%20str%20%3D%20%22123%22%0D%0Alocal%20inc_str%20%3D%20str%3Agsub(%22.%22%2C%20%7Cc%7C%20-%3E%20tonumber(c)%20%2B%201)%0D%0Aprint(inc_str)%20--%20%22234%22)