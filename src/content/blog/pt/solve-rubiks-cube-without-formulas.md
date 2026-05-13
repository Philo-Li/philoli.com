---
layout: blog
title: "Como Resolver o Cubo Mágico Sem Fórmulas: Até Crianças do Ensino Fundamental Conseguem"
date: 2026-05-09 12:00:00
tags:
  - Cubo Mágico
  - Tutorial
  - Teoria dos Grupos
  - Matemática
  - Método Roux
categories: Divagações Cotidianas
description: Usando a lógica de comutadores da teoria dos grupos + o método Roux Bridge, aprenda passo a passo a resolver um Cubo Mágico 3x3 do zero, sem memorizar nenhuma fórmula.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Cubo Mágico completamente resolvido" />
</figure>

Talvez você seja um novato no Cubo Mágico e nunca tenha conseguido resolvê-lo completamente.

A maioria dos "tutoriais" disponíveis por aí se limita a apresentar uma série de fórmulas estranhas, dizendo-lhe para fazer isso, depois aquilo, e pronto, o cubo está resolvido. Mas, mesmo após seguir as instruções, você ainda não entende o porquê.

Este artigo será a sua salvação. Você aprenderá, do zero, a resolver um Cubo Mágico sem memorizar nenhuma fórmula. Vai descobrir a origem do cubo e entender como ele funciona. Vou guiá-lo passo a passo, da teoria à prática, para que você consiga montar um cubo completo e aprender a observar cada movimento.

Talvez esta seja a primeira vez que você consegue resolver um Cubo Mágico por conta própria.

<!--more-->

## O Nascimento do Cubo Mágico

Por que o Cubo Mágico exerce tanto fascínio? Para começar, podemos falar sobre como ele nasceu.

Em 1974, Ernő Rubik, um professor de arquitetura húngaro, criou o primeiro protótipo de madeira para demonstrar aos seus alunos como as partes podiam mover-se independentemente sem comprometer a estrutura global. Pintou as seis faces com cores diferentes, e assim nasceu o Cubo Mágico.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Protótipo do Cubo de Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Retrato de Ernő Rubik" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## O Incrível Número de Combinações

Um Cubo Mágico 3x3 tem 8 peças de canto, 12 de aresta e 6 centrais, totalizando 26 peças visíveis. No entanto, as peças que efetivamente se movem são 20, excluindo as seis peças centrais de cada face.

Mas qual é o número total de estados possíveis? **4.3 × 10¹⁹**.

O que isso significa? Esse número de estados é maior do que a quantidade de grãos de areia na Terra. Se tentássemos 1 bilhão de estados por segundo, levaríamos mais de **1300 anos** para percorrer todas as combinações. Se cada estado fosse escrito em uma folha de papel e empilhado, a altura seria equivalente a fazer 14.000 viagens de ida e volta entre a Terra e o Sol.

O pequeno Cubo Mágico 3x3 é realmente surpreendente. Sua jogabilidade inovadora, divertida e as infinitas possibilidades de variações o tornaram um sucesso estrondoso desde o lançamento, atraindo entusiastas de todas as partes para tentar resolvê-lo. Rapidamente surgiram competições de Cubo Mágico, com diversas modalidades (Speedsolving, Blindfolded, One-Handed, With Feet), vários métodos de resolução (Camada por Camada, Cantos Primeiro, CFOP, Roux Bridge, Petrus, ZZ) e até cubos de formatos variados (de 2x2 a 7x7, Pyraminx, Skewb, Megaminx), que continuam a surgir.

