import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from '../../i18n';

const SPEED_STOPS = [0.25, 0.5, 1, 2, 4];

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
  onSubmit: (opts: GifExportSubmit, signal: AbortSignal) => Promise<void>;
  onClose: () => void;
}

export default function GifExportDialog({
  open,
  totalSteps,
  locale,
  progress,
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
      <div className="rc-modal">
        <h2 id={titleId} className="rc-modal__title">
          {t('rubiksCube.gif.dialogTitle')}
        </h2>

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
