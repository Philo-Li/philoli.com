---
title: Sintaxe Comum de Python em Ciência de Dados (Básico)
date: 2018-11-07 20:53:13
tags: Python
categories: Ciência de Dados
mathjax: true
--- 

Nos últimos dias, estive lendo [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([endereço do PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), um excelente livro introdutório e acessível sobre ciência de dados. Um dos capítulos aborda a sintaxe básica de Python e a sintaxe avançada comumente usada em ciência de dados. Achei a explicação muito boa, concisa e clara, então decidi traduzi-la e deixá-la aqui como referência.  
[Sintaxe Comum de Python em Ciência de Dados (Básico)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Sintaxe Comum de Python em Ciência de Dados (Avançado)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Este capítulo foca na apresentação da sintaxe e funcionalidades básicas de Python que são extremamente úteis no processamento de dados (baseado em Python 2.7).

<!--more-->

### Espaçamento

Muitas linguagens utilizam chaves para controlar blocos de código, mas Python usa indentação:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # A primeira linha do loop "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # A primeira linha do loop "for j"  
        print i + j  # A última linha do loop "for j"  
    print i          # A última linha do loop "for i"  
print "done looping"  
```

Isso torna o código Python muito fácil de ler, mas também significa que você deve estar sempre atento à formatação. Os espaços dentro dos parênteses serão ignorados, o que é útil ao escrever expressões longas:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Também torna o código mais legível:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Declarações de Múltiplas Linhas

É possível usar uma barra invertida para indicar a continuação de uma linha em duas (uma prática pouco comum):  

```python
two_plus_three = 2 + \
                 3  
```

### Módulos

Módulos, sejam eles nativos do Python ou de terceiros que você baixou, precisam ser importados manualmente para serem utilizados.

1. Para importar o módulo inteiro de forma simples e direta:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Aqui, o módulo `re` é importado para uso com expressões regulares. Após a importação, você pode chamar suas funcionalidades diretamente, prefixando-as com o nome do módulo (`re.`).

2. Se o nome do módulo a ser importado já estiver em uso no seu código, você pode mapeá-lo para outro nome durante a importação:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Se você for "mau", pode importar o módulo inteiro para o namespace atual. Isso pode, sem querer, sobrescrever variáveis que você já definiu:

```python
match = 10  
from re import *  # O módulo re tem uma função match  
print match       # Exibe a função match  
```

Mas como você é uma boa pessoa, tenho certeza de que não fará isso.

### Operações Aritméticas

O Python 2.7, por padrão, utiliza a divisão inteira, de modo que $ 5 / 2 = 2 $. No entanto, muitas vezes não desejamos esse comportamento, e podemos importar o seguinte módulo para alterá-lo:

```python
from __future__ import division  
```

Após a importação, teremos $5 / 2 = 2.5$.  
Divisão inteira: $5 // 2 = 2$.

### Funções

#### Definição de Funções


Uma função é uma regra que pode receber zero ou mais entradas e retornar uma saída. Em Python, definimos uma função usando `def nome_da_função(parâmetros)`:

```python
def double(x):  
    """Você pode escrever aqui algumas explicações sobre a funcionalidade da função,  
    por exemplo, que ela multiplica a entrada por 2."""  
    # O corpo da função vai aqui, lembre-se da indentação  
    return x * 2  
```
#### Uso de Funções


Em Python, as funções são 'cidadãs de primeira classe', o que significa que podemos atribuir uma função a uma variável ou passá-la como argumento para outras funções:

```python
def apply_to_one(f):  
    """Chama a função f e passa 1 como argumento."""  
    return f(1)  
my_double = double          # double aponta para a função definida na seção anterior  
x = apply_to_one(my_double) # x é igual a 2  
```
#### Funções Anônimas


Também é possível criar funções anônimas usando `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # É igual a 5  
```

Embora você possa atribuir uma função `lambda` a uma variável, a maioria das pessoas recomenda que você prefira usar `def`:

```python
another_double = lambda x: 2 * x      # Não recomendado  
def another_double(x): return 2 * x   # Prática recomendada  
```

Observação:

* Uma `lambda` é apenas uma expressão, e seu corpo é muito mais simples que o de uma função `def`.
* O corpo de uma `lambda` é uma expressão, não um bloco de código. Isso significa que apenas uma lógica limitada pode ser encapsulada em uma expressão `lambda`.

#### Passagem de Argumentos em Funções

Parâmetros de função podem ter valores padrão. Se nenhum argumento for fornecido ao chamar a função, o valor padrão será usado; caso contrário, o valor especificado será passado:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Exibe "hello"  
my_print()            # Exibe "my default message"  
```

Às vezes, é muito útil especificar os argumentos diretamente pelos seus nomes:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Retorna 5  
subtract(0, 5)    # Retorna -5  
subtract(b=5)     # O mesmo que o anterior, retorna -5  
```
### Strings

Você pode criar strings usando aspas simples ou duplas (as aspas devem sempre vir em pares):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Use a barra invertida para caracteres de escape, como:

```python
tab_string = "\t"      # Representa o caractere de tabulação (tab)  
len(tab_string)        # É igual a 1  
```

Quando você deseja usar a própria barra invertida (para diretórios do Windows ou expressões regulares), pode defini-la usando strings brutas (`r""`):

```python
not_tab_string = r"\t" # Representa os caracteres '\' e 't'  
len(not_tab_string)    # É igual a 2  
```

Use três aspas duplas para criar strings de múltiplas linhas:

```python
multi_line_string = """Esta é a primeira linha  
Esta é a segunda linha  
Esta é a terceira linha"""  
```

### Tratamento de Exceções

Quando um programa encontra um erro, Python levanta uma `exceção`. Se não a tratarmos, o programa será interrompido. Para capturar exceções, podemos usar as instruções `try` e `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Não é possível dividir por zero"  
```

Embora em outras linguagens exceções possam ser vistas como algo ruim, em Python, o tratamento adequado de exceções pode tornar seu código mais conciso e limpo.

### Listas

#### Criando Listas

Listas são coleções simples e ordenadas, e também a estrutura de dados mais básica em Python (semelhante a arrays em outras linguagens, mas com algumas características adicionais). Para criar uma lista:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # É igual a 3  
list_sum = sum(integer_list)      # É igual a 6  
```
#### Acessando Valores em Listas


Você pode indexar valores em uma lista usando colchetes:

```python
x = range(10)       # A lista x = [0, 1, ..., 9]  
zero = x[0]         # É igual a 0, índices da lista começam em 0  
one = x[1]          # É igual a 1  
nine = x[-1]        # É igual a 9, o último elemento da lista  
eight = x[-2]       # É igual a 8, o penúltimo elemento da lista  
x[0] = -1           # A lista atual x = [-1, 1, 2, 3, ..., 9]  
```

#### Fatiando Listas


É possível fatiar uma lista usando colchetes:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Use `in` para verificar se um elemento está na lista:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Esse método de busca por elementos é ineficiente. Use-o apenas se a lista for muito pequena ou se o tempo de busca não for uma preocupação.

#### Concatenando Listas

Em Python, é muito fácil concatenar duas listas:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # x atual é [1,2,3,4,5,6]  
```

Se você não quiser modificar a lista original `x`, pode usar o operador de adição para criar uma nova lista:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # y atual é [1, 2, 3, 4, 5, 6]; x não mudou  
```

É comum adicionar um elemento por vez a uma lista desta forma:

```python
x = [1, 2, 3]  
x.append(0)           # x atual é [1, 2, 3, 0]  
y = x[-1]             # É igual a 0  
z = len(x)            # É igual a 4  
```

#### Desempacotando Listas

Se você souber quantos elementos há em uma lista, é fácil desempacotá-la:

```python
x, y = [1, 2]         # x atual é 1, y é 2  
```

Se o número de elementos não corresponder em ambos os lados da atribuição, você receberá um _erro de valor_. Por isso, é mais comum usar o sublinhado para descartar o restante da lista:

```python
_, y = [1, 2]         # y == 2, o primeiro elemento é ignorado  
```

### Tuplas

Listas e tuplas são muito parecidas. A única diferença é que os elementos de uma tupla não podem ser modificados.

#### Criando Tuplas

Você pode criar tuplas usando parênteses ou sem nenhum parêntese:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # my_list atual é [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Não é possível modificar uma tupla"  
```

As tuplas são muito convenientes para retornar múltiplos valores de uma função:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # É igual a (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tuplas (e listas) suportam a atribuição simultânea de múltiplos elementos:

```python
x, y = 1, 2       # x atual é 1, y é 2  
x, y = y, x       # Troca os valores de duas variáveis em Python; x atual é 2, y é 1  
```

### Dicionários

#### Criando Dicionários

Outra estrutura de dados fundamental em Python é o dicionário, que permite obter rapidamente um valor correspondente a partir de uma chave:

```python
empty_dict = {}                       # Definição de dicionário vazio muito "pythônica"  
empty_dict2 = dict()                  # Definição de dicionário vazio menos "pythônica"  
grades = { "Joel" : 80, "Tim" : 95 }  # Armazenamento de dicionário  
```

#### Buscando Elementos em Dicionários

Você pode usar colchetes com a chave para encontrar o valor correspondente:

```python
joels_grade = grades["Joel"]          # É igual a 80  
```

Se a chave que você está procurando não estiver no dicionário, será retornado um `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "não há nota para Kate!"  
```

Você pode usar `in` para verificar se uma chave existe no dicionário:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Dicionários têm um método que pode retornar um valor padrão, caso a chave procurada não esteja presente (em vez de levantar uma exceção):

```python
joels_grade = grades.get("Joel", 0)   # É igual a 80  
kates_grade = grades.get("Kate", 0)   # É igual a 0  
no_ones_grade = grades.get("No One")  # Retorna o valor padrão None  
```

#### Modificando Dicionários

Você pode usar colchetes para criar ou modificar pares chave-valor em um dicionário:

```python
grades["Tim"] = 99                    # Substitui o valor antigo  
grades["Kate"] = 100                  # Adiciona um par chave-valor  
num_students = len(grades)            # É igual a 3  
```

Frequentemente usaremos dicionários assim para representar estruturas de dados:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Além de buscar chaves específicas, também podemos operar em todas as chaves desta forma:

```python
tweet_keys = tweet.keys()             # Obtém uma lista de chaves  
tweet_values = tweet.values()         # Obtém uma lista de valores  
tweet_items = tweet.items()           # Obtém tuplas (chave, valor)  
"user" in tweet_keys                  # Retorna True, usando busca in de lista, que é menos eficiente  
"user" in tweet                       # Uso mais "pythônico", usa busca in de dicionário, que é eficiente  
"joelgrus" in tweet_values            # True  
```

As chaves em um dicionário são únicas, e listas não podem ser usadas como chaves de dicionário. Se você precisar de uma chave composta, pode usar uma tupla ou converter a chave em uma string de alguma forma.

#### Dicionários com Valor Padrão (defaultdict)

Se você está tentando contar a frequência de cada palavra em um documento, uma abordagem óbvia é criar um dicionário onde a palavra é a chave e a frequência é o valor correspondente. Em seguida, percorra o documento, incrementando o valor se a palavra já existir, ou adicionando um novo par chave-valor se a palavra for nova:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Claro, você também pode lidar com uma chave ausente de forma proativa, usando uma abordagem de 'tentar e capturar' (try-except) desta maneira:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

O terceiro método é usar `get`, que é excelente para lidar com chaves ausentes:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Um `defaultdict` funciona como um dicionário comum, com a única diferença de que, ao tentar acessar uma chave inexistente, ele criará automaticamente um par chave-valor usando a função padrão que você forneceu. Para usar um `defaultdict`, você precisa importar a biblioteca `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() gera 0  
for word in document:  
    word_counts[word] += 1  
```

Os `defaultdict` são muito úteis com listas, dicionários comuns e até mesmo com funções personalizadas:

```python
dd_list = defaultdict(list)           # list() gera uma lista vazia  
dd_list[2].append(1)                  # dd_list atual é {2: [1]}  
dd_dict = defaultdict(dict)           # dict() gera um dicionário vazio  
dd_dict["Joel"]["City"] = "Seattle"   # O conteúdo atual de dd_dict é { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Cria um dicionário onde o valor para uma chave é uma lista  
dd_pair[2][1] = 1                     # O conteúdo atual de dd_pair é {2: [0,1]}  
```

Este método é bastante útil, pois assim não precisamos mais verificar se uma chave existe ao buscar certos valores em um dicionário.

### Contador (Counter)

Um `Counter` pode converter diretamente um grupo de valores em um objeto semelhante a um dicionário, onde a chave é um elemento do grupo e o valor correspondente é o número de vezes que esse elemento aparece. Isso é frequentemente usado ao criar histogramas:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c é (aproximadamente) { 0 : 2, 1 : 1, 2 : 1 }  
```

Dessa forma, temos um método muito conveniente para contar a frequência de palavras:

```python
word_counts = Counter(document)  
```

O `Counter` também possui um método muito útil, `most_common`, que pode retornar diretamente as palavras mais frequentes e suas respectivas contagens:

```python
# Exibe as 10 palavras mais frequentes e suas contagens  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Conjuntos (Sets)

Outra estrutura de dados em Python é o conjunto (set), que é uma coleção de elementos distintos.  
Você pode criar um conjunto e adicionar elementos a ele desta forma:

```python
s = set()  
s.add(1)          # s é { 1 }  
s.add(2)          # s é { 1, 2 }  
s.add(2)          # s é { 1, 2 }  
x = len(s)        # É igual a 2  
y = 2 in s        # É igual a True  
z = 3 in s        # É igual a False  
```

Duas grandes razões para usar conjuntos:

Primeiro, a operação `in` em conjuntos é muito eficiente. Quando o número de elementos em um conjunto de dados é muito grande, procurar elementos na forma de um conjunto é claramente mais adequado do que em uma lista:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Falha, precisa verificar cada elemento  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Busca bem-sucedida e muito rápida  
```

Segundo, é muito conveniente usar conjuntos para obter os elementos distintos em um grupo de dados:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

No entanto, na prática, a frequência de uso de conjuntos ainda não é tão alta quanto a de dicionários e listas.

### Declarações Condicionais

Na maioria das linguagens de programação, você pode usar `if` para representar ramificações condicionais desta forma:

```python
if 1 > 2:  
    message = "se ao menos 1 fosse maior que dois…"  
elif 1 > 3:  
    message = "elif significa 'else if'"  
else:  
    message = "quando tudo mais falha, use else (se quiser)"  
```

Você também pode escrever a declaração condicional em uma única linha, mas isso é pouco comum:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Laços de Repetição

#### Laço _while_


O laço `while` em Python:

```python
x = 0  
while x < 10:  
    print x, "é menor que 10"  
    x += 1  
```

#### Laço _for_

Mais comumente, usamos o laço `for-in`:

```python
for x in range(10):  
    print x, "é menor que 10"  
```

Para expressões lógicas mais complexas, você pode usar as instruções `continue` e `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Pula para a próxima iteração do loop  
    if x == 5:  
        break             # Sai completamente do loop  
    print x  
```

O resultado será 0, 1, 2 e 4.

### Veracidade (Truthiness)

As variáveis booleanas em Python funcionam de forma semelhante a outras linguagens, com a única diferença de que a primeira letra deve ser maiúscula:

```python
one_is_less_than_two = 1 < 2      # É True  
true_equals_false = True == False # É False  
```

Python usa `None` para indicar que um valor não existe, semelhante a `null` em outras linguagens:

```python
x = None  
print x == None        # Exibe True, não é a forma mais elegante  
print x is None        # Exibe True, mais elegante  
```

Python permite que você substitua valores booleanos por outros valores. Os seguintes são equivalentes a `False`:

*   False
*   None
*   [] (uma lista vazia)
*   {} (um dicionário vazio)
*   “”
*   set()
*   0
*   0.0

Similarmente, existem muitos valores equivalentes a `True`, o que facilita muito a verificação de listas vazias, strings vazias, dicionários vazios, etc.

No entanto, se você não conseguir prever o resultado, pode cometer erros durante o uso:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Uma abordagem mais simples, com o mesmo efeito da anterior:

```python
first_char = s and s[0]  
```

Se o primeiro valor for verdadeiro, o segundo valor será retornado; caso contrário, o primeiro valor será retornado.

Da mesma forma, se `x` pode ser um número ou `None`, você pode garantir que `x` seja um número assim:

```python
safe_x = x or 0  
```

Python também possui a função `all`, que retorna `True` se todos os elementos forem verdadeiros. A função `any` retorna `True` se pelo menos um elemento for verdadeiro. Por exemplo, para uma lista onde cada elemento é 'verdadeiro', a função `all` retornará `True`, caso contrário, retornará `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} é equivalente a “False”  
any([True, 1, {}])          # True  
all([])                     # True, não existe um elemento equivalente a “False”  
any([])                     # False, não existe um elemento equivalente a “True”  
```

**Leitura Avançada:**  
[Sintaxe Comum de Python em Ciência de Dados (Avançado)](https://philoli.com/python-tutorails-advanced-level/)
