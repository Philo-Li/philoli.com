---
title: Základní syntaxe Pythonu pro datovou vědu (základy)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

Posledních pár dní jsem se díval na knihu [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF ke stažení zde](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)). Je to skvělá a srozumitelná úvodní kniha do datové vědy. Jedna z kapitol se věnuje základní syntaxi Pythonu a pokročilým konstrukcím často používaným v datové vědě. Přišlo mi to skvěle a stručně vysvětlené, a tak jsem se rozhodl to přeložit a uložit sem jako poznámky pro sebe.  
[Běžná syntaxe Pythonu v datové vědě (základy)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Běžná syntaxe Pythonu v datové vědě (pokročilé)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Tato kapitola se zaměřuje na představení základní syntaxe a funkcí Pythonu, které jsou velmi užitečné při zpracování dat (založeno na Pythonu 2.7).

<!--more-->

### [](#空格格式 "Formátování odsazení")Formátování odsazení

Mnoho jazyků používá pro řízení bloků kódu závorky, ale Python spoléhá na odsazení:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # První řádek cyklu "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # První řádek cyklu "for j"  
        print i + j  # Poslední řádek cyklu "for j"  
    print i          # Poslední řádek cyklu "for i"  
print "done looping"  
```

Díky tomu je kód v Pythonu velmi čitelný, ale zároveň to znamená, že si musíte neustále hlídat formátování. Mezery uvnitř závorek jsou ignorovány, což je užitečné při psaní dlouhých výrazů:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

A také to zlepšuje čitelnost kódu:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#多行语句 "Víceřádkové příkazy")Víceřádkové příkazy

Pro rozdělení příkazu do dvou řádků lze použít zpětné lomítko (tato praxe se však používá zřídka):  

```python
two_plus_three = 2 + \
                 3  
```

### [](#模块-Modules "Moduly")Moduly

Ať už se jedná o moduly vestavěné v Pythonu, nebo o moduly třetích stran, které si stáhnete, musíte je před použitím ručně importovat.

1. Jednoduchý import celého modulu:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Zde importovaný modul `_re_` slouží pro regulární výrazy. Po importu modulu můžete přímo volat jeho funkce pomocí předpony s názvem modulu (re.).

2. Pokud je název modulu, který importujete, již použit ve vašem kódu, můžete jej při importu namapovat na jiný název:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Pokud jste "špatní", můžete importovat celý modul do aktuálního jmenného prostoru, což může neúmyslně přepsat již definované proměnné:

```python
match = 10  
from re import *  # Modul re obsahuje funkci match  
print match       # Vypíše funkci match  
```

Protože jste dobří lidé, věřím, že to dělat nebudete.

### [](#四则运算-Arithmetic "Aritmetické operace")Aritmetické operace

Python 2.7 standardně používá celočíselné dělení, takže $5 / 2 = 2$. Často však nechceme celočíselné dělení, a proto můžeme importovat tento modul:

```python
from __future__ import division  
```

Po importu bude $5 / 2 = 2.5$.  
Celočíselné dělení: $5 // 2 = 2$.

### [](#函数-Functions "Funkce")Funkce

#### [](#函数定义 "Definice funkcí")Definice funkcí

Funkce je pravidlo, které přijímá nula nebo více vstupů a vrací určitý výstup. V Pythonu definujeme funkci pomocí `def jméno_funkce(parametry)`:

```python
def double(x):  
    """Zde můžete napsat vysvětlení funkce.  
    Například, tato funkce vynásobí vstup dvěma."""  
    # Zde může být tělo funkce, nezapomeňte na odsazení  
    return x * 2  
```
#### [](#函数使用 "Použití funkcí")Použití funkcí

V Pythonu jsou funkce "občany první třídy", což znamená, že je můžeme přiřadit proměnné nebo je předat jako argumenty jiným funkcím:

```python
def apply_to_one(f):  
    """Volá funkci f a předává jí 1 jako argument."""  
    return f(1)  
my_double = double          # 'double' odkazuje na funkci definovanou v předchozí sekci  
x = apply_to_one(my_double) # x je rovno 2  
```
#### [](#匿名函数 "Anonymní funkce")Anonymní funkce

Anonymní funkce lze také vytvářet pomocí `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # rovno 5  
```

Lambda funkce lze přiřadit jiným proměnným, ale většina lidí vám doporučí, abyste se drželi _def_:

```python
another_double = lambda x: 2 * x      # nedoporučeno  
def another_double(x): return 2 * x   # doporučená praxe  
```

Doplnění:

*   `lambda` je pouze výraz, tělo funkce je mnohem jednodušší než u `def`.
*   Tělo `lambda` je výraz, nikoli blok kódu. Do výrazu `lambda` lze zapouzdřit pouze omezenou logiku.

#### [](#函数参数传递 "Předávání parametrů funkcí")Předávání parametrů funkcí

Parametry funkce mohou mít definované výchozí hodnoty. Pokud se funkce volá bez argumentů pro tyto parametry, použijí se výchozí hodnoty; pokud jsou argumenty zadány, předají se zadané hodnoty:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Vypíše "hello"  
my_print()            # Vypíše "my default message"  
```

Někdy je také velmi užitečné specifikovat argumenty přímo pomocí jejich názvů:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # vrátí 5  
subtract(0, 5)    # vrátí -5  
subtract(b=5)     # Stejné jako předchozí, vrátí -5  
```
### [](#字符串-Strings "Řetězce")Řetězce

Řetězce lze vytvářet pomocí jednoduchých nebo dvojitých uvozovek (uvozovky se musí vždy shodovat):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Pro speciální znaky se používá zpětné lomítko, například:

```python
tab_string = "\t"      # Reprezentuje tabulátor  
len(tab_string)        # rovno 1  
```

Pokud chcete použít samotné zpětné lomítko (například pro cesty ve Windows nebo regulární výrazy), můžete ho definovat pomocí tzv. raw stringu `r""`:

```python
not_tab_string = r"\t" # Reprezentuje znaky '\' a 't'  
len(not_tab_string)    # rovno 2  
```

Víceřádkové řetězce se vytvářejí pomocí tří dvojitých uvozovek:

```python
multi_line_string = """Toto je první řádek  
Toto je druhý řádek  
Toto je třetí řádek"""  
```

### [](#异常处理-Exception "Zpracování výjimek")Zpracování výjimek

Když program narazí na chybu, Python vyvolá `výjimku (exception)`. Pokud ji nezpracujeme, program se ukončí. Výjimky lze zachytit pomocí příkazů `try` a `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Nelze dělit nulou"  
```

Zatímco v jiných jazycích jsou výjimky často vnímány jako něco nežádoucího, v Pythonu jejich časté zpracování může vést k čistšímu a elegantnějšímu kódu.

### [](#列表-Lists "Seznamy (Lists)")Seznamy (Lists)

#### [](#创建列表 "Vytváření seznamů")Vytváření seznamů

Seznamy jsou jednoduché uspořádané kolekce a jedna z nejzákladnějších datových struktur v Pythonu (podobné polím v jiných jazycích, ale s několika dalšími vlastnostmi). Vytvoření seznamu:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # rovno 3  
list_sum = sum(integer_list)      # rovno 6  
```
#### [](#访问列表中的值 "Přístup k prvkům seznamu")Přístup k prvkům seznamu

K prvkům v seznamu můžete přistupovat pomocí indexů v hranatých závorkách:

```python
x = range(10)       # vytvoří seznam x = [0, 1, ..., 9]  
zero = x[0]         # rovno 0, indexy seznamu začínají od 0  
one = x[1]          # rovno 1  
nine = x[-1]        # rovno 9, poslední prvek v seznamu  
eight = x[-2]       # rovno 8, druhý prvek od konce seznamu  
x[0] = -1           # aktuální seznam x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#截取列表 "Řezání seznamů")Řezání seznamů

Pomocí hranatých závorek můžete seznamy řezat:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Pomocí `in` můžete zkontrolovat, zda se prvek nachází v seznamu:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Tento způsob vyhledávání prvků je neefektivní. Měli byste ho používat pouze tehdy, když je seznam malý nebo vám nezáleží na době hledání.

#### [](#拼接列表 "Spojování seznamů")Spojování seznamů

V Pythonu je velmi snadné spojit dva seznamy:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Nyní x = [1,2,3,4,5,6]  
```

Pokud nechcete upravovat původní seznam `x`, můžete použít operátor sčítání k vytvoření nového seznamu:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Nyní y = [1, 2, 3, 4, 5, 6]; x se nezměnilo  
```

Často se používá tento způsob přidání jednoho prvku do seznamu:

```python
x = [1, 2, 3]  
x.append(0)           # Nyní x = [1, 2, 3, 0]  
y = x[-1]             # rovno 0  
z = len(x)            # rovno 4  
```

#### [](#列表分解 "Rozbalování seznamů")Rozbalování seznamů

Pokud víte, kolik prvků je v seznamu, je snadné jej rozbalit:

```python
x, y = [1, 2]         # Nyní x = 1, y = 2  
```

Pokud se počet prvků na obou stranách rovnice neshoduje, dostanete _chybu hodnoty (ValueError)_. Proto často používáme podtržítko k uložení zbytku seznamu:

```python
_, y = [1, 2]         # Nyní y == 2, první prvek je ignorován  
```

### [](#元组-Tuples "N-tice (Tuples)")N-tice (Tuples)

Seznamy a n-tice jsou si velmi podobné. Jediný rozdíl je v tom, že prvky v n-tici nelze měnit.

#### [](#元组创建 "Vytváření n-tic")Vytváření n-tic

N-tice lze vytvářet pomocí kulatých závorek nebo bez jakýchkoli závorek:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Nyní je my_list [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Nelze měnit n-tici"  
```

N-tice jsou velmi užitečné pro snadné získání více návratových hodnot z funkce:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # rovno (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

N-tice (a seznamy) podporují současné přiřazení více prvků:

```python
x, y = 1, 2       # Nyní x = 1, y = 2  
x, y = y, x       # Výměna hodnot dvou proměnných v Pythonu; Nyní x = 2, y = 1  
```

### [](#字典-Dictionaries "Slovníky (Dictionaries)")Slovníky (Dictionaries)

#### [](#字典创建 "Vytváření slovníků")Vytváření slovníků

Další základní datovou strukturou v Pythonu je slovník, který vám umožňuje rychle získat odpovídající hodnotu (value) pomocí klíče (key):

```python
empty_dict = {}                       # Velmi "pythonovská" definice prázdného slovníku  
empty_dict2 = dict()                  # Méně "pythonovská" definice prázdného slovníku  
grades = { "Joel" : 80, "Tim" : 95 }  # Uložení do slovníku  
```

#### [](#字典元素查找 "Vyhledávání prvků ve slovníku")Vyhledávání prvků ve slovníku

Můžete použít hranaté závorky s klíčem k vyhledání odpovídající hodnoty:

```python
joels_grade = grades["Joel"]          # rovno 80  
```

Pokud hledaný klíč ve slovníku neexistuje, vrátí se `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "pro Kate není žádná známka!"  
```

Pomocí `in` můžete zkontrolovat, zda klíč existuje ve slovníku:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Slovníky mají metodu, která vrací výchozí hodnotu, pokud hledaný klíč ve slovníku neexistuje (místo vyvolání výjimky):

```python
joels_grade = grades.get("Joel", 0)   # rovno 80  
kates_grade = grades.get("Kate", 0)   # rovno 0  
no_ones_grade = grades.get("No One")  # vrátí výchozí hodnotu None  
```

#### [](#字典修改 "Úprava slovníků")Úprava slovníků

Pomocí hranatých závorek můžete vytvářet a upravovat páry klíč-hodnota ve slovníku:

```python
grades["Tim"] = 99                    # nahradí starou hodnotu  
grades["Kate"] = 100                  # přidá nový pár klíč-hodnota  
num_students = len(grades)            # rovno 3  
```

Často budeme používat slovníky k vyjádření struktury dat, například takto:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Kromě vyhledávání konkrétních klíčů můžeme také pracovat se všemi klíči následujícím způsobem:

```python
tweet_keys = tweet.keys()             # Získá seznam klíčů  
tweet_values = tweet.values()         # Získá seznam hodnot  
tweet_items = tweet.items()           # Získá n-tice (klíč, hodnota)  
"user" in tweet_keys                  # Vrátí True, používá méně efektivní hledání 'in' v seznamu  
"user" in tweet                       # Více "pythonovské" použití, používá efektivní hledání 'in' ve slovníku  
"joelgrus" in tweet_values            # True  
```

Klíče ve slovníku jsou unikátní a seznamy nemohou být použity jako klíče slovníku. Pokud potřebujete vícesložkový klíč, můžete použít n-tici nebo klíč nějakým způsobem převést na řetězec.

#### [](#内置字典 "Vestavěné slovníky s výchozími hodnotami (defaultdict)")Vestavěné slovníky s výchozími hodnotami (defaultdict)

Pokud se snažíte spočítat frekvenci každého slova v dokumentu, zřejmým přístupem je vytvořit slovník, kde slova slouží jako klíče a jejich frekvence jako odpovídající hodnoty. Poté projdete dokumentem a pro každé slovo, které se již objevilo, zvýšíte jeho hodnotu o 1; pro slova, která se ještě neobjevila, přidáte nový pár klíč-hodnota:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Samozřejmě, můžete také předem zpracovat chybějící klíč takovýmto "nejprve udělej, pak se ptej" způsobem:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Třetí metodou je použití `get`, která se pro zpracování chybějících klíčů osvědčuje:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Vestavěné slovníky s výchozími hodnotami (defaultdict) jsou jako běžné slovníky, s jediným rozdílem: když se pokusíte vyhledat neexistující klíč, `defaultdict` automaticky vytvoří pár klíč-hodnota pomocí zadaného klíče. Pro použití `defaultdict` musíte importovat knihovnu `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() generuje 0  
for word in document:  
    word_counts[word] += 1  
```

Vestavěné slovníky jsou velmi užitečné i se seznamy, běžnými slovníky, a dokonce i s vlastními funkcemi:

```python
dd_list = defaultdict(list)           # list() generuje prázdný seznam  
dd_list[2].append(1)                  # Nyní je dd_list {2: [1]}  
dd_dict = defaultdict(dict)           # dict() generuje prázdný slovník  
dd_dict["Joel"]["City"] = "Seattle"   # Nyní je obsah dd_dict { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Vytvoří slovník, kde hodnota pro klíč je seznam  
dd_pair[2][1] = 1                     # Nyní je obsah dd_pair {2: [0,1]}  
```

Tato metoda je velmi užitečná, protože v budoucnu nebudeme muset kontrolovat existenci klíče, když budeme chtít získat určité hodnoty ze slovníku.

### [](#计数器-Counter "Počítadla (Counter)")Počítadla (Counter)

Počítadlo (Counter) dokáže přímo převést sadu hodnot na objekt podobný slovníku, kde klíčem je prvek ze sady a odpovídající hodnota je počet jeho výskytů. To se často používá při vytváření histogramů:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (přibližně) je { 0 : 2, 1 : 1, 2 : 1 }  
```

Tímto způsobem získáme velmi pohodlný způsob, jak spočítat frekvenci slov:

```python
word_counts = Counter(document)  
```

Počítadlo má také velmi často používanou metodu `most_common`, která dokáže přímo získat několik nejčastějších slov a jejich frekvence:

```python
# Vypíše 10 nejčastějších slov a jejich počet  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#集合-Sets "Množiny (Sets)")Množiny (Sets)

Další datovou strukturou v Pythonu jsou množiny. Množina je kolekce unikátních prvků.  
Množinu lze vytvořit a přidávat do ní prvky takto:

```python
s = set()  
s.add(1)          # s je { 1 }  
s.add(2)          # s je { 1, 2 }  
s.add(2)          # s je { 1, 2 }  
x = len(s)        # rovno 2  
y = 2 in s        # rovno True  
z = 3 in s        # rovno False  
```

Dva hlavní důvody pro použití množin:

Za prvé, operace `in` v množinách je velmi efektivní. Když je počet prvků v datové sadě velmi velký, je zjevně vhodnější vyhledávat prvky ve formě množiny než v seznamu:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Neúspěch, je třeba zkontrolovat každý prvek  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Vyhledávání úspěšné a velmi rychlé  
```

Za druhé, použití množin je velmi pohodlné pro získání unikátních prvků ze sady dat:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

V praxi se však množiny stále nepoužívají tak často jako slovníky a seznamy.

### [](#条件语句 "Podmíněné příkazy")Podmíněné příkazy

Ve většině programovacích jazyků můžete použít `_if_` pro podmíněné větvení takto:

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

Podmíněný příkaz můžete napsat i na jeden řádek, ale to se používá zřídka:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#循环语句 "Cykly")Cykly

#### [](#while-循环 "Cyklus _while_")Cyklus _while_

Cyklus `while` v Pythonu:

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### [](#for-循环 "Cyklus _for_")Cyklus _for_

Častěji se používá cyklus `for-in`:

```python
for x in range(10):  
    print x, "is less than 10"  
```

Složitější logické výrazy mohou používat příkazy `continue` a `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Přeskočí na další iteraci cyklu  
    if x == 5:  
        break             # Úplně opustí cyklus  
    print x  
```

Výsledkem bude výstup 0, 1, 2 a 4.

### [](#真值-Truthiness "Pravdivostní hodnota (Truthiness)")Pravdivostní hodnota (Truthiness)

Booleovské proměnné `Booleans` v Pythonu se používají podobně jako v jiných jazycích, s jediným rozdílem, že první písmeno musí být vždy velké:

```python
one_is_less_than_two = 1 < 2      # je True  
true_equals_false = True == False # je False  
```

Python používá `None` k označení absence hodnoty, podobně jako `null` v jiných jazycích:

```python
x = None  
print x == None        # Vypíše True, není to nejelegantnější  
print x is None        # Vypíše True, je to elegantnější  
```

Python umožňuje používat jiné hodnoty místo booleovských. Následující jsou ekvivalentní `False`:

*   False
*   None
*   [] (prázdný seznam)
*   {} (prázdný slovník)
*   “”
*   set()
*   0
*   0.0

Podobně existuje mnoho ekvivalentů `True`, což vám velmi usnadňuje kontrolu, zda jsou seznamy, řetězce, slovníky atd. prázdné.

Samozřejmě, pokud nemůžete předvídat výsledek, můžete se při používání dopustit chyb:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Jednodušší přístup, který má stejný účinek jako ten výše:

```python
first_char = s and s[0]  
```

Pokud je první hodnota pravdivá, vrátí se druhá hodnota; jinak se vrátí první hodnota.

Podobně, pokud `x` může být číslo nebo `None`, pak takto můžete získat `x`, které bude určitě číslo:

```python
safe_x = x or 0  
```

V Pythonu existuje také funkce `all`, která vrátí `True`, pokud jsou všechny prvky `True`. Funkce `any` vrátí `True`, pokud je alespoň jeden prvek `True`. Například pro seznam, kde je každý prvek "pravdivý", funkce `all` vrátí `True`, jinak vrátí `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} je ekvivalentní 'False'  
any([True, 1, {}])          # True  
all([])                     # True, neexistuje žádný prvek ekvivalentní 'False'  
any([])                     # False, neexistuje žádný prvek ekvivalentní 'True'  
```

**Pro pokročilé čtenáře:**  
[Běžná syntaxe Pythonu v datové vědě (pokročilé)](https://philoli.com/python-tutorails-advanced-level/)
