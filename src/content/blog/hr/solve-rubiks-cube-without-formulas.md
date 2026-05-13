---
layout: blog
title: "Kako složiti Rubikovu kocku bez formula: razumljivo i za osnovnoškolce"
date: 2026-05-09 12:00:00
tags:
  - Rubikova kocka
  - vodič
  - teorija grupa
  - matematika
  - Roux metoda
categories: 日常折腾
description: Koristeći se idejom komutatora iz teorije grupa i Roux mostnom metodom, naučite korak po korak, od nule i bez ijedne formule, kako složiti Rubikovu kocku 3x3.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Možda ste početnik s Rubikovom kockom i nikada je niste uspjeli složiti do kraja.

Većina takozvanih vodiča na tržištu samo vam nudi hrpu čudnih formula, govoreći vam da samo trebate napraviti ovo pa ono i kocka će se složiti. Ali nakon što ih isprobate, i dalje ne razumijete zašto to funkcionira.

Ovaj članak bit će vaš spas. Naučit ćete, korak po korak, složiti Rubikovu kocku od nule, bez pamćenja ijedne formule. Saznat ćete o podrijetlu kocke i shvatiti kako ona funkcionira. Vodit ću vas od teorije do prakse, korak po korak, kako biste u potpunosti složili cijelu kocku i naučio vas kako promatrati.

Možda će ovo biti prvi put da sami uspješno složite cijelu Rubikovu kocku.

<!--more-->

## Rođenje Rubikove kocke

Zašto Rubikova kocka ima tako veliku privlačnost? Počnimo s pričom o njezinu nastanku.

Godine 1974. mađarski profesor arhitekture Ernő Rubik, kako bi studentima demonstrirao kako se dijelovi mogu samostalno kretati bez narušavanja cjelokupne strukture, izradio je prvi prototip od drveta. Obojio je šest strana različitim bojama i tako je rođena Rubikova kocka.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Nevjerojatan broj kombinacija

Rubikova kocka 3×3 ima 8 kutnih dijelova, 12 rubnih dijelova i 6 središnjih dijelova, što je ukupno 26 vidljivih kockica. Međutim, zapravo se može pomicati 20 dijelova, svi osim šest središnjih kockica na svakoj strani.

Koliko je onda ukupno stanja? **4.3 × 10¹⁹**.

Što to znači? Taj broj stanja veći je od broja zrnaca pijeska na Zemlji. Kad biste svake sekunde pokušavali milijardu stanja, trebalo bi vam više od **1300 godina** da ih prođete sve. Kad bi se svako stanje zapisalo na jedan list papira i ti se listovi naslagali, debljina bi bila ekvivalentna 14.000 putovanja od Zemlje do Sunca i natrag.

Mala Rubikova kocka 3x3 zaista krije iznenađenja. Zbog svog inovativnog i zabavnog načina igre, s bezbroj varijacija i beskrajnim šarmom, odmah je po izlasku na tržište izazvala pomamu, privlačeći brojne entuzijaste i igrače da je isprobaju. Ubrzo su se razvila natjecanja u slaganju kocke, razne metode igre (brzo slaganje Speedsolving, slaganje zavezanih očiju Blindfolded, jednom rukom One-Handed, nogama With Feet), različiti pristupi slaganju (metoda po slojevima Layer by Layer, kutovi prvi Corners First, CFOP, Roux mostna metoda, Petrus, ZZ), pa čak i kocke neobičnih oblika (od 2x2 do 7x7, piramida Pyraminx, Skewb, Megaminx) pojavljivale su se jedna za drugom.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Čar Rubikove kocke toliko je velika da su matematičari desetljećima proučavali matematiku koja stoji iza nje, tražeći "Božji broj". Astronauti su je nosili u svemir, a ljudi svih dobi i spolova isticali su se na raznim natjecanjima. No, unatoč njezinoj privlačnosti, igrača kocke još uvijek je relativno malo. Stoga, ovim člankom želim vas naučiti kako složiti kocku i uživati u zabavi koju ova edukativna igra donosi.

## Zamka formula

