---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Strategy Pattern'
author: 王福强
pubDate: 2023-09-09
keywords: Strategy Pattern,王福强,Fuqiang Wang,fujohnwang
description: Strategy Pattern - 架构百科
---

# Strategy Pattern

大家好，今天聊Strategy Pattern

Strategy Pattern是设计模式的一种，所谓“策略模式”其实就是“不同情况采用不同的应对”。

从直觉上来说，if else这样的分支语句是实现策略模式最简单粗暴的方法，但从工程实践上来说， Partial Function是一个实现策略模式不错的选择，而通过定义接口+实现的组合，则是最为通用的实现策略。

我们知道，今天的内容分发已经从“以搜索为主”进化为“以推荐为主”，而推荐所追求的千人千面的效果，其实就是一种策略模式的体现。

延伸一些讲，策略模式也可以用在为人处事上面，“千人千面”这时候则表现为“对待同志要像春天般温暖, 对待敌人要像严冬一样残酷无情”。

最后留一个小问题给大家，你知道怎么消除代码中的if else分支逻辑吗？ 
