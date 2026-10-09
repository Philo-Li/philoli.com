---
layout: blog
title: "Cómo resolver el cubo de Rubik en sub-30 sin memorizar algoritmos: comprensible incluso para niños"
date: 2026-10-09 12:00:00
tags:
  - cubo de Rubik
  - tutorial
  - método Roux
  - speedcubing
  - práctica deliberada
categories: Trasteos
description: "89 días desde la primera resolución hasta un Ao100 sub-30, sin memorizar un solo algoritmo CFOP. Desglosamos cuatro etapas usando 4441 datos de resolución cronometrados: dónde te atascas en cada fase, qué practicar y por qué el método Roux no requiere memorizar algoritmos."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Cómo resolver el cubo de Rubik en sub-30 sin memorizar algoritmos: comprensible incluso para niños" />
</figure>

En mi publicación anterior, [«Cómo resolver el cubo de Rubik sin algoritmos»](/es/blog/solve-rubiks-cube-without-formulas/), aprendiste a resolver un cubo sin memorizar algoritmos, utilizando la lógica de los conmutadores. Ese artículo recibió muchos comentarios entusiastas.

Si has seguido los pasos uno a uno, ya deberías ser capaz de resolver el cubo por completo, aunque sea a trompicones. Con solo practicar unos cientos de veces, es fácil bajar de 1 minuto. Pero ¿y si quieres ir aún más rápido?

Si buscas «speedcubing» o «resolución rápida del cubo de Rubik», todos los tutoriales te dirán lo mismo: para bajar de los 30 segundos, primero debes memorizar los más de cien algoritmos de CFOP.

Este artículo quiere demostrarte que puedes bajar de los 30 segundos sin memorizar ni un solo algoritmo.

<!--more-->

Desde que resolví por completo el cubo de Rubik por primera vez el 7 de mayo de 2026 hasta que logré un Ao100 sub-30 el 4 de agosto, transcurrieron 89 días. Durante ese tiempo, no memoricé ni un solo algoritmo CFOP; simplemente me dediqué a jugar en mi tiempo libre. Estos son los datos cronometrados de mis 4441 resoluciones registradas.

