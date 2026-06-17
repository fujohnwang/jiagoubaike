---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Agent 架构简单入门'
author: 王福强
pubDate: 2026-06-17
keywords: Agent,王福强,Fuqiang Wang,fujohnwang
description: Agent - 架构百科
---

> 注：转载，版权归原作者所有。

一个有灵魂，有记忆的 Agent，一次任务的生命周期包括以下步骤

1. 用户输入 query（text + files）
2. Agent 读取提示词文件（soul.md，identify.md，user.md 等）
3. Agent 读取可用的工具和技能（tools，skills 等）
4. Agent 读取记忆（memory.md，memory_search 查询）
5. Agent 构建上下文（prompt + tools + memory + query）
6. Agent 进入 Loop（LLM 调用 → 工具调用 → 观测 → 再推理）
7. Agent 交付结果（Artifacts）

什么需要存：提示词文件，工具和技能，对话记录，交付产物

什么需要算：上下文拼接，LLM 调用，工具调用

简单表示这个过程

fn(query, agent runtime) = artifacts 

我们可以把  agent 运行方式简单分为三类

1. 本地裸机运行
2. 本地带沙盒（sandbox）运行
3. 云端多副本运行

---

1.  本地裸机运行，是 OpenClaw 之类 Agent 的常见模式。Agent 提示词文件、skills，对话记录（sessions）全部存在本地磁盘，Agent 执行任务时，会在固定 workspace 目录下运行，用户上传的文件、Agent 产出的文件全部落在同一个 workspace，Agent Loop 完全依赖本地文件构建上下文和执行工具调用，存跟算是一体的。

这种模式好处是足够简单，避免了额外的文件挂载开销，弊端在于安全性，比如 Agent Loop 执行了一个 exec(rm  -rf /) 工具调用，很容易对宿主机产生破坏

2. 本地带沙盒运行，是 Codex 之类的 Agent 的常见模式。主要解决两个问题。一是防止 Agent 越权操作，提高安全性；二是解决宿主机的依赖缺失导致工具调用异常的问题。

Agent Loop 执行工具调用时，涉及到敏感操作或者有外部依赖时，把宿主机的 workspace 目录挂载到 sandbox，在 sandbox 执行工具调用，输出产物自动同步到宿主机的 workspace 目录

这种模式下的存算分离，只在工具调用环节引入 sandbox 来动态计算，存储主要靠宿主机的文件系统

3. 云端多副本运行，是 Manus 之类的工具型 Agent 的常见模式。主要特点是多租户，多任务，长时间运行

像 genspark claw，kimi claw，max claw 之类的托管版小龙虾，本质上是在云端多副本运行的助理型 Agent，每个用户有独立的提示词文件，动态安装的 skills，需要长期记忆

这类 claw 托管服务，最简单的实现方式是搭建一套 k8s 集群，在每个 pod 部署一套 Agent 框架（OpenClaw，harmes 等），通过 pvc 挂载云硬盘，实现对用户资料的持久化存储。通过负载均衡策略把每个用户的请求路由到固定的 pod，在同一个 pod 做 Agent Loop，存算是一体的，每个 Agent 有独立的运行空间。这种方案隔离性很好，不好的地方在于 pod 需要常驻，运行成本很高，难以规模化

---

云端 Agent 需要规模化（scalable），必然要结合 serverless 架构做存算分离。计算层依赖 k8s 集群的调度机制动态扩缩容，水平扩展 Agent 网关的并发处理能力

存储层结合 Agent 的运行生命周期，不同阶段的产物用不同的存储方案，主要分为四种

1. 热状态。Agent Loop 的 step，plan，游标等状态，用 kv（redis）来存，高性能，低延迟，用于异常重启后的断点恢复

2. 对话和任务记录。在任务完成后用关系型数据库（postgres）来存

3. 长期记忆。基于对话/任务记录做摘要，提取成记忆，用向量数据库（pgvector，milvus）来存

4. 工作产物。包括用户上传的文件，Agent 输出的文件，系统内置的 tools，动态创建的 skills 等，用对象存储（s3，oss）来存

---

以 FastClaw 为例，演示基于存算分离架构的云端 Agent 的运行过程👇

1. 一套 k8s 集群，日常 2 个 pod，部署 fastclaw gateway，接收用户请求

2. 负载均衡把用户请求路由到其中一个 pod，Agent 开始计算逻辑：

2.1  从 db 读取提示词文件（soul，identity，user）
2.2  初始化 pod 内一个临时目录作为 workspace
2.3 初始化 sandbox，挂载 workspace
2.4 从对象存储下载用户资料和系统 skills 到 workspace
2.5 调用 memory_search 工具，从向量数据库查询记忆
2.6 拼接上下文，调用 llm，解析工具
2.7 在 sandbox 执行工具调用，读写 workspace 内的文件
2.8 把 Agent Loop 过程中的状态设置为 checkpoint，保存到 kv
2.9 Agent 输出结果给用户

3. 通过惰性检查，把不活跃的 sandbox 关闭，关闭前把 sandbox 内 workspace 的文件上传到对象存储

以上的存算分离架构，计算层依赖 pod + sandbox，pod 水平扩容支持并发调用，sandbox 承接少量的工具调用，使用 e2b 作为 sandbox 可以做到秒级启动，构建 sandbox 池可以提高并发容错；存储层依赖 kv + db + vector db + oss 的组合使用，瓶颈在于 io 延迟

这套架构最大的挑战在于分布式多副本场景下的数据一致性，需要合理使用锁机制和负载均衡策略。

理解了这套架构，再去看 Manus，Claude managed agents 的实现，就很好理解了。