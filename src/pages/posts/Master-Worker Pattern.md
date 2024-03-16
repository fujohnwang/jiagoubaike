---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Master-Worker Pattern'
author: 王福强
pubDate: 2023-09-09
keywords: Master-Worker Pattern,王福强,Fuqiang Wang,fujohnwang
description: Master-Worker Pattern - 架构百科
---

# Master-Worker Pattern

大家好，有谁还记得Github当年把默认分支从master改成main这破事儿的？

相对于Master-Worker Pattern这种比较规范的说法，或许Master-Slaves更通俗易懂。

用过MySQL数据库的应该都知道，MySQL最经典的部署拓扑结构就是Master Slaves结构，通过一主多备的架构，可以帮助我们实现数据的读写分离，从而很大程度上解决应用程序第一阶段遇到的扩展性问题。

今天的云原生基础设施，甚至云原生之前时期的基础设施，很多都是基于Master-Worker架构模式设计和实现的， 比如Hadoop， 比如Kubernetes， 比如Kafka， 当然，新的Kafka 3使用了新的架构设计，没有之前基于Zookeeper那么明显的Master-Workers特征了。

扶墙老师今天看到一个很有意思的数据仓库设计方案，基于Postgres和Sqlite， 由Postgres和它的FDW特性作为Master做聚合计算，由Lambda+Sqlite做存储和计算的Workers，效果居然出奇的好，：）

当然， Master-Worker Pattern本质上是用来应对“非对称集群”的设计与实现的，对称集群则是另一套思路了。

