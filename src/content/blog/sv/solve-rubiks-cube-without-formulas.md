---
layout: blog
title: Hur du löser Rubiks kub utan att memorera formler: Även en grundskoleelev kan förstå
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Använd logiken bakom gruppteorins kommutatorer och Roux bro-metoden för att lära dig steg för steg hur du löser en 3x3 Rubiks kub från grunden, utan att memorera några formler.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="En helt löst Rubiks kub" />
</figure>

Kanske är du nybörjare på Rubiks kub och har aldrig lyckats lösa den helt.

De flesta handledningar som finns på marknaden ger dig bara en massa konstiga formler och säger att om du bara gör så här, och sedan så där, så kommer kuben att lösas. Men även efter att du har följt instruktionerna förstår du fortfarande inte varför det fungerar.

Den här artikeln kommer att vara din räddare i nöden. Du kommer att lära dig att lösa en Rubiks kub från grunden, utan att memorera några formler. Vi kommer att utforska kubens ursprung och förstå hur den fungerar. Jag kommer att guida dig steg för steg, från teori till praktik, för att lösa en komplett kub och lära dig hur du ska observera.

Kanske blir det här första gången du själv lyckas lösa en Rubiks kub helt och hållet.

<!--more-->

## Kubens födelse

Vad är det som gör Rubiks kub så fascinerande? Låt oss först prata lite om hur den kom till.

År 1974 skapade den ungerska arkitekturprofessorn Ernő Rubik den första prototypen av en kub i trä. Hans avsikt var att demonstrera för sina studenter hur olika delar kunde röra sig oberoende av varandra utan att förstöra helhetens struktur. Han målade de sex sidorna i olika färger, och därmed var Rubiks kub född.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Ernő Rubiks kubprototyp" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Porträtt av Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Förbluffande antal kombinationer

En 3x3 Rubiks kub består av 8 hörnbitar, 12 kantbitar och 6 centrumbitar, vilket ger totalt 26 synliga bitar. Men i praktiken är det bara de 20 bitarna, exklusive de sex centrumbitarna, som kan flyttas.

Så, hur många möjliga tillstånd finns det totalt? **4.3 × 10¹⁹**.

Vad innebär det? Antalet tillstånd är större än antalet sandkorn på jorden. Om man skulle försöka en miljard tillstånd per sekund skulle det ta över **1300 år** att gå igenom alla. Och om man skrev ner varje unikt tillstånd på ett papper och staplade dem, skulle höjden motsvara en resa tur och retur från jorden till solen, 14 000 gånger.

Den lilla 3x3 Rubiks kub är verkligen mer än den ser ut att vara. Dess innovativa och underhållande spelstil, med oändliga variationer och en enorm charm, gjorde att den exploderade på marknaden redan vid lanseringen och lockade entusiaster från alla håll att ivrigt prova den. Snart utvecklades tävlingar i kublösning, med olika spelstilar (Speedsolving, blindlösning Blindfolded, enhands One-Handed, med fötterna With Feet), olika lösningsmetoder (lager-för-lager Layer by Layer, hörn först Corners First, CFOP, Roux bro-metoden, Petrus, ZZ), och till och med olika typer av kuber (från 2x2 till 7x7, Pyraminx, Skewb, Megaminx) dök upp i en strid ström.

