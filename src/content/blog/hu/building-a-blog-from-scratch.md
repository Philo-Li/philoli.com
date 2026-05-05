---
title: Rövid útmutató a Hexo blog felépítéséhez a nulláról (2024-es kiadás)
date: 2024-04-11 00:25:20
tags: Blogépítés
categories: Mindennapi pepecselés
---
Eleged van már a blogoldalak ízléstelen felületeiből? Fárasztanak a végeláthatatlan értesítések és ajánlatok? Szeretnél már régóta egy saját blogot, de elrettentettek a bonyolult útmutatók és a fejtörést okozó kódok? Akkor gratulálok, mert ez a cikk a lehető legegyszerűbb módon, lépésről lépésre fog elkalauzolni a saját blogod felépítésében. Csak egy kis türelemre van szükséged, és kövesd az utasításokat.

<!--more-->

A Hexo, mint gyors, letisztult és hatékony blogkeretrendszer, valóságos áldás a kezdők számára. A GitHub pedig megkímél minket a szerver bérlésének és telepítésének macerájától. Ezért ebben a cikkben a Hexo és a GitHub segítségével fogunk blogot építeni.

2018-ban már írtam egy [Rövid útmutatót a blogépítéshez a nulláról](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). A bővítmények frissítése miatt azonban néhány részlet módosításra szorult, ezért most újra kiadom a 2024-es, egyszerűsített útmutatót.

### Előkészületek

