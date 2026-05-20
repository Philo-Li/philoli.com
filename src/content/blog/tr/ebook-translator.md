---
layout: blog
title: Kullanışlı ve Basit Bir İki Dilli E-Kitap Çevirmeni Paylaşıyorum
date: 2026-05-21 12:00:00
tags:
  - 工具
  - 阅读
  - AI
categories: 项目分享
description: Tamamen tarayıcı tabanlı çalışan, EPUB ve PDF desteği sunan, 40'tan fazla dil arasında karşılıklı çeviri yapabilen ve iki dilli karşılaştırmalı çıktı veren bir e-kitap çeviri aracı.
---

İngilizce orijinal kitaplar okuma alışkanlığım her zaman vardı. Ancak açık konuşmak gerekirse, bilmediğim kelimelerle veya karmaşık cümle yapılarıyla karşılaştığımda okuma keyfim bir hayli azalıyordu. Piyasadaki çeviri araçları ya sadece web sayfalarını çeviriyor, ya çeviri kaliteleri endişe verici düzeydeydi, ya da çok basit olmayan tasarımlarıyla gereksiz birçok özellik barındırıyordu.

Bu yüzden kendi aracımı geliştirdim: **Ebook Translator**, tamamen tarayıcı tabanlı çalışan bir e-kitap çeviri aracı. Kendi API ANAHTARINIZI yapıştırarak doğrudan kullanabilirsiniz; başlıca tüm yaygın LLM sağlayıcılarını ve özel düğümleri (node) destekler.

