---
layout: blog
title: "Cara Menyelesaikan Kubus Rubik Tanpa Rumus: Bahkan Anak SD Pun Pasti Bisa!"
date: 2026-05-09 12:00:00
tags:
  - Kubus Rubik
  - Tutorial
  - Teori Grup
  - Matematika
  - Metode Roux
categories: 日常折腾
description: Dengan pendekatan komutator dari teori grup dan metode Roux, saya akan memandu Anda langkah demi langkah untuk menyelesaikan kubus Rubik 3x3 tanpa menghafal rumus apa pun, dari nol.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Kubus Rubik yang sudah terselesaikan" />
</figure>

Mungkin Anda seorang pemula Kubus Rubik yang belum pernah berhasil menyelesaikannya secara utuh.

Banyak tutorial yang beredar di pasaran hanya menyuguhkan setumpuk rumus aneh, seolah berkata, "Lakukan ini, lalu itu, dan kubus Anda akan terpecahkan." Namun, setelah mengikuti instruksi tersebut, Anda tetap tidak memahami mengapa demikian.

Artikel ini akan menjadi penyelamat Anda. Anda akan belajar dari nol bagaimana menyelesaikan kubus Rubik tanpa menghafal rumus apa pun. Anda akan memahami asal-usul dan cara kerja kubus ini. Saya akan memandu Anda langkah demi langkah, dari teori hingga praktik, untuk menyelesaikan kubus Rubik secara utuh, dan mengajarkan Anda cara mengobservasi.

Mungkin ini akan menjadi kali pertama Anda berhasil menyelesaikan kubus Rubik dengan tangan Anda sendiri.

<!--more-->

## Kelahiran Kubus Rubik

Apa yang membuat Kubus Rubik begitu memikat? Mari kita mulai dengan membahas bagaimana ia lahir.

Pada tahun 1974, seorang profesor arsitektur asal Hungaria, Ernő Rubik, menciptakan prototipe pertamanya dari kayu. Ia melukis enam sisinya dengan warna berbeda, bertujuan untuk mendemonstrasikan kepada mahasiswanya bagaimana bagian-bagian dapat bergerak secara independen tanpa merusak keseluruhan struktur. Sejak itulah, Kubus Rubik lahir.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Prototipe Kubus Rubik Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Potret Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Keajaiban Jumlah Kombinasi

Sebuah kubus Rubik 3x3 memiliki 8 potongan sudut, 12 potongan tepi, dan 6 potongan tengah. Total ada 26 potongan yang terlihat. Namun, yang sebenarnya bisa bergerak adalah 20 potongan, tidak termasuk enam potongan tengah di setiap sisi.

Lalu, berapa total kemungkinan konfigurasinya? Sebanyak **4.3 × 10¹⁹**.

Apa artinya angka ini? Jumlah konfigurasi ini lebih banyak daripada jumlah butiran pasir di seluruh bumi. Jika kita mencoba satu miliar konfigurasi per detik, kita akan membutuhkan lebih dari **1300 tahun** untuk menjelajahi semuanya. Jika setiap konfigurasi ditulis di selembar kertas dan ditumpuk, tingginya akan setara dengan 14.000 kali perjalanan pulang-pergi dari Bumi ke Matahari.

Kubus Rubik 3x3 yang kecil ini sungguh tak bisa diremehkan. Berkat cara bermainnya yang inovatif, menarik, dan variasi tak terbatas yang memikat, ia langsung meledak di pasaran sejak diluncurkan, menarik berbagai pemain dan penggemar untuk mencoba. Tak lama kemudian, kompetisi Kubus Rubik berkembang pesat, memunculkan berbagai gaya bermain (Speedsolving, Blindfolded, One-Handed, With Feet), berbagai metode penyelesaian (Layer by Layer, Corners First, CFOP, Roux Bridge, Petrus, ZZ), bahkan variasi kubus yang tak terhitung jumlahnya (dari 2x2 hingga 7x7, Pyraminx, Skewb, Megaminx).

