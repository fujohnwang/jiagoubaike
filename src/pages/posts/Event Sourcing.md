---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Event Sourcing'
author: 王福强
pubDate: 2023-09-09
keywords: Event Sourcing,王福强,Fuqiang Wang,fujohnwang
description: Event Sourcing - 架构百科
---

# Event Sourcing

大家好，今天聊Event Sourcing

扶墙老师也不知道EventSourcing怎么翻译比较好，字面意思就是“事件源”， 它是Immutable架构设计原则的一种实践。

EventSourcing主要有两个关键特征： 

1. 保存所有事件状态的历史数据；
2. 在特定的点设置检查点或者快照点，可以从这些检查点或者快照点回滚或者回放；

EventSourcing可以简单的跟日常的记账场景相类比，基本上就是记录事件的流水账，这样做的好处就是，回头去查任何一笔数据都可以查得到。所以EventSourcing在很多金融系统的设计中很常见，比如订单、现金流、交易记录等场景。而大数据领域的典型中间件Kafka，可以说是EventSourcing的最佳代表。

另外，EventSourcing配合Actor Model可以设计高并发、高扩展性、高数据安全的实时交易系统， 10多年前一位前辈就是基于这种设计，为国内某证券公司设计并实现了一套量化交易系统，时延与吞吐量也都很不错。


