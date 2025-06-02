---
title: 使用 Clash 在 Ubuntu x86_64 上科学上网
date: 2023年五月26日 06:29:09
tags: 
  - Ubuntu
  - Clash
  - 科学上网
categories: [Ubuntu]
description: 使用 Clash 在 Ubuntu x86_64 上科学上网
cover: https://img.makis-life.cn//images/20250526062909626.png
---



## 🌐 在 Ubuntu x86_64 安装 Clash（建议已有 Windows 魔法环境）


## 🚀 一键安装 Clash

① 直接使用下面命令快速安装：

```bash
git clone --branch master --depth 1 https://gh-proxy.com/https://github.com/nelvko/clash-for-linux-install.git \
  && cd clash-for-linux-install \
  && sudo bash install.sh
````

⚠️ 该脚本将自动拉取 Mihomo 内核、配置启动服务，并设置好系统服务（`mihomo.service`）

---

## 📦 如果 Git 拉取失败（如 VPS 网络受限）

在 Windows 上提前下载项目压缩包并通过 SFTP 上传至 Ubuntu：

1. 👉 下载地址（GitHub项目镜像）：  
    [https://github.com/nelvko/clash-for-linux-install](https://github.com/nelvko/clash-for-linux-install)
    
2. 👉 使用 [FileZilla 官网链接](https://filezilla-project.org/download.php?type=client) 上传至 Ubuntu
    
3. 上传完成后解压并手动执行安装：
    

```bash
unzip clash-for-linux-install.zip
cd clash-for-linux-install
sudo bash install.sh
```

---

## 📺 Clash 可视化管理面板

- 默认控制面板地址：
    

```
http://<你的IP>:9090/ui/
```

- 可使用 Clash for Windows 客户端读取配置，或在服务端运行：
    

```bash
clash status
```

---

## 🧪 测试网络连通性

- 使用 `curl` 测试：
    

```bash
curl -x http://127.0.0.1:7890 https://www.google.com
```

✅ 正常返回网页内容即说明 HTTP 代理工作正常。

- 使用 `ping` 测试：
    

```bash
ping google.com
```

❌ 若提示 100% packet loss，通常是因为 **未启用 TUN 模式**（ICMP 协议无法被普通代理接管）

---

## 🛠 启用 TUN 模式排查 ping 问题

编辑配置文件（路径视安装方式可能为 `/opt/clash/runtime.yaml`）：

```yaml
tun:
  enable: true
  stack: system
  auto-route: true
  auto-detect-interface: true
  dns-hijack:
    - any:53
    - tcp://any:53
  strict-route: true
```

重启服务：

```bash
sudo systemctl restart mihomo
```

再测试 `ping`，如仍失败请确认 VPS 防火墙或运营商限制。

---

## ✅ 安装完成后可执行检查命令

```bash
clash status        # 查看 Clash 状态
curl cip.cc         # 测试出口 IP
ss -tunlp | grep 7890  # 检查监听端口
```
