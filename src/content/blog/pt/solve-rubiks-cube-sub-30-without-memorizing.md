---
layout: blog
title: "Como Resolver o Cubo Mágico Abaixo de 30 Segundos Sem Decorar Algoritmos: Fácil o Suficiente para Crianças"
date: 2026-10-09 12:00:00
tags:
  - Cubo Mágico
  - Tutorial
  - Método Roux
  - Speedcubing
  - Prática Deliberada
categories: Experimentos
description: "Levei 89 dias desde a primeira resolução até um Ao100 abaixo de 30 segundos, sem decorar um único algoritmo de CFOP. Analisando 4441 dados de cronometragem, detalho quatro fases: onde você pode travar em cada uma, o que praticar e por que o método Roux não exige memorização de algoritmos."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Como Resolver o Cubo Mágico Abaixo de 30 Segundos Sem Decorar Algoritmos: Fácil o Suficiente para Crianças" />
</figure>

No meu último artigo, [“Como Resolver o Cubo Mágico Sem Decorar Algoritmos”](/pt/blog/solve-rubiks-cube-without-formulas/), você aprendeu a resolver um cubo mágico usando a lógica dos comutadores, sem a necessidade de memorizar algoritmos. Aquele post recebeu muitos elogios.

Se você seguiu as instruções, provavelmente agora leva uns dois ou três minutos para resolver, mesmo que de forma um pouco desordenada. Mas aí surge uma nova questão: como ficar mais rápido?

Se você pesquisar por "speedcubing", todos os tutoriais dirão a mesma coisa: para baixar de 30 segundos, você precisa decorar os algoritmos do CFOP. São 41 para F2L, 57 para OLL e 21 para PLL, totalizando 119 algoritmos. Mesmo que você faça o F2L por intuição, os 78 algoritmos da camada superior são inevitáveis. Se não decorar, esqueça a velocidade.

Este artigo quer te mostrar que é possível chegar abaixo de 30 segundos sem decorar absolutamente nenhum algoritmo.

<!--more-->

Desde a primeira vez que resolvi o cubo mágico, em 7 de maio de 2026, até atingir um Ao100 abaixo de 30 segundos em 4 de agosto, levei 89 dias. Durante todo esse período, não decorei um único algoritmo de CFOP, apenas brinquei nas minhas horas vagas. Estes são os dados cronometrados das minhas 4441 resoluções registradas.

