---
title: 利用 rclone 挂载华为云 OBS 到本地（Windows 和 Linux 教程）
description: 利用 rclone 挂载华为云 OBS 到本地（Windows 和 Linux 教程）
keywords: rclone, 华为云, OBS, 挂载
tags: 
  - 经验分享
  - rclone
  - 华为云
  - OBS
  - 挂载
date: 2023年03月29日
---

# 利用 rclone 挂载华为云 OBS 到本地（Windows 和 Linux 教程）

## **前言**

通过 rclone 可以将华为云 OBS 挂载到本地目录或盘符，直接使用文件管理器或编辑器对其操作。本文将详细介绍从下载安装到挂载的完整步骤，支持 Windows 和 Linux。

---

## **1. 安装 rclone**

### **Windows 系统**

1. 下载 rclone：
    - 打开 [rclone 官网](https://rclone.org/downloads/) 下载适用于 Windows 的安装包。
2. 解压文件：
    - 将下载的压缩包解压到指定目录（如 `C:\rclone`）。
3. 配置环境变量：
    - 将解压路径添加到系统环境变量 `Path` 中，确保可以在命令提示符中直接运行 `rclone`。
    - 操作方法：
        1. 右键 "此电脑" > 属性 > 高级系统设置 > 环境变量。
        2. 在系统变量中找到 `Path`，点击 **编辑**，新增 `C:\rclone`。

### **Linux 系统**

1. 下载 rclone：
    
    ```bash
    curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip
    ```
    
2. 解压文件：
    
    ```bash
    unzip rclone-current-linux-amd64.zip
    cd rclone-*-linux-amd64
    sudo cp rclone /usr/bin/
    sudo chmod +x /usr/bin/rclone
    ```
    
3. 验证安装：
    
    ```bash
    rclone version
    ```
    

---

## **2. 配置华为云 OBS**

1. 运行 rclone 配置命令：
    
    ```bash
    rclone config
    ```
    
2. 选择操作：
    - 输入 `n` 创建新远程连接。
3. 输入远程名称：
    - 例如：`HuaWeiOBS`。
4. 选择存储类型：
    - 输入 `4`，选择 **S3 Compatible Storage**。
5. 输入服务提供商：
    - 输入 `other`，因为华为云 OBS 是 S3 兼容存储。
6. 配置 `Access Key` 和 `Secret Key`：
    - 按提示输入你的华为云 OBS 的 `Access Key ID` 和 `Secret Access Key`。
7. 设置终端节点（endpoint）：
    - 终端节点格式：`https://<region>.obs.myhuaweicloud.com`
    - 例如，北京四区域为：`https://obs.cn-north-4.myhuaweicloud.com`。
8. 配置区域（region）：
    - 直接留空。
9. 选择 ACL 权限：
    - 输入 `1`，选择默认的 **private**（私有权限）。
10. 测试配置：
    - rclone 会尝试连接你的存储，确认配置无误。

---

## **3. 挂载华为云 OBS**

### **Windows 系统**

1. 确保已安装 WinFsp：
    - [WinFsp 下载地址](http://www.secfs.net/winfsp/)。
2. 运行挂载命令：
    
    ```bash
    rclone mount HuaWeiOBS: H: --vfs-cache-mode writes
    ```
    
    - 替换 `HuaWeiOBS:` 为你的远程名称。
    - 替换 `H:` 为你希望挂载的盘符。
3. 打开资源管理器，确认 `H:` 盘是否出现。

#### **隐藏挂载窗口（使用 VBS）**

1. 创建 VBS 脚本：
    - 打开记事本，输入以下内容：
        
        ```vbscript
        Set WshShell = CreateObject("WScript.Shell")
        WshShell.Run "cmd /c rclone mount HuaWeiOBS: H: --vfs-cache-mode writes", 0, False
        ```
        
    - 保存为 `mount_huaweicloud.vbs`。
2. 设置开机启动：
    - 按 `Win + R`，输入 `shell:startup`，将 `mount_huaweicloud.vbs` 文件复制到该文件夹。

### **Linux 系统**

1. 创建挂载目录：
    
    ```bash
    mkdir -p ~/huaweicloud_obs
    ```
    
2. 运行挂载命令：
    
    ```bash
    rclone mount HuaWeiOBS: ~/huaweicloud_obs --vfs-cache-mode writes --daemon
    ```
    
3. 检查挂载：
    
    ```bash
    ls ~/huaweicloud_obs
    ```
    

#### **使用 systemd 管理挂载**

1. 创建 systemd 服务文件：
    
    ```bash
    sudo nano /etc/systemd/system/rclone-huaweicloud.service
    ```
    
    内容如下：
    
    ```ini
    [Unit]
    Description=Mount HuaWei Cloud OBS with rclone
    After=network-online.target
    Wants=network-online.target
    
    [Service]
    Type=simple
    ExecStart=/usr/bin/rclone mount HuaWeiOBS: /home/<your-username>/huaweicloud_obs \
        --vfs-cache-mode writes
    ExecStop=/bin/fusermount -u /home/<your-username>/huaweicloud_obs
    Restart=always
    User=<your-username>
    Group=<your-groupname>
    
    [Install]
    WantedBy=default.target
    ```
    
    替换 `<your-username>` 和 `<your-groupname>` 为你的用户名和用户组名。
2. 启用和启动服务：
    
    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable rclone-huaweicloud
    sudo systemctl start rclone-huaweicloud
    ```
    

---

## **4. 卸载挂载**

### **Windows 系统**

运行以下命令卸载挂载：

```bash
taskkill /IM rclone.exe /F
```

### **Linux 系统**

运行以下命令卸载挂载：

```bash
fusermount -u ~/huaweicloud_obs
```

---

## **5. 常见问题与解决方法**

1. **挂载后文件夹为空**：
    - 检查 `rclone` 配置是否正确。
    - 确保终端节点和密钥有效。
2. **挂载失败报错 `WinFsp` 未安装**：
    - 确保安装了 [WinFsp](http://www.secfs.net/winfsp/)。
3. **Linux 挂载后无法写入文件**：
    - 使用 `--vfs-cache-mode writes` 参数。
4. **如何提高挂载性能**：
    - 增加缓存设置，例如：
        
        ```bash
        rclone mount HuaWeiOBS: ~/huaweicloud_obs \
            --vfs-cache-mode full --vfs-cache-max-size 2G
        ```
        

---

通过以上教程，你可以轻松将华为云 OBS 挂载到本地，方便直接操作云端文件。