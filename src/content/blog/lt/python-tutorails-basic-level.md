---
title: Dažnai naudojama Python sintaksė duomenų moksle (pagrindai)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
---

Pastarosiomis dienomis skaitau knygą „[Data Science from Scratch](https://book.douban.com/subject/26364377/)“ ([PDF adresas](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), kuri yra puikus ir lengvai suprantamas įvadas į duomenų mokslą. Viename iš skyrių pristatoma pagrindinė Python sintaksė ir pažangesnė sintaksė, dažnai naudojama duomenų moksle. Kadangi man patiko, kaip aiškiai ir glaustai tai pateikta, nusprendžiau išversti ir pasidalinti čia, kaip atmintinę.

[Dažnai naudojama Python sintaksė duomenų moksle (pagrindai)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Dažnai naudojama Python sintaksė duomenų moksle (pažengusiems)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Šiame skyriuje daugiausia dėmesio skiriama pagrindinei Python sintaksei ir funkcijoms, kurios yra itin naudingos duomenų apdorojimui (pagrįsta Python 2.7 versija).

<!--more-->

### [](#空格格式 "空格格式")Įtraukos

Nors daugelis programavimo kalbų naudoja skliaustus kodo blokams kontroliuoti, Python tam pasitelkia įtraukas (angl. indentation):

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # pirmoji "for i" ciklo eilutė  
    for j in [1, 2, 3, 4, 5]:  
        print j      # pirmoji "for j" ciklo eilutė  
        print i + j  # paskutinė "for j" ciklo eilutė  
    print i          # paskutinė "for i" ciklo eilutė  
print "done looping"  
```

Dėl to Python kodas yra itin lengvai skaitomas, tačiau taip pat reiškia, kad privalote nuolat atidžiai stebėti formatavimą. Skliausteliuose esantys tarpai ignoruojami, o tai labai praverčia rašant ilgas išraiškas:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Tai padeda kodą padaryti skaitomesniu:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#多行语句 "多行语句")Kelių eilučių sakiniai

Dviejų eilučių sujungimą, nutraukiant vieną iš jų, galima pažymėti atvirkštiniu brūkšniu (šis metodas naudojamas retai):

```python
two_plus_three = 2 + \
                 3  
```

### [](#模块-Modules "模块 Modules")Moduliai

Tiek standartiniai Python moduliai, tiek trečiųjų šalių moduliai, kuriuos atsisiunčiate patys, turi būti rankiniu būdu importuojami, kad juos būtų galima naudoti.

1. Tiesioginis viso modulio importavimas:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Čia importuotas `re` modulis skirtas reguliariosioms išraiškoms. Importavus modulį, konkrečias jo funkcijas galima iškviesti naudojant modulio pavadinimą kaip priešdėlį (pvz., `re.`).

2. Jei importuojamo modulio pavadinimas jau naudojamas jūsų kode, galite jam priskirti kitą pavadinimą importavimo metu:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Jei norite elgtis „blogai“, galite importuoti visą modulį į dabartinę vardų erdvę. Taip galite netyčia perrašyti jau apibrėžtus kintamuosius:

```python
match = 10  
from re import *  # re modulyje yra funkcija match  
print match       # išveda match funkciją  
```

Kadangi esate geras žmogus, tikiu, kad to nedarysite.

### [](#四则运算-Arithmetic "四则运算 Arithmetic")Aritmetinės operacijos

Python 2.7 pagal nutylėjimą naudoja sveikųjų skaičių dalybą, todėl $5 / 2 = 2$. Tačiau dažnai mums reikia ne sveikųjų skaičių dalybos, todėl galima importuoti šį modulį:

```python
from __future__ import division  
```

Importavus, $5 / 2 = 2.5$. Sveikųjų skaičių dalyba: $5 // 2 = 2$.

### [](#函数-Functions "函数 Functions")Funkcijos

#### [](#函数定义 "函数定义")Funkcijos apibrėžimas

Funkcija yra taisyklė, kuri gali priimti nulį ar daugiau įvesties duomenų ir grąžinti tam tikrą išvestį. Python kalboje funkcijas apibrėžiame naudodami `def funkcijos_pavadinimas(parametrai)`:

```python
def double(x):  
    """Čia galite parašyti paaiškinimą apie funkcijos veikimą.  
    Pavyzdžiui, ši funkcija padvigubina įvestį."""  
    # Čia rašomas funkcijos kūnas, nepamirškite įtraukų.  
    return x * 2  
```
#### [](#函数使用 "函数使用")Funkcijų naudojimas

Python kalboje funkcijos yra „pirmos klasės piliečiai“, o tai reiškia, kad jas galima priskirti kintamiesiems arba perduoti kaip argumentus kitoms funkcijoms:

```python
def apply_to_one(f):  
    """Iškviesti funkciją f ir perduoti jai 1 kaip parametrą"""  
    return f(1)  
my_double = double          # double rodo į anksčiau apibrėžtą funkciją  
x = apply_to_one(my_double) # x yra lygus 2  
```
#### [](#匿名函数 "匿名函数")Anoniminės funkcijos

Taip pat galima kurti anonimines funkcijas naudojant `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # yra lygu 5  
```

`lambda` išraišką galima priskirti kintamiesiems, tačiau dauguma rekomenduotų vis tiek naudoti `def`:

```python
another_double = lambda x: 2 * x      # nerekomenduojama  
def another_double(x): return 2 * x   # rekomenduojama  
```

Pastabos:

*   `lambda` yra tik išraiška, o jos funkcijos kūnas yra daug paprastesnis nei `def` atveju.
*   `lambda` kūnas yra išraiška, o ne kodo blokas. `lambda` išraiškoje galima įdėti tik ribotą logiką.

#### [](#函数参数传递 "函数参数传递")Funkcijų parametrų perdavimas

Funkcijos parametrams galima nustatyti numatytąsias vertes. Jei funkcija iškviečiama be parametrų, bus naudojamos numatytosios vertės; jei su parametrais, bus perduotos nurodytos vertės:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # išveda "hello"  
my_print()            # išveda "my default message"  
```

Kartais labai patogu nurodyti parametrus tiesiogiai pagal jų pavadinimus:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # grąžina 5  
subtract(0, 5)    # grąžina -5  
subtract(b=5)     # tas pats, kas ankstesnis, grąžina -5  
```
### [](#字符串-Strings "字符串 Strings")Eilutės

Norėdami sukurti eilutę, galite naudoti viengubas arba dvigubas kabutes (kabutės turi būti suporuotos):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Atvirkštinis brūkšnys naudojamas išskyrimo simboliams, pavyzdžiui:

```python
tab_string = "\t"      # žymi tabuliavimo simbolį (tab)  
len(tab_string)        # lygu 1  
```

Kai norite naudoti patį atvirkštinį brūkšnį (pvz., Windows kataloguose arba reguliariosiose išraiškose), galite tai apibrėžti naudodami „žaliąsias“ eilutes `r""`:

```python
not_tab_string = r"\t" # žymi simbolius '\' ir 't'  
len(not_tab_string)    # lygu 2  
```

Daugiatikslės eilutės kuriamos naudojant tris dvigubas kabutes:

```python
multi_line_string = """Tai pirma eilutė  
Tai antra eilutė  
Tai trečia eilutė"""  
```

### [](#异常处理-Exception "异常处理 Exception")Išimčių valdymas

Kai programoje įvyksta klaida, Python generuoja `išimtį`. Jei jos neapdorosime, programa sustos. Išimtis galima valdyti naudojant `try` ir `except` teiginius:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Negalima dalinti iš nulio"  
```

Nors kitose kalbose išimtys dažnai laikomos neigiamu dalyku, Python kalboje aktyvus išimčių valdymas gali padaryti jūsų kodą švaresnį ir elegantiškesnį.

### [](#列表-Lists "列表 Lists")Sąrašai

#### [](#创建列表 "创建列表")Sąrašų kūrimas

Sąrašai yra paprastos, tvarkingos kolekcijos ir yra pagrindinė Python duomenų struktūra (panašios į kitų kalbų masyvus, bet turi papildomų savybių). Štai kaip sukurti sąrašą:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # lygu 3  
list_sum = sum(integer_list)      # lygu 6  
```
#### [](#访问列表中的值 "访问列表中的值")Sąrašo elementų pasiekimas

Sąrašo elementus galite pasiekti naudodami kvadratinius skliaustus ir indeksus:

```python
x = range(10)       # sąrašas x = [0, 1, ..., 9]  
zero = x[0]         # lygu 0, sąrašo indeksavimas prasideda nuo 0  
one = x[1]          # lygu 1  
nine = x[-1]        # lygu 9, paskutinis sąrašo elementas  
eight = x[-2]       # lygu 8, antras nuo galo sąrašo elementas  
x[0] = -1           # dabar sąrašas x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#截取列表 "截取列表")Sąrašo išpjovimas (slicing)

Sąrašus galima išpjauti naudojant kvadratinius skliaustus:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Galite naudoti `in` operatorių, norėdami patikrinti, ar elementas yra sąraše:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Šis elementų paieškos būdas yra neefektyvus. Naudokite jį tik tada, kai sąrašas yra labai mažas arba kai jums nerūpi paieškos laikas.

#### [](#拼接列表 "拼接列表")Sąrašų jungimas

Python kalboje labai lengva sujungti du sąrašus:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # dabar x = [1,2,3,4,5,6]  
```

Jei nenorite keisti originalaus sąrašo `x`, galite sukurti naują sąrašą naudodami „pliuso“ operatorių:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # dabar y = [1, 2, 3, 4, 5, 6]; x nepakito  
```

Dažnai taip pridedamas vienas elementas į sąrašą:

```python
x = [1, 2, 3]  
x.append(0)           # dabar x = [1, 2, 3, 0]  
y = x[-1]             # lygu 0  
z = len(x)            # lygu 4  
```

#### [](#列表分解 "列表分解")Sąrašo išpakavimas

Jei žinote, kiek elementų yra sąraše, jį lengva išpakuoti:

```python
x, y = [1, 2]         # dabar x = 1, y = 2  
```

Jei elementų skaičius abiejose lygybės pusėse nesutampa, gausite `ValueError`. Todėl dažniau naudojame pabraukimo simbolį, kad priskirtume likusią sąrašo dalį:

```python
_, y = [1, 2]         # dabar y == 2, pirmasis elementas ignoruojamas  
```

### [](#元组-Tuples "元组 Tuples")Kortelės (Tuples)

Sąrašai ir kortelės yra labai panašios, vienintelis skirtumas tas, kad kortelių elementai negali būti keičiami.

#### [](#元组创建 "元组创建")Kortelių kūrimas

Korteles galima sukurti naudojant apvalius skliaustus arba be jokių skliaustų:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # dabar my_list yra [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Kortelės negalima modifikuoti"  
```

Kortelės labai patogios, kai reikia grąžinti kelias reikšmes iš funkcijos:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # lygu (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Kortelės (ir sąrašai) palaiko kelių elementų priskyrimą vienu metu:

```python
x, y = 1, 2       # dabar x = 1, y = 2  
x, y = y, x       # Dviejų kintamųjų reikšmių sukeitimas Python; dabar x = 2, y = 1  
```

### [](#字典-Dictionaries "字典 Dictionaries")Žodynai

#### [](#字典创建 "字典创建")Žodynų kūrimas

Kita pagrindinė Python duomenų struktūra yra žodynas, leidžiantis greitai gauti reikšmes (value) naudojant raktus (key):

```python
empty_dict = {}                       # Labai "pythoniškas" tuščio žodyno apibrėžimas  
empty_dict2 = dict()                  # Mažiau "pythoniškas" tuščio žodyno apibrėžimas  
grades = { "Joel" : 80, "Tim" : 95 }  # Žodyno saugojimas  
```

#### [](#字典元素查找 "字典元素查找")Žodyno elementų paieška

Galite naudoti kvadratinius skliaustus ir raktą, norėdami rasti atitinkamą reikšmę:

```python
joels_grade = grades["Joel"]          # lygu 80  
```

Jei ieškomas raktas nėra žodyne, bus grąžinta `KeyError` išimtis:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Katei pažymio nėra!"  
```

Galite naudoti `in` operatorių, norėdami patikrinti, ar raktas yra žodyne:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Žodynai turi metodą, kuris grąžina numatytąją reikšmę, jei ieškomas raktas nerandamas (užuot sukėlęs išimtį):

```python
joels_grade = grades.get("Joel", 0)   # lygu 80  
kates_grade = grades.get("Kate", 0)   # lygu 0  
no_ones_grade = grades.get("No One")  # grąžina numatytąją reikšmę None  
```

#### [](#字典修改 "字典修改")Žodyno modifikavimas

Naudojant kvadratinius skliaustus, galima kurti ir modifikuoti žodyno rakto-reikšmės poras:

```python
grades["Tim"] = 99                    # pakeičia seną reikšmę  
grades["Kate"] = 100                  # prideda rakto-reikšmės porą  
num_students = len(grades)            # lygu 3  
```

Dažnai naudosime žodynus duomenų struktūrai išreikšti, pavyzdžiui, taip:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Be konkrečių raktų paieškos, galime atlikti operacijas su visais raktais taip:

```python
tweet_keys = tweet.keys()             # gaunamas raktų sąrašas  
tweet_values = tweet.values()         # gaunamas reikšmių sąrašas  
tweet_items = tweet.items()           # gaunamos (raktas, reikšmė) kortelės  
"user" in tweet_keys                  # grąžina True, naudojama mažiau efektyvi sąrašo paieška su in  
"user" in tweet                       # labiau "pythoniškas" būdas, naudojama efektyvi žodyno paieška su in  
"joelgrus" in tweet_values            # True  
```

Žodynų raktai turi būti unikalūs, o sąrašai negali būti naudojami kaip žodyno raktai. Jei jums reikia sudėtinio rakto, galite naudoti kortelę arba konvertuoti raktą į eilutę.

#### [](#内置字典 "内置字典")Numatytasis žodynas (defaultdict)

Jei bandote suskaičiuoti kiekvieno žodžio pasikartojimo dažnumą dokumente, akivaizdus būdas yra sukurti žodyną, kur žodis būtų raktas, o dažnumas – atitinkama reikšmė. Tada pereinate per dokumentą: kai susiduriate su jau matytu žodžiu, padidinate jo reikšmę 1; kai susiduriate su nauju žodžiu, pridedate naują rakto-reikšmės porą į žodyną:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Žinoma, galite iš anksto apdoroti trūkstamą raktą, naudodami „pirmiausia veiksmas, po to klausimas“ metodą, pavyzdžiui, taip:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Trečias metodas yra naudoti `get` metodą, kuris puikiai tinka trūkstamiems raktams tvarkyti:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Numatytieji žodynai (defaultdict) veikia kaip įprasti žodynai, vienintelis skirtumas yra tas, kad bandant rasti neegzistuojantį raktą, `defaultdict` automatiškai sukurs rakto-reikšmės porą, naudodamas jūsų pateiktą raktą. Norėdami naudoti `defaultdict`, turite importuoti `collections` biblioteką:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() sukuria 0  
for word in document:  
    word_counts[word] += 1  
```

Numatytieji žodynai taip pat labai naudingi su sąrašais, paprastais žodynais ir net su vartotojo apibrėžtomis funkcijomis:

```python
dd_list = defaultdict(list)           # list() sukuria tuščią sąrašą  
dd_list[2].append(1)                  # dabar dd_list yra {2: [1]}  
dd_dict = defaultdict(dict)           # dict() sukuria tuščią žodyną  
dd_dict["Joel"]["City"] = "Seattle"   # dabar dd_dict turinys yra { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # sukūrė žodyną, kurio rakto reikšmė yra sąrašas  
dd_pair[2][1] = 1                     # dabar dd_pair turinys yra {2: [0,1]}  
```

Šis metodas yra labai naudingas, nes ateityje, kai reikės gauti tam tikras rakto-reikšmės poras iš žodyno, nebereikės tikrinti, ar raktas egzistuoja.

### [](#计数器-Counter "计数器 Counter")Skaitiklis (Counter)

Skaitiklis (Counter) gali tiesiogiai paversti verčių grupę į žodyną primenantį objektą, kur raktas yra elementas iš grupės, o atitinkama reikšmė – to elemento pasikartojimų skaičius. Tai dažnai naudojama kuriant histogramas:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (apytiksliai) yra { 0 : 2, 1 : 1, 2 : 1 }  
```

Taigi, turime labai patogų būdą skaičiuoti žodžių dažnumą:

```python
word_counts = Counter(document)  
```

Skaitiklis turi dar vieną labai naudingą metodą `most_common`, kuris leidžia tiesiogiai gauti kelis dažniausius žodžius ir jų dažnumą:

```python
# Išveda 10 dažniausių žodžių ir jų skaičių  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#集合-Sets "集合 Sets")Aibės

Kita Python duomenų struktūra yra aibė. Aibė yra skirtingų elementų rinkinys.
Aibę galima sukurti ir į ją pridėti elementų taip:

```python
s = set()  
s.add(1)          # s yra { 1 }  
s.add(2)          # s yra { 1, 2 }  
s.add(2)          # s yra { 1, 2 }  
x = len(s)        # lygu 2  
y = 2 in s        # lygu True  
z = 3 in s        # lygu False  
```

Dvi pagrindinės priežastys naudoti aibes:

Pirma, `in` operacija aibėse yra labai efektyvi. Kai duomenų rinkinyje yra labai daug elementų, elementų paieška aibės pavidalu akivaizdžiai tinka labiau nei sąrašo atveju:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Nepavyksta, reikia tikrinti kiekvieną elementą  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Paieška sėkminga ir labai greita  
```

Antra, aibės labai patogios, norint gauti unikalius elementus iš duomenų rinkinio:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Tačiau praktiškai aibės naudojamos rečiau nei žodynai ir sąrašai.

### [](#条件语句 "条件语句")Sąlyginiai teiginiai

Daugumoje programavimo kalbų sąlygines šakas galite išreikšti naudodami `if` teiginį taip:

```python
if 1 > 2:  
    message = "jei tik 1 būtų didesnis už 2…"  
elif 1 > 3:  
    message = "elif reiškia 'else if' (kitaip jei)"  
else:  
    message = "kai viskas nepavyksta, naudokite else (jei norite)"  
```

Sąlyginės šakos teiginį taip pat galite parašyti vienoje eilutėje, tačiau tai naudojama retai:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#循环语句 "循环语句")Ciklo teiginiai

#### [](#while-循环 "while 循环")`while` ciklas

`while` ciklas Python kalboje:

```python
x = 0  
while x < 10:  
    print x, "yra mažiau nei 10"  
    x += 1  
```

#### [](#for-循环 "for 循环")`for` ciklas

Dažniau naudojamas `for-in` ciklas:

```python
for x in range(10):  
    print x, "yra mažiau nei 10"  
```

Sudėtingesnėms loginėms išraiškoms galima naudoti `continue` ir `break` teiginius:

```python
for x in range(10):  
    if x == 3:  
        continue          # iškart pereina į kitą ciklo iteraciją  
    if x == 5:  
        break             # visiškai išeina iš ciklo  
    print x  
```

Rezultatas bus 0, 1, 2 ir 4.

### [](#真值-Truthiness "真值 Truthiness")Teisingumo reikšmė (Truthiness)

Python kalbos Būlio kintamieji `Booleans` naudojami panašiai kaip ir kitose kalbose, vienintelis skirtumas yra tas, kad pirmoji raidė visada turi būti didžioji:

```python
one_is_less_than_two = 1 < 2      # yra True  
true_equals_false = True == False # yra False  
```

Python naudoja `None`, norėdama nurodyti, kad reikšmė neegzistuoja, panašiai kaip kitose kalbose `null`:

```python
x = None  
print x == None        # išveda True, bet tai nėra elegantiška  
print x is None        # išveda True, tai elegantiškiau  
```

Python leidžia naudoti kitas reikšmes vietoj Būlio reikšmių. Šios reikšmės yra lygiavertės `False`:

*   False
*   None
*   [] (tuščias sąrašas)
*   {} (tuščias žodynas)
*   “”
*   set()
*   0
*   0.0

Panašiai yra daug `True` ekvivalentų, o tai leidžia labai patogiai patikrinti, ar sąrašas, eilutė ar žodynas yra tuščias ir t.t.

Žinoma, jei negalite numatyti rezultato, naudodami tai galite suklysti:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Paprastesnis būdas, kurio poveikis yra toks pat kaip ir aukščiau pateikto:

```python
first_char = s and s[0]  
```

Jei pirmoji reikšmė yra teisinga, grąžinama antroji reikšmė; priešingu atveju grąžinama pirmoji reikšmė.

Panašiai, jei `x` gali būti skaičius arba `None`, taip galite gauti `x`, kuris tikrai bus skaičius:

```python
safe_x = x or 0  
```

Python taip pat turi funkciją `all`, kuri grąžina `True`, jei kiekvienas elementas yra `True`. Funkcija `any` grąžina `True`, jei bent vienas elementas yra `True`. Pavyzdžiui, jei sąrašo kiekvienas elementas yra „teisingas“, `all` funkcija grąžins `True`, priešingu atveju – `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} yra lygiavertė „False“  
any([True, 1, {}])          # True  
all([])                     # True, nėra nei vieno elemento lygiaverčio „False“  
any([])                     # False, nėra nei vieno elemento lygiaverčio „True“  
```

**Tolesnis skaitymas:**
[Dažnai naudojama Python sintaksė duomenų moksle (pažengusiems)](https://philoli.com/python-tutorails-advanced-level/)
