---
layout: blog
title: "Formül Ezberlemeden Rubik Küpü'nü 30 Saniyenin Altına Nasıl İndirilir: İlkokul Öğrencileri Bile Anlayabilir"
date: 2026-10-09 12:00:00
tags:
  - Rubik Küpü
  - Rehber
  - Roux Metodu
  - Hızlı Çözme
  - Kasıtlı Pratik
categories: 日常折腾
description: "Rubik Küpü'nü ilk çözdüğüm andan Ao100 ortalamasında 30 saniyenin altına inmem 89 gün sürdü ve bu süreçte tek bir CFOP formülü ezberlemedim. 4441 zamanlama verisiyle dört aşamayı detaylandırıyorum: Her aşamada nerelerde takıldım, neler çalıştım ve Roux metodunun neden formül ezberlemeyi gerektirmediğini açıklıyorum."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp" alt="165 saniyeden 28 saniyeye dört aşama" />
</figure>

*Görsel: 165 saniyeden 28 saniyeye dört aşama. İkinci aşamada süre en hızlı düşerken, üçüncü aşama en uzun plato dönemini oluşturdu.*

Önceki yazım olan [《Formül Ezberlemeden Rubik Küpü Nasıl Çözülür》](/zh/blog/solve-rubiks-cube-without-formulas/) başlıklı makalede, komütatör mantığını kullanarak, formül ezberlemeden bir Rubik Küpü'nü çözmeyi öğrenmiştiniz. O yazı birçok kişiden büyük beğeni toplamıştı.

Eğer o yazıda anlatılanları uyguladıysanız, şimdi muhtemelen iki üç dakikada, biraz zorlansanız da küpü çözebiliyorsunuzdur. Ardından yeni bir soru ortaya çıkacaktır: Nasıl daha hızlı olabilirim?

Rubik Küpü hızlı çözme (speedcubing) diye arama yaptığınızda, tüm rehberler size aynı şeyi söyleyecektir: 30 saniyenin altına inmek istiyorsanız, önce CFOP formüllerini ezberlemelisiniz. F2L için 41, OLL için 57, PLL için 21 formül, toplamda 119 formül. F2L'yi sezgisel yapsanız bile, üst katmanın 78 formülünden kaçış yok. Ezberleyemezseniz, hızlı olmayı aklınızdan bile geçirmeyin.

Bu yazı size, hiçbir formül ezberlemeden de 30 saniyenin altına inebileceğinizi göstermek istiyor.

<!--more-->

Rubik Küpü'nü ilk kez 7 Mayıs 2026'da çözdüğüm andan, 4 Ağustos'ta Ao100 ortalamasında 30 saniyenin altına inene kadar 89 gün geçti. Bu süreçte tek bir CFOP formülü ezberlemedim, sadece boş zamanlarımda oynadım. İşte kayıt altına aldığım 4441 çözüme ait zamanlama verileri.

