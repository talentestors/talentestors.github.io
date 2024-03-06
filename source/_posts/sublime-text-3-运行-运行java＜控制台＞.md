---
title: sublime text 3 运行+运行java＜控制台＞
author: stazxr
avatar: https://s3.stazxr.cn/cdn/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 学习使我快乐
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://s1.ax1x.com/2023/03/22/ppdSX6g.png
date: 2023-02-05 12:26:09
tags: 
  - 软件
keywords: sublime 软件 Java
description: 
---

平台：Windows

1.安装好jdk（8 or 11），并且配置好[环境变量](https://so.csdn.net/so/search?q=环境变量)

2.找到 工具—>编译系统—>新编译系统

ps：英文版为；Tools—>Build system—>New Build system

3.输入以下代码

```shell
 {
"shell": true,
"cmd": ["start", "cmd", "/c", "javac -encoding UTF-8 ${file} & java ${file_base_name} &echo. & pause "],
"file_regex" :"^(...*?):([0-9]*):?([0-9]*)",
"selector" :"source.java",
"shell" :true,
"working_dir":"${file_path}",
"encoding" :"GBK",
}
```

4.保存至C:\Users\********\AppData\Roaming\Sublime Text 3\Packages\User

​         文件名为：runjava.sublime-build

5.在sublime内找到 工具—>编译系统—>runjava

​          **按  Ctrl + b 就能生成class文件并运行**

**还可以参照其他方法（链接如下）：**

[Sublime Text3配置Java环境-升级版_DE2-115的博客-CSDN博客_sublime text3 配置java](https://blog.csdn.net/weixin_44301306/article/details/117266867)

[sublime text3运行java程序_不豫的博客-CSDN博客_sublime text3写java](https://blog.csdn.net/qq_44912697/article/details/104096382)

[sublime text 3 运行java_无名虫的博客-CSDN博客_sublime text 运行java](https://blog.csdn.net/jyx00123/article/details/119972020)

[Sublime Text 3编译运行java源代码方法_故事如烟的博客-CSDN博客](https://blog.csdn.net/u011113518/article/details/61923197)


> 作者本人，移植于CSDN
>
> 原文链接：<https://blog.csdn.net/m0_44950849/article/details/125392979>
>
> 于 2022-06-21 16:23:29 发布CSDN
