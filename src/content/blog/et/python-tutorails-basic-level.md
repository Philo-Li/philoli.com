---
title: Pythoni levinum süntaks andmeteaduses (algteadmised)
date: 2018-11-07 20:53:13
tags: Python
categories: Andmeteadus
mathjax: true
--- 

Viimastel päevadel olen lugenud raamatut [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF-i aadress](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), see on suurepärane ja hõlpsasti mõistetav sissejuhatus andmeteadusesse. Üks peatükk tutvustas Pythoni põhisüntaksit ja andmeteaduses sageli kasutatavaid edasijõudnute süntaksi reegleid. Leidsin, et see on hästi ja selgelt esitatud, nii et otsustasin selle siia oma tarbeks üles märkida ja tõlkida.  
[Pythoni levinum süntaks andmeteaduses (algteadmised)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Pythoni levinum süntaks andmeteaduses (edasijõudnutele)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Käesolev peatükk keskendub Pythoni põhilisele süntaksile ja funktsioonidele (Python 2.7 põhjal), mis on andmetöötluses väga kasulikud.

<!--more-->

### Tühikute vormindamine

Paljud keeled kasutavad koodiplokkide kontrollimiseks sulge, kuid Python kasutab taandeid:

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # "for i" tsükli esimene rida  
    for j in [1, 2, 3, 4, 5]:  
        print j      # "for j" tsükli esimene rida  
        print i + j  # "for j" tsükli viimane rida  
    print i          # "for i" tsükli viimane rida  
print "done looping"  
```

See muudab Pythoni koodi väga hõlpsasti loetavaks, kuid tähendab ka, et pead alati tähelepanelik olema vormistuse suhtes. Sulgudes olevad tühikud ignoreeritakse, mis on kasulik pikkade avaldiste kirjutamisel:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

See muudab ka koodi loetavamaks:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Mitmerearealised laused

Võid kasutada kaldkriipsu, et ühendada kaks katkenud rida (seda lähenemist kasutatakse harva):

```python
two_plus_three = 2 + \
                 3  
```

### Moodulid

Olenemata sellest, kas tegemist on Pythoni sisseehitatud või kolmandate osapoolte alla laaditud moodulitega, tuleb need enne kasutamist käsitsi importida.

1.  Lihtsalt impordi kogu moodul otse:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Siin imporditud `re`-moodulit kasutatakse regulaaravaldiste jaoks. Pärast mooduli importimist saad selle funktsioone otse kutsuda, kasutades mooduli nime eesliitena (`re.`).

2.  Kui imporditava mooduli nime on koodis juba kasutatud, saad mooduli importida teise nime alla:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3.  Kui sa oled ulakas, võid kogu mooduli importida praegusesse nimeruumi, mis võib tahtmatult üle kirjutada juba defineeritud muutujad:

```python
match = 10  
from re import *  # re-moodulis on funktsioon nimega match  
print match       # Väljastab match-funktsiooni  
```

Kuna sa oled hea inimene, siis ma usun, et sa nii ei tee.

### Aritmeetilised tehted

Python 2.7 kasutab vaikimisi täisarvude jagamist, nii et $5 / 2 = 2$. Kuid tihti me ei soovi täisarvude jagamist, seega saame importida järgmise mooduli:

```python
from __future__ import division  
```

Pärast importimist on $5 / 2 = 2.5$.  
Täisarvude jagamine: $5 // 2 = 2$.

### Funktsioonid

#### Funktsiooni defineerimine

Funktsioon on reegel, mis võtab vastu 0 või rohkem sisendeid ja tagastab teatud väljundi. Pythonis defineerime funktsiooni `def funktsiooni_nimi(parameetrid)` abil:

```python
def double(x):  
    """Siia võid kirjutada funktsiooni funktsionaalsuse selgituse.  
    Näiteks see funktsioon korrutab sisendi kahega."""  
    # Siia võid kirjutada funktsiooni keha, pea meeles taandeid  
    return x * 2  
```
#### Funktsiooni kasutamine

Pythonis on funktsioonid "esimese klassi kodanikud" (first-class citizens), mis tähendab, et saame funktsioone omistada muutujatele ja neid teistele funktsioonidele argumentidena edastada:

```python
def apply_to_one(f):  
    """Kutsub välja funktsiooni f ja annab argumendiks 1"""  
    return f(1)  
my_double = double          # double viitab eelmises jaotises defineeritud funktsioonile  
x = apply_to_one(my_double) # x on 2  
```
#### Anonüümsed funktsioonid

Anonüümseid funktsioone saab luua ka `lambda` abil:

```python
y = apply_to_one(lambda x: x + 4)     # On 5  
```

Saad `lambda` avaldise omistada teistele muutujatele, kuid enamik inimesi soovitab siiski kasutada `def`-i:

```python
another_double = lambda x: 2 * x      # Ei ole soovitatav  
def another_double(x): return 2 * x   # Soovitatav lähenemine  
```

Lisaks:

*   `lambda` on lihtsalt avaldis, funktsiooni keha on palju lihtsam kui `def`-iga defineeritutel.
*   `lambda` avaldise keha on avaldis, mitte koodiplokk. Ainult piiratud loogikat saab `lambda`-avaldisse pakkida.

#### Funktsiooni parameetrite edastamine

Funktsiooni parameetritele saab määrata vaikeväärtused. Kui funktsiooni kutsutakse välja ilma parameetriteta, kasutatakse vaikeväärtusi; kui parameetrid on antud, edastatakse need määratud väärtused:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Väljastab "hello"  
my_print()            # Väljastab "my default message"  
```

Mõnikord on mugav parameetreid otse nimepidi määrata:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Tagastab 5  
subtract(0, 5)    # Tagastab -5  
subtract(b=5)     # Sama, mis eelmine, tagastab -5  
```
### Sõned

Sõnede loomiseks saad kasutada ühekordseid või kahekordseid jutumärke (jutumärgid peavad alati paaris olema):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Kaldkriipsuga tähistatakse erimärke (escape character), näiteks:

```python
tab_string = "\t"      # Tähistab tabulaatori märki  
len(tab_string)        # On 1  
```

Kui soovid kasutada kaldkriipsu ennast (näiteks Windowsi kataloogides või regulaaravaldistes), saad seda teha toorsõnede (raw strings) `r""` abil:

```python
not_tab_string = r"\t" # Tähistab märke '\' ja 't'  
len(not_tab_string)    # On 2  
```

Kolme jutumärgi abil saad luua mitmerealisi sõnesid:

```python
multi_line_string = """See on esimene rida  
See on teine rida  
See on kolmas rida"""  
```

### Erandite käsitlemine

Kui programmis tekib viga, käivitab Python `erandi (exception)`. Kui me seda ei käsitle, lõpetab programm oma töö. Erandeid saab püüda `try` ja `except` lausete abil:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Nulliga ei saa jagada"  
```

Kuigi teistes keeltes peetakse erandeid sageli millekski, mida vältida, muudab Pythonis erandite aktiivne käsitlemine koodi sageli puhtamaks ja elegantsemaks.

### Loendid

#### Loendi loomine

Loendid on lihtsad, järjestatud kogumid ja Pythoni kõige põhilisem andmestruktuur (sarnane teiste keelte massiividele, kuid loenditel on mõned lisafunktsioonid). Loendi loomine:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # On 3  
list_sum = sum(integer_list)      # On 6  
```
#### Väärtustele loendis ligipääsemine

Saad loendi väärtustele ligi pääseda kandiliste sulgude ja indeksite abil:

```python
x = range(10)       # Loob loendi x = [0, 1, ..., 9]  
zero = x[0]         # On 0, loendi indeksid algavad 0-st  
one = x[1]          # On 1  
nine = x[-1]        # On 9, loendi viimane element  
eight = x[-2]       # On 8, loendi eelviimane element  
x[0] = -1           # Praegune loend x = [-1, 1, 2, 3, ..., 9]  
```

#### Loendi lõikamine

Loendeid saab lõigata kandiliste sulgudega:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Saad kasutada `in` operaatorit, et kontrollida, kas element on loendis:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Selline elementide otsimine on ebaefektiivne. Kasuta seda ainult siis, kui loend on väike või kui otsinguaeg pole kriitiline.

#### Loendite ühendamine

Pythonis on kahe loendi ühendamine väga lihtne:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Praegune x = [1,2,3,4,5,6]  
```

Kui sa ei taha algset loendit `x` muuta, saad plussoperaatoriga luua uue loendi:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Praegune y = [1, 2, 3, 4, 5, 6]; x ei muutunud  
```

Sageli lisatakse elemente loendisse ükshaaval nii:

```python
x = [1, 2, 3]  
x.append(0)           # Praegune x = [1, 2, 3, 0]  
y = x[-1]             # On 0  
z = len(x)            # On 4  
```

#### Loendi dekonstrueerimine

Kui tead, mitu elementi loendis on, on seda lihtne dekonstrueerida:

```python
x, y = [1, 2]         # Praegune x = 1, y = 2  
```

Kui võrdsuse mõlemal poolel on erinev arv elemente, saad _ValueError_. Seepärast kasutame sageli alakriipsu, et ignoreerida ülejäänud loendi osi:

```python
_, y = [1, 2]         # Praegune y == 2, esimene element ignoreeritakse  
```

### Kogumid (Tuples)

Loendid ja kogumid on väga sarnased. Ainus erinevus loenditega on see, et kogumi elemente ei saa muuta.

#### Kogumi loomine

Kogumeid saad luua ümarate sulgudega või ilma sulgudeta:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Praegune my_list on [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Kogumit ei saa muuta"  
```

Kogumeid on väga mugav kasutada funktsioonidest mitme väärtuse tagastamiseks:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # On (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Kogumid (ja loendid) toetavad mitme elemendi samaaegset omistamist:

```python
x, y = 1, 2       # Praegune x = 1, y = 2  
x, y = y, x       # Pythonis vahetatakse kahe muutuja väärtused; praegune x = 2, y = 1  
```

### Sõnastikud

#### Sõnastiku loomine

Pythoni teine põhistruktuur on sõnastik, mis võimaldab sul kiiresti leida väärtusi võtmete (key) abil:

```python
empty_dict = {}                       # Väga Pythonilik tühi sõnastiku definitsioon  
empty_dict2 = dict()                  # Vähem Pythonilik tühi sõnastiku definitsioon  
grades = { "Joel" : 80, "Tim" : 95 }  # Sõnastiku salvestamine  
```

#### Sõnastiku elementide otsimine

Võid kasutada kandilisi sulge ja võtmeid vastavate väärtuste leidmiseks:

```python
joels_grade = grades["Joel"]          # On 80  
```

Kui otsitavat võtit sõnastikus pole, tagastatakse `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Kate'i hindeid pole!"  
```

Saad kasutada `in` operaatorit, et kontrollida, kas võti on sõnastikus:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Sõnastikel on meetod, mis tagastab vaikeväärtuse, kui otsitavat võtit ei leita (selle asemel, et põhjustada erandit):

```python
joels_grade = grades.get("Joel", 0)   # On 80  
kates_grade = grades.get("Kate", 0)   # On 0  
no_ones_grade = grades.get("No One")  # Tagastab vaikeväärtuse None  
```

#### Sõnastiku muutmine

Võid kasutada kandilisi sulge, et luua või muuta sõnastikus võtmepaarid:

```python
grades["Tim"] = 99                    # Asendab vana väärtuse  
grades["Kate"] = 100                  # Lisab võtmepaari  
num_students = len(grades)            # On 3  
```

Kasutame sõnastikke sageli andmestruktuuride esitamiseks järgmiselt:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Lisaks konkreetsete võtmete otsimisele saame kõigi võtmetega opereerida järgmiselt:

```python
tweet_keys = tweet.keys()             # Saab võtmete loendi  
tweet_values = tweet.values()         # Saab väärtuste loendi  
tweet_items = tweet.items()           # Saab (võti, väärtus) kogumid  
"user" in tweet_keys                  # Tagastab True, kasutatakse loendis in-otsingut, mis on ebaefektiivne  
"user" in tweet                       # Pythonilikum kasutus, kasutab efektiivset sõnastiku in-otsingut  
"joelgrus" in tweet_values            # True  
```

Sõnastike võtmed peavad olema unikaalsed ja loendeid ei saa kasutada sõnastiku võtmetena. Kui vajad mitmeosalist võtit, võid kasutada kogumit või teisendada võtme mingil viisil sõneks.

#### Vaikesõnastikud (defaultdict)

Kui proovid loendada iga sõna esinemissagedust dokumendis, on üks ilmne viis luua sõnastik, kus sõnad on võtmed ja nende sagedused vastavad väärtused. Seejärel saad dokumendi läbi käia, suurendades olemasolevate sõnade loendureid ja lisades uutele sõnadele uusi võtmepaarid:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Muidugi võid puuduva võtme käsitleda ka "enne tegutse, siis mõtle" põhimõttel:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Kolmas meetod on kasutada `get`-meetodit, mis on puuduvate võtmete käsitlemisel eriti hea:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Vaikesõnastik (defaultdict) töötab nagu tavaline sõnastik, ainsa erinevusega: kui proovid sõnastikust otsida olematut võtit, loob vaikesõnastik automaatselt uue võtmepaari, kasutades sinu määratud funktsiooni. Vaikesõnastiku kasutamiseks pead importima `collections` teegi:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() genereerib 0  
for word in document:  
    word_counts[word] += 1  
```

Vaikesõnastikud on mugavad nii loendite, tavaliste sõnastike kui ka isegi kohandatud funktsioonidega:

```python
dd_list = defaultdict(list)           # list() genereerib tühja loendi  
dd_list[2].append(1)                  # Praegune dd_list on {2: [1]}  
dd_dict = defaultdict(dict)           # dict() genereerib tühja sõnastiku  
dd_dict["Joel"]["City"] = "Seattle"   # Praegune dd_dict sisu on { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Loodi sõnastik, mille võtmete väärtused on loendid  
dd_pair[2][1] = 1                     # Praegune dd_pair sisu on {2: [0,1]}  
```

See meetod on väga kasulik, sest edaspidi ei pea me enam kontrollima, kas võti sõnastikus eksisteerib, kui soovime selle väärtust kätte saada.

### Loendur (Counter)

Loendur (Counter) saab otse teisendada väärtuste kogumi sõnastikulaadseks objektiks, kus võtmed on kogumi elemendid ja väärtused on nende elementide esinemissagedused. Seda kasutatakse sageli histogrammide loomisel:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c on (umbes) { 0 : 2, 1 : 1, 2 : 1 }  
```

Nii saame sõnasageduste loendamiseks väga mugava meetodi:

```python
word_counts = Counter(document)  
```

Loenduril on ka väga kasulik meetod `most_common`, mis tagastab otse kõige sagedasemad sõnad ja nende esinemissagedused:

```python
# Väljastab 10 kõige sagedasemat sõna ja nende loendused  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Hulgad (Sets)

Pythoni teine andmestruktuur on hulk (set), mis on unikaalsete elementide kogum.  
Hulga loomiseks ja elementide lisamiseks saab kasutada järgmist:

```python
s = set()  
s.add(1)          # s on { 1 }  
s.add(2)          # s on { 1, 2 }  
s.add(2)          # s on { 1, 2 }  
x = len(s)        # On 2  
y = 2 in s        # On True  
z = 3 in s        # On False  
```

Kaks peamist põhjust hulkade kasutamiseks:

Esiteks on `in`-operatsioon hulkades väga efektiivne. Kui andmekogumis on väga palju elemente, on hulkades elementide otsimine märgatavalt efektiivsem kui loendites:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Ebaefektiivne, vaja on kontrollida iga elementi  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Otsing õnnestub ja on kiire  
```

Teiseks on hulgad väga mugavad, et saada andmekogumist unikaalsed elemendid:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Praktikas ei kasutata hulki aga nii tihti kui sõnastikke ja loendeid.

### Tingimuslaused

Enamikus programmeerimiskeeltes saad tingimuslauseid väljendada `if`-i abil järgmiselt:

```python
if 1 > 2:  
    message = "kui vaid 1 oleks suurem kui kaks…"  
elif 1 > 3:  
    message = "elif tähistab 'else if'"  
else:  
    message = "kui kõik muu ebaõnnestub, kasuta else-i (kui soovid)"  
```

Võid tingimuslause kirjutada ka ühele reale, kuid seda kasutatakse harva:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Tsükkellaused

#### `while`-tsükkel

Pythoni `while`-tsükkel:

```python
x = 0  
while x < 10:  
    print x, "on väiksem kui 10"  
    x += 1  
```

#### `for`-tsükkel

Sagedamini kasutatakse `for-in` tsükleid:

```python
for x in range(10):  
    print x, "on väiksem kui 10"  
```

Keerulisemate loogiliste avaldiste jaoks saab kasutada `continue` ja `break` lauseid:

```python
for x in range(10):  
    if x == 3:  
        continue          # Läheb otse järgmisele tsükli iteratsioonile  
    if x == 5:  
        break             # Väljub tsüklist täielikult  
    print x  
```

Tulemuseks on 0, 1, 2 ja 4.

### Tõeväärtused (Truthiness)

Pythoni loogilised muutujad (Booleans) käituvad sarnaselt teiste keeltega, ainsa erinevusega, et algustäht peab olema suurtäht:

```python
one_is_less_than_two = 1 < 2      # On True  
true_equals_false = True == False # On False  
```

Python kasutab `None`-i, et tähistada väärtuse puudumist, sarnaselt teiste keelte `null`-ile:

```python
x = None  
print x == None        # Väljastab True, pole nii elegantne  
print x is None        # Väljastab True, elegantsem  
```

Python lubab sul kasutada ka teisi väärtusi loogiliste väärtuste asemel. Järgmised on kõik samaväärsed `False`-iga:

*   False
*   None
*   `[]` (tühi loend)
*   `{}` (tühi sõnastik)
*   `""`
*   `set()`
*   `0`
*   `0.0`

Sarnaselt on ka palju `True`-ga samaväärseid väärtusi, mis teeb tühjade loendite, sõnede ja sõnastike jne kontrollimise väga mugavaks.

Muidugi, kui sa ei oska tulemust ette näha, võivad kasutamisel vead tekkida:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Lihtsam viis, mis annab sama tulemuse:

```python
first_char = s and s[0]  
```

Kui esimene väärtus on tõene, tagastatakse teine väärtus, vastasel juhul esimene.

Sarnaselt, kui `x` võib olla kas number või `None`, saad kindlasti numbri nii:

```python
safe_x = x or 0  
```

Pythonis on ka funktsioon `all`, mis tagastab `True`, kui iga element on `True`. Funktsioon `any` tagastab `True`, kui vähemalt üks element on `True`. Näiteks loendi puhul, kus iga element on 'tõene', tagastab `all` funktsioon `True`, vastasel juhul `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} on samaväärne "False"-iga  
any([True, 1, {}])          # True  
all([])                     # True, ei ole ühtegi "väärale" vastavat elementi  
any([])                     # False, ei ole ühtegi "tõesele" vastavat elementi  
```

**Lisalugemist:**  
[Pythoni levinum süntaks andmeteaduses (edasijõudnutele)](https://philoli.com/python-tutorails-advanced-level/)
