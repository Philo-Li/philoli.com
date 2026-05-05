---
title: Veri Biliminde Python'ın Sık Kullanılan Temel Sözdizimi
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

Son birkaç gündür [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresi](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)) kitabını inceliyordum. Bu, veri bilimine başlangıç için harika, anlaşılır bir kaynak. Kitabın bir bölümünde Python'ın temel sözdizimi ve veri biliminde sıkça kullanılan ileri düzey sözdizimi oldukça sade ve net bir şekilde anlatılmıştı. Bu anlatımı çok başarılı bulduğum için, kendime bir not olması amacıyla buraya çevirerek eklemek istedim.  
[Veri Biliminde Sık Kullanılan Python Sözdizimi (Temel Seviye)](https://philoli.com/2018/11/07/python-tutorails-basic-level/)  
[Veri Biliminde Sık Kullanılan Python Sözdizimi (İleri Seviye)](https://philoli.com/2018/11/09/python-tutorails-advanced-level/)  

Bu bölüm, veri işlemede son derece kullanışlı olan temel Python sözdizimi ve özelliklerine odaklanmaktadır (Python 2.7 tabanlı).

<!--more-->

### Girinti Biçimlendirmesi

Birçok dil kod bloklarını parantezlerle kontrol ederken, Python girintileri kullanır:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # "for i" döngüsünün ilk satırı  
    for j in [1, 2, 3, 4, 5]:  
        print j      # "for j" döngüsünün ilk satırı  
        print i + j  # "for j" döngüsünün son satırı  
    print i          # "for i" döngüsünün son satırı  
print "done looping"  
```

Bu, Python kodunu son derece okunabilir kılar, ancak aynı zamanda biçimlendirmeye her zaman dikkat etmeniz gerektiği anlamına gelir. Parantez içindeki boşluklar göz ardı edilir, bu da uzun ifadeler yazarken oldukça işe yarar:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

ve kodu daha okunur hale getirir:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Çok Satırlı İfadeler

İki ayrı satırı birleştirmek için ters eğik çizgi (backslash) kullanabilirsiniz (bu yöntem nadiren kullanılır):  

```python
two_plus_three = 2 + \
                 3  
```

### Modüller

İster Python'ın kendi modülleri olsun ister dışarıdan indirdiğiniz üçüncü taraf modüller, kullanabilmek için manuel olarak içe aktarılmaları gerekir.

1. Tüm modülü doğrudan içe aktarmak:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Burada içe aktarılan `re` modülü düzenli ifadeler (regular expressions) içindir. Modülü içe aktardıktan sonra, belirli işlevleri doğrudan modül adını (re.) önek olarak kullanarak çağırabilirsiniz.

2. Eğer içe aktarılacak modülün adı kodunuzda zaten kullanılıyorsa, modülü içe aktarırken farklı bir adla eşleştirebilirsiniz:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Eğer 'kötü' biriyseniz, tüm modülü mevcut ad alanına aktarabilirsiniz. Bu, zaten tanımlamış olduğunuz değişkenleri istemeden üzerine yazabilir:

```python
match = 10  
from re import *  # re modülünde bir match fonksiyonu var  
print match       # match fonksiyonunu çıktılar  
```

Ama siz iyi bir insan olduğunuz için, böyle bir şey yapmayacağınıza eminim.

### Aritmetik İşlemler

Python 2.7 varsayılan olarak tam sayı bölmesi yapar, bu yüzden $ 5 / 2 = 2 $ sonucunu verir. Ancak çoğu zaman tam sayı bölmesi istemeyiz, bu yüzden şu modülü içe aktarabiliriz:

```python
from __future__ import division  
```

Bu içe aktarımdan sonra $5 / 2 = 2.5$ olur.  
Tam sayı bölmesi (floor division) için: $5 // 2 = 2$.

### Fonksiyonlar

#### Fonksiyon Tanımlama


Fonksiyon, sıfır veya daha fazla girdi alabilen ve belirli bir çıktı döndüren bir kuraldır. Python'da bir fonksiyonu `def fonksiyon_adı(parametreler):` şeklinde tanımlarız:

```python
def double(x):  
    """Burada fonksiyonun işlevine dair bir açıklama yazabilirsiniz.  
    Örneğin, bu fonksiyon girdiyi 2 ile çarpar."""  
    # Fonksiyonun gövdesini buraya yazabilirsiniz, girintiye dikkat edin.  
    return x * 2  
```
#### Fonksiyon Kullanımı


Python'da fonksiyonlar 'birinci sınıf vatandaşlardır' (first-class citizens). Bu, bir fonksiyonu bir değişkene atayabileceğimiz veya başka bir fonksiyona argüman olarak geçirebileceğimiz anlamına gelir:

```python
def apply_to_one(f):  
    """f fonksiyonunu çağırır ve 1'i parametre olarak verir"""  
    return f(1)  
my_double = double          # double yukarıdaki bölümde tanımlanan fonksiyona işaret eder.  
x = apply_to_one(my_double) # x değeri 2 olur.  
```
#### Anonim Fonksiyonlar


Ayrıca `lambda` kullanarak isimsiz (anonim) fonksiyonlar oluşturabiliriz:

```python
y = apply_to_one(lambda x: x + 4)     # Sonuç 5 olur.  
```

`lambda` ifadelerini başka değişkenlere atayabilirsiniz, ancak çoğu kişi yine de `def` kullanmanızı tavsiye eder:

```python
another_double = lambda x: 2 * x      # Önerilmez  
def another_double(x): return 2 * x   # Önerilen yöntem  
```

Ek olarak:

*   `lambda` sadece bir ifadedir; fonksiyon gövdesi `def`'e göre çok daha basittir.
*   `lambda`'nın gövdesi bir kod bloğu değil, bir ifadedir. Bu nedenle `lambda` ifadesine yalnızca sınırlı mantık sığdırılabilir.

#### Fonksiyon Parametreleri

Fonksiyon parametreleri varsayılan değerlere sahip olabilir. Fonksiyon çağrısında parametre belirtilmezse varsayılan değer kullanılır, belirtilirse gönderilen değer geçerli olur:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # "hello" çıktısını verir.  
my_print()            # "my default message" çıktısını verir.  
```

Bazen parametreleri doğrudan adlarıyla belirtmek de çok kullanışlıdır:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # 5 döndürür.  
subtract(0, 5)    # -5 döndürür.  
subtract(b=5)     # Bir öncekiyle aynı, -5 döndürür.  
```
### Dizeler (Strings)

Dizeleri (string) tek veya çift tırnak kullanarak oluşturabilirsiniz (tırnaklar mutlaka eşleşmelidir):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Kaçış karakterlerini (escape characters) belirtmek için ters eğik çizgi (backslash) kullanırız, örneğin:

```python
tab_string = "\t"      # tab karakterini temsil eder.  
len(tab_string)        # Sonuç 1'dir.  
```

Ters eğik çizginin kendisini kullanmak istediğinizde (Windows dizinleri veya düzenli ifadeler için), bunu ham dize `r""` kullanarak tanımlayabilirsiniz:

```python
not_tab_string = r"\t" # '\' ve 't' karakterlerini temsil eder.  
len(not_tab_string)    # Sonuç 2'dir.  
```

Üç çift tırnak kullanarak çok satırlı dizeler oluşturabilirsiniz:

```python
multi_line_string = """Bu birinci satır  
Bu ikinci satır  
Bu üçüncü satır"""  
```

### Hata Yönetimi (Exception Handling)

Bir program hata verdiğinde, Python bir `istisna (exception)` fırlatır. Eğer bunu ele almazsak, programın çalışması sonlanır. İstisnaları `try` ve `except` ifadeleriyle yakalayabiliriz:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Sıfıra bölünemez!"  
```

Diğer dillerde istisnalar genellikle kötü bir durum olarak görülse de, Python'da istisnaları ele almak kodunuzu daha kısa ve temiz hale getirebilir.

### Listeler

#### Liste Oluşturma

Listeler, Python'daki en temel veri yapılarından biri olan basit, sıralı koleksiyonlardır (diğer dillerdeki dizilere benzerler, ancak bazı ek özelliklere sahiptirler). Bir liste oluşturmak için:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Sonuç 3'tür.  
list_sum = sum(integer_list)      # Sonuç 6'dır.  
```
#### Liste Elemanlarına Erişme


Listelerdeki değerlere köşeli parantezlerle erişebilirsiniz:

```python
x = range(10)       # x listesi [0, 1, ..., 9] olarak elde edilir.  
zero = x[0]         # Sonuç 0'dır, liste indeksleri 0'dan başlar.  
one = x[1]          # Sonuç 1'dir.  
nine = x[-1]        # Sonuç 9'dur, listedeki son eleman.  
eight = x[-2]       # Sonuç 8'dir, listedeki sondan ikinci eleman.  
x[0] = -1           # Mevcut x listesi [-1, 1, 2, 3, ..., 9] olur.  
```

#### Liste Dilimleme


Listeleri köşeli parantezlerle dilimleyebilirsiniz:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Bir elemanın listede olup olmadığını `in` operatörüyle kontrol edebilirsiniz:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Bu eleman arama yöntemi çok verimsizdir; yalnızca liste çok küçükse veya arama süresi sizin için önemli değilse kullanın.

#### Liste Birleştirme

Python'da iki listeyi birleştirmek çok kolaydır:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Mevcut x listesi [1,2,3,4,5,6] olur.  
```

Eğer orijinal `x` listesini değiştirmek istemiyorsanız, '+' operatörünü kullanarak yeni bir liste oluşturabilirsiniz:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Mevcut y listesi [1, 2, 3, 4, 5, 6] olur; x değişmez.  
```

Genellikle listeye birer birer eleman eklemek için şu yöntem kullanılır:

```python
x = [1, 2, 3]  
x.append(0)           # Mevcut x listesi [1, 2, 3, 0] olur.  
y = x[-1]             # Sonuç 0'dır.  
z = len(x)            # Sonuç 4'tür.  
```

#### Liste Ayrıştırma

Bir listede kaç eleman olduğunu biliyorsanız, bu listeyi kolayca ayrıştırabilirsiniz:

```python
x, y = [1, 2]         # Mevcut x = 1, y = 2 olur.  
```

Eşitliğin her iki tarafındaki eleman sayısı eşleşmezse, bir `ValueError` alırsınız. Bu yüzden listenin geri kalanını tutmak için genellikle alt çizgi (`_`) kullanırız:

```python
_, y = [1, 2]         # Mevcut y == 2 olur, ilk eleman göz ardı edilir.  
```

### Demetler (Tuples)

Listeler ve demetler (tuples) birbirine çok benzer; tek fark, demetlerdeki elemanların değiştirilememesidir.

#### Demet Oluşturma

Yuvarlak parantezler kullanarak veya hiç parantez kullanmadan demet oluşturabilirsiniz:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Mevcut my_list [1, 3] olur.  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Demet değiştirilemez."  
```

Demetler, fonksiyonlardan birden fazla değer döndürmek için çok kullanışlıdır:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Sonuç (5, 6) olur.  
s, p = sum_and_product(5, 10) # s = 15, p = 50 olur.  
```

Demetler (ve listeler) aynı anda birden fazla elemana değer atamayı destekler:

```python
x, y = 1, 2       # Mevcut x = 1, y = 2 olur.  
x, y = y, x       # Python'da iki değişkenin değerlerini değiştirme; mevcut x = 2, y = 1 olur.  
```

### Sözlükler (Dictionaries)

#### Sözlük Oluşturma

Python'daki bir diğer temel veri yapısı sözlüklerdir. Sözlükler, bir anahtar (key) aracılığıyla ilgili değere (value) hızlıca erişmenizi sağlar:

```python
empty_dict = {}                       # Çok Python'vari boş sözlük tanımı.  
empty_dict2 = dict()                  # O kadar da Python'vari olmayan boş sözlük tanımı.  
grades = { "Joel" : 80, "Tim" : 95 }  # Sözlük depolama.  
```

#### Sözlük Elemanlarını Bulma

Köşeli parantezleri ve anahtarı kullanarak ilgili değeri bulabilirsiniz:

```python
joels_grade = grades["Joel"]          # Sonuç 80'dir.  
```

Eğer aradığınız anahtar sözlükte yoksa, bir `KeyError` döndürülür:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Kate için not yok!"  
```

Bir anahtarın sözlükte olup olmadığını `in` operatörüyle kontrol edebilirsiniz:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Sözlüklerin, aranan anahtarın sözlükte bulunmaması durumunda (istisna fırlatmak yerine) belirlenen varsayılan bir değeri döndüren bir yöntemi vardır:

```python
joels_grade = grades.get("Joel", 0)   # Sonuç 80'dir.  
kates_grade = grades.get("Kate", 0)   # Sonuç 0'dır.  
no_ones_grade = grades.get("No One")  # Varsayılan değer olarak None döndürür.  
```

#### Sözlük Değiştirme

Köşeli parantezleri kullanarak sözlükteki anahtar-değer çiftlerini oluşturabilir veya değiştirebilirsiniz:

```python
grades["Tim"] = 99                    # Eski değeri değiştirir.  
grades["Kate"] = 100                  # Yeni bir anahtar-değer çifti ekler.  
num_students = len(grades)            # Sonuç 3'tür.  
```

Veri yapılarını ifade etmek için sözlükleri sıklıkla bu şekilde kullanacağız:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Belirli anahtarları aramanın yanı sıra, tüm anahtarlar üzerinde şu şekilde işlem yapabiliriz:

```python
tweet_keys = tweet.keys()             # Anahtar listesini elde eder.  
tweet_values = tweet.values()         # Değer listesini elde eder.  
tweet_items = tweet.items()           # (anahtar, değer) demetlerini elde eder.  
"user" in tweet_keys                  # True döndürür, ancak bu, listelerdeki in aramasının daha az verimli olması nedeniyle gerçekleşir.  
"user" in tweet                       # Daha Python'vari bir kullanım, sözlüklerdeki verimli in aramasını kullanır.  
"joelgrus" in tweet_values            # True  
```

Sözlüklerdeki anahtarlar benzersizdir ve listeler sözlük anahtarı olarak kullanılamaz. Çok parçalı bir anahtara ihtiyacınız varsa, demetleri kullanabilir veya anahtarları bir şekilde dizelere dönüştürebilirsiniz.

#### Yerleşik Sözlükler (defaultdict)

Eğer bir belgedeki her kelimenin sıklığını saymaya çalışıyorsanız, bariz bir yaklaşım, kelimeleri anahtar, frekanslarını ise değer olarak tutan bir sözlük oluşturmaktır. Ardından belgeyi dolaşırken, zaten mevcut olan bir kelimeyle karşılaşırsanız sözlükteki değerini 1 artırırsınız; yeni bir kelimeyle karşılaşırsanız da sözlüğe yeni bir anahtar-değer çifti eklersiniz:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Elbette, eksik bir anahtarı önceden ele almak için 'önce dene, sonra düzelt' (EAFP - Easier to Ask Forgiveness than Permission) yaklaşımını da kullanabilirsiniz:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Üçüncü yöntem ise `get` metodunu kullanmaktır; bu metot eksik anahtarların işlenmesinde mükemmel performans gösterir:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Yerleşik sözlükler (defaultdict) normal sözlükler gibidir; tek fark, sözlükte bulunmayan bir anahtarı aramaya çalıştığınızda, yerleşik sözlüğün sağladığınız anahtarı kullanarak otomatik olarak bir anahtar-değer çifti oluşturmasıdır. Yerleşik sözlükleri kullanmak için `collections` kütüphanesini içe aktarmanız gerekir:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() 0 üretir.  
for word in document:  
    word_counts[word] += 1  
```

Yerleşik sözlükler listeler, normal sözlükler ve hatta özel fonksiyonlarla da çok kullanışlıdır:

```python
dd_list = defaultdict(list)           # list() boş bir liste üretir.  
dd_list[2].append(1)                  # Mevcut dd_list {2: [1]} olur.  
dd_dict = defaultdict(dict)           # dict() boş bir sözlük üretir.  
dd_dict["Joel"]["City"] = "Seattle"   # Mevcut dd_dict içeriği { "Joel" : { "City" : "Seattle"}} olur.  
dd_pair = defaultdict(lambda: [0, 0]) # Değeri liste olan bir anahtar-değer sözlüğü oluşturur.  
dd_pair[2][1] = 1                     # Mevcut dd_pair içeriği {2: [0,1]} olur.  
```

Bu yöntem çok kullanışlıdır; ileride sözlükteki belirli anahtar-değer sonuçlarını almak istediğimizde anahtarın var olup olmadığını kontrol etmemize gerek kalmaz.

### Sayaç (Counter)

Sayaç (Counter), bir değer grubunu doğrudan sözlük benzeri bir nesneye dönüştürebilir; bu nesnede anahtar, grubun bir elemanı olurken, değer ise o elemanın kaç kez geçtiğini gösterir. Bu, histogram oluştururken sıkça kullanılır:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (yaklaşık olarak) { 0 : 2, 1 : 1, 2 : 1 } olur.  
```

Böylece kelime frekanslarını saymak için çok kullanışlı bir yöntemimiz olur:

```python
word_counts = Counter(document)  
```

Sayaçların sıkça kullanılan bir diğer metodu `most_common`'dır; bu metot doğrudan en sık geçen birkaç kelimeyi ve bunların frekanslarını elde etmenizi sağlar:

```python
# En sık geçen ilk 10 kelimeyi ve sayımlarını yazdırır.  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Kümeler (Sets)

Python'daki bir diğer veri yapısı kümelerdir. Kümeler, farklı elemanların bir koleksiyonudur.  
Bir küme oluşturmak ve içine eleman eklemek için şu yolu izleyebilirsiniz:

```python
s = set()  
s.add(1)          # s { 1 } olur.  
s.add(2)          # s { 1, 2 } olur.  
s.add(2)          # s { 1, 2 } olur.  
x = len(s)        # Sonuç 2'dir.  
y = 2 in s        # True  
z = 3 in s        # False  
```

Küme kullanmak için iki ana neden:

Birincisi, kümelerdeki `in` işlemi çok verimlidir. Bir veri setindeki eleman sayısı çok büyük olduğunda, elemanları bir küme içinde aramak açıkça bir listeden daha uygun ve hızlıdır:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Başarısız, her elemanı kontrol etmek gerekir.  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Arama başarılı ve çok hızlıdır.  
```

İkincisi, bir veri grubundaki farklı elemanları elde etmek için kümeler çok kullanışlıdır:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Ancak pratikte, kümeler sözlükler ve listeler kadar sık kullanılmaz.

### Koşullu İfadeler

Çoğu programlama dilinde, koşullu dallanmaları `if` kullanarak şu şekilde ifade edebilirsiniz:

```python
if 1 > 2:  
    message = "keşke 1 ikiden büyük olsaydı…"  
elif 1 > 3:  
    message = "elif 'else if' anlamına gelir."  
else:  
    message = "başka her şey başarısız olursa else kullanın (isterseniz)."  
```

Koşullu dallanma ifadelerini tek bir satırda da yazabilirsiniz, ancak bu nadiren kullanılır:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Döngü İfadeleri

#### `while` Döngüsü


Python'daki `while` döngüsü:

```python
x = 0  
while x < 10:  
    print x, "10'dan küçüktür."  
    x += 1  
```

#### `for` Döngüsü

Daha sık kullanılan yöntem `for-in` döngüsünü kullanmaktır:

```python
for x in range(10):  
    print x, "10'dan küçüktür."  
```

Daha karmaşık mantık ifadeleri için `continue` ve `break` deyimlerini kullanabilirsiniz:

```python
for x in range(10):  
    if x == 3:  
        continue          # Bir sonraki döngüye geçer.  
    if x == 5:  
        break             # Döngüden tamamen çıkar.  
    print x  
```

Sonuç olarak 0, 1, 2 ve 4 yazdırılır.

### Doğruluk Değeri (Truthiness)

Python'daki Boole değişkenlerinin kullanımı diğer dillerdekilere benzerdir; tek fark, ilk harfinin mutlaka büyük yazılması gerektiğidir:

```python
one_is_less_than_two = 1 < 2      # True  
true_equals_false = True == False # False  
```

Python, bir değerin mevcut olmadığını belirtmek için `None` kullanır, bu da diğer dillerdeki `null`'a benzerdir:

```python
x = None  
print x == None        # True çıktısını verir, ancak bu çok zarif değil.  
print x is None        # True çıktısını verir, bu daha zarif.  
```

Python, Boole değerleri yerine başka değerler kullanmanıza izin verir. Aşağıdakilerin hepsi `False`'a eşdeğerdir:

*   False
*   None
*   [] (boş bir liste)
*   {} (boş bir sözlük)
*   “”
*   set()
*   0
*   0.0

Benzer şekilde birçok `True` eşdeğer değeri de vardır, bu da boş listeleri, boş dizeleri ve boş sözlükleri vb. kontrol etmeyi çok kolaylaştırır.

Elbette, sonucu tahmin edemezseniz, kullanım sırasında hatalarla karşılaşabilirsiniz:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Daha basit bir yöntem, yukarıdaki ile aynı etkiye sahiptir:

```python
first_char = s and s[0]  
```

Eğer ilk değer doğru (True) ise, ikinci değer döndürülür; aksi takdirde ilk değer döndürülür.

Benzer şekilde, eğer `x` bir sayı olabilir veya boş olabilirse, kesinlikle sayı olan bir `x` elde etmek için şöyle yapabilirsiniz:

```python
safe_x = x or 0  
```

Python'da ayrıca, her eleman `True` olduğunda `True` döndüren bir `all` fonksiyonu bulunur. `any` fonksiyonu ise, tek bir eleman `True` olduğunda `True` döndürür. Örneğin, her elemanı 'doğru' olan bir liste için `all` fonksiyonu `True` döndürür, aksi takdirde `False` döndürür:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} 'False'a eşdeğerdir.  
any([True, 1, {}])          # True  
all([])                     # True, 'False'a eşdeğer bir eleman bulunmadığı için.  
any([])                     # False, 'True'ya eşdeğer bir eleman bulunmadığı için.  
```

**İleri Okuma:**  
[Veri Biliminde Sık Kullanılan Python Sözdizimi (İleri Seviye)](https://philoli.com/python-tutorails-advanced-level/)
