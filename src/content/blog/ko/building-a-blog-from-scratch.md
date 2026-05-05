---
title: "Hexo 블로그 처음부터 구축하기: 2024년 간편 가이드"
date: 2024-04-11 00:25:20
tags: 블로그 구축
categories: 이것저것
---
혹시 미적 감각이라곤 찾아볼 수 없는 블로그 디자인에 질리고, 끝없이 쏟아지는 웹사이트 알림에 지쳤나요? 나만의 블로그를 만들고 싶었지만, 복잡한 가이드와 머리 아픈 코드 때문에 망설이고 있었다면, 축하드립니다! 이 글이 바로 가장 쉽고 간단한 방법으로 여러분만의 블로그를 만들 수 있도록 차근차근 안내해 드릴 겁니다. 조금만 인내심을 갖고 단계를 따라오시면 됩니다.

<!--more-->

Hexo는 빠르고, 깔끔하며, 효율적인 블로그 프레임워크로 초보자들에게는 그야말로 희소식이죠. 게다가 GitHub는 서버를 따로 임대하고 배포해야 하는 번거로움까지 덜어줍니다. 그래서 이 글에서는 Hexo와 GitHub를 활용해 블로그를 구축하는 방법을 다룰 예정입니다.

예전에 2018년에 [처음부터 블로그 구축하기 간편 가이드](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/)라는 글을 썼었는데, 플러그인 업데이트로 인해 일부 수정이 필요한 부분이 생겨서 2024년 버전 간편 가이드를 새로 선보이게 되었습니다.

### 준비물

