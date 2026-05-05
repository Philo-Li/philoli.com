---
title: Sintaks Python Lazim dalam Sains Data (Asas)
date: 2018-11-07 20:53:13
tags: Python
categories: Sains Data
mathjax: true
---

Sejak dua menjak ini, saya sedang membaca buku [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([Pautan PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), sebuah pengenalan sains data yang sangat baik dan mudah difahami. Salah satu bab dalam buku ini memperkenalkan sintaks asas Python dan sintaks lanjutan yang sering digunakan dalam sains data. Saya dapati penerangannya sangat baik, ringkas, dan jelas, jadi saya terjemahkan di sini sebagai rujukan.
[Sintaks Python Lazim dalam Sains Data (Asas)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Sintaks Python Lazim dalam Sains Data (Lanjutan)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Bab ini menumpukan kepada pengenalan sintaks dan fungsi asas Python yang sangat berguna dalam pemprosesan data (berdasarkan Python 2.7).

<!--more-->

### Inden

Banyak bahasa pengaturcaraan menggunakan kurungan untuk mengawal blok kod, tetapi Python menggunakan inden:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # Baris pertama gelung "for i"
    for j in [1, 2, 3, 4, 5]:
        print j      # Baris pertama gelung "for j"
        print i + j  # Baris terakhir gelung "for j"
    print i          # Baris terakhir gelung "for i"
print "done looping"
```

Ini menjadikan kod Python sangat mudah dibaca, tetapi juga bermakna anda perlu sentiasa berhati-hati dengan formatnya. Ruang dalam kurungan akan diabaikan, yang berguna apabila menulis ekspresi yang panjang:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Dan juga menjadikan kod lebih mudah dibaca:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Pernyataan Berbilang Baris

Anda boleh menggunakan garis miring terbalik (`\`) untuk menyambungkan dua baris yang terputus (kaedah ini jarang digunakan):

```python
two_plus_three = 2 + \
                 3
```

### Modul

Sama ada modul yang disertakan dengan Python atau modul pihak ketiga yang anda muat turun, ia perlu diimport secara manual sebelum boleh digunakan.

1. Mengimport seluruh modul secara terus:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Modul `re` yang diimport di sini digunakan untuk ekspresi nalar (regular expressions). Setelah mengimport modul, anda boleh terus memanggil fungsi tertentu dengan menggunakan nama modul sebagai awalan (re.).

2. Jika nama modul yang ingin diimport sudah digunakan dalam kod anda, anda boleh memetakan modul tersebut kepada nama lain semasa pengimportan:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. Jika anda nakal, anda boleh mengimport seluruh modul ke dalam ruang nama semasa (current namespace). Ini boleh secara tidak sengaja menimpa pemboleh ubah yang telah anda takrifkan:

```python
match = 10
from re import *  # Modul re mempunyai fungsi match
print match       # Mencetak fungsi match
```

Namun, saya percaya anda adalah orang yang baik, jadi anda tidak akan melakukan ini.

### Operasi Aritmetik

Python 2.7 secara lalai menggunakan pembahagian integer, jadi $5 / 2 = 2$. Tetapi dalam banyak situasi, kita tidak mahu pembahagian integer, jadi kita boleh mengimport modul ini:

```python
from __future__ import division
```

Setelah diimport, $5 / 2 = 2.5$.
Pembahagian integer: $5 // 2 = 2$.

### Fungsi

#### Takrifan Fungsi

Fungsi ialah satu peraturan yang boleh menerima sifar atau lebih input dan mengembalikan output tertentu. Dalam Python, kita takrifkan fungsi dengan `def nama_fungsi(parameter)`:

```python
def double(x):
    """Anda boleh menulis penjelasan tentang fungsi di sini.
    Contohnya, fungsi ini akan mendarab input dengan 2"""
    # Di sini anda boleh menulis badan fungsi, ingat untuk inden
    return x * 2
```

#### Penggunaan Fungsi

Dalam Python, fungsi dianggap sebagai objek kelas pertama (first-class citizens), yang bermaksud kita boleh menetapkan fungsi kepada pemboleh ubah, atau menghantarnya sebagai argumen kepada fungsi lain:

```python
def apply_to_one(f):
    """Memanggil fungsi f dan menghantar 1 sebagai parameter"""
    return f(1)
my_double = double          # double merujuk kepada fungsi yang ditakrifkan dalam bahagian sebelumnya
x = apply_to_one(my_double) # x ialah 2
```

#### Fungsi Anonim

Anda juga boleh mencipta fungsi anonim melalui `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Ialah 5
```

Anda boleh menetapkan `lambda` kepada pemboleh ubah lain, tetapi kebanyakan orang akan menasihati anda untuk menggunakan _def_ jika boleh:

```python
another_double = lambda x: 2 * x      # Tidak digalakkan
def another_double(x): return 2 * x   # Amalan yang disyorkan
```

Tambahan:

*   `lambda` hanyalah satu ekspresi, dan badan fungsinya jauh lebih ringkas berbanding `def`.
*   Badan `lambda` ialah satu ekspresi, bukan blok kod. Anda hanya boleh menyertakan logik yang terhad dalam ekspresi `lambda`.

#### Penghantaran Parameter Fungsi

Parameter fungsi boleh ditakrifkan dengan nilai lalai. Jika parameter tidak disertakan dalam panggilan fungsi, nilai lalai akan digunakan; jika parameter disertakan, nilai yang ditentukan akan dihantar:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Output "hello"
my_print()            # Output "my default message"
```

Kadang-kadang, sangat berguna juga untuk menentukan parameter secara langsung melalui nama parameter:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Mengembalikan 5
subtract(0, 5)    # Mengembalikan -5
subtract(b=5)     # Sama seperti di atas, mengembalikan -5
```

### Rentetan (Strings)

Anda boleh menggunakan tanda petik tunggal atau berganda untuk mencipta rentetan (pastikan tanda petik sepadan):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Gunakan garis miring terbalik (`\`) untuk mewakili aksara lepas (escape character), contohnya:

```python
tab_string = "\t"      # Mewakili aksara tab
len(tab_string)        # Ialah 1
```

Apabila anda ingin menggunakan garis miring terbalik itu sendiri (untuk direktori Windows atau ekspresi nalar), anda boleh menentukannya dengan menggunakan rentetan mentah `r""`:

```python
not_tab_string = r"\t" # Mewakili aksara '\' dan 't'
len(not_tab_string)    # Ialah 2
```

Cipta rentetan berbilang baris menggunakan tiga tanda petik berganda:

```python
multi_line_string = """Ini baris pertama
Ini baris kedua
Ini baris ketiga"""
```

### Pengendalian Pengecualian (Exception Handling)

Apabila program menemui ralat, Python akan mencetuskan `pengecualian (exception)`. Jika kita tidak mengendalikannya, program akan terhenti. Anda boleh menangkap pengecualian dengan pernyataan `try` dan `except`:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Tidak boleh dibahagi dengan 0"
```

Walaupun pengecualian dianggap sebagai perkara negatif dalam bahasa pengaturcaraan lain, dalam Python, pengendalian pengecualian yang meluas akan menjadikan kod anda lebih ringkas dan bersih.

### Senarai (Lists)

#### Mencipta Senarai

Senarai ialah koleksi teratur yang ringkas, dan merupakan struktur data paling asas dalam Python (serupa dengan tatasusunan dalam bahasa lain, tetapi senarai mempunyai beberapa ciri tambahan). Untuk mencipta senarai:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # Ialah 3
list_sum = sum(integer_list)      # Ialah 6
```

#### Mengakses Nilai dalam Senarai

Anda boleh mengindeks nilai dalam senarai menggunakan kurungan siku:

```python
x = range(10)       # Senarai x = [0, 1, ..., 9]
zero = x[0]         # Ialah 0, indeks senarai bermula dari 0
one = x[1]          # Ialah 1
nine = x[-1]        # Ialah 9, elemen terakhir dalam senarai
eight = x[-2]       # Ialah 8, elemen kedua terakhir dalam senarai
x[0] = -1           # Senarai x sekarang ialah [-1, 1, 2, 3, ..., 9]
```

#### Memotong Senarai (Slicing)

Anda boleh memotong senarai menggunakan kurungan siku:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Anda boleh menggunakan `in` untuk memeriksa sama ada sesuatu elemen wujud dalam senarai:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Kaedah pencarian elemen ini tidak cekap. Hanya gunakannya jika senarai sangat kecil atau anda tidak kisah tentang masa pencarian.

#### Menggabungkan Senarai

Dalam Python, sangat mudah untuk menggabungkan dua senarai:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # x sekarang ialah [1,2,3,4,5,6]
```

Jika anda tidak mahu mengubah senarai asal `x`, anda boleh menggunakan operator 'tambah' untuk mencipta senarai baharu:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # y sekarang ialah [1, 2, 3, 4, 5, 6]; x tidak berubah
```

Selalunya, anda boleh menambah satu elemen ke dalam senarai seperti ini:

```python
x = [1, 2, 3]
x.append(0)           # x sekarang ialah [1, 2, 3, 0]
y = x[-1]             # Ialah 0
z = len(x)            # Ialah 4
```

#### Pemisahan Senarai (List Unpacking)

Jika anda tahu berapa banyak elemen dalam senarai, anda boleh memisahkannya dengan mudah:

```python
x, y = [1, 2]         # x sekarang ialah 1, y ialah 2
```

Jika bilangan elemen di kedua-dua belah persamaan tidak sepadan, anda akan mendapat _ralat nilai_. Oleh itu, kita lebih sering menggunakan garis bawah (`_`) untuk menyimpan baki bahagian senarai:

```python
_, y = [1, 2]         # y == 2, tanpa mengambil kira elemen pertama
```

### Tupel (Tuples)

Senarai dan tupel sangat serupa. Satu-satunya perbezaan dengan senarai ialah elemen dalam tupel tidak boleh diubah suai.

#### Mencipta Tupel

Anda boleh mencipta tupel menggunakan kurungan bulat atau tanpa sebarang kurungan:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list = [1, 2]
my_list[1] = 3        # my_list sekarang ialah [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Tidak boleh mengubah tupel"
```

Menggunakan tupel memudahkan untuk mendapatkan pelbagai nilai kembali daripada fungsi:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # Ialah (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Tupel (dan senarai) menyokong penetapan nilai serentak kepada pelbagai elemen:

```python
x, y = 1, 2       # x sekarang ialah 1, y ialah 2
x, y = y, x       # Menukar nilai dua pemboleh ubah dalam Python; x sekarang ialah 2, y ialah 1
```

### Kamus (Dictionaries)

#### Mencipta Kamus

Satu lagi struktur data asas dalam Python ialah kamus, yang membolehkan anda mendapatkan nilai yang sepadan dengan pantas melalui kunci (key):

```python
empty_dict = {}                       # Takrifan kamus kosong yang sangat 'Pythonic'
empty_dict2 = dict()                  # Takrifan kamus kosong yang kurang 'Pythonic'
grades = { "Joel" : 80, "Tim" : 95 }  # Penyimpanan kamus
```

#### Mencari Elemen Kamus

Anda boleh menggunakan kurungan siku dengan kunci untuk mencari nilai yang sepadan:

```python
joels_grade = grades["Joel"]          # Ialah 80
```

Jika kunci yang dicari tiada dalam kamus, `KeyError` akan dikembalikan:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Tiada gred untuk Kate!"
```

Anda boleh menggunakan `in` untuk memeriksa sama ada kunci wujud dalam kamus:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Kamus mempunyai kaedah yang boleh mengembalikan nilai lalai, di mana nilai lalai yang ditetapkan akan dikembalikan (bukannya mencetuskan pengecualian) jika kunci yang dicari tiada dalam kamus:

```python
joels_grade = grades.get("Joel", 0)   # Ialah 80
kates_grade = grades.get("Kate", 0)   # Ialah 0
no_ones_grade = grades.get("No One")  # Mengembalikan nilai lalai None
```

#### Mengubah Suai Kamus

Anda boleh menggunakan kurungan siku untuk mencipta atau mengubah suai pasangan kunci-nilai dalam kamus:

```python
grades["Tim"] = 99                    # Menggantikan nilai lama
grades["Kate"] = 100                  # Menambah pasangan kunci-nilai baharu
num_students = len(grades)            # Ialah 3
```

Kita akan sering menggunakan kamus seperti ini untuk menyatakan struktur data:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Selain mencari kunci tertentu, kita juga boleh beroperasi pada semua kunci seperti ini:

```python
tweet_keys = tweet.keys()             # Mendapatkan senarai kunci
tweet_values = tweet.values()         # Mendapatkan senarai nilai
tweet_items = tweet.items()           # Mendapatkan tupel (kunci, nilai)
"user" in tweet_keys                  # Mengembalikan True, menggunakan pencarian 'in' yang kurang cekap dalam senarai
"user" in tweet                       # Penggunaan yang lebih 'Pythonic', menggunakan pencarian 'in' yang cekap dalam kamus
"joelgrus" in tweet_values            # True
```

Kunci dalam kamus adalah unik, dan senarai tidak boleh digunakan sebagai kunci dalam kamus. Jika anda memerlukan kunci berbilang bahagian, anda boleh menggunakan tupel, atau menukar kunci tersebut kepada rentetan melalui beberapa cara.

#### Kamus Lalai (Defaultdict)

Jika anda cuba mengira kekerapan setiap perkataan dalam dokumen, pendekatan yang jelas ialah mencipta kamus di mana perkataan adalah kunci, dan kekerapan adalah nilai yang sepadan. Kemudian, anda melintasi dokumen, menambah 1 kepada nilai yang sepadan jika perkataan sudah ada, dan menambah pasangan kunci-nilai baharu jika perkataan belum ada:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Sudah tentu, anda juga boleh menangani kunci yang hilang terlebih dahulu menggunakan kaedah 'cuba dan tangkap' seperti ini:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

Kaedah ketiga ialah menggunakan `get`, kaedah ini sangat baik dalam mengendalikan kunci yang hilang:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Kamus lalai adalah sama seperti kamus biasa, satu-satunya perbezaan ialah, apabila anda cuba mencari kunci yang tidak wujud dalam kamus, kamus lalai akan menggunakan kunci yang anda berikan untuk mencipta pasangan kunci-nilai secara automatik. Untuk menggunakan kamus lalai, anda perlu mengimport pustaka `collections`:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() menghasilkan 0
for word in document:
    word_counts[word] += 1
```

Kamus lalai juga sangat berguna dalam senarai, kamus biasa, malah fungsi yang ditakrifkan sendiri:

```python
dd_list = defaultdict(list)           # list() menghasilkan senarai kosong
dd_list[2].append(1)                  # dd_list sekarang ialah {2: [1]}
dd_dict = defaultdict(dict)           # dict() menghasilkan kamus kosong
dd_dict["Joel"]["City"] = "Seattle"   # Kandungan dd_dict sekarang ialah { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Mencipta kamus di mana nilai untuk kunci ialah senarai
dd_pair[2][1] = 1                     # Kandungan dd_pair sekarang ialah {2: [0,1]}
```

Kaedah ini sangat berguna, kerana kita tidak perlu lagi memeriksa sama ada kunci wujud apabila kita ingin mendapatkan nilai kunci tertentu dalam kamus.

### Pembilang (Counter)

Pembilang boleh secara langsung menukar sekumpulan nilai menjadi objek seperti kamus, di mana kunci adalah elemen dari kumpulan tersebut, dan nilai yang sepadan ialah bilangan kali elemen itu muncul. Ini sering digunakan apabila mencipta histogram:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c (lebih kurang) ialah { 0 : 2, 1 : 1, 2 : 1 }
```

Dengan ini, kita mempunyai kaedah yang sangat mudah untuk mengira kekerapan perkataan:

```python
word_counts = Counter(document)
```

Pembilang juga mempunyai kaedah `most_common` yang sangat berguna, yang boleh secara langsung mendapatkan perkataan yang paling kerap muncul dan kekerapan yang sepadan:

```python
# Mencetak 10 perkataan yang paling kerap muncul dan kiraannya
for word, count in word_counts.most_common(10):
    print word, count
```

### Set

Satu lagi struktur data dalam Python ialah set. Set ialah koleksi elemen yang unik.
Anda boleh mencipta set dan menambah elemen ke dalamnya seperti ini:

```python
s = set()
s.add(1)          # s ialah { 1 }
s.add(2)          # s ialah { 1, 2 }
s.add(2)          # s ialah { 1, 2 }
x = len(s)        # Ialah 2
y = 2 in s        # Ialah True
z = 3 in s        # Ialah False
```

Dua sebab utama menggunakan set:

Pertama, operasi `in` dalam set sangat cekap. Apabila bilangan elemen dalam set data sangat besar, mencari elemen dalam bentuk set jelas lebih sesuai berbanding senarai:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Gagal, perlu memeriksa setiap elemen
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Pencarian berjaya, dan sangat pantas
```

Kedua, menggunakan set sangat mudah untuk mendapatkan elemen unik daripada sekumpulan data:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

Walau bagaimanapun, dalam praktiknya, kekerapan penggunaan set masih tidak setinggi kamus dan senarai.

### Pernyataan Bersyarat

Dalam kebanyakan bahasa pengaturcaraan, anda boleh menggunakan _if_ untuk menyatakan cabang bersyarat seperti ini:

```python
if 1 > 2:
    message = "Kalaulah 1 lebih besar daripada dua…"
elif 1 > 3:
    message = "elif bermaksud 'else if'"
else:
    message = "Apabila semua gagal, gunakan else (jika anda mahu)"
```

Anda juga boleh menulis pernyataan cabang bersyarat dalam satu baris seperti ini, tetapi ini jarang digunakan:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Pernyataan Gelung

#### Gelung _while_

Gelung `while` dalam Python:

```python
x = 0
while x < 10:
    print x, "kurang daripada 10"
    x += 1
```

#### Gelung _for_

Yang lebih kerap digunakan ialah gelung `for-in`:

```python
for x in range(10):
    print x, "kurang daripada 10"
```

Ekspresi logik yang lebih kompleks boleh menggunakan pernyataan `continue` dan `break`:

```python
for x in range(10):
    if x == 3:
        continue          # Terus ke pusingan gelung seterusnya
    if x == 5:
        break             # Keluar sepenuhnya daripada gelung
    print x
```

Hasilnya akan mencetak 0, 1, 2, dan 4.

### Kebenaran (Truthiness)

Pemboleh ubah Boolean dalam Python digunakan lebih kurang sama seperti dalam bahasa lain, satu-satunya perbezaan ialah huruf pertama mesti besar:

```python
one_is_less_than_two = 1 < 2      # Ialah True
true_equals_false = True == False # Ialah False
```

Python menggunakan `None` untuk menunjukkan ketiadaan nilai, serupa dengan `null` dalam bahasa lain:

```python
x = None
print x == None        # Output True, kurang elegan
print x is None        # Output True, lebih elegan
```

Python membenarkan anda menggunakan nilai lain sebagai ganti nilai Boolean. Berikut adalah semua yang setara dengan `False`:

*   False
*   None
*   [] (senarai kosong)
*   {} (kamus kosong)
*   “”
*   set()
*   0
*   0.0

Begitu juga, terdapat banyak nilai yang setara dengan `True`. Ini memudahkan anda untuk menentukan senarai kosong, rentetan kosong, kamus kosong, dan sebagainya.

Sudah tentu, jika anda tidak dapat menjangka hasilnya, mungkin akan berlaku ralat semasa penggunaan:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Pendekatan yang lebih ringkas, yang memberikan kesan yang sama seperti di atas:

```python
first_char = s and s[0]
```

Jika nilai pertama adalah benar, nilai kedua akan dikembalikan; jika tidak, nilai pertama akan dikembalikan.

Begitu juga, jika `x` mungkin nombor atau kosong, maka ini boleh menghasilkan `x` yang pasti nombor:

```python
safe_x = x or 0
```

Python juga mempunyai fungsi `all`, yang mengembalikan `True` jika setiap elemen adalah `True`. Fungsi `any` mengembalikan `True` jika sekurang-kurangnya satu elemen adalah `True`. Contohnya, untuk senarai di mana setiap elemen adalah 'benar', fungsi `all` akan mengembalikan `True`, jika tidak ia akan mengembalikan `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} setara dengan 'False'
any([True, 1, {}])          # True
all([])                     # True, tiada elemen yang setara dengan 'False'
any([])                     # False, tiada elemen yang setara dengan 'True'
```

**Bacaan Lanjutan:**
[Sintaks Python Lazim dalam Sains Data (Lanjutan)](https://philoli.com/python-tutorails-advanced-level/)
