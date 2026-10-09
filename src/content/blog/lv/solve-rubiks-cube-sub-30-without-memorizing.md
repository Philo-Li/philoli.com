---
layout: blog
title: "Kā salikt Rubika kubu zem 30 sekundēm, neiemācoties algoritmus: saprotams pat sākumskolēniem"
date: 2026-10-09 12:00:00
tags:
  - Rubika kubs
  - pamācība
  - Roux metode
  - ātrsalikšana
  - mērķtiecīga prakse
categories: Ikdienas darbošanās
description: "No pirmās salikšanas reizes līdz Ao100 zem 30 sekundēm pagāja 89 dienas, neiemācoties nevienu CFOP algoritmu. Izmantojot 4441 salikšanas laika datus, izanalizēju četras fāzes: kur katrā fāzē rodas grūtības, ko trenēt un kāpēc Roux metodei nav nepieciešams iegaumēt algoritmus."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Četras fāzes no 165 sekundēm līdz 28 sekundēm" />
</figure>

*Attēls: Četras fāzes no 165 sekundēm līdz 28 sekundēm. Otrajā fāzē laiks kritās visstraujāk, bet trešā fāze bija visgarākais plato periods.*

Iepriekšējā rakstā [“Kā salikt Rubika kubu, neiemācoties algoritmus”](/lv/blog/solve-rubiks-cube-without-formulas/) jūs apguvāt Rubika kuba salikšanu, izmantojot komutatoru loģiku, bez nepieciešamības iegaumēt algoritmus. Šis raksts saņēma daudz pozitīvu atsauksmju.

Ja sekojāt norādījumiem, tagad jums, iespējams, ir nepieciešamas divas vai trīs minūtes, un, lai gan tas ir neveikli, jūs spējat salikt kubu. Tad radīsies jauns jautājums: kā kļūt ātrākam?

Ja meklējat "Rubika kuba ātrsalikšana", visas pamācības jums teiks vienu un to pašu: ja vēlaties salikt kubu zem 30 sekundēm, vispirms iegaumējiet CFOP algoritmus. F2L – 41 algoritms, OLL – 57, PLL – 21, kopā 119 algoritmi. Pat ja F2L veicat intuitīvi, no 78 augšējā slāņa algoritmiem nevar izvairīties. Ja tos neiegaumēsiet, par ātru salikšanu varat aizmirst.

Šis raksts vēlas jums pateikt, ka jūs varat salikt kubu zem 30 sekundēm, pilnībā neiemācoties nevienu algoritmu.

<!--more-->

No 2026. gada 7. maija, kad pirmo reizi saliku Rubika kubu, līdz 4. augustam, kad sasniedzu Ao100 zem 30 sekundēm, pagāja 89 dienas. Šajā laikā es neiemācījos nevienu CFOP algoritmu, vienkārši spēlējos brīvajā laikā. Šie ir mani reģistrētie 4441 salikšanas laika dati.

