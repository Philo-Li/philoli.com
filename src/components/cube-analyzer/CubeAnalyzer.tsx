import { useCallback, useEffect, useMemo, useRef, useState, type DragEvent } from 'react';
import { useTranslations } from '../../i18n';
import { CsTimerParseError, parseCsTimerExport } from '../../lib/cube-analyzer/parse';
import {
  bestOf, effectiveMs, fmtMs, groupByDay, histogram, hourlyCounts, log2Speedup, milestones,
  powerLawFit, powerLawPoints, rollingAo, runningMin, slopeBand, summarize,
} from '../../lib/cube-analyzer/stats';
import type { Session } from '../../lib/cube-analyzer/types';
import ChartCard from './ChartCard';
import {
  aoConfig, dailyAvgConfig, dailyCountConfig, histogramConfig, hourlyConfig, pbConfig,
  powerLawConfig, readPalette, singlesConfig, speedupConfig, type ChartLabels, type Palette,
} from './charts';
import '../../styles/cube-analyzer.css';

interface Props {
  locale?: string;
  /** URL of the bundled sample export (the author's own csTimer data). */
  sampleUrl: string;
  cubeHref: string;
  tutorial?: { title: string; href: string } | null;
}

type Source = { kind: 'file'; name: string } | { kind: 'sample' };

function fill(template: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), template);
}

