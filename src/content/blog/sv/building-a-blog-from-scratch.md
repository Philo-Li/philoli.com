---
title: En enkel guide för att bygga en Hexo-blogg från grunden (2024 års version)
date: 2024-04-11 00:25:20
tags: Bloggbyggande
categories: Vardagspyssel
---
Har du länge varit trött på de oestetiska gränssnitten på många bloggwebbplatser? Har du fått nog av oändliga webbplatsnotiser? Har du länge velat skapa en egen blogg men stoppats av komplicerade guider och en rad huvudvärkande koder? Då har du tur! Den här artikeln är utformad för att på ett så enkelt sätt som möjligt vägleda dig steg för steg till din egen blogg. Allt du behöver är lite tålamod och att följa instruktionerna.

<!--more-->

Hexo är ett snabbt, rent och effektivt bloggramverk, en riktig välsignelse för nybörjare. GitHub i sin tur befriar oss från besväret med att hyra och driftsätta en egen server. Därför kommer den här guiden att visa hur man bygger en blogg med Hexo och GitHub.

Jag skrev en liknande guide redan 2018, [En enkel guide för att bygga en blogg från grunden](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). På grund av uppdateringar av tillägg har vissa detaljer förändrats, så därför lanserar jag nu 2024 års version av den här enkla guiden.

### Förberedelser

