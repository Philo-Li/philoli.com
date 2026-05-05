---
title: Prosty poradnik budowy bloga Hexo od zera (edycja 2024)
date: 2024-04-11 00:25:20
tags: Budowanie bloga
categories: Codzienne eksperymenty
---
Czy masz już dość bezdusznych interfejsów tych wszystkich serwisów blogowych? Czy zmęczyły cię niekończące się powiadomienia i od dawna marzysz o własnym blogu, ale powstrzymywały cię skomplikowane poradniki i kody, od których boli głowa? Jeśli tak, to gratuluję! Ten artykuł ma za zadanie w najprostszy możliwy sposób, krok po kroku, nauczyć cię, jak zbudować własnego bloga. Wystarczy trochę cierpliwości i podążanie za instrukcjami.

<!--more-->

Hexo, jako szybki, minimalistyczny i wydajny framework blogowy, to prawdziwe zbawienie dla początkujących, a GitHub oszczędza nam kłopotów z wynajmowaniem i konfigurowaniem dodatkowego serwera. Dlatego w tym artykule pokażę, jak zbudować bloga, korzystając z Hexo i GitHub.

W 2018 roku napisałem już podobny poradnik: [Prosty poradnik budowy bloga od zera](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Jednak ze względu na aktualizacje wtyczek, pewne szczegóły wymagały zmian. Dlatego przedstawiam zaktualizowaną, uproszczoną wersję poradnika na rok 2024.

### Przygotowania

*   Pobierz i zainstaluj node.js ([pobierz i zainstaluj ze strony oficjalnej](https://nodejs.org/en/))
*   Pobierz i zainstaluj git ([pobierz i zainstaluj ze strony oficjalnej](https://git-scm.com/downloads))

### Tworzenie statycznego bloga Hexo lokalnie

*   Zainstaluj framework Hexo: Otwórz wiersz poleceń (cmd) i uruchom:

 ```bash
 $ npm install -g hexo-cli
 ```

*   Utwórz nowy folder, np. `MyBlog`. Wejdź do niego, kliknij prawym przyciskiem myszy, wybierz Git Bash Here i wpisz:

 ```bash
 $ hexo init
 ```

*   Po wygenerowaniu szablonu Hexo zainstaluj npm, uruchamiając:

 ```bash
$ npm install
 ```

Tak jest, główna część bloga została już ukończona! Czas zobaczyć efekty. Uruchom:

```bash
$ hexo server
```

Teraz otwórz przeglądarkę i wpisz `localhost:4000`, aby zobaczyć, jak wygląda Twój blog. Poczuj dreszczyk emocji, a następnie naciśnij Ctrl + C, aby kontynuować dalsze kroki.

### Personalizacja (podstawowa)

#### Zmiana motywu

*   Pobierz nowy motyw (np. [motyw NexT](http://theme-next.iissnan.com/)). W katalogu głównym projektu uruchom:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

*   Otwórz plik `_config.yml` w katalogu głównym i zmień pole `theme` na:

 ```bash
theme: next
 ```

*   Wybór wyglądu: Otwórz plik `/themes/next/_config.yml` i znajdź pole `scheme` (możesz użyć skrótu Ctrl + F, aby szybko je znaleźć). NexT oferuje trzy różne schematy wyglądu. Wybierz swój ulubiony i usuń znak `#` sprzed jego nazwy (głównie będziemy modyfikować te dwa pliki: _plik konfiguracyjny strony_ i _plik konfiguracyjny motywu_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

*   Aby sprawdzić efekty, możesz uruchomić następujące komendy (ten krok możesz powtarzać za każdym razem, gdy chcesz zobaczyć zmiany):

```bash
hexo g # lub hexo generate
hexo server
```

#### Konfiguracja strony

*   Otwórz plik konfiguracyjny strony `_config.yml` w katalogu głównym za pomocą edytora tekstowego (w systemie Windows nie używaj Notatnika, bo chińskie znaki w tytułach mogą się źle wyświetlać). Zmodyfikuj sekcję `Site`. Pamiętaj o spacji po dwukropku:

 ```bash
 # Site
 title: Nieznany Świat                // Nazwa bloga
 subtitle:
 description:  Do something cool // Krótki opis/slogan
 author: LulalaP                 // Autor
 language: zh-Hans               // Język strony
 timezone:
 ```

### Ustawianie awatara w pasku bocznym

*   W folderze `/source` utwórz nowy folder o nazwie `uploads`. Umieść w nim obrazek awatara (np. `avatar.jpg`).

*   Otwórz plik `/themes/next/_config.yml`, znajdź pole `avatar` i zmień je na:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Uzupełnianie stron bloga

#### Dodawanie menu
*   Otwórz plik `/themes/next/_config.yml`. W sekcji `menu` usuń komentarze (znaki `#`) przed pozycjami menu, które chcesz dodać. Jeśli potrzebujesz innych pozycji, możesz je dodać według własnych potrzeb (zwróć uwagę na wcięcia):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Tworzenie strony kategorii

*   Utwórz nową stronę o nazwie `categories` za pomocą następującej komendy:

 ```bash
 $ hexo new page categories
 ```

*   Edytuj nowo utworzoną stronę `/source/categories/index.md`. Ustaw typ strony na `categories`. Motyw automatycznie wyświetli na tej stronie wszystkie kategorie (pamiętaj, aby zachować spację po dwukropku).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Tworzenie strony chmury tagów

*   Utwórz nową stronę o nazwie `tags` za pomocą następującej komendy:

 ```bash
 $ hexo new page "tags"
 ```

*   Edytuj nowo utworzoną stronę i ustaw typ strony na `tags`. Motyw automatycznie wyświetli na tej stronie chmurę tagów.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Tworzenie strony „O mnie”

 * Utwórz nową stronę „about” (o mnie):

 ```bash
 $ hexo new page "about"
 ```

 * Edytuj nowo utworzoną stronę. Możesz napisać informacje o sobie w formacie Markdown.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Konfiguracja linków do mediów społecznościowych w pasku bocznym

*   Edytuj plik `_config.yml` strony. Znajdź sekcję `social` i dodaj nazwy oraz adresy serwisów społecznościowych. Format klucz-wartość to `Wyświetlana nazwa: Adres linku`, na przykład:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

*   Otwórz plik `/themes/next/_config.yml`. W sekcji `social_icons` dodaj nazwy serwisów społecznościowych (zwróć uwagę na wielkość liter) i [ikony](http://fontawesome.io/icons/). Opcja `enable` kontroluje, czy ikony są wyświetlane – możesz ustawić ją na `false`, aby je ukryć. Na przykład:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Łączenie bloga z GitHubem

 * Zarejestruj konto GitHub: Jeśli jeszcze go nie masz, musisz najpierw założyć konto GitHub.

 * Na GitHubie utwórz repozytorium o nazwie `XXX.github.io`, gdzie XXX to Twoja nazwa użytkownika GitHub.

 * Otwórz plik konfiguracyjny `_config.yml` w folderze lokalnego projektu `MyBlog` i ustaw w nim `type` na `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Uruchom:

 ```bash
 npm install hexo-deployer-git --save
 ```
 * Wygeneruj pliki statyczne lokalnie i wypchnij je na GitHub, uruchamiając:

```bash
hexo g
hexo d
```

W tym momencie otwórz przeglądarkę i wejdź na adres http://your-name.github.io. Gratulacje, Twój blog został już skonfigurowany!

### Podłączanie własnej domeny

Do tej pory blog został w pełni skonfigurowany i jest dostępny pod domeną GitHub. Teraz idealnie byłoby podłączyć do niego krótką, własną domenę.

#### Zakup domeny

*   Kup domenę. Polecam [namesilo.com](https://www.namesilo.com/) – to sprawdzony dostawca domen z dobrymi cenami i niezawodną obsługą. Jeśli użyjesz mojego kodu polecającego `PhiloArt.io`, otrzymasz zniżkę w wysokości 1 dolara. Kod ważny do 31 grudnia 2025 r.

### Konfiguracja DNS domeny

*   Ustawienia DNS u dostawcy domeny.

*   Dodaj 4 rekordy A, które będą wskazywać na GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

*   Dodaj rekord `CNAME`, gdzie `name` to `www`, a `content` to `your-name.github.io` (wskazuje na adres Twojej strony GitHub Pages):

 > CNAME —> philo-li.github.io

*   Bardziej szczegółowe instrukcje znajdziesz w [Dokumentacji GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

*   Dodanie pliku CNAME do katalogu bloga.

 Po skonfigurowaniu DNS domeny, wejdź do katalogu bloga, a następnie do folderu `source`. Utwórz nowy plik o nazwie `CNAME` (pamiętaj, że nazwa musi być pisana wielkimi literami i bez rozszerzenia). Otwórz go w Notatniku i wpisz zakupioną domenę, np. `www.philoli.com`.

*   Uruchom:

```bash
hexo g
hexo d
```

Teraz otwórz przeglądarkę, wpisz nazwę domeny i naciśnij Enter. Gratulacje, masz już własny blog z niezależną domeną!

### Publikowanie nowych artykułów

*   W katalogu głównym bloga wykonaj: `hexo new “Mój pierwszy artykuł”`. Spowoduje to utworzenie pliku `.md` w folderze `source/_posts`.

*   Edytuj ten plik, modyfikując początkowe pola na:

 ```bash
 title Tytuł artykułu
 date Data utworzenia (data utworzenia pliku)
 updated Data modyfikacji (data modyfikacji pliku)
 comments Czy włączyć komentarze true
 tags Tagi
 categories Kategorie
 permalink Nazwa w URL (nazwa pliku)
 ```

*   Napisz treść artykułu (zgodnie z zasadami Markdown).

*   Lokalnie wygeneruj pliki statyczne i wypchnij je na GitHub, uruchamiając:

```bash
hexo g
hexo d
```

### Personalizacja (zaawansowana)

Poniżej przedstawiam kilka zaawansowanych ustawień stylu bloga. Początkujący mogą na razie pominąć ten krok.

#### Dodawanie kanału RSS

 * Zainstaluj wtyczkę w katalogu głównym:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Na końcu pliku `_config.yml` w katalogu głównym dodaj: (**_Pamiętaj o dodaniu spacji po dwukropku, w przeciwnym razie wystąpi błąd!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Otwórz plik `/themes/next/_config.yml` i zmień `rss` (pamiętaj o spacji po dwukropku):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Skracanie artykułów na stronie głównej
 * Za każdym razem, gdy piszesz artykuł, wystarczy dodać `<!--more-->` w miejscu, w którym chcesz go skrócić:

 ```markdown
     <!--more-->
 ```

 * Otwórz plik `/themes/next/_config.yml` i ustaw opcję `scroll_to_more` na `false`.

#### Wyśrodkowanie cytatów w artykułach
*   Zoptymalizowano domyślny styl cytatów Markdown.

```markdown
{% centerquote %}
Treść cytatu
{% endcenterquote %}
```

{% centerquote %}
Treść cytatu
{% endcenterquote %}

#### Zmiana stylu bloków kodu

*   Edytuj plik `/themes/next/_config.yml` i zmodyfikuj konfigurację `codeblock` w następujący sposób:

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

#### Ustawienie daty utworzenia strony

 * Edytuj plik `_config.yml` strony i dodaj nowe pole `since`:

```bash
since: 2024
```

#### Ulepszenie stylu linków w artykułach

*   Edytuj plik `themes\next\source\css\_common\components\post\post.styl` i dodaj na końcu następujące style CSS:

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

#### Dodawanie obrazu tła do bloga
*   W folderze `source` w katalogu głównym utwórz folder `_data`. Następnie utwórz w nim plik `styles.styl`. Otwórz nowo utworzony plik `source/_data/styles.styl` i dodaj następującą zawartość:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Czy powtarzać obraz, jeśli nie wypełnia całości
    background-attachment:fixed;    // Czy obraz ma przewijać się wraz ze stroną
    background-size: cover;         // Pokrycie
    background-position:50% 50%;    // Położenie obrazu
}
```
*   W polu `url` może znajdować się link do obrazu lub ścieżka do katalogu z obrazem. Możesz nazwać obraz `background.jpg` i umieścić go w folderze `source/uploads`.

#### Ustawienie półprzezroczystego tła dla treści bloga
*   Otwórz plik `source/_data/styles.styl` edytowany w poprzednim kroku i dodaj poniższą zawartość:

```css

// Przezroczystość treści bloga
// Ustawienie przezroczystości dla zawartości artykułów
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


// Ustawienie przezroczystości paska bocznego
.sidebar {
  opacity: 0.9;
}

// Ustawienie przezroczystości paska menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Ustawienie przezroczystości pola wyszukiwania (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optymalizacja stylu wbudowanych bloków kodu
*   Otwórz plik `source/_data/styles.styl` edytowany w poprzednim kroku i dodaj poniższą zawartość:

```css
// Upiększanie tagów kodu
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Dodawanie licznika odwiedzin na dole strony

*   Edytuj plik:

```css
# Znajdź sekcję copyright, a następnie dodaj kod wewnątrz tagu

<div class="copyright">
# ......tutaj znajdują się już pewne konfiguracje
# Tutaj dodaj nowy kod
</div>

# Po dodaniu powinno to wyglądać tak:
<div class="copyright">
  # ......tutaj znajdują się już pewne konfiguracje
  # Tutaj dodaj nowy kod
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

*   Ponownie wygeneruj podgląd zmienionych efektów, a po upewnieniu się, że wszystko jest w porządku, opublikuj.

```bash
hexo g
hexo s
# Po upewnieniu się, że wszystko jest w porządku, opublikuj
hexo d
```

#### Dodawanie pliku README.md do repozytorium

Każdy projekt zazwyczaj zawiera plik `README.md`. Jednak po wdrożeniu Hexo do repozytorium, plik `README.md` w projekcie zostanie nadpisany. Dlatego należy skonfigurować plik konfiguracyjny, aby tego uniknąć.

W katalogu głównym `source` w folderze Hexo dodaj plik `README.md`. Zmodyfikuj plik konfiguracyjny strony `_config.yml`, ustawiając wartość parametru `skip_render` na:

```yml
skip_render: README.md
```
Zapisz i wyjdź. Następnym razem, gdy użyjesz komendy `hexo d` do wdrożenia bloga, plik `README.md` nie będzie renderowany.

#### Kilka przydatnych wtyczek

-   Hexo Filter MathJax: Renderuje formuły matematyczne
    -   Instalacja `npm install hexo-filter-mathjax`
    -   Szczegółowa konfiguracja: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
-   Hexo Word Counter: Liczy słowa w artykułach
    -   Instalacja `npm install hexo-word-counter`
    -   Szczegółowa konfiguracja: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
-   Hexo Optimize: Optymalizuje szybkość ładowania bloga
    -   Instalacja `npm install hexo-optimize`
    -   Szczegółowa konfiguracja: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
-   Więcej wtyczek: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Tworzenie kopii zapasowej plików źródłowych

-   Pamiętaj, aby zawsze tworzyć kopie zapasowe lokalnych plików źródłowych, zwłaszcza plików Markdown. Utrata innych konfiguracji uniemożliwi normalne pisanie bloga i będzie wymagała ponownej konfiguracji od zera.
-   Zaleca się używanie tego samego repozytorium GitHub do tworzenia kopii zapasowych.
-   Zaleca się tworzenie kopii zapasowych po każdej zmianie lub codziennie.
-   Więcej zastosowań znajdziesz w [Dokumentacji Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Dodaj wcześniej skonfigurowany adres repozytorium bloga
git remote add https://github.com/your-name/your-name.github.io.git

# Dodaj i zapisz bieżące zmiany, dodając komentarz
git add .
git commit -m "Aktualizacja plików źródłowych"

# Utwórz i przełącz się na nową gałąź
git checkout -b source

# Wypchnij całą zawartość lokalnej gałęzi source do gałęzi source zdalnego repozytorium
git push origin source:source
```

### Pisanie bloga na różnych komputerach
-   Kiedy piszesz bloga na różnych komputerach, musisz zainstalować podstawowe oprogramowanie, a następnie pobrać zdalne repozytorium z kopią zapasową z GitHub do lokalnego folderu, aby móc aktualizować bloga.

*   Pobierz i zainstaluj node.js ([pobierz i zainstaluj ze strony oficjalnej](https://nodejs.org/en/))
*   Pobierz i zainstaluj git ([pobierz i zainstaluj ze strony oficjalnej](https://git-scm.com/downloads))
*   Zainstaluj framework Hexo: Otwórz wiersz poleceń (cmd) i uruchom:

 ```bash
 npm install -g hexo-cli
```
*   Wykonaj lokalną aktualizację:

```bash
# Sklonuj repozytorium lokalnie
git clone https://github.com/your-name/your-name.github.io.git

# Jeśli repozytorium zostało już sklonowane lokalnie, przed każdą aktualizacją bloga należy pobrać najnowszą zawartość gałęzi
git pull origin

# Przełącz się na odpowiednią gałąź
git checkout source

# Po zainstalowaniu wszystkich wtyczek skonfigurowanych w Hexo możesz rozpocząć aktualizowanie i edytowanie treści bloga
npm install

# Po wprowadzeniu zmian pamiętaj o natychmiastowym wykonaniu pełnej kopii zapasowej
git add .
git commit -m "Aktualizacja bloga xxx"
git push origin source:source

# Opublikuj i wypchnij najnowszą zawartość bloga na stronę z domeną
hexo clean
hexo g  # Generuje statyczne pliki
hexo s  # Lokalny podgląd bloga
hexo d  # Publikuje najnowszą zawartość bloga
```

### Podsumowanie często używanych komend

 ```bash
hexo g
# lub hexo generate, generuje statyczne strony internetowe na podstawie plików źródłowych
hexo d
# lub hexo deploy, publikuje i wypycha na GitHub Pages
hexo s
# lub hexo server, lokalne wdrożenie do testowania
hexo clean
# czyści pamięć podręczną statycznych stron internetowych, a następnie hexo d generuje je ponownie