/** Palette that follows the site's data-theme attribute. */
function useThemePalette(): Palette {
  const [palette, setPalette] = useState<Palette>(() => readPalette());
  useEffect(() => {
    const observer = new MutationObserver(() => setPalette(readPalette()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  return palette;
}

export default function CubeAnalyzer({ locale, sampleUrl, cubeHref, tutorial = null }: Props) {
  const t = useTranslations(locale);
  const palette = useThemePalette();

  const [sessions, setSessions] = useState<Session[] | null>(null);
  const [activeId, setActiveId] = useState<string>('');
  const [source, setSource] = useState<Source | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [aoScale, setAoScale] = useState<'linear' | 'logarithmic'>('linear');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dateFmt = useMemo(
    () => new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }),
    [locale],
  );
  const shortDateFmt = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }),
    [locale],
  );
  const timeFmt = useMemo(
    () => new Intl.DateTimeFormat(locale, { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
    [locale],
  );

  const loadText = useCallback((text: string, src: Source) => {
    try {
      const parsed = parseCsTimerExport(text);
      // Default to the session with the most solves — that's almost always the main one.
      const main = [...parsed].sort((a, b) => b.solves.length - a.solves.length)[0];
      setSessions(parsed);
      setActiveId(main.id);
      setSource(src);
      setError(null);
    } catch (e) {
      const code = e instanceof CsTimerParseError ? e.message : 'generic';
      const key = code === 'not-json' || code === 'not-object' ? 'notJson' : code === 'no-sessions' ? 'noSessions' : 'generic';
      setError(t(`cubeAnalyzer.errors.${key}`));
    }
  }, [t]);

  const loadFile = useCallback(async (file: File) => {
    setLoading(true);
    try {
      loadText(await file.text(), { kind: 'file', name: file.name });
    } catch {
      setError(t('cubeAnalyzer.errors.generic'));
    } finally {
      setLoading(false);
    }
  }, [loadText, t]);

  const loadSample = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(sampleUrl);
      if (!res.ok) throw new Error(String(res.status));
      loadText(await res.text(), { kind: 'sample' });
    } catch {
      setError(t('cubeAnalyzer.errors.generic'));
    } finally {
      setLoading(false);
    }
  }, [loadText, sampleUrl, t]);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void loadFile(file);
  };

  const session = sessions?.find(s => s.id === activeId) ?? null;

  const analysis = useMemo(() => {
    if (!session) return null;
    const solves = session.solves;
    const ao5 = rollingAo(solves, 5);
    const ao12 = rollingAo(solves, 12);
    const ao50 = rollingAo(solves, 50);
    const ao100 = rollingAo(solves, 100);
    const singles = solves.map(s => { const v = effectiveMs(s); return isFinite(v) ? v : null; });
    const daily = groupByDay(solves);
    const plPoints = powerLawPoints(daily);
    return {
      solves,
      singles,
      ao: { ao5, ao12, ao50, ao100 },
      summary: summarize(solves),
      best: { ao5: bestOf(ao5), ao12: bestOf(ao12), ao50: bestOf(ao50), ao100: bestOf(ao100) },
      current: {
        ao5: ao5[ao5.length - 1] ?? null,
        ao12: ao12[ao12.length - 1] ?? null,
        ao100: ao100[ao100.length - 1] ?? null,
      },
      pbs: { single: runningMin(singles), ao5: runningMin(ao5), ao12: runningMin(ao12), ao100: runningMin(ao100) },
      daily,
      hist: histogram(solves),
      hourly: hourlyCounts(solves),
      speedup: log2Speedup(daily.avgMs),
      plPoints,
      plFit: powerLawFit(plPoints),
      milestones: milestones(solves, ao5, ao12, ao100),
    };
  }, [session]);

  const labels = useMemo<ChartLabels>(() => ({
    axisSolveIndex: t('cubeAnalyzer.axis.solveIndex'),
    axisSeconds: t('cubeAnalyzer.axis.seconds'),
    axisAvgSeconds: t('cubeAnalyzer.axis.avgSeconds'),
    axisAvgSecondsLog: t('cubeAnalyzer.axis.avgSecondsLog'),
    axisCount: t('cubeAnalyzer.axis.count'),
    axisBucket: t('cubeAnalyzer.axis.bucket'),
    axisLog2: t('cubeAnalyzer.axis.log2'),
    axisCumulative: t('cubeAnalyzer.axis.cumulative'),
    axisSkill: t('cubeAnalyzer.axis.skill'),
    seriesSingle: t('cubeAnalyzer.series.single'),
    seriesPb: t('cubeAnalyzer.series.pb'),
    seriesAo5: 'Ao5',
    seriesAo12: 'Ao12',
    seriesAo50: 'Ao50',
    seriesAo100: 'Ao100',
    seriesCount: t('cubeAnalyzer.series.count'),
    seriesDailyAvg: t('cubeAnalyzer.series.dailyAvg'),
    seriesSpeedup: t('cubeAnalyzer.series.speedup'),
    seriesSkill: t('cubeAnalyzer.series.skill'),
    seriesTrend: t('cubeAnalyzer.series.trend'),
    seriesPbSingle: t('cubeAnalyzer.series.pbSingle'),
    seriesPbAo5: 'PB Ao5',
    seriesPbAo12: 'PB Ao12',
    seriesPbAo100: 'PB Ao100',
    tooltipNoData: t('cubeAnalyzer.tooltip.noData'),
    tooltipSpeedup: t('cubeAnalyzer.tooltip.speedup'),
    tooltipBaseline: t('cubeAnalyzer.tooltip.baseline'),
    tooltipTrend: t('cubeAnalyzer.tooltip.trend'),
    tooltipCumulative: t('cubeAnalyzer.tooltip.cumulative'),
    tooltipSkill: t('cubeAnalyzer.tooltip.skill'),
  }), [t]);

  const configs = useMemo(() => {
    if (!analysis) return null;
    return {
      singles: singlesConfig(analysis.singles, analysis.ao.ao100, palette, labels),
      ao: aoConfig(analysis.ao, aoScale, palette, labels),
      hist: histogramConfig(analysis.hist, palette, labels),
      dailyCount: dailyCountConfig(analysis.daily, palette, labels),
      pb: pbConfig(analysis.pbs, palette, labels),
      dailyAvg: dailyAvgConfig(analysis.daily, palette, labels),
      hourly: hourlyConfig(analysis.hourly, palette, labels),
      speedup: speedupConfig(analysis.daily, analysis.speedup, palette, labels),
      powerLaw: powerLawConfig(analysis.plPoints, analysis.plFit, palette, labels),
    };
  }, [analysis, aoScale, palette, labels]);

  const firstTs = analysis?.summary.firstTimestamp ?? 0;
  const dayNumber = (ts: number) => Math.floor((ts - firstTs) / 86_400_000) + 1;
  const milestoneCell = (idx: number | null) => {
    if (idx == null || !analysis) return <td className="ca__muted">{t('cubeAnalyzer.milestones.never')}</td>;
    const ts = analysis.solves[idx].timestamp;
    return (
      <td>
        {shortDateFmt.format(new Date(ts))}
        <span className="ca__muted ca__day-n"> · {fill(t('cubeAnalyzer.milestones.dayN'), { n: dayNumber(ts) })}</span>
      </td>
    );
  };

  const statCards = analysis ? [
    { label: t('cubeAnalyzer.stats.total'), value: String(analysis.summary.count), sub: fill(t('cubeAnalyzer.stats.totalSub'), { dnf: analysis.summary.dnf, plus2: analysis.summary.plus2 }) },
    { label: t('cubeAnalyzer.stats.best'), value: fmtMs(analysis.summary.best), sub: t('cubeAnalyzer.stats.bestSub'), good: true },
    { label: t('cubeAnalyzer.stats.mean'), value: fmtMs(analysis.summary.mean), sub: fill(t('cubeAnalyzer.stats.meanSub'), { median: fmtMs(analysis.summary.median) }) },
    { label: t('cubeAnalyzer.stats.stdev'), value: fmtMs(analysis.summary.stdev), sub: t('cubeAnalyzer.stats.stdevSub') },
    { label: t('cubeAnalyzer.stats.bestAo5'), value: fmtMs(analysis.best.ao5), sub: fill(t('cubeAnalyzer.stats.currentSub'), { v: fmtMs(analysis.current.ao5) }) },
    { label: t('cubeAnalyzer.stats.bestAo12'), value: fmtMs(analysis.best.ao12), sub: fill(t('cubeAnalyzer.stats.currentSub'), { v: fmtMs(analysis.current.ao12) }) },
    { label: t('cubeAnalyzer.stats.bestAo50'), value: fmtMs(analysis.best.ao50), sub: '' },
    { label: t('cubeAnalyzer.stats.bestAo100'), value: fmtMs(analysis.best.ao100), sub: fill(t('cubeAnalyzer.stats.currentSub'), { v: fmtMs(analysis.current.ao100) }), good: true },
  ] : [];

  const bandKey = analysis?.plFit ? slopeBand(analysis.plFit.slope) : 'none';
  const halvingPct = analysis?.plFit ? (1 - Math.pow(2, -analysis.plFit.slope)) * 100 : null;

  return (
    <div className="ca">
      <header className="ca__header">
        <div className="ca__header-copy">
          <div className="ca__eyebrow">{t('cubeAnalyzer.eyebrow')}</div>
          <h1 className="ca__title">{t('cubeAnalyzer.title')}</h1>
          <p className="ca__intro">{t('cubeAnalyzer.intro')}</p>
          <nav className="ca__links">
            <a href={cubeHref} className="ca__link">{t('cubeAnalyzer.links.cube')}</a>
            {tutorial && <a href={tutorial.href} className="ca__link">{tutorial.title} →</a>}
          </nav>
        </div>
        <aside className="ca__howto">
          <div className="ca__eyebrow">{t('cubeAnalyzer.howTo.title')}</div>
          <ol className="ca__howto-steps">
            <li>{t('cubeAnalyzer.howTo.step1')}</li>
            <li>{t('cubeAnalyzer.howTo.step2')}</li>
            <li>{t('cubeAnalyzer.howTo.step3')}</li>
          </ol>
        </aside>
      </header>

      <div
        className={`ca__drop${dragActive ? ' ca__drop--active' : ''}`}
        onDragOver={e => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click(); } }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.json,application/json,text/plain"
          className="ca__file-input"
          onChange={e => { const f = e.target.files?.[0]; if (f) void loadFile(f); e.target.value = ''; }}
        />
        <p className="ca__drop-label">{t('cubeAnalyzer.drop.label')}</p>
        <button
          type="button"
          className="ca__sample-btn"
          onClick={e => { e.stopPropagation(); void loadSample(); }}
          disabled={loading}
        >
          {loading ? t('cubeAnalyzer.drop.loading') : t('cubeAnalyzer.drop.loadSample')}
        </button>
      </div>

      {error && <p className="ca__error" role="alert">{error}</p>}

      {sessions && session && analysis && configs && (
        <>
          <div className="ca__controls">
            <label className="ca__select-label">
              {t('cubeAnalyzer.session.label')}
              <select className="ca__select" value={activeId} onChange={e => setActiveId(e.target.value)}>
                {sessions.map(s => (
                  <option key={s.id} value={s.id}>
                    {fill(t('cubeAnalyzer.session.option'), { name: s.name, count: s.solves.length })}
                  </option>
                ))}
              </select>
            </label>
            <span className="ca__source">
              {source?.kind === 'sample'
                ? t('cubeAnalyzer.drop.sample')
                : fill(t('cubeAnalyzer.drop.loaded'), { name: source?.kind === 'file' ? source.name : '' })}
            </span>
          </div>

          <p className="ca__summary">
            {fill(t('cubeAnalyzer.summary.range'), {
              from: dateFmt.format(new Date(analysis.summary.firstTimestamp)),
              to: dateFmt.format(new Date(analysis.summary.lastTimestamp)),
              count: analysis.summary.count,
              days: analysis.summary.practiceDays,
            })}
          </p>

          <div className="ca__stats">
            {statCards.map(card => (
              <div key={card.label} className={`ca__stat${card.good ? ' ca__stat--good' : ''}`}>
                <div className="ca__stat-label">{card.label}</div>
                <div className="ca__stat-value">{card.value}</div>
                <div className="ca__stat-sub">{card.sub}</div>
              </div>
            ))}
          </div>

          <ChartCard title={t('cubeAnalyzer.charts.singles.title')} desc={t('cubeAnalyzer.charts.singles.desc')} config={configs.singles} tall />

          <ChartCard
            title={t('cubeAnalyzer.charts.ao.title')}
            desc={t('cubeAnalyzer.charts.ao.desc')}
            config={configs.ao}
            tall
            controls={
              <div className="ca__toggle" role="group">
                <button type="button" className={`ca__toggle-btn${aoScale === 'linear' ? ' ca__toggle-btn--active' : ''}`} onClick={() => setAoScale('linear')}>
                  {t('cubeAnalyzer.charts.ao.linear')}
                </button>
                <button type="button" className={`ca__toggle-btn${aoScale === 'logarithmic' ? ' ca__toggle-btn--active' : ''}`} onClick={() => setAoScale('logarithmic')}>
                  {t('cubeAnalyzer.charts.ao.log')}
                </button>
              </div>
            }
          />

          <section className="ca__card">
            <header className="ca__card-header">
              <div>
                <h2 className="ca__card-title">{t('cubeAnalyzer.milestones.title')}</h2>
                <p className="ca__card-desc">{t('cubeAnalyzer.milestones.desc')}</p>
              </div>
            </header>
            <div className="ca__table-wrap">
              <table className="ca__table">
                <thead>
                  <tr>
                    <th>{t('cubeAnalyzer.milestones.threshold')}</th>
                    <th>{t('cubeAnalyzer.milestones.single')}</th>
                    <th>Ao5</th>
                    <th>Ao12</th>
                    <th>Ao100</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.milestones.map(row => (
                    <tr key={row.thresholdSec}>
                      <td className="ca__threshold">sub-{row.thresholdSec}</td>
                      {milestoneCell(row.single)}
                      {milestoneCell(row.ao5)}
                      {milestoneCell(row.ao12)}
                      {milestoneCell(row.ao100)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="ca__two-col">
            <ChartCard title={t('cubeAnalyzer.charts.hist.title')} desc={t('cubeAnalyzer.charts.hist.desc')} config={configs.hist} />
            <ChartCard title={t('cubeAnalyzer.charts.daily.title')} desc={t('cubeAnalyzer.charts.daily.desc')} config={configs.dailyCount} />
          </div>

          <ChartCard title={t('cubeAnalyzer.charts.pb.title')} desc={t('cubeAnalyzer.charts.pb.desc')} config={configs.pb} tall />

          <div className="ca__two-col">
            <ChartCard title={t('cubeAnalyzer.charts.dailyAvg.title')} desc={t('cubeAnalyzer.charts.dailyAvg.desc')} config={configs.dailyAvg} />
            <ChartCard title={t('cubeAnalyzer.charts.hourly.title')} desc={t('cubeAnalyzer.charts.hourly.desc')} config={configs.hourly} />
          </div>

          <div className="ca__two-col">
            <ChartCard title={t('cubeAnalyzer.charts.speedup.title')} desc={t('cubeAnalyzer.charts.speedup.desc')} config={configs.speedup} />
            <ChartCard title={t('cubeAnalyzer.charts.powerLaw.title')} desc={t('cubeAnalyzer.charts.powerLaw.desc')} config={configs.powerLaw}>
              <div className="ca__badges">
                <div><span className="ca__muted">{t('cubeAnalyzer.powerLaw.slope')}</span> <strong className="ca__badge-accent">{analysis.plFit ? analysis.plFit.slope.toFixed(3) : '-'}</strong></div>
                <div><span className="ca__muted">R²</span> <strong>{analysis.plFit?.r2 != null ? analysis.plFit.r2.toFixed(3) : '-'}</strong></div>
                <div>
                  <span className="ca__muted">{t('cubeAnalyzer.powerLaw.halving')}</span>{' '}
                  <strong className={halvingPct != null && halvingPct < 0 ? 'ca__badge-bad' : 'ca__badge-good'}>
                    {halvingPct == null ? '-' : `${halvingPct >= 0 ? '−' : '+'}${Math.abs(halvingPct).toFixed(1)}%`}
                  </strong>
                </div>
                <div><span className="ca__muted">{t('cubeAnalyzer.powerLaw.reading')}</span> <span>{t(`cubeAnalyzer.powerLaw.band.${bandKey}`)}</span></div>
              </div>
            </ChartCard>
          </div>

          <section className="ca__card">
            <header className="ca__card-header">
              <div>
                <h2 className="ca__card-title">{t('cubeAnalyzer.recent.title')}</h2>
                <p className="ca__card-desc">{t('cubeAnalyzer.recent.desc')}</p>
              </div>
            </header>
            <div className="ca__table-wrap">
              <table className="ca__table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{t('cubeAnalyzer.recent.time')}</th>
                    <th>{t('cubeAnalyzer.recent.solve')}</th>
                    <th>Ao5</th>
                    <th>Ao12</th>
                    <th>{t('cubeAnalyzer.recent.scramble')}</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.solves.slice(-20).reverse().map((s, k) => {
                    const i = analysis.solves.length - 1 - k;
                    const v = effectiveMs(s);
                    const cls = s.penalty === 'dnf' ? 'ca__dnf' : s.penalty === 'plus2' ? 'ca__plus2' : '';
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{timeFmt.format(new Date(s.timestamp))}</td>
                        <td className={cls}>{fmtMs(v)}{s.penalty === 'plus2' ? ' (+2)' : ''}</td>
                        <td>{fmtMs(analysis.ao.ao5[i])}</td>
                        <td>{fmtMs(analysis.ao.ao12[i])}</td>
                        <td className="ca__scramble" title={s.scramble}>{s.scramble}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

      <footer className="ca__footer">{t('cubeAnalyzer.footer')}</footer>
    </div>
  );
}
