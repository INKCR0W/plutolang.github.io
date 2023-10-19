---
sidebar_position: 10
title: Switch 语句
---
该语句包括以下新关键字：

- `case`
- `switch`
- `default`

下面是一个示例，展示了如何在 Pluto 中使用switch语句：

```pluto
local value = 1
switch value do
	case 1:
		print("只有一个！")
		break
	case 2:
		print("只有两个！")
		break
end
-- Break 跳转到这里。
```

开关语句还支持"穿透"（fallthrough），如下所示：

```pluto
local value = 1
switch value do
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		print("得到 1 到 5。")
		break
	default:
		print("值大于 5。")
end
-- Break 跳转到这里。
```

在这个示例中，情况 1 到 4 "穿透" 到情况 5。

请记住，只要不希望发生"穿透"，就要使用 `break`。下面是一个潜在的 bug 示例：
```pluto
local value = 1
switch value do
	case 1:
		print("只有一个！")
	case 2:
		print("只有两个！")
end

-- 输出：
-- 只有一个！
-- 只有两个！ --> 啊哦
```

`default` 情况用于当其他情况都不成立时执行。例如：

```pluto
local value = 1
switch value do
	case 2:
	case 3:
		break

	default:
		print("值既不是 2 也不是 3！")
end
```
`default` 情况可以放在语句的任何位置，并且也支持"穿透"，所以如果您将其放在其他情况之上，请不要忘记使用 `break`。

#### [试一试](https://pluto-lang.org/web/#code=local%20value%20%3D%203%0D%0Aswitch%20value%20do%0D%0A%20%20case%201%3A%0D%0A%20%20case%202%3A%0D%0A%20%20case%203%3A%0D%0A%20%20case%204%3A%0D%0A%20%20case%205%3A%0D%0A%20%20%20%20print%20%22Got%201-5.%22%0D%0A%20%20%20%20break%0D%0A%20%20default%3A%0D%0A%20%20%20%20print%20%22Value%20is%20greater%20than%205.%22%0D%0Aend%0D%0A--%20Break%20jumps%20here.)

## 情况语句
情况语句可以使用任何表达式作为条件：

```pluto
switch true do
	case 42 == 42:
		print("42 等于 42 是真的")
		break
end
```

但是，请注意，如果要进行方法调用，需要将方法调用用括号括起来，如下所示：

```pluto
local t = {
	function getVal()
		return 42
	}
}
switch 42 do
// 错误：
	case t:getVal(): -- 这将被解释为 case t: getVal():print...
// 错误：
		print("值是 42")
// 错误：
		break
	case (t:getVal()):
		print("值是 42")
		break
end
```

## 使用兼容模式？
你需要使用 `pluto_switch` 而不是 `switch`.
