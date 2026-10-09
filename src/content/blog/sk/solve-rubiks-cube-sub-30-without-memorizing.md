---
layout: blog
title: "Ako sa dostať pod 30 sekúnd s Rubikovou kockou bez memorovania vzorcov: Pochopí aj školák"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: Každodenné experimenty
description: "Trvalo mi 89 dní, kým som sa dostal z prvého zloženia na Ao100 pod 30 sekúnd, a to bez toho, aby som si zapamätal jediný vzorec CFOP. Na základe 4441 meraní času rozdelím štyri fázy: kde sa v každej fáze zaseknete, čo trénovať, a prečo metóda Roux nevyžaduje memorovanie vzorcov."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Zo 165 sekúnd na 28 sekúnd v štyroch fázach" />
</figure>

*Obrázok: Štyri fázy cesty zo 165 sekúnd na 28 sekúnd. Fáza dva zaznamenala najrýchlejší pokles, zatiaľ čo fáza tri bola najdlhším obdobím stagnácie.*

V mojom predchádzajúcom článku [„Ako zložiť Rubikovu kocku bez memorovania vzorcov“](/zh/blog/solve-rubiks-cube-without-formulas/) ste sa naučili, ako zložiť Rubikovu kocku bez memorovania vzorcov, a to pomocou logiky komutátorov. Tento článok získal mnoho nadšených ohlasov.

Ak ste postupovali podľa neho, pravdepodobne vám to teraz trvá dve až tri minúty – možno sa trochu potrápite, ale kocku zložíte. Potom sa však vynorí nová otázka: Ako zrýchliť?

Ak si vyhľadáte „rýchloskladanie Rubikovej kocky“, všetky návody vám povedia to isté: ak sa chcete dostať pod 30 sekúnd, musíte si najprv zapamätať všetky vzorce CFOP. To je 41 vzorcov pre F2L, 57 pre OLL a 21 pre PLL, celkovo 119. A aj keď F2L robíte intuitívne, 78 vzorcov pre vrchnú vrstvu sa nevyhnete. Ak si ich nezapamätáte, na rýchlosť zabudnite.

Tento článok vám chce ukázať, že sa môžete dostať pod 30 sekúnd aj bez memorovania jediného vzorca.

<!--more-->

Od 7. mája 2026, kedy som Rubikovu kocku zložil prvýkrát, až do 4. augusta, kedy som sa dostal na Ao100 pod 30 sekúnd, ubehlo 89 dní. Počas tohto obdobia som si nezapamätal ani jeden vzorec CFOP, len som sa s kockou hral vo voľnom čase. Tu sú moje zaznamenané údaje z 4441 zložení.

