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

## Mount Huawei Cloud OBS Locally Using rclone (Windows & Linux Guide)

### **Introduction**

You can mount Huawei Cloud OBS as a local directory or drive using rclone, allowing direct access via file explorer or editors. This guide covers full steps from installation to mounting, supporting both Windows and Linux.

---

### **1. Install rclone**

#### **Windows**

① Download rclone:

* Visit [rclone official site](https://rclone.org/downloads/) and download the Windows package.

② Extract files:

* Unzip to a folder like `C:\rclone`.

③ Set environment variable:

* Add `C:\rclone` to the system `Path` variable so you can run `rclone` from the command prompt directly.
* Steps: Right-click “This PC” > Properties > Advanced system settings > Environment Variables > edit `Path` > add `C:\rclone`.

#### **Linux**

① Download rclone:

```bash
curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip
```

② Extract and install:

```bash
unzip rclone-current-linux-amd64.zip
cd rclone-*-linux-amd64
sudo cp rclone /usr/bin/
sudo chmod +x /usr/bin/rclone
```

③ Verify installation:

```bash
rclone version
```

---

### **2. Configure Huawei Cloud OBS**

① Start rclone config:

```bash
rclone config
```

② Choose `n` to create new remote.

③ Name the remote (e.g., `HuaWeiOBS`).

④ Select storage type: enter `4` for **S3 Compatible Storage**.

⑤ Choose provider: enter `other` because Huawei OBS is S3 compatible.

⑥ Enter your Huawei Cloud `Access Key ID` and `Secret Access Key`.

⑦ Set endpoint:
Format: `https://<region>.obs.myhuaweicloud.com`
Example: Beijing 4 region is `https://obs.cn-north-4.myhuaweicloud.com`.

⑧ Leave region empty.

⑨ Select ACL: enter `1` for default **private** permission.

⑩ rclone will test the configuration and confirm connection.

---

### **3. Mount Huawei Cloud OBS**

#### **Windows**

① Make sure WinFsp is installed:

* Download from [WinFsp](http://www.secfs.net/winfsp/).

② Mount command example:

```bash
rclone mount HuaWeiOBS: H: --vfs-cache-mode writes
```

* Replace `HuaWeiOBS:` with your remote name.
* Replace `H:` with desired drive letter.

③ Check in File Explorer if drive `H:` appears.

##### Hide mount window with VBS script

① Create a `.vbs` file with content:

```vbscript
Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c rclone mount HuaWeiOBS: H: --vfs-cache-mode writes", 0, False
```

Save as `mount_huaweicloud.vbs`.

② Add to startup folder:

* Press `Win + R`, type `shell:startup`, copy the `.vbs` file there.

#### **Linux**

① Create mount directory:

```bash
mkdir -p ~/huaweicloud_obs
```

② Mount command:

```bash
rclone mount HuaWeiOBS: ~/huaweicloud_obs --vfs-cache-mode writes --daemon
```

③ Verify mount:

```bash
ls ~/huaweicloud_obs
```

##### Manage mount with systemd

① Create systemd service file:

```bash
sudo nano /etc/systemd/system/rclone-huaweicloud.service
```

Paste:

```ini
[Unit]
Description=Mount Huawei Cloud OBS with rclone
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/rclone mount HuaWeiOBS: /home/<your-username>/huaweicloud_obs --vfs-cache-mode writes
ExecStop=/bin/fusermount -u /home/<your-username>/huaweicloud_obs
Restart=always
User=<your-username>
Group=<your-groupname>

[Install]
WantedBy=default.target
```

Replace `<your-username>` and `<your-groupname>` accordingly.

② Enable and start service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable rclone-huaweicloud
sudo systemctl start rclone-huaweicloud
```

---

### **4. Unmount**

#### **Windows**

```bash
taskkill /IM rclone.exe /F
```

#### **Linux**

```bash
fusermount -u ~/huaweicloud_obs
```

---

### **5. Troubleshooting**

① Mount folder is empty:

* Check rclone config correctness, keys, and endpoint.

② Mount fails with WinFsp error:

* Install [WinFsp](http://www.secfs.net/winfsp/).

③ Cannot write files on Linux mount:

* Use `--vfs-cache-mode writes` flag.

④ Improve mount performance:

```bash
rclone mount HuaWeiOBS: ~/huaweicloud_obs --vfs-cache-mode full --vfs-cache-max-size 2G
```

---

This guide helps you easily mount Huawei Cloud OBS locally to manage cloud files directly.
