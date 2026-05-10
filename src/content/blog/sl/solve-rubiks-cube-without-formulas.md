---
layout: blog
title: Kako sestaviti Rubikovo kocko brez pomnjenja formul: Razumljivo tudi za osnovnošolce
date: 2026-05-09 12:00:00
tags:
  - Rubikova kocka
  - vadnica
  - teorija grup
  - matematika
  - Roux metoda
categories: Dnevne peripetije
description: Z uporabo koncepta komutatorjev iz teorije grup in Rouxove metode mostov te bomo korak za korakom naučili, kako sestaviti Rubikovo kocko 3x3 od začetka, ne da bi si zapomnili eno samo formulo.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Popolnoma sestavljena Rubikova kocka" />
</figure>

Morda ste novinec pri Rubikovi kocki in je še nikoli niste uspeli sestaviti do konca.

Večina "vadnic", ki jih najdete, vam le podaja kopico čudnih formul in pravi: "Najprej naredi to, nato ono, in kocka bo sestavljena." A ko to storite, še vedno ne razumete, zakaj deluje.

Ta članek bo vaše rešilo. Naučili se boste sestaviti Rubikovo kocko od začetka, brez pomnjenja kakršnih koli formul. Spoznali boste njen izvor in razumeli, kako deluje. Vodil vas bom korak za korakom, od teorije do prakse, da boste v celoti sestavili kocko in vas naučil, kako opazovati.

Morda bo to prvič, da boste sami uspešno sestavili celotno Rubikovo kocko.

<!--more-->

## Rojstvo Rubikove kocke

Zakaj je Rubikova kocka tako privlačna? Najprej si poglejmo, kako je nastala.

Leta 1974 je madžarski profesor arhitekture Ernő Rubik, da bi svojim študentom pokazal, kako se deli lahko premikajo neodvisno, ne da bi uničili celotno strukturo, izdelal prvi prototip iz lesa. Šest stranic je pobarval z različnimi barvami in tako se je rodila Rubikova kocka.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Prototip Rubikove kocke" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portret Ernőja Rubika" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Osupljivo število kombinacij

Rubikova kocka 3x3 ima 8 vogalnih kosov, 12 robnih kosov in 6 sredinskih kosov, skupaj 26 vidnih kosov. Vendar se dejansko lahko premika le 20 kosov, razen šestih sredinskih kosov.

Koliko pa je vseh možnih stanj? **4.3 × 10¹⁹**.

Kaj to pomeni? To število stanj je večje od števila zrnc peska na Zemlji. Če bi vsako sekundo poskusili milijardo stanj, bi potrebovali več kot **1300 let**, da bi jih prešli vse. Če bi vsako stanje zapisali na list papirja in jih zložili enega na drugega, bi bila debelina enaka 14.000 povratnim potovanjem od Zemlje do Sonca.

Majhna Rubikova kocka 3x3 je resnično osupljiva. Zaradi svojega inovativnega in zabavnega igranja, neskončnih variacij in neizmernega šarma je ob izidu eksplodirala na trgu in privabila množico navdušencev. Hitro so se razvila tekmovanja v sestavljanju kocke, različni načini igranja (hitrostno sestavljanje Speedsolving, sestavljanje z zavezanimi očmi Blindfolded, enoročno One-Handed, z nogami With Feet), različne metode reševanja (metoda po plasteh Layer by Layer, metoda najprej vogali Corners First, CFOP, Roux mostovna metoda, Petrus, ZZ) in celo različne oblike kocke (od 2x2 do 7x7, piramida Pyraminx, poševna Skewb, Megaminx) so se pojavljale ena za drugo.

