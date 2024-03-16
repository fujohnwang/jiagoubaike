---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Confinement'
author: 王福强
pubDate: 2023-09-09
keywords: Confinement,王福强,Fuqiang Wang,fujohnwang
description: Confinement - 架构百科
---

# Confinement

confinement是治理的内部视角，关键特征是自给自足。

服务化到一定程度之后会提“单元化”，而单元化其实就是confinement的一种体现。

最初级的confinement其实就是monolith应用，近乎把所有功能都纳入一个项目中管理、开发和部署。

而docker images更是confinement理念的最佳实践， 它按照layer把应用需要的依赖从上到下全都打包成一个整体，而不用像过去那样要先由运维人员做软硬件的环境准备，之后才能部署应用。
