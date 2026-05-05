---
title: Panduan Singkat Membangun Blog Hexo dari Nol (Versi 2024)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
Apakah kamu sudah bosan dengan antarmuka situs blog yang kurang estetis? Muak dengan notifikasi atau rekomendasi situs yang tak ada habisnya? Sudah lama ingin punya blog sendiri, tapi terhalang oleh tutorial yang rumit dan deretan kode yang bikin pusing kepala? Kalau begitu, selamat! Artikel ini hadir untuk memandu kamu langkah demi langkah membangun blog impianmu dengan cara yang paling mudah dipahami. Kamu hanya perlu sedikit kesabaran dan mengikuti setiap langkahnya.

<!--more-->

Hexo, sebagai framework blog yang cepat, ringkas, dan efisien, benar-benar anugerah bagi para pemula. Ditambah lagi, GitHub menghilangkan kerumitan kita untuk menyewa dan mengelola server secara terpisah. Oleh karena itu, artikel ini akan memandu kamu membangun blog menggunakan Hexo dan GitHub.

Dulu, di tahun 2018, saya pernah menulis [Panduan Singkat Membangun Blog dari Nol](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Karena ada pembaruan plugin dan beberapa detail yang perlu disesuaikan, maka saya kembali menghadirkan panduan singkat versi 2024 ini.

### Persiapan Awal

*   Unduh dan instal Node.js ([unduh dari situs resmi](https://nodejs.org/en/))
*   Unduh dan instal Git ([unduh dari situs resmi](https://git-scm.com/downloads))

### Membangun Blog Statis Hexo Secara Lokal

*   Instal framework Hexo: Buka CMD dan jalankan
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Buat folder baru, misalnya `MyBlog`. Masuk ke folder tersebut, klik kanan, lalu jalankan Git (Git Bash/CMD jika sudah terintegrasi), dan masukkan perintah berikut:

 ```bash
 $ hexo init
 ```

*   Setelah template Hexo selesai dibuat, instal npm dengan menjalankan perintah:

 ```bash
$ npm install
 ```

Betul sekali, bagian utama blogmu sudah selesai! Mari kita lihat hasilnya. Jalankan perintah:

```bash
$ hexo server
```

Sekarang, buka browser dan ketik `localhost:4000`. Kamu akan bisa melihat tampilan blogmu saat ini. Rasakan sedikit kegembiraan, lalu tekan `Ctrl + C` untuk melanjutkan langkah berikutnya.

### Pengaturan Kustomisasi (Awal)

#### Mengganti Tema

*   Unduh tema baru (contohnya [tema NexT](http://theme-next.iissnan.com/)). Jalankan perintah ini di direktori root blogmu:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Buka file `_config.yml` di direktori root, lalu ubah nilai `theme` menjadi:

 ```bash
theme: next
 ```

*   Pilih tampilan: Buka `/themes/next/_config.yml`, lalu cari bagian `scheme` (kamu bisa menggunakan `Ctrl + F` untuk pencarian cepat). NexT menawarkan tiga tampilan berbeda; pilih salah satu yang kamu suka, lalu hapus tanda `#` di depannya (kedepannya, dua file ini – _konfigurasi situs_ dan _konfigurasi tema_ – akan menjadi fokus utama perubahan).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Untuk melihat hasilnya, jalankan perintah berikut (kamu bisa mengulang langkah ini setiap kali ingin melihat perubahan):

```bash
hexo g #atau hexo generate
hexo server
```

#### Konfigurasi Situs

*   Buka file konfigurasi situs `_config.yml` di direktori root menggunakan editor teks (jangan gunakan Notepad di Windows karena judul berbahasa Mandarin bisa menjadi acak-acakan). Ubah bagian `Site`, dan pastikan ada spasi setelah tanda titik dua:

 ```bash
 # Site
 title: Dunia Tak Dikenal                //Nama blog
 subtitle:
 description:  Do something cool //Slogan
 author: LulalaP                 //Penulis
 language: zh-Hans               //Bahasa situs
 timezone:
 ```

### Mengatur Foto Profil di Sidebar

*   Buat folder baru bernama `uploads` di dalam `/source`. Letakkan gambar profil (misalnya: `avatar.jpg`) ke dalam folder tersebut.

*   Buka `/themes/next/_config.yml`, cari bagian `avatar`, lalu ubah menjadi:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Melengkapi Halaman Blog

#### Menambahkan Menu
*   Buka `/themes/next/_config.yml`. Hapus tanda komentar (`#`) di depan menu yang ingin kamu aktifkan. Jika perlu menambahkan menu lain, sesuaikanlah (perhatikan indentasi setiap baris):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Membuat Halaman Kategori

*   Buat halaman baru bernama `categories` dengan perintah berikut:

 ```bash
 $ hexo new page categories
 ```

*   Edit halaman `/source/categories/index.md` yang baru dibuat. Atur `type` halaman menjadi `categories`, dan tema akan secara otomatis menampilkan semua kategori di halaman ini (pastikan ada spasi setelah tanda titik dua).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Membuat Halaman Tag Cloud

*   Buat halaman baru bernama `tags` dengan perintah berikut:

 ```bash
 $ hexo new page "tags"
 ```

*   Edit halaman yang baru dibuat. Atur `type` halaman menjadi `tags`, dan tema akan secara otomatis menampilkan tag cloud di halaman ini.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Membuat Halaman 'Tentang Saya'

 *   Buat halaman `about` baru:

 ```bash
 $ hexo new page "about"
 ```

 *   Edit halaman yang baru dibuat. Kamu bisa menulis informasi di bagian isi menggunakan format Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Mengatur Tautan Media Sosial di Sidebar

*   Edit file `_config.yml` situsmu, cari bagian `social`, lalu tambahkan nama dan alamat situs media sosial. Formatnya adalah `Nama Tampilan: Alamat Tautan`, contohnya:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Buka `/themes/next/_config.yml`. Di bawah bagian `social_icons`, tambahkan nama situs media sosial (perhatikan penggunaan huruf besar/kecil) dan (ikonnya)[http://fontawesome.io/icons/]. Opsi `enable` digunakan untuk mengontrol apakah ikon akan ditampilkan; kamu bisa mengaturnya ke `false` untuk menyembunyikan ikon tersebut. Contohnya:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Menghubungkan Blog dengan GitHub

 *   Daftar akun GitHub: Jika kamu belum punya akun GitHub, kamu perlu mendaftar terlebih dahulu.

 *   Di GitHub, buat repositori bernama `XXX.github.io`, di mana `XXX` adalah username GitHub-mu.

 *   Buka file konfigurasi `_config.yml` di dalam folder `MyBlog` lokalmu. Atur `type` menjadi `git`:
  
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
 *   Buat file statis secara lokal, lalu dorong (push) file statis tersebut ke GitHub dengan menjalankan:

```bash
hexo g
hexo d
```

Sekarang, buka browser dan kunjungi `http://your-name.github.io`. Selamat! Blogmu sudah berhasil dibangun sepenuhnya.

### Menghubungkan Domain

Sejauh ini, blogmu sudah selesai dibangun dan bisa diakses melalui domain GitHub. Akan lebih sempurna lagi jika kamu mengaitkan domain pendek ke blog ini.

#### Pembelian Domain

*   Beli domain. Saya merekomendasikan pembelian di [namesilo.com](https://www.namesilo.com/), penyedia domain terkemuka yang menawarkan harga kompetitif dan layanan yang bisa diandalkan. Jika kamu menggunakan kode referral saya `PhiloArt.io`, kamu bisa mendapatkan diskon $1, berlaku hingga 31-12-2025.

### Resolusi Domain

*   Pengaturan DNS Penyedia Domain

*   Tambahkan 4 catatan A (A record) untuk menunjuk ke GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Tambahkan satu catatan `CNAME` dengan `name` `www` dan `content` `your-name.github.io` (menunjuk ke alamat GitHub Pages-mu):

 > CNAME —> philo-li.github.io

*   Untuk pengaturan lebih detail, silakan lihat [Dokumentasi GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Tambahkan file CNAME di direktori blog

 Setelah selesai mengonfigurasi resolusi domain, masuk ke direktori blogmu. Di dalam folder `source`, buat file baru bernama `CNAME` (pastikan huruf kapital semua dan tanpa ekstensi). Buka dengan Notepad atau editor teks lain, lalu tuliskan domain yang sudah kamu beli, misalnya: `www.philoli.com`

*   Jalankan:

```bash
hexo g
hexo d
```

Sekarang buka browser, masukkan domainmu, tekan Enter. Selamat! Kamu kini punya blog dengan domain independen milikmu sendiri.

### Menerbitkan Artikel Baru

*   Di direktori root blog, jalankan: `hexo new “Artikel Pertamaku”`. Ini akan membuat file `.md` di dalam folder `source/_posts`.

*   Edit file tersebut, ubah bagian awal (frontmatter) menjadi:

 ```bash
 title Judul artikel
 date Tanggal pembuatan (tanggal pembuatan file)
 updated Tanggal modifikasi (tanggal modifikasi file)
 comments Apakah komentar diaktifkan true
 tags Tag
 categories Kategori
 permalink Nama di URL (nama file)
 ```

*   Tulis konten artikel (ikuti aturan Markdown).

*   Buat file statis secara lokal, lalu dorong (push) file statis tersebut ke GitHub dengan menjalankan:

```bash
hexo g
hexo d
```

### Pengaturan Kustomisasi (Lanjutan)

Berikut adalah beberapa pengaturan kustomisasi gaya blog yang lebih lanjut. Pemula bisa melewati bagian ini terlebih dahulu.

#### Menambahkan RSS

 *   Instal plugin di direktori root.

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Di bagian akhir file `_config.yml` di direktori root, tambahkan: (**_Penting: pastikan ada spasi setelah tanda titik dua, jika tidak akan terjadi error!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Buka `/themes/next/_config.yml`, lalu ubah `rss` (pastikan ada spasi setelah tanda titik dua).

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Pemotongan Artikel di Halaman Utama
 *   Setiap kali menulis artikel, cukup tambahkan ini di bagian `.md` artikel yang ingin kamu potong:

 ```markdown
     <!--more-->
 ```

 *   Buka `/themes/next/_config.yml`, lalu ubah opsi `scroll_to_more` menjadi `false`.

#### Perataan Tengah Teks Kutipan dalam Artikel
*   Mengoptimalkan gaya kutipan default Markdown.

```markdown
{% centerquote %}
Teks kutipan
{% endcenterquote %}
```

{% centerquote %}
Teks kutipan
{% endcenterquote %}

#### Mengubah Gaya Blok Kode

*   Edit `/themes/next/_config.yml`, lalu ubah konfigurasi `codeblock` menjadi seperti berikut:

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

#### Menentukan Waktu Pembuatan Situs

 *   Edit file `_config.yml` situsmu, lalu tambahkan bagian `since`.

```bash
since: 2024
```

#### Memperbaiki Gaya Tautan Artikel

*   Edit file `themes\next\source\css\_common\components\post\post.styl`. Tambahkan gaya CSS berikut di bagian akhir:

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

#### Menambahkan Gambar Latar Belakang pada Blog
*   Di dalam folder `source` di direktori root, buat folder `_data`. Kemudian, buat file `styles.styl` di dalamnya. Buka file `source/_data/styles.styl` yang baru dibuat, lalu tambahkan konten berikut:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Apakah gambar akan diulang jika tidak memenuhi, dan bagaimana cara pengulangannya
    background-attachment:fixed;    //Apakah gambar akan ikut bergulir
    background-size: cover;         //Menutupi seluruh area
    background-position:50% 50%;    //Posisi gambar
}
```
*   URL bisa berupa tautan gambar atau direktori gambar. Kamu bisa menamai gambar `background.jpg` dan meletakkannya di dalam folder `source/uploads`.

#### Mengatur Latar Belakang Konten Blog agar Semi-Transparan
*   Buka kembali file `source/_data/styles.styl` yang telah kamu edit, lalu tambahkan konten berikut di bawahnya:

```css

// Transparansi konten blog
// Pengaturan transparansi konten artikel
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


// Pengaturan transparansi sidebar
.sidebar {
  opacity: 0.9;
}

// Pengaturan transparansi bilah menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Pengaturan transparansi kotak pencarian (local-search)
.popup {
  opacity: 0.9;
}
```

#### Mengoptimalkan Gaya Blok Kode Inline
*   Buka kembali file `source/_data/styles.styl` yang telah kamu edit, lalu tambahkan konten berikut di bawahnya:

```css
// Peningkatan estetika untuk tag kode
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Menambahkan Jumlah Pengunjung di Bagian Bawah Situs

*   Edit dan ubah file

```css
# Cari bagian tag copyright, lalu tambahkan kode di dalam tag tersebut.

<div class="copyright">
# ......Sudah ada beberapa konfigurasi di sini
# Tambahkan kode baru di sini
</div>

# Setelah ditambahkan akan menjadi seperti ini:
<div class="copyright">
  # ......Sudah ada beberapa konfigurasi di sini
  # Tambahkan kode baru di sini
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Hasilkan ulang untuk melihat pratinjau perubahan. Setelah yakin tidak ada masalah, publikasikan.

```bash
hexo g
hexo s
# Setelah yakin tidak ada masalah, publikasikan
hexo d
```

#### Menambahkan File README.md ke Repositori

Setiap proyek biasanya memiliki file `README.md`. Namun, ketika Hexo di-deploy ke repositori, file `README.md` yang ada di proyek akan tertimpa. Oleh karena itu, kamu perlu mengonfigurasi pengaturan untuk mencegah penimpaan ini.

Di dalam direktori root `source` yang berada di direktori `Hexo`, tambahkan file `README.md`. Kemudian, ubah file konfigurasi situs `_config.yml` dan atur nilai parameter `skip_render` menjadi:

```yml
skip_render: README.md
```
Simpan dan keluar. Saat kamu menggunakan perintah `hexo d` lagi untuk deploy blog, file `README.md` ini tidak akan di-render.

#### Beberapa Plugin Populer

- Hexo Filter MathJax: Untuk me-render rumus matematika
  - Instal `npm install hexo-filter-mathjax`
  - Konfigurasi detail: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Penghitung kata artikel
  - Instal `npm install hexo-word-counter`
  - Konfigurasi detail: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Mengoptimalkan kecepatan muat blog
  - Instal `npm install hexo-optimize`
  - Konfigurasi detail: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Lebih banyak plugin: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Pencadangan File Sumber

- Penting sekali untuk mencadangkan file sumber lokalmu, terutama file Markdown. Jika konfigurasi lain hilang, kamu tidak akan bisa menulis blog dengan normal dan perlu mengaturnya dari awal.
- Disarankan untuk menggunakan repositori GitHub yang sama untuk pencadangan.
- Disarankan untuk mencadangkan setiap kali ada perubahan, atau setidaknya sekali sehari.
- Untuk penggunaan lebih lanjut, silakan lihat [Dokumentasi Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects). 

```bash
# Tambahkan alamat repositori blog yang sudah diatur sebelumnya
git remote add https://github.com/your-name/your-name.github.io.git

# Tambahkan dan simpan perubahan saat ini, serta catat dalam pesan commit
git add .
git commit -m "Pembaruan file sumber"

# Buat dan beralih ke branch baru
git checkout -b source

# Dorong (push) seluruh isi branch source lokal ke branch source di repositori remote
git push origin source:source
```

### Menulis Blog Menggunakan Komputer Berbeda
- Ketika menulis blog menggunakan komputer yang berbeda, kamu perlu menginstal perangkat lunak dasar, lalu menarik (pull) repositori GitHub yang dicadangkan dari remote ke lokal untuk memperbarui blog.

*   Unduh dan instal Node.js ([unduh dari situs resmi](https://nodejs.org/en/))
*   Unduh dan instal Git ([unduh dari situs resmi](https://git-scm.com/downloads))
*   Instal framework Hexo: Buka CMD dan jalankan

 ```bash
 npm install -g hexo-cli
```
*   Lakukan pembaruan lokal

```bash
# Kloning repositori ke lokal
git clone https://github.com/your-name/your-name.github.io.git

# Jika sudah dikloning secara lokal, setiap kali sebelum memperbarui blog, kamu perlu menarik (pull) konten branch terbaru
git pull origin

# Beralih ke branch yang sesuai
git checkout source

# Setelah menginstal semua plugin di bawah konfigurasi Hexo, kamu bisa mulai memperbarui dan mengedit konten blog
npm install

# Setelah mengubah konten, jangan lupa untuk segera mencadangkan seluruhnya
git add .
git commit -m "Pembaruan blog xxx"
git push origin source:source

# Publikasikan dan dorong (push) konten blog terbaru ke situs domain
hexo clean
hexo g  # Menghasilkan file statis
hexo s  # Pratinjau efek blog secara lokal
hexo d  # Mempublikasikan konten blog terbaru
```

### Ringkasan Perintah Umum

 ```bash
hexo g
#atau hexo generate, menghasilkan halaman web statis dari file sumber
hexo d
#atau hexo deploy, mempublikasikan dan mendorong ke GitHub Pages
hexo s
#atau hexo server, deploy dan uji coba secara lokal
hexo clean
# Membersihkan cache halaman web statis, lalu hexo d untuk menghasilkan ulang
