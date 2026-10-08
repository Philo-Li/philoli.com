import { useEffect, useRef, type ReactNode } from 'react';
import { Chart } from 'chart.js';
import type { AnyChartConfig } from './charts';

interface Props {
  title: string;
  desc?: string;
  config: AnyChartConfig;
  tall?: boolean;
  /** Rendered in the card header, right of the title (e.g. a scale toggle). */
  controls?: ReactNode;
  /** Rendered between the header and the canvas. */
  children?: ReactNode;
}

export default function ChartCard({ title, desc, config, tall, controls, children }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Re-creating the chart on every config change is simpler than diffing datasets, and the
  // configs are memoized upstream so this only fires when data, scale or theme changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const chart = new Chart(canvas, config);
    return () => chart.destroy();
  }, [config]);

  return (
    <section className="ca__card">
      <header className="ca__card-header">
        <div>
          <h2 className="ca__card-title">{title}</h2>
          {desc && <p className="ca__card-desc">{desc}</p>}
        </div>
        {controls}
      </header>
      {children}
      <div className={`ca__chart${tall ? ' ca__chart--tall' : ''}`}>
        <canvas ref={canvasRef} />
      </div>
    </section>
  );
}
