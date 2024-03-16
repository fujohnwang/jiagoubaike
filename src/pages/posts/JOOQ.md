---
layout: '../../layouts/MarkdownLayout.astro'
title: 'JOOQ'
author: 王福强
pubDate: 2023-09-09
keywords: JOOQ,王福强,Fuqiang Wang,fujohnwang
description: JOOQ - 架构百科
---

# JOOQ

大家好，欢迎来到架构百科。 今天是10月24日，先祝广大程序员朋友们节日快乐。

大家平常都使用什么数据访问框架访问数据库呀？ JPA？ MyBatis？ 还是直接Jdbc？

那天跟阿久聊天，他极力在团队里推行JOOQ， 原因是通过强类型约束尽量减少程序员犯错的几率。

JOOQ直接建立在Jdbc之上，通过数据库的Metadata（也就是元数据）生成强类型的Java对象与数据访问逻辑，之后，程序员可以通过强类型的DSL来访问数据库，而不用直接手写SQL。 DSL的语法与SQL很相近，所以，只要了解基本的SQL，上手JOOQ的DSL也会很快。

扶墙老师觉得，在国内这种研发环境里，MyBatis流行不是没有原因的，因为团队职能分工明确，所以，对于大规模研发管理来说更加适合。 但对于小团队来说，JOOQ或许也是一个不错的选择，要得就是安全快捷不是吗？

不过说实话， 扶墙老师喜欢的数据访问方案应该是这样的，即基础的数据访问操作走面向对象的强类型操作 + 非基础查询操作走SQL，大家可以说说，你们喜欢哪个？