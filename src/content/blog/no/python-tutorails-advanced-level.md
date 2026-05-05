---
title: Ofte brukt Python-syntaks i datavitenskap (Avansert)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
De siste dagene har jeg lest [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-lenke](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), en utmerket og lettfattelig introduksjon til datavitenskap. Ett av kapitlene gir en fin, kortfattet og klar oversikt over grunnleggende Python-syntaks og avansert syntaks som ofte brukes i datavitenskap. Jeg syntes det var så bra beskrevet at jeg har oversatt det og lagt det ut her som en huskelapp.

[Ofte brukt Python-syntaks i datavitenskap (grunnleggende)](https://philoli.com/python-tutorails-basic-level/)
[Ofte brukt Python-syntaks i datavitenskap (avansert)](https://philoli.com/python-tutorails-advanced-level/)

Dette kapitlet fokuserer på avansert Python-syntaks og funksjoner som er svært nyttige innen databehandling (basert på Python 2.7).

<!--more-->

### Sortering Sorting

Ønsker du å sortere en Python-liste, kan du bruke listens `sort`-metode. Hvis du vil unngå å endre den opprinnelige listen, kan du bruke `sorted`-funksjonen, som returnerer en *ny*, sortert liste:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x forblir uendret
x.sort()            # nå er x = [1,2,3,4]
```
`sort` og `sorted` sorterer lister i stigende rekkefølge som standard.

For å sortere i synkende rekkefølge, kan du angi parameteret `reverse = True`.

Du kan også definere en egen sorteringsfunksjon for å sortere listen basert på en spesifikk nøkkel:

```python
# Sorter etter absoluttverdi i synkende rekkefølge
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Sorter etter ordtelling i synkende rekkefølge
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List comprehensions List Comprehensions

Det er ofte situasjoner hvor vi ønsker å trekke ut spesifikke elementer fra en liste for å lage en ny, endre verdien av noen elementer, eller begge deler. Den idiomatiske Python-måten å gjøre dette på er via list comprehension:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

På lignende vis kan du transformere lister til ordbøker eller sett:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Hvis du ikke trenger å bruke elementene i listen, kan du bruke understrek som variabelnavn:

```python
zeroes = [0 for _ in even_numbers] # Samme lengde som listen even_numbers
```

List comprehensions støtter også flere `for`-løkker:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Totalt 100 par: (0,0), (0,1) ... (9,8), (9,9)
```

Senere `for`-løkker kan bruke resultatet fra tidligere `for`-løkker:

```python
increasing_pairs = [(x, y)                      # Inneholder kun par der x < y
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Vi kommer til å bruke list comprehensions mye fremover.

### Generatorer og iteratorer Generators and Iterators

Et problem med lister er at de raskt kan bli svært store. For eksempel vil `range(1000000)` generere en liste med én million elementer. Hvis du bare behandler ett element av gangen, kan det ta for lang tid (eller tømme minnet). Og i praksis bruker du kanskje bare de første dataene, noe som gjør resten av operasjonen unødvendig.

En generator lar deg derimot iterere kun over de dataene du faktisk trenger. Du kan lage en generator ved å bruke en funksjon med `yield`-uttrykket:

```python
def lazy_range(n):
    """en 'lat' versjon av range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Oversetterens anmerkning:
En generator er også en spesiell type iterator, og `yield` er nøkkelen til generatorens iterasjon. Den fungerer som et pause- og gjenopprettingspunkt for generatorens utførelse; du kan tilordne verdier til `yield`-uttrykket, eller returnere verdien av `yield`-uttrykket. Enhver funksjon som inneholder en `yield`-setning kalles en generator. Når en generator pauses, lagrer den sin nåværende utførelsestilstand og gjenoppretter den ved neste kjøring for å produsere neste iteratorverdi. Å bruke listeiterasjon vil oppta mye minneplass, mens bruk av en generator opptar nesten bare én minneplass, noe som sparer minne.

Denne løkken vil forbruke én `yield`-verdi av gangen, helt til alle er brukt opp:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Faktisk har Python en innebygd funksjon som oppnår den samme effekten som `_lazy_range_`, kalt `xrange` i Python 2 og `range` i Python 3, som er 'lat'.) Dette betyr at du kan lage en uendelig sekvens:

```python
def natural_numbers():
    """Returnerer 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Det anbefales imidlertid ikke å bruke slike utsagn uten en logikk for å avslutte løkken.

**TIP**
> En ulempe ved å iterere med generatorer er at du bare kan iterere gjennom elementene én gang fra start til slutt. Hvis du ønsker å iterere flere ganger, må du enten lage en ny generator hver gang eller bruke en liste.

Den andre måten å lage en generator på er å bruke et comprehension-uttrykk innenfor parenteser:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Vi vet at `items()`-metoden i ordbøker returnerer en liste med alle nøkkel-verdi-parene i ordboken. Men i mange tilfeller bruker vi `iteritems()`-generatormetoden for å iterere, som produserer og returnerer ett nøkkel-verdi-par av gangen.

### Tilfeldighet Randomness
Når vi studerer datavitenskap, vil vi ofte trenge å generere tilfeldige tall. Det er bare å importere `random`-modulen for å bruke den:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genererer et tilfeldig tall
# 0.7579544029403025,         # De tilfeldige tallene er normalisert og ligger i området mellom 0 og 1
# 0.420571580830845,          # Denne funksjonen er den mest brukte for å generere tilfeldige tall
# 0.25891675029296335]
```

Hvis du ønsker reproduserbare resultater, kan du la `random`-modulen generere pseudotilfeldige (dvs. deterministiske) tall basert på en intern tilstand satt med `random.seed`:

```python
random.seed(10)           # set the seed to 10
print random.random()     # 0.57140259469
random.seed(10)           # reset the seed to 10
print random.random()     # 0.57140259469 again
```

Noen ganger bruker vi også `random.randrange`-funksjonen for å generere et tilfeldig tall innenfor et spesifikt område:

```python
random.randrange(10)      # Velger et tilfeldig tall fra range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Velger et tilfeldig tall fra range(3, 6) = [3, 4, 5]
```

Det finnes også andre nyttige metoder, for eksempel `random.shuffle`, som stokker om rekkefølgen på elementene i en liste og lager en ny, tilfeldig arrangert liste:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (resultatet du får, vil sannsynligvis være annerledes)
```

Hvis du vil velge et tilfeldig element fra en liste, kan du bruke `random.choice`-metoden:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Jeg fikk "Bob"
```

Hvis du ønsker å generere en tilfeldig sekvens uten å endre den opprinnelige listen, kan du bruke `random.sample`-metoden:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Du kan velge flere tilfeldige utvalg (med repetisjon) ved å kalle funksjonen flere ganger:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regulære uttrykk Regular Expressions

Regulære uttrykk brukes til tekstsøk og er litt komplekse, men svært nyttige – så mye at det finnes mange bøker som utelukkende handler om dem. Vi vil forklare dem mer detaljert når vi støter på dem, men her er noen eksempler på bruk av regulære uttrykk i Python:

```python
import re
print all([                                 # Alle utsagnene nedenfor returnerer True, fordi:
    not re.match("a", "cat"),               # * 'cat' starter ikke med 'a'
    re.search("a", "cat"),                  # * 'cat' inneholder bokstaven 'a'
    not re.search("c", "dog"),              # * 'dog' inneholder ikke bokstaven 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Deler ordet i tre deler basert på 'a' eller 'b': ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Erstatt sifre med bindestreker
    ])                                      # Utdata: True
```

### Objektorientert programmering Object-Oriented Programming

Som mange andre språk lar Python deg definere klasser som innkapsler data og funksjoner som opererer på dem. Vi bruker dem noen ganger for å gjøre koden vår tydeligere og mer konsis. Den enkleste måten å forklare dem på er sannsynligvis ved å bygge et eksempel med mange kommentarer. Anta at Python ikke hadde et innebygd sett, og vi ønsket å lage vår egen `Set`-klasse. Hvilke funksjoner bør denne klassen ha? For eksempel, gitt et `Set`, må vi kunne legge til elementer, fjerne elementer, og sjekke om det inneholder en bestemt verdi. Så vi vil lage alle disse funksjonene som medlemsfunksjoner i klassen. På denne måten kan vi få tilgang til disse medlemsfunksjonene ved å bruke et punktum etter `Set`-objektet:

```python
# Som konvensjon gir vi klassenavn i _PascalCase_
class Set:
    # Dette er medlemsfunksjoner
    # Hver medlemsfunksjon har en 'self'-parameter først (en annen konvensjon)
    # 'self' refererer til det spesifikke Set-objektet som brukes

    def __init__(self, values=None):
        """Dette er konstruktørfunksjonen
        Denne funksjonen kalles hver gang du oppretter et nytt Set-objekt
        Kan kalles slik:
        s1 = Set() # Et tomt sett
        s2 = Set([1,2,2,3]) # Initialiserer settet med gitte verdier"""
        self.dict = {} # Hver instans av Set har sin egen dict-attributt
        # Vi bruker denne attributten for å holde oversikt over hvert medlem
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Dette er strengrepresentasjonen for Set-objektet
        Du kan se den ved å skrive inn objektet i Python-kommandovinduet eller ved å bruke str()-metoden på objektet"""
        return "Set: " + str(self.dict.keys())

    # Vi representerer medlemskap ved å ha verdien som en nøkkel i self.dict og sette nøkkelverdien til True.
    def add(self, value):
        self.dict[value] = True

    # Hvis parameteret er en nøkkel i ordboken, er den tilsvarende verdien i Set-objektet.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Deretter kan vi bruke `Set` slik:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funksjonelle verktøy Functional Tools

#### Delvise funksjoner partial

Når vi sender funksjoner, vil vi noen ganger bruke en del av en funksjons funksjonalitet for å lage en ny funksjon. Som et enkelt eksempel, anta at vi har en funksjon med to variabler:

```python
def exp(base, power):
    return base ** power
```

Vi ønsker å bruke den til å lage en funksjon som tar én variabel og returnerer resultatet av `exp(2, power)`, altså potensen av 2.

Selvfølgelig kan vi definere en ny funksjon med `def`, selv om dette ikke virker spesielt smart:

```python
def two_to_the(power):
  return exp(2, power)
```

En smartere tilnærming er å bruke `functools.partial`-metoden:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Nå har funksjonen kun én variabel
print two_to_the(3)               # 8
```

Hvis du spesifiserer et navn, kan du også bruke `partial`-metoden til å fylle ut andre parametere:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Hvis du prøver å blande parameterne midt i funksjonen, vil programmet raskt bli rotete, så prøv å unngå denne oppførselen.

#### Map

Vi vil av og til også bruke funksjoner som `map`, `reduce` og `filter` som alternativer til list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Samme som ovenfor
list_doubler = partial(map, double)     # Funksjonen dobler listen
twice_xs = list_doubler(xs)             # Også [2, 4, 6, 8]
```

`map`-metoden kan også brukes til å mappe funksjoner med flere argumenter til flere lister:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter

På lignende vis implementerer `filter` funksjonaliteten til `if`-betingelsen i list comprehensions:

```python
def is_even(x):
    """Returnerer True hvis x er et partall, False hvis x er et oddetall"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Samme som ovenfor
list_evener = partial(filter, is_even)    # Denne funksjonen implementerer filtrering
x_evens = list_evener(xs)                 # Også [2, 4]
```

#### Reduce

`reduce`-metoden slår kontinuerlig sammen det første og andre elementet i en liste, deretter slår den sammen resultatet med det tredje elementet, og gjentar denne prosessen helt til et unikt resultat er oppnådd:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Denne funksjonen reduserer en liste
x_product = list_product(xs)              # Også 24
```

### Enumerate enumerate

Av og til oppstår det situasjoner der vi må iterere gjennom en liste og samtidig bruke både elementet og dets indeks:

```python
# Ikke veldig 'Pythonisk' (ikke veldig konsist eller elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Heller ikke veldig 'Pythonisk' (ikke veldig konsist eller elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Den mest konsise måten er å bruke `enumerate`-metoden, som genererer tupler `(index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

På lignende vis, hvis du kun ønsker å bruke indeksen:

```python
for i in range(len(documents)): do_something(i)   # Ikke konsist
for i, _ in enumerate(documents): do_something(i) # Konsist
```

Vi kommer til å bruke denne metoden mye fremover.

### Zip og argumentutpakking zip and Argument Unpacking

#### Zip

Vi vil ofte `zip` sammen to eller flere lister. `zipping` handler i praksis om å transformere flere lister til en enkelt liste av tilsvarende tupler:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Gir [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumentutpakking Argument Unpacking

Hvis flere lister har ulik lengde, vil zip-prosessen stoppe ved slutten av den korteste listen. Du kan også bruke et litt uvanlig 'unzip'-triks for å pakke ut en liste:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Asterisken brukes her for å utføre argumentutpakking; den bruker elementene i `pairs` som individuelle argumenter til `zip`. Følgende kall har samme effekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Returnerer [('a','b','c'), ('1','2','3')]
```

Argumentutpakking kan også brukes sammen med andre funksjoner:

```python
def add(a, b): return a + b

add(1, 2)           # Returnerer 3
add([1, 2])         # Gir feil
add(*[1, 2])        # Returnerer 3
```

Selv om det ikke er superpraktisk i alle situasjoner, er det et hendig triks for å skrive mer konsis kode.

### Variabelt antall argumenter args and kwargs

Anta at vi skal lage en høyere-ordens funksjon som tar inn en eksisterende funksjon og returnerer en ny funksjon som er den gamle funksjonen multiplisert med 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Eksempel på kjøring:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Men hvis det overførte argumentet er større enn ett, fungerer ikke denne metoden så bra:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Feil: TypeError: g() takes exactly 1 argument (2 given)
```

Derfor må vi spesifisere en funksjon som kan akseptere et vilkårlig antall argumenter, og deretter bruke argumentutpakking for å overføre flere argumenter. Dette kan virke litt magisk:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Utdata:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Når vi definerer en funksjon på denne måten, er `args` (forkortelse for arguments) en tuple som inneholder ubenyttede argumenter, mens `kwargs` (forkortelse for keyword arguments) er en ordbok som inneholder navngitte argumenter.

De kan også brukes når argumentene som sendes inn er lister (eller tupler) eller lignende datastrukturer:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Du kan bruke dette sammen med alle slags uvanlige metoder, men vi bruker det her kun for å løse problemet med å sende et variabelt antall argumenter til høyere-ordens funksjoner:

```python
def doubler_correct(f):
    """Fungerer uansett hva f er"""
    def g(*args, **kwargs):
        """Uansett hvor mange argumenter, overfører denne funksjonen argumentene korrekt til f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Velkommen til datavitenskapens verden!

Ding! Gratulerer, du har nettopp åpnet døren til en ny verden! Nå er det bare å kose seg og utforske videre~

**Relatert lesing:**

[Ofte brukt Python-syntaks i datavitenskap (grunnleggende)](https://philoli.com/python-tutorails-basic-level)
