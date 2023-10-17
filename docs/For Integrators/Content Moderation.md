---
title: 内容审查
---

Pluto 允许你管理在环境中允许运行哪些脚本。

## 禁用编译代码

你可以通过在 `luaconf.h` 或你的构建配置中定义 `PLUTO_DISABLE_COMPILED` 来禁用已编译的字节码的执行。

## 过滤已加载的文件

你可能已经在将脚本传递给 Pluto 之前设置了过滤器，但一些机制，如 `dofile` 和 `require`，可能会被用来绕过它们。为了帮助你解决这个问题，Pluto 提供了 `PLUTO_LOADFILE_HOOK`。例如，如果你在 `luaconf.h` 或你的构建配置中将它设置为 `ContmodOnLoadfile`，那么你只需要在你的代码中定义这个函数，就像这样：

```cpp
extern "C" bool ContmodOnLoadfile(const char* filename) {
  return !isCodeProhibited(soup::string::fromFile(filename));
}
```

这要求你将 Pluto 作为一个静态库使用，否则这种链接关系将无法工作。