---
title: Hướng dẫn ngắn gọn xây dựng blog Hexo từ A đến Z (phiên bản 2024)
date: 2024-04-11 00:25:20
tags: Xây dựng blog
categories: Mày mò
---
Chắc hẳn bạn đã quá chán ngán những giao diện blog thiếu thẩm mỹ, mệt mỏi với những thông báo phiền phức không ngừng nghỉ? Bạn đã ấp ủ ý định xây dựng một blog cho riêng mình từ lâu, nhưng lại ngại bắt đầu vì những hướng dẫn phức tạp và hàng loạt đoạn mã đau đầu? Vậy thì xin chúc mừng bạn, bài viết này sẽ từng bước hướng dẫn bạn cách xây dựng blog của riêng mình một cách dễ hiểu nhất. Bạn chỉ cần một chút kiên nhẫn và làm theo từng bước là được.

<!--more-->

Hexo, với tư cách là một framework blog nhanh chóng, gọn gàng và hiệu quả, thực sự là một cứu cánh cho những người mới bắt đầu. Hơn nữa, GitHub lại giúp chúng ta không còn phải lo lắng về việc thuê và triển khai máy chủ. Vì vậy, bài viết này sẽ hướng dẫn bạn cách xây dựng blog bằng Hexo và GitHub.

