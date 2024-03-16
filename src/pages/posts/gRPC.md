---
layout: '../../layouts/MarkdownLayout.astro'
title: 'gRPC'
author: 王福强
pubDate: 2023-09-09
keywords: gRPC,王福强,Fuqiang Wang,fujohnwang
description: gRPC - 架构百科
---

# gRPC

什么是gRPC？gRPC的重点是RPC，也就是远程过程调用（Remote Procedure Call），它是一种基于HTTP2和Protocol Buffers的远程调用框架，而HTTP2和Protocol Buffers带给gRPC最大的优势就是性能提升，相对于HTTP + JSON的普遍设计， gRPC可以极大提升远程调用的服务性能。

与无类型的HTTP + JSON的工程实践不同，gRPC围绕IDL（interface definition language）开展工作，然后依据标准化的HTTP2通信协议与Protocol Buffers序列化逻辑，最终通过代码生成的方式，自动生成远程调用的服务器端和客户端。开发者最终只需要写好特定业务和场景的应用代码就可以了，大多数情况下，完全不需要操心网络通信和调用的事情。这样带来的好处就是可以快速规模化的开发应用服务或者说微服务。

当然，除了常见的单向请求与响应式的远程调用，gRPC还支持更多远程调用方式，比如请求然后以流响应的远程调用，或者双向流的远程调用等。

但鉴于gRPC使用“基于IDL+代码生成”的开发方式，大多数时候，它只适合在服务器端的内部调用场景使用，除非团队实力比较强，不在乎更多的工程投入，那么，也可以通过分析gRPC的协议来生成自己的调用客户端，甚至增加更多安全防护等增强逻辑。