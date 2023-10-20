---
title: 可选的括号
---

某些类型表达式的括号现在是可选的。
```pluto showLineNumbers title="粗糙方式"
print(("hello world"):contains("world"))
```
```pluto showLineNumbers title="简洁方式"
print("hello world":contains("world"))
```
这也适用于表类型。