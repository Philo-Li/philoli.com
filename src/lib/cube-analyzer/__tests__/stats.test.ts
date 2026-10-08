import { describe, expect, it } from 'vitest';
import type { Solve } from '../types';
import {
  avgOfN, effectiveMs, fmtMs, groupByDay, histogram, log2Speedup,
  milestones, powerLawFit, powerLawPoints, rollingAo, runningMin, slopeBand, summarize, trimCount,
} from '../stats';

function solve(timeMs: number, penalty: Solve['penalty'] = 'none', timestamp = 0): Solve {
  return { timeMs, penalty, scramble: '', timestamp };
}

describe('effectiveMs', () => {
  it('adds 2s for +2 and is Infinity for DNF', () => {
    expect(effectiveMs(solve(10000))).toBe(10000);
    expect(effectiveMs(solve(10000, 'plus2'))).toBe(12000);
    expect(effectiveMs(solve(10000, 'dnf'))).toBe(Infinity);
  });
});

describe('trimCount / avgOfN', () => {
  it('trims 1 for ao5/ao12 and 5 for ao100', () => {
    expect(trimCount(5)).toBe(1);
    expect(trimCount(12)).toBe(1);
    expect(trimCount(50)).toBe(3);
    expect(trimCount(100)).toBe(5);
  });

  it('drops best and worst for ao5', () => {
    const w = [10, 20, 30, 40, 1000].map(s => solve(s));
    expect(avgOfN(w)).toBe(30);
  });

  it('counts one DNF as the worst, two DNFs as a DNF average', () => {
    expect(avgOfN([solve(10), solve(20), solve(30), solve(40), solve(0, 'dnf')])).toBe(30);
    expect(avgOfN([solve(10), solve(20), solve(30), solve(0, 'dnf'), solve(0, 'dnf')])).toBe(Infinity);
  });
});

describe('rollingAo / runningMin', () => {
  it('is null until the window fills, then tracks', () => {
    const s = [50, 40, 30, 20, 10, 60].map(v => solve(v));
    const ao = rollingAo(s, 5);
    expect(ao.slice(0, 4)).toEqual([null, null, null, null]);
    expect(ao[4]).toBe(30);
    expect(ao[5]).toBe(30); // 40,30,20,10,60 → drop 10 & 60 → 30
    expect(runningMin([null, 5, 7, 3, null, 4])).toEqual([null, 5, 5, 3, 3, 3]);
  });
});

describe('summarize', () => {
  it('reports counts, best/worst/mean/median and practice days', () => {
    const day = 86_400_000;
    const s = [solve(10000, 'none', 0), solve(30000, 'plus2', day), solve(1, 'dnf', day + 1), solve(20000, 'none', 2 * day)];
    const sum = summarize(s);
    expect(sum.count).toBe(4);
    expect(sum.dnf).toBe(1);
    expect(sum.plus2).toBe(1);
    expect(sum.best).toBe(10000);
    expect(sum.worst).toBe(32000);
    expect(sum.mean).toBeCloseTo((10000 + 32000 + 20000) / 3);
    expect(sum.median).toBe(20000);
    expect(sum.practiceDays).toBe(3);
  });
});

describe('groupByDay / histogram / log2Speedup', () => {
  it('groups by local day with cumulative counts and skips DNF-only days in avg', () => {
    const base = new Date(2026, 0, 1, 12).getTime();
    const day = 86_400_000;
    const s = [solve(20000, 'none', base), solve(40000, 'none', base + 1000), solve(1, 'dnf', base + day), solve(10000, 'none', base + 2 * day)];
    const d = groupByDay(s);
    expect(d.keys).toEqual(['2026-01-01', '2026-01-02', '2026-01-03']);
    expect(d.counts).toEqual([2, 1, 1]);
    expect(d.avgMs).toEqual([30000, null, 10000]);
    expect(d.cumulative).toEqual([2, 3, 4]);
    expect(log2Speedup(d.avgMs)).toEqual([0, null, Math.log2(3)]);
  });

  it('bins valid times into integer-second-wide buckets', () => {
    const bins = histogram([solve(10500), solve(10900), solve(11200), solve(14000), solve(1, 'dnf')]);
    expect(bins.reduce((a, b) => a + b.count, 0)).toBe(4);
    expect(bins[0]).toEqual({ lo: 10, hi: 11, count: 2 });
    expect(bins[1]).toEqual({ lo: 11, hi: 12, count: 1 });
    expect(bins[bins.length - 1]).toEqual({ lo: 14, hi: 15, count: 1 });
  });
});

describe('powerLaw', () => {
  it('recovers the exponent of a synthetic T = a·N^-b series', () => {
    const base = new Date(2026, 0, 1, 12).getTime();
    const solves: Solve[] = [];
    // 10 solves a day; daily time follows 60s · N^-0.3 of cumulative count.
    for (let d = 0; d < 20; d++) {
      const N = (d + 1) * 10;
      const t = 60000 * Math.pow(N, -0.3);
      for (let i = 0; i < 10; i++) solves.push(solve(t, 'none', base + d * 86_400_000 + i));
    }
    const fit = powerLawFit(powerLawPoints(groupByDay(solves)))!;
    expect(fit.slope).toBeCloseTo(0.3, 2);
    expect(fit.r2).toBeCloseTo(1, 3);
    expect(fit.trend).toHaveLength(31);
    expect(slopeBand(fit.slope)).toBe('healthy');
    expect(powerLawFit([])).toBeNull();
  });
});

describe('milestones', () => {
  it('finds the first index under each threshold per series and drops thresholds never reached', () => {
    const s = [70, 65, 55, 50, 44, 42, 41, 39].map(v => solve(v * 1000));
    const ao5 = rollingAo(s, 5);
    const rows = milestones(s, ao5, rollingAo(s, 12), rollingAo(s, 100));
    const sub60 = rows.find(r => r.thresholdSec === 60)!;
    expect(sub60.single).toBe(2);
    expect(sub60.ao5).toBe(4); // 65,55,50,44,42 → 55,50,44 → 49.67
    expect(sub60.ao12).toBeNull();
    expect(rows.find(r => r.thresholdSec === 30)).toBeUndefined();
  });
});

describe('fmtMs', () => {
  it('formats seconds and minutes', () => {
    expect(fmtMs(28540)).toBe('28.54');
    expect(fmtMs(62340)).toBe('1:02.34');
    expect(fmtMs(Infinity)).toBe('DNF');
    expect(fmtMs(null)).toBe('-');
  });
});
