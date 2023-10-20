---
title: 保留标识符
---

Pluto允许您在使用简化的表达式语法和goto标签时，将保留标记，例如来自Lua的`if`和来自Pluto的`class`，作为标识符。

```pluto showLineNumbers title="使用简化的表达式语法将保留标记作为标识符"
local t = {
    class = "key"
}
print(t.class)
```

```pluto showLineNumbers title="保留标记作为跳转标签的标识符"
-- 输出每一个不是 5 的数
for i = 1, 10 do
    if i == 5 then
        goto continue
    end
    print(i)
    ::continue::
end
```

但是，变量名和函数调用不允许使用保留标记作为标识符。
