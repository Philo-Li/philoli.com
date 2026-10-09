---
layout: blog
title: "Jak zejść poniżej 30 sekund w kostce Rubika, nie ucząc się algorytmów: zrozumie nawet podstawówkowicz"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: Codzienne zmagania
description: "Od pierwszego ułożenia do Ao100 poniżej 30 sekund zajęło mi 89 dni, bez zapamiętywania ani jednego algorytmu CFOP. Analizuję cztery etapy, wykorzystując dane z 4441 ułożeń: gdzie napotykałem trudności w każdym etapie, co ćwiczyłem i dlaczego metoda Roux nie wymaga zapamiętywania algorytmów."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Cztery etapy od 165 do 28 sekund" />
</figure>

*Rysunek: Cztery etapy od 165 do 28 sekund. Etap drugi przyniósł najszybszy spadek, a etap trzeci był najdłuższym okresem plateau.*

W poprzednim artykule [„Jak ułożyć kostkę Rubika bez algorytmów”](/zh/blog/solve-rubiks-cube-without-formulas/) nauczyłeś się układać kostkę bez zapamiętywania algorytmów, wykorzystując logikę ruchów. Tamten wpis spotkał się z bardzo entuzjastycznym przyjęciem.

Jeśli postępowałeś zgodnie z instrukcjami, prawdopodobnie zajmuje ci to teraz dwie, trzy minuty – może trochę chaotycznie, ale potrafisz ją ułożyć. Wtedy pojawia się nowe pytanie: jak przyspieszyć?

Jeśli poszukasz w internecie „speedcubing”, wszystkie poradniki powiedzą ci to samo: jeśli chcesz zejść poniżej 30 sekund, najpierw naucz się na pamięć algorytmów CFOP. 41 dla F2L, 57 dla OLL, 21 dla PLL – łącznie 119 algorytmów. Nawet jeśli F2L wykonujesz intuicyjnie, i tak nie unikniesz 78 algorytmów dla ostatniej warstwy. Nie nauczysz się ich, nie będziesz szybki.

Ten artykuł ma na celu pokazać ci, że możesz zejść poniżej 30 sekund, w ogóle nie zapamiętując algorytmów.

<!--more-->

Od pierwszego ułożenia kostki Rubika 7 maja 2026 roku do osiągnięcia Ao100 poniżej 30 sekund 4 sierpnia, minęło 89 dni. Przez ten czas nie nauczyłem się ani jednego algorytmu CFOP, po prostu bawiłem się w wolnym czasie. Oto dane czasowe z moich 4441 zarejestrowanych ułożeń.

