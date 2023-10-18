---
sidebar_position: 16
title: Constexpr 属性
---
Pluto添加了 `<constexpr>` 属性，它是 `<const>` 属性的增强版本。

因此，这两行代码都是有效的，意思是相同的：
```pluto
local a <const> = 123
local a <constexpr> = 123
```
然而，`<constexpr>` 还强制要求分配的变量是编译时常量：
```pluto
local a <const> = {}
// ERROR:
local a <constexpr> = {} -- <constexpr> variable was not assigned a compile-time constant value
```
