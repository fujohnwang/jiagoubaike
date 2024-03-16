---
layout: '../../layouts/MarkdownLayout.astro'
title: 'SPoF'
author: 王福强
pubDate: 2023-09-09
keywords: SPoF,王福强,Fuqiang Wang,fujohnwang
description: SPoF - 架构百科
---

# SPoF

今天哈里森叔叔问我为啥没更新了，嗯，这个月琐碎事儿挺多，没精力天天更新视频，所以，扶墙老师自己就成了SPoF，也就是Single Point of Failure。

在架构设计中，如果某一个职能只有一个结点提供服务，那么，当这个结点出错或者失效之后，它对应的职能也就失效了，我们通常就称这个单一结点是一个Single Point of Failure，也就是单点故障。

为了规避Single Point of Failure的风险， 我们可以通过引入更多的结点作为备份结点或者冗余结点，比如MySQL数据库的拓扑结构中，最常见的就是Master-Slave结构或者双A结构（即double active），既增加了扩展性，又增加了可用性，同时还规避掉了Single Point of Failure的风险。

对于「架构百科」的内容创作来说，暂时就扶墙老师自己在制作更新，所以，扶墙老师就是「架构百科」的Single Point of Failure。 后面如果「架构百科」受到更多同学喜欢，那时候就得考虑增加人手来规避Single Point of Failure咯~