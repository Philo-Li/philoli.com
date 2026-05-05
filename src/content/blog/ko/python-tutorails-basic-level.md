---
title: 데이터 과학에서 파이썬 필수 문법(기초)
date: 2018-11-07 20:53:13
tags: Python
categories: 데이터 과학
mathjax: true
---

요 며칠간 [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF 주소](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf))이라는 책을 읽고 있습니다. 데이터 과학 입문 서적으로, 쉽고 명쾌해서 아주 괜찮다고 생각했습니다. 그중 한 챕터에서 파이썬 기초 문법과 데이터 과학에서 자주 쓰이는 고급 문법을 소개하고 있는데, 설명이 간결하고 명확해서 좋았습니다. 그래서 제가 이해한 바를 정리해두기 위해 이곳에 번역하여 공유합니다.
[데이터 과학에서 자주 사용되는 파이썬 문법(기초)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[데이터 과학에서 자주 사용되는 파이썬 문법(고급)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

이번 장에서는 주로 데이터 처리 시 매우 유용한 파이썬 기초 문법과 기능들을 소개합니다(파이썬 2.7 기반).

<!--more-->

### 공백 서식

대부분의 언어는 괄호를 사용해 코드 블록을 제어하지만, 파이썬은 들여쓰기를 활용합니다.

```python
for i in [1, 2, 3, 4, 5]:
    print i          # "for i" 루프의 첫 번째 줄
    for j in [1, 2, 3, 4, 5]:
        print j      # "for j" 루프의 첫 번째 줄
        print i + j  # "for j" 루프의 마지막 줄
    print i          # "for i" 루프의 마지막 줄
print "done looping"
```

이 덕분에 파이썬 코드는 가독성이 매우 좋지만, 그만큼 항상 들여쓰기에 신경 써야 한다는 의미이기도 합니다. 괄호 안의 공백은 무시되므로, 긴 표현식을 작성할 때 유용합니다.

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

또한 코드를 읽기 쉽게 만들어줍니다.

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### 여러 줄 문장

역슬래시(\\)를 사용하여 두 줄을 연결할 수 있지만 (이 방법은 거의 사용되지 않습니다):

```python
two_plus_three = 2 + \
                 3
```

### 모듈 (Modules)

파이썬 내장 모듈이든 직접 다운로드한 서드파티 모듈이든, 사용하려면 수동으로 임포트해야 합니다.

1. 모듈 전체를 간단히 직접 임포트하는 방법:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

여기서 임포트한 `re` 모듈은 정규 표현식에 사용됩니다. 모듈을 임포트한 후에는 모듈 이름(re.)을 접두사로 사용하여 특정 기능을 직접 호출할 수 있습니다.

2. 임포트하려는 모듈 이름이 코드에서 이미 사용 중인 경우, 모듈을 임포트할 때 다른 이름으로 매핑할 수 있습니다:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. (권장하지 않지만) 전체 모듈을 현재 네임스페이스로 임포트할 수도 있습니다. 이 경우 이미 정의해 둔 변수를 의도치 않게 덮어쓸 수 있습니다:

```python
match = 10
from re import *  # re 모듈에는 match 함수가 있습니다.
print match       # match 함수를 출력합니다.
```

여러분은 좋은 사람이니 이렇게 하지는 않을 거라고 믿습니다.

### 사칙 연산 (Arithmetic)

파이썬 2.7은 기본적으로 정수 나눗셈을 사용하므로 $5 / 2 = 2$입니다. 하지만 대부분의 경우 정수 나눗셈을 원하지 않으므로 다음 모듈을 임포트할 수 있습니다:

```python
from __future__ import division
```

임포트하면 $5 / 2 = 2.5$가 됩니다. 정수 나눗셈은 $5 // 2 = 2$입니다.

### 함수 (Functions)

#### 함수 정의

함수는 0개 이상의 입력을 받아 특정 출력을 반환하는 규칙입니다. 파이썬에서는 `def 함수이름(매개변수):` 형식으로 함수를 정의합니다:

```python
def double(x):
    """여기에 함수 기능에 대한 설명을 쓸 수 있습니다.
    예를 들어, 이 함수는 입력값을 2배로 만듭니다."""
    # 여기에 함수 본문을 작성합니다. 들여쓰기 잊지 마세요.
    return x * 2
```
#### 함수 사용

파이썬에서 함수는 일급 객체(first-class citizen)입니다. 즉, 함수를 변수에 할당하거나 다른 함수의 인수로 전달할 수 있습니다:

```python
def apply_to_one(f):
    """함수 f를 호출하고 1을 함수 인수로 전달합니다."""
    return f(1)
my_double = double          # double은 앞서 정의한 함수를 가리킵니다.
x = apply_to_one(my_double) # x는 2입니다.
```
#### 익명 함수

`lambda`를 사용하여 익명 함수를 만들 수도 있습니다:

```python
y = apply_to_one(lambda x: x + 4)     # 5와 같습니다.
```

`lambda`를 다른 변수에 할당할 수도 있지만, 대부분의 경우 `def`를 사용하는 것을 권장합니다:

```python
another_double = lambda x: 2 * x      # 권장하지 않음
def another_double(x): return 2 * x   # 권장되는 방법
```

참고:

*   `lambda`는 단순히 표현식이며, 함수 본문이 `def`보다 훨씬 간결합니다.
*   `lambda`의 본문은 표현식이며 코드 블록이 아닙니다. `lambda` 표현식 안에는 제한된 로직만 담을 수 있습니다.

#### 함수 매개변수 전달

함수 매개변수는 기본값을 정의할 수 있습니다. 매개변수 없이 함수를 호출하면 기본값이 사용되고, 매개변수를 지정하면 해당 값이 전달됩니다:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # "hello" 출력
my_print()            # "my default message" 출력
```

때로는 매개변수 이름을 직접 사용하여 인수를 지정하는 것도 매우 유용합니다:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # 5 반환
subtract(0, 5)    # -5 반환
subtract(b=5)     # 위와 동일, -5 반환
```
### 문자열 (Strings)

따옴표(작은따옴표 또는 큰따옴표)를 사용하여 문자열을 생성할 수 있습니다(따옴표는 반드시 짝을 이루어야 합니다):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

역슬래시(\\)는 이스케이프 문자를 나타내는 데 사용됩니다. 예를 들어:

```python
tab_string = "\t"      # 탭 문자(tab)를 나타냅니다.
len(tab_string)        # 1과 같습니다.
```

역슬래시 자체를 사용하고 싶을 때(Windows 디렉터리 또는 정규 표현식에 사용)는 raw 문자열 `r""`을 사용하여 정의할 수 있습니다:

```python
not_tab_string = r"\t" # 문자 '\'와 't'를 나타냅니다.
len(not_tab_string)    # 2와 같습니다.
```

세 개의 큰따옴표를 사용하여 여러 줄 문자열을 만들 수 있습니다:

```python
multi_line_string = """첫 번째 줄입니다.
두 번째 줄입니다.
세 번째 줄입니다."""
```

### 예외 처리 (Exception)

프로그램에 오류가 발생하면 파이썬은 `예외(exception)`를 발생시키고, 이를 처리하지 않으면 프로그램 실행이 중단됩니다. `try`와 `except` 문을 사용하여 예외를 포착할 수 있습니다:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "0으로 나눌 수 없습니다."
```

다른 언어에서는 예외가 좋지 않은 현상으로 여겨지기도 하지만, 파이썬에서는 예외를 적절히 처리하면 코드를 더 간결하고 깔끔하게 만들 수 있습니다.

### 리스트 (Lists)

#### 리스트 생성

리스트는 단순한 순서 있는 컬렉션이며, 파이썬에서 가장 기본적인 데이터 구조입니다(다른 언어의 배열과 유사하지만, 리스트는 몇 가지 추가적인 특징을 가지고 있습니다). 리스트를 생성하는 방법:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # 3과 같습니다.
list_sum = sum(integer_list)      # 6과 같습니다.
```
#### 리스트 값 접근

대괄호([])를 사용하여 리스트의 값에 접근할 수 있습니다:

```python
x = range(10)       # 리스트 x = [0, 1, ..., 9]를 얻습니다.
zero = x[0]         # 0과 같습니다. 리스트 인덱스는 0부터 시작합니다.
one = x[1]          # 1과 같습니다.
nine = x[-1]        # 9와 같습니다. 리스트의 마지막 요소입니다.
eight = x[-2]       # 8과 같습니다. 리스트의 뒤에서 두 번째 요소입니다.
x[0] = -1           # 현재 리스트 x = [-1, 1, 2, 3, ..., 9]
```

#### 리스트 슬라이싱

대괄호([])를 사용하여 리스트를 슬라이싱할 수 있습니다:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

`in` 연산자를 사용하여 특정 요소가 리스트에 있는지 확인할 수 있습니다:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

이러한 요소 검색 방식은 효율이 낮으므로, 리스트 크기가 매우 작거나 검색 시간에 크게 신경 쓰지 않을 때만 사용하는 것이 좋습니다.

#### 리스트 이어 붙이기

파이썬에서는 두 리스트를 쉽게 이어 붙일 수 있습니다:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # 현재 x = [1,2,3,4,5,6]
```

원본 리스트 x를 수정하고 싶지 않다면, '+' 연산자를 사용하여 새로운 리스트를 만들 수 있습니다:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # 현재 y = [1, 2, 3, 4, 5, 6]; x는 변경되지 않습니다.
```

이러한 방식으로 리스트에 한 번에 하나의 요소를 추가하는 경우가 많습니다:

```python
x = [1, 2, 3]
x.append(0)           # 현재 x = [1, 2, 3, 0]
y = x[-1]             # 0과 같습니다.
z = len(x)            # 4와 같습니다.
```

#### 리스트 언패킹

리스트에 몇 개의 요소가 있는지 알고 있다면, 쉽게 리스트를 언패킹할 수 있습니다:

```python
x, y = [1, 2]         # 현재 x = 1, y = 2
```

등식 양쪽의 요소 수가 일치하지 않으면 _ValueError_가 발생하므로, 나머지 부분을 밑줄(_)로 저장하는 경우가 더 많습니다:

```python
_, y = [1, 2]         # 현재 y == 2, 첫 번째 요소는 무시됩니다.
```

### 튜플 (Tuples)

리스트와 튜플은 매우 유사하며, 리스트와의 유일한 차이점은 튜플의 요소는 수정할 수 없다는 것입니다.

#### 튜플 생성

괄호나 아무 괄호 없이 튜플을 생성할 수 있습니다:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # 현재 my_list는 [1, 3]입니다.
try:
    my_tuple[1] = 3
except TypeError:
    print "튜플을 수정할 수 없습니다."
```

튜플을 사용하면 함수에서 여러 값을 편리하게 반환할 수 있습니다:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # (5, 6)과 같습니다.
s, p = sum_and_product(5, 10) # s = 15, p = 50
```

튜플(및 리스트)은 모두 여러 요소를 동시에 할당하는 것을 지원합니다:

```python
x, y = 1, 2       # 현재 x = 1, y = 2
x, y = y, x       # 파이썬에서 두 변수의 값을 교환합니다; 현재 x = 2, y = 1
```

### 딕셔너리 (Dictionaries)

#### 딕셔너리 생성

파이썬의 또 다른 기본 데이터 구조는 딕셔너리입니다. 딕셔너리를 사용하면 키(key)를 통해 해당 값(value)을 빠르게 얻을 수 있습니다:

```python
empty_dict = {}                       # 매우 파이썬스러운 빈 딕셔너리 정의
empty_dict2 = dict()                  # 덜 파이썬스러운 빈 딕셔너리 정의
grades = { "Joel" : 80, "Tim" : 95 }  # 딕셔너리 저장
```

#### 딕셔너리 요소 검색

대괄호([])와 키를 사용하여 해당 값을 찾을 수 있습니다:

```python
joels_grade = grades["Joel"]          # 80과 같습니다.
```

찾으려는 키가 딕셔너리에 없으면 `KeyError`가 반환됩니다:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "Kate의 점수가 없습니다!"
```

`in` 연산자를 사용하여 키가 딕셔너리에 있는지 확인할 수 있습니다:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

딕셔너리에는 키가 없을 때 예외를 발생시키는 대신 설정된 기본값을 반환하는 `get` 메서드가 있습니다:

```python
joels_grade = grades.get("Joel", 0)   # 80과 같습니다.
kates_grade = grades.get("Kate", 0)   # 0과 같습니다.
no_ones_grade = grades.get("No One")  # 기본값 None을 반환합니다.
```

#### 딕셔너리 수정

대괄호([])를 사용하여 딕셔너리의 키-값 쌍을 생성하거나 수정할 수 있습니다:

```python
grades["Tim"] = 99                    # 이전 값을 대체
grades["Kate"] = 100                  # 키-값 쌍 추가
num_students = len(grades)            # 3과 같습니다.
```

우리는 종종 다음과 같이 딕셔너리를 사용하여 데이터 구조를 표현할 것입니다:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

특정 키를 찾는 것 외에도, 다음과 같이 모든 키를 조작할 수 있습니다:

```python
tweet_keys = tweet.keys()             # 키 리스트를 얻습니다.
tweet_values = tweet.values()         # 값 리스트를 얻습니다.
tweet_items = tweet.items()           # (키, 값) 튜플을 얻습니다.
"user" in tweet_keys                  # True를 반환합니다. 효율이 낮은 리스트의 `in` 연산을 사용합니다.
"user" in tweet                       # 더 파이썬스러운 방법으로, 효율적인 딕셔너리의 `in` 연산을 사용합니다.
"joelgrus" in tweet_values            # True
```

딕셔너리의 키는 고유해야 하며, 리스트는 딕셔너리의 키로 사용할 수 없습니다. 여러 부분으로 구성된 키가 필요하다면 튜플을 사용하거나, 어떤 방식으로든 키를 문자열로 변환해야 합니다.

#### 기본 딕셔너리 (Defaultdict)

문서 내 각 단어의 빈도를 세려고 할 때, 명확한 방법 중 하나는 단어를 키로, 빈도를 값으로 하는 딕셔너리를 만드는 것입니다. 그런 다음 문서를 순회하며 이미 나타난 단어를 만나면 해당 키의 값을 1 증가시키고, 처음 나타난 단어를 만나면 딕셔너리에 키-값 쌍을 추가합니다:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

물론, 다음과 같이 '먼저 행동하고 나중에 처리하는(EAFP)' 방식으로 누락된 키를 미리 처리할 수도 있습니다:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

세 번째 방법은 `get` 메서드를 사용하는 것입니다. 이 방법은 누락된 키를 처리하는 데 탁월합니다:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

기본 딕셔너리(defaultdict)는 일반 딕셔너리와 동일합니다. 유일한 차이점은 딕셔너리에서 존재하지 않는 키를 찾으려고 할 때, 기본 딕셔너리가 제공된 키를 사용하여 자동으로 키-값 쌍을 생성한다는 것입니다. 기본 딕셔너리를 사용하려면 `collections` 라이브러리를 임포트해야 합니다:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int()는 0을 생성합니다.
for word in document:
    word_counts[word] += 1
```

리스트, 일반 딕셔너리, 심지어 사용자 정의 함수에서도 기본 딕셔너리는 매우 유용합니다:

```python
dd_list = defaultdict(list)           # list()는 빈 리스트를 생성합니다.
dd_list[2].append(1)                  # 현재 dd_list는 {2: [1]}입니다.
dd_dict = defaultdict(dict)           # dict()는 빈 딕셔너리를 생성합니다.
dd_dict["Joel"]["City"] = "Seattle"   # 현재 dd_dict의 내용은 { "Joel" : { "City" : "Seattle"}}입니다.
dd_pair = defaultdict(lambda: [0, 0]) # 키에 대한 값이 리스트인 딕셔너리를 생성합니다.
dd_pair[2][1] = 1                     # 현재 dd_pair의 내용은 {2: [0,1]}입니다.
```

이 방법은 매우 유용합니다. 나중에 딕셔너리에서 특정 키 값을 얻을 때, 키의 존재 여부를 더 이상 확인할 필요가 없기 때문입니다.

### 카운터 (Counter)

카운터(Counter)는 값들의 그룹을 딕셔너리와 유사한 객체로 직접 변환할 수 있습니다. 이때 키는 그룹 내의 특정 요소가 되고, 값은 해당 요소가 나타난 횟수가 됩니다. 이는 히스토그램을 생성할 때 자주 사용됩니다:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c는 (대략) { 0 : 2, 1 : 1, 2 : 1 }입니다.
```

이렇게 하면 단어 빈도를 세는 아주 편리한 방법을 얻을 수 있습니다:

```python
word_counts = Counter(document)
```

카운터에는 `most_common`이라는 매우 유용한 메서드가 있습니다. 이를 통해 가장 빈도가 높은 몇 개의 단어와 해당 빈도를 직접 얻을 수 있습니다:

```python
# 빈도가 가장 높은 상위 10개 단어와 그 개수를 출력합니다.
for word, count in word_counts.most_common(10):
    print word, count
```

### 집합 (Sets)

파이썬의 또 다른 데이터 구조는 집합(set)입니다. 집합은 고유한 요소들의 모음입니다.
다음과 같이 집합을 생성하고 요소를 추가할 수 있습니다:

```python
s = set()
s.add(1)          # s는 { 1 }입니다.
s.add(2)          # s는 { 1, 2 }입니다.
s.add(2)          # s는 { 1, 2 }입니다.
x = len(s)        # 2와 같습니다.
y = 2 in s        # True와 같습니다.
z = 3 in s        # False와 같습니다.
```

집합을 사용하는 두 가지 주요 이유:

첫째, 집합의 `in` 연산은 매우 효율적입니다. 데이터셋에 포함된 요소의 수가 방대할 때, 리스트보다 집합 형태로 요소를 검색하는 것이 훨씬 적합합니다:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # 실패, 각 요소를 확인해야 합니다.
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # 검색 성공, 속도도 빠릅니다.
```

둘째, 집합을 사용하여 데이터 그룹에서 고유한 요소를 얻는 것이 매우 편리합니다:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

하지만 실제로는 집합의 사용 빈도가 딕셔너리나 리스트만큼 높지는 않습니다.

### 조건문

대부분의 프로그래밍 언어에서와 마찬가지로, `if`를 사용하여 조건 분기를 표현할 수 있습니다:

```python
if 1 > 2:
    message = "1이 2보다 크다면 좋을 텐데…"
elif 1 > 3:
    message = "elif는 'else if'를 의미합니다."
else:
    message = "다른 모든 것이 실패할 때 else를 사용합니다(원한다면)."
```

다음과 같이 조건 분기 문을 한 줄에 작성할 수도 있지만, 이는 거의 사용되지 않습니다:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### 반복문

#### `while` 루프

파이썬의 `while` 루프:

```python
x = 0
while x < 10:
    print x, "은 10보다 작습니다."
    x += 1
```

#### `for` 루프

더 흔하게 사용되는 것은 `for-in` 루프입니다:

```python
for x in range(10):
    print x, "은 10보다 작습니다."
```

더 복잡한 로직 표현식에서는 `continue`와 `break` 문을 사용할 수 있습니다:

```python
for x in range(10):
    if x == 3:
        continue          # 다음 루프로 바로 넘어갑니다.
    if x == 5:
        break             # 루프를 완전히 종료합니다.
    print x
```

결과는 0, 1, 2, 4가 출력됩니다.

### 참/거짓 값 (Truthiness)

파이썬의 불리언(Boolean) 변수는 다른 언어와 사용법이 비슷하지만, 유일한 차이점은 첫 글자가 항상 대문자여야 한다는 것입니다:

```python
one_is_less_than_two = 1 < 2      # True입니다.
true_equals_false = True == False # False입니다.
```

파이썬은 값이 존재하지 않음을 나타내기 위해 `None`을 사용하는데, 이는 다른 언어의 `null`과 유사합니다:

```python
x = None
print x == None        # True 출력, 덜 파이썬스럽습니다.
print x is None        # True 출력, 더 파이썬스럽습니다.
```

파이썬은 불리언 값 대신 다른 값을 사용할 수 있도록 허용하며, 다음 값들은 모두 `False`와 동등합니다:

*   False
*   None
*   [] (빈 리스트)
*   {} (빈 딕셔너리)
*   "" (빈 문자열)
*   set() (빈 집합)
*   0
*   0.0

마찬가지로 많은 `True`의 동등한 값들도 있으며, 이는 빈 리스트, 빈 문자열, 빈 딕셔너리 등을 편리하게 판단할 수 있게 해줍니다.

물론, 결과를 예측할 수 없다면 사용 중에 오류가 발생할 수도 있습니다:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

더 간단한 방법으로, 위와 동일한 효과를 냅니다:

```python
first_char = s and s[0]
```

첫 번째 값이 참이면 두 번째 값을 반환하고, 그렇지 않으면 첫 번째 값을 반환합니다.

마찬가지로, x가 숫자일 수도 있고 비어 있을 수도 있다면, 이렇게 하여 항상 숫자인 x를 얻을 수 있습니다:

```python
safe_x = x or 0
```

파이썬에는 `all` 함수도 있는데, 모든 요소가 `True`일 때 `True`를 반환합니다. `any` 함수는 하나라도 `True`인 요소가 있으면 `True`를 반환합니다. 예를 들어, 모든 요소가 '참'인 리스트에 대해 `all` 함수는 `True`를 반환하고, 그렇지 않으면 `False`를 반환합니다:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, {}는 'False'와 동등합니다.
any([True, 1, {}])          # True
all([])                     # True, 'False'와 동등한 요소가 없습니다.
any([])                     # False, 'True'와 동등한 요소가 없습니다.
```

**고급 읽기:**
[데이터 과학에서 자주 사용되는 파이썬 문법(고급)](https://philoli.com/python-tutorails-advanced-level/)
