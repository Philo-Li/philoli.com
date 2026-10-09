---
layout: blog
title: "Kako sestaviti Rubikovo kocko pod 30 sekund brez pomnjenja algoritmov: Razumljivo tudi za osnovnošolce"
date: 2026-10-09 12:00:00
tags:
  - Rubikova kocka
  - Vadnica
  - Roux metoda
  - Speedcubing
  - Namenska vadba
categories: Dnevne peripetije
description: "Od prve sestave do povprečja 100 rešitev pod 30 sekund mi je vzelo 89 dni, ne da bi si zapomnil en sam algoritem CFOP. S 4441 časovnimi podatki bom razdelal štiri faze: kje se v vsaki fazi zatika, kaj vaditi in zakaj Roux metoda ne potrebuje pomnjenja algoritmov."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Štiri faze od 165 sekund do 28 sekund" />
</figure>

*Slika: Štiri faze od 165 sekund do 28 sekund. Faza dve je padala najhitreje, faza tri je bila najdaljše obdobje stagnacije.*

V prejšnjem članku [《Kako sestaviti Rubikovo kocko brez pomnjenja algoritmov》](/sl/blog/solve-rubiks-cube-without-formulas/) ste se naučili rešiti Rubikovo kocko brez pomnjenja algoritmov, z uporabo logike komutatorjev. Ta članek je prejel veliko pozitivnih odzivov.

Če ste sledili navodilom, vam zdaj verjetno vzame dve ali tri minute, da sestavite kocko, čeprav se še vedno nekoliko lovite. Nato se bo pojavilo novo vprašanje: kako pospešiti?

Če boste iskali "speedcubing Rubikove kocke", vam bodo vsi vodiči povedali eno in isto: če želite priti pod 30 sekund, si morate najprej zapomniti algoritme CFOP. 41 za F2L, 57 za OLL in 21 za PLL – skupaj 119 algoritmov. Tudi če F2L delate intuitivno, se 78 algoritmov za zgornjo plast ne boste mogli izogniti. Brez pomnjenja ne boste hitri.

Ta članek vam želi pokazati, da lahko pridete pod 30 sekund, ne da bi si zapomnili en sam algoritem.

<!--more-->

Odkar sem 7. maja 2026 prvič sestavil Rubikovo kocko, do 4. avgusta, ko je moj Ao100 padel pod 30 sekund, je minilo 89 dni. V tem času si nisem zapomnil niti enega algoritma CFOP, ampak sem se s kocko igral v prostem času. To so časovni podatki mojih 4441 zabeleženih rešitev.

