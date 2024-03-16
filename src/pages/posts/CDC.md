---
layout: '../../layouts/MarkdownLayout.astro'
title: 'CDC'
author: 王福强
pubDate: 2023-09-09
keywords: CDC,王福强,Fuqiang Wang,fujohnwang
description: CDC - 架构百科
---

# CDC

CDC是Centers for Disease Control and Prevention的缩写，即“疾病控制与预防中心”

“哦，sorry， 走错片场了，不好意思，不好意思…”

CDC是Change Data Capture的缩写，“数据变动捕捉”， 它存在的主要目的就是能实时感知数据的变动，然后分发数据变动事件给数据链路的下游。 

CDC相当于现代大数据体系的动脉，古有大运河，今有CDC，从传统的ETL批处理迈进到今天的实时数据处理，CDC是关键中的关键。

扶墙老师2010年左右搞的Erosa，后来成了Canal的基础，就是早年在阿里巴巴搞的CDC产品， 后来，像开源的Debezium以及国内很多家创业公司搞的类似产品就越来越多了，所以，今天搞实时数据智能真得是so easy~ ，老板再也不用担心我的报表 ；）

实现CDC有很多种策略，比如你可以基于数据库的trigger机制，可以通过应用层配合消息中间件的机制，这些都能实现CDC，但最常见的还是基于数据库的binlog或者redo log机制，这种方案的研发难度较高，尤其是没有数据协议的时候，所以，对于像Oracle这种闭源数据库要实现CDC，最好的策略可能就是买他家配套的GoldenGate产品，当然，如果你有抓包破解的能力，还有足够的研发预算投入，那就另当别论了。

