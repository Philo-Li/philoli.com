---
layout: blog
title: "Kaip išspręsti Rubiko kubą be formulių: supras net pradinukas"
date: 2026-05-09 12:00:00
tags:
  - Rubiko kubas
  - Pamoka
  - Grupių teorija
  - Matematika
  - Roux metodas
categories: Kasdienės kūrybos išdaigos
description: Naudodami grupės teorijos komutatorių ir Roux tilto metodą, žingsnis po žingsnio išmoksite išspręsti 3x3 Rubiko kubą, neįsimenant jokių formulių.
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Pilnai sudėliotas Rubiko kubas" />
</figure>

Galbūt esate Rubiko kubo naujokas ir dar niekada jo nesudėliojote.

Dauguma vadovėlių rinkoje tik pateikia jums krūvą keistų formulių ir sako: tiesiog darykite taip, o po to šitaip, ir kubas bus sudėliotas. Tačiau atlikę veiksmus, vis tiek nesuprantate, kodėl.

Šis straipsnis taps jūsų išsigelbėjimu. Nuo pat pradžių išmoksite sudėlioti Rubiko kubą neįsimenant jokių formulių. Sužinosite apie kubo atsiradimą ir suprasite, kaip jis veikia. Nuo teorijos iki praktikos žingsnis po žingsnio padėsiu jums sudėlioti visą kubą ir išmokysiu, kaip stebėti.

Galbūt tai bus pirmas kartas, kai patys sėkmingai sudėliosite visą Rubiko kubą.

<!--more-->

## Rubiko kubo gimimas

Kodėl Rubiko kubas turi tokį didelį žavesį? Pirmiausia, pakalbėkime apie tai, kaip jis atsirado.

1974 metais vengrų architektūros profesorius Ernő Rubikas, siekdamas pademonstruoti savo studentams, kaip atskiros dalys gali judėti nepakenkdamos visos konstrukcijos vientisumui, iš medžio pagamino pirmąjį prototipą. Šešias puses nudažęs skirtingomis spalvomis, jis sukūrė Rubiko kubą.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubiko kubo prototipas" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubiko portretas" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Stulbinantis derinių skaičius

3x3 Rubiko kubas turi 8 kampinius elementus, 12 kraštinių elementų ir 6 centrinius elementus, iš viso 26 matomus elementus. Tačiau iš tikrųjų judėti gali 20 elementų, išskyrus šešis centrinius.

Taigi, kiek iš viso jis turi būsenų? **4.3 × 10¹⁹**.

Ką tai reiškia? Šis būsenų skaičius yra didesnis nei smėlio grūdelių skaičius Žemėje. Jei bandytume milijardą būsenų per sekundę, prireiktų daugiau nei **1300 metų**, kad pereitumėte visas. Jei kiekvieną būseną užrašytume ant atskiro lapelio ir sudėtume juos vieną ant kito, storis prilygtų 14000 kelionių pirmyn ir atgal nuo Žemės iki Saulės.

Iš pažiūros mažas 3x3 Rubiko kubas tikrai stebina savo galimybėmis. Dėl savo naujo ir įdomaus žaidimo būdo, begalinės įvairovės ir nenutrūkstamo žavesio, jis iškart po pasirodymo sukėlė tikrą rinkos sprogimą, pritraukdamas daugybę žaidėjų ir entuziastų, kurie aktyviai ėmėsi jo. Netrukus atsirado Rubiko kubo varžybos, įvairūs žaidimo būdai (greitas dėliojimas Speedsolving, užrištomis akimis Blindfolded, viena ranka One-Handed, koja With Feet), įvairūs sprendimo metodai (sluoksnis po sluoksnio Layer by Layer, kampai pirmiausia Corners First, CFOP, Roux tilto metodas, Petrus, ZZ) ir net įvairių formų kubai (nuo antros iki septintos eilės, piramidė Pyraminx, skewb, megaminx) – jų vis daugėjo.

