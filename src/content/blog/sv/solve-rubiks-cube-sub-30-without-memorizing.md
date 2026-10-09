---
layout: blog
title: "Hur du löser Rubiks kub på under 30 sekunder utan att lära dig formler: Även en grundskoleelev kan förstå det"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Det tog mig 89 dagar att gå från att lösa kuben för första gången till ett Ao100 under 30 sekunder, utan att memorera en enda CFOP-algoritm. Jag dissekerar fyra faser med hjälp av 4441 tidtagna lösningar: vad som är flaskhalsen i varje fas, vad man ska träna, och varför Roux-metoden inte kräver memorering av algoritmer."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Fyra faser från 165 sekunder till 28 sekunder" />
</figure>

*Bild: Fyra faser från 165 sekunder till 28 sekunder. Fas två såg den snabbaste förbättringen, medan fas tre var den längsta platåfasen.*

I min förra artikel [”Hur du löser Rubiks kub utan att lära dig formler”](/zh/blog/solve-rubiks-cube-without-formulas/) lärde du dig hur man löser en Rubiks kub med hjälp av kommutatorlogik, utan att memorera några formler. Den artikeln fick mycket positiv respons.

Om du följde instruktionerna tar det dig förmodligen nu två till tre minuter att lösa kuben, även om det kanske känns lite klumpigt och osäkert. Men då dyker en ny fråga upp: Hur blir jag snabbare?

Om du söker på "speedcubing" kommer alla handledningar att berätta samma sak: Vill du komma under 30 sekunder, måste du först memorera CFOP-algoritmerna. 41 för F2L, 57 för OLL, 21 för PLL – totalt 119 algoritmer. Även om du gör F2L intuitivt, kommer du inte undan de 78 algoritmerna för det översta lagret. Ingen memorering, ingen snabbhet.

Den här artikeln vill visa dig att du kan komma under 30 sekunder utan att memorera en enda algoritm.

<!--more-->

Jag började lösa Rubiks kub för första gången den 7 maj 2026, och den 4 augusti nådde jag ett Ao100 under 30 sekunder. Det tog mig 89 dagar. Under den tiden memorerade jag inte en enda CFOP-algoritm, jag bara lekte med kuben på fritiden. Här är mina tidtagna data från 4441 lösningar.

