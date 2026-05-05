---
title: دليل موجز لإنشاء مدونة Hexo من الصفر (إصدار 2024)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
هل سئمتَ من الواجهات الباهتة لمواقع المدونات؟ هل ضقتَ ذرعًا بالإشعارات المتواصلة للمواقع؟ هل طالما راودك حلم امتلاك مدونتك الخاصة، لكن تعقيد الشروحات وقائمة الأكواد المربكة أوقفتك؟ إذاً، تهانينا! هذه المقالة وُضِعَت خصيصًا لتأخذ بيدك خطوة بخطوة لإنشاء مدونتك الخاصة بأبسط الطرق وأوضحها. كل ما تحتاجه هو قليل من الصبر، ومتابعة الخطوات بدقة.

<!--more-->

باعتباره إطار عمل للمدونات سريعًا، بسيطًا، وفعالًا، فإن Hexo يُعدّ نعمة حقيقية للمبتدئين. أما GitHub، فيُريحنا من عناء استئجار الخوادم ونشرها بشكل إضافي. لذا، ستستعرض هذه المقالة كيفية بناء مدونة باستخدام Hexo و GitHub.

سبق وأن كتبتُ مقالاً في عام 2018 بعنوان [دليل موجز لإنشاء مدونة من الصفر](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/)، لكن نظرًا لتحديثات الإضافات، أصبحت هناك حاجة لتعديل بعض التفاصيل، لذا أعيد إطلاق النسخة المبسطة لعام 2024 من هذا الدليل.

### أعمال التحضير

