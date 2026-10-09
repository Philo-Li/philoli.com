---
layout: blog
title: "Cum să rezolvi Cubul Rubik sub 30 de secunde fără să memorezi algoritmi: chiar și un elev de școală primară poate înțelege"
date: 2026-10-09 12:00:00
tags:
  - Cub Rubik
  - Tutorial
  - Metoda Roux
  - Speedcubing
  - Practică deliberată
categories: Experimente zilnice
description: "Mi-au luat 89 de zile să ajung de la prima rezolvare la un Ao100 sub 30 de secunde, fără să memorez niciun algoritm CFOP. Analizez 4441 de date cronometrate pentru a descompune patru etape: unde te blochezi în fiecare etapă, ce să exersezi și de ce metoda Roux nu necesită memorarea algoritmilor."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Cum să rezolvi Cubul Rubik sub 30 de secunde fără să memorezi algoritmi: chiar și un elev de școală primară poate înțelege" />
</figure>

În articolul anterior [„Cum să rezolvi Cubul Rubik fără să memorezi algoritmi”](/ro/blog/solve-rubiks-cube-without-formulas/), ai învățat cum să rezolvi un Cub Rubik folosind logica comutatorilor, fără a memora algoritmi. Articolul a primit multe aprecieri entuziaste.

Dacă ai urmat instrucțiunile, probabil că acum ai nevoie de două-trei minute pentru a-l rezolva, chiar dacă te mai încurci. Apoi, o nouă întrebare va apărea: cum să devii mai rapid?

Dacă vei căuta „speedcubing Cub Rubik”, toate tutorialele îți vor spune același lucru: dacă vrei să ajungi sub 30 de secunde, trebuie să memorezi algoritmii CFOP. Asta înseamnă 41 de algoritmi pentru F2L, 57 pentru OLL și 21 pentru PLL, un total de 119 algoritmi. Chiar dacă faci F2L intuitiv, cei 78 de algoritmi pentru ultimul strat sunt inevitabili. Fără memorare, nu te poți aștepta să fii rapid.

Acest articol vrea să-ți arate că poți ajunge sub 30 de secunde fără să memorezi absolut niciun algoritm.

<!--more-->

De la prima mea rezolvare a Cubului Rubik, pe 7 mai 2026, până pe 4 august, când am atins un Ao100 sub 30 de secunde, au trecut 89 de zile. În tot acest timp, nu am memorat niciun algoritm CFOP; doar m-am jucat în timpul liber. Acestea sunt datele cronometrate de la cele 4441 de rezolvări înregistrate.

