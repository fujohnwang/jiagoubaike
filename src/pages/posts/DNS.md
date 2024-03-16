---
layout: '../../layouts/MarkdownLayout.astro'
title: 'DNS'
author: 王福强
pubDate: 2023-09-09
keywords: DNS,王福强,Fuqiang Wang,fujohnwang
description: DNS - 架构百科
---

# DNS

DNS是Domain Name System的缩写， 也就是“域名查找服务”，它是为了解决web访问的便利性问题。

传统的web采用B/S架构， 服务器端需要有一个IP地址，这样，用户才能访问到它们。

但是IP地址作为一串数字，对于人来说很难记忆，也很难输入，尤其是IPv6，更是Mission Impossible，DNS就是为了解决这个问题而生的。
DNS简单来说就是提供一种从名称到IP地址的映射关系查找服务，DNS会负责根据名字查找对应的IP地址然后返回，客户端再根据返回的IP地址去访问web服务就可以了。有了DNS，我们只要记住名称（也就是域名）就可以访问到想要访问的某个web服务， 相对于数字和十六进制，那明显简单多了。

当然，DNS需要客户端和DNS服务器多方协同才能工作， 至于整个过程是什么样子的， 这是很好的一道技术面试题哟~

ENS（Ethereum Name Service）是区块链行业的类似DNS的服务，不过，它可不是映射IP地址，而是映射区块地址或者内容哈希值等区块链资源，相对于区块地址，名称显然跟容易为人所记住，最终其实都是为了降低使用的认知成本。
