---
title: JDK 18 以上使用标准输出流中文输出乱码问题
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //wsrv.nl/?url=img2023.cnblogs.com/blog/3092919/202308/3092919-20230801162054428-139522669.png
mathjax: false
date: 2024-12-05 15:43:24
tags:
    - Java
    - JDK
    - Tomcat
    - 乱码
keywords: JDK, Java, Tomcat, 乱码, 控制台输出, UTF-8, GBK
description: JDK 18 以上使用标准输出流中文输出乱码问题解决方案
---


## 问题描述

起因是 tomcat 调用servlet输出的`System.out.println`(也就是所说的控制台输出流)中文乱码，但是其他输出没有受到影响。

## 问题分析

运行环境：JDK 21, Tomcat 10

我所有的代码都是UTF-8编码的，而且在IDEA中设置了UTF-8编码。

并且Tomcat也配置了`-Dfile.encoding=UTF-8`选项

通过查看`System.out`的编码方式，发现是`GBK`，但是在控制台的编码方式是`UTF-8`。

```java
System.out.println(System.out.charset());   // System.out.charset()方法自jdk18起
// output: GBK
```

使用jdk17的时候没有问题，但是使用jdk21就会出现乱码问题。

## 解决方案

参考[JEP 400: UTF-8 by Default (openjdk.org)](https://openjdk.org/jeps/400)通过调用getProperty方法获取默认字符集

```java
System.out.println("Java Runtime version " + System.getProperty("java.runtime.version"));
System.out.println("----------------------------------------------------------");
//全局默认编码 JDK21是UTF
System.out.println("Charset.defaultCharset()                    = " + Charset.defaultCharset());
//默认文件的编码，这个应该是字节码文件
System.out.println("System.getProperty(\"file.encoding\")       = " + Charset.defaultCharset().displayName()); 
//获取的是本地的字符集编码，中文windows系统应该是GBK
System.out.println("System.getProperty(\"native.encoding\")     = " + System.getProperty("native.encoding"));
System.out.println("System.getProperty(\"sun.jnu.encoding\")    = " + System.getProperty("sun.jnu.encoding"));
//这个是输出流的默认字符集编码
System.out.println("System.getProperty(\"sun.stdout.encoding\") = " + System.getProperty("sun.stdout.encoding"));
//这个是错误流的默认编码
System.out.println("System.getProperty(\"sun.stderr.encoding\") = " + System.getProperty("sun.stderr.encoding"));
//console默认编码
System.out.println("System.console().charset()                  = " + System.console().charset());
//当前输出流的编码
System.out.println("System.out.charset()                        = " + System.out.charset());
System.out.println("----------------------------------------------------------");
```

在一般的情况下`System.getProperty("sun.stdout.encoding")`和`System.getProperty("sun.stderr.encoding")`的值是`UTF-8`，但是在Tomcat中是`null`。

tomcat 10 不会指定输出流的字符编码

所以我们需要在启动tomcat的时候指定输出流的字符编码

是在启动配置中的 VM options 添加参数：

```shell
-Dstdout.encoding=UTF-8 -Dstderr.encoding=UTF-8
```

这种方法只能解决所设置程序的编码问题，若需解决 Javadoc 的乱码，则需在-D前添加-J。

```shell
-J-Dstdout.encoding=UTF-8 -J-Dstderr.encoding=UTF-8
```

## 总结

乱码问题只出现在jdk18及以上的版本，因为[Java 18 中将默认编码改为了 UTF-8](https://openjdk.org/jeps/400)，但没有改动System.out和System.err的编码。

所以使用jdk17没有问题，但是在使用jdk21就会出现乱码问题。

只要在 VM options 中添加 `-Dstdout.encoding=UTF-8 -Dstderr.encoding=UTF-8` 即可设置输出流的编码。

## 参考

- [JEP 400: UTF-8 by Default (openjdk.org)](https://openjdk.org/jeps/400)
- <https://openjdk.java.net/jeps/400>
- [解决 Java 18 以上 IDEA 中文输出乱码问题（知乎）](https://zhuanlan.zhihu.com/p/641993780)
- [解决IDEA控制台中输出中文乱码并探究原因(JDK18及以上)](https://blog.csdn.net/weixin_73162741/article/details/142610044)
