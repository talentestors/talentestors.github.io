---
title: 开源项目 LinuxMirrors 让换源更简单
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //linuxmirrors.cn/assets/images/brand/light/2.png
mathjax: false
date: 2024-06-25 23:39:53
tags:
    - Linux
    - 镜像源
    - tools
keywords: 开源, Linux, 镜像源, LinuxMirrors, 推荐
description: 开源项目 LinuxMirrors，GNU/Linux 更换系统软件源脚本，让换源更简单
---

## LinuxMirrors

以前安装Linux，因为国内的网络环境，总是需要更换系统软件源，这个过程总是很繁琐，而且容易出错。现在找到了一个开源项目，可以一条命令就可以更换系统软件源，非常方便（推荐+1 qwq

### 项目地址

- 官网: [LinuxMirrors](https://linuxmirrors.cn)
- GitHub: [LinuxMirrors](https://github.com/SuperManito/LinuxMirrors)
- Gitee: [LinuxMirrors](https://gitee.com/SuperManito/LinuxMirrors)

### 使用方法

命令如下：

```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

> 需使用 ROOT 用户执行脚本
> 切换命令为 sudo -i 或 su root，不同系统环境使用的命令不一样，因为有些系统没有在初始安装时为 ROOT 用户设置固定密码（例如Ubuntu）所以需要使用 sudo 指令来提权

root 密码设置：

```bash
sudo passwd root
```

### 官方介绍

> GNU/Linux 更换系统软件源脚本，让换源更简单

#### 多软件源适配

考察了国内镜像站的系统适配情况，测试了下载速度与IPv6协议的兼容性
另外，提供了全网收集的中国大陆教育网镜像站和海外镜像站供选择

#### 脚本一键运行

脚本使换源变得更简单，通过交互默认进行更换，并根据用户选择自动配置
同时，提供了强大的命令选项，可用于自动化项目以实现无交互操作

#### 开源，MIT

项目已设立开源许可协议，传播时请在显著位置标注来源和作者
请尊重作者的知识成果，建议通过命令直接调用脚本
