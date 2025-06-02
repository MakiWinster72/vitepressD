---
title: "静态网站部署实战（3）"
date: 2024年4月10日
draft: false
tags: 
    - "静态网站"
    - "部署"
categories: ["经验"]
---

# Preface
When I was still a newbie, my first website was built using an ECS server with WordPress for dynamic web pages. It was good, but had too little freedom (that must be because I didn't know how), and it was also expensive. Later, finding it ugly and having some opportunities to learn frontend knowledge, I started my journey of creating websites from scratch.

After learning some basics, I discovered static website hosting. How wonderful! Much better than dynamic websites - completely customizable from scratch, and hosting static pages is just deploying to public storage, very cheap and perfect for a college student's tight budget.

So I was excited and began my exploration journey of static websites.

## About Domain Registration
Actually, for personal use, personal domain registration is quite easy to pass. First-time registration requires some patience to explore.

But if individuals want to provide public services (maybe you can apply for personal use and then secretly share, but if caught...), it's nearly impossible in China.

Overall, it's better to buy servers abroad (or Hong Kong) - a bit slower but saves tremendous hassle with registration. Only consider dealing with registration when speed and security are absolutely crucial.

# Preparation
- The title mentions GitHub Pages, which means you'll need the ability to access it (VPN). If not available, you can try using [Watt Toolkit](https://steampp.net/) to accelerate GitHub services.
- 20-30 yuan for OSS + domain name
- Patience, it's quite lengthy, especially for first-time newbies dealing with these things. But the joy and satisfaction after successful setup make it worthwhile.

# Purchase and Configure OSS
1. Purchase Alibaba Cloud OSS -> [Alibaba Cloud - Search Results](https://www.aliyun.com/search?spm=5176.28508143.J_XmGx2FZCDAeIy2ZCWL7sW.11.5421154akztVdN&k=%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8OSS&scene=all&scm=20140722.SW_%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8OSS.P_128.MO_2076-ST_8458-V_1-ID_%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8OSS-OR_rec)
![[89438db29b45bd8bddd7781ef69d8271_MD5.jpg]]

2. Open [OSS Console](https://oss.console.aliyun.com/index) and create a bucket
![[88a910f3c11796d6cf835b4be774a6e1_MD5.jpg]]
Configure as shown, other settings can remain default
![[81238d029c50e06eb1816e67e7414088_MD5.jpg]]

3. Enter the Bucket
![[3a4f3c1212a9e6971f18127dc91aa457_MD5.jpg]]

4. Star these two items, you'll only need these two
![[e887c096998007067ba15178af9e7ae0_MD5.jpg]]

5. Design `index.html` and `error.html` locally, then click "File List" to **scan and upload** to the Bucket root directory.

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <header>
        <h1>Home Page</h1>
    </header>
    <main>
        <h2>Welcome to the Home Page</h2>
        <p>This is the content of the home page.</p>
    </main>
    <footer>
        <p>Copyright &copy; 2024 Website Name</p>
    </footer>
</body>
</html>
```

error.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Page</title>
</head>
<body>
    <h1>404</h1>
    <p>Sorry, page not found.</p>
    <p><a href="index.html">Return to Home Page</a></p>
</body>
</html>
```

6. Click Static Pages and configure as follows. Set subdirectory homepage according to your needs
![[d9a10aa586d26058a352fe9fcb8a77fa_MD5.jpg]]

# Configure GitHub Pages
## Create GitHub Repository
1. Go to [GitHub](https://github.com/), create an account then click the top right corner, click `Your Repositories` to enter your repositories.
![[f81d064e5ce937929fce5eab563ba0d9_MD5.jpg]]

2. Select create new repository
![Description](https://i-blog.csdnimg.cn/direct/f7cf01c0524040af8c8de3ef58cceb78.png)

3. Configure and create repository as follows
![[3a1b7f2705f4dea8fd163ff49b70a945_MD5.jpg]]
After clicking create, it will automatically redirect to your repository.

4. Upload `index.html` and `error.html` files to your repository
![[ba76d1ffdb38d12deca6172be9b55fbf_MD5.jpg]]

## Configure GitHub Pages
1. Click Settings
![[192aabf9c313c789e149ffe1fb5e57cb_MD5.jpg]]

2. Configure as follows
![[86b327103de837f94962344f8873d9af_MD5.jpg]]

3. Wait 2-3 minutes and refresh the page to see GitHub Pages successfully configured
![[ff51b92f70fa298cdc5686fa49af8271_MD5.jpg]]
Click Visit Site to preview your `index.html` file.

Now you have your own static page, but the URL is long and domestic access is very unstable (most people cannot smoothly open your webpage).

So, let's solve these problems in order: 1. Domestic access issues 2. Unattractive domain name

### Download GitHub Desktop
(Optional) Before this, since you'll always need to update your website design, friends familiar with Git (but maybe won't need this article haha) will find it simple. However, some people are unfamiliar or prefer user-friendly graphical interfaces, so here's how to use GitHub Desktop:

1. [Download GitHub Desktop](https://desktop.github.com/download/)
2. After installation, open it, return to your GitHub repository page, and copy the repository link
![[6ea2cb14e54284d1df42c943d1314ed0_MD5.jpg]]

3. Return to GitHub Desktop, click `File` in the top left corner, then select `Clone Repository`
4. Configure as follows to clone your repository
![[47afd97da6643bed7d17796ac05492ba_MD5.jpg]]

Great! Now you can abandon the GitHub website. For any local modifications, just open GitHub Desktop, Commit in the bottom left corner, then Push in the top right corner.

# Configure Vercel
## Host Static Website on Vercel
1. Login to [Vercel](https://vercel.com/)
2. Click `Log in` in the top right corner, then click `Continue with GitHub` to link your GitHub account
3. Create a new `Project`
![[ff388dd738ac64a3ca6cf690423248dc_MD5.jpg]]

4. Select the repository you just created
![[1200dca0ce3c998d8de074f0db0c6ba7_MD5.jpg]]

5. Configure as follows
![[33e867494f6e06818460f16e77c5a207_MD5.jpg]]

6. Wait about half a minute to see `Congratulations`, indicating successful deployment. Click `Continue to Dashboard` to go to the console.
![[749d67aea0b6c53e48b5283577a67214_MD5.jpg]]

7. Congratulations! You've successfully deployed a static website on Vercel, but the URL cannot be accessed domestically and isn't your own domain. Let's continue deploying your domain.
![[f63da549d6a33aab6d06e8c90142b39e_MD5.jpg]]

## Configure Your Own Domain on Vercel
1. After entering Deployment (2) in the image above, click Custom to configure domain
![[16fc7767936cd7f016c0825b98aa903b_MD5.jpg]]

2. Click `Edit`, then enter your desired website name and Save
![[d0b44c2559622bb5fa2ea632e3863190_MD5.jpg]]
![[47e9efefbee965a76543de4ce34a3e88_MD5.jpg]]

3. It will definitely show invalid configuration because you haven't purchased or configured it yet
![[144dda68d1a465a8f0d98ed1dd4b0b5a_MD5.jpg]]

# Purchase and Resolve Domain Name
You can choose your preferred domain registrar: Alibaba Cloud, Tencent Cloud, Huawei Cloud, JD Cloud, Namesilo, etc. Prices may vary slightly between platforms, so compare yourself. Here's an example using Alibaba Cloud.

1. Open [Alibaba Cloud Domain](https://wanwang.aliyun.com/domain/), search for your preferred domain name to purchase. Minimum is one year; if you need long-term use, pay attention to renewal prices.
![[7ace3407ac109b16d63e5ff8d97b3aeb_MD5.jpg]]

2. After purchase, go to Alibaba Cloud [Domain List](https://dc.console.aliyun.com/next/index?spm=5176.8466032.products-recent.ddomain.74b01450KHbe5O#/domain-list/all) and click `Resolve`
![[29be07c660c873b9b5b45cd50df64238_MD5.jpg]]

3. Ensure there are no "@" records in existing records, then configure as follows. I have several resolution records here because I've already configured them myself.
![[3db2483fa8729b070c65bfc6bd052578_MD5.jpg]]

4. After saving, wait a few minutes, return to Vercel and click `Refresh`. If it shows as below, congratulations~ your website is successfully configured!
![Description](https://i-blog.csdnimg.cn/direct/100f008037294b0da41bd5120c369059.png)

From now on, just edit your website locally, then use GitHub Desktop to push your progress. Your website will update with your added content in half a minute to a minute.

<hr>
<center>END</center>