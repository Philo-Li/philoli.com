import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from '../../i18n';
import {
  GIF_BACKGROUND,
  OVERLAY_ACCENT,
  OVERLAY_FONT,
  OVERLAY_GAP,
  OVERLAY_LINE_HEIGHT,
  OVERLAY_NORMAL,
  OVERLAY_PAD_X,
  OVERLAY_PAD_Y,
  computeStateAt,
  planFrames,
} from '../../lib/cube/gif-export';
import { drawOverlay, layoutTokens } from '../../lib/cube/gif-overlay';
import type { CubeScene } from '../../lib/cube/scene';
import type { LearningMode, Move } from '../../lib/cube/types';

const SPEED_STOPS = [0.25, 0.5, 1, 2, 4];
const BASE_STEP_MS = 350;
const PREVIEW_FRAMES_PER_MOVE = 12;

export interface GifExportSubmit {
  startStep: number;
  endStep: number;
  speed: number;
  showOverlay: boolean;
}

interface Props {
  open: boolean;
  totalSteps: number;
  locale?: string;
  /** Capture-and-encode progress, 0..1, supplied by the parent during onSubmit. */
  progress?: number;
  scene: CubeScene | null;
  scrambleMoves: Move[];
  solutionMoves: Move[];
  learning?: LearningMode;
  onSubmit: (opts: GifExportSubmit, signal: AbortSignal) => Promise<void>;
  onClose: () => void;
}