![Įvairių formų Rubiko kubo variantai](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Rubiko kubo žavesys yra toks didelis, kad matematikai nuolat tyrinėja kubo matematiką, dešimtmečius ieškodami „Dievo skaičiaus“, astronautai jį pasiima į kosmosą žaisti, o įvairaus amžiaus žmonės demonstruoja savo įgūdžius varžybose. Tačiau, palyginti su kubo žavesiu, žaidėjų vis dar per mažai. Todėl noriu per šį straipsnį išmokyti visus sudėlioti Rubiko kubą ir mėgautis intelektualinio žaidimo teikiamu malonumu.

## Formulių dilema

Dauguma rinkoje esančių sprendimo būdų reikalauja, kad žaidėjai įsimintų daugybę formulių, o tai labai atgraso naujokus. Dar nespėjus pajusti kubo sudėliojimo džiaugsmo, formulės užkerta kelią. Gerai žinomas CFOP metodas turi daugiau nei 100 formulių, o net naujokui tenka išmokti kelias dešimtis.

Šiandien noriu pasidalinti metodu, kuris leidžia mėgautis Rubiko kubu, neįsimenant jokių formulių. Jūs sudėliosite kubą pasikliaudami tik stebėjimu ir supratimu.

## Galingas matematinis įrankis: Grupių teorija (Group Theory)

Klausimas: Kaip sudėlioti Rubiko kubą neįsimenant nė vienos formulės?

Čia mes pasitelksime galingą matematinį ginklą: grupių teoriją. Nėra problemos, kurios negalėtų išspręsti matematika.

Taigi, koks ryšys tarp Rubiko kubo ir grupių teorijos? Rubiko kubas iš esmės yra grupė. Kiekvienas pasukimas Rubiko kube yra permutacijos operacija. Ši operacija turi keletą savybių: ją galima kombinuoti, atlikti atvirkštinę operaciją, bet ji nėra komutatyvi.

Daugyba, kurią mokėmės pradinėje mokykloje, yra komutatyvi operacija – A × B ir B × A rezultatas yra identiškas. Tačiau Rubiko kubo grupėje A ir B po sukeitimo nėra ekvivalentiškos; pirmiausia R, o po to U, ir pirmiausia U, o po to R, yra visiškai skirtingos operacijos. Taigi, supratę grupes, suprasite ir Rubiko kubą. Kubo dėliojimas taip pat padeda mums suprasti grupes.

Sveikiname, jau supratote skirtumą tarp Abelinės grupės (daugyba ir sudėtis yra Abelinės grupės) ir ne Abelinės grupės (Rubiko kubo grupės).

(Papildymas: Kai kurie skaitytojai atkreipė dėmesį, kad aukščiau pateiktas teiginys nebuvo visiškai griežtas, todėl pateikiame šiek tiek patikslinimų. Sveikieji skaičiai su sudėtimi sudaro Abelio grupę. Natūralieji skaičiai N su sudėtimi Abelio grupės nesudaro, pavyzdžiui, skaičius 3 neturi atvirkštinio elemento -3, nes -3 nėra natūralusis skaičius. Nenuliniai realieji, racionalieji ir kompleksiniai skaičiai su daugyba taip pat sudaro Abelio grupę. Originali analogija buvo skirta pradedantiesiems, kad jie suprastų pagrindinę komutatyvumo ir nekomutatyvumo intuiciją.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U ir U R – skirtingos sekos, skirtingi rezultatai – pirma dalis" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U ir U R – skirtingos sekos, skirtingi rezultatai – antra dalis" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Papildymas: Standartiniai Rubiko kubo judesiai paprastai žymimi raidėmis. R reiškia dešiniojo sluoksnio pasukimą 90 laipsnių pagal laikrodžio rodyklę, U reiškia viršutiniojo sluoksnio pasukimą 90 laipsnių pagal laikrodžio rodyklę. R' yra pasukimas 90 laipsnių prieš laikrodžio rodyklę. Viduriniojo sluoksnio pasukimas aukštyn yra M', o žemyn – M.)

Apie tai, kaip sukasi Rubiko kubas, galite stebėti ir mokytis priede esančioje internetinėje Rubiko kubo animacijoje.

## Teorija: esmė norint sudėlioti be formulių – Komutatorius (Commutator)

Kad sudėliotume Rubiko kubą, turime pasiekti tokią būseną: **pakeisti tam tikrų elementų pozicijas, nejudinant kitų**.

Matematikoje ši operacija vadinama komutatoriumi ir užrašoma kaip **A B A⁻¹ B⁻¹**.

A⁻¹ yra atvirkštinė operacija A.

Galime pasinaudoti labai paprastu, iš kasdienio gyvenimo paimtu palyginimu – liftu. Tarkime, norite nuvežti žmogų iš pirmo aukšto į trečią:

1. **A**: Žmogus įeina į liftą
2. **B**: Liftas pakyla į trečią aukštą
3. **A⁻¹**: Žmogus išeina iš lifto
4. **B⁻¹**: Liftas grįžta į pirmą aukštą

Rezultatas: liftas grįžo į pradinę padėtį, bet žmogus persikėlė iš pirmo aukšto į trečią. Svarbiausia: kai liftas grįžo, žmogaus jame jau nebuvo – taigi aplinka atkurta, bet objektas pakeitė vietą.

Pavyzdžiui, Rubiko kube R ir R⁻¹ atitinka dešiniojo sluoksnio pasukimą 90 laipsnių pagal laikrodžio rodyklę, o trečiame žingsnyje – 90 laipsnių prieš laikrodžio rodyklę.

Ši atvirkštinė operacija A⁻¹ B⁻¹ gali atkurti aplinką, kuri buvo sujaukta atlikus A B operacijas. Taip pasiekiama, kad būtų keičiami tik tam tikri elementai, nepaveikiant aplinkos.

Kodėl ne A A⁻¹ B B⁻¹? Tokiu atveju kiekvienas veiksmas tiesiogiai atsvertų vienas kitą, ir elementai negalėtų būti sukeisti. Ką tik atlikus operaciją A, o po to iškart atvirkštinę operaciją A⁻¹, iš viso tai prilygtų nieko nedarymui (pvz., viršutinio sluoksnio pasukimas 90 laipsnių prieš laikrodžio rodyklę, o po to iškart 90 laipsnių pagal laikrodžio rodyklę). Todėl turi būti **A B A⁻¹ B⁻¹**, kad įvyktų apsikeitimas.

Tai yra pats pagrindinis apsikeitimas, o patogiausias elementarus judesys Rubiko kube atitinka: **R U R' U'**.

![R U R' U' demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Jis gali būti kombinuojamas į ilgas sekas ir pasiekti skirtingus permutacijos efektus, pavyzdžiui, tokią: (R U R' U') (R U R' U') (R U R').

Iš esmės tai ir yra formulių kilmė. Kodėl egzistuoja formulės? Jos tiesiog sujungia pagrindines permutacijos operacijas į sekas. Vykdant sekas, galima greitai pasiekti konkrečius rezultatus, pavyzdžiui, sudėlioti tam tikrą kraštinį elementą, sudėlioti tam tikrą kampinį elementą. Įvairias sekas galima derinti, vedant prie galutinio Rubiko kubo sudėliojimo.

Supratę principus, galime netgi susikurti savo formules. (Kaip patiems sukurti Rubiko kubo formules, bus išsamiai paaiškinta kitame straipsnyje.)

Taigi, norėdami sudėlioti Rubiko kubą neįsimenant nė vienos formulės, tereikia perprasti pagrindinės permutacijos idėją. Kitais atvejais galėsite taikyti tą patį principą. Elementariausias permutacijos veiksmas sukeis trijų kampinių elementų arba trijų kraštinių elementų pozicijas.

## Kaip atlikti apsikeitimą Rubiko kube

Kaip minėta anksčiau, patogiausias elementarus apsikeitimo judesys Rubiko kube atitinka: **R U R' U'**. Jei giliai suprasite šį judesį, iškart galėsite sudėlioti pirmuosius du Rubiko kubo sluoksnius.

Šis judesys iš esmės reiškia: patraukti (dešinįjį sluoksnį), įdėti (tikslo elementą), grąžinti (dešinįjį sluoksnį), grąžinti (viršutinį sluoksnį).

Taip mes įdėjome kairįjį priekinį kampinį elementą ir vidurinį kraštinį elementą į dešinįjį apatinį kampą.

Šis judesys gali nuolat keistis, virsti **U R U' R'**, arba **F R F' R'**, ir taip toliau bet kurioje pozicijoje, netgi viduriniuoju sluoksniu **M U M' U'**, arba **U2 R U2 R'**.

![Pagrindinio permutacijos judesio demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Pradiniame etape Rubiko kubas yra labiausiai sujauktas, todėl galime naudoti daugybę tokių pagrindinių permutacijų, kad pirmiausia sudėliotume vieną pusę ar kitą dalį, taip sumažindami sujauktumo lygį.

Be to, kadangi būsena yra labai sujaukta, paskutinis aplinką atkuriantis judesys U' netgi gali būti praleistas, atsižvelgiant į situaciją, tiesiogiai pereinant prie kito judesio. Taip supaprastinama iki: patraukti, įdėti, grąžinti.

Patraukti, įdėti, grąžinti.

Tai yra pagrindinis veiksmas, sveikiname, jūs jau supratote, kaip dėlioti Rubiko kubą!

Tačiau vėlesniuose etapuose mums prireiks ilgesnių permutacijos žingsnių, kad visiškai nesugadintume jau sudėliotos būsenos ir galėtume sukeisti konkrečius elementus.

Pavyzdžiui, **R U' L' U R' U' L U**. Šis judesys leidžia sukeisti tik tris kampinius elementus, nepaveikiant kitų. Išskaidykime jį į komutatoriaus logiką:

```
A   = R U'   (išsiųsti kampinį elementą)
B   = L'     (pajudinti kairįjį sluoksnį)
A⁻¹ = U R'   (atkurti A operaciją)
B⁻¹ = U' L U (atkurti B operaciją, su korekcija)
```

Efektas: kairiojo apatinio kampinio elemento pozicija lieka nepakitusi, o kiti trys kampiniai elementai sukeičiami.

Tai turbūt vienintelės dvi formulės, kurias jums reikės suprasti šiame straipsnyje. Praktinėje dalyje išmoksime, kaip jas naudoti, ir suprasime jas per praktiką, o ne mechaniškai įsiminsime.

## Praktinė dalis: Sudėliojimas nuo nulio

Galiausiai priėjome prie svarbiausios šio straipsnio dalies. Aš jus lydėsiu žingsnis po žingsnio, kad, pasikliaudami vien tik stebėjimu ir supratimu, galėtumėte sudėlioti visą Rubiko kubą nuo nulio.

Reikalingas pasiruošimas:

- Rubiko kubas
- Ir truputis kantrybės (nes mes daugiausia siekiame stebėjimo ir supratimo)

Pirmiausia, tarkime, kad jau turite Rubiko kubą. Sumaišykime jį pagal tarptautinį standartą (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**). Dabar aš kartu su jumis sudėliosiu šį Rubiko kubą.

Arba galite iškart žaisti internetinėje versijoje. Paspaudę šią nuorodą, pamatysite jau sumaišytą Rubiko kubą: [3D Rubiko kubas — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Sujaukto Rubiko kubo pradinė būsena](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Galime pasinaudoti itin elegantišku Roux tilto sprendimo metodu. Vadinamasis tilto sprendimo metodas, skirtingai nei dėliojimas sluoksnis po sluoksnio, pirmiausia sudėlioja kairįjį ir dešinįjį 1×2×3 blokus, vadinamus kairiuoju ir dešiniuoju tiltais, o po to – viršutinį sluoksnį ir likusius elementus.

Tilto sprendimo metodas yra labai laisvas ir lankstus, be to, žingsnių skaičius yra mažesnis nei daugelio žinomų sprendimo metodų, o įsiminti reikia santykinai mažai formulių, nes iš esmės tai yra komutatoriaus logika. Šiame kontekste išmoksime, kaip sudėlioti Rubiko kubą, neįsimenant nė vienos formulės.

![Roux metodo eigos diagrama](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Pirmas žingsnis: Fiksuota stebėjimo pozicija

Tilto sprendimo metodo stebėjimo pozicija yra fiksuota. Dėliojimo metu mums nereikia dažnai sukinėti kubo, bet išlaikyti tą patį kampą mąstymui ir dėliojimui. Išlaikydami šį fiksuotą paviršių, galime labai lengvai matyti tam tikrus kampinius ir kraštinius elementus bei žinoti, kur jie turėtų keliauti.

Šį kampą laikysime atskaitos tašku:

- Priekis (jums): žalia pusė
- Kairė: raudona
- Dešinė: oranžinė
- Viršus: geltona
- Apačia: balta
- Nugara: mėlyna

### Antras žingsnis: Kairiojo ir dešiniojo tiltų konstravimas

**Kairiojo tilto konstravimo seka:**

1. Pirmiausia grąžinkite baltą-raudoną kraštinį elementą į vietą (kairiojo apatinio stulpo dalis).
2. Tada grąžinkite galinį mėlyną-raudoną kraštinį elementą į vietą.
3. Ir tada grąžinkite du priekinius raudonus kampinius elementus į vietą.

Kairiojo tilto užbaigimo būsenos schema:

![Kairiojo tilto užbaigimo būsena](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Šiam procesui nereikia jokių formulių, pakanka stebėjimo ir supratimo. Daugiau praktikuojantis, tapsite vis labiau įgudę.

**F' L**: Naudodami stebėjimo metodą, suraskite raudoną-baltą kraštinį elementą, grąžinkite jį į vietą, balta puse į apačią, raudona – į kairę.

![Baltos-raudonos briaunos elemento grąžinimo į vietą demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Grąžinkite mėlyną-raudoną kraštinį elementą ir kampinius elementus į vietą.

![Mėlynos-raudonos briaunos elemento ir kampinių elementų grąžinimas į vietą](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Suraskite paskutinius du kairiojo tilto elementus, suraskite būdą, kaip juos grąžinti į vietą, ir taip gausime tobulą kairįjį tiltą.

![Paskutinių dviejų kairiojo tilto elementų grąžinimas į vietą](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Dešiniajam tiltui galioja tas pats principas**: pakeiskite raudoną spalvą oranžine ir pakartokite aukščiau nurodytus veiksmus. Tačiau čia svarbu būti atidiems ir nesujaukti jau sudėlioto kairiojo tilto. Jei reikia pasinaudoti kitos vietos elementais, pirmiausia galite perkelti kairįjį tiltą į šoną, kad dešiniosios pusės operacijos nepaveiktų kairiojo tilto, o baigus dešinės pusės judesius, grąžinkite kairįjį tiltą į vietą.

**Dešiniojo tilto vidurys**: U' M U' R2

![Dešiniojo tilto vidurinės briaunos elemento grąžinimas į vietą](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Dešiniojo tilto pirmasis elementas**: U' M' U2 R' U R

![Dešiniojo tilto pirmojo elemento grąžinimas į vietą](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Sudėjome paskutinį dešiniojo tilto modulį ir norime jį įdėti į vietą, todėl pirmiausia patraukiame kairįjį tiltą (F'), atlaisviname vietos, tada perkeliame modulį (U), ir galiausiai kairysis bei dešinysis tiltai grįžta į savo vietas vienu metu.

![Paskutiniojo dešiniojo tilto elemento įdėjimas](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Tai yra būsena, kai abu tiltai yra baigti. Svarbu, kad tiltai būtų suformuoti, o kitais spalvotais elementais kol kas nereikia rūpintis.

![Kairiojo ir dešiniojo tiltų užbaigimo būsena](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Trečias žingsnis: Viršutinio sluoksnio kampinių elementų sudėliojimas

Kai sudėliojote kairįjį ir dešinįjį tiltus, toliau sudėsime likusius keturis kampinius elementus. Čia mums prireiks kampinių elementų trijų ciklų permutacijos, leidžiančios trims kampams apsikeisti vietomis: iš A į B, iš B į C, ir C atgal į A.

![Kampinių elementų trijų ciklų permutacijos schema: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Kampinių elementų trijų ciklų permutacija

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formulė 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Kairiojo apatinio kampinio elemento pozicija lieka nepakitusi</li>
      <li>Kiti trys kampiniai elementai **prieš laikrodžio rodyklę** sukeičiami vietomis</li>
      <li>Tačiau jų vidinės spalvos pasisuka **pagal laikrodžio rodyklę**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formulė 2 (veidrodinė versija)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Dešiniojo apatinio kampinio elemento pozicija lieka nepakitusi</li>
      <li>Kiti trys kampiniai elementai **pagal laikrodžio rodyklę** sukeičiami vietomis</li>
      <li>Tačiau jų vidinės spalvos pasisuka **prieš laikrodžio rodyklę**</li>
    </ul>
  </div>
</div>

![Kampinių elementų trijų ciklų permutacijos veidrodinės versijos demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Galite susidurti tik su keturiomis kampinių elementų orientacijos situacijomis: 0, 1, 2, 4 teisingai orientuoti kampai.

- **4 teisingai orientuoti kampai**: užbaigta būsena
- **1 teisingai orientuotas kampas** (žuvytės forma): dar kartą atlikite trijų ciklų permutaciją arba veidrodinę versiją ir bus baigta.
- **0 / 2 teisingai orientuoti kampai**: pirmiausia padėkite neteisingai orientuotą kampinį elementą į poziciją, kurios nepaveiks trijų ciklų permutacija (kairysis apatinis kampas), atlikite vieną trijų ciklų permutaciją, ir gausite vieną teisingai orientuotą kampą, grįždami prie ankstesnės situacijos.

Kartais pagrindinę trijų ciklų permutacijos versiją reikia atlikti du kartus, kad būtų sudėliota, o veidrodinę trijų ciklų permutacijos versiją pakanka atlikti vieną kartą, kad būtų visiškai sudėliota. Naujokams pakanka įsisavinti pagrindinę versiją, sutelkiant dėmesį į stebėjimą ir supratimą, o tada viską sujungti į visumą. Ši trijų ciklų permutacija su geltona puse į viršų taip pat yra gerai žinoma klasikinė formulė – kairės ir dešinės žuvytės formulė. Galite perprasti žuvytės formą.

Šios formulės taip pat nereikia įsiminti. Stebėkite, kaip juda du žali elementai, ir atlikite tai keletą kartų patys, kad įprastumėte. Esmė – sukeisti tris viršutinio sluoksnio kampinius elementus.

Mūsų ką tik sudėliotame kairįjį ir dešinįjį tiltus Rubiko kube, pastebime, kad viršuje yra du geltoni. Todėl kairįjį apatinį kampą pakeičiame į ne geltoną ir atliekame vieną kampinių elementų trijų ciklų permutacijos operaciją. Tada dar du kartus atlikite trijų ciklų permutaciją, arba vieną kartą veidrodinę trijų ciklų permutaciją, ir viršutiniai keturi kampai bus geltona puse į viršų.

![Kampinių elementų trijų ciklų permutacijos proceso demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Keturi geltoni kampai sudėlioti!

![Keturių geltonų kampų užbaigimo būsena](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Pozicijos koregavimas (kad šoninės spalvos sutaptų)

Kai visi keturi kampiniai elementai yra geltona puse į viršų, reikia, kad ir šoninės kampinių elementų spalvos sutaptų, kad kampiniai elementai visiškai atsidurtų savo vietose.

Šiuo atveju naudokite **J-perm variantą**: **R U2 R' U' R U2 L' U R' U' L**

Šios formulės logika gali būti suskaidyta į "poros perkėlimas + loginis sukeitimas":

- Pirmoji dalis `R U2 R' U' R`: perkelia porą į saugią zoną laikinam saugojimui, atlaisvindama vietos.
- Antroji dalis `U2 L' U R' U' L`: naudojant trijų ciklų permutacijos logiką, tiksliai sukeičia du kampinius elementus.

**Efektas**: du dešinės pusės kampiniai elementai sukeičiami vietomis, išlaikant geltoną pusę į viršų, kiti kampiniai elementai lieka nepakitę.

Tai prilygsta galimybei sukeisti bet kurių dviejų gretimų kampinių elementų pozicijas (naudojant U, kad pasirinktumėte, kurie du kampiniai elementai bus dešinėje). Pakartotinai atliekant sukeitimą kelis kartus, keturi kampiniai elementai bus visiškai sulygiuoti ir grąžinti į vietas.

![J-perm demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Šios formulės taip pat nereikia įsiminti. Stebėkite, kaip juda du žali elementai, ir atlikite tai keletą kartų patys, kad įprastumėte. Esmė – išlaikant geltoną pusę į viršų, sukeisti du viršutinio sluoksnio dešinės pusės kampinius elementus.

### Ketvirtas žingsnis: Paskutinių šešių kraštinių elementų sudėliojimas (LSE, Last Six Edges)

Čia pirmiausia sulygiuokite centrinius elementus taip, kad geltona būtų viršuje, balta – apačioje, o tada pakoreguokite kraštinius elementus.

Liko tik 6 kraštiniai elementai. Šiam žingsniui naudojamos tik dvi operacijos – **M** ir **U**, ir jis yra labai intuityvus.

#### 4a: Orientacijos koregavimas (EO, Edge Orientation)

**Nustatymo metodas**: pažiūrėkite, ar kraštinio elemento baltas/geltonas lipdukas yra nukreiptas aukštyn ar žemyn.

- Aukštyn / žemyn = Gera briauna ✓
- Į šoną = Bloga briauna ✗

**Koregavimo metodas**: Apverskite neteisingai orientuotą kraštinį elementą naudodami **M U M'** arba **M' U M**.

![M U M' neteisingai orientuoto kraštinio elemento apvertimo demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuityvus supratimas: M pakelia vidurinio sluoksnio kraštinį elementą, U koreguoja poziciją, M' grąžina jį atgal.

Pakartokite kelis kartus, kol visų kraštinių elementų balta/geltona spalva bus nukreipta aukštyn arba žemyn.

Teisingai orientuotus kraštinius elementus vadinsime gerais kraštais, o neteisingai orientuotus – blogais kraštais.

Kaip parodyta paveikslėlyje, trys pabrėžti viršutinio sluoksnio kraštiniai elementai yra neteisingai orientuoti, nes jie nėra nei geltoni, nei balti.

![Neteisingai orientuotų kraštinių elementų išryškinimo schema](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Koregavimo patarimai**: Galite susidurti tik su keturiomis neteisingai orientuotų kraštinių elementų situacijomis:

- **0 blogų kraštų**: užbaigta būsena
- **Ne 0 ir ne 4 blogi kraštai**: pakeiskite blogų kraštų skaičių naudodami **M' U M**, padidindami jį iki 4 blogų kraštų.
- **4 blogi kraštai (po 2 viršuje ir apačioje)**: sukeiskite viršutinius ir apatinius kraštinius elementus naudodami **M' U2 M**, kad gautumėte situaciją "3 viršuje, 1 apačioje".
- **4 blogi kraštai (3 viršuje, 1 apačioje)**: trys viršutinio sluoksnio neteisingai orientuoti kraštiniai elementai sudarys rodyklę. Pasukite viršutinį sluoksnį taip, kad rodyklė rodytų į neteisingai orientuotą kraštinį elementą apačioje, atlikite **M' U M** vieną kartą, ir visi keturi neteisingai orientuoti kraštiniai elementai bus neutralizuoti, tapdami teisingai orientuotais.

![Keturių neteisingai orientuotų kraštinių elementų rodyklės pašalinimo demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Jei rodyklė neatsiranda, nuolat bandykite **M' U M**, ir galiausiai ją sudėliosite. Pajudėję toliau, galėsite lėtai rasti dėsningumus.

#### 4b: Kairiųjų ir dešiniųjų kraštinių elementų sudėliojimas (raudona ir oranžinė)

Suraskite raudoną-geltoną ir oranžinę-geltoną kraštinius elementus (tikslas – grąžinti juos į kairę ir dešinę puses) ir trijų ciklų permutacijos būdu perkelkite juos į teisingas pozicijas.

**Patarimai**:

1. Perkelkite raudoną-geltoną (arba oranžinę-geltoną) kraštinį elementą virš viduriniojo sluoksnio ir nuleiskite jį į apačią, sukeisdami viršutinius ir apatinius kraštinius elementus (**M' U2 M**).
2. Leiskite kitam oranžiniam-geltonam (arba raudonam-geltonam) kraštiniam elementui nusileisti į apačią priešingoje pusėje.
3. Pasukite viršutinį sluoksnį taip, kad raudona briauna atsirastų priešingoje pusėje nuo apačioje esančio raudono-geltono kraštinio elemento.
4. Vidurinį sluoksnį pasukite pusę apsukimo **M2**, viršutinį sluoksnį stebėkite ir grąžinkite į vietą **U**.

![Kairiųjų ir dešiniųjų kraštinių elementų grąžinimo į vietą demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Paskutinių keturių kraštinių elementų sudėliojimas (mėlyna ir žalia)

**Patarimai**:

- Nuolat naudokite **kraštinių elementų trijų ciklų permutaciją**, keisdami viršutinius ir apatinius kraštinius elementus: **M' U2 M**, o paskutinis žingsnis – **U2**, grąžinant į vietą stebėjimu.
- Greitas patarimas: padėkite baltą-žalią (arba baltą-mėlyną) kraštinį elementą virš tikslinės pozicijos, sukeiskite viršutinius ir apatinius kraštinius elementus, ir baltas-žalias (baltas-mėlynas) elementas atsidurs savo vietoje.

Yra tik trys situacijos:

- Jau teisingai → Atlikta!
- Reikia M2 → Atlikite **M2** vieną kartą
- Reikia sukeisti → **M' U2 M U2** arba **M U2 M' U2**

Taip pat galime supaprastinti trijų briaunų apsikeitimo logiką: M' reiškia viduriniojo sluoksnio pakėlimą, U2 – viršutiniojo sluoksnio pasukimą puse apsukimo, M – viduriniojo sluoksnio atstatymą, U2 – viršutiniojo sluoksnio atstatymą.

![Trijų briaunų apsikeitimo demonstracija](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Atlikta!

![Sudėliotas Rubiko kubas](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Santrauka

Nereikia mechaniškai įsiminti formulių, pakanka „atidaryti – atlikti operaciją – uždaryti“ komutatoriaus logikos. Pamatysite, kad šis procesas yra daug įdomesnis nei formulių įsiminimas, be to, nereikės jaudintis, kad pamiršite po daugelio metų – bet kada galėsite tai išvesti patys.

Tas pats principas tinka bet kuriam Rubiko kubui, įskaitant įvairius keistų formų kubus.

Tačiau jei norite eiti greitojo dėliojimo (speedsolving) keliu, tuomet laukia begalinis sunkaus darbo kelias. Vis dėlto, pradedantiesiems, šiek tiek pasipraktikavus, pasiekti rezultatą iki 90 sekundžių neturėtų būti problemų.

Sprendimo metodų yra tūkstančiai, svarbu, ar rasite elegantiškesnį ar patogesnį būdą.

Rubiko kubo pasaulio malonumai yra begaliniai. Linkiu smagiai praleisti laiką.

## Priedas 1: Šio straipsnio Rubiko kubo sprendimo atmintinė (Rubiko kubo dėliojimo mantra)

1.  **Sudėliokite kairįjį ir dešinįjį tiltus: pasikliaukite stebėjimu ir intuicija**
    -   Patarimai: Kai įgusite stebėti ir prognozuoti, galėsite, atsižvelgiant į konkrečią kubo būseną, teikti pirmenybę kitų modulių konstravimui arba vienu metu statyti kairįjį ir dešinįjį tiltus. Taip pasieksite mažiau žingsnių ir didesnę laisvę.
2.  **Atkurkite keturių viršutinio sluoksnio kampinių elementų orientaciją: visi keturi geltoni elementai į viršų**
    -   Viršutinio sluoksnio kampinių elementų trijų ciklų permutacija: **R U' L' U R' U' L U** (kairiojo apatinio kampinio elemento pozicija lieka nepakitusi, o kitų trijų kampinių elementų vidinės spalvos pasisuka pagal laikrodžio rodyklę)
    -   Viršutinio sluoksnio kampinių elementų trijų ciklų permutacijos veidrodinė versija: **L' U R U' L U R' U'** (dešiniojo apatinio kampinio elemento pozicija lieka nepakitusi, o kitų trijų kampinių elementų vidinės spalvos pasisuka prieš laikrodžio rodyklę)
3.  **Atkurkite keturių viršutinio sluoksnio kampinių elementų šonines puses**
    -   **Viršutinio sluoksnio kampinių elementų padėties koregavimas**: **R U2 R' U' R U2 L' U R' U' L** (išlaikant visus keturis kampinius elementus geltona puse į viršų, sukeiskite du dešinės pusės kampinius elementus)
4.  **Pakeiskite kraštinių elementų orientaciją, kad balta arba geltona būtų viršuje arba apačioje**
    -   Pirmiausia sulygiuokite centrinius elementus taip, kad geltona būtų viršuje, balta – apačioje, o tada pakoreguokite kraštinius elementus.
    -   Pakeiskite neteisingai orientuotų kraštų skaičių naudodami **M' U M**, suformuokite rodyklę, nukreipkite rodyklę į neteisingai orientuotą kraštą, atlikite **M' U M** vieną kartą, ir visi keturi neteisingai orientuoti kraštai bus neutralizuoti ir grąžinti į vietą.
5.  **Atkurkite kairės ir dešinės pusių kraštinius elementus (raudona ir oranžinė)**
    -   Pirmiausia, naudodami viršutinių ir apatinių kraštinių elementų sukeitimą, nuleiskite raudoną-geltoną (arba oranžinę-geltoną) kraštinį elementą į apačią (**M' U2 M**).
6.  **Atkurkite likusius kraštinius elementus (mėlyna ir žalia)**
    -   Nuolat naudokite **kraštinių elementų trijų ciklų permutaciją**, keisdami viršutinius ir apatinius kraštinius elementus: **M' U2 M**, o paskutinis žingsnis – **U2**, grąžinant į vietą stebėjimu.

Nereikia įsiminti nė vienos iš šių formulių, jos čia tik tam, kad lengviau rastumėte. Iš tiesų, kai pabandysite patys, stebėdami ir suprasdami, kaip juda atitinkami kubeliai, po kelių kartų priprasite. Svarbiausia yra sukeisti tris viršutinio sluoksnio kampus.

## Priedas 2: Naudingos svetainės ir įrankiai

Taip pat sukūriau jums 3D Rubiko kubą, kuriuo galite žaisti internete. Galite jį laisvai sukinėti, taip pat sumaišyti ir sudėlioti pagal nustatytas formules. Kiekvienas žingsnis turi gražią animaciją!

[3D Rubiko kubas — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Internetinis 3D Rubiko kubo įrankis](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Šiame vadove naudojama ta pati sumaišymo formulė: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Šio vadovo kairės ir dešinės pusių tiltelių sudėliojimo žingsniai: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Paspaudę šią nuorodą, pamatysite jau sumaišytą Rubiko kubą: [3D Rubiko kubas — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Rubiko kubo laikmatis, kurį naudoja pasaulio čempionai: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