Tôi từng viết một bài hướng dẫn tương tự vào năm 2018 mang tên [Xây dựng blog từ đầu với hướng dẫn ngắn gọn](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Tuy nhiên, do các plugin đã được cập nhật, có một số chi tiết cần điều chỉnh, vì thế tôi xin giới thiệu lại phiên bản hướng dẫn ngắn gọn năm 2024 này.

### Chuẩn bị

*   Tải và cài đặt Node.js ([tải từ trang chủ](https://nodejs.org/en/))
*   Tải và cài đặt Git ([tải từ trang chủ](https://git-scm.com/downloads))

### Xây dựng blog tĩnh Hexo cục bộ

*   Cài đặt framework Hexo: Mở CMD và chạy lệnh
  
 ```bash
 $ npm install -g hexo-cli
 ```

*   Tạo một thư mục mới, ví dụ MyBlog, sau đó vào thư mục đó, nhấp chuột phải và chọn Git Bash Here (trên Windows), nhập lệnh:

 ```bash
 $ hexo init
 ```

*   Sau khi tạo xong template Hexo, cài đặt các gói npm bằng lệnh:

 ```bash
$ npm install
 ```

Đúng vậy, phần chính của blog đã hoàn thành! Giờ hãy xem thành quả nhé. Chạy lệnh:

```bash
$ hexo server
```

Bây giờ, hãy mở trình duyệt và nhập localhost:4000 để xem blog của bạn trông như thế nào. Vui mừng một chút rồi nhấn Ctrl + C để tiếp tục các bước sau.

### Cài đặt cá nhân hóa (Bước đầu)

#### Thay đổi Theme

*   Tải theme mới (ví dụ theme [NexT](http://theme-next.iissnan.com/)), chạy lệnh trong thư mục gốc của blog:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Mở file `_config.yml` trong thư mục gốc, sửa trường `theme` thành:

 ```bash
theme: next
 ```

*   Chọn giao diện: Mở `/themes/next/_config.yml`, tìm trường `scheme` (có thể dùng Ctrl + F để tìm nhanh). NexT cung cấp bốn giao diện khác nhau, bạn có thể chọn một cái mình thích rồi bỏ dấu # ở đầu dòng (sau này, hai file chính bạn sẽ chỉnh sửa là _site config file_ và _theme config file_ này).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Để xem kết quả, bạn có thể chạy các lệnh sau (có thể lặp lại bước này mỗi khi muốn xem thay đổi):

```bash
hexo g #hoặc hexo generate
hexo server
```

#### Cấu hình trang web

*   Mở file cấu hình trang web `_config.yml` trong thư mục gốc bằng một trình soạn thảo (trên Windows, đừng dùng Notepad vì tiêu đề tiếng Trung có thể bị lỗi font), sửa các trường trong mục `Site`. Lưu ý: sau dấu hai chấm phải có một khoảng trắng:

 ```bash
 # Site
 title: Thế giới chưa biết                //Tên blog
 subtitle:
 description:  Do something cool //Một câu khẩu hiệu
 author: LulalaP                 //Tác giả
 language: zh-Hans               //Ngôn ngữ trang web
 timezone:
 ```

### Đặt ảnh đại diện cho thanh bên

*   Tạo một thư mục mới có tên `uploads` trong `/source`, sau đó đặt ảnh đại diện (ví dụ: avatar.jpg) vào thư mục này.

*   Mở `/themes/next/_config.yml`, tìm trường `avatar` và sửa thành:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Hoàn thiện các trang blog

#### Thêm Menu
*   Mở `/themes/next/_config.yml`, bỏ comment (dấu #) trước các mục menu bạn muốn hiển thị. Nếu muốn thêm các mục menu khác, bạn có thể thêm vào tùy ý (lưu ý căn lề cho đúng):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Tạo trang Danh mục (Categories)

*   Tạo một trang mới có tên `categories` bằng lệnh sau:

 ```bash
 $ hexo new page categories
 ```

*   Chỉnh sửa trang vừa tạo `/source/categories/index.md`, đặt `type` của trang là `categories`. Theme sẽ tự động hiển thị tất cả các danh mục trên trang này (lưu ý giữ khoảng trắng sau dấu hai chấm).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Tạo trang Đám mây Thẻ (Tag Cloud)

*   Tạo một trang mới có tên tags bằng lệnh sau:

 ```bash
 $ hexo new page "tags"
 ```

*   Chỉnh sửa trang vừa tạo, đặt `type` của trang là tags. Theme sẽ tự động hiển thị một đám mây thẻ (tag cloud) trên trang này.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Tạo trang "Về tôi" (About Me)

 *   Tạo một trang "About" mới:

 ```bash
 $ hexo new page "about"
 ```

 *   Chỉnh sửa trang vừa tạo, bạn có thể viết nội dung thông tin giới thiệu về mình bằng định dạng Markdown tại phần nội dung chính.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Cài đặt liên kết mạng xã hội trên thanh bên

*   Chỉnh sửa file `_config.yml` của trang web, tìm trường `social`, sau đó thêm tên và địa chỉ các trang mạng xã hội. Định dạng key-value là `Tên hiển thị: Địa chỉ liên kết`, ví dụ:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Mở `/themes/next/_config.yml`, thêm tên các trang mạng xã hội (lưu ý chữ hoa/thường) và (biểu tượng)[http://fontawesome.io/icons/] vào dưới trường `social_icons`. Tùy chọn `enable` dùng để kiểm soát việc hiển thị biểu tượng, bạn có thể đặt `false` để ẩn chúng. Ví dụ:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Liên kết blog với GitHub

 *   Đăng ký tài khoản GitHub: Nếu bạn chưa có tài khoản GitHub, hãy đăng ký trước.

 *   Trên GitHub, tạo một dự án có tên `XXX.github.io`, trong đó XXX là tên người dùng GitHub của bạn.

 *   Mở file cấu hình `_config.yml` trong thư mục dự án `MyBlog` trên máy tính cục bộ, đặt `type` thành `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   Chạy lệnh:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 *   Tạo các file tĩnh cục bộ và đẩy chúng lên GitHub, chạy lệnh:

```bash
hexo g
hexo d
```

Bây giờ, mở trình duyệt, truy cập http://your-name.github.io. Chúc mừng bạn, đến đây blog của bạn đã hoàn thành!

### Liên kết tên miền riêng

Đến đây, blog đã được xây dựng hoàn chỉnh và có thể truy cập qua tên miền của GitHub. Sẽ càng tuyệt vời hơn nếu bạn liên kết blog này với một tên miền ngắn gọn, dễ nhớ.

#### Mua tên miền

*   Mua một tên miền, khuyên dùng [namesilo.com](https://www.namesilo.com/) – một nhà cung cấp tên miền lâu đời, giá cả phải chăng và dịch vụ đáng tin cậy. Nếu bạn sử dụng mã giới thiệu của tôi `PhiloArt.io`, bạn sẽ nhận được ưu đãi giảm 1 USD, có giá trị đến 31/12/2025.

### Cấu hình phân giải tên miền

*   Cài đặt DNS của nhà cung cấp tên miền

*   Thêm 4 bản ghi A, trỏ về GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Thêm một bản ghi `CNAME`, `name` là `www`, `content` là `your-name.github.io` (trỏ đến địa chỉ GitHub Pages của bạn):

 > CNAME —> philo-li.github.io

*   Để biết cài đặt chi tiết hơn, vui lòng xem [Tài liệu GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

*   Thêm file CNAME vào thư mục blog

Sau khi cấu hình phân giải tên miền, vào thư mục blog, tạo một file mới có tên `CNAME` (lưu ý viết hoa, không có phần mở rộng) trong thư mục `source`. Mở file bằng Notepad và điền tên miền đã mua vào, ví dụ: `www.philoli.com`.

*   Chạy lệnh:

```bash
hexo g
hexo d
```

Bây giờ, mở trình duyệt, nhập tên miền, nhấn Enter. Chúc mừng bạn đã sở hữu một blog với tên miền riêng!

### Đăng bài viết mới

*   Thực hiện lệnh `hexo new “Bài viết đầu tiên của tôi”` trong thư mục gốc của blog. Một file `.md` sẽ được tạo trong thư mục `source/_posts`.

*   Chỉnh sửa file đó, thay đổi các trường ban đầu thành:

 ```bash
 title Tiêu đề bài viết
 date Ngày tạo (ngày tạo file)
 updated Ngày sửa đổi (ngày sửa file)
 comments Có bật bình luận không? true
 tags Thẻ
 categories Danh mục
 permalink Tên trong URL (tên file)
 ```

*   Viết nội dung chính (theo quy tắc Markdown)

*   Tạo các file tĩnh cục bộ và đẩy chúng lên GitHub, chạy lệnh:

```bash
hexo g
hexo d
```

### Cài đặt cá nhân hóa (Nâng cao)

Dưới đây là một số cài đặt tùy chỉnh nâng cao cho giao diện blog, người mới bắt đầu có thể bỏ qua phần này trước.

#### Thêm RSS

 *   Cài đặt plugin trong thư mục gốc

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   Thêm vào cuối file `_config.yml` trong thư mục gốc: (**_Lưu ý: Phải có một khoảng trắng sau dấu hai chấm, nếu không sẽ xảy ra lỗi!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   Mở `/themes/next/_config.yml`, sửa `rss` (lưu ý có một khoảng trắng sau dấu hai chấm)

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Ngắt bài viết trên trang chủ
 *   Mỗi khi viết bài, bạn chỉ cần thêm dòng sau vào vị trí muốn ngắt bài trong file .md:

 ```markdown
     <!--more-->
 ```

 *   Mở `/themes/next/_config.yml`, sửa tùy chọn `scroll_to_more` thành `false`.

#### Căn giữa văn bản trích dẫn trong bài viết
*   Tối ưu hóa kiểu dáng mặc định của trích dẫn Markdown.

```markdown
{% centerquote %}
Nội dung trích dẫn
{% endcenterquote %}
```

{% centerquote %}
Nội dung trích dẫn
{% endcenterquote %}

#### Sửa đổi kiểu dáng khối mã

*   Chỉnh sửa `/themes/next/_config.yml`, thay đổi cấu hình `codeblock` như sau:

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

#### Đặt thời gian thành lập trang web

 *   Chỉnh sửa file `_config.yml` của trang web, thêm trường `since`.

```bash
since: 2024
```

#### Cải thiện kiểu dáng liên kết bài viết

*   Chỉnh sửa file `themes\next\source\css\_common\components\post\post.styl`, thêm các kiểu CSS sau vào cuối file:

``` css
// Kiểu liên kết
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

#### Thêm ảnh nền cho blog
*   Trong thư mục `source` ở thư mục gốc, tạo một thư mục `_data`. Sau đó, tạo file `styles.styl` mới bên trong `_data`. Mở file `source/_data/styles.styl` vừa tạo và thêm nội dung sau:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   //Khi ảnh không đủ lấp đầy, có lặp lại không và cách lặp lại
    background-attachment:fixed;    //Ảnh có cuộn theo trang không
    background-size: cover;         //Bao phủ
    background-position:50% 50%;    //Vị trí ảnh
}
```
*   URL có thể là liên kết ảnh hoặc đường dẫn thư mục ảnh. Bạn có thể đặt tên ảnh là `background.jpg` và đặt nó vào thư mục `source/uploads`.

#### Đặt nền nội dung blog bán trong suốt
*   Mở file `source/_data/styles.styl` đã chỉnh sửa ở bước trước, tiếp tục thêm nội dung sau vào bên dưới:

```css

// Làm trong suốt nội dung blog
// Cài đặt độ trong suốt cho nội dung bài viết
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


// Cài đặt độ trong suốt cho thanh bên
.sidebar {
  opacity: 0.9;
}

// Cài đặt độ trong suốt cho thanh menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Cài đặt độ trong suốt cho ô tìm kiếm (local-search)
.popup {
  opacity: 0.9;
}
```

#### Tối ưu hóa kiểu dáng khối mã nội dòng
*   Mở file `source/_data/styles.styl` đã chỉnh sửa ở bước trước, tiếp tục thêm nội dung sau vào bên dưới:

```css
// Tùy chỉnh làm đẹp cho thẻ mã Code
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Thêm số lượng khách truy cập vào cuối trang web

*   Chỉnh sửa file

```css
# Tìm thẻ copyright, sau đó thêm mã vào bên trong thẻ.

<div class="copyright">
# ......Ở đây đã có một số cấu hình.
# Thêm mã mới vào đây.
</div>

# Sau khi thêm sẽ trông như thế này:
<div class="copyright">
  # ......Ở đây đã có một số cấu hình.
  # Thêm mã mới vào đây.
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Tạo lại và xem trước các thay đổi, sau khi xác nhận không có vấn đề gì thì xuất bản.

```bash
hexo g
hexo s
# Xác nhận không có vấn đề gì thì xuất bản
hexo d
```

#### Thêm file README.md vào repository

Mỗi dự án thường có một file `README.md`, nhưng khi triển khai bằng Hexo lên repository, file `README.md` trong dự án sẽ bị ghi đè. Vì vậy, cần cấu hình để tránh việc ghi đè này.

Thêm một file `README.md` vào thư mục gốc `source` trong thư mục `Hexo`, sau đó chỉnh sửa file cấu hình trang web `_config.yml`, đặt giá trị cho tham số `skip_render` là:

```yml
skip_render: README.md
```
Lưu và thoát. Khi bạn triển khai blog bằng lệnh `hexo d` lần nữa, file `README.md` này sẽ không bị render.

#### Một số plugin thông dụng

-   Hexo Filter MathJax: Render công thức toán học
    -   Cài đặt `npm install hexo-filter-mathjax`
    -   Cấu hình chi tiết: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Thống kê số từ bài viết
    -   Cài đặt `npm install hexo-word-counter`
    -   Cấu hình chi tiết: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Tối ưu tốc độ tải blog
    -   Cài đặt `npm install hexo-optimize`
    -   Cấu hình chi tiết: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Xem thêm các plugin khác tại: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Sao lưu file nguồn

-   Luôn nhớ sao lưu các file nguồn cục bộ, đặc biệt là các file Markdown. Nếu mất các cấu hình khác, bạn sẽ không thể viết blog bình thường và phải cài đặt lại từ đầu.
-   Nên sao lưu vào cùng một repository trên GitHub.
-   Khuyên bạn nên sao lưu mỗi khi có thay đổi nhỏ, hoặc sao lưu hàng ngày.
-   Để biết thêm cách sử dụng, vui lòng xem [Tài liệu Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects) 

```bash
# Thêm địa chỉ repository blog đã cài đặt trước đó.
git remote add https://github.com/your-name/your-name.github.io.git

# Thêm và lưu các thay đổi hiện tại, kèm theo ghi chú.
git add .
git commit -m "Cập nhật file nguồn"

# Tạo và chuyển sang một nhánh mới.
git checkout -b source

# Đẩy toàn bộ nội dung của nhánh source cục bộ lên nhánh source trên repository từ xa.
git push origin source:source
```

### Viết blog trên các máy tính khác nhau
-   Khi viết blog trên các máy tính khác nhau, bạn cần cài đặt các phần mềm cơ bản, sau đó kéo repository đã sao lưu từ GitHub về máy cục bộ để cập nhật blog.

*   Tải và cài đặt Node.js ([tải từ trang chủ](https://nodejs.org/en/))
*   Tải và cài đặt Git ([tải từ trang chủ](https://git-scm.com/downloads))
*   Cài đặt framework Hexo: Mở CMD và chạy lệnh

 ```bash
 npm install -g hexo-cli
```
*   Tiến hành cập nhật cục bộ

```bash
# Clone repository về máy cục bộ.
git clone https://github.com/your-name/your-name.github.io.git

# Nếu đã clone cục bộ, mỗi lần cập nhật blog đều cần kéo nội dung nhánh mới nhất.
git pull origin

# Chuyển sang nhánh tương ứng.
git checkout source

# Sau khi cài đặt tất cả các plugin theo cấu hình Hexo, bạn có thể bắt đầu cập nhật và chỉnh sửa nội dung blog.
npm install

# Sau khi sửa đổi nội dung, hãy nhớ sao lưu ngay lập tức bằng các lệnh sau:
git add .
git commit -m "Cập nhật blog xxx"
git push origin source:source

# Xuất bản nội dung blog mới nhất lên trang web tên miền.
hexo clean
hexo g  # Tạo các file tĩnh.
hexo s  # Xem trước hiệu ứng blog cục bộ.
hexo d  # Xuất bản nội dung blog mới nhất.
```

### Tổng hợp một số lệnh thông dụng

 ```bash
hexo g
# hoặc hexo generate, tạo trang web tĩnh từ các file nguồn.
hexo d
# hoặc hexo deploy, xuất bản và đẩy lên GitHub Pages.
hexo s
# hoặc hexo server, triển khai và kiểm tra cục bộ.
hexo clean
# Xóa cache các trang web tĩnh, sau đó hexo d để tạo lại.
