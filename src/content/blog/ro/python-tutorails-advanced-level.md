---
title: Sintaxa Python utilizată frecvent în știința datelor (Avansat)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
În ultimele zile am parcurs cartea [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([link PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), care este o introducere excelentă și ușor de înțeles în știința datelor. Unul dintre capitole prezintă sintaxa de bază a Python și sintaxa avansată utilizată frecvent în știința datelor. Am găsit prezentarea foarte bună, concisă și clară, așa că am tradus-o și am pus-o aici ca o referință.
[Sintaxa Python utilizată frecvent în știința datelor (De bază)](https://philoli.com/python-tutorails-basic-level/)
[Sintaxa Python utilizată frecvent în știința datelor (Avansat)](https://philoli.com/python-tutorails-advanced-level/)

Acest capitol se concentrează pe prezentarea sintaxei și funcționalităților avansate Python (bazate pe Python 2.7) care sunt foarte utile în prelucrarea datelor.

<!--more-->

### Sortare (Sorting)

Dacă vrei să sortezi o listă Python, poți folosi metoda `sort` a listei. Dacă nu vrei să modifici lista originală, poți folosi funcția `sorted` care returnează o nouă listă sortată:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x rămâne neschimbat
x.sort()            # acum x = [1,2,3,4]
# sort sau sorted sortează implicit lista în ordine crescătoare.
```

Dacă vrei să sortezi în ordine descrescătoare, poți specifica parametrul `reverse = True`.

De asemenea, îți poți personaliza funcția de sortare pentru a sorta lista după o cheie specificată:

```python
# Sortează în ordine descrescătoare după valoarea absolută
x = sorted([-4,1,-2,3], key=abs, reverse=True) # este [-4,3,-2,1]
# Sortează în ordine descrescătoare după numărul de apariții ale cuvintelor
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Înțelegeri de listă (List Comprehensions)

Ne vom confrunta adesea cu situația în care vrem să extragem anumite elemente dintr-o listă pentru a forma o nouă listă, sau să modificăm valorile unor elemente, sau ambele. Abordarea idiomatică în Python este să folosim **înțelegerile de listă (List Comprehensions)**:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Similar, poți transforma liste în dicționare sau seturi:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Dacă nu ai nevoie să folosești elementele din listă, poți folosi o cratimă jos (underscore) ca variabilă:

```python
zeroes = [0 for _ in even_numbers] # Are aceeași lungime ca lista even_numbers
```

Înțelegerile de listă suportă bucle `for` multiple:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 100 de perechi în total: (0,0) (0,1) ... (9,8), (9,9)
```

Buclele `for` ulterioare pot folosi rezultatele buclelor `for` anterioare:

```python
increasing_pairs = [(x, y)                      # Conține doar perechi unde x < y
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Vom folosi des înțelegerile de listă în viitor.

### Generatoare și Iteratori (Generators and Iterators)

O problemă cu listele este că pot deveni foarte mari fără să-ți dai seama. De exemplu, `range(1000000)` va genera o listă cu un milion de elemente. Dacă procesezi datele unul câte unul, poate dura prea mult (sau se poate epuiza memoria). Dar, în realitate, s-ar putea să ai nevoie doar de primele câteva elemente, iar celelalte operații ar fi redundante.

Generatoarele îți permit să iterezi doar prin datele de care ai nevoie. Poți crea un generator folosind o funcție și o expresie `yield`:

```python
def lazy_range(n):
    """o versiune "leneșă" a lui range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

**Notă (traducătorului):**
Un generator este, de asemenea, un tip special de iterator, iar `yield` este cheia pentru implementarea iterării de către generator. Acționează ca un punct de pauză și reluare pentru execuția generatorului, permițând ca o valoare să fie atribuită expresiei `yield` sau ca valoarea expresiei `yield` să fie returnată. Orice funcție care conține o instrucțiune `yield` este numită generator. Când un generator este suspendat, își salvează starea curentă de execuție și o reia la următoarea execuție pentru a produce următoarea valoare iterată. Iterarea cu liste va ocupa o cantitate mare de spațiu de memorie, în timp ce utilizarea generatoarelor ocupă aproximativ un singur spațiu de memorie, realizând astfel economii de memorie.

Următoarea buclă va consuma valorile din `yield` una câte una până la epuizare:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(De fapt, Python are o funcție încorporată care realizează același efect ca `_lazy_range_` de mai sus, numită `xrange` în Python 2 și `range` (care este lazy) în Python 3.) Aceasta înseamnă că poți crea o secvență infinită:

```python
def natural_numbers():
    """Returnează 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Cu toate acestea, nu este recomandat să folosești astfel de instrucțiuni fără o logică de ieșire din buclă.

**SUGESTIE**
> Un dezavantaj al iterării cu generatoare este că poți itera prin elemente doar o singură dată, de la început până la sfârșit. Dacă vrei să iterezi de mai multe ori, trebuie să creezi un nou generator de fiecare dată sau să folosești o listă.

A doua modalitate de a crea un generator: folosind o expresie de înțelegere între paranteze rotunde:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Știm că metoda `items()` a dicționarelor returnează o listă cu toate perechile cheie-valoare din dicționar, dar, mai des, folosim metoda generator `iteritems()` pentru a itera, producând și returnând o singură pereche cheie-valoare la un moment dat.

### Aleatoriu (Randomness)
Când studiem știința datelor, vom avea adesea nevoie să generăm numere aleatoare, așa că este suficient să importăm modulul `random` pentru a-l folosi:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generează un număr aleator
# 0.7579544029403025,         # Numerele aleatoare sunt normalizate, variind între 0 și 1
# 0.420571580830845,          # Această funcție este cea mai des folosită pentru a genera numere aleatoare
# 0.25891675029296335]
```

Dacă vrei să obții rezultate reproductibile, poți face ca modulul `random` să genereze numere pseudo-aleatoare (adică deterministe) pe baza stării interne setate de `random.seed`:

```python
random.seed(10)           # set the seed to 10
print random.random()     # 0.57140259469
random.seed(10)           # reset the seed to 10
print random.random()     # 0.57140259469 again
```

Uneori folosim și funcția `random.randrange` pentru a genera un număr aleatoriu într-un interval specificat:

```python
random.randrange(10)      # Alege aleatoriu un număr din range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Alege aleatoriu un număr din range(3, 6) = [3, 4, 5]
```

Există și alte metode care sunt uneori foarte utile, de exemplu, `random.shuffle` va amesteca ordinea elementelor dintr-o listă, generând o listă rearanjată aleatoriu:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Rezultatul tău ar trebui să fie diferit)
```

Dacă vrei să alegi un element aleatoriu dintr-o listă, poți folosi metoda `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Am obținut "Bob"
```

Dacă vrei să generezi o secvență aleatoare, dar fără a modifica lista originală, poți folosi metoda `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Poți alege mai multe eșantioane aleatoare (cu înlocuire) prin apeluri repetate:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Expresii regulate (Regular Expressions)

Expresiile regulate sunt folosite pentru căutarea textului. Sunt puțin complexe, dar extrem de utile, existând multe cărți dedicate în întregime explicării lor. Le vom explica în detaliu pe măsură ce le întâlnim, iar mai jos sunt câteva exemple de utilizare a expresiilor regulate în Python:

```python
import re
print all([                                 # Toate afirmațiile de mai jos returnează True, deoarece
    not re.match("a", "cat"),               # * 'cat' nu începe cu 'a'
    re.search("a", "cat"),                  # * 'cat' conține litera 'a'
    not re.search("c", "dog"),              # * 'dog' nu conține litera 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Împarte cuvântul în trei părți ['c','r','s'] pe baza lui 'a' sau 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Înlocuiește cifrele cu o cratimă
    ])                                      # Afișează True
```

### Programare orientată pe obiecte (Object-Oriented Programming)

La fel ca multe alte limbaje, Python îți permite să definești clase care încapsulează date și funcții care operează asupra lor. Le vom folosi ocazional pentru a face codul nostru mai clar și mai concis. Cel mai simplu mod de a le explica este probabil prin construirea unui exemplu cu multe comentarii. Presupunând că nu există o implementare încorporată a seturilor în Python, am putea dori să creăm propria noastră clasă `Set`. Deci, ce funcționalități ar trebui să aibă această clasă? De exemplu, având un `Set`, trebuie să putem adăuga elemente, să le eliminăm și să verificăm dacă conține o anumită valoare. Prin urmare, vom crea toate aceste funcționalități ca funcții membre ale clasei. Astfel, vom putea accesa aceste funcții membre folosind operatorul punct după obiectul `Set`:

```python
# Prin convenție, dăm numele claselor în _PascalCase_
class Set:
    # Acestea sunt funcții membre
    # Fiecare funcție membră are un parametru "self" plasat pe primul loc (o altă convenție)
    # "self" corespunde obiectului Set specific utilizat

    def __init__(self, values=None):
        """Aceasta este funcția de creare
        Este apelată ori de câte ori creezi un nou Set
        Poate fi apelată astfel:
        s1 = Set() # Set gol
        s2 = Set([1,2,2,3]) # Inițializează setul cu valori specificate"""
        self.dict = {} # Fiecare instanță a Set-ului are propriul atribut dict
        # Folosim acest atribut pentru a urmări fiecare membru
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Aceasta este reprezentarea șir de caractere a obiectului Set
        Poți obține o reprezentare șir de caractere a obiectului tastând numele acestuia în consola Python sau folosind metoda str()"""
        return "Set: " + str(self.dict.keys())

    # Vom indica apartenența prin a deveni o cheie în self.dict și a seta valoarea cheii la True
    def add(self, value):
        self.dict[value] = True

    # Dacă parametrul este o cheie în dicționar, valoarea corespunzătoare este în Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Apoi putem folosi `Set` în acest fel:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Instrumente funcționale (Functional Tools)

#### Funcții parțiale (`partial`)

Când se transmit funcții, uneori vom dori să folosim o parte din funcționalitatea unei funcții pentru a crea o nouă funcție. Ca un exemplu simplu, să presupunem că avem o funcție cu două variabile:

```python
def exp(base, power):
    return base ** power
```

Vrem să o folosim pentru a crea o funcție care primește o singură variabilă și returnează rezultatul funcției exponențiale `exp(2, power)` cu baza 2.

Desigur, am putea defini o nouă funcție cu `def`, deși acest lucru nu pare foarte inteligent:

```python
def two_to_the(power):
  return exp(2, power)
```

O abordare mai inteligentă este să folosim metoda `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Funcția curentă are o singură variabilă
print two_to_the(3)               # 8
```

Dacă specifici numele, poți folosi metoda `partial` și pentru a completa alți parametri:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Dacă încerci să manipulezi parametrii în mijlocul unei funcții, programul va deveni rapid confuz, așa că încearcă să eviți acest comportament.

#### Mapare (`map`)

Ocazional vom folosi funcții precum `map`, `reduce` și `filter` ca alternative la funcționalitatea înțelegerilor de listă:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # La fel ca mai sus
list_doubler = partial(map, double)     # Funcția are rolul de a dubla lista
twice_xs = list_doubler(xs)             # Tot [2, 4, 6, 8]
```

Metoda `map` poate fi utilizată și pentru a mapa funcții cu mai mulți parametri la mai multe liste:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrare (`filter`)

Similar, `filter` implementează funcționalitatea `if`-ului din înțelegerile de listă:

```python
def is_even(x):
    """Returnează True dacă x este par, False dacă x este impar"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # La fel ca mai sus
list_evener = partial(filter, is_even)    # Această funcție implementează funcția de filtrare
x_evens = list_evener(xs)                 # Tot [2, 4]
```

#### Reducere (`reduce`)

Metoda `reduce` combină continuu primul și al doilea element dintr-o listă, apoi combină rezultatul cu al treilea element și repetă acest proces până când se obține un singur rezultat:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Această funcție realizează reducerea unei liste
x_product = list_product(xs)              # Tot 24
```

### Enumerare (`enumerate`)

Ocazional, vei întâlni situații în care trebuie să folosești atât elementul, cât și indexul său în timp ce iterezi printr-o listă:

```python
# Mai puțin "Pythonic" (mai puțin concis și elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# De asemenea, mai puțin "Pythonic" (mai puțin concis și elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Cea mai concisă abordare este să folosești metoda de enumerare `enumerate` care generează tupluri `(index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Similar, dacă vrei să folosești doar indexul:

```python
for i in range(len(documents)): do_something(i)   # Nu este concis
for i, _ in enumerate(documents): do_something(i) # Concis
```

Vom folosi des această metodă mai târziu.

### Arhivare și dezarhivare argumente (`zip` și `Argument Unpacking`)

#### Arhivare (`zip`)

Des, vom procesa două sau mai multe liste prin arhivare (zipping). Arhivarea transformă, de fapt, mai multe liste într-o singură listă de tupluri corespondente:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Rezultă [('a', 1), ('b', 2), ('c', 3)]
```

#### Dezarhivare argumente (`Argument Unpacking`)

Dacă mai multe liste au lungimi diferite, procesul de arhivare se va opri la sfârșitul celei mai scurte liste. Poți folosi și un truc ciudat de "dezarhivare" pentru a dezarhiva o listă:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Asteriscul este folosit aici pentru a realiza dezarhivarea argumentelor, utilizând elementele din `pairs` ca argumente individuale pentru `zip`. Următorul apel are același efect:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Returnează [('a','b','c'), ('1','2','3')]
```

Dezarhivarea argumentelor poate fi utilizată și cu alte funcții:

```python
def add(a, b): return a + b

add(1, 2)           # Returnează 3
add([1, 2])         # Eroare
add(*[1, 2])        # Returnează 3
```

Deși nu este întotdeauna practic, este un truc bun pentru a face codul mai concis.

### Transmitere de argumente cu lungime variabilă (`*args` și `**kwargs`)

Să presupunem că vrem să creăm o funcție de ordin superior care primește o funcție veche și returnează o nouă funcție, noua funcție fiind rezultatul funcției vechi înmulțit cu 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Exemplu de rulare:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Cu toate acestea, metoda nu funcționează bine dacă se transmit mai mult de un argument:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Eroare TypeError: g() takes exactly 1 argument (2 given)
```

Așadar, trebuie să specificăm o funcție care poate accepta un număr arbitrar de argumente și apoi să folosim dezarhivarea argumentelor pentru a transmite mai multe argumente, ceea ce poate părea puțin magic:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Rezultat:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Când definim o funcție în acest fel, `args` (prescurtare de la arguments) este un tuplu care conține argumente fără nume, iar `kwargs` (prescurtare de la keyword arguments) este un dicționar care conține argumente numite.

Ele pot fi folosite și atunci când argumentele transmise sunt liste (sau tupluri) sau dicționare, pentru a le dezarhiva în argumente poziționale și, respectiv, nominale:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Poți folosi acest lucru cu tot felul de metode ciudate, dar noi îl vom folosi doar pentru a rezolva problema transmiterii unui număr variabil de argumente către funcții de ordin superior:

```python
def doubler_correct(f):
    """Funcționează eficient, indiferent de f"""
    def g(*args, **kwargs):
        """Indiferent de numărul de parametri, această funcție îi va transmite corect către f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Bun venit în lumea științei datelor!

Ding! Felicitări, ai deschis o nouă poartă către o lume nouă! Acum poți să te bucuri de explorare!

**Lectură suplimentară:**

[Sintaxa Python utilizată frecvent în știința datelor (De bază)](https://philoli.com/python-tutorails-basic-level)
