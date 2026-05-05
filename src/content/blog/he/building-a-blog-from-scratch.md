---
title: מדריך תמציתי להקמת בלוג Hexo מאפס (מהדורת 2024)
date: 2024-04-11 00:25:20
tags: בניית בלוג
categories: התעסקות יומיומית
---
האם נמאס לך מממשקי הבלוגים חסרי היופי? נמאס לך מההתראות הבלתי פוסקות מאתרי בלוגים? האם תמיד רצית להקים בלוג משלך, אבל נרתעת ממדריכים מסובכים וקוד מבלבל? אם כך, מזל טוב! המאמר הזה נועד ללמד אותך צעד אחר צעד, ובצורה הפשוטה ביותר, איך להקים בלוג משלך. כל מה שצריך זה קצת סבלנות ולעקוב אחרי ההוראות.

<!--more-->

Hexo, כפלטפורמת בלוגים מהירה, נקייה ויעילה, היא ממש ברכה למתחילים, ו-GitHub חוסכת מאיתנו את הטרחה של שכירה ופריסת שרתים נוספים. לכן, במדריך זה נשתמש ב-Hexo וב-GitHub כדי להקים את הבלוג.

בעבר, בשנת 2018, כתבתי [מדריך תמציתי להקמת בלוג מאפס](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). מכיוון שחלו עדכונים בתוספים, ישנם כמה פרטים שדורשים שינוי, ולכן אני משיק מחדש את המדריך התמציתי במהדורת 2024.

### הכנות מקדימות

