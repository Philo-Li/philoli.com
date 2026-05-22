---
layout: blog
title: "Hoe je een Rubik's kubus oplost zonder formules: Begrijpelijk voor iedereen (zelfs voor basisschoolkinderen)"
date: 2026-05-09 12:00:00
tags:
  - Rubiks kubus
  - tutorial
  - groepentheorie
  - wiskunde
  - Roux-methode
categories: 日常折腾
description: Leer stap voor stap, van nul af aan, hoe je een 3x3 Rubik's kubus oplost zonder formules uit het hoofd te leren. We gebruiken de Roux-brugmethode en de logica van commutatoren uit de groepentheorie.
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Volledig opgeloste Rubik's kubus" />
</figure>

Misschien ben je een beginner met de Rubik's kubus en is het je nog nooit gelukt om hem helemaal op te lossen.

De zogenaamde tutorials die je online vindt, gooien je om de oren met een hoop vreemde formules. Ze zeggen dan: 'Doe dit, doe dat, en voilà, je kubus is opgelost!' Maar na afloop snap je nog steeds niet waarom.

Deze blogpost is jouw redder in nood. Je leert hier van nul af aan hoe je een Rubik's kubus oplost zonder ook maar één formule uit je hoofd te leren. We duiken in de oorsprong van de kubus en ontdekken hoe hij precies werkt. Van theorie tot praktijk, ik neem je stap voor stap mee om een complete kubus op te lossen en leer je de nodige observatietechnieken.

Misschien is dit wel de eerste keer dat het je écht lukt om een complete Rubik's kubus zelf op te lossen.

<!--more-->

## De geboorte van de Rubik's kubus

Waarom heeft de Rubik's kubus zo'n enorme aantrekkingskracht? Laten we beginnen met de oorsprong van dit fascinerende puzzelstukje.

In 1974 creëerde de Hongaarse architectuurprofessor Ernő Rubik het eerste prototype van de kubus. Zijn doel was om studenten te laten zien hoe afzonderlijke delen konden bewegen zonder de algehele structuur aan te tasten. Hij maakte de kubus van hout, schilderde de zes zijden in verschillende kleuren, en zo zag de Rubik's kubus het levenslicht.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubik's kubus prototype" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portret van Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Het verbazingwekkende aantal combinaties

Een 3x3 Rubik's kubus bestaat uit 8 hoekstukken, 12 randstukken en 6 middenstukken. In totaal zijn er 26 zichtbare blokjes. Maar de blokjes die daadwerkelijk kunnen bewegen, zijn de 20 stukken, exclusief de zes middenstukken van de vlakken.

Hoeveel mogelijke standen zijn er dan in totaal? Welgeteld **4.3 x 10¹⁹**!

Wat betekent dit precies? Dit aantal standen is zelfs groter dan het aantal zandkorrels op aarde. Als je elke seconde 1 miljard standen zou proberen, zou het meer dan **1300 jaar** duren om ze allemaal door te lopen. En als je elke mogelijke stand op een apart blaadje zou schrijven en die op elkaar zou stapelen, zou de stapel zo dik zijn als 14.000 keer heen en weer reizen van de aarde naar de zon.

De kleine 3x3 kubus is dus veel indrukwekkender dan hij lijkt! Door zijn innovatieve en leuke gameplay, met zijn talloze variaties en oneindige charme, explodeerde de markt bij de lancering. Spelers en liefhebbers van over de hele wereld stonden te popelen om het te proberen. Al snel ontwikkelden zich Rubik's kubus competities, met allerlei speelstijlen (Speedsolving, Blindfolded, One-Handed, With Feet), diverse oplosmethoden (Layer by Layer, Corners First, CFOP, Roux Bridge, Petrus, ZZ), en zelfs een stroom aan varianten van de kubus (van 2x2 tot 7x7, Pyraminx, Skewb, Megaminx).

