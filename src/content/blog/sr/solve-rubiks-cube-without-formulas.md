---
layout: blog
title: "Kako rešiti Rubikovu kocku bez pamćenja formula: razumeće i osnovci"
date: 2026-05-09 12:00:00
tags:
  - Rubikova kocka
  - Tutorijal
  - Teorija grupa
  - Matematika
  - Roux metoda
categories: Svakodnevna zanimacija
description: Koristeći se idejom komutatora iz teorije grupa i Roux metodom mostova, naučićete korak po korak kako da rešite 3x3 Rubikovu kocku bez učenja ijedne formule.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Kompletno složena Rubikova kocka" />
</figure>

Možda ste potpuni početnik sa Rubikovom kockom i nikada je niste uspeli složiti do kraja.

Većina tutorijala na internetu samo vam nudi gomilu čudnih formula, govoreći vam da samo treba da uradite ovo, pa ono, i kocka će biti rešena. Ali i nakon što ih pratite, i dalje ne razumete zašto to funkcioniše.

Ovaj članak će biti vaš spas. Naučićete, od samog početka, kako da složite Rubikovu kocku bez pamćenja ijedne formule. Upoznaćete se sa poreklom kocke i razumeti kako ona funkcioniše. Od teorije do prakse, vodiću vas korak po korak ka kompletnom rešenju kocke i naučiti vas kako da posmatrate njene elemente.

Možda će ovo biti prvi put da sami uspešno složite Rubikovu kocku do kraja.

<!--more-->

## Rođenje Rubikove kocke

Zašto Rubikova kocka poseduje takvu neverovatnu privlačnost? Počnimo sa pričom o njenom nastanku.

Godine 1974, mađarski profesor arhitekture, Ernő Rubik, želeći da svojim studentima demonstrira kako se delovi mogu nezavisno kretati, a da se pritom ne naruši celokupna struktura, napravio je prvi prototip od drveta. Obojio je šest strana različitim bojama i tako je rođena Rubikova kocka.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubikov prototip kocke" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portret Ernőa Rubika" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Neverovatan broj kombinacija

Rubikova kocka 3x3 ima 8 ugaonih, 12 ivicnih i 6 centralnih elemenata, što ukupno čini 26 vidljivih kockica. Međutim, samo 20 kockica, odnosno sve osim šest centralnih elemenata na svakoj strani, mogu da se pomeraju.

Koliko je onda ukupno mogućih stanja? Neverovatnih **4.3 × 10¹⁹**.

Šta to znači u praksi? Taj broj stanja je veći od ukupnog broja zrna peska na Zemlji. Ako bismo pokušali da proverimo milijardu stanja u sekundi, bilo bi nam potrebno više od **1300 godina** da ih sve obiđemo. A kada bismo svako pojedinačno stanje zapisali na papir i složili te papire, dobili bismo hrpu čija bi debljina bila ekvivalentna 14.000 putovanja od Zemlje do Sunca i nazad.

Ova mala 3x3 kocka zaista skriva neverovatnu složenost. Zbog svoje inovativne i zabavne prirode, kao i beskonačnih varijacija koje nudi, brzo je osvojila tržište po lansiranju, privukavši entuzijaste i igrače sa svih strana da je isprobaju. Ubrzo su se razvila takmičenja u slaganju kocke, različiti stilovi (brzo slaganje Speedsolving, slaganje zatvorenih očiju Blindfolded, jednom rukom One-Handed, nogama With Feet), razne metode rešavanja (slaganje po slojevima Layer by Layer, prvo uglovi Corners First, CFOP, Roux most metoda, Petrus, ZZ), pa čak i kocke različitih oblika i dimenzija (od 2x2 do 7x7, Piramida Pyraminx, Skewb, Megaminx), koje su se pojavljivale jedna za drugom.

