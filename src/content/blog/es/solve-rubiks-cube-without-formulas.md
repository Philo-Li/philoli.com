---
layout: blog
title: Cómo resolver el cubo de Rubik sin memorizar fórmulas: ¡Incluso un niño de primaria puede entenderlo!
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Aprende paso a paso a resolver el cubo de Rubik 3x3 sin memorizar ni una sola fórmula, utilizando la lógica de los conmutadores de la teoría de grupos y el método Roux de puentes.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Quizás seas un principiante en el cubo de Rubik y nunca lo hayas resuelto por completo.

La mayoría de los tutoriales que circulan solo te enseñan una serie de fórmulas extrañas, explicándote que si haces esto y luego aquello, el cubo se resolverá. Pero, al terminar, sigues sin entender el porqué.

Este artículo será tu salvación. Aprenderás desde cero a resolver el cubo sin memorizar ni una sola fórmula. Descubrirás el origen del cubo y cómo funciona. Te guiaré paso a paso, de la teoría a la práctica, para que resuelvas un cubo completo y te enseñaré a observar sus movimientos.

Quizás esta sea la primera vez que logres resolver un cubo de Rubik por ti mismo.

<!--more-->

## El nacimiento del cubo de Rubik

¿Por qué el cubo de Rubik tiene un encanto tan irresistible? Para empezar, hablemos de su origen.

En 1974, Ernő Rubik, un profesor de arquitectura húngaro, creó el primer prototipo de madera para demostrar a sus alumnos cómo las piezas podían moverse de forma independiente sin romper la estructura general. Pintó sus seis caras con diferentes colores, y así nació el cubo de Rubik.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Una cantidad de combinaciones asombrosa

Un cubo de Rubik 3x3 tiene 8 piezas de esquina, 12 de arista y 6 centrales, sumando un total de 26 piezas visibles. Sin embargo, las que realmente se pueden mover son 20, excluyendo las seis piezas centrales de cada cara.

¿Cuántos estados posibles tiene en total? **4.3 × 10¹⁹**.

¿Qué significa esto? Hay más estados posibles que granos de arena en la Tierra. Si intentáramos mil millones de estados por segundo, tardaríamos más de **1300 años** en recorrerlos todos. Si cada estado se escribiera en una hoja de papel y se apilaran, el grosor de la pila equivaldría a viajar de la Tierra al Sol y regresar ¡14000 veces!

El pequeño cubo 3x3 es, sin duda, una maravilla insospechada. Gracias a su innovador y divertido mecanismo, y a su infinita variedad de combinaciones, el cubo revolucionó el mercado desde su lanzamiento, atrayendo a todo tipo de jugadores y aficionados deseosos de probarlo. Rápidamente surgieron competiciones de cubos, diversas modalidades de juego (Speedcubing, Blindfolded, One-Handed, With Feet), múltiples métodos de resolución (Layer by Layer, Corners First, CFOP, Roux, Petrus, ZZ) e incluso cubos con formas no estándar (desde 2x2 hasta 7x7, Pyraminx, Skewb, Megaminx), que no han dejado de aparecer.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Tal es el encanto del cubo que ha llevado a matemáticos a investigarlo durante décadas en busca del "número de Dios", astronautas lo han llevado al espacio, y personas de todas las edades y géneros brillan en diversas competiciones. Sin embargo, a pesar de su inmenso atractivo, la comunidad de jugadores de cubo es relativamente pequeña. Por eso, con este artículo, me gustaría enseñar a más gente a resolverlo y a disfrutar de la diversión que ofrece este juego de ingenio.

## El dilema de las fórmulas

La mayoría de los métodos de resolución que se encuentran en el mercado requieren que el jugador memorice muchas fórmulas, lo cual es muy desalentador para los principiantes. Antes de poder disfrutar de la satisfacción de resolver el cubo, se topan con esta barrera de fórmulas. El conocido método CFOP, por ejemplo, tiene más de 100, y un principiante debe aprenderse al menos varias decenas.

