---
layout: blog
title: "Come risolvere il Cubo di Rubik senza formule: comprensibile anche per i più piccoli"
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Impara a risolvere il Cubo di Rubik 3x3 da zero, senza memorizzare alcuna formula, ma comprendendo la logica dei commutatori della teoria dei gruppi e il metodo a ponte Roux.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Forse sei un principiante del Cubo di Rubik e non l'hai mai risolto completamente.

La maggior parte dei tutorial in circolazione ti propinano solo una serie di formule strane, dicendoti che basta fare così e poi cosà, e il cubo si risolverà. Ma dopo averle eseguite, non capisci perché funzioni.

Questo articolo sarà la tua salvezza. Imparerai, partendo da zero, a risolvere il Cubo di Rubik senza memorizzare alcuna formula. Scoprirai le sue origini e comprenderai il suo funzionamento. Ti guiderò passo dopo passo, dalla teoria alla pratica, per risolvere completamente il cubo e ti insegnerò come osservare e ragionare.

Forse sarà la prima volta che riuscirai a risolvere un Cubo di Rubik interamente con le tue mani.

<!--more-->

## La nascita del Cubo di Rubik

Perché il Cubo di Rubik esercita un fascino così grande? Iniziamo parlando di come è nato.

Nel 1974, Ernő Rubik, un professore di architettura ungherese, creò il primo prototipo in legno. Il suo intento era mostrare agli studenti come le singole parti potessero muoversi indipendentemente senza compromettere la struttura complessiva. Dipingendo le sei facce con colori diversi, diede vita al Cubo di Rubik.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## L'impressionante numero di combinazioni

Un Cubo di Rubik 3x3 è composto da 8 angoli, 12 spigoli e 6 centri, per un totale di 26 blocchi visibili. Tuttavia, solo 20 di questi possono effettivamente muoversi, esclusi i sei centri di faccia.

Quanti stati possibili esistono in totale? Ben **4.3 × 10¹⁹**.

Cosa significa questo numero? È più grande del numero di granelli di sabbia sulla Terra. Se si provassero un miliardo di stati al secondo, ci vorrebbero oltre **1300 anni** per esplorarli tutti. Se si scrivesse ogni singolo stato su un foglio di carta e si impilassero, lo spessore equivarrebbe a 14.000 viaggi di andata e ritorno dalla Terra al Sole.

Il piccolo Cubo di Rubik 3x3 è davvero ingannevole. Grazie al suo gameplay innovativo e divertente, e alla sua infinita varietà e fascino, ha subito fatto il botto sul mercato al momento del lancio, attirando giocatori e appassionati di ogni tipo a cimentarsi. Ben presto si sono sviluppate gare di Cubo di Rubik, con diverse discipline (Speedsolving, Blindfolded, One-Handed, With Feet), vari metodi di risoluzione (Layer by Layer, Corners First, CFOP, Roux, Petrus, ZZ), e persino cubi di forme diverse (dal 2x2 al 7x7, Pyraminx, Skewb, Megaminx) sono emersi in continuazione.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Il fascino del Cubo è così profondo che ha spinto i matematici a studiare la sua struttura matematica per decenni, alla ricerca del "Numero di Dio". Gli astronauti lo portano nello spazio per giocare, e persone di ogni età e sesso si distinguono nelle varie competizioni. Tuttavia, rispetto al suo immenso fascino, i giocatori di Cubo di Rubik sono ancora relativamente pochi. Spero che questo articolo possa insegnare a tutti a risolverlo e a godere del divertimento che questo rompicapo offre.

## Il dilemma delle formule

La maggior parte dei metodi di risoluzione in commercio richiede ai giocatori di memorizzare molte formule, il che è molto scoraggiante per i principianti. Ancor prima di provare la gioia di risolvere il cubo, si ritrovano bloccati dalle formule. Il famoso metodo CFOP, ad esempio, conta più di 100 formule, e anche un principiante deve memorizzarne almeno qualche decina.

