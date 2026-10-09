---
layout: blog
title: "Comment passer sous les 30 secondes au Rubik's Cube sans mémoriser d'algorithmes : même les enfants peuvent comprendre"
date: 2026-10-09 12:00:00
tags:
  - Rubik's Cube
  - tutoriel
  - méthode Roux
  - speedcubing
  - pratique délibérée
categories: 日常折腾
description: "Il m'a fallu 89 jours pour passer de ma première résolution à une moyenne de 100 (Ao100) sous les 30 secondes, sans apprendre un seul algorithme CFOP. J'analyse ici 4441 données de chronométrage pour décomposer quatre phases : où l'on bloque à chaque étape, quoi pratiquer, et pourquoi la méthode Roux ne nécessite pas de mémorisation d'algorithmes."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Les quatre phases, de 165 secondes à 28 secondes" />
</figure>

*Figure : Les quatre phases, de 165 secondes à 28 secondes. La phase deux a vu la baisse la plus rapide, tandis que la phase trois a été le plus long plateau.*

Dans mon précédent article, [« Comment résoudre le Rubik's Cube sans mémoriser d'algorithmes »](/fr/blog/solve-rubiks-cube-without-formulas/), vous avez appris à résoudre un Rubik's Cube sans algorithmes, en vous basant sur la logique des commutateurs. Cet article a reçu un accueil très enthousiaste de la part de nombreuses personnes.

Si vous avez suivi ces conseils, vous devriez maintenant être capable de résoudre le cube en deux ou trois minutes, même si c'est encore un peu maladroit. Mais une nouvelle question va sans doute surgir : comment aller plus vite ?

Si vous cherchez « speedcubing » en ligne, tous les tutoriels vous diront la même chose : pour passer sous les 30 secondes, vous devez d'abord mémoriser les algorithmes CFOP. 41 pour le F2L, 57 pour l'OLL et 21 pour le PLL, soit un total de 119. Même si vous faites le F2L de manière intuitive, les 78 algorithmes pour la dernière couche sont incontournables. Pas de mémorisation, pas de vitesse.

Cet article a pour but de vous prouver que vous pouvez passer sous les 30 secondes sans mémoriser le moindre algorithme.

<!--more-->

Il m'a fallu 89 jours, du 7 mai 2026, date de ma première résolution, au 4 août, pour atteindre une moyenne de 100 résolutions (Ao100) sous les 30 secondes. Pendant cette période, je n'ai pas appris un seul algorithme CFOP ; je me suis simplement amusé pendant mon temps libre. Voici les données de chronométrage de mes 4441 résolutions enregistrées.

