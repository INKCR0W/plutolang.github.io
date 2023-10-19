---
sidebar_position: 10
title: For-As 循环
---
当您只想遍历表的值时，可以使用Pluto的for-as语法。
```pluto showLineNumbers title="新方法"
local t = { 1, 2, 3, "hello", "world" }
for t as value do
    print(value)
end

-- 1
-- 2
-- 3
-- hello
-- world
```
这段代码等价于下面的代码：
```pluto showLineNumbers title="Old Code"
local t = { 1, 2, 3, "hello", "world" }
for _, value in t do
    print(value)
end
```

:::info
这个功能的字节码只有在使用`pairs`或`ipairs`时才与Lua向后兼容。
:::