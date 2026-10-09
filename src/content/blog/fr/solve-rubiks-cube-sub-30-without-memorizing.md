---
layout: blog
title: "Comment descendre sous les 30 secondes au Rubik's Cube sans formules : Compréhensible par les enfants"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Il m'a fallu 89 jours pour passer de ma première résolution à un Ao100 sous les 30 secondes, sans mémoriser une seule formule CFOP. J'analyse mes 4441 temps de résolution pour décomposer les quatre étapes : où l'on bloque, quoi pratiquer à chaque étape, et pourquoi la méthode Roux Bridge ne nécessite pas de mémoriser de formules."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="从 165 秒到 28 秒的四个阶段" />
</figure>

*Figure : Les quatre étapes pour passer de 165 à 28 secondes. La deuxième étape a vu la progression la plus rapide, tandis que la troisième a été la plus longue période de plateau.*

Dans mon précédent article, [« Comment résoudre le Rubik's Cube sans formules »](/zh/blog/solve-rubiks-cube-without-formulas/), vous avez appris à résoudre un Rubik's Cube sans mémoriser de formules, en utilisant la logique des commutateurs. Cet article a été très bien reçu.

Si vous avez suivi ces conseils, vous devriez maintenant être capable de le résoudre en deux ou trois minutes, même si c'est encore un peu désordonné. Mais une nouvelle question se pose : comment aller plus vite ?

Si vous cherchez « speedcubing Rubik's Cube », tous les tutoriels vous diront la même chose : pour descendre sous les 30 secondes, vous devez d'abord mémoriser les formules CFOP. 41 formules pour le F2L, 57 pour l'OLL, 21 pour le PLL, soit 119 formules au total. Même si vous faites le F2L intuitivement, les 78 formules des dernières couches sont inévitables. Pas de mémorisation, pas de vitesse.

Cet article a pour but de vous prouver que vous pouvez passer sous les 30 secondes sans mémoriser la moindre formule.

<!--more-->

J'ai commencé à résoudre le Rubik's Cube le 7 mai 2026 et j'ai atteint un Ao100 sous les 30 secondes le 4 août, soit 89 jours plus tard. Durant cette période, je n'ai mémorisé aucune formule CFOP, je me suis contenté de jouer pendant mon temps libre. Voici les données de mes 4441 résolutions chronométrées.

![4441 次复原的成绩曲线](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figure : Courbe de mes 4441 temps de résolution. La ligne grise représente chaque temps individuel, la ligne foncée la tendance de l'Ao100, et les points rouges les moments où j'ai battu mon record personnel. Mon meilleur Ao100 est de 28,22 secondes.*

Avec une pratique consciente et régulière, n'importe qui peut passer de zéro à sub-30 en quelques mois.

Que signifie passer sous les 30 secondes ? Au [premier Championnat du Monde de Rubik's Cube en 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), le champion a réalisé 22,95 secondes, un temps qui a ensuite été reconnu par la WCA comme le premier record du monde officiel ; la 10ème place était de 29,11 secondes, un exploit réalisé par Jessica Fridrich elle-même, la créatrice du CFOP dont nous parlerons dans la section suivante. En d'autres termes, un amateur d'aujourd'hui, après quelques mois de pratique, pourrait atteindre un temps sub-30 qui l'aurait classé dans le top 10 mondial en 1982.

Je vais maintenant partager avec vous, étape par étape, comment j'y suis parvenu, et vous transmettre l'intégralité de ma méthode d'entraînement.

## Pourquoi le monde du speedcubing mémorise-t-il des formules ?

Commençons par une question simple : pourquoi la vitesse et la mémorisation de formules sont-elles si étroitement liées dans l'esprit de tous ?

Au début des années 1980, la professeure d'origine tchèque Jessica Fridrich (qui a ensuite travaillé sur la criminalistique numérique à l'Université de Binghamton, aux États-Unis) a développé une méthode de résolution par couches, connue sous le nom de CFOP (Cross, F2L, OLL, PLL). L'idée de cette méthode est de recenser toutes les configurations possibles de la dernière couche et d'attribuer une formule optimale à chacune. Il suffit alors de reconnaître la configuration et d'exécuter la formule, sans avoir à réfléchir.

![Jessica Fridrich 和她办公室里的魔方](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figure : Jessica Fridrich et son Rubik's Cube dans son bureau. En 1982, elle a terminé 10ème au premier Championnat du Monde avec 29,11 secondes. Le CFOP est nommé d'après elle (Méthode Fridrich).*

Cette méthode est incroyablement rapide. Presque tous les records du monde sont réalisés avec le CFOP. C'est pourquoi tous les tutoriels et vidéos l'enseignent, et « apprendre le speedcubing » est devenu synonyme de « apprendre le CFOP », ce qui implique de mémoriser 119 formules.

Mais attention : la « mémorisation de formules » est une caractéristique propre à la méthode CFOP, et non à la vitesse elle-même. Si le CFOP exige de mémoriser, c'est parce qu'il a choisi la voie de l'énumération exhaustive. Cette énumération requiert de la mémoire, et c'est le prix à payer.

Existe-t-il des méthodes qui n'empruntent pas cette voie de l'énumération exhaustive ? Oui.

## La méthode sans formules : Roux Bridge

En 2003, le Français Gilles Roux a dévoilé une approche radicalement différente. Au lieu de construire couche par couche, il s'agit d'abord de construire deux « blocs » 1×2×3, un à gauche et un à droite, puis de s'occuper des quatre coins de la dernière couche, et enfin de résoudre les six arêtes restantes en n'utilisant que les mouvements de la couche du milieu (M) et de la couche supérieure (U).

![Gilles Roux 在比赛中](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figure : Gilles Roux en compétition. Extrait d'une ancienne vidéo de compétition, l'image a été restaurée et agrandie par IA.*

Dans l'article précédent, nous avons déjà résolu le cube une fois avec cette structure. Revoyons ici ses quatre étapes, en nous concentrant cette fois sur ce qu'il faut mémoriser à chaque étape :

| Étape | Contenu | Formules à mémoriser |
| --- | --- | --- |
| 1. Bloc gauche (FB) | Construire un bloc 1×2×3 | 0, pure observation |
| 2. Bloc droit (SB) | Construire l'autre bloc symétriquement | 0, pure observation |
| 3. CMLL | Placer les quatre coins de la dernière couche | 9, toutes dérivables du 3-cycle |
| 4. LSE | Les six dernières arêtes | 0, n'utilisant que les rotations des couches supérieure (U) et médiane (M) |

Sur les quatre étapes, trois ne nécessitent aucune formule. La seule qui en demande, le CMLL, compte 42 cas au total, mais vous n'avez pas besoin de 42 formules. Le 3-cycle de coins (R U' L' U R' U' L U) que nous avons vu précédemment, avec son miroir et quelques variantes, peut couvrir toutes les situations, bien que plus lentement.

![Roux 的四步](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figure : Les quatre étapes de Roux, chaque étape ne montrant que les pièces déjà résolues à ce stade : Bloc gauche → Bloc droit → CMLL (les quatre coins de la dernière couche) → LSE (les six dernières arêtes). Extrait du panneau « Méthode » de ma page de Rubik's Cube 3D.*

C'est pourquoi Roux permet de ne pas mémoriser de formules : la partie qui exige de la mémoire est réduite à un minuscule recoin, le reste est entièrement laissé à l'observation, à la compréhension et à la pratique.

## De 165 à 28 secondes : les quatre étapes

Voici le chemin que j'ai réellement parcouru. Pour chaque étape, j'ai indiqué les données de début et de fin, puis j'ai expliqué où je bloquais et ce que j'ai pratiqué. Vos points de blocage peuvent différer des miens, mais l'ordre sera très probablement le même.

![四个阶段的时间跨度](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figure : Durée des quatre étapes. Étape 1 : 3 semaines, Étape 2 : 11 jours, Étape 3 : 2 mois, Étape 4 : en cours.*

### Étape 1 : 165 secondes → 60 secondes (Semaines 1-3)

**Données** : Du 7 au 27 mai. Moyenne de 165 secondes la première semaine, 68 secondes la troisième semaine.

**Où ça bloque** : Le bloc gauche est très peu maîtrisé, il faut beaucoup de temps pour trouver chaque paire de couleurs. Une fois une paire trouvée, les débutants ont tendance à s'arrêter pour continuer à observer.

![新手的时间都花在哪](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figure : Où les débutants passent leur temps. Les mains sont à l'arrêt, les yeux cherchent sur le cube. Le temps de « chercher » est plusieurs fois supérieur au temps de « tourner ».*

**Que pratiquer** :

Le plus grand ennemi à ce stade n'est pas la lenteur des mains, mais la lenteur des yeux. Vous passez bien plus de temps à « chercher » qu'à « tourner ». Donc :

- Maintenez une position d'observation fixe, ne tournez pas le cube. Comme mentionné précédemment, l'angle d'observation pour Roux est fixe. À ce stade, il faut que le « ne pas retourner le cube » devienne une mémoire musculaire. Chaque fois que vous avez envie de retourner le cube, arrêtez-vous et demandez-vous : puis-je voir la pièce que je cherche depuis cet angle ?
- Tournez lentement (slowturn). Ne chronométrez pas, mais assurez-vous que les mouvements sont fluides et sans aucune pause. Chaque mouvement peut être très lent, mais sans interruption. L'essentiel est que vos yeux anticipent le prochain mouvement pendant que vos mains effectuent le mouvement actuel ; c'est le cœur du slowturn. Cela peut sembler ralentir, mais en réalité, cela entraîne vos yeux à percevoir la relation entre la position actuelle d'une pièce et sa position finale.
- Ne pratiquez que le premier bloc. Mélangez, construisez le bloc gauche, remélangez, reconstruisez le bloc gauche. Ne passez pas aux étapes suivantes. Le premier bloc est l'étape la plus libre de la méthode Roux, et celle qui entraîne le mieux l'observation.

N'apprenez aucune nouvelle formule à ce stade. Votre goulot d'étranglement actuel n'est pas lié aux formules.

### Étape 2 : 60 secondes → 40 secondes (Semaines 4-5)

**Données** : Du 27 mai au 7 juin, 11 jours. C'est la période où la chute des temps a été la plus rapide de tout le processus, et aussi celle où j'ai le plus pratiqué : 723 résolutions la première semaine de juin.

**Où ça bloque** : Mouvements saccadés. Le cube se bloque.

**Que pratiquer** :

À ce stade, vous devez optimiser les mouvements de chaque étape, et, basé sur la compréhension, augmenter la fluidité de chaque action.

- Le deuxième bloc. Le deuxième bloc est plus difficile que le premier, car l'espace est réduit de moitié et le bloc gauche déjà construit ne doit pas être détruit. Les mouvements clés sont R, r (deux couches droites), M, U. À ce stade, vous devez apprendre à utiliser r et M pour déplacer les pièces à la place de R, afin de ne jamais détruire le bloc gauche. Optimiser les séquences de mouvements, c'est gagner du temps. Par exemple, trois rotations dans le sens horaire équivalent à une rotation dans le sens anti-horaire.
- Maîtrisez l'utilisation de la couche M. La dernière étape de Roux n'utilise que M et U, et la fluidité de vos rotations M détermine directement votre limite inférieure. Utilisez l'annulaire ou le majeur pour pousser le M, et commencez à pratiquer des rythmes comme M' U M' U.
- Reconnaissance des cas CMLL. Dans l'article précédent, nous avons "essayé" de placer les quatre coins avec le 3-cycle. Maintenant, il faut commencer à observer avant d'agir : avant de retourner la couche supérieure, jetez un œil à l'orientation jaune des quatre coins pour déterminer s'il y a 0, 1, 2 ou 4 coins bien orientés, puis effectuez directement le mouvement correspondant. Vous pouvez également obtenir une amélioration significative de l'efficacité avec un très petit nombre de formules, ce qui est très rentable. La plupart de ces formules n'ont pas besoin d'être mémorisées par cœur ; il suffit de les comprendre en les pratiquant.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="搭右桥时的视角" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figure gauche : Vue lors de la construction du bloc droit. Le bloc gauche est terminé, et seules les rotations R, r, M, U sont utilisées pour insérer la paire coin-arête du côté droit, sans jamais toucher le bloc gauche. Figure droite : M' U M, l'une des séquences de mouvements les plus utilisées dans la deuxième partie de Roux. La couche médiane monte, la couche supérieure tourne un peu, la couche médiane redescend, échangeant une paire d'arêtes entre la couche supérieure et la couche médiane en trois étapes.*

Vous pouvez consulter ma [bibliothèque de formules de la méthode Roux](/zh/projects/rubiks-cube/roux#cmll). La page CMLL est en deux étapes : 7 formules d'orientation + 2 formules de permutation, soit 9 au total. C'est un choix très efficace pour gagner en vitesse et facile à apprendre ; chaque groupe maîtrisé peut vous faire gagner environ 1 à 2 secondes. Avec un peu de pratique, vous les maîtriserez rapidement, et certaines ont déjà été présentées dans l'article précédent. Vous n'avez pas besoin de toutes les mémoriser pour passer sous les 30 secondes.

![两段式 CMLL 第一步，七种角块朝向](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figure : Première étape du CMLL en deux phases : les sept orientations des coins. Dans la vue de dessus, le jaune est la couleur de la face supérieure orientée vers le haut, et les petites barres extérieures indiquent l'orientation latérale de la couleur supérieure de ce coin. Reconnaissez la forme en fonction du nombre de coins jaunes : 0 = H ou Pi, 1 = S ou AS, 2 = U, T ou L.*

Une fois les jaunes orientés vers le haut, vous pouvez utiliser ces deux formules pour aligner les côtés des coins.

Si une face est déjà de couleur uniforme, par exemple le rouge sur la même face, faites-la pivoter vers la gauche, puis choisissez la formule d'échange adjacent. S'il n'y a aucune face de couleur uniforme, optez pour la formule d'échange diagonal.

![两段式 CMLL 第二步，两种角块位置](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figure : Deuxième étape du CMLL en deux phases : les deux permutations de coins. Sur la figure de gauche, les deux coins rouges sont déjà alignés, utilisez l'échange adjacent ; sur la figure de droite, aucune face n'est alignée, optez pour l'échange diagonal.*

Vous pouvez comprendre chaque ensemble de formules grâce à une pratique intensive du slowturn. Ne les considérez pas comme des formules, mais plutôt comme des séquences de mouvements fixes que vous pourriez découvrir vous-même par l'exploration, mais les lister ici vous fera gagner du temps.

Il y a encore une chose, plus efficace que n'importe quel exercice : investissez dans un nouveau Rubik's Cube. Si vous utilisez toujours un vieux cube qui cliquette et se bloque, achetez un 3x3 moderne avec des aimants. Les cubes les plus récents vous feront ressentir la puissance de l'ingénierie optimisée : rotation fluide, alignement automatique, et pratiquement aucun blocage. Le simple fait de changer de cube peut instantanément améliorer votre temps moyen de 15 secondes. Le meilleur rapport qualité-prix est le [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), autour de vingt dollars, suffisant jusqu'à un sub-20.

### Étape 3 : 40 secondes → 30 secondes (Semaines 5-13, deux mois)

**Données** : Du 7 juin au 4 août. J'ai fait passer mon Ao100 de 39,8 secondes à 29,9 secondes, ce qui m'a pris 58 jours. À ce stade, des temps inférieurs à 30 secondes pouvaient parfois apparaître, mais seulement avec beaucoup de chance. De plus, à mesure que le temps moyen de résolution diminue, la difficulté de gagner 1 seconde augmente de manière exponentielle.

![每日平均成绩](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figure : Temps moyen quotidien. Après la mi-juin, la courbe s'est presque stabilisée, stagnante entre 30 et 40 secondes pendant deux mois.*

C'est la période de plateau. Tout le monde la rencontre, et j'y suis resté deux mois.

**Où ça bloque** : La résolution des six dernières arêtes est très lente. Je ne comprenais pas la logique et perdais beaucoup de temps à essayer encore et encore. Les blocs gauche et droit n'étaient pas encore suffisamment fluides.

**Que pratiquer** :

- Reconnaissance de l'EO (Edge Orientation). Comme expliqué précédemment, il n'y a que quelques cas d'arêtes mal orientées : 0, non-0 et non-4, 4 (2 en haut et 2 en bas), 4 (toutes sur la couche supérieure), 4 (3 en haut et 1 en bas). L'objectif de cette étape est de reconnaître instantanément le cas, sans compter, dès que les blocs sont construits. La méthode consiste à mélanger le cube, à le résoudre jusqu'à la fin du CMLL, puis à faire une pause, à énoncer le nombre d'arêtes mal orientées, puis à continuer.
- Beaucoup de gens ne comprennent pas les mouvements ici. L'étape EO vise finalement à construire la forme de la « flèche » (3 arêtes mal orientées en haut et 1 en bas). Puisque la forme entièrement résolue n'est qu'à un mouvement de la forme de la flèche, en pensant à l'envers, c'est la dernière étape avant la résolution complète. Donc, quel que soit le nombre d'arêtes mal orientées, le but final est de créer une flèche. S'il y a 4 arêtes mal orientées en haut, échangez une paire d'arêtes entre le haut et le bas pour en faire descendre une et créer la flèche. S'il y en a 2 en haut et 2 en bas, échangez une paire d'arêtes entre le haut et le bas pour en faire monter une et créer la flèche. S'il y en a 1 en haut et 1 en bas, ou 2 en haut, utilisez M' U M pour d'abord passer à l'une des situations précédentes, puis construisez la flèche. Vous pouvez découvrir les meilleures étapes pour le cas 1/1 par vous-même, grâce à beaucoup d'observation et de réflexion.
- Pratiquez intensivement l'anticipation (Look-ahead). C'est la chose la plus importante pour passer de 40 à 30 secondes, et aussi la plus contre-intuitive : tournez plus lentement, regardez plus loin. Lorsque vous construisez le bloc gauche, ne regardez pas la pièce que vous êtes en train d'insérer, mais cherchez la pièce suivante. Au début, cela sera très étrange, vos temps vont d'abord empirer, puis après une semaine de persévérance, les choses s'amélioreront soudainement.
- Pas d'hésitation au CMLL. Si vous devez réfléchir à chaque mouvement avant de l'exécuter, c'est qu'il n'est pas encore votre. Entraînez chaque mouvement individuellement 50 fois, jusqu'à ce que vos mains agissent dès que vous reconnaissez la forme.

![箭头形态](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figure : La forme de la flèche. Trois arêtes mal orientées sur la couche supérieure (surlignées en cyan) forment une flèche, pointant vers l'arête mal orientée de la couche inférieure. À ce stade, un seul M' U M peut orienter les quatre simultanément. [Ouvrez cet état dans le Rubik's Cube 3D](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) pour le voir étape par étape.*

![EO 的六种形态](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figure : Les six formes de l'EO. Les étiquettes en haut à gauche indiquent le nombre d'arêtes mal orientées (haut / bas), le jaune représente les arêtes bien orientées, et le cadre cyan les arêtes mal orientées. Seule la forme de la flèche nécessite une formule ; les cinq autres sont d'abord transformées en flèche.*

Pour la résolution des arêtes latérales, prenons l'exemple où le jaune est en haut, le blanc en bas, et le bloc gauche est rouge. Il faut alors orienter les arêtes jaune-rouge et jaune-orange (surlignées). L'idée principale est de faire descendre l'arête jaune-rouge vers la face inférieure par un échange d'arêtes haut/bas, et de faire de même pour l'arête jaune-orange. Une fois les deux arêtes sur la face inférieure, l'une en face de l'autre, il suffit de tourner la face supérieure à la bonne position, et un M2 U ou M2 U' permettra de résoudre les arêtes latérales de la couche U.

Pour faciliter la compréhension, j'ai regroupé les six formes de l'EO sur la [page LSE de la bibliothèque de formules de la méthode Roux](/zh/projects/rubiks-cube/roux#lse). Chaque image, en cliquant sur « Voir les détails », ouvre l'état correspondant dans le Rubik's Cube 3D, avec les arêtes mal orientées automatiquement surlignées. La même page contient également les cas pour l'orientation des arêtes UL/UR et les quatre dernières arêtes.

Diminuer le volume de pratique à ce stade n'est pas une mauvaise chose. On ne dépasse pas un plateau en accumulant les résolutions, mais en corrigeant une mauvaise habitude spécifique. Mon expérience est de n'en changer qu'une à la fois.

### Étape 4 : 30 secondes → 28 secondes (Après la 13e semaine)

**Données** : Après le 4 août. Le nombre d'entraînements enregistrés pour tout le mois de septembre était de 122, mais beaucoup d'autres n'ont pas été enregistrés. J'ai intégré le Rubik's Cube comme un jouet de bureau, que je prends pour jouer quand j'en ai envie, quand je suis de bonne humeur, quand je suis agacé ou anxieux, pendant les pauses au travail, ou quand je m'ennuie. L'Ao100 est aussi passé progressivement de 29,9 à 28,2 secondes.

**Où ça bloque** : Pas de goulot d'étranglement clair, juste un manque de fluidité.

**Que pratiquer** :

Si votre vitesse moyenne est toujours supérieure à 30 secondes, la seule chose que vous devez faire est de continuer à pratiquer intensivement, plutôt que d'apprendre de nouvelles formules.

En pratiquant constamment l'anticipation via le slowturn, vous deviendrez de plus en plus rapide.

Prenez le cube pour jouer à tout moment, placez-le à portée de main, par exemple sur votre bureau, pour pouvoir jouer pendant vos pauses. Vous pouvez également enregistrer régulièrement vos résolutions pour identifier les étapes qui prennent le plus de temps, puis optimiser spécifiquement ces points. C'est ce qu'on appelle la pratique délibérée : votre vitesse de progression ne dépend pas du nombre total de vos entraînements ordinaires, mais du nombre de vos entraînements délibérés.

Vous découvrirez alors qu'une fois la période de stagnation entre 30 et 35 secondes passée, votre vitesse franchira un nouveau palier.

Félicitations si vous avez atteint cette étape ! Pour les débutants, vous êtes déjà un joueur très impressionnant !

## Le prix à payer pour ne pas mémoriser de formules

Soyons honnêtes à ce stade. Ne pas mémoriser de formules n'est pas sans coût.

L'étape CMLL est plus lente. Couvrir 42 cas avec seulement 9 formules signifie que certaines situations doivent être exécutées en deux fois. Ceux qui connaissent le CMLL complet sont deux ou trois secondes plus rapides que moi à cette étape.

La manipulation de la couche M est plus exigeante. La deuxième moitié de Roux repose entièrement sur la couche M, qui est plus difficile à tourner que R ou U, a tendance à se bloquer plus facilement et exige un cube de meilleure qualité.

Ne vous inquiétez pas de la limite supérieure. Des joueurs de haut niveau utilisent également Roux pour atteindre le sommet mondial ; la méthode elle-même n'a pas de limite intrinsèque. Cependant, pour descendre sous les 15 secondes, il est fort probable que vous devrez maîtriser les 42 formules CMLL. Mais cela, c'est pour une autre étape. Pour passer sous les 30 secondes, ce n'est pas nécessaire.

De plus, presque tous les joueurs de niveau mondial qui pratiquent la résolution à une main utilisent la méthode Roux, car elle est aussi très bien adaptée à la manipulation à une main.

**Les meilleurs temps officiels (WCA) avec la méthode Roux :**

- Single de 4,11 secondes, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Philippines), Valenzuela Cubing Open 2023, reconnu comme le record officiel de single le plus rapide en Roux ([vidéo de reconstruction](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Moyenne de 5,98 secondes, également par lui, en 2019, à l'époque record d'Asie et le troisième Ao5 officiel sous les 6 secondes de l'histoire ([profil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- Il est également le [détenteur du record du monde à une main](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record) : moyenne de 8,09 et single de 6,05 (2024). Dans la communauté du one-handed, Roux est généralement considérée comme la méthode optimale.

Je pense que c'est un compromis très avantageux. Vous échangez deux ou trois secondes au CMLL contre la certitude de savoir ce que vous faites à chaque étape, de ne pas oublier comment résoudre le cube même après trois mois sans y toucher, et de pouvoir trouver la solution pour n'importe quel cube inconnu.

## Résumé

![复原完成](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Passer de la simple résolution à moins de 30 secondes n'est pas un processus de mémorisation de formules, mais un entraînement de la coordination entre les mains, les yeux et le cerveau.

Quatre étapes, quatre objectifs : d'abord, apprendre à observer sans tourner le cube ; ensuite, apprendre à construire le bloc droit sans détruire le bloc gauche ; puis, apprendre à anticiper l'étape suivante pendant l'exécution de l'étape actuelle ; enfin, laisser les mains suivre les yeux.

Les formules ne sont pas la source de la vitesse. L'observation l'est.

Apprenez à créer une boucle de rétroaction positive grâce aux progrès réalisés à chaque étape. Même la pratique de la fluidité peut être moins monotone, surtout lorsque vous découvrez la surprise de battre un nouveau record. Particulièrement aux niveaux débutant et intermédiaire, vous ressentirez chaque jour le plaisir de battre vos propres records.

Toutes les formules et situations mentionnées dans l'article sont regroupées dans ma [bibliothèque de formules de la méthode Roux](/zh/projects/rubiks-cube/roux). N'hésitez pas à la consulter si vous êtes bloqué.

Le monde du Rubik's Cube est infini. Amusez-vous bien !

## Annexe 1 : Liste des pratiques par étape

**Étape 1 (> 60 secondes)**

- Position d'observation fixe, ne jamais retourner le cube pendant la résolution
- Trouver la prochaine pièce désirée sans pause
- Slowturn, verbalisez l'intention de chaque mouvement
- Pratiquer uniquement le bloc gauche, 50 répétitions

**Étape 2 (60 → 40 secondes)**

- Bloc droit uniquement avec R, r, M, U, sans toucher le bloc gauche
- Pratique du CMLL en deux phases
- Pratique rythmique de M' U M' U, 5 minutes par jour

**Étape 3 (40 → 30 secondes)**

- Une fois le CMLL terminé, faire une pause et identifier instantanément le nombre d'arêtes mal orientées
- Slowturn + anticipation : les yeux cherchent toujours la pièce suivante
- Au moins 20 résolutions de qualité par jour

**Étape 4 (< 30 secondes)**

- Enregistrer des vidéos pour identifier les pauses
- Finger tricks : R U R' U' avec un seul doigt, couche M avec l'annulaire
- 20 résolutions de qualité par jour, sans chercher à en faire trop

## Annexe 2 : Outils

- **csTimer** : [cstimer.net](https://cstimer.net/). Activez les statistiques Ao5 / Ao12 / Ao100. L'Ao100 est votre vrai niveau, les singles sont une question de chance.
- **Rubik's Cube 3D** : [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Toutes les formules de cet article peuvent être saisies ici pour voir l'animation.
- **Bibliothèque de formules de la méthode Roux pour débutants** : [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Les insertions courantes pour le bloc gauche et le bloc droit, les 9 formules du CMLL en deux phases, et tous les cas LSE (EO, UL/UR, les quatre dernières arêtes). Chaque diagramme peut être ouvert dans le Rubik's Cube 3D, masquant automatiquement les pièces non pertinentes et surlignant les arêtes à manipuler.
- **Analyseur d'entraînement csTimer** : [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Glissez-y le fichier exporté de csTimer pour visualiser l'évolution de vos performances, vos courbes Ao5/Ao12/Ao100, la progression de vos records personnels, un tableau des étapes clés (premier sub-60, sub-40, sub-30) et la courbe d'apprentissage de la loi de puissance. Toutes les figures de cet article proviennent de cet outil. Les données sont traitées uniquement dans votre navigateur et ne sont pas téléchargées. Si vous n'avez pas de fichier à exporter, vous pouvez charger mes 4441 données pour voir l'effet.

*Cet article contient des liens d'affiliation Amazon : en achetant via ces liens, je recevrai une petite commission, sans que cela n'affecte votre prix.*

## Pour aller plus loin

- [Comment résoudre le Rubik's Cube sans formules : accessible aux écoliers](/zh/blog/solve-rubiks-cube-without-formulas)
