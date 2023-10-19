---
title: 海象操作符
---

海象操作符（Walrus Operator）允许您执行赋值表达式，其中赋值的第二个操作数是表达式的值。
### Examples
```pluto showLineNumbers
if a := get_value() then
	-- 'a' 被赋予一个真值。
else
	-- 'a' 被赋予一个假值。
end

--> 这段代码在语义上是等价的。
local a = get_value()
if a then
	-- 'a' 被赋予一个真值。
else
	-- 'a' 被赋予一个假值。
end
```

在循环等情况下，海象操作符的表达式可能会被多次计算。
```pluto showLineNumbers
local function get()
	return true
end

while a := get() do
	--> 这将永远循环下去。它将一直计算 `a := get()`，就像任何其他条件一样。
end
```

像任何其他表达式一样，您也可以执行类似这样的操作：
```pluto showLineNumbers
if (a := math.random(1, 10)) < 5 then
	print("A 小于5！ 值: " .. a)
else
	print("A 大于5！ 值: " .. a)
end
```

- 海象操作符可以在任何接受表达式的地方使用。
- 海象操作符不支持元组赋值。

这个特性受到了 Python 实现的启发，可以在 [这里](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions) 找到。