---
title: __builtin__系列函数
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://wsrv.nl/?url=s2.loli.net/2024/01/24/WSKY2AUHzXVL1id.png&w=1280&fit=inside&we
mathjax: false
date: 2024-01-24 16:47:56
tags:
    - __builtin__
    - C++
keywords: __builtin__ C++ 二进制
description: __builtin__位运算系列函数
---

## 内置函数系列：\_\_builtin\_\_

在C++编程中，我们经常需要进行位运算操作。为了方便处理二进制数，C++提供了一组内置函数，称为\_\_builtin\_\_系列函数。这些函数能够高效地执行一些位运算操作，使得我们可以更方便地处理二进制数据。本篇文章将介绍一些常用的\_\_builtin\_\_函数。

### 1. \_\_builtin\_popcount(x)

\_\_builtin\_popcount(x)函数用于统计一个数x的二进制表示中有多少个1。例如，对于数值x=5（二进制表示为101），\_\_builtin\_popcount(x)的返回值为2，表示二进制数中有2个1。

### 2. \_\_builtin\_clz(x)

\_\_builtin\_clz(x)函数用于统计一个数x的二进制表示中有多少个前导0。注意，这里要计算表示符号的第一位。可以将其理解为计算前导零的个数（count leading zeroes）。例如，对于数值x=8（二进制表示为1000），\_\_builtin\_clz(x)的返回值为28，表示二进制数中有28个前导0。

### 3. \_\_builtin\_ctz(x)

\_\_builtin\_ctz(x)函数用于统计一个数x的二进制表示中末尾有多少个0。可以将其理解为计算末尾零的个数（count trailing zeroes）。例如，对于数值x=16（二进制表示为10000），\_\_builtin\_ctz(x)的返回值为4，表示二进制数中有4个末尾0。

### 4. \_\_builtin\_ffs(x)

\_\_builtin\_ffs(x)函数用于统计一个数x的二进制表示中最后一个1是从后往前的第几位。例如，对于数值x=10（二进制表示为1010），\_\_builtin\_ffs(x)的返回值为2，表示二进制数中最后一个1是从后往前的第2位。

### 5. \_\_builtin\_parity(x)

\_\_builtin\_parity(x)函数用于判断一个数x的二进制表示中1的个数的奇偶性。返回值为1表示1的个数为奇数，返回值为0表示1的个数为偶数。这里的parity表示"奇偶性"。例如，对于数值x=6（二进制表示为110），\_\_builtin\_parity(x)的返回值为0，表示二进制数中1的个数为偶数。

需要注意的是，以上函数仅适用于int或unsigned int范围内的数值。如果超出此范围，需要在函数末尾加上"ll"，例如\_\_builtin\_popcount(x)应改为\_\_builtin\_popcountll(x)，在\_\_builtin\_clz(x)中也因总位数不同而答案有所不同。

另外，C++20引入了\<bit\>库，并定义了std::popcount函数，功能与\_\_builtin\_popcount相同。std::popcount函数的使用方式如下：

```cpp
template<class T>
constexpr int popcount(T x) noexcept;
```

如果你对这些函数的复杂度感兴趣，可以参考[Codeforces上关于\_\_builtin\_popcount()的复杂度证明](https://codeforces.com/blog/entry/59268?#comment-428632)。

## Tips

在使用\_\_builtin\_\_系列函数时，有几个注意事项需要注意：

平台兼容性：\_\_builtin\_\_系列函数是GCC和Clang编译器的扩展功能，因此在使用这些函数时，需要确保编译器支持这些扩展。如果你使用的是其他编译器，这些函数可能不可用或具有不同的实现方式。

优化建议：\_\_builtin\_\_系列函数通常比手动实现的位运算更高效，因为编译器可以根据硬件平台和编译选项进行优化。然而，对于一些简单的位运算操作，编译器可能会自动进行优化，因此在使用\_\_builtin\_\_函数之前，最好进行性能测试，以确定是否真正需要使用这些函数。

> 参考链接：
>
> - [C++ Reference - std::popcount](https://zh.cppreference.com/w/cpp/numeric/popcount)
