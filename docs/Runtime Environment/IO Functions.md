---
sidebar_position: 1
title: IO 函数
---
由 Pluto 实现的 `io` 库的新函数。
### io.isdir
#### 参数
1. 一个路径字符串或者文件流。
#### 返回
A boolean indicating if the path led toward a directory.
#### 示例
```pluto showLineNumbers title="使用示例"
local path = "./dir/main/"
local bool = io.isdir(path)
if bool then
    print("Directory!")
else
    print("Not a directory!")
end
```
### io.isfile
#### 参数
1. 一个路径字符串或者文件流。
#### 返回
布尔值，表示路径是否指向文件。
#### 示例
```pluto showLineNumbers title="使用示例"
local path = "./isfile/file"
local bool = io.isdir(path)
if bool then
    print("File!")
else
    print("Not a file!")
end
```
### io.listdir
列出一个目录中的所有文件。
#### 参数
1. 目录的路径字符串。
2. 一个布尔值，表示是否对子目录进行递归。
#### 返回
一个将索引映射到文件路径的表。
#### 示例
```pluto showLineNumbers title="使用示例"
for _, filepath in io.listdir(".") do
    print(filepath)
end
```
### io.exists
#### 参数
1. 一个路径字符串或者文件流。
#### 返回
布尔值，表示路径是否指向现有文件或目录。
#### 示例
```pluto showLineNumbers title="使用示例"
if io.exists("cfg/config.txt") then
    print("Config exists!")
else
    print("Config does not exist!")
end
```
### io.copyto
将一个文件复制到另一个文件，必要时创建一个新文件。
#### 参数
1. 一个路径字符串或者文件流。
2. 要复制到的文件的路径。
#### 返回
布尔值，表示文件是否复制成功。
#### 示例
```pluto showLineNumbers title="使用示例"
if io.copyto("./cfg/config.txt", "./backup_cfg/config.txt") then
    print("Successfully created a backup config!")
else
    print("Failed to create a backup config.")
end
```
:::info
从 0.3.2 起，失败时可能会抛出异常。
:::
### io.filesize
以 kb 为单位获取文件大小。
#### 参数
1. 一个路径字符串或者文件流。
#### 返回
一个浮点数
#### 示例
```pluto showLineNumbers title="使用示例"
if io.filesize("cfg/config.txt") < 1.0 then
    print("Config is too small or empty.")
end
```
:::info
从 0.3.2 起，失败时可能会抛出异常。
:::
### io.makedir
创建一个目录
#### 参数
1. 新目录的路径字符串。
#### 返回
布尔值，表示目录是否创建成功。
#### 示例
```pluto showLineNumbers title="使用示例"
if io.makedir("./cfg") then
    print("Created cfg directory.")
else
    print("Failed to create cfg directory.")
end
```
### io.makedirs
在给定路径下创建一个目录和所有不存在的父目录。
#### 参数
1. 新目录的路径字符串。
#### 示例
```pluto showLineNumbers title="使用示例"
io.makedirs("A/B/C") --> Creates "C:\Users\Username\Desktop\Project\A\B\C"
```
### io.absolute
将相对路径转换为绝对路径。
#### 参数
1. 一个路径字符串或者文件流。
#### 返回
表示文件路径的字符串。
#### 示例
```pluto showLineNumbers title="使用示例"
--> cfg/config.txt
io.absolute("cfg/cfg.txt") --> "C:\Users\Username\Desktop\Project\cfg\cfg.txt"
```