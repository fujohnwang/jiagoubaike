---
layout: '../../layouts/MarkdownLayout.astro'
title: 'cuDNN'
author: 王福强
pubDate: 2023-09-09
keywords: cuDNN,王福强,Fuqiang Wang,fujohnwang
description: cuDNN - 架构百科
---

# cuDNN

大家好，这里是架构百科

今天有同学在运行Stable Diffusion的时候，碰到一个错误，大体意思是加载不到名称为libcudnn_cnn_infer.so.8的共享对象文件，那么，这个cuDNN到底是什么东西呢？

cuDNN全称是CUDA Deep Neural Network， 它是nVidia公司（也就是英伟达）提供的用于深度学习的加速库，它基于CUDA实现，提供了高性能的卷积神经网络（CNN）和循环神经网络（RNN）等常用操作的加速实现。

像PyTorch，tensorflow以及国内的paddlepaddle等深度学习框架，底层都依赖这个GPU加速库，而今天这位同学要运行的Stable Diffusion UI因为底层依赖PyTorch，所以，进而也会依赖到cuDNN，报这个错误，很大程度上应该是运行环境和依赖没有安装好，至于怎么解决，那就要么传统手段找搜索引擎，要么现代手段用ChatGPT试试？！



