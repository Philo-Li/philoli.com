---
layout: blog
title: "Jak se dostat pod 30 sekund na Rubikově kostce bez učení algoritmů: Pochopí i školák"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Dostat se z prvního složení do Ao100 pod 30 sekund mi trvalo 89 dní, aniž bych se naučil jediný algoritmus CFOP. Rozebírám 4441 časových záznamů, abych popsal čtyři fáze: kde se v každé fázi zaseknete, co trénovat a proč Rouxova metoda nevyžaduje memorování algoritmů."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Čtyři fáze od 165 sekund k 28 sekundám" />
</figure>

*Obrázek: Čtyři fáze od 165 sekund k 28 sekundám. Fáze dva zaznamenala nejrychlejší pokles, fáze tři byla nejdelším obdobím stagnace.*

V mém předchozím článku [„Jak složit Rubikovu kostku bez učení algoritmů“](/zh/blog/solve-rubiks-cube-without-formulas/) jste se naučili, jak složit Rubikovu kostku bez memorování algoritmů, a to za pomoci logiky komutátorů. Tento článek získal mnoho nadšených ohlasů.

Pokud jste se podle něj řídili, pravděpodobně vám to nyní zabere dvě až tři minuty. Možná se u toho trochu potíte, ale kostku složíte. A pak se vynoří nová otázka: Jak to zrychlit?

Když si vyhledáte „rychloskládání Rubikovy kostky“, všechny tutoriály vám řeknou totéž: Pokud se chcete dostat pod 30 sekund, musíte se naučit algoritmy CFOP. 41 pro F2L, 57 pro OLL, 21 pro PLL – celkem 119 algoritmů. I kdyby se F2L dělalo intuitivně, 78 algoritmů pro poslední vrstvu se nevyhnete. Bez jejich znalosti se rychlosti nedočkáte.

Tento článek vám ukáže, že se můžete dostat pod 30 sekund, aniž byste se učili jediný algoritmus.

<!--more-->

Od 7. května 2026, kdy jsem poprvé složil Rubikovu kostku, do 4. srpna, kdy jsem se dostal s průměrem Ao100 pod 30 sekund, uplynulo 89 dní. Během té doby jsem se nenaučil jediný CFOP algoritmus, jen jsem si s kostkou hrál ve volném čase. Toto jsou moje zaznamenané časové údaje ze 4441 složení.

