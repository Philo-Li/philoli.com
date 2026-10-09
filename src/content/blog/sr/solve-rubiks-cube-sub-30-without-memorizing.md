---
layout: blog
title: "Kako do Rubikove kocke ispod 30 sekundi bez pamćenja formula: Razumljivo čak i za osnovce"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: Svakodnevna zanimacija
description: "Trebalo mi je 89 dana, od prvog slaganja do proseka od 100 slaganja (Ao100) ispod 30 sekundi, bez pamćenja ijedne CFOP formule. Analiziraću 4441 zabeleženih slaganja u četiri faze: gde se zapinje u svakoj fazi, šta vežbati i zašto Roux metoda blokova ne zahteva pamćenje formula."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Četiri faze od 165 sekundi do 28 sekundi" />
</figure>

*Slika: Četiri faze od 165 sekundi do 28 sekundi. Faza dva je pokazala najbrži pad, dok je faza tri bila najduži period stagnacije.*

U prethodnom članku [„Kako sastaviti Rubikovu kocku bez pamćenja formula“](/zh/blog/solve-rubiks-cube-without-formulas/), naučili ste kako da sastavite kocku koristeći logiku komutatora, bez pamćenja formula. Taj članak je naišao na izuzetno pozitivan prijem kod mnogih.

Ako ste pratili uputstva, verovatno vam sada treba dva do tri minuta, možda ste još uvek malo nespretni, ali uspete da je složite. Tada se javlja novo pitanje: kako postati brži?

Ako pretražite „brzo slaganje Rubikove kocke“, svi tutorijali će vam reći istu stvar: ako želite ispod 30 sekundi, prvo morate zapamtiti CFOP formule. 41 formula za F2L, 57 za OLL, 21 za PLL, ukupno 119 formula. Čak i ako F2L radite intuitivno, ne možete izbeći 78 formula za gornji sloj. Ako ih ne zapamtite, zaboravite na brzinu.

Ovaj članak želi da vam kaže da možete u potpunosti izbeći pamćenje formula i ipak stići ispod 30 sekundi.

<!--more-->

Od 7. maja 2026. godine, kada sam prvi put složio Rubikovu kocku, do 4. avgusta, kada sam dostigao Ao100 ispod 30 sekundi, prošlo je 89 dana. Za to vreme nisam zapamtio nijednu CFOP formulu, već sam se samo igrao u slobodno vreme. Ovo su moji zabeleženi podaci za 4441 slaganja.