![Variante Rubikove kocke](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Čar kocke je tako velik, da so matematiki desetletja preučevali matematiko, ki se skriva v njej, in iskali "Božje število". Astronavti so jo vzeli s seboj v vesolje, moški in ženske vseh starosti pa so se izkazali na različnih tekmovanjih. Vendar je v primerjavi z njenim šarmom število igralcev še vedno razmeroma majhno. Zato želim s tem člankom vse naučiti reševanja kocke in uživanja v zabavi, ki jo prinaša ta miselna igra.

## Past formul

Večina rešitev na trgu zahteva, da si igralci zapomnijo veliko formul, kar je za začetnike zelo odbijajoče. Še preden okusijo veselje ob sestavljanju kocke, jih ustavijo formule. Znana metoda CFOP ima več kot 100 formul, začetniki pa si jih morajo zapomniti na desetine.

Zato bi vam danes rad predstavil metodo, s katero lahko uživate v reševanju kocke, ne da bi si zapomnili formule. Omogočila vam bo, da kocko sestavite le z opazovanjem in razumevanjem.

## Matematično orožje: Teorija grup

Vprašanje: Kako sestaviti Rubikovo kocko, ne da bi si zapomnili eno samo formulo?

Tukaj bomo priklicali naše matematično orožje: teorijo grup. Ni problema, ki ga ne bi bilo mogoče rešiti z matematiko.

Kakšna je torej povezava med Rubikovo kocko in teorijo grup? Rubikova kocka je v bistvu grupa. Vsak obrat na kocki je permutacijska operacija. Ta operacija ima več značilnosti: lahko se kombinira, lahko se obrne, vendar ni komutativna.

Množenje, ki smo se ga učili v osnovni šoli, je komutativna operacija, kjer je rezultat A × B enak rezultatu B × A. Vendar pa v grupi Rubikove kocke A in B nista enakovitena po zamenjavi; najprej R in nato U je popolnoma drugačna operacija kot najprej U in nato R. Torej, če razumemo grupe, razumemo Rubikovo kocko. In igranje z Rubikovo kocko nam pomaga razumeti grupe.

Čestitamo, naučili ste se razlike med Abelovo grupo (množenje in seštevanje sta Abelovi grupi) in ne-Abelovo grupo (grupa Rubikove kocke).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U in U R imata različne učinke glede na vrstni red - prvi del" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U in U R imata različne učinke glede na vrstni red - drugi del" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Opomba: Standardne operacije na Rubikovi kocki so običajno označene s črkami. R pomeni vrtenje desne plasti v smeri urinega kazalca za 90 stopinj, U pomeni vrtenje zgornje plasti v smeri urinega kazalca za 90 stopinj, R' je vrtenje v nasprotni smeri urinega kazalca za 90 stopinj, M' je premik srednje plasti navzgor, M pa navzdol.)

Kako se kocka vrti, si lahko ogledate in se naučite neposredno v spletni animaciji Rubikove kocke v prilogi.

## Teoretični del: Srce reševanja brez formul: Komutator

Da bi sestavili Rubikovo kocko, moramo doseči stanje, kjer **prilagodimo položaj nekaterih kosov, ne da bi spremenili položaj drugih.**

V matematiki se ta operacija imenuje komutator in se zapiše kot **A B A⁻¹ B⁻¹**.

A⁻¹ je inverzna operacija A.

Uporabimo lahko zelo vsakdanjo prispodobo – dvigalo. Predpostavimo, da želite osebo poslati iz 1. v 3. nadstropje:

1. **A**: Oseba vstopi v dvigalo.
2. **B**: Dvigalo se dvigne v 3. nadstropje.
3. **A⁻¹**: Oseba izstopi iz dvigala.
4. **B⁻¹**: Dvigalo se vrne v 1. nadstropje.

Rezultat: Dvigalo se je vrnilo na izhodiščno mesto, oseba pa se je premaknila iz 1. v 3. nadstropje. Ključno je, da ko se dvigalo vrne, osebe ni več v njem – okolje je torej obnovljeno, cilj pa je spremenil položaj.

Na primer, pri Rubikovi kocki R in R⁻¹ ustrezata vrtenju desne plasti za 90 stopinj v smeri urinega kazalca, v tretjem koraku pa se spet obrne za 90 stopinj v nasprotni smeri urinega kazalca.

Ta inverzna operacija A⁻¹ B⁻¹ lahko obnovi okolje, ki je bilo premešano z operacijo A B, in tako doseže zamenjavo samo določenih kosov, ne da bi vplivala na okolje.

Zakaj pa ne A A⁻¹ B B⁻¹? V tem primeru bi se vsak premik neposredno izničil in kosov ne bi bilo mogoče zamenjati. Takoj po operaciji A bi sledila inverzna operacija A⁻¹, kar bi skupaj pomenilo, da ni bilo storjenega nič (npr. zgornja plast se obrne za 90 stopinj v nasprotni smeri urinega kazalca, nato pa takoj za 90 stopinj v smeri urinega kazalca). Zato mora biti **A B A⁻¹ B⁻¹**, da pride do zamenjave.

