---
title: 力扣新手村题412. Fizz Buzz C语言
author: stazxr
avatar: https://s3.stazxr.cn/cdn/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://static.leetcode.cn/cn-mono-assets/production/assets/logo-dark-cn.c42314a8.svg
date: 2023-02-06 12:36:27
tags:
  - LeetCode
  - C语言
keywords: LeetCode
description: 力扣新手村题412. Fizz Buzz C语言
---

## 412. Fizz Buzz

力扣链接:[Fizz Buzz](https://leetcode.cn/problems/fizz-buzz/)

给你一个整数 n ，找出从 1 到 n 各个整数的 Fizz Buzz 表示，并用字符串数组 answer（下标从 1 开始）返回结果，其中：

* `answer[i] == "FizzBuzz"`如果 i 同时是 3 和 5 的倍数。

* `answer[i] == "Fizz"` 如果 i 是 3 的倍数。

* `answer[i] == "Buzz"` 如果 i 是 5 的倍数。

* `answer[i] == i` （以字符串形式）如果上述条件全不满足。

示例 1：

     输入：n = 3
     输出：["1","2","Fizz"]
示例 2：

     输入：n = 5
     输出：["1","2","Fizz","4","Buzz"]
示例 3：

     输入：n = 15
     输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

>提示： `1 <= n <= 104`

### 代码实现

```C
#include <stdlib.h>
#include <stdio.h>

char ** fizzBuzz(int n, int* returnSize){
    *returnSize = n;//必须加的部分，表示数组的元素个数
        //不加LeetCode无法输出结果
    /*最重要的部分，需要对二级指针有一定的理解*/
    char **pChar = (char ** )malloc(n * sizeof(char *));/*等同于char *p[n];指针数组*/
    for (int i = 0; i < n; ++i)
        *(pChar+i) = (char * ) malloc(sizeof(char)*9);
       
    for (int i = 1; i <= n; ++i) {
        if (i % 15 == 0) pChar[i-1] = "FizzBuzz";
        else if (i % 3 == 0) pChar[i-1] = "Fizz";
        else if (i % 5 == 0) pChar[i-1] = "Buzz";
        else sprintf(pChar[i-1],"%d",i);
    }
    return pChar;
}
```

> 分析：
> 该题最重要的是如何使用二级指针，动态分配二维Char数组

### 知识点

#### sprintf函数

sprintf指的是字符串格式化命令,主要功能是把格式化的数据写入某个字符串中

##### `sprintf`原型

```C
int sprintf (char *__restrict, const char *__restrict, ...)
               _ATTRIBUTE ((__format__ (__printf__, 2, 3)));
```

 在本题中主要解决整数的传入字符串的问题
`sprintf(pChar[i-1],"%d",i);  //不要把一个整数对应一个“%s”`

###### 优点

* 简单方便
* 可以格式化给字符串赋值
* 可对写入字符数做出限制，防止buffer溢出

##### 返回值

如果成功，则返回写入的字符总数，不包括字符串追加在字符串末尾的空字符。如果失败，则返回一个负数。

> 总结 ：题目简单，只有二级指针和sprintf函数两个点
>
> * 适合初学者巩固基础

<hr>

> 作者本人，移植于CSDN
>
> 原文链接：<https://blog.csdn.net/m0_44950849/article/details/128112092>
>
> 于 2022-11-30 12:14:42 发布CSDN
