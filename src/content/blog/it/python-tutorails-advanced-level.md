---
title: Sintassi Python avanzata comunemente usata nella scienza dei dati
date: 2018-11-07 23:53:13
tags: Python
categories: Data Science
mathjax: true
--- 
In questi giorni sto leggendo [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([link al PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), un ottimo libro introduttivo alla scienza dei dati, facile da capire. Un capitolo in particolare mi ha colpito per la sua presentazione chiara e concisa della sintassi Python di base e di quella avanzata, utile per la scienza dei dati. Ho deciso quindi di tradurlo e pubblicarlo qui per averlo sempre a portata di mano.
[Sintassi Python comune nella scienza dei dati (base)](https://philoli.com/python-tutorails-basic-level/)  
[Sintassi Python comune nella scienza dei dati (avanzato)](https://philoli.com/python-tutorails-advanced-level/)  

Questo capitolo si concentra sulla sintassi e sulle funzionalità avanzate di Python (basate su Python 2.7) che sono estremamente utili nell'elaborazione dei dati.

<!--more-->

### Ordinamento (Sorting)

Per ordinare una lista in Python, puoi usare il metodo `sort` della lista stessa. Se preferisci non modificare la lista originale, puoi usare la funzione `sorted`, che restituisce una nuova lista ordinata:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x rimane invariato
x.sort()            # ora x = [1,2,3,4]
# Di default, sort o sorted ordinano la lista in ordine crescente.
```

Per ottenere un ordinamento decrescente, puoi specificare il parametro `reverse = True`.

È anche possibile definire una funzione di ordinamento personalizzata, per ordinare la lista in base a una chiave specifica:

```python
# Ordina in ordine decrescente per valore assoluto
x = sorted([-4,1,-2,3], key=abs, reverse=True) # è [-4,3,-2,1]
# Ordina in ordine decrescente in base al conteggio delle parole
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Comprensioni di Lista (List Comprehensions)

Spesso ci troviamo nella situazione di voler estrarre elementi specifici da una lista per formarne una nuova, o di voler modificare i valori di alcuni elementi, o entrambe le cose. In Python, l'approccio idiomatico per farlo è l'uso delle List Comprehensions (comprensioni di lista):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Allo stesso modo, puoi trasformare le liste in dizionari o set:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Se non hai bisogno di usare gli elementi della lista, puoi usare l'underscore `_` come variabile segnaposto:

```python
zeroes = [0 for _ in even_numbers] # Ha la stessa lunghezza della lista even_numbers
```

Le list comprehensions supportano cicli `for` multipli:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 100 coppie in totale: (0,0) (0,1) ... (9,8), (9,9)
```

Un ciclo `for` successivo può usare il risultato del ciclo `for` precedente:

```python
increasing_pairs = [(x, y)                      # Contiene solo coppie dove x < y
                    for x in range(10)          # range(lo, hi) equivale a
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Useremo spesso le list comprehensions in futuro.

### Generatori e Iteratori (Generators and Iterators)

Un problema delle liste è che possono diventare enormemente grandi. Ad esempio, `range(1000000)` crea una lista con un milione di elementi. Elaborare un dato alla volta può richiedere troppo tempo o esaurire la memoria, soprattutto se in realtà ti servono solo i primi elementi, rendendo il resto un calcolo superfluo.

I generatori, invece, ti permettono di iterare solo sui dati di cui hai effettivamente bisogno. Puoi creare un generatore usando una funzione con l'espressione `yield`:

```python
def lazy_range(n):
    """una versione "pigra" di range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Nota del traduttore:
Un generatore è anch'esso un tipo speciale di iteratore; `yield` è la chiave per l'implementazione dell'iterazione in un generatore. Agisce come un punto di pausa e ripristino dell'esecuzione del generatore, permettendo di assegnare un valore all'espressione `yield` o di restituire un valore da essa. Qualsiasi funzione che contenga un'istruzione `yield` è considerata un generatore. Quando un generatore viene messo in pausa, salva il suo stato di esecuzione corrente e lo ripristina la volta successiva che viene chiamato, per ottenere il valore successivo. L'iterazione tramite liste può occupare un'enorme quantità di spazio in memoria, mentre l'uso di un generatore ne occupa solo una frazione, risparmiando così memoria.

Il seguente ciclo consumerà un valore alla volta da `yield` fino a quando non saranno esauriti tutti:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(In realtà, Python include una funzione che ottiene l'effetto di `_lazy_range_`, chiamata `xrange` in Python 2 e `range` in Python 3, che è già "lazy".) Ciò significa che puoi creare una sequenza infinita:

```python
def natural_numbers():
    """restituisce 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Tuttavia, non è consigliabile usare istruzioni che non prevedono una logica di uscita dal ciclo.

**CONSIGLIO**
> Uno svantaggio dell'iterazione con i generatori è che puoi iterare sugli elementi solo una volta, dall'inizio alla fine. Se desideri iterare più volte, dovrai creare un nuovo generatore ogni volta o usare una lista.

Un secondo modo per creare generatori: usando un'espressione di comprensione racchiusa tra parentesi tonde:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Sappiamo che il metodo `items()` di un dizionario restituisce una lista di tutte le coppie chiave-valore. Tuttavia, in molti casi, usiamo il metodo generatore `iteritems()` per iterare, che produce e restituisce una singola coppia chiave-valore alla volta.

### Casuale (Randomness)
Quando studieremo la scienza dei dati, avremo spesso bisogno di generare numeri casuali, quindi basterà importare il modulo `random` per utilizzarlo:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genera un numero casuale
# 0.7579544029403025,         # Il numero casuale è normalizzato, compreso tra 0 e 1
# 0.420571580830845,          # Questa funzione è la più usata per generare numeri casuali
# 0.25891675029296335]
```

Se vuoi ottenere risultati riproducibili, puoi far sì che il modulo `random` generi numeri pseudo-casuali (cioè deterministici) basandosi su uno stato interno impostato con `random.seed`:

```python
random.seed(10)           # imposta il seed a 10
print random.random()     # 0.57140259469
random.seed(10)           # reimposta il seed a 10
print random.random()     # 0.57140259469 again
```

A volte usiamo anche la funzione `random.randrange` per generare un numero casuale all'interno di un intervallo specificato:

```python
random.randrange(10)      # Seleziona casualmente un numero da range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Seleziona casualmente un numero da range(3, 6) = [3, 4, 5]
```

Ci sono anche altri metodi molto utili, come `random.shuffle` che mescola l'ordine degli elementi in una lista, generando una nuova lista con un ordinamento casuale:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (il tuo risultato dovrebbe essere diverso)
```

Se vuoi selezionare un elemento casuale da una lista, puoi usare il metodo `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Ho ottenuto "Bob"
```

Se desideri generare una sequenza casuale senza alterare la lista originale, puoi usare il metodo `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Puoi ottenere più campioni casuali (con ripetizioni) chiamando la funzione più volte:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Espressioni Regolari (Regular Expressions)

Le espressioni regolari sono utilizzate per la ricerca di testo. Sono un po' complesse ma estremamente utili, tanto che esistono molti libri dedicati a loro. Le spiegheremo più in dettaglio quando le incontreremo. Di seguito trovi alcuni esempi di utilizzo delle espressioni regolari in Python:

```python
import re
print all([                                 # Tutte le seguenti espressioni restituiscono true, perché:
    not re.match("a", "cat"),               # * 'cat' non inizia con 'a'
    re.search("a", "cat"),                  # * 'cat' contiene la lettera 'a'
    not re.search("c", "dog"),              # * 'dog' non contiene la lettera 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Divide la parola in tre parti ['c','r','s'] in base ad 'a' o 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Sostituisce i numeri con un trattino
    ])                                      # Stampa True
```

### Programmazione Orientata agli Oggetti (Object-Oriented Programming)

Come molte lingue, Python ti permette di definire classi che incapsulano dati e funzioni che operano su di essi. A volte le useremo per rendere il nostro codice più chiaro e conciso. Il modo più semplice per spiegarle è costruire un esempio ben commentato. Supponiamo di non avere i set (insiemi) built-in di Python e di voler creare la nostra classe `Set`. Quali funzionalità dovrebbe avere? Ad esempio, dato un `Set`, dobbiamo essere in grado di aggiungere elementi, rimuoverli e verificare se contiene un valore specifico. Quindi, creeremo tutte queste funzionalità come funzioni membro della classe. In questo modo, potremo accedere a queste funzioni membro usando il punto dopo l'oggetto `Set`:

```python
# Per convenzione, diamo alle classi nomi in _PascalCase_
class Set:
    # Queste sono funzioni membro
    # Ogni funzione membro ha un parametro "self" come primo argomento (un'altra convenzione)
    # "self" si riferisce all'oggetto Set specifico su cui si sta operando

    def __init__(self, values=None):
        """Questa è la funzione costruttore.
        Viene chiamata ogni volta che crei un nuovo oggetto Set.
        Puoi chiamarla così:
        s1 = Set() # Un set vuoto
        s2 = Set([1,2,2,3]) # Un set inizializzato con valori specifici"""
        self.dict = {} # Ogni istanza di Set ha il suo attributo dict
        # Usiamo questo attributo per tenere traccia dei membri
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Questa è la rappresentazione in stringa di un oggetto Set.
        Puoi ottenerla digitando l'oggetto in una finestra di comando Python o passando l'oggetto alla funzione str()"""
        return "Set: " + str(self.dict.keys())

    # Indicheremo l'appartenenza a un set rendendolo una chiave in self.dict e impostandone il valore a True.
    def add(self, value):
        self.dict[value] = True

    # Se l'argomento è una chiave nel dizionario, il valore corrispondente è nel Set.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

E così possiamo usare `Set` in questo modo:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Strumenti Funzionali (Functional Tools)

#### Funzioni parziali (partial)

Quando si passano funzioni, a volte potremmo voler usare solo una parte della funzionalità di una funzione per crearne una nuova. Prendiamo un esempio semplice, supponiamo di avere una funzione con due variabili:

```python
def exp(base, power):
    return base ** power
```

Vogliamo usarla per creare una funzione che prenda una variabile e restituisca il risultato della funzione potenza `exp(2, power)` con base 2.

Certo, potremmo definire una nuova funzione usando `def`, anche se non sarebbe molto elegante:

```python
def two_to_the(power):
  return exp(2, power)
```

Un approccio più intelligente è usare il metodo `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Ora questa funzione ha una sola variabile
print two_to_the(3)               # 8
```

Se i parametri hanno un nome, puoi usare il metodo `partial` per popolarne altri:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Se provi a manipolare i parametri a metà della funzione, il programma diventerà rapidamente confusionario, quindi cerca di evitarlo.

#### Mappatura (map)

Occasionalmente useremo funzioni come `map`, `reduce` e `filter` come alternative funzionali alle list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Stesso risultato
list_doubler = partial(map, double)     # La funzione raddoppia la lista
twice_xs = list_doubler(xs)             # Anche [2, 4, 6, 8]
```

Il metodo `map` può essere usato anche per mappare funzioni con più argomenti su più liste:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtro (filter)

In modo simile, `filter` implementa la funzionalità `if` presente nelle list comprehensions:

```python
def is_even(x):
    """Restituisce True se x è pari, False se x è dispari"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Stesso risultato
list_evener = partial(filter, is_even)    # Questa funzione implementa la funzionalità di filtro
x_evens = list_evener(xs)                 # Anche [2, 4]
```

#### Riduzione (reduce)

Il metodo `reduce` combina continuamente il primo e il secondo elemento di una lista, poi combina il risultato con il terzo elemento, e ripete questo processo fino a ottenere un unico risultato:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Questa funzione implementa la riduzione di una lista
x_product = list_product(xs)              # Anche 24
```

### Enumerazione (enumerate)

Occasionalmente, ci troviamo nella situazione di dover iterare su una lista utilizzando sia gli elementi che i loro indici contemporaneamente:

```python
# Meno "pythonico" (meno conciso ed elegante)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Anche questo meno "pythonico" (meno conciso ed elegante)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Il modo più conciso è usare il metodo di enumerazione `enumerate` per generare tuple `(indice, elemento)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Allo stesso modo, se vuoi usare solo l'indice:

```python
for i in range(len(documents)): do_something(i)   # Meno conciso
for i, _ in enumerate(documents): do_something(i) # Conciso
```

Useremo spesso questo metodo in seguito.

### Compressione e Decompressione degli Argomenti (zip e Argument Unpacking)

#### Compressione (zip)

Spesso abbiamo bisogno di "comprimere" due o più liste. La compressione trasforma più liste in una singola lista di tuple corrispondenti:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Otteniamo [('a', 1), ('b', 2), ('c', 3)]
```

#### Decompressione degli Argomenti (Argument Unpacking)

Se le liste hanno lunghezze diverse, il processo di compressione si fermerà alla fine della lista più corta. Puoi anche usare un trucco di "decompressione" con `unzip` per decomprimere le liste:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

L'asterisco viene usato per eseguire la decompressione degli argomenti, usando gli elementi di `pairs` come singoli argomenti per `zip`. La seguente chiamata ha lo stesso effetto:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Restituisce [('a','b','c'), ('1','2','3')]
```

La decompressione degli argomenti può essere usata anche con altre funzioni:

```python
def add(a, b): return a + b

add(1, 2)           # Restituisce 3
add([1, 2])         # Genera un errore
add(*[1, 2])        # Restituisce 3
```

Anche se non sempre pratico, è un buon trucco per rendere il codice più conciso.

### Passaggio di Argomenti di Lunghezza Variabile (args e kwargs)

Supponiamo di voler creare una funzione di ordine superiore che prenda una vecchia funzione e ne restituisca una nuova che sia il doppio della vecchia:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Esempio di esecuzione:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== (3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Tuttavia, questo metodo non funziona bene se si passano più di un argomento:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Errore TypeError: g() richiede esattamente 1 argomento (2 forniti)
```

Quindi, dobbiamo specificare una funzione che possa accettare un numero arbitrario di argomenti, e poi usare la decompressione degli argomenti per passarne diversi. Sembra un po' magico:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Output:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Quando definiamo una funzione in questo modo, `args` (abbreviazione di arguments) è una tupla che contiene gli argomenti senza nome, mentre `kwargs` (abbreviazione di keyword arguments) è un dizionario che contiene gli argomenti con nome.

Possono essere usati anche quando gli argomenti passati sono liste (o tuple) o array:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Puoi usarli in vari modi curiosi, ma noi li useremo principalmente per risolvere il problema del passaggio di argomenti di lunghezza variabile nelle funzioni di ordine superiore:

```python
def doubler_correct(f):
    """Funziona correttamente, qualunque sia f"""
    def g(*args, **kwargs):
        """Passa correttamente tutti gli argomenti a f, indipendentemente dal loro numero"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Benvenuto nel mondo della scienza dei dati!

Ding! Congratulazioni, hai appena aperto le porte a un nuovo mondo! Ora puoi divertirti un mondo!

**Letture correlate:**

[Sintassi Python comune nella scienza dei dati (base)](https://philoli.com/python-tutorails-basic-level)
