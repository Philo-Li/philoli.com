---
title: 从零开始搭建 Hexo 博客简明教程（2024版）
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
你是不是早就厌倦了那些博客网站毫无美感的界面，是不是受够了无休无止的网站推送，是不是早就想建立一个属于自己的博客，却止步于复杂的教程以及一系列令人头疼的代码？那么恭喜你，这篇文章就是想以最浅显易懂的方式手把手教你搭建属于自己的博客，你只需要一点耐心，一步步跟着做。

<!--more-->

Hexo 作为一个快速、简洁且高效的博客框架，简直是小白们的福音，而 GitHub 又免去了我们额外租用并部署服务器的麻烦。因此本文将利用 Hexo 及 GitHub 搭建博客。

曾经我在 2018 年写过一篇 [从零开始搭建博客简明教程](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/),因为插件的更新，有一些细节需要改动，因此重新推出 2024 版的简明教程。

### 准备工作

* 下载安装 node.js （[官网下载安装](https://nodejs.org/en/)）
* 下载安装 git （[官网下载安装](https://git-scm.com/downloads)）

### 本地搭建 hexo 静态博客

* 安装 hexo 框架: 打开 cmd 运行
  
 ```bash
 $ npm install -g hexo-cli
 ```

* 新建一个文件夹，如 MyBlog ，进入该文件夹内，右击运行 git ，输入：

 ```bash
 $ hexo init
 ```

* 生成完 hexo 模板，安装 npm ，运行：

 ```bash
$ npm install
 ```

没错，博客的主体部分到此已经完成了，来看看效果吧。运行：

```bash
$ hexo server
```

这时候打开浏览器，输入 localhost:4000 就可以看到博客目前的样子了。小小激动一下，然后按 Ctrl + C 就可以继续下面的操作了。

### 个性化设置（初步）

#### 更换主题

* 下载新的主题（以[NexT 主题]( http://theme-next.iissnan.com/ )为例），在根目录下运行：
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* 打开根目录下的 `_config.yml`，修改字段 `theme` 为:

 ```bash
theme: next
 ```

* 选择外观：打开 `/themes/next/_config.yml` ， 找到 `scheme` 字段（可用 Ctrl + F 快捷查找）。NexT提供了三种不同的外观，可以挑选一个自己喜欢的，然后去掉其中一个的 # 号(后续主要修改的也就是这两个文件： _站点配置文件_ 和 _主题配置文件_ 。)。

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* 查看效果，可运行如下命令(以后每次想查看效果都可重复此步骤)：

```bash
hexo g #或者 hexo generate
hexo server
```

#### 站点配置

* 使用编辑器打开根目录下的站点配置文件 `_config.yml` （ Windows下不要使用记事本编辑，中文标题会出现乱码），修改字段 `Site` ， 注意冒号后面要有空格：

 ```bash
 # Site
 title: 未知的世界                //博客名称
 subtitle:
 description:  Do something cool //一句签名
 author: LulalaP                 //作者
 language: zh-Hans               //网站语言
 timezone:
 ```

### 设置侧边栏头像

* 在 `/source` 中新建文件夹并命名为 `uploads` , 将头像图片（如： avatar.jpg ）放到该文件夹内

* 打开 `/themes/next/_config.yml` ，找到字段 `avatar` 并修改为:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### 完善博客页面

#### 添加菜单
* 打开 `/themes/next/_config.yml` ，将字段 `menu` 中需要添加的菜单前面的注释去掉即可。如需要添加其他菜单可按需添加（注意字段的缩进）：

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### 创建分类页面

* 新建一个页面，命名为 `categories` ，命令如下：

 ```bash
 $ hexo new page categories
 ```

* 编辑刚新建的页面 `/source/categories/index.md` ，将页面的类型设置为 `categories` ，主题将自动为这个页面显示所有分类（注意保留冒号后的空格）。

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### 创建标签云界面

* 新建一个页面，命名为 tags ，命令如下:

 ```bash
 $ hexo new page "tags"
 ```

* 编辑刚新建的页面，将页面的类型设置为 tags ，主题将自动为这个页面显示标签云。

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### 创建"关于我"页面

 * 新建一个 about 页面：

 ```bash
 $ hexo new page "about"
 ```

 * 编辑刚新建的页面，可在正文处用 Markdown 格式写下信息。
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### 设置侧边栏社交链接

* 编辑站点的 `_config.yml`，找到字段 `social` ，然后添加社交站点名称与地址即可。键值格式为 `显示名称：链接地址` ，例如：

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* 打开 `/themes/next/_config.yml`, 在 `social_icons` 字段下添加社交站点名称（注意大小写）与(图标)[http://fontawesome.io/icons/]。 enable 选项用于控制是否显示图标，你可以设置成 `false` 来去掉图标。例如：

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### 将博客与GitHub关联

 * 注册 GitHub 账号：如果还没有 GitHub 账号的，需要先注册一个

 * 在 Github 上创建名字为 `XXX.github.io` 的项目，XXX为自己的 GitHub 用户名。

 * 打开本地的 `MyBlog` 文件夹项目内的 `_config.yml` 配置文件，将其中的 `type` 设置为 `git` :
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * 运行：
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 * 本地生成静态文件，并将静态文件推送至GitHub，运行：

```bash
hexo g
hexo d
```

 此时，打开浏览器，访问 http://your-name.github.io ，恭喜你，到此为止你的博客已经建设完毕了。

### 绑定域名

到目前为止博客已经全部搭建完成，也能通过 GitHub 的域名访问，这时候再用一个短域名绑定到这个博客上就更完美了。

#### 域名购买

* 购买一个域名，推荐在 [namesilo.com](https://www.namesilo.com/) 上购买，老牌的域名提供商，价格优惠服务靠谱。如果你使用我的推荐码 `PhiloArt.io`，还可以可获得优惠 1 美元，有效期至 2025-12-31。

### 域名解析

* 域名提供商 DNS 设置

* 添加 4 条 A 记录，用于指向 GitHub Pages：

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* 添加一条 `CNAME` 记录，`name` 为 `www`，`content` 为 `your-name.github.io`（指向你的 Github Pages 地址）：

 > CNAME —> philo-li.github.io

* 更详细的设置请参见 [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

* 博客目录添加 CNAME 文件

 配置完域名解析后，进入博客目录，在 `source` 目录下新建一个命名为 `CNAME` 的文件(注意要大写，没有后缀)，用记事本打开编辑，写入购买好的域名，如：`www.philoli.com`

* 运行：

```bash
hexo g
hexo d
```

现在打开浏览器，输入域名，回车，恭喜你已经拥有了一个属于自己独立域名的博客。

### 发布新文章

* 在博客根目录下执行：`hexo new “我的第一篇文章”`，会在 `source/_posts` 文件夹内生成一个 `.md` 文件。

* 编辑该文件，修改起始字段为：

 ```bash
 title 文章的标题
 date 创建日期 （文件的创建日期 ）
 updated 修改日期 （ 文件的修改日期）
 comments 是否开启评论 true
 tags 标签
 categories 分类
 permalink url中的名字（文件名）
 ```

* 编写正文内容(遵循 Markdown 规则)

* 本地生成静态文件，并将静态文件推送至 GitHub，运行：

```bash
hexo g
hexo d
```

### 个性化设置（进阶）

下面提供一些进阶的个性化博客样式设置，新手可先跳过。

#### 添加 RSS

 * 在根目录下安装插件

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * 在根目录的 `_config.yml` 里面的末尾添加：(**_请注意在冒号后面要加一个空格，不然会发生错误！_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * 打开 `/themes/next/_config.yml` ,修改 `rss` (注意在冒号后面要加一个空格)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### 首页文章截断
 * 每次写文章正文时，只需要在文章 .md 中需要截断的地方增加：

 ```markdown
     <!--more-->
 ```

 * 打开 `/themes/next/_config.yml`，修改 `scroll_to_more` 这个选项设置为 `false` 。

#### 文章内的引用文字居中
* 优化了 Markdown 默认的引用的样式

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### 修改代码块样式

* 编辑 `/themes/next/_config.yml` ，修改 `codeblock` 配置如下

```yml
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # See: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result.
    show_result: true
    # Available values: default | flat | mac
    style:
```

#### 设定站点建立时间

 * 编辑站点的 `_config.yml` ，新增字段 `since` 。

```bash
since: 2024
```

#### 改进文章链接样式

* 编辑修改文件 `themes\next\source\css\_common\components\post\post.styl`，在末尾添加如下 css 样式，：

``` css
// link style
.post-body p a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

#### 给博客增加背景图
* 在根目录的 `source` 文件夹下创建 `_data` 文件夹，新建 `styles.styl` 文件，打开新建的文件 `source/_data/styles.styl`，添加如下内容

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //图片无法铺满时，是否重复以及重复方式
    background-attachment:fixed;    //图片是否跟随滚动
    background-size: cover;         //覆盖
    background-position:50% 50%;    //图片位置
}
```
* url 中可以是图片链接，或者是图片目录。可以将图片命名为 `background.jpg`，并放入 `source/uploads` 文件夹内。

#### 博客内容背景设置半透明
* 打开上一步编辑的文件 `source/_data/styles.styl`，继续在下面增加如下内容

```css

//博客内容透明化
//文章内容的透明度设置
if (hexo-config('motion.transition.post_block')) {
  .post-block {
    background: rgba(255,255,255,0.9);
    opacity: 0.9;
    radius: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 40px;
    -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
    -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
  }
  .pagination, .comments {
    opacity: 0;
  }

  +tablet() {
    margin: 20px;
    padding: 10px;
  }

  +mobile() {
    margin: 15px;
    padding: 15px;
  }
}


//侧边框的透明度设置
.sidebar {
  opacity: 0.9;
}

//菜单栏的透明度设置
.header-inner {
  background: rgba(255,255,255,0.9);
}

//搜索框（local-search）的透明度设置
.popup {
  opacity: 0.9;
}
```

#### 优化行内代码块的样式
* 打开上一步编辑的文件 `source/_data/styles.styl`，继续在下面增加如下内容

```css
// 针对Code代码标签的美化
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### 给网站底部增加访问者数量

* 编辑修改文件

```css
# 找到 copyright 这一标签栏，然后在标签内部添加代码

<div class="copyright">
# ......这里已经有了一些配置
# 在这里添加新的代码
</div>

# 添加后是这样：
<div class="copyright">
  # ......这里已经有了一些配置
  # 在这里添加新的代码
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* 重新生成预览修改后的效果，确认没问题后发布

```bash
hexo g
hexo s
# 确认没问题后发布
hexo d
```

#### 给仓库添加 README.md 文件

每个项目下一般都有一个 `README.md` 文件，但是使用 hexo 部署到仓库后，项目下的 `README.md` 文件会被覆盖，所以需要设置配置文件避免覆盖。

在 `Hexo` 目录下的 `source` 根目录下添加一个 `README.md` 文件，修改站点配置文件 `_config.yml`，将 `skip_render` 参数的值设置为

```yml
skip_render: README.md
```
保存退出即可。再次使用 `hexo d` 命令部署博客的时候就不会渲染 `README.md` 这个文件了。

#### 几个常用插件

- Hexo Filter MathJax：渲染数学公式
  - 安装 `npm install hexo-filter-mathjax`
  - 详细配置：[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter：文章字数统计
  - 安装 `npm install hexo-word-counter`
  - 详细配置：[hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize：优化博客加载速度
  - 安装 `npm install hexo-optimize`
  - 详细配置：[hexo-optimize](https://github.com/next-theme/hexo-optimize)
- 更多插件：[https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### 源文件备份

- 切记备份好本地的源文件，尤其是 Markdown 文件，其他配置一旦丢失则无法正常写博客，需要从头开始设置
- 建议使用 GitHub 同一个仓库备份
- 建议每当有一些改动就备份一次，或者每日备份一次
- 更多用法请查看 [Git 文档](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) 

```bash
# 添加前面设置好的博客仓库地址
git remote add https://github.com/your-name/your-name.github.io.git

# 添加并保存当前改动，并记录备注
git add .
git commit -m "源文件更新"

# 建立并切换到新的分支
git checkout -b source

# 将本地 source 分支的全部内容推送到远端仓库的 source 分支
git push origin source:source
```

### 用不同的电脑写博客
- 当在不同的电脑上写博客时，需要进行基础软件安装，再拉取远端备份 GitHub 的仓库到本地，进行博客的更新

* 下载安装 node.js （[官网下载安装](https://nodejs.org/en/)）
* 下载安装 git （[官网下载安装](https://git-scm.com/downloads)）
* 安装 hexo 框架: 打开 cmd 运行

 ```bash
 npm install -g hexo-cli
```
* 进行本地更新

```bash
# 克隆仓库到本地
git clone https://github.com/your-name/your-name.github.io.git

# 如果本地已经克隆，每次更新博客前都需要拉取最新分支内容
git pull origin

# 切换到对应分支
git checkout source

# 安装 hexo 配置下的全部插件后可以开始更新编辑博客内容
npm install

# 修改内容后记得及时备份一条龙
git add .
git commit -m "博客更新xxx"
git push origin source:source

# 发布推送最新博客内容到域名站点
hexo clean
hexo g  # 生成静态文件
hexo s  # 本地预览博客效果
hexo d  # 发布最新博客内容
```

### 几个常用命令汇总

 ```bash
hexo g
#或 hexo generate，根据源文件生成静态网页
hexo d
#或 hexo deploy，发布推送到 GitHub Pages
hexo s
#或 hexo server，本地部署测试
hexo clean
# 清空静态网页 cache，然后 hexo d 重新生成
 ```