![Kriva rezultata 4441 slaganja](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Slika: Kriva rezultata za 4441 slaganja. Siva linija prikazuje vreme svakog slaganja, tamna linija je trend Ao100, a crvene tačke su trenuci kada sam oborio lični rekord. Moj najbolji Ao100 je bio 28.22 sekunde.*

Svesnim, aktivnim i redovnim vežbanjem, svako može preći od početnika do sub-30 za nekoliko meseci.

Šta znači ispod 30 sekundi? Na [prvom Svetskom prvenstvu u Rubikovoj kocki 1982. godine](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), pobednički rezultat je bio 22.95 sekundi, što je kasnije WCA priznala kao prvi zvanični svetski rekord; 10. mesto je bilo 29.11 sekundi, a taj rezultat je postigla upravo Jessica Fridrich, kreatorka CFOP metode, o kojoj ćemo govoriti u sledećem odeljku. Drugim rečima, sub-30 rezultat koji danas amater postigne za nekoliko meseci, 1982. godine bi ga svrstao među prvih deset na svetu.

U nastavku ću podeliti sa vama kako sam to postigao korak po korak, i kompletno ću vam predstaviti ovu metodu vežbanja.

## Zašto svi u svetu brzog slaganja pamte formule

Prvo da razjasnimo jednu stvar: zašto su „brzina“ i „pamćenje formula“ u glavama ljudi povezani?

Početkom 1980-ih, profesorka češkog porekla Jessica Fridrich (kasnije istraživač digitalne forenzike na Univerzitetu Binghamton u SAD) razvila je metodu slaganja po slojevima, kasnije nazvanu CFOP (Cross, F2L, OLL, PLL). Ideja ove metode je da se sve moguće situacije gornjeg sloja iscrpno nabroje i za svaku situaciju dodeli optimalna formula. Prepoznate situaciju, primenite formulu, bez razmišljanja.

![Jessica Fridrich i Rubikova kocka u njenoj kancelariji](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Slika: Jessica Fridrich i Rubikova kocka u njenoj kancelariji. Godine 1982. osvojila je 10. mesto na prvom Svetskom prvenstvu sa 29.11 sekundi, a CFOP je nazvan po njoj (Fridrich metoda).*

Ova metoda je izuzetno brza. Gotovo svi svetski rekordi postignuti su CFOP metodom. Zato je svi tutorijali predaju, svi video snimci je objašnjavaju, „učenje brzog slaganja“ postalo je jednako „učenju CFOP-a“, a učenje CFOP-a je jednako pamćenju 119 formula.

Ali obratite pažnju, „pamćenje formula“ je karakteristika CFOP metode, a ne karakteristika „brzine“ same po sebi. CFOP zahteva pamćenje jer je izabrao put iscrpnog nabrajanja. Iscrpno nabrajanje zahteva memorisanje, to je cena koju plaća.

Postoji li metoda koja ne ide putem iscrpnog nabrajanja? Postoji.

## Rešenje bez pamćenja formula: Roux metoda blokova

Godine 2003., Francuz Gilles Roux predstavio je potpuno drugačiji pristup. Umesto da slaže sloj po sloj, prvo se grade dva 1×2×3 „bloka“ (mosta), zatim se rešavaju četiri ugla gornjeg sloja, i na kraju ostaje samo šest ivica, koje se rešavaju pokretima srednjeg sloja M i gornjeg sloja U.

![Gilles Roux na takmičenju](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Slika: Gilles Roux na takmičenju. Izrezano iz starog snimka takmičenja, slika je poboljšana AI-jem.*

U prethodnom članku već smo jednom složili kocku koristeći ovaj okvir. Ovde ćemo ponovo pogledati njegova četiri koraka, s fokusom na to „šta treba zapamtiti u svakom koraku“:

| Korak | Sadržaj | Formule za pamćenje |
| --- | --- | --- |
| 1. Levi blok | Sastaviti blok 1×2×3 | 0 formula, čista observacija |
| 2. Desni blok | Simetrično sastaviti drugi | 0 formula, čista observacija |
| 3. CMLL | Sređivanje četiri ugla gornjeg sloja | 9 formula, sve se mogu izvesti iz trostruke rotacije |
| 4. LSE | Poslednjih šest ivica | 0 formula, samo rotacije gornjeg i srednjeg sloja (M i U) |

Tri od četiri koraka ne zahtevaju nikakve formule. Jedini korak koji ih zahteva, CMLL, ima ukupno 42 situacije, ali vama ne treba 42 formule. Trostruka rotacija uglova koju smo spomenuli u prethodnom članku, R U' L' U R' U' L U, zajedno sa njenim ogledalnim slikama i nekoliko varijanti, može pokriti sve situacije, samo malo sporije.

![Četiri koraka Roux metode](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Slika: Četiri koraka Roux metode, svaki korak prikazuje samo kocke složene do tog trenutka: Levi blok → Desni blok → CMLL (četiri ugla gornjeg sloja) → LSE (poslednjih šest ivica). Snimljeno sa panela "Metoda" moje 3D stranice Rubikove kocke.*

Zato Roux može da se radi bez pamćenja formula: on komprimuje deo koji zahteva memorisanje na vrlo mali segment, a sve ostalo prepušta posmatranju, razumevanju i veštini.

## Od 165 sekundi do 28 sekundi: Četiri faze

Sledi moj stvarni put. Za svaku fazu sam naveo početak i kraj pomoću podataka, a zatim objasnio gde sam se zaglavio i šta sam vežbao. Vaše prepreke mogu biti drugačije, ali redosled će verovatno biti isti.

![Vremenski raspon četiri faze](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Slika: Vremenski raspon četiri faze. Faza jedan 3 nedelje, faza dva 11 dana, faza tri dva meseca, faza četiri do danas.*

### Faza jedan: 165 sekundi → 60 sekundi (1–3. nedelja)

**Podaci**: Od 7. maja do 27. maja. Prosečno 165 sekundi u prvoj nedelji, 68 sekundi u trećoj nedelji.

**Gde zapinješ**: Levi blok je bio vrlo nespretan, trebalo je dugo da pronađem svaku grupu boja. Nakon što pronađem grupu boja, početnici uvek vole da stanu i nastave da posmatraju.

![Gde početnici troše vreme](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Slika: Gde početnici troše vreme. Ruke su mirne, oči traže po kocki, vreme "traženja" je višestruko duže od vremena "okretanja".*

**Šta vežbati**:

Najveći neprijatelj u ovoj fazi nije sporost ruku, već sporost očiju. Vreme koje provedete „tražeći“ je daleko veće od vremena koje provedete „okrećući“. Dakle:

- Fiksirajte ugao gledanja, ne okrećite kocku. Kao što je rečeno u prethodnom članku, ugao posmatranja u Roux metodi je fiksan. U ovoj fazi treba da razvijete mišićnu memoriju „neokretanja kocke“. Svaki put kada poželite da okrenete kocku, stanite i zapitajte se: mogu li iz ovog ugla da vidim kocku koju želim?
- Polako slaganje. Bez štoperice, ali pokreti moraju biti povezani, bez ikakvih pauza. Svaki pokret može biti vrlo spor, ali ne sme biti prekida. Suština je da dok ruke izvode prethodni pokret, oči treba da se fokusiraju na sledeći pokret. Ovo je srž sporog slaganja. Iako zvuči kao da usporavate, zapravo trenirate oči da vide odnos između pozicije kocke i njene željene pozicije.
- Vežbajte samo prvi blok. Promešajte, sastavite levi blok, ponovo promešajte, ponovo sastavite levi blok. Ne idite dalje od toga. Prvi blok je najslobodniji korak u Roux metodi i najbolji za trening posmatranja.

Ne učite nikakve nove formule u ovoj fazi. Vaša trenutna prepreka nije u formulama.

### Faza dva: 60 sekundi → 40 sekundi (4–5. nedelja)

**Podaci**: Od 27. maja do 7. juna, 11 dana. Ovo je bio period najbržeg pada tokom celog procesa, i ujedno period kada sam najviše vežbao, 723 puta u prvoj nedelji juna.

**Gde zapinješ**: Pokreti nisu povezani. Kocka se zaglavljuje.

**Šta vežbati**:

U ovoj fazi morate optimizovati pokrete u svakoj fazi, na osnovu razumevanja, povećati veštinu svakog pokreta.

- Drugi blok. Drugi blok je teži od prvog, jer je prostora upola manje, i ne smete uništiti već završeni levi blok. Ključni potezi su R, r (desna dva sloja), M, U. U ovoj fazi treba naučiti kako da koristite r i M umesto R za pomeranje blokova, tako da levi blok nikada ne bude uništen. Optimizacija koraka pokreta znači uštedu vremena. Na primer, tri okretanja u smeru kazaljke na satu su isto što i jedno okretanje u suprotnom smeru.
- Vešto korišćenje M sloja. Poslednji korak Roux metode se u potpunosti oslanja na M i U, a tečnost okretanja M sloja direktno određuje vašu donju granicu. Koristite domali ili srednji prst za guranje M, počnite da vežbate ritam M' U M' U.
- CMLL prepoznavanje oblika. U prethodnom članku smo „isprobavanjem“ pronašli četiri ugla pomoću trostruke rotacije. Sada treba da počnete da prvo gledate, pa tek onda radite: pre nego što okrenete gornji sloj, bacite pogled na orijentaciju žute boje na četiri ugla, procenite da li ima 0, 1, 2 ili 4 dobra ugla, a zatim direktno izvedite odgovarajući pokret. Možete takođe, uz vrlo mali broj formula, postići značajno povećanje efikasnosti, što je vrlo isplativo. Veliki deo formula ne zahteva pamćenje napamet, već se razumeju dok se izvode.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pogled pri slaganju desnog bloka" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Slika levo: Pogled pri slaganju desnog bloka. Levi blok je završen, koriste se samo četiri pokreta R, r, M, U za ubacivanje desnih uglova i ivica, levi blok se nikada ne dira. Slika desno: M' U M, grupa pokreta koja se najviše koristi u drugom delu Roux metode. Srednji sloj ide gore, gornji sloj se okrene, srednji sloj se vraća, tri koraka za zamenu para ivica u gornjem i srednjem sloju.*

Možete pogledati moju [biblioteku formula za Roux metodu](/zh/projects/rubiks-cube/roux#cmll), CMLL stranica je dvostepena: 7 formula za orijentaciju + 2 formule za poziciju, ukupno 9 formula. Ovo je najisplativiji izbor za povećanje brzine, lako se uči, a svaka grupa koju savladate može vam uštedeti oko 1-2 sekunde. Uz malo vežbe, brzo ćete ih savladati, neke su već predstavljene u prethodnom članku, i ne morate ih sve pamtiti da biste došli ispod 30 sekundi.

![Prvi korak dvostepenog CMLL-a, sedam orijentacija ugaonih kocki](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Slika: Prvi korak dvostepenog CMLL-a, sedam orijentacija ugaonih kocki. U ptičjoj perspektivi, žuta boja je gornja boja, dok male trake sa spoljne strane označavaju boju gornje strane tog ugla koja je okrenuta bočno. Prepoznajte oblik po broju žutih uglova: 0 je H ili Pi, 1 je S ili AS, 2 je U, T ili L.*

Nakon što uskladite žute vrhove, možete koristiti ove dve formule za usklađivanje bočnih strana ugaonih blokova.

Ako je jedna strana već usklađena po boji, na primer, crvena je već na istoj strani, okrenite je na levu stranu, a zatim možete odabrati formulu za susednu zamenu. Ako nijedna strana nije usklađena po boji, odaberite formulu za dijagonalnu zamenu.

![Drugi korak dvostepenog CMLL-a, dve pozicije ugaonih kocki](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Slika: Drugi korak dvostepenog CMLL-a, dve pozicije ugaonih kocki. Na levoj slici, crvena boja dva ugla sa leve strane je već usklađena, koristi se susedna zamena; na desnoj slici nijedna strana nije usklađena, koristi se dijagonalna zamena.*

Možete kroz mnogo sporog slaganja da razumete svaku grupu formula, nemojte ih tretirati kao formule, već kao određene fiksne pokrete. Polako istražujući, i sami biste otkrili ove pokrete, ali njihovo navođenje ovde vam može uštedeti vreme.

Još nešto, što ima trenutni efekat više od bilo koje vežbe: investirajte u novu kocku. Ako još uvek imate onu staru kocku koja klacka i zaglavljuje se, kupite modernu 3x3 kocku sa magnetima. Najnovije kocke će vam pružiti osećaj inženjerske optimizacije, glatko okretanje, automatsko poravnavanje i gotovo nikakvo zaglavljivanje. Samo promena kocke može vam ubrzati prosečno vreme za 15 sekundi. Najisplativiji izbor je [MoYu RS3 M V5 (Maglev + Ball-Core verzija)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), oko dvadeset dolara, dovoljno za sub-20.

### Faza tri: 40 sekundi → 30 sekundi (5. nedelja – 13. nedelja, dva meseca)

**Podaci**: Od 7. juna do 4. avgusta. Ao100 je spušten sa 39.8 sekundi na 29.9 sekundi, što je trajalo 58 dana. U ovoj fazi povremeno se mogu pojaviti rezultati ispod 30 sekundi, ali samo uz mnogo sreće. Takođe, kako se prosečno vreme slaganja smanjuje, težina napredovanja za 1 sekundu eksponencijalno raste.

![Dnevni prosečni rezultati](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Slika: Dnevni prosečni rezultati. Nakon sredine juna, kriva se gotovo izravnala, i dva meseca se kretala između 30 i 40 sekundi.*

Ovo je faza platoa. Svako će se susresti s njom, ja sam ovde proveo dva meseca.

**Gde zapinješ**: Sređivanje šest ivica gornjeg sloja je vrlo sporo, logika se ne razume, svaki put se oslanjam na pokušaje i greške, gubeći mnogo vremena. Levi i desni blok još uvek nisu dovoljno uvežbani.

**Šta vežbati**:

- Prepoznavanje EO. U prethodnom članku smo govorili o tome da postoji samo nekoliko situacija loših ivica: 0, ne 0 i ne 4, 4 (po 2 gore i dole), 4 (sve u gornjem sloju), 4 (3 gore i 1 dole). Cilj ove faze je: u trenutku kada su blokovi složeni, bez brojanja, jednim pogledom prepoznati o kojoj se situaciji radi. Način vežbanja je da se kocka promeša, uradi se samo do kraja CMLL-a, zatim se pauzira, izgovori broj loših ivica, pa se nastavi.
- Mnogi ljudi ne razumeju pokrete ovde. Faza EO na kraju služi za formiranje oblika strelice sa 3 loše ivice gore i 1 lošom ivicom dole, jer se kompletan oblik, ako se jednom promeša, pretvara u oblik strelice. Dakle, obrnuto razmišljajući, to je poslednji korak pre završetka slaganja. Zato, bez obzira na broj loših ivica, cilj je uvek formirati strelicu. Ako imate 4 loše ivice gore, zamenom para gornjih i donjih ivica, jednu lošu ivicu spustite dole da biste postigli strelicu. Ako imate 2 gore i 2 dole, zamenite par gornjih i donjih ivica, jednu lošu ivicu podignite gore da biste postigli strelicu. Ako imate 1 gore i 1 dole, ili 2 gore, koristite M' U M da biste prvo došli do prethodnih situacija, pa onda formirali strelicu. Kroz mnogo posmatranja i razmišljanja, možete sami otkriti najbolje korake za situaciju 1/1.
- Mnogo vežbanja predviđanja (Look-ahead). Ovo je najvažnija stvar za prelazak sa 40 na 30 sekundi, i ujedno najkontraintuitivnija: okrećite sporije, gledajte dalje. Dok gradite levi blok, ne gledajte kocku koju upravo ubacujete, već gledajte gde je sledeća kocka. U početku će biti vrlo neobično, rezultati će se prvo pogoršati, ali ako izdržite nedelju dana, iznenada će se poboljšati.
- CMLL bez oklevanja. Ako o svakom pokretu morate razmisliti pre nego što se usudite da ga napravite, onda on još nije vaš. Vežbajte svaki pokret pojedinačno 50 puta, dok ruka ne krene sama čim vidite oblik.

![Oblik strelice](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Slika: Oblik strelice. Tri loše ivice gornjeg sloja (svetloplavo istaknute) poređane su u oblik strelice, pokazujući ka lošoj ivici u donjem sloju. U ovom trenutku, jedan M' U M pokret može ih sve četiri postaviti na mesto. [Otvorite ovo stanje u 3D Rubikovoj kocki](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) da biste ga videli korak po korak.*

![Šest EO oblika](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Slika: Šest EO oblika. Oznaka u gornjem levom uglu je broj loših ivica (gore/dole), žuta su dobre ivice, svetloplavi okvir su loše ivice. Samo za sliku strelice potrebna je formula, ostalih pet se prvo pretvaraju u strelicu.*

Za slaganje levih i desnih ivica, ovde treba da žuta bude gore, bela dole, a levi blok neka bude crven. Tada je potrebno složiti žuto-crvenu ivicu + žuto-narandžastu ivicu (istaknute oblasti). Glavna ideja je da se žuto-crvena ivica, putem zamene gornjih i donjih ivica, spusti na donju stranu, žuto-narandžasta ivica takođe spusti na donju stranu. Dve ivice će biti jedna naspram druge na donjoj strani, a zatim se gornji sloj okrene u odgovarajući položaj, M2 U ili M2 U' može da složi leve i desne ivice U sloja.

Da bih vam pomogao da bolje razumete, sve šest EO situacija sam organizovao u [biblioteci formula za Roux metodu, na LSE stranici](/zh/projects/rubiks-cube/roux#lse). Klikom na „Prikaži detalje“ za svaku sliku otvara se odgovarajuće stanje u 3D kocki, sa automatski istaknutim lošim ivicama. Na istoj stranici su i sve situacije za kasnije slaganje UL/UR i poslednje četiri ivice.

Smanjenje obima vežbanja u ovoj fazi nije loša stvar. Fazu platoa nećete preći pukim ponavljanjem, već ispravljanjem konkretne loše navike. Moje iskustvo je da se menja samo jedna stvar odjednom.

### Faza četiri: 30 sekundi → 28 sekundi (posle 13. nedelje)

**Podaci**: Posle 4. avgusta. Ukupan broj zabeleženih vežbanja u septembru je 122, mada je bilo mnogo vežbanja koja nisu zabeležena. Rubikovu kocku sam već prihvatio kao igračku na stolu, uzimam je da se igram kad god mi se prohte, nekoliko puta kada sam dobro raspoložen, nekoliko puta kada sam nervozan i anksiozan, nekoliko puta tokom pauza na poslu, nekoliko puta kada mi je dosadno. Slaganje kocke je postalo deo mog života. Ao100 se postepeno smanjio sa 29.9 na 28.2.

**Gde zapinješ**: Nema jasnog uskog grla, samo nedovoljna veština.

**Šta vežbati**:

Ako je vaša prosečna brzina još uvek iznad 30 sekundi, jedina stvar koju treba da uradite je da nastavite sa intenzivnim vežbanjem, a ne da pamtite nove formule.

Kontinuiranim sporim slaganjem vežbajte predviđanje, i bićete sve brži.

Uvek imajte kocku pri ruci i igrajte se njom, postavite je na mesto koje vam je lako dostupno, poput radnog stola, tako da možete da je uzmete i igrate se tokom pauza. Takođe, često snimajte svoje slaganja kako biste videli u kojoj fazi trošite najviše vremena, a zatim ciljano optimizujte. To je svrsishodno vežbanje; vaša brzina napretka ne zavisi od ukupnog broja običnih vežbanja, već od broja svrsishodnih vežbanja.

Tada ćete primetiti da, nakon što pređete period stagnacije od 30-35 sekundi, vaša brzina ponovo padne za nivo.

Do ove faze, čestitam vam, već ste veoma vešt igrač u očima početnika!

## Cena nepamćenja formula

Kad smo već kod toga, treba biti iskren. Nepamćenje formula nije besplatno.

CMLL faza je sporija. 42 situacije pokrivene sa 9 formula znače da se neke situacije moraju raditi dva puta. Ljudi koji znaju kompletan CMLL su brži od mene za dve do tri sekunde u ovom koraku.

Tehnika M sloja ima visok prag. Donji deo Roux metode se u potpunosti oslanja na M sloj. M sloj je teže okretati od R i U, lako se zaglavi, a zahtevi za samu kocku su veći.

Ne brinite o gornjoj granici. Među vrhunskim igračima ima i onih koji koriste Roux metodu i postižu svetske rezultate, sama metoda nema gornju granicu. Ali da biste ušli ispod 15 sekundi, verovatno ćete morati da dopunite svih 42 CMLL formule. Međutim, to je druga faza. Za ulazak ispod 30 sekundi, to vam nije potrebno.

Štaviše, gotovo svi svetski igrači koji slažu jednom rukom koriste Roux metodu, jer je zaista veoma pogodna za operacije jednom rukom.

**Najbrži rezultati sa Roux metodom na zvaničnim takmičenjima (WCA):**

- Jedno slaganja 4.11 sekundi, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipini), Valenzuela Cubing Open 2023, prepoznat kao zvanično najbrže jedno slaganja Roux metodom ([video rekonstrukcije](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Prosečno 5.98 sekundi, takođe on, 2019. godine, tada azijski rekord, i treći zvanični sub-6 prosek u istoriji ([WCA podaci](https://www.worldcubeassociation.org/persons/2017VILL41))
- On je takođe [svetski rekorder u slaganju jednom rukom](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): prosek 8.09, jedno slaganja 6.05 (2024), u krugovima za slaganje jednom rukom Roux metoda se generalno smatra optimalnim rešenjem.

Mislim da je ova razmena vrlo isplativa. Za dve do tri sekunde u CMLL fazi, dobijate: znate šta radite u svakom koraku, nećete zaboraviti ni nakon tri meseca bez kocke, i možete pronaći rešenje za bilo koju nepoznatu kocku.

## Zaključak

![Slaganje završeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Od prvog slaganja do ispod 30 sekundi nije proces pamćenja formula, već proces treninga koordinacije ruku, očiju i mozga.

Četiri faze, četiri stvari: prvo naučite da gledate kocku bez okretanja, zatim naučite da gradite desni blok bez uništavanja levog, zatim naučite da gledate sledeći korak dok radite tekući, i na kraju pustite ruke da prate oči.

Formule nisu izvor brzine. Posmatranje jeste.

Naučite da kroz napredak u svakoj fazi gradite pozitivnu povratnu informaciju, čak i vežbe za veštinu ne moraju biti dosadne, pogotovo kada vas iznenadi ponovno obaranje rekorda. Posebno u početnoj i srednjoj fazi, svakodnevno ćete doživljavati radost obaranja rekorda.

Sve formule i situacije spomenute u tekstu sam organizovao u [biblioteci formula za Roux metodu](/zh/projects/rubiks-cube/roux). Vratite se i proverite ih kada se zaglavite.

Svet Rubikove kocke nudi beskrajnu zabavu, želim vam da uživate.

## Dodatak 1: Lista vežbi po fazama

**Faza jedan (> 60 sekundi)**

- Fiksirajte ugao gledanja, ne okrećite kocku tokom celog slaganja
- Pronađite sledeću željenu boju bez pauze
- Polako slaganje, izgovarajte nameru svakog koraka
- Vežbajte samo levi blok, ponovite 50 puta

**Faza dva (60 → 40 sekundi)**

- Desni blok radite samo sa R, r, M, U, ne dirajte levi blok
- Vežbanje dvostepenog CMLL-a
- Vežbanje ritma M' U M' U, 5 minuta dnevno

**Faza tri (40 → 30 sekundi)**

- Pauzirajte nakon završetka CMLL-a, jednim pogledom recite broj loših ivica
- Polako slaganje + predviđanje: oči uvek gledaju sledeću kocku
- Najmanje 20 kvalitetnih slaganja dnevno

**Faza četiri (< 30 sekundi)**

- Snimajte video snimke kako biste pronašli pauze
- Tehnika: R U R' U' jednoprsta tehnika, M sloj domalim prstom
- 20 kvalitetnih slaganja dnevno, bez preteranog gomilanja vežbi

## Dodatak 2: Alati

- **csTimer**: [cstimer.net](https://cstimer.net/). Otvorite statistiku Ao5 / Ao12 / Ao100, Ao100 je vaš pravi nivo, pojedinačni rezultati su stvar sreće.
- **3D Rubikova kocka**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Sve formule iz ovog članka mogu se uneti ovde i pogledati animaciju.
- **Roux Method početnička biblioteka formula**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Uobičajeni obrasci umetanja za levi i desni blok, 9 formula za dvostepeni CMLL, sve situacije za LSE (EO, UL/UR, poslednje četiri ivice). Svaka kartica se može otvoriti u 3D Rubikovoj kocki, automatski skrivajući nebitne kocke i ističući ivice koje treba pomeriti.
- **csTimer analizator treninga**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Prevucite i ispustite datoteku izvezenu iz csTimer-a da biste videli trend svojih rezultata, krive Ao5/Ao12/Ao100, napredak PB-a, tabelu prekretnica (kada ste prvi put postigli sub-60, sub-40, sub-30) i krivu vežbanja Power Law. Sve slike u ovom članku potiču odavde. Podaci se obrađuju samo u vašem pretraživaču i neće biti otpremljeni. Ako nemate izvezenu datoteku, možete prvo učitati mojih 4441 podataka da biste videli efekat.

*Ovaj članak sadrži Amazon partnerske linkove: kupovinom preko linka, dobijam malu proviziju, a vaša cena ostaje ista.*

## Više za čitanje

- [Kako sastaviti Rubikovu kocku bez pamćenja formula: Razumljivo čak i za osnovce](/zh/blog/solve-rubiks-cube-without-formulas)
