---
layout: '../../layouts/MarkdownLayout.astro'
title: 'DuckDB'
author: 王福强
pubDate: 2023-09-09
keywords: DuckDB,王福强,Fuqiang Wang,fujohnwang
description: DuckDB - 架构百科
---

# DuckDB

DuckDB是一种单节点的分析型数据库， 如果你知道Sqlite，那么，也就很容易理解DuckDB。 Sqlite负责的是OLTP场景，而DuckDB则负责OLAP场景，它们放一起可以说是单节点数据处理的珠联璧合。

与现在大数据的趋势和技术选型不同，DuckDB和Sqlite走的是小数据路线，更轻量，更快。

在OLAP领域，如果说Clickhouse发家的口号“就是快”，那么，DuckDB也可以是同样的口号，只不过是单节点的“就是快”。

DuckDB可以便捷的导入和导出本地的CSV和Parquet格式的数据文件进行分析和处理，对于更加习惯SQL的开发者或者数据分析师来说，DuckDB比Excel更加趁手，配合列压缩算法， DuckDB可以更快、更有效率的处理远比Excel更大的数据集。

怎么样？ 听着是不是很心动啊？ 赶快下载试试吧！