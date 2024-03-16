---
layout: '../../layouts/MarkdownLayout.astro'
title: 'HTTP'
author: 王福强
pubDate: 2023-09-09
keywords: HTTP,王福强,Fuqiang Wang,fujohnwang
description: HTTP - 架构百科
---

# HTTP

大家好，今天跟大家讲讲互联网的基础，HTTP协议。

HTTP协议的全称是Hypertext Transfer Protocol, 一共分三个版本，即HTTP 1，HTTP 2以及HTTP 3。其中， HTTP 1是应用范围最广的，更确切地说，是HTTP 1.1版本，因为最早的HTTP是1.0版本。

HTTP 1.1版本相较于HTTP 1.0版本增加了很多特性，其中persistent connections是这条街最靓的仔。

HTTP 2相较于HTTP 1.1最大的变化就是强制TLS，即在传输层上必须使用加密信道，同时支持实时双向通信，过去只能通过long poll 或者Server send events等特性才能实现的服务器端到客户端的推送，HTTP 2天然支持。

HTTP 3应该说跟HTTP 1.1和HTTP 2走了不一样的路， HTTP 1.1和HTTP 2底层是基于TCP的，而HTTP 3是基于Google的QUIC协议演化而来，QUIC本身则是基于UDP的。

当然，不管HTTP协议如何演化，只有做到平滑升级，才能被现有生态所接受，毕竟，现在很多网站依然还是基于HTTP 1.1提供服务。 好在，协议设计者也确实考虑了协议升级的问题，所以，或许不久的将来，服务器端和浏览器端默默升级之后，用户不需要做什么就可以享受到HTTP3的好处了呢~


