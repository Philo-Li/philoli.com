---
layout: blog
title: "Kako složiti Rubikovu kocku ispod 30 sekundi bez pamćenja algoritama: Razumljivo čak i za osnovce"
date: 2026-10-09 12:00:00
tags:
  - Rubikova kocka
  - Tutorijal
  - Roux metoda
  - Spidkubing
  - Svesna vežba
categories: Svakodnevna zanimacija
description: "Trebalo mi je 89 dana od prvog slaganja do Ao100 ispod 30 sekundi, bez pamćenja ijednog CFOP algoritma. Koristeći podatke od 4441 slaganja, analiziram četiri faze: gde zapinješ u svakoj fazi, šta da vežbaš i zašto Roux metoda ne zahteva pamćenje algoritama."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Četiri faze od 165 sekundi do 28 sekundi" />
</figure>

*Slika: Četiri faze od 165 sekundi do 28 sekundi. Faza dva je donela najbrži napredak, dok je faza tri bila najduži period stagnacije.*

U prethodnom članku [„Kako složiti Rubikovu kocku bez algoritama“](/sr/blog/solve-rubiks-cube-without-formulas/), naučili ste kako da složite Rubikovu kocku bez pamćenja algoritama, koristeći logiku komutatora. Taj članak je naišao na izuzetno topao prijem.

Ako ste ga pratili, verovatno vam sada treba dva-tri minuta da složite kocku, možda uz malo nespretnosti, ali je ipak složite. Tada će se pojaviti novo pitanje: kako postati brži?

Ako pretražite „spidkubing“, svi tutorijali će vam reći istu stvar: ako želite da uđete ispod 30 sekundi, prvo morate da naučite CFOP algoritme. F2L ima 41 algoritam, OLL 57, a PLL 21 – ukupno 119. Čak i ako F2L radite intuitivno, 78 algoritama za gornji sloj ne možete izbeći. Ako ih ne zapamtite, nećete biti brzi.

Ovaj članak želi da vam kaže da možete ući ispod 30 sekundi, a da pritom uopšte ne pamtite algoritme.

<!--more-->

Počeo sam da slažem Rubikovu kocku 7. maja 2026. godine, a 4. avgusta sam postigao Ao100 ispod 30 sekundi. Trebalo mi je 89 dana. Za to vreme nisam zapamtio nijedan CFOP algoritam, već sam se samo zabavljao u slobodno vreme. Ovo su podaci o vremenu od mojih 4441 slaganja, koja sam zabeležio.

