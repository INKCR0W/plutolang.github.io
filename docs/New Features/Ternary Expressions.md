---
sidebar_position: 7
title: 三元表达式
---
三元表达式在行为上与它们在 C 中的行为完全相同，不引入任何新的关键字。
```pluto showLineNumbers title="旧方式"
local max
if a > b then
  max = a
else
  max = b
end
```
```pluto showLineNumbers title="新方式"
local max = a > b ? a : b
```
#### [试一试](https://pluto-lang.org/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20a%20%3E%20b%20%3F%20a%20%3A%20b%0A%0Aprint(max))

## 条件表达式

它们还支持一种替代语法，用于与较早版本的 Pluto 兼容：
```pluto showLineNumbers
local max = if a > b then a else b
```

## Lua 没有三元表达式吗？

虽然的确可以像这样实现条件表达式：

```pluto
local max = a > b and a or b
```

但是，当 true-expression 具有假值时，这种方法就会失效：

```pluto
local x = -1
x = (x == -1 and nil or x)
```

在这种情况下，x 的值将是 -1，尽管本意是将其设置为 nil。在 Pluto 的三元表达式中不会出现这种问题。

:::info
`true-expression` 难以用短语翻译，其意可理解为 `当三元表达式语句中条件表达式的值为 _ture_ 时应当返回的表达式/值`
:::