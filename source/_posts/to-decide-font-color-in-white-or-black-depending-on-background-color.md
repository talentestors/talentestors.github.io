---
title: 给定背景颜色的良好文本前景色
author: stazxr
avatar: //gcore.jsdelivr.net/gh/talentestors/cdn@latest/img/custom/avatar.jpg
authorLink: stazxr.cn
authorAbout: 愿此行，终抵群星！
authorDesc: 学习使我快乐
categories: 技术
comments: true
photos: //images.weserv.nl/?url=i.stack.imgur.com/KzjtQ.png
mathjax: false
date: 2024-05-09 08:43:05
tags:
    - Web
    - CSS
    - JavaScript
    - Color
keywords: font color, white, black, background color, CSS, JavaScript, Web
description: 给定背景颜色的良好文本前景色
---

## 引入

之前想做一个网页色卡，需要背景颜色和文字颜色对比良好。已获得更好视觉效果。这里分享一下如何根据背景颜色自动选择黑色或白色作为文本颜色。

就像这样
{% fb_img https://s21.ax1x.com/2024/05/10/pkZM7sf.png exmple %}

```javascript
/* 
用于填充字符串 `str` 到指定长度 `len`，默认为 2
例如：padZero('F', 2) => '0F' */
function padZero(str, len) {
    len = len || 2;
    const zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    let r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}
```

通过调用 `invertColor` 函数，传入背景颜色的 HEX 值，第二个参数为 `true` 时，返回黑色或白色的 HEX 值。

当第二个参数为 `false` 时，返回背景颜色的反色 HEX 值。

这里`(r * 0.299 + g * 0.587 + b * 0.114) > 186` 186 的阈值是基于理论的，但可以根据口味进行调整。

还实现了一个Java类HexColor, 它可以实现合适文本前景色效果。

```java
package cn.stazxr.tools;

import java.io.Serial;
import java.io.Serializable;
import java.util.Objects;

/**
 * HexColor class
 * A class to represent hex color
 * @version 1.0.0
 * @since 1.0.0
 * @auther stazxr
 * @see <a href="https://stazxr.cn">stazxr's blog</a>
 */
public class HexColor implements Serializable {
    @Serial
    private static final long serialVersionUID = -691002720950767165L;
    private String hexColor;
    private int r, g, b;

    private static final String HEX_REGEX = "(^#|^)([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

    /**
     * Convert 3-digit hex color to 6-digit hex color
     *
     * @return 6-digit hex color
     */
    private String doubleHex() {
        return hexColor.substring(0, 1).repeat(2) + hexColor.substring(1, 2).repeat(2) + hexColor.substring(2, 3).repeat(2);
    }

    /**
     * Constructor
     *
     * @param hexColor 3-digit or 6-digit hex color
     */
    public HexColor(String hexColor) {
        hexColor = hexColor.replace("#", "").toUpperCase();
        if (!hexColor.matches(HEX_REGEX)) {
            throw new IllegalArgumentException("Invalid hex color");
        }
        if (hexColor.length() == 3) {
            this.hexColor = doubleHex();
        } else {
            this.hexColor = hexColor;
        }
        this.r = Integer.parseInt(this.hexColor.substring(0, 2), 16);
        this.g = Integer.parseInt(this.hexColor.substring(2, 4), 16);
        this.b = Integer.parseInt(this.hexColor.substring(4, 6), 16);
    }

    /**
     * Constructor
     * Default color: #000000
     */
    public HexColor() {
        hexColor = "000000";
        r = 0;
        g = 0;
        b = 0;
    }

    /**
     * Constructor
     *
     * @param r red value
     * @param g green value
     * @param b blue value
     */
    public HexColor(int r, int g, int b) {
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            throw new IllegalArgumentException("Invalid RGB value");
        }
        this.r = r;
        this.g = g;
        this.b = b;
        this.hexColor = padZero(Integer.toHexString(r)) + padZero(Integer.toHexString(g)) + padZero(Integer.toHexString(b));
    }

    /**
     * Pad zero to the left of a string
     *
     * @param str input string
     * @return string with zero padded
     */
    private String padZero(String str) {
        return String.format("%" + 2 + "s", str).replace(' ', '0').toUpperCase();
    }

    /**
     * Invert color
     *
     * @param bw whether to return black or white
     * @return inverted color
     */
    public String invertColor(boolean bw) {
        if (this.hexColor == null) {
            return null;
        }
        if (bw) {
            int threshold = 186;
            int bgDelta = (int) (r * 0.299 + g * 0.587 + b * 0.114);
            return (bgDelta > threshold) ? "#000" : "#FFF";
        }
        return "#" + padZero(Integer.toHexString(255 - r)) + padZero(Integer.toHexString(255 - g)) + padZero(Integer.toHexString(255 - b));
    }

    /**
     * Get red value
     *
     * @return red value
     */
    public String getHexColor() {
        return hexColor;
    }

    /**
     * Set hex color
     *
     * @param hexColor 3-digit or 6-digit hex color
     */
    public void setHexColor(String hexColor) {
        if (!hexColor.matches(HEX_REGEX)) {
            throw new IllegalArgumentException("Invalid hex color");
        }
        hexColor = hexColor.replace("#", "").toUpperCase();
        if (hexColor.length() == 3) {
            hexColor = this.doubleHex();
        }
        this.hexColor = hexColor;
    }

    /**
     * Set red value
     *
     * @param r red value
     *          range: 0-255
     * @param g green value
     *          range: 0-255
     * @param b blue value
     *          range: 0-255
     */
    public void setHexColor(int r, int g, int b) {
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
            throw new IllegalArgumentException("Invalid RGB value");
        }
        this.r = r;
        this.g = g;
        this.b = b;
        this.hexColor = padZero(Integer.toHexString(r)) + padZero(Integer.toHexString(g)) + padZero(Integer.toHexString(b));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof HexColor)) return false;
        return Objects.equals(getHexColor(), ((HexColor) o).getHexColor());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getHexColor());
    }

    @Override
    public String toString() {
        return "#" + hexColor;
    }
}

```

效果如下：

{% fb_img https://s21.ax1x.com/2024/05/10/pkZ3rkD.png exmple %}

---

> 参考：<https://stackoverflow.com/a/3943023/112731>
