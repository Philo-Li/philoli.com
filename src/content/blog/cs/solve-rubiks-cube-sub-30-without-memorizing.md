---
layout: blog
title: "Jak složit Rubikovu kostku pod 30 sekund bez učení algoritmů: Porozumí i školák"
date: 2026-10-09 12:00:00
tags:
  - Rubikova_kostka
  - tutoriál
  - Roux_metoda
  - rychloskládání
  - záměrné_cvičení
categories: 日常折腾
description: "Od prvního složení po Ao100 pod 30 sekund mi to trvalo 89 dní, aniž bych se naučil jediný CFOP algoritmus. Na základě dat z 4441 měřených složení rozebírám čtyři fáze: kde se v každé fázi zasekáváte, co trénovat a proč Roux metoda nevyžaduje učení algoritmů."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Čtyři fáze od 165 sekund k 28 sekundám" />
</figure>

*Obrázek: Čtyři fáze od 165 sekund k 28 sekundám. Fáze dvě přinesla nejrychlejší pokrok, fáze tři byla nejdelší plošinou.*

V mém předchozím článku [„Jak složit Rubikovu kostku bez algoritmů“](/cs/blog/solve-rubiks-cube-without-formulas/) ses naučil, jak kostku složit bez učení algoritmů, jen s logikou komutátorů. Ten článek získal mnoho nadšených ohlasů.

Pokud jsi to zkusil, nejspíš ti to teď trvá dvě až tři minuty. Sice je to ještě trochu chaotické, ale už to zvládneš složit. A pak se vynoří nová otázka: Jak zrychlit?

Když si vyhledáš „rychloskládání Rubikovy kostky“, všechny tutoriály ti řeknou to samé: Chceš-li se dostat pod 30 sekund, musíš se nejdřív naučit algoritmy CFOP. F2L 41 algoritmů, OLL 57, PLL 21, celkem 119. I když F2L děláš intuitivně, 78 algoritmů pro horní vrstvu se nevyhneš. Pokud se je nenaučíš nazpaměť, na rychlost zapomeň.

Tento článek ti ale chce ukázat, že se můžeš dostat pod 30 sekund, aniž bys ses musel učit jakékoli algoritmy nazpaměť.

<!--more-->

Od 7. května 2026, kdy jsem poprvé složil kostku, do 4. srpna, kdy jsem dosáhl Ao100 pod 30 sekund, mi to trvalo 89 dní. Během té doby jsem se nenaučil jediný CFOP algoritmus, jen jsem si s kostkou hrál ve volném čase. Toto jsou data z 4441 složení, která jsem si zaznamenával.

