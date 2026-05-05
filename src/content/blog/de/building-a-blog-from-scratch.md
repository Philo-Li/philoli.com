---
title: Hexo Blog von Grund auf einrichten: Eine Kurzanleitung (2024)
date: 2024-04-11 00:25:20
tags: Blog erstellen
categories: Basteleien
---
Hast du die lieblosen Oberflächen vieler Blog-Seiten satt? Nerven dich die unaufhörlichen Benachrichtigungen? Wolltest du schon immer einen eigenen Blog starten, wurdest aber von komplizierten Anleitungen und verwirrendem Code abgeschreckt? Dann bist du hier genau richtig! Dieser Artikel zeigt dir Schritt für Schritt und auf die einfachste Weise, wie du deinen eigenen Blog aufbaust. Alles, was du brauchst, ist ein wenig Geduld, um den Anweisungen zu folgen.

<!--more-->

Hexo ist ein schnelles, schlankes und effizientes Blog-Framework – ein wahrer Segen für Einsteiger! Und da GitHub uns das zusätzliche Anmieten und Einrichten eines Servers erspart, nutzen wir in diesem Leitfaden Hexo und GitHub, um deinen Blog zu erstellen.

Bereits 2018 hatte ich eine [Kurzanleitung zum Blog-Aufbau von Grund auf](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) verfasst. Da sich jedoch durch Plugin-Updates einige Details geändert haben, präsentiere ich hier die überarbeitete 2024er-Version.