Većina metoda slaganja na tržištu zahtijeva od igrača da pamte mnogo formula, što je vrlo obeshrabrujuće za početnike. Prije nego što osjete radost slaganja kocke, zaustave ih formule. Poznata CFOP metoda ima više od 100 formula, a početnici moraju zapamtiti barem nekoliko desetaka.

Zato vam danas želim predstaviti metodu koja vam omogućuje da uživate u slaganju kocke bez pamćenja formula. Moći ćete je složiti samo promatranjem i razumijevanjem.

## Matematičko oružje: Teorija grupa (Group Theory)

Pitanje: Kako složiti Rubikovu kocku bez pamćenja ijedne formule?

Ovdje ćemo izvaditi naše veliko matematičko oružje: teoriju grupa. Nema problema koji se ne može riješiti matematikom.

Kakve veze imaju Rubikova kocka i teorija grupa? Kocka je zapravo grupa. Svaki okret na kocki je operacija permutacije. Ova operacija ima nekoliko svojstava: može se kombinirati, može se poništiti (invertirati), ali nije komutativna.

Množenje, koje smo učili u osnovnoj školi, komutativna je operacija – rezultat A × B i B × A je potpuno isti. Međutim, u grupi Rubikove kocke, A i B nisu ekvivalentni nakon zamjene; prvo R pa U, i prvo U pa R, potpuno su različite operacije. Dakle, razumijevanjem grupa, razumijemo i Rubikovu kocku. A igranje kockom pomaže nam razumjeti grupe.

Čestitam, upravo ste naučili razliku između Abelove grupe (množenje i zbrajanje su Abelove grupe) i ne-Abelove grupe (grupa Rubikove kocke).

(Dopuna: Neki su čitatelji istaknuli da gornja tvrdnja nije bila sasvim stroga, pa evo male dopune. Cijeli brojevi čine Abelovu grupu s obzirom na zbrajanje, dok prirodni brojevi N s obzirom na zbrajanje ne čine Abelovu grupu, budući da, primjerice, za 3 ne postoji inverz -3, jer -3 nije prirodan broj. Nenulti realni brojevi, nenulti racionalni brojevi i nenulti kompleksni brojevi čine Abelovu grupu s obzirom na množenje. Analogija u izvornom tekstu prvenstveno je imala za cilj da početnici shvate ključnu intuiciju "komutativno vs nekomutativno".)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Napomena: Standardne operacije kocke obično se označavaju slovima: R predstavlja rotaciju desnog sloja u smjeru kazaljke na satu za 90 stupnjeva, U predstavlja rotaciju gornjeg sloja u smjeru kazaljke na satu za 90 stupnjeva, R' je rotacija u smjeru suprotnom od kazaljke na satu za 90 stupnjeva, M' je pomak srednjeg sloja prema gore, a M je pomak srednjeg sloja prema dolje.)

Možete izravno promatrati i učiti kako se Rubikova kocka okreće u online animaciji u Dodatku.

## Načelo: Srž slaganja bez formula: Komutator (Commutator)

Da bismo složili Rubikovu kocku, moramo postići stanje u kojem: **podešavamo položaj određenih kockica, a da pritom ne mijenjamo položaje ostalih.**

U matematici se ova operacija naziva komutator i piše se kao **A B A⁻¹ B⁻¹**.

A⁻¹ je inverzna operacija od A.

Možemo to usporediti s vrlo svakodnevnom situacijom – liftom. Pretpostavimo da trebate prevesti osobu s 1. na 3. kat:

1.  **A**: Osoba ulazi u lift.
2.  **B**: Lift se penje na 3. kat.
3.  **A⁻¹**: Osoba izlazi iz lifta.
4.  **B⁻¹**: Lift se vraća na 1. kat.

Rezultat: Lift se vratio na početnu poziciju, ali je osoba premještena s 1. na 3. kat. Ključno je u tome što kad se lift vratio, osoba više nije bila unutra – tako je okolina vraćena u prvobitno stanje, ali je cilj promijenio položaj.

Na primjer, na Rubikovoj kocki, R i R⁻¹ odgovaraju rotaciji desnog sloja za 90 stupnjeva u smjeru kazaljke na satu, a u trećem koraku ponovno za 90 stupnjeva u smjeru suprotnom od kazaljke na satu.

