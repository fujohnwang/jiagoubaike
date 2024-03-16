---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Structured Concurrency'
author: 王福强
pubDate: 2023-09-09
keywords: StructuredConcurrency,王福强,Fuqiang Wang,fujohnwang
description: Structured Concurrency - 架构百科
---

# Structured Concurrency

Structured Concurrency是Java19里包含的特性之一（规范代码JEP-428），那么，它主要解决什么问题呢？

我们可以把代码的生命周期分成两个阶段，一个是代码编写阶段，也就是俗称的“编程”， 另一个阶段是代码的执行阶段。
好的代码，无论在编写阶段还是执行阶段，对人来说（也就是通常的程序员），都很容易理解。 比如，对于单线程程序来说，编写阶段如何编写，执行阶段基本就怎么执行。 但到了多线程编程里，就没有那么显而易见了。

或许看到代码，我们可以理解它的逻辑和执行期间的语义，但如果没有代码呢？ 你能从日志或者系统运行状态的各项指标了解到多线程程序的正确逻辑吗？答案通常是否定的。

所以，为了让多线程程序可以更好理解、更好监控和排错，Java19引入了Structured Concurrency这个特性， 通过使用Structured Concurrency， 我们既可以很容易的理解代码结构和代码执行逻辑，也可以很容易的根据系统日志和运行状态定位错误和异常。

Structured Concurrency重点就是让多线程并发代码更贴近人、更容易被人理解，同时加入更多结构化的元信息，帮助系统工具更好的组织和协调系统状态的输出，从而为排错和系统监控提供更多便利。

另外， 还记得Project Loom吗？ Structured Concurrency也将会是Project Loom的绝好搭档呢~


