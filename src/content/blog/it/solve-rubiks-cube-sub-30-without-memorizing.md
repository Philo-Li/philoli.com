---
layout: blog
title: "Come scendere sotto i 30 secondi con il Cubo di Rubik senza imparare algoritmi: una guida per tutti, anche per i più piccoli"
date: 2026-10-09 12:00:00
tags:
  - Cubo di Rubik
  - Tutorial
  - Metodo Roux
  - Speedcubing
  - Pratica deliberata
categories: Esperimenti
description: "Ci sono voluti 89 giorni dal primo solve al sub-30 di Ao100, senza memorizzare un singolo algoritmo CFOP. Analizzo quattro fasi usando i dati di 4441 risoluzioni cronometrate: dove ci si blocca, cosa praticare in ogni fase, e perché il metodo Roux non richiede la memorizzazione di algoritmi."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="Le quattro fasi da 165 a 28 secondi" />
</figure>

*Fig.: Le quattro fasi da 165 a 28 secondi. La fase due è stata la più rapida, la fase tre il plateau più lungo.*

Nel mio precedente articolo [《Come risolvere il Cubo di Rubik senza imparare algoritmi》](/it/blog/solve-rubiks-cube-without-formulas/), hai imparato la logica degli scambiatori e come risolvere un cubo senza memorizzare algoritmi. Quell'articolo ha ricevuto un'accoglienza molto positiva.

Se hai seguito le istruzioni, probabilmente ora ci metti due o tre minuti per risolverlo, magari in modo un po' impacciato, ma ci riesci. A questo punto, sorge una nuova domanda: come faccio a diventare più veloce?

Se cerchi "speedcubing", tutti i tutorial ti diranno la stessa cosa: per scendere sotto i 30 secondi, devi prima memorizzare gli algoritmi CFOP. 41 per l'F2L, 57 per l'OLL, 21 per il PLL, per un totale di 119 algoritmi. Anche se l'F2L lo fai intuitivamente, i 78 algoritmi per l'ultimo strato (OLL+PLL) sono inevitabili. Se non li memorizzi, non potrai essere veloce.

Questo articolo vuole dimostrarti che puoi scendere sotto i 30 secondi senza memorizzare assolutamente alcun algoritmo.

<!--more-->

Dal 7 maggio 2026, quando ho risolto il cubo per la prima volta, al 4 agosto, quando il mio Ao100 è sceso sotto i 30 secondi, sono passati 89 giorni. In questo periodo non ho memorizzato un singolo algoritmo CFOP, mi sono solo divertito nel tempo libero. Questi sono i dati cronometrati delle mie 4441 risoluzioni registrate.

