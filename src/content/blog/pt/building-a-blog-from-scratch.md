---
title: Guia Rápido para Criar um Blog Hexo do Zero (Edição 2024)
date: 2024-04-11 00:25:20
tags: Criação de blog
categories: Experimentos
---
Você já está cansado das interfaces sem graça dos blogs por aí? Farto das notificações incessantes? Sempre quis ter um blog próprio, mas se viu intimidado por tutoriais complexos e códigos que dão dor de cabeça? Então, parabéns! Este artigo vai te guiar passo a passo, da forma mais simples possível, para você montar o seu blog. Você só precisa de um pouco de paciência e seguir as instruções.

<!--more-->

O Hexo, como um framework de blog rápido, simples e eficiente, é uma verdadeira bênção para iniciantes. E o GitHub nos poupa o trabalho de alugar e configurar servidores adicionais. Por isso, neste guia, vamos construir um blog usando Hexo e GitHub.

Em 2018, escrevi um [Guia Rápido para Criar um Blog do Zero](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Devido a atualizações de plugins, alguns detalhes precisaram ser ajustados. Por isso, estou relançando a versão 2024 deste guia simplificado.

### Preparação

* Baixe e instale o Node.js ([download no site oficial](https://nodejs.org/en/))
* Baixe e instale o Git ([download no site oficial](https://git-scm.com/downloads))

### Configurando o blog estático Hexo localmente

* Instale o framework Hexo: Abra o CMD e execute:

 ```bash
 $ npm install -g hexo-cli
 ```

* Crie uma nova pasta, por exemplo, `MyBlog`. Entre nela, clique com o botão direito e execute o Git Bash (ou terminal), digite:

 ```bash
 $ hexo init
 ```

* Após gerar o template do Hexo, instale as dependências do npm executando:

 ```bash
$ npm install
 ```

Isso mesmo! A parte principal do seu blog já está pronta. Vamos ver o resultado? Execute:

```bash
$ hexo server
```

Agora, abra seu navegador e digite `localhost:4000` para ver como seu blog está. Aproveite a emoção e, em seguida, pressione `Ctrl + C` para continuar com as próximas etapas.

### Personalização (Primeiros Passos)

#### Trocando o Tema

* Baixe um novo tema (usaremos o [tema NexT](http://theme-next.iissnan.com/) como exemplo). No diretório raiz do seu blog, execute:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* Abra o arquivo `_config.yml` na raiz do projeto e altere o campo `theme` para:

 ```bash
theme: next
 ```

* Escolha a aparência: Abra o arquivo `/themes/next/_config.yml` e localize o campo `scheme` (você pode usar `Ctrl + F` para pesquisar). O NexT oferece três aparências diferentes; escolha a que mais gostar e remova o `#` da linha correspondente. (Os dois arquivos que você mais modificará daqui para frente serão estes: o _arquivo de configuração do site_ e o _arquivo de configuração do tema_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* Para visualizar o resultado, execute os seguintes comandos (você pode repetir este passo sempre que quiser ver as alterações):

```bash
hexo g #ou hexo generate
hexo server
```

#### Configurações do Site

* Abra o arquivo de configuração do site `_config.yml` na raiz (no Windows, evite usar o Bloco de Notas para editar, pois títulos em chinês podem aparecer corrompidos). Modifique o campo `Site`, lembrando-se de adicionar um espaço após os dois pontos:

 ```bash
 # Site
 title: O Mundo Desconhecido        // Nome do blog
 subtitle:
 description:  Do something cool // Uma frase de impacto
 author: LulalaP                 // Autor
 language: zh-Hans               // Idioma do site
 timezone:
 ```

### Configurando a Foto de Perfil na Barra Lateral

* Crie uma nova pasta chamada `uploads` dentro de `/source` e coloque sua imagem de perfil (por exemplo: `avatar.jpg`) lá.

* Abra o arquivo `/themes/next/_config.yml`, localize o campo `avatar` e modifique-o para:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Aprimorando as Páginas do Blog

#### Adicionando Menus
* Abra o arquivo `/themes/next/_config.yml`. No campo `menu`, remova o comentário (`#`) dos itens que você deseja adicionar. Se precisar de outros menus, adicione-os conforme sua necessidade (atenção à indentação):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Criando a Página de Categorias

* Crie uma nova página, nomeando-a `categories`, com o seguinte comando:

 ```bash
 $ hexo new page categories
 ```

* Edite a página recém-criada em `/source/categories/index.md`. Defina o tipo da página como `categories`, e o tema exibirá automaticamente todas as suas categorias nesta página (certifique-se de manter o espaço após os dois pontos).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Criando a Página de Tags

* Crie uma nova página, nomeando-a `tags`, com o seguinte comando:

 ```bash
 $ hexo new page "tags"
 ```

* Edite a página recém-criada. Defina o tipo da página como `tags`, e o tema exibirá automaticamente a nuvem de tags nesta página.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Criando a Página "Sobre Mim"

 * Crie uma nova página "about":

 ```bash
 $ hexo new page "about"
 ```

 * Edite a página recém-criada. Você pode escrever suas informações no corpo do texto usando o formato Markdown.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Configurando Links Sociais na Barra Lateral

* Edite o arquivo `_config.yml` do site, localize o campo `social` e adicione o nome da rede social e o endereço. O formato é `Nome de Exibição: URL do Link`, por exemplo:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* Abra `/themes/next/_config.yml` e, no campo `social_icons`, adicione o nome da rede social (atenção às maiúsculas/minúsculas) e o (ícone)[http://fontawesome.io/icons/]. A opção `enable` controla se o ícone será exibido; você pode configurá-la para `false` para ocultá-lo. Por exemplo:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Conectando o Blog ao GitHub

 * Registre uma conta GitHub: Se você ainda não tem uma, precisará criar uma primeiro.

 * No GitHub, crie um novo repositório com o nome `XXX.github.io`, onde XXX é o seu nome de usuário do GitHub.

 * Abra o arquivo de configuração `_config.yml` dentro da pasta `MyBlog` do seu projeto local e defina o `type` como `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Execute:

 ```bash
 npm install hexo-deployer-git --save
 ```
 * Gere os arquivos estáticos localmente e envie-os para o GitHub, executando:

```bash
hexo g
hexo d
```

Neste ponto, abra seu navegador e acesse `http://your-name.github.io`. Parabéns! Seu blog está agora completo e online.

### Vinculando um Domínio

Até agora, seu blog está totalmente configurado e acessível pelo domínio do GitHub. Para deixá-lo ainda mais perfeito, vamos vincular um domínio personalizado a ele.

#### Comprando um Domínio

* Compre um domínio. Recomendo [namesilo.com](https://www.namesilo.com/), um provedor de domínios antigo e confiável, com bons preços e serviços. Se usar meu código de referência `PhiloArt.io`, você pode obter um desconto de 1 dólar, válido até 31/12/2025.

### Configuração de DNS

* Configurações de DNS no provedor de domínio

* Adicione 4 registros A, apontando para o GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* Adicione um registro `CNAME`, com `name` como `www` e `content` como `your-name.github.io` (apontando para o endereço do seu GitHub Pages):

 > CNAME —> philo-li.github.io

* Para configurações mais detalhadas, consulte a [Documentação do GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

* Adicionando o arquivo CNAME ao diretório do blog

Após configurar o DNS, navegue até o diretório do seu blog. Dentro da pasta `source`, crie um novo arquivo chamado `CNAME` (atenção: deve ser em maiúsculas e sem extensão). Abra-o com um editor de texto e insira o domínio que você comprou, por exemplo: `www.philoli.com`

* Execute:

```bash
hexo g
hexo d
```

Agora, abra seu navegador, digite seu domínio e pressione Enter. Parabéns, você agora tem um blog com seu próprio domínio personalizado!

### Publicando um Novo Artigo

* No diretório raiz do seu blog, execute: `hexo new “Meu Primeiro Artigo”`. Isso criará um arquivo `.md` na pasta `source/_posts`.

* Edite este arquivo, alterando os campos iniciais para:

 ```bash
 title Título do artigo
 date Data de criação (data de criação do arquivo)
 updated Data de atualização (data de modificação do arquivo)
 comments Ativar comentários true
 tags Tags
 categories Categorias
 permalink Nome na URL (nome do arquivo)
 ```

* Escreva o conteúdo principal (seguindo as regras Markdown)

* Gere os arquivos estáticos localmente e envie-os para o GitHub, executando:

```bash
hexo g
hexo d
```

### Personalização (Avançado)

A seguir, apresentamos algumas configurações avançadas para personalizar o estilo do seu blog. Iniciantes podem pular esta seção por enquanto.

#### Adicionando RSS

 * Instale o plugin no diretório raiz:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * No final do `_config.yml` na raiz, adicione: (**_Atenção: um espaço após os dois pontos é essencial para evitar erros!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Abra `/themes/next/_config.yml` e modifique `rss` (lembre-se de adicionar um espaço após os dois pontos):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Recorte de Artigos na Página Inicial
 * Sempre que escrever um artigo, basta adicionar o seguinte no arquivo `.md`, no ponto onde deseja truncar o texto:

 ```markdown
     <!--more-->
 ```

 * Abra `/themes/next/_config.yml` e defina a opção `scroll_to_more` como `false`.

#### Centralizando Citações nos Artigos
* Otimização do estilo padrão de citações em Markdown

```markdown
{% centerquote %}
Texto da citação
{% endcenterquote %}
```

{% centerquote %}
Texto da citação
{% endcenterquote %}

#### Alterando o Estilo dos Blocos de Código

* Edite `/themes/next/_config.yml` e modifique a configuração `codeblock` da seguinte forma:

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

#### Definindo a Data de Criação do Site

 * Edite o `_config.yml` do site e adicione o campo `since`.

```bash
since: 2024
```

#### Melhorando o Estilo dos Links nos Artigos

* Edite o arquivo `themes\next\source\css\_common\components\post\post.styl` e adicione os seguintes estilos CSS no final:

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

#### Adicionando Imagem de Fundo ao Blog
* Dentro da pasta `source`, na raiz do seu blog, crie a pasta `_data`. Dentro de `_data`, crie um novo arquivo chamado `styles.styl`. Abra este novo arquivo `source/_data/styles.styl` e adicione o seguinte conteúdo:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Se a imagem não preencher todo o espaço, define se e como ela deve se repetir
    background-attachment:fixed;    // Define se a imagem rola junto com a página
    background-size: cover;         // Cobre a área
    background-position:50% 50%;    // Posição da imagem
}
```
* A URL pode ser um link de imagem ou um caminho para uma imagem local. Você pode nomear sua imagem como `background.jpg` e colocá-la na pasta `source/uploads`.

#### Fundo Semitransparente para o Conteúdo do Blog
* Abra o arquivo `source/_data/styles.styl`, editado na etapa anterior, e adicione o seguinte conteúdo abaixo:

```css

// Conteúdo do blog com transparência
// Configuração de transparência para o conteúdo do artigo
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


// Configuração de transparência para a barra lateral
.sidebar {
  opacity: 0.9;
}

// Configuração de transparência para a barra de menu
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Configuração de transparência para a caixa de pesquisa (local-search)
.popup {
  opacity: 0.9;
}
```

#### Otimizando o Estilo dos Blocos de Código Inline
* Abra o arquivo `source/_data/styles.styl`, editado na etapa anterior, e adicione o seguinte conteúdo abaixo:

```css
// Estilização para tags de código inline
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Adicionando Contador de Visitantes no Rodapé do Site

* Edite o arquivo:

```css
# Localize a seção copyright e adicione o código dentro dela

<div class="copyright">
# ......Aqui já existem algumas configurações
# Adicione o novo código aqui
</div>

# Depois de adicionar, ficará assim:
<div class="copyright">
  # ......Aqui já existem algumas configurações
  # Adicione o novo código aqui
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* Gere novamente para pré-visualizar as alterações. Após confirmar que está tudo certo, publique:

```bash
hexo g
hexo s
# Após confirmar que está tudo certo, publique
hexo d
```

#### Adicionando o Arquivo README.md ao Repositório

Cada projeto geralmente tem um arquivo `README.md`. No entanto, ao implantar com Hexo em um repositório, o `README.md` do projeto pode ser sobrescrito. Para evitar isso, precisamos configurar o arquivo de configuração.

No diretório raiz `source` do seu projeto Hexo, adicione um arquivo `README.md`. Em seguida, modifique o arquivo de configuração do site `_config.yml`, definindo o valor do parâmetro `skip_render` para:

```yml
skip_render: README.md
```
Salve e saia. Ao usar o comando `hexo d` para implantar o blog novamente, o arquivo `README.md` não será renderizado.

#### Alguns Plugins Úteis

- Hexo Filter MathJax: Renderiza fórmulas matemáticas
  - Instalação: `npm install hexo-filter-mathjax`
  - Configuração detalhada: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Contagem de palavras dos artigos
  - Instalação: `npm install hexo-word-counter`
  - Configuração detalhada: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Otimiza a velocidade de carregamento do blog
  - Instalação: `npm install hexo-optimize`
  - Configuração detalhada: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Mais plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Backup dos Arquivos Fonte

- Lembre-se de fazer backup dos seus arquivos-fonte locais, especialmente os arquivos Markdown. Se as outras configurações forem perdidas, você não conseguirá escrever no blog normalmente e terá que configurar tudo do zero.
- Recomenda-se usar o mesmo repositório do GitHub para backup.
- É aconselhável fazer backup a cada alteração, ou diariamente.
- Para mais usos, consulte a [documentação do Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects)

```bash
# Adicione o endereço do repositório do blog que você configurou anteriormente
git remote add https://github.com/your-name/your-name.github.io.git

# Adicione e salve as alterações atuais, registrando um comentário
git add .
git commit -m "Atualização dos arquivos fonte"

# Crie e mude para uma nova branch
git checkout -b source

# Envie todo o conteúdo da branch source local para a branch source do repositório remoto
git push origin source:source
```

### Escrevendo no Blog de Diferentes Computadores
- Ao escrever no blog de diferentes computadores, você precisará instalar o software básico e, em seguida, puxar o repositório do GitHub (backup remoto) para o seu ambiente local para atualizar o blog.

* Baixe e instale o Node.js ([download no site oficial](https://nodejs.org/en/))
* Baixe e instale o Git ([download no site oficial](https://git-scm.com/downloads))
* Instale o framework Hexo: Abra o CMD e execute:

 ```bash
 npm install -g hexo-cli
```
* Realize a atualização local:

```bash
# Clone o repositório para o local
git clone https://github.com/your-name/your-name.github.io.git

# Se já tiver clonado localmente, sempre puxe o conteúdo mais recente da branch antes de atualizar o blog
git pull origin

# Troque para a branch correspondente
git checkout source

# Após instalar todos os plugins configurados no Hexo, você pode começar a atualizar e editar o conteúdo do blog.
npm install

# Após modificar o conteúdo, lembre-se de fazer um backup completo imediatamente.
git add .
git commit -m "Atualização do blog xxx"
git push origin source:source

# Publique e envie o conteúdo mais recente do blog para o site do domínio
hexo clean
hexo g  # Gera arquivos estáticos
hexo s  # Pré-visualiza o blog localmente
hexo d  # Publica o conteúdo mais recente do blog
```

### Resumo de Comandos Úteis

 ```bash
hexo g
#ou hexo generate, gera as páginas estáticas a partir dos arquivos fonte
hexo d
#ou hexo deploy, publica e envia para o GitHub Pages
hexo s
#ou hexo server, implanta localmente para teste
hexo clean
# Limpa o cache das páginas estáticas, e então hexo d para gerar novamente
