---
title: शून्य से Hexo ब्लॉग बनाने की सरल गाइड (2024 संस्करण)
date: 2024-04-11 00:25:20
tags: ब्लॉग搭建
categories: 日常折腾
---
क्या आप उन बेजान और नीरस ब्लॉग वेबसाइटों के इंटरफेस से पहले ही ऊब चुके हैं? क्या आप अंतहीन वेबसाइट नोटिफिकेशन्स से तंग आ चुके हैं? क्या आप लंबे समय से अपना खुद का ब्लॉग बनाना चाहते थे, लेकिन जटिल ट्यूटोरियल और सिरदर्द देने वाले कोड देखकर रुक गए थे? अगर ऐसा है, तो बधाई हो! यह लेख आपको सबसे आसान तरीके से अपना खुद का ब्लॉग बनाना सिखाएगा। आपको बस थोड़ा धैर्य रखना है और दिए गए चरणों का एक-एक करके पालन करना है।

<!--more-->

Hexo एक तेज़, स्वच्छ और कुशल ब्लॉग फ्रेमवर्क है, जो शुरुआती लोगों के लिए किसी वरदान से कम नहीं है। और GitHub हमें सर्वर किराए पर लेने और उसे डिप्लॉय करने की अतिरिक्त परेशानी से बचाता है। इसलिए, यह लेख Hexo और GitHub का उपयोग करके एक ब्लॉग बनाने पर केंद्रित होगा।

मैंने 2018 में [शून्य से ब्लॉग बनाने की एक सरल गाइड](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) लिखी थी। प्लगइन अपडेट के कारण कुछ विवरणों में बदलाव की ज़रूरत है, इसलिए अब मैं 2024 का यह संक्षिप्त ट्यूटोरियल फिर से पेश कर रहा हूँ।

### तैयारी

