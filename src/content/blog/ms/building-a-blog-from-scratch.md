---
title: Panduan Ringkas Membina Blog Hexo dari Sifar (Versi 2024)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
Adakah anda sudah lama bosan dengan antaramuka laman blog yang hambar dan tidak menarik? Adakah anda muak dengan notifikasi laman web yang tidak berkesudahan? Adakah anda sudah lama teringin nak bina blog sendiri, tetapi terhenti kerana tutorial yang rumit dan kod-kod yang memeningkan kepala? Kalau begitu, tahniah! Artikel ini akan membimbing anda secara langkah demi langkah untuk membina blog sendiri dengan cara yang paling mudah difahami. Anda cuma perlukan sedikit kesabaran, dan ikut sahaja setiap langkah.

<!--more-->

Hexo, sebagai sebuah rangka kerja blog yang pantas, ringkas dan cekap, sememangnya berita baik untuk para pemula. Manakala GitHub pula membebaskan kita daripada kerumitan menyewa dan menguruskan pelayan tambahan. Oleh itu, artikel ini akan menunjukkan cara membina blog menggunakan Hexo dan GitHub.

Saya pernah menulis sebuah artikel pada tahun 2018 bertajuk [Panduan Ringkas Membina Blog dari Sifar](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Disebabkan kemas kini pada pemalam, ada beberapa perincian yang perlu diubah. Justeru, versi ringkas tutorial ini untuk tahun 2024 diterbitkan semula.

### Persediaan Awal

*   Muat turun dan pasang node.js ([muat turun dan pasang dari laman rasmi](https://nodejs.org/en/))
*   Muat turun dan pasang git ([muat turun dan pasang dari laman rasmi](https://git-scm.com/downloads))

### Membina Blog Statik Hexo Secara Lokal

*   Pasang rangka kerja Hexo: Buka cmd dan jalankan
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Cipta sebuah folder baharu, contohnya MyBlog. Masuk ke dalam folder tersebut, klik kanan dan jalankan git, kemudian taip:

 ```bash
 $ hexo init
 ```

*   Setelah templat Hexo dijana, pasang npm, kemudian jalankan:

 ```bash
$ npm install
 ```

Ya, bahagian utama blog anda telah selesai. Mari lihat hasilnya. Jalankan:

```bash
$ hexo server
```

Pada ketika ini, buka pelayar web, taip localhost:4000, dan anda akan dapat melihat rupa blog anda sekarang. Berasa teruja seketika, kemudian tekan Ctrl + C untuk meneruskan langkah seterusnya.

### Penyesuaian Peribadi (Permulaan)

#### Menukar Tema

*   Muat turun tema baharu (contohnya, [tema NexT](http://theme-next.iissnan.com/)), dan jalankan di direktori akar:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Buka `_config.yml` di direktori akar, ubah medan `theme` kepada:

 ```bash
theme: next
 ```

*   Pilih penampilan: Buka `/themes/next/_config.yml`, cari medan `scheme` (boleh guna Ctrl + F untuk carian pantas). NexT menawarkan tiga penampilan berbeza; anda boleh pilih yang disukai dan buang tanda # pada pilihan tersebut (kemudiannya, dua fail ini yang akan kerap diubah suai: _fail konfigurasi tapak_ dan _fail konfigurasi tema_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Untuk melihat hasilnya, anda boleh jalankan perintah berikut (anda boleh ulangi langkah ini setiap kali anda ingin melihat hasilnya):

```bash
hexo g #atau hexo generate
hexo server
```

#### Konfigurasi Laman Web

*   Gunakan editor untuk membuka fail konfigurasi tapak `_config.yml` di direktori akar (di Windows, jangan gunakan Notepad untuk mengedit, kerana tajuk Cina mungkin menjadi rosak). Ubah medan `Site`, pastikan ada ruang selepas titik bertindih:

 ```bash
 # Site
 title: Dunia Tidak Diketahui                //Nama blog
 subtitle:
 description:  Do something cool //Kata-kata hikmat
 author: LulalaP                 //Penulis
 language: zh-Hans               //Bahasa laman web
 timezone:
 ```

### Menetapkan Gambar Profil Bar Sisi

*   Di dalam `/source`, cipta folder baharu dan namakannya `uploads`. Letakkan gambar profil (contohnya: avatar.jpg) ke dalam folder tersebut.

*   Buka `/themes/next/_config.yml`, cari medan `avatar` dan ubah kepada:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Melengkapkan Halaman Blog

#### Menambah Menu
*   Buka `/themes/next/_config.yml`, dan buang tanda komen (garisan #) di hadapan menu yang ingin anda tambah pada medan `menu`. Jika anda ingin menambah menu lain, anda boleh menambahnya mengikut keperluan (perhatikan indentasi medan):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Mencipta Halaman Kategori

*   Cipta sebuah halaman baharu, namakannya `categories`, dengan perintah berikut:

 ```bash
 $ hexo new page categories
 ```

*   Edit halaman yang baru dicipta `/source/categories/index.md`, tetapkan jenis halaman kepada `categories`. Tema akan secara automatik memaparkan semua kategori untuk halaman ini (pastikan untuk mengekalkan ruang selepas titik bertindih).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Mencipta Halaman Awan Tag

*   Cipta sebuah halaman baharu, namakannya `tags`, dengan perintah berikut:

 ```bash
 $ hexo new page "tags"
 ```

*   Edit halaman yang baru dicipta, tetapkan jenis halaman kepada `tags`. Tema akan secara automatik memaparkan awan tag untuk halaman ini.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Mencipta Halaman "Tentang Saya"

 *   Cipta halaman 'about' baharu:

 ```bash
 $ hexo new page "about"
 ```

 *   Edit halaman yang baru dicipta. Anda boleh menulis maklumat dalam format Markdown di bahagian kandungan utama.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Menetapkan Pautan Sosial Bar Sisi

*   Edit `_config.yml` laman web anda, cari medan `social`, kemudian tambah nama dan alamat laman sosial. Format kunci-nilai adalah `Nama Paparan: Alamat Pautan`, contohnya:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Buka `/themes/next/_config.yml`, di bawah medan `social_icons`, tambah nama laman sosial (perhatikan penggunaan huruf besar dan kecil) serta (ikon)[http://fontawesome.io/icons/]. Pilihan `enable` digunakan untuk mengawal sama ada ikon dipaparkan. Anda boleh menetapkannya kepada `false` untuk membuang ikon. Contohnya:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Mengaitkan Blog dengan GitHub

 *   Daftar akaun GitHub: Jika anda belum mempunyai akaun GitHub, anda perlu mendaftar terlebih dahulu.

 *   Di GitHub, cipta projek dengan nama `XXX.github.io`, di mana XXX adalah nama pengguna GitHub anda sendiri.

 *   Buka fail konfigurasi `_config.yml` di dalam projek folder `MyBlog` tempatan anda, dan tetapkan `type` kepada `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Jalankan:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Jana fail statik secara tempatan, dan hantar fail statik ke GitHub, jalankan:

```bash
hexo g
hexo d
```

Pada masa ini, buka pelayar web, lawati http://your-name.github.io. Tahniah! Blog anda telah siap sepenuhnya.

### Mengikat Nama Domain

Setakat ini, blog anda telah berjaya dibina sepenuhnya dan boleh diakses melalui domain GitHub. Mengikatnya dengan nama domain yang lebih ringkas akan menjadikannya lebih sempurna.

#### Pembelian Nama Domain

*   Beli nama domain. Disyorkan untuk membeli di [namesilo.com], penyedia domain yang berpengalaman, dengan harga yang berpatutan dan perkhidmatan yang boleh dipercayai. Jika anda menggunakan kod rujukan saya `PhiloArt.io`, anda boleh mendapat diskaun $1, sah sehingga 31 Disember 2025.

### Resolusi Nama Domain

*   Tetapan DNS penyedia domain

*   Tambah 4 rekod A, untuk menunjuk ke GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Tambah satu rekod `CNAME`, dengan `name` sebagai `www`, dan `content` sebagai `your-name.github.io` (menunjuk ke alamat Github Pages anda):

 > CNAME —> philo-li.github.io

*   Untuk tetapan yang lebih terperinci, sila rujuk [Dokumen GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Tambah fail CNAME dalam direktori blog

Setelah konfigurasi resolusi domain selesai, masuk ke direktori blog. Di bawah direktori `source`, cipta fail baharu bernama `CNAME` (perhatikan huruf besar, tiada sambungan fail). Buka dengan Notepad dan tulis nama domain yang telah dibeli, contohnya: `www.philoli.com`.

*   Jalankan:

```bash
hexo g
hexo d
```

Sekarang, buka pelayar web, taip nama domain anda, tekan Enter. Tahniah, anda kini mempunyai blog dengan nama domain anda sendiri.

### Menerbitkan Artikel Baharu

*   Di direktori akar blog, jalankan: `hexo new “Artikel Pertama Saya”`. Ini akan menghasilkan fail `.md` di dalam folder `source/_posts`.

*   Edit fail tersebut, ubah medan permulaan kepada:

 ```bash
 title Tajuk artikel
 date Tarikh cipta (tarikh fail dicipta)
 updated Tarikh ubah suai (tarikh fail diubah suai)
 comments Adakah komen diaktifkan true
 tags Tag
 categories Kategori
 permalink Nama dalam URL (nama fail)
 ```

*   Tulis kandungan utama (mengikut peraturan Markdown)

*   Jana fail statik secara tempatan, dan hantar fail statik ke GitHub, jalankan:

```bash
hexo g
hexo d
```

### Penyesuaian Peribadi (Lanjutan)

Berikut adalah beberapa tetapan gaya blog peribadi lanjutan. Pemula boleh melangkau bahagian ini terlebih dahulu.

#### Menambah RSS

 *   Pasang pemalam di direktori akar

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Di hujung fail `_config.yml` di direktori akar, tambah yang berikut: (**_Sila ambil perhatian bahawa anda perlu menambah ruang selepas titik bertindih, jika tidak, ralat akan berlaku!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Buka `/themes/next/_config.yml`, ubah `rss` (perhatikan untuk menambah ruang selepas titik bertindih)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Pemotongan Artikel Halaman Utama
 *   Setiap kali anda menulis kandungan utama artikel, anda hanya perlu menambah yang berikut di tempat yang perlu dipotong dalam fail .md artikel:

 ```markdown
     <!--more-->
 ```

 *   Buka `/themes/next/_config.yml`, ubah pilihan `scroll_to_more` kepada `false`.

#### Memusatkan Teks Petikan dalam Artikel
*   Gaya petikan lalai Markdown telah dioptimumkan.

```markdown
{% centerquote %}
Petikan teks
{% endcenterquote %}
```

{% centerquote %}
Petikan teks
{% endcenterquote %}

#### Mengubah Gaya Blok Kod

*   Edit `/themes/next/_config.yml`, ubah konfigurasi `codeblock` seperti berikut:

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

#### Menetapkan Masa Pembinaan Laman Web

 *   Edit `_config.yml` laman web anda, tambah medan `since` baharu.

```bash
since: 2024
```

#### Memperbaiki Gaya Pautan Artikel

*   Edit fail `themes\next\source\css\_common\components\post\post.styl`, dan tambah gaya CSS berikut di hujungnya:

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

#### Menambah Gambar Latar Belakang pada Blog
*   Di bawah folder `source` di direktori akar, cipta folder `_data`, cipta fail `styles.styl` baharu. Buka fail `source/_data/styles.styl` yang baru dicipta, dan tambah kandungan berikut:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Jika imej tidak boleh memenuhi, sama ada mengulang dan cara mengulang
    background-attachment:fixed;    //Sama ada imej mengikut skrol
    background-size: cover;         //Tutup sepenuhnya
    background-position:50% 50%;    //Kedudukan imej
}
```
*   URL boleh menjadi pautan imej, atau direktori imej. Anda boleh menamakan imej `background.jpg` dan meletakkannya di dalam folder `source/uploads`.

#### Menjadikan Latar Belakang Kandungan Blog Separuh Lutsinar
*   Buka fail `source/_data/styles.styl` yang diedit pada langkah sebelumnya, dan teruskan menambah kandungan berikut di bawah:

```css

//Ketelusan kandungan blog
//Tetapan ketelusan kandungan artikel
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


//Tetapan ketelusan bar sisi
.sidebar {
  opacity: 0.9;
}

//Tetapan ketelusan bar menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Tetapan ketelusan kotak carian (local-search)
.popup {
  opacity: 0.9;
}
```

#### Mengoptimumkan Gaya Blok Kod Separis
*   Buka fail `source/_data/styles.styl` yang diedit pada langkah sebelumnya, dan teruskan menambah kandungan berikut di bawah:

```css
// Untuk mencantikkan tag kod
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Menambah Bilangan Pelawat di Bahagian Bawah Laman Web

*   Edit dan ubah fail

```css
# Cari bar tag copyright ini, kemudian tambah kod di dalam tag

<div class="copyright">
# ......Di sini sudah ada beberapa konfigurasi
# Tambah kod baharu di sini
</div>

# Setelah ditambah, ia akan kelihatan seperti ini:
<div class="copyright">
  # ......Di sini sudah ada beberapa konfigurasi
  # Tambah kod baharu di sini
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Jana semula untuk pratonton kesan yang telah diubah suai, dan terbitkan setelah pasti tiada masalah.

```bash
hexo g
hexo s
# Terbitkan setelah pasti tiada masalah
hexo d
```

#### Menambah Fail README.md pada Repositori

Setiap projek biasanya mempunyai fail `README.md`, tetapi apabila Hexo diatur gerak ke repositori, fail `README.md` dalam projek akan ditimpa. Oleh itu, fail konfigurasi perlu ditetapkan untuk mengelakkan penimpaan.

Di bawah direktori akar `source` dalam direktori `Hexo`, tambah fail `README.md`. Ubah fail konfigurasi tapak `_config.yml`, dan tetapkan nilai parameter `skip_render` kepada:

```yml
skip_render: README.md
```
Simpan dan keluar. Apabila anda menggunakan perintah `hexo d` lagi untuk mengatur gerak blog, fail `README.md` ini tidak akan diproses.

#### Beberapa Pemalam Lazim

-   Hexo Filter MathJax: Untuk memaparkan formula matematik
    -   Pasang `npm install hexo-filter-mathjax`
    -   Konfigurasi terperinci: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Pengiraan perkataan artikel
    -   Pasang `npm install hexo-word-counter`
    -   Konfigurasi terperinci: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Mengoptimumkan kelajuan memuatkan blog
    -   Pasang `npm install hexo-optimize`
    -   Konfigurasi terperinci: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Lebih banyak pemalam: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Sandaran Fail Sumber

-   Ingatlah untuk membuat sandaran fail sumber tempatan anda, terutamanya fail Markdown. Jika konfigurasi lain hilang, anda tidak akan dapat menulis blog seperti biasa dan perlu menetapkannya dari awal.
-   Disyorkan untuk menggunakan repositori GitHub yang sama untuk sandaran.
-   Disyorkan untuk membuat sandaran setiap kali ada perubahan, atau sekurang-kurangnya sekali sehari.
-   Untuk penggunaan lanjut, sila rujuk [Dokumen Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Tambah alamat repositori blog yang telah ditetapkan sebelum ini
git remote add https://github.com/your-name/your-name.github.io.git

# Tambah dan simpan perubahan semasa, serta catatkan komen
git add .
git commit -m "Kemas kini fail sumber"

# Cipta dan tukar ke cawangan baharu
git checkout -b source

# Hantar semua kandungan cawangan sumber tempatan ke cawangan sumber di repositori jauh
git push origin source:source
```

### Menulis Blog Menggunakan Komputer Berbeza
-   Apabila menulis blog menggunakan komputer yang berbeza, anda perlu memasang perisian asas, kemudian tarik repositori sandaran GitHub jauh ke komputer tempatan untuk mengemas kini blog.

*   Muat turun dan pasang node.js ([muat turun dan pasang dari laman rasmi](https://nodejs.org/en/))
*   Muat turun dan pasang git ([muat turun dan pasang dari laman rasmi](https://git-scm.com/downloads))
*   Pasang rangka kerja Hexo: Buka cmd dan jalankan

 ```bash
 npm install -g hexo-cli
```
*   Lakukan kemas kini tempatan

```bash
# Klon repositori ke tempatan
git clone https://github.com/your-name/your-name.github.io.git

# Jika anda sudah mengklon secara tempatan, anda perlu menarik kandungan cawangan terkini sebelum setiap kemas kini blog
git pull origin

# Tukar ke cawangan yang sepadan
git checkout source

# Setelah semua pemalam di bawah konfigurasi Hexo dipasang, anda boleh mula mengemas kini dan mengedit kandungan blog
npm install

# Selepas mengubah kandungan, ingat untuk membuat sandaran segera bagi keseluruhan proses
git add .
git commit -m "Kemas kini blog xxx"
git push origin source:source

# Terbitkan dan hantar kandungan blog terkini ke laman domain
hexo clean
hexo g  # Jana halaman web statik
hexo s  # Pratonton kesan blog secara tempatan
hexo d  # Terbitkan kandungan blog terkini
```

### Ringkasan Beberapa Perintah Lazim

 ```bash
hexo g
#atau hexo generate, menjana halaman web statik daripada fail sumber
hexo d
#atau hexo deploy, menerbitkan dan menghantar ke GitHub Pages
hexo s
#atau hexo server, menguji penyebaran secara tempatan
hexo clean
# Kosongkan cache halaman web statik, kemudian hexo d untuk menjana semula
