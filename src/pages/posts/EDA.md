---
layout: '../../layouts/MarkdownLayout.astro'
title: 'EDA'
author: 王福强
pubDate: 2023-09-09
keywords: EDA,王福强,Fuqiang Wang,fujohnwang
description: EDA - 架构百科
---

# EDA

大家好，今天聊聊EDA

EDA是Event-Driven Architecture的缩写，即事件驱动架构，本义是响应状态变化的事件并执行相应逻辑和计算。

事件驱动架构的实现可以基于同步处理模型或者异步处理模型。

典型的同步处理模型就是程序里各种Listeners，还记得之前讲的Observer模式吗？ 这种一般用于结点内部的工程实践， 随着系统负载的增长，我们会在处理链路上引入消息中间件，从而可以基于异步处理模型来构建稳定高效的分布式系统。 在整个事件和数据的处理链路上设置多组不同的消息中间件和处理程序，则会产生新的SEDA架构，即Staged Event Driven Architecture.

实际上，现在大部分大数据计算框架和系统，都算是事件驱动架构，Kafka或者Pulsar，配合Spark或者Flink，就是最典型的分布式事件驱动架构实践。



