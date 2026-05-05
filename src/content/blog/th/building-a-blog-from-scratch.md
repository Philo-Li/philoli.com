---
title: คู่มือฉบับย่อ: สร้างบล็อก Hexo ตั้งแต่เริ่มต้น (เวอร์ชัน 2024)
date: 2024-04-11 00:25:20
tags: การสร้างบล็อก
categories: เรื่องราวการปรับแต่ง
---
คุณเบื่อหน่ายกับหน้าตาบล็อกที่ดูไม่สวยงาม หรือรำคาญการแจ้งเตือนที่ขึ้นมาไม่หยุดบ้างไหม? หรือคุณอยากมีบล็อกเป็นของตัวเองมานานแล้ว แต่ต้องมาติดกับคู่มือที่ซับซ้อนและโค้ดที่ชวนปวดหัวใช่หรือเปล่า? ถ้าเป็นอย่างนั้น ขอแสดงความยินดีด้วย! บทความนี้จะสอนคุณสร้างบล็อกเป็นของตัวเองแบบจับมือทำ ด้วยวิธีที่ง่ายที่สุดเท่าที่จะเป็นไปได้ เพียงแค่คุณต้องมีความอดทนเล็กน้อยและทำตามไปทีละขั้นตอนเท่านั้นเอง

<!--more-->

Hexo เป็นเฟรมเวิร์กสำหรับบล็อกที่รวดเร็ว เรียบง่าย และมีประสิทธิภาพสูง ซึ่งเรียกได้ว่าเป็นสวรรค์ของมือใหม่เลยก็ว่าได้ ยิ่งไปกว่านั้น GitHub ก็ยังช่วยให้เราไม่ต้องวุ่นวายกับการเช่าและติดตั้งเซิร์ฟเวอร์เพิ่มเติม บทความนี้จึงจะพาคุณสร้างบล็อกโดยใช้ Hexo และ GitHub เป็นหลักครับ

ในปี 2018 ผมเคยเขียนบทความ [คู่มือสร้างบล็อกแบบง่ายๆ ตั้งแต่เริ่มต้น](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) ไว้แล้วครั้งหนึ่ง แต่เนื่องจากมีการอัปเดตปลั๊กอิน ทำให้มีรายละเอียดบางส่วนที่ต้องแก้ไข ผมจึงขออัปเดตและนำเสนอคู่มือฉบับย่อปี 2024 นี้อีกครั้งครับ

### การเตรียมตัว

