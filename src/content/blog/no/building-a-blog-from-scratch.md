---
title: En enkel guide til å sette opp en Hexo-blogg fra bunnen av (2024-utgaven)
date: 2024-04-11 00:25:20
tags: Bloggbygging
categories: Hverdagsutfordringer
---
Har du lenge vært lei av de kjedelige grensesnittene på mange bloggnettsteder? Er du lei av endeløse varsler og reklame? Har du drømt om å lage din egen blogg, men blitt stoppet av kompliserte guider og hodebry med kode? Da er du heldig! Denne artikkelen er skrevet for å veilede deg trinn for trinn på den enklest mulige måten, slik at du kan sette opp din egen blogg. Alt du trenger er litt tålmodighet og å følge instruksjonene nøye.

<!--more-->

Hexo er et raskt, rent og effektivt bloggrammeverk, en sann gavepakke for nybegynnere. Og med GitHub slipper vi bryet med å leie og sette opp en egen server. Derfor vil denne guiden vise deg hvordan du bygger en blogg ved hjelp av Hexo og GitHub.

Jeg skrev en gang en lignende guide, [En enkel guide til å bygge en blogg fra bunnen av](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/), tilbake i 2018. På grunn av oppdateringer i diverse plugins er det imidlertid en del detaljer som har endret seg. Derfor lanserer jeg nå 2024-utgaven av denne enkle guiden.

### Forberedelser

