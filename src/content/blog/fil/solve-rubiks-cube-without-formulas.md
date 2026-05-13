---
layout: blog
title: "Paano Ayusin ang Rubik's Cube Nang Walang Formula: Madali Kahit sa Bata"
date: 2026-05-09 12:00:00
tags:
  - Rubik's Cube
  - Tutorial
  - Teorya ng Grupo
  - Matematika
  - Roux Method
categories: 日常折腾
description: Gamit ang lohika ng commutator mula sa Group Theory + Roux bridge method, ituturo sa iyo nang paunti-unti mula simula kung paano ayusin ang isang 3x3 Rubik's Cube nang hindi nagme-memorize ng anumang formula.
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Baka bago ka lang sa mundo ng Rubik's Cube, at hindi mo pa ito nabubuo nang buo.

Kadalasan, ang mga tutorial na makikita mo ay puro lang kakaibang formula. Sasabihin lang nila, "gawin mo ito, pagkatapos ito," at magic, buo na ang cube. Pero pagkatapos mong sundin, hindi mo pa rin maintindihan kung bakit.

Ang artikulong ito ang iyong magiging tagapagligtas! Matututunan mo rito, mula sa simula, kung paano ayusin ang Rubik's Cube nang hindi nagme-memorize ng anumang formula. Aalamin mo ang pinagmulan nito at kung paano ito gumagana. Mula sa teorya hanggang sa praktikal na aplikasyon, igagabay kita nang paunti-unti para mabuo ang iyong cube, at ituturo ko rin sa iyo kung paano magmasid nang tama.

Marahil, ito ang iyong magiging unang beses na matagumpay na makabuo ng isang Rubik's Cube gamit ang sarili mong mga kamay.

<!--more-->

## Ang Pagsilang ng Rubik's Cube

Bakit nga ba napakakaakit ng Rubik's Cube? Simulan natin sa kung paano ba ito nagsimula.

Noong 1974, isang Hungarian architecture professor na si Ernő Rubik ang gumawa ng unang prototype mula sa kahoy. Layunin niyang ipakita sa kanyang mga estudyante kung paano gumalaw ang mga indibidwal na bahagi nang hindi nasisira ang buong istruktura. Pininturahan niya ng iba't ibang kulay ang anim na panig, at doon, isinilang ang Rubik's Cube.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## Ang Nakakamanghang Dami ng Kombinasyon

Ang isang 3x3 na Rubik's Cube ay mayroong 8 corner pieces, 12 edge pieces, at 6 center pieces. Mayroon itong kabuuang 26 na nakikitang bahagi. Pero sa katunayan, ang mga nagagalaw lang ay ang 20 piraso, bukod sa anim na center pieces.

Gaano karami kaya ang kabuuang bilang ng mga posibleng estado nito? **4.3 × 10¹⁹**.

Ano ang ibig sabihin nito? Ang bilang na ito ay mas marami pa sa dami ng buhangin sa buong mundo! Kung susubukan mong 1 bilyong estado bawat segundo, kailangan mo ng higit sa **1300 taon** para lang matapos ang lahat ng posibleng kombinasyon. Kung isusulat mo ang bawat estado sa isang piraso ng papel at ipatong-patong ang mga ito, aabot ang kapal nito sa 14,000 beses ng biyahe mula Earth papuntang araw, pabalik-balik.

Ang maliit na 3x3 na Rubik's Cube ay talagang hindi dapat maliitin. Dahil sa bago at nakakatuwang gameplay nito, at sa walang katapusang pagbabago na nagbibigay-kaakit-akit, sumabog ito sa merkado nang ilunsad. Agad itong umakit ng iba't ibang manlalaro at mahilig sumubok. Mabilis na lumago ang kompetisyon sa Rubik's Cube, na may iba't ibang paraan ng paglalaro (Speedsolving, Blindfolded, One-Handed, With Feet), iba't ibang method (Layer by Layer, Corners First, CFOP, Roux Bridge, Petrus, ZZ), at maging mga kakaibang hugis ng cube (mula 2x2 hanggang 7x7, Pyraminx, Skewb, Megaminx) na patuloy na lumalabas.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Ang gayong kalaking alindog ng Rubik's Cube ay nagtulak sa mga mathematician na patuloy na pag-aralan ang matematika nito, gumugol ng dekada sa paghahanap ng "God's Number." Ginagamit din ito ng mga astronaut sa kalawakan, at nagpapakitang-gilas ang mga tao, bata man o matanda, sa iba't ibang kompetisyon. Ngunit sa kabila ng kaakit-akit nito, medyo kakaunti pa rin ang mga manlalaro ng Rubik's Cube. Kaya sa pamamagitan ng artikulong ito, nais kong turuan kayo kung paano buuin ang cube, at maranasan ang saya na hatid ng larong ito na nagpapatalas ng isip.