export default function GifExportDialog({
  open,
  totalSteps,
  locale,
  progress,
  scene,
  scrambleMoves,
  solutionMoves,
  learning,
  onSubmit,
  onClose,
}: Props) {
  const t = useTranslations(locale);
  const titleId = useId();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(totalSteps);
  const [speed, setSpeed] = useState(1);
  const [showOverlay, setShowOverlay] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const previewRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (open) {
      setStart(0);
      setEnd(totalSteps);
      setSpeed(1);
      setShowOverlay(true);
      setBusy(false);
      setError(null);
    }
  }, [open, totalSteps]);

  // Live preview loop: cycles through the selected range continuously, using
  // the same renderStillFrame pipeline the actual export uses, so the preview
  // shows exactly what the GIF will look like (modulo encoder color quantization).
  useEffect(() => {
    if (!open || busy) return;
    if (!scene) return;
    const cv = previewRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const sourceCanvas = scene.getCanvas();
    // Match preview canvas pixel dimensions to source for crisp drawImage.
    const w = sourceCanvas.width || 480;
    const h = sourceCanvas.height || 480;
    cv.width = w;
    cv.height = h;

    const stepDelayMs = BASE_STEP_MS / speed;
    const jobs = planFrames({
      moves: solutionMoves,
      startStep: start,
      endStep: end,
      framesPerMove: PREVIEW_FRAMES_PER_MOVE,
      stepDelayMs,
    });
    if (jobs.length === 0) return;

    const tokens = solutionMoves.map((m) => m.notation);
    ctx.font = OVERLAY_FONT;
    const layout = showOverlay
      ? layoutTokens(tokens, (s) => ctx.measureText(s).width, {
          maxWidth: w,
          lineHeight: OVERLAY_LINE_HEIGHT,
          padX: OVERLAY_PAD_X,
          padY: OVERLAY_PAD_Y,
          gap: OVERLAY_GAP,
        })
      : [];

    let cancelled = false;
    let rafId: number | null = null;
    let jobIdx = 0;
    let lastAdvance = performance.now();

    const renderJob = (idx: number) => {
      const job = jobs[idx];
      const stateAt = computeStateAt(scrambleMoves, solutionMoves, job.stepBeforeMove);
      const partial =
        job.moveIndex !== null && job.progress !== null
          ? solutionMoves[job.moveIndex]
          : undefined;
      try {
        scene.renderStillFrame(stateAt, learning, partial, job.progress ?? undefined);
      } catch {
        // scene may be mid-animation — skip this frame
        return;
      }
      ctx.fillStyle = GIF_BACKGROUND;
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(sourceCanvas, 0, 0, w, h);
      if (showOverlay) {
        const currentIdx = job.moveIndex ?? Math.max(0, end - 1);
        drawOverlay(ctx, layout, currentIdx, {
          font: OVERLAY_FONT,
          accentColor: OVERLAY_ACCENT,
          normalColor: OVERLAY_NORMAL,
        });
      }
    };

    const tick = () => {
      if (cancelled) return;
      const now = performance.now();
      renderJob(jobIdx);
      const job = jobs[jobIdx];
      if (now - lastAdvance >= job.delayMs) {
        jobIdx = (jobIdx + 1) % jobs.length;
        lastAdvance = now;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [open, busy, scene, scrambleMoves, solutionMoves, start, end, speed, showOverlay, learning]);

  if (!open) return null;

  const handleStart = (v: number) => setStart(Math.min(v, end));
  const handleEnd = (v: number) => setEnd(Math.max(v, start));
  const count = Math.max(0, end - start);
  const progressPct = Math.round((progress ?? 0) * 100);

  const handleGenerate = async () => {
    setBusy(true);
    setError(null);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      await onSubmit({ startStep: start, endStep: end, speed, showOverlay }, ctrl.signal);
      onClose();
    } catch (err) {
      if (ctrl.signal.aborted) return;
      console.error(err);
      setError(t('rubiksCube.gif.errorGeneric'));
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  };

  const handleCancel = () => {
    if (busy && abortRef.current) {
      abortRef.current.abort();
    }
    onClose();
  };

  return (
    <div className="rc-modal__backdrop" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="rc-modal rc-modal--wide">
        <h2 id={titleId} className="rc-modal__title">
          {t('rubiksCube.gif.dialogTitle')}
        </h2>

        <div className="rc-modal__body">
          <div className="rc-modal__col rc-modal__col--preview">
            <canvas ref={previewRef} className="rc-modal__preview" />
          </div>

          <div className="rc-modal__col rc-modal__col--options">
            <div className="rc-modal__field">
              <label className="rc-modal__label">{t('rubiksCube.gif.rangeLabel')}</label>
              <div className="rc-modal__range">
                <div className="rc-modal__range-row">
                  <span className="rc-modal__range-end">{t('rubiksCube.gif.rangeStart')}</span>
                  <input
                    type="range"
                    min={0}
                    max={totalSteps}
                    value={start}
                    onChange={(e) => handleStart(parseInt(e.currentTarget.value, 10))}
                    disabled={busy}
                    aria-label={t('rubiksCube.gif.rangeStart')}
                  />
                  <span className="rc-modal__range-val">{start}</span>
                </div>
                <div className="rc-modal__range-row">
                  <span className="rc-modal__range-end">{t('rubiksCube.gif.rangeEnd')}</span>
                  <input
                    type="range"
                    min={0}
                    max={totalSteps}
                    value={end}
                    onChange={(e) => handleEnd(parseInt(e.currentTarget.value, 10))}
                    disabled={busy}
                    aria-label={t('rubiksCube.gif.rangeEnd')}
                  />
                  <span className="rc-modal__range-val">{end}</span>
                </div>
              </div>
              <p className="rc-modal__caption">
                {t('rubiksCube.gif.rangeCaption')
                  .replace('{start}', String(start))
                  .replace('{end}', String(end))
                  .replace('{count}', String(count))}
              </p>
            </div>

            <div className="rc-modal__field">
              <label className="rc-modal__label">{t('rubiksCube.gif.speedLabel')}</label>
              <div className="rc-modal__speed">
                {SPEED_STOPS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeed(s)}
                    aria-pressed={s === speed}
                    disabled={busy}
                    className="rc-modal__speed-btn"
                  >
                    {s}×
                  </button>
                ))}
              </div>
            </div>

            <label className="rc-modal__checkbox">
              <input
                type="checkbox"
                checked={showOverlay}
                onChange={(e) => setShowOverlay(e.currentTarget.checked)}
                disabled={busy}
              />
              <span>{t('rubiksCube.gif.showOverlay')}</span>
            </label>
          </div>
        </div>

        {error && <p className="rc-modal__error">{error}</p>}

        <div className="rc-modal__actions">
          <button type="button" onClick={handleCancel} className="rc-modal__btn">
            {t('rubiksCube.gif.cancel')}
          </button>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={busy || count === 0}
            className="rc-modal__btn rc-modal__btn--primary"
          >
            {busy
              ? t('rubiksCube.gif.generating').replace('{percent}', String(progressPct))
              : t('rubiksCube.gif.generate')}
          </button>
        </div>
      </div>
    </div>
  );
}
