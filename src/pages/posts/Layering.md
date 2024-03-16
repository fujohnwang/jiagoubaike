---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Layering'
author: 王福强
pubDate: 2023-09-09
keywords: Layering,王福强,Fuqiang Wang,fujohnwang
description: Layering - 架构百科
---

# Layering

Layering即分层，它是架构领域很常见的一种思维方式， 也有叫Onion Pattern的， 因为把洋葱切开，会看到洋葱内部一层一层的结构，很具象化，不是吗？

不同计算机语言编码实践中都会有Layering思维的影子，比如Java语言里的拦截器(Interceptor)， 比如Ruby语言里的Mixin， 再比如架构百科之前讲的AOP，所有横切关注点最终都是按照层次加载执行的。

计算机网络在设计的时候也是采用了分层的设计， 最经典的就是OSI模型， 即Open System Interconnection Model， 它把计算机网络分成了7层，但在工程实践中，现实中更多会采用更为简化的TCP/IP 4层结构。

现代的互联网技术体系大多建立在IaaS,PaaS和SaaS三层逻辑架构之上，这也是一种粒度上的分层；

区块链网络随着性能与成本瓶颈的出现，也逐渐分化出Layer1和Layer2网络，也是一种分层架构；

分层架构的好处是结构清晰， 让不同人群关注不同层次的问题，从而降低了解决问题的难度，提升了整体治理的效率，最主要，降低了每个人的认知成本。