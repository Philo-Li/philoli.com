---
layout: blog
title: "Ohjelmistokehittäjänä en enää kirjoita riviäkään koodia itse – ajatuksia vibe-koodauksesta"
date: 2026-10-12 12:00:00
tags:
  - Tekoäly
  - Vibe-koodaus
  - Ohjelmointi
  - Ohjelmistokehitys
  - Pohdintoja
categories: Arkipäivän jutut
description: "Olen työskennellyt ohjelmistokehittäjänä yli kuusi vuotta, enkä nykyään kirjoita projekteissani riviäkään koodia itse. Pohdintoja vibe-koodauksen hurmiosta ja rajoista, junioripaikkojen katoamisesta sekä koodarin tulevaisuudesta."
cover: /uploads/images/every-line-of-my-code-is-written-by-ai/cover.webp
---

<figure class="post-cover">
  <img src="/uploads/images/every-line-of-my-code-is-written-by-ai/cover.webp" alt="Ohjelmistokehittäjänä en enää kirjoita riviäkään koodia itse – ajatuksia vibe-koodauksesta" />
</figure>

Olen tehnyt töitä ohjelmistokehittäjänä reilut kuusi vuotta, enkä ole kirjoittanut riviäkään koodia käsin yli vuoteen. Nykyisissä projekteissani tekoäly tuottaa joka ikisen rivin. Mutta kun kokeilin koodaamista tekoälyn avulla ensimmäisen kerran reilu vuosi sitten, huuma kesti tuskin kolmea päivää pidempään.

<!--more-->

## Vibe-koodauksen autuus

Muistan elävästi, kun avasin kesäkuussa 2025 Cursorin ensimmäistä kertaa hypen perässä. Ensinäkemältä se näytti tutulta ja turvalliselta VS Code -editorilta – ainoa näkyvä ero oli tekoälylle pyhitetty sivupalkki.

Siihen asti käsitykseni tekoälyavusteisesta koodaamisesta oli rajoittunut GitHub Copilotin kaltaiseen edistyneeseen tekstintäydennykseen. Mutta kun kirjoitin Cursorille ensimmäisen kehotteeni ja painoin enteriä, leuka loksahti. Tekoäly alkoi raksuttaa ja sylki editoriin kymmeniä, jopa satoja rivejä koodia salamannopeasti. Se hyppi tiedostosta toiseen päivittäen kokonaisuuksia ja suoritti puolestani komentoja suoraan terminaalissa.

Riitti, että kuvailin tarvitsemani ominaisuuden arkikielellä, ja tekoäly rakensi sen valmiiksi. Minun ei tarvinnut näpytellä riviäkään. Kyse ei ollut enää mistään koodintäydennyksestä, vaan tekoäly otti korkeammalla tasolla aidosti haltuunsa osan ohjelmistokehittäjän työstä.

Tuntui kuin minulla olisi ollut käsissäni taikasivellin – koin aitoa riemua siitä, että edessäni avautui aivan uusi maailma.

Kirjoitin silloin fiiliksistäni näin:

> Vibe-koodaus sopii ADHD-aivoille kuin nyrkki silmään. Perinteinen ohjelmointi sotii luonnostaan ADHD-piirteitä vastaan, mutta vibe-koodaus pyyhkäisi kertaheitolla pois vastentahtoisuuden testien kirjoittamista kohtaan, inhon CSS:ää kohtaan, jatkuvat typot muuttujien nimissä ja puuduttavan, toisteisen bugien metsästyksen.
>
> Tekoälyn ansiosta palautesilmukka on äärimmäisen nopea ja onnistumisen tunne välitön. Mitä tylsempää ja toistuvampaa puurtaminen on, sitä loistavammin tekoäly siitä suoriutuu.
>
> Itse voi keskittyä suuriin linjoihin ja arkkitehtuuriin – toimia projektin visionäärinä ja vetäjänä.
>
> En välitä naputella jokaista merkkiä itse, mutta rakastan uuden luomista. Aina assemblystä korkean tason kieliin ohjelmoinnin kehityskulku on tähdännyt parempaan tekemisen iloon ja korkeampaan tuottavuuteen.
>
> Koodarille on suuri etuoikeus voida luoda ohjelmistoja puhtaasti tekijän ja luojan näkökulmasta sen sijaan, että tuntisi itsensä vain kooditiiliä latovaksi rutiiniduunariksi.

## Vibe-koodauksen rajat

