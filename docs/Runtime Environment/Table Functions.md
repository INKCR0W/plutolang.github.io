---
sidebar_position: 3
title: 表函数
---
`table` 类型的新函数，由 Pluto 实现。
### table.freeze
冻结表以防止修改。
#### 参数
1. 要冻结的表。
#### 返回值
原来的表，但被冻结了。
#### 示例
```pluto title="基础使用"
local t = table.freeze({...})
-- 在其它地方使用 `table.freeze(t)` 也可以。
t.key = "value" -- Fails.
```
### table.isfrozen
检查该表是否冻结。
#### 参数
1. 要检查的表。
#### 返回值
一个布尔值
#### 示例
```pluto title="基础使用"
local t = {}
table.freeze(t)
assert(table.isfrozen(t) == true)
```
### table.contains
检查该表是否包含元素。
#### 参数
1. 要检查的表。
2. 要检查的元素。
#### 返回值
索引或键（如果找到），否则为 "nil"。
#### 示例
```pluto title="基础使用"
local t = { 1, 2, 3, 4, 5, 6, key = "value" }
assert(table.contains(t, 4) == 4)
assert(table.contains(t, "value") == "key")
assert(table.contains(t, "nothing") == nil)
```