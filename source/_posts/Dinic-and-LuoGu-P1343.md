---
title: dinic算法和LuoGu P1343 地震逃生
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //wsrv.nl/?url=s2.loli.net/2024/09/02/bXEcFipYq24gZ5J.jpg&h=923&w=2048&fit=cover&we
mathjax: true
date: 2024-09-02 15:04:06
tags:
    - 算法
    - 网络流
    - Dinic
    - 图论
keywords: 算法, Dinic, 网络流, 模板, 图论，最大流
description: Dinic算法和LuoGu P1343 地震逃生
---

## Dinic算法

> [Dinic](https://www.bilibili.com/video/BV1j64y1R7yK/) 算法，它由 Dinitz 在 1970 年提出。Dinic 算法可以找到网络中的最大流。Dinic 算法的时间复杂度低于 Edmonds-Karp 算法。

时间复杂度：$O(V^2E)$

(V：点数，E：边数)

### 算法介绍

- 层次图：就是把原图中的点按照点到源的距离分“层”，只保留不同层之间的边的图。
算法流程
- 算法流程
    1. 根据残量网络计算层次图（level graph）。
    2. 在层次图中使用DFS进行增广直到不存在增广路。
    3. 重复以上步骤直到无法增广。

## LuoGu P1343 地震逃生

**题目链接:**

<https://www.luogu.com.cn/problem/P1343>

### 题目描述

汶川地震发生时，四川\*\*中学正在上课，一看地震发生，老师们立刻带领 $x$ 名学生逃跑，整个学校可以抽象地看成一个有向图，图中有 $n$ 个点，$m$ 条边。$1$ 号点为教室，$n$ 号点为安全地带，每条边都只能容纳一定量的学生，超过楼就要倒塌，由于人数太多，校长决定让同学们分成几批逃生，只有第一批学生全部逃生完毕后，第二批学生才能从 $1$ 号点出发逃生，现在请你帮校长算算，每批最多能运出多少个学生，$x$ 名学生分几批才能运完。

### 输入格式

第一行三个整数 $n,m,x$；  
以下 $m$ 行，每行三个整数 $a,b,c$（$1\leq a,b\leq n$，$0\leq c\leq x$）描述一条边，分别代表从 $a$ 点到 $b$ 点有一条边，且可容纳 $c$ 名学生。

### 输出格式

两个整数，分别表示每批最多能运出多少个学生，$x$ 名学生分几批才能运完。如果无法到达目的地（$n$ 号点）则输出 `Orz Ni Jinan Saint Cow!`。

### 样例 #1

样例输入

```
6 7 7
1 2 1
1 4 2
2 3 1
4 5 1
4 3 1
3 6 2
5 6 1
```

样例输出

```
3 3
```

### 提示

**【数据范围】**

对于 $100 \%$ 的数据，$0 \le x < 2^{31}$，$1 \le n \le 200$，$1 \le m \le 2000$。

### 题解

```cpp
#include <bits/stdc++.h>

using namespace std;

using ll = long long;

static const auto _ = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return nullptr;
}();

#define INF INT_MAX

constexpr int N = 210, M = 4e3 + 10;
int n, m, tot;
int st, ed; // start, end
int d[N], cur[N];
int head[N], nxt[M], var[M], weight[M];
int idx = -1;

inline void add(const int x, const int y, const int z) {
    nxt[++idx] = head[x], head[x] = idx, var[idx] = y;
    weight[idx] = z;
}

// get level graph
inline bool bfs() {
    memset(d, -1, sizeof(int) * (ed + 1));
    d[st] = 0;
    queue<int> q;
    q.push(st);
    cur[st] = head[st]; // 当前弧的优化
    while (!q.empty()) {
        int x = q.front();
        q.pop();
        for (int i = head[x]; ~i; i = nxt[i]) {
            int y = var[i];
            // 未标明层级，且边权不为0的有效边
            if (d[y] == -1 && weight[i]) {
                d[y] = d[x] + 1;
                cur[y] = head[y]; // 当前弧的优化，find时使用
                if (y == ed) return true; // 能走到终点
                q.push(y);
            }
        }
    }
    return false; // 不能走到终点
}

// find block flow
inline int find(int x, int limit) {
    if (x == ed) return limit;
    int res = limit;
    for (int i = cur[x]; ~i; i = nxt[i]) {
        int y = var[i];
        cur[x] = i; // 当前弧的优化
        if (d[y] == d[x] + 1 && weight[i]) {
            int tmp = find(y, min(weight[i], res));
            if (!tmp) d[y] = -1; // 残枝优化
            res -= tmp;
            weight[i] -= tmp;
            weight[i ^ 1] += tmp; // 反向流
        }
    }
    return limit - res;
}

inline int dinic() {
    int res = 0, flow;
    // 如果能找到增广路
    while (bfs()) {
        while ((flow = find(st,INF))) {
            res += flow;
        }
    }
    return res;
}

int main() {
    cin >> n >> m >> tot;
    st = 1;
    ed = n;
    memset(head, -1, sizeof(int) * (ed + 1));
    for (int i = 1, a, b, c; i <= m; ++i) {
        cin >> a >> b >> c;
        add(a, b, c); // 偶数，有向边
        add(b, a, 0); // 奇数，反向边
    }
    int res = dinic(); // dinic
    if (!res) cout << "Orz Ni Jinan Saint Cow!";
    else cout << res << ' ' << (int) ceil(tot * 1.0 / res) << '\n';
    return 0;
}

```
