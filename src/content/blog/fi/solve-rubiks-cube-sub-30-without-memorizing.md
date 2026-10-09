---
layout: blog
title: "Miten Rubikin kuutio ratkaistaan alle 30 sekunnissa ilman algoritmien ulkoa opettelua: Selkeä opas kaikille"
date: 2026-10-09 12:00:00
tags:
  - Rubikin kuutio
  - opas
  - Roux-metodi
  - pikaratkaisu
  - tavoitteellinen harjoittelu
categories: Arkipäivän puuhastelu
description: "Ensimmäisestä ratkaisusta Ao100-tulokseen alle 30 sekunnissa kului 89 päivää, enkä opetellut yhtään CFOP-algoritmia ulkoa. Käytän 4441 aikaratkaisun dataa purkaakseni neljä vaihetta: mihin kussakin vaiheessa jumiudutaan, mitä kannattaa harjoitella ja miksi Roux-metodi ei vaadi algoritmien ulkoa opettelua."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Neljä vaihetta 165 sekunnista 28 sekuntiin" />
</figure>

*Kuva: Neljä vaihetta 165 sekunnista 28 sekuntiin. Toisessa vaiheessa nopeus parani nopeimmin, ja kolmas vaihe oli pisin tasaantumisjakso.*

Edellisessä [artikkelissa «Miten ratkaista Rubikin kuutio ilman algoritmeja»](/fi/blog/solve-rubiks-cube-without-formulas/) opit ratkaisemaan kuution ilman algoritmien ulkoa opettelua, kommutaattoreiden logiikkaa hyödyntäen. Artikkeli sai paljon innostunutta palautetta.

Jos seurasit ohjeita, käytät luultavasti nyt kaksi tai kolme minuuttia ratkaisuun. Vaikka kätesi saattavatkin vielä sählätä, saat kuution kyllä ratkaistua. Sitten nousee esiin uusi kysymys: miten nopeutua?

Jos etsit «Rubikin kuution pikaratkaisua», kaikki tutoriaalit kertovat sinulle saman asian: jos haluat alle 30 sekunnin aikoihin, opettele ensin CFOP-algoritmit ulkoa. F2L:ään 41, OLL:ään 57, PLL:ään 21 – yhteensä 119 algoritmia. Vaikka F2L:n tekisi intuitiivisesti, yläkerroksen 78 algoritmia ovat väistämättömiä. Jos et opi niitä ulkoa, nopeudesta ei kannata haaveilla.

Tämä artikkeli pyrkii osoittamaan, että voit päästä alle 30 sekunnin aikoihin ilman yhtäkään ulkoa opeteltua algoritmia.

<!--more-->

Ensimmäisestä Rubikin kuution ratkaisustani 7. toukokuuta 2026 aina 4. elokuuta asti, jolloin Ao100-tulokseni laski alle 30 sekunnin, kului 89 päivää. Tänä aikana en opetellut yhtään CFOP-algoritmia ulkoa, vaan harjoittelin vain vapaa-ajallani. Tämä on kirjaamani data 4441 ratkaisusta.

