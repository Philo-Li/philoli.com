---
layout: blog
title: "Miten ratkaista Rubikin kuutio alle 30 sekunnissa ilman ulkoa opittuja kaavoja: Jopa alakouluikäinen ymmärtää"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Ensimmäisestä ratkaisusta Ao100-tulokseen alle 30 sekunnissa kului 89 päivää, enkä opetellut yhtään CFOP-kaavaa ulkoa. Käyn läpi 4441 ajastetun ratkaisun datan pohjalta neljä vaihetta: missä kussakin vaiheessa jumituttiin, mitä harjoiteltiin ja miksi Roux-menetelmä ei vaadi kaavojen ulkoa opettelua."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Neljä vaihetta 165 sekunnista 28 sekuntiin" />
</figure>

*Kuva: Neljä vaihetta 165 sekunnista 28 sekuntiin. Vaiheessa kaksi pudotus oli nopeinta, vaihe kolme oli pisin tasanne.*

Edellisessä kirjoituksessani [《Miten ratkaista Rubikin kuutio ilman kaavoja》](/zh/blog/solve-rubiks-cube-without-formulas/) opit ratkaisemaan Rubikin kuution kommutaattorien logiikalla, ilman kaavojen ulkoa opettelua. Artikkeli sai paljon lämmintä palautetta.

Jos seurasit ohjeita, saatat nyt tarvita pari kolme minuuttia kuution ratkaisemiseen. Vaikka kätesi saattavatkin vielä sählätä, saat sen kuitenkin ratkaistua. Sitten nousee esiin uusi kysymys: miten nopeutua?

Jos haet tietoa "Rubikin kuution nopeusratkaisusta", kaikki oppaat kertovat saman asian: jos haluat päästä alle 30 sekuntiin, opettele ensin CFOP-kaavat ulkoa. F2L 41 kaavaa, OLL 57 kaavaa, PLL 21 kaavaa, yhteensä 119 kaavaa. Vaikka F2L:n tekisi intuitiolla, yläkerroksen 78 kaavaa ovat väistämättömiä. Jos et opi niitä, älä unelmoi nopeudesta.

Tässä artikkelissa haluan kertoa sinulle, että voit päästä alle 30 sekuntiin ilman, että opettelet yhtään kaavaa ulkoa.

<!--more-->

Aloitin Rubikin kuution ratkaisemisen ensimmäisen kerran 7. toukokuuta 2026, ja 4. elokuuta Ao100-tulokseni oli alle 30 sekuntia. Tähän kului 89 päivää. Tänä aikana en opetellut yhtään CFOP-kaavaa, vaan vain leikin kuutiolla vapaa-ajallani. Nämä ovat tilastoituja ajastettuja ratkaisujani, joita kertyi 4441 kappaletta.

