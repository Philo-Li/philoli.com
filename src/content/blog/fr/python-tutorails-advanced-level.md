---
title: Syntaxe Python courante en science des données (avancé)
date: 2018-11-07 23:53:13
tags: Python
categories: Science des données
mathjax: true
--- 
Ces derniers jours, je me suis plongé dans [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([adresse PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) ), un excellent livre d'introduction à la science des données, très accessible. Un des chapitres y présente la syntaxe de base de Python ainsi que des fonctionnalités avancées couramment utilisées en science des données. J'ai trouvé la présentation très claire et concise, j'ai donc décidé de la traduire ici pour mémorisation.  
[Syntaxe Python courante en science des données (base)](https://philoli.com/python-tutorails-basic-level/)  
[Syntaxe Python courante en science des données (avancé)](https://philoli.com/python-tutorails-advanced-level/)  

Ce chapitre se concentre sur les syntaxes et fonctionnalités avancées de Python (basé sur Python 2.7) qui sont particulièrement utiles pour le traitement des données.

<!--more-->

### Tri (`Sorting`)

Pour trier une liste Python, vous pouvez utiliser la méthode `sort` de la liste. Si vous souhaitez conserver la liste originale intacte, utilisez la fonction `sorted` qui renvoie une nouvelle liste triée :

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x reste inchangé
x.sort()            # x est maintenant [1,2,3,4]
# Par défaut, `sort` ou `sorted` trient la liste par ordre croissant.
```

Pour trier par ordre décroissant, il suffit de spécifier le paramètre `reverse = True`.

Vous pouvez également définir une fonction de tri personnalisée pour trier la liste en fonction d'une clé spécifique :

```python
# Tri par ordre décroissant des valeurs absolues
x = sorted([-4,1,-2,3], key=abs, reverse=True) # est [-4,3,-2,1]
# Tri par ordre décroissant du nombre d'occurrences de chaque mot
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Compréhensions de listes (`List Comprehensions`)

Il est fréquent de vouloir extraire certains éléments d'une liste pour en créer une nouvelle, modifier la valeur de quelques-uns, ou faire les deux. En Python, la manière idiomatique de procéder est d'utiliser les *compréhensions de listes* :

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

De même, vous pouvez transformer une liste en dictionnaire ou en ensemble (set) :

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Si vous n'avez pas besoin d'utiliser les éléments de la liste, vous pouvez utiliser l'underscore (`_`) comme variable :

```python
zeroes = [0 for _ in even_numbers] # Même longueur que la liste `even_numbers`
```

Les compréhensions de listes supportent également les boucles `for` multiples :

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 100 paires au total : (0,0) (0,1) ... (9,8), (9,9)
```

Les boucles `for` suivantes peuvent utiliser les résultats des boucles `for` précédentes :

```python
increasing_pairs = [(x, y)                      # Ne contient que les paires où x < y
                    for x in range(10)          # range(lo, hi) est égal à
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Nous utiliserons fréquemment les compréhensions de listes à l'avenir.

### Générateurs et Itérateurs (`Generators and Iterators`)

Un problème avec les listes est qu'elles peuvent devenir très volumineuses sans crier gare. Par exemple, `range(1000000)` générera une liste d'un million d'éléments. Si vous ne traitez qu'un seul élément à la fois, cela peut prendre trop de temps (ou épuiser la mémoire). En réalité, vous n'aurez peut-être besoin que des premiers éléments, rendant les autres calculs superflus.

Les générateurs, quant à eux, vous permettent d'itérer uniquement sur les données dont vous avez besoin. Vous pouvez créer un générateur à l'aide d'une fonction et de l'expression `yield` :

```python
def lazy_range(n):
    """Une version paresseuse de range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Note du traducteur :
Un générateur est un type spécial d'itérateur. Le mot-clé `yield` est la clé de son fonctionnement. Il agit comme un point de pause et de reprise dans l'exécution du générateur ; il peut renvoyer une valeur et même recevoir une valeur assignée. Toute fonction contenant l'instruction `yield` est appelée un générateur. Lorsque l'exécution d'un générateur est suspendue par `yield`, il sauvegarde son état actuel et le restaure lors de l'appel suivant pour produire la valeur suivante. L'itération sur une liste peut consommer beaucoup d'espace mémoire, tandis qu'un générateur n'en occupe qu'une fraction, ce qui permet des économies significatives.

La boucle suivante consommera les valeurs `yield` une par une jusqu'à épuisement :

```python
for i in lazy_range(10):
    do_something_with(i)
```

(En fait, Python dispose d'une fonction intégrée qui réalise l'effet de `lazy_range` ci-dessus, appelée `xrange` en Python 2 et `range` en Python 3.) Cela signifie que vous pouvez créer une séquence infinie :

```python
def natural_numbers():
    """Retourne 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Cependant, il n'est pas recommandé d'utiliser une telle instruction sans logique de sortie de boucle.

**CONSEIL**
> Un inconvénient de l'itération avec des générateurs est que vous ne pouvez itérer sur les éléments qu'une seule fois du début à la fin. Si vous souhaitez itérer plusieurs fois, vous devrez créer un nouveau générateur à chaque fois ou utiliser une liste.

Une deuxième méthode pour créer un générateur : en utilisant une expression de compréhension entre parenthèses :

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Nous savons que la méthode `items()` d'un dictionnaire renvoie une liste de toutes les paires clé-valeur du dictionnaire. Cependant, dans la plupart des cas, nous utilisons la méthode de générateur `iteritems()` pour itérer, qui produit et renvoie une seule paire clé-valeur à la fois.

### Aléatoire (`Randomness`)
En science des données, nous aurons souvent besoin de générer des nombres aléatoires. Il suffit d'importer le module `random` pour les utiliser :

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # `random.random()` génère un nombre aléatoire
# 0.7579544029403025,         # Le nombre aléatoire est normalisé, se situant entre 0 et 1
# 0.420571580830845,          # C'est la fonction la plus couramment utilisée pour générer des nombres aléatoires
# 0.25891675029296335]
```

Si vous souhaitez obtenir des résultats reproductibles, vous pouvez faire en sorte que le module `random` génère des nombres pseudo-aléatoires (c'est-à-dire déterministes) en se basant sur un état interne défini par `random.seed` :

```python
random.seed(10)           # initialise la graine à 10
print random.random()     # 0.57140259469
random.seed(10)           # réinitialise la graine à 10
print random.random()     # de nouveau 0.57140259469
```

Parfois, nous utilisons également la fonction `random.randrange` pour générer un nombre aléatoire dans une plage spécifiée :

```python
random.randrange(10)      # Choisit un nombre aléatoire parmi `range(10)` = [0, 1, ..., 9]
random.randrange(3, 6)    # Choisit un nombre aléatoire parmi `range(3, 6)` = [3, 4, 5]
```

D'autres méthodes sont parfois très pratiques. Par exemple, `random.shuffle` mélangera l'ordre des éléments d'une liste pour en créer un arrangement aléatoire :

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (votre résultat sera probablement différent)
```

Si vous souhaitez choisir un élément aléatoire dans une liste, vous pouvez utiliser la méthode `random.choice` :

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # J'ai obtenu "Bob"
```

Si vous voulez générer une séquence aléatoire sans modifier la liste originale, vous pouvez utiliser la méthode `random.sample` :

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Vous pouvez obtenir plusieurs échantillons aléatoires (avec répétition) en appelant cette fonction plusieurs fois :

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Expressions régulières (`Regular Expressions`)

Les expressions régulières sont utilisées pour la recherche de texte. Elles sont un peu complexes mais extrêmement utiles, et de nombreux ouvrages leur sont entièrement dédiés. Nous les expliquerons plus en détail lorsque nous les rencontrerons. Voici quelques exemples d'utilisation des expressions régulières en Python :

```python
import re
print all([                                 # Toutes les assertions ci-dessous retournent True, car
    not re.match("a", "cat"),               # * 'cat' ne commence pas par 'a'
    re.search("a", "cat"),                  # * 'cat' contient la lettre 'a'
    not re.search("c", "dog"),              # * 'dog' ne contient pas la lettre 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Divise le mot en trois parties ['c','r','s'] selon 'a' ou 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Remplace les chiffres par des tirets
    ])                                      # Affiche True
```

### Programmation Orientée Objet (`Object-Oriented Programming`)

Comme de nombreux langages, Python vous permet de définir des classes qui encapsulent des données et des fonctions qui opèrent sur celles-ci. Nous les utiliserons parfois pour rendre notre code plus clair et concis. Le plus simple est probablement de les expliquer en construisant un exemple richement commenté. Supposons que Python n'ait pas de type `Set` intégré ; nous pourrions vouloir créer notre propre classe `Set`. Quelles fonctionnalités cette classe devrait-elle avoir ? Par exemple, étant donné un `Set`, nous devrions pouvoir y ajouter des éléments, en supprimer, et vérifier s'il contient une valeur spécifique. Nous allons donc créer toutes ces fonctionnalités comme fonctions membres de la classe. Ainsi, nous pourrons accéder à ces fonctions membres en utilisant un point après l'objet `Set` :

```python
# Par convention, nous donnons aux noms de classes un style _PascalCase_
class Set:
    # Ce sont des fonctions membres
    # Chaque fonction membre a un paramètre 'self' en première position (une autre convention)
    # 'self' correspond à l'objet Set spécifique utilisé

    def __init__(self, values=None):
        """C'est la fonction de construction.
        Elle est appelée chaque fois que vous créez un nouveau Set.
        Vous pouvez l'appeler ainsi :
        s1 = Set() # un ensemble vide
        s2 = Set([1,2,2,3]) # un ensemble initialisé avec des valeurs spécifiques"""
        self.dict = {} # Chaque instance de Set aura son propre attribut dict.
        # Nous utilisons cet attribut pour suivre chaque membre.
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """C'est la représentation string d'un objet Set.
        Vous pouvez l'obtenir en tapant l'objet dans la console Python ou en le passant à str()"""
        return "Set: " + str(self.dict.keys())

    # Nous représenterons l'appartenance en étant une clé dans `self.dict` et en lui attribuant la valeur True.
    def add(self, value):
        self.dict[value] = True

    # Si l'argument est une clé dans le dictionnaire, la valeur est dans le Set.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Nous pouvons ensuite utiliser `Set` de cette manière :

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Outils fonctionnels (`Functional Tools`)

#### Fonctions partielles (`partial`)

Lorsqu'on passe des fonctions, on souhaite parfois utiliser une partie de la fonctionnalité d'une fonction pour en créer une nouvelle. Prenons un exemple simple : supposons que nous ayons une fonction à deux variables :

```python
def exp(base, power):
    return base ** power
```

Nous voulons l'utiliser pour créer une fonction qui prend une seule variable en entrée et renvoie le résultat de la fonction de puissance avec une base de 2 : `exp(2, power)`.

Bien sûr, nous pourrions définir une nouvelle fonction avec `def`, bien que cela ne semble pas très judicieux :

```python
def two_to_the(power):
  return exp(2, power)
```

Une approche plus intelligente consiste à utiliser la méthode `functools.partial` :

```python
from functools import partial
two_to_the = partial(exp, 2)      # Cette fonction n'a qu'une seule variable
print two_to_the(3)               # 8
```

Si vous spécifiez le nom, vous pouvez également utiliser la méthode `partial` pour remplir d'autres paramètres :

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Si vous tentez de manipuler des paramètres de manière désordonnée au sein d'une fonction, votre code deviendra vite confus. Il est donc préférable d'éviter ce genre de pratique.

#### Mapper (`map`)

Nous utiliserons occasionnellement des fonctions comme `map`, `reduce` et `filter` comme alternatives aux compréhensions de listes :

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Idem
list_doubler = partial(map, double)     # La fonction double une liste
twice_xs = list_doubler(xs)             # Également [2, 4, 6, 8]
```

La méthode `map` peut également être utilisée pour mapper des fonctions à plusieurs arguments sur plusieurs listes :

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrer (`filter`)

De même, `filter` réalise la fonctionnalité du `if` dans les compréhensions de listes :

```python
def is_even(x):
    """Retourne True si x est pair, False si x est impair"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Idem
list_evener = partial(filter, is_even)    # Cette fonction implémente le filtrage
x_evens = list_evener(xs)                 # Également [2, 4]
```

#### Réduire (`reduce`)

La méthode `reduce` fusionne continuellement le premier et le deuxième élément d'une liste, puis fusionne le résultat avec le troisième élément, et répète ce processus jusqu'à obtenir un seul résultat final :

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Cette fonction réduit une liste
x_product = list_product(xs)              # Également 24
```

### Énumérer (`enumerate`)

Il arrive parfois que, lors de l'itération sur une liste, on ait besoin d'utiliser à la fois l'élément et son index :

```python
# Moins Pythonique (moins concis et élégant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Également moins Pythonique (moins concis et élégant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

La manière la plus concise est d'utiliser la méthode d'énumération `enumerate` qui génère des tuples `(index, élément)` :

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

De même, si vous ne voulez utiliser que l'index :

```python
for i in range(len(documents)): do_something(i)   # Pas concis
for i, _ in enumerate(documents): do_something(i) # Concis
```

Nous utiliserons fréquemment cette méthode par la suite.

### Compression et décompression d'arguments (`zip` et `Argument Unpacking`)

#### Compression (`zip`)

Nous compressons souvent deux listes ou plus. La compression consiste en fait à transformer plusieurs listes en une seule liste de tuples correspondants :

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Renvoie [('a', 1), ('b', 2), ('c', 3)]
```

#### Décompression d'arguments (`Argument Unpacking`)

Si les listes ont des longueurs différentes, le processus de compression s'arrêtera à la fin de la liste la plus courte. Vous pouvez également utiliser une astuce de décompression "unzip" un peu particulière pour décompresser une liste :

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

L'astérisque est utilisé ici pour effectuer la décompression des arguments. Il utilise les éléments de `pairs` comme arguments individuels pour `zip`. L'appel suivant a un effet équivalent :

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Retourne [('a','b','c'), ('1','2','3')]
```

La décompression d'arguments peut également être utilisée avec d'autres fonctions :

```python
def add(a, b): return a + b

add(1, 2)           # Retourne 3
add([1, 2])         # Erreur
add(*[1, 2])        # Retourne 3
```

Bien que ce ne soit pas toujours le plus pratique, c'est une astuce intéressante pour rendre le code plus concis.

### Arguments de longueur variable (`args` et `kwargs`)

Supposons que nous voulions créer une fonction d'ordre supérieur qui prend une fonction existante en entrée et renvoie une nouvelle fonction, la nouvelle fonction étant l'ancienne fonction multipliée par 2 :

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Exemple d'exécution :
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Cependant, cette méthode devient moins utile dès que plus d'un argument est passé :

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Erreur : TypeError: g() takes exactly 1 argument (2 given)
```

Nous devons donc définir une fonction qui puisse accepter un nombre arbitraire de paramètres, puis utiliser la décompression des arguments pour passer plusieurs paramètres. Cela peut sembler un peu magique :

```python
def magic(*args, **kwargs):
    print "arguments non nommés :", args
    print "arguments par mot-clé :", kwargs
magic(1, 2, key="word", key2="word2")
# Résultat :
# arguments non nommés : (1, 2)
# arguments par mot-clé : {'key2': 'word2', 'key': 'word'}
```

Lorsque nous définissons une fonction de cette manière, `args` (abréviation d'arguments) est un tuple contenant les arguments non nommés, tandis que `kwargs` (abréviation de keyword arguments) est un dictionnaire contenant les arguments nommés.

Ils peuvent également être utilisés lorsque les arguments passés sont des listes (ou des tuples) ou des tableaux :

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Vous pouvez l'utiliser avec diverses méthodes inhabituelles, mais nous ne l'utiliserons que pour résoudre le problème du passage d'un nombre variable d'arguments à des fonctions d'ordre supérieur :

```python
def doubler_correct(f):
    """Fonctionne quel que soit f"""
    def g(*args, **kwargs):
        """Transmet correctement les arguments à f, quel que soit leur nombre"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Bienvenue dans le monde de la science des données !

Ding ! Félicitations, vous avez de nouveau ouvert les portes d'un nouveau monde ! Il ne vous reste plus qu'à explorer et à vous amuser !

**Lecture complémentaire :**

[Syntaxe Python courante en science des données (base)](https://philoli.com/python-tutorails-basic-level)
