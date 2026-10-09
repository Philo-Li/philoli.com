---
layout: blog
title: "Kuidas jõuda Rubiku kuubiku lahendamisel alla 30 sekundi ilma algoritme pähe õppimata: arusaadav ka algklassilapsele"
date: 2026-10-09 12:00:00
tags:
  - kuubik
  - õpetus
  - Roux' meetod
  - kiirkuubimine
  - teadlik harjutamine
categories: Igapäevased toimetused
description: "Esimest korda kuubikut lahendamast Ao100 alla 30 sekundi jõudmiseni kulus 89 päeva, ilma ühtegi CFOP algoritmi õppimata. Analüüsime 4441 ajastatud lahenduse andmeid neljas etapis: kus tekkis takistus, mida harjutada ja miks Roux' meetod ei vaja algoritmide päheõppimist."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Kuidas jõuda Rubiku kuubiku lahendamisel alla 30 sekundi ilma algoritme pähe õppimata: arusaadav ka algklassilapsele" />
</figure>

Eelmises postituses [„Kuidas lahendada Rubiku kuubikut ilma algoritme pähe õppimata”](/et/blog/solve-rubiks-cube-without-formulas/) õppisid sa kuubikut lahendama kommutatorite loogikat kasutades, ilma et peaksid mingeid algoritme pähe õppima. See artikkel sai väga palju positiivset tagasisidet.

Kui oled samm-sammult kaasa teinud, peaksid suutma kuubiku küll kohmakalt, aga tervikuna ära lahendada. Pärast paarisada harjutuskorda on lihtne jõuda alla 1 minuti. Kuid mis siis, kui soovid veelgi kiiremat aega?

Kui otsid „kiirkuubimine”, ütlevad kõik õpetused sulle sama asja: kui tahad jõuda alla 30 sekundi, pead esmalt üle saja CFOP algoritmi pähe õppima.

Selle artikliga tahan sulle öelda, et sa saad jõuda alla 30 sekundi täiesti ilma algoritme pähe õppimata.

<!--more-->

Alates esimesest täielikust kuubiku lahendamisest 7. mail 2026 kuni Ao100 alla 30 sekundi jõudmiseni 4. augustil kulus mul 89 päeva. Selle aja jooksul ei õppinud ma ühtegi CFOP algoritmi, vaid mängisin kuubikuga lihtsalt vabal ajal. Siin on minu 4441 registreeritud lahenduse ajastatud andmed.

