---
title: DeepSeek与Obsidian的集成指南
tags: [DeepSeek, Obsidian, AI集成]
date: 2025-01-19
author: MakiWinster
---
# DeepSeek与Obsidian的集成指南

## 简介

本文介绍如何将 **DeepSeek 大语言模型** 与 **Obsidian 笔记软件** 进行集成，利用 Copilot 插件和 OpenRouter.AI 实现功能扩展，直接在 Obsidian 中使用 AI 功能进行==文本处理、翻译和智能对话== 🧠。

## 为什么选择 Obsidian

- Obsidian 是轻量但强大的 Markdown 编辑器，支持本地和多设备同步  
- 可将 PDF 转为 Markdown，方便整理科研资料  
- 原生支持演示文稿制作，适合教学与知识输出  
- 对于频繁使用 Markdown 的场景（如 Jupyter Notebook、社交媒体或 GitHub 文档编写）极为友好  
- 强大社区插件生态，扩展性极高 ✅  

## 集成步骤

### ① 获取 API 密钥

**DeepSeek API 密钥**  
- 访问 [DeepSeek 官网](https://www.deepseek.com/) 注册账户  
- 前往 [DeepSeek 开放平台](https://platform.deepseek.com/)，点击创建密钥（名字随意填 Obsidian）

![](https://img.makis-life.cn//images/20250119155821966.png)

**OpenRouter API 密钥**  
- 注册 [OpenRouter.ai](https://openrouter.ai) 账号  
- 点击右上角头像 → **API Keys** → 新建密钥，第二项留空  

![](https://img.makis-life.cn//images/Pasted%20image%2020250119160043.png)

---

### ② 安装并配置 Copilot 插件

3. 在 Obsidian 设置中启用 **社区插件（Community Plugins）**  
4. 搜索并安装 `Copilot` 插件，然后启用它  
5. 插件启用后，在设置中找到 `Copilot` 项，进行如下配置：  

![](https://img.makis-life.cn//images/20250119160138585.png)  
![](https://img.makis-life.cn//images/20250119160339930.png)

6. 添加 API 路径与密钥：

![](https://img.makis-life.cn//images/20250119160608991.png)

7. 点击 `Verify` 验证连接，成功后右上角显示 ✅Successful  
8. 点击 `Add Model` → 添加模型 → 填写如下内容并保存：

![](https://img.makis-life.cn//images/20250119160801508.png)

---

### ③ 开始使用 ✨

- 点击左侧边栏的 `Open Copilot Chat` 图标  
- 在对话窗口上方下拉选择 `DeepSeek` 模型  
- 开始在 Obsidian 内直接调用 AI 模型对话、润色、翻译等功能！

![](https://img.makis-life.cn//images/20250119161059774.png)

---

<center>---END---</center>
