---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Turbopack'
author: 王福强
pubDate: 2023-09-09
keywords: Turbopack,王福强,Fuqiang Wang,fujohnwang
description: Turbopack - 架构百科
---

# Turbopack

前端又又又更新了，这次是打包编译工具， 原Webpack的作者到了新公司Vercel之后，用Rust新写了一个打包编译工具叫Turbopack，速度上据说是Webpack的700倍，比现在当红炸子鸡Vite也要快10倍，当真是炸裂了。

前端研发最早期是不需要打包和编译工具的，但随着nodejs生态的崛起，依赖管理、程序兼容性与复杂度要求的提升，应用输出格式的多样，甚至于tree shaking以及HMR等功能需求越来越普遍，前端研发对打包编译工具的诉求自然水到渠成，从最早的Webpack，到Vite以及Rollup，再到今天的Turbopack，对极致性能的追求，可谓是水涨船高。

扶墙老师之前开玩笑说，前端工具是不是最终都要用Rust重新写一遍呀？ 看来要一语成谶了；）

更有意思的是， Vercel这家公司除了网罗了Webpack的作者， 还把Svelte框架的作者也拉上了船，真是人才济济啊，只可惜，找这么些牛人打造这么好的服务，某个地方享受不到，sign…