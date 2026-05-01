export type ProviderId =
  | 'openai'
  | 'anthropic'
  | 'gemini'
  | 'deepseek'
  | 'qwen'
  | 'glm'
  | 'kimi'
  | 'openrouter'
  | 'opencode'
  | 'custom';

export interface ModelOption {
  id: string;
  label: string;
  hint?: string;
}

const OPENCODE_GO_ENDPOINT = 'https://opencode.ai/zen/go/v1/chat/completions';
const OPENCODE_GO_PROXY_ENDPOINT = 'https://philoli-opencode-go-proxy.philo-2e9.workers.dev/v1/chat/completions';

/** API shape — most providers expose an OpenAI-compatible /chat/completions endpoint. */
export type ApiShape = 'openai-compat' | 'anthropic' | 'gemini';

export interface ProviderConfig {
  id: ProviderId;
  label: string;
  models: ModelOption[];
  /** URL where the user can get an API key. */
  keyHelp: string;
  api: ApiShape;
  /** Full chat-completions endpoint URL (for `openai-compat` only). */
  endpoint?: string;
}

export const PROVIDERS: ProviderConfig[] = [
  {
    id: 'gemini',
    label: 'Google Gemini',
    api: 'gemini',
    keyHelp: 'https://aistudio.google.com/apikey',
    models: [
      { id: 'gemini-3-flash-preview', label: 'Gemini 3 Flash (preview)', hint: 'newest, fast' },
      { id: 'gemini-3.1-flash-lite-preview', label: 'Gemini 3.1 Flash Lite (preview)', hint: 'cheapest' },
      { id: 'gemini-3.1-pro-preview', label: 'Gemini 3.1 Pro (preview)', hint: 'best quality' },
    ],
  },
  {
    id: 'openai',
    label: 'OpenAI',
    api: 'openai-compat',
    endpoint: 'https://api.openai.com/v1/chat/completions',
    keyHelp: 'https://platform.openai.com/api-keys',
    models: [
      { id: 'gpt-5.4-nano', label: 'GPT-5.4 nano', hint: 'cheapest, fast' },
      { id: 'gpt-5.4-mini', label: 'GPT-5.4 mini', hint: 'balanced' },
      { id: 'gpt-5.5', label: 'GPT-5.5', hint: 'best quality' },
    ],
  },
  {
    id: 'anthropic',
    label: 'Anthropic Claude',
    api: 'anthropic',
    keyHelp: 'https://console.anthropic.com/settings/keys',
    models: [
      { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5', hint: 'cheapest, fast' },
      { id: 'claude-sonnet-4-6', label: 'Claude Sonnet 4.6', hint: 'higher quality' },
      { id: 'claude-opus-4-7', label: 'Claude Opus 4.7', hint: 'best quality' },
    ],
  },
  {
    id: 'deepseek',
    label: 'DeepSeek',
    api: 'openai-compat',
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    keyHelp: 'https://platform.deepseek.com/api_keys',
    models: [
      { id: 'deepseek-v4-flash', label: 'DeepSeek V4 Flash', hint: 'cheapest, fast' },
      { id: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro', hint: 'best quality' },
    ],
  },
  {
    id: 'qwen',
    label: 'Qwen 通义千问',
    api: 'openai-compat',
    // China region (DashScope). Mainland keys / mainland users.
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    keyHelp: 'https://bailian.console.aliyun.com/?apiKey=1',
    models: [
      { id: 'qwen3.6-flash', label: 'Qwen 3.6 Flash', hint: 'cheapest, fast' },
      { id: 'qwen3.6-plus', label: 'Qwen 3.6 Plus', hint: 'balanced' },
      { id: 'qwen3.6-max-preview', label: 'Qwen 3.6 Max (preview)', hint: 'best quality' },
    ],
  },
  {
    id: 'glm',
    label: 'Zhipu GLM (智谱)',
    api: 'openai-compat',
    endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    keyHelp: 'https://bigmodel.cn/usercenter/proj-mgmt/apikeys',
    models: [
      { id: 'glm-4.7-flash', label: 'GLM-4.7 Flash', hint: 'free tier, fast' },
      { id: 'glm-4.7', label: 'GLM-4.7', hint: 'flagship coding/agentic' },
      { id: 'glm-5', label: 'GLM-5', hint: 'best quality' },
    ],
  },
  {
    id: 'kimi',
    label: 'Moonshot Kimi',
    api: 'openai-compat',
    endpoint: 'https://api.moonshot.ai/v1/chat/completions',
    keyHelp: 'https://platform.moonshot.ai/console/api-keys',
    models: [
      { id: 'kimi-k2.6', label: 'Kimi K2.6', hint: 'latest flagship, 262K context' },
      { id: 'moonshot-v1-128k', label: 'Moonshot v1 128K', hint: 'long context, stable' },
      { id: 'moonshot-v1-32k', label: 'Moonshot v1 32K', hint: 'cheaper' },
    ],
  },
  {
    id: 'openrouter',
    label: 'OpenRouter',
    api: 'openai-compat',
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    keyHelp: 'https://openrouter.ai/settings/keys',
    /** User types any model ID (e.g. google/gemini-2.5-flash). */
    models: [{ id: 'openrouter', label: 'openrouter' }],
  },
  {
    id: 'opencode',
    label: 'OpenCode',
    api: 'openai-compat',
    endpoint: OPENCODE_GO_PROXY_ENDPOINT,
    keyHelp: 'https://opencode.ai/docs/go/',
    models: [{ id: 'opencode', label: 'opencode' }],
  },
];

/** Sentinel config for "Custom (OpenAI-compatible)". */
const CUSTOM_PROVIDER: ProviderConfig = {
  id: 'custom',
  label: 'Custom (OpenAI-compatible)',
  api: 'openai-compat',
  keyHelp: '',
  endpoint: '',          // filled at call-time from user input
  models: [{ id: 'custom', label: 'custom' }],
};

export function findProvider(id: ProviderId): ProviderConfig {
  if (id === 'custom') return CUSTOM_PROVIDER;
  const p = PROVIDERS.find(x => x.id === id);
  if (!p) throw new Error(`Unknown provider: ${id}`);
  return p;
}

export interface ToneOption {
  id: string;
  label: string;
  hint?: string;
  /** Style instruction injected into the system prompt. */
  guidance: string;
  /** Sampling temperature passed to the model. Higher = more creative. */
  temperature: number;
}

export const TONES: ToneOption[] = [
  {
    id: 'idiomatic',
    label: 'Idiomatic',
    hint: 'natural & fluent — most books',
    temperature: 0.8,
    guidance: `Translate freely and idiomatically. Your goal is prose that reads as if a native speaker wrote it from scratch — NOT a translation that preserves the source sentence structure.

Specifically:
- Re-craft each sentence in the target language. Reorder, split, or merge sentences when it sounds more natural.
- Translate the MEANING and FEELING, not the words. If a literal translation would feel awkward or foreign, choose an idiomatic native expression that carries the same emotional weight.
- Replace source-language idioms, metaphors, and cultural references with target-language equivalents the reader will instinctively understand.
- Prefer vivid, specific, native vocabulary over neutral dictionary words.
- Match the original's emotional register precisely (warm stays warm, dry stays dry, urgent stays urgent), but express it in the target language's natural way of conveying that register.

Avoid: stiff word-for-word renderings, awkward calques, "translation-ese", overly formal phrasing where the original is casual.

Best for non-fiction, business, popular science, essays, blog posts, light fiction, and most casual reading.`,
  },
  {
    id: 'literary',
    label: 'Literary',
    hint: 'novels & literary works',
    temperature: 0.7,
    guidance: 'Translate with literary care for novels, essays, memoirs, and poetry. Preserve the author\'s voice, style, rhythm, metaphors, and figurative language. Read like a polished published translation by a careful human translator — not a mechanical or paraphrased one. Where the source uses a distinctive image, find a target-language image of equivalent power; do not flatten it into plain prose.',
  },
  {
    id: 'technical',
    label: 'Technical',
    hint: 'professional & reference books',
    temperature: 0.2,
    guidance: 'Translate professional, technical, or reference books (programming, science, textbooks, academic). Prioritize accuracy and precision over flow. Use the conventional target-language form for technical terminology (e.g., "callback" → "回调"). Keep code, formulas, identifiers, product names, and proper nouns in their original form unless an established translation exists. Translate sentence-by-sentence faithfully — do not paraphrase or restructure for stylistic reasons.',
  },
];

export function findTone(id: string): ToneOption {
  return TONES.find(t => t.id === id) ?? TONES[0];
}

function resolveOpenAICompatEndpoint(endpoint: string): string {
  return endpoint.trim() === OPENCODE_GO_ENDPOINT ? OPENCODE_GO_PROXY_ENDPOINT : endpoint;
}

export interface TranslateOptions {
  provider: ProviderId;
  model: string;
  apiKey: string;
  sourceLang: string;
  targetLang: string;
  /** One of TONES[].id; defaults to 'literary' if missing/unknown. */
  tone?: string;
  signal?: AbortSignal;
  /** Override endpoint URL — used by the "custom" provider. */
  customEndpoint?: string;
}

const SYSTEM_PROMPT = (sourceLang: string, targetLang: string, toneId: string | undefined) => {
  const tone = findTone(toneId ?? 'literary');
  return `You are a professional translator. Translate the user's text from ${sourceLang} into ${targetLang}.

Style: ${tone.guidance}

Rules:
- Output ONLY the translation. No explanations, no notes, no quotes around it.
- Preserve paragraph breaks exactly as in the input.
- Keep proper nouns and code/markup as-is unless idiomatic to translate.
- CRITICAL: tokens like \`⟦M0⟧\`, \`⟦M1⟧\`, \`⟦M12⟧\` are placeholders for math formulas, code, or images. Copy them VERBATIM into the translation at semantically appropriate positions. Never alter, translate, renumber, or remove them. They must appear in the output exactly the same number of times as in the input.
- The user will provide numbered passages. Reply with the SAME numbering, one translation per line, in the same order.

Input format:
[1] First passage.
[2] Second passage.

Output format (exact):
[1] Translation of the first passage.
[2] Translation of the second passage.`;
};

function buildBatchPrompt(passages: string[]): string {
  return passages.map((text, i) => `[${i + 1}] ${text}`).join('\n\n');
}

function parseBatchResponse(response: string, expectedCount: number): string[] {
  const out: string[] = new Array(expectedCount).fill('');
  // Match "[N] ..." up to the next "[N+1]" or end of string.
  const pattern = /\[(\d+)\]\s*([\s\S]*?)(?=\n\s*\[\d+\]|$)/g;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(response)) !== null) {
    const idx = parseInt(m[1], 10) - 1;
    if (idx >= 0 && idx < expectedCount) {
      out[idx] = m[2].trim();
    }
  }
  return out;
}

