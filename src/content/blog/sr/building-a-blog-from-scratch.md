---
title: Jednostavan vodič za postavljanje Hexo bloga od nule (Izdanje 2024)
date: 2024-04-11 00:25:20
tags: Izgradnja bloga
categories: Svakodnevno petljanje
---
Jeste li već umorni od neprivlačnih interfejsa blogerskih sajtova? Da li vam je dosta beskonačnih obaveštenja sa veb-sajtova? Da li ste oduvek želeli da napravite sopstveni blog, ali vas je zaustavio lavirint složenih uputstava i gomila koda od kojeg boli glava? Onda vam čestitam! Ovaj članak je tu da vas, korak po korak, na najjednostavniji mogući način nauči kako da postavite svoj blog. Potrebno je samo malo strpljenja i da pratite uputstva.

<!--more-->

Hexo, kao brz, jednostavan i efikasan blogerski okvir (framework), pravi je spas za početnike, dok nas GitHub istovremeno oslobađa muke oko dodatnog iznajmljivanja i postavljanja servera. Zato ćemo u ovom tekstu koristiti Hexo i GitHub za postavljanje bloga.

Već sam 2018. godine napisao [jednostavan vodič za postavljanje bloga od nule](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/), ali zbog ažuriranja dodataka (plugina), neki detalji su se promenili, pa sam zato ponovo objavio ovo izdanje kratkog vodiča za 2024. godinu.

### Priprema

