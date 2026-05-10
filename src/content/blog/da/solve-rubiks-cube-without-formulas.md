---
layout: blog
title: Sådan løser du Rubiks terning uden formler: En guide selv skolebørn kan følge med i
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Ved hjælp af gruppeteoriens kommutator-principper og Roux-bro-metoden lærer du trin for trin at løse en 3x3 Rubiks terning fra bunden, uden at huske en eneste formel.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Måske er du nybegynder inden for Rubiks terning og har aldrig før løst den helt.

De fleste såkaldte vejledninger på markedet bombarderer dig bare med en masse mærkelige formler og beder dig om at gøre 'sådan her' og 'sådan der', hvorefter terningen er løst. Men du står tilbage uden at forstå hvorfor.

Denne artikel vil være din redning. Du vil lære at løse en Rubiks terning fra bunden uden at huske en eneste formel. Du vil få indsigt i terningens oprindelse og forstå, hvordan den fungerer. Jeg vil guide dig trin for trin fra teori til praksis, så du kan løse en hel terning og lære at observere mønstrene.

Måske vil dette være første gang, du personligt formår at løse en hel Rubiks terning.

<!--more-->

## Rubiks terningens fødsel

Hvorfor er Rubiks terning så fascinerende? Lad os først tale om, hvordan den blev til.

I 1974 skabte den ungarske arkitekturprofessor Ernő Rubik den første prototype af træ. Hans mål var at demonstrere for sine studerende, hvordan forskellige dele kunne bevæge sig uafhængigt uden at ødelægge den samlede struktur. Han malede de seks sider i forskellige farver, og dermed var Rubiks terning født.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Det forbløffende antal kombinationer

En 3x3 Rubiks terning består af 8 hjørnestykker, 12 kantstykker og 6 centerstykker, hvilket giver i alt 26 synlige brikker. Men reelt set er det kun de 20 brikker, der kan bevæge sig – centerstykkerne forbliver faste.

Hvor mange mulige tilstande findes der så? Hele **4.3 × 10¹⁹**.

Hvad betyder det? Det er flere tilstande, end der findes sandkorn på Jorden. Hvis du prøvede en milliard tilstande i sekundet, ville det tage over **1300 år** at gennemgå dem alle. Hvis hver tilstand blev skrevet ned på et stykke papir og stablet ovenpå hinanden, ville tykkelsen svare til 14.000 ture frem og tilbage mellem Jorden og Solen.

Den lille 3x3 terning er sandelig mere, end den ser ud til. På grund af dens innovative og underholdende gameplay, med uendelige variationer og uovertruffen charme, eksploderede den på markedet ved lanceringen og tiltrak utallige entusiaster. Hurtigt udviklede der sig terningkonkurrencer, forskellige discipliner (Speedsolving, Blindfolded, One-Handed, With Feet), diverse løsningsmetoder (Layer by Layer, Corners First, CFOP, Roux-bro-metoden, Petrus, ZZ) og endda terninger i forskellige former og størrelser (fra 2x2 til 7x7, Pyraminx, Skewb, Megaminx) dukkede op.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Terningens fascinerende natur har fået matematikere til at studere matematikken bag den i årtier for at finde 'Guds tal'. Astronauter tager den med ud i rummet, og folk i alle aldre udmærker sig i forskellige konkurrencer. Men i forhold til terningens enorme appel er antallet af spillere stadig relativt lavt. Derfor vil jeg med denne artikel lære alle at løse terningen og nyde den intellektuelle glæde, dette puslespil giver.

## Formlernes dilemma

De fleste løsningsmetoder på markedet kræver, at spillere husker et væld af formler, hvilket er utroligt afskrækkende for begyndere. Før man overhovedet har oplevet glæden ved at løse terningen, bliver man stoppet af formlerne. Den kendte CFOP-metode har over 100 formler, og selv begyndere skal lære snesevis udenad.

Derfor vil jeg i dag dele en metode med jer, hvor I kan nyde at spille med Rubiks terningen uden at skulle huske formler udenad. Den vil give jer mulighed for at løse terningen udelukkende ved observation og forståelse.

## Det matematiske våben: Gruppeteori

Spørgsmål: Hvordan kan man løse Rubiks terning uden at lære en eneste formel udenad?

Her må vi hive det store matematiske våben frem: gruppeteori. Intet problem er umuligt at løse med matematik.

