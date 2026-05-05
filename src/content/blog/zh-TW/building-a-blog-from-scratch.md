---
title: 從零開始架設 Hexo 部落格簡易教學（2024年版）
date: 2024-04-11 00:25:20
tags: 部落格架設
categories: 日常折騰
---
你是不是早就受夠了那些部落格網站毫無美感的介面，厭倦了無止盡的網站推播，一直很想建立一個專屬自己的部落格，卻被繁瑣的教學和一堆令人頭疼的程式碼給嚇退了呢？那麼恭喜你，這篇文章就是要用最淺顯易懂的方式，手把手教你架設專屬於自己的部落格。你只需要多一點耐心，一步一步跟著做就行了。

<!--more-->

Hexo 是一個快速、簡潔又高效的部落格框架，簡直是新手們的救星；而 GitHub 又省去了我們額外租用及部署伺服器的麻煩。所以這篇文章會運用 Hexo 和 GitHub 來架設部落格。

我曾在 2018 年寫過一篇 [從零開始搭建博客簡明教程](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/)，由於外掛更新，有些細節需要調整，所以這次重新推出 2024 年版的簡易教學。

### 準備工作

*   下載並安裝 node.js （[前往官網下載安裝](https://nodejs.org/en/)）
*   下載並安裝 git （[前往官網下載安裝](https://git-scm.com/downloads)）

### 本地架設 Hexo 靜態部落格

*   安裝 Hexo 框架：開啟命令提示字元 (cmd) 並執行
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   新建一個資料夾，例如 MyBlog，進入該資料夾後，點擊右鍵執行 git，然後輸入：

 ```bash
 $ hexo init
 ```

*   Hexo 模板生成完畢後，安裝 npm，接著執行：

 ```bash
$ npm install
 ```

沒錯，部落格的主體部分到這裡就完成了，趕快來看看效果吧。執行：

```bash
$ hexo server
```

這時候打開瀏覽器，輸入 localhost:4000 就能看到部落格目前呈現的樣子了。先小雀躍一下，然後按下 Ctrl + C 就可以繼續接下來的操作了。

### 個人化設定（初步）

#### 更換佈景主題

*   下載新的佈景主題（以[NexT 佈景主題]( http://theme-next.iissnan.com/ )為例），在根目錄下執行：
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   打開根目錄下的 `_config.yml`，將 `theme` 欄位修改為：

 ```bash
theme: next
 ```

*   選擇外觀：打開 `/themes/next/_config.yml`，找到 `scheme` 欄位（可以使用 Ctrl + F 快速搜尋）。NexT 提供了三種不同的外觀，你可以挑選一個自己喜歡的，然後移除其中一個 `#` 符號（之後主要修改的就是這兩個檔案：_網站設定檔_ 和 _佈景主題設定檔_）。

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   查看效果，可以執行以下指令（之後每次想查看效果都可以重複此步驟）：

```bash
hexo g #或者 hexo generate
hexo server
```

#### 網站設定

*   使用編輯器打開根目錄下的網站設定檔 `_config.yml`（Windows 系統請勿使用記事本編輯，否則中文標題可能會出現亂碼），修改 `Site` 欄位。請注意冒號後面要有一個空格：

 ```bash
 # Site
 title: 未知的世界                //部落格名稱
 subtitle:
 description:  Do something cool //一句簽名檔
 author: LulalaP                 //作者
 language: zh-Hans               //網站語言
 timezone:
 ```

### 設定側邊欄頭像

*   在 `/source` 中新建一個資料夾並命名為 `uploads`，將頭像圖片（例如：avatar.jpg）放到該資料夾內。

*   打開 `/themes/next/_config.yml`，找到 `avatar` 欄位並修改為：

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### 完善部落格頁面

#### 新增選單
*   打開 `/themes/next/_config.yml`，將 `menu` 欄位中需要新增的選單前面的註解移除即可。如果需要新增其他選單，可以依需求添加（請注意欄位的縮排）：

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### 建立分類頁面

*   新建一個頁面，命名為 `categories`，指令如下：

 ```bash
 $ hexo new page categories
 ```

*   編輯剛新建的頁面 `/source/categories/index.md`，將頁面類型設定為 `categories`，佈景主題會自動為這個頁面顯示所有分類（請注意保留冒號後的空格）。

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### 建立標籤雲頁面

*   新建一個頁面，命名為 tags，指令如下：

 ```bash
 $ hexo new page "tags"
 ```

*   編輯剛新建的頁面，將頁面類型設定為 tags，佈景主題會自動為這個頁面顯示標籤雲。

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### 建立「關於我」頁面

 *   新建一個 about 頁面：

 ```bash
 $ hexo new page "about"
 ```

 *   編輯剛新建的頁面，可以在正文處用 Markdown 格式寫下你的資訊。
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### 設定側邊欄社群連結

*   編輯網站的 `_config.yml`，找到 `social` 欄位，然後新增社群網站名稱與連結網址即可。鍵值格式為 `顯示名稱：連結網址`，例如：

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   打開 `/themes/next/_config.yml`，在 `social_icons` 欄位下新增社群網站名稱（請注意大小寫）與圖示（[http://fontawesome.io/icons/](http://fontawesome.io/icons/)）。`enable` 選項用於控制是否顯示圖示，你可以設定為 `false` 來移除圖示。例如：

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### 將部落格與 GitHub 連結

 *   註冊 GitHub 帳號：如果你還沒有 GitHub 帳號，需要先註冊一個。

 *   在 GitHub 上建立一個名稱為 `XXX.github.io` 的專案，其中 XXX 為你自己的 GitHub 使用者名稱。

 *   打開本地 `MyBlog` 資料夾專案內的 `_config.yml` 設定檔，將其中的 `type` 設定為 `git`：
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   執行：
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   在本地產生靜態檔案，並將靜態檔案推送到 GitHub，接著執行：

```bash
hexo g
hexo d
```

此時，打開瀏覽器，前往 http://your-name.github.io，恭喜你，到目前為止你的部落格已經架設完畢了！

### 綁定網域

到目前為止，部落格已經全部架設完成了，也能透過 GitHub 的網域來瀏覽。這時候如果再用一個簡短的網域綁定到這個部落格上，那就更完美了！

#### 網域購買

*   購買一個網域，推薦在 [namesilo.com](https://www.namesilo.com/) 上購買。這是一家老牌的網域供應商，價格優惠且服務可靠。如果你使用我的推薦碼 `PhiloArt.io`，還可以獲得 1 美元的優惠，有效期至 2025-12-31。

### 網域解析

*   網域供應商 DNS 設定

*   新增 4 筆 A 紀錄，用於指向 GitHub Pages：

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   新增一筆 `CNAME` 紀錄，`name` 為 `www`，`content` 為 `your-name.github.io`（指向你的 GitHub Pages 網址）：

 > CNAME —> philo-li.github.io

*   更詳細的設定請參閱 [GitHub Pages 文件](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)。

*   部落格目錄新增 CNAME 檔案

 配置完網域解析後，進入部落格目錄，在 `source` 目錄下新建一個命名為 `CNAME` 的檔案（請注意要大寫，且沒有副檔名），用記事本打開編輯，寫入購買好的網域，例如：`www.philoli.com`。

*   執行：

```bash
hexo g
hexo d
```

現在打開瀏覽器，輸入網域，按下 Enter 鍵，恭喜你已經擁有了一個專屬自己獨立網域的部落格了！

### 發布新文章

*   在部落格根目錄下執行：`hexo new “我的第一篇文章”`，會在 `source/_posts` 資料夾內產生一個 `.md` 檔案。

*   編輯該檔案，修改開頭欄位為：

 ```bash
 title 文章標題
 date 建立日期 （檔案的建立日期 ）
 updated 修改日期 （ 檔案的修改日期）
 comments 是否開啟留言功能 true
 tags 標籤
 categories 分類
 permalink URL 中的名稱（檔案名稱）
 ```

*   撰寫內文（遵循 Markdown 規則）

*   在本地產生靜態檔案，並將靜態檔案推送到 GitHub，接著執行：

```bash
hexo g
hexo d
```

### 個人化設定（進階）

以下提供一些進階的部落格個人化樣式設定，新手可以先跳過。

#### 新增 RSS

 *   在根目錄下安裝外掛

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   在根目錄的 `_config.yml` 檔案末尾新增以下內容：(**_請注意冒號後面要加上一個空格，否則會發生錯誤！_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   打開 `/themes/next/_config.yml`，修改 `rss`（請注意冒號後面要加上一個空格）

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### 首頁文章截斷
 *   每次撰寫文章內文時，只需要在文章 `.md` 檔案中需要截斷的地方加上：

 ```markdown
     <!--more-->
 ```

 *   打開 `/themes/next/_config.yml`，將 `scroll_to_more` 這個選項設定為 `false`。

#### 文章內引用文字置中
*   優化了 Markdown 預設的引用樣式

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### 修改程式碼區塊樣式

*   編輯 `/themes/next/_config.yml`，修改 `codeblock` 配置如下：

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

#### 設定網站建立時間

 *   編輯網站的 `_config.yml`，新增 `since` 欄位。

```bash
since: 2024
```

#### 改善文章連結樣式

*   編輯修改 `themes\next\source\css\_common\components\post\post.styl` 檔案，在末尾新增以下 CSS 樣式：

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

#### 為部落格新增背景圖
*   在根目錄的 `source` 資料夾下建立 `_data` 資料夾，新建 `styles.styl` 檔案，打開新建的 `source/_data/styles.styl` 檔案，新增以下內容：

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //圖片無法鋪滿時，是否重複以及重複方式
    background-attachment:fixed;    //圖片是否跟隨捲動
    background-size: cover;         //覆蓋
    background-position:50% 50%;    //圖片位置
}
```
*   URL 中可以是圖片連結，或者是圖片目錄。你可以將圖片命名為 `background.jpg`，並放入 `source/uploads` 資料夾內。

#### 部落格內容背景設定為半透明
*   打開上一步編輯的 `source/_data/styles.styl` 檔案，繼續在下方新增以下內容：

```css

//部落格內容透明化
//文章內容的透明度設定
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


//側邊框的透明度設定
.sidebar {
  opacity: 0.9;
}

//選單欄的透明度設定
.header-inner {
  background: rgba(255,255,255,0.9);
}

//搜尋框（local-search）的透明度設定
.popup {
  opacity: 0.9;
}
```

#### 優化行內程式碼區塊樣式
*   打開上一步編輯的 `source/_data/styles.styl` 檔案，繼續在下方新增以下內容：

```css
// 針對Code程式碼標籤的美化
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### 為網站底部增加訪客數量

*   編輯修改檔案

```css
# 找到 copyright 這個標籤欄位，然後在標籤內部新增程式碼

<div class="copyright">
# ......這裡已經有一些配置
# 在這裡新增新的程式碼
</div>

# 新增後會是這樣：
<div class="copyright">
  # ......這裡已經有一些配置
  # 在這裡新增新的程式碼
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   重新產生預覽修改後的成果，確認沒問題後發布

```bash
hexo g
hexo s
# 確認沒問題後發布
hexo d
```

#### 為儲存庫新增 README.md 檔案

每個專案下通常都會有一個 `README.md` 檔案，但是使用 Hexo 部署到儲存庫後，專案下的 `README.md` 檔案會被覆蓋，所以需要設定設定檔來避免覆蓋。

在 `Hexo` 目錄下的 `source` 根目錄下新增一個 `README.md` 檔案，修改網站設定檔 `_config.yml`，將 `skip_render` 參數的值設定為：

```yml
skip_render: README.md
```
儲存後即可退出。再次使用 `hexo d` 指令部署部落格時，就不會渲染 `README.md` 這個檔案了。

#### 幾個常用外掛

- Hexo Filter MathJax：渲染數學公式
  - 安裝 `npm install hexo-filter-mathjax`
  - 詳細配置：[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter：文章字數統計
  - 安裝 `npm install hexo-word-counter`
  - 詳細配置：[hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize：優化部落格載入速度
  - 安裝 `npm install hexo-optimize`
  - 詳細配置：[hexo-optimize](https://github.com/next-theme/hexo-optimize)
- 更多外掛：[https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### 原始檔備份

- 務必備份好本地的原始檔，尤其是 Markdown 檔案。其他設定一旦遺失，就無法正常撰寫部落格，需要從頭開始設定。
- 建議使用 GitHub 同一個儲存庫來備份
- 建議每次有任何修改就備份一次，或者每天備份一次。
- 更多用法請查看 [Git 文件](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)。 

```bash
# 新增前面設定好的部落格儲存庫網址
git remote add https://github.com/your-name/your-name.github.io.git

# 新增並儲存目前變更，並記錄備註
git add .
git commit -m "原始檔更新"

# 建立並切換到新的分支
git checkout -b source

# 將本地 source 分支的全部內容推送到遠端儲存庫的 source 分支
git push origin source:source
```

### 用不同電腦撰寫部落格
- 當在不同電腦上撰寫部落格時，需要先進行基礎軟體安裝，然後再從遠端備份的 GitHub 儲存庫拉取到本地，才能進行部落格的更新。

*   下載並安裝 node.js （[前往官網下載安裝](https://nodejs.org/en/)）
*   下載並安裝 git （[前往官網下載安裝](https://git-scm.com/downloads)）
*   安裝 Hexo 框架：開啟命令提示字元 (cmd) 並執行

 ```bash
 npm install -g hexo-cli
```
*   進行本地更新

```bash
# 複製儲存庫到本地
git clone https://github.com/your-name/your-name.github.io.git

# 如果本地已經複製，每次更新部落格前都需要拉取最新分支內容
git pull origin

# 切換到對應分支
git checkout source

# 安裝 Hexo 配置下的所有外掛後，就可以開始更新編輯部落格內容了
npm install

# 修改內容後記得及時一條龍備份
git add .
git commit -m "部落格更新xxx"
git push origin source:source

# 發布並推送最新部落格內容到網域站台
hexo clean
hexo g  # 產生靜態檔案
hexo s  # 本地預覽部落格效果
hexo d  # 發布最新部落格內容
```

### 幾個常用指令彙整

 ```bash
hexo g
#或 hexo generate，根據原始檔產生靜態網頁
hexo d
#或 hexo deploy，發布並推送到 GitHub Pages
hexo s
#或 hexo server，本地部署測試
hexo clean
# 清空靜態網頁快取 (cache)，然後 hexo d 重新產生
