---
layout: blog
title: Kuidas lahendada Rubiku kuubikut valemeid pähe õppimata: arusaadav ka algklassilapsele
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Kasutades rühmateooria kommutaatorite põhimõtteid ja Roux' silla meetodit, õpetan sind samm-sammult, kuidas lahendada 3x3 Rubiku kuubikut nullist peale, ilma ühtegi valemit pähe õppimata.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Täielikult lahendatud Rubiku kuubik" />
</figure>

Võib-olla oled sa Rubiku kuubiku värske huviline, kes pole seda kunagi täielikult lahendada suutnud.

Enamik turul leiduvaid õpetusi annavad sulle vaid hulga veidraid valemeid, öeldes, et tee nii ja siis naa, ja kuubik ongi lahendatud. Kuid pärast nende järgimist ei mõista sa ikkagi, miks see nii toimib.

See artikkel saab sinu päästjaks. Õpid nullist peale, kuidas lahendada Rubiku kuubikut ilma ühtegi valemit pähe õppimata. Saad teada kuubiku tekkeloost ja mõistad, kuidas see toimib. Juhatan sind samm-sammult läbi teooria ja praktika, et lahendada kuubik täielikult, õpetades sind seejuures ka märkama ja mõistma.

Võib-olla õnnestub sul esimest korda elus Rubiku kuubik täielikult lahendada just selle juhendi abil.

<!--more-->

## Rubiku kuubiku sünd

Miks on Rubiku kuubikul nii suur võlu? Alustame sellest, kuidas see üldse sündis.

Aastal 1974 valmistas Ungari arhitektuuriprofessor Ernő Rubik oma õpilastele demonstreerimaks, kuidas osad saaksid liikuda iseseisvalt, ilma et see tervikstruktuuri lõhuks, puidust esimese prototüübi. Ta värvis selle kuus külge erinevate toonidega ja nii sündiski Rubiku kuubik.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubiku kuubiku prototüüp" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubiku portree" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Kombinatsioonide hämmastav arv

3x3 Rubiku kuubikul on 8 nurgatükki, 12 servatükki ja 6 kesktükki, kokku 26 nähtavat tükki. Kuid tegelikult saavad liikuda vaid need 20 tükki, mis ei ole kuue külje kesktükid.

Kui palju on sellel siis kokku erinevaid seisundeid? Lausa **4.3 × 10¹⁹**.

Mida see number tähendab? See on suurem kui liivaterade arv Maal. Kui proovida läbi miljard seisundit sekundis, kuluks kõigi seisundite läbimiseks üle **1300 aasta**. Kui iga seisund kirjutada eraldi paberilehele ja need kokku laduda, oleks virna paksus võrdne Maa ja Päikese vahel 14 000 korda edasi-tagasi reisimisega.

