---
sidebar_position: 6
title: 字符串插值
---
字符串插值是一种简单的替代语法，用于将变量或表达式嵌入到字符串中以创建新的字符串。字符串插值使构建字符串更加方便和可读。

如下示例对比了字符串连接和字符串插值：

```pluto title="字符串连接"
local label = "生命的意义"
local data = { value = 42 }
print("这个" .. label .. "是" .. data.value) -- "这个生命的意义是42"
```

```pluto title="字符串插值"
local label = "生命的意义"
local data = { value = 42 }
print($"这个{label}是{data.value}") -- "这个生命的意义是42"
```
#### [试一试](https://webshell.dev/#code=local%20label%20%3D%20%22meaning%20of%20life%22%0D%0Alocal%20data%20%3D%20%7B%20value%20%3D%2042%20%7D%0D%0Aprint(%24%22The%20%7Blabel%7D%20is%20%7Bdata.value%7D%22)%20--%20%22The%20meaning%20of%20life%20is%2042%22&ext=pluto&run=pluto)

如您所见，要创建字符串插值，您可以在字符串前加上 "$" 符号。大括号内可以包含任何表达式。表达式的结果将被转换为字符串，与普通的字符串连接类似，但请注意，Pluto 支持[布尔串联](../QoL%20Improvements/Boolean%20Concatenation)，这与 Lua 不同。