---
title: VM Dump
---

Pluto 提供了一个可选的、可配置的功能，可以查看在 Lua VM 中执行的每条指令。

## 配置

VM Dump 可以通过在 `luaconf.h` 或你的构建配置中定义 `PLUTO_VMDUMP` 来启用。

- 为了减少不必要的输出，你可以修改 `PLUTO_VMDUMP_COND` 来设置 VM Dump 激活时的自定义条件。默认情况下，条件是 `true`。
- 虽然不是 VM Dump 的特定配置，但值得注意的是你可以修改输出宏 `lua_writestring` 和 `lua_writeline`。

## 它看起来像这样

参考以下代码：

```pluto showLineNumbers
local value = 3
switch value do
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    print("Got 1-5.")
    break
  default:
    print("Value is greater than 5.")
end
-- Break jumps here.
```

它将输出:

```
VARARGPREP 0        ; prepare for 0 varargs
LOADI      0 3      ; push 3
MOVE       1 0      ; move 3 into R(A)
EQI        1 1 0    ; 3 == 1
EQI        1 2 1    ; 3 == 2
EQI        1 3 1    ; 3 == 3
GETTABUP   2 0 0    ; push T['print'] for function-0x247d2882520 (T=table-0x247d29ec9c8)                                              
LOADK      3 1      ; push "Got 1-5."
<OUTPUT> Got 1-5.
CALL       2 2 1    ; call cfunc (nresults=0 nparams=0)                                                                                                              
JMP        13       ; offset=13 newpc=0x247d29e90d8
RETURN     1 1 1    ; return 0 value(s)
```