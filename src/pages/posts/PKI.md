---
layout: '../../layouts/MarkdownLayout.astro'
title: 'PKI'
author: 王福强
pubDate: 2023-09-09
keywords: PKI,王福强,Fuqiang Wang,fujohnwang
description: PKI - 架构百科
---

# PKI

大家好，今天我们讲KPI，哦，不对，又走错片场了…

今天讲PKI，即Public Key Infrastructure，也就是基于公钥的加密体系与基础设施。

相对于基于密码的对称加密体系，基于公钥（PublicKey）和私钥（Private Key）的非对称加解密体系应用范围更广。

在PKI体系中，公钥和私钥的角色与职能是不对等的，也就是“不一样”。 公钥只用来解密数据或者验证数据签名，私钥只用来加密数据或者给数据加签名。 

公钥和私钥的生成一般遵循业界的公开加解密算法，比如RSA或者较新的ED25519，从最传统的服务器安全登录shell，到今天的区块链生态，无一不依赖PKI基础安全体系。

随着Google Chrome浏览器对传输安全的重视与推广， 基于HTTPS的网站也越来越多， 而保证HTTPS数据传输安全的，底层也同样是构建在PKI体系之上。

所以，说PKI是今天的互联网与数据安全的最底层的基石，一点儿也不为过。