![4441 ratkaisun aikakäyrä](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Kuva: 4441 ratkaisun aikakäyrä. Harmaa viiva näyttää yksittäiset ajat, tumma viiva Ao100-trendin, ja punaiset pisteet merkitsevät uusia henkilökohtaisia ennätyksiä. Paras Ao100-tulokseni oli 28,22 sekuntia.*

Tietoisella ja aktiivisella harjoittelulla sekä säännöllisyyden ylläpitämisellä kuka tahansa voi päästä aloittelijasta alle 30 sekunnin tasolle muutamassa kuukaudessa.

Mitä alle 30 sekunnin aika oikein tarkoittaa? [Vuoden 1982 ensimmäisissä Rubikin kuution maailmanmestaruuskilpailuissa](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) mestaruusaika oli 22,95 sekuntia, joka on myös WCA:n myöhemmin viralliseksi maailmanennätykseksi tunnustama ensimmäinen ennätys. Kymmenennen sijan aika oli 29,11 sekuntia, ja tämän tuloksen saavutti kukapa muukaan kuin CFOP-metodin kehittäjä Jessica Fridrich itse, josta puhun seuraavassa osiossa. Toisin sanoen, nykypäivän harrastajan muutamassa kuukaudessa saavuttama alle 30 sekunnin tulos olisi päässyt vuoden 1982 MM-kisojen kymmenen parhaan joukkoon.

Seuraavaksi jaan kanssasi, miten itse pääsin tähän, ja esittelen koko harjoittelumenetelmäni sinulle.

## Miksi pikaratkaisumaailmassa opetellaan algoritmeja ulkoa

Selvitetään ensin yksi asia: miksi «nopeus» ja «algoritmien ulkoa opettelu» ovat ihmisten mielissä niin tiukasti sidoksissa toisiinsa?

1980-luvun alussa tšekkiläissyntyinen professori Jessica Fridrich (joka myöhemmin tutki digitaalista forensiikkaa Binghamtonin yliopistossa Yhdysvalloissa) kehitti kerroksittaisen ratkaisumenetelmän, jota kutsuttiin myöhemmin CFOP:ksi (Cross, F2L, OLL, PLL). Tämän menetelmän idea on luetella kaikki yläkerroksen mahdolliset tilanteet ja antaa jokaiselle tilanteelle optimaalinen algoritmi. Tunnistat tilanteen, suoritat algoritmin, eikä sinun tarvitse ajatella.

![Jessica Fridrich ja hänen Rubikin kuutionsa toimistossaan](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Kuva: Jessica Fridrich ja hänen Rubikin kuutionsa toimistossaan. Vuonna 1982 hän sijoittui ensimmäisissä MM-kisoissa 10. sijalle ajalla 29,11 sekuntia, ja CFOP-metodi on nimetty hänen mukaansa (Fridrich Method).*

Tämä metodi on erittäin nopea. Lähes kaikki maailmanennätykset on tehty CFOP:lla. Siksi kaikki tutoriaalit opettavat sitä, kaikki videot käsittelevät sitä, ja «pikaratkaisun opettelu» on sama kuin «CFOP:n opettelu», mikä taas tarkoittaa 119 algoritmin ulkoa opettelua.

Huomaa kuitenkin, että «algoritmien ulkoa opettelu» on CFOP:n ominaisuus, ei nopeuden itsensä. CFOP vaatii ulkoa opettelua, koska se valitsi sen reitin – kaikkien tapausten luetteloinnin. Luettelointi vaatii muistia, ja se on hinta, joka siitä maksetaan.

Onko olemassa menetelmiä, jotka eivät kulje kaikkien tapausten luetteloinnin tietä? Kyllä on.

## Ratkaisumenetelmä ilman ulkoa opeteltavia algoritmeja: Roux-metodi

Vuonna 2003 ranskalainen Gilles Roux julkaisi täysin erilaisen lähestymistavan. Sen sijaan, että kuutio ratkaistaisi kerros kerrokselta, siinä rakennetaan ensin kaksi 1×2×3-lohkoa (ensimmäinen ja toinen lohko), sitten käsitellään yläkerroksen neljä kulmapalaa, ja lopuksi jäljelle jääneet kuusi reunapalaa viimeistellään käyttäen vain M- ja U-siirtoja.

![Gilles Roux kilpailussa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Kuva: Gilles Roux kilpailussa. Kuva on otettu vanhasta kilpailuvideosta ja sitä on korjattu ja suurennettu tekoälyllä.*

Edellisessä artikkelissa ratkaisimme kuution jo kerran tällä menetelmällä. Käydään sen neljä vaihetta nyt uudelleen läpi, keskittyen tällä kertaa siihen, «mitä kussakin vaiheessa pitää muistaa»:

| Vaihe                | Sisältö                                   | Ulkoa opeteltavia algoritmeja                                  |
| :------------------- | :---------------------------------------- | :------------------------------------------------------------- |
| 1. Ensimmäinen lohko | Rakennetaan 1×2×3-lohko                   | 0, pelkkää havainnointia                                       |
| 2. Toinen lohko      | Rakennetaan toinen lohko symmetrisesti    | 0, pelkkää havainnointia                                       |
| 3. CMLL              | Yläkerroksen neljän kulmapalan asettelu   | 9 algoritmia, jotka kaikki voidaan johtaa 3-syklistä           |
| 4. LSE               | Viimeiset kuusi reunapalaa                | 0, käytetään vain ylä- ja keskikerroksen (M ja U) siirtoja |

![Roux-metodin neljä vaihetta](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Kuva: Roux-metodin neljä vaihetta. Jokaisessa vaiheessa näytetään vain siihen pisteeseen mennessä ratkaistut palat: Ensimmäinen lohko → Toinen lohko → CMLL (yläkerroksen neljä kulmaa) → LSE (viimeiset kuusi reunaa). Kuvakaappaus 3D-kuutiosivuni «ratkaisut»-paneelista.*

Kolme neljästä vaiheesta ei vaadi mitään algoritmeja. Ainoa algoritmeja vaativa vaihe on CMLL, jossa on yhteensä 42 tapausta, mutta sinun ei tarvitse opetella kaikkia 42:ta. Edellisessä artikkelissa käsitelty kulmapalojen 3-sykli R U' L' U R' U' L U sekä sen peilikuva ja muutama variaatio kattavat kaikki tilanteet, tosin hieman hitaammin.

Tästä syystä Roux-metodilla voi pärjätä ilman algoritmien ulkoa opettelua: se tiivistää muistia vaativan osion hyvin pieneen nurkkaan, ja loput perustuvat havainnointiin, ymmärtämiseen ja harjoitteluun.

## 165 sekunnista 28 sekuntiin: Neljä vaihetta

Seuraavaksi jaan oman matkani vaiheet. Jokaisesta vaiheesta on merkitty alku- ja loppupiste datan avulla, ja kerron, mihin siinä vaiheessa jumiuduin ja mitä harjoittelin. Sinun haasteesi saattavat olla erilaisia, mutta vaiheiden järjestys on todennäköisesti sama.

![Neljän vaiheen aikajänne](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Kuva: Neljän vaiheen aikajänne. Ensimmäinen vaihe 3 viikkoa, toinen vaihe 11 päivää, kolmas vaihe kaksi kuukautta, neljäs vaihe tähän päivään asti.*

### Vaihe yksi: 165 sekuntia → 60 sekuntia (viikot 1–3)

**Data**: 7. toukokuuta – 27. toukokuuta. Ensimmäisen viikon keskiarvo oli 165 sekuntia, kolmannen viikon 68 sekuntia.

**Mihin jumiudutaan**: Ensimmäinen lohko oli erittäin harjoittelematon, ja jokaista palaa etsi pitkään. Kun yksi palapari löytyi, aloittelijat usein pysähtyivät jatkamaan havainnointia.

![Mihin aloittelija käyttää aikansa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Kuva: Mihin aloittelija käyttää aikansa. Kädet pysähtyvät, silmät etsivät kuutiosta, ja «etsimiseen» kuluu moninkertaisesti aikaa verrattuna «kääntämiseen»*.

**Mitä harjoitellaan**:

Tässä vaiheessa suurin vihollinen ei ole hitaat kädet, vaan hitaat silmät. Käytät «etsimiseen» paljon enemmän aikaa kuin «kääntämiseen». Siksi:

- Pidä kuutio paikallaan ja vältä sen pyörittämistä. Kuten edellisessä artikkelissa mainittiin, Roux-metodissa havainnointikulma on kiinteä. Tässä vaiheessa sinun on kehitettävä lihasmuisti, jotta et pyöritä kuutiota turhaan. Aina kun haluat pyörittää kuutiota, pysähdy ja kysy itseltäsi: näenkö etsimäni palan tästä kulmasta?
- Hidas ratkaisu (slow solving). Älä ota aikaa, mutta varmista, että liikkeet ovat peräkkäisiä ja ilman pysähdyksiä. Jokainen liike voi olla hyvin hidas, mutta ilman katkoja. Tärkeintä on, että silmäsi seuraavat jo seuraavaa liikettä, kun kätesi tekevät edellistä. Tämä on hitaan ratkaisun ydin. Vaikka tämä tuntuisi hidastavan, se todellisuudessa harjoittelee silmiäsi näkemään palan sijainnin ja sen kohdesijainnin välisen suhteen.
- Harjoittele vain ensimmäistä lohkoa. Sekoita, rakenna ensimmäinen lohko, sekoita uudelleen, rakenna ensimmäinen lohko uudelleen. Älä jatka pidemmälle. Ensimmäinen lohko on Roux-metodin vapain vaihe ja se, joka parhaiten kehittää havainnointikykyä.

Älä opettele tässä vaiheessa uusia algoritmeja. Nykyinen pullonkaulasi ei ole algoritmeissa.

### Vaihe kaksi: 60 sekuntia → 40 sekuntia (viikot 4–5)

**Data**: 27. toukokuuta – 7. kesäkuuta, 11 päivää. Tämä oli nopeimmin aikaa lyhentävä vaihe koko prosessissa, ja myös se, jossa harjoittelin eniten – kesäkuun ensimmäisellä viikolla 723 kertaa.

**Mihin jumiudutaan**: Liikkeet eivät ole sujuvia. Kuutio jumittaa.

**Mitä harjoitellaan**:

Tässä vaiheessa sinun on optimoitava jokaisen vaiheen liikkeet ja lisättävä jokaisen liikkeen sujuvuutta ymmärryksen pohjalta.

- Toinen lohko (SB). Toinen lohko on ensimmäistä haastavampi, koska tilaa on puolet vähemmän, etkä saa rikkoa jo valmista ensimmäistä lohkoa. Keskeiset siirrot ovat R, r (oikea kahden kerroksen siirto), M ja U. Tässä vaiheessa on opittava käyttämään r- ja M-siirtoja R:n sijaan palojen liikuttamiseen, jotta ensimmäinen lohko ei koskaan rikkoudu. Liikesarjojen optimointi säästää aikaa. Esimerkiksi kolme myötäpäivään tehtyä käännöstä vastaa yhtä vastapäivään tehtyä.
- Hallitse M-kerroksen käyttö. Rouxin viimeinen vaihe koostuu kokonaan M- ja U-siirroista, ja M-kerroksen sujuvuus vaikuttaa suoraan nopeutesi alarajaan. Työnnä M-kerrosta nimettömällä tai keskisormella ja ala harjoitella M' U M' U -rytmiä.
- CMLL:n tunnistaminen. Edellisessä artikkelissa «kokeilimme» kulmia 3-syklin avulla. Nyt on aika alkaa katsoa ensin ja sitten tehdä: ennen yläkerroksen kääntämistä, katso kulmapalojen keltaisten sivujen suuntaa ja päättele, onko niitä 0, 1, 2 vai 4 oikein suunnattua kulmaa, ja tee sitten suoraan vastaava liikesarja. Voit myös parantaa tehokkuutta huomattavasti hyvin pienellä määrällä algoritmeja, mikä on erittäin kannattavaa. Suuri osa näistä algoritmeista ei vaadi ulkoa opettelua, vaan ne oppii tekemällä ja ymmärtämällä.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Toisen lohkon rakentamisen näkökulma" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Kuva vasemmalla: Toisen lohkon rakentamisen näkökulma. Ensimmäinen lohko on valmis, ja oikeanpuoleinen kulma-reunapari asetetaan paikalleen käyttäen vain R, r, M, U -siirtoja, jolloin ensimmäiseen lohkoon ei kosketa. Kuva oikealla: M' U M, yksi Rouxin loppuvaiheen yleisimmin käytetyistä liikesarjoista. Keskikerros ylös, yläkerros kääntyy, keskikerros alas – kolmella askeleella vaihdetaan ylä- ja keskikerroksen reunapari.*

Voit katsoa kokoamani [Roux-metodin algoritmiarkiston](/fi/projects/rubiks-cube/roux#cmll). CMLL-sivulla on kaksivaiheinen järjestelmä: 7 orientointialgoritmia + 2 permutaatioalgoritmia, yhteensä 9 algoritmia. Tämä on erinomainen valinta nopeuden parantamiseen, helppo oppia, ja jokainen hallittu sarja nopeuttaa noin 1–2 sekuntia. Pienellä harjoittelulla ne oppii nopeasti, ja jotkut niistä on jo esitelty edellisessä artikkelissa. Sinun ei tarvitse muistaa niitä kaikkia päästäksesi alle 30 sekunnin aikoihin.

![Kaksivaiheisen CMLL:n ensimmäinen vaihe, seitsemän kulmapalojen orientaatiota](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Kuva: Kaksivaiheisen CMLL:n ensimmäinen vaihe, seitsemän kulmapalojen orientaatiota. Yläkuvassa keltainen on ylöspäin osoittava ylätason väri, ja ulkosivun pieni viiva osoittaa kulman ylätason värin suuntaa sivulle. Tunnista muoto keltaisten kulmien määrän perusteella: 0 on H tai Pi, 1 on S tai AS, 2 on U, T tai L.*

Kun keltaiset yläosat on linjattu, näitä kahta algoritmia voidaan käyttää kulmapalojen sivujen kohdistamiseen.

Jos yksi sivu on jo väreiltään yhtenäinen, esimerkiksi punainen on jo samalla sivulla, käännä se vasemmalle ja valitse sitten vierekkäisten kulmien vaihtamisalgoritmi. Jos mikään sivu ei ole väreiltään yhtenäinen, valitse diagonaalisten kulmien vaihtamisalgoritmi.

![Kaksivaiheisen CMLL:n toinen vaihe, kahden kulmapalojen sijainnin vaihtoehdot](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Kuva: Kaksivaiheisen CMLL:n toinen vaihe, kahden kulmapalojen sijainnin vaihtoehdot. Vasemmassa kuvassa vasemmanpuoleisten kahden kulman punainen väri on jo kohdallaan, käytä vierekkäisten vaihtoa; oikeassa kuvassa mikään sivu ei ole yhtenäinen, käytä diagonaalisten vaihtoa.*

Voit ymmärtää jokaisen algoritmisarjan harjoittelemalla paljon hitaasti. Älä ajattele niitä algoritmeina, vaan tiettyinä kiinteinä liikkeinä, jotka voit löytää itsekin hitaasti tutkimalla. Tässä ne on lueteltu, jotta voit oikaista.

Yksi asia, joka tuottaa tuloksia nopeammin kuin mikään harjoittelu: investoi uuteen kuutioon. Jos sinulla on vielä vanha kuutio, joka naksahtelee ja jumittaa, osta magneettinen moderni 3x3-kuutio. Uusimmat kuutiot antavat sinun kokea insinöörioptimoinnin voiman: ne kääntyvät sulavasti, palat asettuvat automaattisesti paikoilleen eivätkä juuri koskaan jumita. Pelkästään kuution vaihtaminen voi nopeuttaa keskiarvoa jopa 15 sekunnilla. Hyvä hinta-laatusuhde on [MoYu RS3 M V5 (magneettinen + palloydinversio)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), noin kahdenkymmenen dollarin hintaluokassa, riittää aina sub-20-tasoa varten.

### Vaihe kolme: 40 sekuntia → 30 sekuntia (viikot 5–13, kaksi kuukautta)

**Data**: 7. kesäkuuta – 4. elokuuta. Ao100-tuloksen hiomiseen 39,8 sekunnista 29,9 sekuntiin kului 58 päivää. Tässä vaiheessa saattoi joskus tulla alle 30 sekunnin tuloksia, mutta vain erittäin hyvällä tuurilla. Lisäksi keskimääräisten ratkaisuaikojen laskiessa yhden sekunnin parantaminen vaikeutuu eksponentiaalisesti.

![Päivittäiset keskiarvotulokset](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Kuva: Päivittäiset keskiarvotulokset. Kesäkuun puolivälin jälkeen käyrä lähes tasoittui, ja harjoittelin kaksi kuukautta 30–40 sekunnin välillä.*

Tämä on tasaantumisvaihe. Jokainen kohtaa sen, ja minä vietin tässä kaksi kuukautta.

**Mihin jumiudutaan**: Yläkerroksen kuuden reunapalan ratkaiseminen on hidasta, logiikkaa ei ymmärretä, ja joka kerta kuluu paljon aikaa toistuvaan kokeiluun. Myös ensimmäinen ja toinen lohko ovat edelleen liian harjoittelemattomia.

**Mitä harjoitellaan**:

- EO:n (Edge Orientation) tunnistaminen. Edellisessä artikkelissa käsittelimme, että huonosti suunnattuja reunapaloja on vain muutamia tilanteita: 0, muu kuin 0 tai 4, 4 (2 ylhäällä, 2 alhaalla), 4 (kaikki yläkerroksessa), 4 (3 ylhäällä, 1 alhaalla). Tämän vaiheen tavoitteena on tunnistaa heti lohkojen rakentamisen jälkeen, laskematta, mikä tilanne on kyseessä. Harjoittele siten, että sekoitat kuution, ratkaiset sen CMLL:ään asti, pysähdyt, sanot huonosti suunnattujen reunapalojen määrän ja jatkat sitten.
- Monet eivät ymmärrä tämän vaiheen liikkeitä. EO-vaiheen lopullisena tavoitteena on luoda «nuolimuoto», jossa on 3 ylhäällä ja 1 alhaalla, koska täydellinen tila on vain yhden sekoituksen päässä nuolimuodosta. Käänteisen ajattelun mukaan tämä on viimeinen vaihe ennen ratkaisun valmistumista, joten riippumatta huonosti suunnattujen reunapalojen määrästä, tavoitteena on aina luoda nuolimuoto. Jos ylhäällä on 4 huonosti suunnattua reunaa, vaihda yksi ylä- ja alareunapari, jotta yksi huonosti suunnattu reuna siirtyy alas ja nuolimuoto syntyy. Jos ylhäällä on 2 ja alhaalla 2, vaihda yksi ylä- ja alareunapari, jotta yksi huonosti suunnattu reuna siirtyy ylös ja nuolimuoto syntyy. Jos ylhäällä on 1 ja alhaalla 1, tai ylhäällä 2, käytä M' U M -liikettä muuttaaksesi tilanteen ensin edellisiin tapauksiin ja sitten muodostaaksesi nuolen. Voit itse löytää parhaat askeleet 1/1-tilanteeseen tarkkailemalla ja miettimällä paljon.
- Harjoittele paljon ennakoimista (look-ahead). Tämä on tärkein ja epäintuitiivisin asia, kun haluat päästä 40 sekunnista 30 sekuntiin: käännä hitaammin, katso pidemmälle. Kun rakennat ensimmäistä lohkoa, älä katso palaa, jota olet juuri asettamassa, vaan katso, missä seuraava pala on. Alussa tämä tuntuu hyvin oudolta ja tulokset saattavat jopa huonontua, mutta viikon harjoittelun jälkeen ne paranevat yhtäkkiä.
- CMLL ilman epäröintiä. Jos joudut miettimään jokaista liikettä ennen kuin uskallat tehdä sen, se ei ole vielä sinun hallussasi. Harjoittele jokaista liikettä erikseen 50 kertaa, kunnes kätesi liikkuvat automaattisesti nähdessäsi muodon.

![Nuolimuoto](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Kuva: Nuolimuoto. Yläkerroksen kolme huonosti suunnattua reunapalaa (turkoosilla korostettuna) muodostavat nuolen, joka osoittaa alakerroksen huonosti suunnattuun reunapalaan. Tässä tilassa yksi M' U M -liike asettaa kaikki neljä palaa paikalleen samanaikaisesti. [Avaa tämä tila 3D-kuutiossa](/fi/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) nähdäksesi sen vaihe vaiheelta.*

![EO:n kuusi tilaa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Kuva: EO:n kuusi tilaa. Vasemmassa yläkulmassa olevat merkinnät osoittavat huonosti suunnattujen reunapalojen määrän (ylhäällä / alhaalla), keltainen on oikein suunnattu reuna, turkoosi kehys on huonosti suunnattu reuna. Vain nuolimuoto vaatii algoritmin; viisi muuta muutetaan ensin nuolimuodoksi.*

Vasemman ja oikeanpuoleisten reunapalojen ratkaisussa, jos keltainen on ylhäällä, valkoinen alhaalla ja ensimmäinen lohko on punainen, on seuraavaksi asetettava paikalleen kelta-punainen reunapala + kelta-oranssi reunapala (korostetut kohdat). Pääidea on saada kelta-punainen reunapala vaihtamalla ylä- ja alareunapaloja alakerrokseen, ja samoin kelta-oranssi reunapala alakerrokseen. Kun kaksi reunapalaa ovat alakerroksessa vastakkain, ylätasoa käännetään sopivaan kohtaan, ja M2 U tai M2 U' ratkaisevat U-kerroksen vasemman ja oikeanpuoleisen reunapalan.

Auttaakseni ymmärtämään paremmin olen koonnut kaikki kuusi EO-tilaa [Roux-metodin algoritmiarkiston LSE-sivulle](/fi/projects/rubiks-cube/roux#lse). Jokaisesta kuvasta klikkaamalla «Katso tarkemmin» aukeaa vastaava tila 3D-kuutiossa, ja huonosti suunnatut reunat korostetaan automaattisesti. Samalta sivulta löytyvät myös UL/UR-palojen asettelu ja kaikki viimeisten neljän reunapalan tilanteet.

Harjoittelumäärän lasku tässä vaiheessa ei ole huono asia. Tasaantumisvaihetta ei ohiteta määrää lisäämällä, vaan poistamalla yksi tietty huono tapa. Kokemukseni mukaan kannattaa keskittyä yhteen kerrallaan.

### Vaihe neljä: 30 sekuntia → 28 sekuntia (13. viikon jälkeen)

**Data**: 4. elokuuta jälkeen. Koko syyskuun aikana kirjattu harjoittelukertojen määrä oli 122, mutta todellisuudessa monia harjoituskertoja ei kirjattu. Olen sisällyttänyt kuution osaksi jokapäiväistä elämää: otan sen esiin pöydältä ja pelaan sillä, kun olen hyvällä tuulella, ahdistunut, työtauolla tai kyllästynyt. Ao100-tulokseni on vähitellen laskenut 29,9 sekunnista 28,2 sekuntiin.

**Mihin jumiudutaan**: Ei selkeää pullonkaulaa, vain puutteellinen harjoittelu.

**Mitä harjoitellaan**:

Jos keskimääräinen nopeutesi on edelleen yli 30 sekuntia, ainoa asia, mitä sinun tarvitsee tehdä, on jatkaa runsaasti harjoittelua, eikä opetella uusia algoritmeja ulkoa.

Jatkuvalla hitaalla harjoittelulla ja ennakoimisella nopeutat itseäsi entisestään.

Ota kuutio esiin ja pelaa sillä milloin tahansa. Pidä se käden ulottuvilla, esimerkiksi työpöydälläsi, jotta voit tarttua siihen työtaukojen aikana. Voit myös säännöllisesti nauhoittaa ratkaisuvideoitasi ja tarkistaa, missä vaiheessa kuluu eniten aikaa, ja optimoida sitä kohdennetusti. Tämä on tavoitteellista harjoittelua – kehityksesi nopeus ei riipu tavallisten harjoitusten kokonaismäärästä, vaan tavoitteellisten harjoitusten määrästä.

Sitten huomaat, että kun olet päässyt yli 30–35 sekunnin pullonkaulasta, nopeutesi on taas pudonnut pykälän.

Tässä vaiheessa onneksi olkoon, aloittelijoiden silmissä olet jo erittäin taitava pelaaja!

## Hinta siitä, ettei opettele algoritmeja ulkoa

Tässä vaiheessa on syytä olla rehellinen. Algoritmien ulkoa opettelun välttäminen ei ole ilmaista.

CMLL-vaihe on hidas. 42 tapauksen kattaminen 9 algoritmilla tarkoittaa, että joissakin tilanteissa joudut tekemään liikkeen kahdesti. Koko CMLL:n osaavat ovat tässä vaiheessa kaksi tai kolme sekuntia nopeampia kuin minä.

M-kerroksen tekniikka on haastava. Rouxin loppuvaihe perustuu kokonaan M-kerrokseen, ja M-kerrosta on vaikeampi kääntää kuin R- tai U-kerrosta, se jumittaa helpommin ja vaatii enemmän itse kuutiolta.

Älä murehdi ylärajasta. Huippupelaajien joukossa on niitä, jotka käyttävät Roux-metodia ja ovat päässeet maailman kärkeen; itse menetelmässä ei ole ylärajaa. Mutta jos haluat alle 15 sekunnin aikoihin, sinun on todennäköisesti opittava kaikki 42 CMLL-algoritmia. Se on kuitenkin eri vaiheen asia. Alle 30 sekunnin pääsemiseen sitä ei tarvita.

Lisäksi lähes kaikki maailmanluokan yhden käden (OH) ratkaisijat käyttävät Roux-metodia, koska se soveltuu todella hyvin myös yhden käden käyttöön.

**Virallisissa kilpailuissa (WCA) Rouxin nopeimmat tulokset:**

- Yksittäinen ratkaisu 4,11 sekuntia, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippiinit), 2023 Valenzuela Cubing Open, yleisesti tunnustettu nopein virallinen Roux-yksittäisratkaisu ([uudelleenluontivideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Keskiarvo 5,98 sekuntia, sama henkilö, 2019, tuolloin Aasian ennätys ja historian kolmas virallinen alle 6 sekunnin keskiarvo ([WCA-tiedot](https://www.worldcubeassociation.org/persons/2017VILL41))
- Hän on myös [yhden käden maailmanennätyksen haltija](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): keskiarvo 8,09, yksittäinen 6,05 (2024). Yhden käden ratkaisijoiden keskuudessa Roux-metodia pidetään yleisesti optimaalisena ratkaisuna.

Mielestäni tämä kauppa on erittäin kannattava. Käytät kaksi tai kolme sekuntia CMLL-vaiheeseen, mutta vastineeksi tiedät, mitä teet jokaisessa vaiheessa, et unohda sitä, vaikka et koskisi kuutioon kolmeen kuukauteen, ja pystyt keksimään ratkaisun mihin tahansa tuntemattomaan kuutioon.

## Yhteenveto

![Ratkaisu valmis](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Kuution ratkaisemisesta alle 30 sekuntiin pääseminen ei ole algoritmien ulkoa opettelua, vaan käsien, silmien ja aivojen koordinaation harjoittelua.

Neljä vaihetta, neljä asiaa: opi ensin katsomaan kuutiota pyörittämättä sitä, sitten rakentamaan toinen lohko rikkomatta ensimmäistä, sitten katsomaan seuraavaan vaiheeseen samalla kun tekee edellistä, ja lopuksi anna käsien seurata silmiä.

Algoritmit eivät ole nopeuden lähde. Havainnointi on.

Opi luomaan positiivista palautetta jokaisen osa-alueen edistymisestä. Jopa taitoharjoittelu voi olla vähemmän puuduttavaa, varsinkin kun yllätät itsesi rikkomalla ennätyksen taas kerran. Erityisesti alku- ja keskitasolla koet ennätysten rikkomisen tuomaa iloa päivittäin.

Kaikki artikkelissa mainitut algoritmit ja tilanteet on koottu [Roux-metodin algoritmiarkistoon](/fi/projects/rubiks-cube/roux). Voit palata sinne tarkistamaan, jos jumiudut.

Rubikin kuutioiden maailmassa on loputtomasti iloa. Pidä hauskaa!

## Liite 1: Harjoituslista vaiheittain

**Vaihe yksi (> 60 sekuntia)**

- Kiinteä havainnointiasento, älä pyöritä kuutiota ratkaisun aikana
- Löydä seuraava haluttu pala ilman pysähdyksiä
- Hidas ratkaisu, sano ääneen jokaisen askeleen tarkoitus
- Harjoittele vain ensimmäistä lohkoa, toista 50 kertaa

**Vaihe kaksi (60 → 40 sekuntia)**

- Toinen lohko vain R, r, M, U -siirroilla, älä koske ensimmäiseen lohkoon
- Kaksivaiheisen CMLL:n harjoittelua
- M' U M' U -rytmikkyyden harjoittelua, 5 minuuttia päivässä

**Vaihe kolme (40 → 30 sekuntia)**

- Pysähdy CMLL:n jälkeen ja sano heti huonosti suunnattujen reunapalojen määrä
- Hidas ratkaisu + ennakoiminen: silmät ovat aina seuraavassa palassa
- Vähintään 20 laadukasta ratkaisua päivässä

**Vaihe neljä (< 30 sekuntia)**

- Nauhoita videoita ja etsi pysähdyksiä
- Sormitekniikat: R U R' U' yhdellä sormella, M-kerros nimettömällä sormella
- 20 laadukasta ratkaisua päivässä, älä kasaa määrää

## Liite 2: Työkalut

- **csTimer**: [cstimer.net](https://cstimer.net/). Ota käyttöön Ao5 / Ao12 / Ao100 -tilastot. Ao100 on todellinen tasosi, yksittäiset ajat ovat tuurista kiinni.
- **3D-kuutio**: [philoli.com/zh/projects/rubiks-cube](/fi/projects/rubiks-cube/). Kaikki tämän artikkelin algoritmit voi syöttää tähän ja katsoa animaatiota.
- **Roux-metodin aloittelijaystävällinen algoritmiarkisto**: [philoli.com/zh/projects/rubiks-cube/roux](/fi/projects/rubiks-cube/roux). Sisältää ensimmäisen ja toisen lohkon yleisimmät asettelut, kaksivaiheisen CMLL:n 9 algoritmia ja kaikki LSE-tilanteet (EO, UL/UR, viimeiset neljä reunaa). Jokainen tila voidaan avata 3D-kuutiossa, jolloin epäolennaiset palat piilotetaan ja liikuteltavat reunat korostetaan automaattisesti.
- **csTimer-harjoitusanalysaattori**: [philoli.com/zh/projects/rubiks-cube/analyzer](/fi/projects/rubiks-cube/analyzer). Vedä csTimeristä viety tiedosto tähän, niin näet omat tuloskehityksesi, Ao5/Ao12/Ao100-käyräsi, PB-ennätysten kehityksen, merkkipaalulistan (milloin saavutit ensimmäisen kerran alle 60, alle 40, alle 30 sekuntia) ja Power Law -harjoittelukäyrän. Kaikki tämän artikkelin kuvat ovat peräisin täältä. Data käsitellään vain selaimessasi, eikä sitä ladata palvelimelle. Jos sinulla ei ole vientitiedostoa, voit ladata ensin omat 4441 ratkaisuni ja katsoa, miten se toimii.

*Tämä artikkeli sisältää Amazonin affiliate-linkkejä: Jos ostat linkkien kautta, saan pienen provision, mutta hinta sinulle pysyy samana.*

## Lisää luettavaa

- [Miten ratkaista Rubikin kuutio ilman algoritmien ulkoa opettelua: Selkeä opas kaikille](/fi/blog/solve-rubiks-cube-without-formulas)
