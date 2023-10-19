---
sidebar_position: 17
title: 安全导航
---

这个功能用于访问可能为 `nil` 的深层字段，它避免了需要大量的保护条件来防止"尝试索引nil"错误。在 Pluto 中，您可以使用如下语法：

```pluto showLineNumbers title="基本用法"
local value = a?.b?.c?.d
```

在这个示例中，每个字段都是 `nil`。然而，这不会引发错误，而是简单地返回 `nil`。如果没有安全表导航，这将会引发多个"尝试索引nil"错误。

您还可以看到如下的实际用法示例：

```pluto showLineNumbers title="实际用法"
-- 假设 userConfig 是从 JSON 文件中解析出来的。

--- 返回用户首选的颜色，如果他们没有首选颜色则返回红色。
local function get_color()
    return userConfig.colors?.preferred ?? "Red"
end

print(get_color())
```
请注意，这些语法不能用于语句，如 `a?.b?.c = 0`。它们只能用作表达式。 "安全导航" 功能由 Sven Olsen 编写。