---
title: データサイエンスにおけるPythonの常用文法（基礎編）
date: 2018-11-07 20:53:13
tags: Python
categories: データ科学
mathjax: true
--- 

最近読み始めたこの本、[Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDFアドレス](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) ) は、データサイエンスの入門書として、非常によくまとまっていて分かりやすい良書です。その中のとある章では、Pythonの基礎文法と、データサイエンスでよく使う応用文法が紹介されていました。その説明が非常に的確で、簡潔かつ明瞭だったので、自身の備忘録として、ここに翻訳してまとめておこうと思います。  
[データサイエンスでよく使うPython文法（基礎編）](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[データサイエンスでよく使うPython文法（応用編）](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

この章では、データ処理に非常に役立つPythonの基礎文法と機能（Python 2.7ベース）の紹介に焦点を当てています。

<!--more-->

### [](#空格格式 "空白のフォーマット")空白のフォーマット

多くの言語がコードブロックの制御に括弧を使いますが、Pythonはインデントを使います。  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # "for i"ループの最初の行  
    for j in [1, 2, 3, 4, 5]:  
        print j      # "for j"ループの最初の行  
        print i + j  # "for j"ループの最後の行  
    print i          # "for i"ループの最後の行  
print "done looping"  
```

これによりPythonのコードは非常に読みやすくなりますが、同時にフォーマットには常に気を配る必要があります。括弧内の空白は無視されるため、長い式を書くときに役立ちます。

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

また、コードを読みやすくするためにも使えます。

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#多行语句 "複数行の文")複数行の文

行の途中で改行する場合、バックスラッシュを使って接続を明示できます（この方法はあまり使われません）。  

```python
two_plus_three = 2 + \
                 3  
```

### [](#模块-Modules "モジュール Modules")モジュール Modules

Python標準のモジュールであれ、自分でダウンロードしたサードパーティ製のモジュールであれ、使用するには手動でインポートする必要があります。

1. モジュール全体をシンプルに直接インポートする場合：

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

ここでインポートした`re`モジュールは正規表現用です。モジュールをインポートすると、モジュール名をプレフィックス（`re.`）として具体的な機能を直接呼び出すことができます。

2. もしインポートしたいモジュール名がすでにコード中で使われている場合、インポート時に別の名前にマッピングすることができます。

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. もしあなたが「悪い人」なら、モジュール全体を現在の名前空間にインポートすることもできます。ただし、これは知らず知らずのうちに、すでに定義済みの変数を上書きしてしまう可能性があります。

```python
match = 10  
from re import *  # reモジュールにはmatch関数があります  
print match       # match関数が出力される  
```

あなたはきっと「良い人」なので、こんなことはしないと信じています。

### [](#四则运算-Arithmetic "算術演算 Arithmetic")算術演算 Arithmetic

Python 2.7では、デフォルトで整数除算が使われるため、$5 / 2 = 2$となります。しかし、多くの場合、整数除算を望まないため、このモジュールをインポートすることで挙動を変更できます。

```python
from __future__ import division  
```

インポートすると、$5 / 2 = 2.5$となります。整数除算を行いたい場合は、$5 // 2 = 2$と記述します。

### [](#函数-Functions "関数 Functions")関数 Functions

#### [](#函数定义 "関数定義")関数定義

関数とは、0個以上の入力を受け取り、何らかの出力を返す一連の処理のことです。Pythonでは、`def 関数名(引数):` を使って関数を定義します。

```python
def double(x):  
    """ここに、関数の機能に関する説明を書くことができます。  
    例えば、この関数は入力値を2倍にします。"""  
    # ここに関数の本体を書きます。インデントを忘れないでください。  
    return x * 2  
```
#### [](#函数使用 "関数の使用")関数の使用

Pythonでは、関数は「第一級オブジェクト」です。つまり、関数を変数に代入したり、他の関数に引数として渡したりすることができます。

```python
def apply_to_one(f):  
    """関数fを呼び出し、1を引数として渡します"""  
    return f(1)  
my_double = double          # doubleは前節で定義した関数を指します  
x = apply_to_one(my_double) # xは2になります  
```
#### [](#匿名函数 "匿名関数")匿名関数

`lambda`を使うと、匿名関数を作成できます。

```python
y = apply_to_one(lambda x: x + 4)     # 5になる  
```

`lambda`を他の変数に代入することも可能ですが、ほとんどの人は`def`を使うことを推奨しています。

```python
another_double = lambda x: 2 * x      # 非推奨  
def another_double(x): return 2 * x   # 推奨される書き方  
```

補足：

* `lambda`はあくまで式であり、`def`で定義するよりも関数本体がずっとシンプルです。
* `lambda`の本体は式であり、コードブロックではありません。`lambda`式の中に含められるロジックは限定的です。

#### [](#函数参数传递 "関数の引数渡し")関数の引数渡し

関数の引数にはデフォルト値を設定できます。引数を指定せずに呼び出した場合はデフォルト値が使われ、引数を指定した場合はその値が渡されます。

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # "hello"と出力  
my_print()            # "my default message"と出力  
```

引数の名前を使って直接指定するのも便利な場合があります。

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # 5を返す  
subtract(0, 5)    # -5を返す  
subtract(b=5)     # 上と同じで、-5を返す  
```
### [](#字符串-Strings "文字列 Strings")文字列 Strings

シングルクォートまたはダブルクォートを使って文字列を作成できます（クォートは必ずペアで使います）。

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

バックスラッシュを使ってエスケープシーケンスを表現します。例：

```python
tab_string = "\t"      # タブ文字を表す  
len(tab_string)        # 1になる  
```

バックスラッシュそのものを使いたい場合（Windowsのディレクトリパスや正規表現などで）、`r""`で定義する「生文字列（raw string）」を使うことができます。

```python
not_tab_string = r"\t" # 文字'\'と't'を表す  
len(not_tab_string)    # 2になる  
```

トリプルダブルクォートを使って複数行の文字列を作成できます。

```python
multi_line_string = """これは1行目  
これは2行目  
これは3行目"""  
```

### [](#异常处理-Exception "例外処理 Exception")例外処理 Exception

プログラムにエラーが発生すると、Pythonは`例外（exception）`を発生させます。これを処理しない場合、プログラムは実行を停止します。例外を捕捉するには、`try`と`except`文を使います。

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "0で割ることはできません"  
```

他の言語では例外は「悪いもの」と見なされがちですが、Pythonでは例外を積極的に処理することで、コードをより簡潔かつクリーンに保つことができます。

### [](#列表-Lists "リスト Lists")リスト Lists

#### [](#创建列表 "リストの作成")リストの作成

リストは単純な順序付きコレクションであり、Pythonで最も基本的なデータ構造です（他の言語の配列に似ていますが、リストにはいくつかの追加機能があります）。リストを作成するには：

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # 3になる  
list_sum = sum(integer_list)      # 6になる  
```
#### [](#访问列表中的值 "リストの値へのアクセス")リストの値へのアクセス

角括弧を使ってリスト内の値にインデックスでアクセスできます。

```python
x = range(10)       # リスト x = [0, 1, ..., 9] を取得  
zero = x[0]         # 0になる、リストのインデックスは0から始まる  
one = x[1]          # 1になる  
nine = x[-1]        # 9になる、リストの最後の要素  
eight = x[-2]       # 8になる、リストの最後から2番目の要素  
x[0] = -1           # 現在のリスト x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#截取列表 "リストのスライス")リストのスライス

角括弧を使ってリストをスライスできます。

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

`in`を使って、ある要素がリストに含まれているかを確認できます。

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

この要素検索方法は効率が悪いため、リストが非常に小さい場合や、検索時間にこだわらない場合にのみ使用してください。

#### [](#拼接列表 "リストの結合")リストの結合

Pythonでは、2つのリストを簡単に結合できます。

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # 現在のxは [1,2,3,4,5,6]  
```

元のリスト`x`を変更したくない場合は、「+」演算子を使って新しいリストを作成できます。

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # 現在のyは [1, 2, 3, 4, 5, 6]; xは変化しない  
```

次のように、一度に1つの要素をリストに追加することもよくあります。

```python
x = [1, 2, 3]  
x.append(0)           # 現在のxは [1, 2, 3, 0]  
y = x[-1]             # 0になる  
z = len(x)            # 4になる  
```

#### [](#列表分解 "リストのアンパック")リストのアンパック

リストにいくつの要素があるか分かっている場合、リストを簡単に分解できます。

```python
x, y = [1, 2]         # 現在の x = 1, y = 2  
```

等号の両側の要素数が一致しない場合、`ValueError`が発生します。そのため、残りの要素を下線（`_`）で受け取る方法がよく使われます。

```python
_, y = [1, 2]         # 現在の y == 2, 最初の要素は無視される  
```

### [](#元组-Tuples "タプル Tuples")タプル Tuples

リストとタプルは非常によく似ています。唯一の違いは、タプルの要素は変更できないという点です。

#### [](#元组创建 "タプルの作成")タプルの作成

丸括弧を使うか、何も括弧を付けずにタプルを作成できます。

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # 現在のmy_listは [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "タプルは変更できません"  
```

タプルを使うと、関数から複数の戻り値を簡単に受け取ることができます。

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # (5, 6)になる  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

タプル（およびリスト）は、複数の要素への同時代入をサポートしています。

```python
x, y = 1, 2       # 現在の x = 1, y = 2  
x, y = y, x       # Pythonで2つの変数の値を交換する; 現在の x = 2, y = 1  
```

### [](#字典-Dictionaries "辞書 Dictionaries")辞書 Dictionaries

#### [](#字典创建 "辞書の作成")辞書の作成

Pythonのもう一つの基本的なデータ構造は辞書です。辞書を使うと、キー（key）を使って対応する値（value）を素早く取得できます。

```python
empty_dict = {}                       # Pythonらしい空辞書の定義  
empty_dict2 = dict()                  # あまりPythonらしくない空辞書の定義  
grades = { "Joel" : 80, "Tim" : 95 }  # 辞書にデータを格納  
```

#### [](#字典元素查找 "辞書要素の検索")辞書要素の検索

角括弧とキーを使って、対応する値を検索できます。

```python
joels_grade = grades["Joel"]          # 80になる  
```

検索したいキーが辞書に存在しない場合、`KeyError`が返されます。

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Kateの成績はありません！"  
```

`in`を使って、キーが辞書に含まれているかを確認できます。

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

辞書には、検索するキーが存在しない場合に設定したデフォルト値を返すメソッドがあります（例外を発生させる代わりに）。

```python
joels_grade = grades.get("Joel", 0)   # 80になる  
kates_grade = grades.get("Kate", 0)   # 0になる  
no_ones_grade = grades.get("No One")  # デフォルト値Noneを返す  
```

#### [](#字典修改 "辞書の変更")辞書の変更

角括弧を使って辞書内のキーと値のペアを作成、変更できます。

```python
grades["Tim"] = 99                    # 古い値を置き換える  
grades["Kate"] = 100                  # キーと値のペアを追加する  
num_students = len(grades)            # 3になる  
```

データ構造を表現するために、このように辞書を使うことがよくあります。

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

特定のキーを検索するだけでなく、次のようにすべてのキーを操作することもできます。

```python
tweet_keys = tweet.keys()             # キーのリストを取得  
tweet_values = tweet.values()         # 値のリストを取得  
tweet_items = tweet.items()           # (キー, 値)のタプルを取得  
"user" in tweet_keys                  # Trueを返すが、効率の低いリスト内での`in`検索  
"user" in tweet                       # よりPythonらしい、効率の良い辞書内での`in`検索  
"joelgrus" in tweet_values            # True  
```

辞書のキーは一意であり、リストを辞書のキーとして使うことはできません。複数の部分からなるキーが必要な場合は、タプルを使うか、何らかの方法でキーを文字列に変換してください。

#### [](#内置字典 "defaultdict")defaultdict

ドキュメント内の各単語の出現頻度を数えようとしている場合、明らかな方法としては、単語をキー、頻度を対応する値とする辞書を作成することです。そしてドキュメントを走査し、出現した単語があれば辞書内の対応するキーの値を1増やし、未出現の単語であれば辞書にキーと値のペアを追加します。

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:
        word_counts[word] = 1  
```

もちろん、次のように「まず実行して、後で処理する（EAFP: Easier to Ask for Forgiveness than Permission）」方式で、存在しないキーを事前に処理することもできます。

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

3番目の方法は`get`を使うことです。このメソッドは、欠落したキーの処理において優れた振る舞いをします。

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

`defaultdict`は通常の辞書と同じですが、唯一の違いは、辞書に存在しないキーを検索しようとすると、`defaultdict`は提供されたキーを使って自動的にキーと値のペアを作成するという点です。`defaultdict`を使用するには、`collections`ライブラリをインポートする必要があります。

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int()は0を生成する  
for word in document:  
    word_counts[word] += 1  
```

リスト、通常の辞書、さらにはカスタム関数でも、`defaultdict`は非常に便利です。

```python
dd_list = defaultdict(list)           # list()は空のリストを生成する  
dd_list[2].append(1)                  # 現在のdd_listは {2: [1]}  
dd_dict = defaultdict(dict)           # dict()は空の辞書を生成する  
dd_dict["Joel"]["City"] = "Seattle"   # 現在のdd_dictの内容は { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # キーに対応する値がリストである辞書を作成  
dd_pair[2][1] = 1                     # 現在のdd_pairの内容は {2: [0,1]}  
```

この方法は非常に役立ちます。今後、辞書から特定のキーに対応する値を取得する際に、キーが存在するかどうかをいちいち確認する必要がなくなります。

### [](#计数器-Counter "カウンター Counter")カウンター Counter

`Counter`は、値のグループを辞書のようなオブジェクトに直接変換できます。キーはグループ内の要素、値はその要素の出現回数になります。これはヒストグラムを作成する際によく使われます。

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c は（ほぼ） { 0 : 2, 1 : 1, 2 : 1 }  
```

これにより、単語の出現頻度を統計する非常に便利な方法が手に入ります。

```python
word_counts = Counter(document)  
```

`Counter`には、`most_common`という非常に便利なメソッドがあります。これを使うと、最も頻度の高いいくつかの単語とそれに対応する頻度を直接取得できます。

```python
# 最も頻度の高い10個の単語とその出現回数を出力する  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#集合-Sets "集合 Sets")集合 Sets

Pythonにおけるもう一つのデータ構造は`set`（集合）です。集合は、異なる要素の集まりです。
このように集合を作成し、要素を追加できます。

```python
s = set()  
s.add(1)          # s は { 1 }  
s.add(2)          # s は { 1, 2 }  
s.add(2)          # s は { 1, 2 }  
x = len(s)        # 2になる  
y = 2 in s        # Trueになる  
z = 3 in s        # Falseになる  
```

集合を使う主な2つの理由：

第一に、集合における`in`操作は非常に効率的です。データセット内の要素数が非常に多い場合、要素の検索にはリストよりも集合の形式の方が明らかに適切です。

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # 遅い、各要素をチェックする必要がある  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # 検索が成功し、かつ高速  
```

第二に、集合を使うと、一連のデータの中から重複しない（異なる）要素を簡単に取得できます。

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

とはいえ、実際には集合の利用頻度は辞書やリストほど高くありません。

### [](#条件语句 "条件文")条件文

ほとんどのプログラミング言語と同様に、`if`を使って条件分岐を表現できます。

```python
if 1 > 2:  
    message = "もし1が2より大きければ…"  
elif 1 > 3:  
    message = "elifは'else if'の略"  
else:  
    message = "他のすべてが失敗したらelseを使う（必要であれば）"  
```

条件分岐文をこのように1行で記述することもできますが、これはあまり使われません。

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#循环语句 "ループ文")ループ文

#### [](#while-循环 "while ループ")_while_ ループ

Pythonにおける`while`ループ：

```python
x = 0  
while x < 10:  
    print x, "は10未満です"  
    x += 1  
```

#### [](#for-循环 "for ループ")_for_ ループ

より一般的に使われるのは`for-in`ループです。

```python
for x in range(10):  
    print x, "は10未満です"  
```

より複雑なロジックには、`continue`と`break`文を使うことができます。

```python
for x in range(10):  
    if x == 3:  
        continue          # 次のループに直接進む  
    if x == 5:  
        break             # ループを完全に終了する  
    print x  
```

結果は0、1、2、そして4が出力されます。

### [](#真值-Truthiness "真偽値 Truthiness")真偽値 Truthiness

Pythonにおけるブール変数`Booleans`の使い方は他の言語とほぼ同じですが、唯一の違いは先頭の文字を必ず大文字にする点です。

```python
one_is_less_than_two = 1 < 2      # Trueになる  
true_equals_false = True == False # Falseになる  
```

Pythonでは、値が存在しないことを`None`で表現します。これは他の言語の`null`に似ています。

```python
x = None  
print x == None        # Trueと出力されるが、あまり洗練されていない  
print x is None        # Trueと出力される、より洗練された書き方  
```

Pythonでは、ブール値の代わりに他の値を使うことができます。以下はすべて`False`と同等です。

*   False
*   None
*   [] (空のリスト)
*   {} (空の辞書)
*   “” (空の文字列)
*   set() (空の集合)
*   0
*   0.0

同様に、`True`と同等の値も多く存在します。これにより、空のリスト、空の文字列、空の辞書などを簡単に判断できます。

もちろん、結果が予測できない場合は、使用中にエラーが発生する可能性があります。

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

よりシンプルな方法で、上記のコードと同じ効果を得られます。

```python
first_char = s and s[0]  
```

最初の値が真であれば2番目の値を返し、そうでなければ最初の値を返します。

同様に、`x`が数値である可能性もあれば、`None`である可能性もある場合、次のようにすれば必ず数値である`x`が得られます。

```python
safe_x = x or 0  
```

Pythonには`all`関数もあり、すべての要素が`True`のときに`True`を返します。`any`関数は、いずれかの要素が`True`であれば`True`を返します。例えば、すべての要素が「真」であるリストに対して、`all`関数は`True`を返し、そうでなければ`False`を返します。

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {}は「False」と同等  
any([True, 1, {}])          # True  
all([])                     # True, 「False」と同等な要素が存在しないため  
any([])                     # False, 「True」と同等な要素が存在しないため  
```

**進階閱讀:**  
[データサイエンスでよく使うPython文法（応用編）](https://philoli.com/python-tutorails-advanced-level/)
