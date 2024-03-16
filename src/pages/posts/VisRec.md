---
layout: '../../layouts/MarkdownLayout.astro'
title: 'The VisRec API'
author: 王福强
pubDate: 2023-09-09
keywords: VisRec,王福强,Fuqiang Wang,fujohnwang
description: The VisRec API - 架构百科
---

# The VisRec API

AI时代是Python更受欢迎的时代，Java有些落后，好在亡羊补牢未为晚也，JSR 381即The VisRec API，就是为了解决Java生态应对机器学习遇到的普遍问题而诞生的。

VisRec全称为Visual Recognition，该规范于2022年初发布，主要解决以下痛点：

1. 不兼容的多种数据格式；
2. 多种不同的机器学习算法；
3. 超多令人疑惑的配置参数
4. 缺乏简单清晰的面相任务的使用接口；
5. 缺乏简单可移植到现有Java应用程序与设备的集成方案

有了VisRec API的加持，Java应用程序可以更好的使用已有模型，将这些开源社区的成就集成为特定服务对外开放使用，从而构建基于Web，JavaFX以及移动端APP等不同类型的应用生态。