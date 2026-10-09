---
layout: blog
title: "Kako riješiti Rubikovu kocku ispod 30 sekundi bez pamćenja formula: razumljivo i osnovnoškolcima"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Od prvog rješenja do Ao100 ispod 30 sekundi prošlo je 89 dana, bez pamćenja ijedne CFOP formule. Analiziram četiri faze uz pomoć 4441 mjerenog rješenja: gdje su bile prepreke u svakoj fazi, što sam vježbao i zašto Roux metoda mosta ne zahtijeva pamćenje formula."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Četiri faze od 165 do 28 sekundi" />
</figure>

*Slika: Četiri faze od 165 do 28 sekundi. Faza dva je najbrže opadala, faza tri je bila najduža faza platoa.*

U prethodnom članku [«Kako riješiti Rubikovu kocku bez formula»](/zh/blog/solve-rubiks-cube-without-formulas/), naučili ste kako riješiti Rubikovu kocku bez pamćenja formula, koristeći logiku komutatora. Taj je članak naišao na vrlo pozitivan odjek kod mnogih.

Ako ste slijedili upute, vjerojatno vam sada treba dvije do tri minute, uz malo žurbe i nespretnosti, ali uspijevate je riješiti. No, tada se nameće novo pitanje: kako postati brži?

Ako potražite "brzo rješavanje Rubikove kocke", svi će vam tutorijali reći isto: ako želite ispod 30 sekundi, prvo morate naučiti napamet CFOP formule. F2L ima 41 formulu, OLL 57, a PLL 21 – ukupno 119. Čak i ako F2L radite intuitivno, onih 78 formula za gornji sloj ne možete izbjeći. Ako ih ne naučite, zaboravite na brzinu.

Ovaj članak želi vam pokazati da možete postići vrijeme ispod 30 sekundi, a da pritom ne morate zapamtiti niti jednu formulu.

<!--more-->

Od 7. svibnja 2026., kada sam prvi put riješio kocku, do 4. kolovoza, kada sam dosegao Ao100 ispod 30 sekundi, prošlo je 89 dana. U tom razdoblju nisam naučio niti jednu CFOP formulu, već sam se samo zabavljao u slobodno vrijeme. Ovo su podaci o vremenu s 4441 zabilježenog rješenja.

