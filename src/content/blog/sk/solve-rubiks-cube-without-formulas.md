---
layout: blog
title: "Ako poskladať Rubikovu kocku bez učenia sa algoritmov: Zvládne to aj školák"
date: 2026-05-09 12:00:00
tags:
  - Rubikova kocka
  - návod
  - teória grúp
  - matematika
  - Roux metóda
categories: Každodenné experimenty
description: Naučte sa krok za krokom, ako poskladať Rubikovu kocku 3x3 bez jedinej formulky, pomocou teórie grúp (komutátorov) a metódy Roux (mostíky).
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Kompletne poskladaná Rubikova kocka" />
</figure>

Možno ste v skladaní Rubikovej kocky úplný začiatočník a nikdy ste ju celú neposkladali.

Väčšina takzvaných návodov, ktoré nájdete, vám len predkladá kopy zvláštnych algoritmov a hovorí, že stačí urobiť to a to, a kocka sa poskladá. No po ich vykonaní stále nechápete, prečo to tak je.

Tento článok sa stane vaším záchrancom. Naučíte sa, ako od úplných základov poskladať Rubikovu kocku bez memorovania akýchkoľvek algoritmov. Spoznáte jej pôvod a pochopíte, ako funguje. Krok za krokom vás prevediem od teórie k praxi, aby ste ju dokázali celú poskladať, a naučím vás, ako správne pozorovať.

Možno to bude prvýkrát, čo sa vám podarí poskladať celú Rubikovu kocku vlastnými rukami.

<!--more-->

## Zrod Rubikovej kocky

Prečo má Rubikova kocka takú obrovskú fascináciu? Najprv sa pozrime na to, ako vlastne vznikla.

V roku 1974 maďarský profesor architektúry Ernő Rubik vytvoril prvý prototyp z dreva. Chcel svojim študentom ukázať, ako sa môžu jednotlivé časti pohybovať nezávisle bez toho, aby narušili celkovú štruktúru. Šesť strán natrel rôznymi farbami a Rubikova kocka bola na svete.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Prototyp Rubikovej kocky" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portrét Ernő Rubika" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Ohromujúci počet kombinácií

Rubikova kocka 3x3 má 8 rohových kociek, 12 hranových kociek a 6 stredových kociek, čo predstavuje celkovo 26 viditeľných dielov. V skutočnosti sa však pohybuje len 20 kociek – všetky okrem šiestich stredových.

Koľko má teda celkovo stavov? Je ich neuveriteľných **4.3 × 10¹⁹**.

Čo to znamená? Tento počet stavov je väčší než počet zrniek piesku na Zemi. Ak by sme skúšali miliardu stavov za sekundu, trvalo by nám viac ako **1300 rokov**, kým by sme prešli všetky. A keby sme každý stav zapísali na papier a tie papiere naukladali na seba, hrúbka by sa rovnala 14 000 cestám tam a späť zo Zeme na Slnko.

Táto malá kocka 3x3 je skutočne klamlivá. Vďaka svojej inovatívnej a zábavnej hrateľnosti, nekonečným variáciám a neodolateľnému čaru okamžite po uvedení na trh explodovala a prilákala nespočetné množstvo nadšencov. Rýchlo sa vyvinuli súťaže v skladaní kociek, rôzne štýly (rýchloskladanie Speedsolving, skladanie poslepiačky Blindfolded, jednou rukou One-Handed, nohami With Feet), rôzne metódy (skladanie po vrstvách Layer by Layer, rohy prvé Corners First, CFOP, Roux bridge, Petrus, ZZ) a dokonca aj rôzne tvary kociek (od 2x2 po 7x7, pyramída Pyraminx, Skewb, Megaminx) sa objavili jeden za druhým.

