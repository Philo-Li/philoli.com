---
title: آموزش گام به گام ساخت وبلاگ هگزو (Hexo) از صفر (نسخه ۲۰۲۴)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
آیا از رابط‌های کاربری بی‌روح و نازیبای وبلاگ‌های قدیمی خسته شده‌اید؟ آیا از اعلان‌های بی‌پایان وب‌سایت‌ها کلافه شده‌اید؟ آیا مدت‌هاست که رویای داشتن یک وبلاگ شخصی را در سر می‌پرورانید، اما آموزش‌های پیچیده و کدهای سردرگم‌کننده شما را از این کار بازداشته است؟ پس تبریک می‌گویم! این مقاله دقیقاً برای شماست تا به ساده‌ترین و قابل‌فهم‌ترین شکل ممکن، گام به گام به شما کمک کند تا وبلاگ شخصی خودتان را بسازید. تنها کافی است کمی صبر داشته باشید و مرحله به مرحله با ما همراه شوید.

<!--more-->

هگزو (Hexo)، به عنوان یک چارچوب وبلاگ‌نویسی سریع، ساده و کارآمد، واقعاً نعمتی برای مبتدیان است. و گیت‌هاب (GitHub) هم ما را از دردسر اجاره و راه‌اندازی سرورهای اضافی بی‌نیاز می‌کند. بنابراین، در این مقاله از هگزو و گیت‌هاب برای ساخت وبلاگ استفاده خواهیم کرد.

من قبلاً در سال ۲۰۱۸ یک [آموزش مختصر برای ساخت وبلاگ از صفر](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) نوشته بودم. اما به دلیل به‌روزرسانی افزونه‌ها، نیاز به تغییراتی در برخی جزئیات وجود داشت؛ از این رو، نسخه ۲۰۲۴ این آموزش مختصر را مجدداً منتشر می‌کنیم.

### آماده‌سازی