Pisike 3x3 Rubiku kuubik on tõepoolest petlikult lihtne. Tänu oma uudsele ja põnevale mänguviisile, lugematutele variatsioonidele ja lõputule võlule vallutas see kohe pärast turule tulekut turgu, meelitades ligi igasuguseid entusiastlikke mängijaid. Peagi arenesid välja Rubiku kuubiku võistlused, kus pakuti mitmesuguseid mängustiile (kiire lahendamine – Speedsolving, pimesi lahendamine – Blindfolded, ühe käega – One-Handed, jalgadega – With Feet), erinevaid lahendusmeetodeid (kihthaaval – Layer by Layer, nurgad esmalt – Corners First, CFOP, Roux' silla meetod, Petrus, ZZ) ja isegi ebakorrapäraseid kuubikuid (2x2 kuni 7x7, püramiid – Pyraminx, Skewb, Megaminx), mis kerkisid esile lakkamatult.

![Ebakorrapäraste Rubiku kuubikute variandid](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Rubiku kuubiku võlu on niivõrd suur, et matemaatikud uurivad pidevalt sellega seotud matemaatikat, kulutades aastakümneid "Jumala arvu" otsimisele; astronaudid võtavad selle kosmosesse kaasa ja igas vanuses inimesed paistavad erinevatel võistlustel silma. Kuid võrreldes kuubiku veetlusega on mängijaid siiski suhteliselt vähe. Seepärast soovin selle artikli kaudu õpetada kõigile kuubiku lahendamist ja nautida selle nuputamismängu pakutavat rõõmu.

## Valemite dilemma

Enamik turul leiduvatest lahendusmeetoditest eeldab mängijatelt paljude valemite päheõppimist, mis heidutab algajaid tugevalt. Nad jäävad valemite taha kinni, veel enne kui jõuavad tunda kuubiku lahendamisest saadavat rõõmu. Tuntud CFOP-meetod sisaldab üle saja valemi, millest algajadki peavad kümneid pähe õppima.

Seepärast soovin täna jagada teiega meetodit, mis võimaldab Rubiku kuubikuga mõnuga mängida, ilma et peaks valemeid pähe tuupima. See aitab sul kuubiku lahendada pelgalt vaatluse ja mõistmise abil.

## Matemaatika trumpkaart: Rühmateooria (Group Theory)

Küsimus: Kuidas lahendada Rubiku kuubikut ilma ühtegi valemit pähe õppimata?

Siin tuleb meil appi võtta matemaatika trumpkaart: rühmateooria. Pole probleemi, mida matemaatikaga lahendada ei saaks.

Mis seos on siis Rubiku kuubikul ja rühmateoorial? Rubiku kuubik on tegelikult rühm. Iga kuubiku pööre on permutatsioonitehe. Sellel tehtel on mitu omadust: seda saab kombineerida, tagasi pöörata, kuid mitte vahetada.

Algkoolis õpitud korrutamine on kommutatiivne tehe – A × B ja B × A annavad täpselt sama tulemuse. Kuid Rubiku kuubiku rühmas pole A ja B pärast vahetamist samaväärsed; kõigepealt R ja siis U tegemine on täiesti erinev tehe kui kõigepealt U ja siis R. Seega, kui mõistame rühmi, mõistame ka Rubiku kuubikut. Ja Rubiku kuubikuga mängimine aitab meil omakorda rühmi mõista.

Õnnitleme, oled just õppinud ära Abeli rühma (korrutamine ja liitmine on mõlemad Abeli rühmad) ja mitte-Abeli rühma (Rubiku kuubiku rühm) erinevuse!

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U ja U R järjestus annab erineva tulemuse - esimene osa" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U ja U R järjestus annab erineva tulemuse - teine osa" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Lisaks: Rubiku kuubiku standardseid pöördeid tähistatakse tavaliselt tähtedega: R tähistab parempoolse kihi 90-kraadist päripäeva pööret, U tähistab ülemise kihi 90-kraadist päripäeva pööret, R' on 90-kraadine vastupäeva pööre, M' on keskmise kihi liigutamine üles ja M on keskmise kihi liigutamine alla.)

Saad otsekohe vaadelda ja õppida, kuidas Rubiku kuubik pöörleb, kasutades lisaosas olevat veebipõhist kuubiku animatsiooni.

## Põhimõtteline osa: Valemeid pähe õppimata lahendamise tuum: Kommutaator (Commutator)

Rubiku kuubiku lahendamiseks peame saavutama olukorra, kus **saame muuta teatud tükkide asukohta, ilma et see mõjutaks teisi tükke.**

Matemaatikas nimetatakse sellist tehet kommutaatoriks ja see kirjutatakse kujul **A B A⁻¹ B⁻¹**.

A⁻¹ on A pöördtehe.

Võime kasutada väga elulist võrdlust – lifti. Oletame, et tahad viia inimese 1. korruselt 3. korrusele:

1. **A**: Inimene astub lifti.
2. **B**: Lift sõidab 3. korrusele.
3. **A⁻¹**: Inimene väljub liftist.
4. **B⁻¹**: Lift naaseb 1. korrusele.

Tulemus: Lift on tagasi oma algasendis, kuid inimene on liikunud 1. korruselt 3. korrusele. Peamine on see, et kui lift tagasi tuli, polnud inimest enam sees – nii taastus keskkond, kuid sihtmärk muutis asukohta.

Näiteks Rubiku kuubikus vastab R parempoolse kihi 90-kraadisele päripäeva pöördele ja R⁻¹ vastupäeva pöördele, nii et kolmandas etapis tehakse pöördtehe.

See pöördtehe A⁻¹ B⁻¹ suudab taastada keskkonna, mis eelnevalt A B tehte tõttu segamini läks, saavutades nii eesmärgi vahetada vaid teatud tükke, ilma et see keskkonda mõjutaks.

Miks siis mitte A A⁻¹ B B⁻¹? Sest siis tühistaks iga tegevus eelneva ja tükke ei saaks vahetada. Kui teed just tehte A ja kohe sellele järgneb pöördtehe A⁻¹, on see kokkuvõttes sama, mis mitte midagi tegemine (nt ülemise kihi 90-kraadine vastupäeva pööre, millele järgneb kohe 90-kraadine päripäeva pööre). Seega peab vahetuse tekitamiseks olema **A B A⁻¹ B⁻¹**.

See on kõige elementaarsem vahetus, ja Rubiku kuubikus kõige käepärasem algtehe on: **R U R' U'**.

![R U R' U' demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Seda saab kombineerida pikkadeks jadadeks, et saavutada erinevaid permutatsiooniefekte, näiteks selline: (R U R' U') (R U R' U') (R U R').

Tegelikult on see ka valemite päritolu. Miks valemid üldse eksisteerivad? Need on lihtsalt jada kõige elementaarsematest permutatsioonitehetest, mis on kokku pandud järjestusteks. Järjestuste täitmine võimaldab kiiresti saavutada konkreetseid tulemusi, näiteks taastada teatud serva või nurgatüki. Erinevaid järjestusi saab kombineerida, mis juhatab meid lõpuks Rubiku kuubiku lahendamiseni.

Põhimõtteid mõistes saame luua isegi omaenda valemeid. (Kuidas luua oma Rubiku kuubiku valemeid, sellest räägime üksikasjalikumalt järgmises osas.)

Seega, et lahendada Rubiku kuubikut ilma ühtegi valemit pähe õppimata, piisab, kui õpime selgeks põhiliste permutatsioonide loogika ja saame seda seejärel igas olukorras analoogia põhjal rakendada. Kõige elementaarsemad permutatsioonitehted vahetavad kolme nurgatüki või kolme servatüki asukohta.

## Kuidas Rubiku kuubikus vahetusi teostada

Nagu eelnevalt mainitud, on Rubiku kuubikus kõige käepärasem algvahetustehe: **R U R' U'**. Kui mõistad seda tehet sügavuti, suudad koheselt lahendada kuubiku kaks esimest kihti.

See tehe tähendab tegelikult: eemalda (parempoolne kiht), sisesta (sihttükk), aseta tagasi (parempoolne kiht), aseta tagasi (ülemine kiht).

Nii oleme saavutanud vasak-eesmise nurgatüki ja keskmise servatüki sisestamise parem-alumisse nurka.

Seda tehet saab pidevalt varieerida, näiteks **U R U' R'** või **F R F' R'** ja nii edasi mis tahes positsiooni jaoks. On olemas isegi keskmise kihi liigutused, nagu **M U M' U'** või **U2 R U2 R'**.

![Põhilise vahetustehte demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Algstaadiumis on Rubiku kuubik kõige rohkem segamini, mistõttu saab kasutada hulgaliselt eelnevalt kirjeldatud põhilisi permutatsioone, et esmalt lahendada üks külg või muud kohalikud osad, vähendades nii segaduse taset.

Lisaks, kuna olukord on väga segane, saab tehte **R U R' U'** viimase, keskkonda taastava liigutuse U' isegi olenevalt olukorrast ära jätta ja kohe järgmise liigutusega jätkata. See lihtsustab tehet järgmiseks: eemalda, sisesta, aseta tagasi.

Eemalda, sisesta, aseta tagasi.

See ongi põhjategevus! Õnnitleme, oled juba aru saanud, kuidas Rubiku kuubikuga mängida!

Kuid hilisemates etappides on meil vaja pikemaid permutatsioonijadasid, et vahetada teatud klotse, ilma et see täielikult rikuks juba lahendatud seisundit.

Võtame näiteks **R U' L' U R' U' L U**. See tehe suudab vahetada ainult kolm nurgatükki, mõjutamata midagi muud. Jaotame selle kommutaatori loogikaks:

```
A   = R U'   （把角块送出去）
B   = L'     （左层动一下）
A⁻¹ = U R'   （复原 A 操作）
B⁻¹ = U' L U（复原 B 操作，带调整）
```

Tulemus: Vasak-alumise nurgatüki asukoht jääb muutumatuks, teised kolm nurgatükki vahetavad kohti.

See on tõenäoliselt üks kahest valemist, mida selles artiklis pead mõistma. Õpime selle kasutamist praktilises osas ja haarame sellest aru läbi tegevuse, mitte pelgalt tuupides.

## Praktiline osa: Nullist peale lahendamine

Nüüd oleme jõudnud selle artikli põhiosani. Juhatan sind samm-sammult, kuidas pelgalt vaatluse ja mõistmise abil Rubiku kuubik nullist peale täielikult lahendada.

Vajalikud ettevalmistused:

- Rubiku kuubik
- Ja natuke kannatlikkust (sest meie peamine eesmärk on vaatlus ja mõistmine).

Eeldame esmalt, et sul on juba Rubiku kuubik käepärast. Segame selle rahvusvahelise standardi järgi (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), seejärel lahendan ma selle Rubiku kuubiku koos sinuga.

Või saad mängida otse siin veebiversiooni. Sellel lingil klõpsates näed kohe segamini aetud Rubiku kuubikut: [3D Rubiku kuubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![Segamini aetud Rubiku kuubiku algseisund](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Lahendamiseks saame kasutada väga elegantset Roux' silla meetodit. Nn sillameetod erineb kihthaaval lahendamisest selle poolest, et esmalt lahendatakse vasak- ja parempoolsed 1x2x3 klotsid, mida rahvakeeli nimetatakse vasakuks ja paremaks sillaks, ning seejärel lahendatakse ülemine kiht ja ülejäänud osad.

Sillameetod on väga vaba ja paindlik ning nõuab vähem samme kui paljud tuntud lahendusviisid. Samuti on vaja meelde jätta suhteliselt vähe valemeid, sest see põhineb suuresti kommutaatori loogikal. Selles raamistikus saame õppida, kuidas lahendada Rubiku kuubikut ilma ühtegi valemit pähe õppimata.

![Roux' lahendusmeetodi protsessi diagramm](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Esimene samm: Fikseeri vaatlusasend

Sillameetodi vaatlusasend on fikseeritud. Lahendamise käigus ei pea me Rubiku kuubikut pidevalt pöörama, vaid hoiame sama nurka mõtlemiseks ja lahendamiseks. Selle fikseeritud külje abil saame väga hõlpsasti näha teatud nurga- ja servatükke ning teada, kuhu need peaksid minema.

Võime kasutada seda nurka lähtepunktina:

- Esikülg (sinu poole): Roheline külg
- Vasak külg: Punane
- Parem külg: Oranž
- Ülemine kiht: Kollane
- Alumine kiht: Valge
- Tagumine külg: Sinine

### Teine samm: Ehita vasak ja parem sild

**Vasaku silla ehitamise järjekord:**

1. Esmalt aseta valge-punane servatükk oma kohale (vasak-alumine tugisammas).
2. Seejärel aseta tagumine sinine-punane servatükk oma kohale.
3. Lõpuks aseta oma kohale kaks eesmist punast nurgatükki.

Vasaku silla valmis oleku skeem:

![Vasaku silla valmis olek](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

See protsess ei vaja ühtegi valemit, piisab vaatlusest ja mõistmisest. Rohke harjutamisega muutud järjest osavamaks.

**F' L**: Kasuta vaatlust, leia punane-valge servatükk ja aseta see oma kohale, valge allapoole ja punane vasakule.

![Valge-punase servatüki paigaldamise demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Aseta sinine-punane servatükk ja nurgatükid oma kohale.

![Sinise-punase servatüki ja nurgatükkide paigaldamine](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Leia vasaku silla kahe viimase klotsi asukohad, mõtle, kuidas need oma kohale asetada, ja nii saamegi täiusliku vasaku silla.

![Vasaku silla viimase kahe klotsi paigaldamine](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Parem silla puhul kehtib sama põhimõte**, asenda punane oranžiga ja korda eelnevaid samme. Siiski tuleb olla ettevaatlik, et mitte segamini ajada juba valmis ehitatud vasakut silda. Kui on vaja ruumi laenata, saad vasaku silla ajutiselt kõrvale liigutada, et parempoolsed toimingud seda ei mõjutaks, ja seejärel vasaku silla pärast parempoolsete liigutuste lõppu tagasi panna.

**Parem silla keskel**: U' M U' R2

![Parem silla keskmise servatüki paigaldamine](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Parem silla esimene tükk**: U' M' U2 R' U R

![Parem silla esimese tüki paigaldamine](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Oleme valmistanud parempoolse silla viimase mooduli ja soovime selle kohale asetada, seega liigutame esmalt vasaku silla kõrvale (F'), et ruumi teha, seejärel liigutame moodulit (U) ja lõpuks asuvad nii vasak kui ka parem sild üheaegselt oma kohale tagasi.

![Parem silla viimase tüki sisestamine](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

See on seisund, kus mõlemad sillad on valmis. Peaasi, et sillad oleksid moodustatud, teiste värviliste klotsidega hetkel tegelema ei pea.

![Mõlema silla valmis olek](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Kolmas samm: Taasta ülemise kihi nurgatükid

Pärast vasaku ja parema silla lahendamist hakkame nüüd lahendama ülejäänud nelja nurgatükki. Siin vajame nurgatükkide kolmiktsüklit, mis roteerib kolm nurka asendist A B-sse, B C-sse ja C tagasi A-sse.

![Nurgatükkide kolmiktsükli skeem: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Nurgatükkide kolmiktsükkel

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Valem 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Vasak-alumine nurgatükk jääb paigale</li>
      <li>Teised kolm nurgatükki vahetavad kohti **vastupäeva**</li>
      <li>Kuid nende sisemised värvid pöörlevad **päripäeva**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Valem 2 (peegelpiltversioon)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Parem-alumine nurgatükk jääb paigale</li>
      <li>Teised kolm nurgatükki vahetavad kohti **päripäeva**</li>
      <li>Kuid nende sisemised värvid pöörlevad **vastupäeva**</li>
    </ul>
  </div>
</div>

![Nurgatükkide kolmiktsükli peegelpiltversiooni demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Saad kohata vaid nelja tüüpi nurgatükkide orientatsiooni: 0, 1, 2 või 4 õiget nurka.

- **4 õiget nurka**: Valmis seisund
- **1 õige nurk** (kala kuju): Tee veel üks kolmiktsükkel või peegelpiltversioon ja see ongi valmis
- **0 / 2 õiget nurka**: Aseta esmalt üks vale nurk kolmiktsüklist mõjutamata kohta (vasak-alumisse nurka), tee üks kolmiktsükkel, ja sellest saab 1 õige nurk, naastes eelmisse olukorda.

Mõnikord tuleb kolmiktsükli põhiversiooni sooritamiseks kuubik lahendada kaks korda, samas kui peegelpiltversiooniga piisab vaid ühest korrast. Algajad peaksid esmalt omandama põhiversiooni, keskendudes vaatlusele ja mõistmisele, ning seejärel suudavad nad seda laiemalt rakendada. See kollase ülespoole suunatud kolmiktsükkel on tuntud klassikaline valem – vasaku ja parema kala valem; püüa mõista kala kuju.

Ka seda valemit ei pea pähe õppima. Vaatle, kuidas kaks rohelist klotsi liiguvad, ja proovi ise paar korda läbi teha – nii saad selle selgeks. Põhiline on vahetada ülemise kihi kolm nurgatükki.

Just vasaku ja parema silla lõpetanud Rubiku kuubikul leiame pealt kaks kollast tükki. Seega asendame vasak-alumise nurga mitte-kollasega ja teeme nurgatükkide kolmiktsükli. Seejärel, tehes veel kaks kolmiktsüklit või ühe peegelpiltversiooni kolmiktsükli, saame saavutada, et kõik neli ülemise kihi nurka on kollase poolega ülespoole.

![Nurgatükkide kolmiktsükli protsessi demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Neli kollast nurka valmis!

![Nelja kollase nurga valmis seisund](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Asukoha reguleerimine (küljevärvide joondamine)

Kui kõik neli nurgatükki on kollase poolega ülespoole, tuleb veel joondada nurgatükkide küljevärvid, et need saaksid täielikult oma kohale.

Nüüd kasuta **J-permutatsiooni varianti**: **R U2 R' U' R U2 L' U R' U' L**.

Selle valemi loogika saab jagada "paari transportimine + loogiline vahetus" osadeks:

- Esimene pool `R U2 R' U' R`: Viib paari turvalisse tsooni ajutiseks hoidmiseks, tehes ruumi vabaks.
- Teine pool `U2 L' U R' U' L`: Kasutab kolmiktsükli loogikat, et täpselt lõpule viia kahe nurgatüki vahetus.

Tulemus: Kaks parempoolset nurgatükki vahetavad asukohta, hoides samal ajal kollase ülespoole, teised nurgatükid jäävad muutumatuks.

See tähendab, et saab vahetada mis tahes kahe külgneva nurgatüki asukohti (kasutades U-d, et reguleerida, millised kaks nurgatükki on paremal). Paari vahetusega saavad kõik neli nurgatükki täielikult joondatud ja oma kohale.

![J-permutatsiooni demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ka seda valemit ei pea pähe õppima. Vaatle, kuidas kaks rohelist klotsi liiguvad, ja proovi ise paar korda läbi teha – nii saad selle selgeks. Põhiline on vahetada ülemise kihi kaks parempoolset nurgatükki, hoides samal ajal kollase poole ülespoole.

### Neljas samm: Taasta viimased kuus servatükki (LSE, Last Six Edges)

Siinkohal joonda esmalt kesktükid, nii et kollane on üleval ja valge all, seejärel reguleeri servatükke.

Jäänud on vaid 6 servatükki. See etapp kasutab ainult kahte tehet, **M** ja **U**, mis on väga intuitiivne.

#### 4a: Orientatsiooni reguleerimine (EO, Edge Orientation)

**Hindamismeetod**: Kontrolli, kas servatüki valge/kollane kleebis on suunatud üles- või allapoole.

- Üles / alla suunatud = Hea servatükk ✓
- Külgsuunas = Vale servatükk ✗

**Korrigeerimismeetod**: Kasuta **M U M'** või **M' U M** vales suunas olevate servatükkide pööramiseks.

![M U M' vales suunas oleva servatüki pööramise demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitiivne arusaam: M pöörab keskmise kihi servatüki üles, U reguleerib asukohta ja M' pöörab selle tagasi.

Korda seda mitu korda, kuni kõikide servatükkide valge/kollane külg on suunatud üles- või allapoole.

Õigesti orienteeritud servatükke võime nimetada "headeks" ja valesti orienteeritud servatükke "halbadeks".

Nagu pildil näha, on esile tõstetud ülemise kihi kolm servatükki valed, sest need pole ei kollased ega valged.

![Valede servatükkide esiletõstmise skeem](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Korrigeerimisnipid**: Sa kohtad vaid nelja tüüpi vale servatüki olukordi:

- **0 valet servatükki**: Valmis seisund
- **Ei 0 ega 4 valet servatükki**: Muuda valede servatükkide arvu neljaks, kasutades **M' U M**.
- **4 valet servatükki (2 üleval, 2 all)**: Vaheta ülemised ja alumised servatükid, kasutades **M' U2 M**, nii et tekib olukord, kus 3 on üleval ja 1 all.
- **4 valet servatükki (3 üleval, 1 all)**: Ülemise kihi kolm valet servatükki moodustavad noole. Pööra ülemist kihti nii, et nool osutab alumise kihi valele servatükile. Tee üks kord **M' U M**, ja kõik neli valet servatükki tühistuvad, muutudes kõik õigeteks.

![Nelja vale servatüki noole eemaldamise demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Kui noolt ei teki, proovi korduvalt **M' U M** – see õnnestub alati. Edasi jõudes saad mustreid aegamööda ise leida.

#### 4b: Taasta vasak- ja parempoolsed servatükid (punane ja oranž)

Leia punane-kollane ja oranž-kollane servatükk (eesmärk on need tagasi vasakule ja paremale küljele viia) ja aseta need õigesse kohta, kasutades servatükkide kolmiktsüklit.

**Nõuanded**:

1. Liiguta punane-kollane (või oranž-kollane) tükk keskmise kihi kohale ja lase see põhja, vahetades ülemisi ja alumisi servatükke (**M' U2 M**).
2. Lase teine oranž-kollane (või punane-kollane) tükk vastasküljel põhja.
3. Pööra ülemist kihti nii, et punane serv ilmuks vajunud punase-kollase servatüki vastaspoolele.
4. Pööra keskmist kihti pool pööret **M2**, ja vaatle ülemist kihti, et see oma kohale tagasi asetada **U**.

![Vasaku ja parema servatüki paigaldamise demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Lahenda viimased neli servatükki (sinine ja roheline)

**Nõuanded**:

- Kasuta pidevalt **servatükkide kolmiktsüklit**, et vahetada ülemisi ja alumisi servatükke: **M' U2 M**. Viimane samm on vaatluse abil oma kohale asetamine **U2**.
- Kiire nipp: Aseta valge-roheline (või valge-sinine) servatükk sihtkoha kohale, vaheta ülemisi ja alumisi servatükke ning valge-roheline (või valge-sinine) tükk ongi oma kohal.

On vaid kolm olukorda:

- On juba õige → Valmis!
- Vajab M2 → Tee üks kord **M2**.
- Vajab vahetust → **M' U2 M U2** või **M U2 M' U2**.

Saame ka kolmiktsükli loogikat lihtsustada: M' tähendab keskmise kihi ülestulekut, U2 ülemise kihi poolpööret, M keskmise kihi taastumist ja U2 ülemise kihi taastumist.

![Kolmiktsükli demonstratsioon](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Valmis!

![Lahendatud Rubiku kuubik](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Kokkuvõte

Pole vaja valemeid pähe tuupida, on vaid "uks lahti – tehe – uks kinni" kommutaatori loogika. Avastad, et see protsess on valemite õppimisest palju lõbusam ja sa ei pea kartma, et unustad selle aastate pärast – saad selle alati ise tuletada.

Sama mõtteviisiga saab lahendada mis tahes Rubiku kuubikut, sealhulgas igasuguseid veidraid ebakorrapäraseid kuubikuid.

Kuid kui soovid minna kiiruse teed, siis tuleb astuda lõputu harjutamise teele. Algajatele aga ei tohiks vähese harjutamisega alla 90 sekundi tulemuse saavutamine probleemiks olla.

Lahendusmeetodeid on tuhandeid, vaata, kas leiad endale elegantsema või käepärasema viisi.

Rubiku kuubikute maailm pakub lõputut rõõmu. Lõbusat mängimist!

## Lisa 1: Rubiku kuubiku lahendamise spikker (Rubiku kuubiku tarkus)

1. **Ehita vasak ja parem sild: tuginedes vaatlusele ja intuitsioonile**
   - Nõuanded: Kui oled vaatluses ja ettenägemises väga osav, võid kuubiku konkreetse seisundi põhjal eelistada teiste moodulite ehitamist või ehitada vasakut ja paremat silda samaaegselt. See võimaldab vähem samme ja on väga vaba.
2. **Taasta ülemise kihi nelja nurgatüki orientatsioon: kõik neli kollast poolt ülespoole**
   - Ülemise kihi nurgatükkide kolmiktsükkel: **R U' L' U R' U' L U** (vasak-alumine nurgatükk jääb paigale, teiste kolme nurgatüki sisemised värvid pöörlevad päripäeva)
   - Ülemise kihi nurgatükkide kolmiktsükli peegelpiltversioon: **L' U R U' L U R' U'** (parem-alumine nurgatükk jääb paigale, teiste kolme nurgatüki sisemised värvid pöörlevad vastupäeva)
3. **Taasta ülemise kihi nelja nurgatüki küljed**
   - **Ülemise kihi nurgatükkide asukoha peenreguleerimine**: **R U2 R' U' R U2 L' U R' U' L** (hoia neli nurgatükki kollase poolega ülespoole, vaheta parempoolse kahe nurgatüki asukohta)
4. **Muuda servatükkide orientatsiooni, nii et valge või kollane külg oleks üles- või allapoole**
   - Esmalt joonda kesktükid, nii et kollane on üleval ja valge all, seejärel reguleeri servatükke.
   - Muuda valede servatükkide arvu, tehes noole, mis osutab valele servatükile, kasutades **M' U M**. Tee üks kord **M' U M**, ja kõik neli valet servatükki tühistuvad ja asuvad oma kohale.
5. **Taasta vasak- ja parempoolsed servatükid** (punane ja oranž)
   - Esmalt lase punane-kollane (või oranž-kollane) tükk põhja, vahetades ülemisi ja alumisi servatükke (**M' U2 M**).
6. **Taasta ülejäänud servatükid** (sinine ja roheline)
   - Kasuta pidevalt **servatükkide kolmiktsüklit**, et vahetada ülemisi ja alumisi servatükke: **M' U2 M**. Viimane samm on vaatluse abil oma kohale asetamine **U2**.

Neid ülaltoodud valemeid pole vaja pähe tuupida – panin need siia liitesse lihtsalt mugavaks viitamiseks. Tegelikult, kui ise kätte võtad ja proovid, samal ajal jälgides ja mõistes, kuidas vastavad klotsid liiguvad, siis paari korraga on asi selge. Põhiline ongi ülemise kihi kolme nurgakloti vahetamine.

## Lisa 2: Kasulikud veebilehed ja tööriistad

Olen loonud teile ka veebipõhise 3D Rubiku kuubiku, millega saab mängida. Seda saab vabalt keerata, segada ja lahendada vastavalt etteantud valemitele ning iga sammuga kaasnevad kaunid animatsioonid!

[3D Rubiku kuubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Veebipõhine 3D Rubiku kuubiku tööriist](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Selles õpetuses kasutatud segamise valem: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Selle õpetuse vasak-parem sildade lahendamise sammud: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Sellel lingil klõpsates näed kohe segamini aetud Rubiku kuubikut: [3D Rubiku kuubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

Maailmameistrite kasutatav Rubiku kuubiku taimer: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
