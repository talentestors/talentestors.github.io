---
title: 常用STL算法库汇总
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/banner/coding.jpg
mathjax: false
date: 2024-05-22 09:08:11
tags:
    - C++
    - STL
    - 算法
keywords: STL,算法
description: 本文主要汇总C++ STL算法库中常用的一些算法。
---

## shuffle 洗牌算法

重排序给定范围 [first, last] 中的元素，使得这些元素的每个排列拥有相等的出现概率。

### shuffle

#### shuffle 原型

```cpp
template< class RandomIt, class URBG >
void shuffle( RandomIt first, RandomIt last, URBG&& g );
```

#### shuffle 使用

```cpp
#include <random>   // random_device, mt19937
#include <algorithm>    // shuffle

std::shuffle(ps.begin(), ps.end(), std::random_device());

std::random_device rd;
std::mt19937 g(rd());
std::shuffle(v.begin(), v.end(), g);
```

### random_shuffle

C++14 中弃用，C++17 中移除

#### random_shuffle 原型

```cpp
template< class RandomIt >
void random_shuffle( RandomIt first, RandomIt last );

template< class RandomIt, class RandomFunc >
void random_shuffle( RandomIt first, RandomIt last, RandomFunc&& r );
```

#### random_shuffle 使用

```cpp
std::random_shuffle(ps.begin(), ps.end());
std::random_shuffle(v.begin(), v.end(), std::mt19937());
```