![Varianter av Rubiks kub](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Kubens dragningskraft är så stor att matematiker har ägnat decennier åt att studera dess matematik i jakten på "Guds nummer", astronauter har tagit med den ut i rymden, och människor i alla åldrar har utmärkt sig i olika tävlingar. Men trots kubens enorma charm är antalet spelare fortfarande relativt få. Därför vill jag med den här artikeln lära alla att lösa Rubiks kub och njuta av den glädje som detta tankespel ger.

## Formlernas dilemma

De flesta lösningsmetoder som finns på marknaden kräver att spelaren memorerar många formler. Detta är väldigt avskräckande för nybörjare som hindras av formlerna innan de ens hunnit uppleva glädjen i att lösa kuben. Den välkända CFOP-metoden har över 100 formler, och även nybörjare måste lära sig dussintals.

Därför vill jag idag dela med mig av en metod som låter dig njuta av att lösa Rubiks kub utan att behöva memorera några formler. Du kommer att kunna lösa kuben enbart genom observation och förståelse.

## Matematikens kraftpaket: Gruppteori

Fråga: Hur kan man lösa Rubiks kub utan att memorera en enda formel?

Här tar vi fram matematikens kraftpaket: gruppteori. Det finns inget problem som inte kan lösas med matematik.

Så, vad har Rubiks kub med gruppteori att göra? Kuben är faktiskt en grupp. Varje vridning på kuben är en permutationsoperation. Denna operation har flera egenskaper: den kan kombineras, den kan reverseras, men den är inte kommutativ.

Multiplikation, som vi lärde oss i grundskolan, är en kommutativ operation; A × B ger samma resultat som B × A. Men i Rubiks kub-gruppen är A och B inte ekvivalenta när de byts plats. Att först göra R och sedan U är en helt annan operation än att först göra U och sedan R. Så när vi förstår grupper, förstår vi Rubiks kub. Och att leka med kuben hjälper oss i sin tur att förstå grupper.

Grattis, du har nu lärt dig skillnaden mellan en abelsk grupp (där multiplikation och addition är abelska grupper) och en icke-abelsk grupp (som Rubiks kub-gruppen).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="Olika effekter av R U vs U R - Del 1" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="Olika effekter av R U vs U R - Del 2" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Tillägg: Standardoperationer på Rubiks kub representeras oftast av bokstäver. R står för att vrida det högra lagret 90 grader medurs, U för att vrida det övre lagret 90 grader medurs, R' är 90 grader moturs, M' är mellanskiktet uppåt, och M är mellanskiktet nedåt.)

Du kan direkt observera och lära dig hur kuben vrids i den interaktiva kubanimationen i bilagan.

## Principen: Kärnan i att inte memorera formler: Kommutatorn

För att lösa Rubiks kub måste vi kunna uppnå följande tillstånd: **att ändra positionen på vissa bitar utan att påverka de andra bitarnas positioner.**

Matematiskt kallas denna operation för en kommutator och skrivs som **A B A⁻¹ B⁻¹**.

A⁻¹ är den inversa operationen till A.

Vi kan använda en vardaglig analogi – hissen. Anta att du vill flytta en person från första våningen till tredje våningen:

1. **A**: Personen går in i hissen
2. **B**: Hissen åker upp till tredje våningen
3. **A⁻¹**: Personen går ur hissen
4. **B⁻¹**: Hissen åker tillbaka till första våningen

Resultat: Hissen är tillbaka på sin ursprungliga plats, men personen har flyttats från första till tredje våningen. Nyckeln är att personen inte längre befinner sig i hissen när den återvänder – så omgivningen återställs, men målet har bytt position.

På Rubiks kub motsvarar till exempel R en vridning av det högra lagret 90 grader medurs, och i det tredje steget vrids det sedan 90 grader moturs med R⁻¹.

Den inversa operationen A⁻¹ B⁻¹ återställer den miljö som tidigare påverkats av operationerna A B. På så sätt uppnår man att endast specifika bitar byter plats, utan att omgivningen påverkas.

Varför inte A A⁻¹ B B⁻¹ då? Jo, för då skulle varje rörelse direkt ta ut den andra, och ingen bit skulle byta plats. Direkt efter en operation A följer den inversa operationen A⁻¹, vilket tillsammans motsvarar att inget har gjorts (som att vrida toppskiktet 90 grader moturs, och sedan direkt 90 grader medurs). Därför måste det vara **A B A⁻¹ B⁻¹** för att en förflyttning ska ske.

Detta är den mest grundläggande förflyttningen, och den mest intuitiva "atomära" rörelsen på Rubiks kub är: **R U R' U'**

