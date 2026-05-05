---
title: Guida rapida per creare un blog Hexo da zero (edizione 2024)
date: 2024-04-11 00:25:20
tags: Creazione blog
categories: Esperimenti
---
Sei stanco delle interfacce anonime e poco curate dei siti di blog? Sei inondato da notifiche e pubblicità infinite? Hai sempre desiderato creare un blog tutto tuo, ma ti sei fermato di fronte a tutorial complessi e a una serie di codici che ti fanno venire il mal di testa? Allora congratulazioni, questo articolo è qui per guidarti passo dopo passo, nel modo più semplice possibile, nella creazione del tuo blog personale. Ti servirà solo un po' di pazienza per seguire ogni istruzione.

<!--more-->

Hexo, un framework per blog veloce, pulito ed efficiente, è una manna dal cielo per i principianti. E la bellezza di GitHub è che ci evita il fastidio di noleggiare e configurare un server a parte. Per questo, in questa guida, useremo Hexo e GitHub per costruire il tuo blog.

Nel 2018 avevo già scritto una [guida rapida per creare un blog da zero](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Dato che alcuni plugin sono stati aggiornati e ci sono dettagli da modificare, ho deciso di rilanciare la versione 2024 di questa guida.

### Preparazione

*   Scarica e installa Node.js ([scarica e installa dal sito ufficiale](https://nodejs.org/en/))
*   Scarica e installa Git ([scarica e installa dal sito ufficiale](https://git-scm.com/downloads))

### Configurazione locale del blog statico Hexo

*   Installa il framework Hexo: Apri il terminale (o CMD) ed esegui:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Crea una nuova cartella, ad esempio `MyBlog`. Entra al suo interno, clicca con il tasto destro ed esegui Git Bash qui (o apri il terminale e naviga fino alla cartella), quindi digita:

 ```bash
 $ hexo init
 ```

*   Dopo aver generato il template Hexo, installa le dipendenze npm ed esegui:

 ```bash
 $ npm install
 ```

Esatto, il cuore del tuo blog è già pronto! Vediamo che aspetto ha. Esegui:

```bash
$ hexo server
```

Ora apri il browser, digita `localhost:4000` e potrai vedere il tuo blog in anteprima. Fai un piccolo festeggiamento, poi premi Ctrl + C per continuare con i passaggi successivi.

### Personalizzazione (iniziale)

#### Cambiare tema

*   Scarica un nuovo tema (prendiamo come esempio il [tema NexT](http://theme-next.iissnan.com/)). Nella directory principale del tuo blog, esegui:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Apri il file `_config.yml` nella directory principale e modifica il campo `theme` in:

 ```bash
theme: next
 ```

*   **Scegli l'aspetto**: Apri `/themes/next/_config.yml`, trova il campo `scheme` (puoi usare Ctrl + F per cercarlo rapidamente). NexT offre tre diversi aspetti; scegli quello che preferisci e rimuovi il `#` davanti (i due file principali che modificherai in seguito saranno il *file di configurazione del sito* e il *file di configurazione del tema*).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Per visualizzare l'effetto, esegui i seguenti comandi (puoi ripetere questo passaggio ogni volta che vuoi vedere le modifiche):

```bash
hexo g # o hexo generate
hexo server
```

#### Configurazione del sito

*   Apri il file di configurazione del sito `_config.yml` nella directory principale con un editor di testo (su Windows, non usare Blocco Note, i caratteri cinesi potrebbero apparire illeggibili). Modifica i campi sotto `Site`. **Attenzione**: assicurati che ci sia uno spazio dopo i due punti:

 ```bash
 # Site
 title: Il mio mondo sconosciuto // Nome del blog
 subtitle:
 description:  Do something cool // Una firma/slogan
 author: LulalaP                 // Autore
 language: zh-Hans               // Lingua del sito
 timezone:
 ```

### Impostare l'avatar nella barra laterale

*   Crea una nuova cartella chiamata `uploads` all'interno di `/source` e inserisci l'immagine del profilo (es: `avatar.jpg`) al suo interno.

*   Apri `/themes/next/_config.yml`, trova il campo `avatar` e modificalo in:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Migliorare le pagine del blog

#### Aggiungere menu

*   Apri `/themes/next/_config.yml` e rimuovi il commento (`#`) davanti alle voci di menu che vuoi aggiungere nel campo `menu`. Se desideri aggiungere altre voci, puoi farlo secondo necessità (fai attenzione all'indentazione):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Creare la pagina delle categorie

*   Crea una nuova pagina chiamata `categories` con il seguente comando:

 ```bash
 $ hexo new page categories
 ```

*   Modifica la pagina appena creata `/source/categories/index.md`, impostando il tipo di pagina su `categories`. Il tema visualizzerà automaticamente tutte le categorie per questa pagina (ricorda di lasciare uno spazio dopo i due punti).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Creare l'interfaccia della nuvola di tag

*   Crea una nuova pagina chiamata `tags` con il seguente comando:

 ```bash
 $ hexo new page "tags"
 ```

*   Modifica la pagina appena creata, impostando il tipo di pagina su `tags`. Il tema visualizzerà automaticamente la nuvola di tag per questa pagina.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Creare la pagina "Chi sono"

*   Crea una pagina "about":

 ```bash
 $ hexo new page "about"
 ```

*   Modifica la pagina appena creata e scrivi le tue informazioni nel corpo del testo usando il formato Markdown.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Impostare i link social nella barra laterale

*   Modifica il file `_config.yml` del sito, trova il campo `social` e aggiungi il nome e l'indirizzo del tuo social network. Il formato chiave-valore è `Nome visualizzato: Indirizzo del link`, ad esempio:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Apri `/themes/next/_config.yml`, e sotto il campo `social_icons` aggiungi il nome del social network (fai attenzione alla distinzione tra maiuscole e minuscole) e l'[icona corrispondente](http://fontawesome.io/icons/). L'opzione `enable` controlla se mostrare l'icona; puoi impostarla su `false` per rimuoverla. Ad esempio:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Collegare il blog a GitHub

*   **Registra un account GitHub**: Se non ne hai ancora uno, dovrai prima registrarti.

*   Su GitHub, crea un repository chiamato `XXX.github.io`, dove XXX è il tuo nome utente GitHub.

*   Apri il file di configurazione `_config.yml` all'interno della cartella del tuo progetto `MyBlog` locale e imposta il `type` su `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

*   Esegui:

 ```bash
 npm install hexo-deployer-git --save
 ```
*   Genera i file statici localmente e poi inviali su GitHub, eseguendo:

```bash
hexo g
hexo d
```

A questo punto, apri il browser e visita `http://your-name.github.io`. Congratulazioni, il tuo blog è finalmente online!

### Collegare un dominio personalizzato

A questo punto il blog è completamente configurato e accessibile tramite il dominio di GitHub. Rendere il tutto ancora più perfetto sarebbe associare un dominio più breve e personalizzato.

#### Acquisto del dominio

*   Acquista un dominio. Raccomando [namesilo.com](https://www.namesilo.com/), un provider di domini storico e affidabile, con prezzi convenienti e un buon servizio. Se usi il mio codice di riferimento `PhiloArt.io`, potrai ottenere uno sconto di 1 dollaro, valido fino al 31-12-2025.

### Risoluzione del dominio

*   **Impostazioni DNS del provider del dominio**

*   Aggiungi 4 record A, puntando a GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Aggiungi un record `CNAME`, con `name` impostato su `www` e `content` su `your-name.github.io` (che punta al tuo indirizzo GitHub Pages):

 > CNAME —> philo-li.github.io

*   Per impostazioni più dettagliate, consulta la [documentazione di GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   **Aggiungi il file CNAME alla directory del blog**

 Dopo aver configurato la risoluzione del dominio, entra nella directory del blog, crea un nuovo file chiamato `CNAME` (attenzione, deve essere maiuscolo e senza estensione) nella directory `source`. Aprilo con un editor di testo e scrivi il dominio che hai acquistato, ad esempio: `www.philoli.com`

*   Esegui:

```bash
hexo g
hexo d
```

Ora apri il browser, digita il tuo dominio e premi Invio. Congratulazioni, hai finalmente un blog con il tuo dominio personale!

### Pubblicare un nuovo articolo

*   Nella directory principale del blog, esegui: `hexo new “Il mio primo articolo”`. Questo creerà un file `.md` nella cartella `source/_posts`.

*   Modifica questo file, cambiando i campi iniziali in:

 ```bash
 title Titolo dell'articolo
 date Data di creazione (data di creazione del file)
 updated Data di modifica (data di modifica del file)
 comments Abilita commenti true
 tags Tag
 categories Categorie
 permalink Nome nell'URL (nome del file)
 ```

*   Scrivi il contenuto del testo (seguendo le regole Markdown).

*   Genera i file statici localmente e inviali su GitHub, eseguendo:

```bash
hexo g
hexo d
```

### Personalizzazione (avanzata)

Qui di seguito trovi alcune impostazioni avanzate per personalizzare lo stile del tuo blog. I principianti possono saltare questa sezione per ora.

#### Aggiungere RSS

*   Installa il plugin nella directory principale:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

*   Alla fine del file `_config.yml` nella directory principale, aggiungi: (**_Attenzione: assicurati di aggiungere uno spazio dopo i due punti, altrimenti si verificherà un errore!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

*   Apri `/themes/next/_config.yml` e modifica `rss` (ricorda di aggiungere uno spazio dopo i due punti)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Troncare gli articoli nella homepage
*   Ogni volta che scrivi un articolo, ti basta aggiungere `<!--more-->` nel file `.md` dove desideri che il testo venga troncato:

 ```markdown
     <!--more-->
 ```

*   Apri `/themes/next/_config.yml` e imposta l'opzione `scroll_to_more` su `false`.

#### Centrare il testo citato negli articoli
*   Ottimizza lo stile predefinito delle citazioni Markdown.

```markdown
{% centerquote %}
Testo citato
{% endcenterquote %}
```

{% centerquote %}
Testo citato
{% endcenterquote %}

#### Modificare lo stile dei blocchi di codice

*   Modifica `/themes/next/_config.yml`, configurando `codeblock` come segue:

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

#### Impostare la data di creazione del sito

*   Modifica il file `_config.yml` del sito e aggiungi il campo `since`.

```bash
since: 2024
```

#### Migliorare lo stile dei link negli articoli

*   Modifica il file `themes\next\source\css\_common\components\post\post.styl`, aggiungendo il seguente stile CSS alla fine:

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

#### Aggiungere un'immagine di sfondo al blog
*   Nella cartella `source` della directory principale, crea una cartella `_data`. All'interno di `_data`, crea un nuovo file `styles.styl`. Apri il file `source/_data/styles.styl` appena creato e aggiungi il seguente contenuto:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Se l'immagine non copre, come deve ripetersi
    background-attachment:fixed;    // Se l'immagine deve scorrere con la pagina
    background-size: cover;         // Copre l'intera area
    background-position:50% 50%;    // Posizione dell'immagine
}
```
*   L'URL può essere un link all'immagine o un percorso alla directory dell'immagine. Puoi chiamare l'immagine `background.jpg` e inserirla nella cartella `source/uploads`.

#### Impostare lo sfondo del contenuto del blog come semitrasparente
*   Apri il file `source/_data/styles.styl` modificato nel passaggio precedente e continua aggiungendo il seguente contenuto:

```css

// Trasparenza del contenuto del blog
// Impostazione della trasparenza per il contenuto degli articoli
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


// Impostazione della trasparenza per la barra laterale
.sidebar {
  opacity: 0.9;
}

// Impostazione della trasparenza per la barra del menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Impostazione della trasparenza per la barra di ricerca (local-search)
.popup {
  opacity: 0.9;
}
```

#### Ottimizzare lo stile dei blocchi di codice inline
*   Apri il file `source/_data/styles.styl` modificato nel passaggio precedente e continua aggiungendo il seguente contenuto:

```css
// Abbellimento per i tag di codice inline
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Aggiungere il numero di visitatori al footer del sito

*   Modifica il file:

```css
# Trova la sezione del tag copyright e aggiungi il codice al suo interno.

<div class="copyright">
# ......Qui ci sono già alcune configurazioni
# Aggiungi qui il nuovo codice
</div>

# Dopo l'aggiunta, dovrebbe apparire così:
<div class="copyright">
  # ......Qui ci sono già alcune configurazioni
  # Aggiungi qui il nuovo codice
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Rigenera e visualizza l'anteprima delle modifiche. Una volta confermato che tutto è a posto, pubblica:

```bash
hexo g
hexo s
# Dopo aver confermato che non ci sono problemi, pubblica
hexo d
```

#### Aggiungere il file README.md al repository

Normalmente, ogni progetto include un file `README.md`. Tuttavia, quando si distribuisce con Hexo a un repository, il file `README.md` del progetto viene sovrascritto. Per evitarlo, è necessario configurare il file di configurazione.

Nella directory `source` della cartella radice di Hexo, aggiungi un file `README.md`. Modifica il file di configurazione del sito `_config.yml`, impostando il valore del parametro `skip_render` su:

```yml
skip_render: README.md
```
Salva ed esci. La prossima volta che userai il comando `hexo d` per distribuire il blog, il file `README.md` non verrà renderizzato.

#### Alcuni plugin utili

-   Hexo Filter MathJax: Per il rendering delle formule matematiche
    -   Installa `npm install hexo-filter-mathjax`
    -   Configurazione dettagliata: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Conteggio parole negli articoli
    -   Installa `npm install hexo-word-counter`
    -   Configurazione dettagliata: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Ottimizza la velocità di caricamento del blog
    -   Installa `npm install hexo-optimize`
    -   Configurazione dettagliata: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Altri plugin: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Backup dei file sorgente

-   Ricorda assolutamente di fare il backup dei tuoi file sorgente locali, specialmente i file Markdown. Se le altre configurazioni andassero perse, non potresti scrivere normalmente sul blog e dovresti ricominciare da capo.
-   Si consiglia di utilizzare lo stesso repository GitHub per il backup.
-   Si consiglia di fare un backup ogni volta che si apportano modifiche, o almeno una volta al giorno.
-   Per ulteriori utilizzi, consulta la [documentazione di Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)

```bash
# Aggiungi l'indirizzo del repository del blog configurato in precedenza
git remote add origin https://github.com/your-name/your-name.github.io.git

# Aggiungi e salva le modifiche attuali, con un messaggio di commit
git add .
git commit -m "Aggiornamento file sorgente"

# Crea e passa a un nuovo branch
git checkout -b source

# Invia tutto il contenuto del branch 'source' locale al branch 'source' del repository remoto
git push origin source:source
```

### Scrivere il blog su computer diversi
-   Quando scrivi il blog su computer diversi, dovrai installare il software di base, quindi clonare il repository GitHub di backup remoto in locale per aggiornare il blog.

*   Scarica e installa Node.js ([scarica e installa dal sito ufficiale](https://nodejs.org/en/))
*   Scarica e installa Git ([scarica e installa dal sito ufficiale](https://git-scm.com/downloads))
*   Installa il framework Hexo: Apri il terminale (o CMD) ed esegui:

 ```bash
 npm install -g hexo-cli
```
*   Esegui l'aggiornamento locale:

```bash
# Clona il repository in locale
git clone https://github.com/your-name/your-name.github.io.git

# Se il repository è già stato clonato in locale, ogni volta che aggiorni il blog dovrai recuperare i contenuti più recenti del branch.
git pull origin

# Passa al branch corrispondente
git checkout source

# Dopo aver installato tutti i plugin configurati in Hexo, puoi iniziare ad aggiornare e modificare il contenuto del blog.
npm install

# Dopo aver modificato il contenuto, ricordati di fare subito un backup completo.
git add .
git commit -m "Aggiornamento blog xxx"
git push origin source:source

# Pubblica e invia il contenuto più recente del blog al sito con dominio.
hexo clean
hexo g  # Genera pagine web statiche
hexo s  # Visualizza l'anteprima del blog in locale
hexo d  # Pubblica il contenuto più recente del blog
```

### Riepilogo dei comandi comuni

 ```bash
hexo g
# o hexo generate, genera pagine web statiche dai file sorgente
hexo d
# o hexo deploy, pubblica e invia a GitHub Pages
hexo s
# o hexo server, distribuisci e testa in locale
hexo clean
# svuota la cache delle pagine web statiche, quindi rigenera con hexo d
