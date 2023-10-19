---
title: 面向对象编程
---
Pluto 在面向对象编程方面进行了众多改进。

## 方法创建

以前，在 Lua 表中实现一系列方法是相当繁琐的。
```pluto showLineNumbers title="旧代码"
local t = {}

function t:f1(...) end
function t:f2(...) end
function t:f3(...) end
```
现在，您可以内联这些语句到表中。
```pluto showLineNumbers title="新代码"
local t = {
    function f1() end,
    function f2() end,
    function f3() end
}
```
这会自动标记这些函数为方法。
:::caution
请注意，这样生成的是*方法*，这意味着您需要使用冒号调用语法，以避免参数的位置歧义。
:::

## 静态函数

为了与上述语法保持一致，您可以使用 'static function' 来声明表中的非方法函数：

```pluto showLineNumbers
local t = {
    static function say(msg)
        print(msg)
    end
}
t.say("Hello") -- "Hello"
```

## 新表达式

Pluto 添加了一个方便的方法来使用 `new` 表达式创建实例。这个表达式还会调用 `__construct` 方法（如果存在的话）。

```pluto showLineNumbers
local Human = {
    function __construct(name)
        self.name = name
    end
}
local john = new Human("John")
print(john.name) -- John
```

## 类语句

`class` 语句类似于表构造器，但不需要逗号或分号：

```pluto showLineNumbers
class Human
    function __construct(name)
        self.name = name
    end

    function __gc()
        print(self.name .. " died of irrelevance")
    end
end
local john = new Human("John")
```

类语句还支持修饰符：`local class NAME`、`export class NAME`。

### 类表达式

还有一个 `class` 表达式，可以在赋值给变量时使用，例如：

```pluto showLineNumbers
local Human = class
    function __construct(name)
        self.name = name
    end
end
```

### 继承

类语句还支持 `extends` 来指定父类：

```pluto showLineNumbers
class Entity
    age = 1
end

class Human extends Entity
end

local human = new Human()
print(human.age) -- 1
```

这也会在 Human 类中添加一个 `__parent` 字段。

## 父类表达式

`parent` 表达式是 `self.__parent` 的简写，还支持方法调用语法，在这种情况下，它是 `self.__parent.METHOD(self, ...)` 的简写。

```pluto showLineNumbers
class Entity
    function __construct(name)
        self.name = name
    end
end

class Human extends Entity
    -- 如果我们不定义 __construct，父类构造函数会自动调用。
    -- 但是，如果我们重写它，我们可以使用 parent:__construct 手动调用它。
    function __construct(name)
        parent:__construct(name)
    end
end

local human = new Human("John")
print(human.name) -- "John"
```

请注意，如果您有一个名为 "parent" 的局部变量（或函数参数），`parent` 表达式将会引用它。

## 构造函数提升

因为 `__construct` 方法的常见任务是将参数的值分配给表字段，Pluto 提供了一个简单的语法来减少这种模板代码：

```pluto
class Human
    function __construct(public name)
    end
end

local human = new Human("John")
print(human.name) -- "John"
```

## instanceof 操作符

`instanceof` 操作符用于检查一个表是否是一个类的实例，包括继承的类：

```pluto showLineNumbers
class Entity end
class Human extends Entity end
local e = new Entity()
local h = new Human()
print(e instanceof Entity) -- true
print(e instanceof Human) -- false
print(h instanceof Entity) -- true（通过继承）
print(h instanceof Human) -- true
```

它也可以作为一个函数使用：

```pluto showLineNumbers
class Entity end
local e = new Entity()
print(instanceof(e, Entity)) -- true
```

## 使用兼容模式？

由于兼容模式，这里讨论的一些语法可能会有所不同：
- `new` -> `pluto_new`
- `class` -> `pluto_class`
- `parent` -> `pluto_parent`
