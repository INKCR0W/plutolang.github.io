---
title: Base32 函数
---

:::info
仅在使用 Soup 编译 Pluto 时可用。必须通过 `require` 包含。
:::
## base32
### base32.encode(data, pad)
返回编码后的 base32 字符串。
#### 参数：
1. `data` — 要编码的字符串数据。
2. `pad` — 是否应用填充。
### base32.decode(data)
返回已解码的 base32 字符串。
#### 参数：
1. `data` — 要解码的 base32 字符串数据。