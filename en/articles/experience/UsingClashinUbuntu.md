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



## 🌐 Install Clash on Ubuntu x86_64 (Recommended if you already have a Windows proxy environment)

## 🚀 One-Click Installation of Clash

① Run the following command for a quick setup:

```bash
git clone --branch master --depth 1 https://gh-proxy.com/https://github.com/nelvko/clash-for-linux-install.git \
  && cd clash-for-linux-install \
  && sudo bash install.sh
````

⚠️ This script will automatically pull the Mihomo core, configure and start the service, and set up a systemd service (`mihomo.service`).

---

## 📦 If Git Fails (e.g., VPS network restrictions)

Download the project archive on Windows and upload it to Ubuntu via SFTP:

1. 👉 Download the GitHub project mirror:
   [https://github.com/nelvko/clash-for-linux-install](https://github.com/nelvko/clash-for-linux-install)

2. 👉 Use [FileZilla official site](https://filezilla-project.org/download.php?type=client) to upload to Ubuntu

3. After uploading, unzip and manually run the installation:

```bash
unzip clash-for-linux-install.zip
cd clash-for-linux-install
sudo bash install.sh
```

---

## 📺 Clash Web UI Management Panel

* Default dashboard URL:

```
http://<your-ip>:9090/ui/
```

* You can load the config with Clash for Windows or check status on the server:

```bash
clash status
```

---

## 🧪 Test Network Connectivity

* Test via `curl`:

```bash
curl -x http://127.0.0.1:7890 https://www.google.com
```

✅ If webpage content is returned, the HTTP proxy is working.

* Test via `ping`:

```bash
ping google.com
```

❌ If you see 100% packet loss, it's likely because **TUN mode is not enabled** (ICMP is not handled by standard HTTP proxies).

---

## 🛠 Enable TUN Mode to Fix Ping Issues

Edit the config file (path may vary; typically `/opt/clash/runtime.yaml`):

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

Restart the service:

```bash
sudo systemctl restart mihomo
```

Retry `ping`. If it still fails, check your VPS firewall or ISP restrictions.

---

## ✅ Post-Installation Check Commands

```bash
clash status                # Check Clash status
curl cip.cc                 # Test outbound IP
ss -tunlp | grep 7890       # Verify port is listening
```