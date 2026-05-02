import { useEffect, useMemo, useRef, useState } from 'react';
import {
  parseEpub,
  buildBilingualEpub,
  renderWithPlaceholders,
  type ParsedEpub,
  type ChapterFile,
} from '../lib/epub';
import {
  PROVIDERS,
  TONES,
  findProvider,
  translateBatch,
  chunkPassages,
  type ProviderId,
} from '../lib/llm';
import { LOCALES, LOCALE_NAMES, LOCALE_ENGLISH_NAMES, useTranslations } from '../i18n';
import '../styles/ebook-translator.css';

interface EbookTranslatorProps {
  locale?: string;
}

const MODEL_HINT_KEYS: Record<string, string> = {
  'cheapest, fast': 'ebookTranslator.modelHints.cheapestFast',
  'higher quality': 'ebookTranslator.modelHints.higherQuality',
  'best quality': 'ebookTranslator.modelHints.bestQuality',
  'newest, fast': 'ebookTranslator.modelHints.newestFast',
  'cheapest': 'ebookTranslator.modelHints.cheapest',
  'best quality, stable': 'ebookTranslator.modelHints.bestQualityStable',
  'balanced': 'ebookTranslator.modelHints.balanced',
  'free tier, fast': 'ebookTranslator.modelHints.freeTierFast',
  'flagship coding/agentic': 'ebookTranslator.modelHints.flagshipCoding',
  'long context, stable': 'ebookTranslator.modelHints.longContext',
  'cheaper': 'ebookTranslator.modelHints.cheaper',
  'latest, 256K context': 'ebookTranslator.modelHints.latestLongContext',
};

type Step = 'settings' | 'upload' | 'browse';
type ChapterStatus = 'pending' | 'translating' | 'done' | 'partial' | 'error';

interface Settings {
  provider: ProviderId;
  model: string;
  apiKey: string;
  rememberKey: boolean;
  sourceLang: string;
  targetLang: string;
  tone: string;
  customEndpoint: string;
  customModel: string;
}

interface NodeError {
  nodeId: string;
  message: string;
}

const LANG_OPTIONS = LOCALES.map(code => ({
  value: LOCALE_ENGLISH_NAMES[code],
  label: LOCALE_NAMES[code],
  code,
}));
const VALID_LANG_VALUES = new Set(LANG_OPTIONS.map(o => o.value));
/** Map English language name back to BCP-47 code for epub metadata. */
const LANG_NAME_TO_CODE = Object.fromEntries(LANG_OPTIONS.map(o => [o.value, o.code]));

/** Providers where the user types a free-text model ID instead of picking from a dropdown. */
const FREE_MODEL_PROVIDERS = new Set<ProviderId>(['custom', 'openrouter', 'opencode']);

const STORAGE_PREFIX = 'bilingual-translator/';
// Within one chapter (only matters for very long chapters that get split into
// multiple parts) — sequential keeps coherence between consecutive parts.
const CONCURRENT_BATCHES = 1;
// "Translate all" runs this many chapters in parallel. Most LLM APIs tolerate
// 10 in-flight calls; if you hit rate limits, failed chapters get marked
// "partial" and you can retry them.
const CONCURRENT_CHAPTERS = 10;

function loadSettings(): Settings {
  const provider = (localStorage.getItem(STORAGE_PREFIX + 'provider') as ProviderId) || 'gemini';
  const providerCfg = findProvider(provider);
  const savedModel = localStorage.getItem(STORAGE_PREFIX + 'model') || '';
  const model = providerCfg.models.some(m => m.id === savedModel) ? savedModel : providerCfg.models[0].id;
  const remember = localStorage.getItem(STORAGE_PREFIX + 'rememberKey') !== 'false';
  const apiKey = remember ? (localStorage.getItem(STORAGE_PREFIX + 'apiKey-' + provider) || '') : '';
  const savedSource = localStorage.getItem(STORAGE_PREFIX + 'sourceLang') || '';
  const savedTarget = localStorage.getItem(STORAGE_PREFIX + 'targetLang') || '';
  const sourceLang = VALID_LANG_VALUES.has(savedSource) ? savedSource : 'English';
  const targetLang = VALID_LANG_VALUES.has(savedTarget) ? savedTarget : 'Chinese (Simplified)';
  const savedTone = localStorage.getItem(STORAGE_PREFIX + 'tone') || '';
  const tone = TONES.some(t => t.id === savedTone) ? savedTone : TONES[0].id;
  const customEndpoint = localStorage.getItem(STORAGE_PREFIX + 'customEndpoint') || '';
  const customModel = localStorage.getItem(STORAGE_PREFIX + 'customModel') || '';
  return { provider, model, apiKey, rememberKey: remember, sourceLang, targetLang, tone, customEndpoint, customModel };
}

