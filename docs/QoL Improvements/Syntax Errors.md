---
title: 语法错误
---

语法错误信息得到增强。它们包括量身定制的信息和代码片段，可以帮助新手程序员更快地发现问题。虽然这并不能改变游戏规则，但却很实用。

### 示例 1
```pluto showLineNumbers title="有问题的代码"
if a < b and t == 5 return "Gottem" end
```
```diff title="Emitted Syntax Error"
syntax error: file.pluto:1: expected 'then' to delimit condition.
    1 | if a < b and t == 5 return "Gottem" end
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: expected 'then' symbol.
```
### 示例 2
```pluto showLineNumbers title="有问题的代码"
local fn = |a, b, c| => (a == b and a < c)
```
```diff title="Emitted Syntax Error"
syntax error: file.pluto:1: impromper lambda definition
    1 | local fn = |a, b, c| => (a == b and a < c)
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: expected '->' arrow syntax for lambda expression.
```
## ANSI 颜色
这些错误支持着色，但默认情况下是禁用的。请在 `luaconf.h` 或联编配置中定义 `PLUTO_USE_COLORED_OUTPUT` 宏以启用彩色错误信息。
:::tip
对于 Windows 用户，可以使用以下命令启用 ANSI 着色支持：
  - `REG ADD HKCU\CONSOLE /f /v VirtualTerminalLevel /t REG_DWORD /d 1`
:::