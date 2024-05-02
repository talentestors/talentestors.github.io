---
title: C语言基础排序(demo)
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://article.biliimg.com/bfs/article/2f874abc60a9bb992b1fa826c3fd46a5607c45e5.jpg@500h_1c_1e.webp
date: 2023-05-15 15:57:55
tags:
    - C语言
    - 数据结构与算法
keywords: 基础排序 C语言 数据结构与算法
description:
---

# 今日份的丧心病狂

基础排序

冒泡、插入、选择（157行警告🤤） :thinking:

```C
#include <stdio.h>
#include <stdbool.h>

#define _comp_ comp(int a, int b)

int comp1(int a, int b) { //升序
    return a - b;
}

int comp2(int a, int b) { //降序
    return b - a;
}

void printArray(int *nums, int size);

void swap(int *a, int *b);

//二分搜索
int binarySearch(int nums[], int left, int right, int target, int _comp_);

//冒泡排序
void bubbleSort(int *nums, int size, int _comp_);

//冒泡排序优化
void bubbleSortPlus(int *nums, int size, int _comp_);

//插入排序
void insertSort(int *nums, int size, int _comp_);

//插入排序的二分搜索算法优化
void insertSortPlus(int *nums, int size, int _comp_);

//选择排序
void selectSort(int *nums, int size, int _comp_);

//选择排序双轴优化
void selectSortPlus(int *nums, int size, int _comp_);

int main() {
    int test[10] = {9, 6, 5, 45, 3, 2, 1, 0, 7, 8};
    printArray(test, 10);
    bubbleSort(test, 10, comp2); //冒泡排序
    printArray(test, 10);
    bubbleSortPlus(test, 10, comp1); //冒泡排序优化
    printArray(test, 10);
    insertSort(test, 10, comp2); //插入排序
    printArray(test, 10);
    insertSortPlus(test, 10, comp1); //插入排序二分搜索算法优化
    printArray(test, 10);
    selectSort(test, 10, comp2); //选择排序
    printArray(test, 10);
    selectSortPlus(test, 10, comp1); //选择排序双轴优化
    printArray(test, 10);
    return 0;
}

void selectSortPlus(int *nums, int size, int _comp_) {
    int left = 0, right = size - 1;   //相当于左端和右端都是已经排好序的，中间是待排序的，所以说范围不断缩小
    while (left < right) {
        int min = left, max = right;
        for (int i = left; i <= right; i++) {
            if (nums[i] < nums[min]) min = i;   //同时找最小的和最大的
            if (nums[i] > nums[max]) max = i;
        }
        if (comp(1, 2) > 0) {
            swap(&nums[max], &nums[left]);
            if (min == left) min = max;
            swap(&nums[min], &nums[right]);
        } else {
            swap(&nums[max], &nums[right]);   //这里先把大的换到右边
            //注意大的换到右边之后，有可能被换出来的这个就是最小的，所以说需要判断一下
            //如果遍历完发现最小的就是当前右边排序的第一个元素
            //此时因为已经被换出来了，所以说需要将min改到换出来的那个位置
            if (min == right) min = max;
            swap(&nums[min], &nums[left]);   //接着把小的换到左边
        }
        left++;    //这一轮完事之后，缩小范围
        right--;
    }
}

void selectSort(int *nums, int size, int _comp_) {
    for (int i = 0; i < size - 1; ++i) { //因为最后一个元素一定是在对应位置上的，所以只需要进行N - 1轮排序
        int copy = i;
        for (int j = i + 1; j < size; ++j)   //挨个遍历剩余的元素，并更新
            if (comp(nums[copy], nums[j]) > 0) copy = j;
        int tmp = nums[i];    //找出元素之后，开始交换
        nums[i] = nums[copy];
        nums[copy] = tmp;
    }
}

void insertSortPlus(int *nums, int size, int _comp_) { //二分搜索算法来查找对应的插入位置
    for (int i = 1; i < size; ++i) {
        int tmp = nums[i];
        int j = binarySearch(nums, 0, i - 1, tmp, comp);   //由二分搜索来确定插入位置
        for (int k = i; k > j; k--) nums[k] = nums[k - 1];   //依然是将后面的元素后移
        nums[j] = tmp;
    }
}

void insertSort(int *nums, int size, int _comp_) {
    for (int i = 1; i < size; ++i) { //左牌堆默认有序
        int j = i, tmp = nums[i];
        while (j > 0 && comp(nums[j - 1], tmp) > 0) {
            nums[j] = nums[j - 1]; //不断进行后移操作，把位置腾出来
            --j;
        }
        nums[j] = tmp;
    }
}

void bubbleSortPlus(int *nums, int size, int _comp_) {
    for (int i = 0; i < size - 1; ++i) { //只需要size-1次即可
        bool flag = true; //这里使用一个标记，默认为`true`表示数组是有序的
        for (int j = 0; j < size - i - 1; ++j) {
            if (comp(nums[j], nums[j + 1]) > 0) {
                swap(&nums[j], &nums[j + 1]);
                flag = false; //如果发生交换，说明不是有序的，把标记变成`false`
            }
        }
        if (flag) break;//如果没有发生任何交换，flag一定是`true`，数组已经有序，所以说直接退出
    }
}

void bubbleSort(int *nums, int size, int _comp_) {
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size - i - 1; ++j) {
            if (comp(nums[j], nums[j + 1]) > 0) swap(&nums[j], &nums[j + 1]);
        }
    }
}

int binarySearch(int nums[], int left, int right, int target, int _comp_) {
    int mid;
    while (left <= right) {
        mid = (left + right) >> 1;
        if (target == nums[mid]) return mid + 1;   //如果插入元素跟中间元素相等，直接返回后一位
        else if (comp(target, nums[mid]) < 0) {
            right = mid - 1;   //范围划到左边
        } else left = mid + 1;   //范围划到右边
    }
    return left;   //不断划分范围，left也就是待插入位置了
}

void swap(int *a, int *b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

void printArray(int *nums, int size) {
    for (int i = 0; i < size; ++i) {
        printf("%d ", nums[i]);
    }
    putchar('\n');
}
```

**output:**

```
9 6 5 45 3 2 1 0 7 8
45 9 8 7 6 5 3 2 1 0
0 1 2 3 5 6 7 8 9 45
45 9 8 7 6 5 3 2 1 0
0 1 2 3 5 6 7 8 9 45
45 9 8 7 6 5 3 2 1 0
0 1 2 3 5 6 7 8 9 45
```
