---
title: JSON 函数
---

:::info
仅在使用 Soup 编译 Pluto 时可用。必须通过 `require` 包含。
:::
## json
### json.encode(data, pretty)
返回一个 JSON 字符串。
#### Parameters:
1. `data` — 要编码为 JSON 的布尔值、数字、字符串或表。
2. `pretty` — 是否返回人类可读的 JSON 字符串。
```pluto
local json = require("json")
local data, encoded

data = "Hello, World!"
encoded = json.encode(data, true)
--[[
	"Hello, World!"
--]]

data = 
{
	key = "Hello, World!"
	nested = {
		nested_key = 1337
	}
}
encoded = json.encode(data, true)
--[[
	{
	    "nested": {
	        "nested_key": 1337
	    },
	    "key": "Hello, World!"
	}
--]]
```
### json.decode(data)
返回多个可能的类型。如果传递了序列化的布尔值、数字或字符串，则它将返回相同类型。如果传递了复杂的 JSON 对象，它将返回一个表。
#### Parameters:
1. `data` — 要解码的 JSON 数据。
```pluto
local json = require("json")
local data, encoded, decoded

-- 基本类型

data = "Hello, World!"
encoded = json.encode(data, true)
decoded = json.decode(encoded)

assert(decoded == data)
assert(type(decoded) == "string")

-- 复杂类型

data = {
    key = "Hello",
    nested = {
        nested_key = 1337
    }
}
encoded = json.encode(data, true)
decoded = json.decode(encoded)

assert(decoded.key == "Hello")
assert(type(decoded) == "table")
assert(decoded.nested.nested_key == 1337)
```