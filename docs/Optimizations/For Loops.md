---
sidebar_position: 1
title: 循环方面
---

在 Pluto 中，`pairs` 和 `ipairs` 函数经过了优化。一般来说，使用 `pairs` 和 `ipairs` 进行循环比它们在 Lua 中的对应操作要快 **3.5 倍**。

# 它是如何工作的？
但它并不是在所有情况下都能发挥作用，迭代器的状态存储在这些函数返回的 to-be-closed 变量中，也就是它们给出的最后一个变量。如果交互或修改这个变量，优化就不会发生。
```
pairs: next, table, nil, nil
ipairs: ipairsaux, table, integer, nil
```
只要不访问最后一个 `nil` 值，就不会有问题。
:::info
这个优化是由 Xmelia Hermit 发布的。
:::