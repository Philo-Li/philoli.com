---
title: Sıfırdan Hexo Blog Kurulumu: Basit Rehber (2024 Sürümü)
date: 2024-04-11 00:25:20
tags: Blog Kurulumu
categories: Günlük Uğraşlar
---
O çirkin blog sitelerinin arayüzlerinden sıkılmadınız mı? Bitmek bilmeyen bildirimlerden gına mı geldi? Kendi blogunuzu kurmayı çoktan düşündünüz ama karmaşık rehberler ve baş ağrıtan kodlarla karşılaşınca vazgeçtiniz mi? O zaman tebrikler! Bu yazı, kendi blogunuzu adım adım, en basit ve anlaşılır şekilde kurmanız için size rehberlik edecek. Tek yapmanız gereken biraz sabırlı olmak ve adımları dikkatle takip etmek.

<!--more-->

Hızlı, sade ve verimli bir blog çatısı olan Hexo, yeni başlayanlar için tam bir nimet. GitHub ise bizi ek sunucu kiralama ve dağıtma zahmetinden kurtarıyor. Bu nedenle, bu yazıda Hexo ve GitHub kullanarak bir blog kuracağız.

2018 yılında [Sıfırdan Blog Kurulumu: Basit Rehber](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/) başlıklı bir yazı yazmıştım. Ancak eklentilerin güncellenmesi nedeniyle bazı detayların değiştirilmesi gerekti. Bu yüzden 2024 sürümü olarak bu basit rehberi yeniden sunuyorum.

### Hazırlıklar

