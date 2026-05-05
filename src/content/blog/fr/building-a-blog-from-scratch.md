---
title: Tutoriel simplifié pour créer un blog Hexo de A à Z (édition 2024)
date: 2024-04-11 00:25:20
tags: Création de blog
categories: Bricolages
---
En avez-vous assez des interfaces sans âme des sites de blogs, des notifications incessantes, et rêvez-vous depuis longtemps de créer votre propre espace, mais les tutoriels complexes et le flot de code décourageant vous ont toujours freiné ? Bonne nouvelle ! Cet article est là pour vous guider pas à pas, de la manière la plus simple et la plus claire, dans la construction de votre propre blog. Il vous suffira d'un peu de patience et de suivre chaque étape.

<!--more-->

Hexo, en tant que framework de blog rapide, concis et efficace, est une véritable aubaine pour les débutants. GitHub, de son côté, nous épargne les tracas liés à la location et au déploiement d'un serveur. Ce tutoriel vous montrera donc comment créer votre blog en utilisant Hexo et GitHub.

En 2018, j'avais déjà rédigé un article intitulé [Tutoriel simple pour créer un blog de A à Z](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Cependant, en raison des mises à jour des plugins, certains détails nécessitent des ajustements. C'est pourquoi je vous propose cette nouvelle version simplifiée pour 2024.

### Préparation