Por eso, hoy quiero compartir contigo un método que te permitirá disfrutar del cubo sin necesidad de memorizar fórmulas. Podrás resolverlo basándote únicamente en la observación y la comprensión.

## El arma secreta de las matemáticas: la teoría de grupos

Pregunta: ¿Cómo resolver el cubo de Rubik sin memorizar ni una sola fórmula?

Aquí es donde sacamos nuestra arma secreta matemática: la teoría de grupos. No hay problema que no pueda resolverse con matemáticas.

¿Qué relación tiene el cubo de Rubik con la teoría de grupos? El cubo es, de hecho, un grupo. Cada giro en el cubo es una operación de permutación. Esta operación tiene varias características: puede combinarse, puede invertirse, pero no es conmutativa.

La multiplicación que aprendimos en primaria es una operación conmutativa; el resultado de A × B es idéntico al de B × A. Sin embargo, en el grupo del cubo de Rubik, A y B no son equivalentes si se intercambian: hacer R y luego U es completamente diferente a hacer U y luego R. Así, al entender los grupos, entendemos el cubo de Rubik. Y jugar con el cubo, a su vez, nos ayuda a comprender los grupos.

¡Felicidades! Ya has aprendido la diferencia entre grupos abelianos (como la multiplicación y la suma) y grupos no abelianos (como el grupo del cubo de Rubik).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Nota: Las operaciones estándar del cubo de Rubik se representan con letras. R significa girar la capa derecha 90 grados en el sentido de las agujas del reloj; U, girar la capa superior 90 grados en el sentido de las agujas del reloj; R', girar 90 grados en sentido antihorario. M' es la capa central hacia arriba, y M es la capa central hacia abajo).

Puedes observar y aprender cómo giran las caras del cubo directamente en la animación interactiva que encontrarás en el apéndice.

## Principios: El corazón de resolver sin fórmulas: el conmutador

Para resolver el cubo de Rubik, necesitamos lograr un estado en el que podamos **ajustar la posición de ciertas piezas sin alterar la de las demás.**

En matemáticas, esta operación se llama conmutador y se escribe **A B A⁻¹ B⁻¹**.

A⁻¹ es la operación inversa de A.

Podemos usar una analogía muy cotidiana: un ascensor. Imagina que quieres llevar a una persona del primer piso al tercero:

1. **A**: La persona entra al ascensor.
2. **B**: El ascensor sube al tercer piso.
3. **A⁻¹**: La persona sale del ascensor.
4. **B⁻¹**: El ascensor regresa al primer piso.

Resultado: El ascensor vuelve a su posición original, pero la persona ha pasado del primer al tercer piso. La clave está en que, al regresar el ascensor, la persona ya no está dentro, lo que permite que el entorno se restaure mientras el objetivo cambia de lugar.

Por ejemplo, en el cubo de Rubik, R y R⁻¹ corresponden a girar la capa derecha 90 grados en sentido horario, y luego, en el tercer paso, 90 grados en sentido antihorario.

Esta secuencia inversa A⁻¹ B⁻¹ permite restaurar el entorno que fue alterado por la operación A B, logrando así intercambiar solo ciertas piezas específicas sin afectar el resto del cubo.

¿Por qué no A A⁻¹ B B⁻¹? Porque de esa manera cada movimiento se cancelaría directamente, y las piezas no se intercambiarían. Hacer una operación A e inmediatamente después su inversa A⁻¹ equivaldría a no hacer nada (como girar la capa superior 90 grados en sentido antihorario e inmediatamente después 90 grados en sentido horario). Por lo tanto, debe ser **A B A⁻¹ B⁻¹** para lograr un intercambio.

