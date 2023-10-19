---
sidebar_position: 5
title: 导出修饰符
---
`export`修饰符允许您自动将要导出的内容聚合到一个表中。

```pluto title="旧方法"
local version = 2

local function add(a, b)
	return a + b
end

return {
	version = version,
	add = add
}
```

```pluto title="新方法"
export version = 2

export function add(a, b)
	return a + b
end
```

Pluto 为您自动生成返回语句。

## 使用兼容模式？

你可能需要使用 `pluto_export` 而不是 `export`.
