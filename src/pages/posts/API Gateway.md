---
layout: '../../layouts/MarkdownLayout.astro'
title: 'API Gateway'
author: 王福强
pubDate: 2023-09-09
keywords: API Gateway,王福强,Fuqiang Wang,fujohnwang
description: API Gateway - 架构百科
---

# API Gateway

大家好，今天跟大家聊聊API Gateway。

API Gateway是微服务技术体系里关键的一环，俗称“把门儿”的， 它把鉴权、授权、审计、限流等通用功能收归一体，所有要访问后端服务的请求都必须经过API Gateway检查之后才会予以放行。

那么， API Gateway是如何演化的今天这个样子的呢？这要从AOP说起。

AOP是Aspect Oriented Programming的缩写，它的核心理念就是cross-cutting concerns， 翻译过来一般称之为“横切关注点”，但实际上就是”非业务需求”，之前为了处理这些非业务需求，程序里都是靠“拦截器”模式来做的，比如J2EE年代的ServletFilter， 随着技术的发展以及组织复杂度的增长，我们逐渐把这些通用的非业务需求也剥离出来了，这就是API Gateway。

API Gateway与传统做法的关键区别其实就是“是否独立”，像ServletFilter这种方式是无法独立存在和运行的，它必须部署到web container才行， 而API Gateway则是可以独立部署、独立运行的，扶墙老师经常说的“拓扑结构不一样”，其实说的就是这种关键区别。


