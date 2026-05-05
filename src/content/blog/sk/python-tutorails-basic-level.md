---
title: Bežne používaná základná syntax Pythonu v dátovej vede
date: 2018-11-07 20:53:13
tags: Python
categories: Dátová veda
mathjax: true
---

Posledných pár dní som čítal knihu [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)). Je to výborná, ľahko pochopiteľná úvodná kniha do dátovej vedy. Jedna z kapitol predstavuje základnú syntax Pythonu a pokročilú syntax bežne používanú v dátovej vede. Považoval som to za veľmi dobre a jasne vysvetlené, preto som sa rozhodol to preložiť a zdieľať tu ako poznámky pre budúcnosť.
[Bežne používaná základná syntax Pythonu v dátovej vede (základy)](https://philoli.com/2018/11/07/python-tutorails-basic-level/)
[Bežne používaná pokročilá syntax Pythonu v dátovej vede](https://philoli.com/2018/11/09/python-tutorails-advanced-level/)

Táto kapitola sa zameriava na predstavenie základnej syntaxe a funkcií Pythonu (založených na verzii Python 2.7), ktoré sú mimoriadne užitočné pri spracovaní dát.

<!--more-->

### [](#formátovanie-medzier "Formátovanie medzier")Formátovanie medzier

Mnohé programovacie jazyky používajú na riadenie blokov kódu zátvorky, no Python namiesto nich využíva odsadenie:

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # prvý riadok cyklu "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # prvý riadok cyklu "for j"  
        print i + j  # posledný riadok cyklu "for j"  
    print i          # posledný riadok cyklu "for i"  
print "cyklus dokončený"  
```

Vďaka tomu je kód v Pythone veľmi ľahko čitateľný, ale zároveň to znamená, že si musíte neustále dávať pozor na formátovanie. Medzery v zátvorkách sú ignorované, čo je užitočné pri písaní dlhých výrazov:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Tiež to zlepšuje čitateľnosť kódu:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#viacriadkové-príkazy "Viacriadkové príkazy")Viacriadkové príkazy

Na spojenie dvoch riadkov, ktoré sú inak prerušené, môžete použiť spätnú lomku (tento postup sa však používa zriedkavo):

```python
two_plus_three = 2 + \
                 3  
```

### [](#moduly "Moduly")Moduly

Či už ide o moduly vstavané v Pythone alebo moduly tretej strany, ktoré si stiahnete, všetky sa musia ručne importovať, aby ste ich mohli použiť.

1. Jednoduchý priamy import celého modulu:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Modul `re` importovaný v tomto príklade slúži na regulárne výrazy. Po importovaní modulu môžete priamo volať jeho funkcie pomocou názvu modulu ako predpony (napr. `re.`).

2. Ak sa názov importovaného modulu už používa vo vašom kóde, môžete ho pri importe premenovať:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Ak by ste chceli byť „zlí“, môžete importovať celý modul do aktuálneho menného priestoru, čo môže neúmyselne prepísať vami už definované premenné:

```python
match = 10  
from re import *  # Modul re obsahuje funkciu match  
print match       # Vypíše funkciu match  
```

Pretože ste dobrý človek, verím, že to robiť nebudete.

### [](#aritmetické-operácie "Aritmetické operácie")Aritmetické operácie

Python 2.7 predvolene používa celočíselné delenie, takže $ 5 / 2 = 2 $. No v mnohých prípadoch nechceme celočíselné delenie, preto môžeme importovať tento modul:

```python
from __future__ import division  
```

Po importe dostaneme $5 / 2 = 2.5$.
Celočíselné delenie: $5 // 2 = 2$.

### [](#funkcie "Funkcie")Funkcie

#### [](#definícia-funkcie "Definícia funkcie")Definícia funkcie

Funkcia je pravidlo, ktoré prijíma nula alebo viac vstupov a vracia určitý výstup. V Pythone definujeme funkciu pomocou `def nazov_funkcie(parametre)`:

```python
def double(x):  
    """Tu môžete napísať vysvetlenie funkčnosti funkcie,  
    napríklad, že táto funkcia vynásobí vstup dvoma."""  
    # Tu môžete písať telo funkcie, nezabudnite na odsadenie  
    return x * 2  
```
#### [](#používanie-funkcií "Používanie funkcií")Používanie funkcií

V Pythone sú funkcie objekty prvej triedy, čo znamená, že ich môžeme priradiť premennej alebo ich odovzdať ako argumenty iným funkciám:

```python
def apply_to_one(f):  
    """Zavolá funkciu f a odovzdá jej 1 ako parameter"""  
    return f(1)  
my_double = double          # double odkazuje na funkciu definovanú v predchádzajúcej sekcii  
x = apply_to_one(my_double) # x sa rovná 2  
```
#### [](#anonymné-funkcie "Anonymné funkcie")Anonymné funkcie

Anonymné funkcie môžeme vytvárať aj pomocou príkazu `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # rovná sa 5  
```

Aj keď môžete priradiť `lambda` premenným, väčšina ľudí vám odporučí, aby ste radšej používali `def`:

```python
another_double = lambda x: 2 * x      # Neodporúča sa  
def another_double(x): return 2 * x   # Odporúčaný postup  
```

Doplnenie:

* `lambda` je len výraz, telo funkcie je oveľa jednoduchšie ako pri `def`.
* Telo `lambda` je výraz, nie blok kódu. Do výrazu `lambda` je možné zapuzdriť len obmedzenú logiku.

#### [](#odovzdávanie-parametrov-funkciám "Odovzdávanie parametrov funkciám")Odovzdávanie parametrov funkciám

Parametre funkcie môžu mať definované predvolené hodnoty. Ak sa funkcia zavolá bez argumentov pre tieto parametre, použijú sa predvolené hodnoty; ak sa argumenty zadajú, prenesú sa zadané hodnoty:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Vypíše "hello"  
my_print()            # Vypíše "my default message"  
```

Niekedy je tiež veľmi užitočné špecifikovať argumenty priamo pomocou ich názvov:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Vráti 5  
subtract(0, 5)    # Vráti -5  
subtract(b=5)     # Rovnaké ako predchádzajúce, vráti -5  
```
### [](#reťazce "Reťazce")Reťazce

Reťazce môžete vytvárať pomocou jednoduchých alebo dvojitých úvodzoviek (úvodzovky musia byť vždy spárované):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Spätná lomka sa používa na označenie riadiacich znakov, napr.:

```python
tab_string = "\t"      # predstavuje tabulátor  
len(tab_string)        # rovná sa 1  
```

Ak chcete použiť samotnú spätnú lomku (napr. pre cesty k súborom vo Windowse alebo regulárne výrazy), môžete ju definovať pomocou raw stringu `r""`:

```python
not_tab_string = r"\t" # predstavuje znaky '\' a 't'  
len(not_tab_string)    # rovná sa 2  
```

Viacriadkové reťazce vytvoríte pomocou troch dvojitých úvodzoviek:

```python
multi_line_string = """Toto je prvý riadok  
Toto je druhý riadok  
Toto je tretí riadok"""  
```

### [](#spracovanie-výnimiek "Spracovanie výnimiek")Spracovanie výnimiek

Keď program narazí na chybu, Python vyvolá `výnimku`. Ak ju nespracujeme, program sa ukončí. Výnimky môžeme zachytiť pomocou príkazov `try` a `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Nemožno deliť nulou"  
```

Zatiaľ čo v iných jazykoch sú výnimky často vnímané ako neželané javy, v Pythone môže rozsiahlejšie spracovanie výnimiek viesť k čistejšiemu a stručnejšiemu kódu.

### [](#zoznamy "Zoznamy")Zoznamy

#### [](#vytvorenie-zoznamu "Vytvorenie zoznamu")Vytvorenie zoznamu

Zoznamy sú jednoduché usporiadané kolekcie a sú jednou z najzákladnejších dátových štruktúr v Pythone (podobné poliam v iných jazykoch, ale s niektorými dodatočnými vlastnosťami). Vytvorenie zoznamu:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # rovná sa 3  
list_sum = sum(integer_list)      # rovná sa 6  
```
#### [](#prístup-k-hodnotám-v-zozname "Prístup k hodnotám v zozname")Prístup k hodnotám v zozname

Hodnoty v zozname môžete indexovať pomocou hranatých zátvoriek:

```python
x = range(10)       # Získa zoznam x = [0, 1, ..., 9]  
zero = x[0]         # rovná sa 0, indexovanie zoznamu začína od 0  
one = x[1]          # rovná sa 1  
nine = x[-1]        # rovná sa 9, posledný prvok v zozname  
eight = x[-2]       # rovná sa 8, predposledný prvok v zozname  
x[0] = -1           # Aktuálny zoznam x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#krájanie-zoznamu "Krájanie zoznamu")Krájanie zoznamu

Zoznamy môžete krájať (slice) pomocou hranatých zátvoriek:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Pomocou operátora `in` môžete skontrolovať, či sa daný prvok nachádza v zozname:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Tento spôsob vyhľadávania prvkov je veľmi neefektívny. Používajte ho len vtedy, ak je zoznam malý alebo ak vám nezáleží na čase vyhľadávania.

#### [](#spájanie-zoznamov "Spájanie zoznamov")Spájanie zoznamov

V Pythone je spájanie dvoch zoznamov veľmi jednoduché:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Aktuálne x = [1,2,3,4,5,6]  
```

Ak nechcete modifikovať pôvodný zoznam `x`, môžete použiť operátor `+` na vytvorenie nového zoznamu:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Aktuálne y = [1, 2, 3, 4, 5, 6]; x zostáva nezmenené  
```

Často sa používa tento spôsob na pridanie jedného prvku do zoznamu naraz:

```python
x = [1, 2, 3]  
x.append(0)           # Aktuálne x = [1, 2, 3, 0]  
y = x[-1]             # rovná sa 0  
z = len(x)            # rovná sa 4  
```

#### [](#rozbaľovanie-zoznamov "Rozbaľovanie zoznamov")Rozbaľovanie zoznamov

Ak viete, koľko prvkov má zoznam, je veľmi ľahké ho rozbaliť:

```python
x, y = [1, 2]         # Aktuálne x = 1, y = 2  
```

Ak sa počet prvkov na oboch stranách rovnice nezhoduje, dostanete `ValueError`. Preto často používame podčiarkovník na uchovanie zvyšku zoznamu:

```python
_, y = [1, 2]         # Aktuálne y == 2, prvý prvok sa ignoruje  
```

### [](#n-tice-tuples "N-tice (Tuples)")N-tice (Tuples)

Zoznamy a n-tice sú si veľmi podobné. Jediný rozdiel je v tom, že prvky v n-ticiach nemožno modifikovať.

#### [](#vytvorenie-n-tice "Vytvorenie n-tice")Vytvorenie n-tice

N-tice možno vytvárať pomocou okrúhlych zátvoriek alebo bez akýchkoľvek zátvoriek:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Aktuálne my_list je [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "N-ticu nemožno modifikovať"  
```

N-tice sú veľmi užitočné na vrátenie viacerých hodnôt z funkcie:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # rovná sa (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

N-tice (a zoznamy) podporujú priradenie viacerých prvkov naraz:

```python
x, y = 1, 2       # Aktuálne x = 1, y = 2  
x, y = y, x       # Výmena hodnôt dvoch premenných v Pythone; aktuálne x = 2, y = 1  
```

### [](#slovníky-dictionaries "Slovníky (Dictionaries)")Slovníky (Dictionaries)

#### [](#vytvorenie-slovníka "Vytvorenie slovníka")Vytvorenie slovníka

Ďalšou základnou dátovou štruktúrou v Pythone je slovník, ktorý vám umožňuje rýchlo zísť priradenú hodnotu (value) pomocou kľúča (key):

```python
empty_dict = {}                       # Veľmi "pythonovská" definícia prázdneho slovníka  
empty_dict2 = dict()                  # Menej "pythonovská" definícia prázdneho slovníka  
grades = { "Joel" : 80, "Tim" : 95 }  # Uloženie slovníka  
```

#### [](#vyhľadávanie-prvkov-v-slovníku "Vyhľadávanie prvkov v slovníku")Vyhľadávanie prvkov v slovníku

Priradenú hodnotu môžete nájsť pomocou hranatých zátvoriek a kľúča:

```python
joels_grade = grades["Joel"]          # rovná sa 80  
```

Ak hľadaný kľúč v slovníku neexistuje, vráti sa `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "žiadna známka pre Kate!"  
```

Pomocou operátora `in` môžete skontrolovať, či sa kľúč nachádza v slovníku:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Slovníky majú metódu, ktorá dokáže vrátiť predvolenú hodnotu, ak hľadaný kľúč v slovníku neexistuje (namiesto vyvolania výnimky):

```python
joels_grade = grades.get("Joel", 0)   # rovná sa 80  
kates_grade = grades.get("Kate", 0)   # rovná sa 0  
no_ones_grade = grades.get("No One")  # Vráti predvolenú hodnotu None  
```

#### [](#úprava-slovníka "Úprava slovníka")Úprava slovníka

Kľúč-hodnotové páry v slovníku môžete vytvárať a upravovať pomocou hranatých zátvoriek:

```python
grades["Tim"] = 99                    # Nahradí starú hodnotu  
grades["Kate"] = 100                  # Pridá kľúč-hodnotový pár  
num_students = len(grades)            # rovná sa 3  
```

Často budeme používať slovníky na vyjadrenie štruktúry dát takto:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Okrem vyhľadávania konkrétnych kľúčov môžeme pracovať so všetkými kľúčmi nasledovne:

```python
tweet_keys = tweet.keys()             # Získa zoznam kľúčov  
tweet_values = tweet.values()         # Získa zoznam hodnôt  
tweet_items = tweet.items()           # Získa n-tice (kľúč, hodnota)  
"user" in tweet_keys                  # Vráti True, používa menej efektívne vyhľadávanie 'in' v zozname  
"user" in tweet                       # Viac "pythonovský" spôsob, používa efektívnejšie vyhľadávanie 'in' v slovníku  
"joelgrus" in tweet_values            # True  
```

Kľúče v slovníku sú jedinečné a zoznamy nemožno použiť ako kľúče slovníka. Ak potrebujete viaczložkový kľúč, môžete použiť n-ticu alebo kľúč previesť na reťazec.

#### [](#predvolené-slovníky-defaultdicts "Predvolené slovníky (Defaultdicts)")Predvolené slovníky (Defaultdicts)

Ak sa pokúšate spočítať frekvenciu každého slova v dokumente, zrejmým prístupom je vytvoriť slovník, kde slová slúžia ako kľúče a ich frekvencie ako priradené hodnoty. Potom prejdete dokument a pre každé už existujúce slovo zvýšite jeho počet o 1; pre neexistujúce slovo pridáte nový kľúč-hodnotový pár do slovníka:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Samozrejme, chýbajúci kľúč môžete vopred spracovať aj takýmto spôsobom (tzv. „ask for forgiveness, not permission“):

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Tretia metóda je použitie `get`, ktorá výborne zvláda chýbajúce kľúče:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

`defaultdict` funguje rovnako ako bežný slovník, s jediným rozdielom: keď sa pokúsite vyhľadať neexistujúci kľúč, `defaultdict` automaticky vytvorí kľúč-hodnotový pár pomocou funkcie, ktorú ste mu poskytli. Na použitie `defaultdict` musíte importovať knižnicu `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() generuje 0  
for word in document:  
    word_counts[word] += 1  
```

`defaultdict` je tiež veľmi užitočný s funkciami ako `list`, `dict` alebo dokonca s vlastnými funkciami:

```python
dd_list = defaultdict(list)           # list() generuje prázdny zoznam  
dd_list[2].append(1)                  # Aktuálne dd_list je {2: [1]}  
dd_dict = defaultdict(dict)           # dict() generuje prázdny slovník  
dd_dict["Joel"]["City"] = "Seattle"   # Aktuálne dd_dict obsahuje { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Vytvorí slovník, kde hodnoty kľúčov sú zoznamy  
dd_pair[2][1] = 1                     # Aktuálne dd_pair obsahuje {2: [0,1]}  
```

Táto metóda je veľmi užitočná, pretože v budúcnosti už nebudeme musieť kontrolovať existenciu kľúča pri získavaní hodnôt zo slovníka.

### [](#počítadlo-counter "Počítadlo (Counter)")Počítadlo (Counter)

Počítadlo (Counter) dokáže priamo premeniť skupinu hodnôt na objekt podobný slovníku, kde kľúčom je prvok zo skupiny a priradenou hodnotou je počet výskytov tohto prvku. To sa často používa pri vytváraní histogramov:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c je (približne) { 0 : 2, 1 : 1, 2 : 1 }  
```

Týmto spôsobom získame veľmi pohodlnú metódu na počítanie frekvencie slov:

```python
word_counts = Counter(document)  
```

Počítadlo má aj veľmi užitočnú metódu `most_common`, ktorá dokáže priamo získať niekoľko najčastejších slov a ich frekvencie:

```python
# Vypíše 10 najčastejších slov a ich počet  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#množiny-sets "Množiny (Sets)")Množiny (Sets)

Ďalšou dátovou štruktúrou v Pythone sú množiny, ktoré predstavujú kolekciu rôznych prvkov.
Množinu môžete vytvoriť a pridávať do nej prvky nasledovne:

```python
s = set()  
s.add(1)          # s je { 1 }  
s.add(2)          # s je { 1, 2 }  
s.add(2)          # s je { 1, 2 }  
x = len(s)        # rovná sa 2  
y = 2 in s        # rovná sa True  
z = 3 in s        # rovná sa False  
```

Dva hlavné dôvody pre používanie množín:

Po prvé, operácia `in` v množinách je veľmi efektívna. Keď je počet prvkov v dátovej sade veľmi veľký, vyhľadávanie prvkov vo forme množiny je zjavne vhodnejšie ako v zozname:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Neúspešné, je potrebné skontrolovať každý prvok  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Vyhľadávanie úspešné a veľmi rýchle  
```

Po druhé, je veľmi pohodlné používať množiny na získanie jedinečných prvkov zo sady dát:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

V praxi sa však množiny nepoužívajú tak často ako slovníky a zoznamy.

### [](#podmienené-príkazy "Podmienené príkazy")Podmienené príkazy

Vo väčšine programovacích jazykov môžete použiť `if` na vyjadrenie podmienených vetiev takto:

```python
if 1 > 2:  
    message = "keby len 1 bolo väčšie ako dva…"  
elif 1 > 3:  
    message = "elif znamená 'else if'"  
else:  
    message = "keď všetko ostatné zlyhá, použite else (ak chcete)"  
```

Podmienený príkaz môžete napísať aj na jeden riadok, ale to sa používa zriedkavo:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#cykly "Cykly")Cykly

#### [](#cyklus-while "Cyklus while")Cyklus `while`

Cyklus `while` v Pythone:

```python
x = 0  
while x < 10:  
    print x, "je menšie ako 10"  
    x += 1  
```

#### [](#cyklus-for "Cyklus for")Cyklus `for`

Častejšie sa používa cyklus `for-in`:

```python
for x in range(10):  
    print x, "je menšie ako 10"  
```

Pre komplexnejšie logické výrazy možno použiť príkazy `continue` a `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Priamo prejde na ďalšiu iteráciu cyklu  
    if x == 5:  
        break             # Úplne ukončí cyklus  
    print x  
```

Výsledkom bude výstup 0, 1, 2 a 4.

### [](#pravdivostné-hodnoty-truthiness "Pravdivostné hodnoty (Truthiness)")Pravdivostné hodnoty (Truthiness)

Booleovské premenné v Pythone sa používajú podobne ako v iných jazykoch, jediný rozdiel je v tom, že ich prvé písmeno musí byť veľké:

```python
one_is_less_than_two = 1 < 2      # je True  
true_equals_false = True == False # je False  
```

Python používa `None` na označenie neexistujúcej hodnoty, podobne ako `null` v iných jazykoch:

```python
x = None  
print x == None        # Vypíše True, nie je to najelegantnejšie  
print x is None        # Vypíše True, je to elegantnejšie  
```

Python vám umožňuje používať iné hodnoty namiesto booleovských hodnôt. Nasledujúce sú ekvivalentné `False`:

*   False
*   None
*   [] (prázdny zoznam)
*   {} (prázdny slovník)
*   “”
*   set()
*   0
*   0.0

Podobne existuje mnoho ekvivalentov pre `True`, čo vám veľmi uľahčuje kontrolu prázdnych zoznamov, reťazcov, slovníkov a podobne.

Samozrejme, ak nepredvídate výsledok, môže sa stať, že sa počas používania vyskytnú chyby:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Jednoduchší prístup, ktorý má rovnaký efekt ako ten vyššie:

```python
first_char = s and s[0]  
```

Ak je prvá hodnota pravdivá, vráti sa druhá hodnota, inak sa vráti prvá hodnota.

Podobne, ak `x` môže byť číslo alebo `None`, takto môžete získať `x`, ktoré je zaručene číslom:

```python
safe_x = x or 0  
```

V Pythone existuje aj funkcia `all`, ktorá vráti `True`, ak sú všetky prvky pravdivé. Funkcia `any` vráti `True`, ak je aspoň jeden prvok pravdivý. Napríklad pre zoznam, kde každý prvok je „pravdivý“, funkcia `all` vráti `True`, inak vráti `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} je ekvivalentné s „False“  
any([True, 1, {}])          # True  
all([])                     # True, neexistuje žiadny prvok ekvivalentný s „False“  
any([])                     # False, neexistuje žiadny prvok ekvivalentný s „True“  
```

**Ďalšie čítanie:**
[Bežne používaná pokročilá syntax Pythonu v dátovej vede](https://philoli.com/python-tutorails-advanced-level/)
