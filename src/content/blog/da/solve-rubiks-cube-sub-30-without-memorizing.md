---
layout: blog
title: "Hvordan du kommer under 30 sekunder på Rubiks terning uden at lære algoritmer: Også for begyndere"
date: 2026-10-09 12:00:00
tags:
  - Rubiks terning
  - Guide
  - Roux-metoden
  - Speedcubing
  - Målrettet træning
categories: Dagligdags sysler
description: "Det tog 89 dage at gå fra min første løsning til en Ao100 under 30 sekunder, uden at jeg lærte én eneste CFOP-algoritme. Jeg dissekerer fire faser baseret på 4441 tidsmålte løsninger: Hvor man typisk sidder fast i hver fase, hvad man skal øve, og hvorfor Roux-metoden ikke kræver memorisering af algoritmer."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Hvordan du kommer under 30 sekunder på Rubiks terning uden at lære algoritmer: Også for begyndere" />
</figure>

I min forrige [artikel om at løse Rubiks terning uden algoritmer](/da/blog/solve-rubiks-cube-without-formulas/), lærte du at samle en terning ved hjælp af kommutator-logik, helt uden at skulle huske algoritmer. Den artikel har fået en masse positiv feedback.

Hvis du har fulgt vejledningen, kan du sandsynligvis løse den på to-tre minutter nu. Det er måske lidt kluntet, men du får den samlet. Men så dukker et nyt spørgsmål op: Hvordan bliver jeg hurtigere?

Søger du på "speedcubing", vil alle vejledninger fortælle dig det samme: Vil du under 30 sekunder, skal du lære CFOP-algoritmerne udenad. 41 til F2L, 57 til OLL, 21 til PLL – i alt 119 algoritmer. Selv hvis du laver F2L intuitivt, slipper du ikke udenom de 78 til toppen. Kan du ikke huske dem, kan du glemme alt om at blive hurtig.

Denne artikel vil vise dig, at du kan komme under 30 sekunder, helt uden at lære algoritmer udenad.

<!--more-->

Fra den 7. maj 2026, hvor jeg løste terningen for første gang, til den 4. august, hvor min Ao100 kom under 30 sekunder, gik der 89 dage. I den periode lærte jeg ikke en eneste CFOP-algoritme, men legede bare med terningen i min fritid. Her er mine tidsdata fra 4441 registrerede løsninger.

