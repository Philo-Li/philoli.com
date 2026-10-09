---
layout: blog
title: "Bagaimana Memecahkan Rubik di Bawah 30 Detik Tanpa Menghafal Rumus: Bahkan Anak SD Pun Bisa Paham"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Dari pertama kali menyelesaikan hingga Ao100 di bawah 30 detik membutuhkan waktu 89 hari, tanpa menghafal satu pun rumus CFOP. Menggunakan data waktu dari 4441 kali penyelesaian untuk menganalisis empat tahap: di mana saya sering macet di setiap tahap, apa yang saya latih, dan mengapa metode jembatan Roux tidak memerlukan penghafalan rumus."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Empat tahap dari 165 detik menjadi 28 detik" />
</figure>

*Gambar: Empat tahap dari 165 detik menjadi 28 detik. Tahap dua menunjukkan penurunan tercepat, sementara tahap tiga adalah masa plateau terpanjang.*

Pada artikel sebelumnya [《Bagaimana Memecahkan Rubik Tanpa Menghafal Rumus》](/zh/blog/solve-rubiks-cube-without-formulas/), Anda telah mempelajari logika komutator untuk menyelesaikan Rubik tanpa menghafal rumus. Artikel tersebut mendapat banyak pujian hangat.

Jika Anda mengikuti panduan tersebut, mungkin sekarang Anda membutuhkan sekitar dua atau tiga menit untuk menyelesaikannya. Meski masih agak canggung, Anda sudah bisa menyelesaikannya. Kemudian, sebuah pertanyaan baru akan muncul: bagaimana caranya agar lebih cepat?

Jika Anda mencari "speedcubing", semua tutorial akan memberi tahu Anda hal yang sama: untuk bisa di bawah 30 detik, hafalkan dulu rumus CFOP. Ada 41 rumus F2L, 57 OLL, 21 PLL, total 119 rumus. Bahkan jika F2L dilakukan secara intuitif, 78 rumus untuk lapisan atas tetap tidak bisa dihindari. Jika Anda tidak bisa menghafalnya, jangan harap bisa cepat.

Artikel ini ingin memberitahu Anda bahwa Anda bisa mencapai waktu di bawah 30 detik tanpa perlu menghafal rumus sama sekali.

<!--more-->

Saya mulai pertama kali menyelesaikan Rubik pada 7 Mei 2026, dan pada 4 Agustus, Ao100 saya sudah di bawah 30 detik. Itu membutuhkan waktu 89 hari. Sepanjang periode itu, saya tidak menghafal satu pun rumus CFOP, saya hanya bermain di waktu luang. Ini adalah data waktu dari 4441 kali penyelesaian yang saya catat.