Tälle tyylille on nykyään vakiintunut nimikin: *vibe coding* eli vibe-koodaus. Termin lanseerasi OpenAI:n perustajajäsen Andrej Karpathy helmikuussa 2025. Se tarkoittaa koodaamista puhtaasti fiilispohjalta: tekoälylle kerrotaan omin sanoin, mitä halutaan, sen tuottama koodi hyväksytään sellaisenaan ilman rivikohtaista syynäystä, ja virheilmoitukset heitetään sellaisenaan takaisin tekoälyn pureskeltavaksi – kunnes koodin olemassaolo itsessään melkein unohtuu.

Kirjoitettuani tuon hehkutuksen hurmos kesti tosiaan tuskin kolmea päivää, ennen kuin törmäsin vibe-koodauksen koviin reunoihin.

Rakensin tuolloin erästä sovellusprototyyppiä. Puhdas vibe-koodaus antoi tekoälyn sooloilla ylimalkaisten ohjeiden pohjalta ilman mitään ohjelmistotuotannon parhaita käytäntöjä. Vähitellen tekoäly karkasi käsistä, ja arkkitehtuurista tuli niin sekava himmeli, ettei sitä pystynyt enää ylläpitämään.

Niinpä vedin kaiken sileäksi ja aloitin alusta. Tällä kertaa otin ohjelmistoinsinöörin hattuni takaisin päähän ja valjastin tekoälyavusteisen kehityksen tiukasti kurinalaisiin työtapoihin.

Löysin aivan uudenlaisen työnkulun. Vibe-koodauksen riemu säilyi, mutta yhdistin siihen tarkan katselmoinnin, selkeän dokumentaation ja pienet, iteratiiviset askeleet sen sijaan, että olisin yrittänyt generoida jättimäisiä ominaisuuskokonaisuuksia kerralla. Kokonaisuus ja arkkitehtuuri pysyivät täysin näpeissäni, ja koodi teki vihdoin juuri sitä mitä pitikin. Tekoälyn ohjaamisesta tuli kuin fiksun harjoittelijan mentorointia: rutiinitoteutusta ei tarvinnut vääntää itse, mutta arkkitehtoninen vastuu ja kokonaiskuvan hahmottaminen pysyivät tiukasti omissa käsissäni.

Siirryin pian käyttämään kehitystyössä Claude Codea. Se toi mukanaan entistä tarkemman ja voimakkaamman kontrollin – tuntui kuin olisin saanut supervoimia, ja tuottavuuteni moninkertaistui kertaheitolla.

## Ohjelmistokehittäjän tulevaisuus

"Johtaako vibe-koodaus siihen, että asioita saa valmiiksi niin nopeasti, ettei kukaan enää viitsi opetella ohjelmoinnin perusteita syvällisesti?"

Uskon vahvasti, että juuri näin käy.

Perinteinen polku koodauksen alkeista valmiiden tuotteiden rakentajaksi on muistuttanut portaita. Askel kerrallaan on edetty ohjelmoinnin peruskursseilta juniorikehittäjäksi, opittu käytännön työelämän haasteissa ja kasvatettu osaamista kohti itsenäistä ohjelmistoinsinööriä. Jokaisella askeleella on saanut heti palautetta tekemisestään, jolloin ala on ollut saavutettava tavallisella oppimiskyvyllä, ja urapolku on ollut selkeä.

Vibe-koodaus puolestaan pudotti kynnyksen nolliin: kuka tahansa pystyy nyt kyhäämään toimivan demon. Mutta ohjelmistokehitys on läpeensä käytännönläheinen ala. Demon tekemisen ja kaupallisesti luotettavan tuotantokelpoisen järjestelmän välinen kuilu on kuin ero nollasta yhteen ja yhdestä sataan.

Perinteisellä urapolulla ne, jotka oppivat viemään asiat nollasta yhteen, kerryttivät matkalla myös taidot, joita vaaditaan askeleissa yhdestä sataan. Vibe-koodaus ei kuitenkaan opeta vasta-alkajalle näitä kivijalkataitoja. Heti kun pitäisi siirtyä demotasolta askeleeseen kymmenen, edessä kohoaa pystysuora seinä, joka nujertaa useimpien innon kehittyä pidemmälle.

