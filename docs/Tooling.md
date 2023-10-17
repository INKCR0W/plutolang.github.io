---
sidebar_position: 2
---

# 工具

虽然理论上 Pluto 可以使用面向 Lua 的工具，但同时也有专门的插件来优化你在VS Code， Sublime Text等中的编码体验。

## 语法高亮显示

Pluto有一个[TextMate捆绑包](https://github.com/PlutoLang/Syntax-Highlighting)。它提供语法高亮和关键字联想(例如，当你输入“fun”，然后按tab键)。这可以在很多应用程序中使用，包括Sublime Text和VS Code。

## LSP服务器

[pluto-language-server](https://github.com/PlutoLang/pluto-language-server)是一个在 plutoc 的基础上构建的简单封装，它可以通过 LSP（Language Server Protocol）向您的文本编辑器提供警告、错误、建议/自动补全等功能。
