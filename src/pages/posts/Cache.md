---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Cache'
author: 王福强
pubDate: 2023-09-09
keywords: Cache,王福强,Fuqiang Wang,fujohnwang
description: Cache - 架构百科
---

# Cache

这个词儿既不读擦车，也不读开车， 它读Cash，对，跟现金的读音一样一样的。

cache在简体中文的世界里一般称呼为“缓存”， 而在繁体中文的世界里一般称之为“快取”， 它是一种以空间换时间的策略， 当我们发现要处理的请求需要很长的处理时间的时候，当我们发现某一类请求读多写少的时候， 我们就可以使用cache来减轻后端处理程序的压力，这有点儿像电路里的短路现象， 当cache中存在被请求的数据的时候，cache直接就会返回，而不用再让后端处理程序把请求的逻辑再跑一遍，这既消耗后端处理程序的计算能力，也消耗带宽，所以，省道就是赚到啊！

cache从大类上来讲可以划分为两类，一类叫local cache，即本地缓存， 每一种计算机语言的核心类库中提供的Dictionary或者Map，都是最常见的local cache； 另一类叫distributed cache，即分布式缓存，在互联网从小型机向消费型计算机集群转变的过程中，自然也就少不了分布式缓存的身影。 

业界最常用的cache方案叫redis， Java生态里则有Google的guava cache以及基于off-heap的hazelcast或者商业产品Gemfire（多提一句，Gemfire是从10多年前的Coherence产品演化而来的，早年Coherence在银行系统中多有采用）

cache产品或者工程实践当然重要，但在架构的世界里，cache的理念或者哲学则更为重要，今天的电子支付已经相当普及，但在支付宝刚起步的年代，银行与支付宝之间的支付效率有很大的断层，早年的双十一为了保障支付的成功率， 一般会鼓励用户先在支付宝充值，以此来减少客户支付与银行打交道的次数， 因为支付宝的支付处理效率要远高于银行系统的处理效率，所以，支付宝相当于成了挡在各家支付银行前面的一个cache。

所以，cache的概念很简单，但怎么用，就看你如何理解并灵活应用它咯~

