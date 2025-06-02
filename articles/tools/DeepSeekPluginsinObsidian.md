---
title: DeepSeek与Obsidian的集成指南
tags: [DeepSeek, Obsidian, AI集成]
date: 2025-01-19
author: MakiWinster
---

# DeepSeek与Obsidian的集成指南

## 简介

本文介绍如何将DeepSeek大语言模型与Obsidian笔记软件进行集成，利用Copilot插件和OpenRouter.AI实现功能扩展,直接在Obsidian中使用AI功能进行文本处理、翻译和智能对话。

## 为什么选择Obsidian

Obsidian作为一个轻量级但功能强大的Markdown编辑器，在数据科学和AI工作流程中具有重要价值。它支持多设备同步，能够将PDF转换为Markdown格式，并且适合笔记整理和幻灯片制作。对于需要频繁使用Markdown的场景（如Jupyter笔记本编码、社交媒体交流或GitHub文档编写），Obsidian都是理想的工具选择。

## 集成步骤

### 获取API密钥

1. DeepSeek API密钥
   - 在[DeepSeek官网](https://www.deepseek.com/)注册账户
   - 访问[Deepseek开放平台](https://platform.deepseek.com/)获取密钥，名字随意，填Obsidian就行
     ![](https://img.makis-life.cn//images/20250119155821966.png)


2. OpenRouter API密钥 
   - 在OpenRouter.ai创建账户
   - 通过下拉菜单找到"密钥"选项
     ![](https://img.makis-life.cn//images/Pasted%20image%2020250119160043.png)
   - 创建新密钥并保存（第二个填空为限制用量，留空即可）

### Copilot插件安装与配置

3. 启用Obsidian社区插件
4. 搜索并安装的Copilot插件，记得启用
   ![](https://img.makis-life.cn//images/20250119160138585.png)
5. 按如下配置：
   ![](https://img.makis-life.cn//images/20250119160339930.png)
6. 按如下填写  
   ![](https://img.makis-life.cn//images/20250119160608991.png)
7. Verify成功后，右上角有Successful提示，然后点击`Add Model`
8. 按如下修改  
   ![](https://img.makis-life.cn//images/20250119160801508.png)

### 使用
在Obsidian左侧工具栏点击`Open Copilot Chat` 图标
记得更改模型为DeepSeek
![](https://img.makis-life.cn//images/20250119161059774.png)
<center>---END---</center>