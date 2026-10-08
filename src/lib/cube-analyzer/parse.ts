import type { Penalty, Session, Solve } from './types';

export class CsTimerParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CsTimerParseError';
  }
}

// csTimer export shape: { session1: [[[penalty, rawMs], scramble, comment, unixSec], ...],
//                         properties: { sessionData: '{"1":{"name":"..."}, ...}' } }
// penalty is 0 (none), 2000 (+2) or -1 (DNF).
type RawSolve = [[number, number], string, string, number];

function isRawSolve(v: unknown): v is RawSolve {
  if (!Array.isArray(v) || v.length < 4) return false;
  const [pen, scramble, , ts] = v;
  return (
    Array.isArray(pen) && pen.length >= 2 &&
    typeof pen[0] === 'number' && typeof pen[1] === 'number' &&
    typeof scramble === 'string' && typeof ts === 'number'
  );
}

function toPenalty(code: number): Penalty {
  if (code === -1) return 'dnf';
  if (code > 0) return 'plus2';
  return 'none';
}

function sessionNames(raw: Record<string, unknown>): Record<string, string> {
  const props = raw.properties;
  if (!props || typeof props !== 'object') return {};
  const data = (props as Record<string, unknown>).sessionData;
  if (typeof data !== 'string') return {};
  try {
    const meta = JSON.parse(data) as Record<string, { name?: unknown }>;
    const out: Record<string, string> = {};
    for (const [id, entry] of Object.entries(meta)) {
      if (entry && typeof entry === 'object' && entry.name != null) out[id] = String(entry.name);
    }
    return out;
  } catch {
    return {};
  }
}

/** Parse a csTimer export (the text of the downloaded file). Sessions without solves are dropped. */
export function parseCsTimerExport(text: string): Session[] {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new CsTimerParseError('not-json');
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new CsTimerParseError('not-object');
  }
  const obj = raw as Record<string, unknown>;
  const names = sessionNames(obj);
  const sessions: Session[] = [];

  for (const key of Object.keys(obj)) {
    const m = key.match(/^session(\d+)$/);
    if (!m) continue;
    const arr = obj[key];
    if (!Array.isArray(arr) || arr.length === 0) continue;
    const solves: Solve[] = [];
    for (const item of arr) {
      if (!isRawSolve(item)) continue;
      solves.push({
        timeMs: item[0][1],
        penalty: toPenalty(item[0][0]),
        scramble: item[1],
        timestamp: item[3] * 1000,
      });
    }
    if (solves.length === 0) continue;
    solves.sort((a, b) => a.timestamp - b.timestamp);
    const id = m[1];
    sessions.push({ id, name: names[id] ?? id, solves });
  }

  if (sessions.length === 0) throw new CsTimerParseError('no-sessions');
  sessions.sort((a, b) => Number(a.id) - Number(b.id));
  return sessions;
}
