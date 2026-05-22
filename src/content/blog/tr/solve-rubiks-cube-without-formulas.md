---
layout: blog
title: "Küp Rubik'i Formül Ezberlemeden Çözmek: İlkokul Çocukları Bile Anlayabilir"
date: 2026-05-09 12:00:00
tags:
  - Rubik Küpü
  - Eğitim
  - Grup teorisi
  - Matematik
  - Roux metodu
categories: 日常折腾
description: Grup teorisi komütatör mantığı ve Roux köprü yöntemiyle, sıfırdan başlayarak hiçbir formül ezberlemeden 3x3 Rubik Küpü'nü adım adım çözmeyi öğreneceksiniz.
cover: /uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg" alt="完整复原的魔方" />
</figure>

Belki de bir Rubik Küpü acemisisiniz ve küpü hiç tamamen çözemediniz.

Piyasada 'eğitim' adı altında sunulanlar, size sadece bir sürü tuhaf formül ezberletiyor, 'önce şöyle yap, sonra böyle yap, küp çözülür' diyorlar. Ama bitirdiğinizde neden böyle olduğunu anlamıyorsunuz.

Bu yazı sizin kurtarıcınız olacak. Sıfırdan başlayarak, hiçbir formül ezberlemeden bir Rubik Küpü'nü çözmeyi öğreneceksiniz. Küpün kökenlerini ve nasıl çalıştığını anlayacaksınız. Teoriden pratiğe, adım adım küpü tamamen çözmenizi sağlayacak ve size nasıl gözlem yapacağınızı öğreteceğim.

Belki de bu, bir Rubik Küpü'nü ilk kez kendi başınıza başarıyla çözeceğiniz an olacak.

<!--more-->

## Küpün Doğuşu

Rubik Küpü'nün bu kadar büyük bir çekiciliği neden var? Öncelikle küpün nasıl doğduğunu konuşalım.

1974 yılında, Macar bir mimarlık profesörü olan Ernő Rubik, öğrencilerine parçaların genel yapıyı bozmadan nasıl bağımsız hareket edebileceğini göstermek amacıyla ahşaptan ilk prototipi yaptı. Altı yüzeyini farklı renklere boyadı ve Rubik Küpü böylece doğdu.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/01-rubik-prototype.jpg" alt="鲁比克魔方原型" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/02-rubik-portrait.jpg" alt="Ernő Rubik 肖像" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

## İnanılmaz Kombinasyon Sayısı

Bir 3x3 Rubik Küpü'nün 8 köşe, 12 kenar ve 6 merkez parçası olmak üzere toplam 26 görünür parçası vardır. Ancak aslında hareket edebilenler, altı yüzeyin merkez parçaları dışındaki 20 parçadır.

Peki, toplam kaç farklı durumu var? Tam **4.3 × 10¹⁹**.

Bu ne anlama geliyor? Bu sayı, Dünya'daki kum tanelerinin sayısından bile fazla. Saniyede 1 milyar durum denenseydi, tüm olasılıkları gezmek **1300 yıldan** fazla sürerdi. Her bir durumu bir kağıda yazıp üst üste koysak, kalınlığı Dünya'dan Güneş'e 14.000 kez gidip gelmeye eşdeğer olurdu.

Küçük bir 3x3 Rubik Küpü'nün görünüşüne aldanmamak gerek. Yenilikçi ve eğlenceli oynanışı, sonsuz varyasyonları ve büyüleyici çekiciliği sayesinde piyasaya çıktığı anda patlama yaptı, her türden oyuncuyu ve meraklıyı denemeye teşvik etti. Kısa sürede küp yarışmaları, çeşitli oyun tarzları (Hızlı Çözme Speedsolving, Gözü Kapalı Blindfolded, Tek Elle One-Handed, Ayakla With Feet), çeşitli çözme yöntemleri (Katman Katman Layer by Layer, Köşeler Önce Corners First, CFOP, Roux Köprü, Petrus, ZZ) ve hatta farklı şekilli küpler (2x2'den 7x7'ye, Pyraminx, Skewb, Megaminx) ortaya çıktı.

![异形魔方变种](/uploads/images/solve-rubiks-cube-without-formulas/03-cube-variants.jpg)

Rubik Küpü'nün cazibesi o kadar büyük ki, matematikçiler küpün matematiğini sürekli araştırıp "Tanrı'nın Sayısı"nı bulmak için on yıllar harcadılar, astronotlar onu uzaya götürüp oynadılar, her yaştan insan çeşitli yarışmalarda yeteneklerini sergiledi. Ancak küpün çekiciliğine kıyasla oyuncu sayısı hâlâ nispeten az. Bu yüzden bu yazıyla herkese küp çözmeyi öğretmek ve bu zekâ oyununun keyfini yaşatmak istiyorum.

