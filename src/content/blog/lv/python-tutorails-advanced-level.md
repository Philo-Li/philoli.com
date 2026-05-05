---
title: Python biežāk lietotā sintakse datu zinātnē (padziļināti)
date: 2018-11-07 23:53:13
tags: Python
categories: Datu zinātne
mathjax: true
---
Šajās dienās lasu grāmatu "[Data Science from Scratch](https://book.douban.com/subject/26364377/)" ([PDF adrese](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), un tā ir lieliska, viegli saprotama ievadgrāmata datu zinātnē. Vienā no tās nodaļām tika aplūkota Python pamatsintakse un biežāk lietotā padziļinātā sintakse datu zinātnē. Man šķita, ka izklāsts ir ļoti labs, kodolīgs un skaidrs, tāpēc nolēmu to pārtulkot un ievietot šeit kā atgādinājumu.
[Biežāk lietotā Python sintakse datu zinātnē (pamati)](https://philoli.com/python-tutorails-basic-level/)
[Biežāk lietotā Python sintakse datu zinātnē (padziļināti)](https://philoli.com/python-tutorails-advanced-level/)

Šī nodaļa koncentrējas uz Python padziļināto sintaksi un funkcijām (balstoties uz Python 2.7), kas ir ļoti noderīgas datu apstrādē.

<!--more-->

### Kārtošana (Sorting)

Ja vēlaties sakārtot Python sarakstu, varat izmantot saraksta metodi `sort`. Ja nevēlaties mainīt sākotnējo sarakstu, varat izmantot funkciju `sorted`, kas atgriezīs jaunu, sakārtotu sarakstu:

```python
x = [4,1,2,3]
y = sorted(x)       # y = [1,2,3,4], x nemainās
x.sort()            # tagad x = [1,2,3,4]
# Pēc noklusējuma 'sort' vai 'sorted' kārto sarakstu augošā secībā.
```

Ja vēlaties sakārtot dilstošā secībā, varat norādīt parametru `reverse = True`.

Varat arī definēt pielāgotu kārtošanas funkciju, lai saraksts tiktu sakārtots pēc noteikta atslēgvārda:

```python
# Kārtošana pēc absolūtās vērtības dilstošā secībā
x = sorted([-4,1,-2,3], key=abs, reverse=True) # ir [-4,3,-2,1]
# Kārtošana pēc vārdu biežuma dilstošā secībā
wc = sorted(word_counts.items(),
key=lambda (word, count): count,
reverse=True)
```

### Sarakstu ģenerēšana (List Comprehensions)

Mēs bieži saskaramies ar situācijām, kad vēlamies no saraksta atlasīt noteiktus elementus, lai izveidotu jaunu sarakstu, vai mainīt dažu elementu vērtības, vai darīt abus. Python ierastā pieeja šādos gadījumos ir sarakstu ģenerēšana (List Comprehensions):

```python
even_numbers = [x for x in range(5) if x % 2 == 0]  # [0, 2, 4]
squares = [x * x for x in range(5)]                 # [0, 1, 4, 9, 16]
even_squares = [x * x for x in even_numbers]        # [0, 4, 16]
```

Līdzīgi varat pārveidot sarakstus par vārdnīcām vai kopām:

```python
square_dict = { x : x * x for x in range(5) }       # { 0:0, 1:1, 2:4, 3:9, 4:16 }
square_set = { x * x for x in [1, -1] }             # { 1 }
```

Ja jums nav nepieciešams izmantot saraksta elementus, varat izmantot apakšsvītru kā mainīgo:

```python
zeroes = [0 for _ in even_numbers] # ir tāds pats garums kā sarakstam even_numbers
```

Sarakstu ģenerēšana atbalsta vairākas `for` cilpas:

```python
pairs = [(x, y)
    for x in range(10)
    for y in range(10)]    # Kopā 100 pāri: (0,0) (0,1) ... (9,8), (9,9)
```

Nākamās `for` cilpas var izmantot iepriekšējo `for` cilpu rezultātus:

```python
increasing_pairs = [(x, y)                      # Ietver tikai datu pārus, kur x < y
                    for x in range(10)          # range(lo, hi) ir vienāds ar
                    for y in range(x + 1, 10)]  # [lo, lo + 1, ..., hi - 1]
```
Nākotnē mēs bieži izmantosim sarakstu ģenerēšanu.

### Ģeneratori un Iteratori (Generators and Iterators)

Sarakstiem ir viena problēma – tie viegli var kļūt ļoti lieli. Piemēram, `range(1000000)` izveidos sarakstu ar miljons elementiem. Ja datus apstrādā pa vienam, tas var aizņemt pārāk ilgu laiku (vai iztērēt atmiņu). Tomēr patiesībā jums var būt nepieciešami tikai pirmie daži dati, padarot pārējās operācijas liekas.

Ģeneratori ļauj jums iterēt tikai cauri tiem datiem, kas jums ir nepieciešami. Ģeneratoru var izveidot, izmantojot funkcijas un `yield` izteiksmi:

```python
def lazy_range(n):
    """slinka range versija"""
    i = 0
    while i < n:
        yield i
        i += 1
```

Tulkotāja piezīme:
Ģenerators ir arī īpašs iterators, un `yield` ir galvenais elements ģeneratora iterācijas realizēšanā. Tas darbojas kā ģeneratora izpildes pauzes un atsākšanas punkts, ļaujot piešķirt vērtību `yield` izteiksmei vai atgriezt tās vērtību. Jebkura funkcija, kas satur `yield` paziņojumu, tiek dēvēta par ģeneratoru. Izejot no ģeneratora, tas saglabā pašreizējo izpildes stāvokli un nākamajā izpildes reizē atjauno to, lai iegūtu nākamo iterācijas vērtību. Sarakstu iterācija aizņem daudz adreses vietas, savukārt ģenerators aizņem aptuveni vienu adreses vietu, tādējādi ietaupot atmiņu.

Šī cilpa patērēs vienu vērtību no `yield` vienlaicīgi, līdz tās visas tiks patērētas:

```python
for i in lazy_range(10):
    do_something_with(i)
```

(Patiesībā Pythonam ir iebūvēta funkcija, kas nodrošina tādu pašu efektu kā `_lazy_range_`, un to sauc par `xrange`, savukārt Python 3. versijā – `lazy`.) Tas nozīmē, ka varat izveidot bezgalīgu virkni:

```python
def natural_numbers():
    """atgriež 1, 2, 3, ..."""
    n = 1
    while True:
        yield n
        n += 1
```

Tomēr nav ieteicams izmantot šādus paziņojumus bez cilpas pārtraukšanas loģikas.

**PADOMS**
> Viens no ģeneratoru iterācijas trūkumiem ir tas, ka elementus var iterēt tikai vienu reizi no sākuma līdz beigām. Ja vēlaties vairākkārtēju iterāciju, jums katru reizi jāizveido jauns ģenerators vai jāizmanto saraksts.

Otrs veids, kā izveidot ģeneratoru: izmantojot ģenerēšanas izteiksmi iekavās:

```python
lazy_evens_below_20 = (i for i in lazy_range(20) if i % 2 == 0)
```

Mēs zinām, ka vārdnīcu metode `items()` atgriezīs sarakstu ar visiem vārdnīcas atslēgu-vērtību pāriem, taču biežāk mēs izmantojam `iteritems()` ģeneratora metodi iterēšanai, kas katru reizi ģenerē un atgriež vienu atslēgu-vērtību pāri.

### Nejaušība (Randomness)
Mācoties datu zinātni, mums bieži būs nepieciešams ģenerēt nejaušus skaitļus, tāpēc vienkārši importējiet `random` moduli, lai to izmantotu:

```python
import random
four_uniform_randoms = [random.random() for _ in range(4)]
# [0.8444218515250481,        # random.random() ģenerē nejaušu skaitli
# 0.7579544029403025,         # nejaušais skaitlis ir normalizēts, diapazonā no 0 līdz 1
# 0.420571580830845,          # šī funkcija ir visbiežāk izmantotā nejaušu skaitļu ģenerēšanai
# 0.25891675029296335]
```

Ja vēlaties iegūt atkārtojamus rezultātus, varat likt `random` modulim ģenerēt pseidogadījuma (t.i., deterministiskus) skaitļus, pamatojoties uz `random.seed` iestatīto iekšējo stāvokli:

```python
random.seed(10)           # iestata sēklu uz 10
print random.random()     # 0.57140259469
random.seed(10)           # atiestata sēklu uz 10
print random.random()     # atkal 0.57140259469
```

Dažreiz mēs izmantojam arī `random.randrange` funkciju, lai ģenerētu nejaušu skaitli noteiktā diapazonā:

```python
random.randrange(10)      # nejauši izvēlas skaitli no range(10) = [0, 1, ..., 9]
random.randrange(3, 6)    # nejauši izvēlas skaitli no range(3, 6) = [3, 4, 5]
```

Ir arī dažas citas metodes, kas reizēm ir ļoti ērtas. Piemēram, `random.shuffle` sajauc saraksta elementu secību, izveidojot jaunu, nejauši sakārtotu sarakstu:

```python
up_to_ten = range(10)
random.shuffle(up_to_ten)
print up_to_ten
# [2, 5, 1, 9, 7, 3, 8, 6, 4, 0] (jūsu rezultātam vajadzētu būt atšķirīgam)
```

Ja vēlaties nejauši izvēlēties vienu elementu no saraksta, varat izmantot metodi `random.choice`:

```python
my_best_friend = random.choice(["Alice", "Bob", "Charlie"]) # Es ieguvu "Bob"
```

Ja vēlaties ģenerēt nejaušu secību, bet nevēlaties sajaukt sākotnējo sarakstu, varat izmantot metodi `random.sample`:

```python
lottery_numbers = range(60)
winning_numbers = random.sample(lottery_numbers, 6) # [16, 36, 10, 6, 25, 9]
```

Jūs varat izvēlēties vairākus nejaušus paraugus (pieļaujot atkārtošanos), izsaucot to vairākas reizes:

```python
four_with_replacement = [random.choice(range(10))
                         for _ in range(4)]
# [9, 4, 4, 2]
```

### Regulārās izteiksmes (Regular Expressions)

Regulārās izteiksmes tiek izmantotas teksta meklēšanā, tās ir nedaudz sarežģītas, bet ļoti noderīgas, tāpēc ir daudz grāmatu, kas tām veltītas. Mēs tās sīkāk izskaidrosim, kad ar tām saskarsimies. Zemāk ir daži piemēri, kā Pythonā izmantot regulārās izteiksmes:

```python
import re
print all([                                 # Visi zemāk minētie apgalvojumi atgriezīs True, jo
    not re.match("a", "cat"),               # * 'cat' nesākas ar 'a'
    re.search("a", "cat"),                  # * 'cat' satur burtu 'a'
    not re.search("c", "dog"),              # * 'dog' nesatur burtu 'c'
    3 == len(re.split("[ab]", "carbs")),    # * sadala vārdu trīs daļās ['c','r','s'] pēc 'a' vai 'b'
    "R-D-" == re.sub("[0-9]", "-", "R2D2")  # * aizstāj ciparus ar defisi
    ])                                      # Izvade True
```

### Objektorientēta programmēšana (Object-Oriented Programming)

Tāpat kā daudzās citās valodās, Python ļauj definēt klases, kas iekapsulē datus, un funkcijas, kas ar tiem darbojas. Mēs tās dažkārt izmantosim, lai mūsu kods būtu skaidrāks un kodolīgāks. To visvienkāršāk ir izskaidrot, veidojot piemēru ar daudz komentāriem. Pieņemsim, ka Pythonā nav iebūvētas kopu (Set) datu struktūras, un mēs vēlētos izveidot savu `Set` klasi. Kādas funkcijas šai klasei vajadzētu būt? Piemēram, ja mums ir `Set`, mums ir jāspēj pievienot tam elementus, dzēst elementus no tā un pārbaudīt, vai tas satur noteiktu vērtību. Tāpēc mēs izveidosim visas šīs funkcijas kā klases metodes. Tādējādi mēs varēsim piekļūt šīm metodēm ar punktu aiz `Set` objekta:

```python
# Saskaņā ar konvenciju, mēs klasēm dodam _PascalCase_ nosaukumus
class Set:
    # Šīs ir metodes (dalībfunkcijas)
    # Katrai metodei ir "self" parametrs pirmajā vietā (vēl viena konvencija)
    # "self" atbilst konkrētajam izmantotajam Set objektam

    def __init__(self, values=None):
        """Šī ir konstruktora funkcija
        Tā tiek izsaukta katru reizi, kad tiek izveidota jauna Set instance
        Var izsaukt šādi:
        s1 = Set() # Tukša kopa
        s2 = Set([1,2,2,3]) # Inicializē kopu ar norādītām vērtībām"""
        self.dict = {} # Katrai Set instancei ir savs dict atribūts
        # Mēs izmantojam šo atribūtu, lai sekotu katram dalībniekam
        if values is not None:
            for value in values:
            self.add(value)

    def __repr__(self):
        """Šis ir Set objekta virknes attēlojums
        Varat to iegūt, ierakstot virkni Python komandu logā vai nododot objektu str() metodei"""
        return "Set: " + str(self.dict.keys())

    # Mēs apzīmēsim dalību, kļūstot par atslēgu self.dict un iestatot atslēgas vērtību uz True
    def add(self, value):
        self.dict[value] = True

    # Ja parametrs ir vārdnīcas atslēga, atbilstošā vērtība ir Set kopā
    def contains(self, value):
        return value in self.dict

    def remove(self, value):
        del self.dict[value]
```

Pēc tam mēs varam izmantot `Set` šādi:

```python
s = Set([1,2,3])
s.add(4)
print s.contains(4)     # True
s.remove(3)
print s.contains(3)     # False
```

### Funkcionālie rīki (Functional Tools)

#### Daļējas funkcijas (Partial Functions)

Nododot funkcijas, dažkārt mēs vēlēsimies izmantot daļu no funkcijas funkcionalitātes, lai izveidotu jaunu funkciju. Vienkāršs piemērs: pieņemsim, ka mums ir funkcija ar diviem mainīgajiem:

```python
def exp(base, power):
    return base ** power
```

Mēs vēlamies to izmantot, lai izveidotu funkciju, kas pieņem vienu mainīgo un atgriež rezultātu no bāzes 2 pakāpes funkcijas `exp(2, power)`.

Protams, mēs varētu definēt jaunu funkciju ar `def`, lai gan tas nešķistu pārāk gudri:

```python
def two_to_the(power):
  return exp(2, power)
```

Gudrāk būtu izmantot `functools.partial` metodi:

```python
from functools import partial
two_to_the = partial(exp, 2)      # Pašreizējai funkcijai ir tikai viens mainīgais
print two_to_the(3)               # 8
```

Ja tiek norādīts nosaukums, varat izmantot `partial` metodi, lai aizpildītu citus parametrus:

```python
square_of = partial(exp, power=2)
print square_of(3)                # 9
```

Ja mēģināsiet manipulēt ar parametriem funkcijas vidū, programma ātri kļūs haotiska, tāpēc, lūdzu, izvairieties no šādas rīcības.

#### Kartēšana (map)

Mēs reizēm izmantosim arī `map`, `reduce` un `filter` funkcijas kā alternatīvu sarakstu ģenerēšanai:

```python
def double(x):
    return 2 * x

xs = [1, 2, 3, 4]
twice_xs = [double(x) for x in xs]      # [2, 4, 6, 8]
twice_xs = map(double, xs)              # Tas pats, kas iepriekš
list_doubler = partial(map, double)     # Funkcijas mērķis ir dubultot sarakstu
twice_xs = list_doubler(xs)             # Arī [2, 4, 6, 8]
```

Metodi `map` var izmantot arī daudzargumentu funkciju kartēšanai uz vairākiem sarakstiem:

```python
def multiply(x, y): return x * y

products = map(multiply, [1, 2], [4, 5])  # [1 * 4, 2 * 5] = [4, 10]
```

#### Filtrēšana (filter)

Līdzīgi, filtrēšana realizē `if` funkcionalitāti sarakstu ģenerēšanā:

```python
def is_even(x):
    """Atgriež True, ja x ir pāra skaitlis, un False, ja x ir nepāra skaitlis"""
    return x % 2 == 0

x_evens = [x for x in xs if is_even(x)]   # [2, 4]
x_evens = filter(is_even, xs)             # Tas pats, kas iepriekš
list_evener = partial(filter, is_even)    # Šī funkcija realizē filtrēšanu
x_evens = list_evener(xs)                 # Arī [2, 4]
```

#### Samazināšana (reduce)

`reduce` metode nepārtraukti apvieno saraksta pirmo un otro elementu, pēc tam apvieno rezultātu ar trešo elementu un atkārto šo procesu, līdz tiek iegūts viens unikāls rezultāts:

```python
x_product = reduce(multiply, xs)          # = 1 * 2 * 3 * 4 = 24
list_product = partial(reduce, multiply)  # Šī funkcija samazina sarakstu
x_product = list_product(xs)              # Arī 24
```

### Uzskaite (enumerate)

Reizēm rodas situācijas, kad, iterējot cauri sarakstam, vienlaikus jāizmanto gan elements, gan tā indekss:

```python
# Nav pārāk Pythoniski (nav pietiekami kodolīgi un eleganti)
for i in range(len(documents)):
    document = documents[i]
    do_something(i, document)

# Arī nav pārāk Pythoniski (nav pietiekami kodolīgi un eleganti)
i = 0
for document in documents:
    do_something(i, document)
    i += 1
```

Viskodolīgākais veids ir izmantot `enumerate` metodi, kas ģenerē virkni pāru `(indekss, elements)`:

```python
for i, document in enumerate(documents):
    do_something(i, document)
```

Līdzīgi, ja vēlaties izmantot tikai indeksu:

```python
for i in range(len(documents)): do_something(i)   # Nav kodolīgi
for i, _ in enumerate(documents): do_something(i) # Kodolīgi
```

Nākotnē mēs bieži izmantosim šo metodi.

### Zip un argumentu atpakošana (zip and Argument Unpacking)

#### Zip

Mēs bieži apstrādājam divus vai vairākus sarakstus, tos saspiežot. Saspiešana faktiski pārveido vairākus sarakstus vienā sarakstā, kas sastāv no atbilstošiem pāriem:

```python
list1 = ['a', 'b', 'c']
list2 = [1, 2, 3]
zip(list1, list2)       # Iegūst [('a', 1), ('b', 2), ('c', 3)]
```

#### Argumentu atpakošana (Argument Unpacking)

Ja vairāku sarakstu garums nav vienāds, saspiešanas process apstāsies pie īsākā saraksta beigām. Varat arī izmantot dīvainu "unzip" atpakošanas paņēmienu, lai atpakotu sarakstus:

```python
pairs = [('a', 1), ('b', 2), ('c', 3)]
letters, numbers = zip(*pairs)
```

Zvaigznīte tiek izmantota argumentu atpakošanai, un tā izmanto `pairs` elementus kā atsevišķus `zip` argumentus. Šāds izsaukums dod to pašu efektu:

```python
zip(('a', 1), ('b', 2), ('c', 3))  # Atgriež [('a','b','c'), ('1','2','3')]
```

Argumentu atpakošanu var izmantot kopā ar citām funkcijām:

```python
def add(a, b): return a + b

add(1, 2)           # Atgriež 3
add([1, 2])         # Izraisa kļūdu
add(*[1, 2])        # Atgriež 3
```

Lai gan tas nav pārāk praktiski, tas ir labs paņēmiens, kā padarīt kodu kodolīgu.

### Nenoteikta garuma argumentu nodošana: `*args` un `**kwargs`

Pieņemsim, ka mēs vēlamies izveidot augstākas kārtas funkciju, kas pieņem vecu funkciju un atgriež jaunu funkciju, kas ir vecā funkcija reizināta ar 2:

```python
def doubler(f):
    def g(x):
      return 2 * f(x)
    return g
```

Piemēra palaišana:
```python
def f1(x):
    return x + 1

g = doubler(f1)
print g(3)        # 8 (== ( 3 + 1) * 2)
print g(-1)       # 0 (== (-1 + 1) * 2)
```

Tomēr, ja tiek nodots vairāk nekā viens arguments, šī metode vairs nav tik noderīga:

```python
def f2(x, y):
    return x + y

g = doubler(f2)
print g(1, 2) # Kļūda TypeError: g() takes exactly 1 argument (2 given)
```

Tāpēc mums ir jānorāda funkcija, kas spēj pieņemt jebkādu argumentu skaitu, un pēc tam jāizmanto argumentu atpakošana, lai nodotu vairākus argumentus, kas izskatās mazliet maģiski:

```python
def magic(*args, **kwargs):
    print "nenosauktie argumenti:", args
    print "atslēgvārdu argumenti:", kwargs
magic(1, 2, key="vārds", key2="vārds2")
# Izvades rezultāts:
# nenosauktie argumenti: (1, 2)
# atslēgvārdu argumenti: {'key2': 'vārds2', 'key': 'vārds'}
```

Kad mēs definējam funkciju šādā veidā, `args` (saīsinājums no arguments) ir pāris, kas satur nenosauktos argumentus, savukārt `kwargs` (saīsinājums no keyword arguments) ir vārdnīca, kas satur nosauktos argumentus.

Tos var izmantot arī gadījumos, kad nodotie argumenti ir saraksts (vai pāris) vai masīvs:

```python
def other_way_magic(x, y, z):
    return x + y + z

x_y_list = [1, 2]
z_dict = { "z" : 3 }
print other_way_magic(*x_y_list, **z_dict)    # 6
```

Jūs varat to izmantot kopā ar dažādām dīvainām metodēm, taču mēs to izmantosim tikai, lai atrisinātu problēmu ar nenoteikta garuma argumentu nodošanu augstākas kārtas funkcijām:

```python
def doubler_correct(f):
    """Darbojas efektīvi neatkarīgi no tā, kas ir f"""
    def g(*args, **kwargs):
        """Neatkarīgi no argumentu skaita, šī funkcija pareizi nodos argumentus f"""
        return 2 * f(*args, **kwargs)
    return g

g = doubler_correct(f2)
print g(1, 2) # 6
```

### Laipni lūgti datu zinātnes pasaulē!

Ding! Apsveicu, jūs atkal esat atvēris jaunas pasaules durvis! Tagad varat doties un patīkami pavadīt laiku!

**Saistītā lasāmviela:**

[Biežāk lietotā Python sintakse datu zinātnē (pamati)](https://philoli.com/python-tutorails-basic-level)