![Curva de rendimiento de 4441 resoluciones](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Figura: Curva de rendimiento de 4441 resoluciones. La línea gris representa cada tiempo individual, la línea oscura es la tendencia del Ao100, y los puntos rojos marcan las veces que superé mi mejor marca personal (PB). Mi mejor Ao100 fue de 28.22 segundos.*

Con práctica deliberada y constante, cualquiera puede pasar de cero a sub-30 en pocos meses.

¿Qué significa estar por debajo de los 30 segundos? En el [primer Campeonato Mundial de Cubo de Rubik en 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), el campeón obtuvo 22.95 segundos, que luego fue reconocido por la WCA como el primer récord mundial oficial; el décimo lugar fue de 29.11 segundos, logrado por la propia Jessica Fridrich, la creadora del método CFOP de la que hablaremos en la siguiente sección. En otras palabras, un sub-30 que un aficionado logra hoy en día con unos pocos meses de práctica, en 1982 habría estado entre los diez mejores del mundo.

A continuación, te compartiré cómo lo logré paso a paso y te brindaré el método de práctica completo.

## ¿Por qué el mundo del speedcubing se basa en memorizar algoritmos?

Primero, aclaremos algo: ¿por qué la «velocidad» y «memorizar algoritmos» están tan ligadas en la mente de la gente?

A principios de los años 80, la profesora checa Jessica Fridrich (quien más tarde investigaría informática forense en la Universidad de Binghamton, EE. UU.) desarrolló un método de resolución por capas, que luego se conocería como CFOP (Cross, F2L, OLL, PLL). La idea detrás de este método es la siguiente: se enumeran todas las posibles situaciones de la última capa y se asigna un algoritmo óptimo a cada una. Así, reconoces la situación, ejecutas el algoritmo y no necesitas pensar.

Este método es extremadamente rápido. Prácticamente todos los récords mundiales se han logrado con CFOP. Por eso, todos los tutoriales lo enseñan, todos los videos hablan de él, y «aprender speedcubing» se equipara a «aprender CFOP», lo cual, a su vez, significa memorizar 119 algoritmos.

Pero ten en cuenta que «memorizar algoritmos» es una característica específica del método CFOP, no de la velocidad en sí. CFOP requiere memorización porque eligió el camino de la enumeración exhaustiva. La enumeración requiere memoria, y ese es el precio que paga.

¿Existe algún método que no siga el camino de la enumeración exhaustiva? Sí.

## El método sin algoritmos: Roux

En 2003, el francés Gilles Roux publicó una aproximación completamente diferente. En lugar de construir capa por capa, primero se construyen dos «bloques» de 1×2×3 (uno a la izquierda y otro a la derecha), luego se resuelven las cuatro esquinas de la capa U, y finalmente, se terminan las seis aristas restantes utilizando solo giros de la capa M (capa media) y la capa U (capa superior).

En la publicación anterior, ya resolvimos el cubo usando este marco. Aquí revisaremos sus cuatro pasos, esta vez centrándonos en «qué memorizar en cada paso»:

| Paso | Descripción | Algoritmos a memorizar |
| --- | --- | --- |
| 1. Primer Bloque (FB) | Construir un bloque de 1×2×3 | 0, pura observación |
| 2. Segundo Bloque (SB) | Construir el otro bloque simétrico | 0, pura observación |
| 3. CMLL | Orientar y permutar las cuatro esquinas de la capa U | 9, todas derivables de los 3-cycles de esquinas |
| 4. LSE | Últimas seis aristas | 0, solo giros de las capas U y M |

De los cuatro pasos, tres no requieren ningún algoritmo. Para el único que sí, CMLL, aunque hay 42 casos en total, no necesitas 42 algoritmos. El 3-cycle de esquinas R U' L' U R' U' L U, que vimos en la publicación anterior, junto con su espejo y algunas variantes, puede cubrir todas las situaciones, aunque sea un poco más lento.

![Los cuatro pasos de Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Figura: Los cuatro pasos de Roux, mostrando solo las piezas resueltas hasta ese punto: Primer Bloque → Segundo Bloque → CMLL (cuatro esquinas de la capa U) → LSE (seis últimas aristas). Captura de pantalla del panel «Métodos» de mi página del cubo 3D.*

Por eso el método Roux puede prescindir de memorizar algoritmos: comprime la parte de memorización a un rincón muy pequeño, dejando el resto a la observación, la comprensión y la práctica.

## De 165 a 28 segundos: Cuatro etapas

![Duración de las cuatro etapas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Figura: Duración de las cuatro etapas. Etapa uno, 3 semanas; etapa dos, 11 días; etapa tres, dos meses; etapa cuatro, hasta ahora.*

### Etapa uno: 165 segundos → 60 segundos (Semanas 1-3)

**Datos**: Del 7 al 27 de mayo. La primera semana promedié 165 segundos, la tercera semana 68 segundos. Esta etapa es la transición de novato a principiante; con la repetición vas comprendiendo qué significa realmente cada movimiento y qué piezas se están desplazando.

**¿Dónde te atascas?**: El Primer Bloque (FB) es muy poco fluido; cada par de piezas se busca durante mucho tiempo. Después de encontrar un par, los principiantes suelen detenerse para seguir observando.

![Dónde invierten su tiempo los principiantes](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Figura: Dónde invierten su tiempo los principiantes. Las manos están paradas, los ojos buscan y buscan en el cubo; el tiempo de «búsqueda» es varias veces mayor que el tiempo de «giro».*

**Qué practicar**:

El mayor enemigo en esta etapa no es la lentitud de las manos, sino la de los ojos. Pasas mucho más tiempo «buscando» que «girando». Por lo tanto:

-   Mantén una posición de observación fija, sin rotar el cubo. Como mencioné en la publicación anterior, el ángulo de observación de Roux es fijo. En esta etapa, debes convertir el «no rotar el cubo» en memoria muscular. Cada vez que quieras girar el cubo, detente y pregúntate: ¿puedo ver la pieza que necesito desde este ángulo?
-   Slow solving (giro lento). No uses cronómetro, pero los movimientos deben ser siempre fluidos y continuos, sin ninguna pausa. Cada movimiento puede ser muy lento, pero sin interrupciones. La clave es que, mientras tus manos realizan el movimiento actual, tus ojos ya estén buscando el siguiente. Este es el núcleo del slow solving. Aunque parezca que te estás volviendo más lento, en realidad estás entrenando a tus ojos para que vean la relación entre la posición actual de una pieza y su posición final.
-   Practica solo el Primer Bloque (FB). Mezcla, construye el FB, vuelve a mezclar, y construye de nuevo el FB. No sigas con los pasos posteriores. El Primer Bloque es el paso más libre del método Roux y el que más entrena la observación.

No aprendas ningún algoritmo nuevo en esta etapa. Tu cuello de botella actual no son los algoritmos.

### Etapa dos: 60 segundos → 40 segundos (Semanas 4-5)

**Datos**: Del 27 de mayo al 7 de junio, 11 días. Este fue el período de descenso más rápido en todo el proceso. Es la etapa donde es más fácil recibir retroalimentación positiva: cada aprendizaje y optimización de movimientos se refleja de inmediato en los tiempos. La emoción de batir récords día tras día es difícil de comparar con casi cualquier otra cosa.

**¿Dónde te atascas?**: Movimientos inconsistentes. El cubo se traba.

**Qué practicar**:

En esta etapa, necesitas optimizar los movimientos de cada fase, aumentando la fluidez de cada acción basándote en la comprensión.

-   Segundo Bloque (SB). El SB es más difícil que el FB porque el espacio se reduce a la mitad y no puedes deshacer el FB ya construido. Los giros clave son R, r (las dos capas derechas), M y U. En esta etapa, debes aprender a usar r y M para mover piezas en lugar de R, de modo que el FB nunca se deshaga. Optimizar los pasos de los movimientos es ahorrar tiempo. Por ejemplo, tres giros en sentido horario equivalen a un giro en sentido antihorario.
-   Domina el uso de la capa M. La segunda mitad del método Roux se basa completamente en las capas M y U; la fluidez con la que gires la capa M determinará directamente tu límite inferior de velocidad. Empuja M con el dedo anular o medio, y empieza a practicar ritmos como M' U M' U.
-   Reconocimiento de CMLL. En la publicación anterior, «probamos» las cuatro esquinas con el 3-cycle. Ahora, es hora de mirar y luego actuar: antes de girar la capa U, observa la orientación de las pegatinas amarillas de las cuatro esquinas para determinar si hay 0, 1, 2 o 4 esquinas bien orientadas, y luego aplica directamente el movimiento correspondiente. También puedes lograr una mejora significativa en la eficiencia con una cantidad mínima de algoritmos, lo cual es muy rentable. Gran parte de estos algoritmos no necesitan memorizarse de memoria; puedes entenderlos a medida que los aplicas.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Vista al construir el Segundo Bloque" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Figura izquierda: Vista al construir el Segundo Bloque. El Primer Bloque ya está completado; solo se usan los giros R, r, M, U para insertar el par esquina-arista del lado derecho, sin tocar el Primer Bloque. Figura derecha: M' U M, una de las secuencias de movimientos más utilizadas en la segunda mitad del método Roux. La capa M sube, la capa U gira un poco, la capa M baja, intercambiando un par de aristas entre la capa U y la capa M en tres pasos.*

Puedes consultar mi [biblioteca de algoritmos Roux](/es/projects/rubiks-cube/roux#cmll), una versión simplificada y muy amigable para principiantes. La página de CMLL es de dos pasos: 7 algoritmos de orientación + 2 algoritmos de permutación, un total de 9. Esta es una opción muy rentable para aumentar la velocidad, fácil de aprender, y cada grupo dominado puede ahorrarte entre 1 y 2 segundos. Con un poco de práctica, los dominarás rápidamente, y algunos ya se presentaron en el artículo anterior; no necesitas recordarlos todos para bajar de los 30 segundos.

![CMLL de dos pasos, primera fase: siete orientaciones de esquinas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Figura: CMLL de dos pasos, primera fase: siete orientaciones de esquinas. En la vista superior, el amarillo es el color de la cara superior, y la pequeña barra exterior indica la orientación lateral del color superior de esa esquina. Reconoce la forma según el número de esquinas amarillas: 0 es H o Pi, 1 es S o AS, 2 es U, T o L.*

Después de alinear los amarillos en la parte superior, puedes usar estos dos algoritmos para alinear los laterales de las esquinas.

Si ya tienes una cara con colores alineados, por ejemplo, el rojo en la misma cara, gírala hacia la izquierda y luego puedes aplicar el algoritmo de intercambio adyacente. Si ninguna cara tiene colores alineados, elige el algoritmo de intercambio diagonal.

![CMLL de dos pasos, segunda fase: dos posiciones de esquinas](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Figura: CMLL de dos pasos, segunda fase: dos posiciones de esquinas. En la imagen de la izquierda, los dos cubos rojos de la izquierda ya están alineados, se usa el intercambio adyacente; en la imagen de la derecha, ninguna cara está alineada, se usa el intercambio diagonal.*

Puedes realizar mucho slow solving para entender cada grupo de algoritmos; no los trates como fórmulas, sino como secuencias de movimientos fijas que podrías descubrir por ti mismo con tiempo, pero que al presentarlas aquí te ahorrarán desvíos innecesarios.

Hay algo más, y es más efectivo que cualquier práctica: gasta algo de dinero y compra un cubo nuevo. Si el que tienes todavía es de esos viejos que hacen «clac-clac» al girar y se atascan, compra un cubo 3x3 moderno con imanes. Los cubos más nuevos te harán sentir el poder de la ingeniería optimizada: giros suaves, alineación automática y casi sin atascos. Solo con cambiar de cubo, tu tiempo promedio podría mejorar hasta 15 segundos. Una excelente opción en relación calidad-precio es el [MoYu RS3 M V5 (MagLev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), que cuesta alrededor de veinte dólares y te servirá hasta que alcances tiempos sub-20.

### Etapa tres: 40 segundos → 30 segundos (Semanas 5-13, dos meses)

**Datos**: Del 7 de junio al 4 de agosto. Lograr que mi Ao100 pasara de 39.8 a 29.9 segundos me llevó 58 días. En esta etapa, puede que ocasionalmente logres tiempos sub-30, pero solo con mucha suerte. Además, a medida que el tiempo promedio de resolución disminuye, la dificultad de mejorar solo un segundo aumenta exponencialmente. (Ao100 representa el promedio de las últimas 100 resoluciones, descartando el mejor y el peor 5% de los tiempos).

![Promedio diario de tiempos](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Figura: Promedio diario de tiempos. Después de mediados de junio, la curva se mantuvo casi plana, estancándose entre 30 y 40 segundos durante dos meses.*

**¿Dónde te atascas?**: Las últimas seis aristas de la capa U se resuelven muy lentamente; no se comprende la lógica, y cada vez se recurre a la prueba y error, perdiendo mucho tiempo. El Primer y Segundo Bloque aún no son lo suficientemente fluidos.

**Qué practicar**:

-   Reconocimiento de EO (Edge Orientation). Como expliqué en la publicación anterior, solo hay unas pocas situaciones para las aristas mal orientadas: 0, no 0 y no 4, 4 (2 arriba y 2 abajo), 4 (todas en la capa U), 4 (3 arriba y 1 abajo). El objetivo en esta etapa es: en el instante en que terminas de construir los bloques, sin contar, reconocer de un vistazo cuál es la situación.
-   La forma de practicar es la siguiente: después de mezclar, resuelve solo hasta el final del CMLL, luego haz una pausa, di el número de aristas mal orientadas, y luego continúa.
-   Mucha gente no entiende los movimientos aquí. La fase de EO, en última instancia, busca construir la forma de flecha (3 arriba y 1 abajo), porque la forma completa es solo un movimiento de la forma de flecha. Así, pensando a la inversa, es el último paso antes de completar la resolución. Entonces, no importa cuántas aristas mal orientadas haya, el objetivo final es construir una flecha. Si hay 4 aristas mal orientadas arriba, intercambia un par de aristas superior-inferior para bajar una arista mal orientada y lograr la flecha. Si hay 2 arriba y 2 abajo, intercambia un par de aristas superior-inferior para subir una arista mal orientada y lograr la flecha. Si hay 1 arriba y 1 abajo, o 2 arriba, usa M' U M para primero llegar a una de las situaciones anteriores y luego construir la flecha. Puedes descubrir los mejores pasos para la situación 1/1 a través de mucha observación y reflexión.

    ![Forma de flecha](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

    *Figura: Forma de flecha. Tres aristas mal orientadas en la capa U (resaltadas en cian) forman una flecha que apunta a la arista mal orientada de la capa inferior. En este punto, un solo M' U M puede orientar las cuatro aristas simultáneamente. [Abre este estado en el cubo 3D](/es/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) para verlo paso a paso.*

-   Practica intensamente el look-ahead (anticipación). Esta es la clave más importante para pasar de 40 a 30 segundos, y también la más contraintuitiva: gira un poco más lento, mira un poco más adelante. Al construir el Primer Bloque, no mires la pieza que estás insertando, sino dónde está la siguiente. Al principio te resultará muy incómodo y tus tiempos empeorarán, pero si persistes durante una semana, de repente mejorará mucho.
-   CMLL sin dudar. Si cada vez que haces un movimiento tienes que pensarlo antes de ejecutarlo, es que aún no lo dominas. Practica cada movimiento individualmente 50 veces hasta que tus manos se muevan automáticamente al ver la forma.

![Las seis formas de EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Figura: Las seis formas de EO. La etiqueta en la esquina superior izquierda indica el número de aristas mal orientadas (arriba / abajo), el amarillo son aristas bien orientadas y el cian son aristas mal orientadas. Solo la forma de flecha requiere un algoritmo; las otras cinco se transforman primero en la forma de flecha.*

Para la resolución de las aristas laterales, aquí usaremos el amarillo como cara superior, el blanco como cara inferior, y el Primer Bloque (FB) como rojo. Entonces, las aristas que necesitan ser orientadas son la arista amarilla-roja + la arista amarilla-naranja (resaltadas). La idea principal es llevar la arista amarilla-roja a la capa inferior mediante un intercambio de aristas superior-inferior, y también la arista amarilla-naranja a la capa inferior. Una vez que ambas aristas están en la capa inferior y opuestas, se gira la capa U a la posición correcta, y un M2 U o M2 U' resolverá las aristas laterales de la capa U.

Para ayudarte a comprender mejor, he recopilado las seis formas de EO en la [página LSE de la biblioteca de algoritmos del método Roux](/es/projects/rubiks-cube/roux#lse). Al hacer clic en «ver detalles» en cada imagen, se abrirá el estado correspondiente en el cubo 3D, con las aristas mal orientadas resaltadas automáticamente. En la misma página también encontrarás todas las situaciones para la permutación de UL/UR y las últimas cuatro aristas.

En esta etapa, una disminución en el volumen de práctica no es algo malo. Las mesetas no se superan con más volumen, sino corrigiendo un mal hábito específico. Mi experiencia es cambiar solo uno a la vez.

### Etapa cuatro: 30 segundos → 28 segundos (Después de la semana 13)

**Datos**: Después del 4 de agosto. El número de prácticas registradas durante todo el mes de septiembre fue de 122, aunque en realidad hubo muchas más sin registrar. He integrado el cubo como un juguete de escritorio; lo cojo espontáneamente para jugar unas cuantas veces cuando estoy de buen humor, cuando me siento frustrado o ansioso, durante los descansos del trabajo o cuando estoy aburrido. He permitido que el speedcubing se fusione con mi vida diaria. Mi Ao100 también descendió gradualmente de 29.9 a 28.2.

**¿Dónde te atascas?**: No hay un cuello de botella claro, simplemente falta de fluidez.

**Qué practicar**:

Si tu velocidad promedio aún está por encima de los 30 segundos, lo único que necesitas hacer es seguir practicando intensamente, en lugar de memorizar nuevos algoritmos.

Practica constantemente el look-ahead a través del slow solving, y te volverás cada vez más rápido.

Coge el cubo para jugar en cualquier momento; colócalo en un lugar accesible, como tu escritorio, para poder jugar durante los descansos del trabajo. También puedes grabar tus resoluciones con frecuencia para ver en qué etapa consumes más tiempo y luego optimizar específicamente esa parte. Esto es práctica deliberada: tu velocidad de mejora no depende del número total de prácticas normales, sino del número de prácticas deliberadas.

Entonces descubrirás que, una vez superada la meseta de 30-35 segundos, tu velocidad vuelve a bajar un escalón.

¡Llegado a esta etapa, felicidades! A los ojos de los principiantes, ¡ya eres un cubero muy hábil!

## El siguiente paso para avanzar

En primer lugar, no te preocupes por el límite superior del método Roux. Hay cuberos de élite que usan Roux y están entre los mejores del mundo; el método en sí no tiene un límite.

Además, casi todos los speedcubers de talla mundial que resuelven a una mano utilizan el método Roux, porque realmente se adapta muy bien a la operación con una sola mano.

**Los tiempos más rápidos con Roux en competiciones oficiales (WCA):**

-   Single de 4.11 segundos, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipinas), Valenzuela Cubing Open 2023, reconocido como el single oficial de Roux más rápido ([video de reconstrucción](https://www.youtube.com/watch?v=5H4TRJSUm-U))
-   Promedio de 5.98 segundos, también él, en 2019, que fue un récord asiático y el tercer promedio oficial sub-6 de la historia ([perfil WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
-   También es el [poseedor del récord mundial a una mano](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): promedio de 8.09, single de 6.05 (2024). En la comunidad a una mano, Roux es ampliamente considerado el mejor método.

Sin embargo, para bajar de los 15 segundos, es necesario pasar del CMLL actual de dos pasos a resolverlo de una sola vez, lo que exige memorizar algoritmos más complejos.

Aun así, yo prefiero la exploración libre: comprender a fondo los algoritmos a través del descubrimiento e incluso crear combinaciones con las que te sientas cómodo resulta mucho más divertido que memorizar mecánicamente.

El cubo de Rubik es, en su origen, un juego de lógica y no un ejercicio de memoria. Solo entendiendo los principios se consigue saber lo que haces en cada paso, no olvidar el método aunque no toques el cubo en tres meses, y ser capaz de deducir la solución para cualquier cubo que nunca antes hayas visto.

## Resumen

![Resolución completada](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

*Figura: Resolución completada.*

Pasar de poder resolver el cubo a hacerlo en menos de 30 segundos no es un proceso de memorizar algoritmos, sino un entrenamiento de la coordinación entre manos, ojos y cerebro.

Cuatro etapas, cuatro cosas: primero, aprende a observar sin rotar el cubo; luego, a construir el Segundo Bloque sin deshacer el Primer Bloque; después, a anticipar el siguiente movimiento mientras haces el actual; y finalmente, haz que tus manos sigan a tus ojos.

Los algoritmos no son la fuente de la velocidad. La observación sí lo es.

Aprende a generar retroalimentación positiva a través del progreso en cada etapa. Incluso la práctica de fluidez puede no ser tan aburrida, especialmente cuando te sorprendes rompiendo un nuevo récord. Sobre todo en las etapas inicial y media, experimentarás la alegría de batir récords cada día.

He recopilado todos los algoritmos y situaciones mencionados en este artículo en la [biblioteca de algoritmos del método Roux](/es/projects/rubiks-cube/roux). Puedes volver a consultarla cuando te atasques.

El mundo del cubo de Rubik es infinitamente divertido. ¡Que lo disfrutes!

## Apéndice 1: Lista de práctica por etapas

**Etapa uno (> 60 segundos)**

-   Mantén una posición de observación fija, sin rotar el cubo durante toda la resolución.
-   Encuentra el siguiente color deseado sin detenerte.
-   Slow solving: di la intención de cada movimiento.
-   Practica solo el Primer Bloque (FB), repítelo 50 veces.

**Etapa dos (60 → 40 segundos)**

-   Para el Segundo Bloque (SB), usa solo R, r, M, U, sin tocar el Primer Bloque.
-   Practica el CMLL de dos pasos.
-   Practica el ritmo M' U M' U, 5 minutos al día.

**Etapa tres (40 → 30 segundos)**

-   Detente al terminar CMLL y di el número de aristas mal orientadas de un vistazo.
-   Slow solving + look-ahead: tus ojos siempre deben estar en la siguiente pieza.
-   Al menos 20 resoluciones de alta calidad al día.

**Etapa cuatro (< 30 segundos)**

-   Graba videos para identificar pausas.
-   Finger tricks: R U R' U' con un solo dedo, capa M con el anular.
-   20 resoluciones de alta calidad al día, sin obsesionarse con el volumen.

## Apéndice 2: Herramientas

-   **csTimer**: [cstimer.net](https://cstimer.net/). Activa las estadísticas Ao5 / Ao12 / Ao100; tu Ao100 es tu nivel real, los tiempos individuales son cuestión de suerte.
-   **Cubo 3D**: [philoli.com/zh/projects/rubiks-cube](/es/projects/rubiks-cube/). Todos los algoritmos de este artículo se pueden introducir aquí para ver la animación.
-   **Biblioteca de algoritmos del Método Roux (versión amigable para principiantes)**: [philoli.com/zh/projects/rubiks-cube/roux](/es/projects/rubiks-cube/roux).
-   **Analizador de entrenamiento csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/es/projects/rubiks-cube/analyzer). Arrastra el archivo exportado de csTimer para ver la evolución de tus tiempos, las curvas de Ao5/Ao12/Ao100, el progreso de tus PB, la tabla de hitos y la curva de práctica de la Ley de Potencia.

*Este artículo contiene enlaces de afiliados de Amazon: al comprar a través de ellos, recibiré una pequeña comisión sin que el precio cambie para ti.*

## Más lecturas

-   [Cómo resolver el cubo de Rubik sin algoritmos: comprensible incluso para niños](/es/blog/solve-rubiks-cube-without-formulas)
