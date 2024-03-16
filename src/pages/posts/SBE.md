---
layout: '../../layouts/MarkdownLayout.astro'
title: 'SBE'
author: 王福强
pubDate: 2023-09-09
keywords: SBE,王福强,Fuqiang Wang,fujohnwang
description: SBE - 架构百科
---

# SBE

SBE全称Simple Binary Encoding，字面上直接翻译过来是“简单二进制编码”，听起来没那么性感，但性能上绝对感人，不过这里的感人是真的感人，不是反话；）

只提到SBE大家可能比较陌生，但提到它的同门师兄弟，大家可能就不陌生了，也就是LMAX公司开源的Disruptor框架，同样是面向高频、实时交易场景的技术方案，SBE和Disruptor都是出自同一人之手，即Martin Thompson。

SBE是一种面向金融领域低延时数据编码方案，可以与Protobuf相提并论，二者都是通过IDL或者说Schema的方式，预先定义数据结构编排格式，然后通过代码生成的方式提供给开发者使用。SBE为了满足低延时、高实时性金融场景需求，对固定格式对数据类型，比如数字、枚举等做了优化，而像字符串或者Blob等预先无法知晓数据长度的类型，则放在数据编排的最后。

所以，相对于比较通用的Protobuf， SBE更加适合对极致性能有要求的金融交易与通信场景，小众，但出众。

