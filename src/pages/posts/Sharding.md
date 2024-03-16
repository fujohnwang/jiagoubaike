---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Sharding'
author: 王福强
pubDate: 2023-09-09
keywords: Sharding,王福强,Fuqiang Wang,fujohnwang
description: Sharding - 架构百科
---

# Sharding

大家好，今天跟大家聊聊Sharding。

Sharding的概念可能在不同的产品或者方案服务里有些许不同的指代， 但在扶墙老师这里，Sharding可以进一步细分，且听我慢慢道来…

当单一服务器结点无法处理整体工作负载的时候，我们可以将数据状态或者计算逻辑划分到多个不同的服务器结点，由这些不同的结点来分担工作负载，这个过程一般叫Sharding，即分片，而每一个分配了工作负载的结点，一般成为shard(s)， 嗯，翻译过来也是“分片”，中文就是这么神奇；）

shard有些时候也可以狭义地跟partition（分区）相对等，不过扶墙老师觉得shard可以具象化为两类：

一类叫partitions，每个partition的内容不一样，所有partitions的状态组成一个逻辑整体；

一类叫replicas， 每个replica原则上内容相同，存在的目的要么是为了高可用，要么是为了备份与数据安全；

对于partions和replicas，扶墙老师总结下来的原则是，partitions are for writes, replicas are for read。



