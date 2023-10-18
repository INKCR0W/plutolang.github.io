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

## Scoped Enums
You can force usage of the ENUM.ENUMERATOR syntax by using 'enum class':
```pluto
enum class MyEnum begin
	OPTION_1,
	OPTION_2,
	OPTION_3
end

assert(OPTION_1 == nil)
assert(MyEnum.OPTION_1 == 1)
```

## Reflection
When you have a named enum, not only can you get its enumerators, but also reflect upon it with some methods:
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
The following methods are available: `:names()`, `:values()`, `:kvmap()`, `:vkmap()`

## Anonymous Enums
Enums can also be anonymous:
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

## Using Compatibility Mode?
You may need to use `pluto_enum` instead of `enum`.
