#!/usr/bin/env node
/**
 * Fix blog post tags/categories: translate them to each locale's language.
 * Only modifies the YAML frontmatter, does not touch post content.
 *
 * Usage:
 *   node scripts/fix-blog-tags.mjs          # fix all locale folders
 *   node scripts/fix-blog-tags.mjs ja fr    # fix specific locales only
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BLOG_DIR = join(ROOT, 'src', 'content', 'blog');

// ---- Tag translations ----
const TAG_MAP = {
  'en': {
    '随笔': 'Essays',
    '读书': 'Reading',
    '阅读': 'Reading',
    '书单': 'Book List',
    '博客搭建': 'Blog Setup',
    '睡眠': 'Sleep',
    '自我提升': 'Self-improvement',
    '艺术': 'Art',
    '交易': 'Trading',
    '心理学': 'Psychology',
    '创造力': 'Creativity',
    'Python': 'Python',
  },
  'zh-TW': {
    '随笔': '隨筆',
    '读书': '閱讀',
    '阅读': '閱讀',
    '书单': '書單',
    '博客搭建': '部落格架設',
    '睡眠': '睡眠',
    '自我提升': '自我提升',
    '艺术': '藝術',
    '交易': '交易',
    '心理学': '心理學',
    '创造力': '創造力',
    'Python': 'Python',
  },
  'ja': {
    '随笔': 'エッセイ',
    '读书': '読書',
    '阅读': '読書',
    '书单': 'ブックリスト',
    '博客搭建': 'ブログ構築',
    '睡眠': '睡眠',
    '自我提升': '自己啓発',
    '艺术': 'アート',
    '交易': 'トレード',
    '心理学': '心理学',
    '创造力': '創造力',
    'Python': 'Python',
  },
  'ko': {
    '随笔': '에세이',
    '读书': '독서',
    '阅读': '독서',
    '书单': '추천 도서',
    '博客搭建': '블로그 구축',
    '睡眠': '수면',
    '自我提升': '자기계발',
    '艺术': '예술',
    '交易': '트레이딩',
    '心理学': '심리학',
    '创造力': '창의력',
    'Python': 'Python',
  },
  'es': {
    '随笔': 'Ensayos',
    '读书': 'Lectura',
    '阅读': 'Lectura',
    '书单': 'Lista de libros',
    '博客搭建': 'Crear un blog',
    '睡眠': 'Sueño',
    '自我提升': 'Superación personal',
    '艺术': 'Arte',
    '交易': 'Trading',
    '心理学': 'Psicología',
    '创造力': 'Creatividad',
    'Python': 'Python',
  },
  'fr': {
    '随笔': 'Essais',
    '读书': 'Lecture',
    '阅读': 'Lecture',
    '书单': 'Liste de lecture',
    '博客搭建': 'Création de blog',
    '睡眠': 'Sommeil',
    '自我提升': 'Développement personnel',
    '艺术': 'Art',
    '交易': 'Trading',
    '心理学': 'Psychologie',
    '创造力': 'Créativité',
    'Python': 'Python',
  },
  'de': {
    '随笔': 'Essays',
    '读书': 'Lesen',
    '阅读': 'Lesen',
    '书单': 'Bücherliste',
    '博客搭建': 'Blog erstellen',
    '睡眠': 'Schlaf',
    '自我提升': 'Selbstentwicklung',
    '艺术': 'Kunst',
    '交易': 'Trading',
    '心理学': 'Psychologie',
    '创造力': 'Kreativität',
    'Python': 'Python',
  },
  'pt': {
    '随笔': 'Ensaios',
    '读书': 'Leitura',
    '阅读': 'Leitura',
    '书单': 'Lista de livros',
    '博客搭建': 'Criação de blog',
    '睡眠': 'Sono',
    '自我提升': 'Autodesenvolvimento',
    '艺术': 'Arte',
    '交易': 'Trading',
    '心理学': 'Psicologia',
    '创造力': 'Criatividade',
    'Python': 'Python',
  },
  'ru': {
    '随笔': 'Эссе',
    '读书': 'Чтение',
    '阅读': 'Чтение',
    '书单': 'Список книг',
    '博客搭建': 'Создание блога',
    '睡眠': 'Сон',
    '自我提升': 'Саморазвитие',
    '艺术': 'Искусство',
    '交易': 'Трейдинг',
    '心理学': 'Психология',
    '创造力': 'Креативность',
    'Python': 'Python',
  },
  'it': {
    '随笔': 'Saggi',
    '读书': 'Lettura',
    '阅读': 'Lettura',
    '书单': 'Lista libri',
    '博客搭建': 'Creazione blog',
    '睡眠': 'Sonno',
    '自我提升': 'Crescita personale',
    '艺术': 'Arte',
    '交易': 'Trading',
    '心理学': 'Psicologia',
    '创造力': 'Creatività',
    'Python': 'Python',
  },
  'vi': {
    '随笔': 'Tản văn',
    '读书': 'Đọc sách',
    '阅读': 'Đọc sách',
    '书单': 'Danh sách sách',
    '博客搭建': 'Xây dựng blog',
    '睡眠': 'Giấc ngủ',
    '自我提升': 'Phát triển bản thân',
    '艺术': 'Nghệ thuật',
    '交易': 'Giao dịch',
    '心理学': 'Tâm lý học',
    '创造力': 'Sáng tạo',
    'Python': 'Python',
  },
};

// ---- Category translations ----
const CAT_MAP = {
  'en': {
    '日常闲聊': 'Casual Thoughts',
    '读书笔记': 'Book Notes',
    '日常折腾': 'Tinkering',
    '数据科学': 'Data Science',
    '日常阅读': 'Reading',
  },
  'zh-TW': {
    '日常闲聊': '日常閒聊',
    '读书笔记': '讀書筆記',
    '日常折腾': '日常折騰',
    '数据科学': '資料科學',
    '日常阅读': '日常閱讀',
  },
  'ja': {
    '日常闲聊': '日常雑談',
    '读书笔记': '読書ノート',
    '日常折腾': '日常の試行錯誤',
    '数据科学': 'データサイエンス',
    '日常阅读': '日常の読書',
  },
  'ko': {
    '日常闲聊': '일상 이야기',
    '读书笔记': '독서 노트',
    '日常折腾': '이것저것',
    '数据科学': '데이터 사이언스',
    '日常阅读': '일상 독서',
  },
  'es': {
    '日常闲聊': 'Charlas cotidianas',
    '读书笔记': 'Notas de lectura',
    '日常折腾': 'Trasteos',
    '数据科学': 'Ciencia de datos',
    '日常阅读': 'Lectura diaria',
  },
  'fr': {
    '日常闲聊': 'Pensées du quotidien',
    '读书笔记': 'Notes de lecture',
    '日常折腾': 'Bricolages',
    '数据科学': 'Science des données',
    '日常阅读': 'Lectures du quotidien',
  },
  'de': {
    '日常闲聊': 'Alltägliches',
    '读书笔记': 'Lesenotizen',
    '日常折腾': 'Basteleien',
    '数据科学': 'Data Science',
    '日常阅读': 'Alltägliche Lektüre',
  },
  'pt': {
    '日常闲聊': 'Conversas do dia a dia',
    '读书笔记': 'Notas de leitura',
    '日常折腾': 'Experimentos',
    '数据科学': 'Ciência de dados',
    '日常阅读': 'Leitura diária',
  },
  'ru': {
    '日常闲聊': 'Повседневные мысли',
    '读书笔记': 'Заметки о книгах',
    '日常折腾': 'Эксперименты',
    '数据科学': 'Наука о данных',
    '日常阅读': 'Повседневное чтение',
  },
  'it': {
    '日常闲聊': 'Pensieri quotidiani',
    '读书笔记': 'Note di lettura',
    '日常折腾': 'Esperimenti',
    '数据科学': 'Data Science',
    '日常阅读': 'Letture quotidiane',
  },
  'vi': {
    '日常闲聊': 'Tâm sự hàng ngày',
    '读书笔记': 'Ghi chú đọc sách',
    '日常折腾': 'Mày mò',
    '数据科学': 'Khoa học dữ liệu',
    '日常阅读': 'Đọc sách hàng ngày',
  },
};

// ---- Args ----
const requestedLocales = process.argv.slice(2);
const localesToFix = requestedLocales.length > 0
  ? requestedLocales
  : Object.keys(TAG_MAP);

// ---- Fix tags in a file ----
function fixFile(filePath, locale) {
  const tags = TAG_MAP[locale];
  const cats = CAT_MAP[locale];
  if (!tags || !cats) return false;

  let content = readFileSync(filePath, 'utf8');
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  if (fmEnd === -1) return false;

  let frontmatter = content.slice(0, fmEnd + 3);
  const body = content.slice(fmEnd + 3);
  let changed = false;

  // Replace tags
  for (const [zh, local] of Object.entries(tags)) {
    if (frontmatter.includes(zh) && zh !== local) {
      frontmatter = frontmatter.replaceAll(zh, local);
      changed = true;
    }
  }

  // Replace categories
  for (const [zh, local] of Object.entries(cats)) {
    if (frontmatter.includes(zh) && zh !== local) {
      frontmatter = frontmatter.replaceAll(zh, local);
      changed = true;
    }
  }

  if (changed) {
    writeFileSync(filePath, frontmatter + body, 'utf8');
  }
  return changed;
}

// ---- Main ----
let totalFixed = 0;
for (const locale of localesToFix) {
  const dir = join(BLOG_DIR, locale);
  if (!existsSync(dir)) {
    console.log(`[SKIP] ${locale}/ does not exist`);
    continue;
  }
  const files = readdirSync(dir).filter(f => f.endsWith('.md'));
  let count = 0;
  for (const f of files) {
    if (fixFile(join(dir, f), locale)) count++;
  }
  console.log(`[${locale}] Fixed tags in ${count}/${files.length} files`);
  totalFixed += count;
}
console.log(`\nDone. ${totalFixed} files updated.`);
