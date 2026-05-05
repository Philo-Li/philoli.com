---
title: Vanlig Python-syntax inom datavetenskap (grundläggande)
date: 2018-11-07 20:53:13
tags: Python
categories: 数据科学
mathjax: true
--- 

De senaste dagarna har jag läst boken [Data Science from Scrach](https://book.douban.com/subject/26364377/) ([PDF-länk](http://www.zhanjunlang.com/resources/tutorial/Data%20Science%20from%20Scratch%20First%20Principles%20with%20Python.pdf)), en utmärkt och lättförståelig introduktion till datavetenskap. Ett av kapitlen presenterar grundläggande Python-syntax och avancerad syntax som ofta används inom datavetenskap. Jag tyckte att beskrivningen var så bra, koncis och tydlig att jag bestämde mig för att översätta den och lägga upp den här som en minnesanteckning.  
[Vanlig Python-syntax inom datavetenskap (grundläggande)](https://lulalap.com/2018/11/07/python-tutorails-basic-level/)  
[Vanlig Python-syntax inom datavetenskap (avancerad)](https://lulalap.com/2018/11/09/python-tutorails-advanced-level/)  

Detta kapitel fokuserar på att introducera grundläggande Python-syntax och funktioner som är mycket användbara inom databearbetning (baserat på Python 2.7).

<!--more-->

### [](#indentering "Indentering")Indentering

Många språk använder parenteser för att kontrollera kodblock, men Python använder indentering:  

```python
for i in [1, 2, 3, 4, 5]:  
    print i          # Första raden i "for i"-loopen  
    for j in [1, 2, 3, 4, 5]:  
        print j      # Första raden i "for j"-loopen  
        print i + j  # Sista raden i "for j"-loopen  
    print i          # Sista raden i "for i"-loopen  
print "done looping"  
```

Detta gör Python-kod mycket lättläst, men det betyder också att du ständigt måste vara uppmärksam på formateringen. Mellanrum inom parenteser ignoreras, vilket är användbart när man skriver långa uttryck:

```python
long_winded_computation = (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)  
```

Det gör också koden mer läsbar:

```python
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
easier_to_read_list_of_lists = [ [1, 2, 3],  
                                 [4 ,5 ,6 ],  
                                 [7 ,8 ,9 ] ]  
```

### [](#flerradiga-satser "Flerradiga satser")Flerradiga satser

Man kan använda ett backslash för att indikera att två rader är sammankopplade (detta är sällan användbart):  

```python
two_plus_three = 2 + \
                 3  
```

### [](#moduler "Moduler")Moduler

Oavsett om det är inbyggda Python-moduler eller tredjepartsmoduler som du har laddat ner själv, måste de importeras manuellt för att kunna användas.

1. Importera helt enkelt hela modulen direkt:

```python
import re  
my_regex = re.compile("[0-9]+", re.I)  
```

Modulen `re` som importeras här används för reguljära uttryck. Efter att ha importerat en modul kan du direkt anropa specifika funktioner genom att använda modulnamnet som prefix (re.).

2. Om modulnamnet som ska importeras redan används i koden, kan modulen mappas till ett annat namn vid importen:

```python
import re as regex  
my_regex = regex.compile("[0-9]+", regex.I)  
```

3. Om du är busig kan du importera hela modulen till det nuvarande namnområdet, vilket oavsiktligt kan skriva över variabler du redan har definierat:

```python
match = 10  
from re import *  # Modulen re har en funktion som heter match  
print match       # Skriver ut match-funktionen  
```

Eftersom du är en bra person litar jag på att du inte kommer att göra så.

### [](#aritmetik "Aritmetik")Aritmetik

Python 2.7 använder heltaldivision som standard, så $ 5 / 2 = 2 $. Men ofta vill vi inte ha heltaldivision, så vi kan importera denna modul:

```python
from __future__ import division  
```

Efter importen blir $5 / 2 = 2.5$.  
Heltalsdivision: $5 // 2 = 2$.

### [](#funktioner "Funktioner")Funktioner

#### [](#funktionsdefinition "Funktionsdefinition")Funktionsdefinition

En funktion är en regel som kan ta emot noll eller fler indata och returnera en viss utdata. I Python definierar vi en funktion med `def funktionsnamn(parametrar)`:

```python
def double(x):  
    """Här kan du skriva en förklaring av funktionens syfte  
    till exempel att den här funktionen multiplicerar indata med 2"""  
    # Här kan du skriva funktionens brödtext, kom ihåg att indentera  
    return x * 2  
```
#### [](#funktionsanvändning "Funktionsanvändning")Funktionsanvändning

I Python är funktioner "första klassens medborgare", vilket innebär att vi kan tilldela dem till variabler eller skicka dem som argument till andra funktioner:

```python
def apply_to_one(f):  
    """Anropar funktionen f och använder 1 som argument"""  
    return f(1)  
my_double = double          # double refererar till funktionen som definierades i föregående avsnitt  
x = apply_to_one(my_double) # x är lika med 2  
```
#### [](#anonyma-funktioner "Anonyma funktioner")Anonyma funktioner

Man kan också skapa anonyma funktioner med `lambda`:

```python
y = apply_to_one(lambda x: x + 4)     # Är lika med 5  
```

Man kan tilldela en `lambda`-funktion till en variabel, men de flesta rekommenderar att man istället använder `def`:

```python
another_double = lambda x: 2 * x      # Rekommenderas inte  
def another_double(x): return 2 * x   # Rekommenderad metod  
```

Tillägg:

* `lambda` är bara ett uttryck; funktionskroppen är mycket enklare än för `def`.
* Kroppen i en `lambda` är ett uttryck, inte ett kodblock. Man kan bara kapsla in begränsad logik i ett `lambda`-uttryck.

#### [](#funktionsparameteröverföring "Funktionsparameteröverföring")Funktionsparameteröverföring

Funktionsparametrar kan definieras med standardvärden. Om inga argument anges vid anropet används standardvärdena, annars används de angivna värdena:

```python
def my_print(message="my default message"):  
    print message  
my_print("hello")     # Skriver ut "hello"  
my_print()            # Skriver ut "my default message"  
```

Ibland är det också praktiskt att specificera argumenten direkt med deras namn:

```python
def subtract(a=0, b=0):  
    return a - b  
subtract(10, 5)   # Returnerar 5  
subtract(0, 5)    # Returnerar -5  
subtract(b=5)     # Samma som ovan, returnerar -5  
```
### [](#strängar "Strängar")Strängar

Man kan använda enkla eller dubbla citattecken för att skapa strängar (citattecknen måste matcha):

```python
single_quoted_string = 'data science'  
double_quoted_string = "data science"  
```

Använd backslash för att representera escape-sekvenser, t.ex.:

```python
tab_string = "\t"      # Representerar tab-tecknet  
len(tab_string)        # Är lika med 1  
```

När du vill använda backslash i sig (för Windows-kataloger eller reguljära uttryck), kan du definiera det med en rå sträng `r""`:

```python
not_tab_string = r"\t" # Representerar tecknen '\' och 't'  
len(not_tab_string)    # Är lika med 2  
```

Skapa flerradiga strängar med tre dubbla citattecken:

```python
multi_line_string = """Detta är första raden  
Detta är andra raden  
Detta är tredje raden"""  
```

### [](#undantagshantering "Undantagshantering")Undantagshantering

När ett program stöter på ett fel, kastar Python ett `undantag (exception)`. Om vi inte hanterar det, kommer programmet att avbrytas. Man kan fånga undantag med `try`- och `except`-satser:

```python
try:  
    print 0 / 0  
except ZeroDivisionError:  
    print "Kan inte dela med noll"  
```

Även om undantag ofta ses som något negativt i andra språk, kan en robust undantagshantering i Python göra din kod mer koncis och ren.

### [](#listor "Listor")Listor

#### [](#skapa-listor "Skapa listor")Skapa listor

Listor är enkla ordnade samlingar och är en av de mest grundläggande datastrukturerna i Python (liknar arrayer i andra språk, men listor har några extra egenskaper). Så här skapar du en lista:

```python
integer_list = [1, 2, 3]  
heterogeneous_list = ["string", 0.1, True]  
list_of_lists = [ integer_list, heterogeneous_list, [] ]  
list_length = len(integer_list)   # Är lika med 3  
list_sum = sum(integer_list)      # Är lika med 6  
```
#### [](#åtkomst-till-värden-i-listor "Åtkomst till värden i listor")Åtkomst till värden i listor

Du kan komma åt värden i en lista genom att indexera med hakparenteser:

```python
x = range(10)       # Listan x blir [0, 1, ..., 9]  
zero = x[0]         # Är lika med 0, listindex börjar från 0  
one = x[1]          # Är lika med 1  
nine = x[-1]        # Är lika med 9, det sista elementet i listan  
eight = x[-2]       # Är lika med 8, det näst sista elementet i listan  
x[0] = -1           # Listan x är nu [-1, 1, 2, 3, ..., 9]  
```

#### [](#dela-listor "Dela listor")Dela listor

Man kan dela upp listor med hakparenteser (slicing):

```python
first_three = x[:3]                  # [-1, 1, 2]  
three_to_end = x[3:]                 # [3, 4, ..., 9]  
one_to_four = x[1:5]                 # [1, 2, 3, 4]  
last_three = x[-3:]                  # [7, 8, 9]  
without_first_and_last = x[1:-1]     # [1, 2, ..., 8]  
copy_of_x = x[:]                     # [-1, 1, 2, ..., 9]  
```

Man kan använda `in` för att kontrollera om ett element finns i en lista:

```python
1 in [1, 2, 3]        # True  
0 in [1, 2, 3]        # False  
```

Denna metod för att söka efter element är ineffektiv och bör endast användas när listan är liten eller när du inte är bekymrad över söktiden.

#### [](#sammanfoga-listor "Sammanfoga listor")Sammanfoga listor

I Python är det lätt att sammanfoga två listor:

```python
x = [1, 2, 3]  
x.extend([4, 5, 6])   # x är nu [1,2,3,4,5,6]  
```

Om du inte vill modifiera den ursprungliga listan `x`, kan du använda 'plus'-operatorn för att skapa en ny lista:

```python
x = [1, 2, 3]  
y = x + [4, 5, 6]     # y är nu [1, 2, 3, 4, 5, 6]; x är oförändrad  
```

Det är vanligt att lägga till ett element i listan på följande sätt:

```python
x = [1, 2, 3]  
x.append(0)           # x är nu [1, 2, 3, 0]  
y = x[-1]             # Är lika med 0  
z = len(x)            # Är lika med 4  
```

#### [](#lista-uppackning "Lista-uppackning")Lista-uppackning

Om du vet hur många element det finns i en lista, är det enkelt att packa upp den:

```python
x, y = [1, 2]         # x är nu 1, y är 2  
```

Om antalet element på båda sidor av tilldelningen inte stämmer överens, får du ett `ValueError`. Därför använder vi oftare understreck för att lagra resten av listan:

```python
_, y = [1, 2]         # y == 2, oavsett det första elementet  
```

### [](#tupler "Tupler")Tupler

Listor och tupler är mycket lika. Den enda skillnaden är att elementen i en tuple inte kan modifieras.

#### [](#skapa-tupler "Skapa tupler")Skapa tupler

Man kan skapa tupler med parenteser eller utan några parenteser alls:

```python
my_tuple = (1, 2)  
other_tuple = 3, 4  
my_list[1] = 3        # my_list är nu [1, 3]  
try:  
    my_tuple[1] = 3  
except TypeError:  
    print "Kan inte modifiera en tuple"  
```

Tupler är mycket praktiska för att returnera flera värden från en funktion:

```python
def sum_and_product(x, y):  
    return (x + y),(x * y)  
sp = sum_and_product(2, 3)    # Är lika med (5, 6)  
s, p = sum_and_product(5, 10) # s = 15, p = 50  
```

Tupler (och listor) stöder tilldelning av flera element samtidigt:

```python
x, y = 1, 2       # x är nu 1, y är 2  
x, y = y, x       # Byter värdena på två variabler i Python; x är nu 2, y är 1  
```

### [](#ordlistor "Ordlistor")Ordlistor

#### [](#skapa-ordlistor "Skapa ordlistor")Skapa ordlistor

En annan grundläggande datastruktur i Python är ordlistan (dictionary), som låter dig snabbt hämta ett värde med hjälp av en nyckel (key):

```python
empty_dict = {}                       # Ett mycket Python-iskt sätt att definiera en tom ordlista  
empty_dict2 = dict()                  # Ett mindre Python-iskt sätt att definiera en tom ordlista  
grades = { "Joel" : 80, "Tim" : 95 }  # Ordlistelagring  
```

#### [](#söka-i-ordlistor "Söka i ordlistor")Söka i ordlistor

Du kan använda hakparenteser med nyckeln för att hitta det motsvarande värdet:

```python
joels_grade = grades["Joel"]          # Är lika med 80  
```

Om nyckeln du söker inte finns i ordlistan, kommer ett `KeyError` att returneras:

```python
try:  
    kates_grade = grades["Kate"]  
except KeyError:  
    print "no grade for Kate!"  
```

Man kan använda `in` för att kontrollera om en nyckel finns i ordlistan:

```python
joel_has_grade = "Joel" in grades     # True  
kate_has_grade = "Kate" in grades     # False  
```

Ordlistor har en metod som kan returnera ett standardvärde när nyckeln som söks inte finns i ordlistan (istället för att kasta ett undantag):

```python
joels_grade = grades.get("Joel", 0)   # Är lika med 80  
kates_grade = grades.get("Kate", 0)   # Är lika med 0  
no_ones_grade = grades.get("No One")  # Returnerar standardvärdet None  
```

#### [](#modifiera-ordlistor "Modifiera ordlistor")Modifiera ordlistor

Man kan använda hakparenteser för att skapa eller modifiera nyckel-värde-par i en ordlista:

```python
grades["Tim"] = 99                    # Ersätter det gamla värdet  
grades["Kate"] = 100                  # Lägger till ett nyckel-värde-par  
num_students = len(grades)            # Är lika med 3  
```

Vi kommer ofta att använda ordlistor på detta sätt för att representera datastrukturer:

```python
tweet = {  
    "user" : "joelgrus",  
    "text" : "Data Science is Awesome",  
    "retweet_count" : 100,  
    "hashtags" : ["#data", "#science", "#datascience", "#awesome", "#yolo"]  
}  
```

Förutom att söka efter specifika nycklar, kan vi också manipulera alla nycklar på följande sätt:

```python
tweet_keys = tweet.keys()             # Får en lista med nycklar  
tweet_values = tweet.values()         # Får en lista med värden  
tweet_items = tweet.items()           # Får en lista med (nyckel, värde)-tupler  
"user" in tweet_keys                  # Returnerar True, använder den mindre effektiva "in"-sökningen i listan  
"user" in tweet                       # Mer Python-iskt, använder den effektiva "in"-sökningen i ordlistan  
"joelgrus" in tweet_values            # True  
```

Nycklarna i en ordlista är unika, och listor kan inte användas som nycklar. Om du behöver en sammansatt nyckel, kan du använda en tuple, eller på något sätt konvertera nyckeln till en sträng.

#### [](#standardordlistor "Standardordlistor")Standardordlistor

Om du försöker räkna frekvensen av varje ord i ett dokument, är ett uppenbart tillvägagångssätt att skapa en ordlista där ordet är nyckeln och frekvensen det motsvarande värdet. Sedan itererar du genom dokumentet och ökar värdet med 1 för ord som redan finns, och lägger till ett nytt nyckel-värde-par för ord som inte har setts tidigare:

```python
word_counts = {}  
for word in document:  
    if word in word_counts:  
        word_counts[word] += 1  
    else:  
        word_counts[word] = 1  
```

Du kan förstås också hantera en saknad nyckel genom att "försöka först och fånga sedan" (EAFP-principen) på följande sätt:

```python
word_counts = {}  
for word in document:  
    try:  
        word_counts[word] += 1  
    except KeyError:  
        word_counts[word] = 1  
```

En tredje metod är att använda `get`, som är utmärkt för att hantera saknade nycklar:

```python
word_counts = {}  
for word in document:  
    previous_count = word_counts.get(word, 0)  
    word_counts[word] = previous_count + 1  
```

En `defaultdict` fungerar som en vanlig ordlista, med den enda skillnaden att när du försöker slå upp en nyckel som inte finns, skapar `defaultdict` automatiskt ett nyckel-värde-par med den nyckel du angav. För att använda `defaultdict` måste du importera `collections`-biblioteket:

```python
from collections import defaultdict  
word_counts = defaultdict(int)        # int() genererar 0  
for word in document:  
    word_counts[word] += 1  
```

`defaultdict` är också mycket användbar med listor, vanliga ordlistor och till och med egna funktioner:

```python
dd_list = defaultdict(list)           # list() genererar en tom lista  
dd_list[2].append(1)                  # dd_list är nu {2: [1]}  
dd_dict = defaultdict(dict)           # dict() genererar en tom ordlista  
dd_dict["Joel"]["City"] = "Seattle"   # dd_dict innehåller nu { "Joel" : { "City" : "Seattle"}}  
dd_pair = defaultdict(lambda: [0, 0]) # Skapar en ordlista där värdet för en nyckel är en lista  
dd_pair[2][1] = 1                     # dd_pair innehåller nu {2: [0,1]}  
```

Denna metod är mycket användbar, eftersom vi i framtiden slipper kontrollera om en nyckel existerar när vi vill hämta vissa värden från ordlistan.

### [](#räknare-counter "Räknare Counter")Räknare (Counter)

En `Counter` kan direkt omvandla en uppsättning värden till ett ordlisteliknande objekt, där nyckeln är ett element från uppsättningen och det motsvarande värdet är antalet gånger det elementet förekommer. Detta används ofta vid skapandet av histogram:

```python
from collections import Counter  
c = Counter([0, 1, 2, 0]) # c är (ungefär) { 0 : 2, 1 : 1, 2 : 1 }  
```

På så sätt får vi ett mycket bekvämt sätt att räkna ordfrekvenser:

```python
word_counts = Counter(document)  
```

En `Counter` har också en mycket användbar metod, `most_common`, som direkt kan ge de mest frekventa orden och deras motsvarande frekvenser:

```python
# Skriver ut de 10 mest frekventa orden och deras antal  
for word, count in word_counts.most_common(10):  
    print word, count  
```

### [](#mängder-sets "Mängder Sets")Mängder (Sets)

En annan datastruktur i Python är mängden (set), som är en samling av unika element.  
Man kan skapa en mängd och lägga till element på detta sätt:

```python
s = set()  
s.add(1)          # s är { 1 }  
s.add(2)          # s är { 1, 2 }  
s.add(2)          # s är { 1, 2 }  
x = len(s)        # Är lika med 2  
y = 2 in s        # Är lika med True  
z = 3 in s        # Är lika med False  
```

Två huvudsakliga anledningar att använda mängder:

För det första är `in`-operationen i mängder mycket effektiv. När antalet element i en datamängd är mycket stort, är det betydligt mer lämpligt att söka efter element i en mängd än i en lista:

```python
stopwords_list = ["a","an","at"] + hundreds_of_other_words + ["yet", "you"]  
"zip" in stopwords_list               # Misslyckas, måste kontrollera varje element  
stopwords_set = set(stopwords_list)  
"zip" in stopwords_set                # Sökningen lyckas, och är mycket snabb  
```

För det andra är det mycket bekvämt att använda mängder för att få fram de unika elementen i en datamängd:

```python
item_list = [1, 2, 3, 1, 2, 3]  
num_items = len(item_list)            # 6  
item_set = set(item_list)             # {1, 2, 3}  
num_distinct_items = len(item_set)    # 3  
distinct_item_list = list(item_set)   # [1, 2, 3]  
```

I praktiken används dock mängder inte lika ofta som ordlistor och listor.

### [](#villkorssatser "Villkorssatser")Villkorssatser

I de flesta programmeringsspråk kan du använda `if` för att uttrycka villkorliga grenar på detta sätt:

```python
if 1 > 2:  
    message = "if only 1 were greater than two…"  
elif 1 > 3:  
    message = "elif stands for 'else if'"  
else:  
    message = "when all else fails use else (if you want to)"  
```

Du kan också skriva villkorssatser på en enda rad på detta sätt, men det är sällan användbart:

```python
parity = "even" if x % 2 == 0 else "odd"  
```

### [](#slingor "Slingor")Slingor

#### [](#while-slingor "while slingor")_while_-slingor

En `while`-slinga i Python:

```python
x = 0  
while x < 10:  
    print x, "is less than 10"  
    x += 1  
```

#### [](#for-slingor "for slingor")_for_-slingor

Mer vanligt är att använda en `for-in`-slinga:

```python
for x in range(10):  
    print x, "is less than 10"  
```

För mer komplexa logiska uttryck kan `continue`- och `break`-satser användas:

```python
for x in range(10):  
    if x == 3:  
        continue          # Går direkt till nästa iteration  
    if x == 5:  
        break             # Avslutar loopen helt  
    print x  
```

Resultatet kommer att skriva ut 0, 1, 2 och 4.

### [](#sanningsvärde-truthiness "Sanningsvärde Truthiness")Sanningsvärde (Truthiness)

Booleanska variabler i Python, `Booleans`, används på ungefär samma sätt som i andra språk, den enda skillnaden är att den första bokstaven måste vara stor:

```python
one_is_less_than_two = 1 < 2      # Är True  
true_equals_false = True == False # Är False  
```

Python använder `None` för att indikera att ett värde saknas, liknande `null` i andra språk:

```python
x = None  
print x == None        # Skriver ut True, inte lika elegant  
print x is None        # Skriver ut True, mer elegant  
```

Python låter dig använda andra värden istället för booleans; följande är alla ekvivalenta med `False`:

*   False
*   None
*   [] (en tom lista)
*   {} (en tom ordlista)
*   “”
*   set()
*   0
*   0.0

På liknande sätt finns det många ekvivalenta värden för `True`, vilket gör det mycket bekvämt att kontrollera tomma listor, tomma strängar, tomma ordlistor och så vidare.

Naturligtvis, om du inte kan förutse resultatet, kan fel uppstå under användning:

```python
s = some_function_that_returns_a_string()  
if s:  
    first_char = s[0]  
else:  
    first_char = ""  
```

Ett enklare tillvägagångssätt, som har samma effekt som ovanstående:

```python
first_char = s and s[0]  
```

Om det första värdet är sant, returneras det andra värdet, annars returneras det första värdet.

På liknande sätt, om `x` kan vara ett nummer eller `None`, kan man på detta sätt säkerställa att `x` är ett nummer:

```python
safe_x = x or 0  
```

Python har också funktionen `all`, som returnerar `True` om varje element är `True`. Funktionen `any` returnerar `True` om minst ett element är `True`. Till exempel, för en lista där varje element är 'sant', kommer `all`-funktionen att returnera `True`, annars `False`:

```python
all([True, 1, { 3 }])       # True  
all([True, 1, {}])          # False, {} är ekvivalent med "False"  
any([True, 1, {}])          # True  
all([])                     # True, det finns inget element som är ekvivalent med "False"  
any([])                     # False, det finns inget element som är ekvivalent med "True"  
```

**Vidare läsning:**  
[Vanlig Python-syntax inom datavetenskap (avancerad)](https://philoli.com/python-tutorails-advanced-level/)
