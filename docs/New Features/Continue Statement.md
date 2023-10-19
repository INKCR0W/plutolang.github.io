---
sidebar_position: 3
title: Continue 语句
---
类似于 `break`，continue 语句用于循环，用于跳过当前循环迭代。

它引入了一个新的关键字，`continue`。注意它不能在 switch 语句内部使用。
```pluto showLineNumbers title="示例代码"
-- 打印除了五以外的每个数字。
for i = 1, 10 do
    if i == 5 then
        continue
    end
    print(i)
    -- continue jumps here.
end
```
#### [试一试](https://pluto-lang.org/web/#code=--%20Print%20every%20number%20besides%20five.%0D%0Afor%20i%20%3D%201%2C%2010%20do%0D%0A%20%20%20%20if%20i%20%3D%3D%205%20then%0D%0A%20%20%20%20%20%20%20%20continue%0D%0A%20%20%20%20end%0D%0A%20%20%20%20print(i)%0D%0A%20%20%20%20--%20continue%20jumps%20here.%0D%0Aend)

:::caution
请注意，`continue` 会跳过代码。请确保 `continue` 不会跳过循环内判断是否继续循环的代码。
:::

## `continue` 的唯一参数
这个关键字接受一个可选的整数参数，指示它应该跳过多少层封闭的循环，直到结束。默认值为1，因此跳过到当前循环的结束。
```pluto showLineNumbers title="示例 1"
for i = 1, 10 do -- Loop 1.
    continue 1 --> This is identical to `continue` without any arguments.
end
```
```pluto showLineNumbers title="示例 2"
for i = 1, 10 do -- Loop 1.
    for ii = 1, 5 do -- Loop 2.
        continue 1 --> This will continue from Loop 2.
        continue 2 --> This will continue from Loop 1.
    end
end
```

## 使用兼容模式？
你可能需要使用 `pluto_continue` 而不是 `continue`。
