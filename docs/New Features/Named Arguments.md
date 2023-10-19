---
sidebar_position: 11
title: 命名参数
---
您可以使用要设置的参数名称，而不是参数位置：

```pluto
local function process_file(file, mode = "r", version = 1)
	print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file(file = "hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

请注意，这个示例还使用了[默认参数](Default%20Arguments.md)和[字符串插值](String%20Interpolation.md)。

## 混合参数

您可以对前几个参数使用位置参数，然后对后面的参数使用命名参数，例如：

```pluto
local function process_file(file, mode = "r", version = 1)
	print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file("hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

## 限制

这个功能完全是在解析器中实现的，因此目前只适用于局部函数。
