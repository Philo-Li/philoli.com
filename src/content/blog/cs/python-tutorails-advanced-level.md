---
title: Častá syntaxe Pythonu v datové vědě (pokročilá)
date: 2018-11-07 23:53:13
tags: Python
categories: Datová věda
mathjax: true
---
V posledních dnech jsem se ponořil do knihy [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF zde](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), která je skvělým, srozumitelným úvodem do datové vědy. Jedna z kapitol představuje základní syntaxi Pythonu a pokročilejší techniky často používané v datové vědě. Přišlo mi to výborně a jasně vysvětlené, a tak jsem se rozhodl to přeložit a uložit sem jako připomínku a referenci.

[Běžná syntaxe Pythonu v datové vědě (základy)](https://philoli.com/python-tutorails-basic-level/)
[Běžná syntaxe Pythonu v datové vědě (pokročilá)](https://philoli.com/python-tutorails-advanced-level/)

Tato kapitola se zaměřuje na představení pokročilé syntaxe a funkcí Pythonu (založených na Pythonu 2.7), které jsou velmi užitečné při zpracování dat.

<!--more-->

### Řazení Sorting

Pokud chcete seřadit seznam v Pythonu, můžete použít metodu `sort` přímo na seznamu. Pokud ale nechcete původní seznam měnit, můžete použít funkci `sorted`, která vrátí nový, seřazený seznam:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x zůstává nezměněno
x.sort()            # nyní x = [1,2,3,4]
# sort nebo sorted ve výchozím nastavení řadí seznam vzestupně.
```

Pokud chcete řadit sestupně, stačí zadat parametr `reverse = True`.

Můžete také definovat vlastní funkci pro řazení, aby se seznam řadil podle konkrétního klíče:

```python
# Seřadit podle absolutní hodnoty sestupně
x = sorted([-4,1,-2,3], key=abs, reverse=True) # je [-4,3,-2,1]
# Seřadit podle počtu výskytů slov sestupně
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List Comprehensions (generátory seznamů)

Často se setkáváme se situací, kdy chceme z existujícího seznamu extrahovat určité prvky a vytvořit nový seznam, nebo změnit hodnoty některých prvků, případně obojí. V Pythonu je idiomatickým způsobem, jak to udělat, použití generátorů seznamů (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Podobně můžete seznamy převést na slovníky nebo množiny:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Pokud nepotřebujete používat samotné prvky seznamu, můžete jako proměnnou použít podtržítko:

```python
zeroes = [0 for _ in even_numbers] # má stejnou délku jako seznam even_numbers
```

Generátory seznamů podporují vícenásobné cykly `for`:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Celkem 100 párů: (0,0) (0,1) ... (9,8), (9,9)
```

Následující cyklus `for` může využít výsledky předchozího cyklu `for`:

```python
increasing_pairs = [(x, y)                      # Obsahuje pouze páry, kde x < y
                    for x in range(10)          # range(lo, hi) se rovná
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
V budoucnu budeme generátory seznamů často používat.

### Generátory a Iterátory Generators and Iterators

Jedním z problémů se seznamy je, že se mohou snadno rozrůst do obrovských rozměrů. Například `range(1000000)` vytvoří seznam s milionem prvků. Pokud zpracováváte data po jednom, může to trvat příliš dlouho (nebo vyčerpat paměť). Ve skutečnosti možná použijete jen prvních pár dat, takže ostatní operace jsou zbytečné.

Generátory vám umožňují iterovat pouze přes data, která skutečně potřebujete. Generátor můžete vytvořit pomocí funkce a výrazu `yield`:

```python
def lazy_range(n):
    """líná verze funkce range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

**Doplnění překladatele:**
Generátor je také speciální typ iterátoru; `yield` je klíčem k implementaci iterace generátorem. Slouží jako bod pozastavení a obnovení vykonávání generátoru. Výrazu `yield` lze přiřadit hodnotu a také z něj lze vrátit hodnotu. Jakákoli funkce obsahující příkaz `yield` se nazývá generátor. Když generátor opustí vykonávání, uloží svůj aktuální stav a při dalším spuštění ho obnoví, aby získal další iterační hodnotu. Používání iterace seznamů zabere velké množství paměti, zatímco generátor zabere zhruba jen jedno paměťové místo, čímž šetří paměť.

Následující cyklus spotřebuje jednu hodnotu z `yield`, dokud nejsou všechny spotřebovány:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Ve skutečnosti Python obsahuje vestavěnou funkci, která funguje jako výše uvedený `_lazy_range_`, nazývá se `xrange`, v Pythonu 3 pak `range`.) To znamená, že můžete vytvořit nekonečnou posloupnost:

```python
def natural_numbers():
    """Vrací 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Nicméně se nedoporučuje používat takové příkazy bez logiky pro ukončení cyklu.

**TIP**
> Nevýhodou iterace s generátory je, že přes prvky lze iterovat pouze jednou od začátku do konce. Pokud chcete iterovat vícekrát, musíte pokaždé vytvořit nový generátor nebo použít seznam.

Druhý způsob vytvoření generátoru: pomocí generátorového výrazu v závorkách:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Víme, že metoda `items()` ve slovníku vrátí seznam všech párů klíč-hodnota ve slovníku, ale častěji používáme metodu generátoru `iteritems()` pro iteraci, která pokaždé vygeneruje a vrátí pouze jeden pár klíč-hodnota.

### Náhodnost Randomness
Při studiu datové vědy budeme často potřebovat generovat náhodná čísla, takže stačí importovat modul `random` a použít ho:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generuje náhodná čísla
# 0.7579544029403025,         # Náhodná čísla jsou normalizována a pohybují se mezi 0 a 1.
# 0.420571580830845,          # Tato funkce je nejpoužívanější pro generování náhodných čísel.
# 0.25891675029296335]
```

Pokud chcete dosáhnout opakovatelných výsledků, můžete nechat modul `random` generovat pseudo-náhodná (tj. deterministická) čísla na základě interního stavu nastaveného pomocí `random.seed`:

```python
random.seed(10)           # nastavit seed na 10
print random.random()     # 0.57140259469
random.seed(10)           # resetovat seed na 10
print random.random()     # opět 0.57140259469
```

Někdy také používáme funkci `random.randrange` k vygenerování náhodného čísla v zadaném rozsahu:

```python
random.randrange(10)      # náhodně vybere číslo z range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # náhodně vybere číslo z range(3, 6) = [3, 4, 5]
```

Existují i další metody, které se někdy hodí. Například `random.shuffle` zamíchá prvky v seznamu a vytvoří nový, náhodně seřazený seznam:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (váš výsledek by se měl lišit)
```

Pokud chcete náhodně vybrat jeden prvek ze seznamu, můžete použít metodu `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Mám "Bob"
```

Pokud chcete vygenerovat náhodnou posloupnost a zároveň nepoškodit původní seznam, můžete použít metodu `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Více náhodných vzorků (s povoleným opakováním) můžete získat opakovaným voláním:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regulární výrazy Regular Expressions

Regulární výrazy se používají k prohledávání textu. Jsou sice zdánlivě složité, ale nesmírně užitečné, a existuje mnoho knih, které se jim věnují. Budeme je podrobněji vysvětlovat, až na ně narazíme v praxi. Zde jsou některé příklady použití regulárních výrazů v Pythonu:

```python
import re
print all([                                 # Všechny následující výrazy vrátí True, protože
    not re.match("a", "cat"),               # * 'cat' nezačíná na 'a'
    re.search("a", "cat"),                  # * 'cat' obsahuje písmeno 'a'
    not re.search("c", "dog"),              # * 'dog' neobsahuje písmeno 'c'
    3 == len(re.split("[ab]", "carbs")),    # * rozděluje slovo na tři části ['c','r','s'] podle 'a' nebo 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * nahradí číslice pomlčkami
    ])                                      # Vypíše True
```

### Objektově orientované programování Object-Oriented Programming

Stejně jako mnoho jiných jazyků, i Python vám umožňuje definovat třídy, které zapouzdřují data, a funkce, které s nimi pracují. Někdy je používáme k tomu, aby byl náš kód jasnější a stručnější. Nejjednodušší bude vysvětlit je na příkladu s mnoha komentáři. Předpokládejme, že nemáme vestavěnou sadu Pythonu, a chtěli bychom si vytvořit vlastní třídu `Set` (množina). Jaké funkce by tato třída měla mít? Například, když máme `Set`, musíme do něj být schopni přidávat položky, odebírat je z něj a kontrolovat, zda obsahuje konkrétní hodnotu. Takže všechny tyto funkce vytvoříme jako členské funkce této třídy. Poté k těmto členským funkcím můžeme přistupovat pomocí tečky za objektem `Set`:

```python
# Dle konvence pojmenováváme třídy stylem _PascalCase_
class Set:
    # Toto jsou členské funkce
    # Každá členská funkce má jako první parametr "self" (další konvence)
    # "self" odpovídá konkrétnímu objektu Set, se kterým se pracuje

    def __init__(self, values=None):
        """Toto je konstruktor
        volá se pokaždé, když vytvoříte nový Set
        můžete jej volat takto:
        s1 = Set() # prázdná množina
        s2 = Set([1,2,2,3]) # inicializuje množinu s danými hodnotami"""
        self.dict = {} # Každá instance Setu má svůj vlastní atribut dict
        # Používáme tento atribut ke sledování každého člena
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Toto je řetězcová reprezentace objektu Set
        můžete ji získat zadáním objektu do příkazového řádku Pythonu nebo pomocí str()"""
        return "Set: " + str(self.dict.keys())

    # Členství budeme reprezentovat tak, že budeme klíči v self.dict a jejich hodnotu nastavíme na True.
    def add(self, value):
        self.dict[value] = True

    # Pokud je parametr klíčem ve slovníku, pak je hodnota v Setu.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Poté můžeme `Set` používat takto:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionální nástroje Functional Tools

#### Částečné funkce partial

Při předávání funkcí se někdy stane, že chceme použít pouze část funkčnosti určité funkce k vytvoření nové funkce. Pro jednoduchý příklad si představme funkci se dvěma proměnnými:

```python
def exp(base, power):
    return base ** power
```

Chtěli bychom ji použít k vytvoření funkce, která bere jednu proměnnou a vrací výsledek mocninné funkce `exp(2, power)`, kde základ je 2.

Samozřejmě bychom mohli definovat novou funkci pomocí `def`, i když to by nebylo moc elegantní:

```python
def two_to_the(power):
  return exp(2, power)
```

Chytřejší způsob je využít metodu `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Nyní má funkce pouze jednu proměnnou
print two_to_the(3)               # 8
```

Pokud jsou parametry pojmenované, můžete pomocí `partial` vyplnit i jiné argumenty:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Pokud se pokusíte argumenty v průběhu funkce zamíchat, program se rychle stane nepřehledným, proto se snažte tomuto chování vyhnout.

#### Mapa map

Občas také používáme funkce `map`, `reduce` a `filter` jako alternativu k funkcionalitě generátorů seznamů:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Stejné jako výše
list_doubler = partial(map, double)     # Funkce zdvojnásobující seznam
twice_xs = list_doubler(xs)             # Také [2, 4, 6, 8]
```

Metoda `map` může být také použita pro mapování funkcí s více argumenty na více seznamů:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtr filter

Podobně filtr implementuje funkcionalitu `if` z generátorů seznamů:

```python
def is_even(x):
    """Vrátí True, pokud je x sudé, False, pokud je x liché."""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Stejné jako výše
list_evener = partial(filter, is_even)    # Tato funkce implementuje filtr
x_evens = list_evener(xs)                 # Také [2, 4]
```

#### Redukce reduce

Metoda `reduce` nepřetržitě kombinuje první a druhý prvek seznamu, poté kombinuje výsledek s třetím prvkem a tento proces opakuje, dokud nezíská jediný výsledek:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Tato funkce redukuje seznam
x_product = list_product(xs)              # Také 24
```

### Enumerace enumerate

Občas nastane situace, kdy při procházení seznamu potřebujete zároveň používat prvek i jeho index:

```python
# Méně pythonovský (a méně elegantní)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Také méně pythonovský (a méně elegantní)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Nejelegantnější způsob je použít metodu `enumerate`, která generuje dvojice `(index, prvek)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Podobně, pokud chcete použít pouze index:

```python
for i in range(len(documents)): do_something(i)   # Není elegantní
for i, _ in enumerate(documents): do_something(i) # Elegantní
```

Tuto metodu budeme v budoucnu často používat.

### Zip a rozbalování argumentů zip and Argument Unpacking

#### Zip

Často potřebujeme "zipovat" dva nebo více seznamů. Zipování je v podstatě převedení více seznamů do jednoho seznamu dvojic (tuples), kde každá dvojice obsahuje odpovídající prvky z původních seznamů:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Výsledek [('a', 1), ('b', 2), ('c', 3)]
```

#### Rozbalování argumentů Argument Unpacking

Pokud mají seznamy různou délku, proces zipování se zastaví na konci nejkratšího seznamu. K rozbalení seznamů můžete také použít zvláštní trik "unzip":

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Hvězdička zde slouží k rozbalení argumentů; použije prvky `pairs` jako jednotlivé argumenty funkce `zip`. Následující volání má stejný efekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # vrátí [('a','b','c'), ('1','2','3')]
```

Rozbalování argumentů lze použít i s jinými funkcemi:

```python
def add(a, b): return a + b

add(1, 2)           # vrátí 3
add([1, 2])         # Chyba
add(*[1, 2])        # vrátí 3
```

Ačkoliv to není vždy praktické, je to šikovný trik, jak učinit kód stručnějším.

### Proměnný počet argumentů args and kwargs

Předpokládejme, že chceme vytvořit funkci vyššího řádu, která přijímá starou funkci a vrací novou funkci, jež je starou funkcí vynásobenou dvěma:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Příklad spuštění:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Pokud se však předá více než jeden argument, tato metoda přestane fungovat:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Chyba TypeError: g() takes exactly 1 argument (2 given)
```

Proto musíme definovat funkci, která dokáže přijímat libovolný počet argumentů, a pak použít rozbalování argumentů k předání více argumentů, což vypadá trochu magicky:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Výstup:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Když definujeme funkci tímto způsobem, `args` (zkratka pro arguments) je n-tice obsahující nepojmenované argumenty, zatímco `kwargs` (zkratka pro keyword arguments) je slovník obsahující pojmenované argumenty.

Mohou být také použity v situacích, kdy předávané argumenty jsou seznamy (nebo n-tice) nebo pole:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Můžete to používat s různými zvláštními metodami, ale my to budeme používat pouze k řešení problému předávání proměnlivého počtu argumentů funkcím vyššího řádu:

```python
def doubler_correct(f):
    """funguje pro jakoukoli funkci f"""
    def g(*args, **kwargs):
        """bez ohledu na to, kolik argumentů má, je správně předá funkci f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Vítejte ve světě datové vědy!

A je to! Gratulujeme, právě jste si otevřeli bránu do nového světa! Teď už se můžete pustit do zábavy~

**Související čtení:**

[Běžná syntaxe Pythonu v datové vědě (základy)](https://philoli.com/python-tutorails-basic-level)