![R U R' U' demonstration](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Den kan kombineras i längre sekvenser för att uppnå olika permutationseffekter, som till exempel: (R U R' U') (R U R' U') (R U R')

Detta är faktiskt källan till formlerna. Varför finns det formler? De är helt enkelt en kombination av en serie grundläggande permutationsoperationer, sammansatta till sekvenser. Genom att utföra dessa sekvenser kan man snabbt uppnå specifika resultat, som att återställa en viss kantbit eller en hörnbit. Olika sekvenser kan kombineras för att leda oss till den slutliga lösningen av Rubiks kub.

När vi väl förstår principen kan vi till och med konstruera våra egna unika formler. (Hur du skapar dina egna Rubiks kub-formler kommer att förklaras mer i detalj i nästa del.)

Så för att kunna lösa Rubiks kub utan att memorera en enda formel behöver vi bara förstå logiken bakom grundläggande permutationer, och sedan kan vi tillämpa den i alla andra situationer. De mest grundläggande "atomära" permutationsrörelserna kommer att byta plats på tre hörnbitar, eller byta plats på tre kantbitar.

## Hur man utför förflyttningar på kuben

Som nämnts tidigare motsvarar den mest intuitiva "atomära" förflyttningsrörelsen på Rubiks kub: **R U R' U'**. Om du djupt förstår denna rörelse kommer du omedelbart att kunna lösa kubens första två lager.

Denna rörelse innebär egentligen: flytta undan (högra lagret), infoga (målbiten), återställ (högra lagret), återställ (övre lagret).

På så sätt har vi infogat den vänstra främre hörnbiten och den mellersta kantbiten i det nedre högra hörnet.

Denna rörelse kan varieras och bli **U R U' R'**, eller **F R F' R'**, och så vidare för valfri position. Det finns till och med mellanskiktsrörelser som **M U M' U'**, eller **U2 R U2 R'**.

![Demonstration av grundläggande förflyttningsrörelse](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

I början är kuben som mest rörig. Därför kan man använda många av de grundläggande permutationerna som beskrivits ovan för att först lösa en sida, eller andra delar, och på så sätt minska oordningen.

Och eftersom tillståndet är så rörigt kan den sista rörelsen U' i **R U R' U'**, som återställer omgivningen, till och med utelämnas beroende på situationen, och direkt följas av nästa rörelse. Detta förenklar det till: flytta undan, infoga, återställ.

Flytta undan, infoga, återställ.

Detta är kärnrörelsen. Grattis, du förstår nu hur man löser Rubiks kub!

Men i de senare stegen behöver vi längre permutationssekvenser för att kunna byta specifika bitar utan att helt förstöra det redan lösta tillståndet.

Låt oss ta **R U' L' U R' U' L U** som exempel. Denna rörelse kan byta plats på endast tre hörnbitar utan att påverka något annat. Nedbrutet i kommutatorlogik:

```
A   = R U'   （Skickar ut hörnbiten）
B   = L'     （Vänstra lagret rör sig lite）
A⁻¹ = U R'   （Återställer A-operationen）
B⁻¹ = U' L U（Återställer B-operationen, med justering）
```

Effekt: Den nedre vänstra hörnbiten förblir orörd, medan de andra tre hörnbitarna byter plats.

Detta är förmodligen en av de enda två formlerna i denna artikel som du behöver bekanta dig med. Vi kommer att lära oss hur man använder dem i den praktiska delen och förstå dem genom att utföra rörelserna, snarare än att bara memorera dem utantill.

## Praktisk del: Lösa kuben från grunden

Nu kommer vi äntligen till artikelns höjdpunkt. Jag kommer att leda dig steg för steg, så att du enbart genom observation och förståelse kan lösa Rubiks kub helt och hållet från grunden.

Vad du behöver för att komma igång:

- En Rubiks kub
- Och lite tålamod (eftersom vårt fokus ligger på observation och förståelse)

Förutsatt att du redan har en Rubiks kub. Vi kommer att blanda den slumpmässigt enligt internationell standard (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), och sedan kommer jag att lösa kuben tillsammans med dig.

Eller så kan du spela den online här; när du klickar på länken ser du kuben som redan är blandad: [3D Kub — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Rubiks kub i blandat startläge](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Vi kan lösa kuben med hjälp av den mycket eleganta Roux-metoden, även kallad bro-metoden. Till skillnad från att lösa kuben lager för lager, innebär bro-metoden att man först löser de två 1×2×3-blocken på vänster och höger sida, populärt kallade vänster och höger bro, och sedan toppskiktet och de återstående bitarna.

Bro-metoden är mycket fri och flexibel, kräver färre steg än många kända metoder och relativt få formler att memorera, eftersom den i grunden bygger på kommutatorlogik. Inom denna ram kan vi lära oss hur man löser Rubiks kub utan att memorera en enda formel.

![Flödesschema för Roux-metoden](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Steg ett: Fixera observationspositionen

Observationspositionen i bro-metoden är fast. Under lösningsprocessen behöver vi inte rotera kuben ofta, utan håller samma vinkel för att tänka och lösa. Genom att hålla detta fasta ansikte kan vi mycket enkelt se vissa hörn- och kantbitar och veta vart de ska.

Vi kan använda denna vinkel som referens:

- Framåt (mot dig): Grön sida
- Vänster sida: Röd
- Höger sida: Orange
- Övre lager: Gul
- Nedre lager: Vit
- Baksida: Blå

### Steg två: Bygg de vänstra och högra broarna

**Ordning för att bygga den vänstra bron:**

1. Placera först den vit-röda kantbiten (pelaren längst ner till vänster)
2. Placera sedan den blå-röda kantbiten bakom den
3. Placera därefter de två röda hörnbitarna framför

Illustrerad bild av den vänstra bron i färdigt tillstånd:

![Vänster bro klar](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Denna process kräver inga formler, utan endast observation och förståelse. Med lite övning blir du allt skickligare.

**F' L**: Använd observationsmetoden för att hitta den röd-vita kantbiten och placera den korrekt, med den vita sidan nedåt och den röda sidan åt vänster.

![Demonstration av vit-röd kantbit på plats](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Placera den blå-röda kantbiten och hörnbitarna korrekt.

![Blå-röd kantbit och hörnbitar på plats](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Hitta positionerna för de sista två bitarna i den vänstra bron och se till att de hamnar rätt. Därmed har vi en perfekt vänster bro.

![Vänster bro sista två bitar på plats](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Höger bro på samma sätt**, byt ut rött mot orange och upprepa stegen ovan. Men var försiktig så att du inte förstör den redan byggda vänstra bron. Om du behöver tillfälligt flytta undan den kan du skjuta undan den vänstra bron ett steg så att operationerna på höger sida inte påverkar den, och sedan återställa den vänstra bron när höger sidans rörelser är klara.

**Mitten av höger bro**: U' M U' R2

![Mitten av höger bro kantbit på plats](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Första biten på höger bro**: U' M' U2 R' U R

![Första biten på höger bro på plats](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Vi har nu den sista modulen för den högra bron och vill sätta in den på plats. Därför flyttar vi först undan den vänstra bron (F') för att skapa utrymme, flyttar sedan modulen (U), och slutligen återställer vi både den vänstra och högra bron samtidigt.

![Höger bro sista bit infogad](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Detta är tillståndet när båda broarna är klara. Så länge broarna är formade behöver vi inte bry oss om de andra färgblocken för tillfället.

![Båda broarna klara](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Steg tre: Lös toppskiktets hörnbitar

När du har löst broarna på vänster och höger sida, börjar vi sedan med att lösa de återstående fyra hörnbitarna. Här behöver vi använda en trecykel för hörnbitar, som låter tre hörn rotera positioner, från A till B, B till C, och C tillbaka till A.

![Hörnbitstrecykel: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Trecykel för hörnbitar

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formel 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Den nedre vänstra hörnbiten förblir orörd</li>
      <li>De andra tre hörnbitarna byter plats **moturs**</li>
      <li>Men deras interna färger roterar **medurs**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formel 2 (Spegelvänd version)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Den nedre högra hörnbiten förblir orörd</li>
      <li>De andra tre hörnbitarna byter plats **medurs**</li>
      <li>Men deras interna färger roterar **moturs**</li>
    </ul>
  </div>
</div>

![Demonstration av spegelvänd hörnbitstrecykel](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Du kan bara stöta på fyra typer av orienteringar för hörnbitarna: 0, 1, 2 eller 4 "bra" hörn.

- **4 bra hörn**: Färdigt tillstånd
- **1 bra hörn** (fiskform): Utför en trecykel eller dess spegelvända version en gång till för att slutföra.
- **0 / 2 bra hörn**: Placera först ett "dåligt" hörn i en position som inte påverkas av trecykeln (nedre vänstra hörnet). Utför en trecykel, så kommer du att få 1 bra hörn, vilket leder tillbaka till föregående situation.

Ibland behöver den grundläggande trecykelversionen utföras två gånger för att återställa, medan den spegelvända trecykelversionen bara behöver utföras en gång för att helt återställa. Nybörjare behöver bara först bemästra grundversionen, fokusera på observation och förståelse, och kan sedan tillämpa den i andra sammanhang. Denna trecykel, som placerar en gul sida uppåt, är också en känd klassisk formel – den vänstra/högra fiskformeln. Du kan försöka känna igen fiskformen.

Denna formel behöver du inte heller memorera. Observera hur de två gröna rutorna rör sig, och utför den själv några gånger så blir du bekant med den. Kärnan är att byta plats på de tre hörnbitarna i toppskiktet.

För kuben där vi precis färdigställt broarna på vänster och höger sida, ser vi att det finns två gula på toppen. Vi byter då ut det nedre vänstra hörnet till ett som inte är gult, och utför en trecykel för hörnbitar. Sedan utför vi antingen två trecykler till, eller en spegelvänd trecykel, för att få alla fyra hörnbitar i toppskiktet med den gula sidan uppåt.

![Demonstration av hörnbitstrecykel](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Färdigställt alla fyra gula hörn!

![Fyra gula hörn klara](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Justera positioner (för att få sidofärgerna att stämma)

När alla fyra hörnbitar har den gula sidan uppåt, måste vi också se till att sidofärgerna på hörnbitarna stämmer överens, så att hörnbitarna är helt på plats.

Då använder vi en **J-perm-variant**: **R U2 R' U' R U2 L' U R' U' L**

Logiken bakom denna formel kan brytas ner till "flytta par + logisk förflyttning":

- Första halvan `R U2 R' U' R`: Flyttar ett par till ett säkert område för tillfällig lagring, vilket skapar utrymme.
- Andra halvan `U2 L' U R' U' L`: Använder trecykellogiken för att exakt byta plats på två hörnbitar.

**Effekt**: De två hörnbitarna på höger sida byter plats, samtidigt som den gula sidan förblir uppåt, och de andra hörnbitarna förblir oförändrade.

Detta innebär att man kan byta plats på vilka som helst två intilliggande hörnbitar (genom att använda U för att justera vilka två hörnbitar som är på höger sida). Genom att upprepa detta några gånger kommer alla fyra hörnbitar att vara perfekt justerade och på plats.

![J-perm demonstration](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Denna formel behöver du inte heller memorera. Observera hur de två gröna rutorna rör sig, och utför den själv några gånger så blir du bekant med den. Kärnan är att byta plats på de två hörnbitarna på toppskiktets högra sida, samtidigt som den gula sidan förblir uppåt.

### Steg fyra: Lös de sista sex kantbitarna (LSE, Last Six Edges)

Härnäst, justera först centrumbitarna så att gult är på toppen och vitt på botten, och justera sedan kantbitarna.

Det återstår bara 6 kantbitar. Detta steg använder endast två operationer, **M** och **U**, vilket är mycket intuitivt.

#### 4a: Justera orientering (EO, Edge Orientation)

**Bedömningsmetod**: Kontrollera om kantbitens vita/gula klistermärke pekar uppåt eller nedåt.

- Uppåt / nedåt = Bra kantbit ✓
- Åt sidan = Dålig kantbit ✗

**Justeringsmetod**: Använd **M U M'** eller **M' U M** för att vända en dålig kantbit.

![M U M' vänder dålig kantbit demonstration](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitiv förståelse: M vänder upp de mellersta kantbitarna, U justerar positionen, och M' vänder tillbaka dem.

Upprepa detta några gånger tills alla kantbitar har den vita/gula sidan uppåt eller nedåt.

Vi kan kalla de korrekt orienterade kantbitarna för "bra" kantbitar, och de felorienterade för "dåliga" kantbitar.

Som visas på bilden är de tre markerade kantbitarna i toppskiktet "dåliga", eftersom de varken är gula eller vita.

![Dåliga kantbitar markerade](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Justeringsknep**: Du kan bara stöta på fyra typer av situationer med "dåliga" kantbitar:

- **0 dåliga kantbitar**: Färdigt tillstånd
- **Varken 0 eller 4 dåliga kantbitar**: Använd **M' U M** för att ändra antalet dåliga kantbitar, så att du får 4 dåliga kantbitar.
- **4 dåliga kantbitar (2 upptill och 2 nedtill)**: Byt plats på de övre och nedre kantbitarna med **M' U2 M**, vilket resulterar i en situation med 3 dåliga upptill och 1 nedtill.
- **4 dåliga kantbitar (3 upptill och 1 nedtill)**: De tre dåliga kantbitarna i toppskiktet kommer att bilda en pil. Vrid toppskiktet så att pilen pekar mot den dåliga kantbiten i bottenlagret. Utför **M' U M** en gång, så kommer alla fyra dåliga kantbitar att neutraliseras och bli "bra" kantbitar.

![Eliminering av fyra dåliga kantbitar med pil](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Om ingen pil dyker upp, försök upprepade gånger med **M' U M**. Du kommer alltid att kunna få ihop det. När du blir mer avancerad kan du sakta hitta mönster.

#### 4b: Lös de vänstra och högra kantbitarna (röda och orange)

Hitta de röd-gula och orange-gula kantbitarna (målet är att de ska återgå till kantbitarna på vänster och höger sida) och placera dem korrekt med en trecykel för kantbitar.

**Knep**:

1. Flytta den röd-gula (eller orange-gula) biten till ovanför mellanskiktet. Använd metoden för att byta plats på övre och nedre kantbitar för att få den att sjunka ner (**M' U2 M**).
2. Få den andra orange-gula (eller röd-gula) biten att sjunka ner på motsatt sida.
3. Vrid toppskiktet så att den röda sidan hamnar mittemot den nedsänkta röd-gula kantbiten.
4. Vrid mellanskiktet ett halvt varv (**M2**), och observera toppskiktet för att placera det korrekt (**U**).

![Vänster och höger kantbitar på plats demonstration](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Lösa de sista fyra kantbitarna (blåa och gröna)

**Tips**:

- Använd **kantbitstrecykeln** upprepade gånger för att byta plats på övre och nedre kantbitar: **M' U2 M**. Det sista steget placeras korrekt genom observation med **U2**.
- Snabbt knep: Placera den vit-gröna (eller vit-blåa) kantbiten ovanför målpositionen, byt plats på övre och nedre kantbitar, så är den vit-gröna (vit-blåa) biten på plats.

Det finns bara tre situationer:

- Redan rätt → Klart!
- Behöver M2 → Utför **M2** en gång
- Behöver bytas → **M' U2 M U2** eller **M U2 M' U2**

Vi kan också förenkla logiken för trecykeln: M' är när mellanskiktet kommer upp, U2 är när toppskiktet vrids ett halvt varv, M är när mellanskiktet återställs, och U2 är när toppskiktet återställs.

![Trecykel för kantbitar demonstration](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Klart!

![Helt löst Rubiks kub](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Sammanfattning

Du behöver inte memorera formler utantill, bara förstå kommutatorlogiken med "öppna – utför åtgärd – stäng". Du kommer att upptäcka att processen är mycket roligare än att memorera formler, och du behöver inte oroa dig för att glömma den, även efter många år. Du kan alltid själv härleda den.

Samma tankesätt kan användas för att lösa vilken Rubiks kub som helst, inklusive alla möjliga konstiga varianter.

Men om du vill satsa på speedcubing, då väntar en väg av oändlig träning. För nybörjare bör det dock inte vara några problem att med lite övning komma under 90 sekunder.

Det finns tusentals lösningsmetoder; det handlar om att hitta en som är mer elegant eller passar dig bättre.

Glädjen i Rubiks kub-världen är oändlig. Jag önskar dig mycket nöje.

## Bilaga 1: Fusklapp för Rubiks kub (Kublösningsmantra)

1. **Bygg vänster och höger bro: Genom observation och intuition**
   - Tips: När du har blivit mycket skicklig på observation och förutseende kan du, beroende på kubens specifika tillstånd, prioritera att bygga andra moduler, eller bygga vänster och höger bro samtidigt. Detta kan leda till färre steg och ger stor frihet.
2. **Återställ de fyra hörnbitarnas orientering i toppskiktet: Alla fyra gula sidor uppåt**
   - Trecykel för toppskiktets hörnbitar: **R U' L' U R' U' L U** (Låter den nedre vänstra hörnbiten förbli orörd, medan de andra tre hörnbitarnas interna färger roterar medurs)
   - Spegelvänd version av trecykel för toppskiktets hörnbitar: **L' U R U' L U R' U'** (Låter den nedre högra hörnbiten förbli orörd, medan de andra tre hörnbitarnas interna färger roterar moturs)
3. **Återställ sidorna på toppskiktets fyra hörnbitar**
   - **Finjustering av toppskiktets hörnbitspositioner**: **R U2 R' U' R U2 L' U R' U' L** (Behåller alla fyra hörnbitar med den gula sidan uppåt, byter plats på de två hörnbitarna på höger sida)
4. **Ändra kantbitarnas orientering, så att vitt eller gult pekar uppåt eller nedåt**
   - Justera först centrumbitarna så att gult är på toppen och vitt på botten, och justera sedan kantbitarna
   - Ändra antalet "dåliga" kantbitar med **M' U M**, skapa en pil, rikta pilen mot den dåliga kantbiten, utför **M' U M** en gång, så neutraliseras och placeras alla fyra dåliga kantbitar korrekt.
5. **Återställ kantbitarna på vänster och höger sida** (röda och orange)
   - Få först den röd-gula (eller orange-gula) biten att sjunka ner genom att byta plats på övre och nedre kantbitar (**M' U2 M**)
6. **Återställ de återstående kantbitarna** (blåa och gröna)
   - Använd **kantbitstrecykeln** upprepade gånger för att byta plats på övre och nedre kantbitar: **M' U2 M**. Det sista steget placeras korrekt genom observation med **U2**.

Du behöver inte lära dig en enda av dessa formler utantill, de finns bara med här i bilagan för att du enkelt ska kunna slå upp dem. När du väl provar själv, och ser hur de aktuella bitarna rör sig och förstår mekaniken, kommer du att märka att det sitter efter bara några försök. I grunden handlar det om att byta plats på de tre hörnbitarna i det översta lagret.

## Bilaga 2: Användbara webbplatser och verktyg

Jag har även skapat en 3D-kub som du kan spela med online. Du kan vrida den hur du vill, blanda och lösa den enligt fasta formler, och varje steg visas med fina animationer!

[3D Kub — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D-kubverktyg](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Blandningsformel som används i denna handledning: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Lösningssteg för denna handlednings vänster-höger-bryggor: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Klicka på denna länk för att se den blandade kuben: [3D Kub — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Rubiks kub-timer som används av världsmästare: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
