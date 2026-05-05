---
title: Avanceret Python-syntaks til datalogi
date: 2018-11-07 23:53:13
tags: Python
categories: Datavidenskab
mathjax: true
---
De seneste par dage har jeg læst bogen [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-adresse](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), som er en fremragende og lettilgængelig introduktion til datalogi. Et af kapitlerne præsenterede grundlæggende Python-syntaks og avanceret syntaks, der ofte bruges i datalogi. Jeg syntes, det var en rigtig god og overskuelig gennemgang, så jeg har oversat den her som en huskeliste.
[Almindelig Python-syntaks i datalogi (grundlæggende)](https://philoli.com/python-tutorails-basic-level/)
[Almindelig Python-syntaks i datalogi (avanceret)](https://philoli.com/python-tutorails-advanced-level/)

Dette kapitel fokuserer på at introducere avanceret Python-syntaks og -funktionalitet, som er yderst nyttig inden for databehandling (baseret på Python 2.7).

<!--more-->

### Sortering (Sorting)

Hvis du vil sortere en Python-liste, kan du bruge listens `sort`-metode. Hvis du ikke vil ændre den originale liste, kan du bruge `sorted`-funktionen, som returnerer en ny, sorteret liste:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x er uændret
x.sort()            # x er nu = [1,2,3,4]
```
`sort` eller `sorted` sorterer lister i stigende rækkefølge som standard.

Hvis du vil sortere i faldende rækkefølge, kan du angive parameteren `reverse = True`.

Du kan også definere din egen sorteringsfunktion for at sortere listen efter en bestemt nøgle:

```python
# Sorter efter absolut værdi i faldende rækkefølge
x = sorted([-4,1,-2,3], key=abs, reverse=True) # er [-4,3,-2,1]
# Sorter efter antallet af ord i faldende rækkefølge
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List comprehensions

Vi vil ofte støde på situationer, hvor vi ønsker at udtrække specifikke elementer fra en liste for at danne en ny liste, eller ændre værdierne af nogle af elementerne, eller begge dele. Den idiomatiske Python-tilgang til dette er list comprehensions:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

På lignende vis kan du omdanne lister til dictionaries eller sets:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Hvis du ikke har brug for at bruge elementerne fra listen, kan du bruge et underscore som variabelnavn:

```python
zeroes = [0 for _ in even_numbers] # Har samme længde som listen even_numbers
```

List comprehensions understøtter flere `for`-loops:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # I alt 100 par: (0,0) (0,1) ... (9,8), (9,9)
```

Efterfølgende `for`-loops kan bruge resultatet fra tidligere `for`-loops:

```python
increasing_pairs = [(x, y)                      # Inkluderer kun par hvor x < y
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Vi vil ofte bruge list comprehensions i fremtiden.

### Generatorer og iteratorer (Generators and Iterators)

Et problem med lister er, at de hurtigt kan blive meget store. For eksempel vil `range(1000000)` generere en liste med en million elementer. Hvis du kun behandler ét element ad gangen, kan det tage for lang tid (eller løbe tør for hukommelse). I virkeligheden har du måske kun brug for de første par elementer, hvilket gør alle andre beregninger overflødige.

Generatorer lader dig derimod kun iterere over de data, du har brug for. Du kan oprette en generator ved at bruge en funktion og et `yield`-udtryk:

```python
def lazy_range(n):
    """en 'lazy' version af range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Oversætterens note:
En generator er også en speciel type iterator, og `yield` er nøglen til at implementere iteration med generatorer. Den fungerer som et pause- og genoptagelsespunkt for generatorens udførelse, hvor du både kan tildele en værdi til `yield`-udtrykket og returnere værdien fra det. Enhver funktion, der indeholder en `yield`-sætning, kaldes en generator. Når en generator sættes på pause, gemmer den sin aktuelle udførelsestilstand og genopretter den ved næste udførelse for at hente den næste iteration. Brug af lister til iteration vil optage store mængder hukommelsesplads, mens en generator kun optager cirka én plads, hvilket sparer hukommelse.

Følgende loop vil forbruge én værdi fra `yield` ad gangen, indtil alle er brugt op:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Faktisk har Python en indbygget funktion, der opnår samme effekt som ovenstående `lazy_range`, kaldet `xrange` i Python 2 og `range` i Python 3, som er 'lazy' som standard.) Dette betyder, at du kan oprette en uendelig sekvens:

```python
def natural_numbers():
    """Returnerer 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Det anbefales dog ikke at bruge sådanne udsagn uden en logik til at afslutte løkken.

**TIP**
> En ulempe ved at iterere med generatorer er, at du kun kan iterere over elementerne én gang fra start til slut. Hvis du ønsker at iterere flere gange, er du nødt til at oprette en ny generator hver gang eller bruge en liste.

Den anden måde at oprette en generator på er ved hjælp af et comprehension-udtryk inden i parenteser:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Vi ved, at dictionaryens `items()`-metode returnerer en liste over alle nøgle-værdi-par i dictionaryen. Men i de fleste tilfælde bruger vi `iteritems()`-generatormetoden til at iterere, hvor den kun producerer og returnerer ét nøgle-værdi-par ad gangen.

### Tilfældighed (Randomness)
Når vi studerer datalogi, vil vi ofte få brug for at generere tilfældige tal, så vi skal blot importere `random`-modulet for at bruge det:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genererer et tilfældigt tal
# 0.7579544029403025,         # Det tilfældige tal er normaliseret og ligger mellem 0 og 1
# 0.420571580830845,          # Denne funktion er den mest brugte til at generere tilfældige tal
# 0.25891675029296335]
```

Hvis du ønsker reproducerbare resultater, kan du lade `random`-modulet generere pseudotilfældige (dvs. deterministiske) tal baseret på den interne tilstand, der er indstillet med `random.seed`:

```python
random.seed(10)           # indstiller seed til 10
print random.random()     # 0.57140259469
random.seed(10)           # nulstiller seed til 10
print random.random()     # 0.57140259469 igen
```

Nogle gange bruger vi også `random.randrange`-funktionen til at generere et tilfældigt tal inden for et bestemt interval:

```python
random.randrange(10)      # Vælger et tilfældigt tal fra range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Vælger et tilfældigt tal fra range(3, 6) = [3, 4, 5]
```

Der er også nogle metoder, der kan være praktiske at bruge, for eksempel vil `random.shuffle` blande rækkefølgen af elementerne i en liste og generere en ny, tilfældigt ordnet liste:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (dit resultat vil sandsynligvis være anderledes)
```

Hvis du vil vælge et tilfældigt element fra en liste, kan du bruge `random.choice`-metoden:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Jeg fik "Bob"
```

Hvis du både ønsker at generere en tilfældig sekvens og ikke vil ændre den originale liste, kan du bruge `random.sample`-metoden:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Du kan vælge flere tilfældige samples (med gentagelse tilladt) ved at kalde funktionen flere gange:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regulære udtryk (Regular Expressions)

Regulære udtryk bruges til tekstsøgning. De er en smule komplekse, men yderst nyttige, og der findes mange bøger, der udelukkende handler om dem. Vi vil forklare dem mere detaljeret, når vi støder på dem. Her er nogle eksempler på brug af regulære udtryk i Python:

```python
import re
print all([                                 # Alle nedenstående udsagn returnerer true, fordi
    not re.match("a", "cat"),               # * 'cat' starter ikke med 'a'
    re.search("a", "cat"),                  # * 'cat' indeholder bogstavet 'a'
    not re.search("c", "dog"),              # * 'dog' indeholder ikke bogstavet 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Deler ordet i tre dele ['c','r','s'] baseret på 'a' eller 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Erstatter tal med en bindestreg
    ])                                      # Udskriver True
```

### Objektorienteret programmering (Object-Oriented Programming)

Ligesom mange andre sprog giver Python dig mulighed for at definere klasser, der indkapsler data, og funktioner, der opererer på dem. Vi vil nogle gange bruge dem til at gøre vores kode mere klar og koncis. Det er sandsynligvis nemmest at forklare dem ved at konstruere et stærkt kommenteret eksempel. Lad os antage, at Python ikke havde indbyggede sets; vi ville måske oprette vores egen `Set`-klasse. Hvilke funktioner skulle denne klasse så have? For eksempel, givet et `Set`, skal vi kunne tilføje elementer, fjerne elementer og kontrollere, om det indeholder en bestemt værdi. Så vi vil oprette alle disse funktioner som medlemsfunktioner i klassen. På den måde kan vi få adgang til disse medlemsfunktioner ved at bruge et punktum efter `Set`-objektet:

```python
# Konventionelt giver vi klassen navnet _PascalCase_
class Set:
    # Disse er medlemsfunktioner
    # Hver medlemsfunktion har en "self"-parameter først (en anden konvention)
    # "self" henviser til det specifikke Set-objekt, der bruges

    def __init__(self, values=None):
        """Dette er konstruktørfunktionen.
        Den kaldes, hver gang du opretter et nyt Set.
        Kan kaldes således:
        s1 = Set() # Tomt set
        s2 = Set([1,2,2,3]) # Initialiserer set med angivne værdier"""
        self.dict = {} # Hver instans af Set har sin egen dict-attribut
        # Vi bruger denne attribut til at holde styr på hvert medlem
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Dette er en strengrepræsentation af Set-objektet.
        Du kan få det frem ved at skrive objektet i Python-kommandovinduet eller ved at bruge str()-metoden på objektet."""
        return "Set: " + str(self.dict.keys())

    # Vi angiver medlemskab ved at gøre værdien til en nøgle i self.dict og sætte dens værdi til True.
    def add(self, value):
        self.dict[value] = True

    # Hvis argumentet er en nøgle i dictionaryen, er den tilsvarende værdi i Set'et.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Så kan vi bruge `Set` således:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funktionelle værktøjer (Functional Tools)

#### Partielle funktioner (partial)

Når vi arbejder med funktioner, ønsker vi nogle gange at bruge en del af en funktion til at oprette en ny funktion. Lad os tage et simpelt eksempel; antag, at vi har en funktion med to variabler:

```python
def exp(base, power):
    return base ** power
```

Vi ønsker at bruge den til at oprette en funktion, der tager én variabel og returnerer resultatet af potensfunktionen `exp(2, power)` med base 2.

Selvfølgelig kan vi definere en ny funktion med `def`, selvom det måske ikke er den smarteste løsning:

```python
def two_to_the(power):
  return exp(2, power)
```

En smartere tilgang er at bruge `functools.partial`-metoden:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Den aktuelle funktion har kun én variabel
print two_to_the(3)               # 8
```

Hvis navnet er angivet, kan `partial`-metoden også bruges til at udfylde andre parametre:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Hvis du forsøger at rode med parametrene midt i funktionen, vil programmet hurtigt blive uoverskueligt, så undgå venligst denne adfærd.

#### Afbildning (map)

Vi vil lejlighedsvis også bruge funktioner som `map`, `reduce` og `filter` som alternativer til list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Samme som ovenfor
list_doubler = partial(map, double)     # Funktionen fordobler listen
twice_xs = list_doubler(xs)             # Også [2, 4, 6, 8]
```

`map`-metoden kan også bruges til at afbilde funktioner med flere argumenter til flere lister:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrering (filter)

På lignende vis implementerer `filter` funktionaliteten af et `if`-statement i list comprehensions:

```python
def is_even(x):
    """Returnerer True hvis x er lige, False hvis x er ulige"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Samme som ovenfor
list_evener = partial(filter, is_even)    # Denne funktion udfører filtrering
x_evens = list_evener(xs)                 # Også [2, 4]
```

#### Reduktion (reduce)

`reduce`-metoden fletter gentagne gange det første og andet element i en liste, fletter derefter resultatet med det tredje element, og gentager denne proces, indtil et enkelt resultat er opnået:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Denne funktion reducerer en liste
x_product = list_product(xs)              # Også 24
```

### Optælling (enumerate)

Lejlighedsvis opstår situationen, hvor man skal iterere over en liste og samtidig bruge både elementet og dets indeks:

```python
# Ikke særlig Pythonisk (ikke særlig elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Heller ikke særlig Pythonisk (ikke særlig elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Den mest koncise måde er at bruge `enumerate`-metoden til at generere tupler (`index, element`):

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

På lignende vis, hvis du kun vil bruge indekset:

```python
for i in range(len(documents)): do_something(i)   # Ikke koncis
for i, _ in enumerate(documents): do_something(i) # Koncis
```

Vi vil ofte bruge denne metode senere.

### Zip og argumentudpakning (zip and Argument Unpacking)

#### Komprimering (zip)

Vi vil ofte `zippe` to eller flere lister. `Zip` omdanner faktisk flere lister til en enkelt liste af tilsvarende tupler:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Giver [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumentudpakning (Argument Unpacking)

Hvis flere lister har forskellig længde, stopper komprimeringsprocessen ved enden af den korteste liste. Du kan også bruge et sjovt 'unzip'-trick til at dekomprimere lister:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Her bruges stjerne (`*`) til at udføre argumentudpakning, hvor elementerne fra `pairs` bruges som separate argumenter til `zip`. Følgende kald har samme effekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Returnerer [('a','b','c'), ('1','2','3')]
```

Argumentudpakning kan også bruges sammen med andre funktioner:

```python
def add(a, b): return a + b

add(1, 2)           # Returnerer 3
add([1, 2])         # Giver fejl
add(*[1, 2])        # Returnerer 3
```

Selvom det ikke altid er super praktisk, er det en god teknik til at gøre koden mere koncis.

### Overførsel af variabelt antal argumenter (*args og **kwargs)

Lad os antage, at vi vil oprette en højere-ordens funktion, der tager en eksisterende funktion som input og returnerer en ny funktion, som er den gamle funktion ganget med 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Eksempel på kørsel:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Men så snart der overføres mere end ét argument, fungerer denne metode ikke længere så godt:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Giver fejl TypeError: g() takes exactly 1 argument (2 given)
```

Derfor skal vi definere en funktion, der kan rumme et vilkårligt antal argumenter, og derefter bruge argumentudpakning til at overføre flere argumenter. Det kan virke lidt magisk:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Udskrift:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Når vi definerer en funktion på denne måde, er `args` (forkortelse for arguments) en tuple, der indeholder de unavngivne argumenter, mens `kwargs` (forkortelse for keyword arguments) er en dictionary, der indeholder de navngivne argumenter.

De kan også bruges i tilfælde, hvor de overførte argumenter er lister (eller tupler) eller arrays:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Du kan bruge det i kombination med alle mulige mærkelige metoder, men vi bruger det kun til at løse problemet med at overføre et variabelt antal argumenter til højere-ordens funktioner:

```python
def doubler_correct(f):
    """Fungerer effektivt, uanset hvad f er"""
    def g(*args, **kwargs):
        """Uanset hvor mange argumenter der er, vil denne funktion korrekt videresende argumenterne til f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Velkommen til datalogiens verden!

Ding! Tillykke, du har netop åbnet døren til en ny verden! Nu kan du glæde dig til at udforske den!

**Relateret læsning:**

[Almindelig Python-syntaks i datalogi (grundlæggende)](https://philoli.com/python-tutorails-basic-level)
