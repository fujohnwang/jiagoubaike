---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Actor Model'
author: 王福强
pubDate: 2023-09-09
keywords: Actor Model,王福强,Fuqiang Wang,fujohnwang
description: Actor Model - 架构百科
---

# Actor Model

Actor是演员， Model是模特儿， 那Actor Model不就是演员与模特的组合啦？

NO, NO, NO,  我们要谈的Actor Model其实是一种并发编程模型。

传统的并发编程都是针对状态变更进行防控，说白了就是多个Writer同时写一个状态，为了避免状态被破坏，我们就需要通过某种并发控制机制来协调多个Writer的同时写。悲观锁或者乐观锁都属于常用的并发控制的机制。

Actor Model走了另一条路，它把状态封装在每一个Actor内部，外部对Actor状态的变更只能通过发送消息的方式进行， 发送给Actor的消息，Actor会保存在只有自己可以内部访问的mailbox之中，之后，Actor再“不急不慢”地处理发送给自己的消息。因为每个Actor只处理自己mailbox里的消息或者说状态， 所以，也就不存在传统的并发控制了。 （当然，这是简化的说法，其实底层实现在写入的时候还是会有并发控制）

Actor Model关键特点就是Stateful，也就是有状态，并且集状态和计算于一体。

实现Actor Model有多种机制，有基于线程的，有基于虚拟线程的，有基于Continuation的，总之，越轻量的机制，Actor Model的性能也就越强悍。

Erlang的Actor， 微软的Orlean和Scala社区的Akka，都是Actor Model的经典之作。