## Ang Suliranin sa Formula

Karamihan sa mga sikat na method ngayon ay nangangailangan ng pagme-memorize ng maraming formula, at ito ay nakakapagpahina ng loob sa mga baguhan. Hindi pa nga nila nararamdaman ang ligaya ng pagbuo ng cube, nahaharangan na sila ng mga formula. Ang sikat na CFOP method ay may mahigit 100 formula, at kahit ang baguhan ay kailangang magsaulo ng dose-dosenang mga ito.

Kaya ngayon, gusto kong ibahagi sa inyo ang isang paraan na kung saan masisiyahan kayo sa paglalaro ng Rubik's Cube nang hindi kailangang magsaulo ng formula. Sa pagmamasid at pag-unawa lang, mabubuo mo ang iyong cube.

## Ang Malakas na Armas ng Matematika: Group Theory

Tanong: Paano makabuo ng Rubik's Cube nang hindi nagme-memorize ng kahit isang formula?

Dito, ilalabas natin ang ating malakas na armas sa matematika: ang Group Theory. Walang problemang hindi kayang lutasin ng matematika.

Ano ang kaugnayan ng Rubik's Cube at Group Theory? Sa katunayan, ang Rubik's Cube mismo ay isang "group." Sa loob ng cube, ang bawat pagpihit ay isang "permutation operation." May ilang katangian ang operasyong ito: Maaari itong pagsamahin (combine), baliktarin (reverse), ngunit hindi ito "commutative" (hindi mapagpapalit).

Ang multiplication na natutunan natin sa elementarya ay isang "commutative" na operasyon; ang A × B at B × A ay magkapareho ang resulta. Ngunit sa "group" ng Rubik's Cube, ang pagpapalit ng A at B ay hindi magkapareho. Ang pagpihit ng R muna bago U ay ibang-iba sa pagpihit ng U muna bago R. Kaya kapag naintindihan natin ang isang "group," maiintindihan din natin ang Rubik's Cube. At ang paglalaro ng cube ay makakatulong din sa atin na maunawaan ang "group" na ito.

