---
title: 使用 Docling 转换多种文件格式为 Markdown
tags: [工具, Docling, Markdown]
categories: [工具]
date: 2024-11-19 15:31:24
author: Maki Winster
---

*Maki Winster posted on 2024-11-19 15:31:24*

## Using Docling to Convert Multiple File Formats to Markdown

When handling various file formats (such as `.pdf`, `.docx`, `.pptx`, etc.), mainstream text dialogue models (like [GPT](https://so.csdn.net/so/search?q=GPT) and Claude) have limited support, especially in parsing `.pptx` files. This causes inconvenience in some scenarios, such as batch processing files or quickly extracting content.

To solve this problem, the open-source project [Docling](https://github.com/DS4SD/docling) on GitHub provides powerful multi-format conversion capabilities. It supports converting PDF, DOCX, PPTX, images, HTML, AsciiDoc, and Markdown files into Markdown and JSON formats, which is very suitable for quick content organization or secondary processing.

~~Now stealing lecture slides is useful~~

---

### Installing Docling

1. **Install the tool**
   Open the command line (press `Win + R` and type `cmd`), then run the following command:

   ```cmd
   pip install docling
   ```

2. **Verify installation**
   After installation, check if it was successful:

   ```cmd
   pip show docling
   ```

   If you see output like this, the installation was successful:

   ![Installation Successful](https://img.makis-life.cn//images/20250114001406583.png)

---

### Convert Files to Markdown

Here is a simple Python script to convert files into Markdown format:

```python
from docling.document_converter import DocumentConverter
import os

# Source file path
source = r"Change this to your file path, e.g. C:\Users\MakiWinster\Desktop\classic_vocab.pdf"
file_dir = os.path.dirname(source)
file_name = os.path.splitext(os.path.basename(source))[0]
output_path = os.path.join(file_dir, f"{file_name}.md")

# Initialize converter
converter = DocumentConverter()
result = converter.convert(source)

# Write conversion result to Markdown file
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(result.document.export_to_markdown())

print(f"Conversion completed! Markdown file saved to: {output_path}")
```

#### Usage Instructions

1. Change the `source` in the script to your file path.
2. Run the script; when you see the "Conversion completed..." message, it means the file has been successfully converted.
3. The converted `.md` file will be saved in the same folder as the original file.

---

### Notes for First-Time Run

If converting PDF files, the first run will download GPU model files, as shown below:

![Downloading Model](https://img.makis-life.cn//images/20250114001733141.png)

> If you have an NVIDIA graphics card, it is recommended to install the [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit) in advance to accelerate model loading and processing.

---

<center>---END---</center>