## Formül Çıkmazı

Piyasadaki çoğu çözüm yöntemi, oyuncuların birçok formülü ezberlemesini gerektiriyor. Bu durum, yeni başlayanlar için oldukça caydırıcı; küpü çözmenin keyfini yaşayamadan formüllerin engeline takılıyorlar. Ünlü CFOP yönteminde 100'den fazla formül var, yeni başlayanların bile onlarcasını ezberlemesi gerekiyor.

Bu yüzden bugün size formül ezberlemeden keyifle Rubik Küpü oynayabileceğiniz bir yöntem paylaşmak istiyorum. Küpü sadece gözlem ve anlayışla çözmenizi sağlayacak.

## Matematiğin Büyük Silahı: Grup Teorisi (Group Theory)

Soru: Hiçbir formül ezberlemeden Rubik Küpü'nü nasıl çözebiliriz?

İşte burada matematiğin büyük silahını, yani Grup Teorisini devreye sokuyoruz. Matematiğin çözemeyeceği hiçbir sorun yoktur.

Peki, Rubik Küpü ile grup teorisinin ne alakası var? Rubik Küpü aslında bir gruptur. Küpteki her döndürme bir permütasyon işlemidir. Bu işlemin birkaç özelliği vardır: Birleştirilebilir, tersine çevrilebilir ama yerleri değiştirilemez (değişmeli değildir).

İlkokulda öğrendiğimiz çarpma işlemi değişmeli bir işlemdir; A × B ile B × A'nın sonucu aynıdır. Ancak Rubik Küpü grubunda A ve B'nin yer değiştirmesi denk değildir; önce R, sonra U yapmak ile önce U, sonra R yapmak tamamen farklı işlemlerdir. Dolayısıyla grubu anladığımızda küpü de anlamış oluruz. Küp oynamak da grubu anlamamıza yardımcı olur.

Tebrikler, artık değişmeli grup (çarpma ve toplama gibi) ile değişmeli olmayan grup (Rubik Küpü grubu gibi) arasındaki farkı öğrenmiş oldunuz.

