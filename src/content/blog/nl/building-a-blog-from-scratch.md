---
title: Korte handleiding voor het opzetten van een Hexo blog vanaf nul (editie 2024)
date: 2024-04-11 00:25:20
tags: Blog opzetten
categories: Dagelijkse bezigheden
---
Ben je de lelijke interfaces van veel blogwebsites zat? Heb je genoeg van de eindeloze meldingen? Wil je al heel lang je eigen blog opzetten, maar word je afgeschrikt door ingewikkelde handleidingen en hoofdpijnveroorzakende code? Dan heb ik goed nieuws voor je! Dit artikel leert je stap voor stap, op de meest eenvoudige manier, hoe je je eigen blog kunt bouwen. Het enige wat je nodig hebt, is een beetje geduld en de bereidheid om de stappen te volgen.

<!--more-->

Hexo is een snel, eenvoudig en efficiënt blogframework, wat het een uitkomst maakt voor beginners. En met GitHub besparen we onszelf de moeite van het huren en configureren van een aparte server. Daarom zullen we in dit artikel Hexo en GitHub gebruiken om je blog op te zetten.

In 2018 schreef ik al een keer een [korte handleiding voor het opzetten van een blog vanaf nul](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Vanwege updates van plugins zijn er echter enkele details die gewijzigd moeten worden. Daarom lanceer ik nu deze bijgewerkte korte handleiding, de 2024-editie.

### Voorbereiding

*   Download en installeer node.js ([download en installeer via de officiële website](https://nodejs.org/en/))
*   Download en installeer git ([download en installeer via de officiële website](https://git-scm.com/downloads))

### Hexo statische blog lokaal opzetten

*   Installeer het Hexo framework: Open cmd en voer uit:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Maak een nieuwe map aan, bijvoorbeeld MyBlog. Navigeer naar deze map, klik met de rechtermuisknop en voer git uit, typ vervolgens:

 ```bash
 $ hexo init
 ```

*   Nadat de Hexo-sjabloon is gegenereerd, installeer npm en voer uit:

 ```bash
$ npm install
 ```

Dat klopt, het grootste deel van je blog is nu al klaar! Laten we het resultaat bekijken. Voer uit:

```bash
$ hexo server
```

Open nu je browser en typ `localhost:4000` om te zien hoe je blog er momenteel uitziet. Geniet even van dit moment, druk dan op Ctrl + C om verder te gaan met de volgende stappen.

### Personalisatie (initieel)

#### Thema wijzigen

*   Download een nieuw thema (bijvoorbeeld met het [NexT thema](http://theme-next.iissnan.com/)), voer uit in de rootmap:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Open `_config.yml` in de rootmap en wijzig het veld `theme` naar:

 ```bash
theme: next
 ```

*   Kies het uiterlijk: Open `/themes/next/_config.yml` en zoek het veld `scheme` (je kunt snel zoeken met Ctrl + F). NexT biedt drie verschillende uiterlijken; kies degene die je het mooist vindt en verwijder het #-teken ervoor (deze twee bestanden: het _siteconfiguratiebestand_ en het _themaconfiguratiebestand_ zullen we later voornamelijk aanpassen).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Om het resultaat te bekijken, kun je de volgende commando's uitvoeren (deze stap kun je herhalen telkens als je het effect wilt zien):

```bash
hexo g #of hexo generate
hexo server
```

#### Siteconfiguratie

*   Open het siteconfiguratiebestand `_config.yml` in de rootmap met een teksteditor (gebruik geen Kladblok in Windows, want dan kunnen Chinese tekens verkeerd worden weergegeven). Wijzig het veld `Site`. Let op: na de dubbele punt moet een spatie staan:

 ```bash
 # Site
 title: 未知的世界                //Blognaam
 subtitle:
 description:  Do something cool //Een motto
 author: LulalaP                 //Auteur
 language: zh-Hans               //Sitetaal
 timezone:
 ```

### Profielfoto zijbalk instellen

*   Maak in de map `/source` een nieuwe map aan met de naam `uploads`. Plaats je profielfoto (bijv. avatar.jpg) in deze map.

*   Open `/themes/next/_config.yml`, zoek het veld `avatar` en wijzig het in:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Blogpagina's voltooien

#### Menu toevoegen
*   Open `/themes/next/_config.yml` en verwijder de commentaartekens (#) voor de menu-items die je wilt toevoegen in het veld `menu`. Als je andere menu-items wilt toevoegen, kun je die naar wens toevoegen (let op de inspringing van de velden):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Categorieën-pagina maken

*   Maak een nieuwe pagina aan met de naam `categories` met het volgende commando:

 ```bash
 $ hexo new page categories
 ```

*   Bewerk de zojuist aangemaakte pagina `/source/categories/index.md`. Stel het paginatype in op `categories`; het thema zal dan automatisch alle categorieën op deze pagina weergeven (let op dat je de spatie na de dubbele punt behoudt).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Tagwolk-pagina maken

*   Maak een nieuwe pagina aan met de naam `tags` met het volgende commando:

 ```bash
 $ hexo new page "tags"
 ```

*   Bewerk de zojuist aangemaakte pagina. Stel het paginatype in op `tags`; het thema zal dan automatisch een tagwolk op deze pagina weergeven.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "Over mij"-pagina maken

 *   Maak een nieuwe 'over mij'-pagina aan:

 ```bash
 $ hexo new page "about"
 ```

 *   Bewerk de zojuist aangemaakte pagina. Je kunt de inhoud van de pagina in Markdown-formaat schrijven.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Sociale links in de zijbalk instellen

*   Bewerk het siteconfiguratiebestand `_config.yml`, zoek het veld `social` en voeg de namen en adressen van je sociale media toe. Het sleutel-waardepaar formaat is `Weergavenaam: linkadres`, bijvoorbeeld:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Open `/themes/next/_config.yml` en voeg onder het veld `social_icons` de namen van de sociale media (let op hoofdletters) en de (pictogrammen)[http://fontawesome.io/icons/] toe. De `enable` optie bepaalt of pictogrammen worden weergegeven; je kunt deze op `false` zetten om de pictogrammen te verwijderen. Bijvoorbeeld:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Blog koppelen aan GitHub

 *   Registreer een GitHub-account: Als je nog geen GitHub-account hebt, moet je er eerst een aanmaken.

 *   Maak op GitHub een project aan met de naam `XXX.github.io`, waarbij XXX je GitHub-gebruikersnaam is.

 *   Open het `_config.yml`-configuratiebestand in je lokale `MyBlog`-map en stel het veld `type` in op `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Voer uit:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Genereer lokaal statische bestanden en push deze naar GitHub, voer uit:

```bash
hexo g
hexo d
```

Open nu je browser en bezoek `http://your-name.github.io`. Gefeliciteerd, je blog is nu voltooid!

### Domeinnaam koppelen

Tot zover is de blog volledig opgezet en toegankelijk via het GitHub-domein. Het zou helemaal perfect zijn om een kortere domeinnaam aan deze blog te koppelen.

#### Domein kopen

*   Koop een domeinnaam. Ik raad aan om deze te kopen bij [namesilo.com](https://www.namesilo.com/), een gevestigde domeinprovider met voordelige prijzen en betrouwbare service. Als je mijn aanbevelingscode `PhiloArt.io` gebruikt, krijg je bovendien $1 korting, geldig tot 31-12-2025.

### Domeinnaamresolutie

*   DNS-instellingen bij de domeinprovider

*   Voeg 4 A-records toe, die naar GitHub Pages verwijzen:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Voeg een `CNAME`-record toe, met `name` als `www` en `content` als `your-name.github.io` (verwijzend naar je GitHub Pages-adres):

 > CNAME —> philo-li.github.io

*   Voor meer gedetailleerde instellingen, zie de [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   CNAME-bestand toevoegen aan de blogmap

 Nadat je de domeinnaamresolutie hebt geconfigureerd, ga je naar de blogmap. Maak in de `source` map een nieuw bestand aan met de naam `CNAME` (let op: hoofdletters, geen extensie). Open het met Kladblok of een andere teksteditor en schrijf je gekochte domeinnaam erin, bijv. `www.philoli.com`.

*   Voer uit:

```bash
hexo g
hexo d
```

Open nu je browser, typ je domeinnaam in en druk op Enter. Gefeliciteerd, je hebt nu een blog met een eigen, onafhankelijke domeinnaam!

### Nieuw artikel publiceren

*   Voer in de rootmap van de blog uit: `hexo new “Mijn eerste artikel”`. Dit genereert een `.md`-bestand in de map `source/_posts`.

*   Bewerk dit bestand en wijzig de beginvelden als volgt:

 ```bash
 title Titel van het artikel
 date Creatiedatum (aanmaakdatum van het bestand)
 updated Wijzigingsdatum (datum van laatste wijziging van het bestand)
 comments Reacties inschakelen true
 tags Tags
 categories Categorieën
 permalink Naam in de URL (bestandsnaam)
 ```

*   Schrijf de hoofdtekst (volgens de Markdown-regels).

*   Genereer lokaal statische bestanden en push deze naar GitHub, voer uit:

```bash
hexo g
hexo d
```

### Personalisatie (geavanceerd)

Hieronder volgen enkele geavanceerde instellingen voor het personaliseren van je blogstijl. Beginners kunnen deze sectie overslaan.

#### RSS toevoegen

 *   Installeer de plugin in de rootmap:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Voeg toe aan het einde van `_config.yml` in de rootmap: (**_Let op: na de dubbele punt moet een spatie staan, anders krijg je een foutmelding!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Open `/themes/next/_config.yml` en wijzig `rss` (let op: na de dubbele punt moet een spatie staan):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Artikelafbreking op de homepage
 *   Telkens wanneer je een artikel schrijft, hoef je alleen `<!--more-->` toe te voegen op de plek waar je de tekst wilt afbreken in het .md-bestand.

 ```markdown
     <!--more-->
 ```

 *   Open `/themes/next/_config.yml` en wijzig de optie `scroll_to_more` naar `false`.

#### Gecentreerde quote tekst in artikelen
*   De standaard opmaak van Markdown-citaten is geoptimaliseerd.

```markdown
{% centerquote %}
Quote tekst
{% endcenterquote %}
```

{% centerquote %}
Quote tekst
{% endcenterquote %}

#### Codeblokstijl aanpassen

*   Bewerk `/themes/next/_config.yml` en wijzig de `codeblock`-configuratie als volgt:

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

#### Site-aanmaakdatum instellen

 *   Bewerk het siteconfiguratiebestand `_config.yml` en voeg het veld `since` toe.

```bash
since: 2024
```

#### Artikellinkstijl verbeteren

*   Bewerk en wijzig het bestand `themes\next\source\css\_common\components\post\post.styl` en voeg de volgende CSS-stijl toe aan het einde:

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

#### Achtergrondafbeelding toevoegen aan de blog
*   Maak in de `source` map van de rootdirectory een `_data` map aan. Maak daarin een nieuw `styles.styl`-bestand. Open dit nieuwe bestand `source/_data/styles.styl` en voeg de volgende inhoud toe:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Herhaling en herhalingswijze wanneer de afbeelding niet het hele oppervlak vult
    background-attachment:fixed;    //Schuift de afbeelding mee met de scrollbeweging
    background-size: cover;         //Bedekken
    background-position:50% 50%;    //Afbeeldingspositie
}
```
*   De URL kan een afbeeldingslink of een afbeeldingsdirectory zijn. Je kunt de afbeelding `background.jpg` noemen en deze in de map `source/uploads` plaatsen.

#### Bloginhoud achtergrond semi-transparant maken
*   Open het bestand `source/_data/styles.styl` dat je in de vorige stap hebt bewerkt en voeg de volgende inhoud toe:

```css

//Bloginhoud transparant maken
//Transparantie-instellingen voor artikelinhoud
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


//Transparantie-instellingen voor de zijbalk
.sidebar {
  opacity: 0.9;
}

//Transparantie-instellingen voor de menubalk
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Transparantie-instellingen voor het zoekvak (local-search)
.popup {
  opacity: 0.9;
}
```

#### Inline codeblokstijl optimaliseren
*   Open het bestand `source/_data/styles.styl` dat je in de vorige stap hebt bewerkt en voeg de volgende inhoud toe:

```css
// Verfraaiing van Code-tags
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Aantal bezoekers onderaan de website toevoegen

*   Bewerk en wijzig het bestand

```css
# Zoek de copyright-tagbalk en voeg de code binnen de tag toe.

<div class="copyright">
# ......Hier zijn al enkele configuraties
# Voeg hier nieuwe code toe
</div>

# Na toevoeging ziet het er zo uit:
<div class="copyright">
  # ......Hier zijn al enkele configuraties
  # Voeg hier nieuwe code toe
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Genereer opnieuw om de gewijzigde effecten te bekijken, publiceer zodra je zeker weet dat alles in orde is:

```bash
hexo g
hexo s
# Publiceer zodra je zeker weet dat alles in orde is
hexo d
```

#### README.md-bestand toevoegen aan de repository

Elk project heeft meestal een `README.md`-bestand, maar wanneer je Hexo gebruikt om naar een repository te deployen, wordt het `README.md`-bestand in het project overschreven. Daarom moet je het configuratiebestand instellen om overschrijven te voorkomen.

Voeg een `README.md`-bestand toe in de `source` rootmap van je Hexo-directory en wijzig in het siteconfiguratiebestand `_config.yml` de waarde van de `skip_render` parameter naar:

```yml
skip_render: README.md
```
Opslaan en afsluiten volstaat. De volgende keer dat je de blog deployt met het `hexo d`-commando, zal het `README.md`-bestand niet langer gerenderd worden.

#### Enkele veelgebruikte plugins

- Hexo Filter MathJax: Wiskundige formules renderen
  - Installeren: `npm install hexo-filter-mathjax`
  - Gedetailleerde configuratie: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Woorden tellen in artikelen
  - Installeren: `npm install hexo-word-counter`
  - Gedetailleerde configuratie: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Bloglaadsnelheid optimaliseren
  - Installeren: `npm install hexo-optimize`
  - Gedetailleerde configuratie: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Meer plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Bronbestanden back-uppen

-   Vergeet niet je lokale bronbestanden, vooral de Markdown-bestanden, goed te back-uppen. Als andere configuraties verloren gaan, kun je niet normaal bloggen en moet je alles opnieuw instellen.
-   Het wordt aanbevolen om dezelfde GitHub-repository te gebruiken voor back-ups.
-   Het wordt aanbevolen om bij elke wijziging een back-up te maken, of dagelijks een back-up te maken.
-   Voor meer gebruiksmogelijkheden, zie de [Git documentatie](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Voeg het eerder ingestelde blog repository-adres toe
git remote add https://github.com/your-name/your-name.github.io.git

# Voeg de huidige wijzigingen toe, sla ze op en noteer een opmerking
git add .
git commit -m "Bronbestanden bijgewerkt"

# Maak een nieuwe branch aan en schakel ernaar over
git checkout -b source

# Push de volledige inhoud van de lokale source-branch naar de source-branch van de externe repository
git push origin source:source
```

### Bloggen op verschillende computers
-   Wanneer je op verschillende computers blogt, moet je eerst de basissoftware installeren, vervolgens de externe GitHub-back-uprepository lokaal ophalen en dan je blog bijwerken.

*   Download en installeer node.js ([download en installeer via de officiële website](https://nodejs.org/en/))
*   Download en installeer git ([download en installeer via de officiële website](https://git-scm.com/downloads))
*   Installeer het Hexo framework: Open cmd en voer uit:

 ```bash
 npm install -g hexo-cli
```
*   Lokale update uitvoeren:

```bash
# Kloon de repository naar je lokale machine
git clone https://github.com/your-name/your-name.github.io.git

# Als de repository al lokaal is gekloond, moet je vóór elke blogupdate de nieuwste branchinhoud ophalen
git pull origin

# Schakel over naar de betreffende branch
git checkout source

# Nadat alle plugins onder de Hexo-configuratie zijn geïnstalleerd, kun je beginnen met het bijwerken en bewerken van de bloginhoud
npm install

# Vergeet niet om na het wijzigen van de inhoud onmiddellijk de volledige back-upprocedure te volgen
git add .
git commit -m "Blog bijgewerkt xxx"
git push origin source:source

# Publiceer en push de nieuwste bloginhoud naar de domeinwebsite
hexo clean
hexo g  # Genereer statische bestanden
hexo s  # Lokaal voorbeeld van blogeffect bekijken
hexo d  # Publiceer de nieuwste bloginhoud
```

### Overzicht van veelgebruikte commando's

 ```bash
hexo g
#of hexo generate, genereer statische webpagina's op basis van bronbestanden
hexo d
#of hexo deploy, publiceer en push naar GitHub Pages
hexo s
#of hexo server, lokaal deployen en testen
hexo clean
# Leeg de cache van statische webpagina's, en genereer daarna opnieuw met hexo d
