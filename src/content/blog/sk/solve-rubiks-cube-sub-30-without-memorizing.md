---
layout: blog
title: "Ako sa dostať pod 30 sekúnd pri skladaní Rubikovej kocky bez učenia algoritmov: Rozumie tomu aj školák"
date: 2026-10-09 12:00:00
tags:
  - Rubikova kocka
  - tutoriál
  - Roux metóda
  - speedcubing
  - cielený tréning
categories: Každodenné záležitosti
description: "Trvalo mi 89 dní, kým som sa od prvého poskladania dostal na Ao100 pod 30 sekúnd, a to bez učenia jediného CFOP algoritmu. Na základe 4441 časovaných riešení rozoberám štyri fázy: kde sa v každej fáze zaseknete, čo trénovať a prečo Roux metóda nevyžaduje učenie algoritmov."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Ako sa dostať pod 30 sekúnd pri skladaní Rubikovej kocky bez učenia algoritmov: Rozumie tomu aj školák" />
</figure>

V predchádzajúcom článku [„Ako poskladať Rubikovu kocku bez algoritmov“](/sk/blog/solve-rubiks-cube-without-formulas/) si sa naučil, ako poskladať kocku bez učenia algoritmov, len s logikou výmeny dielikov. Ten článok získal mnoho nadšených ohlasov.

Ak si postupoval krok za krokom, pravdepodobne už dokážeš, hoci ešte trochu neohrabane, poskladať celú kocku. Po niekoľkých stovkách cvičných pokusov sa ľahko dostaneš pod 1 minútu. Čo ak však chceš byť ešte rýchlejší?

Ak budeš hľadať „speedcubing“ alebo „rýchlostné skladanie Rubikovej kocky“, všetky tutoriály ti povedia to isté: ak sa chceš dostať pod 30 sekúnd, najprv sa nauč stovky algoritmov CFOP.

Tento článok ti však chce povedať, že sa môžeš dostať pod 30 sekúnd úplne bez učenia algoritmov.

<!--more-->

Od 7. mája 2026, keď som prvýkrát kompletne poskladal Rubikovu kocku, do 4. augusta, keď som dosiahol Ao100 pod 30 sekúnd, uplynulo 89 dní. Počas tohto obdobia som sa nenaučil ani jeden CFOP algoritmus, len som sa s kockou hral vo voľnom čase. Tu sú zaznamenané údaje z mojich 4441 časovaných vyriešení.