![4441 ratkaisun aikakäyrä](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Kuva: 4441 ratkaisun aikakäyrä. Harmaa viiva näyttää kunkin ratkaisun ajan, tumma viiva Ao100-trendin ja punaiset pisteet henkilökohtaiset ennätykset. Paras Ao100-tulos oli 28,22 sekuntia.*

Tietoisella ja aktiivisella harjoittelulla sekä säännöllisen harjoittelutiheyden ylläpitämisellä kuka tahansa voi päästä nollasta alle 30 sekunnin tasolle muutamassa kuukaudessa.

Mitä alle 30 sekuntia tarkoittaa? [Vuoden 1982 ensimmäisissä Rubikin kuution maailmanmestaruuskilpailuissa](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) mestarin aika oli 22,95 sekuntia, mikä on myöhemmin WCA:n tunnustama ensimmäinen virallinen maailmanennätys. Kymmenennen sijan aika oli 29,11 sekuntia, ja tämän tuloksen saavutti itse Jessica Fridrich, CFOP-menetelmän kehittäjä, josta kerromme seuraavassa osiossa. Toisin sanoen, nykypäivän amatöörin muutamassa kuukaudessa harjoittelema sub-30-tulos olisi päässyt vuoden 1982 maailman kymmenen parhaan joukkoon.

Seuraavaksi jaan kanssasi, miten itse onnistuin siinä askel askeleelta, ja esittelen sinulle koko harjoittelumenetelmän kattavasti.

## Miksi nopeusratkaisijat maailmalla opettelevat kaavoja ulkoa

Selvitetään ensin yksi asia: miksi "nopeus" ja "kaavojen ulkoa opettelu" ovat niin tiukasti sidoksissa ihmisten mielissä?

1980-luvun alussa tšekkiläissyntyinen professori Jessica Fridrich (joka myöhemmin tutki digitaalista forensiikkaa Binghamtonin yliopistossa Yhdysvalloissa) kehitti kerros kerrokselta etenevän ratkaisumenetelmän, jota kutsuttiin myöhemmin CFOP:ksi (Cross, F2L, OLL, PLL). Tämän menetelmän ideana on luetella kaikki yläkerroksen mahdolliset tilanteet ja yhdistää kuhunkin tilanteeseen optimaalinen kaava. Tunnistat tilanteen, suoritat kaavan, eikä sinun tarvitse ajatella.

![Jessica Fridrich ja hänen Rubikin kuutionsa toimistossaan](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Kuva: Jessica Fridrich ja hänen Rubikin kuutionsa toimistossaan. Vuonna 1982 hän sijoittui ensimmäisissä MM-kisoissa 10. sijalle ajalla 29,11 sekuntia, ja CFOP on nimetty hänen mukaansa (Fridrich Method).*

Tämä menetelmä on erittäin nopea. Lähes kaikki maailmanennätykset on tehty CFOP:lla. Siksi kaikki oppaat opettavat sitä, kaikki videot kertovat siitä, ja "nopeusratkaisun opettelu" tarkoittaa "CFOP:n opettelua", joka puolestaan tarkoittaa 119 kaavan ulkoa opettelua.

Huomaa kuitenkin, että "kaavojen ulkoa opettelu" on CFOP-menetelmän ominaispiirre, ei itse "nopeuden" ominaispiirre. CFOP vaatii ulkoa opettelua, koska se valitsi tyhjentävän luetteloinnin tien. Luettelointi vaatii muistamista, ja tämä on sen hinta.

Onko olemassa menetelmiä, jotka eivät kulje tätä tyhjentävän luetteloinnin tietä? Kyllä on.

## Kaavaton ratkaisu: Roux-siltamenetelmä

Vuonna 2003 ranskalainen Gilles Roux julkaisi täysin erilaisen lähestymistavan. Sen sijaan, että kuutio pinottaisiin kerros kerrokselta, rakennetaan ensin kaksi 1×2×3 "siltaa" vasemmalle ja oikealle, sitten käsitellään yläkerroksen neljä kulmapalaa, ja lopuksi jäljelle jääneet kuusi reunapalaa viimeistellään keskikerroksen M- ja yläkerroksen U-liikkeillä.

![Gilles Roux kilpailussa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Kuva: Gilles Roux kilpailussa. Kuva on otettu varhaisesta kilpailuvideosta ja paranneltu tekoälyn avulla.*

Edellisessä osassa ratkaisimme kuution jo kertaalleen tällä kehyksellä. Katsotaan nyt sen neljää vaihetta uudelleen, tällä kertaa keskittyen siihen, "mitä kussakin vaiheessa täytyy muistaa":

| Vaihe | Kuvaus | Ulkoa opittavat kaavat |
| --- | --- | --- |
| 1. Vasen silta | Rakenna 1×2×3-palikka | 0 kaavaa, puhdasta havainnointia |
| 2. Oikea silta | Rakenna toinen symmetrisesti | 0 kaavaa, puhdasta havainnointia |
| 3. CMLL | Aseta yläkerroksen neljä kulmapalaa paikoilleen | 9 kaavaa, kaikki johdettavissa kolmesta syklisestä vaihtamisesta |
| 4. LSE | Kuusi viimeistä reunapalaa | 0 kaavaa, käytetään vain yläkerroksen (U) ja keskikerroksen (M) pyörityksiä |

Neljästä vaiheesta kolme ei vaadi yhtään kaavaa. Ainoa tarvittava CMLL, kaikki tilanteet yhdistettynä, on 42 erilaista, mutta sinun ei tarvitse opetella 42 kaavaa. Edellisessä osassa käsitelty kulmapalojen kolmen syklin vaihtaminen R U' L' U R' U' L U, sekä sen peilikuva ja muutama muunnelma, kattavat kaikki tilanteet, vaikkakin hitaammin.

![Rouxin neljä vaihetta](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Kuva: Rouxin neljä vaihetta. Kussakin vaiheessa näytetään vain siihen mennessä paikoilleen asetetut palat: Vasen silta → Oikea silta → CMLL (yläkerroksen neljä kulmaa) → LSE (kuusi viimeistä reunaa). Kuva on otettu 3D-Rubikin kuutio -sivuni "Ratkaisut"-paneelista.*

Tästä syystä Roux-menetelmä ei vaadi kaavojen ulkoa opettelua: se tiivistää muistettavan osan hyvin pieneen nurkkaan, ja loput perustuvat havainnointiin, ymmärrykseen ja harjoitteluun.

## 165 sekunnista 28 sekuntiin: neljä vaihetta

Alla on oma todellinen polkuni. Olen merkinnyt kunkin vaiheen alku- ja loppupisteet datalla ja selittänyt, missä vaiheessa jumituttiin ja mitä harjoiteltiin. Sinun pullonkaulasi saattavat olla erilaiset kuin minulla, mutta järjestys on hyvin todennäköisesti sama.

![Neljän vaiheen aikajänne](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Kuva: Neljän vaiheen aikajänne. Vaihe yksi kesti 3 viikkoa, vaihe kaksi 11 päivää, vaihe kolme kaksi kuukautta, ja vaihe neljä jatkuu edelleen.*

### Vaihe yksi: 165 sekuntia → 60 sekuntia (viikot 1–3)

**Tiedot**: 7. toukokuuta – 27. toukokuuta. Ensimmäisen viikon keskiarvo oli 165 sekuntia, kolmannen viikon 68 sekuntia.

**Missä jumituttiin**: Vasen silta oli erittäin harjoittelematon, ja kunkin väriryhmän löytäminen kesti kauan. Lisäksi, kun aloittelija löysi väriryhmän, hänellä oli tapana pysähtyä jatkamaan havainnointia.

![Mihin aloittelijan aika kuluu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Kuva: Mihin aloittelijan aika kuluu. Kädet ovat paikoillaan, silmät etsivät edestakaisin kuutiosta. "Etsimiseen" kuluva aika on monta kertaa pidempi kuin "pyörittämiseen" kuluva aika.*

**Mitä harjoiteltiin**:

Tässä vaiheessa suurin vihollinen ei ole hidas käsi, vaan hidas silmä. Käytät "etsimiseen" huomattavasti enemmän aikaa kuin "pyörittämiseen". Siksi:

- Pidä havainnointiasento kiinteänä, älä pyöritä kuutiota. Kuten edellisessä osassa mainittiin, Rouxin havainnointikulma on kiinteä. Tässä vaiheessa "kuution kääntämättä jättämisestä" on tehtävä lihasmuisti. Aina kun haluat kääntää kuutiota, pysähdy ja kysy itseltäsi: näenkö haluamani palan tästä kulmasta?
- Hidas pyöritys (slow turning). Älä ajasta, mutta liikkeiden on oltava peräkkäisiä ja keskeytyksettömiä. Jokainen liike voi olla erittäin hidas, mutta siinä ei saa olla taukoja. Tärkeintä on, että kun kädet tekevät edellistä liikettä, silmät keskittyvät seuraavaan liikkeeseen – tämä on hitaan pyörityksen ydin. Tämä saattaa kuulostaa hidastamiselta, mutta todellisuudessa se harjoittaa silmiäsi näkemään palan sijainnin ja sen, minne sen pitäisi mennä, välisen suhteen.
- Harjoittele vain ensimmäistä siltaa. Sekoita, rakenna vasen silta, sekoita uudelleen, rakenna vasen silta uudelleen. Älä jatka pidemmälle. Ensimmäinen silta on Rouxin vapain vaihe ja samalla paras vaihe havainnoinnin harjoitteluun.

Älä opettele uusia kaavoja tässä vaiheessa. Nykyinen pullonkaulasi ei ole kaavoissa.

### Vaihe kaksi: 60 sekuntia → 40 sekuntia (viikot 4–5)

**Tiedot**: 27. toukokuuta – 7. kesäkuuta, 11 päivää. Tämä oli koko prosessin nopeimmin laskeva jakso ja myös se, jolloin harjoittelin eniten, 723 kertaa kesäkuun ensimmäisellä viikolla.

**Missä jumituttiin**: Liikkeet eivät olleet sujuvia. Kuutio jumittui.

**Mitä harjoiteltiin**:

Tässä vaiheessa sinun on optimoitava kunkin vaiheen liikkeet ja lisättävä kunkin liikkeen sujuvuutta ymmärryksen pohjalta.

- Toinen silta. Toinen silta on vaikeampi kuin ensimmäinen, koska tilaa on puolet vähemmän, eikä jo valmista vasenta siltaa saa rikkoa. Keskeiset liikkeet ovat R, r (kaksi oikeaa kerrosta), M ja U. Tässä vaiheessa on opittava käyttämään r- ja M-liikkeitä R:n sijaan palojen siirtämiseen, jotta vasen silta ei koskaan rikkoudu. Liikeaskelten optimointi säästää aikaa. Esimerkiksi, jos alun perin olisi pitänyt kääntää myötäpäivään kolme kertaa, se vastaa yhtä kääntöä vastapäivään.
- M-kerroksen sujuva käyttö. Rouxin viimeinen vaihe koostuu kokonaan M- ja U-liikkeistä, ja M-kerroksen sujuvuus määrittää suoraan alarajasi. Työnnä M-kerrosta nimettömällä tai keskisormella ja aloita harjoittelemaan rytmejä kuten M' U M' U.
- CMLL-kuvioiden tunnistus. Edellisessä osassa "kokeilimme" neljää kulmaa kolmen syklisen vaihtamisen avulla. Nyt on aika aloittaa katsominen ennen tekemistä: ennen yläkerroksen kääntämistä, vilkaiskaa neljän kulman keltaista suuntaa ja arvioikaa, onko niitä 0, 1, 2 vai 4 hyvää kulmaa, ja tehkää sitten suoraan vastaava liike. Voit myös saavuttaa merkittävän tehokkuusparannuksen hyvin pienellä määrällä kaavoja, mikä on erittäin kannattavaa. Suurta osaa näistä kaavoista ei tarvitse opetella ulkoa, vaan ne voi ymmärtää tekemällä.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Näkymä oikeaa siltaa rakennettaessa" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Kuva vasemmalla: Näkymä oikeaa siltaa rakennettaessa. Vasen silta on valmis, ja oikeanpuoleiset kulma- ja reunapalat työnnetään paikoilleen vain R-, r-, M- ja U-liikkeillä, jolloin vasempaan siltaan ei kosketa. Kuva oikealla: M' U M, yksi Rouxin loppuvaiheen yleisimmistä liikesarjoista. Keskikerros ylös, yläkerros kerran, keskikerros takaisin alas – kolmella askeleella vaihdetaan yläkerroksen ja keskikerroksen reunaparien paikkaa.*

Voit tutustua kokoamaani [Roux-menetelmän kaavakokoelmaan](/zh/projects/rubiks-cube/roux#cmll). CMLL-sivu esittelee kaksivaiheisen lähestymistavan: 7 orientaatiokaavaa + 2 permutaatiokaavaa, yhteensä 9 kaavaa. Tämä on kustannustehokas valinta nopeuden parantamiseen, ja ne on helppo oppia; jokaisen opitun ryhmän avulla voit nopeutua noin 1–2 sekuntia. Pienellä harjoittelulla ne tulevat nopeasti tutuiksi, ja joitakin niistä on esitelty jo edellisessä artikkelissa. Sinun ei tarvitse muistaa niitä kaikkia päästäksesi alle 30 sekuntiin.

![Kaksivaiheisen CMLL:n ensimmäinen vaihe, seitsemän kulmapalojen suuntaa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Kuva: Kaksivaiheisen CMLL:n ensimmäinen vaihe, seitsemän kulmapalojen suuntaa. Ylhäältä päin katsottuna keltainen on ylöspäin osoittava yläpinnan väri, ja ulkopuolella olevat pienet palkit osoittavat, että kyseisen kulman yläpinnan väri osoittaa sivulle. Tunnista muoto keltaisten kulmien määrän perusteella: 0 on H tai Pi, 1 on S tai AS, 2 on U, T tai L.*

Kun keltainen yläosa on kohdistettu, voit käyttää näitä kahta kaavaa kulmapalojen sivujen kohdistamiseen.

Jos yksi sivu on jo väriltään yhtenäinen, esimerkiksi punainen on jo samalla sivulla, käännä se vasemmalle ja valitse sitten vierekkäisten palojen vaihtokaava. Jos mikään sivu ei ole väriltään yhtenäinen, valitse diagonaalisten palojen vaihtokaava.

![Kaksivaiheisen CMLL:n toinen vaihe, kaksi kulmapalojen sijaintia](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Kuva: Kaksivaiheisen CMLL:n toinen vaihe, kaksi kulmapalojen sijaintia. Vasemmassa kuvassa vasemmanpuoleisten kahden kulman punainen väri on jo yhtenäinen, käytä vierekkäisten vaihtoa; oikeassa kuvassa mikään sivu ei ole yhtenäinen, käytä diagonaalista vaihtoa.*

Voit ymmärtää jokaisen kaavaryhmän runsaalla hitaalla pyörityksellä. Älä pidä niitä kaavoina, vaan tietyntyyppisinä vakioliikkeinä, jotka voisit löytää itsekin hitaasti tutkimalla, mutta tässä ne on lueteltu auttamaan sinua välttämään turhia kiertoteitä.

Lisäksi on yksi asia, joka on tehokkaampaa kuin mikään muu harjoittelu: kuluta hieman rahaa ja hanki uusi Rubikin kuutio. Jos sinulla on edelleen sellainen vanha kuutio, joka naksahtelee ja jumittuu liikaa pyörittäessä, hanki moderni magneettinen 3x3-kuutio. Uusimmat kuutiot antavat sinun kokea teknisen optimoinnin voiman: ne pyörivät sulavasti, palautuvat automaattisesti paikoilleen ja jumittuvat tuskin koskaan. Pelkästään kuution vaihtaminen voi nopeuttaa keskimääräistä aikaasi jopa 15 sekunnilla. Kustannustehokas valinta on [MoYu RS3 M V5 (maglev + palloydinversio)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), joka maksaa noin kaksikymmentä dollaria ja riittää aina sub-20-tasolle asti.

### Vaihe kolme: 40 sekuntia → 30 sekuntia (viikot 5–13, kaksi kuukautta)

**Tiedot**: 7. kesäkuuta – 4. elokuuta. Ao100-tulos hioutui 39,8 sekunnista 29,9 sekuntiin, mihin kului 58 päivää. Tässä vaiheessa saattoi ajoittain tulla alle 30 sekunnin tuloksia, mutta vain erittäin hyvällä tuurilla. Lisäksi keskimääräisen ratkaisuajan laskiessa yhden sekunnin paranemisen vaikeus kasvaa eksponentiaalisesti.

![Päivittäinen keskiarvo](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Kuva: Päivittäinen keskiarvo. Kesäkuun puolivälin jälkeen käyrä tasoittui lähes täysin, ja hiouduin 30–40 sekunnin välillä kaksi kuukautta.*

Tämä on tasanteen vaihe. Jokainen kohtaa sen, ja minäkin oleskelin täällä kaksi kuukautta.

**Missä jumituttiin**: Yläkerroksen kuuden reunapalan ratkaiseminen oli hidasta, logiikkaa ei ymmärretty, ja joka kerta se tehtiin toistuvilla yrityksillä, mikä tuhlasi paljon aikaa. Vasen ja oikea silta olivat edelleen liian harjoittelemattomia.

**Mitä harjoiteltiin**:

- EO-tunnistus. Edellisessä osassa kävimme läpi, että vääriä reunoja on vain muutamia tapauksia: 0, muu kuin 0 tai 4, 4 (2 ylhäällä, 2 alhaalla), 4 (kaikki yläkerroksessa), 4 (3 ylhäällä, 1 alhaalla). Tämän vaiheen tavoite on: heti kun sillat on rakennettu, tunnistaa silmänräpäyksessä, mikä tapaus on kyseessä, laskematta. Harjoitusmenetelmä on sekoittaa kuutio, tehdä vain CMLL loppuun, sitten pysähtyä, sanoa väärien reunojen määrä ja jatkaa.
- Monet eivät ymmärrä tämän vaiheen liikkeitä. EO-vaiheen lopullinen tavoite on luoda nuolen muoto (3 ylhäällä, 1 alhaalla), koska täysi ratkaistu tila on vain yhden sekoitusliikkeen päässä nuolen muodosta. Siksi, käänteisellä ajattelulla, tämä on viimeinen vaihe ennen ratkaisun valmistumista. Riippumatta väärien reunojen määrästä, lopullinen tavoite on luoda nuoli. Jos ylhäällä on 4 väärää reunaa, vaihda yksi ylä- ja alareunapari, jotta yksi väärä reuna siirtyy alas ja nuoli muodostuu. Jos ylhäällä on 2 ja alhaalla 2, vaihda yksi ylä- ja alareunapari, jotta yksi väärä reuna nousee ylös ja nuoli muodostuu. Jos ylhäällä on 1 ja alhaalla 1, tai ylhäällä on 2, tee M' U M muuttaaksesi tilanteen edellisiin tapauksiin ja sitten muodosta nuoli. Voit löytää parhaat vaiheet 1/1-tilanteeseen itse runsaalla havainnoinnilla ja ajattelulla.
- Harjoittele ennakoimista (Look-ahead) runsaasti. Tämä on tärkein asia 40 sekunnista 30 sekuntiin pääsemiseksi, ja se on myös kaikkein vastaintuitiivisin: pyöritä hitaammin, katso kauemmas. Kun rakennat vasenta siltaa, älä katso parhaillaan asetettavaa palaa, vaan katso, missä seuraava pala on. Aluksi se tuntuu erittäin hankalalta, ja tulokset heikkenevät ensin, mutta viikon harjoittelun jälkeen ne paranevat yhtäkkiä.
- CMLL:ssä ei epäröintiä. Jos joudut miettimään joka kerta ennen kuin uskallat tehdä liikkeen, se ei ole vielä sinun hallussasi. Harjoittele jokaista liikettä erikseen 50 kertaa, kunnes kätesi liikkuu automaattisesti nähdessäsi muodon.

![Nuolimuoto](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Kuva: Nuolimuoto. Yläkerroksen kolme väärää reunaa (korostettu sinivihreällä) muodostavat nuolen, joka osoittaa alakerroksen väärää reunaa. Tässä tilanteessa yksi M' U M -liike asettaa kaikki neljä palaa samanaikaisesti paikoilleen. [Avaa tämä tila 3D-kuutiossa](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) ja voit tarkastella sitä askel askeleelta.*

![EO:n kuusi muotoa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Kuva: Kuusi EO-muotoa. Vasemmassa yläkulmassa olevat tarrat ilmoittavat väärien reunojen määrän (ylhäällä / alhaalla), keltainen on oikea reuna ja sinivihreä kehys väärä reuna. Vain nuolen muoto vaatii kaavan, muut viisi muunnetaan ensin nuoleksi.*

Vasen- ja oikeareunapalojen ratkaisemiseksi tässä esimerkissä keltainen on yläpinta, valkoinen alapinta ja vasen silta on punainen. Silloin on palautettava keltainen-punainen reunapala + keltainen-oranssi reunapala (korostetut kohdat). Pääajatuksena on siirtää keltainen-punainen reunapala alapintaan ylä- ja alareunapalojen vaihdolla, ja samoin keltainen-oranssi reunapala siirretään alapintaan. Kun molemmat reunapalat ovat alapinnalla vastakkain, yläpinta käännetään oikeaan asentoon, ja M2 U tai M2 U' -liikkeellä voidaan ratkaista U-kerroksen vasen- ja oikeareunapalat.

Auttaakseni paremmin ymmärtämään, olen koonnut kaikki kuusi EO-muotoa [Roux-menetelmän kaavakokoelman LSE-sivulle](/zh/projects/rubiks-cube/roux#lse). Jokaisen kuvan "Katso tarkemmin" -painike avaa vastaavan tilan 3D-kuutiossa, ja virheelliset reunat korostuvat automaattisesti. Samalla sivulla on myös myöhemmät UL/UR-palojen ja neljän viimeisen reunan kaikki tapaukset.

Harjoittelumäärän lasku tässä vaiheessa ei ole huono asia. Tasannetta ei voi ylittää vain määrää lisäämällä, vaan se vaatii yhden tietyn huonon tavan muuttamista. Oma kokemukseni on, että kerralla muutetaan vain yksi tapa.

### Vaihe neljä: 30 sekuntia → 28 sekuntia (viikon 13 jälkeen)

**Tiedot**: 4. elokuuta jälkeen. Syyskuun koko kuukauden aikana kirjattuja harjoituskertoja oli 122, mutta monia harjoituksia ei itse asiassa kirjattu. Olen sisällyttänyt Rubikin kuution osaksi elämääni pöytäleluksi, jonka otan käteeni aina kun huvittaa: kun olen hyvällä tuulella, kun olen ärtynyt tai ahdistunut, työtaukojen aikana tai kun minulla on tylsää. Ao100 on myös vähitellen laskenut 29,9:stä 28,2:een.

**Missä jumituttiin**: Ei selkeää pullonkaulaa, vain puutteellinen harjaantuminen.

**Mitä harjoiteltiin**:

Jos keskimääräinen nopeutesi on edelleen yli 30 sekuntia, ainoa asia, mitä sinun tarvitsee tehdä, on jatkaa harjoittelua runsaasti, eikä opetella uusia kaavoja ulkoa.

Jatkuvalla hitaalla pyörityksellä ja ennakoimisen harjoittelulla nopeutat jatkuvasti.

Ota kuutio esiin ja leiki sillä milloin tahansa. Pidä kuutio paikassa, johon yletyt helposti, esimerkiksi työpöydälläsi, jotta voit leikkiä sillä työtaukojen aikana. Voit myös säännöllisesti kuvata ratkaisuvideoitasi ja tarkistaa, missä vaiheessa kuluu eniten aikaa, ja sitten optimoida sitä kohdennetusti. Tämä on tarkoituksellista harjoittelua. Edistymisesi nopeus ei riipu tavallisten harjoituskertojen kokonaismäärästäsi, vaan tarkoituksellisten harjoituskertojen määrästä.

Sitten huomaat, että kun olet ylittänyt 30–35 sekunnin pullonkaulan, nopeutesi laskee jälleen pykälän.

Tässä vaiheessa onneksi olkoon, aloittelijan silmissä olet jo erittäin taitava pelaaja!

## Kaavattoman menetelmän hinta

Tässä kohtaa on syytä olla rehellinen. Kaavojen ulkoa opettelun välttäminen ei ole ilmaista.

CMLL-vaihe on hitaampi. 42 tilanteen kattaminen yhdeksällä kaavalla tarkoittaa, että joissakin tilanteissa joudut tekemään liikkeen kaksi kertaa. Täyden CMLL-kaavakokonaisuuden osaavat ovat tässä vaiheessa minua pari kolme sekuntia nopeampia.

M-kerroksen tekniikan kynnys on korkea. Rouxin loppuvaihe perustuu kokonaan M-kerrokseen, ja M-kerrosta on vaikeampi pyörittää kuin R- tai U-kerrosta, se jumittuu helpommin ja asettaa suuremmat vaatimukset itse kuutiolle.

Älä huolehdi ylärajasta. Huippupelaajien joukossa on niitäkin, jotka käyttävät Rouxia ja sijoittuvat maailman kärkeen. Itse menetelmällä ei ole ylärajaa. Mutta päästäksesi alle 15 sekuntiin, sinun on todennäköisesti opittava kaikki 42 CMLL-kaavaa. Se on kuitenkin toisen vaiheen asia. Alle 30 sekuntiin pääsemiseen sitä ei tarvita.

Lisäksi lähes jokainen maailmanluokan yhden käden ratkaisija käyttää Roux-menetelmää, koska se soveltuu todella hyvin myös yhden käden käyttöön.

**Nopeimmat Roux-tulokset virallisissa kilpailuissa (WCA):**

- Yksittäinen ratkaisu 4,11 sekuntia, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippiinit), 2023 Valenzuela Cubing Open, tunnustettu nopein virallinen Roux-yksittäisratkaisu ([rekonstruktiovideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Keskiarvo 5,98 sekuntia, sama henkilö, 2019, tuolloin Aasian ennätys ja historian kolmas virallinen sub-6-keskiarvo ([WCA-tiedot](https://www.worldcubeassociation.org/persons/2017VILL41))
- Hän on myös [yhden käden maailmanennätyksen haltija](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): keskiarvo 8,09, yksittäinen ratkaisu 6,05 (2024). Yhden käden ratkaisijoiden keskuudessa Rouxia pidetään yleisesti optimaalisimpana menetelmänä.

Mielestäni tämä kauppa on erittäin kannattava. Käytät pari kolme sekuntia CMLL-aikaa, mutta saat vastineeksi sen, että tiedät mitä teet joka vaiheessa, et unohda ratkaisua kolmen kuukauden päästäkään, ja pystyt kehittämään ratkaisun mihin tahansa tuntemattomaan kuutioon.

## Yhteenveto

![Ratkaisu valmis](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Ratkaisukyvystä alle 30 sekunnin aikaan pääseminen ei ole kaavojen ulkoa opettelua, vaan käsien, silmien ja aivojen koordinaation harjoittelua.

Neljä vaihetta, neljä asiaa: ensin opettele katsomaan kuutiota sitä pyörittämättä, sitten opettele rakentamaan oikea silta rikkomatta vasenta, sitten opettele katsomaan seuraavaa vaihetta samalla kun teet edellistä, ja lopuksi anna käsiesi seurata silmiäsi.

Kaavat eivät ole nopeuden lähde. Havainnointi on.

Opi luomaan positiivista palautetta jokaisen osa-alueen edistymisen kautta. Jopa taitoharjoittelu voi olla vähemmän puuduttavaa, varsinkin kun yllätyt jälleen kerran uudesta ennätyksestä. Erityisesti alku- ja keskitasolla koet joka päivä ennätysten rikkomisen tuomaa iloa.

Kaikki artikkelissa mainitut kaavat ja tilanteet olen koonnut [Roux-menetelmän kaavakokoelmaan](/zh/projects/rubiks-cube/roux). Kun jumiudut, palaa tarkistamaan sieltä.

Rubikin kuution maailman hauskuus on rajaton, toivotan sinulle hauskaa pelaamista.

## Liite 1: Harjoituslista vaiheittain

**Vaihe yksi (> 60 sekuntia)**

- Pidä havainnointiasento kiinteänä, älä käännä kuutiota koko ratkaisuprosessin aikana.
- Löydä seuraava haluamasi väri ilman taukoja.
- Hidas pyöritys, sano ääneen kunkin liikkeen tarkoitus.
- Harjoittele vain vasenta siltaa, toista 50 kertaa.

**Vaihe kaksi (60 → 40 sekuntia)**

- Oikeaa siltaa rakentaessa käytä vain R-, r-, M- ja U-liikkeitä, älä koske vasempaan siltaan.
- Harjoittele kaksivaiheista CMLL:ää.
- Harjoittele M' U M' U -rytmiä 5 minuuttia päivittäin.

**Vaihe kolme (40 → 30 sekuntia)**

- Pysähdy CMLL:n päätyttyä ja sano silmänräpäyksessä väärien reunojen määrä.
- Hidas pyöritys + ennakointi: katse aina seuraavassa palassa.
- Vähintään 20 laadukasta ratkaisua päivittäin.

**Vaihe neljä (< 30 sekuntia)**

- Kuvaa videoita taukojen löytämiseksi.
- Tekniikka: R U R' U' -yhden sormen tekniikka, M-kerroksen käsittely nimettömällä sormella.
- 20 laadukasta ratkaisua päivittäin, älä kasaa määrää.

## Liite 2: Työkalut

- **csTimer**: [cstimer.net](https://cstimer.net/). Avaa Ao5 / Ao12 / Ao100 -tilastot. Ao100 kuvastaa todellista tasoasi, yksittäiset ajat ovat tuurista kiinni.
- **3D Rubikin kuutio**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Kaikki tämän artikkelin kaavat voi syöttää tänne ja katsoa animaationa.
- **Roux-menetelmän aloittelijaystävällinen kaavakokoelma**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Vasemman ja oikean sillan yleisimmät asetteluohjeet, kaksivaiheisen CMLL:n 9 kaavaa ja kaikki LSE-tapaukset (EO, UL/UR, neljä viimeistä reunaa). Jokaisen kuvan voi avata 3D-kuutiossa, jolloin epäolennaiset palat piilotetaan automaattisesti ja siirrettävät reunat korostuvat.
- **csTimerin harjoitusanalysaattori**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Vedä csTimerista viety tiedosto sisään, niin näet omat tuloskehityksesi, Ao5/Ao12/Ao100-käyräsi, PB-parannuksesi, virstanpylvästaulukon (milloin saavutit ensimmäisen kerran sub-60, sub-40, sub-30) ja Power Law -harjoituskäyrän. Kaikki tämän artikkelin kuvat ovat peräisin täältä. Tiedot käsitellään vain selaimessasi, eikä niitä ladata minnekään. Jos sinulla ei ole vientitiedostoa, voit ladata ensin minun 4441 ratkaisun datani nähdäksesi, miten se toimii.

*Tämä artikkeli sisältää Amazonin affiliate-linkkejä: Jos ostat tuotteen linkin kautta, saan pienen provision, ja sinun hintasi pysyy samana.*

## Lisälukemista

- [Miten ratkaista Rubikin kuutio ilman kaavoja: Jopa alakouluikäinen ymmärtää](/zh/blog/solve-rubiks-cube-without-formulas)
