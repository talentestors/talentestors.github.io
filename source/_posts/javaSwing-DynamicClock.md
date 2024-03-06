---
title: 用 Swing 实现一个简易的动态时钟。
author: stazxr
avatar: https://gcore.jsdelivr.net/gh/talentestors/cdn/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: https://s11.ax1x.com/2023/12/13/pifcaCQ.png
mathjax: false
date: 2023-12-13 16:46:47
tags:
    - Java
    - Swing
keywords: Java,Swing,动态时钟
description: 用 Java Swing 实现一个简易的动态时钟。
---

## 前言

本文主要介绍如何使用 Java Swing 实现一个简易的动态时钟。

### 开发环境

- JDK 版本随意

## 开始

### Swing 简介

Swing 是 Java 的一个 GUI 工具包，它提供了一套丰富的组件，用于开发图形用户界面（GUI）应用程序，这些组件既可用于 Java 应用程序，也可用于 Applet。

### Swing 组件

JFrame 是一个顶层容器，它包含并管理其他 Swing 组件。Component 是所有 Swing 组件的超类。我们将使用 JFrame 和 JPanel 来创建一个简单的窗口。添加我们自定义的组件到 JFrame 中。

## 自定义的组件 ClockPanel 的实现

```java
private static class ClockPanel extends Component {
    private static final SimpleDateFormat DATE_FORMAT;
    private static final SimpleDateFormat TIME_FORMAT;
    static {
        DATE_FORMAT = new SimpleDateFormat("yyyy'年'MM'月'dd'日'");
        TIME_FORMAT = new SimpleDateFormat("HH:mm:ss");
    }
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(Color.BLACK);
        g.fillRect(0, 0, getWidth(), getHeight());
        g.setColor(Color.WHITE);
        g.setFont(new Font("微软雅黑", Font.BOLD, 30));
        g.drawString(DATE_FORMAT.format(Calendar.getInstance().getTime()), 20, 100);
        g.drawString(TIME_FORMAT.format(Calendar.getInstance().getTime()), 20, 140);
    }
}
```

获取时间需要用到 **Calender** 类，再使用 **SimpleDateFormat** 类去对我们的日期进行自定义的格式化。

## 另附源码

```java
import javax.swing.*;
import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 * Package: cn.stazxr
 * 动态时钟
 *
 * @Author: stazxr
 * @Create: 2023/12/12
 * @Version: v1.0
 **/
public class DynamicClock {

    // 标识位
    private static boolean flag = true;

    public static void main(String[] args) {
        JFrame frame = new JFrame("动态时钟 作者：stazxr.cn");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setMinimumSize(new Dimension(350, 230));
        frame.setLocationRelativeTo(null);

        JPanel panel = new JPanel() {
            @Override
            public void paint(Graphics g) {
                super.paint(g);
                g.setColor(Color.WHITE);
                g.setFont(new Font("微软雅黑", Font.BOLD, 40));
                g.drawString("当前时间：", 10, 50);
            }
        };
        panel.setBackground(Color.BLACK);
        panel.setBounds(0, 0, 350, 60);
        frame.add(panel);

        ClockPanel comp = new ClockPanel();
        comp.setBounds(0, 60, 350, 140);
        frame.add(comp);

        frame.setVisible(true);
        Thread thread = new Thread(() -> {
            while (flag) {
                comp.repaint();
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
        });

        frame.addWindowListener(new java.awt.event.WindowAdapter() {
            @Override
            public void windowClosing(java.awt.event.WindowEvent e) {
                //  结束线程
                flag = false;
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ex) {
                    throw new RuntimeException(ex);
                }
                thread.interrupt();
            }
        });

        thread.start();

        while (!thread.isInterrupted()) {
            Thread.yield();
        }
        System.out.println("exited");
    }

    private static class ClockPanel extends Component {

        private static final SimpleDateFormat DATE_FORMAT;
        private static final SimpleDateFormat TIME_FORMAT;

        static {
            DATE_FORMAT = new SimpleDateFormat("yyyy'年'MM'月'dd'日'");
            TIME_FORMAT = new SimpleDateFormat("HH:mm:ss");
        }

        @Override
        public void paint(Graphics g) {
            super.paint(g);
            g.setColor(Color.BLACK);
            g.fillRect(0, 0, getWidth(), getHeight());
            g.setColor(Color.WHITE);
            g.setFont(new Font("微软雅黑", Font.BOLD, 30));
            g.drawString(DATE_FORMAT.format(Calendar.getInstance().getTime()), 20, 100);
            g.drawString(TIME_FORMAT.format(Calendar.getInstance().getTime()), 20, 140);
        }
    }
}
```

效果展示：

{% fb_img https://s11.ax1x.com/2023/12/13/pifcaCQ.png DynamicClock %}{% fb_img https://s2.loli.net/2023/12/13/5QJx9mdlpqtAnfh.gif DynamicClock %}

<p style="text-align: center; color: #66CCFF;"><b>END</b></p>

---

<a data-fancybox="anime" data-caption="pixiv" href="https://pic.leetcode.cn/1702137234-fvofiU-QQ%E5%9B%BE%E7%89%8720231209235339.png">
    <img src="https://pic.leetcode.cn/1702137234-fvofiU-QQ%E5%9B%BE%E7%89%8720231209235339.png" width="600">
</a>
