---
title: Veelvoorkomende Python-syntaxis in data science (gevorderd)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
De afgelopen dagen heb ik gelezen in [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-adres](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) ), een uitstekend en toegankelijk introductieboek voor data science. Een van de hoofdstukken behandelt de basis- en geavanceerde Python-syntaxis die veel wordt gebruikt in data science. De uitleg vond ik erg duidelijk en beknopt, dus heb ik besloten deze hier te vertalen als naslagwerk.
[Veelvoorkomende Python-syntaxis in data science (basis)](https://philoli.com/python-tutorails-basic-level/)
[Veelvoorkomende Python-syntaxis in data science (gevorderd)](https://philoli.com/python-tutorails-advanced-level/)

Dit hoofdstuk richt zich op de geavanceerde Python-syntaxis en -functionaliteiten die zeer nuttig zijn bij gegevensverwerking (gebaseerd op Python 2.7).

<!--more-->

### Sorteren

Als je een Python-lijst wilt sorteren, kun je de `sort`-methode van de lijst gebruiken. Als je de originele lijst niet wilt aanpassen, kun je de `sorted`-functie gebruiken; deze retourneert dan een nieuwe, gesorteerde lijst:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x blijft ongewijzigd
x.sort()            # nu is x = [1,2,3,4]
# sort of sorted sorteert lijsten standaard in oplopende volgorde.
```

Om in aflopende volgorde te sorteren, kun je de parameter `reverse = True` opgeven.

Je kunt ook een aangepaste sorteerfunctie definiëren, zodat de lijst op een specifieke sleutel wordt gesorteerd:

```python
# Sorteren op absolute waarde, aflopend
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Sorteren op woordfrequentie, aflopend
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Lijstbegrippen List Comprehensions

Vaak willen we specifieke elementen uit een lijst halen om een nieuwe lijst te vormen, of de waarden van sommige elementen wijzigen, of beide. De idiomatische Python-manier hiervoor zijn lijstbegrippen (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Op vergelijkbare wijze kun je lijsten omzetten in dictionaries of sets:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Als je de elementen in de lijst niet nodig hebt, kun je een underscore als variabele gebruiken:

```python
zeroes = [0 for _ in even_numbers] # Heeft dezelfde lengte als de lijst even_numbers
```

Lijstbegrippen ondersteunen meerdere `for`-lussen:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Totaal 100 paren: (0,0) (0,1) ... (9,8), (9,9)
```

Latere `for`-lussen kunnen gebruikmaken van de resultaten van eerdere `for`-lussen:

```python
increasing_pairs = [(x, y)                      # Bevat alleen paren waar x < y
                    for x in range(10)          # range(lo, hi) is gelijk aan
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
We zullen lijstbegrippen in de toekomst veelvuldig gebruiken.

### Generators en Iterators

Een probleem met lijsten is dat ze ongemerkt erg groot kunnen worden. Zo genereert `range(1000000)` een lijst met een miljoen elementen. Als je dan slechts één item tegelijk verwerkt, kan dit lang duren (of zelfs leiden tot geheugenproblemen). In de praktijk heb je soms alleen de eerste paar items nodig, waardoor de rest van de bewerkingen overbodig zijn.

Generators stellen je in staat om alleen over de gegevens te itereren die je daadwerkelijk nodig hebt. Je kunt een generator maken met behulp van een functie en de `yield`-expressie:

```python
def lazy_range(n):
    """een 'luie' versie van range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Generators zijn zelf ook een soort speciale iterators. `yield` is cruciaal voor het realiseren van iteratie in een generator. Het fungeert als een pauze- en hervatpunt voor de uitvoering van de generator; je kunt een waarde toewijzen aan de `yield`-expressie, of de waarde van de `yield`-expressie retourneren. Elke functie die een `yield`-statement bevat, wordt een generator genoemd. Wanneer een generator onderbroken wordt, bewaart hij zijn huidige uitvoeringsstatus en herstelt deze bij de volgende aanroep om de volgende iteratiewaarde te verkrijgen. Het gebruik van lijstiteratie kan veel geheugenruimte in beslag nemen, terwijl een generator vrijwel slechts één geheugenlocatie in beslag neemt, wat leidt tot aanzienlijke geheugenbesparing.

De volgende lus verbruikt één `yield`-waarde per keer, totdat alles is verbruikt:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Overigens heeft Python een ingebouwde functie die hetzelfde doet als `_lazy_range_`, genaamd `xrange` in Python 2 en `range` in Python 3.) Dit betekent dat je een oneindige reeks kunt maken:

```python
def natural_numbers():
    """Retourneert 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Het is echter niet aan te raden om dergelijke constructies zonder exit-logica in je lus te gebruiken.

**TIP**
> Een nadeel van het itereren met generators is dat je de elementen slechts één keer van begin tot eind kunt doorlopen. Als je meerdere keren wilt itereren, moet je elke keer een nieuwe generator aanmaken of een lijst gebruiken.

Een tweede manier om een generator te maken: met behulp van een comprehension-uitdrukking tussen haakjes:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

We weten dat de `items()`-methode van een dictionary een lijst met alle sleutel-waardeparen retourneert. Echter, in veel gevallen gebruiken we de `iteritems()`-generatormethode om te itereren, die telkens slechts één sleutel-waardepaar produceert en retourneert.

### Willekeurigheid Randomness

Tijdens het leren van data science zullen we vaak willekeurige getallen moeten genereren. Dit kan eenvoudig door de `random`-module te importeren:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genereert willekeurige getallen
# 0.7579544029403025,         # De willekeurige getallen zijn genormaliseerd en liggen tussen 0 en 1
# 0.420571580830845,          # Deze functie is de meest gebruikte voor het genereren van willekeurige getallen
# 0.25891675029296335]
```

Als je reproduceerbare resultaten wilt, kun je de `random`-module pseudowillekeurige (dat wil zeggen, deterministische) getallen laten genereren op basis van de interne status die is ingesteld met `random.seed`:

```python
random.seed(10)           # stel de seed in op 10
print random.random()     # 0.57140259469
random.seed(10)           # reset de seed op 10
print random.random()     # 0.57140259469 opnieuw
```

Soms gebruiken we ook de `random.randrange`-functie om een willekeurig getal binnen een opgegeven bereik te genereren:

```python
random.randrange(10)      # kiest willekeurig een getal uit range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # kiest willekeurig een getal uit range(3, 6) = [3, 4, 5]
```

Er zijn ook handige methoden zoals `random.shuffle`, die de volgorde van elementen in een lijst door elkaar husselt, waardoor een willekeurig gerangschikte lijst ontstaat:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (je resultaat zou anders moeten zijn)
```

Als je één element willekeurig uit een lijst wilt kiezen, kun je de `random.choice`-methode gebruiken:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Ik kreeg "Bob"
```

Als je een willekeurige reeks wilt genereren zonder de originele lijst te wijzigen, kun je de `random.sample`-methode gebruiken:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Je kunt meerdere willekeurige steekproeven selecteren (met herhaling toegestaan) door de functie herhaaldelijk aan te roepen:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Reguliere Expressies Regular Expressions

Reguliere expressies worden gebruikt voor tekstzoeken. Ze zijn enigszins complex maar buitengewoon nuttig, en er zijn talloze boeken die er volledig aan gewijd zijn. We zullen ze gedetailleerder uitleggen wanneer we ze tegenkomen. Hier zijn enkele voorbeelden van het gebruik van reguliere expressies in Python:

```python
import re
print all([                                 # Alle onderstaande uitdrukkingen retourneren True, omdat
    not re.match("a", "cat"),               # * 'cat' niet begint met 'a'
    re.search("a", "cat"),                  # * 'cat' de letter 'a' bevat
    not re.search("c", "dog"),              # * 'dog' de letter 'c' niet bevat
    3 == len(re.split("[ab]", "carbs")),    # * het woord op basis van 'a' of 'b' in drie delen splitst ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * cijfers vervangt door een koppelteken
    ])                                      # Output True
```

### Object-georiënteerd programmeren Object-Oriented Programming

Net als veel andere talen stelt Python je in staat om klassen te definiëren die gegevens inkapselen en functies die daarop werken. Soms gebruiken we dit om onze code duidelijker en beknopter te maken. Het is waarschijnlijk het eenvoudigst om het uit te leggen aan de hand van een voorbeeld met veel commentaar. Stel dat er geen ingebouwde Python-sets zouden zijn; dan zouden we misschien onze eigen `Set`-klasse willen creëren. Welke functionaliteiten zou zo'n klasse moeten bieden? Bijvoorbeeld, we zouden items moeten kunnen toevoegen aan een `Set`, er items uit moeten kunnen verwijderen, en moeten kunnen controleren of het een specifieke waarde bevat. Al deze functionaliteiten zullen we als lidfuncties van de klasse implementeren. Zo kunnen we deze lidfuncties na het `Set`-object aanroepen met een punt:

```python
# Volgens conventie geven we klassen _PascalCase_-namen
class Set:
    # Dit zijn lidfuncties
    # Elke lidfunctie heeft een "self"-parameter als eerste argument (een andere conventie)
    # "self" verwijst naar het specifieke Set-object dat wordt gebruikt

    def __init__(self, values=None):
        """Dit is de constructorfunctie
        Deze functie wordt aangeroepen telkens wanneer je een nieuwe Set maakt
        Kan als volgt worden aangeroepen:
        s1 = Set() # lege set
        s2 = Set([1,2,2,3]) # initialiseert de set met opgegeven waarden"""
        self.dict = {} # Elke instantie van Set heeft zijn eigen dict-attribuut
        # We gebruiken dit attribuut om elk lid bij te houden
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Dit is de stringrepresentatie van het Set-object
        Je kunt dit oproepen door de string in het Python-commandovenster te typen of door str() aan het object door te geven"""
        return "Set: " + str(self.dict.keys())

    # We geven lidmaatschap aan door een waarde als sleutel in self.dict te plaatsen en de waarde op True in te stellen
    def add(self, value):
        self.dict[value] = True

    # Als de parameter een sleutel in de dictionary is, bevindt de corresponderende waarde zich in de Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Vervolgens kunnen we `Set` als volgt gebruiken:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Functionele Hulpmiddelen Functional Tools

#### Partiële functies partial

Bij het doorgeven van functies willen we soms een deel van de functionaliteit van een bepaalde functie gebruiken om een nieuwe functie te creëren. Een eenvoudig voorbeeld: stel dat we een functie hebben met twee variabelen:

```python
def exp(base, power):
    return base ** power
```

We willen deze gebruiken om een functie te maken die één variabele als invoer neemt en het resultaat van de machtsfunctie `exp(2, power)` retourneert, waarbij 2 de basis is.

Natuurlijk kunnen we een nieuwe functie definiëren met `def`, hoewel dat niet erg elegant is:

```python
def two_to_the(power):
  return exp(2, power)
```

Een slimmere aanpak is het gebruik van de `functools.partial`-methode:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Deze functie heeft nu slechts één variabele
print two_to_the(3)               # 8
```

Als je namen opgeeft, kun je de `partial`-methode ook gebruiken om andere parameters in te vullen:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Als je probeert om parameters te misbruiken of te knoeien met de parameters midden in een functie, zal de code snel onoverzichtelijk worden, dus probeer dit gedrag zoveel mogelijk te vermijden.

#### Map

Soms gebruiken we ook functies zoals `map`, `reduce` en `filter` als alternatief voor de functionaliteit van lijstbegrippen:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Idem
list_doubler = partial(map, double)     # De functie verdubbelt een lijst
twice_xs = list_doubler(xs)             # Ook [2, 4, 6, 8]
```

De `map`-methode kan ook worden gebruikt om functies met meerdere parameters te koppelen aan meerdere lijsten:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter

Op vergelijkbare wijze implementeert `filter` de functionaliteit van `if` in lijstbegrippen:

```python
def is_even(x):
    """Retourneert True als x even is, False als x oneven is"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Idem
list_evener = partial(filter, is_even)    # Deze functie implementeert de filterfunctionaliteit
x_evens = list_evener(xs)                 # Ook [2, 4]
```

#### Reduce

De `reduce`-methode voegt constant het eerste en tweede element van een lijst samen, voegt het resultaat vervolgens samen met het derde element, en herhaalt dit proces totdat er één uniek resultaat is verkregen:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Deze functie reduceert een lijst
x_product = list_product(xs)              # Ook 24
```

### Enumerate

Af en toe komt het voor dat we bij het doorlopen van een lijst zowel het element als de bijbehorende index nodig hebben:

```python
# Minder Pythonic (minder beknopt en elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Eveneens minder Pythonic (minder beknopt en elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

De meest beknopte manier is om de `enumerate`-methode te gebruiken om tuples `(index, element)` te genereren:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Op vergelijkbare wijze, als je alleen de index wilt gebruiken:

```python
for i in range(len(documents)): do_something(i)   # Niet beknopt
for i, _ in enumerate(documents): do_something(i) # Beknopt
```

We zullen deze methode later vaak gebruiken.

### Zip en Argument Unpacking

#### Zip

We zullen vaak twee of meer lijsten zippen. Zippen is eigenlijk het omzetten van meerdere lijsten naar een enkele lijst van corresponderende tuples:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Resulteert in [('a', 1), ('b', 2), ('c', 3)]
```

#### Argument Unpacking

Als de lengtes van meerdere lijsten niet overeenkomen, stopt het zippen aan het einde van de kortste lijst. Je kunt ook een vreemde "unzip"-techniek gebruiken om lijsten uit te pakken:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

De asterisk wordt gebruikt om argumenten uit te pakken, waarbij de elementen van `pairs` als afzonderlijke argumenten voor `zip` worden gebruikt. De volgende aanroep heeft hetzelfde effect:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Retourneert [('a','b','c'), ('1','2','3')]
```

Argument unpacking kan ook worden gebruikt in combinatie met andere functies:

```python
def add(a, b): return a + b

add(1, 2)           # Retourneert 3
add([1, 2])         # Foutmelding
add(*[1, 2])        # Retourneert 3
```

Hoewel het niet altijd even praktisch is, is het een handige truc om code beknopter te maken.

### Args en Kwargs

Stel dat we een hogere-orde-functie willen maken die een bestaande functie als invoer neemt en een nieuwe functie retourneert, waarbij de nieuwe functie het resultaat van de oude functie met 2 vermenigvuldigt:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Voorbeeld:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Echter, zodra er meer dan één argument wordt doorgegeven, werkt deze methode niet meer goed:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Foutmelding TypeError: g() takes exactly 1 argument (2 given)
```

Daarom moeten we een functie specificeren die een willekeurig aantal argumenten kan opnemen, en vervolgens argument unpacking gebruiken om meerdere argumenten door te geven. Dit ziet er een beetje magisch uit:

```python
def magic(*args, **kwargs):
    print "onbenoemde args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Uitvoer:
# onbenoemde args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Wanneer we een functie op deze manier definiëren, is `args` (afkorting van arguments) een tuple met onbenoemde argumenten, terwijl `kwargs` (afkorting van keyword arguments) een dictionary is die benoemde argumenten bevat.

Ze kunnen ook worden gebruikt wanneer de doorgegeven argumenten lijsten (of tuples) of arrays zijn:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Je kunt het met allerlei ongebruikelijke methoden gebruiken, maar wij gebruiken het alleen om het probleem op te lossen van hogere-orde-functies die een variabel aantal argumenten doorgeven:

```python
def doubler_correct(f):
    """Werkt effectief, ongeacht wat f is"""
    def g(*args, **kwargs):
        """Ongeacht hoeveel argumenten er zijn, deze functie geeft de argumenten correct door aan f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Welkom in de wereld van data science!

Ding! Gefeliciteerd, je hebt zojuist de deur naar een nieuwe wereld geopend! Nu kun je heerlijk aan de slag gaan~

**Gerelateerde artikelen:**

[Veelvoorkomende Python-syntaxis in data science (basis)](https://philoli.com/python-tutorails-basic-level)
