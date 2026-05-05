---
title: Gyakori Python szintaxis az adatelemzésben (alapok)
date: 2018-11-07 20:53:13
tags: Python
categories: Adattudomány
mathjax: true
---

Az elmúlt napokban a [Data Science from Scrach](https://book.douban.com/subject/26364377/) című könyvet olvastam ([PDF cím](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), ami egy kiváló, közérthető bevezető az adattudományba. Az egyik fejezete bemutatja a Python alapvető szintaxisát és az adattudományban gyakran használt haladóbb nyelvi elemeket. Mivel a magyarázatok nagyon világosak és tömörek voltak, úgy döntöttem, lefordítom és ide gyűjtöm őket magamnak jegyzetként.
[Gyakran használt Python szintaxis az adatelemzésben (alapok)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Gyakran használt Python szintaxis az adatelemzésben (haladó)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Ez a fejezet az adattudományban rendkívül hasznos Python alapvető szintaxisára és funkcióira fókuszál (Python 2.7 alapokon).

<!--more-->

### Szóközök és formázás

Sok nyelv zárójeleket használ a kódblokkok elkülönítésére, de a Python az indentálásra (behúzásra) támaszkodik:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # a "for i" ciklus első sora
    for j in [1, 2, 3, 4, 5]:
        print j      # a "for j" ciklus első sora
        print i + j  # a "for j" ciklus utolsó sora
    print i          # a "for i" ciklus utolsó sora
print "done looping"
```

Ez rendkívül olvashatóvá teszi a Python kódot, de azt is jelenti, hogy mindig oda kell figyelned a formázásra. A zárójeleken belüli szóközöket a Python figyelmen kívül hagyja, ami hasznos lehet hosszú kifejezések írásakor:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Valamint segíti a kód olvashatóságát:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Többsoros utasítások

A backslash (`\`) használatával jelezheted, hogy egy utasítás két sorban folytatódik (bár ez a módszer ritkán használt):

```python
two_plus_three = 2 + \
                 3
```

### Modulok

Legyen szó akár beépített Python modulról, akár harmadik féltől származó, általad telepített modulról, mindegyiket manuálisan kell importálni a használat előtt.

1. Egyszerűen importáld a teljes modult:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Az itt importált `re` modul reguláris kifejezések kezelésére szolgál. A modul importálása után a modul nevét (`re.`) előtagként használva hívhatod meg a benne található funkciókat.

2. Ha az importálni kívánt modul neve már használatban van a kódban, a modult importáláskor átnevezheted:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. Ha 'rosszalkodni' akarsz, importálhatod a teljes modult az aktuális névtérbe, ami véletlenül felülírhatja a már definiált változóidat:

```python
match = 10
from re import *  # az "re" modulban van egy "match" függvény
print match       # kiírja a "match" függvényt
```

Mivel te egy jó ember vagy, bízom benne, hogy ezt nem teszed meg.

### Alapműveletek

A Python 2.7 alapértelmezés szerint egészosztást végez, így $5 / 2 = 2$. Sokszor azonban nem egészosztásra van szükségünk, ezért importálhatjuk ezt a modult:

```python
from __future__ import division
```

Importálás után $5 / 2 = 2.5$. Egészosztás továbbra is: $5 // 2 = 2$.

### Függvények

#### Függvények definiálása

A függvény egy szabály, amely nulla vagy több bemenetet fogad, és egy bizonyos kimenetet ad vissza. Pythonban a `def függvény_neve(paraméterek)` szintaxissal definiálunk függvényt:

```python
def double(x):
    """Ide írhatsz magyarázatot a függvény működéséről
    Például, ez a függvény a bemenetet kettővel szorozza"""
    # Itt írhatod a függvény törzsét, ne felejtsd el behúzni!
    return x * 2
```
#### Függvények használata

Pythonban a függvények 'első osztályú' objektumok, ami azt jelenti, hogy változóhoz rendelhetjük őket, vagy akár paraméterként is átadhatjuk más függvényeknek:

```python
def apply_to_one(f):
    """Meghívja az f függvényt, és 1-et ad át paraméterként"""
    return f(1)
my_double = double          # a double az előző szakaszban definiált függvényre mutat
x = apply_to_one(my_double) # x értéke 2
```
#### Anonim függvények

`lambda` kifejezéssel is létrehozhatunk anonim függvényeket:

```python
y = apply_to_one(lambda x: x + 4)     # egyenlő 5
```

`lambda` kifejezéseket változókhoz is hozzárendelhetünk, de a legtöbben azt javasolják, hogy inkább a `def` kulcsszót használd:

```python
another_double = lambda x: 2 * x      # nem ajánlott
def another_double(x): return 2 * x   # ajánlott megközelítés
```

Kiegészítés:

*   `lambda` csupán egy kifejezés, a függvény teste sokkal egyszerűbb, mint a `def` esetében.
*   A `lambda` törzse egy kifejezés, nem pedig egy kódblokk. Csak korlátozott logikát lehet `lambda` kifejezésekbe foglalni.

#### Függvényparaméterek átadása

A függvényparamétereknek adhatunk alapértelmezett értékeket. Ha a függvényt paraméter nélkül hívjuk meg, az alapértelmezett értékeket használja; ha paramétereket adunk meg, azokat továbbítja:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Kiírja: "hello"
my_print()            # Kiírja: "my default message"
```

Néha nagyon hasznos, ha közvetlenül a paraméter nevén keresztül adjuk meg az értékeket:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Visszaadja: 5
subtract(0, 5)    # Visszaadja: -5
subtract(b=5)     # Ugyanaz, mint az előző, -5-öt ad vissza
```
### Karakterláncok (Strings)

Egyetlen vagy dupla idézőjellel is létrehozhatsz karakterláncokat (az idézőjeleknek párosnak kell lenniük):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

A backslash (`\`) használható escape karakterek jelölésére, például:

```python
tab_string = "\t"      # tabulátor karaktert jelöl
len(tab_string)        # Egyenlő 1
```

Ha magát a backslasht (`\`) szeretnéd használni (például Windows könyvtárútvonalakban vagy reguláris kifejezésekben), akkor használhatsz 'nyers' karakterláncot `r""` formában:

```python
not_tab_string = r"\t" # a '\' és 't' karaktereket jelöli
len(not_tab_string)    # Egyenlő 2
```

Három dupla idézőjellel több soros karakterláncokat hozhatsz létre:

```python
multi_line_string = """Ez az első sor
Ez a második sor
Ez a harmadik sor"""
```

### Kivételkezelés

Amikor egy program hibába ütközik, a Python `kivételt (exception)` dob. Ha ezt nem kezeljük, a program leáll. Kivételeket a `try` és `except` utasításokkal kaphatunk el:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Nem lehet nullával osztani"
```

Bár más nyelvekben a kivételeket gyakran 'rossz' dolognak tekintik, Pythonban a kivételek széles körű kezelése gyakran letisztultabb és elegánsabb kódot eredményez.

### Listák

#### Listák létrehozása

A lista egyszerű, rendezett gyűjtemény, és egyben a Python egyik legalapvetőbb adatszerkezete (hasonló más nyelvek tömbjeihez, de a listáknak vannak extra tulajdonságaik). Lista létrehozása:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # Egyenlő 3
list_sum = sum(integer_list)      # Egyenlő 6
```
#### Értékek elérése a listában

A listában lévő értékeket szögletes zárójelekkel indexelheted:

```python
x = range(10)       # a listából x = [0, 1, ..., 9] lesz
zero = x[0]         # Egyenlő 0, a lista indexelése 0-tól kezdődik
one = x[1]          # Egyenlő 1
nine = x[-1]        # Egyenlő 9, a lista utolsó eleme
eight = x[-2]       # Egyenlő 8, a lista utolsó előtti eleme
x[0] = -1           # Az aktuális x lista: [-1, 1, 2, 3, ..., 9]
```

#### Listák szeletelése

Szögletes zárójelekkel szeletelhetsz listákat:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Az `in` operátorral ellenőrizheted, hogy egy elem benne van-e a listában:

```python
1 in [1, 2, 3]        # Igaz
0 in [1, 2, 3]        # Hamis
```

Ez az elemek keresési módja viszonylag ineffektív; csak akkor használd, ha a lista nagyon kicsi, vagy ha nem számít a keresési idő.

#### Listák összefűzése

Pythonban nagyon egyszerű két listát összefűzni:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # Az aktuális x: [1,2,3,4,5,6]
```

Ha nem szeretnéd módosítani az eredeti `x` listát, a '+' operátorral új listát hozhatsz létre:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # Az aktuális y: [1, 2, 3, 4, 5, 6]; x nem változott
```

Gyakran használjuk ezt a módszert egyetlen elem hozzáadására a listához:

```python
x = [1, 2, 3]
x.append(0)           # Az aktuális x: [1, 2, 3, 0]
y = x[-1]             # Egyenlő 0
z = len(x)            # Egyenlő 4
```

#### Listák kibontása

Ha tudod, hány eleme van egy listának, könnyedén kibonthatod (unpackolhatod) azt:

```python
x, y = [1, 2]         # Az aktuális x = 1, y = 2
```

Ha az egyenlőségjel két oldalán eltér az elemek száma, `ValueError` hibát kapsz. Ezért gyakran használjuk az aláhúzás karaktert (`_`) a lista fennmaradó részének figyelmen kívül hagyására:

```python
_, y = [1, 2]         # Az aktuális y == 2, az első elemet figyelmen kívül hagyjuk
```

### Tuple-ök

A listák és a tuple-ök nagyon hasonlóak. Az egyetlen különbség, hogy a tuple-ök elemei nem módosíthatóak.

#### Tuple-ök létrehozása

Kerek zárójelekkel vagy akár zárójelek nélkül is létrehozhatsz tuple-öket:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # Az aktuális my_list: [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Nem lehet tuple-t módosítani"
```

Tuple-ök segítségével kényelmesen visszaadhatunk több értéket egy függvényből:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # Egyenlő (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

A tuple-ök (és a listák is) támogatják több elem egyidejű hozzárendelését:

```python
x, y = 1, 2       # Az aktuális x = 1, y = 2
x, y = y, x       # Két változó értékének felcserélése Pythonban; Az aktuális x = 2, y = 1
```

### Szótárak

#### Szótárak létrehozása

A Python egy másik alapvető adatszerkezete a szótár, amely lehetővé teszi, hogy kulcsok (key) alapján gyorsan elérd a hozzájuk tartozó értékeket (value):

```python
empty_dict = {}                       # Nagyon "pythonos" üres szótár definíció
empty_dict2 = dict()                  # Kevésbé "pythonos" üres szótár definíció
grades = { "Joel" : 80, "Tim" : 95 }  # Szótár tárolása
```

#### Szótárelemek keresése

Szögletes zárójelekkel és a kulcs megadásával keresheted ki a hozzá tartozó értéket:

```python
joels_grade = grades["Joel"]          # Egyenlő 80
```

Ha a keresett kulcs nincs a szótárban, `KeyError` hibát kapsz:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Nincs jegy Kate számára!"
```

Az `in` operátorral ellenőrizheted, hogy egy kulcs szerepel-e a szótárban:

```python
joel_has_grade = "Joel" in grades     # Igaz
kate_has_grade = "Kate" in grades     # Hamis
```

A szótárak rendelkeznek egy metódussal, amely alapértelmezett értéket ad vissza, ha a keresett kulcs nincs a szótárban (ahelyett, hogy kivételt dobna):

```python
joels_grade = grades.get("Joel", 0)   # Egyenlő 80
kates_grade = grades.get("Kate", 0)   # Egyenlő 0
no_ones_grade = grades.get("No One")  # Visszaadja az alapértelmezett None értéket
```

#### Szótárak módosítása

Szögletes zárójelekkel hozhatsz létre és módosíthatsz kulcs-érték párokat a szótárban:

```python
grades["Tim"] = 99                    # Felülírja a régi értéket
grades["Kate"] = 100                  # Hozzáad egy kulcs-érték párt
num_students = len(grades)            # Egyenlő 3
```

Gyakran használunk szótárakat adatok strukturálására, például így:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

A specifikus kulcsok keresése mellett az összes kulccsal is dolgozhatunk, például így:

```python
tweet_keys = tweet.keys()             # Kulcsok listáját kapjuk
tweet_values = tweet.values()         # Értékek listáját kapjuk
tweet_items = tweet.items()           # (kulcs, érték) tuple-ök listáját kapjuk
"user" in tweet_keys                  # Igaz, az "in" listakeresést használja, ami kevésbé hatékony
"user" in tweet                       # A "pythonosabb" megközelítés, hatékony szótárkeresést használ
"joelgrus" in tweet_values            # Igaz
```

A szótárak kulcsai egyediek, és listákat nem lehet kulcsként használni. Ha több részből álló kulcsra van szükséged, használhatsz tuple-t, vagy valamilyen módon karakterlánccá alakíthatod a kulcsot.

#### Alapértelmezett szótárak (defaultdict)

Ha egy dokumentumban minden szó gyakoriságát szeretnéd megszámolni, egy nyilvánvaló módszer az, hogy létrehozol egy szótárt, ahol a szavak a kulcsok, a gyakoriságok pedig az értékek. Ezután végigmész a dokumentumon, és ha egy szó már szerepel a szótárban, növeled az értékét 1-gyel; ha még nem, hozzáadod a szót a szótárhoz 1-es értékkel:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Természetesen előre is kezelheted a hiányzó kulcsokat egy 'próbáld meg, aztán kezeld' megközelítéssel, ahogy itt látható:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

A harmadik módszer a `get` metódus használata, amely kiválóan kezeli a hiányzó kulcsokat:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Az alapértelmezett szótárak (defaultdict) ugyanúgy működnek, mint a hagyományos szótárak, azzal az egyetlen különbséggel, hogy ha egy nem létező kulcsot próbálsz lekérdezni, automatikusan létrehoznak egy új kulcs-érték párt a megadott kulccsal. Az alapértelmezett szótárak használatához importálnod kell a `collections` könyvtárat:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() 0-át generál
for word in document:
    word_counts[word] += 1
```

Az alapértelmezett szótárak listákkal, hagyományos szótárakkal, sőt még egyedi függvényekkel is jól használhatók:

```python
dd_list = defaultdict(list)           # list() üres listát generál
dd_list[2].append(1)                  # Az aktuális dd_list: {2: [1]}
dd_dict = defaultdict(dict)           # dict() üres szótárt generál
dd_dict["Joel"]["City"] = "Seattle"   # Az aktuális dd_dict tartalma: { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Létrehozott egy szótárt, ahol a kulcsokhoz listák tartoznak
dd_pair[2][1] = 1                     # Az aktuális dd_pair tartalma: {2: [0,1]}
```

Ez a módszer rendkívül hasznos, mert a jövőben nem kell ellenőriznünk, hogy egy kulcs létezik-e a szótárban, mielőtt lekérdeznénk az értékét.

### Számlálók (Counter)

A számlálók (Counter) közvetlenül képesek egy értékhalmazt szótárszerű objektummá alakítani, ahol a kulcsok az értékhalmaz elemei, a hozzájuk tartozó értékek pedig az elemek előfordulásainak száma. Ezt gyakran használják hisztogramok készítéséhez:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c (nagyjából) { 0 : 2, 1 : 1, 2 : 1 }
```

Így egy nagyon kényelmes módszert kapunk a szógyakoriságok számítására:

```python
word_counts = Counter(document)
```

A számlálóknak van egy másik gyakran használt metódusa, a `most_common`, amellyel közvetlenül lekérdezhetjük a leggyakoribb szavakat és azok gyakoriságát:

```python
# Kiírja a 10 leggyakoribb szót és azok előfordulási számát
for word, count in word_counts.most_common(10):
    print word, count
```

### Halmazok (Sets)

A Python egy másik adatszerkezete a halmaz (set), amely különböző elemek gyűjteménye.
Így hozhatsz létre halmazt és adhatsz hozzá elemeket:

```python
s = set()
s.add(1)          # s: { 1 }
s.add(2)          # s: { 1, 2 }
s.add(2)          # s: { 1, 2 }
x = len(s)        # Egyenlő 2
y = 2 in s        # Egyenlő True
z = 3 in s        # Egyenlő False
```

Két fő ok van a halmazok használatára:

Először is, a halmazokban az `in` művelet rendkívül hatékony. Ha egy adathalmazban nagyon sok elem van, akkor egy halmazban való elemkeresés sokkal gyorsabb, mint egy listában:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Lassú, minden elemet ellenőrizni kell
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Keresés sikeres és nagyon gyors
```

Másodszor, a halmazok nagyon kényelmesek egy adathalmaz egyedi elemeinek kinyerésére:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

A gyakorlatban azonban a halmazok használata még mindig kevésbé gyakori, mint a szótáraké és a listáké.

### Feltételes utasítások

A legtöbb programozási nyelvben az `if` utasítással fejezheted ki a feltételes elágazásokat, például így:

```python
if 1 > 2:
    message = "bárcsak 1 nagyobb lenne kettőnél…"
elif 1 > 3:
    message = "az elif az 'else if' rövidítése"
else:
    message = "amikor minden más kudarcot vall, használd az else-t (ha akarsz)"
```

A feltételes elágazásokat egy sorba is írhatod, de ez ritkán használt:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Ciklusutasítások

#### `while` ciklus

A Python `while` ciklusa:

```python
x = 0
while x < 10:
    print x, "kisebb, mint 10"
    x += 1
```

#### `for` ciklus

Gyakrabban használjuk a `for-in` ciklust:

```python
for x in range(10):
    print x, "kisebb, mint 10"
```

Összetettebb logikai kifejezésekhez használhatjuk a `continue` és `break` utasításokat:

```python
for x in range(10):
    if x == 3:
        continue          # Közvetlenül a következő cikluslépésre ugrik
    if x == 5:
        break             # Teljesen kilép a ciklusból
    print x
```

Az eredmény 0, 1, 2 és 4 lesz.

### Igazságtartalom (Truthiness)

A Pythonban a Boole-változók használata hasonló más nyelvekéhez, az egyetlen különbség, hogy az első betűnek mindig nagybetűsnek kell lennie:

```python
one_is_less_than_two = 1 < 2      # Igaz
true_equals_false = True == False # Hamis
```

A Python a `None` kulcsszót használja egy érték hiányának jelölésére, hasonlóan más nyelvek `null` értékéhez:

```python
x = None
print x == None        # Kiírja: True, de nem a legszebb megoldás
print x is None        # Kiírja: True, ez az elegánsabb megoldás
```

A Python lehetővé teszi, hogy más értékeket használj Boole-értékek helyett; az alábbiak mind `False`-nak felelnek meg:

*   False
*   None
*   [] (egy üres lista)
*   {} (egy üres szótár)
*   "" (egy üres string)
*   set() (egy üres halmaz)
*   0 (az egész szám nulla)
*   0.0 (a lebegőpontos nulla)

Hasonlóképpen, számos `True`-nak megfelelő érték is létezik, ami rendkívül kényelmessé teszi az üres listák, üres karakterláncok és üres szótárak stb. ellenőrzését.

Természetesen, ha nem látod előre az eredményt, hibák léphetnek fel a használat során:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Egy egyszerűbb megközelítés, amely ugyanazt az eredményt adja, mint a fenti:

```python
first_char = s and s[0]
```

Ha az első érték igaz, a második értéket adja vissza; ellenkező esetben az elsőt.

Hasonlóképpen, ha `x` lehet szám vagy `None`, akkor így biztosan számot kapunk `x` értékeként:

```python
safe_x = x or 0
```

A Pythonban van még egy `all` függvény is, amely akkor ad vissza `True`-t, ha minden elem `True`. Az `any` függvény pedig akkor ad vissza `True`-t, ha legalább egy elem `True`. Például, ha egy lista minden eleme 'igaz', az `all` függvény `True`-t ad vissza, különben `False`-t:

```python
all([True, 1, { 3 }])       # Igaz
all([True, 1, {}])          # Hamis, {} egyenlő "False"
any([True, 1, {}])          # Igaz
all([])                     # Igaz, nincs olyan elem, ami "False" lenne
any([])                     # Hamis, nincs olyan elem, ami "True" lenne
```

**További olvasnivalók:**
[Gyakran használt Python szintaxis az adatelemzésben (haladó)](https://philoli.com/python-tutorails-advanced-level/)
