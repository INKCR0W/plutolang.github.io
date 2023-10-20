---
title: 布尔值连接
---

Pluto 支持你像连接 int 变量一样连接 bool 变量：
```pluto
local iVar = 13
local bVar = true
print("iVar = " .. iVar)
print("bVar = " .. tostring(bVar)) -- Lua 方式
print("bVar = " .. bVar) -- Pluto 方式
```