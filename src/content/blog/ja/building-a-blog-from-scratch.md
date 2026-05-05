---
title: ゼロから始めるHexoブログ構築ガイド（2024年版）
date: 2024-04-11 00:25:20
tags: ブログ構築
categories: 日常の試行錯誤
---
ブログサイトの無味乾燥なインターフェースにうんざりしていませんか？際限なく送られてくるサイトの通知にうんざりしていませんか？ずっと前から自分だけのブログを持ちたいと思っていたのに、複雑なチュートリアルや頭を悩ませるコードのせいで諦めていませんか？そんなあなたに朗報です！この記事では、誰でも簡単に自分だけのブログを立ち上げられるよう、手取り足取り解説していきます。必要なのは、ほんの少しの忍耐力と、手順通りに進めることだけです。

<!--more-->

Hexoは、高速でシンプル、そして高効率なブログフレームワークなので、初心者の方にはまさに救いの手となるでしょう。さらにGitHubを活用すれば、別途サーバーをレンタルしてデプロイする手間も省けます。そこで、この記事ではHexoとGitHubを使ってブログを構築する方法をご紹介します。

以前、2018年に[ゼロから始めるブログ構築ガイド](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/)という記事を書きました。しかし、プラグインの更新により一部変更が必要になったため、2024年版の簡易ガイドとして改めてご紹介する次第です。

### 準備作業

