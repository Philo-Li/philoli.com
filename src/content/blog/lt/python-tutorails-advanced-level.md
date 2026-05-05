---
title: Dažnai naudojamos Python sintaksės ypatybės duomenų moksle (pažengusiems)
date: 2018-11-07 23:53:13
tags: Python
categories: Duomenų mokslas
mathjax: true
---
Šiomis dienomis skaitau knygą [„Data Science from Scratch“](https://book.douban.com/subject/26364377/) ([PDF nuoroda](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), ir tai puikus, lengvai suprantamas įvadas į duomenų mokslą. Viename iš skyrių pristatomos pagrindinės Python sintaksės taisyklės ir pažangesnės, dažnai naudojamos duomenų moksle. Man pasirodė, kad šis pristatymas yra labai aiškus ir glaustas, todėl nusprendžiau jį išversti ir pasidalinti čia kaip atmintine.
[Dažnai naudojamos Python sintaksės ypatybės duomenų moksle (pradedantiesiems)](https://philoli.com/python-tutorails-basic-level/)
[Dažnai naudojamos Python sintaksės ypatybės duomenų moksle (pažengusiems)](https://philoli.com/python-tutorails-advanced-level/)

Šiame skyriuje daugiausia dėmesio skiriama pažangesnėms Python sintaksės ypatybėms ir funkcijoms (pagrįstoms Python 2.7), kurios yra itin naudingos duomenų apdorojime.

<!--more-->

### Rūšiavimas `Sorting`

Jei norite rūšiuoti Python sąrašą, galite naudoti sąrašo metodą `sort`. Jei nenorite pakeisti originalaus sąrašo, galite naudoti funkciją `sorted`, kuri grąžins naują, surūšiuotą sąrašą:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x lieka nepakitęs
x.sort()            # dabar x = [1,2,3,4]
# `sort` arba `sorted` pagal nutylėjimą rūšiuoja sąrašą didėjančia tvarka.
```

Jei norite rūšiuoti mažėjančia tvarka, galite nurodyti parametrą `reverse = True`.

Taip pat galite apibrėžti pasirinktinę rūšiavimo funkciją, kad sąrašas būtų rūšiuojamas pagal nurodytą raktą:

```python
# Rūšiuoti pagal absoliučiąją vertę mažėjančia tvarka
x = sorted([-4,1,-2,3], key=abs, reverse=True) # yra [-4,3,-2,1]
# Rūšiuoti pagal žodžių pasikartojimo dažnumą mažėjančia tvarka
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Sąrašo generavimas `List Comprehensions`

Dažnai susiduriame su situacija, kai norime iš sąrašo išgauti tam tikrus elementus, kad sudarytume naują sąrašą, pakeisti kai kurių elementų reikšmes arba atlikti abu veiksmus. Įprastas Python būdas tai padaryti yra sąrašo generavimas (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Panašiai galite paversti sąrašą žodynu arba aibe:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Jei jums nereikia naudoti sąrašo elementų, brūkšnį galite naudoti kaip kintamąjį:

```python
zeroes = [0 for _ in even_numbers] # Turi tokį patį ilgį kaip sąrašas `even_numbers`
```

Sąrašo generavimas palaiko kelis `for` ciklus:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Iš viso 100 porų: (0,0) (0,1) ... (9,8), (9,9)
```

Vėlesnis `for` ciklas gali naudoti ankstesnio `for` ciklo rezultatus:

```python
increasing_pairs = [(x, y)                      # Apima tik poras, kur x < y
                    for x in range(10)          # `range(lo, hi)` yra lygu
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Ateityje sąrašo generavimą naudosime labai dažnai.

### Generatoriai ir iteracijos `Generators and Iterators`

Sąrašai turi vieną problemą – jie gali labai išaugti. Pavyzdžiui, `range(1000000)` sugeneruos sąrašą su milijonu elementų. Jei duomenis apdorojate po vieną, tai gali užtrukti per ilgai (arba išeikvoti visą atmintį). Tiesą sakant, jums gali prireikti tik kelių pirmųjų duomenų, o likę skaičiavimai būtų nereikalingi.

Generatoriai leidžia jums iteruoti tik per tuos duomenis, kurių jums reikia. Generatorius galite sukurti naudodami funkciją ir `yield` išraišką:

```python
def lazy_range(n):
    """tingi `range` versija"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Vertėjo pastaba:
Generatorius taip pat yra specialus iteratorius, o `yield` yra pagrindinis generatoriaus veikimo raktas. Jis veikia kaip generatoriaus vykdymo pristabdymo ir atnaujinimo taškas, leidžiantis priskirti reikšmę `yield` išraiškai arba grąžinti `yield` išraiškos reikšmę. Bet kuri funkcija, kurioje yra `yield` sakinys, vadinama generatoriumi. Išeinant iš generatoriaus, jis išsaugo dabartinę vykdymo būseną ir atkuria ją kitą kartą, kad gautų kitą iteracijos reikšmę. Naudojant sąrašo iteraciją, bus užimta daug atminties, o naudojant generatorių užimama maždaug viena atminties vieta, taip taupant atmintį.

Šis ciklas naudos po vieną `yield` grąžintą reikšmę, kol jos baigsis:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Tiesą sakant, Python turi įmontuotą funkciją, kuri veikia panašiai kaip `_lazy_range_`, vadinamą `xrange`, o Python 3 – `lazy`.) Tai reiškia, kad galite sukurti begalinę seką:

```python
def natural_numbers():
    """Grąžina 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Tačiau nerekomenduojama naudoti tokių teiginių be išėjimo iš ciklo logikos.

**PATARIMAS**
> Vienas generatoriaus iteracijos trūkumas yra tas, kad elementus galima iteruoti tik vieną kartą nuo pradžios iki pabaigos. Jei norite iteruoti kelis kartus, turite kiekvieną kartą kurti naują generatorių arba naudoti sąrašą.

Antrasis būdas sukurti generatorių: naudojant generavimo išraišką skliausteliuose:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Žinome, kad žodyno metodas `items()` grąžins sąrašą su visomis žodyno rakto ir reikšmės poromis, tačiau dažniau iteracijai naudojame `iteritems()` generatoriaus metodą, kuris kiekvieną kartą sugeneruoja ir grąžina tik vieną rakto ir reikšmės porą.

### Atsitiktinumas `Randomness`
Mokydamiesi duomenų mokslo, dažnai turėsime generuoti atsitiktinius skaičius, todėl tereikia importuoti `random` modulį ir juo naudotis:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # `random.random()` generuoja atsitiktinį skaičių
# 0.7579544029403025,         # Atsitiktinis skaičius yra normalizuotas, jo reikšmė yra tarp 0 ir 1
# 0.420571580830845,          # Ši funkcija yra dažniausiai naudojama atsitiktiniams skaičiams generuoti
# 0.25891675029296335]
```

Jei norite gauti atkuriamus rezultatus, galite priversti `random` modulį generuoti pseudo-atsitiktinius (t. y. deterministinius) skaičius, pagrįstus `random.seed` nustatyta vidine būsena:

```python
random.seed(10)           # nustato sėklą į 10
print random.random()     # 0.57140259469
random.seed(10)           # iš naujo nustato sėklą į 10
print random.random()     # 0.57140259469 vėl
```

Kartais taip pat naudojame `random.randrange` funkciją atsitiktiniam skaičiui nurodytame diapazone generuoti:

```python
random.randrange(10)      # Atsitiktinai pasirenka skaičių iš `range(10)` = [0, 1, ..., 9]
random.randrange(3, 6)    # Atsitiktinai pasirenka skaičių iš `range(3, 6)` = [3, 4, 5]
```

Yra ir kitų patogių metodų, pavyzdžiui, `random.shuffle`, kuris sumaišys sąrašo elementų tvarką, sukurdamas atsitiktinai išdėstytą sąrašą:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (jūsų rezultatas turėtų skirtis)
```

Jei norite atsitiktinai pasirinkti vieną elementą iš sąrašo, galite naudoti `random.choice` metodą:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Gavau "Bob"
```

Jei norite sugeneruoti atsitiktinę seką, bet nenorite sumaišyti originalaus sąrašo, galite naudoti `random.sample` metodą:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Galite pasirinkti kelis atsitiktinius pavyzdžius (leidžiant pasikartojimus), iškviesdami kelis kartus:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Reguliariosios išraiškos `Regular Expressions`

Reguliariosios išraiškos naudojamos teksto paieškai. Jos gali atrodyti sudėtingos, tačiau yra nepaprastai naudingos, todėl joms skirtos ištisos knygos. Mes jas išsamiau paaiškinsime, kai susidursime su jomis praktiškai. Štai keletas pavyzdžių, kaip reguliariosios išraiškos naudojamos Python:

```python
import re
print all([                                 # Visi toliau pateikti teiginiai grąžina `True`, nes
    not re.match("a", "cat"),               # * „cat“ neprasideda „a“
    re.search("a", "cat"),                  # * „cat“ sudėtyje yra raidė „a“
    not re.search("c", "dog"),              # * „dog“ sudėtyje nėra raidės „c“
    3 == len(re.split("[ab]", "carbs")),    # * Žodis skaidomas į tris dalis ['c','r','s'] pagal „a“ arba „b“
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Skaičiai pakeičiami brūkšniais
    ])                                      # Išvestis `True`
```

### Objektinis programavimas `Object-Oriented Programming`

Kaip ir daugelis kitų kalbų, Python leidžia apibrėžti klases, kurios apjungia duomenis, ir funkcijas, kurios su jais atlieka operacijas. Kartais jas naudojame, kad mūsų kodas taptų aiškesnis ir glaustesnis. Greičiausiai paprasčiausia jas paaiškinti, sukuriant gausiai komentuotą pavyzdį. Tarkime, kad Python neturi įmontuotos aibės (Set) tipo, todėl mes galime norėti sukurti savo `Set` klasę. Kokias funkcijas turėtų turėti ši klasė? Pavyzdžiui, turėdami aibę, turėtume galėti į ją įdėti elementus, ištrinti elementus ir patikrinti, ar ji turi tam tikrą reikšmę. Taigi, visas šias funkcijas sukursime kaip šios klasės narės funkcijas. Tokiu būdu galėsime pasiekti šias narės funkcijas po `Set` objekto, naudodami tašką:

```python
# Pagal konvenciją klasės pavadinimui naudojame _PascalCase_
class Set:
    # Tai yra narės funkcijos
    # Kiekviena narės funkcija turi `self` parametrą pirmoje vietoje (kita konvencija)
    # `self` atitinka konkretų naudojamą `Set` objektą

    def __init__(self, values=None):
        """Tai yra kūrimo funkcija
        Ji iškviečiama kiekvieną kartą, kai sukuriate naują `Set` objektą.
        Galima ją iškviesti taip:
        s1 = Set() # Tuščia aibė
        s2 = Set([1,2,2,3]) # Inicializuojama aibė su nurodytomis reikšmėmis"""
        self.dict = {} # Kiekvienas `Set` egzempliorius turi savo `dict` atributą
        # Šį atributą naudojame kiekvienam nariui sekti
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Tai `Set` objekto stringinis atvaizdavimas.
        Galite jį gauti įvesdami stringą į Python komandų langą arba perduodami objektą metodui `str()`."""
        return "Set: " + str(self.dict.keys())

    # Narystę parodysime, tapdami self.dict raktais ir nustatydami rakto reikšmę į True.
    def add(self, value):
        self.dict[value] = True

    # Jei argumentas yra žodyno raktas, atitinkama reikšmė yra aibėje.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Tuomet galime naudoti `Set` taip:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkciniai įrankiai `Functional Tools`

#### Dalinės funkcijos `partial`

Perduodant funkcijas, kartais norime panaudoti dalį funkcijos funkcionalumo, kad sukurtume naują funkciją. Paprastas pavyzdys: tarkime, turime funkciją su dviem kintamaisiais:

```python
def exp(base, power):
    return base ** power
```

Norime ją panaudoti, kad sukurtume funkciją, kuri priima vieną kintamąjį ir grąžina `exp(2, power)` rezultatą, t. y. 2 pakeltą nurodytu laipsniu.

Žinoma, galėtume apibrėžti naują funkciją naudodami `def`, nors tai atrodytų ne itin protinga:

```python
def two_to_the(power):
  return exp(2, power)
```

Gudresnis būdas yra pasinaudoti `functools.partial` metodu:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Dabar funkcija turi tik vieną kintamąjį
print two_to_the(3)               # 8
```

Jei nurodytas pavadinimas, `partial` metodas gali užpildyti ir kitus parametrus:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Jei bandysite chaotiškai naudoti parametrus funkcijos viduryje, programa greitai taps paini, todėl stenkitės to vengti.

#### Atvaizdavimas `map`

Kartais naudojame funkcijas `map`, `reduce` ir `filter` kaip sąrašo generavimo alternatyvą:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Tas pats
list_doubler = partial(map, double)     # Funkcija, kuri padvigubina sąrašą
twice_xs = list_doubler(xs)             # Taip pat [2, 4, 6, 8]
```

`map` metodas taip pat gali būti naudojamas atvaizduoti funkcijas su keliais parametrais į kelis sąrašus:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtravimas `filter`

Panašiai, `filter` atlieka `if` funkcionalumą sąrašo generavime:

```python
def is_even(x):
    """Grąžina `True`, jei `x` yra lyginis, ir `False`, jei `x` yra nelyginis"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Tas pats
list_evener = partial(filter, is_even)    # Ši funkcija atlieka filtravimą
x_evens = list_evener(xs)                 # Taip pat [2, 4]
```

#### Redukcija `reduce`

Metodas `reduce` nuosekliai sujungia pirmąjį ir antrąjį sąrašo elementus, tada gautą rezultatą sujungia su trečiuoju elementu ir kartoja šį procesą, kol gaunamas vienintelis rezultatas:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Ši funkcija atlieka sąrašo redukciją
x_product = list_product(xs)              # Taip pat 24
```

### Numeravimas `enumerate`

Kartais pasitaiko situacijų, kai iteruojant per sąrašą, reikia naudoti tiek elementą, tiek jo indeksą:

```python
# Ne visai Python stiliaus (ne per daug glausta ar elegantiška)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Taip pat ne visai Python stiliaus (ne per daug glausta ar elegantiška)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Glaustiausias būdas yra naudoti `enumerate` metodą, kuris generuoja poras `(indeksas, elementas)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Panašiai, jei norite naudoti tik indeksą:

```python
for i in range(len(documents)): do_something(i)   # Neglaustai
for i, _ in enumerate(documents): do_something(i) # Glaustai
```

Šį metodą ateityje naudosime labai dažnai.

### Sujungimas ir argumentų išpakavimas `zip` ir `Argument Unpacking`

#### Sujungimas `zip`

Dažnai sujungime du ar daugiau sąrašų. Sujungimas iš esmės paverčia kelis sąrašus į vieną sąrašą su atitinkamomis poromis (angl. `tuples`):

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Gauname `[('a', 1), ('b', 2), ('c', 3)]`
```

#### Argumentų išpakavimas `Argument Unpacking`

Jei sąrašų ilgiai skiriasi, sujungimo procesas sustoja ties trumpiausio sąrašo pabaiga. Taip pat galite naudoti keistą „išpakavimo“ (`unzip`) triuką, kad išpakuotumėte sąrašus:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Žvaigždutė čia naudojama argumentų išpakavimui atlikti; ji naudoja `pairs` elementus kaip atskirus `zip` funkcijos argumentus. Toliau pateiktas iškvietimas turi tą patį efektą:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Grąžina `[('a','b','c'), ('1','2','3')]`
```

Argumentų išpakavimas taip pat gali būti naudojamas kartu su kitomis funkcijomis:

```python
def add(a, b): return a + b

add(1, 2)           # Grąžina 3
add([1, 2])         # Klaida
add(*[1, 2])        # Grąžina 3
```

Nors tai nėra labai praktiška, tai puikus būdas padaryti kodą glaustesniu.

### Kintamo ilgio argumentų perdavimas `args` ir `kwargs`

Tarkime, norime sukurti aukštesniojo lygio funkciją, kuri priima seną funkciją ir grąžina naują funkciją, kuri yra senoji funkcija padauginta iš 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Pavyzdys:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Tačiau, jei perduodamų argumentų skaičius yra didesnis nei vienas, šis metodas nebeveikia gerai:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Klaida TypeError: g() takes exactly 1 argument (2 given)
```

Todėl turime apibrėžti funkciją, kuri galėtų priimti bet kokį argumentų skaičių, ir tada naudoti argumentų išpakavimą, kad perduotume kelis argumentus. Tai gali atrodyti šiek tiek magiškai:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Išvestis:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Kai apibrėžiame funkciją tokiu būdu, `args` (sutrumpinimas nuo „arguments“) yra pora, kurioje yra bevardžiai argumentai, o `kwargs` (sutrumpinimas nuo „keyword arguments“) yra žodynas, kuriame yra raktiniai argumentai.

Jie taip pat gali būti naudojami, kai perduodami argumentai yra sąrašai (arba poros) arba masyvai:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Galite jį naudoti įvairiais neįprastais būdais, tačiau mes jį naudosime tik kintamo ilgio argumentų perdavimo problemai aukštesniojo lygio funkcijoms spręsti:

```python
def doubler_correct(f):
    """Veikia su bet kokia `f`"""
    def g(*args, **kwargs):
        """Kad ir kiek būtų argumentų, ši funkcija teisingai juos perduos `f`"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Sveiki atvykę į duomenų mokslo pasaulį!

Ding! Sveikiname atvėrus duris į naują pasaulį! Dabar galite smagiai leisti laiką!

**Susiję įrašai:**

[Dažnai naudojamos Python sintaksės ypatybės duomenų moksle (pradedantiesiems)](https://philoli.com/python-tutorails-basic-level)
