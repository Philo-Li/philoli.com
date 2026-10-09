---
layout: blog
title: "Kako složiti Rubikovu kocku ispod 30 sekundi bez učenja algoritama: razumljivo i za osnovnoškolce"
date: 2026-10-09 12:00:00
tags:
  - Rubikova kocka
  - tutorial
  - Roux metoda
  - speedcubing
  - ciljano vježbanje
categories: 日常折腾
description: "Od prvog složenja do Ao100 ispod 30 sekundi trebalo mi je 89 dana, bez da sam naučio ijedan CFOP algoritam. Korištenjem podataka od 4441 mjerenja, analizirat ću četiri faze: gdje zapinje svaka faza, što vježbati te zašto Roux metoda ne zahtijeva učenje algoritama."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Četiri faze od 165 sekundi do 28 sekundi" />
</figure>

*Slika: Četiri faze od 165 sekundi do 28 sekundi. Faza dva je najbrže napredovala, faza tri je bila najduža faza platoa.*

U prethodnom članku [«Kako složiti Rubikovu kocku bez algoritama»](/hr/blog/solve-rubiks-cube-without-formulas/) naučio si logiku komutatora i kako složiti kocku bez učenja algoritama. Taj je članak naišao na vrlo pozitivan prijem.

Ako si slijedio upute, vjerojatno ti sada treba dvije do tri minute, i premda ćeš se možda mučiti, uspjet ćeš je složiti. Tada će se pojaviti novo pitanje: kako postati brži?

Ako pretražiš "speedcubing", svi će te tutoriali uputiti na isto: želiš li ući u 30 sekundi, prvo nauči CFOP algoritme. F2L ima 41, OLL 57, PLL 21, što je ukupno 119 algoritama. Čak i ako F2L radiš intuitivno, onih 78 algoritama za gornji sloj ne možeš izbjeći. Bez njih, zaboravi na brzinu.

Ovaj članak želi ti pokazati da možeš ući u 30 sekundi, a da pritom ne naučiš niti jedan algoritam.

<!--more-->

Od 7. svibnja 2026., kada sam prvi put složio kocku, do 4. kolovoza iste godine, kada sam s Ao100 ušao u 30 sekundi, prošlo je 89 dana. U tom periodu nisam naučio niti jedan CFOP algoritam, već sam se samo zabavljao u slobodno vrijeme. Ovo su podaci s 4441 zabilježenog složenja.

