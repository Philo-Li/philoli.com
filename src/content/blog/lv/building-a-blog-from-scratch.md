---
title: Īss ceļvedis Hexo emuāra izveidei no nulles (2024. gada versija)
date: 2024-04-11 00:25:20
tags: Emuāra izveide
categories: Ikdienas darbošanās
---
Vai jums ir apnicis emuāru vietņu nepievilcīgais izskats? Vai esat noguris no nebeidzamajiem vietņu paziņojumiem? Vai jau sen vēlaties izveidot savu emuāru, bet sarežģītas pamācības un galvassāpes radošs kods jūs attur? Tad apsveicu! Šis raksts soli pa solim, visvienkāršākajā veidā, iemācīs jums izveidot savu emuāru. Jums nepieciešama tikai nedaudz pacietības, un jums jāseko norādījumiem soli pa solim.

<!--more-->

Hexo ir ātrs, vienkāršs un efektīvs emuāru ietvars, kas ir īsta svētība iesācējiem. Un GitHub atbrīvo mūs no nepieciešamības papildus īrēt un izvietot serveri. Tāpēc šajā rakstā mēs izmantosim Hexo un GitHub, lai izveidotu emuāru.

2018. gadā es uzrakstīju [īsu ceļvedi emuāra izveidei no nulles](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Taču, pateicoties spraudņu atjauninājumiem, bija nepieciešamas dažas izmaiņas, tāpēc tagad esmu sagatavojis 2024. gada atjaunināto ceļvedi.

### Sagatavošanās

*   Lejupielādējiet un instalējiet node.js ([lejupielādēt no oficiālās vietnes](https://nodejs.org/en/)).
*   Lejupielādējiet un instalējiet git ([lejupielādēt no oficiālās vietnes](https://git-scm.com/downloads)).

### Vietējā Hexo statiskā emuāra izveide

*   Instalējiet Hexo ietvaru: atveriet komandrindu (CMD) un izpildiet:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Izveidojiet jaunu mapi, piemēram, `MyBlog`. Ieejiet šajā mapē, ar peles labo pogu noklikšķiniet un palaidiet Git Bash, tad ievadiet:

 ```bash
 $ hexo init
 ```

*   Pēc Hexo veidnes ģenerēšanas instalējiet npm, izpildot:

 ```bash
$ npm install
 ```

Tieši tā, emuāra galvenā daļa ir pabeigta! Apskatīsim rezultātu. Izpildiet:

```bash
$ hexo server
```

Tagad atveriet pārlūkprogrammu un ievadiet `localhost:4000`, lai redzētu, kā izskatās jūsu emuārs. Nedaudz sajūsmināti aplūkojiet to, tad nospiediet Ctrl + C, lai turpinātu ar nākamajām darbībām.

### Personalizēšanas iestatījumi (sākotnējie)

#### Tēmas maiņa

*   Lejupielādējiet jaunu tēmu (piemēram, [NexT tēmu](http://theme-next.iissnan.com/)). Izpildiet komandu saknes direktorijā:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Atveriet saknes direktorijā esošo failu `_config.yml` un mainiet lauku `theme` uz:

 ```bash
theme: next
 ```

*   Izvēlieties izskatu: Atveriet `/themes/next/_config.yml`, atrodiet lauku `scheme` (varat izmantot Ctrl + F, lai ātri meklētu). NexT piedāvā trīs dažādus izskatus; izvēlieties sev tīkamo un noņemiet `#` zīmi pie tā. (Turpmāk galvenokārt modificēsit tieši šos divus failus: _vietnes konfigurācijas failu_ un _tēmas konfigurācijas failu_.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Lai apskatītu rezultātu, varat izpildīt šādas komandas (šo soli var atkārtot katru reizi, kad vēlaties redzēt izmaiņas):

```bash
hexo g #vai hexo generate
hexo server
```

#### Vietnes konfigurācija

*   Atveriet vietnes konfigurācijas failu `_config.yml` saknes direktorijā, izmantojot teksta redaktoru (Windows operētājsistēmā nelietojiet Notepad, jo tas var radīt kļūdas ar ķīniešu rakstzīmēm nosaukumos). Mainiet laukus sadaļā `Site`. Ņemiet vērā, ka aiz kolona jābūt atstarpei:

 ```bash
 # Site
 title: Nezināmā Pasaule                // Emuāra nosaukums
 subtitle:
 description:  Do something cool // Īss apraksts
 author: LulalaP                 // Autors
 language: zh-Hans               // Vietnes valoda
 timezone:
 ```

### Sānu joslas profila attēla iestatīšana

*   Izveidojiet jaunu mapi ar nosaukumu `uploads` mapē `/source` un ievietojiet tajā profila attēlu (piemēram: `avatar.jpg`).

*   Atveriet `/themes/next/_config.yml`, atrodiet lauku `avatar` un mainiet to uz:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Emuāra lapu pilnveidošana

#### Izvēlnes pievienošana
*   Atveriet `/themes/next/_config.yml` un noņemiet komentāru zīmi (`#`) no izvēlnes vienumiem, kurus vēlaties pievienot sadaļā `menu`. Ja nepieciešams, varat pievienot citus izvēlnes vienumus (pievērsiet uzmanību atkāpēm):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategoriju lapas izveide

*   Izveidojiet jaunu lapu ar nosaukumu `categories`, izmantojot šādu komandu:

 ```bash
 $ hexo new page categories
 ```

*   Rediģējiet tikko izveidoto lapu `/source/categories/index.md` un iestatiet lapas tipu uz `categories`. Tēma automātiski parādīs visas kategorijas šajā lapā (atcerieties atstāt atstarpi aiz kolona).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Birku mākoņa lapas izveide

*   Izveidojiet jaunu lapu ar nosaukumu `tags`, izmantojot šādu komandu:

 ```bash
 $ hexo new page "tags"
 ```

*   Rediģējiet tikko izveidoto lapu un iestatiet lapas tipu uz `tags`. Tēma automātiski parādīs birku mākoni šajā lapā.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Lapas "Par mani" izveide

 *   Izveidojiet jaunu lapu ar nosaukumu `about`:

 ```bash
 $ hexo new page "about"
 ```

 *   Rediģējiet tikko izveidoto lapu un galvenajā teksta daļā varat rakstīt informāciju Markdown formātā.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Sānu joslas sociālo saišu iestatīšana

*   Rediģējiet vietnes `_config.yml`, atrodiet lauku `social` un pievienojiet sociālo vietņu nosaukumus un adreses. Atslēgas-vērtības formāts ir `Parādāmais nosaukums: saites adrese`, piemēram:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Atveriet `/themes/next/_config.yml` un sadaļā `social_icons` pievienojiet sociālo vietņu nosaukumus (pievērsiet uzmanību lielajiem/mazajiem burtiem) un (ikonas)[http://fontawesome.io/icons/]. Opcija `enable` kontrolē ikonu attēlošanu; varat iestatīt uz `false`, lai ikonas noņemtu. Piemēram:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Emuāra saistīšana ar GitHub

 *   Reģistrējieties GitHub kontam: Ja jums vēl nav GitHub konta, vispirms tas jāizveido.

 *   Izveidojiet projektu GitHub ar nosaukumu `XXX.github.io`, kur `XXX` ir jūsu GitHub lietotājvārds.

 *   Atveriet lokālā `MyBlog` mapes projekta konfigurācijas failu `_config.yml` un iestatiet lauku `type` uz `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Izpildiet:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Ģenerējiet statiskos failus lokāli un augšupielādējiet tos GitHub, izpildot:

```bash
hexo g
hexo d
```

Tagad atveriet pārlūkprogrammu un apmeklējiet `http://your-name.github.io`. Apsveicu, jūsu emuārs ir pilnībā izveidots!

### Domēna vārda piesaiste

Emuārs ir pilnībā izveidots un pieejams caur GitHub domēnu, taču vēl labāk būtu to piesaistīt īsākam domēna vārdam.

#### Domēna iegāde

*   Iegādājieties domēna vārdu. Ieteicams to iegādāties vietnē [namesilo.com](https://www.namesilo.com/) – tas ir uzticams domēnu nodrošinātājs ar izdevīgām cenām un labu servisu. Ja izmantosiet manu ieteikuma kodu `PhiloArt.io`, saņemsiet 1 ASV dolāra atlaidi. Piedāvājums spēkā līdz 2025. gada 31. decembrim.

### Domēna vārda risināšana (DNS)

*   Domēna nodrošinātāja DNS iestatījumi

*   Pievienojiet 4 A ierakstus, kas norāda uz GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Pievienojiet `CNAME` ierakstu, kur `name` ir `www` un `content` ir `your-name.github.io` (norādot uz jūsu GitHub Pages adresi):

 > CNAME —> philo-li.github.io

*   Detalizētākus iestatījumus skatiet [GitHub Pages dokumentācijā](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Pievienojiet CNAME failu emuāra direktorijā

 Pēc domēna risināšanas konfigurēšanas ieejiet emuāra direktorijā, mapē `source` izveidojiet jaunu failu ar nosaukumu `CNAME` (ņemiet vērā, ka jābūt lielajiem burtiem un bez paplašinājuma). Atveriet to ar Notepad un ierakstiet iegādāto domēna vārdu, piemēram: `www.philoli.com`.

*   Izpildiet:

```bash
hexo g
hexo d
```

Tagad atveriet pārlūkprogrammu, ievadiet domēna vārdu un nospiediet Enter. Apsveicu, jums ir savs emuārs ar neatkarīgu domēna vārdu!

### Jauna raksta publicēšana

*   Emuāra saknes direktorijā izpildiet: `hexo new “Mans pirmais raksts”`. Tas izveidos `.md` failu mapē `source/_posts`.

*   Rediģējiet šo failu, mainot sākuma laukus uz:

 ```bash
 title Raksta virsraksts
 date Izveidošanas datums (faila izveidošanas datums)
 updated Modifikācijas datums (faila modifikācijas datums)
 comments Vai iespējot komentārus true
 tags Birtas
 categories Kategorijas
 permalink Nosaukums URL (faila nosaukums)
 ```

*   Rakstiet galveno saturu (ievērojot Markdown noteikumus).

*   Ģenerējiet statiskos failus lokāli un augšupielādējiet tos GitHub, izpildot:

```bash
hexo g
hexo d
```

### Personalizēšanas iestatījumi (padziļināti)

Zemāk ir sniegti daži padziļināti emuāra stila personalizācijas iestatījumi. Iesācēji tos var pagaidām izlaist.

#### RSS pievienošana

 *   Instalējiet spraudni saknes direktorijā:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Pievienojiet šo koda daļu faila `_config.yml` beigās saknes direktorijā: (**_Lūdzu, ņemiet vērā, ka aiz kolona jābūt atstarpei, pretējā gadījumā radīsies kļūda!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Atveriet `/themes/next/_config.yml` un mainiet `rss` (atcerieties atstāt atstarpi aiz kolona):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Rakstu saīsināšana sākumlapā
 *   Katru reizi, rakstot raksta galveno tekstu, vienkārši pievienojiet šo kodu vietā, kur vēlaties rakstu saīsināt (failā .md):

 ```markdown
     <!--more-->
 ```

 *   Atveriet `/themes/next/_config.yml` un mainiet opciju `scroll_to_more` uz `false`.

#### Citētā teksta centrēšana rakstos
*   Optimizēts Markdown noklusējuma citātu stils

```markdown
{% centerquote %}
Citētais teksts
{% endcenterquote %}
```

{% centerquote %}
Citētais teksts
{% endcenterquote %}

#### Koda bloka stila maiņa

*   Rediģējiet `/themes/next/_config.yml` un modificējiet `codeblock` konfigurāciju šādi:

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

#### Vietnes izveidošanas laika iestatīšana

 *   Rediģējiet vietnes `_config.yml` un pievienojiet jaunu lauku `since`.

```bash
since: 2024
```

#### Rakstu saišu stila uzlabošana

*   Rediģējiet failu `themes\next\source\css\_common\components\post\post.styl` un pievienojiet šādu CSS stilu beigās:

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

#### Fona attēla pievienošana emuāram
*   Saknes direktorija `source` mapē izveidojiet mapi `_data`, izveidojiet jaunu failu `styles.styl`. Atveriet jauno failu `source/_data/styles.styl` un pievienojiet šādu saturu:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Kad attēls neaizpilda visu, vai atkārtot un kādā veidā
    background-attachment:fixed;    // Vai attēls seko ritināšanai
    background-size: cover;         // Pārklāj
    background-position:50% 50%;    // Attēla pozīcija
}
```
*   URL var būt attēla saite vai attēla direktorijs. Attēlu var nosaukt par `background.jpg` un ievietot mapē `source/uploads`.

#### Emuāra satura fona caurspīdīguma iestatīšana
*   Atveriet iepriekšējā solī rediģēto failu `source/_data/styles.styl` un turpiniet pievienot šādu saturu:

```css

// Emuāra satura caurspīdīgums
// Rakstu satura caurspīdīguma iestatījumi
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


// Sānu joslas caurspīdīguma iestatījumi
.sidebar {
  opacity: 0.9;
}

// Izvēlnes joslas caurspīdīguma iestatījumi
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Meklēšanas lodziņa (local-search) caurspīdīguma iestatījumi
.popup {
  opacity: 0.9;
}
```

#### Rindas koda bloku stila optimizācija
*   Atveriet iepriekšējā solī rediģēto failu `source/_data/styles.styl` un turpiniet pievienot šādu saturu:

```css
// Koda tagu estētikas uzlabošana
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Apmeklētāju skaita pievienošana vietnes kājenē

*   Rediģējiet failu

```css
# Atrodiet "copyright" tagu joslu un pievienojiet kodu taga iekšpusē

<div class="copyright">
# ...... šeit jau ir daži iestatījumi
# Pievienojiet jauno kodu šeit
</div>

# Pēc pievienošanas izskatīsies šādi:
<div class="copyright">
  # ...... šeit jau ir daži iestatījumi
  # Pievienojiet jauno kodu šeit
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Atkārtoti ģenerējiet un priekšskatiet izmaiņas. Pēc tam, kad esat pārliecinājies, ka viss ir kārtībā, publicējiet.

```bash
hexo g
hexo s
# Pēc apstiprināšanas publicējiet
hexo d
```

#### `README.md` faila pievienošana repozitorijam

Katrā projektā parasti ir `README.md` fails, taču, izvietojot to repozitorijā ar Hexo, projekta `README.md` fails tiks pārrakstīts. Tāpēc ir jākonfigurē iestatījumi, lai izvairītos no pārrakstīšanas.

Mapes `Hexo` saknes direktorijā `source` pievienojiet failu `README.md`. Modificējiet vietnes konfigurācijas failu `_config.yml`, iestatot parametra `skip_render` vērtību uz:

```yml
skip_render: README.md
```
Saglabājiet un izejiet. Nākamreiz, izvietojot emuāru ar komandu `hexo d`, `README.md` fails netiks renderēts.

#### Daži noderīgi spraudņi

-   Hexo Filter MathJax: matemātisko formulu renderēšana
    -   Instalēšana: `npm install hexo-filter-mathjax`
    -   Detalizēta konfigurācija: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: rakstu vārdu skaita uzskaite
    -   Instalēšana: `npm install hexo-word-counter`
    -   Detalizēta konfigurācija: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: emuāra ielādes ātruma optimizēšana
    -   Instalēšana: `npm install hexo-optimize`
    -   Detalizēta konfigurācija: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Vairāk spraudņu: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Avota failu dublēšana

-   Atcerieties dublēt savus lokālos avota failus, īpaši Markdown failus. Ja citi iestatījumi tiek zaudēti, jūs nevarēsiet normāli rakstīt emuāru, un tas būs jāiestata no jauna.
-   Ieteicams izmantot to pašu GitHub repozitoriju dublēšanai.
-   Ieteicams veikt dublējumu katru reizi, kad veicat izmaiņas, vai katru dienu.
-   Vairāk lietošanas veidu skatiet [Git dokumentācijā](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Pievienojiet iepriekš iestatīto emuāra repozitorija adresi
git remote add https://github.com/your-name/your-name.github.io.git

# Pievienojiet un saglabājiet pašreizējās izmaiņas, pievienojot piezīmi
git add .
git commit -m "Avota failu atjaunināšana"

# Izveidojiet un pārslēdzieties uz jaunu zaru
git checkout -b source

# Augšupielādējiet visu lokālā "source" zara saturu uz attālā repozitorija "source" zaru
git push origin source:source
```

### Emuāra rakstīšana no dažādiem datoriem
-   Kad rakstāt emuāru no dažādiem datoriem, jums ir jāinstalē pamata programmatūra un pēc tam jālejupielādē attālais GitHub repozitorija dublējums lokāli, lai atjauninātu emuāru.

*   Lejupielādējiet un instalējiet node.js ([lejupielādēt no oficiālās vietnes](https://nodejs.org/en/)).
*   Lejupielādējiet un instalējiet git ([lejupielādēt no oficiālās vietnes](https://git-scm.com/downloads)).
*   Instalējiet Hexo ietvaru: atveriet komandrindu (CMD) un izpildiet:

 ```bash
 npm install -g hexo-cli
```
*   Veiciet lokālu atjaunināšanu:

```bash
# Klonējiet repozitoriju lokāli
git clone https://github.com/your-name/your-name.github.io.git

# Ja repozitorijs jau ir klonēts lokāli, pirms katras emuāra atjaunināšanas ir jālejupielādē jaunākais zara saturs
git pull origin

# Pārslēdzieties uz atbilstošo zaru
git checkout source

# Pēc visu Hexo konfigurācijas spraudņu instalēšanas varat sākt atjaunināt un rediģēt emuāra saturu
npm install

# Pēc satura modificēšanas atcerieties nekavējoties veikt dublējumu
git add .
git commit -m "Emuāra atjauninājums xxx"
git push origin source:source

# Publicējiet un augšupielādējiet jaunāko emuāra saturu domēna vietnē
hexo clean
hexo g  # Ģenerēt statiskos failus
hexo s  # Priekšskatīt emuāru lokāli
hexo d  # Publicēt jaunāko emuāra saturu
```

### Dažu biežāk izmantoto komandu kopsavilkums

 ```bash
hexo g
# vai hexo generate, ģenerē statiskās tīmekļa lapas no avota failiem
hexo d
# vai hexo deploy, publicē un augšupielādē GitHub Pages
hexo s
# vai hexo server, lokāla izvietošana un testēšana
hexo clean
# Iztīra statisko tīmekļa lapu kešatmiņu, pēc tam hexo d atkārtoti ģenerē
