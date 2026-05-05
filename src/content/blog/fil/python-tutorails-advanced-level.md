---
title: Mga Pangunahing Python Syntax sa Data Science (Advanced)
date: 2018-11-07 23:53:13
tags: Python
categories: 数据科学
mathjax: true
---
Nitong mga nakaraang araw, binabasa ko itong aklat na [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF address](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), na isang magandang panimulang libro sa data science, madaling intindihin. May isang kabanata rito na nagpapakilala sa basic syntax ng Python at sa mga advanced na syntax na madalas gamitin sa data science. Naisip kong maganda ang pagkakalarawan, malinaw at direkta, kaya isinalin ko ito rito para maging talaan ko.
[Mga Pangunahing Python Syntax sa Data Science (Basic)](https://philoli.com/python-tutorails-basic-level/)
[Mga Pangunahing Python Syntax sa Data Science (Advanced)](https://philoli.com/python-tutorails-advanced-level/)

Nakatuon ang kabanatang ito sa pagtalakay sa mga advanced na Python syntax at function (batay sa Python 2.7) na lubhang kapaki-pakinabang sa pagpoproseso ng data.

<!--more-->

### Pag-aayos (Sorting)

Kung gusto mong ayusin ang isang listahan sa Python, maaari mong gamitin ang `sort` method ng listahan. Kung ayaw mong mabago ang orihinal na listahan, maaari mong gamitin ang `sorted` function para magbalik ng isang bagong listahan na nakaayos na:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], hindi nagbabago ang x
x.sort()            # ang x ay [1,2,3,4] na ngayon
Ang sort o sorted ay default na nag-aayos ng listahan mula pinakamaliit hanggang pinakamalaki.
```

Kung gusto mong ayusin ito mula pinakamalaki hanggang pinakamaliit, maaari kang maglagay ng parameter na `reverse = True`.

Maaari ka ring mag-customize ng function ng pag-aayos para ayusin ang listahan batay sa tinukoy na keyword:

```python
# Ayusin ayon sa absolute value mula pinakamalaki hanggang pinakamaliit
x = sorted([-4,1,-2,3], key=abs, reverse=True) # is [-4,3,-2,1]
# Ayusin ayon sa bilang ng paglitaw ng salita mula pinakamalaki hanggang pinakamaliit
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Pagbuo ng Listahan (List Comprehensions)

Madalas nating mararanasan ang ganitong sitwasyon: gusto nating kumuha ng ilang partikular na elemento mula sa isang listahan para bumuo ng bagong listahan, o baguhin ang halaga ng ilan sa mga elemento, o pareho. Ang karaniwang paraan sa Python para rito ay ang List Comprehensions:

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Katulad nito, maaari mong gawing dictionary o set ang isang listahan:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Kung hindi mo naman gagamitin ang mga elemento ng listahan, maaari mong gamitin ang underscore `_` bilang variable:

```python
zeroes = [0 for _ in even_numbers] # May parehong haba sa listahan ng even_numbers
```

Sinusuportahan ng List Comprehensions ang multiple `for` loops:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # 100 pares: (0,0) (0,1) ... (9,8), (9,9)
```

Maaaring gamitin ng sumunod na `for` loop ang resulta ng naunang `for` loop:

```python
increasing_pairs = [(x, y)                      # Naglalaman lang ng mga pares kung saan x < y
                    for x in range(10)          # range(lo, hi) equals
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Madalas nating gagamitin ang list comprehensions sa hinaharap.

### Generators at Iterators

Ang isang problema sa mga listahan ay madalas itong lumalaki nang husto, halimbawa, ang `range(1000000)` ay bubuo ng isang listahan na may isang milyong elemento. Kung isang data lang ang ipoproseso sa bawat pagkakataon, maaaring masyadong matagal ang proseso (o maubusan ng memorya). Sa katunayan, maaaring ang unang ilang data lang ang kailangan mo, kaya ang iba pang operasyon ay magiging kalabisan.

Sa generators naman, maaari mo lang i-iterate ang mga data na kailangan mo. Maaari kang lumikha ng generator gamit ang function at ang `yield` expression:

```python
def lazy_range(n):
    """isang 'lazy' na bersyon ng range"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Paalala ng Tagasalin:
Ang generator ay isa ring uri ng iterator. Ang `yield` ang susi sa pagpapatupad ng iteration ng generator. Ito ay nagsisilbing pause at resume point sa pagpapatupad ng generator. Maaaring magbigay ng halaga sa `yield` expression, at maaari ring ibalik ang halaga ng `yield` expression. Anumang function na naglalaman ng `yield` statement ay tinatawag na generator. Kapag lumabas ang generator, sine-save nito ang kasalukuyang estado ng pagpapatupad at ibinabalik ito sa susunod na pagpapatupad upang makuha ang susunod na iteration value. Ang paggamit ng list iteration ay gumagamit ng malaking espasyo sa memorya, habang ang paggamit ng generator ay halos isang espasyo lang ang ginagamit, na nagreresulta sa pagtitipid sa memorya.

Ang sumusunod na loop ay unti-unting kukuha ng halaga mula sa `yield` hanggang sa maubos ito:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Sa katunayan, may built-in na function ang Python na nagpapatupad ng epekto ng `_lazy_range_` sa itaas, na tinatawag na `xrange`, at sa Python 3, `lazy`.) Nangangahulugan ito na maaari kang lumikha ng isang walang katapusang sequence:

```python
def natural_numbers():
    """Nagbabalik ng 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Gayunpaman, hindi inirerekomenda ang paggamit ng ganitong uri ng pahayag na walang exit logic para sa loop.

**TIP**
> Ang isang disbentaha ng paggamit ng generator para sa iteration ay, isang beses lang nito mai-iterate ang mga elemento mula simula hanggang dulo. Kung gusto mong mag-iterate nang maraming beses, kailangan mong gumawa ng bagong generator o gumamit ng listahan sa bawat pagkakataon.

Ang pangalawang paraan para makagawa ng generator: gamit ang comprehension expression sa loob ng panaklong:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Alam natin na ang `items()` method sa dictionary ay nagbabalik ng listahan ng lahat ng key-value pairs sa dictionary, ngunit mas madalas, ginagamit natin ang `iteritems()` generator method para sa iteration, na nagbibigay at nagbabalik ng isang key-value pair sa bawat pagkakataon.

### Randomness

Sa pag-aaral ng data science, madalas nating kailanganin ang pagbuo ng random na numero, kaya kailangan lang i-import ang `random` module:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() ay bumubuo ng random na numero
# 0.7579544029403025,         # Ang random na numero ay standardized, sa pagitan ng 0 at 1
# 0.420571580830845,          # Ito ang pinakakaraniwang function na ginagamit para bumuo ng random na numero
# 0.25891675029296335]
```

Kung gusto mong makakuha ng magkaparehong resulta, maaari mong gawing bumuo ang `random` module ng pseudo-random (ibig sabihin, deterministic) na numero batay sa panloob na estado na itinakda ng `random.seed`:

```python
random.seed(10)           # itakda ang seed sa 10
print random.random()     # 0.57140259469
random.seed(10)           # i-reset ang seed sa 10
print random.random()     # 0.57140259469 ulit
```

Minsan, ginagamit din natin ang `random.randrange` function para bumuo ng random na numero sa loob ng tinukoy na saklaw:

```python
random.randrange(10)      # Pumili ng random na numero mula sa range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # Pumili ng random na numero mula sa range(3, 6) = [3, 4, 5]
```

Mayroon ding ilang mga method na minsan ay madaling gamitin, tulad ng `random.shuffle` na magpapalit-palit ng pagkakasunod-sunod ng mga elemento sa isang listahan, na bumubuo ng isang random na nakaayos na listahan:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (Dapat iba ang iyong makukuha)
```

Kung gusto mong pumili ng isang random na elemento mula sa isang listahan, maaari mong gamitin ang `random.choice` method:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Nakuha ko ay "Bob"
```

Kung gusto mong bumuo ng random na sequence pero ayaw mong galawin ang orihinal na listahan, maaari mong gamitin ang `random.sample` method:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Maaari mong piliin ang maraming random na sample (pinapayagan ang pag-uulit) sa pamamagitan ng pagtawag ng maraming beses:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regular Expressions

Ang regular expressions ay ginagamit para sa paghahanap ng teksto; medyo kumplikado ito ngunit napakakapaki-pakinabang, kaya maraming libro ang nakatuon sa pagpapaliwanag ng regular expressions. Ipapaalam natin ang mga ito nang mas detalyado kapag nakasalubong natin ang mga ito. Narito ang ilang halimbawa ng paggamit ng regular expressions sa Python:

```python
import re
print all([                                 # Lahat ng sumusunod na pahayag ay magbabalik ng True, dahil
    not re.match("a", "cat"),               # * Ang 'cat' ay hindi nagsisimula sa 'a'
    re.search("a", "cat"),                  # * Ang 'cat' ay naglalaman ng letrang 'a'
    not re.search("c", "dog"),              # * Ang 'dog' ay hindi naglalaman ng letrang 'c'
    3 == len(re.split("[ab]", "carbs")),    # * Hinihiwa ang salita sa tatlong bahagi ['c','r','s'] batay sa 'a' o 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * Pinapalitan ang mga numero ng hyphen
    ])                                      # Output: True
```

### Object-Oriented Programming

Tulad ng maraming wika, pinapayagan ka ng Python na mag-define ng mga klase na nag-e-encapsulate ng data at mga function na nag-o-operate dito. Minsan, gagamitin natin ang mga ito upang mas maging malinaw at maayos ang ating code. Siguro ang pinakamadaling paraan para ipaliwanag ang mga ito ay sa pamamagitan ng pagbuo ng isang halimbawa na may maraming komento. Ipagpalagay na walang built-in na Python set, maaaring gusto nating gumawa ng sarili nating `Set` class. Kaya, anong mga functionality ang dapat taglayin ng klase na ito? Halimbawa, kapag binigyan ng isang `Set`, kailangan nating makapagdagdag ng mga item dito, makapagbura ng mga item mula dito, at suriin kung naglalaman ito ng partikular na halaga. Kaya, gagawin natin ang lahat ng functionality na ito bilang member functions ng klase. Sa ganitong paraan, maaari nating i-access ang mga member function na ito gamit ang tuldok pagkatapos ng `Set` object:

```python
# Bilang kumbensyon, nagbibigay tayo ng _PascalCase_ na pangalan sa mga klase
class Set:
    # Ito ang mga member function
    # Ang bawat member function ay may "self" parameter na inilalagay sa unahan (isa pang kumbensyon)
    # Ang "self" ay tumutukoy sa partikular na Set object na ginagamit

    def __init__(self, values=None):
        """Ito ang creation function
        Tinatawag ang function na ito sa tuwing gagawa ka ng bagong Set
        Maaaring tawagin ng ganito
        s1 = Set() # walang laman na set
        s2 = Set([1,2,2,3]) # simulan ang set gamit ang tinukoy na mga halaga"""
        self.dict = {} # Ang bawat instance sa Set ay may sariling dict property
        # Ginagamit natin ang property na ito para subaybayan ang bawat miyembro
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Ito ang string expression sa Set object
        Maaari mong ipasa ang string sa object sa pamamagitan ng pag-type nito sa Python command window o gamit ang str() method"""
        return "Set: " + str(self.dict.keys())

    # Ipapakita natin ang membership sa pamamagitan ng pagiging key sa self.dict, at itatakda ang key value sa True
    def add(self, value):
        self.dict[value] = True

    # Kung ang parameter ay key sa dictionary, ang kaukulang halaga ay nasa Set
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Pagkatapos, maaari nating gamitin ang `Set` ng ganito:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Functional Tools

#### Partial Functions

Kapag nagpapasa ng mga function, minsan ay gusto nating gamitin ang bahagi ng function para gumawa ng bagong function. Bilang isang simpleng halimbawa, ipagpalagay na mayroon tayong function na may dalawang variable:

```python
def exp(base, power):
    return base ** power
```

Gusto nating gamitin ito para gumawa ng function na tumatanggap ng isang variable at nagbibigay ng resulta ng exponential function na `exp(2, power)` na ang base ay 2.

Siyempre, maaari tayong mag-define ng bagong function gamit ang `def`, bagamat tila hindi ito masyadong matalino:

```python
def two_to_the(power):
  return exp(2, power)
```

Ang mas matalinong paraan ay ang paggamit ng `functools.partial` method:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Ang kasalukuyang function ay may isang variable lang
print two_to_the(3)               # 8
```

Kung tinukoy ang pangalan, maaari ding gamitin ang `partial` method para punan ang iba pang parameter:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Kung susubukan mong guluhin ang mga parameter sa gitna ng function, mabilis na magiging magulo ang programa, kaya't iwasan ang ganitong pag-uugali.

#### Map

Minsan din tayong gumagamit ng `map`, `reduce`, at `filter` functions bilang alternatibo sa list comprehensions:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Pareho lang
list_doubler = partial(map, double)     # Ang function ay nagdodoble ng listahan
twice_xs = list_doubler(xs)             # Ito rin ay [2, 4, 6, 8]
```

Maaari ding gamitin ang `map` method para sa pagma-map ng multi-argument function sa maraming listahan:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filter

Katulad nito, ang filter ay nagpapatupad ng functionality ng `if` sa list comprehensions:

```python
def is_even(x):
    """Nagbabalik ng True kung ang x ay even, False kung ang x ay odd"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Pareho lang
list_evener = partial(filter, is_even)    # Ang function na ito ay nagpapatupad ng filtering functionality
x_evens = list_evener(xs)             # Ito rin ay [2, 4]
```

#### Reduce

Ang `reduce` method ay patuloy na pinagsasama ang una at pangalawang elemento sa listahan, pagkatapos ay pinagsasama ang resulta sa ikatlong elemento, at inuulit ang prosesong ito hanggang sa makakuha ng isang natatanging resulta:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Ang function na ito ay nagpapatupad ng pagbabawas ng isang listahan
x_product = list_product(xs)              # Ito rin ay 24
```

### Enumerate

Minsan, may mga sitwasyon kung saan habang nag-i-iterate sa isang listahan, kailangan ding gamitin ang elemento at ang index nito:

```python
# Hindi gaanong Pythonic (hindi gaanong maayos)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Hindi rin gaanong Pythonic (hindi gaanong maayos)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Ang pinakamalinaw na paraan ay ang paggamit ng `enumerate` method upang bumuo ng mga `tuples (index, element)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Katulad nito, kung gusto mo lang gamitin ang index:

```python
for i in range(len(documents)): do_something(i)   # Hindi maayos
for i, _ in enumerate(documents): do_something(i) # Maayos
```

Madalas nating gagamitin ang method na ito sa hinaharap.

### Zip at Argument Unpacking

#### Zip

Madalas nating pinagsasama ang dalawa o higit pang listahan. Ang pag-zip ay ang pagbabago ng maraming listahan sa isang listahan ng kaukulang mga tuple:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Nagbibigay ng [('a', 1), ('b', 2), ('c', 3)]
```

#### Argument Unpacking

Kung ang maraming listahan ay hindi magkapareho ng haba, titigil ang proseso ng pag-zip sa dulo ng pinakamaikling listahan. Maaari mo ring gamitin ang kakaibang "unzip" trick para i-unzip ang isang listahan:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Dito, ginagamit ang asterisk para sa argument unpacking, na gumagamit ng mga elemento ng `pairs` bilang iisang argumento ng `zip`. Ang sumusunod na paraan ng pagtawag ay may parehong epekto:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Nagbabalik ng [('a','b','c'), ('1','2','3')]
```

Maaari ding gamitin ang argument unpacking kasama ang iba pang function:

```python
def add(a, b): return a + b

add(1, 2)           # Nagbabalik ng 3
add([1, 2])         # Nagkakamali
add(*[1, 2])        # Nagbabalik ng 3
```

Bagamat hindi masyadong praktikal, ito ay isang magandang trick para maging mas maayos ang code.

### Arbitrary Argument Passing (args at kwargs)

Ipagpalagay na gusto nating lumikha ng isang higher-order function, na tumatanggap ng lumang function at nagbabalik ng bagong function na doble ng lumang function:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Halimbawa ng pagpapatakbo:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Gayunpaman, kapag mas malaki sa isa ang ipinasang argumento, hindi na ito gaanong gumagana:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Nagkakamali: TypeError: g() takes exactly 1 argument (2 given)
```

Kaya kailangan nating tukuyin ang isang function na kayang tumanggap ng anumang bilang ng argumento, at pagkatapos ay gamitin ang argument unpacking para ipasa ang maraming argumento. Medyo mahiwaga ito:

```python
def magic(*args, **kwargs):
    print "unnamed args:", args
    print "keyword args:", kwargs
magic(1, 2, key="word", key2="word2")
# Output:
# unnamed args: (1, 2)
# keyword args: {'key2': 'word2', 'key': 'word'}
```

Kapag nag-define tayo ng function ng ganito, ang `args` (maikling salita para sa arguments) ay isang tuple na naglalaman ng mga unnamed arguments, habang ang `kwargs` (maikling salita para sa keyword arguments) ay isang dictionary na naglalaman ng mga named arguments.

Maaari din silang gamitin kapag ang ipinasang argumento ay isang listahan (o tuple) o array:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Maaari mo itong gamitin kasama ng iba't ibang kakaibang method, ngunit gagamitin lang natin ito para lutasin ang problema ng pagpapasa ng arbitrary arguments sa higher-order functions:

```python
def doubler_correct(f):
    """Gumagana nang maayos anuman ang f"""
    def g(*args, **kwargs):
        """Ipinapasa nang tama ng function na ito ang mga argumento sa f, gaano man karami ang mga ito"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Maligayang Pagdating sa Mundo ng Data Science!

Ding! Binabati kita at nabuksan mo na naman ang pinto sa isang bagong mundo! Ngayon, pwede ka nang magsaya at mag-eksperimento!

**Mga kaugnay na babasahin:**

[Mga Pangunahing Python Syntax sa Data Science (Basic)](https://philoli.com/python-tutorails-basic-level)
