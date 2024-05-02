---
title: 排序算法测速
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //z1.ax1x.com/2023/10/04/pPOctX9.png
mathjax: false
date: 2023-10-04 14:43:46
tags:
    - C语言
    - 数据结构与算法
keywords: 基础排序 C语言 数据结构与算法
description: 一个对各种排序算法进行时间复杂度测试的程序
---

## 简介

用C语言编写，用于测试不同排序算法对数据排序的效率和速度。

程序可以测试冒泡排序、冒泡排序优化、插入排序、插入排序优化、选择排序、选择排序优化、快速排序、双轴快速排序、归并排序和希尔排序等十种排序算法，单位时间为毫秒。

程序运行时，需要确保程序根目录下存在data文件夹，且该文件夹中含有TestData.md和data.txt两个文件。若不存在该文件夹，程序将无法导出数据。

> 本项目对于学习和理解排序算法的实现原理，以及对不同算法在不同场景下的优劣进行了较为详细的探究和总结，适合于算法初学者和算法爱好者参考学习。

### 待测试的排序算法

- 冒泡排序
- 冒泡排序优化
- 插入排序
- 插入排序的二分搜索算法优化
- 选择排序
- 选择排序双轴优化
- 快速排序
- 双轴快速排序
- 归并排序
- 希尔排序

### 结果保存

测试数据保存到文件中

排序结果输出到控制台，并保存到文件中。

文件内容以Markdown的表格格式保存，方便后续使用。

文件名：TestData\.md、data\.txt

- 程序运行时，只有存在data的文件夹才能导出数据。

程序根目录

- data
&nbsp;- TestData\.md
&nbsp;- data\.txt

## 测试用例

系统生成随机数

## 测试环境

- inscode
- windows 11(本机)

## 测试源码