(Ek: Bazı okuyucular yukarıdaki ifadenin çok titiz olmadığını belirtti, bu yüzden biraz ekleme yapıyorum. Tam sayılar toplama altında bir değişmeli grup oluşturabilirken, doğal sayılar N toplama altında bir değişmeli grup değildir; örneğin 3'ün -3 ters elemanı yoktur ve -3 bir doğal sayı değildir. Sıfırdan farklı gerçek sayılar, sıfırdan farklı rasyonel sayılar ve sıfırdan farklı karmaşık sayılar çarpma altında bir değişmeli grup oluşturur. Orijinal metindeki benzetme, esas olarak yeni başlayanların "değişmeli vs değişmeli olmayan" temel sezgisini kavramasına yardımcı olmak içindi.)

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/04-ru-vs-ur-part1.gif" alt="R U 和 U R 顺序不同效果不同 - 第一部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-without-formulas/05-ru-vs-ur-part2.gif" alt="R U 和 U R 顺序不同效果不同 - 第二部分" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

(Ek bilgi: Rubik Küpü'ndeki standart hareketler genellikle harflerle gösterilir: R sağ katmanı saat yönünde 90 derece, U üst katmanı saat yönünde 90 derece döndürür. R' saat yönünün tersine 90 derece döndürme anlamına gelir. Orta katmanı yukarı çevirmek M', aşağı çevirmek M'dir.)

Küpün nasıl döndüğünü doğrudan ekteki çevrimiçi Rubik Küpü animasyonunda gözlemleyerek öğrenebilirsiniz.

## Prensip Bölümü: Formül Ezberlememenin Temeli: Komütatör (Commutator)

Rubik Küpü'nü çözmek için küpteki şu durumu başarmamız gerekiyor: **Diğer parçaların konumunu değiştirmeden, belirli bazı parçaların konumunu ayarlamak.**

Matematikte bu işleme komütatör denir ve **A B A⁻¹ B⁻¹** şeklinde yazılır.

A⁻¹, A'nın ters işlemidir.

Bunu günlük hayattan bir benzetmeyle açıklayabiliriz: Asansör. Diyelim ki bir kişiyi 1. kattan 3. kata çıkarmak istiyorsunuz:

1. **A**: Kişi asansöre biner
2. **B**: Asansör 3. kata çıkar
3. **A⁻¹**: Kişi asansörden iner
4. **B⁻¹**: Asansör 1. kata geri döner

Sonuç: Asansör eski yerine döndü ama kişi 1. kattan 3. kata geçmiş oldu. Buradaki püf nokta: Asansör geri döndüğünde kişi içinde değildi; dolayısıyla çevre eski haline dönerken, hedef yerini değiştirmiş oldu.

Örneğin Rubik Küpü'nde, R ve R⁻¹ sağ katmanı saat yönünde 90 derece döndürmeye karşılık gelirken, üçüncü adımda tekrar saat yönünün tersine 90 derece döndürülür.

A⁻¹ B⁻¹ ters işlemi, önceki A B işlemiyle bozulan ortamı eski haline getirir. Böylece, çevreyi etkilemeden sadece belirli parçaların yerini değiştirmek mümkün olur.

Peki, neden A A⁻¹ B B⁻¹ değil? Çünkü bu durumda her hareket doğrudan birbirini iptal eder ve parçalar yer değiştiremez. Bir A işlemi yaptığınızda hemen ardından A⁻¹ ters işlemi gelirse, bu ikisi birleştiğinde hiçbir şey yapılmamış gibi olur (örneğin üst katmanı saat yönünün tersine döndürüp hemen ardından saat yönünde döndürmek gibi). Bu yüzden yer değiştirmenin gerçekleşmesi için **A B A⁻¹ B⁻¹** yapısı gereklidir.

Bu, en temel yer değiştirme hareketidir. Rubik Küpü'nde en kullanışlı atomik hareket şuna karşılık gelir: **R U R' U'**

![R U R' U' 演示](/uploads/images/solve-rubiks-cube-without-formulas/31-ruru.gif)

Bu hareket uzun kombinasyonlar halinde kullanılabilir ve farklı permütasyon etkileri yaratabilir, örneğin: (R U R' U') (R U R' U') (R U R')

Aslında formüllerin kaynağı da budur. Neden formüller var? Temel permütasyon işlemlerinin bir araya getirilerek bir dizi haline getirilmesinden ibarettirler. Bu dizileri uygulayarak belirli sonuçlara hızlıca ulaşılabilir, örneğin belirli bir kenarı veya köşeyi yerine oturtmak gibi. Farklı diziler birbiriyle birleştirilerek nihai Rubik Küpü çözümüne ulaşabiliriz.

Bu prensibi anladıktan sonra, kendi özel formüllerimizi bile oluşturabiliriz. (Rubik Küpü formülleri nasıl oluşturulur, detaylı açıklama için bir sonraki yazıyı bekleyebilirsiniz.)

Dolayısıyla, hiçbir formül ezberlemeden Rubik Küpü'nü çözmek istiyorsak, temel permütasyon mantığını öğrenmemiz yeterli. Diğer tüm durumlarda bu mantığı uygulayabiliriz. En atomik yer değiştirme hareketleri, üç köşe parçasının veya üç kenar parçasının konumunu değiştirir.

## Rubik Küpü'nde Nasıl Yer Değiştirilir

Daha önce bahsedildiği gibi, Rubik Küpü'nde en kullanışlı atomik yer değiştirme hareketi **R U R' U'**'dir. Bu hareketi derinlemesine anlarsanız, küpün ilk iki katmanını hemen çözebilirsiniz.

Bu hareket aslında şunu ifade eder: Çek (sağ katmanı), (hedef parçayı) yerleştir, (sağ katmanı) geri getir, (üst katmanı) geri getir.

Böylece sol ön köşe parçasını ve orta kenar parçasını sağ alt köşeye yerleştirmiş olduk.

Bu hareket sürekli değiştirilebilir; **U R U' R'** veya **F R F' R'** gibi herhangi bir konuma uyarlanabilir, hatta orta katman için **M U M' U'** veya **U2 R U2 R'** gibi varyasyonları da vardır.

![基础置换动作演示](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Başlangıç aşamasında Rubik Küpü'nün karışıklığı en fazladır. Bu yüzden yukarıdaki gibi temel yer değiştirmelerle önce bir yüzeyi veya başka bir bölümü çözerek karışıklık seviyesini azaltabiliriz.

Ayrıca, durum çok karışık olduğu için **R U R' U'** hareketinin son adımı olan U' (çevreyi eski haline getirme hareketi) duruma göre atlanabilir ve doğrudan bir sonraki harekete geçilebilir. Bu da işlemi şuna basitleştirir: Çek, yerleştir, geri getir.

Çek, yerleştir, geri getir.

İşte bu, temel hareket! Tebrikler, artık Rubik Küpü'nün nasıl oynandığını anladınız!

Ancak ilerleyen aşamalarda, mevcut çözülmüş durumu tamamen bozmadan belirli parçaları değiştirmek için daha uzun yer değiştirme adımlarına ihtiyacımız olacak.

Örneğin, **R U' L' U R' U' L U** hareketini ele alalım. Bu hareket, diğer hiçbir şeyi etkilemeden sadece üç köşe parçasının yerini değiştirebilir. Bunu komütatör mantığına göre parçalarsak:

```
A   = R U'   (Köşe parçasını dışarı çıkarır)
B   = L'     (Sol katmanı hareket ettirir)
A⁻¹ = U R'   (A işlemini geri alır)
B⁻¹ = U' L U (B işlemini geri alır, ayarlama ile birlikte)
```

Etki: Sol alt köşe parçası yerinden oynamazken, diğer üç köşe parçası yer değiştirir.

Bu, muhtemelen bu yazıda öğrenmeniz gereken yegâne iki formülden biri. Pratik bölümünde nasıl kullanacağımızı öğrenecek ve ezberlemek yerine uygulayarak anlayacaksınız.

## Pratik Bölümü: Sıfırdan Çözmeye Başlama

Şimdi nihayet bu yazının ana kısmına geldik. Sizi adım adım yönlendirerek, sadece gözlem ve anlayışla, sıfırdan başlayarak Rubik Küpü'nü tamamen çözmenizi sağlayacağım.

Gereken hazırlıklar:

- Bir Rubik Küpü
- Ve biraz sabır (çünkü temel amacımız gözlem ve anlayıştır)

Öncelikle elinizde bir Rubik Küpü olduğunu varsayalım. Küpü uluslararası standartlara göre rastgele karıştırıyoruz (**F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'**). Şimdi bu küpü sizinle birlikte çözeceğiz.

Ya da doğrudan burada çevrimiçi versiyonunu oynayabilirsiniz; bu bağlantıya tıkladığınızda karşınıza karışık bir küp çıkacak: [3D Rubik Küpü — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

![打乱后的魔方初始状态](/uploads/images/solve-rubiks-cube-without-formulas/06-scrambled-cube.jpg)

Çok zarif Roux köprü yönteminin mantığından yararlanarak çözüme ulaşabiliriz. Köprü yöntemi, katman katman çözmekten farklı olarak, önce sol ve sağ taraftaki 1x2x3 blokları (sol ve sağ köprü olarak bilinir) oluşturur, ardından üst katmanı ve kalan parçaları tamamlar.

Köprü yöntemi son derece özgür ve esnektir; birçok bilinen yönteme göre daha az adım gerektirir ve ezberlenmesi gereken formül sayısı nispeten azdır, çünkü temel olarak komütatör mantığına dayanır. Bu çerçevede, hiçbir formül ezberlemeden Rubik Küpü'nü nasıl çözeceğimizi öğrenebiliriz.

![Roux 解法流程示意图](/uploads/images/solve-rubiks-cube-without-formulas/32-roux-flow.jpg)

### Birinci Adım: Gözlem Pozisyonunu Sabitleme

Köprü yönteminde gözlem pozisyonu sabittir. Çözüm sürecinde küpü sık sık döndürmemize gerek kalmaz, aynı açıda düşünerek ve çözerek ilerleriz. Bu sabit yüzeyi temel alarak, bazı köşe ve kenar parçalarını çok kolay bir şekilde görüp nereye gitmeleri gerektiğini anlayabiliriz.

Bu açıyı referans alabiliriz:

- Ön taraf (size bakan): Yeşil yüzey
- Sol taraf: Kırmızı
- Sağ taraf: Turuncu
- Üst katman: Sarı
- Alt katman: Beyaz
- Arka taraf: Mavi

### İkinci Adım: Sol ve Sağ Köprüleri Oluşturma

**Sol Köprü Oluşturma Sırası:**

1.  Önce beyaz-kırmızı kenar parçasını yerine oturtun (sol alttaki sütun).
2.  Ardından arkadaki mavi-kırmızı kenar parçasını yerine oturtun.
3.  Son olarak öndeki iki kırmızı köşe parçasını yerine oturtun.

Sol köprü tamamlanmış durum şeması:

![左桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/08-left-bridge-complete.jpg)

Bu süreç hiçbir formül gerektirmez, sadece gözlem ve anlayışla yapılır. Ne kadar çok pratik yaparsanız o kadar ustalaşırsınız.

**F' L**: Gözlemleyerek kırmızı-beyaz kenar parçasını bulun ve beyazı aşağı, kırmızıyı sola bakacak şekilde yerine oturtun.

![白红棱块归位演示](/uploads/images/solve-rubiks-cube-without-formulas/16-white-red-edge.gif)

**M2 F2 U2 B**: Mavi-kırmızı kenar parçasını ve köşe parçalarını yerine oturtun.

![蓝红棱块和角块归位](/uploads/images/solve-rubiks-cube-without-formulas/17-blue-red-corner.gif)

**U2 B U R' U2 F'**: Sol köprünün son iki parçasının yerini bulun, bunları yerine oturtmaya çalışın ve böylece mükemmel bir sol köprü elde etmiş olacağız.

![左桥最后两个方块归位](/uploads/images/solve-rubiks-cube-without-formulas/18-left-bridge-finish.gif)

**Sağ köprü de benzer şekilde** yapılır; kırmızıyı turuncuyla değiştirerek yukarıdaki adımları tekrarlayın. Ancak burada dikkat etmeniz gereken, zaten yaptığınız sol köprüyü bozmamaktır. Eğer geçici olarak yer açmanız gerekirse, sol köprüyü bir konumdan uzaklaştırabilir, böylece sağ taraftaki işlemler sol köprüyü etkilemez. Sağ taraftaki işlemler bittikten sonra sol köprüyü eski yerine getirebilirsiniz.

**Sağ köprü ortası**: U' M U' R2

![右桥中间棱归位](/uploads/images/solve-rubiks-cube-without-formulas/19-right-bridge-middle.gif)

**Sağ köprü ilk parça**: U' M' U2 R' U R

![右桥第一块归位](/uploads/images/solve-rubiks-cube-without-formulas/20-right-bridge-first.gif)

Sağ köprünün son modülünü yaptık ve yerine oturtmak istiyoruz. Bu yüzden önce sol köprüyü (F') kenara çekerek yer açıyoruz, sonra modülü hareket ettiriyoruz (U) ve son olarak sol ve sağ köprüleri aynı anda yerine oturtuyoruz.

![右桥最后一块插入](/uploads/images/solve-rubiks-cube-without-formulas/21-right-bridge-insert.gif)

Bu, sol ve sağ köprülerin tamamlanmış halidir. Köprüler oluştuğu sürece diğer renkli parçalarla şimdilik ilgilenmenize gerek yok.

![左右桥完成状态](/uploads/images/solve-rubiks-cube-without-formulas/13-both-bridges-done.gif)

### Üçüncü Adım: Üst Katman Köşe Parçalarını Çözme

Sol ve sağ köprüleri tamamladıktan sonra, geriye kalan dört köşe parçasını çözmeye başlıyoruz. Burada üç köşe değişimini kullanacağız; üç köşeyi A'dan B'ye, B'den C'ye, C'den A'ya doğru yer değiştireceğiz.

![角块三轮换示意：A→B→C→A](/uploads/images/solve-rubiks-cube-without-formulas/33-three-cycle-abc.jpg)

#### Köşe Parçası Üçlü Değişimi

<div class="formula-pair">
  <div class="formula-card">
    <p class="formula-card__label">Formül 1</p>
    <p class="formula-card__moves"><strong>R U' L' U R' U' L U</strong></p>
    <ul>
      <li>Sol alt köşe parçasının konumu değişmez.</li>
      <li>Diğer üç köşe parçası <strong>saat yönünün tersine</strong> yer değiştirir.</li>
      <li>Ancak iç renkleri <strong>saat yönünde</strong> döner.</li>
    </ul>
  </div>
  <div class="formula-card">
    <p class="formula-card__label">Formül 2 (Ayna Versiyonu)</p>
    <p class="formula-card__moves"><strong>L' U R U' L U R' U'</strong></p>
    <ul>
      <li>Sağ alt köşe parçasının konumu değişmez.</li>
      <li>Diğer üç köşe parçası <strong>saat yönünde</strong> yer değiştirir.</li>
      <li>Ancak iç renkleri <strong>saat yönünün tersine</strong> döner.</li>
    </ul>
  </div>
</div>

![角块三轮换镜像版演示](/uploads/images/solve-rubiks-cube-without-formulas/22-corner-3cycle-mirror.gif)

Karşılaşabileceğiniz köşe parçası yönelim durumları sadece dört tiptedir: 0, 1, 2 veya 4 'iyi' köşe.

-   **4 iyi köşe**: Tamamlanmış durum
-   **1 iyi köşe** (balık şekli): Bir kez daha üçlü değişim veya ayna versiyonunu yaparak tamamlayabilirsiniz.
-   **0 / 2 iyi köşe**: Önce kötü bir köşeyi üçlü değişimin etkilemeyeceği bir konuma (sol alt köşe) getirin, bir kez üçlü değişim yapın, bu 1 iyi köşeye dönecek ve yukarıdaki duruma geri dönecektir.

Bazen üçlü değişimin temel versiyonunu iki kez yapmak gerekebilirken, ayna versiyonunu sadece bir kez yapmak tam çözüm sağlayabilir. Yeni başlayanlar sadece temel versiyonu öğrenmeli, gözlem ve anlamaya odaklanmalı, sonra diğerlerini de kavrayabilirler. Bu, sarı yukarıya bakan bir üçlü değişimdir ve aynı zamanda ünlü bir klasik formül olan "sol-sağ balık formülü"dür. Balık şeklini anlamaya çalışın.

Bu formülü de ezberlemenize gerek yok. İki yeşil parçanın nasıl hareket ettiğini gözlemleyin, birkaç kez kendiniz yaparak alışın. Temel amaç, üst katmandaki üç köşe parçasını değiştirmektir.

Sol ve sağ köprüleri yeni tamamladığımız küpte, üstte iki sarı olduğunu fark ettik. Bu yüzden sol alt köşeyi sarı olmayan bir parçayla değiştirip bir kez köşe parçası üçlü değişimi uyguluyoruz. Ardından 2 kez daha üçlü değişim yaparak veya bir kez ayna versiyonu üçlü değişim uygulayarak, üst katmandaki dört köşenin de sarı renginin yukarı bakmasını sağlayabiliriz.

![角块三轮换过程演示](/uploads/images/solve-rubiks-cube-without-formulas/28-corner-3cycle-process.gif)

Dört sarı köşe tamamlandı!

![四个黄色角完成状态](/uploads/images/solve-rubiks-cube-without-formulas/26-corner-orientation.jpg)

#### Konumu Ayarlama (Yan Renkleri Hizalama)

Dört köşe parçasının sarı rengi yukarıya baktıktan sonra, köşe parçalarının yan renklerinin de hizalanması gerekir ki parçalar tamamen yerine otursun.

Bu durumda **J-perm varyantı**nı kullanıyoruz: **R U2 R' U' R U2 L' U R' U' L**

Bu formülün mantığı "çift taşıma + mantıksal değişim" olarak ayrılabilir:

-   İlk kısım `R U2 R' U' R`: Bir çifti güvenli bir alana taşıyıp geçici olarak saklar, yer açar.
-   İkinci kısım `U2 L' U R' U' L`: Üçlü değişim mantığını kullanarak iki köşe parçasının yerini hassas bir şekilde değiştirir.

**Etki**: Sağdaki iki köşe parçası yer değiştirir, sarı renk yukarıya bakmaya devam eder ve diğer köşe parçaları değişmez.

Bu, herhangi iki komşu köşe parçasının yerini değiştirmeye eşdeğerdir (hangi iki köşe parçasının sağda olacağını U ile ayarlayarak). Birkaç kez tekrarlayarak dört köşe parçası tamamen hizalanıp yerine oturabilir.

![J-perm 演示](/uploads/images/solve-rubiks-cube-without-formulas/29-jperm.gif)

Bu formülü de ezberlemenize gerek yok. İki yeşil parçanın nasıl hareket ettiğini gözlemleyin, birkaç kez kendiniz yaparak alışın. Temel amaç, sarı renk yukarı bakarken üst katmanın sağ tarafındaki iki köşe parçasını değiştirmektir.

### Dördüncü Adım: Son Altı Kenar Parçasını Çözme (LSE, Last Six Edges)

Burada öncelikle merkez parçalarını hizalayın, sarıyı üste, beyazı alta getirin, ardından kenar parçalarını ayarlayın.

Geriye sadece 6 kenar parçası kaldı. Bu adımda sadece **M** ve **U** hareketleri kullanılır, bu da oldukça sezgiseldir.

#### 4a: Yönelimi Ayarlama (EO, Edge Orientation)

**Belirleme Yöntemi**: Kenar parçasının beyaz / sarı etiketinin yukarı veya aşağı bakıp bakmadığına bakın.

-   Yukarı / Aşağı bakan = İyi kenar ✓
-   Yana bakan = Kötü kenar ✗

**Ayarlama Yöntemi**: Kötü kenarları çevirmek için **M U M'** veya **M' U M** kullanın.

![M U M' 翻转坏棱演示](/uploads/images/solve-rubiks-cube-without-formulas/30-mum-flip.gif)

Sezgisel Anlayış: M, orta katman kenar parçasını yukarı çevirir, U konumu ayarlar, M' ise tekrar eski haline döndürür.

Tüm kenar parçalarının beyaz / sarı rengi yukarı veya aşağı bakana kadar birkaç kez tekrarlayın.

Yönelimi doğru olan kenarlara 'iyi kenar', yanlış olanlara ise 'kötü kenar' diyebiliriz.

Resimde vurgulanan üst katmandaki üç parça 'kötü kenar'dır, çünkü ne sarı ne de beyaz renge sahiplerdir.

![坏棱高亮示意](/uploads/images/solve-rubiks-cube-without-formulas/27-bad-edges.jpg)

**Ayarlama İpuçları**: Karşılaşabileceğiniz kötü kenar durumları sadece dört tiptedir:

-   **0 kötü kenar**: Tamamlanmış durum
-   **0 veya 4 kötü kenar dışında bir sayı**: **M' U M** ile kötü kenar sayısını değiştirerek 4 kötü kenara çıkarın.
-   **4 kötü kenar (üstte ve altta 2'şer)**: **M' U2 M** ile üst ve alt kenarları değiştirerek üstte 3, altta 1 kötü kenar durumuna getirin.
-   **4 kötü kenar (üstte 3, altta 1)**: Üst katmandaki üç kötü kenar bir ok şekli oluşturur. Üst katmanı döndürerek oku alt katmandaki kötü kenara doğru çevirin ve bir kez **M' U M** yapın. Dört kötü kenar da birbirini iptal ederek hepsi iyi kenarlara dönüşür.

![四坏棱箭头消除演示](/uploads/images/solve-rubiks-cube-without-formulas/23-edge-flip.gif)

Ok oluşmazsa **M' U M** hareketini tekrar tekrar deneyin, mutlaka birleşecektir. İleri seviyelerde yavaş yavaş desenleri bulabilirsiniz.

#### 4b: Sol ve Sağ Kenarları Çözme (Kırmızı ve Turuncu)

Kırmızı-sarı ve turuncu-sarı kenarları bulun (hedef, sol ve sağ taraflardaki kenar parçalarına geri dönmeleridir) ve kenar parçası üçlü değişimiyle doğru konumlara getirin.

**İpuçları**:

1.  Kırmızı-sarı (veya turuncu-sarı) parçayı orta katmanın üzerine getirin ve üst-alt kenar değişimi yaparak alta indirin (**M' U2 M**).
2.  Diğer turuncu-sarı (veya kırmızı-sarı) parçayı karşı tarafta alta indirin.
3.  Üst katmanı döndürerek kırmızı kenarı, alta inmiş kırmızı-sarı kenar parçasının karşısına getirin.
4.  Orta katmanı yarım tur döndürün (**M2**), üst katmanı gözlemleyerek yerine oturtun (**U**).

![左右棱归位演示](/uploads/images/solve-rubiks-cube-without-formulas/25-left-right-edge.gif)

#### 4c: Son Dört Kenarı Çözme (Mavi ve Yeşil)

**İpuçları**:

-   Sürekli olarak **kenar parçası üçlü değişimi** ile üst ve alt kenarları değiştirin: **M' U2 M**. Son adımı gözlemleyerek yerine oturtun: **U2**.
-   Hızlı ipucu: Beyaz-yeşil (veya beyaz-mavi) kenar parçasını hedef konumun üzerine getirin, üst ve alt kenarları değiştirin, beyaz-yeşil (beyaz-mavi) yerine oturacaktır.

Sadece üç durum vardır:

-   Zaten doğruysa → Tamamlandı!
-   M2 gerekiyorsa → Bir kez **M2** yapın.
-   Değişim gerekiyorsa → **M' U2 M U2** veya **M U2 M' U2**.

Üç kenar değişiminin mantığını biraz basitleştirebiliriz: M' orta katmanı yukarı çıkarır, U2 üst katmanı yarım tur döndürür, M orta katmanı eski haline getirir, U2 üst katmanı eski haline getirir.

![三棱换演示](/uploads/images/solve-rubiks-cube-without-formulas/24-edge-3cycle.gif)

### Tamamlandı!

![复原完成的魔方](/uploads/images/solve-rubiks-cube-without-formulas/14-cube-solved.jpg)

## Özet

Formül ezberlemeye gerek yok, sadece "kapıyı aç - işlemi yap - kapıyı kapat" komütatör mantığı var. Bu sürecin formül ezberlemekten çok daha eğlenceli olduğunu göreceksiniz ve yıllar geçse de unutma endişesi duymayacak, istediğiniz zaman kendi kendinize çıkarabileceksiniz.

Aynı mantık, her türlü tuhaf şekilli küp de dahil olmak üzere her Rubik Küpü'nü çözmek için kullanılabilir.

Ancak hız rekorları kırmak isterseniz, sonsuz bir pratik yolculuğuna çıkmanız gerekecek. Yine de yeni başlayanlar için, biraz pratikle 90 saniyenin altına inmek sorun olmamalıdır.

Binlerce çözüm yöntemi var, daha zarif veya daha kullanışlı bir yöntem bulup bulamayacağınıza bakın.

Rubik Küpü dünyasının keyfi sonsuzdur, iyi eğlenceler dilerim.

## Ek 1: Bu Yazıdaki Rubik Küpü Çözümünün Kısa Özeti (Küp Çözme Rehberi)

1.  **Sol ve Sağ Köprüleri Oluşturma: Gözlem ve Sezgiye Dayalı**
    -   İpuçları: Gözlem ve öngörüde çok ustalaştığınızda, küpün durumuna göre diğer modülleri öncelikli olarak veya sol ve sağ köprüleri aynı anda oluşturabilirsiniz. Bu, daha az hamleyle ve çok daha serbest bir şekilde çözüm sağlar.
2.  **Üst Katmandaki Dört Köşe Parçasının Yönelimini Çözme: Dört Sarı Yukarı Baksın**
    -   Üst katman köşe parçası üçlü değişimi: **R U' L' U R' U' L U** (sol alt köşe parçasının konumunu değiştirmez, diğer üç köşe parçasının iç renkleri saat yönünde döner)
    -   Üst katman köşe parçası üçlü değişimi ayna versiyonu: **L' U R U' L U R' U'** (sağ alt köşe parçasının konumunu değiştirmez, diğer üç köşe parçasının iç renkleri saat yönünün tersine döner)
3.  **Üst Katmandaki Dört Köşe Parçasının Yan Yüzeylerini Çözme**
    -   **Üst katman köşe parçası konum ince ayarı**: **R U2 R' U' R U2 L' U R' U' L** (dört köşe parçasının da sarı rengi yukarı bakacak şekilde kalmasını sağlar, sağ taraftaki iki köşe parçasının yerini değiştirir)
4.  **Kenar Parçalarının Yönelimini Değiştirme, Beyaz veya Sarının Yukarı/Aşağı Bakmasını Sağlama**
    -   Öncelikle merkez parçalarını hizalayın, sarıyı üste, beyazı alta getirin, ardından kenar parçalarını ayarlayın.
    -   **M' U M** ile kötü kenar sayısını değiştirin, bir ok oluşturun, oku kötü kenara doğru çevirin, bir kez **M' U M** yapın, dört kötü kenar da birbirini iptal ederek hepsi iyi kenarlara dönüşür.
5.  **Sol ve Sağ Taraftaki Kenarları Çözme** (Kırmızı ve Turuncu)
    -   Öncelikle kırmızı-sarı (veya turuncu-sarı) parçayı üst-alt kenar değişimi yaparak alta indirin (**M' U2 M**).
6.  **Geriye Kalan Kenarları Çözme** (Mavi ve Yeşil)
    -   Sürekli olarak **kenar parçası üçlü değişimi** ile üst ve alt kenarları değiştirin: **M' U2 M**. Son adımı gözlemleyerek yerine oturtun: **U2**.

Yukarıdaki algoritmaların hiçbirini ezberlemenize gerek yok, sadece bir referans olması için ekledim. Aslında, kendiniz denediğinizde, her bir hamlede hangi parçanın nasıl hareket ettiğini gözlemleyip anladığınızda, birkaç denemeden sonra zaten alışmış olacaksınız. İşin özü, üst katmandaki üç köşe parçasını değiştirmek.

## Ek 2: Faydalı Web Siteleri ve Araçlar

Sizler için çevrimiçi oynayabileceğiniz bir 3D Rubik Küpü de hazırladım. İstediğiniz gibi döndürebilir, sabit formüllerle karıştırıp çözebilir, her adımı güzel animasyonlarla izleyebilirsiniz!

[3D Rubik Küpü — Philo Li](https://philoli.com/zh/projects/rubiks-cube/)

![在线 3D 魔方工具](/uploads/images/solve-rubiks-cube-without-formulas/15-online-cube-tool.jpg)

Bu eğitimdekiyle aynı karıştırma formülü: `F' D2 F' U F' U2 F' L R F U2 F2 D' R L D L B R D'`

Bu eğitimin sol-sağ köprü çözüm adımları: `F'LM2F2U2BUR'U2F'UFR'F'U2MR'URUM'UR'U2RUF'UFU'M'UF'UF`

Bu bağlantıya tıkladığınızda karşınıza karışık bir küp çıkacak: [3D Rubik Küpü — Philo Li](https://philoli.com/zh/projects/rubiks-cube/#s=F'%20D2%20F'%20U%20F'%20U2%20F'%20L%20R%20F%20U2%20F2%20D'%20R%20L%20D%20L%20B%20R%20D')

Dünya şampiyonlarının kullandığı Rubik Küpü zamanlayıcısı: [csTimer - Professional Rubik's Cube Speedsolving / Training Timer](https://cstimer.net/)
