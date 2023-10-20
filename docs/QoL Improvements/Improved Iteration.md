---
title: 改进的迭代
---

Pluto 在几个方面改进了迭代。

## 广义迭代

调用 `pairs` 函数进行简单迭代是多余的。现在这一操作是可选的，如果没有该函数，则由虚拟机处理。
```pluto showLineNumbers title="新代码"
local t = { 1, 2, 3, "hello", "world" }
for key, value in t do
    print(key, value)
end
```
从循环准备中省略该函数时，会隐式插入 `pairs`。因此，该代码与此代码完全相同：
```pluto showLineNumbers title="老代码"
local t = { 1, 2, 3, "hello", "world" }
for key, value in pairs(t) do
    print(key, value)
end
```
这与 for 循环的优化兼容。

:::caution
这个功能的字节码与 Lua 不向后兼容。
:::