Congratulations! Nalaman mo na ang pagkakaiba ng Abelian group (kung saan ang multiplication at addition ay parehong Abelian group) at non-Abelian group (tulad ng Rubik's Cube group).

(Dagdag pa: May mambabasa ang nagturo na hindi ganoon kahigpit ang pahayag sa itaas, kaya nililinaw namin ito. Ang mga integer, sa ilalim ng addition, ay bumubuo ng isang Abelian group. Ang mga natural na numero (N), sa ilalim ng addition, ay hindi isang Abelian group; halimbawa, ang 3 ay walang inverse na -3, at ang -3 ay hindi isang natural na numero. Ang mga hindi-serong real number, hindi-serong rational number, at hindi-serong complex number, sa ilalim ng multiplication, ay bumubuo ng isang Abelian group. Ang analohiya sa orihinal na post ay pangunahing upang matulungan ang mga nagsisimula na maunawaan ang pangunahing ideya ng "commutative vs. non-commutative".)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Paalala: Ang mga karaniwang paggalaw sa Rubik's Cube ay kinakatawan ng mga letra. Ang R ay nangangahulugang pagpihit ng kanang layer nang 90 degrees clockwise. Ang U ay pagpihit ng top layer nang 90 degrees clockwise. Ang R' ay pagpihit nang 90 degrees counter-clockwise. Ang M' ay paggalaw ng middle layer pataas, at ang M ay paggalaw ng middle layer pababa.)

Maaari kang direktang magmasid at matuto kung paano gumalaw ang Rubik's Cube sa online na animation na nasa appendix.

## Teorya: Ang Puso ng Hindi Pagme-memorize ng Formula: Commutator

Para mabuo ang Rubik's Cube, kailangan nating makamit ang ganitong estado: **baguhin ang posisyon ng ilang piraso nang hindi nagagalaw ang posisyon ng iba pang piraso.**

Sa matematika, ang operasyong ito ay tinatawag na Commutator, na isinusulat bilang **A B A⁻¹ B⁻¹**.

Ang A⁻¹ ay ang 'inverse operation' o baligtad na operasyon ng A.

Maaari nating gamitin ang isang simpleng halimbawa mula sa pang-araw-araw na buhay — ang elevator. Ipagpalagay na gusto mong ihatid ang isang tao mula 1st floor patungong 3rd floor:

1.  **A**: Pumasok ang tao sa elevator.
2.  **B**: Umakyat ang elevator sa 3rd floor.
3.  **A⁻¹**: Lumabas ang tao sa elevator.
4.  **B⁻¹**: Bumalik ang elevator sa 1st floor.

Resulta: Bumalik ang elevator sa orihinal nitong posisyon, ngunit ang tao ay napunta na sa 3rd floor mula sa 1st floor. Ang mahalaga rito: Pagbalik ng elevator, wala na ang tao sa loob nito — kaya bumalik sa dati ang kapaligiran, pero nagbago ng posisyon ang target.

Halimbawa, sa Rubik's Cube, ang R at R⁻¹ ay tumutukoy sa pagpihit ng kanang layer nang 90 degrees clockwise, at sa ikatlong hakbang, pihihin ulit nang 90 degrees counter-clockwise.

Ang 'inverse operation' na A⁻¹ B⁻¹ ay kayang ibalik ang kapaligirang ginulo ng A B na operasyon. Sa ganitong paraan, nakakapagpalit tayo ng ilang partikular na piraso nang hindi naaapektuhan ang iba.

Bakit hindi A A⁻¹ B B⁻¹? Kung ganoon, direktang magkakansela ang bawat galaw, at hindi mapapalitan ang mga piraso. Kung gagawin mo ang A, tapos agad ang A⁻¹ (ang baligtad na operasyon), para kang walang ginawa (halimbawa, ang pagpihit ng top layer nang 90 degrees counter-clockwise, tapos agad nang 90 degrees clockwise). Kaya, kailangang **A B A⁻¹ B⁻¹** para magkaroon ng pagpapalit.

Ito ang pinakapangunahing pagpapalit, at ang pinakamadaling 'atomic move' na ginagamit sa Rubik's Cube ay ang: **R U R' U'**.

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Maaari itong pagsamahin sa mas mahabang serye at makagawa ng iba't ibang epekto ng 'permutation,' tulad nito: (R U R' U') (R U R' U') (R U R').

Sa katunayan, ito rin ang pinagmulan ng mga formula. Bakit mayroong mga formula? Ito ay dahil pinagsasama-sama nila ang serye ng pinakapangunahing 'permutation operations' para maging mga sequence. Kapag sinunod ang sequence, mabilis na makakamit ang isang partikular na resulta, tulad ng pagbuo ng isang edge piece o isang corner piece. Maaaring pagsamahin ang iba't ibang sequence upang makarating sa huling pagbuo ng Rubik's Cube.

