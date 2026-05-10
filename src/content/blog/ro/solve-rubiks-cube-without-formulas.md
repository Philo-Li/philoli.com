---
layout: blog
title: Cum să rezolvi Cubul Rubik fără să memorezi formule: Chiar și un școlar poate înțelege
date: 2026-05-09 12:00:00
tags:
  - 魔方
  - 教程
  - 群论
  - 数学
  - Roux方法
categories: 日常折腾
description: Învățați pas cu pas, de la zero, cum să rezolvați un Cub Rubik 3x3 fără a memora nicio formulă, folosind ideea comutatorilor din teoria grupurilor și metoda podului Roux.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Poate ești un începător în lumea Cubului Rubik și nu ai reușit niciodată să-l rezolvi complet.

Multe dintre așa-zisele tutoriale disponibile pe piață nu fac decât să-ți arunce în față o grămadă de formule ciudate, spunându-ți doar să faci asta, apoi aia, și cubul se va rezolva. Dar chiar și după ce le urmezi, tot nu înțelegi de ce funcționează.

Acest articol îți va fi un colac de salvare. Vei învăța, de la zero, cum să rezolvi un Cub Rubik fără a memora nicio formulă. Vei descoperi originile cubului și vei înțelege cum funcționează. Te voi ghida pas cu pas, de la teorie la practică, pentru a rezolva complet un cub, și te voi învăța cum să observi.

Poate aceasta va fi prima dată când vei reuși să rezolvi singur un Cub Rubik complet.

<!--more-->

## Nașterea Cubului Rubik

De ce are Cubul Rubik o asemenea fascinație? Să discutăm mai întâi despre cum a luat naștere.

În 1974, un profesor de arhitectură maghiar, Ernő Rubik, a creat primul prototip din lemn, vopsind cele șase fețe în culori diferite, pentru a le demonstra studenților săi cum pot mișca individual părțile unui obiect fără a-i distruge structura integrală. Așa s-a născut Cubul Rubik.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Numărul Uimitor de Combinații

Un Cub Rubik 3x3 are 8 piese de colț, 12 piese de margine și 6 piese centrale, însumând 26 de piese vizibile. Însă, în realitate, doar 20 de piese, excluzând cele șase piese centrale ale fețelor, se pot mișca.

Dar câte stări posibile are în total? **4.3 × 10¹⁹**.

Ce înseamnă asta? Numărul de stări este mai mare decât numărul de fire de nisip de pe Pământ. Dacă am încerca un miliard de stări pe secundă, ar dura peste **1300 de ani** să le parcurgem pe toate. Dacă am scrie fiecare stare pe o foaie de hârtie și le-am suprapune, grosimea ar echivala cu 14.000 de călătorii dus-întors de la Pământ la Soare.

Micul Cub Rubik 3x3 este cu adevărat înșelător. Datorită modului său de joc inedit și captivant, cu o infinitate de variații și un farmec incontestabil, a explodat pe piață la lansare, atrăgând o multitudine de jucători și entuziaști dornici să-l încerce. Curând au apărut competiții de Rubik, diverse stiluri de rezolvare (speedcubing, blindfolded, cu o singură mână, cu picioarele), metode de rezolvare (Layer by Layer, Corners First, CFOP, Roux Bridge, Petrus, ZZ), și chiar cuburi atipice (de la 2x2 la 7x7, Pyraminx, Skewb, Megaminx), care au continuat să apară.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Farmecul Cubului Rubik este atât de mare încât matematicienii au studiat neîncetat matematica din spatele său, petrecând zeci de ani în căutarea "Numărului lui Dumnezeu". Astronauti l-au dus în spațiu, iar oameni de toate vârstele și genurile s-au remarcat în diverse competiții. Cu toate acestea, comparativ cu fascinația sa, numărul jucătorilor de cub este încă relativ mic. Prin urmare, prin acest articol, îmi propun să-i învăț pe toți cum să rezolve cubul și să se bucure de plăcerea pe care o oferă acest joc ingenios.

## Dilema Formulelor