*   تنزيل وتثبيت Node.js ([تنزيل وتثبيت من الموقع الرسمي](https://nodejs.org/en/))
*   تنزيل وتثبيت Git ([تنزيل وتثبيت من الموقع الرسمي](https://git-scm.com/downloads))

### إعداد مدونة Hexo الثابتة محليًا

*   تثبيت إطار عمل Hexo: افتح موجه الأوامر (CMD) وقم بتشغيل:

 ```bash
 $ npm install -g hexo-cli
 ```

*   أنشئ مجلدًا جديدًا، باسم MyBlog مثلاً، ادخل إليه، ثم انقر بزر الفأرة الأيمن لتشغيل Git، واكتب:

 ```bash
 $ hexo init
 ```

*   بعد إنشاء قالب Hexo، قم بتثبيت npm، وشغّل:

 ```bash
 $ npm install
 ```

بالفعل، لقد اكتمل الجزء الأساسي من المدونة حتى هذه النقطة. لنلقِ نظرة على النتيجة. شغّل:

```bash
$ hexo server
```

الآن، افتح المتصفح، واكتب localhost:4000 لترى كيف تبدو مدونتك حاليًا. استمتع بلحظة الإثارة، ثم اضغط Ctrl + C للمتابعة إلى الخطوات التالية.

### إعدادات التخصيص (مبدئيًا)

#### تغيير القالب

*   قم بتنزيل قالب جديد (على سبيل المثال، [قالب NexT](http://theme-next.iissnan.com/))، ثم شغّل في المجلد الجذر:

 ```bash
 $ git clone https://github.com/theme-next/hexo-theme-next themes/next
 ```

*   افتح ملف `_config.yml` في المجلد الجذر، وقم بتعديل حقل `theme` إلى:

 ```bash
 theme: next
 ```

*   اختيار المظهر: افتح ملف `/themes/next/_config.yml`، وابحث عن حقل `scheme` (يمكنك استخدام Ctrl + F للبحث السريع). يوفر NexT ثلاثة مظاهر مختلفة، يمكنك اختيار المظهر الذي تفضله، ثم إزالة علامة الـ # من أمامه (الملفان الرئيسيان اللذان ستعدلهما لاحقًا هما: _ملف إعدادات الموقع_ و _ملف إعدادات القالب_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   لمعاينة النتيجة، يمكنك تشغيل الأوامر التالية (يمكنك تكرار هذه الخطوة في كل مرة ترغب فيها بمعاينة التغييرات):

```bash
hexo g #أو hexo generate
hexo server
```

#### إعدادات الموقع

*   استخدم محررًا لفتح ملف إعدادات الموقع `_config.yml` في المجلد الجذر (لا تستخدم المفكرة في Windows، فقد تظهر العناوين الصينية مشوهة)، عدّل حقل `Site`، مع الانتباه إلى وجود مسافة بعد النقطتين (القولون):

 ```bash
 # Site
 title: 未知的世界                // اسم المدونة
 subtitle:
 description:  Do something cool // توقيع أو شعار
 author: LulalaP                 // الكاتب
 language: zh-Hans               // لغة الموقع
 timezone:
 ```

### إعداد صورة الملف الشخصي في الشريط الجانبي

*   في المجلد `/source`، أنشئ مجلدًا جديدًا وسمّه `uploads`، ثم ضع صورة ملفك الشخصي (مثل: avatar.jpg) داخل هذا المجلد.

*   افتح ملف `/themes/next/_config.yml`، وابحث عن حقل `avatar` وقم بتعديله ليصبح:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### تحسين صفحات المدونة

#### إضافة قائمة

*   افتح ملف `/themes/next/_config.yml`، وقم بإزالة التعليقات (#) من أمام عناصر القائمة التي ترغب في إضافتها ضمن حقل `menu`. إذا كنت بحاجة إلى إضافة قوائم أخرى، فيمكنك إضافتها حسب الحاجة (انتبه إلى المسافات البادئة للحقول):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### إنشاء صفحة التصنيفات

*   أنشئ صفحة جديدة، وسمّها `categories`، والأمر كالتالي:

 ```bash
 $ hexo new page categories
 ```

*   عدّل الصفحة التي أنشأتها للتو `/source/categories/index.md`، واضبط نوع الصفحة على `categories`. سيقوم القالب تلقائيًا بعرض جميع التصنيفات لهذه الصفحة (تأكد من ترك مسافة بعد النقطتين).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### إنشاء واجهة سحابة الكلمات الدلالية

*   أنشئ صفحة جديدة، وسمّها tags، والأمر كالتالي:

 ```bash
 $ hexo new page "tags"
 ```

*   عدّل الصفحة التي أنشأتها للتو، واضبط نوع الصفحة على tags، وسيقوم القالب تلقائيًا بعرض سحابة الكلمات الدلالية لهذه الصفحة.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### إنشاء صفحة "عني"

 *   أنشئ صفحة "عني" (about):

 ```bash
 $ hexo new page "about"
 ```

 *   عدّل الصفحة التي أنشأتها للتو، ويمكنك كتابة معلوماتك في نص الصفحة بصيغة Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### إعداد روابط التواصل الاجتماعي في الشريط الجانبي

*   عدّل ملف `_config.yml` الخاص بالموقع، وابحث عن حقل `social`، ثم أضف اسم الموقع الاجتماعي وعنوانه. صيغة المفتاح والقيمة هي `اسم العرض: عنوان الرابط`، على سبيل المثال:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   افتح `/themes/next/_config.yml`، وأضف اسم الموقع الاجتماعي (انتبه لحالة الأحرف) و (الأيقونة)[http://fontawesome.io/icons/] تحت حقل `social_icons`. يُستخدم خيار `enable` للتحكم في عرض الأيقونات من عدمه، ويمكنك تعيينه إلى `false` لإزالة الأيقونات. على سبيل المثال:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### ربط المدونة بـ GitHub

 *   تسجيل حساب GitHub: إذا لم يكن لديك حساب GitHub بعد، فعليك التسجيل أولاً.

 *   أنشئ مشروعًا على GitHub باسم `XXX.github.io`، حيث `XXX` هو اسم مستخدم GitHub الخاص بك.

 *   افتح ملف الإعدادات `_config.yml` داخل مشروع مجلد `MyBlog` المحلي، وقم بتعيين `type` فيه إلى `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   شغّل:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   قم بإنشاء الملفات الثابتة محليًا، ثم ادفعها إلى GitHub، وشغّل:

```bash
hexo g
hexo d
```

الآن، افتح المتصفح، وتفضل بزيارة http://your-name.github.io. تهانينا، لقد اكتمل بناء مدونتك حتى هذه النقطة.

### ربط النطاق (الدومين)

لقد اكتمل إعداد المدونة بالكامل حتى الآن، ويمكن الوصول إليها عبر نطاق GitHub. سيكون الأمر أكثر كمالًا إذا ربطت نطاقًا قصيرًا (اسم نطاق مخصص) بهذه المدونة.

#### شراء النطاق

*   اشترِ اسم نطاق، وننصح بالشراء من [namesilo.com](https://www.namesilo.com/)، إنه مزود نطاقات عريق، يقدم أسعارًا معقولة وخدمة موثوقة. إذا استخدمت رمز الإحالة الخاص بي `PhiloArt.io`، فستحصل على خصم دولار واحد، يسري حتى 31-12-2025.

### تحليل النطاق

*   إعدادات DNS لمزود النطاق

*   أضف 4 سجلات من نوع A، لتشير إلى GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   أضف سجل `CNAME` واحدًا، حيث يكون `name` هو `www`، و`content` هو `your-name.github.io` (يشير إلى عنوان صفحة GitHub Pages الخاصة بك):

 > CNAME —> philo-li.github.io

*   للاطلاع على إعدادات أكثر تفصيلاً، يرجى مراجعة [وثائق GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   إضافة ملف CNAME إلى دليل المدونة

 بعد إعداد تحليل النطاق، ادخل إلى دليل المدونة، وفي مجلد `source`، أنشئ ملفًا جديدًا باسم `CNAME` (انتبه إلى الأحرف الكبيرة، ولا يوجد امتداد). افتحه باستخدام المفكرة (أو أي محرر نصوص) واكتب اسم النطاق الذي اشتريته، مثل: `www.philoli.com`

*   شغّل:

```bash
hexo g
hexo d
```

الآن افتح المتصفح، أدخل اسم النطاق، واضغط Enter. تهانينا، لقد أصبحت تمتلك مدونة بنطاقك المستقل الخاص بك.

### نشر مقالات جديدة

*   في المجلد الجذر للمدونة، نفّذ الأمر: `hexo new “مقالي الأول”`، وسيتم إنشاء ملف `.md` داخل مجلد `source/_posts`.

*   عدّل هذا الملف، وغيّر الحقول الأولية لتصبح كالتالي:

 ```bash
 title عنوان المقال
 date تاريخ الإنشاء (تاريخ إنشاء الملف)
 updated تاريخ التعديل (تاريخ تعديل الملف)
 comments هل تفعيل التعليقات true
 tags الوسوم
 categories التصنيفات
 permalink الاسم في الرابط (اسم الملف)
 ```

*   اكتب محتوى المقال (باتباع قواعد Markdown)

*   قم بإنشاء الملفات الثابتة محليًا، ثم ادفعها إلى GitHub، وشغّل:

```bash
hexo g
hexo d
```

### إعدادات التخصيص (متقدمة)

فيما يلي بعض إعدادات التخصيص المتقدمة لنمط المدونة. يمكن للمبتدئين تخطي هذا الجزء في الوقت الحالي.

#### إضافة RSS

 *   تثبيت الإضافة في المجلد الجذر

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   في نهاية ملف `_config.yml` في المجلد الجذر، أضف ما يلي: (**_يرجى الانتباه إلى ضرورة إضافة مسافة بعد النقطتين، وإلا سيحدث خطأ!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   افتح ملف `/themes/next/_config.yml`، وعدّل `rss` (انتبه إلى إضافة مسافة بعد النقطتين).

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### قص المقالات في الصفحة الرئيسية
 *   في كل مرة تكتب فيها محتوى مقال، ما عليك سوى إضافة ما يلي في المكان الذي ترغب في قطع المقال عنده داخل ملف الـ .md:

 ```markdown
     <!--more-->
 ```

 *   افتح ملف `/themes/next/_config.yml`، وعدّل خيار `scroll_to_more` لتعيينه إلى `false`.

#### توسيط نص الاقتباسات داخل المقالات
*   تم تحسين نمط الاقتباسات الافتراضي في Markdown.

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### تعديل نمط كتل الأكواد

*   عدّل ملف `/themes/next/_config.yml`، وغيّر إعدادات `codeblock` كالتالي:

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

#### تحديد وقت إنشاء الموقع

 *   عدّل ملف `_config.yml` الخاص بالموقع، وأضف الحقل الجديد `since`.

```bash
since: 2024
```

#### تحسين نمط روابط المقالات

*   عدّل الملف `themes\next\source\css\_common\components\post\post.styl`، وأضف أنماط CSS التالية في النهاية:

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

#### إضافة صورة خلفية للمدونة
*   في مجلد `source` الموجود في المجلد الجذر، أنشئ مجلدًا باسم `_data`، ثم أنشئ ملف `styles.styl` بداخله. افتح الملف الجديد `source/_data/styles.styl`، وأضف المحتوى التالي:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //图片无法铺满时，是否重复以及重复方式
    background-attachment:fixed;    //图片是否跟随滚动
    background-size: cover;         //覆盖
    background-position:50% 50%;    //图片位置
}
```
*   يمكن أن يكون عنوان URL رابطًا للصورة، أو مسارًا إليها. يمكنك تسمية الصورة `background.jpg`، ووضعها في مجلد `source/uploads`.

#### جعل خلفية محتوى المدونة شبه شفافة
*   افتح الملف الذي تم تعديله في الخطوة السابقة `source/_data/styles.styl`، وتابع إضافة المحتوى التالي أدناه:

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

#### تحسين نمط كتل الأكواد المضمنة
*   افتح الملف الذي تم تعديله في الخطوة السابقة `source/_data/styles.styl`، وتابع إضافة المحتوى التالي أدناه:

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

#### إضافة عداد زوار إلى تذييل الموقع

*   عدّل الملف

```css
# ابحث عن قسم حقوق النشر (copyright)، ثم أضف الكود داخل هذا القسم.

<div class="copyright">
# ...... توجد هنا بعض الإعدادات مسبقًا
# أضف الكود الجديد هنا
</div>

# بعد الإضافة سيبدو هكذا:
<div class="copyright">
  # ...... توجد هنا بعض الإعدادات مسبقًا
  # أضف الكود الجديد هنا
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   أعد إنشاء المعاينة للتأكد من التعديلات، ثم انشرها بعد التأكد من صحتها.

```bash
hexo g
hexo s
# انشر بعد التأكد من صحة التعديلات
hexo d
```

#### إضافة ملف README.md إلى المستودع

عادةً ما يحتوي كل مشروع على ملف `README.md`، ولكن عند نشر Hexo في المستودع، يتم تجاوز ملف `README.md` الموجود في المشروع. لذلك، يجب إعداد ملف التكوين لتجنب التجاوز.

في دليل `Hexo`، ضمن المجلد الجذر `source`، أضف ملف `README.md`. عدّل ملف إعدادات الموقع `_config.yml`، واضبط قيمة المعامل `skip_render` لتكون:

```yml
skip_render: README.md
```
احفظ واخرج. عند استخدام الأمر `hexo d` لنشر المدونة مرة أخرى، لن يتم معالجة ملف `README.md` هذا.

#### بعض الإضافات الشائعة

-   Hexo Filter MathJax: لعرض الصيغ الرياضية.
    -   التثبيت: `npm install hexo-filter-mathjax`
    -   إعدادات مفصلة: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: لإحصاء الكلمات في المقالات.
    -   التثبيت: `npm install hexo-word-counter`
    -   إعدادات مفصلة: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: لتحسين سرعة تحميل المدونة.
    -   التثبيت: `npm install hexo-optimize`
    -   إعدادات مفصلة: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   المزيد من الإضافات: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### النسخ الاحتياطي لملفات المصدر

-   تذكر دائمًا أن تقوم بنسخ ملفات المصدر المحلية احتياطيًا، وخاصة ملفات Markdown. إذا فقدت الإعدادات الأخرى، فلن تتمكن من كتابة المدونة بشكل طبيعي، وستحتاج إلى البدء من الصفر.
-   يُنصح باستخدام نفس مستودع GitHub للنسخ الاحتياطي.
-   يُفضل إجراء نسخة احتياطية بعد كل تغيير، أو مرة واحدة يوميًا.
-   لمزيد من الاستخدامات، يرجى مراجعة [وثائق Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) 

```bash
# أضف عنوان مستودع المدونة الذي تم إعداده مسبقًا
git remote add https://github.com/your-name/your-name.github.io.git

# أضف التعديلات الحالية واحفظها، وسجل الملاحظات
git add .
git commit -m "源文件更新"

# أنشئ فرعًا جديدًا وقم بالتبديل إليه
git checkout -b source

# ادفع كل محتوى الفرع المحلي source إلى الفرع source في المستودع البعيد
git push origin source:source
```

### الكتابة في المدونة من أجهزة كمبيوتر مختلفة
-   عند الكتابة في المدونة من أجهزة كمبيوتر مختلفة، ستحتاج إلى تثبيت البرامج الأساسية، ثم سحب مستودع GitHub الاحتياطي البعيد إلى جهازك المحلي لتحديث المدونة.

*   تنزيل وتثبيت Node.js ([تنزيل وتثبيت من الموقع الرسمي](https://nodejs.org/en/))
*   تنزيل وتثبيت Git ([تنزيل وتثبيت من الموقع الرسمي](https://git-scm.com/downloads))
*   تثبيت إطار عمل Hexo: افتح موجه الأوامر (CMD) وقم بتشغيل:

 ```bash
 npm install -g hexo-cli
```
*   إجراء التحديثات المحلية

```bash
# استنساخ المستودع إلى الجهاز المحلي
git clone https://github.com/your-name/your-name.github.io.git

# إذا كان المستودع مستنسخًا محليًا بالفعل، فستحتاج إلى سحب أحدث محتوى للفرع قبل كل تحديث للمدونة.
git pull origin

# التبديل إلى الفرع المناسب
git checkout source

# بعد تثبيت جميع الإضافات ضمن إعدادات Hexo، يمكنك البدء في تحديث وتحرير محتوى المدونة.
npm install

# بعد تعديل المحتوى، تذكر دائمًا إجراء نسخة احتياطية متكاملة.
git add .
git commit -m "博客更新xxx"
git push origin source:source

# نشر ودفع أحدث محتوى للمدونة إلى موقع النطاق.
hexo clean
hexo g  # إنشاء الملفات الثابتة
hexo s  # معاينة تأثير المدونة محليًا
hexo d  # نشر أحدث محتوى للمدونة
```

### ملخص لبعض الأوامر الشائعة

 ```bash
hexo g
# أو hexo generate، لإنشاء صفحات ويب ثابتة بناءً على ملفات المصدر.
hexo d
# أو hexo deploy، للنشر والدفع إلى GitHub Pages.
hexo s
# أو hexo server، للنشر والاختبار محليًا.
hexo clean
# مسح ذاكرة التخزين المؤقت لصفحات الويب الثابتة، ثم hexo d لإعادة الإنشاء.