![Prestationskurva för 4441 lösningar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Bild: Prestationskurva för 4441 lösningar. Den grå linjen visar varje enskild tid, den mörka linjen är Ao100-trenden, och de röda punkterna markerar mina personbästa. Mitt bästa Ao100 var 28,22 sekunder.*

Genom medveten och regelbunden träning kan vem som helst gå från noll till sub-30 på några månader.

Vad betyder sub-30 sekunder? Vid [det första världsmästerskapet i Rubiks kub 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) var vinnartiden 22,95 sekunder, vilket senare erkändes av WCA som det första officiella världsrekordet. Tionde plats var 29,11 sekunder, och den tiden uppnåddes av ingen mindre än Jessica Fridrich, skaparen av CFOP-metoden som vi kommer att tala om i nästa avsnitt. Med andra ord, en sub-30-tid som en amatör uppnår idag efter några månaders träning, skulle ha placerat dem bland världens tio bästa år 1982.

Nu ska jag dela med mig av hur jag gick tillväga steg för steg, och ge dig hela träningsmetoden.

## Varför hela speedcubing-världen memorerar algoritmer

Låt oss först klargöra en sak: Varför är "snabbhet" och "att memorera algoritmer" så sammankopplade i folks medvetande?

I början av 1980-talet utvecklade den tjeckisk-amerikanska professorn Jessica Fridrich (som senare forskade inom digital forensik vid Binghamton University) en lager-för-lager-lösningsmetod, som senare fick namnet CFOP (Cross, F2L, OLL, PLL). Idén med denna metod är att uttömmande lista alla möjliga fall för det översta lagret och tilldela varje fall en optimal algoritm. Du identifierar fallet, utför algoritmen och behöver inte tänka.

![Jessica Fridrich och Rubiks kub på hennes kontor](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Bild: Jessica Fridrich och Rubiks kub på hennes kontor. 1982 tog hon 10:e plats vid det första världsmästerskapet med 29,11 sekunder. CFOP är uppkallad efter henne (Fridrich Method).*

Denna metod är extremt snabb. Nästan alla världsrekord har satts med CFOP. Därför undervisar alla handledningar i den, och alla videor handlar om den. Att "lära sig speedcubing" har blivit synonymt med att "lära sig CFOP", och att lära sig CFOP är synonymt med att memorera 119 algoritmer.

Men observera att "att memorera algoritmer" är en egenskap hos CFOP som metod, inte en egenskap hos "snabbhet" i sig. Anledningen till att CFOP kräver memorering är att den har valt vägen med uttömmande uppräkning. Uttömmande uppräkning kräver minne, det är priset den betalar.

Finns det metoder som inte går vägen med uttömmande uppräkning? Ja.

## En lösningsmetod utan algoritmer: Roux-metoden

År 2003 presenterade fransmannen Gilles Roux en helt annorlunda approach. Istället för att bygga lager för lager, bygger man först två 1×2×3 "broar" på vänster och höger sida, sedan hanterar man de fyra hörnen på det översta lagret, och slutligen återstår bara sex kantbitar som avslutas med bara M- och U-rörelser (mittlager och översta lager).

![Gilles Roux under en tävling](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Bild: Gilles Roux under en tävling. Klippt från en äldre tävlingsvideo, bilden har AI-förbättrats och förstorats.*

I förra artikeln löste vi redan kuben med denna struktur. Låt oss nu titta på dess fyra steg igen, men den här gången fokuserar vi på "vad man behöver memorera i varje steg":

| Steg | Innehåll | Antal algoritmer att memorera |
| --- | --- | --- |
| 1. Vänster bro | Bygg ett 1×2×3-block | 0, ren observation |
| 2. Höger bro | Bygg det andra blocket symmetriskt | 0, ren observation |
| 3. CMLL | Placera de fyra hörnen på det översta lagret | 9, alla kan härledas från 3-cykler |
| 4. LSE | De sista sex kantbitarna | 0, använder endast U- och M-rörelser |

Tre av de fyra stegen kräver inga algoritmer. Den enda delen som kräver CMLL, har totalt 42 möjliga fall, men du behöver inte 42 algoritmer. Den hörn-3-cykel som nämndes i förra artikeln, R U' L' U R' U' L U, tillsammans med dess spegelbild och några varianter, kan täcka alla fall, men det går lite långsammare.

![Roux-metodens fyra steg](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Bild: Roux-metodens fyra steg, där varje steg bara visar de bitar som är lösta upp till den punkten: Vänster bro → Höger bro → CMLL (övre hörnen) → LSE (sista sex kanterna). Klippt från min 3D Rubiks kub-sidas "Lösningsmetoder"-panel.*

Det är därför Roux-metoden kan lösas utan att memorera algoritmer: den komprimerar det som behöver memoreras till ett mycket litet hörn, och resten handlar helt om observation, förståelse och skicklighet.

## Från 165 sekunder till 28 sekunder: Fyra faser

Här är min faktiska resa. För varje fas har jag markerat start och slut med data, och sedan förklarat var jag fastnade och vad jag tränade på. Dina flaskhalsar kanske skiljer sig från mina, men ordningsföljden är med största sannolikhet densamma.

![Tidsperiod för de fyra faserna](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Bild: Tidsperiod för de fyra faserna. Fas ett 3 veckor, fas två 11 dagar, fas tre två månader, fas fyra fram till idag.*

### Fas ett: 165 sekunder → 60 sekunder (Vecka 1–3)

**Data**: 7 maj till 27 maj. Första veckan snitt 165 sekunder, tredje veckan 68 sekunder.

**Flaskhals**: Den vänstra bron är mycket ovana, och det tar lång tid att hitta varje färgblock. Efter att ha hittat ett färgblock tenderar nybörjare att stanna upp och fortsätta observera.

![Var nybörjare spenderar sin tid](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Bild: Var nybörjare spenderar sin tid. Händerna är stilla medan ögonen letar runt på kuben; "letande"-tiden är flera gånger längre än "vridande"-tiden.*

**Vad man ska träna**:

Den största fienden i denna fas är inte långsamma händer, utan långsamma ögon. Du spenderar betydligt mer tid på att "leta" än på att "vrida". Därför:

-   **Fixerad observationsposition, vrid inte kuben.** Som jag nämnde i förra artikeln är Roux-metodens observationsvinkel fixerad. I denna fas ska du göra "att inte vrida kuben" till muskelminne. Varje gång du vill vrida kuben, stanna upp och fråga dig själv: Kan jag se biten jag behöver från den här vinkeln?
-   **Långsam lösning.** Ingen tidtagning, men rörelserna ska vara sammanhängande utan några pauser. Varje rörelse kan vara mycket långsam, men det får inte finnas några avbrott. Kärnan är att medan händerna utför den föregående rörelsen, ska ögonen fokusera på nästa rörelse. Detta låter som att sakta ner, men i själva verket tränar det dina ögon att se relationen mellan bitens position och dess avsedda destination.
-   **Träna bara den första bron.** Scramblea kuben, bygg den vänstra bron, scramblea igen, bygg den vänstra bron igen. Gå inte vidare. Den första bron är det friaste steget i Roux-metoden och det bästa för att träna observation.

Lär dig inga nya algoritmer i denna fas. Din flaskhals ligger inte i algoritmerna nu.

### Fas två: 60 sekunder → 40 sekunder (Vecka 4–5)

**Data**: 27 maj till 7 juni, 11 dagar. Detta var den snabbaste förbättringsperioden i hela processen, och också den period jag tränade mest, med 723 lösningar under första veckan i juni.

**Flaskhals**: Osammanhängande rörelser. Kuben fastnar.

**Vad man ska träna**:

I denna fas behöver du optimera rörelserna i varje steg, och på grundval av förståelse öka skickligheten i varje rörelse.

-   **Andra bron.** Den andra bron är svårare än den första eftersom utrymmet är halverat, och du får inte förstöra den redan färdiga vänstra bron. De avgörande rörelserna är R, r (höger två lager), M, U. I denna fas ska du lära dig att använda r och M istället för R för att flytta bitar, så att den vänstra bron aldrig förstörs. Att optimera rörelsestegen är att spara tid. Till exempel är tre medurs vridningar likvärdiga med en moturs vridning.
-   **Använd M-lagret skickligt.** Roux-metodens sista steg består helt av M och U, och hur smidigt M-lagret vrids direkt avgör din lägsta tid. Använd ringfingret eller långfingret för att trycka M, börja träna M' U M' U i den här rytmen.
-   **CMLL-mönsterigenkänning.** I förra artikeln "testade" vi oss fram till de fyra hörnen med en 3-cykel. Nu ska du börja titta först och sedan agera: Innan du vänder på det översta lagret, titta på de fyra hörnens gula orientering, bedöm om det är 0, 1, 2 eller 4 "bra" hörn, och utför sedan direkt den motsvarande rörelsen. Du kan också uppnå stora effektivitetsvinster med ett mycket litet antal algoritmer, vilket är mycket kostnadseffektivt. En stor del av dessa algoritmer behöver inte memoreras utantill, utan förstås medan du gör dem.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Perspektiv när du bygger höger bro" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Bild vänster: Perspektiv när du bygger den högra bron. Den vänstra bron är klar, och du använder bara R, r, M, U för att sätta in höger hörn-kantpar. Den vänstra bron kommer aldrig att röras. Bild höger: M' U M, den vanligaste rörelsekombinationen i Roux-metodens andra halva. Mittlagret upp, det översta lagret vrids, mittlagret tillbaka – tre steg för att byta ett par kanter i det översta och mellersta lagret.*

Du kan titta på mitt sammanställda [Roux Method algoritmbibliotek](/zh/projects/rubiks-cube/roux#cmll). CMLL-sidan har en tvåstegsmetod: 7 orienteringsalgoritmer + 2 positioneringsalgoritmer, totalt 9 stycken. Detta är ett mycket prisvärt val för att öka hastigheten, lätt att lära sig, och varje algoritm du behärskar kan göra dig ungefär 1–2 sekunder snabbare. Med lite övning blir du snabbt skicklig, och vissa har redan introducerats i förra artikeln. Du behöver inte memorera alla för att komma under 30 sekunder.

![CMLL första steget i tvåstegsmetoden, sju hörnorienteringar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Bild: CMLL första steget i tvåstegsmetoden, sju hörnorienteringar. I översiktsbilden är gult den uppåtvända toppfärgen, och de små strecken på utsidan indikerar att hörnets toppfärg är vänd åt sidan. Känn igen mönstret efter antalet gula hörn: 0 är H eller Pi, 1 är S eller AS, 2 är U, T eller L.*

Efter att ha orienterat de gula topparna kan du använda dessa två algoritmer för att placera hörnen korrekt på sidorna.

Om en sida redan har samma färg, till exempel rött redan är på samma sida, rotera den till vänster och välj sedan algoritmen för angränsande byte. Om ingen sida har samma färg, välj algoritmen för diagonal byte.

![CMLL andra steget i tvåstegsmetoden, två hörnpositioner](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Bild: CMLL andra steget i tvåstegsmetoden, två hörnpositioner. Vänstra bilden: de två vänstra hörnen är redan röda, använd angränsande byte. Högra bilden: ingen sida är enhetlig, använd diagonal byte.*

Du kan förstå varje algoritm genom att långsamt lösa kuben många gånger. Betrakta dem inte som formler, utan som specifika, fasta rörelser som du själv kan upptäcka genom att utforska, men att ha dem listade här kan spara dig tid och misstag.

En annan sak, som ger mer omedelbart resultat än någon annan träning: spendera lite pengar och köp en ny Rubiks kub. Om du fortfarande har en gammal kub som klickar och fastnar när du vrider den, köp en modern 3x3-kub med magneter. De senaste kuberna kommer att låta dig uppleva kraften i ingenjörsoptimering; de vrider sig smidigt, återgår automatiskt till position, och fastnar nästan aldrig. Bara genom att byta kub kan din genomsnittliga tid förbättras med 15 sekunder. Ett prisvärt val är [MoYu RS3 M V5 (Maglev + Ball-core version)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), för runt tjugo dollar, den räcker gott och väl tills du är sub-20.

### Fas tre: 40 sekunder → 30 sekunder (Vecka 5 – Vecka 13, två månader)

**Data**: 7 juni till 4 augusti. Ao100 slipades från 39,8 sekunder till 29,9 sekunder, vilket tog 58 dagar. I denna fas kan du ibland få tider under 30 sekunder, men bara om du har extrem tur. Och när den genomsnittliga lösningstiden sjunker, kommer svårigheten att förbättras med 1 sekund att öka exponentiellt.

![Dagligt genomsnitt](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Bild: Dagligt genomsnitt. Efter mitten av juni planade kurvan nästan ut, och jag kämpade i två månader mellan 30 och 40 sekunder.*

Det här är platåfasen. Alla kommer att stöta på den, och jag stannade här i två månader.

**Flaskhals**: Lösningen av de sex kantbitarna i det översta lagret är mycket långsam, jag förstod inte logiken, och varje gång förlitade jag mig på upprepade försök, vilket slösade bort mycket tid. Vänster och höger bro var fortfarande inte tillräckligt skickliga.

**Vad man ska träna**:

-   **EO-igenkänning.** Som jag nämnde i förra artikeln finns det bara några få fall av felorienterade kanter: 0, icke-0 icke-4, 4 (2 uppe, 2 nere), 4 (alla på topplagret), 4 (3 uppe, 1 nere). Målet i denna fas är att i samma ögonblick som broarna är byggda, utan att räkna, omedelbart se vilken typ det är. Övningsmetoden är att scramblea, lösa fram till slutet av CMLL, pausa, säga hur många felorienterade kanter det finns, och sedan fortsätta.
-   **Många förstår inte rörelserna här.** EO-fasen syftar i slutändan alltid till att skapa en pilform med 3 uppe och 1 nere, eftersom den kompletta formen bara är ett steg från pilformen om den är scrambled. Så, med omvänd tankegång, är det det sista steget före den kompletta lösningen, och oavsett hur många felorienterade kanter det finns, är målet alltid att skapa en pil. Om det finns 4 felorienterade kanter uppe, byt ut ett par övre/nedre kanter för att flytta ner en felorienterad kant och skapa pilen. Om det är 2 uppe och 2 nere, byt ut ett par övre/nedre kanter för att flytta upp en felorienterad kant och skapa pilen. Om det är 1 uppe och 1 nere, eller 2 uppe, använd M' U M för att först transformera till ett av de tidigare fallen, och sedan skapa pilen. Genom mycket observation och tänkande kan du själv utforska de bästa stegen för 1/1-fallet.
-   **Öva mycket på förutseende (Look-ahead).** Detta är den viktigaste saken för att gå från 40 till 30 sekunder, och också den mest kontraintuitiva: vrid långsammare, se längre fram. När du bygger den vänstra bron, titta inte på biten du sätter in, utan på var nästa bit är. Det kommer att kännas väldigt konstigt i början, och tiderna kommer att bli sämre, men efter en vecka kommer det plötsligt att bli bättre.
-   **CMLL utan tvekan.** Om en rörelse du alltid måste tänka på innan du vågar göra den, är den ännu inte din. Träna varje rörelse 50 gånger separat tills din hand rör sig automatiskt när du ser formen.

![Pilform](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Bild: Pilform. Tre felorienterade kanter på det översta lagret (ljusblå markering) bildar en pil som pekar mot den felorienterade kanten i bottenlagret. Vid det här läget kan en M' U M flytta alla fyra på en gång. [Öppna detta tillstånd i 3D-kuben](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) för att se steg för steg.*

![Sex EO-former](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Bild: Sex EO-former. Etiketten i övre vänstra hörnet visar antalet felorienterade kanter (uppe / nere), gult är korrekta kanter, ljusblå ram är felorienterade kanter. Endast pilformen kräver en algoritm, de andra fem transformeras först till pilformen.*

För att lösa de vänstra och högra kantbitarna, med gult som topp och vitt som botten, och den vänstra bron som röd som exempel, måste vi sedan lösa de gulröda och gulorangea kantbitarna (markerade områden). Huvudidén är att på något sätt byta ner de gulröda och gulorangea kantbitarna till bottenlagret. När båda kantbitarna är i bottenlagret, mittemot varandra, rotera topplagret till rätt position, och sedan kan M2 U eller M2 U' lösa vänster och höger kantbitar i U-lagret.

För att hjälpa dig att bättre förstå har jag sammanställt alla sex EO-former i [Roux Method algoritmbibliotekets LSE-sida](/zh/projects/rubiks-cube/roux#lse). Varje bild har en "Visa detaljer"-länk som öppnar motsvarande tillstånd i 3D-kuben, med felorienterade kanter automatiskt markerade. På samma sida finns också alla fall för UL/UR-placering och de sista fyra kanterna.

Att träningsvolymen minskar i denna fas är inte dåligt. En platåfas kan inte övervinnas genom att bara öka volymen; den övervinns genom att ändra en specifik dålig vana. Min erfarenhet är att bara ändra en sak i taget.

### Fas fyra: 30 sekunder → 28 sekunder (Efter vecka 13)

**Data**: Efter 4 augusti. Under hela september var det registrerade antalet övningar 122 gånger, men många övningar registrerades faktiskt inte. Jag har nu integrerat kuben som en leksak på skrivbordet, plockar upp den och leker med den när jag känner för det, när jag är frustrerad eller orolig, under arbetspauser, eller när jag är uttråkad. Att leka med kuben har blivit en del av mitt liv. Ao100 har också gradvis sjunkit från 29,9 till 28,2.

**Flaskhals**: Ingen tydlig flaskhals, bara inte tillräckligt skicklig.

**Vad man ska träna**:

Om din genomsnittliga hastighet fortfarande är över 30 sekunder, är det enda du behöver göra att fortsätta träna mycket, inte att lära dig nya algoritmer.

Genom att ständigt öva på look-ahead med långsam lösning kommer du att bli snabbare och snabbare.

Ta fram kuben och lek med den när som helst. Ha den där du lätt kan nå den, till exempel på skrivbordet, så att du kan leka med den under arbetspauser. Du kan också regelbundet spela in dina lösningar för att se var du spenderar mest tid, och sedan optimera specifikt för det. Det här är medveten träning; din framstegshastighet beror inte på det totala antalet vanliga övningar, utan på antalet medvetna övningar.

Då kommer du att märka att du, efter att ha passerat flaskhalsen på 30–35 sekunder, har sänkt din tid ytterligare ett snäpp.

Grattis till att ha nått denna fas! Ur en nybörjares perspektiv är du redan en mycket imponerande spelare!

## Priset för att inte memorera algoritmer

Nu måste jag vara ärlig. Att inte memorera algoritmer är inte gratis.

CMLL-fasen är långsam. Att täcka 42 fall med 9 algoritmer innebär att vissa situationer måste göras två gånger. De som kan alla CMLL-algoritmer är två till tre sekunder snabbare än jag i detta steg.

M-lagerstekniken har en högre tröskel. Roux-metodens andra halva bygger helt på M-lagret, och M-lagret är svårare att vrida än R och U, lättare att fastna, och ställer högre krav på själva kuben.

Oroa dig inte för den övre gränsen. Bland toppspelare finns det de som använder Roux-metoden och når världseliten, så metoden i sig har ingen övre gräns. Men för att komma under 15 sekunder kommer du förmodligen att behöva lära dig alla 42 CMLL-algoritmer. Men det är en fråga för ett annat skede. För att komma under 30 sekunder behövs det inte.

Och nästan alla världsspelare som löser med en hand använder Roux-metoden, eftersom den verkligen är mycket lämplig för enhandsoperation.

**Snabbaste officiella tiderna (WCA) med Roux-metoden:**

-   Singel 4,11 sekunder, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippinerna), Valenzuela Cubing Open 2023, erkänd som den snabbaste officiella singeltiden med Roux ([rekonstruktionsvideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Medel 5,98 sekunder, även han, 2019, då ett asiatiskt rekord och den tredje officiella sub-6-genomsnittet någonsin ([WCA-profil](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Han är också [världsrekordhållare för enhandslösning](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): Medel 8,09, singel 6,05 (2024). I enhandsgemenskapen anses Roux allmänt vara den optimala lösningsmetoden.

Jag tycker att den här kompromissen är mycket fördelaktig. Du byter två-tre sekunders CMLL-tid mot att: du vet vad du gör i varje steg, du glömmer inte hur man löser kuben även om du inte rört den på tre månader, och du kan härleda lösningen för vilken okänd kub som helst.

## Sammanfattning

![Lösning klar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Att gå från att kunna lösa kuben till under 30 sekunder är inte en process av att memorera algoritmer, det är en process av att träna hand-, ögon- och hjärnkoordination.

Fyra faser, fyra saker: lär dig först att titta utan att vrida kuben, sedan lär dig att bygga den högra bron utan att förstöra den vänstra, sedan lär dig att titta på nästa steg medan du gör det nuvarande, och slutligen låt händerna följa ögonen.

Algoritmer är inte källan till hastighet. Observation är det.

Lär dig att bygga positiv feedback genom framsteg i varje steg, även om det är ren färdighetsträning, behöver det inte vara tråkigt, särskilt när du upptäcker glädjen i att slå ett nytt rekord. Särskilt i de tidiga och mellersta stadierna kommer du att uppleva glädjen av att slå rekord varje dag.

Alla algoritmer och situationer som nämns i texten har jag sammanställt i [Roux Method algoritmbibliotek](/zh/projects/rubiks-cube/roux). När du fastnar, kom tillbaka och slå upp dem.

Rubiks kub-världen är full av oändlig glädje, ha så kul!

## Bilaga 1: Checklista för övning i varje fas

**Fas ett (> 60 sekunder)**

-   Fixerad observationsposition, vrid inte kuben under hela lösningen
-   Hitta nästa önskade färgblock utan att pausa
-   Långsam lösning, säg ut avsikten med varje steg
-   Träna bara vänster bro, upprepa 50 gånger

**Fas två (60 → 40 sekunder)**

-   Höger bro använder endast R, r, M, U, rör inte vänster bro
-   Tvåstegs CMLL-övning
-   M' U M' U rytmövning, 5 minuter dagligen

**Fas tre (40 → 30 sekunder)**

-   Stanna efter CMLL och säg omedelbart antalet felorienterade kanter
-   Långsam lösning + förutseende: ögonen tittar alltid på nästa bit
-   Minst 20 högkvalitativa lösningar dagligen

**Fas fyra (< 30 sekunder)**

-   Spela in video för att hitta pauser
-   Teknik: R U R' U' enfingersmetod, M-lager med ringfinger
-   20 högkvalitativa lösningar dagligen, inte bara öka volymen

## Bilaga 2: Verktyg

-   **csTimer**: [cstimer.net](https://cstimer.net/). Aktivera Ao5 / Ao12 / Ao100 statistik, Ao100 är din verkliga nivå, enskilda tider är tur.
-   **3D Rubiks kub**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Alla algoritmer i denna artikel kan matas in här för att se animeringar.
-   **Roux Method nybörjarvänligt algoritmbibliotek**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Vanliga insättningsmönster för vänster och höger bro, 9 algoritmer för tvåstegs CMLL, och alla fall för LSE (EO, UL/UR, de sista fyra kanterna). Varje bild kan öppnas i 3D-kuben, med irrelevant block automatiskt dolda och relevanta kanter markerade.
-   **csTimer Träningsanalysator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Dra och släpp din exporterade csTimer-fil för att se din resultatutveckling, Ao5/Ao12/Ao100-kurvor, PB-förbättringar, milstolpetabell (första sub-60, sub-40, sub-30, vilket datum) och Power Law-träningskurva. Alla bilder i denna artikel kommer härifrån. Data behandlas endast i din webbläsare och laddas inte upp. Om du inte har en exporterad fil kan du ladda min 4441-data för att se effekten.

*Denna artikel innehåller Amazon-affiliatelänkar: Vid köp via länkarna får jag en liten provision, ditt pris påverkas inte.*

## Mer läsning

-   [Hur du löser Rubiks kub utan att lära dig formler: Även en grundskoleelev kan förstå det](/zh/blog/solve-rubiks-cube-without-formulas)
