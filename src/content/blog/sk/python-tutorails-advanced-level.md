---
title: Pokročilá syntax Pythonu pre dátovú vedu
date: 2018-11-07 23:53:13
tags: Python
categories: Dátová veda
mathjax: true
---
Posledné dni som čítal túto knihu [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF adresa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) ), ktorá je skvelou a ľahko zrozumiteľnou úvodnou knihou do dátovej vedy. Jedna kapitola sa venovala základnej syntaxi Pythonu a pokročilým konštrukciám často používaným v dátovej vede. Považoval som jej vysvetlenie za veľmi dobré, stručné a jasné, preto som sa rozhodol preložiť ju sem ako referenciu pre seba.
[Základná syntax Pythonu často používaná v dátovej vede](https://philoli.com/python-tutorails-basic-level/)
[Pokročilá syntax Pythonu často používaná v dátovej vede](https://philoli.com/python-tutorails-advanced-level/)

Táto kapitola sa zameriava na predstavenie veľmi užitočných pokročilých syntaktických konštrukcií a funkcií Pythonu pri spracovaní dát (vychádzajúc z Pythonu 2.7).

<!--more-->

### Triedenie (Sorting)

Ak chcete triediť zoznam v Pythone, môžete použiť metódu `sort` priamo na zozname. Ak nechcete zmeniť pôvodný zoznam, môžete použiť funkciu `sorted`, ktorá vráti nový, už usporiadaný zoznam:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x sa nemení
x.sort()            # aktuálne x = [1,2,3,4]
sort alebo sorted predvolene zoraďujú zoznam od najmenšieho po najväčšie.
```

Ak ho chcete zoradiť od najväčšieho po najmenšie, môžete zadať parameter `reverse=True`.

Môžete si tiež definovať vlastnú triediacu funkciu, ktorá umožní zoradiť zoznam podľa určeného kľúča:

```python
# Zoradenie podľa absolútnej hodnoty od najväčšej po najmenšiu
x = sorted([-4,1,-2,3], key=abs, reverse=True) # je [-4,3,-2,1]
# Zoradenie podľa počtu výskytov slova od najväčšieho po najmenšie
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Generátory zoznamov (List Comprehensions)

Často sa stretávame so situáciami, keď chceme z existujúceho zoznamu vybrať určité prvky a vytvoriť nový zoznam, alebo zmeniť hodnoty niektorých prvkov, prípadne oboje. V Pythone je na to idióm, ktorý sa nazýva List Comprehensions (generátory zoznamov):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Podobne môžete zoznam premeniť na slovník alebo množinu:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Ak nepotrebujete používať prvky v zozname, môžete použiť podčiarkovník ako premennú:

```python
zeroes = [0 for _ in even_numbers] # Má rovnakú dĺžku ako zoznam even_numbers.
```

Generátory zoznamov podporujú viacnásobné cykly `for`:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Spolu 100 párov: (0,0), (0,1), ..., (9,8), (9,9).
```

Následný cyklus `for` môže využívať výsledky predchádzajúceho cyklu `for`:

```python
increasing_pairs = [(x, y)                      # Obsahuje len páry, kde x < y.
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Generátory zoznamov budeme v budúcnosti často používať.

### Generátory a iterátory (Generators and Iterators)

Zoznamy majú jeden problém: ľahko sa môžu stať extrémne rozsiahlymi. Napríklad `range(1000000)` vytvorí zoznam s miliónom prvkov. Ak spracúvate dáta po jednom, môže to trvať príliš dlho (alebo dôjde k vyčerpaniu pamäte). V skutočnosti možno potrebujete len prvých pár dát a zvyšné operácie sú zbytočné.

Generátory vám umožňujú iterovať iba cez tie dáta, ktoré skutočne potrebujete. Generátor môžete vytvoriť pomocou funkcie a výrazu `yield`:

```python
def lazy_range(n):
    """a lazy version of range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Poznámka prekladateľa:
Generátor je tiež špeciálny typ iterátora a `yield` je kľúčový pre jeho fungovanie. Slúži ako bod pozastavenia a obnovenia vykonávania generátora; výrazu `yield` možno priradiť hodnotu, alebo vrátiť hodnotu výrazu `yield`. Akákoľvek funkcia, ktorá obsahuje príkaz `yield`, sa nazýva generátor. Keď generátor preruší vykonávanie, uloží si svoj aktuálny stav a pri ďalšom volaní ho obnoví, aby poskytol ďalšiu iteračnú hodnotu. Používanie iterácie cez zoznamy spotrebuje veľké množstvo pamäťového priestoru, zatiaľ čo generátor zaberá približne len jeden pamäťový priestor, čím šetrí pamäť.

Tento cyklus bude postupne spotrebovávať hodnoty z `yield`, kým sa nevyčerpajú všetky:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(V skutočnosti má Python vstavanú funkciu, ktorá dosahuje rovnaký efekt ako `_lazy_range_`, nazýva sa `xrange`, a v Pythone 3 sa volá `lazy`.) To znamená, že môžete vytvoriť nekonečnú postupnosť:

```python
def natural_numbers():
    """Vráti 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Neodporúča sa však používať takéto príkazy bez logiky na ukončenie cyklu.

**TIP**
> Jednou z nevýhod iterácie s generátormi je, že cez prvky môžete iterovať len raz od začiatku do konca. Ak chcete iterovať viackrát, musíte zakaždým vytvoriť nový generátor alebo použiť zoznam.

Druhý spôsob vytvorenia generátora: pomocou výrazu v zátvorkách (generátorový výraz):

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Vieme, že metóda `items()` v slovníkoch vráti zoznam všetkých párov kľúč-hodnota v slovníku, no častejšie používame metódu generátora `iteritems()` na iteráciu, ktorá zakaždým vygeneruje a vráti len jeden pár kľúč-hodnota.

### Náhodnosť (Randomness)
Pri štúdiu dátovej vedy budeme často potrebovať generovať náhodné čísla. Stačí importovať modul `random` a môžete ho použiť:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generuje náhodné číslo
# 0.7579544029403025,         # Náhodné číslo je normalizované, v rozsahu medzi 0 a 1.
# 0.420571580830845,          # Táto funkcia je najčastejšie používaná na generovanie náhodných čísel.
# 0.25891675029296335]
```

Ak chcete dosiahnuť reprodukovateľné výsledky, môžete nechať modul `random` generovať pseudonáhodné (t.j. deterministické) čísla na základe vnútorného stavu nastaveného pomocou `random.seed`:

```python
random.seed(10)           # nastaví seed na 10
print random.random()     # 0.57140259469
random.seed(10)           # resetuje seed na 10
print random.random()     # 0.57140259469 znova
```

Niekedy tiež používame funkciu `random.randrange` na generovanie náhodného čísla v určenom rozsahu:

```python
random.randrange(10)      # Náhodne vyberie číslo z range(10) = [0, 1, ..., 9].
random.randrange(3, 6)    # Náhodne vyberie číslo z range(3, 6) = [3, 4, 5].
```

Existujú aj ďalšie metódy, ktoré sú niekedy veľmi užitočné. Napríklad `random.shuffle` zamieša poradie prvkov v zozname a vytvorí nový, náhodne usporiadaný zoznam:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Váš výsledok by mal byť iný)
```

Ak chcete náhodne vybrať jeden prvok zo zoznamu, môžete použiť metódu `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Môj výsledok bol "Bob".
```

Ak chcete vygenerovať náhodnú postupnosť a zároveň nechcete zamiešať pôvodný zoznam, môžete použiť metódu `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Výber viacerých náhodných vzoriek (s povolením opakovania) môžete dosiahnuť opakovaným volaním:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regulárne výrazy (Regular Expressions)

Regulárne výrazy sa používajú na vyhľadávanie v texte. Sú síce trochu zložité, ale extrémne užitočné, a existuje o nich množstvo kníh. Podrobnejšie ich vysvetlíme, keď na ne narazíme. Tu sú niektoré príklady použitia regulárnych výrazov v Pythone:

```python
import re
print all([                                 # Všetky nasledujúce výrazy vrátia True, pretože
    not re.match("a", "cat"),               # * 'cat' nezačína na 'a'.
    re.search("a", "cat"),                  # * 'cat' obsahuje písmeno 'a'.
    not re.search("c", "dog"),              # * 'dog' neobsahuje písmeno 'c'.
    3 == len(re.split("[ab]", "carbs")),    # * Rozdelí slovo na tri časti ['c','r','s'] podľa 'a' alebo 'b'.
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Nahradí čísla pomlčkami.
    ])                                      # Výstup True
```

### Objektovo orientované programovanie (Object-Oriented Programming)

Rovnako ako mnoho iných jazykov, aj Python vám umožňuje definovať triedy, ktoré zapuzdrujú dáta, a funkcie, ktoré s nimi manipulujú. Niekedy ich používame na to, aby bol náš kód jasnejší a stručnejší. Najjednoduchšie je pravdepodobne vysvetliť ich prostredníctvom príkladu s rozsiahlymi komentármi. Predpokladajme, že nemáme vstavanú množinu Pythonu, a chceli by sme vytvoriť vlastnú triedu `Set`. Aké funkcie by takáto trieda mala mať? Napríklad, ak máme `Set`, mali by sme doň vedieť pridávať prvky, odoberať ich a kontrolovať, či obsahuje konkrétnu hodnotu. Preto vytvoríme všetky tieto funkcie ako členské funkcie tejto triedy. Tieto členské funkcie potom budeme môcť pristupovať pomocou bodky za objektom `Set`:

```python
# Podľa konvencie dávame názvom tried _PascalCase_.
class Set:
    # Toto sú členské funkcie.
    # Každá členská funkcia má ako prvý parameter "self" (ďalšia konvencia).
    # "self" odkazuje na konkrétny objekt Set, ktorý sa práve používa.

    def __init__(self, values=None):
        """Toto je konštruktor (funkcia na vytvorenie).
        Táto funkcia sa zavolá vždy, keď vytvoríte nový Set.
        Môžete ju zavolať takto:
        s1 = Set() # Prázdna množina.
        s2 = Set([1,2,2,3]) # Inicializuje množinu s danými hodnotami."""
        self.dict = {} # Každá inštancia Set má svoj vlastný atribút dict.
        # Tento atribút používame na sledovanie každého člena.
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Toto je reťazcová reprezentácia objektu Set.
        Môžete ju získať zadaním názvu objektu do príkazového riadka Pythonu alebo použitím metódy str() na objekte."""
        return "Set: " + str(self.dict.keys())

    # Členstvo budeme reprezentovať tým, že sa hodnota stane kľúčom v self.dict a jej hodnota bude True.
    def add(self, value):
        self.dict[value] = True

    # Ak je parameter kľúčom v slovníku, potom je zodpovedajúca hodnota v Set.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Potom môžeme `Set` použiť takto:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionálne nástroje (Functional Tools)

#### Parciálne funkcie (partial)

Pri práci s funkciami niekedy chceme použiť len časť funkcionality existujúcej funkcie na vytvorenie novej funkcie. Ako jednoduchý príklad si predstavte funkciu s dvoma premennými:

```python
def exp(base, power):
    return base ** power
```

Chceme ju použiť na vytvorenie funkcie, ktorá prijíma jednu premennú a vracia výsledok mocninovej funkcie `exp(2, power)` s bázou 2.

Samozrejme, môžeme definovať novú funkciu pomocou `def`, aj keď to nemusí byť najmúdrejšie riešenie:

```python
def two_to_the(power):
  return exp(2, power)
```

Chytrejší prístup je použiť metódu `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Teraz má funkcia len jednu premennú.
print two_to_the(3)               # 8
```

Ak sú názvy zadané, metóda `partial` môže vyplniť aj iné parametre:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Ak sa pokúsite chaoticky používať parametre uprostred funkcie, program sa rýchlo stane neprehľadným, preto sa tomuto správaniu snažte vyhnúť.

#### Mapovanie (map)

Občas používame funkcie ako `map`, `reduce` a `filter` ako alternatívu k generátorom zoznamov:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # To isté.
list_doubler = partial(map, double)     # Funkcia, ktorá zdvojnásobuje zoznam.
twice_xs = list_doubler(xs)             # Tiež [2, 4, 6, 8].
```

Metóda `map` sa dá použiť aj na mapovanie funkcií s viacerými argumentmi na viacero zoznamov:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrovanie (filter)

Podobne, `filter` implementuje funkcionalitu `if` v generátoroch zoznamov:

```python
def is_even(x):
    """Vráti True, ak je x párne, inak False."""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # To isté.
list_evener = partial(filter, is_even)    # Táto funkcia implementuje filtrovanie.
x_evens = list_evener(xs)                 # Tiež [2, 4].
```

#### Redukcia (reduce)

Metóda `reduce` neustále spája prvý a druhý prvok v zozname, potom výsledok spojí s tretím prvkom, a tento proces opakuje, kým nezíska jeden jedinečný výsledok:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Táto funkcia redukuje zoznam.
x_product = list_product(xs)              # Tiež 24.
```

### Enumerácia (enumerate)

Občas nastanú situácie, keď pri prechádzaní zoznamu potrebujeme použiť zároveň prvok aj jeho index:

```python
# Menej pythonické (menej elegantné/stručné)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Tiež menej pythonické (menej elegantné/stručné)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Najelegantnejšie je použiť metódu `enumerate`, ktorá generuje dvojice `(index, prvok)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Podobne, ak chcete použiť iba index:

```python
for i in range(len(documents)): do_something(i)   # Menej elegantné.
for i, _ in enumerate(documents): do_something(i) # Elegantné.
```

Túto metódu budeme v budúcnosti často používať.

### Zipovanie a rozbaľovanie argumentov (zip and Argument Unpacking)

#### Zipovanie (zip)

Často potrebujeme 'zipnúť' dva alebo viac zoznamov. Zipovanie v podstate transformuje viacero zoznamov na jeden zoznam zodpovedajúcich si dvojíc (tuples):

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Výsledok je [('a', 1), ('b', 2), ('c', 3)].
```

#### Rozbaľovanie argumentov (Argument Unpacking)

Ak majú zoznamy rôzne dĺžky, proces zipovania sa zastaví na konci najkratšieho zoznamu. Môžete tiež použiť zvláštny trik na "rozbalenie" (unzip) zoznamov:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Hviezdička sa tu používa na rozbaľovanie argumentov, kde prvky `pairs` slúžia ako samostatné argumenty pre `zip`. Nasledujúce volanie má rovnaký efekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Vráti [('a','b','c'), ('1','2','3')]
```

Rozbaľovanie argumentov sa dá použiť aj s inými funkciami:

```python
def add(a, b): return a + b

add(1, 2)           # Vráti 3.
add([1, 2])         # Vyvolá chybu.
add(*[1, 2])        # Vráti 3.
```

Hoci to nie je vždy praktické, je to šikovný trik, ako zjednodušiť kód.

### Odovzdávanie premenného počtu argumentov (*args a **kwargs)

Predpokladajme, že chceme vytvoriť funkciu vyššieho rádu, ktorá prijíma starú funkciu a vracia novú funkciu, ktorá je dvojnásobkom starej funkcie:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Príklad spustenia:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Avšak, akonáhle sa odovzdá viac ako jeden argument, táto metóda prestane fungovať:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Vyvolá chybu TypeError: g() takes exactly 1 argument (2 given)
```

Preto potrebujeme definovať funkciu, ktorá dokáže prijať ľubovoľný počet argumentov, a potom ich odovzdať pomocou rozbaľovania argumentov. Môže to pôsobiť trochu magicky:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Výsledok výstupu:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Keď definujeme funkciu týmto spôsobom, `args` (skratka pre arguments) je tuple, ktorý obsahuje nepomenované argumenty, zatiaľ čo `kwargs` (skratka pre keyword arguments) je slovník, ktorý obsahuje pomenované argumenty.

Dajú sa použiť aj v situáciách, keď sú odovzdávané argumenty v zozname (alebo tuple) alebo slovníku:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Môžete to použiť s rôznymi zvláštnymi metódami, ale my ho použijeme len na riešenie problému odovzdávania premenného počtu argumentov funkciám vyššieho rádu:

```python
def doubler_correct(f):
    """Funguje bez ohľadu na to, čo je f."""
    def g(*args, **kwargs):
        """Bez ohľadu na počet parametrov, táto funkcia ich dokáže správne odovzdať funkcii f."""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Vitajte vo svete dátovej vedy!

Ding! Gratulujem, práve ste otvorili dvere do nového sveta! Teraz sa môžete s radosťou pustiť do objavovania! ~

**Súvisiace čítanie:**

[Základná syntax Pythonu často používaná v dátovej vede](https://philoli.com/python-tutorails-basic-level)
