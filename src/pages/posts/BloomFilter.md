---
layout: '../../layouts/MarkdownLayout.astro'
title: 'BloomFilter'
author: 王福强
pubDate: 2023-09-09
keywords: BloomFilter,王福强,Fuqiang Wang,fujohnwang
description: BloomFilter - 架构百科
---

# BloomFilter

大家好，欢迎来到架构百科，今天跟大家介绍BloomFilter。

BloomFilter是一种数据结构，它用来解决什么问题呢？

假设我们有一个海量的数据集合，却想要快速判断某个数据是否存在于这个海量的数据集合中，这个时候就可以考虑使用BloomFilter。 假如BloomFilter告诉你，这个数据不存在于现有的海量数据集合中，那么，你可以肯定，它一定不存在， 但假如BloomFilter告诉你说，某个数据存在于现有的海量数据集合中，那么，你可能还需要再进一步去确认，因为BloomFilter的返回结果不会出现false negative的情况， 但有可能出现false positive的情况，也就是，它告诉你数据不在，那就一定不在，告诉你数据在，但数据不一定在，哈哈，是不是很绕？

BloomFilter采用空间换时间的做法来加快数据存在性的检查，在HBase以及BigTable等分布式数据库设计中，为了减少非必要的磁盘访问， 一般会通过BloomFilter先在内存中做初步判定，只有在必要的时候才会去访问磁盘，从而提高了数据的访问效率。

你get到了吗？