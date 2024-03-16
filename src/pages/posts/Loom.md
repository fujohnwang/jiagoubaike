---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Loom'
author: 王福强
pubDate: 2023-09-09
keywords: Loom,王福强,Fuqiang Wang,fujohnwang
description: Loom - 架构百科
---

# Loom

Project Loom是Java的“虚拟线程”方案，项目全称为Loom - Fibers, Continuations and Tail-Calls for the JVM，规范代号JEP-425。 我们可以简单理解为，Java又为大家提供了更加轻量级的线程方案，或许中文里可以叫“纤程”？ 开玩笑啦，其实， Project Loom力求对现有的Java API保持兼容，一旦发布，不管是老的Java程序还是新的Java程序，都将从中获益。

Loom本质上是在应用层提供了一种更加高效的资源调度方案，Scheduling is the key!

Java程序员都知道，Java的线程本质上是映射到操作系统原生线程的封装，这种映射天然受限于操作系统的线程与资源限制策略，虽然不如进程那么“重”，但也不能随意创建，所以，才会有线程池，目的就是提高线程的重复利用率。

但Loom的到来，打破了这种限制，虽然底层的硬件和线程资源依然有限，但程序员在写Java程序的时候则不再需要“池化”虚拟线程（Don’t Pooling Virtual Threads），而是根据需要创建虚拟线程就可以了。原来的服务器端程序最多只能创建几千个线程，有了Loom，创建几百万个虚拟线程都没问题！可以说，真正做到了“并行式编程，并发式执行”。

有了Loom和虚拟线程，Java程序可以更加高效地利用各种系统资源，比如文件系统，网络等。一旦发布，像Netty等框架，将天然享受虚拟线程带来的便利和效率提升，大家是不是很期待呀？ Java19一发布就可以尝鲜了！