*   node.js 다운로드 및 설치 ([공식 웹사이트에서 다운로드](https://nodejs.org/en/))
*   git 다운로드 및 설치 ([공식 웹사이트에서 다운로드](https://git-scm.com/downloads))

### 로컬에 Hexo 정적 블로그 구축하기

*   Hexo 프레임워크 설치: cmd를 열어 다음을 실행합니다.

 ```bash
 $ npm install -g hexo-cli
 ```

*   새 폴더(예: MyBlog)를 만들고, 해당 폴더로 이동한 다음 마우스 오른쪽 버튼을 눌러 Git Bash를 실행하고 다음을 입력하세요.

 ```bash
 $ hexo init
 ```

*   Hexo 템플릿 생성이 완료되면 npm을 설치하고 다음을 실행합니다.

 ```bash
$ npm install
 ```

맞습니다! 블로그의 핵심 부분은 벌써 다 완성되었습니다. 이제 어떤 모습인지 확인해 볼까요? 다음을 실행해 보세요.

```bash
$ hexo server
```

이제 브라우저를 열어 localhost:4000을 입력하면 현재 블로그의 모습을 볼 수 있습니다. 잠깐 설레는 마음을 진정시키고, Ctrl + C를 눌러 다음 단계로 넘어가세요.

### 초기 개인 설정

#### 테마 변경

*   새 테마를 다운로드합니다 (예시: [NexT 테마](http://theme-next.iissnan.com/)). 루트 디렉토리에서 다음을 실행합니다.

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   루트 디렉토리의 `_config.yml` 파일을 열고 `theme` 필드를 다음과 같이 수정합니다.

 ```bash
theme: next
 ```

*   스킨 선택: `/themes/next/_config.yml` 파일을 열고 `scheme` 필드를 찾습니다 (Ctrl + F로 빠르게 찾을 수 있습니다). NexT는 세 가지 다른 스킨을 제공합니다. 마음에 드는 스킨 하나를 골라 앞에 붙은 # 기호를 제거해 주세요 (앞으로 주로 수정하게 될 파일은 이 두 가지, 즉 _사이트 설정 파일_ 과 _테마 설정 파일_ 입니다).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   효과 확인: 다음 명령을 실행하여 확인할 수 있습니다 (앞으로도 효과를 확인하고 싶을 때마다 이 단계를 반복하면 됩니다).

```bash
hexo g # 또는 hexo generate
hexo server
```

#### 사이트 설정

*   루트 디렉토리의 사이트 설정 파일 `_config.yml`을 편집기로 엽니다 (Windows에서 메모장으로 편집하면 한글 제목이 깨질 수 있으니 다른 편집기를 사용하세요). `Site` 필드를 수정하되, 콜론(:) 뒤에 반드시 공백을 넣어주세요.

 ```bash
 # Site
 title: 미지의 세계                // 블로그 이름
 subtitle:
 description:  Do something cool // 한 줄 소개
 author: LulalaP                 // 작성자
 language: zh-Hans               // 웹사이트 언어
 timezone:
 ```

### 사이드바 아바타 설정

*   `/source` 폴더에 `uploads`라는 이름의 새 폴더를 만들고, 아바타 이미지(예: avatar.jpg)를 이 폴더 안에 넣습니다.

*   `/themes/next/_config.yml` 파일을 열고 `avatar` 필드를 찾아 다음과 같이 수정합니다.

```bash
avatar:
    url: /uploads/avatar.jpg
```

### 블로그 페이지 보완

#### 메뉴 추가

*   `/themes/next/_config.yml` 파일을 열고 `menu` 항목에서 추가하고 싶은 메뉴 앞의 주석(#)을 제거하기만 하면 됩니다. 필요한 경우 다른 메뉴도 추가할 수 있습니다 (들여쓰기에 주의하세요).

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### 카테고리 페이지 생성

*   `categories`라는 이름의 새 페이지를 다음 명령으로 생성합니다.

 ```bash
 $ hexo new page categories
 ```

*   새로 생성된 `/source/categories/index.md` 파일을 편집하여 페이지 타입을 `categories`로 설정하면 테마가 자동으로 이 페이지에 모든 카테고리를 표시해 줍니다 (콜론(:) 뒤에 공백을 꼭 남겨두세요).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### 태그 클라우드 페이지 생성

*   `tags`라는 이름의 새 페이지를 다음 명령으로 생성합니다.

 ```bash
 $ hexo new page "tags"
 ```

*   새로 생성된 페이지를 편집하여 페이지 타입을 `tags`로 설정하면 테마가 자동으로 이 페이지에 태그 클라우드를 표시해 줍니다.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### "About Me" 페이지 생성

 *   `about` 페이지를 새로 만듭니다.

 ```bash
 $ hexo new page "about"
 ```

 *   새로 생성된 페이지를 편집하고, 본문에는 마크다운 형식으로 자신에 대한 정보를 작성할 수 있습니다.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### 사이드바 소셜 링크 설정

*   사이트의 `_config.yml` 파일을 편집하여 `social` 필드를 찾은 다음, 소셜 사이트 이름과 주소를 추가하면 됩니다. 키-값 형식은 `표시 이름: 링크 주소`이며, 예시는 다음과 같습니다.

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   `/themes/next/_config.yml` 파일을 열고 `social_icons` 필드 아래에 소셜 사이트 이름(대소문자 구분)과 아이콘([http://fontawesome.io/icons/](http://fontawesome.io/icons/))을 추가합니다. `enable` 옵션은 아이콘 표시 여부를 제어합니다. 아이콘을 없애려면 `false`로 설정하면 됩니다. 예시는 다음과 같습니다.

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### 블로그와 GitHub 연동

 *   GitHub 계정 등록: 아직 GitHub 계정이 없다면 먼저 등록해야 합니다.

 *   GitHub에 `XXX.github.io`라는 이름의 프로젝트를 생성하세요. 여기서 XXX는 본인의 GitHub 사용자 이름입니다.

 *   로컬 `MyBlog` 폴더 프로젝트 내의 `_config.yml` 설정 파일을 열고, 그 안에 있는 `type`을 `git`으로 설정합니다.

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 *   실행:

 ```bash
 npm install hexo-deployer-git --save
 ```
 *   로컬에서 정적 파일을 생성하고, 이 정적 파일을 GitHub로 푸시합니다. 실행:

```bash
hexo g
hexo d
```

이제 브라우저를 열고 http://your-name.github.io 로 접속해 보세요. 축하합니다! 드디어 여러분의 블로그가 완성되었습니다.

### 도메인 연결

여기까지 왔다면 블로그 구축은 모두 끝났고, GitHub 도메인을 통해 접속도 가능할 겁니다. 이제 여기에 짧은 나만의 도메인을 연결하면 더욱 완벽해지겠죠?

#### 도메인 구매

*   도메인을 구매하세요. [namesilo.com](https://www.namesilo.com/)에서 구매하는 것을 추천합니다. 오랜 역사를 자랑하는 도메인 제공업체로, 가격도 합리적이고 서비스도 믿을 수 있습니다. 제 추천 코드 `PhiloArt.io`를 사용하시면 1달러 할인을 받을 수 있습니다 (유효기간: 2025-12-31).

### 도메인 해석 (DNS 설정)

*   도메인 제공업체 DNS 설정

*   GitHub Pages를 가리키는 A 레코드 4개를 추가하세요.

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   `name`은 `www`, `content`는 `your-name.github.io` (여러분의 GitHub Pages 주소)로 하는 `CNAME` 레코드를 추가하세요.

 > CNAME —> philo-li.github.io

*   더 자세한 설정은 [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)를 참조하세요.

*   블로그 디렉토리에 CNAME 파일 추가

도메인 설정을 마친 후, 블로그 디렉토리의 `source` 폴더 안에 `CNAME`이라는 이름의 파일(대문자로, 확장자 없음)을 새로 만드세요. 메모장으로 열어 구매한 도메인(예: `www.philoli.com`)을 입력합니다.

*   실행:

```bash
hexo g
hexo d
```

이제 브라우저를 열고 도메인을 입력한 다음 엔터를 누르세요. 축하합니다! 드디어 여러분만의 독립 도메인을 가진 블로그가 생겼습니다.

### 새 글 발행

*   블로그 루트 디렉토리에서 `hexo new “나의 첫 번째 글”`을 실행하면 `source/_posts` 폴더 안에 `.md` 파일이 생성됩니다.

*   해당 파일을 편집하여 시작 필드를 다음과 같이 수정합니다.

 ```bash
 title 글의 제목
 date 생성 날짜 (파일 생성 날짜)
 updated 수정 날짜 (파일 수정 날짜)
 comments 댓글 허용 여부 true
 tags 태그
 categories 카테고리
 permalink URL에 표시될 이름 (파일 이름)
 ```

*   본문 내용을 작성합니다 (마크다운 규칙 준수).

*   로컬에서 정적 파일을 생성하고, 이 정적 파일을 GitHub로 푸시합니다. 실행:

```bash
hexo g
hexo d
```

### 고급 개인 설정

아래에서는 몇 가지 고급 블로그 스타일 설정 방법을 제공합니다. 초보자분들은 일단 건너뛰셔도 좋습니다.

#### RSS 추가

 *   루트 디렉토리에서 플러그인을 설치합니다.

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 *   루트 디렉토리의 `_config.yml` 파일 맨 끝에 다음 내용을 추가합니다. (**주의: 콜론 뒤에 반드시 공백을 추가해야 합니다. 그렇지 않으면 오류가 발생합니다!**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 *   `/themes/next/_config.yml` 파일을 열고 `rss`를 수정합니다 (주의: 콜론 뒤에 공백을 추가해야 합니다).

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### 홈페이지 글 요약

 *   글을 쓸 때 본문에서 글을 자르고 싶은 부분에 다음을 추가하기만 하면 됩니다.

 ```markdown
     <!--more-->
 ```

 *   `/themes/next/_config.yml` 파일을 열고 `scroll_to_more` 옵션을 `false`로 설정합니다.

#### 글 내 인용문 가운데 정렬

*   마크다운 기본 인용 스타일을 개선했습니다.

```markdown
{% centerquote %}
인용문 본문
{% endcenterquote %}
```

{% centerquote %}
인용문 본문
{% endcenterquote %}

#### 코드 블록 스타일 변경

*   `/themes/next/_config.yml` 파일을 편집하여 `codeblock` 설정을 다음과 같이 수정합니다.

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

#### 사이트 생성 시간 설정

 *   사이트의 `_config.yml` 파일을 편집하여 `since` 필드를 새로 추가합니다.

```bash
since: 2024
```

#### 글 링크 스타일 개선

*   `themes\next\source\css\_common\components\post\post.styl` 파일을 편집하고 맨 끝에 다음 CSS 스타일을 추가합니다.

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

#### 블로그에 배경 이미지 추가

*   루트 디렉토리의 `source` 폴더 아래에 `_data` 폴더를 만들고, `styles.styl` 파일을 새로 생성합니다. 새로 만든 `source/_data/styles.styl` 파일을 열고 다음 내용을 추가합니다.

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // 이미지가 화면을 채우지 못할 때 반복 여부 및 반복 방식
    background-attachment:fixed;    // 이미지가 스크롤에 따라 움직이는지 여부
    background-size: cover;         // 커버
    background-position:50% 50%;    // 이미지 위치
}
```
*   URL은 이미지 링크 또는 이미지 디렉토리가 될 수 있습니다. 이미지를 `background.jpg`로 명명하고 `source/uploads` 폴더 안에 넣을 수 있습니다.

#### 블로그 내용 배경 반투명 설정

*   이전 단계에서 편집한 `source/_data/styles.styl` 파일을 열고, 아래에 다음 내용을 계속 추가합니다.

```css

// 블로그 내용 투명화
// 글 내용의 투명도 설정
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


// 사이드바의 투명도 설정
.sidebar {
  opacity: 0.9;
}

// 메뉴 바의 투명도 설정
.header-inner {
  background: rgba(255,255,255,0.9);
}

// 검색창 (local-search)의 투명도 설정
.popup {
  opacity: 0.9;
}
```

#### 인라인 코드 블록 스타일 최적화

*   이전 단계에서 편집한 `source/_data/styles.styl` 파일을 열고, 아래에 다음 내용을 계속 추가합니다.

```css
// 인라인 코드 태그 미화
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### 웹사이트 하단에 방문자 수 추가

*   파일을 편집합니다.

```css
# copyright 태그를 찾아서 그 태그 내부에 코드를 추가합니다.

<div class="copyright">
# ......여기에 이미 몇 가지 설정이 있습니다.
# 여기에 새로운 코드를 추가합니다.
</div>

# 추가하고 나면 다음과 같습니다:
<div class="copyright">
  # ......여기에 이미 몇 가지 설정이 있습니다.
  # 여기에 새로운 코드를 추가합니다.
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   수정된 내용을 미리 보기 위해 다시 생성하고, 문제가 없으면 배포합니다.

```bash
hexo g
hexo s
# 문제가 없으면 배포
hexo d
```

#### 저장소에 README.md 파일 추가

일반적으로 모든 프로젝트에는 `README.md` 파일이 있지만, Hexo를 통해 저장소에 배포하면 프로젝트의 `README.md` 파일이 덮어씌워집니다. 따라서 이를 방지하기 위해 설정 파일에서 조정해야 합니다.

`Hexo` 디렉토리의 `source` 루트 디렉토리에 `README.md` 파일을 추가하고, 사이트 설정 파일 `_config.yml`을 수정하여 `skip_render` 매개변수 값을 다음과 같이 설정합니다.

```yml
skip_render: README.md
```
저장하고 나가면 됩니다. 다음에 `hexo d` 명령으로 블로그를 배포할 때는 `README.md` 파일이 렌더링되지 않을 것입니다.

#### 몇 가지 유용한 플러그인

-   Hexo Filter MathJax: 수학 공식 렌더링
    -   설치: `npm install hexo-filter-mathjax`
    -   자세한 설정: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: 글자 수 세기
    -   설치: `npm install hexo-word-counter`
    -   자세한 설정: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: 블로그 로딩 속도 최적화
    -   설치: `npm install hexo-optimize`
    -   자세한 설정: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   더 많은 플러그인: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### 원본 파일 백업

-   로컬 원본 파일, 특히 마크다운 파일은 반드시 잘 백업해 두세요. 다른 설정이 한 번이라도 손실되면 정상적으로 블로그를 작성할 수 없게 되어 처음부터 다시 설정해야 합니다.
-   GitHub의 동일한 저장소를 사용하여 백업하는 것을 권장합니다.
-   변경 사항이 생길 때마다 또는 매일 한 번씩 백업하는 것을 추천합니다.
-   더 많은 사용법은 [Git 문서](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)를 참조하세요.

```bash
# 이전에 설정한 블로그 저장소 주소 추가
git remote add https://github.com/your-name/your-name.github.io.git

# 현재 변경 사항을 추가하고 저장하며, 커밋 메시지 기록
git add .
git commit -m "원본 파일 업데이트"

# 새로운 브랜치 생성 및 전환
git checkout -b source

# 로컬 source 브랜치의 모든 내용을 원격 저장소의 source 브랜치로 푸시
git push origin source:source
```

### 다른 컴퓨터에서 블로그 작성하기

-   다른 컴퓨터에서 블로그를 작성할 때는 기본 소프트웨어를 설치한 다음, GitHub에 백업된 원격 저장소를 로컬로 가져와 블로그를 업데이트해야 합니다.

*   node.js 다운로드 및 설치 ([공식 웹사이트에서 다운로드](https://nodejs.org/en/))
*   git 다운로드 및 설치 ([공식 웹사이트에서 다운로드](https://git-scm.com/downloads))
*   Hexo 프레임워크 설치: cmd를 열어 다음을 실행합니다.

 ```bash
 npm install -g hexo-cli
```
*   로컬 업데이트 진행

```bash
# 저장소를 로컬로 클론
git clone https://github.com/your-name/your-name.github.io.git

# 로컬에 이미 클론되어 있다면, 블로그를 업데이트하기 전에 항상 최신 브랜치 내용을 풀(pull)해야 합니다.
git pull origin

# 해당 브랜치로 전환
git checkout source

# Hexo 설정에 있는 모든 플러그인을 설치한 후 블로그 콘텐츠를 업데이트 및 편집할 수 있습니다.
npm install

# 내용 수정 후에는 일련의 백업 과정을 잊지 마세요.
git add .
git commit -m "블로그 업데이트xxx"
git push origin source:source

# 최신 블로그 내용을 도메인 사이트에 배포
hexo clean
hexo g  # 정적 파일 생성
hexo s  # 로컬에서 블로그 효과 미리 보기
hexo d  # 최신 블로그 내용 배포
```

### 자주 사용하는 명령 요약

 ```bash
hexo g
# 또는 hexo generate, 원본 파일을 기반으로 정적 웹페이지 생성
hexo d
# 또는 hexo deploy, GitHub Pages로 배포 및 푸시
hexo s
# 또는 hexo server, 로컬에서 배포 및 테스트
hexo clean
# 정적 웹페이지 캐시를 비우고, hexo g로 다시 생성합니다.
