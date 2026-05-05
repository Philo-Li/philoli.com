---
title: Pogosta napredna sintaksa Pythona za podatkovno znanost
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
Zadnje dni sem bral tole knjigo [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), ki je odličen in razumljiv uvod v podatkovno znanost. Eno poglavje je opisovalo osnovno sintakso Pythona in napredno sintakso, pogosto uporabljeno v podatkovni znanosti. Ker se mi je zdelo dobro predstavljeno, jedrnato in jasno, sem se odločil, da ga prevedem in objavim tukaj kot opomnik.
[Pogosta osnovna sintaksa Pythona v podatkovni znanosti](https://philoli.com/python-tutorails-basic-level/)
[Pogosta napredna sintaksa Pythona v podatkovni znanosti](https://philoli.com/python-tutorails-advanced-level/)

To poglavje se osredotoča na predstavitev naprednih sintaktičnih elementov in funkcij Pythona (na podlagi Pythona 2.7), ki so izjemno uporabni pri obdelavi podatkov.

<!--more-->

### Razvrščanje Sorting

Če želite razvrstiti Pythonov seznam, lahko uporabite metodo `sort` za sezname. Če pa ne želite spremeniti izvirnega seznama, lahko uporabite funkcijo `sorted`, ki vrne nov, razvrščen seznam:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x ostane nespremenjen
x.sort()            # trenutni x = [1,2,3,4]
# sort ali sorted privzeto razvrščata sezname od najmanjšega do največjega.
```

Če želite razvrščati od največjega do najmanjšega, lahko določite parameter `reverse = True`.

Prav tako lahko določite lastno funkcijo za razvrščanje, da se seznam razvrsti po določenem ključu:

```python
# Razvrščanje po absolutni vrednosti od največje do najmanjše
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Razvrščanje po pogostosti besed od največje do najmanjše
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Seznamske izpeljanke List Comprehensions

Pogosto se znajdemo v situaciji, ko želimo iz seznama izvleči določene elemente in iz njih sestaviti nov seznam, spremeniti vrednosti nekaterih elementov ali pa oboje. Idiomatičen način za to v Pythonu so seznamske izpeljanke (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Podobno lahko sezname pretvorite v slovarje ali sete:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Če ne potrebujete elementov iz seznama, lahko podčrtaj (`_`) uporabite kot spremenljivko:

```python
zeroes = [0 for _ in even_numbers] # Ima enako dolžino kot seznam even_numbers
```

Seznamske izpeljanke podpirajo več zank `for`:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Skupaj 100 parov: (0,0) (0,1) ... (9,8), (9,9)
```

Kasnejše zanke `for` lahko uporabijo rezultate prejšnjih zank `for`:

```python
increasing_pairs = [(x, y)                      # Vsebuje samo pare, kjer je x < y
                    for x in range(10)          # range(lo, hi) je enako
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Seznamske izpeljanke bomo v prihodnosti pogosto uporabljali.

### Generatorji in iteratorji Generators and Iterators

Pri seznamih je problem, da lahko zlahka postanejo zelo veliki. Na primer, `range(1000000)` bo ustvaril seznam z milijonom elementov. Če podatke obdelujete enega za drugim, lahko to traja predolgo (ali pa vam zmanjka pomnilnika). V resnici pa boste morda potrebovali le prvih nekaj podatkov, zato so ostale operacije odvečne.

Generatorji pa vam omogočajo, da iterirate samo po tistih podatkih, ki jih resnično potrebujete. Generator lahko ustvarite s funkcijo in izrazom `yield`:

```python
def lazy_range(n):
    """lenobna različica range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Opomba prevajalca:
Generator je tudi posebna vrsta iteratorja, pri čemer je `yield` ključen za njegovo delovanje. Deluje kot točka zaustavitve in nadaljevanja izvajanja generatorja; izrazu `yield` lahko dodelite vrednost ali pa vrnete vrednost izraza `yield`. Vsaka funkcija, ki vsebuje stavek `yield`, se imenuje generator. Ko generator preneha z delovanjem, shrani svoje trenutno stanje izvajanja in ga ob naslednjem klicu obnovi, da pridobi naslednjo iteracijsko vrednost. Iteracija po seznamu porabi veliko pomnilniškega prostora, medtem ko generator porabi približno le enega, kar prihrani pomnilnik.

Naslednja zanka bo porabila vrednosti iz `yield` eno za drugo, dokler ne bodo vse porabljene:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Pravzaprav ima Python vgrajeno funkcijo, ki doseže enak učinek kot `_lazy_range_`, imenovano `xrange`; v Pythonu 3 pa `range` deluje lenobno.) To pomeni, da lahko ustvarite neskončno zaporedje:

```python
def natural_numbers():
    """Vrne 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Vendar pa ni priporočljivo uporabljati takšnih izjav brez logike za izhod iz zanke.

**NAMIG**
> Ena pomanjkljivost iteriranja z generatorji je, da lahko elemente iterirate le enkrat od začetka do konca. Če želite večkratno iteracijo, morate vsakič ustvariti nov generator ali uporabiti seznam.

Drugi način za ustvarjanje generatorja: z izrazom za izpeljanko, zaprto v oklepajih:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Vemo, da metoda `items()` v slovarjih vrne seznam vseh parov ključ-vrednost v slovarju. Vendar pa v večini primerov uporabljamo generatorsko metodo `iteritems()` za iteracijo, ki vsakič ustvari in vrne le en par ključ-vrednost.

### Naključnost Randomness
Pri učenju podatkovne znanosti bomo pogosto potrebovali generiranje naključnih števil, zato je dovolj, da uvozimo modul `random` in ga uporabimo:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generira naključna števila
# 0.7579544029403025,         # Naključna števila so normalizirana in se gibljejo med 0 in 1
# 0.420571580830845,          # Ta funkcija je najpogosteje uporabljena za generiranje naključnih števil
# 0.25891675029296335]
```

Če želite doseči ponovljive rezultate, lahko modul `random` generira psevdonaključna (tj. deterministična) števila na podlagi notranjega stanja, nastavljenega z `random.seed`:

```python
random.seed(10)           # nastavi seme na 10
print random.random()     # 0.57140259469
random.seed(10)           # ponastavi seme na 10
print random.random()     # 0.57140259469 spet
```

Včasih uporabimo tudi funkcijo `random.randrange` za generiranje naključnega števila znotraj določenega obsega:

```python
random.randrange(10)      # Naključno izbere število iz range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Naključno izbere število iz range(3, 6) = [3, 4, 5]
```

Obstajajo tudi druge priročne metode, na primer `random.shuffle`, ki premeša vrstni red elementov v seznamu in ustvari naključno premešan seznam:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Vaš rezultat bi moral biti drugačen)
```

Če želite naključno izbrati en element iz seznama, lahko uporabite metodo `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Dobil sem "Bob"
```

Če želite ustvariti naključno zaporedje, ne da bi premešali izvirni seznam, lahko uporabite metodo `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Z večkratnim klicem lahko izberete več naključnih vzorcev (ponavljanje je dovoljeno):

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regularni izrazi Regular Expressions

Regularni izrazi se uporabljajo za iskanje po besedilu. So sicer nekoliko kompleksni, a izjemno uporabni, zato obstaja veliko knjig, ki so jim posvečene. Podrobneje jih bomo razložili, ko jih bomo srečali v praksi. Spodaj so nekateri primeri uporabe regularnih izrazov v Pythonu:

```python
import re
print all([                                 # Vsi spodnji izrazi vrnejo True, ker:
    not re.match("a", "cat"),               # * 'cat' se ne začne z 'a'
    re.search("a", "cat"),                  # * 'cat' vsebuje črko 'a'
    not re.search("c", "dog"),              # * 'dog' ne vsebuje črke 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Besedo razdeli na tri dele ['c','r','s'] glede na 'a' ali 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Številke nadomesti s pomišljajem
    ])                                      # Izhod: True
```

### Objektno usmerjeno programiranje Object-Oriented Programming

Kot mnogi drugi jeziki, tudi Python omogoča definiranje razredov, ki inkapsulirajo podatke, in funkcij, ki z njimi manipulirajo. Včasih jih uporabimo, da je naša koda jasnejša in bolj jedrnata. Najlažje jih je razložiti z dobro komentiranim primerom. Predpostavimo, da v Pythonu ni vgrajenih zbirk (setov); morda bi želeli ustvariti lasten razred `Set`. Katere funkcije bi moral imeti ta razred? Na primer, glede na `Set` bi morali biti sposobni dodajati elemente, jih odstranjevati in preveriti, ali vsebuje določeno vrednost. Zato bomo vse te funkcionalnosti ustvarili kot članske funkcije razreda. Te članske funkcije bomo lahko nato dostopali z piko za objektom `Set`:

```python
# Po konvenciji razredom damo imena v _PascalCase_ zapisu
class Set:
    # To so članske funkcije
    # Vsaka članska funkcija ima kot prvi parameter "self" (še ena konvencija)
    # "self" se nanaša na določen objekt Set, ki se trenutno uporablja

    def __init__(self, values=None):
        """To je funkcija za ustvarjanje
        Kadar koli ustvarite nov Set, se ta funkcija pokliče
        Lahko se pokliče takole:
        s1 = Set() # prazen set
        s2 = Set([1,2,2,3]) # inicializira set z določenimi vrednostmi"""
        self.dict = {} # Vsak primerek Set-a ima svoj atribut `dict`
        # Ta atribut uporabljamo za sledenje vsakemu članu
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """To je nizovna reprezentacija objekta Set
        Lahko jo prikažete tako, da vnesete ime objekta v konzolo Pythona ali uporabite metodo str()"""
        return "Set: " + str(self.dict.keys())

    # Članstvo bomo označili tako, da bomo vrednosti shranili kot ključe v self.dict in jim dodelili vrednost True.
    def add(self, value):
        self.dict[value] = True

    # Če je parameter ključ v slovarju, je ustrezna vrednost v Set-u.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Nato lahko `Set` uporabimo takole:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionalna orodja Functional Tools

#### Delne funkcije partial

Pri delu s funkcijami včasih želimo uporabiti le del funkcionalnosti določene funkcije za ustvarjanje nove. Kot preprost primer vzemimo funkcijo z dvema spremenljivkama:

```python
def exp(base, power):
    return base ** power
```

Želimo jo uporabiti za ustvarjanje funkcije, ki sprejme eno spremenljivko in vrne rezultat potence `exp(2, power)` z osnovo 2.

Seveda lahko definiramo novo funkcijo z `def`, čeprav to ni najbolj elegantna rešitev:

```python
def two_to_the(power):
  return exp(2, power)
```

Pametnejši pristop je uporaba metode `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Trenutna funkcija ima le eno spremenljivko
print two_to_the(3)               # 8
```

Če so določena imena, lahko metodo `partial` uporabimo tudi za zapolnitev drugih parametrov:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Če poskušate parametre kaotično uporabljati sredi funkcije, bo program hitro postal nepregleden, zato se temu poskušajte izogniti.

#### Preslikava map

Občasno uporabimo tudi funkcije `map`, `reduce` in `filter` kot alternativo seznamskim izpeljankam:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Enako kot zgoraj
list_doubler = partial(map, double)     # Funkcija podvoji seznam
twice_xs = list_doubler(xs)             # Tudi [2, 4, 6, 8]
```

Metoda `map` se lahko uporablja tudi za preslikovanje funkcij z več argumenti na več seznamov:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtriranje filter

Podobno filter implementira funkcionalnost `if` v seznamskih izpeljankah:

```python
def is_even(x):
    """Vrne True, če je x sodo število, False, če je liho"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Enako kot zgoraj
list_evener = partial(filter, is_even)    # Ta funkcija izvaja filtriranje
x_evens = list_evener(xs)                 # Tudi [2, 4]
```

#### Zmanjševanje reduce

Metoda `reduce` nenehno združuje prvi in drugi element v seznamu, nato rezultat združi s tretjim elementom in ta postopek ponavlja, dokler ne dobi enega samega rezultata:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Ta funkcija zmanjša seznam
x_product = list_product(xs)              # Tudi 24
```

### Enumerate enumerate

Občasno se zgodi, da je pri iteraciji po seznamu treba hkrati uporabiti tako element kot njegov indeks:

```python
# Manj 'Pythonic' (manj jedrnato in elegantno)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Prav tako manj 'Pythonic' (manj jedrnato in elegantno)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Najelegantnejši način je uporaba metode `enumerate`, ki ustvari terke `(indeks, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Podobno, če želite uporabiti samo indeks:

```python
for i in range(len(documents)): do_something(i)   # Ni jedrnato
for i, _ in enumerate(documents): do_something(i) # Jedrnato
```

To metodo bomo v prihodnosti pogosto uporabljali.

### Stiskanje in razpakiranje argumentov zip and Argument Unpacking

#### Stiskanje zip

Pogosto stisnemo dva ali več seznamov. Stiskanje dejansko pretvori več seznamov v en sam seznam ustreznih terk:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Dobimo [('a', 1), ('b', 2), ('c', 3)]
```

#### Razpakiranje argumentov Argument Unpacking

Če imajo seznami različne dolžine, se postopek stiskanja ustavi na koncu najkrajšega seznama. Prav tako lahko uporabite poseben trik za "razstiskanje" (unzip) seznamov:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Zvezdica (`*`) se uporablja za razpakiranje argumentov, pri čemer se elementi `pairs` uporabijo kot posamezni argumenti funkcije `zip`. Naslednji klic ima enak učinek:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Vrne [('a','b','c'), ('1','2','3')]
```

Razpakiranje argumentov se lahko uporablja tudi z drugimi funkcijami:

```python
def add(a, b): return a + b

add(1, 2)           # Vrne 3
add([1, 2])         # Napaka
add(*[1, 2])        # Vrne 3
```

Čeprav morda ni vedno praktično, je to dober trik za poenostavitev kode.

### Poljubno število argumentov args and kwargs

Predpostavimo, da želimo ustvariti višjo funkcijo, ki sprejme staro funkcijo in vrne novo funkcijo, ki je enaka stari funkciji, pomnoženi z 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Primer delovanja:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Vendar pa ta metoda ne deluje dobro, če je število posredovanih argumentov večje od enega:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Napaka TypeError: g() takes exactly 1 argument (2 given)
```

Zato moramo določiti funkcijo, ki lahko sprejme poljubno število argumentov, nato pa uporabiti razpakiranje argumentov za posredovanje več argumentov, kar se zdi malce čarobno:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Izhod:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Ko definiramo funkcijo na ta način, je `args` (okrajšava za arguments) terek, ki vsebuje neimenovane argumente, medtem ko je `kwargs` (okrajšava za keyword arguments) slovar, ki vsebuje imenovane argumente.

Uporabijo se lahko tudi, ko so posredovani argumenti seznam (ali terek) ali polje:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Uporabite ga lahko v kombinaciji z različnimi nenavadnimi metodami, vendar ga bomo mi uporabili le za reševanje problema posredovanja poljubnega števila argumentov višjim funkcijam:

```python
def doubler_correct(f):
    """Deluje učinkovito, ne glede na to, kaj je f"""
    def g(*args, **kwargs):
        """Ne glede na število parametrov, ta funkcija pravilno posreduje parametre funkciji f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Dobrodošli v svetu podatkovne znanosti!

Ding! Čestitke, odprli ste vrata v nov svet! Zdaj se lahko zabavate in raziskujete!

**Sorodno branje:**

[Pogosta osnovna sintaksa Pythona v podatkovni znanosti](https://philoli.com/python-tutorails-basic-level)
