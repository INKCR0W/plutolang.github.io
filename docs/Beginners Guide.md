---
sidebar_position: 3
title: 初学者指南
---

这篇文章适用于那些对 Lua 完全不熟悉但想立刻开始学习 Pluto 的人。

对于已经熟悉 Lua 的人来说，本文档的其余部分应该是 Pluto 的很好介绍。

## 你的第一个程序

让我们从简单的 “Hello, world!” 开始。

```pluto
print("Hello, world!")
```
#### [试一试](https://webshell.dev/#code=print(%22Hello%2C%20world!%22)&ext=pluto&run=pluto)

建议使用 "试一试" 链接进行尝试。同时，你可以随意修改代码并使用终端重新运行它（上箭头键 + 回车键）。

正如你所看到的，这个程序打印 "Hello, world!"，它通过调用 Lua 的内置 `print` 函数来实现。

## 简单的计算

当然，我们希望的不仅仅是输出一个文本，所以让我们通过一些算术运算来变得更加编程化。

```pluto
print($"2 + 2 is {2 + 2}")
```

请注意字符串前面的 `$`；这允许我们使用大括号将表达式直接嵌入到字符串中。在这种情况下，我们嵌入了表达式 `2 + 2`，它的值是 4。

#### [试一试](https://webshell.dev/#code=print(%24%222%20%2B%202%20is%20%7B2%20%2B%202%7D%22)&ext=pluto&run=pluto)

## 变量

在 Lua/Pluto 中，默认情况下变量是全局的，可以简单地分配：

```pluto
a = 2
print($"a is {a}")
a += 2
print($"I added 2 and now it's {a}")
```

请注意，字符串前面仍然有 `$`，但这次我们嵌入了表达式 `a`，它在这里访问了 `a` 的值。

#### [试一试](https://webshell.dev/#code=a%20%3D%202%0D%0Aprint(%24%22a%20is%20%7Ba%7D%22)%0D%0Aa%20%2B%3D%202%0D%0Aprint(%24%22I%20added%202%20and%20now%20it's%20%7Ba%7D%22)&ext=pluto&run=pluto)

## 条件语句

然而，编程不仅仅是关于计算，所以让我们进入流程控制，或者正如计算机科学家所称的 “控制流”（"control flow"）。

```pluto
a = 1
b = 2

if a + b == 4 then
	print("The sum is 4!")
else
	print("The sum is not 4. Could you change a or b to fix it?")
end
```
#### [试一试](https://webshell.dev/#code=a%20%3D%201%0D%0Ab%20%3D%202%0D%0A%0D%0Aif%20a%20%2B%20b%20%3D%3D%204%20then%0D%0A%20%20%20%20print(%22The%20sum%20is%204!%22)%0D%0Aelse%0D%0A%20%20%20%20print(%22The%20sum%20is%20not%204.%20Could%20you%20change%20a%20or%20b%20to%20fix%20it%3F%22)%0D%0Aend&ext=pluto&run=pluto)

如你所见，打印的消息会根据表达式 `a + b == 4` 是否为 _true_ 或 _false_ 而发生变化。

## 循环

我们不仅可以改变代码是否运行，还可以改变运行的频率。例如，我们可以创建一个从1数到10的脚本：

```pluto
for i=1, 10 do
	print(i)
end
```
#### [试一试](https://webshell.dev/#code=for%20i%3D1%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend&ext=pluto&run=pluto)

我们还可以更改间隔。例如，在间隔为10的情况下从0数到100：

```pluto
for i=0, 100, 10 do
    print(i)
end
```
#### [试一试](https://webshell.dev/#code=for%20i%3D0%2C%20100%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend&ext=pluto&run=pluto)

## 表

好的，现在你了解了基本的控制流和数据类型（数字和字符串），让我们来看一个更有趣的数据类型：表（tables）。它可以存储有组织的多个数据，例如游戏中每个玩家的分数：

```pluto
players = {
    ["John"] = 15,
    ["Jane"] = 10,
    ["Bob"] = 12,
}
for name, score in players do
	print($"{name} has a score of {score}.")
end
```
#### [试一试](https://webshell.dev/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%2012%2C%0D%0A%7D%0D%0Afor%20name%2C%20score%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20score%20of%20%7Bscore%7D.%22)%0D%0Aend&ext=pluto&run=pluto)

请注意，我们仍然使用了一个 for 循环，但这次我们是在我们的玩家表上进行 _迭代_，而不是在一系列数字上。

我们还可以在表中存储表，因此我们可以为每个玩家存储更多数据，而不仅仅是一个单独的数字：

