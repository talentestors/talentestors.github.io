---
title: 记录关于vuepress迁移时cloudflare的Rocket Loader问题
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@lastest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //images.weserv.nl/?url=i0.hdslb.com/bfs/new_dyn/33a7cd0ce9fceadf6826d4edd2b4922b256667467.jpg@2500h_1c_1e.webp
mathjax: false
date: 2024-05-06 23:05:26
tags:
    - cloudflare
    - Rocket Loader
keywords: cloudflare, Rocket Loader, 记录
description: 记录关于vuepress迁移时cloudflare的Rocket Loader问题
---

## 问题描述

由于gitee的pages服务前几天挂了（[原因不明](https://www.zhihu.com/question/654754629)，官方没什么反应），所以我只好将之前部署在gitee上的知识库迁移。

知识库是基于vuepress搭建的，迁移过程中，我将域名解析到了cloudflare上，然后使用cloudflare的CDN服务。但是，当我访问我的网站时，发现一个页面居然渲染了两次，于是每个页面都有两个重复的内容。

就像这样：

```text
|------|
| 内容 |
|------|
|------|
| 内容 | // 重复
|------|
```

使用F12查看源代码，发现确实是重复了两次。

存在重复的DOM结构，这是什么原因呢？

vuepress的页面都是通过js生成的，并且在没有域名解析的时候一切正常，所以我怀疑是cloudflare导致的。

之后看到一篇[文章](https://changchen.me/blog/20190923/cloudflare-display-issue/)，发现了原因。

> Rocket Loader is a feature by Cloudflare that can help with page load time. Unfortunately, the method in which it does this is very aggressive, is a beta product, and can often break JavaScript (including Mediavine ads).

是因为cloudflare的Rocket Loader导致的。

## 解决方法

Rocket Loader是cloudflare的一个js优化工具，可以延迟加载js，提高页面加载速度。

但是，由于vuepress的页面是通过js生成的，所以Rocket Loader会导致页面重复渲染。

解决方法很简单，只需要在cloudflare的设置中关闭Rocket Loader即可。

1. 暴力直接关闭 Rocket rocker
2. 如果 DOMContentLoaded 就在 console 加一个 warning
3. 开启 Rocket rocker，但对特定的资源加一个 false flag: `<script data-cfasync="false" src="/javascript.js"></script>`

> 方法3是最灵活的。迁移其他的网站时，我都是使用的方法3。
