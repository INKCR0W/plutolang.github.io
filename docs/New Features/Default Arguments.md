---
sidebar_position: 11
title: 默认参数
---
在函数声明过程中，参数可以声明它们自己的默认值。
```pluto showLineNumbers title="示例代码"
local function write(text = "No text provided.")
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
```pluto showLineNumbers title="这段代码的行为是相同的"
local function write(text)
	if text == nil then
		text = "No text provided."
	end
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