![Krivulja rezultata za 4441 rješenje](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Slika: Krivulja rezultata za 4441 rješenje. Siva linija predstavlja pojedinačno vrijeme, tamnija linija trend Ao100, a crvene točke označavaju postizanje novih osobnih rekorda. Najbolji Ao100 iznosio je 28,22 sekunde.*

Svako, uz svjesno i aktivno vježbanje te održavanje frekvencije, može u nekoliko mjeseci postići prelazak s nule na sub-30.

Što znači ispod 30 sekundi? Na [prvom Svjetskom prvenstvu u Rubikovoj kocki 1982. godine](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), pobjedničko vrijeme bilo je 22,95 sekundi, što je kasnije WCA priznala kao prvi službeni svjetski rekord; deseto mjesto zauzela je Jessica Fridrich s 29,11 sekundi, ista ona koja je izumiteljica CFOP metode o kojoj ćemo govoriti u sljedećem odjeljku. Drugim riječima, sub-30 koji danas amater postigne nakon nekoliko mjeseci vježbanja, 1982. godine bi ga svrstao među deset najboljih na svijetu.

U nastavku ću s vama podijeliti kako sam to korak po korak postigao i predstaviti vam cijelu metodu vježbanja.

## Zašto svijet brzog rješavanja kocke pamti formule

Prvo da razjasnimo jednu stvar: zašto su "brzina" i "pamćenje formula" u glavama ljudi toliko povezani?

Početkom 1980-ih, profesorica češkog podrijetla Jessica Fridrich (kasnije je istraživala digitalnu forenziku na Sveučilištu Binghamton u SAD-u) osmislila je slojevitu metodu rješavanja, kasnije nazvanu CFOP (Cross, F2L, OLL, PLL). Ideja ove metode je da se pobroje sve moguće situacije za gornji sloj i svakoj situaciji dodijeli optimalna formula. Prepoznate situaciju, primijenite formulu i ne trebate razmišljati.

![Jessica Fridrich i Rubikove kocke u njenom uredu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Slika: Jessica Fridrich i Rubikove kocke u njenom uredu. 1982. godine osvojila je 10. mjesto na prvom Svjetskom prvenstvu s vremenom od 29,11 sekundi, a CFOP je nazvan po njoj (Fridrich metoda).*

Ova je metoda iznimno brza. Gotovo svi svjetski rekordi postignuti su CFOP-om. Stoga je svi tutorijali podučavaju, svi videi govore o njoj, "učenje brzog rješavanja" postalo je sinonim za "učenje CFOP-a", a učenje CFOP-a jednako je pamćenju 119 formula.

Međutim, imajte na umu da je "pamćenje formula" specifičnost CFOP metode, a ne svojstvo "brzine" same po sebi. CFOP zahtijeva pamćenje jer je odabrala put iscrpne pretrage. Iscrpna pretraga zahtijeva memoriju, što je cijena koju plaća.

Postoji li metoda koja ne ide tim putem iscrpne pretrage? Postoji.

## Metoda bez pamćenja formula: Roux metoda mosta

Godine 2003. Francuz Gilles Roux predstavio je potpuno drugačiji pristup. Umjesto slaganja sloj po sloj, prvo se grade dva "mosta" veličine 1×2×3 s lijeve i desne strane, zatim se rješavaju četiri kuta gornjeg sloja, a na kraju preostaje samo šest rubnih elemenata, koji se dovršavaju okretanjem srednjeg sloja M i gornjeg sloja U.

![Gilles Roux tijekom natjecanja](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Slika: Gilles Roux tijekom natjecanja. Izrezano iz ranih videozapisa natjecanja, slika je AI-jem poboljšana i povećana.*

U prethodnom smo članku već jednom riješili kocku koristeći ovaj okvir. Ovdje ćemo ponovno proći kroz četiri koraka, ovaj put se fokusirajući na "što treba zapamtiti u svakom koraku":

| Korak | Sadržaj | Formule koje treba zapamtiti |
| --- | --- | --- |
| 1. Lijevi most | Slaganje bloka 1×2×3 | 0, čisto promatranje |
| 2. Desni most | Simetrično slaganje drugog | 0, čisto promatranje |
| 3. CMLL | Postavljanje četiri kutna elementa gornjeg sloja | 9, sve se mogu izvesti iz 3-ciklusa |
| 4. LSE | Zadnjih šest rubnih elemenata | 0, samo rotacije gornjeg (U) i srednjeg (M) sloja |

U tri od četiri koraka ne trebaju vam nikakve formule. Jedini korak koji zahtijeva formule je CMLL, koji ukupno ima 42 situacije, ali ne trebate naučiti svih 42. Trostruka rotacija kutnih elemenata koju smo spomenuli u prošlom članku, R U' L' U R' U' L U, zajedno s njenom zrcalnom slikom i nekoliko varijanata, pokriva sve situacije, samo je malo sporija.

![Rouxova četiri koraka](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Slika: Četiri koraka Roux metode. Svaki korak prikazuje samo složene dijelove do te točke: Lijevi most → Desni most → CMLL (četiri kuta gornjeg sloja) → LSE (posljednjih šest rubnih elemenata). Izrezano s panela 'Rješenja' moje 3D kocke.*

To je razlog zašto Roux metoda ne zahtijeva pamćenje formula: ona komprimira dio koji zahtijeva pamćenje u vrlo mali kutak, a ostatak prepušta promatranju, razumijevanju i vještini.

## Od 165 sekundi do 28 sekundi: četiri faze

U nastavku je moj stvarni put. Svaku fazu sam označio podacima o početku i kraju, a zatim objasnio gdje sam zapinjao i što sam vježbao u toj fazi. Vaše prepreke možda neće biti iste kao moje, ali je redoslijed vrlo vjerojatno sličan.

![Vremenski raspon četiri faze](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Slika: Vremenski raspon četiri faze. Faza prva 3 tjedna, faza druga 11 dana, faza treća dva mjeseca, faza četvrta do danas.*

### Faza prva: 165 sekundi → 60 sekundi (1.-3. tjedan)

**Podaci**: Od 7. do 27. svibnja. Prosjek prvog tjedna bio je 165 sekundi, a trećeg tjedna 68 sekundi.

**Gdje sam zapinjao**: Lijevi most mi je bio vrlo nespretan, trebalo mi je dugo da pronađem svaku grupu boja. Nakon što bi pronašli grupu boja, početnici uvijek vole zastati i nastaviti promatrati.

![Gdje početnici troše vrijeme](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Slika: Gdje početnici troše vrijeme. Ruke stoje, oči traže po kocki, vrijeme "traženja" je višestruko duže od vremena "okretanja".*

**Što sam vježbao**:

Najveći neprijatelj u ovoj fazi nije sporost ruku, već sporost očiju. Vrijeme koje provodite "tražeći" daleko je veće od vremena "okretanja". Stoga:

- Fiksirajte kut promatranja, ne okrećite kocku. Kao što je spomenuto u prethodnom članku, Rouxov kut promatranja je fiksan. U ovoj fazi morate pretvoriti "ne okretanje kocke" u mišićnu memoriju. Svaki put kada poželite okrenuti kocku, zastanite i zapitajte se: mogu li s ovog kuta vidjeti element koji mi treba?
- Polagano okretanje. Bez mjerenja vremena, ali pokreti moraju biti kontinuirani, bez ikakvih zaustavljanja. Svaki pokret može biti vrlo spor, ali bez prekida. Ključno je da dok ruka izvodi prethodni pokret, oči već prate sljedeći; to je srž sporog okretanja. Iako zvuči kao da usporavate, zapravo trenirate svoje oči da vide odnos između položaja elementa i mjesta gdje bi trebao ići.
- Vježbajte samo prvi most. Promiješajte, složite lijevi most, ponovno promiješajte, ponovno složite lijevi most. Ne nastavljajte dalje. Prvi most je najslobodniji korak u Roux metodi i najbolji za treniranje promatranja.

Ne učite nikakve nove formule u ovoj fazi. Vaša trenutna prepreka nije u formulama.

### Faza druga: 60 sekundi → 40 sekundi (4.-5. tjedan)

**Podaci**: Od 27. svibnja do 7. lipnja, 11 dana. To je bio najbrži pad u cijelom procesu, a ujedno i razdoblje kada sam najviše vježbao, s 723 rješenja u prvom tjednu lipnja.

**Gdje sam zapinjao**: Pokreti nisu bili fluidni. Kocka bi se zaglavljivala.

**Što sam vježbao**:

U ovoj fazi morate optimizirati pokrete u svakoj fazi, te na temelju razumijevanja povećati vještinu svakog pokreta.

- Drugi most. Drugi most je teži od prvog jer je prostor prepolovljen, a već složeni lijevi most ne smije se narušiti. Ključni potezi su R, r (desna dva sloja), M, U. U ovoj fazi morate naučiti koristiti r i M umjesto R za pomicanje elemenata, tako da lijevi most ostane netaknut. Optimizacija koraka pokreta štedi vrijeme. Na primjer, tri okretanja u smjeru kazaljke na satu jednaka su jednom okretanju u suprotnom smjeru.
- Vješta upotreba M-sloja. Posljednji korak Roux metode u potpunosti se oslanja na M i U poteze, a fluidnost okretanja M-sloja izravno određuje vašu donju granicu brzine. Koristite prstenjak ili srednji prst za guranje M-sloja i počnite vježbati ritam poput M' U M' U.
- Prepoznavanje CMLL oblika. U prethodnom smo članku "isprobavali" četiri kuta pomoću trostruke rotacije. Sada je vrijeme da prvo pogledate, pa tek onda napravite: prije okretanja gornjeg sloja, bacite pogled na orijentaciju žute boje na četiri kuta, procijenite je li 0, 1, 2 ili 4 kuta ispravno postavljena, a zatim izravno izvedite odgovarajući pokret. Možete postići značajno povećanje učinkovitosti uz vrlo mali broj formula, što je vrlo isplativo. Veliki dio tih formula ne treba pamtiti napamet, već ih razumjeti dok ih izvodite.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Perspektiva pri slaganju desnog mosta" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Slika lijevo: Perspektiva pri slaganju desnog mosta. Lijevi most je završen, a kutni i rubni elementi desne strane umetnuti su koristeći samo četiri rotacije: R, r, M, U, tako da se lijevi most nikada ne dodiruje. Slika desno: M' U M, najčešće korištena sekvenca poteza u drugom dijelu Roux metode. Srednji sloj se podiže, gornji sloj se okrene, srednji sloj se vraća – tri koraka za zamjenu para rubnih elemenata između gornjeg i srednjeg sloja.*

Možete pogledati moju [biblioteku formula za Roux metodu](/zh/projects/rubiks-cube/roux#cmll). Stranica za CMLL je dvostupanjska: 7 formula za orijentaciju + 2 formule za pozicioniranje, ukupno 9 formula. To je isplativ izbor za povećanje brzine, lako se uči, a svaka vješta grupa može vas ubrzati za otprilike 1-2 sekunde. Uz malo vježbe, brzo ćete ih svladati, a neke su već predstavljene u prethodnom članku. Ne morate ih sve zapamtiti da biste došli ispod 30 sekundi.

![Prvi korak dvostupanjskog CMLL-a, sedam orijentacija kutnih elemenata](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Slika: Prvi korak dvostupanjskog CMLL-a, sedam orijentacija kutnih elemenata. Na ptičjoj perspektivi, žuta boja je boja gornje strane okrenuta prema gore, a male trake sa strane označavaju da je boja gornje strane tog kuta okrenuta bočno. Prepoznajte oblik prema broju žutih kutova: 0 je H ili Pi, 1 je S ili AS, 2 je U, T ili L.*

Nakon što poravnate žute gornje strane, možete koristiti ove dvije formule za poravnavanje bočnih strana kutnih elemenata.

Ako je jedna strana već usklađena po boji, na primjer, crvena je već na istoj strani, okrenite je na lijevu stranu, a zatim možete odabrati formulu za susjednu zamjenu. Ako nijedna strana nije usklađena po boji, odaberite formulu za dijagonalnu zamjenu.

![Drugi korak dvostupanjskog CMLL-a, dvije pozicije kutnih elemenata](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Slika: Drugi korak dvostupanjskog CMLL-a, dvije pozicije kutnih elemenata. Na lijevoj slici, crvena boja na dva kuta s lijeve strane već je usklađena, koristi se susjedna zamjena; na desnoj slici nijedna strana nije usklađena, koristi se dijagonalna zamjena.*

Možete razumjeti svaku grupu formula kroz mnogo sporog okretanja. Ne tretirajte ih kao formule, već kao određene fiksne pokrete koje biste s vremenom sami otkrili. Ovdje su navedene kako biste skratili put.

I još jedna stvar, koja donosi brže rezultate od bilo koje vježbe: potrošite malo novca i kupite novu kocku. Ako još uvijek imate staru kocku koja klapara i zaglavljuje se pri okretanju, nabavite modernu 3x3 kocku s magnetima. Najnovije kocke omogućit će vam da osjetite snagu inženjerske optimizacije – okretanje je glatko, automatski se vraća u položaj i gotovo nikada se ne zaglavljuje. Samo zamjena kocke može vam odmah ubrzati prosječno vrijeme za 15 sekundi. Najbolji omjer cijene i kvalitete je [MoYu RS3 M V5 (verzija s magnetskom levitacijom + kuglastom jezgrom)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), koja košta oko dvadesetak dolara i bit će vam dovoljna sve do sub-20.

### Faza treća: 40 sekundi → 30 sekundi (5. - 13. tjedan, dva mjeseca)

**Podaci**: Od 7. lipnja do 4. kolovoza. Ao100 je s 39,8 sekundi spušten na 29,9 sekundi, što je trajalo 58 dana. U ovoj fazi povremeno se moglo dogoditi vrijeme ispod 30 sekundi, ali samo uz iznimnu sreću. Nadalje, kako prosječno vrijeme rješavanja pada, težina poboljšanja za 1 sekundu eksponencijalno raste.

![Dnevni prosječni rezultati](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Slika: Dnevni prosječni rezultati. Nakon sredine lipnja krivulja je gotovo postala ravna, zadržavajući se između 30 i 40 sekundi puna dva mjeseca.*

Ovo je faza platoa. Svatko će je doživjeti, a ja sam se zadržao ovdje dva mjeseca.

**Gdje sam zapinjao**: Rješavanje šest rubnih elemenata gornjeg sloja bilo je vrlo sporo, nisam razumio logiku, svaki put sam se oslanjao na ponovljene pokušaje, gubeći mnogo vremena. Lijevi i desni most još uvijek nisu bili dovoljno uvježbani.

**Što sam vježbao**:

- Prepoznavanje EO. U prethodnom smo članku spomenuli da postoji samo nekoliko situacija za "loše" rubove: 0, ne 0 i ne 4, 4 (2 gore, 2 dolje), 4 (sve na gornjem sloju), 4 (3 gore, 1 dolje). Cilj ove faze je: u trenutku kada je most završen, bez brojanja, jednim pogledom prepoznati o kojoj se situaciji radi. Metoda vježbanja je promiješati kocku, složiti samo do kraja CMLL-a, zatim pauzirati, reći broj "loših" rubova, pa nastaviti.
- Mnogi ljudi ne razumiju poteze ovdje. Faza EO u konačnici služi za stvaranje oblika strijele s 3 gore i 1 dolje, jer je kompletni oblik, nakon samo jednog pomaka, već oblik strijele. Stoga, razmišljajući unatrag, to je posljednji korak prije potpunog rješenja. Dakle, bez obzira na broj "loših" rubova, krajnji cilj je stvoriti strelicu. Ako postoje 4 "loša" ruba gore, zamijenite par gornjih i donjih rubova kako biste jedan "loš" rub spustili i stvorili strelicu. Ako su 2 gore i 2 dolje, zamijenite par gornjih i donjih rubova kako biste jedan "loš" rub podigli i stvorili strelicu. Ako je 1 gore i 1 dolje, ili 2 gore, koristite M' U M kako biste prvo prešli na prethodne situacije, a zatim stvorili strelicu. Kroz mnogo promatranja i razmišljanja, možete sami otkriti najbolje korake za situaciju 1/1.
- Mnogo vježbanja anticipacije (Look-ahead). Ovo je najvažnija stvar za prelazak s 40 na 30 sekundi, a ujedno i najkontraintuitivnija: okrećite sporije, gledajte dalje. Kada slažete lijevi most, ne gledajte element koji trenutno umećete, već tražite gdje je sljedeći. U početku će biti vrlo neugodno, rezultati će se prvo pogoršati, ali nakon tjedan dana upornosti iznenada će se poboljšati.
- CMLL bez oklijevanja. Ako svaki put morate razmisliti prije nego što izvedete neki potez, to još nije vaše. Vježbajte svaki potez pojedinačno 50 puta, dok vam se ruka ne pokrene čim vidite oblik.

![Oblik strijele](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Slika: Oblik strijele. Tri "loša" ruba gornjeg sloja (označena plavom bojom) tvore strelicu koja pokazuje prema "lošem" rubu donjeg sloja. U ovom trenutku, jedan M' U M potez može istovremeno riješiti sva četiri. [Otvorite ovo stanje u 3D kocki](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) za korak-po-korak prikaz.*

![Šest EO oblika](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Slika: Šest EO oblika. Oznaka u gornjem lijevom kutu je broj "loših" rubova (gore / dolje), žuta su "dobri" rubovi, a plavi okvir su "loši" rubovi. Samo oblik strijele zahtijeva formulu, ostalih pet se prvo pretvara u strelicu.*

Za rješavanje lijevih i desnih rubnih elemenata, uzmimo za primjer žutu boju kao gornju stranu, bijelu kao donju stranu i crveni lijevi most. Tada je potrebno postaviti žuto-crveni rubni element + žuto-narančasti rubni element (označeni dijelovi). Glavna ideja je da se žuto-crveni rubni element, uz pomoć zamjene gornjih i donjih rubova, spusti na donju stranu, te da se žuto-narančasti rubni element također spusti na donju stranu. Kada su ta dva rubna elementa na donjoj strani jedan nasuprot drugome, gornju stranu treba okrenuti u odgovarajući položaj, a zatim M2 U ili M2 U' mogu riješiti lijeve i desne rubne elemente U-sloja.

Kako bih vam pomogao da bolje razumijete, svih šest EO oblika sam organizirao na [LSE stranici biblioteke formula Roux metode](/zh/projects/rubiks-cube/roux#lse). Klikom na "pogledaj detalje" za svaku sliku otvorit će se odgovarajuće stanje u 3D kocki, s automatski označenim "lošim" rubovima. Na istoj stranici nalaze se i svi slučajevi za kasnije UL/UR pozicioniranje i posljednja četiri ruba.

Smanjenje količine vježbanja u ovoj fazi nije loša stvar. Fazu platoa nećete preći pukim gomilanjem vježbe, već promjenom jedne specifične loše navike. Moje iskustvo je da se svaki put mijenja samo jedna.

### Faza četvrta: 30 sekundi → 28 sekundi (nakon 13. tjedna)

**Podaci**: Nakon 4. kolovoza. Ukupan broj zabilježenih vježbi u rujnu bio je 122, iako mnoge vježbe zapravo nisu bile zabilježene. Kocku sam već integrirao u svoj život kao igračku na stolu, uzimam je i igram se kad sam dobro raspoložen, kad sam frustriran ili tjeskoban, u pauzama na poslu, kad mi je dosadno. Ao100 se postupno smanjio s 29,9 na 28,2 sekunde.

**Gdje sam zapinjao**: Nije bilo jasnih prepreka, samo nedostatak vještine.

**Što sam vježbao**:

Ako je vaša prosječna brzina još uvijek iznad 30 sekundi, jedino što trebate učiniti je nastaviti intenzivno vježbati, umjesto da učite nove formule napamet.

Stalnim vježbanjem anticipacije kroz sporo okretanje, postat ćete sve brži.

Uzmite kocku i igrajte se s njom kad god imate priliku. Držite je nadohvat ruke, recimo na radnom stolu, pa je možete uzeti i igrati se u pauzama od posla. Također, često snimajte svoje rješavanje kako biste vidjeli u kojoj fazi trošite najviše vremena, a zatim ciljano optimizirajte taj dio. To je namjerno vježbanje – vaša brzina napretka ne ovisi o ukupnom broju običnih vježbi, već o broju namjernih vježbi.

Tada ćete otkriti da, nakon što prođete kroz fazu platoa od 30-35 sekundi, vaša brzina ponovno pada za jednu razinu.

Čestitam vam ako ste došli do ove faze – u očima početnika, već ste vrlo vješt igrač!

## Cijena ne pamćenja formula

Kad smo već kod toga, budimo iskreni. Ne pamćenje formula nije besplatno.

Faza CMLL-a je spora. Pokrivanje 42 situacije s 9 formula znači da neke situacije morate napraviti dvaput. Oni koji znaju cijeli set CMLL-a brži su od mene za dvije do tri sekunde u ovom koraku.

Tehnika M-sloja ima visok prag. Drugi dio Roux metode u potpunosti ovisi o M-sloju, koji je teži za okretanje od R i U, lakše se zaglavi i zahtijeva kvalitetniju kocku.

Ne brinite o gornjoj granici. Među vrhunskim igračima ima onih koji koriste Roux metodu i dospijevaju u svjetski vrh; sama metoda nema gornju granicu. No, da biste ušli ispod 15 sekundi, vjerojatno ćete morati naučiti svih 42 CMLL formule. Ali to je stvar druge faze. Za ulazak ispod 30 sekundi, to nije potrebno.

Štoviše, gotovo svaki svjetski igrač koji rješava kocku jednom rukom koristi Roux metodu, jer je ona zaista vrlo pogodna i za rješavanje jednom rukom.

**Najbrži rezultati s Roux metodom na službenim natjecanjima (WCA):**

- Pojedinačno 4,11 sekundi, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipini), Valenzuela Cubing Open 2023., prepoznat kao najbrže službeno pojedinačno Roux rješenje ([video rekonstrukcije](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Prosječno 5,98 sekundi, također on, 2019. godine, tadašnji azijski rekord i treći službeni sub-6 prosjek u povijesti ([WCA podaci](https://www.worldcubeassociation.org/persons/2017VILL41))
- Također je [svjetski rekorder u rješavanju jednom rukom](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): prosječno 8,09, pojedinačno 6,05 (2024.), u krugovima rješavanja jednom rukom Roux se općenito smatra optimalnom metodom.

Mislim da je ova razmjena vrlo isplativa. Dva do tri sekunde CMLL vremena zamjenjujete sa sljedećim: znate što radite u svakom koraku, nećete zaboraviti ni ako tri mjeseca ne dodirnete kocku, i možete smisliti rješenje za bilo koju kocku koju nikada prije niste vidjeli.

## Sažetak

![Rješenje dovršeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Od sposobnosti rješavanja kocke do vremena ispod 30 sekundi, to nije proces pamćenja formula, već proces treniranja koordinacije ruku, očiju i mozga.

Četiri faze, četiri stvari: prvo naučite gledati bez okretanja kocke, zatim naučite slagati desni most bez narušavanja lijevog, zatim naučite gledati unaprijed dok izvodite trenutni korak, i na kraju pustite da ruke prate oči.

Formule nisu izvor brzine. Promatranje je.

Naučite graditi pozitivnu povratnu informaciju kroz napredak u svakoj fazi; čak i vježbe spretnosti mogu biti manje dosadne, pogotovo kada otkrijete iznenađenje novog rekorda. Posebno u početnoj i srednjoj fazi, svakodnevno ćete doživljavati radost obaranja rekorda.

Sve formule i situacije spomenute u članku organizirao sam u [biblioteci formula Roux metode](/zh/projects/rubiks-cube/roux). Vratite se i provjerite kada zapnete.

Svijet Rubikove kocke nudi beskrajnu zabavu. Želim vam ugodno igranje.

## Dodatak 1: Popis vježbi za svaku fazu

**Faza prva (> 60 sekundi)**

- Fiksirajte kut promatranja, ne okrećite kocku tijekom cijelog procesa rješavanja.
- Pronađite sljedeći željeni element bez zaustavljanja.
- Polagano okretanje, izgovorite namjeru svakog poteza.
- Vježbajte samo lijevi most, ponovite 50 puta.

**Faza druga (60 → 40 sekundi)**

- Desni most slažite koristeći samo R, r, M, U, ne dirajući lijevi most.
- Vježbanje dvostupanjskog CMLL-a.
- Vježbanje ritma M' U M' U, 5 minuta dnevno.

**Faza treća (40 → 30 sekundi)**

- Nakon završetka CMLL-a, pauzirajte i jednim pogledom recite broj "loših" rubova.
- Polagano okretanje + anticipacija: oči uvijek traže sljedeći element.
- Najmanje 20 visokokvalitetnih rješenja dnevno.

**Faza četvrta (< 30 sekundi)**

- Snimajte videozapise kako biste pronašli mjesta zaustavljanja.
- Tehnika: R U R' U' jednoprsta tehnika, M-sloj prstenjakom.
- 20 visokokvalitetnih rješenja dnevno, bez pretjerivanja.

## Dodatak 2: Alati

- **csTimer**: [cstimer.net](https://cstimer.net/). Uključite Ao5 / Ao12 / Ao100 statistiku; Ao100 je vaše pravo umijeće, pojedinačni rezultati su stvar sreće.
- **3D Rubikova kocka**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Sve formule iz ovog članka mogu se ovdje unijeti i pogledati animacije.
- **Biblioteka formula Roux metode prilagođena početnicima**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Uobičajeni obrasci umetanja za lijevi i desni most, 9 formula za dvostupanjski CMLL, svi slučajevi LSE (EO, UL/UR, posljednja četiri ruba). Svaki se primjer može otvoriti u 3D kocki, s automatskim skrivanjem nebitnih elemenata i isticanjem rubova koje treba pomaknuti.
- **csTimer analizator vježbanja**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Povucite i ispustite datoteku izvezenu iz csTimera i vidjet ćete vlastiti napredak, Ao5/Ao12/Ao100 krivulje, napredak osobnih rekorda (kada ste prvi put postigli sub-60, sub-40, sub-30) i krivulju vježbanja prema zakonu snage. Sve slike u ovom članku potječu odavde. Podaci se obrađuju samo u vašem pregledniku i ne prenose se. Ako nemate izvezenu datoteku, možete prvo učitati mojih 4441 podataka da vidite kako to izgleda.

*Ovaj članak sadrži Amazon affiliate linkove: ako kupite putem linka, dobit ću malu proviziju, a vaša cijena ostaje ista.*

## Više za čitanje

- [Kako riješiti Rubikovu kocku bez formula: razumljivo i osnovnoškolcima](/zh/blog/solve-rubiks-cube-without-formulas)
