import {
  Chart,
  registerables,
  type ChartConfiguration,
  type ChartConfigurationCustomTypesPerDataset,
  type ScatterDataPoint,
} from 'chart.js';
import { fmtMs, type DailyStats, type HistogramBin, type PowerLawFit, type PowerLawPoint } from '../../lib/cube-analyzer/stats';

Chart.register(...registerables);

export type AnyChartConfig = ChartConfiguration | ChartConfigurationCustomTypesPerDataset;

/** Colors resolved from the site theme so charts follow light/dark mode. */
export interface Palette {
  text: string;
  muted: string;
  grid: string;
  accent: string;
  single: string;
  ao5: string;
  ao12: string;
  ao50: string;
  ao100: string;
  bar: string;
  barAlt: string;
  good: string;
  bad: string;
}

export function readPalette(): Palette {
  const root = document.documentElement;
  const css = getComputedStyle(root);
  const v = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback;
  const light = root.dataset.theme === 'light';
  return {
    text: v('--color-text', light ? '#221a12' : '#d8d8d8'),
    muted: v('--color-text-muted', light ? '#5e5e5e' : '#d8d8d8'),
    grid: light ? 'rgba(86, 62, 31, 0.12)' : 'rgba(255, 255, 255, 0.08)',
    accent: v('--color-accent', light ? '#cf4f2d' : '#e8572a'),
    single: light ? 'rgba(34, 26, 18, 0.35)' : 'rgba(255, 255, 255, 0.3)',
    ao5: light ? '#7fb0e6' : '#93c5fd',
    ao12: light ? '#2f6fd1' : '#60a5fa',
    ao50: light ? '#2f9e5b' : '#4ade80',
    ao100: v('--color-accent', light ? '#cf4f2d' : '#e8572a'),
    bar: light ? '#2f6fd1' : '#60a5fa',
    barAlt: light ? '#7c5cc4' : '#a78bfa',
    good: light ? '#2f9e5b' : '#4ade80',
    bad: light ? '#c0392b' : '#f87171',
  };
}

/** Labels the charts need; supplied by the component from the locale's translations. */
export interface ChartLabels {
  axisSolveIndex: string;
  axisSeconds: string;
  axisAvgSeconds: string;
  axisAvgSecondsLog: string;
  axisCount: string;
  axisBucket: string;
  axisLog2: string;
  axisCumulative: string;
  axisSkill: string;
  seriesSingle: string;
  seriesPb: string;
  seriesAo5: string;
  seriesAo12: string;
  seriesAo50: string;
  seriesAo100: string;
  seriesCount: string;
  seriesDailyAvg: string;
  seriesSpeedup: string;
  seriesSkill: string;
  seriesTrend: string;
  seriesPbSingle: string;
  seriesPbAo5: string;
  seriesPbAo12: string;
  seriesPbAo100: string;
  tooltipNoData: string;
  /** "{v} doublings ({mult}×)" */
  tooltipSpeedup: string;
  /** "Day avg {avg} · baseline {base}" */
  tooltipBaseline: string;
  /** "Trend: {v}" */
  tooltipTrend: string;
  /** "{n} solves · day avg {avg}" */
  tooltipCumulative: string;
  /** "Skill index {v}" */
  tooltipSkill: string;
}

function fill(template: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), template);
}

const sec = (ms: number | null) => (ms == null ? null : ms / 1000);

function axis(p: Palette, title: string, extra: Record<string, unknown> = {}) {
  return {
    title: { display: true, text: title, color: p.muted },
    ticks: { color: p.muted, ...(extra.ticks as object | undefined) },
    grid: { color: p.grid },
    ...extra,
  };
}

function base(p: Palette) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false as const,
    color: p.text,
    plugins: { legend: { labels: { color: p.text, boxWidth: 12 } } },
  };
}

export function singlesConfig(
  singlesMs: (number | null)[],
  ao100: (number | null)[],
  p: Palette,
  l: ChartLabels,
): ChartConfiguration<'line', (number | null)[], number> {
  const labels = singlesMs.map((_, i) => i + 1);
  let best = Infinity;
  const pb = singlesMs.map(v => {
    if (v != null && v < best) { best = v; return v / 1000; }
    return null;
  });
  return {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: l.seriesSingle, data: singlesMs.map(sec), borderColor: p.single, borderWidth: 1, pointRadius: 0, tension: 0, spanGaps: false },
        // The Ao100 trend on top of the noise is the picture people actually want to see.
        { label: l.seriesAo100, data: ao100.map(sec), borderColor: p.text, borderWidth: 2.2, pointRadius: 0, tension: 0.2, spanGaps: true },
        { label: l.seriesPb, data: pb, showLine: false, pointRadius: 4, pointHoverRadius: 6, borderColor: p.accent, backgroundColor: p.accent, spanGaps: false },
      ],
    },
    options: {
      ...base(p),
      interaction: { mode: 'nearest', intersect: false },
      scales: {
        x: axis(p, l.axisSolveIndex, { ticks: { maxTicksLimit: 12 } }),
        y: axis(p, l.axisSeconds),
      },
    },
  };
}

