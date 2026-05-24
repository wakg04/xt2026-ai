# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

JavaScript30 Drum Kit — 一个纯 HTML/CSS/JS 的交互式架子鼓。按下键盘 A-L 键即可触发鼓声，并伴有 CSS 过渡动画。无构建工具，无依赖。

## 如何运行

直接在浏览器中打开 `index-START.html` 或 `index-FINISHED.html`，无需启动服务器。

## 文件结构

- `index-START.html` — 起始文件，`<script>` 块为空（用于学习/练习）
- `index-FINISHED.html` — 完整版，包含可运行的 JavaScript
- `style.css` — 所有样式，包括按键按下动画的 `.playing` 类
- `background.jpg` — 背景图片
- `sounds/*.wav` — 架子鼓音效文件

## 架构

应用通过 `data-key` 属性（值为 ASCII 的 `keyCode`）将键盘按键（A-L）映射到对应的鼓声音效：

1. 每个 `.key` div 都有 `data-key="<keyCode>"` 属性和一个 `<kbd>` 子元素用于显示按键名
2. 每个 `<audio>` 元素都有与之匹配的 `data-key="<keyCode>"`，指向对应的音效文件
3. `window` 上的 `keydown` 监听器读取 `e.keyCode`，并选取匹配的 `audio[data-key]` 和 `div[data-key]`
4. 给对应的按键 div 添加 `.playing` 类，触发 CSS `transform: scale(1.1)` 效果，并显示黄色边框/发光
5. `transitionend` 监听器在动画完成后移除 `.playing` 类，但仅响应 `transform` 属性的过渡结束（忽略其他过渡属性）
