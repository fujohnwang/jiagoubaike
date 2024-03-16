---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Isolation'
author: 王福强
pubDate: 2023-09-09
keywords: Isolation,王福强,Fuqiang Wang,fujohnwang
description: Isolation - 架构百科
---

# Isolation

Isolation翻译过来可以简单理解成“隔离”， 它与confinement相似，但Isolation是外部视角、治理的视角， 目的是隔离灾难并减少因灾难或者故障而造成的影响。

过去我们经常用坦克弹药舱的设计，或者巨轮水密舱的设计来向大家展示Isolation在架构设计中的效用与好处，今天（也就是2022年），我们可以用更贴近当下的案例来进一步说明isolation的效用延伸，实际上，2019年的武汉封城， 2022年的上海半封城，都是某种形式的isolation。（当然，医学上一般会用quarantine这个专业术语）

架构上有句老话叫Threads Don’t Scale, Processes Do， 背后的意思就是在说线程之间其实是有共享状态的，一个线程崩了有可能导致其它线程都受影响，而进程则不会，进程之间相互隔离的比较好，一个崩了，对另一个的影响极其有限，而docker则把进程的隔离性进一步提升，所以，今天docker与kubernetes的成功，isolation的哲学在其中发挥的作用不可谓不大。



