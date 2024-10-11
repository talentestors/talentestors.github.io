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
date: 2024-10-11 10:16:11
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

C 库函数 `char *strstr(const char *haystack, const char *needle)` 在字符串 haystack 中查找第一次出现字符串 needle 的位置，不包含终止符 '\0'。

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

## vector 容器

C++ 中的 vector 是一种序列容器，它允许你在运行时动态地插入和删除元素。

vector 是基于数组的数据结构，但它可以自动管理内存，这意味着你不需要手动分配和释放内存。

与 C++ 数组相比，vector 具有更多的灵活性和功能，使其成为 C++ 中常用的数据结构之一。

vector 是 C++ 标准模板库（STL）的一部分，提供了灵活的接口和高效的操作。

**基本特性:**

- **动态大小**：`vector` 的大小可以根据需要自动增长和缩小。
- **连续存储**：`vector` 中的元素在内存中是连续存储的，这使得访问元素非常快速。
- **可迭代**：`vector` 可以被迭代，你可以使用循环（如 `for` 循环）来访问它的元素。
- **元素类型**：`vector` 可以存储任何类型的元素，包括内置类型、对象、指针等。

**使用场景：**

- 当你需要一个可以动态增长和缩小的数组时。
- 当你需要频繁地在序列的末尾添加或移除元素时。
- 当你需要一个可以高效随机访问元素的容器时。

要使用 vector，首先需要包含 **\<vector>** 头文件：

```cpp
#include <vector>
```

### 创建 Vector

创建一个 vector 可以像创建其他变量一样简单：

```cpp
std::vector<int> myVector; // 创建一个存储整数的空 vector
```

这将创建一个空的整数向量,也可以在创建时指定初始大小和初始值：

```cpp
std::vector<int> myVector(5); // 创建一个包含 5 个整数的 vector，每个值都为默认值（0）
std::vector<int> myVector(5, 10); // 创建一个包含 5 个整数的 vector，每个值都为 10
```

或：

```cpp
std::vector<int> vec; // 默认初始化一个空的 vector
std::vector<int> vec2 = {1, 2, 3, 4}; // 初始化一个包含元素的 vector
```

### 添加元素

可以使用 push_back 方法向 vector 中添加元素：

```cpp
myVector.push_back(7); // 将整数 7 添加到 vector 的末尾
```

### 访问元素

可以使用下标操作符 [] 或 at() 方法访问 vector 中的元素：

```cpp
int x = myVector[0]; // 获取第一个元素
int y = myVector.at(1); // 获取第二个元素
```

### 获取大小

可以使用 size() 方法获取 vector 中元素的数量：

```cpp
int size = myVector.size(); // 获取 vector 中的元素数量
```

### 迭代访问

可以使用迭代器遍历 vector 中的元素：

```cpp
for (auto it = myVector.begin(); it != myVector.end(); ++it) {
    std::cout << *it << " ";
}
```

或者使用范围循环：

```cpp
for (int element : myVector) {
    std::cout << element << " ";
}
```

### 删除元素

可以使用 erase() 方法删除 vector 中的元素：

```cpp
myVector.erase(myVector.begin() + 2); // 删除第三个元素
```

### 清空 Vector

可以使用 clear() 方法清空 vector 中的所有元素：

```cpp
myVector.clear(); // 清空 vector
```

## C++ 容器类 `<priority_queue>`

在 C++ 中，`<priority_queue>` 是标准模板库（STL）的一部分，用于实现优先队列。

优先队列是一种特殊的队列，它允许我们快速访问队列中具有最高（或最低）优先级的元素。

在 C++ 中，`priority_queue` 默认是一个最大堆，这意味着队列的顶部元素总是具有最大的值。

`priority_queue` 是一个容器适配器，它提供了对底层容器的堆操作。它不提供迭代器，也不支持随机访问。

### 语法

以下是 `priority_queue` 的基本语法：

```cpp
#include <queue>

// 声明一个整型优先队列
priority_queue<int> pq;

// 声明一个自定义类型的优先队列，需要提供比较函数
struct compare {
    bool operator()(int a, int b) {
        return a > b; // 这里定义了最小堆
    }
};
priority_queue<int, vector<int>, compare> pq_min;
```

### 常用操作

- `empty()`: 检查队列是否为空。
- `size()`: 返回队列中的元素数量。
- `top()`: 返回队列顶部的元素（不删除它）。
- `push()`: 向队列添加一个元素。
- `pop()`: 移除队列顶部的元素。

## 自定义优先级

如果你需要一个最小堆，可以通过自定义比较函数来实现：

## 实例

```cpp
#include <iostream>
#include <queue>
#include <vector>

struct compare {
  bool operator()(int a, int b) {
    return a > b; // 定义最小堆
  }
};

int main() {
  // 创建一个自定义类型的优先队列，使用最小堆
  std::priority_queue<int, std::vector<int>, compare> pq_min;

  // 向优先队列中添加元素
  pq_min.push(30);
  pq_min.push(10);
  pq_min.push(50);
  pq_min.push(20);

  // 输出队列中的元素
  std::cout << "最小堆中的元素：" << std::endl;
  while (!pq_min.empty()) {
    std::cout << pq_min.top() << std::endl;
    pq_min.pop();
  }

  return 0;
}
```

输出结果：

```text
最小堆中的元素：
10
20
30
50
```

`<priority_queue>` 是C++ STL中一个非常有用的容器，特别适合需要快速访问最高或最低优先级元素的场景。通过自定义比较函数，我们可以轻松地实现最大堆或最小堆。希望这篇文章能帮助初学者更好地理解和使用 `priority_queue`。

> 默认从大到小`priority_queue<int, std::vector<int>, greater<>> pq_min;`

## tr1/unordered_set tr1/unordered_map

> 自 C++11 标准起，四种基于 哈希 实现的无序关联式容器正式纳入了 C++ 的标准模板库中，分别是：unordered_set，unordered_multiset，unordered_map，unordered_multimap。

### 编译器不支持 C++11 的使用方法

在 C++11 之前，无序关联式容器属于 C++ 的 TR1 扩展。所以，如果编译器不支持 C++11，在使用时需要在头文件的名称中加入 tr1/ 前缀，并且使用 std::tr1 命名空间。如 #include \<unordered_map> 需要改成 #include \<tr1/unordered_map>；std::unordered_map 需要改为 std::tr1::unordered_map（如果使用 using namespace std;，则为 tr1::unordered_map）。

### 自定义哈希函数

哈希函数1：

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

哈希函数2：

```cpp
struct custom_hash {
    static uint64_t splitmix64(uint64_t x) {
        x ^= x << 13;
        x ^= x >> 7;
        x ^= x << 17;
        return x;
    }

    size_t operator()(const uint64_t x) const {
        static uint64_t FIXED_RANDOM = chrono::steady_clock::now().time_since_epoch().count(); // 时间戳
        return splitmix64(x + FIXED_RANDOM);
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

## rotate 旋转

进行元素范围上的左旋转

```cpp
#include <iostream>

int main() {
    vector<int> a{1,2,3,4,5,6,7,8,9};
    copy(a.begin(), a.end(), ostream_iterator<int>(cout, " "));
    cout << endl;
    std::rotate(a.begin(), a.begin()+5, a.end());
    copy(a.begin(), a.end(), ostream_iterator<int>(cout, " "));
    return 0;
}
```

输出：

```text
1 2 3 4 5 6 7 8 9 
6 7 8 9 1 2 3 4 5 
```

## 大小写转换

### 大写转小写

```cpp
char c = tolower(a);
```

### 小写转大写

```cpp
char c = toupper(a);
```
