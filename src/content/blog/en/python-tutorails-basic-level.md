---
title: Common Python Syntax for Data Science (Basic)
date: 2018-11-07 20:53:13
tags: Python
categories: Data Science
mathjax: true
---

I've been reading [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF here](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)) these past couple of days. It's an excellent, easy-to-understand introductory book on data science. One particular chapter offered a concise and clear overview of Python's fundamental syntax and the advanced features commonly used in data science. I found the explanation so well-done that I decided to translate it here for my own reference and to share.

[Common Python Syntax for Data Science (Basic)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)
[Common Python Syntax for Data Science (Advanced)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)

This chapter focuses on fundamental Python syntax and features (based on Python 2.7) that are particularly useful in data processing.

<!--more-->

### [](#whitespace-formatting "Whitespace Formatting")Whitespace Formatting

While many languages use curly braces to delineate code blocks, Python relies on indentation:

```python
for i in [1, 2, 3, 4, 5]:
    print i          # First line of the "for i" loop
    for j in [1, 2, 3, 4, 5]:
        print j      # First line of the "for j" loop
        print i + j  # Last line of the "for j" loop
    print i          # Last line of the "for i" loop
print "done looping"
```

This makes Python code remarkably readable, but it also means you must always be mindful of your formatting. Whitespace within parentheses, however, is ignored, which can be quite handy for long expressions:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)
```

It also makes code more visually appealing and easier to parse:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
easier_to_read_list_of_lists = [ [1, 2, 3],
                                 [4 ,5 ,6 ],
                                 [7 ,8 ,9 ] ]
```

### [](#multi-line-statements "Multi-line Statements")Multi-line Statements

You can use a backslash to break a single statement across multiple lines, though this practice is rarely seen:

```python
two_plus_three = 2 + \
                 3
```

### [](#modules "Modules")Modules

Whether they're built-in Python modules or third-party packages you've downloaded, you must explicitly import them before use.

1. Simply import the entire module directly:

```python
import re
my_regex = re.compile("[0-9]+", re.I)
```

Here, the `re` module is imported for regular expressions. Once imported, you can call its functions by prefixing them with the module name (e.g., `re.`).

2. If the module name conflicts with an existing name in your code, you can map the module to an alias during import:

```python
import re as regex
my_regex = regex.compile("[0-9]+", regex.I)
```

3. If you're feeling mischievous (or just careless), you can import the entire module into the current namespace. This might inadvertently overwrite variables you've already defined:

```python
match = 10
from re import *  # The re module has a match function
print match       # Prints the match function
```

But I trust you're a good person, so I'm sure you won't do that.

### [](#arithmetic "Arithmetic")Arithmetic

Python 2.7 uses integer division by default, so $5 / 2 = 2$. However, often we don't want integer division, in which case we can import this module:

```python
from __future__ import division
```

After importing, $5 / 2 = 2.5$. For explicit integer division, use $5 // 2 = 2$.

### [](#functions "Functions")Functions

#### [](#function-definition "Function Definition")Function Definition

A function is a rule that accepts zero or more inputs and returns some output. In Python, we define a function using `def function_name(parameters)`:

```python
def double(x):
    """You can write an explanation of the function's purpose here.
    For example, this function multiplies its input by 2."""
    # The function body goes here, remember to indent
    return x * 2
```

#### [](#function-usage "Function Usage")Function Usage

In Python, functions are first-class objects, meaning you can assign them to variables or pass them as arguments to other functions:

```python
def apply_to_one(f):
    """Calls the function f with 1 as its argument"""
    return f(1)
my_double = double          # double refers to the function defined in the previous section
x = apply_to_one(my_double) # x is now 2
```

#### [](#anonymous-functions "Anonymous Functions")Anonymous Functions

You can also create anonymous functions using `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # which is 5
```

While `lambda` functions can be assigned to variables, most people recommend sticking to `def` for clarity:

```python
another_double = lambda x: 2 * x      # Not recommended
def another_double(x): return 2 * x   # Recommended practice
```

Additionally:

* `lambda` is an expression; its body is much simpler than a `def`.
* The body of a `lambda` is a single expression, not a block of statements. You can only encapsulate limited logic within a `lambda` expression.

#### [](#function-parameter-passing "Function Parameter Passing")Function Parameter Passing

Function parameters can have default values. If you call the function without specifying an argument for such a parameter, the default value will be used; otherwise, your provided value will override it:

```python
def my_print(message="my default message"):
    print message
my_print("hello")     # Prints "hello"
my_print()            # Prints "my default message"
```

It's also often useful to specify arguments by their parameter names directly:

```python
def subtract(a=0, b=0):
    return a - b
subtract(10, 5)   # Returns 5
subtract(0, 5)    # Returns -5
subtract(b=5)     # Same as the previous one, returns -5
```