```pluto
players = {
    ["John"] = {
        ["kills"] = 15,
        ["deaths"] = 5,
    },
    ["Jane"] = {
        ["kills"] = 10,
        ["deaths"] = 8,
    },
    ["Bob"] = {
        ["kills"] = 12,
        ["deaths"] = 8,
    },
}
for name, data in players do
	print($"{name} has {data.kills} kills and {data.deaths} deaths.")
end
```
#### [试一试](https://webshell.dev/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20%7Bdata.kills%7D%20kills%20and%20%7Bdata.deaths%7D%20deaths.%22)%0D%0Aend&ext=pluto&run=pluto)

## 计算 K/D 比

让我们把到目前为止学到的东西都付诸实践，创建一个真正为我们工作的程序，而不是那些简单的例子。

```pluto
players = {
    ["John"] = {
        ["kills"] = 15,
        ["deaths"] = 5,
    },
    ["Jane"] = {
        ["kills"] = 10,
        ["deaths"] = 8,
    },
    ["Bob"] = {
        ["kills"] = 12,
        ["deaths"] = 8,
    },
}
-- Add "kd" field to each player
for players as player do
    player.kd = player.kills / player.deaths
end
-- Print
for name, data in players do
    print($"{name} has a K/D of {data.kd}.")
end
```
#### [试一试](https://webshell.dev/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0A--%20Add%20%22kd%22%20field%20to%20each%20player%0D%0Afor%20players%20as%20player%20do%0D%0A%20%20%20%20player.kd%20%3D%20player.kills%20%2F%20player.deaths%0D%0Aend%0D%0A--%20Print%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend&ext=pluto&run=pluto)

请注意另一种 for 循环的变体：for-as 循环。这对于计算 K/D 比很方便，因为我们不关心玩家的名字。

## 函数中的封装

我们已经使用了不少函数，，，好吧，至少有 `print` 函数，所以现在是时候创建我们自己的函数了。

```pluto
function calculate_kd(plys: table)
	for plys as ply do
	    ply.kd = ply.kills / ply.deaths
	end
end
players = {
    ["John"] = {
        ["kills"] = 15,
        ["deaths"] = 5,
    },
    ["Jane"] = {
        ["kills"] = 10,
        ["deaths"] = 8,
    },
    ["Bob"] = {
        ["kills"] = 12,
        ["deaths"] = 8,
    },
}
calculate_kd(players)
for name, data in players do
    print($"{name} has a K/D of {data.kd}.")
end
```
#### [试一试](https://webshell.dev/#code=function%20calculate_kd(plys%3A%20table)%0D%0A%20%20%20%20for%20plys%20as%20ply%20do%0D%0A%20%20%20%20%20%20%20%20ply.kd%20%3D%20ply.kills%20%2F%20ply.deaths%0D%0A%20%20%20%20end%0D%0Aend%0D%0Aplayers%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Acalculate_kd(players)%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend&ext=pluto&run=pluto)

正如你所看到的，代码的行为与以前完全相同！也许不是非常有趣，但比起另一种选择要好。

让我们详细分析一下到底发生了什么：
- 在第一行，我们声明了一个名为 `calculate_kd` 的函数，它有一个类型为 `table` 的参数 `plys`。请注意，`：table` 部分是可选的，但明确表示假设总是很好的！
- 然后，在脚本的最后，我们使用我们的 `players` 表作为参数调用 `calculate_kd`。

## 局部变量

接下来，我想介绍局部变量，但实际上你已经见过它们了！在上面的示例中，`calculate_kd` 函数的 `plys` 参数是一个局部变量，因为它只在该函数的主体内可用。

然而，除了通过将它作为函数参数具有局部变量的特性外，我们还可以手动定义一个，就像我们已经定义了变量一样，只是在它之前加上 `local`：

```pluto
local a = 1
print(a)
```
#### [试一试](https://webshell.dev/#code=local%20a%20%3D%201%0D%0Aprint(a)&ext=pluto&run=pluto)

## nil 值

但是，当我们使用一个没有定义的变量，或者没有给它一个值时，会发生什么？

```pluto
local no_value_given
print(no_value_given)
print(never_defined)
```
#### [试一试](https://webshell.dev/#code=local%20no_value_given%0D%0Aprint(no_value_given)%0D%0Aprint(never_defined)%0D%0A&ext=pluto&run=pluto)

正如你所看到的，这会打印两次 "nil"，所以这就是答案 — 在两种情况下我们得到了 `nil`。`nil` 是一种特殊的类型，用作没有值的表达式的结果。

## 下一步

现在，你应该已经对 Pluto 的基本原理有了一定的了解。如果你想了解更多，这份文档的其余部分肯定是了解 Pluto 更多信息的好地方。

你可以从我们在本指南中已经使用过的一些 Pluto 功能开始学习：
- [字符串插值](New%20Features/String%20Interpolation.md)（`$`-strings）
- [For-As 循环](New%20Features/For-As%20Loop.md)
- [类型提示](New%20Features/Type%20Hinting.md)

如果你想更深入地了解 Pluto 的基础知识，[Lua 手册](https://www.lua.org/manual/5.4/)是一个不错的参考。