![Krivulja rezultata za 4441 složenje](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Slika: Krivulja rezultata za 4441 složenje. Siva linija prikazuje svako pojedinačno vrijeme, tamna linija prikazuje trend Ao100, a crvene točke su trenuci kada sam postavio novi osobni rekord. Najbolji Ao100 bio je 28.22 sekunde.*

Svjesnim, aktivnim vježbanjem i održavanjem redovitosti, svatko može postići sub-30 rezultate u nekoliko mjeseci, čak i od nule.

Što zapravo znači ući ispod 30 sekundi? Na [prvom Svjetskom prvenstvu u Rubikovoj kocki 1982. godine](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), pobjedničko vrijeme bilo je 22.95 sekundi, što je WCA kasnije priznala kao prvi službeni svjetski rekord; deseto mjesto zauzela je Jessica Fridrich, izumiteljica CFOP metode o kojoj će biti riječi u sljedećem poglavlju, s rezultatom od 29.11 sekundi. Drugim riječima, sub-30 rezultat koji danas amater postigne za nekoliko mjeseci, 1982. bi ga svrstao među deset najboljih na svijetu.

U nastavku ću s tobom podijeliti kako sam to korak po korak postigao i u potpunosti ti predstaviti cijeli set vježbi.

## Zašto cijeli speedcubing svijet uči algoritme napamet

Prvo razjasnimo jednu stvar: zašto su "brzina" i "učenje algoritama napamet" tako usko povezane u glavama ljudi?

Početkom 1980-ih, češka profesorica Jessica Fridrich (koja je kasnije istraživala digitalnu forenziku na Sveučilištu Binghamton u SAD-u) osmislila je slojevitu metodu slaganja kocke, kasnije nazvanu CFOP (Cross, F2L, OLL, PLL). Ideja ove metode je da se iscrpno popišu sve moguće situacije na gornjem sloju, a za svaku situaciju dodijeli se optimalni algoritam. Prepoznaš situaciju, izvršiš algoritam i nemaš potrebe za razmišljanjem.

![Jessica Fridrich i Rubikova kocka u njenom uredu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Slika: Jessica Fridrich i Rubikova kocka u njenom uredu. 1982. godine osvojila je 10. mjesto na prvom Svjetskom prvenstvu s 29.11 sekundi, a CFOP metoda je nazvana po njoj (Fridrich Method).*

Ova je metoda iznimno brza. Gotovo svi svjetski rekordi postignuti su CFOP metodom. Zato je svi tutoriali podučavaju, svi videi je objašnjavaju, "učenje speedcubinga" postalo je jednako "učenju CFOP-a", a učenje CFOP-a jednako učenju 119 algoritama napamet.

No, imaj na umu da je "učenje algoritama napamet" specifičnost CFOP metode, a ne svojstvo same brzine. CFOP zahtijeva učenje napamet jer je odabrao put iscrpnog nabrajanja. Iscrpno nabrajanje zahtijeva pamćenje, i to je cijena koju plaća.

Postoji li metoda koja ne ide tim putem iscrpnog nabrajanja? Postoji.

## Roux metoda: slaganje bez učenja algoritama

Godine 2003., Francuz Gilles Roux predstavio je potpuno drugačiji pristup. Umjesto slaganja sloj po sloj, prvo se grade dva 1×2×3 "bloka" (Prvi blok i Drugi blok), zatim se rješavaju četiri kutnjaka gornjeg sloja, a na kraju ostaje samo šest rubnjaka koji se završavaju okretanjem M i U slojeva.

![Gilles Roux na natjecanju](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Slika: Gilles Roux na natjecanju. Izrezak iz starog videozapisa natjecanja, slika je AI-jem poboljšana i povećana.*

U prethodnom članku smo već jednom složili kocku koristeći ovaj okvir. Ovdje ćemo ponovno proći kroz četiri koraka, s fokusom na "što treba zapamtiti za svaki korak":

| Korak | Opis | Algoritmi koje trebaš naučiti napamet |
| --- | --- | --- |
| 1. Prvi blok (FB) | Izgradi 1×2×3 blok | 0, čisto promatranje |
| 2. Drugi blok (SB) | Simetrično izgradi drugi | 0, čisto promatranje |
| 3. CMLL | Postavljanje četiri kutnjaka gornjeg sloja | 9, sve se mogu izvesti iz 3-ciklusa |
| 4. LSE | Zadnjih šest rubnjaka | 0, samo okretanje gornjeg (U) i srednjeg (M) sloja |

Od četiri koraka, tri ne zahtijevaju nikakve algoritme. Jedini potrebni CMLL, koji ukupno ima 42 slučaja, ne zahtijeva da naučiš svih 42. Kutnjački 3-ciklus R U' L' U R' U' L U, o kojem smo govorili u prethodnom članku, zajedno sa svojim zrcalnim slikama i nekoliko varijanti, može pokriti sve situacije, samo sporije.

![Četiri koraka Roux metode](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Slika: Četiri koraka Roux metode. Svaki korak prikazuje samo složene komade do tog trenutka: Prvi blok → Drugi blok → CMLL (četiri kutnjaka gornjeg sloja) → LSE (zadnjih šest rubnjaka). Izrezak s panela "Metode" moje stranice s 3D kockom.*

Zato Roux metoda ne zahtijeva učenje algoritama napamet: ona komprimira dio koji zahtijeva pamćenje u mali kutak, a ostatak prepušta promatranju, razumijevanju i vještini.

## Od 165 sekundi do 28 sekundi: četiri faze

U nastavku je moj stvarni put. Za svaku fazu sam podacima označio početak i kraj, a zatim objasnio gdje sam zapinjao i što sam vježbao. Tvoje prepreke možda neće biti iste kao moje, ali redoslijed će vrlo vjerojatno biti identičan.

![Četiri faze od 165 sekundi do 28 sekundi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Slika: Vremenski raspon četiri faze. Faza jedan 3 tjedna, faza dva 11 dana, faza tri dva mjeseca, faza četiri do danas.*

### Faza jedan: 165 s → 60 s (1. – 3. tjedan)

**Podaci**: Od 7. svibnja do 27. svibnja. Prvi tjedan prosjek je bio 165 sekundi, treći tjedan 68 sekundi.

**Gdje zapinješ**: Prvi blok (FB) je vrlo nespretan, trebalo je dugo pronaći svaki par kutnjaka i rubnjaka. Nakon što se pronađe par, početnici često stanu i nastave promatrati.

![Gdje početnici troše vrijeme](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Slika: Gdje početnici troše vrijeme. Ruke miruju, oči traže po kocki, a "traženje" traje višestruko duže od "okretanja".*

**Što vježbati**:

Najveći neprijatelj u ovoj fazi nije sporost ruku, već sporost očiju. Vrijeme koje provodiš "tražeći" daleko je veće od vremena "okretanja". Stoga:

-   Fiksiraj kut promatranja, ne rotiraj kocku. Kao što je spomenuto u prethodnom članku, kut promatranja kod Roux metode je fiksan. U ovoj fazi, "ne rotiranje kocke" mora postati mišićna memorija. Svaki put kad poželiš rotirati kocku, zaustavi se i zapitaj se: Mogu li vidjeti komad koji mi treba iz ovog kuta?
-   Slow solving. Ne mjeri vrijeme, ali neka pokreti budu kontinuirani, bez ikakvih pauza. Svaki pokret može biti vrlo spor, ali bez zaustavljanja. Ključno je da dok ruka izvodi prethodni pokret, oči već prate sljedeći; to je srž slow solvinga. Iako zvuči kao usporavanje, zapravo treniraš oči da vide odnos između trenutnog položaja komada i mjesta gdje bi trebao ići.
-   Vježbaj samo Prvi blok (FB). Scramblaj, složi FB, opet scramblaj, opet složi FB. Ne nastavljaj dalje. Prvi blok je najslobodniji korak u Roux metodi i najbolji za treniranje promatranja.

Ne uči nikakve nove algoritme u ovoj fazi. Tvoje usko grlo trenutno nije u algoritmima.

### Faza dva: 60 s → 40 s (4. – 5. tjedan)

**Podaci**: Od 27. svibnja do 7. lipnja, 11 dana. Ovo je bio najbrži pad u cijelom procesu, i ujedno period u kojem sam najviše vježbao, s 723 složenja u prvom tjednu lipnja.

**Gdje zapinješ**: Pokreti nisu fluidni. Kocka se zaglavljuje.

**Što vježbati**:

U ovoj fazi, moraš optimizirati pokrete u svakoj fazi, te na temelju razumijevanja povećati vještinu svakog pokreta.

-   Drugi blok (SB). Drugi blok je teži od Prvog bloka jer imaš upola manje prostora i ne smiješ uništiti već složeni Prvi blok. Ključni pokreti su R, r (desna dva sloja), M, U. U ovoj fazi moraš naučiti koristiti r i M umjesto R za pomicanje komada, kako se Prvi blok nikada ne bi uništio. Optimizacija koraka kretanja znači uštedu vremena. Na primjer, tri okretaja u smjeru kazaljke na satu jednaka su jednom okretaju u smjeru suprotnom od kazaljke na satu.
-   Svladaj korištenje M-sloja. Zadnji korak Roux metode u potpunosti ovisi o M i U slojevima, a fluidnost okretanja M-sloja izravno određuje tvoju donju granicu brzine. Koristi prstenjak ili srednji prst za guranje M-sloja i počni vježbati ritam poput M' U M' U.
-   CMLL prepoznavanje oblika. U prethodnom članku smo "isprobali" četiri kutnjaka pomoću 3-ciklusa. Sada trebaš početi gledati pa tek onda raditi: prije okretanja gornjeg sloja, pogledaj orijentaciju žute boje na četiri kutnjaka i procijeni jesu li 0, 1, 2 ili 4 kutnjaka dobro orijentirana, a zatim izvedi odgovarajući potez. Možeš postići značajan porast učinkovitosti uz vrlo mali broj algoritama, što je vrlo isplativo. Veliki dio tih algoritama ne treba učiti napamet; razumiješ ih dok ih izvodiš.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pogled pri slaganju Drugog bloka" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Slika lijevo: Pogled pri slaganju Drugog bloka. Prvi blok je završen, a par kutnjaka i rubnjaka s desne strane umeće se koristeći samo okretaje R, r, M, U. Prvi blok nikada se ne dira. Slika desno: M' U M, najčešći set pokreta u drugoj polovici Roux metode. Srednji sloj ide gore, gornji sloj se okrene, srednji sloj se vraća, i u tri koraka zamijeni se par rubnjaka na gornjem i srednjem sloju.*

Možeš pogledati moju [zbirku algoritama za Roux metodu](/hr/projects/rubiks-cube/roux#cmll). Stranica za CMLL je dvostupanjska: 7 algoritama za orijentaciju + 2 algoritma za permutaciju, ukupno 9. To je isplativ izbor za povećanje brzine, lako se uči, a svaka svladana grupa može ti ubrzati slaganje za 1-2 sekunde. Uz malo vježbe, brzo ćeš ih svladati; neke su već predstavljene u prethodnom članku, i ne moraš ih sve zapamtiti da bi ušao u 30 sekundi.

![Prvi korak dvostupanjskog CMLL-a, sedam orijentacija kutnjaka](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Slika: Prvi korak dvostupanjskog CMLL-a, sedam orijentacija kutnjaka. U prikazu odozgo, žuta boja je boja gornje stranice okrenuta prema gore, dok mala traka sa strane označava da je boja gornje stranice tog kutnjaka okrenuta bočno. Prepoznaj oblik prema broju žutih kutnjaka: 0 je H ili Pi, 1 je S ili AS, 2 je U, T ili L.*

Nakon što poravnaš žute strane na vrhu, možeš koristiti ova dva algoritma za poravnavanje bočnih strana kutnjaka.

Ako je jedna strana već usklađenih boja, na primjer crvena je već na istoj strani, rotiraj je na lijevu stranu i zatim možeš odabrati algoritam za zamjenu susjednih kutnjaka. Ako nijedna strana nema usklađene boje, odaberi algoritam za zamjenu dijagonalnih kutnjaka.

![Drugi korak dvostupanjskog CMLL-a, dvije pozicije kutnjaka](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Slika: Drugi korak dvostupanjskog CMLL-a, dvije pozicije kutnjaka. Na lijevoj slici, crvena boja na dva lijeva kutnjaka već je usklađena, koristi se zamjena susjednih. Na desnoj slici nijedna strana nije usklađena, koristi se zamjena dijagonalnih.*

Svaku grupu algoritama možeš razumjeti kroz mnogo slow solvinga. Ne gledaj na njih kao na algoritme, već kao na određene fiksne pokrete koje bi polaganim istraživanjem sam otkrio, ali ovdje su navedeni kako bi ti skratili put.

Još jedna stvar, koja daje brže rezultate od bilo koje vježbe: potroši malo novca i kupi novu kocku. Ako i dalje imaš staru kocku koja klaka pri okretanju i zaglavljuje se, kupi modernu 3x3 kocku s magnetima. Najnovije kocke omogućit će ti da osjetiš snagu inženjerske optimizacije – glatko se okreću, automatski se poravnavaju i gotovo nikada se ne zaglavljuju. Samo promjena kocke može ti ubrzati prosječno vrijeme za čak 15 sekundi. Najbolji omjer cijene i kvalitete je [MoYu RS3 M V5 (MagLev + Ball-Core verzija)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), oko dvadesetak dolara, i bit će ti dovoljna dok ne dođeš do sub-20.

### Faza tri: 40 s → 30 s (5. – 13. tjedan, dva mjeseca)

**Podaci**: Od 7. lipnja do 4. kolovoza. Ao100 se "brusio" od 39.8 sekundi na 29.9 sekundi, za što mi je trebalo 58 dana. U ovoj fazi povremeno bi se pojavio rezultat ispod 30 sekundi, ali samo uz iznimnu sreću. Imaj na umu da kako prosječno vrijeme slaganja pada, težina napredovanja za jednu sekundu eksponencijalno raste.

![Dnevni prosječni rezultati](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Slika: Dnevni prosječni rezultati. Nakon sredine lipnja, krivulja je gotovo postala ravna, "bruseći se" između 30 i 40 sekundi puna dva mjeseca.*

Ovo je faza platoa. Svatko je iskusi, a ja sam ovdje proveo dva mjeseca.

**Gdje zapinješ**: Slaganje šest rubnjaka gornjeg sloja je vrlo sporo, ne razumiješ logiku, svaki put se oslanjaš na ponovljene pokušaje, gubeći puno vremena. Prvi i Drugi blok i dalje nisu dovoljno uvježbani.

**Što vježbati**:

-   EO prepoznavanje. U prethodnom članku je spomenuto da postoji samo nekoliko situacija s krivo orijentiranim rubnjacima: 0, ne-0 i ne-4, 4 (2 gore, 2 dolje), 4 (svi na gornjem sloju), 4 (3 gore, 1 dolje). Cilj ove faze je: u trenutku kada završiš blokove, bez brojanja, jednim pogledom prepoznati o kojoj se situaciji radi. Vježba je sljedeća: scramblaj, složi do kraja CMLL-a, zatim pauziraj, izgovori broj krivo orijentiranih rubnjaka, pa nastavi.
-   Mnogi ljudi ne razumiju pokrete ovdje. Faza EO-a konačno je usmjerena na stvaranje oblika strijele (3 gore, 1 dolje), jer je potpuni složeni oblik samo jedan potez udaljen od oblika strijele. Stoga, razmišljajući unatrag, to je posljednji korak prije potpunog slaganja. Dakle, bez obzira na broj krivo orijentiranih rubnjaka, krajnji cilj je stvoriti strelicu. Ako su 4 rubnjaka krivo orijentirana na vrhu, zamijeni jedan par gornjeg i donjeg rubnjaka da bi jedan rubnjak prešao dolje i stvorio strelicu. Ako su 2 gore i 2 dolje, zamijeni jedan par gornjeg i donjeg rubnjaka da bi jedan rubnjak prešao gore i stvorio strelicu. Ako je 1 gore i 1 dolje, ili 2 gore, koristi M' U M da prvo dođeš do prethodne situacije, a zatim stvoriš strelicu. Kroz mnogo promatranja i razmišljanja, možeš samostalno otkriti najbolje korake za situaciju 1/1.
-   Puno vježbaj look-ahead. Ovo je najvažnija stvar za prelazak s 40 na 30 sekundi, i ujedno najkontraintuitivnija: okreći sporije, gledaj dalje. Kada slažeš Prvi blok (FB), ne gledaj komad koji trenutno umećeš, već gdje je sljedeći komad. U početku će biti vrlo neugodno, rezultati će se pogoršati, ali nakon tjedan dana naglo će se poboljšati.
-   CMLL bez oklijevanja. Ako svaki put moraš razmisliti prije nego što izvedeš neki pokret, onda to još nije tvoje. Vježbaj svaki pokret pojedinačno 50 puta, dok ti ruka ne reagira čim vidiš oblik.

![Oblik strijele](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Slika: Oblik strijele. Tri krivo orijentirana rubnjaka na gornjem sloju (istaknuta tirkiznom bojom) tvore strelicu, pokazujući prema krivo orijentiranom rubnjaku na donjem sloju. U ovom trenutku, jedan M' U M može istovremeno složiti sva četiri. [Otvorite ovo stanje u 3D kocki](/hr/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) da biste ga vidjeli korak po korak.*

![Šest oblika EO-a](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Slika: Šest oblika EO-a. Oznake u gornjem lijevom kutu prikazuju broj krivo orijentiranih rubnjaka (gore / dolje). Žuto su orijentirani rubnjaci, a tirkizni okvir su krivo orijentirani rubnjaci. Samo za oblik strijele (arrow) potreban je algoritam; ostalih pet se prvo pretvaraju u oblik strijele.*

Za slaganje lijevih i desnih rubnjaka, neka žuta bude gornja, bijela donja strana, a Prvi blok crveni. Tada je potrebno složiti žuto-crveni rubnjak + žuto-narančasti rubnjak (istaknuto). Glavna ideja je da se žuto-crveni rubnjak, putem zamjene gornjeg i donjeg rubnjaka, nekako prebaci na donju stranu, a žuto-narančasti rubnjak također na donju stranu. Dva rubnjaka će tada biti suprotno postavljena na donjoj strani. Zatim se gornja strana okrene u odgovarajući položaj, i M2 U ili M2 U' mogu složiti lijeve i desne rubnjake U-sloja.

Kako bih ti pomogao/la da bolje razumiješ, svih šest oblika EO-a sam organizirao na [LSE stranici zbirke algoritama za Roux metodu](/hr/projects/rubiks-cube/roux#lse). Klikom na "pogledaj detalje" za svaki prikaz otvorit će se odgovarajuće stanje u 3D kocki, s automatski istaknutim krivo orijentiranim rubnjacima. Na istoj stranici nalaze se i svi slučajevi za slaganje UL/UR i zadnja četiri rubnjaka.

Smanjenje količine vježbanja u ovoj fazi nije loša stvar. Fazu platoa ne možeš prebroditi gomilanjem vježbe, već ispravljanjem jedne specifične loše navike. Moje iskustvo je da se svaki put ispravlja samo jedna.

### Faza četiri: 30 s → 28 s (nakon 13. tjedna)

**Podaci**: Nakon 4. kolovoza. U rujnu je zabilježeno 122 vježbe, iako mnoge vježbe nisu bile evidentirane. Kocku sam već integrirao u svakodnevni život kao igračku na stolu, uzimajući je i igrajući se kad sam dobro raspoložen, kad sam frustriran ili anksiozan, tijekom pauza na poslu, kad mi je dosadno. Ao100 je također postupno pao s 29.9 na 28.2.

**Gdje zapinješ**: Nema jasnog uskog grla, samo nedovoljna vještina.

**Što vježbati**:

Ako ti je prosječna brzina još uvijek iznad 30 sekundi, jedino što trebaš učiniti je nastaviti puno vježbati, a ne učiti nove algoritme napamet.

Kontinuiranim slow solvingom i vježbanjem look-aheada, postat ćeš sve brži.

Uzimaj kocku i igraj se kad god stigneš. Drži je na dohvat ruke, recimo na radnom stolu, pa je možeš uzeti i igrati se tijekom pauza. Također, često snimaj svoja slaganja i analiziraj u kojoj fazi trošiš najviše vremena, a zatim ciljano optimiziraj. To je ciljano vježbanje – tvoja brzina napretka ne ovisi o ukupnom broju običnih vježbi, već o broju ciljanih vježbi.

Tada ćeš otkriti da, nakon što prođeš fazu platoa od 30-35 sekundi, tvoja brzina ponovno pada na novu razinu.

Čestitam ti ako si stigao/la do ove faze – u očima početnika, već si vrlo vješt igrač!

## Cijena slaganja bez učenja algoritama

Budimo iskreni. Slaganje bez učenja algoritama nije besplatno.

Faza CMLL-a je sporija. Pokrivanje 42 slučaja s 9 algoritama znači da se neke situacije moraju raditi dvaput. Oni koji znaju cijeli set CMLL algoritama brži su od mene u ovom koraku za dvije do tri sekunde.

Tehnika M-sloja ima visok prag. Druga polovica Roux metode u potpunosti ovisi o M-sloju, koji je teži za okretanje od R i U slojeva, lakše se zaglavi i zahtijeva kvalitetniju kocku.

Ne brini o gornjoj granici. Među vrhunskim igračima ima i onih koji koriste Roux metodu i postižu vrhunske rezultate na svjetskoj razini; sama metoda nema gornju granicu. No, da bi ušao ispod 15 sekundi, vrlo vjerojatno ćeš morati svladati svih 42 CMLL algoritama. Ali to je za drugu fazu. Za ulazak ispod 30 sekundi, to nije potrebno.

Osim toga, gotovo svaki svjetski igrač koji se bavi jednoručnim slaganjem koristi Roux metodu, jer je ona uistinu vrlo pogodna i za slaganje jednom rukom.

**Najbrži rezultati s Roux metodom na službenim WCA natjecanjima:**

-   Pojedinačno 4.11 sekundi, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipini), Valenzuela Cubing Open 2023., prepoznat kao najbrže službeno pojedinačno slaganje Roux metodom ([video rekonstrukcije](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Prosjek 5.98 sekundi, također on, 2019. godine, tada azijski rekord i treći službeni sub-6 prosjek u povijesti ([WCA podaci](https://www.worldcubeassociation.org/persons/2017VILL41))
-   On je također [svjetski rekorder u jednoručnom slaganju](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): prosjek 8.09, pojedinačno 6.05 (2024.). U jednoručnoj zajednici, Roux se općenito smatra optimalnom metodom.

Mislim da je ovaj "posao" vrlo isplativ. Za dvije do tri sekunde sporijeg CMLL-a, dobivaš: da znaš što radiš u svakom koraku, da nećeš zaboraviti kako slagati kocku čak i ako je ne dotakneš tri mjeseca, te da možeš smisliti rješenje za bilo koju kocku koju nikad prije nisi vidio/vidjela.

## Zaključak

![Slaganje završeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Od sposobnosti slaganja kocke do ulaska ispod 30 sekundi, to nije proces učenja algoritama napamet, već proces treniranja koordinacije ruku, očiju i mozga.

Četiri faze, četiri stvari: prvo nauči gledati kocku bez rotiranja cijele kocke, zatim nauči slagati Drugi blok bez uništavanja Prvog bloka, potom nauči gledati unaprijed dok izvodiš trenutni korak, i na kraju pusti da ti ruke prate oči.

Algoritmi nisu izvor brzine. Promatranje je.

Nauči stvarati pozitivnu povratnu informaciju kroz napredak u svakoj fazi. Čak i vježbanje fluidnosti može biti manje dosadno, pogotovo kada otkriješ iznenađenje novog rekorda. Posebno u početnoj i srednjoj fazi, svakodnevno ćeš iskusiti radost obaranja rekorda.

Svi algoritmi i situacije spomenute u članku organizirani su u [zbirci algoritama za Roux metodu](/hr/projects/rubiks-cube/roux). Vrati se i provjeri kad zapneš.

Svijet Rubikove kocke nudi beskrajnu zabavu. Želim ti da uživaš!

## Dodatak 1: Popis vježbi po fazama

**Faza jedan (> 60 s)**

-   Fiksiraj kut promatranja, ne rotiraj kocku tijekom cijelog slaganja.
-   Pronađi sljedeći željeni komad bez pauze.
-   Slow solving, izgovori namjeru svakog koraka.
-   Vježbaj samo Prvi blok (FB), ponovi 50 puta.

**Faza dva (60 → 40 s)**

-   Drugi blok (SB) slaži samo s R, r, M, U, ne dirajući Prvi blok.
-   Vježbaj dvostupanjski CMLL.
-   Vježbaj ritam M' U M' U, 5 minuta dnevno.

**Faza tri (40 → 30 s)**

-   Pauziraj nakon CMLL-a i jednim pogledom odredi broj krivo orijentiranih rubnjaka.
-   Slow solving + look-ahead: oči uvijek prate sljedeći komad.
-   Najmanje 20 kvalitetnih složenja dnevno.

**Faza četiri (< 30 s)**

-   Snimaj se i traži pauze.
-   Finger tricks: R U R' U' jednoprsta tehnika, M-sloj prstenjakom.
-   20 kvalitetnih složenja dnevno, bez gomilanja.

## Dodatak 2: Alati

-   **csTimer**: [cstimer.net](https://cstimer.net/). Uključi statistiku Ao5 / Ao12 / Ao100; Ao100 je tvoja prava razina, pojedinačni rezultati su stvar sreće.
-   **3D kocka**: [philoli.com/zh/projects/rubiks-cube](/hr/projects/rubiks-cube/). Svi algoritmi iz ovog članka mogu se unijeti ovdje i pogledati animaciju.
-   **Zbirka algoritama za Roux metodu (prilagođena početnicima)**: [philoli.com/zh/projects/rubiks-cube/roux](/hr/projects/rubiks-cube/roux). Uobičajeni inserti za Prvi blok i Drugi blok, 9 algoritama za dvostupanjski CMLL, svi slučajevi LSE-a (EO, UL/UR, zadnja četiri rubnjaka). Svaki prikaz može se otvoriti u 3D kocki, automatski skrivajući nevažne komade i ističući rubnjake koji se pomiču.
-   **csTimer analizator vježbanja**: [philoli.com/zh/projects/rubiks-cube/analyzer](/hr/projects/rubiks-cube/analyzer). Povuci i ispusti izvezenu datoteku iz csTimera i moći ćeš vidjeti svoj napredak rezultata, krivulje Ao5/Ao12/Ao100, napredak PB-a, tablicu prekretnica (kada si prvi put ušao/ušla ispod 60, 40, 30 sekundi) i krivulju vježbanja prema zakonu snage. Sve slike u ovom članku potječu odavde. Podaci se obrađuju samo u tvom pregledniku i ne prenose se. Ako nemaš izvezenu datoteku, možeš prvo učitati mojih 4441 podataka da vidiš kako funkcionira.

*Ovaj članak sadrži affiliate linkove za Amazon: Kupnjom putem linkova, dobivam malu proviziju, a tvoja cijena ostaje ista.*

## Više za čitanje

-   [Kako složiti Rubikovu kocku bez algoritama: razumljivo i za osnovnoškolce](/hr/blog/solve-rubiks-cube-without-formulas)