* Node.jsをダウンロードしてインストール（[公式サイトからダウンロード](https://nodejs.org/en/)）
* Gitをダウンロードしてインストール（[公式サイトからダウンロード](https://git-scm.com/downloads)）

### ローカル環境でHexo静的ブログを構築

* Hexoフレームワークをインストール：コマンドプロンプトを開いて実行
  
 ```bash
 $ npm install -g hexo-cli
 ```

* MyBlogなどの新しいフォルダを作成し、そのフォルダ内で右クリックしてGit Bashを起動し、以下を入力します。

 ```bash
 $ hexo init
 ```

* Hexoテンプレートの生成が完了したら、npmをインストールして実行します。

 ```bash
$ npm install
 ```

これでブログの本体部分は完成です。さっそく動作を確認してみましょう。以下を実行してください。

```bash
$ hexo server
```

ブラウザを開いて `localhost:4000` と入力すると、現在のブログの様子が表示されます。ちょっと感動したら、`Ctrl + C` を押して次の操作に進みましょう。

### 初期のカスタマイズ設定

#### テーマの変更

* 新しいテーマをダウンロードします（例として[NexTテーマ](http://theme-next.iissnan.com/)を使用）。ルートディレクトリで以下を実行します。
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* ルートディレクトリにある `_config.yml` を開き、`theme` フィールドを以下のように変更します。

 ```bash
theme: next
 ```

* 外観の選択：`/themes/next/_config.yml` を開き、`scheme` フィールドを見つけます（`Ctrl + F` で素早く検索できます）。NexTは3種類の外観を提供しているので、お好みのものを選んで、その行の `#` を削除してください。（今後主に編集するのは、この2つのファイル、つまり_サイト設定ファイル_と_テーマ設定ファイル_になります。）

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* 効果を確認するには、以下のコマンドを実行します（今後、効果を確認したい場合は毎回この手順を繰り返してください）。

```bash
hexo g #または hexo generate
hexo server
```

#### サイト設定

* エディタを使ってルートディレクトリにあるサイト設定ファイル `_config.yml` を開きます（Windowsのメモ帳で編集すると、日本語のタイトルが文字化けする可能性があるので使用しないでください）。`Site` フィールドを修正します。コロンの後にスペースを入れるのを忘れないでください。

 ```bash
 # Site
 title: 未知の世界                //ブログ名
 subtitle:
 description:  Do something cool //紹介文
 author: LulalaP                 //著者
 language: zh-Hans               //サイトの言語
 timezone:
 ```

### サイドバーにアバターを設定

* `/source` フォルダ内に `uploads` という名前の新しいフォルダを作成し、アバター画像（例：avatar.jpg）をそのフォルダに入れます。

* `/themes/next/_config.yml` を開き、`avatar` フィールドを見つけて以下のように変更します。

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### ブログページの充実化

#### メニューの追加
* `/themes/next/_config.yml` を開き、`menu` フィールド内で追加したいメニューの行頭にあるコメント記号（`#`）を削除してください。必要に応じて他のメニューも追加できます（インデントに注意してください）。

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### カテゴリーページの作成

* `categories` という名前で新しいページを作成します。コマンドは以下の通りです。

 ```bash
 $ hexo new page categories
 ```

* 新しく作成した `/source/categories/index.md` を編集し、ページのタイプを `categories` に設定します。これにより、テーマが自動的にこのページにすべてのカテゴリーを表示するようになります（コロンの後のスペースを忘れないでください）。

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### タグクラウドページの作成

* `tags` という名前で新しいページを作成します。コマンドは以下の通りです。

 ```bash
 $ hexo new page "tags"
 ```

* 新しく作成したページを編集し、ページのタイプを `tags` に設定します。これにより、テーマが自動的にこのページにタグクラウドを表示するようになります。

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### 「About（私について）」ページの作成

 * `about` ページを新規作成します。

 ```bash
 $ hexo new page "about"
 ```

 * 新しく作成したページを編集し、本文にMarkdown形式で情報を記述できます。
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### サイドバーのソーシャルリンクを設定

* サイトの `_config.yml` を編集し、`social` フィールドを見つけて、ソーシャルサイト名とアドレスを追加します。キーと値の形式は `表示名：リンクアドレス` です。例：

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* `/themes/next/_config.yml` を開き、`social_icons` フィールドの下にソーシャルサイト名（大文字・小文字に注意）と[アイコン](http://fontawesome.io/icons/)を追加します。`enable` オプションはアイコンの表示/非表示を制御するために使用され、`false` に設定することでアイコンを非表示にできます。例：

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### ブログとGitHubを連携

 * GitHubアカウントの登録：まだGitHubアカウントをお持ちでない場合は、まず登録してください。

 * GitHub上で `XXX.github.io` という名前のリポジトリを作成します。`XXX` はあなたのGitHubユーザー名です。

 * ローカルの `MyBlog` フォルダ内の `_config.yml` 設定ファイルを開き、その中の `type` を `git` に設定します。
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * 実行します。
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 * ローカルで静的ファイルを生成し、その静的ファイルをGitHubにプッシュします。以下を実行してください。

```bash
hexo g
hexo d
```

これで、ブラウザを開いて `http://your-name.github.io` にアクセスすると、あなたのブログが表示されるはずです。おめでとうございます、これでブログの構築は完了です！

### ドメインの紐付け

ここまでの手順でブログは完全に構築され、GitHubのドメインからアクセスできるようになりました。このブログに短いカスタムドメインを紐付ければ、さらに完璧です。

#### ドメインの購入

* ドメインを購入します。[namesilo.com](https://www.namesilo.com/)での購入をお勧めします。老舗のドメインプロバイダーで、価格も手頃で信頼性の高いサービスを提供しています。私の紹介コード `PhiloArt.io` を使用すると、1ドルの割引が適用されます（有効期限：2025年12月31日まで）。

### ドメインのDNS設定

* ドメインプロバイダーのDNS設定

* GitHub Pagesを指すように、Aレコードを4つ追加します。

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* `CNAME` レコードを1つ追加します。`name` は `www`、`content` は `your-name.github.io` （あなたのGitHub Pagesのアドレスを指します）とします。

 > CNAME —> philo-li.github.io

* より詳細な設定については、[GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)を参照してください。

* ブログディレクトリにCNAMEファイルを追加

ドメインのDNS設定が完了したら、ブログディレクトリに移動し、`source` ディレクトリ内に `CNAME` という名前のファイル（大文字で、拡張子なし）を新規作成します。メモ帳などで開き、購入したドメイン（例：`www.philoli.com`）を書き込んで保存します。

* 実行します。

```bash
hexo g
hexo d
```

さあ、ブラウザを開いてドメインを入力し、エンターキーを押してください。おめでとうございます！これであなた専用の独自ドメインブログが完成しました。

### 新しい記事の公開

* ブログのルートディレクトリで `hexo new “私の最初の記事”` を実行すると、`source/_posts` フォルダ内に`.md` ファイルが生成されます。

* このファイルを編集し、冒頭のフィールドを以下のように変更します。

 ```bash
 title 記事のタイトル
 date 作成日（ファイルの作成日）
 updated 更新日（ファイルの更新日）
 comments コメントを有効にするか true
 tags タグ
 categories カテゴリー
 permalink URL内の名前（ファイル名）
 ```

* 本文を記述します（Markdownルールに従ってください）。

* ローカルで静的ファイルを生成し、その静的ファイルをGitHubにプッシュします。以下を実行してください。

```bash
hexo g
hexo d
```

### 詳細なカスタマイズ設定（上級者向け）

ここからは、より高度なブログのスタイルカスタマイズ設定をいくつかご紹介します。初心者の方は、まずこのセクションをスキップしても問題ありません。

#### RSSの追加

 * ルートディレクトリでプラグインをインストール

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * ルートディレクトリの `_config.yml` の末尾に以下を追加します。（**_コロンの後にスペースを追加しないとエラーが発生しますのでご注意ください！_**）

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * `/themes/next/_config.yml` を開き、`rss` を変更します（コロンの後にスペースを追加するのを忘れないでください）。

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### トップページでの記事の途切れ
 * 記事の本文を書く際、途中で区切りたい箇所に以下を追加するだけです。

 ```markdown
     <!--more-->
 ```

 * `/themes/next/_config.yml` を開き、`scroll_to_more` オプションを `false` に変更します。

#### 記事内の引用テキストを中央揃えに
* Markdownのデフォルトの引用スタイルを最適化しました。

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### コードブロックのスタイル変更

* `/themes/next/_config.yml` を編集し、`codeblock` の設定を以下のように変更します。

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

#### サイトの開設時間を設定

 * サイトの `_config.yml` を編集し、`since` フィールドを新規追加します。

```bash
since: 2024
```

#### 記事内のリンクスタイルを改善

* `themes\next\source\css\_common\components\post\post.styl` ファイルを編集し、末尾に以下のCSSスタイルを追加します。

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

#### ブログに背景画像を追加
* ルートディレクトリの `source` フォルダの下に `_data` フォルダを作成し、その中に `styles.styl` ファイルを新規作成します。新しく作成した `source/_data/styles.styl` ファイルを開き、以下の内容を追加します。

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //画像が敷き詰められない場合の繰り返し方法
    background-attachment:fixed;    //画像がスクロールに追従するかどうか
    background-size: cover;         //カバー
    background-position:50% 50%;    //画像の位置
}
```
* `url` には画像のリンク、または画像ディレクトリを指定できます。画像を `background.jpg` と名付け、`source/uploads` フォルダ内に配置することができます。

#### ブログコンテンツの背景を半透明に設定
* 前の手順で編集した `source/_data/styles.styl` ファイルを開き、さらに以下の内容を追加します。

```css

//ブログコンテンツの透明化
//記事コンテンツの透明度設定
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


//サイドバーの透明度設定
.sidebar {
  opacity: 0.9;
}

//メニューバーの透明度設定
.header-inner {
  background: rgba(255,255,255,0.9);
}

//検索ボックス（local-search）の透明度設定
.popup {
  opacity: 0.9;
}
```

#### インラインコードブロックのスタイルを最適化
* 前の手順で編集した `source/_data/styles.styl` ファイルを開き、さらに以下の内容を追加します。

```css
// Codeコードタグの美化
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### ウェブサイトのフッターに訪問者数を追加

* ファイルを編集・修正

```css
# copyrightタグのセクションを見つけ、そのタグ内に以下のコードを追加します。

<div class="copyright">
# ......ここには既に設定があります
# ここに新しいコードを追加します
</div>

# 追加後はこのようになります。
<div class="copyright">
  # ......ここには既に設定があります
  # ここに新しいコードを追加します
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* 変更後の効果を再生成してプレビューし、問題がないことを確認してから公開します。

```bash
hexo g
hexo s
# 問題がないことを確認してから公開
hexo d
```

#### リポジトリにREADME.mdファイルを追加

各プロジェクトには通常 `README.md` ファイルがありますが、Hexoを使ってリポジトリにデプロイすると、プロジェクト内の `README.md` ファイルが上書きされてしまいます。そのため、上書きされないように設定ファイルで指定する必要があります。

`Hexo` ディレクトリの `source` ルートディレクトリに `README.md` ファイルを追加し、サイト設定ファイル `_config.yml` を編集して、`skip_render` パラメータの値を以下のように設定します。

```yml
skip_render: README.md
```
保存して終了します。これで、次に `hexo d` コマンドでブログをデプロイする際に、`README.md` ファイルがレンダリングされなくなります。

#### いくつかの便利なプラグイン

- Hexo Filter MathJax：数式をレンダリング
  - インストール `npm install hexo-filter-mathjax`
  - 詳細設定：[hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter：記事の文字数カウント
  - インストール `npm install hexo-word-counter`
  - 詳細設定：[hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize：ブログの読み込み速度を最適化
  - インストール `npm install hexo-optimize`
  - 詳細設定：[hexo-optimize](https://github.com/next-theme/hexo-optimize)
- その他のプラグイン：[https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### ソースファイルのバックアップ

- ローカルのソースファイル、特にMarkdownファイルは必ずバックアップしてください。設定が失われると、正常にブログを書き続けることができなくなり、最初から設定し直す必要があります。
- GitHubの同じリポジトリを使ってバックアップすることをお勧めします。
- 変更があったらその都度、または毎日バックアップすることをお勧めします。
- より詳しい使い方は[Gitドキュメント](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)をご覧ください。

```bash
# 以前設定したブログのリポジトリURLを追加
git remote add https://github.com/your-name/your-name.github.io.git

# 現在の変更を追加・保存し、コメントを記録
git add .
git commit -m "ソースファイル更新"

# 新しいブランチを作成して切り替える
git checkout -b source

# ローカルのsourceブランチの全内容をリモートリポジトリのsourceブランチにプッシュ
git push origin source:source
```

### 異なるPCでブログを執筆する
- 異なるPCでブログを執筆する場合、まず基本的なソフトウェアをインストールし、その後、リモートにバックアップされているGitHubのリポジトリをローカルにプルして、ブログを更新する必要があります。

* Node.jsをダウンロードしてインストール（[公式サイトからダウンロード](https://nodejs.org/en/)）
* Gitをダウンロードしてインストール（[公式サイトからダウンロード](https://git-scm.com/downloads)）
* Hexoフレームワークをインストール：コマンドプロンプトを開いて実行

 ```bash
 npm install -g hexo-cli
```
* ローカルでの更新

```bash
# リポジトリをローカルにクローン
git clone https://github.com/your-name/your-name.github.io.git

# ローカルに既にクローンしている場合、ブログを更新する前に毎回最新のブランチ内容をプルする必要がある
git pull origin

# 該当ブランチに切り替える
git checkout source

# Hexo設定下のすべてのプラグインをインストールした後、ブログコンテンツの更新・編集を開始できる
npm install

# 内容変更後は忘れずに一連のバックアップ作業を行う
git add .
git commit -m "ブログ更新xxx"
git push origin source:source

# 最新のブログコンテンツをドメインサイトに公開・プッシュ
hexo clean
hexo g  # 静的ファイルを生成
hexo s  # ローカルでブログ効果をプレビュー
hexo d  # 最新のブログコンテンツを公開
```

### いくつかのよく使うコマンドまとめ

 ```bash
hexo g
#または hexo generate、ソースファイルに基づいて静的ページを生成
hexo d
#または hexo deploy、GitHub Pagesに公開・プッシュ
hexo s
#または hexo server、ローカルでデプロイテスト
hexo clean
# 静的ページのキャッシュをクリアし、その後 hexo d で再生成
