---
title: 用C语言实现字符串全排列
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://article.biliimg.com/bfs/article/0ab44f3e19308ea7f6598c1e79003e1c8120dcfc.png@2500h_1c_1e.webp
date: 2023-04-10 13:03:30
tags:
    - 数据结构与算法
    - C语言
keywords: 全排列
description: C语言实现字符串全排列
---

## 用 C 语言实现字符串全排列

> 字符串全排列是指给定一个字符串，输出它的所有可能的排列方式
> 例如，给定字符串"abc"，全排列有"abc"，"acb"，"bac"，"bca"，"cab"，"cba"

一种常用的方法是使用递归和回溯的思想

首先，我们定义一个 swap 函数，用来交换两个字符的位置

然后，我们定义一个 permutation 函数，用来递归生成全排列

permutation 函数接受三个参数：str 是要排列的字符串，start 是当前处理的位置，end 是字符串的最后一个位置

permutation 函数的基本思路是：
如果 start 等于 end，说明只有一个字符，直接输出 str

否则，从 start 到 end 遍历每个位置 i，将 str[start]和 str[i]交换，然后递归处理 start+1 到 end 的位置

递归返回后，再将 `str[start]`和 `str[i]`交换回来，恢复原来的顺序，这叫做回溯

这样就可以保证每个位置都被不同的字符填充过一次，生成所有可能的排列

最后，在 main 函数中，我们输入一个字符串，并调用 `permutation` 函数生成全排列

下面是完整的代码和运行结果：

- 使用标准库函数`<string.h>`中的`strdup`函数来复制一个字符串

```C
// 用C语言实现字符串全排列
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

//定义一个swap函数，使用指针参数
void swap(char *a, char *b) {
    char temp = *a;
    *a = *b;
    *b = temp;
}

void permutation(char *str, int start, int end) // 递归生成全排列
{
    if (start == end) // 如果只有一个字符，直接输出
    {
        printf("%s\n", str);
    } else {
        for (int i = start; i <= end; i++) // 枚举每个位置
        {
            swap(&str[start], &str[i]); // 将当前位置和后面的位置交换
            permutation(str, start + 1, end); // 递归处理剩余的位置
            swap(&str[start], &str[i]); // 回溯时恢复原来的顺序
        }
    }
}

int main() {
    char *str = strdup("abc"); // 输入的字符串
    int len = strlen(str); // 字符串长度
    if (len > 0) // 如果字符串不为空
    {
        permutation(str, 0, len - 1); // 从第0个位置到最后一个位置生成全排列
    }
    free(str); // 释放内存
    return 0;
}
```

_运行结果_

```text
acb
bac
bca
cba
cab
```

### 用 strdup 函数，有什么好处？

strdup 函数的作用是将一个字符串的内容复制到另一个字符串上，并返回一个指向新字符串的指针。使用 strdup 函数有以下好处：

- 可以避免修改原始字符串，因为新字符串有自己的内存空间。
- 可以动态分配内存，不需要提前知道字符串的长度。
- 可以方便地释放内存，只需要调用 free 函数即可。

但是，使用 strdup 函数也要注意以下问题：

- strdup 函数的参数不能为 NULL，否则会报段错误。
- strdup 函数可能会失败，返回 NULL，所以要检查返回值是否有效。
- strdup 函数不是标准库函数，而是 POSIX 扩展函数，所以在一些平台上可能不可用。
