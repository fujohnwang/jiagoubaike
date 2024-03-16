---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Immutable'
author: 王福强
pubDate: 2023-09-09
keywords: Immutable,王福强,Fuqiang Wang,fujohnwang
description: Immutable - 架构百科
---

# Immutable

大家好，今天聊Immutable

Immutable或者说Immutability是指，在设计系统的时候，对状态的管理尽量不要更改或者覆盖，而是尽量采用序列追加的方式进行，这种设计方式我们称之为“不变性”，也就是Immutability.

传统的交易与事务性处理场景下，系统的设计大多采用Mutable（也就是可变的方式）对状态进行更改，这样的好处是可以提高性能并获取实时状态，带来的缺陷就是，如果要追溯数据和状态的变更，往往悔之晚矣。

之前遇到一家公司的财务抱怨自己公司的报表系统有问题，在沟通之前，扶墙老师准备了三种预案，但具体沟通后发现具体情况没有落在任何一个预案中，原因简单到只是因为开发人员把所有数据变更都覆盖掉了，根本没有考虑数据统计场景的需求，实际上，稍微有点儿Immutable系统设计的意识，也不至于出现这种情况。

今天，磁盘越来越便宜，大数据基础设施也越来越成熟和完善，很多系统的设计完全可以从一开始就考虑Immutable的设计。