![Krivka výkonu pre 4441 vyriešení](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Obr.: Krivka výkonu pre 4441 vyriešení. Sivá čiara je čas každého riešenia, tmavá čiara je trend Ao100, červené body sú osobné rekordy. Najlepší Ao100 bol 28,22 sekúnd.*

Cieleným a pravidelným tréningom môže každý dosiahnuť sub-30 z nuly v priebehu niekoľkých mesiacov.

Čo znamená čas pod 30 sekúnd? Na [prvých majstrovstvách sveta v Rubikovej kocke v roku 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) bol víťazný čas 22,95 sekúnd, čo bol neskôr WCA uznaný ako prvý oficiálny svetový rekord; 10. miesto obsadila s časom 29,11 sekúnd práve Jessica Fridrich, tvorkyňa CFOP metódy, o ktorej budeme hovoriť v ďalšej sekcii. Inými slovami, sub-30, ktoré dnes dosiahne amatér za pár mesiacov, by v roku 1982 stačilo na umiestnenie v prvej desiatke na svete.

Ďalej sa s tebou podelím o to, ako som sa k tomu krok za krokom dopracoval, a plne ti predstavím celý tréningový systém.

## Prečo celý svet speedcubingu používa algoritmy

Najprv si ujasnime jednu vec: prečo sú v mysliach ľudí „rýchlosť“ a „učenie algoritmov“ tak úzko spojené?

Začiatkom 80. rokov profesorka českého pôvodu Jessica Fridrich (neskôr výskumníčka v oblasti digitálnej forenznej analýzy na Binghamton University v USA) usporiadala súpravu vrstvených riešení, ktorá sa neskôr nazvala CFOP (Cross, F2L, OLL, PLL). Myšlienkou tejto metódy je: vyčerpať všetky možné situácie pre vrchnú vrstvu a ku každej situácii priradiť optimálny algoritmus. Ty rozpoznáš situáciu, vykonáš algoritmus a nemusíš premýšľať.

Táto metóda je extrémne rýchla. Takmer všetky svetové rekordy sú dosiahnuté pomocou CFOP. Preto ju učia všetky tutoriály, hovoria o nej všetky videá a „učiť sa speedcubing“ sa rovná „učiť sa CFOP“, a učiť sa CFOP sa rovná naučiť sa 119 algoritmov.

Ale pozor, „učenie algoritmov“ je vlastnosťou práve metódy CFOP, nie vlastnosťou „rýchlosti“ samotnej. Dôvod, prečo si CFOP vyžaduje memorovanie, je, že si zvolila cestu vyčerpávajúceho zoznamu. Vyčerpávajúci zoznam si vyžaduje pamäť, a to je cena, ktorú platí.

Existuje metóda, ktorá nejde cestou vyčerpávajúceho zoznamu? Áno.

## Metóda bez učenia algoritmov: Roux metóda

V roku 2003 Francúz Gilles Roux predstavil úplne odlišný prístup. Namiesto skladania vrstvy po vrstve najprv postavíš dva 1×2×3 „bloky“ na ľavej a pravej strane, potom vyriešiš štyri rohy vrchnej vrstvy a nakoniec zostane len šesť hrán, ktoré sa dokončia otáčaním strednej (M) a vrchnej (U) vrstvy.

V predchádzajúcom článku sme už pomocou tohto rámca raz kocku vyriešili. Pozrime sa znova na jeho štyri kroky, tentoraz sa zamerajme na to, „čo si treba zapamätať v každom kroku“:

| Krok | Obsah | Potrebné algoritmy |
| --- | --- | --- |
| 1. Prvý blok | Postavíš blok 1×2×3 | 0, čisté pozorovanie |
| 2. Druhý blok | Symetricky postavíš ďalší | 0, čisté pozorovanie |
| 3. CMLL | Umiestnenie štyroch rohov vrchnej vrstvy | 9, všetky sa dajú odvodiť z trojcyklov |
| 4. LSE | Posledných šesť hrán | 0, používajú sa len rotácie vrchnej a strednej vrstvy (M a U) |

Z týchto štyroch krokov tri nevyžadujú žiadne algoritmy. Jediný potrebný CMLL, ktorý má celkovo 42 prípadov, ale nepotrebuješ 42 algoritmov. Trojcyklus rohov R U' L' U R' U' L U, o ktorom sme hovorili v predchádzajúcom článku, spolu s jeho zrkadlovým obrazom a niekoľkými variantmi, dokáže pokryť všetky prípady, len to bude trochu pomalšie.

![Štyri kroky Roux metódy](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Obr.: Štyri kroky Roux metódy, každý krok zobrazuje len tie dieliky, ktoré sú už správne umiestnené: Prvý blok → Druhý blok → CMLL (štyri rohy vrchnej vrstvy) → LSE (posledných šesť hrán). Snímka z panela „Metóda“ na mojej 3D stránke s Rubikovou kockou.*

To je dôvod, prečo Roux metóda nepotrebuje algoritmy: komprimovala časť vyžadujúcu pamäť do veľmi malého rohu a zvyšok necháva na pozorovaní, porozumení a zručnosti.

## Od 165 sekúnd po 28 sekúnd: Štyri fázy

![Časové rozpätie štyroch fáz](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Obr.: Časové rozpätie štyroch fáz. Fáza jedna 3 týždne, fáza dva 11 dní, fáza tri dva mesiace, fáza štyri doteraz.*

### Fáza jedna: 165 sekúnd → 60 sekúnd (1.–3. týždeň)

**Údaje**: Od 7. mája do 27. mája. Priemer prvého týždňa bol 165 sekúnd, tretieho týždňa 68 sekúnd. Táto fáza je prechodom od úplného začiatočníka k základom; opakovaním postupne pochopíš, čo každý pohyb v skutočnosti znamená a ktoré dieliky sa pohybujú.

**Kde sa zasekávate**: Prvý blok je veľmi neobratný, každú skupinu dielikov hľadáte veľmi dlho. A keď nájdete skupinu dielikov, začiatočníci majú tendenciu zastaviť sa a pokračovať v pozorovaní.

![Na čo začiatočníci míňajú čas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Obr.: Na čo začiatočníci míňajú čas. Ruky stoja, oči hľadajú po kocke, „hľadanie“ trvá mnohonásobne dlhšie ako „otáčanie“.*

**Čo trénovať**:

Najväčším nepriateľom v tejto fáze nie je pomalosť rúk, ale pomalosť očí. Čas, ktorý stráviš „hľadaním“, je oveľa dlhší ako čas, ktorý stráviš „otáčaním“. Takže:

-   **Fixuj si pozorovací uhol, neotáčaj kockou.** Ako som spomínal v predchádzajúcom článku, pozorovací uhol pri Roux metóde je pevný. V tejto fáze si musíš zvyknúť na „neotáčanie kocky“ ako na svalovú pamäť. Vždy, keď chceš kocku otočiť, zastav sa a spýtaj sa sám seba: Vidím z tohto uhla dielik, ktorý potrebujem?
-   **Pomalé skladanie (slow solving).** Bez merania času, ale pohyby musia byť súvislé, bez akýchkoľvek prestávok. Každý pohyb môže byť veľmi pomalý, ale nesmie byť prerušovaný. Podstatou je, že zatiaľ čo ruka robí predchádzajúci pohyb, oči sa musia sústrediť na ďalší pohyb – to je jadro pomalého skladania. Znie to ako spomalenie, ale v skutočnosti trénuješ svoje oči, aby videli vzťah medzi polohou dielikov a ich cieľovou polohou.
-   **Trénuj len prvý blok.** Zamiešaj, postav prvý blok, znova zamiešaj, znova postav prvý blok. Nepokračuj ďalej. Prvý blok je najslobodnejší krok v Roux metóde a zároveň najlepší na tréning pozorovania.

V tejto fáze sa neuč žiadne nové algoritmy. Tvoje súčasné úzke hrdlo nie je v algoritmoch.

### Fáza dva: 60 sekúnd → 40 sekúnd (4.–5. týždeň)

**Údaje**: Od 27. mája do 7. júna, 11 dní. Toto je úsek s najrýchlejším poklesom v celom procese. Táto fáza prináša najľahšie pozitívnu spätnú väzbu – každé učenie a optimalizácia pohybov sa okamžite prejavia na čase a pocit z prekonávania osobných rekordov každý deň sa vyrovná len máločomu.

**Kde sa zasekávate**: Nesúvislé pohyby. Zasekávajúca sa kocka.

**Čo trénovať**:

V tejto fáze musíš optimalizovať pohyby v každej fáze a na základe pochopenia zvýšiť plynulosť každého pohybu.

-   **Druhý blok.** Druhý blok je ťažší ako prvý, pretože priestoru je o polovicu menej a už dokončený prvý blok sa nesmie poškodiť. Kľúčové otáčania sú R, r (pravé dve vrstvy), M, U. V tejto fáze sa musíš naučiť používať r a M namiesto R na presun dielikov, aby sa prvý blok nikdy neporušil. Optimalizácia krokov šetrí čas. Napríklad tri otočenia v smere hodinových ručičiek sú ekvivalentné jednému otočeniu proti smeru hodinových ručičiek.
-   **Plynulé používanie M-vrstvy.** Posledný krok Roux metódy sú všetky M a U, a to, ako plynulo otáčaš M-vrstvou, priamo určuje tvoj spodný limit. Používaj prstenník alebo prostredník na posúvanie M, začni trénovať rytmus ako M' U M' U.
-   **CMLL rozpoznávanie tvarov.** V predchádzajúcom článku sme rohy „skúšali“ pomocou trojcyklov. Teraz musíš začať najprv pozerať a potom robiť: pred otočením vrchnej vrstvy sa pozri na orientáciu štyroch žltých rohov, urči, či je tam 0, 1, 2 alebo 4 správne rohy, a potom priamo vykonaj zodpovedajúci pohyb. Môžeš tiež pomocou veľmi malého počtu algoritmov dosiahnuť výrazné zvýšenie efektivity, čo sa veľmi oplatí. Väčšinu týchto algoritmov si nemusíš naspamäť učiť, stačí ich robiť a chápať.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pohľad pri stavaní druhého bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Obr. vľavo: Pohľad pri stavaní druhého bloku. Prvý blok je už hotový, stačí vložiť roh-hrana pár na pravú stranu pomocou štyroch otáčok R, r, M, U, pričom prvý blok sa nikdy nedotkne. Obr. vpravo: M' U M, jedna z najčastejšie používaných sekvencií pohybov v druhej polovici Roux metódy. Stredná vrstva hore, vrchná vrstva otočí, stredná vrstva späť, tri kroky vymenia pár hrán vo vrchnej a strednej vrstve.*

Môžeš si pozrieť moju zjednodušenú a pre začiatočníkov veľmi prívetivú [knižnicu algoritmov Roux metódy](/sk/projects/rubiks-cube/roux#cmll), CMLL stránka je dvojfázová: 7 algoritmov pre orientáciu + 2 algoritmy pre pozíciu, spolu 9. To je najefektívnejšia voľba pre zvýšenie rýchlosti, ľahko sa naučíš a každý zvládnutý set ti môže ušetriť približne 1-2 sekundy. S trochou praxe si ich rýchlo osvojíš, niektoré už boli predstavené v predchádzajúcom článku a nemusíš si ich všetky pamätať, aby si sa dostal pod 30 sekúnd.

![Prvý krok dvojfázového CMLL, sedem orientácií rohov](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Obr.: Prvý krok dvojfázového CMLL, sedem orientácií rohov. V pohľade zhora je žltá farba vrchného povrchu smerujúca nahor, malé prúžky na vonkajšej strane ukazujú, že farba vrchného povrchu rohu smeruje do strany. Rozpoznaj tvar podľa počtu žltých rohov: 0 je H alebo Pi, 1 je S alebo AS, 2 je U, T alebo L.*

Po zarovnaní žltých strán nahor môžeš použiť tieto dva algoritmy na zarovnanie bočných strán rohov.

Ak je už jedna strana farebne zhodná, napríklad červená je už na tej istej strane, otoč ju na ľavú stranu a potom môžeš vybrať algoritmus pre výmenu susedných rohov. Ak žiadna strana nie je farebne zhodná, vyber algoritmus pre výmenu protiľahlých rohov.

![Druhý krok dvojfázového CMLL, dve pozície rohov](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Obr.: Druhý krok dvojfázového CMLL, dve pozície rohov. Vľavo sú červené farby dvoch ľavých rohov už zhodné, použije sa výmena susedných rohov; vpravo nie je žiadna strana zhodná, použije sa výmena protiľahlých rohov.*

Môžeš pochopiť každú skupinu algoritmov prostredníctvom rozsiahleho pomalého skladania. Nepovažuj ich za algoritmy, ale za určité pevné pohyby, ktoré by si časom objavil aj sám, ale ich uvedenie tu ti môže ušetriť čas.

Ešte jedna vec, ktorá je účinnejšia ako akýkoľvek tréning: investuj do novej kocky. Ak máš ešte starú kocku, ktorá vŕzga a zasekáva sa pri otáčaní, kúp si modernú 3x3 s magnetmi. Najnovšie kocky ti ukážu silu inžinierskej optimalizácie, otáčanie je plynulé, automaticky sa zarovnávajú a takmer sa nezasekávajú. Len výmenou kocky sa tvoj priemerný čas môže zrýchliť o 15 sekúnd. Cenovo najvýhodnejšou voľbou je [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), ktorá stojí okolo dvadsať dolárov a vydrží ti až do sub-20.

### Fáza tri: 40 sekúnd → 30 sekúnd (5.–13. týždeň, dva mesiace)

**Údaje**: Od 7. júna do 4. augusta. Ao100 sa z 39,8 sekúnd znížil na 29,9 sekúnd, čo trvalo 58 dní. V tejto fáze sa občas môže objaviť výsledok pod 30 sekúnd, ale len s veľkým šťastím. A s klesajúcim priemerným časom sa obtiažnosť zlepšenia o 1 sekundu exponenciálne zvyšuje. (Ao100 predstavuje priemerný čas za posledných 100 vyriešení po vyradení 5 % najlepších a najhorších výsledkov)

![Denný priemer](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Obr.: Denný priemer. Po polovici júna sa krivka takmer vyrovnala, dva mesiace som sa pohyboval medzi 30–40 sekundami.*

**Kde sa zasekávate**: Obnova šiestich hrán vrchnej vrstvy je veľmi pomalá, nechápete logiku, každýkrát sa spoliehate na opakované pokusy, čo stráca veľa času. Prvý a druhý blok stále nie sú dostatočne plynulé.

**Čo trénovať**:

-   **Rozpoznávanie EO.** Ako som spomínal v predchádzajúcom článku, existuje len niekoľko prípadov zle orientovaných hrán: 0, iné ako 0 a 4, 4 (2 hore, 2 dole), 4 (všetky na vrchnej vrstve), 4 (3 hore, 1 dole). Cieľom tejto fázy je: v momente, keď je blok postavený, bez počítania, na prvý pohľad rozpoznať, ktorý prípad to je. Spôsob cvičenia je zamiešať kocku, urobiť len CMLL, potom zastaviť, povedať počet zle orientovaných hrán a pokračovať.
-   Mnoho ľudí tu nerozumie pohybom. Fáza EO má nakoniec za cieľ vytvoriť tvar šípky s 3 hore a 1 dole, pretože kompletný tvar je len jeden zamiešaný krok od tvaru šípky. Preto, pri reverznom myslení, je to posledný krok pred dokončením riešenia. Takže bez ohľadu na počet zle orientovaných hrán je cieľom vždy vytvoriť šípku. Ak sú 4 zle orientované hrany hore, vymeň pár horných a dolných hrán, aby sa jedna zlá hrana presunula dole a vytvorila sa šípka. Ak sú 2 hore a 2 dole, vymeň pár horných a dolných hrán, aby sa jedna zlá hrana presunula hore a vytvorila sa šípka. Ak je 1 hore, 1 dole, alebo 2 hore, potom pomocou M' U M najprv zmeň situáciu na predchádzajúci prípad a potom vytvor šípku. Môžeš si sám preskúmať najlepšie kroky pre prípad 1 / 1 prostredníctvom rozsiahleho pozorovania a premýšľania.

    ![Tvar šípky](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

    *Obr.: Tvar šípky. Tri zle orientované hrany (zvýraznené modrozelenou farbou) na vrchnej vrstve tvoria šípku, ktorá ukazuje na zle orientovanú hranu na spodnej vrstve. V tomto momente jeden M' U M dokáže umiestniť všetky štyri hrany naraz. [Otvoriť tento stav v 3D kocke](/sk/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) umožňuje sledovať krok za krokom.*

-   **Intenzívne cvičenie predvídania (Look-ahead).** Toto je najdôležitejšia vec na prechod z 40 na 30 sekúnd a zároveň najviac protichodná intuícii: otáčaj pomalšie, pozeraj sa ďalej dopredu. Pri stavaní prvého bloku sa nepozeraj na práve vkladaný dielik, ale na to, kde je ďalší. Na začiatku to bude veľmi nepríjemné, výsledky sa najprv zhoršia, ale po týždni sa náhle zlepšia.
-   **CMLL bez váhania.** Ak musíš pri každom pohybe premýšľať, kým sa odvážiš ho urobiť, potom to ešte nie je tvoje. Cvič každý pohyb samostatne 50-krát, kým sa tvoja ruka nepohne automaticky, keď uvidíš tvar.

![Šesť foriem EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Obr.: Šesť foriem EO. Štítok vľavo hore označuje počet zle orientovaných hrán (hore / dole), žltá farba sú správne orientované hrany, modrý rámček sú zle orientované hrany. Len ten s tvarom šípky vyžaduje algoritmus, ostatných päť sa najprv premení na šípku.*

Pre obnovu ľavých a pravých hrán, tu sa predpokladá žltá ako vrchná strana, biela ako spodná strana a červený prvý blok ako príklad. Je potrebné pokračovať v umiestňovaní žlto-červenej hrany + žlto-oranžovej hrany (zvýraznené). Hlavnou myšlienkou je nájsť spôsob, ako žlto-červenú hranu a žlto-oranžovú hranu vymeniť na spodnú stranu, aby boli dve hrany na spodnej strane oproti sebe. Potom otočte vrchnú vrstvu do vhodnej polohy a M2 U alebo M2 U' dokáže obnoviť ľavú a pravú hranu U-vrstvy.

Aby som vám pomohol lepšie porozumieť, zhrnul som všetkých šesť foriem EO na [stránke LSE v knižnici algoritmov Roux metódy](/sk/projects/rubiks-cube/roux#lse). Kliknutím na „zobraziť detaily“ pri každom obrázku sa otvorí príslušný stav v 3D kocke, pričom zle orientované hrany sú automaticky zvýraznené. Na tej istej stránke sú aj všetky prípady UL/UR umiestnenia a posledné štyri hrany.

Zníženie objemu tréningu v tejto fáze nie je zlé. Plošina sa nedá prekonať hromadením, ale zmenou konkrétneho zlozvyku. Moja skúsenosť je meniť len jeden naraz.

### Fáza štyri: 30 sekúnd → 28 sekúnd (po 13. týždni)

**Údaje**: Po 4. auguste. Počet zaznamenaných tréningov za celý september bol 122, hoci mnoho tréningov nebolo zaznamenaných. Rubikovu kocku som si už osvojil ako hračku na stole, ktorú si vezmem do ruky kedykoľvek, keď mám náladu, keď som nervózny alebo úzkostlivý, počas pracovnej prestávky alebo keď sa nudím. Skladanie Rubikovej kocky sa stalo súčasťou môjho života. Ao100 sa postupne znížil z 29,9 na 28,2.

**Kde sa zasekávate**: Žiadne jasné úzke hrdlo, len nedostatočná plynulosť.

**Čo trénovať**:

Ak je tvoja priemerná rýchlosť stále nad 30 sekúnd, jedinou vecou, ktorú musíš urobiť, je pokračovať v intenzívnom tréningu, a nie učiť sa nové algoritmy.

Neustálym cvičením predvídania (look-ahead) prostredníctvom pomalého skladania budeš stále rýchlejší.

Vždy maj kocku po ruke a hraj sa s ňou. Nechaj ju na mieste, kde ju máš na dosah, napríklad na stole, aby si sa s ňou mohol hrať počas pracovných prestávok. Tiež si môžeš často nahrávať videá svojho skladania, aby si zistil, v ktorej fáze stráviš najviac času, a potom sa zameraj na optimalizáciu. Toto je cielený tréning, tvoja rýchlosť pokroku nezávisí od celkového počtu obyčajných tréningov, ale od počtu cielených tréningov.

Potom zistíš, že po prekonaní plošiny 30–35 sekúnd sa tvoja rýchlosť opäť výrazne znížila.

V tejto fáze ti gratulujem, pre začiatočníkov si už veľmi šikovný hráč!

## Ako napredovať ďalej

V prvom rade sa neboj horného limitu Roux metódy. Medzi špičkovými hráčmi sú aj takí, ktorí používajú Roux metódu a dostali sa do svetovej špičky. Samotná metóda nemá horný limit.

A takmer každý svetový hráč, ktorý skladá jednoručne, používa Roux metódu, pretože je naozaj veľmi vhodná aj na ovládanie jednou rukou.

**Najrýchlejšie oficiálne časy (WCA) s Roux metódou:**

- Jednotlivý čas 4,11 sekúnd, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipíny), Valenzuela Cubing Open 2023, uznaný ako najrýchlejší oficiálny jednotlivý čas s Roux metódou ([rekonštrukčné video](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Priemer 5,98 sekúnd, rovnako on, 2019, vtedy ázijský rekord a zároveň tretí oficiálny sub-6 priemer v histórii ([WCA záznam](https://www.worldcubeassociation.org/persons/2017VILL41))
- Je tiež [držiteľom svetového rekordu v jednoručnom skladaní](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): priemer 8,09, jednotlivý čas 6,05 (2024). V komunite jednoručného skladania sa Roux všeobecne považuje za optimálne riešenie.

Ak sa však chceš dostať pod 15 sekúnd, budeš musieť prejsť zo súčasného dvojfázového CMLL na vyriešenie na jeden ťah, čo si vyžaduje zapamätať si viac zložitých algoritmov.

Osobne však stále dávam prednosť voľnému skúmaniu. Dôkladne pochopiť algoritmy vlastným objavovaním, či dokonca vytvoriť si algoritmy, ktoré ti lepšie sedia do ruky, prináša oveľa viac radosti než mechanické bifľovanie.

Rubikova kocka bola pôvodne hlavolam, nie pamäťová hra. Len vďaka pochopeniu princípov vieš v každom kroku, čo presne robíš, nezabudneš to ani po troch mesiacoch bez kocky a dokážeš nájsť riešenie pre akúkoľvek kocku, ktorú vidíš prvýkrát.

## Zhrnutie

![Skladanie dokončené](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

*Obr.: Poskladanie dokončené.*

Dostať sa z prvého poskladania pod 30 sekúnd nie je proces učenia algoritmov, ale proces tréningu koordinácie rúk, očí a mozgu.

Štyri fázy, štyri veci: najprv sa nauč pozerať bez otáčania kocky, potom sa nauč stavať druhý blok bez poškodenia prvého bloku, potom sa nauč pozerať na ďalší krok, zatiaľ čo robíš ten súčasný, a nakoniec nechaj ruky dobehnúť oči.

Algoritmy nie sú zdrojom rýchlosti. Pozorovanie je.

Nauč sa budovať pozitívnu spätnú väzbu prostredníctvom pokroku v každej fáze. Aj cvičenie zručností môže byť menej nudné, najmä keď zažiješ prekvapenie z prekonania rekordu. Predovšetkým v počiatočných a stredných fázach budeš každý deň zažívať radosť z prekonávania rekordov.

Všetky algoritmy a situácie z tohto článku som zhrnul v [knižnici algoritmov Roux metódy](/sk/projects/rubiks-cube/roux). Ak sa zasekneš, môžeš sa sem vrátiť a pozrieť si to.

Svet Rubikovej kocky je plný zábavy, prajem ti príjemné hranie.

## Príloha 1: Kontrolný zoznam cvičení pre jednotlivé fázy

**Fáza jedna (> 60 sekúnd)**

-   Fixuj si pozorovací uhol, počas celého riešenia neotáčaj kockou.
-   Bez zastavenia nájdi ďalší potrebný dielik.
-   Pomalé skladanie, pomenuj svoj zámer v každom kroku.
-   Trénuj len prvý blok, opakuj 50-krát.

**Fáza dva (60 → 40 sekúnd)**

-   Druhý blok rob len s R, r, M, U, nedotýkaj sa prvého bloku.
-   Cvičenie dvojfázového CMLL.
-   Cvičenie rytmu M' U M' U, 5 minút denne.

**Fáza tri (40 → 30 sekúnd)**

-   Zastav sa po dokončení CMLL a na prvý pohľad urč počet zle orientovaných hrán.
-   Pomalé skladanie + look-ahead: oči vždy sledujú ďalší dielik.
-   Minimálne 20 kvalitných riešení denne.

**Fáza štyri (< 30 sekúnd)**

-   Nahrávaj videá, aby si našiel miesta, kde sa zastavuješ.
-   Prstoklady: R U R' U' jednoprstove, M-vrstva prstenníkom.
-   20 kvalitných riešení denne, bez hromadenia objemu.

## Príloha 2: Nástroje

-   **csTimer**: [cstimer.net](https://cstimer.net/). Zapni štatistiky Ao5 / Ao12 / Ao100, Ao100 je tvoja skutočná úroveň, jednotlivé časy sú šťastie.
-   **3D Rubikova kocka**: [philoli.com/zh/projects/rubiks-cube](/sk/projects/rubiks-cube/). Všetky algoritmy z tohto článku môžeš zadať sem a pozrieť si animáciu.
-   **Knižnica algoritmov Roux metódy pre začiatočníkov**: [philoli.com/zh/projects/rubiks-cube/roux](/sk/projects/rubiks-cube/roux).
-   **Analyzátor tréningu csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/sk/projects/rubiks-cube/analyzer). Pretiahni sem exportovaný súbor z csTimer a uvidíš svoj vývoj výsledkov, krivky Ao5/Ao12/Ao100, posuny PB, tabuľku míľnikov a krivku cvičenia podľa Power Law.

*Tento článok obsahuje affiliate odkazy na Amazon: pri nákupe cez odkaz získam malú províziu, tvoja cena sa nemení.*

## Viac na prečítanie

-   [Ako poskladať Rubikovu kocku bez algoritmov: Rozumie tomu aj školák](/sk/blog/solve-rubiks-cube-without-formulas)
---