Ecco perché oggi voglio condividere con voi un metodo che permette di divertirsi con il Cubo senza dover memorizzare formule. Vi consentirà di risolverlo affidandovi solo all'osservazione e alla comprensione.

## L'arma matematica segreta: la Teoria dei Gruppi

Domanda: Come risolvere il Cubo di Rubik senza memorizzare nemmeno una formula?

Qui entra in gioco la nostra arma segreta matematica: la Teoria dei Gruppi. Non c'è problema che la matematica non possa risolvere.

Ma che relazione c'è tra il Cubo di Rubik e la Teoria dei Gruppi? Il Cubo è, di fatto, un gruppo. Ogni singola rotazione sul cubo è un'operazione di permutazione. Questa operazione ha diverse caratteristiche: può essere combinata, invertita, ma non è commutativa.

La moltiplicazione, che abbiamo imparato alle elementari, è un'operazione commutativa: il risultato di A × B è identico a quello di B × A. Ma nel gruppo del Cubo di Rubik, scambiare A e B non produce un'equivalenza; eseguire R seguito da U è un'operazione completamente diversa rispetto a U seguito da R. Quindi, comprendendo i gruppi, comprendiamo il Cubo di Rubik, e giocare con il cubo, a sua volta, ci aiuta a capire i gruppi.

Congratulazioni, hai già imparato la differenza tra gruppi abeliani (come la moltiplicazione e l'addizione) e gruppi non abeliani (come il gruppo del Cubo di Rubik).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Nota: Le operazioni standard del Cubo di Rubik sono solitamente indicate da lettere: R sta per la rotazione oraria di 90 gradi del lato destro, U per la rotazione oraria di 90 gradi dello strato superiore, R' è la rotazione antioraria di 90 gradi. M' indica lo strato centrale verso l'alto, M lo strato centrale verso il basso).

Puoi osservare e imparare come ruotare il cubo direttamente nell'animazione online inclusa nell'appendice.

## Teoria: il cuore della risoluzione senza formule: il Commutatore

Per risolvere il Cubo di Rubik, dobbiamo raggiungere uno stato in cui: **si modificano le posizioni di alcuni blocchi senza alterare quelle degli altri.**

In matematica, questa operazione si chiama commutatore e si scrive **A B A⁻¹ B⁻¹**.

A⁻¹ è l'operazione inversa di A.

Possiamo usare un'analogia molto pratica: un ascensore. Immagina di voler portare una persona dal 1° al 3° piano:

1. **A**: La persona entra nell'ascensore.
2. **B**: L'ascensore sale al 3° piano.
3. **A⁻¹**: La persona esce dall'ascensore.
4. **B⁻¹**: L'ascensore torna al 1° piano.

Risultato: L'ascensore è tornato nella sua posizione iniziale, ma la persona è passata dal 1° al 3° piano. Il punto cruciale è che quando l'ascensore è tornato, la persona non era più al suo interno. Così, l'ambiente è stato ripristinato, ma l'obiettivo si è spostato.

Nel Cubo di Rubik, ad esempio, R e R⁻¹ corrispondono a una rotazione oraria di 90 gradi del lato destro e poi, al terzo passaggio, a una rotazione antioraria di 90 gradi.

Questa operazione inversa A⁻¹ B⁻¹ ripristina l'ambiente precedentemente alterato dall'operazione A B, permettendo di scambiare solo alcuni blocchi specifici senza influenzare l'ambiente circostante.

Allora, perché non A A⁻¹ B B⁻¹? In questo modo, ogni movimento si annullerebbe direttamente e i blocchi non potrebbero essere scambiati. Un'operazione A seguita immediatamente dalla sua inversa A⁻¹ equivale a non aver fatto nulla (come ruotare lo strato superiore di 90 gradi in senso antiorario e poi immediatamente di 90 gradi in senso orario). Pertanto, deve essere **A B A⁻¹ B⁻¹** per creare uno scambio.

