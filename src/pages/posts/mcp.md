---
layout: '../../layouts/MarkdownLayout.astro'
title: 'MCP'
author: 王福强
pubDate: 2025-01-05
keywords: MCP,王福强,Fuqiang Wang,fujohnwang
description: MCP - 架构百科
---


MCP全称是Model Context Protocol， 也就是"模型上下文协议"， 是Anthropic这家公司搞的一个AI应用协议。这个东西服务于AI应用（而不是AI模型），之所以强调这个，是因为很多人分不清楚大语言模型与大语言模型应用的差别。

那AI应用为什么需要MCP呢？

大部分大语言模型都是提供公开的信息给用户，但很大一部分信息其实是在“水面”下的，比如企业的私有知识库、个人的私有笔记等等，假如想要大语言模型根据这些信息给我们提供准确的信息，就必须告诉它这些信息，但很显然，过去这些信息搞成私有是有原因的。

那么如何解决AI应用获取这些私有信息并作为上下文使用的问题呢？

MCP就是出来干这个事儿的。 

它可以将各种类型的信息源（一般称为Resource）通过统一的MCP协议接入到AI应用，然后AI应用就可以根据这些特有信息做生成和回复了。

如果你熟悉过去的服务调用框架，那么简单来说MCP就像是一个AI版的DUBBO

MCP通过JSONRPC的调用方式来访问各种资源， 格式定义采用JSON Schema,大体上的结构是这个样子：

![](./images/mcp-wire-structure.jpg)

当然，这个只是告诉我们信息是以什么格式传递的（也就是wire format），但没有告诉我们MCP是如何与AI应用程序协作发挥跟大家作用的。

MCP的整个架构如下：

![](./images/mcp-arch.jpg)

MCP Server就是一个Endpoint, 可以为不同的Resource（其实就是数据源）提供相应的MCP Server供AI应用访问， 而AI应用就是像Claude Desktop、Cody、Zed、Cursor这类工具或者客户端应用。

需要注意的是， MCP是在AI应用与数据源之间搭建桥梁， 而不是直接在AI模型与数据源之间搭建桥梁。（再次强调）

AI应用通过MCP获取数据源的数据再喂给AI模型， 从而形成一个AI应用的整体工作流程。

AI应用可以两种方式接入MCP服务：

1. 本地进程间通信，也就是MCP所称的stdio方式，像Anthropic自己家出的Claude Desktop应用，暂时就是只支持这种方式接入MCP服务；
2. 远程基于HTTP协议的通信接入，整个更通用，但是否支持，看具体的AI应用端实现。

每个AI应用接入MCP后的交互是这样的：

![](./images/mcp-interactive.jpg)

基本上就是连接确认后，后面多次交互。

当然， MCP还提供了prompts和tools等资源和工具等接入，整个感兴趣的同学可以去官网看看 🤣

最后，就跟我在给国内某运营商全国IT主任班做企业培训的时候提到的一样，MCP后面有可能成为AI届微服务的扛把子，所以，值得大家关注下（当然，也只是可能，哈哈哈，能不能普及，也看有多少人愿意扑进来一起玩）

![](./images/mcp-ms.jpg)

> TIP
>
> 至于开发，so easy啦，让cursor这些帮你干就行了，现在早就不用自己动手搞这种初级编码了，不是吗？😉



## [Awesome MCP Servers](https://github.com/modelcontextprotocol/servers)

