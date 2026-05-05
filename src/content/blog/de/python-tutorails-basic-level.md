---
title: Häufig verwendete Python-Syntax in der Datenwissenschaft (Grundlagen)
date: 2018-11-07 20:53:13
tags: Python
categories: Data Science
mathjax: true
---

In den letzten Tagen habe ich dieses Buch [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-Link](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)) gelesen. Es ist ein ausgezeichnetes und leicht verständliches Einführungsbuch in die Datenwissenschaft. Ein Kapitel stellt die grundlegende Python-Syntax sowie fortgeschrittene, in der Datenwissenschaft häufig genutzte Syntax vor. Ich fand die Erklärung sehr gut, prägnant und klar, daher habe ich sie hier als Notiz übersetzt.
[Häufig verwendete Python-Syntax in der Datenwissenschaft (Grundlagen)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Häufig verwendete Python-Syntax in der Datenwissenschaft (Fortgeschrittene)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Dieses Kapitel konzentriert sich auf die Vorstellung grundlegender Python-Syntax und -Funktionen, die in der Datenverarbeitung äußerst nützlich sind (basierend auf Python 2.7).

<!--more-->

### Einrückung und Formatierung

Viele Sprachen verwenden Klammern zur Strukturierung von Codeblöcken, Python hingegen nutzt Einrückungen:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # Erste Zeile der "for i"-Schleife
    for j in [1, 2, 3, 4, 5]:
        print j      # Erste Zeile der "for j"-Schleife
        print i + j  # Letzte Zeile der "for j"-Schleife
    print i          # Letzte Zeile der "for i"-Schleife
print "Schleife beendet"
```

Dies macht Python-Code sehr gut lesbar, bedeutet aber auch, dass Sie stets auf die korrekte Formatierung achten müssen. Leerzeichen innerhalb von Klammern werden ignoriert, was beim Schreiben langer Ausdrücke sehr nützlich ist:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Es verbessert auch die Lesbarkeit des Codes:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Mehrzeilige Anweisungen

Eine unterbrochene Zeile kann mit einem Backslash fortgesetzt werden (diese Methode wird selten verwendet):

```python
two_plus_three = 2 + \
                 3
```

### Module

Sowohl die in Python integrierten Module als auch die von Ihnen heruntergeladenen Drittanbietermodule müssen manuell importiert werden, bevor sie verwendet werden können.

1. Einfacher Import des gesamten Moduls:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Das hier importierte `_re_`-Modul wird für reguläre Ausdrücke verwendet. Nach dem Import kann die Funktionalität direkt über den Modulnamen als Präfix (re.) aufgerufen werden.

2. Falls der Name des zu importierenden Moduls bereits im Code verwendet wird, kann es beim Import auf einen anderen Namen abgebildet werden:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. Wenn Sie unvorsichtig sind, können Sie das gesamte Modul in den aktuellen Namensraum importieren. Dies könnte unbeabsichtigt bereits definierte Variablen überschreiben:

```python
match = 10
from re import *  # Das re-Modul hat eine match-Funktion
print match       # Gibt die match-Funktion aus
```

Da Sie ein guter Mensch sind, vertraue ich darauf, dass Sie dies nicht tun werden.

### Grundrechenarten

Python 2.7 verwendet standardmäßig Ganzzahl-Division, sodass $ 5 / 2 = 2 $. Da wir dies jedoch oft nicht möchten, können wir dieses Modul importieren:

```python
from __future__ import division
```

Nach dem Import ergibt sich $5 / 2 = 2.5$.
Ganzzahl-Division: $5 // 2 = 2$.

### Funktionen

#### Funktionsdefinition

Eine Funktion ist eine Regel, die null oder mehr Eingaben entgegennimmt und eine bestimmte Ausgabe zurückgibt. In Python definieren wir eine Funktion mit `def Funktionsname(Parameter)`:

```python
def double(x):
    """Hier können Sie eine Erklärung zur Funktion schreiben,
    zum Beispiel, dass sie den Input mit 2 multipliziert."""
    # Hier kann der Funktionskörper stehen, Einrückung nicht vergessen
    return x * 2
```
#### Funktionsaufruf

In Python sind Funktionen Objekte erster Klasse, was bedeutet, dass wir sie einer Variablen zuweisen oder als Argument an andere Variablen übergeben können:

```python
def apply_to_one(f):
    """Ruft die Funktion f auf und übergibt 1 als Funktionsparameter"""
    return f(1)
my_double = double          # double verweist auf die im vorherigen Abschnitt definierte Funktion
x = apply_to_one(my_double) # x ist gleich 2
```
#### Anonyme Funktionen (Lambda)

Anonyme Funktionen können auch mit `lambda` erstellt werden:

```python
y = apply_to_one(lambda x: x + 4)     # Ist gleich 5
```

Sie können `lambda` auch anderen Variablen zuweisen, aber die meisten würden Ihnen raten, stattdessen `def` zu verwenden:

```python
another_double = lambda x: 2 * x      # Nicht empfohlen
def another_double(x): return 2 * x   # Empfohlen
```

Ergänzung:

*   `lambda` ist lediglich ein Ausdruck, der Funktionskörper ist viel einfacher als bei `def`.
*   Der Hauptteil eines `lambda`-Ausdrucks ist ein Ausdruck und kein Codeblock. Es kann nur eine begrenzte Logik in einem `lambda`-Ausdruck gekapselt werden.

#### Parameterübergabe bei Funktionen

Funktionsparameter können Standardwerte erhalten. Wird die Funktion ohne Parameter aufgerufen, werden die Standardwerte verwendet; werden Parameter übergeben, werden die angegebenen Werte verwendet:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Gibt "hello" aus
my_print()            # Gibt "my default message" aus
```

Manchmal ist es auch sehr nützlich, Parameter direkt über ihren Namen anzugeben:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Gibt 5 zurück
subtract(0, 5)    # Gibt -5 zurück
subtract(b=5)     # Entspricht dem vorherigen, gibt -5 zurück
```
### Strings (Zeichenketten)

Strings können mit einfachen oder doppelten Anführungszeichen erstellt werden (die Anführungszeichen müssen immer paarweise auftreten):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Backslashes werden verwendet, um Escape-Zeichen darzustellen, z.B.:

```python
tab_string = "\t"      # Stellt ein Tabulatorzeichen dar
len(tab_string)        # Ist gleich 1
```

Wenn Sie den Backslash selbst verwenden möchten (z. B. für Windows-Pfade oder reguläre Ausdrücke), können Sie einen Raw-String `r""` definieren:

```python
not_tab_string = r"\t" # Stellt die Zeichen '\' und 't' dar
len(not_tab_string)    # Ist gleich 2
```

Mehrzeilige Strings können mit drei doppelten Anführungszeichen erstellt werden:

```python
multi_line_string = """Dies ist die erste Zeile
Dies ist die zweite Zeile
Dies ist die dritte Zeile"""
```

### Ausnahmebehandlung (Exceptions)

Wenn ein Programm einen Fehler aufweist, löst Python eine `Ausnahme (exception)` aus. Wenn wir diese nicht behandeln, wird das Programm beendet. Ausnahmen können mit `try` und `except`-Anweisungen abgefangen werden:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Man kann nicht durch 0 teilen"
```

Obwohl Ausnahmen in anderen Sprachen oft als ungünstig angesehen werden, kann die häufigere Verwendung von Ausnahmebehandlung in Python Ihren Code prägnanter und sauberer machen.

### Listen

#### Listen erstellen

Listen sind einfache, geordnete Sammlungen und eine der grundlegendsten Datenstrukturen in Python (ähnlich Arrays in anderen Sprachen, aber mit zusätzlichen Eigenschaften). So erstellen Sie eine Liste:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # Ist gleich 3
list_sum = sum(integer_list)      # Ist gleich 6
```
#### Werte in Listen abrufen

Sie können Werte in Listen über eckige Klammern indizieren:

```python
x = range(10)       # Erstellt die Liste x = [0, 1, ..., 9]
zero = x[0]         # Ist gleich 0, Listenindizes beginnen bei 0
one = x[1]          # Ist gleich 1
nine = x[-1]        # Ist gleich 9, das letzte Element der Liste
eight = x[-2]       # Ist gleich 8, das zweitletzte Element der Liste
x[0] = -1           # Die Liste x ist jetzt [-1, 1, 2, 3, ..., 9]
```

#### Listenabschnitte (Slicing)

Listen können mit eckigen Klammern geschnitten werden (Slicing):

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Mit `in` kann geprüft werden, ob ein Element in der Liste vorhanden ist:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Diese Art der Elementsuche ist ineffizient und sollte nur bei kleinen Listen oder wenn die Suchzeit keine Rolle spielt, verwendet werden.

#### Listen verketten

In Python lassen sich zwei Listen sehr einfach verketten:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # x ist jetzt [1,2,3,4,5,6]
```

Wenn Sie die ursprüngliche Liste x nicht ändern möchten, können Sie mit dem Additionsoperator eine neue Liste erstellen:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # y ist jetzt [1, 2, 3, 4, 5, 6]; x bleibt unverändert
```

Oft wird auf diese Weise ein einzelnes Element zu einer Liste hinzugefügt:

```python
x = [1, 2, 3]
x.append(0)           # x ist jetzt [1, 2, 3, 0]
y = x[-1]             # Ist gleich 0
z = len(x)            # Ist gleich 4
```

#### Listen entpacken (Unpacking)

Wenn Sie wissen, wie viele Elemente eine Liste enthält, können Sie diese leicht entpacken:

```python
x, y = [1, 2]         # x ist jetzt 1, y ist 2
```

Wenn die Anzahl der Elemente auf beiden Seiten der Zuweisung nicht übereinstimmt, erhalten Sie einen _ValueError_. Daher verwenden wir häufiger einen Unterstrich, um den Rest der Liste aufzunehmen:

```python
_, y = [1, 2]         # y ist jetzt 2, das erste Element wird ignoriert
```

### Tupel

Listen und Tupel ähneln sich stark. Der einzige Unterschied zu Listen ist, dass die Elemente in einem Tupel nicht geändert werden können.

#### Tupel erstellen

Tupel können mit runden Klammern oder ganz ohne Klammern erstellt werden:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # my_list ist jetzt [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Tupel können nicht geändert werden"
```

Mit Tupeln lassen sich bequem mehrere Rückgabewerte von einer Funktion erhalten:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # Ist gleich (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Tupel (und Listen) unterstützen die gleichzeitige Zuweisung mehrerer Elemente:

```python
x, y = 1, 2       # x ist jetzt 1, y ist 2
x, y = y, x       # Tauscht die Werte zweier Variablen in Python; x ist jetzt 2, y ist 1
```

### Wörterbücher (Dictionaries)

#### Wörterbücher erstellen

Eine weitere grundlegende Datenstruktur in Python ist das Wörterbuch (Dictionary), das es Ihnen ermöglicht, Werte (value) schnell über einen Schlüssel (key) abzurufen:

```python
empty_dict = {}                       # Sehr Python-typische Definition eines leeren Wörterbuchs
empty_dict2 = dict()                  # Weniger Python-typische Definition eines leeren Wörterbuchs
grades = { "Joel" : 80, "Tim" : 95 }  # Wörterbuchspeicherung
```

#### Elemente in Wörterbüchern finden

Sie können Werte über eckige Klammern und den Schlüssel finden:

```python
joels_grade = grades["Joel"]          # Ist gleich 80
```

Wenn der gesuchte Schlüssel nicht im Wörterbuch vorhanden ist, wird ein `KeyError` zurückgegeben:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Keine Note für Kate!"
```

Mit `in` kann geprüft werden, ob ein Schlüssel im Wörterbuch vorhanden ist:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Wörterbücher haben eine Methode, die einen Standardwert zurückgibt, wenn der gesuchte Schlüssel nicht vorhanden ist (anstatt eine Ausnahme auszulösen):

```python
joels_grade = grades.get("Joel", 0)   # Ist gleich 80
kates_grade = grades.get("Kate", 0)   # Ist gleich 0
no_ones_grade = grades.get("No One")  # Gibt den Standardwert None zurück
```

#### Wörterbücher ändern

Schlüssel-Wert-Paare in Wörterbüchern können mit eckigen Klammern erstellt oder geändert werden:

```python
grades["Tim"] = 99                    # Ersetzt den alten Wert
grades["Kate"] = 100                  # Fügt ein Schlüssel-Wert-Paar hinzu
num_students = len(grades)            # Ist gleich 3
```

Wir werden Wörterbücher oft auf diese Weise verwenden, um Datenstrukturen auszudrücken:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Neben der Suche nach bestimmten Schlüsseln können wir auch alle Schlüssel wie folgt bearbeiten:

```python
tweet_keys = tweet.keys()             # Erhält eine Liste der Schlüssel
tweet_values = tweet.values()         # Erhält eine Liste der Werte
tweet_items = tweet.items()           # Erhält (Schlüssel, Wert)-Tupel
"user" in tweet_keys                  # Gibt True zurück, verwendet die weniger effiziente 'in'-Suche einer Liste
"user" in tweet                       # Die Python-typischere Verwendung, nutzt die effiziente 'in'-Suche eines Wörterbuchs
"joelgrus" in tweet_values            # True
```

Schlüssel in Wörterbüchern sind eindeutig, und Listen können nicht als Schlüssel verwendet werden. Wenn Sie einen mehrteiligen Schlüssel benötigen, können Sie ein Tupel verwenden oder den Schlüssel auf irgendeine Weise in einen String umwandeln.

#### Default-Wörterbücher (defaultdict)

Wenn Sie die Häufigkeit jedes Wortes in einem Dokument zählen möchten, wäre ein naheliegender Ansatz, ein Wörterbuch zu erstellen, wobei das Wort der Schlüssel und die Häufigkeit der entsprechende Wert ist. Anschließend durchlaufen Sie das Dokument: Bei einem bereits vorhandenen Wort erhöhen Sie den Wert im Wörterbuch um 1, bei einem neuen Wort fügen Sie ein neues Schlüssel-Wert-Paar hinzu:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Alternativ können Sie einen fehlenden Schlüssel auch auf diese Weise behandeln, indem Sie direkt versuchen, darauf zuzugreifen, und eventuelle Fehler abfangen:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

Die dritte Methode verwendet `get`, welche sich hervorragend zur Behandlung fehlender Schlüssel eignet:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Ein Default-Wörterbuch funktioniert wie ein normales Wörterbuch, mit dem einzigen Unterschied, dass es automatisch ein Schlüssel-Wert-Paar erstellt, wenn Sie versuchen, einen nicht vorhandenen Schlüssel zu finden, und dabei den von Ihnen bereitgestellten Schlüssel verwendet. Um ein Default-Wörterbuch zu verwenden, müssen Sie die `collections`-Bibliothek importieren:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() erzeugt 0
for word in document:
    word_counts[word] += 1
```

Default-Wörterbücher sind auch in Listen, normalen Wörterbüchern und sogar benutzerdefinierten Funktionen sehr nützlich:

```python
dd_list = defaultdict(list)           # list() erzeugt eine leere Liste
dd_list[2].append(1)                  # dd_list ist jetzt {2: [1]}
dd_dict = defaultdict(dict)           # dict() erzeugt ein leeres Wörterbuch
dd_dict["Joel"]["City"] = "Seattle"   # dd_dict enthält jetzt { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Erstellt ein Wörterbuch, dessen Standardwert eine Liste [0, 0] ist.
dd_pair[2][1] = 1                     # dd_pair enthält jetzt {2: [0,1]}
```

Diese Methode ist sehr nützlich, da wir zukünftig nicht mehr prüfen müssen, ob ein Schlüssel existiert, wenn wir bestimmte Schlüssel-Wert-Ergebnisse aus dem Wörterbuch abrufen möchten.

### Zähler (Counter)

Ein Counter kann eine Gruppe von Werten direkt in ein wörterbuchähnliches Objekt umwandeln, wobei ein Element aus der Gruppe zum Schlüssel und die Anzahl seines Vorkommens zum entsprechenden Wert wird. Dies wird häufig beim Erstellen von Histogrammen verwendet:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c ist (ungefähr) { 0 : 2, 1 : 1, 2 : 1 }
```

Auf diese Weise haben wir eine sehr bequeme Methode zur Zählung der Wortfrequenzen:

```python
word_counts = Counter(document)
```

Ein Counter verfügt auch über die sehr nützliche Methode `most_common`, die direkt die häufigsten Wörter und ihre Frequenzen liefert:

```python
# Gibt die 10 häufigsten Wörter und ihre Zählwerte aus
for word, count in word_counts.most_common(10):
    print word, count
```

### Mengen (Sets)

Eine weitere Datenstruktur in Python ist die Menge (Set), eine Sammlung von eindeutigen Elementen. So erstellen Sie eine Menge und fügen Elemente hinzu:

```python
s = set()
s.add(1)          # s ist { 1 }
s.add(2)          # s ist { 1, 2 }
s.add(2)          # s ist { 1, 2 }
x = len(s)        # Ist gleich 2
y = 2 in s        # Ist gleich True
z = 3 in s        # Ist gleich False
```

Zwei Hauptgründe für die Verwendung von Mengen:

Erstens ist die `in`-Operation in Mengen sehr effizient. Wenn die Anzahl der Elemente in einem Datensatz sehr groß ist, ist die Suche nach Elementen in Form einer Menge offensichtlich besser geeignet als in einer Liste:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Ineffizient, da jedes Element geprüft werden muss
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Suche erfolgreich und sehr schnell
```

Zweitens ist es sehr praktisch, Mengen zu verwenden, um die eindeutigen Elemente in einem Datensatz zu erhalten:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

In der Praxis werden Mengen jedoch nicht so häufig verwendet wie Wörterbücher und Listen.

### Bedingte Anweisungen

In den meisten Programmiersprachen können Sie bedingte Verzweigungen wie folgt mit _if_ darstellen:

```python
if 1 > 2:
    message = "wenn doch nur 1 größer als zwei wäre…"
elif 1 > 3:
    message = "elif steht für 'else if'"
else:
    message = "wenn alles andere fehlschlägt, verwende else (wenn du möchtest)"
```

Sie können bedingte Anweisungen auch in einer einzigen Zeile schreiben, dies wird jedoch selten verwendet:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Schleifen

#### _while_-Schleifen

Die `while`-Schleife in Python:

```python
x = 0
while x < 10:
    print x, "ist kleiner als 10"
    x += 1
```

#### _for_-Schleifen

Häufiger wird die `for-in`-Schleife verwendet:

```python
for x in range(10):
    print x, "ist kleiner als 10"
```

Komplexere logische Ausdrücke können `continue` und `break`-Anweisungen verwenden:

```python
for x in range(10):
    if x == 3:
        continue          # Springt zur nächsten Iteration
    if x == 5:
        break             # Bricht die Schleife vollständig ab
    print x
```

Das Ergebnis wird 0, 1, 2 und 4 sein.

### Wahrheitswerte (Truthiness)

Booleans in Python werden ähnlich wie in anderen Sprachen verwendet, der einzige Unterschied ist, dass der erste Buchstabe großgeschrieben werden muss:

```python
one_is_less_than_two = 1 < 2      # Ist True
true_equals_false = True == False # Ist False
```

Python verwendet `None`, um anzuzeigen, dass ein Wert nicht existiert, ähnlich wie `null` in anderen Sprachen:

```python
x = None
print x == None        # Gibt True aus, weniger elegant
print x is None        # Gibt True aus, eleganter
```

Python erlaubt es Ihnen, andere Werte anstelle von booleschen Werten zu verwenden. Die folgenden sind alle äquivalent zu `False`:

*   False
*   None
*   [] (eine leere Liste)
*   {} (ein leeres Wörterbuch)
*   “”
*   set()
*   0
*   0.0

Ähnlich gibt es viele äquivalente Werte für `True`. Dies macht es sehr bequem, auf leere Listen, leere Strings, leere Wörterbücher usw. zu prüfen.

Wenn Sie die Ergebnisse jedoch nicht vorhersehen können, kann dies bei der Verwendung zu Fehlern führen:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Eine einfachere Methode, deren Effekt dem oben Genannten entspricht:

```python
first_char = s and s[0]
```

Ist der erste Wert wahr, wird der zweite Wert zurückgegeben, andernfalls der erste.

Ähnlich, wenn x entweder eine Zahl oder None sein könnte, kann man so sicherstellen, dass x eine Zahl ist:

```python
safe_x = x or 0
```

Python verfügt außerdem über die Funktion `all`, die `True` zurückgibt, wenn jedes Element `True` ist. Die Funktion `any` gibt `True` zurück, wenn mindestens ein Element `True` ist. Zum Beispiel gibt `all` für eine Liste, in der jedes Element „wahr“ ist, `True` zurück, andernfalls `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} ist äquivalent zu "False"
any([True, 1, {}])          # True
all([])                     # True, da kein Element False-äquivalent ist
any([])                     # False, da kein Element True-äquivalent ist
```

**Weiterführende Lektüre:**
[Häufig verwendete Python-Syntax in der Datenwissenschaft (Fortgeschrittene)](https://philoli.com/python-tutorails-advanced-level/)