*   Node.js डाउनलोड और इंस्टॉल करें ([आधिकारिक वेबसाइट से डाउनलोड करें](https://nodejs.org/en/))
*   Git डाउनलोड और इंस्टॉल करें ([आधिकारिक वेबसाइट से डाउनलोड करें](https://git-scm.com/downloads))

### लोकल Hexo स्टैटिक ब्लॉग सेटअप करें

*   Hexo फ्रेमवर्क इंस्टॉल करें: CMD खोलें और चलाएं:
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   एक नया फोल्डर बनाएं, जैसे MyBlog, उस फोल्डर में जाएं, राइट-क्लिक करें और Git चलाएं, फिर टाइप करें:

 ```bash
 $ hexo init
 ```

*   Hexo टेम्पलेट जनरेट होने के बाद, npm इंस्टॉल करें और चलाएं:

 ```bash
$ npm install
 ```

बिल्कुल सही! आपके ब्लॉग का मुख्य भाग अब पूरा हो चुका है। चलिए, इसका असर देखते हैं। चलाएं:

```bash
$ hexo server
```

अब ब्राउज़र खोलें और `localhost:4000` टाइप करें। आपको अपने ब्लॉग का वर्तमान रूप दिखाई देगा। थोड़ा उत्साहित महसूस करें, फिर नीचे की कार्यवाही जारी रखने के लिए Ctrl + C दबाएं।

### वैयक्तिकरण सेटिंग्स (प्रारंभिक)

#### थीम बदलें

*   एक नई थीम डाउनलोड करें ([NexT थीम](http://theme-next.iissnan.com/) का उदाहरण लेते हुए), रूट डायरेक्टरी में चलाएं:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   रूट डायरेक्टरी में `_config.yml` फ़ाइल खोलें, `theme` फ़ील्ड को इसमें बदलें:

 ```bash
theme: next
 ```

*   रूप-रंग चुनें: `/themes/next/_config.yml` खोलें, `scheme` फ़ील्ड ढूंढें (आप Ctrl + F का उपयोग करके तेज़ी से खोज सकते हैं)। NexT तीन अलग-अलग रूप-रंग प्रदान करता है; आप अपनी पसंद का एक चुन सकते हैं और उसमें से एक के `#` चिह्न को हटा सकते हैं (आगे चलकर, आपको मुख्य रूप से इन्हीं दो फ़ाइलों में बदलाव करने होंगे: _साइट कॉन्फ़िगरेशन फ़ाइल_ और _थीम कॉन्फ़िगरेशन फ़ाइल_)।

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   प्रभाव देखने के लिए, आप निम्न कमांड चला सकते हैं (आप हर बार प्रभाव देखने के लिए इस चरण को दोहरा सकते हैं):

```bash
hexo g #या hexo generate
hexo server
```

#### साइट कॉन्फ़िगरेशन

*   एडिटर का उपयोग करके रूट डायरेक्टरी में साइट कॉन्फ़िगरेशन फ़ाइल `_config.yml` खोलें (विंडोज में नोटपैड का उपयोग करके संपादित न करें, क्योंकि चीनी शीर्षक विकृत हो सकते हैं), `Site` फ़ील्ड को संशोधित करें। ध्यान दें कि कोलन के बाद एक स्पेस होना चाहिए:

 ```bash
 # Site
 title: अज्ञात दुनिया                //ब्लॉग का नाम
 subtitle:
 description:  Do something cool //एक टैगलाइन
 author: LulalaP                 //लेखक
 language: zh-Hans               //वेबसाइट की भाषा
 timezone:
 ```

### साइडबार अवतार सेट करें

*   `/source` में एक नया फ़ोल्डर बनाएं और उसका नाम `uploads` रखें। अपनी अवतार छवि (जैसे: avatar.jpg) को इस फ़ोल्डर में डालें।

*   `/themes/next/_config.yml` खोलें, `avatar` फ़ील्ड ढूंढें और इसे इसमें बदलें:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### ब्लॉग पेज को बेहतर बनाएं

#### मेन्यू जोड़ें
*   `/themes/next/_config.yml` खोलें, और `menu` फ़ील्ड में उन मेन्यू आइटमों के सामने से कमेंट हटा दें जिन्हें आप जोड़ना चाहते हैं। यदि आपको अन्य मेन्यू जोड़ने की आवश्यकता है, तो आप उन्हें अपनी ज़रूरत के अनुसार जोड़ सकते हैं (फ़ील्ड के इंडेंटेशन पर ध्यान दें):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### कैटेगरी पेज बनाएं

*   एक नया पेज बनाएं, जिसका नाम `categories` हो, कमांड इस प्रकार है:

 ```bash
 $ hexo new page categories
 ```

*   अभी बनाए गए पेज `/source/categories/index.md` को संपादित करें, और पेज के प्रकार को `categories` पर सेट करें। थीम स्वचालित रूप से इस पेज पर सभी कैटेगरियां दिखाएगी (कोलन के बाद स्पेस छोड़ना याद रखें)।

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### टैग क्लाउड इंटरफ़ेस बनाएं

*   एक नया पेज बनाएं, जिसका नाम `tags` हो, कमांड इस प्रकार है:

 ```bash
 $ hexo new page "tags"
 ```

*   अभी बनाए गए पेज को संपादित करें, और पेज के प्रकार को `tags` पर सेट करें। थीम स्वचालित रूप से इस पेज पर टैग क्लाउड दिखाएगी।

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "मेरे बारे में" पेज बनाएं

 *   एक नया 'about' पेज बनाएं:

 ```bash
 $ hexo new page "about"
 ```

 *   अभी बनाए गए पेज को संपादित करें, और मुख्य भाग में मार्कडाउन प्रारूप में जानकारी लिख सकते हैं।
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### साइडबार सोशल लिंक सेट करें

*   अपनी साइट की `_config.yml` फ़ाइल संपादित करें, `social` फ़ील्ड ढूंढें, और फिर सोशल साइट का नाम और पता जोड़ें। कुंजी-मान प्रारूप `प्रदर्शित नाम: लिंक पता` है, उदाहरण के लिए:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   `/themes/next/_config.yml` खोलें, `social_icons` फ़ील्ड के तहत सोशल साइट का नाम (केस-संवेदनशीलता पर ध्यान दें) और (आइकन)[http://fontawesome.io/icons/] जोड़ें। `enable` विकल्प आइकन दिखाने या न दिखाने को नियंत्रित करता है; आप आइकनों को हटाने के लिए इसे `false` पर सेट कर सकते हैं। उदाहरण के लिए:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### ब्लॉग को GitHub से लिंक करें

*   GitHub अकाउंट रजिस्टर करें: यदि आपके पास अभी तक GitHub अकाउंट नहीं है, तो आपको पहले एक रजिस्टर करना होगा।

*   GitHub पर `XXX.github.io` नाम का एक प्रोजेक्ट बनाएं, जहाँ `XXX` आपका GitHub यूज़रनेम होगा।

*   अपने लोकल `MyBlog` फोल्डर प्रोजेक्ट के भीतर `_config.yml` कॉन्फ़िगरेशन फ़ाइल खोलें, और इसमें `type` को `git` पर सेट करें:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

*   चलाएं:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
*   स्थिर फ़ाइलें लोकल रूप से जनरेट करें, और फिर उन्हें GitHub पर पुश करें, चलाएं:

```bash
hexo g
hexo d
```

अब, ब्राउज़र खोलें और `http://your-name.github.io` पर जाएं। बधाई हो, आपका ब्लॉग अब पूरी तरह से तैयार है!

### डोमेन बाइंड करें

अब तक, ब्लॉग पूरी तरह से बन चुका है और GitHub के डोमेन के माध्यम से भी इसे एक्सेस किया जा सकता है। ऐसे में, इस ब्लॉग को एक छोटे डोमेन से जोड़ना इसे और भी बेहतर बना देगा।

#### डोमेन खरीदें

*   एक डोमेन खरीदें; [namesilo.com](https://www.namesilo.com/) से खरीदने की सलाह दी जाती है। यह एक पुरानी और भरोसेमंद डोमेन प्रदाता कंपनी है, जो किफ़ायती दामों पर विश्वसनीय सेवाएँ देती है। यदि आप मेरे रेफरल कोड `PhiloArt.io` का उपयोग करते हैं, तो आपको $1 की छूट भी मिल सकती है, जो 31-12-2025 तक वैध है।

### डोमेन रिज़ॉल्यूशन

*   डोमेन प्रदाता DNS सेटिंग्स

*   GitHub पेजेस को इंगित करने के लिए 4 A रिकॉर्ड जोड़ें:

    > 185.199.108.153
    > 185.199.109.153
    > 185.199.110.153
    > 185.199.111.153

*   एक `CNAME` रिकॉर्ड जोड़ें, जिसमें `name` `www` हो और `content` `your-name.github.io` हो (आपके GitHub पेजेस के पते की ओर इंगित करता है):

    > CNAME —> philo-li.github.io

*   अधिक विस्तृत सेटिंग्स के लिए, कृपया [GitHub Pages डॉक्स](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) देखें।

*   ब्लॉग डायरेक्टरी में CNAME फ़ाइल जोड़ें

    डोमेन रिज़ॉल्यूशन कॉन्फ़िगर करने के बाद, ब्लॉग डायरेक्टरी में जाएं, `source` डायरेक्टरी के तहत `CNAME` नाम की एक नई फ़ाइल बनाएं (ध्यान दें कि यह बड़े अक्षरों में होनी चाहिए और इसका कोई एक्सटेंशन नहीं होना चाहिए)। इसे नोटपैड से खोलें और खरीदे गए डोमेन को इसमें लिखें, जैसे: `www.philoli.com`

*   चलाएं:

```bash
hexo g
hexo d
```

अब ब्राउज़र खोलें, डोमेन दर्ज करें, और एंटर दबाएं। बधाई हो, अब आपके पास अपना स्वतंत्र डोमेन वाला एक ब्लॉग है!

### नया लेख प्रकाशित करें

*   ब्लॉग रूट डायरेक्टरी में चलाएं: `hexo new “मेरी पहली पोस्ट”`। यह `source/_posts` फोल्डर में एक `.md` फ़ाइल बनाएगा।

*   इस फ़ाइल को संपादित करें, शुरुआती फ़ील्ड्स को इस प्रकार बदलें:

 ```bash
 title लेख का शीर्षक
 date निर्माण तिथि (फ़ाइल की निर्माण तिथि)
 updated संशोधन तिथि (फ़ाइल की संशोधन तिथि)
 comments क्या टिप्पणियां चालू करनी हैं true
 tags टैग
 categories श्रेणियां
 permalink URL में नाम (फ़ाइल नाम)
 ```

*   मुख्य सामग्री लिखें (मार्कडाउन नियमों का पालन करते हुए)।

*   स्थिर फ़ाइलें लोकल रूप से जनरेट करें, और फिर उन्हें GitHub पर पुश करें, चलाएं:

```bash
hexo g
hexo d
```

### वैयक्तिकरण सेटिंग्स (उन्नत)

नीचे कुछ उन्नत वैयक्तिकृत ब्लॉग स्टाइल सेटिंग्स दी गई हैं; शुरुआती लोग इन्हें अभी छोड़ सकते हैं।

#### RSS जोड़ें

*   रूट डायरेक्टरी में प्लगइन इंस्टॉल करें:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

*   रूट डायरेक्टरी में `_config.yml` के अंत में जोड़ें: (**_कृपया ध्यान दें कि कोलन के बाद एक स्पेस होना चाहिए, अन्यथा त्रुटि होगी!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

*   `/themes/next/_config.yml` खोलें, `rss` को संशोधित करें (कोलन के बाद एक स्पेस पर ध्यान दें):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### होमपेज पोस्ट ट्रंकेशन
*   हर बार जब आप कोई लेख लिखते हैं, तो आपको केवल `<!--more-->` को उस जगह जोड़ना होगा जहाँ आप `post.md` फ़ाइल में लेख को छोटा करना चाहते हैं।

 ```markdown
     <!--more-->
 ```

*   `/themes/next/_config.yml` खोलें, `scroll_to_more` विकल्प को `false` पर सेट करें।

#### लेख में उद्धृत पाठ को केंद्र में करें
*   मार्कडाउन के डिफ़ॉल्ट उद्धरण स्टाइल को ऑप्टिमाइज़ किया गया है।

```markdown
{% centerquote %}
उद्धृत पाठ
{% endcenterquote %}
```

{% centerquote %}
उद्धृत पाठ
{% endcenterquote %}

#### कोड ब्लॉक स्टाइल संशोधित करें

*   `/themes/next/_config.yml` संपादित करें, `codeblock` कॉन्फ़िगरेशन को इस प्रकार संशोधित करें:

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

#### साइट निर्माण समय सेट करें

*   साइट की `_config.yml` फ़ाइल संपादित करें, `since` फ़ील्ड जोड़ें।

```bash
since: 2024
```

#### लेख लिंक स्टाइल में सुधार करें

*   `themes\next\source\css\_common\components\post\post.styl` फ़ाइल को संपादित और संशोधित करें, अंत में निम्न CSS स्टाइल जोड़ें:

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

#### ब्लॉग में बैकग्राउंड इमेज जोड़ें
*   रूट डायरेक्टरी के `source` फ़ोल्डर के तहत `_data` फ़ोल्डर बनाएं, `styles.styl` नाम की एक नई फ़ाइल बनाएं, नई बनाई गई फ़ाइल `source/_data/styles.styl` खोलें, और निम्न सामग्री जोड़ें:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //यदि छवि पूरी तरह से न भरे, तो क्या दोहराया जाए और कैसे
    background-attachment:fixed;    //क्या छवि स्क्रॉलिंग के साथ चले
    background-size: cover;         //कवर करें
    background-position:50% 50%;    //छवि की स्थिति
}
```
*   URL में छवि लिंक या छवि डायरेक्टरी हो सकती है। आप छवि का नाम `background.jpg` रख सकते हैं और इसे `source/uploads` फ़ोल्डर में डाल सकते हैं।

#### ब्लॉग सामग्री पृष्ठभूमि को पारदर्शी सेट करें
*   पिछले चरण में संपादित की गई फ़ाइल `source/_data/styles.styl` खोलें, और इसके नीचे निम्न सामग्री जोड़ना जारी रखें:

```css

//ब्लॉग सामग्री को पारदर्शी बनाएं
//लेख सामग्री की पारदर्शिता सेटिंग
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


//साइडबार की पारदर्शिता सेटिंग
.sidebar {
  opacity: 0.9;
}

//मेन्यू बार की पारदर्शिता सेटिंग
.header-inner {
  background: rgba(255,255,255,0.9);
}

//सर्च बॉक्स (local-search) की पारदर्शिता सेटिंग
.popup {
  opacity: 0.9;
}
```

#### इनलाइन कोड ब्लॉक के स्टाइल को ऑप्टिमाइज़ करें
*   पिछले चरण में संपादित की गई फ़ाइल `source/_data/styles.styl` खोलें, और इसके नीचे निम्न सामग्री जोड़ना जारी रखें:

```css
// कोड टैग्स के लिए सुंदरता
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### वेबसाइट के निचले भाग में विज़िटर संख्या जोड़ें

*   फ़ाइल संपादित और संशोधित करें:

```css
# copyright टैग बार ढूंढें, और फिर टैग के अंदर कोड जोड़ें

<div class="copyright">
# ......यहां पहले से ही कुछ कॉन्फ़िगरेशन हैं
# यहां नया कोड जोड़ें
</div>

# जोड़ने के बाद ऐसा दिखेगा:
<div class="copyright">
  # ......यहां पहले से ही कुछ कॉन्फ़िगरेशन हैं
  # यहां नया कोड जोड़ें
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   संशोधित प्रभावों का पूर्वावलोकन फिर से जनरेट करें, पुष्टि करें कि कोई समस्या नहीं है, फिर प्रकाशित करें।

```bash
hexo g
hexo s
# पुष्टि करें कि कोई समस्या नहीं है, फिर प्रकाशित करें
hexo d
```

#### रिपॉजिटरी में README.md फ़ाइल जोड़ें

आमतौर पर हर प्रोजेक्ट में एक `README.md` फ़ाइल होती है, लेकिन जब Hexo का उपयोग करके रिपॉजिटरी में डिप्लॉय किया जाता है, तो प्रोजेक्ट की `README.md` फ़ाइल ओवरराइट हो जाती है। इसलिए, ओवरराइटिंग से बचने के लिए कॉन्फ़िगरेशन फ़ाइल सेट करना आवश्यक है।

`Hexo` डायरेक्टरी के `source` रूट डायरेक्टरी में एक `README.md` फ़ाइल जोड़ें, साइट कॉन्फ़िगरेशन फ़ाइल `_config.yml` को संशोधित करें, `skip_render` पैरामीटर का मान सेट करें:

```yml
skip_render: README.md
```
सेव करें और बाहर निकलें। अगली बार जब आप ब्लॉग को डिप्लॉय करने के लिए `hexo d` कमांड का उपयोग करेंगे, तो `README.md` फ़ाइल रेंडर नहीं होगी।

#### कुछ उपयोगी प्लगइन्स

-   Hexo Filter MathJax: गणितीय सूत्रों को रेंडर करता है
    -   इंस्टॉल करें `npm install hexo-filter-mathjax`
    -   विस्तृत कॉन्फ़िगरेशन: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: लेख शब्द गणना
    -   इंस्टॉल करें `npm install hexo-word-counter`
    -   विस्तृत कॉन्फ़िगरेशन: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: ब्लॉग लोडिंग स्पीड को ऑप्टिमाइज़ करता है
    -   इंस्टॉल करें `npm install hexo-optimize`
    -   विस्तृत कॉन्फ़िगरेशन: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   अधिक प्लगइन्स: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### सोर्स फ़ाइलें बैकअप करें

-   अपने लोकल सोर्स फ़ाइलों का बैकअप लेना न भूलें, ख़ासकर मार्कडाउन फ़ाइलों का। यदि अन्य कॉन्फ़िगरेशन खो जाते हैं, तो आप ठीक से ब्लॉग नहीं लिख पाएंगे और आपको सब कुछ फिर से शुरू से सेट करना होगा।
-   उसी GitHub रिपॉजिटरी का उपयोग करके बैकअप लेने की सलाह दी जाती है।
-   सलाह दी जाती है कि हर बार कुछ बदलाव होने पर या रोज़ाना एक बार बैकअप लें।
-   अधिक उपयोग के लिए, [Git दस्तावेज़](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) देखें।

```bash
# पहले सेट किए गए ब्लॉग रिपॉजिटरी का पता जोड़ें
git remote add https://github.com/your-name/your-name.github.io.git

# वर्तमान परिवर्तनों को जोड़ें और सहेजें, और एक टिप्पणी रिकॉर्ड करें
git add .
git commit -m "सोर्स फ़ाइल अपडेट"

# एक नई शाखा बनाएं और उस पर स्विच करें
git checkout -b source

# लोकल सोर्स शाखा की पूरी सामग्री को रिमोट रिपॉजिटरी की सोर्स शाखा में पुश करें
git push origin source:source
```

### अलग-अलग कंप्यूटरों पर ब्लॉग लिखें
-   जब आप अलग-अलग कंप्यूटरों पर ब्लॉग लिखते हैं, तो आपको मूल सॉफ़्टवेयर इंस्टॉलेशन करने की आवश्यकता होती है, फिर रिमोट बैकअप GitHub रिपॉजिटरी को लोकल में खींचकर ब्लॉग को अपडेट करना होता है।

*   Node.js डाउनलोड और इंस्टॉल करें ([आधिकारिक वेबसाइट से डाउनलोड करें](https://nodejs.org/en/))
*   Git डाउनलोड और इंस्टॉल करें ([आधिकारिक वेबसाइट से डाउनलोड करें](https://git-scm.com/downloads))
*   Hexo फ्रेमवर्क इंस्टॉल करें: CMD खोलें और चलाएं:

 ```bash
 npm install -g hexo-cli
```
*   लोकल अपडेट करें:

```bash
# रिपॉजिटरी को लोकल में क्लोन करें
git clone https://github.com/your-name/your-name.github.io.git

# यदि पहले से लोकल में क्लोन किया गया है, तो हर ब्लॉग अपडेट से पहले नवीनतम शाखा सामग्री को खींचना होगा
git pull origin

# संबंधित शाखा पर स्विच करें
git checkout source

# Hexo कॉन्फ़िगरेशन के तहत सभी प्लगइन्स इंस्टॉल करने के बाद, ब्लॉग सामग्री को अपडेट करना और संपादित करना शुरू कर सकते हैं
npm install

# सामग्री संशोधित करने के बाद, इसे तुरंत बैकअप करना याद रखें
git add .
git commit -m "ब्लॉग अपडेट xxx"
git push origin source:source

# नवीनतम ब्लॉग सामग्री को डोमेन साइट पर प्रकाशित और पुश करें
hexo clean
hexo g  # स्थिर फ़ाइलें जनरेट करें
hexo s  # लोकल पूर्वावलोकन ब्लॉग प्रभाव
hexo d  # नवीनतम ब्लॉग सामग्री प्रकाशित करें
```

### कुछ सामान्य कमांड्स का सारांश

 ```bash
hexo g
# या hexo generate, सोर्स फ़ाइलों से स्थिर वेब पेज जनरेट करें
hexo d
# या hexo deploy, GitHub Pages पर प्रकाशित और पुश करें
hexo s
# या hexo server, लोकल डिप्लॉयमेंट टेस्ट करें
hexo clean
# स्थिर वेब पेज कैश साफ़ करें, फिर hexo d से फिर से जनरेट करें
