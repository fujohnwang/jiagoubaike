---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Service Mesh'
author: 王福强
pubDate: 2023-09-09
keywords: Service Mesh,王福强,Fuqiang Wang,fujohnwang
description: Service Mesh - 架构百科
---

# Service Mesh

大家好， 今天跟大家聊聊Service Mesh，也就是服务网格。

这个概念的本质其实没有那么复杂，如果有人是传统运维出身，那么对于在每台服务器上部署agent或者daemon程序的情形并不陌生，所谓的Service Mesh，其实就是把服务依赖的通用服务模块本地化内聚到服务所部署的结点上去，实现就近接入、标准化接入。

Service Mesh实际上与传统的“集中式部署”相对，只是做了拓扑结构上的变换，之所以今天很多人都喜欢上Service Mesh，是因为随着Docker和Kubernetes的流行，我们已经有普遍的能力来做标准化的批量交付，面对海量的通用服务部署，从工程上到人力上，都不再是瓶颈。

当然，是不是所有的微服务体系都要构建在Service Mesh之上呢？ 也不一定，企业阶段不同，团队结构不同， 最终选型也会不同，还是那句话，选择合适自己的最好。