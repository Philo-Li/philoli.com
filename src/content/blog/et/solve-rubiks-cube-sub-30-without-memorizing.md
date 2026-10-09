---
layout: blog
title: "Kuidas lahendada Rubiku kuubik alla 30 sekundiga valemeid pähe õppimata: Arusaadav ka algklassilapsele"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Alates esimesest lahendusest kuni Ao100 alla 30 sekundi jõudmiseni kulus mul 89 päeva, ilma et oleksin ühtegi CFOP valemit pähe õppinud. Kasutan 4441 ajastatud lahenduse andmeid, et jaotada protsess neljaks etapiks: millised on iga etapi takistused, mida harjutada ja miks Roux' meetod ei vaja valemite päheõppimist."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="从 165 秒到 28 秒的四个阶段" />
</figure>

*Joonis: Neli etappi 165 sekundist 28 sekundini. Teises etapis toimus kõige kiirem langus, kolmas etapp oli pikim platoo.*

Eelmises postituses [«Kuidas lahendada Rubiku kuubik valemeid pähe õppimata»](/zh/blog/solve-rubiks-cube-without-formulas/) õppisid sa kasutama kommutatsioonide loogikat, et lahendada Rubiku kuubik ilma valemeid meelde jätmata. See artikkel sai paljudelt entusiastlikku tagasisidet.

Kui sa seda proovisid, kulub sul ilmselt praegu kaks-kolm minutit ja oled küll kohmakas, kuid suudad kuubiku lahendada. Nüüd kerkib esile uus küsimus: kuidas kiiremini saada?

Kui otsid "kiirkuubimist", räägivad kõik õpetused sulle ühte ja sedasama: kui tahad saada alla 30 sekundi, pead esmalt CFOP-i valemid pähe õppima. F2L 41 valemit, OLL 57 valemit, PLL 21 valemit – kokku 119. Isegi kui F2L-i teed intuitiivselt, ei pääse sa 78 ülemise kihi valemist mööda. Kui neid pähe ei õpi, siis kiirust ei saa.

See artikkel tahab sulle öelda, et sa saad ilma ühtegi valemit pähe õppimata ikkagi alla 30 sekundi.

<!--more-->

Mina alustasin Rubiku kuubiku lahendamisega 7. mail 2026 ja kuni 4. augustil minu Ao100 tulemus alla 30 sekundi langes, kulus 89 päeva. Selle aja jooksul ei õppinud ma ühtegi CFOP valemit, vaid lihtsalt mängisin vabal ajal. Siin on minu 4441 registreeritud lahenduse ajastatud andmed.

