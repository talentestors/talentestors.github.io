---
title: 关于 Tomcat 在 idea 上的中文编码问题
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn@lastest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //images.weserv.nl/?url=s2.loli.net/2024/03/26/DcVmLoWGKHlCPh5.png&w=1280&h=600&a=top&fit=cover&we
mathjax: false
date: 2024-04-30 22:45:14
tags:
keywords:
description: 关于tomcat在idea上的中文编码问题；在国内，无论是新手还是有一定码龄的开发人员，汉字编码问题一直都是绕不开的魔咒，本文主要对tomcat在jetbrain系列产品idea上的乱码问题提供解决经验。
---


## 一、问题引入

在国内，无论是新手还是有一定码龄的开发人员，汉字编码问题一直都是绕不开的魔咒，本文主要对tomcat在jetbrain系列产品idea上的乱码问题提供解决经验。

## 二、详情描述

新手在初学Java Web时，兴致冲冲的安装了tomcat 10.x.x 或其他版本&rarr;idea新建web项目&rarr;试运行:

{%fb_img https://s21.ax1x.com/2024/05/01/pkFbiuR.png 你好！Hello!!! %}

大段的红色乱码信息，冲击着初学者的心灵。

虽然不会实际开发造成影响，但看着这些云里雾里的信息时还是挺~影响心情的。:scream:

> 淇℃伅 --> 信息
>
> 鍛戒护琛屽弬鏁帮細 --> 命令行参数：

## 三、问题分析

在以前的 javase 学习中，中文乱码问题是通过统一编码的方式解决的（GBK和UTF-8）。

但如下图所示，很明显这次绝对不像之前那样能轻松解决。我们可以看到在idea的console下的输出出现了两种（可能不止两种）不同的流，且两种不同的流使用了两种不同的编码格式。（即白色的`你好！Hello!!!`可以正常显示，而红色的信息却是乱码）

{%fb_img https://s21.ax1x.com/2024/05/01/pkFbSCF.png 你好！Hello!!! %}

这里解释一下：「你好！Hello!!!」这部分信息是我在代码里写的`System.out.println("你好！Hello!!!");`其他是Tomcat的输出的日志信息。

综上，问题的解决方案应该从Tomcat下手。

## 四、解决方案

### 方法一

作者在遇到这个坑的时候一开始是从问题的根本下手的，既然会出现中文乱码问题那么直接让Tomcat输出英语不就解决了吗！:smile_cat:

于是就从网络上找到了解决方法；

> Tomcat启动时会检查本地语言环境，来调用对应的i18n文本，中文环境默认会显示中文日志，但在终端中容易出现乱码，虽然乱码问题可以通过修改字符集处理，还是想尝试一下改成英文输出。刚研究了一下，发现可以通过修改参数来设置输出日志的语言，将运行参数中的语言环境设置为英文即可，在此记录一下修改步骤
>
> > 此文档所使用的环境如下
> >
> > Server version name:   Apache Tomcat/9.0.62
> > OS Name:               Windows 10
> > JVM Version:           1.8.0_301-b09
>
> #### 修改catalina
>
> 修改`bin/catalina.bat`文件，其中有一项关于CATALINA_LOGGING_CONFIG的配置，大约是230行，不同版本所在行不一样，大致在那个区间
>
> ```cpp
> if not "%CATALINA_LOGGING_CONFIG%" == "" goto noJuliConfig
> set CATALINA_LOGGING_CONFIG=-Dnop
> if not exist "%CATALINA_BASE%\conf\logging.properties" goto noJuliConfig
> set CATALINA_LOGGING_CONFIG=-Djava.util.logging.config.file="%CATALINA_BASE%\conf\logging.properties"
> :noJuliConfig
> ```
>
> 将其中的set语句后面添加language配置`-Duser.language=en -Duser.region=US`，如下
>
> ```bash
> set CATALINA_LOGGING_CONFIG=-Djava.util.logging.config.file="%CATALINA_BASE%\conf\logging.properties" -Duser.language=en -Duser.region=US
> ```
>
> 注意空格。
>
> > 提示：如果是在Linux系统，则修改`bin/catalina.sh`文件
>
> #### 修改时间格式
>
> 顺便改一下显示日志中的时间格式，修改`conf/logging.properties`，在`ConsoleHandler`区添加`timeFormat`配置
>
> ```undefined
> java.util.logging.ConsoleHandler.level = FINE
> java.util.logging.ConsoleHandler.formatter = org.apache.juli.OneLineFormatter
> java.util.logging.ConsoleHandler.encoding = UTF-8
> org.apache.juli.OneLineFormatter.timeFormat = yyyy-MM-dd HH:mm:ss
> ```
>
> 重启Tomcat检查修改是否生效。
>
> 作者：zhouf_cq
> 链接：<https://www.jianshu.com/p/da8386129a50>
> 来源：简书
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

不得不说，直接改成英文一定是乱码问题的通解。（直接绕开问题

但是作者一直都有一个坏毛病（X，就是喜欢把所有工具更到最新。

于是就在我的第一次更新Tomcat的时候，它又变成了中文。

Tomcat更新时，会把之前辛苦配置的文件覆盖掉，每次都要改一遍。对于我这种懒人来说，一行命令更新后，我可不想重新再修改一遍（这个不是配置文件，更新后可能会有变动不适合直接copy）。

于是，我就在idea上花费了一番功夫。

### 方法二

我把idea上的配置全部统一成了utf-8。

文件编码

{% fb_img https://s21.ax1x.com/2024/05/01/pkFHjEV.png 文件编码 %}

{% fb_img https://s21.ax1x.com/2024/05/01/pkFHx4U.png 文件编码 %}

上面是之前学javase的解决的方法。这次只要在上面的设置基础上添加一个设置。

setting&rarr;Editor&rarr;General&rarr;Console下，修改成UTF-8

{% fb_img https://s21.ax1x.com/2024/05/01/pkFHvNT.png Console %}

Default Encoding 修改成UTF-8

{% fb_img https://s21.ax1x.com/2024/05/01/pkFbp34.png Console %}

OK

重启Tomcat

{% fb_img https://s21.ax1x.com/2024/05/01/pkFbCv9.png Tomcat %}

可以看到Tomcat日志输出正常了

五、后续问题

之前的问题这里并没有完全解决，可以看到`System.out.println("你好！Hello!!!");`输出的中文变成了乱码。

{%fb_img https://s21.ax1x.com/2024/05/01/pkFb9gJ.png 你好！Hello!!! %}

我们只要在idea里面配置一下项目配置就可以了。

{%fb_img //images.weserv.nl/?url=img2024.cnblogs.com/blog/3092919/202405/3092919-20240501000438801-1146491409.png 你好！Hello!!! %}

在此处（红色的框）添加一句VM option 参数就可以了。

```
-Dfile.encoding=UTF-8
```

{%fb_img //images.weserv.nl/?url=img2024.cnblogs.com/blog/3092919/202405/3092919-20240501000458174-336791758.png 你好！Hello!!! %}

完美解决！

> `-Dfile.encoding=UTF-8`这条参数很常见。

## 写在最后

{% fb_img //images.weserv.nl/?url=s2.loli.net/2024/03/26/DcVmLoWGKHlCPh5.png&w=1280&h=600&a=top&fit=cover&we mrfz黍 %}
