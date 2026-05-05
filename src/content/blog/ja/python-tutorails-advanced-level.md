---
title: データサイエンスでよく使うPythonの構文（応用編）
date: 2018-11-07 23:53:13
tags: Python
categories: データ科学
mathjax: true
---
最近、[Data Science from Scrath](https://book.douban.com/subject/26364377/) ([PDFアドレス](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf) )という本を読んでいます。データサイエンスの入門書として、とても分かりやすく、良い本だと思います。その中でPythonの基本的な構文と、データサイエンスで頻繁に用いられる応用的な構文が簡潔かつ明瞭に解説されていました。これは良いなと思ったので、備忘録としてここに訳してまとめておきます。
[データサイエンスでよく使うPythonの構文（基礎編）](https://philoli.com/python-tutorails-basic-level/)
[データサイエンスでよく使うPythonの構文（応用編）](https://philoli.com/python-tutorails-advanced-level/)

本章では、データ処理に非常に役立つPythonの応用的な構文と機能（Python 2.7ベース）に焦点を当てて紹介します。

<!--more-->

### ソート Sorting

Pythonのリストをソートしたい場合、リストの`sort`メソッドを使うことができます。元のリストを変更したくない場合は、`sorted`関数を使うと、ソート済みの新しいリストが返されます。

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x は変わらない
x.sort()            # 現在の x = [1,2,3,4]
# sortやsortedはデフォルトで昇順にリストをソートします。
```

降順にソートしたい場合は、`reverse = True`という引数を指定します。

また、カスタムのソート関数を指定して、特定のキーに基づいてリストをソートすることも可能です。

```python
# 絶対値の大きい順にソート
x = sorted([-4,1,-2,3], key=abs, reverse=True) # は [-4,3,-2,1]
# 単語の出現回数の多い順にソート
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### リスト内包表記 List Comprehensions

リストから特定の要素を抽出して新しいリストを作成したり、要素の値を変更したり、あるいはその両方を行いたい状況はよくあります。Pythonでは、このような場合に「リスト内包表記 (List Comprehensions)」を使うのが一般的です。

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

同様に、リストから辞書やセットを作成することもできます。

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

もしリストの要素自体を使う必要がない場合は、アンダースコア `_` を変数として使うことができます。

```python
zeroes = [0 for _ in even_numbers] # even_numbers と同じ長さのリスト
```

リスト内包表記は、複数の`for`ループにも対応しています。

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 合計100ペア： (0,0) (0,1) ... (9,8), (9,9)
```

後続の`for`ループでは、先行する`for`ループの結果を利用できます。

```python
increasing_pairs = [(x, y)                      # x < y のデータペアのみを含む
                    for x in range(10)          # range(lo, hi) は
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1] と等しい
```
リスト内包表記は、今後頻繁に利用することになるでしょう。

### ジェネレーターとイテレーター Generators and Iterators

リストには、意図せず非常に巨大になる可能性があるという問題があります。例えば`range(1000000)`は、100万個の要素を持つリストを生成します。一度にすべてのデータを処理しようとすると、時間がかかりすぎたり、メモリを使い果たしたりする可能性があります。実際には最初の数個のデータしか使わない場合もあり、そのような場合、他の演算はすべて無駄になってしまいます。

一方、ジェネレーターを使えば、必要なデータだけをイテレートできます。関数と`yield`式を使ってジェネレーターを作成できます。

```python
def lazy_range(n):
    """rangeの遅延バージョン"""
    i = 0
    while i < n:
        yield i
        i += 1
```

訳者補足：
ジェネレーターも特殊なイテレーターの一種であり、`yield`はジェネレーターがイテレーションを実現するための鍵となります。これはジェネレーターの実行を一時停止し、再開する地点として機能し、`yield`式に値を代入したり、`yield`式の値を返したりすることができます。`yield`文を含む関数はすべてジェネレーターと呼ばれます。ジェネレーターから抜ける際、ジェネレーターは現在の実行状態を保存し、次回実行時にその状態を復元して次のイテレーション値を取得します。リストイテレーションでは大量のアドレス空間を消費しますが、ジェネレーターを使用すれば、ほぼ一つのアドレス空間しか消費しないため、メモリの節約につながります。

次のループは、`yield`された値を一つずつ、すべて消費するまで処理します。

```python
for i in lazy_range(10):
    do_something_with(i)
```

(実際、Pythonには上記`_lazy_range_`と同様の効果を実現する`xrange`という関数が元々備わっています。Python 3では`range`がその役割を担っています。) これにより、無限数列を作成することも可能です。

```python
def natural_numbers():
    """1, 2, 3, ...を返す"""
    n = 1
    while True:
        yield n
        n += 1
```

ただし、このような終了ロジックのない文の使用は推奨されません。

**TIP**
> ジェネレーターを使ったイテレーションの欠点は、要素を最初から最後まで一度しかイテレートできないことです。複数回イテレートしたい場合は、毎回新しいジェネレーターを作成するか、リストを使うしかありません。

ジェネレーターを作成する第二の方法は、括弧を使った内包表記を利用することです。

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

辞書の`items()`メソッドは、辞書内のすべてのキーと値のペアをリストとして返しますが、多くの場合、`iteritems()`ジェネレーターメソッドを使ってイテレートし、一度に一つのキーと値のペアだけを生成・返却します。

### 乱数 Randomness

データサイエンスを学ぶ上で、乱数を生成する機会は頻繁にあります。`random`モジュールをインポートするだけで、これを利用できます。

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() は乱数を生成
# 0.7579544029403025,         # 乱数は0と1の間に正規化される
# 0.420571580830845,          # この関数は最もよく使われる乱数生成関数
# 0.25891675029296335]
```

再現性のある結果を得たい場合は、`random.seed`で設定された内部状態に基づいて、`random`モジュールに擬似乱数（決定論的乱数）を生成させることができます。

```python
random.seed(10)           # シードを10に設定
print random.random()     # 0.57140259469
random.seed(10)           # シードを10にリセット
print random.random()     # 再び0.57140259469
```

また、`random.randrange`関数を使って、指定された範囲内の乱数を生成することもあります。

```python
random.randrange(10)      # range(10) = [0, 1, ..., 9] からランダムに1つ選択
random.randrange(3, 6)    # range(3, 6) = [3, 4, 5] からランダムに1つ選択
```

他にも便利なメソッドがいくつかあります。例えば、`random.shuffle`はリスト内の要素の順序をシャッフルし、ランダムに並べ替えられたリストを再生成します。

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] （結果は異なるはずです）
```

リストからランダムに1つの要素を選びたい場合は、`random.choice`メソッドを使用できます。

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # 私が得たのは "Bob"
```

元のリストをシャッフルせずにランダムなシーケンスを生成したい場合は、`random.sample`メソッドを使うことができます。

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

複数回の呼び出しにより、複数のランダムサンプルを選択することも可能です（重複を許容します）。

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### 正規表現 Regular Expressions

正規表現はテキスト検索に用いられ、やや複雑ですが非常に有用です。そのため、正規表現専門の書籍が多数存在します。具体的な説明は、それらに遭遇した際に行うとして、ここではPythonでの正規表現使用例をいくつか紹介します。

```python
import re
print all([                                 # 以下の記述はすべてTrueを返す。なぜなら、
    not re.match("a", "cat"),               # * 'cat' は 'a' で始まらない
    re.search("a", "cat"),                  # * 'cat' には文字 'a' が含まれている
    not re.search("c", "dog"),              # * 'dog' には文字 'c' が含まれていない
    3 == len(re.split("[ab]", "carbs")),    # * 'a' または 'b' に基づいて単語を3つの部分 ['c','r','s'] に分割する
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * 数字をハイフンに置換
    ])                                      # 出力はTrue
```

### オブジェクト指向プログラミング Object-Oriented Programming

多くの言語と同様に、Pythonではデータをカプセル化するクラスや、そのデータを操作する関数を定義できます。コードをより明確かつ簡潔にするために、これらを使用することがあります。多くのコメントを付けた例を構築して説明するのが、おそらく最も分かりやすいでしょう。

Pythonに組み込みのSetがないと仮定した場合、独自の`Set`クラスを作成したいと考えるかもしれません。このクラスにはどのような機能が必要でしょうか？例えば、`Set`が与えられたとき、項目を追加したり、項目を削除したり、特定の値が含まれているかを確認したりできる必要があります。そこで、これらの機能をすべてクラスのメンバー関数として作成します。これにより、`Set`オブジェクトの後にドットを使ってこれらのメンバー関数にアクセスできるようになります。

```python
# 慣例として、クラス名には _PascalCase_ を使います
class Set:
    # これらはメンバ関数です
    # 各メンバ関数は、先頭に "self" パラメータを持ちます（これも慣例です）
    # "self" は、現在使用されている特定の Set オブジェクトに対応します

    def __init__(self, values=None):
        """これは、新しい Set が作成されるたびに呼び出される関数です。
        以下のように呼び出すことができます。
        s1 = Set() # 空のセット
        s2 = Set([1,2,2,3]) # 指定された値でセットを初期化"""
        self.dict = {} # Setの各インスタンスは独自のdict属性を持ちます
        # この属性を使って各メンバーを追跡します
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """これはSetオブジェクトの文字列表現です。
        Pythonコマンドウィンドウに文字列を入力するか、str()メソッドを使ってオブジェクトに文字列を渡すことで、これを確認できます"""
        return "Set: " + str(self.dict.keys())

    # メンバシップは、self.dictのキーとなり、その値をTrueに設定することで表現します
    def add(self, value):
        self.dict[value] = True

    # 引数が辞書のキーであれば、対応する値はSetに含まれます
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

そして、`Set`を次のように使うことができます。

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### 関数ツール Functional Tools

#### 部分適用 partial

関数を渡す際、ある関数の一部機能だけを使って新しい関数を作成したい場合があります。簡単な例として、2つの変数を持つ関数を考えてみましょう。

```python
def exp(base, power):
    return base ** power
```

これを利用して、1つの変数を入力とし、底が2の冪関数 `exp(2, power)` の結果を出力する関数を作成したいとします。

もちろん、`def`を使って新しい関数を定義することもできますが、あまり賢い方法とは言えません。

```python
def two_to_the(power):
  return exp(2, power)
```

よりスマートな方法は、`functools.partial`メソッドを利用することです。

```python
from functools import partial
two_to_the = partial(exp, 2)      # この関数は現在、1つの変数しか持ちません
print two_to_the(3)               # 8
```

引数名を指定すれば、`partial`メソッドで他の引数を埋めることもできます。

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

関数の途中で引数を勝手にいじろうとすると、プログラムはすぐに混乱してしまうので、このような行為は避けるようにしてください。

#### マップ map

`map`、`reduce`、`filter`といった関数も、リスト内包表記の代替機能として時折使用します。

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # 上記と同じ
list_doubler = partial(map, double)     # リストを倍にする関数
twice_xs = list_doubler(xs)             # これも [2, 4, 6, 8]
```

`map`メソッドは、複数の引数を取る関数を複数のリストにマッピングするためにも使えます。

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### フィルター filter

同様に、フィルターはリスト内包表記における`if`の機能を実現します。

```python
def is_even(x):
    """xが偶数ならTrue、奇数ならFalseを返す"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # 上記と同じ
list_evener = partial(filter, is_even)    # この関数はフィルタリング機能を実現する
x_evens = list_evener(xs)                 # これも [2, 4]
```

#### リデュース reduce

`reduce`メソッドは、リストの最初の要素と2番目の要素を繰り返し結合し、その結果を3番目の要素と結合する、というプロセスを、唯一の結果が得られるまで繰り返します。

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # この関数はリストを縮小する機能を実現する
x_product = list_product(xs)              # これも 24
```

### 列挙 enumerate

リストをイテレートする際に、要素とそのインデックスを同時に使いたい状況が時折発生します。

```python
# あまりPython的ではない（簡潔さに欠ける）
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# 同様にPython的ではない（簡潔さに欠ける）
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

最も簡潔な方法は、`enumerate`メソッドを使って`(インデックス, 要素)`のタプルを生成することです。

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

同様に、インデックスだけを使いたい場合は次のようにします。

```python
for i in range(len(documents)): do_something(i)   # 簡潔ではない
for i, _ in enumerate(documents): do_something(i) # 簡潔
```

この方法は、今後頻繁に利用することになるでしょう。

### zipと引数アンパック zip and Argument Unpacking

#### zip

2つ以上のリストを`zip`で処理することはよくあります。`zip`は実際には、複数のリストを対応するタプルの単一リスト形式に変換するものです。

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # 結果は [('a', 1), ('b', 2), ('c', 3)]
```

#### 引数アンパック Argument Unpacking

複数のリストの長さが異なる場合、`zip`処理は最も短いリストの終点で停止します。また、少し変わった「unzip」という解凍テクニックを使って、リストを解凍することもできます。

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

ここでアスタリスクは引数アンパックを実行するために使われ、`pairs`の要素を`zip`の個々の引数として利用します。以下の呼び出し方も同等の効果を持ちます。

```python
zip(('a', 1), ('b', 2), ('c', 3))  # [('a','b','c'), ('1','2','3')] を返す
```

引数アンパックは、他の関数と組み合わせて使うこともできます。

```python
def add(a, b): return a + b

add(1, 2)           # 3 を返す
add([1, 2])         # エラー発生
add(*[1, 2])        # 3 を返す
```

あまり実用的ではありませんが、コードを簡潔にする良いテクニックです。

### 可変長引数 args and kwargs

ある高階関数を作成するとします。この関数は既存の関数を入力として受け取り、その関数の結果を2倍にする新しい関数を返します。

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

実行例：
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

しかし、渡される引数が1つより多い場合、この方法はうまく機能しません。

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # エラー TypeError: g() takes exactly 1 argument (2 given)
```

そこで、任意の数の引数を受け入れられる関数を指定し、引数アンパックを利用して複数の引数を渡す必要があります。これは少し魔法のように見えるかもしれません。

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# 出力結果：
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

このように関数を定義すると、`args`（argumentsの略）は名前なし引数を含むタプルとなり、`kwargs`（keyword argumentsの略）は名前付き引数を含む辞書となります。

これらは、渡される引数がリスト（またはタプル）や配列である場合にも使用できます。

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

様々な変わった方法でこれを使用できますが、ここでは高階関数に可変長引数を渡す問題を解決するためにのみ使用します。

```python
def doubler_correct(f):
    """fがどのような関数でも有効に機能する"""
    def g(*args, **kwargs):
        """引数がいくつあっても、この関数はfに正しく引数を渡すことができる"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### データサイエンスの世界へようこそ！

ピンポン！また新たな世界の扉が開きましたね！さあ、これから楽しくデータサイエンスを遊び尽くしましょう！

**関連記事:**

[データサイエンスでよく使うPythonの構文（基礎編）](https://philoli.com/python-tutorails-basic-level)
