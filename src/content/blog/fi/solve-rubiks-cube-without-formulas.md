---
layout: blog
title: "Kuinka ratkaista Rubikin kuutio ilman kaavoja: Jopa alakoululaiset ymmärtävät"
date: 2026-05-09 12:00:00
tags:
  - Rubikin kuutio
  - opas
  - ryhmäteoria
  - matematiikka
  - Roux-menetelmä
categories: 日常折腾
description: Opi ratkaisemaan 3x3 Rubikin kuutio askel askeleelta, ilman ulkoa opeteltavia kaavoja, hyödyntäen ryhmäteorian kommutaattoreita ja Roux-menetelmän silta-ajattelua.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Täysin ratkaistu Rubikin kuutio" />
</figure>

Ehkä olet Rubikin kuution (Rubik's Cube) aloittelija, etkä ole koskaan ratkaissut sitä kokonaan.

Markkinoilla olevat niin kutsutut ohjeet vain kertovat sinulle kummallisia kaavoja ja sanovat, että kun teet ensin näin ja sitten noin, kuutio palautuu alkuperäiseen tilaansa. Mutta et silti ymmärrä, miksi näin tapahtuu.

Tästä artikkelista tulee pelastuksesi. Opit ratkaisemaan Rubikin kuution alusta alkaen ilman ainuttakaan kaavaa. Pääset tutustumaan kuution syntyyn ja ymmärrät, miten se toimii. Vien sinut teoriasta käytäntöön, askel askeleelta täydellisen kuution ratkaisuun, ja opetan sinua havainnoimaan.

Ehkä tämä on ensimmäinen kerta, kun onnistut itse ratkaisemaan kokonaisen Rubikin kuution.

<!--more-->

## Rubikin kuution synty

Mistä Rubikin kuution viehätysvoima oikein johtuu? Aloitetaanpa keskustelemalla siitä, miten se syntyi.

Vuonna 1974 unkarilainen arkkitehtuurin professori Ernő Rubik halusi demonstroida opiskelijoilleen, miten osat voivat liikkua itsenäisesti rikkomatta kokonaisuutta. Hän rakensi ensimmäisen prototyypin puusta, maalasi kuusi sivua eri väreillä, ja niin Rubikin kuutio syntyi.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Ernő Rubikin kuutioprototyyppi" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubikin muotokuva" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Hämmästyttävä yhdistelmien määrä

3x3 Rubikin kuutiossa on 8 kulmapalaa, 12 reunapalaa ja 6 keskipalaa, eli yhteensä 26 näkyvää palaa. Todellisuudessa liikkuvia paloja on kuitenkin 20 – kaikki paitsi kuuden sivun keskipalat.

Kuinka monta tilaa sillä sitten on? **4,3 × 10¹⁹**.

Mitä tämä tarkoittaa? Tämä lukema on suurempi kuin maapallon hiekkajyvien määrä. Jos yrittäisit miljardia tilaa sekunnissa, kaikkien tilojen läpikäymiseen kuluisi yli **1300 vuotta**. Jos jokainen tila kirjoitettaisiin paperille ja pinottaisiin päällekkäin, pinon paksuus vastaisi matkaa maasta aurinkoon ja takaisin 14 000 kertaa.

Pieni 3x3 Rubikin kuutio on todellakin paljon enemmän kuin miltä se näyttää. Sen uudenlainen ja hauska pelattavuus, loputtomat muunnelmat ja rajaton viehätysvoima räjäyttivät markkinat sen julkaisun jälkeen, houkutellen kaikenlaisia pelaajia ja harrastajia kokeilemaan sitä innokkaasti. Pian kehittyi kuutiokilpailuja, erilaisia pelitapoja (nopeusratkaisu Speedsolving, sokkoratkaisu Blindfolded, yhdellä kädellä One-Handed, jaloilla With Feet), erilaisia ratkaisumenetelmiä (kerros kerrokselta Layer by Layer, kulma edellä Corners First, CFOP, Roux-silta, Petrus, ZZ) ja jopa erikoiskuutioita (2x2:sta 7x7:ään, Pyraminx, Skewb, Megaminx), jotka ilmestyivät jatkuvasti.

![Erikoiskuutioiden muunnelmia](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Rubikin kuution viehätysvoima on niin suuri, että matemaatikot ovat tutkineet sen matematiikkaa vuosikymmeniä etsien "Jumalan lukua". Astronautit ovat vieneet niitä avaruuteen, ja kaikenikäiset ihmiset ovat loistaneet erilaisissa kilpailuissa. Mutta kuution valtavaan viehätysvoimaan nähden sen pelaajia on edelleen suhteellisen vähän. Tämän artikkelin tavoitteena onkin opettaa sinua ratkaisemaan kuutio, jotta pääset nauttimaan tämän älypelin tuomasta ilosta.

## Kaavojen pulma

Suurin osa markkinoilla olevista ratkaisumenetelmistä vaatii pelaajaa muistamaan paljon kaavoja, mikä lannistaa aloittelijoita pahasti. He eivät ehdi kokea kuution ratkaisun iloa, ennen kuin kaavat estävät heitä etenemästä. Tunnetussa CFOP-menetelmässä on yli 100 kaavaa, ja aloittelijankin täytyy opetella niistä kymmeniä.

Siksi haluan tänään jakaa kanssanne menetelmän, jolla Rubikin kuutiolla voi leikkiä ilman kaavojen ulkoa opettelua. Sen avulla voit palauttaa kuution alkuperäiseen tilaansa vain havainnoimalla ja ymmärtämällä.

## Matemaattinen superase: Ryhmäteoria (Group Theory)

Kysymys: Miten Rubikin kuutio ratkaistaan ilman yhtäkään kaavaa?

Tässä kohtaa otamme käyttöön matemaattisen superaseen: ryhmäteorian. Ei ole ongelmaa, jota ei voisi ratkaista matematiikan avulla.

Mitä tekemistä Rubikin kuutiolla ja ryhmäteorialla on keskenään? Rubikin kuutio on itse asiassa ryhmä. Kuutiossa jokainen käännös on permutaatio-operaatio. Tällä operaatiolla on muutama ominaisuus: se voidaan yhdistää, se voidaan kumota, mutta se ei ole kommutatiivinen.

Ala-asteella opimme kertolaskun, joka on kommutatiivinen operaatio; A × B ja B × A antavat täsmälleen saman tuloksen. Mutta Rubikin kuution ryhmässä A ja B eivät ole ekvivalentteja, jos niiden järjestystä vaihdetaan: ensin R ja sitten U on täysin eri operaatio kuin ensin U ja sitten R. Joten kun ymmärrämme ryhmän, ymmärrämme Rubikin kuution. Ja Rubikin kuutiolla leikkiminen auttaa meitä ymmärtämään ryhmiä.

Onneksi olkoon, olet juuri oppinut eron Abelin ryhmien (kertolasku ja yhteenlasku ovat Abelin ryhmiä) ja ei-Abelin ryhmien (Rubikin kuution ryhmä) välillä.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U ja U R eri järjestyksessä antavat eri tuloksen - Osa yksi" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U ja U R eri järjestyksessä antavat eri tuloksen - Osa kaksi" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Lisäys: Rubikin kuution standardiliikkeitä merkitään yleensä kirjaimilla. R tarkoittaa oikean kerroksen 90 asteen myötäpäivään kiertoa, U tarkoittaa yläkerroksen 90 asteen myötäpäivään kiertoa. R' on 90 asteen vastapäivään kierto, M' on keskikerroksen ylöspäin ja M keskikerroksen alaspäin.)

Voit suoraan tarkastella ja oppia Rubikin kuution liikkeitä liitteen online-animaatiosta.

## Teoria: Kaavojen ulkoa opettelemisen ydin: kommutaattori (Commutator)

Jotta voisimme ratkaista Rubikin kuution, meidän on saatava aikaan tila, jossa **muut palat eivät muuta paikkaansa, mutta tietyt palat siirtyvät uuteen asentoon.**

Matematiikassa tätä operaatiota kutsutaan kommutaattoriksi, ja se kirjoitetaan **A B A⁻¹ B⁻¹**.

A⁻¹ on A:n käänteisoperaatio.

Voimme käyttää hyvin arkipäiväistä vertausta – hissiä. Oletetaan, että haluat kuljettaa henkilön 1. kerroksesta 3. kerrokseen:

1.  **A**: Henkilö astuu hissiin
2.  **B**: Hissi nousee 3. kerrokseen
3.  **A⁻¹**: Henkilö astuu ulos hissistä
4.  **B⁻¹**: Hissi palaa 1. kerrokseen

Tulos: Hissi palasi alkuperäiseen paikkaansa, mutta henkilö siirtyi 1. kerroksesta 3. kerrokseen. Avainkohta on, että kun hissi palasi, henkilö ei enää ollut sen sisällä – joten ympäristö palautui, mutta kohde vaihtoi paikkaa.

Rubikin kuutiossa esimerkiksi R ja R⁻¹ tarkoittavat oikean kerroksen 90 asteen myötäpäivään kiertoa, ja kolmannessa vaiheessa se käännetään takaisin 90 astetta vastapäivään.

A⁻¹ B⁻¹ -käänteisoperaatio voi palauttaa edellisen A B -operaation sekoittaman ympäristön, jolloin saavutetaan se, että vain tietyt palat vaihtavat paikkaa vaikuttamatta ympäristöön.

Miksi se ei sitten ole A A⁻¹ B B⁻¹? Koska silloin jokainen liike kumoaisi edellisen, ja palat eivät vaihtaisi paikkaa. Kun teet operaation A ja heti perään käänteisoperaation A⁻¹, se on sama kuin et olisi tehnyt mitään (kuten yläkerroksen kääntäminen 90 astetta vastapäivään ja heti perään 90 astetta myötäpäivään). Siksi on oltava **A B A⁻¹ B⁻¹** vaihdon aikaansaamiseksi.

Tämä on perusvaihto, ja Rubikin kuutiossa kätevin perusliike vastaa: **R U R' U'**

![R U R' U' -demonstraatio](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Sen voi yhdistää pitkiksi sarjoiksi ja saada aikaan erilaisia permutaatioita, kuten esimerkiksi tämä: (R U R' U') (R U R' U') (R U R')

Tämä on itse asiassa kaavojen lähde. Miksi kaavoja on olemassa? Ne ovat sarjoja peruspermutaatio-operaatioita, jotka on yhdistetty sekvensseiksi. Noudattamalla sekvenssejä voidaan nopeasti saavuttaa tiettyjä tuloksia, kuten palauttaa tietty reuna tai kulmapala. Eri sekvenssejä voidaan yhdistellä, ja ne ohjaavat meidät lopulta Rubikin kuution ratkaisuun.

Kun ymmärrämme periaatteen, voimme jopa luoda omia kaavojamme. (Miten luoda omia Rubikin kuution kaavoja, käsitellään tarkemmin seuraavassa osassa.)

Joten jos haluamme ratkaista Rubikin kuution ulkoa opettelematta yhtäkään kaavaa, meidän tarvitsee vain oppia perusvaihtojen idea, ja voimme soveltaa sitä kaikkiin tilanteisiin. Kaikkein perustavanlaatuisin vaihtoliike vaihtaa kolmen kulmapalan tai kolmen reunapalan paikkaa.

## Kuinka suorittaa vaihtoja Rubikin kuutiossa

Kuten aiemmin mainittiin, Rubikin kuutiossa kätevin perustason vaihtoliike on **R U R' U'**. Jos ymmärrät tämän liikkeen syvällisesti, pystyt heti ratkaisemaan kuution kaksi ensimmäistä kerrosta.

Tämä liike tarkoittaa itse asiassa: siirrä pois (oikea kerros), aseta (kohdepala) sisään, palauta (oikea kerros) paikalleen, palauta (yläkerros) paikalleen.

Näin olemme saaneet vasemman etukulmapalan ja keskireunapalan asettumaan oikeaan alakulmaan.

Tätä liikettä voi muunnella jatkuvasti, muuttamalla sen esimerkiksi muotoon **U R U' R'** tai **F R F' R'**, ja niin edelleen mihin tahansa asentoon. On olemassa myös keskikerroksen liikkeitä, kuten **M U M' U'**, tai vaikkapa **U2 R U2 R'**.

![Perusvaihtoliikkeen esittely](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Alkuvaiheessa Rubikin kuutio on kaikkein sekaisin, joten paljon yllä olevia perusvaihtoja voidaan käyttää ensin yhden sivun tai muiden osien ratkaisemiseen, jotta sekasotku vähenisi.

Ja koska tila on hyvin sekaisin, **R U R' U'** -liikkeen viimeinen ympäristöä palauttava U' -liike voidaan jopa jättää väliin tilanteesta riippuen, ja siirtyä suoraan seuraavaan liikkeeseen. Tämä yksinkertaistuu muotoon: siirrä pois, aseta sisään, palauta paikalleen.

Siirrä pois, aseta sisään, palauta paikalleen.

Tämä on ydinliike, onneksi olkoon, olet ymmärtänyt miten Rubikin kuutiota pelataan!

Myöhemmin tarvitsemme kuitenkin pidempiä vaihtovaiheita, jotta emme täysin rikkoisi nykyistä ratkaistua tilaa ja voisimme silti vaihtaa tiettyjä paloja.

Otetaan esimerkiksi **R U' L' U R' U' L U**. Tämä liike vaihtaa vain kolmen kulmapalan paikkaa vaikuttamatta muihin. Puretaan se kommutaattorilogiikaksi:

```
A   = R U'   (Siirrä kulmapala ulos)
B   = L'     (Siirrä vasenta kerrosta)
A⁻¹ = U R'   (Palauta A-operaatio)
B⁻¹ = U' L U(Palauta B-operaatio, säädöllä)
```

Vaikutus: Vasemman alakulman kulmapala pysyy paikallaan, ja kolme muuta kulmapalaa vaihtavat paikkaa.

Nämä ovat luultavasti ainoat kaksi kaavaa, jotka sinun tarvitsee ymmärtää tässä artikkelissa. Opimme niiden käytön käytännön osassa ja ymmärrämme ne toiminnassa, ilman ulkoa opettelua.

## Käytäntö: Ratkaisu alusta alkaen

Nyt on vihdoin aika tämän artikkelin kohokohtaan. Ohjaan sinut askel askeleelta, pelkästään havainnoinnin ja ymmärryksen avulla, ratkaisemaan Rubikin kuution täysin alusta alkaen.

Tarvittavat valmistelut:

-   Rubikin kuutio
-   Ja hieman kärsivällisyyttä (koska keskitymme havainnointiin ja ymmärtämiseen)

Oletetaan ensin, että sinulla on jo Rubikin kuutio. Sekoitamme sen kansainvälisen standardin mukaisesti ( **F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'** ). Seuraavaksi ratkaisemme tämän kuution yhdessä.

Tai voit pelata suoraan verkkoversiossa; tämä linkki avaa sekoitetun kuution: [3D Rubikin kuutio — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Sekoitetun Rubikin kuution alkutila](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Voimme hyödyntää erittäin eleganttia Roux-silta-ratkaisumenetelmää. Silta-ratkaisumenetelmä eroaa kerros kerrokselta -ratkaisusta siten, että siinä ratkaistaan ensin vasemman ja oikean puolen 1x2x3 palat, joita kutsutaan vasemmaksi ja oikeaksi sillaksi, ja vasta sitten yläkerros ja loput palat.

Silta-menetelmä on erittäin vapaa ja joustava, ja sen vaiheita on vähemmän kuin monissa tunnetuissa menetelmissä. Muistettavia kaavojakin on suhteellisen vähän, koska se perustuu pääasiassa kommutaattorilogiikkaan. Tämän viitekehyksen puitteissa voimme oppia ratkaisemaan Rubikin kuution ulkoa opettelematta yhtäkään kaavaa.

![Roux-ratkaisumenetelmän vuokaavio](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Ensimmäinen vaihe: Kiinnitä tarkkailuasento

Silta-ratkaisumenetelmän tarkkailuasento on kiinteä. Ratkaisuprosessin aikana meidän ei tarvitse jatkuvasti pyörittää kuutiota, vaan voimme pysyä samassa kulmassa ajatellen ja ratkaisten. Tämän kiinteän pinnan avulla voimme helposti nähdä kulma- ja reunapaloja ja tietää, mihin niiden pitäisi mennä.

Voimme käyttää tätä kulmaa vertailukohtana:

-   Edessä (sinua kohti): vihreä sivu
-   Vasen puoli: punainen
-   Oikea puoli: oranssi
-   Yläkerros: keltainen
-   Alakerros: valkoinen
-   Takapuoli: sininen

### Toinen vaihe: Rakennetaan sillat (vasen ja oikea)

**Vasen silta – rakennusjärjestys:**

1.  Aseta ensin valko-punainen reunapala paikalleen (vasen alakulman tukipylväs).
2.  Aseta sitten takana oleva sini-punainen reunapala paikalleen.
3.  Aseta lopuksi etummaiset kaksi punaista kulmapalaa paikalleen.

Vasen silta valmiina – kaaviokuva:

![Vasen silta valmiina](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Tämä prosessi ei vaadi kaavoja, ainoastaan havainnointia ja ymmärrystä. Harjoittelemalla se sujuu yhä paremmin.

**F' L**: Etsi puna-valkoinen reunapala havainnoimalla ja aseta se paikalleen niin, että valkoinen on alaspäin ja punainen vasemmalle.

![Valko-punaisen reunapalan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Aseta sini-punainen reunapala ja kulmapala paikalleen.

![Sini-punaisen reunapalan ja kulmapalan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Etsi vasemman sillan kaksi viimeistä palaa ja yritä asettaa ne paikalleen, jolloin saamme täydellisen vasemman sillan valmiiksi.

![Vasemman sillan kahden viimeisen palan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Oikea silta tehdään samalla periaatteella**, korvataan punainen oranssilla ja toistetaan yllä mainitut vaiheet. Tässä on kuitenkin tärkeää olla sekoittamatta jo valmista vasenta siltaa. Jos tarvitset tilaa, voit siirtää vasenta siltaa hetkeksi syrjään, jotta oikeanpuoleiset toiminnot eivät vaikuta siihen, ja palauttaa vasemman sillan paikalleen, kun oikean puolen liikkeet on suoritettu.

**Oikean sillan keskiosa**: U' M U' R2

![Oikean sillan keskireunan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Oikean sillan ensimmäinen pala**: U' M' U2 R' U R

![Oikean sillan ensimmäisen palan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Olemme saaneet valmiiksi oikean sillan viimeisen palan ja haluamme asettaa sen paikalleen. Siksi siirrämme ensin vasenta siltaa (F') vapauttaaksemme tilaa, sitten siirrämme palaa (U), ja lopuksi palautamme sekä vasemman että oikean sillan paikalleen.

![Oikean sillan viimeisen palan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Tässä on tila, jossa molemmat sillat ovat valmiina. Riittää, että sillat ovat muodostuneet; muihin väripaloihin ei tarvitse vielä kiinnittää huomiota.

![Molempien siltojen valmis tila](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Kolmas vaihe: Yläkerroksen kulmapalojen ratkaiseminen

Kun olet ratkaissut molemmat sillat, alamme ratkaista loput neljä kulmapalaa. Tässä tarvitsemme kulmapalojen kolmipyöräytystä, jolla kolme kulmaa vaihtavat paikkaa, siirtyen A:sta B:hen, B:stä C:hen ja C:stä takaisin A:han.

![Kulmapalojen kolmipyöräytyksen kaavio: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Kulmapalojen kolmipyöräytys

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Kaava 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Vasemman alakulman kulmapala pysyy paikallaan</li>
      <li>Muut kolme kulmapalaa vaihtavat paikkaa <strong>vastapäivään</strong></li>
      <li>Mutta niiden sisäiset värit pyörivät <strong>myötäpäivään</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Kaava 2 (peilikuvaversio)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Oikean alakulman kulmapala pysyy paikallaan</li>
      <li>Muut kolme kulmapalaa vaihtavat paikkaa <strong>myötäpäivään</strong></li>
      <li>Mutta niiden sisäiset värit pyörivät <strong>vastapäivään</strong></li>
    </ul>
  </div>
</div>

![Kulmapalojen kolmipyöräytyksen peilikuvaversion esittely](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Voit kohdata kulmapalojen asentoja vain neljässä kategoriassa: 0, 1, 2 tai 4 oikein orientoitua kulmaa.

-   **4 oikein orientoitua kulmaa**: Valmis tila
-   **1 oikein orientoitu kulma** (pikkukala-muoto): Suorita vielä kerran kolmipyöräytys tai sen peilikuvaversio, niin saat valmiiksi.
-   **0 / 2 oikein orientoitua kulmaa**: Aseta ensin yksi väärin orientoitu kulma paikkaan, johon kolmipyöräytys ei vaikuta (vasen alakulma), tee yksi kolmipyöräytys, jolloin tulee 1 oikein orientoitu kulma, ja palaa edelliseen tilanteeseen.

Joskus perusversio kolmipyöräytyksestä on tehtävä kaksi kertaa ratkaisemiseksi, kun taas peilikuvaversio riittää yhden kerran. Aloittelijan kannattaa ensin hallita perusversio, keskittyen havainnointiin ja ymmärtämiseen, jolloin kaikki loksahtaa kohdalleen. Tämä yksi keltainen ylöspäin oleva kolmipyöräytys on myös tunnettu klassinen kaava – vasemman ja oikean pikkukalan kaava – joten voit tarttua pikkukalan muotoon.

Tätäkään kaavaa ei tarvitse opetella ulkoa. Tarkkaile, miten kaksi vihreää palaa liikkuvat, ja tee se itse muutaman kerran, niin opit sen. Ydin on yläkerroksen kolmen kulmapalan vaihtaminen.

Kun olemme saaneet vasemmat ja oikeat sillat valmiiksi, huomaamme, että yläosassa on kaksi keltaista palaa. Siirrämme vasemman alakulman sellaiseksi, joka ei ole keltainen, ja suoritamme yhden kulmapalan kolmipyöräytysoperaation. Sen jälkeen teemme vielä kaksi kolmipyöräytystä, tai yhden peilikuvaversion, jolloin yläkerroksen kaikki neljä kulmapalaa ovat keltaiset ylöspäin.

![Kulmapalojen kolmipyöräytyksen prosessin esittely](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Neljä keltaista kulmapalaa valmiina!

![Neljän keltaisen kulmapalan valmis tila](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Asennon säätö (sivuvärien kohdistaminen)

Kun kaikki neljä kulmapalaa ovat keltaiset ylöspäin, on vielä varmistettava, että kulmapalojen sivuvärit ovat kohdallaan, jotta kulmapalat asettuvat täysin oikein.

Tässä käytetään **J-perm -variaatiota**: **R U2 R' U' R U2 L' U R' U' L**

Tämän kaavan logiikan voi jakaa "parien siirtoon + loogiseen vaihtoon":

-   Alkupuoli `R U2 R' U' R`: Siirtää parin turvaan väliaikaisesti, vapauttaen tilaa.
-   Loppupuoli `U2 L' U R' U' L`: Hyödyntää kolmipyöräytyslogiikkaa kahden kulmapalan tarkan vaihtamisen toteuttamiseksi.

**Vaikutus**: Oikeanpuoleiset kaksi kulmapalaa vaihtavat paikkaa, samalla kun ne pysyvät keltaisina ylöspäin, ja muut kulmapalat pysyvät ennallaan.

Tämä vastaa mahdollisuutta vaihtaa mitä tahansa kahta vierekkäistä kulmapalaa (U-liikkeellä säädetään, mitkä kaksi kulmapalaa ovat oikealla). Toistamalla vaihtoa muutaman kerran kaikki neljä kulmapalaa kohdistuvat ja asettuvat täysin paikalleen.

![J-perm-demonstraatio](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Tätäkään kaavaa ei tarvitse opetella ulkoa. Tarkkaile, miten kaksi vihreää palaa liikkuvat, ja tee se itse muutaman kerran, niin opit sen. Ydin on yläkerroksen oikeanpuoleisten kahden kulmapalan vaihtaminen samalla kun keltainen puoli pysyy ylöspäin.

### Neljäs vaihe: Viimeisten kuuden reunapalan ratkaiseminen (LSE, Last Six Edges)

Tässä vaiheessa kohdista ensin keskipalat niin, että keltainen on ylhäällä ja valkoinen alhaalla, ja säädä sitten reunapalat.

Jäljellä on enää 6 reunapalaa. Tässä vaiheessa käytetään vain **M**- ja **U**-liikkeitä, mikä on hyvin intuitiivista.

#### 4a: Suunnan säätö (EO, Edge Orientation)

**Miten tunnistaa**: Katso, onko reunapalan valkoinen / keltainen tarra ylöspäin vai alaspäin.

-   Ylöspäin / alaspäin = Oikein ✓
-   Sivulle = Väärin ✗

**Miten säätää**: Käännä väärin orientoitua reunapalaa käyttämällä **M U M'** tai **M' U M**.

![M U M' -liikkeen esittely väärin orientoitujen reunapalojen kääntämiseen](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitiivinen ymmärrys: M tuo keskikerroksen reunapalan ylös, U säätää asentoa, ja M' kääntää sen takaisin.

Toista muutaman kerran, kunnes kaikkien reunapalojen valkoinen/keltainen puoli on ylöspäin tai alaspäin.

Voimme kutsua oikein orientoituja reunapaloja "hyviksi reunoiksi" ja väärin orientoituja "huonoiksi reunoiksi".

Kuten kuvassa näkyvät korostetut yläkerroksen kolme palaa ovat huonoja reunoja, koska ne eivät ole keltaisia eivätkä valkoisia.

![Huonojen reunojen korostus](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Säätötekniikka**: Voit kohdata huonojen reunapalojen tilanteita vain neljässä kategoriassa:

-   **0 huonoa reunaa**: Valmis tila
-   **Ei 0 eikä 4 huonoa reunaa**: Muuta huonojen reunojen määrää käyttämällä **M' U M**, lisäämällä ne neljään huonoon reunaan.
-   **4 huonoa reunaa (2 ylhäällä, 2 alhaalla)**: Vaihda ylä- ja alareunat käyttämällä **M' U2 M**, jolloin tilanne muuttuu ylhäällä 3 ja alhaalla 1.
-   **4 huonoa reunaa (3 ylhäällä, 1 alhaalla)**: Yläkerroksen kolme huonoa reunaa muodostavat nuolen. Käännä yläkerrosta niin, että nuoli osoittaa alakerroksen huonoa reunaa kohti, ja suorita kerran **M' U M**. Kaikki neljä huonoa reunaa kumoavat toisensa ja muuttuvat hyviksi reunoiksi.

![Neljän huonon reunan nuolen poistamisen esittely](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Jos nuolta ei ilmesty, kokeile toistuvasti **M' U M** -liikettä, niin saat sen kyllä luotua. Edistyneempänä voit alkaa etsiä säännönmukaisuuksia.

#### 4b: Vasemman ja oikean reunan ratkaiseminen (punainen ja oranssi)

Etsi puna-keltainen ja oranssi-keltainen reunapala (tavoitteena on saada ne takaisin sivuilla oleviin reunapaloihin) ja siirrä ne oikeaan paikkaan reunapalojen kolmipyöräytyksellä.

**Vinkki**:

1.  Siirrä puna-keltainen (tai oranssi-keltainen) keskikerroksen yläpuolelle ja upota se pohjaan vaihtamalla ylä- ja alareunat (**M' U2 M**).
2.  Siirrä toinen oranssi-keltainen (tai puna-keltainen) vastakkaiselle puolelle upoksiin.
3.  Käännä yläkerrosta niin, että punainen reuna ilmestyy upotetun puna-keltaisen reunapalan vastakkaiselle puolelle.
4.  Käännä keskikerrosta puoli kierrosta (**M2**), ja yläkerrosta tarkkaile paikalleen (**U**).

![Vasemman ja oikean reunan asettaminen paikalleen](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Viimeisten neljän reunapalan ratkaiseminen (sininen ja vihreä)

**Vinkkejä**:

-   Käytä jatkuvasti **reunapalojen kolmipyöräytystä** ylä- ja alareunojen vaihtamiseen: **M' U2 M**. Viimeinen vaihe säädetään paikalleen havainnoimalla **U2**.
-   Nopea tekniikka: Aseta valko-vihreä (tai valko-sininen) reunapala kohdepaikan yläpuolelle, vaihda ylä- ja alareunat, niin valko-vihreä (valko-sininen) asettuu paikalleen.

Vain kolme tilannetta:

-   Jo oikein → Valmis!
-   Tarvitsee M2 → Tee yksi **M2**
-   Tarvitsee vaihtaa → **M' U2 M U2** tai **M U2 M' U2**

Voimme myös yksinkertaistaa kolmipyöräytyksen logiikkaa: M' tarkoittaa keskikerroksen nostamista ylös, U2 yläkerroksen kääntämistä puoli kierrosta, M keskikerroksen palauttamista ja U2 yläkerroksen palauttamista.

![Kolmipyöräytyksen esittely](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Valmis!

![Ratkaistu Rubikin kuutio](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Yhteenveto

Ei tarvitse opetella kaavoja ulkoa, vain "avaa-suorita-sulje" -kommutaattorilogiikka. Huomaat, että tämä prosessi on paljon hauskempi kuin kaavojen ulkoa opettelu, eikä sinun tarvitse vuosienkaan päästä huolehtia niiden unohtamisesta – voit aina johtaa ne itse uudelleen.

Samaa ajattelutapaa voi käyttää minkä tahansa Rubikin kuution ratkaisemiseen, mukaan lukien monenlaiset erikoiskuutiot.

Mutta jos haluat lähteä nopeusratkaisun tielle, edessä on loputtoman harjoittelun polku. Aloittelijalle 90 sekunnin alituksen saavuttaminen pienen harjoittelun jälkeen ei kuitenkaan pitäisi olla ongelma.

Ratkaisumenetelmiä on tuhansia, ja on sinusta kiinni, löydätkö tyylikkäämmän tai kätevämmän tavan.

Rubikin kuution maailman ilot ovat rajattomat, toivotan sinulle hauskoja hetkiä sen parissa.

## Liite 1: Tämän Rubikin kuution ratkaisumenetelmän pikaopas (Kuution ratkaisun ydin)

1.  **Rakennetaan sillat (vasen ja oikea): Havainnoinnin ja intuition avulla**
    -   Vinkki: Kun olet erittäin taitava havainnoinnissa ja ennakoinnissa, voit kuution tilasta riippuen priorisoida muiden moduulien rakentamisen tai rakentaa molemmat sillat samanaikaisesti. Tämä voi johtaa pienempään vaiheiden määrään ja antaa paljon vapautta.
2.  **Palauta yläkerroksen neljän kulmapalan yläsuunta: neljä keltaista ylöspäin**
    -   Yläkerroksen kulmapalojen kolmipyöräytys: **R U' L' U R' U' L U** (vasemman alakulman kulmapala pysyy paikallaan, kolmen muun kulmapalan sisäiset värit pyörivät myötäpäivään)
    -   Yläkerroksen kulmapalojen kolmipyöräytyksen peilikuvaversio: **L' U R U' L U R' U'** (oikean alakulman kulmapala pysyy paikallaan, kolmen muun kulmapalan sisäiset värit pyörivät vastapäivään)
3.  **Palauta yläkerroksen neljän kulmapalan sivut**
    -   **Yläkerroksen kulmapalojen hienosäätö**: **R U2 R' U' R U2 L' U R' U' L** (pitää neljä kulmapalaa keltaisina ylöspäin, vaihtaa oikeanpuoleisten kahden kulmapalan paikkaa)
4.  **Muuta reunapalojen suuntaa niin, että valkoinen tai keltainen on ylhäällä tai alhaalla**
    -   Kohdista ensin keskipalat niin, että keltainen on ylhäällä ja valkoinen alhaalla, ja säädä sitten reunapalat.
    -   Muuta huonojen reunojen määrää **M' U M** -liikkeellä, muodosta nuoli, osoita nuolella huonoa reunaa kohti ja tee kerran **M' U M**, jolloin kaikki neljä huonoa reunaa kumoavat toisensa ja asettuvat paikalleen.
5.  **Palauta vasemman ja oikean sivun reunapalat** (punainen ja oranssi)
    -   Siirrä ensin puna-keltainen (tai oranssi-keltainen) pohjaan vaihtamalla ylä- ja alareunat (**M' U2 M**).
6.  **Palauta loput reunapalat** (sininen ja vihreä)
    -   Käytä jatkuvasti **reunapalojen kolmipyöräytystä** ylä- ja alareunojen vaihtamiseen: **M' U2 M**. Viimeinen vaihe säädetään paikalleen havainnoimalla **U2**.

Näitä kaavoja ei tarvitse opetella ulkoa, ne on liitetty liitteeksi vain tiedonhaun helpottamiseksi. Tosiasiassa, kun kokeilet itse, tarkkailet ja ymmärrät, miten palikat liikkuvat, muutaman kerran jälkeen ne tulevat tutuiksi. Ydin on ylätason kolmen kulmapalan vaihtaminen.

## Liite 2: Hyödyllisiä verkkosivustoja ja työkaluja

Olen myös luonut teille online-3D-Rubikin kuution, jota voi vapaasti pyöritellä ja sekoittaa sekä ratkaista kiinteiden kaavojen mukaisesti. Jokaisessa vaiheessa on kauniit animaatiot!

[3D Rubikin kuutio — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D Rubikin kuution työkalu](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Tämän oppaan mukainen sekoituskaava: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Tämän oppaan vasemman ja oikean sillan ratkaisuvaiheet: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Tämä linkki avaa sekoitetun kuution: [3D Rubikin kuutio — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Maailmanmestaritkin käyttävät tätä Rubikin kuution ajastinta: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