![Krivulja časov 4441 rešitev](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Slika: Krivulja časov 4441 rešitev. Siva črta prikazuje čas vsake rešitve, temna črta je trend Ao100, rdeče pike pa so moji osebni rekordi (PB). Najboljši Ao100 je bil 28,22 sekunde.*

Z zavestno in namensko vadbo ter ohranjanjem pogostosti vadbe lahko vsakdo v nekaj mesecih napreduje od začetnika do hitrosti pod 30 sekund.

Kaj pomeni "pod 30 sekund"? Na [prvem svetovnem prvenstvu v Rubikovi kocki leta 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) je bil zmagovalni čas 22,95 sekunde, kar je WCA kasneje priznala kot prvi uradni svetovni rekord; 10. mesto je bilo 29,11 sekunde, in to je dosegla sama Jessica Fridrich, izumiteljica CFOP metode, o kateri bomo govorili v naslednjem poglavju. Z drugimi besedami, današnji amater, ki v nekaj mesecih doseže hitrost pod 30 sekund, bi se leta 1982 uvrstil med prvih deset na svetu.

V nadaljevanju bom z vami delil, kako sem to dosegel korak za korakom, in vam predstavil celotno metodo vadbe.

## Zakaj v svetu speedcubinga vsi pomnijo algoritme

Najprej pojasnimo eno stvar: zakaj sta "hitrost" in "pomnjenje algoritmov" v mislih ljudi tako povezana?

V zgodnjih 80. letih je češko-ameriška profesorica Jessica Fridrich (ki je kasneje na univerzi Binghamton v ZDA raziskovala digitalno forenziko) razvila metodo sestavljanja kocke po plasteh, ki je kasneje postala znana kot CFOP (Cross, F2L, OLL, PLL). Ideja te metode je bila: izčrpno našteti vse možne situacije na zgornji plasti in za vsako situacijo dodeliti optimalen algoritem. Ko prepoznate situacijo, izvedete algoritem, brez razmišljanja.

![Jessica Fridrich in Rubikova kocka v njeni pisarni](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Slika: Jessica Fridrich in Rubikova kocka v njeni pisarni. Leta 1982 je z 29,11 sekunde osvojila 10. mesto na prvem svetovnem prvenstvu, po njej je poimenovana tudi CFOP metoda (Fridrichova metoda).*

Ta metoda je izjemno hitra. Skoraj vsi svetovni rekordi so doseženi s CFOP metodo. Zato jo učijo vsi vodiči, o njej govorijo vsi videoposnetki, "učiti se speedcubinga" je postalo enako "učiti se CFOP", učenje CFOP pa je enako pomnjenju 119 algoritmov.

Toda pozor, "pomnjenje algoritmov" je značilnost metode CFOP, ne pa značilnost same "hitrosti". CFOP zahteva pomnjenje, ker je izbrala pot izčrpnega naštevanja. Izčrpno naštevanje zahteva spomin, in to je cena, ki jo plača.

Ali obstaja metoda, ki ne gre po poti izčrpnega naštevanja? Da.

## Metoda brez pomnjenja algoritmov: Roux metoda

Leta 2003 je Francoz Gilles Roux objavil popolnoma drugačen pristop. Namesto da bi kocko sestavljal plast za plastjo, najprej zgradi dva 1×2×3 "bloka" (mostova) na levi in desni strani, nato obdela štiri vogalne kose zgornje plasti in na koncu ostane le šest robnih kosov, ki jih reši z obračanjem srednje plasti (M-slice) in zgornje plasti (U-layer).

![Gilles Roux na tekmovanju](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Slika: Gilles Roux na tekmovanju. Izsek iz starejšega tekmovalnega videa, slika je bila popravljena in povečana z umetno inteligenco.*

V prejšnjem članku smo že enkrat sestavili kocko po tej metodi. Poglejmo si še enkrat njene štiri korake, tokrat s poudarkom na tem, "kaj si moramo zapomniti pri vsakem koraku":

| Korak | Vsebina | Algoritmi za pomnjenje |
| --- | --- | --- |
| 1. Prvi blok | Zgradite blok 1×2×3 | 0, čisto opazovanje |
| 2. Drugi blok | Simetrično zgradite drugega | 0, čisto opazovanje |
| 3. CMLL | Postavitev štirih vogalnih kosov zgornje plasti | 9, vsi izpeljani iz 3-cikla |
| 4. LSE | Zadnjih šest robnih kosov | 0, samo obračanje zgornje in srednje plasti (M in U) |

Trije od štirih korakov ne zahtevajo nobenega algoritma. Edini potreben CMLL ima skupno 42 primerov, vendar ne potrebujete 42 algoritmov. Tri-cikel vogalnih kosov R U' L' U R' U' L U, ki smo ga obravnavali v prejšnjem članku, skupaj z njegovim zrcaljenjem in nekaj različicami, lahko pokrije vse situacije, le da je malo počasnejši.

![Štiri Roux faze](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Slika: Štiri Roux faze, vsak korak prikazuje le do takrat sestavljene kose: Prvi blok → Drugi blok → CMLL (štirje vogalni kosi zgornje plasti) → LSE (zadnjih šest robnih kosov). Izsek iz plošče "Rešitev" na moji 3D strani Rubikove kocke.*

Zato Roux metoda ne zahteva pomnjenja algoritmov: del, ki zahteva pomnjenje, je stisnjen v majhen kotiček, ostalo pa je prepuščeno opazovanju, razumevanju in spretnosti.

## Od 165 sekund do 28 sekund: štiri faze

Spodaj je moja resnična pot. Vsako fazo sem označil z datumom začetka in konca, nato pa opisal, kje se mi je v tej fazi zatikalo in kaj sem vadil. Vaše težave se morda razlikujejo od mojih, vendar bo vrstni red najverjetneje enak.

![Časovni razpon štirih faz](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Slika: Časovni razpon štirih faz. Prva faza 3 tedne, druga faza 11 dni, tretja faza dva meseca, četrta faza do danes.*

### Faza ena: 165 sekund → 60 sekund (1.–3. teden)

**Podatki**: Od 7. maja do 27. maja. Prvi teden povprečno 165 sekund, tretji teden 68 sekund.

**Kje se zatika**: Prvi blok je zelo neizurjen, vsak vogalno-robni par iščem dolgo časa. Poleg tega se začetniki, ko najdejo par, pogosto ustavijo in nadaljujejo z opazovanjem.

![Kam začetniki porabijo čas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Slika: Kam začetniki porabijo čas. Roke mirujejo, oči iščejo po kocki; čas "iskanja" je večkrat daljši od časa "obračanja".*

**Kaj vaditi**:

V tej fazi največji sovražnik ni počasnost rok, ampak počasnost oči. Čas, ki ga porabite za "iskanje", je veliko daljši od časa "obračanja". Zato:

-   Fiksirajte si opazovalni položaj, ne obračajte kocke. Kot sem že omenil v prejšnjem članku, je kot opazovanja pri Roux metodi fiksen. V tej fazi je treba "ne obračati kocke" spremeniti v mišični spomin. Vsakič, ko želite obrniti kocko, se ustavite in se vprašajte: ali lahko s tega kota vidim kos, ki ga potrebujem?
-   Počasno sestavljanje (slow solving). Ne merite časa, vendar morajo biti zaporedni gibi tekoči, brez ustavljanja. Vsak gib je lahko zelo počasen, vendar se ne ustavljajte. Bistvo je, da medtem ko roke izvajajo prejšnji gib, oči že spremljajo naslednjega. To je jedro počasnega sestavljanja. Čeprav se zdi, da se boste upočasnili, v resnici trenirate svoje oči, da vidijo razmerje med položajem kosa in mestom, kamor bi moral iti.
-   Vadite samo prvi blok. Premešajte, sestavite prvi blok, ponovno premešajte, ponovno sestavite prvi blok. Ne nadaljujte. Prvi blok je najbolj svoboden korak v Roux metodi in najboljši za treniranje opazovanja.

V tej fazi se ne učite nobenih novih algoritmov. Vaša trenutna ovira ni v algoritmih.

### Faza dve: 60 sekund → 40 sekund (4.–5. teden)

**Podatki**: Od 27. maja do 7. junija, 11 dni. To je bil najhitrejši padec v celotnem procesu, in tudi obdobje, ko sem največ vadil, v prvem tednu junija 723 rešitev.

**Kje se zatika**: Gibi niso tekoči. Kocka se zatika.

**Kaj vaditi**:

V tej fazi morate optimizirati gibe v vsaki fazi, na podlagi razumevanja, in povečati spretnost vsakega giba.

-   Drugi blok. Drugi blok je težji od prvega, ker je prostora za polovico manj, poleg tega pa ne smete uničiti že dokončanega prvega bloka. Ključni gibi so R, r (dve desni plasti), M, U. V tej fazi se morate naučiti uporabljati r in M namesto R za premikanje kosov, tako da prvi blok nikoli ne bo uničen. Optimiziranje korakov gibov pomeni prihranek časa. Na primer, trije obrati v smeri urinega kazalca so enakovredni enemu obratu v nasprotni smeri.
-   Tekoča uporaba M-plasti. Zadnji korak Roux metode je v celoti odvisen od M in U. Gladkost obračanja M-plasti neposredno določa vašo spodnjo mejo. Z uporabo prstanca ali sredinca potiskajte M, začnite vaditi ritem kot M' U M' U.
-   Prepoznavanje CMLL oblik. V prejšnjem članku smo štiri vogalne kose "poskusili" s 3-ciklom. Zdaj morate začeti z opazovanjem, preden izvedete: pred obračanjem zgornje plasti poglejte orientacijo rumenih strani štirih vogalnih kosov in ugotovite, ali je 0, 1, 2 ali 4 orientiranih vogalov, nato pa neposredno izvedite ustrezen gib. Z zelo majhnim številom algoritmov lahko dosežete znatno izboljšanje učinkovitosti, kar je zelo ugodno. Velikega dela teh algoritmov se vam ni treba učiti na pamet, ampak jih razumejte med izvajanjem.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pogled pri sestavljanju drugega bloka" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Slika levo: Pogled pri sestavljanju drugega bloka. Prvi blok je že dokončan, z uporabo samo štirih obratov R, r, M, U vstavite vogalno-robni par na desni strani, prvi blok pa se nikoli ne dotakne. Slika desno: M' U M, eden najpogosteje uporabljenih nizov gibov v drugi polovici Roux metode. Srednja plast gor, zgornja plast obrat, srednja plast nazaj – trije koraki za zamenjavo para robov na zgornji in srednji plasti.*

Ogledate si lahko mojo zbirko [algoritmov za Roux metodo](/sl/projects/rubiks-cube/roux#cmll). Stran CMLL je dvostopenjska: 7 algoritmov za orientacijo + 2 algoritma za permutacijo, skupaj 9 algoritmov. To je najbolj stroškovno učinkovita izbira za izboljšanje hitrosti, ki se je enostavno naučiti. Vsak naučen algoritem vam lahko prihrani približno 1–2 sekundi. Z malo vaje jih boste hitro obvladali, nekatere smo že predstavili v prejšnjem članku, in ne potrebujete vseh, da pridete pod 30 sekund.

![Prvi korak dvostopenjskega CMLL, sedem orientacij vogalnih kosov](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Slika: Prvi korak dvostopenjskega CMLL, sedem orientacij vogalnih kosov. V ptičji perspektivi rumena barva kaže na zgornjo površino, majhni trakovi na zunanji strani pa označujejo orientacijo zgornje površine tega vogala na stran. Oblike prepoznajte po številu rumenih vogalov: 0 je H ali Pi, 1 je S ali AS, 2 je U, T ali L.*

Ko so rumene strani poravnane, lahko uporabite ta dva algoritma za poravnavo stranic vogalnih kosov.

Če je ena stran že usklajena po barvi, na primer rdeča je že na isti strani, jo obrnite na levo stran, nato pa lahko izberete algoritem za sosednjo zamenjavo. Če nobena stran ni usklajena po barvi, izberite algoritem za diagonalno zamenjavo.

![Drugi korak dvostopenjskega CMLL, dve poziciji vogalnih kosov](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Slika: Drugi korak dvostopenjskega CMLL, dve poziciji vogalnih kosov. Na levi sliki sta rdeči barvi dveh vogalnih kosov že usklajeni, uporabi se sosednja zamenjava; na desni sliki nobena stran ni usklajena, uporabi se diagonalna zamenjava.*

Z veliko počasnega sestavljanja lahko razumete vsak nabor algoritmov. Ne obravnavajte jih kot formule, temveč kot določene fiksne gibe, ki jih lahko postopoma odkrijete tudi sami, vendar jih seznam tukaj lahko prepreči nepotrebno zapletanje.

Še nekaj, kar je učinkovitejše od katerekoli vaje: porabite nekaj denarja za novo Rubikovo kocko. Če še vedno uporabljate staro kocko, ki škljoca in se zatika, kupite sodobno magnetno 3x3 kocko. Z najnovejšimi kockami boste občutili moč inženirske optimizacije: gladko obračanje, samodejno poravnavanje, skoraj brez zatikanja. Samo zamenjava kocke lahko povprečen čas izboljša za 15 sekund. Stroškovno učinkovita izbira je [MoYu RS3 M V5 (MagLev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), ki stane okoli dvajset dolarjev in je dovolj dobra, dokler ne dosežete hitrosti pod 20 sekund.

### Faza tri: 40 sekund → 30 sekund (5.–13. teden, dva meseca)

**Podatki**: Od 7. junija do 4. avgusta. Ao100 sem znižal s 39,8 sekunde na 29,9 sekunde, kar mi je vzelo 58 dni. V tej fazi so se občasno pojavili časi pod 30 sekund, vendar le ob izjemni sreči. Z zmanjševanjem povprečnega časa reševanja se bo težavnost izboljšanja za 1 sekundo eksponentno povečevala.

![Dnevni povprečni časi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Slika: Dnevni povprečni časi. Po sredini junija se je krivulja skoraj poravnala in sem dva meseca ostal med 30 in 40 sekundami.*

To je obdobje stagnacije. Vsakdo ga bo doživel, jaz sem v njem preživel dva meseca.

**Kje se zatika**: Sestavljanje šestih robnih kosov zgornje plasti je zelo počasno, ne razumem logike, vsakič poskušam znova in znova, kar mi vzame veliko časa. Prvi in drugi blok še vedno nista dovolj izurjena.

**Kaj vaditi**:

-   Prepoznavanje EO. V prejšnjem članku sem omenil, da obstaja le nekaj primerov napačno orientiranih robov (EO): 0, ne-0 ne-4, 4 (2 zgoraj, 2 spodaj), 4 (vsi na zgornji plasti), 4 (3 zgoraj, 1 spodaj). Cilj te faze je: v trenutku, ko dokončate bloka, brez štetja, takoj prepoznati, kateri primer je. Vadite tako, da po premešanju kocke dokončate le CMLL, nato se ustavite, poveste število napačno orientiranih robov in nadaljujete.
-   Mnogi ne razumejo gibov tukaj. Faza EO je končno namenjena ustvarjanju oblike puščice z 3 zgoraj in 1 spodaj, ker je popolna oblika le en premešan gib od oblike puščice, zato z obratnim razmišljanjem to predstavlja zadnji korak pred dokončanjem. Torej, ne glede na število napačno orientiranih robov, je končni cilj ustvariti puščico. Če so 4 napačno orientirani robovi zgoraj, zamenjajte par zgornjih in spodnjih robov, da enega spravite navzdol in ustvarite puščico. Če so 2 zgoraj in 2 spodaj, zamenjajte par zgornjih in spodnjih robov, da enega spravite navzgor in ustvarite puščico. Če sta 1 zgoraj in 1 spodaj, ali 2 zgoraj, potem z uporabo M' U M najprej preidite v prejšnjo situacijo in nato ustvarite puščico. Z veliko opazovanja in razmišljanja lahko sami odkrijete najboljše korake za primer 1/1.
-   Veliko vadbe look-ahead. To je najpomembnejša stvar za prehod iz 40 sekund na 30 sekund in tudi najbolj neintuitivna: obračajte malo počasneje, glejte malo dlje naprej. Ko sestavljate prvi blok, ne glejte na kos, ki ga vstavljate, ampak na to, kje je naslednji kos. Na začetku bo zelo neprijetno, rezultati se bodo sprva poslabšali, vendar se bodo po enem tednu nenadoma izboljšali.
-   CMLL brez oklevanja. Če morate o gibu vsakič razmisliti, preden ga izvedete, potem vam še ni postal druga narava. Vadite vsak gib posebej 50-krat, dokler se roka ne premakne takoj, ko vidite obliko.

![Oblika puščice](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Slika: Oblika puščice. Trije napačno orientirani robovi zgornje plasti (označeni s cian barvo) tvorijo puščico, ki kaže na napačno orientiran rob na spodnji plasti. V tem stanju lahko en M' U M hkrati poravna vse štiri. [Odprite to stanje v 3D kocki](/sl/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), da si ogledate korake.*

![Šest EO oblik](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Slika: Šest EO oblik. Oznaka v zgornjem levem kotu je število napačno orientiranih robov (zgoraj / spodaj), rumeno so pravilno orientirani robovi, cian okvir pa označuje napačno orientirane robove. Samo oblika puščice zahteva algoritem, ostalih pet se najprej pretvori v puščico.*

Za sestavljanje levih in desnih robnih kosov, kjer je rumena zgoraj, bela spodaj, in rdeča kot primer za prvi blok, je treba nato poravnati rumeno-rdeči robni kos + rumeno-oranžni robni kos (označeno). Glavna ideja je, da rumeno-rdeči robni kos s pomočjo zamenjave zgornjih in spodnjih robov spravimo na spodnjo stran, in enako storimo z rumeno-oranžnim robnim kosom. Oba robna kosa sta nato na spodnji strani drug proti drugemu, nato pa zgornjo plast obrnemo v pravilen položaj, in z M2 U ali M2 U' lahko sestavimo leve in desne robne kose U-plasti.

Da bi vam pomagal bolje razumeti, sem vseh šest EO oblik zbral v [zbirki algoritmov Roux metode na strani LSE](/sl/projects/rubiks-cube/roux#lse). S klikom na "pokaži podrobnosti" pri vsaki sliki se odpre ustrezno stanje v 3D kocki, z napačno orientiranimi robovi samodejno označenimi. Na isti strani so tudi vsi primeri za kasnejšo poravnavo UL/UR in zadnjih štirih robov.

Zmanjšanje količine vadbe v tej fazi ni slabo. Obdobja stagnacije ne prebijemo zgolj z večanjem količine, ampak z odpravo določenih slabih navad. Moje izkušnje kažejo, da je najbolje spreminjati eno stvar naenkrat.

### Faza štiri: 30 sekund → 28 sekund (po 13. tednu)

**Podatki**: Po 4. avgustu. Septembra je bilo zabeleženih 122 vaj, čeprav jih je bilo v resnici veliko več nezabeleženih. Kocko sem že vključil v svoje vsakdanje življenje kot igračo na mizi, vzamem jo v roko, ko sem dobre volje, ko sem razdražen ali zaskrbljen, med delovnimi odmori, ko mi je dolgčas. Ao100 se je postopoma znižal z 29,9 na 28,2.

**Kje se zatika**: Ni jasne ovire, samo pomanjkanje spretnosti.

**Kaj vaditi**:

Če je vaša povprečna hitrost še vedno nad 30 sekund, je edina stvar, ki jo morate storiti, nadaljevati z obsežno vadbo, namesto da bi si zapomnili nove algoritme.

Nadaljujte z vadbo look-ahead z uporabo počasnega sestavljanja in postali boste hitrejši.

Kocko vzemite v roke kadar koli in se z njo igrajte. Postavite jo nekam, kjer jo boste imeli pri roki, na primer na pisalno mizo, da se lahko z njo igrate med delom. Prav tako si lahko redno snemate videoposnetke svojih rešitev, da ugotovite, v kateri fazi porabite največ časa, in nato ciljno optimizirate. To je namensko vadbo. Vaša hitrost napredka ni odvisna od skupnega števila običajnih vaj, temveč od števila namenskih vaj.

Potem boste ugotovili, da ste po prebitju ovire 30–35 sekund znova znižali svojo hitrost za eno stopnjo.

Če ste dosegli to fazo, vam čestitam, v očeh začetnika ste že zelo dober igralec!

## Cena ne pomnjenja algoritmov

Če sem iskren, pomnjenje algoritmov ni zastonj.

Faza CMLL je počasna. 42 primerov, pokritih z 9 algoritmi, pomeni, da je nekatere primere treba izvesti dvakrat. Tisti, ki obvladajo celoten CMLL, so v tem koraku dve ali tri sekunde hitrejši od mene.

M-plast je težja za obvladanje. Druga polovica Roux metode je v celoti odvisna od M-plasti, ki jo je težje obračati kot R in U, pogosto se zatika, in zahteva boljšo kakovost kocke.

Ne skrbite za zgornjo mejo. Tudi vrhunski tekmovalci uporabljajo Roux metodo in se uvrščajo med najboljše na svetu; sama metoda nima zgornje meje. Vendar pa boste za dosego časa pod 15 sekund verjetno morali dopolniti vseh 42 algoritmov CMLL. A to je zadeva druge faze. Za dosego časa pod 30 sekund to ni potrebno.

Poleg tega skoraj vsak svetovno uveljavljen tekmovalec v sestavljanju z eno roko uporablja Roux metodo, saj je resnično zelo primerna tudi za upravljanje z eno roko.

**Najhitrejši rezultati z Roux metodo na uradnih tekmovanjih (WCA):**

-   Posamezno 4,11 sekunde, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipinec), 2023 Valenzuela Cubing Open, priznan kot najhitrejši uradni čas z Roux metodo ( [rekonstrukcijski video](https://www.youtube.com/watch?v=5H4TRJSUm-U) )
-   Povprečje 5,98 sekunde, prav tako on, 2019, takrat azijski rekord in tretji uradni povprečni čas pod 6 sekund v zgodovini ( [WCA podatki](https://www.worldcubeassociation.org/persons/2017VILL41) )
-   Je tudi [svetovni rekorder v sestavljanju z eno roko](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): povprečje 8,09, posamezno 6,05 (2024). V skupnosti OH (one-handed) je Roux splošno priznana kot optimalna rešitev.

Mislim, da je ta kompromis zelo ugoden. Dve ali tri sekunde v fazi CMLL zamenjate za: razumevanje vsakega koraka, pomnjenje, ki ga ne boste pozabili niti po treh mesecih brez kocke, in sposobnost, da izpeljete rešitev za katero koli neznano kocko.

## Povzetek

![Sestavljeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Od prve sestave do časa pod 30 sekund ni proces pomnjenja algoritmov, temveč proces treniranja koordinacije rok, oči in možganov.

Štiri faze, štiri stvari: najprej se naučite gledati brez obračanja kocke, nato se naučite sestaviti drugi blok, ne da bi poškodovali prvi blok, nato se naučite med izvajanjem enega koraka že gledati naprej na naslednjega, in končno, naj roke sledijo očem.

Algoritmi niso vir hitrosti. Opazovanje je.

Naučite se ustvarjati pozitivne povratne informacije z napredovanjem v vsakem koraku. Tudi vadba spretnosti ni nujno dolgočasna, še posebej, ko presenečeno ugotovite, da ste znova presegli svoj rekord. Predvsem v začetnih in srednjih fazah boste vsak dan izkusili veselje, ki ga prinaša podiranje rekordov.

Vsi algoritmi in primeri iz članka so zbrani v [zbirki algoritmov za Roux metodo](/sl/projects/rubiks-cube/roux). Vrnite se tja, če se vam kje zatika.

Svet Rubikove kocke ponuja neskončno zabave, želim vam veliko užitkov pri igranju.

## Dodatek 1: Seznam vaj za posamezne faze

**Faza ena (> 60 sekund)**

-   Fiksirajte si opazovalni položaj, celoten proces sestavljanja ne obračajte kocke
-   Brez ustavljanja poiščite naslednji želeni kos
-   Počasno sestavljanje, pri vsakem koraku povejte svoj namen
-   Vadite samo prvi blok, ponovite 50-krat

**Faza dve (60 → 40 sekund)**

-   Drugi blok sestavljajte samo z R, r, M, U, ne dotikajte se prvega bloka
-   Vadba dvostopenjskega CMLL
-   Vadba ritma M' U M' U, 5 minut na dan

**Faza tri (40 → 30 sekund)**

-   Ko dokončate CMLL, se ustavite in takoj povejte število napačno orientiranih robov
-   Počasno sestavljanje + look-ahead: oči vedno gledajo naslednji kos
-   Vsaj 20 kakovostnih rešitev na dan

**Faza štiri (< 30 sekund)**

-   Snemanje videoposnetkov za iskanje ustavitev
-   Tehnika obračanja: prijemi z enim prstom za R U R' U', M-plast z prstancem
-   20 kakovostnih rešitev na dan, ne zgolj količinsko

## Dodatek 2: Orodja

-   **csTimer**: [cstimer.net](https://cstimer.net/). Vklopite statistiko Ao5 / Ao12 / Ao100. Ao100 je vaše resnično znanje, posamezni časi so sreča.
-   **3D Rubikova kocka**: [philoli.com/zh/projects/rubiks-cube](/sl/projects/rubiks-cube/). Vsi algoritmi iz tega članka si lahko ogledate kot animacijo.
-   **Zbirka algoritmov za Roux metodo, prijazna začetnikom**: [philoli.com/zh/projects/rubiks-cube/roux](/sl/projects/rubiks-cube/roux). Pogoste vstavljalne tehnike za prvi in drugi blok, 9 algoritmov dvostopenjskega CMLL, vsi primeri LSE (EO, UL/UR, zadnji štirje robovi). Vsak primer se lahko odpre v 3D kocki, z avtomatskim skrivanjem nepomembnih kosov in označevanjem robov, ki jih je treba premakniti.
-   **csTimer analizator vadbe**: [philoli.com/zh/projects/rubiks-cube/analyzer](/sl/projects/rubiks-cube/analyzer). Povlecite in spustite datoteko, izvoženo iz csTimerja, da si ogledate trend svojih rezultatov, krivulje Ao5/Ao12/Ao100, napredek PB, tabelo mejnikov (kdaj ste prvič dosegli sub-60, sub-40, sub-30) in krivuljo vadbe po zakonu moči. Vsi grafi v tem članku so bili ustvarjeni s tem orodjem. Podatki se obdelujejo samo v vašem brskalniku in se ne nalagajo. Če nimate izvožene datoteke, lahko najprej naložite mojih 4441 podatkov, da vidite učinek.

*Ta članek vsebuje partnerske (affiliate) povezave Amazon: z nakupom preko povezave bom prejel majhno provizijo, vaša cena pa ostaja nespremenjena.*

## Več za branje

-   [Kako sestaviti Rubikovo kocko brez pomnjenja algoritmov: Razumljivo tudi za osnovnošolce](/sl/blog/solve-rubiks-cube-without-formulas)
