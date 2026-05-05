---
title: Često korištena Python sintaksa u podatkovnoj znanosti (osnove)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

Posljednjih dana čitam knjigu [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), koja je odličan i lako razumljiv uvod u podatkovnu znanost. Jedno poglavlje u njoj posvećeno je osnovnoj Python sintaksi i naprednijim funkcijama koje se često koriste u podatkovnoj znanosti. Budući da smatram kako je objašnjenje izvrsno, sažeto i jasno, preveo sam ga i objavljujem ovdje kao podsjetnik.  
[Često korištena Python sintaksa u podatkovnoj znanosti (osnove)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Često korištena Python sintaksa u podatkovnoj znanosti (napredno)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Ovo poglavlje usredotočeno je na predstavljanje osnovne Python sintakse i funkcija (temeljenih na Pythonu 2.7) koje su iznimno korisne u obradi podataka.

<!--more-->

### Formatiranje razmacima

Mnogi jezici koriste zagrade za kontrolu blokova koda, ali Python koristi uvlačenje:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # prvi redak "for i" petlje  
    for j in [1, 2, 3, 4, 5]:  
        print j      # prvi redak "for j" petlje  
        print i + j  # zadnji redak "for j" petlje  
    print i          # zadnji redak "for i" petlje  
print "done looping"  
```

To Python kod čini vrlo čitljivim, ali istovremeno znači da morate uvijek paziti na formatiranje. Razmaci unutar zagrada se ignoriraju, što je korisno kod pisanja dugih izraza:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Također olakšava čitljivost koda:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### Višelinijske naredbe

Dvije prekinute linije možete spojiti pomoću obrnute kose crte (ova se praksa rijetko koristi):  

```python
two_plus_three = 2 + \
                 3  
```

### Moduli

Bilo da se radi o ugrađenim Python modulima ili modulima trećih strana koje ste sami preuzeli, svi se moraju ručno uvesti prije upotrebe.

1. Jednostavno izravno uvozite cijeli modul:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Ovdje uvezeni modul `_re_` koristi se za regularne izraze. Nakon uvoza modula, možete izravno pozvati njegove funkcije koristeći naziv modula kao prefiks (npr. re.).

2. Ako se naziv modula koji uvozite već koristi u kodu, možete ga uvesti pod drugim imenom:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Ako ste jako nestašni, možete uvesti cijeli modul u trenutni imenski prostor, što bi slučajno moglo prebrisati varijable koje ste već definirali:

```python
match = 10  
from re import *  # modul re sadrži funkciju match  
print match       # ispisuje funkciju match  
```

Budući da ste dobri, siguran sam da to nećete učiniti.

### Aritmetika

Python 2.7 podrazumijevano koristi cjelobrojno dijeljenje, pa je $5 / 2 = 2$. No, često nam ne treba cjelobrojno dijeljenje, pa možemo uvesti ovaj modul:

```python
from __future__ import division  
```

Nakon uvoza, dobivamo $5 / 2 = 2.5$.  
Cjelobrojno dijeljenje: $5 // 2 = 2$.

### Funkcije

#### Definicija funkcije

Funkcija je pravilo koje prima nula ili više ulaznih vrijednosti i vraća određeni izlaz. U Pythonu, funkciju definiramo pomoću `def ime_funkcije(parametri)`:

```python
def double(x):  
    """Ovdje možete napisati objašnjenje funkcije  
    npr., ova funkcija množi ulaz s 2"""  
    # Ovdje se piše tijelo funkcije, ne zaboravite uvlačenje  
    return x * 2  
```
#### Korištenje funkcija

U Pythonu su funkcije objekti prve klase, što znači da ih možemo dodijeliti varijabli ili ih proslijediti kao argumente drugim funkcijama:

```python
def apply_to_one(f):  
    """Poziva funkciju f i prosljeđuje joj 1 kao argument"""  
    return f(1)  
my_double = double          # double se odnosi na funkciju definiranu u prethodnom odjeljku  
x = apply_to_one(my_double) # x je jednako 2  
```
#### Anonimne funkcije

Anonimne funkcije mogu se stvoriti i pomoću `lambda` izraza:

```python
y = apply_to_one(lambda x: x + 4)     # jednako je 5  
```

`lambda` se može dodijeliti drugim varijablama, ali većina će vam preporučiti da se ipak držite _def_ definicije:

```python
another_double = lambda x: 2 * x      # ne preporučuje se  
def another_double(x): return 2 * x   # preporučena praksa  
```

Dodatno:

*   `lambda` je samo izraz; tijelo funkcije je puno jednostavnije od onoga kod `def`.
*   Tijelo `lambda` izraza je izraz, a ne blok koda. U `lambda` izraz možete ugraditi samo ograničenu logiku.

#### Prosljeđivanje argumenata funkcije

Parametri funkcije mogu imati zadane vrijednosti. Ako se funkcija pozove bez argumenata, koristit će se zadane vrijednosti; ako se argumenti proslijede, koristit će se specificirane vrijednosti:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # ispisuje "hello"  
my_print()            # ispisuje "my default message"  
```

Ponekad je također korisno navesti argumente izravno po imenu:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # vraća 5  
subtract(0, 5)    # vraća -5  
subtract(b=5)     # isto kao prethodno, vraća -5  
```
### Stringovi

Stringove možete stvarati pomoću jednostrukih ili dvostrukih navodnika (navodnici se moraju podudarati):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Obrnuta kosa crta koristi se za znakove za bijeg, npr.:

```python
tab_string = "\t"      # predstavlja tab znak  
len(tab_string)        # jednako je 1  
```

Kada želite koristiti samu obrnutu kosu crtu (za Windows direktorije ili regularne izraze), možete je definirati pomoću sirovih stringova `r""`:

```python
not_tab_string = r"\t" # predstavlja znakove '\' i 't'  
len(not_tab_string)    # jednako je 2  
```

Višelinijske stringove možete stvoriti pomoću tri dvostruka navodnika:

```python
multi_line_string = """Ovo je prvi redak  
Ovo je drugi redak  
Ovo je treći redak"""  
```

### Rukovanje iznimkama

Kada program naiđe na pogrešku, Python će pokrenuti `iznimku (exception)`. Ako je ne obradimo, program će se prekinuti. Iznimke se mogu uhvatiti pomoću `try` i `except` izraza:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Ne može se dijeliti s nulom"  
```

Iako se u drugim jezicima iznimke ponekad smatraju lošom praksom, u Pythonu obrada iznimaka može vaš kod učiniti elegantnijim i čišćim.

### Liste

#### Stvaranje lista

Liste su jednostavne, uređene kolekcije i jedna od najosnovnijih struktura podataka u Pythonu (slično poljima u drugim jezicima, ali s dodatnim značajkama). Za stvaranje liste:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # jednako je 3  
list_sum = sum(integer_list)      # jednako je 6  
```
#### Pristupanje vrijednostima u listi

Vrijednostima u listi možete pristupiti putem indeksa u uglatim zagradama:

```python
x = range(10)       # lista x postaje [0, 1, ..., 9]  
zero = x[0]         # jednako je 0, indeksiranje liste počinje od 0  
one = x[1]          # jednako je 1  
nine = x[-1]        # jednako je 9, zadnji element u listi  
eight = x[-2]       # jednako je 8, pretposljednji element u listi  
x[0] = -1           # sada je lista x = [-1, 1, 2, 3, ..., 9]  
```

#### Rezanje lista

Listu možete rezati pomoću uglatih zagrada:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Pomoću operatora `in` možete provjeriti nalazi li se element u listi:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Ovaj način pretraživanja elemenata je neučinkovit, stoga ga koristite samo ako je lista mala ili ako vam vrijeme pretraživanja nije kritično.

#### Spajanje lista

U Pythonu je vrlo lako spojiti dvije liste:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # sada je x = [1,2,3,4,5,6]  
```

Ako ne želite mijenjati izvornu listu x, možete koristiti operator zbrajanja za stvaranje nove liste:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # sada je y = [1, 2, 3, 4, 5, 6]; x ostaje nepromijenjen  
```

Često se element dodaje u listu na sljedeći način:

```python
x = [1, 2, 3]  
x.append(0)           # sada je x = [1, 2, 3, 0]  
y = x[-1]             # jednako je 0  
z = len(x)            # jednako je 4  
```

#### Raspakiranje lista

Ako znate koliko elemenata ima lista, lako je možete raspakirati:

```python
x, y = [1, 2]         # sada je x = 1, y = 2  
```

Ako broj elemenata na obje strane izraza nije jednak, dobit ćete _ValueError_. Zbog toga češće koristimo podcrtu za preostale elemente liste:

```python
_, y = [1, 2]         # sada je y == 2, prvi element se ignorira  
```

### Tuplovi

Liste i tuplovi su vrlo slični. Jedina razlika je u tome što se elementi u tuplu ne mogu mijenjati.

#### Stvaranje tuplova

Tuplove možete stvarati pomoću zagrada ili bez njih:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # sada je my_list [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Tupl se ne može mijenjati"  
```

Tuplovi su vrlo korisni za vraćanje više vrijednosti iz funkcije:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # jednako je (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tuplovi (i liste) podržavaju istovremeno dodjeljivanje više elemenata:

```python
x, y = 1, 2       # sada je x = 1, y = 2  
x, y = y, x       # zamjena vrijednosti dviju varijabli u Pythonu; sada je x = 2, y = 1  
```

### Rječnici

#### Stvaranje rječnika

Još jedna osnovna struktura podataka u Pythonu je rječnik, koji vam omogućuje brzo dohvaćanje vrijednosti (value) putem ključa (key):

```python
empty_dict = {}                       # vrlo Pythonovski način definiranja praznog rječnika  
empty_dict2 = dict()                  # manje Pythonovski način definiranja praznog rječnika  
grades = { "Joel" : 80, "Tim" : 95 }  # pohranjivanje rječnika  
```

#### Pretraživanje elemenata rječnika

Vrijednosti možete pronaći pomoću uglatih zagrada i ključa:

```python
joels_grade = grades["Joel"]          # jednako je 80  
```

Ako traženi ključ nije u rječniku, dobit ćete `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "nema ocjene za Kate!"  
```

Pomoću operatora `in` možete provjeriti nalazi li se ključ u rječniku:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Rječnici imaju metodu koja vraća zadanu vrijednost ako traženi ključ nije pronađen (umjesto da se pokrene iznimka):

```python
joels_grade = grades.get("Joel", 0)   # jednako je 80  
kates_grade = grades.get("Kate", 0)   # jednako je 0  
no_ones_grade = grades.get("No One")  # vraća zadanu vrijednost None  
```

#### Modifikacija rječnika

Parove ključ-vrijednost u rječniku možete stvarati i mijenjati pomoću uglatih zagrada:

```python
grades["Tim"] = 99                    # zamjenjuje staru vrijednost  
grades["Kate"] = 100                  # dodaje par ključ-vrijednost  
num_students = len(grades)            # jednako je 3  
```

Rječnike ćemo često koristiti na ovaj način za predstavljanje strukture podataka:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Osim pretraživanja specifičnih ključeva, možemo manipulirati svim ključevima na sljedeći način:

```python
tweet_keys = tweet.keys()             # dobiva listu ključeva  
tweet_values = tweet.values()         # dobiva listu vrijednosti  
tweet_items = tweet.items()           # dobiva tuplove (ključ, vrijednost)  
"user" in tweet_keys                  # vraća True, koristi se manje učinkovito pretraživanje `in` u listi  
"user" in tweet                       # više Pythonovski način, koristi se učinkovito pretraživanje `in` u rječniku  
"joelgrus" in tweet_values            # True  
```

Ključevi u rječnicima su jedinstveni, a liste se ne mogu koristiti kao ključevi. Ako vam je potreban višedijelni ključ, možete koristiti tuplove ili pretvoriti ključ u string na neki način.

#### Ugrađeni rječnici (Defaultdict)

Ako pokušavate prebrojati učestalost svake riječi u dokumentu, očigledan pristup je stvaranje rječnika gdje su riječi ključevi, a njihove učestalosti odgovarajuće vrijednosti. Zatim iterirate kroz dokument, i kada naiđete na riječ koja već postoji, povećate njezinu vrijednost za 1; kada naiđete na novu riječ, dodate novi par ključ-vrijednost u rječnik:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Naravno, možete se poslužiti i pristupom "prvo izvrši, pa provjeri" kako biste unaprijed obradili ključ koji nedostaje:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Treći način je korištenje metode `get`, koja izvrsno rješava problem nedostajućih ključeva:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Ugrađeni rječnici (defaultdict) su poput običnih rječnika, s jedinom razlikom što će, kada pokušate pronaći nepostojeći ključ, automatski stvoriti par ključ-vrijednost koristeći zadanu tvornicu funkcija koju ste im dali. Da biste koristili `defaultdict`, morate uvesti biblioteku `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() generira 0  
for word in document:  
    word_counts[word] += 1  
```

Defaultdict je također vrlo koristan s listama, običnim rječnicima, pa čak i s prilagođenim funkcijama:

```python
dd_list = defaultdict(list)           # list() generira praznu listu  
dd_list[2].append(1)                  # sada je dd_list {2: [1]}  
dd_dict = defaultdict(dict)           # dict() generira prazan rječnik  
dd_dict["Joel"]["City"] = "Seattle"   # sada je dd_dict { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # stvara rječnik čije su vrijednosti liste  
dd_pair[2][1] = 1                     # sada je dd_pair {2: [0,1]}  
```

Ova je metoda vrlo korisna jer više nećemo morati provjeravati postojanje ključa kada dohvaćamo određene vrijednosti iz rječnika.

### Brojač (Counter)

Brojač (Counter) može izravno pretvoriti skup vrijednosti u objekt sličan rječniku, gdje su ključevi elementi iz tog skupa, a odgovarajuće vrijednosti broj pojavljivanja tih elemenata. Ovo se često koristi pri stvaranju histograma:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c je (otprilike) { 0 : 2, 1 : 1, 2 : 1 }  
```

Tako dobivamo vrlo prikladan način za brojanje učestalosti riječi:

```python
word_counts = Counter(document)  
```

Brojač ima i vrlo korisnu metodu `most_common`, koja izravno vraća nekoliko najčešćih riječi i njihove frekvencije:

```python
# Ispisuje 10 najčešćih riječi i njihove brojeve pojavljivanja  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### Skupovi

Još jedna struktura podataka u Pythonu su skupovi. Skup je kolekcija različitih elemenata.  
Skup možete stvoriti i dodavati mu elemente na sljedeći način:

```python
s = set()  
s.add(1)          # s je { 1 }  
s.add(2)          # s je { 1, 2 }  
s.add(2)          # s je { 1, 2 }  
x = len(s)        # jednako je 2  
y = 2 in s        # jednako je True  
z = 3 in s        # jednako je False  
```

Dva glavna razloga za korištenje skupova su:

Prvo, operacija `in` unutar skupova vrlo je učinkovita. Kada je broj elemenata u skupu podataka iznimno velik, pretraživanje elemenata u obliku skupa očito je prikladnije nego u listi:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # neuspješno, potrebno je provjeriti svaki element  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # pretraživanje uspješno i vrlo brzo  
```

Drugo, vrlo je prikladno koristiti skupove za dohvaćanje različitih elemenata iz skupa podataka:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Međutim, u praksi, skupovi se ne koriste tako često kao rječnici i liste.

### Uvjetne izjave

U većini programskih jezika, uvjetne grane možete izraziti pomoću _if_ izraza na sljedeći način:

```python
if 1 > 2:  
    message = "kad bi samo 1 bio veći od dva…"  
elif 1 > 3:  
    message = "elif znači 'else if'"  
else:  
    message = "kad sve drugo zakaže, koristite else (ako želite)"  
```

Uvjetnu granu također možete napisati u jednom retku, ali to se rijetko koristi:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### Petlje

#### _while_ petlja

`while` petlja u Pythonu:

```python
x = 0  
while x < 10:  
    print x, "je manje od 10"  
    x += 1  
```

#### _for_ petlja

Češće se koristi `for-in` petlja:

```python
for x in range(10):  
    print x, "je manje od 10"  
```

Za složenije logičke izraze mogu se koristiti `continue` i `break` naredbe:

```python
for x in range(10):  
    if x == 3:  
        continue          # izravno prelazi na sljedeću iteraciju petlje  
    if x == 5:  
        break             # potpuno izlazi iz petlje  
    print x  
```

Rezultat će biti ispis brojeva 0, 1, 2 i 4.

### Istinitost

Upotreba Booleovih varijabli u Pythonu slična je onoj u drugim jezicima, s jedinom razlikom što početno slovo mora biti veliko:

```python
one_is_less_than_two = 1 < 2      # je True  
true_equals_false = True == False # je False  
```

Python koristi `None` za označavanje nepostojanja vrijednosti, slično `null` u drugim jezicima:

```python
x = None  
print x == None        # ispisuje True, nije elegantno  
print x is None        # ispisuje True, elegantnije  
```

Python vam dopušta korištenje drugih vrijednosti umjesto Booleovih, a sljedeće su ekvivalentne `False`:

*   False
*   None
*   [] (prazna lista)
*   {} (prazan rječnik)
*   “”
*   set()
*   0
*   0.0

Slično tome, postoji mnogo ekvivalentnih vrijednosti za `True`, što vam olakšava provjeru praznih lista, praznih stringova, praznih rječnika i slično.

Naravno, ako ne možete predvidjeti rezultat, moglo bi doći do pogrešaka tijekom korištenja:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Jednostavniji pristup, s istim učinkom kao i gore navedeni:

```python
first_char = s and s[0]  
```

Ako je prva vrijednost istinita, vratit će se druga vrijednost; inače, vratit će se prva.

Slično tome, ako je x potencijalno broj ili `None`, ovako možete osigurati da x bude broj:

```python
safe_x = x or 0  
```

Python također ima funkciju `all` koja vraća `True` ako su svi elementi istiniti. Funkcija `any` vraća `True` ako je barem jedan element istinit. Na primjer, za listu u kojoj je svaki element "istinit", funkcija `all` će vratiti `True`, inače će vratiti `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} je ekvivalentno "False"  
any([True, 1, {}])          # True  
all([])                     # True, ne postoji element ekvivalentan "False"  
any([])                     # False, ne postoji element ekvivalentan "True"  
```

**Napredno čitanje:**  
[Često korištena Python sintaksa u podatkovnoj znanosti (napredno)](https://philoli.com/python-tutorails-advanced-level/)
