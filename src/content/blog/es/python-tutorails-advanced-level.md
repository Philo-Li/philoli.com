---
title: Sintaxis Común de Python en Ciencia de Datos (Avanzado)
date: 2018-11-07 23:53:13
tags: Python
categories: Ciencia de datos
mathjax: true
---
Estos días he estado sumergido en [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF aquí](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), un libro excelente y accesible para introducirse en el mundo de la ciencia de datos. Uno de sus capítulos aborda la sintaxis básica de Python y las estructuras avanzadas más utilizadas en ciencia de datos. Me pareció tan bien explicado, conciso y claro que decidí traducirlo y compartirlo aquí a modo de recordatorio.
[Sintaxis común de Python en ciencia de datos (básico)](https://philoli.com/python-tutorails-basic-level/)
[Sintaxis común de Python en ciencia de datos (avanzado)](https://philoli.com/python-tutorails-advanced-level/)

Este capítulo se centra en las funciones y la sintaxis avanzada de Python que resultan extremadamente útiles en el procesamiento de datos (basado en Python 2.7).

<!--more-->

### Ordenación (Sorting)

Si quieres ordenar una lista en Python, puedes usar el método `sort` de la lista. Si prefieres no modificar la lista original, puedes usar la función `sorted` para obtener una nueva lista ya ordenada:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x no cambia
x.sort()            # ahora x = [1,2,3,4]
# Por defecto, `sort` o `sorted` ordenan las listas de menor a mayor.
```

Si deseas ordenar de mayor a menor, puedes especificar el parámetro `reverse = True`.

También es posible personalizar la función de ordenación para que la lista se ordene según una clave específica:

```python
# Ordenar por valor absoluto de mayor a menor
x = sorted([-4,1,-2,3], key=abs, reverse=True) # es [-4,3,-2,1]
# Ordenar por frecuencia de palabras de mayor a menor
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Comprensiones de Listas (List Comprehensions)

A menudo nos encontramos con la necesidad de extraer ciertos elementos de una lista para formar una nueva, o de modificar los valores de algunos de ellos, o ambas cosas. En Python, la forma idiomática de hacerlo es mediante las comprensiones de listas (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

De forma similar, puedes transformar listas en diccionarios o conjuntos:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Si no necesitas utilizar los elementos de la lista, puedes usar un guion bajo como variable:

```python
zeroes = [0 for _ in even_numbers] # Tiene la misma longitud que la lista even_numbers
```

Las comprensiones de listas admiten múltiples bucles `for`:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 100 pares en total: (0,0), (0,1) ... (9,8), (9,9)
```

Los bucles `for` posteriores pueden utilizar los resultados de los bucles `for` anteriores:

```python
increasing_pairs = [(x, y)                      # Contiene solo pares donde x < y
                    for x in range(10)          # range(lo, hi) es igual a
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Haremos un uso frecuente de las comprensiones de listas en el futuro.

### Generadores e Iteradores (Generators and Iterators)

Un problema con las listas es que pueden volverse extremadamente grandes sin darnos cuenta. Por ejemplo, `range(1000000)` generaría una lista con un millón de elementos. Si solo procesamos un dato a la vez, el tiempo de ejecución podría ser excesivo (o podríamos agotar la memoria). Además, es posible que solo necesitemos los primeros datos, haciendo que el resto de las operaciones sean superfluas.

Los generadores, en cambio, te permiten iterar solo sobre los datos que realmente necesitas. Puedes crear un generador utilizando funciones y la expresión `yield`:

```python
def lazy_range(n):
    """una versión "lazy" de range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Nota del traductor:
Un generador es un tipo especial de iterador, y `yield` es la clave para su implementación. Actúa como un punto de pausa y reanudación en la ejecución del generador, permitiendo asignar valores a la expresión `yield` o devolver el valor de la expresión `yield`. Cualquier función que contenga una sentencia `yield` se considera un generador. Al salir de un generador, este guarda su estado de ejecución actual y lo restaura en la siguiente llamada para obtener el siguiente valor de iteración. Iterar con listas puede consumir una gran cantidad de espacio de memoria, mientras que usar un generador ocupa aproximadamente el espacio de un solo elemento, lo que permite un considerable ahorro de memoria.

El siguiente bucle consumirá un valor de `yield` a la vez hasta que se agoten:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(De hecho, Python ya incluye una función con el mismo efecto que `lazy_range`, llamada `xrange` en Python 2, y en Python 3 la función `range` se comporta de esta manera de forma predeterminada, siendo "lazy".) Esto significa que puedes crear una secuencia infinita:

```python
def natural_numbers():
    """Devuelve 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

No obstante, no se recomienda utilizar este tipo de sentencias sin una lógica de salida del bucle.

**CONSEJO**
> Una desventaja de iterar con generadores es que solo puedes recorrer los elementos una vez de principio a fin. Si deseas iterar varias veces, tendrás que crear un nuevo generador cada vez o usar una lista.

La segunda forma de crear un generador es utilizando expresiones de comprensión entre paréntesis:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Sabemos que el método `items()` de los diccionarios devuelve una lista de todos los pares clave-valor. Sin embargo, en muchas ocasiones, preferimos usar el método generador `iteritems()` para iterar, que produce y devuelve un par clave-valor a la vez.

### Aleatoriedad (Randomness)
Al estudiar ciencia de datos, a menudo necesitaremos generar números aleatorios, por lo que basta con importar el módulo `random` para utilizarlos:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() genera números aleatorios
# 0.7579544029403025,         # Los números aleatorios están normalizados, en el rango entre 0 y 1
# 0.420571580830845,          # Esta función es la más utilizada para generar números aleatorios
# 0.25891675029296335]
```

Si quieres obtener resultados reproducibles, puedes hacer que el módulo `random` genere números pseudoaleatorios (es decir, determinísticos) basándose en el estado interno establecido por `random.seed`:

```python
random.seed(10)           # establece la semilla en 10
print random.random()     # 0.57140259469
random.seed(10)           # restablece la semilla en 10
print random.random()     # 0.57140259469 de nuevo
```

A veces también usamos la función `random.randrange` para generar un número aleatorio dentro de un rango específico:

```python
random.randrange(10)      # Elige un número aleatorio de range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Elige un número aleatorio de range(3, 6) = [3, 4, 5]
```

También hay otros métodos que resultan muy útiles, como `random.shuffle`, que mezcla el orden de los elementos en una lista, creando una nueva lista con una permutación aleatoria:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (tu resultado debería ser diferente)
```

Si deseas seleccionar un elemento aleatorio de una lista, puedes usar el método `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Yo obtuve "Bob"
```

Si quieres generar una secuencia aleatoria sin alterar la lista original, puedes usar el método `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Puedes obtener múltiples muestras aleatorias (permitiendo repeticiones) realizando varias llamadas:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Expresiones Regulares (Regular Expressions)

Las expresiones regulares se utilizan para la búsqueda de texto; son algo complejas, pero extremadamente útiles, y existen numerosos libros dedicados exclusivamente a ellas. Las explicaremos en detalle a medida que las encontremos. A continuación, algunos ejemplos de uso de expresiones regulares en Python:

```python
import re
print all([                                 # Todas las siguientes expresiones devuelven true, porque
    not re.match("a", "cat"),               # * 'cat' no empieza con 'a'
    re.search("a", "cat"),                  # * 'cat' contiene la letra 'a'
    not re.search("c", "dog"),              # * 'dog' no contiene la letra 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Divide la palabra en tres partes ['c','r','s'] basándose en 'a' o 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Reemplaza los números con guiones
    ])                                      # Salida: True
```

### Programación Orientada a Objetos (Object-Oriented Programming)

Al igual que muchos otros lenguajes, Python te permite definir clases que encapsulan datos y funciones para operar con ellos. En ocasiones, las utilizaremos para que nuestro código sea más claro y conciso. Quizás la forma más sencilla de explicarlas sea construyendo un ejemplo con abundantes comentarios. Imaginemos que Python no tuviera un tipo de conjunto (Set) incorporado; en ese caso, podríamos querer crear nuestra propia clase `Set`. ¿Qué funcionalidades debería tener esta clase? Por ejemplo, dado un `Set`, necesitaríamos poder añadir elementos, eliminarlos y verificar si contiene un valor específico. Por lo tanto, crearemos todas estas funcionalidades como funciones miembro de la clase. De este modo, podremos acceder a estas funciones miembro utilizando la notación de punto después del objeto `Set`:

```python
# Por convención, damos a las clases nombres en _PascalCase_
class Set:
    # Estas son funciones miembro
    # Cada función miembro tiene un parámetro "self" en primer lugar (otra convención)
    # "self" se refiere al objeto Set específico que se está utilizando

    def __init__(self, values=None):
        """Esta es la función constructora
        Se llama cada vez que creas un nuevo Set
        Puede ser llamada así:
        s1 = Set() # Conjunto vacío
        s2 = Set([1,2,2,3]) # Inicializa el conjunto con valores dados"""
        self.dict = {} # Cada instancia de Set tiene su propio atributo 'dict'
        # Usamos este atributo para seguir a cada miembro
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Esta es la representación de cadena del objeto Set
        Puedes obtenerla escribiendo el objeto en la consola de Python o pasándolo a la función str()"""
        return "Set: " + str(self.dict.keys())

    # Indicamos la pertenencia haciendo que el valor sea una clave en self.dict y estableciendo el valor en True
    def add(self, value):
        self.dict[value] = True

    # Si el argumento es una clave en el diccionario, el valor está en el Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Y así es como podemos usar `Set`:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Herramientas Funcionales (Functional Tools)

#### Funciones Parciales (partial)

Al trabajar con funciones, a veces queremos utilizar solo una parte de su funcionalidad para crear una nueva función. Por ejemplo, supongamos que tenemos una función con dos variables:

```python
def exp(base, power):
    return base ** power
```

Queremos usarla para crear una función que tome una sola variable y devuelva el resultado de la función de potencia `exp(2, power)`, es decir, una potencia de base 2.

Claro, podríamos definir una nueva función con `def`, aunque no sería lo más elegante:

```python
def two_to_the(power):
  return exp(2, power)
```

Una forma más inteligente es utilizar el método `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Ahora la función tiene una sola variable
print two_to_the(3)               # 8
```

También se pueden rellenar otros parámetros usando el método `partial` si se especifican por nombre:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Si intentas jugar con los parámetros en medio de la función, el programa se volverá confuso rápidamente, así que es mejor evitar ese tipo de comportamiento.

#### Mapeo (map)

Ocasionalmente también utilizaremos funciones como `map`, `reduce` y `filter` como alternativas a las comprensiones de listas:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Igual que el anterior
list_doubler = partial(map, double)     # La función duplica la lista
twice_xs = list_doubler(xs)             # También [2, 4, 6, 8]
```

El método `map` también se puede usar para mapear funciones con múltiples argumentos a múltiples listas:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrado (filter)

De manera similar, `filter` implementa la funcionalidad del `if` en las comprensiones de listas:

```python
def is_even(x):
    """Devuelve True si x es par, False si es impar"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Igual que el anterior
list_evener = partial(filter, is_even)    # Esta función realiza el filtrado
x_evens = list_evener(xs)                 # También [2, 4]
```

#### Reducción (reduce)

El método `reduce` combina repetidamente el primer y el segundo elemento de una lista, luego fusiona el resultado con el tercer elemento, y así sucesivamente, hasta obtener un único resultado:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Esta función reduce una lista
x_product = list_product(xs)              # También 24
```

### Enumeración (enumerate)

Ocasionalmente, surge la necesidad de iterar sobre una lista utilizando tanto los elementos como sus índices simultáneamente:

```python
# Poco "Pythonic" (menos conciso y elegante)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Tampoco muy "Pythonic" (menos conciso y elegante)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

La forma más concisa es utilizar el método de enumeración `enumerate`, que genera tuplas `(índice, elemento)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

De manera similar, si solo quieres usar el índice:

```python
for i in range(len(documents)): do_something(i)   # No conciso
for i, _ in enumerate(documents): do_something(i) # Conciso
```

Utilizaremos este método con frecuencia más adelante.

### Empaquetado y Desempaquetado de Argumentos (zip and Argument Unpacking)

#### Empaquetado (zip)

A menudo necesitaremos empaquetar dos o más listas. El empaquetado, o `zip`, consiste en transformar múltiples listas en una única lista de tuplas correspondientes:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Da como resultado [('a', 1), ('b', 2), ('c', 3)]
```

#### Desempaquetado de Argumentos (Argument Unpacking)

Si las listas tienen longitudes diferentes, el proceso de empaquetado se detendrá al final de la lista más corta. También puedes desempaquetar una lista usando un truco un tanto peculiar de "deszipado":

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

El asterisco se utiliza aquí para realizar el desempaquetado de argumentos, tomando los elementos de `pairs` como argumentos individuales para `zip`. La siguiente forma de llamar a la función tiene el mismo efecto:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Devuelve [('a','b','c'), ('1','2','3')]
```

El desempaquetado de argumentos también se puede usar con otras funciones:

```python
def add(a, b): return a + b

add(1, 2)           # Devuelve 3
add([1, 2])         # Error (TypeError)
add(*[1, 2])        # Devuelve 3
```

Aunque no siempre es lo más práctico, es un truco útil para hacer el código más conciso.

### Paso de Argumentos de Longitud Variable (args and kwargs)

Supongamos que queremos crear una función de orden superior que reciba una función antigua y devuelva una nueva función que multiplique el resultado de la función antigua por 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Ejecutando el ejemplo:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== (3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Sin embargo, si pasamos más de un argumento, este método deja de funcionar bien:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Error (TypeError: g() takes exactly 1 argument (2 given))
```

Por lo tanto, necesitamos especificar una función que pueda aceptar un número arbitrario de argumentos y luego utilizar el desempaquetado de argumentos para pasarlos, lo cual puede parecer un poco mágico:

```python
def magic(*args, **kwargs):
    print "argumentos sin nombre:", args
    print "argumentos con palabra clave:", kwargs
magic(1, 2, key="word", key2="word2")
# Resultado de la salida:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Cuando definimos una función de esta manera, `args` (abreviatura de "arguments") es una tupla que contiene los argumentos sin nombre, mientras que `kwargs` (abreviatura de "keyword arguments") es un diccionario que contiene los argumentos con nombre.

También se pueden usar cuando los argumentos pasados son listas (o tuplas) o diccionarios:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Aunque se puede usar de diversas maneras, algunas de ellas un tanto peculiares, nosotros solo lo emplearemos para resolver el problema de pasar un número variable de argumentos a funciones de orden superior:

```python
def doubler_correct(f):
    """Funciona eficazmente sin importar lo que sea f"""
    def g(*args, **kwargs):
        """No importa cuántos argumentos, esta función los pasará correctamente a f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### ¡Bienvenido al mundo de la ciencia de datos!

¡Ding! ¡Felicidades por abrir una vez más las puertas a un nuevo mundo! ¡Ahora puedes divertirte explorándolo!

**Lectura relacionada:**

[Sintaxis común de Python en ciencia de datos (básico)](https://philoli.com/python-tutorails-basic-level)
