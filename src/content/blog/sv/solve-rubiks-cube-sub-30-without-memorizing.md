---
layout: blog
title: "Hur du kommer under 30 sekunder på Rubiks kub utan att lära dig algoritmer: En guide för alla, även nybörjare"
date: 2026-10-09 12:00:00
tags:
  - Rubiks kub
  - handledning
  - Roux-metoden
  - speedcubing
  - medveten träning
categories: 日常折腾
description: "Från första lösningen till ett Ao100 under 30 sekunder på 89 dagar, utan att memorera en enda CFOP-algoritm. Jag bryter ner fyra stadier med 4441 tidsmätningar: var du fastnar, vad du ska öva på i varje stadium, och varför Roux-metoden inte kräver memorisering av algoritmer."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="De fyra stegen från 165 sekunder till 28 sekunder" />
</figure>

*Figur: De fyra stegen från 165 sekunder till 28 sekunder. Steg två visade snabbast förbättring, medan steg tre var den längsta platåperioden.*

I den förra artikeln, [”Hur du löser Rubiks kub utan att lära dig algoritmer”](/sv/blog/solve-rubiks-cube-without-formulas/), lärde du dig att lösa en Rubiks kub utan att memorera algoritmer, genom att förstå logiken bakom att byta bitar. Den artikeln fick mycket positiv respons.

Om du följde den, tar det dig förmodligen två till tre minuter att lösa den nu. Det kanske känns lite klumpigt, men du får ihop den. Då dyker en ny fråga upp: Hur blir jag snabbare?

Om du söker på "speedcubing" kommer alla handledningar att berätta samma sak: för att komma under 30 sekunder måste du memorera CFOP-algoritmerna. 41 för F2L, 57 för OLL, 21 för PLL – totalt 119 algoritmer. Även om du gör F2L intuitivt, kommer du inte undan de 78 algoritmerna för det översta lagret. Om du inte memorerar dem, kan du glömma att bli snabb.

Den här artikeln vill visa dig att du kan komma under 30 sekunder utan att memorera en enda algoritm.

<!--more-->

Från den 7 maj 2026, när jag löste Rubiks kub för första gången, tills den 4 augusti, då mitt Ao100 kom under 30 sekunder, tog det mig 89 dagar. Under den tiden memorerade jag inte en enda CFOP-algoritm, utan ägnade bara min fritid åt att leka med kuben. Detta är tidsdata från mina 4441 registrerade lösningar.

