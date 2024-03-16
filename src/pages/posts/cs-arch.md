---
layout: '../../layouts/MarkdownLayout.astro'
title: 'C/S架构'
author: 王福强
pubDate: 2023-09-09
keywords: C/S架构,王福强,Fuqiang Wang,fujohnwang
description: C/S架构 - 架构百科
---

# C/S架构

大家好，今天跟大家聊聊C/S架构。

C/S架构是指Client/Server架构，这里的Client一般是指特定于操作系统的客户端应用，这些客户端应用一般会充分利用所在操作系统的UI编程框架，比如Windows下的MFC和.NET，比如MacOS下的SwiftUI, 又或者Linux下的QT以及GTK等，当然，更不能拉下移动时代Android和iOS各自特定的UI框架。

C/S架构下， Client因为更加贴近操作系统，更加贴近用户，所以，性能更好，用户体验也会更好，但它也存在一些不方便的地方，比如用户使用需要下载和部署，这会提高使用门槛； 比如Client和Server之间通信，通常没有业界标准，大多自己在TCP层面做通信，这些年才慢慢根据场景使用HTTP，所以Client端要处理的关注点会比较多。鉴于C/S架构里Client端的这些特点，我们一般也会称这个架构下的Client是“重客户端”以及富客户端(Rich Client)。

从商业上来说，传统的C/S架构产品也会饱受盗版之苦，尤其是较少依赖Server端的工具类产品。 所以，这些年很多基于C/S架构的产品也在逐渐迁移到线上，比如，采取订阅制之后，Adobe的应收又迎来了一个高峰。

现在，除了有较强交互与高频交互需求的金融、游戏等行业依然会侧重C/S架构，大部分应用早就已经迁移到了B/S架构，关于B/S架构，我们改天接着聊…
