---
title: Base64 函数
---

:::info
仅在使用 Soup 编译 Pluto 时可用。必须通过 `require` 包含。
:::
## base64
### base64.encode(data, pad)
返回编码后的 base64 字符串。
#### 参数：
1. `data` — 要编码的字符串数据。
2. `pad` — 表示是否对编码结果应用填充的布尔值。
```pluto
local base64 = require("base64")
local data, encoded

data = "Hello, World!"
encoded = base64.encode(data, true)
--[[
	SGVsbG8sIFdvcmxkIQ==
--]]
```
### base64.decode(data)
返回已解码的 base64 字符串。
#### 参数：
1. `data` — 一个 base64 数据字符串。
```pluto
local base64 = require("base64")

base64.decode("SGVsbG8sIFdvcmxkIQ==")
--[[
	Hello, World!
--]]
```
### base64.url_encode(data, pad)
返回一个 base64url 编码的字符串。有时这种变体也被称为文件名安全的base64。
### base64.url_decode(data)
与 `base64.decode` 类似，只不过是用于 base64url 解码。