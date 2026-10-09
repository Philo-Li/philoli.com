---
layout: blog
title: "Kaip pasiekti, kad kubas būtų išspręstas per mažiau nei 30 sekundžių, nemokant algoritmų: supras net pradinukas"
date: 2026-10-09 12:00:00
tags:
  - kubas
  - pamoka
  - Roux metodas
  - greitasis sprendimas
  - sąmoningas praktikavimas
categories: Kasdieniai bandymai
description: "Nuo pirmojo kubo išsprendimo iki Ao100 per mažiau nei 30 sekundžių prireikė 89 dienų, neįsimenant nė vieno CFOP algoritmo. Išanalizuojant 4441 sprendimo laiko duomenis, suskirstome procesą į keturis etapus: kas kiekviename etape stabdo, ką treniruotis, ir kodėl Roux metodui nereikia jokių algoritmų."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Kaip pasiekti, kad kubas būtų išspręstas per mažiau nei 30 sekundžių, nemokant algoritmų: supras net pradinukas" />
</figure>

Ankstesniame straipsnyje [„Kaip išspręsti Rubiko kubą be algoritmų“](/lt/blog/solve-rubiks-cube-without-formulas/) išmokote, kaip naudojant permutacijų logiką išspręsti Rubiko kubą neįsimenant algoritmų. Tas straipsnis sulaukė daugelio entuziastingų atsiliepimų.

Jei vadovavotės nurodymais, dabar jums tikriausiai reikia dviejų ar trijų minučių, ir nors rankos gal dar ne visai paklūsta, kubą išspręsti galite. Tačiau netrukus iškils naujas klausimas: kaip pagreitėti?

Ieškodami „greitojo kubo sprendimo“ (speedcubing), visose pamokose rasite tą patį atsakymą: jei norite pasiekti sub-30 (mažiau nei 30 sekundžių), pirmiausia turite išmokti CFOP algoritmus. Iš viso 119 algoritmų: 41 F2L, 57 OLL, 21 PLL. Net jei F2L atliekamas intuityviai, viršutiniojo sluoksnio 78 algoritmų vis tiek neišvengsite. Jei jų neįsiminsite, apie greitį negalvokite.

Šiame straipsnyje noriu jums pasakyti, kad galite visiškai nemokėti algoritmų ir vis tiek pasiekti sub-30.

<!--more-->

Nuo 2026 m. gegužės 7 d., kai pirmą kartą išsprendžiau kubą, iki rugpjūčio 4 d., kai mano Ao100 pasiekė sub-30, praėjo 89 dienos. Per visą šį laikotarpį neįsiminiau nė vieno CFOP algoritmo, tiesiog laisvalaikiu žaidžiau. Tai yra mano 4441 išsprendimų laiko duomenys, kuriuos įrašiau.