*   Téléchargez et installez Node.js ([téléchargement officiel](https://nodejs.org/en/))
*   Téléchargez et installez Git ([téléchargement officiel](https://git-scm.com/downloads))

### Création du blog statique Hexo en local

*   Installation du framework Hexo : Ouvrez votre invite de commandes (CMD) et exécutez :

 ```bash
 $ npm install -g hexo-cli
 ```

*   Créez un nouveau dossier, par exemple `MyBlog`. Entrez dans ce dossier, faites un clic droit et exécutez Git Bash (ou votre terminal), puis tapez :

 ```bash
 $ hexo init
 ```

*   Une fois le modèle Hexo généré, installez npm en exécutant :

 ```bash
$ npm install
 ```

Et voilà ! La partie principale de votre blog est déjà prête. Voyons le résultat. Exécutez :

```bash
$ hexo server
```

Ouvrez votre navigateur et entrez `localhost:4000` pour voir à quoi ressemble votre blog. Un petit moment d'excitation, puis appuyez sur `Ctrl + C` pour poursuivre.

### Personnalisation (première étape)

#### Changer de thème

*   Téléchargez un nouveau thème (nous prendrons l'exemple du [thème NexT](http://theme-next.iissnan.com/)). Exécutez la commande suivante dans le répertoire racine de votre blog :

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Ouvrez le fichier `_config.yml` à la racine de votre blog et modifiez le champ `theme` comme suit :

 ```bash
theme: next
 ```

*   **Choisir l'apparence :** Ouvrez `/themes/next/_config.yml`. Recherchez le champ `scheme` (vous pouvez utiliser `Ctrl + F` pour le trouver rapidement). NexT propose plusieurs apparences différentes ; choisissez celle qui vous plaît et retirez le `#` devant sa ligne. (Ce sont principalement ces deux fichiers que vous modifierez par la suite : le *fichier de configuration du site* et le *fichier de configuration du thème*.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Pour visualiser le résultat, exécutez les commandes suivantes (vous pourrez répéter cette étape chaque fois que vous voudrez prévisualiser vos changements) :

```bash
hexo g # ou hexo generate
hexo server
```

#### Configuration du site

*   Ouvrez le fichier de configuration du site `_config.yml` (situé à la racine de votre blog) avec un éditeur de texte (sur Windows, évitez le Bloc-notes, car les caractères chinois pourraient s'afficher de manière erronée). Modifiez la section `Site`. Attention : il doit y avoir un espace après chaque deux-points.

 ```bash
 # Site
 title: Le Monde Inconnu                // Nom du blog
 subtitle:
 description:  Do something cool // Une signature
 author: LulalaP                 // Auteur
 language: fr               // Langue du site
 timezone:
 ```

### Définir l'avatar de la barre latérale

*   Créez un nouveau dossier nommé `uploads` dans le répertoire `/source`, puis placez-y votre image d'avatar (par exemple : `avatar.jpg`).

*   Ouvrez `/themes/next/_config.yml`, localisez le champ `avatar` et modifiez-le comme suit :

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Optimiser les pages du blog

#### Ajouter des éléments au menu
*   Ouvrez `/themes/next/_config.yml`. Pour ajouter des éléments au menu, il suffit de supprimer le `#` devant les entrées souhaitées dans le champ `menu`. Vous pouvez ajouter d'autres éléments selon vos besoins (faites attention à l'indentation) :

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Créer une page de catégories

*   Créez une nouvelle page nommée `categories` avec la commande suivante :

 ```bash
 $ hexo new page categories
 ```

*   Éditez la page nouvellement créée, `/source/categories/index.md`. Définissez le type de page sur `categories` ; le thème affichera automatiquement toutes vos catégories sur cette page. (Veillez à conserver l'espace après les deux-points).

 ```bash
	title: Catégories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Créer une page de nuage de tags

*   Créez une nouvelle page nommée `tags` avec la commande suivante :

 ```bash
 $ hexo new page "tags"
 ```

*   Éditez la page nouvellement créée. Définissez le type de page sur `tags` ; le thème affichera automatiquement un nuage de tags sur cette page.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Créer une page "À propos"

 *   Créez une page `about` :

 ```bash
 $ hexo new page "about"
 ```

 *   Éditez la page nouvellement créée. Vous pouvez y rédiger votre contenu au format Markdown.

 ```bash
	title: À propos
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Configurer les liens sociaux de la barre latérale

*   Éditez le fichier `_config.yml` de votre site. Recherchez le champ `social` et ajoutez simplement les noms et adresses de vos réseaux sociaux. Le format clé-valeur est `Nom_affiché : Lien_URL`, par exemple :

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Ouvrez `/themes/next/_config.yml`. Sous le champ `social_icons`, ajoutez le nom du réseau social (attention à la casse) et l'[icône correspondante](http://fontawesome.io/icons/). L'option `enable` permet de contrôler l'affichage des icônes ; vous pouvez la définir sur `false` pour les masquer. Par exemple :

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Associer votre blog à GitHub

 *   **Inscrivez-vous sur GitHub :** Si vous n'avez pas encore de compte GitHub, vous devez en créer un.

 *   Sur GitHub, créez un nouveau dépôt nommé `XXX.github.io`, où `XXX` est votre nom d'utilisateur GitHub.

 *   Ouvrez le fichier de configuration `_config.yml` situé dans votre dossier `MyBlog` local et définissez le `type` sur `git` :

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Exécutez :

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Générez les fichiers statiques en local et poussez-les vers GitHub en exécutant :

```bash
hexo g
hexo d
```

Maintenant, ouvrez votre navigateur et visitez `http://your-name.github.io`. Félicitations, votre blog est désormais en ligne !

### Lier un nom de domaine

À ce stade, votre blog est entièrement configuré et accessible via le domaine GitHub. Pour le rendre encore plus parfait, il ne vous reste plus qu'à y associer un nom de domaine plus court.

#### Achat d'un nom de domaine

*   Achetez un nom de domaine. Je recommande [namesilo.com](https://www.namesilo.com/), un fournisseur de domaines réputé, offrant des prix compétitifs et un service fiable. Si vous utilisez mon code de parrainage `PhiloArt.io`, vous bénéficierez d'une réduction de 1 $, valable jusqu'au 31/12/2025.

### Configuration DNS du domaine

*   **Paramètres DNS chez votre fournisseur de domaine**

*   Ajoutez 4 enregistrements A, pointant vers GitHub Pages :

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Ajoutez un enregistrement `CNAME`, avec `name` comme `www` et `content` comme `your-name.github.io` (pointant vers l'adresse de votre page GitHub) :

 > CNAME —> philo-li.github.io

*   Pour des paramètres plus détaillés, consultez la [documentation de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   **Ajouter un fichier CNAME au répertoire du blog**

 Une fois la résolution DNS configurée, rendez-vous dans le répertoire de votre blog. Créez un nouveau fichier nommé `CNAME` (attention, en majuscules et sans extension) dans le dossier `source`. Ouvrez-le avec un éditeur de texte et écrivez-y le nom de domaine que vous avez acheté, par exemple : `www.philoli.com`

*   Exécutez :

```bash
hexo g
hexo d
```

Maintenant, ouvrez votre navigateur, entrez votre nom de domaine, appuyez sur Entrée, et félicitations ! Vous avez désormais un blog avec votre propre nom de domaine.

### Publier un nouvel article

*   Dans le répertoire racine de votre blog, exécutez : `hexo new “Mon premier article”`. Cela créera un fichier `.md` dans le dossier `source/_posts`.

*   Éditez ce fichier et modifiez les champs d'en-tête comme suit :

 ```bash
 title Le titre de l'article
 date Date de création (date de création du fichier)
 updated Date de modification (date de modification du fichier)
 comments Activer les commentaires true
 tags Tags
 categories Catégories
 permalink Nom dans l'URL (nom du fichier)
 ```

*   Rédigez le contenu principal (en respectant les règles Markdown).

*   Générez les fichiers statiques en local et poussez-les vers GitHub en exécutant :

```bash
hexo g
hexo d
```

### Personnalisation avancée

Voici quelques réglages de style avancés pour votre blog. Les débutants peuvent les ignorer pour le moment.

#### Ajouter un flux RSS

 *   Installez le plugin dans le répertoire racine :

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Ajoutez ce qui suit à la fin du fichier `_config.yml` à la racine : (**_Attention, un espace doit être ajouté après les deux-points, sinon une erreur se produira !_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Ouvrez `/themes/next/_config.yml` et modifiez `rss` (attention à l'espace après les deux-points) :

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Tronquer les articles sur la page d'accueil
 *   Chaque fois que vous rédigez un article, il suffit d'ajouter ce qui suit à l'endroit où vous souhaitez le tronquer dans le fichier `.md` de l'article :

 ```markdown
     <!--more-->
 ```

 *   Ouvrez `/themes/next/_config.yml` et définissez l'option `scroll_to_more` sur `false`.

#### Centrer les citations dans les articles
*   Optimisation du style par défaut des citations Markdown.

```markdown
{% centerquote %}
Texte de la citation
{% endcenterquote %}
```

{% centerquote %}
Texte de la citation
{% endcenterquote %}

#### Modifier le style des blocs de code

*   Éditez `/themes/next/_config.yml` et modifiez la configuration `codeblock` comme suit :

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

#### Définir la date de création du site

 *   Éditez le fichier `_config.yml` de votre site et ajoutez le champ `since`.

```bash
since: 2024
```

#### Améliorer le style des liens dans les articles

*   Éditez le fichier `themes\next\source\css\_common\components\post\post.styl` et ajoutez le style CSS suivant à la fin :

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

#### Ajouter une image de fond au blog
*   Dans le dossier `source` à la racine, créez un dossier `_data`. Créez un nouveau fichier `styles.styl` à l'intérieur, ouvrez `source/_data/styles.styl` et ajoutez le contenu suivant :

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Si l'image ne couvre pas tout, comment la répéter
    background-attachment:fixed;    // L'image défile-t-elle avec le contenu
    background-size: cover;         // Couvrir l'espace
    background-position:50% 50%;    // Position de l'image
}
```
*   L'URL peut être un lien vers une image ou un chemin de répertoire. Vous pouvez nommer l'image `background.jpg` et la placer dans le dossier `source/uploads`.

#### Rendre le fond du contenu du blog semi-transparent
*   Ouvrez le fichier `source/_data/styles.styl` édité à l'étape précédente et ajoutez le contenu suivant :

```css

// Transparence du contenu du blog
// Réglage de l'opacité du contenu de l'article
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


// Réglage de l'opacité de la barre latérale
.sidebar {
  opacity: 0.9;
}

// Réglage de l'opacité de la barre de menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Réglage de l'opacité de la barre de recherche (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimiser le style des blocs de code en ligne
*   Ouvrez le fichier `source/_data/styles.styl` édité à l'étape précédente et ajoutez le contenu suivant :

```css
// Embellissement des balises de code en ligne
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Ajouter un compteur de visiteurs au pied de page du site

*   Recherchez la balise `copyright` et ajoutez le code suivant à l'intérieur de celle-ci :

```css
# Trouvez la balise copyright, puis ajoutez le code à l'intérieur de la balise

<div class="copyright">
# ......il y a déjà des configurations ici
# Ajoutez le nouveau code ici
</div>

# Après ajout, cela devrait ressembler à ceci :
<div class="copyright">
  # ......il y a déjà des configurations ici
  # Ajoutez le nouveau code ici
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Regénérez et prévisualisez les modifications. Une fois que tout est correct, publiez :

```bash
hexo g
hexo s
# Une fois que tout est correct, publiez
hexo d
```

#### Ajouter un fichier README.md au dépôt

Chaque projet contient généralement un fichier `README.md`. Cependant, lorsque vous déployez votre blog Hexo sur un dépôt, le fichier `README.md` existant est écrasé. Il est donc nécessaire de configurer Hexo pour éviter ce remplacement.

Dans le répertoire racine `source` de votre projet Hexo, ajoutez un fichier `README.md`. Ensuite, modifiez le fichier de configuration du site `_config.yml` et définissez la valeur du paramètre `skip_render` comme suit :

```yml
skip_render: README.md
```
Enregistrez et quittez. La prochaine fois que vous déploierez votre blog avec la commande `hexo d`, le fichier `README.md` ne sera plus rendu.

#### Quelques plugins utiles

-   **Hexo Filter MathJax :** pour le rendu des formules mathématiques
    -   Installation : `npm install hexo-filter-mathjax`
    -   Configuration détaillée : [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   **Hexo Word Counter :** pour le comptage des mots dans les articles
    -   Installation : `npm install hexo-word-counter`
    -   Configuration détaillée : [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   **Hexo Optimize :** pour optimiser la vitesse de chargement du blog
    -   Installation : `npm install hexo-optimize`
    -   Configuration détaillée : [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Plus de plugins : [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Sauvegarde des fichiers source

-   N'oubliez pas de bien sauvegarder vos fichiers source locaux, en particulier vos fichiers Markdown. Si vous perdez d'autres configurations, vous ne pourrez plus écrire sur votre blog normalement et devrez tout reconfigurer depuis le début.
-   Il est recommandé d'utiliser le même dépôt GitHub pour la sauvegarde.
-   Il est conseillé de sauvegarder après chaque modification, ou au moins une fois par jour.
-   Pour plus d'informations, consultez la [documentation Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Ajoutez l'adresse du dépôt de votre blog précédemment configurée
git remote add https://github.com/your-name/your-name.github.io.git

# Ajoutez et enregistrez les modifications actuelles, avec un message
git add .
git commit -m "Mise à jour des fichiers source"

# Créez et basculez vers une nouvelle branche
git checkout -b source

# Poussez tout le contenu de la branche 'source' locale vers la branche 'source' du dépôt distant
git push origin source:source
```

### Écrire votre blog depuis différents ordinateurs
-   Lorsque vous souhaitez écrire sur votre blog depuis un autre ordinateur, vous devrez d'abord installer les logiciels de base, puis cloner le dépôt GitHub sauvegardé en local pour mettre à jour votre blog.

*   Téléchargez et installez Node.js ([téléchargement officiel](https://nodejs.org/en/))
*   Téléchargez et installez Git ([téléchargement officiel](https://git-scm.com/downloads))
*   Installation du framework Hexo : Ouvrez votre invite de commandes (CMD) et exécutez :

 ```bash
 npm install -g hexo-cli
```
*   Mettre à jour en local

```bash
# Clonez le dépôt en local
git clone https://github.com/your-name/your-name.github.io.git

# Si le dépôt est déjà cloné localement, tirez toujours le contenu de la dernière branche avant de mettre à jour le blog
git pull origin

# Basculez vers la branche correspondante
git checkout source

# Installez tous les plugins configurés pour Hexo avant de commencer à éditer le contenu du blog
npm install

# Après avoir modifié le contenu, n'oubliez pas de sauvegarder rapidement
git add .
git commit -m "Mise à jour du blog xxx"
git push origin source:source

# Publiez les dernières mises à jour du blog sur le site de domaine
hexo clean
hexo g  // Génère les fichiers statiques
hexo s  // Prévisualise le blog en local
hexo d  // Publie le dernier contenu du blog
```

### Récapitulatif des commandes courantes

 ```bash
hexo g
// ou hexo generate, génère les pages statiques à partir des fichiers source
hexo d
// ou hexo deploy, publie et déploie sur GitHub Pages
hexo s
// ou hexo server, déploie et teste en local
hexo clean
// Vide le cache des pages statiques, puis hexo d les regénère
