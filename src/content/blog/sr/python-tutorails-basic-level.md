---
title: Uobičajena Python sintaksa u nauci o podacima (osnove)
date: 2018-11-07 20:53:13
tags: Python
categories: Nauka o podacima
mathjax: true
--- 

Poslednjih dana listam knjigu [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF adresa](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), koja je odlična i lako razumljiva uvodna knjiga o nauci o podacima. Jedno od poglavlja predstavlja osnovnu sintaksu Pythona i naprednu sintaksu često korišćenu u nauci o podacima. Smatram da je objašnjenje odlično, vrlo sažeto i jasno, stoga sam odlučio da ga prevedem i postavim ovde kao podsetnik.  
[Uobičajena Python sintaksa u nauci o podacima (osnove)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Uobičajena Python sintaksau nauci o podacima (napredno)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Ovo poglavlje se fokusira na predstavljanje veoma korisne osnovne sintakse i funkcionalnosti Pythona u obradi podataka (zasnovano na Pythonu 2.7).

<!--more-->

### [](#formatiranje-razmaka "Formatiranje razmaka")Formatiranje razmaka

Mnogi programski jezici koriste zagrade za kontrolu blokova koda, dok Python koristi uvlačenje (indentaciju):

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Prva linija "for i" petlje
    for j in [1, 2, 3, 4, 5]:  
        print j      # Prva linija "for j" petlje
        print i + j  # Poslednja linija "for j" petlje
    print i          # Poslednja linija "for i" petlje
print "done looping"  
```

Ovo Python kod čini izuzetno čitljivim, ali istovremeno znači da uvek morate paziti na formatiranje. Razmaci unutar zagrada se ignorišu, što je korisno pri pisanju dugih izraza:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Takođe, poboljšava čitljivost koda:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#viselinijske-izjave "Višelinijske izjave")Višelinijske izjave

Dve povezane linije mogu se označiti obrnutom kosom crtom (ovo se retko koristi):

```python
two_plus_three = 2 + \
                 3  
```

### [](#moduli "Moduli")Moduli

Bilo da su u pitanju ugrađeni Python moduli ili oni trećih strana koje ste preuzeli, svi moraju biti ručno uvezeni pre upotrebe.

1. Jednostavno, direktno uvozite ceo modul:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Modul `re` ovde uvezan koristi se za regularne izraze. Nakon uvoza, specifične funkcije možete pozivati direktno, koristeći ime modula kao prefiks (npr. `re.`).

2. Ako je naziv modula koji uvozite već u upotrebi u vašem kodu, modul možete uvesti pod drugim imenom:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Ako ste baš nestašni, možete uvesti ceo modul u trenutni imenski prostor, što može nenamerno prebrisati varijable koje ste već definisali:

```python
match = 10  
from re import *  # Modul re sadrži funkciju match
print match       # Štampa funkciju match
```

Pošto ste dobri ljudi, verujem da ovo nećete raditi.

### [](#aritmetika "Aritmetika")Aritmetika

Python 2.7 podrazumevano koristi celobrojno deljenje, tako da je $5 / 2 = 2$. Međutim, često nam nije potrebno celobrojno deljenje, pa možemo uvesti sledeći modul:

```python
from __future__ import division  
```

Nakon uvoza, $5 / 2 = 2.5$.  
Celobrojno deljenje: $5 // 2 = 2$.

### [](#funkcije "Funkcije")Funkcije

#### [](#definisanje-funkcija "Definisanje funkcija")Definisanje funkcija

Funkcija je pravilo koje može primiti nula ili više ulaza, i vratiti određeni izlaz. U Pythonu, funkciju definišemo koristeći `def ime_funkcije(parametri)`:

```python
def double(x):  
    """Ovde možete napisati objašnjenje o funkciji.  
    Na primer, ova funkcija množi ulaz sa 2."""  
    # Ovde možete napisati telo funkcije, ne zaboravite uvlačenje.
    return x * 2  
```
#### [](#koriscenje-funkcija "Korišćenje funkcija")Korišćenje funkcija

U Pythonu, funkcije su objekti prvog reda, što znači da ih možemo dodeliti varijabli, ili ih proslediti kao argumente drugim funkcijama:

```python
def apply_to_one(f):  
    """Poziva funkciju f i prosleđuje 1 kao argument."""  
    return f(1)  
my_double = double          # `double` se odnosi na funkciju definisanu u prethodnom odeljku.
x = apply_to_one(my_double) # `x` je jednako 2.
```
#### [](#anonimne-funkcije "Anonimne funkcije")Anonimne funkcije

Anonimne funkcije se takođe mogu kreirati pomoću `lambda` izraza:

```python
y = apply_to_one(lambda x: x + 4)     # što je jednako 5.
```

`lambda` izraz se može dodeliti varijabli, ali većina ljudi bi vam savetovala da se ipak držite `def` ključne reči:

```python
another_double = lambda x: 2 * x      # Ne preporučuje se.
def another_double(x): return 2 * x   # Preporučeni pristup.
```

Dodatak:

*   `lambda` je samo izraz, a telo funkcije je mnogo jednostavnije od `def` funkcije.
*   Telo `lambda` izraza je izraz, a ne blok koda. Možete u `lambda` izrazu inkapsulirati samo ograničenu logiku.

#### [](#prosleđivanje-parametara-funkcijama "Prosleđivanje parametara funkcijama")Prosleđivanje parametara funkcijama

Parametri funkcije mogu imati podrazumevane vrednosti. Ako se funkcija pozove bez navođenja tog parametra, koristiće se podrazumevana vrednost; ako se parametar navede, koristiće se prosleđena vrednost:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Štampa "hello".
my_print()            # Štampa "my default message".
```

Ponekad je korisno navesti argumente direktno po imenu:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Vraća 5.
subtract(0, 5)    # Vraća -5.
subtract(b=5)     # Isto kao i prethodno, vraća -5.
```
### [](#stringovi "Stringovi")Stringovi

Stringovi se mogu kreirati korišćenjem jednostrukih ili dvostrukih navodnika (navodnici moraju biti upareni):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Obrnuta kosa crta koristi se za označavanje escape karaktera, na primer:

```python
tab_string = "\t"      # predstavlja tab karakter.
len(tab_string)        # što je jednako 1.
```

Kada želite da koristite samu obrnutu kosu crtu (za Windows putanje ili regularne izraze), to možete učiniti definisanjem sirovog stringa `r""`:

```python
not_tab_string = r"\t" # predstavlja karaktere '\' i 't'.
len(not_tab_string)    # što je jednako 2.
```

Višelinijski stringovi se kreiraju pomoću tri dvostruka navodnika:

```python
multi_line_string = """Ovo je prva linija  
Ovo je druga linija  
Ovo je treća linija"""  
```

### [](#obrada-izuzetaka "Obrada izuzetaka")Obrada izuzetaka

Kada dođe do greške u programu, Python podiže `izuzetak (exception)`. Ako ga ne obradimo, program će se prekinuti. Izuzetke možemo uhvatiti pomoću `try` i `except` izraza:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Ne može se deliti nulom."  
```

Iako se u drugim jezicima izuzeci često smatraju lošom praksom, u Pythonu, obrada izuzetaka može učiniti vaš kod elegantnijim i čistijim.

### [](#liste "Liste")Liste

#### [](#kreiranje-lista "Kreiranje lista")Kreiranje lista

Liste su jednostavne, uređene kolekcije, i predstavljaju najosnovniju strukturu podataka u Pythonu (slično nizovima u drugim jezicima, ali sa dodatnim karakteristikama). Kreiranje liste:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # što je jednako 3.
list_sum = sum(integer_list)      # što je jednako 6.
```
#### [](#pristupanje-vrednostima-u-listi "Pristupanje vrednostima u listi")Pristupanje vrednostima u listi

Vrednostima u listi možete pristupati pomoću indeksa u uglastim zagradama:

```python
x = range(10)       # lista `x` dobija vrednosti `x = [0, 1, ..., 9]`
zero = x[0]         # što je jednako 0, indeksiranje liste počinje od 0.
one = x[1]          # što je jednako 1.
nine = x[-1]        # što je jednako 9, poslednji element u listi.
eight = x[-2]       # što je jednako 8, drugi element od kraja liste.
x[0] = -1           # sada je lista `x = [-1, 1, 2, 3, ..., 9]`
```

#### [](#iseckanje-liste "Iseckanje liste")Iseckanje liste

Listu možete iseći pomoću uglastih zagrada:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Možete koristiti `in` operator da proverite da li se element nalazi u listi:

```python
1 in [1, 2, 3]        # Tačno.
0 in [1, 2, 3]        # Netačno.
```

Ovaj metod pretrage elemenata je neefikasan i treba ga koristiti samo kada je lista mala ili kada vam vreme pretrage nije kritično.

#### [](#spajanje-lista "Spajanje lista")Spajanje lista

U Pythonu je vrlo lako spojiti dve liste:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # sada je `x = [1,2,3,4,5,6]`
```

Ako ne želite da modifikujete originalnu listu `x`, možete koristiti operator sabiranja da kreirate novu listu:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # sada je `y = [1, 2, 3, 4, 5, 6]`; `x` se nije promenilo.
```

Često se koristi ovaj način za dodavanje jednog elementa u listu:

```python
x = [1, 2, 3]  
x.append(0)           # sada je `x = [1, 2, 3, 0]`
y = x[-1]             # što je jednako 0.
z = len(x)            # što je jednako 4.
```

#### [](#raspakivanje-lista "Raspakivanje lista")Raspakivanje lista

Ako znate koliko elemenata ima u listi, lako je možete raspakovati:

```python
x, y = [1, 2]         # sada je `x = 1`, `y = 2`.
```

Ako broj elemenata na obe strane znaka jednakosti nije isti, dobićete grešku `ValueError`. Zato često koristimo donju crtu `_` za preostale delove liste:

```python
_, y = [1, 2]         # sada je `y == 2`, prvi element se ignoriše.
```

### [](#tuple "Tuple")Tuple

Liste i tuple su veoma slične. Jedina razlika u odnosu na liste je ta što se elementi u tuple ne mogu menjati.

#### [](#kreiranje-tuple "Kreiranje tuple")Kreiranje tuple

Tuple se mogu kreirati pomoću okruglih zagrada ili bez ikakvih zagrada:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # sada je `my_list` `[1, 3]`
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Nije moguće modifikovati tuple."  
```

Korišćenjem tuple, vrlo je zgodno dobiti više povratnih vrednosti iz funkcije:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # što je jednako `(5, 6)`.
s, p = sum_and_product(5, 10) # `s = 15`, `p = 50`.
```

Tuple (i liste) podržavaju istovremeno dodeljivanje više elemenata:

```python
x, y = 1, 2       # sada je `x = 1`, `y = 2`.
x, y = y, x       # razmena vrednosti dve varijable u Pythonu; sada je `x = 2`, `y = 1`.
```

### [](#rečnici "Rečnici")Rečnici

#### [](#kreiranje-rečnika "Kreiranje rečnika")Kreiranje rečnika

Još jedna osnovna struktura podataka u Pythonu je rečnik, koji vam omogućava da brzo dobijete odgovarajuću vrednost (value) preko ključa (key):

```python
empty_dict = {}                       # Vrlo Pythonic definicija praznog rečnika.
empty_dict2 = dict()                  # Manje Pythonic definicija praznog rečnika.
grades = { "Joel" : 80, "Tim" : 95 }  # Skladištenje rečnika.
```

#### [](#pretraga-elemenata-u-rečniku "Pretraga elemenata u rečniku")Pretraga elemenata u rečniku

Možete koristiti uglaste zagrade sa ključem za pretragu odgovarajuće vrednosti:

```python
joels_grade = grades["Joel"]          # što je jednako 80.
```

Ako traženi ključ nije prisutan u rečniku, dobićete `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Nema ocene za Kate!"  
```

Možete proveriti da li se ključ nalazi u rečniku koristeći `in` operator:

```python
joel_has_grade = "Joel" in grades     # Tačno.
kate_has_grade = "Kate" in grades     # Netačno.
```

Rečnici imaju metod koji može vratiti podrazumevanu vrednost kada traženi ključ nije prisutan (umesto da izazove izuzetak):

```python
joels_grade = grades.get("Joel", 0)   # što je jednako 80.
kates_grade = grades.get("Kate", 0)   # što je jednako 0.
no_ones_grade = grades.get("No One")  # Vraća podrazumevanu vrednost `None`.
```

#### [](#modifikacija-rečnika "Modifikacija rečnika")Modifikacija rečnika

Možete koristiti uglaste zagrade za kreiranje i modifikaciju parova ključ-vrednost u rečniku:

```python
grades["Tim"] = 99                    # Zamenjuje staru vrednost.
grades["Kate"] = 100                  # Dodaje novi par ključ-vrednost.
num_students = len(grades)            # što je jednako 3.
```

Često ćemo koristiti rečnike na ovaj način za predstavljanje strukture podataka:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Pored pretrage specifičnih ključeva, možemo manipulisati svim ključevima na sledeći način:

```python
tweet_keys = tweet.keys()             # Dobija listu ključeva.
tweet_values = tweet.values()         # Dobija listu vrednosti.
tweet_items = tweet.items()           # Dobija tuple `(ključ, vrednost)`.
"user" in tweet_keys                  # Vraća `True`, koristeći neefikasnu pretragu `in` u listi.
"user" in tweet                       # Više Pythonic pristup, koristeći efikasnu `in` pretragu u rečniku.
"joelgrus" in tweet_values            # Tačno.
```

Ključevi u rečniku su jedinstveni, a liste se ne mogu koristiti kao ključevi rečnika. Ako vam je potreban višedelni ključ, možete koristiti tuple, ili na neki način konvertovati ključ u string.

#### [](#ugrađeni-rečnici "Ugrađeni rečnici")Ugrađeni rečnici

Ako pokušavate da prebrojite učestalost svake reči u dokumentu, očigledan pristup je kreiranje rečnika gde je reč ključ, a učestalost je odgovarajuća vrednost. Zatim prolazite kroz dokument, i kada naiđete na reč koja se već pojavila, povećavate vrednost odgovarajućeg ključa za 1; kada naiđete na reč koja se nije pojavila, dodajete novi par ključ-vrednost u rečnik:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Naravno, možete i unapred obraditi nedostajući ključ, koristeći pristup 'prvo uradi, pa onda pitaj':

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Treći metod je korišćenje `get` metoda, koji odlično obrađuje nedostajuće ključeve:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Ugrađeni rečnici (`defaultdict`) su isti kao obični rečnici, s jedinom razlikom što, kada pokušate da pronađete ključ koji ne postoji u rečniku, `defaultdict` će automatski kreirati par ključ-vrednost koristeći ključ koji ste naveli. Da biste koristili `defaultdict`, morate uvesti biblioteku `collections`:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # `int()` generiše 0.
for word in document:  
    word_counts[word] += 1  
```

`defaultdict` je takođe vrlo koristan u listama, običnim rečnicima, pa čak i prilagođenim funkcijama:

```python
dd_list = defaultdict(list)           # `list()` generiše praznu listu.
dd_list[2].append(1)                  # sada je `dd_list` `{2: [1]}`.
dd_dict = defaultdict(dict)           # `dict()` generiše prazan rečnik.
dd_dict["Joel"]["City"] = "Seattle"   # sada je sadržaj `dd_dict` `{"Joel" : {"City" : Seattle"}}`.
dd_pair = defaultdict(lambda: [0, 0]) # Kreira rečnik gde su vrednosti liste.
dd_pair[2][1] = 1                     # sada je sadržaj `dd_pair` `{2: [0,1]}`.
```

Ovaj metod je veoma koristan jer nam ubuduće neće biti potrebno proveravati da li ključ postoji kada želimo da dobijemo određene vrednosti iz rečnika.

### [](#brojač-counter "Brojač Counter")Brojač Counter

`Counter` može direktno pretvoriti skup vrednosti u objekat sličan rečniku, gde je ključ element iz tog skupa, a odgovarajuća vrednost je broj pojavljivanja tog elementa. Ovo se često koristi prilikom kreiranja histograma:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # `c` (otprilike) je `{ 0 : 2, 1 : 1, 2 : 1 }`.
```

Na taj način imamo vrlo zgodan metod za brojanje učestalosti reči:

```python
word_counts = Counter(document)  
```

`Counter` ima i vrlo koristan metod `most_common`, koji direktno vraća nekoliko najčešćih reči i njihove učestalosti:

```python
# Štampa 10 najčešćih reči i njihov broj pojavljivanja.
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#skupovi "Skupovi")Skupovi

Još jedna struktura podataka u Pythonu je skup (set), koji predstavlja kolekciju jedinstvenih elemenata.  
Skup se može kreirati i dodavati elementi na sledeći način:

```python
s = set()  
s.add(1)          # `s` je `{ 1 }`.
s.add(2)          # `s` je `{ 1, 2 }`.
s.add(2)          # `s` je `{ 1, 2 }`.
x = len(s)        # što je jednako 2.
y = 2 in s        # što je jednako `True`.
z = 3 in s        # što je jednako `False`.
```

Dva glavna razloga za korišćenje skupova su:

Prvo, operacija `in` u skupovima je izuzetno efikasna. Kada je broj elemenata u skupu podataka veoma veliki, pretraga elemenata u obliku skupa je očigledno prikladnija od pretrage u listi:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Neuspešno, zahteva proveru svakog elementa.
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Pretraga uspešna i vrlo brza.
```

Drugo, skupovi su veoma zgodni za dobijanje jedinstvenih elemenata iz skupa podataka:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # što je 6.
item_set = set(item_list)             # što je `{1, 2, 3}`.
num_distinct_items = len(item_set)    # što je 3.
distinct_item_list = list(item_set)   # što je `[1, 2, 3]`
```

Međutim, u praksi, skupovi se ne koriste tako često kao rečnici i liste.

### [](#uslovne-izjave "Uslovne izjave")Uslovne izjave

U većini programskih jezika, možete koristiti `if` za uslovne grane na sledeći način:

```python
if 1 > 2:  
    message = "kada bi samo 1 bilo veće od dva…"  
elif 1 > 3:  
    message = "elif znači 'else if'."  
else:  
    message = "kada sve ostalo zakaže, koristite else (ako želite)."  
```

Uslovne grane možete pisati i u jednom redu, ali se to retko koristi:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#petlje "Petlje")Petlje

#### [](#while-petlja "While petlja")_while_ petlja

`while` petlja u Pythonu:

```python
x = 0  
while x < 10:  
    print x, "je manje od 10"  
    x += 1  
```

#### [](#for-petlja "For petlja")_for_ petlja

Češće se koristi `for-in` petlja:

```python
for x in range(10):  
    print x, "je manje od 10"  
```

Za složenije logičke izraze mogu se koristiti `continue` i `break` naredbe:

```python
for x in range(10):  
    if x == 3:  
        continue          # Direktno prelazi na sledeću iteraciju.
    if x == 5:  
        break             # Potpuno izlazi iz petlje.
    print x  
```

Rezultat će biti ispis 0, 1, 2 i 4.

### [](#istinitost "Istinitost")Istinitost

Upotreba Bulovih varijabli (`Booleans`) u Pythonu je slična kao u drugim jezicima, s jedinom razlikom što početno slovo mora biti veliko:

```python
one_is_less_than_two = 1 < 2      # što je `True`.
true_equals_false = True == False # što je `False`.
```

Python koristi `None` za označavanje nepostojanja vrednosti, slično `null`-u u drugim jezicima:

```python
x = None  
print x == None        # Štampa `True`, ali nije najelegantnije.
print x is None        # Štampa `True`, elegantnije.
```

Python vam omogućava da koristite druge vrednosti umesto Bulovih. Sledeće vrednosti su ekvivalentne `False`:

*   False
*   None
*   [] (prazna lista)
*   {} (prazan rečnik)
*   “”
*   set()
*   0
*   0.0

Slično tome, postoje mnoge vrednosti ekvivalentne `True`, što vam omogućava vrlo zgodno proveravanje praznih lista, praznih stringova, praznih rečnika itd.

Naravno, ako ne možete predvideti rezultat, može doći do grešaka tokom upotrebe:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Jednostavniji pristup, čiji je efekat ekvivalentan gore navedenom:

```python
first_char = s and s[0]  
```

Ako je prva vrednost istinita, vratiće se druga vrednost; u suprotnom, vratiće se prva vrednost.

Slično tome, ako `x` može biti broj ili `None`, ovako možete dobiti `x` koje je sigurno broj:

```python
safe_x = x or 0  
```

U Pythonu postoji i funkcija `all`, koja vraća `True` ako su svi elementi istiniti (`True`). Funkcija `any` vraća `True` ako je barem jedan element istinit (`True`). Na primer, za listu u kojoj je svaki element "istinit", funkcija `all` će vratiti `True`, inače će vratiti `False`:

```python
all([True, 1, { 3 }])       # Tačno.
all([True, 1, {}])          # Netačno, `{}` je ekvivalentno `False`.
any([True, 1, {}])          # Tačno.
all([])                     # Tačno, ne postoji nijedan element ekvivalentan `False`.
any([])                     # Netačno, ne postoji nijedan element ekvivalentan `True`.
```

**Dodatno čitanje:**  
[Uobičajena Python sintaksa u nauci o podacima (napredno)](https://philoli.com/python-tutorails-advanced-level/)
