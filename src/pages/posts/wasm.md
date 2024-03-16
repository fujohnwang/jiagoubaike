---
layout: '../../layouts/MarkdownLayout.astro'
title: 'wasm - Web Assembly'
author: 王福强
pubDate: 2023-09-09
keywords: wasm - Web Assembly,王福强,Fuqiang Wang,fujohnwang
description: wasm - Web Assembly - 架构百科
---

# wasm - Web Assembly

大家好，今天聊Web Assembly

Web Assembly简写为wasm， 它是一个虚拟机规范，最早的设计初衷是提高web浏览器中程序的执行性能，当然，主要是跟Javascript相比。 

但随着技术和场景的演化，Web Assembly的应用范围越来越广，从原来的浏览器一直扩展到后台服务等各个场景，可以说，只要有Web Assembly运行时的地方，都可以执行wasm程序。 现在，Web Assembly已经越来越多的被用于插件或者扩展程序的设计与实现、物联网边缘计算场景、Serverless场景甚至容器与资源调度场景。

Web Assembly最大的优势其实就是通用性或者说共通性，只要为各大计算机语言实现相应的转换器（专业术语叫Transpiler），那Web Assembly就可以利用各大计算机语言生态里的现有种种资源。

当然， 在Web Assembly规范和生态还没有完全成熟的时候， runtimes以及transpilers的设计与实现与否，反过来也会成为Web Assembly扩张的障碍。

至于Web Assembly最终会如何发展，就让我们拭目以待吧！