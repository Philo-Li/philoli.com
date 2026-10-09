---
layout: blog
title: "Hogyan juss 30 másodperc alá a Rubik-kockával algoritmusok memorizálása nélkül: Akár egy kisiskolás is megérti"
date: 2026-10-09 12:00:00
tags:
  - Rubik-kocka
  - útmutató
  - Roux módszer
  - gyorskirakás
  - tudatos gyakorlás
categories: Mindennapi pepecselés
description: "89 nap alatt jutottam el az első kirakástól az Ao100 30 másodperc alá, egyetlen CFOP algoritmus memorizálása nélkül. 4441 mért idő alapján bontom négy szakaszra az utat: hol akadsz el az egyes fázisokban, mit gyakorolj, és miért nem kell algoritmusokat magolnod a Roux módszerhez."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Hogyan juss 30 másodperc alá a Rubik-kockával algoritmusok memorizálása nélkül: Akár egy kisiskolás is megérti" />
</figure>

Az előző, [„Hogyan rakd ki a Rubik-kockát algoritmusok memorizálása nélkül”](/hu/blog/solve-rubiks-cube-without-formulas/) című cikkemben megtanultad, hogyan rakhatsz ki egy kockát algoritmusok nélkül, csupán a kommutátorok logikáját használva. Ez a cikk sok pozitív visszajelzést kapott.

Ha lépésről lépésre követted az útmutatót, akkor mostanra valószínűleg már sikerül elejétől a végéig kiraknod a kockát, még ha kicsit döcögősen is. Néhány száz kirakásnyi gyakorlással könnyedén 1 perc alá lehet kerülni. De mi a helyzet, ha még ennél is gyorsabb szeretnél lenni?

Ha rákeresel a "gyorskirakás Rubik-kocka" kifejezésre, minden útmutató ugyanazt fogja mondani: ha 30 másodperc alá akarsz kerülni, először tanuld meg a több mint száz CFOP algoritmust.

Ez a cikk azonban azt szeretné megmutatni neked, hogy teljesen algoritmusok memorizálása nélkül is bekerülhetsz a 30 másodperc alatti kategóriába.

<!--more-->

Amikor 2026. május 7-én először raktam ki teljesen a Rubik-kockát, egészen augusztus 4-ig, az Ao100 30 másodperc alá kerüléséig 89 nap telt el. Ez idő alatt egyetlen CFOP algoritmust sem memorizáltam, csupán a szabadidőmben játszottam. Ez 4441 kirakás időadata a feljegyzéseim szerint.

