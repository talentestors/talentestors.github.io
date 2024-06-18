---
title: P3517 [POI2011] WYK-Plot
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //wsrv.nl/?url=i0.hdslb.com/bfs/new_dyn/d9074a3c0573f89de45c05212cb44efd508103429.png@.webp&h=860&w=1625&fit=cover&a=top&we
mathjax: true
date: 2024-06-18 19:47:27
tags:
    - 计算几何
    - 随机增量法
    - 二分套二分
keywords: POI2011, WYK-Plot, 计算几何, 随机增量法, 最小圆覆盖, 二分
description: POI2011 WYK-Plot 计算几何
---

## [P3517 [POI2011] WYK-Plot](https://www.luogu.com.cn/problem/P3517)

[原题链接](https://www.luogu.com.cn/problem/P3517)

### 题目描述

We call any sequence of points in the plane a plot.

We intend to replace a given plot $(P_1,\cdots,P_n)$ with another that will    have at most $m$ points ($m\le n$) in such a way that it "resembles" the    original plot best.

The new plot is created as follows. The sequence of points $P_1,\cdots,P_n$ can be partitioned into $s$ ($s\le m$) contiguous subsequences:

$(P_{k_0+1},\cdots,P_{k_1}),(P_{k_1+1},\cdots,P_{k_2}),\cdots,(P_{k_{s-1}+1},\cdots,P_{k_s})$ where $0=k_0<k_1<k_2<\cdots<k_s=n$,and afterwards each subsequence $(P_{k_{i-1}+1},\cdots,P_{k_i})$, for $i=1,\cdots,s$,is replaced by a new point $Q_i$.

In that case we say that each of the points $P_{k_{i-1}+1},\cdots,P_{k_i}$ has been contracted to the point $Q_i$.

As a result a new plot, represented by the points $Q_1,\cdots,Q_s$, is created.

The measure of such plot's resemblance to the original is the maximum distance of all the points $P_1,\cdots,P_n$ to the point it has been contracted to:

$max_{i=1,\cdots,s}(max_{j=k_{i-1}+1,\cdots,k_i}(d(P_j,Q_i)))$    where $d(P_j,Q_i)$ denotes the distance between $P_j$ and $Q_i$, given by the well-known formula:

$d((x_1,y_1),(x_2,y_2))=\sqrt{(x_2-x_1)^2 +(y_2-y_1)^2}$

![luogu](https://cdn.luogu.com.cn/upload/pic/6975.png)

An exemplary plot $P_1,\cdots,P_7$ and the new plot $(Q_1,Q_2)$, where $(P_1,\cdots,P_4)$ are contracted to $Q_1$, whereas $(P_5,P_6,P_7)$ to $Q_2$.

For a given plot consisting of $n$ points, you are to find the plot that    resembles it most while having at most $m$ points,    where the partitioning into contiguous subsequences is arbitrary.

Due to limited precision of floating point operations, a result is deemed    correct if its resemblance to the given plot is larger than the optimum    resemblance by at most $0.000001$.

给定n个点，要求把n个点分成不多于m段，使得求出每段的最小覆盖圆的半径后，最大的半径最小。

### 输入格式

In the first line of the standard input there are two integers $n$ and $m$,      $1\le m\le n\le 100\ 000$, separated by a single space.

Each of the following $n$ lines holds two integers, separated by a single space.

The $(i+1)$-th line gives $x_i$,$y_i$,$-1\ 000\ 000\le x_i,y_i\le 1\ 000\ 000$ denoting the coordinates $(x_i,y_i)$ of the point $P_i$.

### 输出格式

In the first line of the standard output one real number $d$ should be printed out,      the resemblance measure of the plot found to the original one.

In the second line of the standard output there should be another integer $s$, $1\le s\le m$.

Next, the following $s$ lines should specify the coordinates of the points $Q_1,\cdots,Q_s$,one point per line.

Thus the $(i+2)$-th line should give two real numbers $u_i$ and $v_i$,      separated by a single space, that denote the coordinates $(u_i,v_i)$ of the point $Q_i$.All the real numbers should be printed with at most 15 digits after the decimal point.

### 样例 #1

#### 样例输入 #1

```text
7 2
2 0
0 4
4 4
4 2
8 2
11 3
14 2
```

#### 样例输出 #1

```text
3.00000000
2
2.00000000 1.76393202
11.00000000 1.99998199
```

### 提示

给定n个点，要求把n个点分成不多于m段，使得求出每段的最小覆盖圆的半径后，最大的半径最小。

## 题目大意

1.题意：给一个有 $n$ 个元素的点集，要求把n个点划分成不多于m个子集，使得求出每点集的最小覆盖圆的半径后，使得最大的半径最小。

## 解题思路

采取二分答案的思路，对圆半径进行二分答案，然后对于每个圆半径，我们可以采取[随机增量法](https://oi-wiki.org/geometry/random-incremental/)，随机增量法是一种求解最小圆覆盖的方法，其思路是随机选取一个点，然后遍历所有点，如果有点不在圆内，那么就更新圆心，然后再次遍历所有点，如果有点不在圆内，那么就更新圆心和半径，然后再次遍历所有点，如果有点不在圆内，那么就更新圆心和半径，这样就可以求出最小圆覆盖的圆心和半径。

> 不会随机增量法的先去做[最小圆覆盖](https://www.luogu.com.cn/problem/P1742)

check 函数用于判断是否可以将所有点分成不多于 m 个子集，使得求出每个子集的最小覆盖圆的半径后，最大的半径不超过 lim。

check 函数内部，同样使用二分答案，对于每个子集，使用随机增量法求出最小圆覆盖的圆心和半径，然后判断是否满足条件。

```cpp
bool check(ld lim) {
    cnt = 0;
    int ans;
    for (int i = 1; i <= n; i = ans + 1) {
        int k;
        for (k = 1; i + (1 << k) - 1 <= n; ++k) {
            random_increment(i, i + (1 << k) - 1);
            if (d > lim + eps) break;
        }
        ans = i;
        int l = i + (1 << (k - 1)) - 1, r = min(n, i + (1 << k) - 1);
        while (l <= r) {
            int mid = (l + r) >> 1;
            random_increment(i, mid);
            if (d < lim + eps) l = mid + 1, ans = mid;
            else r = mid - 1;
        }
        ++cnt;
        res[cnt][0] = i, res[cnt][1] = ans;
        if (cnt > m) return false;
    }
    return true;
}
```

## 代码

```cpp
#include <iostream>
#include <algorithm>
#include <cmath>
#include <random>
#include <iomanip>

using namespace std;

using ld = long double;

struct node {
    ld x, y;

    inline ld length() const {
        return fabs(pow(x, 2) + pow(y, 2));
    }

    inline void transfer() {
        x = -x;
        swap(x, y);
    }

    node operator/(ld v) const { return node{x / v, y / v}; }

    node operator*(ld v) const { return node{x * v, y * v}; }

    friend node operator+(node &n1, node &n2) { return node{n1.x + n2.x, n1.y + n2.y}; }

    friend node operator+(node &n1, node &&n2) { return node{n1.x + n2.x, n1.y + n2.y}; }

    friend node operator-(node &n1, node &n2) { return node{n1.x - n2.x, n1.y - n2.y}; }

    friend node operator*(node &n1, node &n2) { return node{n1.x * n2.x, n1.y * n2.y}; }
};

inline ld dis(node &p1, node &p2) {
    return sqrt((p1 - p2).length());
}

inline ld cross(const node &p1, node &p2) {
    return (p1.x * p2.y) - (p1.y * p2.x);
}

inline node get_circle(node &p1, node &p2) {
    return (p1 + p2) / 2.0;
}

inline node get_circle(node &p1, node &p2, node &p3) {
    node v1 = p2 - p1, v2 = p3 - p1;
    v1.transfer(), v2.transfer();
    node m1 = (p1 + p2) / 2.0, m2 = (p1 + p3) / 2.0;
    ld t = cross(m2 - m1, v2) / cross(v1, v2);
    return m1 + (v1 * t);
}

const ld eps = 1e-10;
const int N = 1e5 + 5;
int n, m, cnt;
int res[N][2];
node v[N], ps[N];
node o{};
ld d;
random_device rd;
mt19937 g(rd());

// 随机增量
inline void random_increment(int l, int r) {
    copy(ps + l, ps + r + 1, v);
    int len = r + 1 - l;
    shuffle(v, v + len, g);
    o = v[0], d = 0;
    for (int i = 0; i < len; ++i) {
        if (dis(o, v[i]) > d + eps) {
            o = v[i], d = 0;
            for (int j = 0; j < i; ++j) {
                if (dis(o, v[j]) > d + eps) {
                    o = get_circle(v[i], v[j]);
                    d = dis(o, v[j]);
                    for (int k = 0; k < j; ++k) {
                        if (dis(o, v[k]) > d + eps) {
                            o = get_circle(v[i], v[j], v[k]);
                            d = dis(o, v[i]);
                        }
                    }
                }
            }
        }
    }
}

bool check(ld lim) {
    cnt = 0;
    int ans;
    for (int i = 1; i <= n; i = ans + 1) {
        int k;
        for (k = 1; i + (1 << k) - 1 <= n; ++k) {
            random_increment(i, i + (1 << k) - 1);
            if (d > lim + eps) break;
        }
        ans = i;
        int l = i + (1 << (k - 1)) - 1, r = min(n, i + (1 << k) - 1);
        while (l <= r) {
            int mid = (l + r) >> 1;
            random_increment(i, mid);
            if (d < lim + eps) l = mid + 1, ans = mid;
            else r = mid - 1;
        }
        ++cnt;
        res[cnt][0] = i, res[cnt][1] = ans;
        if (cnt > m) return false;
    }
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    cin >> n >> m;
    for (int i = 1; i <= n; ++i) {
        cin >> ps[i].x >> ps[i].y;
    }
    random_increment(1, n);
    ld l = 0, r = d;
    if (m > 1) {
        while (r - l > eps) {
            ld mid = (l + r) / 2.0;
            if (check(mid)) r = mid;
            else l = mid;
        }
    }
    check(r);
    cout << fixed << setprecision(8);
    cout << r << '\n' << cnt << '\n';
    for (int i = 1; i <= cnt; ++i) {
        random_increment(res[i][0], res[i][1]);
        cout << o.x << ' ' << o.y << '\n';
    }
    return 0;
}
```

## 复杂度分析

时间复杂度：$O(n\log^2n)$

## 相关库和函数

- [random_device](https://zh.cppreference.com/w/cpp/algorithm/random_shuffle)
- [mt19937](https://zh.cppreference.com/w/cpp/numeric/random/mersenne_twister_engine)
- [shuffle](https://www.cplusplus.com/reference/algorithm/shuffle/)

- [#include <random>](https://zh.cppreference.com/w/cpp/header/random)
- [#include <iomanip>](https://zh.cppreference.com/w/cpp/header/iomanip)
