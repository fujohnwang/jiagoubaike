---
layout: '../../layouts/MarkdownLayout.astro'
title: 'CSRF'
author: 王福强
pubDate: 2023-09-09
keywords: CSRF,王福强,Fuqiang Wang,fujohnwang
description: CSRF - 架构百科
---

# CSRF

CSRF是web安全领域术语， 全称是Cross-Site Request Forgery。

简单来说，csrf攻击就是重复多次提交同一个web请求，当然，这是相当简化的说法。

传统web应用基于表单的提交来变更状态，如果应用对web请求没有做csrf攻击的防范，那么，攻击者就可以重复多次提交同一个请求，对服务器端造成状态破坏甚至类似DDoS效果的攻击。比如发起多次转账，这是绝对不可接受的；）

那么如何避免CSRF攻击呢？ 其实也很简单，那就是在每次表单显示请求的时候发放一个随机token，只有提交表单请求的同时把该token一起提交，才认为这个请求是合法的，否则，服务器端直接拒掉当前请求即可。 这个架构里有两个状态，一个是客户端需要请求csrf token并保存，以便在下次提交请求的时候附带上； 另一个就是服务器端需要有已经发放的csrf token池，便于校验客户端提交的csrf token是否合法。

鉴于csrf安全需求相当普遍，所以，很多web框架也都有提供集成和支持，比如Spring和SpringSecurity。