![4441 çözüme ait performans eğrisi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Görsel: 4441 çözüme ait performans eğrisi. Gri çizgi her bir çözümün süresini, koyu renkli çizgi Ao100 trendini, kırmızı noktalar ise kişisel en iyi rekorumu kırdığım anları gösteriyor. En iyi Ao100 ortalamam 28.22 saniye.*

Bilinçli ve aktif bir şekilde pratik yaparak ve egzersiz sıklığını koruyarak, herkes birkaç ay içinde sıfırdan sub-30 seviyesine gelebilir.

30 saniyenin altında olmak ne anlama geliyor? [1982'deki ilk Rubik Küpü Dünya Şampiyonası](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship)'nda şampiyonluk süresi 22.95 saniyeydi; bu, daha sonra WCA tarafından tanınan ilk resmi dünya rekoruydu. 10. sıradaki isim ise 29.11 saniye ile, bir sonraki bölümde bahsedeceğimiz CFOP yönteminin mucidi Jessica Fridrich'in ta kendisiydi. Başka bir deyişle, bugün bir amatörün birkaç ayda ulaştığı sub-30 seviyesi, 1982'de dünya ilk on arasına girmek anlamına geliyordu.

Şimdi size, bunu adım adım nasıl başardığımı ve tüm pratik yöntemlerimi eksiksiz bir şekilde paylaşacağım.

## Hızlı Çözme Dünyası Neden Formül Ezberliyor?

Önce bir şeyi netleştirelim: Neden 'hız' ve 'formül ezberleme' insanların zihninde bu kadar iç içe geçmiş durumda?

1980'lerin başında, Çek asıllı Profesör Jessica Fridrich (daha sonra ABD'deki Binghamton Üniversitesi'nde dijital adli tıp üzerine çalıştı) katmanlı bir çözüm yöntemi geliştirdi ve bu yöntem daha sonra CFOP (Cross, F2L, OLL, PLL) olarak adlandırıldı. Bu metodun temel fikri şuydu: Üst katmandaki tüm olası durumları tek tek belirlemek ve her duruma en uygun formülü atamak. Durumu tanır, formülü uygularsınız, düşünmenize gerek kalmaz.

![Jessica Fridrich ve ofisindeki Rubik Küpü](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Görsel: Jessica Fridrich ve ofisindeki Rubik Küpü. 1982'deki ilk Dünya Şampiyonası'nda 29.11 saniye ile 10. oldu ve CFOP (Fridrich Metodu) onun adıyla anılıyor.*

Bu yöntem inanılmaz hızlıdır. Neredeyse tüm dünya rekorları CFOP kullanılarak kırılmıştır. Bu yüzden tüm rehberler onu öğretir, tüm videolar ondan bahseder ve 'hızlı çözmeyi öğrenmek' eşittir 'CFOP öğrenmek', CFOP öğrenmek de 119 formülü ezberlemek anlamına gelir.

Ancak dikkat edin, 'formül ezberlemek' CFOP'ye özgü bir özelliktir, 'hız'ın kendisinin bir özelliği değildir. CFOP'nin ezber gerektirmesinin nedeni, tümevarım (exhaustive search) yolunu seçmiş olmasıdır. Tümevarım, ezber gerektirir; bu da ödenen bedeldir.

Peki, bu tümevarım yolunu seçmeyen bir yöntem var mı? Var.

## Formül Ezberlemeden Çözüm: Roux Köprü Metodu

2003 yılında Fransız Gilles Roux, tamamen farklı bir yaklaşım ortaya koydu. Katman katman çözmek yerine, önce sol ve sağda iki adet 1×2×3 'köprü' inşa ediliyor, ardından üst katmanın dört köşesi düzenleniyor ve son olarak sadece altı kenar kalıyor; bu kenarlar orta katman M ve üst katman U dönüşleriyle tamamlanıyor.

![Gilles Roux yarışırken](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Görsel: Gilles Roux yarışırken. Eski bir yarışma videosundan alınmıştır, görüntü yapay zeka ile onarılıp büyütülmüştür.*

Önceki yazımızda bu çerçeveyi kullanarak bir kez çözmüştük. Şimdi dört adımına yeniden göz atalım, bu kez 'her adımda ne ezberlememiz gerekiyor' konusuna odaklanarak:

| Adım | İçerik | Ezberlenecek Formül Sayısı |
| --- | --- | --- |
| 1. Sol Köprü | 1×2×3'lük bir blok oluşturma | 0, tamamen gözlem |
| 2. Sağ Köprü | Simetrik olarak diğerini oluşturma | 0, tamamen gözlem |
| 3. CMLL | Üst katmanın dört köşe parçasını yerine getirme | 9, hepsi üçlü döngülerden türetilebilir |
| 4. LSE | Son altı kenar parçası | 0, sadece üst katman ve orta katman (M ve U) dönüşleri kullanılır |

Dört adımdan üçü hiçbir formül gerektirmiyor. Tek ihtiyaç duyulan CMLL'de, tüm durumlar birleştiğinde 42 farklı varyasyon var, ancak 42 formül ezberlemenize gerek yok. Önceki yazımızda bahsettiğimiz köşe üçlü döngüsü R U' L' U R' U' L U, aynası ve birkaç varyantı ile tüm durumları kapsayabilir, sadece biraz daha yavaş olur.

![Roux metodunun dört adımı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Görsel: Roux metodunun dört adımı; her adımda, o ana kadar yerine oturan parçalar gösterilmektedir: Sol Köprü → Sağ Köprü → CMLL (üst katman köşeleri) → LSE (son altı kenar). 3D Rubik Küpü sayfamdaki 'Çözüm' panelinden alınmıştır.*

Roux metodunun formül ezberlemeyi gerektirmemesinin nedeni budur: Ezberlenmesi gereken kısmı çok küçük bir alana sıkıştırır, geri kalan her şeyi gözleme, anlamaya ve pratik yapmaya bırakır.

## 165 Saniyeden 28 Saniyeye: Dört Aşama

Aşağıda, benim bizzat geçtiğim yol bulunuyor. Her aşamayı başlangıç ve bitiş verileriyle işaretledim, o aşamada nerede takıldığımı ve neler çalıştığımı açıkladım. Sizin takıldığınız noktalar benden farklı olabilir, ancak sıralama büyük olasılıkla aynı olacaktır.

![Dört aşamanın zaman aralığı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Görsel: Dört aşamanın zaman aralığı. Birinci aşama 3 hafta, ikinci aşama 11 gün, üçüncü aşama iki ay, dördüncü aşama ise günümüze kadar devam ediyor.*

### Aşama Bir: 165 Saniye → 60 Saniye (1-3. Haftalar)

**Veriler**: 7 Mayıs'tan 27 Mayıs'a. İlk hafta ortalaması 165 saniye, üçüncü hafta 68 saniye.

**Nerede Takıldım**: Sol köprüde çok acemiydim, her renk bloğunu bulmak uzun sürüyordu. Ayrıca bir blok grubunu bulduktan sonra, acemiler hep durup tekrar gözlemlemeye meyillidir.

![Acemilerin zamanı nereye harcadığı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Görsel: Acemilerin zamanı nereye harcadığı. Eller dururken, gözler küp üzerinde ileri geri arama yapıyor; 'arama' süresi 'çevirme' süresinin kat kat fazlası.*

**Neler Çalışmalı**:

Bu aşamada en büyük düşmanınız el yavaşlığı değil, göz yavaşlığıdır. 'Aramaya' harcadığınız zaman, 'çevirmeye' harcadığınız zamandan çok daha fazladır. Bu yüzden:

- Sabit bir gözlem pozisyonu kullanın, küpü döndürmeyin. Önceki yazımızda belirttiğimiz gibi, Roux metodunda gözlem açısı sabittir. Bu aşamada 'küpü döndürmeme' eylemini kas hafızanıza kazımalısınız. Küpü döndürmek istediğinizde durun ve kendinize sorun: Bu açıdan istediğim parçayı görebiliyor muyum?
- Yavaş çevirme yapın. Zaman tutmayın, ancak hareketleriniz kesintisiz ve akıcı olsun, hiçbir duraklama olmasın. Her hareket çok yavaş olabilir, ama duraklamayın. Önemli olan, eliniz bir önceki hareketi yaparken gözünüzün bir sonraki harekete odaklanmasıdır; yavaş çevirmenin özü budur. Bu kulağa yavaşlamak gibi gelse de, aslında gözlerinizin parçaların konumunu ve gitmeleri gereken yeri görme ilişkisini eğitiyorsunuz.
- Sadece ilk köprüyü çalışın. Küpü karıştırın, sol köprüyü yapın, tekrar karıştırın, tekrar sol köprüyü yapın. Diğer adımlara geçmeyin. İlk köprü, Roux metodundaki en serbest ve gözlem yeteneğini en çok geliştiren adımdır.

Bu aşamada yeni formül öğrenmeye çalışmayın. Şu anki darboğazınız formüllerde değil.

### Aşama İki: 60 Saniye → 40 Saniye (4-5. Haftalar)

**Veriler**: 27 Mayıs'tan 7 Haziran'a, 11 gün. Bu, tüm süreçteki en hızlı düşüş dönemiydi ve aynı zamanda en çok pratik yaptığım dönemdi; Haziran'ın ilk haftasında 723 çözüm yaptım.

**Nerede Takıldım**: Hareketler akıcı değildi. Küp takılıyordu.

**Neler Çalışmalı**:

Bu aşamada, her adımın hareketlerini optimize etmeniz, anlama üzerine her hareketin akıcılığını artırmanız gerekir.

- İkinci Köprü. İkinci köprü, ilk köprüden daha zordur, çünkü alan yarıya iner ve tamamlanmış sol köprüyü bozamazsınız. Anahtar dönüşler R, r (sağ iki katman), M, U'dur. Bu aşamada, sol köprünün asla bozulmaması için r ve M'yi R yerine kullanarak parçaları hareket ettirmeyi öğrenmelisiniz. Hareket adımlarını optimize etmek, zaman kazanmaktır. Örneğin, saat yönünde üç kez döndürmek, saat yönünün tersine bir kez döndürmeye eşdeğerdir.
- M katmanını akıcı kullanın. Roux metodunun son adımı tamamen M ve U dönüşlerinden oluşur. M katmanını ne kadar akıcı çevirdiğiniz, hızınızın alt sınırını doğrudan belirler. Yüzük parmağınızı veya orta parmağınızı kullanarak M'yi itin ve M' U M' U gibi ritimleri çalışmaya başlayın.
- CMLL şekil tanıma. Önceki yazımızda, üçlü döngülerle dört köşeyi 'deneme yanılma' yoluyla bulmuştuk. Şimdi ise önce bakıp sonra yapmaya başlamalısınız: Üst katmanı çevirmeden önce, dört köşenin sarı yönelimine bir göz atın ve 0, 1, 2 veya 4 'iyi köşe' olup olmadığını belirleyin, ardından doğrudan ilgili hareketi yapın. Çok az sayıda formül kullanarak da verimlilikte büyük bir artış sağlayabilirsiniz, bu oldukça karlıdır. Bu formüllerin büyük bir kısmı ezberlemek yerine, yaparak ve anlayarak öğrenilebilir.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Sağ köprüyü yaparkenki bakış açısı" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Sol görsel: Sağ köprüyü yaparkenki bakış açısı. Sol köprü tamamlanmıştır ve sağdaki köşe-kenar çiftini yerleştirmek için sadece R, r, M, U dönüşleri kullanılır, sol köprüye asla dokunulmaz. Sağ görsel: M' U M, Roux metodunun ikinci yarısında en çok kullanılan hareket dizisi. Orta katman yukarı, üst katman bir kez döner, orta katman geri döner; bu üç adım, üst katman ve orta katmandaki bir kenar çiftini değiştirir.*

Düzenlediğim [Roux Metodu Formül Kütüphanesi](/zh/projects/rubiks-cube/roux#cmll)'ne bakabilirsiniz. CMLL sayfası iki aşamalıdır: 7 yönelim formülü + 2 konumlandırma formülü, toplamda 9 formül. Bu, hız artışı için maliyet-etkin bir seçenektir, öğrenmesi kolaydır ve her bir setin ustalaşması yaklaşık 1-2 saniye kazandırabilir. Kısa bir pratikle hızla ustalaşırsınız ve bazıları zaten önceki yazıda tanıtılmıştı; hepsini ezberlemenize gerek kalmadan 30 saniyenin altına inmenizi sağlayacaktır.

![İki aşamalı CMLL'nin ilk adımı, yedi köşe parçası yönelimi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Görsel: İki aşamalı CMLL'nin ilk adımı, yedi köşe parçası yönelimi. Üstten görünümde sarı, yukarı bakan üst yüzey rengidir; dıştaki küçük çubuklar, o köşenin üst yüzey renginin yan tarafa baktığını gösterir. Sarı köşelerin sayısına göre şekli tanıyın: 0 köşe H veya Pi, 1 köşe S veya AS, 2 köşe U, T veya L.*

Sarı üst yüzeyler hizalandıktan sonra, köşe parçalarının yan yüzeylerini hizalamak için bu iki formülü kullanabilirsiniz.

Eğer bir yüzeyin renkleri zaten hizalanmışsa, örneğin kırmızı aynı yüzeyde ise, onu sola döndürün ve ardından bitişik takas formülünü seçebilirsiniz. Hiçbir yüzeyin rengi hizalı değilse, çapraz takas formülünü seçin.

![İki aşamalı CMLL'nin ikinci adımı, iki köşe parçası konumu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Görsel: İki aşamalı CMLL'nin ikinci adımı, iki köşe parçası konumu. Sol görseldeki sol taraftaki iki köşenin kırmızısı zaten hizalı, bitişik takas kullanılır; sağ görselde hiçbir yüzey hizalı değil, çapraz takas kullanılır.*

Her bir formül grubunu bolca yavaş çevirme yaparak anlayabilirsiniz. Bunları formül olarak değil, belirli sabit hareketler olarak görün; yavaş yavaş keşfederek bu hareketleri kendiniz de bulabilirsiniz, ancak burada listelemek size zaman kazandıracaktır.

Bir de, her pratikten daha hızlı sonuç veren bir şey var: Biraz para harcayıp yeni bir Rubik Küpü alın. Eğer elinizdeki hala dönerken gıcırtı yapan, fazla çevrildiğinde takılan eski bir küpse, manyetik özellikli modern bir 3x3 küp alın. En yeni küpler size mühendislik optimizasyonunun gücünü hissettirecek; pürüzsüz döner, otomatik olarak yerine oturur, neredeyse hiç takılmaz. Sadece küp değiştirmekle bile ortalama süreniz bir anda 15 saniye kısalabilir. Fiyat-performans açısından [MoYu RS3 M V5 (manyetik süspansiyon + top çekirdekli versiyon)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20) idealdir, yirmi dolar civarındadır ve sub-20 seviyesine kadar size yeterli olacaktır.

### Aşama Üç: 40 Saniye → 30 Saniye (5-13. Haftalar, İki Ay)

**Veriler**: 7 Haziran'dan 4 Ağustos'a. Ao100 ortalamasını 39.8 saniyeden 29.9 saniyeye indirmek 58 gün sürdü. Bu aşamada nadiren 30 saniyenin altında süreler görülebilirdi, ancak bu sadece çok şanslı olduğunuzda olurdu. Ortalama çözüm süresi düştükçe, 1 saniye bile ilerlemenin zorluğu katlanarak artacaktır.

![Günlük ortalama süreler](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Görsel: Günlük ortalama süreler. Haziran ortasından sonra eğri neredeyse düzleşti ve 30-40 saniye arasında iki ay boyunca takıldım.*

Bu plato dönemidir. Herkesin başına gelir, ben burada iki ay kaldım.

**Nerede Takıldım**: Üst katmanın altı kenar parçasını yerine getirmek çok yavaştı, mantığı anlamıyordum ve her seferinde tekrar tekrar denemeye çalışarak çok zaman kaybediyordum. Sol ve sağ köprüler hala yeterince akıcı değildi.

**Neler Çalışmalı**:

- EO (Edge Orientation) tanıma. Önceki yazımızda bahsettiğimiz gibi, yanlış kenarların (hatalı kenarlar) sadece birkaç durumu vardır: 0, 0 veya 4 olmayan, 4 (üstte 2 altta 2), 4 (hepsi üstte), 4 (üstte 3 altta 1). Bu aşamadaki hedefiniz şudur: Köprü tamamlandığı anda, saymadan, bir bakışta hangi durumda olduğunu anlamak. Pratik yöntemi, küpü karıştırıp sadece CMLL'yi bitirdikten sonra duraklamak, yanlış kenar sayısını söylemek ve sonra devam etmektir.
- Birçok kişi buradaki hareketleri anlamaz. EO aşamasının nihai amacı, 'üstte 3 altta 1' şeklinde bir ok formu oluşturmaktır. Çünkü tam form, yalnızca bir hareketle ok formuna dönüşebilir, bu yüzden tersine mühendislik yaparak, bunun çözümden önceki son adım olduğunu düşünebiliriz. Dolayısıyla, kaç tane yanlış kenar olursa olsun, nihai amaç bir ok oluşturmaktır. Üstte 4 yanlış kenar varsa, bir çift üst ve alt kenarı değiştirerek bir yanlış kenarı aşağıya indirir ve oku oluşturursunuz. Üstte 2, altta 2 varsa, bir çift üst ve alt kenarı değiştirerek bir yanlış kenarı yukarıya çıkarır ve oku oluşturursunuz. Eğer üstte 1 altta 1, veya üstte 2 varsa, M' U M ile önce önceki duruma dönüştürür, sonra oku oluşturursunuz. Bolca gözlem ve düşünme yoluyla, 1/1 durumunun en iyi adımlarını kendiniz keşfedebilirsiniz.
- Bolca öngörü (look-ahead) pratiği yapın. Bu, 40 saniyeden 30 saniyeye inmek için en önemli şeydir ve aynı zamanda en sezgi karşıtı olanıdır: Biraz daha yavaş çevirin, biraz daha uzağa bakın. Sol köprüyü yaparken gözünüzü yerleştirmekte olduğunuz parçaya değil, bir sonraki parçanın nerede olduğuna odaklayın. Başlangıçta çok garip hissettirecek, süreleriniz önce kötüleşecek, ancak bir hafta ısrar ederseniz aniden düzeldiğini göreceksiniz.
- CMLL'de tereddüt etmeyin. Eğer bir hareketi her seferinde düşünmeden yapamıyorsanız, o hareket henüz size ait değildir. Her bir hareketi ayrı ayrı 50 kez pratik yapın, ta ki şekli gördüğünüzde eliniz kendiliğinden hareket edene kadar.

![Ok şekli](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

*Görsel: Ok şekli. Üst katmandaki üç yanlış kenar (açık mavi vurgulu) bir ok şeklinde sıralanmış ve alt katmandaki yanlış kenarı işaret ediyor. Bu durumda, tek bir M' U M hareketi dördünü birden yerine yerleştirebilir. [Bu durumu 3D küpte açarak](/zh/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) adım adım görebilirsiniz.*

![EO'nun altı durumu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Görsel: EO'nun altı durumu. Sol üst köşedeki etiket yanlış kenar sayısını (üst / alt) belirtir, sarı iyi kenarları, açık mavi çerçeve ise yanlış kenarları gösterir. Sadece ok şeklinde olan için formül gerekir, diğer beş durum önce ok şekline dönüştürülür.*

Sol ve sağ kenar parçalarını yerine getirmek için, burada üst yüzey sarı, alt yüzey beyaz ve sol köprü kırmızı renkte varsayılacaktır. Bu durumda, yerine getirilmesi gereken sarı-kırmızı kenar parçası + sarı-turuncu kenar parçasıdır (vurgulanan yerler). Ana fikir, sarı-kırmızı kenar parçasını üst-alt kenar takasıyla alt yüzeye indirmek, sarı-turuncu kenar parçasını da alt yüzeye indirmektir. İki kenar parçası alt yüzeyde karşı karşıya geldiğinde, üst yüzeyi uygun konuma çevirerek M2 U veya M2 U' ile U katmanının sol ve sağ kenar parçaları yerine oturtulabilir.

Daha iyi anlaşılmasına yardımcı olmak için, EO'nun altı durumunu [Roux Metodu Formül Kütüphanesi'nin LSE sayfası](/zh/projects/rubiks-cube/roux#lse)nda derledim. Her bir görsele tıklayarak 'detaylı gör' seçeneğiyle 3D küpte ilgili durumu açabilir, yanlış kenarların otomatik olarak vurgulandığını görebilirsiniz. Aynı sayfada ayrıca sonraki UL/UR yerleştirme ve son dört kenarın tüm durumları da bulunmaktadır.

Bu aşamada pratik miktarının azalması kötü bir şey değildir. Plato dönemini sadece tekrar sayısını artırarak aşamazsınız; belirli bir kötü alışkanlığı değiştirmekle aşarsınız. Benim deneyimim, her seferinde sadece bir şeyi değiştirmek oldu.

### Aşama Dört: 30 Saniye → 28 Saniye (13. Haftadan Sonra)

**Veriler**: 4 Ağustos'tan sonra. Eylül ayının tamamında kayıtlı pratik sayısı 122 idi, ancak aslında birçok pratik kayıt altına alınmamıştı. Rubik Küpü'nü bir masaüstü oyuncağı haline getirdim; canım istediğinde birkaç kez oynuyorum, sinirli veya kaygılı olduğumda oynuyorum, iş aralarında oynuyorum, sıkıldığımda oynuyorum, yani küp çözmeyi hayatımın bir parçası haline getirdim. Ao100 ortalaması da yavaş yavaş 29.9'dan 28.2'ye düştü.

**Nerede Takıldım**: Belirgin bir darboğaz yoktu, sadece yeterince akıcı değildim.

**Neler Çalışmalı**:

Eğer ortalama hızınız hala 30 saniyenin üzerindeyse, yapmanız gereken tek şey daha fazla pratik yapmaya devam etmektir, yeni formüller ezberlemeye çalışmak değil.

Sürekli yavaş çevirme yaparak öngörü pratiği yapın, böylece giderek hızlanacaksınız.

Fırsat buldukça küpü elinize alıp oynayın, küpü çalışma masanız gibi kolayca ulaşabileceğiniz bir yere koyun, böylece iş aralarında oynayabilirsiniz. Ayrıca çözümlerinizin videolarını düzenli olarak kaydedin, hangi aşamada en çok zaman kaybettiğinizi görün ve buna yönelik optimizasyonlar yapın; işte bu kasıtlı pratik budur. İlerleme hızınız, normal pratiklerinizin toplam sayısına değil, kasıtlı pratiklerinizin sayısına bağlıdır.

Sonra fark edeceksiniz ki, 30-35 saniyelik darboğaz dönemini atlattıktan sonra hızınız bir kademe daha düşmüş.

Bu aşamaya geldiyseniz sizi tebrik ederim, yeni başlayanlara göre artık çok yetenekli bir oyuncusunuz!

## Formül Ezberlememenin Bedeli

Buraya gelmişken, dürüst olalım. Formül ezberlememek bedelsiz değildir.

CMLL aşaması yavaştır. 42 durumu 9 formülle çözmek, bazı durumlarda iki kez işlem yapmak anlamına gelir. Tam set CMLL bilenler bu adımda benden iki üç saniye daha hızlıdır.

M katmanı tekniği eşiği yüksektir. Roux metodunun ikinci yarısı tamamen M katmanına dayanır ve M katmanı R ve U'dan daha zor döner, kolayca takılabilir ve küpün kendisine olan gereksinimleri de daha fazladır.

Üst sınıra takılmayın. En iyi oyuncular arasında Roux metodunu kullanarak dünya sıralamasına girenler de var, metodun kendisinin bir üst sınırı yok. Ancak 15 saniyenin altına inmek istiyorsanız, büyük olasılıkla 42 CMLL formülünü tamamlamanız gerekecektir. Ama bu başka bir aşamanın konusudur. 30 saniyenin altına inmek için buna gerek yok.

Üstelik, tek elle küp çözen neredeyse her dünya çapında oyuncu Roux metodunu kullanır, çünkü bu metot tek elle çözmek için de gerçekten çok uygundur.

**Resmi Yarışmalarda (WCA) Roux ile En Hızlı Süreler:**

- Tekli çözüm 4.11 saniye, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipinler), 2023 Valenzuela Cubing Open'da, resmi olarak Roux ile kırılmış en hızlı tekli çözüm olarak kabul edilmektedir ([yeniden canlandırma videosu](https://www.youtube.com/watch?v=5H4TRJSUm-U)).
- Ortalama 5.98 saniye, yine aynı kişi, 2019'da, o zamanlar Asya rekoruydu ve tarihteki üçüncü resmi sub-6 ortalamasıydı ([WCA verileri](https://www.worldcubeassociation.org/persons/2017VILL41)).
- Kendisi aynı zamanda [tek el dünya rekoru sahibidir](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): Ortalama 8.09, tekli çözüm 6.05 (2024). Tek elle çözme camiasında Roux'nun en iyi çözüm yöntemi olduğu yaygın olarak kabul edilir.

Bence bu takas çok karlı. CMLL'de harcadığınız iki üç saniyelik zaman karşılığında şunları elde edersiniz: Her adımda ne yaptığınızı bilmek, üç ay küpe dokunmasanız bile unutmamak ve daha önce hiç görmediğiniz herhangi bir küpü çözebilme yeteneği.

## Özet

![Çözüm tamamlandı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

Çözebilmekten 30 saniyenin altına inmek, bir formül ezberleme süreci değil, el, göz ve beynin koordinasyonunu geliştirme sürecidir.

Dört aşama, dört şey: Önce küpü döndürmeden bakmayı öğrenin, sonra sol köprüyü bozmadan sağ köprüyü yapmayı öğrenin, ardından bu adımı yaparken bir sonraki adımı görmeyi öğrenin ve son olarak ellerinizin gözlerinize yetişmesini sağlayın.

Hızın kaynağı formüller değildir. Gözlem yeteneğidir.

Her aşamadaki ilerlemenizle pozitif geri bildirim oluşturmayı öğrenin; akıcılık egzersizleri bile sıkıcı olmak zorunda değildir, özellikle de bir kez daha rekor kırdığınızdaki o sürprizi yaşadığınızda. Özellikle başlangıç ve orta seviyelerde, her gün rekor kırmanın getirdiği mutluluğu deneyimleyeceksiniz.

Yazıdaki tüm formülleri ve durumları [Roux Metodu Formül Kütüphanesi](/zh/projects/rubiks-cube/roux)'nde derledim, takıldığınızda dönüp bakabilirsiniz.

Rubik Küpü dünyasının keyfi sonsuzdur, iyi eğlenceler dilerim.

## Ek 1: Aşamalara Göre Pratik Listesi

**Aşama Bir (> 60 saniye)**

- Sabit gözlem pozisyonu kullanın, tüm çözüm boyunca küpü döndürmeyin.
- Duraklamadan bir sonraki istenen rengi bulun.
- Yavaş çevirme yapın, her adımda niyetinizi söyleyin.
- Sadece sol köprüyü çalışın, 50 kez tekrarlayın.

**Aşama İki (60 → 40 saniye)**

- Sağ köprüyü sadece R, r, M, U kullanarak yapın, sol köprüye dokunmayın.
- İki aşamalı CMLL pratiği yapın.
- M' U M' U ritmini günde 5 dakika çalışın.

**Aşama Üç (40 → 30 saniye)**

- CMLL bitince duraklayın, yanlış kenar sayısını bir bakışta söyleyin.
- Yavaş çevirme + öngörü: Gözleriniz her zaman bir sonraki parçayı görsün.
- Günde en az 20 kez yüksek kaliteli çözüm yapın.

**Aşama Dört (< 30 saniye)**

- Duraklamaları bulmak için video kaydedin.
- Teknik: R U R' U' tek parmak tekniği, M katmanı için yüzük parmağı.
- Günde 20 kez yüksek kaliteli çözüm yapın, sadece sayıya odaklanmayın.

## Ek 2: Araçlar

- **csTimer**: [cstimer.net](https://cstimer.net/). Ao5 / Ao12 / Ao100 istatistiklerini açın; gerçek seviyenizi Ao100 gösterir, tekli süreler şanstır.
- **3D Rubik Küpü**: [philoli.com/zh/projects/rubiks-cube](/zh/projects/rubiks-cube/). Bu yazıdaki tüm formülleri buraya girerek animasyonlarını izleyebilirsiniz.
- **Roux Metodu Yeni Başlayan Dostu Formül Kütüphanesi**: [philoli.com/zh/projects/rubiks-cube/roux](/zh/projects/rubiks-cube/roux). Sol köprü, sağ köprü için sık kullanılan yerleştirme rutinleri, iki aşamalı CMLL'nin 9 formülü ve LSE'nin tüm durumları (EO, UL/UR, son dört kenar). Her bir görsele tıklayarak 3D küpte açabilir, ilgili olmayan blokları otomatik olarak gizleyip hareket ettirilecek kenarları vurgulayabilirsiniz.
- **csTimer Eğitim Analizcisi**: [philoli.com/zh/projects/rubiks-cube/analyzer](/zh/projects/rubiks-cube/analyzer). csTimer'dan dışa aktardığınız dosyayı buraya sürükleyerek kendi performans trendinizi, Ao5/Ao12/Ao100 eğrilerinizi, kişisel en iyilerinizi (PB), dönüm noktası tablonuzu (ilk sub-60, sub-40, sub-30'a ne zaman ulaştığınız) ve Güç Yasası pratik eğrisini görebilirsiniz. Bu yazıdaki tüm grafikler buradan alınmıştır. Veriler sadece tarayıcınızda işlenir, sunucuya yüklenmez. Dışa aktarılmış dosyanız yoksa, etkiyi görmek için benim 4441 çözüm verimi yükleyebilirsiniz.

*Bu yazı Amazon satış ortaklığı bağlantıları içermektedir: Bağlantılar aracılığıyla yapılan alışverişlerden küçük bir komisyon alırım, sizin fiyatınız değişmez.*

## Daha Fazla Oku

- [Formül Ezberlemeden Rubik Küpü Nasıl Çözülür: İlkokul Öğrencileri Bile Anlayabilir](/zh/blog/solve-rubiks-cube-without-formulas)
