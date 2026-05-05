---
title: Grundlæggende Python-syntaks i datavidenskab
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
---

Jeg har de seneste dage læst bogen [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-adresse](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), som er en fremragende og lettilgængelig introduktionsbog til datavidenskab. Et af kapitlerne introducerer grundlæggende Python-syntaks og de mere avancerede elementer, der ofte bruges inden for datavidenskab. Jeg synes, det var godt forklaret – meget kortfattet og klart – og derfor har jeg valgt at oversætte det og lægge det her som en huskeliste.
[Grundlæggende Python-syntaks i datavidenskab](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Avanceret Python-syntaks i datavidenskab](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Dette kapitel fokuserer på at introducere grundlæggende Python-syntaks og -funktioner, der er meget nyttige i databehandling (baseret på Python 2.7).

<!--more-->

### Indrykning

Mange sprog bruger parenteser til at styre kodeblokke, men Python bruger indrykning:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # Første linje i "for i"-løkken
    for j in [1, 2, 3, 4, 5]:
        print j      # Første linje i "for j"-løkken
        print i + j  # Sidste linje i "for j"-løkken
    print i          # Sidste linje i "for i"-løkken
print "done looping"
```

Dette gør Python-kode meget let at læse, men det betyder også, at du altid skal være opmærksom på formateringen. Mellemrum inden for parenteser ignoreres, hvilket er nyttigt, når man skriver lange udtryk:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Det gør også koden mere læselig:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Flere linjer

Man kan bruge et omvendt skråstreg for at angive, at to linjer er forbundet (dette bruges sjældent):

```python
two_plus_three = 2 + \
                 3
```

### Moduler

Uanset om det er indbyggede Python-moduler eller tredjepartsmoduler, du selv har downloadet, skal de importeres manuelt for at kunne bruges.

1. Simpel import af hele modulet:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Det importerede `re`-modul bruges til regulære udtryk. Efter import kan du kalde specifikke funktioner ved at bruge modulnavnet som præfiks (`re.`).

2. Hvis modulnavnet allerede er i brug i din kode, kan du importere modulet og give det et andet navn:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. Hvis du er "fræk", kan du importere hele modulet til det nuværende navnerum, hvilket utilsigtet kan overskrive variabler, du allerede har defineret:

```python
match = 10
from re import *  # re-modulet har en 'match'-funktion
print match       # Printer 'match'-funktionen
```

Men da du er en god person, er jeg sikker på, at du ikke vil gøre det.

### Aritmetik

Python 2.7 bruger heltaldivision som standard, så $5 / 2 = 2$. Men ofte ønsker vi ikke heltaldivision, så vi kan importere dette modul:

```python
from __future__ import division
```

Efter import får man $5 / 2 = 2.5$.
Heltaldivision: $5 // 2 = 2$.

### Funktioner

#### Funktionsdefinition

En funktion er en regel, der kan modtage nul eller flere input og returnere et bestemt output. I Python definerer vi en funktion med `def funktionsnavn(parametre)`:

```python
def double(x):
    """Her kan du skrive en forklaring af funktionen,
    f.eks. at den ganger inputtet med 2"""
    # Her kan du skrive funktionens krop, husk indrykning
    return x * 2
```

#### Brug af funktioner

I Python er funktioner 'førsteklasses-borgere' (first-class citizens), hvilket betyder, at vi kan tildele funktioner til variabler og også sende dem som argumenter til andre variabler:

```python
def apply_to_one(f):
    """Kalder funktionen f og bruger 1 som argument"""
    return f(1)
my_double = double          # double refererer til funktionen defineret i forrige afsnit
x = apply_to_one(my_double) # x er lig med 2
```

#### Anonyme funktioner

Man kan også oprette anonyme funktioner med `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Er lig med 5
```

Man kan tildele `lambda`-funktioner til variabler, men de fleste vil råde dig til at bruge `def` i stedet:

```python
another_double = lambda x: 2 * x      # Frarådes
def another_double(x): return 2 * x   # Anbefalet fremgangsmåde
```

Bemærk:

*   `lambda` er kun et udtryk, og funktionskroppen er meget enklere end med `def`.
*   `lambda`'s krop er et udtryk, ikke en kodeblok. Du kan kun indkapsle begrænset logik i et `lambda`-udtryk.

#### Funktionsparametre

Funktionsparametre kan have standardværdier. Hvis der ikke angives et argument for en parameter, bruges standardværdien; ellers bruges den angivne værdi:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Printer "hello"
my_print()            # Printer "my default message"
```

Nogle gange er det også meget nyttigt at angive argumenter direkte via parameternavnet:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Returnerer 5
subtract(0, 5)    # Returnerer -5
subtract(b=5)     # Samme som ovenfor, returnerer -5
```

### Strenge

Man kan bruge enkelt- eller dobbeltanførselstegn til at oprette strenge (anførselstegn skal altid være parrede):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Brug omvendt skråstreg til at repræsentere escape-tegn, f.eks.:

```python
tab_string = "\t"      # Repræsenterer et tabulator-tegn
len(tab_string)        # Er lig med 1
```

Når du vil bruge den omvendte skråstreg selv (f.eks. til Windows-stier eller regulære udtryk), kan du definere den med en rå streng `r""`:

```python
not_tab_string = r"\t" # Repræsenterer tegnene '\' og 't'
len(not_tab_string)    # Er lig med 2
```

Opret strenge over flere linjer ved at bruge tre dobbeltanførselstegn:

```python
multi_line_string = """Dette er den første linje
Dette er den anden linje
Dette er den tredje linje"""
```

### Fejlhåndtering (Exceptions)

Når et program går galt, vil Python udløse en `exception`. Hvis vi ikke håndterer den, vil programmet stoppe med at køre. Exceptions kan fanges med `try`- og `except`-udsagn:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Kan ikke dividere med nul"
```

Selvom exceptions i andre sprog ofte ses som et uønsket fænomen, vil mere exception-håndtering i Python ofte gøre din kode mere kortfattet og ren.

### Lister

#### Oprettelse af lister

En liste er en simpel ordnet samling og den mest grundlæggende datastruktur i Python (svarende til arrays i andre sprog, men lister har nogle ekstra egenskaber). Sådan opretter du en liste:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # Er lig med 3
list_sum = sum(integer_list)      # Er lig med 6
```

#### Adgang til værdier i lister

Du kan tilgå værdier i en liste ved hjælp af kantede parenteser og et indeks:

```python
x = range(10)       # Opretter listen x = [0, 1, ..., 9]
zero = x[0]         # Er lig med 0; listesekvensen starter fra 0
one = x[1]          # Er lig med 1
nine = x[-1]        # Er lig med 9; det sidste element i listen
eight = x[-2]       # Er lig med 8; det næstsidste element i listen
x[0] = -1           # Listen x er nu [-1, 1, 2, 3, ..., 9]
```

#### Udsnit af lister

Du kan skære udsnit af lister med kantede parenteser:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Man kan bruge `in` til at tjekke, om et element er i listen:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Denne måde at søge efter elementer på er ineffektiv og bør kun bruges, hvis listen er meget lille, eller hvis du ikke bekymrer dig om søgetiden.

#### Sammenføjning af lister

I Python er det nemt at sammenføje to lister:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # x er nu [1,2,3,4,5,6]
```

Hvis du ikke vil ændre den originale liste `x`, kan du bruge 'plus'-operatoren til at oprette en ny liste:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # y er nu [1, 2, 3, 4, 5, 6]; x er uændret
```

Det er almindeligt at tilføje et element ad gangen til en liste på denne måde:

```python
x = [1, 2, 3]
x.append(0)           # x er nu [1, 2, 3, 0]
y = x[-1]             # Er lig med 0
z = len(x)            # Er lig med 4
```

#### Opdeling af lister

Hvis du ved, hvor mange elementer der er i listen, er det nemt at opdele den:

```python
x, y = [1, 2]         # x er nu 1, y er 2
```

Hvis antallet af elementer på begge sider af lighedstegnet ikke stemmer overens, får du en `ValueError`. Derfor bruger vi oftere et understregningstegn til at gemme resten af listen:

```python
_, y = [1, 2]         # y == 2, uanset det første element
```

### Tupler

Lister og tupler ligner hinanden meget. Den eneste forskel er, at elementer i et tuple ikke kan ændres.

#### Oprettelse af tupler

Du kan oprette tupler ved at bruge runde parenteser eller slet ingen parenteser:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # my_list er nu [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Kan ikke ændre tuple"
```

Tupler gør det meget nemt at returnere flere værdier fra en funktion:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # Er lig med (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Tupler (og lister) understøtter tildeling af flere elementer samtidigt:

```python
x, y = 1, 2       # x er nu 1, y er 2
x, y = y, x       # Bytter værdierne af to variabler i Python; x er nu 2, y er 1
```

### Ordbøger (Dictionaries)

#### Oprettelse af ordbøger

En anden grundlæggende datastruktur i Python er ordbogen (dictionary), som giver dig mulighed for hurtigt at hente en værdi ved hjælp af en nøgle:

```python
empty_dict = {}                       # En meget 'pythonisk' definition af en tom ordbog
empty_dict2 = dict()                  # En mindre 'pythonisk' definition af en tom ordbog
grades = { "Joel" : 80, "Tim" : 95 }  # Ordbogsopbevaring
```

#### Søgning efter elementer i ordbøger

Du kan bruge kantede parenteser og en nøgle til at finde den tilsvarende værdi:

```python
joels_grade = grades["Joel"]          # Er lig med 80
```

Hvis den nøgle, du søger efter, ikke er i ordbogen, vil det resultere i en `KeyError`:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Ingen karakter for Kate!"
```

Du kan bruge `in` til at tjekke, om en nøgle er i ordbogen:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Ordbøger har en metode, der kan returnere en standardværdi, hvis den søgte nøgle ikke findes (i stedet for at udløse en exception):

```python
joels_grade = grades.get("Joel", 0)   # Er lig med 80
kates_grade = grades.get("Kate", 0)   # Er lig med 0
no_ones_grade = grades.get("No One")  # Returnerer standardværdien None
```

#### Redigering af ordbøger

Du kan bruge kantede parenteser til at oprette og ændre nøgle-værdi-par i en ordbog:

```python
grades["Tim"] = 99                    # Erstatter den gamle værdi
grades["Kate"] = 100                  # Tilføjer et nøgle-værdi-par
num_students = len(grades)            # Er lig med 3
```

Vi vil ofte bruge ordbøger på denne måde til at repræsentere datastrukturer:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Udover at søge efter specifikke nøgler kan vi også manipulere alle nøgler på denne måde:

```python
tweet_keys = tweet.keys()             # Får en liste over nøgler
tweet_values = tweet.values()         # Får en liste over værdier
tweet_items = tweet.items()           # Får en liste over (nøgle, værdi)-tupler
"user" in tweet_keys                  # Returnerer True, bruger in-søgning i liste, som er mindre effektiv
"user" in tweet                       # Mere pythonisk, bruger den effektive in-søgning i ordbogen
"joelgrus" in tweet_values            # True
```

Nøgler i ordbøger skal være unikke, og lister kan ikke bruges som nøgler. Hvis du har brug for en sammensat nøgle, kan du bruge et tuple eller på en eller anden måde konvertere nøglen til en streng.

#### Standardordbøger (defaultdict)

Hvis du forsøger at tælle hyppigheden af hvert ord i et dokument, er en oplagt metode at oprette en ordbog, hvor ordet er nøglen og hyppigheden er den tilsvarende værdi. Derefter kan du gennemgå dokumentet og, hvis et ord allerede er set, øge dets tæller med 1; hvis det er et nyt ord, tilføje et nyt nøgle-værdi-par til ordbogen:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Du kan selvfølgelig også håndtere en manglende nøgle, når den opstår, som denne:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

Den tredje metode er at bruge `get`, som er fremragende til at håndtere manglende nøgler:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

En standardordbog (defaultdict) er ligesom en almindelig ordbog, den eneste forskel er, at når du forsøger at finde en nøgle, der ikke eksisterer, vil den automatisk oprette et nøgle-værdi-par ved hjælp af den nøgle, du har angivet. For at bruge en standardordbog skal du importere `collections`-biblioteket:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() genererer 0
for word in document:
    word_counts[word] += 1
```

Standardordbøger er også meget nyttige i lister, almindelige ordbøger og endda i brugerdefinerede funktioner:

```python
dd_list = defaultdict(list)           # list() genererer en tom liste
dd_list[2].append(1)                  # dd_list er nu {2: [1]}
dd_dict = defaultdict(dict)           # dict() genererer en tom ordbog
dd_dict["Joel"]["City"] = "Seattle"   # dd_dict indeholder nu { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Opretter en ordbog, hvor værdien for en nøgle er en liste
dd_pair[2][1] = 1                     # dd_pair indeholder nu {2: [0,1]}
```

Denne metode er meget nyttig; fremover behøver vi ikke længere at tjekke, om en nøgle eksisterer, når vi skal hente bestemte nøgle-værdi-resultater fra ordbogen.

### Tællere (Counter)

En tæller (Counter) kan direkte konvertere en gruppe af værdier til et ordbogslignende objekt, hvor nøglen er et element fra gruppen, og den tilsvarende værdi er antallet af gange, elementet forekommer. Dette bruges ofte, når man opretter histogrammer:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c er (næsten) { 0 : 2, 1 : 1, 2 : 1 }
```

På denne måde har vi en meget bekvem metode til at tælle ordhyppighed:

```python
word_counts = Counter(document)
```

Tælleren har også en meget nyttig metode, `most_common`, som direkte kan give de mest hyppige ord og deres frekvenser:

```python
# Printer de 10 mest hyppige ord og deres antal
for word, count in word_counts.most_common(10):
    print word, count
```

### Sæt (Sets)

En anden datastruktur i Python er et sæt (set), som er en samling af unikke elementer.
Du kan oprette et sæt og tilføje elementer til det på denne måde:

```python
s = set()
s.add(1)          # s er { 1 }
s.add(2)          # s er { 1, 2 }
s.add(2)          # s er { 1, 2 }
x = len(s)        # Er lig med 2
y = 2 in s        # Er lig med True
z = 3 in s        # Er lig med False
```

To hovedårsager til at bruge sæt:

For det første er `in`-operationen i sæt meget effektiv. Når antallet af elementer i et datasæt er meget stort, er det tydeligvis mere passende at søge efter elementer i et sæt end i en liste:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Fejler, skal tjekke hvert element
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Søgning lykkes, og er hurtig
```

For det andet er det meget bekvemt at bruge sæt til at få de unikke elementer i et datasæt:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

I praksis bruges sæt dog ikke så ofte som ordbøger og lister.

### Betingede udsagn

I de fleste programmeringssprog kan du bruge `if` til at repræsentere betingede forgreninger på denne måde:

```python
if 1 > 2:
    message = "hvis bare 1 var større end to..."
elif 1 > 3:
    message = "elif står for 'else if'"
else:
    message = "når alt andet fejler, brug else (hvis du vil)"
```

Du kan også skrive betingede forgreninger på én linje som dette, men det bruges sjældent:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Løkker

#### `while`-løkker

`while`-løkken i Python:

```python
x = 0
while x < 10:
    print x, "er mindre end 10"
    x += 1
```

#### `for`-løkker

Det er mere almindeligt at bruge `for-in`-løkken:

```python
for x in range(10):
    print x, "er mindre end 10"
```

Mere komplekse logiske udtryk kan bruge `continue`- og `break`-udsagnene:

```python
for x in range(10):
    if x == 3:
        continue          # Går direkte til næste iteration af løkken
    if x == 5:
        break             # Afslutter løkken fuldstændigt
    print x
```

Resultatet vil være 0, 1, 2 og 4.

### Sandhedsværdi (Truthiness)

Booleans i Python bruges stort set som i andre sprog, den eneste forskel er, at det første bogstav skal være stort:

```python
one_is_less_than_two = 1 < 2      # Er True
true_equals_false = True == False # Er False
```

Python bruger `None` til at repræsentere, at en værdi ikke eksisterer, svarende til `null` i andre sprog:

```python
x = None
print x == None        # Printer True, men er ikke elegant
print x is None        # Printer True, mere elegant
```

Python giver dig mulighed for at bruge andre værdier i stedet for boolske værdier. Følgende er alle ækvivalente med `False`:

*   False
*   None
*   [] (en tom liste)
*   {} (en tom ordbog)
*   “”
*   set()
*   0
*   0.0

Der er også mange ækvivalente værdier for `True`, hvilket gør det meget bekvemt at tjekke for tomme lister, tomme strenge, tomme ordbøger osv.

Selvfølgelig, hvis du ikke kan forudse resultatet, kan der opstå fejl under brugen:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

En enklere fremgangsmåde, der har samme effekt som ovenstående:

```python
first_char = s and s[0]
```

Hvis den første værdi er sand, returneres den anden værdi; ellers returneres den første værdi.

På samme måde, hvis `x` kan være et tal eller være tom, kan du opnå et `x`, der helt sikkert er et tal, på denne måde:

```python
safe_x = x or 0
```

Python har også funktionen `all`, som returnerer `True` hvis alle elementer er `True`. Funktionen `any` returnerer `True` hvis mindst ét element er `True`. For eksempel, for en liste hvor hvert element er 'sandt', vil `all`-funktionen returnere `True`, ellers vil den returnere `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} er ækvivalent med "False"
any([True, 1, {}])          # True
all([])                     # True, der eksisterer ikke et element, der er ækvivalent med "False"
any([])                     # False, der eksisterer ikke et element, der er ækvivalent med "True"
```

**Videre læsning:**
[Avanceret Python-syntaks i datavidenskab](https://philoli.com/python-tutorails-advanced-level/)
