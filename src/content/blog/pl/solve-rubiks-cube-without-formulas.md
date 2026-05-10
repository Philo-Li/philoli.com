---
layout: blog
title: Jak ułożyć kostkę Rubika bez zapamiętywania algorytmów: Zrozumie nawet uczeń podstawówki
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: Codzienne zmagania
description: Krok po kroku nauczę Cię, jak ułożyć kostkę 3x3x3 bez zapamiętywania żadnych algorytmów, wykorzystując koncepcję komutatorów z teorii grup oraz metodę mostkową Roux.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="W pełni ułożona kostka Rubika" />
</figure>

Może jesteś nowicjuszem w świecie kostki Rubika i nigdy wcześniej nie udało Ci się jej ułożyć.

Większość dostępnych poradników to nic innego, jak zbiór dziwnych algorytmów, które mówią Ci: zrób to, potem tamto, a kostka się ułoży. Ale po wykonaniu tych kroków nadal nie rozumiesz, dlaczego tak się dzieje.

Ten artykuł będzie Twoim wybawieniem. Nauczysz się w nim, jak od podstaw ułożyć kostkę bez zapamiętywania żadnych formuł. Poznasz historię kostki i zrozumiesz, jak ona działa. Krok po kroku, od teorii do praktyki, poprowadzę Cię przez proces pełnego ułożenia kostki, ucząc jednocześnie, jak obserwować i myśleć.

Być może to będzie Twój pierwszy raz, kiedy samodzielnie i z sukcesem ułożysz kostkę Rubika.

<!--more-->

## Narodziny kostki Rubika

Skąd bierze się tak wielka fascynacja kostką Rubika? Zacznijmy od jej genezy.

W 1974 roku węgierski profesor architektury, Ernő Rubik, stworzył pierwszy prototyp z drewna. Chciał pokazać swoim studentom, jak poszczególne części mogą poruszać się niezależnie, nie naruszając jednocześnie całej struktury. Pomalował sześć ścian na różne kolory i tak narodziła się kostka Rubika.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Prototyp kostki Rubika" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portret Ernő Rubika" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Zdumiewająca liczba kombinacji

Kostka Rubika 3x3x3 składa się z 8 narożników, 12 krawędzi i 6 centrów, co daje łącznie 26 widocznych elementów. Jednak w rzeczywistości ruchome są tylko 20 elementów, wyłączając nieruchome centra każdej ściany.

Ile więc wynosi całkowita liczba jej możliwych stanów? Aż **4.3 × 10¹⁹**.

Co to oznacza w praktyce? Ta liczba stanów jest większa niż liczba ziarenek piasku na Ziemi. Gdybyśmy próbowali sprawdzać miliard stanów na sekundę, potrzebowalibyśmy ponad **1300 lat**, aby przejrzeć je wszystkie. A gdyby każdy stan zapisać na kartce i ułożyć je jedna na drugiej, stos miałby grubość odpowiadającą 14 000 podróżom w obie strony z Ziemi na Słońce.

Ta mała kostka 3x3x3 potrafi naprawdę zaskoczyć. Dzięki swojej nowatorskiej i wciągającej rozgrywce oraz nieskończonym możliwościom zmian, od razu po premierze podbiła rynek, przyciągając rzesze entuzjastów i graczy. Szybko rozwinęły się zawody w układaniu kostki, różne style (Speedcubing, Blindfolded, One-Handed, With Feet), liczne metody (Layer by Layer, Corners First, CFOP, Roux, Petrus, ZZ), a nawet kostki o nietypowych kształtach (od 2x2x2 do 7x7x7, Pyraminx, Skewb, Megaminx) pojawiały się jedna po drugiej.

