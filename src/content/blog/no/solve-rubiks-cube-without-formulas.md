---
layout: blog
title: "Hvordan løse Rubiks kube uten formler: Selv barneskoleelever kan forstå det"
date: 2026-05-09 12:00:00
tags:
  - Rubiks kube
  - veiledning
  - gruppeteori
  - matematikk
  - Roux-metoden
categories: 日常折腾
description: Lær trinn for trinn hvordan du løser en 3x3 Rubiks kube fra bunnen av, uten å pugge en eneste formel. Vi bruker konseptet med kommutatorer fra gruppeteori, kombinert med Roux' bro-løsning.
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="En fullstendig løst Rubiks kube" />
</figure>

Kanskje du er en nybegynner med Rubiks kube og aldri har løst den helt før.

De såkalte veiledningene du finner der ute, forteller deg bare en haug med merkelige formler. De sier bare at du skal gjøre slik, og så slik, og vips, så er kuben løst. Men selv etter å ha fulgt instruksjonene, forstår du fortsatt ikke hvorfor det virker.

Denne artikkelen vil være din redning. Du vil lære, helt fra bunnen av, å løse en Rubiks kube uten å pugge en eneste formel. Du vil få innsikt i kubens opprinnelse og forstå hvordan den fungerer. Jeg vil ta deg fra teori til praksis, trinn for trinn, og vise deg hvordan du løser en fullstendig Rubiks kube, samt lære deg hvordan du skal observere.

Kanskje dette blir første gang du personlig lykkes med å løse en Rubiks kube helt på egen hånd.

<!--more-->

## Rubiks kubes fødsel

Hvorfor er Rubiks kube så fascinerende? La oss først snakke litt om hvordan den ble til.

I 1974 laget den ungarske arkitekturprofessoren Ernő Rubik sin første prototype av tre. Han ønsket å demonstrere for studentene sine hvordan deler kunne bevege seg uavhengig uten å bryte den totale strukturen. Han malte de seks sidene i forskjellige farger, og Rubiks kube var født.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubiks kube prototype" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portrett av Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Det utrolige antall kombinasjoner

En 3x3 Rubiks kube har 8 hjørnebrikker, 12 kantbrikker og 6 senterbrikker, noe som gir totalt 26 synlige brikker. Men det er egentlig bare 20 brikker som kan flyttes, bortsett fra de seks senterbrikkene på hver side.

Så, hvor mange totale tilstander finnes det? **4,3 × 10¹⁹**.

Hva betyr dette? Dette antallet tilstander er mer enn antall sandkorn på jorden. Hvis du prøver 1 milliard tilstander per sekund, vil det ta over **1300 år** å gå gjennom alle. Hvis hver tilstand ble skrevet på et papir og stablet oppå hverandre, ville tykkelsen tilsvare å reise fra jorden til solen og tilbake 14 000 ganger.

