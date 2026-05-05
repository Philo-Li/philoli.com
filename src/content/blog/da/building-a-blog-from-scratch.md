---
title: En kortfattet guide til opbygning af en Hexo-blog fra bunden (2024-udgave)
date: 2024-04-11 00:25:20
tags: 博客搭建
categories: 日常折腾
---
Er du træt af de kedelige og uskønne brugerflader på mange blogplatforme? Har du fået nok af uendelige notifikationer og push-beskeder fra websites? Har du længe drømt om at skabe din egen blog, men er du blevet afskrækket af komplekse vejledninger og en masse hovedpinefremkaldende kode? Så er du heldig! Denne artikel vil trin for trin vise dig, hvordan du opretter din egen blog på den mest ligetil og forståelige måde. Det kræver blot en smule tålmodighed, og så kan du følge med skridt for skridt.

<!--more-->

Hexo er et hurtigt, enkelt og effektivt blog-framework, og det er intet mindre end en velsignelse for nybegyndere. GitHub sparer os desuden for besværet med at leje og deploye en server. I denne artikel vil vi derfor vise, hvordan du bygger en blog ved hjælp af Hexo og GitHub.

Jeg skrev en gang en [kort guide til at bygge en blog fra bunden](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) tilbage i 2018. På grund af opdateringer af plugins er der dog visse detaljer, der skal justeres, og derfor genudgiver vi nu den kortfattede guide i en 2024-udgave.

### Forberedelse

