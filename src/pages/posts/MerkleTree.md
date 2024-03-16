---
layout: '../../layouts/MarkdownLayout.astro'
title: 'MerkleTree'
author: 王福强
pubDate: 2023-09-09
keywords: MerkleTree,王福强,Fuqiang Wang,fujohnwang
description: MerkleTree - 架构百科
---

# MerkleTree

大家好，欢迎来到架构百科，今天跟大家聊聊Merkle tree。

Merkle tree的中文名多翻译为“默克尔树”，应该是音译，之所以叫Merkle tree，是因为作者Ralph Merkle在1979年还为此提交了专利保护。

Merkle tree是一种hash tree，大多实现使用的是二叉树的形式，但其实也可以有多个分叉子节点。 

merkle tree的工作原理是按照层级聚合计算hash，叶子结点保存的是数据块的哈希值，叶子结点之上的结点计算并保存其下所有树结点的哈希值拼接后的哈希值，以此类推，一直到根结点计算并保存整个树的哈希值。

这种设计的好处就是可以最大限度的保证数据的完整性，而且可以单独计算各个分支的哈希值， 也相对比较高效，这在分布式系统中做数据同步等场景下很有用，即使数据状态不一致，也可以快速识别，然后再同步。

Merkle tree在很多场景和系统设计实现中都有出现，比如IPFS星际文件系统、比如区块链等设计、比如btrfs和zfs等操作系统文件系统设计，以及版本控制系统git与mercurial，当然，Cassandra，Riak等分布式数据库设计与实现中也有Merkle Tree等身影，毕竟，数据同步等需求在分布式系统中是刚性需求，同时自然少不了要保证数据状态的完整性。