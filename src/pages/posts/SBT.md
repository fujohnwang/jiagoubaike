---
layout: '../../layouts/MarkdownLayout.astro'
title: 'SBT'
author: 王福强
pubDate: 2023-09-09
keywords: SBT,王福强,Fuqiang Wang,fujohnwang
description: SBT - 架构百科
---

# SBT

大家好，今天跟大家聊聊SBT

SBT首先是Scala生态里官方推荐的编译工具，全称Simple Build Tool。但说实话， SBT并不Simple， 从最早0.1时代的原型，到后面逐渐成型，扶墙老师都试用过，但最终还是因为这个工具的设计过于复杂和不兼容等因素而放弃，转而继续使用Java生态里的Maven作为主力编译工具。

SBT使用ivy作为仓库规范，好在它也兼容maven的仓库，所以，可以继续使用Java生态里的类库资源，这是它好的一面。 另外， 它从设计之初就支持插件，所以，扩展性也没问题。 实际上，一旦你习惯了SBT的生态，也可以很享受它，比如，通过sbt-native-packager插件，SBT起码已经早早就提供了docker image的编译等功能。

在编译工具这个领域，SBT之对于Scala，就相当于Maven之对于Java，以及Gradle之对于Groovy。

另外，SBT这个缩写在Web3领域也有一个指代，即Soulbound Token，灵魂绑定代币，听着很玄幻，扶墙老师感觉，其实可以认为它就是元宇宙里的“良民证儿” ；）
