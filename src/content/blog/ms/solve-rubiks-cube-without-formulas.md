---
layout: blog
title: "Cara Selesaikan Kiub Rubik Tanpa Hafal Formula: Mudah Difahami Oleh Murid Sekolah Rendah"
date: 2026-05-09 12:00:00
tags:
  - Kiub Rubik
  - Tutorial
  - Teori Kumpulan
  - Matematik
  - Kaedah Roux
categories: Projek Harian
description: Menggunakan konsep commutator teori kumpulan + kaedah jambatan Roux, panduan langkah demi langkah dari asas untuk menyelesaikan Kiub Rubik 3x3 tanpa perlu menghafal sebarang formula.
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Kiub Rubik yang telah diselesaikan sepenuhnya" />
</figure>

Mungkin anda seorang pemula Kiub Rubik (Rubik's Cube) dan belum pernah menyelesaikannya sepenuhnya.

Kebanyakan tutorial di pasaran hanya menyuruh anda menghafal pelbagai formula yang pelik-pelik. Mereka cuma memberitahu anda untuk melakukan ini dan itu, dan kiub akan kembali ke bentuk asalnya. Namun, setelah mencubanya, anda masih tidak faham mengapa ia berfungsi begitu.

Artikel ini akan menjadi penyelamat anda. Anda akan belajar dari asas, bagaimana menyelesaikan Kiub Rubik tanpa menghafal sebarang formula. Anda akan memahami asal-usul Kiub Rubik dan cara ia berfungsi. Saya akan membimbing anda langkah demi langkah, dari teori hingga praktikal, untuk menyelesaikan kiub sepenuhnya dan mengajar anda cara membuat pemerhatian.

Mungkin ini kali pertama anda berjaya menyelesaikan Kiub Rubik sepenuhnya dengan tangan anda sendiri.

<!--more-->

## Penciptaan Kiub Rubik

Mengapa Kiub Rubik begitu memukau? Mari kita mulakan dengan membincangkan bagaimana ia dicipta.

Pada tahun 1974, seorang profesor seni bina dari Hungary, Ernő Rubik, telah mencipta prototaip pertama menggunakan kayu. Tujuannya adalah untuk menunjukkan kepada pelajar bagaimana setiap bahagian boleh bergerak secara bebas tanpa merosakkan struktur keseluruhan. Beliau mengecat enam sisi dengan warna berbeza, dan dengan itu, Kiub Rubik pun tercipta.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Prototaip Kiub Rubik oleh Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Potret Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Bilangan Kombinasi yang Menakjubkan

Sebuah Kiub Rubik 3x3 mempunyai 8 kepingan sudut, 12 kepingan tepi, dan 6 kepingan tengah, menjadikannya 26 kepingan yang kelihatan. Namun, sebenarnya hanya 20 kepingan yang boleh bergerak, tidak termasuk 6 kepingan tengah pada setiap muka.

Jadi, berapa banyak jumlah kemungkinan keadaan yang ada? **4.3 × 10¹⁹**.

Apa maksudnya ini? Jumlah keadaan ini lebih banyak daripada jumlah butiran pasir di bumi. Jika kita mencuba 1 bilion keadaan setiap saat, ia akan mengambil masa lebih daripada **1300 tahun** untuk menjelajahinya kesemuanya. Jika setiap keadaan ditulis pada sehelai kertas dan disusun, ketebalannya akan bersamaan dengan perjalanan ulang-alik dari Bumi ke Matahari sebanyak 14000 kali.

Kiub Rubik 3x3 yang kecil ini memang tidak boleh dipandang remeh. Disebabkan cara bermainnya yang baharu dan menarik, dengan pelbagai variasi dan daya tarikan yang tidak terhingga, ia meledak di pasaran sejurus dilancarkan, menarik minat ramai pemain dan peminat untuk mencuba. Tidak lama kemudian, pertandingan Kiub Rubik mula berkembang, dengan pelbagai cara bermain (Speedsolving, Blindfolded, One-Handed, With Feet), pelbagai kaedah penyelesaian (Layer by Layer, Corners First, CFOP, Roux Bridge, Petrus, ZZ), malah Kiub Rubik berbentuk lain (dari 2x2 hingga 7x7, Pyraminx, Skewb, Megaminx) muncul bertalu-talu.

![Variasi Kiub Rubik berbentuk aneh](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Daya tarikan Kiub Rubik yang begitu besar telah mendorong ahli matematik untuk terus mengkaji matematik di sebalik kiub ini, menghabiskan dekad mencari "Nombor Tuhan". Angkasawan membawanya ke angkasa untuk bermain, dan pelbagai peringkat umur menonjol dalam pelbagai pertandingan. Namun, berbanding dengan daya tarikan Kiub Rubik, bilangan pemainnya masih agak sedikit. Oleh itu, melalui artikel ini, saya ingin mengajar anda cara menyelesaikan Kiub Rubik dan menikmati keseronokan yang ditawarkan oleh permainan teka-teki ini.

## Dilema Formula

Kebanyakan kaedah penyelesaian di pasaran memerlukan pemain menghafal banyak formula, yang sangat mengecewakan bagi pemula. Sebelum sempat merasai kegembiraan menyelesaikan Kiub Rubik, mereka sudah terhalang oleh formula. Kaedah CFOP yang terkenal mempunyai lebih 100 formula, dan pemula perlu menghafal puluhan daripadanya.

Jadi, hari ini saya ingin berkongsi satu kaedah yang membolehkan anda bermain Kiub Rubik dengan gembira tanpa perlu menghafal formula. Ia membolehkan anda menyelesaikan kiub hanya dengan memerhati dan memahami.

## Senjata Matematik Utama: Teori Kumpulan (Group Theory)

Soalan: Bagaimana untuk menyelesaikan Kiub Rubik tanpa menghafal satu pun formula?

Di sinilah kita akan memperkenalkan senjata rahsia matematik: Teori Kumpulan. Tiada masalah yang tidak boleh diselesaikan dengan matematik.

Jadi, apakah kaitan Kiub Rubik dengan teori kumpulan? Kiub Rubik sebenarnya adalah satu kumpulan. Dalam Kiub Rubik, setiap putaran adalah operasi permutasi. Operasi ini mempunyai beberapa ciri: ia boleh digabungkan, boleh diterbalikkan, tetapi tidak boleh ditukarganti (commutative).

Pendaraban yang kita pelajari di sekolah rendah adalah operasi yang boleh ditukarganti (commutative), di mana hasil A × B dan B × A adalah sama. Namun, dalam kumpulan Kiub Rubik ini, A dan B tidak setara setelah ditukarganti; melakukan R kemudian U adalah operasi yang sama sekali berbeza daripada melakukan U kemudian R. Oleh itu, apabila kita memahami kumpulan, kita memahami Kiub Rubik. Dan bermain Kiub Rubik juga membantu kita memahami kumpulan.

Tahniah, anda kini telah memahami perbezaan antara kumpulan Abel (pendaraban dan penambahan adalah kumpulan Abel) dan kumpulan bukan Abel (kumpulan Kiub Rubik).

(Nota Tambahan: Ada pembaca yang menyatakan bahawa kenyataan di atas kurang jitu, oleh itu sedikit tambahan diberikan. Integer boleh membentuk kumpulan Abelian di bawah operasi penambahan, manakala nombor asli N bukan kumpulan Abelian di bawah operasi penambahan. Contohnya, 3 tidak mempunyai unsur songsang -3, dan -3 bukan nombor asli. Nombor nyata bukan sifar, nombor nisbah bukan sifar, dan nombor kompleks bukan sifar pula membentuk kumpulan Abelian di bawah operasi pendaraban. Analogi dalam artikel asal bertujuan utama untuk membantu pemula memahami intuisi teras 'komutatif lwn tak komutatif' ini.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U dan U R urutan yang berbeza menghasilkan kesan yang berbeza - Bahagian Pertama" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U dan U R urutan yang berbeza menghasilkan kesan yang berbeza - Bahagian Kedua" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Tambahan: Operasi standard Kiub Rubik biasanya diwakili oleh huruf. R bermaksud memutar lapisan kanan 90 darjah mengikut arah jam, U bermaksud memutar lapisan atas 90 darjah mengikut arah jam. R' adalah putaran 90 darjah lawan arah jam, M' untuk lapisan tengah ke atas, dan M untuk lapisan tengah ke bawah).

Anda boleh terus memerhati dan belajar cara Kiub Rubik berputar melalui animasi Kiub Rubik dalam talian di lampiran.

## Teori: Inti Penyelesaian Tanpa Formula: Commutator

Untuk menyelesaikan Kiub Rubik, kita perlu mencapai keadaan di mana: **posisi beberapa kepingan diubah tanpa mengganggu posisi kepingan lain.**

Dalam matematik, operasi ini dipanggil commutator, ditulis sebagai **A B A⁻¹ B⁻¹**.

A⁻¹ adalah operasi songsang bagi A.

Kita boleh gunakan analogi yang mudah difahami dari kehidupan seharian—lif. Andaikan anda ingin membawa seseorang dari tingkat 1 ke tingkat 3:

1.  **A**: Orang masuk ke dalam lif
2.  **B**: Lif naik ke tingkat 3
3.  **A⁻¹**: Orang keluar dari lif
4.  **B⁻¹**: Lif kembali ke tingkat 1

Hasilnya: Lif kembali ke posisi asal, tetapi orang itu telah berpindah dari tingkat 1 ke tingkat 3. Kuncinya ialah: apabila lif kembali, orang itu sudah tiada di dalamnya—jadi persekitaran kembali seperti biasa, tetapi objek sasaran telah bertukar posisi.

Contohnya, dalam Kiub Rubik, R dan R⁻¹ sepadan dengan putaran lapisan kanan 90 darjah mengikut arah jam, dan pada langkah ketiga, ia diputar 90 darjah lawan arah jam.

Operasi songsang A⁻¹ B⁻¹ ini dapat mengembalikan persekitaran yang telah dikacau oleh operasi A B, sekaligus membolehkan kita menukar hanya kepingan tertentu tanpa menjejaskan persekitaran.

Jadi, mengapa bukan A A⁻¹ B B⁻¹? Dengan cara itu, setiap tindakan akan saling membatalkan, dan kepingan tidak akan bertukar. Sebaik sahaja operasi A dilakukan, diikuti dengan operasi songsang A⁻¹, ia akan menjadi seolah-olah tiada apa-apa yang dilakukan (seperti memutar lapisan atas 90 darjah lawan arah jam, diikuti dengan 90 darjah mengikut arah jam). Oleh itu, ia mesti **A B A⁻¹ B⁻¹** untuk menghasilkan pertukaran.

Ini adalah pertukaran paling asas, gerakan atom yang paling mudah dilakukan dalam Kiub Rubik ialah: **R U R' U'**

![Demonstrasi R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Ia boleh digabungkan menjadi jujukan yang panjang dan menghasilkan kesan permutasi yang berbeza, contohnya: (R U R' U') (R U R' U') (R U R')

Sebenarnya, inilah asal-usul formula. Mengapa formula wujud? Ia adalah gabungan siri operasi permutasi asas yang membentuk jujukan. Dengan melaksanakan jujukan ini, kita dapat mencapai hasil tertentu dengan cepat, seperti menyelesaikan satu tepi atau satu kepingan sudut. Jujukan yang berbeza boleh digabungkan untuk membawa kita kepada penyelesaian Kiub Rubik yang muktamad.

Setelah memahami prinsipnya, kita bahkan boleh mencipta formula kita sendiri. (Bagaimana untuk mencipta formula Kiub Rubik sendiri akan dibincangkan secara terperinci dalam artikel seterusnya).

Jadi, untuk menyelesaikan Kiub Rubik tanpa menghafal formula, kita hanya perlu menguasai konsep permutasi asas. Kita boleh menggunakannya secara meluas dalam sebarang situasi. Gerakan permutasi yang paling asas akan menukar posisi tiga kepingan sudut, atau menukar posisi tiga kepingan tepi.

## Cara Melakukan Pertukaran dalam Kiub Rubik

Seperti yang disebutkan tadi, gerakan pertukaran asas yang paling mudah dilakukan dalam Kiub Rubik ialah: **R U R' U'**. Jika anda memahami gerakan ini dengan mendalam, anda akan dapat menyelesaikan dua lapisan pertama Kiub Rubik dengan segera.

Gerakan ini sebenarnya bermaksud: alih keluar (lapisan kanan), masukkan (kepingan sasaran), kembalikan (lapisan kanan) ke tempat asal, kembalikan (lapisan atas) ke tempat asal.

Dengan ini, kita telah berjaya memasukkan kepingan sudut kiri depan dan kepingan tepi tengah ke sudut kanan bawah.

Gerakan ini boleh diubah-ubah menjadi **U R U' R'**, atau **F R F' R'**, dan lain-lain di mana-mana posisi. Malah ada juga gerakan lapisan tengah **M U M' U'**, atau **U2 R U2 R'**.

![Demonstrasi Gerakan Pertukaran Asas](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Pada peringkat awal, Kiub Rubik berada dalam keadaan paling kacau, jadi kita boleh menggunakan banyak permutasi asas seperti di atas untuk menyelesaikan satu muka atau bahagian lain terlebih dahulu, bagi mengurangkan tahap kekacauan.

Tambahan pula, kerana keadaan yang sangat kacau, gerakan U' terakhir dalam **R U R' U'** yang mengembalikan persekitaran, malah boleh diabaikan bergantung pada situasi, dan disambung terus dengan gerakan seterusnya. Ini memudahkan kepada: alih keluar, masukkan, kembalikan ke tempat asal.

Alih keluar, masukkan, kembalikan ke tempat asal.

Ini adalah gerakan terasnya, tahniah, anda kini faham cara bermain Kiub Rubik!

Namun pada peringkat akhir, kita memerlukan langkah permutasi yang lebih panjang untuk menukar kepingan tertentu tanpa merosakkan keadaan yang telah diselesaikan sepenuhnya.

Sebagai contoh, **R U' L' U R' U' L U** adalah gerakan yang hanya menukar tiga kepingan sudut tanpa menjejaskan kepingan lain. Jika dipecahkan kepada logik commutator:

```
A   = R U'   (mengeluarkan kepingan sudut)
B   = L'     (menggerakkan lapisan kiri sedikit)
A⁻¹ = U R'   (mengembalikan operasi A)
B⁻¹ = U' L U (mengembalikan operasi B, dengan penyesuaian)
```

Kesan: Posisi kepingan sudut kiri bawah kekal, tiga kepingan sudut lain bertukar tempat.

Ini mungkin satu-satunya dua formula yang perlu anda fahami dalam artikel ini. Kita akan belajar cara menggunakannya dalam bahagian praktikal dan memahaminya melalui operasi, tanpa perlu menghafal secara mati-matian.

## Praktikal: Menyelesaikan dari Asas

Kini tibalah bahagian utama artikel ini. Saya akan membimbing anda langkah demi langkah, hanya dengan pemerhatian dan pemahaman, untuk menyelesaikan Kiub Rubik sepenuhnya dari awal.

Persediaan yang diperlukan:

-   Sebuah Kiub Rubik
-   Dan sedikit kesabaran (kerana fokus utama kita adalah pemerhatian dan pemahaman)

Pertama, andaikan anda sudah mempunyai Kiub Rubik. Kita akan mengacaunya secara rawak mengikut piawaian antarabangsa (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), dan seterusnya saya akan menyelesaikan kiub ini bersama anda.

Atau anda boleh terus bermain versi dalam talian di sini. Klik pautan ini untuk melihat Kiub Rubik yang telah dikacau: [3D 魔方 — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20L%20B%20R%20D')

![Keadaan awal Kiub Rubik yang telah dikacau](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Kita boleh menyelesaikan kiub ini dengan menggunakan pendekatan kaedah jambatan Roux yang sangat elegan. Kaedah jambatan ini, berbeza daripada penyelesaian lapisan demi lapisan, melibatkan penyelesaian blok 1x2x3 di kedua-dua belah kiri dan kanan terlebih dahulu, yang dikenali sebagai jambatan kiri dan kanan, kemudian barulah menyelesaikan lapisan atas dan kepingan yang tinggal.

Kaedah jambatan sangat bebas dan fleksibel, serta memerlukan langkah yang lebih sedikit berbanding banyak kaedah terkenal. Formula yang perlu dihafal juga agak sedikit, kerana ia pada dasarnya berasaskan logik commutator. Dalam kerangka ini, kita akan belajar bagaimana untuk menyelesaikan Kiub Rubik tanpa menghafal satu pun formula.

![Carta Alir Kaedah Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Langkah Pertama: Tetapkan Posisi Pemerhatian

Posisi pemerhatian dalam kaedah jambatan adalah tetap. Semasa proses penyelesaian, kita tidak perlu memutar Kiub Rubik dengan kerap, sebaliknya mengekalkan sudut yang sama untuk berfikir dan menyelesaikan. Dengan muka yang tetap ini, kita dapat melihat kepingan sudut dan tepi dengan mudah, serta mengetahui ke mana ia sepatutnya pergi.

Kita boleh menggunakan sudut ini sebagai rujukan:

-   Bahagian hadapan (menghadap anda): Muka hijau
-   Kiri: Merah
-   Kanan: Jingga
-   Lapisan atas: Kuning
-   Lapisan bawah: Putih
-   Belakang: Biru

### Langkah Kedua: Membina Jambatan Kiri dan Kanan

**Urutan membina jambatan kiri:**

1.  Letakkan kepingan tepi putih-merah ke tempatnya (tiang kiri bawah)
2.  Kemudian letakkan kepingan tepi biru-merah di belakang ke tempatnya
3.  Seterusnya, letakkan dua kepingan sudut merah di hadapan ke tempatnya

Carta keadaan jambatan kiri yang selesai:

![Keadaan jambatan kiri yang selesai](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Proses ini tidak memerlukan sebarang formula; ia hanya bergantung pada pemerhatian dan pemahaman. Dengan lebih banyak latihan, anda akan menjadi semakin mahir.

**F' L**: Menggunakan kaedah pemerhatian, cari kepingan tepi merah-putih, letakkan ke tempatnya, dengan putih menghadap ke bawah dan merah menghadap ke kiri.

![Demonstrasi kepingan tepi putih-merah kembali ke tempatnya](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Letakkan kepingan tepi biru-merah dan kepingan sudut ke tempatnya.

![Kepingan tepi biru-merah dan kepingan sudut kembali ke tempatnya](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Cari posisi dua kepingan terakhir untuk jambatan kiri, cari cara untuk meletakkannya ke tempat asal, maka kita akan mendapat jambatan kiri yang sempurna.

![Dua kepingan terakhir jambatan kiri kembali ke tempatnya](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Jambatan kanan sama juga**, tukarkan merah kepada jingga, dan ulangi langkah-langkah di atas. Tetapi di sini perlu diingat, jangan kacau jambatan kiri yang sudah siap. Jika perlu mengambil ruang sementara, anda boleh alihkan jambatan kiri seketika supaya operasi di sebelah kanan tidak menjejaskan jambatan kiri. Setelah operasi di sebelah kanan selesai, kembalikan jambatan kiri ke tempatnya.

**Tengah jambatan kanan**: U' M U' R2

![Kepingan tepi tengah jambatan kanan kembali ke tempatnya](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Kepingan pertama jambatan kanan**: U' M' U2 R' U R

![Kepingan pertama jambatan kanan kembali ke tempatnya](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Kita telah menyiapkan modul terakhir jambatan kanan dan ingin memasukkannya ke posisi yang betul. Oleh itu, alihkan jambatan kiri (F') terlebih dahulu untuk memberi ruang, kemudian gerakkan modul (U), dan akhirnya kembalikan kedua-dua jambatan kiri dan kanan ke tempatnya secara serentak.

![Memasukkan kepingan terakhir jambatan kanan](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ini adalah keadaan apabila kedua-dua jambatan kiri dan kanan telah selesai. Selagi jambatan telah terbentuk, kepingan warna lain tidak perlu dirisaukan buat sementara waktu.

![Keadaan kedua-dua jambatan selesai](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Langkah Ketiga: Menyelesaikan Kepingan Sudut Lapisan Atas

Setelah anda menyelesaikan jambatan kiri dan kanan, seterusnya kita akan mula menyelesaikan empat kepingan sudut yang tinggal. Di sini kita akan menggunakan permutasi tiga kepingan sudut, iaitu menukar posisi tiga sudut, dari A ke B, B ke C, dan C kembali ke A.

![Ilustrasi Permutasi Tiga Kepingan Sudut: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Permutasi Tiga Kepingan Sudut

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Posisi kepingan sudut kiri bawah kekal</li>
      <li>Tiga kepingan sudut lain bertukar posisi <strong>lawan arah jam</strong></li>
      <li>Tetapi warna dalamannya akan berputar <strong>mengikut arah jam</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (Versi Cermin)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Posisi kepingan sudut kanan bawah kekal</li>
      <li>Tiga kepingan sudut lain bertukar posisi <strong>mengikut arah jam</strong></li>
      <li>Tetapi warna dalamannya akan berputar <strong>lawan arah jam</strong></li>
    </ul>
  </div>
</div>

![Demonstrasi Permutasi Tiga Kepingan Sudut Versi Cermin](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Hanya ada empat jenis orientasi kepingan sudut yang mungkin anda hadapi: 0, 1, 2, atau 4 sudut yang betul (orientasi kuning di atas).

-   **4 sudut yang betul**: Keadaan selesai
-   **1 sudut yang betul** (bentuk ikan kecil): Lakukan permutasi tiga kali lagi atau versi cermin untuk menyelesaikannya
-   **0 / 2 sudut yang betul**: Letakkan dahulu satu sudut yang salah ke posisi yang tidak terjejas oleh permutasi tiga (sudut kiri bawah), lakukan sekali permutasi tiga, ia akan menjadi 1 sudut yang betul, kembali ke situasi sebelumnya.

Kadangkala, versi asas permutasi tiga perlu dilakukan dua kali untuk penyelesaian, manakala versi cermin hanya perlu dilakukan sekali untuk penyelesaian penuh. Pemula hanya perlu menguasai versi asas, memberi perhatian kepada pemerhatian dan pemahaman, kemudian akan dapat menguasainya sepenuhnya. Permutasi tiga dengan warna kuning menghadap ke atas ini juga merupakan formula klasik yang terkenal—formula ikan kecil kiri-kanan, anda boleh memahami bentuk ikan kecil ini.

Formula ini juga tidak perlu dihafal. Anda hanya perlu memerhatikan bagaimana dua kepingan hijau bergerak, dan lakukan beberapa kali sendiri untuk menjadi biasa. Intinya adalah menukar tiga kepingan sudut di lapisan atas.

Pada Kiub Rubik yang baru sahaja diselesaikan jambatan kiri dan kanannya, kita dapati ada dua kuning di bahagian atas. Oleh itu, kita tukar sudut kiri bawah kepada yang bukan kuning, dan lakukan sekali operasi permutasi tiga sudut. Kemudian, lakukan 2 kali lagi permutasi tiga, atau sekali permutasi tiga versi cermin, untuk memastikan keempat-empat sudut di lapisan atas berwarna kuning menghadap ke atas.

![Demonstrasi Proses Permutasi Tiga Kepingan Sudut](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Empat sudut kuning telah selesai!

![Keadaan empat sudut kuning yang selesai](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Laraskan Posisi (Jajarkan Warna Sisi)

Setelah keempat-empat kepingan sudut berwarna kuning menghadap ke atas, warna sisi kepingan sudut juga perlu dijajarkan agar kepingan sudut dapat diletakkan sepenuhnya ke tempatnya.

Ketika ini, gunakan **variasi J-perm**: **R U2 R' U' R U2 L' U R' U' L**

Logik formula ini boleh dipecahkan kepada "memindahkan pasangan + pertukaran logik":

-   Separuh pertama `R U2 R' U' R`: Membawa sepasang kepingan ke zon selamat untuk simpanan sementara, mengosongkan ruang
-   Separuh kedua `U2 L' U R' U' L`: Menggunakan logik permutasi tiga, menyelesaikan pertukaran dua kepingan sudut dengan tepat

**Kesan**: Dua kepingan sudut di sebelah kanan bertukar posisi, pada masa yang sama kekal dengan kuning menghadap ke atas, kepingan sudut lain tidak berubah.

Ini bermakna kita boleh menukar posisi mana-mana dua kepingan sudut bersebelahan (gunakan U untuk melaraskan dua kepingan sudut mana yang berada di sebelah kanan). Dengan menukar beberapa kali, keempat-empat kepingan sudut akan dapat dijajarkan sepenuhnya ke tempatnya.

![Demonstrasi J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Formula ini juga tidak perlu dihafal. Anda hanya perlu memerhatikan bagaimana dua kepingan hijau bergerak, dan lakukan beberapa kali sendiri untuk menjadi biasa. Intinya adalah menukar dua kepingan sudut di sebelah kanan lapisan atas, sambil mengekalkan warna kuning menghadap ke atas.

### Langkah Keempat: Menyelesaikan Enam Kepingan Tepi Terakhir (LSE, Last Six Edges)

Pada tahap ini, mula-mula sejajarkan kepingan tengah, pastikan kuning di atas dan putih di bawah, kemudian laraskan kepingan tepi.

Hanya tinggal 6 kepingan tepi. Langkah ini hanya menggunakan dua operasi: **M** dan **U**, yang sangat intuitif.

#### 4a: Laraskan Orientasi (EO, Edge Orientation)

**Kaedah Penilaian**: Lihat sama ada pelekat putih / kuning pada kepingan tepi menghadap ke atas atau ke bawah.

-   Menghadap ke atas / ke bawah = Tepi yang betul ✓
-   Menghadap ke sisi = Tepi yang salah ✗

**Kaedah Pelarasan**: Gunakan **M U M'** atau **M' U M** untuk membalikkan tepi yang salah.

![Demonstrasi M U M' membalikkan tepi yang salah](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Pemahaman intuitif: M membalikkan kepingan tepi lapisan tengah ke atas, U melaraskan posisi, M' kemudian membalikkannya semula.

Ulang beberapa kali sehingga semua kepingan tepi berwarna putih / kuning menghadap ke atas atau ke bawah.

Kita boleh panggil kepingan tepi yang berorientasi betul sebagai 'tepi baik', dan yang berorientasi salah sebagai 'tepi buruk'.

Seperti yang ditunjukkan, tiga kepingan tepi yang diserlahkan di lapisan atas adalah 'tepi buruk', kerana ia bukan kuning mahupun putih.

![Ilustrasi tepi buruk yang diserlahkan](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Tips Pelarasan**: Hanya ada empat jenis situasi 'tepi buruk' yang mungkin anda hadapi:

-   **0 tepi buruk**: Keadaan selesai
-   **Bukan 0 atau 4 tepi buruk**: Ubah jumlah tepi buruk menggunakan **M' U M**, tingkatkan kepada 4 tepi buruk
-   **4 tepi buruk (2 di atas, 2 di bawah)**: Tukar tepi atas dan bawah menggunakan **M' U2 M**, menjadikannya 3 di atas dan 1 di bawah.
-   **4 tepi buruk (3 di atas, 1 di bawah)**: Tiga tepi buruk di lapisan atas akan membentuk anak panah. Putar lapisan atas supaya anak panah menghala ke tepi buruk di lapisan bawah, lakukan sekali **M' U M**. Keempat-empat tepi buruk akan saling membatalkan dan semuanya menjadi 'tepi baik'.

![Demonstrasi Menghilangkan Anak Panah Empat Tepi Buruk](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Jika anak panah tidak muncul, teruskan mencuba **M' U M** berulang kali, anda pasti akan dapat menyusunnya. Setelah mahir, anda boleh perlahan-lahan mencari coraknya.

#### 4b: Menyelesaikan Tepi Kiri dan Kanan (Merah dan Jingga)

Cari kepingan tepi merah-kuning dan jingga-kuning (matlamatnya adalah untuk mengembalikan kepingan tepi ini ke sisi kiri dan kanan), letakkannya ke posisi yang betul melalui permutasi tiga kepingan tepi.

**Tips**:

1.  Gerakkan merah-kuning (atau jingga-kuning) ke atas lapisan tengah, gunakan kaedah menukar tepi atas dan bawah untuk menurunkannya ke bawah (**M' U2 M**)
2.  Biarkan jingga-kuning (atau merah-kuning) yang lain tenggelam di sisi bertentangan
3.  Putar lapisan atas agar tepi merah muncul di posisi bertentangan dengan kepingan tepi merah-kuning yang telah tenggelam.
4.  Putar lapisan tengah separuh pusingan **M2**, perhatikan dan kembalikan lapisan atas ke tempatnya **U**

![Demonstrasi Tepi Kiri dan Kanan Kembali ke Tempatnya](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Menyelesaikan Empat Tepi Terakhir (Biru dan Hijau)

**Tips**:

-   Terus gunakan **permutasi tiga kepingan tepi** untuk menukar tepi atas dan bawah: **M' U2 M**, langkah terakhir adalah mengembalikan ke tempatnya melalui pemerhatian **U2**
-   Tips pantas: Letakkan kepingan tepi putih-hijau (atau putih-biru) di atas posisi sasaran, tukar tepi atas dan bawah, maka putih-hijau (putih-biru) akan kembali ke tempatnya.

Hanya ada tiga situasi:

-   Sudah betul → Selesai!
-   Perlu M2 → Lakukan sekali **M2**
-   Perlu bertukar → **M' U2 M U2** atau **M U2 M' U2**

Kita juga boleh memudahkan logik permutasi tiga tepi ini: M' bermaksud lapisan tengah naik, U2 lapisan atas berputar separuh pusingan, M mengembalikan lapisan tengah, U2 mengembalikan lapisan atas.

![Demonstrasi Permutasi Tiga Tepi](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Selesai!

![Kiub Rubik yang selesai diselesaikan](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Ringkasan

Tidak perlu menghafal formula; hanya ada logik commutator 'buka-operasi-tutup'. Anda akan dapati proses ini jauh lebih menarik daripada menghafal formula, dan anda tidak perlu bimbang akan melupakannya bertahun-tahun kemudian, kerana anda sentiasa boleh menurunkannya sendiri.

Pendekatan yang sama boleh digunakan untuk menyelesaikan mana-mana Kiub Rubik, termasuk pelbagai jenis kiub berbentuk aneh.

Tetapi jika anda ingin menceburi bidang speedcubing, anda perlu menempuh jalan latihan yang tidak berkesudahan. Walau bagaimanapun, bagi pemula, mencapai masa di bawah 90 saat dengan sedikit latihan sepatutnya tidak menjadi masalah.

Ada ribuan kaedah penyelesaian, terpulang kepada anda sama ada anda boleh mencari kaedah yang lebih elegan atau lebih mudah.

Dunia Kiub Rubik penuh dengan keseronokan yang tidak terhingga, selamat mencuba!

## Lampiran 1: Nota Ringkas Kaedah Penyelesaian Kiub Rubik Ini (Mantera Penyelesaian Kiub Rubik)

1.  **Bina Jambatan Kiri dan Kanan: Bergantung pada Pemerhatian dan Intuisi**
    -   Tips: Apabila anda sudah sangat mahir dalam pemerhatian dan jangkaan, anda boleh membina modul lain terlebih dahulu atau membina jambatan kiri dan kanan secara serentak, bergantung pada keadaan Kiub Rubik. Ini akan mengurangkan jumlah langkah dan memberikan kebebasan yang tinggi.
2.  **Selesaikan Orientasi Lapisan Atas Empat Kepingan Sudut: Empat Kuning Menghadap ke Atas**
    -   Permutasi Tiga Kepingan Sudut Lapisan Atas: **R U' L' U R' U' L U** (pastikan posisi kepingan sudut kiri bawah kekal, tiga kepingan sudut lain berputar mengikut arah jam secara dalaman)
    -   Permutasi Tiga Kepingan Sudut Lapisan Atas Versi Cermin: **L' U R U' L U R' U'** (pastikan posisi kepingan sudut kanan bawah kekal, tiga kepingan sudut lain berputar lawan arah jam secara dalaman)
3.  **Selesaikan Sisi Empat Kepingan Sudut Lapisan Atas**
    -   **Pelarasan Posisi Kepingan Sudut Lapisan Atas**: **R U2 R' U' R U2 L' U R' U' L** (kekalkan keempat-empat kepingan sudut dengan kuning menghadap ke atas, tukar posisi dua kepingan sudut di sebelah kanan)
4.  **Ubah Orientasi Kepingan Tepi, Pastikan Putih atau Kuning Menghadap Atas/Bawah**
    -   Mula-mula, sejajarkan kepingan tengah, pastikan kuning di atas dan putih di bawah, kemudian laraskan kepingan tepi.
    -   Ubah jumlah tepi buruk melalui **M' U M**, buat anak panah, halakan anak panah ke tepi buruk, lakukan sekali **M' U M**, keempat-empat tepi buruk akan saling membatalkan dan kembali ke tempatnya.
5.  **Selesaikan Tepi Kiri dan Kanan** (Merah dan Jingga)
    -   Mula-mula, biarkan merah-kuning (atau jingga-kuning) tenggelam ke bawah dengan menukar tepi atas dan bawah (**M' U2 M**)
6.  **Selesaikan Tepi yang Tinggal** (Biru dan Hijau)
    -   Terus gunakan **permutasi tiga kepingan tepi** untuk menukar tepi atas dan bawah: **M' U2 M**, langkah terakhir adalah mengembalikan ke tempatnya melalui pemerhatian **U2**

Kesemua formula di atas tak perlu dihafal pun; ia cuma diletakkan dalam lampiran untuk memudahkan rujukan anda. Malah, apabila anda cuba sendiri, perhatikan betul-betul bagaimana kiub-kiub yang terlibat itu bergerak dan fahami mekanismenya. Lakukan beberapa kali, pasti anda akan mahir. Kuncinya ialah menukar tiga kiub penjuru lapisan atas.

## Lampiran 2: Laman Web dan Peralatan Berguna

Saya juga telah menyediakan Kiub Rubik 3D dalam talian untuk anda bermain. Anda boleh memutarkannya sesuka hati, mengacau dan menyelesaikannya mengikut formula tertentu, dan setiap langkah disertakan dengan animasi yang cantik!

[3D Kiub Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Alat Kiub Rubik 3D dalam talian](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Formula Kacau yang Sama seperti Tutorial Ini: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Langkah Penyelesaian Jambatan Kiri-Kanan Tutorial Ini: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klik pautan ini untuk melihat Kiub Rubik yang telah dikacau: [3D Kiub Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Pemasa Kiub Rubik profesional yang digunakan oleh juara dunia: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