![Křivka výsledků 4441 složení](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Obrázek: Křivka výsledků 4441 složení. Šedá čára ukazuje čas každého jednotlivého složení, tmavá čára je trend Ao100 a červené body označují okamžiky, kdy jsem překonal osobní rekord. Nejlepší Ao100 bylo 28.22 sekund.*

S vědomým a aktivním tréninkem a udržováním frekvence cvičení může kdokoli dosáhnout sub-30 z nuly během několika měsíců.

Co znamená čas pod 30 sekund? Na [prvním mistrovství světa v Rubikově kostce v roce 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) byl vítězný čas 22.95 sekund, což byl později WCA uznán jako první oficiální světový rekord. Desáté místo obsadila s časem 29.11 sekund samotná Jessica Fridrich, tvůrkyně CFOP metody, o které budeme mluvit v další sekci. Jinými slovy, sub-30, kterého dnes dosáhne amatér po několika měsících tréninku, by v roce 1982 stačilo na umístění v top desítce světa.

Dále se s tebou podělím o to, jak jsem toho krok za krokem dosáhl, a předám ti kompletní sadu tréninkových metod.

## Proč se ve světě rychloskládání všichni učí algoritmy nazpaměť

Nejdřív si ujasněme jednu věc: Proč jsou rychlost a učení algoritmů v myslích lidí tak pevně spojené?

Na počátku 80. let 20. století uspořádala česko-americká profesorka Jessica Fridrich (později se zabývala digitální forenzní analýzou na Binghamton University) vrstvenou metodu, která byla později nazvána CFOP (Cross, F2L, OLL, PLL). Myšlenka této metody je následující: vyčíst všechny možné situace horní vrstvy a ke každé situaci přiřadit optimální algoritmus. Ty situaci rozpoznáš, provedeš algoritmus a nemusíš přemýšlet.

![Jessica Fridrich a Rubikova kostka v její kanceláři](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Obrázek: Jessica Fridrich a Rubikova kostka v její kanceláři. V roce 1982 získala 10. místo na prvním mistrovství světa s časem 29.11 sekund, a právě po ní je pojmenována metoda CFOP (Fridrich Method).*

Tato metoda je extrémně rychlá. Téměř všechny světové rekordy byly složeny pomocí CFOP. Proto ji učí všechny tutoriály, mluví o ní všechna videa, a „učit se rychloskládání“ se rovná „učit se CFOP“, což se zase rovná naučit se 119 algoritmů nazpaměť.

Ale pozor, „učení algoritmů nazpaměť“ je vlastností metody CFOP, nikoli vlastností samotné „rychlosti“. Důvod, proč se CFOP musí učit nazpaměť, je ten, že si zvolila cestu vyčerpávajícího výčtu. A vyčerpávající výčet vyžaduje paměť, což je cena, kterou za to platí.

Existuje metoda, která nejde touto cestou vyčerpávajícího výčtu? Ano.

## Řešení bez učení algoritmů: Roux metoda

V roce 2003 představil Francouz Gilles Roux zcela odlišný přístup. Místo skládání vrstvu po vrstvě se nejprve postaví dva 1×2×3 „bloky“ (levý a pravý), pak se vyřeší čtyři rohy horní vrstvy a nakonec zbývá šest hran, které se dokončí otáčením střední vrstvy M a horní vrstvy U.

![Gilles Roux v akci během soutěže](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Obrázek: Gilles Roux v akci během soutěže. Snímek je z raného soutěžního videa, obraz byl opraven a zvětšen pomocí AI.*

V předchozím článku jsme si už kostku jednou složili pomocí tohoto rámce. Pojďme se teď znovu podívat na jeho čtyři kroky, tentokrát se zaměříme na to, „co je třeba si zapamatovat v každém kroku“:

| Krok | Obsah | Algoritmy k naučení nazpaměť |
| --- | --- | --- |
| 1. První blok | Sestavení bloku 1×2×3 | 0, čistě pozorování |
| 2. Druhý blok | Sestavení druhého, symetrického bloku | 0, čistě pozorování |
| 3. CMLL | Orientace a permutace čtyř rohů horní vrstvy | 9, všechny lze odvodit z třícyklu |
| 4. LSE | Posledních šest hran | 0, pouze otáčení horní a střední vrstvy (M a U) |

Tři ze čtyř kroků nevyžadují žádné algoritmy. Jediný potřebný CMLL má celkem 42 situací, ale ty nepotřebuješ 42 algoritmů. Třícyklus rohů R U' L' U R' U' L U, který jsme probrali v předchozím článku, spolu s jeho zrcadlovým obrazem a několika variantami, pokryje všechny situace, jen pomaleji.

![Čtyři kroky Roux metody](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Obrázek: Čtyři kroky Roux metody, kde každý krok ukazuje pouze části, které jsou v té fázi již složené: První blok → Druhý blok → CMLL (čtyři rohy horní vrstvy) → LSE (posledních šest hran). Snímek je z panelu „Řešení“ na mé stránce 3D Rubikovy kostky.*

Proto Roux metoda nepotřebuje učení algoritmů: část, kterou je třeba si zapamatovat, je stlačena do malého koutku, zbytek je plně ponechán na pozorování, pochopení a praxi.

## Od 165 sekund k 28 sekundám: Čtyři fáze

Níže je moje skutečná cesta. U každé fáze jsem daty označil začátek a konec a popsal, kde jsem se v dané fázi zasekával a co jsem trénoval. Tvé problematické body se mohou lišit od mých, ale pořadí bude s velkou pravděpodobností stejné.

![Časové rozpětí čtyř fází](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Obrázek: Časové rozpětí čtyř fází. Fáze jedna 3 týdny, fáze dvě 11 dní, fáze tři dva měsíce, fáze čtyři trvá dodnes.*

### Fáze jedna: 165 sekund → 60 sekund (1.–3. týden)

**Data**: Od 7. května do 27. května. První týden průměr 165 sekund, třetí týden 68 sekund.

**Kde se zasekáváš**: První blok je velmi neohrabaný, hledání každého páru rohu a hrany trvá dlouho. A když nováček najde pár, rád se zastaví a dál pozoruje.

![Kde nováček tráví čas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Obrázek: Kde nováček tráví čas. Ruce jsou zastavené, oči hledají po kostce sem a tam; čas strávený „hledáním“ je mnohonásobně delší než čas „otáčení“.*

**Co trénovat**:

Největším nepřítelem v této fázi nejsou pomalé ruce, ale pomalé oči. Čas, který strávíš „hledáním“, je mnohem delší než čas „otáčení“. Proto:

-   Fixuj pozici pro pozorování, neotáčej kostkou. Jak jsem zmínil v předchozím článku, úhel pohledu u Roux metody je pevný. V této fázi se musí „neotáčení kostky“ stát svalovou pamětí. Pokaždé, když chceš kostku otočit, zastav se a zeptej se sám sebe: Vidím z tohoto úhlu dílek, který potřebuji?
-   Pomalé otáčení (slow solving). Neměř čas, ale pohyby musí být plynulé a bez jakýchkoli zastávek. Každý pohyb může být velmi pomalý, ale nesmí dojít k zastavení. Podstatou je, že zatímco ruce provádějí předchozí pohyb, oči se soustředí na další pohyb – to je jádro slow solvingu. Zní to, jako bys zpomaloval, ale ve skutečnosti trénuješ své oči, aby vnímaly vztah mezi aktuální polohou dílku a jeho cílovou polohou.
-   Trénuj pouze první blok. Zamíchej, sestav první blok, znovu zamíchej, znovu sestav první blok. Nepokračuj dál. První blok je nejvolnější krok v Roux metodě a také ten, který nejlépe trénuje pozorování.

V této fázi se neuč žádné nové algoritmy. Tvé úzké místo teď není v algoritmech.

### Fáze dvě: 60 sekund → 40 sekund (4.–5. týden)

**Data**: Od 27. května do 7. června, 11 dní. To byla nejrychlejší fáze poklesu v celém procesu a také ta, ve které jsem nejvíce trénoval, 723 složení v prvním červnovém týdnu.

**Kde se zasekáváš**: Pohyby nejsou plynulé. Kostka se zadrhává.

**Co trénovat**:

V této fázi musíš optimalizovat pohyby v každé etapě a na základě porozumění zvýšit plynulost každého pohybu.

-   Druhý blok. Druhý blok je těžší než první, protože máš k dispozici poloviční prostor a nesmíš zničit již hotový první blok. Klíčové tahy jsou R, r (pravé dvě vrstvy), M, U. V této fázi se musíš naučit používat r a M místo R k přesouvání dílků, aby první blok zůstal vždy neporušený. Optimalizace kroků šetří čas. Například otočit třikrát po směru hodinových ručiček je to samé jako jednou proti směru.
-   Ovládání M-vrstvy. Poslední krok Roux metody je celý o M a U. Plynulost otáčení M-vrstvy přímo určuje tvůj spodní limit. Používej prsteníček nebo prostředníček k tlačení M a začni trénovat rytmus jako M' U M' U.
-   Rozpoznávání CMLL tvarů. V předchozím článku jsme „vyzkoušeli“ čtyři rohy pomocí třícyklu. Nyní je třeba začít nejprve pozorovat a pak jednat: před otočením horní vrstvy se podívej na orientaci žlutých rohů a urči, zda jsou 0, 1, 2 nebo 4 rohy orientované správně, a pak přímo proveď odpovídající pohyb. I s velmi malým počtem algoritmů můžeš dosáhnout velkého zvýšení efektivity, což se vyplatí. Většinu těchto algoritmů není třeba učit se nazpaměť, stačí je provádět a rozumět jim.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pohled při sestavování druhého bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Obrázek vlevo: Pohled při sestavování druhého bloku. První blok je hotový, a k vložení páru rohu a hrany na pravé straně se používají pouze čtyři tahy R, r, M, U, takže první blok zůstává nedotčen. Obrázek vpravo: M' U M, jedna z nejpoužívanějších sekvencí tahů v druhé polovině Roux metody. M-vrstva nahoru, horní vrstva otočit, M-vrstva zpět – tři kroky k výměně páru hran v horní a střední vrstvě.*

Můžeš se podívat na mou [knihovnu algoritmů Roux metody](/cs/projects/rubiks-cube/roux#cmll), stránka CMLL je dvoufázová: 7 orientačních algoritmů + 2 permutační algoritmy, celkem 9. To je volba s nejlepším poměrem cena/výkon pro zvýšení rychlosti, snadno se je naučíš a s každou zvládnutou sadou můžeš zrychlit o 1–2 sekundy. S trochou praxe je brzy ovládneš, některé byly představeny již v předchozím článku a nemusíš si je pamatovat všechny, abys se dostal pod 30 sekund.

![První krok dvoufázového CMLL, sedm orientací rohů](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Obrázek: První krok dvoufázového CMLL, sedm orientací rohů. V pohledu shora je žlutá barva ta, která směřuje nahoru, a malé proužky na vnější straně indikují, že žlutá barva rohu směřuje na stranu. Rozpoznávej tvary podle počtu žlutých rohů: 0 je H nebo Pi, 1 je S nebo AS, 2 je U, T nebo L.*

Po orientaci žlutých rohů můžeš použít tyto dva algoritmy k zarovnání bočních stěn rohů.

Pokud je jedna strana již barevně sjednocena, například červená je již na stejné straně, otoč ji doleva a pak si můžeš vybrat algoritmus pro výměnu sousedních rohů. Pokud žádná strana není barevně sjednocena, zvol algoritmus pro výměnu protilehlých rohů.

![Druhý krok dvoufázového CMLL, dvě pozice rohů](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Obrázek: Druhý krok dvoufázového CMLL, dvě pozice rohů. Vlevo jsou dva rohy na levé straně již sjednocené červenou barvou, použije se výměna sousedních rohů; vpravo není žádná strana sjednocená, použije se výměna diagonálních rohů.*

Můžeš pochopit každou sadu algoritmů pomocí spousty pomalého otáčení. Nepovažuj je za algoritmy, ale spíše za určité pevné sekvence pohybů. Pomalu bys je mohl objevit i sám, ale zde jsou uvedeny, aby ses vyhnul slepým uličkám.

A ještě jedna věc, která má okamžitý účinek víc než jakýkoli trénink: utrať pár korun za novou kostku. Pokud máš stále starou kostku, která při otáčení cvaká a zasekává se, kup si moderní magnetickou 3x3x3 kostku. Nejnovější kostky ti dají pocítit sílu inženýrské optimalizace – plynulé otáčení, automatické zarovnání, téměř žádné zasekávání. Jen výměna kostky může tvůj průměrný čas zrychlit o 15 sekund. Cenově nejvýhodnější volbou je [MoYu RS3 M V5 (MagLev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), kolem dvaceti dolarů, a vydrží ti až do sub-20.

### Fáze tři: 40 sekund → 30 sekund (5.–13. týden, dva měsíce)

**Data**: Od 7. června do 4. srpna. Ao100 se mi podařilo snížit z 39.8 sekund na 29.9 sekund, což trvalo 58 dní. V této fázi se občas mohl objevit čas pod 30 sekund, ale jen s velkým štěstím. A s klesajícím průměrným časem složení se obtížnost zlepšení o jednu sekundu exponenciálně zvyšuje.

![Denní průměrné výsledky](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Obrázek: Denní průměrné výsledky. Po polovině června se křivka téměř vyrovnala a dva měsíce se pohybovala mezi 30–40 sekundami.*

Toto je fáze plošiny. Setká se s ní každý, já jsem tu strávil dva měsíce.

**Kde se zasekáváš**: Skládání šesti hran horní vrstvy je velmi pomalé, nerozumíš logice, pokaždé se spoléháš na opakované pokusy a ztrácíš spoustu času. První a druhý blok stále nejsou dostatečně plynulé.

**Co trénovat**:

-   Rozpoznávání EO. V předchozím článku jsme si řekli, že špatně orientované hrany mají jen několik stavů: 0, ne 0 a ne 4, 4 (2 nahoře, 2 dole), 4 (všechny v horní vrstvě), 4 (3 nahoře, 1 dole). Cílem této fáze je: v okamžiku dokončení bloků, aniž bys počítal, na první pohled rozpoznat, o jaký typ jde. Trénink spočívá v tom, že po zamíchání dojdeš jen k dokončení CMLL, pak se zastavíš, řekneš počet špatně orientovaných hran a pokračuješ.
-   Mnozí lidé zdejším pohybům nerozumí. Fáze EO je nakonec o vytvoření šipkovitého tvaru 3 nahoře, 1 dole, protože z plně složeného stavu je to jen jeden tah od šipkovitého tvaru. Takže, s inverzním myšlením, je to poslední krok před dokončením složení. Bez ohledu na počet špatně orientovaných hran je konečným cílem vytvořit šipku. Pokud jsou nahoře 4 špatně orientované hrany, vyměň jeden pár horních a dolních hran, abys jednu špatně orientovanou hranu přesunul dolů a vytvořil šipku. Pokud jsou 2 nahoře a 2 dole, vyměň jeden pár horních a dolních hran, abys jednu špatně orientovanou hranu přesunul nahoru a vytvořil šipku. Pokud je 1 nahoře a 1 dole, nebo 2 nahoře, použij M' U M, abys se nejprve dostal do předchozích situací a pak vytvořil šipku. Nejlepší kroky pro stav 1/1 můžeš objevit sám díky spoustě pozorování a přemýšlení.
-   Hodně trénuj look-ahead. To je nejdůležitější věc pro posun z 40 na 30 sekund a zároveň ta nejvíce protichůdná intuici: otáčej pomaleji, dívej se dál. Při sestavování prvního bloku se nedívej na dílek, který zrovna vkládáš, ale na to, kde je další dílek. Zpočátku to bude velmi nepříjemné, výsledky se zhorší, ale po týdnu vytrvalosti se to náhle zlepší.
-   CMLL bez váhání. Pokud musíš u každého pohybu vždy přemýšlet, než ho provedeš, pak ti ještě nepatří. Procvič si každý pohyb zvlášť 50krát, dokud se ruka nepohne, jakmile uvidíš tvar.

![Šipkovitý tvar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Obrázek: Šipkovitý tvar. Tři špatně orientované hrany horní vrstvy (zvýrazněné azurovou barvou) tvoří šipku, která směřuje k špatně orientované hraně spodní vrstvy. V tomto stavu stačí jeden M' U M a všechny čtyři se správně orientují. [Otevři si tento stav ve 3D kostce](/cs/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) a můžeš si to krok za krokem prohlédnout.*

![Šest stavů EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Obrázek: Šest stavů EO. Štítky v levém horním rohu ukazují počet špatně orientovaných hran (nahoře / dole), žlutá označuje správně orientované hrany, azurový rámeček špatně orientované hrany. Algoritmus je potřeba jen pro stav šipky, ostatních pět se nejprve transformuje na šipku.*

Pro složení levých a pravých hran, pokud je žlutá nahoře, bílá dole a první blok je červený, pak je třeba dále orientovat žluto-červenou hranu + žluto-oranžovou hranu (zvýrazněno). Hlavní myšlenkou je přesunout žluto-červenou hranu na spodní vrstvu výměnou horní a dolní hrany, stejně tak žluto-oranžovou hranu. Když jsou obě hrany na spodní vrstvě a jsou vůči sobě, pak otočíš horní vrstvu do správné pozice a M2 U nebo M2 U' může složit levé a pravé hrany U-vrstvy.

Abych vám pomohl lépe porozumět, uspořádal jsem všech šest stavů EO na [stránce LSE v knihovně algoritmů Roux metody](/cs/projects/rubiks-cube/roux#lse). Každý obrázek, na který klikneš „zobrazit detail“, se otevře ve 3D kostce v odpovídajícím stavu, přičemž špatně orientované hrany budou automaticky zvýrazněny. Na stejné stránce najdeš i všechny situace pro orientaci UL/UR a poslední čtyři hrany.

Pokles objemu tréninku v této fázi není špatná věc. Fázi plošiny nelze překonat pouhým hromaděním, ale změnou konkrétního zlozvyku. Moje zkušenost je měnit vždy jen jeden.

### Fáze čtyři: 30 sekund → 28 sekund (Po 13. týdnu)

**Data**: Po 4. srpnu. Celý září jsem zaznamenal 122 tréninkových složení, ačkoliv mnoho dalších jsem nezaznamenal. Už jsem z kostky udělal stolní hračku, kterou si jen tak vezmu a hraju si s ní, když mám dobrou náladu, když jsem frustrovaný nebo úzkostný, během pracovních přestávek, když se nudím. Hraní s kostkou se stalo součástí mého života. Ao100 také postupně kleslo z 29.9 na 28.2.

**Kde se zasekáváš**: Není žádné jasné úzké místo, jen nedostatečná plynulost.

**Co trénovat**:

Pokud je tvůj průměrný čas stále nad 30 sekund, jediné, co musíš udělat, je pokračovat v intenzivním tréninku, a ne se učit nové algoritmy.

Neustálým tréninkem look-ahead pomocí slow solvingu budeš stále rychlejší a rychlejší.

Vezmi si kostku a hraj si s ní, kdykoli máš čas. Měj ji na dosah ruky, například na stole, abys si s ní mohl hrát během pracovních přestávek. Také si často nahrávej videa svých složení, abys zjistil, ve které fázi trávíš nejvíce času, a pak to cíleně optimalizuj. To je záměrné cvičení – rychlost tvého pokroku nezávisí na celkovém počtu běžných cvičení, ale na počtu záměrných cvičení.

Pak zjistíš, že jakmile překonáš období 30–35 sekund, tvá rychlost klesne o další úroveň.

Gratuluji ti, v této fázi jsi už pro nováčky velmi pokročilý hráč!

## Cena za neučení algoritmů

Abych byl upřímný, neučení algoritmů není zadarmo.

Fáze CMLL je pomalá. Pokrytí 42 situací devíti algoritmy znamená, že některé situace se musí provést dvakrát. Lidé, kteří umí celé CMLL, jsou v tomto kroku o dvě až tři sekundy rychlejší než já.

Technika M-vrstvy má vyšší nároky. Druhá polovina Roux metody je zcela závislá na M-vrstvě, která se otáčí hůře než R a U, snadno se zasekává a klade vyšší nároky na samotnou kostku.

Neměj obavy z horního limitu. I mezi špičkovými hráči jsou tací, kteří se s Roux metodou dostali do světové špičky; samotná metoda nemá žádný horní limit. Ale abys se dostal pod 15 sekund, s velkou pravděpodobností budeš muset doplnit všech 42 CMLL algoritmů. To je ale záležitost jiné fáze. Pro dosažení sub-30 to není potřeba.

Navíc téměř každý světový hráč, který skládá jednoruč, používá Roux metodu, protože je skutečně velmi vhodná i pro jednoruční skládání.

**Nejrychlejší výsledky s Roux metodou na oficiálních soutěžích (WCA):**

-   Jeden sloh 4.11 sekundy, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipíny), Valenzuela Cubing Open 2023, uznaný jako nejrychlejší oficiální jednotlivý sloh s Roux metodou ([rekonstrukce videa](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Průměr 5.98 sekundy, taktéž on, v roce 2019, tehdy asijský rekord a zároveň třetí oficiální průměr pod 6 sekund v historii ([WCA profil](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Je také [držitelem světového rekordu v jednoručním skládání](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): průměr 8.09, jednotlivý sloh 6.05 (2024). V komunitě jednoručního skládání je Roux metoda všeobecně považována za optimální řešení.

Myslím, že tato dohoda se vyplatí. Za dvě až tři sekundy u CMLL získáš: vědomí, co děláš v každém kroku, nezapomeneš to, i když se kostky nedotkneš tři měsíce, a dokážeš vyřešit jakoukoli neznámou kostku.

## Shrnutí

![Složeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Dostat se od prvního složení pod 30 sekund není proces učení algoritmů nazpaměť, ale proces tréninku koordinace rukou, očí a mozku.

Čtyři fáze, čtyři věci: Nejprve se nauč pozorovat bez otáčení kostky, pak se nauč sestavovat druhý blok, aniž bys zničil první, pak se nauč dívat na další krok, zatímco děláš ten současný, a nakonec nech ruce, aby dohnaly oči.

Algoritmy nejsou zdrojem rychlosti. Pozorování je.

Nauč se budovat pozitivní zpětnou vazbu z pokroku v každé fázi. I cvičení plynulosti nemusí být nudné, zvláště když objevíš radost z dalšího překonání rekordu. Zvláště v počátečních a středních fázích budeš každý den zažívat radost z překonávání rekordů.

Všechny algoritmy a situace zmíněné v článku jsem shromáždil v [knihovně algoritmů Roux metody](/cs/projects/rubiks-cube/roux). Když se zasekneš, vrať se a podívej se.

Svět Rubikovy kostky je plný nekonečné zábavy, přeji ti, ať se ti daří.

## Příloha 1: Kontrolní seznam cvičení pro jednotlivé fáze

**Fáze jedna (> 60 sekund)**

-   Fixuj pozici pro pozorování, neotáčej kostkou během celého složení
-   Najdi další požadovanou barvu bez zastavení
-   Slow solving, u každého kroku si řekni, co děláš
-   Trénuj pouze první blok, opakuj 50krát

**Fáze dvě (60 → 40 sekund)**

-   Druhý blok jen s R, r, M, U, aniž bys se dotkl prvního bloku
-   Cvičení dvoufázového CMLL
-   Rytmické cvičení M' U M' U, 5 minut denně

**Fáze tři (40 → 30 sekund)**

-   Po dokončení CMLL se zastav a na první pohled řekni počet špatně orientovaných hran
-   Slow solving + look-ahead: oči se vždy dívají na další dílek
-   Alespoň 20 kvalitních složení denně

**Fáze čtyři (< 30 sekund)**

-   Nahrávej videa a hledej zastavení
-   Finger tricks: R U R' U' jednoprstová technika, M-vrstva prsteníčkem
-   20 kvalitních složení denně, bez hromadění objemu

## Příloha 2: Nástroje

-   **csTimer**: [cstimer.net](https://cstimer.net/). Zapni si statistiky Ao5 / Ao12 / Ao100. Ao100 je tvá skutečná úroveň, jednotlivé časy jsou o štěstí.
-   **3D Rubikova kostka**: [philoli.com/zh/projects/rubiks-cube](/cs/projects/rubiks-cube/). Všechny algoritmy z tohoto článku si zde můžeš zadat a prohlédnout si animace.
-   **Knihovna algoritmů Roux metody pro začátečníky**: [philoli.com/zh/projects/rubiks-cube/roux](/cs/projects/rubiks-cube/roux). Běžné vkládací techniky pro první a druhý blok, 9 algoritmů dvoufázového CMLL, a všechny situace LSE (EO, UL/UR, poslední čtyři hrany). Každý obrázek lze otevřít ve 3D kostce, automaticky skryje irelevantní dílky a zvýrazní hrany, které se mají pohybovat.
-   **csTimer Tréninkový analyzátor**: [philoli.com/zh/projects/rubiks-cube/analyzer](/cs/projects/rubiks-cube/analyzer). Přetáhni soubor exportovaný z csTimeru a uvidíš vývoj svých výsledků, křivky Ao5/Ao12/Ao100, posuny PB, tabulku milníků (kdy jsi poprvé dosáhl sub-60, sub-40, sub-30) a křivku tréninku podle Power Law. Všechny grafy v tomto článku pocházejí odsud. Data jsou zpracovávána pouze v tvém prohlížeči a nejsou nahrávána. Pokud nemáš exportovaný soubor, můžeš nejprve načíst mých 4441 dat a podívat se na efekty.

*Tento článek obsahuje affiliate odkazy na Amazon: Při nákupu přes odkaz získám malou provizi, tvá cena zůstane stejná.*

## Další čtení

-   [Jak složit Rubikovu kostku bez algoritmů: Porozumí i školák](/cs/blog/solve-rubiks-cube-without-formulas)