export function aoConfig(
  ao: { ao5: (number | null)[]; ao12: (number | null)[]; ao50: (number | null)[]; ao100: (number | null)[] },
  scale: 'linear' | 'logarithmic',
  p: Palette,
  l: ChartLabels,
): ChartConfiguration<'line', (number | null)[], number> {
  const labels = ao.ao5.map((_, i) => i + 1);
  const line = (label: string, data: (number | null)[], color: string, width: number) =>
    ({ label, data: data.map(sec), borderColor: color, borderWidth: width, pointRadius: 0, tension: 0.2, spanGaps: true });
  return {
    type: 'line',
    data: {
      labels,
      datasets: [
        line(l.seriesAo5, ao.ao5, p.ao5, 1),
        line(l.seriesAo12, ao.ao12, p.ao12, 1.4),
        line(l.seriesAo50, ao.ao50, p.ao50, 1.8),
        line(l.seriesAo100, ao.ao100, p.ao100, 2.2),
      ],
    },
    options: {
      ...base(p),
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: axis(p, l.axisSolveIndex, { ticks: { maxTicksLimit: 12 } }),
        y: scale === 'logarithmic'
          ? { type: 'logarithmic', ...axis(p, l.axisAvgSecondsLog, { ticks: { callback: (v: string | number) => Number(v).toString() } }) }
          : { type: 'linear', ...axis(p, l.axisAvgSeconds) },
      },
    },
  };
}

export function histogramConfig(bins: HistogramBin[], p: Palette, l: ChartLabels): ChartConfiguration<'bar', number[], string> {
  return {
    type: 'bar',
    data: {
      labels: bins.map(b => `${b.lo}–${b.hi}s`),
      datasets: [{ label: l.seriesCount, data: bins.map(b => b.count), backgroundColor: p.bar, borderRadius: 2 }],
    },
    options: {
      ...base(p),
      plugins: { legend: { display: false } },
      scales: {
        x: axis(p, l.axisBucket, { ticks: { maxTicksLimit: 12 } }),
        y: axis(p, l.axisCount, { beginAtZero: true }),
      },
    },
  };
}

export function dailyCountConfig(daily: DailyStats, p: Palette, l: ChartLabels): ChartConfiguration<'bar', number[], string> {
  return {
    type: 'bar',
    data: {
      labels: daily.keys,
      datasets: [{ label: l.seriesCount, data: daily.counts, backgroundColor: p.good, borderRadius: 2 }],
    },
    options: {
      ...base(p),
      plugins: { legend: { display: false } },
      scales: {
        x: axis(p, '', { title: { display: false }, ticks: { maxTicksLimit: 10 } }),
        y: axis(p, l.axisCount, { beginAtZero: true }),
      },
    },
  };
}

export function dailyAvgConfig(daily: DailyStats, p: Palette, l: ChartLabels): ChartConfiguration<'line', (number | null)[], string> {
  return {
    type: 'line',
    data: {
      labels: daily.keys,
      datasets: [{
        label: l.seriesDailyAvg,
        data: daily.avgMs.map(sec),
        borderColor: p.ao12,
        backgroundColor: p.ao12 + '22',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
        fill: true,
        spanGaps: true,
      }],
    },
    options: {
      ...base(p),
      plugins: { legend: { display: false } },
      scales: {
        x: axis(p, '', { title: { display: false }, ticks: { maxTicksLimit: 10 } }),
        y: axis(p, l.axisAvgSeconds),
      },
    },
  };
}

export function hourlyConfig(hourly: number[], p: Palette, l: ChartLabels): ChartConfiguration<'bar', number[], string> {
  return {
    type: 'bar',
    data: {
      labels: hourly.map((_, h) => `${h}:00`),
      datasets: [{ label: l.seriesCount, data: hourly, backgroundColor: p.barAlt, borderRadius: 2 }],
    },
    options: {
      ...base(p),
      plugins: { legend: { display: false } },
      scales: {
        x: axis(p, '', { title: { display: false }, ticks: { maxTicksLimit: 12 } }),
        y: axis(p, l.axisCount, { beginAtZero: true }),
      },
    },
  };
}