Ova inverzna operacija A⁻¹ B⁻¹ može vratiti okolinu poremećenu operacijom A B, čime se postiže razmjena samo određenih kockica, bez utjecaja na okolinu.

Zašto onda nije A A⁻¹ B B⁻¹? Zato što bi se tako svaka radnja izravno poništila i kockice se ne bi mogle zamijeniti. Čim biste napravili operaciju A, odmah bi uslijedila inverzna operacija A⁻¹, što bi ukupno značilo da niste ništa učinili (npr. gornji sloj okrenete za 90 stupnjeva u smjeru suprotnom od kazaljke na satu, a zatim ga odmah okrenete za 90 stupnjeva u smjeru kazaljke na satu). Stoga mora biti **A B A⁻¹ B⁻¹** da bi se ostvarila zamjena.

Ovo je najosnovnija zamjena, a najprikladnija elementarna radnja na Rubikovoj kocki jest: **R U R' U'**.

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Može se kombinirati u duže sekvence i postići različite efekte permutacije, na primjer ova: (R U R' U') (R U R' U') (R U R').

Zapravo, to je i izvor formula. Zašto uopće postoje formule? One su samo kombinacija niza najosnovnijih permutacijskih operacija, složenih u sekvence. Izvođenjem tih sekvenci možete brzo postići određeni rezultat, poput slaganja određenog ruba ili kutnog dijela. Različite sekvence mogu se kombinirati kako bi nas dovele do konačnog slaganja kocke.

Razumijevanjem principa, čak možemo kreirati vlastite formule. (Kako sami stvoriti formule za Rubikovu kocku, detaljno ćemo objasniti u sljedećem članku.)

Dakle, da bismo složili kocku bez pamćenja ijedne formule, trebamo samo naučiti princip osnovnih permutacija, a sve ostalo možemo primijeniti analogijom. Najelementarnija radnja permutacije zamijenit će položaje triju kutnih kockica ili triju rubnih kockica.

## Kako izvršiti zamjenu na kocki

Kao što je ranije spomenuto, najprikladnija elementarna radnja zamjene na Rubikovoj kocki jest: **R U R' U'**. Ako duboko razumijete ovaj pokret, odmah ćete moći složiti prva dva sloja kocke.

Ovaj pokret zapravo znači: pomaknuti (desni sloj), umetnuti (ciljnu kockicu), vratiti (desni sloj), vratiti (gornji sloj).

Tako smo postigli umetanje prednje lijeve kutne kockice i središnje rubne kockice u donji desni kut.

Ovaj se pokret može stalno mijenjati, pretvarajući se u **U R U' R'**, ili **F R F' R'**, i tako dalje, na bilo kojem mjestu, pa čak i sa središnjim slojem **M U M' U'**, ili **U2 R U2 R'**.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

U početnoj fazi, kocka je najviše kaotična, stoga se može koristiti mnogo ovakvih osnovnih permutacija za slaganje jedne strane ili drugog dijela, čime se smanjuje razina kaosa.

Štoviše, budući da je stanje vrlo kaotično, posljednji pokret U' u **R U R' U'**, koji vraća okolinu, može se čak izostaviti ovisno o situaciji i odmah prijeći na sljedeći pokret. To se svodi na: pomakni, umetni, vrati.

Pomakni, umetni, vrati.

To je ključna radnja, čestitam, razumijete kako se igra s Rubikovom kockom!

Međutim, u kasnijim fazama trebat će nam duži koraci permutacije kako bismo zamijenili određene kockice bez potpunog narušavanja već složenog stanja.

Uzmimo za primjer **R U' L' U R' U' L U**. Ovaj pokret može zamijeniti samo tri kutne kockice, bez utjecaja na ostale. Razloženo na logiku komutatora:

```
A   = R U'   (pomicanje kutne kockice)
B   = L'     (pomicanje lijevog sloja)
A⁻¹ = U R'   (poništavanje operacije A)
B⁻¹ = U' L U (poništavanje operacije B, s prilagodbom)
```

Učinak: Lijeva donja kutna kockica ostaje na mjestu, dok se ostale tri kutne kockice zamjenjuju.

Ovo su vjerojatno jedine dvije formule koje trebate razumjeti u ovom članku. Naučit ćemo ih koristiti u praktičnom dijelu, shvaćajući ih kroz samu operaciju, umjesto da ih učimo napamet.

## Praktični dio: Slaganje od nule

Napokon dolazimo do glavnog dijela ovog članka. Vodit ću vas korak po korak, oslanjajući se isključivo na promatranje i razumijevanje, kako biste u potpunosti složili Rubikovu kocku od nule.

Potrebna priprema:

- Rubikova kocka
- i malo strpljenja (jer se prvenstveno fokusiramo na promatranje i razumijevanje)

Prvo, pretpostavimo da već imate Rubikovu kocku. Nasumično ćemo je pomiješati prema međunarodnom standardu (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), a zatim ću je s vama složiti.

Ili možete odmah igrati online verziju; klikom na ovu poveznicu vidjet ćete već pomiješanu kocku: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Za slaganje možemo se poslužiti idejom vrlo elegantne Roux mostne metode. Takozvana mostna metoda, za razliku od slaganja sloj po sloj, prvo slaže blokove 1×2×3 s lijeve i desne strane, poznate kao lijevi i desni most, a zatim slaže gornji sloj i preostale dijelove.

Mostna metoda je vrlo slobodna i fleksibilna, zahtijeva manje koraka od mnogih poznatih metoda i relativno malo formula za pamćenje, jer se u osnovi oslanja na logiku komutatora. U ovom okviru, naučit ćemo kako složiti kocku bez pamćenja ijedne formule.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Prvi korak: Fiksiranje pozicije promatranja

Pozicija promatranja kod mostne metode je fiksna. Tijekom slaganja, ne moramo često okretati kocku, već zadržavamo isti kut za razmišljanje i slaganje. Prema ovoj fiksnoj strani, vrlo lako možemo vidjeti određene kutne i rubne kockice i znati gdje bi trebale ići.

Možemo koristiti ovaj kut kao referentnu točku:

- Sprijeda (okrenuto prema vama): zelena strana
- Lijevo: crvena
- Desno: narančasta
- Gore: žuta
- Dolje: bijela
- Straga: plava

### Drugi korak: Izgradnja lijevog i desnog mosta

**Redoslijed izgradnje lijevog mosta:**

1.  Prvo postavite bijelo-crvenu rubnu kockicu na mjesto (donji lijevi stupac).
2.  Zatim postavite plavo-crvenu rubnu kockicu straga na mjesto.
3.  I na kraju, postavite dvije prednje crvene kutne kockice na mjesto.

Dijagram stanja dovršenog lijevog mosta:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ovaj proces ne zahtijeva nikakve formule; dovoljno je samo promatranje i razumijevanje. Uz malo vježbe postat ćete sve vještiji.

**F' L**: Koristeći metodu promatranja, pronađite crveno-bijelu rubnu kockicu i postavite je na mjesto, tako da bijela strana bude dolje, a crvena lijevo.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Postavite plavo-crvenu rubnu kockicu i kutne kockice na mjesto.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Pronađite posljednje dvije kockice lijevog mosta, pronađite način da ih postavite na mjesto i tako smo dobili savršen lijevi most.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Desni most se radi analogno**, zamijenite crvenu boju narančastom i ponovite gore navedene korake. Međutim, ovdje treba paziti da se ne poremeti već složeni lijevi most. Ako je potrebno privremeno pomicanje, lijevi most se može pomaknuti na stranu kako operacije na desnoj strani ne bi utjecale na njega, a nakon završetka operacija na desnoj strani, lijevi most se vraća na mjesto.

**Sredina desnog mosta**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Prva kockica desnog mosta**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Dovršili smo posljednji modul desnog mosta i želimo ga umetnuti na mjesto, pa prvo pomaknemo lijevi most (F') da napravimo prostor, zatim pomaknemo modul (U), i na kraju istovremeno vratimo i lijevi i desni most na mjesto.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ovo je stanje kada su lijevi i desni most dovršeni. Važno je da su mostovi formirani, a ostale obojene kockice za sada ne trebamo brinuti.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Treći korak: Slaganje gornjih kutnih kockica

Kada ste složili lijeve i desne mostove, prelazimo na slaganje preostale četiri kutne kockice. Ovdje ćemo koristiti trocikliranje kutnih kockica, gdje se tri kuta rotiraju, krećući se od A do B, B do C, i C natrag do A.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Trocikliranje kutnih kockica

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Lijeva donja kutna kockica ostaje na mjestu</li>
      <li>Ostale tri kutne kockice se zamjenjuju u smjeru <strong>suprotnom od kazaljke na satu</strong></li>
      <li>Ali njihove unutarnje boje će se okretati u smjeru <strong>kazaljke na satu</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (zrcalna verzija)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Desna donja kutna kockica ostaje na mjestu</li>
      <li>Ostale tri kutne kockice se zamjenjuju u smjeru <strong>kazaljke na satu</strong></li>
      <li>Ali njihove unutarnje boje će se okretati u smjeru <strong>suprotnom od kazaljke na satu</strong></li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Možete naići na samo četiri vrste orijentacije kutnih kockica: 0, 1, 2 ili 4 ispravna kuta.

-   **4 ispravna kuta**: Završeno stanje
-   **1 ispravan kut** (oblik ribe): Ponovite trocikliranje ili zrcalnu verziju i bit će gotovo.
-   **0 / 2 ispravna kuta**: Prvo postavite pogrešan kut na poziciju gdje trocikliranje neće utjecati (donji lijevi kut), napravite jedno trocikliranje, i dobit ćete 1 ispravan kut, vraćajući se na prethodni slučaj.

Ponekad osnovnu verziju trocikliranja treba izvesti dvaput da bi se složila, dok zrcalna verzija trocikliranja može potpuno složiti kocku samo jednim izvođenjem. Početnici bi trebali prvo svladati osnovnu verziju, fokusirajući se na promatranje i razumijevanje, a zatim će sve ostalo doći samo po sebi. Ovo trocikliranje s žutom stranom prema gore također je poznata klasična formula – formula lijeve i desne ribe; možete se upoznati s oblikom ribe.

Ni ovu formulu ne trebate pamtiti; promatrajte kako se pomiču dvije zelene kockice, napravite to sami nekoliko puta i upoznat ćete se s njom. Srž je u zamjeni triju kutnih kockica gornjeg sloja.

Nakon što smo dovršili lijeve i desne mostove, primijetili smo da na vrhu imamo dvije žute stranice. Stoga smo donji lijevi kut zamijenili onim koji nije žut, te izveli operaciju trocikliranja kutnih kockica. Zatim smo napravili još 2 trocikliranja, ili jedno zrcalno trocikliranje, kako bismo osigurali da sve četiri kutne kockice gornjeg sloja imaju žutu stranu prema gore.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Četiri žuta kuta su složena!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Podešavanje položaja (poravnavanje bočnih boja)

Kad su sve četiri kutne kockice sa žutom stranom prema gore, još uvijek je potrebno poravnati bočne boje kutnih kockica kako bi se one potpuno postavile na svoje mjesto.

Tada koristimo **varijantu J-permutacije**: **R U2 R' U' R U2 L' U R' U' L**

Logika ove formule može se razložiti na "premještanje para + logička zamjena":

-   Prvi dio `R U2 R' U' R`: Premješta par u sigurnu zonu za privremeno spremanje, oslobađajući prostor.
-   Drugi dio `U2 L' U R' U' L`: Koristi logiku trocikliranja za preciznu zamjenu dviju kutnih kockica.

**Učinak**: Dvije kutne kockice na desnoj strani zamjenjuju mjesta, dok žuta strana ostaje gore, a ostale kutne kockice se ne mijenjaju.

To znači da se može zamijeniti položaj bilo koje dvije susjedne kutne kockice (koristeći U za podešavanje koja će dva kuta biti desno), ponavljanjem zamjene nekoliko puta, sve četiri kutne kockice će se potpuno poravnati i postaviti na svoje mjesto.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ni ovu formulu ne trebate pamtiti; promatrajte kako se pomiču dvije zelene kockice, napravite to sami nekoliko puta i upoznat ćete se s njom. Srž je u zamjeni dviju desnih kutnih kockica gornjeg sloja, dok žuta strana ostaje gore.

### Četvrti korak: Slaganje posljednjih šest rubnih kockica (LSE, Last Six Edges)

Ovdje prvo poravnajte središnje kockice tako da žuta bude gore, a bijela dolje, a zatim podesite rubne kockice.

Ostalo je samo 6 rubnih kockica. Ovaj korak koristi samo operacije **M** i **U**, što je vrlo intuitivno.

#### 4a: Podešavanje orijentacije (EO, Edge Orientation)

**Metoda provjere**: Pogledajte jesu li bijele/žute naljepnice rubnih kockica okrenute prema gore ili dolje.

-   Gore / Dolje = Ispravan rub ✓
-   Bočno = Pogrešan rub ✗

**Metoda podešavanja**: Okrenite pogrešan rub pomoću **M U M'** ili **M' U M**.

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitivno razumijevanje: M okreće srednji sloj rubne kockice prema gore, U podešava položaj, a M' je vraća natrag.

Ponovite nekoliko puta dok sve bijele/žute strane rubnih kockica ne budu okrenute prema gore ili dolje.

Rubne kockice s ispravnom orijentacijom možemo nazvati 'dobrim rubovima', a one s pogrešnom orijentacijom 'lošim rubovima'.

Kao što je prikazano, tri istaknuta ruba na gornjem sloju su loši rubovi, jer nisu ni žuti ni bijeli.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Savjeti za podešavanje**: Možete naići na samo četiri vrste situacija s lošim rubovima:

-   **0 loših rubova**: Završeno stanje
-   **Nije ni 0 ni 4 loša ruba**: Pomoću **M' U M** promijenite broj loših rubova, povećavajući ih na 4.
-   **4 loša ruba (2 gore, 2 dolje)**: Zamijenite gornje i donje rubove pomoću **M' U2 M**, što će rezultirati situacijom s 3 loša ruba gore i 1 dolje.
-   **4 loša ruba (3 gore, 1 dolje)**: Tri loša ruba na gornjem sloju formirat će strelicu. Okrenite gornji sloj tako da strelica pokazuje prema lošem rubu na donjem sloju, izvedite **M' U M** jednom, i sva četiri loša ruba će se poništiti, postajući dobri rubovi.

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Ako se strelica ne pojavi, ponavljajte **M' U M** dok je ne složite. Nakon što napredujete, možete postupno tražiti uzorke.

#### 4b: Slaganje lijevih i desnih rubova (crveni i narančasti)

Pronađite crveno-žuti i narančasto-žuti rub (cilj je vratiti ih na rubne kockice lijevo i desno), te ih pomoću trocikliranja rubnih kockica postavite na ispravne pozicije.

**Savjeti**:

1.  Pomaknite crveno-žuti (ili narančasto-žuti) rub iznad srednjeg sloja, te ga spustite na dno zamjenom gornjih i donjih rubova (**M' U2 M**).
2.  Spustite drugi narančasto-žuti (ili crveno-žuti) rub na dno na suprotnoj strani.
3.  Okrenite gornji sloj tako da se crveni rub pojavi nasuprot crveno-žutog ruba koji je spušten na dno.
4.  Srednji sloj okrenite za pola kruga **M2**, gornji sloj promatrajte za povratak na mjesto **U**.

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Rješavanje posljednja četiri ruba (plavi i zeleni)

**Savjeti**:

-   Kontinuirano koristite **trocikliranje rubnih kockica** za zamjenu gornjih i donjih rubova: **M' U2 M**, a posljednji korak je postavljanje na mjesto promatranjem **U2**.
-   Brzi savjet: Postavite bijelo-zeleni (ili bijelo-plavi) rub iznad ciljane pozicije, zamijenite gornje i donje rubove, i bijelo-zeleni (bijelo-plavi) će se postaviti na mjesto.

Postoje samo tri situacije:

-   Već je ispravno → Gotovo!
-   Potrebno je M2 → Izvedite **M2** jednom.
-   Potrebna je zamjena → **M' U2 M U2** ili **M U2 M' U2**.

Možemo pojednostaviti logiku trocikliranja rubova: M' je srednji sloj prema gore, U2 je pola okreta gornjeg sloja, M vraća srednji sloj, U2 vraća gornji sloj.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Gotovo!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Sažetak

Nema pamćenja formula, samo logika komutatora "otvori – operiraj – zatvori". Otkrit ćete da je ovaj proces mnogo zabavniji od pamćenja formula, a nećete se morati brinuti da ćete ga zaboraviti godinama kasnije, jer ga uvijek možete sami izvesti.

Ista se logika može primijeniti za slaganje bilo koje Rubikove kocke, uključujući i razne neobične kocke posebnih oblika.

Ali ako želite krenuti putem brzinskog slaganja, onda vas čeka put beskrajnog napornog vježbanja. Međutim, za početnike, uz malo vježbe, postizanje rezultata ispod 90 sekundi ne bi trebalo biti problem.

Postoji na tisuće metoda slaganja, na vama je da pronađete elegantniju ili prikladniju.

Svijet Rubikove kocke nudi beskrajnu zabavu, želim vam ugodnu igru.

## Dodatak 1: Kratki vodič za slaganje Rubikove kocke (Rubik kocka vodič)

1.  **Izgradnja lijevog i desnog mosta: Oslanjanje na promatranje i intuiciju**
    -   Savjet: Kada postanete vrlo vješti u promatranju i predviđanju, možete, ovisno o specifičnom stanju kocke, dati prednost izgradnji drugih modula ili istovremeno graditi lijeve i desne mostove. To omogućuje manji broj koraka i veliku slobodu.
2.  **Slaganje orijentacije gornjih četiri kutnih kockica: Sve četiri žute strane prema gore**
    -   Trocikliranje gornjih kutnih kockica: **R U' L' U R' U' L U** (Lijeva donja kutna kockica ostaje na mjestu, dok se unutarnje boje ostale tri kutne kockice okreću u smjeru kazaljke na satu.)
    -   Zrcalna verzija trocikliranja gornjih kutnih kockica: **L' U R U' L U R' U'** (Desna donja kutna kockica ostaje na mjestu, dok se unutarnje boje ostale tri kutne kockice okreću u smjeru suprotnom od kazaljke na satu.)
3.  **Slaganje bočnih strana gornjih četiri kutnih kockica**
    -   **Fino podešavanje položaja gornjih kutnih kockica**: **R U2 R' U' R U2 L' U R' U' L** (Održava sve četiri kutne kockice sa žutom stranom prema gore, zamjenjuje položaje dviju kutnih kockica na desnoj strani.)
4.  **Promjena orijentacije rubnih kockica, tako da bijela ili žuta strana budu gore/dolje**
    -   Prvo poravnajte središnje kockice tako da žuta bude gore, a bijela dolje, a zatim podesite rubne kockice.
    -   Pomoću **M' U M** promijenite broj loših rubova, stvorite strelicu, usmjerite strelicu prema lošem rubu, izvedite **M' U M** jednom, i sva četiri loša ruba će se poništiti i vratiti na mjesto.
5.  **Slaganje rubova s lijeve i desne strane** (crveni i narančasti)
    -   Prvo spustite crveno-žuti (ili narančasto-žuti) rub na dno zamjenom gornjih i donjih rubova (**M' U2 M**).
6.  **Slaganje preostalih rubova** (plavi i zeleni)
    -   Kontinuirano koristite **trocikliranje rubnih kockica** za zamjenu gornjih i donjih rubova: **M' U2 M**, a posljednji korak je postavljanje na mjesto promatranjem **U2**.

Ne morate naučiti napamet niti jednu od gore navedenih formula; ovdje su u dodatku samo radi lakšeg snalaženja. Zapravo, kad ih sami isprobate, promatrajući i razumijevajući kako se odgovarajuće kocke pomiču, trebat će vam samo nekoliko puta da se naviknete. Ključ je u zamjeni tri kutne kocke gornjeg sloja.

## Dodatak 2: Korisne web stranice i alati

Također sam za vas stvorio 3D Rubikovu kocku za online igranje! Možete je slobodno okretati, miješati i slagati prema fiksnim formulama, a svaki korak popraćen je prekrasnom animacijom!

[3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Formula za miješanje korištena u ovom vodiču: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Koraci slaganja lijevo-desnih mostova iz ovog vodiča: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klikom na ovu poveznicu vidjet ćete već pomiješanu kocku: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Tajmer za Rubikovu kocku koji koriste svjetski prvaci: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
