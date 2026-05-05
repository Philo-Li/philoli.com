---
title: Python biežāk izmantotā sintakse datu zinātnē (pamati)
date: 2018-11-07 20:53:13
tags: Python
categories: Datu zinātne
mathjax: true
---

Pēdējās dienās esmu lasījis grāmatu [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adrese](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), un tā ir lieliska, viegli saprotama ievadgrāmata datu zinātnē. Viena no tās nodaļām iepazīstina ar Python pamata sintaksi un datu zinātnē bieži izmantoto padziļināto sintaksi. Man šķita, ka izskaidrojums ir ļoti labs, kodolīgs un skaidrs, tāpēc nolēmu to iztulkot un publicēt šeit kā atsauci.
[Python biežāk izmantotā sintakse datu zinātnē (pamati)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Python biežāk izmantotā sintakse datu zinātnē (padziļināti)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Šajā nodaļā galvenā uzmanība pievērsta Python pamata sintakses un funkciju (balstītas uz Python 2.7) iepazīstināšanai, kas ir īpaši noderīgas datu apstrādē.

<!--more-->

### Ievilkuma formatēšana

Daudzas valodas izmanto iekavas, lai kontrolētu koda blokus, taču Python to vietā lieto ievilkumu:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # "for i" cikla pirmā rinda
    for j in [1, 2, 3, 4, 5]:
        print j      # "for j" cikla pirmā rinda
        print i + j  # "for j" cikla pēdējā rinda
    print i          # "for i" cikla pēdējā rinda
print "done looping"
```

Tas padara Python kodu ļoti viegli lasāmu, bet vienlaikus nozīmē, ka vienmēr jāpievērš uzmanība formatējumam. Iekavās atstarpes tiek ignorētas, kas ir noderīgi, rakstot garus izteikumus:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Tas arī padara kodu vieglāk salasāmu, piemēram:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Daudzrindu izteikumi

Var izmantot reversu slīpsvītru (`\`), lai norādītu, ka izteikums turpinās nākamajā rindā (šī prakse tiek izmantota reti):

```python
two_plus_three = 2 + \
                 3
```

### Moduļi

Neatkarīgi no tā, vai tie ir Python iebūvētie moduļi vai paša lejupielādēti trešo pušu moduļi, tie ir jāimportē manuāli, lai tos varētu izmantot.

1. Vienkārši importējiet visu moduli tieši:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Šeit importētais `re` modulis ir paredzēts regulārajām izteiksmēm. Pēc moduļa importēšanas varat tieši izsaukt tā funkcijas, izmantojot moduļa nosaukumu kā prefiksu (piemēram, `re.`).

2. Ja importējamā moduļa nosaukums jau tiek izmantots kodā, moduli var importēt, piešķirot tam citu nosaukumu:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. Ja vēlaties rīkoties neapdomīgi, varat importēt visu moduli pašreizējā nosaukumvietā, kas var nejauši pārrakstīt jau definētus mainīgos:

```python
match = 10
from re import *  # re modulī ir funkcija match
print match       # izvada funkciju match
```

Taču, tā kā esmu pārliecināts, ka esat labs cilvēks, es ticu, ka jūs tā nedarīsiet.

### Aritmētiskās darbības

Python 2.7 pēc noklusējuma izmanto veselo skaitļu dalīšanu, tāpēc $5 / 2 = 2$. Bet bieži vien mēs nevēlamies veselo skaitļu dalīšanu, tāpēc varam importēt šo moduli:

```python
from __future__ import division
```

Pēc importēšanas $5 / 2 = 2.5$. Veselo skaitļu dalīšana: $5 // 2 = 2$.

### Funkcijas

#### Funkcijas definēšana

Funkcija ir noteikums, kas var saņemt 0 vai vairāk ievades un atgriezt noteiktu izvadi. Python valodā funkciju definējam ar `def funkcijas_nosaukums(parametri)`:

```python
def double(x):
    """Šeit varat rakstīt funkcijas aprakstu,
    piemēram, ka tā ievades vērtību reizina ar 2."""
    # Šeit var rakstīt funkcijas ķermeni, neaizmirstiet ievilkumu
    return x * 2
```
#### Funkcijas izmantošana

Python valodā funkcijas ir pilnvērtīgi objekti, kas nozīmē, ka mēs tās varam piešķirt mainīgajiem un nodot kā argumentus citām funkcijām:

```python
def apply_to_one(f):
    """Izsauc funkciju f un kā parametru nodod 1"""
    return f(1)
my_double = double          # double norāda uz iepriekš definēto funkciju
x = apply_to_one(my_double) # x ir vienāds ar 2
```
#### Anonīmas funkcijas

Anonīmas funkcijas var izveidot arī ar `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # ir vienāds ar 5
```

`lambda` funkcijas var piešķirt citiem mainīgajiem, taču vairums ieteiks pēc iespējas izmantot `def`:

```python
another_double = lambda x: 2 * x      # nav ieteicams
def another_double(x): return 2 * x   # ieteicamā prakse
```

Papildinājums:

* `lambda` ir tikai izteiksme, un tās funkcijas ķermenis ir daudz vienkāršāks nekā `def`.
* `lambda` galvenā daļa ir izteiksme, nevis koda bloks. `lambda` izteiksmē var iekapsulēt tikai ierobežotu loģiku.

#### Funkciju parametru nodošana

Funkciju parametriem var definēt noklusējuma vērtības; ja funkcijas izsaukumā parametri netiek norādīti, tiks izmantotas noklusējuma vērtības, bet, ja parametri tiek norādīti, tiks nodotas norādītās vērtības:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # izvada "hello"
my_print()            # izvada "my default message"
```

Dažreiz ir ļoti ērti norādīt parametrus tieši pēc to nosaukumiem:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # atgriež 5
subtract(0, 5)    # atgriež -5
subtract(b=5)     # tas pats, kas iepriekšējais, atgriež -5
```
### Virknes

Virknes var izveidot, izmantojot vienpēdiņas vai divpēdiņas (pēdiņām vienmēr jābūt pāros):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Reversā slīpsvītra tiek izmantota speciālo rakstzīmju norādīšanai, piemēram:

```python
tab_string = "\t"      # apzīmē tabulācijas simbolu
len(tab_string)        # ir vienāds ar 1
```

Ja vēlaties izmantot pašu reverso slīpsvītru (piemēram, Windows direktoriju ceļos vai regulārajās izteiksmēs), to varat definēt, izmantojot neapstrādātas virknes `r""`:

```python
not_tab_string = r"\t" # apzīmē rakstzīmes '\' un 't'
len(not_tab_string)    # ir vienāds ar 2
```

Daudzrindu virknes var izveidot, izmantojot trīs divpēdiņas:

```python
multi_line_string = """Šī ir pirmā rinda
Šī ir otrā rinda
Šī ir trešā rinda"""
```

### Izņēmumu apstrāde

Kad programmā rodas kļūda, Python ģenerē `izņēmumu`. Ja mēs to neapstrādājam, programma tiks pārtraukta. Izņēmumus var uztvert, izmantojot `try` un `except` paziņojumus:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Nevar dalīt ar 0"
```

Lai gan citās valodās izņēmumi dažkārt tiek uzskatīti par nevēlamiem, Python to plaša izmantošana padara kodu tīrāku un elegantāku.

### Saraksti

#### Sarakstu izveidošana

Saraksti ir vienkāršas, sakārtotas kolekcijas un Python pamatdatu struktūras (līdzīgas masīviem citās valodās, taču sarakstiem ir dažas papildu īpašības). Lai izveidotu sarakstu:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # ir vienāds ar 3
list_sum = sum(integer_list)      # ir vienāds ar 6
```
#### Vērtību piekļuve sarakstā

Vērtībām sarakstā var piekļūt, izmantojot kvadrātiekavu indeksus:

```python
x = range(10)       # iegūst sarakstu x = [0, 1, ..., 9]
zero = x[0]         # ir vienāds ar 0, saraksta numurēšana sākas no 0
one = x[1]          # ir vienāds ar 1
nine = x[-1]        # ir vienāds ar 9, pēdējais elements sarakstā
eight = x[-2]       # ir vienāds ar 8, priekšpēdējais elements sarakstā
x[0] = -1           # tagad saraksts x = [-1, 1, 2, 3, ..., 9]
```

#### Sarakstu sagriešana

Sarakstus var sagriezt, izmantojot kvadrātiekavas:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Varat izmantot operatoru `in`, lai pārbaudītu, vai kāds elements atrodas sarakstā:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Šis elementu meklēšanas veids ir neefektīvs, un to vajadzētu izmantot tikai tad, ja saraksts ir mazs vai jums nav svarīgs meklēšanas laiks.

#### Sarakstu apvienošana

Python valodā ir viegli apvienot divus sarakstus:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # tagad x = [1,2,3,4,5,6]
```

Ja nevēlaties modificēt sākotnējo sarakstu `x`, varat izmantot “plus” operatoru, lai izveidotu jaunu sarakstu:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # tagad y = [1, 2, 3, 4, 5, 6]; x nav mainījies
```

Bieži vien elementu sarakstam pievieno šādi:

```python
x = [1, 2, 3]
x.append(0)           # tagad x = [1, 2, 3, 0]
y = x[-1]             # ir vienāds ar 0
z = len(x)            # ir vienāds ar 4
```

#### Sarakstu sadalīšana

Ja zināt, cik elementu ir sarakstā, to ir viegli sadalīt:

```python
x, y = [1, 2]         # tagad x = 1, y = 2
```

Ja elementu skaits abās vienādības zīmes pusēs nesakrīt, jūs saņemsiet _vērtības kļūdu_, tāpēc biežāk izmantojam apakšsvītru, lai glabātu atlikušo saraksta daļu:

```python
_, y = [1, 2]         # tagad y == 2, ignorējot pirmo elementu
```

### Korteži

Korteži ir ļoti līdzīgi sarakstiem; vienīgā atšķirība ir tā, ka kortežu elementus nevar mainīt.

#### Kortežu izveidošana

Kortežus var izveidot, izmantojot apaļās iekavas vai vispār neizmantojot iekavas:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # tagad my_list ir [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Nevar modificēt kortežu"
```

Korteži ir ļoti ērti, lai no funkcijas iegūtu vairākas atgrieztās vērtības:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # ir vienāds ar (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Korteži (un saraksti) atbalsta vairāku elementu vienlaicīgu piešķiršanu:

```python
x, y = 1, 2       # tagad x = 1, y = 2
x, y = y, x       # Python valodā apmaina divu mainīgo vērtības; tagad x = 2, y = 1
```

### Vārdnīcas

#### Vārdnīcas izveidošana

Vēl viena Python pamatdatu struktūra ir vārdnīca, kas ļauj ātri piekļūt vērtībām (value), izmantojot atslēgas (key):

```python
empty_dict = {}                       # ļoti Pythoniska tukšas vārdnīcas definīcija
empty_dict2 = dict()                  # mazāk Pythoniska tukšas vārdnīcas definīcija
grades = { "Joel" : 80, "Tim" : 95 }  # vārdnīcas glabāšana
```

#### Vārdnīcas elementu meklēšana

Varat izmantot kvadrātiekavas ar atslēgu, lai atrastu atbilstošo vērtību:

```python
joels_grade = grades["Joel"]          # ir vienāds ar 80
```

Ja meklētā atslēga nav vārdnīcā, tiks atgriezta `KeyError` (atslēgas kļūda):

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Keitai nav atzīmes!"
```

Varat izmantot operatoru `in`, lai pārbaudītu, vai atslēga atrodas vārdnīcā:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Vārdnīcām ir metode, kas atgriež noklusējuma vērtību, ja meklētā atslēga nav vārdnīcā (tā vietā, lai radītu izņēmumu):

```python
joels_grade = grades.get("Joel", 0)   # ir vienāds ar 80
kates_grade = grades.get("Kate", 0)   # ir vienāds ar 0
no_ones_grade = grades.get("No One")  # atgriež noklusējuma vērtību None
```

#### Vārdnīcas modificēšana

Varat izmantot kvadrātiekavas, lai izveidotu vai modificētu atslēgu-vērtību pārus vārdnīcā:

```python
grades["Tim"] = 99                    # aizstāj veco vērtību
grades["Kate"] = 100                  # pievieno atslēgu-vērtību pāri
num_students = len(grades)            # ir vienāds ar 3
```

Mēs bieži izmantosim vārdnīcas šādā veidā, lai attēlotu datu struktūru:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Papildus konkrētu atslēgu meklēšanai, mēs varam arī manipulēt ar visām atslēgām šādi:

```python
tweet_keys = tweet.keys()             # iegūst atslēgu sarakstu
tweet_values = tweet.values()         # iegūst vērtību sarakstu
tweet_items = tweet.items()           # iegūst (atslēgas, vērtības) kortežus
"user" in tweet_keys                  # atgriež True, izmanto in meklēšanu sarakstā, kas ir mazāk efektīva
"user" in tweet                       # Pythoniskāka pieeja, izmanto efektīvu in meklēšanu vārdnīcā
"joelgrus" in tweet_values            # True
```

Vārdnīcu atslēgas ir unikālas, un sarakstus nevar izmantot kā atslēgas. Ja jums nepieciešama daudzdaļīga atslēga, varat izmantot kortežus vai kādā veidā pārvērst atslēgu par virkni.

#### Noklusējuma vārdnīcas

Ja mēģināt saskaitīt katra vārda biežumu dokumentā, acīmredzama pieeja ir izveidot vārdnīcu, kurā vārds ir atslēga un tā biežums ir vērtība. Pēc tam, ejot cauri dokumentam, katram jau sastaptam vārdam vārdnīcā palielināt atbilstošo vērtību par 1, bet jaunam vārdam pievienot atslēgu-vērtību pāri:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Protams, varat arī apstrādāt trūkstošu atslēgu “vispirms dari, tad domā” veidā, piemēram, šādi:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

Trešā metode ir izmantot `get`, kas lieliski apstrādā trūkstošas atslēgas:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Noklusējuma vārdnīcas (defaultdict) darbojas līdzīgi parastām vārdnīcām, ar vienīgo atšķirību, ka, mēģinot atrast neeksistējošu atslēgu, noklusējuma vārdnīca automātiski izveidos atslēgu-vērtību pāri, izmantojot jūsu norādīto atslēgu. Lai izmantotu noklusējuma vārdnīcas, jums jāimportē `collections` bibliotēka:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() ģenerē 0
for word in document:
    word_counts[word] += 1
```

Noklusējuma vārdnīcas ir noderīgas arī ar sarakstiem, parastām vārdnīcām un pat pielāgotām funkcijām:

```python
dd_list = defaultdict(list)           # list() ģenerē tukšu sarakstu
dd_list[2].append(1)                  # tagad dd_list ir {2: [1]}
dd_dict = defaultdict(dict)           # dict() ģenerē tukšu vārdnīcu
dd_dict["Joel"]["City"] = "Seattle"   # tagad dd_dict saturs ir { "Joel" : { "City" : Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # izveido vārdnīcu, kurā atslēgas vērtība ir saraksts
dd_pair[2][1] = 1                     # tagad dd_pair saturs ir {2: [0,1]}
```

Šī metode ir ļoti noderīga, jo nākotnē, iegūstot atslēgu-vērtību rezultātus no vārdnīcas, vairs nebūs jāpārbauda, vai atslēga eksistē.

### Skaitītājs (Counter)

Skaitītājs (Counter) var tieši pārvērst vērtību kopu vārdnīcai līdzīgā objektā, kur atslēga ir kāds elements no šīs kopas, bet atbilstošā vērtība ir šī elementa parādīšanās reižu skaits. Tas bieži tiek izmantots, veidojot histogrammas:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c (aptuveni) ir { 0 : 2, 1 : 1, 2 : 1 }
```

Tādējādi mums ir ļoti ērta metode vārdu biežuma skaitīšanai:

```python
word_counts = Counter(document)
```

Skaitītājam ir vēl viena ļoti noderīga metode `most_common`, kas tieši atgriež visbiežāk sastopamos vārdus un to biežumu:

```python
# Izvada 10 visbiežāk sastopamos vārdus un to biežumu
for word, count in word_counts.most_common(10):
    print word, count
```

### Kopas

Vēl viena Python datu struktūra ir kopa (set), kas ir unikālu elementu kolekcija.
Kopu var izveidot un pievienot tai elementus šādi:

```python
s = set()
s.add(1)          # s ir { 1 }
s.add(2)          # s ir { 1, 2 }
s.add(2)          # s ir { 1, 2 }
x = len(s)        # ir vienāds ar 2
y = 2 in s        # ir vienāds ar True
z = 3 in s        # ir vienāds ar False
```

Divi galvenie iemesli kopu izmantošanai:

Pirmkārt, `in` operācija kopās ir ļoti efektīva. Kad datu kopā ir ļoti liels skaits elementu, elementu meklēšana kopas formā ir acīmredzami piemērotāka nekā sarakstā:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # neveiksmīgi, jāpārbauda katrs elements
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # meklēšana veiksmīga un ātra
```

Otrkārt, ar kopām ir ļoti ērti iegūt unikālus elementus no datu kopas:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

Tomēr praksē kopas tiek izmantotas retāk nekā vārdnīcas un saraksti.

### Nosacījuma izteikumi

Lielākajā daļā programmēšanas valodu varat izmantot `if` paziņojumu, lai norādītu nosacījuma atzarojumus, piemēram:

```python
if 1 > 2:
    message = "ja vien 1 būtu lielāks par 2…"
elif 1 > 3:
    message = "elif apzīmē 'else if'"
else:
    message = "kad viss pārējais neizdodas, izmantojiet else (ja vēlaties)"
```

Varat arī rakstīt nosacījuma atzarojuma paziņojumu vienā rindā, taču tas tiek izmantots reti:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Cikla izteikumi

#### `while` cikls

`while` cikls Python valodā:

```python
x = 0
while x < 10:
    print x, "ir mazāks par 10"
    x += 1
```

#### `for` cikls

Biežāk tiek izmantots `for-in` cikls:

```python
for x in range(10):
    print x, "ir mazāks par 10"
```

Sarežģītākos loģikas izteikumos var izmantot `continue` un `break` paziņojumus:

```python
for x in range(10):
    if x == 3:
        continue          # pāriet uz nākamo cikla iterāciju
    if x == 5:
        break             # pilnībā iziet no cikla
    print x
```

Rezultātā tiks izdrukāti 0, 1, 2 un 4.

### Patiesums

Python būla mainīgie (`Booleans`) tiek izmantoti līdzīgi kā citās valodās, ar vienīgo atšķirību, ka to pirmajam burtam vienmēr jābūt lielajam:

```python
one_is_less_than_two = 1 < 2      # ir True
true_equals_false = True == False # ir False
```

Python izmanto `None`, lai norādītu, ka vērtība nepastāv, līdzīgi `null` citās valodās:

```python
x = None
print x == None        # izvada True, nav tik eleganti
print x is None        # izvada True, ir elegantāk
```

Python ļauj izmantot citas vērtības būla vērtību vietā; šādi elementi ir līdzvērtīgi `False`:

*   False
*   None
*   [] (tukšs saraksts)
*   {} (tukša vārdnīca)
*   “”
*   set()
*   0
*   0.0

Līdzīgi ir daudz `True` līdzvērtīgu vērtību, kas ļauj ļoti ērti pārbaudīt tukšus sarakstus, virknes, vārdnīcas utt.

Protams, ja nevarat paredzēt rezultātu, lietošanas laikā var rasties kļūdas:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Vienkāršāks risinājums, kas sniedz tādu pašu efektu kā iepriekš minētais:

```python
first_char = s and s[0]
```

Ja pirmā vērtība ir patiesa, tiks atgriezta otrā vērtība, pretējā gadījumā — pirmā vērtība.

Līdzīgi, ja `x` var būt skaitlis vai tukšs, tad šādi var iegūt `x`, kas noteikti būs skaitlis:

```python
safe_x = x or 0
```

Python valodā ir arī funkcija `all`, kas atgriež `True`, ja katrs elements ir `True`. Funkcija `any` atgriež `True`, ja vismaz viens elements ir `True`. Piemēram, ja sarakstā katrs elements ir “patiess”, funkcija `all` atgriezīs `True`, pretējā gadījumā — `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} ir līdzvērtīgs “False”
any([True, 1, {}])          # True
all([])                     # True, nav neviena elementa, kas būtu līdzvērtīgs “False”
any([])                     # False, nav neviena elementa, kas būtu līdzvērtīgs “True”
```

**Padziļināta lasīšana:**
[Python biežāk izmantotā sintakse datu zinātnē (padziļināti)](https://philoli.com/python-tutorails-advanced-level/)
