---
sidebar_position: 7
---

## Pluto 与 Lua 的兼容性如何？
Pluto 与大多数 Lua 源代码相比具有 99.9% 的兼容性。然而，它并不完美。因此，Pluto 实现了多个兼容性宏（compatibility macros）。这些宏允许 Pluto 在某些情况下提供对 Lua 5.4 代码的更高程度的兼容性，以确保现有的 Lua 5.4 代码可以在 Pluto 上运行。

### 不兼容的方面有哪些？
Pluto 添加了以下保留标识符：
- `switch`
- `continue`
- `enum`
- `new`
- `class`
- `parent`
- `export`

这意味着你不能将它们用作变量名或函数调用。但是，它们仍然可以用于快捷表索引和 `goto` 标签，因为 Pluto [已经移除了对它们的限制](../QoL%20Improvements/Reserved%20Identifiers)。

## 兼容模式
兼容模式是一种按关键字的选项，它会在关键字前添加 `pluto_` 前缀。例如，在兼容模式下，`switch` 变成了 `pluto_switch`。然而，当禁用兼容模式时，`pluto_` 语法仍然有效。这个项目非常重视丝滑的迁移，以便更容易迁移到新的语法和特性。

### 脚本开发者的配置
你可以在脚本的任何地方使用 `pluto_use` 来更改 Pluto 保留标记的含义。
- `pluto_use * = false, switch` 会在所有关键字中启用兼容模式，但除了 `switch` 以外。
  - `pluto_use * = false` 会在所有关键字中启用兼容模式。
  - `pluto_use switch` 会禁用 `switch` 关键字的兼容模式。
    - `pluto_use switch = true` 是另一种写法。
- `pluto_use "0.2.0"` 会在所有关键字中启用兼容模式，但除了 `switch` 和 `continue` 以外。
- `pluto_use "0.5.0"` 会在所有关键字中启用兼容模式，但除了 `switch`、`continue` 和 `enum` 以外。
- `pluto_use "0.6.0"` 会在所有关键字中启用兼容模式，但除了 `switch`、`continue`、`enum`、`new`、`class`、`parent` 和 `export` 以外。

### 集成开发者的配置
兼容模式的宏都有很好的文档，可以在你的 `luaconf.h` 文件中找到。

## 可移植性 & 积极的兼容性
我们建议脚本编写者在脚本的开头加入一个 `pluto_use` 语句，有两个原因：
- **可移植性。** 这将覆盖编译到 Pluto 中的兼容模式设置，因此你的脚本将在所有 Pluto 环境中得到相同的解析。
- **积极的兼容性。** 由 Pluto 未来版本添加的任何关键字也将被这些语句放置在兼容模式下。因此，即使你的脚本在未来的保留关键字中使用了一个变量名，它在你编写时的意图仍然会被解析。

而且，这非常简单，比如 `pluto_use "0.6.0"` 或 `pluto_use "0.5.0"` — 请参考上面的 "脚本开发者的配置" 部分。