![Varijante Rubikove kocke](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Tolika je privlačnost kocke da su matematičari decenijama proučavali njenu matematiku, tražeći takozvani "Božji broj", astronauti su je nosili u svemir, a ljudi svih uzrasta i polova isticali su se na raznim takmičenjima. Međutim, u poređenju sa njenom ogromnom privlačnošću, broj igrača je i dalje relativno mali. Zato ovim člankom želim da vas naučim kako da rešite kocku i uživate u zabavi koju nudi ova edukativna igra.

## Dilema formula

Većina dostupnih metoda za slaganje kocke zahteva od igrača da zapamte mnogo formula, što je za početnike veoma demotivišuće. Često, pre nego što uopšte osete radost slaganja kocke, naiđu na prepreku u vidu formula. Poznata CFOP metoda ima preko 100 formula, a čak i početnici moraju naučiti nekoliko desetina.

Zato danas želim da podelim sa vama metodu koja vam omogućava da uživate u Rubikovoj kocki bez potrebe za pamćenjem formula. Moći ćete da je složite samo na osnovu posmatranja i razumevanja.

## Matematičko oružje: Teorija grupa (Group Theory)

Pitanje: Kako složiti Rubikovu kocku bez učenja ijedne formule?

Evo gde stupa na scenu naše matematičko oružje: teorija grupa. Nema problema koji se ne može rešiti matematikom.

Kakve veze Rubikova kocka ima sa teorijom grupa? Kocka je zapravo grupa. Svako okretanje na kocki je permutaciona operacija. Ova operacija ima nekoliko karakteristika: može se kombinovati, može se invertovati, ali se ne može komutirati (zameniti redosled).

Množenje, koje smo učili u osnovnoj školi, je komutativna operacija; rezultat A × B je identičan rezultatu B × A. Međutim, u grupi Rubikove kocke, A i B nisu ekvivalentni kada se zamene; prvo R pa U, i prvo U pa R su potpuno različite operacije. Dakle, razumevanjem grupa, razumemo i Rubikovu kocku. A igranje sa kockom nam takođe pomaže da razumemo grupe.

Čestitamo, upravo ste naučili razliku između Abelove grupe (množenje i sabiranje su Abelove grupe) i ne-Abelove grupe (grupa Rubikove kocke).

(Dopuna: Jedan čitalac je ukazao da gornja tvrdnja nije bila dovoljno precizna, pa da dodam malo pojašnjenje. Celi brojevi u odnosu na sabiranje čine Abelovu grupu, dok prirodni brojevi N u odnosu na sabiranje ne čine Abelovu grupu; na primer, broj 3 nema inverzni element -3, jer -3 nije prirodan broj. Nenulti realni brojevi, nenulti racionalni brojevi i nenulti kompleksni brojevi u odnosu na množenje čine Abelovu grupu. Originalna analogija je prvenstveno imala za cilj da pomogne početnicima da shvate ovu suštinsku intuiciju "komutativno naspram nekomutativnog".)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U i U R daju različite rezultate - prvi deo" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U i U R daju različite rezultate - drugi deo" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Napomena: Standardne operacije kocke obično se označavaju slovima: R predstavlja okretanje desnog sloja za 90 stepeni u smeru kazaljke na satu, U predstavlja okretanje gornjeg sloja za 90 stepeni u smeru kazaljke na satu, R' je okretanje u smeru suprotnom od kazaljke na satu, M' je pomeranje srednjeg sloja nagore, a M je pomeranje srednjeg sloja nadole.)

Možete direktno posmatrati i učiti kako se Rubikova kocka okreće u online animaciji koja je data u prilogu.

## Teorija: Jezgro slaganja bez formula: Komutator

Da bismo složili Rubikovu kocku, moramo postići sledeće stanje: **promeniti položaj određenih kockica, a da pritom ne pomeramo ostale.**

U matematici, ova operacija se naziva komutator, i piše se kao **A B A⁻¹ B⁻¹**.

A⁻¹ je inverzna operacija od A.

