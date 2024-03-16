---
layout: '../../layouts/MarkdownLayout.astro'
title: 'VPN'
author: 王福强
pubDate: 2023-09-09
keywords: VPN,王福强,Fuqiang Wang,fujohnwang
description: VPN - 架构百科
---

# VPN

VPN是Virtual Private Network的缩写，一提到VPN，很多人估计直接跟某些特殊用途挂钩起来，却忘记了VPN原本的样貌和职能。

其实VPN更多是出于安全通信方面的考虑， 最典型的两个场景，一个是办公网络，比如现在很多公司都是居家办公，这时候很多员工要连接到公司内网就得使用VPN。 另一个典型的场景就是工业网络，尤其是现在机器人和机械臂越来越广泛，他们之间的互联互通也需要较高的安全通信保证。

VPN方案从大类上有两种，一种是集中式的VPN拓扑网络，比如搭建办公VPN网络经常用的OpenVPN就属于这一类，另外一种就是对等VPN网络，比如zerotier啦，linux新集成到内核的wireguard啦，都支持对等VPN网络。

很多人自己玩self-hosted的一个需求是内网穿透，除了用frp这类专门的内网穿透网络，其实VPN也是一个很好的选择，比如在wireguard之上构建的tailscale，易用性、安全性就挺好。