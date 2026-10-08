import type { Solve } from './types';

/** Time counted toward averages: raw + 2s for a +2, Infinity for a DNF. */
export function effectiveMs(s: Solve): number {
  if (s.penalty === 'dnf') return Infinity;
  return s.timeMs + (s.penalty === 'plus2' ? 2000 : 0);
}

/** csTimer convention: trim 5% from each end, at least one (so ao5/ao12 drop best+worst, ao100 drops 5+5). */
export function trimCount(n: number): number {
  return Math.max(1, Math.ceil(n * 0.05));
}

/** Average of N over a window. More DNFs than the trim allows → Infinity (a DNF average). */
export function avgOfN(window: Solve[]): number {
  const n = window.length;
  const trim = trimCount(n);
  const times = window.map(effectiveMs);
  const dnfCount = times.filter(t => !isFinite(t)).length;
  if (dnfCount > trim) return Infinity;
  const sorted = [...times].sort((a, b) => a - b);
  const kept = sorted.slice(trim, n - trim);
  return kept.reduce((a, b) => a + b, 0) / kept.length;
}

/** Rolling aoN aligned to the solve index; null before the window fills or when the window is a DNF. */
export function rollingAo(solves: Solve[], n: number): (number | null)[] {
  const out: (number | null)[] = new Array(solves.length).fill(null);
  if (solves.length < n) return out;
  // Running sum of a sorted window would be faster, but n ≤ 100 and sessions are a few thousand solves.
  for (let i = n - 1; i < solves.length; i++) {
    const a = avgOfN(solves.slice(i - n + 1, i + 1));
    out[i] = isFinite(a) ? a : null;
  }
  return out;
}

/** Best-so-far at each index. */
export function runningMin(arr: (number | null)[]): (number | null)[] {
  let best = Infinity;
  return arr.map(v => {
    if (v != null && v < best) best = v;
    return isFinite(best) ? best : null;
  });
}

export function bestOf(arr: (number | null)[]): number | null {
  let best: number | null = null;
  for (const v of arr) if (v != null && (best == null || v < best)) best = v;
  return best;
}

export interface Summary {
  count: number;
  dnf: number;
  plus2: number;
  best: number | null;
  worst: number | null;
  mean: number | null;
  median: number | null;
  stdev: number | null;
  firstTimestamp: number;
  lastTimestamp: number;
  practiceDays: number;
}

export function summarize(solves: Solve[]): Summary {
  const valid = solves.map(effectiveMs).filter(isFinite);
  const sorted = [...valid].sort((a, b) => a - b);
  const mean = valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : null;
  const stdev = mean != null
    ? Math.sqrt(valid.reduce((a, b) => a + (b - mean) ** 2, 0) / valid.length)
    : null;
  const ts = solves.map(s => s.timestamp);
  const days = new Set(solves.map(s => dayKey(s.timestamp)));
  return {
    count: solves.length,
    dnf: solves.filter(s => s.penalty === 'dnf').length,
    plus2: solves.filter(s => s.penalty === 'plus2').length,
    best: sorted.length ? sorted[0] : null,
    worst: sorted.length ? sorted[sorted.length - 1] : null,
    mean,
    median: sorted.length ? sorted[Math.floor(sorted.length / 2)] : null,
    stdev,
    firstTimestamp: Math.min(...ts),
    lastTimestamp: Math.max(...ts),
    practiceDays: days.size,
  };
}