![4441 次复原的成绩曲线](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Joonis: 4441 lahenduse tulemuste kõver. Hall joon näitab iga lahenduse aega, tume joon on Ao100 trend ja punased punktid tähistavad isiklike parimate tulemuste uuendusi. Parim Ao100 oli 28,22 sekundit.*

Teadliku ja järjepideva harjutamisega saab igaüks nullist alla 30 sekundi tasemele jõuda paari kuuga.

Mida tähendab alla 30 sekundi? [1982. aasta esimesel Rubiku kuubiku maailmameistrivõistlusel](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) oli võitja aeg 22,95 sekundit, mis on ka esimene WCA poolt ametlikult tunnustatud maailmarekord; 10. koha saavutas 29,11 sekundiga Jessica Fridrich isiklikult, kellest räägime järgmises osas ja kelle järgi on CFOP meetod nimetatud. Teisisõnu, kui tänapäeva harrastaja harjutab paar kuud ja saavutab alla 30 sekundi, oleks ta 1982. aastal maailma esikümnes olnud.

Järgnevalt jagan sinuga, kuidas ma samm-sammult selleni jõudsin, ja annan sulle kogu harjutusmeetodi täielikult edasi.

## Miks kiirkuubimise maailm valemeid pähe õpib?

Kõigepealt teeme ühe asja selgeks: miks on "kiirus" ja "valemite päheõppimine" inimeste peas omavahel seotud?

1980. aastate alguses töötas Tšehhi päritolu professor Jessica Fridrich (kes hiljem uurib digitaalset kohtuekspertiisi Binghamtoni ülikoolis) välja kihilise lahendusmeetodi, mida hiljem hakati nimetama CFOP-iks (Cross, F2L, OLL, PLL). Selle meetodi põhimõte on: loetleda kõik ülemise kihi võimalikud olukorrad ja igale olukorrale anda optimaalne valem. Sa tunned olukorra ära, sooritad valemi ja ei pea mõtlema.

![Jessica Fridrich 和她办公室里的魔方](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Joonis: Jessica Fridrich ja Rubiku kuubik tema kontoris. 1982. aastal saavutas ta esimesel MM-il 29,11 sekundiga 10. koha ja CFOP on tema järgi nimetatud (Fridrichi meetod).*

See meetod on väga kiire. Peaaegu kõik maailmarekordid on saavutatud CFOP-iga. Seega õpetavad kõik õpetused seda, kõik videod räägivad sellest, "kiirkuubimise õppimine" võrdub "CFOP-i õppimisega" ja CFOP-i õppimine võrdub 119 valemi päheõppimisega.

Kuid pane tähele, "valemite päheõppimine" on CFOP-i meetodi eripära, mitte "kiiruse" enda tunnus. CFOP nõuab päheõppimist, sest see valis ammendava loendi tee. Ammendav loend nõuab mälu, ja see on selle hind.

Kas on olemas meetodeid, mis ei lähe seda ammendava loendi teed? On.

## Lahendus ilma valemeid pähe õppimata: Roux' meetod (silla meetod)

2003. aastal avaldas prantslane Gilles Roux täiesti erineva lähenemise. Selle asemel, et kihte üksteise peale laduda, ehitatakse kõigepealt kaks 1×2×3 "silda" (vasak ja parem), seejärel käsitletakse ülemise kihi nelja nurka ja lõpuks jääb alles kuus servatükki, mis lahendatakse keskmise (M) ja ülemise (U) kihi pööretega.

![Gilles Roux 在比赛中](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Joonis: Gilles Roux võistlusel. Kärbitud varasest võistlusvideost, pilt on AI abil taastatud ja suurendatud.*

Eelmises postituses lahendasime me selle raamistiku abil juba korra. Vaatame nüüd selle nelja sammu uuesti, keskendudes seekord sellele, "mida igas etapis meelde jätta on vaja":

| Etapp | Sisu | Valemeid, mida pähe õppida |
| --- | --- | --- |
| 1. Vasak sild | Ehita 1×2×3 plokk | 0, puhas vaatlus |
| 2. Parem sild | Ehita sümmeetriliselt teine | 0, puhas vaatlus |
| 3. CMLL | Ülemise kihi neli nurgatükki paika | 9, kõik tuletatavad 3-tsüklilistest vahetustest |
| 4. LSE | Viimased kuus servatükki | 0, kasutatakse ainult ülemise ja keskmise kihi pöördeid (M ja U) |

Kolm neljast sammust ei vaja ühtegi valemit. Ainus vajalik CMLL, mis hõlmab kokku 42 olukorda, ei nõua sinult 42 valemi päheõppimist. Eelmises postituses mainitud nurgatükkide 3-tsükliline vahetus R U' L' U R' U' L U, koos selle peegelpildi ja mõne variatsiooniga, katab kõik olukorrad, kuigi veidi aeglasemalt.

![Roux 的四步](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Joonis: Roux' meetodi neli etappi, kus igal sammul näidatakse ainult selleks ajaks paika pandud tükke: Vasak sild → Parem sild → CMLL (ülemise kihi nurgad) → LSE (viimased kuus serva). Kärbitud minu 3D Rubiku kuubiku lehe 'Lahendused' paneelilt.*

Just seepärast saab Roux' meetodiga hakkama ilma valemeid pähe õppimata: see surub meeldejätmise vajaduse väga väiksesse nurka, jättes ülejäänud osa vaatluse ja mõistmise ning vilumuse hooleks.

## 165 sekundist 28 sekundini: neli etappi

Allpool on minu teekond täpselt nii, nagu ma selle läbi käisin. Iga etapi algus ja lõpp on andmetega märgistatud, seejärel selgitan, kus ma takerdusin ja mida ma selles etapis harjutasin. Sinu takistused võivad olla minu omadest erinevad, kuid järjekord on suure tõenäosusega sama.

![四个阶段的时间跨度](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Joonis: Nelja etapi ajaline ulatus. Esimene etapp 3 nädalat, teine etapp 11 päeva, kolmas etapp kaks kuud, neljas etapp siiani.*

### Etapp üks: 165 sekundit → 60 sekundit (1.–3. nädal)

**Andmed**: 7. maist 27. maini. Esimese nädala keskmine oli 165 sekundit, kolmandal nädalal 68 sekundit.

**Kitsaskoht**: Vasak sild oli väga harjumatu, iga värviplokk võttis kaua aega. Ja kui plokk leiti, meeldis algajatele alati peatuda ja edasi vaadelda.

![新手的时间都花在哪](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Joonis: Kus algajad oma aega veedavad. Käed on paigal, silmad otsivad kuubikul edasi-tagasi, 'otsimise' aeg on mitu korda pikem kui 'pööramise' aeg.*

**Mida harjutada**:

Selle etapi suurim vaenlane pole aeglased käed, vaid aeglased silmad. Sa kulutad "otsimisele" tunduvalt rohkem aega kui "pööramisele". Seega:

- Hoia vaatlusnurk fikseeritud, ära pööra kuubikut. Nagu eelmises postituses mainitud, on Roux' meetodi vaatlusnurk fikseeritud. Selles etapis tuleb "kuubiku mittepööramine" muuta lihasmäluks. Iga kord, kui tahad kuubikut pöörata, peatu ja küsi endalt: kas ma näen vajalikku tükki sellest nurgast?
- Aeglane pööramine. Ära aja aega, kuid liigutused peavad olema sujuvad ja katkematud. Iga liigutus võib olla väga aeglane, kuid ilma pausideta. Oluline on, et samal ajal, kui käed teevad eelmist liigutust, peaksid silmad keskenduma järgmisele liigutusele – see on aeglase pööramise tuum. Kuigi see kõlab aeglustamisena, treenib see tegelikult sinu silmi nägema tüki asukoha ja selle õige asukoha vahelist suhet.
- Harjuta ainult esimest silda. Sega kuubik, ehita vasak sild, sega uuesti, ehita vasak sild uuesti. Ära mine edasi. Esimene sild on Roux' meetodi kõige vabam samm ja ka samm, mis treenib vaatlust kõige paremini.

Ära õpi selles etapis uusi valemeid. Sinu praegune kitsaskoht ei ole valemites.

### Etapp kaks: 60 sekundit → 40 sekundit (4.–5. nädal)

**Andmed**: 27. maist 7. juunini, 11 päeva. See oli kogu protsessi kiireim langusperiood ja ka periood, mil ma kõige rohkem harjutasin, juuni esimesel nädalal 723 korda.

**Kitsaskoht**: Liigutused olid katkendlikud. Kuubik kiilus kinni.

**Mida harjutada**:

Selles etapis pead optimeerima iga etapi liigutusi, suurendama iga liigutuse vilumust mõistmise pinnalt.

- Teine sild. Teine sild on keerulisem kui esimene, sest ruumi on poole vähem ja juba valmis vasakut silda ei tohi lõhkuda. Peamised pöörded on R, r (parem kaks kihti), M, U. Selles etapis tuleb õppida kasutama r ja M R asemel tükkide liigutamiseks, nii et vasak sild ei puruneks kunagi. Liigutuste optimeerimine on aja säästmine. Näiteks kolm korda päripäeva pööramine on sama, mis üks kord vastupäeva pööramine.
- Vilumuse omandamine M-kihiga. Roux' meetodi viimane samm on kõik M ja U, ning M-kihi sujuvus määrab otse sinu alampiiri. Lükka M-i nimetissõrme või keskmise sõrmega, hakka harjutama rütme nagu M' U M' U.
- CMLL-i mustrite äratundmine. Eelmises postituses "proovisime" kolme tsüklilise vahetusega nelja nurka. Nüüd tuleb hakata enne tegemist vaatama: enne ülemise kihi pööramist viska pilk nelja nurga kollasele orientatsioonile, et hinnata, kas neid on 0, 1, 2 või 4 "head" nurka, ja seejärel sooritada kohe vastav liigutus. Saad ka väga väikese hulga valemite abil oluliselt efektiivsust tõsta, mis on väga tasuv. Suuremat osa valemitest ei pea pähe õppima, vaid neid tuleb harjutamise käigus mõista.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="搭右桥时的视角" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Joonis vasakul: Vaatenurk parema silla ehitamisel. Vasak sild on valmis, ja ainult R, r, M, U nelja pööret kasutatakse parempoolse nurga-serva paari sisestamiseks, vasak sild ei puutu kunagi. Joonis paremal: M' U M, Roux' meetodi teises pooles enim kasutatav liigutuste komplekt. Keskmine kiht üles, ülemine kiht pöörata, keskmine kiht tagasi – kolme sammuga vahetatakse ülemise ja keskmise kihi servapaar.*

Võid vaadata minu koostatud [Roux' meetodi valemite kogumit](/zh/projects/rubiks-cube/roux#cmll). CMLL lehel on kaheetapiline süsteem: 7 orientatsioonivalemit + 2 positsioonivalemit, kokku 9. See on kuluefektiivne valik kiiruse suurendamiseks, kergesti õpitav, ja iga harjutatud komplekt võib kiirustada umbes 1–2 sekundit. Väikese harjutamisega saad kiiresti vilunuks, mõned neist on juba eelmises artiklis tutvustatud, ja kõike ei pea meelde jätma, et jõuda alla 30 sekundi.

![两段式 CMLL 第一步，七种角块朝向](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Joonis: Kaheetapilise CMLL-i esimene samm, seitse nurgatükkide orientatsiooni. Ülemisel vaatel on kollane ülemine pind, väikesed ribad välisküljel näitavad nurga ülemise pinna suunda küljele. Tuvasta mustrid kollaste nurkade arvu järgi: 0 on H või Pi, 1 on S või AS, 2 on U, T või L.*

Pärast kollase ülemise osa joondamist saab nurkade külgede joondamiseks kasutada neid kahte valemit.

Kui üks külg on juba värvilt ühtne, näiteks punane on juba samal küljel, pööra see vasakule ja seejärel saad valida külgnevate vahetuste valemi. Kui ükski külg pole värvilt ühtne, siis vali diagonaalsete vahetuste valem.

![两段式 CMLL 第二步，两种角块位置](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Joonis: Kaheetapilise CMLL-i teine samm, kaks nurgatükkide asendit. Vasakul pildil on vasakpoolsete kahe nurga punane värv juba ühtne, kasutatakse külgnevat vahetust; paremal pildil pole ühtegi külge ühtne, kasutatakse diagonaalset vahetust.*

Saad iga valemikomplekti mõista, tehes palju aeglaseid pöördeid. Ära käsitle neid valemitena, vaid pigem kindlate liigutustena, mille sa avastaksid ka ise pikema uurimise käigus, kuid nende siin esitamine aitab sul otseteed leida.

Lisaks on veel üks asi, mis annab kohese ja märgatavama tulemuse kui ükski teine harjutus: investeeri uude Rubiku kuubikusse. Kui sul on ikka veel see vana kuubik, mis klõpsub ja kinni kiilub, osta endale magnetiline kaasaegne 3x3 kuubik. Uusimad kuubikud annavad sulle insenertehnilise optimeerimise jõu – sujuv pöörlemine, automaatne joondamine, peaaegu mitte kunagi kinni kiilumine. Ainuüksi kuubiku vahetamine võib su keskmist aega koheselt 15 sekundit kiirendada. Kuluefektiivne valik on [MoYu RS3 M V5 (MagLev + Ball-Core versioon)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), umbes kahekümne dollari ringis, piisav kuni sub-20 tasemeni.

### Etapp kolm: 40 sekundit → 30 sekundit (5.–13. nädal, kaks kuud)

**Andmed**: 7. juunist 4. augustini. Ao100 lihviti 39,8 sekundilt 29,9 sekundile, mis võttis aega 58 päeva. Selles etapis võis aeg-ajalt esineda alla 30 sekundi tulemusi, kuid need olid ainult väga hea õnne korral. Ja keskmise lahendusaja langedes muutub 1 sekundi võrra paremaks saamine eksponentsiaalselt keerulisemaks.

![每日平均成绩](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Joonis: Igapäevane keskmine tulemus. Juuni keskpaigast alates kõver peaaegu lamedus, lihvides kaks kuud 30–40 sekundi vahel.*

See on platookiht. Kõik kogevad seda, mina viibisin siin kaks kuud.

**Kitsaskoht**: Kuue ülemise servatüki lahendamine oli aeglane, loogikast ei saadud aru, iga kord prooviti korduvalt, raisates palju aega. Vasak ja parem sild ei olnud ikka veel piisavalt vilunud.

**Mida harjutada**:

- EO (Edge Orientation) äratundmine. Eelmises postituses rääkisime, et vales asendis servi on vaid mõned olukorrad: 0, mitte-0 mitte-4, 4 (2 üleval, 2 all), 4 (kõik ülemisel kihil), 4 (3 üleval, 1 all). Selle etapi eesmärk on: silla valmimise hetkel, ilma lugemata, pilguga ära tunda, milline olukord see on. Harjutusmeetod on: sega kuubik, tee ainult kuni CMLL lõpuni, seejärel peatu, ütle valesti orienteeritud servade arv ja jätka.
- Paljud ei mõista siinseid liigutusi. EO etapi lõppeesmärk on alati luua ülemise kihi 3 ja alumise kihi 1 noolekuju, sest täielik kuju on vaid ühe liigutuse kaugusel noolekujust. Seega, tagurpidi mõeldes, on see viimane samm enne lahenduse lõpetamist. Seega, olenemata valesti orienteeritud servade arvust, on lõppeesmärk alati noolekuju loomine. Kui ülemisel kihil on 4 valesti orienteeritud serva, vahetatakse üks ülemine ja alumine serv, et üks vale serv alla viia ja noolekuju saavutada. Kui ülemisel kihil on 2 ja alumisel kihil 2, vahetatakse üks ülemine ja alumine serv, et üks vale serv üles tuua ja noolekuju saavutada. Kui ülemisel kihil on 1 ja alumisel kihil 1, või ülemisel kihil 2, siis kasutatakse M' U M-i, et muuta see eelmiseks olukorraks ja seejärel luua noolekuju. Saate palju vaadeldes ja mõeldes ise avastada 1/1 parimaid samme.
- Harjuta palju ettevaatamist (Look-ahead). See on 40 sekundist 30 sekundini jõudmiseks kõige olulisem ja samas kõige vastuintuitiivsem asi: pööra veidi aeglasemalt, vaata kaugemale. Vasakut silda ehitades ära vaata sisestatavat tükki, vaid vaata, kus on järgmine tükk. Alguses on see väga ebamugav, tulemused halvenevad esmalt, kuid nädala pärast paranevad järsult.
- CMLL-is ära kõhkle. Kui sa pead iga liigutuse puhul enne mõtlema, siis see pole veel sinu oma. Harjuta iga liigutust eraldi 50 korda, kuni käsi liigub iseenesest, kui kuju näed.

![箭头形态](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Joonis: Noolekuju. Ülemise kihi kolm valesti orienteeritud serva (sinine esiletõstetud) moodustavad noole, mis osutab alumise kihi valesti orienteeritud servale. Sel hetkel saab ühe M' U M liigutusega kõik neli korraga paika panna. [Ava see olek 3D kuubikul](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), et näha samm-sammult.*

![EO 的六种形态](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Joonis: Kuus EO olekut. Ülemises vasakus nurgas on valesti orienteeritud servade arv (ülemine / alumine), kollased on õiged servad, sinised raamid on valed servad. Ainult noolekujuline vajab valemit, teised viis muudetakse esmalt noolekujuliseks.*

Vasak- ja parempoolsete servatükkide lahendamisel, kui kollane on pealmine, valge alumine ja vasak sild punane, siis tuleb paika panna kollase-punase servatükk + kollase-oranži servatükk (esiletõstetud kohad). Peamine idee on viia kollase-punase servatükk ja kollase-oranži servatükk alumisele kihile, et need oleksid seal vastamisi. Seejärel pöörata ülemine kiht sobivasse asendisse, ja M2 U või M2 U' abil saab U-kihi vasak- ja parempoolsed servatükid paika.

Et aidata kõigil paremini aru saada, olen ma kõik kuus EO olekut kogunud [Roux' meetodi valemite kogumiku LSE lehele](/zh/projects/rubiks-cube/roux#lse). Igal pildil klõpsates "Vaata üksikasju" avaneb vastav olek 3D kuubikul, kus valesti orienteeritud servad on automaatselt esile tõstetud. Samal lehel on ka hilisemad UL/UR paigutused ja kõik viimase nelja serva olukorrad.

Selles etapis harjutamismahu vähenemine ei ole halb. Platookiht ei möödu lihtsalt mahu suurendamisega, vaid konkreetse halva harjumuse muutmisega. Minu kogemus on, et korraga tuleks muuta ainult ühte asja.

### Etapp neli: 30 sekundit → 28 sekundit (pärast 13. nädalat)

**Andmed**: Pärast 4. augustit. Septembris oli registreeritud harjutuskordade arv 122, kuigi tegelikult oli harjutamisi palju rohkem, mida ei registreeritud. Olen muutnud Rubiku kuubiku lauamänguks, mille võtan kätte igal vabal hetkel – mängin paar korda, kui tuju hea, kui olen ärritunud või ärev, tööpauside ajal, igavuse korral. Nii on kuubiku lahendamine muutunud osaks minu elust. Ao100 on samuti järk-järgult langenud 29,9-lt 28,2-le.

**Kitsaskoht**: Pole selget kitsaskohta, lihtsalt pole piisavalt vilunud.

**Mida harjutada**:

Kui sinu keskmine kiirus on endiselt üle 30 sekundi, siis ainus, mida pead tegema, on jätkata palju harjutamist, mitte õppida uusi valemeid.

Jätka aeglase pööramisega ettevaatamise harjutamist ja sa muutud järjest kiiremaks.

Võta kuubik kätte ja mängi sellega igal võimalikul hetkel. Hoia see kohas, kust saad selle kergesti kätte, näiteks oma töölaual, et saaksid seda tööpäeva vahepeal mängida. Samuti võid regulaarselt salvestada oma lahendusvideoid, et näha, millises etapis kulub kõige rohkem aega, ja seejärel sihipäraselt optimeerida – see on tahtlik harjutamine. Sinu edenemise kiirus ei sõltu mitte sinu tavaliste harjutuskordade koguarvust, vaid sinu tahtlike harjutuskordade arvust.

Ja siis avastad, et pärast 30–35 sekundi kitsaskohast ülesaamist on sinu kiirus jälle uuele tasemele langenud.

Sellesse etappi jõudes õnnitlen sind – algajate silmis oled sa juba väga osav mängija!

## Valemite päheõppimata jätmise hind

Selles punktis peame olema ausad. Valemite päheõppimata jätmine ei ole tasuta.

CMLL etapp on aeglane. 42 olukorda on kaetud 9 valemiga, mis tähendab, et mõnda olukorda tuleb lahendada kaks korda. Need, kes teevad täieliku CMLL-i, on selles etapis minust paar-kolm sekundit kiiremad.

M-kihi tehnika lävi on kõrge. Roux' meetodi teine pool tugineb täielikult M-kihile, mis on keerulisem pöörata kui R ja U ning kipub kinni kiiluma, seades ka kõrgemad nõudmised kuubikule endale.

Ära muretse ülempiiri pärast. Tipptasemel mängijate seas on Roux' meetodit kasutades maailma tippu jõudnud mängijaid, meetodil endal pole piire. Kuid 15 sekundi piiri ületamiseks pead sa suure tõenäosusega kõik 42 CMLL-i valemit selgeks saama. Kuid see on juba teine etapp. Alla 30 sekundi jõudmiseks pole seda vaja.

Peaaegu iga maailmatasemel ühe käega lahendaja kasutab Roux' meetodit, sest see sobib tõesti väga hästi ka ühe käega opereerimiseks.

**Kiireimad Roux' meetodi tulemused ametlikel WCA võistlustel:**

- Üksiklahendus 4,11 sekundit, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipiinid), 2023 Valenzuela Cubing Open, tunnustatud kiireim ametlik Roux' üksiklahendus ([Rekonstruktsioonivideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Keskmine 5,98 sekundit, samuti tema, 2019. aastal, toona Aasia rekord ja ajaloo kolmas ametlik alla 6 sekundi keskmine ([WCA andmed](https://www.worldcubeassociation.org/persons/2017VILL41))
- Ta on ka [ühe käega lahendamise maailmarekordi hoidja](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): keskmine 8,09, üksiklahendus 6,05 (2024). Ühe käega lahendamise ringkonnas peetakse Roux' meetodit üldiselt optimaalseks lahendusviisiks.

Minu arvates on see tehing väga tasuv. Sa vahetad kaks-kolm sekundit CMLL-i aega selle vastu, et: tead igas etapis, mida sa teed, ei unusta seda ka kolme kuu pärast kuubikut puudutamata ja suudad lahendada iga tundmatu kuubiku.

## Kokkuvõte

![复原完成](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Lahendamisoskuse saavutamisest alla 30 sekundi pole tegemist valemite päheõppimise protsessiga, vaid käte, silmade ja aju koordinatsiooni treenimise protsessiga.

Neli etappi, neli asja: kõigepealt õpi kuubikut pööramata vaatama, seejärel õpi ehitama paremat silda vasakut silda lõhkumata, siis õpi vaatama järgmist sammu samal ajal, kui teed praegust, ja lõpuks lase kätel silmadega sammu pidada.

Valemid ei ole kiiruse allikas. Vaatlus on.

Õpi looma positiivset tagasisidet iga etapi edusammude kaudu. Isegi vilumusharjutused ei pea olema igavad, eriti kui avastad end jälle rekordit purustamast. Eriti alg- ja kesktasemel koged sa iga päev rekordite purustamisega kaasnevat rõõmu.

Kõik artiklis mainitud valemid ja olukorrad olen ma koondanud [Roux' meetodi valemite kogumikku](/zh/projects/rubiks-cube/roux). Kui takerdud, tule ja otsi sealt abi.

Rubiku kuubiku maailm pakub lõputult rõõmu, soovin sulle meeldivat mängimist.

## Lisa 1: Harjutuste nimekiri iga etapi jaoks

**Etapp üks (> 60 sekundit)**

- Fikseeri vaatlusnurk, ära pööra kuubikut kogu lahendusprotsessi vältel.
- Leia järgmine soovitud värvitükk ilma pausideta.
- Aeglane pööramine, ütle iga sammu eesmärk.
- Harjuta ainult vasakut silda, korda 50 korda.

**Etapp kaks (60 → 40 sekundit)**

- Parem sild ainult R, r, M, U abil, vasakut silda puudutamata.
- Kaheetapilise CMLL-i harjutamine.
- M' U M' U rütmi harjutamine, 5 minutit päevas.

**Etapp kolm (40 → 30 sekundit)**

- Peatu kohe pärast CMLL-i lõppu ja ütle pilguga valesti orienteeritud servade arv.
- Aeglane pööramine + ettevaatamine: silmad vaatavad alati järgmist tükki.
- Vähemalt 20 kvaliteetset lahendust päevas.

**Etapp neli (< 30 sekundit)**

- Salvesta videoid, et leida pause.
- Tehnika: R U R' U' ühe sõrme tehnika, M-kiht nimetissõrmega.
- 20 kvaliteetset lahendust päevas, mitte lihtsalt hulga tegemine.

## Lisa 2: Tööriistad

- **csTimer**: [cstimer.net](https://cstimer.net/). Ava Ao5 / Ao12 / Ao100 statistika. Ao100 näitab sinu tegelikku taset, üksikud tulemused on õnne küsimus.
- **3D Rubiku kuubik**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Kõik selles artiklis mainitud valemid saab siia sisestada ja animatsioone vaadata.
- **Roux' meetodi algajasõbralik valemite kogumik**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Vasaku ja parema silla tavalised sisestusmustrid, kaheetapilise CMLL-i 9 valemit, kõik LSE olukorrad (EO, UL/UR, viimased neli serva). Iga leht avaneb 3D kuubikul, peites automaatselt mitteseotud klotsid ja tõstes esile liigutatavad servad.
- **csTimer treeninganalüsaator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Lohista sinna csTimerist eksporditud fail ja näed oma tulemuste trende, Ao5/Ao12/Ao100 kõveraid, PB edusamme, verstapostide tabelit (millal saavutasid esmakordselt alla 60, alla 40, alla 30 sekundi) ja Power Law harjutuskõverat. Kõik selle artikli joonised pärinevad siit. Andmeid töödeldakse ainult sinu brauseris, neid ei laadita üles. Kui sul pole eksporditud faili, võid laadida minu 4441 lahenduse andmed, et näha, kuidas see töötab.

*See artikkel sisaldab Amazoni partnerlinke: ostes lingi kaudu, saan ma väikese vahendustasu, sinu hind jääb samaks.*

## Lisalugemist

- [Kuidas lahendada Rubiku kuubik valemeid pähe õppimata: Mõistetav ka algklassilapsele](/zh/blog/solve-rubiks-cube-without-formulas)