![Krivka výkonnosti pre 4441 zložení](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Obrázok: Krivka výkonnosti pre 4441 zložení. Sivá čiara ukazuje čas každého zloženia, tmavá čiara predstavuje trend Ao100 a červené body označujú prípady, kedy bol prekonaný osobný rekord. Najlepšie Ao100 bolo 28,22 sekundy.*

Vďaka vedomému a aktívnemu tréningu, a udržiavaniu frekvencie cvičení, môže ktokoľvek dosiahnuť sub-30 výsledok z úplných základov v priebehu niekoľkých mesiacov.

Čo znamená dostať sa pod 30 sekúnd? Na [prvých majstrovstvách sveta v Rubikovej kocke v roku 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) bol víťazný čas 22,95 sekundy, čo bol neskôr WCA uznaný ako prvý oficiálny svetový rekord. Desiate miesto obsadila s časom 29,11 sekundy samotná Jessica Fridrich, vynálezkyňa metódy CFOP, o ktorej budeme hovoriť v ďalšej časti. Inými slovami, sub-30 výsledok, ktorý dnes amatérsky nadšenec dosiahne za niekoľko mesiacov tréningu, by v roku 1982 stačil na umiestnenie v prvej desiatke na svete.

Ďalej sa s vami podelím o to, ako som to krok za krokom dosiahol, a predstavím vám kompletnú tréningovú metódu.

## Prečo si svet rýchloskladania pamätá vzorce

Najprv si ujasnime jednu vec: Prečo sú v mysliach ľudí „rýchlosť“ a „memorovanie vzorcov“ tak neoddeliteľne spojené?

Začiatkom 80. rokov 20. storočia česká profesorka Jessica Fridrich (ktorá neskôr študovala digitálnu forenznú analýzu na Binghamtonskej univerzite v USA) vyvinula vrstvenú metódu riešenia, ktorá sa neskôr stala známou ako CFOP (Cross, F2L, OLL, PLL). Myšlienkou tejto metódy je vyčerpať všetky možné situácie na hornej vrstve a ku každej priradiť optimálny vzorec. Rozpoznáte situáciu, vykonáte vzorec a nemusíte premýšľať.

![Jessica Fridrich a Rubikova kocka v jej kancelárii](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Obrázok: Jessica Fridrich a Rubikova kocka v jej kancelárii. V roku 1982 získala 10. miesto na prvých majstrovstvách sveta s časom 29,11 sekundy, a metóda CFOP je po nej pomenovaná (Fridrich Method).*

Táto metóda je extrémne rýchla. Takmer všetky svetové rekordy boli dosiahnuté pomocou CFOP. Preto ju učia všetky návody, hovoria o nej všetky videá, a „učiť sa rýchloskladanie“ sa rovná „učiť sa CFOP“, čo zase znamená zapamätať si 119 vzorcov.

Treba si však uvedomiť, že „memorovanie vzorcov“ je špecifickou vlastnosťou metódy CFOP, nie vlastnosťou „rýchlosti“ ako takej. CFOP vyžaduje memorovanie, pretože si zvolila cestu vyčerpávajúceho prehľadu. Vyčerpávajúci prehľad si vyžaduje pamäť, a to je cena, ktorú platí.

Existuje metóda, ktorá nejde cestou vyčerpávajúceho prehľadu? Áno.

## Riešenie bez memorovania vzorcov: Metóda Roux

V roku 2003 predstavil Francúz Gilles Roux úplne iný prístup. Namiesto vrstvenia kocky po vrstvách, najprv postavíte dva "mosty" s rozmermi 1×2×3 vľavo a vpravo, potom spracujete štyri rohové kocky na hornej vrstve a nakoniec zostáva len šesť hrán, ktoré dokončíte otáčaním strednej vrstvy M a hornej vrstvy U.

![Gilles Roux počas súťaže](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Obrázok: Gilles Roux počas súťaže. Snímka z raného súťažného videa, obraz bol AI-reštaurovaný a zväčšený.*

V predchádzajúcom článku sme už kocku raz zložili pomocou tohto rámca. Tu sa znova pozrieme na štyri kroky, tentoraz sa zameriame na to, „čo si treba zapamätať v každom kroku“:

| Krok | Popis | Vzorce na zapamätanie |
| --- | --- | --- |
| 1. Ľavý blok | Zostaví blok 1×2×3 | 0, čisté pozorovanie |
| 2. Pravý blok | Symetricky zostaví ďalší | 0, čisté pozorovanie |
| 3. CMLL | Rohy hornej vrstvy na svoje miesta | 9, všetky odvodené z 3-cyklov |
| 4. LSE | Posledných šesť hrán | 0, len otáčanie hornej a strednej vrstvy (M a U) |

Tri zo štyroch krokov nevyžadujú žiadne vzorce. Jediný krok, ktorý vyžaduje CMLL, má celkovo 42 prípadov, ale nepotrebujete si pamätať všetkých 42. Rohový 3-cyklus R U' L' U R' U' L U, o ktorom sme hovorili v predchádzajúcom článku, spolu s jeho zrkadlovým obrazom a niekoľkými variantmi, dokáže pokryť všetky situácie, len pomalšie.

![Štyri kroky Rouxovej metódy](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Obrázok: Štyri kroky Rouxovej metódy, kde každý krok ukazuje iba kocky, ktoré boli doteraz umiestnené: Ľavý blok → Pravý blok → CMLL (štyri rohové kocky hornej vrstvy) → LSE (posledných šesť hrán). Snímka z panela „Metóda“ na mojej stránke 3D Rubikovej kocky.*

Preto Roux dokáže fungovať bez memorovania vzorcov: komprimuje časť, ktorá si vyžaduje zapamätanie, do malého kúta, zatiaľ čo zvyšok je ponechaný na pozorovanie, pochopenie a zručnosť.

## Zo 165 sekúnd na 28 sekúnd: Štyri fázy

Tu je moja skutočná cesta. Pre každú fázu som uviedol začiatok a koniec s dátami a vysvetlil som, kde som sa v danej fáze zasekol a čo som trénoval. Vaše prekážky sa môžu líšiť, ale poradie bude s najväčšou pravdepodobnosťou rovnaké.

![Časový rozsah štyroch fáz](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Obrázok: Časový rozsah štyroch fáz. Fáza jedna trvala 3 týždne, fáza dva 11 dní, fáza tri dva mesiace, fáza štyri trvá dodnes.*

### Fáza jedna: 165 sekúnd → 60 sekúnd (1. – 3. týždeň)

**Dáta**: Od 7. mája do 27. mája. Priemer 165 sekúnd v prvom týždni, 68 sekúnd v treťom týždni.

**Kde som sa zasekol**: Ľavý blok bol veľmi nezvyčajný, hľadanie každej sady farebných kociek trvalo dlho. Po nájdení sady kociek sa začiatočníci vždy radi zastavia a pokračujú v pozorovaní.

![Kde začiatočníci trávia svoj čas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Obrázok: Kde začiatočníci trávia svoj čas. Rukami sa nehýbe, zatiaľ čo oči hľadajú po kocke; čas strávený „hľadaním“ je niekoľkonásobne dlhší ako čas strávený „otáčaním“.*

**Čo trénovať**:

Najväčším nepriateľom v tejto fáze nie je pomalosť rúk, ale pomalosť očí. Čas, ktorý strávite „hľadaním“, je oveľa dlhší ako čas, ktorý strávite „otáčaním“. Preto:

- Pevná pozícia pozorovania, neotáčajte kockou. Ako som spomenul v predchádzajúcom článku, uhol pozorovania v metóde Roux je fixný. V tejto fáze si musíte zvyknúť na to, že kocku nebudete otáčať, až sa to stane svalovou pamäťou. Vždy, keď budete chcieť kocku otočiť, zastavte sa a spýtajte sa sami seba: Vidím z tohto uhla kocku, ktorú potrebujem?
- Pomalé otáčanie. Nemeria sa čas, ale pohyby musia byť plynulé a bez akýchkoľvek prerušení. Každý pohyb môže byť veľmi pomalý, ale nesmie byť prerušovaný. Podstatou je, aby sa vaše ruky pohybovali pri predchádzajúcom pohybe, zatiaľ čo vaše oči sa sústreďujú na ďalší pohyb – to je jadro pomalého otáčania. Hoci to znie, akoby ste spomaľovali, v skutočnosti trénujete svoje oči, aby vnímali vzťah medzi polohou kocky a jej cieľovou polohou.
- Trénujte len prvý blok. Zamiešajte, postavte ľavý blok, znova zamiešajte, znova postavte ľavý blok. Nepokračujte ďalej. Prvý blok je najslobodnejší krok v metóde Roux a tiež najlepší na tréning pozorovania.

V tejto fáze sa neučte žiadne nové vzorce. Vaša súčasná prekážka nie je vo vzorcoch.

### Fáza dva: 60 sekúnd → 40 sekúnd (4. – 5. týždeň)

**Dáta**: Od 27. mája do 7. júna, 11 dní. Toto bolo najrýchlejšie klesajúce obdobie v celom procese a tiež obdobie, kedy som trénoval najviac, s 723 zloženia v prvom júnovom týždni.

**Kde som sa zasekol**: Nekonzistentné pohyby. Zasekávanie kocky.

**Čo trénovať**:

V tejto fáze musíte optimalizovať pohyby v každej etape a na základe pochopenia zvýšiť plynulosť každého pohybu.

- Druhý blok. Druhý blok je ťažší ako prvý, pretože priestor je o polovicu menší a už dokončený ľavý blok sa nesmie pokaziť. Kľúčové pohyby sú R, r (dve pravé vrstvy), M, U. V tejto fáze sa musíte naučiť používať r a M namiesto R na presúvanie kociek, aby ľavý blok zostal vždy nedotknutý. Optimalizácia krokov pohybu šetrí čas. Napríklad, tri otočenia v smere hodinových ručičiek sú ekvivalentné jednému otočeniu proti smeru hodinových ručičiek.
- Zvládnite používanie vrstvy M. Posledný krok metódy Roux je celý o M a U. To, ako plynulo otáčate vrstvou M, priamo určuje váš spodný limit. Používajte prstenník alebo prostredník na posúvanie M a začnite cvičiť rytmus ako M' U M' U.
- Rozpoznávanie tvarov CMLL. V predchádzajúcom článku sme "vyskúšali" štyri rohové kocky pomocou 3-cyklov. Teraz začnite najprv pozerať, potom konať: Pred otočením hornej vrstvy sa pozrite na žltú orientáciu štyroch rohových kociek, určite, či sú 0, 1, 2 alebo 4 "dobré" rohové kocky, a potom priamo vykonajte zodpovedajúci pohyb. Môžete tiež použiť minimálne množstvo vzorcov na výrazné zvýšenie efektivity, čo je veľmi výhodné. Väčšinu týchto vzorcov si nemusíte memorovať naspamäť, stačí ich pochopiť počas vykonávania.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pohľad pri stavaní pravého bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Obrázok vľavo: Pohľad pri stavaní pravého bloku. Ľavý blok je dokončený, a iba štyri pohyby R, r, M, U sa používajú na vloženie pravých rohových a hranových kociek, pričom ľavý blok zostáva nedotknutý. Obrázok vpravo: M' U M, najčastejšia séria pohybov používaná v druhej polovici Rouxovej metódy. Stredná vrstva hore, horná vrstva otočiť, stredná vrstva späť – tri kroky na výmenu páru hrán medzi hornou a strednou vrstvou.*

Môžete si pozrieť moju zostavenú [knižnicu vzorcov metódy Roux](/zh/projects/rubiks-cube/roux#cmll). Stránka CMLL je dvojfázová: 7 vzorcov na orientáciu + 2 vzorce na permutáciu, celkovo 9 vzorcov. Toto je cenovo najvýhodnejšia voľba na zvýšenie rýchlosti, ľahko sa učí a každá zvládnutá skupina vás zrýchli asi o 1–2 sekundy. S trochou praxe ich rýchlo zvládnete a niektoré z nich boli predstavené už v predchádzajúcom článku, takže si ich nemusíte všetky pamätať, aby ste sa dostali pod 30 sekúnd.

![Prvý krok dvojfázovej CMLL, sedem orientácií rohových kociek](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Obrázok: Prvý krok dvojfázovej CMLL, sedem orientácií rohových kociek. Na pohľade zhora je žltá farba orientovaná nahor, zatiaľ čo malé prúžky na vonkajšej strane ukazujú orientáciu žltej farby rohu na bočnú stranu. Tvary sa rozpoznávajú podľa počtu žltých rohov: 0 je H alebo Pi, 1 je S alebo AS, 2 je U, T alebo L.*

Po zarovnaní žltých stránok hore môžete použiť tieto dva vzorce na zarovnanie bočných strán rohových kociek.

Ak je jedna strana už farebne zladená, napríklad červená je už na rovnakej strane, otočte ju doľava a potom môžete zvoliť vzorec pre výmenu susedných rohov. Ak žiadna strana nie je farebne zladená, zvoľte vzorec pre výmenu diagonálnych rohov.

![Druhý krok dvojfázovej CMLL, dve permutácie rohových kociek](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Obrázok: Druhý krok dvojfázovej CMLL, dve permutácie rohových kociek. Na ľavej strane sú červené farby dvoch rohov už zladené, použite výmenu susedných. Na pravej strane nie je žiadna strana zladená, použite výmenu diagonálnych.*

Každú skupinu vzorcov môžete pochopiť rozsiahlym pomalým otáčaním. Nepovažujte ich za vzorce, ale skôr za určité pevné pohyby. Tieto pohyby môžete postupne objaviť aj sami, ale ich uvedenie tu vám ušetrí čas.

A ešte jedna vec, ktorá prinesie okamžité výsledky, lepšie ako akékoľvek cvičenie: investujte do novej kocky. Ak stále máte starú kocku, ktorá vŕzga a zasekáva sa pri preklopení, kúpte si modernú 3x3 s magnetmi. Najnovšie kocky vám ukážu silu inžinierskej optimalizácie – hladké otáčanie, automatické zarovnávanie a takmer žiadne zasekávanie. Len výmena kocky môže zrýchliť váš priemerný čas o 15 sekúnd. Najlepšou voľbou v pomere cena/výkon je [MoYu RS3 M V5 (MagLev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), ktorá stojí okolo dvadsať dolárov a vydrží vám až do sub-20.

### Fáza tri: 40 sekúnd → 30 sekúnd (5. – 13. týždeň, dva mesiace)

**Dáta**: Od 7. júna do 4. augusta. Ao100 som zlepšil z 39,8 sekundy na 29,9 sekundy, čo trvalo 58 dní. V tejto fáze sa občas môže objaviť výsledok pod 30 sekúnd, ale len s veľkým šťastím. Navyše, s klesajúcim priemerným časom sa obtiažnosť zlepšenia o 1 sekundu exponenciálne zvyšuje.

![Denný priemer](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Obrázok: Denný priemer. Po polovici júna sa krivka takmer vyrovnala a dva mesiace sa držala medzi 30 a 40 sekundami.*

Toto je fáza stagnácie. Každý sa s ňou stretne, ja som tu strávil dva mesiace.

**Kde som sa zasekol**: Šesť hrán hornej vrstvy sa skladalo veľmi pomaly, nechápal som logiku a každé zloženie bolo výsledkom opakovaných pokusov, čo strácalo veľa času. Ľavý a pravý blok stále neboli dostatočne zvládnuté.

**Čo trénovať**:

- Rozpoznávanie EO. Ako som spomenul v predchádzajúcom článku, existuje len niekoľko prípadov „zlých“ hrán: 0, iné ako 0 a 4, 4 (2 hore a 2 dole), 4 (všetky na hornej vrstve), 4 (3 hore a 1 dole). Cieľom tejto fázy je: v momente dokončenia blokov, bez počítania, na prvý pohľad rozpoznať, o aký typ ide. Metóda tréningu spočíva v tom, že kocku zamiešate, zložíte ju len po CMLL, potom zastavíte, poviete počet „zlých“ hrán a potom pokračujete.
- Mnoho ľudí nerozumie pohybom v tejto fáze. Fáza EO je v konečnom dôsledku o vytvorení „šípkového“ tvaru (3 hore, 1 dole), pretože plný tvar je len jeden zamiešaný krok od šípkového tvaru. Takže, reverznou logikou, je to posledný krok pred dokončením, a preto bez ohľadu na počet „zlých“ hrán je konečným cieľom vytvoriť šípku. Ak sú hore 4 „zlé“ hrany, vymeníte jeden pár hrán hore/dole, aby ste jednu „zlú“ hranu presunuli dole a dosiahli šípku. Ak sú 2 hore a 2 dole, vymeníte jeden pár hrán hore/dole, aby ste jednu „zlú“ hranu presunuli hore a dosiahli šípku. Ak je 1 hore a 1 dole, alebo 2 hore, potom použijete M' U M, aby ste najprv dosiahli predchádzajúce situácie a potom vytvorili šípku. Najlepšie kroky pre prípad 1/1 môžete objaviť sami prostredníctvom rozsiahleho pozorovania a premýšľania.
- Rozsiahle cvičenie predvídania (Look-ahead). Toto je najdôležitejšia vec na prechod zo 40 na 30 sekúnd a zároveň najviac protintuitívna: otáčajte pomalšie, pozerajte sa ďalej. Pri stavaní ľavého bloku sa nepozerajte na kocku, ktorú práve vkladáte, ale na to, kde je ďalšia kocka. Na začiatku to bude veľmi nepríjemné a vaše výsledky sa najprv zhoršia, ale po týždni vytrvalosti sa náhle zlepšia.
- CMLL bez váhania. Ak si musíte pri každom pohybe premyslieť, kým ho urobíte, potom to ešte nie je váš pohyb. Cvičte každý pohyb samostatne 50-krát, kým sa vaše ruky nepohnú automaticky, akonáhle uvidíte tvar.

![Tvar šípky](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Obrázok: Tvar šípky. Tri „zlé“ hrany na hornej vrstve (zvýraznené tyrkysovo) tvoria šípku, ktorá ukazuje na „zlú“ hranu na spodnej vrstve. V tomto momente ich jediný pohyb M' U M dokáže všetky štyri umiestniť. [Otvorte tento stav v 3D Rubikovej kocke](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), aby ste si to pozreli krok za krokom.*

![Šesť EO stavov](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Obrázok: Šesť EO stavov. Značka v ľavom hornom rohu udáva počet „zlých“ hrán (hore / dole), žlté sú „dobré“ hrany a tyrkysové rámčeky označujú „zlé“ hrany. Iba stav so šípkou vyžaduje vzorec, ostatných päť sa najprv premení na šípku.*

Pokiaľ ide o skladanie ľavých a pravých hranových kociek, tu budeme mať žltú farbu navrchu, bielu naspodku a ľavý blok bude červený. Potrebujeme umiestniť žlto-červenú hranu a žlto-oranžovú hranu (zvýraznené). Hlavnou myšlienkou je presunúť žlto-červenú hranu na spodnú vrstvu pomocou výmeny hrán hore/dole a rovnako aj žlto-oranžovú hranu. Obe hrany budú potom oproti sebe na spodnej vrstve. Následne otočíme hornú vrstvu do správnej polohy a M2 U alebo M2 U' dokončí ľavé a pravé hrany vrstvy U.

Aby som vám pomohol lepšie pochopiť, zhromaždil som všetkých šesť EO stavov na [stránke LSE v knižnici vzorcov metódy Roux](/zh/projects/rubiks-cube/roux#lse). Kliknutím na „Zobraziť detaily“ sa každý z nich otvorí v 3D Rubikovej kocke, pričom „zlé“ hrany sú automaticky zvýraznené. Na tej istej stránke nájdete aj všetky prípady UL/UR zarovnania a posledných štyroch hrán.

Zníženie objemu tréningu v tejto fáze nie je zlá vec. Fázu stagnácie nemožno prekonať masívnym tréningom, ale zmenou konkrétneho zlozvyku. Moja skúsenosť je meniť vždy len jeden.

### Fáza štyri: 30 sekúnd → 28 sekúnd (po 13. týždni)

**Dáta**: Po 4. auguste. Počet zaznamenaných tréningov za celý september bol 122, ale v skutočnosti som mnohé tréningy nezaznamenal. Rubikovu kocku som si osvojil ako hračku na stole, ktorú si vezmem do ruky, kedykoľvek mám chuť – keď mám dobrú náladu, keď som frustrovaný alebo úzkostný, počas pracovných prestávok, alebo keď sa nudím. Hranie s kockou sa stalo súčasťou môjho života. Ao100 tiež postupne klesol z 29,9 na 28,2.

**Kde som sa zasekol**: Žiadne jasné prekážky, len nedostatočná plynulosť.

**Čo trénovať**:

Ak je vaša priemerná rýchlosť stále nad 30 sekúnd, jediné, čo musíte urobiť, je pokračovať v intenzívnom tréningu, a nie učiť sa nové vzorce.

Neustálym pomalým otáčaním a cvičením predvídania budete čoraz rýchlejší.

Majte kocku vždy po ruke a hrajte sa s ňou, kedykoľvek máte príležitosť. Nechajte ju na stole, aby ste si ju mohli vziať počas pracovných prestávok. Pravidelne si nahrávajte videá zo svojich zložení, aby ste zistili, ktorá fáza vám zaberá najviac času, a potom ju cielene optimalizujte. Toto je zámerný tréning; vaša rýchlosť pokroku nezávisí od celkového počtu bežných tréningov, ale od počtu vašich zámerných tréningov.

Potom zistíte, že po prekonaní fázy stagnácie 30–35 sekúnd sa vaša rýchlosť opäť znížila o ďalšiu úroveň.

Gratulujem, ak ste sa dostali do tejto fázy! V očiach začiatočníkov ste už veľmi zdatný hráč!

## Cena za neskladanie bez vzorcov

Aby som bol úprimný. Skladanie bez vzorcov nie je zadarmo.

Fáza CMLL je pomalá. Pokrytie 42 situácií deviatimi vzorcami znamená, že niektoré situácie sa musia vykonať dvakrát. Tí, ktorí poznajú všetky CMLL vzorce, sú v tomto kroku o dve až tri sekundy rýchlejší ako ja.

Technika vrstvy M má vysokú vstupnú bariéru. Druhá polovica metódy Roux je závislá na vrstve M, ktorá sa otáča ťažšie ako R a U, ľahko sa zasekáva a vyžaduje si aj kvalitnejšiu kocku.

Nemajte obavy z horného limitu. Medzi špičkovými hráčmi sú aj takí, ktorí sa dostali medzi svetovú elitu pomocou metódy Roux, takže samotná metóda nemá horný limit. Ak sa však chcete dostať pod 15 sekúnd, pravdepodobne budete musieť doplniť všetkých 42 CMLL vzorcov. Ale to je už iná fáza. Na to, aby ste sa dostali pod 30 sekúnd, to nepotrebujete.

Navyše, takmer každý svetový hráč, ktorý skladá jednou rukou, používa metódu Roux, pretože je naozaj veľmi vhodná aj pre skladanie jednou rukou.

**Najrýchlejšie výsledky s metódou Roux na oficiálnych súťažiach (WCA):**

- Jedenkrát 4,11 sekundy, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipíny), Valenzuela Cubing Open 2023, všeobecne uznávaný najrýchlejší oficiálny jednotlivý výsledok Roux ([rekonštrukčné video](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Priemer 5,98 sekundy, taktiež on, 2019, vtedy ázijský rekord a tretí oficiálny sub-6 priemer v histórii ([WCA profil](https://www.worldcubeassociation.org/persons/2017VILL41))
- Je tiež [držiteľom svetového rekordu v skladaní jednou rukou](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): priemer 8,09, jednotlivo 6,05 (2024). V kruhoch skladania jednou rukou sa Roux všeobecne považuje za optimálnu metódu.

Myslím, že táto výmena je veľmi výhodná. Za dve až tri sekundy, ktoré stratíte pri CMLL, získate: viete, čo robíte v každom kroku, nezabudnete to ani po troch mesiacoch bez kocky, a dokážete prísť na riešenie akejkoľvek neznámej kocky.

## Zhrnutie

![Zloženie dokončené](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Dostať sa zo stavu, kedy dokážete kocku zložiť, na čas pod 30 sekúnd, nie je proces memorovania vzorcov, ale proces tréningu koordinácie rúk, očí a mozgu.

Štyri fázy, štyri úlohy: najprv sa naučte pozerať bez otáčania kocky, potom sa naučte stavať pravý blok bez narušenia ľavého bloku, potom sa naučte pozerať na ďalší krok, zatiaľ čo robíte ten súčasný, a nakoniec nechajte ruky sledovať oči.

Vzorce nie sú zdrojom rýchlosti. Pozorovanie je.

Naučte sa budovať pozitívnu spätnú väzbu prostredníctvom pokroku v každej fáze. Aj cvičenie plynulosti môže byť menej nudné, najmä keď objavíte prekvapenie z prekonania ďalšieho rekordu. Obzvlášť v začiatočných a stredne pokročilých fázach zažijete radosť z prekonávania rekordov každý deň.

Všetky vzorce a situácie uvedené v článku som zhromaždil v [knižnici vzorcov metódy Roux](/zh/projects/rubiks-cube/roux). Ak sa zaseknete, môžete sa k nim vrátiť.

Svet Rubikovej kocky je plný nekonečnej zábavy, prajem vám veľa radosti pri hraní.

## Príloha 1: Kontrolný zoznam cvičení pre jednotlivé fázy

**Fáza jedna (> 60 sekúnd)**

- Pevná pozícia pozorovania, neotáčajte kockou počas celého procesu skladania
- Nájdite ďalšiu požadovanú farbu bez prerušenia
- Pomalé otáčanie, vyslovte svoj zámer pri každom kroku
- Trénujte iba ľavý blok, opakujte 50-krát

**Fáza dva (60 → 40 sekúnd)**

- Pravý blok len s R, r, M, U, nedotýkajte sa ľavého bloku
- Cvičenie dvojfázovej CMLL
- Rytmické cvičenie M' U M' U, 5 minút denne

**Fáza tri (40 → 30 sekúnd)**

- Zastavte sa po dokončení CMLL a na prvý pohľad povedzte počet „zlých“ hrán
- Pomalé otáčanie + predvídanie: oči vždy sledujú ďalšiu kocku
- Aspoň 20 kvalitných zložení denne

**Fáza štyri (< 30 sekúnd)**

- Nahrávajte videá, aby ste našli prerušenia
- Technika: R U R' U' s jedným prstom, M vrstva prstenníkom
- 20 kvalitných zložení denne, bez prehnaného množstva

## Príloha 2: Nástroje

- **csTimer**: [cstimer.net](https://cstimer.net/). Otvorte štatistiky Ao5 / Ao12 / Ao100. Ao100 je vaša skutočná úroveň, jednotlivé výsledky sú vecou šťastia.
- **3D Rubikova kocka**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Všetky vzorce z tohto článku môžete zadať a pozrieť si animáciu.
- **Knižnica vzorcov metódy Roux pre začiatočníkov**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Bežné vkladacie postupy pre ľavý a pravý blok, 9 vzorcov pre dvojfázovú CMLL, všetky situácie LSE (EO, UL/UR, posledné štyri hrany). Každý obrázok sa dá otvoriť v 3D Rubikovej kocke, pričom sa automaticky skryjú irelevantné kocky a zvýraznia sa hrany, s ktorými treba hýbať.
- **csTimer Tréningový analyzátor**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Pretiahnite súbor exportovaný z csTimer do analyzátora a uvidíte svoj vlastný priebeh výsledkov, krivky Ao5/Ao12/Ao100, posuny PB, tabuľku míľnikov (kedy ste prvýkrát dosiahli sub-60, sub-40, sub-30) a krivku tréningu podľa Power Law. Všetky grafy v tomto článku pochádzajú odtiaľto. Dáta sa spracovávajú iba vo vašom prehliadači a nenahrávajú sa. Ak nemáte exportovaný súbor, môžete najprv načítať mojich 4441 dát, aby ste videli, ako to funguje.

*Tento článok obsahuje affiliate odkazy na Amazon: Ak nakúpite cez tieto odkazy, získam malú províziu, pričom vaša cena zostáva nezmenená.*

## Viac na čítanie

- [Ako zložiť Rubikovu kocku bez memorovania vzorcov: Pochopí aj školák](/zh/blog/solve-rubiks-cube-without-formulas)
