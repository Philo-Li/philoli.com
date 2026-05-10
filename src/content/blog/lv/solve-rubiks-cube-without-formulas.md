---
layout: blog
title: Kā atrisināt Rubika kubu bez formulu iegaumēšanas: saprotams pat sākumskolas skolēniem
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Izmantojot grupu teorijas komutatoru principus un Roux tilta metodi, soli pa solim iemācīsim, kā atrisināt 3x3 Rubika kubu, neiegaumējot nevienu formulu.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Pilnībā atrisināts Rubika kubs" />
</figure>

Varbūt esi Rubika kuba (Rubik's Cube) iesācējs un nekad neesi to pilnībā atrisinājis.

Daudzi pieejamie pamācību materiāli bieži vien piedāvā tikai virkni dīvainu formulu, sakot, ka jādara tā un tad šitā, un kubs atrisināsies. Taču pēc tam joprojām nesaproti, kāpēc tas tā notiek.

Šis raksts būs tavs glābiņš. Tu iemācīsies no nulles atrisināt Rubika kubu, neiegaumējot nevienu formulu. Uzzināsi kuba izcelsmi un sapratīsi, kā tas darbojas. Es tevi soli pa solim vedīšu cauri gan teorijai, gan praksei, lai tu pilnībā atrisinātu kubu un iemācītos to pareizi novērot.

Iespējams, šī būs pirmā reize, kad pats veiksmīgi atrisināsi pilnu Rubika kubu.

<!--more-->

## Rubika kuba dzimšana

Kāpēc Rubika kubam ir tik milzīgs šarms? Vispirms parunāsim par to, kā tas radās.

1974. gadā Ungārijas arhitektūras profesors Ernē Rubiks, lai parādītu studentiem, kā detaļas var pārvietoties neatkarīgi, nesabojājot kopējo struktūru, izgatavoja pirmo prototipu no koka. Sešas puses tika nokrāsotas dažādās krāsās, un tā radās Rubika kubs.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubika kuba prototips" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernē Rubika portrets" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Apbrīnojamais kombināciju skaits

3x3 Rubika kubam ir 8 stūra gabali, 12 malas gabali un 6 centra gabali, kopā 26 redzami gabaliņi. Tomēr patiesībā pārvietojami ir 20 gabali, izņemot sešu pušu centra gabalus.

Cik tad ir iespējamo stāvokļu skaits? Veseli **4.3 × 10¹⁹**.

Ko tas nozīmē? Šis stāvokļu skaits ir lielāks par smilšu graudiņu skaitu uz Zemes. Ja katru sekundi mēģinātu miljardu stāvokļu, būtu nepieciešami vairāk nekā **1300 gadi**, lai visus izpētītu. Ja katru stāvokli uzrakstītu uz lapas un tās saliktu kaudzē, biezums būtu līdzvērtīgs 14 000 braucieniem no Zemes līdz Saulei un atpakaļ.

Mazais 3x3 Rubika kubs patiešām ir mānīgs savā vienkāršībā. Tā jaunais un aizraujošais spēles veids, neskaitāmās variācijas un bezgalīgā pievilcība uzreiz pēc nonākšanas tirgū izraisīja sensāciju, piesaistot daudz spēlētāju un entuziastu. Ātri vien attīstījās Rubika kuba sacensības, dažādi spēlēšanas veidi (ātrā risināšana Speedsolving, risināšana ar aizsietām acīm Blindfolded, risināšana ar vienu roku One-Handed, risināšana ar kājām With Feet), dažādas risināšanas metodes (slānis pa slānim Layer by Layer, stūri vispirms Corners First, CFOP, Roux Bridge, Petrus, ZZ) un pat dažādi kuba veidi (no otrā līdz septītajam līmenim, piramīda Pyraminx, slīpais Skewb, piecpusējais Megaminx) parādījās nepārtraukti.

![Dažādi Rubika kuba varianti](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Kuba šarms ir tik liels, ka matemātiķi nepārtraukti pēta tā matemātiku, gadu desmitiem meklējot "Dieva skaitli", astronauti to ņem līdzi kosmosā, un visu vecumu cilvēki izceļas dažādās sacensībās. Tomēr, salīdzinot ar kuba pievilcību, spēlētāju skaits joprojām ir salīdzinoši mazs. Tāpēc ar šo rakstu vēlos iemācīt ikvienam atrisināt kubu un izbaudīt šīs prāta spēles sniegto prieku.

## Formulu dilema

Lielākā daļa tirgū pieejamo risinājumu prasa spēlētājiem iegaumēt daudz formulu, kas ir ļoti atturoši iesācējiem. Viņi pat nespēj izjust kuba atrisināšanas prieku, jo formulas viņus aptur. Zināmajai CFOP metodei ir vairāk nekā 100 formulu, un pat iesācējiem ir jāiegaumē desmitiem.

Tāpēc šodien vēlos dalīties ar metodi, kas ļauj jautri spēlēt Rubika kubu, neiegaumējot formulas. Tu varēsi atrisināt kubu, paļaujoties tikai uz novērošanu un izpratni.

## Matemātikas smagsvars: grupu teorija (Group Theory)

Jautājums: Kā atrisināt Rubika kubu, neiegaumējot nevienu formulu?

Šeit mums jāizvelk matemātikas "smagsvars": grupu teorija. Nav tādas problēmas, ko nevarētu atrisināt ar matemātiku.

Kāda ir saistība starp Rubika kubu un grupu teoriju? Rubika kubs patiesībā ir grupa. Katrs kuba pagrieziens ir permutācijas operācija. Šai operācijai ir vairākas īpašības: to var kombinēt, to var mainīt uz pretējo, taču to nevar komutēt (mainīt secību).

Reizināšana, ko mācījāmies pamatskolā, ir komutatīva operācija — A × B un B × A rezultāts ir identisks. Taču Rubika kuba grupā A un B, apmainot vietām, nav līdzvērtīgi; vispirms R, tad U, un vispirms U, tad R ir pilnīgi atšķirīgas darbības. Tāpēc, saprotot grupas, mēs saprotam Rubika kubu. Un spēlēšana ar kubu palīdz mums saprast grupas.

Apsveicu, tu jau esi apguvis atšķirību starp Abela grupām (reizināšana un saskaitīšana ir Abela grupas) un ne-Abela grupām (Rubika kuba grupa).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U un U R atšķirīga secība rada atšķirīgus efektus - 1. daļa" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U un U R atšķirīga secība rada atšķirīgus efektus - 2. daļa" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Papildinājums: Rubika kuba standarta operācijas parasti apzīmē ar burtiem. R apzīmē labās puses slāņa pagriešanu pulksteņrādītāja virzienā par 90 grādiem, U apzīmē augšējā slāņa pagriešanu pulksteņrādītāja virzienā par 90 grādiem, R' ir pagriešana pretēji pulksteņrādītāja virzienam par 90 grādiem, vidējā slāņa pagriešana uz augšu ir M', un uz leju ir M.)

Tu vari novērot un apgūt, kā kubs griežas, tieši pielikumā esošajā tiešsaistes kuba animācijā.

## Teorija: Formula-free risināšanas būtība: komutators (Commutator)

Lai atrisinātu Rubika kubu, mums jāpanāk tāds stāvoklis: pielāgot noteiktu gabalu novietojumu, nemainot citu gabalu pozīcijas.

Matemātikā šo operāciju sauc par komutatoru, un to pieraksta kā **A B A⁻¹ B⁻¹**.

A⁻¹ ir A apgrieztā operācija.

Mēs varam izmantot ļoti ikdienišķu salīdzinājumu – liftu. Iedomājies, ka tev jānogādā cilvēks no 1. stāva uz 3. stāvu:

1.  **A**: Cilvēks ieiet liftā
2.  **B**: Lifts paceļas uz 3. stāvu
3.  **A⁻¹**: Cilvēks iziet no lifta
4.  **B⁻¹**: Lifts atgriežas 1. stāvā

Rezultāts: Lifts ir atgriezies sākotnējā pozīcijā, bet cilvēks ir pārvietots no 1. stāva uz 3. stāvu. Būtība ir tāda: kad lifts atgriežas, cilvēks vairs nav iekšā – tāpēc vide ir atjaunota, bet mērķis ir mainījis vietu.

Piemēram, Rubika kubā R un R⁻¹ atbilst labās puses slāņa pagriešanai pulksteņrādītāja virzienā par 90 grādiem, bet trešajā solī – pretēji pulksteņrādītāja virzienam par 90 grādiem.

Šī apgrieztā operācija A⁻¹ B⁻¹ var atjaunot vidi, kas tika sajaukta ar A B operāciju, tādējādi panākot tikai noteiktu gabalu apmaiņu, neietekmējot pārējo vidi.

Kāpēc gan ne A A⁻¹ B B⁻¹? Tādā gadījumā katra darbība tieši atceltu viena otru, un gabali nevarētu apmainīties. Tikko veicot operāciju A un uzreiz pēc tam apgriezto operāciju A⁻¹, kopumā tas ir līdzvērtīgi tam, ka nekas nav darīts (piemēram, augšējā slāņa pagriešana pretēji pulksteņrādītāja virzienam par 90 grādiem, kam seko pagriešana pulksteņrādītāja virzienā par 90 grādiem). Tāpēc apmaiņas radīšanai ir jābūt **A B A⁻¹ B⁻¹**.

Šī ir visvienkāršākā apmaiņa, un Rubika kubā vispraktiskākā pamata darbība ir: **R U R' U'**.

![R U R' U' demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

To var kombinēt garās secībās, panākot dažādus permutācijas efektus, piemēram, šo: (R U R' U') (R U R' U') (R U R').

Patiesībā tas ir arī formulu avots. Kāpēc vispār eksistē formulas? Tās ir virkne visvienkāršāko permutācijas operāciju, kas apvienotas secībās. Izpildot šīs secības, var ātri sasniegt konkrētus rezultātus, piemēram, atrisināt noteiktu malu vai stūra gabalu. Dažādas secības var kombinēt, lai mūs virzītu uz galīgo kuba atrisināšanu.

Izprotot principus, mēs pat varam izveidot savas unikālās formulas. (Par to, kā pašam radīt Rubika kuba formulas, sīkāk pastāstīsim nākamajā rakstā.)

Tātad, lai atrisinātu Rubika kubu, neiegaumējot nevienu formulu, mums vienkārši jāapgūst pamata permutācijas domāšana. Pārējās situācijās var pielietot to pašu principu. Visvienkāršākās permutācijas darbības apmainīs trīs stūra gabalu vai trīs malas gabalu pozīcijas.

## Kā veikt apmaiņu Rubika kubā

Jau minēju, ka Rubika kubā vispraktiskākā pamata apmaiņas darbība ir: **R U R' U'**. Ja tu pilnībā izpratīsi šo kustību, varēsi nekavējoties atrisināt kuba pirmos divus slāņus.

Šī darbība būtībā nozīmē: pārvietot prom (labo slāni), ievietot (mērķa gabalu), atgriezt (labo slāni) sākotnējā pozīcijā, atgriezt (augšējo slāni) sākotnējā pozīcijā.

Tādējādi mēs esam ievietojuši kreisā priekšējā stūra gabalu un vidējo malas gabalu apakšējā labajā stūrī.

Šo darbību var nepārtraukti mainīt, pārvēršot to par **U R U' R'**, vai **F R F' R'**, vai jebkurā citā pozīcijā, pat vidējā slānī ar **M U M' U'**, vai arī **U2 R U2 R'**.

![Pamata apmaiņas darbības demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Sākuma stadijā kubs ir visvairāk sajaukts, tāpēc var izmantot daudzas šādas pamata permutācijas, lai vispirms atrisinātu vienu pusi vai citas lokālas daļas, tādējādi samazinot sajaukuma pakāpi.

Turklāt, tā kā stāvoklis ir ļoti sajaukts, pēdējā darbība U' no **R U R' U'**, kas atjauno vidi, pat var tikt izlaista atkarībā no situācijas, tieši pārejot pie nākamās darbības. Tas vienkāršojas līdz: pārvietot prom, ievietot, atgriezt sākotnējā pozīcijā.

Pārvietot prom, ievietot, atgriezt sākotnējā pozīcijā.

Šī ir galvenā darbība! Apsveicu, tu jau esi sapratis, kā spēlēt Rubika kubu!

Taču vēlākā posmā mums būs nepieciešami garāki permutācijas soļi, lai apmainītu konkrētus gabalus, pilnībā nesabojājot pašreizējo atrisināto stāvokli.

Piemēram, darbība **R U' L' U R' U' L U** var apmainīt tikai trīs stūra gabalus, neietekmējot citus. Sadalot komutatora loģikā:

```
A   = R U'   （izved stūra gabalu）
B   = L'     （pakustina kreiso slāni）
A⁻¹ = U R'   （atjauno A operāciju）
B⁻¹ = U' L U（atjauno B operāciju, ar pielāgojumu）
```

Efekts: Kreisā apakšējā stūra gabals paliek nemainīgs, pārējie trīs stūra gabali apmainās.

Tās, iespējams, ir vienīgās divas formulas, kas tev jāapgūst šajā rakstā. Prakses sadaļā mēs mācīsimies, kā tās izmantot, un sapratīsim to pielietojumu darbībā, nevis vienkārši iegaumēsim.

## Prakse: Risināšana no nulles

Beidzot esam nonākuši pie šī raksta galvenās daļas. Es tevi soli pa solim vadīšu, lai tu, paļaujoties tikai uz novērošanu un izpratni, varētu pilnībā atrisināt Rubika kubu no nulles.

Nepieciešamā sagatavošanās:

-   Viens Rubika kubs
-   Un nedaudz pacietības (jo mēs galvenokārt pievēršamies novērošanai un izpratnei)

Vispirms pieņemsim, ka tev jau ir Rubika kubs. Mēs to nejauši sajauksim, izmantojot starptautisko standartu (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), un pēc tam es kopā ar tevi to atrisināšu.

Vai arī vari spēlēt tiešsaistes versiju šeit. Atverot šo saiti, tu redzēsi jau sajauktu kubu: [3D Rubika kubs — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![Sajaukta kuba sākotnējais stāvoklis](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Mēs varam izmantot ļoti eleganto Roux tilta metodes pieeju, lai atrisinātu kubu. Tā sauktā tilta metode, atšķirībā no slāņu atrisināšanas, vispirms atjauno kreiso un labo 1x2x3 bloku, ko dēvē par kreiso un labo tiltu, un pēc tam atrisina augšējo slāni un atlikušās pozīcijas.

Tilta metode ir ļoti brīva un elastīga, turklāt tai ir mazāk soļu nekā daudzām pazīstamām risināšanas metodēm, un nepieciešams iegaumēt salīdzinoši maz formulu, jo tā galvenokārt balstās uz komutatoru loģiku. Šajā ietvarā mēs varam iemācīties, kā atrisināt Rubika kubu, neiegaumējot nevienu formulu.

![Roux risināšanas metodes plūsmas diagramma](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Pirmais solis: Fiksēta novērošanas pozīcija

Tilta metodē novērošanas pozīcija ir fiksēta. Risināšanas laikā mums nav bieži jāgriež kubs, bet gan jāsaglabā viens un tas pats skatpunkts domāšanai un atrisināšanai. Pēc šīs fiksētās puses mēs varam ļoti viegli redzēt stūra un malas gabalus un zināt, kur tiem jānonāk.

Mēs varam izmantot šo leņķi kā atskaites punktu:

-   Priekšpuse (pret tevi vērsta): Zaļā puse
-   Kreisā puse: Sarkanā
-   Labā puse: Oranžā
-   Augšējais slānis: Dzeltenais
-   Apakšējais slānis: Baltais
-   Aizmugure: Zilā

### Otrais solis: Izveidojiet kreiso un labo tiltu

**Kreisā tilta būvēšanas secība:**

1.  Vispirms novietojiet baltā un sarkanā malas gabalu vietā (kreisās apakšējās daļas balsts)
2.  Pēc tam novietojiet aizmugurējo zilā un sarkanā malas gabalu vietā
3.  Pēc tam novietojiet abus priekšējos sarkanos stūra gabalus vietā

Kreisā tilta pabeigta stāvokļa diagramma:

![Kreisā tilta pabeigtais stāvoklis](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Šim procesam nav nepieciešamas nekādas formulas, pietiek ar novērošanu un izpratni. Vairāk praktizējoties, kļūsi arvien prasmīgāks.

**F' L**: Izmantojot novērošanas metodi, atrodi sarkano un balto malas gabalu un novieto to vietā, baltajai pusei jābūt uz leju, sarkanajai – pa kreisi.

![Baltā un sarkanā malas gabala novietošanas demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Novieto zilā un sarkanā malas gabalu un stūra gabalu vietā.

![Zilā un sarkanā malas gabala un stūra gabala novietošana vietā](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Atrodi kreisā tilta pēdējo divu gabalu pozīcijas, atrodi veidu, kā tos novietot vietā, un tā mēs iegūstam perfektu kreiso tiltu.

![Kreisā tilta pēdējo divu gabalu novietošana vietā](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Līdzīgi arī ar labo tiltu**, nomainiet sarkano krāsu pret oranžo un atkārtojiet iepriekš minētos soļus. Taču šeit jāpievērš uzmanība, lai nesajauktu jau izveidoto kreiso tiltu. Ja nepieciešams pagaidu pārvietojums, varat vispirms novirzīt kreiso tiltu, lai labās puses operācijas to neietekmētu, un pēc labās puses darbību pabeigšanas atjaunot kreiso tiltu.

**Labā tilta vidusdaļa**: U' M U' R2

![Labā tilta vidējā malas gabala novietošana vietā](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Labā tilta pirmais gabals**: U' M' U2 R' U R

![Labā tilta pirmā gabala novietošana vietā](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Mēs esam pabeiguši labā tilta pēdējo moduli un vēlamies to ievietot vietā. Tāpēc vispirms pārvietojam kreiso tiltu (F'), atbrīvojam vietu, tad pārvietojam moduli (U), un visbeidzot gan kreisais, gan labais tilts vienlaicīgi atgriežas savās pozīcijās.

![Labā tilta pēdējā gabala ievietošana](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Šis ir stāvoklis, kad abi tilti ir pabeigti. Pietiek, ja tilti ir izveidoti, pārējie krāsu gabali pagaidām nav jāņem vērā.

![Abu tiltu pabeigtais stāvoklis](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Trešais solis: Atrisiniet augšējā slāņa stūra gabalus

Kad esi atrisinājis kreiso un labo tiltu, nākamais solis ir atrisināt atlikušos četrus stūra gabalus. Šeit mums būs jāizmanto stūra gabalu trīs ciklu apmaiņa, kas ļauj trim stūra gabaliem rotēt pozīcijas: no A uz B, no B uz C, un no C atpakaļ uz A.

![Stūra gabalu trīs ciklu apmaiņas diagramma: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Stūra gabalu trīs ciklu apmaiņa

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Kreisais apakšējais stūra gabals paliek nemainīgs</li>
      <li>Pārējie trīs stūra gabali apmainās vietām **pretēji pulksteņrādītāja virzienam**</li>
      <li>Taču to iekšējās krāsas griežas **pulksteņrādītāja virzienā**</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (spoguļversija)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Labais apakšējais stūra gabals paliek nemainīgs</li>
      <li>Pārējie trīs stūra gabali apmainās vietām **pulksteņrādītāja virzienā**</li>
      <li>Taču to iekšējās krāsas griežas **pretēji pulksteņrādītāja virzienam**</li>
    </ul>
  </div>
</div>

![Stūra gabalu trīs ciklu apmaiņas spoguļversijas demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Stūra gabalu orientācijas situācijas, ar kurām tu vari saskarties, ir tikai četras: 0, 1, 2 vai 4 "labie" stūri.

-   **4 "labie" stūri**: Pabeigts stāvoklis
-   **1 "labais" stūris** (zivs forma): Atkārto trīs ciklu apmaiņu vai spoguļversiju, lai pabeigtu.
-   **0 / 2 "labie" stūri**: Vispirms novieto "slikto" stūri tādā pozīcijā, ko trīs ciklu apmaiņa neietekmē (kreisajā apakšējā stūrī), veic vienu trīs ciklu apmaiņu, un tas pārvērtīsies par 1 "labo" stūri, atgriežoties pie iepriekšējās situācijas.

Dažkārt trīs ciklu apmaiņas pamata versija jāveic divas reizes, lai atjaunotu, bet spoguļversiju var pabeigt tikai ar vienu reizi. Iesācējiem pietiek apgūt pamata versiju, koncentrējoties uz novērošanu un izpratni, un tad viņi spēs to apgūt pilnībā. Šī trīs ciklu apmaiņa ar dzelteno pusi uz augšu ir arī pazīstama klasiska formula – kreisās un labās zivs formula, kas palīdz saprast zivs formu.

Šī formula nav jāiegaumē, vienkārši novēro, kā pārvietojas divi zaļie gabali, un, veicot to dažas reizes, tu to apgūsi. Būtība ir apmainīt trīs augšējā slāņa stūra gabalus.

Mēs, tikko pabeiguši kreiso un labo tiltu, atklājam, ka augšpusē ir divi dzelteni stūra gabali. Tāpēc mēs novietojam apakšējā kreisajā stūrī gabalu, kas nav dzeltens, un veicam vienu stūra gabalu trīs ciklu apmaiņu. Pēc tam veicam vēl 2 trīs ciklu apmaiņas vai vienu spoguļversijas trīs ciklu apmaiņu, lai panāktu, ka visi četri augšējā slāņa stūra gabali ir ar dzelteno pusi uz augšu.

![Stūra gabalu trīs ciklu apmaiņas procesa demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Četri dzeltenie stūri pabeigti!

![Četru dzelteno stūru pabeigtais stāvoklis](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Pozīcijas pielāgošana (sānu krāsu izlīdzināšana)

Kad visi četri stūra gabali ir ar dzelteno pusi uz augšu, ir vēl jāsalīdzina stūra gabalu sānu krāsas, lai stūra gabali varētu pilnībā atgriezties savās pozīcijās.

Tad izmanto **J-perm variantu**: **R U2 R' U' R U2 L' U R' U' L**

Šīs formulas loģiku var sadalīt "pāru pārvietošanā + loģiskā apmaiņā":

-   Pirmā daļa `R U2 R' U' R`: Pārvieto pāri uz drošu zonu pagaidu uzglabāšanai, atbrīvojot vietu.
-   Otrā daļa `U2 L' U R' U' L`: Izmanto trīs ciklu apmaiņas loģiku, lai precīzi apmainītu divus stūra gabalus.

**Efekts**: Divi labās puses stūra gabali apmainās vietām, vienlaikus saglabājot dzelteno pusi uz augšu, pārējie stūra gabali paliek nemainīgi.

Tas nozīmē, ka var apmainīt jebkuru divu blakus esošo stūra gabalu pozīcijas (izmantojot U, lai pielāgotu, kuri divi stūra gabali atrodas labajā pusē). Atkārtojot apmaiņu dažas reizes, visi četri stūra gabali pilnībā izlīdzināsies un atgriezīsies savās pozīcijās.

![J-perm demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Šī formula nav jāiegaumē, vienkārši novēro, kā pārvietojas divi zaļie gabali, un, veicot to dažas reizes, tu to apgūsi. Būtība ir apmainīt divus augšējā slāņa labās puses stūra gabalus, saglabājot dzelteno pusi uz augšu.

### Ceturtais solis: Atrisiniet pēdējos sešus malas gabalus (LSE, Last Six Edges)

Šajā brīdī vispirms izlīdzina centra gabalus, novietojot dzelteno pusi augšpusē, balto pusi apakšpusē, un pēc tam pielāgo malas gabalus.

Atlikušas ir tikai 6 malas gabali. Šis solis izmanto tikai divas operācijas – **M** un **U**, un tas ir ļoti intuitīvs.

#### 4a: Orientācijas pielāgošana (EO, Edge Orientation)

**Noteikšanas metode**: Skatieties, vai malas gabala baltā/dzeltenā uzlīme ir vērsta uz augšu vai uz leju.

-   Uz augšu / uz leju = "Labā" mala ✓
-   Uz sāniem = "Sliktā" mala ✗

**Pielāgošanas metode**: Izmantojiet **M U M'** vai **M' U M**, lai apgrieztu "slikto" malu.

![M U M' apgriešanas demonstrācija "sliktajai" malai](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitīva izpratne: M pagriež vidējā slāņa malas gabalu uz augšu, U pielāgo pozīciju, M' pagriež atpakaļ.

Atkārtojiet vairākas reizes, līdz visu malas gabalu baltā/dzeltenā krāsa ir vērsta uz augšu vai uz leju.

Mēs varam saukt pareizi orientētas malas par "labām" malām, bet nepareizi orientētas par "sliktām" malām.

Kā parādīts attēlā, augšējie trīs izceltie malas gabali ir "sliktās" malas, jo tie nav ne dzelteni, ne balti.

![Izceltās "sliktās" malas diagramma](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Pielāgošanas padomi**: Tu vari saskarties tikai ar četrām "slikto" malu situācijām:

-   **0 "slikto" malu**: Pabeigts stāvoklis
-   **Nav 0 un nav 4 "sliktās" malas**: Mainiet "slikto" malu skaitu, izmantojot **M' U M**, palielinot to līdz 4 "sliktajām" malām.
-   **4 "sliktās" malas (2 augšā, 2 apakšā)**: Apmainiet augšējās un apakšējās malas, izmantojot **M' U2 M**, lai iegūtu 3 augšā un 1 apakšā situāciju.
-   **4 "sliktās" malas (3 augšā, 1 apakšā)**: Trīs augšējās "sliktās" malas veidos bultu. Pagrieziet augšējo slāni tā, lai bulta norādītu uz apakšējā slāņa "slikto" malu, un veiciet vienu **M' U M** – visas četras "sliktās" malas tiks neitralizētas un pārvērtīsies par "labām" malām.

![Četru "slikto" malu bultas novēršanas demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Ja bulta neparādās, atkārtoti mēģiniet **M' U M**, un jums noteikti izdosies. Ar laiku, kad būsiet pieredzējušāki, varēsiet atrast likumsakarības.

#### 4b: Atrisiniet kreisās un labās puses malas gabalus (sarkanie un oranžie)

Atrodiet sarkano-dzelteno un oranžo-dzelteno malas gabalu (mērķis ir atgriezt tos atpakaļ kreisajā un labajā pusē) un novietojiet tos pareizajā pozīcijā, izmantojot malas gabalu trīs ciklu apmaiņu.

**Padomi**:

1.  Pārvietojiet sarkano-dzelteno (vai oranžo-dzelteno) malu virs vidējā slāņa un izmantojiet augšējo un apakšējo malu apmaiņu, lai to nogremdētu (**M' U2 M**).
2.  Nogremdējiet otru oranžo-dzelteno (vai sarkano-dzelteno) malu pretējā pusē.
3.  Pagrieziet augšējo slāni tā, lai sarkanā mala parādītos pretī nogremdētajam sarkano-dzeltenajam malas gabalam.
4.  Vidējo slāni pagrieziet par pusapgriezienu **M2**, augšējo slāni novērojiet un novietojiet vietā **U**.

![Kreisās un labās malas gabalu novietošanas demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Atrisiniet pēdējos četrus malas gabalus (zilie un zaļie)

**Padomi**:

-   Nepārtraukti izmantojiet **malas gabalu trīs ciklu apmaiņu**, lai apmainītu augšējās un apakšējās malas: **M' U2 M**. Pēdējais solis – novērošana un novietošana vietā ar **U2**.
-   Ātrs paņēmiens: Novietojiet balto-zaļo (vai balto-zilo) malas gabalu virs mērķa pozīcijas, apmainiet augšējās un apakšējās malas, un baltais-zaļais (baltais-zilais) gabals atgriezīsies savā vietā.

Ir tikai trīs situācijas:

-   Jau pareizi → Pabeigts!
-   Nepieciešams M2 → Veiciet vienu **M2**
-   Nepieciešama apmaiņa → **M' U2 M U2** vai **M U2 M' U2**

Mēs varam arī vienkāršot trīs malu apmaiņas loģiku: M' ir vidējā slāņa pagriešana uz augšu, U2 ir augšējā slāņa pagriešana par pusapgriezienu, M ir vidējā slāņa atjaunošana, U2 ir augšējā slāņa atjaunošana.

![Trīs malu apmaiņas demonstrācija](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Pabeigts!

![Atrisināts Rubika kubs](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Kopsavilkums

Nav jāiegaumē formulas, ir tikai komutatora loģika "atvērt – veikt darbību – aizvērt". Tu atklāsi, ka šis process ir daudz interesantāks nekā formulu iegaumēšana, un pat pēc gadiem tev nevajadzēs uztraukties par to, ka esi aizmirsis, jo jebkurā brīdī varēsi to izsecināt pats.

To pašu pieeju var izmantot, lai atrisinātu jebkuru Rubika kubu, ieskaitot dažādus dīvainus un nestandarta kubus.

Taču, ja vēlies iet ātrrisināšanas ceļu, tad tevi gaida nebeidzams smags treniņu ceļš. Tomēr iesācējiem, ar nelielu praksi, sasniegt rezultātu 90 sekunžu laikā nevajadzētu sagādāt problēmas.

Risinājumu ir tūkstošiem, atliek vien atrast elegantāko vai sev vispiemērotāko metodi.

Rubika kuba pasaule sniedz bezgalīgi daudz prieka. Novēlu tev jautri pavadīt laiku!

## Pielikums 1: Šī Rubika kuba risināšanas metode īsumā (Rubika kuba mantra)

1.  **Izveidot kreiso un labo tiltu**: Balstoties uz novērošanu un intuīciju.
    -   Padomi: Kad esi ļoti prasmīgs novērošanā un prognozēšanā, tu vari, atkarībā no kuba konkrētā stāvokļa, prioritāri veidot citus blokus vai arī vienlaicīgi veidot abus tiltus. Tas ļaus samazināt soļu skaitu un nodrošinās lielāku brīvību.
2.  **Atrisiniet augšējā slāņa četru stūra gabalu orientāciju**: Visi četri dzeltenie uz augšu.
    -   Augšējā slāņa stūra gabalu trīs ciklu apmaiņa: **R U' L' U R' U' L U** (kreisais apakšējais stūra gabals paliek nemainīgs, pārējo trīs stūra gabalu iekšējās krāsas griežas pulksteņrādītāja virzienā).
    -   Augšējā slāņa stūra gabalu trīs ciklu apmaiņas spoguļversija: **L' U R U' L U R' U'** (labais apakšējais stūra gabals paliek nemainīgs, pārējo trīs stūra gabalu iekšējās krāsas griežas pretēji pulksteņrādītāja virzienam).
3.  **Atrisiniet augšējā slāņa četru stūra gabalu sānu malas**.
    -   **Augšējā slāņa stūra gabalu pozīcijas precizēšana**: **R U2 R' U' R U2 L' U R' U' L** (saglabā, ka visi četri stūra gabali ir ar dzelteno pusi uz augšu, apmaina divu labās puses stūra gabalu pozīcijas).
4.  **Mainiet malas gabalu orientāciju, lai baltā vai dzeltenā krāsa būtu vērsta uz augšu vai uz leju**.
    -   Vispirms izlīdziniet centra gabalus, novietojot dzelteno pusi augšpusē, balto pusi apakšpusē, un pēc tam pielāgojiet malas gabalus.
    -   Mainiet "slikto" malu skaitu, izmantojot **M' U M**, izveidojiet bultu, pavērsiet bultu pret "slikto" malu, veiciet vienu **M' U M** – visas četras "sliktās" malas tiks neitralizētas un atgriezīsies savās pozīcijās.
5.  **Atrisiniet kreisās un labās puses malas gabalus (sarkanie un oranžie)**.
    -   Vispirms nogremdējiet sarkano-dzelteno (vai oranžo-dzelteno) malu, apmainot augšējās un apakšējās malas (**M' U2 M**).
6.  **Atrisiniet atlikušās malas (zilās un zaļās)**.
    -   Nepārtraukti izmantojiet **malas gabalu trīs ciklu apmaiņu**, lai apmainītu augšējās un apakšējās malas: **M' U2 M**. Pēdējais solis – novērošana un novietošana vietā ar **U2**.

Neviena no šīm formulām nav jāiegaumē; tās pievienotas pielikumā tikai ērtībai. Patiesībā, kad sāksi pats darboties, vērojot un saprotot, kā pārvietojas attiecīgie bloki, pēc dažiem mēģinājumiem jau būsi apguvis. Galvenais ir samainīt trīs augšējā slāņa stūra blokus.

## Pielikums 2: Noderīgas tīmekļa vietnes un rīki

Esmu jums izveidojis arī 3D Rubika kubu, ar kuru var spēlēties tiešsaistē. To var brīvi griezt, kā arī sajaukt un atrisināt pēc fiksētām formulām, un katrs solis ir redzams ar skaistu animāciju!

[3D Rubika kubs — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Tiešsaistes 3D Rubika kuba rīks](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Šīs pamācības izmantotā sajaukšanas formula: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Šīs pamācības kreiso un labo tiltu atrisināšanas soļi: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Atverot šo saiti, tu redzēsi jau sajauktu kubu: [3D Rubika kubs — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Rubika kuba taimeris, ko izmanto pasaules čempioni: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
