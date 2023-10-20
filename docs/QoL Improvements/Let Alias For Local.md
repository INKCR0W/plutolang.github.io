---
title: let 别名用于 local
---

在声明作用域变量时，您可以选择使用 'let' 代替 'local'。

要启用 'let' 关键字，只需执行：
```pluto
pluto_use let
```

用法与 `local` 关键字完全相同。不过要注意，这会使 `let` 成为保留关键字，因此你不能用它来命名任何变量。
如果这会在脚本中造成歧义，可以在完成脚本后再次禁用它：
```pluto
pluto_use let = false
```

## 对于集成开发者

通过在 `luaconf.h` 或编译配置中定义 `PLUTO_USE_LET` 宏，可以在 Pluto 环境中默认启用 `let` 宏。
