---
sidebar_position: 4
title: 表冻结
---
现在可以冻结表在其当前状态以禁止任何未来的修改。这一操作是不可逆的，对于表的寿命而言是永久的。

```pluto showLineNumbers title="示例代码 1"
-- 不允许对全局的表进行任何编辑
table.freeze(_G)

// ERROR:
_G.string = {}
// ERROR:
-- file.pluto:2: attempt to modify frozen table.
```
```pluto showLineNumbers title="示例代码 2"
-- 创建与冻结表相关联的常量
local Frozen <const> = table.freeze({ 1, 2, 3 })

// ERROR:
Frozen = {}
// ERROR:
-- file.pluto:4: attempt to reassign constant.

// ERROR:
Frozen[1] = "new value"
// ERROR:
-- file.pluto:7: attempt to modify frozen table.

// ERROR:
rawset(Frozen, "key", "value")
// ERROR:
-- file.pluto:10: attempt to modify frozen table.
```
```pluto showLineNumbers title="示例代码 3"
--- 尝试使用调试库交换该值。
for i = 1, 249 do
  local name, value = debug.getlocal(1, i)
  if name == "Frozen" then
    // ERROR:
    debug.setlocal(1, i, { ["key"] = "hello world" })
    // ERROR:
    -- file.pluto:5: attempt to modify local variable with a frozen table.
  end
end
```
### 这将阻止什么？
这将阻止从 Lua 环境内部进行的所有对表格的修改，包括来自`debug`库的修改。

:::caution
如果您打算将此用于一个沙盒环境，请确保在用户访问 Lua 环境之前调用 `table.freeze`，否则他们可以替换该函数。
:::