Možemo koristiti svakodnevnu analogiju – lift. Zamislite da želite nekoga da prevezete sa prvog na treći sprat:

1. **A**: Osoba ulazi u lift.
2. **B**: Lift se penje na treći sprat.
3. **A⁻¹**: Osoba izlazi iz lifta.
4. **B⁻¹**: Lift se vraća na prvi sprat.

Rezultat: Lift se vratio na početnu poziciju, ali je osoba premeštena sa prvog na treći sprat. Ključ je u tome što se osoba, kada se lift vratio, više nije nalazila unutra — tako da se okruženje vratilo u prvobitno stanje, ali je cilj promenio položaj.

Na primer, kod Rubikove kocke, R i R⁻¹ odgovaraju okretanju desnog sloja za 90 stepeni u smeru kazaljke na satu, odnosno za 90 stepeni u smeru suprotnom od kazaljke na satu u trećem koraku.

Inverzna operacija A⁻¹ B⁻¹ može da vrati okruženje u prvobitno stanje nakon što ga je operacija A B poremetila. Time se postiže da se samo određeni blokovi zamene, a da se pritom ne utiče na okolinu.

Zašto onda nije A A⁻¹ B B⁻¹? Zato što bi se tako svaka akcija direktno poništila i kockice ne bi mogle biti zamenjene. Ako se odmah nakon operacije A izvede inverzna operacija A⁻¹, to je kao da ništa nije urađeno (na primer, okrenuti gornji sloj 90 stepeni u smeru suprotnom od kazaljke na satu, a zatim odmah 90 stepeni u smeru kazaljke na satu). Zato mora biti **A B A⁻¹ B⁻¹** da bi došlo do razmene.

Ovo je najosnovnija razmena, a najprirodnija 'atomska' akcija na Rubikovoj kocki koja joj odgovara je: **R U R' U'**

