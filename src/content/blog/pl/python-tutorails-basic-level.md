---
title: Podstawowa składnia Pythona w data science
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
---

Ostatnio czytałem książkę [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([link do PDFa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), to świetna i przystępna pozycja wprowadzająca do data science. Jeden z rozdziałów przedstawia podstawową składnię Pythona oraz bardziej zaawansowane konstrukcje, często używane w data science. Sposób, w jaki to przedstawiono, jest doskonały – zwięzły i przejrzysty, dlatego postanowiłem to przetłumaczyć i zamieścić tutaj jako notatki do przyszłego wykorzystania.

[Często używana składnia Pythona w data science (podstawy)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Często używana składnia Pythona w data science (zaawansowane)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Ten rozdział skupia się na przedstawieniu podstawowej składni i funkcji Pythona (bazując na Pythonie 2.7), które są niezwykle przydatne w przetwarzaniu danych.

<!--more-->

### Spacje i formatowanie

Wiele języków używa nawiasów do kontroli bloków kodu, ale Python opiera się na wcięciach:

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # pierwsza linia pętli "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # pierwsza linia pętli "for j"  
        print i + j  # ostatnia linia pętli "for j"  
    print i          # ostatnia linia pętli "for i"  
print "done looping"  
```

To sprawia, że kod w Pythonie jest bardzo czytelny, ale jednocześnie wymaga stałej uwagi na formatowanie. Spacje w nawiasach są ignorowane, co jest przydatne przy pisaniu długich wyrażeń:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Ułatwia to również czytanie kodu:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Instrukcje wieloliniowe

Do połączenia dwóch przerwanych linii można użyć ukośnika odwrotnego (jest to rzadko stosowana praktyka):

```python
two_plus_three = 2 + \
                 3  
```

### Moduły

Zarówno wbudowane moduły Pythona, jak i te pobrane od firm trzecich, muszą zostać ręcznie zaimportowane, aby można było z nich korzystać.

1. Proste, bezpośrednie importowanie całego modułu:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Zaimportowany moduł `re` służy do obsługi wyrażeń regularnych. Po zaimportowaniu modułu, jego funkcje można wywoływać, używając nazwy modułu jako prefiksu (np. `re.`).

2. Jeśli nazwa importowanego modułu jest już używana w kodzie, można go zaimportować pod inną nazwą:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Jeśli jesteś „niegrzeczny”, możesz zaimportować cały moduł do bieżącej przestrzeni nazw, co może przypadkowo nadpisać już zdefiniowane zmienne:

```python
match = 10  
from re import *  # moduł `re` posiada funkcję `match`  
print match       # wyświetla funkcję `match`  
```

Ponieważ jesteś dobrym człowiekiem, wierzę, że tego nie zrobisz.

### Operacje arytmetyczne

Python 2.7 domyślnie używa dzielenia całkowitego, więc $5 / 2 = 2$. Często jednak nie chcemy dzielenia całkowitego, dlatego można zaimportować ten moduł:

```python
from __future__ import division  
```

Po zaimportowaniu otrzymamy $5 / 2 = 2.5$.
Dzielenie całkowite: $5 // 2 = 2$.

### Funkcje

#### Definiowanie funkcji

Funkcja to reguła, która może przyjmować zero lub więcej argumentów wejściowych i zwracać określony wynik. W Pythonie definiujemy funkcję za pomocą `def nazwa_funkcji(parametry)`:

```python
def double(x):  
    """Tutaj możesz napisać wyjaśnienie działania funkcji,  
    np. że funkcja podwaja wartość wejściową."""  
    # Tutaj można pisać ciało funkcji, pamiętaj o wcięciach.  
    return x * 2  
```
#### Użycie funkcji

W Pythonie funkcje są obiektami pierwszej klasy, co oznacza, że możemy przypisywać je do zmiennych lub przekazywać jako argumenty do innych funkcji:

```python
def apply_to_one(f):  
    """Wywołuje funkcję f, przekazując 1 jako argument."""  
    return f(1)  
my_double = double          # `double` wskazuje na funkcję zdefiniowaną w poprzedniej sekcji  
x = apply_to_one(my_double) # `x` równa się 2  
```
#### Funkcje anonimowe

Można również tworzyć funkcje anonimowe za pomocą `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # równa się 5  
```

Wyrażenie `lambda` można przypisać do innych zmiennych, ale większość programistów zaleca, by w miarę możliwości używać `def`:

```python
another_double = lambda x: 2 * x      # niezalecane  
def another_double(x): return 2 * x   # zalecane  
```

Dodatkowo:

* `lambda` to tylko wyrażenie, a jego ciało jest znacznie prostsze niż w przypadku `def`.
* Ciało funkcji `lambda` to wyrażenie, a nie blok kodu. Można w nim zawrzeć jedynie ograniczoną logikę.

#### Przekazywanie argumentów funkcji

Parametry funkcji mogą mieć wartości domyślne. Jeśli nie podamy argumentu, zostanie użyta wartość domyślna; w przeciwnym razie zostanie przekazana określona wartość:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # wyświetli "hello"  
my_print()            # wyświetli "my default message"  
```

Czasem przydatne jest również bezpośrednie określanie argumentów za pomocą ich nazw:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # zwraca 5  
subtract(0, 5)    # zwraca -5  
subtract(b=5)     # to samo co powyżej, zwraca -5  
```
### Ciągi znaków

Do tworzenia ciągów znaków można używać pojedynczych lub podwójnych cudzysłowów (muszą być sparowane):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Ukośnik odwrotny służy do oznaczania znaków specjalnych, np.:

```python
tab_string = "\t"      # oznacza tabulator  
len(tab_string)        # równa się 1  
```

Gdy chcesz użyć samego ukośnika odwrotnego (np. w ścieżkach Windows lub wyrażeniach regularnych), możesz zdefiniować surowy ciąg znaków za pomocą `r""`:

```python
not_tab_string = r"\t" # oznacza znaki '\' i 't'  
len(not_tab_string)    # równa się 2  
```

Do tworzenia wieloliniowych ciągów znaków użyj trzech podwójnych cudzysłowów:

```python
multi_line_string = """To jest pierwsza linia  
To jest druga linia  
To jest trzecia linia"""  
```

### Obsługa wyjątków

Gdy program napotka błąd, Python zgłosi `wyjątek (exception)`. Jeśli go nie obsłużymy, program zostanie zakończony. Wyjątki można przechwytywać za pomocą instrukcji `try` i `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Nie można dzielić przez zero"  
```

Chociaż w innych językach wyjątki bywają postrzegane jako coś niepożądanego, w Pythonie ich częstsze wykorzystywanie może sprawić, że kod będzie bardziej zwięzły i czytelny.

### Listy

#### Tworzenie list

Listy to proste, uporządkowane kolekcje, będące jedną z najbardziej podstawowych struktur danych w Pythonie (podobne do tablic w innych językach, ale z dodatkowymi funkcjonalnościami). Tworzenie listy:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # równa się 3  
list_sum = sum(integer_list)      # równa się 6  
```
#### Dostęp do wartości w liście

Dostęp do wartości w liście uzyskasz za pomocą indeksów w nawiasach kwadratowych:

```python
x = range(10)       # lista `x` = [0, 1, ..., 9]  
zero = x[0]         # równa się 0, indeksy listy zaczynają się od 0  
one = x[1]          # równa się 1  
nine = x[-1]        # równa się 9, ostatni element listy  
eight = x[-2]       # równa się 8, przedostatni element listy  
x[0] = -1           # aktualnie lista `x` = [-1, 1, 2, 3, ..., 9]  
```

#### Wycinanie list

Listy można wycinać za pomocą nawiasów kwadratowych:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Możesz użyć `in`, aby sprawdzić, czy element znajduje się w liście:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Ta metoda wyszukiwania elementów jest bardzo nieefektywna; używaj jej tylko, gdy lista jest mała lub nie zależy ci na czasie wyszukiwania.

#### Łączenie list

W Pythonie łatwo jest łączyć dwie listy:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # aktualnie `x` = [1,2,3,4,5,6]  
```

Jeśli nie chcesz modyfikować oryginalnej listy `x`, możesz użyć operatora '+' do stworzenia nowej listy:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # aktualnie `y` = [1, 2, 3, 4, 5, 6]; `x` pozostaje bez zmian  
```

Często w ten sposób dodaje się pojedynczy element do listy:

```python
x = [1, 2, 3]  
x.append(0)           # aktualnie `x` = [1, 2, 3, 0]  
y = x[-1]             # równa się 0  
z = len(x)            # równa się 4  
```

#### Rozpakowywanie list

Jeśli wiesz, ile elementów znajduje się w liście, łatwo możesz ją rozpakować:

```python
x, y = [1, 2]         # aktualnie `x` = 1, `y` = 2  
```

Jeśli liczba elementów po obu stronach równania się nie zgadza, otrzymasz `ValueError`. Dlatego częściej używamy podkreślnika, aby przechować pozostałą część listy:

```python
_, y = [1, 2]         # aktualnie `y` == 2, ignorując pierwszy element  
```

### Krotki

Listy i krotki są bardzo podobne. Jedyna różnica polega na tym, że elementów krotki nie można modyfikować.

#### Tworzenie krotek

Krotki można tworzyć za pomocą nawiasów okrągłych lub bez żadnych nawiasów:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # aktualnie `my_list` to [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Nie można modyfikować krotki"  
```

Krotki są bardzo przydatne do zwracania wielu wartości z funkcji:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # równa się (5, 6)  
s, p = sum_and_product(5, 10) # `s` = 15, `p` = 50  
```

Krotki (i listy) obsługują jednoczesne przypisywanie wielu elementów:

```python
x, y = 1, 2       # aktualnie `x` = 1, `y` = 2  
x, y = y, x       # Wymiana wartości dwóch zmiennych w Pythonie; aktualnie `x` = 2, `y` = 1  
```

### Słowniki

#### Tworzenie słowników

Kolejną podstawową strukturą danych w Pythonie jest słownik, który pozwala szybko uzyskać wartość (value) za pomocą klucza (key):

```python
empty_dict = {}                       # bardzo "pythonowa" definicja pustego słownika  
empty_dict2 = dict()                  # mniej "pythonowa" definicja pustego słownika  
grades = { "Joel" : 80, "Tim" : 95 }  # przechowywanie słownika  
```

#### Dostęp do elementów słownika

Możesz użyć nawiasów kwadratowych z kluczem, aby znaleźć odpowiadającą mu wartość:

```python
joels_grade = grades["Joel"]          # równa się 80  
```

Jeśli szukany klucz nie istnieje w słowniku, zostanie zwrócony `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "brak oceny dla Kate!"  
```

Możesz sprawdzić, czy klucz znajduje się w słowniku za pomocą `in`:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Słownik posiada metodę, która zwraca wartość domyślną, jeśli szukany klucz nie zostanie znaleziony (zamiast zgłaszać wyjątek):

```python
joels_grade = grades.get("Joel", 0)   # równa się 80  
kates_grade = grades.get("Kate", 0)   # równa się 0  
no_ones_grade = grades.get("No One")  # zwraca wartość domyślną `None`  
```

#### Modyfikowanie słowników

Parę klucz-wartość w słowniku można tworzyć i modyfikować za pomocą nawiasów kwadratowych:

```python
grades["Tim"] = 99                    # zastępuje starą wartość  
grades["Kate"] = 100                  # dodaje nową parę klucz-wartość  
num_students = len(grades)            # równa się 3  
```

Często będziemy używać słowników w ten sposób do reprezentacji struktury danych:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Oprócz wyszukiwania konkretnych kluczy, możemy również operować na wszystkich kluczach w ten sposób:

```python
tweet_keys = tweet.keys()             # zwraca listę kluczy  
tweet_values = tweet.values()         # zwraca listę wartości  
tweet_items = tweet.items()           # zwraca krotki (klucz, wartość)  
"user" in tweet_keys                  # zwraca True, ale używa mniej efektywnego wyszukiwania `in` w liście  
"user" in tweet                       # bardziej "pythonowe" użycie, wykorzystuje efektywne wyszukiwanie `in` w słowniku  
"joelgrus" in tweet_values            # True  
```

Klucze w słownikach są unikalne, a listy nie mogą być używane jako klucze. Jeśli potrzebujesz klucza składającego się z wielu części, możesz użyć krotki lub w jakiś sposób skonwertować klucz na ciąg znaków.

#### Słownik `defaultdict`

Jeśli próbujesz policzyć częstotliwość występowania każdego słowa w dokumencie, oczywistym podejściem jest stworzenie słownika, gdzie słowa będą kluczami, a ich częstotliwość odpowiadającymi wartościami. Następnie przeglądasz dokument, inkrementując wartość dla istniejących słów i dodając nową parę klucz-wartość dla nieznanych słów:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Oczywiście, możesz również użyć metody "najpierw działaj, potem pytaj" (ang. "easier to ask for forgiveness than permission") do obsługi brakującego klucza:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Trzecia metoda to użycie `get`, która doskonale radzi sobie z brakującymi kluczami:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Słownik `defaultdict` działa tak samo jak zwykły słownik, z tą jedyną różnicą, że gdy próbujesz odwołać się do nieistniejącego klucza, `defaultdict` automatycznie tworzy parę klucz-wartość, używając dostarczonego klucza. Aby użyć `defaultdict`, musisz zaimportować bibliotekę `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # `int()` generuje 0  
for word in document:  
    word_counts[word] += 1  
```

`defaultdict` jest również bardzo przydatny w przypadku list, zwykłych słowników, a nawet niestandardowych funkcji:

```python
dd_list = defaultdict(list)           # `list()` generuje pustą listę  
dd_list[2].append(1)                  # aktualnie `dd_list` to {2: [1]}  
dd_dict = defaultdict(dict)           # `dict()` generuje pusty słownik  
dd_dict["Joel"]["City"] = "Seattle"   # aktualnie `dd_dict` zawiera { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # tworzy słownik, gdzie wartości dla kluczy to listy  
dd_pair[2][1] = 1                     # aktualnie `dd_pair` zawiera {2: [0,1]}  
```

Ta metoda jest bardzo użyteczna, ponieważ w przyszłości, gdy będziemy pobierać wartości dla określonych kluczy ze słownika, nie będziemy musieli sprawdzać, czy klucz istnieje.

### Liczniki (`Counter`)

Counter (licznik) może bezpośrednio przekształcić zbiór wartości w obiekt podobny do słownika, gdzie kluczem jest element ze zbioru, a odpowiadającą mu wartością jest liczba wystąpień tego elementu. Jest to często używane przy tworzeniu histogramów:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # `c` (mniej więcej) to { 0 : 2, 1 : 1, 2 : 1 }  
```

W ten sposób uzyskujemy bardzo wygodną metodę zliczania częstotliwości słów:

```python
word_counts = Counter(document)  
```

Counter posiada również bardzo użyteczną metodę `most_common`, która pozwala bezpośrednio uzyskać kilka najczęściej występujących słów wraz z ich częstotliwością:

```python
# Wyświetla 10 najczęściej występujących słów i ich liczbę wystąpień  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Zbiory (`Sets`)

Kolejną strukturą danych w Pythonie jest zbiór (set), który jest kolekcją unikalnych elementów.
Zbiór można stworzyć i dodawać do niego elementy w ten sposób:

```python
s = set()  
s.add(1)          # `s` to { 1 }  
s.add(2)          # `s` to { 1, 2 }  
s.add(2)          # `s` to { 1, 2 }  
x = len(s)        # równa się 2  
y = 2 in s        # równa się True  
z = 3 in s        # równa się False  
```

Dwa główne powody używania zbiorów:

Po pierwsze, operacja `in` w zbiorach jest bardzo efektywna. Gdy liczba elementów w zbiorze danych jest bardzo duża, wyszukiwanie elementów w zbiorze jest znacznie bardziej odpowiednie niż w liście:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # nieefektywne, wymaga sprawdzenia każdego elementu  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # wyszukiwanie skuteczne i szybkie  
```

Po drugie, zbiory są bardzo wygodne do uzyskiwania unikalnych elementów z zestawu danych:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

W praktyce jednak zbiory są używane rzadziej niż słowniki i listy.

### Instrukcje warunkowe

W większości języków programowania możesz używać `if` do tworzenia rozgałęzień warunkowych w ten sposób:

```python
if 1 > 2:  
    message = "gdyby tylko 1 było większe od dwóch…"  
elif 1 > 3:  
    message = "`elif` oznacza 'else if'"  
else:  
    message = "gdy wszystko inne zawiedzie, użyj `else` (jeśli chcesz)"  
```

Możesz również napisać instrukcję warunkową w jednej linii, choć jest to rzadko stosowane:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Instrukcje pętli

#### Pętla `while`

Pętla `while` w Pythonie:

```python
x = 0  
while x < 10:  
    print x, "jest mniejsze niż 10"  
    x += 1  
```

#### Pętla `for`

Częściej używa się pętli `for-in`:

```python
for x in range(10):  
    print x, "jest mniejsze niż 10"  
```

Do bardziej złożonych wyrażeń logicznych można użyć instrukcji `continue` i `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # przechodzi do następnej iteracji  
    if x == 5:  
        break             # całkowicie wychodzi z pętli  
    print x  
```

Wynikiem będzie wyświetlenie 0, 1, 2 i 4.

### Wartości logiczne (`Truthiness`)

Zmienne logiczne (`Booleans`) w Pythonie działają podobnie jak w innych językach, z tą jedyną różnicą, że ich pierwsza litera musi być wielka:

```python
one_is_less_than_two = 1 < 2      # to True  
true_equals_false = True == False # to False  
```

Python używa `None` do oznaczenia braku wartości, podobnie jak `null` w innych językach:

```python
x = None  
print x == None        # wyświetla True, ale nie jest to eleganckie  
print x is None        # wyświetla True, jest to bardziej eleganckie  
```

Python pozwala na używanie innych wartości zamiast wartości logicznych; poniższe są równoważne `False`:

*   False
*   None
*   [] (pusta lista)
*   {} (pusty słownik)
*   "" (pusty ciąg znaków)
*   set()
*   0
*   0.0

Podobnie istnieje wiele wartości równoważnych `True`, co bardzo ułatwia sprawdzanie pustych list, pustych ciągów znaków, pustych słowników itp.

Oczywiście, jeśli nie przewidzisz rezultatu, możesz napotkać błędy podczas użycia:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Prostsze podejście, które daje ten sam efekt co powyższe:

```python
first_char = s and s[0]  
```

Jeśli pierwsza wartość jest prawdziwa (truthy), zwracana jest druga wartość; w przeciwnym razie zwracana jest pierwsza wartość.

Podobnie, jeśli `x` może być liczbą lub `None`, w ten sposób uzyskasz `x`, które na pewno będzie liczbą:

```python
safe_x = x or 0  
```

W Pythonie istnieje również funkcja `all`, która zwraca `True`, jeśli każdy element jest `True`. Funkcja `any` zwraca `True`, jeśli choć jeden element jest `True`. Na przykład dla listy, w której każdy element jest "prawdziwy" (truthy), funkcja `all` zwróci `True`, w przeciwnym razie zwróci `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} jest równoważne z `False`  
any([True, 1, {}])          # True  
all([])                     # True, nie ma elementu równoważnego z `False`  
any([])                     # False, nie ma elementu równoważnego z `True`  
```

**Dalsze czytanie:**
[Często używana składnia Pythona w data science (zaawansowane)](https://philoli.com/python-tutorails-advanced-level/)