Questo è lo scambio più elementare, e il movimento "atomico" più intuitivo nel Cubo di Rubik corrisponde a: **R U R' U'**

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Può essere combinato in sequenze più lunghe per ottenere diversi effetti di permutazione, ad esempio: (R U R' U') (R U R' U') (R U R').

In realtà, questa è l'origine delle formule. Perché esistono le formule? Non sono altro che una combinazione di operazioni di permutazione basilari, trasformate in sequenze. Eseguendo queste sequenze si possono raggiungere rapidamente risultati specifici, come risolvere uno spigolo o un angolo. Diverse sequenze possono essere usate in combinazione per guidarci verso la risoluzione finale del cubo.

Comprendendo il principio, possiamo persino creare le nostre formule personalizzate. (Come creare le proprie formule per il Cubo di Rubik verrà spiegato in dettaglio nel prossimo articolo).

Quindi, per risolvere il Cubo di Rubik senza memorizzare formule, dobbiamo solo imparare la logica delle permutazioni di base. Potremo applicarla per analogia in qualsiasi altra situazione. I movimenti di permutazione più elementari scambieranno le posizioni di tre angoli o di tre spigoli.

## Come eseguire scambi nel Cubo di Rubik

Come menzionato in precedenza, il movimento atomico di scambio più intuitivo nel Cubo di Rubik è: **R U R' U'**. Se comprendi a fondo questo movimento, sarai subito in grado di risolvere i primi due strati del cubo.

Questo movimento significa, in pratica: spostare (lo strato destro), inserire (il blocco target), riposizionare (lo strato destro), riposizionare (lo strato superiore).

In questo modo, abbiamo inserito l'angolo anteriore sinistro e lo spigolo centrale nell'angolo inferiore destro.

Questo movimento può essere costantemente variato, trasformandosi in **U R U' R'**, oppure **F R F' R'**, e così via, in qualsiasi posizione. Esistono anche varianti con lo strato centrale, come **M U M' U'**, o ancora **U2 R U2 R'**.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Nella fase iniziale, il cubo è al suo massimo grado di disordine. Quindi, si possono usare molte delle permutazioni di base sopra descritte per risolvere prima una faccia o un'altra sezione, riducendo il livello di caos.

Inoltre, poiché lo stato è molto disordinato, l'ultima mossa U' di **R U R' U'**, quella che ripristina l'ambiente, può persino essere omessa a seconda della situazione, passando direttamente alla mossa successiva. Questo si semplifica in: spostare, inserire, riposizionare.

Spostare, inserire, riposizionare.

Questo è il movimento chiave, congratulazioni, hai capito come giocare con il Cubo di Rubik!

Tuttavia, nelle fasi successive, avremo bisogno di sequenze di permutazione più lunghe per scambiare blocchi specifici senza compromettere lo stato di risoluzione parziale già raggiunto.

Prendiamo ad esempio **R U' L' U R' U' L U**: questo movimento è in grado di scambiare solo tre angoli senza influenzare nient'altro. Scomponiamolo nella logica del commutatore:

```
A   = R U'   (per inviare l'angolo fuori)
B   = L'     (muovi lo strato sinistro)
A⁻¹ = U R'   (ripristina l'operazione A)
B⁻¹ = U' L U(ripristina l'operazione B, con aggiustamento)
```

Effetto: l'angolo in basso a sinistra rimane al suo posto, mentre gli altri tre angoli si scambiano di posizione.

Queste sono probabilmente le uniche due formule che ti chiederò di capire in questo articolo. Impareremo a usarle nella sezione pratica, comprendendole attraverso l'azione, senza bisogno di memorizzarle a memoria.

## Pratica: risoluzione da zero

Finalmente arriviamo al cuore di questo articolo. Ti guiderò passo dopo passo per risolvere completamente il Cubo di Rubik partendo da zero, affidandoti esclusivamente all'osservazione e alla comprensione.

Cosa ti servirà:

- Un Cubo di Rubik
- E un po' di pazienza (perché il nostro obiettivo principale è l'osservazione e la comprensione)

Per prima cosa, supponiamo tu abbia già un Cubo di Rubik. Lo mescoleremo con la scramble standard internazionale (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), e poi lo risolveremo insieme.