function extractErrorMessage(body: string): string {
  const trimmed = body.trim();
  if (!trimmed) return 'Empty error response';
  try {
    const parsed = JSON.parse(trimmed) as {
      error?: string | { message?: string; error?: { message?: string } };
      message?: string;
      type?: string;
    };
    if (typeof parsed.error === 'string') return parsed.error;
    if (parsed.error && typeof parsed.error === 'object') {
      if (typeof parsed.error.message === 'string') return parsed.error.message;
      if (parsed.error.error && typeof parsed.error.error.message === 'string') return parsed.error.error.message;
    }
    if (typeof parsed.message === 'string') return parsed.message;
  } catch {
    // Fall through to plain-text handling.
  }
  return trimmed.length > 300 ? `${trimmed.slice(0, 300)}…` : trimmed;
}

/**
 * Generic OpenAI-compatible chat-completions caller. Used by OpenAI, DeepSeek,
 * Qwen, GLM, Kimi — all expose the same /chat/completions schema.
 */
async function callOpenAICompat(
  passages: string[],
  opts: TranslateOptions,
  endpoint: string,
  providerLabel: string,
): Promise<string[]> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`,
    },
    signal: opts.signal,
    body: JSON.stringify({
      model: opts.model,
      temperature: findTone(opts.tone ?? '').temperature,
      max_tokens: 16384,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT(opts.sourceLang, opts.targetLang, opts.tone) },
        { role: 'user', content: buildBatchPrompt(passages) },
      ],
    }),
  });
  if (!res.ok) throw new Error(`${providerLabel} ${res.status}: ${extractErrorMessage(await res.text())}`);
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content ?? '';
  return parseBatchResponse(text, passages.length);
}

async function callAnthropic(
  passages: string[],
  opts: TranslateOptions,
): Promise<string[]> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': opts.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    signal: opts.signal,
    body: JSON.stringify({
      model: opts.model,
      max_tokens: 8192,
      temperature: findTone(opts.tone ?? '').temperature,
      system: SYSTEM_PROMPT(opts.sourceLang, opts.targetLang, opts.tone),
      messages: [{ role: 'user', content: buildBatchPrompt(passages) }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.content?.[0]?.text ?? '';
  return parseBatchResponse(text, passages.length);
}

async function callGemini(
  passages: string[],
  opts: TranslateOptions,
): Promise<string[]> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(opts.model)}:generateContent?key=${encodeURIComponent(opts.apiKey)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: opts.signal,
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT(opts.sourceLang, opts.targetLang, opts.tone) }] },
      contents: [{ role: 'user', parts: [{ text: buildBatchPrompt(passages) }] }],
      generationConfig: {
        temperature: findTone(opts.tone ?? '').temperature,
        maxOutputTokens: 16384,
      },
    }),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  return parseBatchResponse(text, passages.length);
}

/**
 * Translate a batch of passages. Returns translations indexed identically to input.
 * Throws on network/auth failures (caller decides retry policy).
 */
export async function translateBatch(
  passages: string[],
  opts: TranslateOptions,
): Promise<string[]> {
  if (passages.length === 0) return [];
  const cfg = findProvider(opts.provider);
  switch (cfg.api) {
    case 'openai-compat': {
      const endpoint = opts.provider === 'custom' ? opts.customEndpoint : cfg.endpoint;
      if (!endpoint) throw new Error(`${cfg.label} missing endpoint config`);
      return callOpenAICompat(passages, opts, resolveOpenAICompatEndpoint(endpoint), cfg.label);
    }
    case 'anthropic':
      return callAnthropic(passages, opts);
    case 'gemini':
      return callGemini(passages, opts);
  }
}

/**
 * Group passages into batches under a soft character budget so a single API
 * call doesn't blow past the model's context or the response token cap.
 */
export function chunkPassages(
  passages: { id: string; text: string }[],
  maxChars = 12000,
  maxItems = 200,
): { id: string; text: string }[][] {
  const out: { id: string; text: string }[][] = [];
  let current: { id: string; text: string }[] = [];
  let size = 0;
  for (const p of passages) {
    const len = p.text.length;
    if (current.length > 0 && (size + len > maxChars || current.length >= maxItems)) {
      out.push(current);
      current = [];
      size = 0;
    }
    current.push(p);
    size += len;
  }
  if (current.length > 0) out.push(current);
  return out;
}
