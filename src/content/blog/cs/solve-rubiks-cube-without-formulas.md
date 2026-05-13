---
layout: blog
title: "Jak složit Rubikovu kostku bez memorování algoritmů: Pochopí i školák"
date: 2026-05-09 12:00:00
tags:
  - Rubikova kostka
  - návod
  - teorie grup
  - matematika
  - Roux metoda
categories: 日常折腾
description: Naučte se krok za krokem složit Rubikovu kostku 3x3 od základů, bez memorování jakýchkoli algoritmů, za použití principů komutátorů z teorie grup a Rouxovy mostové metody.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Kompletně složená Rubikova kostka" />
</figure>

Možná jste začátečník v Rubikově kostce a nikdy jste ji celou nesložili.

Takzvané tutoriály na trhu vám obvykle jen předkládají hromadu podivných algoritmů a říkají, že když uděláte tohle a pak tamto, kostka se složí. Ale i po dokončení stále nerozumíte, proč tomu tak je.

Tento článek bude vaší záchranou. Naučíte se, jak složit kostku od nuly, aniž byste si museli pamatovat jedinou formuli. Pochopíte její původ a zjistíte, jak Rubikova kostka funguje. Provedu vás krok za krokem od teorie k praxi, abyste ji celou složili, a naučím vás, jak správně pozorovat.

Možná to bude poprvé, co se vám osobně podaří složit celou Rubikovu kostku.

<!--more-->

## Zrození Rubikovy kostky

Proč má Rubikova kostka takovou fascinaci? Nejprve si povězme, jak vlastně vznikla.

V roce 1974 maďarský profesor architektury Ernő Rubik, aby svým studentům názorně ukázal, jak se mohou jednotlivé části pohybovat nezávisle, aniž by narušily celkovou strukturu, vytvořil z dřeva první prototyp. Šest stran obarvil různými barvami a Rubikova kostka se zrodila.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubikův prototyp kostky" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portrét Ernő Rubika" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Ohromující počet kombinací

Rubikova kostka 3x3 má 8 rohových dílků, 12 hranových dílků a 6 středových dílků, což dohromady tvoří 26 viditelných dílků. Ve skutečnosti se ale může pohybovat 20 dílků, kromě šesti středových dílků každé strany.

Kolik má tedy celkem stavů? **4,3 × 10¹⁹**.

Co to znamená? Tento počet stavů je větší než počet zrnek písku na Zemi. Kdybychom zkusili miliardu stavů za sekundu, trvalo by to přes **1300 let**, než bychom je všechny prozkoumali. Kdybychom každý stav zapsali na papír a naskládali je na sebe, tloušťka by odpovídala 14 000 cestám tam a zpět ze Země na Slunce.

Malá Rubikova kostka 3x3 je opravdu něco. Díky své novosti, zábavnosti a nekonečným variacím si hned po uvedení na trh získala obrovskou popularitu a přilákala nadšence z celého světa, aby si ji vyzkoušeli. Brzy se rozvinuly soutěže v Rubikově kostce, různé způsoby hraní (rychloskládání Speedsolving, skládání poslepu Blindfolded, jednou rukou One-Handed, nohama With Feet), různé metody (metoda po vrstvách Layer by Layer, rohy nejdříve Corners First, CFOP, Rouxova mostová metoda, Petrus, ZZ) a dokonce i netradiční kostky (od 2x2 do 7x7, pyramida Pyraminx, Skewb, Megaminx) se objevovaly jedna za druhou.