*   Preuzmite i instalirajte Node.js ([preuzmite sa zvaničnog sajta](https://nodejs.org/en/))
*   Preuzmite i instalirajte Git ([preuzmite sa zvaničnog sajta](https://git-scm.com/downloads))

### Lokalno postavljanje Hexo statičnog bloga

*   Instalirajte Hexo okvir: Otvorite cmd i pokrenite:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Kreirajte novu fasciklu, na primer MyBlog, uđite u nju, desnim klikom pokrenite Git Bash i unesite:

 ```bash
 $ hexo init
 ```

*   Kada se Hexo šablon generiše, instalirajte npm tako što ćete pokrenuti:

 ```bash
 $ npm install
 ```

Tako je, glavni deo bloga je ovim završen! Hajde da vidimo rezultate. Pokrenite:

```bash
$ hexo server
```

Sada otvorite pretraživač i unesite `localhost:4000` da biste videli kako vaš blog trenutno izgleda. Uz malo uzbuđenja, pritisnite Ctrl + C da biste nastavili sa sledećim koracima.

### Prilagođavanje (početno)

#### Promena teme

*   Preuzmite novu temu (na primeru [NexT teme](http://theme-next.iissnan.com/)), u osnovnoj fascikli pokrenite:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Otvorite `_config.yml` u osnovnoj fascikli i izmenite polje `theme` na:

 ```bash
theme: next
 ```

*   Izaberite izgled: Otvorite `/themes/next/_config.yml`, pronađite polje `scheme` (možete koristiti Ctrl + F za brzu pretragu). NexT nudi tri različita izgleda; možete izabrati onaj koji vam se sviđa i ukloniti znak `#` ispred njega (ovo su dva glavna fajla koja ćete kasnije menjati: _konfiguracioni fajl sajta_ i _konfiguracioni fajl teme_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Da biste videli efekat, možete pokrenuti sledeće komande (ovaj korak možete ponavljati svaki put kada želite da vidite promene):

```bash
hexo g #ili hexo generate
hexo server
```

#### Konfiguracija sajta

*   Otvorite konfiguracioni fajl sajta `_config.yml` u osnovnoj fascikli pomoću editora (na Windows sistemu, nemojte koristiti Notepad za uređivanje, jer kineski naslovi mogu izgledati izobličeno/pojaviće se čudni znakovi). Izmenite polje `Site`, obratite pažnju da posle dvotačke mora da stoji razmak:

 ```bash
 # Site
 title: Nepoznati svet             //Naziv bloga
 subtitle:
 description:  Do something cool //Kratak opis/moto
 author: LulalaP                 //Autor
 language: zh-Hans               //Jezik sajta
 timezone:
 ```

### Podešavanje avatara na bočnoj traci

*   U `/source` kreirajte novu fasciklu i nazovite je `uploads`. U nju postavite sliku avatara (npr. avatar.jpg).

*   Otvorite `/themes/next/_config.yml`, pronađite polje `avatar` i izmenite ga na:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Unapređivanje stranica bloga

#### Dodavanje menija
*   Otvorite `/themes/next/_config.yml` i uklonite komentar (`#`) ispred menija koje želite da dodate u polju `menu`. Ako želite da dodate druge menije, možete ih dodati po potrebi (obratite pažnju na uvlačenje polja):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kreiranje stranice sa kategorijama

*   Kreirajte novu stranicu, nazvanu `categories`, sledećom komandom:

 ```bash
 $ hexo new page categories
 ```

*   Uredite tek kreiranu stranicu `/source/categories/index.md` i podesite tip stranice na `categories`. Tema će automatski prikazati sve kategorije na ovoj stranici (ne zaboravite razmak posle dvotačke).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Kreiranje interfejsa oblaka tagova

*   Kreirajte novu stranicu, nazvanu `tags`, sledećom komandom:

 ```bash
 $ hexo new page "tags"
 ```

*   Uredite tek kreiranu stranicu i podesite tip stranice na `tags`. Tema će automatski prikazati oblak tagova na ovoj stranici.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Kreiranje stranice „O meni“

 * Kreirajte novu stranicu "about":

 ```bash
 $ hexo new page "about"
 ```

 * Uredite tek kreiranu stranicu; glavni tekst možete napisati u Markdown formatu.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Podešavanje društvenih linkova na bočnoj traci

*   Uredite `_config.yml` sajta, pronađite polje `social` i dodajte naziv i adresu društvene mreže. Format ključ-vrednost je `Prikazano ime: Adresa linka`, na primer:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Otvorite `/themes/next/_config.yml`, u polje `social_icons` dodajte naziv društvene mreže (obratite pažnju na velika i mala slova) i [ikonu](http://fontawesome.io/icons/). Opcija `enable` služi za kontrolu prikaza ikona; možete je postaviti na `false` da biste uklonili ikone. Na primer:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Povezivanje bloga sa GitHub-om

 * Registrujte GitHub nalog: Ako još uvek nemate GitHub nalog, potrebno je da se prvo registrujete.

 * Na GitHub-u kreirajte projekat pod nazivom `XXX.github.io`, gde je XXX vaše GitHub korisničko ime.

 * Otvorite konfiguracioni fajl `_config.yml` unutar lokalne fascikle `MyBlog` i podesite `type` na `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Pokrenite:

 ```bash
 npm install hexo-deployer-git --save
 ```
 * Generišite statičke fajlove lokalno i postavite ih na GitHub, pokrenite:

```bash
hexo g
hexo d
```

Sada otvorite pretraživač i posetite `http://your-name.github.io`. Čestitamo, vaš blog je do sada potpuno postavljen.

### Povezivanje domena

Do sada je blog u potpunosti postavljen i može mu se pristupiti putem GitHub domena. Bilo bi savršeno da ga povežete sa kratkim domenom.

#### Kupovina domena

*   Kupite domen; preporučuje se kupovina na [namesilo.com](https://www.namesilo.com/), starom i pouzdanom provajderu domena, sa povoljnim cenama i pouzdanom uslugom. Ako koristite moj promo kod `PhiloArt.io`, možete dobiti popust od 1 USD. Važi do 31.12.2025.

### DNS rezolucija domena

*   Podešavanje DNS-a kod provajdera domena

*   Dodajte 4 A zapisa, koji pokazuju na GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Dodajte CNAME zapis, gde je `name` `www`, a `content` je `your-name.github.io` (pokazuje na vašu GitHub Pages adresu):

 > CNAME —> philo-li.github.io

*   Za detaljnija podešavanja, pogledajte [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Dodavanje CNAME fajla u direktorijum bloga

 Nakon konfigurisanja DNS rezolucije domena, uđite u direktorijum bloga, u fascikli `source` kreirajte novi fajl pod nazivom `CNAME` (obratite pažnju na velika slova, bez ekstenzije), otvorite ga Notepadom i unesite kupljeni domen, na primer: `www.philoli.com`

*   Pokrenite:

```bash
hexo g
hexo d
```

Sada otvorite pretraživač, unesite domen, pritisnite Enter, i čestitamo – sada imate blog sa sopstvenim domenom.

### Objavljivanje novih članaka

*   U osnovnom direktorijumu bloga izvršite: `hexo new “Moj prvi članak”`. Ovo će generisati `.md` fajl u fascikli `source/_posts`.

*   Uredite taj fajl, izmenite početna polja na:

 ```bash
 title Naslov članka
 date Datum kreiranja (datum kreiranja fajla)
 updated Datum izmene (datum izmene fajla)
 comments Da li omogućiti komentare true
 tags Tagovi
 categories Kategorije
 permalink Ime u URL-u (ime fajla)
 ```

*   Napišite glavni sadržaj (pridržavajući se Markdown pravila).

*   Lokalno generišite statičke fajlove i postavite ih na GitHub, pokrenite:

```bash
hexo g
hexo d
```

### Prilagođavanje (napredno)

U nastavku su navedena neka napredna podešavanja stila bloga; početnici mogu preskočiti ovaj deo.

#### Dodavanje RSS-a

 * Instalirajte dodatak u osnovnom direktorijumu:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * U `_config.yml` u osnovnom direktorijumu, dodajte na kraj: (**_Obratite pažnju da posle dvotačke morate dodati razmak, inače će doći do greške!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Otvorite `/themes/next/_config.yml`, izmenite `rss` (obratite pažnju da posle dvotačke morate dodati razmak)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Skraćivanje članaka na početnoj strani
 * Svaki put kada pišete članak, jednostavno dodajte:

 ```markdown
     <!--more-->
 ```
 na mestu gde želite da se članak skrati u `.md` fajlu.

 * Otvorite `/themes/next/_config.yml` i podesite opciju `scroll_to_more` na `false`.

#### Centriranje citiranog teksta unutar članaka
*   Optimizovan podrazumevani stil citata u Markdown-u.

```markdown
{% centerquote %}
Tekst citata
{% endcenterquote %}
```

{% centerquote %}
Tekst citata
{% endcenterquote %}

#### Izmena stila blokova koda

*   Uredite `/themes/next/_config.yml`, izmenite `codeblock` konfiguraciju na sledeći način:

```yml
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # See: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result.
    show_result: true
    # Available values: default | flat | mac
    style:
```

#### Podešavanje vremena osnivanja sajta

 * Uredite `_config.yml` sajta, dodajte novo polje `since`.

```bash
since: 2024
```

#### Poboljšanje stila linkova u člancima

*   Uredite i izmenite fajl `themes\next\source\css\_common\components\post\post.styl`, dodajte sledeći CSS stil na kraj:

``` css
// link style
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
*   U fascikli `source` u osnovnom direktorijumu kreirajte fasciklu `_data`, zatim kreirajte fajl `styles.styl`. Otvorite novokreirani fajl `source/_data/styles.styl` i dodajte sledeći sadržaj:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Da li se slika ponavlja i kako, ako ne može da popuni prostor
    background-attachment:fixed;    //Da li se slika pomera sa skrolovanjem
    background-size: cover;         //Pokriva
    background-position:50% 50%;    //Pozicija slike
}
```
*   U URL-u može biti link do slike ili putanja do slike. Sliku možete nazvati `background.jpg` i staviti je u fasciklu `source/uploads`.

#### Podešavanje poluprovidne pozadine sadržaja bloga
*   Otvorite fajl `source/_data/styles.styl` koji ste uredili u prethodnom koraku i nastavite da dodajete sledeći sadržaj:

```css

//Providnost sadržaja bloga
//Podešavanje providnosti sadržaja članka
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


//Podešavanje providnosti bočne trake
.sidebar {
  opacity: 0.9;
}

//Podešavanje providnosti menija
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Podešavanje providnosti polja za pretragu (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimizacija stila inline blokova koda
*   Otvorite fajl `source/_data/styles.styl` koji ste uredili u prethodnom koraku i nastavite da dodajete sledeći sadržaj:

```css
// Ulepšavanje Code tagova
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Dodavanje broja posetilaca na dno sajta

*   Uredite i izmenite fajl

```css
# Pronađite labelu copyright, a zatim unutar nje dodajte kod

<div class="copyright">
# ......ovde već postoji neka konfiguracija
# Ovde dodajte novi kod
</div>

# Nakon dodavanja izgleda ovako:
<div class="copyright">
  # ......ovde već postoji neka konfiguracija
  # Ovde dodajte novi kod
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Ponovo generišite i pregledajte izmenjeni efekat, a kada potvrdite da je sve u redu, objavite.

```bash
hexo g
hexo s
# Kada potvrdite da je sve u redu, objavite
hexo d
```

#### Dodavanje README.md fajla u repozitorijum

Svaki projekat obično ima `README.md` fajl, ali kada se Hexo postavi u repozitorijum, `README.md` fajl u projektu će biti prebrisan. Stoga je potrebno podesiti konfiguracioni fajl kako bi se izbeglo prepisivanje.

U osnovnom direktorijumu `source` unutar `Hexo` direktorijuma dodajte `README.md` fajl, izmenite konfiguracioni fajl sajta `_config.yml` i postavite vrednost parametra `skip_render` na:

```yml
skip_render: README.md
```
Sačuvajte i izađite. Kada sledeći put koristite `hexo d` komandu za postavljanje bloga, `README.md` fajl neće biti renderovan.

#### Nekoliko korisnih dodataka (plugina)

-   Hexo Filter MathJax: Renderuje matematičke formule
    -   Instalacija: `npm install hexo-filter-mathjax`
    -   Detaljna konfiguracija: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Brojač reči u člancima
    -   Instalacija: `npm install hexo-word-counter`
    -   Detaljna konfiguracija: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optimizuje brzinu učitavanja bloga
    -   Instalacija: `npm install hexo-optimize`
    -   Detaljna konfiguracija: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Više dodataka: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Bekapovanje izvornih fajlova

-   Ne zaboravite da bekapujete lokalne izvorne fajlove, posebno Markdown fajlove. Ako se druge konfiguracije izgube, nećete moći normalno da pišete blog i moraćete da počnete iz početka.
-   Preporučuje se korišćenje istog GitHub repozitorijuma za bekap.
-   Preporučuje se bekapovanje nakon svake izmene ili svakodnevno bekapovanje.
-   Za više informacija pogledajte [Git dokumentaciju](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Dodajte prethodno podešenu adresu repozitorijuma bloga
git remote add https://github.com/your-name/your-name.github.io.git

# Dodajte i sačuvajte trenutne izmene, uz komentar
git add .
git commit -m "Ažuriranje izvornih fajlova"

# Kreirajte i pređite na novu granu
git checkout -b source

# Postavite sav sadržaj lokalne source grane na source granu udaljenog repozitorijuma
git push origin source:source
```

### Pisanje bloga sa različitih računara
-   Kada pišete blog na različitim računarima, potrebno je instalirati osnovni softver, a zatim preuzeti (pull) udaljeni GitHub repozitorijum na lokalni računar kako biste ažurirali blog.

*   Preuzmite i instalirajte Node.js ([preuzmite sa zvaničnog sajta](https://nodejs.org/en/))
*   Preuzmite i instalirajte Git ([preuzmite sa zvaničnog sajta](https://git-scm.com/downloads))
*   Instalirajte Hexo okvir: Otvorite cmd i pokrenite:

 ```bash
 npm install -g hexo-cli
```
*   Izvršite lokalno ažuriranje:

```bash
# Klonirajte repozitorijum lokalno
git clone https://github.com/your-name/your-name.github.io.git

# Ako je repozitorijum već kloniran lokalno, pre svakog ažuriranja bloga povucite najnoviji sadržaj grane
git pull origin

# Prebacite se na odgovarajuću granu
git checkout source

# Nakon instalacije svih Hexo dodataka, možete početi da ažurirate i uređujete sadržaj bloga
npm install

# Nakon izmena, ne zaboravite da odmah bekapujete (jedan dugi korak)
git add .
git commit -m "Ažuriranje bloga xxx"
git push origin source:source

# Objavite najnoviji sadržaj bloga na domenu
hexo clean
hexo g  # Generišite statičke fajlove
hexo s  # Pregledajte blog lokalno
hexo d  # Objavite najnoviji sadržaj bloga
```

### Pregled često korišćenih komandi

 ```bash
hexo g
#ili hexo generate, generiše statičke veb-stranice iz izvornih fajlova
hexo d
#ili hexo deploy, objavljuje i postavlja na GitHub Pages
hexo s
#ili hexo server, lokalno postavljanje za testiranje
hexo clean
# Briše keš statičkih veb-stranica, zatim hexo d ponovo generiše