To je najosnovnejša zamenjava, in najbolj priročen "atomski" gib na Rubikovi kocki je: **R U R' U'**.

![Demonstracija R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Lahko se kombinira v dolge sekvence in doseže različne permutacijske učinke, na primer: (R U R' U') (R U R' U') (R U R').

To je pravzaprav vir formul. Zakaj sploh obstajajo formule? So kombinacija serije najosnovnejših permutacijskih operacij, združenih v sekvence. Izvajanje teh sekvenc vam omogoča hitro doseganje specifičnih rezultatov, kot je sestavljanje določenega roba ali vogala. Različne sekvence se lahko uporabljajo skupaj, kar nas vodi do končnega sestavljanja kocke.

Ko razumemo načelo, lahko celo ustvarimo lastne formule. (Kako ustvariti lastne formule za Rubikovo kocko, bo podrobno razloženo v naslednjem članku.)

Torej, če želimo sestaviti Rubikovo kocko, ne da bi si zapomnili eno samo formulo, se moramo naučiti le osnovnega permutacijskega razmišljanja. To znanje lahko nato uporabimo v katerikoli drugi situaciji. Najbolj osnovna permutacijska operacija bo zamenjala položaj treh vogalnih kosov ali treh robnih kosov.

## Kako izvajati zamenjave na Rubikovi kocki

Kot je bilo že omenjeno, je najbolj priročen "atomski" zamenjalni gib na Rubikovi kocki: **R U R' U'**. Če ta gib resnično razumete, boste takoj lahko sestavili prvi dve plasti kocke.

Ta gib pravzaprav pomeni: Odmakni (desno plast), vstavi (ciljni kos), vrni (desno plast) na mesto, vrni (zgornjo plast) na mesto.

Tako smo dosegli, da smo levi sprednji vogalni kos in sredinski robni kos vstavili v spodnji desni vogal.

Ta gib se lahko nenehno spreminja v **U R U' R'** ali **F R F' R'** in tako naprej, v katerikoli položaj, obstajajo celo sredinske plasti **M U M' U'** ali celo **U2 R U2 R'**.

![Demonstracija osnovnega permutacijskega giba](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Na začetku je kocka najbolj premešana, zato lahko z uporabo številnih takšnih osnovnih permutacij najprej sestavimo eno stranico ali drug del, da zmanjšamo stopnjo premešanosti.

Poleg tega, ker je stanje zelo premešano, se lahko zadnji gib U' v **R U R' U'**, ki obnavlja okolje, včasih izpusti in takoj nadaljuje z naslednjim gibom. To se poenostavi na: Odmakni, vstavi, vrni na mesto.

Odmakni, vstavi, vrni na mesto.

To je ključni gib, čestitamo, razumete, kako igrati z Rubikovo kocko!

Toda v kasnejših fazah bomo potrebovali daljše permutacijske korake, da bomo lahko zamenjali določene kocke, ne da bi popolnoma uničili že sestavljeno stanje.

Vzemimo za primer **R U' L' U R' U' L U**. Ta gib lahko zamenja samo tri vogalne kocke, ne da bi vplival na ostale. Razdeljeno na logiko komutatorja:

```
A   = R U'   （Kocko premaknemo ven）
B   = L'     （Leva plast se premakne）
A⁻¹ = U R'   （Obnovi operacijo A）
B⁻¹ = U' L U（Obnovi operacijo B, z nastavitvijo）
```

Učinek: Levi spodnji vogalni kos ostane na mestu, ostali trije vogalni kosi se zamenjajo.

To je verjetno edina formula, ki jo boste morali razumeti v tem članku. Naučili se bomo, kako jo uporabljati v praksi, in jo bomo razumeli med izvajanjem, ne da bi se je morali naučiti na pamet.

## Praktični del: Sestavljanje od začetka

Končno smo prišli do glavnega dela tega članka, kjer vas bom korak za korakom vodil do popolnega sestavljanja Rubikove kocke, in to samo z opazovanjem in razumevanjem, od samega začetka.

Potrebne priprave:

- Rubikova kocka
- In malo potrpežljivosti (ker se osredotočamo predvsem na opazovanje in razumevanje)

Najprej predpostavimo, da že imate Rubikovo kocko. Premešali jo bomo po mednarodnem standardu (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), nato pa jo bomo skupaj sestavili.

Lahko pa jo igrate tudi na spletu, s klikom na to povezavo boste videli že premešano kocko: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Začetno stanje premešane Rubikove kocke](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Pri sestavljanju se bomo oprli na izjemno elegantno Rouxovo metodo mostov. Ta metoda se razlikuje od sestavljanja po plasteh, saj najprej sestavimo 1x2x3 bloke na levi in desni strani, imenovane levi in desni most, nato pa zgornjo plast in preostale položaje.

Metoda mostov je zelo svobodna in prilagodljiva, poleg tega pa zahteva manj korakov kot mnoge znane metode in relativno malo formul za pomnjenje, saj temelji predvsem na logiki komutatorjev. V tem okviru se bomo naučili, kako sestaviti Rubikovo kocko, ne da bi si zapomnili eno samo formulo.

![Shematski prikaz poteka Rouxove metode](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Prvi korak: Fiksiranje položaja za opazovanje

Položaj za opazovanje pri metodi mostov je fiksen; med sestavljanjem kocke nam je ni treba pogosto obračati, temveč ohranjamo enak kot za razmišljanje in sestavljanje. S tem fiksnim pogledom lahko zelo enostavno vidimo nekatere vogalne in robne kocke ter vemo, kam sodijo.

To je naš referenčni kot:

- Spredaj (obrnjeno proti vam): Zelena stran
- Levo: Rdeča
- Desno: Oranžna
- Zgoraj: Rumena
- Spodaj: Bela
- Zadaj: Modra

### Drugi korak: Sestavljanje levih in desnih mostov

**Vrstni red sestavljanja levega mostu:**

1. Najprej namestite belo-rdeč robni kos (levi spodnji steber).
2. Nato namestite zadnji modro-rdeč robni kos.
3. Nazadnje namestite dva sprednja rdeča vogalna kosa.

Shema dokončanega levega mostu:

![Dokončano stanje levega mostu](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ta postopek ne zahteva nobenih formul; zadostujeta opazovanje in razumevanje. Z vajo boste postali vse spretnejši.

**F' L**: Z opazovanjem poiščite rdeče-bel robni kos, ga namestite na svoje mesto, tako da je bela stran obrnjena navzdol, rdeča pa na levo.

![Demonstracija namestitve belo-rdečega robnega kosa](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Namestite modro-rdeč robni in vogalni kos.

![Namestitev modro-rdečega robnega in vogalnega kosa](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Poiščite položaja zadnjih dveh kock levega mostu in jih poskusite namestiti. Tako boste dobili popoln levi most.

![Namestitev zadnjih dveh kock levega mostu](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Desni most** se sestavi na enak način, le da rdečo zamenjate z oranžno in ponovite zgornje korake. Vendar pazite, da ne premešate že sestavljenega levega mostu. Če potrebujete prostor, lahko levi most najprej premaknete na stran, da operacije na desni ne vplivajo nanj, in ga po končanih premikih na desni vrnete na svoje mesto.

**Sredina desnega mostu**: U' M U' R2

![Namestitev sredinskega robnika desnega mostu](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Prvi kos desnega mostu**: U' M' U2 R' U R

![Namestitev prvega kosa desnega mostu](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Sestavili smo zadnji modul desnega mostu in ga želimo vstaviti na svoje mesto, zato najprej odmaknemo levi most (F'), sprostimo prostor, nato premaknemo modul (U) in nazadnje hkrati namestimo levi in desni most.

![Vstavitev zadnjega kosa desnega mostu](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

To je stanje, ko sta oba mostova dokončana. Pomembno je le, da so mostovi oblikovani, ostalih barvnih kosov se za zdaj ne obremenjujemo.

![Dokončano stanje obeh mostov](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Tretji korak: Sestavljanje vogalnih kosov zgornje plasti

Ko ste sestavili leva in desna mostova, bomo zdaj začeli sestavljati preostale štiri vogalne kocke. Tukaj bomo uporabili tri cikle vogalnih kock, ki omogočajo, da se tri kocke zamenjajo v položajih od A do B, B do C in C nazaj do A.

![Shematski prikaz treh ciklov vogalnih kosov: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Trije cikli vogalnih kosov

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Levi spodnji vogalni kos ostane na mestu</li>
      <li>Ostali trije vogalni kosi se zamenjajo v smeri **nasprotni smeri urinega kazalca**</li>
      <li>Vendar se njihove notranje barve obrnejo v **smeri urinega kazalca**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (zrcalna različica)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Desni spodnji vogalni kos ostane na mestu</li>
      <li>Ostali trije vogalni kosi se zamenjajo v smeri **urinega kazalca**</li>
      <li>Vendar se njihove notranje barve obrnejo v **nasprotni smeri urinega kazalca**</li>
    </ul>
  </div>
</div>

![Demonstracija zrcalne različice treh ciklov vogalnih kosov](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Smeri vogalnih kosov, s katerimi se boste srečali, so štiri vrste: 0, 1, 2 ali 4 pravilno orientirani vogali.

- **4 pravilni vogali**: Sestavljeno stanje
- **1 pravilen vogal** (oblika ribe): Enostavno ponovite tri cikle ali zrcalno različico in bo sestavljeno.
- **0 / 2 pravilna vogala**: Najprej premaknite napačen vogal v položaj, ki ga trije cikli ne bodo prizadeli (levi spodnji vogal), izvedite en tri cikel in dobili boste 1 pravilen vogal, s čimer se vrnete na prejšnjo situacijo.

Včasih je treba osnovno različico treh ciklov izvesti dvakrat, da se kocka sestavi, medtem ko zrcalna različica treh ciklov potrebuje le eno izvedbo za popolno sestavljanje. Za začetnike je dovolj, da najprej obvladajo osnovno različico, se osredotočijo na opazovanje in razumevanje, nato pa bodo lahko vse skupaj povezali. Ta tri cikel z rumenim obrnjenim navzgor je tudi znana klasična formula – formula leve in desne ribice, zato si lahko predstavljate obliko ribice.

Te formule si tudi ni treba zapomniti; opazujte, kako se premikata dve zeleni kocki, in po nekaj poskusih jo boste že obvladali. Bistvo je v zamenjavi treh vogalnih kosov zgornje plasti.

Ko smo sestavili leva in desna mostova, smo ugotovili, da sta na vrhu dve rumeni barvi. Zato smo levi spodnji vogal zamenjali z ne-rumenim in izvedli eno operacijo treh ciklov vogalnih kosov. Nato smo izvedli še 2 tri cikle ali eno zrcalno različico treh ciklov, da smo dosegli, da so vsi štirje vogali zgornje plasti rumeni, obrnjeni navzgor.

![Demonstracija procesa treh ciklov vogalnih kosov](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Štirje rumeni vogali so sestavljeni!

![Sestavljeno stanje štirih rumenih vogalov](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Prilagoditev položaja (poravnava stranskih barv)

Ko so vsi štirje vogalni kosi z rumeno stranjo obrnjeni navzgor, je treba poravnati še barve na njihovih straneh, da se vogalni kosi dokončno namestijo na svoje mesto.

Takrat uporabite **variacijo J-perm**: **R U2 R' U' R U2 L' U R' U' L**

Logiko te formule lahko razčlenimo na "premik parov + logična zamenjava":

- Prva polovica `R U2 R' U' R`: Premakne par v varno cono za začasno shranjevanje, da se sprosti prostor.
- Druga polovica `U2 L' U R' U' L`: Uporablja logiko treh ciklov za natančno zamenjavo dveh vogalnih kosov.

**Učinek**: Dva desna vogalna kosa zamenjata položaj, rumena stran pa ostane obrnjena navzgor, medtem ko ostali vogalni kosi ostanejo nespremenjeni.

To je enako, kot bi lahko zamenjali položaja katerihkoli dveh sosednjih vogalnih kosov (z U prilagodite, katera dva vogalna kosa sta na desni). Z nekajkratno ponovitvijo zamenjav se bodo vsi štirje vogalni kosi popolnoma poravnali in namestili na svoje mesto.

![Demonstracija J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Te formule si tudi ni treba zapomniti; opazujte, kako se premikata dve zeleni kocki, in po nekaj poskusih jo boste že obvladali. Bistvo je v zamenjavi dveh desnih vogalnih kosov zgornje plasti, medtem ko rumena stran ostaja obrnjena navzgor.

### Četrti korak: Sestavljanje zadnjih šestih robnih kosov (LSE, Last Six Edges)

Tukaj najprej poravnajte sredinske kocke, tako da je rumena na vrhu, bela na dnu, nato pa prilagodite robne kocke.

Ostalo je le še 6 robnih kosov. Ta korak uporablja le dve operaciji, **M** in **U**, in je zelo intuitiven.

#### 4a: Prilagoditev orientacije (EO, Edge Orientation)

**Metoda presoje**: Preverite, ali je bela/rumena nalepka na robnem kosu obrnjena navzgor ali navzdol.

- Navzgor / Navzdol = Pravilno orientiran robnik ✓
- Na stran = Napačno orientiran robnik ✗

**Metoda prilagoditve**: Uporabite **M U M'** ali **M' U M** za obračanje napačno orientiranih robnikov.

![Demonstracija M U M' za obračanje napačno orientiranih robnikov](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitivno razumevanje: M obrne sredinski robni kos navzgor, U prilagodi položaj, M' pa ga spet obrne nazaj.

Ponovite nekajkrat, dokler niso vsi beli/rumeni robni kosi obrnjeni navzgor ali navzdol.

Pravilno orientirane robnike lahko imenujemo "dobri robniki", napačno orientirane pa "slabi robniki".

Kot je poudarjeno na sliki, so trije robniki na zgornji plasti "slabi robniki", saj niso niti rumeni niti beli.

![Poudarjeni slabi robniki](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Nasveti za prilagoditev**: Srečali se boste le s štirimi vrstami situacij z napačno orientiranimi robniki:

- **0 napačno orientiranih robnikov**: Sestavljeno stanje
- **Ne 0 in ne 4 napačno orientirani robniki**: Z **M' U M** spremenite število napačno orientiranih robnikov, povečajte ga na 4.
- **4 napačno orientirani robniki (2 zgoraj, 2 spodaj)**: Z **M' U2 M** zamenjajte zgornje in spodnje robnike, kar bo pripeljalo do situacije 3 zgoraj in 1 spodaj.
- **4 napačno orientirani robniki (3 zgoraj, 1 spodaj)**: Trije napačno orientirani robniki na zgornji plasti bodo tvorili puščico. Zgornjo plast zavrtite tako, da puščica kaže na tisti napačno orientiran robnik na spodnji plasti, nato izvedite **M' U M**. Vsi štirje napačno orientirani robniki se bodo izničili in postali pravilno orientirani.

![Demonstracija odstranjevanja puščice štirih napačno orientiranih robnikov](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Če se puščica ne pojavi, večkrat poskusite **M' U M**; vedno se bo sestavila. Ko boste napredovali, lahko počasi iščete vzorce.

#### 4b: Sestavljanje levih in desnih robnikov (rdeči in oranžni)

Poiščite rdeče-rumen in oranžno-rumen robnik (cilj je, da se vrneta na levi in desni rob) in ju z uporabo treh ciklov robnikov premaknite na pravilni položaj.

**Nasvet**:

1. Rdeče-rumen (ali oranžno-rumen) robnik premaknite nad sredinsko plast in ga s pomočjo zamenjave zgornjih in spodnjih robnikov potopite na dno (**M' U2 M**).
2. Drugi oranžno-rumen (ali rdeče-rumen) robnik potopite na nasprotno stran.
3. Zavrtite zgornjo plast tako, da se rdeča stranica pojavi nasproti potopljenega rdeče-rumenega robnika.
4. Sredinsko plast obrnite za pol kroga **M2**, nato pa z opazovanjem zgornje plasti namestite **U**.

![Demonstracija namestitve levih in desnih robnikov](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Reševanje zadnjih štirih robnikov (modri in zeleni)

**Nasveti**:

- Nenehno uporabljajte **tri cikle robnikov** za zamenjavo zgornjih in spodnjih robnikov: **M' U2 M**, zadnji korak pa je namestitev z opazovanjem **U2**.
- Hitri trik: Belo-zelen (ali belo-moder) robnik postavite nad ciljni položaj, zamenjajte zgornje in spodnje robnike, in belo-zelen (belo-moder) robnik bo na svojem mestu.

Obstajajo samo tri možnosti:

- Že pravilno → Končano!
- Potrebno M2 → Izvedite **M2** enkrat
- Potrebna zamenjava → **M' U2 M U2** ali **M U2 M' U2**

Logiko treh ciklov robnikov lahko poenostavimo: M' pomeni, da sredinska plast pride navzgor, U2 zgornja plast se obrne za pol kroga, M sredinska plast se vrne, U2 zgornja plast se vrne.

![Demonstracija treh ciklov robnikov](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Končano!

![Sestavljena Rubikova kocka](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Povzetek

Ni vam treba na pamet učiti formul, temveč le logiko komutatorjev "odpri – izvedi operacijo – zapri". Ugotovili boste, da je ta postopek veliko bolj zabaven kot učenje formul, in ne boste se bali, da bi ga pozabili, saj ga lahko kadarkoli sami izpeljete.

Enak pristop lahko reši katero koli Rubikovo kocko, vključno z vsemi vrstami nenavadnih oblik.

Če pa želite tekmovati v hitrostnem sestavljanju, vas čaka pot neskončnega trdega dela. Za začetnike pa ne bi smelo biti problem doseči čas pod 90 sekund z malo vaje.

Obstaja na tisoče načinov za reševanje kocke; poglejte, ali lahko najdete bolj elegantno ali priročnejšo metodo.

Svet Rubikove kocke ponuja neskončno zabave. Želim vam veliko užitkov!

## Priloga 1: Zapiski k tej metodi reševanja Rubikove kocke (Rubikova mantra)

1. **Sestavljanje levih in desnih mostov: Z opazovanjem in intuicijo**
   - Nasvet: Ko boste zelo spretni pri opazovanju in predvidevanju, lahko glede na specifično stanje kocke prednostno sestavljate druge module ali pa hkrati gradite oba mostova, kar omogoča manj premikov in je zelo svobodno.
2. **Sestavljanje orientacije zgornjih štirih vogalnih kosov: štiri rumene strani navzgor**
   - Trije cikli vogalnih kosov zgornje plasti: **R U' L' U R' U' L U** (levi spodnji vogalni kos ostane na mestu, notranje barve ostalih treh vogalnih kosov se obrnejo v smeri urinega kazalca)
   - Zrcalna različica treh ciklov vogalnih kosov zgornje plasti: **L' U R U' L U R' U'** (desni spodnji vogalni kos ostane na mestu, notranje barve ostalih treh vogalnih kosov se obrnejo v nasprotni smeri urinega kazalca)
3. **Sestavljanje stranskih ploskev zgornjih štirih vogalnih kosov**
   - **Fina nastavitev položaja vogalnih kosov zgornje plasti**: **R U2 R' U' R U2 L' U R' U' L** (ohranite vse štiri vogalne kose z rumeno stranjo navzgor in zamenjajte položaja dveh vogalnih kosov na desni strani)
4. **Spreminjanje orientacije robnikov, da so beli ali rumeni obrnjeni navzgor/navzdol**
   - Najprej poravnajte sredinske kocke, tako da je rumena na vrhu in bela na dnu, nato prilagodite robnike.
   - Z **M' U M** spremenite število napačno orientiranih robnikov, ustvarite puščico, jo usmerite proti napačno orientiranemu robniku, izvedite **M' U M** enkrat, in vsi štirje napačno orientirani robniki se bodo izničili in namestili na svoje mesto.
5. **Sestavljanje robnikov na levi in desni strani** (rdeči in oranžni)
   - Najprej rdeče-rumen (ali oranžno-rumen) robnik s pomočjo zamenjave zgornjih in spodnjih robnikov potopite na dno (**M' U2 M**).
6. **Sestavljanje preostalih robnikov** (modri in zeleni)
   - Nenehno uporabljajte **tri cikle robnikov** za zamenjavo zgornjih in spodnjih robnikov: **M' U2 M**, zadnji korak pa je namestitev z opazovanjem **U2**.

Zgornjih formul si sploh ni treba zapomniti; dodane so le v dodatek za lažje iskanje. V resnici, ko se sami lotite reševanja, boste z nekaj ponovitvami in opazovanjem, kako se premikajo posamezne kocke, hitro razumeli in se navadili. Ključno je le zamenjati tri kotne kocke zgornje plasti.

## Priloga 2: Uporabne spletne strani in orodja

Za vas sem ustvaril tudi 3D Rubikovo kocko za spletno igranje, ki jo lahko poljubno obračate, premešate in sestavite po določenih formulah. Vsak korak je prikazan z lepo animacijo!

[3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Spletno orodje 3D Rubikova kocka](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Formula za premešanje, uporabljena v tej vadnici: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Koraki za sestavljanje levih in desnih mostov v tej vadnici: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

S klikom na to povezavo boste videli že premešano kocko: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Merilnik časa za Rubikovo kocko, ki ga uporabljajo svetovni prvaki: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
