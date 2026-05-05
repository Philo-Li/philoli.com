---
title: Tutorial conciso para construir un blog Hexo desde cero (Edición 2024)
date: 2024-04-11 00:25:20
tags: Crear un blog
categories: Trasteos
---
¿Estás harto de las interfaces poco estéticas de esos sitios de blogs? ¿Cansado de las interminables notificaciones web? ¿Siempre has querido crear tu propio blog, pero te detienes ante tutoriales complicados y un sinfín de códigos que te dan dolor de cabeza? ¡Entonces, felicidades! Este artículo te guiará paso a paso, de la manera más sencilla posible, para que construyas tu propio blog. Solo necesitas un poco de paciencia y seguir cada instrucción.

<!--more-->

Hexo, como un framework de blog rápido, conciso y eficiente, es una bendición para los principiantes, y GitHub nos ahorra la molestia de alquilar y desplegar un servidor adicional. Por ello, este artículo te mostrará cómo construir un blog usando Hexo y GitHub.

En 2018, escribí un [tutorial conciso para construir un blog desde cero](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/). Debido a las actualizaciones de los plugins, algunos detalles necesitaban ser modificados, por lo que lanzo nuevamente la edición 2024 de este tutorial conciso.

### Preparación

* Descarga e instala Node.js ([descarga e instalación desde el sitio oficial](https://nodejs.org/en/))
* Descarga e instala Git ([descarga e instalación desde el sitio oficial](https://git-scm.com/downloads))

### Configurar un blog estático Hexo localmente

* Instala el framework Hexo: Abre la línea de comandos (CMD) y ejecuta:
  
 ```bash
 $ npm install -g hexo-cli
 ```

* Crea una nueva carpeta, por ejemplo, `MyBlog`. Entra en ella, haz clic derecho, ejecuta Git Bash y escribe:

 ```bash
 $ hexo init
 ```

* Una vez generado el template de Hexo, instala npm ejecutando:

 ```bash
$ npm install
 ```

¡Así es! La parte principal de tu blog ya está lista. Veamos el resultado. Ejecuta:

```bash
$ hexo server
```

Ahora, abre tu navegador, escribe `localhost:4000` y podrás ver cómo luce tu blog. Disfruta el momento, y luego presiona `Ctrl + C` para continuar con los siguientes pasos.

### Personalización (inicial)

#### Cambiar tema

* Descarga un nuevo tema (usaremos el [tema NexT](http://theme-next.iissnan.com/) como ejemplo). Ejecuta en el directorio raíz:
 
```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* Abre `_config.yml` en el directorio raíz y modifica el campo `theme` a:

 ```bash
theme: next
 ```

* Elige una apariencia: Abre `/themes/next/_config.yml`, busca el campo `scheme` (puedes usar `Ctrl + F` para buscarlo rápidamente). NexT ofrece tres apariencias diferentes; elige la que más te guste y quita el `#` de una de ellas. (Los dos archivos principales que modificarás de ahora en adelante son: el _archivo de configuración del sitio_ y el _archivo de configuración del tema_).

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* Para ver el resultado, puedes ejecutar los siguientes comandos (puedes repetir este paso cada vez que quieras ver los cambios):

```bash
hexo g # o hexo generate
hexo server
```

#### Configuración del sitio

* Abre el archivo de configuración del sitio `_config.yml` en el directorio raíz con un editor (en Windows, no uses el Bloc de Notas, ya que los títulos en chino podrían aparecer con caracteres extraños). Modifica el campo `Site`. ¡Atención! Debe haber un espacio después de los dos puntos:

 ```bash
 # Site
 title: El mundo desconocido       // Nombre del blog
 subtitle:
 description:  Do something cool // Una frase/firma
 author: LulalaP                 // Autor
 language: es                    // Idioma del sitio
 timezone:
 ```

### Configurar el avatar de la barra lateral

* Crea una nueva carpeta llamada `uploads` dentro de `/source` y coloca allí la imagen de tu avatar (por ejemplo: `avatar.jpg`).

* Abre `/themes/next/_config.yml`, busca el campo `avatar` y modifícalo a:

```bash
avatar: 
    url: /uploads/avatar.jpg
```

### Mejorar las páginas del blog

#### Añadir menú
* Abre `/themes/next/_config.yml` y simplemente elimina el comentario (`#`) delante de los elementos del menú que quieras añadir. Si necesitas añadir otros elementos, puedes hacerlo según tus necesidades (presta atención a la indentación de los campos):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Crear página de categorías

* Crea una nueva página llamada `categories` con el siguiente comando:

 ```bash
 $ hexo new page categories
 ```

* Edita la página recién creada `/source/categories/index.md`, y establece el tipo de página como `categories`. El tema mostrará automáticamente todas las categorías en esta página (asegúrate de dejar un espacio después de los dos puntos).

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Crear interfaz de nube de etiquetas

* Crea una nueva página llamada `tags` con el siguiente comando:

 ```bash
 $ hexo new page "tags"
 ```

* Edita la página recién creada y establece el tipo de página como `tags`. El tema mostrará automáticamente la nube de etiquetas en esta página.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Crear página "Acerca de mí"

 * Crea una página "about":

 ```bash
 $ hexo new page "about"
 ```

 * Edita la página recién creada; puedes escribir tu información en formato Markdown en el cuerpo del texto.
 
 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Configurar enlaces sociales en la barra lateral

* Edita el archivo `_config.yml` del sitio, busca el campo `social` y simplemente añade el nombre y la dirección de tus redes sociales. El formato clave-valor es `Nombre a mostrar: Dirección del enlace`, por ejemplo:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* Abre `/themes/next/_config.yml`, y bajo el campo `social_icons`, añade el nombre del sitio social (presta atención a mayúsculas y minúsculas) y el (icono)[http://fontawesome.io/icons/]. La opción `enable` controla si se muestran los iconos; puedes configurarla a `false` para quitarlos. Por ejemplo:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Vincular el blog con GitHub

 * Regístrate en GitHub: Si aún no tienes una cuenta de GitHub, deberás crear una primero.

 * En GitHub, crea un proyecto llamado `XXX.github.io`, donde XXX es tu nombre de usuario de GitHub.

 * Abre el archivo de configuración `_config.yml` dentro de tu proyecto `MyBlog` local y establece el `type` como `git`:
  
 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Ejecuta:
  
 ```bash
 npm install hexo-deployer-git --save
 ```
 * Genera archivos estáticos localmente y súbelos a GitHub ejecutando:

```bash
hexo g
hexo d
```

En este momento, abre tu navegador y visita `http://your-name.github.io`. ¡Felicidades! Tu blog ya está completamente configurado.

### Vincular dominio

Hasta ahora, el blog está completamente configurado y es accesible a través del dominio de GitHub. Sería aún mejor si lo vinculas con un dominio corto personalizado.

#### Compra de dominio

* Compra un dominio. Te recomiendo [namesilo.com](https://www.namesilo.com/), un proveedor de dominios de larga trayectoria, con precios competitivos y un servicio fiable. Si usas mi código de referido `PhiloArt.io`, podrás obtener un descuento de 1 USD, válido hasta el 31/12/2025.

### Resolución de dominio

* Configuración DNS del proveedor de dominio

* Añade 4 registros A para apuntar a GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* Añade un registro `CNAME` con `name` como `www` y `content` como `your-name.github.io` (apuntando a tu dirección de GitHub Pages):

 > CNAME —> philo-li.github.io

* Para una configuración más detallada, consulta los [documentos de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

* Añadir archivo CNAME al directorio del blog

 Una vez configurada la resolución del dominio, ve al directorio de tu blog. Dentro de la carpeta `source`, crea un nuevo archivo llamado `CNAME` (recuerda que debe estar en mayúsculas y sin extensión). Ábrelo con un editor de texto y escribe el dominio que has comprado, por ejemplo: `www.philoli.com`.

* Ejecuta:

```bash
hexo g
hexo d
```

Ahora, abre tu navegador, introduce tu dominio y presiona Enter. ¡Felicidades! Ya tienes un blog con tu propio dominio independiente.

### Publicar un nuevo artículo

* En el directorio raíz de tu blog, ejecuta: `hexo new “Mi primer artículo”`. Esto generará un archivo `.md` dentro de la carpeta `source/_posts`.

* Edita este archivo, modificando los campos iniciales a:

 ```bash
 title Título del artículo
 date Fecha de creación (fecha de creación del archivo)
 updated Fecha de modificación (fecha de modificación del archivo)
 comments ¿Activar comentarios? true
 tags Etiquetas
 categories Categorías
 permalink Nombre en la URL (nombre del archivo)
 ```

* Escribe el contenido principal (siguiendo las reglas de Markdown)

* Genera archivos estáticos localmente y súbelos a GitHub ejecutando:

```bash
hexo g
hexo d
```

### Personalización (avanzada)

A continuación, te ofrecemos algunas configuraciones avanzadas para personalizar el estilo de tu blog. Los principiantes pueden saltarse esta sección por ahora.

#### Añadir RSS

 * Instala el plugin en el directorio raíz:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Añade lo siguiente al final del archivo `_config.yml` en el directorio raíz: (**_¡Asegúrate de dejar un espacio después de los dos puntos, de lo contrario, se producirá un error!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generator-feed
 ```

 * Abre `/themes/next/_config.yml` y modifica `rss` (asegúrate de dejar un espacio después de los dos puntos):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Truncar artículos en la página de inicio
 * Cada vez que escribas un artículo, simplemente añade lo siguiente en el lugar donde quieras que se trunque el texto en el archivo `.md` del artículo:

 ```markdown
     <!--more-->
 ```

 * Abre `/themes/next/_config.yml` y establece la opción `scroll_to_more` a `false`.

#### Centrar el texto citado dentro de los artículos
* Se ha optimizado el estilo predeterminado de las citas en Markdown.

```markdown
{% centerquote %}
Texto citado
{% endcenterquote %}
```

{% centerquote %}
Texto citado
{% endcenterquote %}

#### Modificar el estilo de los bloques de código

* Edita `/themes/next/_config.yml` y modifica la configuración de `codeblock` como se muestra a continuación:

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

#### Establecer la fecha de creación del sitio

 * Edita el archivo `_config.yml` del sitio y añade el nuevo campo `since`.

```bash
since: 2024
```

#### Mejorar el estilo de los enlaces en los artículos

* Edita el archivo `themes\next\source\css\_common\components\post\post.styl` y añade el siguiente estilo CSS al final:

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

#### Añadir una imagen de fondo al blog
* En el directorio raíz, dentro de la carpeta `source`, crea una carpeta `_data`. Dentro de `_data`, crea un archivo `styles.styl`. Abre este nuevo archivo `source/_data/styles.styl` y añade el siguiente contenido:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Si la imagen no cubre, si se repite y cómo
    background-attachment:fixed;    // Si la imagen se desplaza con el scroll
    background-size: cover;         // Cubrir
    background-position:50% 50%;    // Posición de la imagen
}
```
* La URL puede ser un enlace a una imagen o una ruta de directorio. Puedes nombrar la imagen `background.jpg` y colocarla en la carpeta `source/uploads`.

#### Establecer el fondo del contenido del blog como semitransparente
* Abre el archivo `source/_data/styles.styl` que editaste en el paso anterior y añade el siguiente contenido a continuación:

```css

// Transparencia del contenido del blog
// Configuración de la transparencia del contenido del artículo
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


// Configuración de la transparencia de la barra lateral
.sidebar {
  opacity: 0.9;
}

// Configuración de la transparencia de la barra de menú
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Configuración de la transparencia del cuadro de búsqueda (local-search)
.popup {
  opacity: 0.9;
}
```

#### Optimizar el estilo de los bloques de código en línea
* Abre el archivo `source/_data/styles.styl` que editaste en el paso anterior y añade el siguiente contenido a continuación:

```css
// Embellecimiento de la etiqueta de código
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Añadir un contador de visitantes al pie de página del sitio

* Edita el archivo:

```css
# Busca la sección de etiqueta 'copyright' y añade el código dentro de ella.

<div class="copyright">
# ......Aquí ya hay algunas configuraciones.
# Añade el nuevo código aquí.
</div>

# Después de añadirlo, se verá así:
<div class="copyright">
  # ......Aquí ya hay algunas configuraciones.
  # Añade el nuevo código aquí.
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* Regenera y previsualiza los cambios. Una vez que confirmes que todo está bien, publícalo.

```bash
hexo g
hexo s
# Confirmar que no hay problemas y publicar
hexo d
```

#### Añadir el archivo README.md al repositorio

Normalmente, cada proyecto tiene un archivo `README.md`. Sin embargo, cuando despliegas con Hexo a un repositorio, el archivo `README.md` existente en el proyecto puede ser sobrescrito. Por lo tanto, necesitas configurar el archivo de configuración para evitar esta sobrescritura.

En el directorio raíz de `source` dentro de tu directorio `Hexo`, añade un archivo `README.md`. Modifica el archivo de configuración del sitio `_config.yml` y establece el valor del parámetro `skip_render` a:

```yml
skip_render: README.md
```
Guarda y sal. La próxima vez que uses el comando `hexo d` para desplegar el blog, el archivo `README.md` no se renderizará.

#### Varios plugins útiles

- Hexo Filter MathJax: Renderiza fórmulas matemáticas
  - Instalar: `npm install hexo-filter-mathjax`
  - Configuración detallada: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Contador de palabras para artículos
  - Instalar: `npm install hexo-word-counter`
  - Configuración detallada: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Optimiza la velocidad de carga del blog
  - Instalar: `npm install hexo-optimize`
  - Configuración detallada: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- Más plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Respaldo de archivos fuente

- Recuerda siempre hacer una copia de seguridad de tus archivos fuente locales, especialmente los archivos Markdown. Si pierdes otras configuraciones, no podrás escribir tu blog correctamente y tendrás que empezar de cero.
- Se recomienda usar el mismo repositorio de GitHub para las copias de seguridad.
- Se sugiere hacer una copia de seguridad cada vez que realices algún cambio, o al menos una vez al día.
- Para más usos, consulta la [documentación de Git](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Añade la dirección del repositorio del blog que configuraste anteriormente.
git remote add https://github.com/your-name/your-name.github.io.git

# Añade y guarda los cambios actuales, y registra un comentario.
git add .
git commit -m "Actualización de archivos fuente"

# Crea y cambia a una nueva rama.
git checkout -b source

# Envía todo el contenido de la rama 'source' local a la rama 'source' del repositorio remoto.
git push origin source:source
```

### Escribir el blog desde diferentes ordenadores
- Cuando escribas en tu blog desde diferentes ordenadores, necesitarás instalar el software básico y luego clonar el repositorio de GitHub de respaldo remoto a tu máquina local para actualizar el blog.

* Descarga e instala Node.js ([descarga e instalación desde el sitio oficial](https://nodejs.org/en/))
* Descarga e instala Git ([descarga e instalación desde el sitio oficial](https://git-scm.com/downloads))
* Instala el framework Hexo: Abre la línea de comandos (CMD) y ejecuta:

 ```bash
 npm install -g hexo-cli
```
* Realizar actualización local

```bash
# Clona el repositorio a tu máquina local.
git clone https://github.com/your-name/your-name.github.io.git

# Si ya lo tienes clonado localmente, cada vez que actualices el blog, deberás obtener el contenido más reciente de la rama.
git pull origin

# Cambia a la rama correspondiente.
git checkout source

# Después de instalar todos los plugins configurados para Hexo, puedes empezar a actualizar y editar el contenido del blog.
npm install

# Después de modificar el contenido, recuerda hacer una copia de seguridad completa a tiempo.
git add .
git commit -m "Actualización del blog xxx"
git push origin source:source

# Publica y sube el contenido más reciente del blog al sitio de tu dominio.
hexo clean
hexo g  # Genera páginas estáticas
hexo s  # Previsualiza el blog localmente
hexo d  # Publica el contenido más reciente del blog
```

### Resumen de comandos útiles

 ```bash
hexo g
# o hexo generate, genera páginas web estáticas a partir de los archivos fuente.
hexo d
# o hexo deploy, publica y envía a GitHub Pages.
hexo s
# o hexo server, despliega y prueba localmente.
hexo clean
# Limpia la caché de las páginas web estáticas, y luego hexo d para regenerar.