### Vorbereitungen
*   Node.js herunterladen und installieren ([auf der offiziellen Website](https://nodejs.org/en/))
*   Git herunterladen und installieren ([auf der offiziellen Website](https://git-scm.com/downloads))

### Lokalen Hexo-Statik-Blog einrichten
*   Hexo-Framework installieren: Öffne die Eingabeaufforderung (CMD) und führe aus:
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Erstelle einen neuen Ordner, z.B. `MyBlog`. Wechsle in diesen Ordner, klicke mit der rechten Maustaste und wähle "Git Bash Here" (oder öffne ein Terminal darin), gib dann ein:

 ```bash
 $ hexo init
 ```

*   Nachdem die Hexo-Vorlage generiert wurde, installiere die npm-Abhängigkeiten mit:

 ```bash
$ npm install
 ```

Ja, der Hauptteil deines Blogs ist damit bereits fertig! Lass uns das Ergebnis ansehen. Führe aus:

```bash
$ hexo server
```

Öffne nun deinen Browser und gib `localhost:4000` ein, um zu sehen, wie dein Blog derzeit aussieht. Freue dich einen Moment, drücke dann `Strg + C`, um mit den nächsten Schritten fortzufahren.

### Personalisierung (Erste Schritte)

#### Theme ändern
*   Lade ein neues Theme herunter (am Beispiel des [NexT Themes](http://theme-next.iissnan.com/)). Führe im Stammverzeichnis aus:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Öffne die Datei `_config.yml` im Stammverzeichnis und ändere das Feld `theme` zu:

 ```bash
theme: next
 ```

*   Erscheinungsbild wählen: Öffne `/themes/next/_config.yml` und suche das Feld `scheme` (verwende `Strg + F` für die Schnellsuche). NexT bietet drei verschiedene Erscheinungsbilder an. Wähle das, das dir am besten gefällt, und entferne das `#`-Zeichen davor (die beiden Hauptdateien, die du später bearbeiten wirst, sind diese: die _Website-Konfigurationsdatei_ und die _Theme-Konfigurationsdatei_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Um das Ergebnis zu sehen, führe die folgenden Befehle aus (diesen Schritt kannst du jederzeit wiederholen, wenn du Änderungen überprüfen möchtest):

```bash
hexo g # oder hexo generate
hexo server
```

#### Website-Konfiguration
*   Öffne die Website-Konfigurationsdatei `_config.yml` im Stammverzeichnis mit einem Editor (unter Windows nicht mit Notepad bearbeiten, da chinesische Titel sonst als Kauderwelsch erscheinen können). Bearbeite die `Site`-Felder. Beachte, dass nach dem Doppelpunkt ein Leerzeichen stehen muss:

 ```bash
 # Site
 title: Unbekannte Welt            // Blog-Name
 subtitle:
 description:  Do something cool // Eine Signaturzeile
 author: LulalaP                 // Autor
 language: zh-Hans               // Website-Sprache
 timezone:
 ```

### Avatar in der Seitenleiste einrichten
*   Erstelle im Verzeichnis `/source` einen neuen Ordner namens `uploads` und lege dein Avatar-Bild (z.B. `avatar.jpg`) dort ab.

*   Öffne `/themes/next/_config.yml`, suche das Feld `avatar` und ändere es zu:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Blogseiten vervollständigen

#### Menü hinzufügen
*   Öffne `/themes/next/_config.yml`. Entferne einfach die Kommentarzeichen vor den Menüpunkten im `menu`-Feld, die du hinzufügen möchtest. Bei Bedarf kannst du auch andere Menüpunkte hinzufügen (achte auf die Einrückung der Felder):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategorieseite erstellen
*   Erstelle eine neue Seite namens `categories` mit dem Befehl:

 ```bash
 $ hexo new page categories
 ```

*   Bearbeite die neu erstellte Seite `/source/categories/index.md`. Setze den Seitentyp auf `categories`. Das Theme zeigt dann automatisch alle Kategorien auf dieser Seite an (achte darauf, das Leerzeichen nach dem Doppelpunkt beizubehalten).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Tag-Cloud-Seite erstellen
*   Erstelle eine neue Seite namens `tags` mit dem Befehl:

 ```bash
 $ hexo new page "tags"
 ```

*   Bearbeite die neu erstellte Seite und setze den Seitentyp auf `tags`. Das Theme zeigt dann automatisch eine Tag-Cloud auf dieser Seite an.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "Über mich"-Seite erstellen
 * Erstelle eine neue `about`-Seite:

 ```bash
 $ hexo new page "about"
 ```

 * Bearbeite die neu erstellte Seite. Du kannst den Inhalt im Markdown-Format in den Hauptteil schreiben.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Soziale Links in der Seitenleiste einrichten
*   Bearbeite die `_config.yml` deiner Website. Suche das Feld `social` und füge dort die Namen und Adressen deiner sozialen Netzwerke hinzu. Das Schlüssel-Wert-Format ist `Anzeigename: Link-Adresse`, zum Beispiel:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Öffne `/themes/next/_config.yml`. Füge unter dem Feld `social_icons` die Namen der sozialen Netzwerke (achte auf Groß- und Kleinschreibung) und die entsprechenden [Icons](http://fontawesome.io/icons/) hinzu. Die Option `enable` steuert, ob die Icons angezeigt werden. Du kannst sie auf `false` setzen, um die Icons auszublenden. Zum Beispiel:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Blog mit GitHub verbinden
*   **GitHub-Konto registrieren:** Falls du noch kein GitHub-Konto hast, musst du zuerst eines registrieren.

*   Erstelle auf GitHub ein Repository mit dem Namen `XXX.github.io`, wobei XXX dein GitHub-Benutzername ist.

*   Öffne die Konfigurationsdatei `_config.yml` im lokalen `MyBlog`-Ordner und setze den `type` auf `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

*   Führe aus:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
*   Generiere die statischen Dateien lokal und pushe sie zu GitHub, indem du ausführst:

```bash
hexo g
hexo d
```

Öffne nun deinen Browser und besuche `http://your-name.github.io`. Herzlichen Glückwunsch, dein Blog ist nun fertig eingerichtet!

### Domain verknüpfen
Dein Blog ist jetzt vollständig eingerichtet und über die GitHub-Domain erreichbar. Um ihn noch perfekter zu machen, kannst du ihn jetzt mit einer eigenen, kürzeren Domain verbinden.

#### Domainkauf
*   Kaufe eine Domain. Ich empfehle [namesilo.com](https://www.namesilo.com/), einen etablierten Domain-Anbieter mit fairen Preisen und zuverlässigem Service. Wenn du meinen Empfehlungscode `PhiloArt.io` verwendest, erhältst du zusätzlich einen Rabatt von 1 US-Dollar, gültig bis zum 31.12.2025.

### Domain-Auflösung
*   DNS-Einstellungen des Domain-Anbieters

*   Füge 4 A-Records hinzu, die auf GitHub Pages verweisen:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Füge einen `CNAME`-Record hinzu, wobei `name` auf `www` und `content` auf `your-name.github.io` (deine GitHub Pages-Adresse) zeigt:

 > CNAME —> philo-li.github.io

*   Detailliertere Einstellungen findest du in den [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   CNAME-Datei im Blog-Verzeichnis hinzufügen

    Nachdem du die Domain-Auflösung konfiguriert hast, navigiere in dein Blog-Verzeichnis. Erstelle im `source`-Ordner eine neue Datei namens `CNAME` (beachte die Großschreibung, keine Dateiendung). Öffne sie mit einem Texteditor und trage deine gekaufte Domain ein, z.B.: `www.philoli.com`

*   Führe aus:

```bash
hexo g
hexo d
```

Öffne nun deinen Browser, gib deine Domain ein und drücke Enter. Herzlichen Glückwunsch, du hast jetzt einen eigenen Blog mit einer unabhängigen Domain!

### Neue Artikel veröffentlichen
*   Führe im Stammverzeichnis deines Blogs aus: `hexo new “Meine erste Artikel”`. Dadurch wird eine `.md`-Datei im Ordner `source/_posts` erstellt.

*   Bearbeite diese Datei und ändere die anfänglichen Felder wie folgt:

 ```bash
 title Titel des Artikels
 date Erstellungsdatum (Datum der Dateierstellung)
 updated Änderungsdatum (Datum der letzten Dateiänderung)
 comments Kommentare aktivieren true
 tags Tags
 categories Kategorien
 permalink Name in der URL (Dateiname)
 ```

*   Verfasse den Hauptteil des Artikels (folge den Markdown-Regeln).

*   Generiere die statischen Dateien lokal und pushe sie zu GitHub, indem du ausführst:

```bash
hexo g
hexo d
```

### Personalisierung (Fortgeschritten)
Hier sind einige erweiterte Einstellungen zur Blog-Gestaltung. Anfänger können diesen Abschnitt zunächst überspringen.

#### RSS hinzufügen
 * Installiere das Plugin im Stammverzeichnis:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Füge am Ende der `_config.yml` im Stammverzeichnis Folgendes hinzu: (**_Achte darauf, nach dem Doppelpunkt ein Leerzeichen einzufügen, sonst kommt es zu einem Fehler!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Öffne `/themes/next/_config.yml` und ändere `rss` (achte darauf, nach dem Doppelpunkt ein Leerzeichen einzufügen):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Artikel auf der Startseite kürzen
 * Wenn du einen Artikel schreibst, füge einfach `<!--more-->` an der Stelle in der `.md`-Datei ein, an der der Artikel gekürzt werden soll:

 ```markdown
     <!--more-->
 ```

 * Öffne `/themes/next/_config.yml` und setze die Option `scroll_to_more` auf `false`.

#### Zitate im Artikel zentrieren
* Optimiert den Standard-Stil von Markdown-Zitaten:

```markdown
{% centerquote %}
Zitattext
{% endcenterquote %}
```

{% centerquote %}
Zitattext
{% endcenterquote %}

#### Codeblock-Stil ändern
* Bearbeite `/themes/next/_config.yml` und ändere die `codeblock`-Konfiguration wie folgt:

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

#### Website-Erstellungszeit festlegen
 * Bearbeite die `_config.yml` der Website und füge das Feld `since` hinzu:

```bash
since: 2024
```

#### Artikel-Link-Stil verbessern
* Bearbeite die Datei `themes\next\source\css\_common\components\post\post.styl` und füge am Ende die folgenden CSS-Stile hinzu:

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

#### Hintergrundbild für den Blog hinzufügen
* Erstelle im `source`-Ordner des Stammverzeichnisses einen Ordner namens `_data`. Erstelle eine neue Datei `styles.styl` darin. Öffne die neu erstellte Datei `source/_data/styles.styl` und füge den folgenden Inhalt hinzu:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Legt fest, ob und wie das Bild wiederholt wird, wenn es den Bereich nicht ausfüllt
    background-attachment:fixed;    // Legt fest, ob das Bild beim Scrollen mitläuft
    background-size: cover;         // Deckt den gesamten Bereich ab
    background-position:50% 50%;    // Bildposition
}
```
* Die URL kann ein Bildlink oder ein Bildpfad sein. Du kannst das Bild `background.jpg` nennen und es in den Ordner `source/uploads` legen.

#### Hintergrund des Blog-Inhalts halbtransparent machen
* Öffne die im vorherigen Schritt bearbeitete Datei `source/_data/styles.styl` und füge den folgenden Inhalt hinzu:

```css

// Transparenz des Blog-Inhalts
// Einstellung der Transparenz für den Artikelinhalt
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


// Transparenz der Seitenleiste
.sidebar {
  opacity: 0.9;
}

// Transparenz der Menüleiste
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Transparenz des Suchfelds (local-search)
.popup {
  opacity: 0.9;
}
```

#### Stil von Inline-Codeblöcken optimieren
* Öffne die im vorherigen Schritt bearbeitete Datei `source/_data/styles.styl` und füge den folgenden Inhalt hinzu:

```css
// Verschönerung von Code-Tags
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Besucherzähler am unteren Rand der Website hinzufügen
* Bearbeite die Datei:

```css
# Suche den copyright-Tag und füge den Code innerhalb des Tags hinzu

<div class="copyright">
# ...... hier sind bereits einige Konfigurationen
# Füge hier den neuen Code hinzu
</div>

# Nach dem Hinzufügen sieht es so aus:
<div class="copyright">
  # ...... hier sind bereits einige Konfigurationen
  # Füge hier den neuen Code hinzu
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* Generiere die geänderten Effekte neu, um sie in der Vorschau anzusehen. Wenn alles in Ordnung ist, veröffentliche sie:

```bash
hexo g
hexo s
# Wenn alles in Ordnung ist, veröffentlichen
hexo d
```

#### README.md-Datei zum Repository hinzufügen
Jedes Projekt enthält normalerweise eine `README.md`-Datei. Wenn Hexo jedoch in einem Repository bereitgestellt wird, wird die `README.md`-Datei im Projekt überschrieben. Daher musst du die Konfigurationsdatei so einstellen, dass dies verhindert wird.
Füge im `source`-Stammverzeichnis des `Hexo`-Ordners eine `README.md`-Datei hinzu. Bearbeite die Website-Konfigurationsdatei `_config.yml` und setze den Wert des `skip_render`-Parameters auf:

```yml
skip_render: README.md
```
Speichere und beende. Wenn du den Blog das nächste Mal mit dem Befehl `hexo d` bereitstellst, wird die Datei `README.md` nicht gerendert.

#### Einige nützliche Plugins
- Hexo Filter MathJax: Zum Rendern von mathematischen Formeln
  - Installation: `npm install hexo-filter-mathjax`
  - Detaillierte Konfiguration: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Zählt die Wörter in Artikeln
  - Installation: `npm install hexo-word-counter`
  - Detaillierte Konfiguration: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Optimiert die Ladezeit des Blogs
  - Installation: `npm install hexo-optimize`
  - Detaillierte Konfiguration: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Weitere Plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Quelldateien sichern
- Denke unbedingt daran, deine lokalen Quelldateien, insbesondere die Markdown-Dateien, zu sichern. Gehen andere Konfigurationen verloren, kannst du deinen Blog nicht mehr normal schreiben und müsstest alles von Grund auf neu einrichten.
- Es wird empfohlen, dasselbe GitHub-Repository für Backups zu verwenden.
- Es ist ratsam, nach jeder größeren Änderung oder täglich ein Backup zu erstellen.
- Weitere Informationen findest du in der [Git-Dokumentation](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects). 

```bash
# Die zuvor eingerichtete Blog-Repository-Adresse hinzufügen
git remote add https://github.com/your-name/your-name.github.io.git

# Aktuelle Änderungen hinzufügen, speichern und mit einer Nachricht versehen
git add .
git commit -m "Quelldateien aktualisiert"

# Neuen Branch erstellen und wechseln
git checkout -b source

# Den gesamten Inhalt des lokalen "source"-Branches in den "source"-Branch des Remote-Repositories pushen
git push origin source:source
```

### Blog von verschiedenen Computern aus schreiben
- Wenn du deinen Blog von verschiedenen Computern aus bearbeiten möchtest, musst du die grundlegende Software installieren und dann das Remote-GitHub-Backup-Repository lokal ziehen, um den Blog zu aktualisieren.

*   Node.js herunterladen und installieren ([auf der offiziellen Website](https://nodejs.org/en/))
*   Git herunterladen und installieren ([auf der offiziellen Website](https://git-scm.com/downloads))
*   Hexo-Framework installieren: Öffne die Eingabeaufforderung (CMD) und führe aus:

 ```bash
 npm install -g hexo-cli
```
*   Lokales Update durchführen:

```bash
# Repository lokal klonen
git clone https://github.com/your-name/your-name.github.io.git

# Wenn bereits lokal geklont, musst du vor jeder Blog-Aktualisierung den neuesten Branch-Inhalt ziehen
git pull origin

# Zum entsprechenden Branch wechseln
git checkout source

# Alle Plugins unter der Hexo-Konfiguration installieren, dann kannst du mit der Aktualisierung und Bearbeitung des Blog-Inhalts beginnen
npm install

# Nach Änderungen immer zeitnah sichern (Komplettpaket)
git add .
git commit -m "Blog-Update xxx"
git push origin source:source

# Neuesten Blog-Inhalt auf die Domain-Website veröffentlichen
hexo clean
hexo g  # Statische Dateien generieren
hexo s  # Blog-Vorschau lokal anzeigen
hexo d  # Neuesten Blog-Inhalt veröffentlichen
```

### Zusammenfassung der gängigsten Befehle

 ```bash
hexo g
# oder hexo generate, generiert statische Webseiten aus den Quelldateien
hexo d
# oder hexo deploy, veröffentlicht und pusht auf GitHub Pages
hexo s
# oder hexo server, lokale Bereitstellung zum Testen
hexo clean
# Leert den Cache der statischen Webseiten, danach hexo d zum Neugenerieren
