---
layout: '../../layouts/MarkdownLayout.astro'
title: 'APM'
author: 王福强
pubDate: 2023-09-09
keywords: APM,王福强,Fuqiang Wang,fujohnwang
description: APM - 架构百科
---

# APM

APM算是微服务热潮之后的标配型技术基础设施服务，全称是Application Performance Management， 但实际上它可以解决的已经远非性能问题了。

要讲APM，就必须提到Dapper，也就是2010年Google发表了一篇名为「Dapper, a Large-Scale Distributed Systems Tracing Infrastructure」的论文，详细阐述了Google内部的这个分布式追踪基础设施。

此后，淘宝啦，携程啦等公司的技术团队，就根据Dapper的设计原理打造了自己家的分布式追踪产品，而今天主流的open tracing啦，zipkin啦， skywalking啦，则是后话。

APM的架构设计一般包含几个部分： 采集、汇聚、存储、分析和展示，其中采集端讲求接入的便利性，比如基于java agent， 汇聚段讲求接入协议的开放性，存储和分析一般会根据数据特点选择具体的技术方案，比如有的产品选择ElasticSearch， 至于展示嘛，那就每个产品按照自己的调性来了。

分布式系统可以支撑大容量、高并发，但同时也会带来极大的系统复杂度，这是APM的立命之本，同时有了APM之后，也衍生出了新的Observability理念。