---
layout: '../../layouts/MarkdownLayout.astro'
title: 'TUS'
author: 王福强
pubDate: 2023-09-09
keywords: TUS,王福强,Fuqiang Wang,fujohnwang
description: TUS - 架构百科
---

# TUS

大家好，欢迎来到架构百科，今天跟大家介绍TUS

tus协议是一种支持可恢复的文件上传协议，即open protocol for resumable file uploads，它基于HTTP协议之上构建。至于tus到底什么意思，其实已经不重要了，虽然它原来叫Transloadit Upload Server或者The Upload Server。

tus主要用于以下场景：

1. 网络不稳定的场景；
2. 上传大文件的场景；
3. 想要给用户主动权，上传文件的过程中可以暂停或者恢复的场景；

总之，就是文件上传过程即使中断，下回重连的时候也不用从头再来，而是可以从原来已经上传过的部分之后开始上传，尤其今天视频时代，使用tus上传大视频文件那是相当合适。

tus的交互过程大体是这样的， 先是发起一个POST请求创建初始上传，这个时候，服务器会回传给客户端一个URL地址，客户端再向这个地址发起PATCH请求上传剩下的部分。 当然， 如果中途失败，也可以通过发起HEAD请求让服务器返回上次已经上传的位置，然后再发起PATCH请求发送剩余部分。

除非你想写一个自己的tus客户端，否则，协议的交互细节简单了解下就可以了，毕竟，今天已经有很多支持各种计算机语言的tus客户端可供选用了。