![Courbe de performance sur 4441 résolutions](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figure : Courbe de performance sur 4441 résolutions. La ligne grise représente chaque temps de résolution, la ligne foncée est la tendance de l'Ao100, et les points rouges indiquent les moments où un record personnel a été battu. Mon meilleur Ao100 est de 28,22 secondes.*

Avec une pratique consciente et active, et en maintenant une fréquence régulière, n'importe qui peut passer de zéro à sub-30 en quelques mois.

Que signifie « sous les 30 secondes » ? Lors du [premier Championnat du Monde de Rubik's Cube en 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), le temps du vainqueur était de 22,95 secondes, ce qui a été reconnu rétroactivement par la WCA comme le premier record du monde officiel ; le 10e temps était de 29,11 secondes, réalisé par Jessica Fridrich elle-même, l'inventrice de la méthode CFOP dont nous parlerons plus tard. En d'autres termes, un temps sous les 30 secondes, atteint aujourd'hui par un amateur après quelques mois de pratique, lui aurait valu une place dans le top 10 mondial en 1982.

Je vais maintenant vous partager, étape par étape, comment j'y suis parvenu, et vous transmettre ma méthode d'entraînement complète.

## Pourquoi le monde du speedcubing ne jure que par la mémorisation d'algorithmes

Commençons par clarifier une chose : pourquoi « rapidité » et « mémorisation d'algorithmes » sont-ils si liés dans l'esprit de tous ?

Au début des années 1980, la professeure tchéco-américaine Jessica Fridrich (qui a ensuite fait de la criminalistique numérique à l'Université de Binghamton aux États-Unis) a mis au point une méthode de résolution par couches, qui sera plus tard appelée CFOP (Cross, F2L, OLL, PLL). L'idée de cette méthode est d'énumérer toutes les situations possibles pour la dernière couche et d'associer un algorithme optimal à chaque cas. Vous reconnaissez la situation, exécutez l'algorithme, sans avoir à réfléchir.

![Jessica Fridrich et son Rubik's Cube dans son bureau](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figure : Jessica Fridrich et son Rubik's Cube dans son bureau. En 1982, elle a terminé 10e au premier Championnat du Monde avec 29,11 secondes, et la méthode CFOP porte son nom (Fridrich Method).*

Cette méthode est extrêmement rapide. Presque tous les records du monde sont réalisés avec CFOP. C'est pourquoi tous les tutoriels l'enseignent, toutes les vidéos en parlent, et « apprendre le speedcubing » est devenu synonyme de « apprendre CFOP », ce qui, à son tour, signifie mémoriser 119 algorithmes.

Mais attention, la « mémorisation d'algorithmes » est une caractéristique de la méthode CFOP, et non de la « rapidité » en soi. Si CFOP exige cette mémorisation, c'est parce qu'elle a choisi la voie de l'énumération exhaustive. L'énumération exige de la mémoire, et c'est le prix à payer.

Existe-t-il des méthodes qui ne suivent pas cette voie d'énumération exhaustive ? Oui.

## La méthode sans algorithmes : la méthode Roux

En 2003, le Français Gilles Roux a dévoilé une approche complètement différente. Au lieu d'empiler couche par couche, il s'agit d'abord de construire deux « blocs » 1×2×3 (le premier et le second bloc), puis de résoudre les quatre coins de la couche supérieure, et enfin de ne laisser que six arêtes, à finir avec des rotations de la couche M et de la couche U.

![Gilles Roux en compétition](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figure : Gilles Roux en compétition. Tiré d'une ancienne vidéo de compétition, l'image a été restaurée et agrandie par IA.*

Dans l'article précédent, nous avons déjà résolu le cube en utilisant ce cadre. Revoyons ici les quatre étapes, en nous concentrant cette fois sur ce qu'il faut mémoriser à chaque étape :

| Étape | Contenu | Algorithmes à mémoriser |
| --- | --- | --- |
| 1. Premier bloc (FB) | Construire un bloc 1×2×3 | 0, observation pure |
| 2. Second bloc (SB) | Construire le second bloc symétriquement | 0, observation pure |
| 3. CMLL | Orienter et permuter les quatre coins de la couche supérieure | 9, tous peuvent être dérivés de cycles de 3 coins |
| 4. LSE | Les six dernières arêtes | 0, utilise uniquement les rotations des couches U et M |

Sur les quatre étapes, trois ne nécessitent aucun algorithme. Pour le CMLL, le seul qui en demande, il y a 42 cas au total, mais vous n'avez pas besoin de 42 algorithmes. Le cycle de 3 coins R U' L' U R' U' L U, que nous avons vu dans l'article précédent, ainsi que son miroir et quelques variantes, peuvent couvrir toutes les situations, juste un peu plus lentement.

![Les quatre étapes de la méthode Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figure : Les quatre étapes de la méthode Roux, montrant uniquement les blocs déjà résolus à la fin de chaque étape : Premier bloc → Second bloc → CMLL (quatre coins supérieurs) → LSE (six dernières arêtes). Tiré du panneau « Méthode » de ma page de Rubik's Cube 3D.*

Voilà pourquoi la méthode Roux permet de ne pas mémoriser d'algorithmes : elle concentre la partie à mémoriser dans un coin très restreint, laissant le reste à l'observation, à la compréhension et à la maîtrise.

## De 165 secondes à 28 secondes : les quatre phases

Voici le chemin que j'ai réellement parcouru. Pour chaque phase, j'ai indiqué le début et la fin avec des données, puis j'ai expliqué où je me suis bloqué et ce que j'ai pratiqué. Vos blocages peuvent être différents des miens, mais l'ordre sera très probablement le même.

![Étendue temporelle des quatre phases](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figure : Étendue temporelle des quatre phases. Phase un : 3 semaines, phase deux : 11 jours, phase trois : deux mois, phase quatre : jusqu'à présent.*

### Phase un : 165 secondes → 60 secondes (Semaines 1-3)

**Données** : Du 7 mai au 27 mai. Moyenne de 165 secondes la première semaine, 68 secondes la troisième semaine.

**Où je me suis bloqué** : Le premier bloc était très peu maîtrisé, chaque paire coin-arête me prenait beaucoup de temps à trouver. De plus, les débutants ont souvent tendance à s'arrêter pour observer après avoir trouvé une paire.

![Où les débutants passent leur temps](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figure : Où les débutants passent leur temps. Les mains sont à l'arrêt, les yeux cherchent sur le cube ; le temps de « recherche » est plusieurs fois supérieur au temps de « rotation ».*

**Ce que j'ai pratiqué** :

Le plus grand ennemi à ce stade n'est pas la lenteur des mains, mais la lenteur des yeux. Vous passez beaucoup plus de temps à « chercher » qu'à « tourner ». Donc :

- Maintenez une position d'observation fixe, sans faire de rotations du cube. Comme mentionné dans l'article précédent, l'angle d'observation pour la méthode Roux est fixe. À ce stade, l'objectif est d'acquérir le réflexe de « ne pas faire de rotations du cube ». Chaque fois que vous avez envie de tourner le cube, arrêtez-vous et demandez-vous : puis-je voir la pièce dont j'ai besoin depuis cet angle ?
- Entraînement lent. Ne chronométrez pas, mais assurez-vous que les mouvements sont continus, sans aucune pause. Chaque mouvement peut être très lent, mais ne doit pas s'arrêter. L'essentiel est que pendant que vos mains exécutent le mouvement précédent, vos yeux doivent se concentrer sur le mouvement suivant. C'est le cœur de l'entraînement lent. Cela peut sembler ralentir, mais en réalité, cela entraîne vos yeux à voir la relation entre la position d'une pièce et sa destination.
- Ne pratiquez que le premier bloc. Mélangez, construisez le premier bloc, mélangez à nouveau, construisez le premier bloc à nouveau. Ne passez pas aux étapes suivantes. Le premier bloc est l'étape la plus libre de la méthode Roux, et celle qui entraîne le plus l'observation.

N'apprenez aucun nouvel algorithme à ce stade. Votre blocage actuel n'est pas lié aux algorithmes.

### Phase deux : 60 secondes → 40 secondes (Semaines 4-5)

**Données** : Du 27 mai au 7 juin, 11 jours. C'est la période où ma vitesse a le plus progressé, et aussi celle où j'ai le plus pratiqué : 723 résolutions la première semaine de juin.

**Où je me suis bloqué** : Mouvements saccadés. Le cube se bloque.

**Ce que j'ai pratiqué** :

À ce stade, vous devez optimiser les mouvements de chaque étape et, sur la base de la compréhension, augmenter la fluidité de chaque mouvement.

- Second bloc (SB). Le second bloc est plus difficile que le premier car l'espace disponible est réduit de moitié, et il ne faut pas détruire le premier bloc déjà construit. Les rotations clés sont R, r (les deux couches droites), M et U. À ce stade, vous devez apprendre à utiliser r et M pour déplacer les pièces au lieu de R, afin que le premier bloc ne soit jamais détruit. Optimiser les étapes de mouvement, c'est gagner du temps. Par exemple, tourner trois fois dans le sens horaire équivaut à tourner une fois dans le sens anti-horaire.
- Maîtriser la couche M. La dernière étape de la méthode Roux utilise exclusivement les couches M et U ; la fluidité de vos M-moves détermine directement votre limite inférieure de vitesse. Utilisez votre annulaire ou votre majeur pour pousser la couche M, et commencez à pratiquer des rythmes comme M' U M' U.
- Reconnaissance des formes CMLL. Dans l'article précédent, nous avons « découvert par tâtonnement » les quatre coins à l'aide de cycles de 3 coins. Maintenant, il faut commencer par observer avant d'agir : avant de tourner la couche supérieure, jetez un coup d'œil à l'orientation jaune des quatre coins pour déterminer s'il y a 0, 1, 2 ou 4 coins bien orientés, puis exécutez directement l'algorithme correspondant. Vous pouvez également, avec un très petit nombre d'algorithmes, obtenir une amélioration significative de l'efficacité, ce qui est très rentable. La plupart de ces algorithmes n'ont pas besoin d'être mémorisés par cœur, mais plutôt d'être exécutés et compris.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Vue lors de la construction du second bloc" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figure gauche : Vue lors de la construction du second bloc. Le premier bloc est terminé ; utilisez uniquement les rotations R, r, M, U pour insérer les paires coin-arête du côté droit, le premier bloc ne sera jamais touché. Figure droite : M' U M, la séquence de mouvements la plus utilisée dans la seconde moitié de la méthode Roux. La couche M monte, la couche U tourne, la couche M redescend, trois mouvements pour échanger une paire d'arêtes entre la couche supérieure et la couche M.*

Vous pouvez consulter ma [base de données d'algorithmes de la méthode Roux](/fr/projects/rubiks-cube/roux#cmll). La page CMLL est en deux étapes : 7 algorithmes d'orientation + 2 algorithmes de permutation, soit un total de 9. C'est le choix le plus rentable pour gagner en vitesse, très facile à apprendre, et chaque ensemble maîtrisé peut vous faire gagner environ 1 à 2 secondes. Avec un peu de pratique, vous les maîtriserez rapidement, et certains ont déjà été présentés dans l'article précédent. Vous n'avez pas besoin de tous les mémoriser pour passer sous les 30 secondes.

![Première étape du CMLL en deux phases, sept orientations de coins](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figure : Première étape du CMLL en deux phases, sept orientations de coins. Dans la vue de dessus, le jaune est la couleur de la face supérieure, et les petites barres extérieures indiquent l'orientation de la couleur supérieure de ce coin sur le côté. Identifiez la forme en fonction du nombre de coins jaunes : 0 est H ou Pi, 1 est S ou AS, 2 est U, T ou L.*

Une fois la face jaune alignée, vous pouvez utiliser ces deux algorithmes pour aligner les couleurs latérales des coins.

Si une face a déjà des couleurs uniformes, par exemple le rouge est déjà sur la même face, faites-la pivoter vers la gauche, puis vous pouvez choisir l'algorithme d'échange adjacent. Si aucune face n'a de couleurs uniformes, choisissez l'algorithme d'échange diagonal.

![Deuxième étape du CMLL en deux phases, deux positions de coins](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figure : Deuxième étape du CMLL en deux phases, deux positions de coins. À gauche, les couleurs rouges des deux coins de gauche sont déjà alignées, utilisez l'échange adjacent ; à droite, aucune face n'est alignée, utilisez l'échange diagonal.*

Vous pouvez comprendre chaque algorithme en pratiquant beaucoup de résolutions lentes ; ne les considérez pas comme des formules, mais plutôt comme des séquences de mouvements fixes que vous pourriez découvrir par vous-même avec de l'observation et de la réflexion. Cependant, les lister ici vous fera gagner du temps.

Une autre chose, plus efficace que n'importe quel entraînement : investissez dans un nouveau Rubik's Cube. Si vous utilisez toujours un vieux cube qui cliquette et se bloque, achetez un 3x3 moderne avec des aimants. Les cubes les plus récents vous feront ressentir la puissance de l'ingénierie optimisée : rotation fluide, alignement automatique, presque aucun blocage. Le simple fait de changer de cube peut améliorer votre moyenne de 15 secondes d'un coup. Le choix offrant le meilleur rapport qualité-prix est le [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), autour de vingt dollars, suffisant pour aller jusqu'à sub-20.

### Phase trois : 40 secondes → 30 secondes (Semaines 5-13, deux mois)

**Données** : Du 7 juin au 4 août. Mon Ao100 est passé de 39,8 secondes à 29,9 secondes, ce qui a pris 58 jours. À ce stade, il était possible d'obtenir occasionnellement des temps sous les 30 secondes, mais seulement avec beaucoup de chance. Et à mesure que le temps de résolution moyen diminue, la difficulté de gagner une seconde supplémentaire augmente de manière exponentielle.

![Moyenne quotidienne des performances](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figure : Moyenne quotidienne des performances. Après la mi-juin, la courbe est restée presque plate, stagnante entre 30 et 40 secondes pendant deux mois.*

C'est le plateau. Tout le monde le rencontre, et j'y suis resté deux mois.

**Où je me suis bloqué** : La résolution des six dernières arêtes de la couche supérieure était très lente, je ne comprenais pas la logique et je me fiais à des essais et erreurs répétés, ce qui me faisait perdre beaucoup de temps. Le premier et le second bloc n'étaient toujours pas assez fluides.

**Ce que j'ai pratiqué** :

- Reconnaissance de l'orientation des arêtes (EO). Comme mentionné précédemment, il n'y a que quelques cas d'arêtes mal orientées : 0, non 0 et non 4, 4 (2 en haut, 2 en bas), 4 (toutes en haut), 4 (3 en haut, 1 en bas). L'objectif à ce stade est de pouvoir, au moment où les blocs sont construits, identifier d'un coup d'œil le nombre d'arêtes mal orientées, sans avoir à les compter. La méthode de pratique consiste à mélanger le cube, à résoudre jusqu'à la fin du CMLL, puis à faire une pause, à énoncer le nombre d'arêtes mal orientées, puis à continuer.
- Beaucoup de gens ne comprennent pas les mouvements à ce stade. La phase EO vise finalement à construire la configuration en flèche (3 en haut, 1 en bas), car la configuration complète, après un seul mouvement, est déjà une configuration en flèche. Par conséquent, en pensant à l'envers, c'est la dernière étape avant la résolution complète. Donc, quel que soit le nombre d'arêtes mal orientées, l'objectif final est de construire une flèche. Si 4 arêtes sont mal orientées en haut, échangez une paire d'arêtes entre le haut et le bas pour en faire descendre une et obtenir la flèche. Si 2 en haut et 2 en bas, échangez une paire d'arêtes entre le haut et le bas pour en faire monter une et obtenir la flèche. S'il y en a 1 en haut et 1 en bas, ou 2 en haut, utilisez M' U M pour d'abord atteindre les situations précédentes, puis construire la flèche. Vous pouvez explorer et découvrir les meilleures étapes pour 1/1 par vous-même grâce à une observation et une réflexion approfondies.
- Pratiquez intensivement le look-ahead. C'est l'étape la plus importante, et la plus contre-intuitive, pour passer de 40 à 30 secondes : tournez un peu plus lentement, mais regardez plus loin. Lorsque vous construisez le premier bloc, ne regardez pas la pièce que vous êtes en train d'insérer, mais cherchez la prochaine. Cela sera très étrange au début, vos temps se dégraderont, mais si vous persévérez une semaine, cela s'améliorera soudainement.
- CMLL sans hésitation. Si vous devez réfléchir à chaque mouvement avant de l'exécuter, c'est qu'il n'est pas encore acquis. Pratiquez chaque mouvement individuellement 50 fois, jusqu'à ce que vos mains bougent dès que vous reconnaissez la forme.

![Configuration en flèche](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figure : Configuration en flèche. Trois arêtes mal orientées (surlignées en cyan) forment une flèche pointant vers l'arête mal orientée de la couche inférieure. À ce stade, un M' U M peut orienter les quatre arêtes simultanément. [Ouvrir cet état dans le cube 3D](/fr/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) permet de le visualiser pas à pas.*

![Les six cas d'orientation des arêtes (EO)](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figure : Les six cas d'orientation des arêtes (EO). L'étiquette en haut à gauche indique le nombre d'arêtes mal orientées (haut / bas), le jaune représente les arêtes bien orientées, et les cadres cyan les arêtes mal orientées. Seule la configuration en flèche nécessite un algorithme, les cinq autres sont d'abord transformées en flèche.*

Pour la résolution des arêtes gauche et droite, en considérant le jaune comme le haut, le blanc comme le bas, et le premier bloc comme le rouge, il faut ensuite positionner l'arête jaune-rouge + l'arête jaune-orange (surlignées). L'idée principale est de faire descendre l'arête jaune-rouge vers la face inférieure par échange d'arêtes haut/bas, et de même pour l'arête jaune-orange. Une fois les deux arêtes sur la face inférieure et opposées, tournez la face supérieure à la position appropriée, et un M2 U ou M2 U' permettra de résoudre les arêtes gauche et droite de la couche U.

Pour vous aider à mieux comprendre, j'ai organisé les six cas d'EO sur la [page LSE de la base de données d'algorithmes de la méthode Roux](/fr/projects/rubiks-cube/roux#lse). En cliquant sur « Voir les détails » pour chaque image, vous ouvrirez l'état correspondant dans le cube 3D, avec les arêtes mal orientées automatiquement surlignées. La même page contient également tous les cas pour la permutation UL/UR et les quatre dernières arêtes.

Une diminution du volume d'entraînement à ce stade n'est pas une mauvaise chose. Le plateau ne se surmonte pas en accumulant les résolutions, mais en corrigeant une mauvaise habitude spécifique. Mon expérience est de n'en changer qu'une à la fois.

### Phase quatre : 30 secondes → 28 secondes (Après la 13e semaine)

**Données** : Après le 4 août. Le nombre d'entraînements enregistrés pour tout le mois de septembre est de 122, mais en réalité, de nombreux entraînements n'ont pas été enregistrés. J'ai intégré le cube à ma vie quotidienne, le prenant comme un jouet de bureau, le manipulant quand je suis de bonne humeur, quand je suis stressé ou anxieux, pendant les pauses au travail, ou quand je m'ennuie. Mon Ao100 a progressivement diminué de 29,9 à 28,2 secondes.

**Où je me suis bloqué** : Pas de blocage précis, juste un manque de fluidité.

**Ce que j'ai pratiqué** :

Si votre vitesse moyenne est toujours supérieure à 30 secondes, la seule chose que vous devez faire est de continuer à pratiquer intensivement, et non d'apprendre de nouveaux algorithmes.

Continuez à pratiquer le look-ahead avec des résolutions lentes, et vous deviendrez de plus en plus rapide.

Prenez votre cube pour jouer n'importe quand, n'importe où, gardez-le à portée de main, par exemple sur votre bureau, pour pouvoir y jouer pendant vos pauses. Vous pouvez également enregistrer régulièrement vos résolutions pour identifier les phases où vous perdez le plus de temps, puis optimiser spécifiquement ces points. C'est cela, la pratique délibérée : votre vitesse de progression ne dépend pas du nombre total de vos entraînements ordinaires, mais du nombre de vos pratiques délibérées.

Vous découvrirez alors qu'après avoir surmonté le plateau des 30-35 secondes, votre vitesse franchira un nouveau palier.

Félicitations si vous atteignez ce stade, car aux yeux des débutants, vous êtes déjà un joueur très impressionnant !

## Le prix à payer pour ne pas mémoriser d'algorithmes

Cela dit, il faut être honnête. Ne pas mémoriser d'algorithmes n'est pas sans inconvénients.

La phase CMLL est plus lente. Les 42 cas sont couverts par 9 algorithmes, ce qui signifie que certaines situations doivent être résolues en deux fois. Ceux qui maîtrisent tous les CMLL sont deux à trois secondes plus rapides que moi à cette étape.

La technique des M-moves est plus exigeante. La seconde moitié de la méthode Roux repose entièrement sur les M-moves, qui sont plus difficiles à exécuter que R ou U, ont tendance à se bloquer, et exigent un cube de meilleure qualité.

Ne vous inquiétez pas de la limite supérieure. Des compétiteurs de haut niveau utilisent également la méthode Roux pour atteindre les premières places mondiales ; la méthode elle-même n'a pas de limite. Cependant, pour passer sous les 15 secondes, vous devrez très probablement maîtriser les 42 algorithmes CMLL. Mais c'est une affaire pour une autre étape. Pour passer sous les 30 secondes, ce n'est pas nécessaire.

De plus, presque tous les joueurs de niveau mondial pratiquant la résolution à une main utilisent la méthode Roux, car elle est vraiment très bien adaptée à cette pratique.

**Les meilleurs temps officiels (WCA) avec la méthode Roux :**

- Single : 4,11 secondes, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Philippines), Valenzuela Cubing Open 2023, reconnu comme le single officiel le plus rapide en Roux ([vidéo de reconstruction](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Moyenne : 5,98 secondes, également lui, en 2019, à l'époque record d'Asie, et le troisième sub-6 officiel de l'histoire ([profil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- Il est également le [détenteur du record du monde à une main](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record) : moyenne 8,09, single 6,05 (2024). Dans la communauté OH, la méthode Roux est généralement considérée comme la solution optimale.

Je trouve ce compromis très avantageux. En échange de deux ou trois secondes supplémentaires au CMLL, vous obtenez : savoir exactement ce que vous faites à chaque étape, ne pas oublier la méthode même après trois mois sans toucher un cube, et pouvoir déduire une solution pour n'importe quel cube inconnu.

## Résumé

![Résolution terminée](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Passer de la simple résolution à moins de 30 secondes n'est pas un processus de mémorisation d'algorithmes, mais un entraînement de la coordination entre vos mains, vos yeux et votre cerveau.

Quatre phases, quatre choses à maîtriser : d'abord, apprendre à observer sans faire de rotations du cube ; ensuite, apprendre à construire le second bloc sans défaire le premier ; puis, apprendre à anticiper le mouvement suivant tout en exécutant le mouvement actuel ; enfin, laisser la main suivre le regard.

Les algorithmes ne sont pas la source de la vitesse. L'observation l'est.

Apprenez à construire un feedback positif grâce aux progrès de chaque étape ; même la pratique de la fluidité peut être moins monotone, surtout lorsque vous découvrez la surprise de battre à nouveau votre record. Surtout aux niveaux débutant et intermédiaire, vous ressentirez chaque jour la joie de battre vos records.

Tous les algorithmes et cas mentionnés dans cet article sont regroupés dans ma [base de données d'algorithmes de la méthode Roux](/fr/projects/rubiks-cube/roux). N'hésitez pas à la consulter si vous êtes bloqué.

Le monde du Rubik's Cube est infini en plaisir, amusez-vous bien.

## Annexe 1 : Liste d'exercices par phase

**Phase un (> 60 secondes)**

- Maintenir une position d'observation fixe, ne pas faire de rotations du cube pendant toute la résolution
- Trouver la prochaine couleur désirée sans pause
- Entraînement lent, énoncer votre intention à chaque étape
- Ne pratiquer que le premier bloc, répéter 50 fois

**Phase deux (60 → 40 secondes)**

- Construire le second bloc uniquement avec R, r, M, U, sans toucher le premier bloc
- Pratiquer le CMLL en deux phases
- Pratiquer le rythme M' U M' U, 5 minutes par jour

**Phase trois (40 → 30 secondes)**

- S'arrêter à la fin du CMLL et identifier d'un coup d'œil le nombre d'arêtes mal orientées
- Entraînement lent + look-ahead : les yeux doivent toujours anticiper le prochain bloc/pièce
- Au moins 20 résolutions de haute qualité par jour

**Phase quatre (< 30 secondes)**

- Enregistrer des vidéos pour identifier les pauses
- Finger tricks : R U R' U' avec un seul doigt, M-moves avec l'annulaire
- 20 résolutions de haute qualité par jour, sans se contenter d'accumuler les résolutions

## Annexe 2 : Outils

- **csTimer** : [cstimer.net](https://cstimer.net/). Activez les statistiques Ao5 / Ao12 / Ao100 ; votre Ao100 représente votre véritable niveau, les temps individuels sont une question de chance.
- **Rubik's Cube 3D** : [philoli.com/zh/projects/rubiks-cube](/fr/projects/rubiks-cube/). Tous les algorithmes de cet article peuvent être entrés ici pour voir l'animation.
- **Base de données d'algorithmes de la méthode Roux pour débutants** : [philoli.com/zh/projects/rubiks-cube/roux](/fr/projects/rubiks-cube/roux). Techniques d'insertion courantes pour le premier et le second bloc, les 9 algorithmes du CMLL en deux phases, tous les cas du LSE (EO, UL/UR, les quatre dernières arêtes). Chaque cas peut être ouvert dans le cube 3D, masquant automatiquement les blocs non pertinents et mettant en évidence les arêtes à manipuler.
- **Analyseur d'entraînement csTimer** : [philoli.com/zh/projects/rubiks-cube/analyzer](/fr/projects/rubiks-cube/analyzer). Faites glisser le fichier exporté de csTimer pour visualiser l'évolution de vos performances, les courbes Ao5/Ao12/Ao100, la progression de vos records personnels (PB), un tableau des jalons (premier sub-60, sub-40, sub-30 et la date) et la courbe d'apprentissage selon la loi de puissance. Toutes les figures de cet article proviennent de cet outil. Les données sont traitées uniquement dans votre navigateur et ne sont pas téléchargées. Si vous n'avez pas de fichier exporté, vous pouvez charger mes 4441 données pour voir le résultat.

*Cet article contient des liens d'affiliation Amazon : si vous achetez via ces liens, je recevrai une petite commission, sans que cela n'affecte votre prix.*

## Pour aller plus loin

- [Comment résoudre le Rubik's Cube sans mémoriser d'algorithmes : même les enfants peuvent comprendre](/fr/blog/solve-rubiks-cube-without-formulas)