Den lille 3x3 Rubiks kuben er virkelig mer enn den ser ut til. På grunn av sin nye og interessante lek, med uendelige variasjoner og sjarm, eksploderte den i markedet da den ble lansert, og tiltrakk seg entusiaster fra alle kanter. Snart utviklet det seg Rubiks kube-konkurranser, med forskjellige spillestiler (speedcubing, blindløsning, enhåndsløsning, løsning med føttene), forskjellige løsningsmetoder (lag-for-lag, hjørneførst, CFOP, Roux' bro-metode, Petrus, ZZ), og til og med varianter av kuben (fra 2x2 til 7x7, Pyraminx, Skewb, Megaminx), som dukket opp i et rasende tempo.

![Varianter av Rubiks kube](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Rubiks kubes sjarm er så stor at matematikere har forsket på matematikken i kuben i flere tiår for å finne "Guds tall". Astronauter har tatt den med seg til verdensrommet, og folk i alle aldre har utmerket seg i konkurranser. Men sammenlignet med kubens enorme appell, er det fortsatt relativt få spillere. Derfor ønsker jeg med denne artikkelen å lære alle å løse Rubiks kube og nyte moroa som dette tankevekkende spillet gir.

## Formlenes dilemma

De fleste løsningsmetodene på markedet krever at spillerne memorerer mange formler. Dette er svært avskrekkende for nybegynnere, som blir stoppet av formlene før de i det hele tatt rekker å oppleve gleden ved å løse kuben. Den kjente CFOP-metoden har over 100 formler, og selv nybegynnere må pugge dusinvis.

Derfor vil jeg i dag dele en metode som lar deg ha det gøy med Rubiks kube uten å måtte pugge formler. Den lar deg løse kuben kun ved å observere og forstå.

## Det matematiske våpenet: Gruppeteori

Spørsmål: Hvordan løser man Rubiks kube uten å pugge en eneste formel?

Her må vi hente frem det matematiske supervåpenet: gruppeteori. Det finnes ingen problemer som ikke kan løses med matematikk.

Så, hva har Rubiks kube med gruppeteori å gjøre? Rubiks kube er faktisk en gruppe. I kuben er hver rotasjon en permutasjonsoperasjon. Denne operasjonen har flere egenskaper: Den kan kombineres, reverseres, men ikke byttes om.

Multiplikasjon, som vi lærte på barneskolen, er en kommutativ operasjon; resultatet av A × B og B × A er identisk. Men i Rubiks kube-gruppen er A og B ikke ekvivalente etter ombytting; å først utføre R og deretter U er en helt annen operasjon enn å først utføre U og deretter R. Så når vi forstår grupper, forstår vi Rubiks kube. Og å leke med Rubiks kube hjelper oss også å forstå grupper.

Gratulerer, du har nå lært forskjellen mellom abelske grupper (multiplikasjon og addisjon er abelske grupper) og ikke-abelske grupper (Rubiks kube-gruppen).

(Tillegg: En leser har påpekt at utsagnet over ikke er helt presist, så her er en liten presisering. Heltall under addisjon danner en abelsk gruppe, mens naturlige tall N under addisjon ikke er en abelsk gruppe, for eksempel har 3 ingen invers -3, og -3 er ikke et naturlig tall. Ikke-null reelle tall, ikke-null rasjonale tall og ikke-null komplekse tall danner en abelsk gruppe under multiplikasjon. Den opprinnelige analogien var primært ment for å gi nybegynnere en intuitiv forståelse av "kommutativ vs. ikke-kommutativ".)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U og U R rekkefølge er forskjellig og effekten er forskjellig - del én" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U og U R rekkefølge er forskjellig og effekten er forskjellig - del to" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Tillegg: Standardoperasjoner for Rubiks kube representeres vanligvis med bokstaver: R betyr høyre lag 90 grader med klokken, U betyr topplaget 90 grader med klokken, R' er 90 grader mot klokken, M' er mellomlaget opp, og M er mellomlaget ned.)

Du kan direkte observere og lære hvordan Rubiks kube roterer i den online kubeanimasjonen i vedlegget.

## Teori: Kjernen i å ikke pugge formler – Kommutatoren

For å løse Rubiks kube må vi oppnå følgende tilstand: **justere posisjonen til visse brikker uten å endre posisjonen til andre brikker.**

Matematisk kalles denne operasjonen en kommutator, skrevet som **A B A⁻¹ B⁻¹**.

A⁻¹ er den inverse operasjonen av A.

Vi kan bruke en veldig hverdagslig analogi – heisen. Anta at du skal frakte en person fra 1. til 3. etasje:

1.  **A**: Personen går inn i heisen
2.  **B**: Heisen går opp til 3. etasje
3.  **A⁻¹**: Personen går ut av heisen
4.  **B⁻¹**: Heisen går tilbake til 1. etasje

Resultat: Heisen er tilbake i sin opprinnelige posisjon, men personen har flyttet seg fra 1. til 3. etasje. Nøkkelen er at når heisen kommer tilbake, er personen ikke lenger inni den – så omgivelsene er gjenopprettet, men målet har byttet posisjon.

I Rubiks kube tilsvarer for eksempel R og R⁻¹ en 90-graders rotasjon med klokken av høyre lag, og deretter en 90-graders rotasjon mot klokken i det tredje trinnet.

Den inverse operasjonen A⁻¹ B⁻¹ kan gjenopprette omgivelsene som ble forstyrret av A B-operasjonen. Dermed oppnår vi å bytte om kun spesifikke brikker uten å påvirke resten.

Hvorfor er det ikke A A⁻¹ B B⁻¹ da? Fordi hver bevegelse da ville kansellere seg selv, og brikkene ville ikke byttes om. Hvis du nettopp har utført operasjon A, og deretter umiddelbart den inverse operasjonen A⁻¹, er det som om ingenting har skjedd (for eksempel å rotere topplaget 90 grader mot klokken, og deretter umiddelbart 90 grader med klokken). Derfor må det være **A B A⁻¹ B⁻¹** for å danne en bytteoperasjon.

Dette er den mest grunnleggende bytteoperasjonen, og den mest praktiske grunnbevegelsen i Rubiks kube er: **R U R' U'**

![R U R' U' demonstrasjon](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Den kan kombineres til lengre sekvenser og oppnå forskjellige permutasjonseffekter, for eksempel denne: (R U R' U') (R U R' U') (R U R')

Dette er faktisk kilden til formlene. Hvorfor finnes formler? De er rett og slett en serie grunnleggende permutasjonsoperasjoner som er satt sammen til sekvenser. Ved å utføre sekvensene kan du raskt oppnå et bestemt resultat, som å løse en bestemt kantbrikke eller en bestemt hjørnebrikke. Forskjellige sekvenser kan brukes sammen for å lede oss til den endelige løsningen av Rubiks kube.

Når du forstår prinsippet, kan du til og med konstruere dine egne formler. (Hvordan du kan lage dine egne Rubiks kube-formler, kan du lese mer om i neste artikkel.)

Så for å løse Rubiks kube uten å pugge en eneste formel, trenger vi bare å lære tankegangen bak grunnleggende permutasjoner. Da kan vi anvende det i alle situasjoner. De mest atomiske permutasjonsbevegelsene vil enten bytte posisjon på tre hjørnebrikker eller tre kantbrikker.

## Hvordan bytte brikker på Rubiks kube

Som nevnt tidligere, den mest praktiske grunnleggende byttebevegelsen i Rubiks kube er: **R U R' U'**. Hvis du forstår denne bevegelsen dypt, vil du umiddelbart kunne løse de to første lagene av kuben.

Denne bevegelsen betyr egentlig: flytt ut (høyre lag), sett inn (målbrikken), sett tilbake (høyre lag), sett tilbake (topplaget).

På denne måten har vi lyktes i å sette inn den fremre venstre hjørnebrikken og den midtre kantbrikken i den nedre høyre posisjonen.

Denne bevegelsen kan varieres kontinuerlig, og bli til **U R U' R'**, eller **F R F' R'**, og så videre i hvilken som helst posisjon, til og med mellomlaget **M U M' U'**, eller **U2 R U2 R'**.

![Demonstrasjon av grunnleggende byttebevegelse](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

I startfasen er Rubiks kube mest forvirrende, så vi kan bruke mange slike grunnleggende permutasjoner for først å løse en side, eller andre lokale deler, for å redusere forvirringen.

Og fordi tilstanden er så kaotisk, kan den siste bevegelsen U' i **R U R' U'**, som gjenoppretter miljøet, til og med utelates avhengig av situasjonen, og direkte etterfølges av neste bevegelse. Dette forenkles da til: flytt ut, sett inn, sett tilbake.

Flytt ut, sett inn, sett tilbake.

Dette er kjernebevegelsen, og gratulerer, du har forstått hvordan du skal spille Rubiks kube!

Men i senere stadier vil vi trenge lengre permutasjonstrinn for å bytte spesifikke brikker uten å ødelegge den allerede løste tilstanden fullstendig.

Ta for eksempel **R U' L' U R' U' L U**. Denne bevegelsen kan bytte om bare tre hjørnebrikker uten å påvirke noe annet. Bryt den ned i kommutator-logikk:

```
A   = R U'   (sender hjørnebrikken ut)
B   = L'     (venstre lag beveger seg litt)
A⁻¹ = U R'   (gjenoppretter A-operasjonen)
B⁻¹ = U' L U (gjenoppretter B-operasjonen, med justering)
```

Effekt: Den nedre venstre hjørnebrikken forblir i ro, mens de tre andre hjørnebrikkene bytter plass.

Dette er sannsynligvis de eneste to formlene i denne artikkelen du trenger å kjenne til. Vi vil lære hvordan du bruker dem i praksis og forstår dem gjennom operasjonene, uten å måtte pugge dem utenat.

## Praksis: Løs Rubiks kube fra bunnen av

Endelig kommer vi til hoveddelen av denne artikkelen! Jeg vil lede deg trinn for trinn, ved å bruke kun observasjon og forståelse, til å løse en Rubiks kube fullstendig fra bunnen av.

Forberedelsene du trenger:

-   En Rubiks kube
-   Og litt tålmodighet (fordi vi hovedsakelig fokuserer på observasjon og forståelse)

Først antar jeg at du allerede har en Rubiks kube for hånden. Vi vil blande kuben tilfeldig med internasjonal standard ( **F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'** ), og deretter vil jeg løse denne kuben sammen med deg.

Eller du kan spille online-versjonen direkte her. Klikk på denne lenken for å se den blandede kuben: [3D Rubiks kube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Initial tilstand av en blandet Rubiks kube](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Vi kan bruke den svært elegante Roux' bro-løsningsmetode for å løse kuben. I motsetning til lag-for-lag-metoder, fokuserer bro-metoden på å først løse de 1x2x3-blokkene på venstre og høyre side, ofte kalt venstre og høyre bro. Deretter løser man topplaget og de resterende brikkene.

Bro-metoden er svært fri og fleksibel, krever færre steg enn mange kjente metoder, og har relativt få formler å huske, da den i stor grad bygger på kommutator-logikken. Innenfor denne rammen kan vi lære å løse Rubiks kube uten å pugge en eneste formel.

![Roux løsningsmetode flytdiagram](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Trinn én: Fiks observasjonsposisjonen

I bro-metoden er observasjonsposisjonen fast. Under løsningsprosessen trenger vi ikke å rotere kuben ofte, men holder den samme vinkelen for å tenke og løse. Med denne faste siden som referansepunkt kan vi enkelt se enkelte hjørne- og kantbrikker og vite hvor de skal.

Vi kan bruke denne vinkelen som standard:

-   Rett foran (mot deg): Grønn side
-   Venstre side: Rød
-   Høyre side: Oransje
-   Topplag: Gul
-   Bunnlag: Hvit
-   Bakside: Blå

### Trinn to: Bygg broene

**Venstre bro bygges i følgende rekkefølge:**

1.  Først plasserer vi den hvit-røde kantbrikken (den nedre venstre søylen).
2.  Deretter plasserer vi den blå-røde kantbrikken bak.
3.  Til slutt plasserer vi de to røde hjørnebrikkene foran.

Illustrasjon av ferdig venstre bro:

![Ferdig venstre bro](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Denne prosessen krever ingen formler, bare observasjon og forståelse. Med litt øvelse blir du flinkere og flinkere.

**F' L**: Bruk observasjonsmetoden for å finne den rød-hvite kantbrikken og plasser den riktig, med hvit ned og rød til venstre.

![Demonstrasjon av hvit-rød kantbrikke på plass](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Plasser den blå-røde kantbrikken og hjørnebrikken riktig.

![Blå-rød kantbrikke og hjørnebrikke på plass](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Finn posisjonene til de to siste brikkene i venstre bro, og finn en måte å plassere dem riktig på, slik at vi får en perfekt venstre bro.

![Plassering av de to siste brikkene i venstre bro](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Høyre bro gjøres på samme måte**. Bytt rød med oransje og gjenta trinnene ovenfor. Men vær forsiktig så du ikke forstyrrer den allerede fullførte venstre broen. Hvis du trenger å låne plass, kan du først flytte venstre bro litt ut av veien, slik at operasjonene på høyre side ikke påvirker venstre bro. Når operasjonene på høyre side er ferdige, gjenoppretter du venstre bro.

**Midten av høyre bro**: U' M U' R2

![Midtre kantbrikke på høyre bro på plass](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Første brikke på høyre bro**: U' M' U2 R' U R

![Første brikke på høyre bro på plass](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Vi har fullført den siste modulen for høyre bro, og ønsker å sette den inn i posisjon. Derfor flytter vi først venstre bro (F') for å frigjøre plass, deretter flytter vi modulen (U), og til slutt setter vi både venstre og høyre bro tilbake på plass.

![Siste brikke på høyre bro settes inn](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Dette er tilstanden når begge broene er fullført. Så lenge broene er dannet, trenger vi ikke å bekymre oss for de andre fargebrikkene foreløpig.

![Begge broer fullført](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Trinn tre: Løs topplagets hjørnebrikker

Etter at du har løst broene på venstre og høyre side, skal vi nå begynne å løse de resterende fire hjørnebrikkene. Her trenger vi en 3-syklus for hjørnebrikker, som roterer tre hjørner fra A til B, B til C, og C tilbake til A.

![Illustrasjon av 3-syklus for hjørnebrikker: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Hjørnebrikke 3-syklus

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formel 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Den nedre venstre hjørnebrikken forblir på plass</li>
      <li>De tre andre hjørnebrikkene bytter posisjon <strong>mot klokken</strong></li>
      <li>Men deres indre farger roterer <strong>med klokken</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formel 2 (Speilversjon)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Den nedre høyre hjørnebrikken forblir på plass</li>
      <li>De tre andre hjørnebrikkene bytter posisjon <strong>med klokken</strong></li>
      <li>Men deres indre farger roterer <strong>mot klokken</strong></li>
    </ul>
  </div>
</div>

![Demonstrasjon av hjørnebrikke 3-syklus speilversjon](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Du kan møte fire typer hjørneorienteringer: 0, 1, 2 eller 4 riktig orienterte hjørner.

-   **4 riktig orienterte hjørner**: Ferdig tilstand
-   **1 riktig orientert hjørne** (liten fisk-formasjon): Gjør en 3-syklus eller speilversjonen for å fullføre
-   **0 / 2 riktig orienterte hjørner**: Plasser først et feil hjørne i en posisjon som ikke blir påvirket av 3-syklusen (nederst til venstre), utfør en 3-syklus, og du vil ende opp med 1 riktig orientert hjørne, tilbake til forrige situasjon

Noen ganger må den grunnleggende 3-syklusen utføres to ganger for å løse kuben, mens speilversjonen bare trenger å utføres én gang for å løse den helt. Nybegynnere trenger bare å mestre grunnversjonen, fokusere på observasjon og forståelse, og deretter vil de kunne anvende det bredt. Dette er en 3-syklus der gult peker oppover, og det er også en kjent klassisk formel – "venstre og høyre liten fisk"-formelen, så prøv å få tak i den lille fisk-formasjonen.

Denne formelen trenger du heller ikke å pugge. Observer hvordan de to grønne brikkene beveger seg, og gjør det selv et par ganger, så blir du kjent med det. Kjernen er å bytte om de tre hjørnebrikkene på topplaget.

Vi ser på kuben der broene akkurat er ferdige, og oppdager at det er to gule brikker på toppen. Vi bytter derfor ut den nederste venstre brikken med en som ikke er gul, og utfører en 3-syklus for hjørnebrikker. Deretter utfører vi 3-syklusen to ganger til, eller en gang med speilversjonen, for å få alle fire hjørnene på topplaget til å peke oppover med gult.

![Demonstrasjon av hjørnebrikke 3-syklus prosess](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Fire gule hjørner fullført!

![Fire gule hjørner fullført](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Juster posisjonen (juster sidefargene)

Når alle fire hjørnebrikker har gult vendt oppover, må du fortsatt justere sidefargene slik at hjørnebrikkene er helt på plass.

Da bruker vi **J-perm varianten**: **R U2 R' U' R U2 L' U R' U' L**

Logikken i denne formelen kan brytes ned i "flytte et par + logisk bytte":

-   Første del `R U2 R' U' R`: Flytter et par til et trygt område for midlertidig lagring, og frigjør plass.
-   Andre del `U2 L' U R' U' L`: Bruker 3-sykluslogikken til nøyaktig å bytte to hjørnebrikker.

**Effekt**: De to høyre hjørnebrikkene bytter plass, samtidig som gult peker oppover, og de andre hjørnebrikkene forblir uendret.

Dette tilsvarer å kunne bytte posisjon på to tilstøtende hjørnebrikker (bruk U for å velge hvilke to hjørnebrikker som er til høyre). Etter å ha byttet et par ganger vil alle fire hjørnebrikkene være perfekt justert.

![J-perm demonstrasjon](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Denne formelen trenger du heller ikke å pugge utenat. Observer hvordan de to grønne brikkene beveger seg, og gjør det selv et par ganger, så blir du kjent med den. Kjernen er å bytte om de to høyre hjørnebrikkene på topplaget, samtidig som gult peker oppover.

### Trinn fire: Løs de siste seks kantbrikkene (LSE, Last Six Edges)

Her justerer du først senterbrikkene slik at gult er på toppen og hvitt er på bunnen, deretter justerer du kantbrikkene.

Det er bare 6 kantbrikker igjen. Dette trinnet bruker kun **M** og **U** operasjonene, og er veldig intuitivt.

#### 4a: Juster orienteringen (EO, Edge Orientation)

**Bestemmelsesmetode**: Sjekk om den hvite/gule klistremerket på kantbrikken peker opp eller ned.

-   Opp / Ned = Riktig orientert ✓
-   Til siden = Feilorientert ✗

**Justeringsmetode**: Bruk **M U M'** eller **M' U M** for å snu feilorienterte kantbrikker.

![M U M' snur feilorienterte kantbrikker demonstrasjon](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitiv forståelse: M snur kantbrikkene i midtlageret opp, U justerer posisjonen, og M' snur dem tilbake.

Gjenta flere ganger til alle kantbrikkene har hvit/gul farge vendt opp eller ned.

Vi kan kalle kantbrikker med riktig orientering for "riktige kantbrikker" og de med feil orientering for "feilorienterte kantbrikker".

Som vist, er de tre uthevede kantbrikkene på topplaget feilorienterte, fordi de verken er gule eller hvite.

![Utheving av feilorienterte kantbrikker](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Justerings-triks**: Du kan møte fire typer feilorienterte kantbrikker:

-   **0 feilorienterte kantbrikker**: Ferdig tilstand
-   **Ikke 0 eller 4 feilorienterte kantbrikker**: Endre antall feilorienterte kantbrikker til 4 ved å bruke **M' U M**
-   **4 feilorienterte kantbrikker (2 oppe og 2 nede)**: Bytt øvre og nedre kantbrikker med **M' U2 M** for å få en situasjon med 3 oppe og 1 nede
-   **4 feilorienterte kantbrikker (3 oppe og 1 nede)**: De tre feilorienterte kantbrikkene på topplaget vil danne en pil. Roter topplaget slik at pilen peker mot den feilorienterte kantbrikken på bunnlaget. Utfør **M' U M** én gang, og alle fire feilorienterte kantbrikker vil bli riktig orientert.

![Fjerning av fire feilorienterte kantbrikker med pilformasjon](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Hvis det ikke vises en pil, fortsett å prøve **M' U M** til den dukker opp. Etter hvert kan du begynne å finne mønstre.

#### 4b: Løs de venstre og høyre kantbrikkene (rød og oransje)

Finn de rød-gule og oransje-gule kantbrikkene (målet er å få dem tilbake til kantbrikkene på venstre og høyre side), og få dem til riktig posisjon ved hjelp av en 3-syklus for kantbrikker.

**Tips**:

1.  Flytt den rød-gule (eller oransje-gule) brikken til over midtlageret, og få den til å synke ned ved å bytte øvre og nedre kantbrikker (**M' U2 M**).
2.  Få den andre oransje-gule (eller rød-gule) brikken til å synke ned på motsatt side.
3.  Roter topplaget slik at den røde kanten vises i motsatt posisjon av den nedsunkne rød-gule kantbrikken.
4.  Roter midtlageret en halv sirkel **M2**, og observer at topplaget faller på plass **U**.

![Venstre og høyre kantbrikke på plass demonstrasjon](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Løs de siste fire kantbrikkene (blå og grønn)

**Tips**:

-   Bruk stadig **kantbrikke 3-syklus** for å bytte øvre og nedre kantbrikker: **M' U2 M**, det siste trinnet faller på plass ved observasjon **U2**.
-   Raskt triks: Plasser den hvit-grønne (eller hvit-blå) kantbrikken over målposisjonen, bytt øvre og nedre kantbrikker, så faller den hvit-grønne (hvit-blå) på plass.

Det er bare tre situasjoner:

-   Allerede riktig → Ferdig!
-   Trenger M2 → Utfør **M2** én gang
-   Trenger bytte → **M' U2 M U2** eller **M U2 M' U2**

Vi kan også forenkle logikken for 3-syklusen for kantbrikker: M' betyr at midtlageret kommer opp, U2 roterer topplaget en halv sirkel, M gjenoppretter midtlageret, U2 gjenoppretter topplaget.

![3-syklus for kantbrikker demonstrasjon](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Ferdig!

![Ferdig løst Rubiks kube](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Oppsummering

Du trenger ikke å pugge formler, kun kommutatorlogikken "åpne – utfør handling – lukk". Du vil oppdage at denne prosessen er mye morsommere enn å pugge formler, og du trenger ikke å bekymre deg for å glemme den selv etter mange år; du kan alltid utlede den selv.

Den samme tankegangen kan brukes til å løse enhver Rubiks kube, inkludert alle slags merkelige varianter.

Men hvis du ønsker å satse på speedcubing, da venter en endeløs vei med hard trening. For nybegynnere bør det imidlertid være mulig å oppnå under 90 sekunder med litt øvelse.

Det finnes tusenvis av løsningsmetoder, det gjelder å finne den som er mest elegant eller mest praktisk for deg.

Gleden ved Rubiks kubes verden er uendelig, jeg ønsker deg mye moro.

## Vedlegg 1: Jukselapp for denne Rubiks kube-løsningsmetoden

1.  **Bygg broene (venstre og høyre): Basert på observasjon og intuisjon**
    -   Tips: Når du blir veldig god til å observere og forutse, kan du, avhengig av kubens spesifikke tilstand, prioritere å bygge andre moduler, eller bygge begge broene samtidig. Dette kan føre til færre trekk og gir stor frihet.
2.  **Løs orienteringen til de fire hjørnebrikkene på topplaget: Alle fire gule peker oppover**
    -   Topplag hjørnebrikke 3-syklus: **R U' L' U R' U' L U** (Holder nederste venstre hjørnebrikke i ro, mens de indre fargene på de tre andre hjørnebrikkene roterer med klokken)
    -   Topplag hjørnebrikke 3-syklus speilversjon: **L' U R U' L U R' U'** (Holder nederste høyre hjørnebrikke i ro, mens de indre fargene på de tre andre hjørnebrikkene roterer mot klokken)
3.  **Løs sidene til de fire hjørnebrikkene på topplaget**
    -   **Finjuster posisjonen til topplagets hjørnebrikker**: **R U2 R' U' R U2 L' U R' U' L** (Beholder alle fire hjørnebrikkene med gult oppover, bytter posisjon på de to hjørnebrikkene på høyre side)
4.  **Endre kantbrikkenes orientering, slik at hvit eller gul peker opp eller ned**
    -   Juster først senterbrikkene slik at gult er på toppen og hvitt på bunnen, deretter juster kantbrikkene.
    -   Endre antall feilorienterte kantbrikker med **M' U M**, lag en pil, pek pilen mot en feilorientert kantbrikke, utfør **M' U M** én gang, og alle fire feilorienterte kantbrikkene vil falle på plass.
5.  **Løs kantbrikkene på venstre og høyre side** (rød og oransje)
    -   Få først den rød-gule (eller oransje-gule) brikken til å synke ned ved å bytte øvre og nedre kantbrikker (**M' U2 M**)
6.  **Løs de resterende kantbrikkene** (blå og grønn)
    -   Bruk stadig **kantbrikke 3-syklus** for å bytte øvre og nedre kantbrikker: **M' U2 M**, det siste trinnet faller på plass ved observasjon **U2**.

Du trenger ikke å lære deg noen av formlene over utenat; de er kun tatt med i vedlegget for referanse. Når du faktisk prøver det selv, og observerer og forstår hvordan de tilsvarende brikkene beveger seg, vil du bli vant til det etter bare noen få forsøk. Kjernen er bare å bytte om de tre hjørnebrikkene på topplaget.

## Vedlegg 2: Nyttige nettsteder og verktøy

Jeg har også laget en 3D Rubiks kube som du kan spille med online. Du kan rotere den fritt, og den kan blandes og løses med faste formler. Hvert trinn har vakre animasjoner du kan se!

[3D Rubiks kube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D Rubiks kube-verktøy](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Samme blandeformel som i denne veiledningen: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Gjenopprettingssteg for venstre-høyre-broene i denne veiledningen: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klikk på denne lenken for å se den blandede kuben: [3D Rubiks kube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Rubiks kube-timer som brukes av verdensmestere: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