![4441 išsprendimų rezultatų kreivė](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Pav.: 4441 išsprendimų rezultatų kreivė. Pilka linija rodo kiekvieno išsprendimo laiką, tamsi linija – Ao100 tendenciją, raudoni taškai – asmeninių rekordų pagerinimus. Geriausias Ao100 – 28.22 sekundės.*

Sąmoningai ir reguliariai praktikuojantis, kiekvienas per kelis mėnesius gali pereiti nuo nulio iki sub-30.

Ką reiškia „mažiau nei 30 sekundžių“? [1982 m. pirmajame Rubiko kubo pasaulio čempionate](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) čempiono rezultatas buvo 22.95 sekundės – tai pirmasis oficialus WCA pripažintas pasaulio rekordas; 10-oji vieta buvo 29.11 sekundės, o šį rezultatą pasiekė pati Jessica Fridrich, apie kurią kalbėsime kitame skyriuje, CFOP metodo kūrėja. Kitaip tariant, šiandien mėgėjo per kelis mėnesius pasiektas sub-30 rezultatas 1982 m. būtų leidęs patekti į pasaulio dešimtuką.

Toliau pasidalinsiu su jumis, kaip žingsnis po žingsnio tai pasiekiau, ir pateiksiu visą praktikavimo metodą.

## Kodėl greitojo sprendimo pasaulyje visi mokosi algoritmų

Pirmiausia išsiaiškinkime: kodėl „greitis“ ir „algoritmų mokymasis“ daugeliui yra neatsiejami?

Devintojo dešimtmečio pradžioje čekų kilmės profesorė Jessica Fridrich (vėliau Bingamtono universitete JAV tyrinėjusi skaitmeninę forensiką) sukūrė sluoksniais sprendimo metodą, kuris vėliau buvo pavadintas CFOP (Kryžius, F2L, OLL, PLL). Šio metodo idėja yra: išvardinti visas galimas viršutiniojo sluoksnio situacijas ir kiekvienai situacijai priskirti optimalų algoritmą. Atpažįstate situaciją, įvykdote algoritmą ir nereikia galvoti.

![Jessica Fridrich ir Rubiko kubas jos biure](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Pav.: Jessica Fridrich ir Rubiko kubas jos biure. 1982 m. ji užėmė 10-ąją vietą pirmajame pasaulio čempionate su 29.11 sekundės rezultatu, o CFOP metodas pavadintas jos vardu (Fridrich metodas).*

Šis metodas yra labai greitas. Beveik visi pasaulio rekordai pasiekti naudojant CFOP. Todėl visose pamokose jis mokomas, visuose vaizdo įrašuose apie jį kalbama, o „mokytis greitojo sprendimo“ tapo lygu „mokytis CFOP“, o mokytis CFOP reiškia įsiminti 119 algoritmų.

Tačiau atkreipkite dėmesį, kad „algoritmų mokymasis“ yra CFOP, kaip metodo, savybė, o ne paties „greičio“ savybė. CFOP reikalauja įsiminti, nes jis pasirinko visų galimų situacijų išvardijimo kelią. Išsamus išvardijimas reikalauja atminties – tai jo kaina.

Ar yra metodų, kurie nesirenka šio kelio? Taip, yra.

## Sprendimo metodas be algoritmų: Roux metodas

2003 m. prancūzas Gilles Roux paskelbė visiškai kitokį požiūrį. Vietoj to, kad statytumėte sluoksnį po sluoksnio, pirmiausia pastatomi du 1×2×3 „blokai“ (kairysis ir dešinysis), tada sprendžiami keturi viršutiniojo sluoksnio kampainiai, o galiausiai lieka tik šeši briaunainiai, kuriuos išsprendžiama naudojant viduriniojo sluoksnio M ir viršutiniojo sluoksnio U judesius.

![Gilles Roux varžybose](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Pav.: Gilles Roux varžybose. Ištrauka iš ankstyvojo varžybų vaizdo įrašo, vaizdas atnaujintas ir padidintas AI pagalba.*

Ankstesniame straipsnyje jau vieną kartą išsprendėme kubą naudodami šią struktūrą. Čia dar kartą peržiūrėkime keturis jo etapus, šįkart atkreipdami dėmesį į tai, „ką reikia įsiminti kiekviename etape“:

| Eil. Nr. | Turinys | Reikalingi algoritmai |
| --- | --- | --- |
| 1. Kairysis blokas (FB) | Pastatyti 1×2×3 bloką | 0 algoritmų, grynas stebėjimas |
| 2. Dešinysis blokas (SB) | Simetriškai pastatyti kitą | 0 algoritmų, grynas stebėjimas |
| 3. CMLL | Viršutiniojo sluoksnio keturių kampainių išdėstymas | 9 algoritmai, visi gali būti išvesti iš trijų kampų keitimo |
| 4. LSE | Paskutiniai šeši briaunainiai | 0 algoritmų, naudojami tik viršutiniojo ir viduriniojo sluoksnio (M ir U) sukimai |

Iš keturių etapų trims nereikia jokių algoritmų. Vienintelis reikalingas CMLL apima 42 situacijas, bet jums nereikia visų 42 algoritmų. Ankstesniame straipsnyje aptartas trijų kampų keitimo algoritmas R U' L' U R' U' L U, kartu su jo veidrodiniu variantu ir keliais pakeitimais, gali apimti visas situacijas, tik bus šiek tiek lėčiau.

![Keturios Roux metodo pakopos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Pav.: Keturios Roux metodo pakopos. Kiekviename žingsnyje rodomi tik tie kubeliai, kurie jau yra savo vietose: Kairysis blokas → Dešinysis blokas → CMLL (keturi viršutiniojo sluoksnio kampainiai) → LSE (paskutiniai šeši briaunainiai). Iškarpa iš mano 3D kubo puslapio „Sprendimo“ skydelio.*

Štai kodėl Roux metodas leidžia išspręsti kubą nemokant algoritmų: jis suspaudžia įsimintiną dalį į labai mažą kampelį, o visa kita palieka stebėjimui, supratimui ir įgūdžiams.

## Nuo 165 iki 28 sekundžių: keturi etapai

Žemiau pateikiamas mano realus kelias. Kiekviename etape aš nurodžiau pradžią ir pabaigą duomenimis, o tada paaiškinau, kas tame etape mane stabdė ir ką aš treniravausi. Jūsų kliūtys gali skirtis nuo manųjų, tačiau seka greičiausiai bus tokia pati.

![Keturios etapų trukmės](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Pav.: Keturios etapų trukmės. Pirmasis etapas – 3 savaitės, antrasis – 11 dienų, trečiasis – du mėnesiai, ketvirtasis – iki dabar.*

### Pirmasis etapas: 165 sek. → 60 sek. (1–3 savaitės)

**Duomenys**: Nuo gegužės 7 d. iki gegužės 27 d. Pirmą savaitę vidurkis buvo 165 sek., trečią – 68 sek.

**Kur užstringama**: Kairysis blokas yra labai neįgudęs, kiekvienos kubelių poros tenka ilgai ieškoti. Be to, suradus kubelių porą, pradedantieji visada linkę sustoti ir toliau stebėti.

![Kur pradedantieji praleidžia daugiausiai laiko](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Pav.: Kur pradedantieji praleidžia daugiausiai laiko. Rankos sustojusios, akys ieško kubelių, o „ieškojimo“ laikas yra kelis kartus ilgesnis nei „sukimo“ laikas.*

**Ką treniruotis**:

Didžiausias priešas šiame etape nėra lėtos rankos, o lėtos akys. Laikas, kurį praleidžiate „ieškodami“, yra daug ilgesnis nei laikas, kurį praleidžiate „sukdami“. Todėl:

-   **Fiksuokite stebėjimo poziciją, nesukite kubo.** Kaip minėta ankstesniame straipsnyje, Roux metodo stebėjimo kampas yra fiksuotas. Šiame etape „nevartyti kubo“ turi tapti raumenų atmintimi. Kiekvieną kartą, kai norisi vartyti kubą, sustokite ir paklauskite savęs: ar iš šio kampo matau reikiamą kubelį?
-   **Lėtasis sprendimas.** Neįjunkite laikmačio, bet judesiai turi būti nuoseklūs, be jokių pauzių. Kiekvienas judesys gali būti labai lėtas, bet be sustojimų. Esminis dalykas yra tai, kad kai rankos atlieka praėjusį judesį, akys jau turi sekti kitą. Tai yra lėtojo sprendimo esmė. Nors tai atrodo lėtinantis procesas, iš tikrųjų tai lavina jūsų akis atpažinti kubelių pozicijas ir jų santykį su vietomis, kur jie turėtų atsidurti.
-   **Treniruokitės tik kairiojo bloko statybą.** Išmaišykite, pastatykite kairįjį bloką, vėl išmaišykite, vėl pastatykite kairįjį bloką. Nespręskite toliau. Kairysis blokas yra laisviausias Roux metodo žingsnis ir geriausiai lavina stebėjimą.

Nesimokykite jokių naujų algoritmų šiame etape. Jūsų dabartinė kliūtis nėra algoritmai.

### Antrasis etapas: 60 sek. → 40 sek. (4–5 savaitės)

**Duomenys**: Nuo gegužės 27 d. iki birželio 7 d., 11 dienų. Tai buvo sparčiausiai sumažėjęs etapas per visą procesą, ir aš tuo metu treniravausi daugiausiai – 723 kartus per pirmą birželio savaitę.

**Kur užstringama**: Judesiai nėra sklandūs. Kubas stringa.

**Ką treniruotis**:

Šiame etape turite optimizuoti kiekvieno etapo judesius, remiantis supratimu, didinti kiekvieno judesio įgūdžius.

-   **Dešinysis blokas (SB).** Dešinysis blokas yra sunkesnis nei kairysis, nes erdvės sumažėja perpus, ir negalima sugadinti jau pastatyto kairiojo bloko. Svarbiausi judesiai yra R, r (du dešinieji sluoksniai), M, U. Šiame etape turite išmokti naudoti r ir M vietoj R, kad judintumėte kubelius, taip kairysis blokas niekada nebus paliestas. Judesių optimizavimas reiškia laiko taupymą. Pavyzdžiui, tris kartus pasukti pagal laikrodžio rodyklę yra tas pats, kas vieną kartą prieš laikrodžio rodyklę.
-   **Įvaldykite M sluoksnį.** Paskutiniame Roux metodo žingsnyje viskas priklauso nuo M ir U judesių, o M sluoksnio sukimo sklandumas tiesiogiai lemia jūsų minimalų laiką. Stumkite M bevardžiu arba viduriniu pirštu, pradėkite treniruotis M' U M' U ritmą.
-   **CMLL formų atpažinimas.** Ankstesniame straipsnyje mes „išmėginome“ keturis kampus su trijų kampų keitimu. Dabar reikia pradėti pirmiausia pažiūrėti, tada daryti: prieš vartydami viršutinį sluoksnį, pažiūrėkite į keturių kampainių geltonos spalvos orientaciją, įvertinkite, ar yra 0, 1, 2 ar 4 gerai orientuoti kampai, ir tada iškart atlikite atitinkamą judesį. Galite pasiekti didelį efektyvumo padidėjimą su labai nedideliu kiekiu algoritmų, ir tai yra labai naudinga. Didelės dalies algoritmų nereikia įsiminti atmintinai, juos galima suprasti darymo metu.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Dešiniojo bloko statybos perspektyva" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Pav. kairėje: Dešiniojo bloko statybos perspektyva. Kairysis blokas jau baigtas, naudojami tik keturi judesiai R, r, M, U, kad įterptumėte dešiniojoje pusėje esančią kampo ir briaunos porą, kairysis blokas niekada nebus paliestas. Pav. dešinėje: M' U M – dažniausiai naudojama judesių grupė antroje Roux metodo dalyje. Vidurinis sluoksnis pakyla, viršutinis sluoksnis pasisuka, vidurinis sluoksnis grįžta – trys žingsniai, kuriais pakeičiama viršutiniojo ir viduriniojo sluoksnio briaunų pora.*

Galite peržiūrėti mano sudarytą [Roux metodo algoritmų biblioteką](/lt/projects/rubiks-cube/roux#cmll). CMLL puslapyje yra dviejų etapų metodas: 7 orientacijos algoritmai + 2 pozicijos algoritmai, iš viso 9. Tai yra efektyviausias pasirinkimas greičio didinimui, juos lengva išmokti, ir kiekviena įvaldyta grupė gali pagreitinti procesą maždaug 1–2 sekundėmis. Šiek tiek pasipraktikavus, greitai juos įvaldysite, o kai kurie jau buvo pristatyti ankstesniame straipsnyje. Jums nereikia visų jų įsiminti, kad pasiektumėte sub-30.

![Dviejų etapų CMLL pirmasis žingsnis, septynios kampų orientacijos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Pav.: Dviejų etapų CMLL pirmasis žingsnis, septynios kampų orientacijos. Viršutiniame vaizde geltona spalva yra viršutiniojo paviršiaus spalva, išoriniai maži brūkšneliai rodo, kad kampo viršutiniojo paviršiaus spalva yra nukreipta į šoną. Atpažinkite formas pagal geltonų kampų skaičių: 0 – H arba Pi, 1 – S arba AS, 2 – U, T arba L.*

Sulygiavus geltoną viršų, galite naudoti šiuos du algoritmus, kad sulygiuotumėte kampų šonus.

Jei viena pusė jau yra vienos spalvos, pavyzdžiui, raudona spalva jau sutampa toje pačioje pusėje, pasukite ją į kairę, tada galite pasirinkti gretimų kampų keitimo algoritmą. Jei jokia pusė nesutampa, pasirinkite įstrižainių kampų keitimo algoritmą.

![Dviejų etapų CMLL antrasis žingsnis, dvi kampų pozicijos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Pav.: Dviejų etapų CMLL antrasis žingsnis, dvi kampų pozicijos. Kairiajame paveikslėlyje kairiosios pusės dviejų kampų raudona spalva jau sutampa, naudojamas gretimų kampų keitimas; dešiniajame paveikslėlyje jokia pusė nesutampa, naudojamas įstrižainių kampų keitimas.*

Galite daug praktikuotis lėtuoju sprendimu, kad suprastumėte kiekvieną algoritmų grupę. Nežiūrėkite į juos kaip į algoritmus, o kaip į tam tikrus fiksuotus judesius, kuriuos lėtai tyrinėdami galėtumėte atrasti patys, tačiau čia pateikiami jie padės jums išvengti nereikalingų klaidų.

Dar vienas dalykas, kuris duoda akimirksniu duoda rezultatų, geriau nei bet kokia praktika: išleiskite šiek tiek pinigų naujam kubui. Jei vis dar turite seną, girgždantį ir stringantį kubą, nusipirkite šiuolaikinį magnetinį 3x3 kubą. Naujausi kubai leis pajusti inžinerinio optimizavimo galią: jie sukasi sklandžiai, automatiškai grįžta į vietą, beveik nestringa. Vien pakeitus kubą, vidutinis rezultatas gali iškart pagerėti 15 sekundžių. Geriausias kainos ir kokybės pasirinkimas yra [MoYu RS3 M V5 (su maglev ir rutuliniu branduoliu)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), kainuojantis apie dvidešimt dolerių, ir jo pakaks iki sub-20 lygio.

### Trečiasis etapas: 40 sek. → 30 sek. (5–13 savaitės, du mėnesiai)

**Duomenys**: Nuo birželio 7 d. iki rugpjūčio 4 d. Ao100 nuo 39.8 sek. nušlifuotas iki 29.9 sek., tam prireikė 58 dienų. Šiame etape kartais pasitaiko rezultatų, trumpesnių nei 30 sekundžių, bet tik su didele sėkme. Be to, mažėjant vidutiniam sprendimo laikui, pagerinti rezultatą 1 sekunde taps eksponentiškai sunkiau.

![Dienos vidutinis rezultatas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Pav.: Dienos vidutinis rezultatas. Nuo birželio vidurio kreivė beveik išsilygino, du mėnesius svyravo tarp 30–40 sekundžių.*

Tai stagnacijos laikotarpis. Kiekvienas su juo susiduria, aš jame praleidau du mėnesius.

**Kur užstringama**: Viršutiniojo sluoksnio šešių briaunainių sprendimas yra labai lėtas, nesuvokiama logika, kiekvieną kartą bandoma vėl ir vėl, švaistant daug laiko. Kairysis ir dešinysis blokai vis dar nepakankamai įgudę.

**Ką treniruotis**:

-   **EO (briaunų orientacijos) atpažinimas.** Ankstesniame straipsnyje aptarėme, kad neteisingai orientuotų briaunų yra tik kelios situacijos: 0, ne 0 ir ne 4, 4 (po 2 viršuje/apačioje), 4 (visos viršuje), 4 (3 viršuje, 1 apačioje). Šio etapo tikslas yra: iškart po blokų pastatymo, neskaičiuojant, iš pirmo žvilgsnio atpažinti, kuri tai situacija. Treniruojamasi taip: išmaišius kubą, sprendžiama iki CMLL pabaigos, tada sustojama, pasakomas neteisingai orientuotų briaunų skaičius ir tęsiama toliau.
-   Daugelis nesupranta čia atliekamų veiksmų. EO etapo tikslas yra sukurti strėlytės formą su 3 neteisingai orientuotomis briaunomis viršuje ir 1 apačioje, nes pilna forma po vieno išmaišymo yra strėlytės forma. Todėl, mąstant atvirkščiai, tai yra paskutinis žingsnis prieš baigiant sprendimą. Taigi, nepriklausomai nuo neteisingai orientuotų briaunų skaičiaus, galiausiai siekiama sukurti strėlytę. Jei viršuje yra 4 neteisingai orientuotos briaunos, pakeiskite vieną viršutinę briauną su viena apatine, kad viena neteisingai orientuota briauna nukeliautų žemyn, taip sukuriant strėlytę. Jei viršuje yra 2 ir apačioje 2, pakeiskite vieną viršutinę briauną su viena apatine, kad viena neteisingai orientuota briauna pakiltų aukštyn, taip sukuriant strėlytę. Jei viršuje yra 1 ir apačioje 1, arba viršuje 2, naudokite M' U M, kad pirmiausia pasiektumėte ankstesnę situaciją, o tada sukurkite strėlytę. Galite daug stebėdami ir mąstydami patys atrasti geriausius žingsnius 1/1 situacijai.
-   **Daug treniruotis numatymą (Look-ahead).** Tai svarbiausias dalykas, pereinant nuo 40 iki 30 sekundžių, ir tai labiausiai prieštarauja intuicijai: sukite lėčiau, žiūrėkite toliau. Statydami kairįjį bloką, akys neturi žiūrėti į dedamą kubelį, o ieškoti, kur yra kitas. Iš pradžių bus labai nepatogu, rezultatai pablogės, bet po savaitės staiga pagerės.
-   **CMLL be dvejonių.** Jei kiekvieną judesį turite apgalvoti prieš darydami, jis dar nėra jūsų. Treniruokitės kiekvieną judesį atskirai 50 kartų, kol rankos pajuda, vos pamačius formą.

![Strėlytės forma](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Pav.: Strėlytės forma. Trys neteisingai orientuoti viršutiniojo sluoksnio briaunainiai (pažymėti žalsva spalva) sudaro strėlytę, nukreiptą į apatiniojo sluoksnio neteisingai orientuotą briaunainį. Šiuo atveju vienas M' U M judesys gali vienu metu išspręsti visus keturis. [Atidarykite šią būseną 3D kubelyje](/lt/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), kad pamatytumėte žingsnis po žingsnio.*

![Šešios EO formos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Pav.: Šešios EO formos. Viršutiniame kairiajame kampe esanti etiketė rodo neteisingai orientuotų briaunų skaičių (viršuje / apačioje), geltonos spalvos yra teisingai orientuotos briaunos, o žalsvos spalvos rėmelis – neteisingai orientuotos briaunos. Tik strėlytės formai reikia algoritmo, kitos penkios pirmiausia paverčiamos strėlyte.*

Norint išspręsti kairiuosius ir dešiniuosius briaunainius, čia reikia, kad geltona būtų viršuje, balta – apačioje, o kairysis blokas būtų raudonas. Tada reikia išdėstyti geltonai-raudoną briaunainį + geltonai-oranžinį briaunainį (paryškintose vietose). Pagrindinė idėja yra, kad geltonai-raudoną briaunainį, keičiant viršutines ir apatines briaunas, perkelti į apatinį sluoksnį, ir geltonai-oranžinį briaunainį taip pat perkelti į apatinį sluoksnį. Du briaunainiai apatiniame sluoksnyje turi būti priešingose pusėse. Tada viršutinį sluoksnį pasukti į tinkamą poziciją, ir M2 U arba M2 U' judesiai išspręs U sluoksnio kairiuosius ir dešiniuosius briaunainius.

Kad būtų lengviau suprasti, visas šešias EO formas sudėjau į [Roux metodo algoritmų bibliotekos LSE puslapį](/lt/projects/rubiks-cube/roux#lse). Paspaudus „žiūrėti detaliau“ ant kiekvienos formos, ji bus atidaryta 3D kubelyje, kur neteisingai orientuotos briaunos bus automatiškai paryškintos. Tame pačiame puslapyje rasite ir UL/UR išdėstymą bei visas paskutinių keturių briaunainių situacijas.

Šiame etape praktikavimo kiekio sumažėjimas nėra blogas dalykas. Stagnacijos laikotarpio nepavyks įveikti vien tik didinant praktiką; tai pasiekiama atsikratant konkretaus blogo įpročio. Mano patirtis rodo, kad vienu metu reikia keisti tik vieną.

### Ketvirtasis etapas: 30 sek. → 28 sek. (po 13 savaitės)

**Duomenys**: Po rugpjūčio 4 d. Visą rugsėjį užregistruotų praktikavimų skaičius buvo 122, nors daugelis praktikavimų nebuvo užregistruoti. Kubas man tapo stalo žaislu, kurį tiesiog paimu ir žaidžiu: kai nuotaika gera, kai jaučiuosi susinervinęs ar nerimauju, kai darau pertrauką darbe, kai nuobodu. Leidau kubo sprendimui įsilieti į kasdienį gyvenimą. Ao100 taip pat palaipsniui sumažėjo nuo 29.9 iki 28.2 sek.

**Kur užstringama**: Nėra aiškaus butelio kaklelio, tiesiog trūksta įgūdžių.

**Ką treniruotis**:

Jei jūsų vidutinis greitis vis dar viršija 30 sekundžių, vienintelis dalykas, kurį reikia daryti, yra toliau daug praktikuotis, o ne mokytis naujų algoritmų.

Nuolat treniruodamiesi numatymą lėtuoju sprendimu, tapsite vis greitesni.

Dažnai paimkite kubą ir žaiskite, laikykite jį lengvai pasiekiamoje vietoje, pavyzdžiui, ant darbo stalo. Taip pat galite dažnai įrašinėti savo sprendimų vaizdo įrašus, kad pamatytumėte, kuriame etape sugaištama daugiausiai laiko, ir tada atlikti tikslinį optimizavimą. Tai yra sąmoningas praktikavimas, ir jūsų progreso greitis priklauso ne nuo bendro įprastų praktikavimų skaičiaus, o nuo sąmoningo praktikavimų skaičiaus.

Tada pamatysite, kad įveikus 30–35 sekundžių stagnacijos laikotarpį, greitis vėl pagerės dar vienu laipteliu.

Šiame etape jus sveikinu – pradedantiesiems jau esate labai pažangus žaidėjas!

## Algoritmų nemokėjimo kaina

Būkime atviri. Algoritmų nemokėjimas turi savo kainą.

CMLL etapas yra lėtas. 42 situacijos, apimamos 9 algoritmais, reiškia, kad kai kurias situacijas reikia atlikti du kartus. Tie, kurie moka visus CMLL algoritmus, šiame žingsnyje mane lenkia dviem ar trimis sekundėmis.

M sluoksnio pirštų judesiai reikalauja daugiau įgūdžių. Antroji Roux metodo pusė visiškai priklauso nuo M sluoksnio, o M sluoksnį sunkiau sukti nei R ar U, jis lengviau stringa, be to, kelia didesnius reikalavimus pačiam kubui.

Nesijaudinkite dėl maksimalių galimybių. Tarp aukščiausio lygio žaidėjų yra ir tokių, kurie su Roux metodu pasiekia pasaulinio lygio rezultatus, pats metodas neturi viršutinės ribos. Tačiau norint pasiekti sub-15, greičiausiai teks įsiminti visus 42 CMLL algoritmus. Bet tai jau kito etapo reikalas. Norint pasiekti sub-30, to nereikia.

Be to, beveik visi pasaulinio lygio vienos rankos sprendėjai naudoja Roux metodą, nes jis tikrai puikiai tinka ir sprendimui viena ranka.

**Greičiausi oficialūs Roux metodo rezultatai WCA varžybose:**

-   Vienkartinis rezultatas 4.11 sekundės, [Seanas Patrickas Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipinai), 2023 m. Valenzuela Cubing Open, pripažintas greičiausias oficialus Roux metodo vienkartinis rezultatas ([atstatymo vaizdo įrašas](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Vidurkis 5.98 sekundės, taip pat jo, 2019 m., tuomet Azijos rekordas ir trečias oficialus sub-6 vidurkis istorijoje ([WCA duomenys](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Jis taip pat yra [vienos rankos pasaulio rekordininkas](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): vidurkis 8.09, vienkartinis 6.05 (2024 m.). Vienos rankos sprendėjų bendruomenė plačiai pripažįsta, kad Roux yra optimaliausias sprendimo metodas.

Manau, kad tai labai geras sandoris. Už dvi ar tris CMLL etapo sekundes jūs gaunate: kiekviename žingsnyje žinote, ką darote, nepamiršite net tris mėnesius nelietę kubo, ir galėsite išspręsti bet kurį nematytą kubą.

## Išvada

![Išspręsta](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Nuo pirmo išsprendimo iki sub-30 tai nėra algoritmų įsiminimo procesas, o rankų, akių ir smegenų koordinacijos treniravimas.

Keturi etapai, keturi dalykai: pirmiausia išmokite žiūrėti nevartydami kubo, tada išmokite statyti dešinįjį bloką negriaudami kairiojo, tada išmokite žiūrėti į kitą žingsnį, kol atliekate dabartinį, ir galiausiai leiskite rankoms sekti akis.

Algoritmai nėra greičio šaltinis. Stebėjimas yra.

Išmokite kurti teigiamą grįžtamąjį ryšį per kiekvieno etapo progresą. Net įgūdžių praktikavimas gali būti ne toks nuobodus, ypač kai vėl ir vėl džiaugiatės pagerintu rekordu. Ypač pradiniame ir vidutiniame etapuose, kiekvieną dieną patirsite rekordų gerinimo džiaugsmą.

Visus straipsnyje aptartus algoritmus ir situacijas sudėjau į [Roux metodo algoritmų biblioteką](/lt/projects/rubiks-cube/roux). Kai užstrigsite, grįžkite ir pažiūrėkite.

Rubiko kubo pasaulis pilnas džiaugsmo, linkiu smagaus kubinimo!

## Priedas 1: Kiekvieno etapo praktikavimo sąrašas

**Pirmasis etapas (> 60 sek.)**

-   Fiksuota stebėjimo pozicija, viso sprendimo metu nevartyti kubo
-   Surasti kitą norimą spalvą be pauzės
-   Lėtasis sprendimas, kiekviename žingsnyje įvardijant tikslą
-   Treniruotis tik kairįjį bloką, kartoti 50 kartų

**Antrasis etapas (60 → 40 sek.)**

-   Dešiniajam blokui naudoti tik R, r, M, U, neliečiant kairiojo bloko
-   Dviejų etapų CMLL praktikavimas
-   M' U M' U ritmo praktikavimas, po 5 minutes kasdien

**Trečiasis etapas (40 → 30 sek.)**

-   Sustoti baigus CMLL ir iš karto pasakyti neteisingai orientuotų briaunų skaičių
-   Lėtasis sprendimas + numatymas: akys visada seka kitą kubelį
-   Bent 20 kokybiškų išsprendimų kasdien

**Ketvirtasis etapas (< 30 sek.)**

-   Įrašyti vaizdo įrašus, kad rasti pauzes
-   Pirštų judesiai: R U R' U' vieno piršto metodas, M sluoksnis su bevardžiu pirštu
-   Bent 20 kokybiškų išsprendimų kasdien, nekaupiant kiekio

## Priedas 2: Įrankiai

-   **csTimer**: [cstimer.net](https://cstimer.net/). Įjunkite Ao5 / Ao12 / Ao100 statistiką, nes Ao100 rodo jūsų tikrąjį lygį, o vienkartinis rezultatas yra sėkmė.
-   **3D kubas**: [philoli.com/zh/projects/rubiks-cube](/lt/projects/rubiks-cube/). Visi šiame straipsnyje pateikti algoritmai gali būti įvesti čia ir peržiūrėti animacijoje.
-   **Roux metodo pradedantiesiems draugiškų algoritmų biblioteka**: [philoli.com/zh/projects/rubiks-cube/roux](/lt/projects/rubiks-cube/roux). Dažniausiai naudojamos kairiojo ir dešiniojo blokų įterpimo seka, 9 dviejų etapų CMLL algoritmai, visos LSE situacijos (EO, UL/UR, paskutiniai keturi briaunainiai). Kiekvieną iš jų galima atidaryti 3D kubelyje, automatiškai paslepiant nereikalingus kubelius ir paryškinant judinamus briaunainius.
-   **csTimer treniruočių analizatorius**: [philoli.com/zh/projects/rubiks-cube/analyzer](/lt/projects/rubiks-cube/analyzer). Įkelkite csTimer eksportuotą failą ir pamatysite savo rezultatų tendencijas, Ao5/Ao12/Ao100 kreives, PB gerinimus, pasiekimų lentelę (kada pirmą kartą pasiekėte sub-60, sub-40, sub-30) ir galios dėsnio praktikavimo kreivę. Visi šiame straipsnyje pateikti paveikslėliai gauti iš čia. Duomenys apdorojami tik jūsų naršyklėje ir nėra įkeliami. Jei neturite eksportuoto failo, galite pirmiausia įkelti mano 4441 duomenų įrašą ir pažiūrėti efektą.

*Šiame straipsnyje yra Amazon partnerių nuorodų: pirkdami per nuorodas, aš gausiu nedidelį komisinį mokestį, o jūsų kaina išliks nepakitusi.*

## Daugiau skaitykite

-   [Kaip išspręsti Rubiko kubą be algoritmų: supras net pradinukas](/lt/blog/solve-rubiks-cube-without-formulas)
