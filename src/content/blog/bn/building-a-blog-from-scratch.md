---
title: শুরু থেকে Hexo ব্লগ তৈরি করার সহজ নির্দেশিকা (২০২৪ সংস্করণ)
date: 2024-04-11 00:25:20
tags: ব্লগ搭建
categories: 日常折腾
---
ব্লগ ওয়েবসাইটগুলোর কুরুচিপূর্ণ ইন্টারফেস দেখে কি আপনি ক্লান্ত নন? অবিরাম ওয়েবসাইট নোটিফিকেশনে কি আপনি বিরক্ত নন? অনেকদিন ধরেই কি নিজের একটি ব্লগ তৈরি করার কথা ভাবছেন, কিন্তু জটিল টিউটোরিয়াল আর মাথা ঘুরিয়ে দেওয়া কোডের ভয়ে পিছিয়ে যাচ্ছেন? তাহলে আপনাকে অভিনন্দন, কারণ এই পোস্টটি সবচেয়ে সহজবোধ্য উপায়ে ধাপে ধাপে আপনাকে আপনার নিজের ব্লগ তৈরি করতে শেখাবে। আপনার শুধু একটু ধৈর্য প্রয়োজন, আর প্রতিটি ধাপ মনোযোগ দিয়ে অনুসরণ করতে হবে।

<!--more-->

Hexo একটি দ্রুত, পরিচ্ছন্ন এবং কার্যকর ব্লগ ফ্রেমওয়ার্ক হিসেবে নতুনদের জন্য আশীর্বাদস্বরূপ। আর GitHub আমাদের অতিরিক্ত সার্ভার ভাড়া করা ও স্থাপনের ঝামেলা থেকে মুক্তি দেয়। অতএব, এই নিবন্ধে Hexo এবং GitHub ব্যবহার করে একটি ব্লগ তৈরি করা হবে।

আমি ২০১৮ সালে [শুরু থেকে ব্লগ তৈরির সহজ নির্দেশিকা](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) শিরোনামে একটি পোস্ট লিখেছিলাম। তবে প্লাগইন আপডেট হওয়ার কারণে কিছু পরিবর্তনে প্রয়োজন হয়েছে, তাই এটি ২০২৪ সংস্করণের একটি নতুন সহজ নির্দেশিকা।

### প্রস্তুতির কাজ

