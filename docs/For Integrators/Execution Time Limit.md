---
title: 执行时间限制
---

为了帮助需要沙盒化的环境，Pluto 提供了执行时间限制（ETL），可通过在 `luaconf.h` 或你的构建配置中定义 `PLUTO_ETL_ENABLE` 来启用。

默认情况下，ETL 允许代码运行总共 1 毫秒（1,000,000 纳秒）。这可以通过覆盖 `PLUTO_ETL_NANOS` 来更改。

请注意，这是一个粗暴的解决方案。如果你只想防止愚蠢的错误，[Infinite Loop Prevention](Infinite%20Loop%20Prevention) 是一个更好的工具。