*   node.js indirin ve kurun ([resmi siteden indirin ve kurun](https://nodejs.org/en/))
*   git indirin ve kurun ([resmi siteden indirin ve kurun](https://git-scm.com/downloads))

### Hexo Statik Blogu Yerel Olarak Kurma

*   Hexo çatısını kurun: Komut İstemi'ni (CMD) açın ve şunu çalıştırın:
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   MyBlog gibi yeni bir klasör oluşturun, bu klasöre girin, sağ tıklayarak git'i çalıştırın ve şunu yazın:

 ```bash
 $ hexo init
 ```

*   Hexo şablonu oluşturulduktan sonra, npm'i kurun ve şunu çalıştırın:

 ```bash
$ npm install
 ```

Evet, blogun ana kısmı tamamlandı! Şimdi bir göz atalım. Şunu çalıştırın:

```bash
$ hexo server
```

Şimdi tarayıcınızı açın ve localhost:4000 adresini yazarak blogunuzun mevcut halini görebilirsiniz. Kısa bir heyecan yaşadıktan sonra, Ctrl + C tuşlarına basarak sonraki işlemlere devam edebilirsiniz.

### Kişiselleştirme Ayarları (Başlangıç)

#### Tema Değiştirme

*   Yeni bir tema indirin ([NexT teması]( http://theme-next.iissnan.com/) örneğini kullanarak). Kök dizinde şunu çalıştırın:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Kök dizindeki `_config.yml` dosyasını açın ve `theme` alanını şöyle değiştirin:

 ```bash
theme: next
 ```

*   Görünüm Seçimi: `/themes/next/_config.yml` dosyasını açın ve `scheme` alanını bulun (Ctrl + F ile hızlıca arayabilirsiniz). NexT üç farklı görünüm sunar; beğendiğinizi seçip birinin başındaki # işaretini kaldırabilirsiniz (Sonrasında genellikle bu iki dosyayı düzenleyeceksiniz: _site yapılandırma dosyası_ ve _tema yapılandırma dosyası_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Etkisini görmek için aşağıdaki komutları çalıştırabilirsiniz (bundan sonra her efekt görmek istediğinizde bu adımı tekrarlayabilirsiniz):

```bash
hexo g #veya hexo generate
hexo server
```

#### Site Ayarları

*   Kök dizindeki site yapılandırma dosyası `_config.yml` dosyasını bir düzenleyici ile açın (Windows'ta Not Defteri ile düzenlemeyin, Türkçe karakterlerde sorunlar çıkabilir) ve `Site` alanını değiştirin. İki nokta üst üste işaretinden sonra bir boşluk bırakmaya dikkat edin:

 ```bash
 # Site
 title: Bilinmeyen Dünya               // Blog adı
 subtitle:
 description:  Do something cool // Bir imza cümlesi
 author: LulalaP                 // Yazar
 language: tr               // Web sitesi dili
 timezone:
 ```

### Kenar Çubuğu Avatarı Ayarlama

*   `/source` içinde `uploads` adında yeni bir klasör oluşturun ve avatar resminizi (örn: avatar.jpg) bu klasöre yerleştirin.

*   `/themes/next/_config.yml` dosyasını açın, `avatar` alanını bulun ve şöyle değiştirin:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Blog Sayfalarını Tamamlama

#### Menü Ekleme
*   `/themes/next/_config.yml` dosyasını açın, `menu` alanında eklemek istediğiniz menülerin önündeki yorum işaretini kaldırın. Başka menüler eklemek isterseniz ihtiyacınıza göre ekleyebilirsiniz (alan girintisine dikkat edin):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Kategoriler Sayfası Oluşturma

*   `categories` adında yeni bir sayfa oluşturun, komut şöyle:

 ```bash
 $ hexo new page categories
 ```

*   Yeni oluşturduğunuz `/source/categories/index.md` sayfasını düzenleyin ve sayfa türünü `categories` olarak ayarlayın. Tema, bu sayfada tüm kategorileri otomatik olarak gösterecektir (iki nokta üst üste işaretinden sonraki boşluğu korumaya dikkat edin).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Etiket Bulutu Sayfası Oluşturma

*   `tags` adında yeni bir sayfa oluşturun, komut şöyle:

 ```bash
 $ hexo new page "tags"
 ```

*   Yeni oluşturduğunuz sayfayı düzenleyin ve sayfa türünü `tags` olarak ayarlayın. Tema, bu sayfada etiket bulutunu otomatik olarak gösterecektir.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "Hakkımda" Sayfası Oluşturma

 *   Yeni bir 'hakkımda' sayfası oluşturun:

 ```bash
 $ hexo new page "about"
 ```

 *   Yeni oluşturduğunuz sayfayı düzenleyin ve ana metin kısmına Markdown formatında bilgilerinizi yazabilirsiniz.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Kenar Çubuğu Sosyal Medya Bağlantılarını Ayarlama

*   Sitenin `_config.yml` dosyasını düzenleyin, `social` alanını bulun ve sosyal medya sitesi adını ve adresini ekleyin. Anahtar-değer formatı `Görünen Ad: Bağlantı Adresi` şeklindedir, örneğin:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   `/themes/next/_config.yml` dosyasını açın, `social_icons` alanı altına sosyal medya sitesi adını (büyük/küçük harf duyarlılığına dikkat edin) ve [ikonunu](http://fontawesome.io/icons/) ekleyin. `enable` seçeneği ikonların gösterilip gösterilmeyeceğini kontrol eder, ikonları kaldırmak için `false` olarak ayarlayabilirsiniz. Örneğin:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Blogu GitHub ile Bağlama

 *   GitHub hesabı oluşturun: Henüz bir GitHub hesabınız yoksa, öncelikle bir hesap oluşturmanız gerekir.

 *   GitHub'da `XXX.github.io` adında bir proje oluşturun, XXX kendi GitHub kullanıcı adınız olacaktır.

 *   Yerel `MyBlog` klasörünüzdeki `_config.yml` yapılandırma dosyasını açın ve içindeki `type` değerini `git` olarak ayarlayın:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Şunu çalıştırın:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Yerel olarak statik dosyaları oluşturun ve bu dosyaları GitHub'a gönderin, şunu çalıştırın:

```bash
hexo g
hexo d
```

Şimdi tarayıcınızı açın ve http://your-name.github.io adresini ziyaret edin. Tebrikler, blogunuz artık kurulmuş durumda!

### Alan Adı Yönlendirme

Şu ana kadar blog kurulumu tamamen bitti ve GitHub alan adıyla erişilebilir durumda. Şimdi bu bloga kısa bir alan adı bağlamak her şeyi daha da mükemmel hale getirecektir.

#### Alan Adı Satın Alma

*   Bir alan adı satın alın. [namesilo.com](https://www.namesilo.com/) adresinden satın almanızı tavsiye ederiz; köklü bir alan adı sağlayıcısı olup uygun fiyatlar ve güvenilir hizmet sunar. Eğer benim referans kodumu `PhiloArt.io` kullanırsanız, 1 USD indirim kazanabilirsiniz. Geçerlilik tarihi 31.12.2025'tir.

### Alan Adı Çözümlemesi

*   Alan adı sağlayıcısı DNS ayarları

*   GitHub Pages'e yönlendirmek için 4 adet A kaydı ekleyin:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Bir adet `CNAME` kaydı ekleyin, `name` olarak `www`, `content` olarak `your-name.github.io` (GitHub Pages adresinize işaret edecek) girin:

 > CNAME —> philo-li.github.io

*   Daha ayrıntılı ayarlar için [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) bölümüne bakabilirsiniz.

*   Blog dizinine CNAME dosyası ekleme

Alan adı çözümlemesini yapılandırdıktan sonra, blog dizinine gidin, `source` klasörü altında `CNAME` adında yeni bir dosya oluşturun (büyük harf olmasına ve uzantısı olmamasına dikkat edin), Not Defteri ile açıp satın aldığınız alan adını yazın, örneğin: `www.philoli.com`

*   Şunu çalıştırın:

```bash
hexo g
hexo d
```

Şimdi tarayıcınızı açın, alan adınızı yazın ve Enter tuşuna basın. Tebrikler, artık kendi bağımsız alan adına sahip bir blogunuz var.

### Yeni Yazı Yayımlama

*   Blogun kök dizininde şunu çalıştırın: `hexo new “İlk Yazım”`. Bu komut, `source/_posts` klasöründe bir `.md` dosyası oluşturacaktır.

*   Bu dosyayı düzenleyin, başlangıç alanlarını şöyle değiştirin:

 ```bash
 title Yazının başlığı
 date Oluşturma tarihi (dosyanın oluşturulma tarihi)
 updated Güncelleme tarihi (dosyanın değiştirilme tarihi)
 comments Yorumları etkinleştirilsin mi? true
 tags Etiketler
 categories Kategoriler
 permalink URL'deki ad (dosya adı)
 ```

*   Ana metni yazın (Markdown kurallarına uygun olarak)

*   Yerel olarak statik dosyaları oluşturun ve bu dosyaları GitHub'a gönderin, şunu çalıştırın:

```bash
hexo g
hexo d
```

### Kişiselleştirme Ayarları (Gelişmiş)

Aşağıda bazı gelişmiş kişiselleştirme blog stil ayarları sunulmuştur. Yeni başlayanlar şimdilik bu bölümü atlayabilirler.

#### RSS Ekleme

 *   Kök dizinde eklentiyi kurun

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Kök dizindeki `_config.yml` dosyasının sonuna şunu ekleyin: (**_İki nokta üst üste işaretinden sonra bir boşluk bırakmaya dikkat edin, aksi takdirde hata oluşacaktır!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   `/themes/next/_config.yml` dosyasını açın, `rss` değerini değiştirin (iki nokta üst üste işaretinden sonra bir boşluk bırakmaya dikkat edin)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Ana Sayfada Yazı Kısaltma
 *   Her yazı yazdığınızda, yazının .md dosyasında kısaltmak istediğiniz yere şunu eklemeniz yeterlidir:

 ```markdown
     <!--more-->
 ```

 *   `/themes/next/_config.yml` dosyasını açın, `scroll_to_more` seçeneğini `false` olarak değiştirin.

#### Yazılardaki Alıntı Metnini Ortala
*   Markdown'ın varsayılan alıntı stilini optimize eder.

```markdown
{% centerquote %}
Alıntı metni
{% endcenterquote %}
```

{% centerquote %}
Alıntı metni
{% endcenterquote %}

#### Kod Bloğu Stilini Değiştirme

*   `/themes/next/_config.yml` dosyasını düzenleyin, `codeblock` yapılandırmasını aşağıdaki gibi değiştirin:

```yml
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # See: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: night eighties
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result.
    show_result: true
    # Available values: default | flat | mac
    style:
```

#### Site Kurulum Tarihini Ayarlama

 *   Sitenin `_config.yml` dosyasını düzenleyin, `since` alanını ekleyin.

```bash
since: 2024
```

#### Yazı Bağlantı Stillerini İyileştirme

*   `themes\next\source\css\_common\components\post\post.styl` dosyasını düzenleyin ve sonuna aşağıdaki CSS stilini ekleyin:

``` css
// link style
.post-body p a{
  color: #0593d3;
  border-bottom: none;
  border-bottom: 1px solid #0593d3;
  &:hover {
    color: #fc6423;
    border-bottom: none;
    border-bottom: 1px solid #fc6423;
  }
}
```

#### Bloga Arka Plan Resmi Ekleme
*   Kök dizindeki `source` klasörü altında `_data` klasörünü oluşturun, `styles.styl` adında yeni bir dosya oluşturun, yeni oluşturduğunuz `source/_data/styles.styl` dosyasını açın ve aşağıdaki içeriği ekleyin:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Resim tam kaplamadığında tekrar edip etmeyeceği ve nasıl tekrar edeceği
    background-attachment:fixed;    //Resmin kaydırma ile birlikte hareket edip etmeyeceği
    background-size: cover;         //Kapsama
    background-position:50% 50%;    //Resim konumu
}
```
*   URL bir resim bağlantısı veya resim dizini olabilir. Resmi `background.jpg` olarak adlandırıp `source/uploads` klasörüne yerleştirebilirsiniz.

#### Blog İçerik Arka Planını Yarı Saydam Yapma
*   Önceki adımda düzenlediğiniz `source/_data/styles.styl` dosyasını açın ve altına aşağıdaki içeriği eklemeye devam edin:

```css

//Blog içeriğinin şeffaflık ayarı
//Yazı içeriğinin şeffaflık ayarı
if (hexo-config('motion.transition.post_block')) {
  .post-block {
    background: rgba(255,255,255,0.9);
    opacity: 0.9;
    radius: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    padding: 40px;
    -webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
    -moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
  }
  .pagination, .comments {
    opacity: 0;
  }

  +tablet() {
    margin: 20px;
    padding: 10px;
  }

  +mobile() {
    margin: 15px;
    padding: 15px;
  }
}


//Kenar çubuğunun şeffaflık ayarı
.sidebar {
  opacity: 0.9;
}

//Menü çubuğunun şeffaflık ayarı
.header-inner {
  background: rgba(255,255,255,0.9);
}

//Arama kutusunun (local-search) şeffaflık ayarı
.popup {
  opacity: 0.9;
}
```

#### Satır İçi Kod Bloğu Stilini Optimize Etme
*   Önceki adımda düzenlediğiniz `source/_data/styles.styl` dosyasını açın ve altına aşağıdaki içeriği eklemeye devam edin:

```css
// Kod etiketi için güzelleştirme
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Web Sitesi Alt Bilgisine Ziyaretçi Sayısı Ekleme

*   Dosyayı düzenleyin:

```css
# copyright etiketini bulun ve etiketin içine kodu ekleyin

<div class="copyright">
# ......Burada zaten bazı yapılandırmalar var
# Buraya yeni kodu ekleyin
</div>

# Eklendikten sonra şöyle görünür:
<div class="copyright">
  # ......Burada zaten bazı yapılandırmalar var
  # Buraya yeni kodu ekleyin
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Değiştirilen efekti yeniden oluşturup önizleyin, sorun yoksa yayımlayın.

```bash
hexo g
hexo s
# Sorun yoksa yayımla
hexo d
```

#### Depoya README.md Dosyası Ekleme

Her projenin genellikle bir `README.md` dosyası bulunur, ancak Hexo ile depoya dağıtım yapıldığında, projedeki `README.md` dosyası üzerine yazılır. Bu nedenle, üzerine yazılmasını önlemek için yapılandırma dosyasını ayarlamak gerekir.

Hexo dizininin `source` kök dizini altına bir `README.md` dosyası ekleyin, site yapılandırma dosyası `_config.yml`'yi düzenleyin ve `skip_render` parametresinin değerini şöyle ayarlayın:

```yml
skip_render: README.md
```
Kaydedip çıkın. `hexo d` komutunu kullanarak blogu bir sonraki dağıttığınızda `README.md` dosyası işlenmeyecektir.

#### Bazı Sık Kullanılan Eklentiler

- Hexo Filter MathJax: Matematiksel formülleri işler
  - Kurulum: `npm install hexo-filter-mathjax`
  - Detaylı yapılandırma: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Yazı kelime sayısını gösterir
  - Kurulum: `npm install hexo-word-counter`
  - Detaylı yapılandırma: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Blog yükleme hızını optimize eder
  - Kurulum: `npm install hexo-optimize`
  - Detaylı yapılandırma: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Daha fazla eklenti: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Kaynak Dosya Yedekleme

- Yerel kaynak dosyalarınızı, özellikle Markdown dosyalarını yedeklemeyi unutmayın. Diğer yapılandırmalar kaybolduğunda blogunuzu normal şekilde yazamazsınız ve baştan ayarlamanız gerekir.
- Aynı GitHub deposunu yedekleme için kullanmanız önerilir.
- Herhangi bir değişiklik yaptığınızda veya günlük olarak yedeklemeniz önerilir.
- Daha fazla kullanım için [Git belgelerine](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) bakabilirsiniz.

```bash
# Daha önce ayarladığınız blog deposu adresini ekleyin
git remote add https://github.com/your-name/your-name.github.io.git

# Mevcut değişiklikleri ekleyin ve kaydedin, bir not düşerek
git add .
git commit -m "Kaynak dosyaları güncellendi"

# Yeni bir dal oluşturun ve ona geçin
git checkout -b source

# Yerel source dalındaki tüm içeriği uzak depodaki source dalına gönderin
git push origin source:source
```

### Farklı Bilgisayarlarda Blog Yazma
- Farklı bilgisayarlarda blog yazarken, temel yazılımları kurmanız, ardından uzak GitHub deposunu yerel olarak çekerek blogu güncellemeniz gerekir.

*   node.js indirin ve kurun ([resmi siteden indirin ve kurun](https://nodejs.org/en/))
*   git indirin ve kurun ([resmi siteden indirin ve kurun](https://git-scm.com/downloads))
*   Hexo çatısını kurun: Komut İstemi'ni (CMD) açın ve şunu çalıştırın:

 ```bash
 npm install -g hexo-cli
```
*   Yerel güncelleme yapın:

```bash
# Depoyu yerel olarak klonlayın
git clone https://github.com/your-name/your-name.github.io.git

# Eğer yerel olarak klonlandıysa, blogu her güncellemeden önce en son dal içeriğini çekmeniz gerekir
git pull origin

# İlgili dala geçin
git checkout source

# Hexo yapılandırması altındaki tüm eklentileri kurduktan sonra blog içeriğini güncellemeye ve düzenlemeye başlayabilirsiniz
npm install

# İçeriği değiştirdikten sonra hemen yedeklemeyi unutmayın (tek seferlik)
git add .
git commit -m "Blog güncellemesi xxx"
git push origin source:source

# En son blog içeriğini alan adı sitesine yayımlayın
hexo clean
hexo g  # Statik dosyaları oluştur
hexo s  # Blog efektini yerel olarak önizle
hexo d  # En son blog içeriğini yayımla
```

### Sık Kullanılan Komutların Özeti

 ```bash
hexo g
# veya hexo generate, kaynak dosyalardan statik web sayfaları oluşturur
hexo d
# veya hexo deploy, GitHub Pages'e yayımlar
hexo s
# veya hexo server, yerel dağıtım testi yapar
hexo clean
# Statik web sayfası önbelleğini temizler, ardından hexo d ile yeniden oluşturur
