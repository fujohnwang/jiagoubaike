---
layout: '../../layouts/MarkdownLayout.astro'
title: 'KUZU'
author: 王福强
pubDate: 2023-09-09
keywords: KUZU,图数据库,王福强,Fuqiang Wang,fujohnwang
description: KUZU - 架构百科
---

# KUZU

大家好，欢迎来到架构百科，今天跟大家介绍一个新的图数据库KUZU。

KUZU名称来自老的苏美尔语，意思是“智慧”。 KUZU的定位是图数据库领域的Sqlite，也就是主攻单机版的图数据库，相当于跟Neo4j单机版算是竞争对手或者说友商？！；）

KUZU的客户端访问API有三种支持，即基于命令行的客户端，python客户端以及C++客户端API，就是没有Java客户端，不过既然新版本Java已经推出了Panama项目，那么，基于C++的客户端API包一下，应该也是可以玩的。

在数据操作上，KUZU提供了基于openCypher稍加改造的声明式查询语言，所以，如果有其他图数据库的使用经验，应该很容易上手。

虽然KUZU还处在研发初期，不过，感觉可以关注下哟。