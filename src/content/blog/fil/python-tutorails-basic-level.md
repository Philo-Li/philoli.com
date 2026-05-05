---
title: Mga Pangunahing Syntax ng Python sa Data Science (Mga Batayan)
date: 2018-11-07 20:53:13
tags: Python
categories: Agham ng Datos
mathjax: true
--- 

Nitong nakaraang dalawang araw, binasa ko ang librong [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF address](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)). Isa itong napakagandang introductory book sa data science na madaling intindihin. May isang kabanata doon na nagpapakilala sa mga batayang syntax ng Python at sa mga madalas gamiting advanced syntax para sa data science. Nagustuhan ko ang pagkakalahad nito dahil napaka-simple at malinaw, kaya naisipan kong isalin ito at ilagay dito bilang aking tala.  
[Mga Karaniwang Python Syntax sa Data Science (Mga Batayan)](https://philoli.com/2018/11/07/python-tutorails-basic-level/)  
[Mga Karaniwang Python Syntax sa Data Science (Advanced)](https://philoli.com/2018/11/09/python-tutorails-advanced-level/)  

Nakatuon ang kabanatang ito sa pagtalakay sa mga batayang Python syntax at functionality na lubhang kapaki-pakinabang sa pagproseso ng data (batay sa Python 2.7).

<!--more-->

### Spacing Format

Maraming programming language ang gumagamit ng mga bracket para kontrolin ang mga code block, pero sa Python, indentasyon ang gamit:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Unang linya ng "for i" loop  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Unang linya ng "for j" loop  
        print i + j  # Huling linya ng "for j" loop  
    print i          # Huling linya ng "for i" loop  
print "done looping"  
```

Dahil dito, napakadaling basahin ang Python code, pero kailangan mo ring laging maging maingat sa format. Ang mga espasyo sa loob ng panaklong ay binabalewala, na malaking tulong kapag nagsusulat ng mahahabang expression:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Ginagawa rin nitong mas madaling basahin ang code:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Multi-line Statements

Puwede kang gumamit ng backslash para ipahiwatig na may dugtong ang dalawang linya (bihira itong gamitin):  

```python
two_plus_three = 2 + \
                 3  
```

### Modules

Kahit pa built-in na module ng Python o third-party module na dinownload mo, kailangan mo itong manual na i-import para magamit.

1. Para simpleng i-import ang buong module:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Ang `_re_` module na in-import dito ay para sa regular expressions. Pagkatapos i-import ang module, direktang puwedeng tawagin ang partikular na functionality gamit ang pangalan ng module bilang prefix (re.).

2. Kung nagamit na ang pangalan ng module na ini-import mo sa code, puwede mo itong i-mapa sa ibang pangalan kapag ini-import:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Kung gusto mong maging 'bad boy/girl,' puwede mong i-import ang buong module sa kasalukuyang namespace. Maaari nitong aksidenteng i-overwrite ang mga variable na na-define mo na:

```python
match = 10  
from re import *  # May match function sa re module  
print match       # Ipi-print ang match function  
```

Pero dahil mabuti kang tao, tiwala akong hindi mo ito gagawin.

### Arithmetic

Sa Python 2.7, ang default ay integer division, kaya $ 5 / 2 = 2 $. Pero madalas, hindi natin gusto ang integer division, kaya puwede nating i-import ang module na ito:

```python
from __future__ import division  
```

Kapag na-import na, magiging $5 / 2 = 2.5$. Para sa integer division: $5 // 2 = 2$.

### Functions

#### Function Definition


Ang function ay isang patakaran na tumatanggap ng 0 o higit pang input at nagbabalik ng tiyak na output. Sa Python, dine-define natin ang isang function gamit ang `def function_name(parameters)`:

```python
def double(x):  
    """Dito mo puwedeng isulat ang paliwanag tungkol sa function.  
    Halimbawa, dinodoble ng function na ito ang input."""  
    # Dito mo isusulat ang katawan ng function, tandaan ang indentasyon  
    return x * 2  
```
#### Function Usage


Sa Python, ang mga function ay 'first-class citizens,' ibig sabihin, puwede nating i-assign ang isang function sa isang variable, o ipasa ito bilang argument sa ibang function:

```python
def apply_to_one(f):  
    """Tinatawag ang function f at ginagamit ang 1 bilang argument."""  
    return f(1)  
my_double = double          # double ang tumutukoy sa function na dinefine sa nakaraang seksyon  
x = apply_to_one(my_double) # Ang x ay magiging 2  
```
#### Anonymous Functions


Maaari ring gumawa ng anonymous function gamit ang `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Katumbas ng 5  
```

Puwede mong i-assign ang `lambda` sa ibang variable, pero karamihan ay ipapayo sa iyo na gamitin pa rin ang `def` hangga't maaari:

```python
another_double = lambda x: 2 * x      # Hindi inirerekomenda  
def another_double(x): return 2 * x   # Inirerekomendang paraan  
```

Dagdag pa:

*   `lambda` ay isa lamang expression; mas simple ang function body nito kumpara sa `def`.
*   Ang katawan ng `lambda` ay isang expression, hindi isang code block. Limited lang ang lohika na puwedeng ilagay sa `lambda` expression.

#### Function Parameter Passing

Ang mga parameter ng function ay puwedeng bigyan ng default values. Kung walang ipinasang argument, ang default value ang gagamitin; kung may ipinasa, ito ang gagamitin:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Ipi-print ang "hello"  
my_print()            # Ipi-print ang "my default message"  
```

Minsan, malaking tulong din ang direktang pagtukoy sa mga parameter gamit ang kanilang pangalan:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Nagbabalik ng 5  
subtract(0, 5)    # Nagbabalik ng -5  
subtract(b=5)     # Katulad ng nauna, nagbabalik ng -5  
```
### Strings

Puwede kang gumamit ng single o double quotes para gumawa ng string (siguraduhing magkapares ang quotes):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Gumagamit ng backslash para sa escape characters, halimbawa:

```python
tab_string = "\t"      # Kumakatawan sa tab character  
len(tab_string)        # Katumbas ng 1  
```

Kapag gusto mong gamitin ang mismong backslash (para sa Windows directories o regular expressions), puwede mo itong i-define gamit ang raw string `r""`:

```python
not_tab_string = r"\t" # Kumakatawan sa mga character na '\' at 't'  
len(not_tab_string)    # Katumbas ng 2  
```

Gumamit ng tatlong double quotes para gumawa ng multi-line string:

```python
multi_line_string = """Ito ang unang linya  
Ito ang ikalawang linya  
Ito ang ikatlong linya"""  
```

### Exception Handling

Kapag may naganap na error sa programa, magkakaroon ng `exception` sa Python. Kung hindi natin ito haharapin, titigil ang pagpapatakbo ng programa. Puwedeng gamitin ang `try` at `except` statements para mahuli ang exception:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Hindi puwedeng mag-divide by zero"  
```

Bagama't sa ibang programming languages, ang exceptions ay itinuturing na masama, sa Python, ang madalas na paghawak ng exceptions ay makapagpapaganda at makapagpapalinis sa iyong code.

### Lists

#### Creating Lists

Ang listahan ay isang simpleng ordered collection, at ito ang pinakapangunahing data structure sa Python (katulad ng arrays sa ibang languages, pero mayroon itong ilang dagdag na feature). Para gumawa ng listahan:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Katumbas ng 3  
list_sum = sum(integer_list)      # Katumbas ng 6  
```
#### Accessing Values in a List


Maaari mong i-access ang mga value sa isang listahan gamit ang square brackets at index:

```python
x = range(10)       # Nakukuha ang listahan x = [0, 1, ..., 9]  
zero = x[0]         # Katumbas ng 0, nagsisimula ang index ng listahan sa 0  
one = x[1]          # Katumbas ng 1  
nine = x[-1]        # Katumbas ng 9, huling elemento sa listahan  
eight = x[-2]       # Katumbas ng 8, pangalawa sa huling elemento sa listahan  
x[0] = -1           # Ang kasalukuyang listahan x = [-1, 1, 2, 3, ..., 9]  
```

#### Slicing Lists


Maaari kang mag-slice ng listahan gamit ang square brackets:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Puwede mong gamitin ang `in` para tingnan kung ang isang elemento ay nasa listahan:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Ang ganitong paraan ng paghahanap ng elemento ay hindi masyadong efficient. Gamitin lang ito kung maliit ang listahan o kung hindi mo gaanong pinapansin ang bilis ng paghahanap.

#### Concatenating Lists

Sa Python, napakadaling pagsamahin ang dalawang listahan:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Ang kasalukuyang x = [1,2,3,4,5,6]  
```

Kung ayaw mong baguhin ang orihinal na listahan `x`, puwede kang gumamit ng 'plus' operator para gumawa ng bagong listahan:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Ang kasalukuyang y = [1, 2, 3, 4, 5, 6]; hindi nagbago ang x  
```

Madalas, ganito ang paraan ng pagdagdag ng isang elemento sa listahan:

```python
x = [1, 2, 3]  
x.append(0)           # Ang kasalukuyang x = [1, 2, 3, 0]  
y = x[-1]             # Katumbas ng 0  
z = len(x)            # Katumbas ng 4  
```

#### List Unpacking

Kung alam mo kung ilang elemento ang nasa listahan, madaling i-unpack ang listahan:

```python
x, y = [1, 2]         # Ang kasalukuyang x = 1, y = 2  
```

Kung hindi pareho ang bilang ng elemento sa magkabilang panig ng equation, magkakaroon ka ng _ValueError_. Kaya mas madalas, ginagamit natin ang underscore para ilagay ang natitirang bahagi ng listahan:

```python
_, y = [1, 2]         # Ang y == 2, hindi pinapansin ang unang elemento  
```

### Tuples

Magkapareho ang listahan at tuple, ang tanging pagkakaiba lang sa listahan ay hindi puwedeng baguhin ang mga elemento sa tuple.

#### Creating Tuples

Maaari kang gumawa ng tuple gamit ang parentheses o nang walang anumang parentheses:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Ang kasalukuyang my_list ay [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Hindi puwedeng baguhin ang tuple"  
```

Malaking tulong ang tuples para madaling makakuha ng maraming return value mula sa isang function:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Katumbas ng (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Ang tuples (at listahan) ay sumusuporta sa sabay-sabay na assignment ng maraming elemento:

```python
x, y = 1, 2       # Ang kasalukuyang x = 1, y = 2  
x, y = y, x       # Pagpapalit ng value ng dalawang variable sa Python; ang kasalukuyang x = 2, y = 1  
```

### Dictionaries

#### Creating Dictionaries

Ang isa pang batayang data structure sa Python ay ang dictionary, na nagbibigay-daan sa iyo na mabilis na makuha ang katumbas na value (value) sa pamamagitan ng keyword (key):

```python
empty_dict = {}                       # Isang 'very Pythonic' na depinisyon ng empty dictionary  
empty_dict2 = dict()                  # Hindi masyadong 'Pythonic' na depinisyon ng empty dictionary  
grades = { "Joel" : 80, "Tim" : 95 }  # Pag-iimbak ng dictionary  
```

#### Dictionary Element Lookup

Puwede mong gamitin ang square brackets at ang keyword para hanapin ang katumbas na value:

```python
joels_grade = grades["Joel"]          # Katumbas ng 80  
```

Kung ang keyword na hinahanap ay wala sa dictionary, magbabalik ito ng `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Walang grado para kay Kate!"  
```

Maaari mong gamitin ang `in` para tingnan kung ang keyword ay nasa dictionary:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Ang dictionary ay may paraan na nagbabalik ng default value; kapag ang keyword na hinahanap ay wala sa dictionary, ibabalik nito ang itinakdang default value (sa halip na magkaroon ng exception):

```python
joels_grade = grades.get("Joel", 0)   # Katumbas ng 80  
kates_grade = grades.get("Kate", 0)   # Katumbas ng 0  
no_ones_grade = grades.get("No One")  # Nagbabalik ng default value na None  
```

#### Modifying Dictionaries

Maaari mong gamitin ang square brackets para gumawa at magbago ng key-value pairs sa dictionary:

```python
grades["Tim"] = 99                    # Pinapalitan ang lumang value  
grades["Kate"] = 100                  # Nagdaragdag ng key-value pair  
num_students = len(grades)            # Katumbas ng 3  
```

Madalas nating gagamitin ang dictionary sa ganitong paraan para ipahayag ang istraktura ng data:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Bukod sa paghahanap ng partikular na keyword, puwede rin nating manipulahin ang lahat ng keywords sa ganitong paraan:

```python
tweet_keys = tweet.keys()             # Nakukuha ang listahan ng mga keyword (keys)  
tweet_values = tweet.values()         # Nakukuha ang listahan ng mga value  
tweet_items = tweet.items()           # Nakukuha ang (key, value) tuple  
"user" in tweet_keys                  # Nagbabalik ng True, ginagamit ang mas mababang-efficiency na 'in' search sa listahan  
"user" in tweet                       # Mas 'Pythonic' na gamit, ginagamit ang high-efficiency na 'in' search sa dictionary  
"joelgrus" in tweet_values            # True  
```

Ang mga key sa dictionary ay unique, at ang listahan ay hindi puwedeng gamitin bilang key sa dictionary. Kung kailangan mo ng multi-part key, puwede kang gumamit ng tuple, o sa anumang paraan ay i-convert ang key sa isang string.

#### Default Dictionaries (`defaultdict`)

Kung sinusubukan mong bilangin ang dalas ng bawat salita sa isang dokumento, isang malinaw na paraan ay gumawa ng dictionary kung saan ang salita ang key, at ang frequency ang katumbas na value. Pagkatapos, i-iterate ang dokumento; kapag nakita ang isang salita na lumabas na, dagdagan ng 1 ang value ng key sa dictionary. Kapag nakakita ng bagong salita, magdagdag ng key-value pair sa dictionary:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Siyempre, puwede mo ring i-handle ang isang missing key nang 'pre-emptively' sa ganitong paraan:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Ang ikatlong paraan ay ang paggamit ng `get`. Ang paraang ito ay mahusay sa paghawak ng mga missing keys:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Ang `defaultdict` ay katulad ng ordinaryong dictionary, ang tanging pagkakaiba lamang ay kapag sinubukan mong hanapin ang isang non-existent key, awtomatikong gagawa ang `defaultdict` ng key-value pair gamit ang key na ibinigay mo. Para magamit ang `defaultdict`, kailangan mong i-import ang `collections` library:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # Ang int() ay gumagawa ng 0  
for word in document:  
    word_counts[word] += 1  
```

Ang `defaultdict` ay napakagamit din sa mga listahan, ordinaryong dictionary, at maging sa mga custom function:

```python
dd_list = defaultdict(list)           # Ang list() ay gumagawa ng isang empty list  
dd_list[2].append(1)                  # Ang kasalukuyang dd_list ay {2: [1]}  
dd_dict = defaultdict(dict)           # Ang dict() ay gumagawa ng isang empty dictionary  
dd_dict["Joel"]["City"] = "Seattle"   # Ang kasalukuyang dd_dict ay { "Joel" : { "City" : Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Gumawa ng dictionary kung saan ang value para sa isang key ay listahan  
dd_pair[2][1] = 1                     # Ang kasalukuyang dd_pair ay {2: [0,1]}  
```

Ang paraang ito ay lubhang kapaki-pakinabang; sa hinaharap, kapag kailangan nating kumuha ng ilang key-value results mula sa dictionary, hindi na natin kailangang tingnan kung umiiral ang key.

### Counter

Direktang binabago ng Counter ang isang set ng values sa isang dictionary-like object, kung saan ang key ay isang elemento mula sa set na iyon, at ang katumbas na value ay ang bilang ng beses na lumabas ang elementong iyon. Madalas itong ginagamit kapag gumagawa ng histogram:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c (halos) ay { 0 : 2, 1 : 1, 2 : 1 }  
```

Sa ganitong paraan, mayroon na tayong napakadaling paraan para magbilang ng word frequency:

```python
word_counts = Counter(document)  
```

Mayroon ding napakadalas gamiting paraan ang Counter, ang `most_common`, na direktang makakakuha ng mga pinakamadalas na salita at ang kanilang mga frequency:

```python
# Ipi-print ang top 10 na pinakamadalas na salita at ang kanilang bilang  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Sets

Ang isa pang data structure sa Python ay ang set, na isang koleksyon ng mga magkakaibang elemento.  
Maaari kang gumawa ng set at magdagdag ng mga elemento dito sa ganitong paraan:

```python
s = set()  
s.add(1)          # Ang s ay { 1 }  
s.add(2)          # Ang s ay { 1, 2 }  
s.add(2)          # Ang s ay { 1, 2 }  
x = len(s)        # Katumbas ng 2  
y = 2 in s        # Katumbas ng True  
z = 3 in s        # Katumbas ng False  
```

Dalawang malalaking dahilan sa paggamit ng set:

Una, napaka-efficient ng `in` operation sa sets. Kapag napakalaki ng bilang ng elemento sa isang dataset, mas angkop na gamitin ang set para maghanap ng elemento kaysa sa listahan:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Hindi epektibo, kailangang suriin ang bawat elemento  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Matagumpay ang paghahanap, at napakabilis  
```

Pangalawa, napakadaling gamitin ang set para makuha ang mga distinct na elemento mula sa isang grupo ng data:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Pero sa totoo lang, ang sets ay hindi kasing dalas gamitin ng dictionaries at lists.

### Conditional Statements

Sa karamihan ng programming languages, puwede kang gumamit ng _if_ para ipahayag ang conditional branching sa ganitong paraan:

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

Puwede mo ring isulat ang conditional branching statement sa isang linya, pero bihira itong gamitin:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Loop Statements

#### `while` Loop


Ang `while` loop sa Python:

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### `for` Loop

Mas madalas gamitin ang `for-in` loop:

```python
for x in range(10):  
    print x, "is less than 10"  
```

Para sa mas kumplikadong logical expressions, puwedeng gamitin ang `continue` at `break` statements:

```python
for x in range(10):  
    if x == 3:  
        continue          # Direktang pupunta sa susunod na iteration ng loop  
    if x == 5:  
        break             # Ganap na lalabas sa loop  
    print x  
```

Ang resulta ay magpi-print ng 0, 1, 2, at 4.

### Truthiness

Ang paggamit ng `Booleans` sa Python ay halos kapareho sa ibang programming languages, ang tanging pagkakaiba ay dapat na naka-capitalize ang unang letra:

```python
one_is_less_than_two = 1 < 2      # Ay True  
true_equals_false = True == False # Ay False  
```

Ginagamit ng Python ang `None` para ipahiwatig na walang value, katulad ng `null` sa ibang languages:

```python
x = None  
print x == None        # Ipi-print ang True, hindi masyadong elegant  
print x is None        # Ipi-print ang True, mas elegant  
```

Pinapayagan ka ng Python na gumamit ng ibang values sa halip na Boolean values; lahat ng sumusunod ay katumbas ng `False`:

*   False
*   None
*   [] (isang empty list)
*   {} (isang empty dictionary)
*   “”
*   set()
*   0
*   0.0

Katulad nito, marami ring values na katumbas ng `True`. Dahil dito, napakadali mong matukoy ang mga empty lists, empty strings, empty dictionaries, at iba pa.

Siyempre, kung hindi mo inaasahan ang resulta, maaaring magkaroon ng error sa paggamit:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Isang mas simpleng paraan, na may parehong epekto sa nabanggit:

```python
first_char = s and s[0]  
```

Kung ang unang value ay True, ibabalik nito ang ikalawang value; kung hindi, ibabalik nito ang unang value.

Katulad nito, kung ang `x` ay maaaring isang numero o None, ganito ang paraan para makakuha ng `x` na siguradong numero:

```python
safe_x = x or 0  
```

Mayroon ding `all` function sa Python na nagbabalik ng `True` kung ang bawat elemento ay `True`. Ang `any` function naman ay nagbabalik ng `True` kung kahit isa lang sa mga elemento ay `True`. Halimbawa, para sa isang listahan kung saan ang bawat elemento ay 'totoo', ang `all` function ay magbabalik ng `True`, kung hindi, magbabalik ito ng `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, ang {} ay katumbas ng 'False'  
any([True, 1, {}])          # True  
all([])                     # True, walang elementong katumbas ng 'False'  
any([])                     # False, walang elementong katumbas ng 'True'  
```

**Dagdag na Babasahin:**  
[Mga Karaniwang Python Syntax sa Data Science (Advanced)](https://philoli.com/python-tutorails-advanced-level/)
