---
title: "Hexo-blogin perustaminen alusta alkaen: Yksinkertainen opas (2024-versio)"
date: 2024-04-11 00:25:20
tags: Blogin rakentaminen
categories: Arkipäivän puuhastelu
---
Oletko kyllästynyt blogisivustojen tylsiin käyttöliittymiin, saanut tarpeeksesi loputtomista ilmoituksista ja mainoksista? Oletko jo pitkään halunnut perustaa oman blogin, mutta monimutkaiset ohjeet ja päänvaivaa aiheuttavat koodirivit ovat saaneet sinut luovuttamaan? Onneksi olkoon, tämä artikkeli opastaa sinua askel askeleelta, miten voit pystyttää oman blogisi mahdollisimman yksinkertaisesti. Tarvitset vain hieman kärsivällisyyttä ja seurata ohjeita tarkasti.

<!--more-->

Hexo on nopea, selkeä ja tehokas blogialusta, joka on kuin taivaan lahja aloittelijoille. GitHub puolestaan säästää meidät palvelimen vuokraamisen ja käyttöönoton vaivalta. Tässä oppaassa rakennammekin blogin juuri Hexon ja GitHubin avulla.

Kirjoitin aiemmin vuonna 2018 [yksinkertaisen oppaan blogin perustamisesta alusta alkaen](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Lisäosien päivitysten vuoksi joitakin yksityiskohtia on kuitenkin muutettava, joten julkaisen nyt päivitetyn 2024-version tästä pikaoppaasta.

### Valmistelut

*   Lataa ja asenna Node.js ([viralliselta sivustolta](https://nodejs.org/en/))
*   Lataa ja asenna Git ([viralliselta sivustolta](https://git-scm.com/downloads))

### Hexo-staattisen blogin pystyttäminen paikallisesti

*   Asenna Hexo-kehys: Avaa komentokehote ja suorita

 ```bash
 $ npm install -g hexo-cli
 ```

*   Luo uusi kansio, esimerkiksi MyBlog. Siirry tähän kansioon, napsauta hiiren kakkospainikkeella ja suorita Git Bash. Kirjoita sitten:

 ```bash
 $ hexo init
 ```

*   Kun Hexo-malli on luotu, asenna npm ja suorita:

 ```bash
$ npm install
 ```

Aivan oikein, blogin pääosa on nyt valmis! Katsotaanpa lopputulosta. Suorita:

```bash
$ hexo server
```

Avaa nyt selain ja kirjoita osoitteeksi localhost:4000. Näet blogisi nykyisen ulkoasun. Jännityksen jälkeen voit jatkaa seuraaviin vaiheisiin painamalla Ctrl + C.

### Mukauttaminen (alustava)

#### Teeman vaihtaminen

*   Lataa uusi teema (esimerkiksi [NexT-teema](http://theme-next.iissnan.com/)). Suorita pääkansiossa:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Avaa pääkansiossa oleva `_config.yml`-tiedosto ja muokkaa `theme`-kentän arvoksi:

 ```bash
theme: next
 ```

*   Valitse ulkoasu: Avaa `/themes/next/_config.yml` ja etsi `scheme`-kenttä (voit käyttää pikanäppäintä Ctrl + F). NexT tarjoaa kolme erilaista ulkoasua. Valitse niistä mieleisesi ja poista #-merkki sen edestä (nämä kaksi tiedostoa: _sivuston asetustiedosto_ ja _teeman asetustiedosto_ ovat ne, joita muokkaat eniten jatkossa).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Tarkista tulos suorittamalla seuraavat komennot (voit toistaa tämän vaiheen aina, kun haluat nähdä muutokset):

```bash
hexo g #tai hexo generate
hexo server
```

#### Sivuston asetukset

*   Avaa pääkansiossa oleva sivuston asetustiedosto `_config.yml` tekstieditorilla (älä käytä Muistiota Windowsissa, sillä kiinalaiset merkit saattavat näkyä virheellisesti). Muokkaa `Site`-kenttää. Huomaa, että kaksoispisteen jälkeen tulee olla välilyönti:

 ```bash
 # Site
 title: Tuntematon maailma         // Blogin nimi
 subtitle:
 description:  Tee jotain siistiä // Tunnuslause
 author: LulalaP                 // Kirjoittaja
 language: zh-Hans               // Sivuston kieli
 timezone:
 ```

### Sivupalkin profiilikuvan asettaminen

*   Luo `/source`-kansioon uusi kansio nimeltä `uploads`. Siirrä profiilikuvasi (esim. avatar.jpg) tähän kansioon.

*   Avaa `/themes/next/_config.yml`, etsi `avatar`-kenttä ja muokkaa sitä seuraavasti:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Blogisivujen viimeistely

#### Valikon lisääminen
*   Avaa `/themes/next/_config.yml` ja poista #-merkki niiden valikkokohtien edestä, jotka haluat lisätä valikkoon. Voit lisätä muita valikkokohtia tarpeen mukaan (huomaa sisennys):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategoriat-sivun luominen

*   Luo uusi sivu nimeltä `categories` seuraavalla komennolla:

 ```bash
 $ hexo new page categories
 ```

*   Muokkaa juuri luotua sivua `/source/categories/index.md` ja aseta sivun tyypiksi `categories`. Teema näyttää tällöin automaattisesti kaikki kategoriat tällä sivulla (muista jättää välilyönti kaksoispisteen jälkeen).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Tunnistepilvi-sivun luominen

*   Luo uusi sivu nimeltä tags seuraavalla komennolla:

 ```bash
 $ hexo new page "tags"
 ```

*   Muokkaa juuri luotua sivua ja aseta sivun tyypiksi tags. Teema näyttää tällöin automaattisesti tagipilven tällä sivulla.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "Tietoja minusta" -sivun luominen

 *   Luo uusi about-sivu:

 ```bash
 $ hexo new page "about"
 ```

 *   Muokkaa juuri luotua sivua ja kirjoita sisältö Markdown-muodossa.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Sosiaalisen median linkkien lisääminen sivupalkkiin

*   Muokkaa sivuston `_config.yml`-tiedostoa, etsi `social`-kenttä ja lisää sosiaalisen median sivustojen nimet ja osoitteet. Avain-arvo-muoto on `Näytettävä nimi: linkkiosoite`, esimerkiksi:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Avaa `/themes/next/_config.yml` ja lisää `social_icons`-kenttään sosiaalisen median sivustojen nimet (huomaa isot ja pienet kirjaimet) ja [kuvakkeet](http://fontawesome.io/icons/). `enable`-asetus ohjaa kuvakkeiden näkyvyyttä; voit asettaa sen arvoksi `false` poistaaksesi kuvakkeet. Esimerkiksi:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Blogin yhdistäminen GitHubiin

 *   Rekisteröidy GitHub-tilille: Jos sinulla ei vielä ole GitHub-tiliä, sinun on ensin rekisteröidyttävä.

 *   Luo GitHubissa projekti nimeltä `XXX.github.io`, jossa XXX on oma GitHub-käyttäjänimesi.

 *   Avaa paikallisen `MyBlog`-kansion projektin `_config.yml`-asetustiedosto ja aseta `type`-kentän arvoksi `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Suorita:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Luo staattiset tiedostot paikallisesti ja lähetä ne GitHubiin suorittamalla:

```bash
hexo g
hexo d
```

Avaa nyt selain ja mene osoitteeseen http://your-name.github.io. Onneksi olkoon, blogisi on nyt valmis!

### Verkkotunnuksen liittäminen

Toistaiseksi blogi on täysin pystytetty ja siihen pääsee GitHubin verkkotunnuksen kautta. Olisi kuitenkin vielä parempaa liittää blogiin oma lyhyempi verkkotunnus.

#### Verkkotunnuksen ostaminen

*   Osta verkkotunnus. Suosittelen ostamaan sen [namesilo.comista](https://www.namesilo.com/), joka on pitkäikäinen ja luotettava palveluntarjoaja edullisilla hinnoilla. Jos käytät suosituskoodiani `PhiloArt.io`, saat 1 dollarin alennuksen. Tarjous on voimassa 31.12.2025 asti.

### Verkkotunnuksen DNS-asetukset

*   Verkkotunnuksen tarjoajan DNS-asetukset

*   Lisää neljä A-tietuetta osoittamaan GitHub Pagesiin:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Lisää yksi `CNAME`-tietue, jossa `name` on `www` ja `content` on `your-name.github.io` (osoittaa GitHub Pages -osoitteeseesi):

 > CNAME —> philo-li.github.io

*   Tarkemmat asetukset löydät [GitHub Pagesin dokumentaatiosta](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   CNAME-tiedoston lisääminen blogihakemistoon

 Kun verkkotunnuksen DNS-asetukset on tehty, siirry blogikansioon ja luo `source`-hakemistoon uusi tiedosto nimeltä `CNAME` (huomaa isot kirjaimet, ei tiedostopäätettä). Avaa se Muistiolla ja kirjoita ostamasi verkkotunnus, esim. `www.philoli.com`.

*   Suorita:

```bash
hexo g
hexo d
```

Avaa nyt selain, kirjoita verkkotunnus ja paina Enter. Onneksi olkoon, sinulla on nyt oma blogi omalla verkkotunnuksella!

### Uuden artikkelin julkaiseminen

*   Suorita blogin pääkansiossa: `hexo new “Ensimmäinen artikkelini”`. Tämä luo `.md`-tiedoston `source/_posts`-kansioon.

*   Muokkaa tiedostoa ja muuta aloitusmerkinnät seuraaviksi:

 ```bash
 title Artikkelin otsikko
 date Luontipäivämäärä (tiedoston luontipäivämäärä)
 updated Muokkauspäivämäärä (tiedoston muokkauspäivämäärä)
 comments Kommenttien salliminen true
 tags Tunnisteet
 categories Kategoriat
 permalink Nimi URL-osoitteessa (tiedoston nimi)
 ```

*   Kirjoita pääsisältö (noudattaen Markdown-sääntöjä)

*   Luo staattiset tiedostot paikallisesti ja lähetä ne GitHubiin suorittamalla:

```bash
hexo g
hexo d
```

### Mukauttaminen (edistyneempiä asetuksia)

Seuraavaksi esitellään edistyneempiä blogin ulkoasun mukautusasetuksia, jotka aloittelijat voivat ohittaa tässä vaiheessa.

#### RSS-syötteen lisääminen

 *   Asenna lisäosa pääkansiossa

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Lisää pääkansion `_config.yml`-tiedoston loppuun: (**_Huomaa, että kaksoispisteen jälkeen on oltava välilyönti, muuten tapahtuu virhe!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Avaa `/themes/next/_config.yml` ja muokkaa `rss`-kenttää (muista lisätä välilyönti kaksoispisteen jälkeen).

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Artikkelien katkaiseminen etusivulla
 *   Aina kun kirjoitat artikkelin pääsisältöä, lisää katkaisukohdaksi artikkeliin .md-tiedostoon:

 ```markdown
     <!--more-->
 ```

 *   Avaa `/themes/next/_config.yml` ja aseta `scroll_to_more`-asetuksen arvoksi `false`.

#### Lainaustekstin keskittäminen artikkeleissa
*   Markdownin oletuslainaustyyliä on optimoitu.

```markdown
{% centerquote %}
Lainattu teksti
{% endcenterquote %}
```

{% centerquote %}
Lainattu teksti
{% endcenterquote %}

#### Koodilohkon tyylin muokkaaminen

*   Muokkaa `/themes/next/_config.yml`-tiedostoa ja muuta `codeblock`-asetukset seuraaviksi:

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

#### Sivuston perustamisajan asettaminen

 *   Muokkaa sivuston `_config.yml`-tiedostoa ja lisää uusi kenttä `since`.

```bash
since: 2024
```

#### Artikkelilinkkien tyylin parantaminen

*   Muokkaa tiedostoa `themes\next\source\css\_common\components\post\post.styl` ja lisää seuraavat CSS-tyylit loppuun:

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

#### Taustakuvan lisääminen blogiin
*   Luo pääkansion `source`-kansioon `_data`-kansio. Luo uusi tiedosto `styles.styl`. Avaa juuri luotu tiedosto `source/_data/styles.styl` ja lisää seuraava sisältö:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Kuva ei toistu, jos se ei täytä koko aluetta
    background-attachment:fixed;    // Kuva pysyy paikallaan vieritettäessä
    background-size: cover;         // Peittää koko alueen
    background-position:50% 50%;    // Kuvan sijainti
}
```
*   URL-osoite voi olla kuvlinkki tai kuvahakemisto. Voit nimetä kuvan `background.jpg` ja sijoittaa sen `source/uploads`-kansioon.

#### Blogin sisällön taustan asettaminen läpikuultavaksi
*   Avaa edellisessä vaiheessa muokkaamasi tiedosto `source/_data/styles.styl` ja lisää seuraava sisältö sen alapuolelle:

```css

// Blogin sisällön läpinäkyvyys
// Artikkelin sisällön läpinäkyvyysasetukset
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


// Sivupalkin läpinäkyvyysasetukset
.sidebar {
  opacity: 0.9;
}

// Valikkopalkin läpinäkyvyysasetukset
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Hakukentän (local-search) läpinäkyvyysasetukset
.popup {
  opacity: 0.9;
}
```

#### Rivinsisäisten koodilohkojen tyylin optimointi
*   Avaa edellisessä vaiheessa muokkaamasi tiedosto `source/_data/styles.styl` ja lisää seuraava sisältö sen alapuolelle:

```css
// Koodi-tagien ulkoasun parantaminen
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Kävijämäärän lisääminen sivuston alatunnisteeseen

*   Muokkaa tiedostoa

```css
# Etsi copyright-tagi ja lisää koodi tagin sisään

<div class="copyright">
# ......Tässä on jo joitakin asetuksia
# Lisää uusi koodi tähän
</div>

# Lisäyksen jälkeen se näyttää tältä:
<div class="copyright">
  # ......Tässä on jo joitakin asetuksia
  # Lisää uusi koodi tähän
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Luo esikatselu muutoksista, varmista, että kaikki on kunnossa, ja julkaise sitten.

```bash
hexo g
hexo s
# Julkaise, kun olet varmistanut, että kaikki on kunnossa
hexo d
```

#### README.md-tiedoston lisääminen arkistoon

Jokaisessa projektissa on yleensä `README.md`-tiedosto, mutta kun Hexo otetaan käyttöön arkistossa, projektin `README.md`-tiedosto ylikirjoitetaan. Siksi asetustiedostoa on muokattava ylikirjoituksen estämiseksi.

Lisää `README.md`-tiedosto `Hexo`-hakemiston `source`-pääkansioon. Muokkaa sivuston asetustiedostoa `_config.yml` ja aseta `skip_render`-parametrin arvoksi:

```yml
skip_render: README.md
```
Tallenna ja poistu. Kun seuraavan kerran käytät `hexo d`-komentoa blogin käyttöönottoon, `README.md`-tiedostoa ei renderöidä.

#### Muutama hyödyllinen lisäosa

- Hexo Filter MathJax: Renderöi matemaattisia kaavoja
  - Asenna `npm install hexo-filter-mathjax`
  - Tarkemmat asetukset: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Artikkelien sanamäärän laskenta
  - Asenna `npm install hexo-word-counter`
  - Tarkemmat asetukset: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Optimoi blogin latausnopeutta
  - Asenna `npm install hexo-optimize`
  - Tarkemmat asetukset: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Lisää lisäosia: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Lähdetiedostojen varmuuskopiointi

- Muista varmuuskopioida paikalliset lähdetiedostot, erityisesti Markdown-tiedostot. Jos muut asetukset katoavat, et voi kirjoittaa blogia normaalisti, vaan sinun on aloitettava alusta.
- Suosittelen käyttämään samaa GitHub-arkistoa varmuuskopiointiin.
- On suositeltavaa varmuuskopioida aina, kun teet muutoksia, tai vähintään kerran päivässä.
- Lisää käyttöohjeita löydät [Git-dokumentaatiosta](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Lisää aiemmin asetettu blogiarkiston osoite
git remote add https://github.com/your-name/your-name.github.io.git

# Lisää ja tallenna nykyiset muutokset sekä kirjaa kommentti
git add .
git commit -m "Lähdetiedostojen päivitys"

# Luo ja vaihda uuteen haaraan
git checkout -b source

# Työnnä paikallisen source-haaran koko sisältö etäarkiston source-haaraan
git push origin source:source
```

### Blogin kirjoittaminen eri tietokoneilla
- Kun kirjoitat blogia eri tietokoneilla, sinun on ensin asennettava perusohjelmistot, sitten haettava etävarmuuskopioitu GitHub-arkisto paikallisesti ja vasta sitten päivittää blogia.

*   Lataa ja asenna Node.js ([viralliselta sivustolta](https://nodejs.org/en/))
*   Lataa ja asenna Git ([viralliselta sivustolta](https://git-scm.com/downloads))
*   Asenna Hexo-kehys: Avaa komentokehote ja suorita

 ```bash
 npm install -g hexo-cli
```
*   Suorita paikallinen päivitys

```bash
# Kloonaa arkisto paikallisesti
git clone https://github.com/your-name/your-name.github.io.git

# Jos arkisto on jo kloonattu paikallisesti, hae uusin haaran sisältö ennen jokaista blogipäivitystä
git pull origin

# Vaihda vastaavaan haaraan
git checkout source

# Kun kaikki Hexo-asetusten mukaiset lisäosat on asennettu, voit aloittaa blogisisällön päivittämisen ja muokkaamisen
npm install

# Muista varmuuskopioida muutosten jälkeen välittömästi
git add .
git commit -m "Blogin päivitys xxx"
git push origin source:source

# Julkaise ja työnnä uusin blogisisältö verkkotunnussivustolle
hexo clean
hexo g  # Luo staattiset tiedostot
hexo s  # Esikatsele blogia paikallisesti
hexo d  # Julkaise uusin blogisisältö
```

### Yhteenveto yleisimmistä komennoista

 ```bash
hexo g
# tai hexo generate, luo staattiset verkkosivut lähdetiedostojen perusteella
hexo d
# tai hexo deploy, julkaisee ja työntää GitHub Pagesiin
hexo s
# tai hexo server, paikallinen testauskäyttöönotto
hexo clean
# Tyhjentää staattisten verkkosivujen välimuistin, sitten hexo d luo uudelleen
