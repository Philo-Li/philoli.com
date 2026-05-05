---
title: 数据科学中 Python 的常用语法(进阶)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 
这两天在看这本 [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF地址](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) )，是本不错的通俗易懂的数据科学入门书籍。其中一个章节介绍了一下 Python 的基础语法和数据科学常用的进阶语法，觉得介绍得不错，很简洁明了，所以将其翻译一下放在这里以作备忘。  
[数据科学中常用的 Python 语法(基础)](https://philoli.com/python-tutorails-basic-level/)  
[数据科学中常用的 Python 语法(进阶)](https://philoli.com/python-tutorails-advanced-level/)  

本章侧重于介绍在数据处理中非常有用的 Python 进阶语法和功能（基于 Python 2.7 ）。

<!--more-->

### 排序 Sorting

如果你想对 Python 的列表进行排序，可以使用列表的 `sort` 方法。如果你不想破坏原列表，可以使用 `sorted` 函数返回一个新的排好序的列表:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x 不变
x.sort()            # 当前 x = [1,2,3,4]
sort 或 sorted 是默认从小到大对列表进行排序的。
```

如果想让它从大到小排序，可以指定一个 `reverse = True` 的参数。

也可以自定义排序函数，让列表按照指定关键字进行排序:

```python
# 按照绝对值从大到小排序
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# 按照单词出现的次数从大到小进行排序
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### 列表解析 List Comprehensions

我们会经常遇到这样的情况，想要提取列表中特定几个元素组成新的列表，或是改变其中几个元素的值，或者皆有。Python 中的惯用做法就是 列表解析（List Comprehensions） :

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

类似地你可以将列表变成字典或集合:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

如果你不需要使用到列表中的元素，那么可以将下划线当作变量:

```python
zeroes = [0 for _ in even_numbers] # 与列表 even_numbers 有相同的长度
```

列表解析支持多重 `for` 循环:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 共100对： (0,0) (0,1) ... (9,8), (9,9)
```

后面的 `for` 循环可以使用前面 f`or 循环的结果:

```python
increasing_pairs = [(x, y)                      # 只包含 x < y 的数据对
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
未来我们将会经常用到列表解析。

### 生成器和迭代器 Generators and Iterators

列表有一个问题就是一不小心就会变得非常庞大，比如 `range(1000000)` 将会生成一个具有一百万个元素的列表。如果一次只处理一个数据，耗时可能会过长（或内存耗尽）。而实际上你可能只用到前几个数据，这样其他运算就是多余的。

而生成器可以让你只迭代那些需要用到的数据。可以使用函数和 `yield` 表达式来创建一个生成器:

```python
def lazy_range(n):
    """a lazy version of range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

译者补充：
生成器也是一种特殊迭代器，`yield` 是生成器实现迭代的关键。它作为生成器执行的暂停恢复点，可以对 `yield` 表达式进行赋值，也可以将 `yield` 表达式的值返回。任何包含 `yield` 语句的函数被称为生成器。跳出生成器时，生成器将当前执行状态保存，并在下次执行时恢复现场，以获得下一个迭代值。采用列表迭代将会占用大量地址空间，而使用生成器差不多只占用一个地址空间，从而达到节约内存的效果。

下面这个循环将一次消耗一个 `yield` 中的值直到消耗完毕:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(事实上 Python 自带了一个实现如上 `_lazy_range_` 效果的函数，称为 `xrange`, Python 3 中称为 `lazy`.) 这意味着你可以创建一个无穷数列:

```python
def natural_numbers():
    """返回 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

不过并不建议使用这种没有退出循环逻辑的语句。

**TIP**
> 使用生成器迭代的一个缺点就是，从头到尾对元素只能迭代一次，如果想实现多次迭代，你只能每次都创建新的生成器或者使用列表。

第二种创建生成器的方法：利用括号内的解析表达式:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

我们知道字典中的 items() 方法将返回一列表的字典中全部的键值对，但更多情况下，我们使用 iteritems() 生成器方法来进行迭代，每次只产生并返回一个键值对。

### 随机 Randomness
在学习数据科学的时候，我们将会经常需要生成随机数，所以只要导入 random 模块就能使用:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() 生成随机数
# 0.7579544029403025,         # 随机数被标准化处理，范围介于 0 和 1 之间
# 0.420571580830845,          # 该函数是最常用的用于生成随机数的函数
# 0.25891675029296335]
```

如果你想获得可重现的结果，可以让 `random` 模块基于 `random.seed` 设置的内部状态生成伪随机（即确定性）数字:

```python
random.seed(10)           # set the seed to 10
print random.random()     # 0.57140259469
random.seed(10)           # reset the seed to 10
print random.random()     # 0.57140259469 again
```

有时候我们也会使用 `random.randrange` 函数来生成一个指定范围内的随机数:

```python
random.randrange(10)      # 从 range(10) = [0, 1, ..., 9] 中随机选择一个数
random.randrange(3, 6)    # 从 range(3, 6) = [3, 4, 5] 随机选择一个数
```

还有一些方法有时候用起来很方便，比如 random.shuffle 将打乱一个列表中的元素次序，重新生成一个随机排列的列表:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (你得到的结果应该不同)
```

如果想从一个列表中随机选择一个元素，可以使用 random.choice 方法:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # 我得到的是 "Bob"
```

如果既想要生成一个随机序列，又不想打乱原列表，可以使用 `random.sample` 方法:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

你可以通过多次调用实现多个随机样本的选择（允许重复）:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### 正则表达式 Regular Expressions

正则表达式用于文本搜索，略显复杂但非常有用，因而有大量的书专门讲解正则表达式。我们遇到它们的时候再进行具体的解释，下面是一些在 Python 中使用正则表达式的例子:

```python
import re
print all([                                 # 下面的表述全部返回 true, 因为
    not re.match("a", "cat"),               # * 'cat' 不以 'a' 开头
    re.search("a", "cat"),                  # * 'cat' 中包含了字母 'a'
    not re.search("c", "dog"),              # * 'dog' 中不包含字母 'c'
    3 == len(re.split("[ab]", "carbs")),    # * 根据 a 或 b 将单词拆分成三部分 ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * 用短横替换数字
    ])                                      # 输出 True
```

### 面向对象编程 Object-Oriented Programming

与许多语言一样，Python 允许你定义封装数据的类和对其进行操作的函数。我们有时会使用它们来使我们的代码更清晰简洁。通过构建一个带有大量注释的示例来解释它们可能是最简单的。假设没有内置的 Python 集合，我们可能想要创建自己的 `Set` 类。那么这个类应当具备哪些功能呢？比如给定一个 `Set` ，我们需要能够向其中添加项目，从中删除项目，并检查它是否包含特定值。所以，我们将创建所有这些功能将其作为该类的成员函数。这样，我们就可以在 `Set` 对象之后用点访问这些成员函数:

```python
# 按照惯例，我们给出 _PascalCase_ 类的名称
class Set:
    # 这些是成员函数
    # 每个成员函数都有一个置于首位的"self"参数(另一个惯例)
    # “self”对应于正在使用的特定的 Set 对象

    def __init__(self, values=None):
        """这是创建函数
        每当你创建一个新的 Set 就会调用该函数
        可以像这样调用
        s1 = Set() # 空集合
        s2 = Set([1,2,2,3]) # 根据指定值初始化集合"""
        self.dict = {} # Set 中的每个实例都有自己的 dict 属性
        # 我们使用该属性追踪每个成员
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """这是 Set 对象中的字符串表达式
        你可以通过向 Python 命令窗口键入字符串或者利用 str() 方法向对象传递字符串"""
        return "Set: " + str(self.dict.keys())

    # 我们将通过成为 self.dict 中的键，并将键值设为 True 来表示成员资格
    def add(self, value):
        self.dict[value] = True

    # 如果参数为字典中的键，对应的值就在 Set 中
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

然后我们就可以像这样使用 `Set`:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### 函数工具 Functional Tools

#### 部分函数 partial

当传递函数时，有时我们会想要使用某函数的部分功能以创建新函数。举个简单的例子，假设我们有两个变量的函数:

```python
def exp(base, power):
    return base ** power
```

我们想要利用它来创建一个函数，该函数输入一个变量，输出底数为 2 的幂函数 `exp(2, power)` 的结果。

当然，我们可以用 `def` 定义一个新的函数，虽然这看起来不太明智:

```python
def two_to_the(power):
  return exp(2, power)
```

更聪明的做法是利用 `functools.partial` 方法:

```python
from functools import partial
two_to_the = partial(exp, 2)      # 当前函数只有一个变量
print two_to_the(3)               # 8
```

如果指定了名称，也可以使用 `partial` 方法填充其他的参数:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

如果你尝试在函数中间乱用参数，那么程序将很快就会变得混乱，所以请尽量避免这种行为。

#### 映射 map

我们偶尔也会使用 `map`，`reduce`，和 `filter` 等函数来作为列表解析的功能替代:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # 同上
list_doubler = partial(map, double)     # 函数功能是将列表加倍
twice_xs = list_doubler(xs)             # 也是 [2, 4, 6, 8]
```

`map` 方法还可以用于多参数函数到多列表的映射:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### 过滤器 filter

类似地，过滤器实现的是列表解析中 `if` 的功能:

```python
def is_even(x):
    """若 x 为偶数则返回 True，x 为奇数则返回 False"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # 同上
list_evener = partial(filter, is_even)    # 该函数实现过滤功能
x_evens = list_evener(xs)                 # 也是 [2, 4]
```

#### 缩减 reduce

`reduce` 方法不断合并列表中的第一个和第二个元素，然后将结果与第三个元素合并，并一直重复这个过程，直到得到一个唯一的结果:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # 该函数实现缩减一个列表
x_product = list_product(xs)              # 也是 24
```

### 枚举 enumerate

偶尔会出现这样的情况，在遍历一个列表的时候同时要使用元素和其索引:

```python
# 不太 Python（不太简洁优美）
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# 同样不太 Python（不太简洁优美）
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

最简洁的做法是使用 `enumerate` 枚举方法生成一个元组 `tuples (index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

类似地，如果只想使用索引:

```python
for i in range(len(documents)): do_something(i)   # 不简洁
for i, _ in enumerate(documents): do_something(i) # 简洁
```

后面我们将会经常使用这个方法。

### 压缩和参数解压 zip and Argument Unpacking

#### 压缩 zip

我们经常会对两个或更多的列表进行压缩处理。压缩实际上就是将多列表转化为对应元组的单列表形式:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # 得到 [('a', 1), ('b', 2), ('c', 3)]
```

#### 参数解压 Argument Unpacking

如果多个列表长度不一致，那么压缩过程会在最短列表尾部停止。你也可以使用一个奇怪的 “unzip” 解压缩技巧对列表进行解压:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

其中星号用于执行参数解压缩，它使用 pairs 的元素作为 zip 的单个参数。下面的调用方式具有同等效果:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # 返回 [('a','b','c'), ('1','2','3')]
```

参数解压也可以和其他函数共同使用:

```python
def add(a, b): return a + b

add(1, 2)           # 返回 3
add([1, 2])         # 报错
add(*[1, 2])        # 返回 3
```

虽然不太实用，不过是个不错的让代码变得简洁的技巧。

### 不定长参数传递 args and kwargs

假设我们要创建一个高阶函数，该函数输入一个旧函数，并返回一个新的函数，新函数是旧函数乘以 2 :

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

运行例子:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

然而只要传递的参数大于一个，该方法就不太好用了:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # 报错 TypeError: g() takes exactly 1 argument (2 given)
```

所以我们需要指定一个函数，使得它能够容纳任意数量的参数，然后利用参数解压缩实现传递多个参数，这看起来有那么一点神奇:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# 输出结果：
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

当我们像这样定义一个函数时，`args` (arguments 的缩写)是一个包含未命名参数的元组，而 `kwargs` (keyword arguments 的缩写)是包含命名参数的字典。

它们也可以用在传递的参数为列表（或元组）或数组的情况：
n:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

你可以用它配合各种奇怪的方法使用，但我们只用它来解决高阶函数传递不定长参数的问题:

```python
def doubler_correct(f):
    """不论 f 是什么都能有效运行"""
    def g(*args, **kwargs):
        """不论有多少参数，该函数都能正确将参数传递给 f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### 欢迎来到数据科学的世界！

叮！恭喜你又打开了新世界的大门！接下来就可以去愉快地玩耍啦~

**相关阅读:**

[数据科学中常用的 Python 语法(基础)](https://philoli.com/python-tutorails-basic-level)