![Varianty netradičných kociek](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Čaro Rubikovej kocky je také silné, že matematici neustále skúmajú jej matematické aspekty, strávili desaťročia hľadaním "Božieho čísla", astronauti si ju berú do vesmíru a ľudia všetkých vekových kategórií excelujú v rôznych súťažiach. Avšak v porovnaní s jej fascináciou je hráčov Rubikovej kocky stále pomerne málo. Preto by som chcel prostredníctvom tohto článku naučiť ľudí, ako ju poskladať a užiť si radosť, ktorú táto logická hra prináša.

## Dilema algoritmov

Väčšina metód na trhu vyžaduje, aby si hráči zapamätali množstvo algoritmov, čo je pre začiatočníkov veľmi odrádzajúce. Skôr než pocítia radosť z poskladania kocky, narazia na prekážku v podobe algoritmov. Známa metóda CFOP má viac ako 100 algoritmov a aj začiatočníci si musia zapamätať desiatky.

Preto by som vám dnes chcel predstaviť metódu, ktorá vám umožní užiť si Rubikovu kocku bez potreby memorovania algoritmov. Poskladáte ju len vďaka pozorovaniu a pochopeniu.

## Matematická zbraň: Teória grúp

Otázka: Ako poskladať Rubikovu kocku bez memorovania jediného algoritmu?

Tu prichádza na rad naša matematická zbraň: teória grúp. Neexistuje problém, ktorý by sa nedal vyriešiť matematikou.

Aký je teda vzťah medzi Rubikovou kockou a teóriou grúp? Rubikova kocka je v skutočnosti grupa. Každé otočenie kocky je operácia permutácie. Táto operácia má niekoľko vlastností: dá sa kombinovať, dá sa zvrátiť, ale nie je komutatívna (nedá sa meniť poradie).

Násobenie, ktoré sme sa učili na základnej škole, je komutatívna operácia – výsledok A × B a B × A je úplne rovnaký. V grupe Rubikovej kocky však výmena A a B nie je ekvivalentná; otočenie R a potom U je úplne iná operácia ako U a potom R. Takže ak rozumieme grupe, rozumieme aj Rubikovej kocke. A hranie sa s kockou nám zase pomáha pochopiť grupy.

Gratulujem, práve ste sa naučili rozdiel medzi Abelovskou grupou (násobenie a sčítanie sú Abelovské grupy) a neAbelovskou grupou (grupa Rubikovej kocky).

(Doplnenie: Niektorí čitatelia poukázali na to, že vyššie uvedené tvrdenie nebolo celkom rigorózne, preto pridávam malé doplnenie. Celé čísla pod sčítaním tvoria abelovskú grupu, prirodzené čísla N pod sčítaním netvoria abelovskú grupu, napríklad pre 3 neexistuje inverzný prvok -3, keďže -3 nie je prirodzené číslo. Nenulové reálne čísla, nenulové racionálne čísla a nenulové komplexné čísla pod násobením tvoria abelovskú grupu. Analógia v pôvodnom texte mala hlavne pomôcť začiatočníkom uchopiť kľúčovú intuíciu „komutatívne vs nekomutatívne".)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U a U R majú rôzne efekty kvôli rôznemu poradiu – časť prvá" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U a U R majú rôzne efekty kvôli rôznemu poradiu – časť druhá" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Doplnok: Štandardné operácie Rubikovej kocky sú zvyčajne označené písmenami. R znamená otočenie pravej vrstvy o 90 stupňov v smere hodinových ručičiek, U znamená otočenie hornej vrstvy o 90 stupňov v smere hodinových ručičiek. R' je otočenie proti smeru hodinových ručičiek, M' je otočenie strednej vrstvy nahor a M je otočenie strednej vrstvy nadol.)

Ako sa kocka otáča, si môžete priamo pozrieť a precvičiť v online animácii Rubikovej kocky, ktorú nájdete v prílohe.

## Princíp: Jadro skladania bez algoritmov: Komutátor

Aby sme Rubikovu kocku poskladali, musíme dosiahnuť stav, kedy **zmeníme polohu len niektorých kociek bez toho, aby sme pohli ostatnými.**

V matematike sa táto operácia nazýva komutátor a zapisuje sa ako **A B A⁻¹ B⁻¹**.

A⁻¹ je inverzná operácia k A.

Môžeme použiť veľmi praktickú analógiu – výťah. Predstavte si, že chcete presunúť osobu z 1. na 3. poschodie:

1. **A**: Osoba vstúpi do výťahu.
2. **B**: Výťah vystúpi na 3. poschodie.
3. **A⁻¹**: Osoba vystúpi z výťahu.
4. **B⁻¹**: Výťah sa vráti na 1. poschodie.

Výsledok: Výťah je na pôvodnom mieste, ale osoba sa presunula z 1. na 3. poschodie. Kľúčové je, že keď sa výťah vrátil, osoba v ňom už nebola – takže prostredie sa obnovilo, ale cieľ zmenil svoju polohu.

Napríklad v Rubikovej kocke, R a R⁻¹ zodpovedajú otočeniu pravej vrstvy o 90 stupňov v smere hodinových ručičiek, pričom v treťom kroku sa opäť otočí o 90 stupňov proti smeru hodinových ručičiek.

Inverzná operácia A⁻¹ B⁻¹ dokáže obnoviť prostredie, ktoré bolo narušené operáciou A B. Tým sa dosiahne, že sa vymenia len určité špecifické kocky bez ovplyvnenia okolia.

Prečo teda nie A A⁻¹ B B⁻¹? V takom prípade by sa každý pohyb okamžite zrušil a kocky by sa nemohli vymeniť. Ak urobíte operáciu A a hneď nato inverznú operáciu A⁻¹, je to, akoby ste nič neurobili (napríklad otočíte hornú vrstvu o 90 stupňov proti smeru hodinových ručičiek a hneď nato o 90 stupňov v smere hodinových ručičiek). Preto musí byť **A B A⁻¹ B⁻¹**, aby došlo k výmene.

Toto je najzákladnejšia výmena a najprirodzenejší "atomárny" pohyb v Rubikovej kocke je: **R U R' U'**

![Ukážka R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Dá sa predĺžiť a kombinovať na dosiahnutie rôznych permutačných efektov, napríklad: (R U R' U') (R U R' U') (R U R').

V skutočnosti je to aj zdroj algoritmov. Prečo vlastne existujú algoritmy? Sú to len kombinácie série najzákladnejších permutačných operácií, ktoré tvoria sekvencie. Vykonávaním týchto sekvencií môžete rýchlo dosiahnuť konkrétne výsledky, ako napríklad poskladanie určitej hrany alebo rohu. Rôzne sekvencie sa dajú kombinovať, aby nás doviedli k finálnemu poskladaniu Rubikovej kocky.

Keď pochopíte tento princíp, môžete si dokonca vytvoriť vlastné algoritmy. (Ako si vytvoriť vlastné algoritmy pre Rubikovu kocku, si podrobne rozoberieme v ďalšom článku.)

Ak teda chcete poskladať Rubikovu kocku bez memorovania jedinej formulky, stačí pochopiť myšlienku základných permutácií a môžete ju aplikovať v akejkoľvek situácii. Najzákladnejšie permutačné pohyby vymenia polohy troch rohových kociek alebo troch hranových kociek.

## Ako vykonávať výmeny na Rubikovej kocke

Ako už bolo spomenuté, najprirodzenejší "atomárny" výmenný pohyb v Rubikovej kocke je: **R U R' U'**. Ak tento pohyb hlboko pochopíte, okamžite dokážete poskladať prvé dve vrstvy kocky.

Tento pohyb v podstate znamená: odsunúť (pravú vrstvu), vložiť (cieľovú kocku), vrátiť (pravú vrstvu) na miesto, vrátiť (vrchnú vrstvu) na miesto.

Takto sme dosiahli, že ľavá predná rohová kocka a stredová hranová kocka boli vložené do pravého dolného rohu.

Tento pohyb sa môže neustále meniť na **U R U' R'**, alebo **F R F' R'**, a tak ďalej, na akúkoľvek pozíciu, dokonca aj so stredovou vrstvou **M U M' U'**, alebo aj **U2 R U2 R'**.

![Ukážka základných výmenných pohybov](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

V počiatočnej fáze je kocka najviac rozhádzaná, takže môžete použiť množstvo základných permutácií, ako sú uvedené vyššie, na poskladanie jednej steny alebo inej časti, čím znížite úroveň chaosu.

A pretože je stav veľmi chaotický, posledný pohyb U' v **R U R' U'**, ktorý obnovuje prostredie, možno dokonca vynechať v závislosti od situácie a priamo prejsť na ďalší pohyb. Tým sa to zjednoduší na: odsunúť, vložiť, vrátiť na miesto.

Odsunúť, vložiť, vrátiť na miesto.

Toto je kľúčový pohyb, gratulujem, už chápete, ako sa hrá s Rubikovou kockou!

Neskôr však budeme potrebovať dlhšie permutačné kroky, aby sme vymenili špecifické kocky bez toho, aby sme úplne narušili už poskladaný stav.

Vezmime si ako príklad **R U' L' U R' U' L U**. Tento pohyb dokáže vymeniť len tri rohové kocky bez ovplyvnenia ostatných. Rozoberme si ho podľa logiky komutátora:

```
A   = R U'   (vysunie rohovú kocku)
B   = L'     (posunie ľavú vrstvu)
A⁻¹ = U R'   (vráti operáciu A)
B⁻¹ = U' L U(vráti operáciu B, s úpravou)
```

Výsledok: Rohová kocka v ľavom dolnom rohu zostáva na mieste, ostatné tri rohové kocky sa vymenia.

Toto je pravdepodobne jedna z dvoch logických sekvencií, ktoré potrebujete pochopiť v tomto článku. V praktickej časti sa naučíme, ako ich používať a osvojiť si ich prostredníctvom praxe, nie memorovaním.

## Prax: Skladanie od nuly

Teraz sa konečne dostávame k hlavnej časti tohto článku. Krok za krokom vás prevediem, ako poskladať Rubikovu kocku od nuly, len pomocou pozorovania a pochopenia.

Potrebné prípravy:

- Rubikova kocka
- a trocha trpezlivosti (pretože sa zameriavame hlavne na pozorovanie a pochopenie)

Predpokladajme, že už máte Rubikovu kocku. Rozhádžeme ju podľa medzinárodného štandardu (pomocou sekvencie **F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), a potom ju spolu poskladáme.

Alebo si môžete zahrať online verziu priamo tu; po kliknutí na tento odkaz uvidíte už rozhádzanú kocku: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![Počiatočný stav rozhádzanej kocky](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Môžeme použiť myšlienku veľmi elegantnej metódy Roux (tzv. mostíky). Táto metóda sa líši od skladania vrstvu po vrstve tým, že najprv poskladá dva bloky 1x2x3 na ľavej a pravej strane, známe ako ľavý a pravý mostík, a až potom hornú vrstvu a zvyšné pozície.

Metóda mostíkov je veľmi voľná a flexibilná, vyžaduje menej krokov ako mnohé známe metódy a relatívne málo algoritmov na zapamätanie, pretože je založená na logike komutátorov. V tomto rámci sa môžeme naučiť, ako poskladať kocku bez memorovania jedinej formulky.

![Schéma toku metódy Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Prvý krok: Fixácia pozorovacej pozície

Pozorovacia pozícia pri metóde mostíkov je fixná. Počas skladania nemusíme kocku často otáčať, ale držíme ju v rovnakom uhle. S týmto pevným pohľadom veľmi ľahko uvidíme rohové a hranové kocky a budeme vedieť, kam patria.

Môžeme si zvoliť tento uhol ako referenčný bod:

- Spredu (smerom k vám): zelená stena
- Vľavo: červená
- Vpravo: oranžová
- Hore: žltá
- Dole: biela
- Vzadu: modrá

### Druhý krok: Stavba ľavého a pravého mostíka

**Postup stavby ľavého mostíka:**

1. Najprv umiestnite hranovú kocku biela-červená na miesto (ľavý dolný stĺpik).
2. Potom umiestnite hranovú kocku modrá-červená vzadu.
3. Nakoniec umiestnite dve predné červené rohové kocky.

Schéma dokončeného ľavého mostíka:

![Stav dokončeného ľavého mostíka](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Tento proces si nevyžaduje žiadne algoritmy, stačí pozorovať a chápať. Čím viac budete cvičiť, tým budete zručnejší.

**F' L**: Pomocou pozorovania nájdite červeno-bielu hranovú kocku a umiestnite ju na miesto, bielou stranou nadol a červenou vľavo.

![Ukážka umiestnenia bielo-červenej hranovej kocky](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Umiestnite modro-červenú hranovú kocku a rohovú kocku na miesto.

![Umiestnenie modro-červenej hranovej a rohovej kocky](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Nájdite posledné dve kocky ľavého mostíka, a snažte sa ich umiestniť na miesto, čím získate dokonalý ľavý mostík.

![Umiestnenie posledných dvoch kociek ľavého mostíka](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**S pravým mostíkom je to podobné**, len vymeňte červenú za oranžovú a zopakujte uvedené kroky. Tu si však treba dávať pozor, aby ste nenarušili už hotový ľavý mostík. Ak potrebujete priestor, môžete ľavý mostík najprv dočasne odsunúť, aby operácie na pravej strane neovplyvnili ľavý mostík. Po dokončení pravých pohybov potom ľavý mostík vráťte na pôvodné miesto.

**Stred pravého mostíka**: U' M U' R2

![Umiestnenie stredovej hrany pravého mostíka](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Prvá kocka pravého mostíka**: U' M' U2 R' U R

![Umiestnenie prvej kocky pravého mostíka](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Dokončili sme posledný blok pravého mostíka a chceme ho vložiť na miesto. Preto najprv odsunieme ľavý mostík (F'), uvoľníme priestor, potom presunieme blok (U) a nakoniec vrátime ľavý aj pravý mostík na ich miesta.

![Vloženie poslednej kocky pravého mostíka](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Toto je stav, keď sú oba mostíky hotové. Dôležité je, aby boli mostíky vytvorené; ostatné farebné kocky si zatiaľ nevšímajte.

![Stav dokončených oboch mostíkov](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Tretí krok: Skladanie rohových kociek hornej vrstvy

Keď poskladáte ľavý a pravý mostík, pustíme sa do zvyšných štyroch rohových kociek. Tu budeme potrebovať trojcyklus rohov, ktorý vymení tri rohy – z A do B, z B do C a z C späť do A.

![Schéma trojcyklu rohov: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Trojcyklus rohov

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Algoritmus 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Ľavá dolná rohová kocka zostáva na mieste.</li>
      <li>Ostatné tri rohové kocky sa vymenia <strong>proti smeru hodinových ručičiek</strong>.</li>
      <li>Ich vnútorné farby sa však otočia <strong>v smere hodinových ručičiek</strong>.</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Algoritmus 2 (zrkadlová verzia)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Pravá dolná rohová kocka zostáva na mieste.</li>
      <li>Ostatné tri rohové kocky sa vymenia <strong>v smere hodinových ručičiek</strong>.</li>
      <li>Ich vnútorné farby sa však otočia <strong>proti smeru hodinových ručičiek</strong>.</li>
    </ul>
  </div>
</div>

![Ukážka zrkadlovej verzie trojcyklu rohov](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Existujú len štyri typy orientácie rohových kociek, s ktorými sa stretnete: 0, 1, 2 alebo 4 správne orientované rohy.

-   **4 správne rohy**: Dokončený stav.
-   **1 správny roh** (tvar rybky): Stačí vykonať trojcyklus alebo jeho zrkadlovú verziu a je to hotové.
-   **0 / 2 správne rohy**: Najprv umiestnite jeden nesprávne orientovaný roh do pozície, ktorá nebude ovplyvnená trojcyklom (ľavý dolný roh), vykonajte trojcyklus, čím získate 1 správne orientovaný roh, a vrátite sa k predchádzajúcej situácii.

Niekedy je potrebné vykonať základnú verziu trojcyklu dvakrát, aby sa kocka poskladala, zatiaľ čo zrkadlová verzia trojcyklu ju poskladá len raz. Začiatočníci si stačí osvojiť základnú verziu, sústrediť sa na pozorovanie a pochopenie, a potom to pochopia v širšom kontexte. Tento trojcyklus so žltou stranou hore je tiež známy klasický algoritmus – algoritmus "malej ryby" (ľavá a pravá ryba), ktorým si môžete osvojiť tvar rybky.

Ani tento algoritmus si nemusíte memorovať. Pozorujte, ako sa pohybujú dve zelené kocky, a po niekoľkých pokusoch si ho osvojíte. Kľúčom je výmena troch rohových kociek v hornej vrstve.

Keď sme dokončili ľavý a pravý mostík na Rubikovej kocke, zistili sme, že na vrchu sú dve žlté. Preto sme ľavú dolnú rohovú kocku vymenili za takú, ktorá nie je žltá, a vykonali jeden trojcyklus rohov. Potom vykonáme buď ďalšie dva trojcykly, alebo jeden zrkadlový trojcyklus, aby sme dosiahli, že všetky štyri rohové kocky v hornej vrstve budú mať žltú farbu smerom nahor.

![Ukážka procesu trojcyklu rohov](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Štyri žlté rohy sú hotové!

![Stav dokončených štyroch žltých rohov](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Úprava pozície (zarovnanie bočných farieb)

Keď sú všetky štyri rohové kocky otočené žltou stranou nahor, je potrebné zarovnať aj farby ich bočných stien, aby sa rohové kocky úplne dostali na svoje správne miesta.

V tomto bode použijeme **variant J-perm**: **R U2 R' U' R U2 L' U R' U' L**.

Logika tohto algoritmu sa dá rozložiť na "presun dvojice + logickú výmenu":

-   Prvá časť `R U2 R' U' R`: Presunie dvojicu do bezpečnej zóny na dočasné uloženie a uvoľní priestor.
-   Druhá časť `U2 L' U R' U' L`: Využíva logiku trojcyklu na presnú výmenu dvoch rohových kociek.

Výsledok: Dve rohové kocky na pravej strane si vymenia miesta, pričom žltá strana zostane hore a ostatné rohové kocky sa nezmenia.

To znamená, že môžete vymeniť polohu ľubovoľných dvoch susedných rohových kociek (pomocou U nastavíte, ktoré dve rohové kocky sú na pravej strane). Po niekoľkých opakovaných výmenách sa všetky štyri rohové kocky úplne zarovnajú a dostanú na svoje miesta.

![Ukážka J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ani tento algoritmus si nemusíte memorovať. Pozorujte, ako sa pohybujú dve zelené kocky, a po niekoľkých pokusoch si ho osvojíte. Kľúčom je výmena dvoch rohových kociek na pravej strane hornej vrstvy, pričom žltá strana zostáva hore.

### Štvrtý krok: Skladanie posledných šiestich hrán (LSE, Last Six Edges)

V tomto kroku najprv zarovnajte stredové kocky tak, aby žltá bola hore a biela dole, a potom upravte hranové kocky.

Zostáva už len 6 hranových kociek. Tento krok používa iba dva typy pohybov: **M** a **U**, čo je veľmi intuitívne.

#### 4a: Úprava orientácie (EO, Edge Orientation)

**Metóda určenia**: Skontrolujte, či sú biele/žlté nálepky hranových kociek orientované nahor alebo nadol.

-   Nahor / Nadol = Správne orientovaná hrana ✓
-   Do strany = Nesprávne orientovaná hrana ✗

**Metóda úpravy**: Otočte nesprávne orientovanú hranu pomocou **M U M'** alebo **M' U M**.

![Ukážka otočenia nesprávnej hrany pomocou M U M'](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitívne pochopenie: M otočí hranovú kocku strednej vrstvy nahor, U upraví pozíciu a M' ju otočí späť.

Opakujte niekoľkokrát, kým všetky hranové kocky nebudú mať bielu/žltú farbu orientovanú nahor alebo nadol.

Hranové kocky so správnou orientáciou môžeme nazvať "dobré hrany" a tie s nesprávnou orientáciou "zlé hrany".

Ako je zvýraznené na obrázku, tri hranové kocky v hornej vrstve sú "zlé hrany", pretože nie sú ani žlté, ani biele.

![Ukážka zvýraznených nesprávnych hrán](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Tipy na úpravu**: Stretnete sa len so štyrmi typmi situácií so "zlými hranami":

-   **0 zlých hrán**: Dokončený stav.
-   **Nie 0 ani 4 zlé hrany**: Zmeňte počet zlých hrán pomocou **M' U M**, čím zvýšite ich počet na 4.
-   **4 zlé hrany (2 hore a 2 dole)**: Vymeňte horné a dolné hrany pomocou **M' U2 M**, čím sa situácia zmení na 3 hore a 1 dole.
-   **4 zlé hrany (3 hore a 1 dole)**: Tri zlé hrany v hornej vrstve vytvoria šípku. Otočte hornú vrstvu tak, aby šípka ukazovala na zlú hranu v spodnej vrstve, a vykonajte **M' U M**. Všetky štyri zlé hrany sa zrušia a stanú sa "dobrými hranami".

![Ukážka eliminácie štyroch zlých hrán šípkou](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Ak sa šípka neobjaví, skúšajte opakovane **M' U M**, vždy ju dokážete poskladať. Po získaní skúseností môžete postupne objavovať vzory.

#### 4b: Skladanie ľavých a pravých hrán (červená a oranžová)

Nájdite červeno-žltú a oranžovo-žltú hranovú kocku (cieľom je vrátiť ich na ľavú a pravú stranu) a presuňte ich na správne miesta pomocou trojcyklu hrán.

**Tip**:

1.  Presuňte červeno-žltú (alebo oranžovo-žltú) hranu nad strednú vrstvu a pomocou výmeny horných a dolných hrán ju pošlite na dno (**M' U2 M**).
2.  Druhú oranžovo-žltú (alebo červeno-žltú) hranu pošlite na dno na protiľahlej strane.
3.  Otočte hornú vrstvu tak, aby sa červená hrana objavila na protiľahlej pozícii od červeno-žltej hrany, ktorá je na dne.
4.  Strednú vrstvu otočte o polovicu **M2**, a hornú vrstvu vizuálne zarovnajte **U**.

![Ukážka umiestnenia ľavých a pravých hrán](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Riešenie posledných štyroch hrán (modrá a zelená)

**Tipy**:

-   Neustále používajte **trojcyklus hrán** na výmenu horných a dolných hrán: **M' U2 M**. Posledný krok zarovnajte pomocou pozorovania **U2**.
-   Rýchly tip: Umiestnite bielo-zelenú (alebo bielo-modrú) hranovú kocku nad cieľovú pozíciu, vymeňte horné a dolné hrany, a bielo-zelená (alebo bielo-modrá) sa dostane na svoje miesto.

Existujú len tri situácie:

-   Už je správne → Hotovo!
-   Potrebuje M2 → Vykonajte raz **M2**.
-   Potrebuje výmenu → **M' U2 M U2** alebo **M U2 M' U2**.

Logiku trojcyklu hrán môžeme tiež zjednodušiť: M' znamená, že stredná vrstva ide hore, U2 otočí hornú vrstvu o polovicu, M vráti strednú vrstvu a U2 vráti hornú vrstvu.

![Ukážka trojcyklu hrán](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Hotovo!

![Poskladaná Rubikova kocka](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Zhrnutie

Žiadne memorovanie algoritmov, len logika komutátora "otvoriť – operovať – zatvoriť". Zistíte, že tento proces je oveľa zábavnejší ako memorovanie algoritmov, a nemusíte sa báť, že ho po rokoch zabudnete, pretože si ho vždy dokážete odvodiť sami.

Rovnaký prístup môžete použiť na poskladanie akejkoľvek Rubikovej kocky, vrátane rôznych zvláštnych tvarov.

Ak sa však chcete vydať cestou rýchloskladania, čaká vás nekonečná drina. Pre začiatočníka by však nemal byť problém dosiahnuť čas pod 90 sekúnd s trochou praxe.

Existujú tisíce metód riešenia, záleží len na vás, či nájdete tú najelegantnejšiu alebo najintuitívnejšiu.

Svet Rubikovej kocky ponúka nekonečnú zábavu, prajem vám veľa radosti pri hrananí.

## Príloha 1: Stručný návod na skladanie Rubikovej kocky (Zhrnutie metódy)

1.  **Postavte ľavý a pravý mostík: Spoliehajte sa na pozorovanie a intuíciu.**
    -   Tipy: Keď budete veľmi zruční v pozorovaní a predvídaní, môžete podľa konkrétneho stavu kocky uprednostniť stavbu iných blokov, alebo stavať ľavý a pravý mostík súčasne. Tým dosiahnete menej krokov a oveľa väčšiu slobodu.
2.  **Orientujte štyri rohové kocky hornej vrstvy: Štyri žlté strany hore.**
    -   Trojcyklus rohov hornej vrstvy: **R U' L' U R' U' L U** (ľavá dolná rohová kocka zostáva na mieste, vnútorné farby ostatných troch rohových kociek sa otáčajú v smere hodinových ručičiek).
    -   Zrkadlová verzia trojcyklu rohov hornej vrstvy: **L' U R U' L U R' U'** (pravá dolná rohová kocka zostáva na mieste, vnútorné farby ostatných troch rohových kociek sa otáčajú proti smeru hodinových ručičiek).
3.  **Poskladajte bočné steny štyroch rohových kociek hornej vrstvy.**
    -   **Jemné nastavenie polohy rohov hornej vrstvy**: **R U2 R' U' R U2 L' U R' U' L** (udrží všetky štyri rohové kocky so žltou stranou hore a vymení polohy dvoch rohových kociek na pravej strane).
4.  **Zmeňte orientáciu hranových kociek tak, aby biela alebo žltá smerovala nahor alebo nadol.**
    -   Najprv zarovnajte stredové kocky tak, aby žltá bola hore a biela dole, a potom upravte hranové kocky.
    -   Pomocou **M' U M** zmeňte počet "zlých hrán", vytvorte šípku, nasmerujte šípku na "zlú hranu" a vykonajte raz **M' U M**. Všetky štyri "zlé hrany" sa zrušia a vrátia na svoje miesta.
5.  **Poskladajte hranové kocky na ľavej a pravej strane** (červená a oranžová).
    -   Najprv umiestnite červeno-žltú (alebo oranžovo-žltú) hranu na dno pomocou výmeny horných a dolných hrán (**M' U2 M**).
6.  **Poskladajte zvyšné hranové kocky** (modrá a zelená).
    -   Neustále používajte **trojcyklus hrán** na výmenu horných a dolných hrán: **M' U2 M**. Posledný krok zarovnajte pomocou pozorovania **U2**.

Nemusíte si pamätať ani jeden z týchto algoritmov. Sú tu len pre vašu informáciu v prílohe. Keď si to sami vyskúšate, budete pozorovať a chápať, ako sa dané kocky pohybujú. Po pár pokusoch sa to naučíte. Kľúčom je výmena troch rohových kociek na hornej vrstve.

## Príloha 2: Užitočné webové stránky a nástroje

Pripravil som pre vás aj online 3D Rubikovu kocku, s ktorou sa môžete hrať. Môžete ju ľubovoľne otáčať, rozhádzať ju a poskladať podľa pevných algoritmov, a každý krok je sprevádzaný krásnou animáciou!

[3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online nástroj 3D Rubikova kocka](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Algoritmus pre rozhádzanie kocky, použitý v tomto návode: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Kroky skladania ľavo-pravých mostov v tomto návode: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Po kliknutí na tento odkaz uvidíte už rozhádzanú kocku: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

Časovač na Rubikovu kocku, ktorý používajú svetoví šampióni: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
