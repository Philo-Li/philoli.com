---
layout: blog
title: "Algoritma Ezberlemeden Rubik Küpünü 30 Saniye Altına Nasıl Çözersin: İlkokul Öğrencileri Bile Anlayabilir"
date: 2026-10-09 12:00:00
tags:
  - Rubik Küpü
  - Rehber
  - Roux Metodu
  - Hızlı Çözme
  - Bilinçli Pratik
categories: Günlük Uğraşlar
description: "İlk çözüşümden Ao100 ortalamasını 30 saniye altına düşürmem 89 gün sürdü ve hiç CFOP algoritması ezberlemedim. 4441 zamanlı çözüm verisini kullanarak dört aşamayı inceleyeceğiz: Her aşamada nerede takıldığını, ne pratik etmen gerektiğini ve Roux metodunun neden algoritma ezberlemeye ihtiyaç duymadığını."
cover: /uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp
toc: true
---

<figure class="post-cover">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/00-cover.webp" alt="Algoritma Ezberlemeden Rubik Küpünü 30 Saniye Altına Nasıl Çözersin: İlkokul Öğrencileri Bile Anlayabilir" />
</figure>

Önceki yazım olan [《Algoritma Ezberlemeden Rubik Küpünü Nasıl Çözersin》](/tr/blog/solve-rubiks-cube-without-formulas/)’da, komütatör mantığını kullanarak algoritma ezberlemeden bir küpü çözmeyi öğrenmiştin. O yazı birçok kişiden büyük beğeni toplamıştı.

Eğer adım adım takip ettiysen, şu anda küpü baştan sona biraz takıla takıla da olsa çözebiliyor olmalısın; birkaç yüz pratikle 1 dakikanın altına inmek oldukça kolaydır. Peki ya daha da hızlanmak istiyorsan?

"Rubik küpü hızlı çözme" diye arama yaptığında, tüm rehberler sana aynı şeyi söyleyecektir: 30 saniye altına inmek istiyorsan, önce yüzlerce CFOP algoritmasını ezberle.

Bu yazı sana, hiç algoritma ezberlemeden de 30 saniye altına inebileceğini göstermek istiyor.

<!--more-->

Rubik küpünü ilk kez 7 Mayıs 2026'da baştan sona çözdüğümden, 4 Ağustos'ta Ao100 ortalamasını 30 saniye altına düşürmeme kadar 89 gün sürdü. Bu süre zarfında tek bir CFOP algoritması bile ezberlemedim, sadece boş zamanlarımda oynadım. Bu, kayıtlı 4441 çözümümün zamanlama verileri.

![4441 çözümün performans eğrisi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/02-solve-times.webp)

*Şekil: 4441 çözümün performans eğrisi. Gri çizgi her bir çözümün süresi, koyu çizgi Ao100 trendi, kırmızı noktalar ise kişisel rekorun kırıldığı anlar. En iyi Ao100 ortalaması 28.22 saniye.*

Bilinçli ve düzenli pratik yaparak, herkes birkaç ay içinde sıfırdan sub-30 seviyesine ulaşabilir.

