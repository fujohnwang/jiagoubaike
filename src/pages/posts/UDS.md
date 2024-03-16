---
layout: '../../layouts/MarkdownLayout.astro'
title: 'UDS'
author: 王福强
pubDate: 2023-09-09
keywords: UDS,王福强,Fuqiang Wang,fujohnwang
description: UDS - 架构百科
---

# UDS

今天聊天，有兄弟提到UDS，扶墙老师愣是没反应过来这个缩写啥意思，一问才知道，原来是UNIX domain socket， 哦，这个扶墙老师就知道了，早说嘛~

遥记得当年写中间件的日子，曾经想要通过localhost和actor model一统天下， 把本地通信和分布式通信统一成一套，但理想是丰满的， 现实是骨感的，引入了网络这一层不稳定因素之后，一切都变了，所以，最后只能“凯撒的归凯撒、基督的归基督”。

既然本地系统与分布式系统注定不一样，那么，我们就应该针对不同场景选择不同技术和架构，比如数据库层面，分布式场景下我们会选择Oracle啦， MySQL啦， Postgres这些传统节目，但本地场景，Sqlite却是绝对的王者。

同样道理，TCP和UDP占据了网络通信的绝大多数江山，但本地通信，如果也走TCP或者UDP，显然得不偿失， UDS反而在本地通信场景下拥有更高的效率， 就好像Sqlite之于数据库在本地场景那样。

unix domain socket又名IPC socket，即进程间通信socket，它允许同一节点上的进程相互通信，不需要走网络协议栈那堆琐碎的链路，所以，通信更有效率，因为它通过使用文件系统作为通信地址，所以，最典型的特征就是.sock后缀的文件。

另外，Java在16版本之后正式提供了对unix domain socket的支持。

