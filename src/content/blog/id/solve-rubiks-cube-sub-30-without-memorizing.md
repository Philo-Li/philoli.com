---
layout: blog
title: "Cara Menyelesaikan Rubik di Bawah 30 Detik Tanpa Menghafal Algoritma: Mudah Dipahami Anak SD"
date: 2026-10-09 12:00:00
tags:
  - Rubik
  - Tutorial
  - Metode Roux
  - Speedcubing
  - Latihan Disengaja
categories: Kutak-katik Harian
description: "Butuh 89 hari dari solve pertama hingga mencapai Ao100 di bawah 30 detik, tanpa menghafal satu pun algoritma CFOP. Saya membedah empat tahapan menggunakan data 4441 solve yang tercatat: di mana Anda sering macet, apa yang harus dilatih di setiap tahapan, dan mengapa Metode Roux tidak memerlukan hafalan algoritma."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Empat tahapan dari 165 detik hingga 28 detik" />
</figure>

*Gambar: Empat tahapan dari 165 detik hingga 28 detik. Tahap dua mengalami penurunan tercepat, sedangkan tahap tiga adalah fase plateau terpanjang.*

Pada artikel sebelumnya [《Cara Menyelesaikan Rubik Tanpa Menghafal Algoritma》](/id/blog/solve-rubiks-cube-without-formulas/), Anda telah belajar bagaimana menyelesaikan Kubus Rubik tanpa menghafal algoritma, hanya dengan memahami logika komutator. Artikel itu mendapat banyak pujian hangat.

Jika Anda telah mencobanya, mungkin sekarang Anda membutuhkan sekitar dua hingga tiga menit untuk menyelesaikannya. Meskipun masih canggung, Anda sudah bisa menyelesaikannya. Lalu, sebuah pertanyaan baru akan muncul: bagaimana cara agar lebih cepat?

Ketika Anda mencari "speedcubing Rubik", semua tutorial akan memberi tahu Anda hal yang sama: jika ingin masuk di bawah 30 detik, Anda harus menghafal algoritma CFOP terlebih dahulu. Ada 41 algoritma F2L, 57 OLL, dan 21 PLL—total 119 algoritma. Bahkan jika Anda melakukan F2L secara intuitif, 78 algoritma untuk lapisan atas tetap tidak bisa dihindari. Jika tidak dihafal, jangan harap bisa cepat.

Artikel ini ingin memberi tahu Anda bahwa Anda bisa masuk di bawah 30 detik tanpa perlu menghafal algoritma sama sekali.

<!--more-->

Saya mulai menyelesaikan Kubus Rubik pertama kali pada 7 Mei 2026, dan pada 4 Agustus, Ao100 saya sudah di bawah 30 detik. Itu butuh 89 hari. Selama periode ini, saya tidak menghafal satu pun algoritma CFOP, saya hanya bermain di waktu luang. Berikut adalah data waktu dari 4441 solve yang saya catat.

