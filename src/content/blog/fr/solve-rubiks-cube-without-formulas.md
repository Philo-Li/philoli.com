---
layout: blog
title: Comment résoudre le Rubik's Cube sans mémoriser de formules : même un enfant peut comprendre
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Découvrez comment résoudre un Rubik's Cube 3x3 de A à Z, sans aucune formule à mémoriser, en utilisant les concepts de commutateurs de la théorie des groupes et la méthode Roux.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Un Rubik's Cube entièrement résolu" />
</figure>

Peut-être êtes-vous un débutant en Rubik's Cube, et n'avez-vous jamais réussi à le résoudre entièrement.

La plupart des tutoriels disponibles ne font que vous asséner une foule de formules étranges, vous expliquant qu'il suffit de faire ceci, puis cela, et le cube se résoudra. Mais une fois l'opération terminée, vous ne comprenez toujours pas pourquoi.

Cet article sera votre sauveur. Vous apprendrez à résoudre un Rubik's Cube de A à Z, sans mémoriser la moindre formule. Vous découvrirez son origine et comprendrez son fonctionnement. Je vous guiderai pas à pas, de la théorie à la pratique, pour reconstituer un cube complet et vous enseignerai l'art de l'observation.

Ce sera peut-être la première fois que vous résoudrez personnellement un Rubik's Cube entièrement.

<!--more-->

## La naissance du Rubik's Cube

D'où vient la fascination pour le Rubik's Cube ? Commençons par son histoire.

En 1974, Ernő Rubik, professeur d'architecture hongrois, cherchait un moyen de montrer à ses étudiants comment les différentes parties d'un objet pouvaient se déplacer indépendamment sans en détruire la structure globale. C'est ainsi qu'il créa le premier prototype en bois, qu'il peignit de couleurs différentes sur ses six faces. Le Rubik's Cube était né.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Prototype du Rubik's Cube d'Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Portrait d'Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Le nombre étonnant de combinaisons

Un Rubik's Cube 3x3 est composé de 8 coins, 12 arêtes et 6 centres, soit un total de 26 pièces visibles. Mais en réalité, seules 20 d'entre elles peuvent bouger, à l'exception des six centres de face.

Alors, combien de configurations différentes existe-t-il ? **4,3 × 10¹⁹**.

Pour vous donner une idée, ce nombre de configurations dépasse le nombre de grains de sable sur Terre. Si l'on tentait de parcourir un milliard d'états par seconde, il faudrait plus de **1300 ans** pour les explorer tous. Et si l'on écrivait chaque état sur une feuille de papier et qu'on les empilait, la pile équivaudrait à 14 000 allers-retours entre la Terre et le Soleil.

Ce modeste Rubik's Cube 3x3 est bien plus complexe qu'il n'y paraît. Son originalité, son côté ludique et ses innombrables variations lui ont valu un succès retentissant dès son lancement, attirant une multitude de passionnés désireux de s'y essayer. Très vite, des compétitions ont vu le jour, avec une diversité de disciplines (Speedsolving, Blindfolded, One-Handed, With Feet), de méthodes de résolution (Layer by Layer, Corners First, CFOP, Roux, Petrus, ZZ), et même des cubes aux formes variées (du 2x2 au 7x7, Pyraminx, Skewb, Megaminx) n'ont cessé d'apparaître.

