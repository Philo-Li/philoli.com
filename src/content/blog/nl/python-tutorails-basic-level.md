---
title: Veelgebruikte Python-syntaxis in Data Science (Basis)
date: 2018-11-07 20:53:13
tags: Python
categories: Datawetenschap
mathjax: true
---

De afgelopen dagen heb ik in dit boek gedoken: [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-link](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)). Het is een uitstekende en toegankelijke introductie tot data science. Een van de hoofdstukken gaf een uitstekend en helder overzicht van de basisprincipes van Python en de geavanceerdere syntaxis die vaak wordt gebruikt in data science. Ik vond het zo goed uitgelegd dat ik het hier vertaal als naslagwerk.
[Veelgebruikte Python-syntaxis in Data Science (Basis)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Veelgebruikte Python-syntaxis in Data Science (Gevorderd)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Dit hoofdstuk richt zich op de basisprincipes en functionaliteiten van Python (gebaseerd op Python 2.7) die bijzonder nuttig zijn bij dataverwerking.

<!--more-->

### Spatiegebruik en Indentatie

Veel talen gebruiken accolades om codeblokken te structureren, maar Python gebruikt indentatie:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # Eerste regel van de "for i"-lus
    for j in [1, 2, 3, 4, 5]:
        print j      # Eerste regel van de "for j"-lus
        print i + j  # Laatste regel van de "for j"-lus
    print i          # Laatste regel van de "for i"-lus
print "done looping"
```

Dit maakt Python-code erg gemakkelijk leesbaar, maar het betekent ook dat je altijd op de indentatie moet letten. Spaties binnen haakjes worden genegeerd, wat handig is bij het schrijven van lange expressies:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Het maakt de code ook beter leesbaar:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Regels splitsen

Je kunt een backslash gebruiken om aan te geven dat een regel doorloopt (dit wordt zelden gebruikt):

```python
two_plus_three = 2 + \
                 3
```

### Modules

Of het nu gaat om ingebouwde Python-modules of modules van derden die je zelf hebt gedownload, ze moeten handmatig worden geïmporteerd voordat je ze kunt gebruiken.

1.  De hele module eenvoudigweg direct importeren:

    ```python
    import re
    my_regex = re.compile("[0-9]+", re.I)
    ```

    Hier is de `re`-module geïmporteerd, die wordt gebruikt voor reguliere expressies. Nadat een module is geïmporteerd, kun je de specifieke functies direct aanroepen door de modulenaam als voorvoegsel (`re.`) te gebruiken.

2.  Als de naam van de te importeren module al in de code wordt gebruikt, kun je de module bij het importeren een andere naam geven:

    ```python
    import re as regex
    my_regex = regex.compile("[0-9]+", regex.I)
    ```

3.  Als je stout bent, kun je de hele module importeren in de huidige namespace. Dit kan onbedoeld variabelen overschrijven die je al hebt gedefinieerd:

    ```python
    match = 10
    from re import *  # De 're'-module bevat een functie genaamd 'match'
    print match       # Print de 'match'-functie
    ```

    Maar aangezien je een goed mens bent, ga ik ervan uit dat je dit niet zult doen.

### Rekenkundige Operaties

Python 2.7 gebruikt standaard gehele deling, dus $5 / 2 = 2$. Vaak willen we echter geen gehele deling. Hiervoor kunnen we de volgende module importeren:

```python
from __future__ import division
```

Na importatie krijg je $5 / 2 = 2.5$.
Voor gehele deling gebruik je: $5 // 2 = 2$.

### Functies

#### Functiedefinitie

Een functie is een regel die nul of meer inputs ontvangt en een bepaalde output retourneert. In Python definiëren we een functie met `def functienaam(parameters)`:

```python
def double(x):
    """Hier kun je uitleg schrijven over de functiefunctionaliteit.
    Bijvoorbeeld: deze functie vermenigvuldigt de input met 2."""
    # Hier komt de hoofdcode van de functie, denk aan indentatie.
    return x * 2
```

#### Functiegebruik

In Python zijn functies 'first-class citizens', wat betekent dat we functies kunnen toewijzen aan variabelen en ze als argumenten kunnen doorgeven aan andere functies:

```python
def apply_to_one(f):
    """Roept functie f aan met 1 als argument."""
    return f(1)
my_double = double          # 'double' verwijst naar de hierboven gedefinieerde functie
x = apply_to_one(my_double) # x is gelijk aan 2
```

#### Anonieme functies

Je kunt ook anonieme functies maken met `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Gelijk aan 5
```

Je kunt `lambda`-functies toewijzen aan variabelen, maar de meeste mensen raden aan om zoveel mogelijk `def` te gebruiken:

```python
another_double = lambda x: 2 * x      # Afgeraden
def another_double(x): return 2 * x   # Aanbevolen
```

Aanvullend:

*   `lambda` is slechts een expressie; de functiebody is veel eenvoudiger dan bij `def`.
*   De body van een `lambda` is een expressie, geen codeblok. Je kunt slechts beperkte logica in een `lambda`-expressie verpakken.

#### Functieparameteroverdracht

Functieparameters kunnen standaardwaarden hebben. Als je geen argumenten opgeeft, worden de standaardwaarden gebruikt; anders worden de opgegeven waarden doorgegeven:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Output "hello"
my_print()            # Output "my default message"
```

Soms is het ook erg handig om argumenten direct met hun naam op te geven:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Retourneert 5
subtract(0, 5)    # Retourneert -5
subtract(b=5)     # Zelfde als hierboven, retourneert -5
```

### Strings

Je kunt enkele of dubbele aanhalingstekens gebruiken om strings te maken (de aanhalingstekens moeten altijd gepaard gaan):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Gebruik een backslash om escape-tekens aan te geven, zoals:

```python
tab_string = "\t"      # Representeert een tab-teken
len(tab_string)        # Gelijk aan 1
```

Als je de backslash zelf wilt gebruiken (bijvoorbeeld voor Windows-mappen of reguliere expressies), kun je een "raw string" `r""` gebruiken:

```python
not_tab_string = r"\t" # Representeert de tekens '\' en 't'
len(not_tab_string)    # Gelijk aan 2
```

Gebruik drie dubbele aanhalingstekens om meerregelige strings te maken:

```python
multi_line_string = """Dit is de eerste regel
Dit is de tweede regel
Dit is de derde regel"""
```

### Uitzonderingsafhandeling (Exceptions)

Wanneer een programma een fout tegenkomt, genereert Python een `exception`. Als we deze niet afhandelen, zal het programma stoppen met uitvoeren. Exceptions kunnen worden opgevangen met `try`- en `except`-statements:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Kan niet delen door 0"
```

Hoewel exceptions in andere talen soms als 'slecht' worden beschouwd, kan het in Python juist leiden tot schonere en bondigere code om ze ruimhartig te gebruiken.

### Lijsten

#### Lijsten maken

Lijsten zijn eenvoudige, geordende verzamelingen en de meest fundamentele datastructuur in Python (vergelijkbaar met arrays in andere talen, maar met extra functionaliteiten). Zo maak je een lijst:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # Gelijk aan 3
list_sum = sum(integer_list)      # Gelijk aan 6
```

#### Waarden in lijsten benaderen

Je kunt waarden in een lijst benaderen met vierkante haken en een index:

```python
x = range(10)       # x wordt de lijst [0, 1, ..., 9]
zero = x[0]         # Gelijk aan 0, lijstindices beginnen bij 0
one = x[1]          # Gelijk aan 1
nine = x[-1]        # Gelijk aan 9, het laatste element van de lijst
eight = x[-2]       # Gelijk aan 8, het op één na laatste element van de lijst
x[0] = -1           # De huidige lijst x is nu [-1, 1, 2, 3, ..., 9]
```

#### Lijsten 'slicen'

Je kunt lijsten 'slicen' met vierkante haken:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Je kunt `in` gebruiken om te controleren of een element in een lijst voorkomt:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Deze manier van zoeken is inefficiënt en moet alleen worden gebruikt als de lijst erg klein is of als de zoektijd niet kritiek is.

#### Lijsten samenvoegen

In Python is het heel eenvoudig om twee lijsten samen te voegen:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # x is nu [1, 2, 3, 4, 5, 6]
```

Als je de originele lijst `x` niet wilt wijzigen, kun je de '+'-operator gebruiken om een nieuwe lijst te maken:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # y is nu [1, 2, 3, 4, 5, 6]; x is onveranderd
```

Het is gebruikelijk om elementen één voor één aan een lijst toe te voegen op deze manier:

```python
x = [1, 2, 3]
x.append(0)           # x is nu [1, 2, 3, 0]
y = x[-1]             # Gelijk aan 0
z = len(x)            # Gelijk aan 4
```

#### Lijsten 'uitpakken'

Als je weet hoeveel elementen een lijst bevat, is het gemakkelijk om deze lijst uit te pakken:

```python
x, y = [1, 2]         # x is nu 1, y is nu 2
```

Als het aantal elementen aan beide zijden van de toekenning niet overeenkomt, krijg je een `ValueError`. Daarom gebruiken we vaker een underscore om de rest van de lijst op te vangen:

```python
_, y = [1, 2]         # y == 2, het eerste element wordt genegeerd
```

### Tuples

Lijsten en tuples lijken erg op elkaar. Het enige verschil met lijsten is dat de elementen in een tuple niet kunnen worden gewijzigd.

#### Tuples maken

Je kunt tuples maken met ronde haken of zonder haken:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list = [1, 2]
my_list[1] = 3        # my_list is nu [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Kan tuple niet wijzigen"
```

Tuples zijn erg handig om meerdere waarden gemakkelijk uit een functie te retourneren:

```python
def sum_and_product(x, y):
    return (x + y), (x * y)
sp = sum_and_product(2, 3)    # Gelijk aan (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Tuples (en lijsten) ondersteunen gelijktijdige toewijzing van meerdere elementen:

```python
x, y = 1, 2       # x is nu 1, y is nu 2
x, y = y, x       # Waarden van twee variabelen omwisselen in Python; x is nu 2, y is nu 1
```

### Dictionaries

#### Dictionaries maken

Een andere fundamentele datastructuur in Python is de dictionary (woordenboek). Hiermee kun je snel waarden ophalen met behulp van sleutels:

```python
empty_dict = {}                       # Zeer Pythonische definitie van een lege dictionary
empty_dict2 = dict()                  # Minder Pythonische definitie van een lege dictionary
grades = { "Joel" : 80, "Tim" : 95 }  # Dictionary opslag
```

#### Elementen in een dictionary zoeken

Je kunt met vierkante haken en de sleutel de bijbehorende waarde opzoeken:

```python
joels_grade = grades["Joel"]          # Gelijk aan 80
```

Als de gezochte sleutel niet in de dictionary voorkomt, krijg je een `KeyError`:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Geen cijfer voor Kate!"
```

Je kunt met `in` controleren of een sleutel in de dictionary voorkomt:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Een dictionary heeft ook een methode die een standaardwaarde retourneert wanneer de gezochte sleutel niet in de dictionary voorkomt (in plaats van een exception te genereren):

```python
joels_grade = grades.get("Joel", 0)   # Gelijk aan 80
kates_grade = grades.get("Kate", 0)   # Gelijk aan 0
no_ones_grade = grades.get("No One")  # Retourneert de standaardwaarde None
```

#### Dictionaries wijzigen

Je kunt vierkante haken gebruiken om sleutel-waardeparen in een dictionary te maken of te wijzigen:

```python
grades["Tim"] = 99                    # Vervangt de oude waarde
grades["Kate"] = 100                  # Voegt een sleutel-waardepaar toe
num_students = len(grades)            # Gelijk aan 3
```

We zullen dictionaries vaak gebruiken om datastructuren als volgt weer te geven:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Naast het zoeken naar specifieke sleutels, kunnen we ook alle sleutels als volgt manipuleren:

```python
tweet_keys = tweet.keys()             # Krijgt een lijst met sleutels
tweet_values = tweet.values()         # Krijgt een lijst met waarden
tweet_items = tweet.items()           # Krijgt een lijst met (sleutel, waarde)-tuples
"user" in tweet_keys                  # Retourneert True, gebruikt de inefficiënte 'in'-zoekactie van een lijst
"user" in tweet                       # Meer Pythonische manier, gebruikt de efficiënte 'in'-zoekactie van een dictionary
"joelgrus" in tweet_values            # True
```

Sleutels in een dictionary zijn uniek en lijsten kunnen niet als sleutels worden gebruikt. Als je een sleutel met meerdere delen nodig hebt, kun je een tuple gebruiken, of de sleutel op de een of andere manier omzetten naar een string.

#### Default Dictionaries

Als je de frequentie van elk woord in een document probeert te tellen, is een voor de hand liggende aanpak om een dictionary te maken, waarbij het woord de sleutel is en de frequentie de bijbehorende waarde. Vervolgens loop je door het document; als een woord al eerder voorkwam, verhoog je de corresponderende waarde in de dictionary met 1. Als het woord nieuw is, voeg je een nieuw sleutel-waardepaar toe aan de dictionary:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Natuurlijk kun je ook proactief omgaan met een ontbrekende sleutel door een "ask for forgiveness, not permission"-aanpak te gebruiken:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

Een derde methode is het gebruik van `get()`, wat uitstekend werkt bij het omgaan met ontbrekende sleutels:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Een default dictionary werkt net als een gewone dictionary, met als enige verschil dat wanneer je probeert een sleutel op te zoeken die niet bestaat, de default dictionary automatisch een sleutel-waardepaar creëert met behulp van de door jou opgegeven sleutel. Om een default dictionary te gebruiken, moet je de `collections`-bibliotheek importeren:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() genereert 0
for word in document:
    word_counts[word] += 1
```

Default dictionaries zijn ook erg handig met lijsten, gewone dictionaries en zelfs aangepaste functies:

```python
dd_list = defaultdict(list)           # list() genereert een lege lijst
dd_list[2].append(1)                  # dd_list is nu {2: [1]}
dd_dict = defaultdict(dict)           # dict() genereert een lege dictionary
dd_dict["Joel"]["City"] = "Seattle"   # dd_dict is nu { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Creëert een dictionary waarbij de waarde voor een sleutel een lijst is
dd_pair[2][1] = 1                     # dd_pair is nu {2: [0,1]}
```

Deze methode is erg nuttig, omdat we later bij het ophalen van waarden uit de dictionary niet meer hoeven te controleren of de sleutel bestaat.

### Tellers (Counters)

Counters kunnen direct een groep waarden omzetten in een dictionary-achtig object, waarbij de sleutel een element uit de groep is en de corresponderende waarde het aantal keren dat het element voorkomt. Dit wordt vaak gebruikt bij het maken van histogrammen:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c is (ongeveer) { 0 : 2, 1 : 1, 2 : 1 }
```

Zo hebben we een erg handige methode om woordfrequenties te tellen:

```python
word_counts = Counter(document)
```

Een andere veelgebruikte methode van Counter is `most_common`, die direct de top 10 meest voorkomende woorden en hun frequenties kan retourneren:

```python
# Print de 10 meest voorkomende woorden en hun tellingen
for word, count in word_counts.most_common(10):
    print word, count
```

### Sets

Een andere datastructuur in Python is de set, een verzameling van unieke elementen.
Zo maak je een set en voeg je elementen toe:

```python
s = set()
s.add(1)          # s is { 1 }
s.add(2)          # s is { 1, 2 }
s.add(2)          # s is { 1, 2 }
x = len(s)        # Gelijk aan 2
y = 2 in s        # Gelijk aan True
z = 3 in s        # Gelijk aan False
```

De twee belangrijkste redenen om sets te gebruiken:

Ten eerste is de `in`-operatie in sets zeer efficiënt. Wanneer een dataset een zeer groot aantal elementen bevat, is het duidelijk geschikter om elementen in een set te zoeken dan in een lijst:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Faalt, moet elk element controleren
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Zoekopdracht succesvol, en snel
```

Ten tweede is het gebruik van sets erg handig om de unieke elementen in een groep data te krijgen:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

In de praktijk worden sets echter minder vaak gebruikt dan dictionaries en lijsten.

### Conditionele Statements

In de meeste programmeertalen kun je conditionele vertakkingen aangeven met `if` als volgt:

```python
if 1 > 2:
    message = "was 1 maar groter dan twee..."
elif 1 > 3:
    message = "elif staat voor 'else if'"
else:
    message = "als al het andere faalt, gebruik dan else (als je wilt)"
```

Je kunt ook conditionele statements op één regel schrijven, maar dit wordt zelden gebruikt:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Lusstatements

#### `while`-lussen

De `while`-lus in Python:

```python
x = 0
while x < 10:
    print x, "is kleiner dan 10"
    x += 1
```

#### `for`-lussen

Vaker wordt de `for-in`-lus gebruikt:

```python
for x in range(10):
    print x, "is kleiner dan 10"
```

Complexere logische expressies kunnen `continue`- en `break`-statements gebruiken:

```python
for x in range(10):
    if x == 3:
        continue          # Ga direct naar de volgende iteratie
    if x == 5:
        break             # Verlaat de lus volledig
    print x
```

Het resultaat zal 0, 1, 2 en 4 zijn.

### Waarheidswaarden (Truthiness)

Booleaanse variabelen in Python werken vergelijkbaar met andere talen, met als enige verschil dat de eerste letter altijd een hoofdletter moet zijn:

```python
one_is_less_than_two = 1 < 2      # Is True
true_equals_false = True == False # Is False
```

Python gebruikt `None` om aan te geven dat een waarde niet bestaat, vergelijkbaar met `null` in andere talen:

```python
x = None
print x == None        # Output True, minder elegant
print x is None        # Output True, eleganter
```

Python staat toe dat je andere waarden gebruikt in plaats van booleaanse waarden; de volgende zijn allemaal equivalent aan `False`:

*   False
*   None
*   [] (een lege lijst)
*   {} (een lege dictionary)
*   “” (een lege string)
*   set() (een lege set)
*   0
*   0.0

Op dezelfde manier zijn er veel equivalenten van `True`, wat het erg handig maakt om te controleren op lege lijsten, lege strings, lege dictionaries, enzovoort.

Natuurlijk, als je het resultaat niet kunt voorspellen, kan dit leiden tot fouten tijdens het gebruik:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Een eenvoudigere aanpak, die hetzelfde effect heeft als de bovenstaande:

```python
first_char = s and s[0]
```

Als de eerste waarde waar is, wordt de tweede waarde geretourneerd; anders wordt de eerste waarde geretourneerd.

Op dezelfde manier, als `x` een getal kan zijn of leeg, kun je zo een `x` krijgen die zeker een getal is:

```python
safe_x = x or 0
```

Python heeft ook een `all`-functie, die `True` retourneert als elk element `True` is. De `any`-functie retourneert `True` als ten minste één element `True` is. Bijvoorbeeld, voor een lijst waarvan elk element "waar" is, retourneert de `all`-functie `True`, anders `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} is equivalent aan "False"
any([True, 1, {}])          # True
all([])                     # True, er bestaat geen element dat equivalent is aan "False"
any([])                     # False, er bestaat geen element dat equivalent is aan "True"
```

**Verder lezen:**
[Veelgebruikte Python-syntaxis in Data Science (Gevorderd)](https://philoli.com/python-tutorails-advanced-level/)
