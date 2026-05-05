---
title: Vanlig Python-syntax inom datavetenskap (Avancerad)
date: 2018-11-07 23:53:13
tags: Python
categories: Datavetenskap
mathjax: true
--- 
De senaste dagarna har jag läst boken [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-länk](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), en utmärkt och lättillgänglig introduktionsbok till datavetenskap. Ett av kapitlen presenterar grundläggande Python-syntax och avancerad syntax som ofta används inom datavetenskap. Jag tyckte att presentationen var utmärkt, mycket koncis och tydlig, så jag har översatt den och publicerat den här som en referens.  
[Vanlig Python-syntax inom datavetenskap (Grundläggande)](https://philoli.com/python-tutorails-basic-level/)  
[Vanlig Python-syntax inom datavetenskap (Avancerad)](https://philoli.com/python-tutorails-advanced-level/)  

Det här kapitlet fokuserar på att introducera avancerad Python-syntax och funktioner som är mycket användbara för databehandling (baserat på Python 2.7).

<!--more-->

### Sortering

För att sortera en Python-lista kan du använda listans `sort`-metod. Om du inte vill ändra den ursprungliga listan kan du använda funktionen `sorted` för att få en ny, sorterad lista:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x är oförändrad
x.sort()            # nu är x = [1,2,3,4]
# sort eller sorted sorterar listor i stigande ordning som standard.
```

Om du vill sortera i fallande ordning kan du ange parametern `reverse = True`.

Du kan också anpassa sorteringsfunktionen för att sortera listan efter ett specifikt nyckelord:

```python
# Sorterar efter absolutvärde i fallande ordning
x = sorted([-4,1,-2,3], key=abs, reverse=True) # är [-4,3,-2,1]
# Sorterar efter antal förekomster av ord i fallande ordning
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List comprehensions

Vi stöter ofta på situationer där vi vill extrahera specifika element från en lista för att skapa en ny, eller ändra värdena på vissa element, eller båda delarna. Det idiomatiska sättet att göra detta i Python är med list comprehensions:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

På liknande sätt kan du omvandla listor till dictionaries eller sets:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Om du inte behöver använda elementen i listan kan du använda ett understreck som variabelnamn:

```python
zeroes = [0 for _ in even_numbers] # Har samma längd som listan even_numbers
```

List comprehensions stöder flera `for`-loopar:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Totalt 100 par: (0,0) (0,1) ... (9,8), (9,9)
```

Efterföljande `for`-loopar kan använda resultatet från tidigare `for`-loopar:

```python
increasing_pairs = [(x, y)                      # Innehåller bara par där x < y
                    for x in range(10)          # range(lo, hi) är lika med
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Vi kommer att använda list comprehensions flitigt i framtiden.

### Generatorer och iteratorer

Ett problem med listor är att de lätt kan bli väldigt stora. Till exempel skapar `range(1000000)` en lista med en miljon element. Om du bara behandlar ett data i taget kan det ta för lång tid (eller minnet kan ta slut). I själva verket kanske du bara använder de första få elementen, vilket gör de andra operationerna överflödiga.

En generator låter dig bara iterera över de data du faktiskt behöver. Du kan skapa en generator med en funktion och ett `yield`-uttryck:

```python
def lazy_range(n):
    """en 'lat' version av range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Kommentar från översättaren:
En generator är en speciell typ av iterator, och `yield` är nyckeln till att implementera dess iteration. Den fungerar som en paus- och återupptagningspunkt för generatorns exekvering. Du kan tilldela värden till `yield`-uttryck, och du kan också returnera värden från dem. Varje funktion som innehåller en `yield`-sats kallas en generator. När generatorn pausar sparas dess nuvarande exekveringstillstånd, och när den återupptas nästa gång återställs detta tillstånd för att producera nästa itererade värde. Att använda listiteration kan förbruka stora mängder minnesutrymme, medan en generator nästan bara förbrukar utrymme för ett enda element, vilket sparar minne.

Följande loop kommer att konsumera ett `yield`-värde i taget tills alla är förbrukade:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Faktum är att Python har en inbyggd funktion som uppnår samma effekt som `_lazy_range_`, kallad `xrange` i Python 2 och `range` i Python 3, som är 'lazy'.) Detta innebär att du kan skapa en oändlig sekvens:

```python
def natural_numbers():
    """Returnerar 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Det är dock inte rekommenderat att använda sådana uttalanden utan logik för att avsluta loopen.

**TIPS**
> En nackdel med att iterera med generatorer är att du bara kan iterera över elementen en gång från början till slut. Om du vill iterera flera gånger måste du antingen skapa en ny generator varje gång eller använda en lista.

Ett annat sätt att skapa en generator är genom ett generatoruttryck med parenteser:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Vi vet att `items()`-metoden i dictionaries returnerar en lista med alla nyckel-värde-par. Men i de flesta fall använder vi `iteritems()`-generatormetoden för att iterera (i Python 2), vilket producerar och returnerar ett nyckel-värde-par i taget.

### Slumpmässighet (Randomness)
När vi studerar datavetenskap kommer vi ofta att behöva generera slumpmässiga tal, så det räcker att importera modulen `random` för att använda den:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genererar ett slumpmässigt tal
# 0.7579544029403025,         # Slumpnumret är normaliserat och ligger mellan 0 och 1
# 0.420571580830845,          # Denna funktion är den vanligaste för att generera slumpmässiga tal
# 0.25891675029296335]
```

Om du vill ha reproducerbara resultat kan du låta `random`-modulen generera pseudorandom (d.v.s. deterministiska) tal baserat på ett internt tillstånd som ställts in med `random.seed`:

```python
random.seed(10)           # sätter seed till 10
print random.random()     # 0.57140259469
random.seed(10)           # återställer seed till 10
print random.random()     # 0.57140259469 igen
```

Ibland använder vi också `random.randrange`-funktionen för att generera ett slumpmässigt tal inom ett specificerat intervall:

```python
random.randrange(10)      # väljer ett slumpmässigt tal från range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # väljer ett slumpmässigt tal från range(3, 6) = [3, 4, 5]
```

Det finns också några metoder som kan vara praktiska. Till exempel blandar `random.shuffle` om elementens ordning i en lista och skapar en slumpmässigt ordnad lista:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (ditt resultat bör vara annorlunda)
```

Om du vill välja ett slumpmässigt element från en lista kan du använda `random.choice`-metoden:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Jag fick "Bob"
```

Om du vill generera en slumpmässig sekvens men inte vill ändra den ursprungliga listan kan du använda `random.sample`-metoden:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Du kan välja flera slumpmässiga urval (med upprepning) genom att anropa funktionen flera gånger:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Reguljära uttryck

Reguljära uttryck används för textsökning. De kan verka lite komplexa men är extremt användbara, och det finns många böcker dedikerade enbart till dem. Vi kommer att förklara dem mer i detalj när vi stöter på dem. Här är några exempel på hur reguljära uttryck används i Python:

```python
import re
print all([                                 # Alla följande påståenden returnerar True, eftersom
    not re.match("a", "cat"),               # * 'cat' börjar inte med 'a'
    re.search("a", "cat"),                  # * 'cat' innehåller bokstaven 'a'
    not re.search("c", "dog"),              # * 'dog' innehåller inte bokstaven 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Delar upp ordet i tre delar baserat på 'a' eller 'b' ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Ersätter siffror med bindestreck
    ])                                      # Utskrift True
```

### Objektorienterad programmering

Precis som många andra språk låter Python dig definiera klasser som inkapslar data och funktioner som opererar på dem. Vi kommer ibland att använda dem för att göra vår kod tydligare och mer koncis. Det enklaste sättet att förklara dem är förmodligen genom att bygga ett exempel med rikliga kommentarer. Anta att Python inte hade inbyggda uppsättningar (`sets`). Då kanske vi skulle vilja skapa vår egen `Set`-klass. Vilka funktioner skulle denna klass behöva ha? Om vi har en `Set` måste vi kunna lägga till objekt i den, ta bort objekt från den, och kontrollera om den innehåller ett specifikt värde. Därför kommer vi att skapa alla dessa funktioner som medlemsfunktioner i klassen. På så sätt kan vi komma åt dessa medlemsfunktioner genom att använda punktnotation efter `Set`-objektet:

```python
# Enligt konvention namnger vi klasser med _PascalCase_
class Set:
    # Dessa är medlemsfunktioner
    # Varje medlemsfunktion har en "self"-parameter först (en annan konvention)
    # "self" refererar till det specifika Set-objekt som används

    def __init__(self, values=None):
        """Detta är konstruktorfunktionen
        Denna funktion anropas varje gång du skapar en ny Set
        Kan anropas så här:
        s1 = Set() # En tom uppsättning
        s2 = Set([1,2,2,3]) # Initierar uppsättningen med angivna värden"""
        self.dict = {} # Varje instans av Set har sin egen `dict`-attribut
        # Vi använder detta attribut för att hålla reda på varje medlem
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Detta är strängrepresentationen av ett Set-objekt
        Du kan få den genom att skriva objektet i Python-konsolen eller genom att skicka objektet till str()-funktionen"""
        return "Set: " + str(self.dict.keys())

    # Vi representerar medlemskap genom att vara en nyckel i self.dict och sätta värdet till True.
    def add(self, value):
        self.dict[value] = True

    # Om argumentet är en nyckel i dictionaryn, finns motsvarande värde i Set.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Sedan kan vi använda `Set` på följande sätt:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funktionella verktyg (Functional Tools)

#### Partiella funktioner (partial)

När vi skickar funktioner vill vi ibland använda en del av en funktion för att skapa en ny funktion. Som ett enkelt exempel, anta att vi har en funktion med två variabler:

```python
def exp(base, power):
    return base ** power
```

Vi vill använda den för att skapa en funktion som tar en variabel och returnerar resultatet av potensfunktionen `exp(2, power)` med basen 2.

Visst, vi kan definiera en ny funktion med `def`, även om det kanske inte är det smartaste sättet:

```python
def two_to_the(power):
  return exp(2, power)
```

Ett smartare sätt är att använda `functools.partial`-metoden:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Denna funktion har nu bara en variabel
print two_to_the(3)               # 8
```

Om du anger namn kan du också använda `partial`-metoden för att fylla i andra parametrar:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Om du försöker att röra till parametrarna mitt i funktionen kommer programmet snabbt att bli rörigt, så försök att undvika sådant beteende.

#### Mappa (map)

Vi kommer ibland också att använda funktioner som `map`, `reduce` och `filter` som alternativ till list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Samma som ovan
list_doubler = partial(map, double)     # Funktionen fördubblar en lista
twice_xs = list_doubler(xs)             # Också [2, 4, 6, 8]
```

`map`-metoden kan också användas för att mappa funktioner med flera argument till flera listor:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrera (filter)

På liknande sätt implementerar `filter` samma funktionalitet som `if` i list comprehensions:

```python
def is_even(x):
    """Returnerar True om x är jämnt, False om x är udda"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Samma som ovan
list_evener = partial(filter, is_even)    # Denna funktion utför filtrering
x_evens = list_evener(xs)                 # Också [2, 4]
```

#### Reducera (reduce)

`reduce`-metoden kombinerar iterativt det första och andra elementet i en lista, sedan kombinerar den resultatet med det tredje elementet, och fortsätter denna process tills ett unikt resultat erhålls:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Denna funktion reducerar en lista
x_product = list_product(xs)              # Också 24
```

### Enumerera (enumerate)

Ibland uppstår situationer där man behöver använda både elementet och dess index när man itererar över en lista:

```python
# Inte så "Pythonskt" (inte så koncist eller elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Inte heller så "Pythonskt" (inte så koncist eller elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Det mest koncisa sättet är att använda `enumerate`-funktionen för att generera tupler `(index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

På liknande sätt, om du bara vill använda indexet:

```python
for i in range(len(documents)): do_something(i)   # Inte koncist
for i, _ in enumerate(documents): do_something(i) # Koncist
```

Vi kommer att använda denna metod ofta framöver.

### Zippa och argumentuppackning (zip and Argument Unpacking)

#### Zippa (zip)

Vi kommer ofta att "zippa" ihop två eller fler listor. Zippning omvandlar i praktiken flera listor till en enda lista med tupler, där varje tupel innehåller motsvarande element från de ursprungliga listorna:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Ger [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumentuppackning (Argument Unpacking)

Om listorna har olika längder, kommer zippningsprocessen att stanna vid slutet av den kortaste listan. Du kan också använda ett knepigt "unzip"-trick för att packa upp en zippad lista:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Asterisken används här för att utföra argumentuppackning, den behandlar elementen i `pairs` som individuella argument till `zip`. Följande anrop har samma effekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Returnerar [('a','b','c'), ('1','2','3')]
```

Argumentuppackning kan även användas med andra funktioner:

```python
def add(a, b): return a + b

add(1, 2)           # Returnerar 3
add([1, 2])         # Fel
add(*[1, 2])        # Returnerar 3
```

Även om det inte alltid är det mest praktiska, är det ett bra trick för att göra koden mer koncis.

### Variabelt antal argument (args and kwargs)

Anta att vi vill skapa en högre ordningens funktion som tar en befintlig funktion och returnerar en ny funktion som är den gamla funktionen multiplicerad med 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Exempel på körning:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Men så fort fler än ett argument skickas, fungerar denna metod inte så bra längre:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Fel: TypeError: g() takes exactly 1 argument (2 given)
```

Därför behöver vi en funktion som kan hantera ett godtyckligt antal argument, och sedan använda argumentuppackning för att skicka flera argument. Detta kan verka lite magiskt:

```python
def magic(*args, **kwargs):
    print "o-namngivna argument:", args
    print "nyckelordsargument:", kwargs
magic(1, 2, key="word", key2="word2")
# Utskrift:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

När vi definierar en funktion på detta sätt är `args` (förkortning för arguments) en tupel som innehåller o-namngivna argument, medan `kwargs` (förkortning för keyword arguments) är en dictionary som innehåller namngivna argument.

De kan också användas när argumenten som skickas är en lista (eller tupel) eller en array:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Du kan använda detta i kombination med olika märkliga metoder, men vi kommer endast att använda det för att lösa problemet med att skicka ett variabelt antal argument till högre ordningens funktioner:

```python
def doubler_correct(f):
    """Fungerar oavsett vad f är"""
    def g(*args, **kwargs):
        """Oavsett hur många argument, skickar denna funktion dem korrekt till f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Välkommen till datavetenskapens värld!

Ding! Grattis, du har nu öppnat dörren till en ny värld! Nu kan du ha kul och utforska!

**Relaterad läsning:**

[Vanlig Python-syntax inom datavetenskap (Grundläggande)](https://philoli.com/python-tutorails-basic-level)