![Variantes de cubes aux formes étranges](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

La fascination pour le Rubik's Cube est telle que des mathématiciens ont passé des décennies à en étudier les mystères, cherchant le « nombre de Dieu ». Des astronautes l'ont emporté dans l'espace, et des personnes de tout âge s'illustrent dans les compétitions. Cependant, malgré son attrait, le nombre de joueurs reste relativement faible. C'est pourquoi, à travers cet article, je souhaite vous enseigner à résoudre le cube et à profiter du plaisir qu'offre ce jeu de réflexion.

## Le piège des formules

La plupart des méthodes de résolution courantes exigent de mémoriser de nombreuses formules, ce qui est très décourageant pour les débutants. La joie de résoudre le cube est souvent étouffée par la barrière des formules. La célèbre méthode CFOP, par exemple, compte plus de 100 formules, et les novices doivent en apprendre des dizaines.

C'est pourquoi je souhaite partager avec vous aujourd'hui une méthode qui vous permettra de vous amuser avec le Rubik's Cube sans avoir à mémoriser la moindre formule. Vous pourrez le résoudre uniquement par l'observation et la compréhension.

## L'arme mathématique ultime : la théorie des groupes

Question : Comment résoudre le Rubik's Cube sans mémoriser une seule formule ?

C'est là que nous allons sortir l'artillerie lourde mathématique : la théorie des groupes. Il n'y a pas de problème que les mathématiques ne puissent résoudre.

Quel est le rapport entre le Rubik's Cube et la théorie des groupes ? En fait, le Rubik's Cube est un groupe. Chaque mouvement sur le cube est une opération de permutation. Cette opération possède plusieurs caractéristiques : elle peut être combinée, inversée, mais pas commutée.

La multiplication, que nous avons apprise à l'école primaire, est une opération commutative : A × B et B × A donnent le même résultat. Cependant, dans le groupe du Rubik's Cube, A et B ne sont pas équivalents si l'on inverse leur ordre : faire R puis U est une opération totalement différente de faire U puis R. Ainsi, comprendre les groupes, c'est comprendre le Rubik's Cube. Et jouer avec le Rubik's Cube aide aussi à comprendre les groupes.

Félicitations, vous venez de comprendre la différence entre un groupe abélien (comme la multiplication et l'addition) et un groupe non abélien (comme le groupe du Rubik's Cube).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U et U R, l'ordre fait une différence - Partie 1" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U et U R, l'ordre fait une différence - Partie 2" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Note : Les mouvements standards du Rubik's Cube sont généralement représentés par des lettres : R pour une rotation de 90 degrés dans le sens horaire de la face droite, U pour une rotation de 90 degrés dans le sens horaire de la face supérieure, R' pour une rotation de 90 degrés dans le sens antihoraire, M' pour un mouvement de la couche du milieu vers le haut, M pour un mouvement de la couche du milieu vers le bas.)

Vous pouvez observer et apprendre les mouvements du cube directement grâce à l'animation 3D disponible en annexe.

## Théorie : Le cœur de la résolution sans formule : le commutateur

Pour résoudre le Rubik's Cube, nous devons être capables de réaliser une action spécifique : **ajuster la position de certaines pièces sans modifier celle des autres.**

En mathématiques, cette opération est appelée un commutateur, et s'écrit **A B A⁻¹ B⁻¹**.

A⁻¹ est l'opération inverse de A.

Prenons une analogie très simple et concrète : un ascenseur. Imaginez que vous souhaitez transporter une personne du 1er au 3ème étage :

1. **A** : La personne entre dans l'ascenseur.
2. **B** : L'ascenseur monte au 3ème étage.
3. **A⁻¹** : La personne sort de l'ascenseur.
4. **B⁻¹** : L'ascenseur redescend au 1er étage.

Résultat : L'ascenseur est revenu à sa position initiale, mais la personne est passée du 1er au 3ème étage. La clé est la suivante : lorsque l'ascenseur est revenu, la personne n'était plus à l'intérieur. L'environnement est donc restauré, mais la cible a changé de position.

Dans le Rubik's Cube, R correspond à une rotation de 90 degrés dans le sens horaire de la face droite, et R⁻¹ à une rotation de 90 degrés dans le sens antihoraire. Donc, dans la troisième étape, on effectue une rotation antihoraire de 90 degrés.

Cette opération inverse A⁻¹ B⁻¹ permet de restaurer l'environnement perturbé par l'opération A B, réalisant ainsi l'échange de blocs spécifiques sans affecter le reste du cube.

Pourquoi pas A A⁻¹ B B⁻¹ ? Parce que chaque action s'annulerait directement, et les pièces ne pourraient pas être échangées. Faire une opération A, puis immédiatement son inverse A⁻¹, revient à ne rien faire du tout (par exemple, tourner la face supérieure de 90 degrés dans le sens antihoraire, puis immédiatement de 90 degrés dans le sens horaire). Il faut donc impérativement **A B A⁻¹ B⁻¹** pour créer un échange.

C'est l'échange le plus fondamental. Le mouvement atomique le plus intuitif sur le Rubik's Cube est : **R U R' U'**.

![Démonstration de R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Il peut être combiné en de longues séquences pour réaliser différents effets de permutation, comme celle-ci : (R U R' U') (R U R' U') (R U R').

C'est d'ailleurs l'origine des formules. Pourquoi existent-elles ? Ce sont simplement des combinaisons de ces opérations de permutation fondamentales, organisées en séquences. En exécutant ces séquences, on peut rapidement atteindre un résultat spécifique, comme reconstituer une arête ou un coin. Différentes séquences peuvent être utilisées en conjonction pour nous mener à la résolution finale du Rubik's Cube.

Une fois le principe compris, nous pouvons même créer nos propres formules. (La création de vos propres formules de Rubik's Cube sera expliquée en détail dans un prochain article.)

Donc, pour résoudre le Rubik's Cube sans mémoriser une seule formule, il suffit de maîtriser la logique des permutations de base. Vous pourrez l'appliquer à n'importe quelle situation. Les mouvements de permutation les plus élémentaires échangeront la position de trois coins, ou de trois arêtes.

## Comment effectuer des échanges sur le cube

Comme mentionné précédemment, le mouvement d'échange atomique le plus intuitif sur le Rubik's Cube est : **R U R' U'**. Si vous comprenez profondément ce mouvement, vous pourrez immédiatement résoudre les deux premières couches du cube.

Ce mouvement signifie en réalité : écarter (la face droite), insérer (la pièce cible), remettre en place (la face droite), remettre en place (la face supérieure).

De cette manière, nous avons réussi à insérer le coin avant gauche et l'arête du milieu dans la position inférieure droite.

Ce mouvement peut être adapté de multiples façons, devenant **U R U' R'**, ou **F R F' R'**, et ainsi de suite pour n'importe quelle position, y compris avec la couche du milieu comme **M U M' U'**, ou encore **U2 R U2 R'**.

![Démonstration de mouvement de permutation de base](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Au début, le Rubik's Cube est le plus désordonné. On peut donc utiliser un grand nombre de ces permutations de base pour résoudre une face ou d'autres sections, réduisant ainsi le niveau de désordre.

De plus, étant donné le désordre initial, le dernier mouvement U' de **R U R' U'**, qui sert à restaurer l'environnement, peut parfois être omis pour enchaîner directement avec l'action suivante. Cela simplifie le processus en : écarter, insérer, remettre en place.

Écarter, insérer, remettre en place.

Voilà le mouvement clé. Félicitations, vous avez compris comment résoudre le Rubik's Cube !

Cependant, plus tard, nous aurons besoin de séquences de permutation plus longues pour échanger des pièces spécifiques sans perturber l'état déjà résolu du cube.

Prenons l'exemple de **R U' L' U R' U' L U**. Ce mouvement permet d'échanger trois coins uniquement, sans affecter le reste. Décomposons-le selon la logique des commutateurs :

```
A   = R U'   (déplace le coin)
B   = L'     (bouge la face gauche)
A⁻¹ = U R'   (restaure l'opération A)
B⁻¹ = U' L U (restaure l'opération B, avec ajustement)
```

Effet : Le coin inférieur gauche reste en place, les trois autres coins sont échangés.

C'est probablement la seule formule que vous aurez besoin de comprendre dans cet article. Nous apprendrons à l'utiliser dans la section pratique, et vous la maîtriserez par l'action et la compréhension, sans avoir à l'apprendre par cœur.

## Pratique : Résoudre de A à Z

Nous arrivons enfin au cœur de cet article ! Je vais vous guider pas à pas pour résoudre entièrement le Rubik's Cube de A à Z, uniquement par l'observation et la compréhension.

Ce dont vous aurez besoin :

- Un Rubik's Cube
- Et un peu de patience (car notre objectif est l'observation et la compréhension).

Tout d'abord, supposons que vous ayez un Rubik's Cube à portée de main. Nous allons le mélanger selon un scramble standard international (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), puis je vous guiderai pour le résoudre ensemble.

Ou vous pouvez jouer directement à la version en ligne : ce lien vous montrera le cube déjà mélangé : [3D Rubik's Cube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![État initial du Rubik's Cube mélangé](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Nous allons nous appuyer sur l'approche très élégante de la méthode Roux, dite « méthode des ponts ». Contrairement aux méthodes couche par couche, celle-ci consiste à construire d'abord deux blocs 1x2x3 sur les côtés, appelés « ponts gauche et droit », puis à résoudre la face supérieure et les pièces restantes.

La méthode Roux est très libre et flexible. Elle demande moins d'étapes que de nombreuses méthodes populaires et nécessite relativement peu de formules à mémoriser, car elle repose essentiellement sur la logique des commutateurs. C'est dans ce cadre que nous apprendrons à résoudre le Rubik's Cube sans retenir une seule formule.

![Diagramme du flux de la méthode Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Première étape : Fixer la position d'observation

La méthode des ponts utilise une position d'observation fixe. Pendant la résolution, nous n'aurons pas besoin de tourner fréquemment le cube, mais plutôt de maintenir le même angle pour réfléchir et opérer. En gardant cette orientation, nous pourrons facilement repérer les coins et les arêtes et savoir où ils doivent aller.

Nous prendrons cet angle comme référence :

- Face avant (orientée vers vous) : Verte
- Face gauche : Rouge
- Face droite : Orange
- Face supérieure : Jaune
- Face inférieure : Blanche
- Face arrière : Bleue

### Deuxième étape : Construire les ponts gauche et droit

**Ordre de construction du pont gauche :**

1. Placez d'abord l'arête blanc-rouge (le pilier inférieur gauche).
2. Puis placez l'arête bleu-rouge à l'arrière.
3. Enfin, placez les deux coins rouges à l'avant.

Diagramme de l'état terminé du pont gauche :

![État terminé du pont gauche](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ce processus ne nécessite aucune formule ; il suffit d'observer et de comprendre. Avec un peu de pratique, vous deviendrez de plus en plus habile.

**F' L** : En utilisant l'observation, trouvez l'arête rouge-blanc et placez-la correctement, avec le blanc vers le bas et le rouge vers la gauche.

![Démonstration de placement de l'arête blanc-rouge](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B** : Placez l'arête bleu-rouge et les coins.

![Placement de l'arête bleu-rouge et des coins](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'** : Trouvez les deux dernières pièces du pont gauche et mettez-les en place. Vous obtiendrez ainsi un pont gauche parfait.

![Placement des deux dernières pièces du pont gauche](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Procédez de même pour le pont droit**, en remplaçant le rouge par l'orange et en répétant les étapes précédentes. Attention cependant : ne défaites pas le pont gauche déjà construit. Si vous avez besoin de libérer de l'espace, déplacez d'abord le pont gauche temporairement afin que les opérations sur le côté droit ne l'affectent pas, puis restaurez le pont gauche une fois les mouvements du côté droit terminés.

**Pont droit central** : U' M U' R2

![Placement de l'arête centrale du pont droit](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Première pièce du pont droit** : U' M' U2 R' U R

![Placement de la première pièce du pont droit](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Nous avons terminé le dernier module du pont droit et souhaitons l'insérer. Pour cela, nous allons d'abord écarter le pont gauche (F') pour libérer de l'espace, puis déplacer le module (U), et enfin replacer les ponts gauche et droit simultanément.

![Insertion de la dernière pièce du pont droit](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Voici l'état une fois les deux ponts terminés. L'important est que les ponts soient formés ; ne vous souciez pas des autres couleurs pour le moment.

![État terminé des deux ponts](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Troisième étape : Orienter les coins de la face supérieure

Une fois les ponts gauche et droit construits, nous allons maintenant nous occuper des quatre coins restants. Pour cela, nous utiliserons une permutation cyclique des coins, qui fera passer trois coins de A à B, B à C, et C à A.

![Diagramme de permutation cyclique des coins : A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Permutation cyclique des coins

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formule 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Le coin inférieur gauche reste en place.</li>
      <li>Les trois autres coins échangent leurs positions dans le sens <strong>antihoraire</strong>.</li>
      <li>Mais leurs couleurs internes tournent dans le sens <strong>horaire</strong>.</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formule 2 (version miroir)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Le coin inférieur droit reste en place.</li>
      <li>Les trois autres coins échangent leurs positions dans le sens <strong>horaire</strong>.</li>
      <li>Mais leurs couleurs internes tournent dans le sens <strong>antihoraire</strong>.</li>
    </ul>
  </div>
</div>

![Démonstration de permutation cyclique des coins (version miroir)](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Vous ne rencontrerez que quatre types de configurations d'orientation des coins : 0, 1, 2 ou 4 « bons » coins.

- **4 bons coins** : État final.
- **1 bon coin** (forme « Poisson ») : Une seule permutation cyclique (ou sa version miroir) suffit pour terminer.
- **0 ou 2 mauvais coins** : Placez d'abord un mauvais coin dans une position non affectée par la permutation (le coin inférieur gauche), effectuez une permutation cyclique, et vous obtiendrez 1 bon coin, revenant ainsi à la situation précédente.

Parfois, la version de base de la permutation cyclique nécessite deux exécutions pour être résolue, tandis que sa version miroir n'en demande qu'une seule pour une résolution complète. En tant que débutant, concentrez-vous d'abord sur la version de base, observez et comprenez, puis vous maîtriserez l'ensemble. Cette permutation cyclique, qui permet d'obtenir un jaune vers le haut, est aussi une formule classique bien connue — la formule du « Petit Poisson » (gauche ou droite) — essayez d'en saisir la forme.

Pas besoin de mémoriser cette formule non plus. Observez comment les deux blocs verts se déplacent, et essayez-la plusieurs fois vous-même pour vous familiariser. L'essentiel est d'échanger trois coins de la face supérieure.

Pour le Rubik's Cube dont les ponts gauche et droit sont terminés, nous constatons qu'il y a deux jaunes en haut. Nous allons donc placer un coin sans jaune en bas à gauche et effectuer une permutation cyclique des coins. Ensuite, en répétant deux fois cette permutation, ou une seule fois sa version miroir, nous obtiendrons les quatre coins de la face supérieure avec le jaune orienté vers le haut.

![Démonstration du processus de permutation cyclique des coins](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Les quatre coins jaunes sont terminés !

![État terminé des quatre coins jaunes](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Ajuster les positions (aligner les couleurs latérales)

Une fois que les quatre coins jaunes sont orientés vers le haut, il faut encore aligner les couleurs latérales des coins pour qu'ils soient complètement à leur place.

C'est là que nous utiliserons la **variante J-perm** : **R U2 R' U' R U2 L' U R' U' L**.

La logique de cette formule peut être décomposée en « déplacement de paires + échange logique » :

- Première partie `R U2 R' U' R` : Déplace une paire vers une zone sûre pour la stocker temporairement et libérer de l'espace.
- Deuxième partie `U2 L' U R' U' L` : Utilise la logique de permutation cyclique pour échanger précisément deux coins.

**Effet** : Les deux coins de droite échangent leurs positions tout en gardant le jaune orienté vers le haut, les autres coins restent inchangés.

Cela équivaut à pouvoir échanger la position de n'importe quels deux coins adjacents (en utilisant U pour choisir quels coins sont à droite). En répétant cet échange plusieurs fois, les quatre coins peuvent être complètement alignés et placés.

![Démonstration de J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Pas besoin de mémoriser cette formule non plus. Observez comment les deux blocs verts se déplacent, et essayez-la plusieurs fois vous-même pour vous familiariser. L'essentiel est d'échanger les deux coins droits de la face supérieure tout en maintenant le jaune orienté vers le haut.

### Quatrième étape : Résoudre les six dernières arêtes (LSE, Last Six Edges)

À ce stade, commencez par aligner les centres pour que le jaune soit en haut et le blanc en bas, puis ajustez les arêtes.

Il ne reste plus que 6 arêtes. Cette étape n'utilise que deux opérations, **M** et **U**, ce qui la rend très intuitive.

#### 4a : Ajuster l'orientation (EO, Edge Orientation)

**Méthode de détection** : Vérifiez si l'autocollant blanc ou jaune de l'arête est orienté vers le haut ou vers le bas.

- Orienté vers le haut / vers le bas = Bonne arête ✓
- Orienté sur le côté = Mauvaise arête ✗

**Méthode d'ajustement** : Utilisez **M U M'** ou **M' U M** pour retourner les mauvaises arêtes.

![Démonstration de retournement des mauvaises arêtes avec M U M'](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Compréhension intuitive : M fait remonter l'arête de la couche du milieu, U ajuste sa position, et M' la redescend.

Répétez plusieurs fois jusqu'à ce que toutes les arêtes aient le blanc ou le jaune orienté vers le haut ou vers le bas.

Nous appellerons « bonnes arêtes » celles qui sont correctement orientées, et « mauvaises arêtes » celles qui ne le sont pas.

Comme illustré, les trois arêtes surlignées de la face supérieure sont de mauvaises arêtes, car elles ne sont ni jaunes ni blanches.

![Illustration des mauvaises arêtes surlignées](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Astuce d'ajustement** : Vous ne rencontrerez que quatre types de situations pour les mauvaises arêtes :

- **0 mauvaise arête** : État final.
- **Ni 0 ni 4 mauvaises arêtes** : Utilisez **M' U M** pour modifier le nombre de mauvaises arêtes, et arriver à 4 mauvaises arêtes.
- **4 mauvaises arêtes (2 en haut, 2 en bas)** : Échangez les arêtes du haut et du bas avec **M' U2 M** pour obtenir une configuration de 3 en haut et 1 en bas.
- **4 mauvaises arêtes (3 en haut, 1 en bas)** : Les trois mauvaises arêtes de la face supérieure forment une flèche. Tournez la face supérieure pour que la flèche pointe vers la mauvaise arête de la face inférieure, puis effectuez une fois **M' U M**. Les quatre mauvaises arêtes s'annuleront, et toutes deviendront de bonnes arêtes.

![Démonstration d'élimination de quatre mauvaises arêtes en flèche](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Si la flèche n'apparaît pas, répétez **M' U M** ; vous finirez par l'obtenir. Une fois plus avancé, vous pourrez chercher les schémas par vous-même.

#### 4b : Résoudre les arêtes latérales (Rouge et Orange)

Trouvez les arêtes rouge-jaune et orange-jaune (l'objectif est de les ramener sur les côtés gauche et droit), et utilisez la permutation cyclique des arêtes pour les placer correctement.

**Astuces** :

1. Placez l'arête rouge-jaune (ou orange-jaune) au-dessus de la couche du milieu, puis utilisez l'échange d'arêtes haut-bas pour la faire descendre (**M' U2 M**).
2. Faites descendre l'autre arête orange-jaune (ou rouge-jaune) en face.
3. Tournez la face supérieure pour que la couleur rouge apparaisse face à l'arête rouge-jaune placée en bas.
4. Tournez la couche du milieu d'un demi-tour (**M2**), puis ajustez la face supérieure par observation (**U**).

![Démonstration de placement des arêtes latérales](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c : Résoudre les quatre arêtes restantes (Bleu et Vert)

**Conseils** :

- Utilisez continuellement la **permutation cyclique des arêtes** pour échanger les arêtes du haut et du bas : **M' U2 M**, puis ajustez la dernière étape par observation (**U2**).
- Astuce rapide : Placez l'arête blanc-vert (ou blanc-bleu) au-dessus de sa position cible, échangez les arêtes haut-bas, et l'arête blanc-vert (ou blanc-bleu) sera en place.

Il n'y a que trois cas possibles :

- Déjà correct → Terminé !
- Nécessite M2 → Effectuez une fois **M2**.
- Nécessite un échange → **M' U2 M U2** ou **M U2 M' U2**.

On peut aussi simplifier la logique de la permutation des arêtes : M' fait monter la couche du milieu, U2 tourne la face supérieure d'un demi-tour, M replace la couche du milieu, et U2 restaure la face supérieure.

![Démonstration de permutation cyclique des arêtes](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Terminé !

![Rubik's Cube résolu](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Conclusion

Pas besoin de mémoriser des formules par cœur, juste la logique des commutateurs : « ouvrir la porte — opérer — refermer la porte ». Vous constaterez que ce processus est bien plus amusant que d'apprendre des formules, et vous n'aurez jamais à craindre d'oublier, car vous pourrez toujours le retrouver par vous-même, même des années plus tard.

Cette même approche permet de résoudre n'importe quel Rubik's Cube, y compris les variations les plus étranges.

Cependant, si vous souhaitez vous lancer dans le speedcubing, il vous faudra emprunter le chemin d'un entraînement intensif et sans fin. Mais pour un débutant, atteindre moins de 90 secondes avec un peu de pratique ne devrait pas poser de problème.

Il existe une multitude de méthodes de résolution ; à vous de voir si vous en trouvez une plus élégante ou plus intuitive.

Le monde du Rubik's Cube offre un plaisir infini. Amusez-vous bien !

## Annexe 1 : L'aide-mémoire pour résoudre le Rubik's Cube (Le mantra de la résolution du cube)

1. **Construire les ponts gauche et droit : Par l'observation et l'intuition**
   - Conseils : Une fois que vous maîtrisez bien l'observation et l'anticipation, vous pourrez, en fonction de l'état spécifique du cube, prioriser la construction d'autres modules, ou construire les ponts gauche et droit simultanément. Cela permet de réduire le nombre de mouvements et offre une grande liberté.
2. **Orienter les quatre coins de la face supérieure : Les quatre jaunes vers le haut**
   - Permutation cyclique des coins de la face supérieure : **R U' L' U R' U' L U** (Le coin inférieur gauche reste en place, les couleurs internes des trois autres coins tournent dans le sens horaire).
   - Permutation cyclique des coins de la face supérieure (version miroir) : **L' U R U' L U R' U'** (Le coin inférieur droit reste en place, les couleurs internes des trois autres coins tournent dans le sens antihoraire).
3. **Résoudre les faces latérales des quatre coins supérieurs**
   - **Ajustement de la position des coins supérieurs** : **R U2 R' U' R U2 L' U R' U' L** (Maintient les quatre coins jaunes orientés vers le haut et échange la position des deux coins de droite).
4. **Changer l'orientation des arêtes pour que le blanc ou le jaune soit vers le haut ou le bas**
   - Alignez d'abord les centres pour que le jaune soit en haut et le blanc en bas, puis ajustez les arêtes.
   - Utilisez **M' U M** pour modifier le nombre de mauvaises arêtes, formez une flèche, dirigez la flèche vers la mauvaise arête, et effectuez une fois **M' U M**. Les quatre mauvaises arêtes s'annuleront et se placeront correctement.
5. **Résoudre les arêtes des côtés gauche et droit** (Rouge et Orange)
   - Faites d'abord descendre l'arête rouge-jaune (ou orange-jaune) en utilisant l'échange d'arêtes haut-bas (**M' U2 M**).
6. **Résoudre les arêtes restantes** (Bleu et Vert)
   - Utilisez continuellement la **permutation cyclique des arêtes** pour échanger les arêtes du haut et du bas : **M' U2 M**, puis ajustez la dernière étape par observation (**U2**).

Aucune de ces formules n'a besoin d'être mémorisée ; elles sont incluses en annexe pour faciliter votre référence. En réalité, en essayant vous-même, en observant et en comprenant comment les pièces correspondantes se déplacent, vous vous familiariserez rapidement. L'essentiel est d'échanger trois coins de la face supérieure.

## Annexe 2 : Sites web et outils utiles

J'ai également créé pour vous un Rubik's Cube 3D en ligne où vous pouvez jouer. Vous pouvez le manipuler librement, le mélanger et le résoudre selon des formules spécifiques, et chaque étape est accompagnée de magnifiques animations !

[3D Rubik's Cube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Outil Rubik's Cube 3D en ligne](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Scramble utilisé dans ce tutoriel : `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Étapes de résolution des ponts gauche-droite de ce tutoriel : `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Cliquez sur ce lien pour voir le Rubik's Cube déjà mélangé : [3D Rubik's Cube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Le chronomètre Rubik's Cube utilisé par les champions du monde : [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
