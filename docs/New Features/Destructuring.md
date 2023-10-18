---
sidebar_position: 15
title: 解构
---
解构赋值是从返回表的表达式中分配局部变量的更好方式。

## 数组解构

假设我们有这样一个表:

```pluto
local t = { 3, 6, 9 }
```

这是如何使用 Lua 和 Pluto 的方式将每个值分配给名为 `a`、`b` 和 `c` 的变量：

```pluto title="Lua 方式"
local a = t[1]
local b = t[2]
local c = t[3]
```
```pluto title="Pluto 方式"
local [a, b, c] = t
```

## 表解构

假设我们有这样一个表:

```pluto
local t = {
    name = "John",
    age = 42
}
```

这是如何使用 Lua 和 Pluto 的方式将每个字段分配给同名变量的方式：

```pluto title="Lua 方式"
local name = t.name
local age = t.age
```
```pluto title="Pluto 方式"
local { name, age } = t
```

### 不同的变量名

假设我们有与上面相同的表，这是如何使用 Lua 和 Pluto 的方式将`name`和`age`字段分配给`n`和`a`变量的方式：

```pluto title="Lua 方式"
local n = t.name
local a = t.age
```
```pluto title="Pluto 方式"
local { n = name, a = age } = t
```
