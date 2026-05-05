---
title: Sintaxe Comum de Python em Ciência de Dados (Avançado)
date: 2018-11-07 23:53:13
tags: Python
categories: Ciência de dados
mathjax: true
---
Nos últimos dias, estive lendo [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), um excelente livro introdutório e acessível sobre ciência de dados. Um dos capítulos aborda a sintaxe básica de Python e a sintaxe avançada frequentemente usada em ciência de dados, e achei a explicação muito boa, concisa e clara. Por isso, traduzi e compilei aqui para referência futura.
[Sintaxe Comum de Python em Ciência de Dados (Básico)](https://philoli.com/python-tutorails-basic-level/)
[Sintaxe Comum de Python em Ciência de Dados (Avançado)](https://philoli.com/python-tutorails-advanced-level/)

Este capítulo foca na sintaxe e funcionalidades avançadas de Python que são extremamente úteis no processamento de dados (baseado em Python 2.7).

<!--more-->

### Ordenação (Sorting)

Para ordenar uma lista em Python, você pode usar o método `sort` da própria lista. Se não quiser modificar a lista original, utilize a função `sorted`, que retorna uma nova lista ordenada:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x permanece inalterado
x.sort()            # agora x = [1,2,3,4]
# sort ou sorted ordenam a lista do menor para o maior por padrão.
```

Se desejar ordenar do maior para o menor, você pode especificar o parâmetro `reverse = True`.

Também é possível definir funções de ordenação personalizadas para ordenar a lista com base em uma chave específica:

```python
# Ordenar por valor absoluto, do maior para o menor
x = sorted([-4,1,-2,3], key=abs, reverse=True) # é [-4,3,-2,1]
# Ordenar pelo número de ocorrências de palavras, do maior para o menor
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Compreensões de Lista (List Comprehensions)

Frequentemente, nos deparamos com situações em que queremos extrair elementos específicos de uma lista para formar uma nova, ou modificar os valores de alguns elementos, ou ambos. A abordagem idiomática em Python para isso são as Compreensões de Lista (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

De forma similar, você pode transformar listas em dicionários ou conjuntos:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Se você não precisar usar os elementos da lista, pode usar um sublinhado como variável:

```python
zeroes = [0 for _ in even_numbers] # Tem o mesmo comprimento da lista even_numbers
```

As compreensões de lista suportam múltiplos loops `for`:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Um total de 100 pares: (0,0) (0,1) ... (9,8), (9,9)
```

Os loops `for` subsequentes podem usar os resultados dos loops `for` anteriores:

```python
increasing_pairs = [(x, y)                      # Contém apenas pares onde x < y
                    for x in range(10)          # range(lo, hi) é igual a
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Usaremos compreensões de lista com frequência no futuro.

### Geradores e Iteradores (Generators and Iterators)

Um problema com as listas é que elas podem se tornar enormes sem que você perceba. Por exemplo, `range(1000000)` criará uma lista com um milhão de elementos. Se você processar apenas um dado por vez, pode levar muito tempo (ou esgotar a memória). Na prática, você pode precisar apenas dos primeiros dados, tornando as outras operações redundantes.

Os geradores permitem que você itere apenas sobre os dados de que precisa. Você pode criar um gerador usando uma função e a expressão `yield`:

```python
def lazy_range(n):
    """Uma versão "preguiçosa" de range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Adendo do Tradutor:
Um gerador também é um tipo especial de iterador; `yield` é a chave para a iteração do gerador. Ele atua como um ponto de pausa e retomada da execução do gerador. A expressão `yield` pode receber atribuições e também retornar valores. Qualquer função que contenha uma instrução `yield` é chamada de gerador. Ao sair de um gerador, ele salva seu estado de execução atual e o restaura na próxima vez que é executado para obter o próximo valor iterado. Usar a iteração de lista consumiria uma grande quantidade de espaço de endereço, enquanto o uso de um gerador ocupa aproximadamente apenas um espaço de endereço, economizando memória.

O loop abaixo consumirá um valor de `yield` por vez até que todos sejam consumidos:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Na verdade, Python já vem com uma função que implementa o efeito de `_lazy_range_` acima, chamada `xrange`, e em Python 3, é `range`.) Isso significa que você pode criar uma sequência infinita:

```python
def natural_numbers():
    """Retorna 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

No entanto, não é aconselhável usar este tipo de instrução sem uma lógica de saída do loop.

**DICA**
> Uma desvantagem de usar geradores para iteração é que você só pode iterar pelos elementos uma vez, do início ao fim. Se você quiser iterar várias vezes, terá que criar novos geradores a cada vez ou usar listas.

O segundo método para criar geradores é usando uma expressão de compreensão dentro de parênteses:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Sabemos que o método `items()` de um dicionário retorna uma lista de todos os pares chave-valor do dicionário, mas na maioria dos casos, usamos o método gerador `iteritems()` para iterar, produzindo e retornando um par chave-valor por vez.

### Aleatoriedade (Randomness)
Ao estudar ciência de dados, frequentemente precisaremos gerar números aleatórios. Basta importar o módulo `random` para usá-lo:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() gera um número aleatório
# 0.7579544029403025,         # O número aleatório é padronizado, entre 0 e 1
# 0.420571580830845,          # Esta função é a mais comum para gerar números aleatórios
# 0.25891675029296335]
```

Se você deseja resultados reproduzíveis, pode fazer com que o módulo `random` gere números pseudoaleatórios (ou seja, determinísticos) com base em um estado interno definido por `random.seed`:

```python
random.seed(10)           # define a semente para 10
print random.random()     # 0.57140259469
random.seed(10)           # redefine a semente para 10
print random.random()     # 0.57140259469 novamente
```

Às vezes, também usamos a função `random.randrange` para gerar um número aleatório dentro de um intervalo especificado:

```python
random.randrange(10)      # Escolhe um número aleatório de range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Escolhe um número aleatório de range(3, 6) = [3, 4, 5]
```

Existem outros métodos que são convenientes, como `random.shuffle`, que embaralha a ordem dos elementos em uma lista, gerando uma nova lista com uma permutação aleatória:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (seu resultado deve ser diferente)
```

Para selecionar um elemento aleatório de uma lista, você pode usar o método `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Recebi "Bob"
```

Se você quiser gerar uma sequência aleatória sem embaralhar a lista original, use o método `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Você pode obter várias amostras aleatórias (com repetição permitida) chamando o método várias vezes:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Expressões Regulares (Regular Expressions)

As expressões regulares são usadas para busca de texto, são um pouco complexas, mas extremamente úteis, e há muitos livros dedicados a elas. Vamos explicá-las em detalhes quando as encontrarmos. Abaixo estão alguns exemplos de como usar expressões regulares em Python:

```python
import re
print all([                                 # Todas as afirmações abaixo retornam true, porque
    not re.match("a", "cat"),               # * 'cat' não começa com 'a'
    re.search("a", "cat"),                  # * 'cat' contém a letra 'a'
    not re.search("c", "dog"),              # * 'dog' não contém a letra 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Divide a palavra em três partes ['c','r','s'] com base em a ou b
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Substitui números por hífens
    ])                                      # Saída: True
```

### Programação Orientada a Objetos (Object-Oriented Programming)

Assim como muitas outras linguagens, Python permite definir classes que encapsulam dados e funções que operam sobre esses dados. Às vezes, as usaremos para tornar nosso código mais claro e conciso. A maneira mais fácil de explicá-las é construindo um exemplo com muitos comentários. Supondo que não houvesse o tipo de conjunto (set) embutido no Python, poderíamos querer criar nossa própria classe `Set`. Quais funcionalidades essa classe deveria ter? Por exemplo, dado um `Set`, precisamos ser capazes de adicionar itens, remover itens e verificar se ele contém um valor específico. Então, criaremos todas essas funcionalidades como funções membro da classe. Assim, podemos acessar essas funções membro usando um ponto após o objeto `Set`:

```python
# Por convenção, damos nomes de classes em _PascalCase_
class Set:
    # Estas são funções membro
    # Cada função membro tem um parâmetro "self" em primeiro lugar (outra convenção)
    # "self" corresponde ao objeto Set específico que está sendo usado

    def __init__(self, values=None):
        """Esta é a função construtora
        Ela é chamada toda vez que você cria um novo Set
        Pode ser chamada assim:
        s1 = Set() # Conjunto vazio
        s2 = Set([1,2,2,3]) # Inicializa o conjunto com os valores especificados"""
        self.dict = {} # Cada instância de Set tem seu próprio atributo dict
        # Usamos este atributo para rastrear cada membro
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Esta é a representação em string de um objeto Set
        Você pode obtê-la digitando o objeto no console do Python ou usando str()"""
        return "Set: " + str(self.dict.keys())

    # Indicaremos a associação tornando o valor uma chave em self.dict e definindo seu valor como True
    def add(self, value):
        self.dict[value] = True

    # Se o argumento for uma chave no dicionário, o valor está no Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Então, podemos usar o `Set` assim:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Ferramentas Funcionais (Functional Tools)

#### Funções Parciais (partial)

Ao passar funções, às vezes queremos usar apenas uma parte da funcionalidade de uma função para criar uma nova. Por exemplo, suponha que tenhamos uma função com duas variáveis:

```python
def exp(base, power):
    return base ** power
```

Queremos usá-la para criar uma função que recebe uma variável e retorna o resultado da função de potência `exp(2, power)` com base 2.

Claro, poderíamos definir uma nova função com `def`, embora isso não pareça muito inteligente:

```python
def two_to_the(power):
  return exp(2, power)
```

Uma abordagem mais inteligente é usar o método `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Esta função agora tem apenas uma variável
print two_to_the(3)               # 8
```

Se você especificar nomes, também pode usar o método `partial` para preencher outros parâmetros:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Se você tentar usar parâmetros de forma desorganizada no meio da função, o programa rapidamente se tornará confuso, então tente evitar esse comportamento.

#### Mapeamento (map)

Ocasionalmente, também usaremos funções como `map`, `reduce` e `filter` como alternativas às compreensões de lista:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # O mesmo que acima
list_doubler = partial(map, double)     # A função dobra a lista
twice_xs = list_doubler(xs)             # Também [2, 4, 6, 8]
```

O método `map` também pode ser usado para mapear funções com múltiplos argumentos para múltiplas listas:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtragem (filter)

Similarmente, `filter` implementa a funcionalidade `if` nas compreensões de lista:

```python
def is_even(x):
    """Retorna True se x for par, False se x for ímpar"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # O mesmo que acima
list_evener = partial(filter, is_even)    # Esta função implementa a filtragem
x_evens = list_evener(xs)                 # Também [2, 4]
```

#### Redução (reduce)

O método `reduce` combina continuamente o primeiro e o segundo elementos de uma lista, depois combina o resultado com o terceiro elemento, e repete esse processo até obter um único resultado:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Esta função implementa a redução de uma lista
x_product = list_product(xs)              # Também 24
```

### Enumerar (enumerate)

Ocasionalmente, surge a necessidade de iterar por uma lista e, ao mesmo tempo, usar o elemento e seu índice:

```python
# Não muito Pythonic (não muito conciso e elegante)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Também não muito Pythonic (não muito conciso e elegante)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

A maneira mais concisa é usar o método `enumerate` para gerar tuplas `(index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Similarmente, se você quiser usar apenas o índice:

```python
for i in range(len(documents)): do_something(i)   # Não conciso
for i, _ in enumerate(documents): do_something(i) # Conciso
```

Usaremos este método com frequência mais adiante.

### Zip e Desempacotamento de Argumentos (zip and Argument Unpacking)

#### Zip

Frequentemente, "zipamos" duas ou mais listas. "Zippar" é, na verdade, converter múltiplas listas em uma única lista de tuplas correspondentes:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Resulta em [('a', 1), ('b', 2), ('c', 3)]
```

#### Desempacotamento de Argumentos (Argument Unpacking)

Se as listas tiverem comprimentos diferentes, o processo de "zip" para no final da lista mais curta. Você também pode usar um truque estranho de "deszipar" para desempacotar listas:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

O asterisco é usado para realizar o desempacotamento de argumentos, usando os elementos de `pairs` como argumentos individuais para `zip`. A seguinte chamada tem o mesmo efeito:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Retorna [('a','b','c'), ('1','2','3')]
```

O desempacotamento de argumentos também pode ser usado em conjunto com outras funções:

```python
def add(a, b): return a + b

add(1, 2)           # Retorna 3
add([1, 2])         # Erro
add(*[1, 2])        # Retorna 3
```

Embora não seja muito prático, é uma boa técnica para tornar o código mais conciso.

### Passagem de Argumentos de Comprimento Variável (args and kwargs)

Suponha que queremos criar uma função de ordem superior que recebe uma função antiga e retorna uma nova função que é a antiga função multiplicada por 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Exemplo de execução:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

No entanto, este método não funciona bem se o número de parâmetros for maior que um:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Erro TypeError: g() takes exactly 1 argument (2 given)
```

Então, precisamos especificar uma função que possa acomodar um número arbitrário de argumentos e, em seguida, usar o desempacotamento de argumentos para passar múltiplos parâmetros, o que parece um pouco mágico:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Saída:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Quando definimos uma função dessa maneira, `args` (abreviação de arguments) é uma tupla contendo os argumentos sem nome, e `kwargs` (abreviação de keyword arguments) é um dicionário contendo os argumentos nomeados.

Eles também podem ser usados quando os argumentos passados são listas (ou tuplas) ou arrays:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Você pode usá-lo com vários métodos estranhos, mas nós o usaremos apenas para resolver o problema de passar um número variável de argumentos para funções de ordem superior:

```python
def doubler_correct(f):
    """Funciona efetivamente independentemente do que f seja"""
    def g(*args, **kwargs):
        """Passa corretamente os argumentos para f, não importa quantos sejam"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Bem-vindo ao Mundo da Ciência de Dados!

Ding! Parabéns, você acaba de abrir as portas para um novo mundo! Agora você pode se divertir explorando!

**Leitura Relacionada:**

[Sintaxe Comum de Python em Ciência de Dados (Básico)](https://philoli.com/python-tutorails-basic-level)
