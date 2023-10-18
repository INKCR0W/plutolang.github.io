---
title: 编译器警告
---

Pluto提供了针对某些不当行为的可选编译器警告。

目前的警告情况包括：
- 类型不匹配。
  - 当表达式的类型与预期类型不匹配时。
- 变量屏蔽。
  - 当创建一个与现有变量同名的新局部变量时。
- 无法到达的代码。
  - 当一段代码永远不会被执行时。
- 过多的参数。
  - 当对非变参函数提供了过多的参数时。

## 示例
#### 类型不匹配
```pluto showLineNumbers
local var: number = 5
var = "hello"
```
```
file.pluto:2: warning: variable type mismatch [type-mismatch]
    2 | var = "hello"
      | ^^^^^^^^^^^^^ here: 'var' type-hinted as 'number', but assigned a string value.
```
#### 变量屏蔽
```pluto showLineNumbers
local var = 5
do
  local var = "hello"
end
```
```
file.pluto:3: warning: duplicate local declaration [var-shadow]
    3 | local var = "hello"
      | ^^^^^^^^^^^^^^^^^^^ here: this shadows the initial declaration of 'var' on line 1.
```
#### 无法到达的代码
```pluto showLineNumbers
for i = 1, 10 do
  if i == 5 then
    continue
    print("message")
  end
end
```
```
file.pluto:4: warning: unreachable code [unreachable-code]
    4 | print("message")
      | ^^^^^^^^^^^^^^^^ here: this code comes after an escaping 'continue' statement.
```
#### 过多的参数
```pluto showLineNumbers
local function func(a, b, c)

end

func(1, 2, 3, 4)
```
```
file.pluto:5: warning: too many arguments [excessive-arguments]
    5 | func(1, 2, 3, 4)
      | ^^^^^^^^^^^^^^^^ here: expected 3 arguments, got 4.
```

## 编译时配置
警告可以在编译时禁用，因此您可以为下一行、代码区域或整个警告本身创建例外。
```pluto title="这些是配置注释"
--- @pluto_warnings: enable-all
--- @pluto_warnings: disable-all

--- @pluto_warnings: disable-next

--- @pluto_warnings: enable-var-shadow
--- @pluto_warnings: disable-var-shadow

--- @pluto_warnings: enable-type-mismatch
--- @pluto_warnings: disable-type-mismatch

--- @pluto_warnings: enable-unreachable-code
--- @pluto_warnings: disable-unreachable-code

--- @pluto_warnings: enable-excessive-arguments
--- @pluto_warnings: disable-excessive-arguments
```