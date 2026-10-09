---
layout: blog
title: "Jak zejść poniżej 30 sekund w kostce Rubika bez uczenia się algorytmów: Zrozumiałe nawet dla ucznia szkoły podstawowej"
date: 2026-10-09 12:00:00
tags:
  - kostka Rubika
  - poradnik
  - metoda Roux
  - speedcubing
  - świadoma praktyka
categories: Codzienne eksperymenty
description: "Od pierwszego ułożenia do Ao100 poniżej 30 sekund minęło 89 dni, bez uczenia się choćby jednego algorytmu CFOP. Analizuję 4441 wyników czasowych, dzieląc proces na cztery etapy: gdzie napotkałem trudności, co ćwiczyłem i dlaczego metoda Roux nie wymaga zapamiętywania algorytmów."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Jak zejść poniżej 30 sekund w kostce Rubika bez uczenia się algorytmów: Zrozumiałe nawet dla ucznia szkoły podstawowej" />
</figure>

W poprzednim artykule [„Jak ułożyć kostkę Rubika bez algorytmów”](/pl/blog/solve-rubiks-cube-without-formulas/) nauczyłeś się układać kostkę, bazując na logice komutatorów, bez zapamiętywania algorytmów. Ten wpis spotkał się z bardzo entuzjastycznym przyjęciem.

Jeśli podążałeś za instrukcjami krok po kroku, powinieneś już być w stanie – choć może jeszcze trochę nieporadnie – w pełni ułożyć kostkę. Przy odrobinie praktyki i kilkuset ułożeniach łatwo zejść poniżej 1 minuty. Ale co, jeśli chcesz osiągnąć jeszcze większą prędkość?

Gdy poszukasz „speedcubingu”, wszystkie poradniki powiedzą ci jedno: jeśli chcesz zejść poniżej 30 sekund, musisz najpierw nauczyć się na pamięć ponad stu algorytmów CFOP.

Ten artykuł ma na celu udowodnić, że możesz zejść poniżej 30 sekund, nie ucząc się ani jednego algorytmu.

<!--more-->

Od 7 maja 2026 roku, kiedy pierwszy raz w pełni ułożyłem kostkę, do 4 sierpnia, kiedy moje Ao100 spadło poniżej 30 sekund, minęło 89 dni. Przez cały ten czas nie nauczyłem się ani jednego algorytmu CFOP, po prostu bawiłem się kostką w wolnych chwilach. Oto dane z 4441 moich ułożeń.

