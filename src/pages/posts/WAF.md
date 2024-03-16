---
layout: '../../layouts/MarkdownLayout.astro'
title: 'WAF'
author: 王福强
pubDate: 2023-09-09
keywords: WAF,王福强,Fuqiang Wang,fujohnwang
description: WAF - 架构百科
---

# WAF

大家好，今天聊聊WAF。 WAF是Web Application Firewall的缩写, 即Web应用防火墙。
相对于传统防火墙在七层之下做流量的监控和封堵， WAF直接工作在第七层， 也就是应用层，或者更确切的说，WAF主要是针对HTTP协议之上的Web应用做防护，所以才有WAF一说。

WAF的主要职能是通过分析Web应用的进出流量，实时发现并封堵恶意请求和响应，比如常见的SQL注入攻击、XSS攻击（也就是“跨站脚本攻击”）。

福强老师认为，WAF产品的核心竞争力来自于它日积月累的规则集合，这东西就跟杀毒软件的病毒库一样，量不够，药效肯定大打折扣。

WAF因为要对Web应用做防护，所以，一般会部署在Web应用的前面， 它的产品形态无非硬件和软件两种。而软件层面，基于Nginx做扩展开发是常见的做法，当然，也有直接以反向代理（即Reverse Proxy）的形式自研的产品。

WAF虽好，但也防护不了所有针对Web应用的攻击和安全威胁，比如之前log4j类库的漏洞，单纯靠WAF完全就是束手无策。




