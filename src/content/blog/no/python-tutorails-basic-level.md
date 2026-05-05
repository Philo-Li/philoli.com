---
title: Vanlig Python-syntaks i datavitenskap (grunnleggende)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

De siste dagene har jeg lest [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-adresse](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), en utmerket og lettfattelig introduksjonsbok til datavitenskap. Ett av kapitlene gir en fin og konsis oversikt over grunnleggende Python-syntaks og mer avanserte funksjoner som ofte brukes i datavitenskap. Jeg syntes beskrivelsen var så god og tydelig at jeg har oversatt den og lagt den ut her som et oppslagsverk.  
[Vanlig Python-syntaks i datavitenskap (grunnleggende)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Vanlig Python-syntaks i datavitenskap (videregående)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Dette innlegget fokuserer på grunnleggende Python-syntaks og funksjoner som er svært nyttige i databehandling (basert på Python 2.7).

<!--more-->

### Innrykk og formatering

Mange språk bruker klammeparenteser for å kontrollere kodeblokker, men Python bruker innrykk:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Første linje i "for i"-løkken  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Første linje i "for j"-løkken  
        print i + j  # Siste linje i "for j"-løkken  
    print i          # Siste linje i "for i"-løkken  
print "done looping"  
```

Dette gjør Python-kode veldig lett å lese, men det betyr også at du alltid må være oppmerksom på formateringen. Mellomrom inne i parenteser blir ignorert, noe som er nyttig når du skriver lange uttrykk:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Og det gjør koden lettere å lese:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Utsagn over flere linjer

Du kan bruke en omvendt skråstrek for å indikere at et utsagn fortsetter over to linjer (dette er sjelden brukt):  

```python
two_plus_three = 2 + \
                 3  
```

### Moduler

Uansett om det er innebygde Python-moduler eller tredjepartsmoduler du har lastet ned, må de importeres manuelt for å kunne brukes.

1. Enkel import av hele modulen:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Modulen `re` som importeres her, brukes for regulære uttrykk. Etter at modulen er importert, kan du kalle spesifikke funksjoner direkte ved å bruke modulnavnet som prefiks (`re.`).

2. Hvis modulnavnet allerede er i bruk i koden, kan du importere modulen under et annet navn:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Hvis du er slem, kan du importere hele modulen til det nåværende navneområdet. Dette kan utilsiktet overskrive variabler du allerede har definert:

```python
match = 10  
from re import *  # re-modulen har en funksjon kalt match  
print match       # Skriver ut match-funksjonen  
```

Men siden du er en god person, stoler jeg på at du unngår dette.

### Aritmetikk

I Python 2.7 utføres heltallsdivisjon som standard, så $5 / 2 = 2$. Men ofte ønsker vi ikke heltallsdivisjon, og da kan vi importere denne modulen:

```python
from __future__ import division  
```

Etter import får vi $5 / 2 = 2.5$.  
Heltallsdivisjon: $5 // 2 = 2$.

### Funksjoner

#### Funksjonsdefinisjon

En funksjon er en regel som kan motta null eller flere inndata og returnere en bestemt utdata. I Python definerer vi en funksjon med `def funksjonsnavn(parametere)`:

```python
def double(x):  
    """Her kan du skrive en forklaring av funksjonens formål,  
    for eksempel at den dobler inndata."""  
    # Her kommer funksjonens kode, husk innrykk.  
    return x * 2  
```
#### Bruk av funksjoner

I Python er funksjoner «førsteklasses objekter», noe som betyr at vi kan tildele funksjoner til variabler, eller sende dem som argumenter til andre funksjoner:

```python
def apply_to_one(f):  
    """Kaller funksjonen f og bruker 1 som funksjonsargument."""  
    return f(1)  
my_double = double          # 'double' refererer til funksjonen definert i forrige avsnitt.  
x = apply_to_one(my_double) # x blir 2.  
```
#### Anonyme funksjoner (Lambda)

Vi kan også opprette anonyme funksjoner ved hjelp av `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # blir 5.  
```

Du kan tildele en `lambda`-funksjon til en variabel, men de fleste vil anbefale at du bruker `def` så mye som mulig i stedet:

```python
another_double = lambda x: 2 * x      # Ikke anbefalt  
def another_double(x): return 2 * x   # Anbefalt  
```

Tilleggsinfo:

*   `lambda` er bare et uttrykk, og funksjonskroppen er mye enklere enn med `def`.
*   Kroppen til en `lambda`-funksjon er et uttrykk, ikke en kodeblokk. Du kan bare innkapsle begrenset logikk i et `lambda`-uttrykk.

#### Parameteroverføring til funksjoner

Funksjonsparametere kan ha standardverdier. Kaller du funksjonen uten parameter, brukes standardverdien. Oppgir du en parameter, overskrives standardverdien:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Skriver ut "hello"  
my_print()            # Skriver ut "my default message"  
```

Noen ganger er det også nyttig å spesifisere argumenter direkte med parameterens navn:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Returnerer 5.  
subtract(0, 5)    # Returnerer -5.  
subtract(b=5)     # Samme som forrige, returnerer -5.  
```
### Strenger

Du kan bruke enkle eller doble anførselstegn for å opprette strenger (anførselstegnene må stemme overens):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Bruk omvendt skråstrek for å representere escape-tegn, for eksempel:

```python
tab_string = "\t"      # Representerer et tabulator-tegn (tab)  
len(tab_string)        # blir 1.  
```

Hvis du vil bruke omvendt skråstrek (`\`) bokstavelig (for Windows-mapper eller regulære uttrykk), kan du definere en rå streng med `r""`:

```python
not_tab_string = r"\t" # Representerer tegnene '\' og 't'  
len(not_tab_string)    # blir 2.  
```

Du kan opprette flerspråklige strenger ved å bruke tre doble anførselstegn:

```python
multi_line_string = """Dette er den første linjen  
Dette er den andre linjen  
Dette er den tredje linjen"""  
```

### Feilhåndtering (Exceptions)

Når et program støter på en feil, vil Python utløse et `unntak (exception)`. Hvis vi ikke håndterer dette, vil programmet avsluttes. Du kan fange unntak med `try`- og `except`-utsagn:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Kan ikke dele på 0."  
```

Selv om unntak i andre språk noen ganger anses som uheldig, kan mer omfattende unntakshåndtering i Python gjøre koden din renere og mer konsis.

### Lister

#### Opprette lister

Lister er enkle, ordnede samlinger og er en av de mest grunnleggende datastrukturene i Python (ligner på arrays i andre språk, men lister har noen ekstra funksjoner). Slik oppretter du en liste:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # blir 3.  
list_sum = sum(integer_list)      # blir 6.  
```
#### Tilgang til listeverdier

Du kan indeksere verdier i en liste ved hjelp av klammeparenteser:

```python
x = range(10)       # Oppretter listen x = [0, 1, ..., 9]  
zero = x[0]         # blir 0, listeindekser starter fra 0.  
one = x[1]          # blir 1.  
nine = x[-1]        # blir 9, det siste elementet i listen.  
eight = x[-2]       # blir 8, det nest siste elementet i listen.  
x[0] = -1           # Listen x er nå [-1, 1, 2, 3, ..., 9]  
```

#### Utsnitt av lister

Du kan ta utsnitt av lister med klammeparenteser:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Du kan bruke `in` for å sjekke om et element er i listen:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Denne metoden for elementleting er ineffektiv. Bruk den bare når listen er liten, eller hvis du ikke er bekymret for søketiden.

#### Slå sammen lister

I Python er det enkelt å slå sammen to lister:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # x er nå [1,2,3,4,5,6]  
```

Hvis du ikke vil endre den originale listen `x`, kan du bruke 'pluss'-operatoren for å opprette en ny liste:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # y er nå [1, 2, 3, 4, 5, 6]; x er uendret.  
```

Det er vanlig å legge til ett element om gangen i en liste på denne måten:

```python
x = [1, 2, 3]  
x.append(0)           # x er nå [1, 2, 3, 0]  
y = x[-1]             # blir 0.  
z = len(x)            # blir 4.  
```

#### Oppdeling av lister

Hvis du vet hvor mange elementer det er i en liste, er det enkelt å dele den opp:

```python
x, y = [1, 2]         # x er nå 1, y er 2.  
```

Hvis antall elementer på hver side av likhetstegnet ikke stemmer overens, vil du få en `ValueError`. Derfor bruker vi oftere understrek for å fange opp resten av listen:

```python
_, y = [1, 2]         # y blir 2, det første elementet ignoreres.  
```

### Tupler

Lister og tupler er svært like. Den eneste forskjellen er at elementer i et tuppel ikke kan endres.

#### Opprette tupler

Du kan opprette tupler ved å bruke parenteser, eller ved å utelate dem helt:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list = [1, 2]      # Eksempel på en liste for å vise forskjell  
my_list[1] = 3        # my_list er nå [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Kan ikke endre tuppel."  
```

Tupler gjør det veldig enkelt å returnere flere verdier fra en funksjon:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # blir (5, 6).  
s, p = sum_and_product(5, 10) # s = 15, p = 50.  
```

Tupler (og lister) støtter samtidig tildeling av flere elementer:

```python
x, y = 1, 2       # x er nå 1, y er 2.  
x, y = y, x       # Bytter verdier mellom to variabler i Python; x er nå 2, y er 1.  
```

### Ordbøker (Dictionaries)

#### Opprette ordbøker

En annen grunnleggende datastruktur i Python er ordboken (dictionary). Den lar deg raskt hente en verdi (value) ved hjelp av en nøkkel (key):

```python
empty_dict = {}                       # Veldig Python-aktig definisjon av en tom ordbok.  
empty_dict2 = dict()                  # Mindre Python-aktig definisjon av en tom ordbok.  
grades = { "Joel" : 80, "Tim" : 95 }  # Ordbok for karakterer.  
```

#### Søke etter elementer i ordbøker

Du kan bruke klammeparenteser med nøkkelen for å finne den tilsvarende verdien:

```python
joels_grade = grades["Joel"]          # blir 80.  
```

Hvis nøkkelen du søker etter ikke finnes i ordboken, vil du få en `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "ingen karakter for Kate!"  
```

Du kan bruke `in` for å sjekke om en nøkkel er i ordboken:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Ordbøker har en metode som kan returnere en standardverdi hvis nøkkelen du søker etter ikke finnes (i stedet for å utløse et unntak):

```python
joels_grade = grades.get("Joel", 0)   # blir 80.  
kates_grade = grades.get("Kate", 0)   # blir 0.  
no_ones_grade = grades.get("No One")  # Returnerer standardverdien `None`.  
```

#### Endre ordbøker

Du kan bruke klammeparenteser til å opprette eller endre nøkkel-verdi-par i ordboken:

```python
grades["Tim"] = 99                    # Erstatter den gamle verdien.  
grades["Kate"] = 100                  # Legger til et nøkkel-verdi-par.  
num_students = len(grades)            # blir 3.  
```

Vi vil ofte bruke ordbøker på denne måten for å representere datastrukturer:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

I tillegg til å søke etter spesifikke nøkler, kan vi også operere på alle nøklene på denne måten:

```python
tweet_keys = tweet.keys()             # Gir en liste over nøkler.  
tweet_values = tweet.values()         # Gir en liste over verdier.  
tweet_items = tweet.items()           # Gir en liste med (nøkkel, verdi)-tupler.  
"user" in tweet_keys                  # Returnerer True, bruker den mindre effektive `in`-søkemetoden for lister.  
"user" in tweet                       # En mer Python-aktig metode, bruker den effektive `in`-søkemetoden for ordbøker.  
"joelgrus" in tweet_values            # True  
```

Nøkler i ordbøker er unike, og lister kan ikke brukes som nøkler. Hvis du trenger en flerdelnøkkel, kan du bruke et tuppel eller konvertere nøkkelen til en streng på en eller annen måte.

#### Standard ordbøker (defaultdict)

Hvis du prøver å telle frekvensen av hvert ord i et dokument, er en åpenbar tilnærming å opprette en ordbok der ordet er nøkkelen og frekvensen er verdien. Deretter går du gjennom dokumentet, og for hvert ord som allerede finnes i ordboken, øker du den tilhørende verdien med 1. For ord som ikke finnes, legger du til et nytt nøkkel-verdi-par:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Du kan selvfølgelig også håndtere en manglende nøkkel proaktivt, for eksempel ved å prøve å få tilgang til den og fange unntaket:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

En tredje metode er å bruke `get`-metoden, som er utmerket til å håndtere manglende nøkler:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

En `defaultdict` fungerer som en vanlig ordbok, med den eneste forskjellen at når du prøver å slå opp en nøkkel som ikke eksisterer, vil `defaultdict` automatisk opprette et nøkkel-verdi-par ved hjelp av nøkkelen du har oppgitt. For å bruke `defaultdict` må du importere `collections`-biblioteket:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() genererer 0.  
for word in document:  
    word_counts[word] += 1  
```

`defaultdict` er også veldig nyttig med lister, vanlige ordbøker og til og med egendefinerte funksjoner:

```python
dd_list = defaultdict(list)           # list() genererer en tom liste.  
dd_list[2].append(1)                  # dd_list er nå {2: [1]}.  
dd_dict = defaultdict(dict)           # dict() genererer en tom ordbok.  
dd_dict["Joel"]["City"] = "Seattle"   # Innholdet i dd_dict er nå { "Joel" : { "City" : "Seattle"}}.  
dd_pair = defaultdict(lambda: [0, 0]) # Oppretter en ordbok der nøkkelverdiene er lister.  
dd_pair[2][1] = 1                     # Innholdet i dd_pair er nå {2: [0,1]}.  
```

Denne metoden er veldig nyttig; i fremtiden trenger vi ikke lenger å sjekke om en nøkkel eksisterer når vi skal hente ut verdier fra ordboken.

### Tellere (Counter)

En `Counter` kan direkte konvertere en samling verdier til et ordbok-lignende objekt, der nøkkelen er et element fra samlingen og den tilhørende verdien er hvor mange ganger elementet forekommer. Dette brukes ofte når man lager histogrammer:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c er (omtrent) { 0 : 2, 1 : 1, 2 : 1 }.  
```

På denne måten får vi en veldig praktisk metode for å telle ordfrekvens:

```python
word_counts = Counter(document)  
```

En annen ofte brukt metode for `Counter` er `most_common`, som direkte gir de mest frekvente ordene og deres frekvenser:

```python
# Skriver ut de 10 mest frekvente ordene og deres antall.  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Mengder (Sets)

En annen datastruktur i Python er en mengde (`set`). En mengde er en samling av unike elementer.  
Du kan opprette en mengde og legge til elementer på denne måten:

```python
s = set()  
s.add(1)          # s er { 1 }.  
s.add(2)          # s er { 1, 2 }.  
s.add(2)          # s er { 1, 2 }.  
x = len(s)        # blir 2.  
y = 2 in s        # blir True.  
z = 3 in s        # blir False.  
```

To hovedgrunner til å bruke mengder:

For det første er `in`-operasjonen i mengder svært effektiv. Når antall elementer i et datasett er veldig stort, er det å søke etter elementer i en mengde åpenbart mer egnet enn i en liste:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Ineffektivt, krever sjekk av hvert element.  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Søk lykkes, og det er raskt.  
```

For det andre er det veldig praktisk å bruke mengder for å hente ut de unike elementene i et datasett:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6.  
item_set = set(item_list)             # {1, 2, 3}.  
num_distinct_items = len(item_set)    # 3.  
distinct_item_list = list(item_set)   # [1, 2, 3].  
```

I praksis brukes mengder imidlertid ikke like ofte som ordbøker og lister.

### Betingede uttrykk

I de fleste programmeringsspråk kan du bruke `if` for å representere betingede forgreninger på denne måten:

```python
if 1 > 2:  
    message = "om bare 1 var større enn to…"  
elif 1 > 3:  
    message = "elif står for 'else if'"  
else:  
    message = "når alt annet feiler, bruk else (hvis du vil)"  
```

Du kan også skrive betingede utsagn på én linje slik, men dette er sjelden brukt:

```python
parity = "partall" if x % 2 == 0 else "oddetall"  
```

### Løkker

#### While-løkker

En `while`-løkke i Python:

```python
x = 0  
while x < 10:  
    print x, "er mindre enn 10."  
    x += 1  
```

#### For-løkker

Mer vanlig er å bruke en `for-in`-løkke:

```python
for x in range(10):  
    print x, "er mindre enn 10."  
```

For mer komplekse logiske uttrykk kan du bruke `continue`- og `break`-setninger:

```python
for x in range(10):  
    if x == 3:  
        continue          # Fortsetter til neste iterasjon i løkken.  
    if x == 5:  
        break             # Avslutter løkken helt.  
    print x  
```

Resultatet vil være 0, 1, 2 og 4.

### Sannhetsverdi (Truthiness)

Bruken av boolske variabler (`Booleans`) i Python er ganske lik andre språk, den eneste forskjellen er at den første bokstaven alltid må være stor:

```python
one_is_less_than_two = 1 < 2      # blir True.  
true_equals_false = True == False # blir False.  
```

Python bruker `None` for å indikere at en verdi ikke eksisterer, lik `null` i andre språk:

```python
x = None  
print x == None        # Skriver ut True, mindre elegant.  
print x is None        # Skriver ut True, mer elegant.  
```

Python lar deg bruke andre verdier som er ekvivalente med boolske verdier. Følgende er alle ekvivalente med `False`:

*   False
*   None
*   `[]` (en tom liste)
*   `{}` (en tom ordbok)
*   `""`
*   `set()`
*   0
*   0.0

På samme måte finnes det mange verdier som tilsvarer `True`, noe som gjør det veldig praktisk å sjekke for tomme lister, tomme strenger, tomme ordbøker osv.

Men selvfølgelig, hvis du ikke kan forutse resultatet, kan det oppstå feil under bruk:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

En enklere måte, som har samme effekt som metoden ovenfor:

```python
first_char = s and s[0]  
```

Hvis den første verdien er sann, returneres den andre verdien; ellers returneres den første verdien.

På samme måte, hvis `x` kan være et tall eller `None`, kan du sikre at `x` er et tall slik:

```python
safe_x = x or 0  
```

Python har også en `all`-funksjon som returnerer `True` hvis hvert element er `True`. `any`-funksjonen returnerer `True` hvis minst ett element er `True`. For eksempel, for en liste der hvert element er 'sant', vil `all`-funksjonen returnere `True`, ellers `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} tilsvarer 'False'.  
any([True, 1, {}])          # True  
all([])                     # True, det finnes ikke et element som tilsvarer 'False'.  
any([])                     # False, det finnes ikke et element som tilsvarer 'True'.  
```

**Videre lesing:**  
[Vanlig Python-syntaks i datavitenskap (videregående)](https://philoli.com/python-tutorails-advanced-level/)