![4441 kirakás eredménygörbéje](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Kép: 4441 kirakás eredménygörbéje. A szürke vonal az egyes időket mutatja, a sötét vonal az Ao100 tendenciáját, a piros pontok pedig a személyes rekordok megdöntését. A legjobb Ao100 28,22 másodperc volt.*

Tudatos és rendszeres gyakorlással bárki elérheti a nulláról a sub-30 szintet néhány hónap alatt.

Mit is jelent a 30 másodperc alatti idő? Az [1982-es első Rubik-kocka Világbajnokságon](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) a bajnok eredménye 22,95 másodperc volt, amit később a WCA az első hivatalos világrekordként ismert el; a 10. helyezett 29,11 másodperccel Jessica Fridrich maga volt, a CFOP módszer feltalálója, akiről a következő szakaszban lesz szó. Más szóval, egy mai amatőr, aki néhány hónap alatt eléri a sub-30-at, 1982-ben a világ top tízébe került volna.

A továbbiakban megosztom veled, hogyan jutottam el idáig lépésről lépésre, és teljes mértékben átadom neked a gyakorlási módszert.

## Miért memorizál mindenki algoritmusokat a gyorskirakás világában?

Először tisztázzunk egy dolgot: miért kapcsolódik össze az emberek fejében a "gyorsaság" és az "algoritmusok memorizálása"?

Az 1980-as évek elején Jessica Fridrich cseh származású professzor (aki később az amerikai Binghamton Egyetemen digitális kriminalisztikát kutatott) rendszerezett egy rétegenkénti megoldási módszert, amelyet később CFOP-nak (Cross, F2L, OLL, PLL) neveztek el. Ennek a módszernek a lényege: a felső réteg összes lehetséges állapotát kimerítően felsorolja, és minden állapothoz hozzárendel egy optimális algoritmust. Felismered az állapotot, végrehajtod az algoritmust, és nem kell gondolkodnod.

Ez a módszer rendkívül gyors. Szinte minden világrekord CFOP-pal született. Ezért minden útmutató ezt tanítja, minden videó erről szól, a "gyorskirakás tanulása" egyenlő a "CFOP tanulásával", a CFOP tanulása pedig egyenlő 119 algoritmus memorizálásával.

De figyelem: az "algoritmusok memorizálása" a CFOP módszer sajátossága, nem pedig a "gyorsaság" önmagában vett sajátossága. A CFOP azért igényel memorizálást, mert a kimerítő felsorolás útját választotta. A kimerítő felsorolás memóriát igényel, ez az ára.

Létezik olyan módszer, ami nem a kimerítő felsorolás útját járja? Igen.

## Algoritmusok nélküli megoldás: A Roux módszer

2003-ban a francia Gilles Roux egy teljesen más megközelítést mutatott be. Nem rétegről rétegre építkezik, hanem először két 1×2×3-as "blokkot" (hidat) épít fel, majd a felső réteg négy sarkával foglalkozik, végül pedig hat élélet hagy, és az M és U rétegforgatásokkal fejezi be.

Az előző cikkben már kiraktunk egy kockát ezzel a kerettel. Nézzük meg újra a négy lépést, ezúttal arra fókuszálva, hogy "mit kell megjegyezni minden lépésnél":

| Lépés | Tartalom | Memorizálandó algoritmusok |
| --- | --- | --- |
| 1. Első blokk (FB) | Egy 1×2×3-as blokk felépítése | 0, tiszta megfigyelés |
| 2. Második blokk (SB) | Egy szimmetrikus blokk felépítése | 0, tiszta megfigyelés |
| 3. CMLL | A felső réteg négy sarokelemének elhelyezése | 9, mind levezethető a hármas cserékből |
| 4. LSE | Az utolsó hat élél | 0, csak a felső és középső réteg (M és U) forgatása |

A négy lépésből háromhoz egyáltalán nincs szükség algoritmusokra. Az egyetlen szükséges CMLL összesen 42 esetet tartalmaz, de nincs szükséged mind a 42-re. Az előző cikkben említett sarok hármas csere R U' L' U R' U' L U, plusz a tükörképe és néhány variációja, lefedi az összes esetet, csak kicsit lassabban.

![A Roux négy lépése](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Kép: A Roux négy lépése, minden lépésnél csak az addig elhelyezett elemek láthatók: Első blokk → Második blokk → CMLL (felső réteg sarkai) → LSE (utolsó hat élél). Képernyőfelvétel a 3D kocka oldalam "Megoldások" paneljéről.*

Ezért nem igényel a Roux algoritmusok memorizálását: a memorizálandó részt egy nagyon kis szegletre szorítja, a többit pedig teljes egészében a megfigyelésre, a megértésre és a gyakorlatra bízza.

## 165 másodpercről 28 másodpercre: Négy szakasz

![A négy szakasz időtartama](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Kép: A négy szakasz időtartama. Az első szakasz 3 hét, a második 11 nap, a harmadik két hónap, a negyedik a mai napig tart.*

### Első szakasz: 165 másodperc → 60 másodperc (1–3. hét)

**Adatok**: Május 7-től május 27-ig. Az első héten átlagosan 165 másodperc, a harmadik héten 68 másodperc. Ez a szakasz a teljesen kezdőtől az alapszintig vezet: az ismétlések során fokozatosan megérted, hogy az egyes mozdulatok mit jelentenek valójában, és mely elemek mozognak.

**Hol akadsz el**: Az első blokk (FB) nagyon ügyetlenül megy, minden él-sarok párt sokáig kell keresni. Aztán, amikor megtalálsz egy él-sarok párt, a kezdők hajlamosak megállni, és tovább nézelődni.

![Hol töltik az időt a kezdők](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Kép: Hol töltik az időt a kezdők. A kezük áll, a szemük a kockán jár-kel, a "keresés" ideje többszöröse a "forgatás" idejének.*

**Mit gyakorolj**:

Ebben a szakaszban a legnagyobb ellenség nem a lassú kéz, hanem a lassú szem. Sokkal több időt töltesz "kereséssel", mint "forgatással". Ezért:

-   **Fixáld a megfigyelési pozíciót, ne forgasd a kockát.** Ahogy az előző cikkben említettem, a Roux módszer megfigyelési szöge rögzített. Ebben a szakaszban a "kocka forgatásának mellőzését" izommemóriává kell tenni. Valahányszor meg akarnád forgatni a kockát, állj meg, és kérdezd meg magadtól: ebből a szögből látom-e a keresett elemet?
-   **Lassú gyakorlás.** Ne mérd az időt, de a mozdulatok legyenek folyamatosak, ne legyenek megállások. Minden mozdulat lehet nagyon lassú, de ne állj meg. A lényeg, hogy miközben a kezed az előző mozdulatot végzi, a szemed már a következő mozdulatra figyeljen, ez a lassú gyakorlás lényege. Ez lassításnak tűnik, de valójában a szemedet edzed, hogy lássa az elemek helyzetét és a kívánt célhelyzet közötti kapcsolatot.
-   **Csak az első blokkot gyakorold.** Keverd meg, építsd fel az első blokkot, keverd meg újra, építsd fel újra az első blokkot. Ne menj tovább. Az első blokk a Roux legszabadabb lépése, és a megfigyelést leginkább edző része.

Ne tanulj új algoritmusokat ebben a szakaszban. A szűk keresztmetszeted most nem az algoritmusokban van.

### Második szakasz: 60 másodperc → 40 másodperc (4–5. hét)

**Adatok**: Május 27-től június 7-ig, 11 nap. Ez volt az egész folyamat leggyorsabb csökkenési szakasza. Ebben a szakaszban a legkönnyebb pozitív visszajelzést kapni: minden egyes új ismeret és mozdulatoptimalizálás azonnal meglátszik az időeredményeken, és az a mámor, hogy mindennap rekordot döntesz, kevés dologhoz fogható.

**Hol akadsz el**: A mozdulatok nem folyamatosak. A kocka akadozik.

**Mit gyakorolj**:

Ebben a szakaszban optimalizálnod kell az egyes szakaszok mozdulatait, és a megértés alapján növelned kell minden mozdulat jártasságát.

-   **Második blokk (SB).** A második blokk nehezebb, mint az első, mert a tér feleannyi, és a már elkészült első blokkot nem szabad tönkretenni. A kulcsfontosságú forgatások az R, r (jobb két réteg), M, U. Ebben a szakaszban meg kell tanulnod az r és M használatát az R helyett az elemek mozgatására, így az első blokk soha nem sérül. A mozdulatok optimalizálása időt takarít meg. Például ahelyett, hogy háromszor forgatnál az óramutató járásával megegyezően, egyszer fordíthatsz az óramutató járásával ellentétesen.
-   **Gyakorold az M réteg használatát.** A Roux utolsó lépései mind M és U mozdulatokból állnak, és az M réteg sima forgatása közvetlenül meghatározza a sebességed alsó határát. Használd a gyűrűs- vagy középső ujjadat az M tolására, és kezdd el gyakorolni az M' U M' U típusú ritmusokat.
-   **CMLL formafelismerés.** Az előző cikkben a hármas cserékkel "próbáltuk ki" a négy sarkot. Most el kell kezdeni először megnézni, majd megcsinálni: mielőtt megfordítod a felső réteget, vess egy pillantást a négy sarok sárga orientációjára, és döntsd el, hogy 0, 1, 2 vagy 4 jó sarok van-e, majd közvetlenül végezd el a megfelelő mozdulatot. Nagyon kevés algoritmussal is jelentős hatékonyságnövelést érhetsz el, ami nagyon megéri. Ezen algoritmusok nagy részét nem kell fejből megtanulni, csak csináld és értsd meg őket.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Nézőpont a második blokk építésekor" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Kép balra: Nézőpont a második blokk építésekor. Az első blokk kész, csak R, r, M, U forgatásokkal illeszd be a jobb oldali él-sarok párt, az első blokk soha nem sérül. Kép jobbra: M' U M, a Roux második felében leggyakrabban használt mozdulatsor. A középső réteg feljön, a felső réteg forog, a középső réteg vissza, három lépésben lecserélve a felső és középső réteg egy élpárját.*

Megnézheted az általam összeállított, kezdőknek kifejezetten barátságos, leegyszerűsített [Roux algoritmusgyűjteményt](/hu/projects/rubiks-cube/roux#cmll). A CMLL oldal kétlépcsős: 7 orientációs algoritmus + 2 pozíciós algoritmus, összesen 9. Ez a sebességnövelés szempontjából a leghatékonyabb választás, könnyen megtanulható, és minden begyakorolt csoport körülbelül 1–2 másodperccel gyorsíthatja az idődet. Kis gyakorlással gyorsan belejössz, némelyiket már bemutattam az előző cikkben, és nem kell mindent megjegyezned ahhoz, hogy 30 másodperc alá kerülj.

![Kétlépcsős CMLL első lépés, hét sarokelem orientáció](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Kép: Kétlépcsős CMLL első lépés, hét sarokelem orientáció. Felülnézetben a sárga a felfelé mutató felső szín, a külső kis sávok azt jelzik, hogy a sarok felső színe oldalra mutat. A sárga sarkok száma alapján ismerd fel a formát: 0 H vagy Pi, 1 S vagy AS, 2 U, T vagy L.*

A sárga felső oldal beállítása után használhatod ezt a két algoritmust a sarokelemek oldalainak beállítására.

Ha az egyik oldal már színben megegyezik, például a piros már ugyanazon az oldalon van, forgasd balra, majd választhatod a szomszédos csere algoritmust. Ha egyik oldal sem egyezik meg színben, akkor válaszd az átlós csere algoritmust.

![Kétlépcsős CMLL második lépés, két sarokelem pozíció](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Kép: Kétlépcsős CMLL második lépés, két sarokelem pozíció. A bal oldali képen a bal oldali két sarok pirosa már megegyezik, szomszédos cserét használj; a jobb oldali képen egyetlen oldal sem egyezik meg, átlós cserét használj.*

Sok lassú gyakorlással megértheted az egyes algoritmusokat; ne tekints rájuk algoritmusként, hanem rögzített mozdulatokként. Magad is felfedezheted ezeket a mozdulatokat, de itt felsorolva elkerülheted a felesleges kerülőutakat.

Még egy dolog, ami minden gyakorlatnál azonnal hatásosabb: költs egy kis pénzt egy új kockára. Ha még mindig olyan régi kockád van, ami kattogva forog, és megakad, ha túlfordítod, vegyél egy mágneses, modern 3x3-ast. A legújabb kockák érezhetővé teszik a mérnöki optimalizálás erejét: simán forognak, automatikusan a helyükre állnak, és szinte sosem akadnak el. Már pusztán a kockacserével is akár 15 másodpercet javulhat az átlagidőd. Költséghatékony választás a [MoYu RS3 M V5 (Maglev + Ball-Core verzió)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), húsz dollár körüli áron, ami sub-20-ig is elegendő.

### Harmadik szakasz: 40 másodperc → 30 másodperc (5. hét – 13. hét, két hónap)

**Adatok**: Június 7-től augusztus 4-ig. Az Ao100 39,8 másodpercről 29,9 másodpercre csiszolása 58 napot vett igénybe. Ebben a szakaszban alkalmanként előfordulhatnak 30 másodperc alatti idők, de csak nagyon jó szerencsével. Ráadásul az átlagos kirakási idő csökkenésével 1 másodperc javulás nehézsége exponenciálisan növekedni fog. (Az Ao100 a legutóbbi 100 kirakás vágott átlaga, a legjobb és legrosszabb 5% figyelmen kívül hagyásával.)

![Napi átlagidők](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Kép: Napi átlagidők. Június közepétől a görbe szinte ellaposodott, két hónapon át 30-40 másodperc között ingadozott.*

**Hol akadsz el**: A felső réteg hat élének visszaállítása nagyon lassú, nem érted a logikát, minden alkalommal ismételt próbálkozásokra támaszkodsz, ami sok időt pazarol. Az első és második blokk még mindig nem elég rutinos.

**Mit gyakorolj**:

-   **EO felismerés.** Az előző cikkben beszéltünk róla, hogy a rossz orientációjú élek csak néhány esetben fordulhatnak elő: 0, nem 0 és nem 4, 4 (felül és alul 2-2), 4 (mind a felső rétegben), 4 (felül 3, alul 1). Ennek a szakasznak a célja: a blokkok felépítésének pillanatában, számlálás nélkül, egy pillantással megmondani, melyik esetről van szó. A gyakorlás módja az, hogy megkevered, csak a CMLL végéig csinálod, majd megállsz, kimondod a rossz orientációjú élek számát, majd folytatod.
-   Sokan nem értik az itteni mozdulatokat. Az EO szakasz végső célja, hogy kialakítsuk a 3 fent, 1 lent elrendezésű nyíl formát, mert a teljes formáció csak egy lépésre van a nyíl formától, így fordított gondolkodásmóddal ez az utolsó lépés a kirakás előtt. Tehát, függetlenül attól, hogy hány rossz él van, a végső cél egy nyíl kialakítása. Ha 4 rossz él van fent, akkor cserélj fel egy felül-lent élpárt, hogy egy rossz él lekerüljön, és így alakítsd ki a nyilat. Ha 2 rossz él van fent és 2 lent, akkor cserélj fel egy felül-lent élpárt, hogy egy rossz él felkerüljön, és így alakítsd ki a nyilat. Ha 1 fent és 1 lent, vagy 2 fent, akkor egy M' U M mozdulattal alakítsd át az előző esetek egyikévé, majd alakítsd ki a nyilat. Sok megfigyeléssel és gondolkodással magad is felfedezheted az 1 / 1 eset legjobb lépéseit.

    ![Nyíl forma](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

    *Kép: Nyíl forma. A felső réteg három rossz orientációjú éle (cián kiemelve) nyilat alkotva mutat az alsó réteg egy rossz orientációjú élére. Ebben az állapotban egy M' U M mozdulattal mind a négy egyszerre kerül a helyére. [Nyisd meg ezt az állapotot a 3D kockában](/hu/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), hogy lépésről lépésre megnézhesd.*

-   **Gyakorolj sokat look-ahead-et.** Ez a legfontosabb dolog ahhoz, hogy 40 másodpercről 30 másodpercre juss, és egyben a legkevésbé intuitív is: forgasd lassabban, nézz előrébb. Amikor az első blokkot építed, ne a beillesztendő elemre nézz, hanem arra, hogy hol van a következő. Eleinte nagyon furcsa lesz, az eredményeid romlani fognak, de egy hét kitartás után hirtelen javulni fognak.
-   **CMLL habozás nélkül.** Ha egy mozdulatnál minden alkalommal gondolkodnod kell, mielőtt meg mered csinálni, akkor még nem a tiéd. Gyakorolj minden mozdulatot külön-külön 50-szer, amíg a kezed magától el nem indul, amint meglátod a formát.

![EO hat formája](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Kép: EO hat formája. A bal felső sarokban a címke a rossz orientációjú élek számát (felül / alul) jelöli, a sárga a jó orientációjú él, a ciánkék keret a rossz orientációjú él. Csak a nyíl formához kell algoritmus, a másik öt esetben először nyíl formává alakítjuk.*

A bal és jobb élélek visszaállításához, ahol a sárga a felső, a fehér az alsó oldal, és a bal blokk piros színű, a sárga-piros élélet + a sárga-narancs élélet (kiemelt területek) kell tovább elhelyezni. A fő cél az, hogy a sárga-piros élélet, majd a sárga-narancs élélet is valamilyen módon az alsó oldalra kerüljön élcserével. Ezután, ha a két él az alsó oldalon egymással szemben van, a felső oldalt a megfelelő pozícióba forgatva M2 U vagy M2 U' mozdulattal visszaállíthatók az U-réteg bal és jobb élélei.

A jobb megértés érdekében az EO mind a hat formáját összegyűjtöttem a [Roux módszer algoritmusgyűjtemény LSE oldalán](/hu/projects/rubiks-cube/roux#lse). Minden képre kattintva a "részletek megtekintése" gombbal megnyithatod a megfelelő állapotot a 3D kockában, ahol a rossz orientációjú élek automatikusan kiemelésre kerülnek. Ugyanezen az oldalon megtalálhatók a későbbi UL/UR elhelyezések és az utolsó négy él összes esete is.

Ebben a szakaszban a gyakorlás mennyiségének csökkenése nem rossz dolog. A plató időszakot nem lehet puszta mennyiségi gyakorlással áttörni, hanem egy konkrét rossz szokás megváltoztatásával. Az én tapasztalatom szerint egyszerre csak egyet változtass meg.

### Negyedik szakasz: 30 másodperc → 28 másodperc (13. hét után)

**Adatok**: Augusztus 4. után. Szeptemberben az összesen feljegyzett gyakorlások száma 122 volt, bár valójában sok gyakorlás nem került rögzítésre. A kockát már asztali játékként kezelem, bármikor felkapom és játszom vele, ha jó kedvem van, ha ideges vagyok, ha szorongok, ha munka közben van egy kis szünetem, ha unatkozom. A kockázás beépült az életembe. Az Ao100 is fokozatosan csökkent 29,9-ről 28,2-re.

**Hol akadsz el**: Nincs egyértelmű szűk keresztmetszet, egyszerűen nem vagyok elég rutinos.

**Mit gyakorolj**:

Ha az átlagsebességed még mindig 30 másodperc felett van, akkor az egyetlen dolog, amit tenned kell, az a további intenzív gyakorlás, nem pedig új algoritmusok memorizálása.

Folyamatosan gyakorold a look-ahead-et lassú tekeréssel, és egyre gyorsabb leszel.

Bármikor vedd elő a kockát és játssz vele, tartsd ott, ahol könnyen elérheted, például az íróasztalodon, hogy munka közben is elővedd. Gyakran vegyél fel videót a kirakásaidról, nézd meg, melyik szakaszban telik el a legtöbb idő, majd végezz célzott optimalizálást. Ez a tudatos gyakorlás, a fejlődésed sebessége nem a szokásos gyakorlások teljes számától függ, hanem a tudatos gyakorlások számától.

Ekkor fogod észrevenni, hogy miután átvészelted a 30-35 másodperces plató időszakot, a sebességed ismét egy szintet esett.

Ebben a szakaszban gratulálok, a kezdők szemében már nagyon profi játékos vagy!

## A továbblépés útja

Először is, ne aggódj a Roux módszer felső határa miatt. A világ élvonalában is vannak olyan versenyzők, akik Roux-val érnek el csúcseredményeket; magának a módszernek nincs korlátja.

Ráadásul szinte minden világszínvonalú egykezes versenyző Roux módszert használ, mert rendkívül jól fekszik az egykezes kirakáshoz is.

**A Roux módszerrel elért leggyorsabb hivatalos (WCA) eredmények:**

- Egyetlen kirakás 4,11 másodperc, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Fülöp-szigetek), 2023-as Valenzuela Cubing Open, hivatalosan elismert leggyorsabb egyéni Roux idő ([rekonstrukciós videó](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Átlag 5,98 másodperc, szintén ő, 2019-ben, akkor ázsiai rekord, és a történelem harmadik hivatalos sub-6 átlaga ([WCA adatok](https://www.worldcubeassociation.org/persons/2017VILL41))
- Ő az [egykezes világrekorder](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record) is: átlag 8,09, egyéni 6,05 (2024); az egykezes közösség általánosan a Roux-t tartja a legjobb megoldásnak

Ám a 15 másodperc alá kerüléshez a mostani kétlépcsős CMLL-ről át kell állni az egylépéses megoldásra, ami több bonyolult algoritmus megtanulását igényli.

Én azonban továbbra is a szabad felfedezést részesítem előnyben: a kísérletezésen keresztül teljesen megérteni az algoritmusokat, sőt saját, kézre álló változatokat kitalálni sokkal szórakoztatóbb, mint a magolás.

A Rubik-kocka eredetileg is egy logikai játék, nem pedig memóriateszt. Csak a működési elvek megértésével érheted el, hogy minden egyes lépésnél pontosan tudd, mit miért csinálsz, hogy három hónap kihagyás után se felejtsd el a lépéseket, és bármilyen ismeretlen kockát a kezedbe véve képes legyél magadtól levezetni a megoldást.

## Összefoglalás

![Kirakva](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

*Kép: Kirakva.*

A kirakástól a 30 másodperc alá jutásig nem egy algoritmusok memorizálásáról szóló folyamat, hanem a kéz, a szem és az agy koordinált együttműködésének edzéséről.

Négy szakasz, négy dolog: először tanuld meg forgatás nélkül nézni a kockát, aztán tanuld meg úgy felépíteni a második blokkot, hogy ne rombold le az elsőt, majd tanuld meg a következő lépést figyelni, miközben az aktuálisat csinálod, végül pedig hagyd, hogy a kezed utolérje a szemedet.

Az algoritmusok nem a sebesség forrásai. A megfigyelés az.

Tanuld meg, hogyan építsd fel a pozitív visszajelzést minden egyes lépésben, még a rutin gyakorlás sem lesz unalmas, különösen, ha újra rekordot döntenél. Különösen a kezdő és középhaladó szakaszban minden nap megtapasztalhatod a rekorddöntés örömét.

Az összes algoritmust és esetet rendszereztem a [Roux módszer algoritmusgyűjteményben](/hu/projects/rubiks-cube/roux). Ha elakadsz, bármikor visszatérhetsz ide és megnézheted.

A Rubik-kocka világa végtelenül szórakoztató, jó szórakozást kívánok!

## 1. melléklet: Gyakorlási lista szakaszok szerint

**Első szakasz (> 60 másodperc)**

-   Fixált megfigyelési pozíció, a teljes kirakás során ne forgasd a kockát
-   Megállás nélkül találd meg a következő kívánt színt
-   Lassú gyakorlás, minden lépésnél mondd ki a szándékot
-   Csak az első blokkot gyakorold, ismételd meg 50-szer

**Második szakasz (60 → 40 másodperc)**

-   A második blokkot (SB) csak R, r, M, U mozdulatokkal építsd, ne érintsd az első blokkot (FB)
-   Kétlépcsős CMLL gyakorlás
-   M' U M' U ritmus gyakorlása, napi 5 perc

**Harmadik szakasz (40 → 30 másodperc)**

-   CMLL végéig csináld, majd állj meg, egy pillantással mondd meg a rossz orientációjú élek számát
-   Lassú gyakorlás + look-ahead: a szemed mindig a következő elemen legyen
-   Naponta legalább 20 minőségi kirakás

**Negyedik szakasz (< 30 másodperc)**

-   Videófelvétel készítése a megakadások felkutatására
-   Ujjtechnikák: R U R' U' single finger trick, M-réteg gyűrűsujjal
-   Naponta 20 minőségi kirakás, ne halmozd a mennyiséget

## 2. melléklet: Eszközök

-   **csTimer**: [cstimer.net](https://cstimer.net/). Kapcsold be az Ao5 / Ao12 / Ao100 statisztikát, az Ao100 mutatja a valós szintedet, az egyéni idők a szerencsét.
-   **3D Kocka**: [philoli.com/zh/projects/rubiks-cube](/hu/projects/rubiks-cube/). Az összes algoritmus beírható ide, és megnézheted az animációt.
-   **Roux módszer kezdőbarát algoritmusgyűjtemény**: [philoli.com/zh/projects/rubiks-cube/roux](/hu/projects/rubiks-cube/roux).
-   **csTimer edzés elemző**: [philoli.com/zh/projects/rubiks-cube/analyzer](/hu/projects/rubiks-cube/analyzer). Húzd be a csTimerből exportált fájlt, és máris láthatod a saját eredményeid alakulását, az Ao5/Ao12/Ao100 görbéket, a PB-k javulását, a mérföldkő táblázatot és a Power Law gyakorlási görbét.

*Ez a cikk Amazon affiliate linkeket tartalmaz: a linkeken keresztül történő vásárlás esetén kis jutalékot kapok, de az árad nem változik.*

## További olvasnivaló

-   [Hogyan rakd ki a Rubik-kockát algoritmusok memorizálása nélkül: Akár egy kisiskolás is megérti](/hu/blog/solve-rubiks-cube-without-formulas)
