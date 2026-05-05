---
title: Napredna Python sintaksa za nauku o podacima
date: 2018-11-07 23:53:13
tags: Python
categories: Nauka o podacima
mathjax: true
---
Poslednjih dana čitam knjigu [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), koja je odličan i razumljiv uvod u nauku o podacima. Jedno poglavlje u njoj predstavlja osnovnu i često korišćenu naprednu Python sintaksu za nauku o podacima. Smatram da je objašnjenje odlično, sažeto i jasno, pa sam ga preveo i ovde objavio kao podsetnik.

[Često korišćena Python sintaksa u nauci o podacima (osnovno)](https://philoli.com/python-tutorails-basic-level/)
[Često korišćena Python sintaksa u nauci o podacima (napredno)](https://philoli.com/python-tutorails-advanced-level/)

Ovo poglavlje se fokusira na predstavljanje napredne Python sintakse i funkcija koje su izuzetno korisne u obradi podataka (zasnovano na Pythonu 2.7).

<!--more-->

### Sortiranje

Ako želite da sortirate Python listu, možete koristiti metodu `sort` liste. Ako ne želite da izmenite originalnu listu, možete koristiti funkciju `sorted` koja vraća novu, sortiranu listu:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x ostaje nepromenjen
x.sort()            # sada je x = [1,2,3,4]
# sort ili sorted podrazumevano sortiraju listu od najmanjeg ka najvećem.
```

Ako želite da je sortirate od najvećeg ka najmanjem, možete navesti parametar `reverse = True`.

Takođe možete definisati sopstvenu funkciju za sortiranje, da biste sortirali listu prema navedenom ključu:

```python
# Sortira po apsolutnoj vrednosti od najveće ka najmanjoj
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Sortira po broju pojavljivanja reči od najvećeg ka najmanjem
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Razumevanje listi (List Comprehensions)

Često se dešava da želimo da izdvojimo određene elemente iz liste i formiramo novu listu, ili da promenimo vrednosti nekih elemenata, ili oboje. Uobičajeni način da se to uradi u Pythonu je putem razumevanja listi (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Slično tome, liste možete pretvoriti u rečnike ili skupove:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Ako ne morate da koristite elemente liste, možete koristiti donju crtu kao promenljivu:

```python
zeroes = [0 for _ in even_numbers] # Iste dužine kao lista even_numbers
```

Razumevanje listi podržava višestruke `for` petlje:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Ukupno 100 parova: (0,0) (0,1) ... (9,8), (9,9)
```

Naredna `for` petlja može koristiti rezultat prethodne `for` petlje:

```python
increasing_pairs = [(x, y)                      # Sadrži samo parove gde je x < y
                    for x in range(10)          # range(lo, hi) je jednako
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Razumevanje listi ćemo često koristiti u budućnosti.

### Generatori i iteratori

Problem sa listama je što mogu postati izuzetno velike, na primer, `range(1000000)` će generisati listu od milion elemenata. Ako se podaci obrađuju jedan po jedan, to može potrajati predugo (ili potrošiti svu memoriju). U stvarnosti, možda vam je potrebno samo nekoliko prvih elemenata, čineći ostale operacije suvišnim.

Generatori vam omogućavaju da iterirate samo kroz podatke koji su vam potrebni. Možete kreirati generator koristeći funkciju i `yield` izraz:

```python
def lazy_range(n):
    """lenja verzija funkcije range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Napomena prevodioca:
Generatori su takođe vrsta posebnih iteratora, a `yield` je ključan za njihovu implementaciju iteracije. On služi kao tačka pauze i nastavka izvršavanja generatora; `yield` izrazu se može dodeliti vrednost, a takođe može vratiti vrednost. Svaka funkcija koja sadrži `yield` naredbu naziva se generatorom. Kada se generator pauzira, on čuva svoje trenutno stanje izvršavanja i nastavlja ga pri sledećem pozivu, kako bi dobio sledeću iterativnu vrednost. Iteriranje pomoću listi će zauzeti mnogo memorijskog prostora, dok korišćenje generatora zauzima skoro samo jedan memorijski prostor, čime se postiže ušteda memorije.

Sledeća petlja će trošiti jednu po jednu vrednost iz `yield` izraza dok se sve ne potroše:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Zapravo, Python ima ugrađenu funkciju koja postiže efekat sličan `_lazy_range_`, nazvanu `xrange`, a u Pythonu 3 se zove `range`.) To znači da možete kreirati beskonačan niz:

```python
def natural_numbers():
    """Vraća 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Međutim, ne preporučuje se korišćenje ovakvih iskaza bez logike za izlazak iz petlje.

**TIP**
> Jedan nedostatak iteracije pomoću generatora je to što se elementi mogu iterirati samo jednom od početka do kraja. Ako želite da iterirate više puta, morate svaki put kreirati novi generator ili koristiti listu.

Drugi način kreiranja generatora: korišćenje izraza razumevanja unutar zagrada:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Znamo da metoda `items()` rečnika vraća listu svih parova ključ-vrednost u rečniku, ali u većini slučajeva, koristimo `iteritems()` generatorsku metodu za iteraciju, koja svaki put generiše i vraća samo jedan par ključ-vrednost.

### Slučajnost (Randomness)
Prilikom učenja nauke o podacima, često ćemo morati da generišemo nasumične brojeve, pa je dovoljno samo uvesti `random` modul da bismo ga koristili:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generiše nasumičan broj
# 0.7579544029403025,         # Nasumični brojevi su normalizovani, u opsegu između 0 i 1
# 0.420571580830845,          # Ova funkcija je najčešće korišćena za generisanje nasumičnih brojeva
# 0.25891675029296335]
```

Ako želite da dobijete ponovljive rezultate, možete dozvoliti `random` modulu da generiše pseudo-nasumične (tj. determinističke) brojeve na osnovu internog stanja postavljenog pomoću `random.seed`:

```python
random.seed(10)           # postavlja seed na 10
print random.random()     # 0.57140259469
random.seed(10)           # ponovo postavlja seed na 10
print random.random()     # ponovo 0.57140259469
```

Ponekad ćemo koristiti i funkciju `random.randrange` za generisanje nasumičnog broja unutar određenog opsega:

```python
random.randrange(10)      # Nasumično bira broj iz range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Nasumično bira broj iz range(3, 6) = [3, 4, 5]
```

Postoje i druge metode koje su ponekad vrlo zgodne, na primer, `random.shuffle` će promešati redosled elemenata u listi, generišući novu, nasumično permutovanu listu:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Vaš rezultat bi trebalo da bude drugačiji)
```

Ako želite da nasumično izaberete jedan element iz liste, možete koristiti metodu `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # (Ja sam dobio "Bob")
```

Ako želite da generišete nasumičan niz, a da pritom ne izmenite originalnu listu, možete koristiti metodu `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Možete izabrati više nasumičnih uzoraka (dozvoljavajući ponavljanje) višestrukim pozivanjem:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regularni izrazi

Regularni izrazi se koriste za pretraživanje teksta. Iako su donekle kompleksni, izuzetno su korisni, zbog čega postoji mnogo knjiga posvećenih samo njima. Detaljno ćemo ih objasniti kada ih budemo sretali. Evo nekoliko primera korišćenja regularnih izraza u Pythonu:

```python
import re
print all([                                 # Sve sledeće tvrdnje vraćaju true, jer
    not re.match("a", "cat"),               # * 'cat' ne počinje sa 'a'
    re.search("a", "cat"),                  # * 'cat' sadrži slovo 'a'
    not re.search("c", "dog"),              # * 'dog' ne sadrži slovo 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Reč se deli na tri dela ['c','r','s'] prema 'a' ili 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Brojevi su zamenjeni crticama
    ])                                      # Izlaz: True
```

### Objektno-orijentisano programiranje

Kao i mnogi drugi jezici, Python vam omogućava da definišete klase koje enkapsuliraju podatke i funkcije koje manipulišu tim podacima. Ponekad ćemo ih koristiti da naš kod bude jasniji i sažetiji. Najjednostavniji način da ih objasnimo je kroz primer sa mnogo komentara. Pretpostavimo da ne postoji ugrađeni Python skup; možda bismo želeli da kreiramo sopstvenu klasu `Set`. Koje bi funkcionalnosti ta klasa trebalo da ima? Na primer, kada nam je dat `Set`, treba da možemo da dodamo stavke u njega, uklonimo stavke iz njega i proverimo da li sadrži određenu vrednost. Stoga ćemo sve ove funkcionalnosti kreirati kao članske funkcije ove klase. Na taj način, ovim članskim funkcijama možemo pristupiti koristeći tačku nakon `Set` objekta:

```python
# Po konvenciji, imena klasa pišemo u _PascalCase_ formatu
class Set:
    # Ovo su članske funkcije
    # Svaka članska funkcija ima "self" parametar na prvom mestu (još jedna konvencija)
    # „self“ se odnosi na konkretan Set objekat koji se koristi

    def __init__(self, values=None):
        """Ovo je funkcija za kreiranje
        Ova funkcija se poziva svaki put kada kreirate novi Set
        Može se pozvati ovako:
        s1 = Set() # prazan skup
        s2 = Set([1,2,2,3]) # inicijalizuje skup sa datim vrednostima"""
        self.dict = {} # Svaka instanca Set-a ima svoj atribut dict
        # Koristimo ga za praćenje svakog člana
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Ovo je string reprezentacija Set objekta
        Možete je dobiti kucanjem imena objekta u Python konzoli ili korišćenjem str() metode"""
        return "Set: " + str(self.dict.keys())

    # Članstvo predstavljamo tako što postajemo ključ u self.dict i postavljamo vrednost ključa na True
    def add(self, value):
        self.dict[value] = True

    # Ako je argument ključ u rečniku, odgovarajuća vrednost je u Set-u
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Zatim možemo koristiti `Set` na sledeći način:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionalni alati

#### Delimične funkcije (partial)

Kada prosleđujemo funkcije, ponekad želimo da koristimo delimičnu funkcionalnost neke funkcije da bismo kreirali novu. Uzmimo jednostavan primer, funkciju sa dve promenljive:

```python
def exp(base, power):
    return base ** power
```

Želimo da je iskoristimo za kreiranje funkcije koja uzima jednu promenljivu i vraća rezultat funkcije stepena sa bazom 2, tj. `exp(2, power)`.

Naravno, mogli bismo da definišemo novu funkciju koristeći `def`, mada to možda nije najpametnije:

```python
def two_to_the(power):
  return exp(2, power)
```

Pametniji pristup je korišćenje metode `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Sada funkcija ima samo jednu promenljivu
print two_to_the(3)               # 8
```

Ako su imena navedena, `partial` metoda se takođe može koristiti za popunjavanje drugih parametara:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Ako pokušate da manipulišete parametrima usred funkcije, program će brzo postati neuredan, pa pokušajte da izbegnete takvo ponašanje.

#### Mapiranje (map)

Povremeno ćemo koristiti funkcije kao što su `map`, `reduce` i `filter` kao alternative za funkcionalnost razumevanja listi:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Isto kao gore
list_doubler = partial(map, double)     # Funkcija za dupliranje liste
twice_xs = list_doubler(xs)             # Takođe [2, 4, 6, 8]
```

Metoda `map` se takođe može koristiti za mapiranje funkcija sa više argumenata na više listi:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtriranje (filter)

Slično tome, `filter` implementira funkcionalnost `if` uslova u razumevanju listi:

```python
def is_even(x):
    """Vraća True ako je x paran, False ako je x neparan"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Isto kao gore
list_evener = partial(filter, is_even)    # Ova funkcija implementira filtriranje
x_evens = list_evener(xs)                 # Takođe [2, 4]
```

#### Redukcija (reduce)

Metoda `reduce` neprestano spaja prvi i drugi element liste, zatim spaja rezultat sa trećim elementom, i ponavlja ovaj proces dok se ne dobije jedinstven rezultat:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Ova funkcija redukuje listu
x_product = list_product(xs)              # Takođe 24
```

### Enumerate

Povremeno se dešava da prilikom iteracije kroz listu želimo da koristimo i element i njegov indeks:

```python
# Nije "Pythonic" (nije sažeto i elegantno)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Takođe nije "Pythonic" (nije sažeto i elegantno)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Najsažetiji način je korišćenje metode `enumerate` za generisanje torki `(indeks, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Slično tome, ako želite da koristite samo indeks:

```python
for i in range(len(documents)): do_something(i)   # Nije sažeto
for i, _ in enumerate(documents): do_something(i) # Sažeto
```

Ovu metodu ćemo često koristiti u budućnosti.

### Zipovanje i raspakivanje argumenata

#### Zipovanje (zip)

Često ćemo "zipovati" dve ili više listi. Zipovanje je, u stvari, transformisanje više listi u jednu listu odgovarajućih torki:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Rezultat je [('a', 1), ('b', 2), ('c', 3)]
```

#### Raspakivanje argumenata (Argument Unpacking)

Ako više listi ima nejednake dužine, proces zipovanja će se zaustaviti na kraju najkraće liste. Takođe možete koristiti "unzip" tehniku za raspakivanje listi:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Zvezdica se koristi za raspakivanje argumenata, gde se elementi `pairs` koriste kao pojedinačni argumenti funkcije `zip`. Sledeći način pozivanja ima isti efekat:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Vraća [('a','b','c'), ('1','2','3')]
```

Raspakivanje argumenata se takođe može koristiti zajedno sa drugim funkcijama:

```python
def add(a, b): return a + b

add(1, 2)           # Vraća 3
add([1, 2])         # Izaziva grešku
add(*[1, 2])        # Vraća 3
```

Iako možda nije uvek praktično, to je lep trik za pojednostavljivanje koda.

### Prosleđivanje argumenata proizvoljne dužine (args i kwargs)

Pretpostavimo da želimo da kreiramo funkciju višeg reda koja uzima staru funkciju i vraća novu funkciju koja je stara funkcija pomnožena sa 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Primer izvršavanja:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Međutim, ova metoda nije baš korisna kada je prosleđeno više od jednog argumenta:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Izaziva grešku TypeError: g() takes exactly 1 argument (2 given)
```

Stoga, moramo da definišemo funkciju koja može da primi proizvoljan broj argumenata, a zatim da koristimo raspakivanje argumenata za prosleđivanje više argumenata, što izgleda pomalo magično:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Izlaz:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Kada definišemo funkciju na ovaj način, `args` (skraćenica za arguments) je torka koja sadrži neimenovane argumente, dok je `kwargs` (skraćenica za keyword arguments) rečnik koji sadrži imenovane argumente.

Mogu se koristiti i kada su prosleđeni argumenti lista (ili torka) ili niz:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Možete je koristiti u kombinaciji sa raznim neobičnim metodama, ali mi ćemo je koristiti samo za rešavanje problema prosleđivanja argumenata promenljive dužine funkcijama višeg reda:

```python
def doubler_correct(f):
    """Radi efikasno bez obzira na f"""
    def g(*args, **kwargs):
        """Bez obzira na broj argumenata, ova funkcija će ih ispravno proslediti funkciji f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Dobrodošli u svet nauke o podacima!

Zing! Čestitamo, ponovo ste otvorili vrata novom svetu! Sada možete uživati u igri~

**Povezano čitanje:**

[Često korišćena Python sintaksa u nauci o podacima (osnovno)](https://philoli.com/python-tutorails-basic-level)
