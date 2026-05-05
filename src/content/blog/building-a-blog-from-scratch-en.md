---
title: A Concise Guide to Building a Hexo Blog from Scratch (2024 Edition)
date: 2024-04-11 00:25:20
tags: Blog Setup
categories: Daily Tinkering
---
Are you fed up with the uninspired interfaces of many blog sites? Tired of the incessant notifications? Have you long wanted to create your own blog but felt intimidated by complex tutorials and a daunting array of code? If so, congratulations! This article is designed to guide you step-by-step through building your very own blog, using the simplest and most accessible methods. All you need is a little patience, and to follow along.

<!--more-->

Hexo, a fast, clean, and efficient blog framework, is truly a godsend for beginners. Coupled with GitHub, which saves us the hassle of renting and deploying separate servers, it makes for an ideal setup. This guide will walk you through building your blog using Hexo and GitHub.

I previously published "[A Concise Guide to Building a Blog from Scratch](https://lulalap.com/2018/01/25/building-a-blog-from-scratch/)" in 2018. However, due to various plugin updates, some details now require revision. That's why I'm excited to re-introduce this updated 2024 edition of the concise tutorial.

### Preparation

* Download and install Node.js (from the [official website](https://nodejs.org/en/))
* Download and install Git (from the [official website](https://git-scm.com/downloads))

### Setting Up Your Hexo Static Blog Locally

* Install the Hexo framework: Open your command prompt (CMD) and run:

 ```bash
 $ npm install -g hexo-cli
 ```

* Create a new folder, for example, `MyBlog`. Navigate into this folder, right-click, select 'Git Bash Here' (or open your terminal in that directory), and then enter:

 ```bash
 $ hexo init
 ```

* Once the Hexo template is generated, install the npm dependencies by running:

 ```bash
$ npm install
 ```

That's it! The core of your blog is now complete. Let's take a look. Run:

```bash
$ hexo server
```

Now, open your web browser and navigate to `localhost:4000`. You'll see your blog in its current state. Enjoy this exciting moment, then press `Ctrl + C` in your terminal to proceed with the following steps.

### Initial Personalization

#### Changing Themes

* Download a new theme. We'll use the [NexT theme](http://theme-next.iissnan.com/) as an example. In your blog's root directory, run:

```bash
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

* Open the `_config.yml` file located in your blog's root directory and modify the `theme` field to:

 ```bash
theme: next
 ```

* Select an appearance: Open `/themes/next/_config.yml` and find the `scheme` field (use `Ctrl + F` for quick search). NexT provides three different appearances; choose the one you prefer and uncomment it by removing the `#` symbol. (Remember, these two files – your *site configuration file* and *theme configuration file* – will be your primary files for future modifications.)

```bash
# Schemes
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

* To preview your changes, run the following commands (you can repeat this whenever you want to see your blog's current state):

```bash
hexo g # or hexo generate
hexo server
```

#### Site Configuration

* Open your site's `_config.yml` file in the root directory using a code editor (on Windows, avoid using Notepad, as it can corrupt Chinese characters). Modify the `Site` fields, ensuring there's a space after each colon:

 ```bash
 # Site
 title: Unknown World                // Blog name
 subtitle:
 description:  Do something cool // A tagline
 author: LulalaP                 // Author
 language: en               // Website language
 timezone:
 ```

### Setting Up Your Sidebar Avatar

* Inside the `/source` directory, create a new folder and name it `uploads`. Then, place your avatar image (e.g., `avatar.jpg`) into this new folder.

* Open `/themes/next/_config.yml`, locate the `avatar` field, and modify it as follows:

```bash
avatar:
    url: /uploads/avatar.jpg
```

### Enhancing Blog Pages

#### Adding Menu Items
* Open `/themes/next/_config.yml`. To add menu items, simply uncomment them by removing the `#` symbol. You can also add custom menu items as required (be mindful of indentation):

```bash
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
```

#### Creating a Categories Page

* Create a new page named `categories` with this command:

 ```bash
 $ hexo new page categories
 ```

* Edit the newly created file, `/source/categories/index.md`. Set the page's `type` to `categories` (ensure there's a space after the colon). The theme will then automatically display all your categories on this page.

 ```bash
	title: Categories
	date: 2024-04-10 23:40:31
	type: "categories"
	comments: false
  ---
 ```

#### Creating a Tag Cloud Page

* Create a new page named `tags` using this command:

 ```bash
 $ hexo new page "tags"
 ```

* Edit the newly created page and set its `type` to `tags`. The theme will then automatically display a tag cloud on this page.

 ```bash
 ---
	title: Tags
	date: 2024-04-10 23:41:25
	type: "tags"
	comments: false
 ---
 ```

#### Creating an "About Me" Page

 * Create an `about` page:

 ```bash
 $ hexo new page "about"
 ```

 * Edit the newly created page. You can write your personal information in Markdown format within the main content area.

 ```bash
	title: About
	date: 2024-04-10 23:41:56
	comments: false
 ---
 ```

### Setting Up Sidebar Social Links

* Edit your site's `_config.yml` file. Locate the `social` field and add your social media site names and URLs. The format should be `Display Name: Link Address`, like this:

 ```bash
# Social links
social:
  GitHub: https://github.com/your-user-name || fab fa-github
  E-Mail: mailto:yourname@gmail.com || fa fa-envelope
  #Weibo: https://weibo.com/yourname || fab fa-weibo
  #Google: https://plus.google.com/yourname || fab fa-google
  Twitter: https://x.com/your-user-name || fab fa-twitter
 ```

* Open `/themes/next/_config.yml`. Under the `social_icons` field, add the social site names (ensure correct capitalization) and their corresponding [icons](http://fontawesome.io/icons/). The `enable` option allows you to control whether icons are displayed; set it to `false` to remove them. For example:

 ```bash
 social_icons:
   enable: true
   GitHub: github
   Twitter: twitter
 ```

### Connecting Your Blog with GitHub

 * Register a GitHub account: If you don't already have one, you'll need to sign up first.

 * On GitHub, create a new repository named `XXX.github.io`, where `XXX` is your GitHub username.

 * Open the `_config.yml` configuration file inside your local `MyBlog` project folder and set its `type` to `git`:

 ```bash
 deploy:
   type: git
   repository: https://github.com/your-name/your-name.github.io.git
   branch: main
 ```

 * Run:

 ```bash
 npm install hexo-deployer-git --save
 ```
 * Generate your static files locally, then push them to GitHub by running:

```bash
hexo g
hexo d
```

At this point, open your browser and navigate to `http://your-name.github.io`. Congratulations, your blog is now live and fully set up!

### Binding a Custom Domain

Your blog is now fully set up and accessible via its GitHub domain. To truly perfect it, let's bind a custom, shorter domain name to it.

#### Domain Purchase

* Purchase a domain name. I highly recommend [namesilo.com](https://www.namesilo.com/)—they are a well-established domain provider known for reliable service and great prices. Use my referral code `PhiloArt.io` to receive a $1 discount, valid until 2025-12-31.

### Domain Resolution

* **Domain Provider DNS Settings**

* Add four A records, pointing to GitHub Pages:

 > 185.199.108.153
 > 185.199.109.153
 > 185.199.110.153
 > 185.199.111.153

* Add one `CNAME` record with `name` set to `www` and `content` pointing to `your-name.github.io` (your GitHub Pages address):

 > CNAME —> philo-li.github.io

* For more detailed settings, please refer to the [GitHub Pages Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).

* **Add a CNAME file to your blog directory**

  After configuring your domain's DNS, navigate to your blog directory. Inside the `source` folder, create a new file named `CNAME` (it must be uppercase and have no file extension). Open it with a text editor and enter your purchased domain name, for example: `www.philoli.com`.

* Run:

```bash
hexo g
hexo d
```

Now, open your browser, type in your domain name, and hit Enter. Congratulations, you now own a blog with its very own custom domain!

### Publishing New Articles

* In your blog's root directory, execute: `hexo new “My First Article”`. This command will generate a new `.md` file within the `source/_posts` folder.

* Edit this file and adjust the initial fields as follows:

 ```bash
 title The title of the article
 date Creation date (file creation date)
 updated Modification date (file modification date)
 comments Whether to enable comments true
 tags Tags
 categories Categories
 permalink Name in URL (filename)
 ```

* Write your article content (following Markdown rules).

* Generate static files locally and then push them to GitHub by running:

```bash
hexo g
hexo d
```

### Advanced Personalization

Below, you'll find some advanced settings to further personalize your blog's style. Beginners may choose to skip this section for now.

#### Adding RSS

 * Install the plugin in your blog's root directory:

 ```bash
 $ npm install hexo-generator-feed --save
 ```

 * Add the following to the end of your `_config.yml` file in the root directory: (**_Important: Ensure there's a space after the colon to prevent errors!_**)

 ```bash
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 plugins: hexo-generate-feed
 ```

 * Open `/themes/next/_config.yml` and modify the `rss` setting (again, remember to add a space after the colon):

 ```yml
 rss: /atom.xml || fa fa-rss
 ```

#### Truncating Articles on the Homepage
* When writing your articles, simply insert the following marker in your `.md` file at the point where you wish to truncate the content for the homepage:

 ```markdown
     <!--more-->
 ```

* Open `/themes/next/_config.yml` and set the `scroll_to_more` option to `false`.

#### Centering Quoted Text in Articles
* This optimizes the default Markdown blockquote style:

```markdown
{% centerquote %}
Quoted text
{% endcenterquote %}
```

{% centerquote %}
Quoted text
{% endcenterquote %}

#### Modifying Code Block Style

* Edit `/themes/next/_config.yml` and adjust the `codeblock` configuration like this:

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

#### Setting Site Creation Time

 * Edit your site's `_config.yml` and add the `since` field:

```bash
since: 2024
```

#### Improving Article Link Style

* Edit the file `themes\next\source\css\_common\components\post\post.styl` and append the following CSS styles to the end:

```css
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

#### Adding a Background Image to Your Blog
* In your blog's root directory, create a `_data` folder inside the `source` directory. Within this new `_data` folder, create a file named `styles.styl`. Open `source/_data/styles.styl` and add the following content:

```css
body {
    background:url(/uploads/background.jpg);
    background-repeat: no-repeat;   // Whether to repeat and how if the image doesn't fill the space
    background-attachment:fixed;    // Whether the image scrolls with the content
    background-size: cover;         // Cover the entire area
    background-position:50% 50%;    // Image position
}
```
* The `url` can be either an image link or a local image path. For example, you can name your image `background.jpg` and place it in the `source/uploads` folder.

#### Setting Blog Content Background to Semi-Transparent
* Open the `source/_data/styles.styl` file you edited in the previous step and append the following content:

```css

// Blog content transparency
// Settings for article content opacity
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


// Settings for sidebar opacity
.sidebar {
  opacity: 0.9;
}

// Settings for menu bar opacity
.header-inner {
  background: rgba(255,255,255,0.9);
}

// Settings for search box (local-search) opacity
.popup {
  opacity: 0.9;
}
```

#### Optimizing Inline Code Block Style
* Open the `source/_data/styles.styl` file you edited in the previous step and append the following content:

```css
// Styling for inline code tags
code {
  padding: 2px 4px;
  word-wrap: break-word;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 3px;
  font-size: 18px;
}
```

#### Adding Visitor Count to the Website Footer
* Edit the file (referring to a theme template file, e.g., `themes/next/layout/_partials/footer.swig` or similar):

```css
# Locate the copyright tag and add the code inside it

<div class="copyright">
# ......some configurations are already here
# Add new code here
</div>

# After adding, it will look like this:
<div class="copyright">
  # ......some configurations are already here
  # Add new code here
  {%- if true %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-user-md"></i>
    </span>
    Visitors: <span id="busuanzi_value_site_uv"></span>
  {%- endif %}
</div>
```

* Regenerate and preview the modified effect. Once confirmed, publish:

```bash
hexo g
hexo s
# Publish after confirming everything is okay
hexo d
```

#### Adding a `README.md` File to the Repository

* Every project usually includes a `README.md` file. However, when deploying your blog to a repository using Hexo, the existing `README.md` file will be overwritten. To prevent this, you need to adjust your configuration file.

* Add a `README.md` file to the root of your Hexo `source` directory. Then, modify your site's `_config.yml` configuration file by setting the `skip_render` parameter as follows:

```yml
skip_render: README.md
```
Save and exit. The next time you deploy your blog with the `hexo d` command, the `README.md` file will not be rendered.

#### Several Useful Plugins

- Hexo Filter MathJax: Renders mathematical formulas
  - Install: `npm install hexo-filter-mathjax`
  - Detailed configuration: [hexo-filter-mathjax](https://github.com/next-theme/hexo-filter-mathjax)
- Hexo Word Counter: Provides article word count
  - Install: `npm install hexo-word-counter`
  - Detailed configuration: [hexo-word-counter](https://github.com/next-theme/hexo-word-counter)
- Hexo Optimize: Optimizes blog loading speed
  - Install: `npm install hexo-optimize`
  - Detailed configuration: [hexo-optimize](https://github.com/next-theme/hexo-optimize)
- More plugins: [https://theme-next.js.org/plugins/](https://theme-next.js.org/plugins/)

### Source File Backup

- Always remember to back up your local source files, especially your Markdown files. Losing these configurations would prevent you from writing blog posts properly, forcing you to set everything up from scratch.
- It's recommended to use the same GitHub repository for your backups.
- Make a backup every time you make changes, or at least once daily.
- For more usage details, please refer to the [Git documentation](https://git-scm.com/book/pl/v2/Appendix-C%3A-Git-Commands-Sharing-and-Updating-Projects).

```bash
# Add the blog repository address you configured earlier
git remote add origin https://github.com/your-name/your-name.github.io.git

# Add and save current changes, then record a commit message
git add .
git commit -m "Source files updated"

# Create and switch to a new branch
git checkout -b source

# Push all content from the local 'source' branch to the remote 'source' branch
git push origin source:source
```

### Writing Blog Posts from Different Computers

- If you want to write blog posts from a different computer, you'll need to install the essential software first. Then, pull your remote GitHub backup repository to your local machine to update your blog.

* Download and install Node.js (from the [official website](https://nodejs.org/en/))
* Download and install Git (from the [official website](https://git-scm.com/downloads))
* Install the Hexo framework: Open your command prompt (CMD) and run:

 ```bash
 npm install -g hexo-cli
```
* Perform local updates:

```bash
# Clone the repository to your local machine
git clone https://github.com/your-name/your-name.github.io.git

# If you've already cloned it locally, always pull the latest branch content before updating your blog
git pull origin

# Switch to the correct branch
git checkout source

# After installing all plugins configured for Hexo, you can start updating and editing your blog content
npm install

# After modifying content, remember to perform a full backup promptly
git add .
git commit -m "Blog update: xxx"
git push origin source:source

# Publish and push the latest blog content to your domain site
hexo clean
hexo g  # Generate static files
hexo s  # Preview blog locally
hexo d  # Publish latest blog content
```

### Summary of Common Commands

 ```bash
hexo g
# or hexo generate, generates static pages from source files
hexo d
# or hexo deploy, publishes and pushes to GitHub Pages
hexo s
# or hexo server, deploys locally for testing
hexo clean
# Clears the static page cache, then hexo d regenerates
