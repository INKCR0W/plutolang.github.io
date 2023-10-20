---
sidebar_position: 2
title: OS 函数
---
由 Pluto 实现的 `os` 库的新函数。
### os.sleep
#### 参数:
1. 要睡眠的毫秒数。
#### 示例
```pluto showLineNumbers title="基本使用"
os.sleep(1000) --> 暂停这个线程 1000 毫秒。
```
### os.millis
返回自纪元以来的毫秒数。
:::info
该函数的返回值取决于具体实现。
:::
### os.nanos
返回自纪元以来的纳秒数。
:::info
该函数的返回值取决于具体实现。
:::
### os.seconds
返回自纪元以来的秒数。
:::info
该函数的返回值取决于具体实现。
:::
### os.unixseconds
返回自 UNIX 纪元以来的秒数。