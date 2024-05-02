---
title: C语言链表
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://s1.ax1x.com/2023/03/22/ppdSgfK.png
date: 2023-02-06 12:45:34
tags:
  - 数据结构与算法
  - C语言
keywords: 链表
description:
---

## C语言链表

> *代码实现*

```c
#include <stdio.h>
#include <stdlib.h>

typedef int E; /*It stands for shaping element*/

struct ListNode {
    E element;
    struct ListNode * next; /*保存下一个节点的地址*/
};

typedef struct ListNode * Node; /*将“ListNode *"命名为”Node“*/

/**
 * 初始化链表
 * @param node 传入头结点指针
 */
void  initList(Node node){
    node->next = NULL;
}

/**
 * 计算链表的节点数不计头结点
 * @param head 传入头结点指针
 * @return 返回节点数目
 */
int sizeList(Node head){
    int i = -1;
    while (head) {
        head = head->next;
        i++;
    }
    return i;
}

/**
 * 随机位置插入节点
 * @param head 传入头结点指针
 * @param element 传入新节点的元素
 * @param index 传入插入位置
 * @return 位置不合法或插入失败返回0，成功返回1
 */
_Bool insertList(Node head,E element,int index){
    if (index < 1) return 0;
    while (--index) {
        head = head->next;
        if (head == NULL) return 0;
    }
    Node node = malloc(sizeof(struct ListNode));
    if(node == NULL) return 0;   //创建一个新的结点，如果内存空间申请失败返回0
    node->element = element;
    node->next = head->next;
    head->next = node;   //接着将前驱结点指向新的这个结点
    return 1;
}

/**
 * 头插：在头结点后插入新节点
 * @param head 传入头结点指针
 * @param data 传入新节点的元素
 * @return 插入失败返回0，成功返回1
 */
_Bool InsertToHead(Node head, E data) {
    if (insertList(head, data, 1)) return 1;
    return 0;
}

/**
 * 尾插：在尾结点后插入新节点
 * @param head 传入头结点指针
 * @param data 传入新节点的元素
 * @return 插入失败返回0，成功返回1
 */
_Bool InsertToTail(Node head, int data) {
    if (insertList(head, data, sizeList(head) + 1)) return 1;
    return 0;
}

/**
 * 删除指定节点
 * @param head 传入头结点指针
 * @param index 传入删除节点的位置
 * @return 位置不合法或结点异常返回0，成功返回1
 */
_Bool deleteList(Node head, int index){
    if(index < 1) return 0;   //大体和上面是一样的
    while (--index) {
        head = head->next;
        if(head == NULL) return 0;
    }
    if(head->next == NULL) return 0;

    Node tmp = head->next;
    head->next = head->next->next;
    free(tmp);
    return 1;
}

/**
 * 修改元素
 * @param head 传入头结点指针
 * @param index 传入修改节点的位置
 * @param change 元素的新值
 * @return 位置不合法或结点异常返回0，成功返回1
 */
_Bool SetElement(Node head, int index, E change) {
    if (index < 1) {
        printf("no exist!\n");
        return 0;
    }
    while (--index) {
        head = head->next;
        if (head == NULL) {
            printf("no exist!\n");
            return 0;
        }
    }
    head->next->element = change;
    return 1;
}

/**
 * 获取元素的值
 * @param head 传入头结点指针
 * @param index 传入获取节点元素的位置
 * @return 返回这个元素
 */
E * getList(Node head, int index){
    if(index < 1) return 0;
    do {
        head = head->next;
        if(head == NULL) return 0;
    } while (--index);
    return &head->element;
}

/**
 * 查找元素，获取前驱节点
 * @param head 传入头结点指针
 * @param target 查找目标
 * @return 目标的前驱节点
 */
Node SearchLink_Pointer(Node head, int target) {
    while (head->next != NULL && target > 0) {
        head = head->next;
        target--;
    }
    return head;
}

/**
 * 查找元素，获取节点的位置
 * @param head 传入头结点指针
 * @param element 查找目标
 * @return 节点的位置
 */
int findList(Node head, E element){
    head = head->next;
    int i = 1;
    while (head) {
        if(head->element == element) return i;
        head = head->next;
        i++;
    }
    return -1;
}

/**
 * 对链表进行冒泡排序
 * @param head 传入头结点指针
 * @param length 传入链表的长度（不包括头结点）
 */
void sortLink_B(Node head,int length){
    int temp;
    for (int i = 0; i < length; ++i) {
        _Bool flag = 1;
        Node node = head->next;
        while (head -> next != NULL) {
            if (head->element > head->next->element) {
                temp = head->element;
                head->element = head->next->element;
                head->next->element = temp;
                flag = 0;
            }
            head = head->next;
        }
        if (flag) break;
        else head = node;
    }
}

/**
 * 打印链表
 * @param head 传入头结点指针
 */
void printList(Node head){
    while (head->next) {
        head = head->next;
        printf("%d ", head->element);   //因为头结点不存放数据，所以从第二个开始打印
    }
    printf("\n");
}

/**
 * 链表元素交换
 * @param head 传入头结点指针
 * @param index1 待交换的节点位置
 * @param index2 待交换的节点位置
 */
void SwapLink(Node head,int index1,int index2){
    Node temp1, temp2;
    temp1 = SearchLink_Pointer(head, index1);
    temp2 = SearchLink_Pointer(head, index2);
    int tmp = temp1->element;
    temp1->element = temp2->element;
    temp2->element = tmp;
}
```

###### **Test**

```c
int main(){
    struct ListNode head;
    initList(&head);
    for (int i = 1; i <= 10; ++i) {
        insertList(&head, i * 100, i);
    }
    printList(&head);
    deleteList(&head,4);
    SetElement(&head,4,666);
    printList(&head);
    printf("%d\n", *getList(&head,3));
    printf("%d\n", findList(&head,100));
    printf("%d\n", sizeList(&head));
    SwapLink(&head,2,5);
    printList(&head);
    sortLink_B(&head, sizeList(&head));
    printList(&head);
}
```

###### **结果**

[![ppdSgfK.png](https://s1.ax1x.com/2023/03/22/ppdSgfK.png)](https://imgse.com/i/ppdSgfK)

> 作者本人，移植于CSDN
>
> 原文链接：<https://blog.csdn.net/m0_44950849/article/details/128152853>
>
> 于 2022-12-02 18:53:48 发布CSDN