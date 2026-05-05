---
title: Ghid concis pentru crearea unui blog Hexo de la zero (Ediția 2024)
date: 2024-04-11 00:25:20
tags: Creare blog
categories: Experimente zilnice
---
Te-ai săturat de interfețele inestetice ale multor bloguri? Te-ai săturat de notificările și recomandările intruzive de pe site-uri? Ai visat dintotdeauna să-ți creezi propriul blog, dar te-au descurajat tutorialele complicate și codul care-ți dă bătăi de cap? Atunci, felicitări! Acest articol își propune să te ghideze pas cu pas, în cel mai simplu și accesibil mod, pentru a-ți construi propriul spațiu online. Nu ai nevoie decât de puțină răbdare și să urmezi instrucțiunile rând pe rând.

<!--more-->

Hexo, un framework rapid, simplu și eficient pentru bloguri, este o adevărată mană cerească pentru începători, iar GitHub ne scutește de bătaia de cap de a închiria și configura un server. De aceea, în acest ghid, vom folosi Hexo și GitHub pentru a-ți crea blogul.

În 2018, am scris un [ghid concis pentru crearea unui blog de la zero](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Între timp, au apărut actualizări la pluginuri, iar unele detalii necesită modificări. De aceea, lansez acum versiunea 2024 a acestui ghid concis.

### Pregătiri

*   Descărcați și instalați node.js ([descărcați de pe site-ul oficial](https://nodejs.org/en/))
*   Descărcați și instalați git ([descărcați de pe site-ul oficial](https://git-scm.com/downloads))

### Configurarea locală a blogului static Hexo

*   Instalați framework-ul Hexo: Deschideți cmd și rulați
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Creați un folder nou, de exemplu `MyBlog`, intrați în el, faceți click dreapta și rulați Git, apoi introduceți:

 ```bash
 $ hexo init
 ```

*   După generarea șablonului Hexo, instalați npm și rulați:

 ```bash
$ npm install
 ```

Exact, partea principală a blogului este gata! Haideți să vedem cum arată. Rulați:

```bash
$ hexo server
```

Acum, deschideți browserul, introduceți `localhost:4000` și veți vedea cum arată blogul dumneavoastră. Bucurați-vă de moment, apoi apăsați Ctrl + C pentru a continua cu pașii următori.

### Setări de personalizare (inițiale)

#### Schimbarea temei

*   Descărcați o temă nouă (de exemplu, [tema NexT](http://theme-next.iissnan.com/)). Rulați în directorul rădăcină:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Deschideți fișierul `_config.yml` din directorul rădăcină și modificați câmpul `theme` la:

 ```bash
theme: next
 ```

*   Alegeți aspectul: Deschideți `/themes/next/_config.yml`, găsiți câmpul `scheme` (puteți folosi Ctrl + F pentru căutare rapidă). NexT oferă trei aspecte diferite; alegeți-l pe cel care vă place și eliminați simbolul `#` din fața acestuia (ulterior, aceste două fișiere vor fi principalele pe care le veți modifica: _fișierul de configurare al site-ului_ și _fișierul de configurare al temei_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Pentru a vedea rezultatul, rulați următoarele comenzi (puteți repeta acest pas de fiecare dată când doriți să verificați modificările):

```bash
hexo g #sau hexo generate
hexo server
```

#### Configurarea site-ului

*   Deschideți fișierul de configurare al site-ului `_config.yml` din directorul rădăcină cu un editor de text (nu folosiți Notepad pe Windows, deoarece titlurile chinezești ar putea apărea codificate greșit), modificați câmpul `Site`. **Atenție: după două puncte trebuie să existe un spațiu:**

 ```bash
 # Site
 title: Lumea Necunoscută          //Numele blogului
 subtitle:
 description: Fă ceva grozav       //O semnătură
 author: LulalaP                  //Autor
 language: zh-Hans                //Limba site-ului
 timezone:
 ```

### Configurarea avatarului în bara laterală

*   Creați un folder nou în `/source` și denumiți-l `uploads`. Plasați imaginea avatarului (de exemplu: `avatar.jpg`) în acest folder.

*   Deschideți `/themes/next/_config.yml`, găsiți câmpul `avatar` și modificați-l la:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Îmbunătățirea paginilor blogului

#### Adăugarea meniului
*   Deschideți `/themes/next/_config.yml` și pur și simplu eliminați comentariile (simbolul `#`) din fața elementelor de meniu pe care doriți să le adăugați în câmpul `menu`. Dacă doriți să adăugați alte elemente, le puteți include după cum este necesar (atenție la indentarea câmpurilor):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Crearea paginii de categorii

*   Creați o pagină nouă, numită `categories`, folosind următoarea comandă:

 ```bash
 $ hexo new page categories
 ```

*   Editați pagina tocmai creată `/source/categories/index.md`. Setați tipul paginii la `categories`, iar tema va afișa automat toate categoriile pe această pagină (atenție să păstrați spațiul după două puncte).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Crearea paginii cu nor de etichete

*   Creați o pagină nouă, numită `tags`, folosind următoarea comandă:

 ```bash
 $ hexo new page "tags"
 ```

*   Editați pagina tocmai creată și setați tipul acesteia la `tags`. Tema va afișa automat un nor de etichete pe această pagină.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Crearea paginii „Despre mine”

 *   Creați o pagină 'about':

 ```bash
 $ hexo new page "about"
 ```

 *   Editați pagina tocmai creată și puteți scrie informațiile în corpul textului, folosind formatul Markdown.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Configurarea linkurilor sociale în bara laterală

*   Editați fișierul `_config.yml` al site-ului, găsiți câmpul `social` și adăugați numele și adresa site-urilor sociale. Formatul cheie-valoare este `Nume Afișat: Adresă Link`, de exemplu:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Deschideți `/themes/next/_config.yml`, și sub câmpul `social_icons`, adăugați numele site-urilor sociale (atenție la majuscule/minuscule) și (pictogramele)[http://fontawesome.io/icons/]. Opțiunea `enable` controlează dacă pictogramele sunt afișate; o puteți seta la `false` pentru a le elimina. De exemplu:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Asocierea blogului cu GitHub

 *   Înregistrați-vă un cont GitHub: Dacă nu aveți încă un cont GitHub, trebuie să vă înregistrați mai întâi.

 *   Creați un proiect pe GitHub cu numele `XXX.github.io`, unde XXX este numele dumneavoastră de utilizator GitHub.

 *   Deschideți fișierul de configurare `_config.yml` din folderul local al proiectului `MyBlog` și setați `type` la `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Rulați:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Generați fișierele statice local și împingeți-le către GitHub, rulați:

```bash
hexo g
hexo d
```

Acum, deschideți browserul și accesați `http://your-name.github.io`. Felicitări, blogul dumneavoastră este gata!

### Asocierea domeniului

Până acum, blogul este complet configurat și poate fi accesat prin domeniul GitHub. Ar fi și mai perfect să asociați acum un domeniu scurt acestui blog.

#### Achiziționarea domeniului

*   Achiziționați un domeniu. Recomandăm [namesilo.com](https://www.namesilo.com/), un furnizor de domenii consacrat, cu prețuri avantajoase și servicii de încredere. Dacă folosiți codul meu de recomandare `PhiloArt.io`, veți beneficia de o reducere de 1 dolar, valabilă până la 31.12.2025.

### Configurarea DNS pentru domeniu

*   Setările DNS ale furnizorului de domenii

*   Adăugați 4 înregistrări A, care să indice către GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Adăugați o înregistrare `CNAME`, cu `name` ca `www` și `content` ca `your-name.github.io` (indicând adresa dumneavoastră de GitHub Pages):

 > CNAME —> philo-li.github.io

*   Pentru setări mai detaliate, consultați [Documentația GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Adăugarea fișierului CNAME în directorul blogului

 După configurarea rezoluției domeniului, intrați în directorul blogului, creați un fișier numit `CNAME` (atenție, trebuie să fie cu majuscule și fără extensie) în directorul `source`, deschideți-l cu un editor de text și introduceți domeniul achiziționat, de exemplu: `www.philoli.com`.

*   Rulați:

```bash
hexo g
hexo d
```

Acum, deschideți browserul, introduceți domeniul și apăsați Enter. Felicitări, aveți acum un blog cu propriul dumneavoastră domeniu independent!

### Publicarea unui articol nou

*   În directorul rădăcină al blogului, executați: `hexo new “Primul meu articol”`. Aceasta va genera un fișier `.md` în folderul `source/_posts`.

*   Editați fișierul, modificând câmpurile inițiale la:

 ```bash
 title Titlul articolului
 date Data creării (data creării fișierului)
 updated Data modificării (data modificării fișierului)
 comments Activare comentarii true
 tags Etichete
 categories Categorii
 permalink Nume în URL (numele fișierului)
 ```

*   Scrieți conținutul principal (urmând regulile Markdown).

*   Generați fișierele statice local și împingeți-le către GitHub, rulați:

```bash
hexo g
hexo d
```

### Setări de personalizare (avansate)

Mai jos sunt prezentate câteva setări avansate pentru stilizarea blogului. Începătorii pot sări peste această secțiune deocamdată.

#### Adăugarea RSS

 *   Instalați pluginul în directorul rădăcină

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   La sfârșitul fișierului `_config.yml` din directorul rădăcină, adăugați: (**_Vă rugăm să rețineți că trebuie să adăugați un spațiu după două puncte, altfel va apărea o eroare!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Deschideți `/themes/next/_config.yml` și modificați `rss` (atenție: adăugați un spațiu după două puncte)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Trunchierea articolelor pe pagina principală
 *   De fiecare dată când scrieți un articol, trebuie doar să adăugați următoarea marcă în fișierul `.md`, acolo unde doriți să se facă trunchierea:

 ```markdown
     <!--more-->
 ```

 *   Deschideți `/themes/next/_config.yml` și setați opțiunea `scroll_to_more` la `false`.

#### Centrarea textului citat în articole
*   Stilul implicit al citatelor Markdown a fost optimizat.

```markdown
{% centerquote %}
Text citat
{% endcenterquote %}
```

{% centerquote %}
Text citat
{% endcenterquote %}

#### Modificarea stilului blocurilor de cod

*   Editați `/themes/next/_config.yml` și modificați configurația `codeblock` după cum urmează:

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

#### Setarea datei de creare a site-ului

 *   Editați fișierul `_config.yml` al site-ului și adăugați noul câmp `since`.

```bash
since: 2024
```

#### Îmbunătățirea stilului linkurilor din articole

*   Editați fișierul `themes\next\source\css\_common\components\post\post.styl` și adăugați următoarele stiluri CSS la sfârșit:

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

#### Adăugarea unei imagini de fundal blogului
*   În folderul `source` din directorul rădăcină, creați un folder `_data`, apoi creați un fișier `styles.styl`. Deschideți fișierul nou creat `source/_data/styles.styl` și adăugați următorul conținut:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Dacă imaginea nu acoperă, se repetă și cum
    background-attachment:fixed;    //Dacă imaginea se derulează odată cu conținutul
    background-size: cover;         //Acoperire
    background-position:50% 50%;    //Poziția imaginii
}
```
*   URL-ul poate fi un link de imagine sau o cale către o imagine. Puteți denumi imaginea `background.jpg` și o puteți plasa în folderul `source/uploads`.

#### Setarea transparenței fundalului conținutului blogului
*   Deschideți fișierul `source/_data/styles.styl` editat anterior și adăugați următorul conținut sub cel existent:

```css

//Transparența conținutului blogului
//Setarea transparenței conținutului articolului
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


//Setarea transparenței barei laterale
.sidebar {
  opacity: 0.9;
}

//Setarea transparenței barei de meniu
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Setarea transparenței casetei de căutare (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimizarea stilului blocurilor de cod inline
*   Deschideți fișierul `source/_data/styles.styl` editat anterior și adăugați următorul conținut sub cel existent:

```css
// Îmbunătățirea stilului pentru etichetele de cod `<code>`
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Adăugarea contorului de vizitatori în subsolul site-ului

*   Editați fișierul

```css
# Găsiți bara de etichete `copyright` și adăugați codul în interiorul etichetei

<div class="copyright">
# ......Aici există deja câteva configurații
# Adăugați cod nou aici
</div>

# După adăugare, va arăta astfel:
<div class="copyright">
  # ......Aici există deja câteva configurații
  # Adăugați cod nou aici
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Regenerați și previzualizați efectul modificat, iar după confirmare că totul este în regulă, publicați.

```bash
hexo g
hexo s
# Publicați după confirmare că totul este în regulă
hexo d
```

#### Adăugarea fișierului README.md în repository

De obicei, fiecare proiect are un fișier `README.md`, dar când Hexo este implementat în repository, fișierul `README.md` din proiect va fi suprascris. Prin urmare, este necesar să configurați fișierul de configurare pentru a preveni suprascrierea.

Adăugați un fișier `README.md` în directorul rădăcină `source` al directorului `Hexo`, modificați fișierul de configurare al site-ului `_config.yml` și setați valoarea parametrului `skip_render` la:

```yml
skip_render: README.md
```
Salvați și ieșiți. Când veți implementa blogul din nou folosind comanda `hexo d`, fișierul `README.md` nu va mai fi redat.

#### Câteva pluginuri utile

-   Hexo Filter MathJax: Redare formule matematice
  -   Instalare `npm install hexo-filter-mathjax`
  -   Configurație detaliată: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Contor de cuvinte pentru articole
  -   Instalare `npm install hexo-word-counter`
  -   Configurație detaliată: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optimizarea vitezei de încărcare a blogului
  -   Instalare `npm install hexo-optimize`
  -   Configurație detaliată: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Mai multe pluginuri: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Backup-ul fișierelor sursă

-   Nu uitați să faceți backup fișierelor sursă locale, în special fișierelor Markdown. Dacă alte configurații se pierd, nu veți putea scrie pe blog în mod normal și va trebui să le reconfigurați de la zero.
-   Se recomandă utilizarea aceluiași repository GitHub pentru backup.
-   Se recomandă să faceți backup de fiecare dată când faceți modificări sau, alternativ, zilnic.
-   Pentru mai multe utilizări, consultați [documentația Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) 

```bash
# Adăugați adresa repository-ului blogului configurată anterior
git remote add https://github.com/your-name/your-name.github.io.git

# Adăugați și salvați modificările curente, apoi înregistrați un comentariu
git add .
git commit -m "Actualizare fișiere sursă"

# Creați și schimbați pe o ramură nouă
git checkout -b source

# Împingeți tot conținutul ramurii locale `source` către ramura `source` din repository-ul la distanță
git push origin source:source
```

### Scrierea pe blog de pe diferite computere
-   Atunci când scrieți pe blog de pe diferite computere, trebuie să instalați software-ul de bază, apoi să extrageți (pull) repository-ul GitHub de backup la distanță pe computerul local pentru a actualiza blogul.

*   Descărcați și instalați node.js ([descărcați de pe site-ul oficial](https://nodejs.org/en/))
*   Descărcați și instalați git ([descărcați de pe site-ul oficial](https://git-scm.com/downloads))
*   Instalați framework-ul Hexo: Deschideți cmd și rulați

 ```bash
 npm install -g hexo-cli
```
*   Efectuarea actualizării locale

```bash
# Clonați repository-ul local
git clone https://github.com/your-name/your-name.github.io.git

# Dacă repository-ul este deja clonat local, va trebui să extrageți (pull) cel mai recent conținut al ramurii înainte de fiecare actualizare a blogului
git pull origin

# Schimbați pe ramura corespunzătoare
git checkout source

# După instalarea tuturor pluginurilor din configurația Hexo, puteți începe să actualizați și să editați conținutul blogului
npm install

# După modificarea conținutului, nu uitați să faceți backup imediat, un proces complet
git add .
git commit -m "Actualizare blog xxx"
git push origin source:source

# Publicați și împingeți cel mai recent conținut al blogului către site-ul cu domeniu
hexo clean
hexo g  # Generează fișiere statice
hexo s  # Previzualizare locală a blogului
hexo d  # Publică cel mai recent conținut al blogului
```

### Rezumarea câtorva comenzi utile

 ```bash
hexo g
#sau hexo generate, generează pagini web statice din fișierele sursă
hexo d
#sau hexo deploy, publică și împinge către GitHub Pages
hexo s
#sau hexo server, implementare și testare locală
hexo clean
# Golește cache-ul paginilor statice, apoi hexo d pentru regenerare
