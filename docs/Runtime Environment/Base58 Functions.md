---
title: Base58 函数
---

:::info
仅在使用 Soup 编译 Pluto 时可用。必须通过 `require` 包含。
:::
## base58
### base58.decode(data)
返回解码后的 base58 数据的十六进制字符串。
#### Parameters:
1. `data` — 一个 base58 数据的字符串。
### base58.is_valid(data)
返回一个布尔值，表示 `data` 是否为有效的 base58 数据。