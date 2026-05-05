---
title: Veri Biliminde Python'ın Sık Kullanılan Söz Dizimi (İleri Seviye)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
Son günlerde [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresi](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)) kitabına bakıyordum. Veri bilimine giriş için oldukça anlaşılır ve iyi bir kaynak. Kitaptaki bir bölüm Python'ın temel ve veri biliminde sık kullanılan ileri seviye söz dizimini oldukça sade ve net bir şekilde anlatıyordu. Bu anlatımı çok beğendiğim için, kendime not olması amacıyla buraya çeviriyorum.  
[Veri Biliminde Sık Kullanılan Python Söz Dizimi (Temel)](https://philoli.com/python-tutorails-basic-level/)  
[Veri Biliminde Sık Kullanılan Python Söz Dizimi (İleri Seviye)](https://philoli.com/python-tutorails-advanced-level/)  

Bu bölüm, veri işlemede oldukça faydalı olan Python'ın ileri seviye söz dizimi ve özelliklerini (Python 2.7 tabanlı) tanıtmaya odaklanmaktadır.

<!--more-->

### Sıralama Sorting

Python listelerini sıralamak istiyorsanız, listenin `sort` metodunu kullanabilirsiniz. Orijinal listeyi bozmak istemiyorsanız, `sorted` fonksiyonunu kullanarak sıralanmış yeni bir liste döndürebilirsiniz:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x değişmez
x.sort()            # şu anki x = [1,2,3,4]
sort veya sorted varsayılan olarak listeleri küçükten büyüğe doğru sıralar.
```

Büyükten küçüğe sıralamak isterseniz, `reverse = True` parametresini belirtebilirsiniz.

Ayrıca, listeyi belirli bir anahtara göre sıralamak için kendi sıralama fonksiyonunuzu da tanımlayabilirsiniz:

```python
# Mutlak değerine göre büyükten küçüğe sırala
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Kelimelerin tekrar sayısına göre büyükten küçüğe sırala
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Liste Anlayışları List Comprehensions

Sık sık bir listeden belirli öğeleri çıkarıp yeni bir liste oluşturmak, bazı öğelerin değerlerini değiştirmek veya her ikisini birden yapmak isteyebiliriz. Python'daki yaygın yöntem, Liste Anlayışları (List Comprehensions) kullanmaktır:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Benzer şekilde, listeleri sözlüklere veya kümelere dönüştürebilirsiniz:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Listedeki öğeleri kullanmanız gerekmiyorsa, değişken olarak alt çizgi (_) kullanabilirsiniz:

```python
zeroes = [0 for _ in even_numbers] # even_numbers listesiyle aynı uzunlukta
```

Liste anlayışları çoklu `for` döngülerini destekler:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Toplam 100 çift: (0,0) (0,1) ... (9,8), (9,9)
```

Sonraki `for` döngüleri, önceki `for` döngülerinin sonuçlarını kullanabilir:

```python
increasing_pairs = [(x, y)                      # Sadece x < y olan veri çiftlerini içerir
                    for x in range(10)          # range(lo, hi) eşittir
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Liste anlayışlarını ileride sıkça kullanacağız.

### Üreteçler ve Yineleyiciler Generators and Iterators

Listelerin bir sorunu, dikkatsizce kullanıldığında çok büyük hale gelebilmeleridir; örneğin, `range(1000000)` bir milyon öğeli bir liste oluşturur. Verileri birer birer işlemek çok zaman alabilir (veya belleği tüketebilir). Oysa çoğu zaman sadece ilk birkaç veriye ihtiyacınız olabilir, bu durumda diğer işlemler gereksizdir.

Üreteçler ise yalnızca ihtiyacınız olan verileri yinelemenizi sağlar. Bir üreteç oluşturmak için fonksiyonları ve `yield` ifadesini kullanabilirsiniz:

```python
def lazy_range(n):
    """range'in tembel bir versiyonu"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Çevirmenin notu:
Üreteçler de özel bir tür yineleyicidir. `yield` anahtar kelimesi, üretecin yinelemeyi gerçekleştirmesinin anahtarıdır. Bir üretecin yürütmesini duraklatıp devam ettirme noktası olarak işlev görür; `yield` ifadesine bir değer atanabilir veya `yield` ifadesinin değeri döndürülebilir. `yield` ifadesi içeren herhangi bir fonksiyona üreteç denir. Bir üreteçten çıkıldığında, üreteç mevcut yürütme durumunu kaydeder ve bir sonraki yineleme değerini elde etmek için bir sonraki çağrıda kaldığı yerden devam eder. Liste yinelemesi büyük bellek alanı kaplarken, üreteç kullanımı neredeyse tek bir adres alanı kaplayarak bellek tasarrufu sağlar.

Aşağıdaki döngü, `yield`'deki değerleri teker teker, hepsi bitene kadar tüketecektir:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Aslında Python'ın yukarıdaki `_lazy_range_` etkisini gerçekleştiren kendi `xrange` fonksiyonu vardır; Python 3'te ise `range` varsayılan olarak tembeldir.) Bu, sonsuz bir dizi oluşturabileceğiniz anlamına gelir:

```python
def natural_numbers():
    """1, 2, 3, ... döndürür"""
    n = 1
    while True:
        yield n
        n += 1
```

Ancak, döngüden çıkış mantığı olmayan bu tür ifadelerin kullanılması tavsiye edilmez.

**İPUCU**
> Üreteçlerle yinelemenin bir dezavantajı, öğelerin baştan sona yalnızca bir kez yinelenebilmesidir. Birden fazla yineleme yapmak isterseniz, her seferinde yeni bir üreteç oluşturmanız veya bir liste kullanmanız gerekir.

İkinci bir üreteç oluşturma yöntemi: Parantez içindeki anlama ifadelerini kullanmak:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Sözlüklerdeki `items()` metodunun sözlükteki tüm anahtar-değer çiftlerinin bir listesini döndürdüğünü biliyoruz, ancak çoğu zaman `iteritems()` üreteç metodunu kullanarak her seferinde yalnızca bir anahtar-değer çifti üretip döndürerek yineleme yaparız.

### Rastgelelik Randomness
Veri bilimi öğrenirken sık sık rastgele sayılar üretmemiz gerekecek, bu yüzden sadece `random` modülünü içe aktararak kullanabiliriz:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() rastgele sayı üretir
# 0.7579544029403025,         # Rastgele sayı 0 ile 1 arasında normalize edilmiştir
# 0.420571580830845,          # Bu fonksiyon, rastgele sayı üretmek için en sık kullanılan fonksiyondur
# 0.25891675029296335]
```

Tekrarlanabilir sonuçlar elde etmek isterseniz, `random` modülünü `random.seed` ile ayarlanan dahili duruma göre sözde rastgele (yani deterministik) sayılar üretmesini sağlayabilirsiniz:

```python
random.seed(10)           # seed'i 10 olarak ayarla
print random.random()     # 0.57140259469
random.seed(10)           # seed'i tekrar 10 olarak ayarla
print random.random()     # 0.57140259469 tekrar
```

Bazen belirli bir aralıktaki rastgele bir sayı üretmek için `random.randrange` fonksiyonunu da kullanırız:

```python
random.randrange(10)      # range(10) = [0, 1, ..., 9] içinden rastgele bir sayı seçer
random.randrange(3, 6)    # range(3, 6) = [3, 4, 5] içinden rastgele bir sayı seçer
```

Bazen kullanımı çok pratik olan başka yöntemler de vardır; örneğin, `random.shuffle` bir listedeki öğelerin sırasını karıştırarak rastgele sıralanmış bir liste oluşturur:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Sizin sonucunuz farklı olabilir)
```

Bir listeden rastgele bir öğe seçmek isterseniz, `random.choice` metodunu kullanabilirsiniz:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Bana "Bob" çıktı
```

Hem rastgele bir dizi oluşturmak hem de orijinal listeyi bozmak istemiyorsanız, `random.sample` metodunu kullanabilirsiniz:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Birden fazla rastgele örnek seçimi (tekrarlara izin verilir) birden çok çağrı yaparak gerçekleştirebilirsiniz:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Düzenli İfadeler Regular Expressions

Düzenli ifadeler metin aramada kullanılır; biraz karmaşık olsalar da çok faydalıdırlar ve bu konuda birçok özel kitap bulunmaktadır. Onlarla karşılaştığımızda daha detaylı açıklayacağız, aşağıda Python'da düzenli ifadelerin kullanımına dair bazı örnekler verilmiştir:

```python
import re
print all([                                 # Aşağıdaki ifadelerin hepsi true döner, çünkü
    not re.match("a", "cat"),               # * 'cat' 'a' ile başlamaz
    re.search("a", "cat"),                  # * 'cat' kelimesi 'a' harfini içerir
    not re.search("c", "dog"),              # * 'dog' kelimesi 'c' harfini içermez
    3 == len(re.split("[ab]", "carbs")),    # * 'a' veya 'b'ye göre kelimeyi üç parçaya ayırır ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Sayıları tire ile değiştirir
    ])                                      # Çıktı True
```

### Nesne Yönelimli Programlama Object-Oriented Programming

Birçok dilde olduğu gibi, Python da verileri kapsülleyen sınıflar ve bu veriler üzerinde işlem yapan fonksiyonlar tanımlamanıza olanak tanır. Kodumuzu daha anlaşılır ve düzenli hale getirmek için bazen bunları kullanırız. Bol yorumlu bir örnekle açıklamak en basit yol olabilir. Python'ın yerleşik küme (Set) yapısı olmadığını varsayarsak, kendi `Set` sınıfımızı oluşturmak isteyebiliriz. Peki bu sınıf hangi özelliklere sahip olmalı? Örneğin, belirli bir `Set` verildiğinde, ona öğe ekleyebilmeli, öğe silebilmeli ve belirli bir değeri içerip içermediğini kontrol edebilmeliyiz. Bu nedenle, tüm bu işlevleri sınıfın üye fonksiyonları olarak oluşturacağız. Böylece, `Set` nesnesinden sonra nokta kullanarak bu üye fonksiyonlara erişebiliriz:

```python
# Geleneksel olarak, sınıf isimlerini _PascalCase_ olarak veririz
class Set:
    # Bunlar üye fonksiyonlarıdır
    # Her üye fonksiyonunun ilk parametresi "self"tir (başka bir gelenek)
    # "self", kullanılmakta olan belirli Set nesnesine karşılık gelir

    def __init__(self, values=None):
        """Bu, bir oluşturma fonksiyonudur
        Her yeni Set oluşturduğunuzda bu fonksiyon çağrılır
        Şu şekilde çağrılabilir
        s1 = Set() # Boş küme
        s2 = Set([1,2,2,3]) # Belirtilen değerlerle kümeyi başlatır"""
        self.dict = {} # Set'in her örneğinin kendi dict özelliği vardır
        # Bu özelliği her üyeyi takip etmek için kullanırız
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Bu, Set nesnesinin string ifadesidir
        Python komut penceresine string yazarak veya str() metodunu kullanarak nesneye string iletebilirsiniz"""
        return "Set: " + str(self.dict.keys())

    # self.dict içindeki bir anahtar olarak ve anahtarın değerini True yaparak üyeliği temsil edeceğiz
    def add(self, value):
        self.dict[value] = True

    # Eğer parametre sözlükteki bir anahtar ise, ilgili değer Set'in içindedir
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Ardından `Set`'i şu şekilde kullanabiliriz:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Fonksiyonel Araçlar Functional Tools

#### Kısmi Fonksiyonlar partial

Fonksiyonları iletirken, bazen bir fonksiyonun kısmi işlevselliğini kullanarak yeni bir fonksiyon oluşturmak isteyebiliriz. Basit bir örnekle, iki değişkenli bir fonksiyonumuz olduğunu varsayalım:

```python
def exp(base, power):
    return base ** power
```

Bunu kullanarak, tek bir değişken alan ve tabanı 2 olan bir kuvvet fonksiyonunun `exp(2, power)` sonucunu döndüren bir fonksiyon oluşturmak istiyoruz.

Elbette, `def` ile yeni bir fonksiyon tanımlayabiliriz, ancak bu pek akıllıca görünmeyebilir:

```python
def two_to_the(power):
  return exp(2, power)
```

Daha akıllıca bir yaklaşım `functools.partial` metodunu kullanmaktır:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Şu anki fonksiyonun sadece bir değişkeni var
print two_to_the(3)               # 8
```

Eğer isim belirtilirse, `partial` metodu diğer parametreleri de doldurmak için kullanılabilir:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Fonksiyonun ortasında parametrelerle oynamaya çalışırsanız, program hızla karmaşık hale gelecektir, bu yüzden bu tür davranışlardan kaçınmaya çalışın.

#### Eşleme map

Bazen liste anlayışlarının işlevsel bir alternatifi olarak `map`, `reduce` ve `filter` gibi fonksiyonları da kullanırız:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Aynı şekilde
list_doubler = partial(map, double)     # Fonksiyonun amacı listeyi ikiye katlamak
twice_xs = list_doubler(xs)             # Bu da [2, 4, 6, 8]
```

`map` metodu ayrıca çok parametreli fonksiyonların birden fazla listeye eşlenmesi için de kullanılabilir:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtreleme filter

Benzer şekilde, `filter` listelerdeki `if` işlevini gerçekleştirir:

```python
def is_even(x):
    """x çift ise True, tek ise False döndürür"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Aynı şekilde
list_evener = partial(filter, is_even)    # Bu fonksiyon filtreleme işlevini gerçekleştirir
x_evens = list_evener(xs)                 # Bu da [2, 4]
```

#### İndirgeme reduce

`reduce` metodu, listedeki ilk ve ikinci öğeyi sürekli olarak birleştirir, ardından sonucu üçüncü öğeyle birleştirir ve bu süreci tek bir sonuç elde edene kadar tekrarlar:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Bu fonksiyon bir listeyi indirgeme işlevini gerçekleştirir
x_product = list_product(xs)              # Bu da 24
```

### Numaralandırma enumerate

Bazen bir liste üzerinde dönerken hem öğeyi hem de indeksini aynı anda kullanmamız gereken durumlar ortaya çıkar:

```python
# Pek Pythonik değil (pek zarif ve özlü değil)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Bu da pek Pythonik değil (pek zarif ve özlü değil)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

En özlü yaklaşım, `enumerate` numaralandırma metodunu kullanarak `(index, element)` çiftleri üretmektir:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Benzer şekilde, sadece indeksi kullanmak isterseniz:

```python
for i in range(len(documents)): do_something(i)   # Özlü değil
for i, _ in enumerate(documents): do_something(i) # Özlü
```

Bu metodu ileride sıkça kullanacağız.

### Sıkıştırma ve Argüman Açma zip and Argument Unpacking

#### Sıkıştırma zip

Sık sık iki veya daha fazla listeyi sıkıştırma işlemi yaparız. Sıkıştırma, aslında birden çok listeyi karşılık gelen demetlerin tek bir listesi haline getirmektir:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # [('a', 1), ('b', 2), ('c', 3)] elde edilir
```

#### Argüman Açma Argument Unpacking

Birden fazla listenin uzunluğu tutarsızsa, sıkıştırma işlemi en kısa listenin sonunda durur. Listeleri açmak için ilginç bir "unzip" (açma) hilesini de kullanabilirsiniz:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Buradaki yıldız işareti, `pairs`'in öğelerini `zip`'in ayrı ayrı argümanları olarak kullanarak argüman açma işlemini gerçekleştirir. Aşağıdaki çağrı aynı etkiyi yaratır:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # [('a','b','c'), ('1','2','3')] döndürür
```

Argüman açma, diğer fonksiyonlarla da birlikte kullanılabilir:

```python
def add(a, b): return a + b

add(1, 2)           # 3 döndürür
add([1, 2])         # Hata verir
add(*[1, 2])        # 3 döndürür
```

Pek pratik olmasa da, kodu daha özlü hale getirmek için güzel bir yöntemdir.

### Değişken Uzunlukta Argüman Geçirme args and kwargs

Varsayalım ki, eski bir fonksiyonu girdi olarak alan ve bu eski fonksiyonun sonucunu 2 ile çarpan yeni bir fonksiyon döndüren bir üst düzey fonksiyon oluşturmak istiyoruz:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Örnek çalıştırma:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Ancak, birden fazla argüman geçtiğimizde bu yöntem pek işe yaramaz:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Hata TypeError: g() takes exactly 1 argument (2 given)
```

Bu yüzden, rastgele sayıda argümanı kabul edebilen bir fonksiyon belirtmemiz ve ardından argüman açma yoluyla birden fazla argümanı iletmemiz gerekiyor; bu biraz sihirli görünebilir:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Çıktı:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Bir fonksiyonu bu şekilde tanımladığımızda, `args` (arguments'ın kısaltması) isimsiz argümanları içeren bir demet (tuple) iken, `kwargs` (keyword arguments'ın kısaltması) isimli argümanları içeren bir sözlüktür (dictionary).

Bunlar, geçirilen parametrelerin bir liste (veya demet) veya dizi olduğu durumlarda da kullanılabilir:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Bunu çeşitli garip yöntemlerle kullanabilirsiniz, ancak biz sadece üst düzey fonksiyonlara değişken uzunlukta argümanlar geçirme sorununu çözmek için kullanacağız:

```python
def doubler_correct(f):
    """f ne olursa olsun etkili çalışır"""
    def g(*args, **kwargs):
        """Kaç parametre olursa olsun, bu fonksiyon parametreleri f'ye doğru şekilde iletir"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Veri Bilimi Dünyasına Hoş Geldiniz!

Ding! Tebrikler, yeni bir dünyanın kapılarını araladınız! Şimdi keyifli bir şekilde keşfe çıkabilirsiniz~

**İlgili Okuma:**

[Veri Biliminde Sık Kullanılan Python Söz Dizimi (Temel)](https://philoli.com/python-tutorails-basic-level)
