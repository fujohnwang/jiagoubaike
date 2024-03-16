---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Observer Pattern'
author: 王福强
pubDate: 2023-09-09
keywords: Observer Pattern,王福强,Fuqiang Wang,fujohnwang
description: Observer Pattern - 架构百科
---

# Observer Pattern

大家好，今天聊聊Observer Pattern，即观察者模式。

观察者模式本质上是一种集中式状态管理模式，任何对某个集中式状态感兴趣的程序，都可以注册为Observer来感知和获取状态的变化。

观察者模式在整个软件架构和软件产业中有着广泛的应用，从程序代码级别的Listener，到消息中间件级别的Pub/Sub模式，再到各个系统之间的消息通知，都是观察者模式大展拳脚的地方。

这些年新兴起的反应式框架（Reactive frameworks）以及单页面web应用（即SPA，Single Page Applications）, 表面上看是UI，实际上都是在管理状态， 也就是state-driven，基于观察者模式的state-driven。

既然观察者模式是一种集中式的状态管理模式，那么，我们在工程实践上往往就要考虑并发控制，所以，最后留一个小问题给大家，如果要在代码层面实现观察者模式，我们用什么数据结构比较合适呢？

