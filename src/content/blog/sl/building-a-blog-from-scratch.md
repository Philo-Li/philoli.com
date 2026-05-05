---
title: Jedrnat vodič: Postavitev Hexo bloga od začetka (izdaja 2024)
date: 2024-04-11 00:25:20
tags: Postavitev bloga
categories: Dnevno ukvarjanje
---
Ste že siti neestetskih vmesnikov blogov, imate dovolj neskončnih spletnih obvestil in si že dolgo želite ustvariti lasten blog, pa vas je ustavila kompleksnost navodil in kopica zoprnih kod? Potem pa čestitam! Ta članek vas bo korak za korakom naučil, kako si postaviti lasten blog, in to na najpreprostejši in najbolj razumljiv način. Potrebujete le malo potrpljenja in sledite navodilom korak za korakom.

<!--more-->

Hexo je hiter, čist in učinkovit ogrodje za bloge, kar je resnična blagodejnost za začetnike. GitHub pa nam prihrani težave z najemom in postavitvijo lastnega strežnika. Zato bomo v tem članku blog postavili s pomočjo Hexo-ja in GitHub-a.

Nekoč, leta 2018, sem že napisal [jedrnat vodič za postavitev bloga od začetka](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/), a ker so se v vmesnem času posodobili vtičniki, je bilo treba nekatere podrobnosti spremeniti. Zato ponovno predstavljam posodobljeno izdajo 2024 tega jedrnatega vodiča.

### Priprava