*   Last ned og installer Node.js ([last ned fra offisiell nettside](https://nodejs.org/en/))
*   Last ned og installer Git ([last ned fra offisiell nettside](https://git-scm.com/downloads))

### Sette opp Hexo statisk blogg lokalt

*   Installer Hexo-rammeverket: Åpne CMD (kommandolinje) og kjør
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Opprett en ny mappe, for eksempel MyBlog. Gå inn i denne mappen, høyreklikk og velg 'Git Bash Here', skriv deretter:

 ```bash
 $ hexo init
 ```

*   Etter at Hexo-malen er generert, installer npm-pakker ved å kjøre:

 ```bash
$ npm install
 ```

Stemmer! Hoveddelen av bloggen din er nå klar. La oss ta en titt på resultatet. Kjør:

```bash
$ hexo server
```

Nå kan du åpne nettleseren din, skrive inn localhost:4000, og se hvordan bloggen din ser ut! Ta deg et lite øyeblikk til å glede deg, og trykk deretter Ctrl + C for å fortsette med de neste stegene.

### Grunnleggende tilpasninger

#### Bytte tema

*   Last ned et nytt tema (for eksempel [NexT-temaet]( http://theme-next.iissnan.com/ )). Kjør dette i rotmappen:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Åpne `_config.yml` i rotmappen og endre feltet `theme` til:

 ```bash
theme: next
 ```

*   Velg utseende: Åpne `/themes/next/_config.yml` og finn `scheme`-feltet (du kan bruke Ctrl + F for å søke). NexT tilbyr fire forskjellige utseender, så velg det du liker best og fjern `#`-tegnet foran det. (Disse to filene – _nettstedets konfigurasjonsfil_ og _temaets konfigurasjonsfil_ – er de du hovedsakelig vil redigere fremover.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   For å se endringene, kjør følgende kommandoer (du kan gjenta dette trinnet hver gang du vil forhåndsvise endringer):

```bash
hexo g #eller hexo generate
hexo server
```

#### Nettstedskonfigurasjon

*   Åpne nettstedets konfigurasjonsfil `_config.yml` i rotmappen med en teksteditor (ikke bruk Notisblokk i Windows, da kinesiske tegn kan vises feil). Endre feltene under `Site`. Merk at det må være et mellomrom etter kolon:

 ```bash
 # Site
 title: Ukjent verden                // Bloggnavn
 subtitle:
 description:  Do something cool // En signatur/slogan
 author: LulalaP                 // Forfatter
 language: zh-Hans               // Nettstedets språk
 timezone:
 ```

### Legge til profilbilde i sidefeltet

*   Opprett en ny mappe kalt `uploads` i `/source`-mappen, og plasser profilbildet ditt (f.eks. avatar.jpg) der.

*   Åpne `/themes/next/_config.yml`, finn feltet `avatar` og endre det til:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Forbedre bloggsidene

#### Legge til menyelementer
*   Åpne `/themes/next/_config.yml`. Fjern kommentaren (`#`) foran menyelementene du ønsker å legge til under `menu`. Du kan legge til flere menyelementer etter behov (vær oppmerksom på innrykk):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Opprette kategoriside

*   Opprett en ny side kalt `categories` med følgende kommando:

 ```bash
 $ hexo new page categories
 ```

*   Rediger den nyopprettede siden `/source/categories/index.md`. Sett sidens `type` til `categories`, og temaet vil automatisk vise alle kategorier på denne siden (husk å beholde mellomrommet etter kolon).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Opprette taggesky-side

*   Opprett en ny side kalt `tags` med følgende kommando:

 ```bash
 $ hexo new page "tags"
 ```

*   Rediger den nyopprettede siden og sett sidens `type` til `tags`. Temaet vil automatisk vise en taggesky på denne siden.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Opprette en «Om meg»-side

 *   Opprett en ny «about»-side:

 ```bash
 $ hexo new page "about"
 ```

 *   Rediger den nyopprettede siden. Du kan skrive informasjonen din i Markdown-format i brødteksten.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Legge til sosiale lenker i sidefeltet

*   Rediger nettstedets `_config.yml`, finn feltet `social`, og legg til navn og adresse for sosiale medier. Formatet er `Visningsnavn: Lenkeadresse`, for eksempel:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Åpne `/themes/next/_config.yml`, og under feltet `social_icons` legger du til navnet på det sosiale nettstedet (vær obs på store/små bokstaver) og [ikonet](http://fontawesome.io/icons/). `enable`-alternativet kontrollerer om ikonet skal vises; du kan sette det til `false` for å fjerne ikoner. For eksempel:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Koble bloggen til GitHub

 *   Registrer en GitHub-konto: Hvis du ikke allerede har en GitHub-konto, må du registrere deg først.

 *   Opprett et prosjekt på GitHub med navnet `XXX.github.io`, der XXX er ditt GitHub-brukernavn.

 *   Åpne konfigurasjonsfilen `_config.yml` i din lokale `MyBlog`-mappe, og sett `type` til `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Kjør:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Generer statiske filer lokalt og last dem opp til GitHub ved å kjøre:

```bash
hexo g
hexo d
```

Nå, åpne nettleseren din og besøk http://your-name.github.io. Gratulerer, bloggen din er nå satt opp!

### Knytte til domene

Bloggen er nå fullstendig satt opp og kan nås via GitHub-domenet. For å gjøre det enda bedre, kan du nå knytte et eget, kortere domene til den.

#### Kjøpe domene

*   Kjøp et domene. Jeg anbefaler [namesilo.com](https://www.namesilo.com/), en anerkjent domeneleverandør med gode priser og pålitelig service. Hvis du bruker min henvisningskode `PhiloArt.io`, får du 1 USD i rabatt. Gyldig til 31.12.2025.

### Domenenavnsoppløsning (DNS)

*   DNS-innstillinger hos domeneleverandøren

*   Legg til 4 A-pekere som peker til GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Legg til en `CNAME`-post med `name` som `www` og `content` som `your-name.github.io` (som peker til din GitHub Pages-adresse):

 > CNAME —> philo-li.github.io

*   For mer detaljerte innstillinger, se [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Legge til CNAME-fil i bloggens rotmappe

 Etter å ha konfigurert domenenavnsoppløsningen, gå til bloggens rotmappe. Opprett en ny fil kalt `CNAME` (merk at det skal være store bokstaver og ingen filendelse) i `source`-katalogen. Åpne den med en teksteditor og skriv inn domenenavnet du har kjøpt, for eksempel: `www.philoli.com`

*   Kjør:

```bash
hexo g
hexo d
```

Åpne nå nettleseren din, skriv inn domenet og trykk Enter. Gratulerer, du har nå en blogg med ditt eget uavhengige domenenavn!

### Publisere en ny artikkel

*   I bloggens rotmappe, kjør: `hexo new “Min første artikkel”`. Dette vil generere en `.md`-fil i `source/_posts`-mappen.

*   Rediger filen og endre de innledende feltene til:

 ```bash
 title Tittel på artikkelen
 date Opprettelsesdato (filens opprettelsesdato)
 updated Endringsdato (filens endringsdato)
 comments Aktiver kommentarer true
 tags Tagger
 categories Kategorier
 permalink Navn i URL (filnavn)
 ```

*   Skriv hovedinnholdet (følg Markdown-reglene)

*   Generer statiske filer lokalt og last dem opp til GitHub ved å kjøre:

```bash
hexo g
hexo d
```

### Avanserte tilpasninger

Nedenfor finner du noen avanserte innstillinger for bloggens utseende. Nybegynnere kan hoppe over dette for nå.

#### Legge til RSS

 *   Installer plugin i rotmappen

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Legg til følgende på slutten av `_config.yml` i rotmappen: (**_Vær oppmerksom på at det må være et mellomrom etter kolon, ellers vil det oppstå en feil!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Åpne `/themes/next/_config.yml` og endre `rss` (husk mellomrom etter kolon)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Korte ned artikler på forsiden
 *   Hver gang du skriver en artikkel, trenger du bare å legge til følgende på stedet du ønsker å korte ned teksten i `.md`-filen:

 ```markdown
     <!--more-->
 ```

 *   Åpne `/themes/next/_config.yml` og sett `scroll_to_more`-alternativet til `false`.

#### Midtstille sitert tekst i artikler
*   Optimaliserer standard Markdown-sitatstil.

```markdown
{% centerquote %}
Sitert tekst
{% endcenterquote %}
```

{% centerquote %}
Sitert tekst
{% endcenterquote %}

#### Endre stil på kodeblokker

*   Rediger `/themes/next/_config.yml` og endre `codeblock`-konfigurasjonen som følger:

```yml
codeblock:
  # Tema for kodeutheving
  # Tilgjengelige verdier: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # Se: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Legg til kopier-knapp på kodeblokk
  copy_button:
    enable: true
    # Vis resultat av tekstkopiering.
    show_result: true
    # Tilgjengelige verdier: default | flat | mac
    style:
```

#### Angi opprettelsestidspunkt for nettstedet

 *   Rediger nettstedets `_config.yml` og legg til feltet `since`.

```bash
since: 2024
```

#### Forbedre lenkestilen i artikler

*   Rediger filen `themes\next\source\css\_common\components\post\post.styl` og legg til følgende CSS-stil på slutten:

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

#### Legge til bakgrunnsbilde på bloggen
*   I `source`-mappen i rotkatalogen, opprett en `_data`-mappe. Opprett en ny fil kalt `styles.styl` inne i `_data`. Åpne `source/_data/styles.styl` og legg til følgende innhold:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Hvorvidt bildet skal gjentas og hvordan, hvis det ikke fyller hele området
    background-attachment:fixed;    // Om bildet skal rulle med siden
    background-size: cover;         // Dekk
    background-position:50% 50%;    // Bildeposisjon
}
```
*   URL-en kan være en bildelenke eller en bildemappe. Du kan navngi bildet `background.jpg` og plassere det i `source/uploads`-mappen.

#### Gjøre blogginnholdets bakgrunn delvis gjennomsiktig
*   Åpne filen `source/_data/styles.styl` som ble redigert i forrige trinn, og legg til følgende innhold under:

```css

// Gjør blogginnholdet gjennomsiktig
// Angi gjennomsiktighet for artikkelinnhold
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


// Angi gjennomsiktighet for sidefelt
.sidebar {
  opacity: 0.9;
}

// Angi gjennomsiktighet for menyfelt
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Angi gjennomsiktighet for søkefelt (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimalisere stilen for inline kodeblokker
*   Åpne filen `source/_data/styles.styl` som ble redigert i forrige trinn, og legg til følgende innhold under:

```css
// Forbedring av stil for `code`-taggen
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Legge til besøksteller nederst på nettsiden

*   Rediger filen

```css
# Finn copyright-taggen, og legg deretter til koden inne i taggen

<div class="copyright">
# ......Her er det allerede noen konfigurasjoner
# Legg til ny kode her
</div>

# Etter å ha lagt til, ser det slik ut:
<div class="copyright">
  # ......Her er det allerede noen konfigurasjoner
  # Legg til ny kode her
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Generer forhåndsvisning av de endrede effektene på nytt. Når du har bekreftet at alt er i orden, publiser:

```bash
hexo g
hexo s
# Publiser når du har bekreftet at alt er i orden
hexo d
```

#### Legge til README.md-fil i depotet

Hvert prosjekt har vanligvis en `README.md`-fil, men når du distribuerer med Hexo til et depot, vil `README.md`-filen i prosjektet bli overskrevet. Du må derfor konfigurere dette for å unngå overskriving.

Legg til en `README.md`-fil i `source`-rotmappen under `Hexo`-katalogen. Endre nettstedets konfigurasjonsfil `_config.yml` og sett verdien for `skip_render`-parameteren til:

```yml
skip_render: README.md
```
Lagre og avslutt. Neste gang du bruker `hexo d`-kommandoen for å distribuere bloggen, vil ikke `README.md`-filen bli gjengitt.

#### Noen nyttige plugins

-   Hexo Filter MathJax: Gjengir matematiske formler
  -   Installer `npm install hexo-filter-mathjax`
  -   Detaljert konfigurasjon: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Antall ord i artikler
  -   Installer `npm install hexo-word-counter`
  -   Detaljert konfigurasjon: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optimaliserer lastetiden for bloggen
  -   Installer `npm install hexo-optimize`
  -   Detaljert konfigurasjon: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Flere plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Sikkerhetskopiering av kildekode

-   Husk å sikkerhetskopiere de lokale kildefilene, spesielt Markdown-filene. Hvis andre konfigurasjoner går tapt, vil du ikke kunne skrive bloggen som normalt og må starte oppsettet fra bunnen av.
-   Det anbefales å bruke samme GitHub-depot for sikkerhetskopiering.
-   Det anbefales å sikkerhetskopiere hver gang du gjør endringer, eller daglig.
-   For mer bruk, se [Git-dokumentasjonen](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) 

```bash
# Legg til bloggdepotets adresse som ble satt opp tidligere
git remote add https://github.com/your-name/your-name.github.io.git

# Legg til og lagre gjeldende endringer, og legg til en kommentar
git add .
git commit -m "Kildekode oppdatert"

# Opprett og bytt til en ny gren
git checkout -b source

# Push alt innhold fra den lokale 'source'-grenen til 'source'-grenen i det eksterne depotet
git push origin source:source
```

### Skrive blogg fra forskjellige datamaskiner
-   Når du skriver blogg fra forskjellige datamaskiner, må du installere grunnleggende programvare, og deretter hente det eksterne GitHub-depotet til din lokale maskin for å oppdatere bloggen.

*   Last ned og installer Node.js ([last ned fra offisiell nettside](https://nodejs.org/en/))
*   Last ned og installer Git ([last ned fra offisiell nettside](https://git-scm.com/downloads))
*   Installer Hexo-rammeverket: Åpne CMD (kommandolinje) og kjør

 ```bash
 npm install -g hexo-cli
```
*   Utfør lokale oppdateringer

```bash
# Klon depotet til lokal maskin
git clone https://github.com/your-name/your-name.github.io.git

# Hvis du allerede har klonet lokalt, må du hente det nyeste greninnholdet før hver bloggoppdatering
git pull origin

# Bytt til riktig gren
git checkout source

# Etter å ha installert alle plugins under Hexo-konfigurasjonen, kan du begynne å oppdatere og redigere blogginnholdet
npm install

# Etter å ha endret innholdet, husk å sikkerhetskopiere hele pakka med en gang
git add .
git commit -m "Bloggoppdatering xxx"
git push origin source:source

# Publiser og push det nyeste blogginnholdet til domenets nettsted
hexo clean
hexo g  # Generer statiske filer
hexo s  # Forhåndsvis bloggen lokalt
hexo d  # Publiser det nyeste blogginnholdet
```

### Oversikt over vanlige kommandoer

 ```bash
hexo g
# eller hexo generate, genererer statiske nettsider basert på kildefilene
hexo d
# eller hexo deploy, publiserer og pusher til GitHub Pages
hexo s
# eller hexo server, for lokal testing
hexo clean
# Tømmer cache for statiske nettsider, deretter genererer hexo d på nytt
