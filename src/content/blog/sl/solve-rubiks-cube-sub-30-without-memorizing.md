---
layout: blog
title: "Kako rešiti Rubikovo kocko pod 30 sekund brez pomnjenja formul: Razumljivo tudi za osnovnošolce"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: Dnevne peripetije
description: "Od prve rešitve do povprečja Ao100 pod 30 sekund v 89 dneh, brez pomnjenja ene same CFOP formule. S 4441 zabeleženimi časi razčlenjujem štiri faze: kje se je zatikalo v posamezni fazi, kaj sem vadil in zakaj Roux metoda mostu ne potrebuje pomnjenja formul."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Štiri faze poti od 165 do 28 sekund" />
</figure>

*Slika: Štiri faze poti od 165 do 28 sekund. Faza dve je prinesla najhitrejši napredek, faza tri pa je bila najdaljše obdobje stagnacije.*

V prejšnjem članku [»Kako rešiti Rubikovo kocko brez formul«](/zh/blog/solve-rubiks-cube-without-formulas/) ste se naučili reševati Rubikovo kocko brez pomnjenja formul, z logiko komutatorjev. Članek je prejel številne navdušene odzive.

Če ste sledili navodilom, verjetno zdaj potrebujete dve ali tri minute, da jo rešite – morda še vedno malo nerodno, a se da. Nato pa se pojavi novo vprašanje: kako postati hitrejši?

Če boste iskali »hitro reševanje Rubikove kocke«, vam bodo vsi vodiči povedali eno in isto: če želite priti pod 30 sekund, si najprej zapomnite CFOP formule. 41 za F2L, 57 za OLL in 21 za PLL – skupaj 119 formul. Tudi če F2L delate intuitivno, se ne morete izogniti 78 formulam za zgornjo plast. Če si jih ne zapomnite, ne boste hitri.

Ta članek pa vam želi pokazati, da lahko pridete pod 30 sekund, ne da bi si morali zapomniti eno samo formulo.

<!--more-->

Od 7. maja 2026, ko sem prvič rešil kocko, do 4. avgusta, ko sem dosegel povprečje Ao100 pod 30 sekund, je minilo 89 dni. V tem času si nisem zapomnil nobene CFOP formule, le igral sem se v prostem času. To so podatki o časih mojih 4441 rešitev.

