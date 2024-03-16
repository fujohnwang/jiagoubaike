---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Batching'
author: 王福强
pubDate: 2023-09-09
keywords: Batching,王福强,Fuqiang Wang,fujohnwang
description: Batching - 架构百科
---

# Batching

大家好， 今天跟大家聊聊Batching

Batching与其说是一种架构，不如说是一种工程实践。 
使用Batching的主要目的就是提高系统的吞吐量。

这几天上海整个城市都停了， 但大家还是要吃饭，
所以，一个新的英雄群体出现了，
那就是团长。 
而团长其实就是使用Batching的方式来满足小区里各家各户的物资需要，
团购将过去零售、零散的物流和交付，
转变为今天批量、集中的物流和交付。
现实中做出的这种转变是因为疫情管控，
从而导致物流资源的紧张，进而导致资源分配的紧张。 

道理往往是相通的，
在架构设计和工程实践中，
使用Batching的目的通常也是因为某种资源的紧缺，
或者说合理使用现有资源，
比如TCP协议设计里的Nagle算法， 或者针对文件系统的写入，
这些背后的逻辑都是Batching，
也就是批量提交，从而减少对紧缺资源的占用。
