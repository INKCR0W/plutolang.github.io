---
sidebar_position: 3
title: break 语句
---

该关键字接受一个可选的整数参数，用于指示它应该中断多少层封闭循环。默认值为1，因此会中断当前循环。
```pluto showLineNumbers title="示例 1"
for i = 1, 10 do -- Loop 1.
    break 1 --> This is identical to `break` without any arguments.
end
```
```pluto showLineNumbers title="示例 2"
for i = 1, 10 do -- Loop 1.
    for ii = 1, 5 do -- Loop 2.
        break 1 --> This will break from Loop 2.
        break 2 --> This will break from Loop 1.
    end
end
```