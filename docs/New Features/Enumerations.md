---
sidebar_position: 9
title: 枚举 
---
Pluto添加了以下语法：
```pluto
enum MyEnum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

assert(OPTION_1 == 1)
assert(OPTION_2 == 2)
assert(OPTION_3 == 3)
```

枚举可以从一个基数开始，并从基数开始递增。 
```pluto
enum MyEnum begin
	OPTION_1 = 0,
	OPTION_2,
	OPTION_3 = 5,
	OPTION_4
end

assert(OPTION_1 == 0)
assert(OPTION_2 == 1)
assert(OPTION_3 == 5)
assert(OPTION_4 == 6)
```
由于该枚举具有名称，因此也可以使用名称访问其枚举数: 
```pluto
assert(MyEnum.OPTIION_1 == 0)
```

## 有作用域的枚举
你可以通过使用 'enum class' 强制使用 ENUM.ENUMERATOR 语法：
```pluto
enum class MyEnum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

assert(OPTION_1 == nil)
assert(MyEnum.OPTION_1 == 1)
```

## 反射
当你有一个具有名称的枚举时，你不仅可以获取它的枚举值，还可以使用一些方法对其进行反射操作：
```pluto
enum MyEnum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

for k, v in MyEnum:kvmap() do
	print(k, v) -- "OPTION_1	1" ...
end
```
可以用以下这些方法：`:names()`、`:values()`、`:kvmap()`、`:vkmap()`

## 匿名枚举
枚举也可以是匿名的
```pluto
enum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

assert(OPTION_1 == 1)
assert(OPTION_2 == 2)
assert(OPTION_3 == 3)
```

## 使用兼容模式？
你可能需要使用 `pluto_enum` 而不是 `enum`。
