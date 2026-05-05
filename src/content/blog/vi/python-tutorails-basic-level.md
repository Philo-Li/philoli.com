---
title: Cú pháp Python thường dùng trong Khoa học Dữ liệu (Cơ bản)
date: 2018-11-07 20:53:13
tags: Python
categories: Khoa học dữ liệu
mathjax: true
--- 

Hai hôm nay, tôi đang đọc cuốn [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([Địa chỉ PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), đây là một cuốn sách nhập môn khoa học dữ liệu khá hay và dễ hiểu. Trong đó, có một chương giới thiệu về cú pháp cơ bản của Python và các cú pháp nâng cao thường dùng trong khoa học dữ liệu. Tôi thấy phần giới thiệu này rất tốt, súc tích và rõ ràng, nên đã dịch lại và đăng lên đây để tiện tham khảo.  
[Cú pháp Python thường dùng trong Khoa học Dữ liệu (Cơ bản)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Cú pháp Python thường dùng trong Khoa học Dữ liệu (Nâng cao)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Chương này tập trung giới thiệu các cú pháp và tính năng cơ bản của Python (dựa trên Python 2.7) rất hữu ích trong xử lý dữ liệu.

<!--more-->

### [](#空格格式 "Định dạng Khoảng trắng")Định dạng Khoảng trắng

Nhiều ngôn ngữ sử dụng dấu ngoặc để kiểm soát các khối mã, nhưng Python lại dùng thụt lề:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Dòng đầu tiên của vòng lặp "for i"  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Dòng đầu tiên của vòng lặp "for j"  
        print i + j  # Dòng cuối cùng của vòng lặp "for j"  
    print i          # Dòng cuối cùng của vòng lặp "for i"  
print "done looping"  
```

Điều này giúp mã Python rất dễ đọc, nhưng cũng có nghĩa là bạn phải luôn chú ý đến định dạng. Các khoảng trắng trong dấu ngoặc sẽ bị bỏ qua, điều này hữu ích khi viết các biểu thức dài:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Và cũng làm cho mã dễ đọc hơn:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#多行语句 "Câu lệnh Nhiều dòng")Câu lệnh Nhiều dòng

Bạn có thể sử dụng dấu gạch ngược để nối hai dòng bị ngắt (cách này ít khi được dùng):  

```python
two_plus_three = 2 + \
                 3  
```

### [](#模块-Modules "Module")Module

Dù là các module có sẵn của Python hay các module bên thứ ba bạn tải về, tất cả đều cần được import thủ công trước khi sử dụng.

1.  Cách đơn giản là import toàn bộ module:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Module `_re_` được import ở đây dùng cho biểu thức chính quy. Sau khi import module, bạn có thể gọi các chức năng cụ thể bằng cách dùng tên module làm tiền tố (re.).

2.  Nếu tên module bạn muốn import đã được sử dụng trong mã, bạn có thể gán nó cho một tên khác khi import:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3.  Nếu bạn "hư", bạn có thể import toàn bộ module vào không gian tên hiện tại. Điều này có thể vô tình ghi đè lên các biến bạn đã định nghĩa:

```python
match = 10  
from re import *  # Module re có một hàm tên là match  
print match       # Xuất ra hàm match  
```

Vì bạn là người tốt, tôi tin bạn sẽ không làm điều này.

### [](#四则运算-Arithmetic "Phép toán Số học")Phép toán Số học

Python 2.7 mặc định sử dụng phép chia lấy phần nguyên, nên $ 5 / 2 = 2 $. Nhưng nhiều lúc chúng ta không muốn phép chia này, vì vậy có thể import module sau:

```python
from __future__ import division  
```

Sau khi import, ta có $5 / 2 = 2.5$.  
Phép chia lấy phần nguyên: $5 // 2 = 2$.

### [](#函数-Functions "Hàm")Hàm

#### [](#函数定义 "Định nghĩa Hàm")Định nghĩa Hàm


Hàm là một quy tắc có thể nhận 0 hoặc nhiều đầu vào và trả về một đầu ra nhất định. Trong Python, chúng ta định nghĩa một hàm bằng cú pháp `def Tên_hàm(tham_số)`:

```python
def double(x):  
    """Bạn có thể viết giải thích về chức năng của hàm ở đây  
    Ví dụ, hàm này sẽ nhân đầu vào với 2"""  
    # Bạn có thể viết thân hàm ở đây, nhớ thụt lề  
    return x * 2  
```
#### [](#函数使用 "Sử dụng Hàm")Sử dụng Hàm


Trong Python, hàm là một "đối tượng hạng nhất" (first-class citizen), điều này có nghĩa là chúng ta có thể gán hàm cho một biến, hoặc truyền nó làm tham số cho các biến khác:

```python
def apply_to_one(f):  
    """Gọi hàm f và truyền 1 làm tham số"""  
    return f(1)  
my_double = double          # double trỏ đến hàm đã định nghĩa ở phần trước  
x = apply_to_one(my_double) # x bằng 2  
```
#### [](#匿名函数 "Hàm Ẩn danh")Hàm Ẩn danh


Bạn cũng có thể tạo hàm ẩn danh thông qua `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Bằng 5  
```

Bạn có thể gán `lambda` cho các biến khác, nhưng hầu hết mọi người sẽ khuyên bạn nên sử dụng `_def_` nhiều hơn:

```python
another_double = lambda x: 2 * x      # Không khuyến khích  
def another_double(x): return 2 * x   # Cách làm được khuyến khích  
```

Bổ sung:

*   `lambda` chỉ là một biểu thức, thân hàm đơn giản hơn nhiều so với `def`.
*   Phần chính của `lambda` là một biểu thức, không phải một khối mã. Chỉ có thể đóng gói logic hạn chế trong biểu thức `lambda`.

#### [](#函数参数传递 "Truyền tham số Hàm")Truyền tham số Hàm

Các tham số của hàm có thể định nghĩa giá trị mặc định. Nếu không truyền tham số, hàm sẽ sử dụng giá trị mặc định; nếu truyền tham số, hàm sẽ sử dụng giá trị đã chỉ định:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Xuất ra "hello"  
my_print()            # Xuất ra "my default message"  
```

Đôi khi, việc chỉ định tham số trực tiếp bằng tên tham số cũng rất tiện lợi:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Trả về 5  
subtract(0, 5)    # Trả về -5  
subtract(b=5)     # Giống như trên, trả về -5  
```
### [](#字符串-Strings "Chuỗi")Chuỗi

Bạn có thể sử dụng dấu nháy đơn hoặc dấu nháy kép để tạo chuỗi (dấu nháy phải được ghép đôi):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Sử dụng dấu gạch ngược để biểu thị ký tự thoát, ví dụ:

```python
tab_string = "\t"      # Biểu thị ký tự tab  
len(tab_string)        # Bằng 1  
```

Khi bạn muốn sử dụng chính dấu gạch ngược (dùng cho thư mục Windows hoặc biểu thức chính quy), bạn có thể định nghĩa bằng cách sử dụng chuỗi thô `r""`:

```python
not_tab_string = r"\t" # Biểu thị ký tự '\' và 't'  
len(not_tab_string)    # Bằng 2  
```

Sử dụng ba dấu nháy kép để tạo chuỗi nhiều dòng:

```python
multi_line_string = """Đây là dòng đầu tiên  
Đây là dòng thứ hai  
Đây là dòng thứ ba"""  
```

### [](#异常处理-Exception "Xử lý Ngoại lệ")Xử lý Ngoại lệ

Khi chương trình gặp lỗi, Python sẽ phát sinh một `ngoại lệ (exception)`. Nếu chúng ta không xử lý, chương trình sẽ ngừng thực thi. Để bắt ngoại lệ, chúng ta có thể sử dụng câu lệnh `try` và `except`:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Không thể chia cho 0"  
```

Mặc dù trong các ngôn ngữ khác, ngoại lệ có thể được coi là điều không tốt, nhưng trong Python, việc xử lý ngoại lệ một cách linh hoạt sẽ giúp mã của bạn gọn gàng và sạch sẽ hơn.

### [](#列表-Lists "Danh sách (List)")Danh sách (List)

#### [](#创建列表 "Tạo Danh sách")Tạo Danh sách

List là một tập hợp có thứ tự đơn giản và là cấu trúc dữ liệu cơ bản nhất trong Python (tương tự mảng trong các ngôn ngữ khác, nhưng list có một số tính năng bổ sung). Để tạo một list:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Bằng 3  
list_sum = sum(integer_list)      # Bằng 6  
```
#### [](#访问列表中的值 "Truy cập Giá trị trong Danh sách")Truy cập Giá trị trong Danh sách


Bạn có thể truy cập các giá trị trong list bằng cách sử dụng chỉ mục trong dấu ngoặc vuông:

```python
x = range(10)       # Tạo list x = [0, 1, ..., 9]  
zero = x[0]         # Bằng 0, chỉ mục list bắt đầu từ 0  
one = x[1]          # Bằng 1  
nine = x[-1]        # Bằng 9, phần tử cuối cùng trong list  
eight = x[-2]       # Bằng 8, phần tử thứ hai từ cuối trong list  
x[0] = -1           # Hiện tại list x = [-1, 1, 2, 3, ..., 9]  
```

#### [](#截取列表 "Cắt Danh sách (Slicing)")Cắt Danh sách (Slicing)


Bạn có thể cắt list bằng dấu ngoặc vuông:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Bạn có thể dùng `in` để kiểm tra xem một phần tử có trong list hay không:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Phương pháp tìm kiếm phần tử này có hiệu suất thấp, chỉ nên sử dụng khi list nhỏ hoặc bạn không quá quan tâm đến thời gian tìm kiếm.

#### [](#拼接列表 "Nối Danh sách")Nối Danh sách

Trong Python, rất dễ để nối hai list:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Hiện tại x = [1,2,3,4,5,6]  
```

Nếu bạn không muốn thay đổi list `x` gốc, bạn có thể sử dụng toán tử "cộng" để tạo một list mới:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Hiện tại y = [1, 2, 3, 4, 5, 6]; x không thay đổi  
```

Thường xuyên sử dụng cách này để thêm từng phần tử vào list:

```python
x = [1, 2, 3]  
x.append(0)           # Hiện tại x = [1, 2, 3, 0]  
y = x[-1]             # Bằng 0  
z = len(x)            # Bằng 4  
```

#### [](#列表分解 "Phân tách Danh sách")Phân tách Danh sách

Nếu bạn biết có bao nhiêu phần tử trong một list, việc phân tách list đó rất dễ dàng:

```python
x, y = [1, 2]         # Hiện tại x = 1, y = 2  
```

Nếu số lượng phần tử ở hai bên dấu bằng không khớp, bạn sẽ nhận được một _lỗi giá trị_. Vì vậy, chúng ta thường dùng dấu gạch dưới để chứa phần còn lại của list:

```python
_, y = [1, 2]         # Hiện tại y == 2, bỏ qua phần tử đầu tiên  
```

### [](#元组-Tuples "Tuple")Tuple

List và tuple rất giống nhau, điểm khác biệt duy nhất là các phần tử trong tuple không thể bị sửa đổi.

#### [](#元组创建 "Tạo Tuple")Tạo Tuple

Bạn có thể tạo tuple bằng dấu ngoặc tròn hoặc không dùng dấu ngoặc nào:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Hiện tại my_list là [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Không thể sửa đổi tuple"  
```

Sử dụng tuple rất tiện lợi để nhận nhiều giá trị trả về từ một hàm:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Bằng (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tuple (và list) đều hỗ trợ gán nhiều phần tử cùng lúc:

```python
x, y = 1, 2       # Hiện tại x = 1, y = 2  
x, y = y, x       # Hoán đổi giá trị của hai biến trong Python; Hiện tại x = 2, y = 1  
```

### [](#字典-Dictionaries "Từ điển (Dictionary)")Từ điển (Dictionary)

#### [](#字典创建 "Tạo Từ điển")Tạo Từ điển

Một cấu trúc dữ liệu cơ bản khác trong Python là từ điển (dictionary), cho phép bạn nhanh chóng truy xuất giá trị (value) tương ứng thông qua khóa (key):

```python
empty_dict = {}                       # Định nghĩa từ điển rỗng theo phong cách Python  
empty_dict2 = dict()                  # Định nghĩa từ điển rỗng ít Python hơn  
grades = { "Joel" : 80, "Tim" : 95 }  # Lưu trữ từ điển  
```

#### [](#字典元素查找 "Tìm kiếm phần tử trong Từ điển")Tìm kiếm phần tử trong Từ điển

Bạn có thể sử dụng dấu ngoặc vuông và khóa để tìm kiếm giá trị tương ứng:

```python
joels_grade = grades["Joel"]          # Bằng 80  
```

Nếu khóa cần tìm không có trong từ điển, một `lỗi khóa (KeyError)` sẽ được trả về:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Không có điểm cho Kate!"  
```

Bạn có thể kiểm tra xem khóa có trong từ điển hay không bằng cách sử dụng `in`:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Từ điển có một phương thức có thể trả về giá trị mặc định. Khi khóa cần tìm không có trong từ điển, nó sẽ trả về giá trị mặc định đã đặt (thay vì phát sinh ngoại lệ):

```python
joels_grade = grades.get("Joel", 0)   # Bằng 80  
kates_grade = grades.get("Kate", 0)   # Bằng 0  
no_ones_grade = grades.get("No One")  # Trả về giá trị mặc định None  
```

#### [](#字典修改 "Sửa đổi Từ điển")Sửa đổi Từ điển

Bạn có thể sử dụng dấu ngoặc vuông để tạo hoặc sửa đổi các cặp khóa-giá trị trong từ điển:

```python
grades["Tim"] = 99                    # Thay thế giá trị cũ  
grades["Kate"] = 100                  # Thêm một cặp khóa-giá trị mới  
num_students = len(grades)            # Bằng 3  
```

Chúng ta sẽ thường xuyên sử dụng từ điển như thế này để biểu thị cấu trúc dữ liệu:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Ngoài việc tìm kiếm khóa cụ thể, chúng ta còn có thể thao tác với tất cả các khóa như sau:

```python
tweet_keys = tweet.keys()             # Lấy một danh sách các khóa  
tweet_values = tweet.values()         # Lấy danh sách các giá trị  
tweet_items = tweet.items()           # Lấy các tuple (khóa, giá trị)  
"user" in tweet_keys                  # Trả về True, sử dụng tìm kiếm 'in' trong list (ít hiệu quả hơn)  
"user" in tweet                       # Cách Pythonic hơn, sử dụng tìm kiếm 'in' trong dictionary (hiệu quả hơn)  
"joelgrus" in tweet_values            # True  
```

Các khóa trong từ điển là duy nhất, và list không thể được sử dụng làm khóa trong từ điển. Nếu bạn cần một khóa gồm nhiều phần, bạn có thể sử dụng tuple hoặc chuyển đổi khóa thành chuỗi bằng một cách nào đó.

#### [](#内置字典 "Từ điển Mặc định (defaultdict)")Từ điển Mặc định (defaultdict)

Nếu bạn đang cố gắng đếm tần suất xuất hiện của mỗi từ trong một tài liệu, một cách rõ ràng là tạo một từ điển, với từ làm khóa và tần suất làm giá trị tương ứng. Sau đó, duyệt qua tài liệu, khi gặp một từ đã xuất hiện, tăng giá trị của khóa tương ứng lên 1; khi gặp một từ chưa xuất hiện, thêm một cặp khóa-giá trị mới vào từ điển:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Tất nhiên, bạn cũng có thể xử lý khóa bị thiếu trước như thế này, bằng cách "chặt trước tấu sau":

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Cách thứ ba là sử dụng `get`, phương thức này xử lý các khóa bị thiếu rất tốt:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Từ điển mặc định (defaultdict) giống như từ điển thông thường, điểm khác biệt duy nhất là khi bạn cố gắng tìm một khóa không tồn tại trong từ điển, defaultdict sẽ tự động tạo một cặp khóa-giá trị bằng cách sử dụng khóa bạn cung cấp. Để sử dụng defaultdict, bạn cần import thư viện `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() tạo ra 0  
for word in document:  
    word_counts[word] += 1  
```

Defaultdict cũng rất hữu ích trong list, từ điển thông thường, thậm chí cả các hàm tự định nghĩa:

```python
dd_list = defaultdict(list)           # list() tạo ra một list rỗng  
dd_list[2].append(1)                  # Hiện tại dd_list là {2: [1]}  
dd_dict = defaultdict(dict)           # dict() tạo ra một dict rỗng  
dd_dict["Joel"]["City"] = "Seattle"   # Hiện tại dd_dict là { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Tạo một từ điển mà giá trị của khóa là một list  
dd_pair[2][1] = 1                     # Hiện tại dd_pair là {2: [0,1]}  
```

Phương pháp này rất hữu ích, sau này khi chúng ta cần lấy một số kết quả khóa-giá trị từ từ điển, sẽ không cần phải kiểm tra xem khóa có tồn tại hay không nữa.

### [](#计数器-Counter "Bộ đếm (Counter)")Bộ đếm (Counter)

Bộ đếm (Counter) có thể trực tiếp chuyển đổi một nhóm giá trị thành một đối tượng giống từ điển, với khóa là một phần tử trong nhóm đó và giá trị tương ứng là số lần phần tử đó xuất hiện. Điều này thường được sử dụng khi tạo biểu đồ tần suất:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (gần như) là { 0 : 2, 1 : 1, 2 : 1 }  
```

Như vậy, chúng ta có một phương pháp tiện lợi để thống kê tần suất từ:

```python
word_counts = Counter(document)  
```

Counter còn có một phương thức rất thông dụng là `most_common`, có thể trực tiếp lấy ra một vài từ có tần suất cao nhất và tần suất tương ứng của chúng:

```python
# Xuất ra 10 từ có tần suất cao nhất và số đếm của chúng  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#集合-Sets "Tập hợp (Set)")Tập hợp (Set)

Một cấu trúc dữ liệu khác trong Python là tập hợp (set), tập hợp là một bộ sưu tập các phần tử khác nhau.  
Có thể tạo một tập hợp và thêm phần tử vào đó như sau:

```python
s = set()  
s.add(1)          # s là { 1 }  
s.add(2)          # s là { 1, 2 }  
s.add(2)          # s vẫn là { 1, 2 } (phần tử trùng lặp bị bỏ qua)  
x = len(s)        # Bằng 2  
y = 2 in s        # Bằng True  
z = 3 in s        # Bằng False  
```

Hai lý do chính để sử dụng tập hợp:

Thứ nhất, thao tác `in` trong tập hợp rất hiệu quả. Khi số lượng phần tử trong một tập dữ liệu rất lớn, việc tìm kiếm phần tử dưới dạng tập hợp rõ ràng phù hợp hơn so với list:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Thất bại, cần kiểm tra từng phần tử  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Tìm kiếm thành công và rất nhanh  
```

Thứ hai, sử dụng tập hợp rất tiện lợi để lấy các phần tử khác nhau từ một nhóm dữ liệu:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Tuy nhiên, trên thực tế, tần suất sử dụng tập hợp vẫn không cao bằng từ điển và list.

### [](#条件语句 "Câu lệnh Điều kiện")Câu lệnh Điều kiện

Trong hầu hết các ngôn ngữ lập trình, bạn đều có thể sử dụng `_if_` để biểu thị các nhánh điều kiện như sau:

```python
if 1 > 2:  
    message = "Giá như 1 lớn hơn 2…"  
elif 1 > 3:  
    message = "elif là viết tắt của 'else if'"  
else:  
    message = "Khi mọi thứ thất bại thì dùng else (nếu bạn muốn)"  
```

Bạn cũng có thể viết câu lệnh điều kiện trên một dòng như thế này, nhưng cách này ít khi được sử dụng:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#循环语句 "Câu lệnh Lặp")Câu lệnh Lặp

#### [](#while-循环 "Vòng lặp `while`")Vòng lặp `while`


Vòng lặp `while` trong Python:

```python
x = 0  
while x < 10:  
    print x, "nhỏ hơn 10"  
    x += 1  
```

#### [](#for-循环 "Vòng lặp `for`")Vòng lặp `for`

Phổ biến hơn là sử dụng vòng lặp `for-in`:

```python
for x in range(10):  
    print x, "nhỏ hơn 10"  
```

Các biểu thức logic phức tạp hơn có thể sử dụng câu lệnh `continue` và `break`:

```python
for x in range(10):  
    if x == 3:  
        continue          # Chuyển thẳng sang vòng lặp tiếp theo  
    if x == 5:  
        break             # Thoát hoàn toàn khỏi vòng lặp  
    print x  
```

Kết quả sẽ xuất ra 0, 1, 2 và 4.

### [](#真值-Truthiness "Giá trị Chân lý (Truthiness)")Giá trị Chân lý (Truthiness)

Biến Boolean trong Python hoạt động tương tự như trong các ngôn ngữ khác, điểm khác biệt duy nhất là chữ cái đầu tiên phải viết hoa:

```python
one_is_less_than_two = 1 < 2      # Là True  
true_equals_false = True == False # Là False  
```

Python sử dụng `None` để biểu thị một giá trị không tồn tại, tương tự như `null` trong các ngôn ngữ khác:

```python
x = None  
print x == None        # Xuất ra True, không được "Pythonic" lắm  
print x is None        # Xuất ra True, cách "Pythonic" hơn  
```

Python cho phép bạn sử dụng các giá trị khác thay thế cho giá trị Boolean. Dưới đây là các giá trị tương đương với `False`:

*   False
*   None
*   [] (một list rỗng)
*   {} (một dictionary rỗng)
*   “” (một chuỗi rỗng)
*   set() (một tập hợp rỗng)
*   0
*   0.0

Tương tự, cũng có nhiều giá trị tương đương với `True`, điều này giúp bạn rất tiện lợi khi kiểm tra các list rỗng, chuỗi rỗng và dictionary rỗng, v.v.

Tất nhiên, nếu bạn không thể dự đoán kết quả, có thể sẽ gặp lỗi trong quá trình sử dụng:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Một cách làm đơn giản hơn, có hiệu quả tương đương với cách trên:

```python
first_char = s and s[0]  
```

Nếu giá trị đầu tiên là đúng (True), nó sẽ trả về giá trị thứ hai, nếu không, nó sẽ trả về giá trị đầu tiên.

Tương tự, nếu `x` có thể là một số hoặc có thể là rỗng, thì cách này có thể đảm bảo `x` là một số:

```python
safe_x = x or 0  
```

Trong Python còn có hàm `all`, trả về `True` nếu mọi phần tử đều là `True`. Hàm `any` trả về `True` chỉ cần có một phần tử là `True`. Ví dụ, đối với một list mà mỗi phần tử đều là "True", hàm `all` sẽ trả về `True`, nếu không sẽ trả về `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} tương đương với "False"  
any([True, 1, {}])          # True  
all([])                     # True, không tồn tại phần tử nào tương đương với "False"  
any([])                     # False, không có phần tử nào tương đương với "True"  
```

**Đọc thêm:**  
[Cú pháp Python thường dùng trong Khoa học Dữ liệu (Nâng cao)](https://philoli.com/python-tutorails-advanced-level/)