Majoritatea metodelor de rezolvare de pe piață necesită memorarea multor formule, ceea ce este extrem de descurajant pentru începători. Înainte de a simți bucuria de a rezolva cubul, aceștia sunt blocați de formule. Faimoasa metodă CFOP are peste 100 de formule, iar începătorii trebuie să memoreze zeci.

De aceea, astăzi vreau să vă împărtășesc o metodă care vă permite să vă bucurați de Cubul Rubik fără a memora formule. Veți reuși să-l rezolvați doar prin observare și înțelegere.

## Arma Secretă a Matematicii: Teoria Grupurilor (Group Theory)

Întrebare: Cum să rezolvi Cubul Rubik fără a memora nicio formulă?

Aici vom apela la arma secretă a matematicii: Teoria Grupurilor. Nu există problemă care să nu poată fi rezolvată cu matematica.

Deci, ce legătură există între Cubul Rubik și Teoria Grupurilor? Cubul Rubik este, de fapt, un grup. Fiecare rotație a cubului reprezintă o operație de permutare. Această operație are câteva caracteristici: poate fi combinată, poate fi inversată, dar nu este comutativă.

Înmulțirea, pe care am învățat-o în școala primară, este o operație comutativă: A × B și B × A au exact același rezultat. Însă, în grupul Cubului Rubik, A și B nu sunt echivalente dacă sunt interschimbate. A executa mai întâi R și apoi U este o operație complet diferită de a executa mai întâi U și apoi R. Prin urmare, dacă înțelegem grupurile, înțelegem și Cubul Rubik. Și, invers, jucatul cu cubul ne ajută să înțelegem grupurile.

Felicitări, ai învățat acum diferența dintre grupurile abeliene (înmulțirea și adunarea sunt grupuri abeliene) și grupurile non-abeliene (grupul Rubik).

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Notă: Mișcările standard ale Cubului Rubik sunt reprezentate, în general, prin litere: R înseamnă rotirea feței din dreapta cu 90 de grade în sens orar, U înseamnă rotirea feței de sus cu 90 de grade în sens orar, R' este rotirea în sens antiorar cu 90 de grade, M' înseamnă mișcarea stratului de mijloc în sus, iar M înseamnă mișcarea stratului de mijloc în jos.)

Poți observa și învăța cum se rotește Cubul Rubik direct în animația online din anexă.

## Secțiunea Principii: Nucleul Rezolvării Fără Formule: Comutatorul (Commutator)

Pentru a rezolva Cubul Rubik, trebuie să atingem următoarea stare: **să ajustăm poziția anumitor piese fără a schimba poziția celorlalte.**

În matematică, această operație se numește comutator și se scrie **A B A⁻¹ B⁻¹**.

A⁻¹ este operația inversă a lui A.

Putem folosi o analogie foarte practică – liftul. Să presupunem că vrei să duci o persoană de la etajul 1 la etajul 3:

1. **A**: Persoana intră în lift
2. **B**: Liftul urcă la etajul 3
3. **A⁻¹**: Persoana iese din lift
4. **B⁻¹**: Liftul revine la etajul 1

Rezultat: Liftul a revenit la poziția inițială, dar persoana s-a mutat de la etajul 1 la etajul 3. Cheia este că, atunci când liftul a revenit, persoana nu mai era în el – astfel, mediul a revenit la normal, dar obiectivul și-a schimbat poziția.

De exemplu, în Cubul Rubik, R și R⁻¹ corespund rotirii feței din dreapta cu 90 de grade în sens orar, apoi, la al treilea pas, rotirii în sens antiorar cu 90 de grade.

Operația inversă A⁻¹ B⁻¹ poate restabili mediul perturbat anterior de operația A B, realizând astfel schimbarea doar a anumitor piese specifice, fără a afecta restul cubului.

De ce nu ar fi A A⁻¹ B B⁻¹? Așa, fiecare mișcare s-ar anula direct, iar piesele nu s-ar putea schimba. Tocmai ai efectuat operația A, iar imediat după, operația inversă A⁻¹, iar împreună ar echivala cu a nu fi făcut nimic (de exemplu, o rotire a stratului superior cu 90 de grade în sens antiorar, urmată imediat de o rotirea cu 90 de grade în sens orar). Prin urmare, trebuie să fie **A B A⁻¹ B⁻¹** pentru a realiza o permutare.