![Varian Kubus Rubik yang Tidak Biasa](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Pesona Kubus Rubik begitu besar hingga para matematikawan terus meneliti matematikanya, menghabiskan puluhan tahun mencari "Angka Tuhan". Para astronaut membawanya ke luar angkasa, dan berbagai kalangan usia, pria maupun wanita, menunjukkan keahlian mereka dalam berbagai kompetisi. Namun, dibandingkan dengan daya tariknya, jumlah pemain Kubus Rubik masih relatif sedikit. Oleh karena itu, melalui artikel ini, saya ingin mengajarkan Anda cara menyelesaikan Kubus Rubik, agar Anda dapat menikmati kegembiraan yang ditawarkan oleh permainan teka-teki ini.

## Dilema Rumus

Sebagian besar metode penyelesaian di pasaran menuntut pemain untuk menghafal banyak rumus. Hal ini sangat membuat pemula enggan, karena kebahagiaan menyelesaikan kubus sudah terhalang oleh rumus-rumus tersebut sebelum sempat dirasakan. Metode CFOP yang terkenal memiliki lebih dari 100 rumus, dan pemula setidaknya harus menghafal puluhan di antaranya.

Maka dari itu, hari ini saya ingin membagikan sebuah metode yang memungkinkan Anda menikmati bermain kubus Rubik tanpa perlu menghafal rumus. Anda akan dapat menyelesaikannya hanya dengan mengandalkan observasi dan pemahaman.

## Senjata Rahasia Matematika: Teori Grup (Group Theory)

Pertanyaan: Bagaimana cara menyelesaikan kubus Rubik tanpa menghafal satu rumus pun?

Di sinilah kita akan mengeluarkan senjata rahasia matematika: Teori Grup. Hampir tidak ada masalah yang tidak bisa diselesaikan dengan matematika.

Lalu, apa hubungan antara kubus Rubik dan teori grup? Kubus Rubik sebenarnya adalah sebuah grup. Dalam kubus Rubik, setiap putaran adalah sebuah operasi permutasi. Operasi ini memiliki beberapa karakteristik: ia bisa digabungkan, bisa dibalik, tetapi tidak bisa ditukar urutannya (non-komutatif).

Perkalian yang kita pelajari di sekolah dasar adalah operasi komutatif, di mana hasil A × B dan B × A sama persis. Namun, dalam grup kubus Rubik, A dan B tidak setara jika ditukar urutannya. Melakukan R lalu U, dan melakukan U lalu R, adalah dua operasi yang sama sekali berbeda. Jadi, dengan memahami grup, kita akan memahami kubus Rubik. Dan bermain kubus Rubik juga akan membantu kita memahami grup.

Selamat, Anda kini telah memahami perbedaan antara grup Abel (seperti perkalian dan penjumlahan) dan grup non-Abel (seperti grup kubus Rubik).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="Urutan R U dan U R menghasilkan efek berbeda - Bagian Pertama" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="Urutan R U dan U R menghasilkan efek berbeda - Bagian Kedua" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Catatan: Operasi standar kubus Rubik biasanya dilambangkan dengan huruf. R berarti memutar lapisan kanan searah jarum jam 90 derajat, U berarti memutar lapisan atas searah jarum jam 90 derajat. R' adalah putaran berlawanan arah jarum jam 90 derajat, M' adalah memutar lapisan tengah ke atas, dan M adalah memutar lapisan tengah ke bawah.)

Anda bisa langsung mengamati dan mempelajari cara memutar kubus Rubik melalui animasi kubus online di lampiran.

## Bagian Prinsip: Inti dari Memecahkan Tanpa Rumus: Komutator (Commutator)

Untuk menyelesaikan kubus Rubik, kita perlu mencapai kondisi ini: **mengubah posisi beberapa potongan tertentu tanpa mengubah posisi potongan lainnya.**

Dalam matematika, operasi ini disebut komutator, dan ditulis sebagai **A B A⁻¹ B⁻¹**.

A⁻¹ adalah operasi invers dari A.

Kita bisa menggunakan analogi yang sangat relevan dalam kehidupan sehari-hari — lift. Misalkan Anda ingin mengantar seseorang dari lantai 1 ke lantai 3:

1. **A**: Orang tersebut masuk ke dalam lift.
2. **B**: Lift naik ke lantai 3.
3. **A⁻¹**: Orang tersebut keluar dari lift.
4. **B⁻¹**: Lift kembali ke lantai 1.

