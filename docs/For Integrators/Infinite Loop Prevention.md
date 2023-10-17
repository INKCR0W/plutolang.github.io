---
title: 无限循环预防
---

Pluto 可以通过防止连续的迭代次数过多来检测无限循环。这是因为游戏线程通常会强制用户调用某种 `yield` 机制以将控制返回到游戏线程。在 Pluto 中，你可以指定迭代的硬性限制，然后指定一个函数指针，该函数应该防止在其被调用的循环中发生无限循环。
```pluto showLineNumbers title="This will produce an error due to ILP:"
while true do

end
```
```pluto showLineNumbers title="This will not, with correct configuration:"
while true do
    yield()
end
```
如果你的调度系统每个周期至少调用一次 `coroutine.yield`，那么配置 ILP 机制可以简单地定义 `PLUTO_ILP_ENABLE`。在任何情况下，Pluto 的配置文件（luaconf.h）值得一看，特别是为了正确配置这个特性。

:::info
这是一个非常简单的机制。它几乎没有性能开销，非常轻量级。然而，这种机制的妥协是覆盖范围有限。它可靠地防止大多数用户错误，但恶意用户仍然可以找到一种方法来阻止线程。例如，任何向前跳跃都会阻止机制中断循环。这可能会被滥用，所以不要依赖它来进行安全控制。
:::
