---
sidebar_position: 4
title: 字符串函数
---
字符串类型的新函数，由 Pluto 实现。
## 新函数
### string.split
按分隔符分割字符串。
#### 参数
1. 需要分割的字符串。
2. 分割字符串的分隔符。可以是任何字符串。
#### 返回值
一个表
#### 示例
```pluto title="用单个字符分割字符串。"
local s = "hello world, how is everyone doing?"
local r = string.split(s, " ")
--[[
    The value of 'r':
    {
        "hello",
        "world,",
        "how",
        "is",
        "everyone",
        "doing?"
    }
--]]
```
```pluto title="用子串分割字符串。"
local s = "helloHALLOWORLDworld,HALLOWORLDhowHALLOWORLDisHALLOWORLDeveryoneHALLOWORLDdoing?"
local r = string.split(s, "HALLOWORLD")
--[[
    The value of 'r':
    {
        "hello",
        "world,",
        "how",
        "is",
        "everyone",
        "doing?"
    }
--]]
```
### string.lfind
返回子字符串起始位置的索引。从字符串的左侧开始搜索。
#### 参数
1. 要搜索的原字符串。
2. 要搜索的子字符串。
#### 返回值
表示子串索引的整数，如果未找到子串，则返回 `nil`。
#### 示例
```pluto title="基础使用"
local s = "hello world"
local r = string.lfind(s, "world") --> 7
```
### string.rfind
返回子字符串开始位置的索引。从字符串的右侧开始搜索。
#### 参数
1. 要搜索的原字符串。
2. 要搜索的子字符串。
#### 返回值
表示子串索引的整数，如果未找到子串，则返回 `nil`。
#### 示例
```pluto title="基础使用"
local s = "hello world"
local r = string.rfind(s, "world") --> 7
```
### string.strip
删除字符串两端的字符。
#### 参数
1. 原字符串。
2. 要删除的字符串
#### 返回值
删除后的字符串。
#### 示例
```pluto title="基础使用"
local s = "{}|hello world{|}"
local r = string.strip(s, "{}|") --> "hello world"
```
### string.lstrip
删除字符串左侧的字符。
#### 参数
1. 原字符串。
2. 要删除的字符串
#### 返回值
删除后的字符串。
#### 示例
```pluto title="基础使用"
local s = "<{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "<hello world>{|}"
```
### string.rstrip
删除字符串右侧的字符。
#### 参数
1. 原字符串。
2. 要删除的字符串
#### 返回值
删除后的字符串。
#### 示例
```pluto title="基础使用"
local s = "<{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "<{}|<hello world>"
```
### string.isascii
检查字符串是否完全由 ASCII 字符组成。
#### 参数
1. 要检查的字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "HELLOWORLD123"
local r = string.isascii(s) --> true
```
:::info
这将排除任何多字节字符，如表情符号。
:::
### string.islower
检查字符串是否全部由小写字母组成。
#### 参数
1. 要检查的字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "helloworld"
local r = string.islower(s) --> true
```
:::info
空格字符不是小写字符。
:::
### string.isalpha
检查字符串是否完全由字母字符组成。
#### 参数
1. 要检查的字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "HELLOWORLD"
local r = string.isalpha(s) --> true
```
:::info
空格字符不是字母字符。
:::
### string.isupper
检查字符串是否全部由大写字母组成。
#### 参数
1. 要检查的字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "HELLOWORLD"
local r = string.isupper(s) --> true
```
:::info
空格字符不是大写字符。
:::
### string.isalnum
检查一个字符串是否完全由字母数字字符组成。
#### 参数
1. 要检查的字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "HELLOWORLD123"
local r = string.isalnum(s) --> true
```
:::info
空格字符不是字母数字字符。
:::
### string.uformat
与 `string.format` 相同，但在 `en_US.UTF-8` 本地语言下执行操作。确保在所有系统上的结果相同。
### string.contains
检查字符串是否包含子串。
#### 参数
1. 要检查的字符串。
2. 要检查的子字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "hello world"
local r = string.contains(s, "worl") --> true
```
### string.casefold
比较两个字符串，不区分大小写。
#### 参数
1. 要比较的第一个字符串
2. 要比较的第二个字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s1 = "hello world"
local s2 = "heLLo WoRlD"
local r1 = string.casefold(s1, s2) --> true
```
### string.partition
在第一次出现分隔符时分割字符串一次。
#### 参数
1. 要分割的字符串。
2. 用于分割字符串的分隔符。
3. 布尔值，用于指定是否从右侧开始搜索。默认为 false，即从左边开始搜索。
#### 返回值
两个字符串： 一个子串表示第一次出现 `sep` 之前的所有内容，另一个子串表示之后的所有内容。
#### 示例
```pluto title="一个基本的分割"
local s = "hello world, what's up?"
local before, after = string.partition(s, " ")