*   Prenesite in namestite Node.js ([prenos z uradne strani](https://nodejs.org/en/))
*   Prenesite in namestite Git ([prenos z uradne strani](https://git-scm.com/downloads))

### Lokalna postavitev statičnega bloga Hexo

*   Namestitev ogrodja Hexo: Odprite CMD in zaženite
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Ustvarite novo mapo, na primer `MyBlog`. Vstopite vanjo, z desnim klikom zaženite Git in vnesite:

 ```bash
 $ hexo init
 ```

*   Ko je predloga Hexo ustvarjena, namestite npm in zaženite:

 ```bash
$ npm install
 ```

Tako je, glavni del bloga je zdaj končan! Poglejmo si rezultat. Zaženite:

```bash
$ hexo server
```

V tem trenutku odprite brskalnik, vnesite `localhost:4000` in že boste videli trenutni videz bloga. Malo se poveselite, nato pa pritisnite `Ctrl + C` za nadaljevanje.

### Prilagoditev (začetna)

#### Sprememba teme

*   Prenesite novo temo (na primer [temo NexT](http://theme-next.iissnan.com/)) in jo zaženite v korenskem imeniku:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Odprite datoteko `_config.yml` v korenskem imeniku in spremenite polje `theme` na:

 ```bash
theme: next
 ```

*   Izbira videza: Odprite `/themes/next/_config.yml` in poiščite polje `scheme` (lahko uporabite `Ctrl + F` za hitro iskanje). NexT ponuja tri različne videze. Izberite tistega, ki vam je všeč, in odstranite znak `#` pred njim. (V prihodnje boste večinoma spreminjali ti dve datoteki: _konfiguracijsko datoteko spletnega mesta_ in _konfiguracijsko datoteko teme_.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Za ogled učinka zaženite naslednje ukaze (ta korak lahko ponovite vsakič, ko želite preveriti spremembe):

```bash
hexo g #ali hexo generate
hexo server
```

#### Konfiguracija spletnega mesta

*   Odprite konfiguracijsko datoteko spletnega mesta `_config.yml` v korenskem imeniku z urejevalnikom (v sistemu Windows ne uporabljajte Beležnice, saj se bodo kitajski naslovi prikazali kot nečitljivi znaki). Spremenite polje `Site`. Pazite, da za dvopičjem pustite presledek:

 ```bash
 # Site
 title: Neznani svet                // Ime bloga
 subtitle:
 description:  Do something cool // Kratki moto/podpis
 author: LulalaP                 // Avtor
 language: zh-Hans               // Jezik spletnega mesta
 timezone:
 ```

### Nastavitev avatarja v stranski vrstici

*   V `/source` ustvarite novo mapo z imenom `uploads`. Vanjo postavite sliko avatarja (npr. `avatar.jpg`).

*   Odprite `/themes/next/_config.yml`, poiščite polje `avatar` in ga spremenite na:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Izboljšanje strani bloga

#### Dodajanje menija
*   Odprite `/themes/next/_config.yml` in odstranite komentarje (znak `#`) pred meniji, ki jih želite dodati v polju `menu`. Če želite dodati druge menije, jih lahko dodate po potrebi (pazite na zamik polja):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Ustvarjanje strani za kategorije

*   Ustvarite novo stran z imenom `categories` z naslednjim ukazom:

 ```bash
 $ hexo new page categories
 ```

*   Uredite pravkar ustvarjeno stran `/source/categories/index.md`. Nastavite tip strani na `categories`, tema pa bo samodejno prikazala vse kategorije na tej strani (pazite, da za dvopičjem pustite presledek).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Ustvarjanje strani z oblakom oznak

*   Ustvarite novo stran z imenom `tags` z naslednjim ukazom:

 ```bash
 $ hexo new page "tags"
 ```

*   Uredite pravkar ustvarjeno stran. Nastavite tip strani na `tags`, tema pa bo samodejno prikazala oblak oznak na tej strani.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Ustvarjanje strani »O meni«

 *   Ustvarite novo stran `about`:

 ```bash
 $ hexo new page "about"
 ```

 *   Uredite pravkar ustvarjeno stran. Besedilo lahko napišete v formatu Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Nastavitev povezav do socialnih omrežij v stranski vrstici

*   Uredite `_config.yml` spletnega mesta, poiščite polje `social` in dodajte ime in naslov socialnega omrežja. Format ključ-vrednost je `PrikaznoIme: Povezava`, na primer:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Odprite `/themes/next/_config.yml` in pod poljem `social_icons` dodajte ime socialnega omrežja (pazite na velike in male črke) ter [ikono](http://fontawesome.io/icons/). Možnost `enable` nadzoruje prikaz ikon; lahko jo nastavite na `false`, da odstranite ikone. Na primer:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Povezava bloga z GitHubom

 *   Registracija GitHub računa: Če še nimate GitHub računa, ga morate najprej ustvariti.

 *   Na GitHubu ustvarite projekt z imenom `XXX.github.io`, kjer je `XXX` vaše GitHub uporabniško ime.

 *   Odprite konfiguracijsko datoteko `_config.yml` v lokalni mapi projekta `MyBlog` in nastavite `type` na `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Zaženite:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Lokalno ustvarite statične datoteke in jih potisnite na GitHub. Zaženite:

```bash
hexo g
hexo d
```

Zdaj odprite brskalnik, obiščite `http://your-name.github.io` in čestitam! Vaš blog je uspešno postavljen.

### Povezava domene

Blog je do sedaj v celoti postavljen in dostopen preko GitHub domene. Za popolnost pa ga je idealno povezati še s krajšo, lastno domeno.

#### Nakup domene

*   Kupite domeno. Priporočam nakup na [namesilo.com](https://www.namesilo.com/), saj gre za uveljavljenega ponudnika domen z ugodnimi cenami in zanesljivo storitvijo. Če uporabite mojo referenčno kodo `PhiloArt.io`, prejmete 1 USD popusta. Veljavnost do 31. 12. 2025.

### DNS nastavitev domene

*   Nastavitve DNS pri ponudniku domene

*   Dodajte 4 A-zapise, ki kažejo na GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Dodajte en CNAME zapis, kjer je `name` `www`, `content` pa `your-name.github.io` (kaže na vaš naslov GitHub Pages):

 > CNAME —> philo-li.github.io

*   Za podrobnejše nastavitve si oglejte [dokumentacijo GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Dodajanje datoteke CNAME v imenik bloga

 Ko so nastavitve DNS končane, pojdite v imenik bloga. V mapi `source` ustvarite novo datoteko z imenom `CNAME` (pazite na velike črke in brez pripone). Odprite jo z Beležnico in vanjo vpišite kupljeno domeno, npr. `www.philoli.com`.

*   Zaženite:

```bash
hexo g
hexo d
```

Zdaj odprite brskalnik, vnesite domeno, pritisnite Enter in čestitam! Imate svoj blog z lastno domeno.

### Objava novega članka

*   V korenskem imeniku bloga izvedite: `hexo new “Moj prvi članek”`. To bo ustvarilo `.md` datoteko v mapi `source/_posts`.

*   Uredite to datoteko in spremenite začetna polja na:

 ```bash
 title Naslov članka
 date Datum ustvarjanja (datum ustvarjanja datoteke)
 updated Datum posodobitve (datum spremembe datoteke)
 comments Ali so komentarji omogočeni true
 tags Oznake
 categories Kategorije
 permalink Ime v URL-ju (ime datoteke)
 ```

*   Napišite glavno vsebino (upoštevajte pravila Markdowna)

*   Lokalno ustvarite statične datoteke in jih potisnite na GitHub. Zaženite:

```bash
hexo g
hexo d
```

### Prilagoditev (napredna)

Spodaj so na voljo nekatere napredne nastavitve za prilagoditev sloga bloga. Začetniki lahko ta del preskočite.

#### Dodajanje RSS-vira

 *   Namestite vtičnik v korenskem imeniku

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Na koncu datoteke `_config.yml` v korenskem imeniku dodajte naslednje: (**_Pazite, da za dvopičjem dodate presledek, sicer bo prišlo do napake!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Odprite `/themes/next/_config.yml` in spremenite `rss` (pazite, da za dvopičjem dodate presledek).

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Skrajšanje člankov na domači strani
 *   Vsakič, ko pišete članek, preprosto dodajte naslednje v `.md` datoteko članka, kjer želite, da se besedilo skrajša:

 ```markdown
     <!--more-->
 ```

 *   Odprite `/themes/next/_config.yml` in spremenite možnost `scroll_to_more` na `false`.

#### Centriranje citiranega besedila v člankih
*   Optimiziran je privzeti slog citatov v Markdownu.

```markdown
{% centerquote %}
Citirano besedilo
{% endcenterquote %}
```

{% centerquote %}
Citirano besedilo
{% endcenterquote %}

#### Sprememba sloga blokov kode

*   Uredite `/themes/next/_config.yml` in spremenite konfiguracijo `codeblock` kot sledi:

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

#### Nastavitev datuma ustanovitve spletnega mesta

 *   Uredite `_config.yml` spletnega mesta in dodajte novo polje `since`.

```bash
since: 2024
```

#### Izboljšanje sloga povezav v člankih

*   Uredite datoteko `themes\next\source\css\_common\components\post\post.styl` in na konec dodajte naslednje CSS sloge:

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

#### Dodajanje ozadja blogu
*   V mapi `source` v korenskem imeniku ustvarite mapo `_data`. Ustvarite datoteko `styles.styl`. Odprite novo datoteko `source/_data/styles.styl` in dodajte naslednjo vsebino:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Sliko ponovi, če ne pokrije celotnega ozadja
    background-attachment:fixed;    //Ali se slika premika s pomikanjem
    background-size: cover;         //Pokrije celotno površino
    background-position:50% 50%;    //Položaj slike
}
```
*   URL je lahko povezava do slike ali pot do slike. Sliko lahko poimenujete `background.jpg` in jo postavite v mapo `source/uploads`.

#### Nastavitev prosojnosti ozadja vsebine bloga
*   Odprite datoteko `source/_data/styles.styl`, ki ste jo urejali v prejšnjem koraku, in dodajte naslednjo vsebino:

```css

//Prosojnost vsebine bloga
//Nastavitev prosojnosti vsebine članka
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


//Nastavitev prosojnosti stranske vrstice
.sidebar {
  opacity: 0.9;
}

//Nastavitev prosojnosti menijske vrstice
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Nastavitev prosojnosti iskalnega polja (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimizacija sloga vgrajenih blokov kode
*   Odprite datoteko `source/_data/styles.styl`, ki ste jo urejali v prejšnjem koraku, in dodajte naslednjo vsebino:

```css
// Polepšanje oznake za kodo
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Dodajanje števila obiskovalcev na dno spletnega mesta

*   Uredite datoteko

```css
# Poiščite oznako `copyright` in dodajte kodo znotraj nje

<div class="copyright">
# ......Tukaj so že nekatere nastavitve
# Tukaj dodajte novo kodo
</div>

# Po dodajanju izgleda takole:
<div class="copyright">
  # ......Tukaj so že nekatere nastavitve
  # Tukaj dodajte novo kodo
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Ponovno ustvarite in si oglejte spremenjeni učinek. Ko potrdite, da je vse v redu, objavite.

```bash
hexo g
hexo s
# Ko potrdite, da je vse v redu, objavite
hexo d
```

#### Dodajanje datoteke README.md v repozitorij

Vsak projekt običajno vsebuje datoteko `README.md`. Vendar pa bo ta datoteka v repozitoriju prepisana, ko jo Hexo objavi. Zato je treba nastaviti konfiguracijsko datoteko, da preprečite prepisovanje.

V korenskem imeniku `source` znotraj imenika `Hexo` dodajte datoteko `README.md`. Spremenite konfiguracijsko datoteko spletnega mesta `_config.yml` in nastavite vrednost parametra `skip_render` na:

```yml
skip_render: README.md
```
Shranite in zaprite. Ko boste naslednjič uporabili ukaz `hexo d` za objavo bloga, datoteka `README.md` ne bo upodobljena.

#### Nekaj pogosto uporabljenih vtičnikov

-   Hexo Filter MathJax: Prikaz matematičnih formul
  -   Namestitev: `npm install hexo-filter-mathjax`
  -   Podrobna konfiguracija: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Štetje besed v člankih
  -   Namestitev: `npm install hexo-word-counter`
  -   Podrobna konfiguracija: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optimizacija hitrosti nalaganja bloga
  -   Namestitev: `npm install hexo-optimize`
  -   Podrobna konfiguracija: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Več vtičnikov: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Varnostno kopiranje izvornih datotek

-   Ne pozabite redno varnostno kopirati lokalnih izvornih datotek, še posebej datotek Markdown. Če se ostale konfiguracije izgubijo, ne boste mogli normalno pisati bloga in boste morali vse nastaviti od začetka.
-   Priporočljivo je uporabiti isti GitHub repozitorij za varnostno kopiranje.
-   Priporočljivo je, da varnostno kopirate po vsaki spremembi ali pa enkrat dnevno.
-   Za več podrobnosti si oglejte [dokumentacijo Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Dodajte predhodno nastavljen naslov repozitorija bloga
git remote add https://github.com/your-name/your-name.github.io.git

# Dodajte in shranite trenutne spremembe ter dodajte opombo
git add .
git commit -m "Posodobitev izvornih datotek"

# Ustvarite in preklopite na novo vejo
git checkout -b source

# Potisnite celotno vsebino lokalne veje `source` na vejo `source` oddaljenega repozitorija
git push origin source:source
```

### Pisanje bloga z različnih računalnikov
-   Ko pišete blog na različnih računalnikih, morate namestiti osnovno programsko opremo, nato pa potegniti oddaljeni varnostno kopiran GitHub repozitorij na lokalni računalnik za posodobitev bloga.

*   Prenesite in namestite Node.js ([prenos z uradne strani](https://nodejs.org/en/))
*   Prenesite in namestite Git ([prenos z uradne strani](https://git-scm.com/downloads))
*   Namestitev ogrodja Hexo: Odprite CMD in zaženite

 ```bash
 npm install -g hexo-cli
```
*   Lokalna posodobitev

```bash
# Klonirajte repozitorij na lokalni računalnik
git clone https://github.com/your-name/your-name.github.io.git

# Če je repozitorij že kloniran, morate pred vsako posodobitvijo bloga potegniti najnovejšo vsebino veje
git pull origin

# Preklopite na ustrezno vejo
git checkout source

# Ko so vsi vtičniki iz konfiguracije Hexo nameščeni, lahko začnete posodabljati in urejati vsebino bloga
npm install

# Po spremembi vsebine ne pozabite takoj varnostno kopirati
git add .
git commit -m "Posodobitev bloga xxx"
git push origin source:source

# Objavite in potisnite najnovejšo vsebino bloga na spletno mesto z domeno
hexo clean
hexo g  # Ustvarite statične datoteke
hexo s  # Lokalni predogled bloga
hexo d  # Objavite najnovejšo vsebino bloga
```

### Povzetek pogosto uporabljenih ukazov

 ```bash
hexo g
# ali hexo generate, ustvari statične spletne strani iz izvornih datotek
hexo d
# ali hexo deploy, objavi in potisne na GitHub Pages
hexo s
# ali hexo server, lokalna postavitev za testiranje
hexo clean
# Počisti predpomnilnik statičnih spletnih strani, nato pa hexo d ponovno ustvari
