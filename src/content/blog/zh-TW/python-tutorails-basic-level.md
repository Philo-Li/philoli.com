---
title: 資料科學中 Python 的常用語法（基礎篇）
date: 2018-11-07 20:53:13
tags: Python
categories: 資料科學
mathjax: true
--- 

這幾天在讀這本 [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF連結](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf))，是一本很棒、淺顯易懂的資料科學入門書籍。其中一個章節介紹了 Python 的基礎語法和資料科學常用的進階語法，我覺得介紹得很好，既簡潔又清晰，因此我將其翻譯並整理在這裡，作為我的筆記與備忘。  
[資料科學中常用的 Python 語法（基礎篇）](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[資料科學中常用的 Python 語法（進階篇）](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

本章主要著重於介紹在資料處理中，非常實用的 Python 基礎語法和功能（基於 Python 2.7）。

<!--more-->

### 空白字元與格式

許多程式語言使用括號來控制程式碼區塊，但 Python 則是用縮排來達成這件事：  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # "for i" 迴圈的第一行  
    for j in [1, 2, 3, 4, 5]:  
        print j      # "for j" 迴圈的第一行  
        print i + j  # "for j" 迴圈的最後一行  
    print i          # "for i" 迴圈的最後一行  
print "done looping"  
```

這讓 Python 的程式碼非常容易閱讀，但也代表你必須時刻留意排版格式。括號內的空白字元會被忽略，這在撰寫長表達式時非常實用：

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

也能讓程式碼更容易閱讀：

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### 多行陳述式

你可以用一個反斜線 `\` 來表示程式碼連接中斷在兩行之間（但這種寫法很少見）：  

```python
two_plus_three = 2 + \
                 3  
```

### 模組（Modules）

無論是 Python 內建的模組，還是自行下載的第三方模組，都需要透過手動匯入才能使用。

1. 直接匯入整個模組：

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

這裡匯入的 `re` 模組是用於正規表達式（regular expression）的。匯入模組後，就可以直接將模組名稱作為前綴（例如 `re.`），來呼叫其提供的具體功能。

2. 如果欲匯入的模組名稱在你的程式碼中已經被使用，可以將模組匯入時對應到另一個名稱：

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. 如果你「很壞」，你可以將整個模組都匯入到目前的命名空間（namespace），這可能會在不經意間覆蓋你已經定義好的變數：

```python
match = 10  
from re import *  # `re` 模組中也有一個 `match` 函式  
print match       # 會輸出 `match` 函式  
```

但相信你不會這麼做，因為你是一個好人。

### 四則運算（Arithmetic）

Python 2.7 預設使用整數除法，所以 $5 / 2 = 2$。但很多時候我們並不想要整數除法，這時可以匯入這個模組：

```python
from __future__ import division  
```

匯入後，就會得到 $5 / 2 = 2.5$。  
整數除法：$5 // 2 = 2$。

### 函式（Functions）

#### 函式定義


函式是一種能夠接收零個或多個輸入，並返回特定輸出結果的規則。在 Python 中，我們用 `def 函式名稱(參數)` 的方式來定義一個函式：

```python
def double(x):  
    """你可以在這裡寫一些關於函式功能的解釋  
    例如，該函式會將輸入內容乘以 2"""  
    # 函式主體寫在這裡，記得要縮排  
    return x * 2  
```
#### 函式使用


在 Python 中，函式被視為「一級物件（first-class objects）」，這代表我們可以將函式指定給一個變數，也可以將它作為參數傳遞給其他函式或變數：

```python
def apply_to_one(f):  
    """呼叫函式 f 並將 1 作為函式參數"""  
    return f(1)  
my_double = double          # `double` 指向上一節定義的函式  
x = apply_to_one(my_double) # `x` 等於 2  
```
#### 匿名函式


我們也可以透過 `lambda` 來建立匿名函式：

```python
y = apply_to_one(lambda x: x + 4)     # 等於 5  
```

雖然可以將 `lambda` 指定給其他變數，但大多數人會建議你還是盡量使用 `def` 來定義函式：

```python
another_double = lambda x: 2 * x      # 不建議  
def another_double(x): return 2 * x   # 建議做法  
```

補充說明：

* `lambda` 只是一個表達式，函式主體比 `def` 簡單許多。
* `lambda` 的主體是一個表達式，而不是一個程式碼區塊。你只能在 `lambda` 表達式中封裝有限的邏輯。

#### 函式參數傳遞

函式參數可以定義預設值。如果呼叫函式時不帶參數，就會使用預設值；如果帶有參數，則會傳遞指定的值：

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # 輸出 "hello"  
my_print()            # 輸出 "my default message"  
```

有時候直接透過參數名稱來指定參數也很好用：

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # 回傳 5  
subtract(0, 5)    # 回傳 -5  
subtract(b=5)     # 與上一個相同，回傳 -5  
```
### 字串（Strings）

你可以使用單引號或雙引號來建立字串（引號必須配對）：

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

用反斜線 `\` 來表示跳脫字元（escape character），例如：

```python
tab_string = "\t"      # 表示跳格符號（tab）  
len(tab_string)        # 等於 1  
```

當你想要使用反斜線本身（例如用於 Windows 目錄路徑或正規表達式）時，可以透過使用原始字串 `r""` 來定義：

```python
not_tab_string = r"\t" # 表示字元 '\' 和 't'  
len(not_tab_string)    # 等於 2  
```

利用三個雙引號來建立多行字串：

```python
multi_line_string = """這是第一行  
這是第二行  
這是第三行"""  
```

### 例外處理（Exception Handling）

當程式出錯時，Python 會拋出一個「例外（exception）」。如果我們不對其進行處理，程式將會終止執行。要捕捉例外，可以使用 `try` 和 `except` 陳述式：

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "不能除以 0"  
```

儘管在其他程式語言中，例外常被視為不好的現象，但在 Python 中，適當地處理例外反而會讓你的程式碼更簡潔、更乾淨。

### 列表（Lists）

#### 建立列表

列表是簡單的有序集合，也是 Python 中最基礎的資料結構（類似其他程式語言中的陣列，但列表具有一些額外的特性）。你可以這樣建立一個列表：

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # 等於 3  
list_sum = sum(integer_list)      # 等於 6  
```
#### 存取列表中的值


你可以透過方括號來索引列表中的值：

```python
x = range(10)       # 列表 `x = [0, 1, ..., 9]`  
zero = x[0]         # 等於 0，列表的索引從 0 開始  
one = x[1]          # 等於 1  
nine = x[-1]        # 等於 9，列表中的最後一個元素  
eight = x[-2]       # 等於 8，列表中的倒數第二個元素  
x[0] = -1           # 目前的列表 `x = [-1, 1, 2, 3, ..., 9]`  
```

#### 截取列表（Slicing）


可以用方括號來截取列表：

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

你可以用 `in` 關鍵字來檢查某個元素是否存在於列表中：

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

這種元素查找方式的效率很低。只有在列表非常小，或者你不在意查找時間的情況下，才建議使用。

#### 拼接列表

在 Python 中，要拼接兩個列表非常容易：

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # 目前的 `x = [1,2,3,4,5,6]`  
```

如果你不想修改原列表 `x`，你可以使用「加號」運算子來建立一個新的列表：

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # 目前的 `y = [1, 2, 3, 4, 5, 6]`；`x` 沒有變化  
```

常常會用這種方式一次在列表中加入一個元素：

```python
x = [1, 2, 3]  
x.append(0)           # 目前的 `x = [1, 2, 3, 0]`  
y = x[-1]             # 等於 0  
z = len(x)            # 等於 4  
```

#### 列表解構（Unpacking）

如果你知道列表中有多少個元素，那麼很容易就能解構這個列表：

```python
x, y = [1, 2]         # 目前的 `x = 1`, `y = 2`  
```

如果等式兩邊的元素數目不一致，你將會得到一個「值錯誤（`ValueError`）」。因此，我們更常用底線 `_` 來忽略列表中不需要的部分：

```python
_, y = [1, 2]         # 目前的 `y == 2`，而第一個元素被忽略  
```

### 元組（Tuples）

列表和元組非常相似，唯一的區別是元組中的元素不能被修改（immutable）。

#### 建立元組

你可以使用圓括號或不加任何括號來建立元組：

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # 目前的 `my_list` 為 `[1, 3]`  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "無法修改元組"  
```

利用元組能夠很方便地從函式中獲取多個回傳值：

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # 等於 `(5, 6)`  
s, p = sum_and_product(5, 10) # `s = 15`, `p = 50`  
```

元組（和列表）都支援同時指定多個元素：

```python
x, y = 1, 2       # 目前的 `x = 1`, `y = 2`  
x, y = y, x       # 這是 Python 中交換兩個變數值的方法；目前的 `x = 2`, `y = 1`  
```

### 字典（Dictionaries）

#### 建立字典

Python 中另一種基礎資料結構是字典（dictionary），它能讓你透過鍵（key）快速取得對應的值（value）：

```python
empty_dict = {}                       # 非常 Python 風格的空字典定義  
empty_dict2 = dict()                  # 較不 Python 風格的空字典定義  
grades = { "Joel" : 80, "Tim" : 95 }  # 字典儲存  
```

#### 查找字典元素

你可以用方括號加上鍵（key）來查找對應的值：

```python
joels_grade = grades["Joel"]          # 等於 80  
```

如果要查找的鍵不在字典中，將會返回一個「鍵值錯誤（`KeyError`）」：

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "找不到 Kate 的成績！"  
```

你可以透過 `in` 關鍵字來檢查鍵是否存在於字典中：

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

字典有一個方法可以返回預設值，當要查找的鍵不在字典中時，它會返回設定的預設值（而不是拋出例外）：

```python
joels_grade = grades.get("Joel", 0)   # 等於 80  
kates_grade = grades.get("Kate", 0)   # 等於 0  
no_ones_grade = grades.get("No One")  # 回傳預設值 `None`  
```

#### 修改字典

你可以用方括號來建立、修改字典中的鍵值對（key-value pair）：

```python
grades["Tim"] = 99                    # 取代舊的值  
grades["Kate"] = 100                  # 增加一個鍵值對  
num_students = len(grades)            # 等於 3  
```

我們將會經常像這樣使用字典來表達資料的結構：

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

除了查找特定的鍵，我們還可以像這樣操作所有的鍵、值或鍵值對：

```python
tweet_keys = tweet.keys()             # 得到一個鍵（key）的列表  
tweet_values = tweet.values()         # 得到值的列表  
tweet_items = tweet.items()           # 得到 `(鍵, 值)` 元組  
"user" in tweet_keys                  # 回傳 True，但這是使用效率較低的列表 `in` 查找  
"user" in tweet                       # 更 Python 風格的用法，使用效率較高的字典 `in` 查找  
"joelgrus" in tweet_values            # True  
```

字典中的鍵是唯一的，而且列表不能作為字典的鍵。如果你需要一個多部分的鍵，你可以使用元組，或者透過某種方式將鍵轉換成字串。

#### 內建字典（defaultdict）

如果你正試圖統計一個文件（document）中每個詞彙出現的頻率，一個顯而易見的做法是建立一個字典，以詞彙作為鍵，頻率作為對應的值。然後遍歷文件，遇到已經出現過的詞彙就讓字典中對應的鍵值遞增 1，遇到未出現過的詞彙就在字典中加入一個新的鍵值對：

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

當然，你也可以像這樣用「先嘗試再處理例外」的方式，來處理一個缺失的鍵：

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

第三個方法是使用 `get()`，這個方法對於處理缺失的鍵表現得非常出色：

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

內建字典 `defaultdict` 就跟普通字典一樣，唯一的區別是，當你試圖在字典中查找一個不存在的鍵時，`defaultdict` 會利用你提供的函式（或型別）自動建立一個鍵值對。為了使用 `defaultdict`，你需要從 `collections` 模組中匯入它：

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # `int()` 會產生 0  
for word in document:  
    word_counts[word] += 1  
```

在列表、普通字典甚至自定義的函式中，`defaultdict` 都很好用：

```python
dd_list = defaultdict(list)           # `list()` 會產生一個空列表  
dd_list[2].append(1)                  # 目前的 `dd_list` 為 `{2: [1]}`  
dd_dict = defaultdict(dict)           # `dict()` 會產生一個空字典  
dd_dict["Joel"]["City"] = "Seattle"   # 目前的 `dd_dict` 內容為 `{ "Joel" : { "City" : "Seattle"}}`  
dd_pair = defaultdict(lambda: [0, 0]) # 建立了一個鍵對應值為列表的字典  
dd_pair[2][1] = 1                     # 目前的 `dd_pair` 內容為 `{2: [0,1]}`  
```

這種方法非常實用，以後當我們要從字典中獲取某些鍵值結果時，就無需再檢查鍵是否存在了。

### 計數器（Counter）

計數器 `Counter` 可以直接將一組值轉換成類似字典的物件，其中鍵是這組值中的某個元素，對應的值則是該元素出現的次數。這在建立直方圖（histogram）時會經常用到：

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # `c` (大約) 為 `{ 0 : 2, 1 : 1, 2 : 1 }`  
```

這樣我們就有了一個很方便地統計詞頻的方法：

```python
word_counts = Counter(document)  
```

計數器還有一個很常用的方法 `most_common()`，可以直接取得最高頻率的幾個詞彙和對應的頻率：

```python
# 輸出前 10 個最高頻的詞彙以及它們的計數值  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### 集合（Sets）

Python 中另一種資料結構是集合（Set），集合是一組不重複元素的收集。  
你可以這樣建立一個集合並向其中加入元素：

```python
s = set()  
s.add(1)          # `s` 為 `{ 1 }`  
s.add(2)          # `s` 為 `{ 1, 2 }`  
s.add(2)          # `s` 為 `{ 1, 2 }`  
x = len(s)        # 等於 2  
y = 2 in s        # 等於 True  
z = 3 in s        # 等於 False  
```

使用集合的兩大理由是：

第一，集合中的 `in` 運算非常高效。當一個資料集中的元素數量非常龐大時，以集合的形式來查找元素顯然比列表更合適：

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # 失敗，需要逐一檢查每個元素  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # 查找成功，而且速度很快  
```

第二，用集合來獲取一組資料中不重複的元素非常方便：

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

不過實際上，集合的使用頻率還是沒有字典和列表高。

### 條件陳述式

在絕大多數程式語言中，你都可以像這樣用 `if` 來表示條件分支：

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

你也可以像這樣將條件分支陳述式寫在同一行中，但這種寫法很少見：

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### 迴圈陳述式

#### `while` 迴圈


Python 中的 `while` 迴圈：

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### `for` 迴圈

更常用的是使用 `for-in` 迴圈：

```python
for x in range(10):  
    print x, "is less than 10"  
```

更複雜的邏輯表達式可以使用 `continue` 和 `break` 陳述式：

```python
for x in range(10):  
    if x == 3:  
        continue          # 直接進入下一輪迴圈  
    if x == 5:  
        break             # 完全退出迴圈  
    print x  
```

結果將會輸出 0、1、2 和 4。

### 布林值與真值（Truthiness）

Python 中的布林變數 `Booleans` 用法和其他程式語言差不多，唯一的區別是首字母必須大寫：

```python
one_is_less_than_two = 1 < 2      # 為 `True`  
true_equals_false = True == False # 為 `False`  
```

Python 使用 `None` 來表示一個值不存在，類似於其他程式語言中的 `null`：

```python
x = None  
print x == None        # 輸出 `True`，但這種寫法不夠優雅  
print x is None        # 輸出 `True`，這種寫法更優雅  
```

Python 允許你用其他值來代替布林值，以下這些都等價於 `False`：

*   False
*   None
*   [] (一個空列表)
*   {} (一個空字典)
*   “”
*   set()
*   0
*   0.0

類似地，也有許多等價於 `True` 的值，這讓你非常方便地判斷空列表、空字串以及空字典等等。

當然，如果你無法預期結果，可能會在使用過程中出錯：

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

一個更簡潔的做法，其效果等同於上面的做法：

```python
first_char = s and s[0]  
```

如果第一個值為真（True），將會回傳第二個值，否則回傳第一個值。

類似地，如果 `x` 可能是一個數字也可能為空，那麼這樣可以得到一個肯定為數字的 `x`：

```python
safe_x = x or 0  
```

Python 中還有 `all()` 函式，當每個元素都為 `True` 時，它會回傳 `True`。而 `any()` 函式，只要有一個元素為 `True` 就會回傳 `True`。例如，對於一個所有元素都為「真」的列表，`all()` 函式將會回傳 `True`，否則將會回傳 `False`：

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # `False`，`{}` 等價於 `False`  
any([True, 1, {}])          # True  
all([])                     # `True`，不存在一個等價於 `False` 的元素  
any([])                     # `False`，不存在一個等價於 `True` 的元素  
```

**延伸閱讀:**  
[資料科學中常用的 Python 語法（進階篇）](https://philoli.com/python-tutorails-advanced-level/)
