---
title: Cú pháp Python thường dùng trong Khoa học dữ liệu (Nâng cao)
date: 2018-11-07 23:53:13
tags: Python
categories: Khoa học dữ liệu
mathjax: true
---
Mấy hôm nay tôi đang đọc cuốn [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([link PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), đây là một cuốn sách nhập môn khoa học dữ liệu tuyệt vời, dễ hiểu và gần gũi. Trong đó có một chương giới thiệu về cú pháp cơ bản của Python và các cú pháp nâng cao thường dùng trong khoa học dữ liệu. Tôi thấy phần giới thiệu này rất hay, ngắn gọn và rõ ràng, nên đã dịch lại và đưa lên đây để tiện tham khảo.
[Cú pháp Python thường dùng trong Khoa học dữ liệu (Cơ bản)](https://philoli.com/python-tutorails-basic-level/)
[Cú pháp Python thường dùng trong Khoa học dữ liệu (Nâng cao)](https://philoli.com/python-tutorails-advanced-level/)

Chương này tập trung giới thiệu các cú pháp và tính năng nâng cao của Python (dựa trên Python 2.7) rất hữu ích trong xử lý dữ liệu.

<!--more-->

### Sắp xếp Sorting

Nếu bạn muốn sắp xếp một danh sách (list) trong Python, bạn có thể sử dụng phương thức `sort` của list đó. Nếu bạn không muốn thay đổi danh sách gốc, hãy dùng hàm `sorted` để trả về một danh sách mới đã được sắp xếp:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x không thay đổi
x.sort()            # hiện tại x = [1,2,3,4]
# sort hoặc sorted mặc định sắp xếp danh sách theo thứ tự tăng dần.
```

Nếu muốn sắp xếp từ lớn đến bé, bạn có thể thêm tham số `reverse = True`.

Bạn cũng có thể tùy chỉnh hàm sắp xếp, để danh sách được sắp xếp theo một tiêu chí (key) cụ thể:

```python
# Sắp xếp theo giá trị tuyệt đối từ lớn đến bé
x = sorted([-4,1,-2,3], key=abs, reverse=True) # là [-4,3,-2,1]
# Sắp xếp theo số lần xuất hiện của từ từ lớn đến bé
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Cú pháp tạo danh sách nhanh List Comprehensions

Chúng ta thường xuyên gặp phải tình huống muốn trích xuất một vài phần tử cụ thể từ một danh sách để tạo danh sách mới, hoặc thay đổi giá trị của một số phần tử, hoặc cả hai. Trong Python, cách làm thông dụng cho việc này là sử dụng List Comprehensions (cú pháp tạo danh sách nhanh):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Tương tự, bạn có thể chuyển đổi danh sách thành từ điển (dictionary) hoặc tập hợp (set):

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Nếu bạn không cần sử dụng các phần tử trong danh sách, bạn có thể dùng dấu gạch dưới `_` làm biến tạm:

```python
zeroes = [0 for _ in even_numbers] # Có cùng độ dài với danh sách even_numbers
```

List comprehensions hỗ trợ nhiều vòng lặp `for` lồng nhau:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Tổng cộng 100 cặp: (0,0) (0,1) ... (9,8), (9,9)
```

Vòng lặp `for` phía sau có thể sử dụng kết quả từ vòng lặp `for` phía trước:

```python
increasing_pairs = [(x, y)                      # Chỉ chứa các cặp dữ liệu có x < y
                    for x in range(10)          # range(lo, hi) bằng
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Chúng ta sẽ thường xuyên sử dụng list comprehensions trong tương lai.

### Bộ tạo và Bộ lặp Generators and Iterators

Một vấn đề của danh sách là chúng có thể trở nên rất lớn nếu không cẩn thận. Ví dụ, `range(1000000)` sẽ tạo ra một danh sách chứa một triệu phần tử. Nếu chỉ xử lý từng dữ liệu một, quá trình này có thể mất quá nhiều thời gian (hoặc hết bộ nhớ). Trong thực tế, bạn có thể chỉ cần dùng đến vài dữ liệu đầu tiên, khi đó các phép tính khác trở nên thừa thãi.

Các generator (bộ tạo) cho phép bạn chỉ lặp qua những dữ liệu cần thiết. Bạn có thể tạo một generator bằng cách sử dụng hàm và biểu thức `yield`:

```python
def lazy_range(n):
    """một phiên bản "lười biếng" của range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

**Người dịch bổ sung:**
Generator cũng là một loại iterator (bộ lặp) đặc biệt, và `yield` là chìa khóa để generator thực hiện việc lặp. Nó đóng vai trò là điểm tạm dừng và tiếp tục thực thi của generator, cho phép gán giá trị cho biểu thức `yield` và cũng trả về giá trị của biểu thức `yield`. Bất kỳ hàm nào chứa câu lệnh `yield` đều được gọi là generator. Khi thoát khỏi generator, nó sẽ lưu trạng thái thực thi hiện tại và khôi phục lại khi được gọi lần tiếp theo để lấy giá trị lặp kế tiếp. Sử dụng cách lặp bằng danh sách sẽ chiếm nhiều không gian địa chỉ, trong khi sử dụng generator chỉ chiếm khoảng một không gian địa chỉ, từ đó đạt được hiệu quả tiết kiệm bộ nhớ.

Vòng lặp dưới đây sẽ tiêu thụ từng giá trị một từ `yield` cho đến khi hết:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Thực tế, Python có sẵn một hàm thực hiện hiệu ứng tương tự như `lazy_range` ở trên. Trong Python 2, đó là `xrange`; trong Python 3, `range` đã được thiết kế để hoạt động theo cách "lười biếng" này.) Điều này có nghĩa là bạn có thể tạo ra một chuỗi vô hạn:

```python
def natural_numbers():
    """trả về 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Tuy nhiên, không nên sử dụng các câu lệnh không có logic thoát khỏi vòng lặp như vậy.

**MẸO**
> Một nhược điểm khi sử dụng generator để lặp là bạn chỉ có thể lặp qua các phần tử từ đầu đến cuối một lần duy nhất. Nếu muốn lặp nhiều lần, bạn chỉ có thể tạo generator mới mỗi lần hoặc sử dụng danh sách.

Cách thứ hai để tạo generator: sử dụng biểu thức comprehension đặt trong dấu ngoặc đơn:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Chúng ta biết rằng phương thức `items()` trong từ điển sẽ trả về một danh sách tất cả các cặp khóa-giá trị. Nhưng trong nhiều trường hợp, chúng ta sử dụng phương thức generator `iteritems()` để lặp, nó sẽ tạo và trả về từng cặp khóa-giá trị một.

### Ngẫu nhiên Randomness
Khi học khoa học dữ liệu, chúng ta sẽ thường xuyên cần tạo số ngẫu nhiên. Chỉ cần import module `random` là có thể sử dụng:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() tạo số ngẫu nhiên
# 0.7579544029403025,         # Số ngẫu nhiên được chuẩn hóa, nằm trong khoảng từ 0 đến 1
# 0.420571580830845,          # Hàm này là hàm thường dùng nhất để tạo số ngẫu nhiên
# 0.25891675029296335]
```

Nếu bạn muốn có kết quả có thể tái tạo, bạn có thể thiết lập trạng thái nội bộ của module `random` bằng `random.seed` để tạo ra các số giả ngẫu nhiên (tức là có tính xác định):

```python
random.seed(10)           # đặt seed là 10
print random.random()     # 0.57140259469
random.seed(10)           # đặt lại seed là 10
print random.random()     # lại là 0.57140259469
```

Đôi khi chúng ta cũng sử dụng hàm `random.randrange` để tạo một số ngẫu nhiên trong một phạm vi cụ thể:

```python
random.randrange(10)      # Chọn ngẫu nhiên một số từ range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Chọn ngẫu nhiên một số từ range(3, 6) = [3, 4, 5]
```

Ngoài ra còn có một số phương thức đôi khi rất tiện lợi, ví dụ `random.shuffle` sẽ xáo trộn thứ tự các phần tử trong một danh sách, tạo ra một danh sách được sắp xếp ngẫu nhiên:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (kết quả bạn nhận được có thể khác)
```

Nếu muốn chọn ngẫu nhiên một phần tử từ một danh sách, bạn có thể sử dụng phương thức `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Tôi nhận được "Bob"
```

Nếu bạn muốn tạo ra một chuỗi ngẫu nhiên mà không làm xáo trộn danh sách gốc, bạn có thể sử dụng phương thức `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Bạn có thể chọn nhiều mẫu ngẫu nhiên (có lặp lại) bằng cách gọi nhiều lần:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Biểu thức chính quy Regular Expressions

Biểu thức chính quy (Regular Expressions) được dùng để tìm kiếm văn bản, hơi phức tạp nhưng cực kỳ hữu ích, đến mức có rất nhiều sách chuyên về chúng. Chúng ta sẽ giải thích chi tiết khi gặp chúng, dưới đây là một số ví dụ về cách sử dụng biểu thức chính quy trong Python:

```python
import re
print all([                                 # Tất cả các biểu thức dưới đây đều trả về true, vì
    not re.match("a", "cat"),               # * 'cat' không bắt đầu bằng 'a'
    re.search("a", "cat"),                  # * 'cat' chứa chữ cái 'a'
    not re.search("c", "dog"),              # * 'dog' không chứa chữ cái 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Tách từ thành ba phần ['c','r','s'] dựa trên 'a' hoặc 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Thay thế các chữ số bằng dấu gạch ngang
    ])                                      # Kết quả: True
```

### Lập trình hướng đối tượng Object-Oriented Programming

Giống như nhiều ngôn ngữ khác, Python cho phép bạn định nghĩa các lớp (class) để đóng gói dữ liệu và các hàm (function) để thao tác với chúng. Đôi khi chúng ta sử dụng chúng để làm cho mã của mình rõ ràng và gọn gàng hơn. Cách đơn giản nhất để giải thích chúng có lẽ là xây dựng một ví dụ với nhiều chú thích. Giả sử không có kiểu tập hợp (set) tích hợp sẵn trong Python, chúng ta có thể muốn tạo lớp `Set` của riêng mình. Vậy lớp này nên có những chức năng gì? Ví dụ, với một `Set`, chúng ta cần có khả năng thêm phần tử, xóa phần tử và kiểm tra xem nó có chứa một giá trị cụ thể nào đó hay không. Vì vậy, chúng ta sẽ tạo tất cả các chức năng này làm các phương thức thành viên của lớp. Bằng cách đó, chúng ta có thể truy cập các phương thức thành viên này bằng dấu chấm sau đối tượng `Set`:

```python
# Theo quy ước, chúng ta đặt tên lớp theo kiểu PascalCase
class Set:
    # Đây là các phương thức thành viên
    # Mỗi phương thức thành viên đều có một tham số "self" đứng đầu (một quy ước khác)
    # “self” tương ứng với đối tượng Set cụ thể đang được sử dụng

    def __init__(self, values=None):
        """Đây là hàm khởi tạo
        Hàm này được gọi mỗi khi bạn tạo một Set mới
        Có thể gọi như sau
        s1 = Set() # Tập hợp rỗng
        s2 = Set([1,2,2,3]) # Khởi tạo tập hợp với các giá trị đã cho"""
        self.dict = {} # Mỗi thể hiện của Set đều có thuộc tính dict riêng
        # Chúng ta sử dụng thuộc tính này để theo dõi từng thành viên
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Đây là biểu diễn chuỗi của đối tượng Set
        Bạn có thể xem bằng cách gõ đối tượng vào cửa sổ lệnh Python hoặc dùng phương thức str()"""
        return "Set: " + str(self.dict.keys())

    # Chúng ta sẽ biểu thị tư cách thành viên bằng cách biến giá trị thành khóa trong self.dict và đặt giá trị của khóa đó là True
    def add(self, value):
        self.dict[value] = True

    # Nếu tham số là một khóa trong từ điển, thì giá trị tương ứng nằm trong Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Sau đó, chúng ta có thể sử dụng `Set` như sau:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Công cụ hàm Functional Tools

#### Hàm partial

Khi truyền hàm, đôi khi chúng ta muốn sử dụng một phần chức năng của một hàm để tạo ra một hàm mới. Ví dụ đơn giản, giả sử chúng ta có một hàm với hai biến:

```python
def exp(base, power):
    return base ** power
```

Chúng ta muốn dùng nó để tạo một hàm mới, hàm này nhận một biến đầu vào và trả về kết quả của hàm lũy thừa `exp(2, power)` với cơ số là 2.

Tất nhiên, chúng ta có thể định nghĩa một hàm mới bằng `def`, dù cách này có vẻ không được thông minh lắm:

```python
def two_to_the(power):
  return exp(2, power)
```

Cách thông minh hơn là sử dụng phương thức `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Hàm hiện tại chỉ có một biến
print two_to_the(3)               # 8
```

Nếu đã chỉ định tên, bạn cũng có thể sử dụng phương thức `partial` để điền các tham số khác:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Nếu bạn cố gắng sử dụng các tham số một cách lộn xộn giữa chừng trong hàm, chương trình sẽ nhanh chóng trở nên khó hiểu, vì vậy hãy cố gắng tránh hành vi này.

#### Ánh xạ map

Đôi khi chúng ta cũng sử dụng các hàm như `map`, `reduce`, và `filter` như những lựa chọn thay thế cho chức năng của list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Đồng nhất với trên
list_doubler = partial(map, double)     # Hàm có chức năng nhân đôi danh sách
twice_xs = list_doubler(xs)             # Cũng là [2, 4, 6, 8]
```

Phương thức `map` cũng có thể được dùng để ánh xạ một hàm có nhiều tham số tới nhiều danh sách:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Bộ lọc filter

Tương tự, `filter` thực hiện chức năng của `if` trong list comprehensions:

```python
def is_even(x):
    """Trả về True nếu x là số chẵn, False nếu x là số lẻ"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Đồng nhất với trên
list_evener = partial(filter, is_even)    # Hàm này thực hiện chức năng lọc
x_evens = list_evener(xs)                 # Cũng là [2, 4]
```

#### Rút gọn reduce

Phương thức `reduce` liên tục kết hợp phần tử thứ nhất và thứ hai trong danh sách, sau đó kết hợp kết quả với phần tử thứ ba, và lặp lại quá trình này cho đến khi nhận được một kết quả duy nhất:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Hàm này thực hiện việc rút gọn một danh sách
x_product = list_product(xs)              # Cũng là 24
```

### Liệt kê enumerate

Đôi khi, chúng ta gặp tình huống cần duyệt qua một danh sách và đồng thời sử dụng cả phần tử lẫn chỉ mục của nó:

```python
# Không Pythonic lắm (không gọn gàng và tao nhã)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Cũng không Pythonic lắm (không gọn gàng và tao nhã)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Cách gọn gàng nhất là sử dụng phương thức `enumerate` để tạo ra một tuple `(index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Tương tự, nếu chỉ muốn sử dụng chỉ mục:

```python
for i in range(len(documents)): do_something(i)   # Không gọn gàng
for i, _ in enumerate(documents): do_something(i) # Gọn gàng
```

Chúng ta sẽ thường xuyên sử dụng phương pháp này sau này.

### Nén và giải nén tham số zip and Argument Unpacking

#### Nén zip

Chúng ta thường xuyên thực hiện nén (zip) hai hoặc nhiều danh sách. Nén (zip) thực chất là chuyển đổi nhiều danh sách thành một danh sách duy nhất chứa các tuple tương ứng:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Kết quả là [('a', 1), ('b', 2), ('c', 3)]
```

#### Giải nén tham số Argument Unpacking

Nếu các danh sách có độ dài không đồng nhất, quá trình nén sẽ dừng lại ở cuối danh sách ngắn nhất. Bạn cũng có thể sử dụng một thủ thuật "giải nén" (unzip) khá độc đáo để giải nén danh sách:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Trong đó, dấu sao `*` được dùng để thực hiện giải nén tham số, nó sẽ dùng các phần tử của `pairs` làm các tham số riêng lẻ cho hàm `zip`. Cách gọi dưới đây có hiệu quả tương đương:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Trả về [('a','b','c'), ('1','2','3')]
```

Giải nén tham số cũng có thể được sử dụng cùng với các hàm khác:

```python
def add(a, b): return a + b

add(1, 2)           # Trả về 3
add([1, 2])         # Báo lỗi
add(*[1, 2])        # Trả về 3
```

Mặc dù không quá thực dụng, nhưng đây là một thủ thuật hay giúp mã gọn gàng hơn.

### Truyền tham số không giới hạn args and kwargs

Giả sử chúng ta muốn tạo một hàm bậc cao (higher-order function), hàm này nhận một hàm cũ làm đầu vào và trả về một hàm mới, trong đó hàm mới là hàm cũ nhân với 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Chạy ví dụ:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Tuy nhiên, phương pháp này sẽ không còn hiệu quả nếu số lượng tham số được truyền vào lớn hơn một:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Báo lỗi TypeError: g() takes exactly 1 argument (2 given)
```

Vì vậy, chúng ta cần định nghĩa một hàm có khả năng nhận bất kỳ số lượng tham số nào, sau đó sử dụng giải nén tham số để truyền nhiều tham số. Điều này có vẻ hơi "phép thuật" một chút:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Kết quả xuất ra:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Khi chúng ta định nghĩa một hàm như thế này, `args` (viết tắt của arguments) là một tuple chứa các tham số không có tên, còn `kwargs` (viết tắt của keyword arguments) là một từ điển chứa các tham số có tên (keyword arguments).

Chúng cũng có thể được sử dụng khi các tham số được truyền là danh sách (hoặc tuple) hoặc mảng:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Bạn có thể sử dụng nó kết hợp với nhiều phương pháp kỳ lạ khác, nhưng chúng ta sẽ chỉ dùng nó để giải quyết vấn đề truyền tham số không giới hạn độ dài cho các hàm bậc cao:

```python
def doubler_correct(f):
    """Hoạt động hiệu quả bất kể f là gì"""
    def g(*args, **kwargs):
        """Bất kể có bao nhiêu tham số, hàm này đều có thể truyền đúng cách cho f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Chào mừng đến với thế giới khoa học dữ liệu!

Ding! Chúc mừng bạn đã mở ra cánh cửa đến một thế giới mới! Giờ thì hãy vui vẻ khám phá thôi nào~

**Đọc thêm:**

[Cú pháp Python thường dùng trong Khoa học dữ liệu (Cơ bản)](https://philoli.com/python-tutorails-basic-level)