### [](#strings "Strings")Strings

You can create strings using either single or double quotes (just make sure they're matched):

```python
single_quoted_string = 'data science'
double_quoted_string = "data science"
```

Use backslashes to represent escape characters, for example:

```python
tab_string = "\t"      # Represents a tab character
len(tab_string)        # Is 1
```

If you want to use backslashes literally (e.g., for Windows directories or regular expressions), you can define a raw string using `r""`:

```python
not_tab_string = r"\t" # Represents the characters '\' and 't'
len(not_tab_string)    # Is 2
```

To create multi-line strings, use triple double quotes:

```python
multi_line_string = """This is the first line
This is the second line
This is the third line"""
```

### [](#exception-handling "Exception Handling")Exception Handling

When an error occurs in your program, Python raises an `exception`. If we don't handle it, the program will terminate. You can catch exceptions using `try` and `except` statements:

```python
try:
    print 0 / 0
except ZeroDivisionError:
    print "Cannot divide by zero"
```

While exceptions are often viewed as bad practice in other languages, handling them frequently in Python can lead to cleaner and more concise code.

### [](#lists "Lists")Lists

#### [](#creating-lists "Creating Lists")Creating Lists

Lists are simple, ordered collections and are one of Python's most fundamental data structures (similar to arrays in other languages, but with additional features). Here's how to create one:

```python
integer_list = [1, 2, 3]
heterogeneous_list = ["string", 0.1, True]
list_of_lists = [ integer_list, heterogeneous_list, [] ]
list_length = len(integer_list)   # Is 3
list_sum = sum(integer_list)      # Is 6
```

#### [](#accessing-list-values "Accessing List Values")Accessing List Values

You can access values in a list using square bracket indexing:

```python
x = range(10)       # x becomes [0, 1, ..., 9]
zero = x[0]         # Is 0, list indices start from 0
one = x[1]          # Is 1
nine = x[-1]        # Is 9, the last element in the list
eight = x[-2]       # Is 8, the second-to-last element in the list
x[0] = -1           # x is now [-1, 1, 2, 3, ..., 9]
```

#### [](#slicing-lists "Slicing Lists")Slicing Lists

You can slice lists using square brackets:

```python
first_three = x[:3]                  # [-1, 1, 2]
three_to_end = x[3:]                 # [3, 4, ..., 9]
one_to_four = x[1:5]                 # [1, 2, 3, 4]
last_three = x[-3:]                  # [7, 8, 9]
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]
```

You can use `in` to check if an element is present in a list:

```python
1 in [1, 2, 3]        # True
0 in [1, 2, 3]        # False
```

This method of checking for elements is inefficient; use it only for small lists or when lookup time is not a concern.

#### [](#concatenating-lists "Concatenating Lists")Concatenating Lists

It's easy to concatenate two lists in Python:

```python
x = [1, 2, 3]
x.extend([4, 5, 6])   # x is now [1,2,3,4,5,6]
```

If you prefer not to modify the original list `x`, you can use the addition operator to create a new list:

```python
x = [1, 2, 3]
y = x + [4, 5, 6]     # y is now [1, 2, 3, 4, 5, 6]; x remains unchanged
```

You'll often add elements to a list one at a time like this:

```python
x = [1, 2, 3]
x.append(0)           # x is now [1, 2, 3, 0]
y = x[-1]             # Is 0
z = len(x)            # Is 4
```

#### [](#list-unpacking "List Unpacking")List Unpacking

If you know exactly how many elements are in a list, you can easily unpack it:

```python
x, y = [1, 2]         # x is 1, y is 2
```

If the number of elements on both sides of the assignment doesn't match, you'll get a `ValueError`. To avoid this, it's more common to use an underscore to hold the remaining parts of the list:

```python
_, y = [1, 2]         # y is 2, the first element is ignored
```

### [](#tuples "Tuples")Tuples

Tuples are very similar to lists, with one crucial difference: elements in a tuple cannot be modified.

#### [](#creating-tuples "Creating Tuples")Creating Tuples

You can create tuples using parentheses or by simply separating values with commas:

```python
my_tuple = (1, 2)
other_tuple = 3, 4
my_list[1] = 3        # my_list is now [1, 3]
try:
    my_tuple[1] = 3
except TypeError:
    print "Cannot modify a tuple"
```

Tuples are especially convenient for returning multiple values from a function:

```python
def sum_and_product(x, y):
    return (x + y),(x * y)
sp = sum_and_product(2, 3)    # Is (5, 6)
s, p = sum_and_product(5, 10) # s is 15, p is 50
```

Both tuples (and lists) support simultaneous assignment of multiple elements:

```python
x, y = 1, 2       # x is 1, y is 2
x, y = y, x       # Swaps the values of two variables in Python; x is now 2, y is 1
```

### [](#dictionaries "Dictionaries")Dictionaries

#### [](#creating-dictionaries "Creating Dictionaries")Creating Dictionaries

Another fundamental data structure in Python is the dictionary, which allows you to quickly retrieve values using associated keys:

```python
empty_dict = {}                       # A very Pythonic way to define an empty dictionary
empty_dict2 = dict()                  # A less Pythonic way to define an empty dictionary
grades = { "Joel" : 80, "Tim" : 95 }  # Dictionary storage
```

#### [](#accessing-dictionary-elements "Accessing Dictionary Elements")Accessing Dictionary Elements

You can look up the corresponding value using square brackets and the key:

```python
joels_grade = grades["Joel"]          # Is 80
```

If the key you're looking for isn't in the dictionary, it will raise a `KeyError`:

```python
try:
    kates_grade = grades["Kate"]
except KeyError:
    print "no grade for Kate!"
```

You can check if a key exists in a dictionary using `in`:

```python
joel_has_grade = "Joel" in grades     # True
kate_has_grade = "Kate" in grades     # False
```

Dictionaries also have a `get` method that allows you to specify a default value to return if the key isn't found, rather than raising an exception:

```python
joels_grade = grades.get("Joel", 0)   # Is 80
kates_grade = grades.get("Kate", 0)   # Is 0
no_ones_grade = grades.get("No One")  # Returns the default value None
```

#### [](#modifying-dictionaries "Modifying Dictionaries")Modifying Dictionaries

You can use square brackets to create or modify key-value pairs in a dictionary:

```python
grades["Tim"] = 99                    # Replaces the old value
grades["Kate"] = 100                  # Adds a new key-value pair
num_students = len(grades)            # Is 3
```

We'll often use dictionaries to represent data structures like this:

```python
tweet = {
    "user" : "joelgrus",
    "text" : "Data Science is Awesome",
    "retweet_count" : 100,
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]
}
```

Beyond looking up specific keys, we can also perform operations on all keys, values, or items:

```python
tweet_keys = tweet.keys()             # Gets a list of keys
tweet_values = tweet.values()         # Gets a list of values
tweet_items = tweet.items()           # Gets a list of (key, value) tuples
"user" in tweet_keys                  # Returns True, but uses inefficient 'in' lookup for lists
"user" in tweet                       # A more Pythonic and efficient 'in' lookup for dictionaries
"joelgrus" in tweet_values            # True
```

Keys in a dictionary must be unique, and lists cannot be used as dictionary keys. If you need a multi-part key, you can use a tuple or convert the key to a string in some way.

#### [](#default-dictionaries "Default Dictionaries")Default Dictionaries

If you're trying to count the frequency of each word in a document, a straightforward approach is to create a dictionary where words are keys and their frequencies are values. Then, you iterate through the document, incrementing the count for existing words and adding new key-value pairs for words encountered for the first time:

```python
word_counts = {}
for word in document:
    if word in word_counts:
        word_counts[word] += 1
    else:
        word_counts[word] = 1
```

Alternatively, you could handle missing keys proactively using a 'ask for forgiveness, not permission' approach with `try...except`:

```python
word_counts = {}
for word in document:
    try:
        word_counts[word] += 1
    except KeyError:
        word_counts[word] = 1
```

A third method uses `get`, which performs excellently when handling missing keys:

```python
word_counts = {}
for word in document:
    previous_count = word_counts.get(word, 0)
    word_counts[word] = previous_count + 1
```

A `defaultdict` behaves just like a regular dictionary, with one key difference: when you try to look up a key that doesn't exist, it automatically creates a new entry for that key using a default value provided by you. To use `defaultdict`, you need to import it from the `collections` library:

```python
from collections import defaultdict
word_counts = defaultdict(int)        # int() produces 0
for word in document:
    word_counts[word] += 1
```

`defaultdict` is also very useful with lists, regular dictionaries, or even custom functions:

```python
dd_list = defaultdict(list)           # list() produces an empty list
dd_list[2].append(1)                  # dd_list is now {2: [1]}
dd_dict = defaultdict(dict)           # dict() produces an empty dictionary
dd_dict["Joel"]["City"] = "Seattle"   # dd_dict now contains { "Joel" : { "City" : "Seattle"}}
dd_pair = defaultdict(lambda: [0, 0]) # Creates a dictionary where keys map to a list of two zeros
dd_pair[2][1] = 1                     # dd_pair now contains {2: [0,1]}
```

This approach is incredibly useful as it eliminates the need to check if a key exists before trying to access or modify its value.

### [](#counters "Counters")Counters

A `Counter` directly transforms a sequence of values into a dictionary-like object. The keys are the elements from the sequence, and their corresponding values are the counts of how many times each element appeared. This is frequently used when creating histograms:

```python
from collections import Counter
c = Counter([0, 1, 2, 0]) # c is (approximately) { 0 : 2, 1 : 1, 2 : 1 }
```

This gives us a very convenient way to count word frequencies:

```python
word_counts = Counter(document)
```

Another commonly used `Counter` method is `most_common`, which directly provides the N most frequent items and their counts:

```python
# Prints the 10 most frequent words and their counts
for word, count in word_counts.most_common(10):
    print word, count
```

### [](#sets "Sets")Sets

Another Python data structure is the set, which is an unordered collection of unique elements.
You can create a set and add elements to it like this:

```python
s = set()
s.add(1)          # s is { 1 }
s.add(2)          # s is { 1, 2 }
s.add(2)          # s is { 1, 2 }
x = len(s)        # Is 2
y = 2 in s        # Is True
z = 3 in s        # Is False
```

There are two main reasons to use sets:

First, the `in` operation for sets is extremely efficient. When dealing with a very large dataset, checking for an element's presence using a set is significantly faster than using a list:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]
"zip" in stopwords_list               # Inefficient, requires checking each element
stopwords_set = set(stopwords_list)
"zip" in stopwords_set                # Efficient and fast lookup
```

Second, sets provide a convenient way to get the distinct elements from a collection:

```python
item_list = [1, 2, 3, 1, 2, 3]
num_items = len(item_list)            # 6
item_set = set(item_list)             # {1, 2, 3}
num_distinct_items = len(item_set)    # 3
distinct_item_list = list(item_set)   # [1, 2, 3]
```

In practice, however, sets are not used as frequently as dictionaries and lists.

### [](#conditional-statements "Conditional Statements")Conditional Statements

In most programming languages, you can use `if` to express conditional branches, and Python is no exception:

```python
if 1 > 2:
    message = "if only 1 were greater than two…"
elif 1 > 3:
    message = "elif stands for 'else if'"
else:
    message = "when all else fails use else (if you want to)"
```

You can also write conditional statements on a single line like this, though it's less common:

```python
parity = "even" if x % 2 == 0 else "odd"
```

### [](#looping-statements "Looping Statements")Looping Statements

#### [](#while-loops "While Loops")While Loops

The `while` loop in Python:

```python
x = 0
while x < 10:
    print x, "is less than 10"
    x += 1
```

#### [](#for-loops "For Loops")For Loops

More commonly, you'll use a `for-in` loop:

```python
for x in range(10):
    print x, "is less than 10"
```

For more complex logic, you can use `continue` and `break` statements:

```python
for x in range(10):
    if x == 3:
        continue          # Skips to the next iteration of the loop
    if x == 5:
        break             # Exits the loop entirely
    print x
```

This will output 0, 1, 2, and 4.

### [](#truthiness "Truthiness")Truthiness

Booleans in Python function similarly to those in other languages, with the key difference that their first letter must be capitalized:

```python
one_is_less_than_two = 1 < 2      # Is True
true_equals_false = True == False # Is False
```

Python uses `None` to represent the absence of a value, similar to `null` in other languages:

```python
x = None
print x == None        # Prints True, but less Pythonic
print x is None        # Prints True, more Pythonic
```

Python allows you to use other values in place of Booleans; the following are all considered equivalent to `False`:

*   False
*   None
*   [] (an empty list)
*   {} (an empty dictionary)
*   “” (an empty string)
*   set() (an empty set)
*   0
*   0.0

Similarly, many values are considered equivalent to `True`. This makes it very convenient to check for empty lists, empty strings, empty dictionaries, and so on.

However, if you're not careful, this can sometimes lead to unexpected behavior:

```python
s = some_function_that_returns_a_string()
if s:
    first_char = s[0]
else:
    first_char = ""
```

A more concise way to achieve the same result as the above is:

```python
first_char = s and s[0]
```

If the first value is true, it returns the second value; otherwise, it returns the first value.

Similarly, if `x` could be a number or `None`, you can ensure you get a number with this:

```python
safe_x = x or 0
```

Python also includes the `all` function, which returns `True` if every element in an iterable is `True`. The `any` function returns `True` if at least one element is `True`. For instance, for a list where every element is "truthy", `all` will return `True`; otherwise, it returns `False`:

```python
all([True, 1, { 3 }])       # True
all([True, 1, {}])          # False, as {} is equivalent to "False"
any([True, 1, {}])          # True
all([])                     # True, because there are no elements equivalent to "False"
any([])                     # False, because there are no elements equivalent to "True"
```

**Further Reading:**
[Common Python Syntax for Data Science (Advanced)](https://philoli.com/python-tutorails-advanced-level/)