![Krzywa wyników z 4441 ułożeń](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Rysunek: Krzywa wyników z 4441 ułożeń. Szara linia to czas każdego ułożenia, ciemna linia to trend Ao100, a czerwone punkty to momenty pobicia osobistego rekordu. Najlepsze Ao100 wynosiło 28,22 sekundy.*

Dzięki świadomym, aktywnym ćwiczeniom i utrzymywaniu regularności treningów, każdy może w ciągu kilku miesięcy przejść od zera do poziomu sub-30.

Co oznacza wynik poniżej 30 sekund? Na [pierwszych Mistrzostwach Świata w Kostce Rubika w 1982 roku](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) zwycięski wynik wynosił 22,95 sekundy – jest to również pierwszy oficjalny rekord świata uznany później przez WCA. Dziesiąte miejsce zajęła Jessica Fridrich, twórczyni metody CFOP, o której opowiem w następnej sekcji, z czasem 29,11 sekundy. Innymi słowy, wynik sub-30, który dziś amator osiągnie po kilku miesiącach treningu, w 1982 roku plasowałby go w pierwszej dziesiątce świata.

Teraz podzielę się z tobą tym, jak krok po kroku to osiągnąłem, przedstawiając ci cały zestaw metod treningowych.

## Dlaczego w świecie speedcubingu wszyscy uczą się algorytmów na pamięć?

Najpierw wyjaśnijmy jedną rzecz: dlaczego „szybkość” i „zapamiętywanie algorytmów” są w umysłach ludzi ze sobą powiązane?

Na początku lat 80. XX wieku czeska profesor Jessica Fridrich (później badaczka kryminalistyki cyfrowej na Uniwersytecie Binghamton w USA) opracowała warstwową metodę układania, później nazwaną CFOP (Cross, F2L, OLL, PLL). Idea tej metody polega na wyczerpującym wymienieniu wszystkich możliwych sytuacji na górnej warstwie i przypisaniu do każdej z nich optymalnego algorytmu. Rozpoznajesz sytuację, wykonujesz algorytm i nie musisz myśleć.

![Jessica Fridrich i kostka Rubika w jej biurze](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Rysunek: Jessica Fridrich i kostka Rubika w jej biurze. W 1982 roku zajęła 10. miejsce na pierwszych Mistrzostwach Świata z czasem 29,11 sekundy. Metoda CFOP została nazwana na jej cześć (Metoda Fridrich).*

Ta metoda jest niezwykle szybka. Prawie wszystkie rekordy świata zostały ustanowione z użyciem CFOP. Dlatego wszystkie poradniki jej uczą, wszystkie filmy o niej mówią, a „nauka speedcubingu” stała się równoznaczna z „nauką CFOP”, co z kolei oznacza zapamiętywanie 119 algorytmów.

Zwróć jednak uwagę, że „zapamiętywanie algorytmów” to cecha metody CFOP, a nie cecha samej „szybkości”. CFOP wymaga zapamiętywania, ponieważ wybrało drogę wyczerpującego enumerowania wszystkich przypadków. Enumerowanie wymaga pamięci – to cena, jaką płaci.

Czy istnieje metoda, która nie idzie tą drogą enumeracji? Tak.

## Rozwiązanie bez algorytmów: Metoda Roux

W 2003 roku Francuz Gilles Roux przedstawił zupełnie inną koncepcję. Zamiast układać warstwa po warstwie, najpierw buduje się dwa „mosty” 1×2×3 po lewej i prawej stronie, następnie zajmuje się czterema narożnikami górnej warstwy, a na końcu zostaje tylko sześć krawędzi, które układa się za pomocą ruchów środkowej warstwy M i górnej warstwy U.

![Gilles Roux podczas zawodów](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Rysunek: Gilles Roux podczas zawodów. Fragment wczesnego nagrania z zawodów, obraz poprawiony i powiększony przez AI.*

W poprzednim artykule ułożyliśmy kostkę raz, korzystając z tej struktury. Spójrzmy jeszcze raz na jej cztery kroki, tym razem skupiając się na tym, „co trzeba zapamiętać na każdym etapie”:

| Krok | Zawartość | Algorytmy do zapamiętania |
| --- | --- | --- |
| 1. Lewy blok | Zbuduj blok 1×2×3 | 0, czysta obserwacja |
| 2. Prawy blok | Zbuduj drugi, symetrycznie | 0, czysta obserwacja |
| 3. CMLL | Ułóż cztery narożniki górnej warstwy | 9, wszystkie można wyprowadzić z trójcykli |
| 4. LSE | Ostatnie sześć krawędzi | 0, tylko obroty górnej (U) i środkowej (M) warstwy |

Trzy z czterech kroków nie wymagają żadnych algorytmów. Jedyny, który ich potrzebuje, CMLL, ma łącznie 42 przypadki, ale nie musisz uczyć się wszystkich 42. Wspomniany w poprzednim artykule trójcykl narożników R U' L' U R' U' L U, wraz z jego lustrzanym odbiciem i kilkoma wariantami, pokrywa wszystkie sytuacje, choć jest nieco wolniejszy.

![Cztery kroki metody Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Rysunek: Cztery kroki metody Roux. Na każdym etapie pokazane są tylko ułożone do tego momentu bloki: Lewy blok → Prawy blok → CMLL (cztery narożniki górnej warstwy) → LSE (ostatnie sześć krawędzi). Zrzut ekranu z panelu „Rozwiązania” na mojej stronie z kostką 3D.*

Dlatego Roux pozwala na układanie bez zapamiętywania algorytmów: kompresuje część wymagającą pamięci do bardzo małego segmentu, a resztę pozostawia obserwacji, zrozumieniu i wprawie.

## Od 165 do 28 sekund: Cztery etapy

Poniżej przedstawiam moją prawdziwą drogę. Dla każdego etapu oznaczyłem jego początek i koniec danymi, a następnie wyjaśniłem, gdzie napotykałem trudności i co ćwiczyłem. Twoje punkty krytyczne mogą się różnić, ale kolejność będzie najprawdopodobniej taka sama.

![Ramy czasowe czterech etapów](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Rysunek: Ramy czasowe czterech etapów. Etap pierwszy – 3 tygodnie, etap drugi – 11 dni, etap trzeci – dwa miesiące, etap czwarty – do dziś.*

### Etap pierwszy: 165 sekund → 60 sekund (tygodnie 1–3)

**Dane**: Od 7 do 27 maja. Średnia w pierwszym tygodniu 165 sekund, w trzecim tygodniu 68 sekund.

**Gdzie utknąłem**: Lewy blok był bardzo nieopanowany, szukałem każdej grupy kolorów przez długi czas. Po znalezieniu grupy, początkujący zawsze lubią się zatrzymać i dalej obserwować.

![Na co początkujący marnują czas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Rysunek: Na co początkujący marnują czas. Ręce nieruchome, oczy szukają po kostce, czas „szukania” jest wielokrotnie dłuższy niż czas „obracania”.*

**Co ćwiczyłem**:

Największym wrogiem na tym etapie nie jest powolna ręka, ale powolne oko. Czas, który poświęcasz na „szukanie”, jest znacznie dłuższy niż czas na „obracanie”. Dlatego:

- Utrzymuj stałą pozycję obserwacyjną, nie obracaj kostki. Jak wspomniałem w poprzednim artykule, kąt obserwacji w metodzie Roux jest stały. Na tym etapie „nieobracanie kostki” musi stać się pamięcią mięśniową. Za każdym razem, gdy chcesz obrócić kostkę, zatrzymaj się i zapytaj siebie: czy z tego kąta widzę blok, którego szukam?
- Wolne układanie. Nie mierz czasu, ale ruchy muszą być płynne i ciągłe, bez żadnych przerw. Każdy ruch może być bardzo powolny, ale nie powinno być żadnych zatrzymań. Kluczowe jest, aby podczas wykonywania jednego ruchu ręką, oczy już skupiały się na następnym – to jest sedno wolnego układania. Może to brzmieć, jakbyś zwalniał, ale w rzeczywistości trenujesz swoje oczy, aby widziały relację między położeniem bloku a miejscem, w którym powinien się znaleźć.
- Ćwicz tylko pierwszy blok. Potasuj, zbuduj lewy blok, potasuj ponownie, zbuduj lewy blok ponownie. Nie przechodź dalej. Pierwszy blok to najbardziej swobodny krok w metodzie Roux i najlepszy do treningu obserwacji.

Nie ucz się żadnych nowych algorytmów na tym etapie. Twoje obecne ograniczenie nie leży w algorytmach.

### Etap drugi: 60 sekund → 40 sekund (tygodnie 4–5)

**Dane**: Od 27 maja do 7 czerwca, 11 dni. Był to najszybszy okres spadku w całym procesie i jednocześnie ten, w którym ćwiczyłem najwięcej – 723 ułożenia w pierwszym tygodniu czerwca.

**Gdzie utknąłem**: Niespójne ruchy. Kostka zacinała się.

**Co ćwiczyłem**:

Na tym etapie musisz zoptymalizować ruchy na każdym kroku, zwiększając płynność każdego ruchu w oparciu o zrozumienie.

- Drugi blok. Drugi blok jest trudniejszy niż pierwszy, ponieważ przestrzeń jest o połowę mniejsza i nie można zniszczyć już ukończonego lewego bloku. Kluczowe ruchy to R, r (dwie prawe warstwy), M, U. Na tym etapie musisz nauczyć się używać r i M zamiast R do przesuwania bloków, aby lewy blok nigdy nie został zniszczony. Optymalizacja kroków to oszczędność czasu. Na przykład, trzy obroty w prawo są równoważne jednemu obrotowi w lewo.
- Płynne używanie warstwy M. Ostatni etap Roux to wyłącznie ruchy M i U, a to, jak płynnie obraca się warstwa M, bezpośrednio decyduje o twoim limicie. Używaj palca serdecznego lub środkowego do pchania M i zacznij ćwiczyć rytm typu M' U M' U.
- Rozpoznawanie kształtów CMLL. W poprzednim artykule „wypróbowaliśmy” cztery narożniki za pomocą trójcykli. Teraz musisz zacząć najpierw patrzeć, potem działać: zanim obrócisz górną warstwę, rzuć okiem na orientację żółtych ścianek czterech narożników, oceń, czy masz 0, 1, 2 czy 4 dobrze zorientowane narożniki, a następnie wykonaj odpowiedni ruch. Możesz również, za pomocą bardzo niewielkiej liczby algorytmów, znacznie zwiększyć swoją efektywność, co jest bardzo opłacalne. Większości z tych algorytmów nie trzeba uczyć się na pamięć, wystarczy je wykonywać i jednocześnie rozumieć.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Widok podczas budowania prawego bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Rysunek lewy: Widok podczas budowania prawego bloku. Lewy blok jest już ukończony, używając tylko czterech ruchów R, r, M, U, wstawiamy parę narożnik-krawędź z prawej strony, lewy blok nigdy nie zostanie naruszony. Rysunek prawy: M' U M, najczęściej używany zestaw ruchów w drugiej połowie metody Roux. Środkowa warstwa idzie w górę, górna warstwa obraca się, środkowa warstwa wraca – trzy kroki wymieniają parę krawędzi między górną a środkową warstwą.*

Możesz zapoznać się z moją [bazą algorytmów metody Roux](/zh/projects/rubiks-cube/roux#cmll). Strona CMLL przedstawia dwuetapowe rozwiązanie: 7 algorytmów orientacji + 2 algorytmy permutacji, łącznie 9. To opłacalny wybór dla zwiększenia prędkości, łatwy do nauczenia, a opanowanie każdej grupy może przyspieszyć cię o około 1-2 sekundy. Po krótkiej praktyce szybko staną się płynne, a niektóre z nich zostały już przedstawione w poprzednim artykule. Nie musisz pamiętać wszystkich, aby zejść poniżej 30 sekund.

![Pierwszy krok dwuetapowego CMLL, siedem orientacji narożników](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Rysunek: Pierwszy krok dwuetapowego CMLL, siedem orientacji narożników. Na widoku z góry żółty to kolor górnej ścianki, a małe paski na zewnątrz wskazują, że kolor górnej ścianki narożnika jest skierowany na bok. Rozpoznawaj kształty według liczby żółtych narożników: 0 to H lub Pi, 1 to S lub AS, 2 to U, T lub L.*

Po zorientowaniu żółtych ścianek możesz użyć tych dwóch algorytmów do ułożenia narożników.

Jeśli jedna strona ma już zgodny kolor, na przykład czerwony jest już na tej samej ściance, obróć ją na lewą stronę, a następnie możesz wybrać algorytm zamiany sąsiednich narożników. Jeśli żadna strona nie ma zgodnego koloru, wybierz algorytm zamiany narożników po przekątnej.

![Drugi krok dwuetapowego CMLL, dwie pozycje narożników](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Rysunek: Drugi krok dwuetapowego CMLL, dwie pozycje narożników. Na lewym obrazku dwa czerwone narożniki po lewej stronie są już zgodne, użyj zamiany sąsiednich; na prawym obrazku żadna strona nie jest zgodna, użyj zamiany narożników po przekątnej.*

Możesz zrozumieć każdy zestaw algorytmów poprzez intensywne wolne układanie. Nie traktuj ich jako magicznych formuł, lecz jako konkretne sekwencje ruchów. Możesz je odkryć samodzielnie, ale ich przedstawienie tutaj pozwoli ci uniknąć niepotrzebnych objazdów.

Jest jeszcze jedna rzecz, która przynosi natychmiastowe efekty, lepsze niż jakiekolwiek ćwiczenia: zainwestuj w nową kostkę. Jeśli nadal masz starą kostkę, która trzeszczy i blokuje się przy każdym obrocie, kup nowoczesną kostkę 3x3 z magnesami. Najnowsze kostki pokazują moc inżynieryjnej optymalizacji: obracają się płynnie, automatycznie wracają do pozycji, praktycznie się nie zacinają. Sama zmiana kostki może natychmiast poprawić twój średni czas o 15 sekund. Opłacalnym wyborem jest [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), kosztująca około dwudziestu dolarów, wystarczy ci do poziomu sub-20.

### Etap trzeci: 40 sekund → 30 sekund (tygodnie 5–13, dwa miesiące)

**Dane**: Od 7 czerwca do 4 sierpnia. Obniżenie Ao100 z 39,8 do 29,9 sekundy zajęło 58 dni. Na tym etapie sporadycznie mogły pojawiać się wyniki poniżej 30 sekund, ale tylko przy bardzo dużym szczęściu. Co więcej, wraz ze spadkiem średniego czasu układania, trudność poprawy o 1 sekundę rośnie wykładniczo.

![Dzienne średnie wyniki](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Rysunek: Dzienne średnie wyniki. Po połowie czerwca krzywa prawie się wypłaszczyła, a ja „męczyłem się” przez dwa miesiące w przedziale 30–40 sekund.*

To jest faza plateau. Każdy ją napotka, ja spędziłem tu dwa miesiące.

**Gdzie utknąłem**: Układanie sześciu krawędzi górnej warstwy było bardzo wolne, nie rozumiałem logiki, za każdym razem polegałem na próbach i błędach, marnując mnóstwo czasu. Lewy i prawy blok wciąż nie były wystarczająco płynne.

**Co ćwiczyłem**:

- Rozpoznawanie EO (orientacji krawędzi). W poprzednim artykule wspomniałem, że złe krawędzie występują tylko w kilku przypadkach: 0, nie 0 i nie 4, 4 (po 2 na górze i dole), 4 (wszystkie na górze), 4 (3 na górze, 1 na dole). Celem na tym etapie jest: w momencie ukończenia mostów, bez liczenia, od razu rozpoznać, który to przypadek. Metoda treningu to: potasuj, ułóż do końca CMLL, zatrzymaj się, powiedz liczbę źle zorientowanych krawędzi, a następnie kontynuuj.
- Wiele osób nie rozumie ruchów w tym miejscu. Etap EO ostatecznie sprowadza się do stworzenia „kształtu strzałki” (3 na górze, 1 na dole), ponieważ pełny układ jest zaledwie jeden ruch od kształtu strzałki. Myśląc wstecz, jest to ostatni krok przed ukończeniem układania. Niezależnie od liczby źle zorientowanych krawędzi, celem jest zawsze utworzenie strzałki. Jeśli są 4 złe krawędzie na górze, wymień parę krawędzi góra-dół, aby jedną z nich przenieść na dół, tworząc strzałkę. Jeśli są 2 na górze i 2 na dole, wymień parę krawędzi góra-dół, aby jedną z nich przenieść na górę, tworząc strzałkę. Jeśli jest 1 na górze i 1 na dole, lub 2 na górze, użyj M' U M, aby najpierw przekształcić to w poprzedni przypadek, a następnie zbudować strzałkę. Możesz sam odkryć optymalne kroki dla przypadku 1/1 poprzez intensywną obserwację i myślenie.
- Intensywnie ćwicz przewidywanie (Look-ahead). To najważniejsza rzecz, aby przejść z 40 do 30 sekund, a także najbardziej sprzeczna z intuicją: obracaj wolniej, patrz dalej. Budując lewy blok, twoje oczy nie powinny patrzeć na wstawiany blok, ale na to, gdzie jest następny. Na początku będzie to bardzo niewygodne, wyniki mogą się pogorszyć, ale po tygodniu wytrwałości nagle zauważysz poprawę.
- Bez wahania w CMLL. Jeśli musisz zastanawiać się nad każdym ruchem, zanim go wykonasz, to jeszcze nie jest twój. Ćwicz każdy ruch osobno 50 razy, aż ręka sama zacznie się ruszać na widok kształtu.

![Kształt strzałki](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Rysunek: Kształt strzałki. Trzy źle zorientowane krawędzie na górnej warstwie (podświetlone na turkusowo) tworzą strzałkę, wskazującą na jedną źle zorientowaną krawędź na dole. W tym momencie jeden ruch M' U M może ułożyć wszystkie cztery jednocześnie. [Otwórz ten stan w kostce 3D](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), aby zobaczyć to krok po kroku.*

![Sześć form EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Rysunek: Sześć form EO. Etykieta w lewym górnym rogu to liczba źle zorientowanych krawędzi (góra / dół), żółty to dobrze zorientowane krawędzie, turkusowa ramka to źle zorientowane krawędzie. Tylko strzałka wymaga algorytmu, pozostałe pięć przypadków najpierw przekształca się w strzałkę.*

Jeśli chodzi o układanie lewych i prawych krawędzi, przyjmijmy, że żółty jest na górze, biały na dole, a lewy blok jest czerwony. Wtedy musimy ułożyć krawędzie żółto-czerwoną i żółto-pomarańczową (podświetlone). Główna idea polega na tym, aby wymienić krawędź żółto-czerwoną z krawędzią na dolnej warstwie, a także krawędź żółto-pomarańczową z krawędzią na dolnej warstwie. Gdy te dwie krawędzie znajdą się na dolnej warstwie naprzeciwko siebie, obracamy górną warstwę do odpowiedniej pozycji, a następnie M2 U lub M2 U' ułoży lewe i prawe krawędzie warstwy U.

Aby ułatwić zrozumienie, zebrałem wszystkie sześć form EO na [stronie LSE w bazie algorytmów metody Roux](/zh/projects/rubiks-cube/roux#lse). Kliknięcie „zobacz szczegóły” dla każdego obrazka otworzy odpowiadający stan w kostce 3D, a źle zorientowane krawędzie zostaną automatycznie podświetlone. Na tej samej stronie znajdziesz również wszystkie przypadki układania UL/UR i ostatnich czterech krawędzi.

Zmniejszenie objętości treningu na tym etapie nie jest niczym złym. Fazę plateau nie da się pokonać samą ilością, lecz zmianą konkretnych złych nawyków. Moje doświadczenie podpowiada, żeby zmieniać tylko jeden nawyk naraz.

### Etap czwarty: 30 sekund → 28 sekund (po 13 tygodniu)

**Dane**: Po 4 sierpnia. We wrześniu zarejestrowana liczba ćwiczeń to 122, choć wiele z nich nie zostało zapisanych. Kostka stała się dla mnie zabawką na biurku, po którą sięgałem, kiedy miałem ochotę: kiedy byłem w dobrym humorze, kiedy byłem zdenerwowany lub niespokojny, w przerwach w pracy, kiedy się nudziłem. Pozwoliłem, aby układanie kostki wtopiło się w moje życie. Moje Ao100 stopniowo spadało z 29,9 do 28,2.

**Gdzie utknąłem**: Brak wyraźnego punktu krytycznego, po prostu niewystarczająca płynność.

**Co ćwiczyłem**:

Jeśli twoja średnia prędkość nadal przekracza 30 sekund, jedyne, co musisz zrobić, to kontynuować intensywne ćwiczenia, a nie uczyć się nowych algorytmów.

Kontynuując ćwiczenie przewidywania poprzez wolne układanie, będziesz stawał się coraz szybszy.

Bierz kostkę do ręki, kiedy tylko masz okazję. Trzymaj ją w łatwo dostępnym miejscu, na przykład na biurku, aby móc się nią bawić w przerwach w pracy. Możesz także często nagrywać swoje ułożenia, aby sprawdzić, na którym etapie tracisz najwięcej czasu, a następnie celowo optymalizować tę część. To jest właśnie celowe ćwiczenie – twoja prędkość postępów nie zależy od całkowitej liczby zwykłych ćwiczeń, ale od liczby celowych ćwiczeń.

Wtedy odkryjesz, że po przejściu przez okres stagnacji na poziomie 30-35 sekund, twoja prędkość ponownie wzrosła o kolejny poziom.

Na tym etapie gratuluję! Z punktu widzenia początkującego, jesteś już bardzo zaawansowanym graczem!

## Cena za brak algorytmów

Bądźmy szczerzy. Brak algorytmów nie jest darmowy.

Etap CMLL jest wolniejszy. Pokrycie 42 przypadków za pomocą 9 algorytmów oznacza, że niektóre sytuacje trzeba wykonać dwukrotnie. Osoby używające pełnego zestawu CMLL są na tym etapie szybsze ode mnie o dwie, trzy sekundy.

Technika warstwy M ma wysoki próg wejścia. Druga połowa metody Roux opiera się całkowicie na warstwie M, która jest trudniejsza do obrócenia niż R i U, łatwiej się zacina i wymaga lepszej jakości kostki.

Nie martw się o górną granicę. Wśród najlepszych zawodników są tacy, którzy używają Roux i osiągają światowe czołówki – sama metoda nie ma górnego limitu. Jednak aby zejść poniżej 15 sekund, najprawdopodobniej będziesz musiał opanować wszystkie 42 algorytmy CMLL. Ale to już jest kwestia innego etapu. Aby zejść poniżej 30 sekund, nie jest to konieczne.

Co więcej, prawie każdy światowej klasy gracz układający kostkę jedną ręką używa metody Roux, ponieważ jest ona naprawdę bardzo dobrze przystosowana do operacji jednoręcznych.

**Najszybsze wyniki z Roux na oficjalnych zawodach (WCA):**

- Pojedyncze ułożenie 4,11 sekundy, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipiny), Valenzuela Cubing Open 2023, uznany za najszybsze oficjalne pojedyncze ułożenie Roux ([rekonstrukcja wideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Średnia 5,98 sekundy, również on, 2019 rok, wówczas rekord Azji i trzecia w historii oficjalna średnia sub-6 ([profil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- Jest również [rekordzistą świata w układaniu jedną ręką](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): średnia 8,09, pojedyncze ułożenie 6,05 (2024). W kręgach jednoręcznych Roux jest powszechnie uważane za optymalną metodę.

Uważam, że ta wymiana jest bardzo opłacalna. Poświęcasz dwie, trzy sekundy na CMLL, w zamian zyskujesz: świadomość każdego kroku, brak zapominania nawet po trzech miesiącach bez kostki i umiejętność wymyślenia rozwiązania dla każdej nieznanej kostki.

## Podsumowanie

![Ułożona kostka](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Przejście od umiejętności ułożenia kostki do zejścia poniżej 30 sekund to nie proces zapamiętywania algorytmów, lecz trening koordynacji rąk, oczu i mózgu.

Cztery etapy, cztery rzeczy: najpierw naucz się patrzeć bez obracania kostki, następnie naucz się budować prawy blok bez niszczenia lewego, potem naucz się patrzeć na następny krok, wykonując bieżący, a na koniec spraw, by ręce nadążały za oczami.

Algorytmy nie są źródłem prędkości. Obserwacja jest.

Naucz się budować pozytywne sprzężenie zwrotne poprzez postępy na każdym etapie. Nawet ćwiczenia płynności mogą być mniej nużące, zwłaszcza gdy odkryjesz radość z ponownego pobicia rekordu. Szczególnie na początkowym i średniozaawansowanym etapie będziesz codziennie doświadczać radości z bicia rekordów.

Wszystkie algorytmy i przypadki z artykułu zebrałem w [bazie algorytmów metody Roux](/zh/projects/rubiks-cube/roux). Wróć tam, jeśli utkniesz.

Świat kostki Rubika jest pełen nieskończonej zabawy. Życzę ci miłej zabawy!

## Dodatek 1: Lista ćwiczeń dla poszczególnych etapów

**Etap pierwszy (> 60 sekund)**

- Utrzymuj stałą pozycję obserwacyjną, nie obracaj kostki przez cały proces układania.
- Znajdź następny potrzebny kolor bez zatrzymywania się.
- Wolne układanie, nazywaj każdy ruch.
- Ćwicz tylko lewy blok, powtórz 50 razy.

**Etap drugi (60 → 40 sekund)**

- Prawy blok układaj tylko za pomocą R, r, M, U, nie dotykając lewego bloku.
- Ćwicz dwuetapowe CMLL.
- Ćwicz rytm M' U M' U, 5 minut dziennie.

**Etap trzeci (40 → 30 sekund)**

- Zatrzymaj się po CMLL i od razu określ liczbę źle zorientowanych krawędzi.
- Wolne układanie + przewidywanie: oczy zawsze patrzą na następny blok.
- Co najmniej 20 wysokiej jakości ułożeń dziennie.

**Etap czwarty (< 30 sekund)**

- Nagrywaj wideo, aby znaleźć zatrzymania.
- Technika: R U R' U' single-finger, palec serdeczny do warstwy M.
- 20 wysokiej jakości ułożeń dziennie, bez zwiększania objętości.

## Dodatek 2: Narzędzia

- **csTimer**: [cstimer.net](https://cstimer.net/). Włącz statystyki Ao5 / Ao12 / Ao100 – Ao100 to twój prawdziwy poziom, pojedyncze wyniki to kwestia szczęścia.
- **Kostka 3D**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Wszystkie algorytmy z tego artykułu można tutaj wprowadzić i zobaczyć animację.
- **Baza algorytmów metody Roux dla początkujących**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Zawiera popularne schematy wstawiania dla lewego i prawego bloku, 9 algorytmów dwuetapowego CMLL oraz wszystkie przypadki LSE (EO, UL/UR, ostatnie cztery krawędzie). Każdy obrazek można otworzyć w kostce 3D, która automatycznie ukrywa nieistotne bloki i podświetla krawędzie do poruszenia.
- **Analizator treningu csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Wystarczy przeciągnąć i upuścić eksportowany plik z csTimer, aby zobaczyć swoje postępy, krzywe Ao5/Ao12/Ao100, rozwój PB (Personal Best), tabelę kamieni milowych (kiedy osiągnąłeś pierwsze sub-60, sub-40, sub-30) oraz krzywą treningową Power Law. Wszystkie wykresy w tym artykule pochodzą stąd. Dane są przetwarzane wyłącznie w twojej przeglądarce i nie są przesyłane na serwer. Jeśli nie masz pliku eksportu, możesz najpierw załadować moje dane z 4441 ułożeń, aby zobaczyć, jak to działa.

*Ten artykuł zawiera linki afiliacyjne Amazon: kupując za pośrednictwem tych linków, otrzymam niewielką prowizję, a Twoja cena pozostanie bez zmian.*

## Więcej do przeczytania

- [Jak ułożyć kostkę Rubika bez algorytmów: zrozumie nawet podstawówkowicz](/zh/blog/solve-rubiks-cube-without-formulas)
