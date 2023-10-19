---
sidebar_position: 1
title: 字符串索引
---
"String Indexing" 可以翻译成 "字符串索引"。现在，您可以使用索引来访问字符串中的字符，这比使用 `string.sub` 更简洁且速度提高了 **3 倍**。字符串索引仅在使用整数索引（正整数或负整数）时发生。正整数从字符串的开头索引，而负整数从字符串的末尾索引。

```pluto showLineNumbers title="示例代码"
local str = "hello world"
print(str[5]) -- "o"
print(str[200]) -- nil
print(str[-1]) -- "d"
```

任何字符密集型任务，例如哈希算法，都会受益于这个功能。

#### [试一试](https://pluto-lang.org/web/#code=local%20str%20%3D%20%22hello%20world%22%0D%0Aprint(str%5B5%5D)%20--%20%22o%22%0D%0Aprint(str%5B200%5D)%20--%20nil%0D%0Aprint(str%5B-1%5D)%20--%20%22d%22)

:::caution
该功能的字节码与 Lua 不兼容。
:::