![4441 lahenduse tulemuste kõver](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Joonis: 4441 lahenduse tulemuste kõver. Hall joon näitab iga lahenduse aega, tume joon Ao100 trendi ja punased punktid isikliku rekordi parandamise kordi. Parim Ao100 oli 28,22 sekundit.*

Teadliku ja järjepideva harjutamisega võib igaüks saavutada nullist alla 30 sekundi tulemuse vaid paari kuuga.

Mida tähendab alla 30 sekundi? [1982. aasta esimesel Rubiku kuubiku maailmameistrivõistlustel](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) oli võitja aeg 22,95 sekundit, mis on ka WCA poolt hiljem tunnustatud esimene ametlik maailmarekord; 10. koha saavutas 29,11 sekundiga Jessica Fridrich ise, kellest räägin järgmises jaotises CFOP loojana. Teisisõnu, tänapäeval amatööri poolt paari kuuga saavutatud alla 30 sekundi tulemus oleks 1982. aastal taganud koha maailma esikümnes.

Järgnevalt jagan sinuga, kuidas ma samm-sammult selleni jõudsin, ja annan sulle edasi kogu harjutamismeetodi.

## Miks kiirkuubimise maailm õpib algoritme pähe

Alustame sellest, et mõistame üht asja: miks on „kiirus” ja „algoritmide päheõppimine” inimeste meelest lahutamatult seotud?

1980. aastate alguses süstematiseeris Tšehhi päritolu professor Jessica Fridrich (kes hiljem uuris digitaalset kohtuekspertiisi Binghamtoni ülikoolis) kiht-kihilt lahendamise meetodi, mida hakati hiljem kutsuma CFOP-ks (Cross, F2L, OLL, PLL). Selle meetodi põhimõte on: kaardistada kõik võimalikud olukorrad ülemisel kihil ja igale olukorrale omistada optimaalne algoritm. Sa tunned olukorra ära, sooritad algoritmi ja mõtlemist pole vaja.

![Jessica Fridrich ja Rubiku kuubik tema kontoris](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Joonis: Jessica Fridrich ja Rubiku kuubik tema kontoris. 1982. aastal saavutas ta 29,11 sekundiga esimesel maailmameistrivõistlusel 10. koha. CFOP on tema järgi nimetatud (Fridrich Method).*

See meetod on äärmiselt kiire. Peaaegu kõik maailmarekordid on saavutatud CFOP-ga. Seepärast õpetavad seda kõik õpetused, räägivad sellest kõik videod, ja „kiirkuubimise õppimine” on võrdne „CFOP õppimisega”, mis omakorda võrdub 119 algoritmi päheõppimisega.

Kuid pane tähele, „algoritmide päheõppimine” on CFOP kui meetodi eripära, mitte kiiruse enda omadus. CFOP nõuab päheõppimist, sest see valis ammendava lähenemise. Ammendavus nõuab mälu, ja see on selle hind.

Kas on olemas meetodeid, mis ei kasuta ammendavat lähenemist? On.

## Algoritmideta lahendus: Roux' meetod

2003. aastal avalikustas prantslane Gilles Roux täiesti erineva lähenemise. See ei ole kiht-kihilt ladumine, vaid kõigepealt ehitatakse kaks 1×2×3 „blokki” vasakule ja paremale, seejärel paigutatakse ülemise kihi neli nurgatükki ning lõpuks jääb alles ainult kuus servatükki, mis lahendatakse keskmise kihi M-pöörete ja ülemise kihi U-pööretega.

![Gilles Roux võistlusel](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Joonis: Gilles Roux võistlusel. Kärbitud varajasest võistlusvideost, pilti on tehisintellekti abil taastatud ja suurendatud.*

Eelmises postituses lahendasime selle raamistiku abil juba korra kuubiku. Vaatame siin selle nelja etappi uuesti, keskendudes seekord sellele, „mida igas etapis meeles pidada”:

| Samm | Sisu | Päheõppimiseks vajalikud algoritmid |
| --- | --- | --- |
| 1. Esimene blokk | Ehita 1×2×3 blokk | 0, puhas vaatlus |
| 2. Teine blokk | Ehita sümmeetriline blokk | 0, puhas vaatlus |
| 3. CMLL | Ülemise kihi neli nurgatükki paika | 9, kõik tuletatavad kolmest tsükli algoritmist |
| 4. LSE | Viimased kuus servatükki | 0, kasutatakse ainult ülemise ja keskmise kihi (M ja U) pöördeid |

Neljast sammust kolm ei vaja mingeid algoritme. Ainus vajalik CMLL, kus kõik olukorrad kokku on 42, kuid sa ei vaja 42 algoritmi. Eelmises postituses mainitud nurgatükkide kolme tsükli algoritm R U' L' U R' U' L U, lisaks selle peegelpilt ja mõned variandid, katavad kõik olukorrad, lihtsalt veidi aeglasemalt.

![Roux' meetodi neli sammu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Joonis: Roux' meetodi neli sammu. Igas etapis on näidatud ainult need tükid, mis on selleks hetkeks juba paika saanud: Esimene blokk → Teine blokk → CMLL (ülemise kihi nurgad) → LSE (viimased kuus servatükki). Kärbitud minu 3D kuubiku lehe „Lahendus” paneelilt.*

See on põhjus, miks Roux' meetodiga saab ilma algoritme õppimata: see surub meeldejätmise vajaduse väga väiksesse nurka, jättes ülejäänu vaatlusele, mõistmisele ja harjutamisele.

## 165 sekundist 28 sekundini: neli etappi

![Nelja etapi ajaline ulatus](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Joonis: Nelja etapi ajaline ulatus. Esimene etapp 3 nädalat, teine 11 päeva, kolmas kaks kuud, neljas siiani.*

### Esimene etapp: 165 sek → 60 sek (1.–3. nädal)

**Andmed**: 7. maist 27. maini. Esimese nädala keskmine oli 165 sekundit, kolmandal nädalal 68 sekundit. See etapp on üleminek algajast baastasemeni, kus korduste käigus hakkad järk-järgult mõistma, mida iga liigutus tegelikult tähendab ja millised tükid liiguvad.

**Kus takerdusin**: Esimene blokk oli väga ebakindel, iga nurgatüki-servatüki paari otsimine võttis kaua aega. Ja pärast paari leidmist kipuvad algajad alati peatuma ja edasi vaatlema.

![Kuhu algajad oma aega kulutavad](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Joonis: Kuhu algajad oma aega kulutavad. Käed on paigal, silmad otsivad kuubikul, ja „otsimise” aeg on kordades pikem kui „pööramise” aeg.*

**Mida harjutada**:

Selle etapi suurim vaenlane pole mitte aeglased käed, vaid aeglased silmad. Sa kulutad „otsimisele” palju rohkem aega kui „pööramisele”. Seega:

-   Fikseeri vaatlusnurk, ära pööra kuubikut. Nagu eelmine kord mainitud, on Roux' meetodi vaatlusnurk fikseeritud. Selles etapis tuleb „kuubiku mitte pööramine” muuta lihasmäluks. Iga kord, kui tahad kuubikut pöörata, peatu ja küsi endalt: kas ma näen soovitud tükki sellest nurgast?
-   Aeglane lahendamine (slow solving). Ära ajasta, kuid liigutused peavad olema pidevad, ilma igasuguste pausideta. Iga liigutus võib olla väga aeglane, kuid ärge tehke pause. Põhiline on see, et samal ajal, kui käed teevad eelmist liigutust, peavad silmad keskenduma järgmisele liigutusele – see on aeglase lahendamise tuum. See võib tunduda aeglustamisena, kuid tegelikult treenib see su silmi nägema tükkide asukoha ja nende õige asukoha vahelist seost.
-   Harjuta ainult esimest blokki. Sega kuubik, ehita esimene blokk, sega uuesti, ehita uuesti esimene blokk. Ära tee edasi. Esimene blokk on Roux' meetodi kõige vabam samm ja samuti samm, mis kõige paremini treenib vaatlusoskust.

Ära õpi selles etapis ühtegi uut algoritmi. Sinu praegune pudelikael ei ole algoritmides.

### Teine etapp: 60 sek → 40 sek (4.–5. nädal)

**Andmed**: 27. maist 7. juunini, 11 päeva. See oli kogu protsessi kõige kiirema langusega osa. Selles etapis tekib kõige kergemini positiivne tagasiside: iga uus teadmine ja liigutuste lihvimine kajastub kohe ajas ning see igapäevane rekordite purustamise nauding on miski, millega vähesed asjad suudavad võistelda.

**Kus takerdusin**: Liigutused polnud sujuvad. Kuubik kiilus kinni.

**Mida harjutada**:

Selles etapis pead optimeerima iga etapi liigutusi, suurendades iga liigutuse vilumust arusaamise põhjal.

-   Teine blokk (SB). Teine blokk on raskem kui esimene, sest ruumi on poole vähem ja juba valminud esimest blokki ei tohi lõhkuda. Peamised pöörded on R, r (parem kaks kihti), M, U. Selles etapis tuleb õppida kasutama r ja M R asemel tükkide liigutamiseks, nii et esimene blokk ei saa kunagi rikutud. Liigutuste optimeerimine tähendab aja säästmist. Näiteks kolm päripäeva pööret on samaväärne ühe vastupäeva pöördega.
-   Harjuta M-kihi kasutamist. Roux' meetodi viimane samm on kõik M ja U pöörded, ja M-kihi sujuvus määrab otseselt sinu kiiruse alampiiri. Lükka M-kihti sõrmusesõrme või keskmise sõrmega ja hakka harjutama rütmi nagu M' U M' U.
-   CMLL mustrite äratundmine. Eelmises postituses "proovisime" neli nurgatükki kolme tsükliga paika saada. Nüüd tuleb hakata enne tegemist vaatama: enne ülemise kihi pööramist vaata korraks nelja nurgatüki kollast orientatsiooni ja otsusta, kas tegemist on 0, 1, 2 või 4 õige nurgatükiga, ja seejärel soorita otse vastav liigutus. Väga väheste algoritmidega saad saavutada märkimisväärse efektiivsuse tõusu, mis on väga tasuv. Suuremat osa neist algoritmidest ei pea pähe tuupima, vaid neid saab õppida tehes ja mõistes.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Vaade teise bloki ehitamisel" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Joonis vasakul: Vaade teise bloki ehitamisel. Esimene blokk on valmis, kasutatakse ainult R, r, M, U nelja tüüpi pöördeid, et parempoolsed nurgatüki-servatüki paarid paigutada, esimene blokk ei puutu kunagi. Joonis paremal: M' U M, kõige enam kasutatav liigutuste komplekt Roux' meetodi teises pooles. Keskmine kiht üles, ülemine kiht pööratakse, keskmine kiht tagasi – kolm sammu vahetavad ülemise ja keskmise kihi ühe servapaari.*

Saad vaadata minu koostatud, algajatele väga sõbralikku ja lihtsustatud [Roux' algoritmide kogu](/et/projects/rubiks-cube/roux#cmll). CMLL-i leht on kaheosaline: 7 orientatsiooniajastatud algoritmi + 2 positsioneerimisalgoritmi, kokku 9. See on parim valik kiiruse suurendamiseks ja need on kergesti õpitavad. Iga harjutatud komplekt võib anda 1-2 sekundi võidu. Vähese harjutamisega saad need kiiresti selgeks, mõnda neist on juba eelmises artiklis tutvustatud, ja kõiki neid ei pea meelde jätma, et jõuda alla 30 sekundi.

![Kaheetapilise CMLL-i esimene samm, seitse nurgatükkide orientatsiooni](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Joonis: Kaheetapilise CMLL-i esimene samm, seitse nurgatükkide orientatsiooni. Ülevalt vaates tähistab kollane ülespoole suunatud ülemise kihi värvi, välised väikesed ribad näitavad nurgatüki ülemise kihi värvi suunda küljele. Tunnusta kuju kollaste nurgatükkide arvu järgi: 0 on H või Pi, 1 on S või AS, 2 on U, T või L.*

Pärast kollaste ülemiste külgede joondamist saad kasutada neid kahte algoritmi nurgatükkide külgmiste külgede joondamiseks.

Kui üks külg on juba värvilt ühtiv, näiteks punane on juba samal küljel, pööra see vasakule ja seejärel saad valida külgnevate vahetuse algoritmi. Kui ükski külg pole värvilt ühtiv, vali diagonaalide vahetuse algoritm.

![Kaheetapilise CMLL-i teine samm, kaks nurgatükkide asendit](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Joonis: Kaheetapilise CMLL-i teine samm, kaks nurgatükkide asendit. Vasakpoolsel pildil on vasakpoolsed kaks nurgatükki juba punaselt ühtivad, kasutatakse külgnevate vahetust; parempoolsel pildil pole ükski külg ühtiv, kasutatakse diagonaalide vahetust.*

Saad neid algoritme paremini mõista suure hulga aeglase lahendamise abil. Ära käsitle neid algoritmide, vaid kindlate liigutustena. Sa võid need liigutused ka ise aegamisi avastada, kuid siin loetletud aitavad sul lühema teega edasi jõuda.

Veel üks asi, mis on igast harjutusest kiirem: kuluta natuke raha ja osta uus kuubik. Kui sul on veel see vana kuubik, mis keerates klõpsub ja üle keerates kinni jääb, osta endale magnetiline kaasaegne 3x3. Uusimad kuubikud annavad sulle tunda inseneroptimaalse disaini jõudu: sujuvad pöörded, automaatne joondumine ja peaaegu mitte kunagi kinni jäämine. Ainuüksi kuubiku vahetamine võib su keskmist aega kohe 15 sekundit parandada. Parim hinna ja kvaliteedi suhte valik on [MoYu RS3 M V5 (Maglev + Ball-Core versioon)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), umbes kahekümne dollari eest, piisab kuni sub-20 tasemeni.

### Kolmas etapp: 40 sek → 30 sek (5.–13. nädal, kaks kuud)

**Andmed**: 7. juunist 4. augustini. Ao100 lihviti 39,8 sekundilt 29,9 sekundile, mis võttis 58 päeva. Selles etapis võis aeg-ajalt ette tulla tulemusi alla 30 sekundi, kuid ainult väga hea õnne korral. Ja keskmise lahendusaja vähenedes kasvab 1 sekundi võrra paranemise raskus eksponentsiaalselt. (Ao100 tähistab viimase 100 lahenduse keskmist aega pärast 5% parimate ja halvimate tulemuste eemaldamist)

![Igapäevased keskmised tulemused](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Joonis: Igapäevased keskmised tulemused. Juuni keskpaigast alates on kõver peaaegu tasane, lihvides end 30–40 sekundi vahel kaks kuud.*

**Kus takerdusin**: Ülemise kihi kuue servatüki paigutamine oli väga aeglane, ei mõistnud loogikat, iga kord proovisin korduvalt, raiskasin palju aega. Esimene ja teine blokk ei olnud ikka veel piisavalt vilunud.

**Mida harjutada**:

-   EO äratundmine. Eelmine kord rääkisin, et valesti orienteeritud servatükke on vaid mõned olukorrad: 0, mitte 0 ja mitte 4, 4 (2 üleval, 2 all), 4 (kõik ülemisel kihil), 4 (3 üleval, 1 all). Selle etapi eesmärk on: kohe pärast blokkide ehitamist, ilma lugemata, ühe pilguga ära tunda, millise olukorraga on tegu. Harjutamiseks sega kuubik, tee ainult CMLL-i lõpuni, seejärel peatu, ütle valesti orienteeritud servatükkide arv ja jätka.
-   Paljud ei mõista siinseid liigutusi. EO etapi lõppeesmärk on alati konstrueerida ülemise 3 ja alumise 1 noolekujuline muster, sest täielik muster on juba ühe liigutuse kaugusel noolekujust. Seega, tagurpidi mõeldes, on see viimane samm enne lahendamist. Seega, olenemata valesti orienteeritud servatükkide arvust, on lõppeesmärk alati noolekuju konstrueerimine. Kui üleval on 4 valesti orienteeritud servatükki, vaheta üks paar ülemise ja alumise kihi vahel, et üks valesti orienteeritud servatükk alla viia ja noolekuju saavutada. Kui üleval on 2 ja all 2, vaheta üks paar ülemise ja alumise kihi vahel, et üks valesti orienteeritud servatükk üles tuua ja noolekuju saavutada. Kui üleval on 1 ja all 1, või üleval on 2, siis kasuta M' U M, et kõigepealt jõuda eelmiste olukordadeni ja seejärel konstrueerida noolekuju. Sa saad suure hulga vaatluse ja mõtlemise abil ise avastada 1/1 olukorra jaoks parimad sammud.

    ![Noolekujuline muster](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

    *Joonis: Noolekujuline muster. Ülemisel kihil kolm valesti orienteeritud servatükki (sinise tooniga esile tõstetud) moodustavad noole, mis osutab alumisel kihil olevale valesti orienteeritud servatükile. Sel hetkel saab ühe M' U M-iga kõik neli korraga paika. [Ava see olek 3D kuubikul](/et/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) ja vaata samm-sammult.*

-   Palju ettevaate (Look-ahead) harjutamist. See on kõige olulisem asi 40 sekundist 30 sekundini jõudmisel, ja ka kõige ebakindlam asi: pööra aeglasemalt, vaata kaugemale. Esimest blokki ehitades ära vaata sisestatavat tükki, vaata, kus on järgmine tükk. Alguses on see väga ebamugav ja tulemused halvenevad, kuid pärast nädalast harjutamist paranevad need järsku.
-   CMLL-is ära kõhkle. Kui sa pead iga liigutuse puhul enne mõtlema, siis see pole veel sinu oma. Harjuta iga liigutust eraldi 50 korda, kuni käsi liigub kohe, kui kuju näed.

![EO kuus mustrit](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Joonis: EO kuus mustrit. Ülemises vasakus nurgas on valesti orienteeritud servatükkide arv (ülemine / alumine), kollane tähistab õigesti orienteeritud servatükke, sinine raam tähistab valesti orienteeritud servatükke. Ainult noolekujuline muster vajab algoritmi, ülejäänud viis muudetakse esmalt noolekujuks.*

Vasak- ja parempoolsete servatükkide lahendamiseks peab kollane olema ülemine ja valge alumine külg, punane on näiteks esimese bloki värv. Siis tuleb paigutada kollase-punase servatüki + kollase-oranži servatüki (esile tõstetud kohad). Peamine idee on viia kollase-punase servatükk alumisele küljele ülemiste ja alumiste servatükkide vahetamise teel, samuti kollase-oranži servatükk alumisele küljele. Kaks servatükki on alumisel küljel vastamisi. Seejärel pööra ülemine külg sobivasse asendisse ja M2 U või M2 U' abil saab U-kihi vasak- ja parempoolsed servatükid paika.

Et aidata teil paremini aru saada, olen kõik kuus EO mustrit koondanud [Roux' meetodi algoritmide kogu LSE lehele](/et/projects/rubiks-cube/roux#lse). Igal pildil klõpsates „Vaata detailid” avatakse vastav olek 3D kuubikul, kus valesti orienteeritud servatükid on automaatselt esile tõstetud. Samal lehel on ka hilisem UL/UR paigutamine ja kõik viimaste nelja servatüki olukorrad.

Selles etapis harjutusmahu langus pole halb. Plaatelt ei saa läbi minna pelgalt kvantiteediga, vaid tuleb vabaneda konkreetsest halvast harjumusest. Minu kogemuse kohaselt tuleks korraga muuta vaid ühte asja.

### Neljas etapp: 30 sek → 28 sek (pärast 13. nädalat)

**Andmed**: Pärast 4. augustit. Septembris oli registreeritud treeningute arv 122 korda, kuid tegelikult oli palju treeninguid registreerimata. Olen muutnud kuubiku lauamänguasjaks, võtan selle suvaliselt kätte ja mängin – kui tuju hea, siis mitu korda, kui tühi või ärev, siis mitu korda, tööpausidel mitu korda, igavuse korral mitu korda. Lisan kuubikuga mängimise oma igapäevaellu. Ao100 on samuti järk-järgult langenud 29,9 sekundilt 28,2 sekundile.

**Kus takerdusin**: Puudus selge pudelikael, lihtsalt puudus piisav vilumus.

**Mida harjutada**:

Kui su keskmine kiirus on veel üle 30 sekundi, siis ainus asi, mida pead tegema, on jätkata hoogsalt harjutamist, mitte õppida uusi algoritme.

Jätka aeglase lahendamise abil ettevaate harjutamist ja sa muutud järjest kiiremaks.

Võta kuubik välja ja mängi iga kord, kui sul on aega. Hoia kuubikut kohas, kus see on kergesti kättesaadav, näiteks töölaual, et saaksid seda tööpausidel mängida. Samuti võid sageli salvestada oma lahendamise videoid, et näha, millises etapis kulub kõige rohkem aega, ja seejärel sihipäraselt optimeerida. See on teadlik harjutamine – sinu progressi kiirus ei sõltu mitte tavaliste harjutuste koguarvust, vaid teadlike harjutuste arvust.

Ja siis avastad, et pärast 30–35 sekundi pudelikaelast ülesaamist on su kiirus taas ühe astme võrra langenud.

Selleni jõudes õnnitlen sind, algajate silmis oled sa juba väga osav mängija!

## Järgmised sammud edasijõudmisel

Esiteks ära muretse Roux' meetodi ülempiiri pärast. Tipptasemel mängijate seas on neid, kes kasutavad Roux' meetodit ja jõuavad maailma tippu – meetodil endal pole ülempiiri.

Ja peaaegu iga maailmatasemel ühe käega lahendamise (OH) mängija kasutab Roux' meetodit, sest see sobib tõesti hästi ka ühe käega opereerimiseks.

**Ametlikud võistlused (WCA) Roux' meetodiga kiireimad tulemused:**

-   Üksiklahendus 4,11 sekundit, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipiinid), 2023. aasta Valenzuela Cubing Open, tunnustatud Roux' meetodi ametlik kiireim üksiklahendus ([taastatud video](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Keskmine 5,98 sekundit, samuti tema, 2019. aastal, tollal Aasia rekord ja ka ajaloo kolmas ametlik sub-6 keskmine ([WCA andmed](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Ta on ka [ühe käega lahendamise maailmarekordi omanik](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): keskmine 8,09, üksiklahendus 6,05 (2024). Ühe käega lahendamise ringkonnas peetakse Roux' meetodit üldiselt optimaalseks lahenduseks.

Kuid alla 15 sekundi jõudmiseks tuleb praegune kaheetapiline CMLL asendada üheetapilisega, mis nõuab rohkemate keeruliste algoritmide meeldejätmist.

Siiski eelistan ma vaba katsetamist: valemite ja algoritmide põhjalik mõistmine läbi avastamise ning isegi endale mugavate algoritmide loomine pakub palju rohkem rõõmu kui tuim päheõppimine.

Rubiku kuubik on algusest peale mõistatusmäng, mitte mälumäng. Ainult põhimõtetest aru saades suudad sa igal sammul teada, mida teed, ei unusta lahendamist ka pärast kolmekuulist pausi ning suudad tuletada lahenduse ükskõik millisele seni nägemata kuubikule.

## Kokkuvõte

![Lahendatud](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

*Joonis: Kuubik lahendatud.*

Kuubiku lahendamisest alla 30 sekundi jõudmine ei ole algoritmide päheõppimise protsess, vaid käte, silmade ja aju koordineerimise ja koostöö treenimise protsess.

Neli etappi, neli asja: esmalt õpi kuubikut pööramata vaatama, seejärel õpi ehitama teist blokki esimest rikkumata, siis õpi vaatama järgmist sammu samal ajal, kui teed praegust, ja lõpuks lase kätel silmadega sammu pidada.

Algoritmid ei ole kiiruse allikas. Vaatlus on.

Õpi iga etapi edusammude kaudu positiivset tagasisidet looma. Isegi vilumuse harjutamine ei pea olema nii tüütu, eriti kui avastad end jälle uue rekordi tegemise rõõmu. Eriti alg- ja keskastmes koged iga päev rekordite purustamise rõõmu.

Kõik artiklis mainitud algoritmid ja olukorrad olen koondanud [Roux' meetodi algoritmide kogusse](/et/projects/rubiks-cube/roux). Kui takerdud, saad siit uuesti vaadata.

Rubiku kuubiku maailm pakub lõputult rõõmu, nautige mängimist.

## Lisa 1: Harjutuste nimekiri etappide kaupa

**Esimene etapp (> 60 sek)**

-   Fikseeri vaatlusnurk, ära pööra kuubikut kogu lahendamise vältel
-   Leia järgmine soovitud värv ilma pausideta
-   Aeglane lahendamine, ütle iga sammu kavatsus välja
-   Harjuta ainult esimest blokki, korda 50 korda

**Teine etapp (60 → 40 sek)**

-   Teine blokk kasutab ainult R, r, M, U, esimest blokki ei puutu
-   Kaheetapiline CMLL harjutus
-   M' U M' U rütmiharjutus, 5 minutit päevas

**Kolmas etapp (40 → 30 sek)**

-   Peatu kohe pärast CMLL-i lõppu, ütle ühe pilguga valesti orienteeritud servatükkide arv
-   Aeglane lahendamine + ettevaade: silmad vaatavad alati järgmisele tükile
-   Vähemalt 20 kvaliteetset lahendust päevas

**Neljas etapp (< 30 sek)**

-   Salvesta videoid, et leida peatusi
-   Sõrmetehnika: R U R' U' ühe sõrme tehnika, M-kihi sõrmusesõrme tehnika
-   20 kvaliteetset lahendust päevas, ära kuhja mahtu

## Lisa 2: Tööriistad

-   **csTimer**: [cstimer.net](https://cstimer.net/). Ava Ao5 / Ao12 / Ao100 statistika. Ao100 näitab sinu tegelikku taset, üksikud tulemused on õnn.
-   **3D Rubiku kuubik**: [philoli.com/zh/projects/rubiks-cube](/et/projects/rubiks-cube/). Kõiki selles artiklis mainitud algoritme saab siia sisestada ja animatsioonina vaadata.
-   **Roux' meetodi algajatele sobiv algoritmide kogu**: [philoli.com/zh/projects/rubiks-cube/roux](/et/projects/rubiks-cube/roux).
-   **csTimer treeninganalüsaator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/et/projects/rubiks-cube/analyzer). Lohista csTimerist eksporditud fail siia ja näed oma tulemuste trendi, Ao5/Ao12/Ao100 kõveraid, PB parandusi, verstapostide tabelit ja Power Law harjutuskõverat.

*See artikkel sisaldab Amazoni partnerlinke: ostes lingi kaudu, saan väikese komisjonitasu, sinu hind jääb samaks.*

## Lisalugemist

-   [Kuidas lahendada Rubiku kuubikut ilma algoritme pähe õppimata: arusaadav ka algklassilapsele](/et/blog/solve-rubiks-cube-without-formulas)