/** Local-date key, YYYY-MM-DD. */
export function dayKey(timestamp: number): string {
  const d = new Date(timestamp);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export interface DailyStats {
  keys: string[];
  counts: number[];
  /** Mean of valid solves per day, in ms; null for days with only DNFs. */
  avgMs: (number | null)[];
  cumulative: number[];
}

export function groupByDay(solves: Solve[]): DailyStats {
  const byDay = new Map<string, { count: number; sum: number; valid: number }>();
  for (const s of solves) {
    const key = dayKey(s.timestamp);
    let rec = byDay.get(key);
    if (!rec) { rec = { count: 0, sum: 0, valid: 0 }; byDay.set(key, rec); }
    rec.count++;
    const t = effectiveMs(s);
    if (isFinite(t)) { rec.sum += t; rec.valid++; }
  }
  const keys = [...byDay.keys()].sort();
  let cum = 0;
  return {
    keys,
    counts: keys.map(k => byDay.get(k)!.count),
    avgMs: keys.map(k => { const r = byDay.get(k)!; return r.valid ? r.sum / r.valid : null; }),
    cumulative: keys.map(k => { cum += byDay.get(k)!.count; return cum; }),
  };
}

export function hourlyCounts(solves: Solve[]): number[] {
  const hourly = new Array<number>(24).fill(0);
  for (const s of solves) hourly[new Date(s.timestamp).getHours()]++;
  return hourly;
}

export interface HistogramBin { lo: number; hi: number; count: number }

/** Histogram of valid times in seconds, ~25 integer-second-wide bins. */
export function histogram(solves: Solve[]): HistogramBin[] {
  const sec = solves.map(effectiveMs).filter(isFinite).map(t => t / 1000);
  if (sec.length === 0) return [];
  const minT = Math.min(...sec), maxT = Math.max(...sec);
  const width = Math.max(1, Math.ceil((maxT - minT) / 25));
  const start = Math.floor(minT / width) * width;
  // One bin past the floor of the max so a time sitting exactly on a bin edge gets its own bucket.
  const end = Math.floor(maxT / width) * width + width;
  const bins: HistogramBin[] = [];
  for (let x = start; x < end; x += width) bins.push({ lo: x, hi: x + width, count: 0 });
  for (const t of sec) {
    const idx = Math.min(Math.floor((t - start) / width), bins.length - 1);
    bins[idx].count++;
  }
  return bins;
}

/** log2(day1 / day) — how many doublings of speed each day is over the first day. */
export function log2Speedup(dayAvgMs: (number | null)[]): (number | null)[] {
  const base = dayAvgMs.find(v => v != null) ?? null;
  return dayAvgMs.map(v => (v == null || base == null ? null : Math.log2(base / v)));
}

export interface PowerLawPoint { x: number; y: number; date: string; avgMs: number }

export interface PowerLawFit {
  slope: number;
  intercept: number;
  r2: number | null;
  trend: { x: number; y: number }[];
}

/**
 * Power Law of Practice: T = a·N^(-b). With y = -ln(T) and x = ln(N) this is a line whose
 * slope is b. Points are per-day (cumulative solves, skill index).
 */
export function powerLawPoints(daily: DailyStats): PowerLawPoint[] {
  const pts: PowerLawPoint[] = [];
  daily.keys.forEach((date, i) => {
    const avg = daily.avgMs[i];
    const x = daily.cumulative[i];
    if (avg == null || x <= 0) return;
    pts.push({ x, y: -Math.log(avg / 1000), date, avgMs: avg });
  });
  return pts;
}

export function powerLawFit(points: PowerLawPoint[]): PowerLawFit | null {
  if (points.length < 2) return null;
  const xs = points.map(p => Math.log(p.x));
  const ys = points.map(p => p.y);
  const n = xs.length;
  const sx = xs.reduce((a, b) => a + b, 0);
  const sy = ys.reduce((a, b) => a + b, 0);
  const sxy = xs.reduce((a, b, i) => a + b * ys[i], 0);
  const sx2 = xs.reduce((a, b) => a + b * b, 0);
  const denom = n * sx2 - sx * sx;
  const slope = denom !== 0 ? (n * sxy - sx * sy) / denom : 0;
  const intercept = (sy - slope * sx) / n;
  const meanY = sy / n;
  const ssRes = ys.reduce((acc, y, i) => acc + (y - (slope * xs[i] + intercept)) ** 2, 0);
  const ssTot = ys.reduce((acc, y) => acc + (y - meanY) ** 2, 0);
  const r2 = ssTot > 0 ? 1 - ssRes / ssTot : null;
  const xMin = Math.min(...points.map(p => p.x));
  const xMax = Math.max(...points.map(p => p.x));
  const trend: { x: number; y: number }[] = [];
  const steps = 30;
  for (let i = 0; i <= steps; i++) {
    const lx = Math.log(xMin) + (Math.log(xMax) - Math.log(xMin)) * (i / steps);
    trend.push({ x: Math.exp(lx), y: slope * lx + intercept });
  }
  return { slope, intercept, r2, trend };
}

export type SlopeBand = 'regressing' | 'plateau' | 'steady' | 'healthy' | 'fast' | 'veryFast';

export function slopeBand(slope: number): SlopeBand {
  if (slope < 0) return 'regressing';
  if (slope < 0.1) return 'plateau';
  if (slope < 0.2) return 'steady';
  if (slope < 0.35) return 'healthy';
  if (slope < 0.5) return 'fast';
  return 'veryFast';
}

export const MILESTONE_THRESHOLDS_SEC = [60, 45, 40, 35, 30, 25, 20, 15, 10];

export interface MilestoneRow {
  thresholdSec: number;
  /** Index into solves of the first time each series dipped below the threshold; null if never. */
  single: number | null;
  ao5: number | null;
  ao12: number | null;
  ao100: number | null;
}

export function milestones(
  solves: Solve[],
  ao5: (number | null)[],
  ao12: (number | null)[],
  ao100: (number | null)[],
): MilestoneRow[] {
  const singles = solves.map(s => { const t = effectiveMs(s); return isFinite(t) ? t : null; });
  const firstBelow = (arr: (number | null)[], ms: number): number | null => {
    const i = arr.findIndex(v => v != null && v < ms);
    return i === -1 ? null : i;
  };
  const rows: MilestoneRow[] = [];
  for (const sec of MILESTONE_THRESHOLDS_SEC) {
    const ms = sec * 1000;
    const row: MilestoneRow = {
      thresholdSec: sec,
      single: firstBelow(singles, ms),
      ao5: firstBelow(ao5, ms),
      ao12: firstBelow(ao12, ms),
      ao100: firstBelow(ao100, ms),
    };
    if (row.single == null && row.ao5 == null && row.ao12 == null && row.ao100 == null) continue;
    rows.push(row);
  }
  return rows;
}

/** "1:02.34" above a minute, "45.67" below; "DNF" for Infinity. */
export function fmtMs(ms: number | null | undefined): string {
  if (ms == null) return '-';
  if (!isFinite(ms)) return 'DNF';
  const total = ms / 1000;
  if (total >= 60) {
    const m = Math.floor(total / 60);
    const s = (total - m * 60).toFixed(2).padStart(5, '0');
    return `${m}:${s}`;
  }
  return total.toFixed(2);
}
