---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Druid'
author: 王福强
pubDate: 2023-09-09
keywords: Druid,王福强,Fuqiang Wang,fujohnwang
description: Druid - 架构百科
---

# Druid

其实有很多技术项目都叫Druid，我们今天要说的Druid指的是Apache Druid，也就是一个开源的实时分析型数据库。

Druid主要面向三种场景：1- 搜索， 2- 时间序列数据， 3- 数据分析

搜索一般我们会直觉性地选择ElasticSearch，但Druid的设计也支持很好的搜索功能；

时间序列数据也就是Time Series数据，有很多专用数据库在做这个事情， 但Druid也能做，有点儿一专多能了，上次听一个兄弟讲他们的商业化产品，监控存储一体机，用的就是Druid，效果据说还不错。

数据分析场景也有很多方案，比如这些年比较火的Clickhouse，但这同样也是Druid的强项和核心职能，唯一差别可能是，Clickhouse是使用C++写的，Druid则是使用Java写的。

如果你的团队因为某些原因不能使用公有云，而且团队的Java实力又比较雄厚，那么， 分析型场景选用Druid应该是一个不错的选择。