Juuri siksi, että alku on niin petollisen vaivatonta, myöhemmin eteen tulevia jättihaasteita ei ylitetä pelkällä perusharrastuneisuudella. Ne harvat, jotka selviävät tuon rotkon yli omin voimin, edustavat poikkeuksellista oppimis-, toimeenpano- ja ongelmanratkaisukykyä – koodareiden terävintä kärkeä, kenties parasta yhtä prosenttia.

Toisin sanoen tuo pieni joukko olisi yltänyt huippuinsinööreiksi myös ennen tekoälyaikaa.

Tekoälykoodauksen harpatessa eteenpäin ala ei enää tarvitse juniorikehittäjiä samaan tapaan. Ammatilliseen oppipolkuun syntyy syvä katkos, eikä uusilla tulokkailla ole enää yhtä paljon tilaisuuksia hioa taitojaan käytännössä.

Vuosi tämän tekstiluonnoksen kirjoittamisen jälkeen rekrytointidata on alkanut vahvistaa ennustuksen todeksi:

- Stanfordin Digital Economy Lab seurasi yhdysvaltalaisen palkanlaskentajätti ADP:n dataa ja havaitsi, että kesäkuuhun 2026 mennessä tekoälylle alttiimmilla aloilla 22–25-vuotiaiden nuorten työllisyys oli 19 prosenttia alhaisempi kuin muiden alojen samanikäisten kehitys olisi edellyttänyt. Vuotta aiemmin vaje oli 15 prosenttia. Kokeneempien asiantuntijoiden kohdalla vastaavaa pudotusta ei näkynyt. Ero selittyy ennen kaikkea sillä, että yritykset palkkaavat vähemmän uutta väkeä, ei niinkään irtisanomisilla. ([Stanford Digital Economy Lab, 2026-08](https://digitaleconomy.stanford.edu/news/canariesaug26/))
- Pääomasijoitusyhtiö SignalFiren kesäkuun 2026 raportin mukaan vastavalmistuneiden ja junioritason rekrytoinnit kahdessatoista teknologiajätissä (kuten Google, Meta, Apple ja Microsoft) olivat pudonneet noin 65 prosenttia vuoden 2019 tasosta. Varhaisen vaiheen startup-yrityksissä pudotus oli peräti 76 prosenttia. ([SignalFire State of Talent Report 2026](https://signalfire.com/blog/signalfire-state-of-talent-report-2026))
- Rekrytointisivusto Indeedin tilastojen mukaan vuoden 2026 ensimmäisellä neljänneksellä Yhdysvaltain ohjelmistokehityksen avoimista työpaikoista enää vaivaiset 4,5 prosenttia oli suunnattu junioreille – mikä oli alhaisin osuus kaikista tarkastelluista toimialoista. ([Indeed Hiring Lab, 2026-07](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/))

Suhtaudun alan tulevaisuuteen varsin pessimistisesti. Ohjelmointikenttä jakautuu jyrkästi kahtia: toisessa ääripäässä ovat huipputason gurut mittaamassa voimiaan toisiaan vastaan, toisessa taas suuri joukko harrastajia tekemässä omaksi ilokseen demotasoisia leluja.

Muutkin alat seuraavat vääjäämättä perässä. Tulevaisuudessa tekoäly korvaa käytännössä kaiken rutiininomaisen asiantuntijatyön.

Jopa matematiikka – inhimillisen luovan ajattelun perimmäinen linnake – on menneen vuoden aikana joutunut tekoälyn murtamaksi:

- Tammikuussa 2026 Cambridgen yliopiston perustutkinto-opiskelija Kevin Barreto ja matematiikan harrastaja Liam Price ratkaisivat Erdősin ongelman nro 728 käyttäen apunaan GPT-5.2 Prota. Ongelmaan ei löytynyt aiemmasta kirjallisuudesta mitään todistusta, ja sitä pidetään ensimmäisenä pääosin tekoälyn ratkaisemana Erdősin ongelmana.
- Toukokuussa 2026 OpenAI:n malli kumosi Paul Erdősin vuonna 1946 esittämän yksikköetäisyyksiä koskevan konjektuurin, joka oli piinannut matemaatikoita 80 vuotta. Fieldsin mitalisti Tim Gowers totesi: "Yksikään tekoälyn aiemmin tuottama todistus ei ole ollut lähelläkään tätä tasoa." Vain muutamaa viikkoa myöhemmin ihmismatemaatikot paransivat tekoälyn tulosta merkittävästi.
- Samassa kuussa Google DeepMindin tekoälyagentti ratkaisi itsenäisesti 9 ongelmaa 353 avoimesta matemaattisesta ongelmasta – vain muutaman sadan dollarin laskentakustannuksella per tehtävä.
- Matemaatikko Noga Alon lopetti jopa Erdősin ongelmien tutkimisen todeten: "Kun tekoäly alkoi ratkoa niitä, siinä ei ollut enää mitään mieltä."

## Mitä tämä juttusarja käsittelee

Yhä useampi ilman aiempaa koodaustaustaa kokeilee nyt tekoälykoodausta. Moni ei kuitenkaan tiedä, mistä aloittaa, tai kokeilut jäävät vain pieniksi pintaraapaisuiksi. Ennen pitkää he huomaavat, että ohjelmistotuotannon ymmärryksen puute johtaa seinään: ei hahmoteta, mitä oikeastaan ollaan tekemässä, miten ongelmia pilkotaan hallittaviin osiin, miten ratkaistaan mutkikkaita kokonaisuuksia tai miten tekoälyä ohjataan kohti haluttua lopputulosta.

Olen myös huomannut, että monien kompastuskivenä on loogisen ajattelun puute: ei osata kysyä oikeita asioita, ei osata ajatella kriittisesti eikä kyetä arvioimaan, puhuuko tekoäly totta vai puuta heinää.

Olen työskennellyt ohjelmistoalalla yli kuusi vuotta ja suunnitellut sekä kehittänyt tekoälyn avulla useita vaativia tuotteita, joilla on jo vakiintunut käyttäjäkunta. Kuten alussa totesin, nykyisissä projekteissani tekoäly tuottaa jokaisen koodirivin. Tekoäly todellakin kykenee rakentamaan monimutkaisia ohjelmistoja – edellyttäen, että ihminen ohjaksissa tietää mitä tekee ja osaa ohjata tekoälyä oikein. Tekoäly on vain työkalu; ratkaiseva tekijä on ihminen.

Tekoälyn aikakaudella perinteinen tapa oppia koodaamaan menee kokonaan uusiksi. Niinpä tartun härkää sarvista ja aloitan uuden juttusarjan: *Vibe-koodauksen täydellinen opas vasta-alkajalle*.

Opas jakautuu useampaan teemaan:

1. **Tekoälykoodauksen sovittaminen modernin ohjelmistokehityksen parhaisiin käytäntöihin.** Ymmärretään ensin, mitä ohjelmistotuotanto todella on, ja lähdetään sitten rakentamaan omaa ohjelmistoa puhtaalta pöydältä. Tavoitteena ei ole vain puolivillainen demo, vaan pitkällä tähtäimellä ylläpidettävä, sulavasti rullaava tuote.
2. **Ajattelun ja logiikan harjoitteluopas.** Kuinka kysyä tekoälyltä oikeita asioita, mitä sudenkuoppia välttää ja miten kirjoittaa tehokasta projektidokumentaatiota.
3. **Projektin ja koodin testaaminen sekä työnkulun hiominen.** Kuinka parantaa ohjelmiston laatua ja toiminnallisuuksia pitäen arkkitehtuuri samalla vakaana. Kuinka nopeuttaa kehitystahtia tinkimättä laadusta ja kuinka rakentaa automatisoituja työnkulkuja.
4. **Optimaaliset teknologiavalinnat tekoälyavusteiseen koodaukseen.** Mitkä kielet ja sovelluskehykset kannattaa valita, jotta tekoälyn vahvuuksista saadaan irti suurin mahdollinen hyöty.

## Jälkisanat

Suurin osa tämän kirjoituksen ajatuksista syntyi jo vuosi sitten, lokakuussa 2025. Nyt päivitin tekstin ja täydensin sitä kuluneen vuoden aikana kertyneellä rekrytointidatalla ja tekoälyn matematiikassa saavuttamilla läpimurroilla. Olin tuolloin niin ällistynyt tekoälyn huimasta kehitysvauhdista, että pelkäsin jokaisen ajatuksen vanhenevan parissa päivässä – siksi julkaisin paljon lyhyitä päivityksiä mutta vähän pidempiä pohdintoja. Vuotta myöhemmin palasin tähän luonnokseen ja huomasin ajatusten kestäneen aikaa yllättävän hyvin, joten päätin viimeistellä ja julkaista sen. Aion kirjoittaa pitkiä tekstejä jatkossa useamminkin. Aito inhimillinen ääni nimittäin vain harvinaistuu tulevaisuudessa.
