---
title: Windows系统安装使用Scoop包管理器
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //wsrv.nl/?url=s2.loli.net/2024/05/02/kzEreaHqLZf5VnX.png
date: 2023-05-12 18:24:59
tags: 
    - 操作系统
    - 包管理器
    - Scoop
    - 软件
keywords: windows Scoop Terminal
description: 为你的Windows安装Scoop，管理开发环境。
---

## 前言

Scoop是Windows的命令行安装程序。

如果用过Linux系统，使用`apt-get`工具安装过软件，或者用过Python，知道`pip`工具用于管理Python各种依赖包，那么理解Scoop就比较容易，这些工具的设计理念与使用方法都非常类似。

Scoop一般用来管理绿色软件，即是一种通过解压压缩包即可就地使用的软件，对于比较专业软件（比如Office、Adobe等）支持不好

![img](//img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162343005-1130367297.png)

## 基础环境配置

在准备安装之前，建议进行配置（如果你能解决GitHub访问问题，请跳过:smile:）

如果你是win10系统，建议安装`Terminal`（win11已经自带，请跳转至[正式开始Scoop的安装](/2023/05/12/Windows系统安装使用Scoop包管理器/#正式开始Scoop的安装)）

> 新一代终端Windows Terminal
> 支持标签页、多种命令行工具多开...
> 可定制美化

### Terminal 终端

#### 安装 Terminal

1. 打开Windows自带的应用商店（MicroSoft Store）
2. 搜索`Terminal`
3. 安装

{% fb_img https://s1.ax1x.com/2023/05/16/p92Wogs.png Terminal %}

建议添加任务栏方便使用

#### Terminal 使用

{% fb_img https://s1.ax1x.com/2023/05/16/p92WXUU.png Terminal %}

首次运行时，Windows Terminal以Powershell作为默认配置文件启动。**下拉菜单**可用于启动其他选项卡并访问设置：

{% fb_img https://s1.ax1x.com/2023/05/16/p92fAUO.png Terminal %}

可以在设置里面进行修改透明度，更改背景等设置

{% fb_img https://s1.ax1x.com/2023/05/16/p92fpvR.png Terminal %}

我的个人效果如下：

{% fb_img https://s1.ax1x.com/2023/05/16/p92fAUO.png Terminal %}

[更多使用技巧请点击访问官方文档](https://learn.microsoft.com/zh-cn/windows/terminal/command-line-arguments)

### 正常访问 GitHub

由于GitHub在国内时常会被DNS劫持，所以需要进行本地反代理，保证访问GitHub稳定。

本文推荐使用Steam++来完成本地反代。

**安装：**

1. 打开Windows自带的Microsoft Store.
2. 搜索`Watt Toolkit`并安装.

{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340930-1075855706.png Watt-Toolkit %}

然后，给GitHub打上勾点一键加速.

{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162341074-1179702106.png Watt-Toolkit %}

打开GitHub链接看看是否能访问：<https://github.com>

## 正式开始Scoop的安装

github地址：<https://github.com/ScoopInstaller/Scoop>

文档地址：<https://scoop.sh/>

### 命令安装

**为了让PowerShell可以执行脚本**，首先需要设置PowerShell执行策略，通过输入以下命令`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`（在之前安装好的Terminal执行）

从非管理员 PowerShell 运行此命令以使用默认配置安装 scoop， Scoop将安装到 C:\Users\<YOUR USERNAME>\scoop

```shell
irm get.scoop.sh | iex
# 使用镜像安装
irm get.scoop.sh -Proxy 'http://<ip:port>' | iex
```

或者以下命令：

```shell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```

### 高级安装

如果你不想安装到C盘，可采用此方法（小白不推荐）

先执行

```shell
irm get.scoop.sh -outfile 'install.ps1'
```

下载安装程序

可以`explorer .`在当前打开资源管理器，查看下载的文件

查看安装程序的所有可配置参数。

```shell
.\install.ps1 -?
```

{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340443-955218283.png scoop-install %}

例如，可以将 scoop 安装到自定义目录，配置 scoop 进行安装全局程序到自定义目录，并在安装过程中绕过系统代理。

```shell
.\install.ps1 -ScoopDir 'D:\Applications\Scoop' -ScoopGlobalDir 'F:\GlobalScoopApps' -NoProxy
```

或者，可以使用旧方法通过设置环境变量来配置自定义目录。**（不推荐）**

```shell
$env:SCOOP='D:\Applications\Scoop'
$env:SCOOP_GLOBAL='F:\GlobalScoopApps'
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', $env:SCOOP_GLOBAL, 'Machine')
irm get.scoop.sh | iex
```

> 默认情况下已禁用管理员控制台下Scoop的安装，如果需要使用 `-RunAsAdmin`
> ```shell
> irm get.scoop.sh -outfile 'install.ps1'
> .\install.ps1 -RunAsAdmin [-OtherParameters ...]
> # I don't care about other parameters and want a one-line command
> iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
> ```

### Scoop配置

如果输出了**successfully**，就代表已成功安装Scoop。
{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340205-1167258702.png scoop %}

打开`C:\Users\<user name>\scoop`路径就可以看到下面的文件夹
{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340182-1339201825.png scoop %}

- **app** —— 安装的软件放在这里
- **bucket** —— 已经添加的软件仓库
- **shims** —— Scoop可以自动生成shell脚本，省去了Windows配环境变量的烦恼（我的jdk，MG-win64，cmake，python，conda，git等环境变量基本就靠Scoop的shims）

我们先在Terminal中输入`scoop -v`看看scoop命令是否可以使用
{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340309-1931898434.png scoop %}

可以看到我这边可以正常显示版本号

输入`scoop help`就可以看Scoop命令

部分命令:
|Command    |Summary|
|:-------   |:-------|
|update     |更新|
|list       |显示已安装列表|
|install    |安装|
|uninstall  |卸载|
|search     |搜索app|
|status     |检查更新|
|bucket     |Scoop buckets|
|cache      |缓存|
|reset      |重设|
|cleanup    |清除旧版|
|help       |帮助|
|shim       |shims|

### 安装apps

由于Scoop的软件仓库，是基于Git和7zip工具管理的，所以我们首先需要安装的就是git。

```shell
scoop install git
git config --global http.sslVerifyfalse # git 配置
```

注意：安装时会自动安装7zip。安装会很慢..等

好吧，其实可以先安装aria2多线程加速(笑

```shell
scoop install aria2
```

如果使用代理，有时需要通过如下命令关闭 aria2

```shell
scoop config aria2-enabled false
```

```shell
scoop update # 更新一下Scoop
```
    scoop全局安装软件可以附加`-g`,如：scoop install git -g;但是必须以管理员的身份执行。

### bucket

在 Scoop 中，存储桶是应用程序的集合。或者，更具体地说，存储桶是一个 Git 存储库，其中包含描述如何安装应用程序的 JSON 应用程序清单。

Scoop默认的bucket是main

```shell
scoop bucket known # 查看社区的bucket列表
```

我们可以为main bucket配置镜像来加速

1. 先卸载 main的bucket
```shell
scoop bucket rm main
```
2. 添加 main 镜像代理
```shell
scoop bucket add main https://mirror.ghproxy.com/github.com/ScoopInstaller/Main.git
```

#### 添加其他 bucket

常用bucket：<https://rasa.github.io/scoop-directory/by-score.html>

```shell
scoop bucket add extras # 添加了多种软件包
scoop bucket add versions # 保留了旧版本
scoop bucket add dorado https://github.com/chawyehsu/dorado # 许多国内应用qq、微信
```

国内推荐：

```shell
scoop bucket add scoop-cn https://mirror.ghproxy.com/github.com/duzyn/scoop-cn
```

**指定仓库安装**

```shell
scoop install <bucket_Name>/<packName>
```

#### jdk安装实例演示

1. 先添加Java的bucket
```shell
scoop bucket add java
```
2. 再使用scoop search来搜索jdk的包
```shell
scoop search jdk
```
{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340648-333727383.png scoop %}
1. 选择自己需要的jdk版本，以下以oraclejdk-lts做演示
```shell
scoop install oraclejdk-lts
```
{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340559-1213081098.png scoop %}

安装成功！

安装后scoop会保留安装包，可以使用`scoop cache show`查看缓存。
{% fb_img https://img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162340542-669794949.png scoop %}

```shell
scoop cache rm * # 清除所有缓存
```

### scoop 版本控制

scoop可以使用`scoop reset`切换软件版本,用法是`scoop reset <pack name>@<version number>`、`scoop reset <对应的软件包名>`

`scoop install <pack name>@<version number>`安装指定的版本（这个不太好用）

`scoop cleanup`用来清理旧版本

```shell
scoop cleanup * # 清理所有旧版
```

## 软件推荐

```shell
#调用管理员权限
scoop install sudo
#使用
sudo scoop install git -g

#scoop 本地搜索，提高搜索效率
scoop install scoop-search    
scoop-search jdk

#插件补全
scoop install scoop-completion
```

我的安装列表

```shell
adb                  35.0.2
age                  1.2.0
alist                3.39.1
aria2                1.37.0-1
dark                 3.14
dotnet-sdk-lts       8.0.404
fastfetch            2.28.0
go                   1.23.3
innounp              1.76
lua                  5.4.7-2
maven                3.9.9
msys2                2024-07-27
neovim               0.10.2
nodejs-lts           22.11.0
oraclejdk-lts        21.0.4
python               3.13.0
rustup-gnu           1.27.1
scoop-completion     0.3.0
scoop-search         1.5.0
sudo                 0.2020.01.26
visualvm             2.1.10
zulufx17-jdk         17.54.21
7zip                 24.08
everything           1.4.1.1026
git                  2.47.0.2
JetBrainsMono-NF     3.2.1
NerdFontsSymbolsOnly 3.2.1
pandoc               3.5
picgo                2.3.1
qbittorrent-enhanced 5.0.0.10
snipaste-beta        2.9.2-Beta
starship             1.21.1
```

## 附录

常用命令

```shell
# 查看已安装程序
scoop list
# 查看更新
scoop status
# 更新版本，更新仓库
scoop update
# 删除旧版本
scoop cleanup
# 自身诊断
scoop checkup
```

Aria2 的参数

```shell
scoop config aria2-retry-wait 4
scoop config aria2-split 16
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 4M
```

Scoop代理

```shell
#设置代理
scoop config proxy 127.0.0.1:7890
#关闭代理
scoop config proxy false # 2024年4月19日更新 false不在支持 请使用none
#使用用户代理
scoop config proxy currentuser@default
#绕过代理直连
scoop config proxy none
```

---

### 2024/11/25更新

最近把Windows11升级到了24H2，24H2系统自带了sudo所以就把scoop安装的sudo卸载掉了。

下面教你如何启用24H2的 `sudo`

首先你应该先升级到24H2

- 然后转到设置->系统->开发人员选项{% fb_img https://img2024.cnblogs.com/blog/3092919/202411/3092919-20241125183949037-273049344.png Windows11 %}
- 保证开发人员模式是打开的，然后打开`启用sudo`开关
- 以管理员身份打开powershell或者cmd，执行`sudo config --enable normal`命令

```bash
sudo config --enable normal
sudo config --enable 启用模式
```

> 模式可选：`forceNewWindow`、`disableInput`、`normal`，“在新窗口中”、“禁用输入”、“内联”模式。
>
> 比如内联模式，就和linux终端一样。
> sudo config --enable normal

关于sudo：<https://github.com/microsoft/sudo>

---

*ps: fastfetch好好玩*

{% fb_img https://img2024.cnblogs.com/blog/3092919/202411/3092919-20241125184041961-1997380663.png fastfetch %}
