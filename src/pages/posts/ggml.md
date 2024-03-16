---
layout: '../../layouts/MarkdownLayout.astro'
title: 'ggml'
author: 王福强
pubDate: 2023-09-09
keywords: ggml,王福强,Fuqiang Wang,fujohnwang
description: ggml - 架构百科
---

# ggml

ggml是一种人工智能模型格式，你可以类比视频文件的mp4或者mov等，只不过ggml是面向的模型文件格式，也就是说，它是一种model format。

ggml的特点是使用量子化的表现形式（quantized representation）来存储模型权重， 不好的点在于，这会降低质量和精度，但同时带来的好处在于，可以使用更少的内存和内存带宽，最重要的是，可以在CPU进行更快的模型计算和推导（inference）， 这就为单机用户或者没有GPU的用户带来了福音，毕竟，大部分用户只需要使用模型，而不是自己去训练模型，所以，GPU对于大多数用户来说 不是必备的，尤其是老macos用户，甚至10年前的老电脑。

ggml模型最典型的应用就是llama.cpp，这是一个可以本地部署运行的大语言模型，还有就是whisper.cpp，让我们可以本地跑OpenAI的Whisper语音转文字模型，这些应用背后的英雄就是ggml。