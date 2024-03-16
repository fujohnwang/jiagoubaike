---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Serverless'
author: 王福强
pubDate: 2023-09-09
keywords: Serverless,王福强,Fuqiang Wang,fujohnwang
description: Serverless - 架构百科
---

# Serverless

大家好，今天跟大家聊聊Serverless。

Serverless不是没有服务器，也不是服务器更少，Serverless代表的是一种架构与基础设施设计。

Serverless的理念最早来自于AWS的Lambda这个产品，此后所有的云服务厂商也依次推出了类似的Serverless服务。

Serverless的架构理念其实很简单，就是传统的“核心+插件”设计，由云提供运行的核心基础设施，由用户提供自定义逻辑并提交给Serverless服务去运行，一般情况下，自定义逻辑通常会建议用Function（即函数）的形式设计和开发，所以，Serverless的概念一般跟FaaS的概念紧密相连，FaaS是Function As A Service的缩写。

2015年左右，扶墙老师曾经让架构团队就Kafka的使用，参考Serverless架构做简化，让开发人员只专注开发消费逻辑就可以了，后来的事儿大家也都知道了，新的Kafka生态里有了Kafka Connect这样的组件，其实就是某种Serverless。

如果说计算机就负责两件事，存储和计算，那么，Serverless其实就是计算逻辑的终极归属。
