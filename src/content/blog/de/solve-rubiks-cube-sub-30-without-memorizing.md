---
layout: blog
title: "Wie man den Zauberwürfel ohne Formeln unter 30 Sekunden löst: Auch für Grundschüler verständlich"
date: 2026-10-09 12:00:00
tags:
  - 魔方
  - 教程
  - Roux方法
  - 速拧
  - 刻意练习
categories: 日常折腾
description: "Vom ersten Lösen bis zum Ao100 unter 30 Sekunden dauerte es 89 Tage, ohne eine einzige CFOP-Formel auswendig gelernt zu haben. Anhand von 4441 Zeitdaten zerlegen wir vier Phasen: Wo die Schwierigkeiten lagen, was geübt wurde und warum die Roux-Brückenmethode keine Formeln erfordert."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Vier Phasen von 165 Sekunden auf 28 Sekunden" />
</figure>

*Abb.: Vier Phasen von 165 Sekunden auf 28 Sekunden. Phase Zwei zeigte den schnellsten Abfall, Phase Drei war die längste Plateau-Phase.*

Im letzten Artikel [„Wie man den Zauberwürfel ohne Formeln löst“](/zh/blog/solve-rubiks-cube-without-formulas/) hast du gelernt, einen Zauberwürfel mithilfe der Logik von Kommutatoren zu lösen, ohne Formeln auswendig zu lernen. Dieser Beitrag wurde von vielen Lesern begeistert aufgenommen.

Wenn du den Anweisungen gefolgt bist, brauchst du jetzt wahrscheinlich noch zwei bis drei Minuten, um ihn zu lösen – vielleicht noch etwas ungelenk, aber du schaffst es. Dann taucht eine neue Frage auf: Wie werde ich schneller?

Wenn du nach „Zauberwürfel Speedcubing“ suchst, werden dir alle Anleitungen dasselbe sagen: Um unter 30 Sekunden zu kommen, musst du zuerst die CFOP-Formeln auswendig lernen. 41 Formeln für F2L, 57 für OLL und 21 für PLL – insgesamt 119 Formeln. Selbst wenn du F2L intuitiv machst, kommst du um die 78 Formeln für die oberste Schicht nicht herum. Ohne Auswendiglernen keine Geschwindigkeit, heißt es.

Dieser Artikel möchte dir zeigen, dass du den Zauberwürfel auch ganz ohne Formeln unter 30 Sekunden lösen kannst.

<!--more-->

Ich begann am 7. Mai 2026 mit dem ersten Lösen eines Zauberwürfels und erreichte am 4. August desselben Jahres einen Ao100 unter 30 Sekunden – das waren 89 Tage. In dieser Zeit habe ich keine einzige CFOP-Formel auswendig gelernt, sondern einfach in meiner Freizeit gespielt. Hier sind meine aufgezeichneten Zeitdaten von 4441 Lösungsversuchen.