![Krzywa wyników z 4441 ułożeń](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Rys.: Krzywa wyników z 4441 ułożeń. Szara linia to czas każdego ułożenia, ciemna linia to trend Ao100, czerwone punkty to momenty, w których pobiłem swój osobisty rekord. Najlepsze Ao100 wyniosło 28.22 sekundy.*

Dzięki świadomej, aktywnej praktyce i regularności, każdy może w ciągu kilku miesięcy przejść od zera do poziomu sub-30.

Co oznacza zejście poniżej 30 sekund? Na [pierwszych Mistrzostwach Świata w Kostce Rubika w 1982 roku](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) zwycięski czas wyniósł 22.95 sekundy – to również pierwszy oficjalny rekord świata uznany później przez WCA. Dziesiąte miejsce, z wynikiem 29.11 sekundy, zajęła sama Jessica Fridrich, twórczyni metody CFOP, o której opowiem w następnej sekcji. Innymi słowy, dzisiejszy amator, który po kilku miesiącach osiąga sub-30, w 1982 roku mógłby znaleźć się w pierwszej dziesiątce świata.

Poniżej podzielę się z Tobą krok po kroku, jak to osiągnąłem, i przedstawię pełen zestaw metod treningowych.

## Dlaczego świat speedcubingu opiera się na algorytmach?

Najpierw wyjaśnijmy jedną rzecz: dlaczego „szybkość” i „zapamiętywanie algorytmów” są w świadomości ludzi tak silnie ze sobą powiązane?

Na początku lat 80. profesor Jessica Fridrich (pochodzenia czeskiego, później zajmująca się kryminalistyką cyfrową na Uniwersytecie Binghamton w USA) opracowała warstwową metodę układania, później nazwaną CFOP (Cross, F2L, OLL, PLL). Idea tej metody polega na wyczerpującym wymienieniu wszystkich możliwych sytuacji na górnej warstwie i przypisaniu każdej z nich optymalnego algorytmu. Rozpoznajesz sytuację, wykonujesz algorytm i nie musisz myśleć.

Ta metoda jest niezwykle szybka. Niemal wszystkie rekordy świata zostały ustanowione z użyciem CFOP. Dlatego wszystkie tutoriale i filmy uczą właśnie jej, a „nauka speedcubingu” stała się równoznaczna z „nauką CFOP”, co z kolei oznacza zapamiętanie 119 algorytmów.

Zwróć jednak uwagę: „zapamiętywanie algorytmów” jest cechą metody CFOP, a nie samej szybkości. CFOP wymaga pamięci, ponieważ obrała drogę wyczerpującego enumerowania wszystkich przypadków. To jest cena, jaką płaci.

Czy istnieje metoda, która nie idzie tą drogą wyczerpującego enumerowania? Tak.

## Metoda Roux bez algorytmów

W 2003 roku Francuz Gilles Roux przedstawił zupełnie inną koncepcję. Zamiast układać warstwa po warstrywie, najpierw buduje się dwa bloki 1×2×3 (tzw. „mostki”) po lewej i prawej stronie, następnie zajmuje się czterema narożnikami górnej warstwy, a na końcu pozostaje tylko sześć krawędzi, które układa się za pomocą ruchów warstwy środkowej M i górnej U.

W poprzednim artykule już raz ułożyliśmy kostkę, korzystając z tej struktury. Spójrzmy jeszcze raz na jej cztery kroki, tym razem skupiając się na tym, „co trzeba zapamiętać na każdym etapie”:

| Etap | Treść | Algorytmy do zapamiętania |
| --- | --- | --- |
| 1. Lewy blok (FB) | Zbuduj blok 1×2×3 | 0, czysta obserwacja |
| 2. Prawy blok (SB) | Symetrycznie zbuduj drugi | 0, czysta obserwacja |
| 3. CMLL | Ustawienie czterech narożników górnej warstwy | 9, wszystkie można wyprowadzić z 3-cykli |
| 4. LSE | Ostatnie sześć krawędzi | 0, tylko obroty warstwy górnej i środkowej (M i U) |

Trzy z czterech kroków nie wymagają żadnych algorytmów. Jedyny etap, CMLL, ma łącznie 42 przypadki, ale nie potrzebujesz 42 algorytmów. Wspomniany w poprzednim artykule 3-cykl narożników, R U' L' U R' U' L U, wraz z jego lustrzanym odbiciem i kilkoma wariantami, pokrywa wszystkie sytuacje, choć jest nieco wolniejszy.

![Cztery kroki metody Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Rys.: Cztery kroki metody Roux. Każdy etap pokazuje tylko te bloki, które zostały ułożone do tego momentu: Lewy blok (FB) → Prawy blok (SB) → CMLL (cztery narożniki górnej warstwy) → LSE (ostatnie sześć krawędzi). Zrzut ekranu z panelu „Rozwiązania” na mojej stronie z kostką 3D.*

Dlatego właśnie metoda Roux pozwala na układanie bez zapamiętywania algorytmów: kompresuje część wymagającą pamięci do bardzo małego segmentu, a resztę pozostawia obserwacji, zrozumieniu i wprawie.

## Od 165 do 28 sekund: Cztery etapy

![Rozpiętość czasowa czterech etapów](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Rys.: Rozpiętość czasowa czterech etapów. Etap pierwszy – 3 tygodnie, etap drugi – 11 dni, etap trzeci – dwa miesiące, etap czwarty – do dziś.*

### Etap pierwszy: 165 sekund → 60 sekund (tydzień 1–3)

**Dane**: Od 7 do 27 maja. Średnia w pierwszym tygodniu wynosiła 165 sekund, w trzecim – 68 sekund. To etap przejścia od nowicjusza do poziomu początkującego: dzięki powtórzeniom stopniowo zaczynasz rozumieć, co tak naprawdę oznacza każdy ruch i które elementy się przemieszczają.

**Gdzie napotkałem trudności**: Lewy blok był bardzo nieopanowany, szukałem każdej pary bloków bardzo długo. Po znalezieniu pary, początkujący zawsze mają tendencję do zatrzymywania się i dalszego obserwowania.

![Na co początkujący marnują czas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Rys.: Na co początkujący marnują czas. Ręce są nieruchome, oczy szukają po kostce, czas na „szukanie” jest wielokrotnie dłuższy niż czas na „obracanie”.*

**Co ćwiczyć**:

Największym wrogiem na tym etapie nie jest wolna ręka, lecz wolne oko. Czas, który poświęcasz na „szukanie”, jest znacznie dłuższy niż czas na „obracanie”. Dlatego:

-   Utrzymaj stałą pozycję obserwacji, nie obracaj kostki. Jak wspomniano w poprzednim artykule, kąt obserwacji w Roux jest stały. Na tym etapie musisz wyrobić sobie nawyk „nieobracania kostki” (rotacji). Za każdym razem, gdy masz ochotę obrócić kostkę, zatrzymaj się i zapytaj: czy z tej perspektywy widzę potrzebny mi klocek?
-   Slow solving (wolne układanie). Bez mierzenia czasu, ale ruchy muszą być płynne i ciągłe, bez żadnych przerw. Każdy ruch może być bardzo powolny, ale nie powinno być zatrzymywania. Klucz polega na tym, aby podczas wykonywania jednego ruchu ręką, oczy już obserwowały kolejny ruch – to jest sedno slow solvingu. Może się wydawać, że to spowalnia, ale w rzeczywistości trenuje twoje oczy do widzenia relacji między położeniem klocka a miejscem, w które powinien trafić.
-   Ćwicz tylko lewy blok (FB). Scrambluj, buduj lewy blok, scrambluj, buduj lewy blok ponownie. Nie przechodź dalej. Pierwszy blok to najbardziej swobodny krok w metodzie Roux i ten, który najbardziej rozwija umiejętności obserwacji.

Nie ucz się żadnych nowych algorytmów na tym etapie. Twoje obecne wąskie gardło nie leży w algorytmach.

### Etap drugi: 60 sekund → 40 sekund (tydzień 4–5)

**Dane**: Od 27 maja do 7 czerwca, 11 dni. To był najszybszy spadek czasu w całym procesie. Ten etap przynosi najwięcej natychmiastowej satysfakcji: każda nowa wiedza i optymalizacja ruchów od razu przekładają się na wynik czasowy, a frajda z bicia rekordów każdego dnia to uczucie, z którym mało co może się równać.

**Gdzie napotkałem trudności**: Niespójne ruchy. Zacinanie się kostki.

**Co ćwiczyć**:

Na tym etapie musisz zoptymalizować ruchy na każdym etapie, a na podstawie zrozumienia, zwiększyć płynność każdego ruchu.

-   Drugi blok (SB). Drugi blok jest trudniejszy niż pierwszy, ponieważ jest o połowę mniej miejsca, a ukończony lewy blok nie może zostać zniszczony. Kluczowe ruchy to R, r (dwie prawe warstwy), M, U. Na tym etapie musisz nauczyć się używać r i M zamiast R do przesuwania klocków, tak aby lewy blok nigdy nie został naruszony. Optymalizacja sekwencji ruchów to oszczędność czasu. Na przykład, trzy obroty zgodnie ze wskazówkami zegara to to samo, co jeden obrót przeciwnie do wskazówek zegara.
-   Płynne używanie warstwy M. Ostatni etap Roux to wyłącznie M i U. To, jak płynnie obraca się warstwa M, bezpośrednio wpływa na twój dolny limit czasu. Użyj palca serdecznego lub środkowego do popychania M i zacznij ćwiczyć rytm M' U M' U.
-   Rozpoznawanie kształtów CMLL. W poprzednim artykule „próbowaliśmy” ułożyć cztery narożniki za pomocą 3-cyklu. Teraz musisz zacząć od obserwacji, a potem działać: zanim obrócisz górną warstwę, spójrz na orientację żółtych stron czterech narożników, oceń, czy masz 0, 1, 2 czy 4 dobrze zorientowane narożniki, a następnie wykonaj odpowiedni ruch. Możesz również, za pomocą bardzo niewielu algorytmów, znacznie zwiększyć swoją efektywność, co jest bardzo opłacalne. Większość tych algorytmów nie wymaga zapamiętywania na pamięć; zrozumiesz je, wykonując je.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Widok podczas budowania prawego bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Rys. lewy: Widok podczas budowania prawego bloku (SB). Lewy blok jest już ukończony, a do wstawienia par narożnik-krawędź po prawej stronie używa się tylko czterech ruchów: R, r, M, U, dzięki czemu lewy blok nigdy nie jest naruszony. Rys. prawy: M' U M, najczęściej używana sekwencja ruchów w drugiej połowie Roux. Warstwa środkowa idzie w górę, górna warstwa obraca się, warstwa środkowa wraca – trzy kroki, aby wymienić parę krawędzi z warstwy górnej i środkowej.*

Możesz zajrzeć do mojej bardzo przyjaznej dla początkujących, uproszczonej wersji [biblioteki algorytmów Roux](/pl/projects/rubiks-cube/roux#cmll). Strona CMLL przedstawia dwuetapowe rozwiązanie: 7 algorytmów orientacji + 2 algorytmy permutacji, w sumie 9. To najbardziej opłacalny wybór pod kątem zwiększenia szybkości, łatwy do nauczenia, a opanowanie każdego zestawu może przyspieszyć cię o około 1-2 sekundy. Po krótkiej praktyce szybko staną się płynne; niektóre z nich zostały już omówione w poprzednim artykule. Nie musisz zapamiętywać ich wszystkich, aby zejść poniżej 30 sekund.

![Pierwszy krok dwuetapowego CMLL, siedem orientacji narożników](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Rys.: Pierwszy krok dwuetapowego CMLL – siedem orientacji narożników. Na widoku z góry żółty to kolor skierowany do góry, a małe paski na zewnątrz wskazują, że kolor górnej powierzchni narożnika jest skierowany na bok. Rozpoznawaj kształty według liczby żółtych narożników: 0 to H lub Pi, 1 to S lub AS, 2 to U, T lub L.*

Po zorientowaniu żółtych stron możesz użyć tych dwóch algorytmów do ułożenia narożników.

Jeśli jedna ze ścianek ma już spójny kolor, na przykład czerwony, obróć ją na lewą stronę, a następnie możesz wybrać algorytm na zamianę sąsiadujących narożników. Jeśli żadna ścianka nie ma spójnego koloru, wybierz algorytm na zamianę narożników po przekątnej.

![Drugi krok dwuetapowego CMLL, dwie permutacje narożników](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Rys.: Drugi krok dwuetapowego CMLL – dwie permutacje narożników. Na lewym obrazku czerwony kolor dwóch narożników po lewej stronie jest już spójny – użyj permutacji sąsiednich. Na prawym obrazku żadna ścianka nie jest spójna – użyj permutacji po przekątnej.*

Możesz zrozumieć każdą grupę algorytmów poprzez intensywne slow solving. Nie traktuj ich jako magicznych formuł, lecz jako ustalone sekwencje ruchów, które możesz odkryć sam, ale ich lista tutaj pozwoli ci uniknąć niepotrzebnego błądzenia.

Jest jeszcze jedna rzecz, która przynosi natychmiastowe efekty, lepsze niż jakiekolwiek ćwiczenia: wydaj trochę pieniędzy na nową kostkę. Jeśli nadal masz starą kostkę, która klika, zgrzyta i blokuje się, gdy przekręcisz za daleko, kup nowoczesną, magnetyczną kostkę 3x3. Najnowsze kostki pozwolą ci poczuć moc optymalizacji inżynieryjnej: płynne obroty, automatyczne pozycjonowanie, brak zacięć. Sama zmiana kostki może przyspieszyć twój średni czas nawet o 15 sekund. Opcją o najlepszym stosunku ceny do jakości jest [MoYu RS3 M V5 (wersja Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), kosztująca około dwudziestu dolarów, która wystarczy ci do osiągnięcia poziomu sub-20.

### Etap trzeci: 40 sekund → 30 sekund (tydzień 5–13, dwa miesiące)

**Dane**: Od 7 czerwca do 4 sierpnia. Obniżenie Ao100 z 39.8 sekundy do 29.9 sekundy zajęło 58 dni. Na tym etapie sporadycznie mogły pojawiać się wyniki poniżej 30 sekund, ale tylko przy bardzo dużym szczęściu. Co więcej, wraz ze spadkiem średniego czasu układania, trudność w poprawie o każdą sekundę będzie rosła wykładniczo. (Ao100 oznacza średni czas z ostatnich 100 ułożeń, po odrzuceniu 5% najlepszych i 5% najgorszych wyników).

![Dzienne średnie wyniki](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Rys.: Dzienne średnie wyniki. Połowa czerwca to moment, gdy krzywa praktycznie się spłaszczyła, a ja szlifowałem umiejętności między 30 a 40 sekundami przez dwa miesiące.*

**Gdzie napotkałem trudności**: Układanie sześciu krawędzi górnej warstwy było bardzo powolne, brakowało mi zrozumienia logiki, za każdym razem polegałem na próbach i błędach, marnując mnóstwo czasu. Lewy i prawy blok wciąż nie były wystarczająco płynne.

**Co ćwiczyć**:

-   Rozpoznawanie orientacji krawędzi (EO). W poprzednim artykule wspomniano, że istnieją tylko pewne przypadki źle zorientowanych krawędzi: 0, nie 0 i nie 4, 4 (2 na górze, 2 na dole), 4 (wszystkie na górnej warstwie), 4 (3 na górze, 1 na dole). Celem na tym etapie jest: w momencie zakończenia budowania bloków, bez liczenia, od razu rozpoznać, który to przypadek. Metoda ćwiczenia polega na scramblowaniu, układaniu tylko do końca CMLL, następnie zatrzymaniu się, podaniu liczby źle zorientowanych krawędzi, a następnie kontynuowaniu.
-   Wielu ludzi nie rozumie ruchów na tym etapie. Faza EO ostatecznie ma na celu stworzenie konfiguracji „strzałki” (3 na górze, 1 na dole), ponieważ pełne ułożenie jest tylko jeden ruch od konfiguracji strzałki. Myśląc wstecz, jest to ostatni krok przed ukończeniem układania. Niezależnie od liczby źle zorientowanych krawędzi, ostatecznym celem jest stworzenie strzałki. Jeśli masz 4 źle zorientowane krawędzie na górze, wymień jedną parę krawędzi góra-dół, aby jedną źle zorientowaną krawędź przenieść na dół, tworząc strzałkę. Jeśli masz 2 na górze i 2 na dole, wymień jedną parę krawędzi góra-dół, aby jedną źle zorientowaną krawędź przenieść na górę, tworząc strzałkę. Jeśli masz 1 na górze i 1 na dole, lub 2 na górze, użyj M' U M, aby najpierw przekształcić to w poprzednią sytuację, a następnie zbudować strzałkę. Możesz odkryć optymalne kroki dla przypadku 1/1 poprzez intensywną obserwację i myślenie.

    ![Konfiguracja strzałki](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

    *Rys.: Konfiguracja strzałki. Trzy źle zorientowane krawędzie górnej warstwy (podświetlone na turkusowo) tworzą strzałkę wskazującą na jedną źle zorientowaną krawędź dolnej warstwy. W tym momencie jeden M' U M może ułożyć wszystkie cztery jednocześnie. [Otwórz ten stan w kostce 3D](/pl/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), aby zobaczyć krok po kroku.*

-   Dużo ćwicz look-ahead (przewidywanie). To najważniejsza, a zarazem najbardziej sprzeczna z intuicją rzecz, aby zejść z 40 do 30 sekund: obracaj wolniej, patrz dalej. Kiedy budujesz lewy blok, nie patrz na klocek, który właśnie wstawiasz, patrz, gdzie jest następny. Na początku będzie to bardzo niewygodne, wyniki najpierw się pogorszą, ale po tygodniu nagle się poprawią.
-   CMLL bez wahania. Jeśli za każdym razem musisz się zastanowić, zanim wykonasz ruch, to znaczy, że nie jest on jeszcze twój. Ćwicz każdy ruch osobno 50 razy, aż ręka zacznie się poruszać automatycznie na widok kształtu.

![Sześć konfiguracji EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Rys.: Sześć konfiguracji EO. Etykieta w lewym górnym rogu to liczba źle zorientowanych krawędzi (góra / dół), żółte to dobrze zorientowane krawędzie, turkusowe ramki to źle zorientowane krawędzie. Tylko konfiguracja strzałki wymaga algorytmu, pozostałe pięć najpierw przekształca się w strzałkę.*

Jeśli chodzi o układanie krawędzi bocznych, przyjmijmy, że żółty jest na górze, biały na dole, a lewy blok jest czerwony. Wtedy musimy ułożyć krawędź żółto-czerwoną + żółto-pomarańczową (podświetlone). Główna idea polega na tym, aby w jakiś sposób przesunąć krawędź żółto-czerwoną na dolną warstwę poprzez wymianę krawędzi góra-dół, a także przesunąć krawędź żółto-pomarańczową na dolną warstwę. Kiedy obie krawędzie będą na dolnej warstwie i znajdą się naprzeciwko siebie, obróć górną warstwę do odpowiedniej pozycji, a następnie M2 U lub M2 U' ułoży lewe i prawe krawędzie warstwy U.

Aby ułatwić zrozumienie, zebrałem wszystkie sześć konfiguracji EO na [stronie LSE w bibliotece algorytmów metody Roux](/pl/projects/rubiks-cube/roux#lse). Kliknięcie „pokaż szczegóły” dla każdej z nich otworzy odpowiedni stan w kostce 3D, automatycznie podświetlając źle zorientowane krawędzie. Na tej samej stronie znajdziesz również wszystkie przypadki dotyczące układania UL/UR i ostatnich czterech krawędzi.

Spadek intensywności treningu na tym etapie nie jest złą rzeczą. Okresu stagnacji nie pokonasz, zwiększając objętość, lecz zmieniając konkretny zły nawyk. Moje doświadczenie mówi, żeby zmieniać tylko jeden nawyk naraz.

### Etap czwarty: 30 sekund → 28 sekund (po 13. tygodniu)

**Dane**: Po 4 sierpnia. We wrześniu zarejestrowana liczba treningów wynosiła 122, chociaż wiele ćwiczeń nie zostało zarejestrowanych. Kostka stała się dla mnie zabawką na biurku, którą po prostu biorę do ręki i układam – kiedy mam dobry nastrój, kiedy jestem zirytowany lub niespokojny, w przerwach w pracy, kiedy się nudzę. Pozwoliłem, aby układanie kostki wtopiło się w moje życie. Ao100 stopniowo spadło z 29.9 do 28.2.

**Gdzie napotkałem trudności**: Brak wyraźnego wąskiego gardła, po prostu brakowało płynności.

**Co ćwiczyć**:

Jeśli twoja średnia prędkość nadal przekracza 30 sekund, jedyne, co musisz zrobić, to kontynuować intensywne ćwiczenia, a nie uczyć się nowych algorytmów.

Ciągłe ćwiczenie look-ahead poprzez slow solving sprawi, że będziesz coraz szybszy.

Bierz kostkę do ręki zawsze, gdy masz okazję – połóż ją w miejscu, do którego łatwo masz dostęp, na przykład na biurku, aby móc się nią bawić w przerwach od pracy. Możesz również często nagrywać swoje ułożenia, aby sprawdzić, na którym etapie tracisz najwięcej czasu, a następnie celowo optymalizować te fragmenty. To jest właśnie świadoma praktyka; twoja szybkość postępu nie zależy od całkowitej liczby zwykłych ćwiczeń, lecz od liczby świadomych, ukierunkowanych treningów.

Wtedy odkryjesz, że po przejściu przez okres stagnacji na poziomie 30–35 sekund, twoja prędkość znów spadła o kolejny poziom.

Na tym etapie gratuluję! Z perspektywy początkującego jesteś już bardzo zaawansowanym graczem!

## Kolejny krok w rozwoju

Przede wszystkim nie martw się o górny limit metody Roux. Wśród czołowych zawodników są też tacy, którzy używają Roux i osiągają światowe wyniki; sama metoda nie ma górnej granicy.

Co więcej, niemal każdy światowej klasy gracz układający kostkę jedną ręką (OH) używa metody Roux, ponieważ jest ona naprawdę doskonale przystosowana do operowania jedną ręką.

**Najszybsze wyniki metodą Roux w oficjalnych zawodach (WCA):**

- Singiel 4.11 sekundy, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipiny), Valenzuela Cubing Open 2023, uznany za najszybszy oficjalny singiel Roux ([film z rekonstrukcją](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Średnia 5.98 sekundy, również on, 2019 rok – wówczas rekord Azji i trzecia w historii oficjalna średnia sub-6 ([profil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- Jest także [aktualnym rekordzistą świata w układaniu jedną ręką (OH)](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): średnia 8.09, singiel 6.05 (2024). W środowisku OH powszechnie uważa się Roux za optymalną metodę.

Jednak aby zejść poniżej 15 sekund, trzeba przejść z obecnego dwuetapowego CMLL do rozwiązywania go za jednym razem, co wymaga zapamiętania większej liczby skomplikowanych algorytmów.

Ja jednak wciąż wolę swobodne odkrywanie. Całkowite zrozumienie algorytmów poprzez eksperymentowanie, a nawet tworzenie własnych, wygodnych dla siebie ruchów, daje znacznie więcej frajdy niż bezmyślne wkuwanie na pamięć.

Kostka Rubika od początku miała być łamigłówką logiczną, a nie testem pamięci. Tylko rozumiejąc zasady działania, osiągniesz stan, w którym przy każdym ruchu wiesz, co robisz, nie zapomnisz metody nawet po trzech miesiącach przerwy i będziesz w stanie znaleźć rozwiązanie dla każdej nowej kostki, jaka wpadnie ci w ręce.

## Podsumowanie

![Ułożona kostka](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

*Rys.: Ułożenie ukończone.*

Od umiejętności ułożenia kostki do zejścia poniżej 30 sekund nie jest to proces zapamiętywania algorytmów, lecz trening koordynacji rąk, oczu i mózgu.

Cztery etapy, cztery rzeczy: najpierw naucz się patrzeć bez obracania kostki, potem budować prawy blok bez niszczenia lewego, następnie patrzeć na kolejny ruch podczas wykonywania bieżącego, a na końcu spraw, aby ręce nadążały za oczami.

Algorytmy nie są źródłem szybkości. Obserwacja jest.

Naucz się budować pozytywne wzmocnienie poprzez postępy na każdym etapie. Nawet ćwiczenia płynności mogą być mniej nużące, zwłaszcza gdy odkryjesz radość z kolejnego pobitego rekordu. Szczególnie na etapie początkowym i średniozaawansowanym, każdego dnia będziesz doświadczać satysfakcji z osiągania nowych rekordów.

Wszystkie algorytmy i przypadki wspomniane w artykule zebrałem w [bibliotece algorytmów metody Roux](/pl/projects/rubiks-cube/roux). Możesz tu wrócić, gdy utkniesz.

Świat kostki Rubika jest pełen nieskończonych przyjemności. Życzę udanej zabawy!

## Dodatek 1: Lista ćwiczeń dla poszczególnych etapów

**Etap pierwszy (> 60 sekund)**

-   Utrzymaj stałą pozycję obserwacji, nie obracaj kostki przez cały proces układania
-   Znajdź kolejny potrzebny klocek bez zatrzymywania się
-   Slow solving, wypowiadaj intencję każdego ruchu
-   Ćwicz tylko lewy blok, powtórz 50 razy

**Etap drugi (60 → 40 sekund)**

-   Prawy blok tylko za pomocą R, r, M, U, nie dotykaj lewego bloku
-   Ćwiczenia dwuetapowego CMLL
-   Ćwicz rytm M' U M' U, 5 minut dziennie

**Etap trzeci (40 → 30 sekund)**

-   Zatrzymaj się po zakończeniu CMLL, od razu podaj liczbę źle zorientowanych krawędzi
-   Slow solving + look-ahead: oczy zawsze patrzą na kolejny klocek
-   Co najmniej 20 wysokiej jakości ułożeń dziennie

**Etap czwarty (< 30 sekund)**

-   Nagrywaj filmy, aby znaleźć zatrzymania
-   Technika: finger tricks R U R' U', palec serdeczny do warstwy M
-   20 wysokiej jakości ułożeń dziennie, bez zwiększania objętości

## Dodatek 2: Narzędzia

-   **csTimer**: [cstimer.net](https://cstimer.net/). Włącz statystyki Ao5 / Ao12 / Ao100. To Ao100 odzwierciedla twój prawdziwy poziom, pojedyncze czasy to kwestia szczęścia.
-   **Kostka 3D**: [philoli.com/zh/projects/rubiks-cube](/pl/projects/rubiks-cube/). Wszystkie algorytmy z tego artykułu można tu wpisać i obejrzeć animację.
-   **Przyjazna dla początkujących biblioteka algorytmów metody Roux**: [philoli.com/zh/projects/rubiks-cube/roux](/pl/projects/rubiks-cube/roux).
-   **Analizator treningu csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/pl/projects/rubiks-cube/analyzer). Wystarczy przeciągnąć i upuścić plik eksportu z csTimer, aby zobaczyć swoje postępy, krzywe Ao5/Ao12/Ao100, rozwój PB, tabelę kamieni milowych oraz krzywą treningową prawa potęgowego.

*Ten artykuł zawiera linki afiliacyjne Amazon: kupując przez te linki, otrzymam niewielką prowizję, a twoja cena pozostanie bez zmian.*

## Więcej do przeczytania

-   [Jak ułożyć kostkę Rubika bez algorytmów: Zrozumiałe nawet dla ucznia szkoły podstawowej](/pl/blog/solve-rubiks-cube-without-formulas)
