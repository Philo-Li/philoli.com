---
title: Sintaks Python Umum dalam Ilmu Data (Lanjutan)
date: 2018-11-07 23:53:13
tags: Python
categories: Sains Data
mathjax: true
---
Beberapa hari terakhir ini, saya sedang membaca buku [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([link PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), sebuah buku pengantar ilmu data yang bagus dan mudah dipahami. Ada satu bab di dalamnya yang membahas sintaks dasar Python serta sintaks lanjutan yang sering digunakan dalam ilmu data. Menurut saya, penjelasannya sangat baik, ringkas, dan jelas, jadi saya menerjemahkannya di sini sebagai catatan pribadi.
[Sintaks Python Umum dalam Ilmu Data (Dasar)](https://philoli.com/python-tutorails-basic-level/)
[Sintaks Python Umum dalam Ilmu Data (Lanjutan)](https://philoli.com/python-tutorails-advanced-level/)

Bab ini berfokus pada pengenalan sintaks dan fitur Python tingkat lanjut yang sangat berguna dalam pemrosesan data (berdasarkan Python 2.7).

<!--more-->

### Pengurutan Sorting

Untuk mengurutkan daftar (list) Python, Anda bisa menggunakan metode `sort` yang ada pada list tersebut. Namun, jika Anda tidak ingin mengubah daftar aslinya, Anda bisa menggunakan fungsi `sorted` yang akan mengembalikan daftar baru yang sudah terurut:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x tidak berubah
x.sort()            # x saat ini = [1,2,3,4]
```
Secara default, `sort` atau `sorted` akan mengurutkan daftar dari nilai terkecil hingga terbesar.

Jika ingin mengurutkannya dari terbesar ke terkecil, Anda bisa menambahkan parameter `reverse = True`.

Anda juga bisa menyesuaikan fungsi pengurutan agar daftar diurutkan berdasarkan kunci (key) yang ditentukan:

```python
# Urutkan berdasarkan nilai absolut, dari terbesar ke terkecil
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Urutkan berdasarkan jumlah kemunculan kata, dari terbesar ke terkecil
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List Comprehensions

Kita sering dihadapkan pada situasi di mana kita ingin mengambil beberapa elemen tertentu dari sebuah daftar untuk membentuk daftar baru, mengubah nilai beberapa elemen di dalamnya, atau bahkan keduanya. Praktik yang umum di Python untuk melakukan hal ini adalah dengan menggunakan *List Comprehensions* (Analisis Daftar):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Serupa dengan itu, Anda juga bisa mengubah daftar menjadi kamus (dictionary) atau himpunan (set):

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Jika Anda tidak memerlukan elemen dari daftar, Anda bisa menggunakan garis bawah (`_`) sebagai variabel:

```python
zeroes = [0 for _ in even_numbers] # Memiliki panjang yang sama dengan daftar even_numbers
```

*List comprehension* mendukung perulangan `for` berganda:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Total 100 pasangan: (0,0) (0,1) ... (9,8), (9,9)
```

Perulangan `for` berikutnya bisa menggunakan hasil dari perulangan `for` sebelumnya:

```python
increasing_pairs = [(x, y)                      # Hanya berisi pasangan data di mana x < y
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Kita akan sering menggunakan *list comprehensions* di kemudian hari.

### Generator dan Iterator

Salah satu masalah dengan daftar (list) adalah ukurannya bisa menjadi sangat besar tanpa disadari. Contohnya, `range(1000000)` akan menghasilkan daftar dengan satu juta elemen. Jika kita hanya memproses satu data pada satu waktu, prosesnya bisa memakan waktu terlalu lama (atau bahkan menghabiskan memori). Padahal, kita mungkin hanya memerlukan beberapa data pertama, sehingga komputasi lainnya menjadi tidak perlu.

Generator memungkinkan Anda untuk melakukan iterasi hanya pada data yang benar-benar dibutuhkan. Anda bisa membuat generator dengan menggunakan fungsi dan ekspresi `yield`:

```python
def lazy_range(n):
    """a lazy version of range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Tambahan dari Penerjemah:
Generator juga merupakan jenis iterator khusus, dan `yield` adalah kunci implementasi iterasi dalam generator. Ini bertindak sebagai titik jeda dan resume eksekusi generator; nilai bisa ditetapkan pada ekspresi `yield`, dan nilai dari ekspresi `yield` juga bisa dikembalikan. Setiap fungsi yang berisi pernyataan `yield` disebut generator. Ketika keluar dari generator, generator akan menyimpan status eksekusi saat ini dan melanjutkannya pada eksekusi berikutnya untuk mendapatkan nilai iterasi selanjutnya. Menggunakan iterasi daftar akan menghabiskan banyak ruang alamat memori, sedangkan penggunaan generator hanya akan memakan sekitar satu ruang alamat saja, sehingga menghemat memori.

Perulangan berikut akan mengonsumsi satu nilai dari `yield` setiap kali hingga semua nilai habis terpakai:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Faktanya, Python sudah memiliki fungsi yang mengimplementasikan efek serupa `lazy_range` di atas, yaitu `xrange` di Python 2, dan `range` di Python 3.) Ini berarti Anda bisa membuat deret angka tak terbatas:

```python
def natural_numbers():
    """Mengembalikan 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        i += 1
```

Namun, tidak disarankan untuk menggunakan pernyataan semacam ini tanpa logika keluar dari perulangan.

**TIP**
> Salah satu kelemahan iterasi menggunakan generator adalah Anda hanya bisa mengulang elemen dari awal hingga akhir satu kali saja. Jika Anda ingin melakukan iterasi berkali-kali, Anda harus membuat generator baru setiap kali atau menggunakan daftar (list).

Cara kedua untuk membuat generator adalah dengan menggunakan ekspresi *comprehension* di dalam tanda kurung:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Kita tahu bahwa metode `items()` dalam kamus (dictionary) akan mengembalikan sebuah daftar berisi semua pasangan kunci-nilai (key-value) dalam kamus. Namun, dalam banyak kasus, kita menggunakan metode generator `iteritems()` untuk melakukan iterasi, yang hanya menghasilkan dan mengembalikan satu pasangan kunci-nilai setiap kali.

### Randomness

Saat mempelajari ilmu data, kita akan sering membutuhkan pembuatan angka acak. Cukup dengan mengimpor modul `random`, kita sudah bisa menggunakannya:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() menghasilkan angka acak
# 0.7579544029403025,         # Angka acak dinormalisasi, berada di antara 0 dan 1
# 0.420571580830845,          # Fungsi ini adalah yang paling sering digunakan untuk menghasilkan angka acak
# 0.25891675029296335]
```

Jika Anda ingin mendapatkan hasil yang dapat direproduksi, Anda bisa membuat modul `random` menghasilkan angka pseudo-acak (yaitu deterministik) berdasarkan status internal yang diatur oleh `random.seed`:

```python
random.seed(10)           # set the seed to 10
print random.random()     # 0.57140259469
random.seed(10)           # reset the seed to 10
print random.random()     # 0.57140259469 again
```

Terkadang kita juga menggunakan fungsi `random.randrange` untuk menghasilkan angka acak dalam rentang yang ditentukan:

```python
random.randrange(10)      # Memilih angka acak dari range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Memilih angka acak dari range(3, 6) = [3, 4, 5]
```

Ada juga beberapa metode lain yang terkadang sangat berguna, misalnya `random.shuffle` yang akan mengacak urutan elemen dalam sebuah daftar, menghasilkan daftar dengan susunan acak baru:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (hasil yang Anda dapatkan mungkin berbeda)
```

Jika ingin memilih satu elemen secara acak dari sebuah daftar, Anda bisa menggunakan metode `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Saya mendapatkan "Bob"
```

Jika Anda ingin menghasilkan urutan acak tetapi tidak ingin mengacak daftar aslinya, Anda bisa menggunakan metode `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Anda bisa memilih beberapa sampel acak (dengan pengulangan diizinkan) dengan memanggilnya berkali-kali:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Ekspresi Regular Regular Expressions

Ekspresi regular (Regular Expressions) digunakan untuk pencarian teks. Meskipun sedikit kompleks, namun sangat berguna, sehingga banyak buku yang didedikasikan khusus untuk membahasnya. Kita akan menjelaskannya secara lebih rinci saat kita menemukannya nanti. Berikut adalah beberapa contoh penggunaan ekspresi regular di Python:

```python
import re
print all([                                 # Semua pernyataan di bawah ini mengembalikan nilai true, karena
    not re.match("a", "cat"),               # * 'cat' tidak diawali dengan 'a'
    re.search("a", "cat"),                  # * 'cat' mengandung huruf 'a'
    not re.search("c", "dog"),              # * 'dog' tidak mengandung huruf 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Memisahkan kata menjadi tiga bagian ['c','r','s'] berdasarkan 'a' atau 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Mengganti angka dengan tanda hubung
    ])                                      # Output: True
```

### Pemrograman Berorientasi Objek Object-Oriented Programming

Seperti banyak bahasa pemrograman lainnya, Python memungkinkan Anda mendefinisikan kelas yang mengemas data dan fungsi yang beroperasi padanya. Terkadang kita menggunakannya untuk membuat kode kita lebih jelas dan ringkas. Mungkin cara termudah untuk menjelaskannya adalah dengan membangun contoh yang banyak beranotasi. Misalnya, jika tidak ada koleksi (set) Python bawaan, kita mungkin ingin membuat kelas `Set` kita sendiri. Lalu, fungsi apa saja yang harus dimiliki kelas ini? Misalnya, dengan sebuah `Set`, kita perlu bisa menambahkan item ke dalamnya, menghapus item darinya, dan memeriksa apakah ia berisi nilai tertentu. Oleh karena itu, kita akan membuat semua fungsionalitas ini sebagai fungsi anggota (member function) dari kelas tersebut. Dengan demikian, kita bisa mengakses fungsi-fungsi anggota ini setelah objek `Set` dengan menggunakan titik (dot notation):

```python
# Sesuai konvensi, kita memberikan nama kelas dalam _PascalCase_
class Set:
    # Ini adalah fungsi anggota (member functions)
    # Setiap fungsi anggota memiliki parameter "self" sebagai yang pertama (konvensi lain)
    # "self" merujuk pada objek Set tertentu yang sedang digunakan

    def __init__(self, values=None):
        """Ini adalah fungsi pembuat (constructor)
        Fungsi ini dipanggil setiap kali Anda membuat objek Set baru.
        Bisa dipanggil seperti ini:
        s1 = Set() # Himpunan kosong
        s2 = Set([1,2,2,3]) # Menginisialisasi himpunan dengan nilai yang ditentukan"""
        self.dict = {} # Setiap instance dari Set memiliki atribut dict-nya sendiri
        # Kita menggunakan atribut ini untuk melacak setiap anggota
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Ini adalah representasi string dari objek Set.
        Anda bisa melihatnya dengan mengetik objek Set di jendela perintah Python atau dengan meneruskan objek ke metode str()."""
        return "Set: " + str(self.dict.keys())

    # Kita akan merepresentasikan keanggotaan dengan menjadi kunci di self.dict dan mengatur nilai kuncinya menjadi True
    def add(self, value):
        self.dict[value] = True

    # Jika parameter adalah kunci dalam kamus, nilai yang sesuai ada dalam Set.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Kemudian kita bisa menggunakan `Set` seperti ini:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Alat Fungsional Functional Tools

#### Fungsi Parsial partial

Saat meneruskan fungsi, terkadang kita ingin menggunakan sebagian fungsionalitas dari suatu fungsi untuk membuat fungsi baru. Sebagai contoh sederhana, anggaplah kita memiliki fungsi dengan dua variabel:

```python
def exp(base, power):
    return base ** power
```

Kita ingin menggunakannya untuk membuat fungsi yang menerima satu variabel dan menghasilkan hasil dari fungsi pangkat `exp(2, power)` dengan basis 2.

Tentu saja, kita bisa mendefinisikan fungsi baru dengan `def`, meskipun ini terlihat kurang bijaksana:

```python
def two_to_the(power):
  return exp(2, power)
```

Pendekatan yang lebih cerdas adalah dengan menggunakan metode `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Fungsi ini sekarang hanya memiliki satu variabel
print two_to_the(3)               # 8
```

Jika nama parameter ditentukan, Anda juga bisa menggunakan metode `partial` untuk mengisi parameter lain:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Jika Anda mencoba menyalahgunakan parameter di tengah-tengah fungsi, program akan cepat menjadi berantakan, jadi harap hindari perilaku ini.

#### Pemetaan map

Kadang-kadang, kita juga akan menggunakan fungsi seperti `map`, `reduce`, dan `filter` sebagai alternatif dari fungsionalitas *list comprehension*:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Sama seperti di atas
list_doubler = partial(map, double)     # Fungsi ini bertujuan untuk menggandakan daftar
twice_xs = list_doubler(xs)             # Juga [2, 4, 6, 8]
```

Metode `map` juga bisa digunakan untuk memetakan fungsi multi-parameter ke beberapa daftar:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter filter

Serupa dengan itu, `filter` mengimplementasikan fungsionalitas `if` dalam *list comprehension*:

```python
def is_even(x):
    """Mengembalikan True jika x genap, False jika x ganjil"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Sama seperti di atas
list_evener = partial(filter, is_even)    # Fungsi ini mengimplementasikan fungsionalitas filter
x_evens = list_evener(xs)                 # Juga [2, 4]
```

#### Reduksi reduce

Metode `reduce` terus-menerus menggabungkan elemen pertama dan kedua dalam daftar, lalu menggabungkan hasilnya dengan elemen ketiga, dan mengulangi proses ini hingga mendapatkan satu hasil yang unik:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Fungsi ini mengimplementasikan reduksi sebuah daftar
x_product = list_product(xs)              # Juga 24
```

### Enumerasi enumerate

Terkadang ada situasi di mana kita perlu menggunakan elemen dan indeksnya secara bersamaan saat mengulang (iterasi) sebuah daftar:

```python
# Kurang Pythonic (tidak ringkas dan elegan)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Juga kurang Pythonic (tidak ringkas dan elegan)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Pendekatan yang paling ringkas adalah menggunakan metode `enumerate` untuk menghasilkan tuple `(index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Serupa dengan itu, jika Anda hanya ingin menggunakan indeks:

```python
for i in range(len(documents)): do_something(i)   # Tidak ringkas
for i, _ in enumerate(documents): do_something(i) # Ringkas
```

Kita akan sering menggunakan metode ini di kemudian hari.

### Zipping dan Argument Unpacking

#### Zipping zip

Kita sering kali perlu melakukan operasi *zip* pada dua atau lebih daftar. Secara praktis, *zipping* adalah mengubah beberapa daftar menjadi satu daftar tuple yang sesuai:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Menghasilkan [('a', 1), ('b', 2), ('c', 3)]
```

#### Argument Unpacking

Jika panjang beberapa daftar tidak sama, proses *zipping* akan berhenti pada akhir daftar terpendek. Anda juga bisa menggunakan trik "unzip" yang unik untuk membongkar daftar:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Di sini, tanda bintang (`*`) digunakan untuk melakukan *argument unpacking*, yaitu menggunakan elemen-elemen dari `pairs` sebagai argumen tunggal untuk `zip`. Panggilan fungsi di bawah ini memiliki efek yang sama:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Mengembalikan [('a','b','c'), ('1','2','3')]
```

*Argument unpacking* juga bisa digunakan bersama fungsi lain:

```python
def add(a, b): return a + b

add(1, 2)           # Mengembalikan 3
add([1, 2])         # Akan error
add(*[1, 2])        # Mengembalikan 3
```

Meskipun mungkin tidak terlalu praktis, ini adalah trik yang bagus untuk membuat kode lebih ringkas.

### Penerusan Argumen Bervariasi args dan kwargs

Misalkan kita ingin membuat fungsi orde tinggi (higher-order function) yang menerima sebuah fungsi lama dan mengembalikan fungsi baru, di mana fungsi baru tersebut adalah fungsi lama dikalikan 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Contoh penggunaan:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Namun, metode ini menjadi kurang efektif jika parameter yang diteruskan lebih dari satu:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Akan error TypeError: g() takes exactly 1 argument (2 given)
```

Jadi, kita perlu mendefinisikan sebuah fungsi yang dapat menampung sejumlah argumen berapa pun, lalu menggunakan *argument unpacking* untuk meneruskan beberapa argumen. Ini mungkin terlihat sedikit ajaib:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Hasil output:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Ketika kita mendefinisikan fungsi seperti ini, `args` (singkatan dari arguments) adalah tuple yang berisi argumen tanpa nama, sedangkan `kwargs` (singkatan dari keyword arguments) adalah kamus (dictionary) yang berisi argumen bernama.

Keduanya juga bisa digunakan dalam situasi di mana parameter yang diteruskan adalah daftar (atau tuple) atau array:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Anda bisa menggunakannya dengan berbagai cara yang mungkin terlihat aneh, tetapi kita hanya akan menggunakannya untuk mengatasi masalah penerusan argumen dengan jumlah tidak tetap pada fungsi orde tinggi:

```python
def doubler_correct(f):
    """Berfungsi dengan baik apa pun f-nya"""
    def g(*args, **kwargs):
        """Akan meneruskan semua argumen dengan benar ke f, berapa pun jumlahnya"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Selamat Datang di Dunia Ilmu Data!

Ding! Selamat, Anda telah membuka pintu ke dunia baru! Sekarang Anda bisa bersenang-senang menjelajahinya~

**Baca juga:**

[Sintaks Python Umum dalam Ilmu Data (Dasar)](https://philoli.com/python-tutorails-basic-level)