*   دانلود و نصب Node.js ([دانلود و نصب از وب‌سایت رسمی](https://nodejs.org/en/))
*   دانلود و نصب Git ([دانلود و نصب از وب‌سایت رسمی](https://git-scm.com/downloads))

### ساخت وبلاگ استاتیک هگزو به صورت محلی

*   نصب چارچوب هگزو: CMD را باز کرده و اجرا کنید:

 ```bash
 $ npm install -g hexo-cli
 ```

*   یک پوشه جدید ایجاد کنید، مثلاً MyBlog، وارد آن شوید، راست کلیک کرده و Git را اجرا کنید، سپس وارد کنید:

 ```bash
 $ hexo init
 ```

*   پس از تولید قالب هگزو، npm را نصب کرده و اجرا کنید:

 ```bash
$ npm install
 ```

بله، بخش اصلی وبلاگ شما تا اینجا تکمیل شده است. بیایید نتیجه را ببینیم. اجرا کنید:

```bash
$ hexo server
```

حالا مرورگر خود را باز کنید و با وارد کردن localhost:4000 می‌توانید ظاهر فعلی وبلاگتان را مشاهده کنید. کمی هیجان‌زده شوید، سپس با فشردن Ctrl + C می‌توانید به ادامه مراحل بپردازید.

### تنظیمات شخصی‌سازی (اولیه)

#### تغییر قالب

*   یک قالب جدید دانلود کنید (به عنوان مثال، [قالب NexT](http://theme-next.iissnan.com/))، سپس در دایرکتوری اصلی اجرا کنید:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   فایل `_config.yml` در دایرکتوری اصلی را باز کنید و فیلد `theme` را به این صورت تغییر دهید:

 ```bash
theme: next
 ```

*   انتخاب ظاهر: فایل `/themes/next/_config.yml` را باز کنید و فیلد `scheme` را پیدا کنید (می‌توانید با Ctrl + F سریعاً جستجو کنید). NexT سه ظاهر مختلف ارائه می‌دهد؛ می‌توانید یکی را که دوست دارید انتخاب کنید و علامت # را از ابتدای آن بردارید (در ادامه، عمدتاً همین دو فایل: _فایل پیکربندی سایت_ و _فایل پیکربندی قالب_ را تغییر خواهیم داد).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   برای مشاهده نتیجه، دستورات زیر را اجرا کنید (هر بار که می‌خواهید نتیجه را ببینید، می‌توانید این مرحله را تکرار کنید):

```bash
hexo g #یا hexo generate
hexo server
```

#### پیکربندی سایت

*   فایل پیکربندی سایت `_config.yml` را در دایرکتوری اصلی با یک ویرایشگر باز کنید (در ویندوز از Notepad استفاده نکنید، زیرا ممکن است عنوان‌های فارسی به هم بریزد)، سپس فیلدهای مربوط به `Site` را تغییر دهید. توجه داشته باشید که بعد از دو نقطه (:) باید یک فاصله وجود داشته باشد:

 ```bash
 # Site
 title: دنیای ناشناخته                // نام وبلاگ
 subtitle:
 description:  Do something cool // یک شعار یا جمله کوتاه
 author: LulalaP                 // نویسنده
 language: zh-Hans               // زبان وب‌سایت
 timezone:
 ```

### تنظیم تصویر آواتار در نوار کناری

*   در مسیر `/source` یک پوشه جدید به نام `uploads` ایجاد کنید و تصویر آواتار خود (مثلاً: avatar.jpg) را در آن قرار دهید.

*   فایل `/themes/next/_config.yml` را باز کنید، فیلد `avatar` را پیدا کرده و به این صورت تغییر دهید:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### تکمیل صفحات وبلاگ

#### افزودن منو

*   فایل `/themes/next/_config.yml` را باز کنید، سپس از فیلد `menu`، کامنت (علامت #) را از جلوی منوهایی که می‌خواهید اضافه کنید، بردارید. اگر نیاز به افزودن منوهای دیگری دارید، می‌توانید طبق نیاز خود اضافه کنید (به تورفتگی فیلدها توجه کنید):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### ایجاد صفحه دسته‌بندی‌ها

*   یک صفحه جدید به نام `categories` ایجاد کنید. دستور آن به شرح زیر است:

 ```bash
 $ hexo new page categories
 ```

*   صفحه تازه ایجاد شده `/source/categories/index.md` را ویرایش کنید و نوع صفحه را `categories` قرار دهید. قالب به طور خودکار تمامی دسته‌بندی‌ها را در این صفحه نمایش خواهد داد (به فاصله بعد از دو نقطه توجه کنید).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### ایجاد صفحه ابر برچسب‌ها

*   یک صفحه جدید به نام tags ایجاد کنید. دستور آن به شرح زیر است:

 ```bash
 $ hexo new page "tags"
 ```

*   صفحه تازه ایجاد شده را ویرایش کنید و نوع صفحه را `tags` قرار دهید. قالب به طور خودکار ابر برچسب‌ها (tag cloud) را در این صفحه نمایش خواهد داد.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### ایجاد صفحه "درباره من"

 *   یک صفحه درباره من (about) جدید ایجاد کنید:

 ```bash
 $ hexo new page "about"
 ```

 *   صفحه تازه ایجاد شده را ویرایش کنید و می‌توانید اطلاعات خود را با فرمت Markdown در بخش اصلی آن بنویسید.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### تنظیم لینک‌های شبکه‌های اجتماعی در نوار کناری

*   فایل `_config.yml` سایت را ویرایش کنید، فیلد `social` را پیدا کنید و سپس نام و آدرس شبکه‌های اجتماعی خود را اضافه کنید. فرمت کلید-مقدار به صورت `نام نمایشی: آدرس لینک` است، به عنوان مثال:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   فایل `/themes/next/_config.yml` را باز کنید و در فیلد `social_icons`، نام شبکه‌های اجتماعی (به حروف بزرگ و کوچک دقت کنید) و [آیکون‌های](http://fontawesome.io/icons/) مربوطه را اضافه کنید. گزینه `enable` برای کنترل نمایش آیکون‌هاست؛ می‌توانید آن را `false` تنظیم کنید تا آیکون‌ها نمایش داده نشوند. به عنوان مثال:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### اتصال وبلاگ به گیت‌هاب

 *   ثبت‌نام در گیت‌هاب: اگر هنوز حساب گیت‌هاب ندارید، ابتدا باید یک حساب کاربری ایجاد کنید.

 *   در گیت‌هاب پروژه‌ای با نام `XXX.github.io` ایجاد کنید که `XXX` نام کاربری گیت‌هاب شماست.

 *   فایل پیکربندی `_config.yml` را در پوشه پروژه `MyBlog` محلی خود باز کنید و `type` آن را روی `git` تنظیم کنید:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   اجرا کنید:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   فایل‌های استاتیک را به صورت محلی تولید کرده و آن‌ها را به گیت‌هاب بفرستید. اجرا کنید:

```bash
hexo g
hexo d
```

حالا مرورگر خود را باز کنید و به آدرس `http://your-name.github.io` بروید. تبریک می‌گویم، وبلاگ شما تا این مرحله کاملاً آماده شده است.

### اتصال دامنه

تا این مرحله، وبلاگ کاملاً راه‌اندازی شده و از طریق دامنه گیت‌هاب نیز قابل دسترسی است. برای اینکه کار عالی‌تر شود، حالا یک دامنه کوتاه‌تر را به این وبلاگ متصل می‌کنیم.

#### خرید دامنه

*   یک دامنه خریداری کنید. خرید از [namesilo.com](https://www.namesilo.com/) توصیه می‌شود؛ یک ارائه‌دهنده دامنه قدیمی و قابل اعتماد با قیمت‌های مناسب و خدمات مطمئن. اگر از کد ارجاع من `PhiloArt.io` استفاده کنید، می‌توانید ۱ دلار تخفیف دریافت کنید. این کد تا تاریخ ۳۱-۱۲-۲۰۲۵ معتبر است.

### تنظیمات DNS دامنه

*   تنظیمات DNS ارائه‌دهنده دامنه

*   ۴ رکورد A اضافه کنید تا به GitHub Pages اشاره کنند:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   یک رکورد `CNAME` اضافه کنید. `name` را `www` و `content` را `your-name.github.io` (که به آدرس GitHub Pages شما اشاره دارد) قرار دهید:

 > CNAME —> philo-li.github.io

*   برای تنظیمات دقیق‌تر، به [مستندات گیت‌هاب پیج](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) مراجعه کنید.

*   افزودن فایل CNAME به دایرکتوری وبلاگ

پس از اتمام تنظیمات DNS، وارد دایرکتوری وبلاگ شوید. در پوشه `source`، یک فایل جدید به نام `CNAME` (به حروف بزرگ و بدون پسوند) ایجاد کنید. آن را با Notepad باز کرده و دامنه خریداری شده خود را در آن بنویسید، مثلاً: `www.philoli.com`

*   اجرا کنید:

```bash
hexo g
hexo d
```

حالا مرورگر خود را باز کنید، دامنه خود را وارد کرده و Enter را فشار دهید. تبریک می‌گویم، شما اکنون یک وبلاگ با دامنه مستقل خود دارید!

### انتشار مقالات جدید

*   در دایرکتوری اصلی وبلاگ، دستور `hexo new “我的第一篇文章”` را اجرا کنید. این کار یک فایل `.md` در پوشه `source/_posts` ایجاد خواهد کرد.

*   این فایل را ویرایش کنید و فیلدهای ابتدایی را به این صورت تغییر دهید:

 ```bash
 title عنوان مقاله
 date تاریخ ایجاد (تاریخ ایجاد فایل)
 updated تاریخ ویرایش (تاریخ ویرایش فایل)
 comments آیا نظرات فعال باشند true
 tags برچسب‌ها
 categories دسته‌بندی‌ها
 permalink نام در URL (نام فایل)
 ```

*   محتوای اصلی را بنویسید (با رعایت قواعد Markdown).

*   فایل‌های استاتیک را به صورت محلی تولید کرده و آن‌ها را به گیت‌هاب بفرستید. اجرا کنید:

```bash
hexo g
hexo d
```

### تنظیمات شخصی‌سازی (پیشرفته)

در ادامه، برخی تنظیمات پیشرفته برای شخصی‌سازی ظاهر وبلاگ ارائه شده است. مبتدیان می‌توانند فعلاً از این بخش صرف نظر کنند.

#### افزودن RSS

 *   افزونه را در دایرکتوری اصلی نصب کنید:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   در انتهای فایل `_config.yml` در دایرکتوری اصلی، موارد زیر را اضافه کنید: (**_توجه: حتماً بعد از دو نقطه (:) یک فاصله قرار دهید، در غیر این صورت خطا رخ خواهد داد!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   فایل `/themes/next/_config.yml` را باز کنید و `rss` را تغییر دهید (توجه: بعد از دو نقطه (:) باید یک فاصله قرار دهید).

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### بریدن متن مقالات در صفحه اصلی

 *   هر بار که متن اصلی مقاله را می‌نویسید، کافی است در فایل `.md` مقاله، هر جا که می‌خواهید متن بریده شود، این خط را اضافه کنید:

 ```markdown
     <!--more-->
 ```

 *   فایل `/themes/next/_config.yml` را باز کنید و گزینه `scroll_to_more` را به `false` تغییر دهید.

#### قرار دادن متن نقل قول در مرکز مقالات

*   استایل پیش‌فرض نقل قول‌های Markdown بهینه‌سازی شده است:

```markdown
{% centerquote %}
متن نقل قول
{% endcenterquote %}
```

{% centerquote %}
متن نقل قول
{% endcenterquote %}

#### تغییر استایل بلوک کد

*   فایل `/themes/next/_config.yml` را ویرایش کنید و پیکربندی `codeblock` را به شرح زیر تغییر دهید:

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

#### تعیین زمان ایجاد سایت

 *   فایل `_config.yml` سایت را ویرایش کنید و فیلد `since` را اضافه کنید.

```bash
since: 2024
```

#### بهبود استایل لینک‌های مقاله

*   فایل `themes\next\source\css\_common\components\post\post.styl` را ویرایش کرده و استایل‌های CSS زیر را در انتهای آن اضافه کنید:

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

#### افزودن تصویر پس‌زمینه به وبلاگ

*   در پوشه `source` در دایرکتوری اصلی، پوشه‌ای به نام `_data` ایجاد کنید. سپس یک فایل `styles.styl` جدید بسازید و آن را باز کنید (`source/_data/styles.styl`) و محتوای زیر را به آن اضافه کنید:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //اگر تصویر کل صفحه را پوشش نداد، نحوه تکرار آن
    background-attachment:fixed;    //آیا تصویر با اسکرول حرکت کند
    background-size: cover;         //پوشش کامل
    background-position:50% 50%;    //موقعیت تصویر
}
```
*   در `url` می‌توانید لینک تصویر یا مسیر دایرکتوری تصویر را قرار دهید. می‌توانید تصویر را `background.jpg` نامگذاری کرده و آن را در پوشه `source/uploads` قرار دهید.

#### تنظیم پس‌زمینه محتوای وبلاگ به حالت نیمه‌شفاف

*   فایل `source/_data/styles.styl` که در مرحله قبل ویرایش کردید را باز کنید و محتوای زیر را به آن اضافه کنید:

```css

// شفاف‌سازی محتوای وبلاگ
// تنظیم شفافیت محتوای مقاله
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


// تنظیم شفافیت سایدبار
.sidebar {
  opacity: 0.9;
}

// تنظیم شفافیت نوار منو
.header-inner {
  background: rgba(255,255,255,0.9);
}

// تنظیم شفافیت کادر جستجو (local-search)
.popup {
  opacity: 0.9;
}
```

#### بهینه‌سازی استایل بلوک‌های کد درون خطی

*   فایل `source/_data/styles.styl` که در مرحله قبل ویرایش کردید را باز کنید و محتوای زیر را به آن اضافه کنید:

```css
// زیباسازی تگ‌های کد (Code)
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### افزودن تعداد بازدیدکنندگان به پایین وب‌سایت

*   ویرایش فایل

```css
# نوار تگ copyright را پیدا کرده و کد را در داخل تگ اضافه کنید

<div class="copyright">
# ......در اینجا تنظیماتی از قبل وجود دارد
# کد جدید را اینجا اضافه کنید
</div>

# پس از افزودن، به این شکل خواهد بود:
<div class="copyright">
  # ......در اینجا تنظیماتی از قبل وجود دارد
  # کد جدید را اینجا اضافه کنید
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   مجدداً تولید کنید تا پیش‌نمایش تغییرات را ببینید. پس از اطمینان از صحت، منتشر کنید.

```bash
hexo g
hexo s
# پس از اطمینان از صحت، منتشر کنید
hexo d
```

#### افزودن فایل README.md به مخزن

معمولاً هر پروژه یک فایل `README.md` دارد، اما پس از استقرار با Hexo در مخزن، فایل `README.md` موجود در پروژه بازنویسی می‌شود. بنابراین، برای جلوگیری از این بازنویسی، باید فایل پیکربندی را تنظیم کنید.

در پوشه ریشه `source` در دایرکتوری `Hexo`، یک فایل `README.md` اضافه کنید. سپس فایل پیکربندی سایت `_config.yml` را ویرایش کرده و مقدار پارامتر `skip_render` را به این صورت تنظیم کنید:

```yml
skip_render: README.md
```
ذخیره کرده و خارج شوید. دفعه بعد که با دستور `hexo d` وبلاگ را مستقر می‌کنید، این فایل `README.md` رندر نخواهد شد.

#### چند افزونه پرکاربرد

-   Hexo Filter MathJax: رندر فرمول‌های ریاضی
    -   نصب: `npm install hexo-filter-mathjax`
    -   پیکربندی دقیق: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: شمارش کلمات مقاله
    -   نصب: `npm install hexo-word-counter`
    -   پیکربندی دقیق: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: بهینه‌سازی سرعت بارگذاری وبلاگ
    -   نصب: `npm install hexo-optimize`
    -   پیکربندی دقیق: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   افزونه‌های بیشتر: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### پشتیبان‌گیری از فایل‌های منبع

-   فراموش نکنید که فایل‌های منبع محلی خود، به خصوص فایل‌های Markdown را به خوبی پشتیبان‌گیری کنید. در صورت از دست دادن سایر تنظیمات، قادر به نوشتن وبلاگ نخواهید بود و باید همه چیز را از ابتدا تنظیم کنید.
-   توصیه می‌شود از همان مخزن گیت‌هاب برای پشتیبان‌گیری استفاده کنید.
-   پیشنهاد می‌شود هر بار که تغییری ایجاد می‌کنید یا حداقل روزانه یک بار پشتیبان‌گیری کنید.
-   برای استفاده‌های بیشتر، به [مستندات گیت](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) مراجعه کنید.

```bash
# آدرس مخزن وبلاگ که قبلاً تنظیم کرده‌اید را اضافه کنید
git remote add https://github.com/your-name/your-name.github.io.git

# تغییرات فعلی را اضافه و ذخیره کنید و یک یادداشت ثبت کنید
git add .
git commit -m "源文件更新"

# یک شاخه جدید ایجاد کرده و به آن سوئیچ کنید
git checkout -b source

# تمامی محتوای شاخه source محلی را به شاخه source در مخزن راه دور ارسال کنید
git push origin source:source
```

### نوشتن وبلاگ با کامپیوترهای مختلف

-   هنگام نوشتن وبلاگ با کامپیوترهای مختلف، لازم است نرم‌افزارهای پایه را نصب کرده، سپس مخزن پشتیبان گیت‌هاب را به صورت محلی دریافت کرده و وبلاگ را به‌روزرسانی کنید.

*   دانلود و نصب Node.js ([دانلود و نصب از وب‌سایت رسمی](https://nodejs.org/en/))
*   دانلود و نصب Git ([دانلود و نصب از وب‌سایت رسمی](https://git-scm.com/downloads))
*   نصب چارچوب هگزو: CMD را باز کرده و اجرا کنید:

 ```bash
 npm install -g hexo-cli
```
*   به‌روزرسانی محلی

```bash
# مخزن را به صورت محلی کلون کنید
git clone https://github.com/your-name/your-name.github.io.git

# اگر قبلاً به صورت محلی کلون کرده‌اید، هر بار قبل از به‌روزرسانی وبلاگ باید آخرین محتوای شاخه را دریافت کنید
git pull origin

# به شاخه مربوطه سوئیچ کنید
git checkout source

# پس از نصب تمامی افزونه‌های پیکربندی هگزو، می‌توانید شروع به به‌روزرسانی و ویرایش محتوای وبلاگ کنید
npm install

# پس از تغییر محتوا، حتماً بلافاصله پشتیبان‌گیری کامل انجام دهید
git add .
git commit -m "博客更新xxx"
git push origin source:source

# آخرین محتوای وبلاگ را به سایت دامنه منتشر کنید
hexo clean
hexo g  # تولید فایل‌های استاتیک
hexo s  # پیش‌نمایش محلی وبلاگ
hexo d  # انتشار آخرین محتوای وبلاگ
```

### خلاصه دستورات پرکاربرد

 ```bash
hexo g
#یا hexo generate، برای تولید صفحات استاتیک بر اساس فایل‌های منبع
hexo d
#یا hexo deploy، برای انتشار و ارسال به GitHub Pages
hexo s
#یا hexo server، برای راه‌اندازی و تست محلی
hexo clean
# پاک کردن کش صفحات استاتیک، سپس hexo d برای تولید مجدد