assert(before == "hello")
assert(after == "world, what's up?")
```
```pluto title="从右侧开始分割"
local s = "hello world, what's up?"
local before, after = string.partition(s, " ", true)

assert(before == "hello world, what's")
assert(after == "up?")
```
### string.endswith
检查字符串是否以后缀结尾。
#### 参数
1. 要检查的字符串。
2. 要检查的后缀子串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "hello world"
local r = string.endswith(s, "world") --> true
```
### string.startswith
检查字符串是否以前缀开头。
#### 参数
1. 要检查的字符串。
2. 要检查的前缀子串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "hello world"
local r = string.startswith(s, "hello") --> true
```
### string.find_last_of
搜索字符串中与参数中指定的任何字符匹配的最后一个字符。
#### 参数
1. 要搜索的原字符串。
2. 一串要匹配的字符。
#### 返回值
整数，如果没有匹配到，则为 "nil"。
#### 示例
```pluto title="基础使用"
-- 这将查找任何列出字符的最后一次出现。
local s = "he$$o ?$! world$"
local r = string.find_last_of(s, "!$") --> 16
```
### string.find_first_of
搜索字符串中与其参数中指定的任何字符相匹配的第一个字符。
#### 参数
1. 要搜索的原字符串。
2. 一串要匹配的字符。
#### 返回值
整数，如果没有匹配到，则为 "nil"。
#### 示例
```pluto title="基础使用"
-- 这将查找任何列出字符的首次出现。
local s = "he$$o ?$! world$"
local r = string.find_first_of(s, "!$") --> 3
```
### string.iswhitespace
检查该字符串是否完全由空白字符组成。
#### Paramaters
1. 要检查的字符串。
#### 返回值
一个布尔值。
#### 示例
```pluto title="基础使用"
local s = "    \t \v \f     \t\t\t\t"
local r = string.iswhitespace(s) --> true
```
### string.find_last_not_of
搜索字符串中与参数中指定的字符不匹配的最后一个字符。
#### 参数
1. 要搜索的原字符串。
2. 一串要匹配的字符。
#### 返回值
整数，如果没有匹配到，则为 "nil"。
#### 示例
```pluto title="基础使用"
-- 这将查找任何列出字符中最后一次未出现的字符。
local s = "he$$o ?$! world$"
local r = string.find_last_not_of(s, "!$") --> 15
```
### string.find_first_not_of
搜索字符串中与参数中指定的字符不匹配的第一个字符。
#### 参数
1. 要搜索的原字符串。
2. 一串要匹配的字符。
#### 返回值
整数，如果没有匹配到，则为 "nil"。
#### 示例
```pluto title="基础使用"
-- 这将查找任何列出字符中第一个未出现的字符。
local s = "he$$o ?$! world$"
local r = string.find_first_not_of(s, "!$") --> 1
```

## 修改过的功能
### string.upper
此函数现在接受第二个参数，用于指定将哪个索引变为大写。
#### 示例
```pluto showLineNumbers title="基础使用"
local s = "hello"
assert(s:upper(1) == "Hello")
```
### string.lower
此函数现在接受第二个参数，用于指定将哪个索引变为小写。
#### 示例
```pluto showLineNumbers title="基础使用"
local s = "HELLO"
assert(s:lower(1) == "hELLO")
```