export function pbConfig(
  pbs: { single: (number | null)[]; ao5: (number | null)[]; ao12: (number | null)[]; ao100: (number | null)[] },
  p: Palette,
  l: ChartLabels,
): ChartConfiguration<'line', (number | null)[], number> {
  const labels = pbs.single.map((_, i) => i + 1);
  const step = (label: string, data: (number | null)[], color: string, width: number) =>
    ({ label, data: data.map(sec), borderColor: color, borderWidth: width, pointRadius: 0, stepped: true as const, spanGaps: true });
  return {
    type: 'line',
    data: {
      labels,
      datasets: [
        step(l.seriesPbSingle, pbs.single, p.accent, 2),
        step(l.seriesPbAo5, pbs.ao5, p.ao5, 1.4),
        step(l.seriesPbAo12, pbs.ao12, p.ao12, 1.4),
        step(l.seriesPbAo100, pbs.ao100, p.ao50, 1.4),
      ],
    },
    options: {
      ...base(p),
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: axis(p, l.axisSolveIndex, { ticks: { maxTicksLimit: 12 } }),
        y: axis(p, l.axisSeconds),
      },
    },
  };
}

export function speedupConfig(
  daily: DailyStats,
  speedup: (number | null)[],
  p: Palette,
  l: ChartLabels,
): ChartConfiguration<'bar', (number | null)[], string> {
  const baseline = daily.avgMs.find(v => v != null) ?? null;
  const colors = speedup.map((v, i) => {
    if (v == null) return p.grid;
    const prev = i > 0 ? speedup[i - 1] ?? 0 : 0;
    return v >= prev ? p.good : p.bad;
  });
  return {
    type: 'bar',
    data: {
      labels: daily.keys,
      datasets: [{ label: l.seriesSpeedup, data: speedup, backgroundColor: colors, borderRadius: 2 }],
    },
    options: {
      ...base(p),
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.y;
              if (v == null || Number.isNaN(v)) return l.tooltipNoData;
              const avg = daily.avgMs[ctx.dataIndex];
              return [
                fill(l.tooltipSpeedup, { v: v.toFixed(2), mult: Math.pow(2, v).toFixed(2) }),
                fill(l.tooltipBaseline, { avg: fmtMs(avg), base: fmtMs(baseline) }),
              ];
            },
          },
        },
      },
      scales: {
        x: axis(p, '', { title: { display: false }, ticks: { maxTicksLimit: 10 } }),
        y: axis(p, l.axisLog2, {
          ticks: {
            callback: (v: string | number) => {
              const n = Number(v);
              const mult = Math.pow(2, n);
              return n.toFixed(1) + (mult >= 1 ? ` (${mult.toFixed(1)}×)` : '');
            },
          },
        }),
      },
    },
  };
}

export function powerLawConfig(
  points: PowerLawPoint[],
  fit: PowerLawFit | null,
  p: Palette,
  l: ChartLabels,
): ChartConfigurationCustomTypesPerDataset<'scatter' | 'line', ScatterDataPoint[]> {
  return {
    data: {
      datasets: [
        {
          type: 'scatter',
          label: l.seriesSkill,
          data: points.map(pt => ({ x: pt.x, y: pt.y })),
          backgroundColor: p.ao12,
          borderColor: p.ao12,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          type: 'line',
          label: l.seriesTrend,
          data: fit?.trend ?? [],
          borderColor: p.accent,
          borderWidth: 1.5,
          borderDash: [4, 4],
          pointRadius: 0,
          fill: false,
        },
      ],
    },
    options: {
      ...base(p),
      plugins: {
        legend: { labels: { color: p.text, boxWidth: 12 } },
        tooltip: {
          callbacks: {
            label: ctx => {
              if (ctx.datasetIndex === 1) return fill(l.tooltipTrend, { v: (ctx.parsed.y ?? 0).toFixed(3) });
              const pt = points[ctx.dataIndex];
              return [
                pt.date,
                fill(l.tooltipCumulative, { n: pt.x, avg: fmtMs(pt.avgMs) }),
                fill(l.tooltipSkill, { v: pt.y.toFixed(3) }),
              ];
            },
          },
        },
      },
      scales: {
        x: { type: 'logarithmic', ...axis(p, l.axisCumulative, { ticks: { callback: (v: string | number) => Number(v).toLocaleString() } }) },
        y: axis(p, l.axisSkill, { ticks: { callback: (v: string | number) => Number(v).toFixed(2) } }),
      },
    },
  };
}