![R U R' U' demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Može se kombinovati u mnogo duže sekvence, postižući različite permutacione efekte, kao što je ova: (R U R' U') (R U R' U') (R U R')

Zapravo, ovo je i izvor formula. Zašto postoje formule? One su jednostavno niz najosnovnijih permutacionih operacija kombinovanih u sekvence. Izvođenjem ovih sekvenci može se brzo postići određeni rezultat, kao što je slaganje određene ivice ili ugaonog elementa. Različite sekvence se mogu kombinovati i voditi nas ka konačnom rešenju Rubikove kocke.

Kada razumemo princip, možemo čak i sami kreirati sopstvene formule. (Kako da sami kreirate formule za Rubikovu kocku, biće detaljno objašnjeno u sledećem delu.)

Dakle, da bismo složili Rubikovu kocku bez pamćenja ijedne formule, dovoljno je da shvatimo logiku osnovne permutacije, a onda je možemo primeniti u bilo kojoj drugoj situaciji. Najelementarnija permutaciona akcija zameniće pozicije tri ugaone kockice, ili tri ivicne kockice.

## Kako izvršiti zamene na Rubikovoj kocki

Kao što je ranije spomenuto, najprirodnija 'atomska' akcija za razmenu na Rubikovoj kocki je **R U R' U'**. Ako duboko razumete ovu akciju, moći ćete odmah da složite prva dva sloja kocke.

Ova akcija zapravo znači: pomeriti (desni sloj), ubaciti (ciljanu kockicu), vratiti (desni sloj) na mesto, vratiti (gornji sloj) na mesto.

Na taj način smo postigli da se prednja leva ugaona kockica i srednja ivicna kockica ubace u donji desni ugao.

Ova akcija se može neprestano menjati, postajući **U R U' R'**, ili **F R F' R'**, i tako dalje za bilo koju poziciju, čak i za srednji sloj **M U M' U'**, ili **U2 R U2 R'**.

![Osnovna akcija permutacije demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

U početnoj fazi, kocka je najviše izmešana, pa se mogu koristiti brojne osnovne permutacije poput gore navedenih da bi se prvo složila jedna strana, ili neki drugi deo, čime se smanjuje nivo haosa.

Štaviše, budući da je stanje prilično haotično, poslednja akcija U' u sekvenci **R U R' U'**, koja vraća okruženje u prvobitno stanje, može se čak i izostaviti, zavisno od situacije, i direktno preći na sledeću akciju. To se svodi na: pomeri, ubaci, vrati na mesto.

Pomeri, ubaci, vrati na mesto.

To je suštinska akcija, čestitamo, razumeli ste kako se igra Rubikova kocka!

Ali u kasnijim fazama, potrebni su nam duži permutacioni koraci kako bismo zamenili određene kockice, a da pritom ne narušimo u potpunosti već složeno stanje.

Uzmimo za primer **R U' L' U R' U' L U**. Ova akcija može zameniti samo tri ugaone kockice, ne utičući na ostale. Razložimo je na logiku komutatora:

```
A   = R U'   (Izbacite ugaoni element)
B   = L'     (Pomerite levi sloj)
A⁻¹ = U R'   (Poništite operaciju A)
B⁻¹ = U' L U (Poništite operaciju B, sa podešavanjem)
```

Efekat: Donji levi ugaoni element ostaje na mestu, dok se ostala tri ugaona elementa menjaju.

Ovo je verovatno jedina formula u ovom članku koju treba da razumete. Naučićemo kako da je koristimo u praktičnom delu, i shvatićemo je kroz praksu, bez potrebe za mehaničkim pamćenjem.

## Praksa: Slaganje od nule

Konačno, dolazimo do glavnog dela ovog članka. Vodiću vas korak po korak, koristeći samo posmatranje i razumevanje, kako biste od nule složili Rubikovu kocku u potpunosti.

Potrebna priprema:

- Rubikova kocka
- I malo strpljenja (jer se fokusiramo na posmatranje i razumevanje)

Pretpostavimo da već imate Rubikovu kocku. Izmešaćemo je prema međunarodnom standardu (sa sekvencom: **F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), a zatim ću je zajedno sa vama složiti.

Ili možete odmah da igrate online verziju; klikom na ovaj link videćete već izmešanu kocku: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Izmešana Rubikova kocka, početno stanje](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Koristićemo pristup elegantne Roux metode mostova za slaganje kocke. Takozvana metoda mostova, za razliku od slaganja sloj po sloj, podrazumeva prvo slaganje 1x2x3 blokova sa leve i desne strane, poznatih kao levi i desni most, a zatim slaganje gornjeg sloja i preostalih elemenata.

Metoda mostova je izuzetno slobodna i fleksibilna, zahteva manje poteza od mnogih poznatih metoda i relativno malo formula za pamćenje, jer se u osnovi oslanja na logiku komutatora. Unutar ovog okvira, naučićemo kako da složimo kocku bez pamćenja ijedne formule.

![Roux metoda - dijagram toka](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Prvi korak: Fiksiranje pozicije posmatranja

Pozicija posmatranja u metodi mostova je fiksna; tokom procesa slaganja, nećemo često okretati kocku, već ćemo zadržati isti ugao za razmišljanje i slaganje. Držeći se ove fiksne strane, vrlo lako ćemo uočiti ugaone i ivicne elemente i znati gde bi trebalo da se nalaze.

Možemo uzeti ovaj ugao kao referentnu tačku:

- Napred (okrenuto ka vama): zelena strana
- Levo: crvena
- Desno: narandžasta
- Gore: žuta
- Dole: bela
- Pozadi: plava

### Drugi korak: Sastavljanje levog i desnog mosta

**Redosled slaganja levog mosta:**

1. Prvo postavite beli-crveni ivicni element na mesto (stub dole levo).
2. Zatim postavite plavi-crveni ivicni element pozadi na mesto.
3. Nakon toga, postavite dva crvena ugaona elementa napred na mesto.

Dijagram stanja završenog levog mosta:

![Završen levi most](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ovaj proces ne zahteva nikakve formule, dovoljno je posmatranje i razumevanje. Uz malo vežbe, postaćete sve veštiji.

**F' L**: Koristeći metodu posmatranja, pronađite crveno-beli ivicni element, postavite ga na mesto tako da bela strana bude dole, a crvena levo.

![Demonstracija postavljanja belo-crvene ivice](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Postavite plavi-crveni ivicni i ugaoni element na mesto.

![Postavljanje plavo-crvene ivice i ugla](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Pronađite pozicije za poslednja dva bloka levog mosta, pronađite način da ih postavite na mesto, i tako smo dobili savršen levi most.

![Postavljanje poslednja dva bloka levog mosta](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Desni most se radi po istom principu**, samo što crvenu boju zamenjujete narandžastom i ponavljate prethodne korake. Međutim, ovde je važno paziti da ne narušite već složeni levi most. Ako je potrebno privremeno pomeranje, možete prvo pomeriti levi most na stranu, tako da operacije na desnoj strani ne utiču na njega, a zatim ga vratiti na mesto nakon što završite sa desnim mostom.

**Sredina desnog mosta**: U' M U' R2

![Postavljanje srednje ivice desnog mosta](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Prva kockica desnog mosta**: U' M' U2 R' U R

![Postavljanje prve kockice desnog mosta](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Složili smo poslednji modul desnog mosta i želimo da ga ubacimo na poziciju. Zato prvo sklonimo levi most (F') da napravimo prostor, zatim pomerimo modul (U), i na kraju istovremeno vratimo levi i desni most na mesto.

![Ubacivanje poslednje kockice desnog mosta](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ovo je stanje kada su oba mosta završena; bitno je da su mostovi formirani, ostale boje za sada ne moraju da nas brinu.

![Završen levi i desni most](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Treći korak: Slaganje ugaonih elemenata gornjeg sloja

Kada ste složili levi i desni most, prelazimo na slaganje preostala četiri ugaona elementa. Ovde ćemo koristiti trostruku cikličnu permutaciju ugaonih elemenata, gde se tri ugla rotiraju: A ide u B, B u C, a C se vraća u A.

![Dijagram trostruke permutacije uglova: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Trostruka permutacija ugaonih elemenata

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Donji levi ugaoni element ostaje na mestu</li>
      <li>Ostala tri ugaona elementa se menjaju **suprotno od smera kazaljke na satu**</li>
      <li>Ali njihove unutrašnje boje se rotiraju **u smeru kazaljke na satu**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (zrcalna verzija)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Donji desni ugaoni element ostaje na mestu</li>
      <li>Ostala tri ugaona elementa se menjaju **u smeru kazaljke na satu**</li>
      <li>Ali njihove unutrašnje boje se rotiraju **suprotno od smera kazaljke na satu**</li>
    </ul>
  </div>
</div>

![Demonstracija zrcalne verzije trostruke permutacije uglova](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Postoje samo četiri tipa orijentacije ugaonih elemenata na koje možete naići: 0, 1, 2 ili 4 'dobra' ugla.

-   **4 dobra ugla**: Završeno stanje.
-   **1 dobar ugao** (oblik ribe): Još jedna trostruka permutacija ili njena zrcalna verzija biće dovoljna.
-   **0 / 2 dobra ugla**: Prvo postavite 'loš' ugao na poziciju koju trostruka permutacija neće promeniti (donji levi ugao), izvedite jednu trostruku permutaciju, i dobićete 1 dobar ugao, vraćajući se na prethodnu situaciju.

Ponekad osnovna verzija trostruke permutacije treba da se izvede dva puta da bi se ugaoni elementi složili, dok zrcalna verzija trostruke permutacije može potpuno da ih složi iz samo jednog puta. Početnici bi trebalo da se prvo usredsrede na osnovnu verziju, posmatrajući i razumevajući, a zatim će sve ostalo doći prirodno. Ova trostruka permutacija sa žutom stranom okrenutom nagore je takođe poznata klasična formula — formula za 'levu i desnu ribu'. Obratite pažnju na oblik ribe.

Ni ovu formulu ne morate pamtiti. Posmatrajte kako se dve zelene kockice pomeraju, uradite je sami nekoliko puta i upoznaćete se sa njom. Suština je u zameni tri ugaona elementa gornjeg sloja.

Kada smo završili levi i desni most na Rubikovoj kocki, primetili smo da su dve žute strane gore. Zato smo donji levi ugao zamenili onim koji nije žut, i izveli jednu trostruku permutaciju ugaonih elemenata. Zatim, izvođenjem još dve trostruke permutacije, ili jedne zrcalne verzije trostruke permutacije, možemo postići da sva četiri ugaona elementa gornjeg sloja budu žute boje okrenute nagore.

![Demonstracija procesa trostruke permutacije uglova](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Četiri žuta ugla su složena!

![Stanje sa složenim žutim uglovima](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Podešavanje pozicije (poravnavanje bočnih boja)

Kada su sva četiri ugaona elementa žute boje okrenuta nagore, potrebno je još poravnati bočne boje ugaonih elemenata, kako bi ugaoni elementi bili potpuno na svom mestu.

Tada koristimo **J-perm varijantu**: **R U2 R' U' R U2 L' U R' U' L**

Logika ove formule može se razložiti na 'transport para + logička zamena':

-   Prvi deo `R U2 R' U' R`: Pomera par u bezbednu zonu za privremeno skladištenje, oslobađajući prostor.
-   Drugi deo `U2 L' U R' U' L`: Koristi logiku trostruke permutacije za precizno premeštanje dva ugaona elementa.

**Efekat**: Dva ugaona elementa sa desne strane menjaju mesta, dok žuta strana ostaje okrenuta nagore, a ostali ugaoni elementi ostaju nepromenjeni.

Ovo omogućava zamenu pozicija bilo koja dva susedna ugaona elementa (koristeći U za podešavanje koja dva ugla su desno). Nakon nekoliko ponavljanja, sva četiri ugaona elementa će biti potpuno poravnata i na svom mestu.

![J-perm demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ni ovu formulu ne morate pamtiti. Posmatrajte kako se dve zelene kockice pomeraju, uradite je sami nekoliko puta i upoznaćete se sa njom. Suština je u zameni dva desna ugaona elementa gornjeg sloja, pri čemu žuta strana ostaje okrenuta nagore.

### Četvrti korak: Slaganje poslednjih šest ivicnih elemenata (LSE, Last Six Edges)

Do ovog trenutka, prvo poravnajte centralne elemente tako da žuta bude na vrhu, a bela na dnu, a zatim podesite ivicne elemente.

Preostalo je samo 6 ivicnih elemenata. Ovaj korak koristi samo dve operacije, **M** i **U**, i veoma je intuitivan.

#### 4a: Podešavanje orijentacije (EO, Edge Orientation)

**Metoda procene**: Proverite da li se bela/žuta nalepnica na ivicnom elementu nalazi gore ili dole.

-   Gore / Dole = 'Dobra' ivica ✓
-   Bočno = 'Loša' ivica ✗

**Metoda podešavanja**: Okrenite 'lošu' ivicu koristeći **M U M'** ili **M' U M**.

![M U M' okretanje loše ivice demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitivno objašnjenje: M okreće ivicni element srednjeg sloja nagore, U podešava poziciju, M' ga vraća nazad.

Ponovite nekoliko puta, dok svi ivicni elementi ne budu imali belu/žutu boju okrenutu nagore ili nadole.

Ivica koja je pravilno orijentisana može se nazvati 'dobrom ivicom', dok se ona koja je pogrešno orijentisana naziva 'lošom ivicom'.

Kao što je prikazano, tri ivicna elementa na istaknutom gornjem sloju su 'loše ivice', jer nisu ni žute ni bele.

![Istaknute loše ivice](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Saveti za podešavanje**: Postoje samo četiri tipa situacija sa 'lošim ivicama' na koje možete naići:

-   **0 loših ivica**: Završeno stanje.
-   **Niti 0 niti 4 loše ivice**: Pomoću **M' U M** promenite broj loših ivica, povećavajući ga na 4.
-   **4 loše ivice (po 2 gore i dole)**: Pomoću **M' U2 M** zamenite gornje i donje ivice, stvarajući situaciju sa 3 loše ivice gore i 1 dole.
-   **4 loše ivice (3 gore i 1 dole)**: Tri loše ivice na gornjem sloju formiraće strelicu. Okrenite gornji sloj tako da strelica pokazuje ka toj jednoj lošoj ivici na donjem sloju. Izvedite jednom **M' U M**, i sve četiri loše ivice će se poništiti, postajući sve 'dobre ivice'.

![Eliminacija strelice sa četiri loše ivice demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Ako se strelica ne pojavi, nastavite da pokušavate sa **M' U M**; uvek ćete je uspeti sastaviti. Kada napredujete, možete polako tražiti obrasce.

#### 4b: Slaganje ivica sa leve i desne strane (crvene i narandžaste)

Pronađite crveno-žute i narandžasto-žute ivice (cilj je da se vrate na ivice sa leve i desne strane). Koristeći trostruku permutaciju ivica, postavite ih na ispravna mesta.

**Saveti**:

1.  Pomerite crveno-žutu (ili narandžasto-žutu) ivicu iznad srednjeg sloja i spustite je na dno zamenom gornjih i donjih ivica (**M' U2 M**).
2.  Neka se druga narandžasto-žuta (ili crveno-žuta) ivica spusti na dno na suprotnoj strani.
3.  Okrenite gornji sloj tako da se crvena ivica pojavi na suprotnoj strani od spuštene crveno-žute ivice.
4.  Okrenite srednji sloj za pola kruga **M2**, a zatim podesite gornji sloj na mesto posmatranjem **U**.

![Postavljanje levih i desnih ivica demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Slaganje preostalih četiri ivice (plave i zelene)

**Saveti**:

-   Kontinuirano koristite **trostruku permutaciju ivica** za zamenu gornjih i donjih ivica: **M' U2 M**. Poslednji korak se završava posmatranjem i vraćanjem na mesto pomoću **U2**.
-   Brzi trik: Postavite belo-zelenu (ili belo-plavu) ivicu iznad ciljane pozicije, zamenite gornje i donje ivice, i belo-zelena (belo-plava) ivica će se vratiti na mesto.

Postoje samo tri situacije:

-   Već ispravno → Završeno!
-   Potreban M2 → Izvedite **M2** jednom.
-   Potrebna zamena → **M' U2 M U2** ili **M U2 M' U2**.

Logiku trostruke permutacije ivica možemo pojednostaviti: M' znači da se srednji sloj podiže, U2 da se gornji sloj okreće za pola kruga, M vraća srednji sloj, a U2 vraća gornji sloj.

![Trostruka permutacija ivica demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Gotovo!

![Složena Rubikova kocka](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Zaključak

Nema potrebe za mehaničkim pamćenjem formula, već samo za logikom komutatora 'otvori – operiši – zatvori'. Otkrićete da je ovaj proces mnogo zabavniji od pamćenja formula, i nećete morati da brinete da ćete ga zaboraviti godinama, jer ga uvek možete sami izvesti.

Ista logika se može primeniti za slaganje bilo koje Rubikove kocke, uključujući i razne čudne oblike kocki.

Međutim, ako želite da se bavite takmičarskim slaganjem, pred vama je put beskrajnog vežbanja. Ipak, za početnike, uz malo vežbe, postizanje vremena ispod 90 sekundi ne bi trebalo da bude problem.

Postoji na hiljade metoda slaganja, na vama je da pronađete elegantniju ili lakšu za korišćenje.

Svet Rubikove kocke nudi beskrajnu zabavu, želim vam da uživate u igri.

## Prilog 1: Kratak vodič za rešavanje Rubikove kocke (Kocka-sutra za slaganje)

1.  **Sastavljanje levog i desnog mosta: oslonite se na posmatranje i intuiciju**
    -   Savet: Kada postanete vešti u posmatranju i predviđanju, možete, u zavisnosti od konkretnog stanja kocke, dati prioritet sastavljanju drugih modula, ili istovremeno sastavljati levi i desni most. To vam omogućava manje poteza i veliku slobodu.
2.  **Rešavanje orijentacije četiri ugaona elementa gornjeg sloja: svi žuti okrenuti nagore**
    -   Trostruka permutacija ugaonih elemenata gornjeg sloja: **R U' L' U R' U' L U** (donji levi ugaoni element ostaje na mestu, dok se boje unutar ostala tri ugaona elementa rotiraju u smeru kazaljke na satu).
    -   Trostruka permutacija ugaonih elemenata gornjeg sloja (zrcalna verzija): **L' U R U' L U R' U'** (donji desni ugaoni element ostaje na mestu, dok se boje unutar ostala tri ugaona elementa rotiraju u smeru suprotnom od kazaljke na satu).
3.  **Rešavanje bočnih strana četiri ugaona elementa gornjeg sloja**
    -   **Fino podešavanje pozicije ugaonih elemenata gornjeg sloja**: **R U2 R' U' R U2 L' U R' U' L** (čuva sva četiri ugaona elementa sa žutom stranom okrenutom nagore i menja pozicije dva ugaona elementa sa desne strane).
4.  **Promena orijentacije ivicnih elemenata, tako da bela ili žuta bude okrenuta gore/dole**
    -   Prvo poravnajte centralne elemente tako da žuta bude na vrhu, a bela na dnu, a zatim podesite ivicne elemente.
    -   Pomoću **M' U M** promenite broj 'loših ivica', formirajte strelicu, usmerite strelicu ka 'lošoj ivici', izvedite jednom **M' U M**, i sve četiri 'loše ivice' će se poništiti i vratiti na mesto.
5.  **Rešavanje ivica sa leve i desne strane** (crvene i narandžaste)
    -   Prvo spustite crveno-žutu (ili narandžasto-žutu) ivicu na dno zamenom gornjih i donjih ivica (**M' U2 M**).
6.  **Rešavanje preostalih ivica** (plave i zelene)
    -   Kontinuirano koristite **trostruku permutaciju ivica** za zamenu gornjih i donjih ivica: **M' U2 M**. Poslednji korak se završava posmatranjem i vraćanjem na mesto pomoću **U2**.

Ne morate da pamtite nijednu od ovih formula; ovde su samo radi lakšeg snalaženja. U stvari, kada ih isprobate sami, posmatrajući i razumevajući kako se odgovarajuće kocke pomeraju, biće vam dovoljno nekoliko pokušaja da se naviknete. Suština je u zameni tri ugaone kocke na gornjem sloju.

## Prilog 2: Korisni veb sajtovi i alati

Takođe sam za vas napravio 3D Rubikovu kocku za online igranje, koju možete okretati po želji, izmešati i složiti koristeći fiksne formule, sa prelepim animacijama za svaki korak!

[3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D alat za Rubikovu kocku](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Formula za mešanje kocke identična onoj u ovom tutorijalu: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Koraci za slaganje levih i desnih mostova iz ovog tutorijala: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klikom na ovaj link videćete već izmešanu kocku: [3D Rubikova kocka — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Tajmer za Rubikovu kocku koji koriste svetski šampioni: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