![Varianty netradičních kostek](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Fascinace Rubikovou kostkou je tak obrovská, že matematici neustále zkoumají její matematické principy, strávili desítky let hledáním "Božího čísla", astronauti ji berou do vesmíru a muži, ženy i děti se prosazují v různých soutěžích. Přesto je počet hráčů Rubikovy kostky ve srovnání s její přitažlivostí stále poměrně malý. Proto chci tímto článkem naučit lidi skládat kostku a užívat si radosti, kterou tato chytrá hra přináší.

## Úskalí algoritmů

Většina metod na trhu vyžaduje, aby si hráči zapamatovali spoustu algoritmů, což je pro začátečníky velmi odrazující. Ještě předtím, než pocítí radost ze složení kostky, je zablokuje memorování algoritmů. Známá metoda CFOP má přes 100 algoritmů a i začátečník si jich musí zapamatovat desítky.

Proto bych se dnes s vámi rád podělil o metodu, která nevyžaduje memorování algoritmů, a přesto si s Rubikovou kostkou užijete spoustu zábavy. Umožní vám složit kostku pouze pozorováním a pochopením.

## Matematický „zabiják“: Teorie grup

Otázka: Jak složit Rubikovu kostku, aniž byste si zapamatovali jediný algoritmus?

Zde se nám bude hodit matematický „zabiják“: teorie grup. Žádný problém nelze vyřešit bez matematiky.

Jaký je vztah mezi Rubikovou kostkou a teorií grup? Rubikova kostka je ve skutečnosti grupa. Každý pohyb na kostce je permutace. Tato operace má několik vlastností: lze ji kombinovat, lze ji invertovat, ale nelze ji komutovat.

Násobení, které jsme se učili na základní škole, je komutativní operace; výsledky A × B a B × A jsou naprosto stejné. Ale v grupě Rubikovy kostky nejsou A a B po výměně ekvivalentní; nejprve R a pak U je zcela jiná operace než nejprve U a pak R. Jakmile tedy pochopíme grupu, pochopíme i Rubikovu kostku. A hraní s Rubikovou kostkou nám zase pomáhá pochopit grupu.

Gratuluji, právě jste se naučili rozdíl mezi abelovskou grupou (násobení i sčítání jsou abelovské grupy) a neabelovskou grupou (grupa Rubikovy kostky).

(Doplnění: Někteří čtenáři upozornili, že výše uvedené tvrzení není zcela přesné, proto doplňujeme: Celá čísla vzhledem ke sčítání tvoří abelovskou grupu, avšak přirozená čísla N vzhledem ke sčítání netvoří abelovskou grupu; například číslo 3 nemá inverzní prvek -3, protože -3 není přirozené číslo. Nenulová reálná čísla, nenulová racionální čísla a nenulová komplexní čísla vzhledem k násobení tvoří abelovskou grupu. Původní analogie měla primárně pomoci začátečníkům pochopit základní intuici „komutativní vs. nekomutativní".)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U a U R mají rozdílný efekt v závislosti na pořadí - část první" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U a U R mají rozdílný efekt v závislosti na pořadí - část druhá" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Doplněk: Standardní tahy Rubikovy kostky se obvykle označují písmeny. R znamená otočení pravé vrstvy o 90 stupňů po směru hodinových ručiček, U znamená otočení horní vrstvy o 90 stupňů po směru hodinových ručiček, R' je otočení o 90 stupňů proti směru hodinových ručiček, střední vrstva nahoru je M', střední vrstva dolů je M.)

Jak se kostka otáčí, si můžete prohlédnout a naučit se v online animaci Rubikovy kostky v příloze.

## Teorie: Jádro skládání bez algoritmů: Komutátor

Pro složení Rubikovy kostky musíme dosáhnout následujícího stavu: **upravit polohu určitých dílků, aniž bychom změnili polohu ostatních dílků.**

V matematice se tato operace nazývá komutátor a zapisuje se jako **A B A⁻¹ B⁻¹**.

A⁻¹ je inverzní operace k A.

Můžeme použít velmi běžné přirovnání – výtah. Předpokládejme, že chcete někoho přepravit z 1. patra do 3. patra:

1.  **A**: Osoba vstoupí do výtahu
2.  **B**: Výtah vyjede do 3. patra
3.  **A⁻¹**: Osoba vystoupí z výtahu
4.  **B⁻¹**: Výtah se vrátí do 1. patra

Výsledek: Výtah se vrátil na původní místo, ale osoba se přesunula z 1. patra do 3. patra. Klíčové je, že když se výtah vrátil, osoba už v něm nebyla – prostředí se tedy obnovilo, ale cíl změnil polohu.

Například u Rubikovy kostky R a R⁻¹ odpovídají otočení pravé vrstvy o 90 stupňů po směru hodinových ručiček a ve třetím kroku zpět o 90 stupňů proti směru hodinových ručiček.

Inverzní operace A⁻¹ B⁻¹ může obnovit prostředí, které bylo narušeno operací A B, čímž se dosáhne výměny pouze určitých konkrétních dílků, aniž by to ovlivnilo okolí.

Proč tedy ne A A⁻¹ B B⁻¹? Takto by se každý pohyb přímo zrušil a dílky by se nemohly vyměňovat. Právě jste provedli operaci A a hned poté inverzní operaci A⁻¹, což dohromady znamená, že se nic nestalo (např. otočení horní vrstvy o 90 stupňů proti směru hodinových ručiček a hned poté o 90 stupňů po směru hodinových ručiček). Proto musí být **A B A⁻¹ B⁻¹**, aby došlo k výměně.

Toto je nejzákladnější výměna a nejpohodlnější „atomický“ tah na Rubikově kostce odpovídá: **R U R' U'**.

![R U R' U' demonstrace](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Může být kombinován do dlouhých sekvencí a dosahovat různých permutací, například: (R U R' U') (R U R' U') (R U R').

To je vlastně i původ algoritmů. Proč existují algoritmy? Jsou to série nejzákladnějších permutačních operací zkombinovaných do sekvencí. Jejich provedením lze rychle dosáhnout konkrétního výsledku, například složení konkrétní hrany, složení konkrétního rohového dílku. Různé sekvence lze kombinovat, což nás vede k finálnímu složení Rubikovy kostky.

Po pochopení principu můžeme dokonce vytvářet vlastní algoritmy. (Jak si vytvořit vlastní algoritmy pro Rubikovu kostku, bude podrobně popsáno v dalším díle.)

Abychom tedy složili Rubikovu kostku bez memorování jediné formule, stačí se naučit myšlenku základních permutací a zbytek už dokážeme aplikovat v jakékoli situaci. Nejelementárnější permutační tahy vymění pozice tří rohových dílků nebo pozice tří hranových dílků.

## Jak provádět výměny na Rubikově kostce

Jak již bylo zmíněno, nejpohodlnější atomický výměnný tah na Rubikově kostce odpovídá: **R U R' U'**. Pokud tomuto tahu hluboce porozumíte, okamžitě budete schopni složit první dvě vrstvy Rubikovy kostky.

Tento tah ve skutečnosti znamená: odstranit (pravou vrstvu), vložit (cílový dílek), vrátit (pravou vrstvu) na místo, vrátit (horní vrstvu) na místo.

Tím jsme dosáhli vložení levého předního rohového dílku a prostředního hranového dílku do pravého dolního rohu.

Tento tah se může neustále měnit na **U R U' R'**, nebo **F R F' R'**, atd. pro libovolnou pozici, a dokonce i střední vrstvu **M U M' U'**, nebo také **U2 R U2 R'**.

![Demonstrace základního permutačního tahu](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

V počáteční fázi je kostka nejvíce zamíchaná, takže lze použít velké množství takových základních permutací k nejprve složení jedné strany nebo jiných lokálních částí, čímž se sníží úroveň nepořádku.

A protože je stav velmi chaotický, poslední tah U' v **R U R' U'**, který obnovuje prostředí, lze dokonce vynechat v závislosti na situaci a přímo navázat dalším tahem. Tím se to zjednoduší na: odstranit, vložit, vrátit na místo.

Odstranit, vložit, vrátit na místo.

To je ten klíčový tah, gratuluji, už rozumíte, jak hrát s Rubikovou kostkou!

Ale v pozdějších fázích budeme potřebovat delší permutační kroky, abychom vyměnili konkrétní kostky, aniž bychom úplně narušili aktuálně složený stav.

Vezměme si jako příklad **R U' L' U R' U' L U**. Tento tah dokáže vyměnit pouze tři rohové dílky, aniž by ovlivnil cokoli jiného. Rozloženo na logiku komutátoru:

```
A   = R U'   (odeslat rohový dílek pryč)
B   = L'     (pohnout levou vrstvou)
A⁻¹ = U R'   (obnovit operaci A)
B⁻¹ = U' L U (obnovit operaci B, s úpravou)
```

Efekt: Levý dolní rohový dílek zůstane na místě, ostatní tři rohové dílky si vymění pozice.

Toto je pravděpodobně jediná dvě „formule“, které si v tomto článku musíte pamatovat. Naučíme se je používat v praktické části a porozumíme jim během manipulace, aniž bychom si je museli memorovat.

## Praktická část: Skládání od nuly

A teď konečně k hlavní části tohoto článku. Provedu vás krok za krokem, jak složit Rubikovu kostku od nuly, pouze pozorováním a pochopením.

Potřebné přípravy:

-   Jedna Rubikova kostka
-   A trocha trpělivosti (protože se primárně zaměřujeme na pozorování a pochopení)

Předpokládejme, že už máte Rubikovu kostku. Zamícháme ji podle mezinárodního standardu (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**). Nyní ji spolu složíme.

Nebo si můžete hrát přímo s online verzí; po kliknutí na tento odkaz uvidíte zamíchanou kostku: [3D Rubikova kostka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Počáteční stav zamíchané kostky](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Můžeme se inspirovat velmi elegantní Rouxovou mostovou metodou. Na rozdíl od skládání vrstvu po vrstvě, Rouxova metoda nejprve složí bloky 1x2x3 na levé a pravé straně, běžně známé jako "mosty", a teprve poté složí horní vrstvu a zbývající pozice.

Rouxova metoda je velmi volná a flexibilní, a navíc vyžaduje méně tahů než mnoho známých metod a relativně málo algoritmů k zapamatování, protože se v podstatě jedná o logiku komutátorů. V tomto rámci se naučíme, jak složit Rubikovu kostku bez memorování jediné formule.

![Diagram průběhu Rouxovy metody](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### První krok: Fixace pozice pozorování

Pozorovací pozice pro Rouxovu metodu je pevná. Během skládání nemusíme kostku často otáčet, ale držíme se jednoho úhlu pro přemýšlení a skládání. S tímto fixním pohledem snadno uvidíme určité rohové a hranové dílky a budeme vědět, kam patří.

Můžeme se řídit tímto úhlem:

-   Přední strana (směrem k vám): zelená plocha
-   Levá strana: červená
-   Pravá strana: oranžová
-   Horní vrstva: žlutá
-   Spodní vrstva: bílá
-   Zadní strana: modrá

### Druhý krok: Sestavení mostů (levého a pravého)

**Pořadí sestavení levého mostu:**

1.  Nejprve umístěte bílo-červený hranový dílek na místo (levý dolní "sloup").
2.  Poté umístěte zadní modro-červený hranový dílek na místo.
3.  Nakonec umístěte dva přední červené rohové dílky na místo.

Ilustrace dokončeného stavu levého mostu:

![Dokončený levý most](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Tento proces nevyžaduje žádné algoritmy, stačí pozorování a pochopení. S praxí se budete zlepšovat.

**F' L**: Použijte pozorování, najděte červeno-bílý hranový dílek a umístěte jej na místo, bílou barvou dolů, červenou doleva.

![Demonstrace umístění bílo-červeného hranového dílku](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Umístěte modro-červený hranový dílek a rohové dílky na místo.

![Umístění modro-červeného hranového dílku a rohových dílků](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Najděte poslední dva dílky levého mostu a zkuste je umístit na místo, čímž získáme dokonalý levý most.

![Umístění posledních dvou dílků levého mostu](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Pravý most se skládá analogicky**, jen místo červené barvy použijte oranžovou a opakujte výše uvedené kroky. Zde je však důležité dávat pozor, abyste nerozrušili již hotový levý most. Pokud potřebujete dočasně přesunout dílky, můžete nejprve levý most posunout o jednu pozici, aby operace na pravé straně levý most neovlivnily, a po dokončení operací na pravé straně levý most vrátit.

**Střed pravého mostu**: U' M U' R2

![Umístění středového hranového dílku pravého mostu](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**První dílek pravého mostu**: U' M' U2 R' U R

![Umístění prvního dílku pravého mostu](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Dokončili jsme poslední modul pravého mostu a chceme jej vložit na místo, takže nejprve posuneme levý most (F'), abychom uvolnili prostor, poté přesuneme modul (U) a nakonec levý i pravý most vrátíme na místo.

![Vložení posledního dílku pravého mostu](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Toto je stav, kdy jsou oba mosty dokončeny. Důležité je, aby mosty byly vytvořeny, ostatními barevnými dílky se prozatím nemusíme zabývat.

![Dokončený levý a pravý most](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Třetí krok: Složení rohových dílků horní vrstvy

Když máte složené levý a pravý most, začneme skládat zbývající čtyři rohové dílky. Zde budeme potřebovat rotaci tří rohových dílků, aby se tři rohy vyměnily: z A do B, z B do C a C zpět do A.

![Ilustrace tří cyklů rohových dílků: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Tři cykly rohových dílků

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Algoritmus 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Levý dolní rohový dílek zůstane na místě</li>
      <li>Ostatní tři rohové dílky se vymění <strong>proti směru hodinových ručiček</strong></li>
      <li>Ale jejich vnitřní barvy se otočí <strong>po směru hodinových ručiček</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Algoritmus 2 (zrcadlová verze)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Pravý dolní rohový dílek zůstane na místě</li>
      <li>Ostatní tři rohové dílky se vymění <strong>po směru hodinových ručiček</strong></li>
      <li>Ale jejich vnitřní barvy se otočí <strong>proti směru hodinových ručiček</strong></li>
    </ul>
  </div>
</div>

![Demonstrace zrcadlové verze tří cyklů rohových dílků](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Můžete se setkat pouze se čtyřmi typy orientace rohových dílků: 0, 1, 2, nebo 4 "dobré" rohové dílky (správně orientované).

-   **4 "dobré" rohové dílky**: Hotovo
-   **1 "dobrý" rohový dílek** (tvar rybičky): Stačí provést jeden další třícyklus nebo jeho zrcadlovou verzi a je hotovo.
-   **0 / 2 "dobré" rohové dílky**: Nejprve umístěte "špatný" rohový dílek na pozici, která není ovlivněna třícyklem (levý dolní roh), proveďte jeden třícyklus, a dostanete 1 "dobrý" rohový dílek, čímž se vrátíte k předchozí situaci.

Někdy je potřeba základní verzi třícyklu provést dvakrát k dokončení, zatímco zrcadlová verze třícyklu stačí provést jednou k úplnému složení. Začátečníci se nejprve soustředí na zvládnutí základní verze, věnují pozornost pozorování a pochopení, a pak to všechno pochopí. Tento třícyklus s žlutou stranou nahoru je také známý klasický algoritmus – algoritmus malé rybičky (levá/pravá), můžete si osvojit tvar rybičky.

Ani tento algoritmus si nemusíte pamatovat. Pozorujte, jak se pohybují dva zelené dílky, a udělejte to sami několikrát, abyste si zvykli. Jádrem je výměna tří rohových dílků horní vrstvy.

Na kostce, kde jsme právě dokončili levý a pravý most, jsme zjistili, že nahoře jsou dva žluté dílky. Proto vyměníme levý dolní roh za dílek, který není žlutý, a provedeme jeden třícyklus rohových dílků. Poté provedeme další dva třícykly, nebo jednu zrcadlovou verzi třícyklu, abychom dosáhli stavu, kdy jsou všechny čtyři rohové dílky horní vrstvy žlutou barvou nahoru.

![Demonstrace procesu tří cyklů rohových dílků](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Čtyři žluté rohy dokončeny!

![Stav se čtyřmi žlutými rohy](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Úprava pozice (zarovnání bočních barev)

Když jsou všechny čtyři rohové dílky žlutou stranou nahoru, je ještě potřeba zarovnat boční barvy rohových dílků, aby se rohové dílky mohly úplně usadit na své místo.

Zde použijeme **variantu J-perm**: **R U2 R' U' R U2 L' U R' U' L**

Logiku tohoto algoritmu lze rozdělit na "přesun páru + logická výměna":

-   První část `R U2 R' U' R`: Přenese pár do bezpečné zóny pro dočasné uložení, čímž se uvolní prostor.
-   Druhá část `U2 L' U R' U' L`: Využívá logiku třícyklu k přesné výměně dvou rohových dílků.

**Efekt**: Vymění pozice dvou rohových dílků na pravé straně, přičemž žlutá barva zůstane nahoře, ostatní rohové dílky se nezmění.

To znamená, že můžeme vyměnit libovolné dva sousední rohové dílky (pomocí U určíme, které dva rohové dílky budou na pravé straně). Opakovaným prováděním této výměny se všechny čtyři rohové dílky nakonec zarovnají a usadí na své místo.

![Demonstrace J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ani tento algoritmus si nemusíte pamatovat. Pozorujte, jak se pohybují dva zelené dílky, a udělejte to sami několikrát, abyste si zvykli. Jádrem je výměna dvou rohových dílků na pravé straně horní vrstvy, přičemž žlutá barva zůstává nahoře.

### Čtvrtý krok: Složení posledních šesti hranových dílků (LSE, Last Six Edges)

Zde nejprve zarovnejte středové dílky tak, aby žlutá byla nahoře a bílá dole, a poté upravte hranové dílky.

Zbylo jen 6 hranových dílků. Tento krok používá pouze dva tahy: **M** a **U**, což je velmi intuitivní.

#### 4a: Úprava orientace (EO, Edge Orientation)

**Metoda posouzení**: Podívejte se, zda je bílá/žlutá nálepka hranového dílku otočena nahoru nebo dolů.

-   Nahoru / dolů = "dobrá" hrana ✓
-   Na stranu = "špatná" hrana ✗

**Metoda úpravy**: Použijte **M U M'** nebo **M' U M** k převrácení "špatné" hrany.

![Demonstrace převrácení "špatné" hrany pomocí M U M'](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitivní pochopení: M otočí hranový dílek střední vrstvy nahoru, U upraví polohu, M' ho otočí zpět.

Opakujte několikrát, dokud všechny hranové dílky nemají bílou/žlutou barvu otočenou nahoru nebo dolů.

Hrany s správnou orientací můžeme nazývat "dobré hrany", hrany s nesprávnou orientací "špatné hrany".

Jak je zvýrazněno, tři horní hrany jsou "špatné hrany", protože nejsou ani žluté, ani bílé.

![Ilustrace zvýrazněných "špatných" hran](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Tipy pro úpravu**: Můžete se setkat pouze se čtyřmi typy situací se "špatnými" hranami:

-   **0 "špatných" hran**: Hotovo
-   **Není 0 ani 4 "špatné" hrany**: Pomocí **M' U M** změňte počet "špatných" hran, zvyšte na 4 "špatné" hrany.
-   **4 "špatné" hrany (2 nahoře, 2 dole)**: Pomocí **M' U2 M** vyměňte horní a dolní hrany, čímž vznikne situace 3 nahoře a 1 dole.
-   **4 "špatné" hrany (3 nahoře, 1 dole)**: Tři "špatné" hrany na horní vrstvě vytvoří "šipku". Otočte horní vrstvu tak, aby šipka směřovala k "špatné" hraně dole, proveďte jednou **M' U M**, a všechny čtyři "špatné" hrany se zruší a stanou se "dobrými" hranami.

![Demonstrace eliminace čtyř "špatných" hran se šipkou](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Pokud se šipka neobjeví, opakovaně zkoušejte **M' U M**, vždy ji nakonec složíte. Pokročilí mohou postupně hledat vzory.

#### 4b: Složení levých a pravých hran (červená a oranžová)

Najděte červeno-žlutou a oranžovo-žlutou hranu (cílem je vrátit je na levé a pravé strany) a pomocí třícyklu hran je přesuňte na správné pozice.

**Tipy**:

1.  Umístěte červeno-žlutou (nebo oranžovo-žlutou) hranu nad střední vrstvu a pomocí výměny horních a dolních hran ji spusťte dolů (**M' U2 M**).
2.  Umístěte druhou oranžovo-žlutou (nebo červeno-žlutou) hranu dolů na opačnou stranu.
3.  Otočte horní vrstvu tak, aby se červená hrana objevila na protější pozici k červeno-žluté hraně, která je dole.
4.  Otočte střední vrstvu o půl otáčky **M2**, pozorujte a zarovnejte horní vrstvu **U**.

![Demonstrace umístění levých a pravých hran](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Řešení posledních čtyř hran (modrá a zelená)

**Tipy**:

-   Neustále používejte **třícyklus hran** k výměně horních a dolních hran: **M' U2 M**, poslední krok zarovnejte pozorováním **U2**.
-   Rychlý trik: Umístěte bílo-zelenou (nebo bílo-modrou) hranu nad cílovou pozici, vyměňte horní a dolní hrany, a bílo-zelená (bílo-modrá) hrana se usadí na své místo.

Existují pouze tři situace:

-   Už je to správně → Hotovo!
-   Potřebuje M2 → Proveďte jednou **M2**
-   Potřebuje výměnu → **M' U2 M U2** nebo **M U2 M' U2**

Logiku třícyklu hran můžeme také zjednodušit: M' je posun střední vrstvy nahoru, U2 je otočení horní vrstvy o půl otáčky, M je návrat střední vrstvy, U2 je návrat horní vrstvy.

![Demonstrace třícyklu hran](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Hotovo!

![Složená Rubikova kostka](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Shrnutí

Žádné memorování algoritmů, jen logika komutátorů "otevřít dveře – provést operaci – zavřít dveře". Zjistíte, že tento proces je mnohem zábavnější než memorování algoritmů, a navíc se nemusíte bát, že ho za roky zapomenete, kdykoli si ho můžete znovu odvodit.

Stejný přístup lze použít k vyřešení jakékoli Rubikovy kostky, včetně různých podivných variant.

Pokud se ale chcete vydat cestou rychloskládání, pak vás čeká nekonečná cesta tvrdého tréninku. Pro začátečníky by však nemělo být problém dosáhnout času pod 90 sekund s trochou praxe.

Existuje tisíce metod řešení, záleží na tom, zda najdete elegantnější nebo pohodlnější způsob.

Svět Rubikovy kostky je plný nekonečné zábavy, přeji vám příjemné hraní.

## Příloha 1: Tahák k této metodě skládání Rubikovy kostky (Návod k skládání kostky)

1.  **Sestavení mostů (levého a pravého): Spoléhejte na pozorování a intuici.**
    -   Tipy: Jakmile se stanete velmi zběhlými v pozorování a předvídání, můžete podle konkrétního stavu kostky upřednostnit sestavení jiných modulů, nebo sestavovat levý a pravý most současně. Tímto způsobem dosáhnete menšího počtu tahů a získáte velkou volnost.
2.  **Složení orientace čtyř rohových dílků horní vrstvy: Čtyři žluté barvy nahoru.**
    -   Třícyklus rohových dílků horní vrstvy: **R U' L' U R' U' L U** (Levý dolní rohový dílek zůstane na místě, vnitřní barvy ostatních tří rohových dílků se otočí po směru hodinových ručiček.)
    -   Zrcadlová verze třícyklu rohových dílků horní vrstvy: **L' U R U' L U R' U'** (Pravý dolní rohový dílek zůstane na místě, vnitřní barvy ostatních tří rohových dílků se otočí proti směru hodinových ručiček.)
3.  **Složení bočních stran čtyř rohových dílků horní vrstvy.**
    -   **Jemné doladění pozice rohových dílků horní vrstvy**: **R U2 R' U' R U2 L' U R' U' L** (Udržuje všechny čtyři rohové dílky žlutou stranou nahoru, vymění pozice dvou rohových dílků na pravé straně.)
4.  **Změna orientace hranových dílků, aby bílá nebo žlutá směřovala nahoru nebo dolů.**
    -   Nejprve zarovnejte středové dílky tak, aby žlutá byla nahoře a bílá dole, a poté upravte hranové dílky.
    -   Pomocí **M' U M** změňte počet "špatných" hran, vytvořte šipku, nasměrujte šipku k "špatné" hraně, proveďte jednou **M' U M**, a všechny čtyři "špatné" hrany se zruší a usadí na své místo.
5.  **Složení hranových dílků levé a pravé strany** (červená a oranžová).
    -   Nejprve umístěte červeno-žlutou (nebo oranžovo-žlutou) hranu dolů pomocí výměny horních a dolních hran (**M' U2 M**).
6.  **Složení zbývajících hranových dílků** (modrá a zelená).
    -   Neustále používejte **třícyklus hran** k výměně horních a dolních hran: **M' U2 M**, poslední krok zarovnejte pozorováním **U2**.

Žádnou z výše uvedených formulí se nemusíte učit nazpaměť; jsou zde pouze pro vaši referenci. Ve skutečnosti, když si to sami vyzkoušíte, budete pozorovat a chápat, jak se dané kostky pohybují, a po několika pokusech se to naučíte. Klíčové je vyměnit tři rohové kostky na horní vrstvě.

## Příloha 2: Užitečné webové stránky a nástroje

Také jsem pro vás vytvořil online 3D Rubikovu kostku, se kterou si můžete volně hrát, otáčet ji, nebo ji zamíchat a složit podle pevných algoritmů. Každý krok je doprovázen krásnou animací!

[3D Rubikova kostka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D Rubikova kostka nástroj](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Stejný scramblovací algoritmus jako v tomto tutoriálu: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Kroky pro složení levé a pravé mosty z tohoto tutoriálu: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Po kliknutí na tento odkaz uvidíte zamíchanou kostku: [3D Rubikova kostka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Časovač Rubikovy kostky, který používají světoví šampioni: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