Hvad har Rubiks terning med gruppeteori at gøre? Terningen er faktisk en gruppe. Hvert drej på terningen er en permutation. Denne operation har flere egenskaber: den kan kombineres, den kan vendes, men den er ikke kommutativ (kan ikke ombyttes).

Multiplikation, som vi lærte i folkeskolen, er en kommutativ operation; A × B og B × A giver præcis det samme resultat. Men i terningens gruppe er A og B ikke ækvivalente, hvis de ombyttes – at dreje R efter U er en helt anden operation end at dreje U efter R. Så når vi forstår grupper, forstår vi Rubiks terning. Og at spille med terningen hjælper os også med at forstå grupper.

Tillykke, du har allerede lært forskellen mellem en abelsk gruppe (multiplikation og addition er abelske grupper) og en ikke-abelsk gruppe (Rubiks terning-gruppen).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Bemærk: Standardoperationer på Rubiks terningen repræsenteres typisk med bogstaver. R står for en 90-graders rotation med uret af højre side, U for en 90-graders rotation med uret af topsiden. R' er en 90-graders rotation mod uret. M' er den midterste lag opad, og M er den midterste lag nedad.)

Du kan direkte observere og lære, hvordan terningen drejer, i de online terninganimationer i appendiks.

## Princip: Kernen i at undgå formler: Kommutatoren

For at løse Rubiks terning skal vi opnå følgende tilstand: **at justere positionen af visse brikker uden at ændre positionen af de andre brikker.**

I matematik kaldes denne operation en kommutator, skrevet som **A B A⁻¹ B⁻¹**.

A⁻¹ er den inverse operation af A.

Vi kan bruge en hverdagsanalogi – elevatoren. Antag, at du skal sende en person fra 1. til 3. sal:

1. **A**: Personen går ind i elevatoren
2. **B**: Elevatoren kører op til 3. sal
3. **A⁻¹**: Personen går ud af elevatoren
4. **B⁻¹**: Elevatoren kører tilbage til 1. sal

Resultat: Elevatoren er tilbage på sin oprindelige plads, men personen er flyttet fra 1. til 3. sal. Nøglen er, at personen ikke længere er inde i elevatoren, når den vender tilbage – så omgivelserne er genoprettet, men målet har skiftet position.

For eksempel i Rubiks terning svarer R til en 90-graders rotation med uret af højre side, og R⁻¹ til en 90-graders rotation mod uret. I det tredje trin vendes operationen, så den drejer 90 grader mod uret igen.

Den inverse operation A⁻¹ B⁻¹ genopretter de omgivelser, der blev forstyrret af A B-operationen. Dette gør det muligt kun at udveksle visse specifikke brikker uden at påvirke omgivelserne.

Hvorfor ikke A A⁻¹ B B⁻¹? Fordi hver handling ville annullere sig selv direkte, og brikkerne ville ikke kunne udveksles. Lige efter en operation A ville den inverse operation A⁻¹ annullere den, hvilket samlet set ville svare til intet (f.eks. en 90-graders rotation mod uret af topsiden efterfulgt af en 90-graders rotation med uret). Derfor skal det være **A B A⁻¹ B⁻¹** for at skabe en udveksling.

