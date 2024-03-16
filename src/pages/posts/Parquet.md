---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Parquet'
author: 王福强
pubDate: 2023-09-09
keywords: Parquet,王福强,Fuqiang Wang,fujohnwang
description: Parquet - 架构百科
---

# Parquet

大家好，欢迎来到架构百科，今天跟大家介绍Parquet

Parquet是一种面向列存储的数据格式，既然是面向列存储，那么自然也就天然带有列数据压缩等必备技能， 一个80M的CSV文件，如果转换为使用Parquet格式进行存储，最终只需要5M的存储空间，惊不惊喜？ 意不意外？

Parquet格式源于HDFS生态，使用了一种称之为record  shredding and assembly的算法来表示嵌套的数据结构，结合数据编码与每列都可以定制的压缩算法，最终才有了这么高效的数据存储格式。

在OLAP（也就是在线分析处理）场景中，我们会经常用parquet格式做数据的导入、导出以及存储备份等常规操作，一个是它历史悠久，另外就是它的存储格式设计的很高效，非常适合这些场景。

如果你经常做大数据相关的日常工作，相信你不缺跟parquet打交道的机会。