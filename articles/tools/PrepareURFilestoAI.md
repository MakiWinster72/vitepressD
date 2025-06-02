---
title: 使用 Docling 转换多种文件格式为 Markdown
tags: [工具, Docling, Markdown]
categories: [工具]
date: 2024-11-19 15:31:24
author: Maki Winster
---


_Maki Winster 于 2024-11-19 15:31:24 发布_
## 使用 Docling 转换多种文件格式为 Markdown

在处理多种文件格式（如 `.pdf`、`.docx`、`.pptx` 等）时，主流文本对话模型（如 [GPT](https://so.csdn.net/so/search?q=GPT) 和 Claude）支持有限，尤其是对 `.pptx` 的解析能力。这给一些场景带来了不便，比如批量处理文件或快速提取内容。

为了解决这个问题，GitHub 上的开源项目 [Docling](https://github.com/DS4SD/docling) 提供了强大的多格式转换功能。它支持将 PDF、DOCX、PPTX、图片、HTML、AsciiDoc 和 Markdown 文件转换为 Markdown 和 JSON 格式，非常适合用于快速内容整理或二次加工。

~~这下偷课件有用了~~

---

### 安装 Docling

1. **安装工具**  
    打开命令行（`Win + R` 后输入 `cmd`），然后运行以下命令：
    
    ```cmd
    pip install docling
    ```
    
2. **验证安装**  
    安装完成后，检查是否成功：
    
    ```cmd
    pip show docling
    ```
    
    如果看到类似如下输出，就说明安装成功：
    
    ![安装成功](https://img.makis-life.cn//images/20250114001406583.png)
    

---

### 转换文件为 Markdown

下面提供一个简单的 Python 脚本，将文件转换为 Markdown 格式。
```python
from docling.document_converter import DocumentConverter
import os

# 源文件路径
source = r"修改这里为你的文件路径，例如C:\Users\MakiWinster\Desktop\经典词汇.pdf"
file_dir = os.path.dirname(source)
file_name = os.path.splitext(os.path.basename(source))[0]
output_path = os.path.join(file_dir, f"{file_name}.md")

# 初始化转换器
converter = DocumentConverter()
result = converter.convert(source)

# 将转换结果写入 Markdown 文件
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(result.document.export_to_markdown())

print(f"转换完成！Markdown 文件已保存至：{output_path}")
```

#### 使用说明

1. 将脚本中 `source` 修改为你的文件路径。
2. 运行脚本后，看到 `转换完成...` 提示，即表示文件已成功转换。
3. 转换后的 `.md` 文件将保存在原文件所在的文件夹内。

---

### 首次运行注意事项

如果转换 PDF 文件，首次运行时会下载 GPU 模型文件，如下所示：

![下载模型](https://img.makis-life.cn//images/20250114001733141.png)

> 如果你使用的是 NVIDIA 显卡，建议提前安装 [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) 来加速模型加载和处理。

---

<center>---END---</center>