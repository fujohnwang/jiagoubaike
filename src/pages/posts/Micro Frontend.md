---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Micro Frontend'
author: 王福强
pubDate: 2023-09-09
keywords: Micro Frontend,王福强,Fuqiang Wang,fujohnwang
description: Micro Frontend - 架构百科
---

# Micro Frontend

大家好，今天跟大家聊聊Micro Frontend，也就是“微前端”。

微前端一般与后端的微服务概念相对应，底层逻辑还是模块化，目的是为了应对前端应用开发的复杂度，通过将不同的职能和模块拆分为不同的微前端应用，既可以降低整体应用的复杂度，也可以加快并行交付效率。

要实现微前端，从技术上一般有几种方式：

第一种方式就是用最原始的iframe来拼接，有20年以上经验的老司机应该对企业门户还印象颇深吧？

第二种方式可以采用编译期拼接，比如astro；

第三种方式可以采用配置拼接和运行期挂载，比如single-spa和qiankun；

当然，还有其它方式，比如module federation，这里就不做更多赘述了。

总之，微前端可以降低整体前端应用的复杂度，同时又提高并行交付效率，对于有实力的团队来说，是个不错的前端架构选择。