30 saniyenin altı ne demek biliyor musun? [1982'deki ilk Rubik Küpü Dünya Şampiyonası](https://en.wikipedia.org/wiki/1982_World_Rubik%27s_Cube_Championship)'nda şampiyonun derecesi 22.95 saniyeydi, bu daha sonra WCA tarafından tanınan ilk resmi dünya rekoruydu; 10. sıradaki isim 29.11 saniye ile, bir sonraki bölümde bahsedeceğimiz CFOP'nin mucidi Jessica Fridrich'in ta kendisiydi. Başka bir deyişle, bugün bir amatörün birkaç ayda elde ettiği sub-30 derecesi, 1982'de dünya ilk onuna girebilirdi.

Şimdi sana, bunu adım adım nasıl başardığımı ve tüm bu pratik yöntemini eksiksiz bir şekilde paylaşacağım.

## Hızlı Çözme Dünyası Neden Algoritma Ezberliyor?

Önce bir şeyi açıklığa kavuşturalım: Neden "hız" ve "algoritma ezberleme" insanların zihninde bu kadar iç içe geçmiş durumda?

1980'lerin başında, Çek asıllı profesör Jessica Fridrich (daha sonra ABD'deki Binghamton Üniversitesi'nde dijital adli tıp araştırmaları yaptı), katman katman bir çözüm yöntemi geliştirdi ve bu daha sonra CFOP (Cross, F2L, OLL, PLL) olarak adlandırıldı. Bu yöntemin fikri şuydu: Üst katmandaki tüm olası durumları listelemek ve her duruma en iyi algoritmayı atamak. Durumu tanır, algoritmayı uygularsın, düşünmene gerek kalmaz.

![Jessica Fridrich ve ofisindeki Rubik küpü](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/03-jessica-fridrich.webp)

*Şekil: Jessica Fridrich ve ofisindeki Rubik küpü. 1982'de ilk Dünya Şampiyonası'nda 29.11 saniye ile 10. sırayı aldı ve CFOP (Fridrich Metodu) onun adıyla anılmaktadır.*

Bu yöntem inanılmaz hızlı. Neredeyse tüm dünya rekorları CFOP ile kırılıyor. Bu yüzden tüm rehberler bunu öğretiyor, tüm videolar bunu anlatıyor, "hızlı çözme öğrenmek" demek "CFOP öğrenmek" demek haline geldi ve CFOP öğrenmek de 119 algoritma ezberlemek demek.

Ancak dikkat et, "algoritma ezberlemek" CFOP'nin bir özelliğidir, "hızın" kendisinin bir özelliği değildir. CFOP'nin ezber gerektirmesi, tümevarım yolunu seçmiş olmasındandır. Tümevarım ise hafıza gerektirir, bu da ödenen bedeldir.

Peki, bu tümevarım yolunu izlemeyen bir yöntem var mı? Var.

## Algoritma Ezberlemeden Çözme Yöntemi: Roux Metodu

2003 yılında, Fransız Gilles Roux tamamen farklı bir yaklaşım duyurdu. Katman katman çözmek yerine, önce sol ve sağda iki adet 1×2×3 "blok" oluşturur, ardından üst katmandaki dört köşeyi hizalar ve son olarak geriye kalan altı kenar parçayı orta katman (M) ve üst katman (U) hareketlerini kullanarak tamamlar.

![Gilles Roux yarışmada](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/04-gilles-roux.webp)

*Şekil: Gilles Roux yarışmada. Eski bir yarışma videosundan alınmıştır, görüntü yapay zeka ile iyileştirilmiştir.*

Önceki yazıda bu çerçeveyi kullanarak bir kez çözmüştük. Şimdi dört adımını tekrar gözden geçirelim, bu kez "her adımda ne ezberlemem gerekiyor" konusuna odaklanalım:

| Adım | İçerik | Ezberlenmesi Gereken Algoritma Sayısı |
| --- | --- | --- |
| 1. Sol Blok (FB) | 1×2×3'lük bir blok oluşturmak | 0, tamamen gözlem |
| 2. Sağ Blok (SB) | Simetrik olarak diğerini oluşturmak | 0, tamamen gözlem |
| 3. CMLL | Üst katman dört köşe parçasını hizalamak | 9, hepsi üçlü permütasyondan türetilebilir |
| 4. LSE | Son altı kenar parça | 0, sadece üst katman ve orta katman (M ve U) hareketleri kullanılır |

Dört adımın üçünde hiçbir algoritma gerekmiyor. İhtiyaç duyulan tek CMLL, tüm durumları topladığında 42 adettir, ancak 42 algoritmanın hepsine ihtiyacın yok. Önceki yazıda bahsettiğimiz köşe üçlü permütasyon algoritması olan R U' L' U R' U' L U, aynası ve birkaç varyantı ile tüm durumları kapsayabilir, sadece biraz daha yavaş olur.

![Roux'nun dört adımı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/05-roux-four-steps.webp)

*Şekil: Roux'nun dört adımı. Her adım, o ana kadar hizalanmış parçaları gösterir: Sol Blok → Sağ Blok → CMLL (üst katman dört köşe) → LSE (son altı kenar). 3D küp sayfamdaki "Çözüm" panelinden alınmıştır.*

Roux'nun algoritma ezberlemeye ihtiyaç duymamasının nedeni budur: Ezber gerektiren kısmı çok küçük bir köşeye sıkıştırmış, geri kalan her şeyi gözlem, anlama ve pratik etmeye bırakmıştır.

## 165 Saniyeden 28 Saniyeye: Dört Aşama

![Dört aşamanın zaman aralığı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/01-four-stages.webp)

*Şekil: Dört aşamanın zaman aralığı. Birinci aşama 3 hafta, ikinci aşama 11 gün, üçüncü aşama iki ay, dördüncü aşama bugüne kadar.*

### Aşama Bir: 165 Saniye → 60 Saniye (1-3. Haftalar)

**Veri**: 7 Mayıs'tan 27 Mayıs'a kadar. İlk hafta ortalaması 165 saniye, üçüncü hafta 68 saniye. Bu aşama acemilikten başlangıç seviyesine geçiş aşamasıdır; tekrarlar içinde her hareketin tam olarak ne anlama geldiğini, hangi parçaların hareket ettiğini yavaş yavaş anlarsın.

**Nerede Takılıyorsun**: Sol blok çok pratik değil, her bir köşe-kenar çiftini bulmak çok uzun sürüyor. Ve bir çifti bulduktan sonra, yeni başlayanlar her zaman durup gözlem yapmayı severler.

![Yeni başlayanlar zamanlarını nerede harcar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/06-looking-vs-turning.webp)

*Şekil: Yeni başlayanlar zamanlarını nerede harcar. Eller durur, gözler küp üzerinde gezinir, "bakma" süresi "çevirme" süresinden kat kat fazladır.*

**Ne Pratik Etmeli**:

Bu aşamada en büyük düşman yavaş eller değil, yavaş gözlerdir. "Bulmaya" harcadığın süre "çevirmeye" harcadığından çok daha fazladır. Bu yüzden:

- Sabit bir gözlem pozisyonu belirle, küpü çevirme. Önceki yazıda bahsettiğim gibi, Roux'da gözlem açısı sabittir. Bu aşamada "küpü döndürmeme"yi kas hafızana yerleştirmen gerekiyor. Her küpü döndürmek istediğinde dur, kendine sor: Bu açıdan istediğim parçayı görebiliyor muyum?
- Yavaş çözme (slow solving). Zaman tutma, ama hareketlerin kesintisiz olsun, hiçbir duraklama olmasın; her hareket çok yavaş olabilir, ama duraklama olmasın. Önemli olan, elin bir önceki hareketi yaparken gözlerinin bir sonraki harekete odaklanmasıdır, bu yavaş çözmenin özüdür. Bu yavaşlıyormuş gibi görünse de, aslında gözlerinin parçaların konumunu ve gitmeleri gereken yeri görme yeteneğini geliştiriyorsun.
- Sadece ilk bloğu pratik et. Küpü karıştır, sol bloğu yap, tekrar karıştır, tekrar sol bloğu yap. İleri gitme. İlk blok, Roux'daki en özgür adımdır ve gözlem becerilerini en çok geliştiren adımdır.

Bu aşamada yeni algoritma öğrenme. Şu anki darboğazın algoritmalarda değil.

### Aşama İki: 60 Saniye → 40 Saniye (4-5. Haftalar)

**Veri**: 27 Mayıs'tan 7 Haziran'a, 11 gün. Bu, tüm süreçteki en hızlı düşüş dönemiydi; bu evre en kolay olumlu geri bildirim alınan aşamadır, her öğrenme ve hareket optimizasyonu doğrudan süreye yansır ve her gün rekor kırmanın verdiği zevk pek çok şeyle kıyaslanamaz.

**Nerede Takılıyorsun**: Hareketler kesintisiz değil. Küp takılıyor.

**Ne Pratik Etmeli**:

Bu aşamada, her adımın hareketlerini optimize etmen, anlama üzerine her hareketin akıcılığını artırman gerekiyor.

- İkinci blok (SB). İkinci blok, alan yarıya indiği ve tamamlanmış sol bloğun bozulmaması gerektiği için ilk bloktan daha zordur. Anahtar hareketler R, r (sağ iki katman), M, U'dur. Bu aşamada, sol bloğun asla bozulmaması için parçaları hareket ettirmek için R yerine r ve M kullanmayı öğrenmelisin. Hareket adımlarını optimize etmek, zaman kazanmaktır. Örneğin, üç kez saat yönünde çevirmek, bir kez saat yönünün tersine çevirmeye denktir.
- M katmanını akıcı kullan. Roux'nun son adımı tamamen M ve U hareketlerinden oluşur, M katmanını akıcı döndürüp döndürememen doğrudan alt sınırını belirler. Yüzük veya orta parmağını kullanarak M'yi it, M' U M' U gibi ritimleri pratik etmeye başla.
- CMLL şekillerini tanıma. Önceki yazıda, üçlü permütasyon ile dört köşeyi "deneyerek" hizalamıştık. Şimdi önce bakıp sonra yapmaya başlaman gerekiyor: Üst katmanı döndürmeden önce, dört köşenin sarı yönelimine bir göz at, 0, 1, 2 veya 4 iyi köşe olup olmadığını belirle ve doğrudan ilgili hareketi yap. Çok az sayıda algoritma öğrenerek de verimlilikte büyük bir artış sağlayabilirsin, bu çok uygun maliyetlidir. Bu algoritmaların büyük bir kısmını ezberlemene gerek yok, yaptıkça anlarsın.

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <img src="/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/07-second-block.webp" alt="Sağ blok oluşturulurken bakış açısı" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
  <img src="/uploads/images/images/solve-rubiks-cube-sub-30-without-memorizing/08-m-prime-u-m.webp" alt="M' U M" style="flex: 1 1 0; min-width: 0; max-width: 50%;" />
</div>

*Şekil sol: Sağ blok oluşturulurken bakış açısı. Sol blok tamamlandı, sağdaki köşe-kenar çiftini yerleştirmek için sadece R, r, M, U dört hareketi kullanılır, sol bloğa asla dokunulmaz. Şekil sağ: M' U M, Roux'nun ikinci yarısında en çok kullanılan hareket dizisi. Orta katman yukarı, üst katman bir kez döner, orta katman geri döner, üç adımda üst katman ve orta katmandaki bir çift kenarı değiştirir.*

Yeni başlayanlar için son derece dost canlısı, basitleştirilmiş [Roux Algoritma Kütüphanesi](/tr/projects/rubiks-cube/roux#cmll)'ne bakabilirsin. CMLL sayfası iki aşamalıdır: 7 yönelim algoritması + 2 konumlandırma algoritması, toplam 9 adet. Bu, hız artışı için çok uygun maliyetli bir seçenektir, kolayca öğrenilebilir ve her bir grubu akıcı hale getirdiğinde yaklaşık 1-2 saniye kazanabilirsin. Biraz pratikle, kısa sürede ustalaşacaksın, bazıları önceki makalede zaten tanıtılmıştı ve hepsini ezberlemene gerek kalmadan 30 saniye altına inmeni sağlayabilir.

![İki aşamalı CMLL'nin ilk adımı, yedi köşe yönelimi](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/09-cmll-orient.webp)

*Şekil: İki aşamalı CMLL'nin ilk adımı, yedi köşe yönelimi. Üstten görünümde sarı, yukarı bakan üst yüzey rengidir, dıştaki küçük çubuklar o köşenin üst yüzey renginin yan tarafa doğru yönelimini gösterir. Sarı köşelerin sayısına göre şekli tanı: 0 ise H veya Pi, 1 ise S veya AS, 2 ise U, T veya L.*

Sarı üst kısmı hizaladıktan sonra, köşe parçalarının yanlarını hizalamak için bu iki algoritmayı kullanabilirsin.

Eğer bir yüz zaten aynı renkteyse, örneğin kırmızı zaten aynı yüzdeyse, onu sola çevirip bitişik takas algoritmasını seçebilirsin. Hiçbir yüz aynı renkte değilse, çapraz takas algoritmasını seçmelisin.

![İki aşamalı CMLL'nin ikinci adımı, iki köşe konumu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/10-cmll-permute.webp)

*Şekil: İki aşamalı CMLL'nin ikinci adımı, iki köşe konumu. Sol resimde sol taraftaki iki köşenin kırmızısı zaten aynı, bitişik takas kullanılır; sağ resimde hiçbir yüz aynı değil, çapraz takas kullanılır.*

Her algoritma grubunu anlamak için bolca yavaş çözme yapabilirsin, bunları algoritma olarak değil, belirli sabit hareketler olarak gör. Bu hareketleri yavaş yavaş kendin de keşfedebilirsin, ancak burada listelenmeleri sana kestirme yol sağlar.

Bir şey daha var, her türlü pratikten daha etkili: Biraz para harca ve yeni bir küp al. Eğer elindeki hala dönerken takır tukur ses çıkaran, fazla döndürünce sıkışan eski bir küpse, manyetik özellikli modern bir 3x3 al. En yeni küpler, mühendislik optimizasyonunun gücünü hissettirecek; pürüzsüz dönüş, otomatik hizalama ve neredeyse hiç sıkışma yaşanmayacak. Sadece küp değiştirmek bile ortalama süreni bir anda 15 saniye kadar hızlandırabilir. Fiyat performans olarak en iyi seçenek [MoYu RS3 M V5 (manyetik süspansiyon + top çekirdekli versiyon)](https://www.amazon.com/dp/B0FH9NXF2P?tag=philoli-20) yaklaşık yirmi dolar civarında ve sub-20 seviyesine kadar yeterli olacaktır.

### Aşama Üç: 40 Saniye → 30 Saniye (5. Hafta – 13. Hafta, İki Ay)

**Veri**: 7 Haziran'dan 4 Ağustos'a kadar. Ao100 ortalaması 39.8 saniyeden 29.9 saniyeye düşmek 58 gün sürdü. Bu aşamada zaman zaman 30 saniyenin altında dereceler elde edilebilir, ancak bu sadece çok şanslı olunduğunda gerçekleşir. Ortalama çözüm süresi azaldıkça, 1 saniye ilerleme kaydetmenin zorluğu katlanarak artacaktır. (Ao100, en iyi ve en kötü %5'lik dereceler atıldıktan sonra son 100 çözümün ortalama süresini temsil eder.)

![Günlük ortalama sonuçlar](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/11-daily-average.webp)

*Şekil: Günlük ortalama sonuçlar. Haziran ortasından sonra eğri neredeyse düzleşti, 30-40 saniye arasında iki ay boyunca takıldı.*

**Nerede Takılıyorsun**: Üst katmandaki altı kenar parçayı çözmek çok yavaş, mantığını anlamıyorsun, her seferinde tekrar tekrar denemeye çalışıyorsun, bu da çok zaman kaybettiriyor. Sol blok ve sağ blok hala yeterince pratik değil.

**Ne Pratik Etmeli**:

- EO (Edge Orientation) tanıma. Önceki yazıda bahsetmiştim, yanlış yönlenmiş kenarların sadece birkaç durumu var: 0, 0 olmayan 4 olmayan, 4 (üstte 2, altta 2), 4 (hepsi üst katmanda), 4 (üstte 3, altta 1). Bu aşamada hedef: Blokları tamamladığın anda, saymadan, bir bakışta hangi durumda olduğunu anlamak. Pratik yöntemi, küpü karıştırıp sadece CMLL bitene kadar yapmak, sonra duraklayıp yanlış yönlenmiş kenar sayısını söylemek ve sonra devam etmek.
- Birçok kişi buradaki hareketleri anlamıyor. EO aşamasının nihai amacı, üstte 3, altta 1 ok şeklini oluşturmaktır, çünkü tam form sadece bir karıştırma hareketiyle ok şekline dönüşür. Bu nedenle, tersine düşünülürse, bu, çözümü tamamlamadan önceki son adımdır. Bu yüzden, kaç tane yanlış yönlenmiş kenar olursa olsun, nihai amaç bir ok şekli oluşturmaktır. Üstte 4 yanlış yönlenmiş kenar varsa, bunlardan bir çift üst-alt kenarı değiştirerek birini aşağı indirip ok şeklini elde edersin. Üstte 2, altta 2 varsa, bunlardan bir çift üst-alt kenarı değiştirerek birini yukarı çıkarıp ok şeklini elde edersin. Eğer üstte 1, altta 1 veya üstte 2 varsa, M' U M kullanarak önce önceki duruma dönüştürür, sonra ok şeklini oluşturursun. Bolca gözlem ve düşünmeyle, 1/1 için en iyi adımları kendin keşfedebilirsin.

  ![Ok şekli](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/12-eo-arrow.webp)

  *Şekil: Ok şekli. Üst katmandaki üç yanlış yönlenmiş kenar (turkuaz vurgulu) bir ok şeklinde dizilmiş, alt katmandaki yanlış yönlenmiş kenarı işaret ediyor. Bu durumda bir M' U M hareketi dördünü birden hizalayabilir. [Bu durumu 3D küpte açarak](/tr/projects/rubiks-cube/#s=M'%20U'%20M&p=M'%20U%20M&l=400&c=2ZR0BZ&h=104240) adım adım görebilirsin.*

- Bolca look-ahead (ileriyi görme) pratiği yap. 40 saniyeden 30 saniyeye inmek için en önemli şey budur ve aynı zamanda en sezgiye aykırı olanıdır: Biraz daha yavaş çevir, biraz daha uzağa bak. Sol bloğu yaparken, yerleştirdiğin parçaya değil, bir sonraki parçanın nerede olduğuna bak. Başlangıçta çok garip gelecek, derecelerin önce kötüleşecek, ama bir hafta ısrar edersen aniden iyileşecektir.
- CMLL'de tereddüt etme. Eğer bir hareketi her seferinde düşünmeden yapamıyorsan, o henüz senin değildir. Her hareketi tek tek 50 kez pratik et, ta ki şekli gördüğünde elin hareket edene kadar.

![EO'nun altı durumu](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/13-eo-cases.webp)

*Şekil: EO'nun altı durumu. Sol üst köşedeki etiket, yanlış yönlenmiş kenar sayısını (üst / alt) gösterir, sarı iyi yönlenmiş kenarları, turkuaz çerçeve ise yanlış yönlenmiş kenarları belirtir. Sadece ok şeklindeki durum algoritma gerektirir, diğer beş durum önce oka dönüştürülür.*

Sol ve sağ kenar parçalarını hizalamak için, sarı üst, beyaz alt yüzey ve sol blok kırmızı olacak şekilde, hizalanması gerekenler sarı-kırmızı kenar parça + sarı-turuncu kenar parça (vurgulu yerler) olacaktır. Ana fikir, sarı-kırmızı kenar parçayı ve sarı-turuncu kenar parçayı, üst-alt kenar takası yoluyla alt yüzeye indirmektir. İki kenar parça alt yüzeyde karşı karşıya geldiğinde, üst yüzeyi uygun konuma çevirirsen, M2 U veya M2 U' ile U katmanının sol ve sağ kenar parçalarını hizalayabilirsin.

Daha iyi anlamana yardımcı olmak için, EO'nun altı durumunu [Roux Metodu Algoritma Kütüphanesi'nin LSE sayfasında](/tr/projects/rubiks-cube/roux#lse) düzenledim. Her birine "detayları gör"e tıklayarak 3D küpte ilgili durumu açabilir, ilgisiz blokları otomatik olarak gizleyebilir ve hareket ettirilecek kenarları vurgulayabilirsin. Aynı sayfada UL/UR hizalama ve son dört kenarın tüm durumları da bulunur.

Bu aşamada pratik miktarının azalması kötü bir şey değildir. Plato dönemi sadece nicelik artırarak geçilemez, belirli bir kötü alışkanlığı değiştirerek aşılır. Benim deneyimime göre, her seferinde sadece bir şeyi değiştirmek en iyisidir.

### Aşama Dört: 30 Saniye → 28 Saniye (13. Haftadan Sonra)

**Veri**: 4 Ağustos'tan sonra. Eylül ayı boyunca kayıtlı pratik sayısı 122 idi, aslında birçok pratik kaydedilmedi. Küpü masamdaki bir oyuncak haline getirdim, elimi uzatıp oynuyorum; keyfim yerindeyken birkaç kez, gergin veya endişeliyken birkaç kez, iş aralarında birkaç kez, canım sıkıldığında birkaç kez oynuyorum, küp çözmeyi hayatımın bir parçası haline getirdim. Ao100 ortalaması da yavaş yavaş 29.9'dan 28.2'ye düştü.

**Nerede Takılıyorsun**: Belirgin bir darboğaz yok, sadece yeterince pratik değil.

**Ne Pratik Etmeli**:

Eğer ortalama hızın hala 30 saniyenin üzerindeyse, yapman gereken tek şey yeni algoritmalar ezberlemek yerine bolca pratik etmeye devam etmektir.

Sürekli olarak yavaş çözme ile look-ahead pratiği yaparak daha da hızlanacaksın.

Küpü eline alıp oynamaya devam et, masan gibi kolayca ulaşabileceğin bir yere koy, böylece iş aralarında oynayabilirsin. Ayrıca sık sık kendi çözümlerinin videolarını çekerek hangi aşamada en çok zaman kaybettiğini görebilir ve buna yönelik optimizasyonlar yapabilirsin. İşte bu bilinçli pratiktir; ilerleme hızın, sıradan pratiklerinin toplam sayısına değil, bilinçli pratiklerinin sayısına bağlıdır.

Ve sonra fark edeceksin ki, 30-35 saniye darboğazını aştıktan sonra hızın bir basamak daha düşmüş.

Bu aşamaya ulaştıysan seni tebrik ederim, yeni başlayanlara göre artık çok yetenekli bir oyuncusun!

## Bir Sonraki Adımda İlerleme

Öncelikle Roux metodunun üst sınırı konusunda endişelenme. En iyi oyuncular arasında Roux kullanarak dünya sıralamasında üst sıralara çıkanlar da var, metodun kendisinin bir üst sınırı yok.

Üstelik, neredeyse her tek elle çözüm yapan dünya çapında oyuncu, Roux metodunu kullanıyor, çünkü gerçekten tek elle çözmek için de çok uygun.

**Resmi yarışmalarda (WCA) Roux kullanan en hızlı dereceler:**

- Tek çözüm 4.11 saniye, [Sean Patrick Villanueva](https://en.wikipedia.org/wiki/Sean_Patrick_Villanueva) (Filipinler), 2023 Valenzuela Cubing Open, Roux'nun resmi olarak tanınan en hızlı tek çözümü ([yeniden yapım videosu](https://www.youtube.com/watch?v=5H4TRJSUm-U))
- Ortalama 5.98 saniye, yine aynı kişi, 2019, o zaman Asya rekoruydu ve tarihteki üçüncü resmi sub-6 ortalamaydı ([WCA profili](https://www.worldcubeassociation.org/persons/2017VILL41))
- Aynı zamanda [tek elle dünya rekoru sahibidir](https://www.ateneo.edu/news/2024/07/02/sean-villanueva-achieves-total-domination-one-handed-speedcubing-new-world-record): Ortalama 8.09, tek çözüm 6.05 (2024). Tek elle çözüm yapanlar arasında Roux'nun en iyi çözüm yöntemi olduğu yaygın olarak kabul edilir.

Ancak 15 saniyeye inmek için mevcut iki aşamalı CMLL'den tek seferde tamamlamaya geçmek ve daha karmaşık algoritmaları ezberlemek gerekir.

Yine de ben özgürce keşfetmekten yanayım; keşfederek algoritmaları tamamen anlamak, hatta parmaklarına oturan kendi algoritmalarını türetmek, körü körüne ezberlemekten çok daha keyifli.

Rubik küpü zaten bir zeka oyunudur, hafıza oyunu değil. Sadece mantığı kavrayarak her adımda ne yaptığını bilebilir, üç ay küpe dokunmasan bile unutmaz ve karşına çıkan bilmediğin herhangi bir küpün çözümünü bile akıl yürüterek bulabilirsin.

## Özet

![Çözüm tamamlandı](/uploads/images/solve-rubiks-cube-sub-30-without-memorizing/14-solved.webp)

*Şekil: Çözüm tamamlandı.*

Küpü çözebilmekten 30 saniye altına inmek, algoritma ezberleme süreci değil, el, göz ve beynin koordinasyonunu eğitme sürecidir.

Dört aşama, dört şey: Önce küpü çevirmeden bakmayı öğren, sonra sol bloğu bozmadan sağ bloğu yapmayı öğren, sonra bu adımı yaparken bir sonraki adımı görmeyi öğren ve son olarak elinin gözüne yetişmesini sağla.

Hızın kaynağı algoritmalar değil. Gözlem yeteneğidir.

Her aşamadaki ilerlemenle pozitif geri bildirim oluşturmayı öğren, böylece pratik sıkıcı olmaktan çıkar, özellikle de yeni bir rekor kırdığında yaşadığın sürpriz sevinçle. Özellikle başlangıç ve orta seviyelerde, her gün rekor kırmanın verdiği mutluluğu yaşayacaksın.

Yazıdaki tüm algoritmaları ve durumları [Roux Metodu Algoritma Kütüphanesi](/tr/projects/rubiks-cube/roux)'nda düzenledim, takıldığında dönüp bakabilirsin.

Rubik küpü dünyasının keyfi sonsuzdur, iyi eğlenceler dilerim.

## Ek 1: Her Aşama İçin Pratik Listesi

**Aşama Bir (> 60 saniye)**

- Sabit gözlem pozisyonu, tüm çözüm süresince küpü döndürme
- Bir sonraki istenen rengi duraklamadan bulma
- Yavaş çözme, her adımda niyetini söyleme
- Sadece sol bloğu pratik et, 50 kez tekrarla

**Aşama İki (60 → 40 saniye)**

- Sağ bloğu sadece R, r, M, U kullanarak yap, sol bloğa dokunma
- İki aşamalı CMLL pratiği
- M' U M' U ritim pratiği, günde 5 dakika

**Aşama Üç (40 → 30 saniye)**

- CMLL bitince durakla, yanlış yönlenmiş kenar sayısını bir bakışta söyle
- Yavaş çözme + look-ahead: Gözlerin her zaman bir sonraki parçada olsun
- Günde en az 20 kaliteli çözüm

**Aşama Dört (< 30 saniye)**

- Videolar çekerek duraklamaları bul
- Parmak hareketleri: R U R' U' tek parmak hareketleri, M katmanı yüzük parmağı
- Günde 20 kaliteli çözüm, nicelik değil nitelik

## Ek 2: Araçlar

- **csTimer**: [cstimer.net](https://cstimer.net/). Ao5 / Ao12 / Ao100 istatistiklerini aç, Ao100 senin gerçek seviyeni gösterir, tek çözüm şanstır.
- **3D Rubik Küpü**: [philoli.com/zh/projects/rubiks-cube](/tr/projects/rubiks-cube/). Bu makaledeki tüm algoritmaları buraya girerek animasyonunu izleyebilirsin.
- **Roux Metodu Yeni Başlayan Dostu Algoritma Kütüphanesi**: [philoli.com/zh/projects/rubiks-cube/roux](/tr/projects/rubiks-cube/roux).
- **csTimer Eğitim Analizcisi**: [philoli.com/zh/projects/rubiks-cube/analyzer](/tr/projects/rubiks-cube/analyzer). csTimer'dan dışa aktardığın dosyayı buraya sürükle, kendi performans eğrini, Ao5/Ao12/Ao100 eğrilerini, PB gelişmelerini, dönüm noktası tablosunu ve Power Law pratik eğrisini görebilirsin.

*Bu makale Amazon iştirak bağlantıları içermektedir: Bağlantılar aracılığıyla yapılan satın alımlarda küçük bir komisyon alırım, senin fiyatın değişmez.*

## Daha Fazla Okuma

- [Algoritma Ezberlemeden Rubik Küpünü Nasıl Çözersin: İlkokul Öğrencileri Bile Anlayabilir](/tr/blog/solve-rubiks-cube-without-formulas)
