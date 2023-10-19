---
title: 递增操作符
---

Pluto 提供了一种简便的递增方式 —— 使用前缀的 `++` 操作符：

```pluto
local x = 1
++x
print(x) -- 2
```

它也可以用作表达式：

```pluto
local x = 1
print(++x) -- 2
-- x 到这个位置依旧是2
```

除了因为可以用作表达式而更方便之外，它还比使用复合操作符的等效 Pluto 代码更短：

```pluto
local x = 1
x += 1
print(x) -- 2
```

特别是与纯 Lua 方法相比：

```pluto
local x = 1
x = x + 1
print(x) -- 2
```
