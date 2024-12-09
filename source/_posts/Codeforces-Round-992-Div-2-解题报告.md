---
title: Codeforces Round 992 (Div. 2) 解题报告
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //wsrv.nl/?url=img2024.cnblogs.com/blog/3092919/202412/3092919-20241209134147291-1034749257.png&we
mathjax: true
date: 2024-12-09 14:30:49
tags: 
    - 题解
    - 算法
    - CodeForces
    - Div.2
    - C/CPP
keywords: 题解, 算法, CodeForces, Div.2, C/CPP, A. Game of Division, B. Paint a Strip, C. Ordered Permutations
description: Codeforces Round 992 (Div. 2) 解题报告：A. Game of Division, B. Paint a Strip, C. Ordered Permutations
---

> [比赛地址: https://codeforces.com/contest/2040](https://codeforces.com/contest/2040)

## A. Game of Division

### 题目

<https://codeforces.com/contest/2040/problem/A>

### 题意

给你一个长度为 $n$ 的整数数组 $a_1, a_2, \ldots, a_n$ 和一个整数数组 $k$ 。

两个玩家正在玩一个游戏。第一个玩家选择一个索引 $1 \le i \le n$ 。然后第二个玩家选择不同的索引 $1 \le j \le n, i \neq j$ 。如果 $|a_i - a_j|$ 不能被 $k$ 整除，则第一个玩家获胜。否则，第二位棋手获胜。

我们扮演第一个玩家。确定是否可能获胜，如果可能，应该选择哪个索引 $i$ 。

数字 $x$ 的绝对值用 $|x|$ 表示，如果是 $x \ge 0$ ，则等于 $x$ ，否则等于 $-x$ 。

### 思路

模拟

### AC代码

<details>
<summary>点击查看代码</summary>

```cpp
#define _USE_MATH_DEFINES // To use the definition of cmath

#include <bits/stdc++.h>

using namespace std;

using ll = long long;
using ld = long double;
using ull = unsigned long long;

// mp.reserve(1024), mp.max_load_factor(0.75);
// Used only for basic types, pair and tuple.
template<typename T>
struct custom_hash_base {
    size_t operator()(const T& x) const {
        static const size_t seed = chrono::steady_clock::now().time_since_epoch().count();
        return _Hash_bytes(&x, sizeof(x), seed);
    }
};

static const auto _ = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
#ifndef ONLINE_JUDGE
    freopen("../in.txt", "r", stdin);
#endif
    return nullptr;
}();

int nums[101], k;
int n;
int st[101];

inline void solve() {
    cin >> n >> k;
    memset(st, 0, sizeof(int) * (k + 1));
    for (int i = 1; i <= n; ++i) {
        cin >> nums[i];
    }
    for (int i = 1; i <= n; ++i) {
        bool flag = true;
        for (int j = 1; j <= n && flag; ++j) {
            if (i == j) continue;
            if (abs(nums[i] - nums[j]) % k == 0) flag = false;
        }
        if (flag) {
            cout << "YES\n" << i << "\n";
            return;
        }
    }
    cout << "NO\n";
}

int main() {
    int T;
    for (cin >> T; T > 0; --T) {
        solve();
    }
    return 0;
}
```
</details>

## B. Paint a Strip

### 题目

<https://codeforces.com/contest/2040/problem/B>

### 题意

您有一个长度为 $n$ 的零数组 $a_1, a_2, \ldots, a_n$ 。

你可以对它进行两种操作：

1.  在 $1 \le i \le n$ 和 $a_i = 0$ 之间选择一个索引 $i$ ，并将 $1$ 赋值给 $a_i$ ；
2.  选择一对索引 $l$ 和 $r$ ，使得 $1 \le l \le r \le n$ ， $a_l = 1$ ， $a_r = 1$ ， $a_l + \ldots + a_r \ge \lceil\frac{r - l + 1}{2}\rceil$ ，并将所有 $l \le i \le r$ 的 $1$ 赋值给 $a_i$ 。

要使数组中的所有元素都等于 1，至少需要进行多少次第一种类型的运算？

### 思路

第 $i$ 次第一种类型的运算，可覆盖的最大范围为第 $i - 1$ 次的范围加1，再乘2。

先初始化每一个i的范围，再二分查找。

### AC代码

<details>
<summary>点击查看代码</summary>

```cpp
#define _USE_MATH_DEFINES // To use the definition of cmath

#include <bits/stdc++.h>

using namespace std;

using ll = long long;
using ld = long double;
using ull = unsigned long long;

// mp.reserve(1024), mp.max_load_factor(0.75);
// Used only for basic types, pair and tuple.
template<typename T>
struct custom_hash_base {
    size_t operator()(const T& x) const {
        static const size_t seed = chrono::steady_clock::now().time_since_epoch().count();
        return _Hash_bytes(&x, sizeof(x), seed);
    }
};

static const auto _ = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
#ifndef ONLINE_JUDGE
    freopen("../in.txt", "r", stdin);
#endif
    return nullptr;
}();

int n;
constexpr int N = 20;
ll st[N];

static const auto init= []() {
    st[1] = 1;
    for (int i = 2; i < N; ++i) {
        st[i] = (st[i - 1] + 1) << 1;
    }
    return 0;
}();

inline void solve() {
    cin >> n;
    int p = lower_bound(st + 1, st + N, n) - st - 1;
    while (st[p] < n) ++p;
    cout << p << '\n';
}

int main() {
    int T;
    for (cin >> T; T > 0; --T) {
        solve();
    }
    return 0;
}
```
</details>

## C. Ordered Permutations

### 题目

<https://codeforces.com/contest/2040/problem/C>

- *time limit per test: 2 seconds*
- *memory limit per test: 256 megabytes*
- *input: standard input*
- *output: standard output*

Consider a permutation$^{\text{∗}}$ $p_1, p_2, \ldots, p_n$ of integers from $1$ to $n$. We can introduce the following sum for it$^{\text{†}}$:

$$
S(p) = \sum_{1 \le l \le r \le n} \min(p_l, p_{l + 1}, \ldots, p_r)
$$

Let us consider all permutations of length $n$ with the maximum possible value of $S(p)$. Output the $k$\-th of them in lexicographical$^{\text{‡}}$order, or report that there are less than $k$ of them.

$^{\text{∗}}$A permutation of length $n$ is an array consisting of $n$ distinct integers from $1$ to $n$ in arbitrary order. For example, $[2,3,1,5,4]$ is a permutation, but $[1,2,2]$ is not a permutation ($2$ appears twice in the array), and $[1,3,4]$ is also not a permutation ($n=3$ but there is $4$ in the array).

$^{\text{†}}$For example:

-   For the permutation $[1, 2, 3]$ the value of $S(p)$ is equal to $\min(1) + \min(1, 2) + \min(1, 2, 3) + \min(2) + \min(2, 3) + \min(3) =$ $1 + 1 + 1 + 2 + 2 + 3 = 10$
-   For the permutation $[2, 4, 1, 3]$ the value of $S(p)$ is equal to $\min(2) + \min(2, 4) + \min(2, 4, 1) + \min(2, 4, 1, 3) \ +$ $ \min(4) + \min(4, 1) + \min(4, 1, 3) \ +$  $\min(1) + \min(1, 3) \ +$ $\min(3) =$ $2 + 2 + 1 + 1 + 4 + 1 + 1 + 1 + 1 + 3 = 17$.

$^{\text{‡}}$An array $a$ is lexicographically smaller than an array $b$ if and only if one of the following holds:

-   $a$ is a prefix of $b$, but $a \ne b$; or
-   in the first position where $a$ and $b$ differ, the array $a$ has a smaller element than the corresponding element in $b$.

**Input**

Each test contains multiple test cases. The first line contains the number of test cases $t$ ($1 \le t \le 10^4$). The description of the test cases follows.

The only line of each test case contains two integers $n$ and $k$ ($1 \le n \le 2 \cdot 10^5$; $1 \le k \le 10^{12}$) — the length of the permutation and the index number of the desired permutation.

It is guaranteed that the sum of $n$ over all test cases does not exceed $2 \cdot 10 ^ 5$.

**Output**

For each test case, if there are less than $k$ suitable permutations, print $-1$.

Otherwise, print the $k$\-th suitable permutation.

**Example**

<details>
<summary>点击查看测试样例</summary>

**Input**

```
6
3 2
3 3
4 11
4 6
6 39
7 34
```

**Output**

```
1 3 2
2 3 1
-1
2 4 3 1
-1
2 3 4 5 7 6 1
```

</details>

**Note**

Let us calculate the required sum for all permutations of length $3$ (ordered lexicographically):

| Permutation | Value of $S(p)$ |
|  --- | ---  |
| $[1, 2, 3]$ | $10$ |
| $[1, 3, 2]$ | $10$ |
| $[2, 1, 3]$ | $9$ |
| $[2, 3, 1]$ | $10$ |
| $[3, 1, 2]$ | $9$ |
| $[3, 2, 1]$ | $10$ |

In the first test case, you have to print the second suitable permutation of length $3$. Looking at the table, we see that it is the permutation $[1, 3, 2]$.

In the second test case, you have to print the third suitable permutation of length $3$. Looking at the table, we see that it is the permutation $[2, 3, 1]$.

### 题意

考虑从 $1$ 到 $n$ 的整数 $^{\text{∗}}$ 的排列。从 $1$ 到 $n$ 的整数的排列组合 $p_1, p_2, \ldots, p_n$ 。我们可以为它引入下面的和 $^{\text{†}}$ ：

$$
S(p) = \sum_{1 \le l \le r \le n} \min(p_l, p_{l + 1}, \ldots, p_r)
$$

让我们考虑所有长度为 $n$ 的排列，其最大可能值为 $S(p)$ 。按词典 $^{\text{‡}}$ 顺序输出其中的第 $k$ 个，或者报告它们的数量少于 $k$ 。

$^{\text{∗}}$ 长度为 $n$ 的排列是由 $n$ 个不同的整数组成的数组，这些整数从 $1$ 到 $n$ 按任意顺序排列。例如， $[2,3,1,5,4]$ 是一个排列，但 $[1,2,2]$ 不是一个排列（ $2$ 在数组中出现了两次）， $[1,3,4]$ 也不是一个排列（ $n=3$ ，但数组中有 $4$ ）。

$^{\text{†}}$ 例如

- 对于 $[1, 2, 3]$ 这个排列， $S(p)$ 的值等于 $\min(1) + \min(1, 2) + \min(1, 2, 3) + \min(2) + \min(2, 3) + \min(3) =$ 。 $1 + 1 + 1 + 2 + 2 + 3 = 10$
- 对于排列 $[2, 4, 1, 3]$ 来说， $S(p)$ 的值等于 $\min(2) + \min(2, 4) + \min(2, 4, 1) + \min(2, 4, 1, 3) \ +$ $ \min(4) + \min(4, 1) + \min(4, 1, 3) \ +$ 。  $\min(1) + \min(1, 3) \ +$ $\min(3) =$ $2 + 2 + 1 + 1 + 4 + 1 + 1 + 1 + 1 + 3 = 17$ .

$^{\text{‡}}$ 当且仅当以下条件之一成立时，数组 $a$ 的lexicographically小于数组 $b$ ：

- $a$ 是 $b$ 的前缀，但是 $a \ne b$ ；或者
- 在 $a$ 和 $b$ 不同的第一个位置，数组 $a$ 中的元素小于 $b$ 中的相应元素。

**输入**

每个测试包含多个测试用例。第一行包含测试用例的数量 $t$ ( $1 \le t \le 10^4$ )。测试用例说明如下。

每个测试用例的唯一一行包含两个整数 $n$ 和 $k$ （ $1 \le n \le 2 \cdot 10^5$ ；{47522742}）。( $1 \le n \le 2 \cdot 10^5$ ; $1 \le k \le 10^{12}$ ) - 排列的长度和所需排列的索引号。

保证所有测试用例中 $n$ 的总和不超过 $2 \cdot 10 ^ 5$ 。

**输出**

对于每个测试用例，如果合适的排列组合少于 $k$ ，则打印 $-1$ 。

否则，打印 $k$ 个合适的排列。

备注

让我们计算所有长度为 $3$ （按词典顺序排列）的排列所需的和：

| Permutation | $S(p)$ 的值 |
| --- | --- |
| $[1, 2, 3]$ | $10$ |
| $[1, 3, 2]$ | $10$ |
| $[2, 1, 3]$ | $9$ |
| $[2, 3, 1]$ | $10$ |
| $[3, 1, 2]$ | $9$ |
| $[3, 2, 1]$ | $10$ |

在第一个测试用例中，您必须打印长度为 $3$ 的第二个合适的排列。观察表格，我们会发现是长度为 $[1, 3, 2]$ 的排列。

在第二个测试用例中，您必须打印长度为 $3$ 的第三个合适的排列。观察表格，我们会发现是长度为 $[2, 3, 1]$ 的排列。

### 思路

通过打表，可以观察到。**值为最大的 $S(p)$ 排列的数量**为 $2^{n - 1}$。

所以只要**值为最大的 $S(p)$ 排列的数量**不超过 $k$ 则有解，否则输出 -1

*这里给出 $n$ 为 5 的情况：*

```
 1: 1 2 3 4 5 = 35

 2: 1 2 3 5 4 = 35

 3: 1 2 4 5 3 = 35
 4: 1 2 5 4 3 = 35

 5: 1 3 4 5 2 = 35
 6: 1 3 5 4 2 = 35
 7: 1 4 5 3 2 = 35
 8: 1 5 4 3 2 = 35

 9: 2 3 4 5 1 = 35
10: 2 3 5 4 1 = 35
11: 2 4 5 3 1 = 35
12: 2 5 4 3 1 = 35
13: 3 4 5 2 1 = 35
14: 3 5 4 2 1 = 35
15: 4 5 3 2 1 = 35
16: 5 4 3 2 1 = 35
```

假设 $k$ 取 7：0b0111

会发现 7 是从 3：0b0011 的后 3 位，往前挪动 1 位形成的。

而 3 是从 1：0b0001 的后两位，往前挪动 1 位形成的。

同样的 4：0b0100 是以同样的方式从 2:0b0010 转移过来的。

---

得出结论：第 $k$ 个排列是第 prev_k（把 $k$ 移除二进制的最高位，如果二进制bit 1的个数为1则左移1位）个排列的后 m（k 二进制的最左边1的位置） 位往前挪动1位形成的。

### AC代码

<details>
<summary>点击查看代码</summary>

```cpp
#define _USE_MATH_DEFINES // To use the definition of cmath

#include <bits/stdc++.h>

using namespace std;

using ll = long long;
using ld = long double;
using ull = unsigned long long;

// mp.reserve(1024), mp.max_load_factor(0.75);
// Used only for basic types, pair and tuple.
template<typename T>
struct custom_hash_base {
    size_t operator()(const T& x) const {
        static const size_t seed = chrono::steady_clock::now().time_since_epoch().count();
        return _Hash_bytes(&x, sizeof(x), seed);
    }
};

static const auto _ = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
#ifndef ONLINE_JUDGE
    freopen("../in.txt", "r", stdin);
#endif
    return nullptr;
}();

ll n, k;

inline ll get_next(ll x) {
    --x;
    x |= x >> 1;
    x |= x >> 2;
    x |= x >> 4;
    x |= x >> 8;
    x |= x >> 16;
    x |= x >> 32;
    ++x;
    return x;
}

inline void dfs(ll ck, vector<ll>& v) {
    if (ck <= 1)
        return;
    if (__builtin_popcountll(ck) == 1)
        dfs(ck >> 1, v);
    else
        dfs(ck - (get_next(ck) >> 1), v);
    ck = get_next(ck);
    int i = 64 - __builtin_clzll(ck) - 1;
    ll x = v[i];
    v.erase(v.begin() + i);
    v.insert(v.begin(), x);
}

inline void solve() {
    cin >> n >> k;
    const int ci = 64 - __builtin_clzll(get_next(k));
    if (n < ci) {
        cout << -1 << '\n';
        return;
    }
    vector<ll> v(n);
    iota(v.rbegin(), v.rend(), 1LL);
    dfs(k, v);
    ranges::reverse(v);
    ranges::copy(v, ostream_iterator<ll>(cout, " "));
    cout << '\n';
}

int main() {
    int T;
    for (cin >> T; T > 0; --T) {
        solve();
    }
    return 0;
}
```

</details>