![4441 složení a jejich časové křivky](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Obrázek: Křivka výsledků pro 4441 složení. Šedá čára znázorňuje čas každého jednotlivého složení, tmavá čára je trend Ao100 a červené tečky ukazují okamžiky, kdy jsem překonal svůj osobní rekord. Nejlepší Ao100 byl 28,22 sekundy.*

Díky vědomému a aktivnímu tréninku a udržování frekvence cvičení se kdokoli může během několika měsíců dostat z nuly pod 30 sekund.

Co znamená dostat se pod 30 sekund? Na [prvním mistrovství světa v Rubikově kostce v roce 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) byl vítězný čas 22,95 sekundy, což je také první oficiální světový rekord uznaný WCA. Desáté místo obsadila Jessica Fridrich, tvůrkyně metody CFOP, o které budeme hovořit v další sekci, s časem 29,11 sekundy. Jinými slovy, to, co dnes amatér natrénuje za několik měsíců na sub-30, by ho v roce 1982 dostalo do světové top desítky.

Dále se s vámi podělím o to, jak jsem toho dosáhl krok za krokem, a představím vám kompletní tréninkovou metodu.

## Proč se ve světě rychloskládání učí algoritmy nazpaměť?

Nejprve si ujasněme jednu věc: Proč jsou rychlost a memorování algoritmů v myslích lidí tak pevně spjaty?

Na počátku 80. let 20. století uspořádala česko-americká profesorka Jessica Fridrich (později se věnovala digitální forenzice na Binghamton University) vrstvovou metodu řešení, která se později stala známou jako CFOP (Cross, F2L, OLL, PLL). Myšlenkou této metody je vyčerpávající seznam všech možných situací na horní vrstvě, přičemž každé situaci je přiřazen optimální algoritmus. Rozpoznáte situaci, provedete algoritmus a nemusíte přemýšlet.

![Jessica Fridrich a Rubikova kostka v její kanceláři](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Obrázek: Jessica Fridrich a Rubikova kostka v její kanceláři. V roce 1982 získala na prvním mistrovství světa 10. místo s časem 29,11 sekundy. Metoda CFOP je pojmenována po ní (Fridrich Method).*

Tato metoda je mimořádně rychlá. Téměř všechny světové rekordy jsou dosaženy pomocí CFOP. Proto ji učí všechny tutoriály, mluví o ní všechna videa, a „učit se rychloskládání“ se rovná „učit se CFOP“, což se zase rovná naučit se 119 algoritmů.

Všimněte si ale, že „memorování algoritmů“ je specifickým rysem metody CFOP, nikoli rysem samotné rychlosti. Důvodem, proč se u CFOP memoruje, je, že si zvolila cestu vyčerpávajícího seznamu. Vyčerpávající seznam vyžaduje paměť, a to je cena, kterou platí.

Existuje metoda, která se této vyčerpávající cestě vyhýbá? Ano, existuje.

## Metoda bez memorování algoritmů: Rouxova stavba bloků

V roce 2003 představil Francouz Gilles Roux zcela odlišný přístup. Místo skládání vrstvu po vrstvě se nejprve postaví dva „bloky“ 1×2×3 (levý a pravý), pak se vyřeší čtyři rohy horní vrstvy a nakonec zůstane jen šest hran, které se dokončí otáčením střední vrstvy M a horní vrstvy U.

![Gilles Roux v soutěži](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Obrázek: Gilles Roux v soutěži. Snímek z raného soutěžního videa, obraz byl AI restaurován a zvětšen.*

V předchozím článku jsme si již ukázali, jak kostku složit pomocí tohoto rámce. Nyní si znovu projdeme jeho čtyři kroky, tentokrát se zaměříme na to, „co je potřeba si v každém kroku zapamatovat“:

| Krok | Obsah | Potřebné algoritmy k zapamatování |
| --- | --- | --- |
| 1. Levý blok | Sestavte blok 1×2×3 | 0, čistě pozorování |
| 2. Pravý blok | Symetricky postavte další | 0, čistě pozorování |
| 3. CMLL | Srovnání čtyř rohových dílků horní vrstvy | 9, všechny lze odvodit z 3-cyklů |
| 4. LSE | Posledních šest hran | 0, pouze otáčení horní a střední vrstvy (M a U) |

Tři ze čtyř kroků nevyžadují žádné algoritmy. Jediný potřebný CMLL má celkem 42 situací, ale nepotřebujete se jich učit všech 42. Třícyklus rohových kostek R U' L' U R' U' L U, o kterém jsme mluvili v předchozím článku, spolu s jeho zrcadlovým obrazem a několika variantami, pokryje všechny situace, jen to bude trochu pomalejší.

![Čtyři kroky Rouxovy metody](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Obrázek: Čtyři kroky Rouxovy metody, přičemž v každém kroku jsou zobrazeny pouze ty dílky, které jsou již na svém místě: Levý blok → Pravý blok → CMLL (čtyři rohy horní vrstvy) → LSE (posledních šest hran). Snímek z panelu „Řešení“ mé stránky s 3D Rubikovou kostkou.*

Proto Roux nevyžaduje memorování algoritmů: Část, která vyžaduje zapamatování, je stlačena do velmi malého koutku, zbytek je ponechán na pozorování, porozumění a zručnosti.

## Od 165 sekund k 28 sekundám: Čtyři fáze

Níže je popsána moje skutečná cesta. U každé fáze jsem uvedl počáteční a koncové údaje, a pak jsem vysvětlil, kde jsem se v dané fázi zasekával a co jsem trénoval. Vaše „záseky“ se mohou lišit, ale pořadí bude s největší pravděpodobností stejné.

![Časové rozpětí čtyř fází](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Obrázek: Časové rozpětí čtyř fází. Fáze jedna trvala 3 týdny, fáze dva 11 dní, fáze tři dva měsíce, fáze čtyři trvá dodnes.*

### Fáze jedna: 165 sekund → 60 sekund (1.–3. týden)

**Údaje**: Od 7. do 27. května. První týden průměr 165 sekund, třetí týden 68 sekund.

**Kde jsem se zasekával**: Levý blok byl velmi nezkušený, hledání každé sady barevných dílků trvalo dlouho. A když se sada našla, začátečník se vždy rád zastavil a pokračoval v pozorování.

![Kam začátečníci investují svůj čas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Obrázek: Kam začátečníci investují svůj čas. Ruce jsou nehybné, oči hledají po kostce tam a zpět, čas strávený „hledáním“ je mnohonásobně delší než čas strávený „otáčením“.*

**Co trénovat**:

Největším nepřítelem v této fázi není pomalá ruka, ale pomalé oči. Čas, který strávíte „hledáním“, je mnohem delší než čas „otáčením“. Proto:

- **Fixní pozice pro pozorování, neotáčejte kostkou.** Jak bylo zmíněno v předchozím článku, pozorovací úhel u Rouxovy metody je pevný. V této fázi je cílem, aby se „neotáčení kostky“ stalo svalovou pamětí. Pokaždé, když budete chtít kostku otočit, zastavte se a zeptejte se sami sebe: Vidím z tohoto úhlu dílek, který potřebuji?
- **Pomalé otáčení.** Nepoužívejte časomíru, ale pohyby musí být plynulé, bez jakýchkoli zastávek. Každý pohyb může být velmi pomalý, ale nesmí dojít k žádnému zastavení. Podstatou je, že zatímco ruka provádí předchozí pohyb, oči se soustředí na další. To je jádro pomalého otáčení. Ačkoli to zní, jako byste zpomalovali, ve skutečnosti trénujete své oči, aby viděly vztah mezi polohou dílku a místem, kam má jít.
- **Trénujte pouze první blok.** Zamíchejte, postavte levý blok, znovu zamíchejte, znovu postavte levý blok. Nepokračujte dál. První blok je nejvolnější krok v Rouxově metodě a zároveň krok, který nejlépe trénuje pozorování.

V této fázi se neučte žádné nové algoritmy. Vaše současné úzké místo není v algoritmech.

### Fáze dva: 60 sekund → 40 sekund (4.–5. týden)

**Údaje**: Od 27. května do 7. června, 11 dní. Toto bylo nejrychlejší období poklesu v celém procesu a také období, kdy jsem trénoval nejvíce – v prvním červnovém týdnu 723krát.

**Kde jsem se zasekával**: Nespojité pohyby. Zasekávání kostky.

**Co trénovat**:

V této fázi musíte optimalizovat pohyby v každém kroku a na základě porozumění zvýšit plynulost každého pohybu.

- **Druhý blok.** Druhý blok je těžší než první, protože je k dispozici o polovinu méně prostoru a již dokončený levý blok nesmí být narušen. Klíčové pohyby jsou R, r (pravé dvě vrstvy), M, U. V této fázi se musíte naučit používat r a M místo R k přesouvání dílků, aby levý blok nikdy nebyl porušen. Optimalizace posloupnosti pohybů znamená úsporu času. Například otočit třikrát ve směru hodinových ručiček je totéž jako otočit jednou proti směru hodinových ručiček.
- **Plynulé používání vrstvy M.** Poslední krok Rouxovy metody je celý o M a U. To, jak plynule otáčíte vrstvou M, přímo určuje váš „spodní limit“ rychlosti. Pomocí prsteníčku nebo prostředníčku tlačte M a začněte trénovat rytmus jako M' U M' U.
- **Rozpoznávání CMLL tvarů.** V předchozím článku jsme rohy „zkoušeli“ pomocí třícyklů. Nyní je čas začít nejprve pozorovat a pak jednat: Před otočením horní vrstvy se podívejte na orientaci žlutých rohů, určete, zda jsou 0, 1, 2 nebo 4 „dobré“ rohy, a pak přímo proveďte odpovídající pohyb. I s velmi malým počtem algoritmů můžete dosáhnout výrazného zvýšení efektivity, což se velmi vyplatí. Velká část těchto algoritmů nevyžaduje drilování nazpaměť; porozumíte jim při provádění.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pohled při stavbě pravého bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Obrázek vlevo: Pohled při stavbě pravého bloku. Levý blok je již dokončen. Pouze pomocí čtyř tahů R, r, M, U se pravé rohy a hrany vsunou na místo, přičemž levý blok se nikdy nedotkne. Obrázek vpravo: M' U M, jedna z nejčastěji používaných sekvencí tahů v druhé polovině Rouxovy metody. Střední vrstva nahoru, otočení horní vrstvy, střední vrstva zpět – tři kroky pro výměnu páru hran mezi horní a střední vrstvou.*

Můžete se podívat na mou kompilaci [databáze algoritmů Rouxovy metody](/zh/projects/rubiks-cube/roux#cmll). Stránka CMLL je dvoufázová: 7 algoritmů pro orientaci + 2 algoritmy pro permutaci, celkem 9. To je volba s nejlepším poměrem cena/výkon pro zvýšení rychlosti. Snadno se naučíte, a každá zvládnutá sada vám ušetří asi 1–2 sekundy. S trochou praxe si je rychle osvojíte a některé z nich už byly představeny v předchozím článku. Nemusíte si pamatovat všechny, abyste se dostali pod 30 sekund.

![První krok dvoufázového CMLL, sedm orientací rohových dílků](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Obrázek: První krok dvoufázového CMLL, sedm orientací rohových dílků. V pohledu shora je žlutá barva směřující nahoru, zatímco malé proužky na vnější straně indikují, že žlutá barva rohu směřuje do strany. Rozpoznávejte tvary podle počtu žlutých rohů: 0 je H nebo Pi, 1 je S nebo AS, 2 je U, T nebo L.*

Po srovnání žluté barvy na horní straně můžete použít tyto dva algoritmy k srovnání bočních stran rohových dílků.

Pokud již jedna strana má stejnou barvu, například červená je již na stejné straně, otočte ji doleva a pak můžete zvolit algoritmus pro výměnu sousedních rohů. Pokud žádná strana nemá stejnou barvu, zvolte algoritmus pro výměnu protilehlých rohů.

![Druhý krok dvoufázového CMLL, dvě pozice rohových dílků](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Obrázek: Druhý krok dvoufázového CMLL, dvě pozice rohových dílků. Na levém obrázku jsou červené barvy dvou levých rohů již shodné, použije se výměna sousedních rohů; na pravém obrázku žádná strana není shodná, použije se výměna protilehlých rohů.*

Každou sadu algoritmů můžete pochopit pomocí velkého množství pomalých otočení. Nevnímejte je jako algoritmy, ale spíše jako určité pevné posloupnosti pohybů, které byste pomalým zkoumáním mohli sami objevit. Jejich uvedení zde vám však ušetří spoustu zbytečných oklik.

Ještě jedna věc, která má okamžitý efekt, lepší než jakékoli cvičení: investujte do nové Rubikovy kostky. Pokud máte stále tu starou, která při otáčení cvaká a zasekává se, kupte si moderní 3x3 s magnety. Nejnovější kostky vám dají pocítit sílu technické optimalizace – otáčení je plynulé, automaticky se srovnávají a téměř se nezasekávají. Jen samotná výměna kostky může snížit váš průměrný čas o 15 sekund. Skvělou volbou s ohledem na poměr cena/výkon je [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), která stojí kolem dvaceti dolarů a vydrží vám až do sub-20.

### Fáze tři: 40 sekund → 30 sekund (5.–13. týden, dva měsíce)

**Údaje**: Od 7. června do 4. srpna. Průměr Ao100 jsem brousil z 39,8 sekundy na 29,9 sekundy, což trvalo 58 dní. V této fázi se občas mohly objevit časy pod 30 sekund, ale jen s velkým štěstím. Navíc s klesajícím průměrným časem složení se obtížnost zlepšení o 1 sekundu exponenciálně zvyšuje.

![Denní průměrné časy](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Obrázek: Denní průměrné časy. Po polovině června se křivka téměř vyrovnala a dva měsíce se pohybovala mezi 30–40 sekundami.*

Toto je fáze stagnace. Potká ji každý, já jsem v ní strávil dva měsíce.

**Kde jsem se zasekával**: Řešení šesti hran v horní vrstvě bylo velmi pomalé, nerozuměl jsem logice a pokaždé jsem se spoléhal na opakované pokusy, což plýtvalo spoustou času. Levý a pravý blok stále nebyly dostatečně plynulé.

**Co trénovat**:

- **Rozpoznávání EO (Edge Orientation).** Jak bylo zmíněno v předchozím článku, existuje jen několik případů „špatných“ hran: 0, ne-0 ne-4, 4 (2 nahoře, 2 dole), 4 (všechny nahoře), 4 (3 nahoře, 1 dole). Cílem této fáze je: v okamžiku, kdy je blok postaven, okamžitě rozpoznat, o který případ se jedná, aniž byste museli počítat. Metoda cvičení spočívá v tom, že po zamíchání dojdete pouze k dokončení CMLL, pak se zastavíte, řeknete počet špatných hran a pokračujete.
- Mnoho lidí nerozumí pohybům v této části. Fáze EO je nakonec o vytvoření tvaru šipky se 3 špatnými hranami nahoře a 1 dole. Protože z plně složeného stavu je to jen jeden tah od tvaru šipky, s reverzním myšlením je to poslední krok před dokončením složení. Takže bez ohledu na počet špatných hran je cílem vždy vytvořit šipku. Pokud jsou nahoře 4 špatné hrany, vyměňte jeden pár horních a dolních hran, abyste jednu špatnou hranu přesunuli dolů a vytvořili šipku. Pokud jsou 2 nahoře a 2 dole, vyměňte jeden pár horních a dolních hran, abyste jednu špatnou hranu přesunuli nahoru a vytvořili šipku. Pokud je 1 nahoře a 1 dole, nebo 2 nahoře, použijte M' U M, abyste nejprve dosáhli předchozích situací a pak vytvořili šipku. Můžete sami prozkoumat optimální kroky pro případ 1/1 pomocí intenzivního pozorování a přemýšlení.
- **Intenzivní trénink předvídání (Look-ahead).** Toto je nejdůležitější věc pro přechod ze 40 na 30 sekund a zároveň nejvíce protiintuitivní: otáčejte pomaleji, dívejte se dál. Při stavbě levého bloku se nedívejte na dílek, který právě vkládáte, ale na to, kde je další dílek. Zpočátku to bude velmi nepříjemné, výsledky se zhorší, ale po týdnu vytrvalosti se náhle zlepší.
- **CMLL bez váhání.** Pokud nad každým pohybem musíte vždy přemýšlet, než ho provedete, pak to ještě není „vaše“. Cvičte každý pohyb jednotlivě 50krát, dokud se vaše ruka nepohne, jakmile uvidíte tvar.

![Tvar šipky](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Obrázek: Tvar šipky. Tři špatné hrany v horní vrstvě (zvýrazněné azurovou barvou) tvoří šipku směřující k jedné špatné hraně ve spodní vrstvě. V tomto okamžiku je jeden M' U M dokáže všechny čtyři srovnat najednou. [Otevřete tento stav v 3D Rubikově kostce](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), abyste viděli krok za krokem.*

![Šest EO tvarů](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Obrázek: Šest EO tvarů. Popisek v levém horním rohu ukazuje počet špatných hran (nahoře / dole), žluté jsou dobré hrany, azurové rámečky jsou špatné hrany. Pouze tvar šipky vyžaduje algoritmus, ostatních pět se nejprve transformuje na šipku.*

Pro složení levých a pravých hran, s žlutou nahoře, bílou dole a levým blokem jako červeným, je potřeba dále srovnat žluto-červenou hranu + žluto-oranžovou hranu (zvýrazněné oblasti). Hlavní myšlenkou je najít způsob, jak žluto-červenou hranu přesunout na spodní vrstvu výměnou horních a dolních hran, a žluto-oranžovou hranu také přesunout na spodní vrstvu. Obě hrany by pak měly být na spodní vrstvě proti sobě. Poté otočte horní vrstvu do správné pozice a M2 U nebo M2 U' dokončí složení levých a pravých hran v U vrstvě.

Abych vám pomohl lépe porozumět, uspořádal jsem všech šest EO tvarů na [stránce LSE v databázi algoritmů Rouxovy metody](/zh/projects/rubiks-cube/roux#lse). Kliknutím na „Zobrazit detaily“ u každého obrázku se otevře odpovídající stav v 3D Rubikově kostce, kde jsou špatné hrany automaticky zvýrazněny. Na stejné stránce najdete i všechny situace pro následné UL/UR srovnání a poslední čtyři hrany.

Pokles objemu tréninku v této fázi není na škodu. Fázi stagnace nelze překonat pouhým hromaděním tréninku, ale spíše změnou konkrétního špatného návyku. Moje zkušenost je měnit vždy jen jeden.

### Fáze čtyři: 30 sekund → 28 sekund (po 13. týdnu)

**Údaje**: Po 4. srpnu. Celý září jsem zaznamenal 122 cvičení, i když mnoho cvičení nebylo zaznamenáno. Rubikovu kostku jsem si osvojil jako hračku na stole, kterou si vezmu, když se mi zachce. Hraji si s ní, když mám dobrou náladu, když jsem frustrovaný nebo úzkostný, během pracovních přestávek, když se nudím – prostě jsem ji integroval do svého života. Ao100 se také postupně snížil z 29,9 na 28,2.

**Kde jsem se zasekával**: Žádné jasné úzké místo, jen nedostatečná plynulost.

**Co trénovat**:

Pokud je vaše průměrná rychlost stále nad 30 sekund, jediné, co musíte udělat, je pokračovat v intenzivním tréninku, a ne se učit nové algoritmy.

Neustálým tréninkem předvídání pomocí pomalého otáčení budete stále rychlejší.

Kdykoli máte chvilku, vezměte si kostku a hrajte si s ní. Mějte ji na dosah ruky, například na pracovním stole, abyste si s ní mohli hrát ve volných chvílích. Můžete si také často nahrávat svá složení, abyste zjistili, ve které fázi strávíte nejvíce času, a poté prováděli cílenou optimalizaci. To je záměrný trénink – rychlost vašeho pokroku nezávisí na celkovém počtu běžných cvičení, ale na počtu záměrných cvičení.

Pak zjistíte, že poté, co překonáte fázi stagnace mezi 30–35 sekundami, vaše rychlost klesne o další úroveň.

Gratuluji! V této fázi už jste v očích začátečníků velmi impozantním hráčem!

## Cena za nesmemorování algoritmů

Zde je třeba být upřímný. Nezapamatování algoritmů není zadarmo.

Fáze CMLL je pomalá. Pokrytí 42 situací 9 algoritmy znamená, že některé situace je třeba provést dvakrát. Ti, kdo znají celou sadu CMLL, jsou v tomto kroku o dvě až tři sekundy rychlejší než já.

Technika vrstvy M má vysokou obtížnost. Druhá polovina Rouxovy metody zcela závisí na vrstvě M, která se otáčí hůře než R a U, snadno se zasekává a klade vyšší nároky na samotnou kostku.

Nebojte se o horní limit. Někteří špičkoví hráči používají Rouxovu metodu a dostávají se do světové elity, samotná metoda nemá horní limit. Ale abyste se dostali pod 15 sekund, s vysokou pravděpodobností budete muset doplnit všech 42 CMLL algoritmů. To je však záležitost jiné fáze. Pro dosažení 30 sekund to není potřeba.

A téměř každý světový hráč, který skládá jednou rukou, používá metodu Roux, protože je skutečně velmi vhodná i pro manipulaci jednou rukou.

**Nejrychlejší oficiální časy s Rouxovou metodou (WCA):**

- Jednotlivý čas 4,11 sekundy, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipíny), Valenzuela Cubing Open 2023, uznán jako nejrychlejší oficiální jednotlivý čas s Rouxovou metodou ([rekonstrukční video](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Průměr 5,98 sekundy, rovněž on, 2019, tehdy asijský rekord a třetí oficiální průměr pod 6 sekund v historii ([WCA záznam](https://www.worldcubeassociation.org/persons/2017VILL41))
- Je také [držitelem světového rekordu v jednoručním skládání](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): průměr 8,09, jednotlivý čas 6,05 (2024). V komunitě jednoručního skládání je Roux obecně považována za optimální metodu.

Myslím, že tato dohoda je velmi výhodná. Za dvě nebo tři sekundy navíc v čase CMLL získáte to, že víte, co děláte v každém kroku, nezapomenete to, i když se kostky nedotknete tři měsíce, a dokážete vyřešit jakoukoli neznámou kostku.

## Shrnutí

![Složeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Dostat se ze schopnosti složit kostku pod 30 sekund není proces memorování algoritmů, ale proces tréninku koordinace rukou, očí a mozku.

Čtyři fáze, čtyři věci: Nejprve se naučte dívat se, aniž byste otáčeli kostkou, pak se naučte stavět pravý blok, aniž byste narušili levý, pak se naučte dívat se na další krok, zatímco děláte ten aktuální, a nakonec nechte ruce, aby dohnaly oči.

Algoritmy nejsou zdrojem rychlosti. Pozorování ano.

Naučte se vytvářet pozitivní zpětnou vazbu prostřednictvím pokroku v každé fázi. I cvičení plynulosti pak nemusí být tak nudné, zvláště když objevíte to překvapení, že jste opět překonali rekord. Zvláště v počátečních a středních fázích zažijete každý den radost z překonávání rekordů.

Všechny algoritmy a situace zmíněné v článku jsem uspořádal v [databázi algoritmů Rouxovy metody](/zh/projects/rubiks-cube/roux). Když se zaseknete, vraťte se sem a podívejte se.

Svět Rubikových kostek je nekonečně zábavný, přeji vám příjemnou zábavu.

## Příloha 1: Kontrolní seznam tréninku pro jednotlivé fáze

**Fáze jedna (> 60 sekund)**

- Fixní pozice pro pozorování, neotáčejte kostkou během celého skládání
- Najděte další požadovanou barvu bez zastavení
- Pomalé otáčení, u každého kroku si řekněte záměr
- Trénujte pouze levý blok, opakujte 50krát

**Fáze dva (60 → 40 sekund)**

- Pravý blok používejte pouze R, r, M, U, nedotýkejte se levého bloku
- Trénink dvoufázového CMLL
- Rytmické cvičení M' U M' U, 5 minut denně

**Fáze tři (40 → 30 sekund)**

- Zastavte po dokončení CMLL a okamžitě řekněte počet špatných hran
- Pomalé otáčení + předvídání: oči vždy sledují další dílek
- Nejméně 20 kvalitních složení denně

**Fáze čtyři (< 30 sekund)**

- Nahrávejte si videa, abyste našli zastávky
- Technika: R U R' U' s jedním prstem, M vrstva prsteníčkem
- 20 kvalitních složení denně, ne hromadění

## Příloha 2: Nástroje

- **csTimer**: [cstimer.net](https://cstimer.net/). Otevřete statistiky Ao5 / Ao12 / Ao100, Ao100 je vaše skutečná úroveň, jednotlivé časy jsou o štěstí.
- **3D Rubikova kostka**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Všechny algoritmy z tohoto článku lze zadat zde a sledovat animaci.
- **Databáze algoritmů Rouxovy metody pro začátečníky**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Běžné vkládací rutiny pro levý a pravý blok, 9 algoritmů dvoufázového CMLL, všechny situace pro LSE (EO, UL/UR, poslední čtyři hrany). Každý obrázek lze otevřít v 3D Rubikově kostce, která automaticky skryje irelevantní dílky a zvýrazní hrany, které se mají pohybovat.
- **Analyzátor tréninku csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Přetáhněte sem exportovaný soubor z csTimeru a uvidíte vývoj svých výsledků, křivky Ao5/Ao12/Ao100, posuny osobních rekordů (PB), tabulku milníků (kdy jste poprvé dosáhli sub-60, sub-40, sub-30) a křivku tréninku podle zákona síly. Všechny grafy v tomto článku pocházejí odsud. Data jsou zpracovávána pouze ve vašem prohlížeči a nejsou nahrávána. Pokud nemáte exportovaný soubor, můžete nejprve načíst mých 4441 dat, abyste viděli, jak to funguje.

*Tento článek obsahuje affiliate odkazy Amazonu: Pokud nakoupíte přes odkaz, získám malou provizi, vaše cena zůstane stejná.*

## Další četba

- [Jak složit Rubikovu kostku bez učení algoritmů: Pochopí i školák](/zh/blog/solve-rubiks-cube-without-formulas)
