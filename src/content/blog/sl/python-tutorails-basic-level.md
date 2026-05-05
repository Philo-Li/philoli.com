---
title: Pogosta sintaksa Pythona v podatkovni znanosti (osnove)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

Zadnje dni berem knjigo [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF povezava](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), ki je res dobra in razumljiva uvodna literatura v podatkovno znanost. Eno poglavje v njej predstavlja osnovno sintakso Pythona in naprednejše sintaktične značilnosti, ki se pogosto uporabljajo v podatkovni znanosti. Ker se mi je zdelo, da je razlaga odlična, jedrnata in jasna, sem jo prevedel in objavil tukaj kot osebni opomnik.  
[Pogosta sintaksa Pythona v podatkovni znanosti (osnove)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Pogosta sintaksa Pythona v podatkovni znanosti (napredno)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

To poglavje se osredotoča na predstavitev osnovne sintakse in funkcionalnosti Pythona, ki so izjemno uporabne pri obdelavi podatkov (na podlagi Pythona 2.7).

<!--more-->

### Zamiki

Medtem ko mnogi programski jeziki uporabljajo zavitke oklepaje za določanje blokov kode, Python to rešuje z zamiki:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Prva vrstica zanke "for i".  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Prva vrstica zanke "for j".  
        print i + j  # Zadnja vrstica zanke "for j".  
    print i          # Zadnja vrstica zanke "for i".  
print "done looping"  
```

To sicer naredi kodo v Pythonu izjemno berljivo, a hkrati zahteva, da ste vedno pozorni na pravilno oblikovanje. Presledki znotraj oklepajev se v Pythonu ignorirajo, kar je priročno pri pisanju daljših izrazov:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

In pomaga pri berljivosti kode:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Večvrstične izjave

Dve vrstici kode lahko povežete z znakom za povratno poševnico (\\), čeprav se ta praksa redko uporablja:  

```python
two_plus_three = 2 + \
                 3  
```

### Moduli

Ne glede na to, ali gre za module, ki so vgrajeni v Python, ali za module tretjih oseb, ki ste jih sami prenesli, jih je treba ročno uvoziti, preden jih lahko uporabite.

1. Preprost uvoz celotnega modula:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Uvoženi modul `re` je namenjen delu z regularnimi izrazi. Ko je modul uvožen, lahko njegove funkcije kličete tako, da pred ime funkcije dodate ime modula kot predpono (npr. `re.`).

2. Če se ime modula, ki ga uvažate, že uporablja v vaši kodi, ga lahko pri uvozu preimenujete:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Če ste 'zlobni', lahko celoten modul uvozite neposredno v trenutni imenski prostor, kar lahko nehote prepiše že definirane spremenljivke:

```python
match = 10  
from re import *  # Modul re vsebuje funkcijo match.  
print match       # Izpiše funkcijo match.  
```

Ker pa ste dobri ljudje, verjamem, da tega ne boste storili.

### Aritmetične operacije

Python 2.7 privzeto uporablja celoštevilsko deljenje, kar pomeni, da je $ 5 / 2 = 2 $. Ker pa si pogosto ne želimo celoštevilskega deljenja, lahko uvozimo ta modul:

```python
from __future__ import division  
```

Po uvozu bo rezultat $5 / 2 = 2.5$.  
Za celoštevilsko deljenje pa uporabite: $5 // 2 = 2$.

### Funkcije

#### Definicija funkcije


Funkcija je pravilo, ki lahko sprejme nič ali več vhodnih podatkov in vrne določen izhod. V Pythonu funkcijo definiramo z uporabo `def ime_funkcije(parametri)`:

```python
def double(x):  
    """Tukaj lahko napišete razlago funkcionalnosti funkcije,  
    na primer, da funkcija vhod pomnoži z 2."""  
    # Tukaj lahko pišete telo funkcije, ne pozabite na zamik.  
    return x * 2  
```
#### Uporaba funkcij


V Pythonu so funkcije prvovrstni objekti, kar pomeni, da jih lahko dodelimo spremenljivkam in jih posredujemo kot argumente drugim funkcijam:

```python
def apply_to_one(f):  
    """Pokliče funkcijo f in ji kot argument posreduje 1."""  
    return f(1)  
my_double = double          # double kaže na funkcijo, definirano v prejšnjem razdelku.  
x = apply_to_one(my_double) # x je enak 2.  
```
#### Anonimne funkcije


Anonimne funkcije lahko ustvarite tudi z uporabo `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Enako 5.  
```

Lambda funkcije lahko dodelimo drugim spremenljivkam, vendar večina priporoča, da raje uporabite `def`:

```python
another_double = lambda x: 2 * x      # Ni priporočljivo.  
def another_double(x): return 2 * x   # Priporočljivo.  
```

Dodatno:

* `lambda` je zgolj izraz, telo funkcije je veliko enostavnejše kot pri `def`.
* Telo `lambda` funkcije je izraz, ne pa blok kode. V izraz `lambda` je mogoče vključiti le omejeno logiko.

#### Posredovanje parametrov funkcij

Parametri funkcij lahko imajo privzete vrednosti. Če pri klicu funkcije ne navedete argumenta za parameter z privzeto vrednostjo, se bo uporabila privzeta vrednost; v nasprotnem primeru se bo posredovala določena vrednost:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Izpiše "hello".  
my_print()            # Izpiše "my default message".  
```

Včasih je zelo priročno argumente določiti neposredno po imenu parametra:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Vrne 5.  
subtract(0, 5)    # Vrne -5.  
subtract(b=5)     # Enako kot prejšnji primer, vrne -5.  
```
### Nizi

Nize lahko ustvarite z enojnimi ali dvojnimi narekovaji (pomembno je, da se ujemajo):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Za predstavitev posebnih znakov (escape characters) uporabite povratno poševnico, na primer:

```python
tab_string = "\t"      # Predstavlja znak za tabulator.  
len(tab_string)        # Enako 1.  
```

Če pa želite uporabiti povratno poševnico kot dobeseden znak (na primer v poteh Windows ali regularnih izrazih), lahko to storite z uporabo surovih nizov `r""`:

```python
not_tab_string = r"\t" # Predstavlja znaka '\' in 't'.  
len(not_tab_string)    # Enako 2.  
```

Z uporabo treh dvojnih narekovajev lahko ustvarite večvrstične nize:

```python
multi_line_string = """To je prva vrstica.  
To je druga vrstica.  
To je tretja vrstica."""  
```

### Obravnava izjem

Ko pride do napake v programu, Python sproži `izjemo`. Če je ne obravnavamo, se bo izvajanje programa prekinilo. Izjeme lahko ujamete z uporabo stavkov `try` in `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Ne morete deliti z 0."  
```

Čeprav se v nekaterih drugih jezikih izjeme včasih obravnavajo kot nekaj nezaželenega, pa v Pythonu obsežnejša obravnava izjem pogosto pripomore k bolj jedrnati in čisti kodi.

### Seznami

#### Ustvarjanje seznamov

Seznami so preproste, urejene zbirke in ena najosnovnejših podatkovnih struktur v Pythonu (podobno poljem v drugih jezikih, vendar z nekaj dodatnimi značilnostmi). Ustvarjanje seznama:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Enako 3.  
list_sum = sum(integer_list)      # Enako 6.  
```
#### Dostop do vrednosti v seznamu


Do vrednosti v seznamu lahko dostopate z uporabo oglatih oklepajev in indeksov:

```python
x = range(10)       # Ustvari seznam x = [0, 1, ..., 9].  
zero = x[0]         # Enako 0, indeksi seznama se začnejo pri 0.  
one = x[1]          # Enako 1.  
nine = x[-1]        # Enako 9, zadnji element v seznamu.  
eight = x[-2]       # Enako 8, predzadnji element v seznamu.  
x[0] = -1           # Trenutni seznam x = [-1, 1, 2, 3, ..., 9].  
```

#### Rezanje seznamov


Sezname lahko režete z oglatimi oklepaji:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Z operatorjem `in` lahko preverite, ali je določen element prisoten v seznamu:

```python
1 in [1, 2, 3]        # True.  
0 in [1, 2, 3]        # False.  
```

Ta način iskanja elementov je zelo neučinkovit, zato ga uporabite le, če je seznam majhen ali če vas čas iskanja ne skrbi.

#### Spajanje seznamov

V Pythonu je spajanje dveh seznamov zelo enostavno:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Trenutni x = [1,2,3,4,5,6].  
```

Če ne želite spremeniti originalnega seznama x, lahko uporabite operator seštevanja (+) za ustvarjanje novega seznama:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Trenutni y = [1, 2, 3, 4, 5, 6]; x se ni spremenil.  
```

Pogosto se na tak način dodaja posamezen element v seznam:

```python
x = [1, 2, 3]  
x.append(0)           # Trenutni x = [1, 2, 3, 0].  
y = x[-1]             # Enako 0.  
z = len(x)            # Enako 4.  
```

#### Razpakiranje seznamov

Če veste, koliko elementov je v seznamu, ga lahko enostavno razpakirate:

```python
x, y = [1, 2]         # Trenutni x = 1, y = 2.  
```

Če se število elementov na obeh straneh enačaja ne ujema, boste dobili `ValueError`. Zato pogosteje uporabljamo podčrtaj (`_`) za shranjevanje preostalih delov seznama:

```python
_, y = [1, 2]         # Trenutni y == 2, prvi element se ignorira.  
```

### Terke

Seznami in terke so si zelo podobni, z edino razliko, da elementov v terkah ni mogoče spreminjati.

#### Ustvarjanje terk

Terke lahko ustvarite z okroglimi oklepaji ali pa brez njih:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Trenutni my_list je [1, 3].  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Terke ni mogoče spreminjati."  
```

Terke so zelo priročne za vračanje več vrednosti iz funkcije:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Enako (5, 6).  
s, p = sum_and_product(5, 10) # s = 15, p = 50.  
```

Terke (in seznami) podpirajo sočasno dodeljevanje več elementov:

```python
x, y = 1, 2       # Trenutni x = 1, y = 2.  
x, y = y, x       # Zamenja vrednosti dveh spremenljivk v Pythonu; trenutni x = 2, y = 1.  
```

### Slovarji

#### Ustvarjanje slovarjev

Druga osnovna podatkovna struktura v Pythonu so slovarji, ki omogočajo hiter dostop do vrednosti prek ključev:

```python
empty_dict = {}                       # Zelo 'Python-ski' način definiranja praznega slovarja.  
empty_dict2 = dict()                  # Manj 'Python-ski' način definiranja praznega slovarja.  
grades = { "Joel" : 80, "Tim" : 95 }  # Shranjevanje v slovar.  
```

#### Iskanje elementov v slovarju

Do vrednosti lahko dostopate z uporabo oglatih oklepajev in ključev:

```python
joels_grade = grades["Joel"]          # Enako 80.  
```

Če ključ, ki ga iščete, ni v slovarju, bo vrnjena napaka `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Ni ocene za Kate!"  
```

Z operatorjem `in` lahko preverite, ali je ključ prisoten v slovarju:

```python
joel_has_grade = "Joel" in grades     # True.  
kate_has_grade = "Kate" in grades     # False.  
```

Slovarji imajo metodo `get()`, ki vrne privzeto vrednost, če iskanega ključa ni v slovarju (namesto da bi sprožila izjemo):

```python
joels_grade = grades.get("Joel", 0)   # Enako 80.  
kates_grade = grades.get("Kate", 0)   # Enako 0.  
no_ones_grade = grades.get("No One")  # Vrne privzeto vrednost None.  
```

#### Spreminjanje slovarjev

Z oglatimi oklepaji lahko ustvarjate in spreminjate pare ključ-vrednost v slovarju:

```python
grades["Tim"] = 99                    # Zamenja staro vrednost.  
grades["Kate"] = 100                  # Doda par ključ-vrednost.  
num_students = len(grades)            # Enako 3.  
```

Slovarje bomo pogosto uporabljali za predstavitev podatkovnih struktur na tak način:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Poleg iskanja določenih ključev lahko z vsemi ključi operiramo na naslednji način:

```python
tweet_keys = tweet.keys()             # Dobimo seznam ključev.  
tweet_values = tweet.values()         # Dobimo seznam vrednosti.  
tweet_items = tweet.items()           # Dobimo terke (ključ, vrednost).  
"user" in tweet_keys                  # Vrne True, uporablja manj učinkovito iskanje 'in' v seznamu.  
"user" in tweet                       # Bolj 'Python-ski' način, uporablja učinkovito iskanje 'in' v slovarju.  
"joelgrus" in tweet_values            # True.  
```

Ključi v slovarjih so edinstveni, seznami pa se ne morejo uporabljati kot ključi slovarja. Če potrebujete večdelni ključ, lahko uporabite terko ali pa ključ na nek način pretvorite v niz.

#### Privzeti slovarji (defaultdict)

Če poskušate prešteti pogostost vsake besede v dokumentu, je očitna metoda ustvariti slovar, kjer so besede ključi in njihove pogostosti vrednosti. Nato prečkate dokument; ko naletite na besedo, ki je že v slovarju, povečate njeno vrednost za 1; ko pa naletite na novo besedo, dodate nov par ključ-vrednost v slovar:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Seveda lahko manjkajoče ključe obravnavate tudi proaktivno z metodo "poskus-in-ujemi" (try-except), kot sledi:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Tretja metoda je uporaba `get`, ki odlično obravnava manjkajoče ključe:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Privzeti slovarji (defaultdict) so kot običajni slovarji, z edino razliko, da ko poskušate dostopati do ključa, ki ne obstaja, privzeti slovar samodejno ustvari par ključ-vrednost z uporabo podane privzete vrednosti. Za uporabo privzetih slovarjev morate uvoziti knjižnico `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() ustvari 0.  
for word in document:  
    word_counts[word] += 1  
```

Privzeti slovarji so uporabni tudi s seznami, običajnimi slovarji in celo s funkcijami po meri:

```python
dd_list = defaultdict(list)           # list() ustvari prazen seznam.  
dd_list[2].append(1)                  # Trenutni dd_list je {2: [1]}.  
dd_dict = defaultdict(dict)           # dict() ustvari prazen slovar.  
dd_dict["Joel"]["City"] = "Seattle"   # Trenutna vsebina dd_dict je { "Joel" : { "City" : "Seattle"}}.  
dd_pair = defaultdict(lambda: [0, 0]) # Ustvari slovar, kjer so vrednosti seznami.  
dd_pair[2][1] = 1                     # Trenutna vsebina dd_pair je {2: [0,1]}.  
```

Ta metoda je zelo uporabna, saj nam v prihodnosti, ko bomo želeli pridobiti določene vrednosti iz slovarja, ne bo več treba preverjati, ali ključ obstaja.

### Števci (Counter)

Števci lahko skupino vrednosti neposredno pretvorijo v objekt, podoben slovarju, kjer je ključ posamezen element iz skupine, vrednost pa je število pojavitev tega elementa. To se pogosto uporablja pri ustvarjanju histogramov:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c je (približno) { 0 : 2, 1 : 1, 2 : 1 }.  
```

Tako imamo na voljo zelo priročen način za štetje pogostosti besed:

```python
word_counts = Counter(document)  
```

Števci imajo tudi zelo uporabno metodo `most_common`, ki neposredno vrne nekaj najpogostejših besed in njihove pogostosti:

```python
# Izpiše 10 najpogostejših besed in njihovo število.  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Množice

Druga podatkovna struktura v Pythonu so množice, ki so zbirka edinstvenih elementov.  
Množico lahko ustvarite in vanjo dodate elemente na naslednji način:

```python
s = set()  
s.add(1)          # s je { 1 }.  
s.add(2)          # s je { 1, 2 }.  
s.add(2)          # s je { 1, 2 }.  
x = len(s)        # Enako 2.  
y = 2 in s        # Enako True.  
z = 3 in s        # Enako False.  
```

Dva glavna razloga za uporabo množic:

Prvič, operacija `in` v množicah je zelo učinkovita. Ko je število elementov v zbirki podatkov zelo veliko, je iskanje elementov v množici očitno bolj primerno kot v seznamu:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Neuspešno, treba je preveriti vsak element.  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Iskanje uspešno in zelo hitro.  
```

Drugič, z množicami je zelo priročno pridobiti edinstvene elemente iz nabora podatkov:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6.  
item_set = set(item_list)             # {1, 2, 3}.  
num_distinct_items = len(item_set)    # 3.  
distinct_item_list = list(item_set)   # [1, 2, 3].  
```

Vendar pa se v praksi množice še vedno ne uporabljajo tako pogosto kot slovarji in seznami.

### Pogojni stavki

V večini programskih jezikov lahko uporabite `if` za pogojne veje, kot sledi:

```python
if 1 > 2:  
    message = "Ko bi bil le 1 večji od 2..."  
elif 1 > 3:  
    message = "elif pomeni 'else if' (sicer če)."  
else:  
    message = "Ko vse drugo odpove, uporabite else (če želite)."  
```

Pogojni stavek lahko napišete tudi v eni vrstici, kot sledi, vendar se to redko uporablja:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Zanke

#### Zanka `while`


Zanka `while` v Pythonu:

```python
x = 0  
while x < 10:  
    print x, "je manj kot 10."  
    x += 1  
```

#### Zanka `for`

Pogosteje se uporablja zanka `for-in`:

```python
for x in range(10):  
    print x, "je manj kot 10."  
```

Za kompleksnejše logične izraze lahko uporabite stavke `continue` in `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Nadaljuje z naslednjo iteracijo zanke.  
    if x == 5:  
        break             # Popolnoma prekine zanko.  
    print x  
```

Rezultat bo izpis 0, 1, 2 in 4.

### Resničnost (Truthiness)

Uporaba Boolovih spremenljivk v Pythonu je podobna kot v drugih jezikih, z edino razliko, da se prva črka vedno piše z veliko začetnico:

```python
one_is_less_than_two = 1 < 2      # Je True.  
true_equals_false = True == False # Je False.  
```

Python uporablja `None` za označevanje neobstoječe vrednosti, podobno kot `null` v drugih jezikih:

```python
x = None  
print x == None        # Izpiše True, ni elegantno.  
print x is None        # Izpiše True, bolj elegantno.  
```

Python omogoča uporabo drugih vrednosti namesto Boolovih, in naslednje so enakovredne `False`:

*   False
*   None
*   [] (prazen seznam)
*   {} (prazen slovar)
*   “” (prazen niz)
*   set() (prazna množica)
*   0
*   0.0

Podobno obstaja tudi veliko vrednosti, enakovrednih `True`. To omogoča zelo priročno preverjanje praznih seznamov, praznih nizov in praznih slovarjev itd.

Seveda, če ne morete predvideti rezultata, lahko med uporabo pride do napak:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Enostavnejši pristop, ki ima enak učinek kot zgornji primer:

```python
first_char = s and s[0]  
```

Če je prva vrednost resnična, se vrne druga vrednost; v nasprotnem primeru se vrne prva vrednost.

Podobno, če je `x` lahko število ali `None`, lahko na ta način zagotovite, da bo `x` vedno število:

```python
safe_x = x or 0  
```

V Pythonu obstaja tudi funkcija `all`, ki vrne `True`, če so vsi elementi resnični (`True`). Funkcija `any` pa vrne `True`, če je vsaj en element resničen (`True`). Na primer, za seznam, kjer je vsak element 'resničen', bo funkcija `all` vrnila `True`, sicer pa `False`:

```python
all([True, 1, { 3 }])       # True.  
all([True, 1, {}])          # False, {} je enakovredno 'False'.  
any([True, 1, {}])          # True.  
all([])                     # True, ker ni elementa, enakovrednega 'False'.  
any([])                     # False, ker ni elementa, enakovrednega 'True'.  
```

**Nadaljnje branje:**  
[Pogosta sintaksa Pythona v podatkovni znanosti (napredno)](https://philoli.com/python-tutorails-advanced-level/)