Hasilnya: Lift kembali ke posisi semula, tetapi orang tersebut sudah berpindah dari lantai 1 ke lantai 3. Kuncinya adalah: ketika lift kembali, orang itu sudah tidak di dalamnya — jadi lingkungan kembali seperti semula, tetapi target telah berpindah posisi.

Dalam konteks kubus Rubik, misalnya, R dan R⁻¹ berarti memutar lapisan kanan 90 derajat searah jarum jam, dan pada langkah ketiga diputar lagi 90 derajat berlawanan arah jarum jam.

Operasi invers A⁻¹ B⁻¹ ini dapat mengembalikan lingkungan yang telah diacak oleh operasi A B sebelumnya, sehingga kita berhasil menukar beberapa potongan tertentu tanpa memengaruhi lingkungan di sekitarnya.

Lalu, mengapa tidak A A⁻¹ B B⁻¹? Karena dengan begitu, setiap gerakan akan langsung saling meniadakan, dan potongan tidak akan bisa bertukar. Setelah melakukan operasi A, jika langsung diikuti oleh operasi invers A⁻¹, hasilnya sama saja tidak melakukan apa-apa (misalnya, memutar lapisan atas 90 derajat berlawanan arah jarum jam, lalu langsung diikuti dengan 90 derajat searah jarum jam). Jadi, harus **A B A⁻¹ B⁻¹** agar terjadi pertukaran.

Ini adalah pertukaran paling dasar, dan gerakan 'atom' yang paling mudah dilakukan dalam kubus Rubik adalah: **R U R' U'**.

