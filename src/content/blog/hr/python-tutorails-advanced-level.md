---
title: Često korištena Python sintaksa u podatkovnoj znanosti (Napredno)
date: 2018-11-07 23:53:13
tags: Python
categories: Znanost o podacima
mathjax: true
---
Posljednjih nekoliko dana čitam ovu knjigu [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), koja je izvrsna i lako razumljiva uvodna knjiga u svijet podatkovne znanosti. Jedno poglavlje sjajno objašnjava osnove Python sintakse i naprednije koncepte koji se često koriste u podatkovnoj znanosti. Smatram da je objašnjenje izvrsno, sažeto i jasno, pa sam ga odlučio prevesti i objaviti ovdje kao podsjetnik.

[Često korištena Python sintaksa u podatkovnoj znanosti (osnove)](https://philoli.com/python-tutorails-basic-level/)
[Često korištena Python sintaksa u podatkovnoj znanosti (napredno)](https://philoli.com/python-tutorails-advanced-level/)

Ovo poglavlje fokusira se na napredne Python sintakse i funkcionalnosti (temeljene na Pythonu 2.7) koje su izuzetno korisne u obradi podataka.

<!--more-->

### Sortiranje

Ako želite sortirati Python listu, možete koristiti metodu `sort` same liste. Ako ne želite mijenjati originalnu listu, možete upotrijebiti funkciju `sorted` koja će vratiti novu, sortiranu listu:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x ostaje nepromijenjen
x.sort()            # sada x = [1,2,3,4]
# Metode sort ili sorted podrazumijevano sortiraju listu uzlazno (od manjeg prema većem).
```

Ako želite sortirati silazno (od većeg prema manjem), možete dodati parametar `reverse = True`.

Također možete definirati vlastitu funkciju za sortiranje, omogućujući listi da se sortira prema određenom ključu:

```python
# Sortiranje po apsolutnoj vrijednosti, od većeg prema manjem
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Sortiranje po broju pojavljivanja riječi, od većeg prema manjem
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List Comprehensions (Razumijevanje listi)

Često se nalazimo u situaciji kada želimo izdvojiti određene elemente iz liste kako bismo stvorili novu listu, ili promijeniti vrijednosti nekih elemenata, ili oboje. U Pythonu se za to najčešće koristi tehnika **List Comprehensions** (razumijevanje listi):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Slično tome, liste možete pretvoriti u rječnike ili skupove:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Ako vam elementi liste nisu potrebni, umjesto imena varijable možete koristiti podcrtu (`_`):

```python
zeroes = [0 for _ in even_numbers] # Ima istu duljinu kao lista even_numbers
```

List comprehensions podržavaju višestruke `for` petlje:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Ukupno 100 parova: (0,0) (0,1) ... (9,8), (9,9)
```

Kasnije `for` petlje mogu koristiti rezultate prethodnih `for` petlji:

```python
increasing_pairs = [(x, y)                      # Sadrži samo parove gdje je x < y
                    for x in range(10)          # range(lo, hi) je jednako
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
List comprehensions ćemo često koristiti u budućnosti.

### Generatori i Iteratori

Jedan problem s listama je što mogu postati izuzetno velike, na primjer, `range(1000000)` generirat će listu s milijun elemenata. Ako obrađujete samo jedan po jedan podatak, to može potrajati predugo (ili potrošiti svu memoriju). U stvarnosti, možda ćete koristiti samo prvih nekoliko podataka, čineći ostale operacije nepotrebnima.

Generatori vam omogućuju da iterirate samo kroz podatke koji su vam potrebni. Generator možete kreirati koristeći funkciju i `yield` izraz:

```python
def lazy_range(n):
    """'lijena' verzija funkcije range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Napomena prevoditelja:
Generatori su zapravo posebna vrsta iteratora, a `yield` je ključan za njihovu implementaciju. On služi kao točka pauze i nastavka izvršavanja generatora; vrijednost `yield` izraza može se dodijeliti ili vratiti. Bilo koja funkcija koja sadrži `yield` izjavu naziva se generator. Kada se izvršavanje generatora prekine, on sprema svoje trenutno stanje i nastavlja s tog mjesta pri sljedećem pozivu kako bi dao sljedeću iteriranu vrijednost. Korištenje iteracije putem listi može zauzeti veliku količinu memorije, dok generatori zauzimaju znatno manje, čime se štedi memorija.

Sljedeća petlja će trošiti jednu po jednu vrijednost iz `yield` izraza dok se sve ne potroše:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Zapravo, Python ima ugrađenu funkciju koja postiže isti efekt kao gornji `_lazy_range_`; u Pythonu 2 to je `xrange`, dok je u Pythonu 3 samo `range` 'lijen' po prirodi.) To znači da možete kreirati i beskonačne sekvence:

```python
def natural_numbers():
    """Vraća 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Međutim, ne preporučuje se korištenje takvih izraza bez logike izlaska iz petlje.

**TIP**
> Jedan nedostatak korištenja generatora za iteraciju je taj što se elementi mogu iterirati samo jednom, od početka do kraja. Ako želite iterirati više puta, morat ćete svaki put kreirati novi generator ili koristiti listu.

Drugi način za kreiranje generatora je korištenjem izraza unutar zagrada (tzv. generator expression):

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Znamo da metoda `items()` rječnika vraća listu svih parova ključ-vrijednost u rječniku. Međutim, češće ćemo koristiti generatorsku metodu `iteritems()` za iteraciju, koja generira i vraća samo jedan par ključ-vrijednost po pozivu.

### Slučajnost (Randomness)
Pri učenju podatkovne znanosti često ćemo trebati generirati nasumične brojeve, stoga je dovoljno uvesti modul `random` za korištenje:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generira nasumični broj
# 0.7579544029403025,         # Nasumični brojevi su normalizirani, u rasponu između 0 i 1
# 0.420571580830845,          # Ova funkcija je najčešće korištena za generiranje nasumičnih brojeva
# 0.25891675029296335]
```

Ako želite postići ponovljive rezultate, možete postaviti unutarnje stanje modula `random` pomoću `random.seed`, što će generirati pseudo-nasumične (tj. determinističke) brojeve:

```python
random.seed(10)           # postavlja 'sjeme' na 10
print random.random()     # 0.57140259469
random.seed(10)           # ponovno postavlja 'sjeme' na 10
print random.random()     # 0.57140259469 opet
```

Ponekad ćemo koristiti i funkciju `random.randrange` za generiranje nasumičnog broja unutar određenog raspona:

```python
random.randrange(10)      # Nasumično bira broj iz range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Nasumično bira broj iz range(3, 6) = [3, 4, 5]
```

Postoje i druge metode koje su ponekad vrlo korisne, na primjer, `random.shuffle` koja će promiješati elemente u listi, stvarajući novu, nasumično permutiranu listu:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Vaš rezultat bi trebao biti drugačiji)
```

Ako želite nasumično odabrati jedan element iz liste, možete koristiti metodu `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Ja sam dobio "Bob"
```

Ako želite generirati nasumičnu sekvencu, a da pritom ne promijenite originalnu listu, možete koristiti metodu `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Višestrukim pozivima možete dobiti više nasumičnih uzoraka (s ponavljanjem):

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regularni Izrazi (Regular Expressions)

Regularni izrazi koriste se za pretraživanje teksta. Iako su donekle složeni, izuzetno su korisni, zbog čega postoje brojne knjige posvećene isključivo njima. Detaljnije ćemo ih objasniti kada se s njima susretnemo. Evo nekoliko primjera korištenja regularnih izraza u Pythonu:

```python
import re
print all([                                 # Sve sljedeće tvrdnje vraćaju True, jer:
    not re.match("a", "cat"),               # * 'cat' ne počinje s 'a'
    re.search("a", "cat"),                  # * 'cat' sadrži slovo 'a'
    not re.search("c", "dog"),              # * 'dog' ne sadrži slovo 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Dijeli riječ na tri dijela ['c','r','s'] prema 'a' ili 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Zamjenjuje brojeve crticama
    ])                                      # Rezultat: True
```

### Objektno-orijentirano programiranje (Object-Oriented Programming)

Kao i mnogi drugi jezici, Python vam omogućuje definiranje klasa koje enkapsuliraju podatke i funkcije koje manipuliraju tim podacima. Ponekad ćemo ih koristiti kako bismo naš kod učinili jasnijim i konciznijim. Najjednostavniji način za objašnjenje jest kroz primjer s mnogo komentara. Pretpostavimo da Python nema ugrađene skupove (Set), pa bismo možda htjeli stvoriti vlastitu klasu `Set`. Koje bi funkcionalnosti ta klasa trebala imati? Recimo, kada imamo `Set`, trebamo moći dodavati elemente, uklanjati ih i provjeravati sadrži li određenu vrijednost. Stoga ćemo sve te funkcionalnosti kreirati kao članske funkcije klase. Na taj način, te članske funkcije možemo pozivati pomoću točke nakon objekta `Set`:

```python
# Po konvenciji, naziv klase pišemo u _PascalCase_ stilu
class Set:
    # Ovo su članske funkcije
    # Svaka članska funkcija ima parametar "self" na prvom mjestu (još jedna konvencija)
    # “self” se odnosi na konkretni objekt Set-a koji se koristi

    def __init__(self, values=None):
        """Ovo je konstruktor (funkcija za kreiranje)
        Ova funkcija se poziva svaki put kada kreirate novi Set
        Može se pozvati ovako:
        s1 = Set() # Prazan skup
        s2 = Set([1,2,2,3]) # Inicijalizira skup s navedenim vrijednostima"""
        self.dict = {} # Svaka instanca klase Set ima svoj atribut dict
        # Koristimo ovaj atribut za praćenje svakog člana
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Ovo je string reprezentacija Set objekta
        Možete je dobiti ispisom objekta u Python konzoli ili pozivom str() metode na objektu"""
        return "Set: " + str(self.dict.keys())

    # Članstvo ćemo označavati tako da element postane ključ u self.dict, s vrijednošću True
    def add(self, value):
        self.dict[value] = True

    # Ako je argument ključ u rječniku, odgovarajuća vrijednost je u Setu
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Tada `Set` možemo koristiti ovako:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionalni Alati (Functional Tools)

#### Parcijalne funkcije (partial)

Kada radimo s funkcijama, ponekad želimo iskoristiti dio funkcionalnosti neke funkcije za stvaranje nove. Uzmimo jednostavan primjer, pretpostavimo da imamo funkciju s dvije varijable:

```python
def exp(base, power):
    return base ** power
```

Želimo je iskoristiti za stvaranje nove funkcije koja prima samo jednu varijablu i vraća rezultat funkcije potenciranja `exp(2, power)` s bazom 2.

Naravno, mogli bismo definirati novu funkciju koristeći `def`, iako to možda nije najelegantnije rješenje:

```python
def two_to_the(power):
  return exp(2, power)
```

Pametniji pristup je korištenje metode `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Sada funkcija ima samo jednu varijablu
print two_to_the(3)               # 8
```

Ako su parametri imenovani, `partial` metoda se može koristiti i za popunjavanje drugih argumenata:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Ako pokušate previše "petljati" s parametrima usred funkcije, program će brzo postati neuredan, stoga pokušajte izbjegavati takvo ponašanje.

#### Mapiranje (map)

Povremeno ćemo koristiti funkcije kao što su `map`, `reduce` i `filter` kao alternative list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Isto kao gore
list_doubler = partial(map, double)     # Funkcija udvostručuje listu
twice_xs = list_doubler(xs)             # Također [2, 4, 6, 8]
```

Metoda `map` također se može koristiti za mapiranje funkcija s više argumenata na više listi:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtriranje (filter)

Slično tome, `filter` funkcija implementira funkcionalnost `if` izraza iz list comprehensions:

```python
def is_even(x):
    """Vraća True ako je x paran, False ako je x neparan"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Isto kao gore
list_evener = partial(filter, is_even)    # Ova funkcija implementira funkcionalnost filtriranja
x_evens = list_evener(xs)                 # Također [2, 4]
```

#### Redukcija (reduce)

Metoda `reduce` uzastopno spaja prvi i drugi element liste, zatim rezultat spaja s trećim elementom, i tako dalje, sve dok se ne dobije jedinstven rezultat:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Ova funkcija implementira redukciju liste
x_product = list_product(xs)              # Također 24
```

### Enumeracija (enumerate)

Ponekad se dogodi da prilikom iteracije kroz listu želimo istovremeno koristiti i element i njegov indeks:

```python
# Manje "Pythonic" (manje koncizno i elegantno)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Također manje "Pythonic" (manje koncizno i elegantno)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Najkoncizniji pristup je korištenje metode `enumerate` koja generira tuple `(indeks, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Slično tome, ako želite koristiti samo indeks:

```python
for i in range(len(documents)): do_something(i)   # Nije koncizno
for i, _ in enumerate(documents): do_something(i) # Koncizno
```

Ovu metodu ćemo često koristiti u budućnosti.

### Zip i raspakiranje argumenata (zip and Argument Unpacking)

#### Zippanje (zip)

Često ćemo "zippati" dvije ili više listi. Zippanje je zapravo pretvaranje više listi u jednu listu odgovarajućih tupleova:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Rezultat je [('a', 1), ('b', 2), ('c', 3)]
```

#### Raspakiranje argumenata (Argument Unpacking)

Ako duljine listi nisu jednake, proces zippanja će se zaustaviti na kraju najkraće liste. Također možete koristiti zanimljiv trik "unzipa" za raspakiranje liste:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Zvjezdica (`*`) koristi se za raspakiranje argumenata, što znači da elemente `pairs` koristi kao pojedinačne argumente za `zip` funkciju. Sljedeći način pozivanja ima isti učinak:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Vraća [('a','b','c'), ('1','2','3')]
```

Raspakiranje argumenata može se koristiti i s drugim funkcijama:

```python
def add(a, b): return a + b

add(1, 2)           # Vraća 3
add([1, 2])         # Javlja grešku
add(*[1, 2])        # Vraća 3
```

Iako možda nije uvijek praktično, ovo je zgodan trik za pisanje konciznijeg koda.

### Proslijeđivanje varijabilnog broja argumenata (args and kwargs)

Pretpostavimo da želimo stvoriti funkciju višeg reda koja prima staru funkciju i vraća novu funkciju koja je rezultat stare funkcije pomnožen s 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Primjer korištenja:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Međutim, ako se proslijedi više od jednog argumenta, ova metoda više neće raditi:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Javlja grešku TypeError: g() takes exactly 1 argument (2 given)
```

Stoga moramo definirati funkciju koja može primiti proizvoljan broj argumenata, a zatim ih proslijediti koristeći raspakiranje argumenata, što može izgledati pomalo magično:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Rezultat ispisuje:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Kada ovako definiramo funkciju, `args` (skraćeno od arguments) je tuple koji sadrži neimenovane argumente, dok je `kwargs` (skraćeno od keyword arguments) rječnik koji sadrži imenovane argumente.

Mogu se koristiti i kada su proslijeđeni argumenti liste (ili tupleovi) ili rječnici:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Možete ih koristiti s raznim neobičnim metodama, ali mi ćemo ih koristiti prvenstveno za rješavanje problema prosljeđivanja varijabilnog broja argumenata funkcijama višeg reda:

```python
def doubler_correct(f):
    """Radi ispravno bez obzira na funkciju f"""
    def g(*args, **kwargs):
        """Bez obzira na broj argumenata, ova funkcija ih ispravno prosljeđuje funkciji f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Dobrodošli u svijet podatkovne znanosti!

Ding! Čestitamo, upravo ste otvorili vrata novog svijeta! Sada se možete prepustiti zabavi~

**Povezano čitanje:**

[Često korištena Python sintaksa u podatkovnoj znanosti (osnove)](https://philoli.com/python-tutorails-basic-level)
