---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Pingora'
author: 王福强
pubDate: 2023-09-09
keywords: Pingora,王福强,Fuqiang Wang,fujohnwang
description: Pingora - 架构百科
---

# Pingora

Pingora是Cloudflare的新一代HTTP Proxy， 它只要以原来三分之一的CPU和内存资源，就能支撑原来的工作负载，迄今为止， Pingora已经在Cloudflare服务着每天一万亿次的web请求。

在Pingora之前， Cloudflare使用了业界常用的Nginx作为web请求接入代理，但Nginx的设计在Cloudflare这样的体量下逐渐暴露出一些劣势，比如连接池不可复用，比如基于Lua的扩展性能不高，比如C的天然缺陷等等。

鉴于Cloudflare的现状以及Nginx或者说OpenResty的限制，Cloudflare使用Rust语言开发了新一代的HTTP Proxy，即Pingora。

Pingora的设计从原来多进程模式转变成了多线程模式，不但提高了连接池的效率，而且提高了硬件资源的利用率。除了支持原来的特性， Pingora还增加了对gRPC、非标准HTTP规范特性的支持。而且，据说上了Rust之后，C语言固有的内存安全等问题也基本不再有了。

总的来说，Cloudflare自制Pingora作为HTTP Proxy，应该算是一个相当合理的决策。