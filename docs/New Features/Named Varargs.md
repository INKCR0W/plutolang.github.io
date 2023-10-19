---
sidebar_position: 14
title: 命名可变参数
---
如果您有一个接受可变参数的函数，并希望它们保存在一个表中，您需要做类似这样的操作：

```pluto
function vfunc(...)
	local args = { ... }
	for args as arg do
		print(arg)
	end
end
vfunc("Hello") -- "Hello"
```

但是，使用命名的可变参数，可以简化为这样：

```pluto
function vfunc(...args)
	for args as arg do
		print(arg)
	end
end
vfunc("Hello") -- "Hello"
```
