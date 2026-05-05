---
title: Gyakori Python szintaxis az adattudományban (haladó)
date: 2018-11-07 23:53:13
tags: Python
categories: Adattudomány
mathjax: true
---
Az utóbbi napokban a kezembe került ez a könyv: [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF cím](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), ami egy remek, közérthető bevezető az adattudományba. Egyik fejezete a Python alapvető szintaxisát és az adattudományban gyakran használt haladóbb nyelvi elemeket mutatja be. Mivel a magyarázatokat kiválónak, tömörnek és világosnak találtam, lefordítottam és ide helyeztem, hogy kéznél legyen.
[Gyakori Python szintaxis az adattudományban (alapfok)](https://philoli.com/python-tutorails-basic-level/)
[Gyakori Python szintaxis az adattudományban (haladó)](https://philoli.com/python-tutorails-advanced-level/)

Ez a fejezet a Python haladó szintaxisára és funkcióira összpontosít, amelyek különösen hasznosak az adatfeldolgozásban (Python 2.7 alapokon).

<!--more-->

### Rendezés (Sorting)

Ha egy Python listát szeretnél rendezni, használhatod a lista `sort` metódusát. Ha viszont nem akarod módosítani az eredeti listát, akkor a `sorted` függvényt érdemes használni, amely egy új, rendezett listát ad vissza:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x nem változik
x.sort()            # x most [1,2,3,4]
# sort vagy sorted alapértelmezés szerint növekvő sorrendbe rendezi a listát.
```

Ha fordított sorrendben, azaz csökkenőleg szeretnéd rendezni, add meg a `reverse = True` paramétert.

Egyéni rendezési függvényt is megadhatsz, hogy a lista egy specifikus kulcs alapján rendeződjön:

```python
# Rendezés abszolút érték szerint, csökkenő sorrendben
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Rendezés a szavak előfordulásának száma szerint, csökkenő sorrendben
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Lista-összefoglalások (List Comprehensions)

Gyakran előfordul, hogy egy lista bizonyos elemeiből szeretnénk új listát létrehozni, vagy az elemek értékeit megváltoztatni, esetleg mindkettőt. A Pythonban erre az idiomatikus megoldás a lista-összefoglalás (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Hasonlóképpen alakíthatod a listákat szótárakká vagy halmazokká:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Ha nem használod fel a lista elemeit, akkor az aláhúzásjelet használhatod változóként:

```python
zeroes = [0 for _ in even_numbers] # Ugyanaz a hossza, mint az `even_numbers` listának
```

A lista-összefoglalások többszörös `for` ciklusokat is támogatnak:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Összesen 100 pár: (0,0) (0,1) ... (9,8), (9,9)
```

A későbbi `for` ciklusok felhasználhatják az előző `for` ciklusok eredményeit:

```python
increasing_pairs = [(x, y)                      # Csak azokat a párokat tartalmazza, ahol x < y
                    for x in range(10)          # range(lo, hi) egyenlő
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
A jövőben gyakran fogunk listakifejezéseket használni.

### Generátorok és iterátorok (Generators and Iterators)

A listákkal az a probléma, hogy könnyen túl naggyá válhatnak. Például a `range(1000000)` egy egymillió elemből álló listát hoz létre. Ha egyszerre csak egy adatot dolgozol fel, ez túl sok időt vehet igénybe (vagy kifogyhat a memória). Valójában lehet, hogy csak az első néhány adatra van szükséged, így a többi művelet felesleges.

A generátorok viszont lehetővé teszik, hogy csak azokat az adatokat iteráld, amelyekre ténylegesen szükséged van. Generátort függvény és `yield` kifejezés segítségével hozhatsz létre:

```python
def lazy_range(n):
    """a `range` egy lusta változata"""
    i = 0
    while i < n:
        yield i
        i += 1
```

A fordító megjegyzése:
A generátorok speciális iterátorok. A `yield` kulcsszó a generátorok iterációjának kulcsa. Ez egyfajta szünet- és folytatáspont a generátor végrehajtásában; a `yield` kifejezésnek értéket adhatunk, vagy visszaadhatjuk az értékét. Minden olyan függvény, amely `yield` utasítást tartalmaz, generátornak minősül. Amikor a generátor 'kilép', elmenti az aktuális végrehajtási állapotát, és legközelebbi hívásakor onnan folytatja, hogy a következő iterációs értéket szolgáltassa. Listák iterálásakor jelentős memóriahelyet foglalhatunk el, míg generátorok használatával nagyjából csak egyetlen memóriahelyre van szükség, ezzel jelentős memóriamegtakarítást érve el.

Az alábbi ciklus egyenként fogyasztja el a `yield` által szolgáltatott értékeket, amíg azok el nem fogynak:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Valójában a Python beépítetten tartalmaz egy hasonló funkciót, mint a fenti `_lazy_range_`, amit `xrange`-nek hívnak, Python 3-ban pedig `range` lett.) Ez azt jelenti, hogy akár végtelen sorozatokat is létrehozhatsz:

```python
def natural_numbers():
    """Visszaadja az 1, 2, 3, ... sorozatot"""
    n = 1
    while True:
        yield n
        n += 1
```

Azonban nem ajánlott ilyen, kilépési logikával nem rendelkező ciklusokat használni.

**TIPP**
> A generátorral való iterálás egyik hátránya, hogy az elemeket csak egyszer lehet végigiterálni. Ha többször is szeretnéd megismételni az iterációt, minden alkalommal új generátort kell létrehoznod, vagy listát kell használnod.

A generátor létrehozásának második módja: zárójelek közötti összefoglaló kifejezés használatával:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Tudjuk, hogy a szótárak `items()` metódusa egy listát ad vissza a szótár összes kulcs-érték párjával. Azonban gyakrabban használjuk az `iteritems()` generátor metódust az iterálásra, amely minden alkalommal csak egy kulcs-érték párt hoz létre és ad vissza.

### Véletlenszerűség (Randomness)
Adattudomány tanulmányozása során gyakran lesz szükségünk véletlenszámok generálására, ehhez csak be kell importálni a `random` modult:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() véletlenszámot generál
# 0.7579544029403025,         # A véletlenszám normalizált, 0 és 1 közötti tartományba esik
# 0.420571580830845,          # Ez a leggyakrabban használt függvény véletlenszámok generálására
# 0.25891675029296335]
```

Ha reprodukálható eredményeket szeretnél, beállíthatod a `random` modul belső állapotát a `random.seed` segítségével, így pszeudo-véletlen (azaz determinisztikus) számokat generálhatsz:

```python
random.seed(10)           # a mag beállítása 10-re
print random.random()     # 0.57140259469
random.seed(10)           # a mag visszaállítása 10-re
print random.random()     # ismét 0.57140259469
```

Néha a `random.randrange` függvényt is használjuk egy megadott tartományon belüli véletlenszám generálására:

```python
random.randrange(10)      # Véletlenszerűen választ egy számot a range(10) = [0, 1, ..., 9] közül
random.randrange(3, 6)    # Véletlenszerűen választ egy számot a range(3, 6) = [3, 4, 5] közül
```

Vannak más, néha nagyon hasznos metódusok is, például a `random.shuffle` véletlenszerűen megkeveri egy lista elemeinek sorrendjét, és új, permutált listát hoz létre:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (A te eredményed valószínűleg eltérő lesz)
```

Ha egy listából szeretnél véletlenszerűen kiválasztani egy elemet, használd a `random.choice` metódust:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Én a "Bob"-ot kaptam
```

Ha véletlenszerű sorozatot szeretnél generálni anélkül, hogy megkevernéd az eredeti listát, akkor a `random.sample` metódust használhatod:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Többszöri hívással több véletlenszerű mintát is választhatsz (ismétléssel):

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Reguláris kifejezések (Regular Expressions)

A reguláris kifejezések szövegkeresésre szolgálnak, kissé bonyolultak, de rendkívül hasznosak, ezért számos könyv foglalkozik velük. Amikor találkozunk velük, részletesebben is elmagyarázzuk őket. Alább látható néhány példa reguláris kifejezések Pythonban való használatára:

```python
import re
print all([                                 # Az alábbi állítások mind True értéket adnak vissza, mert
    not re.match("a", "cat"),               # * a 'cat' nem 'a'-val kezdődik
    re.search("a", "cat"),                  # * a 'cat' tartalmazza az 'a' betűt
    not re.search("c", "dog"),              # * a 'dog' nem tartalmazza a 'c' betűt
    3 == len(re.split("[ab]", "carbs")),    # * az 'a' vagy 'b' alapján három részre osztja a szót: ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * kötőjelet helyettesít a számok helyére
    ])                                      # Kimenet: True
```

### Objektumorientált programozás (Object-Oriented Programming)

Mint sok más nyelv, a Python is lehetővé teszi, hogy adatokat beágyazó osztályokat és azokon műveleteket végző függvényeket definiálj. Ezeket néha arra használjuk, hogy kódunkat tisztábbá és tömörebbé tegyük. Valószínűleg a legegyszerűbb egy alaposan kommentált példán keresztül magyarázni őket. Tegyük fel, hogy nincs beépített Python halmaz (set), és mi szeretnénk létrehozni a saját `Set` osztályunkat. Milyen funkciókkal kellene rendelkeznie egy ilyen osztálynak? Például egy adott `Set` esetén hozzá kell tudnunk adni elemeket, eltávolítani belőle elemeket, és ellenőrizni, hogy tartalmaz-e egy adott értéket. Ezért ezeket a funkciókat mind az osztály tagfüggvényeiként fogjuk létrehozni. Így a `Set` objektum után ponttal hivatkozva érhetjük el ezeket a tagfüggvényeket:

```python
# Konvenció szerint az osztályoknak _PascalCase_ elnevezést adunk.
class Set:
    # Ezek tagfüggvények.
    # Minden tagfüggvénynek van egy első paramétere, a "self" (ez is egy konvenció).
    # A "self" a konkrét, éppen használt Set objektumra hivatkozik.

    def __init__(self, values=None):
        """Ez a konstruktor függvény.
        Minden alkalommal meghívódik, amikor új Set objektumot hozunk létre.
        Így hívható meg:
        s1 = Set() # üres halmaz
        s2 = Set([1,2,2,3]) # halmaz inicializálása megadott értékekkel"""
        self.dict = {} # A Set minden példányának saját dict attribútuma van.
        # Ezt az attribútumot használjuk minden tag nyomon követésére.
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Ez a Set objektum string reprezentációja.
        Ezt a Python parancssorába beírva, vagy az str() metódussal egy objektumon keresztül adhatod át."""
        return "Set: " + str(self.dict.keys())

    # A tagságot azzal jelezzük, hogy kulcsként szerepel a self.dict-ben, és az értékét True-ra állítjuk.
    def add(self, value):
        self.dict[value] = True

    # Ha a paraméter kulcs a szótárban, akkor az érték a Set-ben van.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Ezután így használhatjuk a `Set` osztályt:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionális eszközök (Functional Tools)

#### Részleges függvények (partial)

Függvények átadásakor néha egy függvény részleges funkcionalitását szeretnénk felhasználni egy új függvény létrehozásához. Vegyünk egy egyszerű példát: tételezzük fel, hogy van egy kétváltozós függvényünk:

```python
def exp(base, power):
    return base ** power
```

Ezt szeretnénk felhasználni egy olyan függvény létrehozására, amely egyetlen változót vár, és a `exp(2, power)` eredményét adja vissza, azaz egy 2-es alapú hatványfüggvényt.

Természetesen definiálhatnánk egy új függvényt a `def` kulcsszóval, bár ez nem tűnik túl elegáns megoldásnak:

```python
def two_to_the(power):
  return exp(2, power)
```

Okosabb megoldás a `functools.partial` metódus használata:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Ez a függvény most csak egy változót vár.
print two_to_the(3)               # 8
```

Ha megnevezzük a paramétereket, a `partial` metódussal más paramétereket is kitölthetünk:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Ha megpróbálod a paramétereket összevissza használni a függvények közepén, a program gyorsan kaotikussá válhat, ezért kérjük, kerüld ezt a viselkedést.

#### Leképezés (map)

Néha használjuk a `map`, `reduce` és `filter` függvényeket is, mint a lista-összefoglalások alternatíváit:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Ugyanaz, mint fent.
list_doubler = partial(map, double)     # A függvény feladata a lista duplázása.
twice_xs = list_doubler(xs)             # Szintén [2, 4, 6, 8]
```

A `map` metódus többparaméteres függvényekhez is használható, több lista leképezésére:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Szűrés (filter)

Hasonlóképpen, a `filter` a lista-összefoglalások `if` feltételének funkcionalitását valósítja meg:

```python
def is_even(x):
    """Igazat ad vissza, ha x páros, hamisat, ha x páratlan."""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Ugyanaz, mint fent.
list_evener = partial(filter, is_even)    # Ez a függvény valósítja meg a szűrés funkciót.
x_evens = list_evener(xs)                 # Szintén [2, 4]
```

#### Redukció (reduce)

A `reduce` metódus folyamatosan összevonja a lista első és második elemét, majd az eredményt a harmadik elemmel, és ezt a folyamatot ismétli, amíg egyetlen eredményt nem kap:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Ez a függvény egy lista redukálását valósítja meg.
x_product = list_product(xs)              # Szintén 24
```

### Enumerálás (enumerate)

Néha előfordul, hogy egy lista bejárásakor egyszerre van szükségünk az elemre és az indexére:

```python
# Nem túl 'Pythonos' (nem túl tömör vagy elegáns)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Szintén nem túl 'Pythonos' (nem túl tömör vagy elegáns)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

A legtömörebb megoldás az `enumerate` metódus használata, amely `(index, elem)` alakú tuple-öket generál:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Hasonlóképpen, ha csak az indexre van szükséged:

```python
for i in range(len(documents)): do_something(i)   # Nem tömör
for i, _ in enumerate(documents): do_something(i) # Tömör
```

Ezt a módszert a későbbiekben gyakran fogjuk használni.

### Zippelés és argumentum kicsomagolás (zip and Argument Unpacking)

#### Zippelés (zip)

Gyakran `zip`-eljük két vagy több listát. A zippelés lényegében több listát alakít át egyetlen listává, amely az eredeti listák megfelelő elemeiből képzett tuple-öket tartalmaz:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Eredmény: [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumentum kicsomagolás (Argument Unpacking)

Ha több lista hossza eltér, a zippelés a legrövidebb lista végén áll meg. Egy furcsa "unzip" kicsomagolási trükkel is feloldhatod a listákat:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

A csillag (`*`) az argumentum kicsomagolására szolgál, és a `pairs` elemeit használja a `zip` egyedi argumentumaiként. Az alábbi hívásnak ugyanaz a hatása:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Visszaadja [('a','b','c'), ('1','2','3')]
```

Az argumentum kicsomagolás más függvényekkel is használható:

```python
def add(a, b): return a + b

add(1, 2)           # Visszaadja 3
add([1, 2])         # Hiba
add(*[1, 2])        # Visszaadja 3
```

Bár nem mindig praktikus, jó trükk a kód tömörítésére.

### Változó számú argumentumok átadása (args és kwargs)

Tegyük fel, hogy egy magasabb rendű függvényt szeretnénk létrehozni, amely egy régi függvényt vesz be, és egy új függvényt ad vissza, ami az eredeti függvény értékét kettővel megszorozza:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Példa futtatása:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Azonban ha egynél több argumentumot adunk át, ez a módszer már nem működik jól:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Hiba: TypeError: g() takes exactly 1 argument (2 given)
```

Ezért olyan függvényre van szükségünk, amely tetszőleges számú argumentumot képes fogadni, majd az argumentum kicsomagolás segítségével több argumentumot is átadhatunk, ami egy kicsit varázslatosnak tűnhet:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Kimenet:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Amikor így definiálunk egy függvényt, az `args` (az arguments rövidítése) egy tuple, amely a névtelen argumentumokat tartalmazza, míg a `kwargs` (a keyword arguments rövidítése) egy szótár, amely a kulcsszavas argumentumokat tartalmazza.

Ezek akkor is használhatók, ha a paraméterek listák (vagy tuple-ök) vagy szótárak:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Ezt számos furcsa módon felhasználhatod, de mi csak arra használjuk, hogy megoldjuk a magasabb rendű függvények változó számú argumentumainak átadásával kapcsolatos problémát:

```python
def doubler_correct(f):
    """Bármi is legyen f, hatékonyan működik."""
    def g(*args, **kwargs):
        """Nem számít, hány paramétert kap, ez a függvény helyesen továbbítja azokat f-nek."""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Üdv az adattudomány világában!

Bing! Gratulálunk, ismét kinyitottad egy új világ kapuját! Most már jöhet a szórakozás!

**Kapcsolódó olvasmányok:**

[Gyakori Python szintaxis az adattudományban (alapfok)](https://philoli.com/python-tutorails-basic-level)
