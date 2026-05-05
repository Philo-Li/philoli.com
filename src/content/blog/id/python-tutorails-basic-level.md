---
title: Sintaks Python Umum dalam Ilmu Data (Dasar)
date: 2018-11-07 20:53:13
tags: Python
categories: Ilmu Data
mathjax: true
--- 

Beberapa hari ini saya sedang membaca buku [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([link PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), sebuah buku pengantar ilmu data yang bagus dan mudah dipahami. Salah satu babnya membahas sintaks dasar Python dan sintaks tingkat lanjut yang sering dipakai dalam ilmu data. Karena penjelasannya sangat bagus, ringkas, dan jelas, saya memutuskan untuk menerjemahkannya di sini sebagai pengingat.  
[Sintaks Python Umum dalam Ilmu Data (Dasar)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Sintaks Python Umum dalam Ilmu Data (Lanjutan)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Bab ini berfokus pada pengenalan sintaks dan fitur dasar Python yang sangat berguna dalam pemrosesan data (berdasarkan Python 2.7).

<!--more-->

### Format Spasi

Banyak bahasa menggunakan kurung kurawal untuk mengontrol blok kode, tetapi Python menggunakan indentasi:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Baris pertama dari perulangan "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Baris pertama dari perulangan "for j"  
        print i + j  # Baris terakhir dari perulangan "for j"  
    print i          # Baris terakhir dari perulangan "for i"  
print "done looping"  
```

Ini membuat kode Python sangat mudah dibaca, tetapi juga berarti Anda harus selalu memperhatikan format. Spasi dalam kurung akan diabaikan, ini berguna saat menulis ekspresi panjang:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Juga membuat kode lebih mudah dibaca:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Pernyataan Multi-Baris

Anda bisa menggunakan garis miring terbalik (backslash) untuk menyambung dua baris yang terputus (praktik ini jarang digunakan):  

```python
two_plus_three = 2 + \
                 3  
```

### Modul

Baik modul bawaan Python maupun modul pihak ketiga yang Anda unduh, semuanya perlu diimpor secara manual sebelum bisa digunakan.

1.  Cukup mengimpor seluruh modul secara langsung:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Modul `re` yang diimpor di sini digunakan untuk ekspresi reguler. Setelah modul diimpor, Anda dapat langsung memanggil fungsinya dengan menggunakan nama modul sebagai prefiks (misalnya, `re.`).

2.  Jika nama modul yang diimpor sudah digunakan dalam kode, Anda bisa memetakannya ke nama lain saat mengimpornya:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3.  Jika Anda (secara iseng) ingin, Anda bisa mengimpor seluruh modul ke dalam namespace saat ini, yang mungkin secara tidak sengaja menimpa variabel yang sudah Anda definisikan:

```python
match = 10  
from re import *  # Modul re memiliki fungsi match  
print match       # Mencetak fungsi match  
```

Karena Anda adalah orang baik, saya yakin Anda tidak akan melakukan ini.

### Operasi Aritmatika

Python 2.7 secara default menggunakan pembagian integer (pembagian bulat), jadi $ 5 / 2 = 2 $. Namun, seringkali kita tidak menginginkan pembagian bulat, jadi kita bisa mengimpor modul ini:

```python
from __future__ import division  
```

Setelah diimpor, hasilnya akan $5 / 2 = 2.5$.  
Pembagian bulat: $5 // 2 = 2$.

### Fungsi

#### Definisi Fungsi

Fungsi adalah aturan yang dapat menerima nol atau lebih input dan mengembalikan output tertentu. Di Python, kita mendefinisikan fungsi menggunakan `def nama_fungsi(parameter)`:

```python
def double(x):  
    """Anda bisa menulis penjelasan tentang fungsi di sini.  
    Contohnya, fungsi ini akan mengalikan input dengan 2"""  
    # Anda bisa menulis badan fungsi di sini, jangan lupa indentasi  
    return x * 2  
```
#### Penggunaan Fungsi

Di Python, fungsi adalah objek kelas satu (first-class object), yang berarti kita dapat menetapkan fungsi ke sebuah variabel, atau melewatkannya sebagai argumen ke fungsi lain:

```python
def apply_to_one(f):  
    """Memanggil fungsi f dan melewatkan 1 sebagai parameter fungsi"""  
    return f(1)  
my_double = double          # double mengacu pada fungsi yang didefinisikan di bagian sebelumnya  
x = apply_to_one(my_double) # x sama dengan 2  
```
#### Fungsi Anonim

Anda juga bisa membuat fungsi anonim melalui `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Sama dengan 5  
```

Anda bisa menetapkan `lambda` ke variabel lain, tetapi kebanyakan orang akan menyarankan Anda untuk tetap menggunakan `def`:

```python
another_double = lambda x: 2 * x      # Tidak disarankan  
def another_double(x): return 2 * x   # Praktik yang disarankan  
```

Tambahan:

*   `lambda` hanyalah sebuah ekspresi, badan fungsinya jauh lebih sederhana daripada `def`.
*   Badan `lambda` adalah sebuah ekspresi, bukan blok kode. Anda hanya bisa membungkus logika terbatas ke dalam ekspresi `lambda`.

#### Melewatkan Parameter Fungsi

Parameter fungsi dapat didefinisikan dengan nilai default. Jika ekspresi fungsi dipanggil tanpa parameter, nilai default akan digunakan; jika parameter disertakan, nilai yang ditentukan akan dilewatkan:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Mencetak "hello"  
my_print()            # Mencetak "my default message"  
```

Terkadang, sangat berguna juga untuk menentukan parameter langsung melalui namanya:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Mengembalikan 5  
subtract(0, 5)    # Mengembalikan -5  
subtract(b=5)     # Sama seperti sebelumnya, mengembalikan -5  
```
### String

Anda bisa menggunakan tanda kutip tunggal atau ganda untuk membuat string (pastikan tanda kutip berpasangan):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Gunakan garis miring terbalik (backslash) untuk karakter escape, contohnya:

```python
tab_string = "\t"      # Representasi tab  
len(tab_string)        # Sama dengan 1  
```

Ketika Anda ingin menggunakan garis miring terbalik itu sendiri (misalnya untuk direktori Windows atau ekspresi reguler), Anda bisa mendefinisikannya dengan string mentah `r""`:

```python
not_tab_string = r"\t" # Merepresentasikan karakter '\' dan 't'  
len(not_tab_string)    # Sama dengan 2  
```

Buat string multibarisan menggunakan tiga tanda kutip ganda:

```python
multi_line_string = """Ini adalah baris pertama  
Ini adalah baris kedua  
Ini adalah baris ketiga"""  
```

### Penanganan Pengecualian (Exception Handling)

Ketika program mengalami kesalahan, Python akan mengeluarkan sebuah `exception` (pengecualian). Jika kita tidak menanganinya, program akan berhenti dieksekusi. Untuk menangkap pengecualian, kita bisa menggunakan pernyataan `try` dan `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Tidak bisa dibagi nol"  
```

Meskipun dalam bahasa lain pengecualian dianggap sebagai hal yang buruk, di Python, penanganan pengecualian yang lebih banyak akan membuat kode Anda lebih ringkas dan bersih.

### Daftar (List)

#### Membuat Daftar

Daftar adalah koleksi terurut yang sederhana, dan juga merupakan struktur data paling dasar di Python (mirip dengan array di bahasa lain, tetapi daftar memiliki beberapa fitur tambahan). Membuat daftar:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Sama dengan 3  
list_sum = sum(integer_list)      # Sama dengan 6  
```
#### Mengakses Nilai dalam Daftar

Anda bisa mengindeks nilai dalam daftar menggunakan kurung siku:

```python
x = range(10)       # Mendapatkan daftar x = [0, 1, ..., 9]  
zero = x[0]         # Sama dengan 0, indeks daftar dimulai dari 0  
one = x[1]          # Sama dengan 1  
nine = x[-1]        # Sama dengan 9, elemen terakhir dalam daftar  
eight = x[-2]       # Sama dengan 8, elemen kedua terakhir dalam daftar  
x[0] = -1           # Daftar x saat ini = [-1, 1, 2, 3, ..., 9]  
```

#### Memotong Daftar (Slicing)

Anda bisa memotong daftar menggunakan kurung siku:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Anda bisa menggunakan `in` untuk memeriksa apakah sebuah elemen ada dalam daftar:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Metode pencarian elemen ini sangat tidak efisien. Gunakan hanya jika daftar sangat kecil atau Anda tidak terlalu peduli dengan waktu pencarian.

#### Menggabungkan Daftar

Di Python, sangat mudah untuk menggabungkan dua daftar:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # x saat ini = [1,2,3,4,5,6]  
```

Jika Anda tidak ingin mengubah daftar `x` yang asli, Anda bisa menggunakan operator "penjumlahan" untuk membuat daftar baru:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # y saat ini = [1, 2, 3, 4, 5, 6]; x tidak berubah  
```

Seringkali, kita menambahkan satu elemen ke daftar dengan cara ini:

```python
x = [1, 2, 3]  
x.append(0)           # x saat ini = [1, 2, 3, 0]  
y = x[-1]             # Sama dengan 0  
z = len(x)            # Sama dengan 4  
```

#### Memecah Daftar (Unpacking)

Jika Anda tahu berapa banyak elemen dalam daftar, sangat mudah untuk membongkar daftar ini:

```python
x, y = [1, 2]         # x saat ini = 1, y = 2  
```

Jika jumlah elemen di kedua sisi persamaan tidak cocok, Anda akan mendapatkan `ValueError`. Oleh karena itu, kita lebih sering menggunakan garis bawah untuk menampung sisa bagian dari daftar:

```python
_, y = [1, 2]         # y saat ini == 2, elemen pertama diabaikan  
```

### Tuple

Daftar dan tuple sangat mirip. Satu-satunya perbedaan dengan daftar adalah elemen dalam tuple tidak dapat dimodifikasi.

#### Membuat Tuple

Anda bisa menggunakan kurung biasa atau tanpa kurung sama sekali untuk membuat tuple:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # my_list saat ini adalah [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Tidak bisa mengubah tuple"  
```

Menggunakan tuple sangat nyaman untuk mendapatkan beberapa nilai kembalian dari sebuah fungsi:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Sama dengan (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tuple (dan daftar) mendukung penugasan nilai ke beberapa elemen secara bersamaan:

```python
x, y = 1, 2       # x saat ini = 1, y = 2  
x, y = y, x       # Menukar nilai dua variabel di Python; x saat ini = 2, y = 1  
```

### Kamus (Dictionary)

#### Membuat Kamus

Struktur data dasar lain di Python adalah kamus (dictionary), yang memungkinkan Anda mendapatkan nilai (value) yang sesuai dengan cepat melalui kunci (key):

```python
empty_dict = {}                       # Definisi kamus kosong yang sangat 'Pythonic'  
empty_dict2 = dict()                  # Definisi kamus kosong yang kurang 'Pythonic'  
grades = { "Joel" : 80, "Tim" : 95 }  # Penyimpanan kamus  
```

#### Mencari Elemen Kamus

Anda bisa menggunakan kurung siku bersama kunci untuk mencari nilai yang sesuai:

```python
joels_grade = grades["Joel"]          # Sama dengan 80  
```

Jika kunci yang dicari tidak ada dalam kamus, akan mengembalikan `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Tidak ada nilai untuk Kate!"  
```

Anda bisa menggunakan `in` untuk memeriksa apakah sebuah kunci ada dalam kamus:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Kamus memiliki metode yang dapat mengembalikan nilai default. Jika kunci yang dicari tidak ada dalam kamus, ia akan mengembalikan nilai default yang telah ditetapkan (bukan menyebabkan pengecualian):

```python
joels_grade = grades.get("Joel", 0)   # Sama dengan 80  
kates_grade = grades.get("Kate", 0)   # Sama dengan 0  
no_ones_grade = grades.get("No One")  # Mengembalikan nilai default None  
```

#### Mengubah Kamus

Anda bisa menggunakan kurung siku untuk membuat dan memodifikasi pasangan kunci-nilai dalam kamus:

```python
grades["Tim"] = 99                    # Mengganti nilai lama  
grades["Kate"] = 100                  # Menambah pasangan kunci-nilai baru  
num_students = len(grades)            # Sama dengan 3  
```

Kita akan sering menggunakan kamus seperti ini untuk merepresentasikan struktur data:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Selain mencari kunci tertentu, kita juga bisa memanipulasi semua kunci seperti ini:

```python
tweet_keys = tweet.keys()             # Mendapatkan daftar kunci  
tweet_values = tweet.values()         # Mendapatkan daftar nilai  
tweet_items = tweet.items()           # Mendapatkan tuple (kunci, nilai)  
"user" in tweet_keys                  # Mengembalikan True, menggunakan pencarian `in` daftar yang kurang efisien  
"user" in tweet                       # Cara yang lebih 'Pythonic', menggunakan pencarian `in` kamus yang efisien  
"joelgrus" in tweet_values            # True  
```

Kunci dalam kamus adalah unik, dan daftar tidak dapat digunakan sebagai kunci kamus. Jika Anda memerlukan kunci multi-bagian, Anda bisa menggunakan tuple, atau mengubah kunci menjadi string melalui beberapa cara.

#### Kamus Bawaan (Defaultdict)

Jika Anda mencoba menghitung frekuensi setiap kata dalam sebuah dokumen, cara yang jelas adalah membuat kamus di mana kata-kata berfungsi sebagai kunci dan frekuensinya sebagai nilai yang sesuai. Kemudian, iterasi dokumen tersebut. Jika bertemu kata yang sudah ada, tambahkan 1 ke nilai kunci yang sesuai di kamus; jika bertemu kata yang belum ada, tambahkan pasangan kunci-nilai baru ke kamus:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Tentu saja, Anda juga bisa menangani kunci yang hilang sebelumnya dengan pendekatan "mencoba dulu, baru tangani jika gagal" seperti ini:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Metode ketiga adalah menggunakan `get`, metode ini sangat baik dalam menangani kunci yang hilang:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Kamus bawaan (defaultdict) sama dengan kamus biasa, satu-satunya perbedaan adalah ketika Anda mencoba mencari kunci yang tidak ada dalam kamus, `defaultdict` akan secara otomatis membuat pasangan kunci-nilai menggunakan kunci yang Anda berikan. Untuk menggunakan `defaultdict`, Anda perlu mengimpor pustaka `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() menghasilkan 0  
for word in document:  
    word_counts[word] += 1  
```

Defaultdict juga sangat berguna dalam daftar, kamus biasa, bahkan fungsi kustom:

```python
dd_list = defaultdict(list)           # list() menghasilkan daftar kosong  
dd_list[2].append(1)                  # dd_list saat ini adalah {2: [1]}  
dd_dict = defaultdict(dict)           # dict() menghasilkan kamus kosong  
dd_dict["Joel"]["City"] = "Seattle"   # Konten dd_dict saat ini adalah { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Membuat kamus di mana nilai untuk kunci adalah daftar  
dd_pair[2][1] = 1                     # Konten dd_pair saat ini adalah {2: [0,1]}  
```

Metode ini sangat berguna, di masa mendatang ketika kita ingin mendapatkan hasil nilai dari kunci tertentu dalam kamus, kita tidak perlu lagi memeriksa apakah kuncinya ada atau tidak.

### Penghitung (Counter)

Counter dapat langsung mengubah sekumpulan nilai menjadi objek mirip kamus, di mana kuncinya adalah salah satu elemen dalam kumpulan tersebut, dan nilai yang sesuai adalah jumlah kemunculan elemen tersebut. Ini sering digunakan saat membuat histogram:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (kurang lebih) adalah { 0 : 2, 1 : 1, 2 : 1 }  
```

Dengan demikian, kita memiliki cara yang sangat nyaman untuk menghitung frekuensi kata:

```python
word_counts = Counter(document)  
```

Counter juga memiliki metode `most_common` yang sangat sering digunakan, yang dapat langsung mendapatkan beberapa kata paling sering muncul beserta frekuensinya:

```python
# Mencetak 10 kata paling sering muncul beserta jumlahnya  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Set

Struktur data lain di Python adalah set (himpunan). Set adalah kumpulan elemen-elemen unik.  
Anda bisa membuat set dan menambahkan elemen ke dalamnya seperti ini:

```python
s = set()  
s.add(1)          # s adalah { 1 }  
s.add(2)          # s adalah { 1, 2 }  
s.add(2)          # s adalah { 1, 2 }  
x = len(s)        # Sama dengan 2  
y = 2 in s        # Sama dengan True  
z = 3 in s        # Sama dengan False  
```

Dua alasan utama menggunakan set:

Pertama, operasi `in` dalam set sangat efisien. Ketika jumlah elemen dalam sebuah dataset sangat besar, mencari elemen dalam bentuk set jelas lebih cocok daripada dalam bentuk daftar:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Gagal, perlu memeriksa setiap elemen  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Pencarian berhasil dan sangat cepat  
```

Kedua, menggunakan set sangat nyaman untuk mendapatkan elemen-elemen unik dari sekumpulan data:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Namun, pada kenyataannya, frekuensi penggunaan set tidak setinggi kamus dan daftar.

### Pernyataan Kondisional

Dalam sebagian besar bahasa pemrograman, Anda bisa menggunakan `if` untuk menyatakan percabangan kondisional seperti ini:

```python
if 1 > 2:  
    message = "andai saja 1 lebih besar dari dua…"  
elif 1 > 3:  
    message = "elif adalah singkatan dari 'else if'"  
else:  
    message = "jika semua gagal, gunakan else (jika Anda mau)"  
```

Anda juga bisa menulis pernyataan percabangan kondisional dalam satu baris seperti ini, tetapi ini jarang digunakan:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Pernyataan Perulangan (Loop)

#### Perulangan _while_

Perulangan `while` di Python:

```python
x = 0  
while x < 10:  
    print x, "kurang dari 10"  
    x += 1  
```

#### Perulangan _for_

Yang lebih sering digunakan adalah perulangan `for-in`:

```python
for x in range(10):  
    print x, "kurang dari 10"  
```

Ekspresi logika yang lebih kompleks dapat menggunakan pernyataan `continue` dan `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Langsung masuk ke iterasi berikutnya  
    if x == 5:  
        break             # Keluar sepenuhnya dari perulangan  
    print x  
```

Hasilnya akan mencetak 0, 1, 2, dan 4.

### Kebenaran (Truthiness)

Variabel Boolean di Python digunakan mirip dengan bahasa lain, satu-satunya perbedaan adalah huruf awalnya harus kapital:

```python
one_is_less_than_two = 1 < 2      # Adalah True  
true_equals_false = True == False # Adalah False  
```

Python menggunakan `None` untuk menunjukkan bahwa suatu nilai tidak ada, mirip dengan `null` di bahasa lain:

```python
x = None  
print x == None        # Mencetak True, kurang elegan  
print x is None        # Mencetak True, lebih elegan  
```

Python memungkinkan Anda menggunakan nilai lain sebagai pengganti nilai boolean. Berikut ini semuanya setara dengan `False`:

*   False
*   None
*   [] (daftar kosong)
*   {} (kamus kosong)
*   ""
*   set()
*   0
*   0.0

Demikian pula, ada banyak nilai yang setara dengan `True`. Ini sangat memudahkan Anda untuk memeriksa daftar kosong, string kosong, kamus kosong, dan lain-lain.

Tentu saja, jika Anda tidak bisa memprediksi hasilnya, mungkin akan terjadi kesalahan selama penggunaan:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Cara yang lebih sederhana, dengan efek yang sama seperti di atas:

```python
first_char = s and s[0]  
```

Jika nilai pertama adalah `True`, nilai kedua akan dikembalikan; jika tidak, nilai pertama akan dikembalikan.

Serupa, jika `x` mungkin berupa angka atau kosong, maka cara ini bisa mendapatkan `x` yang pasti berupa angka:

```python
safe_x = x or 0  
```

Python juga memiliki fungsi `all`, yang mengembalikan `True` jika setiap elemen adalah `True`. Fungsi `any` mengembalikan `True` jika setidaknya ada satu elemen yang `True`. Misalnya, untuk sebuah daftar di mana setiap elemen adalah "benar", fungsi `all` akan mengembalikan `True`, jika tidak akan mengembalikan `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} setara dengan 'False'  
any([True, 1, {}])          # True  
all([])                     # True, tidak ada elemen yang setara dengan 'False'  
any([])                     # False, tidak ada elemen yang setara dengan 'True'  
```

**Bacaan Lanjutan:**  
[Sintaks Python Umum dalam Ilmu Data (Lanjutan)](https://philoli.com/python-tutorails-advanced-level/)