*   Download og installer Node.js ([download fra den officielle hjemmeside](https://nodejs.org/en/))
*   Download og installer Git ([download fra den officielle hjemmeside](https://git-scm.com/downloads))

### Opsætning af din Hexo-blog lokalt

*   Installer Hexo-frameworket: Åbn cmd (kommandoprompt) og kør:

    ```bash
    $ npm install -g hexo-cli
    ```

*   Opret en ny mappe, f.eks. 'MyBlog'. Gå ind i mappen, højreklik, og vælg at køre Git (Git Bash her), og indtast derefter:

    ```bash
    $ hexo init
    ```

*   Når Hexo-skabelonen er genereret, skal du installere npm. Kør derefter:

    ```bash
    $ npm install
    ```

Korrekt, hoveddelen af din blog er nu færdig! Lad os se resultatet. Kør:

```bash
$ hexo server
```

Åbn nu din browser og skriv `localhost:4000` for at se, hvordan din blog ser ud lige nu. Tag et lille glædesudbrud, og tryk derefter på `Ctrl + C` for at fortsætte.

### Personliggørelse (indledende)

#### Skift tema

*   Download et nyt tema (f.eks. [NexT-temaet](http://theme-next.iissnan.com/)). Kør følgende i rodmappen:

    ```bash
    $ git clone https://github.com/theme-next/hexo-theme-next themes/next
    ```

*   Åbn `_config.yml` i rodmappen, og rediger feltet `theme` til:

    ```bash
    theme: next
    ```

*   Vælg udseende: Åbn `/themes/next/_config.yml`, og find feltet `scheme` (du kan bruge `Ctrl + F` til hurtig søgning). NexT tilbyder tre forskellige udseender; vælg din favorit, og fjern derefter `#`-tegnet foran den (disse to filer – *site-konfigurationsfilen* og *temakonfigurationsfilen* – vil være de primære filer, du redigerer fremover).

    ```bash
    # Schemes
    #scheme: Muse
    scheme: Mist
    #scheme: Pisces
    #scheme: Gemini
    ```

*   For at se resultatet kan du køre følgende kommandoer (du kan gentage dette trin, hver gang du vil se ændringerne):

    ```bash
    hexo g #eller hexo generate
    hexo server
    ```

#### Konfiguration af sitet

*   Brug en teksteditor til at åbne site-konfigurationsfilen `_config.yml` i rodmappen (undgå at bruge Notesblok i Windows, da kinesiske tegn kan blive vist forkert). Rediger felterne under `Site`. Bemærk, at der skal være et mellemrum efter kolon:

    ```bash
    # Site
    title: 未知的世界                //Bloggens navn
    subtitle:
    description:  Do something cool //En signatur
    author: LulalaP                 //Forfatter
    language: zh-Hans               //Sproget på hjemmesiden
    timezone:
    ```

### Indstil profilbillede i sidebaren

*   Opret en ny mappe kaldet `uploads` i `/source`, og placer dit profilbillede (f.eks. `avatar.jpg`) i denne mappe.

*   Åbn `/themes/next/_config.yml`, find feltet `avatar`, og rediger det til:

    ```bash
    avatar:
        url: /uploads/avatar.jpg
    ```

### Forbedr bloggens sider

#### Tilføj menupunkter
*   Åbn `/themes/next/_config.yml`, og fjern blot kommentaren foran de menupunkter, du ønsker at tilføje under feltet `menu`. Hvis du vil tilføje andre menupunkter, kan du gøre det efter behov (vær opmærksom på indrykningen af felterne):

    ```bash
    menu:
      home: / || fa fa-home
      about: /about/ || fa fa-user
      tags: /tags/ || fa fa-tags
      categories: /categories/ || fa fa-th
      archives: /archives/ || fa fa-archive
    ```

#### Opret en kategoriside

*   Opret en ny side kaldet `categories` med følgende kommando:

    ```bash
    $ hexo new page categories
    ```

*   Rediger den nyligt oprettede side `/source/categories/index.md`, og sæt sidens type til `categories`. Temaet vil automatisk vise alle kategorier på denne side (husk at bevare mellemrummet efter kolon).

    ```bash
    	title: Categories
    	date: 2024-04-10 23:40:31
    	type: "categories"
    	comments: false
      ---
    ```

#### Opret en tag-sky-side

*   Opret en ny side kaldet `tags` med følgende kommando:

    ```bash
    $ hexo new page "tags"
    ```

*   Rediger den nyligt oprettede side, og sæt sidens type til `tags`. Temaet vil automatisk vise en tag-sky på denne side.

    ```bash
    ---
    	title: Tags
    	date: 2024-04-10 23:41:25
    	type: "tags"
    	comments: false
    ---
    ```

#### Opret en 'Om mig'-side

*   Opret en ny 'about'-side:

    ```bash
    $ hexo new page "about"
    ```

*   Rediger den nyligt oprettede side, og skriv dine oplysninger i brødteksten ved hjælp af Markdown-format.

    ```bash
    	title: About
    	date: 2024-04-10 23:41:56
    	comments: false
    ---
    ```

### Indstil sociale links i sidebaren

*   Rediger `_config.yml` for dit site, find feltet `social`, og tilføj blot navnet og adressen på dine sociale medier. Formatet er `Vist navn: Linkadresse`, f.eks.:

    ```bash
    # Social links
    social:
      GitHub: https://github.com/your-user-name || fab fa-github
      E-Mail: mailto:yourname@gmail.com || fa fa-envelope
      #Weibo: https://weibo.com/yourname || fab fa-weibo
      #Google: https://plus.google.com/yourname || fab fa-google
      Twitter: https://x.com/your-user-name || fab fa-twitter
    ```

*   Åbn `/themes/next/_config.yml`, og tilføj navnet (vær opmærksom på store og små bogstaver) og [ikonet](http://fontawesome.io/icons/) for dine sociale medier under feltet `social_icons`. Indstillingen `enable` styrer, om ikonerne skal vises; du kan sætte den til `false` for at fjerne ikonerne. F.eks.:

    ```bash
    social_icons:
      enable: true
      GitHub: github
      Twitter: twitter
    ```

### Knyt din blog til GitHub

*   Registrer en GitHub-konto: Hvis du ikke allerede har en GitHub-konto, skal du oprette en først.

*   Opret et projekt på GitHub med navnet `XXX.github.io`, hvor `XXX` er dit GitHub-brugernavn.

*   Åbn konfigurationsfilen `_config.yml` i din lokale `MyBlog`-mappe, og sæt `type` til `git`:

    ```bash
    deploy:
      type: git
      repository: https://github.com/your-name/your-name.github.io.git
      branch: main
    ```

*   Kør:

    ```bash
    npm install hexo-deployer-git --save
    ```

*   Generer statiske filer lokalt, og push dem derefter til GitHub. Kør:

    ```bash
    hexo g
    hexo d
    ```

Åbn nu din browser og besøg `http://your-name.github.io`. Tillykke! Din blog er nu fuldt opsat.

### Tilknyt et domæne

Din blog er nu fuldt opsat og kan tilgås via GitHubs domæne. Det ville dog være endnu mere perfekt at tilknytte et kortere, dit eget domæne til bloggen.

#### Køb et domæne

*   Køb et domæne. Vi anbefaler [namesilo.com](https://www.namesilo.com/), som er en anerkendt domæneudbyder med gode priser og pålidelig service. Hvis du bruger min henvisningskode `PhiloArt.io`, får du desuden 1 USD i rabat. Koden er gyldig indtil 2025-12-31.

### Domæne-opsætning

*   DNS-indstillinger hos domæneudbyderen

*   Tilføj 4 A-records, der peger på GitHub Pages:

    > 185.199.108.153
    > 185.199.109.153
    > 185.199.110.153
    > 185.199.111.153

*   Tilføj en `CNAME`-record, hvor `name` er `www`, og `content` er `your-name.github.io` (som peger på din GitHub Pages-adresse):

    > CNAME —> philo-li.github.io

*   For mere detaljerede indstillinger, se [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Tilføj CNAME-fil i blogmappen

    Når domæne-opsætningen er færdig, skal du gå ind i din blogmappe og oprette en ny fil kaldet `CNAME` (bemærk store bogstaver og ingen filendelse) i `source`-mappen. Åbn den med en teksteditor, og skriv det domæne, du har købt, f.eks.: `www.philoli.com`

*   Kør:

    ```bash
    hexo g
    hexo d
    ```

Åbn nu din browser, indtast domænet, og tryk Enter. Tillykke! Du har nu en blog med dit eget uafhængige domæne.

### Udgiv nye indlæg

*   Kør `hexo new “Min første artikel”` i bloggens rodmappe. Dette vil oprette en `.md`-fil i `source/_posts`-mappen.

*   Rediger filen, og ændr de indledende felter til:

    ```bash
    title Artikelens titel
    date Oprettelsesdato (filens oprettelsesdato)
    updated Redigeringsdato (filens redigeringsdato)
    comments Er kommentarer aktiveret? true
    tags Tags
    categories Kategorier
    permalink Navnet i URL'en (filnavnet)
    ```

*   Skriv indlæggets indhold (følg Markdown-reglerne)

*   Generer statiske filer lokalt, og push dem derefter til GitHub. Kør:

    ```bash
    hexo g
    hexo d
    ```

### Avancerede tilpasninger

Herunder finder du nogle avancerede indstillinger til personliggørelse af bloggens udseende. Nybegyndere kan springe dette over i første omgang.

#### Tilføj RSS

*   Installer plugin i rodmappen

    ```bash
    $ npm install hexo-generator-feed --save
    ```

*   Tilføj følgende i slutningen af `_config.yml` i rodmappen: (**_Bemærk venligst, at der skal være et mellemrum efter kolon, ellers vil der opstå en fejl!_**)

    ```bash
    # Extensions
    ## Plugins: http://hexo.io/plugins/
    plugins: hexo-generate-feed
    ```

*   Åbn `/themes/next/_config.yml`, og rediger `rss` (husk et mellemrum efter kolon)

    ```yml
    rss: /atom.xml || fa fa-rss
    ```

#### Afkortning af indlæg på forsiden
*   Hver gang du skriver et indlæg, skal du blot tilføje følgende, hvor du ønsker at afkorte teksten i `.md`-filen:

    ```markdown
        <!--more-->
    ```

*   Åbn `/themes/next/_config.yml`, og sæt indstillingen `scroll_to_more` til `false`.

#### Centrer citater i indlæg
*   Optimeret standard Markdown-citatstil

    ```markdown
    {% centerquote %}
    Citattekst
    {% endcenterquote %}
    ```

{% centerquote %}
Citattekst
{% endcenterquote %}

#### Tilpas kodestykke-stil

*   Rediger `/themes/next/_config.yml`, og tilpas `codeblock`-konfigurationen som følger:

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

#### Indstil oprettelsestidspunkt for sitet

*   Rediger `_config.yml` for sitet, og tilføj feltet `since`.

    ```bash
    since: 2024
    ```

#### Forbedr linkstil i indlæg

*   Rediger filen `themes\next\source\css\_common\components\post\post.styl`, og tilføj følgende CSS-stil i slutningen:

    ```css
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

#### Tilføj baggrundsbillede til bloggen
*   Opret en `_data`-mappe under `source`-mappen i rodmappen. Opret en ny fil kaldet `styles.styl` i denne mappe. Åbn den nye fil `source/_data/styles.styl`, og tilføj følgende indhold:

    ```css
    body {
        background:url(/uploads/background.jpg);
        background-repeat: no-repeat;   //Hvorvidt billedet gentages, hvis det ikke fylder (og hvordan)
        background-attachment:fixed;    //Hvorvidt billedet følger med ved scroll
        background-size: cover;         //Dækker
        background-position:50% 50%;    //Billedets position
    }
    ```
*   URL'en kan være et billedlink eller en billedsti. Du kan navngive billedet `background.jpg` og placere det i `source/uploads`-mappen.

#### Indstil blogindholdets baggrund til semi-transparent
*   Åbn filen `source/_data/styles.styl`, som du redigerede i det forrige trin, og tilføj yderligere indhold nedenfor:

    ```css

    //Blogindholdets gennemsigtighedsindstillinger
    //Indstillinger for artiklens indholds gennemsigtighed
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


    //Indstillinger for sidebarens gennemsigtighed
    .sidebar {
      opacity: 0.9;
    }

    //Indstillinger for menulinjens gennemsigtighed
    .header-inner {
      background: rgba(255,255,255,0.9);
    }

    //Indstillinger for søgefeltets (local-search) gennemsigtighed
    .popup {
      opacity: 0.9;
    }
    ```

#### Optimer stilen for inline kodestykker
*   Åbn filen `source/_data/styles.styl`, som du redigerede i det forrige trin, og tilføj yderligere indhold nedenfor:

    ```css
    // Forbedring af koden til kodelabels
    code {
      padding: 2px 4px;
      word-wrap: break-word;
      color: #c7254e;
      background: #f9f2f4;
      border-radius: 3px;
      font-size: 18px;
    }
    ```

#### Tilføj besøgsantal i bunden af sitet

*   Rediger filen

    ```css
    # Find copyright-tagget, og tilføj kode inde i tagget

    <div class="copyright">
    # ......Her er der allerede nogle konfigurationer
    # Tilføj ny kode her
    </div>

    # Efter tilføjelsen ser det sådan ud:
    <div class="copyright">
      # ......Her er der allerede nogle konfigurationer
      # Tilføj ny kode her
      {%- if true %}
        <span class="post-meta-divider">|</span>
        <span class="post-meta-item-icon">
          <i class="fa fa-user-md"></i>
        </span>
        Visitors: <span id="busuanzi_value_site_uv"></span>
      {%- endif %}
    </div>
    ```

*   Generer og forhåndsvis de ændrede effekter igen. Når du har bekræftet, at alt er i orden, kan du udgive.

    ```bash
    hexo g
    hexo s
    # Når du har bekræftet, at alt er i orden, kan du udgive
    hexo d
    ```

#### Tilføj en README.md-fil til repository'et

Hvert projekt har typisk en `README.md`-fil, men når du deployer med Hexo til et repository, vil `README.md`-filen i projektet blive overskrevet. Derfor skal du konfigurere filen for at undgå overskrivning.

Tilføj en `README.md`-fil i `source`-rodmappen i `Hexo`-biblioteket, og rediger site-konfigurationsfilen `_config.yml` ved at sætte værdien for parameteren `skip_render` til:

```yml
skip_render: README.md
```
Gem og afslut. Næste gang du deployer bloggen med `hexo d`-kommandoen, vil `README.md`-filen ikke blive renderet.

#### Nogle nyttige plugins

- Hexo Filter MathJax: Renderer matematiske formler
  - Installer: `npm install hexo-filter-mathjax`
  - Detaljeret konfiguration: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Tæller ord i indlæg
  - Installer: `npm install hexo-word-counter`
  - Detaljeret konfiguration: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Optimerer bloggens indlæsningshastighed
  - Installer: `npm install hexo-optimize`
  - Detaljeret konfiguration: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Flere plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Backup af kilde-filer

- Husk altid at sikkerhedskopiere dine lokale kilde-filer, især Markdown-filerne. Hvis andre konfigurationer går tabt, vil du ikke kunne skrive blogindlæg normalt og skal opsætte alt forfra.
- Det anbefales at bruge det samme GitHub-repository til backup.
- Det anbefales at sikkerhedskopiere hver gang der er ændringer, eller mindst dagligt.
- For mere information, se [Git-dokumentationen](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)

```bash
# Tilføj adressen til det blog-repository, du har opsat tidligere
git remote add https://github.com/your-name/your-name.github.io.git

# Tilføj og gem de aktuelle ændringer, og tilføj en kommentar
git add .
git commit -m "Kilde-filer opdateret"

# Opret og skift til en ny gren
git checkout -b source

# Push alt indhold fra den lokale 'source'-gren til 'source'-grenen i det eksterne repository
git push origin source:source
```

### Skriv blogindlæg fra forskellige computere
- Når du skriver blogindlæg fra forskellige computere, skal du installere den nødvendige grundlæggende software og derefter trække det eksterne GitHub-repository (din backup) ned lokalt for at opdatere bloggen.

*   Download og installer Node.js ([download fra den officielle hjemmeside](https://nodejs.org/en/))
*   Download og installer Git ([download fra den officielle hjemmeside](https://git-scm.com/downloads))
*   Installer Hexo-frameworket: Åbn cmd (kommandoprompt) og kør:

    ```bash
    npm install -g hexo-cli
    ```
*   Udfør lokal opdatering

    ```bash
    # Klon repository'et lokalt
    git clone https://github.com/your-name/your-name.github.io.git

    # Hvis du allerede har klonet lokalt, skal du trække det nyeste grenindhold ned, hver gang du opdaterer bloggen
    git pull origin

    # Skift til den relevante gren
    git checkout source

    # Efter installation af alle plugins under Hexo-konfigurationen kan du begynde at opdatere og redigere blogindholdet
    npm install

    # Husk at sikkerhedskopiere dine ændringer straks (hele processen)
    git add .
    git commit -m "Blog opdateret xxx"
    git push origin source:source

    # Udgiv og push det nyeste blogindhold til dit domæne
    hexo clean
    hexo g  # Generer statiske filer
    hexo s  # Forhåndsvis bloggens udseende lokalt
    hexo d  # Udgiv det nyeste blogindhold
    ```

### Oversigt over ofte brugte kommandoer

```bash
hexo g
# eller hexo generate, genererer statiske websider ud fra kilde-filerne
hexo d
# eller hexo deploy, udgiver og pusher til GitHub Pages
hexo s
# eller hexo server, lokal deployment og test
hexo clean
# Rydder cache for statiske websider, og derefter hexo d for at regenerere