*   node.js letöltése és telepítése ([hivatalos oldalról letölthető és telepíthető](https://nodejs.org/en/))
*   git letöltése és telepítése ([hivatalos oldalról letölthető és telepíthető](https://git-scm.com/downloads))

### Hexo statikus blog felépítése helyben

*   Hexo keretrendszer telepítése: Nyisd meg a parancssort (CMD) és futtasd:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Hozz létre egy új mappát, például MyBlog néven, lépj be, kattints jobb gombbal, futtasd a Gitet, majd írd be:

 ```bash
 $ hexo init
 ```

*   Miután a Hexo sablon létrejött, telepítsd az npm-et, majd futtasd:

 ```bash
$ npm install
 ```

Igen, a blog fő része ezzel elkészült! Nézzük is meg, hogy fest. Futtasd:

```bash
$ hexo server
```

Most nyisd meg a böngésződet, írd be a `localhost:4000` címet, és máris láthatod a blogod jelenlegi állapotát. Egy rövid lelkesedés után nyomj Ctrl + C-t a további lépésekhez.

### Személyre szabás (kezdeti)

#### Téma cseréje

*   Tölts le egy új témát (például a [NexT témát](http://theme-next.iissnan.com/)), majd futtasd a gyökérkönyvtárban:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Nyisd meg a gyökérkönyvtárban található `_config.yml` fájlt, és módosítsd a `theme` mezőt erre:

 ```bash
theme: next
 ```

*   Megjelenés kiválasztása: Nyisd meg a `/themes/next/_config.yml` fájlt, keresd meg a `scheme` mezőt (Ctrl + F-fel gyorsan megtalálható). A NexT három különböző megjelenést kínál, válaszd ki a neked tetszőt, majd távolítsd el az egyik elől a # jelet (a továbbiakban főleg ezt a két fájlt fogjuk szerkeszteni: a _webhely konfigurációs fájlját_ és a _téma konfigurációs fájlját_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Az eredmény megtekintéséhez futtasd a következő parancsot (ezt a lépést később is megismételheted, amikor látni szeretnéd a változásokat):

```bash
hexo g #vagy hexo generate
hexo server
```

#### Webhely konfigurációja

*   Nyisd meg a gyökérkönyvtárban található `_config.yml` webhely konfigurációs fájlt egy szerkesztővel (Windows alatt ne a Jegyzettömböt használd, mert a kínai karakterek hibásan jelenhetnek meg), majd módosítsd a `Site` mezőt. Fontos: a kettőspont után legyen szóköz:

 ```bash
 # Site
 title: Ismeretlen világ                // Blog neve
 subtitle:
 description:  Do something cool // Egy szlogen/aláírás
 author: LulalaP                 // Szerző
 language: zh-Hans               // Weboldal nyelve
 timezone:
 ```

### Oldalsáv profilképének beállítása

*   Hozz létre egy `uploads` nevű mappát a `/source` könyvtárban, és helyezd bele a profilképet (pl. avatar.jpg).

*   Nyisd meg a `/themes/next/_config.yml` fájlt, keresd meg az `avatar` mezőt, és módosítsd erre:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Blogoldalak finomítása

#### Menü hozzáadása
*   Nyisd meg a `/themes/next/_config.yml` fájlt, és távolítsd el a `menu` mezőben a hozzáadni kívánt menüpontok előtti megjegyzésjeleket. Ha további menüpontokat szeretnél, azt is hozzáadhatod igény szerint (ügyelj a behúzásokra):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategória oldal létrehozása

*   Hozz létre egy új oldalt `categories` néven, a következő paranccsal:

 ```bash
 $ hexo new page categories
 ```

*   Szerkeszd az újonnan létrehozott `/source/categories/index.md` oldalt, és állítsd az oldal típusát `categories`-re. A téma automatikusan megjeleníti majd az összes kategóriát ezen az oldalon (ügyelj arra, hogy a kettőspont után legyen szóköz).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Címkefelhő felület létrehozása

*   Hozz létre egy új oldalt `tags` néven, a következő paranccsal:

 ```bash
 $ hexo new page "tags"
 ```

*   Szerkeszd az újonnan létrehozott oldalt, és állítsd az oldal típusát `tags`-re. A téma automatikusan megjeleníti majd a címkefelhőt ezen az oldalon.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "Rólam" oldal létrehozása

 *   Hozz létre egy új „about” oldalt:

 ```bash
 $ hexo new page "about"
 ```

 *   Szerkeszd az újonnan létrehozott oldalt, és a törzsszövegbe Markdown formátumban írhatod be az információkat.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Oldalsáv közösségi linkjeinek beállítása

*   Szerkeszd a webhely `_config.yml` fájlját, keresd meg a `social` mezőt, majd add hozzá a közösségi oldal nevét és címét. A kulcs-érték formátuma `Megjelenített név: Link címe`, például:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Nyisd meg a `/themes/next/_config.yml` fájlt, és a `social_icons` mező alá add hozzá a közösségi oldal nevét (ügyelj a kis- és nagybetűkre) és az (ikonját)[http://fontawesome.io/icons/]. Az `enable` opcióval szabályozhatod az ikon megjelenítését; `false`-ra állítva eltávolíthatod az ikont. Például:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Blog összekapcsolása a GitHubbal

 *   GitHub fiók regisztrációja: Ha még nincs GitHub fiókod, először regisztrálnod kell egyet.

 *   Hozz létre egy `XXX.github.io` nevű projektet a GitHubon, ahol az XXX a saját GitHub felhasználóneved.

 *   Nyisd meg a helyi `MyBlog` mappa projektjében található `_config.yml` konfigurációs fájlt, és állítsd a `type` értékét `git`-re:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Futtasd:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Generáld a statikus fájlokat helyben, majd töltsd fel őket a GitHubra, futtasd:

```bash
hexo g
hexo d
```

Ekkor nyisd meg a böngésződet, látogasd meg a `http://your-name.github.io` címet. Gratulálok, a blogod ezzel elkészült!

### Domain név hozzárendelése

Eddigre a blog már teljesen elkészült, és a GitHub domainjén keresztül is elérhető. Még tökéletesebb lenne, ha egy rövid domain nevet is hozzárendelnél.

#### Domain vásárlás

*   Vásárolj egy domain nevet. Ajánlott a [namesilo.com](https://www.namesilo.com/) oldalon, egy régi, megbízható szolgáltató, kedvező árakkal. Ha használod a `PhiloArt.io` ajánló kódomat, még 1 dollár kedvezményt is kaphatsz, érvényes 2025. december 31-ig.

### Domain feloldása

*   Domain szolgáltató DNS beállításai

*   Adj hozzá 4 A rekordot, amelyek a GitHub Pagesre mutatnak:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Adj hozzá egy `CNAME` rekordot, ahol a `name` `www`, a `content` pedig `your-name.github.io` (ami a GitHub Pages címedre mutat):

 > CNAME —> philo-li.github.io

*   Részletesebb beállításokért lásd a [GitHub Pages dokumentációját](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   CNAME fájl hozzáadása a blog könyvtárához

Miután beállítottad a domain feloldást, lépj be a blog könyvtárába, hozz létre egy `CNAME` nevű fájlt a `source` mappában (figyelj a nagybetűre, nincs kiterjesztés), nyisd meg Jegyzettömbbel, és írd bele a megvásárolt domainedet, például: `www.philoli.com`.

*   Futtasd:

```bash
hexo g
hexo d
```

Most nyisd meg a böngésződet, írd be a domain nevedet, nyomj Entert, és gratulálok, már van egy saját, független domain névvel rendelkező blogod!

### Új cikk közzététele

*   A blog gyökérkönyvtárában futtasd: `hexo new “Az első cikkem”`. Ez létrehoz egy `.md` fájlt a `source/_posts` mappában.

*   Szerkeszd ezt a fájlt, és módosítsd a kezdő mezőket erre:

 ```bash
 title A cikk címe
 date Létrehozás dátuma (a fájl létrehozásának dátuma)
 updated Módosítás dátuma (a fájl módosításának dátuma)
 comments Hozzászólások engedélyezése true
 tags Címkék
 categories Kategóriák
 permalink Név az URL-ben (fájlnév)
 ```

*   Írd meg a törzsszöveget (Markdown szabályok szerint).

*   Generáld a statikus fájlokat helyben, majd töltsd fel őket a GitHubra, futtasd:

```bash
hexo g
hexo d
```

### Személyre szabás (haladó)

Az alábbiakban néhány haladóbb, egyedi blogstílus-beállítás található; a kezdők nyugodtan kihagyhatják ezt a részt.

#### RSS hozzáadása

 *   Telepítsd a bővítményt a gyökérkönyvtárban:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Add hozzá a gyökérkönyvtárban található `_config.yml` fájl végéhez: (**_Kérjük, vedd figyelembe, hogy a kettőspont után szóközre van szükség, különben hiba lép fel!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Nyisd meg a `/themes/next/_config.yml` fájlt, és módosítsd az `rss` mezőt (ügyelj arra, hogy a kettőspont után legyen szóköz):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Cikkek csonkolása a kezdőlapon
 *   Minden alkalommal, amikor cikket írsz, egyszerűen csak add hozzá a következőket a `.md` fájlban, ott, ahol el szeretnéd vágni a szöveget:

 ```markdown
     <!--more-->
 ```

 *   Nyisd meg a `/themes/next/_config.yml` fájlt, és állítsd a `scroll_to_more` opciót `false` értékre.

#### Idézett szöveg középre igazítása a cikkekben
*   Optimalizáltuk a Markdown alapértelmezett idézetstílusát.

```markdown
{% centerquote %}
引用正文
{% endcenterquote %}
```

{% centerquote %}
Idézett szöveg
{% endcenterquote %}

#### Kódblokk stílusának módosítása

*   Szerkeszd a `/themes/next/_config.yml` fájlt, és módosítsd a `codeblock` konfigurációt a következőképpen:

```yml
codeblock:
  # Kód kiemelés téma
  # Elérhető értékek: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # Lásd: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Másoló gomb hozzáadása a kódblokkhoz
  copy_button:
    enable: true
    # Szövegmásolási eredmény megjelenítése.
    show_result: true
    # Elérhető értékek: default | flat | mac
    style:
```

#### Webhely létrehozási idejének beállítása

 *   Szerkeszd a webhely `_config.yml` fájlját, és adj hozzá egy új `since` mezőt.

```bash
since: 2024
```

#### Cikkek linkstílusának javítása

*   Szerkeszd a `themes\next\source\css\_common\components\post\post.styl` fájlt, és add hozzá a következő CSS stílust a végéhez:

``` css
// link stílus
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

#### Háttérkép hozzáadása a bloghoz
*   A gyökérkönyvtár `source` mappájában hozz létre egy `_data` mappát, majd egy `styles.styl` fájlt. Nyisd meg az újonnan létrehozott `source/_data/styles.styl` fájlt, és add hozzá a következő tartalmat:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Ha a kép nem tölti ki a teljes teret, ismétlődjön-e, és hogyan
    background-attachment:fixed;    // Kövesse-e a kép a görgetést
    background-size: cover;         // Fedés
    background-position:50% 50%;    // Kép pozíciója
}
```
*   Az URL lehet kép linkje vagy képkönyvtár. Nevezd át a képet `background.jpg`-re, és helyezd a `source/uploads` mappába.

#### Blogtartalom háttérének félig átlátszóvá tétele
*   Nyisd meg az előző lépésben szerkesztett `source/_data/styles.styl` fájlt, és folytasd a következő tartalom hozzáadásával:

```css

// Blogtartalom átlátszóvá tétele
// Cikk tartalmának átlátszósági beállításai
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


// Oldalsáv átlátszósági beállításai
.sidebar {
  opacity: 0.9;
}

// Menüsor átlátszósági beállításai
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Keresőmező (local-search) átlátszósági beállításai
.popup {
  opacity: 0.9;
}
```

#### Inline kódblokkok stílusának optimalizálása
*   Nyisd meg az előző lépésben szerkesztett `source/_data/styles.styl` fájlt, és folytasd a következő tartalom hozzáadásával:

```css
// Kódtagek szépítése
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Látogatószám hozzáadása a webhely aljára

*   Fájl szerkesztése és módosítása

```css
# Keresd meg a copyright címkét, majd add hozzá a kódot a címke belsejébe

<div class="copyright">
# ......Itt már van néhány beállítás
# Itt add hozzá az új kódot
</div>

# Hozzáadás után így néz ki:
<div class="copyright">
  # ......Itt már van néhány beállítás
  # Itt add hozzá az új kódot
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Generáld újra az előnézetet a módosított eredményről, és ha minden rendben van, tedd közzé.

```bash
hexo g
hexo s
# Ha minden rendben van, tedd közzé
hexo d
```

#### README.md fájl hozzáadása a repository-hoz

Minden projekt általában tartalmaz egy `README.md` fájlt, de ha Hexo-val telepíted a repository-ba, a projekt `README.md` fájlja felülíródik. Ezért be kell állítani a konfigurációs fájlt, hogy elkerüljük a felülírást.

A `Hexo` könyvtár `source` gyökérkönyvtárában hozz létre egy `README.md` fájlt, majd módosítsd a webhely konfigurációs fájlját (`_config.yml`), és állítsd a `skip_render` paraméter értékét erre:

```yml
skip_render: README.md
```
Mentsd el és lépj ki. Amikor legközelebb a `hexo d` paranccsal telepíted a blogot, a `README.md` fájl már nem kerül renderelésre.

#### Néhány hasznos bővítmény

- Hexo Filter MathJax: Matematikai képletek renderelése
  - Telepítés: `npm install hexo-filter-mathjax`
  - Részletes konfiguráció: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Cikk szószámának statisztikája
  - Telepítés: `npm install hexo-word-counter`
  - Részletes konfiguráció: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Blog betöltési sebességének optimalizálása
  - Telepítés: `npm install hexo-optimize`
  - Részletes konfiguráció: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- További bővítmények: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Forrásfájlok biztonsági mentése

- Ne feledd, hogy készíts biztonsági másolatot a helyi forrásfájlokról, különösen a Markdown fájlokról. Ha más konfigurációk elvesznek, nem tudsz rendesen blogolni, és mindent elölről kell beállítanod.
- Javasolt a GitHub ugyanazon repository-jának használata a biztonsági mentéshez.
- Javasolt minden változtatás után, vagy naponta egyszer biztonsági másolatot készíteni.
- További használati módokért lásd a [Git dokumentációját](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Add hozzá az előzőleg beállított blog repository címét
git remote add https://github.com/your-name/your-name.github.io.git

# Add hozzá és mentsd el az aktuális módosításokat, és írj hozzá megjegyzést
git add .
git commit -m "Forrásfájlok frissítése"

# Hozz létre és válts új ágra
git checkout -b source

# Told fel a helyi "source" ág teljes tartalmát a távoli repository "source" ágába
git push origin source:source
```

### Blogírás különböző számítógépeken
- Amikor különböző számítógépeken írsz blogot, telepítened kell az alapvető szoftvereket, majd letölteni a távoli GitHub repository biztonsági másolatát a helyi gépedre a blog frissítéséhez.

*   node.js letöltése és telepítése ([hivatalos oldalról letölthető és telepíthető](https://nodejs.org/en/))
*   git letöltése és telepítése ([hivatalos oldalról letölthető és telepíthető](https://git-scm.com/downloads))
*   Hexo keretrendszer telepítése: Nyisd meg a parancssort (CMD) és futtasd:

 ```bash
 npm install -g hexo-cli
```
*   Helyi frissítés végrehajtása

```bash
# Klónozza a repository-t helyben
git clone https://github.com/your-name/your-name.github.io.git

# Ha már klónoztad helyben, minden blogfrissítés előtt le kell húznod a legújabb ág tartalmát.
git pull origin

# Váltás a megfelelő ágra
git checkout source

# Miután telepítetted az összes Hexo konfiguráció alatti bővítményt, elkezdheted a blog tartalmának frissítését és szerkesztését.
npm install

# Tartalom módosítása után ne feledkezz meg az azonnali teljes körű biztonsági mentésről
git add .
git commit -m "Blog frissítése xxx"
git push origin source:source

# A legújabb blogtartalom közzététele a domain webhelyen
hexo clean
hexo g  # Statikus fájlok generálása
hexo s  # Blog előnézete helyben
hexo d  # A legújabb blogtartalom közzététele
```

### Néhány gyakran használt parancs összefoglalása

 ```bash
hexo g
# vagy hexo generate, a statikus weboldal generálása a forrásfájlok alapján
hexo d
# vagy hexo deploy, közzététel a GitHub Pagesre
hexo s
# vagy hexo server, helyi telepítés tesztelése
hexo clean
# Statikus weboldal gyorsítótárának törlése, majd hexo d újra generálás