```c
#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include <sys/time.h>
#include <stdint.h>

#define llong long long
#define SIZE 100000

inline void fprintArray(int *nums, FILE *fp);

inline void swap(int *a, int *b);

//二分搜索
int binarySearch(int nums[], int left, int right, int target);

//冒泡排序
void bubbleSort(int *nums, int size);

//冒泡排序优化
void bubbleSortPlus(int *nums, int size);

//插入排序
void insertSort(int *nums, int size);

//插入排序的二分搜索算法优化
void insertSortPlus(int *nums, int size);

//选择排序
void selectSort(int *nums, int size);

//选择排序双轴优化
void selectSortPlus(int *nums, int size);

// 生成随机数数组
void random_nums(int *nums);

//快速排序
void quickSort(int arr[], int left, int right);

//双轴快速排序
void dualPivotQuickSort(int arr[], int start, int end);

//归并函数
void merge(int arr[], int left, int mid, int right);

//归并排序
void mergeSort(int arr[], int left, int right);

//希尔排序
void shellSort(int arr[], int size);

//获取时间（毫秒级）
llong getCurrentTime();

//copy Array
void copyArray(int *nums, int *arr);

void Backspace(const char *str);
int main() {
    llong sec1, sec2;
    printf("初始化中请稍后...\n");
    int *nums = (int *) malloc(sizeof(int) * SIZE); //定义数组
    int *array = (int *) malloc(sizeof(int) * SIZE); //定义数组
   system("clear");
    printf("\t\t排序算法测试\n\t输入测试组数:\t");
    int num;
    if(scanf("%d", &num) == 1) {
        printf("开始运行..\t请稍后... \n");
    } else {
        printf("异常请输入数字!\n");
        exit(-1);
    }
    FILE *file = fopen("./data/TestData.md", "w");
    //排序
    fprintf(file, "# 排序算法测试(单位毫秒)\n\n");
    fprintf(file,"| 冒泡排序 | 冒泡排序优化 | 插入排序 | 插入排序优化 | 选择排序 | 选择排序优化 | 快速排序 | 双轴快速排序 | 归并排序 | 希尔排序 |\n");
    fprintf(file, "|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n");
    FILE *data_num = fopen("./data/data.txt", "w");
    for (int i = 1; i <= num; ++i) {
        char str[51];
        sprintf(str,"初始化第%d组数据中..",i);
        printf("%s",str);
        fflush(stdout);
        fprintf(file, "|");
        random_nums(array); //生成随机数组
        Backspace(str);
        printf("第%d组数据       (数据量: %d)\n", i,SIZE);
        for (int test_count = 1; test_count <= 10; ++test_count) {
            copyArray(nums, array); //复制原始数据
            switch (test_count) {
                case 1:
                    printf("冒泡排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    bubbleSort(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
                case 2:
                    printf("冒泡排序优化： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    bubbleSortPlus(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
                case 3:
                    printf("插入排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    insertSort(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
                case 4:
                    printf("插入排序优化： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    insertSortPlus(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
                case 5:
                    printf("选择排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    selectSort(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
                case 6:
                    printf("选择排序优化： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    selectSortPlus(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
                case 7:
                    printf("快速排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    quickSort(nums, 0, SIZE - 1);
                    sec2 = getCurrentTime();
                    break;
                case 8:
                    printf("双轴快速排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    dualPivotQuickSort(nums, 0, SIZE - 1);
                    sec2 = getCurrentTime();
                    break;
                case 9:
                    printf("归并排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    mergeSort(nums, 0, SIZE - 1);
                    sec2 = getCurrentTime();
                    break;
                case 10:
                    printf("希尔排序： ");
                    fflush(stdout);
                    sec1 = getCurrentTime();
                    shellSort(nums, SIZE);
                    sec2 = getCurrentTime();
                    break;
            }
            printf("%lld毫秒\n", sec2 - sec1);
            fprintf(file, "%lld|", sec2 - sec1);
        }
        fprintf(file, "\n");
        fflush(file);
        fprintArray(array, data_num);
    }
    fclose(file);
    fclose(data_num);
    free(nums);
    free(array);
    return 0;
}

void Backspace(const char *str){
    system("sleep 2");
    for(int i = 0;i < strlen(str);i++)
        printf("\b");
    fflush(stdout);
}

void copyArray(int *nums, int *arr) {
    for (int i = 0; i < SIZE; ++i) {
        nums[i] = arr[i];
    }
}

llong getCurrentTime() {
    struct timeval tv;
    gettimeofday(&tv, NULL);    //该函数在sys/time.h头文件中
    return tv.tv_sec * 1000 + tv.tv_usec / 1000;
}

void shellSort(int arr[], int size) {
    int gap, i, j, temp;
    for (gap = size / 2; gap > 0; gap /= 2) {
        for (i = gap; i < size; i++) {
            temp = arr[i];
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    int L[n1], R[n2];
    int i, j, k;
    for (i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
    i = 0;
    j = 0;
    k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

void quickSort(int arr[], int left, int right) {
    if (left >= right) return;
    int l = left, r = right;
    int base = arr[left];
    while (l < r) {
        while (l < r && arr[r] >= base) --r;
        while (l < r && arr[l] <= base) ++l;
        swap(&arr[l], &arr[r]);
    }
    arr[left] = arr[l];
    arr[l] = base;
    quickSort(arr, left, l - 1);
    quickSort(arr, l + 1, right);
}

void dualPivotQuickSort(int arr[], int start, int end) {
    if (start >= end) return;     //首先结束条件还是跟之前快速排序一样，因为不可能无限制地分下去，分到只剩一个或零个元素时该停止了
    if (arr[start] > arr[end])    //先把首尾两个基准进行比较，看看谁更大
        swap(&arr[start], &arr[end]);    //把大的换到后面去
    int pivot1 = arr[start], pivot2 = arr[end];    //取出两个基准元素
    int left = start, right = end, mid = left + 1;   //因为分了三块区域，此时需要三个指针来存放
    while (mid < right) {
        if (arr[mid] < pivot1)     //如果mid所指向的元素小于基准1，说明需要放到最左边
            swap(&arr[++left], &arr[mid++]);   //直接跟最左边交换，然后left和mid都向前移动
        else if (arr[mid] <= pivot2) {    //在如果不小于基准1但是小于基准2，说明在中间
            mid++;   //因为mid本身就是在中间的，所以说只需要向前缩小范围就行
        } else {    //最后就是在右边的情况了
            while (arr[--right] > pivot2 && right > mid);
            if (mid >= right) break;
            swap(&arr[mid], &arr[right]);
        }
    }
    swap(&arr[start], &arr[left]);    //最后基准1跟left交换位置，正好左边的全部比基准1小
    swap(&arr[end], &arr[right]);     //最后基准2跟right交换位置，正好右边的全部比基准2大
    dualPivotQuickSort(arr, start, left - 1);    //继续对三个区域再次进行双轴快速排序
    dualPivotQuickSort(arr, left + 1, right - 1);
    dualPivotQuickSort(arr, right + 1, end);
}

void selectSortPlus(int *nums, int size) {
    int left = 0, right = size - 1;   //相当于左端和右端都是已经排好序的，中间是待排序的，所以说范围不断缩小
    while (left < right) {
        int min = left, max = right;
        for (int i = left; i <= right; i++) {
            if (nums[i] < nums[min]) min = i;   //同时找最小的和最大的
            if (nums[i] > nums[max]) max = i;
        }
        swap(&nums[max], &nums[right]);   //这里先把大的换到右边
        //注意大的换到右边之后，有可能被换出来的这个就是最小的，所以说需要判断一下
        //如果遍历完发现最小的就是当前右边排序的第一个元素
        //此时因为已经被换出来了，所以说需要将min改到换出来的那个位置
        if (min == right) min = max;
        swap(&nums[min], &nums[left]);   //接着把小的换到左边
        left++;    //这一轮完事之后，缩小范围
        right--;
    }
}

void selectSort(int *nums, int size) {
    for (int i = 0; i < size - 1; ++i) {
        int copy = i;
        for (int j = i + 1; j < size; ++j)   //挨个遍历剩余的元素，并更新
            if (nums[copy] > nums[j]) copy = j;
        int tmp = nums[i];    //找出元素之后，开始交换
        nums[i] = nums[copy];
        nums[copy] = tmp;
    }
}

void insertSortPlus(int *nums, int size) { //二分搜索算法来查找对应的插入位置
    for (int i = 1; i < size; ++i) {
        int tmp = nums[i];
        int j = binarySearch(nums, 0, i - 1, tmp);   //由二分搜索来确定插入位置
        for (int k = i; k > j; k--) nums[k] = nums[k - 1];   //依然是将后面的元素后移
        nums[j] = tmp;
    }
}

void insertSort(int *nums, int size) {
    for (int i = 1; i < size; ++i) { //左牌堆默认有序
        int j = i, tmp = nums[i];
        while (j > 0 && nums[j - 1] > tmp) {
            nums[j] = nums[j - 1]; //不断进行后移操作，把位置腾出来
            --j;
        }
        nums[j] = tmp;
    }
}

void bubbleSortPlus(int *nums, int size) {
    for (int i = 0; i < size - 1; ++i) { //只需要size-1次即可
        bool flag = true; //这里使用一个标记，默认为`true`表示数组是有序的
        for (int j = 0; j < size - i - 1; ++j) {
            if (nums[j] > nums[j + 1]) {
                swap(&nums[j], &nums[j + 1]);
                flag = false; //如果发生交换，说明不是有序的，把标记变成`false`
            }
        }
        if (flag) break;//如果没有发生任何交换，flag一定是`true`，数组已经有序，所以说直接退出
    }
}

void bubbleSort(int *nums, int size) {
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size - i - 1; ++j) {
            if (nums[j] > nums[j + 1]) swap(&nums[j], &nums[j + 1]);
        }
    }
}

int binarySearch(int nums[], int left, int right, int target) {
    int mid;
    while (left <= right) {
        mid = (left + right) >> 1;
        if (target == nums[mid]) return mid + 1;   //如果插入元素跟中间元素相等，直接返回后一位
        else if (target < nums[mid]) {
            right = mid - 1;   //范围划到左边
        } else left = mid + 1;   //范围划到右边
    }
    return left;   //不断划分范围，left也就是待插入位置了
}

inline void swap(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

inline void fprintArray(int *nums, FILE *fp) {
    for (int i = 0; i < SIZE; ++i) {
        fprintf(fp, "%d,", nums[i]);
    }
    fputc('\n', fp);
    fflush(fp);
}

void random_nums(int *nums) {
    // 设置种子，保证每次运行程序生成的随机数都不同
    srand(time(NULL) + rand());
    for (int i = 0; i < SIZE; i++) {
        nums[i] = rand();
    }
}
```

### Makefile

```makefile
all: main

CC = clang
override CFLAGS += -g -Wno-everything -pthread -lm

SRCS = $(shell find . -name '.ccls-cache' -type d -prune -o -type f -name '*.c' -print)
HEADERS = $(shell find . -name '.ccls-cache' -type d -prune -o -type f -name '*.h' -print)

main: $(SRCS) $(HEADERS)
    $(CC) $(CFLAGS) $(SRCS) -o "$@"

main-debug: $(SRCS) $(HEADERS)
    $(CC) $(CFLAGS) -O0 $(SRCS) -o "$@"

clean:
    rm -f main main-debug
```

## 测试结果

{% fb_img https://z1.ax1x.com/2023/10/04/pPOctX9.png 结果 %}

### 杂项

inscode在线运行
地址：<https://inscode.csdn.net/@stazxr/C-Sorting-algorithm-test>

<iframe width="100%" height="500px" src="https://inscode.csdn.net/@stazxr/C-Sorting-algorithm-test/embed" scrolling="no" frameborder="no" allowfullscreen="" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

源码克隆：<https://gitcode.net/m0_44950849/C.git>