![Kriva rezultata 4441 slaganja](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Slika: Kriva rezultata 4441 slaganja. Siva linija predstavlja vreme svakog slaganja, tamna linija je Ao100 trend, a crvene tačke su trenuci kada sam oborio lični rekord. Najbolji Ao100 iznosi 28.22 sekunde.*

Svesnim i aktivnim vežbanjem, uz održavanje redovnosti, svako može za nekoliko meseci preći put od početnika do sub-30 nivoa.

Šta znači složiti kocku ispod 30 sekundi? Na [prvom Svetskom prvenstvu u Rubikovoj kocki 1982. godine](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), pobedničko vreme je bilo 22.95 sekundi, što je WCA kasnije priznala kao prvi zvanični svetski rekord; deseto mesto je bilo 29.11 sekundi, a to vreme je postigla niko drugi do Džesika Fridrih, kreatorka CFOP metode o kojoj će biti reči u sledećem odeljku. Drugim rečima, amater koji danas postigne sub-30 za nekoliko meseci, 1982. godine bi bio među prvih deset u svetu.

U nastavku ću podeliti sa vama kako sam ja to korak po korak postigao, i predstaviti vam kompletnu metodu vežbanja.

## Zašto se u svetu spidkubinga sve vrti oko pamćenja algoritama

Prvo da razjasnimo jednu stvar: zašto su „brzina“ i „pamćenje algoritama“ tako čvrsto povezani u glavama ljudi?

Početkom 1980-ih, profesorka češkog porekla Jessica Fridrich (kasnije je istraživala digitalnu forenziku na Univerzitetu Binghamton u SAD) sistematizovala je metodu slaganja po slojevima, koja je kasnije nazvana CFOP (Cross, F2L, OLL, PLL). Ideja ove metode je sledeća: sve moguće situacije u gornjem sloju su iscrpno popisane, a za svaku situaciju je dodeljen optimalan algoritam. Prepoznate situaciju, izvedete algoritam i ne morate da razmišljate.

![Jessica Fridrich i Rubikova kocka u njenoj kancelariji](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Slika: Jessica Fridrich i Rubikova kocka u njenoj kancelariji. Godine 1982. osvojila je 10. mesto na prvom Svetskom prvenstvu sa 29.11 sekundi, a CFOP je nazvan po njoj (Fridrich metoda).*

Ova metoda je izuzetno brza. Gotovo svi svetski rekordi su postignuti CFOP metodom. Zato je svi tutorijali predaju, svi video snimci je objašnjavaju, „učenje spidkubinga“ je postalo jednako „učenju CFOP-a“, a učenje CFOP-a je jednako pamćenju 119 algoritama.

Ali obratite pažnju, „pamćenje algoritama“ je karakteristika CFOP metode, a ne karakteristika same „brzine“. CFOP zahteva pamćenje jer je izabrao put iscrpnog popisivanja. Iscrpno popisivanje zahteva memoriju, i to je cena koju ova metoda plaća.

Postoji li metoda koja ne ide ovim putem iscrpnog popisivanja? Postoji.

## Metoda slaganja bez pamćenja algoritama: Roux metoda

Godine 2003., Francuz Gilles Roux objavio je potpuno drugačiji pristup. Umesto da slaže sloj po sloj, on prvo gradi dva 1×2×3 „bloka“ (mosta) – levi i desni, zatim rešava četiri ugla gornjeg sloja (CMLL), i na kraju ostaje samo šest ivičnih elemenata koje rešava koristeći samo M i U okrete.

![Gilles Roux na takmičenju](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Slika: Gilles Roux na takmičenju. Isečak iz ranijeg takmičarskog videa, slika je AI restaurirana i uvećana.*

U prethodnom članku smo već jednom složili kocku koristeći ovaj okvir. Ovde ćemo ponovo pogledati njegove četiri koraka, s fokusom na to „šta treba zapamtiti za svaki korak“:

| Korak | Sadržaj | Algoritmi koje treba zapamtiti |
| --- | --- | --- |
| 1. Levi blok | Sklapanje 1×2×3 bloka | 0 algoritama, čisto posmatranje |
| 2. Desni blok | Simetrično sklapanje drugog bloka | 0 algoritama, čisto posmatranje |
| 3. CMLL | Postavljanje četiri ugla gornjeg sloja | 9 algoritama, svi se mogu izvesti iz 3-ciklusa |
| 4. LSE | Poslednjih šest ivičnih elemenata | 0 algoritama, koriste se samo M i U okreti |

Tri od četiri koraka ne zahtevaju nikakve algoritme. Jedini korak koji zahteva CMLL, ima ukupno 42 slučaja, ali vam ne treba 42 algoritma. Trostruka zamena uglova R U' L' U R' U' L U, koju smo obrađivali u prethodnom članku, zajedno sa njenim ogledalnim slikama i nekoliko varijacija, može pokriti sve slučajeve, samo malo sporije.

![Četiri koraka Roux metode](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Slika: Četiri koraka Roux metode, za svaki korak su prikazani samo delovi koji su do tada složeni: Levi blok → Desni blok → CMLL (četiri ugla gornjeg sloja) → LSE (poslednjih šest ivica). Isečak iz panela „Metode“ na mojoj 3D stranici kocke.*

Zato Roux metoda ne zahteva pamćenje algoritama: ona komprimuje deo koji zahteva pamćenje u mali ugao, a ostalo prepušta posmatranju, razumevanju i veštini.

## Od 165 sekundi do 28 sekundi: Četiri faze

Evo mog stvarnog puta. Svaku fazu sam podacima označio početak i kraj, a zatim objasnio gde sam zapinjao i šta sam vežbao. Vaši problemi možda neće biti isti kao moji, ali redosled će se verovatno poklopiti.

![Vremenski raspon četiri faze](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Slika: Vremenski raspon četiri faze. Faza jedan 3 nedelje, faza dva 11 dana, faza tri dva meseca, faza četiri traje i dalje.*

### Faza jedan: 165 sekundi → 60 sekundi (1–3. nedelja)

**Podaci**: Od 7. maja do 27. maja. Prva nedelja u proseku 165 sekundi, treća nedelja 68 sekundi.

**Gde zapinješ**: Levi blok je veoma nespretan, svaku grupu obojenih elemenata tražiš veoma dugo. Zatim, kada pronađeš grupu, početnici uvek vole da stanu i nastave da posmatraju.

![Gde početnici troše najviše vremena](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Slika: Gde početnici troše najviše vremena. Ruke su mirne, oči traže po kocki, vreme „traženja“ je mnogo puta duže od vremena „okretanja“.*

**Šta vežbaš**:

Najveći neprijatelj u ovoj fazi nije sporost ruku, već sporost očiju. Vreme koje provedete „tražeći“ je daleko veće od vremena koje provedete „okrećući“. Dakle:

- Fiksirajte ugao posmatranja, ne rotirajte kocku. U prethodnom članku je rečeno da je ugao posmatranja kod Roux metode fiksan. U ovoj fazi morate da pretvorite „neokretanje kocke“ u mišićnu memoriju. Svaki put kada poželite da okrenete kocku, zaustavite se i zapitajte se: mogu li da vidim element koji mi treba iz ovog ugla?
- Vežbajte sporo slaganje. Bez merenja vremena, ali pokreti moraju biti neprekidni, bez ikakvih pauza. Svaki pokret može biti veoma spor, ali bez prekida. Suština je da dok ruke rade prethodni pokret, oči treba da se fokusiraju na sledeći pokret. Ovo je srž sporog slaganja. Zvuči kao da usporavate, ali zapravo trenirate oči da vide odnos između pozicije elementa i mesta gde bi trebalo da ide.
- Vežbajte samo Prvi blok. Promešajte, složite Levi blok, ponovo promešajte, ponovo složite Levi blok. Ne idite dalje. Levi blok je najslobodniji korak u Roux metodi i najbolji za trening posmatranja.

Ne učite nikakve nove algoritme u ovoj fazi. Vaše usko grlo trenutno nije u algoritmima.

### Faza dva: 60 sekundi → 40 sekundi (4–5. nedelja)

**Podaci**: Od 27. maja do 7. juna, 11 dana. Ovo je bio period najbržeg pada u celom procesu, i period kada sam najviše vežbao, 723 slaganja u prvoj nedelji juna.

**Gde zapinješ**: Pokreti nisu tečni. Kocka zapinje.

**Šta vežbaš**:

U ovoj fazi morate optimizovati pokrete u svakoj fazi, na osnovu razumevanja, povećati spretnost svakog pokreta.

- Drugi blok. Drugi blok je teži od Prvog bloka, jer je prostor prepolovljen, i ne smete uništiti već završeni Levi blok. Ključni potezi su R, r (dva desna sloja), M, U. U ovoj fazi morate naučiti da koristite r i M umesto R za pomeranje elemenata, tako da Levi blok nikada ne bude uništen. Optimizacija koraka pokreta štedi vreme. Na primer, tri okretanja u smeru kazaljke na satu su jednaka jednom okretanju u suprotnom smeru.
- Vešto korišćenje M-sloja. Poslednji korak Roux metode se u potpunosti oslanja na M i U okrete, a to koliko glatko okrećete M-sloj direktno određuje vaš donji limit. Koristite domali prst ili srednji prst da gurate M, i počnite da vežbate ritam kao što je M' U M' U.
- Prepoznavanje CMLL oblika. U prethodnom članku smo „isprobali“ četiri ugla koristeći trostruku zamenu. Sada treba da počnete da gledate pre nego što radite: pre nego što okrenete gornji sloj, pogledajte orijentaciju žute boje na četiri ugla, procenite da li ima 0, 1, 2 ili 4 „dobre“ uglove, a zatim direktno izvedite odgovarajući potez. Takođe možete, uz vrlo mali broj algoritama, postići značajno povećanje efikasnosti, što je veoma isplativo. Veliki deo ovih algoritama ne treba da se uči napamet, već da se razume dok se izvodi.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Pogled pri sklapanju Drugog bloka" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Slika levo: Pogled pri sklapanju Drugog bloka. Levi blok je završen, koriste se samo R, r, M, U okreti za umetanje para ugao-ivica sa desne strane, Levi blok nikada neće biti dodirnut. Slika desno: M' U M, grupa pokreta koja se najviše koristi u drugom delu Roux metode. Srednji sloj ide gore, gornji sloj se okrene, srednji sloj se vraća, tri koraka za zamenu para ivica u gornjem i srednjem sloju.*

Možete pogledati moju [biblioteku algoritama za Roux metodu](/sr/projects/rubiks-cube/roux#cmll), CMLL stranica je dvostepena: 7 algoritama za orijentaciju + 2 algoritma za poziciju, ukupno 9. Ovo je najisplativiji izbor za povećanje brzine, lako se uči, a svaka savladana grupa može vam doneti ubrzanje od oko 1–2 sekunde. Uz malo vežbe, brzo ćete ih savladati; neki su već predstavljeni u prethodnom članku, i ne morate ih sve pamtiti da biste ušli ispod 30 sekundi.

![Prvi korak dvostepenog CMLL-a, sedam orijentacija ugaonih elemenata](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Slika: Prvi korak dvostepenog CMLL-a, sedam orijentacija ugaonih elemenata. Na ptičjoj perspektivi, žuta boja je boja gornje strane koja je okrenuta nagore, a male trake sa spoljne strane pokazuju orijentaciju gornje boje tog ugla ka bočnoj strani. Prepoznajte oblik prema broju žutih uglova: 0 je H ili Pi, 1 je S ili AS, 2 je U, T ili L.*

Nakon što uskladite žuti vrh, možete koristiti ova dva algoritma za usklađivanje bočnih strana ugaonih elemenata.

Ako je jedna strana već usklađena bojom, na primer, crvena je već na istoj strani, rotirajte je ulevo, a zatim možete odabrati algoritam za zamenu susednih. Ako nijedna strana nije usklađena bojom, odaberite algoritam za dijagonalnu zamenu.

![Drugi korak dvostepenog CMLL-a, dve pozicije ugaonih elemenata](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Slika: Drugi korak dvostepenog CMLL-a, dve pozicije ugaonih elemenata. Na levoj slici, crvena boja dva ugla sa leve strane je već usklađena, koristi se zamena susednih; na desnoj slici nijedna strana nije usklađena, koristi se dijagonalna zamena.*

Možete razumeti svaki skup algoritama kroz mnogo sporog slaganja. Ne tretirajte ih kao formule, već kao određene fiksne pokrete. Polako istražujući, i sami biste mogli otkriti ove pokrete, ali njihovo navođenje ovde vam može skratiti put.

I još jedna stvar, koja je efikasnija od bilo koje vežbe: investirajte u novu kocku. Ako i dalje imate staru kocku koja klaka i zaglavljuje se kada je okrenete previše, kupite modernu magnetnu kocku trećeg reda. Najnovije kocke će vam omogućiti da osetite snagu inženjerske optimizacije – glatko okretanje, automatsko poravnavanje, skoro bez zaglavljivanja. Samo promena kocke može odmah smanjiti vaše prosečno vreme za 15 sekundi. Isplativ izbor je [MoYu RS3 M V5 (MagLev + Ball-Core verzija)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), oko dvadesetak dolara, dovoljno dobra da vas dovede do sub-20.

### Faza tri: 40 sekundi → 30 sekundi (5. do 13. nedelje, dva meseca)

**Podaci**: Od 7. juna do 4. avgusta. Ao100 je sa 39.8 sekundi spušten na 29.9 sekundi, što je trajalo 58 dana. U ovoj fazi možda ćete povremeno imati rezultate ispod 30 sekundi, ali samo ako imate mnogo sreće. Takođe, sa padom prosečnog vremena slaganja, težina poboljšanja za 1 sekundu eksponencijalno raste.

![Dnevni prosek rezultata](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Slika: Dnevni prosek rezultata. Nakon sredine juna, kriva se gotovo izravnala, i dva meseca sam se zadržao između 30 i 40 sekundi.*

Ovo je faza stagnacije. Svako će je iskusiti, ja sam ovde proveo dva meseca.

**Gde zapinješ**: Slaganje šest ivičnih elemenata gornjeg sloja je veoma sporo, ne razumem logiku, svaki put pokušavam iznova i iznova, trošeći mnogo vremena. Levi i Desni blok i dalje nisu dovoljno tečni.

**Šta vežbaš**:

- Prepoznavanje EO. U prethodnom članku je objašnjeno da postoji samo nekoliko situacija sa pogrešno orijentisanim ivicama: 0, ne-0 ne-4, 4 (po dve gore/dole), 4 (sve u gornjem sloju), 4 (tri gore/jedna dole). Cilj ove faze je: u trenutku kada je blok složen, bez brojanja, odmah prepoznati koja je situacija. Vežba se tako što se nakon mešanja složi samo do kraja CMLL-a, zatim se pauzira, kaže broj pogrešno orijentisanih ivica, pa se nastavi.
- Mnogi ljudi ne razumeju pokrete ovde. EO faza na kraju služi za konstruisanje oblika strelice (tri gore, jedna dole), jer je kompletan oblik samo jedan potez udaljen od oblika strelice. Zato, razmišljajući unazad, to je poslednji korak pre završetka slaganja, tako da bez obzira na broj pogrešno orijentisanih ivica, krajnji cilj je konstruisanje strelice. Ako imate 4 pogrešno orijentisane ivice gore, zamenite jedan par gornjih i donjih ivica da biste jednu pogrešno orijentisanu spustili i tako postigli strelicu. Ako imate 2 gore i 2 dole, zamenite jedan par gornjih i donjih ivica da biste jednu pogrešno orijentisanu podigli i tako postigli strelicu. Ako imate 1 gore i 1 dole, ili 2 gore, koristite M' U M da prvo pređete u prethodne situacije, a zatim konstruišete strelicu. Kroz mnogo posmatranja i razmišljanja, možete sami otkriti najbolje korake za situaciju 1 / 1.
- Mnogo vežbe predviđanja (Look-ahead). Ovo je najvažnija stvar za prelazak sa 40 na 30 sekundi, i najviše je protivintuicijska: okrećite sporije, gledajte dalje. Kada slažete Levi blok, ne gledajte u element koji trenutno ubacujete, već gledajte gde je sledeći. U početku će biti veoma neobično, rezultati će se prvo pogoršati, ali nakon nedelju dana iznenada će se poboljšati.
- CMLL bez oklevanja. Ako o svakom pokretu morate razmišljati pre nego što ga izvedete, onda on još uvek nije vaš. Vežbajte svaki pokret pojedinačno 50 puta, dok vam se ruka ne pokrene čim vidite oblik.

![Oblik strelice](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Slika: Oblik strelice. Tri pogrešno orijentisane ivice gornjeg sloja (označene tirkiznom bojom) formiraju strelicu koja pokazuje ka pogrešno orijentisanoj ivici donjeg sloja. U ovom trenutku, jedan M' U M potez može ih sve četiri istovremeno vratiti na mesto. [Otvorite ovo stanje u 3D kocki](/sr/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) da biste ga videli korak po korak.*

![Šest EO oblika](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Slika: Šest EO oblika. Oznake u gornjem levom uglu su broj pogrešno orijentisanih ivica (gore / dole), žuta su dobro orijentisane ivice, tirkizni okvir su pogrešno orijentisane ivice. Samo za sliku strelice je potreban algoritam, ostalih pet se prvo transformišu u strelicu.*

Za slaganje levih i desnih ivičnih elemenata, ovde treba da imate žutu boju kao gornju, belu kao donju, a levi blok neka bude crven. Zatim je potrebno složiti žuto-crvenu ivicu + žuto-narandžastu ivicu (označene delove). Glavna ideja je da se žuto-crvena ivica, kroz zamenu gornjih i donjih ivica, spusti na donji sloj, i žuto-narandžasta ivica takođe spusti na donji sloj. Dva ivična elementa su suprotstavljena na donjem sloju, a zatim se gornji sloj okrene u odgovarajući položaj. M2 U ili M2 U' može da složi leve i desne ivične elemente U-sloja.

Da bih vam pomogao da bolje razumete, sve EO oblike sam organizovao u [biblioteci algoritama za Roux metodu na LSE stranici](/sr/projects/rubiks-cube/roux#lse). Klikom na „Prikaži detalje“ za svaku sliku otvoriće se odgovarajuće stanje u 3D kocki, sa automatski istaknutim pogrešno orijentisanim ivicama. Na istoj stranici su i svi slučajevi za UL/UR slaganje i poslednje četiri ivice.

Smanjenje obima vežbanja u ovoj fazi nije loša stvar. Faza stagnacije se ne može prevazići pukim gomilanjem vežbe, već ispravljanjem određene loše navike. Moje iskustvo je da se menja samo jedna stvar odjednom.

### Faza četiri: 30 sekundi → 28 sekundi (posle 13. nedelje)

**Podaci**: Posle 4. avgusta. U celom septembru zabeležen je broj vežbi od 122 puta, mada mnoge vežbe nisu bile zabeležene. Kocku sam već prihvatio kao igračku na stolu, uzimam je i igram se kad sam raspoložen, kad sam nervozan ili anksiozan, tokom pauza na poslu, kad mi je dosadno – slaganje kocke se uklopilo u moj život. Ao100 je postepeno opao sa 29.9 na 28.2.

**Gde zapinješ**: Nema jasnog uskog grla, samo nedovoljna veština.

**Šta vežbaš**:

Ako je vaša prosečna brzina i dalje iznad 30 sekundi, jedino što treba da radite je da nastavite da vežbate mnogo, a ne da pamtite nove algoritme.

Nastavite da vežbate predviđanje kroz sporo slaganje, i bićete sve brži.

Uvek imajte kocku pri ruci i igrajte se sa njom, stavite je tamo gde je lako možete dohvatiti, na primer na radni sto, kako biste se mogli igrati tokom pauza. Takođe, često snimajte svoje slaganje kako biste videli u kojoj fazi trošite najviše vremena, a zatim ciljano optimizujte. To je svesna vežba; vaša brzina napretka ne zavisi od ukupnog broja običnih vežbi, već od broja svesnih vežbi.

Tada ćete otkriti da ste, nakon što ste prešli fazu stagnacije od 30–35 sekundi, brzina pala na još niži nivo.

Čestitam vam na dostizanju ove faze, za početnike ste već veoma vešt igrač!

## Cena slaganja bez algoritama

Iskreno rečeno, slaganje bez algoritama ima svoju cenu.

CMLL faza je spora. 42 slučaja pokrivena sa 9 algoritama znače da se neke situacije moraju raditi dva puta. Ljudi koji znaju sve CMLL algoritme su u ovom koraku brži od mene za dve-tri sekunde.

Tehnika M-sloja ima visok prag. Donji deo Roux metode se u potpunosti oslanja na M-sloj, koji je teži za okretanje od R i U, lakše se zaglavljuje i zahteva bolju kocku.

Ne brinite o gornjoj granici. Među vrhunskim igračima ima onih koji koriste Roux metodu i postižu svetske rezultate; sama metoda nema gornju granicu. Ali da biste ušli ispod 15 sekundi, verovatno ćete morati da naučite svih 42 CMLL algoritma. Međutim, to je već faza za sebe. Za ulazak ispod 30 sekundi, to nije potrebno.

Štaviše, skoro svaki svetski igrač koji se bavi jednoručnim slaganjem koristi Roux metodu, jer je zaista veoma pogodna za jednoručno rukovanje.

**Najbrži rezultati sa Roux metodom na zvaničnim takmičenjima (WCA):**

- Jednokratno 4.11 sekundi, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipini), Valenzuela Cubing Open 2023, priznato kao najbrže zvanično jednokratno slaganje Roux metodom ([video rekonstrukcije](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Prosečno 5.98 sekundi, takođe on, 2019. godine, tada azijski rekord, i treći zvanični sub-6 prosek u istoriji ([WCA profil](https://www.worldcubeassociation.org/persons/2017VILL41))
- On je takođe [svetski rekorder u jednoručnom slaganju](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): prosek 8.09, jednokratno 6.05 (2024), u jednoručnoj zajednici se generalno smatra da je Roux optimalna metoda

Mislim da je ova razmena veoma isplativa. Za dve-tri sekunde sporijeg CMLL-a, dobijate: da znate šta radite u svakom koraku, da ne zaboravite kako se slaže čak i ako tri meseca ne dodirnete kocku, i da možete da otkrijete rešenje za bilo koju nepoznatu kocku.

## Rezime

![Slaganje završeno](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Preći put od slaganja kocke do sub-30 nivoa nije proces pamćenja algoritama, već proces treninga koordinacije ruku, očiju i mozga.

Četiri faze, četiri stvari: prvo naučite da gledate bez okretanja kocke, zatim naučite da složite Desni blok bez uništavanja Levog bloka, zatim naučite da gledate sledeći korak dok radite trenutni, i na kraju pustite da ruke prate oči.

Algoritmi nisu izvor brzine. Posmatranje jeste.

Naučite da gradite pozitivnu povratnu informaciju kroz napredak u svakoj fazi. Čak i vežbe za sticanje veštine ne moraju biti dosadne, pogotovo kada vas iznenadi novi oboreni rekord. Naročito u početnoj i srednjoj fazi, svakodnevno ćete doživljavati radost obaranja rekorda.

Svi algoritmi i situacije spomenute u tekstu su organizovane u mojoj [biblioteci algoritama za Roux metodu](/sr/projects/rubiks-cube/roux). Vratite se i proverite kad god zapnete.

Svet kocke nudi beskrajnu zabavu, želim vam da uživate!

## Dodatak 1: Lista vežbi po fazama

**Faza jedan (> 60 sekundi)**

- Fiksirajte ugao posmatranja, ne rotirajte kocku tokom celog slaganja
- Pronađite sledeći željeni element bez pauze
- Vežbajte sporo slaganje, izgovarajte nameru svakog poteza
- Vežbajte samo Levi blok, ponovite 50 puta

**Faza dva (60 → 40 sekundi)**

- Desni blok slažite samo sa R, r, M, U, ne dirajte Levi blok
- Vežbajte dvostepeni CMLL
- Vežbajte ritam M' U M' U, 5 minuta dnevno

**Faza tri (40 → 30 sekundi)**

- Zaustavite se nakon CMLL-a, odmah prepoznajte broj pogrešno orijentisanih ivica
- Sporo slaganje + predviđanje: oči uvek gledaju sledeći element
- Najmanje 20 kvalitetnih slaganja dnevno

**Faza četiri (< 30 sekundi)**

- Snimajte video zapise da biste pronašli pauze
- Tehnike prstiju: R U R' U' prstomet, M-sloj domalim prstom
- 20 kvalitetnih slaganja dnevno, bez gomilanja

## Dodatak 2: Alati

- **csTimer**: [cstimer.net](https://cstimer.net/). Uključite Ao5 / Ao12 / Ao100 statistiku, Ao100 je vaša stvarna veština, pojedinačni rezultati su sreća.
- **3D kocka**: [philoli.com/zh/projects/rubiks-cube](/sr/projects/rubiks-cube/). Svi algoritmi iz ovog članka mogu se uneti ovde da biste videli animaciju.
- **Biblioteka algoritama za Roux metodu (prilagođena početnicima)**: [philoli.com/zh/projects/rubiks-cube/roux](/sr/projects/rubiks-cube/roux). Uobičajeni obrasci umetanja za Levi blok, Desni blok, 9 algoritama za dvostepeni CMLL, svi slučajevi za LSE (EO, UL/UR, poslednje četiri ivice). Svaki slučaj se može otvoriti u 3D kocki, automatski skrivajući nebitne elemente i ističući ivice koje treba pomeriti.
- **csTimer analizator treninga**: [philoli.com/zh/projects/rubiks-cube/analyzer](/sr/projects/rubiks-cube/analyzer). Prevucite i ispustite datoteku izvezenu iz csTimer-a da biste videli trend vaših rezultata, Ao5/Ao12/Ao100 krive, napredovanje PB-a, tabelu prekretnica (kada ste prvi put postigli sub-60, sub-40, sub-30) i krivu vežbanja Power Law. Sve slike u ovom članku potiču odavde. Podaci se obrađuju samo u vašem pretraživaču, ne šalju se na server. Ako nemate izvezenu datoteku, možete prvo učitati mojih 4441 podataka da vidite efekat.

*Ovaj članak sadrži affiliate linkove ka Amazonu: kupovinom preko linka, dobiću malu proviziju, a vaša cena ostaje ista.*

## Više za čitanje

- [Kako složiti Rubikovu kocku bez algoritama: Razumljivo čak i za osnovce](/sr/blog/solve-rubiks-cube-without-formulas)
