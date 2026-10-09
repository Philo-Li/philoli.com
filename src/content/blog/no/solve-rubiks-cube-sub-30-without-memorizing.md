---
layout: blog
title: "Hvordan komme under 30 sekunder på Rubiks kube uten å pugge algoritmer: En enkel guide for alle"
date: 2026-10-09 12:00:00
tags:
  - kube
  - guide
  - Roux-metoden
  - speedcubing
  - målrettet trening
categories: Hverdagsutfordringer
description: "Det tok meg 89 dager fra første løsning til jeg nådde Ao100 under 30 sekunder, uten å ha pugget en eneste CFOP-algoritme. Basert på 4441 timede løsninger, bryter jeg ned fire faser: hva som var utfordrende, hva jeg øvde på i hver fase, og hvorfor Roux-metoden ikke krever at du pugger algoritmer."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Hvordan komme under 30 sekunder på Rubiks kube uten å pugge algoritmer: En enkel guide for alle" />
</figure>

I forrige artikkel, [«Hvordan løse Rubiks kube uten å pugge algoritmer»](/no/blog/solve-rubiks-cube-without-formulas/), lærte du å løse en Rubiks kube uten å memorere algoritmer, ved å bruke logikken bak kommutatorer. Den artikkelen fikk mye positiv respons.

Hvis du fulgte veiledningen, klarer du sannsynligvis å løse kuben på to-tre minutter nå. Det er kanskje litt klønete, men du får det til. Da dukker et nytt spørsmål opp: Hvordan blir jeg raskere?

Hvis du søker på "speedcubing", vil alle guider fortelle deg det samme: For å komme under 30 sekunder, må du først pugge CFOP-algoritmene. Det er 41 F2L-algoritmer, 57 OLL-algoritmer og 21 PLL-algoritmer – totalt 119. Selv om du gjør F2L intuitivt, slipper du ikke unna de 78 algoritmene for topplaget. Har du ikke pugget dem, kan du bare glemme å bli rask.

Denne artikkelen vil vise deg at du kan komme under 30 sekunder uten å pugge en eneste algoritme.

<!--more-->

Jeg begynte å løse Rubiks kube for første gang 7. mai 2026, og 4. august nådde jeg Ao100 under 30 sekunder. Det tok meg 89 dager. I løpet av denne perioden pugget jeg ikke en eneste CFOP-algoritme; jeg bare lekte med kuben i fritiden. Dette er mine timede data fra 4441 løsninger.

