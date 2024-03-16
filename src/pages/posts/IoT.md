---
layout: '../../layouts/MarkdownLayout.astro'
title: 'IoT'
author: 王福强
pubDate: 2023-09-09
keywords: IoT,王福强,Fuqiang Wang,fujohnwang
description: IoT - 架构百科
---

# IoT

大家好，今天聊IoT

IoT是Internet of Things的缩写，也就是“物联网”。

现在经常讲数字化、数据化，那数据都从哪儿来？ 除了从业务来的数据，很大一部分数据其实就来自各种智能设备，比如智能电表、智能机床、智能工厂等等。

IoT物联网的数据有一个突出的特点，那就是TimeSeries， 所有采集来的物联网数据都是以时间为主线存储的，然后辅助以索引和标签进行分析和查询，基于IoT物联网数据的这个特点，业界自然也研发了很多专属的IoT数据库，比如最早的InfluxDB、Apache Druid等，顺道也需要提到国内创业老兵做的TDengine。

IoT物联网因为是赋能设备，所以，它的数据量虽大，但数据价值肯定不如人相关的数据大，主要服务于降本增效，比如巡检、智能预警以及自主账单查询等场景。

当然， 扶墙老师并没有过多参与过IoT物联网领域，所以，本篇只是扶墙老师的一家之言，各位看官自行判断，也欢迎拍砖；）