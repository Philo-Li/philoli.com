---
title: Pythoni sagedamini kasutatav süntaks andmeteaduses (edasijõudnutele)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
Viimastel päevadel olen lugenud raamatut [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-link](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), mis on suurepärane ja kergesti mõistetav sissejuhatus andmeteadusesse. Üks peatükk tutvustas Pythoni põhisüntaksit ja andmeteaduses sageli kasutatavaid edasijõudnute süntaksi funktsioone. Leidsin, et see oli väga hästi, lühidalt ja selgelt esitatud, mistõttu otsustasin selle siia üles kirjutada ja tõlkida meeldetuletuseks.
[Pythoni sagedamini kasutatav süntaks andmeteaduses (algajatele)](https://philoli.com/python-tutorails-basic-level/)
[Pythoni sagedamini kasutatav süntaks andmeteaduses (edasijõudnutele)](https://philoli.com/python-tutorails-advanced-level/)

See peatükk keskendub Pythoni edasijõudnute süntaksile ja funktsioonidele (põhineb Python 2.7-l), mis on andmetöötluses eriti kasulikud.

<!--more-->

### Sorteerimine Sorting

Kui soovid Pythoni loendit sorteerida, saad kasutada loendi `sort` meetodit. Kui aga ei taha algset loendit muuta, kasuta `sorted` funktsiooni, mis tagastab uue, sorteeritud loendi:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x ei muutu
x.sort()            # praegune x = [1,2,3,4]
# Nii `sort` kui ka `sorted` sorteerivad loendi vaikimisi kasvavas järjekorras.
```

Kui soovid sorteerida kahanevas järjekorras, saad määrata parameetriks `reverse = True`.

Samuti on võimalik luua kohandatud sorteerimisfunktsioon, et sorteerida loendit kindla võtme järgi:

```python
# Sorteerimine absoluutväärtuse järgi kahanevas järjekorras
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Sorteerimine sõnade esinemissageduse järgi kahanevas järjekorras
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Loendikomprehensioonid List Comprehensions

Sageli tekib olukordi, kus tahame loendist teatud elemente uude loendisse eraldada, nende väärtusi muuta või mõlemat. Pythonis on selleks tavapärane viis loendikomprehensioonid (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Sarnaselt saad loendeid teisendada sõnastikeks või hulkadeks:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Kui sa loendi elemente tegelikult ei vaja, võid kasutada muutujana alakriipsu (`_`):

```python
zeroes = [0 for _ in even_numbers] # on sama pikkusega kui loend `even_numbers`
```

Loendikomprehensioonid toetavad mitmekordseid `for`-tsükleid:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # kokku 100 paari: (0,0) (0,1) ... (9,8), (9,9)
```

Järgmised `for`-tsüklid saavad kasutada eelmiste `for`-tsüklite tulemusi:

```python
increasing_pairs = [(x, y)                      # Sisaldab ainult paare, kus x < y
                    for x in range(10)          # range(lo, hi) võrdub
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Loendikomprehensioonid on tulevikus sageli kasutusel.

### Generaatorid ja iteraatorid Generators and Iterators

Loendite puhul on probleemiks, et need võivad kergesti väga suureks paisuda. Näiteks `range(1000000)` genereerib miljoni elemendiga loendi. Kui andmeid töödeldakse ühekaupa, võib see olla liiga aeganõudev (või mälu otsa saada). Tegelikult vajad sa aga võib-olla vaid paari esimest andmeelementi, mis teeb kõik ülejäänud operatsioonid üleliigseks.

Generaatorid võimaldavad sul itereerida ainult neid andmeid, mida sa parasjagu vajad. Generaatori loomiseks saab kasutada funktsiooni ja `yield` avaldist:

```python
def lazy_range(n):
    """a lazy version of range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Tõlkija lisandus:
Generaator on samuti eriline iteraator ja `yield` on generaatori itereerimise võti. See toimib generaatori täitmise peatamise ja jätkamise punktina, võimaldades `yield` avaldisele väärtuse omistada või selle väärtust tagastada. Iga funktsioon, mis sisaldab `yield` lauset, on generaator. Generaatorist väljudes salvestab see oma hetkeseisundi ja taastab selle järgmisel täitmisel, et anda järgmine iteratsiooniväärtus. Loendi itereerimine kulutab palju mäluruumi, samas kui generaatori kasutamine võtab peaaegu sama palju mäluruumi kui üks aadress, säästes seega mälu.

Järgmine tsükkel tarbib `yield`'i väärtusi ükshaaval, kuni kõik on ära tarbitud:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Tegelikult on Pythonil sisseehitatud funktsioon, mis saavutab `_lazy_range_` efekti, seda nimetatakse `xrange`'iks, Python 3-s `range`'iks.) See tähendab, et saad luua lõpmatu jada:

```python
def natural_numbers():
    """# tagastab 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Selliseid tsükleid, millel puudub väljumisloogika, siiski ei soovitata kasutada.

**NIPP**
> Generaatori itereerimise üks puudus on see, et elemente saab itereerida algusest lõpuni vaid ühe korra. Kui soovid mitmekordset iteratsiooni, pead iga kord looma uue generaatori või kasutama loendit.

Teine viis generaatori loomiseks on kasutada sulgudes olevat komprehensiooni avaldist:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Me teame, et sõnastiku `items()` meetod tagastab loendi kõikidest võtme-väärtuse paaridest sõnastikus. Kuid sagedamini kasutame itereerimiseks `iteritems()` generaatori meetodit, mis genereerib ja tagastab iga kord vaid ühe võtme-väärtuse paari.

### Juhuslikkus Randomness

Andmeteadust õppides on meil sageli vaja genereerida juhuslikke numbreid, seega piisab mooduli `random` importimisest:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genereerib juhusliku arvu
# 0.7579544029403025,         # Juhuslik arv on normaliseeritud ja jääb vahemikku 0 ja 1
# 0.420571580830845,          # See funktsioon on kõige sagedamini kasutatav juhuslike arvude genereerimiseks
# 0.25891675029296335]
```

Kui soovid saada reprodutseeritavaid tulemusi, saad panna `random` mooduli genereerima pseudojuhuslikke (st deterministlikke) numbreid, mis põhinevad `random.seed`'iga määratud sisemisel olekul:

```python
random.seed(10)           # määrame seemneks 10
print random.random()     # 0.57140259469
random.seed(10)           # lähtestame seemneks 10
print random.random()     # 0.57140259469 uuesti
```

Mõnikord kasutame juhusliku arvu genereerimiseks määratud vahemikus ka funktsiooni `random.randrange`:

```python
random.randrange(10)      # Valib juhusliku arvu vahemikust range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Valib juhusliku arvu vahemikust range(3, 6) = [3, 4, 5]
```

On ka teisi mugavaid meetodeid, näiteks `random.shuffle`, mis segab loendi elementide järjekorra ja loob uue, juhuslikult järjestatud loendi:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Sinu tulemus peaks olema teistsugune)
```

Kui soovid loendist juhuslikult ühe elemendi valida, saad kasutada meetodit `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Mina sain "Bob"
```

Kui soovid genereerida juhusliku jada, aga samal ajal algset loendit mitte segi ajada, saad kasutada meetodit `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Mitme juhusliku valimi valimiseks (kordused lubatud) saad seda meetodit mitu korda välja kutsuda:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regulaaravaldised Regular Expressions

Regulaaravaldised on teksti otsimiseks, need on veidi keerukad, kuid väga kasulikud, mistõttu on neile pühendatud palju raamatuid. Selgitame neid täpsemalt siis, kui nendega kokku puutume. Allpool on mõned näited regulaaravaldiste kasutamisest Pythonis:

```python
import re
print all([                                 # Kõik järgnevad väited tagastavad True, sest
    not re.match("a", "cat"),               # * 'cat' ei alga 'a'-ga
    re.search("a", "cat"),                  # * 'cat' sisaldab tähte 'a'
    not re.search("c", "dog"),              # * 'dog' ei sisalda tähte 'c'
    3 == len(re.split("[ab]", "carbs")),    # * jagab sõna 'carbs' vastavalt 'a' või 'b' järgi kolmeks osaks ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * asendab numbrid sidekriipsuga
    ])                                      # Väljund True
```

### Objektorienteeritud programmeerimine Object-Oriented Programming

Nagu paljudes keeltes, võimaldab Python defineerida klasse, mis kapseldavad andmeid ja funktsioone nende andmetega opereerimiseks. Kasutame neid mõnikord koodi selgemaks ja lihtsamaks muutmiseks. Neid on ilmselt kõige lihtsam selgitada rohkelt kommenteeritud näite abil. Oletame, et Pythonis puudub sisseehitatud hulk (`Set`) ja me soovime luua oma `Set`-klassi. Milliseid funktsioone peaks see klass omama? Näiteks, antud hulga puhul peame saama sinna elemente lisada, elemente eemaldada ja kontrollida, kas see sisaldab teatud väärtust. Seega loome kõik need funktsioonid klassi liikmefunktsioonidena. Nii saame neid liikmefunktsioone `Set` objekti järel punktiga ligi pääsedes kasutada:

```python
# Konventsiooni kohaselt anname klassi nimed _PascalCase_ formaadis
class Set:
    # Need on liikmefunktsioonid
    # Igal liikmefunktsioonil on esimene parameeter "self" (teine konventsioon)
    # "self" viitab konkreetsele kasutatavale `Set` objektile

    def __init__(self, values=None):
        """See on konstruktor
        See funktsioon kutsutakse välja iga kord, kui lood uue `Set` objekti
        Seda saab kutsuda nii:
        s1 = Set() # Tühi hulk
        s2 = Set([1,2,2,3]) # Hulga initsialiseerimine määratud väärtustega"""
        self.dict = {} # Igal Seti eksemplaril on oma `dict` atribuut
        # Kasutame seda atribuuti iga liikme jälgimiseks
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """See on `Set` objekti stringesitus
        Sa saad seda Pythoni käsureal näha, kui sisestad objekti nime või kasutad `str()` meetodit"""
        return "Set: " + str(self.dict.keys())

    # Liikmelisust tähistame, lisades väärtuse `self.dict`'i võtmena ja seades võtme väärtuseks True
    def add(self, value):
        self.dict[value] = True

    # Kui argument on sõnastiku võti, on vastav väärtus Setis
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Seejärel saame `Set`'i kasutada järgmiselt:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funktsionaalsed tööriistad Functional Tools

#### Osalised funktsioonid partial

Funktsioone edasi andes tahame mõnikord kasutada funktsiooni osalisi võimalusi uue funktsiooni loomiseks. Lihtsa näitena oletame, et meil on kahe muutujaga funktsioon:

```python
def exp(base, power):
    return base ** power
```

Me tahame seda kasutada funktsiooni loomiseks, mis võtab sisendiks ühe muutuja ja annab tulemuseks `exp(2, power)` ehk 2-e astmefunktsiooni.

Muidugi saame defineerida uue funktsiooni `def`-iga, kuigi see ei tundu eriti mõistlik:

```python
def two_to_the(power):
  return exp(2, power)
```

Nutikam viis on kasutada `functools.partial` meetodit:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Praegusel funktsioonil on vaid üks muutuja
print two_to_the(3)               # 8
```

Kui nimi on määratud, saab `partial` meetodit kasutada ka teiste parameetrite täitmiseks:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Kui proovid parameetreid funktsiooni keskel juhuslikult kasutada, muutub programm kiiresti segaseks, seega püüa seda vältida.

#### Kujutamine map

Mõnikord kasutame loendikomprehensioonide alternatiividena ka funktsioone nagu `map`, `reduce` ja `filter`:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Sama mis eelmine
list_doubler = partial(map, double)     # Funktsioon, mis kahekordistab loendi
twice_xs = list_doubler(xs)             # Samuti [2, 4, 6, 8]
```

`map` meetodit saab kasutada ka mitmeparametriliste funktsioonide puhul, et rakendada neid mitmele loendile:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtreerimine filter

Sarnaselt täidab `filter` loendikomprehensioonides `if`-lause funktsiooni:

```python
def is_even(x):
    """Tagastab True, kui x on paarisarv, ja False, kui x on paaritu arv"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Sama mis eelmine
list_evener = partial(filter, is_even)    # See funktsioon filtreerib
x_evens = list_evener(xs)                 # Samuti [2, 4]
```

#### Redutseerimine reduce

`reduce` meetod liidab pidevalt loendi esimese ja teise elemendi, seejärel liidab tulemuse kolmanda elemendiga ja kordab seda protsessi, kuni saadakse üks unikaalne tulemus:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # See funktsioon redutseerib loendit
x_product = list_product(xs)              # Samuti 24
```

### Enumereerimine enumerate

Mõnikord tekib olukordi, kus loendit itereerides on vaja kasutada samaaegselt nii elementi kui ka selle indeksit:

```python
# Mitte väga Pythonic (pole eriti lühike ega elegantne)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Samuti mitte väga Pythonic (pole eriti lühike ega elegantne)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Kõige lühem ja elegantsem viis on kasutada `enumerate` meetodit, mis genereerib paare `(indeks, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Sarnaselt, kui tahad kasutada ainult indeksit:

```python
for i in range(len(documents)): do_something(i)   # Pole lühike
for i, _ in enumerate(documents): do_something(i) # Lühike
```

Seda meetodit kasutame edaspidi sageli.

### Pakkimine ja argumentide lahtipakkimine zip and Argument Unpacking

#### Pakkimine zip

Sageli pakime kokku kaks või enam loendit. Pakkimine tähendab mitme loendi teisendamist üheks loendiks vastavate elementide paaridena (tuplitena):

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Tulemuseks on [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumentide lahtipakkimine Argument Unpacking

Kui loendite pikkused ei kattu, peatub pakkimisprotsess lühima loendi lõpus. Loendite lahtipakkimiseks võid kasutada ka veidrat "unzip" tehnikat:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Tärn (`*`) kasutatakse argumentide lahtipakkimiseks, see kasutab `pairs`'i elemente `zip`'i üksikute argumentidena. Järgmine väljakutsumisviis on samaväärne:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Tagastab [('a','b','c'), ('1','2','3')]
```

Argumentide lahtipakkimist saab kasutada ka koos teiste funktsioonidega:

```python
def add(a, b): return a + b

add(1, 2)           # Tagastab 3
add([1, 2])         # Annab vea
add(*[1, 2])        # Tagastab 3
```

Kuigi see pole alati kõige praktilisem, on see siiski hea nipp koodi lühemaks muutmiseks.

### Muutuva pikkusega argumentide edastamine args and kwargs

Oletame, et tahame luua kõrgema järgu funktsiooni, mis võtab sisendiks vana funktsiooni ja tagastab uue funktsiooni, mis on vana funktsioon korda kaks:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Näide:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== (3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Kuid kui edastatud parameetreid on rohkem kui üks, ei tööta see meetod enam hästi:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Annab vea TypeError: g() takes exactly 1 argument (2 given)
```

Seega peame määrama funktsiooni, mis suudab vastu võtta suvalise arvu argumente, ja seejärel kasutama argumentide lahtipakkimist mitme argumendi edastamiseks. See võib tunduda veidi maagiline:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Väljund:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Kui defineerime funktsiooni sellisel viisil, on `args` (lühend sõnast 'arguments') tuupel, mis sisaldab nimetamata argumente, ja `kwargs` (lühend sõnadest 'keyword arguments') on sõnastik, mis sisaldab nimetatud argumente.

Neid saab kasutada ka siis, kui edastatavad argumendid on loendid (või tuuplid) või massiivid:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Saad seda kasutada koos igasuguste veidrate meetoditega, kuid meie kasutame seda ainult kõrgema järgu funktsioonidele muutuva pikkusega argumentide edastamise probleemi lahendamiseks:

```python
def doubler_correct(f):
    """Töötab efektiivselt, olenemata sellest, mis f on"""
    def g(*args, **kwargs):
        """Olenemata argumentide arvust, edastab see funktsioon need korrektselt f-le"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Tere tulemast andmeteaduse maailma!

Ding! Palju õnne, oled taas avanud uue maailma ukse! Nüüd saad minna ja rõõmsalt edasi tegutseda!~

**Seotud lugemine:**

[Pythoni sagedamini kasutatav süntaks andmeteaduses (algajatele)](https://philoli.com/python-tutorails-basic-level)
