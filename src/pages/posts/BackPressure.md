---
layout: '../../layouts/MarkdownLayout.astro'
title: 'BackPressure'
author: 王福强
pubDate: 2023-09-09
keywords: BackPressure,王福强,Fuqiang Wang,fujohnwang
description: BackPressure - 架构百科
---

# BackPressure

大家好，今天跟大家聊聊Back Pressure。

你当然可以把BackPressure翻译成“背压”，但我觉得了解它实质上指代什么或许更有意义。

BackPressure属于一个经典场景的架构设计，即生产者-消费者场景。

生产者生产的数据或者处理请求，如果不管不顾地一股脑扔给消费者去处理，而消费者又处理不过来的时候，那消费者基本就会崩掉，换成技术术语就会Overflow 或者 Out Of Memory。

扶墙老师记得，很多年前有位同事在处理行情数据的时候，就因为使用Actor模型写处理程序，而没有处理这种情况，从而导致程序Out Of Memory崩掉。

为了避免上游的数据洪峰无节制地下泄，从而冲垮下游的消费者程序，我们这时候就会使用BackPressure的架构设计。

BackPressure设计的关键就是，由消费者来决定发送的速率。 

消费者跟生产者说，“先发送n条数据给我”，等消费者消费的差不多了， 消费者再跟生产者说，“我消费的差不多了，再发送n条数据给我”， 也就是有一个确认和通知的过程。

上海这阵子经常要求居民下楼做核酸，但很多小区都是一股脑下去排队，既不安全，也没效率，这时候就可以借鉴BackPressure的设计， 比如， 预先通知三层楼的居民下楼，等做完一组或者两组之后，再通知一层或者两层楼的居民下楼，总之，使用BackPressure类似的思路，可以根据现场情况始终维持适量的人和间距。

另外，多说一句， TCP协议天然集成了BackPressure的设计。

