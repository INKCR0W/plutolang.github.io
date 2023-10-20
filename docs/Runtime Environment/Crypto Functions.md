---
sidebar_position: 7
title: 加密函数
---
与加密相关的函数，由Pluto实现。
## 哈希算法
### Lua
使用 Lua 版本的 DJB2 非加密哈希算法对字符串进行哈希处理。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.lua(str) == 2871868277)
```
### MD5
使用 MD5 半加密哈希算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.md5(str) == "5eb63bbbe01eeed093cb22bb8f5acdc3")
```
### DJB2
使用 DJB2 非加密散列算法对字符串进行哈希处理。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.djb2(str) == 894552257)
```
### FNV1
使用 FNV1 非加密哈希算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1(str) == 9065573210506989167)
```
### JOAAT
使用 JOAAT 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.joaat(str) == 1045060183)
```
### SDBM
使用 SDBM 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.sdbm(str) == 430867652)
```
### FNV1A
使用 FNV1A 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1a(str) == 8618312879776256743)
```
### CRC32
使用 CRC32 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
2. The initial value for the hash. By default, this is zero.
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.crc32(str) == 222957957)
```
### Lookup3
使用 Lookup3 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.lookup3(str) == 1252609637)
```
### Times33
使用 Times33 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.times33(str) == 3889643616)
```
### SHA-256
使用 SHA-256 加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.sha256(str) == "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
```
### Murmur1
使用 Murmur1 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur1(str) == 3154674178)
```
### Murmur2
使用 Murmur2 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2(str) == 1151865881)
```
### Murmur2A
使用 Murmur2A 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2a(str) == 2650573207)
```
### Murmur64A
使用 Murmur64A 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64a(str) == -3190198453633110066)
```
### Murmur64B
使用 Murmur64B 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64b(str) == 7088720765356542432)
```
### Murmur2Neutral
使用 Murmur2Neutral 非加密散列算法对字符串进行哈希运算。
#### 参数
1. 要哈希处理的字符串。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2neutral(str) == 1151865881)
```
## 伪随机数生成器
### random
`crypto.random` 函数使用您计算机操作系统的默认伪随机数生成器（PRNG）
- 在基于 Linux 的系统上，这是 `/dev/urandom`。
- 在 Windows 上，这是 `BCryptGenRandom`。

如果系统能够提供这些服务，那么这就是一个加密安全的 PRNG。但是，如果系统不能提供这些服务，那么它就不是加密安全的 PRNG。无论如何，它都能提供良好的随机性。
#### 参数
1. 返回的最小值。
2. 返回的最大值，作为一个范围。
#### 示例
```pluto showLineNumbers
local crypto = require("crypto")
assert(crypto.random(1, 10) < 11)
```

## 其他功能
### hexdigest
将整数转换为其十六进制表示，以字符串形式返回。
#### 参数
1. 要转换的整数或者整数字符串。
#### 示例
```pluto
local crypto = require("crypto")
local hash = crypto.joaat("hello world")
print("hash: " .. hash)
print("digest: " .. crypto.hexdigest(hash))
--[[
	hash: 1045060183
	digest: "0x3e4a5a57"
--]]
assert(tonumber(crypto.hexdigest(hash)) == hash)
```