![4441 salikšanas rezultātu līkne](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Attēls: 4441 salikšanas rezultātu līkne. Pelēkā līnija ir katras salikšanas laiks, tumšā līnija ir Ao100 tendence, sarkanie punkti ir reizes, kad tika uzlabots personīgais rekords. Labākais Ao100 bija 28,22 sekundes.*

Apzināti un mērķtiecīgi trenējoties un uzturot treniņu biežumu, ikviens var dažu mēnešu laikā sasniegt sub-30 rezultātu no nulles līmeņa.

Ko nozīmē zem 30 sekundēm? [1982. gada pirmajā Rubika kuba pasaules čempionātā](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) čempiona rezultāts bija 22,95 sekundes, kas vēlāk tika atzīts par pirmo oficiālo WCA pasaules rekordu; 10. vieta bija 29,11 sekundes, un šo rezultātu sasniedza pati Jessica Fridrich, CFOP metodes izgudrotāja, par kuru runāsim nākamajā sadaļā. Citiem vārdiem sakot, mūsdienu amatiera sub-30 rezultāts, kas sasniegts dažu mēnešu laikā, 1982. gadā būtu iekļuvis pasaules desmitniekā.

Turpmāk es dalīšos ar jums savā ceļā un pilnībā izklāstīšu visu treniņu metodi.

## Kāpēc ātrsalikšanas pasaulē visi iegaumē algoritmus

Vispirms noskaidrosim vienu lietu: kāpēc "ātrums" un "algoritmu iegaumēšana" cilvēku prātos ir saistīti?

1980. gadu sākumā čehu izcelsmes profesore Jessica Fridrich (kura vēlāk Bingenamtonas universitātē pētīja digitālo kriminālistiku) izveidoja slāņu salikšanas metodi, kas vēlāk tika nosaukta par CFOP (Cross, F2L, OLL, PLL). Šīs metodes pamatā ir visu iespējamo augšējā slāņa situāciju izklāsts, katrai situācijai piešķirot optimālu algoritmu. Jūs atpazīstat situāciju, izpildāt algoritmu un jums nav jādomā.

![Jessica Fridrich un Rubika kubs viņas birojā](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Attēls: Jessica Fridrich un Rubika kubs viņas birojā. 1982. gadā viņa ar 29,11 sekundēm ieguva 10. vietu pirmajā pasaules čempionātā, un CFOP metode ir nosaukta viņas vārdā (Fridrich Method).*

Šī metode ir ļoti ātra. Gandrīz visi pasaules rekordi ir sasniegti, izmantojot CFOP. Tāpēc visas pamācības to māca, visi video par to stāsta, un "mācīties ātrsalikšanu" ir vienāds ar "mācīties CFOP", bet mācīties CFOP ir vienāds ar 119 algoritmu iegaumēšanu.

Taču ņemiet vērā, ka "algoritmu iegaumēšana" ir CFOP metodes īpašība, nevis "ātruma" paša īpašība. CFOP ir jāiegaumē, jo tā izvēlējās izklāsta ceļu. Izklāsts prasa atmiņu, un tas ir tā cena.

Vai ir metodes, kas neiet šo izklāsta ceļu? Ir.

## Salikšana bez algoritmu iegaumēšanas: Roux metode

2003. gadā francūzis Gilles Roux publicēja pilnīgi atšķirīgu pieeju. Tā nav slāņu slāņošana, bet gan vispirms divu 1x2x3 "bloku" veidošana (kreiso un labo), pēc tam četru augšējā slāņa stūru apstrāde un visbeidzot atlikušo sešu malu gabalu pabeigšana, izmantojot M-slāņa un U-slāņa griezienus.

![Gilles Roux sacensībās](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Attēls: Gilles Roux sacensībās. Izgriezums no agrīnu sacensību video, attēls uzlabots ar AI.*

Iepriekšējā rakstā mēs jau vienu reizi salikām kubu, izmantojot šo ietvaru. Šeit vēlreiz aplūkosim četrus soļus, šoreiz pievēršot uzmanību tam, "kas katrā solī ir jāiegaumē":

| Solis | Saturs | Iegaumējamie algoritmi |
| --- | --- | --- |
| 1. Pirmais bloks | Izveidot 1×2×3 bloku | 0, tīra novērošana |
| 2. Otrais bloks | Simetriski izveidot otru | 0, tīra novērošana |
| 3. CMLL | Augšējā slāņa stūru novietošana | 9, visas var izsecināt no trīspārmaiņām |
| 4. LSE | Pēdējie seši malu gabali | 0, izmanto tikai augšējā un vidējā slāņa (M un U) griezienus |

Trīs no četriem soļiem neprasa nekādus algoritmus. Vienīgais nepieciešamais CMLL, kopā ir 42 gadījumi, bet jums nav jāzina visi 42. Iepriekšējā rakstā aprakstītā stūru trīspārmaiņa R U' L' U R' U' L U, kopā ar tās spoguļattēliem un dažām variācijām, var aptvert visus gadījumus, tikai nedaudz lēnāk.

![Roux metodes četri soļi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Attēls: Roux metodes četri soļi, katrā solī redzami tikai tie gabali, kas ir novietoti līdz attiecīgajam solim: Pirmais bloks → Otrais bloks → CMLL (augšējie četri stūri) → LSE (pēdējās sešas malas). Izgriezums no manas 3D kuba lapas "Metodes" paneļa.*

Tāpēc Roux metodei nav nepieciešams iegaumēt algoritmus: tā saspiež iegaumēšanas daļu ļoti mazā stūrītī, pārējo atstājot novērošanai, izpratnei un veiklībai.

## No 165 sekundēm līdz 28 sekundēm: četri posmi

Zemāk ir mans patiesais ceļš. Katrā posmā esmu norādījis sākumu un beigas ar datiem, un tad aprakstījis, kur es iestrēgu un ko trenēju. Jūsu sastrēguma punkti var atšķirties no manējiem, bet secība, visticamāk, būs tāda pati.

![Četru posmu laika posms](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Attēls: Četru posmu laika posms. Pirmais posms 3 nedēļas, otrais posms 11 dienas, trešais posms divi mēneši, ceturtais posms līdz šim.*

### Pirmais posms: 165 sekundes → 60 sekundes (1.–3. nedēļa)

**Dati**: No 7. maija līdz 27. maijam. Pirmajā nedēļā vidēji 165 sekundes, trešajā nedēļā 68 sekundes.

**Kur rodas grūtības**: Pirmais bloks ir ļoti neprasmīgs, katru stūra un malas pāri ir jāmeklē ļoti ilgi. Turklāt, atradis pāri, iesācējs parasti apstājas un turpina novērot.

![Kur iesācēji pavada laiku](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Attēls: Kur iesācēji pavada laiku. Rokas stāv mierā, acis meklē pa kubu, "meklēšanas" laiks ir vairākas reizes ilgāks nekā "griešanas" laiks.*

**Ko trenēt**:

Šajā posmā lielākais ienaidnieks nav lēnas rokas, bet gan lēnas acis. Laiks, ko pavadāt "meklējot", ir daudz ilgāks nekā laiks, ko pavadāt "griežot". Tāpēc:

- Fiksējiet novērošanas pozīciju, negroziet kubu. Kā minēts iepriekšējā rakstā, Roux metodes novērošanas leņķis ir fiksēts. Šajā posmā "negrozīt kubu" ir jākļūst par muskuļu atmiņu. Katru reizi, kad vēlaties pagriezt kubu, apstājieties un pajautājiet sev: vai no šī leņķa es varu redzēt gabalu, ko meklēju?
- Lēnā griešana. Nesaliekot uz laiku, taču kustībām jābūt secīgām, bez apstāšanās; katra kustība var būt ļoti lēna, bet bez pauzēm. Galvenais ir, kamēr rokas veic iepriekšējo kustību, acīm jākoncentrējas uz nākamo kustību – tas ir lēnās griešanas pamats. Tas var šķist, ka palēnināsiet, taču patiesībā jūs trenējat acis saskatīt sakarību starp gabala pašreizējo atrašanās vietu un tā paredzēto vietu.
- Trenējieties tikai pirmo bloku. Sajauciet, uzbūvējiet pirmo bloku, atkal sajauciet, atkal uzbūvējiet pirmo bloku. Neturpiniet tālāk. Pirmais bloks ir visbrīvākais solis Roux metodē un vislabāk trenē novērošanas prasmes.

Šajā posmā nemācieties nekādus jaunus algoritmus. Jūsu šī brīža šķērslis nav algoritmi.

### Otrais posms: 60 sekundes → 40 sekundes (4.–5. nedēļa)

**Dati**: No 27. maija līdz 7. jūnijam, 11 dienas. Šis bija visstraujākais kritums visā procesā, un es trenējos visvairāk tieši šajā posmā – jūnija pirmajā nedēļā 723 reizes.

**Kur rodas grūtības**: Kustības nav secīgas. Kubs iestrēgst.

**Ko trenēt**:

Šajā posmā jums ir jāoptimizē katra posma kustības, pamatojoties uz izpratni, un jāpalielina katras kustības veiklība.

- Otrais bloks. Otrais bloks ir grūtāks nekā pirmais bloks, jo ir par pusi mazāk vietas, un jau pabeigtais pirmais bloks nedrīkst tikt sabojāts. Svarīgākie griezieni ir R, r (labie divi slāņi), M, U. Šajā posmā ir jāiemācās izmantot r un M, lai pārvietotu gabalus, tādējādi pirmais bloks nekad netiks sabojāts. Kustību optimizēšana ir laika taupīšana. Piemēram, trīs griezieni pulksteņrādītāja virzienā ir līdzvērtīgi vienam griezienam pretēji pulksteņrādītāja virzienam.
- Prasmīgi izmantot M slāni. Roux metodes pēdējais solis pilnībā balstās uz M un U, un M slāņa griešanās raitums tieši nosaka jūsu apakšējo laika robežu. Izmantojiet zeltnesi vai vidējo pirkstu, lai stumtu M, sāciet trenēt M' U M' U ritmu.
- CMLL formu atpazīšana. Iepriekšējā rakstā mēs izmēģinājām četrus stūrus, izmantojot trīspārmaiņas. Tagad jāsāk vispirms skatīties un tad darīt: pirms augšējā slāņa pagriešanas, paskatieties uz četru stūru dzelteno virzienu, lai noteiktu, vai ir 0, 1, 2 vai 4 pareizi orientēti stūri, un tad tieši veiciet atbilstošo darbību. Jūs varat arī ar ļoti maz algoritmiem ievērojami palielināt efektivitāti, kas ir ļoti izdevīgi. Lielākā daļa no šiem algoritmiem nav jāiegaumē no galvas, bet jāapgūst un jāsaprot, darot.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Skats, veidojot otro bloku" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Attēls pa kreisi: Skats, veidojot otro bloku. Pirmais bloks ir pabeigts, un, izmantojot tikai R, r, M, U griezienus, labās puses stūra un malas pāris tiek ievietots, un pirmais bloks nekad netiek aizskarts. Attēls pa labi: M' U M, visbiežāk izmantotā darbību kombinācija Roux metodes otrajā pusē. Vidējais slānis nāk uz augšu, augšējais slānis tiek pagriezts, vidējais slānis atgriežas, trīs soļi apmaina augšējā un vidējā slāņa malu pāri.*

Varat apskatīt manu [Roux metodes algoritmu bibliotēku](/lv/projects/rubiks-cube/roux#cmll). CMLL lapa ir divpakāpju: 7 orientācijas algoritmi + 2 pozīcijas algoritmi, kopā 9. Tā ir cenas un veiktspējas izvēle ātruma uzlabošanai, ko ir viegli apgūt, un katra apgūtā algoritmu grupa var paātrināt salikšanu par aptuveni 1-2 sekundēm. Ar nelielu praksi jūs ātri kļūstat prasmīgi, un daži no tiem jau tika iepazīstināti iepriekšējā rakstā. Jums nav jāiegaumē visi, lai sasniegtu zem 30 sekundēm.

![Divpakāpju CMLL pirmais solis, septiņas stūru orientācijas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Attēls: Divpakāpju CMLL pirmais solis, septiņas stūru orientācijas. Skatā no augšas, dzeltenā krāsa ir augšējās virsmas krāsa, bet mazās svītras ārpusē norāda stūra augšējās virsmas krāsas orientāciju uz sāniem. Atpazīstiet formu pēc dzelteno stūru skaita: 0 ir H vai Pi, 1 ir S vai AS, 2 ir U, T vai L.*

Pēc dzelteno augšējo virsmu izlīdzināšanas varat izmantot šos divus algoritmus, lai izlīdzinātu stūru sānu virsmas.

Ja viena puse jau ir vienā krāsā, piemēram, sarkanais ir vienā pusē, pagrieziet to uz kreiso pusi un tad varat izvēlēties blakus esošo apmaiņas algoritmu. Ja neviena puse nav vienā krāsā, izvēlieties diagonālo apmaiņas algoritmu.

![Divpakāpju CMLL otrais solis, divas stūru pozīcijas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Attēls: Divpakāpju CMLL otrais solis, divas stūru pozīcijas. Kreisajā attēlā divu kreiso stūru sarkanie gabali jau ir saskaņoti, izmantojiet blakus esošo apmaiņu; labajā attēlā neviena puse nav saskaņota, izmantojiet diagonālo apmaiņu.*

Jūs varat saprast katru algoritmu kopu, veicot daudz lēno griešanu. Neuztveriet tos kā algoritmus, bet gan kā noteiktas fiksētas kustības. Jūs varat lēnām izpētīt un atklāt šīs kustības pats, taču to saraksts šeit var ietaupīt jums laiku.

Vēl viena lieta, kas dod tūlītējus rezultātus, labāk nekā jebkurš treniņš: iztērējiet nedaudz naudas un iegādājieties jaunu Rubika kubu. Ja jums joprojām ir vecs kubs, kas griežot klikšķina un iestrēgst, pērciet modernu 3x3 kubu ar magnētiem. Jaunākie kubi liks jums sajust inženierijas optimizācijas spēku – tie griežas gludi, automātiski atgriežas vietā un gandrīz nekad neiestrēgst. Tikai nomainot kubu, vidējais rezultāts var uzlaboties par 15 sekundēm. Izdevīga izvēle ir [MoYu RS3 M V5 (MagLev + Ball-Core versija)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), ap divdesmit dolāriem, pietiekams, lai sasniegtu sub-20.

### Trešais posms: 40 sekundes → 30 sekundes (5.–13. nedēļa, divi mēneši)

**Dati**: No 7. jūnija līdz 4. augustam. Ao100 tika noslīpēts no 39,8 sekundēm līdz 29,9 sekundēm, kas prasīja 58 dienas. Šajā posmā retumis var parādīties rezultāti zem 30 sekundēm, taču tas notiek tikai ļoti veiksmīgi. Turklāt, samazinoties vidējam salikšanas laikam, katras sekundes uzlabošanas grūtības pieaugs eksponenciāli.

![Dienas vidējais rezultāts](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Attēls: Dienas vidējais rezultāts. Pēc jūnija vidus līkne gandrīz izlīdzinās, divus mēnešus slīdot starp 30 un 40 sekundēm.*

Šis ir plato periods. To piedzīvo ikviens, un es tajā pavadīju divus mēnešus.

**Kur rodas grūtības**: Augšējā slāņa sešu malu gabalu salikšana ir ļoti lēna, nav izpratnes par loģiku, katru reizi paļaujos uz atkārtotiem mēģinājumiem, tērējot daudz laika. Pirmais un otrais bloks joprojām nav pietiekami prasmīgi.

**Ko trenēt**:

- EO atpazīšana. Iepriekšējā rakstā jau minēju, ka nepareizi orientētām malām ir tikai dažas situācijas: 0, ne 0 ne 4, 4 (2 augšā, 2 apakšā), 4 (visi augšējā slānī), 4 (3 augšā, 1 apakšā). Šī posma mērķis ir: brīdī, kad bloks ir uzbūvēts, bez skaitīšanas, uzreiz atpazīt, kura situācija tā ir. Treniņa metode ir sajaukt, veikt līdz CMLL beigām, tad apstāties, nosaukt nepareizi orientēto malu skaitu un turpināt.
- Daudzi nesaprot šeit veiktās darbības. EO posma galvenais mērķis ir izveidot bultas formu ar 3 malām augšā un 1 malu apakšā, jo pilna forma ir tikai viena sajaukta soļa attālumā no bultas formas. Tāpēc, domājot atpakaļgaitā, tas ir pēdējais solis pirms salikšanas pabeigšanas, un neatkarīgi no nepareizi orientēto malu skaita, galvenais ir izveidot bultu. Ja augšā ir 4 nepareizi orientētas malas, apmainiet vienu augšējo un vienu apakšējo malu, lai vienu nepareizi orientētu malu pārvietotu uz leju un izveidotu bultu. Ja augšā ir 2 un apakšā 2, apmainiet vienu augšējo un vienu apakšējo malu, lai vienu nepareizi orientētu malu pārvietotu uz augšu un izveidotu bultu. Ja augšā ir 1 un apakšā 1, vai augšā ir 2, izmantojiet M' U M, lai vispirms pārvērstu to iepriekšējā situācijā un tad izveidotu bultu. Jūs varat patstāvīgi izpētīt labākos soļus 1/1 situācijai, veicot daudz novērojumu un domājot.
- Daudz trenējieties look-ahead. Tā ir vissvarīgākā lieta, lai no 40 sekundēm nokļūtu līdz 30 sekundēm, un arī vispretrunīgākā: griezt lēnāk, skatīties tālāk. Veidojot pirmo bloku, neskatieties uz gabalu, ko ievietojat, bet gan uz nākamo gabalu. Sākumā tas būs ļoti neērti, un rezultāti sākumā pasliktināsies, taču, izturot nedēļu, tie pēkšņi uzlabosies.
- CMLL bez vilcināšanās. Ja katru reizi jums ir jāpadomā, pirms uzdrošināties veikt kādu darbību, tad tā vēl nav jūsu. Trenējiet katru darbību atsevišķi 50 reizes, līdz roka kustas, redzot formu.

![Bultas forma](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Attēls: Bultas forma. Trīs nepareizi orientētas malas (izceltas zilganzaļā krāsā) augšējā slānī veido bultu, kas norāda uz nepareizi orientēto malu apakšējā slānī. Šajā brīdī viens M' U M var visas četras atgriezt vietā vienlaicīgi. [Atveriet šo stāvokli 3D kubā](/lv/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), lai soli pa solim apskatītu.*

![EO sešas formas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Attēls: EO sešas formas. Augšējā kreisajā stūrī ir etiķete ar nepareizi orientēto malu skaitu (augšā/apakšā), dzeltenais ir pareizi orientēts, zilganzaļais rāmis ir nepareizi orientēts. Tikai bultas formai ir nepieciešams algoritms, pārējās piecas vispirms tiek pārveidotas par bultas formu.*

Kreiso un labo malu gabalu salikšanai, ar dzelteno krāsu kā augšējo virsmu un balto kā apakšējo virsmu, un sarkano krāsu kā pirmo bloku, ir nepieciešams novietot dzelteno-sarkano malu gabalu + dzelteno-oranžo malu gabalu (izceltās vietas). Galvenā ideja ir dzelteno-sarkano malu gabalu ar augšējās un apakšējās malas apmaiņu pārvietot uz apakšējo virsmu, dzelteno-oranžo malu gabalu arī apmainīt uz apakšējo virsmu, abiem malu gabaliem atrodoties pretī apakšējā virsmā. Pēc tam augšējo virsmu pagriež atbilstošā pozīcijā, un ar M2 U vai M2 U' var salikt U-slāņa kreisās un labās malas.

Lai palīdzētu labāk saprast, esmu apkopojis visas sešas EO formas [Roux metodes algoritmu bibliotēkas LSE lapā](/lv/projects/rubiks-cube/roux#lse). Uzklikšķinot uz "Skatīt sīkāk" katrā attēlā, 3D kubā atvērsies atbilstošais stāvoklis, un nepareizi orientētās malas tiks automātiski izceltas. Tajā pašā lapā ir arī vēlākā UL/UR novietošana un visu pēdējo četru malu situācijas.

Šajā posmā treniņu apjoma samazināšana nav slikta lieta. Plato periodu nevar pārvarēt, vienkārši palielinot apjomu; tas ir jāpārvar, atbrīvojoties no konkrēta slikta ieraduma. Mana pieredze liecina, ka katru reizi jāmaina tikai viens ieradums.

### Ceturtais posms: 30 sekundes → 28 sekundes (pēc 13. nedēļas)

**Dati**: Pēc 4. augusta. Visā septembrī reģistrētais treniņu skaits bija 122 reizes, taču daudzi treniņi netika reģistrēti. Esmu Rubika kubu pārvērtis par rotaļlietu uz galda, kuru paņemu rokās un spēlējos, kad ir labs garastāvoklis, kad esmu nomākts vai noraizējies, darba pārtraukumos, kad ir garlaicīgi, ļaujot Rubika kuba spēlēšanai integrēties manā dzīvē. Ao100 arī pakāpeniski samazinājās no 29,9 līdz 28,2.

**Kur rodas grūtības**: Nav skaidras vājās vietas, tikai nepietiekama veiklība.

**Ko trenēt**:

Ja jūsu vidējais ātrums joprojām ir virs 30 sekundēm, tad vienīgais, kas jums jādara, ir turpināt intensīvi trenēties, nevis iegaumēt jaunus algoritmus.

Nepārtraukti trenējot look-ahead ar lēno griešanu, jūs kļūsiet arvien ātrāks.

Vienmēr turiet Rubika kubu pie rokas, piemēram, uz rakstāmgalda, lai varat ar to spēlēties darba starplaikos. Varat arī bieži ierakstīt savus salikšanas video, lai redzētu, kurā posmā tiek pavadīts visvairāk laika, un pēc tam mērķtiecīgi optimizēt. Tā ir mērķtiecīga prakse, un jūsu progresa ātrums nav atkarīgs no kopējā parasto treniņu skaita, bet gan no mērķtiecīgu treniņu skaita.

Tad jūs atklāsiet, ka, pārvarot 30-35 sekunžu sastrēguma periodu, ātrums atkal samazināsies par pakāpienu.

Šajā posmā apsveicu, iesācējiem jūs jau šķitīsiet ļoti prasmīgs spēlētājs!

## Cena par algoritmu neiegaumēšanu

Runājot par to, jābūt godīgam. Algoritmu neiegaumēšana nav bez maksas.

CMLL posms ir lēns. 42 situācijas, kas aptvertas ar 9 algoritmiem, nozīmē, ka dažas situācijas ir jāveic divreiz. Cilvēki, kas zina pilnu CMLL komplektu, šajā solī ir par divām vai trīs sekundēm ātrāki nekā es.

M slāņa pirkstu paņēmieniem ir augsts slieksnis. Roux metodes otrais posms pilnībā balstās uz M slāni, un M slāni ir grūtāk pagriezt nekā R un U, tas viegli iestrēgst un prasa vairāk no paša kuba.

Neuztraucieties par augšējo robežu. Starp labākajiem spēlētājiem ir arī tie, kas izmanto Roux metodi, lai iekļūtu pasaules topā; pašai metodei nav augšējās robežas. Taču, lai iekļūtu zem 15 sekundēm, jums, visticamāk, būs jāapgūst visi 42 CMLL algoritmi. Bet tas ir cits posms. Lai sasniegtu zem 30 sekundēm, tas nav nepieciešams.

Turklāt gandrīz visi pasaules klases spēlētāji, kas saliek kubu ar vienu roku, izmanto Roux metodi, jo tā patiešām ir ļoti piemērota arī salikšanai ar vienu roku.

**Ātrākie rezultāti oficiālajās sacensībās (WCA), izmantojot Roux metodi:**

- Labākais viens salikšanas laiks 4,11 sekundes, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipīnas), 2023. gada Valenzuela Cubing Open, atzīts par ātrāko Roux oficiālo vienu salikšanas laiku ([atjaunots video](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Vidējais laiks 5,98 sekundes, tas pats viņš, 2019. gadā, toreiz Āzijas rekords, arī trešais oficiālais sub-6 vidējais laiks vēsturē ([WCA dati](https://www.worldcubeassociation.org/persons/2017VILL41))
- Viņš ir arī [pasaules rekordists salikšanā ar vienu roku](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): vidēji 8,09, viens salikšanas laiks 6,05 (2024). Parasti tiek uzskatīts, ka Roux metode ir optimālākais risinājums salikšanai ar vienu roku.

Manuprāt, šis darījums ir ļoti izdevīgs. Jūs par divām vai trīs CMLL sekundēm iegūstat: katrā solī zināt, ko darāt, neaizmirsīsiet, pat ja trīs mēnešus nepieskarsieties kubam, un varēsiet atrast risinājumu jebkuram neredzētam kubam.

## Kopsavilkums

![Salikšana pabeigta](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

No kuba salikšanas līdz zem 30 sekundēm nav algoritmu iegaumēšanas process, bet gan roku, acu un smadzeņu koordinācijas treniņa process.

Četri posmi, četras lietas: vispirms iemācieties skatīties, negrozot kubu, tad iemācieties uzbūvēt otro bloku, nesabojājot pirmo bloku, tad iemācieties skatīties uz nākamo soli, veicot pašreizējo soli, un visbeidzot ļaujiet rokām sekot acīm.

Algoritmi nav ātruma avots. Novērošana ir.

Iemācieties veidot pozitīvu atgriezenisko saiti, progresējot katrā posmā. Pat veiklības treniņi var nebūt tik garlaicīgi, it īpaši, ja atklājat pārsteigumu, ka atkal labojat rekordu. It īpaši sākuma un vidējā posmā jūs katru dienu piedzīvosiet prieku, ko sniedz rekordu labošana.

Visi rakstā minētie algoritmi un situācijas ir apkopoti [Roux metodes algoritmu bibliotēkā](/lv/projects/rubiks-cube/roux). Ja iestrēgsiet, atgriezieties un pārbaudiet.

Rubika kuba pasaule ir pilna ar bezgalīgu prieku. Lai jums jauka spēlēšana!

## 1. pielikums: Katra posma treniņu saraksts

**Pirmais posms (> 60 sekundes)**

- Fiksēta novērošanas pozīcija, negrozīt kubu visā salikšanas procesā
- Bez apstāšanās atrast nākamo vēlamo krāsu
- Lēnā griešana, katrā solī nosaucot nolūku
- Trenēties tikai pirmo bloku, atkārtot 50 reizes

**Otrais posms (60 → 40 sekundes)**

- Otrais bloks tikai ar R, r, M, U, nepieskaroties pirmajam blokam
- Divpakāpju CMLL treniņš
- M' U M' U ritma treniņš, 5 minūtes dienā

**Trešais posms (40 → 30 sekundes)**

- Veikt līdz CMLL beigām, tad apstāties, uzreiz nosaukt nepareizi orientēto malu skaitu
- Lēnā griešana + look-ahead: acis vienmēr skatās uz nākamo gabalu
- Vismaz 20 kvalitatīvas salikšanas dienā

**Ceturtais posms (< 30 sekundes)**

- Ierakstīt video, lai atrastu pauzes
- Pirkstu paņēmieni: R U R' U' vienpirksta paņēmieni, M slāņa zeltnesis
- 20 kvalitatīvas salikšanas dienā, nevis vienkārši palielināt apjomu

## 2. pielikums: Instrumenti

- **csTimer**: [cstimer.net](https://cstimer.net/). Atveriet Ao5 / Ao12 / Ao100 statistiku, Ao100 ir jūsu patiesais līmenis, viens salikšanas laiks ir veiksme.
- **3D Rubika kubs**: [philoli.com/zh/projects/rubiks-cube](/lv/projects/rubiks-cube/). Visus šī raksta algoritmus var ievadīt šeit un skatīties animāciju.
- **Roux metodes iesācējiem draudzīga algoritmu bibliotēka**: [philoli.com/zh/projects/rubiks-cube/roux](/lv/projects/rubiks-cube/roux). Pirmo bloku, otro bloku bieži lietotās ievietošanas metodes, divpakāpju CMLL 9 algoritmi, visas LSE situācijas (EO, UL/UR, pēdējās četras malas). Katru attēlu var atvērt 3D kubā, automātiski slēpjot neatbilstošus blokus un izceļot pārvietojamās malas.
- **csTimer treniņu analizators**: [philoli.com/zh/projects/rubiks-cube/analyzer](/lv/projects/rubiks-cube/analyzer). Ievelciet eksportēto csTimer failu, un jūs redzēsiet savu rezultātu tendences, Ao5/Ao12/Ao100 līknes, PB uzlabojumus, svarīgākos posmus (kad pirmo reizi sasniedzāt sub-60, sub-40, sub-30) un potences likuma prakses līkni. Visi šī raksta attēli nāk no šejienes. Dati tiek apstrādāti tikai jūsu pārlūkprogrammā, tie netiek augšupielādēti. Ja jums nav eksportēta faila, varat vispirms ielādēt manus 4441 datus, lai redzētu efektu.

*Šis raksts satur Amazon partneru saites: pērkot, izmantojot saites, es saņemu nelielu komisijas maksu, jūsu cena nemainās.*

## Papildu lasāmviela

- [Kā salikt Rubika kubu, neiemācoties algoritmus: saprotams pat sākumskolēniem](/lv/blog/solve-rubiks-cube-without-formulas)