Oppure puoi giocare direttamente alla versione online qui; cliccando sul link vedrai il cubo già mescolato: [3D Cubo di Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Per la risoluzione, useremo l'approccio del metodo Roux, noto anche come metodo a ponte, che è estremamente elegante. A differenza dei metodi strato per strato, il metodo a ponte prevede prima la risoluzione dei blocchi 1x2x3 sui lati sinistro e destro, comunemente chiamati ponti sinistro e destro, e successivamente lo strato superiore e le posizioni rimanenti.

Il metodo a ponte è molto libero e flessibile, richiede meno mosse rispetto a molti metodi noti e pochissime formule da memorizzare, poiché si basa fondamentalmente sulla logica dei commutatori. All'interno di questo quadro, impareremo a risolvere il Cubo di Rubik senza dover memorizzare alcuna formula.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Primo passaggio: Fissare la posizione di osservazione

La posizione di osservazione nel metodo a ponte è fissa: durante la risoluzione, non avremo bisogno di ruotare frequentemente il cubo, ma manterremo lo stesso angolo per pensare e agire. Mantenendo questa faccia fissa, potremo individuare molto facilmente alcuni angoli e spigoli e capire dove dovrebbero andare.

Possiamo usare questo orientamento come punto di riferimento:

- Fronte (rivolto verso di te): Faccia verde
- Lato sinistro: Rosso
- Lato destro: Arancione
- Strato superiore: Giallo
- Strato inferiore: Bianco
- Retro: Blu

### Secondo passaggio: Costruire i ponti sinistro e destro

**Ordine di costruzione del ponte sinistro:**

1. Per prima cosa, posiziona lo spigolo bianco-rosso (il pilastro in basso a sinistra).
2. Poi posiziona lo spigolo blu-rosso posteriore.
3. Infine, posiziona i due angoli rossi anteriori.

Schema dello stato del ponte sinistro completato:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Questo processo non richiede alcuna formula; basta osservare e comprendere. Con un po' di pratica, diventerai sempre più abile.

**F' L**: Usando l'osservazione, trova lo spigolo rosso-bianco e posizionalo correttamente, con il bianco rivolto verso il basso e il rosso verso sinistra.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Posiziona lo spigolo blu-rosso e gli angoli.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Trova la posizione degli ultimi due blocchi del ponte sinistro e trova un modo per posizionarli correttamente, ottenendo così un ponte sinistro perfetto.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Per il ponte destro, il procedimento è lo stesso**: sostituisci il rosso con l'arancione e ripeti i passaggi. Attenzione però a non disfare il ponte sinistro già costruito. Se hai bisogno di spostare temporaneamente un blocco, puoi allontanare il ponte sinistro per permettere alle operazioni sul lato destro di non influenzarlo, e poi ripristinare il ponte sinistro una volta terminati i movimenti a destra.

**Centro del ponte destro**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Primo blocco del ponte destro**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Abbiamo preparato l'ultimo modulo del ponte destro e vogliamo inserirlo nella sua posizione. Per farlo, spostiamo prima il ponte sinistro (F') per creare spazio, poi muoviamo il modulo (U), e infine riposizioniamo sia il ponte sinistro che quello destro.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Questo è lo stato con entrambi i ponti completati. L'importante è che i ponti siano formati; per gli altri colori non dobbiamo preoccuparci per il momento.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Terzo passaggio: Risolvere gli angoli dello strato superiore

Una volta completati i ponti sinistro e destro, procederemo a risolvere i quattro angoli rimanenti. Qui useremo la rotazione ciclica di tre angoli, che permette di far ruotare tre angoli dalla posizione A a B, da B a C e da C di nuovo ad A.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Rotazione ciclica di tre angoli

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>L'angolo in basso a sinistra rimane fermo</li>
      <li>Gli altri tre angoli si scambiano di posizione in senso <strong>antiorario</strong></li>
      <li>Ma i loro colori interni ruotano in senso <strong>orario</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (versione speculare)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>L'angolo in basso a destra rimane fermo</li>
      <li>Gli altri tre angoli si scambiano di posizione in senso <strong>orario</strong></li>
      <li>Ma i loro colori interni ruotano in senso <strong>antiorario</strong></li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Le situazioni di orientamento degli angoli che puoi incontrare sono solo quattro: 0, 1, 2 o 4 angoli "buoni".

