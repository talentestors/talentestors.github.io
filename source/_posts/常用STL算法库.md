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
date: 2024-010-8 11:16:11
tags:
    - C++
    - STL
    - 算法
keywords: STL,算法
description: 本文主要汇总C++ STL算法库中常用的一些算法。
---

## shuffle 洗牌算法

重排序给定范围 [first, last] 中的元素，使得这些元素的每个排列拥有相等的出现概率。

### [shuffle](https://zh.cppreference.com/w/cpp/algorithm/random_shuffle)

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

## itoa 整数转字符串

将整数转换为字符串。

（1）【头文件】`#include <cstdlib>`

（2）【函数原型】`char *itoa(int value, char *string, int radix);`

（3）【参数说明】

- value：要转换的数据。
- string：目标字符串的地址。
- radix：转换后的进制数，可以是10进制、16进制等，范围必须在 2-36。

```cpp
#include <iostream>
#include <cstdlib>
using namespace std;

int main(){
    int num = 100;
    char str[25];
    itoa(num, str, 10);
    cout << str; //输出100 
    return 0;
}
```

itoa并不是一个标准的C函数，它是Windows特有的，如果要写跨平台的程序，需要用sprintf。C标准库中有sprintf，功能比这个更强，用法跟printf类似：

```cpp
char str[255];
sprintf(str, "%x", 100); //将100转为16进制表示的字符串。
```

## atoi 字符串转整数

将字符串转换为整数。

<https://zh.cppreference.com/w/cpp/string/byte/atoi>

（1）【头文件】#include \<stdlib.h>

（2）【函数原型】int atoi (const char * str);

（3）【函数说明】atoi() 函数会扫描参数 str 字符串，跳过前面的空白字符（例如空格，tab缩进等），直到遇上数字或正负符号才开始做转换，而再遇到 非数字 或 字符串结束时(’\0’) 才结束转换，并将结果返回。函数返回转换后的整型数；如果 str 不能转换成 int 或者 str 为空字符串，那么将返回 0。

```cpp
#include <iostream>
#include <cstdlib>
using namespace std;

int main(){
    const char *s = " 134";
    int num = atoi(s);
    cout << num; //输出：134 
    return 0;
}
```

## strstr() 字符串查找

在字符串中查找子串。

C 库函数 char *strstr(const char *haystack, const char *needle) 在字符串 haystack 中查找第一次出现字符串 needle 的位置，不包含终止符 '\0'。

```cpp  
#include <stdio.h>
#include <string.h>
 
int main()
{
   const char haystack[20] = "RUNOOB";
   const char needle[10] = "NOOB";
   char *ret;
 
   ret = strstr(haystack, needle);
 
   printf("子字符串是： %s\n", ret);
   
   return(0);
}
```

## strncmp() 字符串字典序比较

- str1 -- 要进行比较的第一个字符串。
- str2 -- 要进行比较的第二个字符串。
- n -- 要比较的最大字符数。

该函数返回值如下：

- 如果返回值 < 0，则表示 str1 小于 str2。
- 如果返回值 > 0，则表示 str1 大于 str2。
- 如果返回值 = 0，则表示 str1 等于 str2。

```cpp
#include <stdio.h>
#include <string.h>

int main () {
   char str1[15];
   char str2[15];
   int ret;

   strcpy(str1, "abcdef");
   strcpy(str2, "ABCDEF");

   ret = strncmp(str1, str2, 4);

   if(ret < 0) {
      printf("str1 小于 str2");
   }
   else if(ret > 0) {
      printf("str2 小于 str1");
   } else {
      printf("str1 等于 str2");
   }
   return(0);
}
```

## tr1/unordered_set tr1/unordered_map

> 自 C++11 标准起，四种基于 哈希 实现的无序关联式容器正式纳入了 C++ 的标准模板库中，分别是：unordered_set，unordered_multiset，unordered_map，unordered_multimap。

### 编译器不支持 C++11 的使用方法

在 C++11 之前，无序关联式容器属于 C++ 的 TR1 扩展。所以，如果编译器不支持 C++11，在使用时需要在头文件的名称中加入 tr1/ 前缀，并且使用 std::tr1 命名空间。如 #include \<unordered_map> 需要改成 #include \<tr1/unordered_map>；std::unordered_map 需要改为 std::tr1::unordered_map（如果使用 using namespace std;，则为 tr1::unordered_map）。

### 自定义哈希函数

```cpp
struct my_hash {
  static uint64_t splitmix64(uint64_t x) {
    x += 0x9e3779b97f4a7c15;
    x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
    x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
    return x ^ (x >> 31);
  }

  size_t operator()(uint64_t x) const {
    static const uint64_t FIXED_RANDOM =
        chrono::steady_clock::now().time_since_epoch().count();
    return splitmix64(x + FIXED_RANDOM);
  }

  // 针对 std::pair<int, int> 作为主键类型的哈希函数
  size_t operator()(pair<uint64_t, uint64_t> x) const {
    static const uint64_t FIXED_RANDOM =
        chrono::steady_clock::now().time_since_epoch().count();
    return splitmix64(x.first + FIXED_RANDOM) ^
           (splitmix64(x.second + FIXED_RANDOM) >> 1);
  }
};
```

写完自定义的哈希函数后，就可以通过 `unordered_map<int, int, my_hash> my_map;` 或者 `unordered_map<pair<int, int>, int, my_hash> my_pair_map;` 的定义方式将自定义的哈希函数传入容器了。

