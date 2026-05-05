---
title: Sintaxă Python comună în știința datelor (Noțiuni de bază)
date: 2018-11-07 20:53:13
tags: Python
categories: Știința datelor
mathjax: true
---

Zilele acestea am parcurs cartea [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([adresa PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), o introducere excelentă și accesibilă în știința datelor. Unul dintre capitole prezintă sintaxa Python de bază și cea avansată, frecvent utilizată în știința datelor. Mi s-a părut o prezentare foarte bună, concisă și clară, așa că am tradus-o aici ca notițe pentru referințe viitoare.
[Sintaxa Python frecvent utilizată în știința datelor (Noțiuni de bază)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Sintaxa Python frecvent utilizată în știința datelor (Nivel avansat)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Acest capitol se concentrează pe prezentarea sintaxei și funcționalităților de bază ale Python, extrem de utile în procesarea datelor (bazat pe Python 2.7).

<!--more-->

### [](#formatarea-prin-spatiere "Formatarea prin spațiere")Formatarea prin spațiere

Multe limbaje de programare folosesc acolade pentru a controla blocurile de cod, însă Python se bazează pe indentare:

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Prima linie a buclei "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Prima linie a buclei "for j"  
        print i + j  # Ultima linie a buclei "for j"  
    print i          # Ultima linie a buclei "for i"  
print "done looping"  
```

Acest lucru face codul Python foarte ușor de citit, dar implică și o atenție constantă la formatare. Spațiile din interiorul parantezelor sunt ignorate, ceea ce este util atunci când scrii expresii lungi:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

De asemenea, facilitează citirea codului:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#instructiuni-pe-mai-multe-randuri "Instrucțiuni pe mai multe rânduri")Instrucțiuni pe mai multe rânduri

Poți folosi un backslash pentru a indica o instrucțiune întreruptă pe două rânduri (o practică rar întâlnită):

```python
two_plus_three = 2 + \
                 3  
```

### [](#module "Module")Module

Indiferent dacă sunt module încorporate în Python sau module terțe descărcate, toate trebuie importate manual pentru a putea fi utilizate.

1.  Importă pur și simplu întregul modul:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Modulul `_re_` importat aici este folosit pentru expresii regulate. După importarea modulului, poți apela funcționalitățile specifice utilizând numele modulului ca prefix (re.).

2.  Dacă numele modulului pe care vrei să-l importezi este deja utilizat în cod, îl poți mapa la un alt nume în timpul importului:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3.  Dacă ești un tip mai "neastâmpărat", poți importa întregul modul în spațiul de nume curent, ceea ce ar putea suprascrie, fără intenție, variabilele pe care le-ai definit deja:

```python
match = 10  
from re import *  # Modulul re are o funcție match  
print match       # Afișează funcția match  
```

Dar, pentru că ești o persoană bună, sunt sigur că nu vei face asta.

### [](#operatii-aritmetice "Operații aritmetice")Operații aritmetice

Python 2.7 folosește implicit împărțirea întreagă, deci $5 / 2 = 2$. Însă, de multe ori nu ne dorim acest comportament, așa că putem importa acest modul:

```python
from __future__ import division  
```

După import, vom avea $5 / 2 = 2.5$.
Împărțirea întreagă (floor division): $5 // 2 = 2$.

### [](#functii "Funcții")Funcții

#### [](#definirea-functiilor "Definirea funcțiilor")Definirea funcțiilor

O funcție este o regulă care poate primi zero sau mai multe intrări și returna o anumită ieșire. În Python, definim o funcție folosind `def nume_funcție(parametri)`:

```python
def double(x):  
    """Aici poți scrie o explicație despre funcționalitatea funcției,  
    de exemplu, că această funcție înmulțește intrarea cu 2"""  
    # Aici poți scrie corpul funcției, nu uita de indentare  
    return x * 2  
```

#### [](#utilizarea-functiilor "Utilizarea funcțiilor")Utilizarea funcțiilor

În Python, funcțiile sunt "cetățeni de primă clasă", ceea ce înseamnă că le putem atribui unei variabile sau le putem transmite ca argumente altor funcții:

```python
def apply_to_one(f):  
    """Apelează funcția f și transmite 1 ca parametru al funcției"""  
    return f(1)  
my_double = double          # double se referă la funcția definită în secțiunea anterioară  
x = apply_to_one(my_double) # x este egal cu 2  
```

#### [](#functii-anonime "Funcții anonime")Funcții anonime

De asemenea, poți crea funcții anonime folosind `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # este egal cu 5  
```

Poți atribui o funcție `lambda` unei variabile, dar majoritatea programatorilor te vor sfătui să folosești pe cât posibil _def_:

```python
another_double = lambda x: 2 * x      # Nu este recomandat  
def another_double(x): return 2 * x   # Metoda recomandată  
```

Observații suplimentare:

*   `lambda` este doar o expresie, iar corpul funcției este mult mai simplu decât cel al unei funcții `def`.
*   Corpul unei funcții `lambda` este o expresie, nu un bloc de cod. Poți încapsula doar o logică limitată într-o expresie `lambda`.

#### [](#transmiterea-parametrilor-functiilor "Transmiterea parametrilor funcțiilor")Transmiterea parametrilor funcțiilor

Parametrii funcțiilor pot avea valori implicite. Dacă o funcție este apelată fără a specifica un parametru, se va folosi valoarea implicită; dacă un parametru este specificat, acea valoare va fi transmisă:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Afișează "hello"  
my_print()            # Afișează "my default message"  
```

Uneori este foarte util să specifici parametrii direct prin numele lor:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Returnează 5  
subtract(0, 5)    # Returnează -5  
subtract(b=5)     # La fel ca precedentul, returnează -5  
```

### [](#siruri-de-caractere-strings "Șiruri de caractere (Strings)")Șiruri de caractere (Strings)

Poți folosi ghilimele simple sau duble pentru a crea șiruri de caractere (ghilimelele trebuie să fie pereche):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Folosește backslash-ul pentru caracterele escape, de exemplu:

```python
tab_string = "\t"      # Reprezintă un tab  
len(tab_string)        # Este egal cu 1  
```

Când vrei să utilizezi backslash-ul în sine (pentru directoarele Windows sau expresii regulate), îl poți defini folosind șiruri brute `r""`:

```python
not_tab_string = r"\t" # Reprezintă caracterele '\' și 't'  
len(not_tab_string)    # Este egal cu 2  
```

Creează șiruri de caractere pe mai multe rânduri folosind trei ghilimele duble:

```python
multi_line_string = """Aceasta este prima linie  
Aceasta este a doua linie  
Aceasta este a treia linie"""  
```

### [](#gestionarea-exceptiilor "Gestionarea excepțiilor")Gestionarea excepțiilor

Când apare o eroare în program, Python generează o _excepție_. Dacă nu o gestionăm, programul se va opri din execuție. Poți captura excepțiile folosind instrucțiunile _try_ și _except_:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Cannot divide by 0"  
```

Deși în alte limbaje excepțiile sunt adesea văzute ca un lucru negativ, în Python, gestionarea excepțiilor multiple poate face codul tău mai concis și mai curat.

### [](#liste "Liste")Liste

#### [](#crearea-listelor "Crearea listelor")Crearea listelor

Listele sunt colecții simple, ordonate, și sunt una dintre cele mai fundamentale structuri de date din Python (asemănătoare cu array-urile din alte limbaje, dar cu anumite caracteristici suplimentare). Pentru a crea o listă:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Este egal cu 3  
list_sum = sum(integer_list)      # Este egal cu 6  
```

#### [](#accesarea-valorilor-din-liste "Accesarea valorilor din liste")Accesarea valorilor din liste

Poți accesa valorile dintr-o listă prin indexare cu paranteze pătrate:

```python
x = range(10)       # Lista x devine [0, 1, ..., 9]  
zero = x[0]         # Este egal cu 0, indexarea listelor începe de la 0  
one = x[1]          # Este egal cu 1  
nine = x[-1]        # Este egal cu 9, ultimul element din listă  
eight = x[-2]       # Este egal cu 8, al doilea element de la sfârșitul listei  
x[0] = -1           # Lista curentă x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#trunchierea-listelor "Trunchierea listelor (slicing)")Trunchierea listelor (slicing)

Poți trunchia liste folosind paranteze pătrate:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Poți folosi operatorul `in` pentru a verifica dacă un element se află într-o listă:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Această metodă de căutare a elementelor este foarte ineficientă; ar trebui să o folosești doar când lista este foarte mică sau dacă timpul de căutare nu este o preocupare.

#### [](#concatenarea-listelor "Concatenarea listelor")Concatenarea listelor

În Python, este foarte ușor să concatenezi două liste:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # x este acum [1,2,3,4,5,6]  
```

Dacă nu vrei să modifici lista originală x, poți folosi operatorul de "adunare" pentru a crea o nouă listă:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # y este acum [1, 2, 3, 4, 5, 6]; x nu s-a modificat  
```

Poți adăuga frecvent elemente în listă câte unul, în felul următor:

```python
x = [1, 2, 3]  
x.append(0)           # x este acum [1, 2, 3, 0]  
y = x[-1]             # Este egal cu 0  
z = len(x)            # Este egal cu 4  
```

#### [](#descompunerea-listelor "Descompunerea listelor (unpacking)")Descompunerea listelor (unpacking)

Dacă știi câte elemente are o listă, o poți descompune foarte ușor:

```python
x, y = [1, 2]         # x este acum 1, y este 2  
```

Dacă numărul de elemente de pe cele două părți ale egalității nu corespunde, vei primi o _eroare de valoare_ (ValueError). De aceea, mai frecvent, folosim un underscore pentru a stoca restul listei:

```python
_, y = [1, 2]         # y == 2, indiferent de primul element  
```

### [](#tupluri "Tupluri")Tupluri

Listele și tuplurile sunt foarte asemănătoare, singura diferență fiind că elementele dintr-un tuplu nu pot fi modificate.

#### [](#crearea-tuplurilor "Crearea tuplurilor")Crearea tuplurilor

Poți crea tupluri folosind paranteze rotunde sau fără paranteze:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list = [1, 2]
my_list[1] = 3        # my_list este acum [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Cannot modify tuple"  
```

Tuplurile sunt foarte utile pentru a obține mai multe valori de retur de la o funcție:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Este egal cu (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Atât tuplurile (cât și listele) suportă atribuirea simultană a mai multor elemente:

```python
x, y = 1, 2       # x este acum 1, y este 2  
x, y = y, x       # Schimbă valorile a două variabile în Python; x este acum 2, y este 1  
```

### [](#dictionare "Dicționare")Dicționare

#### [](#crearea-dictionarelor "Crearea dicționarelor")Crearea dicționarelor

O altă structură de date fundamentală în Python este dicționarul, care îți permite să obții rapid o valoare (value) corespunzătoare unei chei (key):

```python
empty_dict = {}                       # Definirea unui dicționar gol, într-un stil foarte "pythonic"  
empty_dict2 = dict()                  # Definirea unui dicționar gol, mai puțin "pythonic"  
grades = { "Joel" : 80, "Tim" : 95 }  # Stocare în dicționar  
```

#### [](#cautarea-elementelor-in-dictionare "Căutarea elementelor în dicționare")Căutarea elementelor în dicționare

Poți folosi paranteze pătrate cu cheia pentru a căuta valoarea corespunzătoare:

```python
joels_grade = grades["Joel"]          # Este egal cu 80  
```

Dacă cheia căutată nu se află în dicționar, se va returna o _eroare de cheie (KeyError)_:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "no grade for Kate!"  
```

Poți verifica dacă o cheie se află în dicționar folosind operatorul `in`:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Dicționarele au o metodă care poate returna o valoare implicită, astfel încât, dacă cheia căutată nu se află în dicționar, se va returna valoarea implicită stabilită (în loc să genereze o excepție):

```python
joels_grade = grades.get("Joel", 0)   # Este egal cu 80  
kates_grade = grades.get("Kate", 0)   # Este egal cu 0  
no_ones_grade = grades.get("No One")  # Returnează valoarea implicită None  
```

#### [](#modificarea-dictionarelor "Modificarea dicționarelor")Modificarea dicționarilor

Poți folosi paranteze pătrate pentru a crea sau modifica perechi cheie-valoare în dicționar:

```python
grades["Tim"] = 99                    # Înlocuiește valoarea veche  
grades["Kate"] = 100                  # Adaugă o pereche cheie-valoare nouă  
num_students = len(grades)            # Este egal cu 3  
```

Vom folosi frecvent dicționarele în acest mod pentru a reprezenta structura datelor:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Pe lângă căutarea unor chei specifice, putem opera și cu toate cheile în felul următor:

```python
tweet_keys = tweet.keys()             # Obține o listă de chei  
tweet_values = tweet.values()         # Obține o listă de valori  
tweet_items = tweet.items()           # Obține tupluri (cheie, valoare)  
"user" in tweet_keys                  # Returnează True, folosind o căutare 'in' mai puțin eficientă, specifică listelor  
"user" in tweet                       # O metodă mai "pythonică", folosind o căutare 'in' eficientă, specifică dicționarelor  
"joelgrus" in tweet_values            # True  
```

Cheile din dicționare sunt unice, iar listele nu pot fi folosite ca chei de dicționar. Dacă ai nevoie de o cheie formată din mai multe părți, poți utiliza un tuplu sau poți converti cheia într-un șir de caractere.

#### [](#defaultdict "Defaultdict")Defaultdict

Dacă încerci să numeri frecvența fiecărui cuvânt dintr-un document, o abordare evidentă este să creezi un dicționar în care cuvântul este cheia, iar frecvența este valoarea corespunzătoare. Apoi parcurgi documentul, iar când întâlnești un cuvânt existent, incrementezi valoarea asociată în dicționar; când întâlnești un cuvânt nou, adaugi o nouă pereche cheie-valoare în dicționar:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Desigur, poți trata o cheie lipsă în avans, într-un mod "întâi acționezi, apoi explici", ca acesta:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

A treia metodă este utilizarea `get`, care gestionează excelent cheile lipsă:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Defaultdict-ul este similar cu un dicționar obișnuit, cu singura diferență că, atunci când încerci să accesezi o cheie inexistentă, defaultdict-ul va crea automat o pereche cheie-valoare folosind cheia furnizată. Pentru a utiliza defaultdict, trebuie să imporți biblioteca `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() generează 0  
for word in document:  
    word_counts[word] += 1  
```

Defaultdict-urile sunt, de asemenea, foarte utile cu liste, dicționare obișnuite sau chiar funcții personalizate:

```python
dd_list = defaultdict(list)           # list() generează o listă goală  
dd_list[2].append(1)                  # dd_list este acum {2: [1]}  
dd_dict = defaultdict(dict)           # dict() generează un dicționar gol  
dd_dict["Joel"]["City"] = "Seattle"   # Conținutul curent al dd_dict este { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Creează un dicționar unde valorile asociate cheilor sunt liste  
dd_pair[2][1] = 1                     # Conținutul curent al dd_pair este {2: [0,1]}  
```

Această metodă este foarte utilă, eliminând necesitatea de a verifica existența unei chei înainte de a accesa valorile asociate în dicționar.

### [](#contoare-counter "Contoare (Counter)")Contoare (Counter)

Un Counter poate converti direct un set de valori într-un obiect similar cu un dicționar, unde cheia este un element din set, iar valoarea corespunzătoare este numărul de apariții al acelui element. Acest lucru este frecvent utilizat la crearea histogramelor:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c este (aproximativ) { 0 : 2, 1 : 1, 2 : 1 }  
```

Astfel, avem o metodă foarte convenabilă pentru a număra frecvența cuvintelor:

```python
word_counts = Counter(document)  
```

Counter are și o metodă foarte utilă, `most_common`, care poate returna direct cele mai frecvente cuvinte și frecvențele lor corespunzătoare:

```python
# Afișează primele 10 cele mai frecvente cuvinte și numărul lor de apariții  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#seturi "Seturi")Seturi

O altă structură de date în Python sunt seturile, care reprezintă o colecție de elemente distincte.
Poți crea un set și adăuga elemente în el astfel:

```python
s = set()  
s.add(1)          # s este { 1 }  
s.add(2)          # s este { 1, 2 }  
s.add(2)          # s este { 1, 2 }  
x = len(s)        # Este egal cu 2  
y = 2 in s        # Este egal cu True  
z = 3 in s        # Este egal cu False  
```

Două motive principale pentru a folosi seturi:

În primul rând, operația `in` pe seturi este foarte eficientă. Când un set de date conține un număr foarte mare de elemente, căutarea elementelor sub formă de set este, evident, mai potrivită decât folosirea unei liste:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Eșuează, necesită verificarea fiecărui element  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Căutare reușită, și foarte rapidă  
```

În al doilea rând, utilizarea seturilor este foarte convenabilă pentru a obține elementele distincte dintr-un set de date:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

În practică, însă, seturile nu sunt utilizate la fel de frecvent ca dicționarele și listele.

### [](#instructiuni-conditionale "Instrucțiuni condiționale")Instrucțiuni condiționale

În majoritatea limbajelor de programare, poți folosi _if_ pentru ramuri condiționale, ca aici:

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

Poți scrie instrucțiunile condiționale pe o singură linie, dar acest lucru este rar folosit:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#instructiuni-repetitive-buclari "Instrucțiuni repetitive (buclări)")Instrucțiuni repetitive (buclări)

#### [](#bucla-while "Bucla _while_")Bucla _while_

Bucla _while_ în Python:

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### [](#bucla-for "Bucla _for_")Bucla _for_

Mai frecvent, se utilizează bucla _for-in_:

```python
for x in range(10):  
    print x, "is less than 10"  
```

Expresiile logice mai complexe pot folosi instrucțiunile _continue_ și _break_:

```python
for x in range(10):  
    if x == 3:  
        continue          # Trece direct la următoarea iterație a buclei  
    if x == 5:  
        break             # Ieșire completă din buclă  
    print x  
```

Rezultatul va afișa 0, 1, 2 și 4.

### [](#valori-de-adevar-truthiness "Valori de adevăr (Truthiness)")Valori de adevăr (Truthiness)

Variabilele booleene în Python funcționează similar cu cele din alte limbaje, singura diferență fiind că prima literă trebuie să fie întotdeauna majusculă:

```python
one_is_less_than_two = 1 < 2      # Este True  
true_equals_false = True == False # Este False  
```

Python folosește `None` pentru a indica absența unei valori, similar cu `null` din alte limbaje:

```python
x = None  
print x == None        # Afișează True, dar nu este stilul cel mai elegant  
print x is None        # Afișează True, este mai elegant  
```

Python îți permite să folosești alte valori în locul valorilor booleene. Următoarele sunt toate echivalente cu `False`:

*   False
*   None
*   `[]` (o listă goală)
*   `{}` (un dicționar gol)
*   `""`
*   `set()`
*   0
*   0.0

În mod similar, există multe valori echivalente cu `True`, ceea ce îți permite să verifici foarte ușor liste goale, șiruri de caractere goale, dicționare goale și așa mai departe.

Desigur, dacă nu poți anticipa rezultatul, pot apărea erori în timpul utilizării:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

O abordare mai simplă, cu același efect ca cea de mai sus:

```python
first_char = s and s[0]  
```

Dacă prima valoare este adevărată, se va returna a doua valoare; în caz contrar, se va returna prima valoare.

În mod similar, dacă x poate fi un număr sau poate fi gol, poți obține un x care este cu siguranță un număr astfel:

```python
safe_x = x or 0  
```

Python are și funcția `all`, care returnează `True` dacă toate elementele sunt `True`. Funcția `any` returnează `True` dacă cel puțin un element este `True`. De exemplu, pentru o listă în care fiecare element este "adevărat", funcția `all` va returna `True`, altfel va returnând `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} este echivalent cu "False"  
any([True, 1, {}])          # True  
all([])                     # True, nu există niciun element echivalent cu "False"  
any([])                     # False, nu există niciun element echivalent cu "True"  
```

**Lectură suplimentară:**
[Sintaxa Python frecvent utilizată în știința datelor (Nivel avansat)](https://philoli.com/python-tutorails-advanced-level/)