*   Ladda ner och installera Node.js ([officiell nedladdning](https://nodejs.org/en/))
*   Ladda ner och installera Git ([officiell nedladdning](https://git-scm.com/downloads))

### Bygg en lokal statisk Hexo-blogg

*   Installera Hexo-ramverket: Öppna cmd (kommandotolken) och kör:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Skapa en ny mapp, till exempel MyBlog. Gå in i mappen, högerklicka och kör Git, skriv sedan:

 ```bash
 $ hexo init
 ```

*   Efter att Hexo-mallen har genererats, installera npm och kör:

 ```bash
$ npm install
 ```

Japp, den huvudsakliga delen av bloggen är nu klar! Låt oss kolla resultatet. Kör:

```bash
$ hexo server
```

Öppna nu din webbläsare, skriv in `localhost:4000` så kan du se hur bloggen ser ut just nu. Lite spännande, eller hur? Tryck sedan Ctrl + C för att fortsätta med nästa steg.

### Anpassning (grundläggande)

#### Ändra tema

*   Ladda ner ett nytt tema (vi använder [NexT-temat](http://theme-next.iissnan.com/) som exempel). Kör i rotkatalogen:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Öppna `_config.yml` i rotkatalogen och ändra fältet `theme` till:

 ```bash
theme: next
 ```

*   Välj utseende: Öppna `/themes/next/_config.yml` och hitta fältet `scheme` (du kan använda Ctrl + F för att snabbsöka). NexT erbjuder tre olika utseenden; välj en du gillar och ta bort #-tecknet framför den (de två huvudsakliga filerna du kommer att redigera är _webbplatskonfigurationsfilen_ och _temakonfigurationsfilen_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   För att se resultatet kan du köra följande kommandon (upprepa detta steg varje gång du vill förhandsgranska):

```bash
hexo g #eller hexo generate
hexo server
```

#### Webbplatskonfiguration

*   Öppna webbplatsens konfigurationsfil `_config.yml` i rotkatalogen med en redigerare (använd inte Anteckningar i Windows, då kinesiska tecken i titeln kan bli korrupta). Ändra fältet `Site`. Observera att det ska vara ett mellanslag efter kolon:

 ```bash
 # Site
 title: Okänd värld                // Bloggens namn
 subtitle:
 description:  Do something cool // En signatur
 author: LulalaP                 // Författare
 language: zh-Hans               // Webbplatsens språk
 timezone:
 ```

### Ställ in sidofältets avatar

*   Skapa en ny mapp med namnet `uploads` i `/source/` och placera din avatarbild (t.ex. avatar.jpg) i den mappen.

*   Öppna `/themes/next/_config.yml`, hitta fältet `avatar` och ändra det till:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Förbättra bloggsidorna

#### Lägg till menyer
*   Öppna `/themes/next/_config.yml` och ta bort kommentartecknet framför de menyalternativ du vill lägga till i fältet `menu`. Om du vill lägga till andra menyalternativ kan du göra det vid behov (observera indragningen):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Skapa en kategorisida

*   Skapa en ny sida med namnet `categories` med följande kommando:

 ```bash
 $ hexo new page categories
 ```

*   Redigera den nyskapade sidan `/source/categories/index.md` och ställ in sidans typ till `categories`. Temat kommer automatiskt att visa alla kategorier på denna sida (observera att du ska behålla mellanslaget efter kolon).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Skapa en taggmoln-sida

*   Skapa en ny sida med namnet `tags` med följande kommando:

 ```bash
 $ hexo new page "tags"
 ```

*   Redigera den nyskapade sidan och ställ in sidans typ till `tags`. Temat kommer automatiskt att visa ett taggmoln för denna sida.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Skapa en "Om mig"-sida

 *   Skapa en ny "about"-sida:

 ```bash
 $ hexo new page "about"
 ```

 *   Redigera den nyskapade sidan. Du kan skriva din information i Markdown-format i brödtexten.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Ställ in sociala länkar i sidofältet

*   Redigera webbplatsens `_config.yml`, hitta fältet `social` och lägg till namn och adress för dina sociala medier. Formatet är `Visningsnamn: Länkadress`, till exempel:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Öppna `/themes/next/_config.yml`, lägg till namnet på den sociala medie-webbplatsen (observera versaler/gemener) och dess ikon ([http://fontawesome.io/icons/](http://fontawesome.io/icons/)) under fältet `social_icons`. Alternativet `enable` styr om ikonen ska visas; du kan ställa in det till `false` för att ta bort ikonen. Till exempel:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Koppla bloggen till GitHub

 *   Registrera ett GitHub-konto: Om du inte redan har ett GitHub-konto måste du först registrera ett.

 *   På GitHub, skapa ett projekt med namnet `XXX.github.io`, där XXX är ditt GitHub-användarnamn.

 *   Öppna konfigurationsfilen `_config.yml` i din lokala `MyBlog`-projektmapp och ställ in `type` till `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Kör:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Generera statiska filer lokalt och pusha dem till GitHub. Kör:

```bash
hexo g
hexo d
```

Öppna nu din webbläsare och besök `http://your-name.github.io`. Grattis, din blogg är nu färdig!

### Koppla egen domän

Nu är bloggen helt uppbyggd och kan nås via GitHub-domänen. Att koppla en kortare domän till bloggen skulle göra det ännu bättre.

#### Köpa en domän

*   Köp en domän. Jag rekommenderar att köpa från [namesilo.com](https://www.namesilo.com/), en etablerad domänleverantör med bra priser och pålitlig service. Om du använder min rekommendationskod `PhiloArt.io` får du 1 dollar rabatt, giltigt till 2025-12-31.

### Domännamnspekning

*   DNS-inställningar hos domänleverantören

*   Lägg till 4 A-pekare som pekar mot GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Lägg till en `CNAME`-pekare, där `name` är `www` och `content` är `your-name.github.io` (pekar mot din Github Pages-adress):

 > CNAME —> philo-li.github.io

*   För mer detaljerade inställningar, se [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Lägg till CNAME-fil i bloggkatalogen

 Efter att ha konfigurerat domännamnspekningen, gå till bloggkatalogen, skapa en fil med namnet `CNAME` (observera att det ska vara stora bokstäver och ingen filändelse) i `source`-katalogen. Öppna den med Anteckningar och skriv in din köpta domän, till exempel: `www.philoli.com`

*   Kör:

```bash
hexo g
hexo d
```

Öppna nu din webbläsare, skriv in domännamnet och tryck enter. Grattis, du har nu en blogg med din egen domän!

### Publicera nya inlägg

*   I bloggens rotkatalog, kör: `hexo new “Min första artikel”`. En `.md`-fil kommer att skapas i mappen `source/_posts`.

*   Redigera filen och ändra de initiala fälten till:

 ```bash
 title Titel på artikeln
 date Skapandedatum (filens skapandedatum)
 updated Ändringsdatum (filens ändringsdatum)
 comments Aktivera kommentarer true
 tags Taggar
 categories Kategorier
 permalink Namn i URL (filnamn)
 ```

*   Skriv brödtexten (följ Markdown-reglerna)

*   Generera statiska filer lokalt och pusha dem till GitHub. Kör:

```bash
hexo g
hexo d
```

### Anpassning (avancerad)

Nedan följer några avancerade inställningar för att anpassa bloggens utseende. Nybörjare kan hoppa över detta tills vidare.

#### Lägg till RSS

 *   Installera tillägget i rotkatalogen:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Lägg till följande i slutet av `_config.yml` i rotkatalogen: (**_Observera att du måste lägga till ett mellanslag efter kolon, annars uppstår ett fel!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Öppna `/themes/next/_config.yml` och ändra `rss` (observera att det ska vara ett mellanslag efter kolon):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Korta ner artiklar på startsidan
 *   När du skriver artiklar, lägg bara till följande där du vill att artikeln ska klippas av i `.md`-filen:

 ```markdown
     <!--more-->
 ```

 *   Öppna `/themes/next/_config.yml` och ändra alternativet `scroll_to_more` till `false`.

#### Centrera citat i artiklar
*   Optimerar standardstilen för Markdown-citat.

```markdown
{% centerquote %}
Citattext
{% endcenterquote %}
```

{% centerquote %}
Citattext
{% endcenterquote %}

#### Ändra stil på kodblock

*   Redigera `/themes/next/_config.yml` och ändra `codeblock`-konfigurationen enligt följande:

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

#### Ställ in webbplatsens skapandedatum

 *   Redigera webbplatsens `_config.yml` och lägg till fältet `since`.

```bash
since: 2024
```

#### Förbättra artikelns länkstil

*   Redigera filen `themes\next\source\css\_common\components\post\post.styl` och lägg till följande CSS-stil i slutet:

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

#### Lägg till bakgrundsbild till bloggen
*   Skapa en mapp `_data` i `source`-mappen i rotkatalogen. Skapa en ny fil `styles.styl` i den mappen. Öppna den nyskapade filen `source/_data/styles.styl` och lägg till följande innehåll:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Om bilden inte täcker, hur den ska repeteras
    background-attachment:fixed;    //Om bilden ska följa med vid scrollning
    background-size: cover;         //Täck hela ytan
    background-position:50% 50%;    //Bildens position
}
```
*   URL:en kan vara en bildlänk eller en bildkatalog. Du kan döpa bilden till `background.jpg` och placera den i mappen `source/uploads`.

#### Gör blogginnehållets bakgrund halvtransparent
*   Öppna filen `source/_data/styles.styl` som du redigerade i föregående steg, och lägg till följande innehåll under det befintliga:

```css

// Blogginnehåll transparensinställningar
// Transparens för artikelinnehåll
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


// Transparens för sidofältet
.sidebar {
  opacity: 0.9;
}

// Transparens för menyfältet
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Transparens för sökfältet (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimera stilen för inline-kodblock
*   Öppna filen `source/_data/styles.styl` som du redigerade i föregående steg, och lägg till följande innehåll under det befintliga:

```css
// Försköning av kodtaggar
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Lägg till besöksräknare i webbplatsens sidfot

*   Redigera och modifiera filen:

```css
# Hitta etiketten copyright och lägg till koden inuti etiketten

<div class="copyright">
# ......här finns redan lite konfiguration
# Lägg till ny kod här
</div>

# Efter tillägg ser det ut så här:
<div class="copyright">
  # ......här finns redan lite konfiguration
  # Lägg till ny kod här
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Generera om förhandsgranskningen av de ändrade effekterna, bekräfta att det ser bra ut och publicera sedan.

```bash
hexo g
hexo s
# Bekräfta att det ser bra ut och publicera sedan
hexo d
```

#### Lägg till en README.md-fil till lagringsplatsen

Varje projekt har vanligtvis en `README.md`-fil, men när Hexo distribueras till lagringsplatsen kommer `README.md`-filen att skrivas över. Därför måste du ställa in konfigurationsfilen för att undvika överskrivning.

Lägg till en `README.md`-fil i rotkatalogen `source` i `Hexo`-katalogen. Ändra webbplatsens konfigurationsfil `_config.yml` och ställ in värdet för parametern `skip_render` till:

```yml
skip_render: README.md
```
Spara och avsluta. Nästa gång du använder kommandot `hexo d` för att distribuera bloggen kommer `README.md`-filen inte att renderas.

#### Några användbara tillägg

-   Hexo Filter MathJax: Renderar matematiska formler
    -   Installera `npm install hexo-filter-mathjax`
    -   Detaljerad konfiguration: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Räknar ord i artiklar
    -   Installera `npm install hexo-word-counter`
    -   Detaljerad konfiguration: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optimerar bloggens laddningstid
    -   Installera `npm install hexo-optimize`
    -   Detaljerad konfiguration: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Fler tillägg: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Säkerhetskopiering av källfiler

-   Kom ihåg att säkerhetskopiera dina lokala källfiler, särskilt Markdown-filerna. Om andra konfigurationer går förlorade kan du inte skriva bloggen normalt och måste börja om från början.
-   Jag rekommenderar att du använder samma GitHub-lagringsplats för säkerhetskopiering.
-   Jag rekommenderar att du säkerhetskopierar varje gång du gör ändringar, eller dagligen.
-   För mer information, se [Git-dokumentationen](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Lägg till den tidigare inställda bloggrepo-adressen
git remote add https://github.com/your-name/your-name.github.io.git

# Lägg till och spara aktuella ändringar, och notera en kommentar
git add .
git commit -m "Källfilsuppdatering"

# Skapa och byt till en ny gren
git checkout -b source

# Pusha allt innehåll från den lokala "source"-grenen till den fjärranslutna lagringsplatsens "source"-gren
git push origin source:source
```

### Skriva bloggen från olika datorer
-   När du skriver bloggen från olika datorer behöver du installera grundläggande programvara och sedan hämta den fjärranslutna säkerhetskopian från GitHub till din lokala maskin för att uppdatera bloggen.

*   Ladda ner och installera Node.js ([officiell nedladdning](https://nodejs.org/en/))
*   Ladda ner och installera Git ([officiell nedladdning](https://git-scm.com/downloads))
*   Installera Hexo-ramverket: Öppna cmd och kör:

 ```bash
 npm install -g hexo-cli
```
*   Utför lokal uppdatering:

```bash
# Klona lagringsplatsen lokalt
git clone https://github.com/your-name/your-name.github.io.git

# Om den redan är klonad lokalt, måste du hämta det senaste greninnehållet före varje blogguppdatering
git pull origin

# Byt till motsvarande gren
git checkout source

# Efter att ha installerat alla Hexo-konfigurerade tillägg kan du börja uppdatera och redigera blogginnehållet
npm install

# Efter att ha ändrat innehållet, kom ihåg att säkerhetskopiera i ett svep
git add .
git commit -m "Blogguppdatering xxx"
git push origin source:source

# Publicera och pusha det senaste blogginnehållet till domänwebbplatsen
hexo clean
hexo g  # Generera statiska filer
hexo s  # Förhandsgranska bloggen lokalt
hexo d  # Publicera det senaste blogginnehållet
```

### Sammanfattning av några användbara kommandon

 ```bash
hexo g
#eller hexo generate, genererar statiska webbsidor från källfilerna
hexo d
#eller hexo deploy, publicerar och pushar till GitHub Pages
hexo s
#eller hexo server, driftsätter och testar lokalt
hexo clean
# Rensa cache för statiska webbsidor, sedan hexo d för att återskapa