Kapag naintindihan mo ang prinsipyo, maaari ka pang gumawa ng sarili mong mga formula! (Para sa mas detalyadong paliwanag kung paano gumawa ng sariling formula sa Rubik's Cube, abangan ang susunod na bahagi.)

Kaya para makabuo ng Rubik's Cube nang hindi nagme-memorize ng kahit isang formula, kailangan lang nating matutunan ang ideya ng 'basic permutation.' Magagamit natin ito sa iba't ibang sitwasyon. Ang pinakapangunahing 'permutation move' ay kayang magpalit ng posisyon ng tatlong corner pieces, o kaya ay tatlong edge pieces.

## Paano Magsagawa ng Pagpapalit sa Rubik's Cube

Gaya ng nabanggit kanina, ang pinakamadaling 'atomic exchange move' sa Rubik's Cube ay ang: **R U R' U'**. Kung lubos mong maiintindihan ang galaw na ito, agad mong mabubuo ang unang dalawang layer ng cube.

Ang galaw na ito ay nangangahulugang: Ilayo (ang kanang layer), ipasok (ang target na piraso), ibalik (ang kanang layer), ibalik (ang top layer).

Sa ganitong paraan, naipasok natin ang front-left corner piece at ang middle edge piece sa right-bottom corner.

Ang galaw na ito ay maaaring baguhin nang paulit-ulit, at maging **U R U' R'**, o **F R F' R'**, at iba pa sa anumang posisyon. Mayroon din itong variant sa middle layer: **M U M' U'**, o kaya ay **U2 R U2 R'**.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Sa simula, ang cube ay nasa pinakamagulong estado. Kaya, maaari kang gumamit ng maraming basic 'permutations' tulad ng mga nabanggit upang buuin muna ang isang face, o iba pang bahagi, para mabawasan ang pagkalito.

At dahil napakagulo ng estado, ang huling galaw ng **R U R' U'** na U' — na nagbabalik sa kapaligiran — ay maaari pang laktawan depende sa sitwasyon, at direktang sundan ng susunod na galaw. Kaya, nagiging mas simple ito: Ilayo, Ipasok, Ibalik.

Ilayo, Ipasok, Ibalik.

Ito ang pangunahing galaw. Congratulations! Naiintindihan mo na kung paano laruin ang Rubik's Cube!

Ngunit sa huling bahagi, kailangan natin ng mas mahahabang 'permutation steps' upang makapagpalit ng partikular na piraso nang hindi tuluyang sinisira ang kasalukuyan nang nabuong estado.

Halimbawa, ang **R U' L' U R' U' L U**. Ang galaw na ito ay kayang magpalit lang ng tatlong corner pieces nang hindi naaapektuhan ang iba. Kung babasagin ito sa commutator logic:

```
A   = R U'   (Para mailabas ang corner piece)
B   = L'     (Ilipat nang kaunti ang kaliwang layer)
A⁻¹ = U R'   (Ibalik ang A operation)
B⁻¹ = U' L U(Ibalik ang B operation, may kasamang adjustment)
```

Epekto: Ang lower-left corner piece ay hindi gumagalaw, habang ang tatlo pang corner pieces ay nagpapalitan ng posisyon.

Ito marahil ang isa sa dalawa lang na formula na kailangan mong maunawaan sa artikulong ito. Sa Praktikal na Bahagi, pag-aaralan natin kung paano ito gamitin at mauunawaan natin sa pamamagitan ng aktwal na paggawa, nang hindi kailangang kabisaduhin.

## Praktikal na Bahagi: Pagbuo Mula sa Simula

Ngayon, narito na tayo sa pinakamahalagang bahagi ng artikulong ito. Igagabay kita nang paunti-unti para makabuo ng Rubik's Cube mula sa simula, gamit lang ang pagmamasid at pag-unawa.

Mga kailangan mong ihanda:

-   Isang Rubik's Cube
-   At kaunting pasensya (dahil ang pangunahing layunin natin ay pagmamasid at pag-unawa)

Una, ipagpalagay na mayroon ka nang Rubik's Cube. Gagamitin natin ang international standard scramble na ito (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**) para guluhin ang cube. Pagkatapos, sabay nating bubuuin ang cube na ito.

O kaya, maaari kang maglaro ng online version dito. I-click ang link na ito at makikita mo ang isang scrambled na Rubik's Cube: [3D Rubik's Cube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Gagamitin natin ang napaka-eleganteng ideya ng Roux Bridge method para buuin ang cube. Ang bridge method, hindi tulad ng pagbuo nang layer by layer, ay nagsisimula sa pagbuo ng 1x2x3 block sa magkabilang gilid, na tinatawag na 'left and right bridges.' Pagkatapos, bubuuin naman ang top layer at ang mga natitirang piraso.

Ang bridge method ay napakalaya at flexible, at mas kaunti ang mga hakbang kumpara sa maraming kilalang method. Mas kaunti rin ang mga formula na kailangang kabisaduhin dahil ito ay batay sa lohika ng commutator. Sa ilalim ng framework na ito, matututunan natin kung paano ayusin ang Rubik's Cube nang hindi nagme-memorize ng kahit isang formula.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Unang Hakbang: Ayusin ang Posisyon ng Pagmamasid

Ang posisyon ng pagmamasid sa bridge method ay nakapirmi. Sa proseso ng pagbuo, hindi natin kailangang paulit-ulit na ipihit ang cube. Sa halip, mananatili tayo sa isang anggulo habang nag-iisip at bumubuo. Sa nakapirming mukha na ito, madali nating makikita ang ilang corner at edge pieces, at malalaman natin kung saan sila dapat mapunta.

Maaari nating gawing basehan ang anggulo na ito:

-   Harap (nakaharap sa iyo): Green face
-   Kaliwa: Red
-   Kanan: Orange
-   Itaas: Yellow
-   Baba: White
-   Likod: Blue

### Ikalawang Hakbang: Buuin ang Kaliwa at Kanang Bridge

**Sequence ng pagbuo ng Left Bridge:**

1.  Ilagay muna sa tamang posisyon ang white-red edge piece (ang poste sa ibabang kaliwa).
2.  Pagkatapos, ilagay sa tamang posisyon ang blue-red edge piece sa likod.
3.  Susunod, ilagay sa tamang posisyon ang dalawang red corner pieces sa harap.

Left Bridge - kumpletong estado:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Ang prosesong ito ay hindi nangangailangan ng anumang formula. Sa pagmamasid at pag-unawa lang, magagawa mo ito. Sa patuloy na pagpraktis, mas magiging bihasa ka.

**F' L**: Gamit ang pagmamasid, hanapin ang red-white edge piece at ilagay ito sa tamang posisyon, na ang puti ay nakaharap pababa at ang pula ay nakaharap sa kaliwa.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Ilagay sa tamang posisyon ang blue-red edge piece at ang corner piece.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Hanapin ang huling dalawang piraso ng left bridge at humanap ng paraan para ilagay ang mga ito sa tamang posisyon. Sa ganitong paraan, makakakuha tayo ng perpektong left bridge.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Pareho lang sa Right Bridge**, palitan lang ang pula ng orange, at ulitin ang mga hakbang sa itaas. Ngunit dito, kailangan mong maging maingat na huwag guluhin ang nabuo nang left bridge. Kung kailangan mong manghiram ng posisyon, maaari mong ilipat muna ang left bridge sa ibang lugar upang hindi maapektuhan ng mga galaw sa kanan ang left bridge. Pagkatapos ng mga galaw sa kanan, ibalik ang left bridge sa orihinal nitong posisyon.

**Gitnang bahagi ng Right Bridge**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Unang piraso ng Right Bridge**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Nabuo na natin ang huling module ng right bridge at gusto nating ipasok ito sa posisyon. Kaya, ililipat muna natin ang left bridge (F') upang lumikha ng espasyo, pagkatapos ay ilipat ang module (U), at sa huli, sabay na ibalik ang left bridge at right bridge sa tamang posisyon.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Ito ang estado kung saan tapos na ang parehong left at right bridges. Basta nabuo ang mga bridge, huwag muna nating pansinin ang ibang color pieces.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Ikatlong Hakbang: Buuin ang Top Layer Corner Pieces

Matapos mong buuin ang mga bridge sa magkabilang gilid, sisimulan na natin ang pagbuo ng natitirang apat na corner pieces. Dito, gagamitin natin ang 'corner 3-cycle' upang ipagpalit ang posisyon ng tatlong corners: mula A patungong B, B patungong C, at C pabalik sa A.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Corner 3-Cycle

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formula 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Ang lower-left corner piece ay hindi gumagalaw</li>
      <li>Ang iba pang tatlong corner pieces ay nagpapalitan ng posisyon nang <strong>counter-clockwise</strong></li>
      <li>Ngunit ang kanilang panloob na kulay ay umiikot nang <strong>clockwise</strong></li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formula 2 (Mirror Version)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Ang lower-right corner piece ay hindi gumagalaw</li>
      <li>Ang iba pang tatlong corner pieces ay nagpapalitan ng posisyon nang <strong>clockwise</strong></li>
      <li>Ngunit ang kanilang panloob na kulay ay umiikot nang <strong>counter-clockwise</strong></li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

May apat na uri lang ng 'corner orientation' na maaari mong makaharap: 0, 1, 2, o 4 na 'good corners'.

-   **4 na 'good corners'**: Tapos na ang estado.
-   **1 'good corner'** (Fish shape): Gawin lang ulit ang 3-cycle o ang mirror version para matapos.
-   **0 / 2 'good corners'**: Ilagay muna ang isang 'bad corner' sa posisyon na hindi maaapektuhan ng 3-cycle (lower-left corner), gawin ang 3-cycle nang isang beses, magiging 1 'good corner' ito, at babalik ka sa naunang sitwasyon.

Minsan, ang basic version ng 3-cycle ay kailangang gawin nang dalawang beses para mabuo, habang ang mirror version ay isang beses lang. Para sa mga baguhan, masterin lang muna ang basic version, mag-focus sa pagmamasid at pag-unawa, at pagkatapos ay mas madali mo itong maiintindihan. Ang 3-cycle na ito, na ang dilaw ay nakaharap pataas, ay isa ring sikat na klasikong formula — ang 'left and right fish formula.' Maaari mong obserbahan ang 'fish shape' nito.

Hindi mo rin kailangang kabisaduhin ang formula na ito. Obserbahan mo lang kung paano gumagalaw ang dalawang berdeng piraso, at subukan mo ito nang ilang beses sa sarili mo para masanay ka. Ang core nito ay ang pagpapalit ng posisyon ng tatlong corner pieces sa top layer.

Sa cube na nabuo na ang left at right bridges, napansin natin na may dalawang dilaw sa itaas. Kaya, ipagpapalit natin ang lower-left corner sa isang piraso na hindi dilaw, at gagawin ang 'corner 3-cycle' nang isang beses. Pagkatapos, gawin ulit ito ng dalawang beses, o isang mirror version ng 3-cycle, para maging dilaw lahat ng apat na corners sa top layer.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Tapos na ang apat na yellow corners!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Ayusin ang Posisyon (Para magkapareho ang mga kulay sa gilid)

Kapag ang apat na corner pieces ay may dilaw na nakaharap pataas, kailangan pa nating i-align ang mga kulay sa gilid ng mga corner pieces para ganap silang mapunta sa tamang posisyon.

Sa puntong ito, gagamitin natin ang **J-perm variant**: **R U2 R' U' R U2 L' U R' U' L**.

Ang lohika ng formula na ito ay maaaring hatiin sa "paglilipat ng pares + lohikal na pagpapalit":

-   Unang bahagi `R U2 R' U' R`: Dalhin ang isang pares sa 'safe zone' para pansamantalang itago, para magkaroon ng espasyo.
-   Ikalawang bahagi `U2 L' U R' U' L`: Gamitin ang lohika ng 3-cycle para eksaktong magpalit ng posisyon ang dalawang corner pieces.

**Epekto**: Nagpapalitan ng posisyon ang dalawang corner pieces sa kanan, habang nananatiling nakaharap pataas ang dilaw, at hindi nagbabago ang ibang corner pieces.

Ito ay katumbas ng pagpapalit ng posisyon ng anumang dalawang magkatabing corner pieces (gamit ang U upang ayusin kung aling dalawang corner pieces ang nasa kanan). Ulitin lang ang pagpapalit ng ilang beses, at ang apat na corner pieces ay ganap nang magkakapantay at nasa tamang posisyon.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Hindi mo rin kailangang kabisaduhin ang formula na ito. Obserbahan mo lang kung paano gumagalaw ang dalawang berdeng piraso, at subukan mo ito nang ilang beses sa sarili mo para masanay ka. Ang core nito ay ang pagpapalit ng posisyon ng dalawang corner pieces sa kanang bahagi ng top layer, habang nananatiling nakaharap pataas ang dilaw.

### Ikaapat na Hakbang: Buuin ang Huling Anim na Edge Pieces (LSE, Last Six Edges)

Dito, unahin muna nating i-align ang center pieces, na ang dilaw ay nasa itaas at ang puti ay nasa ibaba. Pagkatapos, ayusin ang mga edge pieces.

Anim na edge pieces na lang ang natitira. Ang hakbang na ito ay gumagamit lang ng dalawang operasyon, ang **M** at **U**, at napaka-intuitive.

#### 4a: Ayusin ang Orientasyon (EO, Edge Orientation)

**Paraan ng Pagpapasya**: Tingnan kung ang white / yellow sticker ng edge piece ay nakaharap pataas o pababa.

-   Nakaharap pataas / pababa = 'Good edge' ✓
-   Nakaharap sa gilid = 'Bad edge' ✗

**Paraan ng Pag-aayos**: Gamitin ang **M U M'** o **M' U M** para baliktarin ang 'bad edge'.

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Intuitive na Pag-unawa: Ipihit ng M ang middle layer edge piece pataas, inaayos ng U ang posisyon, at ibinabalik naman ng M' pababa.

Ulitin nang ilang beses hanggang sa ang lahat ng edge pieces ay may white / yellow na nakaharap pataas o pababa.

Maaari nating tawaging 'good edge' ang mga edge na nasa tamang orientasyon, at 'bad edge' naman ang mga nasa maling orientasyon.

Gaya ng nakikita sa larawan, ang tatlong naka-highlight sa top layer ay 'bad edges,' dahil hindi sila dilaw o puti.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Mga Tip sa Pag-aayos**: May apat na uri lang ng 'bad edge' na maaari mong makaharap:

-   **0 'bad edges'**: Tapos na ang estado.
-   **Hindi 0 at hindi rin 4 'bad edges'**: Gamitin ang **M' U M** para baguhin ang bilang ng 'bad edges,' at dagdagan ito sa 4 na 'bad edges'.
-   **4 'bad edges' (2 sa itaas, 2 sa ibaba)**: Gamitin ang **M' U2 M** para ipagpalit ang itaas at ibabang edges, at maging 3 sa itaas at 1 sa ibaba ang sitwasyon.
-   **4 'bad edges' (3 sa itaas, 1 sa ibaba)**: Ang tatlong 'bad edges' sa top layer ay bubuo ng hugis-arrow. Ipihit ang top layer para ituro ng arrow ang 'bad edge' sa bottom layer. Gawin ang **M' U M** nang isang beses, at lahat ng apat na 'bad edges' ay magkakansela at magiging 'good edges'.

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Kung walang lumabas na arrow, ulitin lang ang **M' U M** nang paulit-ulit, at makakabuo ka rin nito. Kapag nag-advance ka na, maaari mo nang hanapin ang mga pattern.

#### 4b: Buuin ang Kaliwa at Kanang Edges (Pula at Orange)

Hanapin ang red-yellow edge at orange-yellow edge (ang layunin ay ibalik ang mga edge pieces sa kaliwa at kanang gilid). Gamitin ang 'edge 3-cycle' para ilagay ang mga ito sa tamang posisyon.

**Mga Tip**:

1.  Ilipat ang red-yellow (o orange-yellow) sa itaas ng middle layer, at pababain ito gamit ang pagpapalit ng itaas at ibabang edges (**M' U2 M**).
2.  Pababain ang isa pang orange-yellow (o red-yellow) sa kabilang panig.
3.  Ipihit ang top layer para lumabas ang red side sa tapat ng red-yellow edge piece na nasa ilalim.
4.  Ipihit ang middle layer nang kalahating buo **M2**, at obserbahan ang top layer para sa tamang posisyon **U**.

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Lutasin ang Huling Apat na Edges (Asul at Berde)

**Mga Tip**:

-   Patuloy na gamitin ang **edge 3-cycle** para ipagpalit ang itaas at ibabang edges: **M' U2 M**. Ang huling hakbang ay ang pagmamasid para sa tamang posisyon **U2**.
-   Mabilis na Tip: Ilagay ang white-green (o white-blue) edge piece sa itaas ng target na posisyon, ipagpalit ang itaas at ibabang edges, at ang white-green (o white-blue) ay mapupunta na sa tamang posisyon.

May tatlong sitwasyon lang:

-   Tama na → Tapos na!
-   Kailangan ng M2 → Gawin ang **M2** nang isang beses.
-   Kailangan ng pagpapalit → **M' U2 M U2** o **M U2 M' U2**.

Maaari rin nating pasimplehin ang lohika ng 'edge 3-cycle': ang M' ay ang pag-akyat ng middle layer, ang U2 ay ang pagpihit ng top layer nang kalahati, ibinabalik ng M ang middle layer, at ibinabalik ng U2 ang top layer.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Tapos Na!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Buod

Hindi mo kailangang kabisaduhin ang mga formula. Mayroon lang "open-operate-close" commutator logic. Malalaman mong mas masaya ang prosesong ito kaysa sa pagme-memorize ng formula, at kahit lumipas ang maraming taon, hindi mo kailangang mag-alala na makalimutan mo. Maaari mo itong muling isipin at gawin anumang oras.

Ang parehong ideya ay magagamit para ayusin ang anumang Rubik's Cube, kasama na ang iba't ibang kakaibang hugis ng cube.

Ngunit kung gusto mong tahakin ang landas ng 'speedcubing,' kailangan mong sumailalim sa walang katapusang pag-eensayo. Gayunpaman, para sa mga nagsisimula, hindi dapat maging problema ang pag-abot sa loob ng 90 segundo sa kaunting praktis.

Libu-libo ang mga paraan ng pagbuo, tingnan mo kung makakahanap ka ng mas elegante o mas madaling paraan.

Ang mundo ng Rubik's Cube ay puno ng walang katapusang saya. Sana ay masiyahan ka sa paglalaro!

## Apéndice 1: Cheat Sheet ng Pamamaraan sa Pagbuo ng Cube (Mga Prinsipyo sa Pagbuo ng Cube)

1.  **Buuin ang Kaliwa at Kanang Bridge: Sa pamamagitan ng Pagmamasid at Intuition**
    -   Tips: Kapag bihasa ka na sa pagmamasid at pag-predict, maaari mong unahin ang pagbuo ng ibang module, o sabay na buuin ang kaliwa at kanang bridge, depende sa kasalukuyang estado ng cube. Sa ganitong paraan, mas kaunti ang mga hakbang at mas malaya ang pagbuo mo.
2.  **Ayusin ang Orientasyon ng Apat na Corner Pieces sa Top Layer: Lahat ay May Dilaw na Nakaharap Pataas**
    -   Corner 3-Cycle sa Top Layer: **R U' L' U R' U' L U** (Panatilihin ang lower-left corner piece na hindi gumagalaw; ang panloob na kulay ng tatlong iba pang corner pieces ay umiikot nang clockwise).
    -   Corner 3-Cycle Mirror Version sa Top Layer: **L' U R U' L U R' U'** (Panatilihin ang lower-right corner piece na hindi gumagalaw; ang panloob na kulay ng tatlong iba pang corner pieces ay umiikot nang counter-clockwise).
3.  **Buuin ang mga Gilid ng Apat na Corner Pieces sa Top Layer**
    -   **Fine-tuning ng Posisyon ng Corner Piece sa Top Layer**: **R U2 R' U' R U2 L' U R' U' L** (Panatilihin ang apat na corner pieces na may dilaw na nakaharap pataas, ipagpalit ang posisyon ng dalawang corner pieces sa kanang bahagi).
4.  **Baguhin ang Orientasyon ng Edge Pieces, Para ang Puti o Dilaw ay Nakaharap Pataas o Pababa**
    -   Una, i-align ang center pieces, na ang dilaw ay nasa itaas at ang puti ay nasa ibaba. Pagkatapos, ayusin ang mga edge pieces.
    -   Gamitin ang **M' U M** para baguhin ang bilang ng 'bad edges,' gumawa ng arrow, ituro ang arrow sa 'bad edge,' at gawin ang **M' U M** nang isang beses. Lahat ng apat na 'bad edges' ay magkakansela at mapupunta sa tamang posisyon.
5.  **Buuin ang mga Edge sa Kaliwa at Kanang Gilid** (Pula at Orange)
    -   Una, pababain ang red-yellow (o orange-yellow) sa pamamagitan ng pagpapalit ng itaas at ibabang edges (**M' U2 M**).
6.  **Buuin ang Natitirang Edges** (Asul at Berde)
    -   Patuloy na gamitin ang **edge 3-cycle** para ipagpalit ang itaas at ibabang edges: **M' U2 M**. Ang huling hakbang ay ang pagmamasid para sa tamang posisyon **U2**.

Hindi mo kailangang kabisaduhin ang alinman sa mga formulang iyan; nasa appendix lang sila para madaling balikan. Sa totoo lang, kapag sinubukan mo na, habang inoobserbahan at inuunawa mo kung paano gumagalaw ang mga katumbas na piraso, masasanay ka rin sa ilang ulit na paggawa. Ang pinakadiwa nito ay ang pagpapalit ng posisyon ng tatlong corner piece sa tuktok na layer.

## Apéndice 2: Mga Kapaki-pakinabang na Website at Tool

Gumawa rin ako ng 3D Rubik's Cube na puwede ninyong laruin online! Maaari itong ipihit kahit anong gusto mo, o i-scramble at buuin gamit ang mga nakapirming formula. May magagandang animation pa sa bawat hakbang!

[3D Rubik's Cube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Scramble formula na ginamit sa tutorial na ito: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Mga hakbang sa pagbuo ng left-right bridges sa tutorial na ito: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

I-click ang link na ito at makikita mo ang isang scrambled na Rubik's Cube: [3D Rubik's Cube — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Timer ng Rubik's Cube na ginagamit mismo ng mga world champion: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
