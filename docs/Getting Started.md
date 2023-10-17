---
sidebar_position: 1
title: 开始你的 Pluto 之旅
---

# 开始你的 Pluto 之旅

本文将解释如何快速入门 Pluto 编程。

## 在线编写 Pluto

开始编写 Pluto 最简单的方法是使用 [Write Pluto Online](https://pluto-lang.org/web/)，它在浏览器中直接运行 Pluto 代码，使用 WASM 技术。

## 构建的可执行文件

您可以在 [Pluto 的 Github 发行页面](https://github.com/PlutoLang/Pluto/releases) 上找到 Pluto 的预构建二进制文件，支持 Windows、Linux 和 Mac OS。

### Chocolatey

您可以通过 Chocolatey 软件包管理器轻松安装 Pluto 和 plutoc，步骤如下：

```shell
choco source add -n "Calamity, Inc." -s https://choco.calamity.gg/index.json
choco install plutolang
```

请注意，需要使用 Chocolatey 2.0.0 或更高版本来执行这些操作。

## 自己编译 Pluto

要自己编译 Pluto，你需要在几乎任何平台上都有一个支持 C++ 17 的编译器，包括但不限于以下平台：
- BSD
- FreeBSD
- Linux
- MacOS
- Windows
- Solaris

要自己编译 Pluto，首先需要克隆存储库：
```
git clone https://github.com/PlutoLang/Pluto.git
cd Pluto
```
然后，只需运行 `make` 命令：
```
make PLAT={yourplatform}
```

可以在 [这里](https://github.com/PlutoLang/Pluto/blob/main/src/Makefile#L38) 找到支持的平台列表。

编译完成后，所有二进制文件将位于 `src/` 目录中。

#### 对于 Windows 用户
`make` 命令通常不会默认安装，因此你应该安装 [MSYS](https://www.msys2.org/)。

另外，对于 Windows 用户，你还可以安装 Visual Studio 2022，并直接使用 Pluto 存储库中的 Visual Studio 文件。这将使编译 Pluto 变得更加容易。
