---
title: Zaawansowane konstrukcje Pythona w nauce o danych
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 
Ostatnio czytałem książkę [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), która jest świetnym i przystępnym wprowadzeniem do nauki o danych. Jeden z jej rozdziałów przedstawia podstawową składnię Pythona oraz zaawansowane konstrukcje często używane w data science. Uznałem, że jest to tak dobrze i zwięźle wyjaśnione, że postanowiłem to przetłumaczyć i umieścić tutaj jako notatki.  
[Często używane konstrukcje Pythona w nauce o danych (podstawy)](https://philoli.com/python-tutorails-basic-level/)  
[Często używane konstrukcje Pythona w nauce o danych (zaawansowane)](https://philoli.com/python-tutorails-advanced-level/)  

Ten rozdział skupia się na przedstawieniu zaawansowanych konstrukcji i funkcji Pythona, które są niezwykle przydatne w przetwarzaniu danych (oparte na Pythonie 2.7).

<!--more-->

### Sortowanie

Jeśli chcesz posortować listę w Pythonie, możesz użyć metody `sort` dostępnej dla list. Jeśli nie chcesz modyfikować oryginalnej listy, użyj funkcji `sorted`, która zwraca nową, posortowaną listę:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x pozostaje niezmienione
x.sort()            # teraz x = [1,2,3,4]
sort lub sorted domyślnie sortują listy rosnąco.
```

Aby posortować malejąco, możesz podać parametr `reverse = True`.

Możesz również zdefiniować własną funkcję sortującą, aby posortować listę według określonego klucza:

```python
# Sortowanie malejąco według wartości bezwzględnej
x = sorted([-4,1,-2,3], key=abs, reverse=True) # daje [-4,3,-2,1]
# Sortowanie malejąco według liczby wystąpień słowa
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List Comprehensions (Wyrażenia listowe)

Często zdarza się, że chcemy utworzyć nową listę, wybierając z istniejącej tylko niektóre elementy, modyfikując ich wartości lub robiąc jedno i drugie. W Pythonie idiomatycznym sposobem na to są list comprehensions (wyrażenia listowe):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Podobnie możesz przekształcić listę w słownik lub zbiór:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Jeśli nie potrzebujesz używać elementów z listy, możesz zastosować podkreślnik jako zmienną:

```python
zeroes = [0 for _ in even_numbers] # ma taką samą długość jak lista even_numbers
```

List comprehensions obsługują wielokrotne pętle `for`:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # łącznie 100 par: (0,0) (0,1) ... (9,8), (9,9)
```

Kolejna pętla `for` może korzystać z wyników poprzedniej:

```python
increasing_pairs = [(x, y)                      # zawiera tylko pary, gdzie x < y
                    for x in range(10)          # range(lo, hi) jest równoważne
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
W przyszłości będziemy często korzystać z list comprehensions.

### Generatory i Iteratory

Listy mają jedną wadę: mogą stać się niezwykle duże. Na przykład `range(1000000)` wygeneruje listę z milionem elementów. Przetwarzanie wszystkich danych naraz może być czasochłonne (lub wyczerpać pamięć). W rzeczywistości często potrzebujesz tylko kilku pierwszych elementów, co sprawia, że pozostałe obliczenia są zbędne.

Generatory pozwalają iterować tylko te dane, które są faktycznie potrzebne. Generator można stworzyć za pomocą funkcji i wyrażenia `yield`:

```python
def lazy_range(n):
    """leniwa wersja range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Uzupełnienie tłumacza:
Generator to również specjalny rodzaj iteratora, a `yield` jest kluczem do jego działania. Działa jako punkt wstrzymania i wznowienia wykonania generatora. Można przypisać wartość do wyrażenia `yield`, a także zwrócić jego wartość. Każda funkcja zawierająca instrukcję `yield` jest nazywana generatorem. Gdy generator zostaje przerwany, zapisuje swój obecny stan wykonania, a następnie przy kolejnym wywołaniu przywraca go, aby dostarczyć kolejną wartość. Używanie list do iteracji może zajmować dużo pamięci, podczas gdy generatory zajmują jej znacznie mniej, co pozwala oszczędzić zasoby.

Poniższa pętla będzie pobierać jedną wartość z `yield` na raz, aż do wyczerpania wszystkich:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(W rzeczywistości Python ma wbudowaną funkcję, która działa podobnie jak `_lazy_range_`, nazywa się `xrange` w Pythonie 2, a w Pythonie 3 po prostu `range` działa 'leniwie'.) To oznacza, że możesz tworzyć nieskończone sekwencje:

```python
def natural_numbers():
    """zwraca 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Nie zaleca się jednak używania takich konstrukcji bez logiki wyjścia z pętli.

**WSKAZÓWKA**
> Jedną z wad iterowania za pomocą generatorów jest to, że elementy można iterować tylko raz od początku do końca. Aby iterować wielokrotnie, musisz za każdym razem tworzyć nowy generator lub użyć listy.

Drugi sposób tworzenia generatorów: za pomocą wyrażeń generatorowych w nawiasach okrągłych:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Wiemy, że metoda `items()` w słownikach zwraca listę wszystkich par klucz-wartość, ale częściej używamy metody generatora `iteritems()` do iteracji, która generuje i zwraca jedną parę klucz-wartość naraz.

### Losowość

Podczas nauki o danych często będziemy potrzebować generować liczby losowe, więc wystarczy zaimportować moduł `random` i używać go:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() generuje liczby losowe
# 0.7579544029403025,         # Liczby losowe są znormalizowane, w zakresie od 0 do 1
# 0.420571580830845,          # Ta funkcja jest najczęściej używana do generowania liczb losowych
# 0.25891675029296335]
```

Jeśli chcesz uzyskać powtarzalne wyniki, możesz sprawić, by moduł `random` generował liczby pseudolosowe (czyli deterministyczne) na podstawie stanu wewnętrznego ustawionego przez `random.seed`:

```python
random.seed(10)           # ustawia ziarno na 10
print random.random()     # 0.57140259469
random.seed(10)           # ponownie ustawia ziarno na 10
print random.random()     # ponownie 0.57140259469
```

Czasami używamy funkcji `random.randrange`, aby wygenerować liczbę losową w określonym zakresie:

```python
random.randrange(10)      # losowo wybiera liczbę z range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # losowo wybiera liczbę z range(3, 6) = [3, 4, 5]
```

Istnieją też inne przydatne metody. Na przykład `random.shuffle` tasuje kolejność elementów w liście, tworząc losową permutację:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Twój wynik powinien być inny)
```

Jeśli chcesz losowo wybrać jeden element z listy, użyj metody `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Mój wynik to "Bob"
```

Jeśli chcesz wygenerować losową sekwencję, ale nie chcesz zmieniać oryginalnej listy, możesz użyć metody `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Możesz uzyskać wiele losowych próbek (z powtórzeniami) poprzez wielokrotne wywołanie:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Wyrażenia regularne

Wyrażenia regularne służą do wyszukiwania tekstu. Są nieco skomplikowane, ale niezwykle przydatne, dlatego poświęcono im wiele książek. Szczegółowo wyjaśnimy je, gdy na nie natrafimy, a oto kilka przykładów użycia wyrażeń regularnych w Pythonie:

```python
import re
print all([                                 # Wszystkie poniższe stwierdzenia zwrócą true, ponieważ
    not re.match("a", "cat"),               # * 'cat' nie zaczyna się od 'a'
    re.search("a", "cat"),                  # * 'cat' zawiera literę 'a'
    not re.search("c", "dog"),              # * 'dog' nie zawiera litery 'c'
    3 == len(re.split("[ab]", "carbs")),    # * rozdziela słowo na trzy części ['c','r','s'] według 'a' lub 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * zamienia cyfry na myślniki
    ])                                      # Wynik to True
```

### Programowanie obiektowe (Object-Oriented Programming)

Podobnie jak wiele innych języków, Python pozwala definiować klasy, które enkapsulują dane, oraz funkcje do ich obsługi. Czasami używamy ich, aby nasz kod był bardziej przejrzysty i zwięzły. Najłatwiej będzie je wyjaśnić, budując przykład z dużą ilością komentarzy. Załóżmy, że nie ma wbudowanych zbiorów w Pythonie, a my chcielibyśmy stworzyć własną klasę `Set`. Jakie funkcjonalności powinna mieć taka klasa? Na przykład, mając `Set`, powinniśmy mieć możliwość dodawania do niego elementów, usuwania ich i sprawdzania, czy zawiera określoną wartość. Dlatego stworzymy wszystkie te funkcje jako metody (funkcje członkowskie) tej klasy. W ten sposób będziemy mogli uzyskiwać dostęp do tych metod za pomocą kropki po obiekcie `Set`:

```python
# Zgodnie z konwencją, nazwy klas piszemy w _PascalCase_
class Set:
    # To są funkcje członkowskie (metody)
    # Każda funkcja członkowska ma na początku parametr "self" (kolejna konwencja)
    # "self" odnosi się do konkretnego obiektu Set, na którym operujemy

    def __init__(self, values=None):
        """To jest funkcja konstruktora
        Jest wywoływana za każdym razem, gdy tworzysz nowy Set
        Możesz ją wywołać w ten sposób:
        s1 = Set() # pusty zbiór
        s2 = Set([1,2,2,3]) # inicjuje zbiór z podanymi wartościami"""
        self.dict = {} # Każda instancja Set ma swój własny atrybut dict
        # Używamy tego atrybutu do śledzenia każdego członka
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """To jest reprezentacja tekstowa obiektu Set
        Możesz ją uzyskać, wpisując nazwę obiektu w konsoli Pythona lub używając funkcji str()"""
        return "Set: " + str(self.dict.keys())

    # Członkostwo reprezentujemy poprzez bycie kluczem w self.dict i ustawienie wartości klucza na True
    def add(self, value):
        self.dict[value] = True

    # Jeśli parametr jest kluczem w słowniku, odpowiadająca mu wartość jest w zbiorze
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Następnie możemy użyć `Set` w ten sposób:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcje narzędziowe

#### Funkcje częściowe (partial)

Podczas przekazywania funkcji, czasami chcemy użyć części funkcjonalności danej funkcji, aby stworzyć nową. Weźmy prosty przykład funkcji z dwoma zmiennymi:

```python
def exp(base, power):
    return base ** power
```

Chcemy użyć jej do stworzenia funkcji, która przyjmuje jedną zmienną i zwraca wynik funkcji potęgowej `exp(2, power)` z podstawą 2.

Oczywiście, moglibyśmy zdefiniować nową funkcję za pomocą `def`, choć nie wydaje się to najrozsądniejsze:

```python
def two_to_the(power):
  return exp(2, power)
```

Mądrzejszym podejściem jest użycie metody `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # obecna funkcja ma tylko jedną zmienną
print two_to_the(3)               # 8
```

Jeśli podano nazwy, można również użyć metody `partial` do wypełnienia innych parametrów:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Jeśli spróbujesz manipulować parametrami w środku funkcji, program szybko stanie się chaotyczny, więc staraj się tego unikać.

#### Mapowanie (map)

Od czasu do czasu używamy również funkcji takich jak `map`, `reduce` i `filter` jako alternatyw dla list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # to samo
list_doubler = partial(map, double)     # funkcja podwajająca listę
twice_xs = list_doubler(xs)             # również [2, 4, 6, 8]
```

Metoda `map` może być również używana do mapowania funkcji wieloargumentowej na wiele list:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrowanie (filter)

Podobnie, filtr (filter) realizuje funkcjonalność `if` z list comprehensions:

```python
def is_even(x):
    """Zwraca True, jeśli x jest parzyste, False w przeciwnym razie"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # to samo
list_evener = partial(filter, is_even)    # ta funkcja filtruje
x_evens = list_evener(xs)                 # również [2, 4]
```

#### Redukcja (reduce)

Metoda `reduce` kolejno łączy pierwszy i drugi element listy, następnie łączy wynik z trzecim elementem i powtarza ten proces, aż do uzyskania jednego, unikalnego rezultatu:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # ta funkcja redukuje listę
x_product = list_product(xs)              # również 24
```

### Enumerate

Czasami zdarza się, że podczas iteracji po liście chcemy jednocześnie używać zarówno elementu, jak i jego indeksu:

```python
# Mało pythoniczny sposób (mało zwięzły i elegancki)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Również mało pythoniczny sposób (mało zwięzły i elegancki)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Najbardziej zwięzłym sposobem jest użycie metody `enumerate`, która generuje krotki `(indeks, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Podobnie, jeśli chcesz użyć tylko indeksu:

```python
for i in range(len(documents)): do_something(i)   # mało zwięzłe
for i, _ in enumerate(documents): do_something(i) # zwięzłe
```

Będziemy często używać tej metody w przyszłości.

### Zip i rozpakowywanie argumentów

#### Zip

Często łączymy dwie lub więcej list. Operacja `zip` faktycznie przekształca wiele list w pojedynczą listę krotek, gdzie każda krotka zawiera odpowiadające sobie elementy:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # daje [('a', 1), ('b', 2), ('c', 3)]
```

#### Rozpakowywanie argumentów (Argument Unpacking)

Jeśli listy mają różne długości, proces `zip` zatrzyma się na końcu najkrótszej listy. Możesz również użyć ciekawej techniki "rozpakowywania" (`unzip`) do rozdzielenia list:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Gwiazdka służy do rozpakowywania argumentów, traktując elementy `pairs` jako pojedyncze argumenty dla `zip`. Poniższe wywołanie ma ten sam efekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # zwraca [('a','b','c'), ('1','2','3')]
```

Rozpakowywanie argumentów może być również używane z innymi funkcjami:

```python
def add(a, b): return a + b

add(1, 2)           # zwraca 3
add([1, 2])         # błąd
add(*[1, 2])        # zwraca 3
```

Choć może nie zawsze jest to praktyczne, to jest to fajny trik, który może uczynić kod bardziej zwięzłym.

### Przekazywanie argumentów o zmiennej długości: `*args` i `**kwargs`

Załóżmy, że chcemy stworzyć funkcję wyższego rzędu, która przyjmuje starą funkcję i zwraca nową, która dwukrotnie zwiększa wynik starej funkcji:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Przykład użycia:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Jednakże, gdy liczba przekazywanych argumentów jest większa niż jeden, ta metoda przestaje działać:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # błąd TypeError: g() takes exactly 1 argument (2 given)
```

Musimy więc zdefiniować funkcję, która może przyjmować dowolną liczbę argumentów, a następnie użyć rozpakowywania argumentów, aby je przekazać. Może to wyglądać trochę magicznie:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Wynik:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Kiedy definiujemy funkcję w ten sposób, `args` (skrót od 'arguments') to krotka zawierająca argumenty pozycyjne, a `kwargs` (skrót od 'keyword arguments') to słownik zawierający argumenty nazwane.

Można ich również użyć, gdy argumenty są przekazywane jako lista (lub krotka) lub słownik:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Możesz używać tego w różnych nietypowych kombinacjach, ale my użyjemy tego tylko do rozwiązania problemu przekazywania zmiennej liczby argumentów do funkcji wyższego rzędu:

```python
def doubler_correct(f):
    """Działa poprawnie niezależnie od tego, czym jest f"""
    def g(*args, **kwargs):
        """Ta funkcja poprawnie przekazuje argumenty do f, niezależnie od ich liczby"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Witaj w świecie nauki o danych!

Gotowe! Gratulacje, otworzyłeś drzwi do fascynującego świata! Teraz możesz się świetnie bawić!

**Powiązane artykuły:**

[Często używane konstrukcje Pythona w nauce o danych (podstawy)](https://philoli.com/python-tutorails-basic-level)
