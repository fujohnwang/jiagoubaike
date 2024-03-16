---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Islands'
author: 王福强
pubDate: 2023-09-09
keywords: Islands,王福强,Fuqiang Wang,fujohnwang
description: Islands - 架构百科
---

# Islands

Islands架构是一种前端架构。

要讲明白Islands架构，我们得先从SSG说起，也就是Static Site Generators。 现在很多网站都是使用SSG生成的， 比如扶墙老师的个人博客以及福强科技的官网。 但静态站有一个缺点，那就是它们更适合信息展示，缺乏动态性以及交互体验。

Islands架构就是为了解决静态站缺乏动态与交互的问题。

Islands架构可以在每一个静态页面中留下多个空位，这些空位可以通过一种叫Partial Hydration的技术并行加载和运行，而且相互隔离，一个出错了也不会影响另一个，如果把整张静态页面看成是海洋，那这些布下的空位就像是星星点点的海岛， 或许，这就是为啥叫它Islands架构的原因吧！

Islands架构可以允许静态页面中指定的区域或者组件拥有交互性，从而弥补了静态站缺乏交互性的弱点。

大家如果对islands架构和Partial Hydration感兴趣，可以进一步去了解下astro.build这个框架。