Este es el intercambio más básico, y el movimiento elemental más intuitivo en el cubo de Rubik es: **R U R' U'**.

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Puede combinarse en secuencias más largas para lograr diferentes efectos de permutación, como esta: (R U R' U') (R U R' U') (R U R').

De hecho, este es el origen de las fórmulas. ¿Por qué existen las fórmulas? Simplemente combinan una serie de operaciones de permutación básicas en secuencias. Ejecutar estas secuencias permite alcanzar rápidamente resultados específicos, como resolver una arista o una esquina. Diferentes secuencias pueden usarse en conjunto para llevarnos a la resolución final del cubo.

Una vez que entiendas el principio, incluso podrás crear tus propias fórmulas. (Cómo crear tus propias fórmulas para el cubo de Rubik lo desglosaremos en detalle en el próximo artículo).

Así que, para resolver el cubo sin memorizar ni una sola fórmula, solo necesitamos aprender la lógica de las permutaciones básicas. Esto nos permitirá aplicar el mismo razonamiento en cualquier situación. Los movimientos de permutación más elementales intercambiarán la posición de tres piezas de esquina o de tres piezas de arista.

## Cómo realizar intercambios en el cubo

Como mencionamos antes, el movimiento elemental de intercambio más intuitivo en el cubo de Rubik es: **R U R' U'**. Si comprendes a fondo este movimiento, podrás resolver las dos primeras capas del cubo de inmediato.

Este movimiento, en esencia, significa: desplazar (la capa derecha), insertar (la pieza objetivo), reposicionar (la capa derecha), reposicionar (la capa superior).

Así logramos insertar la pieza de esquina delantera izquierda y la pieza de arista central en la posición inferior derecha.

Este movimiento puede variar y transformarse en **U R U' R'**, o **F R F' R'**, y así sucesivamente en cualquier posición; incluso con capas intermedias como **M U M' U'**, o también **U2 R U2 R'**.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

En las etapas iniciales, el cubo está en su estado más caótico. Por ello, podemos usar una gran cantidad de estos intercambios básicos para resolver primero una cara o alguna otra sección parcial, reduciendo así el nivel de desorden.

Además, debido al gran desorden inicial, el último movimiento U' de **R U R' U'**, que restaura el entorno, puede incluso omitirse según la situación, dando paso directamente al siguiente movimiento. Esto lo simplifica a: desplazar, insertar, reposicionar.

Desplazar, insertar, reposicionar.

¡Ese es el movimiento clave! Felicidades, ya entiendes cómo jugar al cubo de Rubik.

Sin embargo, en etapas más avanzadas, necesitaremos secuencias de permutación más largas para intercambiar piezas específicas sin deshacer completamente el estado actual del cubo.

Tomemos como ejemplo **R U' L' U R' U' L U**. Este movimiento permite intercambiar solo tres piezas de esquina sin afectar a las demás. Desglosado en la lógica del conmutador:

```
A   = R U'   (saca la pieza de esquina)
B   = L'     (mueve la capa izquierda)
A⁻¹ = U R'   (restaura la operación A)
B⁻¹ = U' L U (restaura la operación B, con ajuste)
```

Efecto: La pieza de esquina inferior izquierda permanece en su lugar, mientras las otras tres esquinas intercambian posiciones.

Esta es probablemente la única otra fórmula que necesitarás comprender en este artículo. Aprenderemos a usarla en la sección práctica, entendiéndola a través de la manipulación, sin necesidad de memorizarla.

## Práctica: Resolución desde cero

Finalmente, llegamos a la parte principal de este artículo. Te guiaré paso a paso para que, solo con observación y comprensión, logres resolver el cubo de Rubik por completo desde cero.

Preparativos necesarios:

- Un cubo de Rubik
- Y un poco de paciencia (ya que nuestro objetivo principal es la observación y la comprensión).

Primero, asumamos que ya tienes un cubo de Rubik en tus manos. Lo desordenaremos con la secuencia estándar internacional (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), y a continuación, lo resolveremos juntos.

O puedes jugar directamente con la versión online. Al hacer clic en este enlace, verás el cubo ya desordenado: [3D Cubo de Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Para resolverlo, utilizaremos el enfoque del elegante método Roux de puentes. A diferencia de los métodos capa por capa, el método de puentes consiste en resolver primero los bloques de 1x2x3 de los lados izquierdo y derecho, conocidos como 'puentes', para luego abordar la capa superior y las piezas restantes.

El método de puentes es muy libre y flexible, requiere menos movimientos que muchos métodos populares y la cantidad de fórmulas a memorizar es relativamente pequeña, ya que se basa fundamentalmente en la lógica de los conmutadores. Dentro de este marco, aprenderemos a resolver el cubo sin memorizar ni una sola fórmula.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Paso uno: Fijar la posición de observación

La posición de observación en el método de puentes es fija. Durante el proceso de resolución, no necesitamos girar el cubo constantemente; en su lugar, mantenemos el mismo ángulo para pensar y resolver. Con esta cara fija, nos resultará muy fácil identificar algunas piezas de esquina y arista, y saber dónde deben ir.

Podemos tomar este ángulo como referencia:

- Cara frontal (mirando hacia ti): Verde
- Lado izquierdo: Rojo
- Lado derecho: Naranja
- Capa superior: Amarilla
- Capa inferior: Blanca
- Cara trasera: Azul

### Paso dos: Construir los puentes izquierdo y derecho

**Secuencia para construir el puente izquierdo:**

1. Primero, coloca la pieza de arista blanco-rojo en su lugar (el pilar inferior izquierdo).
2. Luego, coloca la pieza de arista azul-rojo trasera en su lugar.
3. Finalmente, coloca las dos piezas de esquina rojas delanteras en su lugar.

Estado del puente izquierdo completo:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Este proceso no requiere ninguna fórmula; solo con observación y comprensión es suficiente. Con la práctica, te volverás cada vez más hábil.

**F' L**: Utilizando la observación, localiza la arista rojo-blanco y colócala en su lugar, con el blanco hacia abajo y el rojo hacia la izquierda.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Coloca la arista azul-rojo y las esquinas en su lugar.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Encuentra la posición de las dos últimas piezas del puente izquierdo y busca la manera de colocarlas en su lugar. Así obtendremos un puente izquierdo perfecto.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**El puente derecho se construye de forma similar**, sustituye el color rojo por naranja y repite los pasos anteriores. Sin embargo, ten cuidado de no desarmar el puente izquierdo que ya has construido. Si necesitas espacio, puedes mover temporalmente el puente izquierdo a otra posición para que las operaciones del lado derecho no lo afecten, y luego restaurarlo una vez que hayas terminado con el lado derecho.

**Parte central del puente derecho**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Primera pieza del puente derecho**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Hemos preparado el último módulo del puente derecho y queremos insertarlo en su posición. Para ello, primero desplazamos el puente izquierdo (F') para hacer espacio, luego movemos el módulo (U), y finalmente, restauramos ambos puentes, el izquierdo y el derecho, a sus posiciones.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Este es el estado con ambos puentes completados. Lo importante es que los puentes estén formados; no te preocupes por el resto de los colores por ahora.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Paso tres: Resolver las esquinas de la capa superior

Una vez que hayas resuelto los puentes izquierdo y derecho, el siguiente paso es resolver las cuatro piezas de esquina restantes. Para esto, utilizaremos la permutación de tres esquinas, que permite que tres esquinas roten sus posiciones: de A a B, de B a C, y de C de vuelta a A.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Permutación de tres esquinas

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Fórmula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>La pieza de esquina inferior izquierda permanece en su lugar.</li>
      <li>Las otras tres esquinas intercambian posiciones en sentido **antihorario**.</li>
      <li>Pero sus colores internos giran en sentido **horario**.</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Fórmula 2 (versión espejo)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>La pieza de esquina inferior derecha permanece en su lugar.</li>
      <li>Las otras tres esquinas intercambian posiciones en sentido **horario**.</li>
      <li>Pero sus colores internos giran en sentido **antihorario**.</li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Solo hay cuatro tipos de orientaciones de esquinas que puedes encontrar: 0, 1, 2 o 4 esquinas bien orientadas.

- **4 esquinas bien orientadas**: Estado resuelto.
- **1 esquina bien orientada** (forma de pez): Realiza una vez más la permutación de tres esquinas o su versión espejo para completarlo.
- **0 / 2 esquinas bien orientadas**: Primero, coloca una esquina mal orientada en la posición que no se ve afectada por la permutación (la esquina inferior izquierda), realiza una permutación de tres esquinas, y se convertirá en 1 esquina bien orientada, volviendo a la situación anterior.

A veces, la versión básica de la permutación de tres esquinas necesita realizarse dos veces para resolverlo, mientras que la versión espejo solo necesita una vez para completarlo. Los principiantes solo deben dominar la versión básica, centrándose en la observación y la comprensión, y luego podrán aplicarlo de forma intuitiva. Esta permutación de tres esquinas con el amarillo hacia arriba es también una fórmula clásica y muy conocida: la fórmula del 'pez', por lo que puedes familiarizarte con su forma.

Tampoco necesitas memorizar esta fórmula; observa cómo se mueven los dos cubos verdes y hazlo tú mismo varias veces hasta familiarizarte. La clave es intercambiar tres piezas de esquina de la capa superior.

Para el cubo con los puentes izquierdo y derecho ya completados, si encontramos dos amarillos en la parte superior, colocamos una esquina que no sea amarilla en la posición inferior izquierda y realizamos una permutación de tres esquinas. Luego, hacemos dos permutaciones de tres esquinas más, o una permutación de tres esquinas en su versión espejo, para lograr que las cuatro esquinas superiores tengan el amarillo hacia arriba.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

¡Cuatro esquinas amarillas completadas!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Ajustar posiciones (alinear los colores laterales)

Una vez que las cuatro esquinas tienen el color amarillo hacia arriba, es necesario que los colores laterales de las esquinas estén alineados para que estas se coloquen correctamente en su lugar.

Para esto, usaremos una **variante de la J-perm**: **R U2 R' U' R U2 L' U R' U' L**.

La lógica de esta fórmula se puede desglosar en "traslado de pares + intercambio lógico":

- Primera parte `R U2 R' U' R`: Lleva un par a una zona segura para almacenarlo temporalmente, liberando espacio.
- Segunda parte `U2 L' U R' U' L`: Utiliza la lógica de la permutación de tres esquinas para completar con precisión el intercambio de dos piezas de esquina.

**Efecto**: Intercambia la posición de las dos piezas de esquina de la derecha, manteniendo el amarillo hacia arriba, y el resto de las esquinas inalteradas.

Esto permite intercambiar la posición de cualquier par de esquinas adyacentes (ajustando con U cuáles dos esquinas quedan a la derecha). Al repetir el intercambio varias veces, las cuatro esquinas se alinearán y se colocarán definitivamente en su lugar.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Tampoco es necesario memorizar esta fórmula; observa cómo se mueven los dos cubos verdes y hazlo tú mismo varias veces hasta familiarizarte. La clave es intercambiar las dos esquinas superiores de la derecha, manteniendo el amarillo hacia arriba.

### Paso cuatro: Resolver las últimas seis aristas (LSE, Last Six Edges)

En este punto, primero alinea los centros para que el amarillo quede en la parte superior y el blanco en la inferior, y luego ajusta las aristas.

Solo quedan 6 piezas de arista. Este paso utiliza únicamente las operaciones **M** y **U**, lo cual es muy intuitivo.

#### 4a: Ajustar la orientación (EO, Edge Orientation)

**Método de identificación**: Observa si la pegatina blanca o amarilla de la arista mira hacia arriba o hacia abajo.

- Hacia arriba / Hacia abajo = Arista bien orientada ✓
- Hacia un lado = Arista mal orientada ✗

**Método de ajuste**: Usa **M U M'** o **M' U M** para voltear las aristas mal orientadas.

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Comprensión intuitiva: M sube las aristas de la capa central, U ajusta la posición, y M' las baja de nuevo.

Repite varias veces hasta que todas las aristas tengan el blanco o amarillo mirando hacia arriba o hacia abajo.

Podemos llamar a las aristas con la orientación correcta "aristas bien orientadas" y a las incorrectas "aristas mal orientadas".

Como se muestra, las tres aristas resaltadas en la capa superior son aristas mal orientadas, ya que no son ni amarillas ni blancas.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Técnica de ajuste**: Solo hay cuatro tipos de situaciones de aristas mal orientadas que puedes encontrar:

- **0 aristas mal orientadas**: Estado resuelto.
- **Ni 0 ni 4 aristas mal orientadas**: Utiliza **M' U M** para cambiar la cantidad de aristas mal orientadas, aumentándolas a 4.
- **4 aristas mal orientadas (2 arriba y 2 abajo)**: Intercambia las aristas de arriba y abajo con **M' U2 M** para obtener una configuración de 3 arriba y 1 abajo.
- **4 aristas mal orientadas (3 arriba y 1 abajo)**: Las tres aristas mal orientadas de la capa superior formarán una flecha. Gira la capa superior para que la flecha apunte hacia la arista mal orientada de la capa inferior, y realiza **M' U M** una vez; las cuatro aristas mal orientadas se cancelarán y todas quedarán bien orientadas.

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Si no aparece la flecha, intenta **M' U M** repetidamente; siempre lograrás formarla. Una vez que avances, podrás ir encontrando patrones.

#### 4b: Resolver las aristas laterales (rojo y naranja)

Localiza las aristas rojo-amarillo y naranja-amarillo (el objetivo es que vuelvan a las piezas de arista laterales izquierda y derecha). Colócalas en su posición correcta mediante la permutación de tres aristas.

**Consejos**:

1. Mueve la arista rojo-amarillo (o naranja-amarillo) a la parte superior de la capa central y haz que baje al fondo intercambiando las aristas superior e inferior (**M' U2 M**).
2. Haz que la otra arista naranja-amarillo (o rojo-amarillo) baje al fondo en el lado opuesto.
3. Gira la capa superior para que la arista roja aparezca en la posición opuesta a la arista rojo-amarillo que ya está en el fondo.
4. Gira la capa central media vuelta (**M2**), y luego observa para reposicionar la capa superior (**U**).

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Resolver las últimas cuatro aristas (azul y verde)

**Consejos**:

- Usa repetidamente la **permutación de tres aristas** para intercambiar las aristas superior e inferior: **M' U2 M**. El último paso se resuelve con observación y reposicionamiento con **U2**.
- Truco rápido: Coloca la arista blanco-verde (o blanco-azul) encima de su posición objetivo, intercambia las aristas superior e inferior, y la arista blanco-verde (o blanco-azul) se colocará en su lugar.

Solo hay tres situaciones posibles:

- Ya está correcto → ¡Completado!
- Necesita M2 → Haz **M2** una vez.
- Necesita intercambio → **M' U2 M U2** o **M U2 M' U2**.

También podemos simplificar la lógica de la permutación de tres aristas: M' es la capa central que sube, U2 gira la capa superior media vuelta, M restaura la capa central, y U2 restaura la capa superior.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### ¡Completado!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Resumen

No hay necesidad de memorizar fórmulas, solo la lógica del conmutador: "abrir-operar-cerrar". Descubrirás que este proceso es mucho más divertido que memorizar fórmulas, y no tendrás que preocuparte por olvidarlo con el paso de los años, ya que siempre podrás deducirlo por ti mismo.

La misma lógica puede aplicarse para resolver cualquier cubo de Rubik, incluyendo las variedades más extrañas y con formas inusuales.

Sin embargo, si quieres adentrarte en el mundo de la velocidad (speedcubing), te espera un camino de práctica interminable. Pero para un principiante, con un poco de práctica, resolverlo en menos de 90 segundos no debería ser un problema.

Existen miles de métodos de resolución; la clave es encontrar el que te resulte más elegante o cómodo.

El mundo del cubo de Rubik ofrece una diversión infinita. ¡Espero que lo disfrutes!

## Apéndice 1: Guía rápida del método de resolución de este artículo (La "bíblia" para resolver el cubo)

1. **Construcción de los puentes izquierdo y derecho: Basada en la observación y la intuición.**
   - Consejos: Cuando domines la observación y la anticipación, podrás construir módulos adicionales de forma prioritaria o incluso los puentes izquierdo y derecho de forma simultánea, lo que te permitirá reducir el número de movimientos y te dará mucha libertad.
2. **Resolver la orientación superior de las cuatro esquinas: Cuatro amarillos hacia arriba.**
   - Permutación de tres esquinas de la capa superior: **R U' L' U R' U' L U** (La pieza de esquina inferior izquierda permanece inmóvil, mientras los colores internos de las otras tres esquinas giran en sentido horario).
   - Permutación de tres esquinas de la capa superior (versión espejo): **L' U R U' L U R' U'** (La pieza de esquina inferior derecha permanece inmóvil, mientras los colores internos de las otras tres esquinas giran en sentido antihorario).
3. **Resolver los laterales de las cuatro esquinas superiores.**
   - **Ajuste fino de la posición de las esquinas superiores**: **R U2 R' U' R U2 L' U R' U' L** (Mantiene las cuatro esquinas con el amarillo hacia arriba, intercambiando la posición de las dos esquinas del lado derecho).
4. **Cambiar la orientación de las aristas para que el blanco o amarillo miren hacia arriba o hacia abajo.**
   - Primero, alinea los centros para que el amarillo quede en la parte superior y el blanco en la inferior, y luego ajusta las aristas.
   - Usa **M' U M** para cambiar la cantidad de aristas mal orientadas, forma una flecha y dirígela hacia la arista mal orientada. Haz **M' U M** una vez, y las cuatro aristas mal orientadas se cancelarán y se colocarán en su lugar.
5. **Resolver las aristas laterales (rojo y naranja).**
   - Primero, haz que la arista rojo-amarillo (o naranja-amarillo) baje al fondo intercambiando las aristas superior e inferior (**M' U2 M**).
6. **Resolver las aristas restantes (azul y verde).**
   - Usa repetidamente la **permutación de tres aristas** para intercambiar las aristas superior e inferior: **M' U2 M**. El último paso se resuelve con observación y reposicionamiento con **U2**.

No necesitas memorizar ninguna de estas fórmulas; se incluyen en el apéndice solo como referencia. En realidad, al intentar hacerlas tú mismo, observando y comprendiendo cómo se mueven las piezas correspondientes, te familiarizarás con ellas en pocas repeticiones. La clave es intercambiar tres piezas de esquina de la capa superior.

## Apéndice 2: Sitios web y herramientas útiles

¡También he creado un cubo de Rubik 3D online para que puedas jugar! Puedes girarlo libremente, desordenarlo y resolverlo con fórmulas preestablecidas, ¡y cada movimiento viene con una bonita animación!

[3D Cubo de Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Secuencia de desordenado utilizada en este tutorial: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Pasos de resolución de puentes izquierdo-derecho de este tutorial: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Al hacer clic en este enlace, verás el cubo ya desordenado: [3D Cubo de Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Temporizador de cubo de Rubik utilizado por campeones mundiales: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
