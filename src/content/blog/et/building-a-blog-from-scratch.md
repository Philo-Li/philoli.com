---
title: Lihtne juhend Hexo blogi loomiseks nullist (2024. aasta versioon)
date: 2024-04-11 00:25:20
tags: Blogi loomine
categories: Igapäevased toimetused
---
Kas olete juba ammu tüdinenud blogiplatvormide koledatest liidestest? Kas olete villand lõpututest veebisaidi teavitustest ja soovitustest? Olete ehk juba ammu tahtnud luua oma isiklikku blogi, kuid olete pidurdunud keeruliste juhendite ja peavalu tekitava koodi pärast? Siis on mul hea meel teatada, et see artikkel õpetab teile samm-sammult ja kõige lihtsamal ning arusaadavamal moel, kuidas oma blogi luua. Teil on vaja vaid veidi kannatust ja järgida juhiseid.

<!--more-->

Hexo on kiire, lihtne ja tõhus blogiraamistik, mis on algajatele tõeline õnnistus. GitHub seevastu vabastab meid lisaserverite rentimise ja haldamise vaevast. Seepärast keskendubki käesolev juhend blogi loomisele Hexo ja GitHubi abil.

2018. aastal kirjutasin ma juba ühe [lihtsa juhendi blogi loomiseks nullist](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Kuna aga pistikprogrammid on vahepeal uuendatud, on vaja mõningaid detaile muuta. Seepärast ilmub nüüd see 2024. aasta uuendatud ja täpsustatud lihtjuhend.

### Ettevalmistused

*   Lae alla ja paigalda node.js ([lae alla ja paigalda ametlikult veebilehelt](https://nodejs.org/en/))
*   Lae alla ja paigalda git ([lae alla ja paigalda ametlikult veebilehelt](https://git-scm.com/downloads))

### Hexo staatilise blogi loomine kohalikult

*   Hexo raamistiku paigaldamine: Ava käsurida (CMD) ja käivita:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Loo uus kaust, näiteks MyBlog, sisene sinna ja paremklõpsa, et käivitada Git, sisestades:

 ```bash
 $ hexo init
 ```

*   Kui Hexo mall on loodud, paigalda npm, käivitades:

 ```bash
$ npm install
 ```

Täpselt nii, blogi põhiosa on sellega valmis! Vaatame tulemust. Käivita:

```bash
$ hexo server
```

Nüüd ava brauser ja sisesta localhost:4000, et näha oma blogi praegust versiooni. Tunne hetkeks väikest elevust, seejärel vajuta Ctrl + C, et jätkata järgmiste sammudega.

### Esialgne isikupärastamine

#### Teema vahetamine

*   Lae alla uus teema (näiteks [NexT teema](http://theme-next.iissnan.com/)). Käivita juurkaustas:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Ava juurkaustas asuv fail `_config.yml` ja muuda välja `theme` väärtuseks:

 ```bash
theme: next
 ```

*   Vali välimus: Ava `/themes/next/_config.yml`, leia väli `scheme` (saad kasutada kiirklahvi Ctrl + F). NexT pakub kolme erinevat välimust – vali endale meelepärane ja eemalda selle eest # märk. (Edaspidi hakkadki peamiselt muutma neid kahte faili: _saidikonfiguratsioonifail_ ja _teema konfiguratsioonifail_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Tulemuse nägemiseks käivita järgmised käsud (seda sammu saad korrata iga kord, kui soovid muutusi näha):

```bash
hexo g #või hexo generate
hexo server
```

#### Saidi konfiguratsioon

*   Ava juurkaustas asuv saidikonfiguratsioonifail `_config.yml` (Windowsis ära kasuta märkmikku, sest hiinakeelsete pealkirjade puhul võivad tekkida vead). Muuda välja `Site` väärtusi. Pane tähele, et kooloni järel peab olema tühik:

 ```bash
 # Site
 title: Tundmatu maailm                // blogi nimi
 subtitle:
 description:  Do something cool // signatuur
 author: LulalaP                 // autor
 language: zh-Hans               // veebisaidi keel
 timezone:
 ```

### Külgriba avatari seadistamine

*   Loo kataloogi `/source` uus kaust nimega `uploads` ja paiguta oma profiilipilt (nt avatar.jpg) sinna kausta.

*   Ava `/themes/next/_config.yml`, leia väli `avatar` ja muuda see järgmiseks:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Blogilehtede täiustamine

#### Menüü lisamine
*   Ava `/themes/next/_config.yml` ja eemalda kommenteerimismärk (#) nende menüükirjete eest, mida soovid lisada. Kui soovid lisada teisi menüükirjeid, tee seda vastavalt vajadusele (pööra tähelepanu taandele):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategooriate lehe loomine

*   Loo uus leht nimega `categories` järgmise käsuga:

 ```bash
 $ hexo new page categories
 ```

*   Muuda äsja loodud lehte `/source/categories/index.md` ja määra lehe tüübiks `categories`. Teema kuvab sellel lehel automaatselt kõik kategooriad (pane tähele, et kooloni järel peab olema tühik).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Sildipilve lehe loomine

*   Loo uus leht nimega tags järgmise käsuga:

 ```bash
 $ hexo new page "tags"
 ```

*   Muuda äsja loodud lehte ja määra lehe tüübiks tags. Teema kuvab sellel lehel automaatselt sildipilve.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "Minust" lehe loomine

 * Loo uus 'about' leht:

 ```bash
 $ hexo new page "about"
 ```

 * Muuda äsja loodud lehte ja kirjuta sisu Markdowni formaadis.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Külgriba sotsiaalmeedia linkide seadistamine

*   Muuda saidi `_config.yml` faili, leia väli `social` ja lisa sotsiaalmeedia saitide nimed ja aadressid. Võtme-väärtuse formaat on `Kuvatav nimi: lingi aadress`, näiteks:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Ava `/themes/next/_config.yml` ja lisa `social_icons` välja alla sotsiaalmeedia saitide nimed (pööra tähelepanu suurtähtedele) ja [ikoonid](http://fontawesome.io/icons/). Valik `enable` kontrollib ikoonide kuvamist – saad selle väärtuseks määrata `false`, et ikoonid eemaldada. Näiteks:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Blogi ühendamine GitHubiga

 * Registreeri GitHubi konto: Kui sul veel GitHubi kontot pole, pead selle esmalt looma.

 * Loo GitHubis projekt nimega `XXX.github.io`, kus XXX on sinu GitHubi kasutajanimi.

 * Ava oma kohaliku `MyBlog` kausta projekti `_config.yml` konfiguratsioonifail ja määra `type` väärtuseks `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Käivita:

 ```bash
 npm install hexo-deployer-git --save
 ```
 * Genereeri kohalikud staatilised failid ja laadi need GitHubi üles, käivitades:

```bash
hexo g
hexo d
```

Nüüd ava brauser ja külasta aadressi http://your-name.github.io. Õnnitlused, sinu blogi on sellega valmis!

### Domeeni sidumine

Selleks hetkeks on blogi täielikult loodud ja sellele pääseb ligi ka GitHubi domeeni kaudu. Aga veelgi täiuslikum on siduda blogiga lühike, isiklik domeeninimi.

#### Domeeni ostmine

*   Osta domeeninimi. Soovitan osta [namesilo.com](https://www.namesilo.com/) kaudu – see on tuntud domeeniteenuse pakkuja, kellel on soodsad hinnad ja usaldusväärne teenindus. Kui kasutad minu soovituskoodi `PhiloArt.io`, saad ka 1 dollari soodustust (kehtib kuni 31.12.2025).

### Domeeni lahendamine

*   Domeeniteenuse pakkuja DNS-i seaded

*   Lisa neli A-kirjet, mis viitavad GitHub Pagesile:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Lisa üks `CNAME`-kirje, mille `name` on `www` ja `content` on `your-name.github.io` (viitab sinu GitHub Pagesi aadressile):

 > CNAME —> philo-li.github.io

*   Täpsemate seadete kohta vaata [GitHub Pagesi dokumentatsioonist](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   CNAME-faili lisamine blogi kataloogi

Pärast domeeni seadistamise lõpetamist mine oma blogi kataloogi, loo `source` kausta uus fail nimega `CNAME` (pööra tähelepanu, et see oleks suurtähtedega ja ilma laiendita). Ava see Notepadi abil ja sisesta ostetud domeeninimi, näiteks: `www.philoli.com`.

*   Käivita:

```bash
hexo g
hexo d
```

Nüüd ava brauser, sisesta domeeninimi ja vajuta sisestusklahvi. Õnnitlused, sul on nüüd oma isikliku domeeniga blogi!

### Uue postituse avaldamine

*   Käivita blogi juurkaustas: `hexo new “Minu esimene postitus”`. See loob `source/_posts` kausta uue `.md` faili.

*   Muuda seda faili, kohandades algusvälju järgmiselt:

 ```bash
 title Postituse pealkiri
 date Loomise kuupäev (faili loomise kuupäev)
 updated Muutmise kuupäev (faili muutmise kuupäev)
 comments Kas lubada kommentaarid true
 tags Sildid
 categories Kategooriad
 permalink Nimi URL-is (faili nimi)
 ```

*   Kirjuta põhiosa (järgi Markdowni reegleid).

*   Genereeri kohalikud staatilised failid ja laadi need GitHubi üles, käivitades:

```bash
hexo g
hexo d
```

### Isikupärastamise lisaseaded (edasijõudnutele)

Allpool on toodud mõned täpsemad blogi stiili seaded. Algajad võivad need esialgu vahele jätta.

#### RSS-i lisamine

 * Paigalda pistikprogramm juurkausta:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Lisa juurkaustas asuva `_config.yml` faili lõppu: (**_Palun pane tähele, et pärast koolonit peab olema tühik, vastasel juhul tekib viga!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Ava `/themes/next/_config.yml` ja muuda `rss` (pane tähele, et pärast koolonit peab olema tühik):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Postituste katkestamine avalehel
 * Iga kord artikli põhiteksti kirjutades lisa `.md` faili kohale, kust soovid teksti katkestada, järgmine rida:

 ```markdown
     <!--more-->
 ```

 * Ava `/themes/next/_config.yml` ja muuda valik `scroll_to_more` väärtuseks `false`.

#### Artiklisisese tsitaadi teksti tsentreerimine
*   Markdowni vaikimisi tsitaatide stiili optimeerimine.

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
引用正文
{% endcenterquote %}

#### Koodiploki stiili muutmine

*   Muuda `/themes/next/_config.yml` faili, kohandades `codeblock` konfiguratsiooni järgmiselt:

```yml
codeblock:
  # Koodi esiletõstmise teema
  # Saadaval väärtused: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # Vaata: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Lisa kopeerimisnupp koodiplokile
  copy_button:
    enable: true
    # Näita teksti kopeerimise tulemust.
    show_result: true
    # Saadaval väärtused: default | flat | mac
    style:
```

#### Saidi loomise aja seadistamine

 * Muuda saidi `_config.yml` faili, lisades uue välja `since`.

```bash
since: 2024
```

#### Artikli linkide stiili parendamine

*   Muuda faili `themes\next\source\css\_common\components\post\post.styl`, lisades lõppu järgmised CSS-stiilid:

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

#### Blogile taustapildi lisamine
*   Loo juurkaustas `source` kausta `_data` kaust, seejärel loo sinna uus fail `styles.styl`. Ava äsja loodud fail `source/_data/styles.styl` ja lisa sinna järgmine sisu:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Kas pilt peaks korduma ja kuidas, kui see ei täida kogu ala
    background-attachment:fixed;    // Kas pilt peaks kerimisega kaasa liikuma
    background-size: cover;         // Katta
    background-position:50% 50%;    // Pildi asukoht
}
```
*   URL võib olla pildi link või pildi kataloog. Võid nimetada pildi `background.jpg` ja paigutada selle `source/uploads` kausta.

#### Blogi sisu tausta poolläbipaistvaks muutmine
*   Ava eelnevalt muudetud fail `source/_data/styles.styl` ja lisa sinna järgmine sisu:

```css

// Blogi sisu läbipaistvus
// Artikli sisu läbipaistvuse seaded
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


// Külgriba läbipaistvuse seaded
.sidebar {
  opacity: 0.9;
}

// Menüüriba läbipaistvuse seaded
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Otsingukasti (local-search) läbipaistvuse seaded
.popup {
  opacity: 0.9;
}
```

#### Reasisese koodiploki stiili optimeerimine
*   Ava eelnevalt muudetud fail `source/_data/styles.styl` ja lisa sinna järgmine sisu:

```css
// Koodi sildi stiili täiustamine
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Külastajate arvu lisamine veebisaidi jalusesse

*   Muuda faili:

```css
# Leia sildiplokk copyright ja lisa kood sildi sisse

<div class="copyright">
# ......Siin on juba mõned seaded
# Lisa siia uus kood
</div>

# Pärast lisamist näeb see välja nii:
<div class="copyright">
  # ......Siin on juba mõned seaded
  # Lisa siia uus kood
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Genereeri uuesti muudetud efekti eelvaade, ja kui kõik on korras, avalda.

```bash
hexo g
hexo s
# Pärast kinnitust avalda
hexo d
```

#### README.md faili lisamine hoidlasse

Igal projektil on tavaliselt `README.md` fail, kuid kui Hexo on hoidlasse paigaldatud, kirjutatakse projekti `README.md` fail üle. Seepärast on vaja konfiguratsioonifaili seadistada, et vältida ülekirjutamist.

Lisa `Hexo` kataloogi `source` juurkausta `README.md` fail, muuda saidikonfiguratsioonifaili `_config.yml` ja määra `skip_render` parameetri väärtuseks:

```yml
skip_render: README.md
```
Salvesta ja välju. Kui järgmine kord blogi `hexo d` käsuga paigaldad, siis `README.md` faili enam ei renderdata.

#### Mõned levinumad pistikprogrammid

- Hexo Filter MathJax: Matemaatiliste valemite renderdamine
  - Paigaldamine `npm install hexo-filter-mathjax`
  - Täpsem konfiguratsioon: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Artikli sõnade arvu statistika
  - Paigaldamine `npm install hexo-word-counter`
  - Täpsem konfiguratsioon: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Blogi laadimise kiiruse optimeerimine
  - Paigaldamine `npm install hexo-optimize`
  - Täpsem konfiguratsioon: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Rohkem pistikprogramme: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Lähtefailide varundamine

- Pea meeles varundada oma kohalikud lähtefailid, eriti Markdowni failid. Kui teised konfiguratsioonid kaovad, ei saa sa enam normaalselt blogi kirjutada ja pead kõik uuesti nullist seadistama.
- Soovitatav on kasutada varundamiseks sama GitHubi hoidlat.
- Soovitatav on varundada iga kord, kui teed mingeid muudatusi, või igapäevaselt.
- Lisateavet leiad [Giti dokumentatsioonist](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Lisa eelnevalt seadistatud blogi hoidla aadress
git remote add https://github.com/your-name/your-name.github.io.git

# Lisa ja salvesta praegused muudatused ning lisa märkus
git add .
git commit -m "Lähtefailide uuendus"

# Loo ja vaheta uuele harule
git checkout -b source

# Lükka kohaliku source haru kogu sisu kaugserveri source haru külge
git push origin source:source
```

### Blogi kirjutamine erinevates arvutites
- Kui kirjutad blogi erinevatel arvutitel, pead paigaldama põhitarkvara, seejärel tõmbama GitHubi hoidla kaugvarunduse oma kohalikku arvutisse, et blogi uuendada.

*   Lae alla ja paigalda node.js ([lae alla ja paigalda ametlikult veebilehelt](https://nodejs.org/en/))
*   Lae alla ja paigalda git ([lae alla ja paigalda ametlikult veebilehelt](https://git-scm.com/downloads))
*   Hexo raamistiku paigaldamine: Ava käsurida (CMD) ja käivita:

 ```bash
 npm install -g hexo-cli
```
*   Kohaliku uuenduse tegemine:

```bash
# Klooni hoidla kohalikku arvutisse
git clone https://github.com/your-name/your-name.github.io.git

# Kui hoidla on juba kohalikku arvutisse kloonitud, pead iga kord enne blogi uuendamist tõmbama uusima haru sisu
git pull origin

# Vaheta vastavale harule
git checkout source

# Pärast kõigi Hexo konfiguratsioonis olevate pistikprogrammide paigaldamist saad alustada blogi sisu uuendamise ja toimetamisega
npm install

# Pärast sisu muutmist pea meeles kohe varundada
git add .
git commit -m "Blogi uuendus xxx"
git push origin source:source

# Avalda ja lükka uusim blogi sisu domeeni saidile
hexo clean
hexo g  # Genereeri staatilised failid
hexo s  # Eelvaata blogi efekti kohalikult
hexo d  # Avalda uusim blogi sisu
```

### Mõned levinumad käsud kokkuvõttes

 ```bash
hexo g
# või hexo generate, genereerib lähtefailidest staatilised veebilehed
hexo d
# või hexo deploy, avaldab ja lükkab GitHub Pagesi
hexo s
# või hexo server, kohalik paigaldus ja testimine
hexo clean
# Puhasta staatiliste veebilehtede vahemälu, seejärel genereeri hexo d-ga uuesti
