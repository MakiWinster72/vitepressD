---
title: "静态网站部署实战（3）"
date: 2024年4月10日
draft: false
tags: 
    - "静态网站"
    - "部署"
categories: ["经验"]
---


# 前言
当我还是个小白的时候，第一次搭建网站是使用了ECS服务器，用的WordPress搭建的动态网页。好是好，但自由度太低了（那必须是我不会），而且也贵。没办法后面觉得丑，又有些缘机让我学到了点前端知识，开始了自己做网页的旅程。
学到点小皮毛后，发现了静态网页托管这个东西。这多好！比动态网页好多了，完全自己从0开始定制，托管静态网页也只是部署到公共存储上，非常便宜，太符合大学生苦涩的钱包了。
于是心动，开始了静态网页的探索之旅。
## 关于备案
其实对于个人来说，个人使用的备案还是很容易过的。第一次备案需要点耐心去探索。
但如果个人想做为公共服务的（也许可以申请个人使用然后偷偷分享，但被抓就...），在国内就是想p吃。
总体来说，要买服务器还是国外（或香港）的好，慢了点但是备案真的省去非常多麻烦。在十分需要速度和安全的情况下，再考虑折腾备案吧。
# 准备
- 标题中提到了GitHubPages，这表明你会需要魔法的能力。如果没有，也可以尝试使用[Watt Toolkit](https://steampp.net/)加速GitHub服务。
- 二三十块钱，用于OSS+域名
- 耐心，蛮长的，特别是对于第一次折腾这些的小白。但也是折腾后看到成功，才开心满足。
# 购买并配置OSS
1. 购买阿里云OSS -> [阿里云-搜索推荐页 (aliyun.com)](https://www.aliyun.com/search?spm=5176.28508143.J_XmGx2FZCDAeIy2ZCWL7sW.11.5421154akztVdN&k=%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8OSS&scene=all&scm=20140722.SW_%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8OSS.P_128.MO_2076-ST_8458-V_1-ID_%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8OSS-OR_rec)
![[89438db29b45bd8bddd7781ef69d8271_MD5.jpg]]
2. 打开[OSS控制台](https://oss.console.aliyun.com/index),创建一个bucket
![[88a910f3c11796d6cf835b4be774a6e1_MD5.jpg]]
按这样设置，其他的默认即可
![[81238d029c50e06eb1816e67e7414088_MD5.jpg]]
3. 进入Bucket
![[3a4f3c1212a9e6971f18127dc91aa457_MD5.jpg]]
4. 标星这两个，只需要用到这两个
![[e887c096998007067ba15178af9e7ae0_MD5.jpg]]

5. 在本地设计好`index.html`和`error.html`，点击“文件列表”**扫描并上传**到Bucket根目录。
index.html
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>主页</title>
</head>
<body>
    <header>
        <h1>主页</h1>
    </header>
    <main>
        <h2>欢迎来到主页</h2>
        <p>这是主页的内容。</p>
    </main>
    <footer>
        <p>版权 &copy; 2024 网站名称</p>
    </footer>
</body>
</html>

```

error.html
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>错误页面</title>
</head>
<body>
    <h1>404</h1>
    <p>抱歉，页面未找到。</p>
    <p><a href="index.html">返回主页</a></p>
</body>
</html>
```
6. 点击静态页面，按如下设置。子页面首页看你需不需要
![[d9a10aa586d26058a352fe9fcb8a77fa_MD5.jpg]]
# 配置GitHubPages
## 创建GitHub仓库
1. 进入[GitHub](https://github.com/)，创建一个账号然后点击右上角，点击`You Repository`进入你的仓库。
![[f81d064e5ce937929fce5eab563ba0d9_MD5.jpg]]
2. 选择新建仓库
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/f7cf01c0524040af8c8de3ef58cceb78.png)
3. 按如下设置创建仓库
![[3a1b7f2705f4dea8fd163ff49b70a945_MD5.jpg]]
点击创建后，会自动跳转到你的仓库。
4. 上传`index.html`和`error.html`文件到你的仓库中
![[ba76d1ffdb38d12deca6172be9b55fbf_MD5.jpg]]
## 配置GitHubPages
1. 点击Settings
![[192aabf9c313c789e149ffe1fb5e57cb_MD5.jpg]]
2. 按如下设置
![[86b327103de837f94962344f8873d9af_MD5.jpg]]
 3. 稍等2-3分钟刷新页面，即可看见GitHubPages已经配置成功
![[ff51b92f70fa298cdc5686fa49af8271_MD5.jpg]]
点击VisitSite就可以预览你的`index.html`文件了。
这时候你已经有属于你的静态页面了，但是呢网址很长，而且国内访问也非常不稳定（大部分人无法顺利打开你的网页）。
所以，以下依次解决问题：1. 国内无法访问  2. 域名不好看

### 下载GitHub DeskTop
（可选）在此之前，由于网站你始终是要更新设计的嘛，熟悉Git的朋友（但也许也不会需要我这篇文章哈哈哈）就简单了，不过总有人不熟悉，或者更偏向于易懂的图形化界面，所以下面教各位使用GitHub Desktop：
1. [下载GitHubPages](https://desktop.github.com/download/)
2. 安装好后打开，返回GitHub仓库页面，复制页面的仓库链接
![[6ea2cb14e54284d1df42c943d1314ed0_MD5.jpg]]
3. 回到GitHubPages，点击左上角的`Files`然后选择`clone repository`
4. 按如下配置以clone你的仓库
![[47afd97da6643bed7d17796ac05492ba_MD5.jpg]]
好了，你之后就可以丢掉GitHub了，在本地有任何修改，只需要打开GitHub Desktop，左下角Commit然后右上角Fetch即可
# 配置Vercel
## 在Vercel上托管静态网页
1. 登录[Vercel](https://vercel.com/)
2. 右上角点击`log in`, 然后点击`Continue with GitHub`，链接你的GitHub账户即可
3. 新建一个`Project`
![[ff388dd738ac64a3ca6cf690423248dc_MD5.jpg]]
4. 选择你刚才创建的仓库
![[1200dca0ce3c998d8de074f0db0c6ba7_MD5.jpg]]
5. 按如下设置
![[33e867494f6e06818460f16e77c5a207_MD5.jpg]]
6. 稍等半分钟左右，即可看见`Congratulations`，代表已经部署成功，点击`Continue to DashBoard`去控制台。
![[749d67aea0b6c53e48b5283577a67214_MD5.jpg]]
7. 恭喜！至此，你已经在Vercel上成功部署静态网页，但网址国内无法访问并且不是自己的域名，接下来继续部署你的域名。
![[f63da549d6a33aab6d06e8c90142b39e_MD5.jpg]]
## 在Vercel上配置自己的域名
1. 进入上图的2(Deployment)后，点击这个Cutsom进行配置域名
![[16fc7767936cd7f016c0825b98aa903b_MD5.jpg]]
2. 点击`Edit`，然后输入自己想要的网址名字，Save
![[d0b44c2559622bb5fa2ea632e3863190_MD5.jpg]]
![[47e9efefbee965a76543de4ce34a3e88_MD5.jpg]]
3. 必定会显示无效设置，因为你没买也没配置
![[144dda68d1a465a8f0d98ed1dd4b0b5a_MD5.jpg]]
# 购买并解析域名
你可以选择一个喜欢的域名商，阿里云、腾讯云、华为云、京东云、Namesilo等，各个平台价格会有略微出入，自行比价。这里以阿里云为例子。
1. 打开[阿里云万网](https://wanwang.aliyun.com/domain/)，搜索自己喜欢的域名进行购买。最短为一年，如果需要长期使用，请留意后续续费价格。
![[7ace3407ac109b16d63e5ff8d97b3aeb_MD5.jpg]]
 2. 购买完成后，进入阿里云[域名列表](https://dc.console.aliyun.com/next/index?spm=5176.8466032.products-recent.ddomain.74b01450KHbe5O#/domain-list/all)，点击`解析`
![[29be07c660c873b9b5b45cd50df64238_MD5.jpg]]
3. 确保已经存在的记录里面没有“@”的记录，然后按如下配置。我这里因为已经自行配置过，所以已经有好几个解析记录。
![[3db2483fa8729b070c65bfc6bd052578_MD5.jpg]]
3. 保存好后，稍微几分钟，返回Vercel点击`Refresh`，如果如下显示，恭喜~你的网站已经配置成功啦！
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/100f008037294b0da41bd5120c369059.png)

之后就自行在本地编辑你的网站，然后用GitHub Desktop来Push你的进程，半分钟一分钟你的网站就会更新你添加的内容了。
<hr>
<center>END</center>