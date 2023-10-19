---
sidebar_position: 2
title: 数字解析
---
Pluto 对数字解析进行了两个小的改变。

## 视觉分隔符

您可以在数字文字中添加下划线以增加其可读性。
```pluto showLineNumbers title="示例代码"
local n = 10_000_000
assert(n == 10000000)
```
这些下划线会被编译器忽略，所以它们仅仅是为了改善可视效果。

## 二进制整数

类似于 Lua 允许您以十六进制输入数字：
```pluto showLineNumbers title="示例代码"
local n = 0x420
assert(n == 1056)
```
Pluto 也允许您以二进制方式输入数字：
```pluto showLineNumbers title="示例代码"
local n = 0b1000101
assert(n == 69)
```