Araca buradan ulaşabilirsiniz: [philoli.com/projects/ebook-translator](https://philoli.com/projects/ebook-translator)

<!--more-->

Araç piyasaya sürüldüğü anda büyük beğeni topladı. Mevcut temel özellikleri şunlardır:

- Herhangi bir kitabı çevirebilir, çeviriyi ve orijinal metni iç içe gösterebilir ve 40'tan fazla dil arasında karşılıklı çeviri yapabilir.
- Üç yaygın çeviri stilini özenle geliştirdik: genel ve doğal (orijinal metne yakın), roman ve uzmanlık kitapları. Çeviri sonuçları olağanüstüdür.
- Kitaplardaki matematiksel formüllere de destek sağlar.
- EPUB ve PDF formatlarını destekler.
- Taranmış PDF sürümlerini de destekler; güçlü yapay zeka modellerinin çok modlu özelliklerini kullanarak formülleri de doğru bir şekilde tanır ve bazı eski kitaplarda bile çok iyi sonuçlar verir.
- Uzmanlık kitapları için kullanıcılar kendi terim çeviri tablolarını yükleyebilir, bu sayede ilgili alandaki kitaplar için daha doğru çeviriler elde edebilirler.
- Çeviri ilerlemesi otomatik olarak tarayıcınızın yerel depolama alanına kaydedilir. Sayfayı kapatıp tekrar açtığınızda kaldığınız yerden devam edebilirsiniz. Çevrilen kitaplar geçmişe kaydedilir ve istediğiniz zaman tekrar açıp düzenleyebilir veya dışa aktarabilirsiniz. (Son 10 kitabın çeviri geçmişini destekler).
- Dosyalarınız hiçbir sunucuya yüklenmez; dosya ayrıştırma ve çeviri istekleri tamamen tarayıcınızda tamamlanır.
- "Karmaşıklığı yazılıma, basitliği kullanıcıya bırak" tasarım felsefesiyle, arayüz sade ve zariftir, kullanımı kolay ve anlaşılır, işlevleri ise oldukça güçlüdür. Şimdiden çok sayıda olumlu yorum almıştır.

## İki Dilli Okumanın Faydaları

Hazır konu açılmışken, iki dilli okumanın faydalarından da bahsedelim.

1.  Daha hızlı okuma imkanı sunar. Birçok kitabın içeriği orijinalini okumaya değecek kadar iyi değildir veya yazarın anlatımı oldukça zayıfsa, orijinalini okumak sadece okuma zorluğunu artırır. Yalnızca gerçekten iyi veya mükemmel metinlere sahip kitapları orijinalinden okumak keyifli sayılabilir. Ayrıca Çince, yüksek bilgi yoğunluğuna sahip bir dil olarak kabul edilir; bir milyon kelimelik orijinal bir kitap Çince'ye çevrildiğinde muhtemelen 700-800 bin kelimeye denk gelir. Çok okuyan kişiler için bu tür bir verimlilik artışı oldukça belirgindir.

2.  Üstelik, iki dilli karşılaştırmalı okuma, nasıl kullandığınıza bağlı olarak herhangi bir dilde okuma hızınızı ve becerinizi artırabilir. Bu sadece İngilizce için değil, herhangi bir dil için de geçerlidir. Önce orijinal metni okuyup, ardından bilmediğiniz kelimeleri çeviride nasıl geçtiğini görebilirsiniz. Bunun sözlük kullanmaktan veya yerleşik sözlüklerden daha iyi olmasının sebebi, hızlı olması ve metne bütünleşik olmasıdır; bu şekilde daha çok okudukça kelimeleri tanımaya başlarsınız.

3.  Okuma hacminizi genişletir. Artık dünyanın herhangi bir dilindeki kitapları okuyabilir hale gelirsiniz, sadece kendi bildiğiniz birkaç dille sınırlı kalmazsınız. Bu, bilgi edinme yelpazenizi muazzam ölçüde genişletir. Almanca, Japonca, Fransızca gibi kitapların yanı sıra çeşitli küçük dillerdeki kitap ve dergileri de okuyabilirsiniz.

4.  Dil becerileri orijinal metni hızlı okumaya henüz yeterli olmadığında, takılarak okuma deneyimi kişinin okuma isteğini kırabilir. Bir e-kitap çeviri aracı, bu ilk engelleri aşmaya yardımcı olarak insanlara okumayı sevdirebilir. İlgi çekici ve kaliteli kitapların sağladığı olumlu geri bildirimler, insanları çeşitli zorluklar ve engeller karşısında durmak yerine bilinmeyeni keşfetmeye devam etmeye teşvik eder. Merak her zaman önceliklidir; öncelikle kendi merakınızı koruyun, bunun üzerine çeşitli yeteneklerinizi sürekli geliştirebilirsiniz.

## Kullanım Adımları

1.  [Ebook Translator](https://philoli.com/projects/ebook-translator) adresini açın.
2.  Yapay zeka hizmet sağlayıcınızı seçin ve API Anahtarınızı girin.
3.  Kaynak ve hedef dilleri ayarlayın.
4.  EPUB veya PDF dosyasını yükleyin.
5.  Çeviriye başlamak için bir bölüme tıklayın veya "Kalan Tümünü Çevir" seçeneğiyle toplu çeviri yapın.
6.  Çeviri tamamlandığında, kitap otomatik olarak EPUB formatında indirilecektir. İsterseniz manuel olarak "EPUB İndir" butonuna da tıklayabilirsiniz.

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-03.webp" alt="Ebook Translator Arayüzü" />
</figure>

## Bazı Çeviri Örnekleri

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-02.webp" alt="Çeviri Örneği 1" />
</figure>

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-04.webp" alt="Çeviri Örneği 2" />
</figure>

## Öneri ve Geri Bildirimler

Kullanım sırasında herhangi bir sorunla karşılaşırsanız veya özellik önerileriniz varsa, lütfen bana mesaj bırakın.

Email: hi@philoli.com

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-01.webp" alt="İletişim Bilgileri" />
</figure>

---

> Deneyin: [philoli.com/projects/ebook-translator](https://philoli.com/projects/ebook-translator)

## Daha Fazla Oku

- [12 Harika Kitap Tavsiyesi: 2025 Yılında Okuduğum Yüksek Puanlı Kitaplar Listesi](/zh/blog/2025-top-rated-reading-list)
