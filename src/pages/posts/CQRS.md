---
layout: '../../layouts/MarkdownLayout.astro'
title: 'CQRS'
author: 王福强
pubDate: 2023-09-09
keywords: CQRS,王福强,Fuqiang Wang,fujohnwang
description: CQRS - 架构百科
---

# CQRS

大家好，今天聊CQRS

CQRS是Command and Query Responsibility Segregation的缩写，它是一种常见的架构设计模式，抛开学究型的介绍， 简单来讲其实就是“读写分离”。

我们在设计软件系统的时候，对于写操作，一般会遵循一个叫Single Writer Principle的原则， 对于读操作，则是能上缓存上缓存，所以，对于读和写操作的优化通常是不一样的。

CQRS模式的架构设计就是接受这种差异， 把写和读分开处理，但又通过单一“动线”把他们串联在一起，最终形成一个完整的软件系统设计。（请允许扶墙老师在这里用了一个空间设计里比较隐晦的术语）

对于CQRS， 扶墙老师有一句总结送给大家： 
If you find your design violates “Single-Writer Principle”, then split the write to multiple reads upfront. 

另外，CQRS跟CORS很容易混淆，后者是前端开发领域的术语，感兴趣的话，可以自己去做做功课哟~

