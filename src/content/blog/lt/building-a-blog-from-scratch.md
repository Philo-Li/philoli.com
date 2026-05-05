---
title: Trumpas Hexo tinklaraščio kūrimo vadovas nuo nulio (2024 m. leidimas)
date: 2024-04-11 00:25:20
tags: Tinklaraščio kūrimas
categories: Kasdieniai bandymai
---
Ar jau seniai pavargote nuo estetiškai nepatrauklių tinklaraščių platformų sąsajų? Atsibodo nesibaigiantys svetainių pranešimai? Ar visada norėjote susikurti savo tinklaraštį, bet sustabdė sudėtingi vadovėliai ir galvos skausmą keliantis kodas? Jei taip, sveikiname, šis straipsnis skirtas būtent jums! Jame žingsnis po žingsnio ir kuo paprasčiau parodysime, kaip susikurti savo tinklaraštį. Jums prireiks tik šiek tiek kantrybės ir tereikės sekti nurodymus.

<!--more-->

„Hexo“, kaip greita, paprasta ir efektyvi tinklaraščių sistema, yra tikras išsigelbėjimas pradedantiesiems, o „GitHub“ išvaduoja mus nuo papildomo serverių nuomos ir diegimo vargo. Todėl šiame straipsnyje tinklaraštį kursime naudodami „Hexo“ ir „GitHub“.

