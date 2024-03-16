---
layout: '../../layouts/MarkdownLayout.astro'
title: 'NTP'
author: 王福强
pubDate: 2023-09-09
keywords: NTP,王福强,Fuqiang Wang,fujohnwang
description: NTP - 架构百科
---

# NTP

大家好，欢迎来到架构百科。

今天， 亚马逊开放了自己的Time Sync服务供外部作为NTP服务使用，那么什么是NTP服务呢？

NTP是Network Time Protocol的简称，也就是网络时间协议，因为太过底层，估计很多人不会关注它，但它是今天所有分布式系统得以协同工作的基石。

以UTC时间为基准，NTP控制的时钟同步时间单位控制在毫秒级别，在局域网甚至可以达到1毫秒，它基于UDP协议，在123端口提供服务。

典型的NTP服务基于服务器-客户端模式构建，当然，也可以基于P2P模式，不过这里的P2P可不是金融里的P2P哟，这里的P2P只Peer-To-Peer，也就是对等拓扑结构。

如果要使用亚马逊新开放的这个Time Sync服务作为NTP服务器，可以将自己的NTP客户端指向time.aws.com这个地址， Good Luck and Have Fun～