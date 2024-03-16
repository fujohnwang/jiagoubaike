---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Chaos'
author: 王福强
pubDate: 2023-09-09
keywords: Chaos,王福强,Fuqiang Wang,fujohnwang
description: Chaos - 架构百科
---

# Chaos

今天介绍的Chaos可不是Chaos Engineering的Chaos，这个Chaos是一个恶意软件，现在正肆虐扩散。

Chaos的一个特点是，它是用Go语言开发的，嗯，这些年很多恶意软件（Malware）都是用Go开发的，原因就在于，一个是可以交叉编译到很多平台，很方便多平台分发， 另一个就是Go语言的执行文件是无依赖自包含的，所以，更加容易分发。

Chaos的“作恶”过程可以简单划分为几个阶段：

第一个阶段是利用已有的系统漏洞渗透到目标操作系统；

第二阶段就是扫描感染的计算机，并形成一个资源画像，便于后期调度；

第三个阶段就是部署Command and Control，也就是我们常说的CC攻击程序；

最后，就可以通过CC接口发起DDoS攻击等恶意行为啦～

Chaos可以感染用户计算机以及企业服务器，所以，一旦中招，有可能你的计算机或者服务器就成了别人的矿机咯～

什么？ 怎么防范？ 先把现有公开的漏洞都打好补丁咯～