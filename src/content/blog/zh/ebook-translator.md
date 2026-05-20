---
layout: blog
title: 分享一个简单好用的双语电子书翻译器
date: 2026-05-21 12:00:00
tags:
  - 工具
  - 阅读
  - AI
categories: 项目分享
description: 一个完全在浏览器端运行的电子书翻译工具，支持 EPUB 和 PDF，40+ 种语言互译，双语对照输出。
---

我一直有阅读英文原版书的习惯，但说实话，遇到生僻词汇或复杂句式时，阅读体验会大打折扣。市面上的翻译工具要么只能翻译网页，要么翻译质量堪忧，要么设计不够简单加了太多不需要的功能。

所以我自己做了一个：**Ebook Translator**，一个完全在浏览器端运行的电子书翻译工具。粘贴自己的 API KEY 就可直接使用，支持各大常见 LLMs 提供商，也支持自定义节点。

工具地址：[philoli.com/projects/ebook-translator](https://philoli.com/projects/ebook-translator)

<!--more-->

工具一推出就广受好评，当前的核心功能主要有：

- 对任何书籍进行翻译，译文和原文穿插显示，支持 40+ 种语言互相翻译
- 精心打磨了三种常用译文风格：通用自然（贴近原文）、小说、专业书籍，翻译效果绝佳
- 对书籍中的数学公式也做了支持
- 支持 EPUB 和 PDF
- 对扫描版本 PDF 也做了支持，使用强大的 AI 模型的多模态功能，公式也能准确识别，对一些老旧书籍效果也非常好
- 针对专业类书籍，用户可以上传自己的术语翻译对照表，可以对专业领域书籍获得更精准的翻译
- 翻译进度自动保存在浏览器本地。关掉页面再打开，可以从上次的位置继续。已翻译的书籍会保存在历史记录中，随时可以重新打开编辑或导出。（支持最近 10 本书的翻译历史）
- 不上传你的文件到任何服务器，文件解析、翻译请求都在你的浏览器里完成
- 秉着"把复杂留给软件，把简单留给用户"的设计哲学，界面简洁优雅，使用方法简单易懂，功能足够强大，目前已经收获大量好评

## 双语阅读的好处

顺便谈谈双语阅读的好处。

1. 读起来快。有很多书内容没有好到值得去阅读原文，或者作者文笔也很糟糕的情况下，你去读原文徒增阅读困难，只有文本比较好或者特别好的书读原文才能算得上享受。而且中文算是较高信息密度的语言，一百万字的原版书，翻译成中文可能只有相当于 70-80 万字，对于阅读量非常大的人，这样的效率提升是非常明显的。

2. 而且双语对照阅读可以提升任何语言的阅读速度、能力，看你怎么使用。这也可以适用于任何语言，而不仅仅是英语。你可以先阅读一遍原版，然后发现生词去译文找到生词是怎么翻译的。这比查字典，或者自带字典的好处是，快而且是融入文本的，读多了你就认识了。

3. 扩大阅读量。相当于全世界任何语言的书，你现在都能读了，而不是只能阅读自己少数的几种语言。你获取信息的范围就扩大了非常多。除了德语书、日语书、法语书等，你还可以去阅读各类小语种的书籍杂志。

4. 对于语言能力还不足以快速阅读原文的时候，磕磕绊绊的阅读体验会打击人的阅读兴趣，一个电子书翻译工具可以帮人破除最初的障碍，让人爱上阅读。有趣的高质量书籍，带来的正反馈可以让人持续去探索未知世界，而不是停留在各种困难和障碍面前，好奇心永远是第一位，首先保护自己的好奇心，在这之上，可以不断精进自己的各项能力。

## 使用流程

1. 打开 [Ebook Translator](https://philoli.com/projects/ebook-translator)
2. 选择 AI 服务商，填入你的 API Key
3. 设置源语言和目标语言
4. 上传 EPUB 或 PDF 文件
5. 点击章节开始翻译，或「翻译剩余全部」批量翻译
6. 翻译完成后，会自动下载 EPUB 格式的书籍，也可以手动点击「下载 EPUB」

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-03.webp" alt="Ebook Translator 界面" />
</figure>

## 一些翻译效果展示

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-02.webp" alt="翻译效果展示 1" />
</figure>

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-04.webp" alt="翻译效果展示 2" />
</figure>

## 建议和反馈

如果你在使用过程中遇到问题，或者有功能建议，欢迎给我留言。

Email: hi@philoli.com

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-01.webp" alt="联系方式" />
</figure>

---

> 试试看：[philoli.com/projects/ebook-translator](https://philoli.com/projects/ebook-translator)

## 更多阅读

- [分享 12 本好书：2025 年读过的高分书单](/zh/blog/2025-top-rated-reading-list)
