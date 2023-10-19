---
sidebar_position: 12
title: 类型提示
---
类型提示（Type-hinting）看起来是这样：
```pluto showLineNumbers
local var: string = "hello world"
```
它在函数中也可以工作：
```pluto showLineNumbers
local function myfunc(a: string, b: string): number
    return tonumber(a) + tonumber(b)
end

print(myfunc(1, "1")) --> 这将得到一个关于参数类型不匹配的警告
```
这对性能没有影响。这完全是在编译阶段实现的。
### 我可以使用哪些类型？
- `string`
- `number`
  - `int`
  - `float`
- `boolean`/`bool`
- `function`
- `table`
- `userdata`
- `void` (仅返回类型)

在类型提示中，可以使用前缀 `?` 来表示可为 `nil` 的类型，例如，`?string` 表示它可以是 `nil` 或字符串。

还可以使用 `|` 来分隔不同的类型选择，例如，`string|int` 表示它可以是字符串或整数。

将所有这些组合在一起，我们还可以使用例如 `?string|int` 来表示它可以是 `nil`、字符串或整数的任何一种。

:::info
这是一个尚未完成的功能，很难实现 one-pass compiler。允许存在一些覆盖不足的情况，并报告任何错误。
:::