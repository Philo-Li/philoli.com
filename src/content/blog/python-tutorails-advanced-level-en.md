---
title: Common Advanced Python Syntax in Data Science
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
Lately, I've been diving into [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), which is an excellent and easy-to-understand introductory book on data science. One particular chapter introduces both basic Python syntax and advanced features commonly used in data science. I found the explanations excellent – concise and clear – so I'm translating them here for my own reference and yours.

[Common Basic Python Syntax in Data Science](https://philoli.com/python-tutorails-basic-level/)
[Common Advanced Python Syntax in Data Science](https://philoli.com/python-tutorails-advanced-level/)

This post, building on that chapter, primarily focuses on advanced Python syntax and features that are particularly useful in data processing (based on Python 2.7).

<!--more-->

### Sorting

To sort a Python list, you can use the list's `sort` method. If you want to avoid modifying the original list, use the `sorted` function, which returns a *new* sorted list:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x remains unchanged
x.sort()            # now x = [1,2,3,4]
# By default, `sort` and `sorted` order lists from smallest to largest (ascending).
```

To sort in descending order (largest to smallest), simply specify the `reverse = True` parameter.

You can also define a custom sorting function to order the list based on a specific key:

```python
# Sort by absolute value, from largest to smallest
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Sort by word count, from largest to smallest
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### List Comprehensions

We often encounter situations where we need to extract specific elements from a list to form a new one, modify existing elements, or both. The idiomatic Pythonic way to achieve this is through **List Comprehensions**:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Similarly, you can use comprehensions to create dictionaries or sets from lists:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

If you don't need to use the actual elements from the list, you can use an underscore `_` as a placeholder variable:

```python
zeroes = [0 for _ in even_numbers] # same length as even_numbers
```

List comprehensions also support multiple `for` loops:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 100 pairs: (0,0) (0,1) ... (9,8), (9,9)
```

Subsequent `for` loops can leverage the results of previous ones:

```python
increasing_pairs = [(x, y)                      # only pairs where x < y
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
We'll be using list comprehensions frequently throughout our data science journey.

### Generators and Iterators

One potential issue with lists is that they can quickly become enormous. For example, `range(1000000)` creates a list with a million elements. If you only process one piece of data at a time, this can be extremely slow (or even exhaust your memory). Often, you only need the first few pieces of data, making the rest of the computation redundant.

Generators, on the other hand, allow you to iterate over data only as it's needed. You can create a generator using a function and the `yield` expression:

```python
def lazy_range(n):
    """a lazy version of range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Translator's Note:
A generator is a special type of iterator. The `yield` keyword is central to how generators achieve iteration. It acts as a pause and resume point for generator execution; a `yield` expression can be assigned a value, or its value can be returned. Any function containing a `yield` statement is considered a generator. When a generator 'yields' a value, it saves its current execution state and resumes from that exact point the next time a value is requested, thus producing the next iterated value. While list iteration can consume significant memory, using a generator typically only occupies a small memory footprint, leading to substantial memory savings.

The following loop will consume one `yield`ed value at a time until exhausted:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Python actually has a built-in function called `xrange` (or `range` in Python 3) that provides a similar 'lazy' effect.) This means you can even create infinite sequences:

```python
def natural_numbers():
    """returns 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

However, it's generally not advisable to use such statements without a clear exit condition.

**TIP**
> A drawback of iterating with generators is that you can only traverse the elements from beginning to end once. If you need to iterate multiple times, you'll have to create a new generator each time or convert it to a list.

A second way to create generators is using a comprehension expression enclosed in parentheses:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

We know that a dictionary's `items()` method returns a list of all key-value pairs. However, more often, we use the `iteritems()` generator method to iterate, which yields one key-value pair at a time.

### Randomness
In data science, we'll frequently need to generate random numbers. Simply import the `random` module to get started:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() produces random numbers
# 0.7579544029403025,         # standardized between 0 and 1
# 0.420571580830845,          # This function is the most commonly used for generating random numbers.
# 0.25891675029296335]
```

If you need reproducible results, you can make the `random` module generate pseudo-random (i.e., deterministic) numbers based on an internal state set by `random.seed`:

```python
random.seed(10)           # set the seed to 10
print random.random()     # 0.57140259469
random.seed(10)           # reset the seed to 10
print random.random()     # 0.57140259469 again
```

Sometimes, we'll also use `random.randrange` to generate a random number within a specified range:

```python
random.randrange(10)      # choose randomly from range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # choose randomly from range(3, 6) = [3, 4, 5]
```

Other methods can be quite handy. For instance, `random.shuffle` shuffles the elements of a list in place, rearranging them into a random order:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (your result should be different)
```

To randomly pick a single element from a list, use `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # I got "Bob"
```

If you want to generate a random sequence without modifying the original list, `random.sample` is your go-to method:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

You can get multiple random samples (with replacement allowed) by repeatedly calling `random.choice`:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regular Expressions

Regular expressions, or regex, are a powerful tool for text searching. While they can seem complex, they are incredibly useful, and many books are dedicated to them. We'll delve into them in more detail as we encounter them. For now, here are a few examples of how regex is used in Python:

```python
import re
print all([                                 # all of these are true, because
    not re.match("a", "cat"),               # * 'cat' doesn't start with 'a'
    re.search("a", "cat"),                  # * 'cat' contains 'a'
    not re.search("c", "dog"),              # * 'dog' doesn't contain 'c'
    3 == len(re.split("[ab]", "carbs")),    # * splits on 'a' or 'b' to give ['c','r','s']
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * replaces digits with dashes
    ])                                      # Output: True
```

### Object-Oriented Programming

Like many other languages, Python allows you to define classes that encapsulate data and functions to operate on that data. We sometimes use them to make our code cleaner and more concise. The easiest way to explain them is by building a heavily commented example. Imagine Python didn't have a built-in `set` type; we might want to create our own `Set` class. What functionality would such a class need? Given a `Set`, we'd want to add items, remove items, and check if it contains a particular value. So, we'll implement all these capabilities as member functions of the class. This way, we can access these member functions using dot notation after a `Set` object:

```python
# By convention, we give classes PascalCase names
class Set:
    # These are member functions
    # Every member function has a first parameter, "self" (another convention)
    # which refers to the particular Set object being used

    def __init__(self, values=None):
        """This is the constructor.
        It gets called when you create a new Set.
        You would use it like
        s1 = Set() # empty set
        s2 = Set([1,2,2,3]) # initialize with a list"""
        self.dict = {} # Each Set instance has its own dict property
        # which we'll use to track memberships
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """This is the string representation of a Set object.
        You can type it into the Python command window or pass it to str()"""
        return "Set: " + str(self.dict.keys())

    # We'll represent membership by being a key in self.dict with value True
    def add(self, value):
        self.dict[value] = True

    # value is in the Set if it's a key in the dictionary
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

We can then use our `Set` like this:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Functional Tools

#### Partial Functions

When passing functions around, we sometimes want to use only a portion of a function's capabilities to create a new function. As a simple example, imagine we have a function with two arguments:

```python
def exp(base, power):
    return base ** power
```

We want to use it to create a function that takes one argument and returns the result of `exp(2, power)` – essentially, '2 to the power of' something.

Of course, we *could* define a new function using `def`, but that feels a bit clunky:

```python
def two_to_the(power):
  return exp(2, power)
```

A more elegant approach is to use `functools.partial`:

```python
from functools import partial
two_to_the = partial(exp, 2)      # now a one-argument function
print two_to_the(3)               # 8
```

You can also use `partial` to fill in other arguments if they're named:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

If you try to get too clever with argument placement, your code can quickly become convoluted, so it's generally best to stick to simpler uses.

#### Map

We occasionally use functions like `map`, `reduce`, and `filter` as alternatives to list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # same as above
list_doubler = partial(map, double)     # function to double a list
twice_xs = list_doubler(xs)             # also [2, 4, 6, 8]
```

The `map` function can also be used to apply a multi-argument function to multiple lists:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter

Similarly, `filter` implements the `if` functionality seen in list comprehensions:

```python
def is_even(x):
    """True if x is even, False if x is odd"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # same as above
list_evener = partial(filter, is_even)    # function to filter a list
x_evens = list_evener(xs)                 # also [2, 4]
```

#### Reduce

The `reduce` function continuously combines the first and second elements in a list, then combines that result with the third element, and so on, repeating the process until a single result is obtained:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # function to reduce a list
x_product = list_product(xs)              # also 24
```

### Enumerate

Occasionally, you'll find yourself needing to iterate through a list and access both the elements and their corresponding indices:

```python
# not Pythonic (not concise or elegant)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# also not Pythonic (not concise or elegant)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

The most Pythonic and concise way to do this is by using the `enumerate` function, which generates `(index, element)` tuples:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Similarly, if you only need the index:

```python
for i in range(len(documents)): do_something(i)   # not concise
for i, _ in enumerate(documents): do_something(i) # concise
```

We'll be using this method frequently later on.

### Zip and Argument Unpacking

#### Zip

We often need to 'zip' two or more lists together. Zipping essentially transforms multiple lists into a single list of corresponding tuples:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # gives [('a', 1), ('b', 2), ('c', 3)]
```

#### Argument Unpacking

If the lists have different lengths, the zipping process stops at the end of the shortest list. You can also use a somewhat peculiar 'unzip' trick to unpack a list of pairs:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

The asterisk (`*`) is used for argument unpacking; it takes the elements of `pairs` and treats them as individual arguments to `zip`. The following call has the equivalent effect:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # returns [('a','b','c'), ('1','2','3')]
```

Argument unpacking can also be used with other functions:

```python
def add(a, b): return a + b

add(1, 2)           # returns 3
add([1, 2])         # TypeError
add(*[1, 2])        # returns 3
```

While not universally applicable, it's a neat trick for conciseness.

### Args and Kwargs

Suppose we want to create a higher-order function that takes an existing function and returns a *new* function that effectively doubles the output of the old one:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Here's an example of it in action:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

However, this approach falls apart if the function takes more than one argument:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # TypeError: g() takes exactly 1 argument (2 given)
```

To address this, we need a way to define a function that can accept an arbitrary number of arguments, then use argument unpacking to pass them along. This might seem a bit magical:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Output:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

When we define a function like this, `args` (short for arguments) becomes a tuple containing all the unnamed arguments, while `kwargs` (short for keyword arguments) becomes a dictionary containing all the named arguments.

They can also be used when passing arguments from a list (or tuple) or a dictionary:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

You can use this with all sorts of peculiar methods, but we'll primarily use it to solve the problem of passing an arbitrary number of arguments to higher-order functions:

```python
def doubler_correct(f):
    """works no matter what kind of inputs f expects"""
    def g(*args, **kwargs):
        """passes all arguments through to f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Welcome to the World of Data Science!

Ding! Congratulations, you've just unlocked a new world of possibilities! Now you're ready to dive in and have some fun!

**Related Reading:**

[Common Basic Python Syntax in Data Science](https://philoli.com/python-tutorails-basic-level)