![Resultatkurve for 4441 løsninger](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figur: Resultatkurve for 4441 løsninger. Den grå linje viser hver enkelt løsningstid, den mørke linje viser Ao100-tendensen, og de røde prikker markerer de gange, jeg slog min personlige rekord. Min bedste Ao100 var 28,22 sekunder.*

Med bevidst og målrettet træning samt en stabil træningsfrekvens kan enhver gå fra nybegynder til sub-30 på få måneder.

Hvad vil det sige at være under 30 sekunder? Ved [det første Rubiks terning verdensmesterskab i 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) var vindertiden 22,95 sekunder, hvilket senere blev anerkendt af WCA som den første officielle verdensrekord. Tiendepladsen var 29,11 sekunder, opnået af Jessica Fridrich selv, skaberen af CFOP, som vi skal snakke om i næste afsnit. Med andre ord: En sub-30, som en amatør i dag kan opnå på få måneder, ville have placeret dig i verdens top ti i 1982.

Nu vil jeg dele med dig, hvordan jeg skridt for skridt nåede dertil, og give dig hele min træningsmetode.

## Hvorfor speedcubing-verdenen fokuserer på at lære algoritmer udenad

Lad os først få én ting på plads: Hvorfor er "hurtighed" og "at lære algoritmer udenad" så tæt forbundet i folks bevidsthed?

I begyndelsen af 1980'erne udviklede den tjekkiskfødte professor Jessica Fridrich (senere forsker i digital retsvidenskab ved Binghamton University i USA) en lag-for-lag løsningsmetode, som senere blev kendt som CFOP (Cross, F2L, OLL, PLL). Idéen bag denne metode er at opregne alle mulige scenarier for det øverste lag og tildele hver situation en optimal algoritme. Du genkender situationen, udfører algoritmen og behøver ikke at tænke.

![Jessica Fridrich og terningen på hendes kontor](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figur: Jessica Fridrich og terningen på hendes kontor. I 1982 tog hun 10. pladsen ved det første verdensmesterskab med 29,11 sekunder, og CFOP er opkaldt efter hende (Fridrich-metoden).*

Denne metode er ekstremt hurtig. Næsten alle verdensrekorder er sat med CFOP. Derfor underviser alle tutorials i den, alle videoer forklarer den, og "at lære speedcubing" er blevet synonymt med "at lære CFOP", hvilket igen er lig med at lære 119 algoritmer udenad.

Men bemærk: "At lære algoritmer udenad" er en karakteristik for CFOP-metoden, ikke en egenskab ved hurtighed i sig selv. CFOP kræver memorisering, fordi den vælger udtømmende at dække alle tilfælde. Dette er prisen for den tilgang.

Findes der metoder, der ikke følger den udtømmende tilgang? Ja.

## Løsningen uden algoritmer: Roux-metoden

I 2003 præsenterede franskmanden Gilles Roux en helt anderledes tilgang. I stedet for at bygge lag for lag handler det om først at konstruere to 1×2×3 "blokke" – en venstre og en højre – derefter at håndtere de fire hjørnebrikker på det øverste lag, og til sidst er der kun seks kantbrikker tilbage, som afsluttes med M- og U-drejninger.

![Gilles Roux i konkurrence](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figur: Gilles Roux i konkurrence. Udklip fra en ældre konkurrencevideo, billedet er AI-restaureret og forstørret.*

I den forrige artikel løste vi den én gang ved hjælp af denne ramme. Lad os nu genopfriske de fire trin, men denne gang med fokus på, "hvad du skal huske i hvert trin":

| Trin | Indhold | Algoritmer der skal huskes |
| --- | --- | --- |
| 1. Første blok (FB) | Byg en 1×2×3 blok | 0, ren observation |
| 2. Anden blok (SB) | Byg den anden symmetrisk | 0, ren observation |
| 3. CMLL | Orientér og permuter de fire hjørnebrikker på det øverste lag | 9, alle kan udledes fra 3-cykler |
| 4. LSE | De sidste seks kantbrikker | 0, bruger kun U- og M-drejninger |

Tre ud af fire trin kræver ingen algoritmer. Den eneste del, der kræver det, er CMLL, som samlet set har 42 tilfælde, men du behøver ikke at lære 42 algoritmer. Den hjørne-3-cykel, vi gennemgik i den forrige artikel, R U' L' U R' U' L U, sammen med dens spejlvendte version og et par varianter, kan dække alle tilfælde, det er bare en smule langsommere.

![Roux-metodens fire trin](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figur: Roux-metodens fire trin, hvor hvert trin kun viser de brikker, der er placeret korrekt indtil det punkt: Første blok → Anden blok → CMLL (fire hjørner på toppen) → LSE (de sidste seks kanter). Skærmbillede fra 'Løsning'-panelet på min 3D-terning-side.*

Det er derfor, Roux-metoden kan bruges uden at lære algoritmer: Den komprimerer den del, der kræver memorisering, til et meget lille hjørne, og overlader resten til observation, forståelse og øvelse.

## Fra 165 sekunder til 28 sekunder: Fire faser

Her er den vej, jeg selv har fulgt. Jeg har markeret start og slut for hver fase med data og beskrevet, hvor jeg sad fast, og hvad jeg øvede i den periode. Dine flaskehalse kan være anderledes end mine, men rækkefølgen vil sandsynligvis være den samme.

![Tidsforløbet for de fire faser](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figur: Tidsforløbet for de fire faser. Fase et: 3 uger, fase to: 11 dage, fase tre: to måneder, fase fire: indtil nu.*

### Fase et: 165 sekunder → 60 sekunder (uge 1–3)

**Data**: 7. maj til 27. maj. Første uge i gennemsnit 165 sekunder, tredje uge 68 sekunder.

**Hvor du sidder fast**: Første blok er meget uvant, og det tager lang tid at finde hvert hjørne-kant-par. Efter at have fundet et par, stopper begyndere ofte for at observere yderligere.

![Hvor begyndere bruger deres tid](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figur: Hvor begyndere bruger deres tid. Hænderne holder pause, mens øjnene søger frem og tilbage på terningen; 'søgetiden' er mange gange længere end 'drejetiden'.*

**Hvad skal du øve**:

Den største fjende i denne fase er ikke langsomme hænder, men langsomme øjne. Du bruger langt mere tid på at "finde" brikker end på at "dreje" terningen. Derfor:

-   Fast observationsposition, drej ikke terningen. Som nævnt i den forrige artikel, er Roux-metodens observationsvinkel fast. I denne fase skal du gøre det til muskelhukommelse ikke at rotere terningen. Hver gang du får lyst til at dreje terningen, stopper du op og spørger dig selv: Kan jeg se den brik, jeg leder efter, fra denne vinkel?
-   Slow solving. Tag ikke tid, men bevægelserne skal være flydende og uden pauser. Hver bevægelse kan være meget langsom, men uden stop. Essensen er, at mens dine hænder udfører den nuværende bevægelse, skal dine øjne fokusere på den næste. Dette er kernen i slow solving. Det lyder måske som om, du bliver langsommere, men i virkeligheden træner du dine øjne i at se forholdet mellem brikkernes nuværende placering og deres korrekte position.
-   Øv kun første blok. Scramble, byg første blok, scramble igen, byg første blok igen. Gå ikke videre. Første blok er det frieste trin i Roux-metoden og det trin, der bedst træner din observationsevne.

Lær ingen nye algoritmer i denne fase. Din nuværende flaskehals er ikke algoritmer.

### Fase to: 60 sekunder → 40 sekunder (uge 4–5)

**Data**: 27. maj til 7. juni, 11 dage. Dette var den hurtigste nedgang i hele processen, og også den periode hvor jeg trænede mest, med 723 løsninger i den første uge af juni.

**Hvor du sidder fast**: Ikke-flydende bevægelser. Terningen sætter sig fast.

**Hvad skal du øve**:

I denne fase skal du optimere bevægelserne i hvert trin og øge din fortrolighed med dem, baseret på din forståelse.

-   Anden blok. Anden blok er sværere end første blok, fordi der er halvt så meget plads, og den færdige første blok må ikke ødelægges. De vigtigste drejninger er R, r (de to højre lag), M og U. I denne fase skal du lære at bruge r og M i stedet for R til at flytte brikker, så den første blok aldrig bliver rørt. Optimering af bevægelsestrin er tidsbesparende. For eksempel svarer tre uretsomdrejninger til én mod urets.
-   Mestring af M-laget. Roux-metodens sidste trin består udelukkende af M og U, og hvor flydende du kan dreje M-laget, bestemmer direkte din nedre grænse. Brug ringfingeren eller langfingeren til at skubbe M, og begynd at øve rytmer som M' U M' U.
-   CMLL mønstergenkendelse. I den forrige artikel "testede" vi os frem til de fire hjørner med 3-cykler. Nu skal du begynde at se først og derefter handle: Inden du drejer det øverste lag, skal du hurtigt se på de fire hjørners gule orientering, bedømme om der er 0, 1, 2 eller 4 orienterede hjørner, og derefter udføre den tilsvarende handling. Du kan også opnå en betydelig effektivitetsforbedring med et minimalt antal algoritmer, hvilket er meget omkostningseffektivt. En stor del af disse algoritmer behøver ikke at blive memoreret slavisk; du forstår dem, mens du udfører dem.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Perspektiv når anden blok bygges" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figur venstre: Perspektiv når anden blok bygges. Første blok er færdig, og kun R, r, M, U drejninger bruges til at indsætte hjørne-kant-parret i højre side, så første blok aldrig røres. Figur højre: M' U M, en af de mest brugte bevægelsessekvenser i anden halvdel af Roux-metoden. M-laget op, U-laget drejes, M-laget ned – tre trin der udskifter et kantpar på U-laget og M-laget.*

Du kan se min samling af [Roux-metodens algoritmer](/da/projects/rubiks-cube/roux#cmll). CMLL-siden er to-trins: 7 orienteringsalgoritmer + 2 permutationsalgoritmer, i alt 9. Dette er et yderst omkostningseffektivt valg for at øge hastigheden, let at lære, og hver mestret gruppe kan spare dig omkring 1-2 sekunder. Med lidt øvelse vil du hurtigt mestre dem. Nogle er allerede introduceret i den forrige artikel, og du behøver ikke huske dem alle for at komme under 30 sekunder.

![To-trins CMLL, første trin: syv hjørneorienteringer](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figur: To-trins CMLL, første trin: syv hjørneorienteringer. I fugleperspektivet er gul den opadvendte farve på toppen, og de små striber på ydersiden angiver, at hjørnets topfarve vender mod siden. Genkend mønstre efter antallet af gule hjørner: 0 er H eller Pi, 1 er S eller AS, 2 er U, T eller L.*

Efter at have orienteret de gule sider mod toppen, kan du bruge disse to algoritmer til at permuting hjørnernes sidefarver.

Hvis én side allerede har matchende farver, for eksempel rød på samme side, roteres den til venstre, hvorefter du kan vælge den tilstødende ombytningsalgoritme. Hvis ingen sider har matchende farver, vælges diagonal ombytningsalgoritmen.

![To-trins CMLL, andet trin: to hjørnepositioner](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figur: To-trins CMLL, andet trin: to hjørnepositioner. I venstre billede er de to hjørner på venstre side allerede matchende røde, og en tilstødende ombytning bruges; i højre billede er ingen sider matchende, og en diagonal ombytning bruges.*

Du kan forstå hver gruppe af algoritmer gennem masser af slow solving. Betragt dem ikke som formler, men som faste bevægelsessekvenser, som du selv langsomt kunne opdage. Men at liste dem her kan spare dig for omveje.

Der er én ting mere, der giver øjeblikkelige resultater, bedre end nogen træning: Brug lidt penge på en ny terning. Hvis du stadig har en gammel terning, der knirker og sætter sig fast, så køb en moderne 3x3 med magneter. De nyeste terninger vil lade dig opleve ingeniørmæssig optimering: glatte drejninger, automatisk justering og næsten ingen låsninger. Blot ved at skifte terning kan din gennemsnitstid falde med op til 15 sekunder. Et omkostningseffektivt valg er [MoYu RS3 M V5 (MagLev + Ball-Core version)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), som koster omkring tyve dollars og er god nok til at nå sub-20.

### Fase tre: 40 sekunder → 30 sekunder (uge 5–13, to måneder)

**Data**: 7. juni til 4. august. Min Ao100 faldt fra 39,8 sekunder til 29,9 sekunder over 58 dage. I denne fase kunne jeg indimellem få en tid under 30 sekunder, men kun med rigtig meget held. Og efterhånden som den gennemsnitlige løsningstid falder, vil det blive eksponentielt sværere at forbedre sig med blot ét sekund.

![Dagligt gennemsnitligt resultat](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figur: Dagligt gennemsnitligt resultat. Efter midten af juni fladede kurven næsten ud og lå mellem 30-40 sekunder i to måneder.*

Dette er plateau-fasen. Alle oplever den, og jeg tilbragte to måneder her.

**Hvor du sidder fast**: Det tager lang tid at løse de seks kantbrikker på det øverste lag. Logikken er ikke forstået, og hver gang bruger man unødvendig tid på gentagne forsøg. Første og anden blok er stadig ikke flydende nok.

**Hvad skal du øve**:

-   EO-genkendelse. Som nævnt i den forrige artikel er der kun få tilfælde af fejlorienterede kanter: 0, ikke 0 og ikke 4, 4 (2 oppe, 2 nede), 4 (alle på U-laget), 4 (3 oppe, 1 nede). Målet i denne fase er: I det øjeblik blokkene er bygget, skal du uden at tælle straks kunne se, hvilken type det er. Øv dig ved at scramble terningen, udfør kun op til CMLL, hold derefter pause, sig antallet af fejlorienterede kanter, og fortsæt så.
-   Mange forstår ikke bevægelserne her. EO-fasen handler i sidste ende om at konstruere en 'pil'-form med 3 fejlorienterede kanter på U-laget og 1 på D-laget. Fordi en fuldt orienteret tilstand kun er én scramble væk fra pil-formen, er pil-formen – tænkt baglæns – det sidste trin før en komplet løsning. Uanset antallet af fejlorienterede kanter er målet altid at skabe en pil. Hvis der er 4 fejlorienterede kanter på U-laget, kan du bytte et op- og ned-kantpar for at flytte en fejlorienteret kant ned og skabe pil-formen. Hvis der er 2 oppe og 2 nede, bytter du et op- og ned-kantpar for at flytte en fejlorienteret kant op og skabe pil-formen. Hvis der er 1 oppe og 1 nede, eller 2 oppe, kan du bruge M' U M til først at skabe en af de tidligere situationer og derefter konstruere pil-formen. Du kan gennem omfattende observation og overvejelser selv finde frem til de bedste trin for 1/1-situationen.
-   Øv look-ahead intensivt. Dette er det vigtigste skridt fra 40 til 30 sekunder, og også det mest kontraintuitive: Drej langsommere, se længere frem. Når du bygger første blok, skal dine øjne ikke fokusere på den brik, du er ved at indsætte, men i stedet søge efter den næste brik. Det vil føles meget akavet i starten, og dine tider vil sandsynligvis blive dårligere. Men hold fast i en uge, og det vil pludselig forbedre sig markant.
-   CMLL uden tøven. Hvis du skal tænke over en bevægelse, hver gang du skal udføre den, så sidder den ikke i fingrene endnu. Øv hver enkelt bevægelse 50 gange, indtil din hånd reagerer automatisk, når du ser mønsteret.

![Pil-formen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figur: Pil-formen. Tre fejlorienterede kanter på U-laget (fremhævet med cyan) danner en pil, der peger mod den fejlorienterede kant på D-laget. Med et M' U M kan alle fire placeres korrekt samtidigt. [Åbn denne tilstand i 3D-terningen](/da/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) for at se trin for trin.*

![De seks EO-tilfælde](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figur: De seks EO-tilfælde. Etiketten i øverste venstre hjørne angiver antallet af fejlorienterede kanter (U-lag / D-lag). Gule kanter er orienterede, cyan-rammer er fejlorienterede. Kun pil-formen kræver en algoritme; de andre fem omdannes først til pil-formen.*

For orientering af de venstre og højre kantbrikker, med gul som top og hvid som bund, og den første blok som rød, er det de gul-røde og gul-orange kantbrikker (fremhævet), der skal placeres. Hovedideen er at få den gul-røde kantbrik ned til D-laget via en op/ned-kantbytte, og det samme for den gul-orange kantbrik. Når begge kantbrikker er på D-laget og modsat hinanden, drejes U-laget til den korrekte position, hvorefter et M2 U eller M2 U' vil orientere de venstre og højre kantbrikker på U-laget.

For at hjælpe med forståelsen har jeg samlet alle seks EO-tilfælde på [LSE-siden i Roux-metodens algoritmesamling](/da/projects/rubiks-cube/roux#lse). Klik på "se detaljer" ved hvert billede for at åbne den tilsvarende tilstand i 3D-terningen, hvor fejlorienterede kanter automatisk fremhæves. På samme side finder du også alle tilfælde for UL/UR-orientering og de sidste fire kanter.

En faldende træningsmængde er ikke dårligt i denne fase. Du kommer ikke igennem et plateau ved at kaste mere tid efter det, men ved at ændre en specifik dårlig vane. Min erfaring er, at man kun ændrer én ad gangen.

### Fase fire: 30 sekunder → 28 sekunder (efter uge 13)

**Data**: Efter 4. august. I hele september var der registreret 122 træninger, men mange øvelser blev faktisk ikke logget. Jeg har nu integreret terningen som et skrivebordslegetøj, som jeg tager op, når jeg har lyst – et par gange, når jeg er i godt humør, når jeg er frustreret eller ængstelig, i arbejdsfrie øjeblikke eller når jeg keder mig. Ao100 faldt gradvist fra 29,9 til 28,2.

**Hvor du sidder fast**: Ingen specifik flaskehals, blot manglende rutine.

**Hvad skal du øve**:

Hvis din gennemsnitlige hastighed stadig er over 30 sekunder, er det eneste, du skal gøre, at fortsætte med at øve dig meget, i stedet for at lære nye algoritmer udenad.

Ved konstant at øve look-ahead gennem slow solving, vil du gradvist blive hurtigere.

Tag terningen frem og leg med den, når du har lyst. Placer den et sted, hvor du nemt kan nå den, for eksempel på dit skrivebord, så du kan lege med den i pauserne fra arbejdet. Du kan også regelmæssigt optage videoer af dine løsninger for at se, hvilke faser der tager mest tid, og derefter optimere målrettet. Dette er bevidst træning; din fremgang afhænger ikke af det samlede antal almindelige øvelser, men af antallet af dine målrettede træningssessioner.

Derefter vil du opdage, at når du har passeret flaskehalsen på 30-35 sekunder, falder din hastighed endnu et trin.

Når du når denne fase, så tillykke! I en nybegynders øjne er du allerede en meget dygtig spiller!

## Prisen for at undgå algoritmer

Nu vi er ved det, skal vi være ærlige. At undgå algoritmer udenad er ikke gratis.

CMLL-fasen er langsommere. At dække 42 tilfælde med 9 algoritmer betyder, at nogle situationer skal udføres to gange. Folk, der kender alle CMLL-algoritmer, er to-tre sekunder hurtigere end mig i dette trin.

M-lags-fingertricks har en højere tærskel. Anden halvdel af Roux-metoden er helt afhængig af M-laget, som er sværere at dreje end R og U, lettere at sætte fast, og stiller højere krav til terningen selv.

Bekymr dig ikke om loftet. Blandt topspillere er der også dem, der bruger Roux-metoden til at nå verdenseliten; metoden i sig selv har ingen øvre grænse. Men for at komme under 15 sekunder, skal du sandsynligvis lære alle 42 CMLL-algoritmer. Det er dog en anden fase. For at komme under 30 sekunder er det ikke nødvendigt.

Desuden bruger næsten alle verdensklasse OH-cubere (én-hånds løsere) Roux-metoden, fordi den er yderst velegnet til én-hånds betjening.

**Hurtigste resultater med Roux-metoden i officielle WCA-konkurrencer:**

-   Single 4,11 sekunder, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippinerne), Valenzuela Cubing Open 2023, anerkendt som den hurtigste officielle Roux-single ([rekonstruktionsvideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Gennemsnit 5,98 sekunder, også ham, 2019. Dengang var det en asiatisk rekord og også det tredje officielle sub-6 gennemsnit nogensinde ([WCA-profil](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Han er også [verdensrekordholder i én-hånds speedcubing](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): Gennemsnit 8,09, single 6,05 (2024). I OH-miljøet anses Roux generelt for at være den optimale løsningsmetode.

Jeg synes, denne byttehandel er det værd. Du bytter to-tre sekunders CMLL-tid for at vide, hvad du gør i hvert trin, ikke at glemme det, selv efter tre måneder uden terningen, og at kunne udlede en løsning, uanset hvilken ukendt terning du får fat i.

## Opsummering

![Løsning fuldført](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

At gå fra at kunne løse terningen til at komme under 30 sekunder er ikke en proces, der handler om at lære algoritmer udenad; det er en proces, der træner koordinationen mellem hænder, øjne og hjerne.

Fire faser, fire ting: Først lær at se uden at dreje terningen, derefter lær at bygge anden blok uden at ødelægge første blok, så lær at se frem til næste trin, mens du udfører det nuværende, og til sidst lad dine hænder følge øjnene.

Algoritmer er ikke kilden til hastighed. Observation er.

Lær at opbygge positiv feedback gennem fremskridt i hvert trin. Selv rutinepræget øvelse behøver ikke at være kedelig, især når du oplever glæden ved endnu en gang at slå din rekord. Især i begynder- og mellemstadiet vil du dagligt opleve glæden ved at slå rekorder.

Alle algoritmer og tilfælde nævnt i artiklen har jeg samlet i [Roux-metodens algoritmesamling](/da/projects/rubiks-cube/roux). Kommer du i tvivl, kan du altid slå dem op der.

Verdenen af Rubiks terninger er fuld af uendelig glæde. Hav det sjovt!

## Bilag 1: Tjekliste for hver fase

**Fase et (> 60 sekunder)**

-   Fast observationsposition, rotér ikke terningen under hele løsningen
-   Find den næste ønskede farve uden at stoppe
-   Slow solving, sig hensigten med hvert træk
-   Øv kun første blok, gentag 50 gange

**Fase to (60 → 40 sekunder)**

-   Brug kun R, r, M, U til anden blok, rør ikke første blok
-   Øv to-trins CMLL
-   Øv M' U M' U-rytmen, 5 minutter dagligt

**Fase tre (40 → 30 sekunder)**

-   Stop efter CMLL og sig antallet af fejlorienterede kanter med det samme
-   Slow solving + look-ahead: Øjnene ser altid efter den næste brik
-   Mindst 20 kvalitetsløsninger dagligt

**Fase fire (< 30 sekunder)**

-   Optag video for at finde pauser
-   Fingertricks: R U R' U' med én finger, M-laget med ringfingeren
-   20 kvalitetsløsninger dagligt, uden at overanstrenge dig

## Bilag 2: Værktøjer

-   **csTimer**: [cstimer.net](https://cstimer.net/). Aktivér Ao5 / Ao12 / Ao100 statistik. Din Ao100 afspejler dit sande niveau; enkelte løsninger er held.
-   **3D-terning**: [philoli.com/zh/projects/rubiks-cube](/da/projects/rubiks-cube/). Alle algoritmer i denne artikel kan indtastes her for at se animationer.
-   **Roux-metodens algoritmesamling for begyndere**: [philoli.com/zh/projects/rubiks-cube/roux](/da/projects/rubiks-cube/roux). Almindelige indsættelsesmetoder for første og anden blok, de 9 to-trins CMLL-algoritmer, og alle LSE-tilfælde (EO, UL/UR, de sidste fire kanter). Hvert tilfælde kan åbnes i 3D-terningen, hvor irrelevante brikker skjules, og de brikker, der skal flyttes, fremhæves automatisk.
-   **csTimer Træningsanalysator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/da/projects/rubiks-cube/analyzer). Træk din eksporterede csTimer-fil ind her, og du kan se din resultatudvikling, Ao5/Ao12/Ao100-kurver, PB-fremskridt, en milepælstabel (hvornår du første gang nåede sub-60, sub-40, sub-30) og Power Law-træningskurven. Alle diagrammer i denne artikel kommer herfra. Data behandles kun i din browser og uploades ikke. Hvis du ikke har en eksporteret fil, kan du indlæse mine 4441 data for at se effekten.

*Denne artikel indeholder Amazon affiliate-links: Ved køb via links modtager jeg en lille provision, uden at din pris ændres.*

## Læs mere

-   [Hvordan du løser Rubiks terning uden at lære algoritmer: Også for begyndere](/da/blog/solve-rubiks-cube-without-formulas)
