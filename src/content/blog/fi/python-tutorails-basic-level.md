---
title: Yleisiä Python-syntakseja datatieteessä (perusteet)
date: 2018-11-07 20:53:13
tags: Python
categories: Datatiede
mathjax: true
--- 

Olen parin viime päivän ajan lukenut kirjaa [Data Science from Scratch](https://book.douban.com/subject/26364377/) ([PDF-osoite](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), joka on erinomainen ja helposti lähestyttävä johdatus datatieteeseen. Yksi sen luvuista esittelee Pythonin perussyntaksia ja datatieteessä yleisesti käytettyjä edistyneempiä syntakseja. Minusta esitys oli niin selkeä ja ytimekäs, että päätin kääntää sen tänne muistiinpanoiksi.  
[Yleisiä Python-syntakseja datatieteessä (perusteet)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Yleisiä Python-syntakseja datatieteessä (edistyneet)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Tämä luku keskittyy Pythonin perussyntaksiin ja ominaisuuksiin, jotka ovat erittäin hyödyllisiä tiedonkäsittelyssä (perustuu Python 2.7:ään).

<!--more-->

### [](#sisennys-ja-muotoilu "Sisennys ja muotoilu")Sisennys ja muotoilu

Monissa ohjelmointikielissä koodilohkoja hallitaan sulkeilla, mutta Pythonissa käytetään sisennystä:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # "for i" -silmukan ensimmäinen rivi  
    for j in [1, 2, 3, 4, 5]:  
        print j      # "for j" -silmukan ensimmäinen rivi  
        print i + j  # "for j" -silmukan viimeinen rivi  
    print i          # "for i" -silmukan viimeinen rivi  
print "done looping"  
```

Tämä tekee Python-koodista erittäin luettavaa, mutta tarkoittaa myös, että sinun on kiinnitettävä jatkuvasti huomiota muotoiluun. Sulkeiden sisällä olevat välilyönnit ohitetaan, mikä on hyödyllistä pitkiä lausekkeita kirjoitettaessa:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Se tekee myös koodista helpommin luettavaa:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#moniriviset-lausekkeet "Moniriviset lausekkeet")Moniriviset lausekkeet

Kaksi katkennutta riviä voi yhdistää kenoviivalla (tätä tapaa käytetään harvoin):  

```python
two_plus_three = 2 + \
                 3  
```

### [](#moduulit-modules "Moduulit Modules")Moduulit Modules

Olipa kyseessä sitten Pythonin oma tai itse ladattu kolmannen osapuolen moduuli, ne on tuotava manuaalisesti käyttöön.

1. Yksinkertainen tapa tuoda koko moduuli suoraan:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Tässä tuotu `re`-moduuli on tarkoitettu säännöllisille lausekkeille. Moduulin tuonnin jälkeen sen toimintoja voi kutsua suoraan käyttämällä moduulin nimeä etuliitteenä (`re.`).

2. Jos tuotavan moduulin nimi on jo käytössä koodissa, moduulin voi tuoda toisella nimellä:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Jos olet tuhma, voit tuoda koko moduulin nykyiseen nimiavaruuteen, mikä saattaa tahattomasti korvata jo määrittelemiäsi muuttujia:

```python
match = 10  
from re import *  # re-moduulissa on match-funktio  
print match       # Tulostaa match-funktion  
```

Koska olet hyvä ihminen, uskon ettet tee näin.

### [](#aritmetiikka-arithmetic "Aritmetiikka Arithmetic")Aritmetiikka Arithmetic

Python 2.7 käyttää oletuksena kokonaislukujakoa, joten $5 / 2 = 2$. Kuitenkin monesti emme halua kokonaislukujakoa, joten voimme tuoda tämän moduulin:

```python
from __future__ import division  
```

Tuonnin jälkeen $5 / 2 = 2.5$.  
Kokonaislukujako: $5 // 2 = 2$.

### [](#funktiot-functions "Funktiot Functions")Funktiot Functions

#### [](#funktion-maarittely "Funktion määrittely")Funktion määrittely


Funktio on sääntö, joka voi vastaanottaa nolla tai useampia syötteitä ja palauttaa tietyn tuloksen. Pythonissa funktio määritellään `def funktion_nimi(parametrit)` -rakenteella:

```python
def double(x):  
    """Tähän voit kirjoittaa selityksen funktion toiminnasta.  
    Esimerkiksi, tämä funktio kertoo syötteen kahdella."""  
    # Tähän tulee funktion runko, muista sisennys  
    return x * 2  
```
#### [](#funktion-kaytto "Funktion käyttö")Funktion käyttö


Pythonissa funktiot ovat "ensiluokkaisia kansalaisia", mikä tarkoittaa, että voimme sijoittaa funktion muuttujaan tai välittää sen parametrina toisille funktioille:

```python
def apply_to_one(f):  
    """Kutsuu funktiota f ja välittää sille parametrin 1"""  
    return f(1)  
my_double = double          # double viittaa edellisessä osiossa määriteltyyn funktioon  
x = apply_to_one(my_double) # x on 2  
```
#### [](#nimettomat-funktiot "Nimettömät funktiot")Nimettömät funktiot


Voimme luoda nimettömiä funktioita myös `lambda`-sanalla:

```python
y = apply_to_one(lambda x: x + 4)     # tulos on 5  
```

`lambda`-funktioita voi sijoittaa muuttujiin, mutta useimmat suosittelevat kuitenkin `def`-rakenteen käyttöä:

```python
another_double = lambda x: 2 * x      # Ei suositella  
def another_double(x): return 2 * x   # Suositeltava tapa  
```

Lisäksi:

*   `lambda` on vain lauseke, ja sen funktion runko on paljon yksinkertaisempi kuin `def`-funktioilla.
*   `lambda`-funktion runko on lauseke, ei koodilohko. Siihen voi kapseloida vain rajallisen määrän logiikkaa.

#### [](#funktioparametrien-valitys "Funktioparametrien välitys")Funktioparametrien välitys

Funktion parametreille voi määrittää oletusarvoja. Jos argumentteja ei anneta, käytetään oletusarvoja; jos argumentit annetaan, ne välitetään määritettynä arvona:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Tulostaa "hello"  
my_print()            # Tulostaa "my default message"  
```

Joskus on kätevää määrittää parametrit suoraan niiden nimillä:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Palauttaa 5  
subtract(0, 5)    # Palauttaa -5  
subtract(b=5)     # Sama kuin edellinen, palauttaa -5  
```
### [](#merkkijonot-strings "Merkkijonot Strings")Merkkijonot Strings

Merkkijonoja voi luoda käyttämällä yksinkertaisia tai kaksinkertaisia lainausmerkkejä (lainausmerkkien on oltava parillisia):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Kenoviivaa käytetään escape-merkkien ilmaisemiseen, kuten:

```python
tab_string = "\t"      # Tarkoittaa sarkainta (tab)  
len(tab_string)        # on 1  
```

Kun haluat käyttää itse kenoviivaa (esim. Windowsin hakemistoissa tai säännöllisissä lausekkeissa), voit määrittää sen käyttämällä raakaa merkkijonoa `r""`:

```python
not_tab_string = r"\t" # Tarkoittaa merkkejä '\' ja 't'  
len(not_tab_string)    # on 2  
```

Kolmella lainausmerkillä voi luoda monirivisiä merkkijonoja:

```python
multi_line_string = """Tämä on ensimmäinen rivi  
Tämä on toinen rivi  
Tämä on kolmas rivi"""  
```

### [](#poikkeuskasittely-exception "Poikkeuskäsittely Exception")Poikkeuskäsittely Exception

Kun ohjelmassa tapahtuu virhe, Python nostaa `poikkeuksen (exception)`. Jos emme käsittele sitä, ohjelma keskeyttää suorituksensa. Poikkeukset voi ottaa kiinni `try`- ja `except`-lauseilla:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Ei voi jakaa nollalla"  
```

Vaikka poikkeuksia pidetään huonona asiana muissa kielissä, Pythonissa poikkeusten käsittely tekee koodistasi usein selkeämpää ja puhtaampaa.

### [](#listat-lists "Listat Lists")Listat Lists

#### [](#listan-luominen "Listan luominen")Listan luominen

Listat ovat yksinkertaisia, järjestettyjä kokoelmia ja Pythonin perusdatarakenne (samankaltaisia kuin taulukot muissa kielissä, mutta listoilla on joitakin lisäominaisuuksia). Listan luominen:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # on 3  
list_sum = sum(integer_list)      # on 6  
```
#### [](#arvojen-hakeminen-listasta "Arvojen hakeminen listasta")Arvojen hakeminen listasta


Voit indeksoida arvoja listasta hakasulkeilla:

```python
x = range(10)       # Lista x saa arvon [0, 1, ..., 9]  
zero = x[0]         # on 0, listan indeksit alkavat nollasta  
one = x[1]          # on 1  
nine = x[-1]        # on 9, listan viimeinen alkio  
eight = x[-2]       # on 8, listan toiseksi viimeinen alkio  
x[0] = -1           # Lista x on nyt [-1, 1, 2, 3, ..., 9]  
```

#### [](#listan-viipalointi "Listan viipalointi")Listan viipalointi


Voit "viipaloida" listaa hakasulkeilla:

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Voit tarkistaa, onko jokin alkio listassa, käyttämällä `in`-operaattoria:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Tämä tapa etsiä alkioita on tehoton. Käytä sitä vain, jos lista on pieni tai et välitä hakuaikaa.

#### [](#listojen-yhdistaminen "Listojen yhdistäminen")Listojen yhdistäminen

Kahden listan yhdistäminen Pythonissa on helppoa:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # Nyt x on [1, 2, 3, 4, 5, 6]  
```

Jos et halua muokata alkuperäistä listaa `x`, voit luoda uuden listan '+' -operaattorilla:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # Nyt y on [1, 2, 3, 4, 5, 6]; x ei muuttunut  
```

Usein lisätään yksi alkio listaan tällä tavalla:

```python
x = [1, 2, 3]  
x.append(0)           # Nyt x on [1, 2, 3, 0]  
y = x[-1]             # on 0  
z = len(x)            # on 4  
```

#### [](#listan-purkaminen "Listan purkaminen")Listan purkaminen

Jos tiedät, kuinka monta alkiota listassa on, voit purkaa sen helposti:

```python
x, y = [1, 2]         # Nyt x = 1, y = 2  
```

Jos yhtälön molemmilla puolilla on eri määrä alkioita, saat `ValueError`-virheen. Siksi on yleisempää käyttää alaviivaa tallentamaan listan loput osat:

```python
_, y = [1, 2]         # Nyt y == 2, ensimmäisestä alkiosta ei välitetä  
```

### [](#tuplet-tuples "Tuplet Tuples")Tuplet Tuples

Listat ja tuplet ovat hyvin samankaltaisia. Ainoa ero listaan on, että tuplen elementtejä ei voi muokata.

#### [](#tuplen-luominen "Tuplen luominen")Tuplen luominen

Tupleja voi luoda käyttämällä sulkeita tai jättämällä ne pois kokonaan:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # Nyt my_list on [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Tuplen muokkaaminen ei ole mahdollista"  
```

Tuplejen avulla on kätevää saada useita palautusarvoja funktiosta:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # on (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tuplet (ja listat) tukevat usean elementin samanaikaista sijoittamista:

```python
x, y = 1, 2       # Nyt x = 1, y = 2  
x, y = y, x       # Pythonissa kahden muuttujan arvojen vaihtaminen; nyt x = 2, y = 1  
```

### [](#sanakirjat-dictionaries "Sanakirjat Dictionaries")Sanakirjat Dictionaries

#### [](#sanakirjan-luominen "Sanakirjan luominen")Sanakirjan luominen

Toinen Pythonin perusdatarakenne on sanakirja, joka mahdollistaa arvojen (value) nopean hakemisen avaimen (key) perusteella:

```python
empty_dict = {}                       # Erittäin Python-mainen tyhjän sanakirjan määritys  
empty_dict2 = dict()                  # Ei niin Python-mainen tyhjän sanakirjan määritys  
grades = { "Joel" : 80, "Tim" : 95 }  # Sanakirjan tallennus  
```

#### [](#sanakirjan-elementtien-haku "Sanakirjan elementtien haku")Sanakirjan elementtien haku

Voit etsiä vastaavan arvon käyttämällä hakasulkeita ja avainsanaa:

```python
joels_grade = grades["Joel"]          # on 80  
```

Jos etsittävää avainsanaa ei löydy sanakirjasta, palautetaan `KeyError`:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "Ei arvosanaa Katelle!"  
```

Voit tarkistaa, onko avainsana sanakirjassa, käyttämällä `in`-operaattoria:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Sanakirjassa on metodi, joka voi palauttaa oletusarvon, jos etsittävää avainsanaa ei löydy (sen sijaan, että tapahtuisi poikkeus):

```python
joels_grade = grades.get("Joel", 0)   # on 80  
kates_grade = grades.get("Kate", 0)   # on 0  
no_ones_grade = grades.get("No One")  # Palauttaa oletusarvon None  
```

#### [](#sanakirjan-muokkaaminen "Sanakirjan muokkaaminen")Sanakirjan muokkaaminen

Voit luoda ja muokata sanakirjan avain-arvo-pareja hakasulkeilla:

```python
grades["Tim"] = 99                    # Korvaa vanhan arvon  
grades["Kate"] = 100                  # Lisää avain-arvo-parin  
num_students = len(grades)            # on 3  
```

Käytämme usein sanakirjoja tietojen rakenteen esittämiseen tällä tavalla:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Tiettyjen avainsanojen etsimisen lisäksi voimme käsitellä kaikkia avainsanoja tällä tavalla:

```python
tweet_keys = tweet.keys()             # Saa listan avainsanoista (avaimista)  
tweet_values = tweet.values()         # Saa listan arvoista  
tweet_items = tweet.items()           # Saa (avain, arvo) -tupleja  
"user" in tweet_keys                  # Palauttaa True, käyttäen listan tehotonta in-hakua  
"user" in tweet                       # Python-maisempi tapa, käyttää tehokasta sanakirjan in-hakua  
"joelgrus" in tweet_values            # True  
```

Sanakirjan avaimet ovat yksilöllisiä, eikä listoja voi käyttää sanakirjan avaimina. Jos tarvitset moniosaisen avaimen, voit käyttää tuplea tai muuntaa avaimen merkkijonoksi jollain tavalla.

#### [](#sisaanrakennetut-sanakirjat-defaultdict "Sisäänrakennetut sanakirjat (defaultdict)")Sisäänrakennetut sanakirjat (defaultdict)

Jos yrität laskea kunkin sanan esiintymistiheyden dokumentissa, ilmeinen tapa on luoda sanakirja, jossa sanat ovat avaimina ja niiden esiintymistiheydet vastaavina arvoina. Käy sitten dokumentti läpi: jos sana on jo sanakirjassa, kasvata sen arvoa yhdellä; jos sanaa ei ole, lisää sanakirjaan uusi avain-arvo-pari:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Voit tietysti käsitellä puuttuvan avaimen etukäteen tällä tavalla, "toimimalla ensin, kysymällä sitten" -periaatteella:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

Kolmas tapa on käyttää `get`-metodia, joka toimii erinomaisesti puuttuvien avaimien käsittelyssä:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

Sisäänrakennettu sanakirja (defaultdict) on kuin tavallinen sanakirja, ainoana erona on, että kun yrität etsiä sanakirjasta olemattoman avaimen, sisäänrakennettu sanakirja luo automaattisesti avain-arvo-parin antamasi avaimen perusteella. Sisäänrakennetun sanakirjan käyttämiseksi sinun on tuotava `collections`-kirjasto:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() luo 0:n  
for word in document:  
    word_counts[word] += 1  
```

Defaultdict on hyödyllinen myös listojen, tavallisten sanakirjojen ja jopa mukautettujen funktioiden kanssa:

```python
dd_list = defaultdict(list)           # list() luo tyhjän listan  
dd_list[2].append(1)                  # Nyt dd_list on {2: [1]}  
dd_dict = defaultdict(dict)           # dict() luo tyhjän sanakirjan  
dd_dict["Joel"]["City"] = "Seattle"   # Nyt dd_dict sisältää { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Luo sanakirjan, jossa avainten arvot ovat listoja  
dd_pair[2][1] = 1                     # Nyt dd_pair sisältää {2: [0,1]}  
```

Tämä menetelmä on erittäin hyödyllinen, sillä tulevaisuudessa, kun haluamme hakea tiettyjä avain-arvo-tuloksia sanakirjasta, meidän ei tarvitse enää tarkistaa, onko avain olemassa.

### [](#laskuri-counter "Laskuri Counter")Laskuri Counter

Laskuri voi muuntaa arvojoukon suoraan sanakirjan kaltaiseksi objektiksi, jossa avaimena on jokin joukon elementti ja vastaava arvo on kyseisen elementin esiintymiskertojen määrä. Tätä käytetään usein histogrammien luomisessa:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c on (suunnilleen) { 0 : 2, 1 : 1, 2 : 1 }  
```

Näin meillä on erittäin kätevä tapa laskea sanatiheys:

```python
word_counts = Counter(document)  
```

Laskurissa on myös erittäin hyödyllinen `most_common`-metodi, joka voi suoraan antaa useimmin esiintyvät sanat ja niiden tiheydet:

```python
# Tulostaa 10 yleisintä sanaa ja niiden lukumäärät  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#joukot-sets "Joukot Sets")Joukot Sets

Toinen Pythonin tietorakenne on joukko (set), joka on kokoelma erilaisia alkioita.  
Joukko voidaan luoda ja siihen voidaan lisätä alkioita näin:

```python
s = set()  
s.add(1)          # s on { 1 }  
s.add(2)          # s on { 1, 2 }  
s.add(2)          # s on { 1, 2 }  
x = len(s)        # on 2  
y = 2 in s        # on True  
z = 3 in s        # on False  
```

Kaksi tärkeintä syytä käyttää joukkoja:

Ensinnäkin, `in`-operaatio joukoissa on erittäin tehokas. Kun aineistossa on erittäin paljon elementtejä, elementtien etsiminen joukon muodossa on selvästi listaa sopivampaa:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Epäonnistuu, vaatii jokaisen elementin tarkistamista  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Haku onnistuu, ja se on erittäin nopea  
```

Toiseksi, joukkojen avulla on erittäin kätevää saada aineistosta ainutlaatuiset elementit:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

Käytännössä joukkoja ei kuitenkaan käytetä yhtä usein kuin sanakirjoja ja listoja.

### [](#ehtolausekkeet "Ehtolausekkeet")Ehtolausekkeet

Useimmissa ohjelmointikielissä voit käyttää `if`-lausetta ehdollisten haarojen ilmaisemiseen tällä tavalla:

```python
if 1 > 2:  
    message = "jos vain 1 olisi suurempi kuin kaksi…"  
elif 1 > 3:  
    message = "elif tarkoittaa 'else if'"  
else:  
    message = "kun kaikki muu pettää, käytä elseä (jos haluat)"  
```

Voit myös kirjoittaa ehdollisen haaran yhden rivin lausekkeeksi näin, mutta tätä käytetään harvoin:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#silmukkalausekkeet "Silmukkalausekkeet")Silmukkalausekkeet

#### [](#while-silmukka "while-silmukka")`while`-silmukka


Pythonin `while`-silmukka:

```python
x = 0  
while x < 10:  
    print x, "on pienempi kuin 10"  
    x += 1  
```

#### [](#for-silmukka "for-silmukka")`for`-silmukka

Yleisemmin käytetään `for-in`-silmukkaa:

```python
for x in range(10):  
    print x, "on pienempi kuin 10"  
```

Monimutkaisemmissa loogisissa lausekkeissa voidaan käyttää `continue`- ja `break`-lauseita:

```python
for x in range(10):  
    if x == 3:  
        continue          # Siirtyy suoraan seuraavaan kierrokseen  
    if x == 5:  
        break             # Poistuu silmukasta kokonaan  
    print x  
```

Tuloksena tulostetaan 0, 1, 2 ja 4.

### [](#totuusarvot-truthiness "Totuusarvot Truthiness")Totuusarvot Truthiness

Pythonin totuusarvomuuttujat (`Booleans`) käyttäytyvät melko samoin kuin muissa kielissä, ainoa ero on, että niiden alkukirjaimen on oltava iso:

```python
one_is_less_than_two = 1 < 2      # on True  
true_equals_false = True == False # on False  
```

Python käyttää `None`-arvoa ilmaisemaan, että arvoa ei ole olemassa, samankaltaisesti kuin `null` muissa kielissä:

```python
x = None  
print x == None        # Tulostaa True, ei kovin tyylikäs  
print x is None        # Tulostaa True, tyylikkäämpi  
```

Python sallii muiden arvojen käytön totuusarvojen sijasta, ja seuraavat ovat kaikki vastaavia `False`-arvon kanssa:

*   False
*   None
*   [] (tyhjä lista)
*   {} (tyhjä sanakirja)
*   “” (tyhjä merkkijono)
*   set()
*   0
*   0.0

Vastaavasti on monia `True`-arvon vastineita, mikä tekee tyhjien listojen, merkkijonojen ja sanakirjojen tarkistamisesta erittäin kätevää.

Tietysti, jos et voi ennustaa tulosta, käytössä voi tapahtua virheitä:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Yksinkertaisempi tapa, joka tuottaa saman tuloksen kuin yllä oleva:

```python
first_char = s and s[0]  
```

Jos ensimmäinen arvo on tosi, palautetaan toinen arvo, muuten ensimmäinen arvo.

Vastaavasti, jos `x` voi olla numero tai tyhjä, tällä tavalla saadaan `x`, joka on varmasti numero:

```python
safe_x = x or 0  
```

Pythonissa on myös `all`-funktio, joka palauttaa `True`, jos kaikki elementit ovat `True`. `any`-funktio palauttaa `True`, jos yksikin elementti on `True`. Esimerkiksi listalle, jossa jokainen elementti on "tosi", `all`-funktio palauttaa `True`, muuten `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} vastaa "False"-arvoa  
any([True, 1, {}])          # True  
all([])                     # True, ei ole yhtään "False"-arvoa vastaavaa elementtiä  
any([])                     # False, ei ole yhtään "True"-arvoa vastaavaa elementtiä  
```

**Lisälukemista:**  
[Yleisiä Python-syntakseja datatieteessä (edistyneet)](https://philoli.com/python-tutorails-advanced-level/)