Dette er den mest grundlæggende udveksling, og den mest praktiske 'atomare' bevægelse i Rubiks terning er: **R U R' U'**.

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Den kan kombineres i lange sekvenser og opnå forskellige permutationseffekter, for eksempel denne: (R U R' U') (R U R' U') (R U R').

Faktisk er dette oprindelsen til formler. Hvorfor findes formler? De er simpelthen en kombination af en række grundlæggende permutationsoperationer, samlet i sekvenser. Ved at udføre disse sekvenser kan man hurtigt opnå specifikke resultater, såsom at løse en bestemt kant eller et hjørnestykke. Forskellige sekvenser kan bruges i kombination for at føre os til den endelige løsning af Rubiks terningen.

Efter at have forstået princippet kan vi endda konstruere vores egne formler. (Hvordan man selv skaber Rubiks terning-formler, vil blive udførligt beskrevet i en kommende artikel).

Så for at løse Rubiks terningen uden at lære en eneste formel udenad, skal vi blot forstå princippet om grundlæggende permutationer. Dette kan anvendes i enhver situation. De mest atomare permutationer vil enten udveksle positionerne af tre hjørnestykker eller tre kantstykker.

## Sådan udveksler du brikker på terningen

Som nævnt tidligere er den mest praktiske 'atomare' udvekslingsbevægelse på Rubiks terningen: **R U R' U'**. Hvis du forstår denne bevægelse dybt, vil du straks kunne løse de første to lag af terningen.

Denne bevægelse betyder i virkeligheden: flyt væk (højre lag), indsæt (målbrikken), sæt tilbage (højre lag), sæt tilbage (toplag).

På denne måde har vi formået at indsætte venstre forreste hjørnestykke og det midterste kantstykke i nederste højre hjørne.

Denne bevægelse kan varieres uendeligt til **U R U' R'**, eller **F R F' R'**, og så videre til enhver position, og der findes endda midterste lag-versioner som **M U M' U'**, eller **U2 R U2 R'**.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

I begyndelsesfasen er terningen mest kaotisk, så vi kan bruge mange af de ovennævnte grundlæggende permutationer til først at løse en side eller et andet lokalt område for at reducere graden af uorden.

Og fordi tilstanden er så rodet, kan den sidste bevægelse, U', der genopretter omgivelserne i **R U R' U'**, endda udelades afhængigt af situationen, og man kan direkte fortsætte med den næste bevægelse. Dette forenkler det til: flyt væk, indsæt, sæt tilbage.

Flyt væk, indsæt, sæt tilbage.

Dette er kerneprincippet, tillykke, du forstår nu, hvordan man spiller med Rubiks terningen!

Men i de senere faser har vi brug for længere permutationstrin for at udveksle specifikke brikker uden at ødelægge den nuværende, delvist løste tilstand.

Tag f.eks. **R U' L' U R' U' L U**. Denne bevægelse kan kun udveksle tre hjørnestykker uden at påvirke noget andet. Opdelt i kommutatorlogik:

```
A   = R U'   (flytter hjørnestykket ud)
B   = L'     (flytter venstre lag en smule)
A⁻¹ = U R'   (genopretter A-operationen)
B⁻¹ = U' L U (genopretter B-operationen, med justering)
```

Effekt: Det nederste venstre hjørnestykke forbliver på sin plads, mens de tre andre hjørnestykker udveksler positioner.

Dette er sandsynligvis de eneste to formler i denne artikel, du behøver at kende. Vi vil lære, hvordan man bruger dem i praksisafsnittet, og du vil forstå dem gennem brug, uden at skulle lære dem udenad.

## Praksis: Løs terningen fra bunden

Nu kommer vi endelig til højdepunktet i denne artikel, hvor jeg trin for trin vil guide dig til at løse Rubiks terningen helt fra bunden, udelukkende ved at observere og forstå.

Forberedelser, du skal bruge:

- En Rubiks terning
- Og en smule tålmodighed (fordi vores primære mål er observation og forståelse)

Først antager vi, at du allerede har en Rubiks terning. Vi vil blande terningen tilfældigt ved hjælp af international standard (med koden: **F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), og derefter vil jeg løse terningen sammen med dig.

Alternativt kan du spille onlineversionen direkte her. Når du klikker på linket, vil du se en blandet terning: [3D Rubiks terning — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Vi kan løse terningen ved at benytte os af den yderst elegante Roux-bro-metode. Bro-metoden adskiller sig fra lag-for-lag-løsningen ved først at løse de 1x2x3 blokke på venstre og højre side, også kendt som venstre og højre bro, og derefter løse toplaget og de resterende brikker.

Bro-metoden er meget fri og fleksibel, og den kræver færre trin end mange kendte metoder. Antallet af formler, der skal huskes, er også relativt lille, da den grundlæggende bygger på kommutatorlogik. Inden for denne ramme kan vi lære at løse terningen uden at lære en eneste formel udenad.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Første trin: Fastlås observationspositionen

Observationspositionen i bro-metoden er fast. Under løsningen behøver vi ikke at dreje terningen ofte, men holder den i samme vinkel for at tænke og løse. Med denne faste side som reference kan vi meget nemt se hjørne- og kantstykker og vide, hvor de skal hen.

Vi kan bruge denne vinkel som reference:

- Front (vendt mod dig): Grøn side
- Venstre: Rød
- Højre: Orange
- Top: Gul
- Bund: Hvid
- Bagside: Blå

### Andet trin: Byg venstre og højre bro

**Rækkefølge for opbygning af venstre bro:**

1. Få først det hvid-røde kantstykke på plads (den nederste venstre søjle)
2. Derefter det blå-røde kantstykke bagtil
3. Og til sidst de to røde hjørnestykker foran

Venstre bro – færdig tilstand:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Denne proces kræver ingen formler; blot observation og forståelse er nok. Med øvelse vil du blive mere og mere flydende.

**F' L**: Brug observation til at finde det rød-hvide kantstykke og få det på plads, med hvid nedad og rød til venstre.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Få det blå-røde kantstykke og hjørnet på plads.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Find de sidste to brikker til venstre bro, og find en måde at få dem på plads. Så har vi en perfekt venstre bro.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Højre bro er tilsvarende**, skift rød ud med orange, og gentag ovenstående trin. Men vær opmærksom på ikke at ødelægge den allerede færdige venstre bro. Hvis du skal låne plads, kan du først flytte venstre bro væk, så operationerne på højre side ikke påvirker den venstre bro, og derefter genoprette venstre bro, når højre sides bevægelser er afsluttet.

**Midten af højre bro**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Første brik i højre bro**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Vi har færdiggjort den sidste blok af højre bro og vil indsætte den på plads. Så vi flytter først venstre bro væk (F') for at skabe plads, flytter derefter blokken (U), og til sidst sætter vi både venstre og højre bro på plads samtidig.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Dette er tilstanden, når begge broer er færdige. Det vigtigste er, at broerne er dannet; de andre farvebrikker behøver vi ikke bekymre os om for nu.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Tredje trin: Løs toplagets hjørnestykker

Når du har løst broerne på begge sider, begynder vi nu at løse de resterende fire hjørnestykker. Her skal vi bruge en tre-cyklus for hjørnestykker, som lader tre hjørner skifte plads fra A til B, B til C, og C tilbage til A.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Hjørnestykke-tre-cyklus

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formel 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Det nederste venstre hjørnestykke forbliver på sin plads</li>
      <li>De tre andre hjørnestykker udveksler positioner <strong>mod uret</strong></li>
      <li>Men deres interne farver roterer <strong>med uret</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formel 2 (Spejlvendt version)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Det nederste højre hjørnestykke forbliver på sin plads</li>
      <li>De tre andre hjørnestykker udveksler positioner <strong>med uret</strong></li>
      <li>Men deres interne farver roterer <strong>mod uret</strong></li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Der er kun fire typer af hjørnestykke-orienteringer, du kan støde på: 0, 1, 2 eller 4 'gode' hjørner.

- **4 gode hjørner**: Færdig tilstand
- **1 godt hjørne** (lille fisk-form): Gentag tre-cyklussen eller spejlvendte version for at færdiggøre
- **0 / 2 gode hjørner**: Placer først et 'dårligt' hjørne et sted, hvor tre-cyklussen ikke påvirker det (nederste venstre hjørne), udfør tre-cyklussen én gang, det vil resultere i 1 godt hjørne, og så er vi tilbage til den tidligere situation.

Nogle gange skal den grundlæggende version af tre-cyklussen udføres to gange for at løse, mens den spejlvendte version kun skal udføres én gang for en fuldstændig løsning. Som nybegynder skal du blot mestre grundversionen, fokusere på observation og forståelse, og så vil du mestre det hele. Denne tre-cyklus, hvor gul vender opad, er også en kendt klassisk formel – 'venstre-højre lille fisk-formlen' – og du kan få en fornemmelse af 'lille fisk'-formen.

Denne formel behøver du heller ikke at lære udenad; observer hvordan de to grønne brikker bevæger sig, og udfør bevægelsen et par gange selv, så bliver du fortrolig med den. Kernen er at udveksle de tre hjørnestykker i toplaget.

På terningen, hvor vi netop har færdiggjort venstre og højre bro, opdager vi to gule brikker på toppen. Vi flytter derfor det nederste venstre hjørne til en ikke-gul brik og udfører en hjørne-tre-cyklus. Derefter udføres yderligere to tre-cyklusser, eller en spejlvendt tre-cyklus, for at sikre, at alle fire hjørner på toplaget har gul opad.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Fire gule hjørner er færdige!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Juster position (juster sidefarverne)

Når alle fire hjørnestykker har gul opad, skal hjørnestykkernes sidefarver også justeres, så hjørnestykkerne kan sættes helt på plads.

Her bruger vi **J-perm varianten**: **R U2 R' U' R U2 L' U R' U' L**.

Logikken bag denne formel kan opdeles i 'flytning af par + logisk udveksling':

- Første del `R U2 R' U' R`: Flytter et par til et sikkert område for midlertidig opbevaring, hvilket skaber plads.
- Anden del `U2 L' U R' U' L`: Bruger tre-cyklus-logik til præcist at udveksle to hjørnestykker.

Effekt: De to hjørnestykker på højre side bytter plads, mens gul forbliver opad, og de andre hjørnestykker forbliver uændrede.

Dette betyder, at du kan udveksle positionen af to vilkårlige tilstødende hjørnestykker (brug U til at justere, hvilke to hjørnestykker der er på højre side). Gentag udvekslingen et par gange, og de fire hjørnestykker vil være helt justeret og på plads.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Denne formel behøver du heller ikke at lære udenad; observer hvordan de to grønne brikker bevæger sig, og udfør bevægelsen et par gange selv, så bliver du fortrolig med den. Kernen er at udveksle de to hjørnestykker på højre side af toplaget, mens gul forbliver opad.

### Fjerde trin: Løs de sidste seks kantstykker (LSE, Last Six Edges)

Her skal du først justere centerstykkerne, så gul er på toppen og hvid i bunden, og derefter justere kantstykkerne.

Der er kun 6 kantstykker tilbage. Dette trin bruger kun to operationer, **M** og **U**, hvilket er meget intuitivt.

#### 4a: Juster orientering (EO, Edge Orientation)

**Bedømmelsesmetode**: Se om kantstykkets hvide/gule klistermærke vender opad eller nedad.

- Op / Ned = God kant ✓
- Til siden = Dårlig kant ✗

**Justeringsmetode**: Brug **M U M'** eller **M' U M** til at vende de 'dårlige' kanter.

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitiv forståelse: M vender det midterste kantstykke opad, U justerer positionen, M' vender det tilbage igen.

Gentag et par gange, indtil alle kantstykkernes hvide/gule farver vender opad eller nedad.

Vi kan kalde kanter med korrekt orientering for 'gode kanter' og kanter med forkert orientering for 'dårlige kanter'.

Som vist er de tre fremhævede kantstykker på toplaget 'dårlige kanter', da de hverken er gule eller hvide.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Justerings-tip**: Der er kun fire typer af 'dårlige kant'-situationer, du kan støde på:

- **0 dårlige kanter**: Færdig tilstand
- **Hverken 0 eller 4 dårlige kanter**: Ændr antallet af dårlige kanter til 4 ved hjælp af **M' U M**.
- **4 dårlige kanter (2 øverst, 2 nederst)**: Udveksl øvre og nedre kanter med **M' U2 M** for at skabe en situation med 3 øverst og 1 nederst.
- **4 dårlige kanter (3 øverst, 1 nederst)**: De tre dårlige kanter på toplaget danner en pil. Drej toplaget, så pilen peger mod den dårlige kant i bundlaget, udfør **M' U M** én gang, og alle fire dårlige kanter vil blive annulleret og blive 'gode kanter'.

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Hvis pilen ikke vises, så gentag **M' U M** flere gange; du vil altid kunne samle den. Når du bliver mere avanceret, kan du gradvist finde mønstrene.

#### 4b: Løs venstre og højre kant (rød og orange)

Find de rød-gule og orange-gule kantstykker (målet er at få dem tilbage til kanterne på venstre og højre side), og brug kantstykke-tre-cyklussen til at placere dem korrekt.

**Tip**:

1. Flyt det rød-gule (eller orange-gule) stykke til over midterlaget, og få det til at synke ned ved at udveksle øvre og nedre kanter (**M' U2 M**).
2. Få det andet orange-gule (eller rød-gule) stykke til at synke ned på den modsatte side.
3. Drej toplaget, så den røde side dukker op over for det nedsunkne rød-gule kantstykke.
4. Drej midterlaget en halv omgang **M2**, og observer toplaget for at sætte det på plads **U**.

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Løs de sidste fire kanter (blå og grøn)

**Tips**:

- Bliv ved med at bruge **tre-cyklussen for kanter** til at udveksle øvre og nedre kanter: **M' U2 M**. Det sidste trin er at sætte på plads ved observation **U2**.
- Hurtigt tip: Placer det hvid-grønne (eller hvid-blå) kantstykke over den ønskede position, udveksl øvre og nedre kanter, og det hvid-grønne (hvid-blå) stykke vil være på plads.

Kun tre situationer:

- Allerede korrekt → Færdig!
- Kræver M2 → Udfør **M2** én gang
- Kræver udveksling → **M' U2 M U2** eller **M U2 M' U2**

Vi kan også forenkle logikken bag tre-kant-udvekslingen: M' bringer midterlaget op, U2 drejer toplaget en halv omgang, M gendanner midterlaget, og U2 gendanner toplaget.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Færdig!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Sammenfatning

Ingen udenadslære af formler, kun kommutator-logikken 'åbn – udfør – luk'. Du vil opdage, at denne proces er langt sjovere end at huske formler, og du behøver ikke at bekymre dig om at glemme det, selv efter mange år; du kan altid selv udlede det.

Den samme tankegang kan bruges til at løse enhver Rubiks terning, inklusive alle mulige mærkelige og uregelmæssige terninger.

Men hvis du vil begive dig ud på speedcubing-vejen, venter der dig en endeløs sti af hård træning. For begyndere bør det dog være muligt at nå under 90 sekunder med lidt øvelse.

Der findes tusindvis af løsningsmetoder; se om du kan finde en mere elegant eller mere bekvem metode.

Glæden ved Rubiks terningens verden er uendelig. Hav det sjovt!

## Appendiks 1: Snydeark til denne Rubiks terning-løsning (Terning-mantraet)

1. **Byg venstre og højre bro: Ved observation og intuition**
   - Tip: Når du er meget dygtig til observation og forudsigelse, kan du baseret på terningens specifikke tilstand prioritere at bygge andre blokke eller bygge venstre og højre bro samtidigt. Dette kan føre til færre trin og er meget fleksibelt.
2. **Løs orienteringen af de fire hjørnestykker på toplaget: Alle fire gule opad**
   - Tre-cyklus for toplagets hjørner: **R U' L' U R' U' L U** (Holder det nederste venstre hjørnestykke på plads, mens de interne farver på de tre andre hjørnestykker roterer med uret)
   - Spejlvendt version af tre-cyklus for toplagets hjørner: **L' U R U' L U R' U'** (Holder det nederste højre hjørnestykke på plads, mens de interne farver på de tre andre hjørnestykker roterer mod uret)
3. **Løs siderne på de fire hjørnestykker på toplaget**
   - **Finjustering af toplagets hjørnestykkers position**: **R U2 R' U' R U2 L' U R' U' L** (Holder alle fire hjørnestykker med gul opad, og udveksler positionen af de to hjørnestykker på højre side)
4. **Skift kantstykkernes orientering, så hvid eller gul vender opad/nedad**
   - Først juster centerstykkerne, så gul er på toppen og hvid i bunden, og juster derefter kantstykkerne.
   - Brug **M' U M** til at ændre antallet af 'dårlige kanter', form en pil, ret pilen mod den dårlige kant, og udfør **M' U M** én gang. Alle fire dårlige kanter vil blive annulleret og sat på plads.
5. **Løs kanterne på venstre og højre side** (rød og orange)
   - Først får du det rød-gule (eller orange-gule) stykke til at synke ned ved at udveksle øvre og nedre kanter (**M' U2 M**).
6. **Løs de resterende kanter** (blå og grøn)
   - Bliv ved med at bruge **tre-cyklussen for kanter** til at udveksle øvre og nedre kanter: **M' U2 M**. Det sidste trin er at sætte på plads ved observation **U2**.

Du behøver slet ikke at huske nogen af ovenstående formler; de er kun tilføjet i appendikset for nem reference. Faktisk vil du, når du selv prøver – mens du observerer og forstår, hvordan de forskellige brikker bevæger sig – blive fortrolig med det efter bare et par gange. Kernen er blot at bytte rundt på de tre hjørnebrikker i det øverste lag.

## Appendiks 2: Nyttige hjemmesider og værktøjer

Jeg har også skabt en 3D Rubiks terning, som du kan spille med online. Du kan dreje den frit, blande og løse den med faste formler, og hver bevægelse er ledsaget af smukke animationer!

[3D Rubiks terning — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Samme scramble-formel som i denne vejledning: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Løsningstrin for venstre-højre broer i denne vejledning: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klik på dette link for at se den blandede terning: [3D Rubiks terning — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Rubiks terning timer brugt af verdensmestre: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