* node.js ডাউনলোড এবং ইনস্টল করুন ([অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোড করুন](https://nodejs.org/en/))
* git ডাউনলোড এবং ইনস্টল করুন ([অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোড করুন](https://git-scm.com/downloads))

### স্থানীয়ভাবে Hexo স্ট্যাটিক ব্লগ সেটআপ

* Hexo ফ্রেমওয়ার্ক ইনস্টল করুন: cmd ওপেন করে রান করুন
  
 ```bash
 $ npm install -g hexo-cli
 ```

* একটি নতুন ফোল্ডার তৈরি করুন, যেমন MyBlog, এবং সেই ফোল্ডারের মধ্যে গিয়ে রাইট ক্লিক করে git রান করুন, তারপর টাইপ করুন:

 ```bash
 $ hexo init
 ```

* Hexo টেমপ্লেট তৈরি হয়ে গেলে, npm ইনস্টল করুন, তারপর রান করুন:

 ```bash
$ npm install
 ```

হ্যাঁ, ব্লগের মূল অংশটি এখন সম্পূর্ণ হয়েছে। চলুন এর প্রভাব দেখি। রান করুন:

```bash
$ hexo server
```

এখন ব্রাউজার খুলে localhost:4000 টাইপ করলে ব্লগের বর্তমান অবস্থা দেখতে পাবেন। একটু আনন্দিত হোন, তারপর Ctrl + C চাপলে আপনি পরবর্তী ধাপে যেতে পারবেন।

### ব্যক্তিগতকরণ (প্রাথমিক)

#### থিম পরিবর্তন

* নতুন থিম ডাউনলোড করুন ([NexT থিমের উদাহরণ](http://theme-next.iissnan.com/))। রুট ডিরেক্টরিতে রান করুন:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* রুট ডিরেক্টরিতে থাকা `_config.yml` ফাইলটি ওপেন করুন এবং `theme` ফিল্ডটি পরিবর্তন করে লিখুন:

 ```bash
theme: next
 ```

* চেহারা নির্বাচন করুন: `/themes/next/_config.yml` ফাইলটি ওপেন করুন, `scheme` ফিল্ডটি খুঁজুন (Ctrl + F ব্যবহার করে দ্রুত খুঁজে পেতে পারেন)। NexT তিনটি ভিন্ন চেহারা প্রদান করে, আপনার পছন্দের একটি নির্বাচন করুন এবং সেটির '#' চিহ্নটি সরিয়ে দিন (পরবর্তীতে প্রধানত এই দুটি ফাইলই পরিবর্তন করা হবে: _সাইট কনফিগারেশন ফাইল_ এবং _থিম কনফিগারেশন ফাইল_)।

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* প্রভাব দেখতে, নিচের কমান্ডটি রান করতে পারেন (ভবিষ্যতে যখনই প্রভাব দেখতে চাইবেন, এই ধাপটি পুনরাবৃত্তি করতে পারবেন):

```bash
hexo g #অথবা hexo generate
hexo server
```

#### সাইট কনফিগারেশন

* রুট ডিরেক্টরিতে থাকা সাইট কনফিগারেশন ফাইল `_config.yml` একটি এডিটর দিয়ে ওপেন করুন (উইন্ডোজে নোটপ্যাড ব্যবহার করবেন না, কারণ বাংলা শিরোনামে এনকোডিং সমস্যা হতে পারে)। `Site` ফিল্ডটি পরিবর্তন করুন, লক্ষ্য রাখবেন কোলনের পর যেন একটি স্পেস থাকে:

 ```bash
 # Site
 title: অজানা পৃথিবী                //ব্লগের নাম
 subtitle:
 description:  কিছু অসাধারণ কাজ করুন //একটি স্বাক্ষর
 author: LulalaP                 //লেখক
 language: zh-Hans               //ওয়েবসাইটের ভাষা
 timezone:
 ```

### সাইডবারে প্রোফাইল ছবি সেট করা

* `/source` ফোল্ডারে `uploads` নামে একটি নতুন ফোল্ডার তৈরি করুন। প্রোফাইল ছবিটি (যেমন: avatar.jpg) সেই ফোল্ডারে রাখুন।

* `/themes/next/_config.yml` ফাইলটি ওপেন করুন, `avatar` ফিল্ডটি খুঁজুন এবং পরিবর্তন করে লিখুন:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### ব্লগের পেজগুলো সম্পূর্ণ করা

#### মেনু যোগ করা
* `/themes/next/_config.yml` ফাইলটি ওপেন করুন, `menu` ফিল্ডে যে মেনুগুলো যোগ করতে চান সেগুলোর সামনের কমেন্ট (#) চিহ্ন সরিয়ে দিন। প্রয়োজন অনুযায়ী অন্যান্য মেনু যোগ করতে পারেন (লক্ষ্য রাখবেন ফিল্ডগুলোর ইন্ডেন্টেশন যেন সঠিক থাকে):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### ক্যাটাগরি পেজ তৈরি

* একটি নতুন পেজ তৈরি করুন, যার নাম `categories`, কমান্ডটি নিচে দেওয়া হলো:

 ```bash
 $ hexo new page categories
 ```

* সদ্য তৈরি করা পেজ `/source/categories/index.md` এডিট করুন। পেজের ধরন `categories` হিসেবে সেট করুন, থিম স্বয়ংক্রিয়ভাবে এই পেজে সকল ক্যাটাগরি প্রদর্শন করবে (লক্ষ্য রাখবেন কোলনের পর স্পেস যেন থাকে)।

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### ট্যাগ ক্লাউড ইন্টারফেস তৈরি

* একটি নতুন পেজ তৈরি করুন, যার নাম `tags`, কমান্ডটি নিচে দেওয়া হলো:

 ```bash
 $ hexo new page "tags"
 ```

* সদ্য তৈরি করা পেজটি এডিট করুন। পেজের ধরন `tags` হিসেবে সেট করুন, থিম স্বয়ংক্রিয়ভাবে এই পেজে ট্যাগ ক্লাউড প্রদর্শন করবে।

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "আমার সম্পর্কে" পেজ তৈরি

 * একটি নতুন "about" পেজ তৈরি করুন:

 ```bash
 $ hexo new page "about"
 ```

 * সদ্য তৈরি করা পেজটি এডিট করুন। মূল অংশে Markdown ফরম্যাটে আপনার তথ্য লিখতে পারেন।
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### সাইডবারে সোশ্যাল লিংক সেট করা

* সাইটের `_config.yml` ফাইলটি এডিট করুন। `social` ফিল্ডটি খুঁজুন, তারপর সামাজিক সাইটের নাম এবং ঠিকানা যোগ করুন। কী-ভ্যালু ফরম্যাটটি হলো `প্রদর্শন নাম: লিঙ্ক ঠিকানা`, উদাহরণস্বরূপ:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* `/themes/next/_config.yml` ফাইলটি ওপেন করুন, `social_icons` ফিল্ডের নিচে সামাজিক সাইটের নাম (কেস-সেন্সিটিভ) এবং (আইকন)[http://fontawesome.io/icons/] যোগ করুন। `enable` অপশনটি আইকন প্রদর্শন নিয়ন্ত্রণ করে, আপনি এটিকে `false` সেট করে আইকনগুলি সরাতে পারেন। উদাহরণস্বরূপ:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### GitHub-এর সাথে ব্লগ যুক্ত করা

 * GitHub অ্যাকাউন্ট রেজিস্টার করুন: যদি আপনার এখনও GitHub অ্যাকাউন্ট না থাকে, তাহলে প্রথমে একটি রেজিস্টার করতে হবে।

 * GitHub-এ `XXX.github.io` নামে একটি প্রোজেক্ট তৈরি করুন, যেখানে XXX হবে আপনার GitHub ইউজারনেম।

 * আপনার স্থানীয় `MyBlog` ফোল্ডারের মধ্যে থাকা `_config.yml` কনফিগারেশন ফাইলটি ওপেন করুন এবং এর `type` সেট করুন `git` এ:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * রান করুন:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 * স্থানীয়ভাবে স্ট্যাটিক ফাইল তৈরি করুন এবং GitHub-এ পুশ করুন, রান করুন:

```bash
hexo g
hexo d
```

এই মুহূর্তে ব্রাউজার ওপেন করে http://your-name.github.io ভিজিট করুন। অভিনন্দন, আপনার ব্লগ এখন সম্পূর্ণ সেটআপ হয়ে গেছে!

### ডোমেইন যুক্ত করা

এখন পর্যন্ত ব্লগ সম্পূর্ণ সেটআপ করা হয়েছে এবং GitHub-এর ডোমেইন ব্যবহার করেও অ্যাক্সেস করা যাচ্ছে। এইবার একটি ছোট ডোমেইন এই ব্লগের সাথে যুক্ত করলে আরও নিখুঁত হবে।

#### ডোমেইন কেনা

* একটি ডোমেইন কিনুন। [namesilo.com](https://www.namesilo.com/) থেকে কেনার সুপারিশ করা হচ্ছে, এটি একটি সুপ্রতিষ্ঠিত ডোমেইন প্রদানকারী, যাদের দাম সাশ্রয়ী এবং পরিষেবা নির্ভরযোগ্য। আপনি যদি আমার রেফারেল কোড `PhiloArt.io` ব্যবহার করেন, তাহলে ১ ডলার ছাড় পেতে পারেন, যা ২০২৫-১২-৩১ পর্যন্ত বৈধ।

### ডোমেইন রেজোলিউশন

* ডোমেইন প্রদানকারীর DNS সেটআপ

* GitHub Pages-এর দিকে নির্দেশ করার জন্য ৪টি A রেকর্ড যোগ করুন:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* একটি `CNAME` রেকর্ড যোগ করুন, `name` হবে `www`, `content` হবে `your-name.github.io` (আপনার GitHub Pages ঠিকানার দিকে নির্দেশ করবে):

 > CNAME —> philo-li.github.io

* আরও বিস্তারিত সেটআপের জন্য [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) দেখুন।

* ব্লগ ডিরেক্টরিতে CNAME ফাইল যোগ করুন

ডোমেইন রেজোলিউশন কনফিগার করার পর, ব্লগ ডিরেক্টরিতে যান, `source` ডিরেক্টরির মধ্যে `CNAME` নামে একটি ফাইল তৈরি করুন (লক্ষ্য রাখবেন এটি বড় হাতের অক্ষরে হবে এবং কোনো এক্সটেনশন থাকবে না)। নোটপ্যাড দিয়ে ওপেন করে কেনা ডোমেইনটি লিখুন, যেমন: `www.philoli.com`

* রান করুন:

```bash
hexo g
hexo d
```

এখন ব্রাউজার ওপেন করে আপনার ডোমেইন টাইপ করে এন্টার চাপুন। অভিনন্দন, আপনার এখন নিজের একটি স্বাধীন ডোমেইনযুক্ত ব্লগ রয়েছে!

### নতুন পোস্ট প্রকাশ করা

* ব্লগের রুট ডিরেক্টরিতে রান করুন: `hexo new “আমার প্রথম পোস্ট”`, এটি `source/_posts` ফোল্ডারে একটি `.md` ফাইল তৈরি করবে।

* এই ফাইলটি এডিট করুন, শুরুর ফিল্ডগুলো পরিবর্তন করে লিখুন:

 ```bash
 title পোস্টের শিরোনাম
 date তৈরির তারিখ (ফাইলের তৈরির তারিখ)
 updated পরিবর্তনের তারিখ (ফাইলের পরিবর্তনের তারিখ)
 comments কমেন্ট চালু থাকবে কিনা true
 tags ট্যাগ
 categories ক্যাটাগরি
 permalink url-এর নাম (ফাইলের নাম)
 ```

* মূল কন্টেন্ট লিখুন (Markdown নিয়মাবলী অনুসরণ করে)

* স্থানীয়ভাবে স্ট্যাটিক ফাইল তৈরি করুন এবং GitHub-এ পুশ করুন, রান করুন:

```bash
hexo g
hexo d
```

### ব্যক্তিগতকরণ (উন্নত)

নিচে ব্লগের কিছু উন্নত ব্যক্তিগতকরণ স্টাইল সেটিংস দেওয়া হলো। নতুনরা চাইলে এই অংশটি আপাতত এড়িয়ে যেতে পারেন।

#### RSS যোগ করা

 * রুট ডিরেক্টরিতে প্লাগইন ইনস্টল করুন

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * রুট ডিরেক্টরিতে থাকা `_config.yml` ফাইলের শেষে যোগ করুন: (**_লক্ষ্য রাখবেন কোলনের পর যেন একটি স্পেস থাকে, অন্যথায় ত্রুটি হতে পারে!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * `/themes/next/_config.yml` ফাইলটি ওপেন করুন, `rss` পরিবর্তন করুন (লক্ষ্য রাখবেন কোলনের পর যেন একটি স্পেস থাকে)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### হোমপেজে পোস্ট ট্রাঙ্কেশন
 * যখনই কোনো পোস্ট লিখবেন, মূল অংশের যেখানে ট্রাঙ্কেট করতে চান সেখানে যোগ করুন:

 ```markdown
     <!--more-->
 ```

 * `/themes/next/_config.yml` ফাইলটি ওপেন করুন, `scroll_to_more` অপশনটি `false` এ সেট করুন।

#### পোস্টের মধ্যে উদ্ধৃতি টেক্সট সেন্টার করা
* Markdown-এর ডিফল্ট উদ্ধৃতির স্টাইল অপ্টিমাইজ করা হয়েছে।

```markdown
{% centerquote %}
উদ্ধৃত পাঠ্য
{% endcenterquote %}
```

{% centerquote %}
উদ্ধৃত পাঠ্য
{% endcenterquote %}

#### কোড ব্লকের স্টাইল পরিবর্তন

* `/themes/next/_config.yml` ফাইলটি এডিট করুন, `codeblock` কনফিগারেশনটি নিম্নরূপ পরিবর্তন করুন:

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

#### সাইট তৈরির সময় নির্ধারণ

 * সাইটের `_config.yml` ফাইলটি এডিট করুন, `since` নামে একটি নতুন ফিল্ড যোগ করুন।

```bash
since: 2024
```

#### পোস্ট লিংকের স্টাইল উন্নত করা

* `themes\next\source\css\_common\components\post\post.styl` ফাইলটি এডিট করে পরিবর্তন করুন, শেষে নিচের css স্টাইলটি যোগ করুন:

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

#### ব্লগে ব্যাকগ্রাউন্ড ইমেজ যোগ করা
* রুট ডিরেক্টরির `source` ফোল্ডারে `_data` ফোল্ডার তৈরি করুন, `styles.styl` ফাইল তৈরি করুন। সদ্য তৈরি করা ফাইল `source/_data/styles.styl` ওপেন করে নিচের কন্টেন্ট যোগ করুন:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //ছবি পুরোটা না এলে পুনরাবৃত্তি হবে কিনা এবং কিভাবে
    background-attachment:fixed;    //ছবি স্ক্রল করার সাথে যাবে কিনা
    background-size: cover;         //কভার
    background-position:50% 50%;    //ছবির অবস্থান
}
```
* url-এ ছবির লিঙ্ক বা ছবির ডিরেক্টরি হতে পারে। ছবিটি `background.jpg` নামে নামকরণ করে `source/uploads` ফোল্ডারে রাখতে পারেন।

#### ব্লগের কন্টেন্ট ব্যাকগ্রাউন্ড অর্ধ-স্বচ্ছ করা
* আগের ধাপে এডিট করা ফাইল `source/_data/styles.styl` ওপেন করুন, এবং এর নিচে নিচের কন্টেন্ট যোগ করুন:

```css

//ব্লগের কন্টেন্ট স্বচ্ছ করা
//পোস্ট কন্টেন্টের স্বচ্ছতা সেটিংস
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


//সাইডবারের স্বচ্ছতা সেটিংস
.sidebar {
  opacity: 0.9;
}

//মেনুবারের স্বচ্ছতা সেটিংস
.header-inner {
  background: rgba(255,255,255,0.9);
}

//সার্চ বক্সের (local-search) স্বচ্ছতা সেটিংস
.popup {
  opacity: 0.9;
}
```

#### ইনলাইন কোড ব্লকের স্টাইল অপ্টিমাইজ করা
* আগের ধাপে এডিট করা ফাইল `source/_data/styles.styl` ওপেন করুন, এবং এর নিচে নিচের কন্টেন্ট যোগ করুন:

```css
// কোড ট্যাগগুলির জন্য সৌন্দর্যবর্ধন
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### ওয়েবসাইটের নিচে ভিজিটরের সংখ্যা যোগ করা

* ফাইলটি এডিট করে পরিবর্তন করুন

```css
# copyright ট্যাগটি খুঁজুন, তারপর ট্যাগটির ভিতরে কোড যোগ করুন

<div class="copyright">
# ......এখানে কিছু কনফিগারেশন ইতিমধ্যেই আছে
# এখানে নতুন কোড যোগ করুন
</div>

# যোগ করার পর এটি দেখতে এমন হবে:
<div class="copyright">
  # ......এখানে কিছু কনফিগারেশন ইতিমধ্যেই আছে
  # এখানে নতুন কোড যোগ করুন
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* পরিবর্তনগুলি প্রিভিউ করতে পুনরায় জেনারেট করুন, সবকিছু ঠিক থাকলে প্রকাশ করুন।

```bash
hexo g
hexo s
# সবকিছু ঠিক থাকলে প্রকাশ করুন
hexo d
```

#### রিপোজিটরিতে README.md ফাইল যোগ করা

সাধারণত প্রতিটি প্রজেক্টে একটি `README.md` ফাইল থাকে, কিন্তু Hexo ব্যবহার করে রিপোজিটরিতে ডিপ্লয় করার পর প্রজেক্টের `README.md` ফাইলটি ওভাররাইট হয়ে যায়। তাই ওভাররাইট এড়াতে কনফিগারেশন ফাইল সেট করতে হবে।

`Hexo` ডিরেক্টরির `source` রুট ডিরেক্টরিতে একটি `README.md` ফাইল যোগ করুন, সাইট কনফিগারেশন ফাইল `_config.yml` পরিবর্তন করুন, `skip_render` প্যারামিটারের মান সেট করুন:

```yml
skip_render: README.md
```
সেভ করে বেরিয়ে আসুন। এরপর যখন `hexo d` কমান্ড ব্যবহার করে ব্লগ ডিপ্লয় করবেন, তখন `README.md` ফাইলটি রেন্ডার হবে না।

#### কয়েকটি দরকারী প্লাগইন

- Hexo Filter MathJax: গাণিতিক সূত্র রেন্ডার করার জন্য
  - ইনস্টল করুন `npm install hexo-filter-mathjax`
  - বিস্তারিত কনফিগারেশন: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: পোস্টের শব্দ গণনা
  - ইনস্টল করুন `npm install hexo-word-counter`
  - বিস্তারিত কনফিগারেশন: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: ব্লগের লোডিং গতি অপ্টিমাইজ করা
  - ইনস্টল করুন `npm install hexo-optimize`
  - বিস্তারিত কনফিগারেশন: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- আরও প্লাগইন: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### সোর্স ফাইল ব্যাকআপ

- স্থানীয় সোর্স ফাইলগুলির ব্যাকআপ রাখতে ভুলবেন না, বিশেষ করে Markdown ফাইলগুলি। অন্যান্য কনফিগারেশন হারিয়ে গেলে স্বাভাবিকভাবে ব্লগ লিখতে পারবেন না, সবকিছু শুরু থেকে সেটআপ করতে হবে।
- একই GitHub রিপোজিটরি ব্যবহার করে ব্যাকআপ নেওয়ার পরামর্শ দেওয়া হচ্ছে।
- যখনই কোনো পরিবর্তন করা হয়, তখনই ব্যাকআপ নেওয়ার বা প্রতিদিন একবার ব্যাকআপ নেওয়ার পরামর্শ দেওয়া হয়।
- আরও ব্যবহারের জন্য [Git ডকুমেন্টেশন](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) দেখুন।

```bash
# আগে সেট করা ব্লগের রিপোজিটরি ঠিকানা যোগ করুন
git remote add https://github.com/your-name/your-name.github.io.git

# বর্তমান পরিবর্তনগুলি যোগ করুন এবং সেভ করুন, একটি নোট সহ
git add .
git commit -m "সোর্স ফাইল আপডেট"

# একটি নতুন ব্রাঞ্চ তৈরি করুন এবং তাতে স্যুইচ করুন
git checkout -b source

# স্থানীয় সোর্স ব্রাঞ্চের সমস্ত কন্টেন্ট রিমোট রিপোজিটরির সোর্স ব্রাঞ্চে পুশ করুন
git push origin source:source
```

### ভিন্ন কম্পিউটার থেকে ব্লগ লেখা
- ভিন্ন কম্পিউটার থেকে ব্লগ লেখার সময়, আপনাকে মৌলিক সফটওয়্যার ইনস্টল করতে হবে, তারপর রিমোট ব্যাকআপ GitHub রিপোজিটরি স্থানীয়ভাবে ক্লোন করতে হবে, এবং ব্লগের আপডেট করতে হবে।

* node.js ডাউনলোড এবং ইনস্টল করুন ([অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোড করুন](https://nodejs.org/en/))
* git ডাউনলোড এবং ইনস্টল করুন ([অফিসিয়াল ওয়েবসাইট থেকে ডাউনলোড করুন](https://git-scm.com/downloads))
* Hexo ফ্রেমওয়ার্ক ইনস্টল করুন: cmd ওপেন করে রান করুন

 ```bash
 npm install -g hexo-cli
```
* স্থানীয়ভাবে আপডেট করুন

```bash
# রিপোজিটরি স্থানীয়ভাবে ক্লোন করুন
git clone https://github.com/your-name/your-name.github.io.git

# যদি স্থানীয়ভাবে ইতিমধ্যেই ক্লোন করা থাকে, তাহলে প্রতিবার ব্লগ আপডেট করার আগে সর্বশেষ ব্রাঞ্চ কন্টেন্ট পুল করতে হবে
git pull origin

# সংশ্লিষ্ট ব্রাঞ্চে স্যুইচ করুন
git checkout source

# Hexo কনফিগারেশনের অধীনে সমস্ত প্লাগইন ইনস্টল করার পর ব্লগ কন্টেন্ট এডিট করা শুরু করতে পারেন
npm install

# কন্টেন্ট পরিবর্তন করার পর দ্রুত ব্যাকআপ নিতে ভুলবেন না
git add .
git commit -m "ব্লগ আপডেট xxx"
git push origin source:source

# ডোমেইন সাইটে সর্বশেষ ব্লগ কন্টেন্ট প্রকাশ করুন
hexo clean
hexo g  # স্ট্যাটিক ফাইল তৈরি করুন
hexo s  # স্থানীয়ভাবে ব্লগের প্রভাব প্রিভিউ করুন
hexo d  # সর্বশেষ ব্লগ কন্টেন্ট প্রকাশ করুন
```

### কয়েকটি সাধারণ কমান্ডের সংক্ষিপ্ত তালিকা

 ```bash
hexo g
#অথবা hexo generate, সোর্স ফাইল থেকে স্ট্যাটিক ওয়েবপেজ তৈরি করে
hexo d
#অথবা hexo deploy, GitHub Pages-এ প্রকাশ করে পুশ করে
hexo s
#অথবা hexo server, স্থানীয়ভাবে ডিপ্লয় করে পরীক্ষা করে
hexo clean
# স্ট্যাটিক ওয়েবপেজের ক্যাশে পরিষ্কার করে, তারপর hexo d পুনরায় জেনারেট করে