![Warianty kostek o nietypowych kształtach](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Urok kostki Rubika jest tak ogromny, że matematycy przez dziesięciolecia badali jej matematyczne aspekty, szukając „Liczby Boga”. Astronautów zabierali ją w kosmos, a ludzie w każdym wieku, niezależnie od płci, święcili triumfy w różnego rodzaju zawodach. Jednak w porównaniu z jej fascynacją, liczba graczy wciąż jest stosunkowo niewielka. Dlatego poprzez ten artykuł chcę nauczyć wszystkich układania kostki, aby mogli cieszyć się radością płynącą z tej łamigłówki.

## Pułapka algorytmów

Większość dostępnych metod układania wymaga od graczy zapamiętywania wielu algorytmów, co skutecznie zniechęca początkujących. Zanim zdążą poczuć radość z ułożenia kostki, zostają zablokowani przez konieczność nauki formuł. Popularna metoda CFOP to ponad 100 algorytmów, a nawet nowicjusze muszą opanować kilkadziesiąt z nich.

Dlatego dziś chcę podzielić się z Wami metodą, która pozwoli Wam cieszyć się kostką Rubika bez konieczności zapamiętywania algorytmów. Ułożycie ją, opierając się wyłącznie na obserwacji i zrozumieniu.

## Potężne narzędzie matematyczne: Teoria grup

Pytanie: Jak ułożyć kostkę Rubika bez zapamiętywania ani jednego algorytmu?

Tutaj musimy wyciągnąć nasze matematyczne działo: Teorię grup. Nie ma problemu, którego nie dałoby się rozwiązać za pomocą matematyki.

Jaki związek ma kostka Rubika z teorią grup? Kostka Rubika sama w sobie jest grupą. Każdy obrót na kostce to operacja permutacji. Ta operacja ma kilka cech: można ją łączyć, można ją odwrócić, ale nie można jej zamienić miejscami.

Mnożenie, którego uczyliśmy się w szkole podstawowej, jest operacją przemienną – wynik A × B jest identyczny z B × A. Jednak w grupie kostki Rubika zamiana kolejności operacji A i B nie jest równoważna; wykonanie R, a potem U, daje zupełnie inny rezultat niż najpierw U, a potem R. Zatem, rozumiejąc grupy, rozumiemy kostkę Rubika. Z kolei zabawa kostką pomaga nam zrozumieć grupy.

Gratulacje! Właśnie poznałeś różnicę między grupami abelowymi (gdzie mnożenie i dodawanie są przemienne) a grupami nieabelowymi (do których należy grupa kostki Rubika).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U i U R dają różne efekty - Część pierwsza" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U i U R dają różne efekty - Część druga" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Uzupełnienie: Standardowe ruchy kostki są zazwyczaj oznaczane literami: R oznacza obrót prawej warstwy o 90 stopni zgodnie z ruchem wskazówek zegara, U oznacza obrót górnej warstwy o 90 stopni zgodnie z ruchem wskazówek zegara. R' to obrót o 90 stopni przeciwnie do ruchu wskazówek zegara, M' to ruch środkowej warstwy w górę, a M w dół.)

Możesz obserwować i uczyć się obrotów kostki bezpośrednio w animacji online, dostępnej w załączniku.

## Teoria: Klucz do układania bez algorytmów – komutator

Aby ułożyć kostkę, musimy osiągnąć stan, w którym: **zmieniamy położenie wybranych elementów, nie naruszając jednocześnie innych.**

W matematyce taka operacja nazywa się komutatorem i zapisuje się ją jako **A B A⁻¹ B⁻¹**.

A⁻¹ to operacja odwrotna do A.

Możemy to zilustrować bardzo życiowym przykładem – windą. Załóżmy, że chcesz przewieźć osobę z pierwszego piętra na trzecie:

1. **A**: Osoba wchodzi do windy.
2. **B**: Winda wjeżdża na 3. piętro.
3. **A⁻¹**: Osoba wychodzi z windy.
4. **B⁻¹**: Winda wraca na 1. piętro.

Rezultat: Winda wróciła na swoje miejsce, ale osoba zmieniła położenie z 1. na 3. piętro. Kluczowe jest to, że kiedy winda wraca, osoby już w niej nie ma – więc środowisko wraca do stanu początkowego, ale cel zmienił swoje położenie.