![Resultatkurve for 4441 løsninger](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figur: Resultatkurve for 4441 løsninger. Den grå linjen viser hver enkelt løsningstid, den mørke linjen er Ao100-trenden, og de røde prikkene markerer personlige rekorder. Min beste Ao100 var 28,22 sekunder.*

Med bevisst og jevn trening kan hvem som helst gå fra nybegynner til sub-30 i løpet av noen måneder.

Hva betyr det å komme under 30 sekunder? I [det første Rubiks kube-VM i 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) var vinnerresultatet 22,95 sekunder, som senere ble anerkjent av WCA som den første offisielle verdensrekorden. Tiendeplassen var 29,11 sekunder, oppnådd av Jessica Fridrich selv, som oppfant CFOP-metoden jeg skal snakke om i neste avsnitt. Med andre ord, en sub-30-tid som en amatør oppnår etter noen måneders trening i dag, ville vært blant verdens ti beste i 1982.

Jeg skal nå dele hvordan jeg gradvis oppnådde dette, og gi deg hele treningsmetoden.

## Hvorfor speedcubing-verdenen pugger algoritmer

La oss først avklare én ting: Hvorfor er "rask" og "pugge algoritmer" så sterkt knyttet sammen i folks hoder?

På begynnelsen av 1980-tallet utviklet den tsjekkisk-amerikanske professoren Jessica Fridrich (som senere forsket på digital etterforskning ved Binghamton University i USA) en lag-for-lag-løsningsmetode. Denne ble senere kjent som CFOP (Cross, F2L, OLL, PLL). Tanken bak denne metoden er å liste opp alle mulige tilfeller for topplaget og gi en optimal algoritme for hver situasjon. Du identifiserer situasjonen, utfører algoritmen, og trenger ikke å tenke.

![Jessica Fridrich og kuben på kontoret hennes](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figur: Jessica Fridrich og kuben på kontoret hennes. I 1982 tok hun 10. plass i det første verdensmesterskapet med 29,11 sekunder. CFOP-metoden er oppkalt etter henne (Fridrich Method).*

Denne metoden er ekstremt rask. Nesten alle verdensrekorder er satt med CFOP. Derfor underviser alle guider i den, alle videoer forklarer den, og "å lære speedcubing" ble synonymt med "å lære CFOP", som igjen ble synonymt med å pugge 119 algoritmer.

Men legg merke til at "pugge algoritmer" er en egenskap ved CFOP-metoden, ikke en egenskap ved "hurtighet" i seg selv. Grunnen til at CFOP krever pugging, er at den har valgt uttømmende tilfeller som vei. Uttømming krever memorering, og det er prisen den betaler.

Finnes det metoder som ikke følger denne uttømmende veien? Ja, det gjør det.

## Løsningsmetoden uten pugging: Roux-metoden

I 2003 presenterte franskmannen Gilles Roux en helt annen tilnærming. I stedet for å bygge lag for lag, starter man med å konstruere to 1×2×3 "blokker" (venstre og høyre), deretter håndteres de fire hjørnebrikkene på topplaget, og til slutt gjenstår bare seks kantbrikker som fullføres med M- og U-bevegelser.

![Gilles Roux i konkurranse](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figur: Gilles Roux i konkurranse. Klipp fra en eldre konkurransevideo, bildet er restaurert og forstørret med AI.*

I forrige artikkel løste vi kuben en gang med denne rammen. La oss se på de fire trinnene igjen, men denne gangen fokuserer vi på "hva som må huskes i hvert trinn":

| Trinn | Innhold | Algoritmer som må pugges |
| --- | --- | --- |
| 1. Første blokk (FB) | Bygg en 1×2×3 blokk | 0, ren observasjon |
| 2. Andre blokk (SB) | Bygg en symmetrisk blokk | 0, ren observasjon |
| 3. CMLL | Plasser de fire hjørnebrikkene på topplaget | 9, alle kan utledes fra 3-syklus bytter |
| 4. LSE | De siste seks kantbrikkene | 0, bruker kun U- og M-lagbevegelser |

Tre av de fire trinnene krever ingen algoritmer. Den eneste som krever CMLL, har totalt 42 tilfeller, men du trenger ikke 42 algoritmer. Hjørnebrikke-3-syklusen R U' L' U R' U' L U, som vi snakket om i forrige artikkel, pluss dens speilbilder og noen varianter, kan dekke alle tilfeller, bare litt tregere.

![De fire Roux-trinnene](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figur: De fire Roux-trinnene. Hvert trinn viser kun brikkene som er plassert opp til det punktet: Første blokk → Andre blokk → CMLL (topplagets hjørner) → LSE (de siste seks kantbrikkene). Utsnitt fra "løsnings"-panelet på min 3D-kubeside.*

Dette er grunnen til at Roux-metoden kan brukes uten å pugge algoritmer: Den komprimerer den nødvendige memoreringen til et lite hjørne, og overlater resten til observasjon, forståelse og øvelse.

## Fra 165 sekunder til 28 sekunder: Fire faser

Her er veien jeg faktisk fulgte. Jeg har markert start og slutt for hver fase med data, og deretter forklart hvor jeg sto fast og hva jeg øvde på i den fasen. Dine utfordringer kan være annerledes enn mine, men rekkefølgen vil sannsynligvis være den samme.

![Tidsspenn for de fire fasene](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figur: Tidsspenn for de fire fasene. Fase én varte 3 uker, fase to 11 dager, fase tre to måneder, og fase fire pågår fortsatt.*

### Fase én: 165 sekunder → 60 sekunder (Uke 1–3)

**Data**: 7. mai til 27. mai. Gjennomsnittlig 165 sekunder i første uke, 68 sekunder i tredje uke.

**Hvor du står fast**: Den første blokken er svært uvant, og det tar lang tid å finne hvert hjørne-kant-par. Etter å ha funnet et par, har nybegynnere en tendens til å stoppe opp for å observere videre.

![Hvor nybegynnere bruker tiden sin](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figur: Hvor nybegynnere bruker tiden sin. Hendene er i ro, øynene søker frem og tilbake på kuben; tiden brukt på å "finne" er mange ganger lengre enn tiden brukt på å "dreie".*

**Hva du bør øve på**:

Den største fienden i denne fasen er ikke trege hender, men trege øyne. Du bruker langt mer tid på å "finne" enn på å "dreie". Derfor:

- **Fiksert observasjonsposisjon, ikke roter kuben.** Som nevnt i forrige artikkel er Roux-metodens observasjonsvinkel fast. I denne fasen må du gjøre "ikke rotere kuben" til muskelminne. Hver gang du tenker på å rotere kuben, stopp og spør deg selv: Kan jeg se brikken jeg leter etter fra denne vinkelen?
- **Sakte løsing (slow solving).** Ikke ta tid, men bevegelsene skal være sammenhengende, uten stopp. Hver bevegelse kan være veldig treg, men ikke stopp opp. Poenget er at øynene skal fokusere på neste bevegelse mens hendene utfører den forrige. Dette er kjernen i sakte løsing. Det høres ut som du blir tregere, men det trener øynene dine til å se forholdet mellom brikkens nåværende posisjon og dens riktige plass.
- **Øv kun på den første blokken.** Scramble, bygg første blokk, scramble igjen, bygg første blokk igjen. Ikke fortsett med de neste trinnene. Den første blokken er det frieste trinnet i Roux og det beste for å trene observasjon.

Ikke lær noen nye algoritmer i denne fasen. Flaskehalsen din er ikke algoritmer akkurat nå.

### Fase to: 60 sekunder → 40 sekunder (Uke 4–5)

**Data**: 27. mai til 7. juni, 11 dager. Dette var den raskest fallende perioden i hele prosessen, og også perioden jeg trente mest, med 723 løsninger den første uken i juni.

**Hvor du står fast**: Brudd i bevegelsene. Kuben hakker.

**Hva du bør øve på**:

I denne fasen må du optimalisere bevegelsene i hvert trinn og øke flyten i hver bevegelse basert på forståelse.

- **Andre blokk (SB).** Den andre blokken er vanskeligere enn den første, da det er mindre plass, og du må ikke ødelegge den allerede fullførte første blokken. De viktigste bevegelsene er R, r (høyre to lag), M, U. I denne fasen må du lære å bruke r og M i stedet for R for å flytte brikker, slik at den første blokken aldri blir brutt. Å optimalisere bevegelsestrinn er å spare tid. For eksempel er tre rotasjoner med klokken det samme som én rotasjon mot klokken.
- **Flytende M-lagbevegelser.** Den siste fasen i Roux er utelukkende M og U, og hvor flytende du snur M-laget, avgjør direkte din nedre grense. Bruk ring- eller langfingeren til å dytte M, og begynn å øve på rytmer som M' U M' U.
- **CMLL mønstergjenkjenning.** I forrige artikkel "prøvde" vi oss frem til de fire hjørnene med en 3-syklus. Nå må du begynne å se og så handle: Før du roterer topplaget, se på de fire hjørnenes gule orientering og avgjør om det er 0, 1, 2 eller 4 riktig orienterte hjørner, og utfør deretter den tilsvarende bevegelsen direkte. Du kan også oppnå betydelig effektivitetsøkning med et svært lite antall algoritmer, noe som er svært lønnsomt. En stor del av disse algoritmene krever ikke memorering; du lærer dem mens du gjør dem.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Perspektiv når du bygger andre blokk" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figur venstre: Perspektiv når du bygger andre blokk. Første blokk er ferdig. Bruk kun de fire bevegelsene R, r, M og U for å sette inn hjørne-kant-parene på høyre side, uten å røre første blokk. Figur høyre: M' U M, en av de mest brukte bevegelsesgruppene i andre halvdel av Roux-løsningen. Midtlaget kommer opp, topplaget roteres, midtlaget går tilbake – tre trinn for å bytte et par kantbrikker mellom topp- og midtlaget.*

Du kan se min organiserte [Roux Method algoritmebase](/no/projects/rubiks-cube/roux#cmll). CMLL-siden er to-trinns: 7 orienteringsalgoritmer + 2 plasseringsalgoritmer, totalt 9. Dette er det mest kostnadseffektive valget for hastighetsforbedring og er lett å lære. Hver gang du mestrer et sett, kan du bli 1-2 sekunder raskere. Med litt øvelse blir du raskt dyktig, og noen av disse er allerede introdusert i forrige artikkel. Du trenger ikke å huske alle for å komme under 30 sekunder.

![Første trinn i to-trinns CMLL: syv hjørneorienteringer](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figur: Første trinn i to-trinns CMLL: syv hjørneorienteringer. I toppvisningen er gult toppflatefargen som peker opp, og de små stripene på utsiden indikerer at hjørnets toppflatefarge peker til siden. Gjenkjenn mønsteret etter antall gule hjørner: 0 er H eller Pi, 1 er S eller AS, 2 er U, T eller L.*

Etter å ha justert de gule toppflatene, kan du bruke disse to algoritmene for å justere hjørnenes sidefarger.

Hvis en side allerede har ensfarget farge, for eksempel rød på samme side, roter den til venstre, og velg deretter algoritmen for nabobytte. Hvis ingen sider har ensfarget farge, velg algoritmen for diagonalbytte.

![Andre trinn i to-trinns CMLL: to hjørneplasseringer](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figur: Andre trinn i to-trinns CMLL: to hjørneplasseringer. På venstre bilde er de røde fargene på de to venstre hjørnene allerede justert, bruk nabobytte; på høyre bilde er ingen sider justert, bruk diagonalbytte.*

Du kan forstå hver algoritme gjennom mye sakte løsing. Ikke tenk på dem som algoritmer, men som faste bevegelsesekvenser som du gradvis ville oppdaget selv. Men å liste dem opp her kan spare deg for tid og unødvendig prøving og feiling.

Én ting til, som er mer effektivt enn all trening: Invester i en ny kube. Hvis du fortsatt bruker en gammel kube som klikker og låser seg, kjøp en moderne 3x3 med magneter. De nyeste kubene vil gi deg en følelse av ingeniørkunst; de snurrer jevnt, sentrerer automatisk og låser seg nesten aldri. Bare å bytte kube kan kutte gjennomsnittstiden din med opptil 15 sekunder. Et kostnadseffektivt valg er [MoYu RS3 M V5 (MagLev + Ball-Core-versjonen)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), som koster rundt tjue dollar og holder deg til du når sub-20.

### Fase tre: 40 sekunder → 30 sekunder (Uke 5–13, to måneder)

**Data**: 7. juni til 4. august. Ao100 snek seg fra 39,8 sekunder til 29,9 sekunder, noe som tok 58 dager. I denne fasen kunne jeg av og til få tider under 30 sekunder, men det krevde veldig flaks. Og etter hvert som gjennomsnittstiden synker, vil vanskelighetsgraden for å forbedre seg med 1 sekund øke eksponentielt.

![Daglig gjennomsnittsresultat](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figur: Daglig gjennomsnittsresultat. Etter midten av juni flatet kurven nesten ut, og jeg brukte to måneder på å kjempe mellom 30 og 40 sekunder.*

Dette er platåfasen. Alle vil oppleve den, og jeg var her i to måneder.

**Hvor du står fast**: Løsningen av de seks kantbrikkene på topplaget er treg, logikken er ikke forstått, og hver gang prøver jeg meg frem, noe som kaster bort mye tid. Første og andre blokk er fortsatt ikke flytende nok.

**Hva du bør øve på**:

- **EO-gjenkjenning.** Som nevnt i forrige artikkel, er det bare noen få tilfeller av feilorienterte kanter: 0, ikke-0 ikke-4, 4 (to på topp, to på bunn), 4 (alle på topplaget), 4 (tre på topp, en på bunn). Målet i denne fasen er: I det øyeblikket blokkene er bygget, skal du uten å telle, med et øyekast, se hvilken type det er. Øvelsen er å scramble og bare gjøre CMLL, deretter pause, si antall feilorienterte kanter, og så fortsette.
- Mange forstår ikke bevegelsene her. EO-fasen handler til syvende og sist om å konstruere pilformen med tre feilorienterte kanter på topplaget og én på bunnlaget. Siden en fullstendig løst kube kun er én scramble unna pilformen, er det, med omvendt tankegang, det siste trinnet før kuben er ferdig. Uansett hvor mange feilorienterte kanter det er, er målet til slutt å konstruere en pil. Hvis det er fire feilorienterte kanter på topplaget, bytter du et par mellom topp- og bunnlag for å få en feilorientert kant ned, og dermed oppnår pilformen. Hvis det er to på topp og to på bunn, bytter du et par mellom topp- og bunnlag for å få en feilorientert kant opp, og dermed oppnår pilformen. Hvis det er én på topp og én på bunn, eller to på topp, bruker du M' U M for å først komme til en av de tidligere situasjonene, og så konstruere pilen. Du kan gjennom mye observasjon og tenking selv finne den beste sekvensen for 1/1-situasjonen.
- **Mye look-ahead-trening.** Dette er det viktigste for å komme fra 40 til 30 sekunder, og også det mest kontraintuitive: snu litt saktere, se lenger fremover. Når du bygger den første blokken, ikke se på brikken du setter inn, men se hvor den neste brikken er. Det vil føles veldig rart i begynnelsen, og tidene dine vil først bli dårligere, men etter en uke vil det plutselig forbedre seg.
- **CMLL uten nøling.** Hvis du må tenke deg om hver gang før du tør å utføre en bevegelse, er den ennå ikke "din". Øv på hver bevegelse 50 ganger individuelt, til hendene dine beveger seg automatisk når du ser formen.

![Pilform](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figur: Pilform. Tre feilorienterte kantbrikker på topplaget (uthevet i cyan) danner en pil som peker mot den feilorienterte kantbrikken på bunnlaget. På dette tidspunktet vil en M' U M-sekvens plassere alle fire samtidig. [Åpne denne tilstanden i 3D-kuben](/no/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) for å se trinn for trinn.*

![Seks EO-tilfeller](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figur: Seks EO-tilfeller. Etiketten øverst til venstre viser antall feilorienterte kantbrikker (topp / bunn). Gult indikerer riktig orienterte kantbrikker, cyan ramme indikerer feilorienterte kantbrikker. Kun pilformen krever en algoritme; de andre fem typene transformeres først til pilformen.*

For å plassere venstre og høyre kantbrikker, med gul som topp og hvit som bunn, og rød som fargen for den første blokken, må du fortsette med å plassere gul-rød kantbrikke + gul-oransje kantbrikke (uthevet). Hovedideen er å få gul-rød kantbrikke ned til bunnlaget ved å bytte den med en kantbrikke fra bunnlaget, og på samme måte få gul-oransje kantbrikke ned til bunnlaget. De to kantbrikkene vil da være motsatt hverandre på bunnlaget. Deretter roterer du topplaget til riktig posisjon, og en M2 U eller M2 U' kan plassere venstre og høyre kantbrikker på U-laget.

For å hjelpe deg med å forstå bedre, har jeg samlet alle seks EO-tilfellene i [Roux Method algoritmebasen på LSE-siden](/no/projects/rubiks-cube/roux#lse). Klikk "se detaljer" for hver illustrasjon for å åpne tilstanden i 3D-kuben, der irrelevante brikker skjules automatisk og de aktuelle kantbrikkene utheves. På samme side finner du også alle tilfeller for UL/UR-plassering og de siste fire kantbrikkene.

Det er ikke nødvendigvis negativt at treningsmengden går ned i denne fasen. Platåfaser kan ikke overvinnes ved å bare øke antall løsninger, men ved å endre en spesifikk dårlig vane. Min erfaring er å endre én ting om gangen.

### Fase fire: 30 sekunder → 28 sekunder (Etter uke 13)

**Data**: Etter 4. august. I hele september var det registrert 122 løsninger, men mange økter ble faktisk ikke loggført. Jeg har nå integrert kuben som et leketøy på skrivebordet mitt; jeg tar den opp og leker når jeg er i godt humør, når jeg er frustrert eller engstelig, i arbeidspauser, eller når jeg kjeder meg. Å leke med kuben har blitt en del av hverdagen. Ao100 har gradvis gått ned fra 29,9 til 28,2.

**Hvor du står fast**: Ingen klare flaskehalser, bare mangel på flyt.

**Hva du bør øve på**:

Hvis gjennomsnittshastigheten din fortsatt er over 30 sekunder, er det eneste du trenger å gjøre å fortsette å øve mye, ikke å pugge nye algoritmer.

Fortsett å trene look-ahead gjennom sakte løsing, og du vil gradvis bli raskere.

Ta frem kuben og lek med den når som helst. Plasser den der du enkelt kan nå den, for eksempel på skrivebordet, slik at du kan leke med den i arbeidspauser. Du kan også regelmessig filme løsningene dine for å se hvor du bruker mest tid, og deretter optimalisere målrettet. Dette er målrettet trening; fremgangen din avhenger ikke av det totale antallet vanlige øvelser, men av antall målrettede øvelser.

Da vil du oppdage at etter å ha overvunnet platåfasen på 30–35 sekunder, har hastigheten din tatt et nytt sprang nedover.

Gratulerer på dette stadiet! I nybegynneres øyne er du nå en svært dyktig cuber!

## Prisen for å ikke pugge algoritmer

Nå må jeg være ærlig. Å ikke pugge algoritmer er ikke gratis.

CMLL-fasen er tregere. Å dekke 42 tilfeller med 9 algoritmer betyr at noen situasjoner må gjøres to ganger. De som kan alle CMLL-algoritmene, er to-tre sekunder raskere enn meg i dette trinnet.

M-lagteknikken har en høyere terskel. Den siste halvdelen av Roux er helt avhengig av M-laget, og M-laget er vanskeligere å snu enn R- og U-lagene. Det er lettere å låse seg, og krever mer av selve kuben.

Ikke bekymre deg for toppnivået. Blant toppspillerne bruker noen Roux-metoden og når verdenseliten; metoden i seg selv har ingen øvre grense. Men for å komme under 15 sekunder må du sannsynligvis lære alle de 42 CMLL-algoritmene. Men det er en annen fase. For å komme under 30 sekunder er det ikke nødvendig.

Dessuten bruker nesten alle verdensklassespillere som løser kube med én hånd, Roux-metoden, fordi den er veldig godt egnet for enhåndsoperasjon.

**Roux-metodens raskeste resultater i offisielle WCA-konkurranser:**

- Enkeltløsning 4,11 sekunder, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippinene), 2023 Valenzuela Cubing Open, anerkjent som den raskeste offisielle enkeltløsningen med Roux. ([Gjenoppbyggingsvideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Gjennomsnitt 5,98 sekunder, også han, 2019, da en asiatisk rekord og den tredje offisielle sub-6 gjennomsnittet noensinne. ([WCA-profil](https://www.worldcubeassociation.org/persons/2017VILL41))
- Han er også [verdensrekordholder i enhåndsløsning](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): gjennomsnitt 8,09, enkeltløsning 6,05 (2024). I enhåndsmiljøet regnes Roux-metoden generelt som den optimale løsningsmetoden.

Jeg synes denne avtalen er verdt det. Du bytter to-tre sekunder i CMLL-fasen mot: å vite hva du gjør i hvert trinn, ikke å glemme det selv om du ikke rører kuben på tre måneder, og å kunne finne en løsning på hvilken som helst ukjent kube.

## Oppsummering

![Løsning fullført](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Å gå fra å kunne løse kuben til å komme under 30 sekunder er ikke en prosess med å pugge algoritmer, men en prosess med å trene hånd, øyne og hjerne til å koordinere.

Fire faser, fire ting: Først lær å observere uten å rotere kuben, deretter lær å bygge den andre blokken uten å ødelegge den første, så lær å se fremover til neste trekk mens du gjør det nåværende, og til slutt la hendene følge øynene.

Algoritmer er ikke kilden til hastighet. Observasjon er.

Lær å bygge positiv forsterkning gjennom fremgang i hvert trinn. Selv ferdighetsøvelser trenger ikke å være kjedelige, spesielt når du oppdager gleden ved å sette en ny rekord. Spesielt i nybegynner- og mellomnivåfasen vil du hver dag oppleve gleden ved å slå rekorder.

Alle algoritmer og tilfeller i artikkelen har jeg samlet i [Roux Method algoritmebasen](/no/projects/rubiks-cube/roux). Gå tilbake dit hvis du står fast.

Gleden ved kube-verdenen er uendelig. Ha det gøy!

## Vedlegg 1: Treningsliste for hver fase

**Fase én (> 60 sekunder)**

- Fiksert observasjonsposisjon, ikke roter kuben under hele løsningen
- Finn neste ønskede farge uten å stoppe opp
- Sakte løsing, verbaliser intensjonen for hvert trekk
- Øv kun på første blokk, gjenta 50 ganger

**Fase to (60 → 40 sekunder)**

- Andre blokk bruker kun R, r, M, U, ikke rør første blokk
- Øv på to-trinns CMLL
- M' U M' U rytmeøvelse, 5 minutter daglig

**Fase tre (40 → 30 sekunder)**

- Stopp etter CMLL og si antall feilorienterte kantbrikker med et øyekast
- Sakte løsing + look-ahead: Øynene ser alltid etter neste brikke
- Minst 20 kvalitetsløsninger daglig

**Fase fire (< 30 sekunder)**

- Filmopptak for å finne pauser
- Fingertriks: R U R' U' enfingersalgoritme, M-lag med ringfinger
- 20 kvalitetsløsninger daglig, ikke bare mengde

## Vedlegg 2: Verktøy

- **csTimer**: [cstimer.net](https://cstimer.net/). Aktiver Ao5 / Ao12 / Ao100 statistikk. Ao100 er ditt reelle nivå, enkeltløsninger er flaks.
- **3D Rubiks kube**: [philoli.com/zh/projects/rubiks-cube](/no/projects/rubiks-cube/). Alle algoritmer i denne artikkelen kan legges inn her for å se animasjoner.
- **Roux Method Nybegynnervennlig algoritmebase**: [philoli.com/zh/projects/rubiks-cube/roux](/no/projects/rubiks-cube/roux). Vanlige innsettingsmønstre for første og andre blokk, de 9 algoritmene for to-trinns CMLL, og alle tilfeller for LSE (EO, UL/UR, de fire siste kantbrikkene). Hver illustrasjon kan åpnes i 3D-kuben, der irrelevante brikker skjules automatisk og de aktuelle kantbrikkene utheves.
- **csTimer Treningsanalysator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/no/projects/rubiks-cube/analyzer). Dra og slipp din eksporterte csTimer-fil her for å se din resultatutvikling, Ao5/Ao12/Ao100-kurver, PB-forbedringer, milepælstabell (når du først oppnådde sub-60, sub-40, sub-30) og Power Law-treningskurve. Alle diagrammene i denne artikkelen kommer herfra. Data behandles kun i nettleseren din og lastes ikke opp. Hvis du ikke har en eksportert fil, kan du laste inn mine 4441 data for å se hvordan det fungerer.

*Denne artikkelen inneholder Amazon-tilknytningslenker: Ved kjøp via disse lenkene mottar jeg en liten provisjon, og prisen din forblir uendret.*

## Mer å lese

- [Hvordan løse Rubiks kube uten å pugge algoritmer: En enkel guide for alle](/no/blog/solve-rubiks-cube-without-formulas)