![Curva dei tempi di risoluzione per 4441 solve](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Fig.: Curva dei tempi di risoluzione per 4441 solve. La linea grigia rappresenta ogni singolo tempo, quella più scura la tendenza dell'Ao100, e i punti rossi indicano i nuovi personal best. Il miglior Ao100 è di 28.22 secondi.*

Con una pratica consapevole e costante, chiunque può passare da zero a sub-30 in pochi mesi.

Cosa significa scendere sotto i 30 secondi? Al [primo Campionato del Mondo di Cubo di Rubik nel 1982](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship), il tempo del vincitore fu di 22.95 secondi, il primo record mondiale ufficiale riconosciuto dalla WCA; il 10° posto fu di 29.11 secondi, ottenuto proprio da Jessica Fridrich, l'inventrice del CFOP, di cui parleremo nella prossima sezione. In altre parole, un sub-30 ottenuto oggi da un amatore dopo pochi mesi di pratica, nel 1982 lo avrebbe portato nella top ten mondiale.

Di seguito, ti condividerò passo dopo passo come ci sono riuscito, e ti presenterò il mio metodo di pratica completo.

## Perché il mondo dello speedcubing si basa sulla memorizzazione di algoritmi

Chiariamo subito una cosa: perché "velocità" e "memorizzare algoritmi" sono così strettamente legati nella mente delle persone?

All'inizio degli anni '80, la professoressa di origine ceca Jessica Fridrich (che in seguito studiò informatica forense all'Università di Binghamton, USA) sviluppò un metodo di risoluzione a strati, in seguito chiamato CFOP (Cross, F2L, OLL, PLL). L'idea alla base di questo metodo è: enumerare tutte le possibili situazioni dello strato superiore (U-layer) e associare a ciascuna la sequenza di mosse ottimale. Tu riconosci la situazione, esegui l'algoritmo, senza bisogno di pensare.

![Jessica Fridrich e il Cubo di Rubik nel suo ufficio](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Fig.: Jessica Fridrich e il Cubo di Rubik nel suo ufficio. Nel 1982 ottenne il 10° posto al primo Campionato del Mondo con 29.11 secondi, e il CFOP prende il nome da lei (Metodo Fridrich).*

Questo metodo è estremamente veloce. Quasi tutti i record mondiali sono stati ottenuti con il CFOP. Così, tutti i tutorial lo insegnano, tutti i video ne parlano, e "imparare lo speedcubing" è diventato sinonimo di "imparare il CFOP", che a sua volta significa memorizzare 119 algoritmi.

Attenzione, però: la "memorizzazione degli algoritmi" è una caratteristica specifica del CFOP, non della "velocità" in sé. Il CFOP richiede la memorizzazione perché ha scelto la strada dell'enumerazione esaustiva. L'enumerazione richiede memoria, ed è questo il prezzo da pagare.

Esistono metodi che non seguono la strada dell'enumerazione esaustiva? Sì.

## La soluzione senza algoritmi: il Metodo Roux

Nel 2003, il francese Gilles Roux ha presentato un approccio completamente diverso. Invece di risolvere il cubo strato per strato, si costruiscono prima due "blocchi" 1×2×3 (destro e sinistro), poi si sistemano i quattro angoli dello strato superiore, e infine si risolvono i sei spigoli rimanenti usando solo le mosse M (strato centrale) e U (strato superiore).

![Gilles Roux in gara](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Fig.: Gilles Roux in gara. Immagine tratta da un vecchio video di competizione, restaurata e ingrandita con l'AI.*

Nella lezione precedente abbiamo già risolto il cubo usando questa struttura. Rivediamo qui le sue quattro fasi, questa volta concentrandoci su "cosa bisogna memorizzare in ogni fase":

| Fase | Cosa fare | Algoritmi da memorizzare |
| --- | --- | --- |
| 1. Primo Blocco (FB) | Costruire un blocco 1×2×3 | 0, pura osservazione |
| 2. Secondo Blocco (SB) | Costruire l'altro blocco in modo simmetrico | 0, pura osservazione |
| 3. CMLL | Orientare e permutare i quattro angoli dello strato superiore | 9, tutte derivabili da uno scambio a tre cicli |
| 4. LSE | Gli ultimi sei spigoli | 0, si usano solo rotazioni dello strato superiore (U) e dello strato M |

Delle quattro fasi, tre non richiedono alcun algoritmo. L'unico richiesto, il CMLL, ha un totale di 42 casi, ma non hai bisogno di 42 algoritmi. Lo scambio a tre cicli degli angoli R U' L' U R' U' L U, spiegato nell'articolo precedente, insieme al suo specchio e ad alcune varianti, può coprire tutte le situazioni, anche se in modo leggermente più lento.

![Le quattro fasi del metodo Roux](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Fig.: Le quattro fasi del metodo Roux. Ogni passaggio mostra solo i pezzi già risolti fino a quel punto: Primo Blocco → Secondo Blocco → CMLL (quattro angoli superiori) → LSE (ultimi sei spigoli). Estratto dal pannello "Metodo" della mia pagina del cubo 3D.*

Ecco perché il Roux può essere eseguito senza memorizzare algoritmi: comprime la parte che richiede memoria in un angolo molto piccolo, lasciando il resto all'osservazione, alla comprensione e alla pratica.

## Da 165 a 28 secondi: le quattro fasi

Ecco il percorso che ho realmente seguito. Per ogni fase ho indicato l'inizio e la fine con i dati, e ho spiegato dove mi sono bloccato e cosa ho praticato. I tuoi ostacoli potrebbero essere diversi dai miei, ma l'ordine sarà molto probabilmente lo stesso.

![Durata delle quattro fasi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Fig.: Durata delle quattro fasi. Fase uno 3 settimane, fase due 11 giorni, fase tre due mesi, fase quattro fino ad oggi.*

### Fase uno: da 165 a 60 secondi (Settimane 1-3)

**Dati**: Dal 7 al 27 maggio. La prima settimana la media era di 165 secondi, la terza settimana di 68 secondi.

**Dove ti blocchi**: Il Primo Blocco è molto poco familiare, ci vuole molto tempo per trovare ogni coppia di pezzi. E una volta trovata una coppia, i principianti tendono sempre a fermarsi per continuare a osservare.

![Dove i principianti impiegano il loro tempo](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Fig.: Dove i principianti impiegano il loro tempo. Le mani sono ferme, gli occhi cercano i pezzi sul cubo, e il tempo speso a "cercare" è molte volte superiore a quello speso a "girare".*

**Cosa praticare**:

Il più grande nemico in questa fase non è la lentezza delle mani, ma la lentezza degli occhi. Il tempo che dedichi a "cercare" è di gran lunga superiore a quello che dedichi a "girare". Quindi:

- Mantieni una posizione di osservazione fissa, non ruotare il cubo. Come detto nell'articolo precedente, l'angolo di osservazione nel Roux è fisso. In questa fase, devi trasformare il "non ruotare il cubo" in memoria muscolare. Ogni volta che senti il bisogno di ruotare il cubo, fermati e chiediti: riesco a vedere il pezzo che mi serve da questa angolazione?
- Slow solving. Non cronometrare, ma assicurati che i movimenti siano fluidi e senza interruzioni. Ogni movimento può essere molto lento, ma non deve esserci nessuna pausa. Il punto chiave è che mentre le mani eseguono il movimento precedente, gli occhi devono già concentrarsi sul movimento successivo: questo è il cuore dello slow solving. Sembra di rallentare, ma in realtà stai allenando i tuoi occhi a percepire la relazione tra la posizione attuale dei pezzi e quella desiderata.
- Esercitati solo sul Primo Blocco. Scramble, costruisci il Primo Blocco, poi scramble di nuovo e costruisci ancora il Primo Blocco. Non andare oltre. Il Primo Blocco è il passaggio più libero nel Roux e quello che allena di più l'osservazione.

Non imparare nessun nuovo algoritmo in questa fase. Il tuo collo di bottiglia non sono gli algoritmi in questo momento.

### Fase due: da 60 a 40 secondi (Settimane 4-5)

**Dati**: Dal 27 maggio al 7 giugno, 11 giorni. Questa è stata la fase di miglioramento più rapida dell'intero processo, e anche quella in cui ho praticato di più, con 723 risoluzioni nella prima settimana di giugno.

**Dove ti blocchi**: Movimenti non fluidi. Il cubo si blocca.

**Cosa praticare**:

In questa fase, devi ottimizzare i movimenti di ogni passaggio, aumentando la fluidità di ciascuno, basandoti sulla comprensione.

- Secondo Blocco. Il Secondo Blocco è più difficile del Primo Blocco perché lo spazio è dimezzato e non puoi distruggere il Primo Blocco già completato. I movimenti chiave sono R, r (due strati destri), M, U. In questa fase, devi imparare a usare r e M al posto di R per muovere i pezzi, in modo che il Primo Blocco non venga mai intaccato. Ottimizzare la sequenza di mosse significa risparmiare tempo. Per esempio, tre rotazioni orarie sono equivalenti a una rotazione antioraria.
- Padroneggiare lo strato M. L'ultima fase del Roux si basa interamente su M e U, e la fluidità della rotazione dello strato M determina direttamente il tuo limite inferiore di velocità. Usa l'anulare o il medio per spingere M, e inizia a praticare ritmi come M' U M' U.
- Riconoscimento delle forme CMLL. Nell'articolo precedente, abbiamo "provato" a risolvere i quattro angoli con gli scambi a tre cicli. Ora devi iniziare a osservare prima di agire: prima di girare lo strato superiore, guarda l'orientamento giallo dei quattro angoli, determina se ci sono 0, 1, 2 o 4 angoli orientati correttamente, e poi esegui direttamente la sequenza di mosse corrispondente. Puoi anche ottenere un notevole aumento di efficienza con un numero molto limitato di algoritmi, il che è un ottimo compromesso. La maggior parte di questi algoritmi non richiede una memorizzazione a memoria, ma può essere compresa mentre li si esegue.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Vista durante la costruzione del Secondo Blocco" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Fig. a sinistra: Vista durante la costruzione del Secondo Blocco. Il Primo Blocco è completato, e si usano solo le quattro rotazioni R, r, M, U per inserire la coppia angolo-spigolo sul lato destro, senza mai toccare il Primo Blocco. Fig. a destra: M' U M, una delle sequenze di mosse più utilizzate nella seconda metà del Roux. Lo strato centrale sale, lo strato superiore ruota, lo strato centrale torna giù: tre mosse per scambiare una coppia di spigoli tra lo strato superiore e quello centrale.*

Puoi consultare la mia [Libreria di algoritmi del Metodo Roux](/it/projects/rubiks-cube/roux#cmll), la pagina CMLL è a due fasi: 7 algoritmi di orientamento + 2 algoritmi di permutazione, per un totale di 9. Questa è l'opzione più conveniente per aumentare la velocità, sono facili da imparare e ogni set padroneggiato può farti guadagnare circa 1-2 secondi. Con un po' di pratica, diventerai rapidamente abile, e alcuni sono già stati introdotti nell'articolo precedente. Non è necessario memorizzarli tutti per scendere sotto i 30 secondi.

![CMLL a due fasi, primo passaggio: sette orientamenti degli angoli](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Fig.: CMLL a due fasi, primo passaggio: sette orientamenti degli angoli. Nella vista dall'alto, il giallo è il colore dello strato superiore rivolto verso l'alto, e le piccole barre esterne indicano che il colore dello strato superiore dell'angolo è rivolto lateralmente. Riconosci la forma in base al numero di angoli gialli: 0 sono H o Pi, 1 è S o AS, 2 sono U, T o L.*

Dopo aver orientato il giallo sulla parte superiore, puoi usare questi due algoritmi per allineare i lati degli angoli.

Se un lato ha già colori allineati, ad esempio il rosso è già sullo stesso lato, ruotalo a sinistra e poi puoi scegliere l'algoritmo di scambio adiacente. Se nessun lato ha colori allineati, scegli l'algoritmo di scambio diagonale.

![CMLL a due fasi, secondo passaggio: due posizioni degli angoli](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Fig.: CMLL a due fasi, secondo passaggio: due posizioni degli angoli. Nell'immagine a sinistra, i due angoli rossi sul lato sinistro sono già allineati, si usa lo scambio adiacente; nell'immagine a destra, nessun lato è allineato, si usa lo scambio diagonale.*

Puoi capire ogni set di algoritmi attraverso un intenso slow solving. Non considerarli come semplici formule, ma piuttosto come sequenze di movimenti fisse che potresti scoprire anche da solo con la pratica, ma che qui ti vengono fornite per risparmiarti tempo.

Un'altra cosa, più efficace di qualsiasi esercizio: spendi qualche soldo per un cubo nuovo. Se hai ancora uno di quei vecchi cubi che scattano, fanno rumore e si bloccano quando giri troppo, comprane uno moderno 3x3 magnetico. I cubi più recenti ti faranno sentire la potenza dell'ingegneria ottimizzata: rotazioni fluide, auto-allineamento, quasi nessun blocco. Solo cambiando cubo, la tua media potrebbe migliorare di 15 secondi in un colpo solo. L'opzione con il miglior rapporto qualità-prezzo è il [MoYu RS3 M V5 (MagLev + Ball-Core)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20), costa circa venti dollari e ti basterà fino al sub-20.

### Fase tre: da 40 a 30 secondi (Settimane 5-13, due mesi)

**Dati**: Dal 7 giugno al 4 agosto. Ci sono voluti 58 giorni per portare l'Ao100 da 39.8 secondi a 29.9 secondi. In questa fase, occasionalmente si potevano ottenere tempi sotto i 30 secondi, ma solo con molta fortuna. Inoltre, man mano che il tempo medio di risoluzione diminuisce, la difficoltà di migliorare di 1 secondo aumenta esponenzialmente.

![Media giornaliera dei tempi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Fig.: Media giornaliera dei tempi. Dopo metà giugno, la curva si è quasi appiattita, stagnando tra i 30 e i 40 secondi per due mesi.*

Questo è il plateau. Tutti lo incontrano, e io ci sono rimasto per due mesi.

**Dove ti blocchi**: La risoluzione dei sei spigoli dello strato superiore è lenta, non si comprende la logica, e ogni volta si procede per tentativi, sprecando molto tempo. Il Primo e Secondo Blocco non sono ancora abbastanza fluidi.

**Cosa praticare**:

- Riconoscimento EO (Edge Orientation). Nell'articolo precedente abbiamo parlato delle sole poche situazioni di spigoli mal orientati: 0, non 0 e non 4, 4 (2 sopra e 2 sotto), 4 (tutti nello strato U), 4 (3 sopra e 1 sotto). L'obiettivo di questa fase è: nell'istante in cui hai completato i blocchi, riconoscere a colpo d'occhio, senza contare, quale situazione si presenta. Il metodo di pratica è: scramble, fai solo fino alla fine del CMLL, poi metti in pausa, dichiara il numero di spigoli mal orientati, e poi continua.
- Molti non capiscono i movimenti qui. La fase EO serve in ultima analisi a costruire la forma a freccia con 3 spigoli sopra e 1 sotto. Poiché lo stato risolto è a un solo passo dalla forma a freccia, pensando a ritroso, questa è l'ultima mossa prima di completare la risoluzione. Quindi, indipendentemente dal numero di spigoli mal orientati, l'obiettivo finale è costruire una freccia. Con 4 spigoli mal orientati sopra, scambia una coppia di spigoli (uno sopra e uno sotto) per portare uno spigolo mal orientato sotto, creando la freccia. Con 2 sopra e 2 sotto, scambia una coppia di spigoli (uno sopra e uno sotto) per portare uno spigolo mal orientato sopra, creando la freccia. Se c'è 1 sopra e 1 sotto, o 2 sopra, usa M' U M per trasformarlo in una delle situazioni precedenti e poi costruisci la freccia. Puoi esplorare i passaggi ottimali per la situazione 1/1 attraverso molta osservazione e riflessione.
- Praticare intensamente il look-ahead. Questa è la cosa più importante per passare da 40 a 30 secondi, ed è anche la più controintuitiva: gira più lentamente, guarda più avanti. Quando costruisci il Primo Blocco, non guardare il pezzo che stai inserendo, ma dove si trova il pezzo successivo. All'inizio sarà molto scomodo e i tuoi tempi peggioreranno, ma dopo una settimana di perseveranza miglioreranno improvvisamente.
- CMLL senza esitazioni. Se ogni volta devi pensare a una mossa prima di farla, allora non è ancora tua. Esercita ogni singola mossa 50 volte, finché le tue mani non si muovono automaticamente appena vedi la forma.

![Forma a freccia](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Fig.: Forma a freccia. Tre spigoli mal orientati nello strato superiore (evidenziati in ciano) formano una freccia che punta allo spigolo mal orientato nello strato inferiore. Con una sola M' U M, tutti e quattro possono essere orientati contemporaneamente. [Apri questo stato nel cubo 3D](/it/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) per vederlo passo dopo passo.*

![Le sei forme di EO](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Fig.: Le sei forme di EO. Le etichette in alto a sinistra indicano il numero di spigoli mal orientati (U / D), il giallo sono spigoli orientati correttamente, il bordo ciano sono spigoli mal orientati. Solo la forma a freccia richiede un algoritmo, le altre cinque vengono prima trasformate in una freccia.*

Per la risoluzione degli spigoli laterali (UL/UR), prendiamo come esempio il giallo come strato superiore, il bianco come strato inferiore e il Primo Blocco rosso. Gli spigoli che devono essere ancora orientati sono quelli giallo-rosso + giallo-arancione (evidenziati). L'idea principale è portare lo spigolo giallo-rosso nello strato inferiore attraverso uno scambio di spigoli tra gli strati U e D, e lo stesso per lo spigolo giallo-arancione. Una volta che i due spigoli sono nello strato inferiore e si trovano in posizioni opposte, si ruota lo strato superiore nella posizione corretta, e con M2 U o M2 U' si possono risolvere gli spigoli UL/UR dello strato U.

Per aiutarti a capire meglio, ho organizzato tutte le sei forme di EO nella [pagina LSE della Libreria di algoritmi del Metodo Roux](/it/projects/rubiks-cube/roux#lse). Cliccando su "vedi dettagli" per ogni immagine, si aprirà lo stato corrispondente nel cubo 3D, con gli spigoli mal orientati evidenziati automaticamente. Nella stessa pagina troverai anche tutte le situazioni per l'orientamento degli spigoli UL/UR e gli ultimi quattro spigoli.

Una diminuzione del volume di pratica in questa fase non è un male. Un plateau non si supera con la quantità, ma correggendo una specifica cattiva abitudine. La mia esperienza è di cambiarne solo una alla volta.

### Fase quattro: da 30 a 28 secondi (dopo la settimana 13)

**Dati**: Dopo il 4 agosto. Nel mese di settembre, le risoluzioni registrate sono state 122, ma in realtà molte altre non sono state annotate. Ho ormai integrato il cubo di Rubik come un giocattolo sulla mia scrivania: lo prendo in mano e lo risolvo quando sono di buon umore, quando sono agitato o ansioso, durante le pause di lavoro, o quando mi annoio, lasciando che il cubing si fonda con la mia vita quotidiana. L'Ao100 è gradualmente sceso da 29.9 a 28.2.

**Dove ti blocchi**: Non c'è un collo di bottiglia definito, è semplicemente questione di fluidità.

**Cosa praticare**:

Se la tua velocità media è ancora sopra i 30 secondi, l'unica cosa che devi fare è continuare a praticare molto, invece di memorizzare nuovi algoritmi.

Continuando a praticare il look-ahead tramite lo slow solving, diventerai sempre più veloce.

Prendi il cubo in mano ogni volta che puoi, tienilo in un posto facilmente accessibile, come la scrivania, così puoi giocarci durante le pause di lavoro. Inoltre, registra spesso i tuoi solve per vedere in quale fase impieghi più tempo, e poi ottimizza in modo mirato. Questa è pratica deliberata: la tua velocità di miglioramento non dipende dal numero totale di risoluzioni casuali, ma dal numero di volte che pratichi in modo intenzionale.

Scoprirai che, una volta superato il plateau dei 30-35 secondi, la tua velocità diminuirà ulteriormente di un gradino.

Arrivato a questa fase, congratulazioni! Agli occhi di un principiante, sei già un cuber molto bravo!

## Il costo di non memorizzare algoritmi

A questo punto, è giusto essere onesti. Non memorizzare algoritmi ha un costo.

La fase CMLL è più lenta. Coprire 42 casi con soli 9 algoritmi significa che in alcune situazioni dovrai eseguire due algoritmi. Chi conosce tutti gli algoritmi CMLL è due o tre secondi più veloce di me in questo passaggio.

I finger tricks per lo strato M sono più impegnativi. La seconda metà del Roux si basa interamente sullo strato M, che è più difficile da girare rispetto a R o U, tende a bloccarsi più facilmente e richiede un cubo di qualità superiore.

Non preoccuparti dei limiti superiori. Ci sono cuber di alto livello che usano il Roux e raggiungono le posizioni più alte nel mondo; il metodo stesso non ha limiti. Tuttavia, per scendere sotto i 15 secondi, è molto probabile che tu debba imparare tutti i 42 algoritmi CMLL. Ma quella è un'altra fase. Per scendere sotto i 30 secondi, non è necessario.

Inoltre, quasi tutti i cuber di livello mondiale che risolvono il cubo con una mano (OH) utilizzano il metodo Roux, perché è davvero molto adatto anche per l'operazione a una mano.

**I migliori tempi ufficiali (WCA) con il metodo Roux:**

- Singolo 4.11 secondi, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filippine), Valenzuela Cubing Open 2023, riconosciuto come il solve singolo Roux più veloce ufficiale ([video della ricostruzione](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Media 5.98 secondi, sempre lui, 2019, allora record asiatico e il terzo Ao5 ufficiale sotto i 6 secondi nella storia ([profilo WCA](https://www.worldcubeassociation.org/persons/2017VILL41))
- È anche il [detentore del record mondiale con una mano](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): media 8.09, singolo 6.05 (2024). Nel mondo del cubing a una mano, il Roux è ampiamente considerato il metodo ottimale.

Trovo che questo sia un ottimo compromesso. In cambio di due o tre secondi in più nel CMLL, ottieni: sapere cosa stai facendo a ogni passo, non dimenticare come risolvere il cubo anche dopo tre mesi senza toccarlo, e poter trovare una soluzione per qualsiasi cubo sconosciuto.

## Riepilogo

![Risoluzione completata](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Passare dalla capacità di risolvere il cubo a scendere sotto i 30 secondi non è un processo di memorizzazione di algoritmi, ma un processo di allenamento della coordinazione tra mani, occhi e cervello.

Quattro fasi, quattro cose: prima impara a guardare senza ruotare il cubo, poi impara a costruire il Secondo Blocco senza distruggere il Primo Blocco, poi impara a guardare il passo successivo mentre esegui quello attuale, e infine lascia che le tue mani seguano i tuoi occhi.

Gli algoritmi non sono la fonte della velocità. L'osservazione lo è.

Impara a costruire un feedback positivo attraverso i progressi in ogni fase. Anche la pratica per la fluidità può essere meno noiosa, specialmente quando scopri di aver battuto un record personale ancora una volta. Soprattutto nelle fasi iniziali e intermedie, ogni giorno sperimenterai la gioia di battere un record.

Tutti gli algoritmi e i casi menzionati nell'articolo sono stati organizzati nella [Libreria di algoritmi del Metodo Roux](/it/projects/rubiks-cube/roux). Torna a consultarla quando ti blocchi.

Il mondo del cubing è infinitamente divertente, ti auguro buon divertimento!

## Appendice 1: Lista di pratica per ogni fase

**Fase uno (> 60 secondi)**

- Posizione di osservazione fissa, non ruotare il cubo durante l'intero solve
- Trova il prossimo colore desiderato senza pause
- Slow solving, dichiara l'intenzione di ogni mossa
- Pratica solo il Primo Blocco, ripeti 50 volte

**Fase due (da 60 a 40 secondi)**

- Secondo Blocco usa solo R, r, M, U, non toccare il Primo Blocco
- Pratica del CMLL a due fasi
- Pratica il ritmo M' U M' U, 5 minuti al giorno

**Fase tre (da 40 a 30 secondi)**

- Ferma il solve dopo il CMLL, dichiara a colpo d'occhio il numero di spigoli mal orientati
- Slow solving + look-ahead: gli occhi guardano sempre il pezzo successivo
- Almeno 20 solve di alta qualità al giorno

**Fase quattro (< 30 secondi)**

- Registra video per trovare le pause
- Finger tricks: R U R' U' con un dito, strato M con l'anulare
- 20 solve di alta qualità al giorno, senza focalizzarsi sulla quantità

## Appendice 2: Strumenti

- **csTimer**: [cstimer.net](https://cstimer.net/). Attiva le statistiche Ao5 / Ao12 / Ao100. L'Ao100 è il tuo vero livello, i tempi singoli sono questione di fortuna.
- **Cubo 3D**: [philoli.com/zh/projects/rubiks-cube](/it/projects/rubiks-cube/). Tutti gli algoritmi di questo articolo possono essere inseriti qui per visualizzare l'animazione.
- **Libreria di algoritmi del Metodo Roux (versione per principianti)**: [philoli.com/zh/projects/rubiks-cube/roux](/it/projects/rubiks-cube/roux). Include i pattern di inserimento comuni per il Primo Blocco e il Secondo Blocco, i 9 algoritmi del CMLL a due fasi, e tutti i casi LSE (EO, UL/UR, ultimi quattro spigoli). Ogni immagine può essere aperta nel cubo 3D, nascondendo automaticamente i pezzi irrilevanti e evidenziando gli spigoli da muovere.
- **Analizzatore di allenamento csTimer**: [philoli.com/zh/projects/rubiks-cube/analyzer](/it/projects/rubiks-cube/analyzer). Trascina qui il file esportato da csTimer per visualizzare l'andamento dei tuoi tempi, le curve Ao5/Ao12/Ao100, i progressi dei tuoi PB, la tabella dei traguardi (quando hai raggiunto per la prima volta sub-60, sub-40, sub-30) e la curva di pratica Power Law. Tutte le figure di questo articolo provengono da qui. I dati vengono elaborati solo nel tuo browser e non vengono caricati. Se non hai un file esportato, puoi caricare i miei 4441 dati per vedere come funziona.

*Questo articolo contiene link di affiliazione Amazon: acquistando tramite questi link, riceverò una piccola commissione, senza alcun costo aggiuntivo per te.*

## Letture aggiuntive

- [Come risolvere il Cubo di Rubik senza imparare algoritmi: una guida per tutti, anche per i più piccoli](/it/blog/solve-rubiks-cube-without-formulas)