2018 metais jau buvau parašęs [trumpą vadovą, kaip susikurti tinklaraštį nuo nulio](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Tačiau dėl įskiepių atnaujinimų atsirado tam tikrų detalių, kurias reikia pakeisti, todėl iš naujo pristatome 2024 m. leidimo trumpą vadovą.

### Pasiruošimas

*   Atsisiųskite ir įdiekite „node.js“ ([atsisiųsti ir įdiegti iš oficialios svetainės](https://nodejs.org/en/))
*   Atsisiųskite ir įdiekite „git“ ([atsisiųsti ir įdiegti iš oficialios svetainės](https://git-scm.com/downloads))

### Vietinio „Hexo“ statinio tinklaraščio kūrimas

*   Įdiekite „Hexo“ sistemą: atidarykite CMD ir paleiskite:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Sukurkite naują aplanką, pvz., `MyBlog`. Įeikite į jį, dešiniuoju pelės mygtuku spustelėkite ir paleiskite „git“, įveskite:

 ```bash
 $ hexo init
 ```

*   Sukūrus „Hexo“ šabloną, įdiekite „npm“ ir paleiskite:

 ```bash
$ npm install
 ```

Taip, pagrindinė tinklaraščio dalis jau baigta! Pažiūrėkime, kaip atrodo. Paleiskite:

```bash
$ hexo server
```

Dabar atidarykite naršyklę ir įveskite `localhost:4000` – pamatysite dabartinę tinklaraščio išvaizdą. Trumpam pasidžiaukite, tada paspauskite `Ctrl + C` ir galėsite tęsti tolesnius veiksmus.

### Pirminiai individualūs nustatymai

#### Temos keitimas

*   Atsisiųskite naują temą (kaip pavyzdį imkime [NexT temą](http://theme-next.iissnan.com/)), šakniniame kataloge paleiskite:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Atidarykite šakniniame kataloge esantį failą `_config.yml` ir pakeiskite laukelio `theme` reikšmę į:

 ```bash
theme: next
 ```

*   Pasirinkite išvaizdą: atidarykite `/themes/next/_config.yml`, raskite laukelį `scheme` (galite naudoti `Ctrl + F` greitai paieškai). „NexT“ siūlo tris skirtingas išvaizdas. Išsirinkite patinkančią ir pašalinkite `#` simbolį prieš pasirinktą variantą (vėliau daugiausiai redaguosite šiuos du failus: _svetainės konfigūracijos failą_ ir _temos konfigūracijos failą_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Norėdami pamatyti rezultatą, galite paleisti šias komandas (kiekvieną kartą, kai norite pamatyti pakeitimus, kartokite šį veiksmą):

```bash
hexo g #arba hexo generate
hexo server
```

#### Svetainės konfigūracija

*   Naudodami redaktorių atidarykite šakniniame kataloge esantį svetainės konfigūracijos failą `_config.yml` („Windows“ sistemoje nenaudokite užrašinės (Notepad) redaguodami, nes kiniški simboliai gali būti rodomi neteisingai (kaip hieroglifai)). Pakeiskite laukelį `Site`. Atkreipkite dėmesį, kad po dvitaškio turi būti tarpas:

 ```bash
 # Site
 title: Nežinomas pasaulis             // Tinklaraščio pavadinimas
 subtitle:
 description:  Do something cool // Parašas
 author: LulalaP                 // Autorius
 language: zh-Hans               // Svetainės kalba
 timezone:
 ```

### Šoninės juostos avataro nustatymas

*   Aplanke `/source` sukurkite naują aplanką ir pavadinkite jį `uploads`. Įdėkite avataro paveikslėlį (pvz., `avatar.jpg`) į šį aplanką.

*   Atidarykite `/themes/next/_config.yml`, raskite laukelį `avatar` ir pakeiskite jį į:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Tinklaraščio puslapių tobulinimas

#### Meniu pridėjimas
*   Atidarykite `/themes/next/_config.yml` ir tiesiog pašalinkite komentaro simbolį (`#`) prieš tuos laukelius `menu`, kuriuos norite pridėti. Jei reikia pridėti kitų meniu punktų, galite tai padaryti pagal poreikį (atkreipkite dėmesį į įtraukas):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategorijų puslapio kūrimas

*   Sukurkite naują puslapį, pavadinkite jį `categories`, naudodami šią komandą:

 ```bash
 $ hexo new page categories
 ```

*   Redaguokite ką tik sukurtą puslapį `/source/categories/index.md` ir nustatykite puslapio tipą į `categories`. Tema automatiškai rodys visas kategorijas šiame puslapyje (atkreipkite dėmesį, kad po dvitaškio turi būti tarpas).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Žymų debesies puslapio kūrimas

*   Sukurkite naują puslapį, pavadinkite jį `tags`, naudodami šią komandą:

 ```bash
 $ hexo new page "tags"
 ```

*   Redaguokite ką tik sukurtą puslapį ir nustatykite puslapio tipą į `tags`. Tema automatiškai rodys žymų debesį šiame puslapyje.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### „Apie mane“ puslapio kūrimas

 * Sukurkite naują „about“ puslapį:

 ```bash
 $ hexo new page "about"
 ```

 * Redaguokite ką tik sukurtą puslapį. Pagrindiniame teksto lauke galite įrašyti informaciją „Markdown“ formatu.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Šoninės juostos socialinių tinklų nuorodų nustatymas

*   Redaguokite svetainės `_config.yml` failą, raskite laukelį `social` ir tiesiog pridėkite socialinio tinklo pavadinimą bei adresą. Rakto ir reikšmės formatas yra `Rodomas pavadinimas: nuorodos adresas`, pavyzdžiui:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Atidarykite `/themes/next/_config.yml`, laukelyje `social_icons` pridėkite socialinio tinklo pavadinimą (atkreipkite dėmesį į didžiąsias ir mažąsias raides) ir (piktogramą)[http://fontawesome.io/icons/]. Parinktis `enable` naudojama nustatyti, ar rodyti piktogramą; galite nustatyti `false`, kad piktogramos nebūtų rodomos. Pavyzdžiui:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Tinklaraščio susiejimas su „GitHub“

 * Užregistruokite „GitHub“ paskyrą: jei dar neturite „GitHub“ paskyros, pirmiausia ją reikia užregistruoti.

 * „GitHub“ platformoje sukurkite projektą pavadinimu `XXX.github.io`, kur `XXX` yra jūsų „GitHub“ naudotojo vardas.

 * Atidarykite vietinio `MyBlog` aplanko projekto `_config.yml` konfigūracijos failą ir nustatykite `type` į `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Paleiskite:

 ```bash
 npm install hexo-deployer-git --save
 ```
 * Sugeneruokite statinius failus vietoje ir įkelkite juos į „GitHub“, paleiskite:

```bash
hexo g
hexo d
```

Dabar atidarykite naršyklę ir apsilankykite `http://your-name.github.io`. Sveikiname, jūsų tinklaraštis jau visiškai sukonfigūruotas!

### Domeno susiejimas

Šiuo metu tinklaraštis yra visiškai sukonfigūruotas ir pasiekiamas per „GitHub“ domeną. Būtų tobula, jei prie šio tinklaraščio būtų galima susieti trumpesnį domeną.

#### Domeno įsigijimas

*   Įsigykite domeną. Rekomenduojama pirkti [namesilo.com](https://www.namesilo.com/) – tai senas, patikimas domeno paslaugų teikėjas, siūlantis geras kainas ir patikimą aptarnavimą. Jei naudosite mano rekomendacijos kodą `PhiloArt.io`, gausite 1 JAV dolerio nuolaidą. Pasiūlymas galioja iki 2025-12-31.

### Domeno DNS nustatymai

*   Domeno teikėjo DNS nustatymai

*   Pridėkite 4 A įrašus, nukreipiančius į „GitHub Pages“:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Pridėkite vieną `CNAME` įrašą: `name` nustatykite į `www`, o `content` – į `your-name.github.io` (nukreipiantį į jūsų „Github Pages“ adresą):

 > CNAME —> philo-li.github.io

*   Detalesnius nustatymus rasite [GitHub Pages dokumentacijoje](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   CNAME failo pridėjimas į tinklaraščio katalogą

Sukonfigūravę domeno DNS nustatymus, eikite į tinklaraščio katalogą, aplanke `source` sukurkite failą pavadinimu `CNAME` (atkreipkite dėmesį, kad jis turi būti didžiosiomis raidėmis ir be plėtinio). Atidarykite jį užrašine ir įrašykite įsigytą domeną, pvz.: `www.philoli.com`.

*   Paleiskite:

```bash
hexo g
hexo d
```

Dabar atidarykite naršyklę, įveskite domeno pavadinimą, paspauskite Enter ir sveikiname – jau turite tinklaraštį su savo nepriklausomu domenu.

### Naujų straipsnių publikavimas

*   Tinklaraščio šakniniame kataloge vykdykite: `hexo new “Mano pirmas straipsnis”`. Aplanke `source/_posts` bus sukurtas `.md` failas.

*   Redaguokite šį failą ir pakeiskite pradinius laukelius į:

 ```bash
 title Straipsnio pavadinimas
 date Sukūrimo data (failo sukūrimo data)
 updated Paskutinio atnaujinimo data (failo modifikavimo data)
 comments Ar įjungti komentarus true
 tags Žymės
 categories Kategorijos
 permalink URL pavadinimas (failo pavadinimas)
 ```

*   Parašykite pagrindinį tekstą (laikydamiesi „Markdown“ taisyklių).

*   Sugeneruokite statinius failus vietoje ir įkelkite juos į „GitHub“, paleiskite:

```bash
hexo g
hexo d
```

### Individualūs nustatymai (pažengusiems)

Žemiau pateikiami kai kurie pažangesni tinklaraščio stiliaus nustatymai. Pradedantieji gali kol kas praleisti šią dalį.

#### RSS pridėjimas

 * Šakniniame kataloge įdiekite įskiepį:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Šakniniame kataloge esančio `_config.yml` failo pabaigoje pridėkite: (**_Atkreipkite dėmesį, kad po dvitaškio BŪTINAI turi būti tarpas, kitaip įvyks klaida!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Atidarykite `/themes/next/_config.yml`, pakeiskite `rss` (atkreipkite dėmesį, kad po dvitaškio turi būti tarpas):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Straipsnių karpymas pagrindiniame puslapyje
 * Kiekvieną kartą rašydami straipsnio pagrindinį tekstą, tiesiog pridėkite štai ką toje vietoje `.md` faile, kur norite karpyti tekstą:

 ```markdown
     <!--more-->
 ```

 * Atidarykite `/themes/next/_config.yml` ir nustatykite `scroll_to_more` parinktį į `false`.

#### Citatos teksto centravimas straipsniuose
*   Optimizuotas numatytasis „Markdown“ citatų stilius:

```markdown
{% centerquote %}
Citatos tekstas
{% endcenterquote %}
```

{% centerquote %}
Citatos tekstas
{% endcenterquote %}

#### Kodo blokų stiliaus keitimas

*   Redaguokite `/themes/next/_config.yml`, pakeiskite `codeblock` konfigūraciją taip:

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

#### Svetainės sukūrimo datos nustatymas

 * Redaguokite svetainės `_config.yml` failą, pridėkite naują laukelį `since`:

```bash
since: 2024
```

#### Straipsnių nuorodų stiliaus patobulinimas

*   Redaguokite failą `themes\next\source\css\_common\components\post\post.styl` ir pabaigoje pridėkite šį CSS stilių:

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

#### Tinklaraščiui fono paveikslėlio pridėjimas
*   Šakniniame kataloge esančiame `source` aplanke sukurkite aplanką `_data`, tada sukurkite failą `styles.styl`. Atidarykite naujai sukurtą failą `source/_data/styles.styl` ir pridėkite šį turinį:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //ar paveikslėlis kartojamas ir kaip, jei neužpildo viso ploto
    background-attachment:fixed;    //ar paveikslėlis slenka kartu su puslapiu
    background-size: cover;         //apima visą plotą
    background-position:50% 50%;    //paveikslėlio pozicija
}
```
*   URL gali būti paveikslėlio nuoroda arba paveikslėlio kelias. Paveikslėlį galite pavadinti `background.jpg` ir įdėti į aplanką `source/uploads`.

#### Tinklaraščio turinio fono nustatymas pusiau permatomu
*   Atidarykite anksčiau redaguotą failą `source/_data/styles.styl` ir toliau pridėkite šį turinį:

```css

// Tinklaraščio turinio skaidrumas
// Straipsnio turinio skaidrumo nustatymai
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


// Šoninės juostos skaidrumo nustatymai
.sidebar {
  opacity: 0.9;
}

// Meniu juostos skaidrumo nustatymai
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Paieškos laukelio (local-search) skaidrumo nustatymai
.popup {
  opacity: 0.9;
}
```

#### Įterptųjų kodo blokų stiliaus optimizavimas
*   Atidarykite anksčiau redaguotą failą `source/_data/styles.styl` ir toliau pridėkite šį turinį:

```css
// Kodo žymų stilius
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Svetainės apačioje pridėkite lankytojų skaičių

*   Redaguokite failą

```css
# Raskite copyright žymą ir įterpkite kodą į jos vidų

<div class="copyright">
# ......Čia jau yra tam tikrų nustatymų
# Čia pridėkite naują kodą
</div>

# Po pridėjimo atrodo taip:
<div class="copyright">
  # ......Čia jau yra tam tikrų nustatymų
  # Čia pridėkite naują kodą
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Iš naujo sugeneruokite ir peržiūrėkite pakeitimus, įsitikinę, kad viskas gerai, publikuokite.

```bash
hexo g
hexo s
# Įsitikinę, kad viskas gerai, publikuokite
hexo d
```

#### README.md failo pridėjimas į repozitoriją

Kiekvienas projektas paprastai turi `README.md` failą, tačiau naudojant „Hexo“ diegimą į repozitoriją, projekto `README.md` failas bus perrašytas. Todėl reikia nustatyti konfigūracijos failą, kad būtų išvengta perrašymo.

„Hexo“ katalogo `source` šakniniame aplanke pridėkite `README.md` failą, pakeiskite svetainės konfigūracijos failą `_config.yml`, nustatydami `skip_render` parametro reikšmę į:

```yml
skip_render: README.md
```
Išsaugokite ir išeikite. Kitą kartą naudojant `hexo d` komandą tinklaraščiui diegti, `README.md` failas nebus apdorojamas.

#### Keletas dažnai naudojamų įskiepių

-   Hexo Filter MathJax: matematinių formulių atvaizdavimas
    -   Įdiegti: `npm install hexo-filter-mathjax`
    -   Detali konfigūracija: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: straipsnių žodžių skaičiavimas
    -   Įdiegti: `npm install hexo-word-counter`
    -   Detali konfigūracija: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: tinklaraščio įkėlimo greičio optimizavimas
    -   Įdiegti: `npm install hexo-optimize`
    -   Detali konfigūracija: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Daugiau įskiepių: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Šaltinio failų atsarginė kopija

-   Būtinai pasidarykite atsargines vietinių šaltinio failų, ypač „Markdown“ failų, kopijas. Praradus kitus konfigūracijos nustatymus, negalėsite normaliai rašyti tinklaraščio ir reikės viską nustatyti nuo nulio.
-   Rekomenduojama naudoti tą pačią „GitHub“ repozitoriją atsarginėms kopijoms.
-   Patartina daryti atsargines kopijas kiekvieną kartą atlikus pakeitimus arba bent kartą per dieną.
-   Daugiau naudojimo būdų rasite [Git dokumentacijoje](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Pridėkite anksčiau nustatytą tinklaraščio repozitorijos adresą
git remote add https://github.com/your-name/your-name.github.io.git

# Pridėkite ir išsaugokite dabartinius pakeitimus, su komentaru
git add .
git commit -m "Šaltinio failų atnaujinimas"

# Sukurkite ir persijunkite į naują šaką
git checkout -b source

# Visą vietinės „source“ šakos turinį įkelkite į nuotolinės repozitorijos „source“ šaką
git push origin source:source
```

### Tinklaraščio rašymas naudojant skirtingus kompiuterius
-   Kai rašote tinklaraštį skirtinguose kompiuteriuose, pirmiausia reikia įdiegti pagrindinę programinę įrangą, tada atsisiųsti nuotolinę „GitHub“ repozitorijos atsarginę kopiją į vietinį kompiuterį ir atnaujinti tinklaraštį.

*   Atsisiųskite ir įdiekite „node.js“ ([atsisiųsti ir įdiegti iš oficialios svetainės](https://nodejs.org/en/))
*   Atsisiųskite ir įdiekite „git“ ([atsisiųsti ir įdiegti iš oficialios svetainės](https://git-scm.com/downloads))
*   Įdiekite „Hexo“ sistemą: atidarykite CMD ir paleiskite:

 ```bash
 npm install -g hexo-cli
```
*   Atlikite vietinį atnaujinimą

```bash
# Klonuokite repozitoriją į vietinį kompiuterį
git clone https://github.com/your-name/your-name.github.io.git

# Jei jau esate klonavę repozitoriją, prieš kiekvieną tinklaraščio atnaujinimą turite atsisiųsti naujausią šakos turinį
git pull origin

# Persijunkite į atitinkamą šaką
git checkout source

# Įdiegus visus „Hexo“ konfigūracijos įskiepius, galite pradėti atnaujinti ir redaguoti tinklaraščio turinį
npm install

# Pakeitus turinį, nepamirškite viską iškart atsisiųsti ir išsaugoti
git add .
git commit -m "Tinklaraščio atnaujinimas xxx"
git push origin source:source

# Paskelbkite ir įkelkite naujausią tinklaraščio turinį į domeno svetainę
hexo clean
hexo g  # Sugeneruoti statinius failus
hexo s  # Peržiūrėti tinklaraščio efektą vietoje
hexo d  # Paskelbti naujausią tinklaraščio turinį
```

### Keletas dažnai naudojamų komandų apibendrinimas

 ```bash
hexo g
# arba hexo generate, sugeneruoja statinius tinklalapius iš šaltinio failų
hexo d
# arba hexo deploy, paskelbia ir įkelia į GitHub Pages
hexo s
# arba hexo server, paleidžia vietinį diegimo testą
hexo clean
# išvalykite statinių puslapių talpyklą, tada hexo d iš naujo sugeneruos