![Kurva performa dari 4441 kali penyelesaian](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Gambar: Kurva performa dari 4441 kali penyelesaian. Garis abu-abu menunjukkan waktu setiap penyelesaian, garis gelap adalah tren Ao100, dan titik merah adalah saat rekor pribadi terbaik dipecahkan. Ao100 terbaik adalah 28.22 detik.*

Dengan latihan aktif yang disengaja dan menjaga frekuensi latihan, siapa pun bisa mencapai sub-30 dari nol dalam beberapa bulan.

Apa artinya waktu di bawah 30 detik? Pada [Kejuaraan Dunia Rubik Pertama tahun 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), juara pertama mencatat waktu 22.95 detik, yang kemudian diakui WCA sebagai rekor dunia resmi pertama; peringkat ke-10 adalah 29.11 detik, dan pencetak rekor ini adalah Jessica Fridrich sendiri, penemu CFOP yang akan kita bahas di bagian selanjutnya. Dengan kata lain, waktu sub-30 yang dicapai seorang amatir setelah beberapa bulan latihan hari ini, pada tahun 1982, sudah bisa masuk sepuluh besar dunia.

Selanjutnya, saya akan berbagi dengan Anda bagaimana saya mencapainya selangkah demi selangkah, dan akan membagikan seluruh metode latihan ini kepada Anda.

## Mengapa Dunia Speedcubing Menghafal Rumus

Mari kita pahami satu hal dulu: mengapa 'cepat' dan 'menghafal rumus' seolah-olah terikat erat di benak banyak orang?

Pada awal 1980-an, Profesor Jessica Fridrich, seorang keturunan Ceko (yang kemudian meneliti forensik digital di Binghamton University, AS), menyusun metode penyelesaian berlapis yang kemudian dikenal sebagai CFOP (Cross, F2L, OLL, PLL). Ide di balik metode ini adalah mengidentifikasi semua kemungkinan kasus untuk lapisan atas, dan setiap kasus memiliki rumus optimalnya sendiri. Anda mengenali kasusnya, menjalankan rumus, dan tidak perlu berpikir.

![Jessica Fridrich dan Rubik di kantornya](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Gambar: Jessica Fridrich dan Rubik di kantornya. Pada tahun 1982, ia meraih peringkat ke-10 di Kejuaraan Dunia pertama dengan waktu 29.11 detik, dan CFOP dinamai menurut namanya (Fridrich Method).*

Metode ini sangat cepat. Hampir semua rekor dunia dicapai dengan CFOP. Oleh karena itu, semua tutorial mengajarkannya, semua video membahasnya. 'Belajar speedcubing' menjadi sama dengan 'belajar CFOP', dan belajar CFOP berarti menghafal 119 rumus.

Namun, perlu dicatat bahwa 'menghafal rumus' adalah karakteristik dari metode CFOP, bukan karakteristik dari 'kecepatan' itu sendiri. CFOP memerlukan penghafalan karena metode ini memilih jalur enumerasi. Enumerasi membutuhkan memori, dan itulah harga yang harus dibayar.

Apakah ada metode yang tidak melalui jalur enumerasi? Ada.

## Solusi Tanpa Rumus: Metode Blok Roux

Pada tahun 2003, Gilles Roux, seorang warga Prancis, memperkenalkan pendekatan yang sama sekali berbeda. Alih-alih menyusun lapis demi lapis, metode ini dimulai dengan membangun dua 'blok' 1x2x3 di sisi kiri dan kanan, kemudian menyelesaikan empat sudut lapisan atas, dan terakhir menangani enam edge tersisa menggunakan gerakan lapisan tengah (M) dan lapisan atas (U).

![Gilles Roux dalam kompetisi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Gambar: Gilles Roux dalam kompetisi. Cuplikan dari video kompetisi lama, gambar diperbaiki dan diperbesar dengan AI.*

Di artikel sebelumnya, kita sudah pernah menyelesaikan Rubik dengan kerangka ini. Mari kita lihat lagi keempat langkahnya, kali ini dengan fokus pada 'apa yang perlu diingat di setiap langkah':

| Langkah | Isi | Rumus yang perlu dihafal |
| --- | --- | --- |
| 1. Blok Kiri | Membangun blok 1x2x3 | 0 rumus, murni observasi |
| 2. Blok Kanan | Membangun blok simetris lainnya | 0 rumus, murni observasi |
| 3. CMLL | Menyelesaikan empat sudut lapisan atas | 9 rumus, semua bisa diturunkan dari 3-cycle |
| 4. LSE | Enam edge terakhir | 0 rumus, hanya menggunakan putaran lapisan atas (U) dan lapisan tengah (M) |

Dari empat langkah, tiga di antaranya tidak memerlukan rumus sama sekali. Satu-satunya yang membutuhkan adalah CMLL. Meskipun total ada 42 kasus, Anda tidak perlu menghafal 42 rumus. Rumus 3-cycle sudut R U' L' U R' U' L U yang sudah dibahas di artikel sebelumnya, ditambah dengan cerminannya dan beberapa variasi, sudah bisa mencakup semua kasus, meskipun sedikit lebih lambat.

![Empat langkah Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Gambar: Empat langkah Roux. Setiap langkah hanya menunjukkan blok yang sudah terselesaikan sampai tahap tersebut: Blok Kiri → Blok Kanan → CMLL (empat sudut lapisan atas) → LSE (enam edge terakhir). Cuplikan dari panel 'Solusi' di halaman 3D Rubik saya.*

Inilah mengapa Roux bisa dilakukan tanpa menghafal rumus: metode ini mengompresi bagian yang perlu dihafal ke sudut yang sangat kecil, sementara sisanya sepenuhnya bergantung pada observasi, pemahaman, dan latihan.

## Dari 165 Detik menjadi 28 Detik: Empat Tahap

Berikut adalah perjalanan nyata yang saya lalui. Setiap tahap saya tandai dengan data awal dan akhir, lalu saya jelaskan di mana saya kesulitan dan apa yang saya latih pada tahap tersebut. Titik kesulitan Anda mungkin berbeda dengan saya, tetapi urutannya kemungkinan besar sama.

![Durasi empat tahap](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Gambar: Durasi empat tahap. Tahap satu 3 minggu, tahap dua 11 hari, tahap tiga dua bulan, tahap empat hingga sekarang.*

### Tahap Satu: 165 Detik → 60 Detik (Minggu 1-3)

**Data**: 7 Mei hingga 27 Mei. Rata-rata 165 detik di minggu pertama, dan 68 detik di minggu ketiga.

**Kesulitan**: Blok kiri masih sangat tidak terbiasa, butuh waktu lama untuk menemukan setiap pasang warna. Setelah menemukan satu pasang, pemula cenderung berhenti dan terus mengamati.

![Di mana waktu pemula banyak terbuang](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Gambar: Di mana waktu pemula banyak terbuang. Tangan berhenti, mata mencari-cari di Rubik. Waktu untuk 'mencari' berkali-kali lipat lebih banyak daripada waktu untuk 'memutar'.*

**Apa yang Dilatih**:

Musuh terbesar pada tahap ini bukanlah kecepatan tangan yang lambat, melainkan kecepatan mata. Anda menghabiskan lebih banyak waktu untuk 'mencari' daripada 'memutar'. Jadi:

- Tetapkan posisi pengamatan, jangan memutar Rubik. Seperti yang disebutkan sebelumnya, sudut pandang observasi Roux bersifat tetap. Pada tahap ini, jadikan 'tidak membalik Rubik' sebagai memori otot. Setiap kali ingin membalik Rubik, berhenti dan tanyakan pada diri sendiri: apakah saya bisa melihat blok yang saya inginkan dari sudut ini?
- Slow turning (memutar perlahan). Jangan menggunakan timer, tetapi gerakan harus berkesinambungan, tanpa jeda sedikit pun. Setiap gerakan bisa sangat lambat, tapi jangan sampai berhenti. Intinya adalah saat tangan melakukan gerakan sebelumnya, mata sudah harus fokus pada gerakan berikutnya. Ini adalah inti dari slow turning. Kedengarannya seperti memperlambat diri, padahal sebenarnya ini melatih mata Anda untuk melihat hubungan antara posisi blok dan tempat seharusnya blok itu berada.
- Hanya latih blok pertama. Acak, bangun blok kiri, acak lagi, bangun blok kiri lagi. Jangan melanjutkan ke langkah berikutnya. Blok pertama adalah langkah paling fleksibel dalam metode Roux dan yang paling efektif untuk melatih observasi.

Jangan mempelajari rumus baru apa pun pada tahap ini. Hambatan Anda saat ini bukan pada rumus.

### Tahap Dua: 60 Detik → 40 Detik (Minggu 4-5)

**Data**: 27 Mei hingga 7 Juni, 11 hari. Ini adalah periode penurunan tercepat dalam seluruh proses, dan juga periode di mana saya paling banyak berlatih, 723 kali di minggu pertama bulan Juni.

**Kesulitan**: Gerakan tidak berkesinambungan. Rubik sering macet.

**Apa yang Dilatih**:

Pada tahap ini, Anda perlu mengoptimalkan gerakan di setiap langkah, dan berdasarkan pemahaman, meningkatkan kemahiran setiap gerakan.

- Blok kedua. Blok kedua lebih sulit daripada blok pertama karena ruang yang tersedia berkurang separuh, dan blok kiri yang sudah selesai tidak boleh dirusak. Putaran kunci adalah R, r (dua lapisan kanan), M, U. Pada tahap ini, Anda harus belajar menggunakan r dan M untuk memindahkan blok sebagai pengganti R, sehingga blok kiri tidak akan pernah rusak. Mengoptimalkan urutan gerakan berarti menghemat waktu. Misalnya, memutar searah jarum jam tiga kali sama dengan memutar berlawanan arah jarum jam sekali.
- Mahir menggunakan lapisan M. Langkah terakhir Roux sepenuhnya menggunakan M dan U. Kelancaran putaran lapisan M secara langsung menentukan batas bawah kecepatan Anda. Gunakan jari manis atau jari tengah untuk mendorong M, dan mulailah melatih ritme seperti M' U M' U.
- CMLL: Mengenali bentuk. Di artikel sebelumnya, kita 'mencoba' mencari empat sudut dengan 3-cycle. Sekarang, kita harus mulai melihat dulu sebelum bertindak: sebelum membalik lapisan atas, lihat orientasi warna kuning pada keempat sudut, tentukan apakah ada 0, 1, 2, atau 4 sudut yang sudah benar, lalu langsung lakukan gerakan yang sesuai. Anda juga bisa meningkatkan efisiensi secara signifikan dengan sedikit rumus saja, ini sangat menguntungkan. Sebagian besar rumus ini tidak perlu dihafal mati-matian, cukup pahami sambil melakukannya.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Perspektif saat membangun blok kanan" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Gambar kiri: Perspektif saat membangun blok kanan. Blok kiri sudah selesai, gunakan hanya empat putaran R, r, M, U untuk memasukkan pasangan sudut-edge di sisi kanan, blok kiri tidak akan pernah tersentuh. Gambar kanan: M' U M, salah satu rangkaian gerakan yang paling sering digunakan di paruh kedua Roux. Lapisan tengah naik, lapisan atas diputar sekali, lapisan tengah kembali, tiga langkah ini menukar sepasang edge di lapisan atas dan tengah.*

Anda bisa melihat [perpustakaan rumus Metode Roux](/zh/projects/rubiks-cube/roux#cmll) yang saya susun. Halaman CMLL berisi dua tahap: 7 rumus orientasi + 2 rumus permutasi, total 9 rumus. Ini adalah pilihan yang sangat efisien untuk meningkatkan kecepatan, mudah dipelajari, dan setiap set rumus yang dikuasai bisa mempercepat sekitar 1-2 detik. Dengan sedikit latihan, Anda akan cepat mahir, beberapa di antaranya sudah diperkenalkan di artikel sebelumnya, dan Anda tidak perlu mengingat semuanya untuk bisa di bawah 30 detik.

![Langkah pertama CMLL dua tahap, tujuh orientasi sudut](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Gambar: Langkah pertama CMLL dua tahap, tujuh orientasi sudut. Dalam tampilan atas, kuning adalah warna sisi atas yang menghadap ke atas, sedangkan garis kecil di sisi luar menunjukkan bahwa warna sisi atas sudut menghadap ke samping. Kenali bentuknya berdasarkan jumlah sudut kuning: 0 adalah H atau Pi, 1 adalah S atau AS, 2 adalah U, T, atau L.*

Setelah menyelaraskan warna kuning di bagian atas, Anda bisa menggunakan dua rumus ini untuk menyelaraskan sisi-sisi sudut.

Jika ada satu sisi yang sudah konsisten warnanya, misalnya merah sudah berada di sisi yang sama, putar ke sisi kiri, lalu Anda bisa memilih rumus pertukaran berdekatan. Jika tidak ada sisi yang konsisten warnanya, pilih rumus pertukaran diagonal.

![Langkah kedua CMLL dua tahap, dua posisi sudut](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Gambar: Langkah kedua CMLL dua tahap, dua posisi sudut. Pada gambar kiri, dua sudut di sisi kiri sudah berwarna merah yang sama, gunakan pertukaran berdekatan; pada gambar kanan, tidak ada sisi yang sama warnanya, gunakan pertukaran diagonal.*

Anda bisa memahami setiap set rumus melalui banyak slow turning. Jangan menganggapnya sebagai rumus, melainkan sebagai serangkaian gerakan tetap. Anda bisa menemukannya sendiri melalui eksplorasi perlahan, tetapi mencantumkannya di sini dapat membantu Anda menghindari jalan buntu.

Satu hal lagi yang lebih efektif daripada latihan apa pun: investasikan sedikit uang untuk membeli Rubik baru. Jika Rubik Anda masih jenis lama yang berbunyi 'klik-klak' dan sering macet saat diputar, belilah Rubik 3x3 modern dengan magnet. Rubik terbaru akan membuat Anda merasakan kekuatan optimasi teknik, putaran yang mulus, posisi otomatis, dan hampir tidak akan macet. Hanya dengan mengganti Rubik, waktu rata-rata Anda bisa langsung lebih cepat 15 detik. Pilihan terbaik dari segi harga dan performa adalah [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), sekitar dua puluh dolar, sudah cukup untuk mencapai sub-20.

### Tahap Tiga: 40 Detik → 30 Detik (Minggu 5 – Minggu 13, Dua Bulan)

**Data**: 7 Juni hingga 4 Agustus. Ao100 turun dari 39.8 detik menjadi 29.9 detik, membutuhkan waktu 58 hari. Pada tahap ini, kadang-kadang mungkin muncul waktu di bawah 30 detik, tetapi itu hanya terjadi jika Anda sangat beruntung. Dan seiring dengan penurunan waktu rata-rata penyelesaian, kesulitan untuk meningkatkan 1 detik akan meningkat secara eksponensial.

![Rata-rata waktu harian](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Gambar: Rata-rata waktu harian. Setelah pertengahan Juni, kurva hampir mendatar, berjuang di antara 30-40 detik selama dua bulan.*

Ini adalah masa plateau. Setiap orang akan mengalaminya, dan saya bertahan di sini selama dua bulan.

**Kesulitan**: Enam edge di lapisan atas sangat lambat diselesaikan, tidak memahami logikanya, setiap kali mengandalkan coba-coba, membuang banyak waktu. Blok kiri dan kanan masih kurang mahir.

**Apa yang Dilatih**:

- EO recognition (identifikasi EO). Di artikel sebelumnya, sudah dijelaskan bahwa ada beberapa kasus edge yang salah orientasi (bad edges): 0, bukan 0 atau 4, 4 (2 di atas, 2 di bawah), 4 (semua di lapisan atas), 4 (3 di atas, 1 di bawah). Tujuan pada tahap ini adalah: begitu blok selesai dibangun, tanpa perlu menghitung, langsung mengenali jenis kasusnya. Cara latihannya adalah setelah diacak, hanya sampai CMLL selesai, lalu jeda, sebutkan jumlah bad edges, baru lanjutkan.
- Banyak orang tidak memahami gerakan di sini. Tahap EO pada akhirnya bertujuan untuk membentuk pola panah '3 di atas, 1 di bawah', karena jika Rubik sudah selesai, satu langkah acak saja bisa langsung menjadi pola panah. Jadi, dengan pemikiran terbalik, ini adalah langkah terakhir sebelum penyelesaian. Oleh karena itu, berapapun jumlah bad edges, tujuan akhirnya adalah membentuk pola panah. Jika ada 4 bad edges di atas, tukar sepasang edge atas-bawah untuk menurunkan satu bad edge dan membentuk panah. Jika ada 2 di atas dan 2 di bawah, tukar sepasang edge atas-bawah untuk menaikkan satu bad edge dan membentuk panah. Jika ada 1 di atas dan 1 di bawah, atau 2 di atas, gunakan M' U M untuk mengubahnya menjadi kasus sebelumnya, lalu bentuk panah. Anda bisa menemukan langkah terbaik untuk kasus 1/1 melalui banyak observasi dan pemikiran.
- Latih look-ahead (antisipasi) secara intensif. Ini adalah hal terpenting untuk beralih dari 40 detik ke 30 detik, dan juga hal yang paling tidak intuitif: putar sedikit lebih lambat, lihat lebih jauh ke depan. Saat membangun blok kiri, mata jangan melihat blok yang sedang dimasukkan, tapi lihat di mana blok berikutnya berada. Awalnya akan terasa sangat aneh, performa akan menurun, tetapi setelah seminggu, tiba-tiba akan membaik.
- CMLL tanpa ragu. Jika Anda masih harus berpikir setiap kali akan melakukan suatu gerakan, berarti gerakan itu belum sepenuhnya Anda kuasai. Latih setiap gerakan secara terpisah 50 kali, sampai tangan Anda bergerak secara otomatis begitu melihat bentuknya.

![Bentuk panah](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Gambar: Bentuk panah. Tiga bad edges di lapisan atas (disorot biru kehijauan) membentuk panah, menunjuk ke bad edge di lapisan bawah. Pada kondisi ini, satu M' U M bisa menyelesaikan keempatnya sekaligus. [Buka kondisi ini di Rubik 3D](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) untuk melihat langkah demi langkah.*

![Enam kasus EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Gambar: Enam kasus EO. Label di kiri atas adalah jumlah bad edges (atas / bawah), kuning adalah good edges, dan bingkai biru kehijauan adalah bad edges. Hanya kasus panah yang memerlukan rumus, lima kasus lainnya diubah menjadi panah terlebih dahulu.*

Untuk penyelesaian edge kiri dan kanan, dengan asumsi kuning di atas, putih di bawah, dan blok kiri berwarna merah sebagai contoh, maka yang perlu diselesaikan selanjutnya adalah edge kuning-merah + edge kuning-oranye (bagian yang disorot). Ide utamanya adalah, mencari cara untuk menukar edge kuning-merah ke lapisan bawah, dan edge kuning-oranye juga ke lapisan bawah. Kedua edge tersebut akan berada berlawanan di lapisan bawah. Kemudian, putar lapisan atas ke posisi yang tepat, dan M2 U atau M2 U' dapat menyelesaikan edge kiri dan kanan di lapisan U.

Untuk membantu pemahaman Anda, saya telah menyusun keenam kasus EO di [halaman LSE perpustakaan rumus Metode Roux](/zh/projects/rubiks-cube/roux#lse). Setiap kali Anda mengklik 'Lihat Detail', kondisi yang sesuai akan terbuka di Rubik 3D, dengan bad edges disorot secara otomatis. Halaman yang sama juga berisi semua kasus untuk penyelesaian UL/UR berikutnya dan empat edge terakhir.

Penurunan volume latihan pada tahap ini bukanlah hal buruk. Masa plateau tidak bisa diatasi hanya dengan latihan kuantitas, melainkan dengan mengubah satu kebiasaan buruk yang spesifik. Pengalaman saya adalah mengubah satu hal setiap kali.

### Tahap Empat: 30 Detik → 28 Detik (Setelah Minggu 13)

**Data**: Setelah 4 Agustus. Jumlah latihan yang tercatat sepanjang bulan September adalah 122 kali, padahal sebenarnya banyak latihan yang tidak dicatat. Saya sudah menjadikan Rubik sebagai mainan di meja, mengambilnya kapan saja untuk dimainkan. Saya memainkannya saat suasana hati sedang baik, saat merasa gelisah atau cemas, di sela-sela pekerjaan, atau saat bosan. Saya membiarkan bermain Rubik terintegrasi ke dalam hidup. Ao100 juga secara bertahap turun dari 29.9 menjadi 28.2.

**Kesulitan**: Tidak ada hambatan yang jelas, hanya kurang mahir.

**Apa yang Dilatih**:

Jika kecepatan rata-rata Anda masih di atas 30 detik, satu-satunya hal yang perlu Anda lakukan adalah terus berlatih secara intensif, bukan menghafal rumus baru.

Terus latih antisipasi melalui slow turning, Anda akan semakin cepat.

Sering-seringlah bermain Rubik, letakkan Rubik di tempat yang mudah dijangkau, seperti meja kerja, sehingga Anda bisa memainkannya di sela-sela pekerjaan. Anda juga bisa sering merekam video penyelesaian Anda sendiri untuk melihat di tahap mana Anda menghabiskan waktu paling banyak, lalu lakukan optimasi yang terarah. Inilah yang disebut deliberate practice. Kecepatan kemajuan Anda tidak tergantung pada total jumlah latihan biasa Anda, melainkan pada jumlah latihan yang disengaja.

Kemudian Anda akan menyadari, setelah melewati masa bottleneck 30-35 detik, kecepatan Anda akan menurun satu level lagi.

Selamat jika Anda sudah mencapai tahap ini! Di mata pemula, Anda sudah menjadi pemain yang sangat hebat!

## Harga dari Tidak Menghafal Rumus

Sampai di sini, mari kita jujur. Tidak menghafal rumus bukannya tanpa biaya.

Tahap CMLL menjadi lambat. Menggunakan 9 rumus untuk mencakup 42 kasus berarti beberapa kasus harus dilakukan dua kali. Orang yang menghafal seluruh CMLL bisa lebih cepat dua atau tiga detik dari saya pada langkah ini.

Teknik lapisan M memiliki ambang batas yang tinggi. Paruh kedua Roux sepenuhnya mengandalkan lapisan M. Lapisan M lebih sulit diputar daripada R dan U, mudah macet, dan membutuhkan Rubik dengan kualitas yang lebih baik.

Jangan khawatir tentang batas atas. Ada juga pemain top yang menggunakan Roux dan berhasil masuk jajaran terdepan dunia, metode itu sendiri tidak memiliki batas atas. Namun, untuk mencapai di bawah 15 detik, kemungkinan besar Anda perlu melengkapi ke-42 rumus CMLL. Tapi itu urusan tahap lain. Untuk di bawah 30 detik, tidak perlu.

Lagipula, hampir setiap pemain kelas dunia yang melakukan penyelesaian satu tangan menggunakan metode Roux, karena metode ini memang sangat cocok untuk operasi satu tangan.

**Rekor Tercepat Menggunakan Roux dalam Kompetisi Resmi (WCA):**

- Single 4.11 detik, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipina), Valenzuela Cubing Open 2023, diakui sebagai rekor single resmi Roux tercepat ([video rekonstruksi](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Average 5.98 detik, juga olehnya, pada tahun 2019, saat itu merupakan rekor Asia dan juga rata-rata sub-6 resmi ketiga dalam sejarah ([profil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- Dia juga [pemegang rekor dunia satu tangan](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): average 8.09, single 6.05 (2024). Di kalangan one-handed cuber, Roux secara luas dianggap sebagai metode terbaik.

Menurut saya, pertukaran ini sangat sepadan. Anda 'mengorbankan' dua atau tiga detik waktu CMLL, dan sebagai gantinya Anda mendapatkan: memahami setiap langkah yang Anda lakukan, tidak akan lupa bahkan setelah tiga bulan tidak menyentuh Rubik, dan bisa menemukan solusi untuk Rubik apa pun yang belum pernah Anda lihat sebelumnya.

## Ringkasan

![Penyelesaian selesai](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Dari bisa menyelesaikan hingga di bawah 30 detik, ini bukanlah proses menghafal rumus, melainkan proses melatih koordinasi tangan, mata, dan otak.

Empat tahap, empat hal: pertama, belajar melihat tanpa memutar Rubik; kedua, belajar membangun blok kanan tanpa merusak blok kiri; ketiga, belajar melihat langkah berikutnya saat melakukan langkah saat ini; dan terakhir, biarkan tangan mengikuti mata.

Rumus bukanlah sumber kecepatan. Observasi-lah yang sebenarnya.

Belajarlah membangun umpan balik positif melalui kemajuan di setiap tahapan. Bahkan latihan kemahiran pun tidak harus membosankan, terutama saat Anda menemukan kejutan memecahkan rekor lagi. Terutama di tahap awal dan menengah, Anda akan merasakan kegembiraan memecahkan rekor setiap hari.

Semua rumus dan kasus yang disebutkan dalam artikel ini telah saya kumpulkan di [perpustakaan rumus Metode Roux](/zh/projects/rubiks-cube/roux). Anda bisa kembali memeriksanya jika Anda kesulitan.

Dunia Rubik penuh dengan kesenangan tak terbatas, semoga Anda menikmati bermain!

## Lampiran 1: Daftar Latihan untuk Setiap Tahap

**Tahap Satu (> 60 Detik)**

- Tetapkan posisi pengamatan, jangan membalik Rubik selama seluruh proses penyelesaian
- Temukan warna blok berikutnya yang diinginkan tanpa jeda
- Slow turning, sebutkan maksud setiap langkah
- Hanya latih blok kiri, ulangi 50 kali

**Tahap Dua (60 → 40 Detik)**

- Blok kanan hanya menggunakan R, r, M, U, jangan menyentuh blok kiri
- Latihan CMLL dua tahap
- Latihan ritme M' U M' U, 5 menit setiap hari

**Tahap Tiga (40 → 30 Detik)**

- Begitu CMLL selesai, jeda dan langsung sebutkan jumlah bad edges
- Slow turning + look-ahead: mata selalu melihat blok berikutnya
- Setidaknya 20 kali penyelesaian berkualitas setiap hari

**Tahap Empat (< 30 Detik)**

- Rekam video untuk menemukan jeda
- Finger tricks: R U R' U' single-finger, jari manis untuk M-slice
- 20 kali penyelesaian berkualitas setiap hari, jangan hanya menumpuk kuantitas

## Lampiran 2: Alat

- **csTimer**: [cstimer.net](https://cstimer.net/). Aktifkan statistik Ao5 / Ao12 / Ao100, Ao100 adalah tingkat kemampuan Anda yang sebenarnya, hasil single adalah keberuntungan.
- **Rubik 3D**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Semua rumus dalam artikel ini dapat dimasukkan di sini untuk melihat animasinya.
- **Perpustakaan Rumus Metode Roux Ramah Pemula**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Berisi pola penyisipan umum untuk blok kiri dan kanan, 9 rumus CMLL dua tahap, dan semua kasus LSE (EO, UL/UR, empat edge terakhir). Setiap gambar dapat dibuka di Rubik 3D, secara otomatis menyembunyikan blok yang tidak relevan dan menyorot edge yang perlu digerakkan.
- **csTimer Training Analyzer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Seret file ekspor csTimer Anda ke dalamnya, dan Anda akan melihat tren performa Anda sendiri, kurva Ao5/Ao12/Ao100, peningkatan PB, tabel pencapaian (kapan pertama kali sub-60, sub-40, sub-30), dan kurva latihan Power Law. Semua gambar dalam artikel ini berasal dari sini. Data hanya diproses di browser Anda, tidak akan diunggah. Jika Anda tidak memiliki file ekspor, Anda bisa memuat data 4441 kali saya terlebih dahulu untuk melihat efeknya.

*Artikel ini berisi tautan afiliasi Amazon: Jika Anda membeli melalui tautan ini, saya akan menerima sedikit komisi, dan harga untuk Anda tetap sama.*

## Bacaan Lebih Lanjut

- [Bagaimana Memecahkan Rubik Tanpa Menghafal Rumus: Bahkan Anak SD Pun Bisa Paham](/zh/blog/solve-rubiks-cube-without-formulas)
