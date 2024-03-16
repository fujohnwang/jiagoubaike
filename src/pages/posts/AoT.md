---
layout: '../../layouts/MarkdownLayout.astro'
title: 'AoT'
author: 王福强
pubDate: 2023-09-09
keywords: AoT,王福强,Fuqiang Wang,fujohnwang
description: AoT - 架构百科
---

# AoT

AoT是Ahead of Time compilation的缩写，要讲明白AoT，我们需要先从计算机语言说起。

计算机语言从大类上来说可以分为两类，一类是解释型语言，一类是编译型语言，前者如Javascript，后者如Java。 这两类计算机语言编写的程序要交给计算机运行，前者不需要编译直接交给计算机执行，后者则需要先编译再交给计算机执行。

但抛弃分类的限制，其实所有计算机语言都可以进行“预处理”，然后再交给计算机去执行，这其实就是AoT的由来。

比如，最早的web应用是不需要编译的，但现在所有web框架几乎都会有预先编译，带来的是性能提升与去除冗余等好处。 甚至于，像Svelte这样的框架，进一步在编译期把很多前端框架运行期做的事情提前做掉了，通过AoT，换来了web框架的一股新风。

再比如，GraalVM是这些年Oracle公司新开发的JVM发行版，它的一个亮点就是提供了基于AoT的Native-Image功能，可以将原本编译为Java字节码的程序, 进一步编译成可以直接在计算机上运行的程序，既提高了性能，也减小了程序的体积和启动时延。 新一代的Java框架，比如Quarkus以及Micronaut，甚至SpringNative，都是通过AoT换发的新机。

当然，提到AoT就得提到JIT， JIT是Just-in Time compilation的缩写，它是在程序运行期间根据运行状态进行程序性能优化，作为成年人，AoT和JIT也可以都要 ^_-
