---
layout: '../../layouts/MarkdownLayout.astro'
title: 'OSS'
author: 王福强
pubDate: 2023-09-09
keywords: OSS,王福强,Fuqiang Wang,fujohnwang
description: OSS - 架构百科
---

# OSS

OSS在技术和架构领域有两个意思，一个意思是Open Source Softwares，即开源软件， 另一个意思就是今天我们打算重点说的一类云产品，Object Storage Service，对象存储服务。

OSS产品最早是AWS推出的一项公有云服务S3（Simple Storage Service）， 之后，各大云厂商也就陆续推出了类似的服务，只不过名字可能换了，比如腾讯云的对象存储叫COS(Cloud Object Storage)，但本质没换。

虽然OSS的主要使用场景也是面向文件存储，但区别于基于文件系统的层级结构，面向对象存储是无层级的平面存储结构，所以存储对象都基于Key-Value的模式进行存储，再加上横向扩展能力， OSS可以说是现在云服务里需求最旺盛的服务之一。

原则上OSS是面向程序或者API使用的，但现在的云厂商也会预制场景的支持，比如在OSS前面构建静态文件代理服务，这样，只要配置路径与域名，存储在OSS中的文件就可以直接作为静态网站来使用，在SPA（Single Page Applications）流行的当下， 这种方式也极大简化并加快了前端应用的部署。