- [MCP Server Trello](https://github.com/utopica-dev/mcpserver-trello)
- [Coolify MCP Server](https://github.com/StuMason/coolify-mcp-server)
- [n8n MCP Server](https://github.com/illuminaresolutions/n8n-mcp-server)
- [kubernetes-mcp-server](https://github.com/manusa/kubernetes-mcp-server)
- [Code Knowledge MCP Server](https://github.com/davidvc/code-knowledge-mcptool)
- [MCP Server Playground](https://github.com/psaboia/mcp-server-example)
- [Perplexity AI MCP Server](https://github.com/rileyedwards77/perplexity-mcp-server)
- [MCP-llms-txt](https://github.com/SecretiveShell/MCP-llms-txt)
- [Seq MCP Server](https://github.com/ahmad2x4/mcp-server-seq)
- [MCP Server Starter](https://github.com/GreatAuk/mcp-weather)
- [Bear MCP Server](https://github.com/jkawamoto/mcp-bear)
- [Social Listening MCP Server](https://github.com/fred-em/social-listening)
- [Supabase MCP Server](https://github.com/alexander-zuev/supabase-mcp-server)
- [MySQL MCP Server](https://github.com/kevinwatt/mysql-mcp)
- [MCP Selenium](https://github.com/angiejones/mcp-selenium)
- [Deep Research MCP Server](https://github.com/Ozamatash/deep-research-mcp)
- [excel-mcp-server](https://github.com/haris-musa/excel-mcp-server)
- [Knowledge Graph Memory Server](https://github.com/T1nker-1220/memories-with-lessons-mcp-server)
- [MCP Local Web Search Server](https://github.com/FradSer/mcp-server-local-web-search)
- [Buienradar MCP Server](https://github.com/wpnbos/buienradar-mcp-server)
- [MCP Playwright CDP](https://github.com/lars-hagen/mcp-playwright-cdp)
- [pokemon-api-server](https://github.com/Harnishnava/pokemon-ai)
- [MCP Server Template for Cursor IDE](https://github.com/chrisboden/mcp_template)
- [Azure MCP Server](https://github.com/mashriram/azure_mcp_server)
- [MCP Server for Apache Airflow](https://github.com/yangkyeongmo/mcp-server-apache-airflow)
- [Curri MCP Server](https://github.com/teamcurri/mcp-linear)
- [Figma MCP Server](https://github.com/GLips/Figma-Context-MCP)
- [Scryfall MCP Server](https://github.com/cryppadotta/scryfall-mcp)
- [EverArt Forge MCP Server](https://github.com/nickbaumann98/everart-forge-mcp)
- [steam](https://github.com/dsp/mcp-server-steam)
- [Fetch MCP Server](https://github.com/ExactDoug/mcp-fetch)
- [Langfuse Prompt Management MCP Server](https://github.com/langfuse/mcp-server-langfuse)
- [Second Brain OS MCP Server](https://github.com/umairkamilcodes/secondbrainos-mcp-server)
- [Portkey MCP Server](https://github.com/r-huijts/portkey-admin-mcp-server)
- [WASM MCP Server](https://github.com/beekmarks/mcp-wasm)
- [Feature-Discussion MCP Server](https://github.com/squirrelogic/mcp-feature-discussion)
- [Brevo MCP](https://github.com/apicolet/brevo-mcp)
- [Comfy MCP Server](https://github.com/lalanikarim/comfy-mcp-server)
- [MCP YNAB Server](https://github.com/klauern/mcp-ynab)
- [Resend MCP Server](https://github.com/pontusab/resend-mcp)
- [mcp-timeplus](https://github.com/jovezhong/mcp-timeplus)
- [MCP Server Weaviate](https://github.com/weaviate/mcp-server-weaviate)
- [PostgreSQL MCP Server](https://github.com/vinsidious/mcp-pg-schema)
- [Notion MCP Server](https://github.com/orbit-logistics/notion-mcp-server)
- [Git MCP Server](https://github.com/Sheshiyer/git-mcp-v2)
- [Memory Bank MCP Server](https://github.com/alioshr/memory-bank-mcp)
- [mcp-any-openapi](https://github.com/matthewhand/mcp-openapi-proxy)
- [YouTube MCP Server](https://github.com/kevinwatt/yt-dlp-mcp)
- [lunchmoney-mcp](https://github.com/leafeye/lunchmoney-mcp-server)
- [Novu MCP Server](https://github.com/novuhq/smithery-mcp)
- [File Edit Check MCP Server](https://github.com/8grackles/file-edit-check-server)
- [MCP Server for Things3](https://github.com/drjforrest/mcp-things3)
- [Singapore LTA MCP Server](https://github.com/arjunkmrm/mcp-sg-lta)
- [Proxmox MCP Server](https://github.com/canvrno/ProxmoxMCP)
- [Perplexity MCP Server](https://github.com/wysh3/perplexity-mcp-server)
- [Webflow MCP Server](https://github.com/kapilduraphe/webflow-mcp-server)
- [Integrated MCP Server](https://github.com/patelnav/my-tools-mcp)
- [Serper Search MCP Server](https://github.com/NightTrek/Serper-search-mcp)
- [gitlab mcp](https://github.com/zereight/gitlab-mcp)
- [mcp-wcgw](https://github.com/rusiaaman/wcgw)
- [Lodestar MCP Server](https://github.com/kanlanc/lodestar-mcp)
- [GitHub MCP Server](https://github.com/timbuchinger/mcp-github)
- [Shell-MCP](https://github.com/kevinwatt/shell-mcp)
- [Linear MCP Server](https://github.com/samcfinan/linear-mcp-server)
- [Square MCP Server](https://github.com/Kvadratni/square-mcp)
- [Simple Document Processing MCP Server](https://github.com/cablate/mcp-doc-forge)
- [Perplexity AI MCP Server](https://github.com/fr0ziii/perplexity-mcp-server)
- [ClickUp MCP Server](https://github.com/TaazKareem/clickup-mcp-server)
- [MCP Excel Reader](https://github.com/ArchimedesCrypto/excel-reader-mcp)
- [SearXNG MCP Server](https://github.com/kevinwatt/mcp-server-searxng)
- [Headline Vibes Analysis MCP Server](https://github.com/fred-em/headline-vibes)
- [Zonos TTS MCP Server](https://github.com/PhialsBasement/Zonos-TTS-MCP)
- [ChatGPT MCP Server](https://github.com/Toowiredd/chatgpt-mcp-server)
- [Ghost MCP Server](https://github.com/MFYDev/ghost-mcp)
- [PulseMCP Server](https://github.com/orliesaurus/pulsemcp-server)
- [Linear MCP Server](https://github.com/Iwark/linear-mcp-server)
- [MCP Server for Cursor](https://github.com/AntDX316/MCP-Server)
- [Jupyter MCP Server](https://github.com/datalayer/jupyter-mcp-server)
- [Todoist MCP Server](https://github.com/Chrusic/todoist-mcp-server-extended)
- [KNMI Weather MCP](https://github.com/wolkwork/knmi-mcp)
- [Deepseek Thinker MCP Server](https://github.com/ruixingshi/deepseek-thinker-mcp)
- [Modal MCP Toolbox](https://github.com/philipp-eisen/modal-mcp-toolbox)
- [Software Planning Tool](https://github.com/NightTrek/Software-planning-mcp)
- [MCP Agent TypeScript Port](https://github.com/waldzellai/mcp-agent-ts)
- [Ollama MCP Server](https://github.com/rawveg/ollama-mcp)
- [MCP Media Processing Server](https://github.com/maoxiaoke/mcp-media-processor)
- [mcp-clickup](https://github.com/mikah13/mcp-clickup)
- [Time Server](https://github.com/clssck/mcp-time-server)
- [Calendar Tools MCP Server](https://github.com/cablate/mcp-google-calendar)
- [MCP Server for OpenSearch](https://github.com/ibrooksSDX/mcp-server-opensearch)
- [kospi-kosdaq](https://github.com/dragon1086/kospi-kosdaq-stock-server)
- [nREPL MCP Server](https://github.com/JohanCodinha/nrepl-mcp-server)
- [AgentCare](https://github.com/Kartha-AI/agentcare-mcp)
- [confluence-mcp](https://github.com/zereight/confluence-mcp)
- [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)
- [Brave Search MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search)








