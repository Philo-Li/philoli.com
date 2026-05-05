---
title: 資料科學中 Python 的常用語法（進階）
date: 2018-11-07 23:53:13
tags: Python
categories: 資料科學
mathjax: true
--- 
最近這兩天在看這本 [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF地址](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) )，這是一本很不錯、淺顯易懂的資料科學入門書。其中有一個章節介紹了 Python 的基礎語法，以及資料科學中常用的進階語法。我覺得介紹得很棒，內容簡潔又明瞭，所以我把它翻譯成繁體中文，放在這裡方便日後查閱。  
[資料科學中常用的 Python 語法（基礎）](https://philoli.com/python-tutorails-basic-level/)  
[資料科學中常用的 Python 語法（進階）](https://philoli.com/python-tutorails-advanced-level/)  

本章主要著重介紹在資料處理中非常實用的 Python 進階語法與功能（基於 Python 2.7）。

<!--more-->

### 排序 Sorting

如果你想對 Python 的列表進行排序，可以使用列表本身的 `sort` 方法。如果你不想破壞原始列表，可以使用 `sorted` 函數來回傳一個新的已排序列表：

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x 不變
x.sort()            # 目前 x = [1,2,3,4]
# `sort` 或 `sorted` 預設是從小到大排序列表。
```

如果想要從大到小排序，可以指定 `reverse = True` 這個參數。

也可以自訂排序函數，讓列表依照指定關鍵字進行排序：

```python
# 依照絕對值從大到小排序
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# 依照單字出現的次數從大到小排序
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### 列表解析 List Comprehensions

我們經常會遇到這樣的情況：想要從列表中提取特定的幾個元素來組成新的列表，或是改變其中幾個元素的值，甚至兩者都做。Python 中慣用的做法就是「列表解析」（List Comprehensions）：

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

同樣地，你可以將列表變成字典或集合：

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

如果你不需要使用到列表中的元素，那麼可以將底線 `_` 當作變數：

```python
zeroes = [0 for _ in even_numbers] # 與列表 even_numbers 有相同的長度
```

列表解析支援多重 `for` 迴圈：

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 總共 100 對： (0,0) (0,1) ... (9,8), (9,9)
```

後面的 `for` 迴圈可以使用前面 `for` 迴圈的結果：

```python
increasing_pairs = [(x, y)                      # 只包含 x < y 的資料對
                    for x in range(10)          # range(lo, hi) 等於
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
未來我們會經常用到列表解析。

### 生成器和迭代器 Generators and Iterators

列表有一個問題，就是一不小心就會變得非常龐大，像是 `range(1000000)` 就會產生一個一百萬個元素的列表。如果一次處理一個資料，可能會耗費過長時間（或記憶體耗盡）。然而，你可能實際上只用到前幾個資料，這樣其他運算就顯得多餘。

而生成器（Generators）可以讓你只迭代那些需要用到的資料。可以使用函數和 `yield` 表達式來建立一個生成器：

```python
def lazy_range(n):
    """range 的惰性版本"""
    i = 0
    while i < n:
        yield i
        i += 1
```

譯者補充：
生成器也是一種特殊的迭代器，`yield` 是生成器實現迭代的關鍵。它作為生成器執行的暫停與恢復點，可以對 `yield` 表達式進行賦值，也可以將 `yield` 表達式的值回傳。任何包含 `yield` 語句的函數都被稱為生成器。跳出生成器時，生成器會儲存當前的執行狀態，並在下次執行時恢復現場，以取得下一個迭代值。採用列表迭代會佔用大量記憶體空間，而使用生成器差不多只佔用一個記憶體空間，從而達到節省記憶體的效果。

下面這個迴圈將一次消耗一個 `yield` 中的值，直到全部消耗完畢：

```python
for i in lazy_range(10):
    do_something_with(i)
```

(事實上，Python 自帶了一個實現上述 `_lazy_range_` 效果的函數，稱為 `xrange`，在 Python 3 中則稱為 `range`。) 這也表示你可以建立一個無窮數列：

```python
def natural_numbers():
    """回傳 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

不過並不建議使用這種沒有退出迴圈邏輯的語句。

**TIP**
> 使用生成器迭代的一個缺點就是，元素從頭到尾只能迭代一次。如果想實現多次迭代，你只能每次都建立新的生成器，或者直接使用列表。

第二種建立生成器的方法：利用括號內的解析表達式：

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

我們知道字典中的 `items()` 方法會回傳一個包含字典中所有鍵值對的列表，但更多情況下，我們會使用 `iteritems()` 生成器方法來進行迭代，每次只產生並回傳一個鍵值對。

### 隨機 Randomness
在學習資料科學時，我們將會經常需要產生隨機數，所以只要匯入 `random` 模組就能使用：

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() 會產生隨機數
# 0.7579544029403025,         # 隨機數會被標準化處理，範圍介於 0 和 1 之間
# 0.420571580830845,          # 這個函數是最常用來產生隨機數的函數
# 0.25891675029296335]
```

如果你想獲得可重現的結果，可以讓 `random` 模組基於 `random.seed` 設定的內部狀態來產生偽隨機（即確定性）數字：

```python
random.seed(10)           # 將 seed 設定為 10
print random.random()     # 0.57140259469
random.seed(10)           # 將 seed 重新設定為 10
print random.random()     # 0.57140259469 再一次
```

有時候我們也會使用 `random.randrange` 函數來產生一個指定範圍內的隨機數：

```python
random.randrange(10)      # 從 range(10) = [0, 1, ..., 9] 中隨機選擇一個數
random.randrange(3, 6)    # 從 range(3, 6) = [3, 4, 5] 中隨機選擇一個數
```

還有一些方法有時候用起來很方便，例如 `random.shuffle` 會打亂一個列表中的元素次序，重新產生一個隨機排列的列表：

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (你得到的結果應該不同)
```

如果想從一個列表中隨機選擇一個元素，可以使用 `random.choice` 方法：

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # 我得到的是 "Bob"
```

如果既想要產生一個隨機序列，又不想打亂原始列表，可以使用 `random.sample` 方法：

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

你可以透過多次呼叫來實現多個隨機樣本的選擇（允許重複）：

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### 正規表達式 Regular Expressions

正規表達式用於文本搜尋，雖然略顯複雜但卻非常實用，因此有大量的書籍專門講解正規表達式。我們遇到時會再具體解釋，下面是一些在 Python 中使用正規表達式的範例：

```python
import re
print all([                                 # 以下敘述全部回傳 True，因為
    not re.match("a", "cat"),               # * 'cat' 不以 'a' 開頭
    re.search("a", "cat"),                  # * 'cat' 中包含了字母 'a'
    not re.search("c", "dog"),              # * 'dog' 中不包含字母 'c'
    3 == len(re.split("[ab]", "carbs")),    # * 根據 a 或 b 將單字拆分成三部分 ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * 用短橫線替換數字
    ])                                      # 輸出 True
```

### 物件導向程式設計 Object-Oriented Programming

和許多程式語言一樣，Python 允許你定義封裝資料的類別，以及對其進行操作的函數。我們有時會使用它們來讓程式碼更清晰簡潔。透過建構一個帶有大量註釋的範例來解釋它們，可能是最簡單的方式。假設沒有內建的 Python 集合，我們可能會想建立自己的 `Set` 類別。那麼這個類別應該具備哪些功能呢？舉例來說，給定一個 `Set`，我們需要能夠向其中新增項目、從中刪除項目，並檢查它是否包含特定值。所以，我們會將所有這些功能都建立為該類別的成員函數。這樣一來，我們就可以在 `Set` 物件之後，用點（`.`）來存取這些成員函數：

```python
# 按照慣例，我們給予類別名稱 _PascalCase_
class Set:
    # 這些是成員函數
    # 每個成員函數都有一個置於首位的"self"參數（另一個慣例）
    # “self”對應於正在使用的特定 Set 物件

    def __init__(self, values=None):
        """這是建立函數
        每當你建立一個新的 Set 時，就會呼叫該函數
        可以像這樣呼叫
        s1 = Set() # 空集合
        s2 = Set([1,2,2,3]) # 根據指定值初始化集合"""
        self.dict = {} # Set 中的每個實例都有自己的 dict 屬性
        # 我們使用該屬性來追蹤每個成員
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """這是 Set 物件中的字串表達式
        你可以透過向 Python 命令視窗輸入字串，或者利用 str() 方法向物件傳遞字串"""
        return "Set: " + str(self.dict.keys())

    # 我們將透過成為 self.dict 中的鍵，並將鍵值設為 True 來表示成員資格。
    def add(self, value):
        self.dict[value] = True

    # 如果參數為字典中的鍵，對應的值就在 Set 中
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

然後我們就可以像這樣使用 `Set`：

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### 函數工具 Functional Tools

#### 部分函數 partial

當傳遞函數時，有時我們會想使用某函數的部分功能來建立新函數。舉個簡單的例子，假設我們有一個包含兩個變數的函數：

```python
def exp(base, power):
    return base ** power
```

我們想要利用它來建立一個函數，該函數輸入一個變數，輸出底數為 2 的冪函數 `exp(2, power)` 的結果。

當然，我們可以用 `def` 定義一個新的函數，雖然這看起來不太明智：

```python
def two_to_the(power):
  return exp(2, power)
```

更聰明的做法是利用 `functools.partial` 方法：

```python
from functools import partial
two_to_the = partial(exp, 2)      # 目前這個函數只有一個變數
print two_to_the(3)               # 8
```

如果指定了名稱，也可以使用 `partial` 方法填充其他的參數：

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

如果你嘗試在函數中間亂用參數，那麼程式很快就會變得混亂，所以請盡量避免這種行為。

#### 映射 map

我們偶爾也會使用 `map`、`reduce` 和 `filter` 等函數，作為列表解析的功能替代：

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # 同上
list_doubler = partial(map, double)     # 函數功能是將列表加倍
twice_xs = list_doubler(xs)             # 也是 [2, 4, 6, 8]
```

`map` 方法還可以用於多參數函數到多列表的映射：

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### 過濾器 filter

同樣地，過濾器實現的是列表解析中 `if` 的功能：

```python
def is_even(x):
    """若 x 為偶數則回傳 True，x 為奇數則回傳 False"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # 同上
list_evener = partial(filter, is_even)    # 這個函數實現過濾功能
x_evens = list_evener(xs)                 # 也是 [2, 4]
```

#### 縮減 reduce

`reduce` 方法會不斷合併列表中的第一個和第二個元素，然後將結果與第三個元素合併，並一直重複這個過程，直到得到一個唯一的結果：

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # 這個函數實現縮減一個列表
x_product = list_product(xs)              # 也是 24
```

### 列舉 enumerate

偶爾會出現這樣的情況：在遍歷一個列表時，同時要使用元素和它的索引：

```python
# 不太 Python（不夠簡潔優雅）
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# 同樣不太 Python（不夠簡潔優雅）
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

最簡潔的做法是使用 `enumerate` 列舉方法，產生一個元組 `(index, element)`：

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

同樣地，如果只想使用索引：

```python
for i in range(len(documents)): do_something(i)   # 不簡潔
for i, _ in enumerate(documents): do_something(i) # 簡潔
```

後面我們會經常用到這個方法。

### 壓縮和參數解壓縮 zip and Argument Unpacking

#### 壓縮 zip

我們經常會對兩個或更多的列表進行壓縮處理。壓縮實際上就是將多個列表轉化為對應元組的單一列表形式：

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # 得到 [('a', 1), ('b', 2), ('c', 3)]
```

#### 參數解壓縮 Argument Unpacking

如果多個列表長度不一致，那麼壓縮過程會在最短列表的尾部停止。你也可以使用一個特別的「解壓縮」（unzip）技巧對列表進行解壓縮：

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

其中星號 `*` 用於執行參數解壓縮，它使用 `pairs` 的元素作為 `zip` 的個別參數。下面的呼叫方式具有同等效果：

```python
zip(('a', 1), ('b', 2), ('c', 3))  # 回傳 [('a','b','c'), ('1','2','3')]
```

參數解壓縮也可以和其他函數共同使用：

```python
def add(a, b): return a + b

add(1, 2)           # 回傳 3
add([1, 2])         # 報錯
add(*[1, 2])        # 回傳 3
```

雖然不太實用，不過是個讓程式碼變得簡潔的好技巧。

### 不定長參數傳遞 args and kwargs

假設我們要建立一個高階函數，該函數輸入一個舊函數，並回傳一個新的函數，新函數是舊函數乘以 2 的結果：

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

執行範例：
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== (3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

然而，只要傳遞的參數大於一個，這個方法就不太好用了：

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # 報錯 TypeError: g() takes exactly 1 argument (2 given)
```

所以我們需要指定一個函數，使得它能夠容納任意數量的參數，然後利用參數解壓縮來實現傳遞多個參數，這看起來有點神奇：

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# 輸出結果：
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

當我們像這樣定義一個函數時，`args`（`arguments` 的縮寫）是一個包含未命名參數的元組，而 `kwargs`（`keyword arguments` 的縮寫）是包含命名參數的字典。

它們也可以用在傳遞的參數為列表（或元組）或字典的情況：

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

你可以用它配合各種特別的方法使用，但我們只用它來解決高階函數傳遞不定長參數的問題：

```python
def doubler_correct(f):
    """無論 f 是什麼都能有效運作"""
    def g(*args, **kwargs):
        """無論有多少參數，這個函數都能正確將參數傳遞給 f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### 歡迎來到資料科學的世界！

叮！恭喜你又打開了新世界的大門！接下來就可以開心地去玩耍囉～

**相關閱讀:**

[資料科學中常用的 Python 語法（基礎）](https://philoli.com/python-tutorails-basic-level)
