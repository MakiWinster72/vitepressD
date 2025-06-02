---
title: 解决 MySQL Server 8.0 文件夹下没有 data 文件夹、my.ini 文件的问题
tags: [MySQL, 数据库, 安装问题]
date: 2025年6月2日
author: MakiWinster
---


# Fixing the Missing `data` Folder and `my.ini` File in MySQL Server 8.0 Installation

## Background

When starting the MySQL 8.0 service, you may encounter the error:

> The MySQL80 service on Local Computer started and then stopped.

Upon further inspection, you might notice:

* ❌ The `data` folder is missing in the `MySQL Server 8.0` installation directory
* ❌ There is no `my.ini` configuration file
* ❌ The service is not visible in *Data Source Explorer*

## Solution Steps ✅

① **Verify the installation path**

* Search "MySQL Server 8.0" in the taskbar, right-click it → choose **Open file location**
* You will find the actual path, for example:
  `C:\Program Files\MySQL\MySQL Server 8.0\`

② **Open Command Prompt as Administrator**

* Search for `cmd`, right-click → choose **Run as administrator**

③ **Navigate to the MySQL `bin` directory**

* Use `cd` to enter the directory
  `C:\Program Files\MySQL\MySQL Server 8.0\bin`

④ **Register the service (optional)**

* Run `mysqld --install`

> ⚠️ Must be run as administrator; otherwise, registration will fail.

⑤ **Initialize the MySQL data directory**

* Run `mysqld --initialize-insecure --user=mysql`

  * `--initialize-insecure`: No password is set for the root user (i.e., it will be blank)
  * This step will automatically generate the missing `data` folder 🎉

⑥ **Start the MySQL service**

* Run `net start mysql`

  * If you see "The MySQL service was started successfully", then everything is set ✅

## Additional Notes

* If you need a `my.ini` file later, you can manually create one in the installation directory with content like:

```ini
[mysqld]
basedir="C:/Program Files/MySQL/MySQL Server 8.0/"
datadir="C:/Program Files/MySQL/MySQL Server 8.0/data/"
port=3306
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```

* If startup fails, check Windows Services or use `eventvwr.msc` to view system logs

## Final Result 💡

* ✅ `data` folder successfully created
* ✅ Service starts normally
* ✅ You can now use the `mysql` command to access the database via CLI
