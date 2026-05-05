---
title: Sintassi Base di Python per la Data Science
date: 2018-11-07 20:53:13
tags: Python
categories: Data Science
mathjax: true
---

In questi giorni sto leggendo [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), un ottimo libro introduttivo alla data science, accessibile e di facile comprensione. Un capitolo in particolare presenta la sintassi base di Python e quella avanzata, più comunemente utilizzata nella data science. L'ho trovato ben spiegato, conciso e chiaro, per questo ho deciso di tradurlo e raccoglierlo qui come promemoria personale.
[Sintassi Python Comuni nella Data Science (Base)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Sintassi Python Comuni nella Data Science (Avanzato)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Questo capitolo si concentra sulla presentazione di funzionalità e sintassi Python fondamentali, estremamente utili nell'elaborazione dei dati (basate su Python 2.7).

<!--more-->

### Formattazione degli spazi

Molti linguaggi usano le parentesi graffe per delimitare i blocchi di codice, ma Python si affida all'indentazione:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # Prima riga del ciclo "for i"
    for j in [1, 2, 3, 4, 5]:
        print j      # Prima riga del ciclo "for j"
        print i + j  # Ultima riga del ciclo "for j"
    print i          # Ultima riga del ciclo "for i"
print "done looping"
```

Questo rende il codice Python estremamente leggibile, ma significa anche che devi prestare sempre attenzione alla formattazione. Gli spazi all'interno delle parentesi vengono ignorati, il che è utile quando si scrivono espressioni lunghe:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Rendendo il codice più leggibile:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### Istruzioni su più righe

Si può usare una barra rovesciata (`\`) per indicare una riga interrotta e continuata sulla riga successiva (questa pratica è raramente usata):

```python
two_plus_three = 2 + \
                 3
```

### Moduli

Sia i moduli integrati in Python che quelli di terze parti scaricati devono essere importati manualmente per poter essere utilizzati.

1.  Semplicemente, importa l'intero modulo direttamente:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Il modulo `re` qui importato è per le espressioni regolari. Dopo aver importato un modulo, puoi richiamare le sue funzioni specifiche usando il nome del modulo come prefisso (ad esempio, `re.`).

2.  Se il nome del modulo da importare è già in uso nel tuo codice, puoi mapparlo a un nome diverso durante l'importazione:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3.  Se proprio vuoi, puoi importare l'intero modulo nello spazio dei nomi corrente, rischiando di sovrascrivere variabili che hai già definito inavvertitamente:

```python
match = 10
from re import *  # Il modulo re ha una funzione chiamata match
print match       # Stampa la funzione match
```

Dato che sei una persona coscienziosa, sono sicuro che non lo farai.

### Operazioni aritmetiche

Python 2.7 usa la divisione intera per default, quindi $ 5 / 2 = 2 $. Tuttavia, spesso non vogliamo una divisione intera, quindi possiamo importare questo modulo:

```python
from __future__ import division
```

Dopo l'importazione, avremo $5 / 2 = 2.5$. La divisione intera rimane: $5 // 2 = 2$.

### Funzioni

#### Definizione di funzioni

Una funzione è una regola che può accettare zero o più input e restituire un certo output. In Python, definiamo una funzione usando `def nome_funzione(parametri)`:

```python
def double(x):
    """Qui puoi scrivere una spiegazione della funzione
    Ad esempio, questa funzione moltiplica l'input per 2"""
    # Qui puoi scrivere il corpo della funzione, ricorda l'indentazione
    return x * 2
```

#### Uso delle funzioni

In Python, le funzioni sono oggetti di prima classe, il che significa che possiamo assegnarle a una variabile o passarle come argomenti ad altre funzioni:

```python
def apply_to_one(f):
    """Chiama la funzione f e le passa 1 come argomento"""
    return f(1)
my_double = double          # double si riferisce alla funzione definita nella sezione precedente
x = apply_to_one(my_double) # x sarà uguale a 2
```

#### Funzioni anonime

Possiamo anche creare funzioni anonime tramite `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Sarà uguale a 5
```

È possibile assegnare una `lambda` ad altre variabili, ma la maggior parte delle persone ti consiglierà di usare `def` quando possibile:

```python
another_double = lambda x: 2 * x      # Sconsigliato
def another_double(x): return 2 * x   # Pratica consigliata
```

Nota bene:

*   `lambda` è solo un'espressione; il corpo della funzione è molto più semplice di quello di `def`.
*   Il corpo di una `lambda` è un'espressione, non un blocco di codice. Si può racchiudere solo una logica limitata all'interno di un'espressione `lambda`.

#### Passaggio di argomenti a funzioni

I parametri delle funzioni possono avere valori predefiniti. Se non vengono forniti argomenti, verrà usato il valore di default; se vengono forniti, verrà usato il valore specificato:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Stampa "hello"
my_print()            # Stampa "my default message"
```

A volte è anche molto utile specificare gli argomenti direttamente per nome:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Restituisce 5
subtract(0, 5)    # Restituisce -5
subtract(b=5)     # Uguale al precedente, restituisce -5
```

### Stringhe

È possibile creare stringhe usando virgolette singole o doppie (le virgolette devono sempre essere accoppiate):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Si usa la barra rovesciata (`\`) per i caratteri di escape, ad esempio:

```python
tab_string = "\t"      # Rappresenta il carattere di tabulazione (tab)
len(tab_string)        # È uguale a 1
```

Quando si vuole usare la barra rovesciata stessa (per percorsi Windows o espressioni regolari), si può definirla usando una stringa raw `r""`:

```python
not_tab_string = r"\t" # Rappresenta i caratteri '\' e 't'
len(not_tab_string)    # È uguale a 2
```

Si usano tre virgolette doppie per creare stringhe su più righe:

```python
multi_line_string = """Questa è la prima riga
Questa è la seconda riga
Questa è la terza riga"""
```

### Gestione delle eccezioni

Quando si verifica un errore nel programma, Python solleva un'eccezione. Se non la gestiamo, il programma terminerà l'esecuzione. Per catturare le eccezioni, si usano le istruzioni `try` ed `except`:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Non si può dividere per zero"
```

Anche se in altri linguaggi le eccezioni sono spesso viste come un problema, in Python gestirle attentamente può rendere il tuo codice più conciso e pulito.

### Liste

#### Creazione di liste

Le liste sono semplici collezioni ordinate e sono una delle strutture dati più fondamentali in Python (simili agli array in altri linguaggi, ma con alcune caratteristiche aggiuntive). Per creare una lista:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # È uguale a 3
list_sum = sum(integer_list)      # È uguale a 6
```

#### Accesso ai valori nelle liste

Puoi accedere ai valori in una lista tramite l'indicizzazione con parentesi quadre:

```python
x = range(10)       # Ottiene la lista x = [0, 1, ..., 9]
zero = x[0]         # È uguale a 0, gli indici della lista partono da 0
one = x[1]          # È uguale a 1
nine = x[-1]        # È uguale a 9, l'ultimo elemento della lista
eight = x[-2]       # È uguale a 8, il penultimo elemento della lista
x[0] = -1           # Ora la lista x è = [-1, 1, 2, 3, ..., 9]
```

#### Affettare le liste

Si possono "affettare" le liste usando le parentesi quadre:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Si può usare `in` per verificare se un elemento è presente in una lista:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Questo metodo di ricerca degli elementi è inefficiente; usalo solo se la lista è molto piccola o se il tempo di ricerca non è un problema.

#### Concatenare liste

In Python è molto facile concatenare due liste:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # Ora x è = [1,2,3,4,5,6]
```

Se non vuoi modificare la lista originale `x`, puoi usare l'operatore di "addizione" per creare una nuova lista:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # Ora y è = [1, 2, 3, 4, 5, 6]; x non è cambiata
```

Spesso si aggiunge un elemento alla volta a una lista in questo modo:

```python
x = [1, 2, 3]
x.append(0)           # Ora x è = [1, 2, 3, 0]
y = x[-1]             # È uguale a 0
z = len(x)            # È uguale a 4
```

#### Decomposizione di liste

Se sai quanti elementi ci sono in una lista, è facile decomporla:

```python
x, y = [1, 2]         # Ora x = 1, y = 2
```

Se il numero di elementi non corrisponde su entrambi i lati dell'assegnazione, riceverai un `ValueError`. Per questo, spesso usiamo il carattere underscore (`_`) per "ignorare" il resto della lista:

```python
_, y = [1, 2]         # Ora y == 2, ignorando il primo elemento
```

### Tuple

Le liste e le tuple sono molto simili. L'unica differenza è che gli elementi delle tuple non possono essere modificati.

#### Creazione di tuple

È possibile creare tuple usando le parentesi tonde o senza parentesi:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # Ora my_list è [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Impossibile modificare la tupla"
```

Le tuple sono molto utili per ottenere facilmente più valori di ritorno da una funzione:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # Sarà uguale a (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Sia le tuple che le liste supportano l'assegnazione simultanea di più elementi:

```python
x, y = 1, 2       # Ora x = 1, y = 2
x, y = y, x       # Scambia i valori di due variabili in Python; ora x = 2, y = 1
```

### Dizionari

#### Creazione di dizionari

Un'altra struttura dati fondamentale in Python sono i dizionari, che ti permettono di ottenere rapidamente un valore (value) tramite una chiave (key):

```python
empty_dict = {}                       # Definizione di un dizionario vuoto molto "Pythonica"
empty_dict2 = dict()                  # Definizione di un dizionario vuoto meno "Pythonica"
grades = { "Joel" : 80, "Tim" : 95 }  # Memorizzazione nel dizionario
```

#### Ricerca di elementi nel dizionario

Puoi usare le parentesi quadre con la chiave per cercare il valore corrispondente:

```python
joels_grade = grades["Joel"]          # È uguale a 80
```

Se la chiave che cerchi non è presente nel dizionario, verrà sollevato un `KeyError`:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "nessun voto per Kate!"
```

Puoi usare `in` per verificare se una chiave è presente nel dizionario:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

I dizionari hanno un metodo che può restituire un valore predefinito quando la chiave cercata non è presente nel dizionario (anziché sollevare un'eccezione):

```python
joels_grade = grades.get("Joel", 0)   # È uguale a 80
kates_grade = grades.get("Kate", 0)   # È uguale a 0
no_ones_grade = grades.get("No One")  # Restituisce il valore predefinito None
```

#### Modifica di dizionari

Si possono usare le parentesi quadre per creare o modificare coppie chiave-valore in un dizionario:

```python
grades["Tim"] = 99                    # Sostituisce il vecchio valore
grades["Kate"] = 100                  # Aggiunge una coppia chiave-valore
num_students = len(grades)            # È uguale a 3
```

Useremo spesso i dizionari in questo modo per rappresentare la struttura dei dati:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Oltre a cercare chiavi specifiche, possiamo anche operare su tutte le chiavi in questo modo:

```python
tweet_keys = tweet.keys()             # Ottiene una lista di chiavi
tweet_values = tweet.values()         # Ottiene una lista di valori
tweet_items = tweet.items()           # Ottiene una tupla di (chiave, valore)
"user" in tweet_keys                  # Restituisce True, usando la ricerca 'in' delle liste, meno efficiente
"user" in tweet                       # Un uso più "Pythonico", usa la ricerca 'in' efficiente dei dizionari
"joelgrus" in tweet_values            # True
```

Le chiavi nei dizionari sono uniche e le liste non possono essere usate come chiavi. Se hai bisogno di una chiave composta da più parti, puoi usare una tupla o convertire la chiave in una stringa in qualche modo.

#### Dizionari di default

Se stai cercando di contare la frequenza di ogni parola in un documento, un approccio ovvio è creare un dizionario dove le parole sono le chiavi e le loro frequenze sono i valori corrispondenti. Poi, si itera sul documento, incrementando il conteggio per le parole già incontrate e aggiungendo una nuova coppia chiave-valore per le parole nuove:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Naturalmente, puoi anche gestire una chiave mancante in anticipo, con un approccio "chiedere perdono anziché permesso" (Easier to Ask Forgiveness Than Permission - EAFP), in questo modo:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

Il terzo metodo è usare `get`, che gestisce in modo eccellente le chiavi mancanti:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Un dizionario di default è come un dizionario normale, con l'unica differenza che, quando tenti di cercare una chiave inesistente, il dizionario di default creerà automaticamente una coppia chiave-valore utilizzando la chiave fornita. Per usare un dizionario di default, devi importare la libreria `collections`:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() genera 0
for word in document:
    word_counts[word] += 1
```

I dizionari di default sono molto utili anche con liste, dizionari normali e persino funzioni personalizzate:

```python
dd_list = defaultdict(list)           # list() genera una lista vuota
dd_list[2].append(1)                  # Ora dd_list è {2: [1]}
dd_dict = defaultdict(dict)           # dict() genera un dizionario vuoto
dd_dict["Joel"]["City"] = "Seattle"   # Ora dd_dict contiene { "Joel" : { "City" : Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Crea un dizionario dove il valore per la chiave è una lista
dd_pair[2][1] = 1                     # Ora dd_pair contiene {2: [0,1]}
```

Questo metodo è molto utile, perché in futuro, quando vorremo ottenere i valori associati a certe chiavi nel dizionario, non dovremo più verificare se la chiave esiste.

### Contatori

Un `Counter` può convertire direttamente un insieme di valori in un oggetto simile a un dizionario, dove le chiavi sono gli elementi dell'insieme e i valori corrispondenti sono il numero di volte che quell'elemento appare. Questo è spesso usato nella creazione di istogrammi:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c (all'incirca) è { 0 : 2, 1 : 1, 2 : 1 }
```

In questo modo, abbiamo un metodo molto conveniente per contare la frequenza delle parole:

```python
word_counts = Counter(document)
```

I contatori hanno anche un metodo molto utile, `most_common`, che può ottenere direttamente le parole più frequenti e le loro occorrenze:

```python
# Stampa le 10 parole più frequenti e i loro conteggi
for word, count in word_counts.most_common(10):
    print word, count
```

### Insiemi (Sets)

Un'altra struttura dati in Python sono gli insiemi (sets), che sono collezioni di elementi distinti.
Si può creare un insieme e aggiungervi elementi in questo modo:

```python
s = set()
s.add(1)          # s è { 1 }
s.add(2)          # s è { 1, 2 }
s.add(2)          # s è { 1, 2 }
x = len(s)        # È uguale a 2
y = 2 in s        # È uguale a True
z = 3 in s        # È uguale a False
```

Due motivi principali per usare gli insiemi:

Primo, l'operazione `in` negli insiemi è estremamente efficiente. Quando il numero di elementi in un dataset è molto grande, cercare elementi in un insieme è chiaramente più appropriato che farlo in una lista:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Fallisce, richiede di controllare ogni elemento
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Ricerca riuscita e molto veloce
```

Secondo, gli insiemi sono molto convenienti per ottenere gli elementi distinti da un insieme di dati:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

Tuttavia, in pratica, gli insiemi non sono usati con la stessa frequenza dei dizionari e delle liste.

### Istruzioni condizionali

Nella maggior parte dei linguaggi di programmazione, puoi usare `if` per le ramificazioni condizionali in questo modo:

```python
if 1 > 2:
    message = "se solo 1 fosse maggiore di due…"
elif 1 > 3:
    message = "elif sta per 'else if'"
else:
    message = "quando tutto il resto fallisce usa else (se vuoi)"
```

Puoi anche scrivere istruzioni condizionali su una singola riga in questo modo, ma è una pratica meno comune:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### Istruzioni di ciclo

#### Ciclo `while`

Il ciclo `while` in Python:

```python
x = 0
while x < 10:
    print x, "è minore di 10"
    x += 1
```

#### Ciclo `for`

Più comunemente, si usa il ciclo `for-in`:

```python
for x in range(10):
    print x, "è minore di 10"
```

Per espressioni logiche più complesse, si possono usare le istruzioni `continue` e `break`:

```python
for x in range(10):
    if x == 3:
        continue          # Passa direttamente all'iterazione successiva
    if x == 5:
        break             # Esce completamente dal ciclo
    print x
```

Il risultato sarà 0, 1, 2 e 4.

### Valore di verità (Truthiness)

Le variabili booleane (`Booleans`) in Python si usano in modo simile ad altri linguaggi, con l'unica differenza che la prima lettera deve essere maiuscola:

```python
one_is_less_than_two = 1 < 2      # È True
true_equals_false = True == False # È False
```

Python usa `None` per indicare l'assenza di un valore, simile a `null` in altri linguaggi:

```python
x = None
print x == None        # Stampa True, meno elegante
print x is None        # Stampa True, più elegante
```

Python ti permette di usare altri valori al posto dei booleani; i seguenti sono tutti equivalenti a `False`:

*   False
*   None
*   [] (una lista vuota)
*   {} (un dizionario vuoto)
*   ""
*   set()
*   0
*   0.0

Allo stesso modo, ci sono molti valori equivalenti a `True`, il che rende molto comodo verificare se liste, stringhe, dizionari, ecc., sono vuoti.

Naturalmente, se non puoi prevedere il risultato, potresti incorrere in errori durante l'uso:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Un approccio più semplice, che ha lo stesso effetto di quello precedente:

```python
first_char = s and s[0]
```

Se il primo valore è vero, verrà restituito il secondo valore; altrimenti, verrà restituito il primo valore.

Allo stesso modo, se `x` potrebbe essere un numero o `None`, questo è un modo per ottenere un `x` che sarà sicuramente un numero:

```python
safe_x = x or 0
```

Python ha anche una funzione `all`, che restituisce `True` se tutti gli elementi sono `True`. La funzione `any` restituisce `True` se almeno un elemento è `True`. Ad esempio, per una lista in cui ogni elemento è "vero", la funzione `all` restituirà `True`; altrimenti, restituirà `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} è equivalente a "False"
any([True, 1, {}])          # True
all([])                     # True, non esiste un elemento equivalente a "False"
any([])                     # False, non esiste un elemento equivalente a "True"
```

**Lettura avanzata:**
[Sintassi Python Comuni nella Data Science (Avanzato)](https://philoli.com/python-tutorails-advanced-level/)
