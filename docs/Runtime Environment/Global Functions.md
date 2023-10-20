---
sidebar_position: 6
title: 全局函数
---
必须披露环境中的一些细微变化和新增内容：
1. `_PVERSION` 是全局变量，用于检查 Pluto 的当前版本。
2. `_PSOUP` 是一个全局布尔变量，您可以访问它来检查与 Soup 的链接。
3. `package.path` 被修改，以便搜索 `.pluto` 文件。
```pluto
if _PVERSION == nil then
    print("Plain Lua detected (".._VERSION..")")
else
    local soup = ""
    if not _PSOUP then
        soup = "not "
    end
    print("Pluto detected (".._PVERSION.."), based on ".._VERSION..", "..soup.."compiled with Soup integration")
end
```
## 新函数
### utostring
与 `tostring` 相同，但在 `en_US.UTF-8` 本地语言下执行操作。确保在所有系统上的结果相同。
### utonumber
与 `tonumber` 相同，但在 `en_US.UTF-8` 本地语言下执行操作。确保在所有系统上的结果相同。