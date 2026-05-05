---
title: Vodič za postavljanje Hexo bloga od nule (izdanje 2024.)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
Jeste li se već odavno zasitili neatraktivnih sučelja blogova? Dosta vam je beskrajnih obavijesti i nametljivog sadržaja? Oduvijek ste željeli pokrenuti vlastiti blog, ali vas je zaustavila složenost tutorijala i gomila koda od koje vas boli glava? Ako je odgovor da, čestitamo! Ovaj članak će vas korak po korak, na najjednostavniji mogući način, naučiti kako postaviti vlastiti blog. Trebate samo malo strpljenja i slijediti upute.

<!--more-->

Hexo, kao brz, jednostavan i učinkovit okvir za blogove, pravi je blagoslov za početnike. S druge strane, GitHub nas oslobađa muke s dodatnim iznajmljivanjem i postavljanjem servera. Zato ćemo u ovom članku koristiti upravo Hexo i GitHub za postavljanje bloga.

Već sam 2018. godine napisao [jednostavan vodič za postavljanje bloga od nule](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Međutim, zbog ažuriranja dodataka, neke su se stvari promijenile i bilo je potrebno prilagoditi detalje. Stoga ponovno objavljujem ovo, sada izdanje za 2024. godinu.

### Priprema

*   Preuzmite i instalirajte node.js ([preuzmite sa službene stranice](https://nodejs.org/en/))
*   Preuzmite i instalirajte git ([preuzmite sa službene stranice](https://git-scm.com/downloads))

### Lokalno postavljanje Hexo statičnog bloga

*   Instalacija Hexo okvira: Otvorite CMD i pokrenite
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Kreirajte novu mapu, npr. `MyBlog`, uđite u nju, desnim klikom pokrenite Git Bash (ili CMD/terminal) i unesite:

 ```bash
 $ hexo init
 ```

*   Nakon generiranja Hexo predloška, instalirajte NPM, pokrenite:

 ```bash
$ npm install
 ```

Tako je, glavni dio bloga je završen! Idemo vidjeti kako izgleda. Pokrenite:

```bash
$ hexo server
```

Sada otvorite preglednik, upišite `localhost:4000` i vidjet ćete kako vaš blog trenutno izgleda. Malo se uzbudite, a zatim pritisnite `Ctrl + C` da biste nastavili s daljnjim koracima.

### Prilagodba (početna)

#### Promjena teme

*   Preuzmite novu temu (na primjer, [NexT temu]( http://theme-next.iissnan.com/ )). U korijenskoj mapi pokrenite:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Otvorite datoteku `_config.yml` u korijenskoj mapi i promijenite polje `theme` u:

 ```bash
theme: next
 ```

*   Odaberite izgled: Otvorite `/themes/next/_config.yml` i pronađite polje `scheme` (možete koristiti `Ctrl + F` za brzo pretraživanje). NexT nudi tri različita izgleda; odaberite onaj koji vam se sviđa i uklonite `#` znak ispred njega. (U budućnosti ćete uglavnom mijenjati ove dvije datoteke: _konfiguracijsku datoteku stranice_ i _konfiguracijsku datoteku teme_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Za pregled rezultata, pokrenite sljedeće naredbe (ovaj korak možete ponoviti svaki put kada želite vidjeti promjene):

```bash
hexo g #ili hexo generate
hexo server
```

#### Konfiguracija stranice

*   Otvorite konfiguracijsku datoteku stranice `_config.yml` u korijenskoj mapi pomoću uređivača teksta (nemojte koristiti Notepad u sustavu Windows jer će se kineski znakovi prikazivati pogrešno). Izmijenite polje `Site`, pazeći da nakon dvotočke slijedi razmak:

 ```bash
 # Site
 title: Nepoznati svijet                // Naziv bloga
 subtitle:
 description:  Do something cool // Kratki opis / potpis
 author: LulalaP                 // Autor
 language: zh-Hans               // Jezik stranice
 timezone:
 ```

### Postavljanje avatara u bočnoj traci

*   U mapi `/source` kreirajte novu mapu i nazovite je `uploads`. U nju smjestite sliku avatara (npr. `avatar.jpg`).

*   Otvorite `/themes/next/_config.yml`, pronađite polje `avatar` i promijenite ga u:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Dovršavanje stranica bloga

#### Dodavanje izbornika
*   Otvorite `/themes/next/_config.yml` i uklonite komentare (znak `#`) ispred stavki izbornika koje želite dodati. Ako trebate dodati druge stavke, učinite to prema potrebi (obratite pažnju na uvlačenje):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Stvaranje stranice s kategorijama

*   Kreirajte novu stranicu, nazvanu `categories`, pomoću sljedeće naredbe:

 ```bash
 $ hexo new page categories
 ```

*   Uredite upravo kreiranu stranicu `/source/categories/index.md` i postavite vrstu stranice na `categories`. Tema će automatski prikazati sve kategorije na ovoj stranici (pazite da zadržite razmak nakon dvotočke).

 ```bash
	title: Kategorije
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Stvaranje sučelja oblaka oznaka (tagova)

*   Kreirajte novu stranicu, nazvanu `tags`, pomoću sljedeće naredbe:

 ```bash
 $ hexo new page "tags"
 ```

*   Uredite upravo kreiranu stranicu i postavite vrstu stranice na `tags`. Tema će automatski prikazati oblak oznaka na ovoj stranici.

 ```bash
 ---
	title: Oznake
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Stvaranje stranice "O meni"

 *   Kreirajte novu stranicu 'about':

 ```bash
 $ hexo new page "about"
 ```

 *   Uredite upravo kreiranu stranicu i u glavni dio teksta možete unijeti informacije u Markdown formatu.
 
 ```bash
	title: O meni
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Postavljanje društvenih poveznica u bočnoj traci

*   Uredite `_config.yml` datoteku stranice, pronađite polje `social` i dodajte naziv društvene mreže i URL. Format ključ-vrijednost je `Prikazano ime: URL adresa`, na primjer:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Otvorite `/themes/next/_config.yml`, pod poljem `social_icons` dodajte nazive društvenih mreža (obratite pažnju na velika i mala slova) i [ikone](http://fontawesome.io/icons/). Opcija `enable` služi za kontrolu prikaza ikona; možete je postaviti na `false` da biste uklonili ikone. Na primjer:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Povezivanje bloga s GitHubom

 *   Registrirajte GitHub račun: Ako još nemate GitHub račun, prvo ga morate registrirati.

 *   Na GitHubu kreirajte projekt naziva `XXX.github.io`, gdje je `XXX` vaše GitHub korisničko ime.

 *   Otvorite konfiguracijsku datoteku `_config.yml` unutar lokalne mape `MyBlog` i postavite `type` na `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Pokrenite:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Lokalno generirajte statične datoteke i gurnite ih na GitHub, pokrenite:

```bash
hexo g
hexo d
```

Sada otvorite preglednik i posjetite `http://your-name.github.io`. Čestitamo, vaš blog je uspješno postavljen!

### Povezivanje domene

Do sada je blog u potpunosti postavljen i dostupan putem GitHub domene. Sada će biti savršeno ako na njega povežete vlastitu, kraću domenu.

#### Kupnja domene

*   Kupite domenu, preporučujemo [namesilo.com](https://www.namesilo.com/) – pouzdanog i iskusnog pružatelja domena s povoljnim cijenama i dobrom uslugom. Ako koristite moj preporučeni kod `PhiloArt.io`, možete ostvariti popust od 1 USD, važeći do 31.12.2025.

### DNS postavke domene

*   DNS postavke kod pružatelja domene

*   Dodajte 4 A zapisa koji će pokazivati na GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Dodajte CNAME zapis, gdje je `name` `www`, a `content` `your-name.github.io` (pokazuje na adresu vašeg GitHub Pagesa):

 > CNAME —> philo-li.github.io

*   Za detaljnije postavke pogledajte [dokumentaciju za GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Dodavanje CNAME datoteke u direktorij bloga

Nakon konfiguracije DNS zapisa, uđite u direktorij bloga, unutar mape `source` kreirajte datoteku naziva `CNAME` (pazite, mora biti napisana velikim slovima i bez ekstenzije). Otvorite je pomoću bilježnice ili drugog uređivača teksta i u nju upišite svoju kupljenu domenu, npr.: `www.philoli.com`.

*   Pokrenite:

```bash
hexo g
hexo d
```

Sada otvorite preglednik, unesite svoju domenu i pritisnite Enter. Čestitamo, sada imate blog s vlastitom domenom!

### Objavljivanje novog članka

*   U korijenskoj mapi bloga izvršite: `hexo new “Moj prvi članak”`. Ovo će generirati `.md` datoteku unutar mape `source/_posts`.

*   Uredite tu datoteku, mijenjajući početna polja na:

 ```bash
 title Naslov članka
 date Datum kreiranja (datum kreiranja datoteke)
 updated Datum izmjene (datum izmjene datoteke)
 comments Je li komentiranje omogućeno true
 tags Oznake
 categories Kategorije
 permalink Ime u URL-u (ime datoteke)
 ```

*   Napišite sadržaj članka (pridržavajući se Markdown pravila).

*   Lokalno generirajte statične datoteke i gurnite ih na GitHub, pokrenite:

```bash
hexo g
hexo d
```

### Prilagodba (napredno)

U nastavku su navedene neke napredne postavke za stiliziranje bloga. Početnici mogu slobodno preskočiti ovaj dio.

#### Dodavanje RSS-a

 *   Instalirajte dodatak u korijenskoj mapi

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Na kraj `_config.yml` datoteke u korijenskoj mapi dodajte: (**_Pazite, nakon dvotočke mora biti razmak, inače će doći do pogreške!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Otvorite `/themes/next/_config.yml`, i izmijenite `rss` (pazite, nakon dvotočke mora biti razmak):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Skraćivanje članaka na naslovnici
 *   Svaki put kada pišete članak, samo dodajte `<!--more-->` na mjesto u `.md` datoteci gdje želite da se članak prekine:

 ```markdown
     <!--more-->
 ```

 *   Otvorite `/themes/next/_config.yml` i postavite opciju `scroll_to_more` na `false`.

#### Centriranje citiranog teksta unutar članaka
*   Optimiziran je zadani stil citata u Markdownu.

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### Izmjena stila blokova koda

*   Uredite `/themes/next/_config.yml` i promijenite konfiguraciju `codeblock` kako slijedi:

```yml
codeblock:
  # Tema za isticanje koda
  # Dostupne vrijednosti: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # Vidi: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Dodajte gumb za kopiranje na blok koda
  copy_button:
    enable: true
    # Prikaži rezultat kopiranja teksta.
    show_result: true
    # Dostupne vrijednosti: default | flat | mac
    style:
```

#### Postavljanje datuma osnivanja stranice

 *   Uredite `_config.yml` datoteku stranice i dodajte novo polje `since`.

```bash
since: 2024
```

#### Poboljšanje stila poveznica u člancima

*   Uredite datoteku `themes\next\source\css\_common\components\post\post.styl` i na kraj dodajte sljedeći CSS stil:

``` css
// stil poveznica
.post-body p a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

#### Dodavanje pozadinske slike blogu
*   U korijenskoj mapi `source` kreirajte mapu `_data`, zatim unutar nje novu datoteku `styles.styl`. Otvorite tu novu datoteku `source/_data/styles.styl` i dodajte sljedeći sadržaj:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Ponavlja li se slika i na koji način, ako se ne može cijela prikazati
    background-attachment:fixed;    // Prati li slika pomicanje stranice
    background-size: cover;         // Pokrij
    background-position:50% 50%;    // Položaj slike
}
```
*   U URL-u može biti poveznica na sliku ili putanja do slike. Sliku možete nazvati `background.jpg` i smjestiti je u mapu `source/uploads`.

#### Postavljanje prozirnosti pozadine sadržaja bloga
*   Otvorite datoteku `source/_data/styles.styl` koju ste uređivali u prethodnom koraku i nastavite dodavati sljedeći sadržaj:

```css

// Prozirnost sadržaja bloga
// Postavke prozirnosti sadržaja članka
if (hexo-config('motion.transition.post_block')) {
  .post-block {
    background: rgba(255,255,255,0.9);
    opacity: 0.9;
    radius: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 40px;
    -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
    -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
  }
  .pagination, .comments {
    opacity: 0;
  }

  +tablet() {
    margin: 20px;
    padding: 10px;
  }

  +mobile() {
    margin: 15px;
    padding: 15px;
  }
}


// Postavke prozirnosti bočne trake
.sidebar {
  opacity: 0.9;
}

// Postavke prozirnosti trake izbornika
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Postavke prozirnosti trake za pretraživanje (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimizacija stila inline blokova koda
*   Otvorite datoteku `source/_data/styles.styl` koju ste uređivali u prethodnom koraku i nastavite dodavati sljedeći sadržaj:

```css
// Uljepšavanje HTML 'code' oznake
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Dodavanje broja posjetitelja u podnožje web stranice

*   Uredite i izmijenite datoteku

```css
# Pronađite karticu 'copyright' i dodajte kod unutar te oznake

<div class="copyright">
# ......ovdje već postoje neke konfiguracije
# Ovdje dodajte novi kod
</div>

# Nakon dodavanja izgleda ovako:
<div class="copyright">
  # ......ovdje već postoje neke konfiguracije
  # Ovdje dodajte novi kod
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Ponovno generirajte i pregledajte izmijenjeni efekt. Nakon što potvrdite da je sve u redu, objavite.

```bash
hexo g
hexo s
# Objavite nakon potvrde da je sve u redu
hexo d
```

#### Dodavanje README.md datoteke u repozitorij

Svaki projekt obično ima datoteku `README.md`, ali kada se Hexo primijeni na repozitorij, `README.md` datoteka u projektu se prebriše. Zato je potrebno postaviti konfiguraciju kako bi se izbjeglo prebrisavanje.

U korijensku mapu `source` unutar `Hexo` direktorija dodajte `README.md` datoteku. Zatim izmijenite konfiguracijsku datoteku stranice `_config.yml` i postavite vrijednost parametra `skip_render` na:

```yml
skip_render: README.md
```
Spremite i izađite. Sljedeći put kada koristite naredbu `hexo d` za primjenu bloga, datoteka `README.md` neće biti renderirana.

#### Nekoliko korisnih dodataka

- Hexo Filter MathJax: Za prikaz matematičkih formula
  - Instalacija: `npm install hexo-filter-mathjax`
  - Detaljna konfiguracija: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Brojač riječi u člancima
  - Instalacija: `npm install hexo-word-counter`
  - Detaljna konfiguracija: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Za optimizaciju brzine učitavanja bloga
  - Instalacija: `npm install hexo-optimize`
  - Detaljna konfiguracija: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Više dodataka: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Sigurnosna kopija izvornih datoteka

- Obavezno napravite sigurnosnu kopiju lokalnih izvornih datoteka, posebno Markdown datoteka. Ako se izgube druge konfiguracije, nećete moći normalno pisati blog i morat ćete sve postaviti ispočetka.
- Preporučuje se korištenje istog GitHub repozitorija za sigurnosnu kopiju.
- Preporučuje se izrada sigurnosne kopije nakon svake promjene ili svakodnevno.
- Za više informacija pogledajte [Git dokumentaciju](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects). 

```bash
# Dodajte adresu repozitorija bloga koju ste prethodno postavili
git remote add https://github.com/your-name/your-name.github.io.git

# Dodajte i spremite trenutne promjene te zabilježite bilješku
git add .
git commit -m "Ažuriranje izvornih datoteka"

# Kreirajte i prebacite se na novu granu
git checkout -b source

# Gurnite cijeli sadržaj lokalne 'source' grane u 'source' granu udaljenog repozitorija
git push origin source:source
```

### Pisanje bloga na različitim računalima
- Kada pišete blog na različitim računalima, potrebno je instalirati osnovni softver, a zatim povući udaljeni GitHub repozitorij s sigurnosnom kopijom na lokalno računalo kako biste ažurirali blog.

*   Preuzmite i instalirajte node.js ([preuzmite sa službene stranice](https://nodejs.org/en/))
*   Preuzmite i instalirajte git ([preuzmite sa službene stranice](https://git-scm.com/downloads))
*   Instalacija Hexo okvira: Otvorite CMD i pokrenite

 ```bash
 npm install -g hexo-cli
```
*   Izvršite lokalno ažuriranje

```bash
# Klonirajte repozitorij na lokalno računalo
git clone https://github.com/your-name/your-name.github.io.git

# Ako je repozitorij već kloniran lokalno, prije svakog ažuriranja bloga trebate povući najnoviji sadržaj grane
git pull origin

# Prebacite se na odgovarajuću granu
git checkout source

# Nakon instalacije svih dodataka iz Hexo konfiguracije, možete početi ažurirati i uređivati sadržaj bloga
npm install

# Nakon izmjene sadržaja, ne zaboravite odmah napraviti potpunu sigurnosnu kopiju
git add .
git commit -m "Ažuriranje bloga xxx"
git push origin source:source

# Objavite i gurnite najnoviji sadržaj bloga na domenu
hexo clean
hexo g  # Generira statične datoteke
hexo s  # Lokalni pregled bloga
hexo d  # Objavljuje najnoviji sadržaj bloga
```

### Pregled nekoliko često korištenih naredbi

 ```bash
hexo g
# ili hexo generate, generira statične web stranice iz izvornih datoteka
hexo d
# ili hexo deploy, objavljuje i gura na GitHub Pages
hexo s
# ili hexo server, lokalno postavlja za testiranje
hexo clean
# Briše cache statičnih web stranica, a zatim hexo d ponovno generira