Aceasta este cea mai fundamentală permutare, iar mișcarea elementară cea mai la îndemână în Cubul Rubik este: **R U R' U'**

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Acesta poate fi combinat în secvențe lungi, realizând diferite efecte de permutare, cum ar fi: (R U R' U') (R U R' U') (R U R')

De fapt, aceasta este și originea formulelor. De ce există formule? Ele sunt pur și simplu o combinație de operații de permutare fundamentale, transformate în secvențe. Executarea acestor secvențe permite atingerea rapidă a unor rezultate specifice, cum ar fi rezolvarea unei margini sau a unui colț. Diferite secvențe pot fi utilizate în combinație, ghidându-ne spre rezolvarea finală a cubului.

Înțelegând principiul, putem chiar să ne creăm propriile formule. (Cum să-ți creezi singur formulele de Cub Rubik, vom detalia într-un articol viitor.)

Deci, pentru a rezolva Cubul Rubik fără a memora nicio formulă, trebuie doar să înțelegem logica permutărilor de bază, pe care o putem aplica apoi în orice situație. Mișcările de permutare cele mai elementare vor schimba poziția a trei piese de colț sau a trei piese de margine.

## Cum să Efectuezi Permutări în Cubul Rubik

Am menționat anterior că cea mai la îndemână mișcare elementară de permutare în Cubul Rubik este: **R U R' U'**. Dacă înțelegi profund această mișcare, vei putea rezolva imediat primele două straturi ale cubului.

Această mișcare înseamnă de fapt: îndepărtează (stratul din dreapta), inserează (piesa țintă), readu (stratul din dreapta) la loc, readu (stratul de sus) la loc.

Astfel, am reușit să inserăm piesa de colț stânga-față și piesa de margine centrală în colțul din dreapta-jos.

Această mișcare poate fi variată constant, transformându-se în **U R U' R'**, sau **F R F' R'**, și așa mai departe, în orice poziție. Există chiar și variante pentru stratul de mijloc, cum ar fi **M U M' U'**, sau **U2 R U2 R'**.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

În stadiile inițiale, cubul este cel mai haotic. De aceea, putem folosi numeroase permutări de bază ca cele de mai sus pentru a rezolva mai întâi o față, sau alte părți, reducând astfel nivelul de dezordine.

Mai mult, din cauza stării de mare dezordine, ultima mișcare U' din **R U R' U'**, care restabilește mediul, poate fi chiar omisă în funcție de situație, trecând direct la următoarea mișcare. Aceasta se simplifică la: îndepărtează, inserează, readu la loc.

Îndepărtează, inserează, readu la loc.

Aceasta este mișcarea cheie, felicitări, ai înțeles cum să joci Cubul Rubik!

Însă, în stadiile avansate, vom avea nevoie de pași de permutare mai lungi pentru a schimba piese specifice fără a strica starea deja rezolvată a cubului.

De exemplu, **R U' L' U R' U' L U** este o mișcare care poate schimba doar trei piese de colț, fără a afecta restul. Descompusă în logica comutatorului:

```
A   = R U'   (trimite piesa de colț afară)
B   = L'     (mișcă stratul stânga o dată)
A⁻¹ = U R'   (anulează operația A)
B⁻¹ = U' L U(anulează operația B, cu ajustare)
```

Efect: Piesa de colț din stânga-jos rămâne pe loc, iar celelalte trei piese de colț se schimbă între ele.

Acesta este probabil unul dintre cele doar două seturi de mișcări pe care va trebui să le înțelegi în acest articol. Vom învăța cum să-l folosim în secțiunea practică și îl vom înțelege prin operare, fără a fi nevoie să-l memorăm mecanic.

## Secțiunea Practică: Rezolvarea de la Zero

Acum ajungem la punctul culminant al acestui articol. Te voi ghida pas cu pas pentru a rezolva complet Cubul Rubik de la zero, bazându-te doar pe observație și înțelegere.

Pregătirea necesară:

- Un Cub Rubik
- Și puțină răbdare (deoarece ne vom concentra pe observație și înțelegere)

În primul rând, să presupunem că ai deja un Cub Rubik. Îl vom amesteca folosind standardul internațional (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**), iar apoi îl vom rezolva împreună.

Sau poți juca direct varianta online; dând click pe acest link, vei vedea cubul deja amestecat: [3D 魔方 — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Putem folosi abordarea foarte elegantă a metodei Roux Bridge pentru a-l rezolva. Această metodă, spre deosebire de rezolvarea strat cu strat, implică mai întâi construirea a două blocuri de 1x2x3 pe părțile laterale, cunoscute sub denumirea de "poduri stânga-dreapta", iar apoi rezolvarea stratului de sus și a pieselor rămase.

Metoda Bridge este extrem de liberă și flexibilă, având mai puțini pași decât multe alte metode cunoscute, și necesită memorarea a relativ puține formule, deoarece se bazează fundamental pe logica comutatorilor. În acest cadru, putem învăța cum să rezolvăm Cubul Rubik fără a memora nicio formulă.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Pasul Unu: Stabilirea Poziției de Observare

Poziția de observare în metoda Bridge este fixă. Pe parcursul rezolvării, nu este necesar să rotim frecvent cubul, ci să menținem același unghi pentru a gândi și a rezolva. Din acest unghi fix, putem identifica foarte ușor anumite piese de colț și de margine, știind unde ar trebui să ajungă.

Putem folosi acest unghi ca referință:

- Fața din față (orientată spre tine): fața verde
- Partea stângă: roșu
- Partea dreaptă: portocaliu
- Stratul de sus: galben
- Stratul de jos: alb
- Partea din spate: albastru

### Pasul Doi: Construirea Podurilor Stânga-Dreapta

**Ordinea de construcție a podului stânga:**

1. Mai întâi, aduceți piesa de margine alb-roșu la locul ei (stâlpul din stânga-jos)
2. Apoi, aduceți piesa de margine albastru-roșu din spate la locul ei
3. Apoi, aduceți cele două piese de colț roșii din față la locul lor

Diagrama stării finale a podului stânga:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Acest proces nu necesită nicio formulă; se bazează doar pe observație și înțelegere. Cu cât exersezi mai mult, cu atât vei deveni mai priceput.

**F' L**: Folosind metoda observației, găsește piesa de margine roșu-alb și adu-o la locul ei, cu albul în jos și roșul în stânga.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Adu piesa de margine albastru-roșu și piesa de colț la locul lor.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Găsește poziția ultimelor două piese ale podului stânga, găsește o modalitate de a le aduce la locul lor, și astfel vom obține un pod stânga perfect.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**La fel și pentru podul dreapta**, înlocuiește roșu cu portocaliu și repetă pașii de mai sus. Dar aici trebuie să fii atent să nu strici podul stânga deja construit. Dacă este necesar să împrumuți o poziție, poți muta temporar podul stânga, astfel încât operațiile de pe partea dreaptă să nu-l afecteze, și apoi să-l readuci la loc după ce mișcările de pe partea dreaptă sunt finalizate.

**Mijlocul podului dreapta**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Prima piesă a podului dreapta**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Am finalizat ultimul modul al podului dreapta și vrem să-l inserăm în poziție, așa că mai întâi mutăm podul stânga (F') pentru a face loc, apoi mutăm modulul (U), și în final, podul stânga și podul dreapta revin simultan la poziție.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Aceasta este starea în care ambele poduri sunt finalizate. Atâta timp cât podurile sunt formate, nu trebuie să ne facem griji pentru celelalte piese colorate deocamdată.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Pasul Trei: Rezolvarea Pieselor de Colț de Sus

După ce ai rezolvat podurile stânga și dreapta, vom începe să rezolvăm celelalte patru piese de colț. Aici vom folosi ciclarea a trei piese de colț, pentru a le roti pozițiile: de la A la B, B la C, și C înapoi la A.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Ciclarea a trei piese de colț

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Piesa de colț din stânga-jos rămâne pe loc</li>
      <li>Celelalte trei piese de colț își schimbă poziția în sens <strong>antiorar</strong></li>
      <li>Dar culorile lor interne se rotesc în sens <strong>orar</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (versiune oglindă)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Piesa de colț din dreapta-jos rămâne pe loc</li>
      <li>Celelalte trei piese de colț își schimbă poziția în sens <strong>orar</strong></li>
      <li>Dar culorile lor interne se rotesc în sens <strong>antiorar</strong></li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Există doar patru tipuri de orientări ale pieselor de colț pe care le poți întâlni: 0, 1, 2 sau 4 colțuri corecte.

- **4 colțuri corecte**: Stare finală
- **1 colț corect** (forma de pește mic): Efectuează încă o dată ciclarea a trei colțuri sau varianta sa oglindă pentru a finaliza.
- **0 / 2 colțuri corecte**: Mai întâi, plasează un colț incorect într-o poziție neafectată de ciclarea a trei colțuri (colțul din stânga-jos), efectuează o dată ciclarea a trei colțuri, și vei obține 1 colț corect, revenind la situația anterioară.

Uneori, versiunea de bază a ciclării a trei colțuri trebuie executată de două ori pentru a rezolva, în timp ce versiunea oglindă poate rezolva complet dintr-o singură dată. Începătorii ar trebui să se concentreze mai întâi pe stăpânirea versiunii de bază, acordând atenție observației și înțelegerii, și apoi vor putea să le integreze pe deplin. Această ciclare a trei colțuri cu galbenul în sus este, de asemenea, o formulă clasică binecunoscută – formula "peștelui mic stânga-dreapta" – și poți înțelege forma peștelui.

Nici această formulă nu trebuie memorată. Observă cum se mișcă cele două piese verzi și familiarizează-te cu ea făcând-o de câteva ori. Esența este schimbarea poziției a trei piese de colț din stratul de sus.

Pentru cubul cu podurile stânga-dreapta deja construite, observăm că există două piese galbene în partea de sus. Prin urmare, vom muta colțul din stânga-jos să nu fie galben și vom efectua o dată ciclarea a trei colțuri. Apoi, fie facem încă de 2 ori ciclarea a trei colțuri, fie o dată varianta oglindă, pentru a ne asigura că toate cele patru colțuri de sus au galbenul orientat în sus.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Am finalizat cele patru colțuri galbene!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Ajustarea Poziției (alinierea culorilor laterale)

După ce toate cele patru piese de colț au galbenul orientat în sus, este necesar să aliniem și culorile laterale ale acestora, pentru ca piesele de colț să fie complet la locul lor.

Aici vom folosi o **variantă de J-perm**: **R U2 R' U' R U2 L' U R' U' L**

Logica acestei formule poate fi descompusă în "transportul unei perechi + permutare logică":

- Prima parte `R U2 R' U' R`: Mută o pereche într-o zonă sigură pentru stocare temporară, eliberând spațiu.
- A doua parte `U2 L' U R' U' L`: Folosește logica ciclării a trei piese pentru a schimba cu precizie poziția a două piese de colț.

**Efect**: Cele două piese de colț din dreapta își schimbă poziția, menținând în același timp orientarea galbenă în sus, iar celelalte piese de colț rămân neschimbate.

Aceasta înseamnă că poți schimba poziția oricăror două piese de colț adiacente (folosind U pentru a ajusta care două piese de colț se află în dreapta). Prin repetarea schimbului de câteva ori, toate cele patru piese de colț se vor alinia și vor fi complet la locul lor.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Nici această formulă nu trebuie memorată. Observă cum se mișcă cele două piese verzi și familiarizează-te cu ea făcând-o de câteva ori. Esența este de a schimba poziția celor două piese de colț din dreapta stratului de sus, menținând în același timp galbenul orientat în sus.

### Pasul Patru: Rezolvarea Ultimelor Șase Piese de Margine (LSE, Last Six Edges)

Până aici, mai întâi aliniați piesele centrale, astfel încât galbenul să fie în partea de sus și albul în partea de jos, apoi ajustați piesele de margine.

Au mai rămas doar 6 piese de margine. Acest pas folosește doar operațiile **M** și **U**, fiind foarte intuitiv.

#### 4a: Ajustarea Orientării (EO, Edge Orientation)

**Metoda de verificare**: Observă dacă autocolantul alb/galben al piesei de margine este orientat în sus sau în jos.

- Sus / Jos = Margine corectă ✓
- Lateral = Margine incorectă ✗

**Metoda de ajustare**: Folosește **M U M'** sau **M' U M** pentru a inversa marginile incorecte.

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Înțelegere intuitivă: M aduce piesa de margine din stratul de mijloc în sus, U ajustează poziția, M' o readuce înapoi.

Repetă de câteva ori până când toate piesele de margine au albul/galbenul orientat în sus sau în jos.

Putem numi marginile cu orientare corectă "margini bune" și pe cele cu orientare incorectă "margini rele".

Cele trei margini evidențiate în stratul de sus sunt "margini rele", deoarece nu sunt nici galbene, nici albe.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Sfaturi de ajustare**: Există doar patru tipuri de situații cu margini incorecte pe care le poți întâlni:

- **0 margini incorecte**: Stare finală
- **Nu 0 și nici 4 margini incorecte**: Folosește **M' U M** pentru a schimba numărul de margini incorecte, crescându-l la 4.
- **4 margini incorecte (câte 2 sus și jos)**: Prin **M' U2 M** schimbă marginile de sus și de jos, transformând situația în 3 sus și 1 jos.
- **4 margini incorecte (3 sus și 1 jos)**: Cele trei margini incorecte din stratul de sus vor forma o săgeată. Rotește stratul de sus astfel încât săgeata să indice marginea incorectă din stratul de jos. Efectuează o dată **M' U M**, și toate cele patru margini incorecte se vor anula reciproc, devenind toate "margini bune".

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Dacă nu apare săgeata, încearcă în mod repetat **M' U M**; vei reuși întotdeauna să o construiești. După ce avansezi, poți căuta încet-încet tipare.

#### 4b: Rezolvarea Marginilor Laterale (Roșu și Portocaliu)

Găsește marginile roșu-galben și portocaliu-galben (scopul este să le readuci la marginile laterale stânga-dreapta) și folosește ciclarea a trei margini pentru a le trimite în poziția corectă.

**Sfaturi**:

1. Mută marginea roșu-galben (sau portocaliu-galben) deasupra stratului de mijloc și folosește schimbarea marginilor de sus și de jos pentru a o aduce în stratul de jos (**M' U2 M**).
2. Adu cealaltă margine portocaliu-galben (sau roșu-galben) în stratul de jos, pe partea opusă.
3. Rotește stratul de sus astfel încât marginea roșie să apară în poziția opusă piesei de margine roșu-galben aflată în stratul de jos.
4. Rotește stratul de mijloc cu jumătate de tură (**M2**), apoi observă și readu stratul de sus la poziție (**U**).

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Rezolvarea Ultimelor Patru Margini (Albastru și Verde)

**Sfaturi**:

- Folosește continuu **ciclarea a trei margini** pentru a schimba marginile de sus și de jos: **M' U2 M**. Ultimul pas este să observi și să readuci la poziție cu **U2**.
- Truc rapid: Plasează marginea alb-verde (sau alb-albastru) deasupra poziției țintă, schimbă marginile de sus și de jos, și marginea alb-verde (alb-albastru) va fi la locul ei.

Există doar trei situații:

- Deja corect → Gata!
- Necesită M2 → Efectuează o dată **M2**.
- Necesită schimb → **M' U2 M U2** sau **M U2 M' U2**.

Putem simplifica logica ciclării a trei margini: M' înseamnă stratul de mijloc urcă, U2 înseamnă stratul de sus se rotește la jumătate, M înseamnă stratul de mijloc revine, U2 înseamnă stratul de sus revine.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Gata!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Concluzie

Nu este nevoie să memorezi formule, ci doar să înțelegi logica comutatorului: „deschide – operează – închide”. Vei descoperi că acest proces este mult mai distractiv decât memorarea formulelor și, indiferent câți ani vor trece, nu va trebui să-ți faci griji că vei uita, deoarece îl vei putea deduce oricând.

Aceeași abordare poate fi folosită pentru a rezolva orice Cub Rubik, inclusiv diversele variante atipice și ciudate.

Dar dacă vrei să te îndrepți spre calea speedcubing-ului, atunci te vei angaja pe drumul antrenamentului continuu și intens. Totuși, pentru începători, atingerea unui timp de sub 90 de secunde cu puțină practică nu ar trebui să fie o problemă.

Există o infinitate de metode de rezolvare; depinde de tine dacă poți găsi una mai elegantă sau mai la îndemână.

Lumea Cubului Rubik este plină de bucurie infinită. Distracție plăcută!

## Anexa 1: Foaița de Notițe a Metodei de Rezolvare (Ghidul Esențial pentru Cubul Rubik)

1. **Construiește podurile stânga-dreapta: bazându-te pe observație și intuiție**
   - Sfaturi: După ce devii foarte priceput la observare și anticipare, poți prioritiza construirea altor module sau construirea simultană a ambelor poduri, în funcție de starea specifică a cubului. Astfel, poți realiza rezolvarea în mai puțini pași și cu o libertate sporită.
2. **Rezolvă orientarea pieselor de colț de sus: Toate cele patru colțuri galbene în sus**
   - Ciclarea a trei piese de colț de sus: **R U' L' U R' U' L U** (lasă piesa de colț din stânga-jos pe loc, iar celelalte trei piese de colț își rotesc culorile interne în sens orar)
   - Ciclarea a trei piese de colț de sus (versiunea oglindă): **L' U R U' L U R' U'** (lasă piesa de colț din dreapta-jos pe loc, iar celelalte trei piese de colț își rotesc culorile interne în sens antiorar)
3. **Rezolvă părțile laterale ale celor patru piese de colț de sus**
   - **Ajustarea fină a poziției pieselor de colț de sus**: **R U2 R' U' R U2 L' U R' U' L** (menține cele patru piese de colț cu galbenul în sus și schimbă poziția celor două piese de colț din dreapta)
4. **Schimbă orientarea pieselor de margine, astfel încât albul sau galbenul să fie orientat în sus sau în jos**
   - Mai întâi, aliniați piesele centrale, astfel încât galbenul să fie în partea de sus și albul în partea de jos, apoi ajustați piesele de margine
   - Folosește **M' U M** pentru a schimba numărul de margini incorecte. Formează o săgeată, îndreaptă săgeata către marginea incorectă, efectuează o dată **M' U M**, și toate cele patru margini incorecte se vor anula reciproc și vor fi la locul lor.
5. **Rezolvă marginile laterale (roșu și portocaliu)**
   - Mai întâi, adu marginea roșu-galben (sau portocaliu-galben) în stratul de jos, prin schimbarea marginilor de sus și de jos (**M' U2 M**)
6. **Rezolvă marginile rămase (albastru și verde)**
   - Folosește continuu **ciclarea a trei margini** pentru a schimba marginile de sus și de jos: **M' U2 M**. Ultimul pas este să observi și să readuci la poziție cu **U2**.

Nu trebuie să memorezi nicio formulă de mai sus; le-am inclus în anexă doar ca să le ai la îndemână pentru referință. Când vei încerca singur, observând și înțelegând cum se mișcă piesele respective, te vei familiariza după câteva încercări. Esența este să schimbi cele trei piese de colț de pe stratul superior.

## Anexa 2: Site-uri și Instrumente Utile

Am creat și un Cub Rubik 3D online, pe care îl puteți roti liber, amesteca și rezolva conform unor formule prestabilite, având animații frumoase pentru fiecare pas!

[3D 魔方 — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Formula de amestecare folosită în acest tutorial: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Pașii de rezolvare ai punților stânga-dreapta din acest tutorial: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Dând click pe acest link, vei vedea cubul deja amestecat: [3D 魔方 — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Cronometrul de Cub Rubik folosit de campionii mondiali: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
