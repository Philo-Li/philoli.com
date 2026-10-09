---
layout: blog
title: "Rubik-kocka 30 mp alatt formulák nélkül: gyerekeknek is érthető"
date: 2026-10-09 12:00:00
tags:
  - Rubik-kocka
  - útmutató
  - Roux-módszer
  - gyorsforgatás
  - tudatos gyakorlás
categories: 日常折腾
description: "89 nap alatt jutottam el az első kirakástól az Ao100 30 másodperc alá, egyetlen CFOP formulát sem memorizálva. 4441 mért kirakás adatait felhasználva bontom négy szakaszra a folyamatot: mi okozott nehézséget az egyes szakaszokban, mit gyakoroltam, és miért nem kell formulákat memorizálni a Roux-módszerhez."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="从 165 秒到 28 秒的四个阶段" />
</figure>

*Kép: A négy szakasz 165 másodpercről 28 másodpercre. A második szakaszban volt a leggyorsabb a fejlődés, a harmadik volt a leghosszabb stagnálási időszak.*

Előző cikkemben, a [„Hogyan rakd ki a Rubik-kockát formulák nélkül: gyerekeknek is érthető?”](/zh/blog/solve-rubiks-cube-without-formulas/) című írásban megtanulhattad, hogyan rakhatod ki a kockát kommutátorok logikájával, formulák memorizálása nélkül. Az a cikk sokak lelkes elismerését kiváltotta.

Ha követted az útmutatót, mostanra valószínűleg két-három perc alatt kirakod, bár még kapkodsz egy kicsit. Ekkor felmerül egy új kérdés: hogyan lehetne gyorsabban?

Ha rákeresel a „Rubik-kocka gyorsforgatás” kifejezésre, minden útmutató ugyanazt fogja mondani: ha 30 másodperc alá akarsz kerülni, először is memorizáld a CFOP formuláit. F2L: 41, OLL: 57, PLL: 21, összesen 119 formula. Még ha az F2L-t ösztönből csinálod is, a felső réteg 78 formuláját akkor sem úszod meg. Ha nem jegyzed meg őket, ne is álmodj a sebességről.

Ez a cikk azt szeretné megmutatni, hogy formulák memorizálása nélkül is bekerülhetsz a 30 másodperces határ alá.

<!--more-->

Én 2026. május 7-én raktam ki először a kockát, és augusztus 4-én, 89 nappal később jutottam el az Ao100-zal 30 másodperc alá. Ez idő alatt egyetlen CFOP formulát sem memorizáltam, csupán a szabadidőmben játszottam vele. Ez a 4441 dokumentált kirakásom időmérési adata.