Na przykład w kostce Rubika R i R⁻¹ odpowiadają obrotowi prawej warstwy o 90 stopni zgodnie z ruchem wskazówek zegara, a następnie w trzecim kroku o 90 stopni przeciwnie do ruchu wskazówek zegara.

Operacja odwrotna A⁻¹ B⁻¹ przywraca środowisko, które zostało naruszone przez operację A B. W ten sposób osiągamy cel – wymieniamy tylko wybrane elementy, nie wpływając na resztę układu.

Dlaczego nie A A⁻¹ B B⁻¹? W takim przypadku każda operacja od razu by się anulowała, a elementy nie mogłyby się zamienić. Wykonanie operacji A, a zaraz po niej operacji odwrotnej A⁻¹, jest równoznaczne z niewykonaniem niczego (np. obrót górnej warstwy o 90 stopni przeciwnie do ruchu wskazówek zegara, a zaraz po nim o 90 stopni zgodnie z ruchem wskazówek zegara). Dlatego właśnie musi to być **A B A⁻¹ B⁻¹**, aby nastąpiła wymiana.

To jest najbardziej podstawowa wymiana, a najwygodniejszą "atomową" operacją w kostce jest: **R U R' U'**

![Demonstracja R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Można ją łączyć w długie sekwencje, osiągając różne efekty permutacji, na przykład: (R U R' U') (R U R' U') (R U R').

Właśnie stąd biorą się algorytmy. Dlaczego istnieją? Ponieważ łączą one serię najbardziej podstawowych operacji permutacji w sekwencje. Wykonując te sekwencje, można szybko osiągnąć konkretny rezultat, na przykład ułożyć jedną krawędź lub jeden narożnik. Różne sekwencje można ze sobą łączyć, prowadząc nas do ostatecznego ułożenia kostki Rubika.

Zrozumienie tej zasady pozwala nam nawet tworzyć własne algorytmy. (Jak samodzielnie tworzyć algorytmy do kostki Rubika, zostanie szczegółowo omówione w kolejnym artykule).

Zatem, aby ułożyć kostkę bez zapamiętywania ani jednego algorytmu, wystarczy opanować ideę podstawowych permutacji. Resztę można zastosować do każdej sytuacji. Najbardziej elementarne operacje permutacji zamienią miejscami trzy narożniki lub trzy krawędzie.

## Jak wykonywać wymiany w kostce Rubika

Jak już wspomniałem, najbardziej intuicyjną "atomową" operacją wymiany w kostce jest: **R U R' U'**. Jeśli dogłębnie zrozumiesz ten ruch, natychmiast będziesz w stanie ułożyć pierwsze dwie warstwy kostki.

Ten ruch w rzeczywistości oznacza: odsuń (prawą warstwę), wstaw (docelowy element), przywróć (prawą warstwę), przywróć (górną warstwę).

W ten sposób udało nam się wstawić lewy przedni narożnik i środkową krawędź w prawy dolny róg.

Ten ruch można modyfikować, przekształcając go w **U R U' R'**, **F R F' R'** i inne w dowolnych pozycjach, a nawet w operacje na warstwach środkowych, takie jak **M U M' U'**, czy też **U2 R U2 R'**.

![Demonstracja podstawowej operacji permutacji](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Na początkowym etapie kostka jest najbardziej pomieszana, dlatego można użyć wielu podstawowych permutacji, takich jak ta powyżej, aby najpierw ułożyć jedną ścianę lub inną część, redukując w ten sposób poziom chaosu.

Ponadto, ponieważ stan jest bardzo chaotyczny, ostatni ruch U' w sekwencji **R U R' U'**, który przywraca środowisko, może być nawet pominięty w zależności od sytuacji i bezpośrednio połączony z następnym ruchem. To upraszcza operację do: odsuń, wstaw, przywróć.

Odsuń, wstaw, przywróć.

To jest kluczowa operacja. Gratulacje! Właśnie zrozumiałeś, jak układać kostkę Rubika!

Jednak na późniejszych etapach będziemy potrzebować dłuższych sekwencji permutacji, aby wymienić konkretne klocki, nie naruszając przy tym stanu, który już udało nam się ułożyć.

Weźmy na przykład **R U' L' U R' U' L U**. Ten ruch zamienia tylko trzy narożniki, nie wpływając na nic innego. Rozłóżmy to na logikę komutatora:

```
A   = R U'   (wysuwa narożnik)
B   = L'     (porusza lewą warstwą)
A⁻¹ = U R'   (przywraca operację A)
B⁻¹ = U' L U (przywraca operację B, z korektą)
```

Efekt: Narożnik w lewym dolnym rogu pozostaje na miejscu, a pozostałe trzy narożniki zamieniają się miejscami.

To prawdopodobnie jedyny z dwóch algorytmów, które musisz poznać w tym artykule. Nauczymy się go używać w części praktycznej, zrozumiesz go podczas wykonywania, bez potrzeby zapamiętywania na pamięć.

## Praktyka: Układanie od podstaw

Wreszcie nadszedł najważniejszy moment tego artykułu! Poprowadzę Cię krok po kroku, a Ty, opierając się wyłącznie na obserwacji i zrozumieniu, ułożysz kostkę Rubika od zera do pełnego rozwiązania.

Potrzebne przygotowania:

- Kostka Rubika
- I odrobina cierpliwości (ponieważ skupiamy się głównie na obserwacji i zrozumieniu).

Zakładamy, że masz już kostkę Rubika. Rozmieszamy ją losowo według międzynarodowego standardu (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), a następnie razem ją ułożymy.

Możesz też od razu zagrać w wersję online – klikając w ten link, zobaczysz już pomieszaną kostkę: [3D Kostka Rubika — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![Początkowy stan pomieszanej kostki](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Możemy skorzystać z bardzo eleganckiej metody mostkowej Roux. Tak zwana metoda mostkowa, w przeciwieństwie do układania warstwa po warstwie, polega na ułożeniu najpierw bloków 1x2x3 po lewej i prawej stronie, znanych jako lewy i prawy most, a następnie ułożeniu górnej warstwy i pozostałych elementów.

Metoda mostkowa jest bardzo swobodna i elastyczna, wymaga mniej ruchów niż wiele znanych metod i stosunkowo niewielu algorytmów do zapamiętania, ponieważ opiera się głównie na logice komutatorów. W ramach tej metody nauczymy się, jak ułożyć kostkę, nie zapamiętując ani jednego algorytmu.

![Schemat przepływu metody Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Krok pierwszy: Ustalenie pozycji obserwacyjnej

W metodzie mostkowej pozycja obserwacji jest stała; podczas układania nie musimy często obracać kostki, lecz utrzymujemy ten sam kąt widzenia do myślenia i układania. Dzięki tej ustalonej orientacji, z łatwością zobaczymy niektóre narożniki i krawędzie oraz dowiemy się, gdzie powinny się znaleźć.

Możemy przyjąć ten kąt jako punkt odniesienia:

- Z przodu (naprzeciw Ciebie): zielona ściana
- Z lewej: czerwona
- Z prawej: pomarańczowa
- Na górze: żółta
- Na dole: biała
- Z tyłu: niebieska

### Krok drugi: Budowanie lewego i prawego mostu

**Kolejność budowania lewego mostu:**

1. Najpierw ustawiamy krawędź biało-czerwoną na swoje miejsce (lewy dolny słupek).
2. Następnie ustawiamy krawędź niebiesko-czerwoną z tyłu.
3. Na koniec ustawiamy dwa czerwone narożniki z przodu.

Ułożony lewy most:

![Ułożony lewy most](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ten proces nie wymaga żadnych algorytmów; wystarczy obserwacja i zrozumienie. Im więcej będziesz ćwiczyć, tym sprawniej to pójdzie.

**F' L**: Używając metody obserwacji, znajdź krawędź czerwono-białą i ustaw ją na miejscu tak, aby biała była na dole, a czerwona po lewej stronie.

![Demonstracja ustawiania krawędzi biało-czerwonej](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Ustaw krawędź niebiesko-czerwoną i narożnik na swoim miejscu.

![Ustawianie krawędzi niebiesko-czerwonej i narożnika](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Znajdź pozycje dwóch ostatnich klocków lewego mostu i postaraj się je ustawić na miejscu, dzięki czemu uzyskamy idealny lewy most.

![Ustawianie dwóch ostatnich klocków lewego mostu](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Prawy most** budujemy analogicznie, zamieniając kolor czerwony na pomarańczowy i powtarzając powyższe kroki. Pamiętaj jednak, aby nie naruszyć już ułożonego lewego mostu. Jeśli potrzebujesz miejsca, możesz tymczasowo odsunąć lewy most, aby operacje po prawej stronie go nie dotknęły, a po zakończeniu działań po prawej, przywróć lewy most na jego miejsce.

**Środek prawego mostu**: U' M U' R2

![Ustawianie środkowej krawędzi prawego mostu](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Pierwszy element prawego mostu**: U' M' U2 R' U R

![Ustawianie pierwszego elementu prawego mostu](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Gdy mamy już gotowy ostatni moduł prawego mostu i chcemy go wstawić na miejsce, najpierw odsuwamy lewy most (F'), by zrobić przestrzeń, następnie przesuwamy moduł (U), a na koniec jednocześnie przywracamy lewy i prawy most na swoje pozycje.

![Wstawianie ostatniego elementu prawego mostu](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Tak wygląda stan, gdy oba mosty są ukończone. Ważne, żeby mosty były zbudowane, resztą kolorowych elementów na razie się nie przejmujemy.

![Oba mosty ukończone](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Krok trzeci: Układanie narożników górnej warstwy

Po ułożeniu lewego i prawego mostu, przechodzimy do ułożenia pozostałych czterech narożników. Tutaj będziemy potrzebować cyklu trzech narożników, który zamienia je miejscami: A na B, B na C, a C wraca na A.

![Schemat cyklu trzech narożników: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Cykl trzech narożników

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Algorytm 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Narożnik w lewym dolnym rogu pozostaje na miejscu</li>
      <li>Pozostałe trzy narożniki zamieniają się miejscami <strong>przeciwnie do ruchu wskazówek zegara</strong></li>
      <li>Jednak ich wewnętrzne kolory obracają się <strong>zgodnie z ruchem wskazówek zegara</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Algorytm 2 (wersja lustrzana)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Narożnik w prawym dolnym rogu pozostaje na miejscu</li>
      <li>Pozostałe trzy narożniki zamieniają się miejscami <strong>zgodnie z ruchem wskazówek zegara</strong></li>
      <li>Jednak ich wewnętrzne kolory obracają się <strong>przeciwnie do ruchu wskazówek zegara</strong></li>
    </ul>
  </div>
</div>

![Demonstracja lustrzanej wersji cyklu trzech narożników](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Możesz napotkać tylko cztery typy orientacji narożników: 0, 1, 2 lub 4 dobrze zorientowane narożniki.

- **4 dobrze zorientowane narożniki**: stan ukończony
- **1 dobrze zorientowany narożnik** (tzw. 'rybka'): wystarczy wykonać cykl trzech narożników lub jego lustrzaną wersję, aby ukończyć.
- **0 / 2 dobrze zorientowane narożniki**: najpierw umieść źle zorientowany narożnik w pozycji, na którą cykl nie wpływa (lewy dolny róg), wykonaj cykl trzech narożników, a uzyskasz 1 dobrze zorientowany narożnik, wracając do poprzedniej sytuacji.

Czasami podstawowa wersja cyklu trzech narożników musi być wykonana dwukrotnie, aby ułożyć kostkę, podczas gdy wersja lustrzana może ułożyć ją za jednym razem. Początkujący powinni najpierw opanować wersję podstawową, skupiając się na obserwacji i zrozumieniu, a następnie będą w stanie zastosować ją wszechstronnie. Ten cykl trzech narożników z żółtym kolorem skierowanym do góry to również znany klasyczny algorytm – algorytm "rybki" (lewa/prawa). Warto zapoznać się z kształtem "rybki".

Nie musisz zapamiętywać tego algorytmu. Obserwuj, jak poruszają się dwa zielone klocki, wykonaj go samodzielnie kilka razy, a szybko się z nim oswoisz. Sedno tkwi w wymianie trzech narożników górnej warstwy.

W naszej kostce, po ułożeniu lewego i prawego mostu, zauważamy, że na górze są dwa żółte narożniki. Dlatego umieszczamy w lewym dolnym rogu narożnik, który nie ma żółtej naklejki na górze, i wykonujemy cykl trzech narożników. Następnie wykonujemy jeszcze dwa cykle trzech narożników, lub jeden cykl w wersji lustrzanej, aby wszystkie cztery narożniki górnej warstwy były zorientowane żółtym kolorem do góry.

![Demonstracja procesu cyklu trzech narożników](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Cztery żółte narożniki ułożone!

![Ułożone cztery żółte narożniki](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Korekta pozycji (wyrównanie kolorów bocznych)

Gdy wszystkie cztery narożniki mają żółty kolor na górze, musimy jeszcze wyrównać kolory ich bocznych ścianek, aby narożniki były całkowicie na swoim miejscu.

W tym momencie używamy **wariantu J-perm**: **R U2 R' U' R U2 L' U R' U' L**.

Logikę tego algorytmu można rozłożyć na "przenoszenie pary + logiczną wymianę":

- Pierwsza część `R U2 R' U' R`: przenosi parę klocków do bezpiecznej strefy tymczasowego przechowywania, zwalniając miejsce.
- Druga część `U2 L' U R' U' L`: wykorzystuje logikę cyklu trzech narożników, aby precyzyjnie zamienić dwa narożniki miejscami.

**Efekt**: Dwa narożniki po prawej stronie zamieniają się miejscami, jednocześnie utrzymując żółty kolor na górze, pozostałe narożniki pozostają bez zmian.

To pozwala na wymianę pozycji dowolnych dwóch sąsiadujących narożników (za pomocą U dostosowujemy, które dwa narożniki są po prawej stronie). Po kilkukrotnej wymianie, wszystkie cztery narożniki zostaną całkowicie wyrównane i ustawione na swoich miejscach.

![Demonstracja J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Tego algorytmu również nie musisz zapamiętywać. Obserwuj, jak poruszają się dwa zielone klocki, wykonaj go samodzielnie kilka razy, a szybko się z nim oswoisz. Sedno tkwi w wymianie dwóch narożników górnej warstwy po prawej stronie, przy jednoczesnym utrzymaniu żółtego koloru na górze.

### Krok czwarty: Układanie ostatnich sześciu krawędzi (LSE, Last Six Edges)

Na tym etapie najpierw wyrównujemy centra tak, aby żółty był na górze, a biały na dole, a następnie korygujemy krawędzie.

Pozostało tylko 6 krawędzi. Ten krok wykorzystuje tylko dwie operacje: **M** i **U**, co jest bardzo intuicyjne.

#### 4a: Korekta orientacji (EO, Edge Orientation)

**Metoda oceny**: Sprawdź, czy biała/żółta naklejka krawędzi jest skierowana w górę lub w dół.

- W górę / W dół = Dobra krawędź ✓
- Na bok = Zła krawędź ✗

**Metoda korekty**: Odwróć złą krawędź za pomocą **M U M'** lub **M' U M**.

![Demonstracja odwracania złej krawędzi za pomocą M U M'](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuicyjne zrozumienie: M podnosi krawędź środkowej warstwy, U dostosowuje pozycję, M' obraca ją z powrotem.

Powtarzaj kilka razy, aż wszystkie krawędzie będą miały biały/żółty kolor skierowany w górę lub w dół.

Krawędzie o poprawnej orientacji możemy nazwać dobrymi krawędziami, a te o niepoprawnej – złymi krawędziami.

Jak widać na zdjęciu, trzy podświetlone krawędzie w górnej warstwie są złymi krawędziami, ponieważ nie mają ani żółtego, ani białego koloru na górze/dole.

![Wskazanie złych krawędzi](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Wskazówki dotyczące korekty**: Możesz napotkać tylko cztery typy sytuacji ze złymi krawędziami:

- **0 złych krawędzi**: stan ukończony
- **Nie 0 ani nie 4 złe krawędzie**: Zmień liczbę złych krawędzi na 4 za pomocą **M' U M**.
- **4 złe krawędzie (po 2 na górze i na dole)**: Zamień górne i dolne krawędzie za pomocą **M' U2 M**, aby uzyskać układ 3 na górze i 1 na dole.
- **4 złe krawędzie (3 na górze i 1 na dole)**: Trzy złe krawędzie w górnej warstwie utworzą "strzałkę". Obróć górną warstwę tak, aby "strzałka" wskazywała na złą krawędź na dole. Wykonaj raz **M' U M**, a wszystkie cztery złe krawędzie zostaną usunięte i staną się dobrymi krawędziami.

![Demonstracja eliminacji strzałki z czterech złych krawędzi](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Jeśli strzałka się nie pojawi, powtarzaj **M' U M**, a zawsze uda Ci się ją ułożyć. Po opanowaniu podstaw, możesz powoli szukać wzorców.

#### 4b: Układanie krawędzi lewej i prawej strony (czerwonej i pomarańczowej)

Znajdź krawędzie czerwono-żółtą i pomarańczowo-żółtą (celem jest umieszczenie ich z powrotem na lewej i prawej stronie) i przenieś je na właściwe pozycje za pomocą cyklu trzech krawędzi.

**Wskazówki**:

1. Przesuń krawędź czerwono-żółtą (lub pomarańczowo-żółtą) nad środkową warstwę i "zanurz" ją na dół, zamieniając górne i dolne krawędzie (**M' U2 M**).
2. Spraw, aby druga krawędź pomarańczowo-żółta (lub czerwono-żółta) "zanurkowała" po przeciwnej stronie.
3. Obróć górną warstwę tak, aby czerwona krawędź znalazła się w pozycji naprzeciwko "zanurzonej" krawędzi czerwono-żółtej.
4. Obróć środkową warstwę o pół obrotu (**M2**), a następnie obserwuj i ustaw górną warstwę na miejsce (**U**).

![Demonstracja układania krawędzi lewej i prawej](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Rozwiązywanie ostatnich czterech krawędzi (niebieskich i zielonych)

**Wskazówki**:

- Ciągle używaj **cyklu trzech krawędzi** do wymiany górnych i dolnych krawędzi: **M' U2 M**. Ostatni krok to ustawienie na miejscu przez obserwację: **U2**.
- Szybka wskazówka: Umieść krawędź biało-zieloną (lub biało-niebieską) nad jej docelową pozycją, zamień górne i dolne krawędzie, a krawędź biało-zielona (biało-niebieska) znajdzie się na swoim miejscu.

Są tylko trzy sytuacje:

- Już poprawnie ułożone → Gotowe!
- Wymaga M2 → Wykonaj raz **M2**.
- Wymaga wymiany → **M' U2 M U2** lub **M U2 M' U2**.

Możemy również uprościć logikę cyklu trzech krawędzi: M' to środkowa warstwa w górę, U2 to obrót górnej warstwy o pół obrotu, M to przywrócenie środkowej warstwy, U2 to przywrócenie górnej warstwy.

![Demonstracja cyklu trzech krawędzi](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Ułożono!

![Ułożona kostka Rubika](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Podsumowanie

Nie musisz uczyć się algorytmów na pamięć – wystarczy logika komutatorów typu "otwórz-operuj-zamknij". Odkryjesz, że ten proces jest znacznie ciekawszy niż wkuwanie formuł, a co więcej, nie musisz się martwić, że zapomnisz go po latach – zawsze możesz go samodzielnie wydedukować.

To samo podejście można zastosować do układania dowolnej kostki, włączając w to różnego rodzaju dziwaczne kostki o nietypowych kształtach.

Jeśli jednak chcesz pójść drogą speedcubingu, czeka Cię niekończąca się droga ciężkich treningów. Ale dla początkujących, po odrobinie praktyki, osiągnięcie czasu poniżej 90 sekund nie powinno stanowić problemu.

Metod układania jest mnóstwo – sprawdź, czy znajdziesz tę najbardziej elegancką lub intuicyjną dla siebie.

Świat kostki Rubika oferuje nieskończoną radość. Życzę Ci wspaniałej zabawy!

## Dodatek 1: Ściągawka metody układania kostki Rubika (Esencja układania kostki)

1.  **Budowanie lewego i prawego mostu**: Opierając się na obserwacji i intuicji.
    - Wskazówki: Gdy opanujesz obserwację i przewidywanie, możesz, w zależności od konkretnego stanu kostki, priorytetowo budować inne moduły lub jednocześnie budować oba mosty. Dzięki temu uzyskasz mniej ruchów i większą swobodę.
2.  **Układanie orientacji czterech narożników górnej warstwy**: Cztery żółte skierowane do góry.
    - Cykl trzech narożników górnej warstwy: **R U' L' U R' U' L U** (narożnik w lewym dolnym rogu pozostaje na miejscu, wewnętrzne kolory pozostałych trzech narożników obracają się zgodnie z ruchem wskazówek zegara).
    - Lustrzana wersja cyklu trzech narożników górnej warstwy: **L' U R U' L U R' U'** (narożnik w prawym dolnym rogu pozostaje na miejscu, wewnętrzne kolory pozostałych trzech narożników obracają się przeciwnie do ruchu wskazówek zegara).
3.  **Układanie bocznych ścianek czterech narożników górnej warstwy.**
    - Precyzyjna korekta pozycji narożników górnej warstwy: **R U2 R' U' R U2 L' U R' U' L** (utrzymuje wszystkie cztery narożniki z żółtym kolorem do góry, zamieniając miejscami dwa narożniki po prawej stronie).
4.  **Zmiana orientacji krawędzi, aby biały lub żółty był skierowany w górę lub w dół.**
    - Najpierw wyrównaj centra, tak aby żółty był na górze, a biały na dole, a następnie koryguj krawędzie.
    - Za pomocą **M' U M** zmień liczbę złych krawędzi, utwórz "strzałkę", skieruj ją na złą krawędź, wykonaj raz **M' U M**, a wszystkie cztery złe krawędzie zostaną usunięte i ustawione na miejscu.
5.  **Układanie krawędzi lewej i prawej strony** (czerwonej i pomarańczowej).
    - Najpierw spraw, aby krawędź czerwono-żółta (lub pomarańczowo-żółta) "zanurkowała" na dół, zamieniając górne i dolne krawędzie (**M' U2 M**).
6.  **Układanie pozostałych krawędzi** (niebieskich i zielonych).
    - Ciągle używaj **cyklu trzech krawędzi** do wymiany górnych i dolnych krawędzi: **M' U2 M**. Ostatni krok to ustawienie na miejscu przez obserwację: **U2**.

Żadnego z powyższych wzorów nie musisz uczyć się na pamięć; są one tu tylko w załączniku, żeby łatwiej było do nich zajrzeć. Tak naprawdę, wystarczy, że sam spróbujesz, kilkakrotnie obserwując i rozumiejąc, jak poruszają się odpowiednie klocki, a szybko złapiesz, o co chodzi.

## Dodatek 2: Przydatne strony internetowe i narzędzia

Przygotowałem dla Was również internetową kostkę 3D, na której możecie swobodnie obracać ścianki, mieszać ją według ustalonego algorytmu i układać. Każdy ruch jest pięknie animowany!

[3D Kostka Rubika — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Narzędzie do układania kostki 3D online](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Algorytm mieszania użyty w tym poradniku: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Kroki układania lewo-prawych mostów w tym poradniku: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klikając w ten link, zobaczysz już pomieszaną kostkę: [3D Kostka Rubika — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

Timer do kostki Rubika używany przez mistrzów świata: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
