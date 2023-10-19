---
title: 空值合并操作符
---

空值合并操作符（Null-Coalescing Operator）（更恰当地说，是 nil 合并操作符）可以如下使用：
```pluto showLineNumbers
local permissions, group = nil, nil

local effective_permissions = permissions ?? "NO_PERMISSIONS"

group ??= "User"
```
它在语义上等同于使用 [三元表达式](../New Features/Ternary Expressions.md) 的以下代码：
```pluto showLineNumbers
local permissions, group = nil, nil

local effective_permissions = permissions == nil ? "NO_PERMISSIONS" : permissions

if group == nil then
	group = "User"
end
```
正如您所看到的，空值合并操作符允许更简洁的语句。
:::info
这是一种惰性求值的操作符。它不会 "选择任何不是 nil 的值"，而只是在第一个表达式为 nil 时对第二个表达式进行求值。
:::
:::caution
这个功能的字节码与 Lua 不兼容。这意味着在使用这个特性时，可能会导致与 Lua 的向后兼容性问题。
:::