![Curba timpilor de rezolvare pentru 4441 de rezolvări](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figură: Curba timpilor de rezolvare pentru 4441 de rezolvări. Linia gri reprezintă timpul fiecărei rezolvări, linia mai închisă este tendința Ao100, iar punctele roșii marchează momentele în care mi-am îmbunătățit recordul personal (PB). Cel mai bun Ao100 a fost de 28.22 secunde.*

Prin practică conștientă și activă, menținând în același timp frecvența antrenamentelor, oricine poate trece de la zero la sub-30 de secunde în câteva luni.

Ce înseamnă sub 30 de secunde? La [primul Campionat Mondial de Cub Rubik din 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), timpul câștigător a fost de 22.95 secunde, recunoscut ulterior de WCA ca primul record mondial oficial; locul 10 a fost 29.11 secunde, obținut chiar de Jessica Fridrich, inventatoarea metodei CFOP, despre care vom vorbi în secțiunea următoare. Cu alte cuvinte, un amator care reușește sub 30 de secunde în câteva luni astăzi, ar fi fost în top 10 la nivel mondial în 1982.

În continuare, voi împărtăși cu tine cum am reușit pas cu pas și îți voi prezenta întreaga metodă de antrenament.

## De ce lumea speedcubingului se bazează pe memorarea algoritmilor

Mai întâi, să înțelegem un lucru: de ce "rapiditatea" și "memorarea algoritmilor" sunt atât de strâns legate în mintea oamenilor?

La începutul anilor 1980, profesoara cehă Jessica Fridrich (care mai târziu a cercetat criminalistica digitală la Universitatea Binghamton din SUA) a sistematizat o metodă de rezolvare pe straturi, cunoscută ulterior sub numele de CFOP (Cross, F2L, OLL, PLL). Ideea acestei metode este următoarea: se enumeră toate situațiile posibile pentru stratul de sus și fiecărei situații i se asociază un algoritm optim. Tu recunoști situația, execuți algoritmul și nu mai trebuie să gândești.

![Jessica Fridrich și Cubul Rubik din biroul ei](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figură: Jessica Fridrich și Cubul Rubik din biroul ei. În 1982, a obținut locul 10 la primul Campionat Mondial cu 29.11 secunde, iar metoda CFOP îi poartă numele (Metoda Fridrich).*

Această metodă este extrem de rapidă. Aproape toate recordurile mondiale sunt obținute cu CFOP. Prin urmare, toate tutorialele o predau, toate videoclipurile o explică, iar "a învăța speedcubing" a devenit echivalent cu "a învăța CFOP", iar a învăța CFOP înseamnă a memora 119 algoritmi.

Dar atenție, "memorarea algoritmilor" este o caracteristică specifică metodei CFOP, nu o caracteristică a "rapidității" în sine. CFOP necesită memorare pentru că a ales calea enumerării. Enumerarea implică memorare, iar acesta este prețul pe care îl plătește.

Există metode care nu urmează calea enumerării? Da.

## Metoda de rezolvare fără memorarea algoritmilor: Metoda Roux

În 2003, francezul Gilles Roux a publicat o abordare complet diferită. În loc să construiască strat cu strat, metoda sa începe prin construirea a două "blocuri" de 1x2x3 (Primul Bloc și Al Doilea Bloc), apoi rezolvă cele patru colțuri ale stratului de sus (CMLL) și, în final, se ocupă de cele șase muchii rămase, folosind doar mișcările stratului M (median) și stratului U (de sus).

![Gilles Roux în timpul unei competiții](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figură: Gilles Roux în timpul unei competiții. Extrase dintr-un videoclip vechi de la o competiție, imaginea a fost restaurată și mărită cu AI.*

În articolul anterior, am folosit deja acest cadru pentru o rezolvare. Aici, vom revedea cei patru pași, de data aceasta concentrându-ne pe "ce trebuie memorat la fiecare pas":

| Pas | Conținut | Algoritmi de memorat |
| --- | --- | --- |
| 1. Primul Bloc | Construiește un bloc 1×2×3 | 0 algoritmi, pură observație |
| 2. Al Doilea Bloc | Construiește celălalt bloc, simetric | 0 algoritmi, pură observație |
| 3. CMLL | Așează cele patru colțuri ale stratului de sus | 9 algoritmi, toți pot fi derivați din permutările ciclice de 3 piese |
| 4. LSE | Ultimele șase muchii | 0 algoritmi, se folosesc doar rotațiile stratului de sus și ale stratului M (M și U) |

Trei din cei patru pași nu necesită niciun algoritm. Singurul pas care necesită CMLL, deși are 42 de cazuri în total, nu necesită memorarea a 42 de algoritmi. Permutarea ciclică de 3 colțuri, R U' L' U R' U' L U, explicată în articolul anterior, împreună cu varianta sa în oglindă și câteva variații, poate acoperi toate cazurile, chiar dacă va fi puțin mai lent.

![Cei patru pași ai metodei Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figură: Cei patru pași ai metodei Roux, fiecare pas arată doar piesele deja rezolvate până la acel punct: Primul Bloc → Al Doilea Bloc → CMLL (cele patru colțuri ale stratului de sus) → LSE (ultimele șase muchii). Extrase din panoul „Metodă” al paginii mele 3D Cube.*

Acesta este motivul pentru care metoda Roux poate fi folosită fără memorarea algoritmilor: comprimă partea de memorare într-un colț foarte mic, lăsând restul pe seama observației, a înțelegerii și a exercițiului.

## De la 165 de secunde la 28 de secunde: cele patru etape

Mai jos este drumul pe care l-am parcurs. Am marcat începutul și sfârșitul fiecărei etape cu date și am explicat unde m-am blocat și ce am exersat în acea perioadă. Punctele tale de blocaj pot fi diferite de ale mele, dar ordinea va fi cel mai probabil aceeași.

![Durata celor patru etape](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figură: Durata celor patru etape. Etapa întâi 3 săptămâni, etapa a doua 11 zile, etapa a treia două luni, etapa a patra până în prezent.*

### Etapa Unu: 165 secunde → 60 secunde (Săptămânile 1–3)

**Date**: De pe 7 mai până pe 27 mai. Media primei săptămâni a fost de 165 de secunde, iar a treia săptămână a fost de 68 de secunde.

**Unde te blochezi**: Primul Bloc este foarte neîndemânatic, fiecare pereche colț-muchie necesită mult timp pentru a fi găsită. Apoi, după ce găsesc o pereche, începătorii au tendința de a se opri pentru a continua să observe.

![Unde își petrec timpul începătorii](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figură: Unde își petrec timpul începătorii. Mâinile stau pe loc, ochii caută pe cub, timpul de „căutare” este de câteva ori mai mare decât cel de „învârtire”.*

**Ce să exersezi**:

Cel mai mare inamic în această etapă nu este lentoarea mâinilor, ci lentoarea ochilor. Petreci mult mai mult timp căutând decât învârtind. Prin urmare:

-   Menține o poziție fixă de observare, nu roti cubul. Așa cum am menționat în articolul anterior, unghiul de observare al metodei Roux este fix. În această etapă, trebuie să transformi "a nu roti cubul" într-o memorie musculară. De fiecare dată când vrei să rotești cubul, oprește-te și întreabă-te: pot vedea piesa de care am nevoie din acest unghi?
-   Slow solving. Nu cronometra, dar mișcările trebuie să fie consecutive, fără pauze, fiecare mișcare poate fi foarte lentă, dar fără întreruperi. Esența este ca, în timp ce mâinile tale execută mișcarea anterioară, ochii tăi să se concentreze pe mișcarea următoare. Aceasta este cheia slow solving-ului. Poate părea că încetinești, dar de fapt îți antrenezi ochii să vadă relația dintre poziția pieselor și unde ar trebui să ajungă.
-   Exersează doar Primul Bloc. Amestecă, construiește Primul Bloc, apoi amestecă din nou și construiește iar Primul Bloc. Nu continua. Primul Bloc este cel mai liber pas în metoda Roux și cel mai bun pentru antrenarea observației.

Nu învăța algoritmi noi în această etapă. Blocajul tău actual nu este legat de algoritmi.

### Etapa Doi: 60 secunde → 40 secunde (Săptămânile 4–5)

**Date**: De pe 27 mai până pe 7 iunie, 11 zile. Aceasta a fost cea mai rapidă scădere din întregul proces și perioada în care am exersat cel mai mult, cu 723 de rezolvări în prima săptămână a lunii iunie.

**Unde te blochezi**: Mișcări neconsecvente. Blocaje ale cubului.

**Ce să exersezi**:

În această etapă, trebuie să-ți optimizezi mișcările în fiecare fază și să crești fluența fiecărei mișcări, bazându-te pe înțelegere.

-   Al Doilea Bloc. Al Doilea Bloc este mai dificil decât Primul Bloc, deoarece spațiul este redus la jumătate și Primul Bloc deja construit nu trebuie distrus. Mișcările cheie sunt R, r (două straturi din dreapta), M, U. În această etapă, trebuie să înveți să folosești r și M în loc de R pentru a muta piesele, astfel încât Primul Bloc să nu fie niciodată afectat. Optimizarea pașilor înseamnă economisirea timpului. De exemplu, trei rotații în sensul acelor de ceasornic sunt echivalente cu o rotație în sens invers acelor de ceasornic.
-   Folosirea fluidă a stratului M. Ultima etapă a metodei Roux se bazează în întregime pe M și U, iar fluiditatea rotației stratului M îți va determina direct limita inferioară. Folosește inelarul sau degetul mijlociu pentru a împinge M și începe să exersezi ritmuri precum M' U M' U.
-   Recunoașterea cazurilor CMLL. În articolul anterior, am „încercat” să rezolvăm cele patru colțuri folosind permutări ciclice de 3 piese. Acum trebuie să începem să observăm înainte de a acționa: înainte de a roti stratul de sus, aruncă o privire la orientarea culorii galbene a celor patru colțuri, pentru a determina dacă sunt 0, 1, 2 sau 4 colțuri orientate corect, apoi execută direct mișcarea corespunzătoare. De asemenea, poți obține o îmbunătățire semnificativă a eficienței cu un număr foarte mic de algoritmi, ceea ce este foarte avantajos. Majoritatea acestor algoritmi nu necesită memorare pe de rost, ci pot fi înțeleși pe măsură ce îi exersezi.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Vedere la construirea celui de-al Doilea Bloc" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figură stânga: Vedere la construirea celui de-al Doilea Bloc. Primul Bloc este deja finalizat, folosind doar R, r, M, U pentru a introduce perechile colț-muchie din dreapta, fără a atinge niciodată Primul Bloc. Figură dreapta: M' U M, una dintre cele mai folosite secvențe de mișcări în a doua jumătate a metodei Roux. Stratul M urcă, stratul U se rotește, stratul M revine, trei pași pentru a schimba o pereche de muchii între stratul de sus și stratul M.*

Poți consulta [biblioteca mea de algoritmi Roux Method](/ro/projects/rubiks-cube/roux#cmll). Pagina CMLL este împărțită în două etape: 7 algoritmi de orientare + 2 algoritmi de permutare, un total de 9. Aceasta este cea mai bună opțiune pentru creșterea vitezei, foarte ușor de învățat, iar fiecare set de algoritmi stăpânit aduce o îmbunătățire de aproximativ 1-2 secunde. Cu puțină practică, vei deveni rapid priceput, iar unii dintre ei au fost deja introduși în articolul anterior. Nu este necesar să-i memorezi pe toți pentru a ajunge sub 30 de secunde.

![Prima etapă a CMLL în două etape, șapte orientări ale colțurilor](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figură: Prima etapă a CMLL în două etape, șapte orientări ale colțurilor. În vederea de sus, galbenul este culoarea feței superioare, iar barele mici de pe exterior indică orientarea culorii feței superioare a colțului către lateral. Recunoaște forma după numărul de colțuri galbene: 0 este H sau Pi, 1 este S sau AS, 2 este U, T sau L.*

După ce ai aliniat partea superioară galbenă, poți folosi acești doi algoritmi pentru a alinia părțile laterale ale colțurilor.

Dacă o față are deja o culoare consistentă, de exemplu roșul este deja pe aceeași față, rotește-o spre stânga, apoi poți alege algoritmul de schimb adiacent. Dacă nicio față nu are o culoare consistentă, alege algoritmul de schimb pe diagonală.

![A doua etapă a CMLL în două etape, două poziții ale colțurilor](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figură: A doua etapă a CMLL în două etape, două poziții ale colțurilor. În imaginea din stânga, roșul celor două colțuri din stânga este deja consistent, se folosește schimbul adiacent; în imaginea din dreapta, nicio față nu este consistentă, se folosește schimbul pe diagonală.*

Poți înțelege fiecare set de algoritmi prin mult slow solving, nu le considera formule, ci anumite mișcări fixe pe care le-ai putea descoperi singur prin explorare, dar listarea lor aici te poate scuti de ocoluri.

Și încă ceva, mai eficient decât orice exercițiu: investește într-un cub nou. Dacă încă folosești un cub vechi care face zgomot la rotire și se blochează, cumpără un cub modern 3x3 magnetic. Cele mai noi cuburi îți vor arăta puterea optimizării inginerești: rotație fluidă, aliniere automată, aproape fără blocaje. Doar schimbarea cubului îți poate îmbunătăți media cu 15 secunde. O alegere cu un raport calitate-preț excelent este [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), în jur de douăzeci de dolari, suficient pentru a ajunge sub 20 de secunde.

### Etapa Trei: 40 secunde → 30 secunde (Săptămâna 5 – Săptămâna 13, două luni)

**Date**: De pe 7 iunie până pe 4 august. Am coborât Ao100 de la 39.8 secunde la 29.9 secunde, ceea ce a durat 58 de zile. În această etapă, ocazional puteau apărea timpi sub 30 de secunde, dar doar cu mult noroc. Pe măsură ce timpul mediu de rezolvare scade, dificultatea de a progresa cu o secundă crește exponențial.

![Media zilnică a timpilor](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figură: Media zilnică a timpilor. După mijlocul lunii iunie, curba aproape s-a aplatizat, rămânând între 30 și 40 de secunde timp de două luni.*

Acesta este platoul. Toată lumea îl întâlnește, iar eu am stat aici două luni.

**Unde te blochezi**: Rezolvarea celor șase muchii ale stratului de sus este foarte lentă, nu înțelegi logica, iar de fiecare dată te bazezi pe încercări repetate, pierzând mult timp. Primul și Al Doilea Bloc încă nu sunt suficient de fluide.

**Ce să exersezi**:

-   Recunoașterea EO. Am vorbit despre asta în articolul anterior: există doar câteva cazuri de muchii neorientate: 0, non-0 non-4, 4 (câte 2 sus și jos), 4 (toate pe stratul de sus), 4 (3 sus și 1 jos). Scopul acestei etape este: în momentul în care ai terminat de construit blocurile, să poți identifica numărul de muchii neorientate dintr-o privire, fără să le numeri. Metoda de antrenament este să amesteci cubul, să rezolvi până la CMLL, apoi să te oprești, să spui numărul de muchii neorientate și să continui.
-   Mulți oameni nu înțeleg mișcările de aici. Etapa EO are ca scop final construirea unei forme de săgeată cu 3 muchii neorientate sus și 1 jos, deoarece forma completă este la un singur scramble distanță de forma de săgeată. Prin urmare, gândind invers, este ultimul pas înainte de finalizarea rezolvării. Deci, indiferent de numărul de muchii neorientate, scopul final este de a construi o săgeată. Dacă sunt 4 muchii neorientate sus, schimbi o pereche de muchii sus-jos pentru a coborî una neorientată și a crea săgeata. Dacă sunt 2 sus și 2 jos, schimbi o pereche de muchii sus-jos pentru a urca una neorientată și a crea săgeata. Dacă sunt 1 sus și 1 jos, sau 2 sus, folosești M' U M pentru a ajunge la situațiile anterioare, apoi construiești săgeata. Poți descoperi singur pașii optimi pentru cazul 1/1 prin multă observație și gândire.
-   Exersează mult look-ahead. Acesta este cel mai important lucru pentru a trece de la 40 la 30 de secunde și cel mai contraintuitiv: rotește mai lent, privește mai departe. Când construiești Primul Bloc, nu te uita la piesa pe care o introduci, ci la unde este următoarea piesă. La început va fi foarte stângaci, iar timpii tăi vor scădea, dar dacă perseverezi o săptămână, vei observa o îmbunătățire bruscă.
-   CMLL fără ezitare. Dacă un algoritm trebuie să-l gândești de fiecare dată înainte să-l execuți, atunci nu este încă al tău. Exersează fiecare algoritm individual de 50 de ori, până când mâna ta se mișcă automat la vederea formei.

![Forma de săgeată](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figură: Forma de săgeată. Trei muchii neorientate (evidențiate cu albastru) formează o săgeată, indicând muchia neorientată din stratul de jos. În această situație, un singur M' U M poate orienta simultan toate cele patru muchii. [Deschide această stare în cubul 3D](/ro/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) pentru a vedea pas cu pas.*

![Cele șase forme de EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figură: Cele șase forme de EO. Eticheta din stânga sus indică numărul de muchii neorientate (sus / jos), galbenul reprezintă muchii orientate, iar chenarul albastru muchii neorientate. Doar forma de săgeată necesită un algoritm, celelalte cinci se transformă mai întâi în săgeată.*

Pentru rezolvarea muchiilor stânga și dreapta, având galbenul sus și albul jos, iar Primul Bloc roșu, trebuie să se orienteze muchiile galben-roșu + galben-portocaliu (zonele evidențiate). Ideea principală este de a schimba muchia galben-roșu și muchia galben-portocaliu pe stratul de jos, astfel încât cele două muchii să fie opuse pe stratul de jos. Apoi, stratul de sus este rotit în poziția corectă, iar un M2 U sau M2 U' va rezolva muchiile stânga-dreapta ale stratului U.

Pentru a vă ajuta să înțelegeți mai bine, am organizat toate cele șase forme de EO în [biblioteca de algoritmi Roux Method, la pagina LSE](/ro/projects/rubiks-cube/roux#lse). Fiecare imagine, la apăsarea "Vezi detalii", va deschide starea corespunzătoare în cubul 3D, cu muchiile neorientate evidențiate automat. Pe aceeași pagină veți găsi și toate cazurile pentru orientarea UL/UR și ultimele patru muchii.

Reducerea volumului de exerciții în această etapă nu este un lucru rău. Platoul nu poate fi depășit prin cantitate, ci prin corectarea unui obicei prost specific. Experiența mea este să corectez un singur lucru la un moment dat.

### Etapa Patru: 30 secunde → 28 secunde (După săptămâna 13)

**Date**: După 4 august. În întreaga lună septembrie, numărul de sesiuni de antrenament înregistrate a fost de 122, deși multe sesiuni nu au fost înregistrate. Am transformat Cubul Rubik într-o jucărie de birou, pe care o iau în mână oricând, mă joc câteva ori când sunt bine dispus, când sunt stresat sau anxios, în pauzele de la muncă, când mă plictisesc. Am integrat jocul cu cubul în viața mea. Ao100 a scăzut treptat de la 29.9 la 28.2.

**Unde te blochezi**: Nu există un blocaj clar, pur și simplu nu sunt suficient de antrenat.

**Ce să exersezi**:

Dacă viteza ta medie este încă peste 30 de secunde, singurul lucru pe care trebuie să-l faci este să continui să exersezi mult, nu să memorezi algoritmi noi.

Continuând să exersezi look-ahead prin slow solving, vei deveni din ce în ce mai rapid.

Ia cubul și joacă-te oricând, pune-l la îndemână, de exemplu pe birou, ca să te poți juca în timpul pauzelor de la muncă. De asemenea, poți înregistra frecvent videoclipuri cu rezolvările tale, pentru a vedea în ce etapă petreci cel mai mult timp și apoi să optimizezi țintit. Aceasta este practica deliberată; viteza ta de progres nu depinde de numărul total de exerciții obișnuite, ci de numărul de exerciții deliberate.

Apoi vei descoperi că, după ce ai depășit perioada de platou de 30-35 de secunde, viteza ta a mai scăzut cu o treaptă.

Felicitări, ai ajuns în această etapă! Din perspectiva unui începător, ești deja un jucător foarte priceput!

## Prețul de a nu memora algoritmi

Până aici, trebuie să fiu sincer. A nu memora algoritmi nu este gratuit.

Faza CMLL este lentă. Cele 42 de cazuri acoperite de 9 algoritmi înseamnă că unele situații trebuie făcute de două ori. Cei care știu întregul set de algoritmi CMLL sunt mai rapizi cu două-trei secunde la acest pas.

Tehnica stratului M are un prag ridicat. A doua jumătate a metodei Roux se bazează în întregime pe stratul M. Stratul M este mai dificil de rotit decât R sau U, se blochează mai ușor și necesită un cub de o calitate mai bună.

Nu-ți face griji cu privire la limita superioară. Există și jucători de top care folosesc metoda Roux și se clasează printre primii din lume; metoda în sine nu are o limită superioară. Dar pentru a ajunge sub 15 secunde, probabil că va trebui să completezi toți cei 42 de algoritmi CMLL. Însă asta este o etapă diferită. Pentru a ajunge sub 30 de secunde, nu este necesar.

Mai mult, aproape toți jucătorii de clasă mondială care rezolvă cu o singură mână folosesc metoda Roux, deoarece este într-adevăr foarte potrivită și pentru operațiuni one-handed.

**Cele mai rapide rezultate cu metoda Roux în competițiile oficiale (WCA):**

-   Single de 4.11 secunde, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipine), 2023 Valenzuela Cubing Open, recunoscut ca cel mai rapid single oficial cu Roux ([video de reconstrucție](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Average de 5.98 secunde, tot el, 2019, pe atunci record asiatic și al treilea average sub-6 oficial din istorie ([profil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
-   De asemenea, este [deținătorul recordului mondial la one-handed](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): average de 8.09, single de 6.05 (2024), iar în comunitatea one-handed se consideră că Roux este cea mai bună metodă.

Cred că această tranzacție este foarte avantajoasă. În schimbul a două-trei secunde în plus la CMLL, primești: să știi ce faci la fiecare pas, să nu uiți metoda chiar dacă nu atingi cubul trei luni și să poți rezolva orice cub nou pe care îl întâlnești.

## Sumar

![Rezolvare completă](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

De la a putea rezolva cubul la a ajunge sub 30 de secunde nu este un proces de memorare a algoritmilor, ci un proces de antrenare a coordonării mâinilor, ochilor și creierului.

Patru etape, patru lucruri: mai întâi învață să privești fără să rotești cubul, apoi învață să construiești Al Doilea Bloc fără să distrugi Primul Bloc, apoi învață să te uiți la pasul următor în timp ce faci pasul curent, iar în final, lasă mâinile să țină pasul cu ochii.

Algoritmii nu sunt sursa vitezei. Observația este.

Învață să-ți construiești un feedback pozitiv prin progresul fiecărei etape, chiar și exercițiile de fluență pot fi mai puțin plictisitoare, mai ales când descoperi bucuria de a-ți bate din nou recordul. În special în etapele inițiale și intermediare, vei experimenta în fiecare zi bucuria de a-ți doborî recordul.

Toți algoritmii și cazurile menționate în text sunt organizate în [biblioteca de algoritmi Roux Method](/ro/projects/rubiks-cube/roux). Când te blochezi, poți reveni să verifici.

Lumea Cubului Rubik este plină de distracție, îți urez să te bucuri de ea.

## Anexa 1: Lista de exerciții pentru fiecare etapă

**Etapa unu (> 60 secunde)**

-   Poziție fixă de observare, nu roti cubul pe parcursul întregii rezolvări
-   Găsește următoarea piesă dorită fără pauze
-   Slow solving, rostește intenția fiecărei mișcări
-   Exersează doar Primul Bloc, repetă de 50 de ori

**Etapa doi (60 → 40 secunde)**

-   Al Doilea Bloc se face doar cu R, r, M, U, fără a atinge Primul Bloc
-   Exersează CMLL în două etape
-   Exersează ritmul M' U M' U, 5 minute pe zi

**Etapa trei (40 → 30 secunde)**

-   Oprește-te după CMLL și identifică imediat numărul de muchii neorientate
-   Slow solving + look-ahead: ochii privesc întotdeauna la următoarea piesă
-   Cel puțin 20 de rezolvări de înaltă calitate pe zi

**Etapa patru (< 30 secunde)**

-   Înregistrează-te pentru a găsi pauzele
-   Fingertricks: tehnici de degete R U R' U', degetul inelar pentru stratul M
-   20 de rezolvări de înaltă calitate pe zi, fără a forța cantitatea

## Anexa 2: Instrumente

-   **csTimer**: [cstimer.net](https://cstimer.net/). Activează statisticile Ao5 / Ao12 / Ao100; Ao100 este nivelul tău real, timpii individuali sunt chestiune de noroc.
-   **Cub 3D**: [philoli.com/zh/projects/rubiks-cube](/ro/projects/rubiks-cube/). Toți algoritmii din acest articol pot fi introduși aici pentru a vedea animația.
-   **Biblioteca de algoritmi Roux Method prietenoasă cu începătorii**: [philoli.com/zh/projects/rubiks-cube/roux](/ro/projects/rubiks-cube/roux). Rutine comune de inserție pentru Primul Bloc și Al Doilea Bloc, 9 algoritmi pentru CMLL în două etape, și toate cazurile pentru LSE (EO, UL/UR, ultimele patru muchii). Fiecare imagine poate fi deschisă în cubul 3D, ascunzând automat blocurile irelevante și evidențiind muchiile de mutat.
-   **Analizor de antrenament csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/ro/projects/rubiks-cube/analyzer). Trage și plasează fișierul exportat din csTimer pentru a vedea tendința timpilor tăi, curbele Ao5/Ao12/Ao100, progresul PB-urilor, tabelul cu etapele importante (prima dată sub-60, sub-40, sub-30) și curba de practică Power Law. Toate graficele din acest articol provin de aici. Datele sunt procesate doar în browserul tău și nu sunt încărcate. Dacă nu ai un fișier exportat, poți încărca datele mele de 4441 de rezolvări pentru a vedea efectul.

*Acest articol conține linkuri de afiliere Amazon: prin achiziționarea prin intermediul linkurilor, voi primi o mică comision, iar prețul tău rămâne neschimbat.*

## Mai multe de citit

-   [Cum să rezolvi Cubul Rubik fără să memorezi algoritmi: chiar și un elev de școală primară poate înțelege](/ro/blog/solve-rubiks-cube-without-formulas)