![Variações de cubos de formatos especiais](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

O fascínio do Cubo Mágico é tão grande que levou matemáticos a estudar a sua matemática por décadas em busca do "Número de Deus", astronautas a levá-lo ao espaço para se divertir, e pessoas de todas as idades a se destacarem em diversas competições. No entanto, apesar de todo o seu encanto, o número de praticantes do Cubo Mágico ainda é relativamente pequeno. Por isso, através deste artigo, quero ensinar a todos a resolver o cubo e a desfrutar da diversão que este quebra-cabeça proporciona.

## O Dilema das Fórmulas

A maioria dos métodos de resolução disponíveis no mercado exige que os jogadores memorizem muitas fórmulas, o que é bastante desmotivador para iniciantes. Eles são impedidos de sentir a alegria de resolver o cubo antes mesmo de começar. O famoso método CFOP, por exemplo, tem mais de 100 fórmulas, e até um novato precisa memorizar dezenas delas.

Por isso, hoje quero partilhar um método que permite desfrutar do Cubo Mágico sem a necessidade de memorizar fórmulas. Você conseguirá resolvê-lo apenas com observação e compreensão.

## A Poderosa Ferramenta Matemática: Teoria dos Grupos

Pergunta: Como resolver o Cubo Mágico sem memorizar uma única fórmula?

É aqui que entra a nossa poderosa ferramenta matemática: a Teoria dos Grupos. Não há problema que a matemática não consiga resolver.

Mas qual a relação entre o Cubo Mágico e a Teoria dos Grupos? O Cubo Mágico é, na verdade, um grupo. No cubo, cada rotação é uma operação de permutação. Esta operação possui várias características: pode ser combinada, pode ser invertida, mas não é comutativa.

A multiplicação, que aprendemos no ensino fundamental, é uma operação comutativa: A × B e B × A resultam no mesmo valor. No entanto, no grupo do Cubo Mágico, A e B não são equivalentes após a troca; fazer R seguido de U é uma operação completamente diferente de fazer U seguido de R. Assim, ao entender os grupos, entendemos o Cubo Mágico. E, por sua vez, brincar com o cubo nos ajuda a compreender os grupos.

Parabéns, você já compreendeu a diferença entre grupos abelianos (onde a multiplicação e a adição são exemplos) e grupos não-abelianos (como o grupo do Cubo Mágico).

(Adendo: Um leitor apontou que a afirmação anterior não era muito rigorosa, por isso faço uma pequena complementação. Os números inteiros formam um grupo abeliano sob a adição; os números naturais N não são um grupo abeliano sob a adição, por exemplo, 3 não possui o elemento inverso -3, já que -3 não é um número natural. Números reais não nulos, números racionais não nulos e números complexos não nulos formam um grupo abeliano sob a multiplicação. A analogia no texto original tinha como objetivo principal ajudar os iniciantes a compreender a intuição central da comutatividade vs. não comutatividade.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U e U R produzem efeitos diferentes - Parte Um" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U e U R produzem efeitos diferentes - Parte Dois" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Nota: As operações padrão do Cubo Mágico são geralmente representadas por letras. R significa a rotação horária de 90 graus da camada direita; U, a rotação horária de 90 graus da camada superior; R', a rotação anti-horária de 90 graus; M', a camada do meio para cima; M, a camada do meio para baixo.)

Você pode observar e aprender como o Cubo Mágico gira diretamente na animação online disponível no apêndice.

## Parte Teórica: O Segredo para Não Decorar Fórmulas: O Comutador

Para resolver o Cubo Mágico, precisamos alcançar um estado em que: **ajustamos a posição de algumas peças sem alterar a posição das outras.**

Matematicamente, essa operação é chamada de Comutador e é escrita como **A B A⁻¹ B⁻¹**.

A⁻¹ é a operação inversa de A.

Podemos usar uma analogia bem prática: um elevador. Imagine que você quer levar uma pessoa do 1º para o 3º andar:

1.  **A**: A pessoa entra no elevador.
2.  **B**: O elevador sobe para o 3º andar.
3.  **A⁻¹**: A pessoa sai do elevador.
4.  **B⁻¹**: O elevador volta para o 1º andar.

Resultado: O elevador retorna à sua posição original, mas a pessoa foi do 1º para o 3º andar. O ponto crucial é que, quando o elevador volta, a pessoa já não está dentro — ou seja, o ambiente é restaurado, mas o objeto de interesse mudou de lugar.

No Cubo Mágico, por exemplo, R e R⁻¹ correspondem a uma rotação horária de 90 graus da camada direita, e na terceira etapa, uma rotação anti-horária de 90 graus.

A operação inversa A⁻¹ B⁻¹ restaura o ambiente que foi alterado pelas operações A B, permitindo que apenas blocos específicos sejam trocados sem afetar o restante do cubo.

Mas por que não A A⁻¹ B B⁻¹? Dessa forma, cada movimento se anularia diretamente, e as peças não seriam trocadas. Acabamos de fazer uma operação A, e logo em seguida a sua inversa A⁻¹, o que, no total, é como não ter feito nada (por exemplo, girar a camada superior 90 graus anti-horário e depois 90 graus horário). Por isso, é preciso ser **A B A⁻¹ B⁻¹** para que ocorra uma troca.

Esta é a troca mais fundamental, e o movimento elementar mais conveniente no Cubo Mágico corresponde a: **R U R' U'**

![Demonstração de R U R' U'](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Ele pode ser combinado de diversas formas para alcançar diferentes efeitos de permutação, como esta sequência: (R U R' U') (R U R' U') (R U R').

Na verdade, esta é a origem das fórmulas. Por que existem fórmulas? Elas são simplesmente uma combinação de uma série de operações de permutação básicas, formando sequências. Ao executar essas sequências, podemos alcançar rapidamente resultados específicos, como resolver uma aresta ou um canto. Diferentes sequências podem ser usadas em conjunto, guiando-nos até a resolução final do Cubo Mágico.

Compreendendo o princípio, podemos até criar as nossas próprias fórmulas. (Como criar as suas próprias fórmulas do Cubo Mágico será detalhado na próxima parte).

Portanto, para resolver o Cubo Mágico sem memorizar uma única fórmula, basta aprender a lógica das permutações básicas; o raciocínio pode ser aplicado a qualquer outra situação. Os movimentos de permutação mais elementares trocarão a posição de três peças de canto, ou de três peças de aresta.

## Como Realizar Trocas no Cubo Mágico

Como mencionado anteriormente, o movimento de troca elementar mais conveniente no Cubo Mágico é: **R U R' U'**. Se você compreender profundamente este movimento, conseguirá resolver as duas primeiras camadas do cubo imediatamente.

Este movimento, na verdade, significa: afastar (camada direita), inserir (a peça alvo), recolocar (camada direita), recolocar (camada superior).

Dessa forma, conseguimos inserir a peça de canto frontal esquerda e a peça de aresta do meio no canto inferior direito.

Este movimento pode ser constantemente variado, transformando-se em **U R U' R'**, ou **F R F' R'**, e assim por diante, para qualquer posição. Existem até variações com a camada do meio, como **M U M' U'**, ou até **U2 R U2 R'**.

![Demonstração de movimento de troca básico](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

No estágio inicial, o Cubo Mágico está em seu estado mais caótico. Por isso, podemos usar um grande número das permutações básicas mencionadas acima para resolver uma face ou outra parte, reduzindo o nível de desordem.

Além disso, como o estado é muito caótico, o último movimento de restauração do ambiente em **R U R' U'**, o U', pode até ser omitido dependendo da situação, conectando-se diretamente ao próximo movimento. Isso simplifica a ação para: afastar, inserir, recolocar.

Afastar, inserir, recolocar.

Este é o movimento central. Parabéns, você já entendeu como montar o Cubo Mágico!

No entanto, nas fases mais avançadas, precisaremos de sequências de permutação mais longas para trocar peças específicas sem desorganizar completamente o que já foi resolvido.

Tomemos como exemplo **R U' L' U R' U' L U**. Este movimento consegue trocar apenas três peças de canto, sem afetar as demais. Decomposto na lógica do comutador, temos:

```
A   = R U'   (mover a peça de canto para fora)
B   = L'     (mover a camada esquerda)
A⁻¹ = U R'   (reverter a operação A)
B⁻¹ = U' L U (reverter a operação B, com ajuste)
```

Efeito: A peça de canto inferior esquerda permanece no lugar, enquanto as outras três peças de canto são trocadas.

Esta é provavelmente a única fórmula que você precisará conhecer neste artigo. Na seção prática, aprenderemos como usá-la e a compreendê-la através da execução, sem a necessidade de memorização.

## Parte Prática: Resolvendo do Zero

Chegamos agora à parte principal deste artigo. Vou guiá-lo passo a passo para que você consiga resolver o Cubo Mágico por completo, do zero, apenas com observação e compreensão.

Para isso, você precisará:

-   Um Cubo Mágico
-   E um pouco de paciência (pois o nosso foco principal é a observação e a compreensão).

Primeiro, vamos assumir que você já tem um Cubo Mágico em mãos. Vamos embaralhá-lo usando a sequência padrão internacional (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**). Em seguida, vou resolvê-lo junto com você.

Ou você pode jogar diretamente a versão online aqui; ao clicar neste link, você verá o Cubo Mágico já embaralhado: [Cubo Mágico 3D — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![Estado inicial do cubo embaralhado](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Podemos usar a abordagem do elegante método Roux Bridge para a resolução. O método Bridge, diferentemente da resolução camada por camada, consiste em resolver primeiro os blocos 1×2×3 dos lados esquerdo e direito, conhecidos como 'pontes', para depois resolver a camada superior e as peças restantes.

O método Bridge é extremamente livre e flexível, exigindo menos movimentos do que muitos outros métodos conhecidos e poucas fórmulas para memorizar, pois se baseia essencialmente na lógica dos comutadores. Dentro dessa estrutura, podemos aprender a resolver o Cubo Mágico sem decorar uma única fórmula.

![Diagrama do fluxo do método Roux](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Passo Um: Fixar a Posição de Observação

No método Bridge, a posição de observação é fixa. Durante o processo de resolução, não precisamos girar o Cubo Mágico frequentemente; em vez disso, mantemos o mesmo ângulo para pensar e resolver. Com essa face fixa como referência, podemos facilmente visualizar algumas peças de canto e de aresta, sabendo para onde elas devem ir.

Podemos usar este ângulo como base:

-   Frente (voltada para você): face verde
-   Lado esquerdo: vermelho
-   Lado direito: laranja
-   Camada superior: amarela
-   Camada inferior: branca
-   Parte de trás: azul

### Passo Dois: Construir as Pontes Esquerda e Direita

**Ordem de construção da ponte esquerda:**

1.  Primeiro, posicione a aresta branca-vermelha (o pilar inferior esquerdo).
2.  Em seguida, posicione a aresta azul-vermelha na parte de trás.
3.  Por fim, posicione as duas peças de canto vermelhas na frente.

Diagrama do estado da ponte esquerda concluída:

![Estado da ponte esquerda concluída](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Este processo não exige nenhuma fórmula; basta observar e compreender. Com a prática, você se tornará cada vez mais hábil.

**F' L**: Usando a observação, encontre a aresta vermelha-branca e posicione-a corretamente, com o branco virado para baixo e o vermelho para a esquerda.

![Demonstração de posicionamento da aresta branca-vermelha](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Posicione a aresta azul-vermelha e a peça de canto.

![Posicionamento da aresta azul-vermelha e da peça de canto](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Encontre as últimas duas peças da ponte esquerda, e posicione-as. Assim, teremos uma ponte esquerda perfeita.

![Posicionamento das duas últimas peças da ponte esquerda](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**A ponte direita segue a mesma lógica**: substitua o vermelho por laranja e repita os passos anteriores. No entanto, é importante ter cuidado para não desorganizar a ponte esquerda já construída. Se for necessário usar um espaço temporariamente, afaste a ponte esquerda por um movimento para que as operações do lado direito não a afetem, e depois de concluir os movimentos do lado direito, restaure a ponte esquerda.

**Meio da ponte direita**: U' M U' R2

![Posicionamento da aresta central da ponte direita](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Primeira peça da ponte direita**: U' M' U2 R' U R

![Posicionamento da primeira peça da ponte direita](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Concluímos o último módulo da ponte direita e queremos inseri-lo no lugar. Para isso, primeiro removemos a ponte esquerda (F') para abrir espaço, depois movemos o módulo (U) e, finalmente, recolocamos as pontes esquerda e direita simultaneamente.

![Inserção da última peça da ponte direita](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Este é o estado com ambas as pontes completas. Por enquanto, basta que as pontes estejam formadas, não se preocupe com as outras peças coloridas.

![Estado com ambas as pontes concluídas](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Passo Três: Resolver as Peças de Canto da Camada Superior

Depois de resolver as pontes esquerda e direita, o próximo passo é resolver as quatro peças de canto restantes. Para isso, usaremos a permutação de três cantos, que faz com que três cantos troquem de posição, de A para B, B para C, e C de volta para A.

![Diagrama de permutação de três cantos: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Permutação de Três Cantos

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Fórmula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>A peça de canto inferior esquerda permanece no lugar</li>
      <li>As outras três peças de canto trocam de posição <strong>anti-horário</strong></li>
      <li>Mas suas cores internas giram <strong>horário</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Fórmula 2 (Versão Espelho)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>A peça de canto inferior direita permanece no lugar</li>
      <li>As outras três peças de canto trocam de posição <strong>horário</strong></li>
      <li>Mas suas cores internas giram <strong>anti-horário</strong></li>
    </ul>
  </div>
</div>

![Demonstração da permutação de três cantos (versão espelho)](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Existem apenas quatro tipos de orientação para as peças de canto que você pode encontrar: 0, 1, 2 ou 4 cantos "bons".

-   **4 cantos "bons"**: Estado resolvido
-   **1 canto "bom"** (forma de peixe): Basta fazer mais uma permutação de três cantos ou sua versão espelho para resolver.
-   **0 / 2 cantos "bons"**: Primeiro, coloque um canto "ruim" em uma posição que não seja afetada pela permutação de três cantos (canto inferior esquerdo), execute a permutação uma vez, e ele se tornará 1 canto "bom", voltando à situação anterior.

Às vezes, a versão básica da permutação de três cantos precisa ser feita duas vezes para resolver, enquanto a versão espelho pode resolver completamente em apenas uma vez. Para iniciantes, basta dominar a versão básica, focar na observação e compreensão, e então você conseguirá aplicá-la em qualquer situação. Esta permutação de três cantos com o amarelo virado para cima é também uma famosa fórmula clássica — a fórmula do "peixe" (esquerda/direita) — que você pode usar para entender a forma do "peixe".

Também não é preciso memorizar esta fórmula; observe como os dois blocos verdes se movem, faça-o algumas vezes por conta própria e você se familiarizará. O essencial é trocar três peças de canto da camada superior.

Com o Cubo Mágico onde as pontes esquerda e direita acabaram de ser construídas, notamos que há duas faces amarelas no topo. Então, movemos uma peça de canto que não tenha amarelo para a posição inferior esquerda e realizamos uma permutação de três cantos. Depois, fazemos mais duas permutações de três cantos, ou uma permutação de três cantos na versão espelho, para que os quatro cantos da camada superior fiquem com o amarelo virado para cima.

![Demonstração do processo de permutação de três cantos](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Quatro cantos amarelos concluídos!

![Estado com os quatro cantos amarelos concluídos](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Ajustar Posição (Alinhar Cores Laterais)

Quando os quatro cantos estão com o amarelo virado para cima, é preciso ainda alinhar as cores laterais das peças de canto para que elas estejam completamente no lugar certo.

Neste momento, use a **variação do J-perm**: **R U2 R' U' R U2 L' U R' U' L**

A lógica desta fórmula pode ser decomposta em "transportar pares + troca lógica":

-   Primeira parte `R U2 R' U' R`: move um par para uma área segura para armazenamento temporário, liberando espaço.
-   Segunda parte `U2 L' U R' U' L`: utiliza a lógica de permutação de três para completar a troca precisa de duas peças de canto.

**Efeito**: As duas peças de canto do lado direito trocam de posição, mantendo o amarelo virado para cima, e as outras peças de canto permanecem inalteradas.

Isso permite trocar a posição de quaisquer duas peças de canto adjacentes (usando U para ajustar quais cantos ficam à direita). Ao repetir a troca algumas vezes, as quatro peças de canto se alinharão completamente e serão posicionadas corretamente.

![Demonstração do J-perm](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Também não é preciso memorizar esta fórmula; observe como os dois blocos verdes se movem, faça-o algumas vezes por conta própria e você se familiarizará. O essencial é trocar as duas peças de canto da direita da camada superior, mantendo o amarelo virado para cima.

### Passo Quatro: Resolver as Últimas Seis Arestas (LSE, Last Six Edges)

Neste ponto, primeiro alinhe os centros, com o amarelo no topo e o branco na parte inferior, e então ajuste as arestas.

Restam apenas 6 arestas. Este passo utiliza apenas duas operações, **M** e **U**, sendo muito intuitivo.

#### 4a: Ajustar Orientação (EO, Edge Orientation)

**Como identificar**: Verifique se a face branca/amarela da aresta está virada para cima ou para baixo.

-   Virado para cima / para baixo = aresta "boa" ✓
-   Virado para o lado = aresta "ruim" ✗

**Como ajustar**: Use **M U M'** ou **M' U M** para virar as arestas "ruins".

![Demonstração de M U M' para virar arestas ruins](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Compreensão intuitiva: M vira a aresta da camada do meio para cima, U ajusta a posição, e M' a vira de volta.

Repita algumas vezes até que todas as arestas brancas/amarelas estejam viradas para cima ou para baixo.

Podemos chamar as arestas com orientação correta de "arestas boas" e as com orientação incorreta de "arestas ruins".

Na imagem, as três arestas destacadas na camada superior são "arestas ruins", pois não são amarelas nem brancas.

![Indicação das arestas ruins destacadas](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Dica de ajuste**: Existem apenas quatro tipos de situações de arestas "ruins" que você pode encontrar:

-   **0 arestas "ruins"**: Estado resolvido.
-   **Nem 0, nem 4 arestas "ruins"**: Use **M' U M** para alterar o número de arestas "ruins", aumentando-o para 4.
-   **4 arestas "ruins" (2 em cima e 2 em baixo)**: Use **M' U2 M** para trocar as arestas de cima e de baixo, resultando em 3 em cima e 1 em baixo.
-   **4 arestas "ruins" (3 em cima e 1 em baixo)**: As três arestas "ruins" da camada superior formarão uma seta. Gire a camada superior para que a seta aponte para a aresta "ruim" da camada inferior, execute **M' U M** uma vez, e todas as quatro arestas "ruins" serão resolvidas, tornando-se "arestas boas".

![Demonstração da eliminação de quatro arestas ruins com seta](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Se a seta não aparecer, continue tentando **M' U M**; você acabará conseguindo. Com mais prática, você poderá começar a identificar padrões.

#### 4b: Resolver as Arestas Laterais (Vermelhas e Laranjas)

Encontre as arestas vermelho-amarelo e laranja-amarelo (o objetivo é que voltem para as arestas dos lados esquerdo e direito) e posicione-as corretamente através da permutação de três arestas.

**Dicas**:

1.  Mova a aresta vermelho-amarelo (ou laranja-amarelo) para a camada intermediária superior e use a troca de arestas superior/inferior para fazê-la descer (profundo) (**M' U2 M**).
2.  Faça com que a outra aresta laranja-amarelo (ou vermelho-amarelo) desça para a posição oposta.
3.  Gire a camada superior para que a face vermelha apareça na posição oposta à aresta vermelho-amarelo que foi colocada na parte inferior.
4.  Gire a camada intermediária meia volta (**M2**), e observe o posicionamento da camada superior (**U**).

![Demonstração de posicionamento das arestas laterais](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Resolver as Últimas Quatro Arestas (Azuis e Verdes)

**Dicas**:

-   Use repetidamente a **permutação de três arestas** para trocar as arestas superior e inferior: **M' U2 M**. O último passo é posicionar com observação: **U2**.
-   Dica rápida: Coloque a aresta branco-verde (ou branco-azul) acima da posição alvo, troque as arestas superior e inferior, e a aresta branco-verde (ou branco-azul) estará no lugar.

Existem apenas três situações:

-   Já está correta → Completo!
-   Precisa de M2 → Faça um **M2**.
-   Precisa trocar → **M' U2 M U2** ou **M U2 M' U2**.

Podemos também simplificar a lógica da permutação de três arestas: M' significa a camada do meio sobe, U2 a camada superior gira meia volta, M a camada do meio retorna, e U2 a camada superior retorna.

![Demonstração da permutação de três arestas](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Concluído!

![Cubo Mágico resolvido](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Conclusão

Não é preciso memorizar fórmulas, apenas a lógica do comutador de "abrir — operar — fechar". Você descobrirá que este processo é muito mais divertido do que decorar fórmulas e, mesmo anos depois, não precisará se preocupar em esquecer, pois poderá deduzi-lo a qualquer momento.

A mesma lógica pode ser usada para resolver qualquer Cubo Mágico, incluindo os de formatos mais estranhos.

No entanto, se você quiser seguir o caminho do speedcubing, terá que embarcar em uma jornada de prática incessante. Mas para um iniciante, com um pouco de treino, conseguir resolver em menos de 90 segundos não deve ser um problema.

Existem inúmeros métodos de resolução; veja se consegue encontrar um que seja mais elegante ou mais conveniente para você.

A diversão no mundo do Cubo Mágico é infinita. Divirta-se!

## Apêndice 1: Resumo do Método de Resolução do Cubo Mágico (Guia Rápido)

1.  **Construir as pontes esquerda e direita: Com observação e intuição**
    -   Dica: Quando você se tornar muito proficiente em observar e prever, poderá priorizar a construção de outros módulos ou construir as pontes esquerda e direita simultaneamente, dependendo do estado específico do cubo. Isso permite menos movimentos e oferece grande liberdade.
2.  **Resolver a orientação das quatro peças de canto da camada superior: Quatro amarelas para cima**
    -   Permutação de três cantos da camada superior: **R U' L' U R' U' L U** (mantém a peça de canto inferior esquerda no lugar, e as cores internas das outras três peças de canto giram no sentido horário).
    -   Permutação de três cantos da camada superior (versão espelho): **L' U R U' L U R' U'** (mantém a peça de canto inferior direita no lugar, e as cores internas das outras três peças de canto giram no sentido anti-horário).
3.  **Resolver as laterais das quatro peças de canto da camada superior**
    -   **Ajuste fino da posição dos cantos da camada superior**: **R U2 R' U' R U2 L' U R' U' L** (mantém os quatro cantos com o amarelo virado para cima, trocando a posição das duas peças de canto do lado direito).
4.  **Alterar a orientação das arestas, para que o branco ou amarelo fiquem para cima/baixo**
    -   Primeiro, alinhe os centros, com o amarelo no topo e o branco na parte inferior, e então ajuste as arestas.
    -   Use **M' U M** para mudar o número de arestas "ruins", forme a seta, aponte a seta para a aresta "ruim", faça **M' U M** uma vez, e todas as quatro arestas "ruins" serão resolvidas.
5.  **Resolver as arestas laterais (vermelhas e laranjas)**
    -   Primeiro, faça com que a aresta vermelho-amarelo (ou laranja-amarelo) desça para a parte inferior usando a troca de arestas superior/inferior (**M' U2 M**).
6.  **Resolver as arestas restantes (azuis e verdes)**
    -   Use repetidamente a **permutação de três arestas** para trocar as arestas superior e inferior: **M' U2 M**. O último passo é posicionar com observação: **U2**.

Nenhuma das fórmulas acima precisa ser memorizada; elas estão no apêndice apenas para facilitar a consulta. Na verdade, ao tentar pessoalmente, observando e compreendendo como os blocos correspondentes se movem, você se familiarizará após algumas tentativas. O essencial é a troca das três peças de canto da camada superior.

## Apêndice 2: Sites e Ferramentas Úteis

Também criei um Cubo Mágico 3D online para todos jogarem, que pode ser girado livremente, embaralhado e resolvido com sequências fixas, e cada passo tem uma bela animação para assistir!

[Cubo Mágico 3D — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Ferramenta online de Cubo Mágico 3D](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Embaralhamento usado neste tutorial: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Sequência de resolução das pontes esquerda e direita deste tutorial: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Ao clicar neste link, você verá o Cubo Mágico já embaralhado: [Cubo Mágico 3D — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

Cronômetro de Cubo Mágico usado por campeões mundiais: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