function persistSettings(s: Settings): void {
  localStorage.setItem(STORAGE_PREFIX + 'provider', s.provider);
  localStorage.setItem(STORAGE_PREFIX + 'model', s.model);
  localStorage.setItem(STORAGE_PREFIX + 'sourceLang', s.sourceLang);
  localStorage.setItem(STORAGE_PREFIX + 'targetLang', s.targetLang);
  localStorage.setItem(STORAGE_PREFIX + 'tone', s.tone);
  localStorage.setItem(STORAGE_PREFIX + 'customEndpoint', s.customEndpoint);
  localStorage.setItem(STORAGE_PREFIX + 'customModel', s.customModel);
  localStorage.setItem(STORAGE_PREFIX + 'rememberKey', String(s.rememberKey));
  if (s.rememberKey) {
    if (s.apiKey) localStorage.setItem(STORAGE_PREFIX + 'apiKey-' + s.provider, s.apiKey);
  } else {
    localStorage.removeItem(STORAGE_PREFIX + 'apiKey-' + s.provider);
  }
}

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

const STATUS_ICONS: Record<ChapterStatus, string> = {
  pending: '○',
  translating: '◐',
  done: '✓',
  partial: '⚠',
  error: '✕',
};

export default function EbookTranslator({ locale }: EbookTranslatorProps = {}) {
  const t = useTranslations(locale);
  const [step, setStep] = useState<Step>('settings');
  const [settings, setSettings] = useState<Settings>(() =>
    typeof window === 'undefined'
      ? { provider: 'gemini', model: 'gemini-3-flash-preview', apiKey: '', rememberKey: true, sourceLang: 'English', targetLang: 'Chinese (Simplified)', tone: 'idiomatic', customEndpoint: '', customModel: '' }
      : loadSettings()
  );

  const [file, setFile] = useState<File | null>(null);
  const [parsed, setParsed] = useState<ParsedEpub | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);
  const [parsing, setParsing] = useState(false);

  // Browse state
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [chapterStatus, setChapterStatus] = useState<Map<string, ChapterStatus>>(new Map());
  const [allTranslations, setAllTranslations] = useState<Map<string, Map<string, string>>>(new Map());
  const [chapterErrors, setChapterErrors] = useState<Map<string, NodeError[]>>(new Map());
  const [running, setRunning] = useState<Set<string>>(new Set());
  const [building, setBuilding] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const abortRefs = useRef<Map<string, AbortController>>(new Map());
  const translateAllAbortRef = useRef<AbortController | null>(null);
  // Cache translated title so we don't call the API more than once for it.
  const translatedTitleRef = useRef<string>('');

  // Mirror translations to a ref so async loops can read latest without stale closures
  const allTranslationsRef = useRef(allTranslations);
  useEffect(() => { allTranslationsRef.current = allTranslations; }, [allTranslations]);
  const chapterStatusRef = useRef(chapterStatus);
  useEffect(() => { chapterStatusRef.current = chapterStatus; }, [chapterStatus]);
  const runningRef = useRef(running);
  useEffect(() => { runningRef.current = running; }, [running]);

  useEffect(() => { persistSettings(settings); }, [settings]);

  const provider = useMemo(() => findProvider(settings.provider), [settings.provider]);

  function updateSettings(patch: Partial<Settings>) {
    setSettings(prev => {
      const next = { ...prev, ...patch };
      if (patch.provider && patch.provider !== prev.provider) {
        next.model = findProvider(patch.provider).models[0].id;
        const savedKey = next.rememberKey ? localStorage.getItem(STORAGE_PREFIX + 'apiKey-' + patch.provider) : null;
        next.apiKey = savedKey || '';
      }
      return next;
    });
  }

  async function handleFile(f: File) {
    setFile(f);
    setParsing(true);
    setParseError(null);
    setParsed(null);
    setSelectedIdx(0);
    setChapterStatus(new Map());
    setAllTranslations(new Map());
    setChapterErrors(new Map());
    setRunning(new Set());
    try {
      const result = await parseEpub(f);
      if (result.chapters.length === 0) throw new Error(t('ebookTranslator.upload.noChapters'));
      setParsed(result);
      // Initialize status: chapters with no translatable nodes are auto-"done"
      const initial = new Map<string, ChapterStatus>();
      result.chapters.forEach(c => initial.set(c.href, c.nodes.length === 0 ? 'done' : 'pending'));
      setChapterStatus(initial);
      // Pick first chapter that has translatable text
      const firstWithText = result.chapters.findIndex(c => c.nodes.length > 0);
      setSelectedIdx(firstWithText >= 0 ? firstWithText : 0);
      setStep('browse');
    } catch (e) {
      setParseError(e instanceof Error ? e.message : String(e));
    } finally {
      setParsing(false);
    }
  }

  async function translateChapter(chapter: ChapterFile, force = false): Promise<void> {
    if (runningRef.current.has(chapter.href)) return;
    if (chapter.nodes.length === 0) return;

    const ctl = new AbortController();
    abortRefs.current.set(chapter.href, ctl);

    setRunning(prev => { const n = new Set(prev); n.add(chapter.href); return n; });
    setChapterStatus(prev => { const n = new Map(prev); n.set(chapter.href, 'translating'); return n; });
    setChapterErrors(prev => { const n = new Map(prev); n.delete(chapter.href); return n; });

    // When force=true (user clicked "Re-translate" on a done chapter), discard old translations.
    const existing = force
      ? new Map<string, string>()
      : new Map(allTranslationsRef.current.get(chapter.href) ?? new Map<string, string>());
    if (force) {
      setAllTranslations(prev => {
        const next = new Map(prev);
        next.delete(chapter.href);
        return next;
      });
    }
    const remaining = chapter.nodes.filter(n => !existing.has(n.id));
    const batches = chunkPassages(remaining);
    const errs: NodeError[] = [];

    const flush = () => {
      setAllTranslations(prev => {
        const next = new Map(prev);
        next.set(chapter.href, new Map(existing));
        return next;
      });
    };

    try {
      for (let i = 0; i < batches.length; i += CONCURRENT_BATCHES) {
        if (ctl.signal.aborted) break;
        const slice = batches.slice(i, i + CONCURRENT_BATCHES);
        const results = await Promise.allSettled(
          slice.map(b =>
            translateBatch(b.map(p => p.text), {
              provider: settings.provider,
              model: FREE_MODEL_PROVIDERS.has(settings.provider) ? settings.customModel : settings.model,
              apiKey: settings.apiKey,
              sourceLang: settings.sourceLang,
              targetLang: settings.targetLang,
              tone: settings.tone,
              signal: ctl.signal,
              customEndpoint: settings.customEndpoint,
            }).then(tr => ({ b, tr }))
          )
        );
        results.forEach((r, idx) => {
          const b = slice[idx];
          if (r.status === 'fulfilled') {
            b.forEach((p, j) => {
              const t = r.value.tr[j];
              if (t) existing.set(p.id, t);
              else errs.push({ nodeId: p.id, message: 'No translation returned' });
            });
          } else {
            const msg = r.reason instanceof Error ? r.reason.message : String(r.reason);
            b.forEach(p => errs.push({ nodeId: p.id, message: msg }));
          }
        });
        flush();
      }
    } finally {
      abortRefs.current.delete(chapter.href);
      setRunning(prev => { const n = new Set(prev); n.delete(chapter.href); return n; });
      setChapterErrors(prev => { const n = new Map(prev); n.set(chapter.href, errs); return n; });
      setChapterStatus(prev => {
        const n = new Map(prev);
        const fullyDone = chapter.nodes.every(node => existing.has(node.id));
        const status: ChapterStatus = ctl.signal.aborted
          ? (existing.size > 0 ? 'partial' : 'pending')
          : fullyDone
            ? (errs.length === 0 ? 'done' : 'partial')
            : 'partial';
        n.set(chapter.href, status);
        return n;
      });
    }
  }

  function cancelChapter(chapter: ChapterFile) {
    abortRefs.current.get(chapter.href)?.abort();
  }

  async function translateAll() {
    if (!parsed) return;
    translateAllAbortRef.current = new AbortController();
    const signal = translateAllAbortRef.current.signal;

    // Build the queue of chapters that need work right now.
    const queue: ChapterFile[] = [];
    for (const ch of parsed.chapters) {
      const status = chapterStatusRef.current.get(ch.href);
      if (status === 'done') continue;
      if (runningRef.current.has(ch.href)) continue;
      if (ch.nodes.length === 0) continue;
      queue.push(ch);
    }

    // Worker pool — each worker pulls the next chapter until the queue empties.
    const workers = Array.from({ length: Math.min(CONCURRENT_CHAPTERS, queue.length) }, async () => {
      while (queue.length > 0) {
        if (signal.aborted) return;
        const ch = queue.shift();
        if (!ch) return;
        await translateChapter(ch);
      }
    });
    await Promise.all(workers);
    translateAllAbortRef.current = null;

    // Auto-download once everything is done (skip if user cancelled or nothing got translated).
    if (!signal.aborted) {
      let translated = 0;
      for (const m of allTranslationsRef.current.values()) translated += m.size;
      if (translated > 0) {
        await downloadResult();
      }
    }
  }

  function cancelAll() {
    translateAllAbortRef.current?.abort();
    abortRefs.current.forEach(c => c.abort());
  }

  async function getTranslatedTitle(): Promise<string> {
    if (!parsed) return '';
    const original = parsed.metadata.title || '';
    if (!original) return 'book';
    if (translatedTitleRef.current) return translatedTitleRef.current;
    if (!settings.apiKey) return original;
    try {
      const result = await translateBatch([original], {
        provider: settings.provider,
        model: FREE_MODEL_PROVIDERS.has(settings.provider) ? settings.customModel : settings.model,
        apiKey: settings.apiKey,
        sourceLang: settings.sourceLang,
        targetLang: settings.targetLang,
        tone: settings.tone,
        customEndpoint: settings.customEndpoint,
      });
      const t = (result[0] || '').trim() || original;
      translatedTitleRef.current = t;
      return t;
    } catch {
      return original;
    }
  }

  async function downloadResult() {
    if (!parsed) return;
    setBuilding(true);
    try {
      const translatedTitle = await getTranslatedTitle();
      const targetLangCode = LANG_NAME_TO_CODE[settings.targetLang] || 'zh';
      const blob = await buildBilingualEpub(parsed, allTranslationsRef.current, targetLangCode);
      // Allow letters in any script (CJK, Cyrillic, etc.), digits, spaces, dashes, underscores.
      const sanitize = (s: string) => s.replace(/[^\p{L}\p{N}\-_ ]/gu, '_').trim();
      const original = sanitize(parsed.metadata.title || '') || 'book';
      const translated = sanitize(translatedTitle);
      // If the title is the same in both languages (or translation failed silently), don't duplicate.
      const fileBase = translated && translated !== original
        ? `${translated} - ${original}`
        : original;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileBase} (bilingual).epub`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (e) {
      alert(t('ebookTranslator.browse.buildFailed') + ' ' + (e instanceof Error ? e.message : String(e)));
    } finally {
      setBuilding(false);
    }
  }

  const canStart = settings.apiKey.trim().length > 0
    && (settings.provider !== 'custom' || (settings.customEndpoint.trim().length > 0 && settings.customModel.trim().length > 0))
    && (settings.provider !== 'openrouter' || settings.customModel.trim().length > 0);
  const totalNodes = parsed?.chapters.reduce((s, c) => s + c.nodes.length, 0) ?? 0;
  const translatedNodes = useMemo(() => {
    let n = 0;
    for (const m of allTranslations.values()) n += m.size;
    return n;
  }, [allTranslations]);
  const overallPct = totalNodes > 0 ? (translatedNodes / totalNodes) * 100 : 0;
  const anyRunning = running.size > 0;

  const chapter = parsed?.chapters[selectedIdx] ?? null;
  const chapterTranslations = chapter ? allTranslations.get(chapter.href) ?? new Map<string, string>() : new Map<string, string>();
  const chapterIsRunning = chapter ? running.has(chapter.href) : false;
  const chapterStat: ChapterStatus = chapter ? chapterStatus.get(chapter.href) ?? 'pending' : 'pending';
  const chapterErrList = chapter ? chapterErrors.get(chapter.href) ?? [] : [];

  return (
    <div className={`bt bt--${step}`}>
      <header className="bt__header">
        <div className="bt__eyebrow">{t('ebookTranslator.eyebrow')}</div>
        <h1 className="bt__title">{t('ebookTranslator.title')}</h1>
        <p className="bt__subtitle">{t('ebookTranslator.subtitle')}</p>
      </header>

      <div className="bt__steps">
        {(['settings', 'upload', 'browse'] as Step[]).map((s, i) => {
          const active = s === step;
          const order: Step[] = ['settings', 'upload', 'browse'];
          const done = order.indexOf(step) > order.indexOf(s);
          return (
            <div
              key={s}
              className={`bt__step ${active ? 'bt__step--active' : ''} ${done ? 'bt__step--done' : ''}`}
            >
              {i + 1}. {t(`ebookTranslator.steps.${s}`)}
            </div>
          );
        })}
        {step === 'browse' && parsed && (
          <>
            <div className="bt__steps-spacer" />
            {anyRunning ? (
              <button type="button" className="bt__btn bt__btn--small" onClick={cancelAll}>
                {t('ebookTranslator.actions.cancelRunning')}
              </button>
            ) : (
              <button type="button" className="bt__btn bt__btn--small bt__btn--primary" onClick={translateAll}>
                {t('ebookTranslator.actions.translateAllRemaining')}
              </button>
            )}
            <button
              type="button"
              className="bt__btn bt__btn--small"
              onClick={downloadResult}
              disabled={building || translatedNodes === 0}
            >
              {building ? t('ebookTranslator.actions.building') : t('ebookTranslator.actions.downloadEpub')}
            </button>
            <div className="bt__progress-pair">
              <div className="bt__progress-bar" style={{ width: 140 }}>
                <div className="bt__progress-fill" style={{ width: `${overallPct}%` }} />
              </div>
              <span className="bt__progress-pct">{overallPct.toFixed(0)}%</span>
            </div>
          </>
        )}
      </div>

      {step === 'settings' && (
        <SettingsPanel
          t={t}
          settings={settings}
          provider={provider}
          canStart={canStart}
          onChange={updateSettings}
          onContinue={() => setStep('upload')}
        />
      )}

      {step === 'upload' && (
        <div className="bt__panel">
          <DropZone t={t} onFile={handleFile} />
          {parsing && <div className="bt__notice">{t('ebookTranslator.upload.parsing')}</div>}
          {parseError && <div className="bt__notice bt__notice--error">{parseError}</div>}
          <div className="bt__actions">
            <button type="button" className="bt__btn" onClick={() => setStep('settings')}>{t('ebookTranslator.actions.back')}</button>
          </div>
        </div>
      )}

      {step === 'browse' && parsed && chapter && (
        <div className={`bt__browse`}>
          <aside className={`bt__sidebar ${sidebarCollapsed ? 'bt__sidebar--collapsed' : ''}`}>
            <div className="bt__sidebar-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="bt__label" style={{ margin: 0 }}>{t('ebookTranslator.browse.chapters')}</div>
                <button
                  type="button"
                  className="bt__sidebar-toggle"
                  onClick={() => setSidebarCollapsed(v => !v)}
                >
                  {sidebarCollapsed ? t('ebookTranslator.actions.show') : t('ebookTranslator.actions.hide')}
                </button>
              </div>
            </div>
            <ul className="bt__sidebar-list">
              {parsed.chapters.map((c, idx) => {
                const status = chapterStatus.get(c.href) ?? 'pending';
                const tr = allTranslations.get(c.href);
                const trCount = tr?.size ?? 0;
                return (
                  <li key={c.href}>
                    <button
                      type="button"
                      className={`bt__sidebar-item ${idx === selectedIdx ? 'bt__sidebar-item--active' : ''}`}
                      onClick={() => setSelectedIdx(idx)}
                    >
                      <span className={`bt__chap-icon bt__chap-icon--${status}`}>{STATUS_ICONS[status]}</span>
                      <span className="bt__chap-title">{c.title}</span>
                      <span className="bt__chap-count">
                        {c.nodes.length === 0 ? '—' : `${trCount}/${c.nodes.length}`}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="bt__sidebar-footer">
              <button type="button" className="bt__btn bt__btn--small" onClick={() => setStep('settings')}>
                {t('ebookTranslator.actions.settingsModel')}
              </button>
            </div>
          </aside>

          <section className="bt__main">
            <div className="bt__main-header">
              {chapter.nodes.length > 0 && (
                <div className="bt__main-actions">
                  <select
                    className="bt__select bt__select--inline"
                    value={settings.tone}
                    onChange={e => updateSettings({ tone: e.target.value })}
                    disabled={chapterIsRunning}
                    title={t('ebookTranslator.browse.toneTitle')}
                  >
                    {TONES.map(tone => {
                      const label = t(`ebookTranslator.tones.${tone.id}.label`);
                      const hint = t(`ebookTranslator.tones.${tone.id}.hint`);
                      return (
                        <option key={tone.id} value={tone.id}>
                          {label}{hint ? ` · ${hint}` : ''}
                        </option>
                      );
                    })}
                  </select>
                  {chapterIsRunning ? (
                    <button type="button" className="bt__btn bt__btn--small" onClick={() => cancelChapter(chapter)}>
                      {t('ebookTranslator.actions.cancel')}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bt__btn bt__btn--small bt__btn--primary"
                      onClick={() => translateChapter(chapter, chapterStat === 'done')}
                    >
                      {chapterStat === 'done'
                        ? t('ebookTranslator.actions.retranslate')
                        : chapterTranslations.size > 0
                          ? t('ebookTranslator.actions.resume')
                          : t('ebookTranslator.actions.translateChapter')}
                    </button>
                  )}
                </div>
              )}
              <div className="bt__main-titlerow">
                <h2 className="bt__main-title">{chapter.title}</h2>
                <div className="bt__main-meta">
                  {t('ebookTranslator.browse.paragraphCount')
                    .replace('{nodes}', String(chapter.nodes.length))
                    .replace('{translated}', String(chapterTranslations.size))}
                </div>
              </div>
            </div>

            {chapterErrList.length > 0 && (
              <div className="bt__notice bt__notice--error">
                {(chapterErrList.length === 1
                  ? t('ebookTranslator.browse.errorOne')
                  : t('ebookTranslator.browse.errorMany')
                ).replace('{count}', String(chapterErrList.length))}
                {chapterErrList[0]?.message && (
                  <div style={{ marginTop: 8, wordBreak: 'break-word' }}>{chapterErrList[0].message}</div>
                )}
              </div>
            )}

            <div className="bt__chapter-content">
              {chapter.nodes.length === 0 ? (
                <div className="bt__notice">{t('ebookTranslator.browse.noTranslatableText')}</div>
              ) : (
                chapter.nodes.map(node => {
                  const tr = chapterTranslations.get(node.id);
                  const hasPreserved = node.preserved.length > 0;
                  const origNode = hasPreserved
                    ? <p className="bt__bi-orig" dangerouslySetInnerHTML={{ __html: renderWithPlaceholders(node.text, node.preserved) }} />
                    : <p className="bt__bi-orig">{node.text}</p>;
                  let trNode: React.ReactNode = null;
                  if (tr) {
                    trNode = hasPreserved
                      ? <p className="bt__bi-tr" dangerouslySetInnerHTML={{ __html: renderWithPlaceholders(tr, node.preserved) }} />
                      : <p className="bt__bi-tr">{tr}</p>;
                  } else if (chapterIsRunning) {
                    trNode = (
                      <p className="bt__bi-tr bt__bi-pending">
                        <span className="bt__spinner" aria-label={t('ebookTranslator.browse.translatingAria')} />
                        <span className="bt__spinner-label">{t('ebookTranslator.browse.translatingLabel')}</span>
                      </p>
                    );
                  }
                  return (
                    <div key={node.id}>
                      {origNode}
                      {trNode}
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

type TFn = (key: string) => string;

function translateModelHint(t: TFn, hint: string | undefined): string {
  if (!hint) return '';
  const key = MODEL_HINT_KEYS[hint];
  return key ? t(key) : hint;
}

function SettingsPanel({
  t,
  settings,
  provider,
  canStart,
  onChange,
  onContinue,
}: {
  t: TFn;
  settings: Settings;
  provider: ReturnType<typeof findProvider>;
  canStart: boolean;
  onChange: (patch: Partial<Settings>) => void;
  onContinue: () => void;
}) {
  const [showApiKey, setShowApiKey] = useState(false);
  return (
    <div className="bt__panel">
      <div className="bt__row">
        <div className="bt__field">
          <label className="bt__label">{t('ebookTranslator.settings.provider')}</label>
          <select
            className="bt__select"
            value={settings.provider}
            onChange={e => onChange({ provider: e.target.value as ProviderId })}
          >
            {PROVIDERS.map(p => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
            <option value="custom">{t('ebookTranslator.settings.customProvider')}</option>
          </select>
        </div>
        {FREE_MODEL_PROVIDERS.has(settings.provider) ? (
          <div className="bt__field">
            <label className="bt__label">{t('ebookTranslator.settings.customModel')}</label>
            <input
              className="bt__input"
              type="text"
              value={settings.customModel}
              placeholder={settings.provider === 'openrouter'
                ? t('ebookTranslator.settings.openrouterModelPlaceholder')
                : settings.provider === 'opencode'
                  ? t('ebookTranslator.settings.opencodeModelPlaceholder')
                : t('ebookTranslator.settings.customModelPlaceholder')}
              onChange={e => onChange({ customModel: e.target.value })}
            />
          </div>
        ) : (
          <div className="bt__field">
            <label className="bt__label">{t('ebookTranslator.settings.model')}</label>
            <select
              className="bt__select"
              value={settings.model}
              onChange={e => onChange({ model: e.target.value })}
            >
              {provider.models.map(m => {
                const hint = translateModelHint(t, m.hint);
                return (
                  <option key={m.id} value={m.id}>
                    {m.label}{hint ? ` — ${hint}` : ''}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>

      {settings.provider === 'custom' && (
        <div className="bt__field">
          <label className="bt__label">{t('ebookTranslator.settings.customEndpoint')}</label>
          <input
            className="bt__input"
            type="url"
            value={settings.customEndpoint}
            placeholder={t('ebookTranslator.settings.customEndpointPlaceholder')}
            onChange={e => onChange({ customEndpoint: e.target.value })}
          />
          <span className="bt__hint">{t('ebookTranslator.settings.customEndpointHint')}</span>
        </div>
      )}

      <div className="bt__field">
        <label className="bt__label">{t('ebookTranslator.settings.apiKey')}</label>
        <div className="bt__input-wrap">
          <input
            className="bt__input bt__input--with-toggle"
            type={showApiKey ? 'text' : 'password'}
            autoComplete="off"
            spellCheck={false}
            value={settings.apiKey}
            placeholder={t('ebookTranslator.settings.apiKeyPlaceholder').replace('{provider}', provider.label)}
            onChange={e => onChange({ apiKey: e.target.value })}
          />
          <button
            type="button"
            className="bt__input-toggle"
            onClick={() => setShowApiKey(v => !v)}
            aria-label={showApiKey ? t('ebookTranslator.settings.hideApiKey') : t('ebookTranslator.settings.showApiKey')}
            aria-pressed={showApiKey}
          >
            {showApiKey ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.77 19.77 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.77 19.77 0 0 1-3.16 4.19" />
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        <span className="bt__hint">
          {settings.provider === 'custom' ? null : (() => {
            const raw = t('ebookTranslator.settings.apiKeyHint');
            const linkAnchor = '{link}';
            const provAnchor = '{provider}';
            const parts: React.ReactNode[] = [];
            let rest = raw;
            let i = 0;
            while (rest.length > 0) {
              const lIdx = rest.indexOf(linkAnchor);
              const pIdx = rest.indexOf(provAnchor);
              if (lIdx === -1 && pIdx === -1) { parts.push(rest); break; }
              const isLink = lIdx !== -1 && (pIdx === -1 || lIdx < pIdx);
              const at = isLink ? lIdx : pIdx;
              const anchor = isLink ? linkAnchor : provAnchor;
              if (at > 0) parts.push(rest.slice(0, at));
              if (isLink) {
                parts.push(<a key={`a${i++}`} href={provider.keyHelp} target="_blank" rel="noopener noreferrer">{provider.keyHelp}</a>);
              } else {
                parts.push(<span key={`p${i++}`}>{provider.label}</span>);
              }
              rest = rest.slice(at + anchor.length);
            }
            return parts;
          })()}
        </span>
        <label className="bt__checkbox">
          <input
            type="checkbox"
            checked={settings.rememberKey}
            onChange={e => onChange({ rememberKey: e.target.checked })}
          />
          {t('ebookTranslator.settings.rememberKey')}
        </label>
      </div>

      <div className="bt__row">
        <div className="bt__field">
          <label className="bt__label">{t('ebookTranslator.settings.translateFrom')}</label>
          <select
            className="bt__select"
            value={settings.sourceLang}
            onChange={e => onChange({ sourceLang: e.target.value })}
          >
            {LANG_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div className="bt__field">
          <label className="bt__label">{t('ebookTranslator.settings.translateTo')}</label>
          <select
            className="bt__select"
            value={settings.targetLang}
            onChange={e => onChange({ targetLang: e.target.value })}
          >
            {LANG_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div className="bt__field">
          <label className="bt__label">{t('ebookTranslator.settings.tone')}</label>
          <select
            className="bt__select"
            value={settings.tone}
            onChange={e => onChange({ tone: e.target.value })}
          >
            {TONES.map(tone => {
              const label = t(`ebookTranslator.tones.${tone.id}.label`);
              const hint = t(`ebookTranslator.tones.${tone.id}.hint`);
              return (
                <option key={tone.id} value={tone.id}>
                  {label}{hint ? ` — ${hint}` : ''}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="bt__actions">
        <button
          type="button"
          className="bt__btn bt__btn--primary"
          disabled={!canStart}
          onClick={onContinue}
        >
          {t('ebookTranslator.actions.continue')}
        </button>
      </div>
      {!canStart && <div className="bt__notice">{t('ebookTranslator.settings.needApiKey')}</div>}
    </div>
  );
}

function DropZone({ t, onFile }: { t: TFn; onFile: (f: File) => void }) {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      className={`bt__drop ${active ? 'bt__drop--active' : ''}`}
      onDragOver={e => { e.preventDefault(); setActive(true); }}
      onDragLeave={() => setActive(false)}
      onDrop={e => {
        e.preventDefault();
        setActive(false);
        const f = e.dataTransfer.files[0];
        if (f) onFile(f);
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".epub,application/epub+zip"
        onChange={e => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
        }}
      />
      <div className="bt__drop-title">{t('ebookTranslator.upload.dropTitle')}</div>
      <div>{t('ebookTranslator.upload.dropSubtitle')}</div>
    </label>
  );
}