![Curva de desempenho de 4441 resoluções](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figura: Curva de desempenho de 4441 resoluções. A linha cinza mostra cada tempo individual, a linha escura é a tendência do Ao100, e os pontos vermelhos são os novos recordes pessoais (PB). O melhor Ao100 foi de 28.22 segundos.*

Com prática deliberada e consistente, qualquer pessoa pode ir do zero ao sub-30 em poucos meses.

O que significa "abaixo de 30 segundos"? No [Primeiro Campeonato Mundial de Cubo Mágico de 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), o tempo do campeão foi de 22.95 segundos, que mais tarde foi reconhecido pela WCA como o primeiro recorde mundial oficial; o 10º lugar foi 29.11 segundos, alcançado pela própria Jessica Fridrich, a criadora do CFOP, de quem falaremos na próxima seção. Em outras palavras, um amador hoje, que pratica por alguns meses e atinge um sub-30, estaria entre os dez melhores do mundo em 1982.

A seguir, vou compartilhar com você como cheguei lá, passo a passo, e apresentar todo o método de prática.

## Por que o Mundo do Speedcubing Aposta na Memorização de Algoritmos

Primeiro, vamos esclarecer uma coisa: por que "velocidade" e "decorar algoritmos" estão tão intrinsecamente ligados na mente das pessoas?

No início dos anos 1980, a professora tcheca Jessica Fridrich (que mais tarde pesquisaria forense digital na Binghamton University, EUA) organizou um método de resolução por camadas, que mais tarde foi chamado de CFOP (Cross, F2L, OLL, PLL). A ideia desse método é listar exaustivamente todas as situações possíveis na camada superior e associar a cada uma delas um algoritmo otimizado. Você reconhece a situação, executa o algoritmo e não precisa pensar.

![Jessica Fridrich e o cubo mágico em seu escritório](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Figura: Jessica Fridrich e o cubo mágico em seu escritório. Em 1982, ela ficou em 10º lugar no primeiro Campeonato Mundial com 29.11 segundos. O CFOP foi nomeado em sua homenagem (Método Fridrich).*

Este método é extremamente rápido. Quase todos os recordes mundiais são alcançados com CFOP. Por isso, todos os tutoriais o ensinam, todos os vídeos falam dele, e "aprender speedcubing" tornou-se sinônimo de "aprender CFOP", que, por sua vez, significa decorar 119 algoritmos.

Mas atenção: "decorar algoritmos" é uma característica do CFOP, não da velocidade em si. O CFOP exige memorização porque optou pela abordagem exaustiva. A exaustão requer memória, e este é o preço a pagar.

Existe algum método que não siga essa abordagem exaustiva? Sim.

## A Solução Sem Algoritmos: Método Roux

Em 2003, o francês Gilles Roux apresentou uma abordagem completamente diferente. Em vez de construir camada por camada, ele propôs montar primeiro dois "blocos" de 1×2×3 à esquerda e à direita (os "blocos"), depois resolver os quatro cantos da camada superior, e, por fim, lidar com as seis arestas restantes usando apenas os movimentos das camadas M (do meio) e U (superior) para finalizar.

![Gilles Roux em competição](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Figura: Gilles Roux em competição. Captura de tela de um vídeo antigo de competição, imagem restaurada e ampliada por IA.*

No artigo anterior, já usamos essa estrutura para resolver o cubo uma vez. Vamos rever as quatro etapas, desta vez focando no "que precisa ser lembrado em cada etapa":

| Etapa | Conteúdo | Algoritmos para Decorar |
| --- | --- | --- |
| 1. First Block (FB) | Montar um bloco 1×2×3 | 0, pura observação |
| 2. Second Block (SB) | Montar o outro simetricamente | 0, pura observação |
| 3. CMLL | Posicionar os quatro cantos da camada superior | 9, todos podem ser derivados de 3-ciclos |
| 4. LSE | As seis arestas finais | 0, usando apenas giros da camada superior e do meio (M e U) |

Três das quatro etapas não exigem nenhum algoritmo. O único que precisa, o CMLL, tem 42 casos no total, mas você não precisa de 42 algoritmos. O 3-ciclo de cantos R U' L' U R' U' L U, que mencionei no artigo anterior, juntamente com seu espelho e algumas variações, cobre todas as situações, embora um pouco mais devagar.

![As quatro etapas do Método Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figura: As quatro etapas do Método Roux. Cada etapa mostra apenas as peças que já estão resolvidas até aquele ponto: First Block (FB) → Second Block (SB) → CMLL (quatro cantos da camada superior) → LSE (seis arestas finais). Captura de tela do painel "Solução" da minha página de cubo 3D.*

É por isso que o método Roux permite não decorar algoritmos: ele comprime a parte que exige memorização para um canto muito pequeno, deixando o restante para a observação, compreensão e, claro, a prática.

## De 165 Segundos a 28 Segundos: As Quatro Fases

A seguir, detalho o caminho que realmente percorri. Para cada fase, indiquei o início e o fim com dados, explicando onde eu travava e o que pratiquei. Seus pontos de dificuldade podem ser diferentes dos meus, mas a sequência provavelmente será a mesma.

![Duração das quatro fases](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figura: Duração das quatro fases. Fase um: 3 semanas; fase dois: 11 dias; fase três: dois meses; fase quatro: até agora.*

### Fase Um: 165 Segundos → 60 Segundos (Semanas 1–3)

**Dados**: De 7 a 27 de maio. Média de 165 segundos na primeira semana, 68 segundos na terceira semana.

**Onde você está travado(a)**: O First Block (FB) é muito inexperiente, demorando muito para encontrar cada par canto-aresta. Além disso, depois de encontrar um par, iniciantes tendem a parar para continuar observando.

![Onde os iniciantes gastam seu tempo](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figura: Onde os iniciantes gastam seu tempo. As mãos estão paradas, os olhos procuram pelo cubo, e o tempo gasto "procurando" é muitas vezes maior do que o tempo "girando".*

**O que praticar**:

Nesta fase, o maior inimigo não é a lentidão das mãos, mas a lentidão dos olhos. Você gasta muito mais tempo "procurando" do que "girando". Então:

-   Mantenha a posição de observação fixa, sem girar o cubo. Como mencionei no artigo anterior, o método Roux tem um ângulo de observação fixo. Nesta fase, você precisa transformar "não girar o cubo" em memória muscular. Sempre que quiser girar o cubo, pare e pergunte a si mesmo: consigo ver a peça que preciso deste ângulo?
-   Slow solving. Não cronometre, mas os movimentos devem ser contínuos, sem pausas. Cada movimento pode ser muito lento, mas sem interrupções. O ponto principal é que, enquanto suas mãos estão executando o movimento anterior, seus olhos já devem estar focados no próximo movimento — este é o cerne do slow solving. Embora pareça que você está ficando mais lento, na verdade, você está treinando seus olhos para perceber a relação entre a posição atual de uma peça e onde ela deveria ir.
-   Pratique apenas o First Block (FB). Embaralhe, monte o FB, embaralhe novamente, monte o FB novamente. Não vá para as próximas etapas. O FB é a etapa mais livre do método Roux e a que mais treina a sua observação.

Não aprenda nenhum algoritmo novo nesta fase. Seu gargalo atual não está nos algoritmos.

### Fase Dois: 60 Segundos → 40 Segundos (Semanas 4–5)

**Dados**: De 27 de maio a 7 de junho, 11 dias. Esta foi a queda mais rápida em todo o processo, e também o período em que mais pratiquei, com 723 resoluções na primeira semana de junho.

**Onde você está travado(a)**: Movimentos descoordenados. O cubo trava.

**O que praticar**:

Nesta fase, você precisa otimizar os movimentos de cada etapa, aumentando a fluidez de cada um com base na compreensão.

-   Second Block (SB). O SB é mais difícil que o FB porque o espaço é reduzido pela metade, e você não pode desfazer o FB já concluído. Os movimentos cruciais são R, r (duas camadas da direita), M, U. Nesta fase, aprenda a usar r e M para mover peças em vez de R, garantindo que o FB nunca seja destruído. Otimizar os passos dos movimentos é economizar tempo. Por exemplo, girar três vezes no sentido horário é o mesmo que girar uma vez no sentido anti-horário.
-   Dominar a camada M. A última etapa do Roux é toda feita com M e U, e a fluidez dos seus giros M determina diretamente seu limite inferior de tempo. Use o dedo anelar ou médio para empurrar o M, e comece a praticar ritmos como M' U M' U.
-   Reconhecimento de padrões CMLL. No artigo anterior, usamos o 3-ciclo para "tentar" resolver os quatro cantos. Agora, precisamos começar a observar antes de agir: antes de girar a camada superior, olhe a orientação amarela dos quatro cantos para determinar se há 0, 1, 2 ou 4 cantos bem orientados e, em seguida, execute o movimento correspondente diretamente. Você pode obter grandes ganhos de eficiência com um número mínimo de algoritmos, o que é muito vantajoso. A maioria desses algoritmos não precisa ser decorada, você pode entendê-los enquanto os pratica.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Perspectiva ao montar o Second Block" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figura à esquerda: Perspectiva ao montar o Second Block (SB). O First Block (FB) já está completo, e apenas os movimentos R, r, M, U são usados para inserir os pares canto-aresta do lado direito, garantindo que o FB nunca seja tocado. Figura à direita: M' U M, um dos conjuntos de movimentos mais usados na segunda metade do Roux. A camada do meio sobe, a camada superior gira, a camada do meio volta – três passos para trocar um par de arestas entre a camada superior e a do meio.*

Você pode consultar minha [Biblioteca de Algoritmos do Método Roux](/pt/projects/rubiks-cube/roux#cmll). A página de CMLL é em duas etapas: 7 algoritmos de orientação + 2 algoritmos de permutação, totalizando 9. Esta é a opção com melhor custo-benefício para aumentar a velocidade, fácil de aprender. Cada conjunto dominado pode economizar cerca de 1 a 2 segundos. Com um pouco de prática, você se tornará proficiente rapidamente, e alguns já foram introduzidos no artigo anterior. Não é preciso memorizar todos para conseguir um tempo abaixo de 30 segundos.

![Primeira etapa do CMLL em duas fases, sete orientações de cantos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figura: Primeira etapa do CMLL em duas fases, sete orientações de cantos. No diagrama superior, amarelo é a cor da face superior que está para cima, e as pequenas barras externas indicam que a cor da face superior daquele canto está virada para o lado. Reconheça o padrão pelo número de cantos amarelos: 0 é H ou Pi, 1 é S ou AS, 2 é U, T ou L.*

Depois de alinhar a parte superior amarela, você pode usar esses dois algoritmos para alinhar os lados dos cantos.

Se uma face já tiver cores consistentes, como o vermelho já na mesma face, gire-a para a esquerda e então escolha o algoritmo de troca adjacente. Se nenhuma face tiver cores consistentes, escolha o algoritmo de troca diagonal.

![Segunda etapa do CMLL em duas fases, duas permutações de cantos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figura: Segunda etapa do CMLL em duas fases, duas permutações de cantos. Na imagem à esquerda, os dois cantos vermelhos já estão alinhados, usando a troca adjacente; na imagem à direita, nenhuma face está alinhada, usando a troca diagonal.*

Você pode usar bastante slow solving para entender cada conjunto de algoritmos. Não os veja como fórmulas, mas sim como sequências de movimentos fixos. Você pode descobri-los por si mesmo com tempo, mas listá-los aqui pode economizar seu tempo.

Há mais uma coisa que traz resultados mais imediatos do que qualquer prática: gaste um pouco de dinheiro e compre um cubo novo. Se o que você tem ainda é aquele cubo antigo que range, trava e gira demais, compre um 3x3 magnético moderno. Os cubos mais recentes farão você sentir o poder da otimização de engenharia: giros suaves, alinhamento automático e quase sem travamentos. Apenas a troca de cubo pode melhorar seu tempo médio em até 15 segundos. A opção com melhor custo-benefício é o [MoYu RS3 M V5 (Maglev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), por volta de vinte dólares, suficiente para chegar ao sub-20.

### Fase Três: 40 Segundos → 30 Segundos (Semanas 5–13, Dois Meses)

**Dados**: De 7 de junho a 4 de agosto. O Ao100 demorou 58 dias para ir de 39.8 segundos para 29.9 segundos. Nesta fase, tempos abaixo de 30 segundos podem ocorrer ocasionalmente, mas apenas com muita sorte. E, à medida que o tempo médio de resolução diminui, a dificuldade de melhorar em 1 segundo aumenta exponencialmente.

![Média diária de tempo](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figura: Média diária de tempo. Após meados de junho, a curva quase se estabilizou, oscilando entre 30 e 40 segundos por dois meses.*

Este é o platô. Todo mundo o encontra, e eu fiquei aqui por dois meses.

**Onde você está travado(a)**: A resolução das seis arestas da camada superior é lenta, a lógica não é compreendida, e cada tentativa se baseia em repetição, desperdiçando muito tempo. O First Block (FB) e o Second Block (SB) ainda não são fluidos o suficiente.

**O que praticar**:

-   Reconhecimento de EO (Edge Orientation). Como mencionei no artigo anterior, existem apenas algumas situações para arestas mal orientadas: 0, não 0 nem 4, 4 (2 em cima e 2 embaixo), 4 (todas na camada superior), 4 (3 em cima e 1 embaixo). O objetivo desta fase é, no momento em que os blocos são concluídos, sem contar, identificar imediatamente qual é a situação. O método de prática é: embaralhe, resolva até o final do CMLL, pause, diga o número de arestas mal orientadas e continue.
-   Muitos não entendem os movimentos aqui. A fase de EO visa, em última instância, construir a forma de flecha (3 arestas mal orientadas na camada superior e 1 na inferior), porque um estado completo, se embaralhado em um passo, já é um estado de flecha. Então, pensando de forma inversa, esta é a última etapa antes da resolução completa. Assim, não importa o número de arestas mal orientadas, o objetivo final é sempre construir uma flecha. Se houver 4 arestas mal orientadas na camada superior, troque um par de arestas entre as camadas superior e inferior para mover uma aresta mal orientada para baixo, formando a flecha. Se houver 2 em cima e 2 embaixo, troque um par de arestas entre as camadas superior e inferior para trazer uma aresta mal orientada para cima, formando a flecha. Se houver 1 em cima e 1 embaixo, ou 2 em cima, use M' U M para primeiro transformá-lo nas situações anteriores e depois construir a flecha. Você pode explorar os melhores passos para 1/1 através de muita observação e reflexão.
-   Pratique intensamente o look-ahead. Esta é a coisa mais importante, e também a mais contraintuitiva, para ir de 40 para 30 segundos: gire um pouco mais devagar, olhe mais para frente. Ao montar o First Block (FB), seus olhos não devem focar na peça que está sendo inserida, mas sim onde está a próxima peça. No início, será muito estranho e seus tempos podem piorar, mas persista por uma semana e de repente você verá uma melhora.
-   CMLL sem hesitação. Se você precisa pensar antes de fazer um movimento, ele ainda não é seu. Pratique cada movimento individualmente 50 vezes, até que suas mãos se movam automaticamente ao ver o padrão.

![Forma de flecha](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Figura: Forma de flecha. Três arestas mal orientadas na camada superior (destacadas em ciano) formam uma flecha que aponta para a aresta mal orientada na camada inferior. Neste ponto, um M' U M pode orientar as quatro simultaneamente. Você pode [abrir este estado no cubo 3D](/pt/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) para ver passo a passo.*

![Seis casos de EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figura: Seis casos de EO. As etiquetas no canto superior esquerdo indicam o número de arestas mal orientadas (superior / inferior). Amarelo são arestas orientadas corretamente, bordas ciano são arestas mal orientadas. Apenas o caso da flecha requer um algoritmo; os outros cinco casos são transformados primeiro na forma de flecha.*

Para a resolução das arestas laterais, aqui, tomando o amarelo como topo, o branco como base e o First Block (FB) como vermelho, as arestas que precisam ser orientadas são as arestas amarelo-vermelho + amarelo-laranja (destacadas). A ideia principal é: encontrar uma maneira de trocar a aresta amarelo-vermelho para a camada inferior, e a aresta amarelo-laranja também para a camada inferior. As duas arestas ficarão opostas na camada inferior. Em seguida, gire a camada superior para a posição correta, e um M2 U ou M2 U' resolverá as arestas laterais da camada U.

Para ajudar na compreensão, compilei todas as seis configurações de EO na [página LSE da Biblioteca de Algoritmos do Método Roux](/pt/projects/rubiks-cube/roux#lse). Clicar em "Ver Detalhes" em qualquer imagem abrirá o estado correspondente no cubo 3D, com as arestas mal orientadas automaticamente destacadas. Na mesma página, você também encontrará todos os casos para a orientação de UL/UR e as últimas quatro arestas.

Diminuir o volume de prática nesta fase não é ruim. O platô não pode ser superado apenas com mais volume; ele exige a correção de um hábito específico. Minha experiência é mudar apenas um de cada vez.

### Fase Quatro: 30 Segundos → 28 Segundos (Após a Semana 13)

**Dados**: Após 4 de agosto. O número de práticas registradas em todo o mês de setembro foi de 122 vezes, mas na verdade muitas outras não foram registradas. Eu já transformei o cubo mágico em um brinquedo de mesa, pego-o e brinco casualmente: algumas vezes quando estou de bom humor, algumas quando estou ansioso, algumas durante intervalos no trabalho, algumas quando estou entediado, deixando o cubing se integrar à minha vida. Meu Ao100 também diminuiu gradualmente de 29.9 para 28.2.

**Onde você está travado(a)**: Não há um gargalo claro, apenas falta de fluidez.

**O que praticar**:

Se sua velocidade média ainda está acima de 30 segundos, a única coisa que você precisa fazer é continuar praticando intensamente, em vez de decorar novos algoritmos.

Continue praticando o look-ahead com slow solving, e você ficará cada vez mais rápido.

Pegue o cubo para brincar sempre que puder. Deixe-o em um lugar de fácil acesso, como sua mesa de trabalho, para poder mexer nele nos intervalos. Também é útil gravar seus vídeos de resolução com frequência para analisar em qual etapa você gasta mais tempo e otimizar especificamente. Isso é prática deliberada: sua velocidade de progresso não depende do número total de práticas comuns, mas sim do número de práticas deliberadas.

Então você descobrirá que, depois de superar o platô de 30–35 segundos, sua velocidade cairá para outro nível.

Chegando a esta fase, parabéns! Para um iniciante, você já é um jogador muito impressionante!

## O Preço de Não Decorar Algoritmos

Chegando a este ponto, é preciso ser honesto. Não decorar algoritmos não é de graça.

-   A fase CMLL é mais lenta. Cobrir 42 casos com 9 algoritmos significa que algumas situações terão que ser feitas duas vezes. Pessoas que usam o CMLL completo são dois ou três segundos mais rápidas que eu nesta etapa.
-   A técnica da camada M tem um limite mais alto. A segunda metade do Roux depende inteiramente da camada M, que é mais difícil de girar do que R e U, tende a travar e exige um cubo de maior qualidade.

Não se preocupe com o limite superior. Há cubistas de elite que usam Roux e estão entre os melhores do mundo; o método em si não tem limite. No entanto, para baixar de 15 segundos, você provavelmente precisará dominar os 42 algoritmos de CMLL. Mas isso é para outra fase. Para baixar de 30 segundos, não é necessário.

Além disso, quase todos os cubistas de classe mundial que resolvem com uma mão usam o método Roux, porque ele é realmente muito adequado para operação com uma mão.

**Melhores Tempos Oficiais (WCA) Usando Roux:**

-   Single de 4.11 segundos, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipinas), Valenzuela Cubing Open 2023, considerado o single oficial mais rápido com Roux ([vídeo de reconstrução](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Média de 5.98 segundos, também ele, em 2019, que na época foi um recorde asiático e o terceiro sub-6 oficial na história ([perfil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
-   Ele também é o [detentor do recorde mundial com uma mão](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): média de 8.09, single de 6.05 (2024). O método Roux é amplamente considerado a melhor solução na comunidade de cubing com uma mão.

Eu acho que este é um ótimo negócio. Você troca dois ou três segundos no CMLL por: saber o que está fazendo em cada etapa, não esquecer o método mesmo depois de três meses sem tocar no cubo, e ser capaz de descobrir a solução para qualquer cubo que nunca tenha visto antes.

## Resumo

![Resolução completa](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Ir de conseguir resolver o cubo para fazê-lo em menos de 30 segundos não é um processo de memorização de algoritmos, mas sim um treinamento de coordenação entre mãos, olhos e cérebro.

Quatro fases, quatro coisas: primeiro, aprenda a observar sem girar o cubo; depois, aprenda a montar o Second Block (SB) sem desfazer o First Block (FB); em seguida, aprenda a olhar para a próxima etapa enquanto executa a atual; e, por fim, faça com que suas mãos acompanhem seus olhos.

Algoritmos não são a fonte da velocidade. A observação é.

Aprenda a construir um feedback positivo através do progresso em cada etapa. Mesmo a prática de fluidez pode não ser tão tediosa, especialmente quando você descobre a surpresa de quebrar seu recorde novamente. Especialmente nas fases iniciante e intermediária, você experimentará a alegria de quebrar recordes todos os dias.

Todos os algoritmos e casos mencionados no artigo estão organizados na [Biblioteca de Algoritmos do Método Roux](/pt/projects/rubiks-cube/roux). Consulte-a sempre que travar.

O mundo do cubo mágico é infinitamente divertido. Espero que você se divirta muito!

## Apêndice 1: Lista de Práticas por Fase

**Fase Um (> 60 segundos)**

-   Mantenha a posição de observação fixa, sem girar o cubo durante toda a resolução
-   Encontre a próxima cor desejada sem pausas
-   Slow solving, declare sua intenção em cada passo
-   Pratique apenas o First Block (FB), repita 50 vezes

**Fase Dois (60 → 40 segundos)**

-   Second Block (SB) usando apenas R, r, M, U, sem tocar no First Block (FB)
-   Pratique o CMLL em duas fases
-   Pratique o ritmo M' U M' U, 5 minutos por dia

**Fase Três (40 → 30 segundos)**

-   Ao terminar o CMLL, pause e identifique o número de arestas mal orientadas de imediato
-   Slow solving + look-ahead: seus olhos estão sempre na próxima peça
-   Pelo menos 20 resoluções de alta qualidade por dia

**Fase Quatro (< 30 segundos)**

-   Grave vídeos para encontrar pausas
-   Finger tricks: R U R' U' com um dedo, M-slice com o dedo anelar
-   20 resoluções de alta qualidade por dia, sem focar em volume

## Apêndice 2: Ferramentas

-   **csTimer**: [cstimer.net](https://cstimer.net/). Ative as estatísticas de Ao5 / Ao12 / Ao100. O Ao100 reflete sua verdadeira habilidade; um single é sorte.
-   **Cubo 3D**: [philoli.com/zh/projects/rubiks-cube](/pt/projects/rubiks-cube/). Todos os algoritmos deste artigo podem ser inseridos aqui para ver as animações.
-   **Biblioteca de Algoritmos do Método Roux (Amigável para Iniciantes)**: [philoli.com/zh/projects/rubiks-cube/roux](/pt/projects/rubiks-cube/roux). Os padrões de inserção comuns para First Block (FB) e Second Block (SB), os 9 algoritmos do CMLL em duas fases, e todos os casos de LSE (EO, UL/UR, e as últimas quatro arestas). Cada imagem pode ser aberta no cubo 3D, ocultando automaticamente as peças irrelevantes e destacando as arestas a serem movidas.
-   **Analisador de Treino csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/pt/projects/rubiks-cube/analyzer). Arraste e solte o arquivo exportado do csTimer para ver sua própria progressão de resultados, curvas de Ao5/Ao12/Ao100, recordes pessoais (PB), tabela de marcos (qual dia você atingiu seu primeiro sub-60, sub-40, sub-30) e a curva de prática da Lei de Potência. Todas as imagens deste artigo foram geradas aqui. Os dados são processados apenas no seu navegador e não são enviados. Se você não tiver um arquivo exportado, pode carregar meus 4441 dados para ver como funciona.

*Este artigo contém links de afiliados da Amazon: ao comprar através dos links, receberei uma pequena comissão, sem alteração no seu preço.*

## Mais Leitura

-   [Como Resolver o Cubo Mágico Sem Decorar Algoritmos: Fácil o Suficiente para Crianças](/pt/blog/solve-rubiks-cube-without-formulas)
