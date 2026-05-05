---
title: Isang Simpleng Gabay sa Paggawa ng Hexo Blog Mula sa Simula (2024 Edition)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
Hindi ka ba napapagod na sa mga walang kadesign-design na interface ng mga blog website? Sawa ka na ba sa walang katapusang notipikasyon mula sa mga website? Matagal mo nang gustong gumawa ng sarili mong blog, pero napatigil ka dahil sa kumplikadong mga gabay at nakakapanakit-ulong mga code? Kung ganoon, binabati kita! Ang artikulong ito ang magtuturo sa'yo nang hakbang-hakbang, sa pinakamadali at pinakamalinaw na paraan, kung paano itayo ang sarili mong blog. Kailangan mo lang ng kaunting pasensya at sundan ang bawat hakbang.

<!--more-->

Ang Hexo, bilang isang mabilis, malinis, at mahusay na framework para sa blog, ay talagang isang biyaya para sa mga baguhan. Dagdag pa rito, tinatanggal ng GitHub ang abala ng pagrenta at pag-deploy ng server. Kaya naman, gagamitin ng gabay na ito ang Hexo at GitHub para itayo ang iyong blog.

Noong 2018, nakapagsulat ako ng isang [Simpleng Gabay sa Pagbuo ng Blog Mula sa Simula](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Dahil sa pag-update ng mga plugin, may ilang detalye na kailangang baguhin, kaya muli kong inilabas ang 2024 na bersyon ng simpleng gabay na ito.

### Mga Kailangan sa Paghahanda

* I-download at i-install ang node.js ([i-download at i-install mula sa opisyal na website](https://nodejs.org/en/))
* I-download at i-install ang git ([i-download at i-install mula sa opisyal na website](https://git-scm.com/downloads))

### Lokal na Pagtatayo ng Hexo Static Blog

* I-install ang Hexo framework: Buksan ang cmd at patakbuhin:
  
 ```bash
 $ npm install -g hexo-cli
 ```

* Gumawa ng bagong folder, halimbawa, MyBlog. Pumasok sa folder na ito, mag-right-click at patakbuhin ang git, pagkatapos ay i-type:

 ```bash
 $ hexo init
 ```

* Kapag tapos na ang pag-generate ng Hexo template, i-install ang npm, patakbuhin:

 ```bash
$ npm install
 ```

Tama, kumpleto na ang pangunahing bahagi ng iyong blog! Tingnan natin ang resulta. Patakbuhin:

```bash
$ hexo server
```

Sa puntong ito, buksan ang iyong browser, i-type ang `localhost:4000` at makikita mo na ang kasalukuyang itsura ng iyong blog. Konting kilig muna, pagkatapos ay pindutin ang `Ctrl + C` para ipagpatuloy ang susunod na hakbang.

### Paunang Pag-customize

#### Pagpapalit ng Tema

* I-download ang bagong tema (halimbawa, ang [NexT theme]( http://theme-next.iissnan.com/)), at patakbuhin sa root directory:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* Buksan ang `_config.yml` sa root directory, at baguhin ang field na `theme` sa:

 ```bash
theme: next
 ```

* Pumili ng hitsura: Buksan ang `/themes/next/_config.yml`, hanapin ang field na `scheme` (maaaring gamitin ang `Ctrl + F` para sa mabilis na paghahanap). Nag-aalok ang NexT ng tatlong magkakaibang hitsura; pumili ng isa na gusto mo, at alisin ang `#` sign sa unahan nito. (Pangunahin mong babaguhin ang dalawang file na ito: ang _site configuration file_ at ang _theme configuration file_.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* Para makita ang epekto, patakbuhin ang sumusunod na command (maaari mong ulitin ang hakbang na ito tuwing gusto mong suriin ang mga pagbabago):

```bash
hexo g #o hexo generate
hexo server
```

#### Konpigurasyon ng Site

* Gamit ang isang editor, buksan ang site configuration file na `_config.yml` sa root directory (huwag gamitin ang Notepad sa Windows, dahil maaaring magkaroon ng isyu sa Chinese characters). Baguhin ang field na `Site`. Tandaan na dapat may espasyo pagkatapos ng colon:

 ```bash
 # Site
 title: Di-kilalang Mundo                //Pangalan ng Blog
 subtitle:
 description:  Do something cool //Isang Slogan
 author: LulalaP                 //May-akda
 language: zh-Hans               //Wika ng Website
 timezone:
 ```

### Pagtatakda ng Avatar sa Sidebar

* Sa `/source`, gumawa ng bagong folder at pangalanan itong `uploads`. Ilagay ang iyong avatar image (hal. `avatar.jpg`) sa loob ng folder na ito.

* Buksan ang `/themes/next/_config.yml`, hanapin ang field na `avatar` at baguhin ito sa:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Pagkumpleto ng Pahina ng Blog

#### Pagdaragdag ng Menu
* Buksan ang `/themes/next/_config.yml`. Alisin lang ang comment (`#`) sa harap ng mga menu na gusto mong idagdag sa field na `menu`. Kung kailangan mong magdagdag ng iba pang menu, maaari mong gawin ito ayon sa pangangailangan (tandaan ang indentation ng fields):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Paglikha ng Pahina ng Kategorya

* Gumawa ng bagong pahina, pangalanan itong `categories`, gamit ang sumusunod na command:

 ```bash
 $ hexo new page categories
 ```

* I-edit ang bagong likhang pahina `/source/categories/index.md`. Itakda ang `type` ng pahina sa `categories`. Awtomatikong ipapakita ng tema ang lahat ng kategorya sa pahinang ito (tandaan na panatilihin ang espasyo pagkatapos ng colon).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Paglikha ng Tag Cloud Interface

* Gumawa ng bagong pahina, pangalanan itong `tags`, gamit ang sumusunod na command:

 ```bash
 $ hexo new page "tags"
 ```

* I-edit ang bagong likhang pahina. Itakda ang `type` ng pahina sa `tags`. Awtomatikong ipapakita ng tema ang tag cloud para sa pahinang ito.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Paglikha ng "Tungkol sa Akin" na Pahina

 * Gumawa ng bagong pahina na `about`:

 ```bash
 $ hexo new page "about"
 ```

 * I-edit ang bagong likhang pahina. Maaari kang magsulat ng impormasyon sa katawan ng teksto gamit ang format na Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Pagtatakda ng Social Links sa Sidebar

* I-edit ang `_config.yml` ng site. Hanapin ang field na `social`, pagkatapos ay idagdag ang pangalan at address ng social site. Ang format ng key-value ay `Pangalan na Ipakikita: Address ng Link`, halimbawa:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* Buksan ang `/themes/next/_config.yml`. Sa ilalim ng field na `social_icons`, idagdag ang pangalan ng social site (tandaan ang case-sensitivity) at (icon)[http://fontawesome.io/icons/]. Ang `enable` option ay ginagamit upang kontrolin kung ipapakita ang icon; maaari mo itong itakda sa `false` upang alisin ang icon. Halimbawa:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Pag-ugnay ng Blog sa GitHub

 * Mag-register ng GitHub account: Kung wala ka pang GitHub account, kailangan mo munang mag-register.

 * Gumawa ng project sa GitHub na pinangalanang `XXX.github.io`, kung saan ang `XXX` ay ang iyong GitHub username.

 * Buksan ang `_config.yml` configuration file sa loob ng `MyBlog` folder ng iyong local project. Itakda ang `type` nito sa `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Patakbuhin:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 * Lokal na i-generate ang mga static file, at i-push ang mga ito sa GitHub, patakbuhin:

```bash
hexo g
hexo d
```

 Sa puntong ito, buksan ang iyong browser at bisitahin ang `http://your-name.github.io`. Binabati kita, tapos na ang pagtatayo ng iyong blog!

### Pag-ugnay ng Domain

Sa ngayon, kumpleto na ang pagtatayo ng blog at maaari na itong i-access sa pamamagitan ng domain ng GitHub. Ngayon, mas magiging perpekto ito kung mag-uugnay ka ng isang mas maikling domain sa blog na ito.

#### Pagbili ng Domain

* Bumili ng domain. Inirerekomenda na bumili sa [namesilo.com](https://www.namesilo.com/), isang matagal nang provider ng domain na may abot-kayang presyo at maaasahang serbisyo. Kung gagamitin mo ang aking referral code na `PhiloArt.io`, makakakuha ka pa ng diskwento na 1 dolyar, valid hanggang Disyembre 31, 2025.

### Pag-resolve ng Domain

* DNS Settings ng Domain Provider

* Magdagdag ng 4 na A records para ituro sa GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* Magdagdag ng isang `CNAME` record, kung saan ang `name` ay `www`, at ang `content` ay `your-name.github.io` (na tumuturo sa address ng iyong Github Pages):

 > CNAME —> philo-li.github.io

* Para sa mas detalyadong settings, tingnan ang [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

* Pagdaragdag ng CNAME File sa Directory ng Blog

Pagkatapos ma-configure ang domain resolution, pumunta sa directory ng blog. Sa loob ng `source` directory, gumawa ng bagong file na pinangalanang `CNAME` (tandaan na dapat malalaking titik at walang extension). Buksan ito gamit ang Notepad at isulat ang binili mong domain, halimbawa: `www.philoli.com`

* Patakbuhin:

```bash
hexo g
hexo d
```

Ngayon, buksan ang iyong browser, i-type ang domain, at pindutin ang Enter. Binabati kita, mayroon ka nang sarili mong blog na may independent domain!

### Pag-publish ng Bagong Artikulo

* Sa root directory ng blog, patakbuhin ang: `hexo new “Aking Unang Artikulo”`. Ito ay gagawa ng isang `.md` file sa `source/_posts` folder.

* I-edit ang file na iyon, at baguhin ang mga sumusunod na fields sa simula:

 ```bash
 title Pamagat ng Artikulo
 date Petsa ng Paglikha (Petsa ng paggawa ng file)
 updated Petsa ng Pagbabago (Petsa ng pagbabago ng file)
 comments I-enable ang Komento true
 tags Mga Tag
 categories Mga Kategorya
 permalink Pangalan sa URL (Filename)
 ```

* Sumulat ng nilalaman ng artikulo (sundin ang mga patakaran ng Markdown)

* Lokal na i-generate ang mga static file, at i-push ang mga ito sa GitHub, patakbuhin:

```bash
hexo g
hexo d
```

### Advanced na Pag-customize

Narito ang ilang advanced na setting para sa pag-customize ng estilo ng blog. Maaaring laktawan muna ito ng mga baguhan.

#### Pagdaragdag ng RSS

 * I-install ang plugin sa root directory

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Sa dulo ng `_config.yml` sa root directory, idagdag ang sumusunod: (**_Pansinin na kailangan mong maglagay ng espasyo pagkatapos ng colon, kung hindi ay magkakaroon ng error!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Buksan ang `/themes/next/_config.yml`, at baguhin ang `rss` (tandaan na dapat may espasyo pagkatapos ng colon)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Pagputol ng Artikulo sa Homepage
 * Tuwing sumusulat ng artikulo, idagdag lamang ang sumusunod sa bahagi ng `.md` file kung saan mo gustong putulin ang artikulo:

 ```markdown
     <!--more-->
 ```

 * Buksan ang `/themes/next/_config.yml`, at baguhin ang option na `scroll_to_more` sa `false`.

#### Pag-sentro ng Naka-quote na Teksto sa Artikulo
* In-optimize ang default na istilo ng quote ng Markdown

```markdown
{% centerquote %}
Naka-quote na Teksto
{% endcenterquote %}
```

{% centerquote %}
Naka-quote na Teksto
{% endcenterquote %}

#### Pagbabago ng Estilo ng Code Block

* I-edit ang `/themes/next/_config.yml`, at baguhin ang configuration ng `codeblock` tulad ng sumusunod:

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

#### Pagtatakda ng Petsa ng Paglikha ng Site

 * I-edit ang `_config.yml` ng site, at magdagdag ng bagong field na `since`.

```bash
since: 2024
```

#### Pagpapabuti ng Estilo ng Link ng Artikulo

* I-edit at baguhin ang file na `themes\next\source\css\_common\components\post\post.styl`. Sa dulo, idagdag ang sumusunod na CSS style:

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

#### Pagdaragdag ng Background Image sa Blog
* Sa `source` folder ng root directory, gumawa ng `_data` folder. Gumawa ng bagong file na `styles.styl` sa loob nito. Buksan ang bagong likhang file na `source/_data/styles.styl` at idagdag ang sumusunod na nilalaman:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //kung hindi mapuno ang larawan, ulitin o hindi
    background-attachment:fixed;    //sumusunod ba ang larawan sa pag-scroll
    background-size: cover;         //sakop
    background-position:50% 50%;    //posisyon ng larawan
}
```
* Ang URL ay maaaring isang link ng imahe, o isang directory ng imahe. Maaari mong pangalanan ang imahe bilang `background.jpg` at ilagay ito sa `source/uploads` folder.

#### Pagtatakda ng Semi-Transparent na Background para sa Nilalaman ng Blog
* Buksan ang file na `source/_data/styles.styl` na in-edit sa nakaraang hakbang, at ipagpatuloy ang pagdaragdag ng sumusunod na nilalaman sa ibaba:

```css

// Pagiging transparent ng nilalaman ng blog
// Pagtatakda ng transparency ng nilalaman ng artikulo
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


// Pagtatakda ng transparency ng sidebar
.sidebar {
  opacity: 0.9;
}

// Pagtatakda ng transparency ng menu bar
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Pagtatakda ng transparency ng search box (local-search)
.popup {
  opacity: 0.9;
}
```

#### Pag-optimize ng Estilo ng Inline Code Block
* Buksan ang file na `source/_data/styles.styl` na in-edit sa nakaraang hakbang, at ipagpatuloy ang pagdaragdag ng sumusunad na nilalaman sa ibaba:

```css
// Para sa pagpapaganda ng Code tag
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Pagdaragdag ng Bilang ng Bisita sa Ibaba ng Website

* I-edit at baguhin ang file

```css
# Hanapin ang tag ng copyright, at pagkatapos ay idagdag ang code sa loob ng tag.

<div class="copyright">
# ......Mayroon na itong ilang configuration.
# Idagdag ang bagong code dito.
</div>

# Ganito ang magiging itsura pagkatapos idinagdag:
<div class="copyright">
  # ......Mayroon na itong ilang configuration.
  # Idagdag ang bagong code dito.
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* Muling i-generate at i-preview ang binagong epekto. Kung walang problema, i-publish.

```bash
hexo g
hexo s
# Kung walang problema, i-publish.
hexo d
```

#### Pagdaragdag ng README.md File sa Repository

Karaniwan, bawat proyekto ay may `README.md` file, ngunit kapag ginamit ang Hexo para i-deploy sa repository, mabubura ang `README.md` file sa ilalim ng proyekto. Kaya, kailangang i-configure ang settings para maiwasan ito.

Sa root directory ng `source` sa ilalim ng `Hexo` directory, magdagdag ng `README.md` file. Baguhin ang site configuration file na `_config.yml`, at itakda ang halaga ng parameter na `skip_render` sa:

```yml
skip_render: README.md
```
I-save at lumabas. Sa susunod na i-deploy mo ang blog gamit ang `hexo d` command, hindi na ire-render ang `README.md` file na ito.

#### Ilang Madalas Gamiting Plugin

- Hexo Filter MathJax: Para sa pag-render ng mathematical formulas
  - I-install `npm install hexo-filter-mathjax`
  - Detalyadong configuration: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Para sa pagbilang ng salita sa artikulo
  - I-install `npm install hexo-word-counter`
  - Detalyadong configuration: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Para sa pag-optimize ng bilis ng pag-load ng blog
  - I-install `npm install hexo-optimize`
  - Detalyadong configuration: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Marami pang plugin: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Backup ng Source Files

- Tandaan, napakahalaga na i-backup ang iyong mga local source file, lalo na ang mga Markdown file. Kung mawala ang iba pang configuration, hindi ka na makakapagsulat ng blog nang maayos at kailangan mong simulan mula sa simula ang settings.
- Inirerekomenda na gamitin ang parehong GitHub repository para sa backup.
- Inirerekomenda na mag-backup tuwing may pagbabago, o mag-backup araw-araw.
- Para sa karagdagang paggamit, tingnan ang [Git Documentation](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) 

```bash
# Idagdag ang address ng repository ng blog na na-set up na kanina.
git remote add https://github.com/your-name/your-name.github.io.git

# Idagdag at i-save ang kasalukuyang mga pagbabago, at maglagay ng mensahe.
git add .
git commit -m "源文件更新"

# Gumawa at lumipat sa bagong branch.
git checkout -b source

# I-push ang lahat ng nilalaman ng local source branch sa source branch ng remote repository.
git push origin source:source
```

### Pagsusulat ng Blog Gamit ang Iba't Ibang Kompyuter
- Kapag nagsusulat ng blog sa iba't ibang kompyuter, kailangan mong i-install ang mga basic software, pagkatapos ay i-pull ang backup na GitHub repository mula sa remote papunta sa local, para ma-update ang blog.

* I-download at i-install ang node.js ([i-download at i-install mula sa opisyal na website](https://nodejs.org/en/))
* I-download at i-install ang git ([i-download at i-install mula sa opisyal na website](https://git-scm.com/downloads))
* I-install ang Hexo framework: Buksan ang cmd at patakbuhin:

 ```bash
 npm install -g hexo-cli
```
* Para sa lokal na pag-update

```bash
# I-clone ang repository sa local.
git clone https://github.com/your-name/your-name.github.io.git

# Kung na-clone na sa local, kailangan mong i-pull ang pinakabagong nilalaman ng branch bago mag-update ng blog.
git pull origin

# Lumipat sa kaukulang branch.
git checkout source

# Pagkatapos i-install ang lahat ng plugin sa ilalim ng Hexo configuration, maaari nang simulan ang pag-update at pag-edit ng nilalaman ng blog.
npm install

# Pagkatapos baguhin ang nilalaman, tandaan na kaagad i-backup ang lahat ng kailangan.
git add .
git commit -m "博客更新xxx"
git push origin source:source

# I-publish at i-push ang pinakabagong nilalaman ng blog sa domain site.
hexo clean
hexo g  # I-generate ang mga static file
hexo s  # Lokal na i-preview ang epekto ng blog
hexo d  # I-publish ang pinakabagong nilalaman ng blog
```

### Buod ng Ilang Madalas Gamiting Command

 ```bash
hexo g
#o hexo generate, para makagawa ng static webpages mula sa source files.
hexo d
#o hexo deploy, para i-publish at i-push sa GitHub Pages.
hexo s
#o hexo server, para sa lokal na deployment testing.
hexo clean
# I-clear ang cache ng static webpages, pagkatapos ay i-hexo d para muling i-generate.
