---
title: 编译时评估
---

Pluto的解析器提供了一些强大的结构，允许您编写在运行时永远不会看到的代码。

## 函数调用

只要参数在编译时也是已知的，可以在编译时使用 "$" 符号在特定的标准库函数前调用它们。

```pluto showLineNumbers
local runtime = require("crypto").joaat("Hello, World!")
local compile = $crypto.joaat("Hello, World!")

assert(runtime == compile)
```
如果您不熟悉编译时评估，这是代码的转换过程：
```pluto showLineNumbers
local runtime = require("crypto").joaat("Hello, World!")
local compile = 847757641 -- The JOAAT hash of "Hello, World!"

assert(runtime == compile)
```

这在预加载的Pluto库上可用，例如：
- `json`
- `base32`
- `base58`
- `base64`
- `crypto`

以及以下函数：
- `tostring`
- `utostring`
- `tonumber`
- `utonumber`

## 条件语句

如果有一些代码只想在特定构建中编译，比如调试构建，您可以使用编译时条件语句：

```pluto
local DEBUG <constexpr> = true

$if DEBUG
	print("Script running in debug mode")
$else
	print("Script running in release mode")
$end
```

在这种情况下，只有两个路径中的一个会被编译；其余的不会占用任何空间。这里还使用了 [constexpr 属性](Constexpr Attribute.md)，比 `<const>` 更严格的保证，尽管如果条件在编译时未知，`$if` 会引发错误。
