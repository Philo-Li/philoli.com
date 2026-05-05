---
title: Syntaxe Python courante en science des données (bases)
date: 2018-11-07 20:53:13
tags: Python
categories: Science des données
mathjax: true
---

Ces derniers jours, je me suis plongé dans cet excellent ouvrage d'introduction à la science des données, [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF ici](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)). L'un de ses chapitres présente la syntaxe Python de base et les fonctionnalités avancées couramment utilisées en science des données. J'ai trouvé que l'explication était très bien faite, concise et limpide, j'ai donc décidé de la traduire ici à titre de mémo.
[Syntaxe Python courante en science des données (bases)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Syntaxe Python courante en science des données (avancé)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

Ce chapitre se concentre sur la syntaxe de base et les fonctionnalités de Python (basées sur Python 2.7) particulièrement utiles pour le traitement des données.

<!--more-->

### [](#format-d-espacement "Format d'espacement")Format d'espacement

Alors que de nombreux langages utilisent des accolades pour délimiter les blocs de code, Python, lui, utilise l'indentation :

```python
for i in [1, 2, 3, 4, 5]:
    print i          # Première ligne de la boucle "for i"
    for j in [1, 2, 3, 4, 5]:
        print j      # Première ligne de la boucle "for j"
        print i + j  # Dernière ligne de la boucle "for j"
    print i          # Dernière ligne de la boucle "for i"
print "boucle terminée"
```

Cela rend le code Python très lisible, mais signifie également qu'il faut toujours être attentif à la mise en forme. Les espaces à l'intérieur des parenthèses sont ignorés, ce qui est utile pour écrire de longues expressions :

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

Cela rend également le code plus lisible :

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### [](#instructions-multi-lignes "Instructions multi-lignes")Instructions multi-lignes

On peut utiliser un antislash pour indiquer qu'une instruction est interrompue sur deux lignes (cette pratique est rarement utilisée) :

```python
two_plus_three = 2 + \
                 3
```

### [](#modules "Modules")Modules

Qu'il s'agisse de modules intégrés à Python ou de modules tiers téléchargés, ils doivent être importés manuellement pour être utilisés.

1. Pour importer simplement l'intégralité d'un module :

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Le module `_re_` importé ici est utilisé pour les expressions régulières. Après l'importation, vous pouvez appeler ses fonctions spécifiques en préfixant leur nom par celui du module (`re.`).

2. Si le nom du module à importer est déjà utilisé dans votre code, vous pouvez lui assigner un alias lors de l'importation :

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. Si vous êtes d'humeur un peu "bad boy", vous pourriez importer l'intégralité du module dans l'espace de noms actuel, ce qui risque de surcharger accidentellement des variables que vous auriez déjà définies :

```python
match = 10
from re import *  # le module re contient une fonction appelée match
print match       # affiche la fonction match
```

Mais puisque vous êtes une bonne personne, je suis sûr que vous ne ferez pas cela.

### [](#arithmetique "Arithmétique")Arithmétique

Python 2.7 effectue par défaut la division entière, ainsi $ 5 / 2 = 2 $. Cependant, il arrive souvent que nous ne voulions pas de division entière. Pour cela, on peut importer ce module :

```python
from __future__ import division
```

Après l'importation, on obtient $5 / 2 = 2.5$. Pour une division entière explicite : $5 // 2 = 2$.

### [](#fonctions "Fonctions")Fonctions

#### [](#definition-de-fonctions "Définition de fonctions")Définition de fonctions

Une fonction est une règle qui reçoit zéro ou plusieurs entrées et renvoie une sortie. En Python, nous définissons une fonction avec `def nom_fonction(paramètres)` :

```python
def double(x):
    """Vous pouvez écrire ici une explication de la fonction.
    Par exemple, cette fonction multiplie son entrée par 2."""
    # Le corps de la fonction est ici, n'oubliez pas l'indentation.
    return x * 2
```
#### [](#utilisation-de-fonctions "Utilisation de fonctions")Utilisation de fonctions

En Python, les fonctions sont des objets de première classe, ce qui signifie que nous pouvons les assigner à une variable, ou les passer comme argument à d'autres fonctions :

```python
def apply_to_one(f):
    """Appelle la fonction f en passant 1 comme paramètre."""
    return f(1)
my_double = double          # double pointe vers la fonction définie dans la section précédente
x = apply_to_one(my_double) # x est égal à 2
```
#### [](#fonctions-anonymes "Fonctions anonymes")Fonctions anonymes

On peut également créer des fonctions anonymes via `lambda` :

```python
y = apply_to_one(lambda x: x + 4)     # est égal à 5
```

Il est possible d'assigner une fonction `lambda` à une variable, mais la plupart des gens vous conseilleront de privilégier `_def_` :

```python
another_double = lambda x: 2 * x      # Déconseillé
def another_double(x): return 2 * x   # Pratique recommandée
```

Remarque :

*   Une `lambda` est simplement une expression, son corps est bien plus simple que celui d'une fonction `def`.
*   Le corps d'une `lambda` est une expression, pas un bloc de code. Seule une logique limitée peut être encapsulée dans une expression `lambda`.

#### [](#passage-de-parametres "Passage de paramètres")Passage de paramètres

Les paramètres de fonction peuvent avoir des valeurs par défaut. Si aucun argument n'est fourni lors de l'appel, la valeur par défaut est utilisée ; sinon, la valeur spécifiée est passée :

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Affiche "hello"
my_print()            # Affiche "my default message"
```

Il est parfois très utile de spécifier les arguments par leur nom :

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Renvoie 5
subtract(0, 5)    # Renvoie -5
subtract(b=5)     # Identique au précédent, renvoie -5
```
### [](#chaines-de-caracteres "Chaînes de caractères")Chaînes de caractères

On peut créer des chaînes de caractères en utilisant des guillemets simples ou doubles (les guillemets doivent toujours être appariés) :

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Utilisez un antislash pour les caractères d'échappement, par exemple :

```python
tab_string = "\t"      # représente une tabulation
len(tab_string)        # est égal à 1
```

Lorsque vous souhaitez utiliser l'antislash lui-même (par exemple pour les chemins de fichiers Windows ou les expressions régulières), vous pouvez définir une chaîne brute `r""` :

```python
not_tab_string = r"\t" # représente les caractères '\' et 't'
len(not_tab_string)    # est égal à 2
```

Pour créer des chaînes de caractères sur plusieurs lignes, utilisez trois guillemets doubles :

```python
multi_line_string = """Ceci est la première ligne
Ceci est la deuxième ligne
Ceci est la troisième ligne"""
```

### [](#gestion-des-exceptions "Gestion des exceptions")Gestion des exceptions

Lorsqu'une erreur survient dans un programme, Python déclenche une `exception`. Si nous ne la gérons pas, le programme s'arrêtera. Pour capturer les exceptions, utilisez les instructions `try` et `except` :

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Impossible de diviser par zéro"
```

Bien que dans d'autres langages, les exceptions soient parfois considérées comme une mauvaise pratique, en Python, une gestion appropriée des exceptions peut rendre votre code plus concis et propre.

### [](#listes "Listes")Listes

#### [](#creation-de-listes "Création de listes")Création de listes

Les listes sont des collections ordonnées simples et l'une des structures de données les plus fondamentales en Python (similaires aux tableaux dans d'autres langages, mais avec des fonctionnalités supplémentaires). Pour créer une liste :

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # est égal à 3
list_sum = sum(integer_list)      # est égal à 6
```
#### [](#acces-aux-elements-d-une-liste "Accès aux éléments d'une liste")Accès aux éléments d'une liste

Vous pouvez accéder aux valeurs d'une liste via leur index entre crochets :

```python
x = range(10)       # x devient la liste x = [0, 1, ..., 9]
zero = x[0]         # est égal à 0, l'indexation de la liste commence à 0
one = x[1]          # est égal à 1
nine = x[-1]        # est égal à 9, le dernier élément de la liste
eight = x[-2]       # est égal à 8, l'avant-dernier élément de la liste
x[0] = -1           # x est maintenant [-1, 1, 2, 3, ..., 9]
```

#### [](#tranches-de-listes "Tranches de listes")Tranches de listes

Vous pouvez extraire des tranches de listes en utilisant les crochets :

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

Vous pouvez utiliser `in` pour vérifier si un élément est présent dans une liste :

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

Cette méthode de recherche d'éléments est inefficace. Ne l'utilisez que si la liste est très petite ou si le temps de recherche n'est pas critique.

#### [](#concatener-des-listes "Concaténer des listes")Concaténer des listes

En Python, il est très facile de concaténer deux listes :

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # x est maintenant [1,2,3,4,5,6]
```

Si vous ne voulez pas modifier la liste `x` originale, vous pouvez utiliser l'opérateur d'addition pour créer une nouvelle liste :

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # y est maintenant [1, 2, 3, 4, 5, 6] ; x reste inchangée
```

On utilise souvent cette méthode pour ajouter un élément à la fois à une liste :

```python
x = [1, 2, 3]
x.append(0)           # x est maintenant [1, 2, 3, 0]
y = x[-1]             # est égal à 0
z = len(x)            # est égal à 4
```

#### [](#desempaquetage-de-listes "Désempaquetage de listes")Désempaquetage de listes

Si vous connaissez le nombre d'éléments dans une liste, il est très facile de la décomposer :

```python
x, y = [1, 2]         # x est maintenant 1, y est 2
```

Si le nombre d'éléments ne correspond pas des deux côtés de l'égalité, vous obtiendrez une _erreur de valeur_. C'est pourquoi nous utilisons plus souvent l'underscore pour ignorer le reste de la liste :

```python
_, y = [1, 2]         # y == 2, sans se soucier du premier élément
```

### [](#tuples "Tuples")Tuples

Les listes et les tuples sont très similaires. La seule différence est que les éléments d'un tuple ne peuvent pas être modifiés.

#### [](#creation-de-tuples "Création de tuples")Création de tuples

On peut créer des tuples en utilisant des parenthèses ou sans aucune parenthèse :

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list = [1,2]
my_list[1] = 3        # my_list est maintenant [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Impossible de modifier un tuple"
```

Les tuples permettent de récupérer très facilement plusieurs valeurs de retour d'une fonction :

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # est égal à (5, 6)
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

Les tuples (et les listes) prennent en charge l'assignation simultanée de plusieurs éléments :

```python
x, y = 1, 2       # x est maintenant 1, y est 2
x, y = y, x       # Échange les valeurs de deux variables en Python ; x est maintenant 2, y est 1
```

### [](#dictionnaires "Dictionnaires")Dictionnaires

#### [](#creation-de-dictionnaires "Création de dictionnaires")Création de dictionnaires

Une autre structure de données fondamentale en Python est le dictionnaire. Il permet d'obtenir rapidement une valeur (value) en utilisant une clé (key) :

```python
empty_dict = {}                       # Définition très pythonique d'un dictionnaire vide
empty_dict2 = dict()                  # Définition moins pythonique d'un dictionnaire vide
grades = { "Joel" : 80, "Tim" : 95 }  # Stockage dans le dictionnaire
```

#### [](#recherche-d-elements-dans-un-dictionnaire "Recherche d'éléments dans un dictionnaire")Recherche d'éléments dans un dictionnaire

Vous pouvez rechercher la valeur correspondante en utilisant les crochets et la clé :

```python
joels_grade = grades["Joel"]          # est égal à 80
```

Si la clé recherchée n'est pas dans le dictionnaire, une `KeyError` sera levée :

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "pas de note pour Kate !"
```

Vous pouvez utiliser `in` pour vérifier si une clé est présente dans le dictionnaire :

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Les dictionnaires ont une méthode qui permet de renvoyer une valeur par défaut lorsque la clé recherchée n'est pas présente dans le dictionnaire (au lieu de lever une exception) :

```python
joels_grade = grades.get("Joel", 0)   # est égal à 80
kates_grade = grades.get("Kate", 0)   # est égal à 0
no_ones_grade = grades.get("No One")  # Renvoie la valeur par défaut None
```

#### [](#modification-de-dictionnaires "Modification de dictionnaires")Modification de dictionnaires

Vous pouvez utiliser les crochets pour créer ou modifier des paires clé-valeur dans un dictionnaire :

```python
grades["Tim"] = 99                    # Remplace l'ancienne valeur
grades["Kate"] = 100                  # Ajoute une paire clé-valeur
num_students = len(grades)            # est égal à 3
```

Nous utiliserons souvent les dictionnaires de cette manière pour représenter la structure des données :

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

En plus de rechercher des clés spécifiques, nous pouvons également manipuler toutes les clés de cette manière :

```python
tweet_keys = tweet.keys()             # Obtient une liste de clés
tweet_values = tweet.values()         # Obtient une liste de valeurs
tweet_items = tweet.items()           # Obtient une liste de tuples (clé, valeur)
"user" in tweet_keys                  # Renvoie True, utilise la recherche 'in' moins efficace d'une liste
"user" in tweet                       # Utilisation plus pythonique, utilise la recherche 'in' efficace d'un dictionnaire
"joelgrus" in tweet_values            # True
```

Les clés des dictionnaires sont uniques, et les listes ne peuvent pas être utilisées comme clés de dictionnaire. Si vous avez besoin d'une clé multi-parties, vous pouvez utiliser un tuple ou convertir la clé en chaîne de caractères d'une manière ou d'une autre.

#### [](#dictionnaires-par-defaut "Dictionnaires par défaut")Dictionnaires par défaut

Si vous essayez de compter la fréquence de chaque mot dans un document, une approche évidente est de créer un dictionnaire où les mots sont les clés et leurs fréquences sont les valeurs correspondantes. Ensuite, vous parcourez le document, incrémentez la valeur d'un mot s'il existe déjà, ou ajoutez une nouvelle paire clé-valeur s'il n'est pas encore présent :

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Bien sûr, vous pouvez également gérer à l'avance une clé manquante en utilisant une approche "demander pardon plutôt que permission" comme ceci :

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

La troisième méthode consiste à utiliser `get`, qui gère très bien les clés manquantes :

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

Un dictionnaire par défaut (defaultdict) fonctionne comme un dictionnaire normal, à la seule différence que lorsque vous tentez d'accéder à une clé inexistante, il crée automatiquement une paire clé-valeur en utilisant la clé fournie. Pour utiliser un dictionnaire par défaut, vous devez importer la bibliothèque `collections` :

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() génère 0
for word in document:
    word_counts[word] += 1
```

Les dictionnaires par défaut sont également très utiles avec des listes, des dictionnaires ordinaires et même des fonctions personnalisées :

```python
dd_list = defaultdict(list)           # list() génère une liste vide
dd_list[2].append(1)                  # dd_list est maintenant {2: [1]}
dd_dict = defaultdict(dict)           # dict() génère un dictionnaire vide
dd_dict["Joel"]["City"] = "Seattle"   # dd_dict contient maintenant { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Crée un dictionnaire où les valeurs associées aux clés sont des listes
dd_pair[2][1] = 1                     # dd_pair contient maintenant {2: [0,1]}
```

Cette méthode est très utile, car nous n'avons plus besoin de vérifier l'existence d'une clé lorsque nous voulons récupérer ou manipuler des valeurs dans un dictionnaire.

### [](#compteurs-counter "Compteurs (Counter)")Compteurs (Counter)

Un compteur (Counter) peut transformer directement un groupe de valeurs en un objet similaire à un dictionnaire, où la clé est un élément du groupe et la valeur correspondante est le nombre de fois où cet élément apparaît. C'est fréquemment utilisé lors de la création d'histogrammes :

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c est (à peu près) { 0 : 2, 1 : 1, 2 : 1 }
```

Nous avons ainsi une méthode très pratique pour compter la fréquence des mots :

```python
word_counts = Counter(document)
```

Les compteurs ont également une méthode très utile, `most_common`, qui permet d'obtenir directement les mots les plus fréquents et leurs fréquences correspondantes :

```python
# Affiche les 10 mots les plus fréquents et leur compte
for word, count in word_counts.most_common(10):
    print word, count
```

### [](#ensembles-sets "Ensembles (Sets)")Ensembles (Sets)

Une autre structure de données en Python est l'ensemble (set). Un ensemble est une collection d'éléments uniques.
On peut créer un ensemble et y ajouter des éléments de cette manière :

```python
s = set()
s.add(1)          # s est { 1 }
s.add(2)          # s est { 1, 2 }
s.add(2)          # s est { 1, 2 }
x = len(s)        # est égal à 2
y = 2 in s        # est égal à True
z = 3 in s        # est égal à False
```

Deux raisons principales d'utiliser les ensembles :

Premièrement, l'opération `in` est très efficace dans les ensembles. Lorsque le nombre d'éléments dans un ensemble de données est très important, rechercher des éléments sous forme d'ensemble est clairement plus approprié qu'avec une liste :

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Échec, nécessite de vérifier chaque élément
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Recherche réussie, et très rapide
```

Deuxièmement, les ensembles sont très pratiques pour obtenir les éléments distincts d'un groupe de données :

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

Cependant, en pratique, les ensembles sont moins fréquemment utilisés que les dictionnaires et les listes.

### [](#instructions-conditionnelles "Instructions conditionnelles")Instructions conditionnelles

Dans la plupart des langages de programmation, vous pouvez utiliser `_if_` pour les branches conditionnelles de cette manière :

```python
if 1 > 2:
    message = "si seulement 1 était plus grand que deux…"
elif 1 > 3:
    message = "elif signifie 'else if'"
else:
    message = "quand tout le reste échoue, utilisez else (si vous le souhaitez)"
```

Vous pouvez également écrire les instructions conditionnelles sur une seule ligne, mais c'est rarement utilisé :

```python
parity = "even" if x % 2 == 0 else "odd"
```

### [](#boucles "Boucles")Boucles

#### [](#boucle-while "Boucle _while_")Boucle _while_

La boucle `while` en Python :

```python
x = 0
while x < 10:
    print x, "est inférieur à 10"
    x += 1
```

#### [](#boucle-for "Boucle _for_")Boucle _for_

Plus couramment, on utilise la boucle `for-in` :

```python
for x in range(10):
    print x, "est inférieur à 10"
```

Des expressions logiques plus complexes peuvent utiliser les instructions `continue` et `break` :

```python
for x in range(10):
    if x == 3:
        continue          # Passe directement à l'itération suivante
    if x == 5:
        break             # Quitte complètement la boucle
    print x
```

Le résultat affichera 0, 1, 2 et 4.

### [](#verite-truthiness "Vérité (Truthiness)")Vérité (Truthiness)

L'utilisation des variables booléennes en Python est similaire à celle d'autres langages, la seule différence étant que la première lettre doit toujours être en majuscule :

```python
one_is_less_than_two = 1 < 2      # est True
true_equals_false = True == False # est False
```

Python utilise `None` pour indiquer qu'une valeur n'existe pas, similaire au `null` d'autres langages :

```python
x = None
print x == None        # Affiche True, moins élégant
print x is None        # Affiche True, plus élégant
```

Python vous permet d'utiliser d'autres valeurs à la place des booléens ; les suivantes sont toutes équivalentes à `False` :

*   False
*   None
*   [] (une liste vide)
*   {} (un dictionnaire vide)
*   “”
*   set()
*   0
*   0.0

De même, il existe de nombreuses valeurs équivalentes à `True`, ce qui rend très pratique la vérification de listes vides, de chaînes de caractères vides, de dictionnaires vides, etc.

Cependant, si vous ne pouvez pas anticiper le résultat, vous risquez de rencontrer des erreurs lors de l'utilisation :

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

Une approche plus simple, produisant le même effet que la précédente :

```python
first_char = s and s[0]
```

Si la première valeur est vraie, la seconde valeur est renvoyée ; sinon, c'est la première valeur qui est renvoyée.

De même, si `x` peut être un nombre ou `None`, cette méthode permet d'obtenir un `x` qui sera assurément un nombre :

```python
safe_x = x or 0
```

Python dispose également d'une fonction `all` qui renvoie `True` si tous les éléments sont `True`. La fonction `any` renvoie `True` si au moins un élément est `True`. Par exemple, pour une liste dont chaque élément est "vrai", la fonction `all` renverra `True`, sinon elle renverra `False` :

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {} est équivalent à "False"
any([True, 1, {}])          # True
all([])                     # True, car il n'y a pas d'élément équivalent à "False"
any([])                     # False, car il n'y a pas d'élément équivalent à "True"
```

**Pour aller plus loin :**
[Syntaxe Python courante en science des données (avancé)](https://philoli.com/python-tutorails-advanced-level/)
