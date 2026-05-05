---
title: Pythonin yleisimmin käytetty syntaksi datatieteessä (jatkotaso)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 
Viime päivinä olen lukenut kirjaa [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-osoite](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), joka on hyvä ja helppotajuinen johdatus datatieteeseen. Yhdessä luvussa esiteltiin Pythonin perussyntaksia ja datatieteessä yleisesti käytettyä edistyneempää syntaksia. Koen esityksen olevan niin selkeä ja ytimekäs, että päätin kääntää sen tähän muistiinpanoksi.  
[Pythonin yleisimmin käytetty syntaksi datatieteessä (perustaso)](https://philoli.com/python-tutorails-basic-level/)  
[Pythonin yleisimmin käytetty syntaksi datatieteessä (jatkotaso)](https://philoli.com/python-tutorails-advanced-level/)  

Tässä luvussa keskitytään esittelemään edistynyttä Python-syntaksia ja -ominaisuuksia (perustuen Python 2.7:ään), jotka ovat erittäin hyödyllisiä datankäsittelyssä.

<!--more-->

### Lajittelu Sorting

Jos haluat lajitella Python-listan, voit käyttää listan omaa `sort`-metodia. Jos et halua muokata alkuperäistä listaa, voit käyttää `sorted`-funktiota, joka palauttaa uuden lajitellun listan:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x pysyy muuttumattomana
x.sort()            # nyt x = [1,2,3,4]
# sort tai sorted lajittelee listan oletusarvoisesti pienimmästä suurimpaan.
```

Jos haluat lajitella suurimmasta pienimpään, voit määrittää parametriksi `reverse = True`.

Voit myös luoda oman lajittelufunktion, jotta lista lajitellaan tietyn avaimen perusteella:

```python
# Lajitellaan absoluuttisen arvon mukaan suurimmasta pienimpään
x = sorted([-4,1,-2,3], key=abs, reverse=True) # on [-4,3,-2,1]
# Lajitellaan sanojen esiintymiskertojen mukaan suurimmasta pienimpään
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Listakomprehensiot List Comprehensions

Usein haluamme luoda uuden listan valitsemalla tiettyjä alkioita olemassa olevasta listasta, muuttamalla joidenkin alkioiden arvoja tai tekemällä molempia. Pythonissa tähän tarkoitukseen käytetään yleisesti listakomprehensioita (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Vastaavasti voit muuttaa listan sanakirjaksi tai joukoksi:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Jos et tarvitse listan alkioita, voit käyttää alaviivaa muuttujana:

```python
zeroes = [0 for _ in even_numbers] # Sama pituus kuin even_numbers-listalla
```

Listakomprehensiot tukevat useita `for`-silmukoita:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Yhteensä 100 paria: (0,0) (0,1) ... (9,8), (9,9)
```

Myöhemmät `for`-silmukat voivat hyödyntää edellisen `for`-silmukan tuloksia:

```python
increasing_pairs = [(x, y)                      # Sisältää vain parit, joissa x < y
                    for x in range(10)          # range(lo, hi) on sama kuin
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Tulemme käyttämään listakomprehensioita usein.

### Generaattorit ja iteraattorit Generators and Iterators

Listojen ongelmana on, että ne voivat kasvaa huomaamatta valtavan suuriksi. Esimerkiksi `range(1000000)` luo miljoonan alkion listan. Jos käsittelet vain yhden datan kerrallaan, se voi viedä liian kauan (tai muisti voi loppua). Todellisuudessa saatat käyttää vain muutamia ensimmäisiä tietoja, jolloin kaikki muu laskenta on tarpeetonta.

Generaattorit antavat sinun iteroida vain niitä tietoja, joita todella tarvitset. Voit luoda generaattorin käyttämällä funktiota ja `yield`-lauseketta:

```python
def lazy_range(n):
    """laiska versio rangesta"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Kääntäjän lisäys:
Generaattori on myös eräänlainen erityinen iteraattori, ja `yield` on avain generaattorin iteraation toteuttamiseen. Se toimii keskeytys- ja jatkamispisteenä generaattorin suorituksessa; `yield`-lausekkeelle voidaan antaa arvo, ja `yield`-lausekkeen arvo voidaan palauttaa. Kaikkia funktioita, jotka sisältävät `yield`-lauseen, kutsutaan generaattoreiksi. Kun generaattorista poistutaan, se tallentaa nykyisen suoritustilan ja palauttaa sen seuraavalla suorituskerralla saadakseen seuraavan iteraatioarvon. Listan iteroiminen vie paljon muistitilaa, kun taas generaattorin käyttäminen vie lähes vain yhden muistitilan, mikä säästää muistia.

Seuraava silmukka kuluttaa yhden `yield`-arvon kerrallaan, kunnes kaikki on kulutettu:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Itse asiassa Pythonissa on sisäänrakennettu funktio, joka toteuttaa yllä kuvatun `_lazy_range_`-efektin, nimeltään `xrange`, ja Python 3:ssa sitä kutsutaan nimellä `lazy`.) Tämä tarkoittaa, että voit luoda äärettömän sarjan:

```python
def natural_numbers():
    """Palauttaa 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Tällaisia silmukoita, joissa ei ole poistumisehtoa, ei kuitenkaan suositella.

**VINKKI**
> Generaattorin iteroinnin haittapuoli on, että alkioita voi iteroida alusta loppuun vain kerran. Jos haluat iteroida useita kertoja, sinun on luotava joka kerta uusi generaattori tai käytettävä listaa.

Toinen tapa luoda generaattori: käyttämällä sulkeiden sisällä olevaa komprehensio-lauseketta:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Tiedämme, että sanakirjan `items()`-metodi palauttaa listan kaikista sanakirjan avain-arvo-pareista, mutta useammin käytämme `iteritems()`-generaattorimetodia iteroimiseen, joka tuottaa ja palauttaa vain yhden avain-arvo-parin kerrallaan.

### Satunnaisuus Randomness
Datatiedettä opiskellessamme meidän on usein luotava satunnaislukuja, joten voimme käyttää niitä tuomalla `random`-moduulin:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generoi satunnaisluvun
# 0.7579544029403025,         # Satunnaisluvut on standardoitu, alueella 0 ja 1 välillä
# 0.420571580830845,          # Tämä funktio on yleisimmin käytetty satunnaislukujen generointiin
# 0.25891675029296335]
```

Jos haluat toistettavia tuloksia, voit saada `random`-moduulin tuottamaan pseudorandom- (eli deterministisiä) lukuja `random.seed`-asetuksen määrittämän sisäisen tilan perusteella:

```python
random.seed(10)           # asetetaan siemenluvuksi 10
print random.random()     # 0.57140259469
random.seed(10)           # nollataan siemenluvuksi 10
print random.random()     # 0.57140259469 uudelleen
```

Joskus käytämme myös `random.randrange`-funktiota satunnaisluvun luomiseen tietyllä alueella:

```python
random.randrange(10)      # Valitsee satunnaisesti luvun alueelta range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Valitsee satunnaisesti luvun alueelta range(3, 6) = [3, 4, 5]
```

On myös muita käteviä metodeja, kuten `random.shuffle`, joka sekoittaa listan alkioiden järjestyksen luoden uuden satunnaisesti järjestetyn listan:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (sinun tuloksesi pitäisi olla erilainen)
```

Jos haluat valita satunnaisesti yhden alkion listasta, voit käyttää `random.choice`-metodia:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Minun tulokseni oli "Bob"
```

Jos haluat luoda satunnaisen järjestyksen ilman, että alkuperäinen lista sekoittuu, voit käyttää `random.sample`-metodia:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Voit valita useita satunnaisia otoksia (toistot sallittu) kutsumalla funktiota useita kertoja:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Säännölliset lausekkeet Regular Expressions

Säännölliset lausekkeet ovat tekstihakuun käytettäviä työkaluja, jotka ovat hieman monimutkaisia, mutta erittäin hyödyllisiä, ja niistä on kirjoitettu paljon kirjoja. Selitämme ne tarkemmin, kun niitä tulee vastaan, mutta tässä on muutamia esimerkkejä säännöllisten lausekkeiden käytöstä Pythonissa:

```python
import re
print all([                                 # Kaikki seuraavat lausekkeet palauttavat tosi, koska
    not re.match("a", "cat"),               # * 'cat' ei ala 'a':lla
    re.search("a", "cat"),                  # * 'cat' sisältää kirjaimen 'a'
    not re.search("c", "dog"),              # * 'dog' ei sisällä kirjainta 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Jakaa sanan kolmeen osaan 'a':n tai 'b':n mukaan ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Korvaa numerot viivalla
    ])                                      # Tulostaa True
```

### Olio-ohjelmointi Object-Oriented Programming

Kuten monet muutkin kielet, Python antaa sinun määrittää luokkia, jotka kapseloivat dataa ja funktioita sen käsittelyyn. Käytämme niitä joskus tehdäksemme koodistamme selkeämpää ja ytimekkäämpää. Yksinkertaisinta on selittää ne rakentamalla esimerkki, jossa on paljon kommentteja. Oletetaan, että Pythonissa ei ole sisäänrakennettuja joukkoja; haluaisimme ehkä luoda oman `Set`-luokkamme. Mitä ominaisuuksia tällaisella luokalla pitäisi olla? Esimerkiksi, kun annetaan `Set`, meidän on voitava lisätä siihen kohteita, poistaa kohteita ja tarkistaa, sisältääkö se tietyn arvon. Luomme kaikki nämä ominaisuudet luokan jäsenfunktioiksi. Näin voimme käyttää näitä jäsenfunktioita `Set`-objektin jälkeen pisteen avulla:

```python
# Yleensä luokkien nimet annetaan _PascalCase_-muodossa
class Set:
    # Nämä ovat jäsenfunktioita
    # Jokaisella jäsenfunktiolla on ensimmäisenä parametri "self" (toinen yleinen käytäntö)
    # "self" viittaa käytössä olevaan tiettyyn Set-objektiin

    def __init__(self, values=None):
        """Tämä on luontifunktio
        Tätä funktiota kutsutaan aina, kun luot uuden Set-objektin
        Voit kutsua sitä näin:
        s1 = Set() # Tyhjä joukko
        s2 = Set([1,2,2,3]) # Alustaa joukon annetuilla arvoilla"""
        self.dict = {} # Jokaisella Set-instanssilla on oma dict-attribuutti
        # Käytämme tätä attribuuttia jäsenten seuraamiseen
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Tämä on Set-objektin merkkijonoesitys
        Voit saada sen kirjoittamalla objektin nimen Pythonin komentoriville tai käyttämällä str()-metodia."""
        return "Set: " + str(self.dict.keys())

    # Ilmaisemme jäsenyyden asettamalla arvon self.dictin avaimeksi ja sen arvoksi True
    def add(self, value):
        self.dict[value] = True

    # Jos parametri on sanakirjan avain, vastaava arvo on Set-joukossa
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Sitten voimme käyttää `Set`-luokkaa näin:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funktionaaliset työkalut Functional Tools

#### Osittaiset funktiot partial

Kun välitämme funktioita, haluamme joskus käyttää osaa funktiosta luodaksemme uuden funktion. Yksinkertainen esimerkki: oletetaan, että meillä on kahden muuttujan funktio:

```python
def exp(base, power):
    return base ** power
```

Haluamme käyttää sitä luodaksemme funktion, joka ottaa yhden muuttujan ja palauttaa funktion `exp(2, power)` tuloksen, eli pohjana on 2.

Tietenkin voisimme määritellä uuden funktion `def`-avainsanalla, vaikka se ei ehkä olekaan kovin fiksua:

```python
def two_to_the(power):
  return exp(2, power)
```

Älykkäämpi tapa on käyttää `functools.partial`-metodia:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Tällä funktiolla on nyt vain yksi muuttuja
print two_to_the(3)               # 8
```

Jos nimi on määritetty, `partial`-metodia voidaan käyttää myös muiden parametrien täyttämiseen:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Jos yrität käyttää parametreja sekavasti funktion keskellä, ohjelma muuttuu nopeasti sekavaksi, joten yritä välttää tällaista käyttäytymistä.

#### Map-funktio map

Käytämme toisinaan myös `map`-, `reduce`- ja `filter`-funktioita listakomprehensioiden korvaajina:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Sama kuin edellä
list_doubler = partial(map, double)     # Funktion tarkoitus on tuplata lista
twice_xs = list_doubler(xs)             # Myös [2, 4, 6, 8]
```

`map`-metodia voidaan käyttää myös usean parametrin funktioiden kuvaamiseen useisiin listoihin:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter-funktio filter

Vastaavasti `filter`-funktio toteuttaa listakomprehensioiden `if`-ehtoa:

```python
def is_even(x):
    """Palauttaa True, jos x on parillinen, muuten False"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Sama kuin edellä
list_evener = partial(filter, is_even)    # Tämä funktio toteuttaa suodatuksen
x_evens = list_evener(xs)                 # Myös [2, 4]
```

#### Reduce-funktio reduce

`reduce`-metodi yhdistää jatkuvasti listan ensimmäisen ja toisen alkion, sitten yhdistää tuloksen kolmannen alkion kanssa ja toistaa tätä prosessia, kunnes saadaan yksi ainoa tulos:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Tämä funktio toteuttaa listan redusoinnin
x_product = list_product(xs)              # Myös 24
```

### Enumerate-funktio enumerate

Toisinaan tulee eteen tilanne, jossa listaa iteroidessa on käytettävä sekä alkioita että niiden indeksejä:

```python
# Ei kovin Pythonista (ei kovin ytimekästä tai eleganttia)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Ei myöskään kovin Pythonista (ei kovin ytimekästä tai eleganttia)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Ytimekkäin tapa on käyttää `enumerate`-funktiota, joka luo tupleja `(indeksi, alkio)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Vastaavasti, jos haluat käyttää vain indeksiä:

```python
for i in range(len(documents)): do_something(i)   # Ei ytimekästä
for i, _ in enumerate(documents): do_something(i) # Ytimekästä
```

Tulemme käyttämään tätä menetelmää usein myöhemmin.

### Zip ja argumenttien purku zip and Argument Unpacking

#### Zip-funktio zip

Yhdistelemme usein kahta tai useampaa listaa `zip`-toiminnolla. `zip` muuntaa useita listoja yhdeksi listaksi vastaavista tupleista:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Saadaan [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumenttien purku Argument Unpacking

Jos useilla listoilla on eripituisia elementtejä, pakkausprosessi pysähtyy lyhimmän listan loppuun. Voit myös käyttää omituista "unzip"-purkumenetelmää listojen purkamiseen:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Tässä tähtimerkkiä käytetään argumenttien purkamiseen, ja se käyttää `pairs`-listan elementtejä `zip`-funktion yksittäisinä argumentteina. Seuraavalla kutsutavalla on sama vaikutus:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Palauttaa [('a','b','c'), ('1','2','3')]
```

Argumenttien purkua voidaan käyttää myös muiden funktioiden kanssa:

```python
def add(a, b): return a + b

add(1, 2)           # Palauttaa 3
add([1, 2])         # Virhe
add(*[1, 2])        # Palauttaa 3
```

Vaikka tämä ei ole kovin käytännöllistä, se on hyvä tapa tehdä koodista ytimekkäämpää.

### Arbitraarinen argumenttien määrä args and kwargs

Oletetaan, että haluamme luoda korkeamman asteen funktion, joka ottaa syötteenä vanhan funktion ja palauttaa uuden funktion, joka on vanha funktio kerrottuna kahdella:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Esimerkin suoritus:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Kuitenkin, jos argumentteja on enemmän kuin yksi, tämä menetelmä ei toimi hyvin:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Virhe TypeError: g() takes exactly 1 argument (2 given)
```

Tarvitsemme siis funktion, joka voi ottaa vastaan mielivaltaisen määrän argumentteja, ja sitten käytämme argumenttien purkua useiden argumenttien välittämiseen, mikä voi tuntua hieman maagiselta:

```python
def magic(*args, **kwargs):
    print "nimeämättömät argumentit:", args
    print "avainsana-argumentit:", kwargs
magic(1, 2, key="word", key2="word2")
# Tuloste:
# nimeämättömät argumentit: (1, 2)
# avainsana-argumentit: {'key2': 'word2', 'key': 'word'}
```

Kun määrittelemme funktion tällä tavalla, `args` (lyhenne sanasta arguments) on tuple, joka sisältää nimeämättömät argumentit, ja `kwargs` (lyhenne sanasta keyword arguments) on sanakirja, joka sisältää nimetyt argumentit.

Niitä voidaan käyttää myös silloin, kun välitetyt argumentit ovat lista (tai tuple) tai taulukko:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Voit käyttää tätä yhdessä kaikenlaisten omituisten menetelmien kanssa, mutta me käytämme sitä vain ratkaistaksemme ongelman, jossa korkeamman asteen funktiot välittävät mielivaltaisen pituisia argumentteja:

```python
def doubler_correct(f):
    """Toimii tehokkaasti riippumatta siitä, mikä f on"""
    def g(*args, **kwargs):
        """Riippumatta argumenttien määrästä, tämä funktio välittää ne oikein f:lle"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Tervetuloa datatieteen maailmaan!

Ding! Onneksi olkoon, avasit juuri oven uuteen maailmaan! Nyt voit lähteä pitämään hauskaa~

**Aiheeseen liittyvää luettavaa:**

[Pythonin yleisimmin käytetty syntaksi datatieteessä (perustaso)](https://philoli.com/python-tutorails-basic-level)
