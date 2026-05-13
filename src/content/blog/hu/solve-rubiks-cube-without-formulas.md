---
layout: blog
title: "Hogyan rakd ki a Rubik-kockát képletek nélkül: Akár egy kisiskolás is megérti"
date: 2026-05-09 12:00:00
tags:
  - Rubik-kocka
  - oktatóanyag
  - csoportelmélet
  - matematika
  - Roux-módszer
categories: 日常折腾
description: A csoportelmélet kommuntátorainak és a Roux-híd módszernek az alkalmazásával lépésről lépésre megtanulhatod, hogyan rakhatsz ki egy 3x3-as Rubik-kockát anélkül, hogy egyetlen képletet is memorizálnod kellene.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Teljesen kirakott Rubik-kocka" />
</figure>

Talán te is egy Rubik-kocka (Rubik's Cube) újonc vagy, aki még sosem rakta ki teljesen a bűvös kockát.

A piacon található úgynevezett útmutatók mindössze egy halom furcsa képletet sorolnak, és azt mondják, csak tedd ezt, aztán azt, és a kocka máris készen van. De miután végigcsináltad, még mindig nem érted, miért működik.

Ez a cikk lesz a te megmentőd. Megtanulod, hogyan rakhatsz ki egy Rubik-kockát a nulláról, anélkül, hogy bármilyen képletet memorizálnod kellene. Megismerkedhetsz a bűvös kocka eredetével, és megértheted, hogyan működik. Az elmélettől a gyakorlatig, lépésről lépésre végigvezetlek egy teljes Rubik-kocka kirakásán, és megtanítalak a megfigyelés művészetére.

Talán ez lesz az első alkalom, hogy személyesen, sikeresen rakod ki a bűvös kockát.

<!--more-->

## A Rubik-kocka születése

Miért rendelkezik a Rubik-kocka ekkora vonzerővel? Először is beszéljünk arról, hogyan született meg.

1974-ben egy magyar építészprofesszor, Rubik Ernő, hogy megmutassa diákjainak, hogyan mozoghatnak az egyes részek önállóan anélkül, hogy az egész szerkezetet megbontaná, elkészítette az első prototípust fából. Hat oldalát különböző színekre festette, és így született meg a bűvös kocka.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubik-kocka prototípus" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Rubik Ernő portréja" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## A kombinációk elképesztő száma

Egy 3x3-as Rubik-kocka 8 sarokkockából, 12 élkockából és 6 középső kockából áll, összesen 26 látható elemből. Azonban valójában csak a hat oldallap középső kockáin kívüli 20 elem mozgatható.

Hány lehetséges állapota van tehát? **4.3 × 10¹⁹**.

Mit is jelent ez a szám? Több állapot létezik, mint ahány homokszem van a Földön. Ha másodpercenként 1 milliárd állapotot próbálnánk ki, több mint **1300 évbe** telne az összes végigjárása. Ha minden egyes állapotot egy papírlapra írnánk és egymásra raknánk, a halom vastagsága 14 000 alkalommal érne el a Földtől a Napig és vissza.

A pici 3x3-as Rubik-kocka valóban megtévesztő. Újszerű és szórakoztató játékmenetének, valamint végtelen változatosságának és vonzerejének köszönhetően a piacra kerülésekor azonnal berobbant, és számos játékos és rajongó próbálta ki lelkesen. Hamarosan kialakultak a Rubik-kocka versenyek, különféle játékmódok (gyorskirakás Speedsolving, bekötött szemmel Blindfolded, egy kézzel One-Handed, lábbal With Feet), különféle megoldási módszerek (rétegenkénti Layer by Layer, sarkok először Corners First, CFOP, Roux-híd módszer, Petrus, ZZ), sőt, még különleges alakú kockák (2x2-től 7x7-ig, Piramix Pyraminx, Skewb, Megaminx) is sorra jelentek meg.

![Különleges alakú Rubik-kocka változatok](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

A Rubik-kocka vonzereje olyan hatalmas, hogy matematikusok évtizedekig tanulmányozták a benne rejlő matematikát, kutatva az "Isten számát". Asztronauták vitték magukkal az űrbe, férfiak és nők, fiatalok és idősek egyaránt jeleskedtek a különböző versenyeken. Azonban a kocka lenyűgöző bája ellenére viszonylag kevés ember játszik vele. Ezért szeretném ezen a cikken keresztül megtanítani a kockakirakást mindenkinek, hogy élvezhessék a bűvös kocka nyújtotta szórakoztató és fejlesztő játék örömeit.

## A képletek csapdája

A piacon lévő legtöbb megoldási módszerhez sok képlet memorizálására van szükség, ami nagyon elriasztja az újoncokat. Még mielőtt éreznék a kockakirakás örömét, a képletek gátat szabnak nekik. Az ismert CFOP módszer több mint 100 képletet tartalmaz, egy kezdőnek is több tucatot kell megjegyeznie.

Ezért ma egy olyan módszert szeretnék megosztani veletek, amellyel képletek memorizálása nélkül is élvezetesen játszhattok a Rubik-kockával. Így csak megfigyelés és megértés alapján is ki tudod rakni a kockát.

## Matematikai nagytüzérség: Csoportelmélet (Group Theory)

Kérdés: Hogyan rakhatjuk ki a Rubik-kockát anélkül, hogy egyetlen képletet is memorizálnánk?

Itt kell elővennünk a matematika nagytüzérségét: a csoportelméletet. Nincs olyan probléma, amit ne lehetne matematikával megoldani.

Mi a kapcsolat a Rubik-kocka és a csoportelmélet között? A Rubik-kocka valójában egy csoport. A bűvös kockában minden egyes fordulat egy permutációs művelet. Ennek a műveletnek több jellemzője is van: kombinálható, visszafordítható, de nem kommutatív.

Az általános iskolában tanult szorzás egy kommutatív művelet: A × B és B × A eredménye pontosan ugyanaz. A Rubik-kocka csoportjában azonban A és B felcserélése nem egyenértékű; először R, majd U, és először U, majd R teljesen különböző műveletek. Tehát ha megértjük a csoportokat, megértjük a Rubik-kockát. És a kockázás segít nekünk megérteni a csoportokat.

Gratulálok, máris megértetted az Abel-csoportok (a szorzás és az összeadás is Abel-csoport) és a nem-Abel-csoportok (a Rubik-kocka csoportja) közötti különbséget.

(Kiegészítés: Egy olvasó felhívta a figyelmet, hogy a fenti állítás nem volt teljesen precíz, ezért kiegészítem. Az egészek az összeadásra nézve Abel-csoportot alkotnak, a természetes számok (N) az összeadásra nézve nem alkotnak Abel-csoportot, például 3-nak nincs inverze (-3), mivel -3 nem természetes szám. A nem nulla valós számok, nem nulla racionális számok és nem nulla komplex számok a szorzásra nézve Abel-csoportot alkotnak. Az eredeti analógia célja elsősorban az volt, hogy a kezdők megértsék a "kommutatív vs. nem kommutatív" alapvető intuícióját.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U és U R eltérő sorrendje eltérő hatásokat eredményez - Első rész" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U és U R eltérő sorrendje eltérő hatásokat eredményez - Második rész" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Kiegészítés: A Rubik-kocka standard műveleteit általában betűkkel jelölik: R jelenti a jobb oldali réteg 90 fokos óramutató járásával megegyező irányú elforgatását, U a felső réteg 90 fokos óramutató járásával megegyező irányú elforgatását, R' az óramutató járásával ellentétes irányú 90 fokos elforgatást, az M' a középső réteg felfelé mozgatását, az M pedig a középső réteg lefelé mozgatását.)

A mellékletben található online Rubik-kocka animáción közvetlenül megfigyelheted és megtanulhatod, hogyan forognak a kocka rétegei.

## Elméleti rész: A képletmentes kirakás lényege: a kommutátor (Commutator)

Ahhoz, hogy kirakjuk a Rubik-kockát, a következő állapotot kell elérnünk: **egyes kockák helyzetének megváltoztatása anélkül, hogy a többi kocka pozícióját módosítanánk.**

Matematikailag ezt a műveletet kommutátornak (Commutator) nevezik, és **A B A⁻¹ B⁻¹** formában írják.

A⁻¹ az A inverz művelete.

Egy nagyon hétköznapi példát is hozhatunk – a liftet. Tegyük fel, hogy valakit az 1. emeletről a 3. emeletre szeretnél juttatni:

1. **A**: Az ember beszáll a liftbe
2. **B**: A lift felmegy a 3. emeletre
3. **A⁻¹**: Az ember kiszáll a liftből
4. **B⁻¹**: A lift visszatér az 1. emeletre

Eredmény: A lift visszatért a kiindulási helyzetébe, de az ember az 1. emeletről a 3. emeletre került. A kulcs az, hogy amikor a lift visszatért, az ember már nem volt benne – így a környezet visszaállt, de a célpont helyet változtatott.

Például a Rubik-kockában az R és R⁻¹ azt jelenti, hogy a jobb oldali réteget 90 fokkal elforgatjuk óramutató járásával megegyező irányba, majd a harmadik lépésben 90 fokkal visszafelé, óramutató járásával ellentétes irányba.

Az A⁻¹ B⁻¹ inverz művelet visszaállítja az AB művelet által felborított környezetet, ezzel elérve, hogy csak bizonyos specifikus kockákat cseréljünk ki, anélkül, hogy a környezetet befolyásolnánk.

Miért nem A A⁻¹ B B⁻¹? Így minden mozdulat közvetlenül kioltja egymást, és a kockák nem cserélődhetnek ki. Ha épp most végeztél egy A műveletet, majd azonnal következik az A⁻¹ inverz művelet, az együttesen semmit sem ér (pl. a felső réteg 90 fokos elforgatása óramutató járásával ellentétesen, majd azonnal 90 fokos elforgatása óramutató járásával megegyezően). Ezért muszáj **A B A⁻¹ B⁻¹** alakban lennie, hogy csere jöjjön létre.

Ez a legalapvetőbb csere, és a Rubik-kockában a legkézenfekvőbb atomi mozdulat a következő: **R U R' U'**

![R U R' U' bemutató](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Ezt lehet nagyon hosszúra is kombinálni, és különböző permutációs hatásokat érhetünk el vele, például ezt: (R U R' U') (R U R' U') (R U R')

Valójában ez a képletek forrása. Miért léteznek képletek? Egyszerűen az alapvető permutációs műveletek sorozatát kombinálják, és ezekből szekvenciákat hoznak létre. A szekvenciák végrehajtásával gyorsan elérhetünk bizonyos eredményeket, például egy él vagy egy sarokkocka visszaállítását. Különböző szekvenciák kombinálhatók, hogy elvezessenek minket a Rubik-kocka teljes kirakásához.

Miután megértettük az elvet, akár saját, egyedi képleteket is létrehozhatunk. (Hogyan készítsünk saját Rubik-kocka képleteket, azt egy későbbi cikkben részletesen kifejtem.)

Tehát ahhoz, hogy képletek memorizálása nélkül rakjuk ki a Rubik-kockát, mindössze az alapvető permutációk logikáját kell elsajátítanunk; minden más helyzetben alkalmazhatjuk ezt a gondolkodásmódot. A legatomibb permutációs mozdulat három sarokkocka vagy három élkocka helyzetét fogja felcserélni.

## Hogyan végezzünk cseréket a Rubik-kockában

Korábban említettem, hogy a Rubik-kockában a legkézenfekvőbb atomi csere mozdulat a következő: **R U R' U'**, és ha alaposan megérted ezt a mozdulatot, azonnal ki tudod rakni a kocka első két rétegét.

Ez a mozdulat valójában a következőket jelenti: elmozdítás (jobb réteg), behelyezés (a célkocka), visszaállítás (jobb réteg), visszaállítás (felső réteg).

Így valósítottuk meg, hogy a bal első sarokkockát és a középső élkockát behelyeztük a jobb alsó sarokba.

Ez a mozdulat folyamatosan változtatható, lehet **U R U' R'**, vagy **F R F' R'**, és így tovább, bármilyen pozícióban, sőt, létezik középső rétegű is, mint az **M U M' U'**, vagy akár **U2 R U2 R'**.

![Alapvető csere mozdulat bemutatója](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

A kezdeti szakaszban a Rubik-kocka a legkaotikusabb állapotban van, ezért rengeteg ilyen alapvető permutációt alkalmazhatunk egy oldal vagy más részleges elemek visszaállítására, ezzel csökkentve a rendetlenség mértékét.

Ráadásul, mivel az állapot nagyon kaotikus, az **R U R' U'** utolsó, környezet visszaállítását célzó U' mozdulata akár el is hagyható, és közvetlenül a következő mozdulat következhet. Ez leegyszerűsödik a következőre: elmozdít, behelyez, visszaállít.

Elmozdít, behelyez, visszaállít.

Ez a kulcsmozdulat, gratulálok, máris megértetted, hogyan kell játszani a Rubik-kockával!

De később, hosszabb permutációs lépésekre lesz szükségünk, hogy anélkül cserélhessünk ki bizonyos kockákat, hogy teljesen tönkretennénk az addig már visszaállított állapotot.

Vegyük példának az **R U' L' U R' U' L U** mozdulatot; ez a művelet képes csak három sarokkockát felcserélni anélkül, hogy bármi mást befolyásolna. Kommutátor logikára bontva:

```
A   = R U'   (A sarokkocka elküldése)
B   = L'     (Bal réteg elmozdítása)
A⁻¹ = U R'   (A művelet visszaállítása)
B⁻¹ = U' L U (B művelet visszaállítása, igazítással)
```

Hatás: A bal alsó sarokkocka helyzete változatlan marad, a másik három sarokkocka pedig felcserélődik.

Ez valószínűleg az egyetlen két képlet a cikkben, amit meg kell ismerned. A gyakorlati részben megtanuljuk, hogyan használd őket, és a műveletek során megérted és elsajátítod a lényegüket, anélkül, hogy bemagolnád.

## Gyakorlati rész: A nulláról a teljes kirakásig

Elérkeztünk a cikk fénypontjához: lépésről lépésre végigvezetlek azon, hogyan rakhatod ki a Rubik-kockát a nulláról, pusztán megfigyelés és megértés alapján.

Szükséges előkészületek:

- Egy Rubik-kocka
- És egy kis türelem (mivel fő célunk a megfigyelés és a megértés).

Először is tegyük fel, hogy már van egy Rubik-kockád. A nemzetközi szabványok szerint véletlenszerűen összekeverjük a kockát (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), majd együtt rakjuk ki.

Vagy játszhatsz közvetlenül az online verzióval itt; ha rákattintasz erre a linkre, egy összekevert kockát látsz: [3D Rubik-kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Összekevert Rubik-kocka kezdeti állapota](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

A rendkívül elegáns Roux-híd módszer gondolatmenetét követve rakhatjuk ki a kockát. Az úgynevezett híd módszer, eltérően a rétegenkénti kirakástól, először a bal és jobb oldali 1x2x3-as blokkokat, azaz a „bal és jobb hidakat” állítja helyre, majd a felső réteget és a fennmaradó részeket.

A híd módszer rendkívül szabad és rugalmas, ráadásul kevesebb lépést igényel, mint sok ismert megoldás, és viszonylag kevés képletet kell megjegyezni, mivel alapvetően a kommutátorok logikáján alapul. Ebben a keretrendszerben tanulhatjuk meg, hogyan rakjuk ki a Rubik-kockát anélkül, hogy egyetlen képletet is bemagolnánk.

![Roux megoldási módszer folyamatábrája](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Első lépés: A megfigyelési pozíció rögzítése

A híd módszerben a megfigyelési pozíció fix; a kirakás során nem kell gyakran forgatnunk a Rubik-kockát, hanem ugyanabból a szögből gondolkodunk és rakjuk ki. Ezzel a rögzített oldallal nagyon könnyen láthatjuk az egyes sarok- és élkockákat, és tudni fogjuk, hová kell kerülniük.

Ezt a szöget vehetjük alapul:

- Előre (feléd nézve): Zöld oldal
- Bal oldal: Piros
- Jobb oldal: Narancssárga
- Felső réteg: Sárga
- Alsó réteg: Fehér
- Hátsó oldal: Kék

### Második lépés: A bal és jobb híd felépítése

**A bal híd felépítésének sorrendje:**

1. Először helyezzük a helyére a fehér-piros élkockát (a bal alsó oszlopot).
2. Utána a hátsó kék-piros élkockát helyezzük a helyére.
3. Végül az elülső két piros sarokkockát helyezzük a helyére.

A bal híd elkészült állapotának sematikus ábrája:

![Bal híd elkészült állapota](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ez a folyamat nem igényel semmilyen képletet, elegendő a megfigyelés és a megértés; minél többet gyakorolsz, annál ügyesebb leszel.

**F' L**: Megfigyeléses módszerrel keressük meg a piros-fehér élkockát, és helyezzük a helyére úgy, hogy a fehér lefelé, a piros pedig balra nézzen.

![Fehér-piros élkocka a helyén bemutató](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Helyezzük a kék-piros élkockát és sarokkockát a helyére.

![Kék-piros élkocka és sarokkocka a helyén](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Keressük meg a bal híd utolsó két kockájának helyét, és próbáljuk meg a helyükre tenni őket, így egy tökéletes bal hidat kapunk.

![Bal híd utolsó két kockájának helyreállítása](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**A jobb híd hasonlóan** épül fel; a pirosat cseréljük narancssárgára, és ismételjük meg a fenti lépéseket. Itt azonban figyeljünk arra, hogy ne keverjük össze a már elkészült bal hidat. Ha kölcsönzésre van szükség (azaz ideiglenesen el kell mozdítani), először mozdítsuk el a bal hidat egy pozícióval, hogy a jobb oldali műveletek ne befolyásolják, majd miután a jobb oldali mozdulatok befejeződtek, állítsuk vissza a bal hidat.

**Jobb híd középső része**: U' M U' R2

![Jobb híd középső élkockája a helyén](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Jobb híd első kockája**: U' M' U2 R' U R

![Jobb híd első kockája a helyén](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Elkészítettük a jobb híd utolsó modulját, és be szeretnénk illeszteni a helyére, ezért először elmozdítjuk a bal hidat (F'), teret teremtve, majd mozgatjuk a modult (U), végül pedig a bal és a jobb híd egyszerre kerül vissza a helyére.

![Jobb híd utolsó kockájának beillesztése](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ez a bal és jobb híd elkészült állapota. Elég, ha a hidak kialakultak, a többi színes kockával egyelőre nem kell törődnünk.

![Bal és jobb híd elkészült állapota](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Harmadik lépés: A felső réteg sarokkockáinak visszaállítása

Miután helyreállítottad a bal és jobb hidat, elkezdjük a fennmaradó négy sarokkocka visszaállítását. Itt szükségünk lesz a sarokkocka háromciklusú cseréjére, amely három sarokkockát cserél fel: A-ból B-be, B-ből C-be, és C-ből vissza A-ba.

![Sarokkocka háromciklusú csere illusztráció: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Sarokkocka háromciklusú csere

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">1. Képlet</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>A bal alsó sarokkocka helyzete változatlan marad</li>
      <li>A másik három sarokkocka<strong>óra járásával ellentétesen</strong> cserél helyet</li>
      <li>De belső színeik <strong>óra járásával megegyezően</strong> forognak</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">2. Képlet (tükörképes változat)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>A jobb alsó sarokkocka helyzete változatlan marad</li>
      <li>A másik három sarokkocka <strong>óra járásával megegyezően</strong> cserél helyet</li>
      <li>De belső színeik <strong>óra járásával ellentétesen</strong> forognak</li>
    </ul>
  </div>
</div>

![Sarokkocka háromciklusú csere tükörképes változatának bemutatója](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Összesen négyféle sarokkocka orientációval találkozhatsz: 0, 1, 2 vagy 4 jó sarokkocka.

- **4 jó sarokkocka**: Kész állapot
- **1 jó sarokkocka** (kis hal alakzat): Még egyszer végezzük el a háromciklusú cserét vagy annak tükörképes változatát, és kész.
- **0 / 2 rossz sarokkocka**: Először helyezzünk egy rossz sarokkockát olyan pozícióba, amelyet a háromciklusú csere nem érint (bal alsó sarok), végezzünk el egy háromciklusú cserét, ekkor 1 jó sarokkockánk lesz, és visszatérünk az előző esetre.

Néha az alap háromciklusú cserét kétszer kell elvégezni a visszaállításhoz, míg a tükörképes változatot csak egyszer. Kezdőként elég az alapváltozatot elsajátítani, a megfigyelésre és megértésre koncentrálva, majd a többi magától értetődővé válik. Ez a sárga felfelé néző háromciklusú csere egy ismert klasszikus képlet is – a bal és jobb hal képlet –, érdemes megfigyelni a hal alakzatot.

Ezt a képletet sem kell bemagolnod, figyeld meg, hogyan mozog a két zöld kocka, és végezd el néhányszor magad is, hogy megszokd. A lényeg a felső réteg három sarokkockájának cseréje.

A bal és jobb hidat épp most elkészített Rubik-kockán azt látjuk, hogy felül két sárga van. Ezért a bal alsó sarokkockát kicseréljük egy nem sárgára, és elvégzünk egy sarokkocka háromciklusú csere műveletet. Ezután még kétszer elvégezzük a háromciklusú cserét, vagy egyszer a tükörképes változatot, így elérjük, hogy a felső réteg mind a négy sarka sárga színnel felfelé nézzen.

![Sarokkocka háromciklusú csere folyamatának bemutatója](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Elkészült a négy sárga sarok!

![Négy sárga sarok elkészült állapota](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Pozíciók igazítása (oldalszínek összehangolása)

Miután mind a négy sarokkocka sárga oldala felfelé néz, még össze kell hangolni a sarokkockák oldalszíneit is, hogy a sarokkockák teljesen a helyükre kerüljenek.

Ekkor használjuk a **J-perm variánsát**: **R U2 R' U' R U2 L' U R' U' L**

Ennek a képletnek a logikája felbontható „párok mozgatása + logikai csere” elemekre:

- Az első rész `R U2 R' U' R`: Egy párt biztonságos zónába viszünk ideiglenes tárolásra, helyet szabadítva fel.
- A második rész `U2 L' U R' U' L`: A háromciklusú logika segítségével pontosan felcserélünk két sarokkockát.

**Hatás**: A jobb oldali két sarokkocka helyet cserél, miközben a sárga felfelé néz, a többi sarokkocka pedig változatlan marad.

Ez azt jelenti, hogy tetszőlegesen felcserélhetjük két szomszédos sarokkocka helyzetét (az U forgatással beállíthatjuk, melyik két sarokkocka legyen jobb oldalon), és néhány ismételt csere után mind a négy sarokkocka teljesen igazodni fog és a helyére kerül.

![J-perm bemutató](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ezt a képletet sem kell bemagolnod, figyeld meg, hogyan mozog a két zöld kocka, és végezd el néhányszor magad is, hogy megszokd. A lényeg, hogy a felső réteg jobb oldali két sarokkockáját cseréljük ki, miközben a sárga oldal felfelé néz.

### Negyedik lépés: Az utolsó hat élkocka visszaállítása (LSE, Last Six Edges)

Itt először igazítsuk a középső kockákat, hogy a sárga legyen felül, a fehér alul, majd állítsuk be az élkockákat.

Már csak 6 élkocka maradt. Ez a lépés csak az **M** és **U** műveleteket használja, és rendkívül intuitív.

#### 4a: Orientáció beállítása (EO, Edge Orientation)

**Értékelési módszer**: Nézd meg, hogy az élkocka fehér / sárga matricája felfelé vagy lefelé néz-e.

- Felfelé / lefelé = Jó élkocka ✓
- Oldalra néz = Rossz élkocka ✗

**Beállítási módszer**: Az **M U M'** vagy **M' U M** segítségével fordítsd meg a rossz élkockákat.

![M U M' rossz élkocka megfordítása bemutató](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitív értelmezés: Az M felhozza a középső réteg élkockáját, az U beállítja a pozíciót, az M' pedig visszafordítja.

Ismételd meg néhányszor, amíg az összes élkocka fehér / sárga oldala felfelé vagy lefelé nem néz.

A helyes orientációjú élkockákat jó élkockáknak, a hibás orientációjúakat pedig rossz élkockáknak nevezhetjük.

Ahogy a képen is látható, a kiemelt három élkocka a felső rétegben rossz élkocka, mert sem sárga, sem fehér.

![Rossz élkockák kiemelve](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Beállítási tippek**: Összesen négyféle rossz élkocka-helyzettel találkozhatsz:

- **0 rossz élkocka**: Kész állapot
- **Nem 0 és nem is 4 rossz élkocka**: Az **M' U M** segítségével változtassuk meg a rossz élkockák számát, növelve 4-re.
- **4 rossz élkocka (felül és alul 2-2)**: Az **M' U2 M** segítségével cseréljük fel a felső és alsó élkockákat, így felül 3, alul 1 rossz élkockánk lesz.
- **4 rossz élkocka (felül 3, alul 1)**: A felső réteg három rossz élkockája egy nyilat fog alkotni; forgassuk el a felső réteget úgy, hogy a nyíl az alsó réteg rossz élkockájára mutasson, végezzünk el egy **M' U M** mozdulatot, és mind a négy rossz élkocka semlegesül, és jó élkockává válik.

![Négy rossz élkocka nyíl megszüntetése bemutató](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Ha nem jelenik meg a nyíl, ismételten próbálkozz az **M' U M**-mel, mindig össze fog jönni. Haladó szinten lassan ráérezhetsz a mintákra.

#### 4b: A bal és jobb oldali élkockák visszaállítása (piros és narancssárga)

Keressük meg a piros-sárga és narancssárga-sárga élkockákat (a cél, hogy a bal és jobb oldali élkockákhoz visszakerüljenek), és élkocka háromciklusú cserével juttassuk őket a megfelelő pozícióba.

**Tippek**:

1. Helyezzük a piros-sárga (vagy narancssárga-sárga) élkockát a középső réteg fölé, majd a felső és alsó élkockák cseréjével süllyesszük le (mélyítsük el) (**M' U2 M**).
2. Helyezzük a másik narancssárga-sárga (vagy piros-sárga) élkockát az ellenkező oldalon a mélybe.
3. Forgassuk el a felső réteget úgy, hogy a piros élkocka a leeresztett piros-sárga élkockával szemben lévő pozícióba kerüljön.
4. Fordítsuk el a középső réteget fél fordulattal **M2**, majd a felső réteget igazítsuk a helyére **U**.

![Bal és jobb élkockák a helyén bemutató](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Az utolsó négy élkocka megoldása (kék és zöld)

**Tippek**:

- Folyamatosan használjuk az **élkocka háromciklusú cserét** a felső és alsó élkockák cseréjére: **M' U2 M**, az utolsó lépést pedig megfigyelés alapján igazítsuk a helyére **U2**.
- Gyors tipp: Helyezzük a fehér-zöld (vagy fehér-kék) élkockát a célpozíció fölé, cseréljük fel a felső és alsó élkockákat, és a fehér-zöld (fehér-kék) máris a helyén lesz.

Csak három eset lehetséges:

- Már jó → Kész!
- M2 szükséges → Végezz el egy **M2**-t
- Csere szükséges → **M' U2 M U2** vagy **M U2 M' U2**

A háromciklusú csere logikáját is leegyszerűsíthetjük: M' a középső réteg feljön, U2 a felső réteg fél fordulatot tesz, M a középső réteg visszaáll, U2 a felső réteg visszaáll.

![Három élkocka csere bemutató](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Kész!

![Teljesen kirakott Rubik-kocka](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Összefoglalás

Nincs szükség képletek bemagolására, csak az „ajtó nyitása – művelet – ajtó zárása” kommuntátor logikára. Látni fogod, hogy ez a folyamat sokkal szórakoztatóbb, mint a képletek tanulása, és évek múlva sem kell aggódnod, hogy elfelejted, bármikor levezetheted magadtól.

Ugyanez a gondolkodásmód bármilyen Rubik-kocka kirakásához felhasználható, beleértve a különféle furcsa alakú kockákat is.

De ha a gyorskirakás útjára akarsz lépni, akkor a végtelen gyakorlás útját kell választanod. Kezdőknek azonban némi gyakorlással a 90 másodperc alatti idő elérése nem jelenthet problémát.

Megoldási módszer ezer és ezer van, rajtad múlik, találsz-e elegánsabbat vagy kézenfekvőbbet.

A Rubik-kocka világa végtelenül szórakoztató, jó szórakozást kívánok!

## 1. Melléklet: A jelen Rubik-kocka megoldási módszerének összefoglalója (A kockakirakás mantrája)

1. **A bal és jobb híd felépítése: Megfigyelés és intuíció alapján**
   - Tippek: Amint nagyon jártassá válsz a megfigyelésben és előrejelzésben, a Rubik-kocka aktuális állapotától függően prioritást adhatsz más modulok építésének, vagy akár egyszerre is építheted a bal és jobb hidat, amivel kevesebb lépést érhetsz el, és rendkívül szabadon dolgozhatsz.
2. **A felső réteg négy sarokkockájának orientációjának visszaállítása: Mind a négy sárga felfelé néz**
   - Felső réteg sarokkocka háromciklusú csere: **R U' L' U R' U' L U** (A bal alsó sarokkocka helyzete változatlan marad, a másik három sarokkocka belső színei óramutató járásával megegyezően forognak.)
   - Felső réteg sarokkocka háromciklusú csere tükörképes változata: **L' U R U' L U R' U'** (A jobb alsó sarokkocka helyzete változatlan marad, a másik három sarokkocka belső színei óramutató járásával ellentétesen forognak.)
3. **A felső réteg négy sarokkockájának oldalsó részeinek visszaállítása**
   - **Felső réteg sarokkocka pozíciójának finomhangolása**: **R U2 R' U' R U2 L' U R' U' L** (Tartsa mind a négy sarokkockát sárga oldallal felfelé, és cserélje fel a jobb oldalon lévő két sarokkocka helyzetét.)
4. **Az élkockák orientációjának megváltoztatása, hogy a fehér vagy sárga felfelé vagy lefelé nézzen**
   - Először igazítsuk a középső kockákat, hogy a sárga legyen felül, a fehér alul, majd állítsuk be az élkockákat.
   - Az **M' U M** segítségével változtassuk meg a rossz élkockák számát, készítsünk nyilat, mutassuk a nyilat a rossz élkockára, végezzünk el egy **M' U M** mozdulatot, és mind a négy rossz élkocka semlegesül és a helyére kerül.
5. **A bal és jobb oldali élkockák visszaállítása** (piros és narancssárga)
   - Először helyezzük a piros-sárga (vagy narancssárga-sárga) élkockát a mélybe a felső és alsó élkockák cseréjével (**M' U2 M**).
6. **A fennmaradó élkockák visszaállítása** (kék és zöld)
   - Folyamatosan használjuk az **élkocka háromciklusú cserét** a felső és alsó élkockák cseréjére: **M' U2 M**, az utolsó lépést pedig megfigyelés alapján igazítsuk a helyére **U2**.

A fenti képleteket egyáltalán nem muszáj bemagolni, csak azért szerepelnek a függelékben, hogy könnyen visszakereshetők legyenek. Valójában ha magad próbálod ki, és minden alkalommal megfigyeled, megérted, hogyan mozognak a megfelelő kockák, néhány próbálkozás után belejössz. A lényeg a felső réteg három sarokkockájának cseréje.

## 2. Melléklet: Hasznos weboldalak és eszközök

Készítettem nektek egy 3D-s online Rubik-kockát is, amivel szabadon játszhattok, tetszőlegesen keverhetitek és rakhatjátok ki fix képletek alapján, minden egyes lépéshez gyönyörű animációt nézhettek!

[3D Rubik-kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D Rubik-kocka eszköz](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

A jelen útmutatóban szereplő keverési képlet: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

A jelen útmutató bal-jobb hidak kirakási lépései: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Ha rákattintasz erre a linkre, egy összekevert kockát látsz: [3D Rubik-kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

A világkocka-bajnokok által is használt Rubik-kocka időmérő: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
