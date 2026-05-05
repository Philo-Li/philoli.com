---
title: 数据科学中 Python 的常用语法(基础)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

这两天在看这本 [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF地址](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) )，是本不错的通俗易懂的数据科学入门书籍。其中一个章节介绍了一下 Python 的基础语法和数据科学常用的进阶语法，觉得介绍得不错，很简洁明了，所以将其翻译一下放在这里以作备忘。  
[数据科学中常用的 Python 语法(基础)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[数据科学中常用的 Python 语法(进阶)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

本章侧重于介绍在数据处理中非常有用的 Python 基础语法和功能（基于 Python 2.7 ）。

<!--more-->

### [](#空格格式 "空格格式")空格格式

许多语言使用括号来控制代码块，但 Python 用的是缩进：  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # "for i"循环的第一行  
    for j in [1, 2, 3, 4, 5]:  
        print j      # "for j"循环的第一行  
        print i + j  # "for j"循环的最后一行  
    print i          # "for i"循环的最后一行  
print "done looping"  
```

这使得 Python 的代码非常易于阅读，但也意味着你要时刻注意格式。括号里的空格将会被忽略，这在写长表达式时很有用：

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

也使得代码变得好读：

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#多行语句 "多行语句")多行语句

可以用一个反斜杠来表示连接中断的两行（这种做法很少用）：  

```python
two_plus_three = 2 + \
                 3  
```

### [](#模块-Modules "模块 Modules")模块 Modules

不论是 Python 自带的模块还是自己下载的第三方的模块，都需要需要通过手动导入才能使用。

1.简单地直接导入整个模块：

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

这里导入的 `_re_` 模块是用于正则表达式的。导入模块后，可以直接将模块名字作为前缀（re.）来调用具体功能。

2.如果调入的模块名称已经在代码中被使用，可以将模块导入时映射到另一个名称中：

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3.如果你很坏，你就可以将整个模块都导入到当前命名空间，这可能在不经意间覆盖你已经定义好的变量：

```python
match = 10  
from re import *  # re 模块中有一个 match 函数  
print match       # 输出 match 函数  
```

因为你是个好人，所以我相信你不会这么做的。

### [](#四则运算-Arithmetic "四则运算 Arithmetic")四则运算 Arithmetic

Python 2.7 默认使用整除，所以 $ 5 / 2 = 2 $.但很多时候我们并不想要整除，所以可以导入这个模块：

```python
from __future__ import division  
```

导入后，就有 $5 / 2 = 2.5$.  
整除：$5 // 2 = 2$.

### [](#函数-Functions "函数 Functions")函数 Functions

#### [](#函数定义 "函数定义")函数定义


函数是能够接收 0 个或多个输入，并返回一定输出的一个规则。在 Python 中，我们用 `def 函数名(参数)` 定义一个函数:

```python
def double(x):  
    """你可以在这里写一些关于函数功能的解释  
    比如，该函数将输入内容乘2"""  
    # 这里可以写函数主体，记得缩进  
    return x * 2  
```
#### [](#函数使用 "函数使用")函数使用


在 Python 中，函数是最低等级的存在，这意味着我们可以将函数赋值给一个变量，也可以将它作为一个参数传递给其他变量：

```python
def apply_to_one(f):  
    """调用函数 f 并将 1 作为函数参数"""  
    return f(1)  
my_double = double          # double 指向上一节定义的函数  
x = apply_to_one(my_double) # x 等于 2  
```
#### [](#匿名函数 "匿名函数")匿名函数


还可以通过 `lambda` 来创建匿名函数：

```python
y = apply_to_one(lambda x: x + 4)     # 等于 5  
```

可以将 `lambda` 赋值给其他变量，但大多数人会建议你还是尽量使用 _def_ ：

```python
another_double = lambda x: 2 * x      # 不建议  
def another_double(x): return 2 * x   # 建议做法  
```

补充：

* `lambda` 只是一个表达式，函数体比 `def` 简单很多。
* `lambda` 的主体是一个表达式，而不是一个代码块。仅仅能在 `lambda` 表达式中封装有限的逻辑进去。

#### [](#函数参数传递 "函数参数传递")函数参数传递

函数参数可以定义默认值，函数表达式不加参数将使用默认值，加参数将传递指定值:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # 输出 "hello"  
my_print()            # 输出 "my default message"  
```

有时候直接通过参数名称来指定参数也很好用:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # 返回 5  
subtract(0, 5)    # 返回 -5  
subtract(b=5)     # 与上一个相同，返回 -5  
```
### [](#字符串-Strings "字符串 Strings")字符串 Strings

可以使用单引号或双引号来创建字符串（引号一定要配对）:

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

用反斜杠来表示转义字符，如:

```python
tab_string = "\t"      # 表示制表符 tab  
len(tab_string)        # 等于 1  
```

当你想要使用反斜杠本身 (用于 Windows 目录或者正则表达式), 可以通过使用原始字符串 `r""` 定义:

```python
not_tab_string = r"\t" # 表示字符 '\' 和 't'  
len(not_tab_string)    # 等于 2  
```

利用三个双引号创建多行字符串:

```python
multi_line_string = """这是第一行  
这是第二行  
这是第三行"""  
```

### [](#异常处理-Exception "异常处理 Exception")异常处理 Exception

当程序出错，Python 会发生一个 `异常(exception)`，我们不对其进行处理的话，程序将会终止执行。捕获异常可以用 `try` 和 `except` 语句：

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "不能除以0"  
```

尽管在其他语言中，异常被看作是不好的现象，但在 Python 中，多处理异常将会使你的代码更加简洁干净。

### [](#列表-Lists "列表 Lists")列表 Lists

#### [](#创建列表 "创建列表")创建列表

列表是简单的有序集合，也是 Python 中最基础的数据结构 (类似其他语言中的数组，但列表具有一些额外的特性)。创建一个列表：

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # 等于 3  
list_sum = sum(integer_list)      # 等于 6  
```
#### [](#访问列表中的值 "访问列表中的值")访问列表中的值


你可以通过方括号索引列表中的值:

```python
x = range(10)       # 列表获得列表 x = [0, 1, ..., 9]  
zero = x[0]         # 等于 0, 列表序号从 0 开始  
one = x[1]          # 等于 1  
nine = x[-1]        # 等于 9, 列表中最后一个元素  
eight = x[-2]       # 等于 8, 列表中倒数第二个元素  
x[0] = -1           # 当前列表 x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#截取列表 "截取列表")截取列表


可以用方括号截取列表:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

可以用 `in` 来查看某元素是否在列表中:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

这种元素查找方式效率很低，只有在列表很小或者你不在意查找时间的情况下再去使用。

#### [](#拼接列表 "拼接列表")拼接列表

Python 中很容易就能拼接两个列表:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # 当前 x = [1,2,3,4,5,6]  
```

如果你不想修改原列表 x ，你可以使用“加”运算符创建一个新的列表:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # 当前 y = [1, 2, 3, 4, 5, 6]; x 没有变化  
```

经常用这样的方式一次在列表中添加一个元素:

```python
x = [1, 2, 3]  
x.append(0)           # 当前 x = [1, 2, 3, 0]  
y = x[-1]             # 等于 0  
z = len(x)            # 等于 4  
```

#### [](#列表分解 "列表分解")列表分解

如果你知道列表中有多少个元素，那么很容易就能分解这个列表:

```python
x, y = [1, 2]         # 当前 x = 1, y = 2  
```

等式两边元素数目不一致的话，你将会得到一个 _值错误_，所以我们更经常用下划线来存放列表剩下的部分:

```python
_, y = [1, 2]         # 当前 y == 2, 不管第一个元素  
```

### [](#元组-Tuples "元组 Tuples")元组 Tuples

列表和元组很像，和列表唯一的区别就是，元组中的元素不能被修改。

#### [](#元组创建 "元组创建")元组创建

可以使用圆括号或者不加任何括号来创建元组:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # 当前 my_list 为 [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "无法修改元组"  
```

利用元组能够很方便地从函数中获取多个返回值:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # 等于 (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

元组（和列表）都支持同时赋值多个元素:

```python
x, y = 1, 2       # 当前 x = 1, y = 2  
x, y = y, x       # Python 中交换两个变量的值; 当前 x = 2, y = 1  
```

### [](#字典-Dictionaries "字典 Dictionaries")字典 Dictionaries

#### [](#字典创建 "字典创建")字典创建

Python 中的另一个基础数据结构是字典，它能让你通过关键字（key）快速获得对应的值（value）:

```python
empty_dict = {}                       # 非常 Python 化的空字典定义  
empty_dict2 = dict()                  # 没那么 Python 化的空字典定义  
grades = { "Joel" : 80, "Tim" : 95 }  # 字典存储  
```

#### [](#字典元素查找 "字典元素查找")字典元素查找

你可以用方括号加关键字来查找对应的值:

```python
joels_grade = grades["Joel"]          # 等于 80  
```

如果要查找的关键字不在字典中，将返回一个 `键错误(KeyError)` :

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "no grade for Kate!"  
```

可以通过 `in` 来查看关键字是否在字典中:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

字典有一个可以返回默认值的方法，当要查找的关键字不在字典中将会返回设定的默认值（而不是发生异常）:

```python
joels_grade = grades.get("Joel", 0)   # 等于 80  
kates_grade = grades.get("Kate", 0)   # 等于 0  
no_ones_grade = grades.get("No One")  # 返回默认值 None  
```

#### [](#字典修改 "字典修改")字典修改

可以用方括号来创建、修改字典中的键值对:

```python
grades["Tim"] = 99                    # 替换旧的值  
grades["Kate"] = 100                  # 增加一个键值对  
num_students = len(grades)            # 等于 3  
```

我们将会经常像这样使用字典来表达数据的结构:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

除了查找特定关键字，我们还可以像这样操作所有关键字:

```python
tweet_keys = tweet.keys()             # 得到一个关键字（键）列表  
tweet_values = tweet.values()         # 得到值列表  
tweet_items = tweet.items()           # 得到 (键, 值) 元组  
"user" in tweet_keys                  # 返回 True, 用的是列表效率较低中的 in 查找  
"user" in tweet                       # 更 Python 的用法, 用的是高效的字典中的 in 查找  
"joelgrus" in tweet_values            # True  
```

字典中的键是唯一的，而且列表不能用作字典的关键字（键）。如果你需要一个多部分的关键字，你可以使用元组，或者通过某种途径将关键字转换成字符串。

#### [](#内置字典 "内置字典")内置字典

如果你正试图统计一个文档中每个词出现的频率，一个显然的做法是创建一个字典，词作为关键字，频率作为对应的值。然后遍历文档，遇到出现过的词就让字典对应键值自增 1 ，遇到未出现过的词就在字典中添加一个键值对:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

当然，你也可以像这样用“先斩后奏”的方式来提前处理一个缺失的键:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

第三个方法是使用 `get` ，这个方法对于缺失键的处理表现优异:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

内置字典就跟普通字典一样，唯一的区别就是，当你试图在字典中查找一个不存在的键时，内置字典将利用你提供的关键字自动创建一个键值对。为了使用内置字典，你需要导入 `collections` 函数库:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() 生成 0  
for word in document:  
    word_counts[word] += 1  
```

在列表、普通字典甚至自定义的函数中，默认字典也都很好用:

```python
dd_list = defaultdict(list)           # list() 生成一个空列表  
dd_list[2].append(1)                  # 当前 dd_list 为 {2: [1]}  
dd_dict = defaultdict(dict)           # dict() 生成一个空字典  
dd_dict["Joel"]["City"] = "Seattle"   # 当前 dd_dict 内容为 { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # 创建了一个关键字对于的值为列表的字典  
dd_pair[2][1] = 1                     # 当前 dd_pair 内容为 {2: [0,1]}  
```

这种方法很有用，以后我们要获取字典中的某些键值结果时，就无需再检查键是否存在了。

### [](#计数器-Counter "计数器 Counter")计数器 Counter

计数器可以直接将一组值转换成类似字典的对象，关键字为这组中的某个元素，对应的值为该元素出现的次数。这在创建直方图的时候会经常用到:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (差不多)为 { 0 : 2, 1 : 1, 2 : 1 }  
```

这样我们就有了一个很方便的统计词频的方法:

```python
word_counts = Counter(document)  
```

计数器还有一个很常用的方法 `most_common`，可以直接得到最高频的几个词和对应的频率:

```python
# 输出前 10 个最高频的词以及他们的计数值  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#集合-Sets "集合 Sets")集合 Sets

Python 中另一种数据结构是集合，集合是一组不同元素的收集。  
可以这样创建一个集合并向其中添加元素:

```python
s = set()  
s.add(1)          # s 为 { 1 }  
s.add(2)          # s 为 { 1, 2 }  
s.add(2)          # s 为 { 1, 2 }  
x = len(s)        # 等于 2  
y = 2 in s        # 等于 True  
z = 3 in s        # 等于 False  
```

使用集合的两大理由：

第一，集合中的 `in` 操作非常高效。当一个数据集中的元素数量非常庞大的时候，以集合的形式来查找元素显然比列表更加合适:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # 失败，需要去检查每个元素  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # 查找成功，而且速度很快  
```

第二，用集合来获取一组数据中不同的元素非常方便:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

不过实际上，集合的使用频率还是没有字典和列表高。

### [](#条件语句 "条件语句")条件语句

在绝大多数编程语言中，你都可以像这样用 _if_ 来表示条件分支:

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

你也可以像这样将条件分支语句写在一行中，但这很少用:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#循环语句 "循环语句")循环语句

#### [](#while-循环 "while 循环")_while_ 循环


Python 中的 `while` 循环:

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### [](#for-循环 "for 循环")_for_ 循环

更常用的是使用 `for-in` 循环:

```python
for x in range(10):  
    print x, "is less than 10"  
```

更复杂的逻辑表达式可以使用 `continue` 和 `break` 语句:

```python
for x in range(10):  
    if x == 3:  
        continue          # 直接进入下一轮循环  
    if x == 5:  
        break             # 完全退出循环  
    print x  
```

结果将会输出 0， 1， 2，和 4。

### [](#真值-Truthiness "真值 Truthiness")真值 Truthiness

Python 中的布尔变量 `Booleans` 用法和其他语言差不多，唯一的区别是首字母一定要大写:

```python
one_is_less_than_two = 1 < 2      # 为 True  
true_equals_false = True == False # 为 False  
```

Python 使用 `None` 来表示一个值不存在，类似其他语言中的 `null` :

```python
x = None  
print x == None        # 输出 True, 不够优美  
print x is None        # 输出 True, 更优美  
```

Python 允许你用其他值代替布尔值，以下皆等价于 `False`:

*   False
*   None
*   [] (一个空列表)
*   {} (一个空字典)
*   “”
*   set()
*   0
*   0.0

类似的也有很多 `True` 的等价值，这让你非常方便地判断空列表、空字符串以及空字典等等。

当然，如果你不能预见结果的话，可能会在使用过程中出错:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

一个更简单的做法，该做法效果等同于上面的做法:

```python
first_char = s and s[0]  
```

如果第一个值为真，将返回第二个值，否则返回第一个值。

类似地，如果 x 可能是一个数字也可能为空，那么这样可以得到一个肯定为数字的 x :

```python
safe_x = x or 0  
```

Python 中还有一个 `all` 函数，在每个元素都为 `True` 时函数返回 `True`。`any` 函数，只要有一个元素为 `True` 就返回 `True`。比如对于一个每一个元素都为“真”的列表，`all` 函数将返回`True`，否则将返回`False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} 等价于“False”  
any([True, 1, {}])          # True  
all([])                     # True, 不存在一个等价于“False”的元素  
any([])                     # False, 不存在一个等价于“True”的元素  
```

**进阶阅读:**  
[数据科学中常用的 Python 语法(进阶)](https://philoli.com/python-tutorails-advanced-level/)

