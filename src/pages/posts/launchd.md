---
layout: '../../layouts/MarkdownLayout.astro'
title: 'Launchd'
author: 王福强
pubDate: 2023-10-17
keywords: launchd,launchctl,plist,王福强,Fuqiang Wang,fujohnwang
description: 什么是launchd？它与systemd什么区别？
---

# Launchd

视频版：<https://youtu.be/VajHHEFW0o8>

launchd是macos下的服务管理框架，类似于linux下的systemd。

launchd一般提供两种类型的服务管理，一种是常见的后台服务，一种是调度服务，比如多长时间执行一次或者按照日历规划进行调度执行，后者类似于常用的crontab，但launchd的复杂调度配置比较麻烦，不如crontab的表达式简洁（所以，这时候可以考虑使用像 [Launchd plist Composer](https://store.afoo.me/l/launchdpc)这样的工具帮助起草复杂的调度配置）。

launchd的配置文件基于plist格式，它是一种xml格式，通过键值对的形式（Key-Value）提供配置信息，值可以有多种类型，比如array/dict/string/integer等。

launchd配置文件通过放入指定目录进行部署，比如/Library/LaunchdDaemon目录，比如/Libray/LaunchAgent目录等， 但要让这些launchd服务生效开始工作，一般需要通过launchctl命令加载或者启动。

总之，launchd是MacOS下标准的后台服务管理框架，尤其是把MacOS作为服务器使用的情况下，launchd是部署服务的一个很好的选择。（当然，使用docker或者kubernetes也是很好的选择）




