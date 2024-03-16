---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Streaming Database'
author: 王福强
pubDate: 2023-09-09
keywords: Streaming Database,王福强,Fuqiang Wang,fujohnwang
description: Streaming Database - 架构百科
---

# Streaming Database

大家好，今天跟大家聊下Streaming Database

扶墙老师也是好奇怎么会冒出这么个概念，翻阅了一些资料发现又是造概念多于实质。

如果Streaming Database是多种类型的数据库配合流计算，那么，它充其量只能算是一种标准场景的解决方案。

这种场景其实就是从早年的数据仓库发展到今天的实时流计算。

过去是批处理，处理时间长， 加载到数据仓库之后做一些固定查询， 现在流计算让数据处理更实时，加载到数据库之后，用户也能更快的获得最新数据状态。

如果非要说Streaming Database的概念成立，那么扶墙老师认为，Streaming Database = Stream Computing + OLAP Databases.

至于说用Spark还是Flink来做Stream Computing，还是用GreenPlum或者Clickhouse做分析数据库，那就因人而异、因团队而异、因面对的场景而异了。
