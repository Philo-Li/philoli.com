---
title: Python für Data Science: Fortgeschrittene Syntax und Funktionen
date: 2018-11-07 23:53:13
tags: Python
categories: Data Science
mathjax: true
---
In den letzten Tagen habe ich mich mit dem Buch [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-Link](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)) befasst, einem wirklich guten und leicht verständlichen Einführungsbuch in die Datenwissenschaft. Ein Kapitel darin stellt die grundlegende Python-Syntax sowie fortgeschrittene, in der Datenwissenschaft häufig genutzte Funktionen vor. Die Erklärungen fand ich sehr gelungen, prägnant und klar, weshalb ich sie hier als Gedächtnisstütze übersetzt habe.
[Häufig verwendete Python-Syntax in der Datenwissenschaft (Grundlagen)](https://philoli.com/python-tutorails-basic-level/)
[Häufig verwendete Python-Syntax in der Datenwissenschaft (Fortgeschritten)](https://philoli.com/python-tutorails-advanced-level/)

Dieses Kapitel konzentriert sich auf die Vorstellung fortgeschrittener Python-Syntax und -Funktionen, die in der Datenverarbeitung äußerst nützlich sind (basierend auf Python 2.7).

<!--more-->

### Sortieren Sorting

Möchte man eine Python-Liste sortieren, kann man die `sort`-Methode der Liste verwenden. Um die ursprüngliche Liste nicht zu verändern, liefert die Funktion `sorted` eine neue, sortierte Liste zurück:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x bleibt unverändert
x.sort()            # x ist jetzt [1,2,3,4]
# Standardmäßig sortieren sort oder sorted Listen aufsteigend.
```

Möchte man absteigend sortieren, kann man den Parameter `reverse = True` angeben.

Es ist auch möglich, eine eigene Sortierfunktion zu definieren, um die Liste nach einem bestimmten Kriterium zu sortieren:

```python
# Absteigend nach Absolutwert sortieren
x = sorted([-4,1,-2,3], key=abs, reverse=True) # ist [-4,3,-2,1]
# Absteigend nach Häufigkeit des Wortes sortieren
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List Comprehensions

Oft stehen wir vor der Aufgabe, aus einer Liste bestimmte Elemente zu extrahieren, um eine neue Liste zu erstellen, oder die Werte einiger Elemente zu ändern – oder beides. Die idiomatische Python-Lösung hierfür sind List Comprehensions:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Ähnlich kann man Listen in Dictionaries oder Sets umwandeln:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Wenn man die Elemente der Liste selbst nicht benötigt, kann man den Unterstrich als Variable verwenden:

```python
zeroes = [0 for _ in even_numbers] # Hat die gleiche Länge wie die Liste even_numbers
```

List Comprehensions unterstützen mehrere `for`-Schleifen:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Insgesamt 100 Paare: (0,0) (0,1) ... (9,8), (9,9)
```

Spätere `for`-Schleifen können die Ergebnisse früherer `for`-Schleifen verwenden:

```python
increasing_pairs = [(x, y)                      # Enthält nur Paare, bei denen x < y
                    for x in range(10)          # range(lo, hi) entspricht
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
List Comprehensions werden uns in Zukunft häufig begegnen.

### Generatoren und Iteratoren Generators and Iterators

Ein Problem mit Listen ist, dass sie sehr schnell sehr groß werden können. Zum Beispiel würde `range(1000000)` eine Liste mit einer Million Elementen erzeugen. Wenn man jedoch nur ein Element nach dem anderen verarbeitet, kann dies sehr zeitaufwendig sein (oder den Speicher erschöpfen).

Oft benötigt man aber nur die ersten paar Daten, wodurch andere Operationen überflüssig werden. Generatoren ermöglichen es, nur die Daten zu iterieren, die auch wirklich benötigt werden. Man kann einen Generator mit einer Funktion und dem `yield`-Ausdruck erstellen:

```python
def lazy_range(n):
    """Eine "faule" Version von range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Anmerkung des Übersetzers:
Ein Generator ist eine spezielle Art von Iterator, und `yield` ist der Schlüssel zur Implementierung der Iteration in Generatoren. Es dient als Pausen- und Wiederherstellungspunkt für die Generatorenausführung; man kann einem `yield`-Ausdruck Werte zuweisen oder den Wert des `yield`-Ausdrucks zurückgeben. Jede Funktion, die eine `yield`-Anweisung enthält, wird als Generator bezeichnet. Beim Verlassen speichert der Generator seinen aktuellen Ausführungszustand und stellt ihn beim nächsten Aufruf wieder her, um den nächsten Iterationswert zu liefern. Die Iteration über Listen würde viel Speicherplatz belegen, während die Verwendung von Generatoren praktisch nur einen Adressraum beansprucht, was zu einer erheblichen Speichereinsparung führt.

Die folgende Schleife verbraucht die von `yield` gelieferten Werte nacheinander, bis alle verbraucht sind:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Tatsächlich verfügt Python über eine eingebaute Funktion, die den Effekt von `_lazy_range_` erzielt, genannt `xrange` in Python 2 und `range` in Python 3.) Dies bedeutet, dass man unendliche Sequenzen erstellen kann:

```python
def natural_numbers():
    """Gibt 1, 2, 3, ... zurück"""
    n = 1
    while True:
        yield n
        n += 1
```

Es wird jedoch nicht empfohlen, solche Anweisungen ohne Abbruchlogik zu verwenden.

**TIPP**
> Ein Nachteil bei der Iteration mit Generatoren ist, dass die Elemente nur einmal von Anfang bis Ende durchlaufen werden können. Möchte man mehrmals iterieren, muss man entweder jedes Mal einen neuen Generator erstellen oder eine Liste verwenden.

Eine zweite Möglichkeit, Generatoren zu erstellen: mittels Klammern in einer Comprehension-Syntax:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Wir wissen, dass die `items()`-Methode eines Dictionarys eine Liste aller Schlüssel-Wert-Paare zurückgibt. In den meisten Fällen verwenden wir jedoch die Generator-Methode `iteritems()`, die jedes Mal nur ein Schlüssel-Wert-Paar erzeugt und zurückgibt.

### Zufälligkeit Randomness
Beim Erlernen der Datenwissenschaft werden wir häufig zufällige Zahlen generieren müssen. Dafür importieren wir einfach das `random`-Modul und können es verwenden:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() erzeugt eine Zufallszahl
# 0.7579544029403025,         # Die Zufallszahl wird standardisiert und liegt zwischen 0 und 1.
# 0.420571580830845,          # Diese Funktion ist die am häufigsten verwendete zum Generieren von Zufallszahlen.
# 0.25891675029296335]
```

Möchte man reproduzierbare Ergebnisse, kann man das `random`-Modul dazu bringen, pseudozufällige (d.h. deterministische) Zahlen zu erzeugen, basierend auf dem internen Zustand, der mit `random.seed` gesetzt wird:

```python
random.seed(10)           # Setzt den Seed auf 10
print random.random()     # 0.57140259469
random.seed(10)           # Setzt den Seed erneut auf 10
print random.random()     # 0.57140259469 wieder
```

Manchmal verwenden wir auch die Funktion `random.randrange`, um eine Zufallszahl innerhalb eines bestimmten Bereichs zu generieren:

```python
random.randrange(10)      # Wählt zufällig eine Zahl aus range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Wählt zufällig eine Zahl aus range(3, 6) = [3, 4, 5]
```

Es gibt auch einige weitere nützliche Methoden, wie z.B. `random.shuffle`, das die Reihenfolge der Elemente in einer Liste mischt und eine zufällig permutierte Liste erzeugt:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Ihr Ergebnis sollte anders sein)
```

Um ein zufälliges Element aus einer Liste auszuwählen, kann man die Methode `random.choice` verwenden:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Ich erhielt "Bob"
```

Möchte man eine zufällige Sequenz erzeugen, ohne die ursprüngliche Liste zu verändern, kann man die Methode `random.sample` verwenden:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Man kann mehrere zufällige Stichproben (mit Wiederholung) durch wiederholtes Aufrufen entnehmen:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Reguläre Ausdrücke Regular Expressions

Reguläre Ausdrücke werden zur Textsuche verwendet. Sie sind zwar etwas komplex, aber äußerst nützlich, weshalb es viele Bücher gibt, die sich ausschließlich mit ihnen befassen. Wir werden sie genauer erklären, wenn wir ihnen begegnen. Hier sind einige Beispiele für die Verwendung regulärer Ausdrücke in Python:

```python
import re
print all([                                 # Alle der folgenden Ausdrücke geben True zurück, weil
    not re.match("a", "cat"),               # * 'cat' nicht mit 'a' beginnt
    re.search("a", "cat"),                  # * 'cat' den Buchstaben 'a' enthält
    not re.search("c", "dog"),              # * 'dog' den Buchstaben 'c' nicht enthält
    3 == len(re.split("[ab]", "carbs")),    # * Das Wort wird nach 'a' oder 'b' in drei Teile zerlegt ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Ziffern werden durch Bindestriche ersetzt
    ])                                      # Ausgabe: True
```

### Objektorientierte Programmierung Object-Oriented Programming

Wie viele andere Sprachen erlaubt Python die Definition von Klassen, die Daten kapseln, und von Funktionen, die auf diesen Daten operieren. Wir nutzen sie manchmal, um unseren Code klarer und prägnanter zu gestalten. Am einfachsten lässt sich dies wohl durch ein ausführlich kommentiertes Beispiel erklären. Angenommen, es gäbe keine integrierten Python-Sets, könnten wir unsere eigene `Set`-Klasse erstellen wollen. Welche Funktionen sollte eine solche Klasse haben? Zum Beispiel sollten wir in der Lage sein, Elemente zu einem `Set` hinzuzufügen, sie daraus zu entfernen und zu überprüfen, ob es einen bestimmten Wert enthält. Wir würden also all diese Funktionen als Memberfunktionen der Klasse erstellen. Auf diese Weise können wir diese Memberfunktionen nach dem `Set`-Objekt mit einem Punkt aufrufen:

```python
# Gemäß Konvention benennen wir Klassen im _PascalCase_
class Set:
    # Dies sind Memberfunktionen
    # Jede Memberfunktion hat einen ersten Parameter "self" (eine weitere Konvention)
    # "self" bezieht sich auf das spezifische Set-Objekt, das gerade verwendet wird.

    def __init__(self, values=None):
        """Dies ist die Konstruktorfunktion
        Sie wird jedes Mal aufgerufen, wenn man ein neues Set erstellt.
        Man kann sie so aufrufen:
        s1 = Set() # Leeres Set
        s2 = Set([1,2,2,3]) # Initialisiert ein Set mit den angegebenen Werten"""
        self.dict = {} # Jede Instanz von Set hat ihr eigenes dict-Attribut
        # Wir verwenden dieses Attribut, um jedes Element zu verfolgen
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Dies ist die String-Repräsentation des Set-Objekts.
        Man kann dies durch Eingabe des Strings in die Python-Befehlszeile oder durch Übergabe des Objekts an die str()-Methode abrufen."""
        return "Set: " + str(self.dict.keys())

    # Wir repräsentieren die Mitgliedschaft, indem wir die Werte als Schlüssel in self.dict speichern und die Schlüsselwerte auf True setzen.
    def add(self, value):
        self.dict[value] = True

    # Wenn der Parameter ein Schlüssel im Dictionary ist, ist der entsprechende Wert im Set enthalten.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Dann können wir `Set` wie folgt verwenden:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funktionale Tools Functional Tools

#### Partielle Funktionen partial

Beim Übergeben von Funktionen möchte man manchmal einen Teil der Funktionalität einer Funktion nutzen, um eine neue Funktion zu erstellen. Ein einfaches Beispiel: Angenommen, wir haben eine Funktion mit zwei Variablen:

```python
def exp(base, power):
    return base ** power
```

Wir möchten sie nutzen, um eine Funktion zu erstellen, die eine Variable als Eingabe nimmt und das Ergebnis der Potenzfunktion `exp(2, power)` mit Basis 2 ausgibt.

Natürlich könnten wir eine neue Funktion mit `def` definieren, auch wenn das nicht sehr elegant wäre:

```python
def two_to_the(power):
  return exp(2, power)
```

Eine elegantere Lösung ist die Verwendung der Methode `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Die Funktion hat nun nur eine Variable
print two_to_the(3)               # 8
```

Wenn Namen angegeben werden, kann man mit der `partial`-Methode auch andere Parameter füllen:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Wenn man versucht, Parameter mitten in einer Funktion willkürlich zu verwenden, wird das Programm schnell unübersichtlich. Daher sollte man dieses Verhalten möglichst vermeiden.

#### Map

Gelegentlich verwenden wir auch Funktionen wie `map`, `reduce` und `filter` als Alternative zu List Comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Dasselbe
list_doubler = partial(map, double)     # Die Funktion verdoppelt eine Liste
twice_xs = list_doubler(xs)             # Auch [2, 4, 6, 8]
```

Die `map`-Methode kann auch für die Abbildung von Funktionen mit mehreren Argumenten auf mehrere Listen verwendet werden:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter

Ähnlich implementiert `filter` die Funktionalität des `if` in List Comprehensions:

```python
def is_even(x):
    """Gibt True zurück, wenn x gerade ist, False, wenn x ungerade ist."""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Dasselbe
list_evener = partial(filter, is_even)    # Die Funktion implementiert die Filterfunktion
x_evens = list_evener(xs)                 # Auch [2, 4]
```

#### Reduce

Die `reduce`-Methode kombiniert fortlaufend das erste und zweite Element einer Liste, dann das Ergebnis mit dem dritten Element und wiederholt diesen Prozess, bis ein einziges Ergebnis vorliegt:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Die Funktion implementiert die Reduktionsfunktion für eine Liste.
x_product = list_product(xs)              # Auch 24
```

### Enumerate

Gelegentlich kommt es vor, dass man beim Durchlaufen einer Liste sowohl das Element als auch dessen Index benötigt:

```python
# Weniger Pythonic (weniger prägnant und elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Ebenfalls weniger Pythonic (weniger prägnant und elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Die prägnanteste Methode ist die Verwendung der `enumerate`-Funktion, die Tupel `(index, element)` erzeugt:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Ähnlich, wenn man nur den Index verwenden möchte:

```python
for i in range(len(documents)): do_something(i)   # Nicht prägnant
for i, _ in enumerate(documents): do_something(i) # Prägnant
```

Diese Methode werden wir später häufig verwenden.

### Zip und Argument Unpacking

#### Zip

Wir verwenden häufig `zip`, um zwei oder mehr Listen zu verknüpfen. Das Zippen verwandelt mehrere Listen in eine einzelne Liste von entsprechenden Tupeln:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Ergibt [('a', 1), ('b', 2), ('c', 3)]
```

#### Argument Unpacking

Wenn die Listen unterschiedliche Längen haben, stoppt der Zipp-Vorgang am Ende der kürzesten Liste. Man kann auch einen "unzip"-Trick verwenden, um Listen zu entpacken:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Dabei wird der Sternoperator verwendet, um Argumente zu entpacken, indem er die Elemente von `pairs` als einzelne Argumente an `zip` übergibt. Der folgende Aufruf hat den gleichen Effekt:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Gibt [('a','b','c'), ('1','2','3')] zurück
```

Argument Unpacking kann auch mit anderen Funktionen verwendet werden:

```python
def add(a, b): return a + b

add(1, 2)           # Gibt 3 zurück
add([1, 2])         # Fehler
add(*[1, 2])        # Gibt 3 zurück
```

Obwohl nicht immer praktisch, ist es eine gute Technik, um den Code prägnanter zu gestalten.

### Variable Argumentübergabe: `*args` und `**kwargs`

Angenommen, wir wollen eine Higher-Order-Funktion erstellen, die eine bestehende Funktion entgegennimmt und eine neue Funktion zurückgibt, die das Ergebnis der ursprünglichen Funktion mit 2 multipliziert:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Beispielausführung:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Sobald jedoch mehr als ein Argument übergeben wird, funktioniert diese Methode nicht mehr gut:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Fehler TypeError: g() takes exactly 1 argument (2 given)
```

Wir müssen also eine Funktion definieren, die eine beliebige Anzahl von Argumenten aufnehmen kann, und diese dann mithilfe von Argument Unpacking übergeben. Das mag etwas magisch erscheinen:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Ausgabeergebnis:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Wenn wir eine Funktion auf diese Weise definieren, ist `args` (Kurzform für arguments) ein Tupel, das die unbenannten Argumente enthält, während `kwargs` (Kurzform für keyword arguments) ein Dictionary ist, das die benannten Argumente enthält.

Sie können auch dann verwendet werden, wenn die übergebenen Argumente aus Listen (oder Tupeln) oder Dictionaries stammen:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Man kann sie auf verschiedene ungewöhnliche Weisen nutzen, aber wir verwenden sie hauptsächlich, um das Problem der Übergabe variabler Argumente an Higher-Order-Funktionen zu lösen:

```python
def doubler_correct(f):
    """Funktioniert, egal was f ist"""
    def g(*args, **kwargs):
        """Die Funktion übergibt die Argumente korrekt an f, egal wie viele es sind."""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Willkommen in der Welt der Datenwissenschaft!

Gratulation! Sie haben die Tür zu einer neuen Welt aufgestoßen. Nun können Sie sich mit Freude auf Entdeckungsreise begeben!

**Weiterführende Lektüre:**

[Häufig verwendete Python-Syntax in der Datenwissenschaft (Grundlagen)](https://philoli.com/python-tutorails-basic-level)
