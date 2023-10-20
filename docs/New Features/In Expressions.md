---
sidebar_position: 13
title: In 表达式
---
在字符串中搜索子字符串或在数组中搜索元素现在变得非常简单。`in` 操作符已经扩展以支持这些操作。
```pluto showLineNumbers title="搜索子字符串。"
local a = "hello"
local b = "hello world"

local r1 = a in b
local r2 = "hello" in b
local r3 = a in "hello world"
local r4 = "hello" in "hello world"
local r5 = "goodbye" in "hello world"

assert(r1 and r2 and r3 and r4) -- They'll all return true.
assert(r5 == false) -- Except this one.
```
```pluto showLineNumbers title="在表中搜索键和元素。"
local t = { [5] = "five", [6] = "six", [7] = "seven", key = "value" }

assert(("key" in t) == true) -- Found a key with the value of 'key'.
assert((5 in t) == true) -- Found a key with the value of '5'.
assert((3 in t) == false) -- No key with the value of '3'.
```

## 规则
- 右操作数必须始终是一个表或字符串。
- 如果右操作数是字符串，则左操作数必须是一个字符串。
- 如果右操作数是表，左操作数可以是任何类型。

:::caution
这一功能的字节码与Lua不兼容。
:::