![Kurva waktu 4441 solve](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Gambar: Kurva waktu dari 4441 solve. Garis abu-abu menunjukkan waktu setiap solve, garis gelap menunjukkan tren Ao100, dan titik merah adalah saat PB (Personal Best) diperbarui. Ao100 terbaik saya adalah 28,22 detik.*

Dengan latihan yang disengaja dan menjaga frekuensi latihan, siapa pun bisa mencapai sub-30 dari nol dalam beberapa bulan.

Apa itu sub-30 detik? Pada [Kejuaraan Dunia Rubik's Cube pertama tahun 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), waktu juara adalah 22,95 detik, yang juga diakui WCA sebagai rekor dunia resmi pertama; peringkat ke-10 adalah 29,11 detik, dan pencetak waktu ini adalah Jessica Fridrich sendiri, penemu CFOP yang akan kita bahas di bagian selanjutnya. Dengan kata lain, sub-30 yang dicapai seorang amatir dalam beberapa bulan saat ini, pada tahun 1982 sudah bisa masuk sepuluh besar dunia.

Selanjutnya, saya akan berbagi dengan Anda bagaimana saya mencapainya selangkah demi selangkah, dan akan membagikan metode latihan lengkapnya.

## Mengapa dunia speedcubing selalu menghafal algoritma

Mari kita pahami dulu satu hal: mengapa "cepat" dan "menghafal algoritma" begitu erat kaitannya di benak banyak orang?

Pada awal tahun 1980-an, seorang profesor keturunan Ceko bernama Jessica Fridrich (yang kemudian meneliti forensik digital di Binghamton University, AS) menyusun metode penyelesaian berlapis, yang kemudian dikenal sebagai CFOP (Cross, F2L, OLL, PLL). Ide di balik metode ini adalah: mengelompokkan semua kemungkinan situasi pada lapisan atas, dan setiap situasi dipasangkan dengan satu algoritma optimal. Anda mengenali situasinya, menjalankan algoritma, tanpa perlu berpikir.

![Jessica Fridrich dan Rubik di kantornya](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Gambar: Jessica Fridrich dan Rubik di kantornya. Pada tahun 1982, ia meraih peringkat ke-10 di Kejuaraan Dunia pertama dengan 29,11 detik. CFOP dinamai menurut namanya (Fridrich Method).*

Metode ini sangat cepat. Hampir semua rekor dunia dicapai dengan CFOP. Oleh karena itu, semua tutorial mengajarkannya, semua video membahasnya, "belajar speedcubing" sama dengan "belajar CFOP", dan belajar CFOP sama dengan menghafal 119 algoritma.

Namun, perlu diingat, "menghafal algoritma" adalah ciri khas dari metode CFOP, bukan ciri khas dari "kecepatan" itu sendiri. CFOP memerlukan hafalan karena ia memilih jalur enumerasi (memetakan setiap kasus). Enumerasi membutuhkan memori, dan itulah harga yang harus dibayar.

Apakah ada metode yang tidak mengikuti jalur enumerasi ini? Ada.

## Metode Tanpa Menghafal Algoritma: Roux Bridge

Pada tahun 2003, seorang Prancis bernama Gilles Roux memperkenalkan pendekatan yang sama sekali berbeda. Alih-alih menyusun lapis demi lapis, metode ini dimulai dengan membangun dua "jembatan" 1x2x3 di sisi kiri dan kanan, lalu menangani empat corner lapisan atas, dan akhirnya hanya menyisakan enam potongan edge, yang diselesaikan dengan gerakan lapisan tengah M dan lapisan atas U.

![Gilles Roux dalam kompetisi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Gambar: Gilles Roux dalam kompetisi. Cuplikan dari video kompetisi lama, gambar diperbaiki dan diperbesar dengan AI.*

Pada artikel sebelumnya, kita sudah pernah menyelesaikan Rubik dengan kerangka ini. Mari kita lihat lagi keempat langkahnya, kali ini berfokus pada "apa yang perlu diingat di setiap langkah":

| Langkah | Konten | Algoritma yang perlu dihafal |
| --- | --- | --- |
| 1. First Block (FB) | Membangun balok 1x2x3 | 0, murni observasi |
| 2. Second Block (SB) | Membangun balok simetris lainnya | 0, murni observasi |
| 3. CMLL | Menyelesaikan empat potongan corner lapisan atas | 9, semua dapat diturunkan dari 3-cycle |
| 4. LSE | Enam potongan edge terakhir | 0, hanya menggunakan rotasi lapisan atas dan tengah (M dan U) |

Tiga dari empat langkah tidak memerlukan algoritma apa pun. Satu-satunya yang dibutuhkan, CMLL, memiliki total 42 kasus, tetapi Anda tidak perlu menghafal 42 algoritma. Algoritma 3-cycle corner R U' L' U R' U' L U yang dibahas di artikel sebelumnya, ditambah cerminannya dan beberapa variasi, sudah cukup untuk mencakup semua kasus, hanya saja sedikit lebih lambat.

![Empat langkah Metode Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Gambar: Empat langkah Metode Roux, setiap langkah hanya menunjukkan potongan yang sudah terselesaikan hingga tahap tersebut: First Block (FB) → Second Block (SB) → CMLL (empat corner lapisan atas) → LSE (enam edge terakhir). Cuplikan dari panel "Metode Solve" pada halaman Rubik 3D saya.*

Inilah mengapa Roux bisa dilakukan tanpa menghafal algoritma: metode ini memadatkan bagian yang perlu diingat ke sudut yang sangat kecil, sisanya diserahkan sepenuhnya pada observasi, pemahaman, dan keahlian.

## Dari 165 Detik menjadi 28 Detik: Empat Tahapan

Berikut adalah perjalanan yang saya alami. Setiap tahapan saya tandai dengan data awal dan akhir, lalu menjelaskan di mana saya sering macet dan apa yang saya latih pada tahapan tersebut. Titik macet Anda mungkin berbeda dengan saya, tetapi urutannya kemungkinan besar sama.

![Rentang waktu empat tahapan](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Gambar: Rentang waktu empat tahapan. Tahap satu 3 minggu, tahap dua 11 hari, tahap tiga dua bulan, tahap empat hingga saat ini.*

### Tahap Satu: 165 Detik → 60 Detik (Minggu ke-1 hingga ke-3)

**Data**: 7 Mei hingga 27 Mei. Minggu pertama rata-rata 165 detik, minggu ketiga 68 detik.

**Di mana Anda sering macet**: First Block (FB) masih sangat belum mahir, setiap pasangan corner-edge membutuhkan waktu lama untuk ditemukan. Lalu, setelah menemukan satu pasangan, pemula cenderung berhenti untuk terus mengamati.

![Waktu pemula dihabiskan untuk apa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Gambar: Di mana waktu pemula dihabiskan. Tangan diam, mata mencari-cari di Rubik, waktu "mencari" berkali-kali lipat lebih banyak daripada waktu "memutar".*

**Apa yang harus dilatih**:

Musuh terbesar pada tahap ini bukanlah kecepatan tangan yang lambat, melainkan kecepatan mata yang lambat. Waktu yang Anda habiskan untuk "mencari" jauh lebih banyak daripada waktu "memutar". Jadi:

-   Pertahankan posisi observasi yang tetap, jangan melakukan rotasi kubus. Seperti yang disebutkan di artikel sebelumnya, sudut pandang observasi Roux bersifat tetap. Pada tahap ini, Anda harus menjadikan "tidak memutar Rubik" sebagai memori otot. Setiap kali ingin memutar Rubik, berhenti, dan tanyakan pada diri sendiri: bisakah saya melihat potongan yang saya inginkan dari sudut ini?
-   Latihan pelan (slow solving). Jangan gunakan timer, tetapi setiap gerakan harus berkesinambungan, tanpa jeda. Setiap gerakan bisa sangat lambat, tetapi jangan sampai berhenti. Kuncinya adalah saat tangan melakukan gerakan sebelumnya, mata harus fokus pada gerakan berikutnya. Ini adalah inti dari slow solving. Kedengarannya seperti memperlambat, tetapi sebenarnya ini melatih mata Anda untuk melihat hubungan antara posisi potongan dan posisi yang seharusnya.
-   Hanya berlatih First Block (FB). Scramble, bangun FB, lalu scramble lagi, bangun FB lagi. Jangan lanjutkan ke langkah berikutnya. First Block (FB) adalah langkah paling bebas dalam Roux, dan juga langkah yang paling efektif untuk melatih observasi.

Jangan mempelajari algoritma baru pada tahap ini. Hambatan Anda saat ini bukan pada algoritma.

### Tahap Dua: 60 Detik → 40 Detik (Minggu ke-4 hingga ke-5)

**Data**: 27 Mei hingga 7 Juni, 11 hari. Ini adalah periode penurunan tercepat dalam seluruh proses, dan juga periode di mana saya paling banyak berlatih, 723 kali pada minggu pertama Juni.

**Di mana Anda sering macet**: Gerakan tidak berkesinambungan. Kubus macet.

**Apa yang harus dilatih**:

Pada tahap ini, Anda perlu mengoptimalkan gerakan di setiap tahapan, dan di atas pemahaman, tingkatkan kemahiran setiap gerakan.

-   Second Block (SB). Second Block (SB) lebih sulit daripada First Block (FB) karena ruang yang tersedia separuhnya, dan Anda tidak boleh merusak First Block (FB) yang sudah selesai. Gerakan pentingnya adalah R, r (dua lapisan kanan), M, U. Pada tahap ini, Anda harus belajar menggunakan r dan M untuk memindahkan potongan, sehingga First Block (FB) tidak akan pernah rusak. Mengoptimalkan langkah gerakan berarti menghemat waktu. Misalnya, memutar searah jarum jam tiga kali sama dengan memutar berlawanan arah jarum jam sekali.
-   Mahir menggunakan lapisan M. Langkah terakhir Roux sepenuhnya mengandalkan M dan U, sehingga kelancaran putaran lapisan M secara langsung menentukan batas bawah kecepatan Anda. Gunakan jari manis atau jari tengah untuk mendorong M, mulailah berlatih ritme seperti M' U M' U.
-   Pengenalan pola CMLL. Di artikel sebelumnya, kita "mencoba-coba" empat corner dengan 3-cycle. Sekarang, mulailah dengan melihat lalu melakukan: sebelum memutar lapisan atas, lihat orientasi warna kuning pada keempat corner, tentukan apakah ada 0, 1, 2, atau 4 corner yang benar, lalu langsung lakukan gerakan yang sesuai. Anda juga bisa mendapatkan peningkatan efisiensi yang signifikan dengan sedikit algoritma, ini sangat sepadan. Sebagian besar algoritma ini tidak perlu dihafal mati-matian, pahami saja sambil melakukannya.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Sudut pandang saat membangun Second Block" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Gambar kiri: Sudut pandang saat membangun Second Block (SB). First Block (FB) sudah selesai, hanya gunakan empat gerakan R, r, M, U untuk memasukkan pasangan corner-edge di sisi kanan, First Block (FB) tidak akan pernah tersentuh. Gambar kanan: M' U M, salah satu rangkaian gerakan yang paling sering digunakan di paruh kedua Roux. Lapisan tengah naik, lapisan atas berputar sekali, lapisan tengah kembali, tiga langkah ini menukar sepasang edge di lapisan atas dan tengah.*

Anda bisa melihat [perpustakaan algoritma Metode Roux](/id/projects/rubiks-cube/roux) yang saya susun. Halaman CMLL berisi dua bagian: 7 algoritma orientasi + 2 algoritma permutasi, total 9 algoritma. Ini adalah pilihan paling hemat biaya untuk meningkatkan kecepatan, sangat mudah dipelajari, dan setiap kelompok yang mahir dapat mempercepat sekitar 1–2 detik. Dengan sedikit latihan, Anda akan segera mahir. Beberapa di antaranya sudah diperkenalkan di artikel sebelumnya, dan Anda tidak perlu mengingat semuanya untuk bisa masuk di bawah 30 detik.

![Langkah pertama CMLL dua bagian, tujuh orientasi corner](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Gambar: Langkah pertama CMLL dua bagian, tujuh orientasi corner. Dalam pandangan atas, kuning adalah warna sisi atas yang menghadap ke atas, sedangkan bilah kecil di sisi luar menunjukkan orientasi warna sisi atas pada corner tersebut ke samping. Kenali pola berdasarkan jumlah corner kuning: 0 adalah H atau Pi, 1 adalah S atau AS, 2 adalah U, T, atau L.*

Setelah menyelaraskan bagian atas yang berwarna kuning, Anda dapat menggunakan dua algoritma ini untuk menyelaraskan sisi-sisi corner.

Jika satu sisi sudah berwarna sama, misalnya merah sudah berada di sisi yang sama, putar ke sisi kiri, lalu Anda dapat memilih algoritma pertukaran bersebelahan. Jika tidak ada sisi yang berwarna sama, pilih algoritma pertukaran diagonal.

![Langkah kedua CMLL dua bagian, dua posisi corner](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Gambar: Langkah kedua CMLL dua bagian, dua posisi corner. Pada gambar kiri, warna merah pada dua corner kiri sudah sama, gunakan pertukaran bersebelahan; pada gambar kanan, tidak ada sisi yang sama, gunakan pertukaran diagonal.*

Anda bisa memahami setiap kelompok algoritma melalui latihan pelan (slow solving) yang intens. Jangan anggap ini sebagai rumus, melainkan serangkaian gerakan tetap. Anda juga bisa menemukan gerakan-gerakan ini sendiri melalui eksplorasi, namun daftar ini dapat membantu Anda menghindari jalan buntu.

Satu hal lagi, yang lebih efektif daripada latihan apa pun: investasikan sedikit uang untuk membeli Rubik baru. Jika Rubik Anda masih yang berbunyi 'klik-klik' saat diputar dan mudah macet, belilah Rubik 3x3 modern yang bermagnet. Rubik terbaru akan membuat Anda merasakan kekuatan optimasi teknik; putarannya halus, otomatis kembali ke posisi semula, dan hampir tidak pernah macet. Hanya dengan mengganti Rubik, rata-rata waktu Anda bisa langsung lebih cepat 15 detik. Pilihan yang paling ekonomis adalah [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), sekitar dua puluh dolar, cukup untuk mencapai sub-20.

### Tahap Tiga: 40 Detik → 30 Detik (Minggu ke-5 hingga ke-13, dua bulan)

**Data**: 7 Juni hingga 4 Agustus. Ao100 saya berkisar dari 39,8 detik hingga 29,9 detik, membutuhkan waktu 58 hari. Pada tahap ini, mungkin sesekali akan muncul waktu di bawah 30 detik, tetapi hanya jika keberuntungan sangat baik. Dan seiring penurunan waktu rata-rata solve, kesulitan untuk maju 1 detik akan meningkat secara eksponensial.

![Rata-rata waktu harian](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Gambar: Rata-rata waktu harian. Setelah pertengahan Juni, kurva hampir mendatar, berkutat antara 30–40 detik selama dua bulan.*

Ini adalah fase plateau. Setiap orang pasti akan mengalaminya, dan saya bertahan di sini selama dua bulan.

**Di mana Anda sering macet**: Penyelesaian enam potongan edge lapisan atas sangat lambat, tidak memahami logikanya, setiap kali mengandalkan coba-coba berulang kali, membuang banyak waktu. First Block dan Second Block masih belum cukup mahir.

**Apa yang harus dilatih**:

-   Identifikasi EO (Edge Orientation). Di artikel sebelumnya, kita sudah membahas bahwa edge yang salah orientasi (bad edges) hanya memiliki beberapa situasi: 0, non-0 non-4, 4 (2 di atas, 2 di bawah), 4 (semua di lapisan atas), 4 (3 di atas, 1 di bawah). Tujuan pada tahap ini adalah: begitu blok selesai, Anda bisa langsung melihat, tanpa menghitung, situasi mana yang terjadi. Cara latihannya adalah scramble, lalu lakukan hingga CMLL selesai, kemudian jeda, sebutkan jumlah edge yang salah orientasi, lalu lanjutkan.
-   Banyak orang tidak memahami gerakan di sini. Tahap EO pada akhirnya selalu bertujuan untuk membentuk konfigurasi panah dengan 3 edge salah orientasi di lapisan atas dan 1 di lapisan bawah. Karena konfigurasi lengkap (semua edge benar) hanya satu langkah scramble dari konfigurasi panah, maka dengan pemikiran terbalik, ini adalah langkah terakhir sebelum menyelesaikan Rubik. Jadi, tidak peduli berapa jumlah edge yang salah orientasi, tujuannya selalu untuk membentuk panah. Jika ada 4 edge salah orientasi di atas, tukar sepasang edge atas-bawah untuk memindahkan satu edge salah orientasi ke bawah, sehingga membentuk panah. Jika ada 2 di atas dan 2 di bawah, tukar sepasang edge atas-bawah untuk memindahkan satu edge salah orientasi ke atas, sehingga membentuk panah. Jika ada 1 di atas dan 1 di bawah, atau 2 di atas, gunakan M' U M untuk mengubahnya menjadi situasi sebelumnya, lalu bentuk panah. Anda bisa menemukan langkah terbaik untuk situasi 1/1 melalui banyak observasi dan pemikiran.
-   Latihan look-ahead secara intensif. Ini adalah hal terpenting untuk beralih dari 40 detik ke 30 detik, dan juga hal yang paling tidak intuitif: putar sedikit lebih lambat, lihat sedikit lebih jauh. Saat membangun First Block, jangan melihat potongan yang sedang Anda masukkan, tetapi lihat di mana potongan berikutnya berada. Awalnya akan terasa sangat canggung, waktu Anda mungkin akan memburuk, tetapi setelah seminggu, tiba-tiba akan membaik.
-   CMLL tanpa ragu. Jika setiap gerakan Anda masih harus berpikir sejenak sebelum berani melakukannya, itu berarti gerakan itu belum menjadi bagian dari Anda. Latih setiap gerakan secara terpisah 50 kali, sampai tangan Anda bergerak secara otomatis begitu melihat polanya.

![Konfigurasi panah](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Gambar: Konfigurasi panah. Tiga edge salah orientasi di lapisan atas (disorot biru kehijauan) membentuk panah, menunjuk ke edge salah orientasi di lapisan bawah. Pada titik ini, satu M' U M sudah cukup untuk menyelesaikan keempat edge tersebut secara bersamaan. [Buka kondisi ini di Rubik 3D](/id/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) untuk melihat langkah demi langkah.*

![Enam bentuk EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Gambar: Enam bentuk EO. Label di kiri atas adalah jumlah edge salah orientasi (atas / bawah), kuning adalah edge yang benar, bingkai biru kehijauan adalah edge yang salah orientasi. Hanya gambar panah yang memerlukan algoritma, lima lainnya diubah menjadi panah terlebih dahulu.*

Untuk penyelesaian edge kiri dan kanan, di sini kita menggunakan kuning sebagai atas dan putih sebagai bawah, dengan First Block (FB) berwarna merah sebagai contoh. Maka, yang perlu diselesaikan selanjutnya adalah edge kuning-merah + edge kuning-oranye (bagian yang disorot). Ide utamanya adalah, memindahkan edge kuning-merah ke lapisan bawah melalui pertukaran edge atas-bawah, dan edge kuning-oranye juga ditukar ke lapisan bawah. Kedua edge ini akan berada di lapisan bawah secara berlawanan, lalu putar lapisan atas ke posisi yang sesuai, M2 U atau M2 U' dapat menyelesaikan edge kiri dan kanan lapisan U.

Untuk membantu pemahaman Anda, saya telah mengumpulkan keenam bentuk EO di [halaman LSE pada perpustakaan algoritma Metode Roux](/id/projects/rubiks-cube/roux#lse). Setiap gambar bisa dibuka dengan mengklik "Lihat Detail" di Rubik 3D, menampilkan kondisi yang sesuai dengan edge yang salah orientasi otomatis disorot. Di halaman yang sama juga terdapat semua kasus untuk penyelesaian UL/UR dan empat edge terakhir.

Penurunan volume latihan pada tahap ini bukanlah hal buruk. Fase plateau tidak bisa diatasi hanya dengan kuantitas, melainkan dengan mengubah kebiasaan buruk tertentu. Pengalaman saya adalah mengubah satu hal pada satu waktu.

### Tahap Empat: 30 Detik → 28 Detik (Setelah Minggu ke-13)

**Data**: Setelah 4 Agustus. Sepanjang bulan September, jumlah latihan yang tercatat adalah 122 kali, padahal ada banyak latihan yang tidak tercatat. Saya sudah menjadikan Rubik sebagai mainan di meja, mengambilnya kapan saja, bermain beberapa kali saat suasana hati baik, saat cemas atau gelisah, saat istirahat kerja, atau saat bosan. Saya membiarkan bermain Rubik menyatu dengan kehidupan. Ao100 saya juga secara bertahap menurun dari 29,9 menjadi 28,2.

**Di mana Anda sering macet**: Tidak ada hambatan yang jelas, hanya belum cukup mahir.

**Apa yang harus dilatih**:

Jika kecepatan rata-rata Anda masih di atas 30 detik, maka satu-satunya hal yang perlu Anda lakukan adalah terus berlatih secara intensif, bukan menghafal algoritma baru.

Teruslah berlatih look-ahead melalui slow solving, Anda akan semakin cepat.

Sering-seringlah bermain Rubik, letakkan Rubik di tempat yang mudah dijangkau, misalnya di meja kerja, sehingga Anda bisa memainkannya di sela-sela pekerjaan. Anda juga bisa sering merekam video solve Anda sendiri, melihat pada tahap mana Anda menghabiskan waktu paling banyak, lalu melakukan optimasi yang ditargetkan. Inilah yang disebut deliberate practice (latihan disengaja). Kecepatan kemajuan Anda tidak ditentukan oleh total jumlah latihan biasa Anda, tetapi oleh jumlah latihan disengaja Anda.

Lalu Anda akan menemukan, setelah melewati fase plateau 30–35 detik, kecepatan Anda kembali menurun satu tingkat.

Selamat kepada Anda yang sudah mencapai tahap ini, di mata pemula, Anda sudah menjadi pemain yang sangat hebat!

## Harga yang Harus Dibayar untuk Tidak Menghafal Algoritma

Sejujurnya, tidak menghafal algoritma bukanlah hal yang gratis.

Fase CMLL menjadi lambat. 42 kasus dicakup oleh 9 algoritma, artinya beberapa kasus harus dilakukan dua kali. Pemain yang menghafal semua CMLL akan lebih cepat dua atau tiga detik dari saya di langkah ini.

Kemahiran gerakan lapisan M memiliki ambang batas yang tinggi. Paruh kedua Roux sepenuhnya mengandalkan lapisan M, dan lapisan M lebih sulit diputar daripada R atau U, mudah macet, dan membutuhkan kualitas Rubik yang lebih baik.

Jangan khawatir tentang batas atas (upper limit). Ada juga pemain top yang menggunakan Roux dan berhasil masuk ke jajaran teratas dunia, metode itu sendiri tidak memiliki batas atas. Namun, untuk masuk di bawah 15 detik, kemungkinan besar Anda perlu melengkapi 42 algoritma CMLL. Tapi itu adalah urusan tahap lain. Untuk masuk di bawah 30 detik, tidak perlu.

Dan hampir setiap pemain kelas dunia yang bermain one-handed (OH) menggunakan metode Roux, karena metode ini juga sangat cocok untuk operasi satu tangan.

**Waktu tercepat menggunakan Roux dalam kompetisi resmi (WCA):**

-   Single 4,11 detik, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipina), Valenzuela Cubing Open 2023, diakui sebagai single Roux tercepat resmi ([video rekonstruksi](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Average 5,98 detik, juga oleh dia, tahun 2019, saat itu adalah rekor Asia, dan juga average sub-6 resmi ketiga dalam sejarah ([data WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Dia juga [pemegang rekor dunia one-handed](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): average 8,09, single 6,05 (2024), di kalangan one-handed, Roux secara luas dianggap sebagai solusi terbaik.

Saya rasa pertukaran ini sangat sepadan. Anda menukar dua atau tiga detik waktu CMLL dengan: mengetahui apa yang Anda lakukan di setiap langkah, tidak akan lupa bahkan setelah tiga bulan tidak menyentuh Rubik, dan mampu mencari solusi untuk Rubik apa pun yang belum pernah Anda lihat.

## Ringkasan

![Selesai diselesaikan](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Dari bisa menyelesaikan hingga di bawah 30 detik, ini bukanlah proses menghafal algoritma, melainkan proses melatih koordinasi tangan, mata, dan otak.

Empat tahapan, empat hal: Pertama, belajar melihat tanpa memutar Rubik. Kedua, belajar membangun Second Block tanpa merusak First Block. Ketiga, belajar melihat langkah berikutnya saat sedang melakukan langkah ini. Terakhir, biarkan tangan mengikuti mata.

Algoritma bukanlah sumber kecepatan. Observasi adalah kuncinya.

Belajarlah membangun umpan balik positif melalui kemajuan di setiap tahapan, bahkan latihan kemahiran pun tidak akan begitu membosankan, terutama ketika Anda menemukan kejutan karena memecahkan rekor lagi. Terutama pada tahap pemula dan menengah, Anda akan merasakan kebahagiaan memecahkan rekor setiap hari.

Semua algoritma dan kasus dalam artikel ini, saya telah kumpulkan di [perpustakaan algoritma Metode Roux](/id/projects/rubiks-cube/roux). Kembali dan cek saat Anda macet.

Dunia Rubik memiliki kesenangan yang tak terbatas, semoga Anda bersenang-senang!

## Lampiran 1: Daftar Latihan Setiap Tahap

**Tahap Satu (> 60 detik)**

-   Pertahankan posisi observasi tetap, jangan melakukan rotasi kubus selama proses solve
-   Menemukan warna yang diinginkan berikutnya tanpa jeda
-   Latihan pelan (slow solving), sebutkan maksud setiap langkah
-   Hanya berlatih First Block, ulangi 50 kali

**Tahap Dua (60 → 40 detik)**

-   Second Block hanya menggunakan R, r, M, U, jangan menyentuh First Block
-   Latihan CMLL dua bagian
-   Latihan ritme M' U M' U, 5 menit setiap hari

**Tahap Tiga (40 → 30 detik)**

-   Berhenti setelah CMLL selesai, langsung sebutkan jumlah edge yang salah orientasi
-   Latihan pelan (slow solving) + look-ahead: mata selalu melihat potongan berikutnya
-   Setidaknya 20 solve berkualitas tinggi setiap hari

**Tahap Empat (< 30 detik)**

-   Rekam video untuk mencari jeda
-   Finger tricks: R U R' U' dengan satu jari, lapisan M dengan jari manis
-   20 solve berkualitas tinggi setiap hari, jangan hanya menumpuk kuantitas

## Lampiran 2: Alat

-   **csTimer**: [cstimer.net](https://cstimer.net/). Aktifkan statistik Ao5 / Ao12 / Ao100, Ao100 adalah level Anda yang sebenarnya, single result adalah keberuntungan.
-   **Rubik 3D**: [philoli.com/zh/projects/rubiks-cube](/id/projects/rubiks-cube/). Semua algoritma dalam artikel ini bisa dimasukkan di sini untuk melihat animasinya.
-   **Perpustakaan Algoritma Metode Roux Ramah Pemula**: [philoli.com/zh/projects/rubiks-cube/roux](/id/projects/rubiks-cube/roux). Pola penyisipan umum untuk First Block, Second Block, 9 algoritma CMLL dua bagian, semua kasus LSE (EO, UL/UR, empat edge terakhir). Setiap gambar dapat dibuka di Rubik 3D, secara otomatis menyembunyikan potongan yang tidak relevan dan menyoroti edge yang akan digerakkan.
-   **csTimer Training Analyzer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/id/projects/rubiks-cube/analyzer). Seret file yang diekspor dari csTimer ke dalamnya, Anda akan melihat tren waktu Anda, kurva Ao5/Ao12/Ao100, kemajuan PB, tabel pencapaian (kapan pertama kali sub-60, sub-40, sub-30), dan kurva latihan Power Law. Semua gambar dalam artikel ini berasal dari sini. Data hanya diproses di browser Anda, tidak akan diunggah. Jika tidak memiliki file ekspor, Anda bisa memuat data 4441 solve saya untuk melihat efeknya.

*Artikel ini berisi tautan afiliasi Amazon: dengan membeli melalui tautan ini, saya akan mendapatkan sedikit komisi, harga untuk Anda tidak berubah.*

## Bacaan Lebih Lanjut

-   [Cara Menyelesaikan Rubik Tanpa Menghafal Algoritma: Mudah Dipahami Anak SD](/id/blog/solve-rubiks-cube-without-formulas)
