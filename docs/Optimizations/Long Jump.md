---
title: 长跳转
---

尽管 Lua 提供了在以 C++ 编译时使用长跳转的选项，但默认情况下不使用，而是需要您定义 `LUA_USE_LONGJMP`。

Pluto 只用 C++ 编译，默认使用长跳转，因为它比 C++ 异常更快，同时意味着 Lua 错误不会复杂化您的异常处理。不过，您仍然可以在 `luaconf.h` 或构建配置中定义 `PLUTO_USE_THROW`，以回退到使用 C++ 异常。

`LUAI_THROW` 和 `LUAI_TRY` 仍然可以修改，并且会优先生效。
