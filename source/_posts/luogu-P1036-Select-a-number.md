---
title: 洛谷 P1036 [NOIP2002 普及组] 选数
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://s1.ax1x.com/2023/09/11/pPgDxmT.png
mathjax: true
date: 2023-09-10 23:08:57
tags: 
    - C++
    - 质数筛
    - 深搜
keywords: 深搜 洛谷 C++
description: 洛谷 P1036 [NOIP2002 普及组] 选数
---

> 题目链接：<https://www.luogu.com.cn/problem/P1036>

## 题目描述

已知 $n$ 个整数 $x_1,x_2,\cdots,x_n$，以及 $1$ 个整数 $k$（$k<n$）。从 $n$ 个整数中任选 $k$ 个整数相加，可分别得到一系列的和。例如当 $n=4$，$k=3$，$4$ 个整数分别为 $3,7,12,19$ 时，可得全部的组合与它们的和为：

$3+7+12=22$
$3+7+19=29$
$7+12+19=38$
$3+12+19=34$

现在，要求你计算出和为素数共有多少种。

例如上例，只有一种的和为素数：$3+7+19=29$。

#### 输入格式

第一行两个空格隔开的整数 $n,k$（$1 \le n \le 20$，$k<n$）。

第二行 $n$ 个整数，分别为 $x_1,x_2,\cdots,x_n$（$1 \le x_i \le 5\times 10^6$）。

#### 输出格式

输出一个整数，表示种类数。

## 分析

题目要求求出，取 $k$ 个数的和为质数的，有多少种选法？

首先对于 $n$ 个数取k个数一共有 $C_n^r$ 种选法（根据排列组合）。要求出和为质数的个数，需要对和是否为质数进行判断。

### 质数筛

是一种快速“筛”出2~n之间所有素数的方法。朴素的筛法叫[埃氏筛](https://zhuanlan.zhihu.com/p/100051075)（the Sieve ofEratosthenes，埃拉托色尼筛）

**算法实现如下**

```C++
// 判断是否为素数
bool is_prime(int num) {
    for (int i = 2; i <= num / i; i++)
        if (num % i == 0) return false;
    return true;
}
```

### 深搜

采用[深搜](http://data.biancheng.net/view/325.html)来遍历每个组合

## C++完整代码实现

```C++
#include <vector>
#include <iostream>
#include <bits/stdc++.h>

using namespace std;

// 判断是否为素数
bool is_prime(int num) {
    for (int i = 2; i <= num / i; i++)
        if (num % i == 0) return false;
    return true;
}

// 求和函数
int sum(vector<int> nums) {
    int tmp = 0;
    for (int num: nums) {
        tmp += num;
    }
    return tmp;
}

vector<int> knum; // 记录数字组合
vector<bool> nxt; // 记录数字是否已经被访问
int n, k;
int cnt = 0; // count

// dfs 深搜，函数递归层数为 k + 1
void dfs(int *nums, int size,int statu) {
    if (size == k) {
        if (is_prime(sum(knum))) ++cnt;
        return;
    }
    for (int i = statu; i < n; ++i) {
        if (nxt[i]) continue;
        knum[size] = nums[i];
        nxt[i] = true;
        dfs(nums, size + 1,i);
        nxt[i] = false;
    }
}

int main() {
    cin >> n >> k;
    int nums[n];
    for (int i = 0; i < n; ++i) {
        cin >> nums[i];
    }
    nxt.resize(n, false);
    knum.resize(k);
    dfs(nums, 0,0);
    cout << cnt;
    return 0;
}
```

{% fb_img https://s1.ax1x.com/2023/09/11/pPgDOlq.md.png AC %}
