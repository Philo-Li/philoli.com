---
title: Jednoduchý průvodce vytvořením blogu Hexo od nuly (verze 2024)
date: 2024-04-11 00:25:20
tags: Tvorba blogu
categories: Denní záležitosti
---
Už vás unavují neatraktivní rozhraní blogovacích platforem, nekonečné notifikace a toužíte po vlastním blogu, ale odrazují vás složité návody a spousta matoucího kódu? Gratuluji! Tento článek vás krok za krokem, co nejjednodušším způsobem, naučí, jak si vytvořit vlastní blog. Stačí jen trocha trpělivosti a řídit se pokyny.

<!--more-->

Hexo je rychlý, čistý a efektivní blogovací framework, což z něj dělá požehnání pro začátečníky. GitHub nám navíc ušetří starosti s pronájmem a nasazováním vlastního serveru. Tento článek se proto zaměří na vytvoření blogu pomocí Hexo a GitHubu.

V roce 2018 jsem napsal [jednoduchého průvodce vytvořením blogu od nuly](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Kvůli aktualizacím pluginů je však potřeba upravit některé detaily, a proto nyní přináším aktualizovanou verzi pro rok 2024.

### Příprava

*   Stáhněte a nainstalujte Node.js ([stáhnout a nainstalovat z oficiálních stránek](https://nodejs.org/en/))
*   Stáhněte a nainstalujte Git ([stáhnout a nainstalovat z oficiálních stránek](https://git-scm.com/downloads))

### Lokální nastavení statického blogu Hexo

*   Nainstalujte framework Hexo: Otevřete příkazový řádek (CMD) a spusťte:
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Vytvořte novou složku, například `MyBlog`. Přejděte do ní, klikněte pravým tlačítkem myši a spusťte Git. Zadejte:

 ```bash
 $ hexo init
 ```

*   Jakmile je šablona Hexo vygenerována, nainstalujte npm spuštěním:

 ```bash
$ npm install
 ```

Správně, hlavní část blogu je hotová! Pojďme se podívat na výsledek. Spusťte:

```bash
$ hexo server
```

Nyní otevřete prohlížeč a zadejte `localhost:4000`. Uvidíte aktuální podobu vašeho blogu. Chvíli se radujte, a pak stiskněte `Ctrl + C` pro pokračování.

### Přizpůsobení (základní)

#### Změna tématu

*   Stáhněte nové téma (například [téma NexT](http://theme-next.iissnan.com/)). V kořenovém adresáři spusťte:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Otevřete soubor `_config.yml` v kořenovém adresáři a změňte pole `theme` na:

 ```bash
theme: next
 ```

*   Vyberte vzhled: Otevřete soubor `/themes/next/_config.yml` a najděte pole `scheme` (můžete použít `Ctrl + F` pro rychlé vyhledávání). NexT nabízí tři různé vzhledy. Vyberte si ten, který se vám líbí, a odstraňte znak `#` před ním (hlavními soubory, které budete následně upravovat, jsou **konfigurační soubor webu** a **konfigurační soubor tématu**).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Pro zobrazení výsledku spusťte následující příkazy (tento krok můžete opakovat kdykoli budete chtít zkontrolovat změny):

```bash
hexo g #nebo hexo generate
hexo server
```

#### Konfigurace webu

*   Pomocí editoru otevřete konfigurační soubor webu `_config.yml` v kořenovém adresáři (ve Windows nepoužívejte Poznámkový blok, čínské názvy by se mohly zobrazit chybně). Upravte sekci `Site`. **Dbejte na to, aby za dvojtečkou byla mezera**:

 ```bash
 # Site
 title: Neznámý svět                // Název blogu
 subtitle:
 description:  Do something cool // Podpis/motto
 author: LulalaP                 // Autor
 language: zh-Hans               // Jazyk webu
 timezone:
 ```

### Nastavení avataru v postranním panelu

*   Vytvořte novou složku s názvem `uploads` v adresáři `/source`. Umístěte sem obrázek avataru (např. `avatar.jpg`).

*   Otevřete soubor `/themes/next/_config.yml`, najděte pole `avatar` a upravte jej takto:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Vylepšení stránek blogu

#### Přidání menu
*   Otevřete soubor `/themes/next/_config.yml` a jednoduše odstraňte komentáře (znak `#`) před položkami menu, které chcete přidat. Pokud potřebujete přidat další položky, můžete je přidat podle potřeby (dbejte na správné odsazení):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Vytvoření stránky kategorií

*   Vytvořte novou stránku s názvem `categories` pomocí následujícího příkazu:

 ```bash
 $ hexo new page categories
 ```

*   Upravte nově vytvořenou stránku `/source/categories/index.md`. Nastavte typ stránky na `categories`, aby téma automaticky zobrazilo všechny kategorie na této stránce (nezapomeňte zachovat mezeru za dvojtečkou).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Vytvoření stránky s tagy (štítky)

*   Vytvořte novou stránku s názvem `tags` pomocí následujícího příkazu:

 ```bash
 $ hexo new page "tags"
 ```

*   Upravte nově vytvořenou stránku. Nastavte typ stránky na `tags`, aby téma automaticky zobrazilo tag cloud (mrak tagů) na této stránce.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Vytvoření stránky "O mně"

 *   Vytvořte novou stránku `about`:

 ```bash
 $ hexo new page "about"
 ```

 *   Upravte nově vytvořenou stránku. Do hlavního textu můžete napsat informace ve formátu Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Nastavení sociálních odkazů v postranním panelu

*   Upravte soubor `_config.yml` vašeho webu, najděte pole `social` a přidejte názvy a adresy sociálních sítí. Formát klíč-hodnota je `Zobrazovaný název: Adresa odkazu`, například:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Otevřete soubor `/themes/next/_config.yml` a pod pole `social_icons` přidejte názvy sociálních sítí (dbejte na velká/malá písmena) a (ikony)[http://fontawesome.io/icons/]. Možnost `enable` slouží k ovládání zobrazení ikon; můžete ji nastavit na `false` pro jejich skrytí. Například:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Propojení blogu s GitHubem

 *   Registrace účtu GitHub: Pokud ještě nemáte účet GitHub, musíte si nejprve jeden zaregistrovat.

 *   Na GitHubu vytvořte projekt s názvem `XXX.github.io`, kde `XXX` je vaše uživatelské jméno na GitHubu.

 *   Otevřete konfigurační soubor `_config.yml` uvnitř lokální složky `MyBlog` a nastavte v něm `type` na `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Spusťte:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Vygenerujte lokálně statické soubory a nahrajte je na GitHub. Spusťte:

```bash
hexo g
hexo d
```

Nyní otevřete prohlížeč a navštivte `http://your-name.github.io`. Gratulujeme, váš blog je tímto hotov!

### Připojení domény

Váš blog je nyní kompletně nastaven a dostupný přes doménu GitHubu. Bylo by však ještě lepší, kdybychom k němu připojili vlastní, kratší doménu.

#### Koupě domény

*   Kupte si doménu. Doporučujeme nákup na [namesilo.com](https://www.namesilo.com/) – je to osvědčený poskytovatel domén s výhodnými cenami a spolehlivými službami. Pokud použijete můj doporučující kód `PhiloArt.io`, získáte slevu 1 USD, platnou do 31. 12. 2025.

### DNS záznamy domény

*   Nastavení DNS u poskytovatele domény

*   Přidejte 4 záznamy typu A, které budou směřovat na GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Přidejte záznam `CNAME`, kde `name` bude `www` a `content` bude `your-name.github.io` (směřující na adresu vašich GitHub Pages):

 > CNAME —> philo-li.github.io

*   Podrobnější nastavení naleznete v [dokumentaci GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Přidání souboru CNAME do adresáře blogu

Po nakonfigurování DNS záznamů přejděte do adresáře blogu a v adresáři `source` vytvořte nový soubor s názvem `CNAME` (dbejte na to, že musí být velkými písmeny a bez přípony). Otevřete jej v Poznámkovém bloku a zapište do něj zakoupenou doménu, například: `www.philoli.com`.

*   Spusťte:

```bash
hexo g
hexo d
```

Nyní otevřete prohlížeč, zadejte doménu, stiskněte Enter a gratulujeme, máte svůj vlastní blog s nezávislou doménou.

### Publikování nového článku

*   V kořenovém adresáři blogu spusťte: `hexo new “Můj první článek”`. Tím se v adresáři `source/_posts` vygeneruje soubor `.md`.

*   Upravte tento soubor a změňte úvodní pole na:

 ```bash
 title Název článku
 date Datum vytvoření (datum vytvoření souboru)
 updated Datum poslední úpravy (datum úpravy souboru)
 comments Povolit komentáře true
 tags Tagy
 categories Kategorie
 permalink Název v URL (název souboru)
 ```

*   Napište hlavní text (dodržujte pravidla Markdownu)

*   Vygenerujte lokálně statické soubory a nahrajte je na GitHub. Spusťte:

```bash
hexo g
hexo d
```

### Přizpůsobení (pokročilé)

Níže uvádíme některá pokročilá nastavení pro přizpůsobení stylu blogu. Začátečníci mohou prozatím přeskočit.

#### Přidání RSS

 *   Nainstalujte plugin v kořenovém adresáři:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Na konec souboru `_config.yml` v kořenovém adresáři přidejte: (**_Dbejte na to, aby za dvojtečkou byla mezera, jinak dojde k chybě!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Otevřete soubor `/themes/next/_config.yml` a upravte `rss` (dbejte na to, aby za dvojtečkou byla mezera):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Zkrácení článků na úvodní stránce
 *   Kdykoli píšete článek, stačí na místo v souboru `.md`, kde chcete text zkrátit, přidat:

 ```markdown
     <!--more-->
 ```

 *   Otevřete soubor `/themes/next/_config.yml` a změňte volbu `scroll_to_more` na `false`.

#### Zarovnání citovaného textu ve článku na střed
*   Optimalizovaný výchozí styl citací v Markdownu.

```markdown
{% centerquote %}
Citovaný text
{% endcenterquote %}
```

{% centerquote %}
Citovaný text
{% endcenterquote %}

#### Úprava stylu bloků kódu

*   Upravte soubor `/themes/next/_config.yml` a změňte konfiguraci `codeblock` takto:

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

#### Nastavení data založení webu

 *   Upravte soubor `_config.yml` vašeho webu a přidejte nové pole `since`.

```bash
since: 2024
```

#### Vylepšení stylu odkazů v článcích

*   Upravte soubor `themes\next\source\css\_common\components\post\post.styl` a na konec přidejte následující CSS styl:

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

#### Přidání obrázku na pozadí blogu
*   V kořenovém adresáři `source` vytvořte složku `_data` a v ní nový soubor `styles.styl`. Otevřete nově vytvořený soubor `source/_data/styles.styl` a přidejte následující obsah:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Zda opakovat a jak, pokud se obrázek nemůže roztáhnout
    background-attachment:fixed;    // Zda se obrázek posouvá s obsahem
    background-size: cover;         // Pokrýt
    background-position:50% 50%;    // Pozice obrázku
}
```
*   V URL může být odkaz na obrázek nebo cesta k obrázku. Obrázek můžete pojmenovat `background.jpg` a umístit jej do složky `source/uploads`.

#### Nastavení poloprůhledného pozadí obsahu blogu
*   Otevřete soubor `source/_data/styles.styl`, který jste upravili v předchozím kroku, a přidejte pod něj následující obsah:

```css

// Transparentní obsah blogu
// Nastavení průhlednosti obsahu článku
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


// Nastavení průhlednosti postranního panelu
.sidebar {
  opacity: 0.9;
}

// Nastavení průhlednosti menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Nastavení průhlednosti vyhledávacího pole (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimalizace stylu inline bloků kódu
*   Otevřete soubor `source/_data/styles.styl`, který jste upravili v předchozím kroku, a přidejte pod něj následující obsah:

```css
// Zkrášlení tagu <code>
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Přidání počtu návštěvníků do zápatí webu

*   Upravte soubor:

```css
# Najděte sekci s tagem copyright a dovnitř tagu přidejte kód

<div class="copyright">
# ......zde již existují nějaká nastavení
# Zde přidejte nový kód
</div>

# Po přidání to vypadá takto:
<div class="copyright">
  # ......zde již existují nějaká nastavení
  # Zde přidejte nový kód
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Znovu vygenerujte a zkontrolujte upravený výsledek. Po ověření, že je vše v pořádku, publikujte.

```bash
hexo g
hexo s
# Po ověření, že je vše v pořádku, publikujte
hexo d
```

#### Přidání souboru README.md do repozitáře

Každý projekt obvykle obsahuje soubor `README.md`. Pokud však blog nasadíte do repozitáře pomocí Hexo, soubor `README.md` v projektu bude přepsán. Proto je nutné nastavit konfiguraci tak, aby k přepsání nedošlo.

Přidejte soubor `README.md` do kořenového adresáře `source` v adresáři `Hexo`. Upravte konfigurační soubor webu `_config.yml` a nastavte hodnotu parametru `skip_render` na:

```yml
skip_render: README.md
```
Uložte a ukončete. Až příště nasadíte blog pomocí příkazu `hexo d`, soubor `README.md` již nebude renderován.

#### Několik užitečných pluginů

-   Hexo Filter MathJax: renderuje matematické vzorce
    -   Instalace: `npm install hexo-filter-mathjax`
    -   Podrobná konfigurace: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: počítá slova v článcích
    -   Instalace: `npm install hexo-word-counter`
    -   Podrobná konfigurace: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: optimalizuje rychlost načítání blogu
    -   Instalace: `npm install hexo-optimize`
    -   Podrobná konfigurace: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Více pluginů: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Záloha zdrojových souborů

-   Nezapomeňte si zálohovat lokální zdrojové soubory, zejména soubory Markdown. Pokud byste ztratili ostatní konfigurace, nebylo by možné blog normálně psát a museli byste vše nastavit od začátku.
-   Doporučujeme zálohovat ve stejném repozitáři na GitHubu.
-   Doporučujeme zálohovat po každé změně, nebo alespoň denně.
-   Více o použití naleznete v [dokumentaci Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects). 

```bash
# Přidat dříve nastavenou adresu repozitáře blogu
git remote add https://github.com/your-name/your-name.github.io.git

# Přidat a uložit aktuální změny a zaznamenat poznámku
git add .
git commit -m "Aktualizace zdrojových souborů"

# Vytvořit a přepnout na novou větev
git checkout -b source

# Odeslat veškerý obsah lokální větve "source" do větve "source" ve vzdáleném repozitáři
git push origin source:source
```

### Psaní blogu z různých počítačů
-   Pokud píšete blog na jiném počítači, je nutné nejprve nainstalovat základní software a poté stáhnout vzdálený záložní repozitář z GitHubu do lokálního počítače, abyste mohli blog aktualizovat.

*   Stáhněte a nainstalujte Node.js ([stáhnout a nainstalovat z oficiálních stránek](https://nodejs.org/en/))
*   Stáhněte a nainstalujte Git ([stáhnout a nainstalovat z oficiálních stránek](https://git-scm.com/downloads))
*   Nainstalujte framework Hexo: Otevřete příkazový řádek (CMD) a spusťte:

 ```bash
 npm install -g hexo-cli
```
*   Provedení lokální aktualizace:

```bash
# Naklonovat repozitář lokálně
git clone https://github.com/your-name/your-name.github.io.git

# Pokud je repozitář již naklonován lokálně, je nutné před každou aktualizací blogu stáhnout nejnovější obsah větve.
git pull origin

# Přepnout na odpovídající větev
git checkout source

# Po instalaci všech pluginů v konfiguraci Hexo můžete začít aktualizovat a upravovat obsah blogu.
npm install

# Po úpravě obsahu nezapomeňte ihned provést kompletní zálohu.
git add .
git commit -m "Aktualizace blogu xxx"
git push origin source:source

# Publikovat a odeslat nejnovější obsah blogu na doménu
hexo clean
hexo g  # Vygenerovat statické soubory
hexo s  # Zobrazit náhled blogu lokálně
hexo d  # Publikovat nejnovější obsah blogu
```

### Přehled často používaných příkazů

 ```bash
hexo g
# nebo hexo generate, generuje statické stránky ze zdrojových souborů
hexo d
# nebo hexo deploy, publikuje a nahrává na GitHub Pages
hexo s
# nebo hexo server, lokálně nasadí pro testování
hexo clean
# Vyčistí cache statických stránek a poté hexo d znovu vygeneruje
