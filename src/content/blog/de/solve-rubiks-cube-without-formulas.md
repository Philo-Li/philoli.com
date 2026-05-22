---
layout: blog
title: "Wie man einen Zauberwürfel ohne Formeln löst: Auch für Grundschüler verständlich"
date: 2026-05-09 12:00:00
tags:
  - Zauberwürfel
  - Anleitung
  - Gruppentheorie
  - Mathematik
  - Roux-Methode
categories: 日常折腾
description: Erfahre Schritt für Schritt, wie du einen 3x3 Zauberwürfel ohne eine einzige Formel lösen kannst, basierend auf der Idee der Kommutatoren aus der Gruppentheorie und der Roux-Brückenmethode.
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="Vollständig gelöster Zauberwürfel" />
</figure>

Vielleicht bist du ein Neuling am Zauberwürfel (Rubik's Cube) und hast ihn noch nie komplett gelöst.

Die meisten Tutorials da draußen bombardieren dich mit einer Reihe seltsamer Formeln und sagen dir nur, dass du dies und das tun sollst, und schon ist der Würfel gelöst. Doch auch nach der Ausführung verstehst du nicht, warum es funktioniert.

Dieser Artikel wird dein Retter sein. Du wirst von Grund auf lernen, einen Zauberwürfel ohne das Auswendiglernen von Formeln zu lösen. Du wirst die Ursprünge des Würfels kennenlernen und verstehen, wie er funktioniert. Ich werde dich Schritt für Schritt von der Theorie zur Praxis führen, um einen vollständigen Zauberwürfel zu lösen und dir beibringen, wie du dabei beobachten kannst.

Vielleicht ist dies das erste Mal, dass du einen Zauberwürfel eigenhändig erfolgreich löst.

<!--more-->

## Die Geburt des Zauberwürfels

Warum übt der Zauberwürfel eine so große Faszination aus? Zuerst wollen wir darüber sprechen, wie er entstanden ist.

Im Jahr 1974 schuf der ungarische Architekturprofessor Ernő Rubik einen ersten Prototyp aus Holz, um seinen Studenten zu demonstrieren, wie sich einzelne Teile unabhängig voneinander bewegen lassen, ohne die Gesamtstruktur zu zerstören. Er bemalte die sechs Seiten mit verschiedenen Farben, und so war der Zauberwürfel geboren.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="Rubik's Würfel Prototyp" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik Porträt" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Eine erstaunliche Anzahl von Kombinationen

Ein 3x3 Zauberwürfel hat 8 Ecksteine, 12 Kantensteine und 6 Mittelsteine – insgesamt 26 sichtbare Steine. Tatsächlich beweglich sind jedoch nur die 20 Steine, die nicht zu den sechs Mittelsteinen gehören.

Wie viele Gesamtzustände gibt es also? **4,3 × 10¹⁹**.

Was bedeutet das? Diese Anzahl von Zuständen übertrifft sogar die Anzahl der Sandkörner auf der Erde. Wenn man eine Milliarde Zustände pro Sekunde ausprobiert, würde es über **1300 Jahre** dauern, alle zu durchlaufen. Würde man jeden einzelnen Zustand auf ein Blatt Papier schreiben und diese übereinanderstapeln, entspräche die Dicke einer 14.000-fachen Reise von der Erde zur Sonne und zurück.

Der kleine 3x3 Zauberwürfel ist wirklich nicht zu unterschätzen. Aufgrund seiner neuartigen und interessanten Spielweise, seiner unzähligen Variationen und seines endlosen Reizes eroberte er bei seiner Markteinführung sofort den Markt und zog Enthusiasten aus aller Welt an. Schnell entwickelten sich Wettbewerbe (Speedsolving, Blindfolded, One-Handed, With Feet), verschiedene Lösungsmethoden (Layer by Layer, Corners First, CFOP, Roux-Brückenmethode, Petrus, ZZ) und sogar Würfelvarianten (vom 2x2 bis 7x7, Pyraminx, Skewb, Megaminx) schossen wie Pilze aus dem Boden.

![Zauberwürfel-Varianten](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Die Faszination des Zauberwürfels ist so groß, dass Mathematiker jahrzehntelang die Mathematik hinter dem Würfel erforschten, um die "Gotteszahl" zu finden. Astronauten nahmen ihn mit ins All, und Menschen jeden Alters glänzten in verschiedenen Wettbewerben. Doch im Vergleich zur Anziehungskraft des Würfels gibt es immer noch zu wenige Spieler. Mit diesem Artikel möchte ich jedem das Lösen des Zauberwürfels beibringen und die Freude an diesem Denkspiel vermitteln.

## Das Dilemma der Formeln

Die meisten auf dem Markt erhältlichen Lösungsmethoden erfordern, dass Spieler viele Formeln auswendig lernen. Das ist für Anfänger sehr abschreckend; bevor sie die Freude am Lösen des Würfels überhaupt erleben können, werden sie von den Formeln ausgebremst. Die bekannte CFOP-Methode umfasst über 100 Formeln, und selbst Anfänger müssen Dutzende davon lernen.

Deshalb möchte ich heute eine Methode vorstellen, die es dir ermöglicht, den Zauberwürfel mit Freude zu spielen, ohne Formeln auswendig lernen zu müssen. Du wirst den Würfel allein durch Beobachtung und Verständnis lösen können.

## Die mathematische Waffe: Gruppentheorie

Frage: Wie löst man einen Zauberwürfel, ohne eine einzige Formel auswendig zu lernen?

Hier müssen wir unsere mathematische Geheimwaffe einsetzen: die Gruppentheorie. Es gibt kein Problem, das sich nicht mit Mathematik lösen lässt.

Was hat der Zauberwürfel mit der Gruppentheorie zu tun? Der Zauberwürfel ist im Grunde eine Gruppe. Jede Drehung am Würfel ist eine Permutationsoperation. Diese Operation hat mehrere Eigenschaften: Sie kann kombiniert und umgekehrt werden, ist aber nicht kommutativ.

Die Multiplikation, die wir in der Grundschule gelernt haben, ist eine kommutative Operation; das Ergebnis von A × B und B × A ist identisch. In der Gruppe des Zauberwürfels sind A und B nach dem Vertauschen jedoch nicht äquivalent; ein R gefolgt von einem U ist eine völlig andere Operation als ein U gefolgt von einem R. Wenn wir also die Gruppe verstehen, verstehen wir den Zauberwürfel. Und das Spielen mit dem Zauberwürfel hilft uns auch, die Gruppe zu verstehen.

Herzlichen Glückwunsch, du hast soeben den Unterschied zwischen einer Abelschen Gruppe (Multiplikation und Addition sind Abelsche Gruppen) und einer nicht-Abelschen Gruppe (die Zauberwürfel-Gruppe) gelernt.

(Ergänzung: Einige Leser haben darauf hingewiesen, dass die obige Aussage nicht ganz präzise ist, daher eine kleine Ergänzung dazu. Die ganzen Zahlen bilden unter der Addition eine abelsche Gruppe, während die natürlichen Zahlen N unter der Addition keine abelsche Gruppe bilden, da zum Beispiel 3 kein inverses Element -3 besitzt und -3 keine natürliche Zahl ist. Die reellen Zahlen ungleich null, die rationalen Zahlen ungleich null und die komplexen Zahlen ungleich null bilden unter der Multiplikation ebenfalls abelsche Gruppen. Die Analogie im Originaltext diente hauptsächlich dazu, Anfängern die Kernintuition von „kommutativ vs. nicht-kommutativ" zu vermitteln.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U und U R unterschiedliche Reihenfolge, unterschiedliche Effekte - Teil 1" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U und U R unterschiedliche Reihenfolge, unterschiedliche Effekte - Teil 2" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Anmerkung: Die Standardoperationen des Zauberwürfels werden üblicherweise durch Buchstaben dargestellt. R steht für eine 90-Grad-Drehung der rechten Schicht im Uhrzeigersinn, U für eine 90-Grad-Drehung der oberen Schicht im Uhrzeigersinn, R' ist eine 90-Grad-Drehung gegen den Uhrzeigersinn, M' ist eine Drehung der mittleren Schicht nach oben, und M ist eine Drehung der mittleren Schicht nach unten.)

Du kannst direkt im Online-Zauberwürfel-Animationsbereich im Anhang beobachten und lernen, wie sich der Würfel dreht.

## Das Prinzip: Der Kern des Nicht-Auswendiglernens von Formeln: Der Kommutator

Um den Zauberwürfel zu lösen, müssen wir Zustände am Würfel erreichen, die folgendermaßen funktionieren: **Die Position bestimmter Steine anpassen, ohne die Position anderer Steine zu verändern.**

In der Mathematik wird diese Operation als Kommutator bezeichnet und als **A B A⁻¹ B⁻¹** geschrieben.

A⁻¹ ist die Umkehroperation von A.

Wir können eine sehr alltägliche Analogie verwenden – einen Aufzug. Angenommen, du möchtest eine Person vom 1. in den 3. Stock befördern:

1.  **A**: Die Person betritt den Aufzug.
2.  **B**: Der Aufzug fährt in den 3. Stock.
3.  **A⁻¹**: Die Person verlässt den Aufzug.
4.  **B⁻¹**: Der Aufzug kehrt in den 1. Stock zurück.

Ergebnis: Der Aufzug ist an seine Ausgangsposition zurückgekehrt, aber die Person wurde vom 1. in den 3. Stock befördert. Der Schlüssel liegt darin: Als der Aufzug zurückkam, war die Person nicht mehr darin – die Umgebung ist also wiederhergestellt, aber das Ziel hat seine Position geändert.

Am Zauberwürfel entspricht R und R⁻¹ beispielsweise einer 90-Grad-Drehung der rechten Schicht im Uhrzeigersinn, gefolgt von einer 90-Grad-Drehung gegen den Uhrzeigersinn im dritten Schritt.

Diese Umkehroperation A⁻¹ B⁻¹ kann die durch die AB-Operation durcheinandergebrachte Umgebung wiederherstellen, wodurch bestimmte Steine vertauscht werden, ohne die Umgebung zu beeinträchtigen.

Warum nicht A A⁻¹ B B⁻¹? So würden sich alle Bewegungen direkt aufheben, und die Steine könnten nicht getauscht werden. Man führt gerade eine Operation A aus und direkt danach die Umkehroperation A⁻¹, was zusammen so ist, als hätte man nichts getan (z. B. die obere Schicht 90 Grad gegen den Uhrzeigersinn drehen und direkt danach 90 Grad im Uhrzeigersinn). Daher muss es **A B A⁻¹ B⁻¹** sein, um eine Vertauschung zu erzeugen.

Dies ist die grundlegendste Vertauschung. Die elementarste und praktikabelste Aktion am Zauberwürfel ist: **R U R' U'**.

![R U R' U' Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Sie kann sehr lang kombiniert werden und verschiedene Permutationseffekte erzielen, wie zum Beispiel diese Sequenz: (R U R' U') (R U R' U') (R U R')

Tatsächlich ist dies auch der Ursprung von Formeln. Warum gibt es Formeln? Sie kombinieren eine Reihe grundlegender Permutationsoperationen zu Sequenzen. Durch das Ausführen dieser Sequenzen kann man schnell bestimmte Ergebnisse erzielen, wie das Wiederherstellen einer Kante oder eines Ecksteins. Verschiedene Sequenzen können kombiniert werden, um uns zur endgültigen Lösung des Zauberwürfels zu führen.

Wenn wir das Prinzip verstehen, können wir sogar unsere eigenen Formeln konstruieren. (Wie man eigene Zauberwürfel-Formeln erstellt, wird im nächsten Artikel ausführlich erklärt.)

Um den Zauberwürfel also ohne eine einzige Formel zu lösen, müssen wir lediglich das Prinzip der grundlegenden Vertauschungen verstehen; alles andere lässt sich darauf übertragen. Die elementarsten Vertauschungsaktionen werden die Positionen von drei Ecksteinen oder von drei Kantensteinen tauschen.

## Wie man am Zauberwürfel vertauscht

Wie bereits erwähnt, ist die elementarste Vertauschungsaktion am Zauberwürfel **R U R' U'**. Wenn du diese Bewegung tiefgehend verstehst, wirst du sofort die ersten beiden Schichten des Zauberwürfels lösen können.

Diese Bewegung bedeutet im Grunde: Wegbewegen (rechte Schicht), (Zielstein) einfügen, (rechte Schicht) zurückbewegen, (obere Schicht) zurückbewegen.

Damit haben wir erreicht, dass der linke vordere Eckstein und der mittlere Kantenstein in die untere rechte Ecke eingefügt wurden.

Diese Bewegung kann ständig variiert werden, zu **U R U' R'**, oder **F R F' R'**, und so weiter, an jeder beliebigen Position, sogar mit der mittleren Schicht **M U M' U'**, oder auch **U2 R U2 R'**.

![Grundlegende Vertauschungsaktion Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

In der Anfangsphase ist der Würfel am chaotischsten, daher können wir viele der oben genannten grundlegenden Vertauschungen verwenden, um zuerst eine Seite oder andere lokale Bereiche zu lösen und das Chaos zu reduzieren.

Und da der Zustand sehr durcheinander ist, kann die letzte Aktion U' von **R U R' U'**, die die Umgebung wiederherstellt, je nach Situation sogar weggelassen und direkt mit der nächsten Aktion fortgefahren werden. Dies vereinfacht sich dann zu: Wegbewegen, Einfügen, Zurückbewegen.

Wegbewegen, Einfügen, Zurückbewegen.

Das ist die Kernbewegung. Herzlichen Glückwunsch, du hast verstanden, wie man den Zauberwürfel spielt!

In späteren Phasen benötigen wir jedoch längere Vertauschungssequenzen, um bestimmte Steine zu tauschen, ohne den bereits wiederhergestellten Zustand vollständig zu zerstören.

Nehmen wir als Beispiel **R U' L' U R' U' L U**. Diese Bewegung tauscht nur drei Ecksteine, ohne andere Teile zu beeinflussen. Zerlegt in die Kommutator-Logik:

```
A   = R U'   (Bringt den Eckstein heraus)
B   = L'     (Bewegt die linke Schicht)
A⁻¹ = U R'   (Stellt die A-Operation wieder her)
B⁻¹ = U' L U (Stellt die B-Operation wieder her, mit Anpassung)
```

Effekt: Die Position des unteren linken Ecksteins bleibt unverändert, die anderen drei Ecksteine tauschen ihre Plätze.

Dies ist wahrscheinlich eine der beiden einzigen Formeln in diesem Artikel, die du kennenlernen musst. Wir werden im Praxisteil lernen, wie man sie anwendet, und sie während der Ausführung verstehen und beherrschen, ohne sie auswendig zu lernen.

## Praxis: Von Grund auf lösen

Nun kommen wir endlich zum Kern dieses Artikels. Ich werde dich Schritt für Schritt anleiten, wie du allein durch Beobachtung und Verständnis einen Zauberwürfel vollständig lösen kannst.

Vorbereitungen, die du treffen solltest:

-   Ein Zauberwürfel
-   Und ein bisschen Geduld (da wir uns hauptsächlich auf Beobachtung und Verständnis konzentrieren)

Angenommen, du hast bereits einen Zauberwürfel zur Hand. Wir scramblen ihn nach internationalem Standard (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**). Im Folgenden werde ich den Würfel gemeinsam mit dir lösen.

Oder du kannst direkt hier die Online-Version spielen; dieser Link zeigt einen bereits gescrambelten Würfel: [3D Zauberwürfel — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![Anfangszustand des gescrambelten Zauberwürfels](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Wir können den Würfel mithilfe der sehr eleganten Roux-Brückenmethode lösen. Die Brückenmethode unterscheidet sich vom Schicht-für-Schicht-Lösen; stattdessen werden zuerst die 1x2x3-Blöcke auf der linken und rechten Seite wiederhergestellt, bekannt als linke und rechte Brücke, und danach die obere Schicht und die restlichen Steine.

Die Brückenmethode ist sehr frei und flexibel, benötigt weniger Schritte als viele bekannte Methoden und erfordert relativ wenige Formeln zum Auswendiglernen, da sie im Grunde auf der Logik der Kommutatoren basiert. In diesem Rahmen werden wir lernen, wie man einen Zauberwürfel löst, ohne eine einzige Formel auswendig zu lernen.

![Roux Lösungsmethode Flussdiagramm](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Schritt Eins: Feste Beobachtungsposition

Die Beobachtungsposition bei der Brückenmethode ist fixiert. Während des Lösens müssen wir den Würfel nicht häufig drehen, sondern behalten den gleichen Blickwinkel bei, um nachzudenken und zu lösen. Indem wir diese feste Ausrichtung beibehalten, können wir Eck- und Kantensteine sehr leicht erkennen und wissen, wohin sie gehören.

Wir können diesen Blickwinkel als Referenz nehmen:

-   Direkt vor uns (zu dir gerichtet): Grüne Seite
-   Links: Rot
-   Rechts: Orange
-   Obere Schicht: Gelb
-   Untere Schicht: Weiß
-   Rückseite: Blau

### Schritt Zwei: Aufbau der linken und rechten Brücke

**Reihenfolge für den Aufbau der linken Brücke:**

1.  Zuerst den weiß-roten Kantenstein an seinen Platz bringen (die Säule unten links).
2.  Dann den hinteren blau-roten Kantenstein an seinen Platz bringen.
3.  Danach die beiden vorderen roten Ecksteine an ihren Platz bringen.

Zustand der fertigen linken Brücke:

![Zustand der fertigen linken Brücke](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Dieser Prozess erfordert keine Formeln; bloßes Beobachten und Verstehen genügen. Mit etwas Übung wird es immer einfacher.

**F' L**: Finde durch Beobachtung den rot-weißen Kantenstein und bringe ihn an seinen Platz, mit Weiß nach unten und Rot nach links.

![Weiß-roter Kantenstein an seinen Platz bringen](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Bringe den blau-roten Kantenstein und die Ecksteine an ihren Platz.

![Blau-roter Kantenstein und Ecksteine an ihren Platz bringen](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Finde die letzten beiden Steine der linken Brücke und bringe sie an ihren Platz, sodass wir eine perfekte linke Brücke erhalten.

![Letzte beiden Steine der linken Brücke an ihren Platz bringen](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Für die rechte Brücke gilt dasselbe**: Ersetze Rot durch Orange und wiederhole die obigen Schritte. Aber sei hier vorsichtig: Zerstöre nicht die bereits gebaute linke Brücke. Falls temporäres Ausweichen nötig ist, kann die linke Brücke zunächst beiseite bewegt werden, damit die Operationen auf der rechten Seite die linke Brücke nicht beeinträchtigen. Nach Abschluss der rechten Seite wird die linke Brücke dann wiederhergestellt.

**Mitte der rechten Brücke**: U' M U' R2

![Mittelkante der rechten Brücke an ihren Platz bringen](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Erster Stein der rechten Brücke**: U' M' U2 R' U R

![Erster Stein der rechten Brücke an seinen Platz bringen](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Wir haben den letzten Block der rechten Brücke fertiggestellt und möchten ihn an seine Position einfügen. Daher bewegen wir zuerst die linke Brücke weg (F'), um Platz zu schaffen, dann den Block (U), und schließlich kehren sowohl die linke als auch die rechte Brücke gleichzeitig an ihren Platz zurück.

![Letzter Stein der rechten Brücke einfügen](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Dies ist der Zustand, wenn beide Brücken fertig sind. Es reicht aus, wenn die Brücken gebildet sind; die anderen Farbsteine müssen vorerst nicht beachtet werden.

![Zustand der fertigen linken und rechten Brücke](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Schritt Drei: Die Ecksteine der oberen Schicht lösen

Nachdem du die beiden Brücken gelöst hast, beginnen wir nun mit dem Lösen der restlichen vier Ecksteine. Hierfür benötigen wir einen Eckstein-Dreierzyklus, der drei Ecksteine rotieren lässt: von A nach B, B nach C und C zurück nach A.

![Eckstein-Dreierzyklus Schema: A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Eckstein-Dreierzyklus

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formel 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Der linke untere Eckstein bleibt an seiner Position.</li>
      <li>Die anderen drei Ecksteine tauschen ihre Positionen <strong>gegen den Uhrzeigersinn</strong>.</li>
      <li>Ihre internen Farben drehen sich jedoch <strong>im Uhrzeigersinn</strong>.</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formel 2 (Spiegelversion)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Der rechte untere Eckstein bleibt an seiner Position.</li>
      <li>Die anderen drei Ecksteine tauschen ihre Positionen <strong>im Uhrzeigersinn</strong>.</li>
      <li>Ihre internen Farben drehen sich jedoch <strong>gegen den Uhrzeigersinn</strong>.</li>
    </ul>
  </div>
</div>

![Eckstein-Dreierzyklus Spiegelversion Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Es gibt nur vier Orientierungstypen für Ecksteine, denen du begegnen kannst: 0, 1, 2 oder 4 richtig orientierte Ecken.

-   **4 richtig orientierte Ecken**: Fertiger Zustand.
-   **1 richtig orientierte Ecke** (Fisch-Form): Ein weiterer Dreierzyklus oder die Spiegelversion genügt, um dies abzuschließen.
-   **0 / 2 richtig orientierte Ecken**: Zuerst einen falsch orientierten Eckstein an eine Position bringen, die vom Dreierzyklus nicht betroffen ist (untere linke Ecke), dann einen Dreierzyklus ausführen, wodurch ein richtig orientierter Eckstein entsteht, und man kehrt zum vorherigen Fall zurück.

Manchmal muss die Basisversion des Dreierzyklus zweimal ausgeführt werden, um den Würfel zu lösen, während die Spiegelversion nur einmal benötigt wird, um ihn vollständig zu lösen. Anfänger sollten sich zunächst auf die Basisversion konzentrieren, beobachten und verstehen, und dann wird alles klar. Dieser Dreierzyklus, bei dem Gelb oben ist, ist auch eine bekannte klassische Formel – die sogenannte „Fisch-Formel“. Man kann sich die „Fisch“-Form gut merken.

Auch diese Formel musst du nicht auswendig lernen. Beobachte einfach, wie sich die beiden grünen Steine bewegen, und führe es ein paar Mal selbst aus, dann wirst du es schnell beherrschen. Der Kern ist das Vertauschen der drei Ecksteine der oberen Schicht.

Nachdem wir die Brücken fertiggestellt haben, entdecken wir, dass sich oben zwei gelbe Steine befinden. Daher ersetzen wir den unteren linken Eckstein durch einen, der nicht gelb ist, und führen einen Eckstein-Dreierzyklus aus. Danach führen wir entweder zwei weitere Dreierzyklen oder einen Spiegel-Dreierzyklus aus, um sicherzustellen, dass alle vier Ecksteine der oberen Schicht gelb nach oben zeigen.

![Eckstein-Dreierzyklus Prozess Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Vier gelbe Ecken sind fertig!

![Vier gelbe Ecken fertiggestellt](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Positionen anpassen (Seitenfarben ausrichten)

Nachdem alle vier Ecksteine gelb nach oben zeigen, müssen die Seitenfarben der Ecksteine noch ausgerichtet werden, damit die Ecksteine vollständig an ihren Platz kommen.

Hierfür verwenden wir die **J-Perm-Variante**: **R U2 R' U' R U2 L' U R' U' L**

Die Logik dieser Formel lässt sich in "Paar transportieren + logisches Tauschen" zerlegen:

-   Erster Teil `R U2 R' U' R`: Bringt ein Paar in einen sicheren Bereich zum Zwischenspeichern und schafft Platz.
-   Zweiter Teil `U2 L' U R' U' L`: Nutzt die Logik des Dreierzyklus, um zwei Ecksteine präzise zu tauschen.

**Effekt**: Die beiden rechten Ecksteine tauschen ihre Positionen, während sie gelb nach oben zeigen; die anderen Ecksteine bleiben unverändert.

Dies ermöglicht das Vertauschen beliebiger zwei benachbarter Ecksteine (durch U wird eingestellt, welche beiden Ecksteine sich auf der rechten Seite befinden). Nach mehrmaligem Tauschen sind alle vier Ecksteine vollständig ausgerichtet und an ihrem Platz.

![J-Perm Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Auch diese Formel musst du nicht auswendig lernen. Beobachte einfach, wie sich die beiden grünen Steine bewegen, und führe es ein paar Mal selbst aus, dann wirst du es schnell beherrschen. Der Kern ist das Vertauschen der beiden rechten Ecksteine der oberen Schicht, während Gelb oben bleibt.

### Schritt Vier: Die letzten sechs Kantensteine lösen (LSE, Last Six Edges)

Hierfür zuerst die Mittelsteine ausrichten, sodass Gelb oben und Weiß unten ist, und dann die Kantensteine anpassen.

Es bleiben nur noch 6 Kantensteine übrig. Dieser Schritt verwendet nur die Operationen **M** und **U** und ist sehr intuitiv.

#### 4a: Orientierung anpassen (EO, Edge Orientation)

**Bestimmungsmethode**: Schau, ob die weißen / gelben Aufkleber der Kantensteine nach oben oder unten zeigen.

-   Nach oben / nach unten = Richtig orientierte Kante ✓
-   Zur Seite = Falsch orientierte Kante ✗

**Anpassungsmethode**: Drehe falsch orientierte Kanten mit **M U M'** oder **M' U M**.

![M U M' Kante drehen Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitive Erklärung: M dreht die Kantensteine der mittleren Schicht nach oben, U passt die Position an, und M' dreht sie wieder zurück.

Wiederhole dies mehrmals, bis alle Kantensteine Weiß oder Gelb nach oben oder unten zeigen.

Wir können richtig orientierte Kanten als „gute Kanten“ und falsch orientierte als „schlechte Kanten“ bezeichnen.

Wie im Bild hervorgehoben, sind die drei Kanten der oberen Schicht falsch orientiert, da sie weder gelb noch weiß sind.

![Falsch orientierte Kanten hervorgehoben](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Anpassungstipps**: Es gibt nur vier Situationen mit falsch orientierten Kanten, denen du begegnen kannst:

-   **0 falsch orientierte Kanten**: Fertiger Zustand.
-   **Nicht 0 oder 4 falsch orientierte Kanten**: Durch **M' U M** die Anzahl der falsch orientierten Kanten ändern, um sie auf 4 zu erhöhen.
-   **4 falsch orientierte Kanten (jeweils 2 oben und unten)**: Durch **M' U2 M** die oberen und unteren Kanten tauschen, um eine Situation von 3 oben und 1 unten zu erreichen.
-   **4 falsch orientierte Kanten (3 oben, 1 unten)**: Die drei falsch orientierten Kanten der oberen Schicht bilden einen Pfeil. Drehe die obere Schicht so, dass der Pfeil auf die falsch orientierte Kante der unteren Schicht zeigt. Führe dann einmal **M' U M** aus, und alle vier falsch orientierten Kanten werden neutralisiert und sind richtig orientiert.

![Vier falsch orientierte Kanten Pfeil-Eliminierung Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Wenn kein Pfeil erscheint, probiere **M' U M** immer wieder aus; du wirst es irgendwann hinbekommen. Fortgeschrittene können später die Muster erkennen.

#### 4b: Linke und rechte Kanten lösen (Rot und Orange)

Finde die rot-gelben und orange-gelben Kanten (Ziel ist es, sie zu den Kanten auf der linken und rechten Seite zurückzubringen) und bringe sie durch einen Kanten-Dreierzyklus an die richtige Position.

**Tipps**:

1.  Bewege die rot-gelbe (oder orange-gelbe) Kante über die mittlere Schicht und lasse sie durch Tausch der oberen und unteren Kanten absinken (**M' U2 M**).
2.  Lasse die andere orange-gelbe (oder rot-gelbe) Kante auf der gegenüberliegenden Seite absinken.
3.  Drehe die obere Schicht, sodass die rote Kante gegenüber der abgesunkenen rot-gelben Kante erscheint.
4.  Drehe die mittlere Schicht um eine halbe Drehung (**M2**), und beobachte die obere Schicht für die Positionierung (**U**).

![Linke und rechte Kanten an ihren Platz bringen](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Die letzten vier Kanten lösen (Blau und Grün)

**Tipps**:

-   Tausche die oberen und unteren Kanten immer wieder mit dem **Kanten-Dreierzyklus**: **M' U2 M**. Der letzte Schritt wird durch Beobachtung mit **U2** an seinen Platz gebracht.
-   Schneller Trick: Platziere die weiß-grüne (oder weiß-blaue) Kante über der Zielposition, tausche die oberen und unteren Kanten, und die weiß-grüne (weiß-blaue) Kante ist an ihrem Platz.

Es gibt nur drei Situationen:

-   Schon richtig → Fertig!
-   Benötigt M2 → Führe einmal **M2** aus.
-   Benötigt Tausch → **M' U2 M U2** oder **M U2 M' U2**.

Wir können die Logik des Dreierzyklus auch vereinfachen: M' ist, wenn die mittlere Schicht nach oben kommt, U2 dreht die obere Schicht um eine halbe Umdrehung, M stellt die mittlere Schicht wieder her, und U2 stellt die obere Schicht wieder her.

![Kanten-Dreierzyklus Demonstration](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Fertig!

![Vollständig gelöster Zauberwürfel](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Zusammenfassung

Kein Auswendiglernen von Formeln, nur die Kommutator-Logik des "Öffnen-Operieren-Schließen". Du wirst feststellen, dass dieser Prozess viel unterhaltsamer ist, als Formeln auswendig zu lernen, und du musst dir keine Sorgen machen, es auch nach Jahren zu vergessen, da du es jederzeit selbst herleiten kannst.

Dieselbe Denkweise kann jeden Zauberwürfel lösen, einschließlich aller möglichen seltsamen Varianten.

Wenn du jedoch den Weg des Speedcubings einschlagen möchtest, dann steht dir ein endloser Pfad harten Trainings bevor. Für Anfänger sollte es jedoch kein Problem sein, mit etwas Übung unter 90 Sekunden zu kommen.

Es gibt unzählige Lösungsmethoden – es liegt an dir, ob du eine elegantere oder handlichere findest.

Die Welt des Zauberwürfels birgt unendlichen Spaß. Viel Vergnügen!

## Anhang 1: Spickzettel zur Zauberwürfel-Lösung (Das Würfel-Lösungs-Mantra)

1.  **Linke und rechte Brücke bauen: Durch Beobachtung und Intuition**
    -   Tipps: Wenn du das Beobachten und Vorausschauen gemeistert hast, kannst du je nach aktuellem Zustand des Würfels andere Blöcke priorisiert oder gleichzeitig die linken und rechten Brücken bauen. Dies ermöglicht weniger Schritte und bietet große Freiheit.
2.  **Orientierung der vier Ecksteine der oberen Schicht wiederherstellen: Vier gelbe Seiten nach oben**
    -   Eckstein-Dreierzyklus der oberen Schicht: **R U' L' U R' U' L U** (Der linke untere Eckstein bleibt an seiner Position, die internen Farben der anderen drei Ecksteine drehen sich im Uhrzeigersinn.)
    -   Eckstein-Dreierzyklus der oberen Schicht (Spiegelversion): **L' U R U' L U R' U'** (Der rechte untere Eckstein bleibt an seiner Position, die internen Farben der anderen drei Ecksteine drehen sich gegen den Uhrzeigersinn.)
3.  **Seiten der vier Ecksteine der oberen Schicht wiederherstellen**
    -   **Feinabstimmung der Ecksteinpositionen der oberen Schicht**: **R U2 R' U' R U2 L' U R' U' L** (Behält alle vier Ecksteine gelb nach oben und tauscht die Positionen der beiden rechten Ecksteine.)
4.  **Kantenorientierung ändern, sodass Weiß oder Gelb nach oben oder unten zeigt**
    -   Zuerst die Mittelsteine ausrichten, sodass Gelb oben und Weiß unten ist, und dann die Kantensteine anpassen.
    -   Durch **M' U M** die Anzahl der falsch orientierten Kanten ändern, einen Pfeil bilden, den Pfeil auf die falsch orientierte Kante zeigen lassen, einmal **M' U M** ausführen, und alle vier falsch orientierten Kanten werden neutralisiert und sind an ihrem Platz.
5.  **Linke und rechte Kanten wiederherstellen** (Rot und Orange)
    -   Zuerst die rot-gelbe (oder orange-gelbe) Kante durch Tausch der oberen und unteren Kanten absinken lassen (**M' U2 M**).
6.  **Die restlichen Kanten wiederherstellen** (Blau und Grün)
    -   Tausche die oberen und unteren Kanten immer wieder mit dem **Kanten-Dreierzyklus**: **M' U2 M**. Der letzte Schritt wird durch Beobachtung mit **U2** an seinen Platz gebracht.

Keine dieser Formeln muss auswendig gelernt werden; sie sind nur im Anhang zur leichteren Referenz aufgeführt. Wenn du es selbst ausprobierst, indem du beobachtest und verstehst, wie sich die entsprechenden Steine bewegen, wirst du es nach ein paar Malen beherrschen. Der Kern ist das Vertauschen der drei Ecksteine der oberen Schicht.

## Anhang 2: Nützliche Websites und Tools

Ich habe auch einen Online-3D-Zauberwürfel für euch erstellt, den ihr beliebig drehen, mit festgelegten Formeln scramblen und lösen könnt. Jeder Schritt wird mit schönen Animationen dargestellt!

[3D Zauberwürfel — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![Online 3D Zauberwürfel-Tool](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Scramble-Formel, die in diesem Tutorial verwendet wird: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Lösungsschritte der Links-Rechts-Brücken dieses Tutorials: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Dieser Link zeigt einen bereits gescrambelten Würfel: [3D Zauberwürfel — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Der Zauberwürfel-Timer, den Weltmeister verwenden: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