![4441 次复原的成绩曲线](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Kép: 4441 kirakás eredménygörbéje. A szürke vonal az egyes kirakások idejét mutatja, a sötét vonal az Ao100 trendjét, a piros pontok pedig azokat az alkalmakat jelölik, amikor új személyes rekordot állítottam fel. A legjobb Ao100 időm 28,22 másodperc.*

Tudatos, aktív gyakorlással, és a gyakorlás gyakoriságának fenntartásával bárki elérheti a nulláról a sub-30 szintet néhány hónapon belül.

Mit is jelent a 30 másodperc alatti idő? Az [1982-es első Rubik-kocka Világbajnokságon](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) a győztes ideje 22,95 másodperc volt, amit a WCA később az első hivatalos világrekordként ismert el; a 10. helyezett 29,11 másodperccel végzett, és ezt az időt maga Jessica Fridrich, a CFOP feltalálója érte el, akiről a következő részben lesz szó. Más szóval, egy mai amatőr, aki néhány hónap alatt éri el a sub-30 szintet, 1982-ben bekerülhetett volna a világ tíz legjobbja közé.

A továbbiakban megosztom veled, hogyan jutottam el idáig lépésről lépésre, és teljes egészében bemutatom neked a gyakorlási módszert.

## Miért memorizálnak formulákat a gyorsforgatók?

Először is tisztázzunk valamit: miért kapcsolódik össze a „gyorsaság” és a „formulák memorizálása” az emberek fejében?

Az 1980-as évek elején Jessica Fridrich cseh származású professzor (aki később a Binghamtoni Egyetemen digitális kriminalisztikát kutatott) rendszerezett egy rétegenkénti megoldási módszert, amit később CFOP-nak (Cross, F2L, OLL, PLL) neveztek el. Ennek a módszernek a lényege, hogy a felső réteg összes lehetséges állapotát számba veszi, és minden egyes állapothoz hozzárendel egy optimális formulát. Felismered az állapotot, végrehajtod a formulát, gondolkodás nélkül.

![Jessica Fridrich 和她办公室里的魔方](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Kép: Jessica Fridrich és a Rubik-kocka az irodájában. 1982-ben 29,11 másodperccel a 10. helyen végzett az első világbajnokságon, a CFOP-t róla nevezték el (Fridrich-módszer).*

Ez a módszer rendkívül gyors. Szinte az összes világrekordot CFOP-val érik el. Ezért minden oktatóanyag ezt tanítja, minden videó erről szól, a „gyorsforgatás megtanulása” egyenlő a „CFOP megtanulásával”, a CFOP megtanulása pedig egyenlő 119 formula memorizálásával.

De jegyezzük meg, a „formulák memorizálása” a CFOP módszer sajátossága, nem pedig magának a „gyorsaságnak” a jellemzője. A CFOP azért követeli meg a memorizálást, mert a teljes enumeráció (összes eset áttekintése) útját választotta. Az enumerációhoz memória szükséges, ez az ára.

Van-e olyan módszer, ami nem ezt az enumerációs utat járja? Van.

## Formulák nélküli megoldás: a Roux-módszer (hidak)

2003-ban Gilles Roux, egy francia úriember, egy teljesen más megközelítést mutatott be. Nem rétegenként építkezik, hanem először két 1×2×3-as „hidat” épít a bal és jobb oldalon, majd a felső réteg négy sarkával foglalkozik, végül pedig csak hat él marad, amit a középső (M) és a felső (U) réteg mozgatásával fejez be.

![Gilles Roux 在比赛中](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Kép: Gilles Roux verseny közben. Egy korai versenyvideóból kivágva, a kép AI-val javítva és nagyítva.*

Az előző cikkben már egyszer kiraktuk a kockát ezzel a kerettel. Nézzük át újra a négy lépését, ezúttal arra fókuszálva, hogy „mit kell megjegyezni az egyes lépéseknél”:

| Lépés | Tartalom | Megjegyzendő formulák |
| --- | --- | --- |
| 1. Bal híd | Egy 1×2×3-as blokk építése | 0, tisztán megfigyelés |
| 2. Jobb híd | Egy másik szimmetrikus blokk építése | 0, tisztán megfigyelés |
| 3. CMLL | A felső réteg négy sarokelemének elrendezése | 9, mindegyik levezethető a hármas cserékből |
| 4. LSE | Az utolsó hat élelem | 0, csak a felső és középső réteg (M és U) forgatásával |

A négy lépésből háromhoz egyáltalán nincs szükség formulákra. Az egyetlen, amihez kell, a CMLL, ahol összesen 42 eset van, de neked nem kell 42 formulát megjegyezned. Az előző cikkben tárgyalt sarokelem hármas csere (R U' L' U R' U' L U), valamint annak tükörképe és néhány variációja lefedi az összes esetet, csak kicsit lassabban.

![Roux 的四步](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Kép: A Roux-módszer négy lépése, minden lépésnél csak az addig elhelyezett blokkokat mutatva: Bal híd → Jobb híd → CMLL (felső négy sarok) → LSE (utolsó hat él). A 3D Rubik-kocka oldalam „megoldási” paneljéről kivágva.*

Ezért nem kell formulákat memorizálni a Roux-módszerhez: a memorizálandó részt egy nagyon kis sarokba szorítja, a többit pedig a megfigyelésre, megértésre és a gyakorlásra bízza.

## 165 másodpercről 28 másodpercre: a négy szakasz

Ez az út, amit én jártam be. Minden szakaszt adatokkal jelöltem meg, majd elmagyaráztam, hol akadtam el és mit gyakoroltam. A te elakadásaid eltérhetnek az enyémektől, de a sorrend valószínűleg hasonló lesz.

![四个阶段的时间跨度](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Kép: A négy szakasz időbeli kiterjedése. Az első szakasz 3 hét, a második 11 nap, a harmadik két hónap, a negyedik a mai napig tart.*

### 1. szakasz: 165 másodpercről 60 másodpercre (1–3. hét)

**Adatok**: Május 7-től május 27-ig. Az első héten átlagosan 165 másodperc, a harmadik héten 68 másodperc.

**Hol akadtam el**: A bal híd rendkívül lassan ment, minden egyes színblokkot sokáig kellett keresnem. Ráadásul, miután megtaláltam egy blokkot, a kezdők hajlamosak megállni és tovább figyelni.

![新手的时间都花在哪](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Kép: Mire fordítják az idejüket a kezdők. A kéz megáll, a szem pedig ide-oda vándorol a kockán, a „keresés” ideje többszöröse a „forgatás” idejének.*

**Mit gyakoroltam**:

Ebben a szakaszban a legnagyobb ellenség nem a lassú kéz, hanem a lassú szem. Sokkal több időt töltesz „kereséssel”, mint „forgatással”. Ezért:

- Rögzítsd a megfigyelési pozíciót, ne forgasd a kockát. Ahogy az előző cikkben is említettem, a Roux-módszerben a megfigyelési szög fix. Ebben a szakaszban a „kocka forgatása nélküli” megfigyelést izommemóriává kell fejlesztened. Minden alkalommal, amikor meg akarnád fordítani a kockát, állj meg, és kérdezd meg magadtól: láthatom-e a keresett blokkot ebből a szögből?
- Lassú forgatás. Ne mérd az időt, de a mozdulatok legyenek folyamatosak, ne legyenek megállások. Minden mozdulat lehet nagyon lassú, de ne állj meg. A lényeg, hogy amíg a kezed az előző mozdulatot végzi, a szemed már a következő mozdulatra figyeljen – ez a lassú forgatás magja. Ez lassulásnak tűnhet, de valójában arra edzi a szemed, hogy meglássa a blokk aktuális helyzete és a célhelyzete közötti összefüggést.
- Csak az első hidat gyakorold. Keverd meg, építsd fel a bal hidat, majd keverd meg újra, és építsd fel megint a bal hidat. Ne menj tovább. Az első híd a Roux-módszer legszabadabb lépése, és ez fejleszti leginkább a megfigyelőképességet.

Ne tanulj új formulákat ebben a szakaszban. A jelenlegi szűk keresztmetszeted nem a formulákban van.

### 2. szakasz: 60 másodpercről 40 másodpercre (4–5. hét)

**Adatok**: Május 27-től június 7-ig, 11 nap. Ez volt a leggyorsabb fejlődési szakasz az egész folyamatban, és ekkor gyakoroltam a legtöbbet is, június első hetében 723 alkalommal.

**Hol akadtam el**: Akadozó mozdulatok. A kocka beragadt.

**Mit gyakoroltam**:

Ebben a szakaszban minden egyes lépés mozdulatait optimalizálnod kell, és a megértés alapján növelned kell az egyes mozdulatok rutinját.

- Második híd. A második híd nehezebb, mint az első, mert a rendelkezésre álló hely a felére csökken, és nem szabad tönkretenni az elkészült bal hidat. A kulcsfontosságú forgatások az R, r (jobb két réteg), M, U. Ebben a szakaszban meg kell tanulnod az r és M forgatásokat használni az R helyett a blokkok mozgatásához, így a bal híd soha nem sérül meg. A mozdulatok optimalizálása időt takarít meg. Például, ha valamit háromszor kellene az óramutató járásával megegyezően forgatni, az egyenlő egyszer az óramutató járásával ellentétesen forgatni.
- Az M-réteg folyékony használata. A Roux-módszer utolsó lépései mind M és U mozdulatokat igényelnek, az M-réteg folyékonysága közvetlenül meghatározza a sebességed alsó határát. Gyakorold az M-réteg mozgatását gyűrűsujjal vagy középső ujjal, kezdd az M' U M' U ritmusokkal.
- CMLL alakfelismerés. Az előző cikkben hármas cserékkel „próbáltuk ki” a négy sarkot. Mostantól előbb nézd meg, aztán csináld: mielőtt megfordítanád a felső réteget, vess egy pillantást a négy sarok sárga oldalára, és döntsd el, hogy 0, 1, 2 vagy 4 „jó” sarok van-e, majd hajtsd végre közvetlenül a megfelelő mozdulatot. Rendkívül kevés formula segítségével is jelentős hatékonyságnövekedést érhetsz el, ami nagyon kifizetődő. A formulák nagy részét nem kell bemagolni, inkább értsd meg őket, miközben csinálod.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="搭右桥时的视角" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Kép balra: Perspektíva a jobb híd építésekor. A bal híd elkészült, csak R, r, M, U négyféle forgatással illeszd be a jobb oldali sarok-él párt, a bal híd soha nem érintkezik. Kép jobbra: M' U M, a Roux-módszer második felében leggyakrabban használt mozdulatsor. A középső réteg feljön, a felső réteg forog egyet, a középső réteg visszamegy – három lépésben kicserélve egy élpárt a felső és középső rétegben.*

Megnézheted az általam összeállított [Roux-módszer formulagyűjteményt](/zh/projects/rubiks-cube/roux#cmll). A CMLL oldal kétszakaszos: 7 orientációs formula + 2 permutációs formula, összesen 9 darab. Ez egy rendkívül költséghatékony választás a sebesség növelésére, könnyen megtanulható, és minden begyakorolt készlet körülbelül 1-2 másodperccel gyorsíthat. Egy kis gyakorlással gyorsan belejössz, némelyiket már az előző cikkben is bemutattam, és nem kell mindent bemagolnod ahhoz, hogy 30 másodperc alá kerülj.

![两段式 CMLL 第一步，七种角块朝向](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Kép: Kétszakaszos CMLL első lépés, hétféle sarokelem-orientáció. A felülnézetben a sárga a felfelé néző felső szín, a külső kis csík pedig azt jelzi, hogy a sarok felső színe oldalra néz. Az alakfelismerés a sárga sarkok száma alapján történik: 0 H vagy Pi, 1 S vagy AS, 2 U, T vagy L.*

Miután a sárga felső részt igazítottad, ezt a két formulát használhatod a sarokelemek oldalsó részeinek igazítására.

Ha egy oldal már színben megegyezik, például a piros már ugyanazon az oldalon van, forgasd azt balra, majd válaszd a szomszédos csere formulát. Ha egyetlen oldal sem egyezik színben, akkor válaszd az átlós csere formulát.

![两段式 CMLL 第二步，两种角块位置](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Kép: Kétszakaszos CMLL második lépés, kétféle sarokelem-pozíció. A bal oldali képen a két bal sarok piros színe már megegyezik, itt szomszédos cserét használunk; a jobb oldali képen egyetlen oldal sem egyezik, itt átlós cserét használunk.*

Rengeteg lassú forgatással megértheted az egyes formula-csoportokat. Ne tekints rájuk formulaként, hanem bizonyos rögzített mozdulatokként, amiket lassan felfedezve te magad is ki tudnál találni, de itt felsorolva elkerülheted a felesleges kerülőutakat.

Van még valami, ami minden gyakorlásnál látványosabb eredményt hoz: költs egy kis pénzt egy új Rubik-kockára. Ha még mindig az a régi, kattogó, beragadó típus van a kezedben, vegyél egy modern, mágneses 3x3-ast. A legújabb kockákban megtapasztalhatod a mérnöki optimalizáció erejét: sima forgatás, automatikus igazítás, és szinte soha nem akadnak el. Már pusztán a kockacsere is akár 15 másodperccel is gyorsíthatja az átlagidődet. A legjobb ár-érték arányú választás a [MoYu RS3 M V5 (Maglev + Ball-Core változat)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), körülbelül húsz dollárért, ami egészen a sub-20-ig elegendő lesz.

### 3. szakasz: 40 másodpercről 30 másodpercre (5–13. hét, két hónap)

**Adatok**: Június 7-től augusztus 4-ig. Az Ao100-at 39,8 másodpercről 29,9 másodpercre csiszoltam, ami 58 napomba telt. Ebben a szakaszban előfordultak néha 30 másodperc alatti idők, de csak rendkívül nagy szerencsével. Ráadásul, ahogy az átlagos kirakási idő csökken, 1 másodperc fejlődés nehézsége exponenciálisan növekszik.

![每日平均成绩](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Kép: Napi átlagos eredmények. Június közepétől a görbe szinte ellaposodott, két hónapon keresztül 30–40 másodperc között „csiszoltam”.*

Ez a plató fázis. Mindenki találkozik vele, én két hónapot töltöttem itt.

**Hol akadtam el**: A felső réteg hat élének elrendezése nagyon lassan ment, nem értettem a logikát, minden alkalommal ismételt próbálkozásokra hagyatkoztam, ami rengeteg időt pazarolt. A bal és jobb híd még mindig nem volt eléggé begyakorolva.

**Mit gyakoroltam**:

- EO felismerés. Az előző cikkben említettem, hogy csak néhány rossz él eset létezik: 0, nem 0 és nem 4, 4 (2 fent, 2 lent), 4 (mind a felső rétegen), 4 (3 fent, 1 lent). Ebben a szakaszban a cél: abban a pillanatban, ahogy a híd elkészül, számolás nélkül, egy pillantással megmondani, melyik esetről van szó. A gyakorlás módja, hogy megkeverés után csak a CMLL végéig jutsz, majd megállsz, kimondod a rossz élek számát, és csak ezután folytatod.
- Sokan nem értik az itteni mozdulatokat. Az EO szakasz végső célja, hogy kialakítsuk a 3 fent 1 lent nyíl alakzatot, mert a teljes alakzat egyetlen keverés után is nyíl alakzatot eredményez. Tehát fordított gondolkodással, ez az utolsó lépés a kirakás előtt. Így tehát, függetlenül attól, hány rossz él van, a végső cél mindig egy nyíl alakzat kialakítása. Ha 4 rossz él van felül, akkor egy élpár fel-le cseréjével egy rossz élet leviszünk, és nyíl alakzatot hozunk létre. Ha 2 felül és 2 alul van, akkor egy élpár fel-le cseréjével egy rossz élet felhozunk, és nyíl alakzatot hozunk létre. Ha 1 felül és 1 alul, vagy 2 felül van, akkor M' U M segítségével először az előző esetekké alakítjuk, majd kialakítjuk a nyíl alakzatot. Sok megfigyeléssel és gondolkodással magadtól is felfedezheted az 1/1 eset legjobb lépéseit.
- Gyakorold sokat az előrelátást (Look-ahead). Ez a legfontosabb dolog a 40 másodpercről 30 másodpercre való eljutásban, és egyben a leginkább ellenintuitive is: forgasd lassabban, láss messzebbre. A bal híd építésekor ne a beillesztendő blokkot nézd, hanem azt, hol van a következő. Eleinte nagyon furcsa lesz, és az eredmények rosszabbodni fognak, de egy hét kitartás után hirtelen javulni fognak.
- CMLL habozás nélkül. Ha egy mozdulatnál minden alkalommal gondolkodnod kell, mielőtt meg mered tenni, akkor az még nem a tiéd. Gyakorolj minden mozdulatot külön-külön 50-szer, amíg a kezed magától mozdul a forma láttán.

![箭头形态](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Kép: Nyíl alakzat. A felső réteg három rossz éle (cián kiemelve) nyíl alakzatban helyezkedik el, az alsó réteg rossz élére mutatva. Ekkor egy M' U M mozdulat mind a négyet egyszerre a helyére rakja. [Nyisd meg ezt az állapotot a 3D Rubik-kockában](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) lépésről lépésre.*

![EO 的六种形态](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Kép: Az EO hatféle alakzata. A bal felső sarokban lévő címke a rossz élek számát mutatja (fent / lent), a sárga a „jó” éleket, a cián keret a „rossz” éleket. Csak a nyíl alakzathoz kell formula, a másik öt esetben először nyíl alakzattá kell alakítani.*

A bal és jobb élek elrendezéséhez vegyük példának, hogy a sárga van felül, a fehér alul, a bal híd pedig piros. Ekkor a sárga-piros élblokk + sárga-narancs élblokk (kiemelt részek) elrendezése szükséges. A fő gondolat az, hogy a sárga-piros élblokkot valahogyan fel-le élcserével az alsó rétegbe juttatjuk, a sárga-narancs élblokkot is az alsó rétegbe cseréljük. A két élblokk egymással szemben legyen az alsó rétegben, majd a felső réteget a megfelelő pozícióba forgatjuk, és egy M2 U vagy M2 U' mozdulattal helyreállíthatók az U-réteg bal és jobb élei.

A jobb megértés érdekében az EO hatféle alakzatát mind összegyűjtöttem a [Roux-módszer formulagyűjteményének LSE oldalán](/zh/projects/rubiks-cube/roux#lse). Minden képre kattintva a „részletek megtekintése” opcióval megnyitható az adott állapot a 3D Rubik-kockában, ahol a rossz élek automatikusan kiemelve jelennek meg. Ugyanezen az oldalon megtalálhatók a későbbi UL/UR elrendezések és az utolsó négy él összes esete is.

Ebben a szakaszban a gyakorlás mennyiségének csökkenése nem rossz dolog. A plató fázison nem lehet pusztán mennyiségi gyakorlással átjutni, hanem egy konkrét rossz szokás megváltoztatásával. Az én tapasztalatom szerint egyszerre csak egyet érdemes megváltoztatni.

### 4. szakasz: 30 másodpercről 28 másodpercre (13. hét után)

**Adatok**: Augusztus 4. után. Szeptember egész hónapjában 122 rögzített gyakorlás volt, de valójában sok gyakorlás nem került rögzítésre. A Rubik-kocka már asztali játékká vált számomra, amit bármikor felkapok: ha jó a kedvem, ha feszült vagy szorongó vagyok, ha munka közben van egy kis szünetem, vagy ha unatkozom. A kockázás beépült a mindennapjaimba. Az Ao100 is fokozatosan csökkent 29,9-ről 28,2-re.

**Hol akadtam el**: Nincs egyértelmű szűk keresztmetszet, egyszerűen nem voltam elég ügyes.

**Mit gyakoroltam**:

Ha az átlagsebességed még mindig 30 másodperc felett van, akkor az egyetlen dolog, amit tenned kell, hogy továbbra is sokat gyakorolsz, ahelyett, hogy új formulákat memorizálnál.

Folyamatosan gyakorold az előrelátást lassú forgatással, és egyre gyorsabb leszel.

Bármikor, ha van egy kis időd, vedd elő a Rubik-kockát és játssz vele. Tartsd a kockát olyan helyen, ahol könnyen elérheted, például az íróasztalodon, hogy munka közben is elővedd és játssz vele. Rendszeresen rögzítsd a kirakásaidról videót, nézd meg, melyik szakaszban töltesz a legtöbb időt, majd végezz célzott optimalizálást – ez a tudatos gyakorlás. A fejlődésed sebessége nem a szokásos gyakorlások számától függ, hanem a tudatos gyakorlások számától.

Ekkor fogod észrevenni, hogy miután túljutottál a 30-35 másodperces szűk keresztmetszeten, a sebességed egy újabb szinttel javul.

Ha eljutottál ebbe a szakaszba, gratulálok! Kezdőként már rendkívül ügyes játékosnak számítasz!

## A formulák memorizálásának hiányának ára

Itt legyünk őszinték. A formulák memorizálásának hiánya nem ingyenes.

A CMLL szakasz lassabb. 42 eset 9 formulával való lefedése azt jelenti, hogy bizonyos esetekben kétszer kell csinálni a mozdulatot. Azok, akik a teljes CMLL-t tudják, két-három másodperccel gyorsabbak nálam ezen a lépésen.

Az M-réteg technikája magasabb küszöböt állít. A Roux-módszer második fele teljesen az M-rétegre épül, az M-réteget nehezebb forgatni, mint az R-t vagy az U-t, könnyebben elakad, és a kockával szemben is magasabb követelményeket támaszt.

Ne aggódj a felső határ miatt. A legjobb versenyzők között is vannak, akik Roux-módszerrel kerültek a világ élvonalába, maga a módszer nem korlátozza a fejlődést. De ha 15 másodperc alá akarsz kerülni, valószínűleg ki kell egészítened a 42 CMLL formulát. Azonban az már egy másik szakasz. A 30 másodperc alá jutáshoz nincs rá szükség.

Ráadásul szinte minden világszínvonalú egykezes kirakó Roux-módszert használ, mert ez valóban nagyon alkalmas az egykezes kezelésre is.

**A Roux-módszerrel elért leggyorsabb eredmények hivatalos (WCA) versenyeken:**

- Egyedi 4,11 másodperc, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Fülöp-szigetek), 2023-as Valenzuela Cubing Open, elismerten a Roux-módszerrel elért leggyorsabb hivatalos egyedi idő ([rekonstrukciós videó](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Átlag 5,98 másodperc, szintén ő, 2019-ben, akkor ázsiai rekord volt, és a történelem harmadik hivatalos sub-6 átlagideje ([WCA adatok](https://www.worldcubeassociation.org/persons/2017VILL41))
- Ő a [világrekorder egykezes kategóriában is](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): átlag 8,09, egyedi 6,05 (2024). Az egykezes körökben általánosan elfogadott, hogy a Roux a legoptimálisabb megoldási módszer.

Szerintem ez egy nagyon jó alku. Két-három másodperc CMLL időt cserélsz arra, hogy: minden lépésnél tudod, mit csinálsz, három hónap után is emlékszel rá, ha nem nyúlsz a kockához, és bármilyen, még nem látott kockához ki tudod találni a megoldást.

## Összefoglalás

![复原完成](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

A kirakástól a 30 másodperc alá jutásig nem a formulák memorizálásáról szól a folyamat, hanem a kéz, a szem és az agy koordinált együttműködésének edzéséről.

Négy szakasz, négy dolog: először tanuld meg forgatás nélkül nézni a kockát, aztán tanuld meg úgy felépíteni a jobb hidat, hogy ne tedd tönkre a balt, majd tanuld meg az aktuális lépés közben a következőre figyelni, végül pedig hagyd, hogy a kezed kövesse a szemedet.

A formulák nem a sebesség forrásai. A megfigyelés az.

Tanuld meg pozitív visszajelzéseket építeni az egyes szakaszok fejlődésével, még a rutin gyakorlása sem kell, hogy unalmas legyen, különösen akkor, ha újra rekordot döntesz. Különösen a kezdő és középhaladó szakaszban minden nap megtapasztalhatod a rekorddöntés örömét.

A cikkben említett összes formulát és esetet összegyűjtöttem a [Roux-módszer formulagyűjteményében](/zh/projects/rubiks-cube/roux). Ha elakadsz, térj vissza ide és nézz utána.

A Rubik-kocka világa végtelenül szórakoztató, jó szórakozást kívánok!

## 1. melléklet: Gyakorlási lista szakaszok szerint

**1. szakasz (> 60 másodperc)**

- Rögzített megfigyelési pozíció, a teljes kirakás során ne forgasd a kockát
- Megállás nélkül találd meg a következő kívánt színt
- Lassú forgatás, mondd ki az egyes lépések célját
- Csak a bal hidat gyakorold, ismételd 50-szer

**2. szakasz (60 → 40 másodperc)**

- A jobb hídhoz csak R, r, M, U mozdulatokat használj, ne érintsd a bal hidat
- Kétszakaszos CMLL gyakorlatok
- M' U M' U ritmusgyakorlat, naponta 5 perc

**3. szakasz (40 → 30 másodperc)**

- Amikor a CMLL elkészült, állj meg, és egy pillantással mondd meg a rossz élek számát
- Lassú forgatás + előrelátás: a szemed mindig a következő blokkot nézze
- Naponta legalább 20 minőségi kirakás

**4. szakasz (< 30 másodperc)**

- Készíts videókat a megakadások megtalálásához
- Technikák: R U R' U' egyujjas technika, M-réteg gyűrűsujjal
- Naponta 20 minőségi kirakás, ne csak a mennyiséget hajszold

## 2. melléklet: Eszközök

- **csTimer**: [cstimer.net](https://cstimer.net/). Nyisd meg az Ao5 / Ao12 / Ao100 statisztikákat, az Ao100 mutatja a valódi szintedet, az egyedi eredmények szerencse dolga.
- **3D Rubik-kocka**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). A cikkben szereplő összes formula beírható ide, és megnézhető az animáció.
- **Roux-módszer kezdőbarát formulagyűjtemény**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). A bal és jobb hidak gyakori beillesztési mintái, a kétszakaszos CMLL 9 formulája, az LSE összes esete (EO, UL/UR, utolsó négy él). Minden lap megnyitható a 3D Rubik-kockában, automatikusan elrejti a nem releváns blokkokat, és kiemeli a mozgatandó éleket.
- **csTimer edzés elemző**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Húzd be a csTimer exportált fájlját, és megnézheted az eredményeid alakulását, az Ao5/Ao12/Ao100 görbéket, a PB (személyes legjobb) előrehaladását, a mérföldkő táblázatot (mikor érted el először a sub-60, sub-40, sub-30 időt) és a Power Law gyakorlási görbét. A cikkben szereplő összes kép innen származik. Az adatok csak a böngésződben kerülnek feldolgozásra, nem töltődnek fel. Ha nincs exportált fájlod, betöltheted az én 4441 adatomat, hogy lásd a hatást.

*Ez a cikk Amazon affiliate linkeket tartalmaz: ha a linken keresztül vásárolsz, kis jutalékot kapok, miközben az ár számodra változatlan marad.*

## További olvasnivaló

- [Hogyan rakd ki a Rubik-kockát formulák nélkül: gyerekeknek is érthető](/zh/blog/solve-rubiks-cube-without-formulas)
