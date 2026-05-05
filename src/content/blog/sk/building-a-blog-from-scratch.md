---
title: Jednoduchý návod na vytvorenie blogu Hexo od začiatku (verzia 2024)
date: 2024-04-11 00:25:20
tags: Tvorba blogu
categories: Každodenné záležitosti
---
Už vás unavujú nevkusné rozhrania blogovacích platforiem? Máte dosť nekonečných notifikácií a reklám? Dlho ste túžili po vlastnom blogu, ale odradili vás zložité návody a kopa otravného kódu? Ak áno, potom gratulujem! Tento článok vás krok za krokom, tým najjednoduchším spôsobom, naučí, ako si postaviť vlastný blog. Potrebujete len trochu trpezlivosti a riadiť sa pokynmi.

<!--more-->

Hexo je rýchly, prehľadný a efektívny blogovací framework, doslova dar z nebies pre začiatočníkov. A GitHub nás zbavuje starostí s dodatočným prenájmom a nasadzovaním servera. Preto sa v tomto článku naučíme, ako si blog postaviť s pomocou Hexo a GitHubu.

Už v roku 2018 som napísal článok [Jednoduchý návod na vytvorenie blogu od začiatku](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Pretože sa medzitým aktualizovali pluginy a niektoré detaily bolo potrebné zmeniť, prinášam vám teraz novú, zjednodušenú verziu návodu pre rok 2024.

### Prípravné práce

*   Stiahnite a nainštalujte node.js ([stiahnuť a nainštalovať z oficiálnej stránky](https://nodejs.org/en/))
*   Stiahnite a nainštalujte git ([stiahnuť a nainštalovať z oficiálnej stránky](https://git-scm.com/downloads))

### Lokálne nastavenie statického blogu Hexo

*   Nainštalujte framework Hexo: Otvorte príkazový riadok (cmd) a spustite:
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Vytvorte nový priečinok, napríklad `MyBlog`, prejdite doň, kliknite pravým tlačidlom myši a spustite Git Bash (alebo iný terminál), potom zadajte:

 ```bash
 $ hexo init
 ```

*   Po vygenerovaní šablóny Hexo nainštalujte npm závislosti spustením:

 ```bash
$ npm install
 ```

Presne tak, hlavná časť blogu je hotová! Pozrime sa na výsledok. Spustite:

```bash
$ hexo server
```

Teraz otvorte prehliadač, zadajte `localhost:4000` a uvidíte, ako váš blog momentálne vyzerá. Trochu sa potešte a potom stlačte `Ctrl + C`, aby ste mohli pokračovať v ďalších krokoch.

### Prispôsobenie (úvodné)

#### Zmena témy

*   Stiahnite si novú tému (napríklad [tému NexT](http://theme-next.iissnan.com/)). V koreňovom priečinku projektu spustite:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Otvorte súbor `_config.yml` v koreňovom adresári a zmeňte pole `theme` na:

 ```bash
theme: next
 ```

*   Vyberte vzhľad: Otvorte súbor `/themes/next/_config.yml`, nájdite pole `scheme` (môžete použiť `Ctrl + F` pre rýchle vyhľadávanie). NexT ponúka tri rôzne vzhľady; vyberte si ten, ktorý sa vám páči, a odstráňte znak `#` pred ním. (Hlavné úpravy budete vykonávať v týchto dvoch súboroch: _konfiguračný súbor stránky_ a _konfiguračný súbor témy_.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Ak si chcete prezrieť zmeny, spustite nasledujúce príkazy (tento postup môžete opakovať vždy, keď budete chcieť vidieť efekt):

```bash
hexo g #alebo hexo generate
hexo server
```

#### Konfigurácia stránky

*   Otvorte konfiguračný súbor stránky `_config.yml` v koreňovom adresári pomocou textového editora (vo Windowse nepoužívajte Poznámkový blok, pretože by sa čínske znaky v názve mohli zobraziť nesprávne). Upravte sekciu `Site`. Pozor, za dvojbodkou musí byť medzera:

 ```bash
 # Site
 title: Neznámy svet                //Názov blogu
 subtitle:
 description:  Do something cool //Slogan
 author: LulalaP                 //Autor
 language: zh-Hans               //Jazyk webstránky
 timezone:
 ```

### Nastavenie avatara v bočnom paneli

*   V priečinku `/source` vytvorte nový priečinok s názvom `uploads` a umiestnite doň obrázok avatara (napr. `avatar.jpg`).

*   Otvorte súbor `/themes/next/_config.yml`, nájdite pole `avatar` a upravte ho na:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Dokončenie stránok blogu

#### Pridanie menu

*   Otvorte súbor `/themes/next/_config.yml` a odstráňte komentáre (znak `#`) pred položkami menu, ktoré chcete pridať. Ak potrebujete pridať ďalšie položky, môžete tak urobiť podľa potreby (venujte pozornosť odsadeniam):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Vytvorenie stránky kategórií

*   Vytvorte novú stránku s názvom `categories` pomocou nasledujúceho príkazu:

 ```bash
 $ hexo new page categories
 ```

*   Upravte práve vytvorenú stránku `/source/categories/index.md` a nastavte jej typ na `categories`. Téma automaticky zobrazí všetky kategórie na tejto stránke (nezabudnite ponechať medzeru za dvojbodkou).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Vytvorenie stránky s tag cloudom

*   Vytvorte novú stránku s názvom `tags` pomocou nasledujúceho príkazu:

 ```bash
 $ hexo new page "tags"
 ```

*   Upravte práve vytvorenú stránku a nastavte jej typ na `tags`. Téma automaticky zobrazí tag cloud na tejto stránke.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Vytvorenie stránky "O mne"

 *   Vytvorte novú stránku `about`:

 ```bash
 $ hexo new page "about"
 ```

 *   Upravte práve vytvorenú stránku. Do hlavnej časti môžete napísať informácie vo formáte Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Nastavenie sociálnych odkazov v bočnom paneli

*   Upravte súbor `_config.yml` stránky, nájdite pole `social` a pridajte názvy a adresy sociálnych sietí. Formát kľúča a hodnoty je `Zobrazovaný názov: Odkaz`, napríklad:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Otvorte súbor `/themes/next/_config.yml` a pod pole `social_icons` pridajte názvy sociálnych sietí (dbajte na veľkosť písmen) a (ikony)[http://fontawesome.io/icons/]. Možnosť `enable` slúži na ovládanie zobrazenia ikon; môžete ju nastaviť na `false`, ak ich nechcete zobrazovať. Napríklad:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Prepojenie blogu s GitHubom

 *   Zaregistrujte si GitHub účet: Ak ešte nemáte GitHub účet, musíte si ho najprv vytvoriť.

 *   Na GitHube vytvorte projekt s názvom `XXX.github.io`, kde `XXX` je vaše GitHub používateľské meno.

 *   Otvorte konfiguračný súbor `_config.yml` vo svojom lokálnom projekte v priečinku `MyBlog` a nastavte typ `deploy` na `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Spustite:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Lokálne vygenerujte statické súbory a potom ich nahrajte na GitHub spustením:

```bash
hexo g
hexo d
```

 Teraz otvorte prehliadač, prejdite na http://your-name.github.io a gratulujem – váš blog je týmto úspešne dokončený!

### Priradenie domény

Doteraz je blog plne nastavený a dostupný cez doménu GitHub. Bolo by to ešte dokonalejšie, keby ste k nemu priradili krátku vlastnú doménu.

#### Kúpa domény

*   Zakúpte si doménu. Odporúčame [namesilo.com](https://www.namesilo.com/), osvedčeného poskytovateľa domén s výhodnými cenami a spoľahlivými službami. Ak použijete môj odporúčací kód `PhiloArt.io`, získate zľavu 1 USD. Kód je platný do 31. 12. 2025.

### Nastavenie DNS domény

*   Nastavenie DNS u poskytovateľa domény

*   Pridajte 4 záznamy typu `A`, ktoré budú smerovať na GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Pridajte jeden záznam typu `CNAME` s `name` `www` a `content` `your-name.github.io` (smeruje na adresu vašich GitHub Pages):

 > CNAME —> philo-li.github.io

*   Podrobnejšie nastavenia nájdete v [dokumentácii GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Pridanie súboru CNAME do adresára blogu

 Po dokončení konfigurácie DNS domény prejdite do adresára blogu. V priečinku `source` vytvorte nový súbor s názvom `CNAME` (upozornenie: názov musí byť veľkými písmenami a bez prípony). Otvorte ho v textovom editore a vpíšte doň zakúpenú doménu, napríklad: `www.philoli.com`.

*   Spustite:

```bash
hexo g
hexo d
```

Teraz otvorte prehliadač, zadajte doménu, stlačte Enter a gratulujem – už máte blog s vlastnou nezávislou doménou!

### Publikovanie nového článku

*   V koreňovom adresári blogu spustite: `hexo new “Môj prvý článok”`. Tým sa v priečinku `source/_posts` vygeneruje súbor s príponou `.md`.

*   Upravte tento súbor a zmeňte počiatočné polia na:

 ```bash
 title Názov článku
 date Dátum vytvorenia (dátum vytvorenia súboru)
 updated Dátum úpravy (dátum úpravy súboru)
 comments Povoliť komentáre true
 tags Tagy
 categories Kategórie
 permalink Názov v URL (názov súboru)
 ```

*   Napíšte hlavný obsah článku (dodržiavajte pravidlá Markdown).

*   Lokálne vygenerujte statické súbory a potom ich nahrajte na GitHub spustením:

```bash
hexo g
hexo d
```

### Prispôsobenie (pokročilé)

Nižšie nájdete niekoľko pokročilých nastavení štýlu blogu. Začiatočníci môžu túto časť zatiaľ preskočiť.

#### Pridanie RSS

 *   Nainštalujte plugin v koreňovom adresári:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Na koniec súboru `_config.yml` v koreňovom adresári pridajte: (**_Upozornenie: za dvojbodkou musí byť medzera, inak dôjde k chybe!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Otvorte súbor `/themes/next/_config.yml` a upravte `rss` (pozor, za dvojbodkou musí byť medzera):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Skrátenie článkov na domovskej stránke

 *   Vždy, keď píšete článok, stačí pridať nasledujúci značku do `.md` súboru na mieste, kde chcete text prerušiť:

 ```markdown
     <!--more-->
 ```

 *   Otvorte súbor `/themes/next/_config.yml` a nastavte možnosť `scroll_to_more` na `false`.

#### Zarovnanie citovaného textu v článkoch na stred
*   Optimalizovaný predvolený štýl citácií v Markdown.

```markdown
{% centerquote %}
Text citátu
{% endcenterquote %}
```

{% centerquote %}
Text citátu
{% endcenterquote %}

#### Úprava štýlu blokov kódu

*   Upravte súbor `/themes/next/_config.yml` a zmeňte konfiguráciu `codeblock` takto:

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

#### Nastavenie dátumu založenia stránky

 *   Upravte súbor `_config.yml` stránky a pridajte nové pole `since`.

```bash
since: 2024
```

#### Vylepšenie štýlu odkazov v článkoch

*   Upravte súbor `themes\next\source\css\_common\components\post\post.styl` a na koniec pridajte nasledujúci CSS štýl:

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

#### Pridanie obrázka pozadia do blogu

*   V priečinku `source` v koreňovom adresári vytvorte priečinok `_data`. V ňom vytvorte nový súbor `styles.styl`. Otvorte tento nový súbor `source/_data/styles.styl` a pridajte nasledujúci obsah:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //či sa obrázok opakuje a ako, ak nie je dostatočne veľký
    background-attachment:fixed;    //či sa obrázok posúva s obsahom
    background-size: cover;         //pokryť
    background-position:50% 50%;    //pozícia obrázka
}
```
*   V URL adrese môže byť odkaz na obrázok alebo cesta k obrázku. Obrázok môžete pomenovať `background.jpg` a umiestniť ho do priečinka `source/uploads`.

#### Nastavenie polopriehľadného pozadia obsahu blogu

*   Otvorte súbor `source/_data/styles.styl`, ktorý ste upravovali v predchádzajúcom kroku, a pridajte nasledujúci obsah:

```css

//Nastavenie priehľadnosti obsahu článku
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


//Nastavenie priehľadnosti bočného panela
.sidebar {
  opacity: 0.9;
}

//Nastavenie priehľadnosti menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Nastavenie priehľadnosti vyhľadávacieho poľa (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimalizácia štýlu vložených blokov kódu

*   Otvorte súbor `source/_data/styles.styl`, ktorý ste upravovali v predchádzajúcom kroku, a pridajte nasledujúci obsah:

```css
// Vylepšenie štítku kódu
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Pridanie počtu návštevníkov do pätičky webstránky

*   Upravte súbor:

```css
# Nájdite blok s názvom copyright a do jeho vnútra pridajte kód.

<div class="copyright">
# ......Tu už sú nejaké nastavenia
# Sem pridajte nový kód
</div>

# Po pridaní to bude vyzerať takto:
<div class="copyright">
  # ......Tu už sú nejaké nastavenia
  # Sem pridajte nový kód
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Znovu vygenerujte a prezrite si upravený efekt. Po potvrdení, že je všetko v poriadku, blog zverejnite.

```bash
hexo g
hexo s
# Po potvrdení, že je všetko v poriadku, blog zverejnite
hexo d
```

#### Pridanie súboru README.md do repozitára

Každý projekt zvyčajne obsahuje súbor `README.md`. Keď však použijete Hexo na nasadenie do repozitára, súbor `README.md` v projekte sa prepíše. Preto je potrebné v konfiguračnom súbore nastaviť, aby sa prepísaniu zabránilo.

V koreňovom priečinku `source` v adresári `Hexo` pridajte súbor `README.md`. Upravte konfiguračný súbor stránky `_config.yml` a nastavte hodnotu parametra `skip_render` na:

```yml
skip_render: README.md
```
Stačí uložiť a ukončiť. Pri ďalšom nasadení blogu pomocou príkazu `hexo d` sa súbor `README.md` už nebude renderovať.

#### Niekoľko užitočných pluginov

-   Hexo Filter MathJax: Renderovanie matematických vzorcov
    -   Inštalácia: `npm install hexo-filter-mathjax`
    -   Podrobná konfigurácia: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Počítadlo slov v článkoch
    -   Inštalácia: `npm install hexo-word-counter`
    -   Podrobná konfigurácia: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optimalizácia rýchlosti načítania blogu
    -   Inštalácia: `npm install hexo-optimize`
    -   Podrobná konfigurácia: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Viac pluginov: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Záloha zdrojových súborov

-   Nezabudnite si zálohovať lokálne zdrojové súbory, najmä Markdown súbory. Ak sa stratia iné nastavenia, nebudete môcť normálne písať blog a budete musieť začať odznova.
-   Odporúča sa zálohovať do rovnakého repozitára na GitHub.
-   Odporúča sa zálohovať pri každej zmene alebo aspoň raz denne.
-   Ďalšie informácie nájdete v [dokumentácii Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Pridajte adresu repozitára blogu, ktorú ste predtým nastavili
git remote add https://github.com/your-name/your-name.github.io.git

# Pridajte a uložte aktuálne zmeny a pridajte poznámku
git add .
git commit -m "Aktualizácia zdrojových súborov"

# Vytvorte a prepnite na novú vetvu
git checkout -b source

# Nahrajte celý obsah lokálnej vetvy 'source' do vzdialenej vetvy 'source' v repozitári
git push origin source:source
```

### Písanie blogu na rôznych počítačoch

-   Ak píšete blog na inom počítači, musíte najprv nainštalovať základný softvér, potom stiahnuť vzdialený záložný repozitár z GitHubu do lokálneho počítača a následne aktualizovať blog.

*   Stiahnite a nainštalujte node.js ([stiahnuť a nainštalovať z oficiálnej stránky](https://nodejs.org/en/))
*   Stiahnite a nainštalujte git ([stiahnuť a nainštalovať z oficiálnej stránky](https://git-scm.com/downloads))
*   Nainštalujte framework Hexo: Otvorte príkazový riadok (cmd) a spustite:

 ```bash
 npm install -g hexo-cli
```
*   Vykonajte lokálnu aktualizáciu:

```bash
# Naklonujte repozitár lokálne
git clone https://github.com/your-name/your-name.github.io.git

# Ak už máte lokálnu kópiu, pred každou aktualizáciou blogu musíte stiahnuť najnovší obsah vetvy
git pull origin

# Prepnite na príslušnú vetvu
git checkout source

# Po inštalácii všetkých pluginov v konfigurácii Hexo môžete začať s aktualizáciou a úpravou obsahu blogu
npm install

# Po úprave obsahu nezabudnite včas zálohovať kompletným procesom
git add .
git commit -m "Aktualizácia blogu xxx"
git push origin source:source

# Publikujte a nahrajte najnovší obsah blogu na doménu
hexo clean
hexo g  # Vygeneruje statické súbory
hexo s  # Lokálny náhľad blogu
hexo d  # Publikuje najnovší obsah blogu
```

### Zhrnutie najpoužívanejších príkazov

 ```bash
hexo g
# alebo hexo generate, generuje statické webové stránky zo zdrojových súborov
hexo d
# alebo hexo deploy, publikuje a nahráva na GitHub Pages
hexo s
# alebo hexo server, lokálne nasadenie pre testovanie
hexo clean
# vymaže cache statických webových stránok, potom hexo d znovu vygeneruje