![Varianten van de Rubik's kubus](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

De aantrekkingskracht van de kubus is zo groot dat wiskundigen decennialang de wiskunde erachter hebben bestudeerd, op zoek naar 'God's getal'. Astronauten namen hem mee de ruimte in, en mensen van alle leeftijden blinken uit in wedstrijden. Maar ondanks zijn enorme charme, zijn er naar mijn mening nog steeds te weinig mensen die de Rubik's kubus kunnen oplossen. Daarom hoop ik met dit artikel iedereen te leren hoe ze de kubus kunnen aanpakken en te laten genieten van het plezier dat dit slimme spel met zich meebrengt.

## De valkuil van formules

De meeste oplosmethoden op de markt vereisen dat spelers talloze formules uit hun hoofd leren. Dit is voor beginners vaak een enorme afknapper; ze worden belemmerd door formules nog voordat ze het plezier van het oplossen van de kubus hebben ervaren. De bekende CFOP-methode omvat meer dan 100 formules, en zelfs beginners moeten er tientallen onthouden.

Daarom wil ik vandaag een methode met jullie delen waarmee je met plezier de Rubik's kubus kunt oplossen zónder formules uit je hoofd te leren. Je zult de kubus kunnen herstellen door simpelweg te observeren en te begrijpen.

## De wiskundige 'killer': Groepentheorie

Vraag: Hoe los je een Rubik's kubus op zonder één enkele formule uit je hoofd te leren?

Hier trekken we onze wiskundige 'killer' uit de kast: de groepentheorie. Er is geen enkel probleem dat niet met wiskunde kan worden opgelost.

Wat heeft de Rubik's kubus dan met groepentheorie te maken? De kubus ís eigenlijk een groep. Elke draai aan de kubus is een permutatie-operatie. Deze operatie heeft een aantal kenmerken: je kunt ze combineren, je kunt ze omkeren, maar je kunt ze niet uitwisselen.

Vermenigvuldiging, iets wat we op de basisschool al leerden, is een commutatieve operatie: A × B en B × A leveren exact hetzelfde resultaat op. Maar in de groep van de Rubik's kubus zijn A en B na uitwisseling niet equivalent; eerst R en dan U is een totaal andere operatie dan eerst U en dan R. Dus als we groepen begrijpen, begrijpen we de Rubik's kubus. En het spelen met de kubus helpt ons op zijn beurt weer om groepen te begrijpen.

Gefeliciteerd! Je hebt nu het verschil geleerd tussen een abelse groep (vermenigvuldiging en optelling zijn abelse groepen) en een niet-abelse groep (de Rubik's kubus groep).

(Aanvulling: Een lezer merkte op dat de bovenstaande bewering niet erg rigoureus was, vandaar deze kleine aanvulling. De gehele getallen vormen onder optelling een Abelse groep, maar de natuurlijke getallen N vormen onder optelling géén Abelse groep, bijvoorbeeld omdat 3 geen inverse -3 heeft en -3 geen natuurlijk getal is. De niet-nul reële, rationale en complexe getallen vormen onder vermenigvuldiging een Abelse groep. De analogie in het oorspronkelijke artikel was voornamelijk bedoeld om beginners te helpen de kernintuïtie van "commutatief versus niet-commutatief" te vatten.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U en U R hebben verschillende effecten door verschillende volgorde - Deel één" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U en U R hebben verschillende effecten door verschillende volgorde - Deel twee" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Ter aanvulling: Standaard Rubik's kubusbewegingen worden meestal met letters aangeduid. R staat voor een draai van de rechterlaag 90 graden met de klok mee, U voor een draai van de bovenlaag 90 graden met de klok mee. R' betekent 90 graden tegen de klok in, M' is de middenlaag omhoog, en M is de middenlaag omlaag.)

Je kunt direct in de online Rubik's kubus animatie in de bijlage bekijken en leren hoe de kubus draait.

## Het principe: De kern van het oplossen zonder formules: Commutator

Om de Rubik's kubus op te lossen, moeten we de volgende staat bereiken: **de positie van bepaalde blokjes aanpassen zonder de positie van andere blokjes te veranderen.**

In de wiskunde wordt deze operatie een commutator genoemd, geschreven als **A B A⁻¹ B⁻¹**.

A⁻¹ is de inverse operatie van A.

We kunnen een heel alledaagse vergelijking gebruiken: de lift. Stel je voor dat je iemand van de 1e naar de 3e verdieping wilt brengen:

1.  **A**: De persoon stapt de lift in.
2.  **B**: De lift gaat naar de 3e verdieping.
3.  **A⁻¹**: De persoon stapt de lift uit.
4.  **B⁻¹**: De lift gaat terug naar de 1e verdieping.

Resultaat: De lift is terug op zijn oorspronkelijke plek, maar de persoon is van de 1e naar de 3e verdieping verplaatst. De sleutel hier is: toen de lift terugkwam, was de persoon er al uit – dus de omgeving is hersteld, maar het doelwit is van positie veranderd.

In de Rubik's kubus komt R bijvoorbeeld overeen met een draai van de rechterlaag 90 graden met de klok mee, en in de derde stap draait R⁻¹ deze laag weer 90 graden tegen de klok in.

De inverse operatie A⁻¹ B⁻¹ herstelt de omgeving die door de AB-operatie werd verstoord. Zo wordt bereikt dat alleen bepaalde specifieke blokjes worden uitgewisseld, zonder de rest van de kubus te beïnvloeden.

Waarom dan niet A A⁻¹ B B⁻¹? Dan zou elke beweging elkaar direct opheffen, en kunnen blokjes niet van plaats wisselen. Zodra je operatie A hebt uitgevoerd en direct daarna A⁻¹ als inverse operatie, heb je in feite niets gedaan (denk aan de bovenlaag 90 graden tegen de klok in draaien, en direct daarna weer 90 graden met de klok mee). Daarom moet het **A B A⁻¹ B⁻¹** zijn om een uitwisseling te creëren.

Dit is de meest fundamentele uitwisseling, en de meest handige 'atomaire' beweging in de Rubik's kubus is: **R U R' U'**

![R U R' U' demonstratie](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Deze kan worden gecombineerd tot langere sequenties en verschillende permutatie-effecten bereiken, zoals deze: (R U R' U') (R U R' U') (R U R').

Dit is eigenlijk de bron van alle formules. Waarom bestaan formules? Ze zijn simpelweg combinaties van de meest elementaire permutatie-operaties, samengevoegd tot sequenties. Door deze sequenties uit te voeren, bereik je snel specifieke resultaten, zoals het herstellen van een bepaalde rand of hoek. Verschillende sequenties kunnen worden gecombineerd om ons naar de uiteindelijke oplossing van de Rubik's kubus te leiden.

Als je het principe eenmaal begrijpt, kun je zelfs je eigen formules construeren. (Hoe je zelf Rubik's kubus formules creëert, wordt in een volgend deel uitgebreid behandeld.)

Dus om de Rubik's kubus op te lossen zonder één enkele formule uit je hoofd te leren, hoeven we alleen het idee van basispermutaties te begrijpen. Je kunt dit principe vervolgens in elke situatie toepassen. De meest 'atomaire' permutatiebeweging zal de posities van drie hoekblokjes of drie randblokjes uitwisselen.

## Hoe je uitwisselingen uitvoert op de Rubik's kubus

Zoals eerder genoemd, is de meest handige 'atomaire' uitwisselingsbeweging in de Rubik's kubus: **R U R' U'**. Als je deze beweging grondig begrijpt, kun je de eerste twee lagen van de kubus onmiddellijk oplossen.

Deze beweging betekent eigenlijk: verschuif (rechterlaag), plaats (het doelblokje) in, herstel (rechterlaag), herstel (bovenlaag).

Op deze manier hebben we het voorste linkerhoekblokje en het middelste randblokje in de rechteronderhoek geplaatst.

Deze beweging kan constant variëren, en worden **U R U' R'**, of **F R F' R'**, enzovoort, op elke gewenste positie. Er zijn zelfs varianten met de middenlaag, zoals **M U M' U'**, of **U2 R U2 R'**.

![Demonstratie van basisuitwisselingsbeweging](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

In de beginfase is de Rubik's kubus het meest verward. Daarom kun je veel van de bovengenoemde basispermutaties gebruiken om eerst één zijde of een ander deel te herstellen en zo de chaos te verminderen.

Bovendien, omdat de staat zo chaotisch is, kan de laatste beweging van **R U R' U'**, de U' die de omgeving herstelt, in sommige gevallen zelfs worden weggelaten en direct worden opgevolgd door de volgende beweging. Dit vereenvoudigt het tot: verschuiven, plaatsen, herstellen.

Verschuiven, plaatsen, herstellen.

Dit is de kernbeweging! Gefeliciteerd, je begrijpt nu hoe je de Rubik's kubus moet aanpakken!

Maar in een later stadium hebben we langere permutatiestappen nodig om specifieke blokjes uit te wisselen zonder de reeds herstelde staat volledig te verstoren.

Neem bijvoorbeeld **R U' L' U R' U' L U**. Deze beweging wisselt slechts drie hoekblokjes uit, zonder andere delen te beïnvloeden. Uitgesplitst volgens de commutatorlogica:

```
A   = R U'   (stuurt het hoekblokje weg)
B   = L'     (beweegt de linkerlaag)
A⁻¹ = U R'   (herstel operatie A)
B⁻¹ = U' L U(herstel operatie B, met aanpassing)
```

Effect: Het hoekblokje linksonder blijft op zijn plaats, de andere drie hoekblokjes wisselen van positie.

Dit zijn waarschijnlijk de enige twee 'formules' in dit artikel die je hoeft te begrijpen. In het praktijkgedeelte leren we hoe je ze gebruikt en krijg je er grip op tijdens het uitvoeren, zonder dat je ze uit je hoofd hoeft te leren.

## Praktijk: Van nul af aan de kubus oplossen

Dan komen we nu eindelijk bij het hoogtepunt van dit artikel! Ik neem je stap voor stap mee, en door simpelweg te observeren en te begrijpen, zul je de Rubik's kubus van nul af aan volledig kunnen oplossen.

Benodigdheden:

-   Een Rubik's kubus
-   En een beetje geduld (aangezien we ons vooral richten op observatie en begrip)

Laten we beginnen met de veronderstelling dat je al een Rubik's kubus bij de hand hebt. We zullen de kubus willekeurig door elkaar husselen volgens de internationale standaard (met de scramble **F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), en dan ga ik samen met jou de kubus oplossen.

Of je kunt direct de online versie hier spelen; als je deze link opent, zie je de scramblede kubus: [3D Rubik's kubus — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Initiële staat van de scramblede kubus](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

We kunnen de kubus oplossen met behulp van de elegante aanpak van de Roux-brugmethode. Deze methode verschilt van het laag-voor-laag oplossen: je herstelt eerst de 1x2x3 blokken aan de linker- en rechterkant, ook wel de 'linker- en rechterbrug' genoemd, en daarna de bovenste laag en de resterende posities.

De brugmethode is zeer vrij en flexibel, en vereist minder stappen dan veel bekende methoden. Bovendien hoef je relatief weinig formules uit je hoofd te leren, omdat het voornamelijk gebaseerd is op de logica van commutatoren. Binnen dit kader leren we hoe je de Rubik's kubus oplost zonder één enkele formule te memoriseren.

![Roux oplosmethode stroomdiagram](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Stap één: Fixeer je observatiepositie

De observatiepositie bij de brugmethode is vast. Tijdens het oplossen hoeven we de kubus niet voortdurend te draaien, maar behouden we dezelfde hoek om na te denken en te herstellen. Door dit vaste vlak aan te houden, kunnen we gemakkelijk hoek- en randstukken zien en weten waar ze naartoe moeten.

We kunnen deze hoek als referentie gebruiken:

-   Voorkant (naar jou gericht): Groen vlak
-   Linkerkant: Rood
-   Rechterkant: Oranje
-   Bovenkant: Geel
-   Onderkant: Wit
-   Achterkant: Blauw

### Stap twee: Bouw de linker- en rechterbrug

**Opbouwvolgorde linkerbrug:**

1.  Zorg eerst dat het wit-rode randstuk op zijn plek zit (de onderste pijler aan de linkerkant).
2.  Breng daarna het blauw-rode randstuk aan de achterkant op zijn plek.
3.  Plaats vervolgens de twee rode hoekblokjes aan de voorkant.

Schematische weergave van de voltooide linkerbrug:

![Voltooide linkerbrug](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Dit proces vereist geen formules; puur observatie en begrip volstaan. Met wat oefening word je er steeds handiger in.

**F' L**: Gebruik observatie om het rood-witte randstuk te vinden en op zijn plek te brengen, met wit naar beneden en rood naar links.

![Demonstratie van wit-rood randstuk op zijn plek brengen](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Breng het blauw-rode randstuk en de hoekblokjes op hun plek.

![Blauw-rood randstuk en hoekblokjes op hun plek brengen](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Vind de posities van de laatste twee blokjes van de linkerbrug en probeer ze op hun plek te krijgen. Zo creëren we een perfecte linkerbrug.

![De laatste twee blokjes van de linkerbrug op hun plek brengen](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

De **rechterbrug werkt op dezelfde manier**: vervang rood door oranje en herhaal de bovenstaande stappen. Let op: verstoor de reeds gemaakte linkerbrug niet. Als je ruimte nodig hebt, kun je de linkerbrug tijdelijk opzij schuiven, zodat de rechterhandelingen deze niet beïnvloeden. Herstel de linkerbrug zodra de rechterhandelingen zijn voltooid.

**Rechterbrug midden**: U' M U' R2

![Randstuk in het midden van de rechterbrug op zijn plek brengen](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Rechterbrug eerste blokje**: U' M' U2 R' U R

![Eerste blokje van de rechterbrug op zijn plek brengen](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

We hebben het laatste blokje van de rechterbrug klaar en willen het op zijn plek schuiven. Daarom schuiven we eerst de linkerbrug opzij (F') om ruimte te maken, verplaatsen we vervolgens het blokje (U), en plaatsen we ten slotte zowel de linker- als de rechterbrug tegelijkertijd terug.

![Laatste blokje van de rechterbrug invoegen](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Dit is de staat waarin beide bruggen zijn voltooid. Zolang de bruggen gevormd zijn, hoef je je voorlopig geen zorgen te maken over de andere kleurblokjes.

![Beide bruggen voltooid](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Stap drie: Herstel de hoekstukken van de bovenlaag

Nadat je de linker- en rechterbrug hebt hersteld, beginnen we met het herstellen van de resterende vier hoekstukken. Hierbij gebruiken we de hoekstukken-drie-cyclus, waarbij drie hoeken van positie wisselen: van A naar B, B naar C, en C terug naar A.

![Schematische weergave van hoekstukken-drie-cyclus: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Drie-cyclus van hoekstukken

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formule 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Linksonder hoekstuk blijft op zijn plaats</li>
      <li>De andere drie hoekstukken wisselen <strong>tegen de klok in</strong> van positie</li>
      <li>Maar hun interne kleuren draaien <strong>met de klok mee</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formule 2 (Spiegelbeeldversie)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Rechtsonder hoekstuk blijft op zijn plaats</li>
      <li>De andere drie hoekstukken wisselen <strong>met de klok mee</strong> van positie</li>
      <li>Maar hun interne kleuren draaien <strong>tegen de klok in</strong></li>
    </ul>
  </div>
</div>

![Drie-cyclus van hoekstukken spiegelbeeldversie demonstratie](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Je kunt slechts vier soorten oriëntaties van hoekblokjes tegenkomen: 0, 1, 2 of 4 'goede' hoeken.

-   **4 goede hoeken**: Voltooide staat
-   **1 goede hoek** ('vis' vorm): Voer nogmaals een drie-cyclus of de spiegelbeeldversie uit om te voltooien.
-   **0 / 2 goede hoeken**: Plaats eerst een 'verkeerde' hoek op een positie die niet wordt beïnvloed door de drie-cyclus (linksonder), voer één drie-cyclus uit, en het wordt 1 goede hoek, waardoor je terugkeert naar de vorige situatie.

Soms moet de basisversie van de drie-cyclus twee keer worden uitgevoerd om te herstellen, terwijl de spiegelbeeldversie slechts één keer nodig heeft voor een volledige herstelling. Als beginner hoef je alleen de basisversie onder de knie te krijgen, te focussen op observatie en begrip, en dan zul je alles doorgronden. Deze drie-cyclus met geel naar boven is ook een bekende klassieke formule – de 'linkse en rechtse vis' formule – waarbij je de 'visvorm' goed in de gaten kunt houden.

Ook deze formule hoef je niet uit je hoofd te leren. Observeer hoe de twee groene blokjes bewegen, voer het zelf een paar keer uit en je zult er snel vertrouwd mee raken. De kern is het uitwisselen van de drie hoekblokjes van de bovenlaag.

Nadat we de linker- en rechterbrug van de Rubik's kubus hebben voltooid, zien we twee gele vlakken aan de bovenkant. We plaatsen dan een hoekblokje dat niet geel is linksonder en voeren één hoekstukken-drie-cyclus uit. Daarna voeren we nog twee drie-cycli of één spiegelbeeldversie uit, om ervoor te zorgen dat alle vier de hoekblokjes van de bovenlaag met geel naar boven gericht zijn.

![Demonstratie van hoekstukken-drie-cyclus proces](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Vier gele hoeken voltooid!

![Vier gele hoeken voltooid](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Pas de positie aan (zorg dat de zijkleuren uitlijnen)

Wanneer de vier hoekblokjes allemaal met geel naar boven wijzen, moeten ook de zijkleuren van de hoekblokjes worden uitgelijnd, zodat de hoekblokjes volledig op hun plek vallen.

Gebruik hiervoor de **J-perm variant**: **R U2 R' U' R U2 L' U R' U' L**

De logica van deze formule kan worden opgesplitst in 'paartjes verplaatsen + logische uitwisseling':

-   Eerste deel `R U2 R' U' R`: Brengt een paar naar een veilige zone voor tijdelijke opslag, om ruimte te creëren.
-   Tweede deel `U2 L' U R' U' L`: Gebruikt de drie-cyclus logica om twee hoekblokjes nauwkeurig van positie te laten wisselen.

Effect: De twee hoekblokjes aan de rechterkant wisselen van positie, terwijl geel naar boven blijft wijzen en de andere hoekblokjes onveranderd blijven.

Dit betekent dat je de posities van twee willekeurige aangrenzende hoekblokjes kunt uitwisselen (door U te gebruiken om aan te passen welke twee hoekblokjes aan de rechterkant staan). Door dit een paar keer te herhalen, zullen de vier hoekblokjes volledig uitgelijnd en op hun plek vallen.

![J-perm demonstratie](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Ook deze formule hoef je niet uit je hoofd te leren. Observeer hoe de twee groene blokjes bewegen, voer het zelf een paar keer uit en je zult er snel vertrouwd mee raken. De kern is het uitwisselen van de twee rechterhoekblokjes van de bovenlaag, terwijl geel naar boven blijft wijzen.

### Stap vier: Herstel de laatste zes randstukken (LSE, Last Six Edges)

Hier begin je met het uitlijnen van de middenstukken, zodat geel aan de bovenkant en wit aan de onderkant zit. Daarna pas je de randstukken aan.

Er zijn nog maar 6 randstukken over. Deze stap gebruikt alleen de **M** en **U** bewegingen, wat zeer intuïtief is.

#### 4a: Pas de oriëntatie aan (EO, Edge Orientation)

**Methode**: Kijk of de witte/gele sticker van het randstuk naar boven of naar beneden wijst.

-   Naar boven / naar beneden = Goed randstuk ✓
-   Naar de zijkant = Verkeerd randstuk ✗

**Aanpassingsmethode**: Gebruik **M U M'** of **M' U M** om het verkeerde randstuk om te draaien.

![M U M' demonstratie van omgedraaid verkeerd randstuk](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

**Intuïtieve verklaring**: M draait het randstuk van de middenlaag omhoog, U past de positie aan, en M' draait het weer terug.

Herhaal dit een paar keer, totdat alle randstukken met wit/geel naar boven of naar beneden wijzen.

We kunnen randstukken met de juiste oriëntatie 'goede randstukken' noemen, en de verkeerd georiënteerde 'verkeerde randstukken'.

Zoals in de afbeelding te zien is, zijn de drie gemarkeerde randstukken aan de bovenkant 'verkeerde randstukken', omdat ze noch geel, noch wit zijn.

![Verkeerde randstukken gemarkeerd](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Aanpassingstips**: Je kunt slechts vier soorten situaties met verkeerde randstukken tegenkomen:

-   **0 verkeerde randstukken**: Voltooide staat
-   **Niet 0 of 4 verkeerde randstukken**: Verander het aantal verkeerde randstukken naar 4 met **M' U M**.
-   **4 verkeerde randstukken (2 boven, 2 onder)**: Wissel de bovenste en onderste randstukken uit met **M' U2 M**, om zo een situatie van 3 boven en 1 onder te creëren.
-   **4 verkeerde randstukken (3 boven, 1 onder)**: De drie verkeerde randstukken aan de bovenkant vormen een pijl. Draai de bovenlaag zodat de pijl naar het verkeerde randstuk aan de onderkant wijst. Voer één keer **M' U M** uit, en alle vier de verkeerde randstukken worden gecorrigeerd en veranderen in goede randstukken.

![Demonstratie van het oplossen van vier verkeerde randstukken met pijl](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Als er geen pijl verschijnt, blijf dan **M' U M** herhaaldelijk proberen; je zult hem uiteindelijk kunnen vormen. Naarmate je vordert, kun je langzaam patronen gaan ontdekken.

#### 4b: Herstel de linker- en rechterrandstukken (rood en oranje)

Vind het rood-gele en oranje-gele randstuk (het doel is om ze terug te brengen naar de randstukken aan de linker- en rechterkant) en breng ze naar de juiste positie met behulp van de randstukken-drie-cyclus.

**Tips**:

1.  Zorg dat het rood-gele (of oranje-gele) randstuk zich boven de middenlaag bevindt en laat het naar de onderkant zakken door de bovenste en onderste randstukken uit te wisselen (**M' U2 M**).
2.  Laat het andere oranje-gele (of rood-gele) randstuk aan de tegenoverliggende zijde naar de onderkant zakken.
3.  Draai de bovenlaag zodat de rode zijde verschijnt tegenover het rood-gele randstuk dat naar de onderkant is gezakt.
4.  Draai de middenlaag een halve slag (**M2**), en observeer de bovenlaag om deze op zijn plek te brengen (**U**).

![Demonstratie van linker- en rechterrandstukken op hun plek brengen](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Los de laatste vier randstukken op (blauw en groen)

**Tips**:

-   Blijf de bovenste en onderste randstukken uitwisselen met de **randstukken-drie-cyclus**: **M' U2 M**. De laatste stap is het observeren en op zijn plaats brengen met **U2**.
-   Snelle truc: Plaats het wit-groene (of wit-blauwe) randstuk boven de doelpositie, wissel de bovenste en onderste randstukken uit, en het wit-groene (of wit-blauwe) randstuk valt op zijn plek.

Er zijn slechts drie situaties:

-   Het klopt al → Klaar!
-   M2 nodig → Voer één keer **M2** uit.
-   Uitwisselen nodig → **M' U2 M U2** of **M U2 M' U2**.

We kunnen de logica van de drie-cyclus ook vereenvoudigen: M' is de middenlaag omhoog, U2 is de bovenlaag een halve slag draaien, M is de middenlaag terug, en U2 is de bovenlaag terug.

![Drie-cyclus van randstukken demonstratie](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Klaar!

![Volledig opgeloste Rubik's kubus](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Samenvatting

Geen formules uit je hoofd stampen, alleen de 'open-doe-dicht' logica van de commutator. Je zult merken dat dit proces veel leuker is dan formules memoriseren, en je hoeft je geen zorgen te maken dat je het jaren later vergeet; je kunt het altijd zelf weer afleiden.

Dezelfde aanpak kan worden gebruikt om elke Rubik's kubus op te lossen, inclusief allerlei vreemde varianten.

Maar als je de weg van speedcubing wilt inslaan, dan zul je een pad van eindeloze oefening moeten bewandelen. Voor beginners zou het echter met een beetje oefening geen probleem moeten zijn om onder de 90 seconden te komen.

Er zijn talloze oplosmethoden; kijk of jij een elegantere of handigere manier kunt vinden.

De Rubik's kubus wereld biedt oneindig veel plezier. Veel speelplezier!

## Bijlage 1: Spiekbriefje voor de Rubik's kubus methode (Kubus Oplos Mantra)

1.  **Bouw de linker- en rechterbrug: Vertrouw op observatie en intuïtie**
    -   Tips: Zodra je zeer bedreven bent in observeren en anticiperen, kun je, afhankelijk van de specifieke staat van de kubus, prioriteit geven aan het bouwen van andere modules, of de linker- en rechterbrug tegelijkertijd bouwen. Dit leidt tot minder stappen en biedt veel vrijheid.
2.  **Herstel de oriëntatie van de vier hoekstukken van de bovenlaag: alle vier geel naar boven**
    -   Drie-cyclus van bovenste hoekstukken: **R U' L' U R' U' L U** (laat het hoekstuk linksonder op zijn plaats, de interne kleuren van de andere drie hoekstukken draaien met de klok mee)
    -   Drie-cyclus van bovenste hoekstukken spiegelbeeldversie: **L' U R U' L U R' U'** (laat het hoekstuk rechtsonder op zijn plaats, de interne kleuren van de andere drie hoekstukken draaien tegen de klok in)
3.  **Herstel de zijkanten van de vier hoekstukken van de bovenlaag**
    -   **Fijnafstelling van de positie van de bovenste hoekstukken**: **R U2 R' U' R U2 L' U R' U' L** (houd de vier hoekstukken met geel naar boven gericht en wissel de posities van de twee rechterhoekstukken uit)
4.  **Verander de oriëntatie van de randstukken, zodat wit of geel naar boven of beneden wijst**
    -   Lijn eerst de middenstukken uit, zodat geel aan de bovenkant en wit aan de onderkant zit, en pas dan de randstukken aan.
    -   Verander het aantal 'verkeerde' randstukken met **M' U M**, vorm een pijl, richt de pijl naar het verkeerde randstuk, voer één keer **M' U M** uit, en alle vier de verkeerde randstukken worden gecorrigeerd en vallen op hun plek.
5.  **Herstel de randstukken aan de linker- en rechterkant** (rood en oranje)
    -   Zorg eerst dat het rood-gele (of oranje-gele) randstuk naar de onderkant zakt door de bovenste en onderste randstukken uit te wisselen (**M' U2 M**).
6.  **Herstel de resterende randstukken** (blauw en groen)
    -   Blijf de bovenste en onderste randstukken uitwisselen met de **randstukken-drie-cyclus**: **M' U2 M**. De laatste stap is het observeren en op zijn plaats brengen met **U2**.

De bovenstaande algoritmes hoef je trouwens helemaal niet uit je hoofd te leren; ze staan hier enkel als naslagwerk. In de praktijk zul je merken dat wanneer je zelf aan de slag gaat en observeert hoe de betreffende blokjes bewegen, je het al na een paar keer doorhebt. De kern is simpelweg het wisselen van de drie hoekblokjes op de bovenste laag.

## Bijlage 2: Handige websites en tools

Ik heb ook een online 3D Rubik's kubus voor jullie gemaakt waarmee je kunt spelen. Je kunt hem vrijelijk draaien, maar ook laten scramblen en oplossen volgens vaste algoritmes. Elke stap is voorzien van een mooie animatie!

[3D Rubik's kubus — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D Rubik's kubus tool](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Dezelfde scramble formule als in deze tutorial: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

De oplosstappen van de linker- en rechterbruggen van deze tutorial: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Als je deze link opent, zie je de scramblede kubus: [3D Rubik's kubus — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

De Rubik's kubus timer die wereldkampioenen gebruiken: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