- **4 angoli buoni**: Stato completato
- **1 angolo buono** (forma a "pesce"): Esegui un'altra rotazione ciclica di tre angoli o la sua versione speculare per completare.
- **0 / 2 angoli buoni**: Posiziona un angolo "cattivo" in una posizione non influenzata dalla rotazione ciclica di tre angoli (l'angolo in basso a sinistra), esegui una rotazione ciclica, otterrai 1 angolo buono e tornerai alla situazione precedente.

A volte la versione base della rotazione ciclica di tre angoli richiede due esecuzioni per la risoluzione, mentre la versione speculare ne richiede una sola per completare. I principianti dovrebbero prima padroneggiare la versione base, concentrandosi sull'osservazione e la comprensione, per poi acquisire padronanza completa. Questa rotazione ciclica con il giallo rivolto verso l'alto è anche una famosa formula classica, la "formula del pesce" (o "OLL del pesce"), che permette di familiarizzare con la forma a pesce.

Anche questa formula non va memorizzata a memoria. Osserva come si muovono i due blocchi verdi; fai qualche prova pratica e ti diventerà familiare. L'essenza è scambiare i tre angoli dello strato superiore.

Prendiamo il cubo con i ponti sinistro e destro già completati: notiamo che ci sono due gialli nella parte superiore. Spostiamo l'angolo in basso a sinistra in modo che non sia giallo ed eseguiamo una rotazione ciclica di tre angoli. Poi, con altre 2 rotazioni cicliche o una rotazione ciclica in versione speculare, otterremo tutti e quattro gli angoli superiori con il giallo rivolto verso l'alto.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Quattro angoli gialli completati!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Regolazione delle posizioni (Allineamento dei colori laterali)

Quando tutti e quattro gli angoli hanno il giallo rivolto verso l'alto, è ancora necessario allineare i colori laterali degli angoli, in modo che questi possano essere definitivamente posizionati correttamente.

A questo punto, useremo una **variante della J-perm**: **R U2 R' U' R U2 L' U R' U' L**

La logica di questa formula può essere scomposta in "spostamento di coppie + scambio logico":

- Prima parte `R U2 R' U' R`: Sposta una coppia in un'area sicura per la memorizzazione temporanea, liberando spazio.
- Seconda parte `U2 L' U R' U' L`: Utilizza la logica della rotazione ciclica di tre per scambiare con precisione due angoli.

Effetto: i due angoli sulla destra si scambiano di posizione, mantenendo il giallo rivolto verso l'alto, mentre gli altri angoli rimangono invariati.

Questo permette di scambiare la posizione di due angoli adiacenti qualsiasi (usando U per posizionare i due angoli desiderati a destra). Ripetendo lo scambio più volte, tutti e quattro gli angoli potranno essere allineati e posizionati correttamente.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Anche questa formula non va memorizzata a memoria. Osserva come si muovono i due blocchi verdi; fai qualche prova pratica e ti diventerà familiare. L'essenza è scambiare i due angoli in alto a destra mantenendo il giallo rivolto verso l'alto.

### Quarto passaggio: Risolvere gli ultimi sei spigoli (LSE, Last Six Edges)

A questo punto, allinea prima i centri, posizionando il giallo in alto e il bianco in basso, quindi procedi ad aggiustare gli spigoli.

Rimangono solo 6 spigoli. Questo passaggio utilizza solo le operazioni **M** e **U**, ed è molto intuitivo.

#### 4a: Regolazione dell'orientamento (EO, Edge Orientation)

**Come giudicare**: controlla se l'adesivo bianco/giallo dello spigolo è rivolto verso l'alto o verso il basso.

- Verso l'alto / Verso il basso = Spigolo "buono" ✓
- Verso il lato = Spigolo "cattivo" ✗

**Come aggiustare**: usa **M U M'** o **M' U M** per girare gli spigoli "cattivi".

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Comprensione intuitiva: M porta su lo spigolo dello strato centrale, U aggiusta la posizione, M' lo riporta giù.

Ripeti più volte, finché tutti gli spigoli non avranno il bianco/giallo rivolto verso l'alto o verso il basso.

Possiamo chiamare "buoni" gli spigoli con l'orientamento corretto e "cattivi" quelli con l'orientamento sbagliato.

Come mostrato nell'immagine, i tre spigoli evidenziati nello strato superiore sono "cattivi", perché non sono né gialli né bianchi.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Consigli per l'aggiustamento**: Le situazioni di spigoli "cattivi" che puoi incontrare sono solo quattro:

- **0 spigoli "cattivi"**: Stato completato
- **Non 0 e non 4 spigoli "cattivi"**: Usa **M' U M** per cambiare il numero di spigoli "cattivi", aumentandoli a 4.
- **4 spigoli "cattivi" (2 in alto e 2 in basso)**: Scambia gli spigoli superiori e inferiori con **M' U2 M** per ottenere una situazione di 3 in alto e 1 in basso.
- **4 spigoli "cattivi" (3 in alto e 1 in basso)**: I tre spigoli "cattivi" dello strato superiore formeranno una freccia. Ruota lo strato superiore in modo che la freccia punti allo spigolo "cattivo" dello strato inferiore, esegui **M' U M** una volta, e tutti e quattro gli spigoli "cattivi" si annulleranno, diventando tutti "buoni".

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Se la freccia non compare, continua a provare **M' U M**; riuscirai sempre a crearla. Una volta avanzato, potrai gradualmente trovare dei pattern.

#### 4b: Risolvere gli spigoli sinistro e destro (rosso e arancione)

Trova gli spigoli rosso-giallo e arancione-giallo (l'obiettivo è riportarli ai lati sinistro e destro) e posizionali correttamente usando la rotazione ciclica di tre spigoli.

**Consigli**:

1. Sposta lo spigolo rosso-giallo (o arancione-giallo) sopra lo strato centrale e fallo "affondare" scambiando gli spigoli superiore e inferiore (**M' U2 M**).
2. Fai "affondare" l'altro spigolo arancione-giallo (o rosso-giallo) sul lato opposto.
3. Ruota lo strato superiore in modo che il lato rosso appaia nella posizione opposta allo spigolo rosso-giallo "affondato".
4. Ruota lo strato centrale di mezzo giro (**M2**), quindi osserva e riposiziona lo strato superiore (**U**).

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Risolvere gli ultimi quattro spigoli (blu e verde)

**Consigli**:

- Usa continuamente la **rotazione ciclica di tre spigoli** per scambiare gli spigoli superiore e inferiore: **M' U2 M**. L'ultimo passaggio si basa sull'osservazione per riposizionare con **U2**.
- Trucco rapido: posiziona lo spigolo bianco-verde (o bianco-blu) sopra la posizione target, scambia gli spigoli superiore e inferiore, e lo spigolo bianco-verde (o bianco-blu) sarà posizionato correttamente.

Ci sono solo tre situazioni:

- Già corretto → Finito!
- Richiede M2 → Esegui **M2** una volta.
- Richiede scambio → **M' U2 M U2** o **M U2 M' U2**.

Possiamo anche semplificare la logica della rotazione ciclica di tre spigoli: M' porta su lo strato centrale, U2 ruota lo strato superiore di mezzo giro, M ripristina lo strato centrale, U2 ripristina lo strato superiore.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Completato!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Riepilogo

Non c'è bisogno di memorizzare formule a memoria, solo la logica del commutatore "apri-opera-chiudi". Scoprirai che questo processo è molto più divertente che imparare a memoria le formule, e non dovrai preoccuparti di dimenticarlo anche dopo molti anni, potrai sempre ricavarlo da solo.

Lo stesso approccio può essere usato per risolvere qualsiasi cubo, inclusi i cubi di forme strane e insolite.

Tuttavia, se vuoi intraprendere la strada dello speedcubing, dovrai affrontare un percorso di pratica incessante. Ma per un principiante, raggiungere un tempo inferiore ai 90 secondi con un po' di pratica non dovrebbe essere un problema.

Esistono migliaia di metodi di risoluzione; sta a te trovare quello più elegante o che ti risulta più comodo.

Il mondo del Cubo di Rubik offre un divertimento infinito, spero ti divertirai!

## Appendice 1: Scheda riassuntiva del metodo (Il Mantra del Cubo di Rubik)

1. **Costruire i ponti sinistro e destro: Basati sull'osservazione e l'intuizione.**
   - Consiglio: Una volta che avrai acquisito grande familiarità con l'osservazione e la previsione, potrai, in base allo stato specifico del cubo, dare priorità alla costruzione di altri moduli, o costruire contemporaneamente i ponti sinistro e destro. Questo ti permetterà di ridurre il numero di mosse e ti darà grande libertà.
2. **Risolvere l'orientamento dei quattro angoli dello strato superiore: quattro gialli verso l'alto.**
   - Rotazione ciclica di tre angoli dello strato superiore: **R U' L' U R' U' L U** (l'angolo in basso a sinistra rimane fermo, i colori interni degli altri tre angoli ruotano in senso orario).
   - Rotazione ciclica di tre angoli dello strato superiore (versione speculare): **L' U R U' L U R' U'** (l'angolo in basso a destra rimane fermo, i colori interni degli altri tre angoli ruotano in senso antiorario).
3. **Risolvere i lati dei quattro angoli dello strato superiore.**
   - **Micro-regolazione della posizione degli angoli dello strato superiore**: **R U2 R' U' R U2 L' U R' U' L** (mantiene tutti e quattro gli angoli con il giallo rivolto verso l'alto, scambia la posizione dei due angoli sul lato destro).
4. **Cambiare l'orientamento degli spigoli, in modo che il bianco o il giallo siano rivolti verso l'alto o verso il basso.**
   - Per prima cosa, allinea i centri, posiziona il giallo in alto e il bianco in basso, quindi aggiusta gli spigoli.
   - Con **M' U M**, modifica il numero di spigoli "cattivi", crea una freccia, punta la freccia verso lo spigolo "cattivo", esegui **M' U M** una volta, e tutti e quattro gli spigoli "cattivi" si annulleranno e si posizioneranno correttamente.
5. **Risolvere gli spigoli sui lati sinistro e destro (rosso e arancione).**
   - Per prima cosa, fai "affondare" lo spigolo rosso-giallo (o arancione-giallo) scambiando gli spigoli superiore e inferiore (**M' U2 M**).
6. **Risolvere gli spigoli rimanenti (blu e verde).**
   - Usa continuamente la **rotazione ciclica di tre spigoli** per scambiare gli spigoli superiore e inferiore: **M' U2 M**. L'ultimo passaggio si basa sull'osservazione per riposizionare con **U2**.

Non devi imparare a memoria nessuna di queste formule; le ho messe in appendice solo per tua comodità. In realtà, quando provi di persona, osservando e capendo il movimento dei cubetti, dopo qualche tentativo ci prenderai la mano. Il punto chiave è scambiare i tre angoli dello strato superiore.

## Appendice 2: Siti web e strumenti utili

Ho anche creato per voi un Cubo di Rubik 3D giocabile online, che potete ruotare liberamente, mescolare e risolvere seguendo formule predefinite, e per ogni mossa c'è una bellissima animazione da guardare!

[3D Cubo di Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Scramble usata in questo tutorial: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Passi di risoluzione dei ponti sinistro e destro di questo tutorial: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Cliccando su questo link vedrai il cubo già mescolato: [3D Cubo di Rubik — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D').

Timer per Cubo di Rubik usato dai campioni del mondo: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
