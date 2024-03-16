---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Project Panama'
author: 王福强
pubDate: 2023-09-09
keywords: Panama,王福强,Fuqiang Wang,fujohnwang
description: Panama - 架构百科
---

# Project Panama

Project Panama是Java19之后引入的项目，旨在建好Java与非Java程序之间的桥梁。

没有Project Panama之前，我们通常会借助于JNI，也就是Java Native Interface，来调用非Java语言写的程序或者系统类库，当然，这里是指进程内调用，走网络或者进程间通信自然不需要这么麻烦。  但要把不同世界的内存管理等细节抹平，又谈何容易？ 即使后期用JNA(Java Native Access) 对JNI做了简化和封装，从Java程序中调用本地类库依然不是啥干净的活儿。

在这个背景下，Project Panama跃出水面。

Project Panama包含三个主要部分： 

1- JEP-424，也就是Foreign Function & Memory API， 它负责生成Java这一端的调用代码和API；
2- JEP-426，也就是Vector API， 这个看情况用；
3- jextract工具，这个东西的到来，极大简化了从C语言header文件自动生成Java调用API的工作；

当然，现阶段Project Panama还是Early Access阶段，但在高内聚的场景里，对它的到来还是很期待的。

