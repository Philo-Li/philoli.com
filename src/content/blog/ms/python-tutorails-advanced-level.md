---
title: Sintaks Python Lazim dalam Sains Data (Lanjutan)
date: 2018-11-07 23:53:13
tags: Python
categories: Sains Data
mathjax: true
---
Beberapa hari kebelakangan ini, saya sedang menelaah buku [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([Alamat PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), sebuah buku pengenalan sains data yang sangat bagus dan mudah difahami. Salah satu babnya memperkenalkan sintaks asas Python dan sintaks lanjutan yang sering digunakan dalam sains data. Saya rasa penerangannya sangat baik, ringkas dan jelas, oleh itu saya terjemahkannya dan letakkan di sini sebagai rujukan.
[Sintaks Python Lazim dalam Sains Data (Asas)](https://philoli.com/python-tutorails-basic-level/)
[Sintaks Python Lazim dalam Sains Data (Lanjutan)](https://philoli.com/python-tutorails-advanced-level/)

Bab ini menumpukan pada pengenalan sintaks dan fungsi lanjutan Python yang sangat berguna dalam pemprosesan data (berdasarkan Python 2.7).

<!--more-->

### Pengisihan Sorting

Jika anda ingin mengisih senarai Python, anda boleh menggunakan kaedah `sort` senarai tersebut. Jika anda tidak mahu mengubah senarai asal, anda boleh menggunakan fungsi `sorted` untuk mengembalikan senarai yang baharu yang telah diisih:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x kekal sama
x.sort()            # kini x = [1,2,3,4]
# sort atau sorted secara lalai mengisih senarai dari kecil ke besar.
```

Jika anda ingin mengisihnya dari besar ke kecil, anda boleh menetapkan parameter `reverse = True`.

Anda juga boleh menyesuaikan fungsi pengisihan untuk mengisih senarai mengikut kunci yang ditentukan:

```python
# Isih mengikut nilai mutlak dari besar ke kecil
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Isih mengikut kekerapan perkataan muncul dari besar ke kecil
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Pemahaman Senarai List Comprehensions

Kita sering berhadapan dengan situasi di mana kita ingin mengekstrak beberapa elemen tertentu dari senarai untuk membentuk senarai baharu, atau mengubah nilai beberapa elemen, atau kedua-duanya sekali. Amalan biasa dalam Python untuk ini ialah Pemahaman Senarai (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Sama juga, anda boleh menukar senarai menjadi kamus atau set:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Jika anda tidak perlu menggunakan elemen dalam senarai, anda boleh menggunakan garis bawah sebagai pemboleh ubah:

```python
zeroes = [0 for _ in even_numbers] # Mempunyai panjang yang sama dengan senarai even_numbers
```

Pemahaman senarai menyokong gelung `for` berganda:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Terdapat 100 pasangan: (0,0) (0,1) ... (9,8), (9,9)
```

Gelung `for` yang seterusnya boleh menggunakan hasil daripada gelung `for` sebelumnya:

```python
increasing_pairs = [(x, y)                      # Hanya mengandungi pasangan data di mana x < y
                    for x in range(10)          # range(lo, hi) bersamaan dengan
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Kita akan sering menggunakan pemahaman senarai ini pada masa hadapan.

### Penjana dan Iterator Generators and Iterators

Satu masalah dengan senarai ialah ia boleh menjadi sangat besar secara tidak sengaja. Contohnya, `range(1000000)` akan menghasilkan senarai dengan sejuta elemen. Jika anda memproses satu data pada satu masa, ia mungkin mengambil masa yang terlalu lama (atau kehabisan memori). Sebenarnya, anda mungkin hanya memerlukan beberapa data pertama, menjadikan operasi lain tidak perlu.

Walau bagaimanapun, penjana (generators) membolehkan anda mengiterasi hanya data yang diperlukan. Anda boleh mencipta penjana menggunakan fungsi dan ungkapan `yield`:

```python
def lazy_range(n):
    """versi `range` yang 'malas'"""
    i = 0
    while i < n:
        yield i
        i += 1
```

**Nota Penterjemah:**
Penjana juga merupakan jenis iterator yang istimewa, dan `yield` adalah kunci untuk penjana melaksanakan iterasi. Ia bertindak sebagai titik jeda dan sambung semula pelaksanaan penjana. Ungkapan `yield` boleh diberikan nilai, dan juga boleh mengembalikan nilai. Sebarang fungsi yang mengandungi pernyataan `yield` dipanggil penjana. Apabila keluar dari penjana, penjana akan menyimpan keadaan pelaksanaan semasa, dan menyambung semula pada pelaksanaan seterusnya untuk mendapatkan nilai iterasi seterusnya. Menggunakan iterasi senarai akan menggunakan banyak ruang alamat, manakala menggunakan penjana hampir hanya menggunakan satu ruang alamat, dengan itu menjimatkan memori.

Gelung berikut akan menggunakan satu nilai dari `yield` pada satu masa sehingga habis:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Sebenarnya, Python mempunyai fungsi terbina dalam yang mencapai kesan seperti `_lazy_range_` di atas, yang dipanggil `xrange`, dan dalam Python 3 ia dipanggil `lazy`.) Ini bermakna anda boleh mencipta jujukan tak terhingga:

```python
def natural_numbers():
    """Mengembalikan 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Walau bagaimanapun, tidak disyorkan untuk menggunakan pernyataan tanpa logik keluar gelung seperti ini.

**TIP**
> Satu kelemahan menggunakan penjana untuk iterasi ialah anda hanya boleh mengiterasi elemen dari awal hingga akhir sekali sahaja. Jika anda ingin mengiterasi berkali-kali, anda perlu mencipta penjana baharu setiap kali atau menggunakan senarai.

Kaedah kedua untuk mencipta penjana: menggunakan ungkapan pemahaman dalam kurungan:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Kita tahu bahawa kaedah `items()` dalam kamus akan mengembalikan senarai semua pasangan kunci-nilai dalam kamus. Walau bagaimanapun, dalam kebanyakan kes, kita menggunakan kaedah penjana `iteritems()` untuk iterasi, yang hanya menghasilkan dan mengembalikan satu pasangan kunci-nilai pada satu masa.

### Rawak Randomness
Apabila mempelajari sains data, kita akan kerap memerlukan penjanaan nombor rawak. Jadi, hanya dengan mengimport modul `random`, kita sudah boleh menggunakannya:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() menjana nombor rawak
# 0.7579544029403025,         # Nombor rawak dipiawaikan, julatnya antara 0 dan 1
# 0.420571580830845,          # Fungsi ini adalah yang paling sering digunakan untuk menjana nombor rawak
# 0.25891675029296335]
```

Jika anda ingin mendapatkan hasil yang boleh dihasilkan semula, anda boleh membiarkan modul `random` menjana nombor pseudo-rawak (iaitu, deterministik) berdasarkan keadaan dalaman yang ditetapkan oleh `random.seed`:

```python
random.seed(10)           # tetapkan seed kepada 10
print random.random()     # 0.57140259469
random.seed(10)           # tetapkan semula seed kepada 10
print random.random()     # 0.57140259469 lagi
```

Kadang-kadang kita juga menggunakan fungsi `random.randrange` untuk menjana nombor rawak dalam julat yang ditentukan:

```python
random.randrange(10)      # Pilih nombor rawak dari range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Pilih nombor rawak dari range(3, 6) = [3, 4, 5]
```

Terdapat juga beberapa kaedah lain yang kadang-kadang sangat berguna, contohnya `random.shuffle` akan mengocok susunan elemen dalam senarai, menghasilkan senarai yang disusun secara rawak:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Hasil yang anda dapat mungkin berbeza)
```

Jika anda ingin memilih satu elemen secara rawak dari senarai, anda boleh menggunakan kaedah `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Saya mendapat "Bob"
```

Jika anda ingin menjana jujukan rawak tanpa mengocok senarai asal, anda boleh menggunakan kaedah `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Anda boleh mencapai pemilihan beberapa sampel rawak (membenarkan pengulangan) dengan memanggilnya berkali-kali:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Ungkapan Nalar Regular Expressions

Ungkapan nalar (Regular Expressions) digunakan untuk carian teks, agak kompleks tetapi sangat berguna, oleh itu terdapat banyak buku yang khusus menerangkan tentangnya. Kita akan menerangkannya secara terperinci apabila kita menemuinya nanti. Berikut adalah beberapa contoh penggunaan ungkapan nalar dalam Python:

```python
import re
print all([                                 # Semua pernyataan di bawah mengembalikan True, kerana
    not re.match("a", "cat"),               # * 'cat' tidak bermula dengan 'a'
    re.search("a", "cat"),                  # * 'cat' mengandungi huruf 'a'
    not re.search("c", "dog"),              # * 'dog' tidak mengandungi huruf 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Memecahkan perkataan kepada tiga bahagian ['c','r','s'] berdasarkan 'a' atau 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Menggantikan nombor dengan sengkang
    ])                                      # Output True
```

### Pengaturcaraan Berorientasikan Objek Object-Oriented Programming

Seperti banyak bahasa lain, Python membenarkan anda untuk mentakrifkan kelas yang merangkumi data dan fungsi yang beroperasi padanya. Kadang-kadang kita akan menggunakannya untuk menjadikan kod kita lebih jelas dan ringkas. Mungkin cara paling mudah untuk menerangkannya adalah dengan membina contoh yang mengandungi banyak komen. Andaikan tiada set Python terbina dalam, kita mungkin ingin mencipta kelas `Set` kita sendiri. Jadi, apakah fungsi yang harus ada pada kelas ini? Sebagai contoh, apabila diberikan `Set`, kita perlu dapat menambah item ke dalamnya, memadam item daripadanya, dan menyemak sama ada ia mengandungi nilai tertentu. Oleh itu, kita akan mencipta semua fungsi ini sebagai fungsi ahli kelas tersebut. Dengan cara ini, kita boleh mengakses fungsi ahli ini menggunakan titik selepas objek `Set`:

```python
# Mengikut konvensyen, kita memberikan nama kelas dalam _PascalCase_
class Set:
    # Ini adalah fungsi ahli
    # Setiap fungsi ahli mempunyai parameter "self" yang diletakkan di awal (satu lagi konvensyen)
    # “self” merujuk kepada objek Set tertentu yang sedang digunakan

    def __init__(self, values=None):
        """Ini adalah fungsi penciptaan
        Setiap kali anda mencipta Set baharu, fungsi ini akan dipanggil
        Boleh dipanggil seperti ini
        s1 = Set() # Set kosong
        s2 = Set([1,2,2,3]) # Menginisialisasikan set berdasarkan nilai yang ditentukan"""
        self.dict = {} # Setiap instans dalam Set mempunyai atribut dict sendiri
        # Kita menggunakan atribut ini untuk menjejaki setiap ahli
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Ini adalah ungkapan rentetan dalam objek Set
        Anda boleh menaip rentetan ke tetingkap arahan Python atau menggunakan kaedah str() untuk menghantar rentetan ke objek"""
        return "Set: " + str(self.dict.keys())

    # Kita akan menunjukkan keahlian dengan menjadi kunci dalam self.dict dan menetapkan nilai kunci kepada True
    def add(self, value):
        self.dict[value] = True

    # Jika parameter adalah kunci dalam kamus, nilai yang sepadan berada dalam Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Kemudian kita boleh menggunakan `Set` seperti ini:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Alatan Berfungsi Functional Tools

#### Fungsi Separa partial

Apabila menghantar fungsi, kadang-kadang kita ingin menggunakan sebahagian fungsi tertentu untuk mencipta fungsi baharu. Sebagai contoh mudah, andaikan kita mempunyai fungsi dengan dua pemboleh ubah:

```python
def exp(base, power):
    return base ** power
```

Kita ingin menggunakannya untuk mencipta fungsi yang menerima satu pemboleh ubah dan mengembalikan hasil fungsi kuasa dengan asas 2, iaitu `exp(2, power)`.

Tentu saja, kita boleh mentakrifkan fungsi baharu dengan `def`, walaupun ini mungkin kelihatan kurang bijak:

```python
def two_to_the(power):
  return exp(2, power)
```

Pendekatan yang lebih bijak adalah dengan menggunakan kaedah `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Fungsi semasa hanya mempunyai satu pemboleh ubah
print two_to_the(3)               # 8
```

Jika nama ditentukan, kaedah `partial` juga boleh digunakan untuk mengisi parameter lain:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Jika anda cuba mengganggu parameter di tengah-tengah fungsi, program akan cepat menjadi tidak kemas, jadi sila elakkan tingkah laku ini.

#### Pemetaan map

Kadang-kadang kita juga akan menggunakan fungsi seperti `map`, `reduce`, dan `filter` sebagai alternatif kepada fungsi pemahaman senarai:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Sama seperti di atas
list_doubler = partial(map, double)     # Fungsi ini menggandakan senarai
twice_xs = list_doubler(xs)             # Juga [2, 4, 6, 8]
```

Kaedah `map` juga boleh digunakan untuk pemetaan fungsi berbilang parameter ke senarai berbilang:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Penapis filter

Sama juga, penapis melaksanakan fungsi `if` dalam pemahaman senarai:

```python
def is_even(x):
    """Mengembalikan True jika x genap, False jika x ganjil"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Sama seperti di atas
list_evener = partial(filter, is_even)    # Fungsi ini melaksanakan fungsi penapisan
x_evens = list_evener(xs)                 # Juga [2, 4]
```

#### Pengurangan reduce

Kaedah `reduce` terus menggabungkan elemen pertama dan kedua dalam senarai, kemudian menggabungkan hasilnya dengan elemen ketiga, dan mengulangi proses ini sehingga satu hasil unik diperoleh:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Fungsi ini melaksanakan pengurangan senarai
x_product = list_product(xs)              # Juga 24
```

### Penyenaraian enumerate

Kadang-kadang terdapat situasi di mana kita perlu menggunakan kedua-dua elemen dan indeksnya semasa melintasi senarai:

```python
# Kurang bersifat Pythonic (kurang ringkas dan elegan)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Juga kurang bersifat Pythonic (kurang ringkas dan elegan)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Pendekatan paling ringkas adalah dengan menggunakan kaedah penyenaraian `enumerate` untuk menjana `tuples (index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Sama juga, jika anda hanya ingin menggunakan indeks:

```python
for i in range(len(documents)): do_something(i)   # Tidak ringkas
for i, _ in enumerate(documents): do_something(i) # Ringkas
```

Kita akan sering menggunakan kaedah ini di kemudian hari.

### Pemampatan dan Pembungkusan Argumen zip and Argument Unpacking

#### Pemampatan zip

Kita sering melakukan pemampatan (zipping) pada dua atau lebih senarai. Pemampatan sebenarnya adalah menukar berbilang senarai menjadi satu senarai tuple yang sepadan:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Mendapat [('a', 1), ('b', 2), ('c', 3)]
```

#### Pembungkusan Argumen Argument Unpacking

Jika panjang berbilang senarai tidak konsisten, proses pemampatan akan berhenti pada hujung senarai terpendek. Anda juga boleh menggunakan teknik “unzip” yang menarik untuk membongkar senarai:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Di mana asterisk digunakan untuk melakukan pembungkusan argumen, ia menggunakan elemen `pairs` sebagai argumen tunggal `zip`. Cara panggilan berikut mempunyai kesan yang sama:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Mengembalikan [('a','b','c'), ('1','2','3')]
```

Pembungkusan argumen juga boleh digunakan bersama dengan fungsi lain:

```python
def add(a, b): return a + b

add(1, 2)           # Mengembalikan 3
add([1, 2])         # Ralat
add(*[1, 2])        # Mengembalikan 3
```

Walaupun tidak begitu praktikal, ia adalah teknik yang bagus untuk menjadikan kod lebih ringkas.

### Penghantaran Argumen Tidak Terhad args and kwargs

Andaikan kita ingin mencipta fungsi peringkat tinggi (higher-order function) yang menerima fungsi lama sebagai input dan mengembalikan fungsi baharu, di mana fungsi baharu adalah dua kali ganda fungsi lama:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Contoh pelaksanaan:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Walau bagaimanapun, kaedah ini tidak begitu berguna jika argumen yang dihantar lebih daripada satu:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Ralat TypeError: g() takes exactly 1 argument (2 given)
```

Jadi, kita perlu menentukan fungsi yang boleh menampung sebarang bilangan argumen, dan kemudian menggunakan pembungkusan argumen untuk menghantar berbilang argumen. Ini kelihatan agak ajaib:

```python
def magic(*args, **kwargs):
    print "argumen tidak bernama:", args
    print "argumen kata kunci:", kwargs
magic(1, 2, key="word", key2="word2")
# Hasil output:
# argumen tidak bernama: (1, 2)
# argumen kata kunci: {'key2': 'word2', 'key': 'word'}
```

Apabila kita mentakrifkan fungsi seperti ini, `args` (singkatan kepada arguments) adalah tuple yang mengandungi argumen tidak bernama, manakala `kwargs` (singkatan kepada keyword arguments) adalah kamus yang mengandungi argumen bernama.

Ia juga boleh digunakan dalam situasi di mana parameter yang dihantar adalah senarai (atau tuple) atau tatasusunan:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Anda boleh menggunakannya dengan pelbagai kaedah yang luar biasa, tetapi kita hanya menggunakannya untuk menyelesaikan masalah penghantaran argumen tidak terhad dalam fungsi peringkat tinggi:

```python
def doubler_correct(f):
    """Berfungsi dengan baik tidak kira apa pun f"""
    def g(*args, **kwargs):
        """Tidak kira berapa banyak parameter, fungsi ini dapat menghantar parameter kepada f dengan betul"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Selamat Datang ke Dunia Sains Data!

Ting! Tahniah, anda telah membuka pintu ke dunia baharu! Sekarang anda boleh berseronok menjelajahinya~

**Bacaan Berkaitan:**

[Sintaks Python Lazim dalam Sains Data (Asas)](https://philoli.com/python-tutorails-basic-level)
