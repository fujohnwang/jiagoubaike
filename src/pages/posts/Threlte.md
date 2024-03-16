---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Threlte'
author: 王福强
pubDate: 2023-09-09
keywords: Threlte,王福强,Fuqiang Wang,fujohnwang
description: Threlte - 架构百科
---

# Threlte

OK，今天介绍的技术有点儿小众中的小众了， Threlte是一个使用Svelte集成Three.js的前端框架，它希望通过Svelte的便捷性降低three.js的使用门槛。

扶墙老师之前说过， 有一种web3其实是朝着3D方向发展的web3， three.js其实就是通向这个方向的一条路，但就像three.js简化了WebGL的使用一样，我们也同样需要能够简化three.js的类库或者框架，虽然Svelte的作者Rich Harris之前发布了一个Svelte Cubed，但已经一年多没更新了，threlte相当于接过了cubed的接力棒， 继续走在利用svelte简化three.js使用的道路上。

Threlte组件化了three.js的很多常见功能，比如我们可以通过GLTF组件直接加载已有建模工具已经建好的模型，而不用通过最原始的图形组合去从头开始。

而且，如果需要物理引擎，threlte也提供了针对Rapier的集成，这是一个用Rust编写的物理引擎。

或许，将来会有越来越多优秀的3D网站和应用脱颖而出吧，游戏自然不必说，元宇宙也会有吧！