![Prestationskurva för 4441 lösningar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figur: Prestationskurva för 4441 lösningar. Den grå linjen visar varje individuell tid, den mörka linjen är Ao100-trenden, och de röda punkterna markerar nya personbästa (PB). Mitt bästa Ao100 var 28,22 sekunder.*

Genom medveten och regelbunden övning kan vem som helst, på bara några månader, gå från nybörjare till sub-30.

Vad innebär det att vara under 30 sekunder? Vid [det första Rubiks kub-världsmästerskapet 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) var vinnartiden 22,95 sekunder, vilket senare erkändes av WCA som det första officiella världsrekordet. Tiondeplatsen gick till Jessica Fridrich själv, upphovskvinnan bakom CFOP-metoden som vi ska prata om i nästa avsnitt, med en tid på 29,11 sekunder. Med andra ord, en amatör som idag tränar fram en sub-30 tid under några månader skulle ha kunnat placera sig bland världens tio bästa år 1982.

Nu ska jag dela med mig av hur jag gick tillväga steg för steg, och ge dig hela min träningsmetod.

## Varför speedcubing-världen fokuserar på att memorera algoritmer

Låt oss först reda ut en sak: Varför är "snabbhet" och "att memorera algoritmer" så starkt kopplade i folks medvetande?

I början av 1980-talet utvecklade den tjeckisk-amerikanska professorn Jessica Fridrich (som senare forskade inom digital forensik vid Binghamton University i USA) en lagermetod som senare kom att kallas CFOP (Cross, F2L, OLL, PLL). Idén bakom metoden är att systematiskt lista alla möjliga scenarion för det översta lagret och tilldela varje scenario en optimal algoritm. Du identifierar situationen, utför algoritmen och behöver inte tänka.

![Jessica Fridrich och hennes Rubiks kub på kontoret](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figur: Jessica Fridrich och hennes Rubiks kub på kontoret. År 1982 kom hon på 10:e plats i det första världsmästerskapet med 29,11 sekunder, och CFOP-metoden är uppkallad efter henne (Fridrich Method).*

Den här metoden är extremt snabb. Nästan alla världsrekord har satts med CFOP. Därför undervisar alla handledningar i den, alla videor handlar om den, och "att lära sig speedcubing" har blivit synonymt med "att lära sig CFOP", vilket i sin tur innebär att memorera 119 algoritmer.

Men märk väl, "att memorera algoritmer" är en egenskap hos *CFOP-metoden*, inte av "snabbhet" i sig. Anledningen till att CFOP kräver memorisering är att den bygger på en uttömmande lista av fall. Uttömmande listor kräver minne, och det är priset man betalar.

Finns det metoder som inte går den vägen? Ja.

## En lösningsmetod utan algoritmer: Roux-metoden

År 2003 presenterade fransmannen Gilles Roux en helt annorlunda strategi. Istället för att bygga lager för lager, konstruerar man först två 1x2x3 "block" på vänster och höger sida (de så kallade "broarna"), hanterar sedan de fyra hörnbitarna i det översta lagret, och avslutar med de sex sista kantbitarna med hjälp av M- och U-rörelser.

![Gilles Roux under en tävling](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figur: Gilles Roux under en tävling. Klippt från en äldre tävlingsvideo, bilden har förstärkts med AI.*

I förra artikeln löste vi redan kuben med denna ram. Här går vi igenom dess fyra steg igen, men den här gången fokuserar vi på "vad som behöver memoreras i varje steg":

| Steg | Innehåll | Algoritmer att memorera |
| --- | --- | --- |
| 1. Första blocket (FB) | Bygger ett 1x2x3-block | 0, ren observation |
| 2. Andra blocket (SB) | Bygger ett symmetriskt block | 0, ren observation |
| 3. CMLL | Orientering och placering av de fyra hörnbitarna i det översta lagret | 9, alla kan härledas från 3-cykler |
| 4. LSE | De sista sex kantbitarna | 0, använder endast U- och M-lagerrotationer |

Tre av de fyra stegen kräver inga algoritmer. Det enda steget som kräver det är CMLL. Totalt finns det 42 fall, men du behöver inte 42 algoritmer. Den hörnbit-3-cykel vi gick igenom i förra artikeln, R U' L' U R' U' L U, tillsammans med dess spegelvändning och några varianter, kan täcka alla situationer, om än lite långsammare.

![Roux-metodens fyra steg](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figur: Roux-metodens fyra steg. Varje steg visar endast de bitar som har placerats korrekt fram till det steget: Första blocket (FB) → Andra blocket (SB) → CMLL (översta lagrets fyra hörnbitar) → LSE (de sista sex kantbitarna). Klippt från "lösningspanelen" på min 3D-kubsida.*

Det är därför Roux-metoden inte kräver att du memorerar algoritmer: den komprimerar den del som kräver minne till ett litet hörn, och resten handlar om observation, förståelse och skicklighet.

## Från 165 sekunder till 28 sekunder: De fyra stegen

Här är den väg jag faktiskt gick. För varje steg har jag markerat start och slut med data, och sedan förklarat var jag fastnade och vad jag övade på under den perioden. Dina egna hinder kan skilja sig från mina, men ordningsföljden är troligen densamma.

![Tidslinje för de fyra stegen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figur: Tidslinje för de fyra stegen. Steg ett tog 3 veckor, steg två 11 dagar, steg tre två månader, och steg fyra pågår fortfarande.*

### Steg ett: 165 sekunder → 60 sekunder (Vecka 1–3)

**Data**: Från 7 maj till 27 maj. Första veckan snittade jag 165 sekunder, tredje veckan 68 sekunder.
**Var jag fastnade**: Första blocket (FB) var mycket ovant, och det tog lång tid att hitta varje hörn-kantpar. När jag väl hittade ett par tenderade nybörjare att stanna upp och fortsätta observera.

![Var nybörjare lägger sin tid](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figur: Var nybörjare lägger sin tid. Händerna är stilla medan ögonen letar runt på kuben; tiden som läggs på att "leta" är flera gånger längre än tiden som läggs på att "vrida".*

**Vad man ska öva på**:

Den största fienden i det här steget är inte långsamma händer, utan långsamma ögon. Tiden du lägger på att "leta" är betydligt längre än tiden du lägger på att "vrida". Därför:

- Fixera din observationsposition, rotera inte kuben. Som nämndes i förra artikeln är Roux-metodens observationsvinkel fixerad. Under det här steget ska du träna upp muskelminnet att *inte* rotera hela kuben. Varje gång du känner för att rotera kuben, stanna upp och fråga dig själv: Kan jag se biten jag behöver från den här vinkeln?
- Slow solving. Ta ingen tid, men rörelserna ska vara sammanhängande utan några stopp. Varje rörelse kan vara mycket långsam, men den får inte avbrytas. Nyckeln är att dina ögon ska fokusera på nästa drag medan händerna utför det nuvarande. Detta låter som att sakta ner, men i själva verket tränar du dina ögon att se relationen mellan var en bit är och var den ska vara.
- Öva bara på första blocket (FB). Scramble, bygg FB, scramble igen, bygg FB igen. Gå inte vidare. Första blocket är det friaste steget i Roux-metoden och det bästa för att träna upp din observation.

Lär dig inga nya algoritmer i det här steget. Din flaskhals ligger inte i algoritmerna just nu.

### Steg två: 60 sekunder → 40 sekunder (Vecka 4–5)

**Data**: Från 27 maj till 7 juni, 11 dagar. Detta var den snabbaste förbättringsperioden under hela processen, och även den mest intensiva träningsperioden för mig, med 723 lösningar den första veckan i juni.
**Var jag fastnade**: Osammanhängande rörelser. Kuben fastnade.

**Vad man ska öva på**:

I det här steget behöver du optimera rörelserna i varje delmoment och, baserat på förståelse, öka din skicklighet i varje enskild rörelse.

- Andra blocket (SB). Andra blocket är svårare än första blocket eftersom utrymmet är halverat, och du får inte förstöra det redan byggda första blocket. Viktiga drag är R, r (höger två lager), M, U. I det här steget ska du lära dig att använda r och M istället för R för att flytta bitar, så att första blocket aldrig förstörs. Att optimera rörelsestegen handlar om att spara tid. Till exempel är att vrida medurs tre gånger detsamma som att vrida moturs en gång.
- Flytande M-lager. Roux-metodens sista steg består helt av M och U. Hur smidigt du kan vrida M-lagret avgör din nedre gräns. Använd ringfingret eller långfingret för att trycka M, och börja öva på rytmen M' U M' U.
- CMLL-igenkänning. I förra artikeln använde vi 3-cykeln för att "prova oss fram" med de fyra hörnbitarna. Nu ska du börja titta först och sedan agera: Innan du vänder det översta lagret, titta på de fyra hörnbitarnas gula sidor och avgör om det är 0, 1, 2 eller 4 orienterade hörnbitar. Utför sedan direkt den motsvarande rörelsen. Du kan uppnå en betydande effektivitetsökning med ett minimalt antal algoritmer, vilket är mycket givande. En stor del av dessa algoritmer behöver inte memoreras utantill, utan förstås medan du utför dem.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Vinkel vid byggandet av andra blocket" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figur vänster: Vinkel vid byggandet av andra blocket (SB). Första blocket (FB) är redan klart, och du använder bara R, r, M, U för att sätta in hörn-kantparet på höger sida. Första blocket kommer aldrig att röras. Figur höger: M' U M, en av de mest använda rörelsesekvenserna i Roux-metodens andra halva. M-lagret upp, U-lagret vrids, M-lagret ner – tre drag för att byta ett par kantbitar i U- och M-lagren.*

Du kan titta på mitt sammanställda [Roux Method-algoritmsamling](/sv/projects/rubiks-cube/roux#cmll). CMLL-sidan är tvåstegs: 7 orienteringsalgoritmer + 2 placeringsalgoritmer, totalt 9 stycken. Detta är ett kostnadseffektivt val för hastighetsökning, lätt att lära sig, och varje algoritm du blir flytande med kan spara dig ungefär 1–2 sekunder. Med lite övning blir du snabbt skicklig. Vissa har redan introducerats i den förra artikeln, och du behöver inte memorera alla för att komma under 30 sekunder.

![CMLL i två steg, första delen: sju hörnbit-orienteringar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figur: CMLL i två steg, första delen: sju hörnbit-orienteringar. I översikten är gult den uppåtvända toppfärgen, och de små strecken på utsidan indikerar att hörnbitens toppfärg vetter mot sidan. Identifiera mönstren efter antalet gula hörn: 0 är H eller Pi, 1 är S eller AS, 2 är U, T eller L.*

Efter att ha orienterat den gula sidan uppåt, kan du använda dessa två algoritmer för att placera hörnbitarnas sidor korrekt.

Om en sida redan har matchande färger, till exempel om rött redan är på samma sida, rotera det till vänster och välj sedan algoritmen för att byta intilliggande hörn. Om ingen sida har matchande färger, välj algoritmen för att byta diagonala hörn.

![CMLL i två steg, andra delen: två hörnbit-placeringar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figur: CMLL i två steg, andra delen: två hörnbit-placeringar. I den vänstra bilden matchar de två hörnbitarnas röda sidor, använd intilliggande byte; i den högra bilden matchar ingen sida, använd diagonalt byte.*

Du kan förstå varje uppsättning algoritmer genom omfattande slow solving. Se dem inte som formler, utan som specifika rörelsesekvenser som du gradvis kan upptäcka själv. Att lista dem här kan dock hjälpa dig att undvika omvägar.

En annan sak som ger snabbare resultat än någon annan övning: investera i en ny kub. Om du fortfarande har en gammal kub som klickar och fastnar när du vrider den för långt, köp en modern 3x3-kub med magneter. De senaste kuberna kommer att låta dig uppleva kraften i ingenjörsoptimering – de snurrar smidigt, bitarna justeras automatiskt och de fastnar nästan aldrig. Bara genom att byta kub kan din genomsnittstid sänkas med kanske 15 sekunder. Ett prisvärt val är [MoYu RS3 M V5 (MagLev + Ball-Core Edition)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), som kostar runt tjugo dollar och räcker tills du är under 20 sekunder.

### Steg tre: 40 sekunder → 30 sekunder (Vecka 5 – vecka 13, två månader)

**Data**: Från 7 juni till 4 augusti. Mitt Ao100 slipades ner från 39,8 sekunder till 29,9 sekunder, vilket tog 58 dagar. Under denna period kunde jag ibland få tider under 30 sekunder, men bara med mycket tur. Dessutom, i takt med att den genomsnittliga lösningstiden sjunker, kommer svårigheten att förbättras med 1 sekund att öka exponentiellt.

![Dagligt genomsnitt](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figur: Dagligt genomsnitt. Efter mitten av juni planade kurvan nästan ut, och jag kämpade mellan 30–40 sekunder i två månader.*

Det här är platåfasen. Alla kommer att stöta på den, och jag stannade här i två månader.

**Var jag fastnade**: Lösningen av de sex kantbitarna i det översta lagret var mycket långsam. Jag förstod inte logiken och förlitade mig på upprepade försök varje gång, vilket slösade bort mycket tid. Första och andra blocket var fortfarande inte tillräckligt flytande.

**Vad man ska öva på**:

- EO-igenkänning (Edge Orientation). Som jag nämnde i förra artikeln finns det bara ett fåtal fall för felorienterade kantbitar: 0, icke-0 icke-4, 4 (2 uppe, 2 nere), 4 (alla i U-lagret), 4 (3 uppe, 1 nere). Målet i det här steget är att, i samma ögonblick som blocken är klara, kunna se vilken situation det är utan att behöva räkna. Öva genom att scramble, lösa fram till CMLL, pausa, säga hur många felorienterade kantbitar det finns, och sedan fortsätta.
- Många förstår inte rörelserna här. EO-fasen syftar i slutändan till att skapa en "pil"-formation med 3 felorienterade kantbitar uppe och 1 nere. Eftersom en helt löst kub bara är ett drag bort från en pil-formation, är det sista steget innan fullständig lösning att tänka baklänges. Oavsett antalet felorienterade kantbitar är målet alltid att skapa en pil. Om det finns 4 felorienterade kantbitar uppe, byt ett par mellan U- och M-lagret för att få ner en felorienterad kantbit och skapa pilen. Om det är 2 uppe och 2 nere, byt ett par mellan U- och M-lagret för att få upp en felorienterad kantbit och skapa pilen. Om det är 1 uppe och 1 nere, eller 2 uppe, använd M' U M för att först transformera till de tidigare situationerna, och sedan skapa pilen. Du kan själv utforska de bästa stegen för 1/1-fallet genom mycket observation och eftertanke.
- Öva intensivt på look-ahead. Detta är den viktigaste saken för att gå från 40 till 30 sekunder, och också den mest kontraintuitiva: vrid lite långsammare, titta lite längre fram. När du bygger första blocket (FB), titta inte på biten du precis sätter in, utan på var nästa bit är. Det kommer att kännas väldigt konstigt i början, och dina tider kommer först att bli sämre, men efter en vecka kommer det plötsligt att bli bättre.
- CMLL utan tvekan. Om du måste tänka efter varje gång innan du utför en algoritm, då är den inte "din" ännu. Öva varje algoritm 50 gånger individuellt tills dina händer rör sig så fort du ser mönstret.

![Pilformation](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figur: Pilformation. Tre felorienterade kantbitar i U-lagret (markerade i cyan) bildar en pil som pekar mot den felorienterade kantbiten i M-lagret. Vid detta tillfälle kan ett enda M' U M placera alla fyra korrekt samtidigt. [Öppna detta tillstånd i 3D-kuben](/sv/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) för att se det steg för steg.*

![Sex EO-fall](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figur: Sex EO-fall. Etiketten uppe till vänster visar antalet felorienterade kantbitar (uppe / nere), gult är rättorienterade kantbitar, cyanram är felorienterade kantbitar. Endast pilformationen kräver en algoritm; de andra fem omvandlas först till pilformationen.*

För att lösa de vänstra och högra kantbitarna, med gult som topp, vitt som botten och första blocket (FB) som rött som exempel, behöver vi placera gult-röd kantbit + gult-orange kantbit (markerade). Huvudidén är att på något sätt byta gult-röd kantbit till bottenlagret genom att byta kantbitar mellan U- och M-lagret, och göra samma sak med gult-orange kantbit. När de två kantbitarna är mittemot varandra i bottenlagret, vrider vi det översta lagret till rätt position, och sedan kan M2 U eller M2 U' lösa de vänstra och högra kantbitarna i U-lagret.

För att underlätta förståelsen har jag sammanställt alla sex EO-fall på [LSE-sidan i Roux Method-algoritmsamlingen](/sv/projects/rubiks-cube/roux#lse). Varje bild kan öppnas i 3D-kuben genom att klicka på "Visa detaljer", och de felorienterade kantbitarna markeras automatiskt. På samma sida finns även alla fall för UL/UR-placering och de sista fyra kantbitarna.

Att träningsmängden minskar i det här steget är ingen dålig sak. En platåfas kan inte övervinnas genom att bara öka mängden träning, utan genom att ändra en specifik dålig vana. Min erfarenhet är att man bara ändrar en sak i taget.

### Steg fyra: 30 sekunder → 28 sekunder (Efter vecka 13)

**Data**: Efter den 4 augusti. Under hela september var det registrerade antalet lösningar 122, men många övningar registrerades faktiskt inte. Jag har integrerat kuben i mitt liv som en leksak på skrivbordet; jag tar den när jag känner för det, löser några gånger när jag är på gott humör, några gånger när jag är frustrerad eller orolig, några gånger under arbetspauser, eller när jag är uttråkad. Mitt Ao100 sjönk också gradvis från 29,9 till 28,2 sekunder.

**Var jag fastnade**: Inga tydliga flaskhalsar, bara inte tillräckligt flytande.

**Vad man ska öva på**:

Om din genomsnittliga hastighet fortfarande är över 30 sekunder, är det enda du behöver göra att fortsätta öva intensivt, snarare än att memorera nya algoritmer.

Genom att ständigt öva look-ahead med slow solving kommer du att bli snabbare och snabbare.

Ta fram kuben och lek med den närhelst du har en stund över. Ha den lättillgänglig, till exempel på skrivbordet, så att du kan plocka upp den under arbetspauser. Du kan också regelbundet spela in dina lösningar för att se vilken fas som tar mest tid, och sedan optimera specifikt för den. Detta är medveten träning – din framstegshastighet beror inte på det totala antalet vanliga övningar, utan på antalet medvetna övningar.

Då kommer du att märka att efter att du passerat flaskhalsen på 30–35 sekunder, har din hastighet sjunkit ytterligare ett snäpp.

Grattis om du nått det här steget – för nybörjare är du redan en mycket imponerande kubare!

## Priset för att inte memorera algoritmer

Nu ska vi vara ärliga. Att inte memorera algoritmer är inte gratis.

CMLL-steget blir långsamt. Att täcka 42 fall med 9 algoritmer innebär att vissa situationer måste göras i två steg. De som kan hela CMLL är två till tre sekunder snabbare än mig i detta steg.

M-lager-fingertricks har en hög tröskel. Roux-metodens andra halva bygger helt på M-lagret. M-lagret är svårare att vrida än R och U, fastnar lättare och ställer högre krav på själva kuben.

Oroa dig inte för den övre gränsen. Bland toppspelare finns det de som använder Roux-metoden och når världseliten; själva metoden har ingen övre gräns. Men för att komma under 15 sekunder är det troligt att du kommer att behöva lära dig alla 42 CMLL-algoritmer. Det är dock en annan fas. För att komma under 30 sekunder behövs det inte.

Dessutom använder nästan alla världsklass-enhands-kubare Roux-metoden, eftersom den verkligen är väl lämpad för enhandsgrepp.

**Snabbaste tider med Roux-metoden i officiella tävlingar (WCA):**

- Enkel lösning på 4,11 sekunder, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippinerna), Valenzuela Cubing Open 2023, allmänt erkänd som det snabbaste officiella singelresultatet med Roux-metoden ([rekonstruktionsvideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Medel på 5,98 sekunder, även han, 2019, vilket då var ett asiatiskt rekord och det tredje officiella Ao5 under 6 sekunder någonsin ([WCA-profil](https://www.worldcubeassociation.org/persons/2017VILL41))
- Han är också [världsrekordhållare för enhands](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): medel på 8,09, singel på 6,05 (2024). Inom enhands-speedcubing anses Roux-metoden allmänt vara den optimala lösningen.

Jag tycker att denna avvägning är mycket fördelaktig. Du byter två till tre sekunder i CMLL-steget mot att: veta vad du gör i varje steg, inte glömma hur man löser den även om du inte rör kuben på tre månader, och kunna härleda en lösning på vilken okänd kub som helst.

## Sammanfattning

![Löst](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Att gå från att kunna lösa kuben till att komma under 30 sekunder handlar inte om att memorera algoritmer, utan om att träna koordinationen mellan händer, ögon och hjärna.

Fyra steg, fyra uppgifter: Lär dig först att titta utan att rotera kuben, lär dig sedan att bygga andra blocket (SB) utan att förstöra första blocket (FB), lär dig att titta på nästa steg medan du utför det nuvarande, och slutligen, låt händerna följa ögonen.

Algoritmer är inte källan till snabbhet. Observation är det.

Lär dig att bygga upp positiv feedback genom framsteg i varje delmoment. Även övningar för flyt kan bli mindre tråkiga, särskilt när du upptäcker glädjen i att slå ditt personbästa igen. Särskilt i nybörjar- och mellanstadiet kommer du att uppleva glädjen av att slå rekord nästan varje dag.

Alla algoritmer och situationer som nämns i artikeln har jag sammanställt i [Roux Method-algoritmsamlingen](/sv/projects/rubiks-cube/roux). Kom tillbaka och kolla där om du fastnar.

Rubiks kub-världen erbjuder oändlig glädje. Ha så kul!

## Bilaga 1: Träningslista för varje steg

**Steg ett (> 60 sekunder)**

- Fixera observationspositionen, rotera inte hela kuben under lösningen
- Hitta nästa önskade färg utan att pausa
- Slow solving, säg högt din intention med varje drag
- Öva endast första blocket (FB), upprepa 50 gånger

**Steg två (60 → 40 sekunder)**

- Bygg andra blocket (SB) enbart med R, r, M, U, rör inte första blocket (FB)
- Öva CMLL i två steg
- Öva rytmen M' U M' U, 5 minuter dagligen

**Steg tre (40 → 30 sekunder)**

- När CMLL är klart, pausa och säg antalet felorienterade kantbitar vid första ögonkastet
- Slow solving + look-ahead: ögonen ska alltid titta på nästa bit
- Minst 20 högkvalitativa lösningar varje dag

**Steg fyra (< 30 sekunder)**

- Spela in videor för att hitta pauser
- Fingertricks: R U R' U' med ett finger, M-lager med ringfingret
- 20 högkvalitativa lösningar varje dag, fokusera inte på kvantitet

## Bilaga 2: Verktyg

- **csTimer**: [cstimer.net](https://cstimer.net/). Aktivera Ao5 / Ao12 / Ao100-statistik; Ao100 är din verkliga nivå, enskilda tider är tur.
- **3D-kub**: [philoli.com/zh/projects/rubiks-cube](/sv/projects/rubiks-cube/). Alla algoritmer i denna artikel kan matas in här för att se animationer.
- **Roux Method Algoritmsamling (Nybörjarvänlig)**: [philoli.com/zh/projects/rubiks-cube/roux](/sv/projects/rubiks-cube/roux). Vanliga insättningsmönster för första blocket (FB) och andra blocket (SB), de 9 algoritmerna för tvåstegs CMLL, och alla LSE-fall (EO, UL/UR, de sista fyra kantbitarna). Varje illustration kan öppnas i 3D-kuben, med irrelevant bitar automatiskt dolda och de relevanta kantbitarna markerade.
- **csTimer Träningsanalysator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/sv/projects/rubiks-cube/analyzer). Dra och släpp din exporterade csTimer-fil för att se din resultatutveckling, Ao5/Ao12/Ao100-kurvor, PB-framsteg, milstolpar (första gången under 60, under 40, under 30 sekunder) och Power Law-träningskurva. Alla diagram i denna artikel kommer härifrån. Data bearbetas endast i din webbläsare och laddas inte upp. Om du inte har en exporterad fil kan du först ladda mina 4441 data för att se hur det fungerar.

*Denna artikel innehåller Amazon affiliatelänkar: Om du köper via länkarna får jag en liten provision, utan att priset ändras för dig.*

## Mer läsning

- [Hur du löser Rubiks kub utan att lära dig algoritmer: En guide för alla, även nybörjare](/sv/blog/solve-rubiks-cube-without-formulas)