*   ดาวน์โหลดและติดตั้ง node.js ([ดาวน์โหลดจากเว็บไซต์ทางการ](https://nodejs.org/en/))
*   ดาวน์โหลดและติดตั้ง git ([ดาวน์โหลดจากเว็บไซต์ทางการ](https://git-scm.com/downloads))

### การสร้างบล็อก Hexo Static บนเครื่องของคุณ

*   ติดตั้งเฟรมเวิร์ก Hexo: เปิด cmd แล้วรันคำสั่ง

 ```bash
 $ npm install -g hexo-cli
 ```

*   สร้างโฟลเดอร์ใหม่ เช่น MyBlog จากนั้นเข้าไปในโฟลเดอร์ คลิกขวาแล้วเลือก Git Bash Here (หรือเปิด cmd/terminal ในโฟลเดอร์นั้น) แล้วพิมพ์คำสั่ง:

 ```bash
 $ hexo init
 ```

*   หลังจากสร้างเทมเพลต Hexo เสร็จแล้ว ให้ติดตั้ง npm โดยรันคำสั่ง:

 ```bash
$ npm install
 ```

ถูกต้องแล้วครับ! ส่วนหลักของบล็อกเสร็จสมบูรณ์แล้ว มาลองดูผลงานกันเลย รันคำสั่ง:

```bash
$ hexo server
```

ตอนนี้เปิดเบราว์เซอร์ พิมพ์ `localhost:4000` คุณก็จะเห็นหน้าตาบล็อกในปัจจุบันแล้วครับ ตื่นเต้นเล็กน้อยแล้วกด Ctrl + C เพื่อดำเนินการขั้นต่อไปได้เลย

### การตั้งค่าส่วนบุคคล (เบื้องต้น)

#### การเปลี่ยนธีม

*   ดาวน์โหลดธีมใหม่ (ยกตัวอย่างเช่น [ธีม NexT]( http://theme-next.iissnan.com/ )) โดยรันคำสั่งในไดเรกทอรีรูท (root directory):

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   เปิดไฟล์ `_config.yml` ที่อยู่ในไดเรกทอรีรูท แล้วแก้ไขช่อง `theme` เป็น:

 ```bash
theme: next
 ```

*   เลือกรูปแบบ: เปิดไฟล์ `/themes/next/_config.yml` ค้นหาช่อง `scheme` (สามารถใช้ Ctrl + F เพื่อค้นหาได้) ธีม NexT มีรูปแบบให้เลือกสามแบบ คุณสามารถเลือกแบบที่ชอบแล้วลบเครื่องหมาย # ออกจากบรรทัดนั้น (ไฟล์หลักๆ ที่เราจะแก้ไขต่อไปก็คือสองไฟล์นี้ ได้แก่ _ไฟล์คอนฟิกไซต์_ และ _ไฟล์คอนฟิกธีม_)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   ดูผลลัพธ์: สามารถรันคำสั่งต่อไปนี้ (คุณสามารถทำซ้ำขั้นตอนนี้ได้ทุกครั้งที่ต้องการดูผลลัพธ์):

```bash
hexo g #หรือ hexo generate
hexo server
```

#### การตั้งค่าไซต์

*   เปิดไฟล์คอนฟิกไซต์ `_config.yml` ที่อยู่ในไดเรกทอรีรูทด้วยโปรแกรมแก้ไขข้อความ (บน Windows ไม่ควรใช้ Notepad ในการแก้ไข เพราะอาจทำให้หัวข้อภาษาจีนแสดงผลผิดเพี้ยนได้) แก้ไขช่อง `Site` โดย **โปรดสังเกตว่าต้องมีช่องว่างหลังเครื่องหมายโคลอน**:

 ```bash
 # Site
 title: 未知的世界                //ชื่อบล็อก
 subtitle:
 description:  Do something cool //ข้อความสโลแกน
 author: LulalaP                 //ผู้เขียน
 language: zh-Hans               //ภาษาของเว็บไซต์
 timezone:
 ```

### การตั้งค่ารูปโปรไฟล์ใน Sidebar

*   สร้างโฟลเดอร์ใหม่ใน `/source` และตั้งชื่อว่า `uploads` จากนั้นนำรูปภาพโปรไฟล์ (เช่น avatar.jpg) ไปใส่ในโฟลเดอร์นั้น

*   เปิดไฟล์ `/themes/next/_config.yml` ค้นหาช่อง `avatar` และแก้ไขเป็น:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### การปรับปรุงหน้าบล็อก

#### การเพิ่มเมนู

*   เปิดไฟล์ `/themes/next/_config.yml` ลบคอมเมนต์ (เครื่องหมาย #) หน้าเมนูที่คุณต้องการเพิ่มออก หากต้องการเพิ่มเมนูอื่นๆ สามารถเพิ่มได้ตามต้องการ (โปรดสังเกตการเยื้องของช่อง):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### การสร้างหน้าหมวดหมู่ (Categories)

*   สร้างหน้าใหม่ ชื่อ `categories` โดยใช้คำสั่งดังนี้:

 ```bash
 $ hexo new page categories
 ```

*   แก้ไขหน้าที่เพิ่งสร้าง `/source/categories/index.md` กำหนดประเภทหน้าเป็น `categories` แล้วธีมจะแสดงหมวดหมู่ทั้งหมดสำหรับหน้านี้โดยอัตโนมัติ (โปรดสังเกตการเว้นวรรคหลังเครื่องหมายโคลอน)

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### การสร้างหน้ากลุ่มแท็ก (Tag Cloud)

*   สร้างหน้าใหม่ ชื่อ `tags` โดยใช้คำสั่งดังนี้:

 ```bash
 $ hexo new page "tags"
 ```

*   แก้ไขหน้าที่เพิ่งสร้าง กำหนดประเภทหน้าเป็น `tags` แล้วธีมจะแสดงกลุ่มแท็ก (tag cloud) สำหรับหน้านี้โดยอัตโนมัติ

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### การสร้างหน้า "เกี่ยวกับฉัน" (About Me)

*   สร้างหน้า About Me ใหม่:

 ```bash
 $ hexo new page "about"
 ```

*   แก้ไขหน้าที่เพิ่งสร้าง คุณสามารถเขียนข้อมูลในส่วนเนื้อหาหลักโดยใช้รูปแบบ Markdown ได้เลย

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### การตั้งค่าลิงก์โซเชียลใน Sidebar

*   แก้ไขไฟล์ `_config.yml` ของไซต์ ค้นหาช่อง `social` จากนั้นเพิ่มชื่อและที่อยู่ของแพลตฟอร์มโซเชียลมีเดียได้เลย รูปแบบคีย์-ค่าคือ `ชื่อที่แสดง: ที่อยู่ลิงก์` ตัวอย่างเช่น:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   เปิดไฟล์ `/themes/next/_config.yml` เพิ่มชื่อแพลตฟอร์มโซเชียลมีเดีย (โปรดสังเกตตัวพิมพ์เล็ก-ใหญ่) และ (ไอคอน)[http://fontawesome.io/icons/] ใต้ช่อง `social_icons` ตัวเลือก `enable` ใช้ควบคุมว่าจะแสดงไอคอนหรือไม่ คุณสามารถตั้งค่าเป็น `false` เพื่อซ่อนไอคอนได้ ตัวอย่างเช่น:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### การเชื่อมโยงบล็อกกับ GitHub

*   ลงทะเบียนบัญชี GitHub: หากคุณยังไม่มีบัญชี GitHub จำเป็นต้องลงทะเบียนก่อน

*   สร้างโปรเจกต์บน GitHub ที่มีชื่อว่า `XXX.github.io` โดย XXX คือชื่อผู้ใช้ GitHub ของคุณ

*   เปิดไฟล์คอนฟิก `_config.yml` ที่อยู่ในโฟลเดอร์โปรเจกต์ `MyBlog` ของคุณ แล้วตั้งค่า `type` เป็น `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

*   รันคำสั่ง:

 ```bash
 npm install hexo-deployer-git --save
 ```

*   สร้างไฟล์ Static บนเครื่องของคุณ และพุชไฟล์ Static เหล่านั้นไปยัง GitHub โดยรันคำสั่ง:

```bash
hexo g
hexo d
```

ตอนนี้ เปิดเบราว์เซอร์และเข้าชม http://your-name.github.io ขอแสดงความยินดีด้วย! บล็อกของคุณสร้างเสร็จเรียบร้อยแล้วครับ

### การผูกโดเมน

ตอนนี้บล็อกของคุณสร้างเสร็จสมบูรณ์แล้ว และสามารถเข้าถึงได้ผ่านโดเมนของ GitHub แต่จะดีกว่านี้ถ้าคุณผูกโดเมนสั้นๆ เข้ากับบล็อกของคุณ

#### การซื้อโดเมน

*   ซื้อโดเมน: แนะนำให้ซื้อที่ [namesilo.com](https://www.namesilo.com/) ซึ่งเป็นผู้ให้บริการโดเมนที่มีชื่อเสียง ราคาดี และบริการน่าเชื่อถือ หากคุณใช้รหัสแนะนำ `PhiloArt.io` ของผม คุณจะได้รับส่วนลด 1 ดอลลาร์สหรัฐฯ (ใช้ได้ถึง 31 ธันวาคม 2025)

### การตั้งค่า Domain Resolution

*   การตั้งค่า DNS ของผู้ให้บริการโดเมน

*   เพิ่ม A record 4 รายการ เพื่อชี้ไปยัง GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   เพิ่ม CNAME record 1 รายการ โดยให้ `name` เป็น `www` และ `content` เป็น `your-name.github.io` (ชี้ไปยังที่อยู่ GitHub Pages ของคุณ):

 > CNAME —> philo-li.github.io

*   สำหรับการตั้งค่าโดยละเอียดเพิ่มเติม โปรดดูที่ [เอกสาร GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   เพิ่มไฟล์ CNAME ในไดเรกทอรีบล็อก

 หลังจากตั้งค่า Domain Resolution เสร็จแล้ว ให้เข้าไปที่ไดเรกทอรีบล็อก สร้างไฟล์ชื่อ `CNAME` (โปรดสังเกตว่าต้องเป็นตัวพิมพ์ใหญ่ และไม่มีนามสกุลไฟล์) ในโฟลเดอร์ `source` เปิดไฟล์นั้นด้วย Notepad (หรือโปรแกรมแก้ไขข้อความอื่น) แล้วใส่ชื่อโดเมนที่คุณซื้อมา เช่น `www.philoli.com`

*   รันคำสั่ง:

```bash
hexo g
hexo d
```

ตอนนี้เปิดเบราว์เซอร์ พิมพ์ชื่อโดเมนของคุณแล้วกด Enter ขอแสดงความยินดีด้วย! คุณมีบล็อกที่มีโดเมนเป็นของตัวเองแล้ว

### การเผยแพร่บทความใหม่

*   ในไดเรกทอรีรูทของบล็อก ให้รันคำสั่ง: `hexo new “บทความแรกของฉัน”` ซึ่งจะสร้างไฟล์ `.md` ขึ้นมาในโฟลเดอร์ `source/_posts`

*   แก้ไขไฟล์นั้น โดยปรับเปลี่ยนช่องข้อมูลเริ่มต้นเป็น:

 ```bash
 title หัวข้อบทความ
 date วันที่สร้าง (วันที่สร้างไฟล์)
 updated วันที่แก้ไข (วันที่แก้ไขไฟล์)
 comments เปิดใช้งานคอมเมนต์ (true)
 tags แท็ก
 categories หมวดหมู่
 permalink ชื่อใน URL (ชื่อไฟล์)
 ```

*   เขียนเนื้อหาหลัก (ตามกฎ Markdown)

*   สร้างไฟล์ Static บนเครื่องของคุณ และพุชไฟล์ Static เหล่านั้นไปยัง GitHub โดยรันคำสั่ง:

```bash
hexo g
hexo d
```

### การตั้งค่าส่วนบุคคล (ขั้นสูง)

ต่อไปนี้คือการตั้งค่าบล็อกส่วนตัวขั้นสูงบางส่วน ผู้เริ่มต้นสามารถข้ามไปก่อนได้

#### การเพิ่ม RSS

*   ติดตั้งปลั๊กอินในไดเรกทอรีรูท

 ```bash
 $ npm install hexo-generator-feed --save
 ```

*   เพิ่มโค้ดต่อไปนี้ที่ท้ายไฟล์ `_config.yml` ในไดเรกทอรีรูท: (**_โปรดทราบว่าต้องเว้นวรรคหลังเครื่องหมายโคลอน มิฉะนั้นจะเกิดข้อผิดพลาด!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

*   เปิดไฟล์ `/themes/next/_config.yml` แก้ไข `rss` (โปรดสังเกตว่าต้องเว้นวรรคหลังเครื่องหมายโคลอน)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### การตัดข้อความบทความบนหน้าแรก

*   ทุกครั้งที่เขียนเนื้อหาบทความ เพียงแค่เพิ่มโค้ดนี้ในไฟล์ .md ตรงตำแหน่งที่ต้องการตัดข้อความ:

 ```markdown
     <!--more-->
 ```

*   เปิดไฟล์ `/themes/next/_config.yml` และเปลี่ยนตัวเลือก `scroll_to_more` เป็น `false`

#### การจัดข้อความอ้างอิงในบทความให้อยู่กึ่งกลาง

*   ปรับปรุงสไตล์การอ้างอิงเริ่มต้นของ Markdown

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### การแก้ไขสไตล์ Code Block

*   แก้ไขไฟล์ `/themes/next/_config.yml` ปรับค่า `codeblock` ดังนี้:

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

#### การตั้งค่าเวลาสร้างไซต์

*   แก้ไขไฟล์ `_config.yml` ของไซต์ เพิ่มช่อง `since` ใหม่:

```bash
since: 2024
```

#### การปรับปรุงสไตล์ลิงก์บทความ

*   แก้ไขไฟล์ `themes\next\source\css\_common\components\post\post.styl` โดยเพิ่มสไตล์ CSS ต่อไปนี้ที่ท้ายไฟล์:

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

#### การเพิ่มรูปภาพพื้นหลังให้กับบล็อก

*   ในโฟลเดอร์ `source` ของไดเรกทอรีรูท ให้สร้างโฟลเดอร์ `_data` จากนั้นสร้างไฟล์ `styles.styl` เปิดไฟล์ `source/_data/styles.styl` ที่เพิ่งสร้างขึ้น แล้วเพิ่มเนื้อหาต่อไปนี้:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //รูปภาพไม่ครอบคลุมทั้งหน้า จะซ้ำหรือไม่และซ้ำอย่างไร
    background-attachment:fixed;    //รูปภาพจะเลื่อนตามการสกรอลล์หรือไม่
    background-size: cover;         //ครอบคลุม
    background-position:50% 50%;    //ตำแหน่งรูปภาพ
}
```
*   ในส่วนของ url สามารถเป็นลิงก์รูปภาพ หรือไดเรกทอรีรูปภาพก็ได้ คุณสามารถตั้งชื่อรูปภาพเป็น `background.jpg` และนำไปใส่ในโฟลเดอร์ `source/uploads`

#### การตั้งค่าพื้นหลังเนื้อหาบล็อกให้โปร่งแสง

*   เปิดไฟล์ `source/_data/styles.styl` ที่แก้ไขไปในขั้นตอนก่อนหน้า แล้วเพิ่มเนื้อหาต่อไปนี้ด้านล่าง:

```css

//ทำให้เนื้อหาบล็อกโปร่งใส
//ตั้งค่าความโปร่งใสของเนื้อหาบทความ
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


//ตั้งค่าความโปร่งใสของ Sidebar
.sidebar {
  opacity: 0.9;
}

//ตั้งค่าความโปร่งใสของแถบเมนู
.header-inner {
  background: rgba(255,255,255,0.9);
}

//ตั้งค่าความโปร่งใสของช่องค้นหา (local-search)
.popup {
  opacity: 0.9;
}
```

#### การปรับปรุงความสวยงามของ Inline Code Block

*   เปิดไฟล์ `source/_data/styles.styl` ที่แก้ไขไปในขั้นตอนก่อนหน้า แล้วเพิ่มเนื้อหาต่อไปนี้ด้านล่าง:

```css
// ปรับปรุงความสวยงามของแท็กโค้ด
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### การเพิ่มจำนวนผู้เข้าชมที่ท้ายเว็บไซต์

*   แก้ไขไฟล์

```css
# ค้นหาส่วนแท็ก copyright แล้วเพิ่มโค้ดภายในแท็กนั้น

<div class="copyright">
# ......มีการตั้งค่าบางส่วนอยู่แล้วที่นี่
# เพิ่มโค้ดใหม่ตรงนี้
</div>

# หลังจากเพิ่มแล้วจะเป็นแบบนี้:
<div class="copyright">
  # ......มีการตั้งค่าบางส่วนอยู่แล้วที่นี่
  # เพิ่มโค้ดใหม่ตรงนี้
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   สร้างใหม่เพื่อดูตัวอย่างผลลัพธ์ที่แก้ไขแล้ว เมื่อยืนยันว่าไม่มีปัญหา ให้เผยแพร่

```bash
hexo g
hexo s
# ยืนยันว่าไม่มีปัญหาแล้วเผยแพร่
hexo d
```

#### การเพิ่มไฟล์ README.md ไปยัง Repository

โดยปกติแล้วทุกโปรเจกต์จะมีไฟล์ `README.md` แต่เมื่อใช้ Hexo ในการ Deploy ไปยัง Repository ไฟล์ `README.md` ของโปรเจกต์จะถูกเขียนทับ ดังนั้นจึงจำเป็นต้องตั้งค่าในไฟล์คอนฟิกเพื่อป้องกันการเขียนทับ

เพิ่มไฟล์ `README.md` ในไดเรกทอรีรูท `source` ภายใต้ไดเรกทอรี `Hexo` จากนั้นแก้ไขไฟล์คอนฟิกไซต์ `_config.yml` โดยตั้งค่าพารามิเตอร์ `skip_render` เป็น:

```yml
skip_render: README.md
```
บันทึกและออก เมื่อใช้คำสั่ง `hexo d` เพื่อ Deploy บล็อกอีกครั้ง ไฟล์ `README.md` นี้ก็จะไม่ถูก Render แล้ว

#### ปลั๊กอินยอดนิยมบางส่วน

-   Hexo Filter MathJax: สำหรับ Render สูตรคณิตศาสตร์
    -   ติดตั้ง `npm install hexo-filter-mathjax`
    -   การตั้งค่าโดยละเอียด: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: นับจำนวนคำในบทความ
    -   ติดตั้ง `npm install hexo-word-counter`
    -   การตั้งค่าโดยละเอียด: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: ปรับปรุงความเร็วในการโหลดบล็อก
    -   ติดตั้ง `npm install hexo-optimize`
    -   การตั้งค่าโดยละเอียด: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   ปลั๊กอินอื่นๆ: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### การสำรองไฟล์ต้นฉบับ

-   อย่าลืมสำรองไฟล์ต้นฉบับบนเครื่องของคุณให้ดี โดยเฉพาะไฟล์ Markdown หากการตั้งค่าอื่นๆ สูญหาย คุณจะไม่สามารถเขียนบล็อกได้ตามปกติ และจะต้องตั้งค่าใหม่ตั้งแต่ต้น
-   แนะนำให้ใช้ GitHub Repository เดียวกันในการสำรองข้อมูล
-   แนะนำให้สำรองข้อมูลทุกครั้งที่มีการเปลี่ยนแปลง หรือสำรองข้อมูลทุกวัน
-   สำหรับวิธีการใช้งานเพิ่มเติม โปรดดูที่ [เอกสาร Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)

```bash
# เพิ่มที่อยู่ Repository ของบล็อกที่ตั้งค่าไว้ก่อนหน้านี้
git remote add https://github.com/your-name/your-name.github.io.git

# เพิ่มและบันทึกการเปลี่ยนแปลงปัจจุบัน พร้อมบันทึกข้อความ
git add .
git commit -m "源文件更新"

# สร้างและสลับไปยัง Branch ใหม่
git checkout -b source

# พุชเนื้อหาทั้งหมดของ Branch source ในเครื่องไปยัง Branch source ของ Remote Repository
git push origin source:source
```

### การเขียนบล็อกบนคอมพิวเตอร์เครื่องอื่น

เมื่อต้องการเขียนบล็อกบนคอมพิวเตอร์เครื่องอื่น คุณจะต้องติดตั้งซอฟต์แวร์พื้นฐาน จากนั้นดึง Repository ที่สำรองไว้บน GitHub มายังเครื่องของคุณ เพื่ออัปเดตบล็อก

*   ดาวน์โหลดและติดตั้ง node.js ([ดาวน์โหลดจากเว็บไซต์ทางการ](https://nodejs.org/en/))
*   ดาวน์โหลดและติดตั้ง git ([ดาวน์โหลดจากเว็บไซต์ทางการ](https://git-scm.com/downloads))
*   ติดตั้งเฟรมเวิร์ก Hexo: เปิด cmd แล้วรันคำสั่ง

 ```bash
 npm install -g hexo-cli
```
*   อัปเดตบนเครื่อง

```bash
# Clone Repository มายังเครื่อง
git clone https://github.com/your-name/your-name.github.io.git

# หากมีการ Clone อยู่แล้ว ทุกครั้งก่อนอัปเดตบล็อกต้องดึงเนื้อหา Branch ล่าสุด
git pull origin

# สลับไปยัง Branch ที่เกี่ยวข้อง
git checkout source

# หลังจากติดตั้งปลั๊กอินทั้งหมดภายใต้การตั้งค่า Hexo แล้ว ก็สามารถเริ่มอัปเดตและแก้ไขเนื้อหาบล็อกได้
npm install

# หลังจากแก้ไขเนื้อหาแล้ว อย่าลืมสำรองข้อมูลทันที
git add .
git commit -m "博客更新xxx"
git push origin source:source

# เผยแพร่และพุชเนื้อหาบล็อกล่าสุดไปยังโดเมนเว็บไซต์
hexo clean
hexo g  # สร้างไฟล์ Static
hexo s  # ดูตัวอย่างบล็อกบนเครื่อง
hexo d  # เผยแพร่เนื้อหาบล็อกล่าสุด
```

### สรุปคำสั่งยอดนิยมบางส่วน

 ```bash
hexo g
# หรือ hexo generate, สร้างหน้าเว็บ Static จากไฟล์ต้นฉบับ
hexo d
# หรือ hexo deploy, เผยแพร่และพุชไปยัง GitHub Pages
hexo s
# หรือ hexo server, ติดตั้งและทดสอบบนเครื่อง
hexo clean
# ล้างแคชของหน้าเว็บ Static จากนั้น hexo d เพื่อสร้างใหม่