![Leistungskurve von 4441 Lösungsversuchen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Abb.: Leistungskurve von 4441 Lösungsversuchen. Die graue Linie zeigt die Einzelzeiten, die dunkle Linie den Ao100-Trend, und die roten Punkte markieren persönliche Bestzeiten. Die beste Ao100 lag bei 28,22 Sekunden.*

Durch bewusstes und regelmäßiges Üben kann jeder innerhalb weniger Monate von null auf sub-30 kommen.

Was bedeutet „unter 30 Sekunden“? Bei der [ersten Weltmeisterschaft im Zauberwürfel 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship) lag die Bestzeit des Siegers bei 22,95 Sekunden, was später auch als erster offizieller WCA-Weltrekord anerkannt wurde. Der Zehntplatzierte erreichte 29,11 Sekunden – niemand Geringeres als Jessica Fridrich selbst, die Erfinderin der CFOP-Methode, über die wir gleich sprechen werden. Anders ausgedrückt: Was ein Hobbyist heute in wenigen Monaten auf sub-30 trainiert, hätte 1982 für einen Platz unter den Top Ten der Welt gereicht.

Im Folgenden werde ich mit dir teilen, wie ich das Schritt für Schritt erreicht habe, und dir die gesamte Übungsmethode umfassend vorstellen.

## Warum die Speedcubing-Welt nur Formeln auswendig lernt

Klären wir zunächst eines: Warum sind „schnell“ und „Formeln auswendig lernen“ in den Köpfen vieler so eng miteinander verbunden?

Anfang der 1980er Jahre entwickelte die tschechisch-amerikanische Professorin Jessica Fridrich (später Forscherin für digitale Forensik an der Binghamton University) eine schichtbasierte Lösungsmethode, die später als CFOP (Cross, F2L, OLL, PLL) bekannt wurde. Die Idee dahinter: Alle möglichen Situationen der obersten Schicht werden katalogisiert und jeder Situation eine optimale Formel zugewiesen. Man erkennt die Situation, führt die Formel aus und muss nicht nachdenken.

![Jessica Fridrich und ihr Zauberwürfel im Büro](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Abb.: Jessica Fridrich und ihr Zauberwürfel im Büro. 1982 belegte sie mit 29,11 Sekunden den 10. Platz bei der ersten Weltmeisterschaft, und CFOP wurde nach ihr benannt (Fridrich-Methode).*

Diese Methode ist extrem schnell. Fast alle Weltrekorde wurden mit CFOP erzielt. Deshalb lehren alle Tutorials sie, alle Videos erklären sie, und „Speedcubing lernen“ wurde gleichbedeutend mit „CFOP lernen“ – und CFOP lernen wiederum mit dem Auswendiglernen von 119 Formeln.

Beachte jedoch: Das „Auswendiglernen von Formeln“ ist ein Merkmal der CFOP-Methode, nicht des „Schnellseins“ an sich. CFOP erfordert das Auswendiglernen, weil es den Weg der vollständigen Enumeration gewählt hat. Enumeration erfordert Gedächtnis, das ist der Preis, den sie zahlt.

Gibt es eine Methode, die diesen Weg der Enumeration nicht geht? Ja.

## Die Formel-freie Lösung: Roux-Brückenmethode

2003 veröffentlichte der Franzose Gilles Roux eine völlig andere Herangehensweise. Anstatt Schicht für Schicht aufzubauen, werden zuerst zwei 1×2×3 „Brücken“ links und rechts konstruiert, dann die vier Ecksteine der obersten Schicht ausgerichtet und schließlich die verbleibenden sechs Kantensteine mit nur zwei Zugtypen, M (mittlere Schicht) und U (oberste Schicht), abgeschlossen.

![Gilles Roux im Wettkampf](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Abb.: Gilles Roux im Wettkampf. Ausschnitt aus einem frühen Wettbewerbsvideo, das Bild wurde mit KI restauriert und vergrößert.*

Im vorherigen Artikel haben wir den Würfel bereits einmal mit diesem Rahmen gelöst. Hier schauen wir uns die vier Schritte noch einmal an, diesmal mit dem Fokus darauf, „was in jedem Schritt gelernt werden muss“:

| Schritt | Inhalt | Auswendig zu lernende Formeln |
| --- | --- | --- |
| 1. Linke Brücke | Einen 1×2×3 Block bauen | 0, reine Beobachtung |
| 2. Rechte Brücke | Symmetrisch einen weiteren bauen | 0, reine Beobachtung |
| 3. CMLL | Vier Ecksteine der obersten Schicht ausrichten | 9, alle können aus 3-Zyklen abgeleitet werden |
| 4. LSE | Die letzten sechs Kantensteine | 0, nur Drehungen der obersten und mittleren Schicht (M und U) |

Drei der vier Schritte erfordern keine einzige Formel. Die einzige benötigte CMLL-Phase umfasst zwar insgesamt 42 Fälle, aber du brauchst keine 42 Formeln. Der im letzten Artikel erwähnte Eckstein-3-Zyklus R U' L' U R' U' L U, zusammen mit seiner Spiegelung und einigen Variationen, deckt alle Fälle ab, wenn auch etwas langsamer.

![Die vier Schritte der Roux-Methode](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Abb.: Die vier Schritte der Roux-Methode, wobei jeder Schritt nur die bis dahin gelösten Blöcke zeigt: Linke Brücke → Rechte Brücke → CMLL (vier obere Ecken) → LSE (letzte sechs Kanten). Ausschnitt aus dem „Lösung“-Panel meiner 3D-Zauberwürfel-Seite.*

Deshalb kann Roux ohne Formeln auskommen: Es komprimiert den Teil, der auswendig gelernt werden muss, auf eine sehr kleine Ecke; der Rest wird Beobachtung, Verständnis und Übung überlassen.

## Von 165 Sekunden auf 28 Sekunden: Vier Phasen

Hier ist mein tatsächlich gegangener Weg. Für jede Phase habe ich Anfang und Ende mit Daten markiert und dann erklärt, wo ich steckenblieb und was ich geübt habe. Deine Schwierigkeiten mögen anders sein als meine, aber die Reihenfolge wird höchstwahrscheinlich dieselbe sein.

![Zeitlicher Verlauf der vier Phasen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Abb.: Zeitlicher Verlauf der vier Phasen. Phase Eins: 3 Wochen, Phase Zwei: 11 Tage, Phase Drei: zwei Monate, Phase Vier: bis heute.*

### Phase Eins: 165 Sekunden → 60 Sekunden (Woche 1–3)

**Daten**: Vom 7. Mai bis 27. Mai. Die erste Woche betrug durchschnittlich 165 Sekunden, die dritte Woche 68 Sekunden.

**Wo es haperte**: Die linke Brücke war sehr ungewohnt, und ich brauchte lange, um jede Farbgruppe zu finden. Nachdem ich eine Farbgruppe gefunden hatte, neigten Anfänger dazu, innezuhalten und weiter zu beobachten.

![Wo Anfänger ihre Zeit verbringen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Abb.: Wo Anfänger ihre Zeit verbringen. Die Hände ruhen, die Augen suchen auf dem Würfel hin und her; die Zeit des „Suchens“ ist um ein Vielfaches länger als die des „Drehens“.*

**Was ich geübt habe**:

Der größte Feind in dieser Phase war nicht die Langsamkeit der Hände, sondern die Langsamkeit der Augen. Du verbringst weit mehr Zeit mit dem „Suchen“ als mit dem „Drehen“. Daher:

*   Feste Beobachtungsposition, den Würfel nicht drehen. Wie im letzten Artikel erwähnt, ist der Blickwinkel bei Roux fest. In dieser Phase sollte das „Nicht-Drehen des Würfels“ zu einem Muskelgedächtnis werden. Jedes Mal, wenn du den Würfel drehen möchtest, halte inne und frage dich: Kann ich den benötigten Block von diesem Winkel aus sehen?
*   Slow-Turning. Ohne Zeitmessung, aber die Bewegungen müssen flüssig und zusammenhängend sein, ohne jegliche Unterbrechung. Jede Bewegung kann sehr langsam sein, aber sie darf nicht stoppen. Der Kern ist, dass deine Augen die nächste Bewegung im Blick haben sollten, während deine Hände die aktuelle ausführen. Das klingt nach Verlangsamung, trainiert aber tatsächlich deine Augen, die Beziehung zwischen der Position eines Blocks und seiner Zielposition zu erkennen.
*   Nur die erste Brücke üben. Mischen, linke Brücke bauen, wieder mischen, wieder linke Brücke bauen. Nicht weitergehen. Die erste Brücke ist der freieste Schritt bei Roux und auch derjenige, der die Beobachtung am besten trainiert.

Lerne in dieser Phase keine neuen Formeln. Dein Engpass liegt nicht bei den Formeln.

### Phase Zwei: 60 Sekunden → 40 Sekunden (Woche 4–5)

**Daten**: Vom 27. Mai bis 7. Juni, 11 Tage. Dies war der schnellste Rückgang im gesamten Prozess und auch die Phase, in der ich am meisten geübt habe, mit 723 Versuchen in der ersten Juniwoche.

**Wo es haperte**: Unzusammenhängende Bewegungen. Der Würfel hakte.

**Was ich geübt habe**:

In dieser Phase musst du die Bewegungen jedes Schrittes optimieren und auf der Grundlage des Verständnisses die Geschicklichkeit jeder Bewegung erhöhen.

*   Die zweite Brücke. Die zweite Brücke ist schwieriger als die erste, da der Raum um die Hälfte kleiner ist und die bereits fertige linke Brücke nicht zerstört werden darf. Die wichtigsten Drehungen sind R, r (rechte zwei Schichten), M, U. In dieser Phase musst du lernen, r und M anstelle von R zu verwenden, um Blöcke zu bewegen, damit die linke Brücke niemals zerstört wird. Das Optimieren der Bewegungsschritte spart Zeit. Zum Beispiel entspricht dreimaliges Drehen im Uhrzeigersinn einmaligem Drehen gegen den Uhrzeigersinn.
*   Sichere Verwendung der M-Schicht. Der letzte Schritt der Roux-Methode besteht ausschließlich aus M und U; die Flüssigkeit deiner M-Schicht-Drehungen bestimmt direkt deine Untergrenze. Schiebe M mit dem Ring- oder Mittelfinger und übe Rhythmen wie M' U M' U.
*   CMLL-Fallerkennung. Im letzten Artikel haben wir die vier Ecken mit einem 3-Zyklus „ausprobiert“. Jetzt geht es darum, zuerst zu erkennen und dann auszuführen: Bevor du die oberste Schicht drehst, schau dir die gelbe Ausrichtung der vier Ecken an, beurteile, ob es 0, 1, 2 oder 4 „gute“ Ecken sind, und führe dann direkt die entsprechende Aktion aus. Du kannst auch durch eine sehr geringe Anzahl von Formeln eine erhebliche Effizienzsteigerung erzielen – das ist sehr lohnenswert. Ein Großteil dieser Formeln muss nicht auswendig gelernt werden; verstehe sie, während du sie ausführst.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Ansicht beim Bauen der rechten Brücke" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Abb. links: Ansicht beim Bauen der rechten Brücke. Die linke Brücke ist fertiggestellt; nur R, r, M, U Drehungen werden verwendet, um die Eck- und Kantensteine auf der rechten Seite einzufügen, wobei die linke Brücke niemals berührt wird. Abb. rechts: M' U M, eine der am häufigsten verwendeten Bewegungssequenzen in der zweiten Hälfte der Roux-Methode. Die mittlere Schicht hoch, die obere Schicht drehen, die mittlere Schicht zurück – drei Schritte, um ein Kantenpaar der oberen und mittleren Schicht auszutauschen.*

Du kannst meine zusammengestellte [Roux-Methode Formelbibliothek](/zh/projects/rubiks-cube/roux#cmll) konsultieren. Die CMLL-Seite enthält eine zweistufige Methode: 7 Orientierungsformeln + 2 Permutationsformeln, insgesamt 9. Dies ist die kostengünstigste Wahl zur Steigerung der Geschwindigkeit und leicht zu erlernen. Jedes gemeisterte Set kann dich um etwa 1–2 Sekunden schneller machen. Mit etwas Übung wirst du schnell geschickt darin, und einige wurden bereits im vorherigen Artikel vorgestellt. Du musst sie nicht alle auswendig lernen, um unter 30 Sekunden zu kommen.

![Erster Schritt des zweistufigen CMLL, sieben Ecksteinorientierungen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Abb.: Erster Schritt des zweistufigen CMLL, sieben Ecksteinorientierungen. In der Draufsicht zeigt Gelb die nach oben gerichtete Deckflächenfarbe an, die kleinen äußeren Streifen geben die Ausrichtung der Deckflächenfarbe der Ecke zur Seite an. Erkennung der Form nach der Anzahl der gelben Ecken: 0 ist H oder Pi, 1 ist S oder AS, 2 ist U, T oder L.*

Nachdem die gelbe Oberseite ausgerichtet ist, können diese beiden Formeln verwendet werden, um die Seiten der Ecksteine auszurichten.

Wenn eine Seite bereits farblich übereinstimmt, z. B. Rot bereits auf derselben Seite ist, drehe sie zur linken Seite und wähle dann die Formel für den benachbarten Tausch. Wenn keine Seite farblich übereinstimmt, wähle die Formel für den diagonalen Tausch.

![Zweiter Schritt des zweistufigen CMLL, zwei Ecksteinpositionen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Abb.: Zweiter Schritt des zweistufigen CMLL, zwei Ecksteinpositionen. Im linken Bild stimmen die roten Seiten der beiden linken Ecken bereits überein, daher wird der benachbarte Tausch verwendet; im rechten Bild stimmt keine Seite überein, daher wird der diagonale Tausch verwendet.*

Du kannst diese Formeln durch viel Slow-Turning verstehen. Betrachte sie nicht als starre Formeln, sondern als bestimmte feste Bewegungsabläufe, die du auch selbst durch viel Exploration entdecken könntest. Die hier aufgeführten helfen dir jedoch, Abkürzungen zu nehmen.

Und noch etwas, das unmittelbarer wirkt als jedes Training: Gib etwas Geld aus und kaufe einen neuen Zauberwürfel. Wenn du noch so einen alten Würfel hast, der beim Drehen knirscht und blockiert, kaufe dir einen modernen 3x3 mit Magneten. Die neuesten Würfel lassen dich die Kraft der Ingenieursoptimierung spüren: sie drehen sich butterweich, richten sich automatisch aus und verhaken sich kaum. Allein der Wechsel des Würfels kann deine Durchschnittszeit auf einen Schlag um 15 Sekunden verbessern. Ein Preis-Leistungs-Sieger ist der [MoYu RS3 M V5 (MagLev + Ball-Core Version)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), für etwa zwanzig Dollar, der dich bis unter 20 Sekunden begleiten wird.

### Phase Drei: 40 Sekunden → 30 Sekunden (Woche 5 – Woche 13, zwei Monate)

**Daten**: Vom 7. Juni bis 4. August. Der Ao100 sank von 39,8 Sekunden auf 29,9 Sekunden, was 58 Tage dauerte. In dieser Phase konnten gelegentlich Zeiten unter 30 Sekunden auftreten, aber nur mit sehr viel Glück. Und mit sinkender durchschnittlicher Lösungszeit wird die Schwierigkeit, eine Sekunde schneller zu werden, exponentiell steigen.

![Tägliche Durchschnittszeiten](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Abb.: Tägliche Durchschnittszeiten. Nach Mitte Juni flachte die Kurve fast ab und verharrte zwei Monate lang zwischen 30 und 40 Sekunden.*

Dies ist die Plateau-Phase. Jeder wird sie erleben, und ich verbrachte hier zwei Monate.

**Wo es haperte**: Die Ausrichtung der sechs Kantensteine der obersten Schicht war sehr langsam, ich verstand die Logik nicht und verließ mich jedes Mal auf wiederholtes Ausprobieren, was viel Zeit verschwendete. Die linke und rechte Brücke waren immer noch nicht flüssig genug.

**Was ich geübt habe**:

*   EO-Erkennung. Wie im letzten Artikel erklärt, gibt es nur wenige Fälle von falsch orientierten Kanten: 0, nicht 0 und nicht 4, 4 (zwei oben, zwei unten), 4 (alle oben), 4 (drei oben, eine unten). Das Ziel in dieser Phase ist: Im Moment, in dem die Brücken gebaut sind, ohne zu zählen, sofort erkennen, um welchen Fall es sich handelt. Die Übung besteht darin, den Würfel zu mischen, nur bis zum Ende von CMLL zu gehen, dann anzuhalten, die Anzahl der falsch orientierten Kanten zu nennen und dann fortzufahren.
*   Viele Leute verstehen die Bewegungen hier nicht. Die EO-Phase zielt letztendlich immer darauf ab, die Pfeilform mit drei oben und einer unten zu konstruieren, da die vollständige Form nur einen einzigen Zug von der Pfeilform entfernt ist. Daher ist es umgekehrt der letzte Schritt vor der vollständigen Lösung. Unabhängig von der Anzahl der falsch orientierten Kanten geht es letztendlich immer darum, einen Pfeil zu konstruieren. Bei vier falsch orientierten Kanten oben tauscht man ein Paar obere und untere Kanten, um eine falsch orientierte Kante nach unten zu bringen und den Pfeil zu erzeugen. Bei zwei oben und zwei unten tauscht man ein Paar obere und untere Kanten, um eine falsch orientierte Kante nach oben zu bringen und den Pfeil zu erzeugen. Wenn eine oben und eine unten, oder zwei oben sind, verwendet man M' U M, um zuerst eine der vorherigen Situationen zu erreichen und dann den Pfeil zu konstruieren. Durch viel Beobachtung und Nachdenken kannst du selbst die besten Schritte für den 1/1-Fall entdecken.
*   Intensives Üben der Vorausschau (Look-ahead). Dies ist das Wichtigste, um von 40 auf 30 Sekunden zu kommen, und auch das Kontraintuitivste: Drehe etwas langsamer, schaue weiter voraus. Beim Bauen der linken Brücke sollten deine Augen nicht den gerade eingefügten Block betrachten, sondern bereits den nächsten Block suchen. Am Anfang wird es sehr ungewohnt sein und die Zeiten werden sich verschlechtern, aber nach einer Woche wird es plötzlich besser werden.
*   CMLL ohne Zögern. Wenn du bei einer Bewegung jedes Mal nachdenken musst, bevor du sie ausführst, sitzt sie noch nicht wirklich. Übe jede Bewegung einzeln 50 Mal, bis deine Hand sich bewegt, sobald du die Form siehst.

![Pfeilform](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Abb.: Pfeilform. Drei falsch orientierte Kanten (türkis hervorgehoben) bilden einen Pfeil, der auf die falsch orientierte Kante der unteren Schicht zeigt. In diesem Zustand kann ein M' U M alle vier gleichzeitig ausrichten. [Öffne diesen Zustand im 3D-Würfel](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240), um die Schritte einzeln zu sehen.*

![Sechs EO-Fälle](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Abb.: Sechs EO-Fälle. Das Etikett oben links zeigt die Anzahl der falsch orientierten Kanten (oben / unten), Gelb sind richtig orientierte Kanten, türkis umrandet sind falsch orientierte Kanten. Nur die Pfeilform erfordert eine Formel, die anderen fünf Fälle werden zuerst in die Pfeilform gebracht.*

Für das Ausrichten der linken und rechten Kanten sollte Gelb oben und Weiß unten sein, und die linke Brücke sei rot. Dann müssen die gelb-roten und gelb-orangen Kanten (hervorgehobene Bereiche) ausgerichtet werden. Die Hauptidee ist, die gelb-rote Kante irgendwie durch Tausch mit einer oberen/unteren Kante auf die Unterseite zu bringen, und die gelb-orange Kante ebenfalls auf die Unterseite zu tauschen. Wenn die beiden Kanten auf der Unterseite gegenüberliegen, dreht man die Oberseite in die passende Position, und ein M2 U oder M2 U' kann die linken und rechten Kanten der U-Schicht ausrichten.

Um das Verständnis zu verbessern, habe ich alle sechs EO-Fälle in der [Roux-Methode Formelbibliothek auf der LSE-Seite](/zh/projects/rubiks-cube/roux#lse) zusammengefasst. Wenn du auf „Details ansehen“ klickst, wird jeder Fall im 3D-Würfel geöffnet, wobei irrelevante Blöcke automatisch ausgeblendet und die zu bewegenden Kanten hervorgehoben werden. Auf derselben Seite findest du auch alle Fälle für die spätere UL/UR-Ausrichtung und die letzten vier Kanten.

Ein Rückgang des Übungsumfangs in dieser Phase ist nicht schlimm. Eine Plateau-Phase lässt sich nicht durch bloßes Mengen-Training überwinden, sondern durch das Ablegen einer spezifischen schlechten Angewohnheit. Meine Erfahrung ist, immer nur eine Sache auf einmal zu ändern.

### Phase Vier: 30 Sekunden → 28 Sekunden (nach Woche 13)

**Daten**: Nach dem 4. August. Im gesamten September waren 122 Übungsversuche aufgezeichnet, obwohl viele Übungen nicht erfasst wurden. Ich habe den Zauberwürfel als Schreibtischspielzeug integriert: Ich nehme ihn spontan zur Hand, wenn ich gute Laune habe, wenn ich frustriert oder ängstlich bin, in Arbeitspausen oder einfach aus Langeweile. Das Spielen mit dem Zauberwürfel ist Teil meines Alltags geworden. Der Ao100 sank allmählich von 29,9 auf 28,2 Sekunden.

**Wo es haperte**: Kein klarer Engpass, einfach noch nicht flüssig genug.

**Was ich geübt habe**:

Wenn deine Durchschnittsgeschwindigkeit immer noch über 30 Sekunden liegt, ist das Einzige, was du tun musst, weiterhin intensiv zu üben, anstatt neue Formeln auswendig zu lernen.

Übe kontinuierlich die Vorausschau durch Slow-Turning, und du wirst immer schneller werden.

Nimm den Zauberwürfel immer wieder zur Hand, platziere ihn an einem Ort, wo du ihn leicht erreichen kannst, zum Beispiel auf deinem Schreibtisch, sodass du ihn in Arbeitspausen spielen kannst. Es ist auch hilfreich, regelmäßig Videos von deinen Lösungsversuchen aufzunehmen, um zu sehen, in welcher Phase du am meisten Zeit verbrauchst, und dann gezielte Optimierungen vorzunehmen. Dies ist gezieltes Training; deine Fortschrittsgeschwindigkeit hängt nicht von der Gesamtzahl deiner gewöhnlichen Übungen ab, sondern von der Anzahl deiner gezielten Übungen.

Dann wirst du feststellen, dass du nach Überwindung des 30-35-Sekunden-Plateaus wieder eine Stufe schneller geworden bist.

An dieser Stelle herzlichen Glückwunsch – für Anfänger bist du bereits ein sehr beeindruckender Spieler!

## Der Preis des Formel-freien Lösens

An dieser Stelle muss ich ehrlich sein. Das Lösen ohne Formeln ist nicht umsonst.

Die CMLL-Phase ist langsamer. 42 Fälle werden mit 9 Formeln abgedeckt, was bedeutet, dass einige Fälle zweimal ausgeführt werden müssen. Wer das komplette CMLL beherrscht, ist in diesem Schritt zwei bis drei Sekunden schneller als ich.

Die M-Schicht-Technik hat eine höhere Einstiegshürde. Die zweite Hälfte der Roux-Methode hängt vollständig von der M-Schicht ab. Die M-Schicht ist schwieriger zu drehen als R oder U, neigt zum Haken und stellt höhere Anforderungen an den Würfel selbst.

Mach dir keine Sorgen um die Obergrenze. Es gibt Top-Spieler, die mit Roux die Weltspitze erreicht haben; die Methode selbst hat keine Obergrenze. Um jedoch unter 15 Sekunden zu kommen, wirst du wahrscheinlich die 42 CMLL-Formeln vollständig lernen müssen. Aber das ist eine Angelegenheit für eine andere Phase. Um unter 30 Sekunden zu kommen, ist das nicht nötig.

Und fast jeder Weltklasse-Spieler, der einhändig löst, verwendet die Roux-Methode, weil sie sich wirklich sehr gut für die einhändige Bedienung eignet.

**Die schnellsten Roux-Zeiten in offiziellen Wettbewerben (WCA):**

*   Single 4,11 Sekunden, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Philippinen), Valenzuela Cubing Open 2023, allgemein anerkannter schnellster offizieller Roux-Single ([Rekonstruktionsvideo](https://www.youtube.com/watch?v=5H4TRJSUm-U))
*   Average 5,98 Sekunden, ebenfalls er, 2019, damals asiatischer Rekord und dritter offizieller sub-6 Average überhaupt ([WCA-Profil](https://www.worldcubeassociation.org/persons/2017VILL41))
*   Er ist auch der [Weltrekordhalter im Einhändig-Lösen](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): Average 8,09, Single 6,05 (2024). In der Einhändig-Szene gilt Roux allgemein als die optimale Lösungsmethode.

Ich finde diesen Tausch sehr lohnenswert. Du tauschst zwei bis drei Sekunden CMLL-Zeit gegen: in jedem Schritt zu wissen, was du tust, nichts zu vergessen, selbst wenn du den Würfel drei Monate nicht anfasst, und die Fähigkeit, die Lösung für jeden unbekannten Würfel abzuleiten.

## Zusammenfassung

![Lösung abgeschlossen](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Von der Fähigkeit, den Würfel zu lösen, bis unter 30 Sekunden ist kein Prozess des Formel-Auswendiglernens, sondern ein Training der Koordination von Hand, Auge und Gehirn.

Vier Phasen, vier Dinge: Zuerst lernen, den Würfel ohne Drehen zu betrachten, dann lernen, die rechte Brücke zu bauen, ohne die linke zu zerstören, dann lernen, den nächsten Schritt zu antizipieren, während man den aktuellen ausführt, und schließlich die Hände den Augen folgen lassen.

Formeln sind nicht die Quelle der Geschwindigkeit. Beobachtung ist es.

Lerne, durch Fortschritte in jedem Bereich positives Feedback aufzubauen. Selbst Übungen zur Steigerung der Geschicklichkeit können weniger monoton sein, besonders wenn du die Überraschung erlebst, einen neuen Rekord zu brechen. Besonders in den Anfänger- und mittleren Phasen wirst du jeden Tag die Freude erleben, Rekorde zu knacken.

Alle Formeln und Fälle in diesem Artikel habe ich in der [Roux-Methode Formelbibliothek](/zh/projects/rubiks-cube/roux) zusammengefasst. Schau dort nach, wenn du steckenbleibst.

Die Welt des Zauberwürfels bietet grenzenlosen Spaß. Viel Freude beim Spielen!

## Anhang 1: Checkliste für jede Phase

**Phase Eins (> 60 Sekunden)**

*   Feste Beobachtungsposition, den Würfel während des gesamten Lösungsprozesses nicht drehen
*   Den nächsten gewünschten Block ohne Unterbrechung finden
*   Slow-Turning, bei jedem Schritt die Absicht benennen
*   Nur die linke Brücke üben, 50 Mal wiederholen

**Phase Zwei (60 → 40 Sekunden)**

*   Rechte Brücke nur mit R, r, M, U bauen, linke Brücke nicht berühren
*   Zweistufiges CMLL üben
*   M' U M' U Rhythmusübung, 5 Minuten täglich

**Phase Drei (40 → 30 Sekunden)**

*   Nach Abschluss von CMLL anhalten und sofort die Anzahl der falsch orientierten Kanten nennen
*   Slow-Turning + Vorausschau: Die Augen schauen immer auf den nächsten Block
*   Mindestens 20 hochwertige Lösungsversuche täglich

**Phase Vier (< 30 Sekunden)**

*   Videos aufnehmen, um Pausen zu finden
*   Finger-Tricks: R U R' U' Einzelfinger-Technik, M-Schicht mit Ringfinger
*   20 hochwertige Lösungsversuche täglich, ohne Mengen-Training

## Anhang 2: Werkzeuge

*   **csTimer**: [cstimer.net](https://cstimer.net/). Aktiviere Ao5 / Ao12 / Ao100 Statistiken. Ao100 spiegelt dein wahres Niveau wider, Einzelzeiten sind Glück.
*   **3D-Zauberwürfel**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Alle Formeln in diesem Artikel können hier eingegeben und als Animation angesehen werden.
*   **Roux-Methode Anfängerfreundliche Formelbibliothek**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Häufige Insertionsmuster für die linke und rechte Brücke, die 9 Formeln des zweistufigen CMLL, und alle LSE-Fälle (EO, UL/UR, die letzten vier Kanten). Jede Seite kann im 3D-Würfel geöffnet werden, wobei irrelevante Blöcke automatisch ausgeblendet und die zu bewegenden Kanten hervorgehoben werden.
*   **csTimer Trainingsanalysator**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). Ziehe die aus csTimer exportierte Datei hierher, um deine Leistungsentwicklung, Ao5/Ao12/Ao100-Kurven, PB-Verbesserungen, Meilensteintabelle (wann du das erste Mal unter 60, unter 40, unter 30 Sekunden warst) und die Power-Law-Übungskurve zu sehen. Alle Abbildungen in diesem Artikel stammen von hier. Die Daten werden nur in deinem Browser verarbeitet und nicht hochgeladen. Wenn du keine Exportdatei hast, kannst du zuerst meine 4441 Daten laden, um den Effekt zu sehen.

*Dieser Artikel enthält Amazon-Affiliate-Links: Bei einem Kauf über die Links erhalte ich eine kleine Provision, dein Preis bleibt unverändert.*

## Weitere Lektüre

*   [Wie man den Zauberwürfel ohne Formeln löst: Auch für Grundschüler verständlich](/zh/blog/solve-rubiks-cube-without-formulas)
