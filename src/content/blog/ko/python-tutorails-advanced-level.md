---
title: 데이터 과학에서 자주 사용하는 Python 문법 (고급)
date: 2018-11-07 23:53:13
tags: Python
categories: 데이터 과학
mathjax: true
---
최근 며칠 동안 [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF 주소](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf))라는 책을 읽고 있었습니다. 데이터 과학 입문서로 훌륭하고 쉽게 읽을 수 있는 책이더군요. 그중 한 장에서는 Python의 기본 문법과 데이터 과학에서 자주 쓰이는 고급 문법을 소개하고 있었는데, 설명이 아주 좋고 간결하면서도 명확하다고 생각했습니다. 그래서 내용을 번역하여 나중에 참고할 수 있도록 여기에 정리해 둡니다.

[데이터 과학에서 자주 사용하는 Python 문법 (기초)](https://philoli.com/python-tutorails-basic-level/)
[데이터 과학에서 자주 사용하는 Python 문법 (고급)](https://philoli.com/python-tutorails-advanced-level/)

이 장에서는 데이터 처리에서 매우 유용한 Python 고급 문법과 기능(Python 2.7 기준)을 주로 다룹니다.

<!--more-->

### 정렬 Sorting

Python 리스트를 정렬하고 싶다면, 리스트의 `sort` 메서드를 사용할 수 있습니다. 원본 리스트를 변경하지 않고 새로운 정렬된 리스트를 얻고 싶다면 `sorted` 함수를 사용하면 됩니다.

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x는 변하지 않음
x.sort()            # 현재 x = [1,2,3,4]
# `sort`나 `sorted`는 기본적으로 리스트를 오름차순으로 정렬합니다.
```

내림차순으로 정렬하려면 `reverse = True` 매개변수를 지정하면 됩니다.

리스트를 특정 키워드를 기준으로 정렬하도록 사용자 정의 정렬 함수를 사용할 수도 있습니다.

```python
# 절댓값을 기준으로 내림차순 정렬
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# 단어 출현 횟수를 기준으로 내림차순 정렬
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### 리스트 컴프리헨션 List Comprehensions

리스트에서 특정 요소를 추출하여 새 리스트를 만들거나, 일부 요소의 값을 변경하거나, 이 두 가지를 모두 하고 싶을 때가 많습니다. Python에서 이런 경우에 주로 사용하는 방법은 **리스트 컴프리헨션(List Comprehensions)**입니다.

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

비슷하게 리스트를 딕셔너리나 집합으로 만들 수도 있습니다.

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

리스트의 요소를 사용하지 않아도 된다면, 밑줄(`_`)을 변수처럼 사용할 수 있습니다.

```python
zeroes = [0 for _ in even_numbers] # even_numbers 리스트와 같은 길이로 생성된다.
```

리스트 컴프리헨션은 중첩 `for` 루프를 지원합니다.

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 총 100쌍: (0,0) (0,1) ... (9,8), (9,9)
```

뒤에 오는 `for` 루프는 앞선 `for` 루프의 결과를 사용할 수 있습니다.

```python
increasing_pairs = [(x, y)                      # x < y인 데이터 쌍만 포함
                    for x in range(10)          # range(lo, hi)는 다음과 같다:
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
앞으로 리스트 컴프리헨션을 자주 사용하게 될 것입니다.

### 제너레이터와 이터레이터 Generators and Iterators

리스트는 자칫하면 매우 거대해질 수 있다는 문제가 있습니다. 예를 들어 `range(1000000)`은 백만 개의 요소를 가진 리스트를 생성합니다. 만약 한 번에 하나의 데이터만 처리한다면, 시간이 너무 오래 걸리거나 메모리가 부족해질 수도 있습니다. 그런데 실제로 앞부분의 몇 개의 데이터만 필요한 경우, 나머지 연산은 불필요하게 됩니다.

이럴 때 제너레이터(Generator)를 사용하면 필요한 데이터만 그때그때 생성하여 반복 처리할 수 있습니다. 함수와 `yield` 표현식을 사용하여 제너레이터를 만들 수 있습니다.

```python
def lazy_range(n):
    """range의 게으른 버전"""
    i = 0
    while i < n:
        yield i
        i += 1
```

역자 주:
제너레이터는 특별한 종류의 이터레이터이며, `yield`는 제너레이터가 이터레이션을 구현하는 핵심입니다. `yield`는 제너레이터 실행의 일시 중지 및 재개 지점 역할을 하며, `yield` 표현식에 값을 할당할 수도 있고, `yield` 표현식의 값을 반환할 수도 있습니다. `yield` 문을 포함하는 모든 함수는 제너레이터라고 불립니다. 제너레이터는 실행을 멈출 때 현재 상태를 저장하고, 다음 실행 시 그 상태를 복원하여 다음 이터레이션 값을 얻습니다. 리스트 이터레이션은 많은 메모리 공간을 차지하지만, 제너레이터는 거의 하나의 주소 공간만 차지하므로 메모리를 절약할 수 있습니다.

다음 루프는 `yield`에서 값을 하나씩 소비하여 모두 소진할 때까지 반복합니다.

```python
for i in lazy_range(10):
    do_something_with(i)
```

(사실 Python에는 위 `_lazy_range_`와 같은 효과를 내는 `xrange` 함수가 내장되어 있으며, Python 3에서는 `range`가 이 `lazy`한 동작을 합니다.) 이는 무한 시퀀스를 만들 수 있다는 것을 의미합니다.

```python
def natural_numbers():
    """1, 2, 3, ...을 반환"""
    n = 1
    while True:
        yield n
        n += 1
```

하지만 이런 식으로 종료 조건이 없는 루프는 사용하지 않는 것이 좋습니다.

**TIP**
> 제너레이터를 사용하여 이터레이션하는 한 가지 단점은, 요소를 처음부터 끝까지 한 번만 이터레이션할 수 있다는 것입니다. 여러 번 이터레이션하려면 매번 새로운 제너레이터를 생성하거나 리스트를 사용해야 합니다.

제너레이터를 만드는 두 번째 방법은 괄호 안의 컴프리헨션 표현식을 이용하는 것입니다.

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

딕셔너리의 `items()` 메서드가 딕셔너리의 모든 키-값 쌍을 리스트로 반환한다는 것을 알고 있지만, 대부분의 경우 `iteritems()` 제너레이터 메서드를 사용하여 이터레이션하며, 이 메서드는 한 번에 하나의 키-값 쌍만 생성하고 반환합니다.

### 무작위 Randomness
데이터 과학을 공부하다 보면 무작위 숫자를 생성해야 할 일이 많습니다. `random` 모듈을 임포트하면 이 기능을 사용할 수 있습니다.

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random()은 무작위 숫자를 생성한다.
# 0.7579544029403025,         # 무작위 숫자는 0과 1 사이의 표준화된 값이다.
# 0.420571580830845,          # 이 함수는 무작위 숫자를 생성하는 데 가장 자주 사용된다.
# 0.25891675029296335]
```

재현 가능한 결과를 얻고 싶다면, `random` 모듈이 `random.seed`로 설정된 내부 상태를 기반으로 의사 무작위(즉, 결정론적) 숫자를 생성하도록 할 수 있습니다.

```python
random.seed(10)           # 시드를 10으로 설정
print random.random()     # 0.57140259469
random.seed(10)           # 시드를 다시 10으로 설정
print random.random()     # 다시 0.57140259469
```

때때로 특정 범위 내의 무작위 숫자를 생성하기 위해 `random.randrange` 함수를 사용하기도 합니다.

```python
random.randrange(10)      # range(10) = [0, 1, ..., 9] 중에서 무작위로 하나를 선택한다.
random.randrange(3, 6)    # range(3, 6) = [3, 4, 5] 중에서 무작위로 하나를 선택한다.
```

`random.shuffle`처럼 때때로 유용하게 사용되는 다른 메서드들도 있습니다. `random.shuffle`은 리스트의 요소 순서를 뒤섞어 무작위로 재배열된 리스트를 생성합니다.

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (결과는 다를 수 있습니다)
```

리스트에서 무작위로 하나의 요소를 선택하고 싶다면 `random.choice` 메서드를 사용할 수 있습니다.

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # (저는 "Bob"을 받았습니다)
```

무작위 시퀀스를 생성하면서도 원본 리스트를 뒤섞고 싶지 않다면 `random.sample` 메서드를 사용할 수 있습니다.

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

여러 번 호출하여 여러 개의 무작위 샘플을 선택할 수도 있습니다(중복 허용).

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### 정규 표현식 Regular Expressions

정규 표현식은 텍스트 검색에 사용되며, 다소 복잡하지만 매우 유용하여 정규 표현식만을 다루는 수많은 책이 있을 정도입니다. 구체적인 설명은 정규 표현식을 실제로 사용할 때 다루기로 하고, 여기서는 Python에서 정규 표현식을 사용하는 몇 가지 예시를 살펴보겠습니다.

```python
import re
print all([                                 # 다음 표현식은 모두 true를 반환한다. 그 이유는 다음과 같다.
    not re.match("a", "cat"),               # * 'cat'은 'a'로 시작하지 않는다.
    re.search("a", "cat"),                  # * 'cat'에는 문자 'a'가 포함되어 있다.
    not re.search("c", "dog"),              # * 'dog'에는 문자 'c'가 포함되어 있지 않다.
    3 == len(re.split("[ab]", "carbs")),    # * 'a' 또는 'b'를 기준으로 단어를 세 부분으로 나눈다: ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * 숫자를 하이픈으로 대체
    ])                                      # 출력 결과: True
```

### 객체 지향 프로그래밍 Object-Oriented Programming

다른 많은 언어와 마찬가지로, Python은 데이터를 캡슐화하는 클래스와 해당 데이터를 조작하는 함수를 정의할 수 있도록 합니다. 코드를 더 명확하고 간결하게 만들기 위해 때때로 이를 사용합니다. 많은 주석이 달린 예시를 통해 설명하는 것이 가장 쉬울 것입니다. Python에 내장된 집합(Set)이 없다고 가정해 봅시다. 우리는 우리만의 `Set` 클래스를 만들고 싶을 수 있습니다. 그렇다면 이 클래스는 어떤 기능을 갖춰야 할까요? 예를 들어 `Set`이 주어졌을 때, 항목을 추가하고, 항목을 삭제하며, 특정 값을 포함하는지 확인할 수 있어야 합니다. 따라서 이러한 모든 기능을 클래스의 멤버 함수로 만들 것입니다. 이렇게 하면 `Set` 객체 뒤에 점(.)을 사용하여 이러한 멤버 함수에 접근할 수 있습니다.

```python
# 관례에 따라 클래스 이름은 _PascalCase_로 지정합니다.
class Set:
    # 이들은 멤버 함수입니다.
    # 각 멤버 함수는 첫 번째 매개변수로 "self"를 가집니다(또 다른 관례).
    # "self"는 현재 사용 중인 특정 Set 객체를 가리킵니다.

    def __init__(self, values=None):
        """이것은 생성 함수입니다.
        새 Set을 생성할 때마다 이 함수가 호출됩니다.
        다음과 같이 호출할 수 있습니다.
        s1 = Set() # 빈 집합
        s2 = Set([1,2,2,3]) # 지정된 값으로 집합 초기화"""
        self.dict = {} # Set의 각 인스턴스는 자신만의 dict 속성을 가집니다.
        # 우리는 이 속성을 사용하여 각 멤버를 추적합니다.
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """이것은 Set 객체의 문자열 표현입니다.
        Python 명령 창에 문자열을 입력하거나 str() 메서드를 사용하여 객체에 문자열을 전달할 수 있습니다."""
        return "Set: " + str(self.dict.keys())

    # self.dict의 키가 되고 키 값을 True로 설정하여 멤버십을 나타냅니다.
    def add(self, value):
        self.dict[value] = True

    # 매개변수가 딕셔너리의 키로 존재하면, 해당 값은 Set에 있는 것입니다.
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

그러면 `Set`을 다음과 같이 사용할 수 있습니다.

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### 함수형 도구 Functional Tools

#### 부분 함수 partial

함수를 전달할 때, 때로는 특정 함수의 일부 기능만을 사용하여 새로운 함수를 만들고 싶을 때가 있습니다. 간단한 예를 들어, 두 개의 변수를 가진 함수가 있다고 가정해 봅시다.

```python
def exp(base, power):
    return base ** power
```

이를 이용하여 변수 하나를 입력받아 밑이 2인 거듭제곱 함수, 즉 `exp(2, power)`의 결과를 출력하는 함수를 만들고 싶습니다.

물론 `def`를 사용하여 새로운 함수를 정의할 수도 있지만, 이는 그리 현명해 보이지 않습니다.

```python
def two_to_the(power):
  return exp(2, power)
```

더 현명한 방법은 `functools.partial` 메서드를 활용하는 것입니다.

```python
from functools import partial
two_to_the = partial(exp, 2)      # 현재 함수는 변수 하나만 가진다.
print two_to_the(3)               # 8
```

이름을 지정하여 `partial` 메서드로 다른 매개변수도 채울 수 있습니다.

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

함수 중간에 매개변수를 무분별하게 사용하려고 하면 프로그램이 빠르게 복잡해지므로, 이러한 행동은 가능한 한 피하는 것이 좋습니다.

#### 맵 map

우리는 때때로 리스트 컴프리헨션의 기능을 대체하기 위해 `map`, `reduce`, `filter`와 같은 함수들을 사용하기도 합니다.

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # 위와 동일
list_doubler = partial(map, double)     # 이 함수는 리스트의 값을 두 배로 만든다.
twice_xs = list_doubler(xs)             # 역시 [2, 4, 6, 8]
```

`map` 메서드는 여러 매개변수를 가진 함수를 여러 리스트에 매핑하는 데도 사용할 수 있습니다.

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### 필터 filter

비슷하게, `filter`는 리스트 컴프리헨션의 `if`와 같은 기능을 구현합니다.

```python
def is_even(x):
    """x가 짝수이면 True를, 홀수이면 False를 반환한다."""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # 위와 동일
list_evener = partial(filter, is_even)    # 이 함수는 필터링 기능을 구현한다.
x_evens = list_evener(xs)                 # 역시 [2, 4]
```

#### 리듀스 reduce

`reduce` 메서드는 리스트의 첫 번째와 두 번째 요소를 계속해서 결합하고, 그 결과를 세 번째 요소와 결합하는 과정을 반복하여 최종적으로 하나의 결과만 얻을 때까지 수행합니다.

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # 이 함수는 리스트를 축소하는 기능을 구현한다.
x_product = list_product(xs)              # 역시 24
```

### 열거 enumerate

가끔 리스트를 순회하면서 요소와 그 인덱스를 동시에 사용해야 하는 경우가 있습니다.

```python
# Python스럽지 않음 (간결하고 우아하지 않음)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# 역시 Python스럽지 않음 (간결하고 우아하지 않음)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

가장 간결한 방법은 `enumerate` 열거 메서드를 사용하여 `(인덱스, 요소)` 형태의 튜플을 생성하는 것입니다.

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

비슷하게, 인덱스만 사용하고 싶다면:

```python
for i in range(len(documents)): do_something(i)   # 간결하지 않음
for i, _ in enumerate(documents): do_something(i) # 간결함
```

이 메서드는 앞으로 자주 사용하게 될 것입니다.

### 집(zip)과 인자 언패킹 zip and Argument Unpacking

#### 집 zip

우리는 두 개 이상의 리스트를 `zip`으로 묶는 작업을 자주 합니다. `zip`은 여러 리스트를 해당 요소들로 구성된 튜플들의 단일 리스트 형태로 변환하는 것입니다.

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # [('a', 1), ('b', 2), ('c', 3)]을 얻는다.
```

#### 인자 언패킹 Argument Unpacking

여러 리스트의 길이가 서로 다르면, `zip` 압축 과정은 가장 짧은 리스트의 끝에서 멈춥니다. 또한, 다소 특이한 "unzip" 압축 해제 기법을 사용하여 리스트를 해제할 수도 있습니다.

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

여기서 별표(`*`)는 인자 언패킹을 수행하며, `pairs`의 요소들을 `zip` 함수의 개별 인자로 사용합니다. 다음 호출 방식은 동일한 효과를 가집니다.

```python
zip(('a', 1), ('b', 2), ('c', 3))  # [('a','b','c'), ('1','2','3')]을 반환한다.
```

인자 언패킹은 다른 함수와 함께 사용할 수도 있습니다.

```python
def add(a, b): return a + b

add(1, 2)           # 3을 반환
add([1, 2])         # 오류 발생
add(*[1, 2])        # 3을 반환
```

실용성이 크게 높진 않지만, 코드를 간결하게 만드는 좋은 기술입니다.

### 가변 길이 인자 전달 args and kwargs

고차 함수를 하나 만든다고 가정해 봅시다. 이 함수는 기존 함수를 입력받아 새로운 함수를 반환하는데, 새 함수는 기존 함수의 결과에 2를 곱하는 함수입니다.

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

예시 실행:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

하지만 전달되는 매개변수가 하나 이상이면 이 방법은 제대로 작동하지 않습니다.

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # 오류 발생 TypeError: g() takes exactly 1 argument (2 given)
```

따라서 우리는 임의의 수의 매개변수를 수용할 수 있는 함수를 지정하고, 인자 언패킹을 활용하여 여러 매개변수를 전달해야 합니다. 이는 다소 마법처럼 보일 수 있습니다.

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# 출력 결과:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

함수를 이렇게 정의하면, `args`(arguments의 약어)는 이름 없는 매개변수를 담은 튜플이고, `kwargs`(keyword arguments의 약어)는 이름이 있는 매개변수를 담은 딕셔너리입니다.

이들은 전달되는 매개변수가 리스트(또는 튜플)나 배열인 경우에도 사용할 수 있습니다.

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

이를 다양한 방식으로 기이하게 사용할 수도 있지만, 우리는 고차 함수에 가변 길이 매개변수를 전달하는 문제를 해결하는 데에만 사용할 것입니다.

```python
def doubler_correct(f):
    """f가 무엇이든 효과적으로 작동한다."""
    def g(*args, **kwargs):
        """매개변수가 몇 개든, 이 함수는 매개변수를 f에 올바르게 전달한다."""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### 데이터 과학의 세계에 오신 것을 환영합니다!

딩! 새로운 세계의 문을 또 하나 열었으니, 이제 신나게 탐험해 보세요!

**관련 글:**

[데이터 과학에서 자주 사용하는 Python 문법 (기초)](https://philoli.com/python-tutorails-basic-level)