![Krivulja rezultatov 4441 rešitev](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Slika: Krivulja rezultatov 4441 rešitev. Siva črta prikazuje posamezne čase, temna črta trend Ao100, rdeče pike pa so tisti časi, ko sem izboljšal svoj osebni rekord. Najboljši Ao100 je bil 28,22 sekunde.*

Z zavestno in dosledno vadbo lahko vsakdo v nekaj mesecih preide od popolnega začetnika do sub-30 reševalca.

Kaj pomeni biti pod 30 sekundami? Na [prvem svetovnem prvenstvu v Rubikovi kocki leta 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) je bil zmagovalni čas 22,95 sekunde, kar je bil kasneje s strani WCA priznan kot prvi uradni svetovni rekord; 10. mesto je bilo 29,11 sekunde, in ta rezultat je dosegla sama Jessica Fridrich, izumiteljica CFOP metode, o kateri bomo govorili v naslednjem poglavju. Z drugimi besedami, sub-30, ki ga danes doseže amater po nekaj mesecih vaje, bi leta 1982 zadoščal za uvrstitev med prvih deset na svetu.

V nadaljevanju bom z vami delil, kako sem to dosegel korak za korakom, in vam v celoti predstavil celoten sistem vadbe.

## Zakaj v svetu hitrega reševanja vsi pomnijo formule

Najprej razjasnimo eno stvar: zakaj sta »hitrost« in »pomnjenje formul« v mislih ljudi tako povezani?

V zgodnjih 80. letih je češka profesorica Jessica Fridrich (ki je kasneje na Univerzi Binghamton v ZDA raziskovala digitalno forenziko) razvila sistem reševanja po plasteh, ki je kasneje postal znan kot CFOP (Cross, F2L, OLL, PLL). Ideja te metode je bila: našteti vse možne situacije na zgornji plasti in vsaki situaciji dodeliti optimalno formulo. Prepoznaš situacijo, izvedeš formulo in ne rabiš razmišljati.

![Jessica Fridrich in Rubikova kocka v njeni pisarni](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Slika: Jessica Fridrich in Rubikova kocka v njeni pisarni. Leta 1982 je na prvem svetovnem prvenstvu zasedla 10. mesto z rezultatom 29,11 sekunde, po njej pa je poimenovana tudi metoda CFOP (Fridrich Method).*

Ta metoda je izjemno hitra. Skoraj vsi svetovni rekordi so bili doseženi z uporabo CFOP. Zato jo poučujejo vsi vodiči, vsi videoposnetki govorijo o njej, »učenje hitrega reševanja« je postalo enako »učenju CFOP«, učenje CFOP pa enako pomnjenju 119 formul.

Vendar bodite pozorni: »pomnjenje formul« je značilnost metode CFOP, ne pa značilnost »hitrosti« same. CFOP zahteva pomnjenje, ker je izbrala pot izčrpne obravnave vseh primerov. Izčrpna obravnava zahteva pomnjenje, in to je cena, ki jo plača.

Ali obstaja metoda, ki ne gre po tej poti izčrpne obravnave? Da.

## Reševanje brez formul: Roux metoda mostu

Leta 2003 je Francoz Gilles Roux predstavil povsem drugačen pristop. Namesto, da bi kocko sestavljal plast za plastjo, najprej zgradi dva 1×2×3 »mosta« na levi in desni strani, nato obdela štiri vogalne kocke zgornje plasti in na koncu ostane le še šest robnih kock, ki jih reši z dvema giboma – sredinsko plastjo M in zgornjo plastjo U.

![Gilles Roux med tekmovanjem](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Slika: Gilles Roux med tekmovanjem. Posnetek iz zgodnjega tekmovalnega videa, slika je bila popravljena in povečana z umetno inteligenco.*

V prejšnjem članku smo že enkrat rešili kocko s tem okvirom. Poglejmo si njegove štiri korake še enkrat, tokrat se bomo osredotočili na to, »kaj si je treba zapomniti pri vsakem koraku«:

| Korak | Vsebina | Število formul za pomnjenje |
| --- | --- | --- |
| 1. Levi most | Sestavljanje bloka 1×2×3 | 0, zgolj opazovanje |
| 2. Desni most | Simetrično sestavljanje drugega | 0, zgolj opazovanje |
| 3. CMLL | Postavitev štirih vogalnih kock zgornje plasti | 9, vse izpeljive iz 3-cikla |
| 4. LSE | Zadnjih šest robnih kock | 0, samo rotacija zgornje (U) in sredinske (M) plasti |

Trije od štirih korakov ne potrebujejo nobenih formul. Edini korak, ki jih potrebuje, je CMLL, kjer je skupno 42 primerov, vendar ne potrebujete 42 formul. Kot smo omenili v prejšnjem članku, lahko z 3-ciklom za vogalne kocke R U' L' U R' U' L U, skupaj z njegovim zrcalnim odsevom in nekaj različicami, pokrijete vse situacije, le malo počasneje bo.

![Štiri Rouxove faze](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Slika: Štiri Rouxove faze, kjer vsak korak prikazuje kocke, ki so že na svojem mestu: Levi most → Desni most → CMLL (štirje vogali zgornje plasti) → LSE (zadnjih šest robov). Posneto z »rešitvenega« panela moje 3D kocke.*

Zato lahko Roux metoda deluje brez pomnjenja formul: del, ki zahteva pomnjenje, je stisnjen v majhen kotiček, preostalo pa je prepuščeno opazovanju, razumevanju in spretnosti.

## Od 165 sekund do 28 sekund: štiri faze

Spodaj je opisana moja dejanska pot. Za vsako fazo sem z podatki označil začetek in konec ter pojasnil, kje sem se v tisti fazi zatikal in kaj sem vadil. Vaše težave se morda razlikujejo od mojih, vendar bo vrstni red verjetno enak.

![Časovni razpon štirih faz](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Slika: Časovni razpon štirih faz. Faza ena 3 tedne, faza dve 11 dni, faza tri dva meseca, faza štiri do danes.*

### Faza ena: 165 sekund → 60 sekund (1.–3. teden)

**Podatki**: Od 7. maja do 27. maja. Povprečje prvega tedna je bilo 165 sekund, tretjega pa 68 sekund.

**Kje se je zatikalo**: Levi most je bil zelo neznan, vsako skupino barvnih kock sem iskal dolgo časa. Po najdbi skupine barvnih kock pa začetniki vedno radi prenehajo z obračanjem in nadaljujejo z opazovanjem.

![Kje začetniki porabijo največ časa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Slika: Kje začetniki porabijo največ časa. Roke so pri miru, oči pa iščejo po kocki; čas »iskanja« je večkrat daljši od časa »obračanja«.*

**Kaj vaditi**:

Največji sovražnik v tej fazi ni počasna roka, ampak počasne oči. Čas, ki ga porabite za »iskanje«, je daleč daljši od časa »obračanja«. Zato:

- Fiksirajte si opazovalni položaj in ne obračajte kocke. Kot je bilo že omenjeno v prejšnjem članku, je Rouxov kot opazovanja fiksen. V tej fazi morate »neobračanje kocke« spremeniti v mišični spomin. Vsakič, ko želite obrniti kocko, se ustavite in se vprašajte: ali lahko s tega kota vidim kocko, ki jo potrebujem?
- Počasno obračanje. Ne merite časa, vendar morajo biti zaporedni gibi tekoči, brez prekinitev. Vsak gib je lahko zelo počasen, a brez ustavljanja. Bistvo je, da medtem ko roka izvaja prejšnji gib, oči že spremljajo naslednjega – to je jedro počasnega obračanja. Čeprav se sliši, kot da se upočasnjujete, v resnici trenirate svoje oči, da prepoznajo razmerje med položajem kocke in njenim ciljnim mestom.
- Vadite samo prvi most. Premešajte, sestavite levi most, ponovno premešajte in spet sestavite levi most. Ne nadaljujte naprej. Prvi most je najsvobodnejši korak v Roux metodi in tudi najboljši za treniranje opazovanja.

V tej fazi se ne učite nobenih novih formul. Vaša trenutna ovira ni v formulah.

### Faza dve: 60 sekund → 40 sekund (4.–5. teden)

**Podatki**: Od 27. maja do 7. junija, 11 dni. To je bil najhitrejši padec v celotnem procesu in tudi obdobje, ko sem največ vadil, s 723 rešitvami v prvem tednu junija.

**Kje se je zatikalo**: Nekonsistentni gibi. Zastoji kocke.

**Kaj vaditi**:

V tej fazi morate optimizirati gibe v vsaki fazi, na podlagi razumevanja povečati spretnost pri vsakem gibu.

- Drugi most. Drugi most je težji od prvega, ker je prostora za polovico manj, poleg tega pa ne smete uničiti že sestavljenega levega mostu. Ključni gibi so R, r (dve desni plasti), M, U. V tej fazi se morate naučiti uporabljati r in M namesto R za premikanje kock, tako da levi most ostane nedotaknjen. Optimizacija korakov gibanja pomeni prihranek časa. Na primer, trije obrati v smeri urinega kazalca so enakovredni enemu obratu v nasprotni smeri.
- Tekoča uporaba plasti M. Zadnji koraki Roux metode so vsi z M in U, in gladkost obračanja plasti M neposredno določa vaš spodnji limit. Uporabite prstanec ali sredinec za potiskanje M in začnite vaditi ritem kot M' U M' U.
- Prepoznavanje oblik CMLL. V prejšnjem članku smo s 3-ciklom »poskusno« postavili štiri vogale. Zdaj pa je treba začeti s prepoznavanjem, preden se lotite izvedbe: preden obrnete zgornjo plast, preverite orientacijo rumenih strani štirih vogalov, določite, ali so 0, 1, 2 ali 4 pravilno orientirani vogali, in nato izvedite ustrezen gib. Tudi z zelo majhnim številom formul lahko dosežete znatno povečanje učinkovitosti, kar je zelo ugodno. Večine teh formul si ni treba na pamet zapomniti, ampak jih razumeti med izvajanjem.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pogled med sestavljanjem desnega mostu" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Slika levo: Pogled med sestavljanjem desnega mostu. Levi most je že dokončan, za vstavljanje desnih vogalnih in robnih kock se uporabljajo le štirje gibi R, r, M, U, levi most pa se nikoli ne dotakne. Slika desno: M' U M, najpogosteje uporabljena sekvenca gibov v drugi polovici Roux metode. Sredinska plast se dvigne, zgornja plast se obrne, sredinska plast se vrne – trije koraki za zamenjavo para robov na zgornji in sredinski plasti.*

Ogledate si lahko mojo zbirko [formul za Roux metodo](/zh/projects/rubiks-cube/roux#cmll). Stran CMLL je dvostopenjska: 7 formul za orientacijo + 2 formuli za pozicijo, skupno 9 formul. To je izjemno učinkovita izbira za povečanje hitrosti, ki se jo je enostavno naučiti. Vsaka obvladana skupina lahko prihrani približno 1–2 sekundi. Z malo vaje boste hitro spretni, nekatere so bile predstavljene že v prejšnjem članku, in ni vam jih treba vseh znati na pamet, da bi prišli pod 30 sekund.

![Prvi korak dvostopenjskega CMLL, sedem orientacij vogalnih kock](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Slika: Prvi korak dvostopenjskega CMLL, sedem orientacij vogalnih kock. V pogledu od zgoraj je rumena barva obrnjena navzgor, majhne črte na zunanji strani pa označujejo, da je zgornja barva vogalne kocke obrnjena na stran. Oblike prepoznajte po številu rumenih vogalov: 0 je H ali Pi, 1 je S ali AS, 2 je U, T ali L.*

Ko poravnate rumeno zgornjo stran, lahko uporabite ti dve formuli za poravnavo stranskih ploskev vogalnih kock.

Če je ena stran že barvno usklajena, na primer rdeča je že na isti strani, jo obrnite na levo stran in nato izberite formulo za sosednjo menjavo. Če nobena stran ni barvno usklajena, izberite formulo za diagonalno menjavo.

![Drugi korak dvostopenjskega CMLL, dve poziciji vogalnih kock](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Slika: Drugi korak dvostopenjskega CMLL, dve poziciji vogalnih kock. Na levi sliki sta rdeči barvi na dveh vogalih na levi že usklajeni, zato uporabite sosednjo menjavo; na desni sliki ni nobena stran usklajena, zato uporabite diagonalno menjavo.*

Z veliko počasnega obračanja lahko razumete vsako skupino formul; ne obravnavajte jih kot formule, temveč kot določene fiksne gibe. Z lastnim raziskovanjem bi te gibe počasi odkrili sami, vendar jih seznam tukaj pomaga, da se izognete ovinkom.

Še nekaj, kar prinaša takojšnje rezultate, boljše od katere koli vaje: porabite nekaj denarja in si kupite novo Rubikovo kocko. Če imate še vedno staro kocko, ki škripa in se zatika, ko jo obrnete predaleč, si kupite sodobno 3x3 kocko z magneti. Z najnovejšimi kockami boste občutili moč inženirske optimizacije – gladko vrtenje, samodejno poravnavanje, skoraj brez zatikanja. Samo z zamenjavo kocke se lahko vaš povprečni čas izboljša za 15 sekund. Cenovno ugodna izbira je [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), ki stane okoli dvajset dolarjev in je dovolj dobra za čase pod 20 sekund.

### Faza tri: 40 sekund → 30 sekund (5. teden – 13. teden, dva meseca)

**Podatki**: Od 7. junija do 4. avgusta. Povprečje Ao100 sem znižal iz 39,8 na 29,9 sekunde, za kar sem potreboval 58 dni. V tej fazi so se občasno pojavili časi pod 30 sekund, vendar le ob izjemni sreči. Poleg tega se z zmanjševanjem povprečnega časa reševanja, težavnost izboljšanja za 1 sekundo eksponentno povečuje.

![Dnevni povprečni časi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Slika: Dnevni povprečni časi. Po sredini junija se je krivulja skoraj izravnala, dva meseca sem se trudil med 30 in 40 sekundami.*

To je bila faza platoja. Vsakdo jo doživi, jaz sem tu ostal dva meseca.

**Kje se je zatikalo**: Sestavljanje šestih robnih kock zgornje plasti je bilo zelo počasno, nisem razumel logike in vsakič sem se zanašal na ponavljajoče poskuse, kar je porabilo ogromno časa. Levi in desni most pa še vedno nista bila dovolj spretna.

**Kaj vaditi**:

- Prepoznavanje EO. Kot je bilo že razloženo v prejšnjem članku, obstaja le nekaj primerov napačno orientiranih robov: 0, ne 0 in ne 4, 4 (po 2 na zgornji in spodnji plasti), 4 (vsi na zgornji plasti), 4 (3 na zgornji, 1 na spodnji). Cilj te faze je: takoj po sestavljanju mostu, brez štetja, prepoznati, za kateri primer gre. Metoda vaje je, da po premešanju kocke dokončate le do konca CMLL, nato se ustavite, poveste število napačno orientiranih robov in nadaljujete.
- Mnogi ne razumejo gibov v tem delu; faza EO je namenjena ustvarjanju oblike puščice (3 na zgornji, 1 na spodnji), saj je popolna rešitev le en gib oddaljena od oblike puščice. Zato je s povratnim razmišljanjem to zadnji korak pred dokončanjem. Ne glede na število napačno orientiranih robov je končni cilj ustvariti puščico. Če so na zgornji plasti 4 napačno orientirani robovi, zamenjajte en par zgornjih in spodnjih robov, da enega premaknete navzdol in tako ustvarite puščico. Če sta 2 na zgornji in 2 na spodnji, zamenjajte en par zgornjih in spodnjih robov, da enega premaknete navzgor in ustvarite puščico. Če je 1 na zgornji in 1 na spodnji, ali 2 na zgornji, potem z M' U M najprej preidete v prejšnje stanje, nato pa ustvarite puščico. Z veliko opazovanja in razmišljanja lahko sami odkrijete optimalne korake za primer 1/1.
- Veliko vadite predvidevanje (Look-ahead). To je najpomembnejša stvar na poti od 40 do 30 sekund in hkrati najbolj protintuitivna: obračajte počasneje, glejte dlje. Ko sestavljate levi most, ne glejte na kocko, ki jo vstavljate, ampak na to, kje je naslednja. Sprva bo zelo nerodno, rezultati se bodo poslabšali, a po enem tednu vztrajnosti se bodo nenadoma izboljšali.
- CMLL brez oklevanja. Če morate o gibu vsakič razmisliti, preden ga izvedete, potem še ni vaš. Vadite vsak gib posebej 50-krat, dokler se vam roka ne premakne takoj, ko vidite obliko.

![Oblika puščice](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Slika: Oblika puščice. Trije napačno orientirani robovi na zgornji plasti (svetlo modro označeni) tvorijo puščico, ki kaže na napačno orientiran rob na spodnji plasti. V tem stanju lahko en sam M' U M postavi vse štiri na svoje mesto hkrati. [Odprite to stanje v 3D kocki](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), da si ogledate korake.*

![Šest oblik EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Slika: Šest oblik EO. Oznaka v zgornjem levem kotu prikazuje število napačno orientiranih robov (zgornji / spodnji), rumeno so pravilno orientirani robovi, svetlo modro so napačno orientirani robovi. Samo oblika puščice zahteva formulo, ostalih pet se najprej pretvori v puščico.*

Za reševanje levih in desnih robnih kock, kjer je rumena zgoraj, bela spodaj in levi most rdeč, je treba še vedno postaviti rumeno-rdečo in rumeno-oranžno robno kocko (označeno). Glavna ideja je, da rumeno-rdečo robno kocko z menjavo zgornjih in spodnjih robov spravite na spodnjo plast, rumeno-oranžno robno kocko pa prav tako na spodnjo plast. Obe robni kocki sta nato nasproti si na spodnji plasti, nato zgornjo plast obrnite v ustrezen položaj, in z M2 U ali M2 U' lahko rešite leve in desne robne kocke U plasti.

Za lažje razumevanje sem vseh šest oblik EO zbral na [strani LSE v zbirki formul Roux metode](/zh/projects/rubiks-cube/roux#lse). S klikom na »Prikaži podrobnosti« se vsaka odpre v 3D kocki z avtomatsko označenimi napačno orientiranimi robovi in skritimi nepomembnimi kockami. Na isti strani so tudi vsi primeri za UL/UR in zadnje štiri robove.

Manjša količina vaje v tej fazi ni slaba stvar. Faze platoja ne morete prebiti zgolj z nabiranjem količine, ampak z odpravljanjem specifičnih slabih navad. Moja izkušnja je, da se osredotočite na odpravo le ene naenkrat.

### Faza štiri: 30 sekund → 28 sekund (po 13. tednu)

**Podatki**: Po 4. avgustu. Celoten september sem zabeležil 122 vaj, čeprav mnoge vaje niso bile zabeležene. Rubikovo kocko sem vključil v svoje življenje kot namizno igračo, ki jo vzamem v roke, kadar koli mi pride na misel – ko sem dobre volje, ko sem razdražen in zaskrbljen, med delovnimi odmori, ko mi je dolgčas. Moje povprečje Ao100 se je postopoma znižalo z 29,9 na 28,2 sekunde.

**Kje se je zatikalo**: Ni bilo jasne ovire, le pomanjkanje spretnosti.

**Kaj vaditi**:

Če je vaša povprečna hitrost še vedno nad 30 sekund, je edina stvar, ki jo morate storiti, nadaljevati z veliko vadbe, namesto da si zapomnite nove formule.

Z nenehnim počasnim obračanjem in vadbo predvidevanja boste postajali hitrejši in hitrejši.

Kocko vzemite v roke in se igrajte z njo, kadar koli imate čas. Postavite jo na dosegljivo mesto, na primer na mizo, da se lahko z njo igrate med delom. Prav tako si lahko pogosto snemate videoposnetke reševanja in preverite, v kateri fazi porabite največ časa, nato pa to ciljano optimizirate. To je namenska vaja, in hitrost vašega napredka ni odvisna od skupnega števila običajnih vaj, temveč od števila namensko izvedenih vaj.

Nato boste ugotovili, da se bo po prebitju ovire med 30 in 35 sekundami vaša hitrost ponovno znižala za eno stopnjo.

Čestitke, ko dosežete to fazo, v očeh začetnikov ste že zelo dober reševalec!

## Cena reševanja brez formul

Tu je treba biti iskren. Reševanje brez formul ni brezplačno.

Faza CMLL je počasnejša. Pokrivanje 42 situacij z 9 formulami pomeni, da je nekatere situacije treba rešiti dvakrat. Tisti, ki znajo celoten CMLL, so v tem koraku dve ali tri sekunde hitrejši od mene.

Visok prag za manipulacijo s plastjo M. Druga polovica Roux metode v celoti temelji na plasti M, ki jo je težje obračati kot R in U, pogosto se zatika in zahteva tudi kakovostnejšo kocko.

Ne skrbite glede zgornje meje. Tudi med vrhunskimi tekmovalci so nekateri, ki z Roux metodo dosegajo svetovni vrh, saj metoda sama po sebi nima zgornje meje. Vendar pa boste za dosego 15 sekund najverjetneje morali obvladati vseh 42 CMLL formul. A to je stvar druge faze. Za dosego 30 sekund to ni potrebno.

Poleg tega skoraj vsi svetovni reševalci z eno roko uporabljajo Roux metodo, saj je resnično zelo primerna tudi za upravljanje z eno roko.

**Najhitrejši časi z Roux metodo na uradnih tekmovanjih (WCA):**

- Posamezni čas 4,11 sekunde, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipini), Valenzuela Cubing Open 2023, splošno priznan kot najhitrejši uradni posamezni čas z Roux metodo ([video rekonstrukcije](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Povprečje 5,98 sekunde, prav tako on, leta 2019, takrat azijski rekord in tretje uradno povprečje pod 6 sekundami v zgodovini ([WCA profil](https://www.worldcubeassociation.org/persons/2017VILL41))
- Je tudi [svetovni rekorder v reševanju z eno roko](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): povprečje 8,09, posamezni čas 6,05 (2024). V skupnosti reševanja z eno roko se Roux na splošno šteje za optimalno metodo.

Menim, da je ta kompromis zelo ugoden. Dve ali tri sekunde v fazi CMLL zamenjate za: vedenje, kaj počnete v vsakem koraku, nepozabljivost metode tudi po treh mesecih in sposobnost reševanja katere koli neznane kocke.

## Povzetek

![Rešeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Pot od sposobnosti reševanja do dosega časa pod 30 sekund ni proces pomnjenja formul, temveč proces usklajenega treninga rok, oči in možganov.

Štiri faze, štiri stvari: najprej se naučite gledati, ne da bi obračali kocko, nato se naučite sestaviti desni most, ne da bi uničili levega, potem se naučite gledati naslednji korak med izvajanjem trenutnega, in na koncu naj roke sledijo očem.

Formule niso vir hitrosti. Opazovanje je.

Naučite se ustvarjati pozitivno povratno informacijo z napredkom v vsakem koraku. Tudi vaje za spretnost so lahko manj dolgočasne, še posebej, ko odkrijete presenečenje ob ponovnem podiranju rekorda. Še posebej v začetnih in srednjih fazah boste vsak dan izkusili veselje ob doseganju novih rekordov.

Vse formule in primere, omenjene v članku, sem zbral v [zbirki formul Roux metode](/zh/projects/rubiks-cube/roux). Ko se zataknete, se vrnite in preverite.

Svet Rubikovih kock je neskončno zabaven, želim vam veliko užitkov pri igranju.

## Priloga 1: Seznam vaj za posamezne faze

**Faza ena (> 60 sekund)**

- Fiksirajte si opazovalni položaj, med celotnim reševanjem ne obračajte kocke.
- Poiščite naslednjo želeno barvno kocko brez ustavljanja.
- Počasno obračanje, pri vsakem koraku povejte svoj namen.
- Vadite samo levi most, ponovite 50-krat.

**Faza dve (60 → 40 sekund)**

- Desni most sestavljajte samo z R, r, M, U, ne da bi se dotikali levega mostu.
- Vaja dvostopenjskega CMLL.
- Vaja ritma M' U M' U, 5 minut na dan.

**Faza tri (40 → 30 sekund)**

- Po končanem CMLL se ustavite in takoj povejte število napačno orientiranih robov.
- Počasno obračanje + predvidevanje: oči vedno spremljajo naslednjo kocko.
- Vsaj 20 kakovostnih rešitev na dan.

**Faza štiri (< 30 sekund)**

- Snemajte videoposnetke, da najdete zastoje.
- Tehnika: enoprstna tehnika R U R' U', uporaba prstanca za plast M.
- 20 kakovostnih rešitev na dan, ne nabirajte količine.

## Priloga 2: Orodja

- **csTimer**: [cstimer.net](https://cstimer.net/). Odprite statistiko Ao5 / Ao12 / Ao100, saj Ao100 odraža vašo resnično raven, posamezni rezultati pa so stvar sreče.
- **3D Rubikova kocka**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Vse formule iz tega članka lahko vnesete tukaj in si ogledate animacijo.
- **Zbirka formul Roux metode, prijazna do začetnikov**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Vključuje pogoste vzorce vstavljanja za levi in desni most, 9 formul za dvostopenjski CMLL in vse primere za LSE (EO, UL/UR, zadnji štirje robovi). Vsak primer se lahko odpre v 3D kocki, z avtomatskim skrivanjem nepomembnih kock in označevanjem robov, ki jih je treba premakniti.
- **Analizator vadbe csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Povlecite in spustite datoteko, izvoženo iz csTimerja, da si ogledate trend svojih rezultatov, krivulje Ao5/Ao12/Ao100, napredek PB, tabelo mejnikov (kdaj ste prvič dosegli sub-60, sub-40, sub-30) in krivuljo vadbe po zakonu moči. Vse slike v tem članku so bile ustvarjene tukaj. Podatki se obdelujejo samo v vašem brskalniku in se ne nalagajo. Če nimate izvožene datoteke, lahko najprej naložite mojih 4441 podatkov in si ogledate učinek.

*Ta članek vsebuje partnerske povezave Amazon: Z nakupom preko teh povezav bom prejel majhno provizijo, vaša cena pa bo ostala nespremenjena.*

## Dodatno branje

- [Kako rešiti Rubikovo kocko brez formul: Razumljivo tudi za osnovnošolce](/zh/blog/solve-rubiks-cube-without-formulas)
---
