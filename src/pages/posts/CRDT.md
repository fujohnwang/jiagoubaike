---
layout: '../../layouts/MarkdownLayout.astro'
title: 'CRDT'
author: 王福强
pubDate: 2023-09-09
keywords: CRDT,王福强,Fuqiang Wang,fujohnwang
description: CRDT - 架构百科
---

# CRDT

CRDT全称Conflict-free Replicated Data Type，通俗来讲就是不会发生冲突的可复制数据类型，是一种可以在网络中的多台计算机之间进行复制的数据结构，副本可以独立和并行地更新，在合适的时间点可以选择合并。

设想，所有用户都在本地同时更新同一个状态，比如某个文档，那么，如何解决内容和状态冲突呢？ CRDT就是答案之一。所以，CRDT 常被用在协作软件上，例如多个用户需要共同编辑/读取共享文档等场景，最典型的就是共享白板或者任务列表。当然，在数据库软件，文本编辑软件，聊天软件等场景也都可以用到。

CRDT原则上属于最终一致性类别的数据同步机制，所以，同步的时延不是它重点关注的，最终一致的状态结果才是。 不同节点之间的数据同步可以基于P2P网络（也就是Peer-to-Peer网络，不是金融的那个P2P啦）， 也可以基于传统的集中式网络拓扑。

如果要使用CRDT开发应用，可以自己根据论文开发自己的CRDT数据结构方案，也可以考虑开源方案，比如automerge。