> ```cpp
> unordered_map<il, int> numbers;
> // 调负载因子和预留空间，防止hash冲突导致的性能下降
> numbers.reserve(1024), numbers.max_load_factor(0.75);
> ```

## next_permutation 全排列

全排列是一种经典的组合数学问题，给定一个数字集合，求这个数字集合的所有排列。

### [next_permutation](https://zh.cppreference.com/w/cpp/algorithm/next_permutation)

#### next_permutation 原型

```cpp
template< class BidirIt >
bool next_permutation( BidirIt first, BidirIt last );
```

#### next_permutation 使用

```cpp
#include <algorithm>    // next_permutation

std::vector<int> v = {1, 2, 3};
do {
    for (int i : v) {
        std::cout << i << ' ';
    }
    std::cout << '\n';
} while (std::next_permutation(v.begin(), v.end()));
} while (std::next_permutation(v.begin(), v.end()));
```

### prev_permutation 上一个排列

#### prev_permutation 原型

```cpp
template< class BidirIt >
bool prev_permutation( BidirIt first, BidirIt last );
```

#### prev_permutation 使用

```cpp
#include <algorithm>    // prev_permutation

std::vector<int> v = {3, 2, 1};
do {
    for (int i : v) {
        std::cout << i << ' ';
    }
    std::cout << '\n';
} while (std::prev_permutation(v.begin(), v.end()));
```

## bitset 位运算

std::bitset 是标准库中的一个存储 0/1 的大小不可变容器。严格来讲，它并不属于 STL。

### [bitset](https://zh.cppreference.com/w/cpp/utility/bitset)

- count(): 返回 true 的数量。
- size(): 返回 bitset 的大小。
- test(pos): 它和 vector 中的 at() 的作用是一样的，和 [] 运算符的区别就是越界检查。
- any(): 若存在某一位是 true 则返回 true，否则返回 false。
- none(): 若所有位都是 false 则返回 true，否则返回 false。
- all(): 若所有位都是 true 则返回 true，否则返回 false。
- set(): 将整个 bitset 设置成 true。
- set(pos, val = true): 将某一位设置成 true/false。
- reset(): 将整个 bitset 设置成 false。
- reset(pos): 将某一位设置成 false。相当于 set(pos, false)。
- flip(): 翻转每一位。（0\leftrightarrow1，相当于异或一个全是 1 的 bitset）
- flip(pos): 翻转某一位。
- to_string(): 返回转换成的字符串表达。
- to_ulong(): 返回转换成的 unsigned long 表达（long 在 NT 及 32 位 POSIX 系统下与 int 一样，在 64 位 POSIX 下与 long long 一样）。
- to_ullong():（C++11 起）返回转换成的 unsigned long long 表达。

## accumulate 和 reduce 累计

```cpp
vector<ll> v(10);
for (int i = 0; i < 10; i++) {
    v[i] = i + 1;
}
cout << accumulate(v.begin(), v.end(), 0) << endl;
cout << reduce(v.begin(), v.end(), 0) << endl;
```

## max_element, min_element

求最值

## reverse反转序列

```cpp
reverse(v.begin(), v.end());
```

## nth_element 部分排序算法

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
 
int main()
{
    std::vector<int> v{5, 6, 4, 3, 2, 6, 7, 9, 3};
 
    std::nth_element(v.begin(), v.begin() + v.size()/2, v.end());
    std::cout << "The median is " << v[v.size()/2] << '\n';
 
    std::nth_element(v.begin(), v.begin()+1, v.end(), std::greater<int>());
    std::cout << "The second largest element is " << v[1] << '\n';
}
```

## lower_bound, upper_bound

二分查找

```cpp
lower_bound(v.begin(), v.end(), 20, cmp)
upper_bound(v.begin(), v.end(), 20, cmp)
```

## partial_sum adjacent_difference 部分和与部分差

```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    std::vector<int> p(v.size());
    std::vector<int> d(v.size());
    std::partial_sum(v.begin(), v.end(), p.begin());
    std::adjacent_difference(v.begin(), v.end(), d.begin());
    for (int i : p) {
        std::cout << i << ' ';
    }
    std::cout << '\n';
    for (int i : d) {
        std::cout << i << ' ';
    }
    std::cout << '\n';
    return 0;
}
```

## iota

以始于 value 并重复地求值 ++value 的顺序递增值填充范围 [first, last) 。

```cpp
#include <iostream>

int main() {
    std::vector<int> v(10);
    std::iota(v.begin(), v.end(), 1);
    for (int i : v) {
        std::cout << i << ' ';
    }
    std::cout << '\n';
    return 0;
}
// output: 1 2 3 4 5 6 7 8 9 10
```

## std::includes 判断一个序列是否包含另一个序列

```cpp
#include <iostream>

int main() {
    std::vector<int> v1 = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::vector<int> v2 = {3, 4, 5};
    std::vector<int> v3 = {3, 4, 5, 10};
    std::cout << std::includes(v1.begin(), v1.end(), v2.begin(), v2.end()) << '\n';
    std::cout << std::includes(v1.begin(), v1.end(), v3.begin(), v3.end()) << '\n';
    return 0;
}
```

## unique

```cpp
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
    auto last = std::unique(v.begin(), v.end());
    for (auto i = v.begin(); i != last; ++i) {
        std::cout << *i << ' ';
    }
    std::cout << '\n';
    return 0;
}
```
