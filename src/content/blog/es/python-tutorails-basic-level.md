---
title: Sintaxis Común de Python en Ciencia de Datos (Básico)
date: 2018-11-07 20:53:13
tags: Python
categories: Ciencia de datos
mathjax: true
--- 

Estos días he estado leyendo [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([dirección PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), un libro de introducción a la ciencia de datos excelente y fácil de comprender. Uno de sus capítulos presenta la sintaxis básica de Python y la sintaxis avanzada comúnmente utilizada en ciencia de datos. Me pareció que la explicación era muy buena, concisa y clara, por lo que la he traducido y la comparto aquí como material de consulta.  
[Sintaxis de Python comúnmente usada en ciencia de datos (Básica)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Sintaxis de Python comúnmente usada en ciencia de datos (Avanzada)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Este capítulo se centra en presentar la sintaxis y las funcionalidades básicas de Python más útiles para el procesamiento de datos (basado en Python 2.7).

<!--more-->

### [](#formato-de-espacios "Formato de espacios")Formato de espacios

Mientras que muchos lenguajes utilizan llaves para controlar los bloques de código, Python opta por la indentación:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Primera línea del bucle "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Primera línea del bucle "for j"  
        print i + j  # Última línea del bucle "for j"  
    print i          # Última línea del bucle "for i"  
print "done looping"  
```

Esto hace que el código Python sea muy legible, pero también significa que debes prestar atención constante al formato. Los espacios dentro de los paréntesis se ignoran, lo cual es útil al escribir expresiones largas:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

También facilita la lectura del código:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#sentencias-multilinea "Sentencias multilínea")Sentencias multilínea

Puedes usar una barra invertida para indicar que dos líneas se conectan (una práctica poco común):  

```python
two_plus_three = 2 + \
                 3  
```

### [](#modulos "Módulos")Módulos

Tanto los módulos propios de Python como los de terceros que descargues, deben importarse manualmente para poder utilizarlos.

1. Simplemente importa el módulo completo directamente:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

El módulo `re` importado aquí se utiliza para expresiones regulares. Una vez importado, puedes usar directamente el nombre del módulo como prefijo (`re.`) para llamar a funciones específicas.

2. Si el nombre del módulo que quieres importar ya está en uso en tu código, puedes asignarle otro nombre al importarlo:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Si eres "travieso", podrías importar todo el módulo al espacio de nombres actual, lo que podría sobrescribir accidentalmente variables que ya hayas definido:

```python
match = 10  
from re import *  # El módulo re tiene una función 'match'  
print match       # Imprime la función match  
```

Como eres una buena persona, confío en que no harás esto.

### [](#operaciones-aritmeticas "Operaciones aritméticas")Operaciones aritméticas

Python 2.7 utiliza la división entera por defecto, por lo que $ 5 / 2 = 2 $. Sin embargo, a menudo no queremos una división entera, así que podemos importar este módulo:

```python
from __future__ import division  
```

Después de importarlo, obtendremos $5 / 2 = 2.5$.  
División entera: $5 // 2 = 2$.

### [](#funciones "Funciones")Funciones

#### [](#definicion-de-funciones "Definición de funciones")Definición de funciones


Una función es una regla que puede recibir cero o más entradas y devolver una salida. En Python, definimos una función con `def nombre_funcion(parametros)`:

```python
def double(x):  
    """Aquí puedes escribir una explicación sobre la funcionalidad de la función  
    Por ejemplo, esta función multiplica la entrada por 2"""  
    # Aquí va el cuerpo de la función, recuerda la indentación  
    return x * 2  
```
#### [](#uso-de-funciones "Uso de funciones")Uso de funciones


En Python, las funciones son objetos de primera clase, lo que significa que podemos asignarlas a variables o pasarlas como argumentos a otras funciones:

```python
def apply_to_one(f):  
    """Llama a la función f pasando 1 como argumento"""  
    return f(1)  
my_double = double          # 'double' apunta a la función definida en la sección anterior  
x = apply_to_one(my_double) # x es igual a 2  
```
#### [](#funciones-anonimas "Funciones anónimas")Funciones anónimas


También podemos crear funciones anónimas usando `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Es igual a 5  
```

Puedes asignar una `lambda` a otras variables, pero la mayoría de la gente te aconsejará que uses `def` siempre que sea posible:

```python
another_double = lambda x: 2 * x      # No recomendado  
def another_double(x): return 2 * x   # Práctica recomendada  
```

Nota adicional:

*   `lambda` es solo una expresión; el cuerpo de la función es mucho más simple que el de `def`.
*   El cuerpo de una `lambda` es una expresión, no un bloque de código. Solo se puede encapsular una lógica limitada dentro de una expresión `lambda`.

#### [](#paso-de-parametros-a-funciones "Paso de parámetros a funciones")Paso de parámetros a funciones

Los parámetros de las funciones pueden tener valores predeterminados. Si no se proporcionan argumentos al llamar la función, se usarán los valores predeterminados; si se proporcionan, se pasarán los valores especificados:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Imprime "hello"  
my_print()            # Imprime "my default message"  
```

A veces, también es muy útil especificar los argumentos directamente por su nombre:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Devuelve 5  
subtract(0, 5)    # Devuelve -5  
subtract(b=5)     # Lo mismo que el anterior, devuelve -5  
```
### [](#cadenas-de-texto-strings "Cadenas de texto (Strings)")Cadenas de texto (Strings)

Puedes crear cadenas de texto (strings) usando comillas simples o dobles (las comillas deben ir emparejadas):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Usa la barra invertida para caracteres de escape, como:

```python
tab_string = "\t"      # Representa el tabulador  
len(tab_string)        # Es igual a 1  
```

Cuando quieras usar la barra invertida literalmente (para rutas de Windows o expresiones regulares), puedes definirla usando cadenas de texto crudas `r""`:

```python
not_tab_string = r"\t" # Representa los caracteres '\' y 't'  
len(not_tab_string)    # Es igual a 2  
```

Crea cadenas de texto multilínea usando tres comillas dobles:

```python
multi_line_string = """Esta es la primera línea  
Esta es la segunda línea  
Esta es la tercera línea"""  
```

### [](#manejo-de-excepciones "Manejo de excepciones")Manejo de excepciones

Cuando un programa encuentra un error, Python lanza una `excepción`. Si no la manejamos, el programa terminará su ejecución. Para capturar excepciones, podemos usar las sentencias `try` y `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "No se puede dividir por 0"  
```

Aunque en otros lenguajes las excepciones pueden verse como algo negativo, en Python, manejarlas activamente puede hacer que tu código sea más conciso y limpio.

### [](#listas "Listas")Listas

#### [](#crear-listas "Crear listas")Crear listas

Las listas son colecciones simples y ordenadas, y son una de las estructuras de datos más fundamentales en Python (similares a los arrays en otros lenguajes, pero con algunas características adicionales). Para crear una lista:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Es igual a 3  
list_sum = sum(integer_list)      # Es igual a 6  
```
#### [](#acceder-a-los-valores-de-una-lista "Acceder a los valores de una lista")Acceder a los valores de una lista


Puedes acceder a los valores de una lista mediante el indexado con corchetes:

```python
x = range(10)       # La lista x = [0, 1, ..., 9]  
zero = x[0]         # Es igual a 0, los índices de la lista empiezan en 0  
one = x[1]          # Es igual a 1  
nine = x[-1]        # Es igual a 9, el último elemento de la lista  
eight = x[-2]       # Es igual a 8, el penúltimo elemento de la lista  
x[0] = -1           # La lista actual x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#recortar-listas "Recortar listas")Recortar listas


Puedes recortar (slice) listas con corchetes:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Puedes usar `in` para verificar si un elemento está en una lista:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Este método de búsqueda de elementos es ineficiente; úsalo solo si la lista es pequeña o si el tiempo de búsqueda no es crítico.

#### [](#concatenar-listas "Concatenar listas")Concatenar listas

En Python es muy fácil concatenar dos listas:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Ahora x = [1,2,3,4,5,6]  
```

Si no quieres modificar la lista original `x`, puedes usar el operador de suma para crear una nueva lista:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Ahora y = [1, 2, 3, 4, 5, 6]; x no ha cambiado  
```

A menudo se usa este método para añadir un elemento a la lista de uno en uno:

```python
x = [1, 2, 3]  
x.append(0)           # Ahora x = [1, 2, 3, 0]  
y = x[-1]             # Es igual a 0  
z = len(x)            # Es igual a 4  
```

#### [](#descomposicion-de-listas "Descomposición de listas")Descomposición de listas

Si sabes cuántos elementos hay en una lista, es muy fácil descomponerla:

```python
x, y = [1, 2]         # Ahora x = 1, y = 2  
```

Si el número de elementos en ambos lados de la asignación no coincide, obtendrás un `ValueError`. Por eso, es más común usar un guion bajo para almacenar el resto de la lista:

```python
_, y = [1, 2]         # Ahora y == 2, ignorando el primer elemento  
```

### [](#tuplas "Tuplas")Tuplas

Las listas y las tuplas son muy similares. La única diferencia es que los elementos de una tupla no pueden ser modificados.

#### [](#creacion-de-tuplas "Creación de tuplas")Creación de tuplas

Puedes crear tuplas usando paréntesis o sin ellos:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Ahora my_list es [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "No se puede modificar la tupla"  
```

Las tuplas son muy convenientes para obtener múltiples valores de retorno de una función:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Es igual a (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tanto las tuplas como las listas permiten la asignación múltiple de elementos:

```python
x, y = 1, 2       # Ahora x = 1, y = 2  
x, y = y, x       # Intercambia los valores de dos variables en Python; ahora x = 2, y = 1  
```

### [](#diccionarios "Diccionarios")Diccionarios

#### [](#creacion-de-diccionarios "Creación de diccionarios")Creación de diccionarios

Otra estructura de datos fundamental en Python es el diccionario, que te permite obtener rápidamente el valor (`value`) correspondiente a una clave (`key`):

```python
empty_dict = {}                       # Definición de diccionario vacío muy 'pythónica'  
empty_dict2 = dict()                  # Definición de diccionario vacío menos 'pythónica'  
grades = { "Joel" : 80, "Tim" : 95 }  # Almacenamiento en diccionario  
```

#### [](#busqueda-de-elementos-en-diccionarios "Búsqueda de elementos en diccionarios")Búsqueda de elementos en diccionarios

Puedes usar corchetes y la clave para buscar el valor correspondiente:

```python
joels_grade = grades["Joel"]          # Es igual a 80  
```

Si la clave que buscas no está en el diccionario, se devolverá un `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "¡no hay calificación para Kate!"  
```

Puedes usar `in` para verificar si una clave está en el diccionario:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Los diccionarios tienen un método que devuelve un valor predeterminado si la clave buscada no se encuentra (en lugar de lanzar una excepción):

```python
joels_grade = grades.get("Joel", 0)   # Es igual a 80  
kates_grade = grades.get("Kate", 0)   # Es igual a 0  
no_ones_grade = grades.get("No One")  # Devuelve el valor predeterminado None  
```

#### [](#modificacion-de-diccionarios "Modificación de diccionarios")Modificación de diccionarios

Puedes usar corchetes para crear o modificar pares clave-valor en un diccionario:

```python
grades["Tim"] = 99                    # Reemplaza el valor antiguo  
grades["Kate"] = 100                  # Añade un par clave-valor  
num_students = len(grades)            # Es igual a 3  
```

A menudo usaremos diccionarios de esta manera para expresar la estructura de los datos:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Además de buscar claves específicas, también podemos operar con todas las claves de la siguiente manera:

```python
tweet_keys = tweet.keys()             # Obtiene una lista de claves  
tweet_values = tweet.values()         # Obtiene una lista de valores  
tweet_items = tweet.items()           # Obtiene una tupla (clave, valor)  
"user" in tweet_keys                  # Devuelve True, usa una búsqueda 'in' menos eficiente en la lista  
"user" in tweet                       # Forma más 'pythónica', usa una búsqueda 'in' eficiente en el diccionario  
"joelgrus" in tweet_values            # True  
```

Las claves en los diccionarios son únicas, y las listas no pueden usarse como claves. Si necesitas una clave compuesta, puedes usar una tupla o convertir la clave a una cadena de texto de alguna manera.

#### [](#diccionarios-predeterminados "Diccionarios predeterminados (defaultdict)")Diccionarios predeterminados (defaultdict)

Si estás intentando contar la frecuencia de cada palabra en un documento, una forma obvia es crear un diccionario donde las palabras sean las claves y sus frecuencias los valores. Luego, iterar por el documento, incrementando el valor de una palabra si ya existe, o añadiendo un nuevo par clave-valor si es la primera vez que aparece:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Por supuesto, también puedes abordar una clave faltante de forma proactiva, como un 'ataque preventivo', de esta manera:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

El tercer método es usar `get`, que funciona excelentemente para manejar claves ausentes:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Los diccionarios predeterminados (`defaultdict`) funcionan como los diccionarios normales, con la única diferencia de que, cuando intentas buscar una clave inexistente, `defaultdict` crea automáticamente un par clave-valor usando la función que le proporciones. Para usarlo, necesitas importar la biblioteca `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() genera 0  
for word in document:  
    word_counts[word] += 1  
```

Los `defaultdict` también son muy útiles con listas, diccionarios normales e incluso funciones personalizadas:

```python
dd_list = defaultdict(list)           # list() genera una lista vacía  
dd_list[2].append(1)                  # Ahora dd_list es {2: [1]}  
dd_dict = defaultdict(dict)           # dict() genera un diccionario vacío  
dd_dict["Joel"]["City"] = "Seattle"   # Ahora dd_dict contiene { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Crea un diccionario donde los valores para las claves son listas  
dd_pair[2][1] = 1                     # Ahora dd_pair contiene {2: [0,1]}  
```

Este método es muy útil, ya que en el futuro, cuando necesitemos obtener ciertos resultados de clave-valor de un diccionario, no será necesario verificar si la clave existe.

### [](#contador-counter "Contador (Counter)")Contador (Counter)

Un contador (`Counter`) puede transformar directamente un conjunto de valores en un objeto similar a un diccionario, donde las claves son los elementos del conjunto y los valores son el número de veces que aparece cada elemento. Esto se usa con frecuencia al crear histogramas:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (aproximadamente) es { 0 : 2, 1 : 1, 2 : 1 }  
```

De esta manera, tenemos un método muy conveniente para contar la frecuencia de las palabras:

```python
word_counts = Counter(document)  
```

Los contadores también tienen un método muy útil, `most_common`, que puede obtener directamente las palabras más frecuentes y sus respectivas frecuencias:

```python
# Imprime las 10 palabras más frecuentes y sus recuentos  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#conjuntos-sets "Conjuntos (Sets)")Conjuntos (Sets)

Otra estructura de datos en Python son los conjuntos (`sets`), que son colecciones de elementos únicos.  
Puedes crear un conjunto y añadirle elementos de esta manera:

```python
s = set()  
s.add(1)          # s es { 1 }  
s.add(2)          # s es { 1, 2 }  
s.add(2)          # s es { 1, 2 }  
x = len(s)        # Es igual a 2  
y = 2 in s        # Es igual a True  
z = 3 in s        # Es igual a False  
```

Dos grandes razones para usar conjuntos:

Primero, la operación `in` en los conjuntos es muy eficiente. Cuando la cantidad de elementos en un conjunto de datos es muy grande, buscar elementos en un conjunto es claramente más adecuado que hacerlo en una lista:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Fallará, necesita verificar cada elemento  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Búsqueda exitosa y muy rápida  
```

Segundo, es muy conveniente usar conjuntos para obtener los elementos únicos de un conjunto de datos:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Sin embargo, en la práctica, los conjuntos no se utilizan con tanta frecuencia como los diccionarios y las listas.

### [](#sentencias-condicionales "Sentencias condicionales")Sentencias condicionales

En la mayoría de los lenguajes de programación, puedes usar `if` para las ramas condicionales de esta manera:

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

También puedes escribir sentencias condicionales en una sola línea de esta manera, aunque es poco común:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#sentencias-de-bucle "Sentencias de bucle")Sentencias de bucle

#### [](#bucle-while "Bucle while")Bucle _while_


El bucle `while` en Python:

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### [](#bucle-for "Bucle for")Bucle _for_

Más comúnmente, se utiliza el bucle `for-in`:

```python
for x in range(10):  
    print x, "is less than 10"  
```

Para expresiones lógicas más complejas, se pueden usar las sentencias `continue` y `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Pasa directamente a la siguiente iteración del bucle  
    if x == 5:  
        break             # Sale completamente del bucle  
    print x  
```

El resultado será 0, 1, 2 y 4.

### [](#veracidad-truthiness "Veracidad (Truthiness)")Veracidad (Truthiness)

Las variables booleanas en Python funcionan de manera similar a otros lenguajes, con la única diferencia de que la primera letra siempre debe estar en mayúscula:

```python
one_is_less_than_two = 1 < 2      # Es True  
true_equals_false = True == False # Es False  
```

Python usa `None` para indicar que un valor no existe, similar a `null` en otros lenguajes:

```python
x = None  
print x == None        # Imprime True, pero no es lo más elegante  
print x is None        # Imprime True, más elegante  
```

Python te permite usar otros valores en lugar de booleanos; los siguientes son todos equivalentes a `False`:

*   False
*   None
*   [] (una lista vacía)
*   {} (un diccionario vacío)
*   “”
*   set()
*   0
*   0.0

De manera similar, hay muchos valores equivalentes a `True`, lo que te permite verificar fácilmente listas vacías, cadenas vacías, diccionarios vacíos, etc.

Por supuesto, si no puedes prever el resultado, podrías cometer errores durante el uso:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Una forma más simple de hacer lo mismo:

```python
first_char = s and s[0]  
```

Si el primer valor es verdadero, devuelve el segundo valor; de lo contrario, devuelve el primero.

De manera similar, si `x` puede ser un número o estar vacío, así puedes obtener un `x` que sea definitivamente un número:

```python
safe_x = x or 0  
```

Python también tiene la función `all`, que devuelve `True` si todos los elementos son `True`. La función `any` devuelve `True` si al menos un elemento es `True`. Por ejemplo, para una lista donde cada elemento es 'verdadero', la función `all` devolverá `True`; de lo contrario, devolverá `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} es equivalente a "False"  
any([True, 1, {}])          # True  
all([])                     # True, no hay ningún elemento equivalente a "False"  
any([])                     # False, no hay ningún elemento equivalente a "True"  
```

**Lectura adicional:**  
[Sintaxis de Python comúnmente usada en ciencia de datos (Avanzada)](https://philoli.com/python-tutorails-advanced-level/)