*   הורד והתקן את node.js ([הורדה והתקנה מהאתר הרשמי](https://nodejs.org/en/))
*   הורד והתקן את git ([הורדה והתקנה מהאתר הרשמי](https://git-scm.com/downloads))

### הקמת בלוג סטטי של Hexo באופן מקומי

*   התקן את פלטפורמת Hexo: פתח את ה-CMD והפעל:

 ```bash
 $ npm install -g hexo-cli
 ```

*   צור תיקייה חדשה, לדוגמה MyBlog, היכנס אליה, לחץ קליק ימני והפעל את git, הקלד:

 ```bash
 $ hexo init
 ```

*   לאחר יצירת תבנית Hexo, התקן את npm, הפעל:

 ```bash
$ npm install
 ```

כן, החלק העיקרי של הבלוג כבר הושלם בשלב זה. בואו נראה את התוצאות. הפעל:

```bash
$ hexo server
```

כעת, פתח את הדפדפן והקלד localhost:4000 כדי לראות את מראה הבלוג הנוכחי. התרגשו קצת, ואז לחצו על Ctrl + C כדי להמשיך בפעולות הבאות.

### התאמה אישית (ראשונית)

#### החלפת תבנית עיצוב

*   הורד תבנית עיצוב חדשה (לדוגמה, [תבנית NexT](http://theme-next.iissnan.com/)), והפעל בספריית השורש:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   פתח את הקובץ `_config.yml` בספריית השורש, ושנה את השדה `theme` ל:

 ```bash
theme: next
 ```

*   בחירת מראה: פתח את `themes/next/_config.yml`, מצא את השדה `scheme` (ניתן להשתמש בקיצור Ctrl + F לחיפוש מהיר). NexT מציעה שלושה מראות שונים, תוכלו לבחור את המראה המועדף עליכם ולהסיר את תו ה-# מאחד מהם (שני הקבצים העיקריים שתצטרכו לערוך בהמשך הם: _קובץ התצורה של האתר_ ו_קובץ התצורה של התבנית_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   כדי לראות את התוצאה, ניתן להפעיל את הפקודות הבאות (ניתן לחזור על שלב זה בכל פעם שרוצים לראות את התוצאה):

```bash
hexo g #או hexo generate
hexo server
```

#### תצורת האתר

*   פתח את קובץ התצורה של האתר `_config.yml` בספריית השורש באמצעות עורך טקסט (ב-Windows, אל תשתמשו ב-Notepad לעריכה, כותרות בעברית עלולות להופיע כג'יבריש). שנו את השדה `Site`, ושימו לב שיש רווח אחרי הנקודתיים:

 ```bash
 # Site
 title: 未知的世界                //שם הבלוג
 subtitle:
 description:  Do something cool //חתימה קצרה
 author: LulalaP                 //מחבר
 language: zh-Hans               //שפת האתר
 timezone:
 ```

### הגדרת תמונת פרופיל בסרגל הצד

*   בתוך התיקייה `/source`, צור תיקייה חדשה בשם `uploads`. העלה לתוכה את תמונת הפרופיל שלך (לדוגמה: avatar.jpg).

*   פתח את `/themes/next/_config.yml`, מצא את השדה `avatar` ושנה אותו ל:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### השלמת עמודי הבלוג

#### הוספת תפריטים
*   פתח את `/themes/next/_config.yml`, והסר את ההערה (ה-#) מפריטי התפריט שברצונך להוסיף בשדה `menu`. אם ברצונך להוסיף פריטים נוספים, תוכל לעשות זאת לפי הצורך (שים לב להזחה של השדות):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### יצירת עמוד קטגוריות

*   צור עמוד חדש בשם `categories` באמצעות הפקודה הבאה:

 ```bash
 $ hexo new page categories
 ```

*   ערוך את העמוד שנוצר זה עתה, `/source/categories/index.md`, והגדר את סוג העמוד כ-`categories`. התבנית תציג אוטומטית את כל הקטגוריות בעמוד זה (שים לב לשמור על רווח אחרי הנקודתיים).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### יצירת עמוד ענן תגיות

*   צור עמוד חדש בשם `tags` באמצעות הפקודה הבאה:

 ```bash
 $ hexo new page "tags"
 ```

*   ערוך את העמוד שנוצר זה עתה, והגדר את סוג העמוד כ-`tags`. התבנית תציג אוטומטית את ענן התגיות בעמוד זה.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### יצירת עמוד "אודותיי"

 *   צור עמוד "about" חדש:

 ```bash
 $ hexo new page "about"
 ```

 *   ערוך את העמוד שנוצר זה עתה. תוכל לכתוב את המידע בגוף העמוד בפורמט Markdown.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### הגדרת קישורים חברתיים בסרגל הצד

*   ערוך את קובץ `_config.yml` של האתר, מצא את השדה `social`, והוסף את שמות האתרים החברתיים וכתובותיהם. הפורמט של מפתח-ערך הוא `שם תצוגה: כתובת קישור`, לדוגמה:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   פתח את `/themes/next/_config.yml`, ובשדה `social_icons` הוסף את שמות האתרים החברתיים (שים לב לאותיות רישיות/קטנות) ואת (האייקונים)[http://fontawesome.io/icons/]. האפשרות `enable` שולטת אם להציג את האייקונים; ניתן להגדיר אותה ל-`false` כדי להסיר אותם. לדוגמה:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### קישור הבלוג ל-GitHub

 *   הרשמה לחשבון GitHub: אם עדיין אין לך חשבון GitHub, עליך להירשם תחילה.

 *   ב-GitHub, צור פרויקט בשם `XXX.github.io`, כאשר XXX הוא שם המשתמש שלך ב-GitHub.

 *   פתח את קובץ התצורה `_config.yml` בתיקיית הפרויקט `MyBlog` המקומית שלך, ושנה את השדה `type` ל-`git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   הפעל:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   צור קבצים סטטיים באופן מקומי, ודחוף אותם ל-GitHub, הפעל:

```bash
hexo g
hexo d
```

בשלב זה, פתח את הדפדפן וגלוש לכתובת http://your-name.github.io. מזל טוב, הבלוג שלך הושלם.

### קישור דומיין

הבלוג הושלם במלואו עד כה, וניתן לגשת אליו באמצעות הדומיין של GitHub. כעת, יהיה מושלם לקשר דומיין קצר יותר לבלוג זה.

#### רכישת דומיין

*   רכוש דומיין. מומלץ לרכוש ב-[namesilo.com](https://www.namesilo.com/), ספק דומיינים ותיק עם מחירים תחרותיים ושירות אמין. אם תשתמש בקוד ההמלצה שלי `PhiloArt.io`, תוכל לקבל הנחה של 1 דולר, בתוקף עד 31-12-2025.

### הגדרת DNS לדומיין

*   הגדרות DNS אצל ספק הדומיינים שלך

*   הוסף 4 רשומות A, שיצביעו על GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   הוסף רשומת `CNAME`, כאשר `name` יהיה `www`, ו-`content` יהיה `your-name.github.io` (מצביע על כתובת ה-GitHub Pages שלך):

 > CNAME —> philo-li.github.io

*   להגדרות מפורטות יותר, עיין ב-[תיעוד GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   הוספת קובץ CNAME לספריית הבלוג

 לאחר הגדרת ה-DNS לדומיין, היכנס לספריית הבלוג, ובתוך התיקייה `source` צור קובץ בשם `CNAME` (שים לב לאותיות רישיות, ללא סיומת). פתח אותו באמצעות עורך טקסט וכתוב בו את הדומיין שרכשת, לדוגמה: `www.philoli.com`

*   הפעל:

```bash
hexo g
hexo d
```

כעת, פתח את הדפדפן, הקלד את הדומיין, לחץ אנטר, ומזל טוב – יש לך כעת בלוג עם דומיין עצמאי משלך.

### פרסום מאמרים חדשים

*   בספריית השורש של הבלוג, בצע: `hexo new “המאמר הראשון שלי”`. פעולה זו תיצור קובץ `.md` בתיקייה `source/_posts`.

*   ערוך את הקובץ ושנה את השדות ההתחלתיים ל:

 ```bash
 title כותרת המאמר
 date תאריך יצירה (תאריך יצירת הקובץ)
 updated תאריך עדכון (תאריך עדכון הקובץ)
 comments האם להפעיל תגובות true
 tags תגיות
 categories קטגוריות
 permalink שם ב-URL (שם הקובץ)
 ```

*   כתוב את תוכן המאמר (בהתאם לכללי Markdown)

*   צור קבצים סטטיים באופן מקומי, ודחוף אותם ל-GitHub, הפעל:

```bash
hexo g
hexo d
```

### התאמה אישית (מתקדמת)

להלן כמה הגדרות מתקדמות להתאמה אישית של מראה הבלוג. מתחילים יכולים לדלג על חלק זה בשלב זה.

#### הוספת RSS

 *   התקן את התוסף בספריית השורש:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   בסוף הקובץ `_config.yml` שבספריית השורש, הוסף: (**_שים לב להוסיף רווח אחרי הנקודתיים, אחרת תתרחש שגיאה!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   פתח את `/themes/next/_config.yml`, ושנה את `rss` (שים לב להוסיף רווח אחרי הנקודתיים):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### קיטוע מאמרים בעמוד הבית
 *   בכל פעם שאתה כותב מאמר, פשוט הוסף את השורה הבאה בקובץ ה-.md של המאמר במקום שבו ברצונך לקטוע את הטקסט:

 ```markdown
     <!--more-->
 ```

 *   פתח את `/themes/next/_config.yml`, ושנה את האפשרות `scroll_to_more` ל-`false`.

#### יישור ציטוטים בתוך מאמרים למרכז העמוד
*   אופטימיזציה של סגנון ברירת המחדל של ציטוטי Markdown

```markdown
{% centerquote %}
ציטוט הטקסט
{% endcenterquote %}
```

{% centerquote %}
ציטוט הטקסט
{% endcenterquote %}

#### שינוי סגנון בלוק קוד

*   ערוך את `/themes/next/_config.yml`, ושנה את תצורת `codeblock` באופן הבא:

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

#### הגדרת שנת הקמת האתר

 *   ערוך את קובץ `_config.yml` של האתר, והוסף את השדה `since`.

```bash
since: 2024
```

#### שיפור סגנון קישורי מאמרים

*   ערוך את הקובץ `themes\next\source\css\_common\components\post\post.styl`, והוסף את סגנון ה-CSS הבא בסופו:

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

#### הוספת תמונת רקע לבלוג
*   בתיקייה `source` שבספריית השורש, צור תיקייה בשם `_data`. צור קובץ `styles.styl` חדש, פתח את הקובץ שנוצר זה עתה `source/_data/styles.styl`, והוסף את התוכן הבא:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //האם התמונה תחזור על עצמה ובאיזו צורה, אם אינה ממלאת את כל המסך
    background-attachment:fixed;    //האם התמונה תזוז עם הגלילה
    background-size: cover;         //כיסוי מלא
    background-position:50% 50%;    //מיקום התמונה
}
```
*   ה-URL יכול להיות קישור לתמונה, או נתיב לתיקיית תמונות. ניתן לשנות את שם התמונה ל-`background.jpg`, ולהניח אותה בתיקייה `source/uploads`.

#### הגדרת שקיפות לרקע תוכן הבלוג
*   פתח את הקובץ `source/_data/styles.styl` שנערך בשלב הקודם, והוסף את התוכן הבא מתחת:

```css

//שקיפות תוכן הבלוג
//הגדרת שקיפות תוכן המאמרים
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


//הגדרת שקיפות סרגל הצד
.sidebar {
  opacity: 0.9;
}

//הגדרת שקיפות סרגל התפריטים
.header-inner {
  background: rgba(255,255,255,0.9);
}

//הגדרת שקיפות תיבת החיפוש (local-search)
.popup {
  opacity: 0.9;
}
```

#### אופטימיזציה של סגנון בלוקי קוד בתוך שורות
*   פתח את הקובץ `source/_data/styles.styl` שנערך בשלב הקודם, והוסף את התוכן הבא מתחת:

```css
// ייפוי תגי קוד
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### הוספת מונה מבקרים לתחתית האתר

*   ערוך את הקובץ:

```css
# מצא את תגית copyright, ואז הוסף קוד בתוך התגית

<div class="copyright">
# ......כאן כבר יש כמה הגדרות
# הוסף כאן את הקוד החדש
</div>

# לאחר ההוספה זה ייראה כך:
<div class="copyright">
  # ......כאן כבר יש כמה הגדרות
  # הוסף כאן את הקוד החדש
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   צור מחדש תצוגה מקדימה כדי לאשר את השינויים, ולאחר אישור שאין בעיות, פרסם:

```bash
hexo g
hexo s
# לאחר אישור שאין בעיות, פרסם
hexo d
```

#### הוספת קובץ README.md למאגר

בדרך כלל, לכל פרויקט יש קובץ `README.md`. אך כאשר Hexo נפרס למאגר, קובץ ה-`README.md` שבפרויקט יידרס. לכן, יש להגדיר את קובץ התצורה כדי למנוע דריסה.

בספריית השורש `source` שבתקיית `Hexo`, הוסף קובץ `README.md`. שנה את קובץ התצורה של האתר `_config.yml`, והגדר את הערך של הפרמטר `skip_render` ל:

```yml
skip_render: README.md
```
שמור וצא. בפעם הבאה שתשתמש בפקודה `hexo d` לפריסת הבלוג, קובץ ה-`README.md` לא יעובד.

#### מספר תוספים שימושיים

- Hexo Filter MathJax: לעיבוד נוסחאות מתמטיות
  - התקנה: `npm install hexo-filter-mathjax`
  - תצורה מפורטת: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: ספירת מילים במאמרים
  - התקנה: `npm install hexo-word-counter`
  - תצורה מפורטת: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: אופטימיזציה של מהירות טעינת הבלוג
  - התקנה: `npm install hexo-optimize`
  - תצורה מפורטת: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- תוספים נוספים: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### גיבוי קבצי המקור

- חיוני לגבות היטב את קבצי המקור המקומיים, במיוחד את קבצי ה-Markdown. אם תצורות אחרות יאבדו, לא תוכל לכתוב בבלוג כרגיל ותצטרך להגדיר הכל מההתחלה.
- מומלץ להשתמש באותו מאגר GitHub לגיבוי.
- מומלץ לגבות בכל פעם שמבצעים שינויים, או לגבות מדי יום.
- לשימושים נוספים, עיין ב-[תיעוד Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# הוסף את כתובת מאגר הבלוג שהוגדרה קודם
git remote add https://github.com/your-name/your-name.github.io.git

# הוסף ושמור את השינויים הנוכחיים, ותעד הערה
git add .
git commit -m "עדכון קבצי מקור"

# צור ועבור לענף חדש
git checkout -b source

# דחוף את כל התוכן של ענף source המקומי לענף source במאגר המרוחק
git push origin source:source
```

### כתיבת בלוג ממחשבים שונים
- כאשר כותבים בלוג ממחשבים שונים, יש להתקין תוכנות בסיסיות, ואז למשוך את מאגר הגיבוי המרוחק מ-GitHub למחשב המקומי כדי לעדכן את הבלוג.

*   הורד והתקן את node.js ([הורדה והתקנה מהאתר הרשמי](https://nodejs.org/en/))
*   הורד והתקן את git ([הורדה והתקנה מהאתר הרשמי](https://git-scm.com/downloads))
*   התקן את פלטפורמת Hexo: פתח את ה-CMD והפעל:

 ```bash
 npm install -g hexo-cli
```
*   בצע עדכונים מקומיים:

```bash
# שכפל את המאגר למחשב המקומי
git clone https://github.com/your-name/your-name.github.io.git

# אם כבר שכפלת באופן מקומי, עליך למשוך את תוכן הענף העדכני ביותר לפני כל עדכון בלוג
git pull origin

# עבור לענף המתאים
git checkout source

# התקן את כל התוספים תחת תצורת Hexo ולאחר מכן תוכל להתחיל לעדכן ולערוך את תוכן הבלוג
npm install

# לאחר שינוי התוכן, זכור לגבות במהירות הכל
git add .
git commit -m "עדכון בלוג xxx"
git push origin source:source

# פרסם ודחוף את תוכן הבלוג העדכני ביותר לאתר הדומיין
hexo clean
hexo g  # צור קבצים סטטיים
hexo s  # הצג תצוגה מקדימה של הבלוג באופן מקומי
hexo d  # פרסם את תוכן הבלוג העדכני ביותר
```

### סיכום פקודות נפוצות

 ```bash
hexo g
#או hexo generate, צור דפי אינטרנט סטטיים מקבצי המקור
hexo d
#או hexo deploy, פרסם ודחוף ל-GitHub Pages
hexo s
#או hexo server, פרוס ובדוק באופן מקומי
hexo clean
# נקה את מטמון דפי האינטרנט הסטטיים, ואז hexo d כדי ליצור מחדש