![Demonstrasi R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Gerakan ini bisa digabungkan menjadi urutan yang lebih panjang dan menghasilkan efek permutasi yang berbeda, misalnya: (R U R' U') (R U R' U') (R U R').

Sebenarnya, inilah asal mula rumus. Mengapa ada rumus? Karena rumus adalah serangkaian operasi permutasi paling dasar yang digabungkan menjadi sebuah urutan. Dengan mengikuti urutan tersebut, kita bisa dengan cepat mencapai hasil tertentu, seperti mengembalikan posisi satu tepi atau satu sudut. Berbagai urutan ini bisa dikombinasikan untuk membawa kita menuju penyelesaian kubus Rubik secara utuh.

Setelah memahami prinsip ini, kita bahkan bisa menciptakan rumus kita sendiri. (Cara membuat rumus kubus Rubik sendiri akan dijelaskan lebih detail di artikel selanjutnya.)

Jadi, untuk bisa menyelesaikan kubus Rubik tanpa menghafal satu rumus pun, kita hanya perlu memahami konsep permutasi dasar. Dengan begitu, kita bisa mengaplikasikannya di berbagai situasi. Gerakan permutasi paling 'atomik' akan menukar posisi tiga potongan sudut, atau menukar posisi tiga potongan tepi.

## Cara Melakukan Pertukaran dalam Kubus Rubik

Seperti yang disebutkan sebelumnya, gerakan pertukaran 'atom' yang paling mudah dilakukan dalam kubus Rubik adalah: **R U R' U'**. Jika Anda memahami gerakan ini dengan mendalam, Anda akan segera bisa menyelesaikan dua lapisan pertama kubus Rubik.

Gerakan ini sebenarnya berarti: geser (lapisan kanan), masukkan (potongan target), kembalikan (lapisan kanan), kembalikan (lapisan atas).

Dengan begitu, kita berhasil memasukkan potongan sudut kiri depan dan potongan tepi tengah ke posisi kanan bawah.

Gerakan ini bisa terus dimodifikasi, menjadi **U R U' R'**, atau **F R F' R'**, dan seterusnya untuk berbagai posisi, bahkan ada juga yang melibatkan lapisan tengah seperti **M U M' U'**, atau **U2 R U2 R'**.

![Demonstrasi Gerakan Pertukaran Dasar](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Pada tahap awal, kubus Rubik berada dalam kondisi paling acak. Oleh karena itu, kita bisa menggunakan banyak permutasi dasar seperti di atas untuk menyelesaikan satu sisi atau bagian tertentu terlebih dahulu, guna mengurangi tingkat keacakan.

Terlebih lagi, karena kondisinya sangat acak, gerakan terakhir U' dalam **R U R' U'** yang berfungsi mengembalikan lingkungan bahkan bisa dihilangkan tergantung situasinya, dan langsung disambung dengan gerakan berikutnya. Ini menyederhanakan menjadi: geser, masukkan, kembalikan.

Geser, masukkan, kembalikan.

Inilah gerakan intinya. Selamat, Anda sudah memahami cara bermain kubus Rubik!

Namun, pada tahap akhir, kita membutuhkan langkah-langkah permutasi yang lebih panjang untuk menukar potongan tertentu tanpa merusak kondisi yang sudah terselesaikan.

Sebagai contoh, gerakan **R U' L' U R' U' L U** ini dapat menukar tiga potongan sudut saja tanpa memengaruhi yang lain. Jika diuraikan ke dalam logika komutator:

```
A   = R U'   (mengeluarkan potongan sudut)
B   = L'     (menggerakkan lapisan kiri)
A⁻¹ = U R'   (mengembalikan operasi A)
B⁻¹ = U' L U(mengembalikan operasi B, dengan penyesuaian)
```

Efek: Posisi potongan sudut kiri bawah tidak berubah, tiga potongan sudut lainnya bertukar tempat.

Ini mungkin satu-satunya atau salah satu dari dua rumus yang perlu Anda pahami di artikel ini. Kita akan belajar cara menggunakannya di bagian praktik, dan memahaminya melalui pengalaman langsung, tanpa perlu menghafal mati.

## Bagian Praktik: Menyelesaikan dari Nol

Akhirnya kita sampai pada bagian utama artikel ini. Saya akan memandu Anda langkah demi langkah untuk menyelesaikan kubus Rubik secara utuh dari nol, hanya dengan mengandalkan observasi dan pemahaman.

Persiapan yang dibutuhkan:

- Sebuah kubus Rubik
- Dan sedikit kesabaran (karena fokus utama kita adalah observasi dan pemahaman)

Pertama, asumsikan Anda sudah memiliki kubus Rubik. Kita akan mengacak kubus ini menggunakan standar internasional (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), lalu saya akan memandu Anda untuk menyelesaikannya bersama-sama.

Atau, Anda bisa langsung bermain versi online di sini. Klik tautan ini dan Anda akan melihat kubus yang sudah teracak: [3D Kubus Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Kubus Rubik dalam keadaan teracak](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Kita bisa menyelesaikan kubus ini dengan memanfaatkan pendekatan metode Roux Bridge yang sangat elegan. Metode bridge ini, berbeda dengan penyelesaian lapis demi lapis, berfokus pada penyelesaian blok 1x2x3 di sisi kiri dan kanan terlebih dahulu, yang biasa disebut 'jembatan kiri dan kanan', baru kemudian menyelesaikan lapisan atas dan posisi yang tersisa.

Metode bridge ini sangat bebas dan fleksibel, serta membutuhkan langkah yang lebih sedikit dibandingkan banyak metode terkenal lainnya. Rumus yang perlu dihafalkan juga relatif sedikit, karena pada dasarnya adalah logika komutator. Dalam kerangka kerja ini, kita akan belajar bagaimana menyelesaikan kubus Rubik tanpa menghafal satu rumus pun.

![Diagram Alur Metode Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Langkah Pertama: Memposisikan Kubus untuk Observasi

Dalam metode bridge, posisi observasi sudah ditetapkan. Selama proses penyelesaian, kita tidak perlu sering memutar kubus, melainkan tetap mempertahankan sudut pandang yang sama untuk berpikir dan menyelesaikan. Dengan mempertahankan sisi yang tetap ini, kita bisa dengan sangat mudah melihat beberapa potongan sudut dan tepi, dan mengetahui ke mana seharusnya mereka pergi.

Kita bisa menggunakan sudut pandang ini sebagai patokan:

- Sisi depan (menghadap Anda): Warna hijau
- Sisi kiri: Merah
- Sisi kanan: Oranye
- Lapisan atas: Kuning
- Lapisan bawah: Putih
- Sisi belakang: Biru

### Langkah Kedua: Membangun Jembatan Kiri dan Kanan

**Urutan Pembangunan Jembatan Kiri:**

1. Posisikan potongan tepi putih-merah terlebih dahulu (sebagai pilar kiri bawah).
2. Kemudian, posisikan potongan tepi biru-merah di belakang.
3. Lalu, posisikan dua potongan sudut merah di depan.

Diagram Kondisi Jembatan Kiri Setelah Selesai:

![Kondisi Jembatan Kiri Setelah Selesai](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Proses ini tidak memerlukan rumus apa pun, cukup dengan observasi dan pemahaman. Dengan lebih banyak latihan, Anda akan semakin mahir.

**F' L**: Gunakan metode observasi, temukan potongan tepi merah-putih, posisikan agar putih menghadap ke bawah, dan merah menghadap ke kiri.

![Demonstrasi Pemosisian Potongan Tepi Putih-Merah](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Posisikan potongan tepi biru-merah dan potongan sudut.

![Pemosisian Potongan Tepi Biru-Merah dan Potongan Sudut](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Temukan posisi dua potongan terakhir untuk jembatan kiri, lalu aturlah agar mereka kembali ke tempatnya. Dengan demikian, kita akan mendapatkan jembatan kiri yang sempurna.

![Pemosisian Dua Potongan Terakhir Jembatan Kiri](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Jembatan kanan juga sama**, ganti warna merah dengan oranye, dan ulangi langkah-langkah di atas. Namun, perlu diperhatikan di sini agar tidak mengacaukan jembatan kiri yang sudah jadi. Jika diperlukan untuk 'meminjam' tempat, Anda bisa menggeser jembatan kiri ke posisi lain terlebih dahulu agar operasi di sisi kanan tidak memengaruhinya. Setelah gerakan di sisi kanan selesai, kembalikan jembatan kiri ke posisi semula.

**Bagian tengah jembatan kanan**: U' M U' R2

![Pemosisian Potongan Tepi Tengah Jembatan Kanan](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Potongan pertama jembatan kanan**: U' M' U2 R' U R

![Pemosisian Potongan Pertama Jembatan Kanan](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Setelah menyelesaikan modul terakhir jembatan kanan, kita ingin memasukkannya ke posisi yang tepat. Jadi, geser dulu jembatan kiri (F') untuk memberi ruang, lalu pindahkan modul (U), dan terakhir kembalikan jembatan kiri dan kanan secara bersamaan.

![Memasukkan Potongan Terakhir Jembatan Kanan](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ini adalah kondisi ketika kedua jembatan kiri dan kanan sudah selesai. Yang penting jembatan sudah terbentuk, potongan warna lain bisa diabaikan sementara.

![Kondisi Kedua Jembatan Sudah Selesai](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Langkah Ketiga: Menyelesaikan Potongan Sudut Lapisan Atas

Setelah Anda menyelesaikan jembatan kiri dan kanan, selanjutnya kita akan mulai menyelesaikan empat potongan sudut yang tersisa. Di sini kita akan menggunakan permutasi tiga sudut, yaitu menukar posisi tiga sudut secara berurutan: dari A ke B, B ke C, dan C kembali ke A.

![Ilustrasi Permutasi Tiga Sudut: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Permutasi Tiga Sudut

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Rumus 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Posisi potongan sudut kiri bawah tidak berubah</li>
      <li>Tiga potongan sudut lainnya bertukar posisi secara **berlawanan arah jarum jam**</li>
      <li>Namun, warna internalnya akan berputar **searah jarum jam**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Rumus 2 (Versi Cermin)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Posisi potongan sudut kanan bawah tidak berubah</li>
      <li>Tiga potongan sudut lainnya bertukar posisi secara **searah jarum jam**</li>
      <li>Namun, warna internalnya akan berputar **berlawanan arah jarum jam**</li>
    </ul>
  </div>
</div>

![Demonstrasi Permutasi Tiga Sudut Versi Cermin](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Ada empat skenario orientasi potongan sudut yang mungkin Anda temui: 0, 1, 2, atau 4 sudut yang 'benar'.

- **4 sudut benar**: Kondisi selesai
- **1 sudut benar** (bentuk ikan kecil): Lakukan permutasi tiga sudut atau versi cermin sekali lagi untuk menyelesaikannya.
- **0 / 2 sudut benar**: Pindahkan salah satu sudut yang 'salah' ke posisi yang tidak terpengaruh oleh permutasi tiga sudut (sudut kiri bawah), lakukan permutasi tiga sudut sekali. Ini akan mengubahnya menjadi 1 sudut yang 'benar', dan kembali ke skenario sebelumnya.

Terkadang, versi dasar permutasi tiga sudut perlu dilakukan dua kali untuk menyelesaikan, sedangkan versi cermin hanya perlu sekali untuk selesai sepenuhnya. Pemula cukup menguasai versi dasar terlebih dahulu, fokus pada observasi dan pemahaman, lalu akan bisa menguasai semuanya. Permutasi tiga sudut dengan warna kuning menghadap ke atas ini juga merupakan rumus klasik yang terkenal — rumus ikan kecil kiri-kanan. Anda bisa mencoba memahami bentuk 'ikan kecil' ini.

Rumus ini juga tidak perlu dihafal. Cukup amati bagaimana dua potongan hijau bergerak, coba sendiri beberapa kali, dan Anda akan terbiasa. Intinya adalah menukar tiga potongan sudut di lapisan atas.

Pada kubus Rubik yang baru saja kita selesaikan jembatan kiri dan kanannya, jika kita menemukan ada dua warna kuning di bagian atas, pindahkan sudut kiri bawah yang bukan kuning, lalu lakukan operasi permutasi tiga sudut. Setelah itu, lakukan permutasi tiga sudut dua kali lagi, atau satu kali versi cermin, untuk memastikan keempat sudut di lapisan atas semuanya memiliki warna kuning menghadap ke atas.

![Demonstrasi Proses Permutasi Tiga Sudut](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Empat sudut kuning selesai!

![Kondisi Empat Sudut Kuning Selesai](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Menyesuaikan Posisi (Menyelaraskan Warna Samping)

Setelah keempat potongan sudut memiliki warna kuning menghadap ke atas, kita masih perlu menyelaraskan warna sisi-sisi potongan sudut agar mereka benar-benar berada di posisi yang tepat.

Pada tahap ini, gunakan **variasi J-perm**: **R U2 R' U' R U2 L' U R' U' L**.

Logika rumus ini bisa diuraikan menjadi 'memindahkan pasangan + pertukaran logis':

- Bagian pertama `R U2 R' U' R`: Memindahkan sepasang potongan ke area aman untuk sementara, menciptakan ruang.
- Bagian kedua `U2 L' U R' U' L`: Memanfaatkan logika permutasi tiga sudut untuk menukar posisi dua potongan sudut dengan tepat.

**Efek**: Dua potongan sudut di sisi kanan bertukar posisi, sambil tetap mempertahankan warna kuning menghadap ke atas. Potongan sudut lainnya tidak berubah.

Ini setara dengan kemampuan menukar posisi dua potongan sudut yang berdekatan (gunakan U untuk menyesuaikan dua sudut mana yang berada di sisi kanan). Dengan mengulang pertukaran beberapa kali, keempat potongan sudut akan sepenuhnya selaras dan kembali ke posisi yang benar.

![Demonstrasi J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Rumus ini juga tidak perlu dihafal. Cukup amati bagaimana dua potongan hijau bergerak, coba sendiri beberapa kali, dan Anda akan terbiasa. Intinya adalah menukar dua potongan sudut di sisi kanan lapisan atas, sambil tetap mempertahankan warna kuning menghadap ke atas.

### Langkah Keempat: Menyelesaikan Enam Potongan Tepi Terakhir (LSE, Last Six Edges)

Pada tahap ini, pertama-tama selaraskan potongan tengah agar kuning berada di atas dan putih di bawah, lalu sesuaikan potongan tepi.

Hanya tersisa 6 potongan tepi. Langkah ini hanya menggunakan dua operasi: **M** dan **U**, yang sangat intuitif.

#### 4a: Menyesuaikan Orientasi (EO, Edge Orientation)

**Metode Penentuan**: Periksa apakah stiker putih/kuning pada potongan tepi menghadap ke atas atau ke bawah.

- Menghadap atas / bawah = Tepi 'benar' ✓
- Menghadap samping = Tepi 'salah' ✗

**Metode Penyesuaian**: Balikkan tepi 'salah' menggunakan **M U M'** atau **M' U M**.

![Demonstrasi Membalik Tepi 'Salah' dengan M U M'](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Pemahaman intuitif: M membalik potongan tepi tengah ke atas, U menyesuaikan posisi, M' lalu membalikkannya kembali.

Ulangi beberapa kali hingga semua potongan tepi berwarna putih/kuning menghadap ke atas atau ke bawah.

Kita bisa menyebut potongan tepi dengan orientasi yang benar sebagai 'tepi benar', dan yang orientasinya salah sebagai 'tepi salah'.

Seperti yang ditunjukkan pada gambar, tiga potongan tepi yang disorot di lapisan atas adalah 'tepi salah', karena warnanya bukan kuning maupun putih.

![Ilustrasi Penyorotan Tepi 'Salah'](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Tips Penyesuaian**: Ada empat skenario 'tepi salah' yang mungkin Anda temui:

- **0 tepi 'salah'**: Kondisi selesai
- **Bukan 0 atau 4 tepi 'salah'**: Ubah jumlah 'tepi salah' menjadi 4 dengan **M' U M**.
- **4 tepi 'salah' (2 di atas, 2 di bawah)**: Tukar tepi atas dan bawah dengan **M' U2 M**, ini akan menghasilkan skenario 3 di atas dan 1 di bawah.
- **4 tepi 'salah' (3 di atas, 1 di bawah)**: Tiga 'tepi salah' di lapisan atas akan membentuk panah. Putar lapisan atas agar panah tersebut menunjuk ke 'tepi salah' di lapisan bawah. Lakukan **M' U M** sekali, dan keempat 'tepi salah' akan saling meniadakan, semuanya menjadi 'tepi benar'.

![Demonstrasi Menghilangkan Empat Tepi 'Salah' dengan Panah](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Jika panah tidak muncul, coba terus **M' U M** berulang kali; Anda pasti akan berhasil menyusunnya. Setelah lebih mahir, Anda bisa mulai mencari polanya.

#### 4b: Menyelesaikan Tepi Kiri dan Kanan (Merah dan Oranye)

Temukan potongan tepi merah-kuning dan oranye-kuning (tujuannya adalah mengembalikannya ke sisi kiri dan kanan). Kirim mereka ke posisi yang benar melalui permutasi tiga tepi.

**Tips**:

1. Pindahkan potongan tepi merah-kuning (atau oranye-kuning) ke atas lapisan tengah, lalu tenggelamkan ke bawah dengan menukar tepi atas dan bawah (**M' U2 M**).
2. Biarkan potongan tepi oranye-kuning (atau merah-kuning) yang lain tenggelam di sisi berlawanan.
3. Putar lapisan atas agar sisi merah muncul di posisi berlawanan dengan potongan tepi merah-kuning yang sudah tenggelam.
4. Putar lapisan tengah setengah putaran (**M2**), lalu amati dan posisikan lapisan atas (**U**) kembali ke tempatnya.

![Demonstrasi Pemosisian Tepi Kiri dan Kanan](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Menyelesaikan Empat Tepi Terakhir (Biru dan Hijau)

**Tips**:

- Terus gunakan **permutasi tiga tepi** untuk menukar tepi atas dan bawah: **M' U2 M**. Langkah terakhir adalah mengamati dan memposisikan kembali dengan **U2**.
- Tips cepat: Letakkan potongan tepi putih-hijau (atau putih-biru) di atas posisi target, tukar tepi atas dan bawah, maka putih-hijau (putih-biru) akan kembali ke posisinya.

Hanya ada tiga skenario:

- Sudah benar → Selesai!
- Butuh M2 → Lakukan **M2** sekali.
- Butuh pertukaran → **M' U2 M U2** atau **M U2 M' U2**.

Kita juga bisa menyederhanakan logika permutasi tiga tepi: M' adalah lapisan tengah naik, U2 adalah lapisan atas berputar setengah, M adalah lapisan tengah kembali, dan U2 adalah lapisan atas kembali.

![Demonstrasi Permutasi Tiga Tepi](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Selesai!

![Kubus Rubik yang Sudah Terselesaikan](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Ringkasan

Tidak perlu menghafal rumus mati, cukup dengan logika komutator 'buka-operasi-tutup'. Anda akan menemukan proses ini jauh lebih menyenangkan daripada menghafal rumus, dan Anda tidak perlu khawatir lupa bertahun-tahun kemudian, karena Anda bisa selalu menguraikannya sendiri kapan saja.

Pendekatan yang sama ini bisa digunakan untuk menyelesaikan kubus Rubik apa pun, termasuk berbagai variasi kubus yang aneh.

Namun, jika Anda ingin menekuni jalur speedcubing, itu berarti Anda harus menempuh jalan latihan keras tanpa henti. Tapi bagi pemula, setidaknya dengan sedikit latihan, mencapai waktu di bawah 90 detik seharusnya tidak menjadi masalah.

Ada ribuan metode penyelesaian. Tinggal bagaimana Anda bisa menemukan metode yang lebih elegan atau lebih mudah bagi Anda.

Dunia kubus Rubik penuh dengan kesenangan tak terbatas. Selamat bermain!

## Lampiran 1: Ringkasan Metode Penyelesaian Kubus Rubik Artikel Ini (Intisari Penyelesaian Kubus Rubik)

1. **Membangun Jembatan Kiri dan Kanan: Mengandalkan Observasi dan Intuisi**
   - Tips: Setelah Anda sangat mahir dalam observasi dan antisipasi, Anda bisa memprioritaskan pembangunan modul lain atau membangun jembatan kiri dan kanan secara bersamaan, tergantung kondisi kubus. Ini akan menghasilkan langkah yang lebih sedikit dan memberikan kebebasan yang lebih besar.
2. **Menyelesaikan Orientasi Empat Potongan Sudut Lapisan Atas: Empat Kuning Menghadap ke Atas**
   - Permutasi tiga sudut lapisan atas: **R U' L' U R' U' L U** (menjaga posisi potongan sudut kiri bawah tetap, dan warna internal tiga potongan sudut lainnya berputar searah jarum jam).
   - Permutasi tiga sudut lapisan atas versi cermin: **L' U R U' L U R' U'** (menjaga posisi potongan sudut kanan bawah tetap, dan warna internal tiga potongan sudut lainnya berputar berlawanan arah jarum jam).
3. **Menyelesaikan Sisi-sisi Empat Potongan Sudut Lapisan Atas**
   - **Penyesuaian posisi potongan sudut lapisan atas**: **R U2 R' U' R U2 L' U R' U' L** (menjaga keempat potongan sudut tetap dengan kuning menghadap ke atas, menukar posisi dua potongan sudut di sisi kanan).
4. **Mengubah Orientasi Potongan Tepi, Agar Putih atau Kuning Menghadap Atas/Bawah**
   - Pertama, selaraskan potongan tengah agar kuning di atas dan putih di bawah, lalu sesuaikan potongan tepi.
   - Ubah jumlah 'tepi salah' dengan **M' U M**, buat panah, arahkan panah ke 'tepi salah', lakukan **M' U M** sekali, keempat 'tepi salah' akan saling meniadakan dan kembali ke posisi yang benar.
5. **Menyelesaikan Tepi Kiri dan Kanan** (Merah dan Oranye)
   - Pertama, biarkan potongan tepi merah-kuning (atau oranye-kuning) tenggelam ke bawah dengan menukar tepi atas dan bawah (**M' U2 M**).
6. **Menyelesaikan Tepi yang Tersisa** (Biru dan Hijau)
   - Terus gunakan **permutasi tiga tepi** untuk menukar tepi atas dan bawah: **M' U2 M**. Langkah terakhir adalah mengamati dan memposisikan kembali dengan **U2**.

Kamu tidak perlu menghafal satu pun dari rumus-rumus di atas; mereka hanya disertakan di apendiks ini agar mudah dirujuk. Sebenarnya, begitu kamu mencoba sendiri, sambil mengamati dan memahami bagaimana blok-blok yang sesuai bergerak, kamu akan terbiasa setelah beberapa kali. Intinya adalah menukar tiga blok sudut di lapisan atas.

## Lampiran 2: Situs Web dan Alat yang Berguna

Saya juga telah membuatkan Kubus Rubik 3D online yang bisa Anda mainkan. Anda bisa memutarnya sesuka hati, mengacaknya, dan menyelesaikannya sesuai rumus tertentu. Setiap langkahnya disertai animasi yang indah!

[3D Kubus Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Alat Kubus Rubik 3D Online](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Rumus acak yang sama dengan tutorial ini: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Langkah penyelesaian jembatan kiri-kanan tutorial ini: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klik tautan ini dan Anda akan melihat kubus yang sudah teracak: [3D Kubus Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Timer Kubus Rubik yang digunakan para juara dunia: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
