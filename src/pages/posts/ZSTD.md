---
layout: '../../layouts/MarkdownLayout.astro'
title: 'ZSTD'
author: 王福强
pubDate: 2023-09-09
keywords: ZSTD,王福强,Fuqiang Wang,fujohnwang
description: ZSTD - 架构百科
---

# ZSTD

zstd全称Zstandard，它是由 Facebook 公司的Yann Collet开发的一种无损数据压缩算法，在多种数据集上提供了很高的压缩比和非常好的性能。

zstd可以通过参数调整, 在压缩率与压缩速度之间进行微调和选择，除此之外， 针对小数据量的场景，zstd还提供了一种训练模式（training mode），可以根据样本数据预选训练之后再压缩的方式，在小数据的情况下也能收获很好的压缩效果。

今天，已经有越来越多的公司开始在生产环境使用zstd，比如，亚马逊从 gzip 切换到 zstd之后，S3 存储量因此压缩减少了大约 30%， 而Honeycomb在生产环境中将Kafka的传输压缩算法从 snappy 切换到 zstd 后，节省了 25%的带宽。

很多列存储数据库对数据压缩有天然的诉求，自然也内置了ZSTD的支持，比如Clickhouse。

主要是，如果消耗CPU资源不多，还能收获不错的压缩比率，干嘛不用呢？ ；）