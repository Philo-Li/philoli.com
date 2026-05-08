import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from '../../i18n';
import {
  OVERLAY_ACCENT,
  OVERLAY_FONT,
  OVERLAY_PAD_X,
  OVERLAY_PAD_Y,
} from '../../lib/cube/gif-export';
import { parseAlgorithm } from '../../lib/cube/parser';
import type { CubeScene as CubeSceneT } from '../../lib/cube/scene';
import { solvedState } from '../../lib/cube/state';

// 0.25× of the main playback's 350 ms base — slow enough that a beginner can
// track which layer is rotating and in which direction.
const MOVE_DURATION_MS = 1400;
const PAUSE_AFTER_RESET_MS = 250;
const PAUSE_AFTER_MOVE_MS = 600;

interface Group {
  key: string;
  symbols: readonly [string, string, string];
}

const FACE_GROUPS: readonly Group[] = [
  { key: 'U', symbols: ['U', "U'", 'U2'] },
  { key: 'D', symbols: ['D', "D'", 'D2'] },
  { key: 'R', symbols: ['R', "R'", 'R2'] },
  { key: 'L', symbols: ['L', "L'", 'L2'] },
  { key: 'F', symbols: ['F', "F'", 'F2'] },
  { key: 'B', symbols: ['B', "B'", 'B2'] },
];

const SLICE_GROUPS: readonly Group[] = [
  { key: 'M', symbols: ['M', "M'", 'M2'] },
  { key: 'E', symbols: ['E', "E'", 'E2'] },
  { key: 'S', symbols: ['S', "S'", 'S2'] },
];

interface Props {
  open: boolean;
  locale?: string;
  onClose: () => void;
}

export default function NotationGuideDialog({ open, locale, onClose }: Props) {
  const t = useTranslations(locale);
  const titleId = useId();
  const mountRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<CubeSceneT | null>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [selected, setSelected] = useState('R');

  useEffect(() => {
    if (open) setSelected('R');
  }, [open]);

  // Independent scene: spun up on open, torn down on close. Keeps the dialog
  // visually decoupled from the user's main scramble/solution playback.
  useEffect(() => {
    if (!open) return;
    const mount = mountRef.current;
    if (!mount) return;
    let cancelled = false;
    let scene: CubeSceneT | null = null;

    import('../../lib/cube/scene').then(({ CubeScene }) => {
      if (cancelled || !mountRef.current) return;
      scene = new CubeScene(mountRef.current);
      scene.reset(solvedState());
      sceneRef.current = scene;
      setSceneReady(true);
    });

    return () => {
      cancelled = true;
      setSceneReady(false);
      sceneRef.current = null;
      scene?.dispose();
    };
  }, [open]);

  // Loop the selected move: solved → animate → pause → repeat. Cancels and
  // restarts cleanly when the user picks a different symbol.
  useEffect(() => {
    if (!open || !sceneReady) return;
    const move = parseAlgorithm(selected).moves[0];
    if (!move) return;

    let cancelled = false;
    let waitTimeout: number | null = null;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        waitTimeout = window.setTimeout(resolve, ms);
      });

    const loop = async () => {
      while (!cancelled) {
        const scene = sceneRef.current;
        if (!scene) return;
        // Previous animation may still be wrapping up after a rapid switch.
        if (scene.isAnimating()) {
          await wait(50);
          continue;
        }
        try {
          scene.reset(solvedState());
        } catch {
          return;
        }
        if (cancelled) return;
        await wait(PAUSE_AFTER_RESET_MS);
        if (cancelled || !sceneRef.current) return;
        try {
          await sceneRef.current.animateMove(move, MOVE_DURATION_MS);
        } catch {
          return;
        }
        if (cancelled) return;
        await wait(PAUSE_AFTER_MOVE_MS);
      }
    };
    loop();

    return () => {
      cancelled = true;
      if (waitTimeout !== null) window.clearTimeout(waitTimeout);
    };
  }, [open, sceneReady, selected]);

  // Overlay the selected notation as accent-colored text in the top-left,
  // matching the on-canvas formula style used by the main cube view.
  useEffect(() => {
    if (!open || !sceneReady) return;
    const cv = overlayRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const sceneCanvas = sceneRef.current?.getCanvas();
      const w = sceneCanvas?.width ?? cv.clientWidth;
      const h = sceneCanvas?.height ?? cv.clientHeight;
      if (cv.width !== w) cv.width = w;
      if (cv.height !== h) cv.height = h;
      ctx.clearRect(0, 0, w, h);
      ctx.font = OVERLAY_FONT;
      ctx.fillStyle = OVERLAY_ACCENT;
      ctx.textBaseline = 'top';
      ctx.fillText(selected, OVERLAY_PAD_X, OVERLAY_PAD_Y);
    };

    draw();

    const mount = mountRef.current;
    if (!mount) return;
    const ro = new ResizeObserver(() => draw());
    ro.observe(mount);
    return () => ro.disconnect();
  }, [open, sceneReady, selected]);

  if (!open) return null;

  const renderGroup = (g: Group) => (
    <div key={g.key} className="rc-notation__row">
      <span className="rc-notation__row-label">
        {t(`rubiksCube.notation.label.${g.key}`)}
      </span>
      <span className="rc-notation__row-buttons">
        {g.symbols.map((s) => (
          <button
            key={s}
            type="button"
            className="rc-notation__btn"
            aria-pressed={selected === s}
            onClick={() => setSelected(s)}
          >
            {s}
          </button>
        ))}
      </span>
    </div>
  );

  return (
    <div className="rc-modal__backdrop" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="rc-modal rc-modal--wide">
        <h2 id={titleId} className="rc-modal__title">
          {t('rubiksCube.notation.title')}
        </h2>

        <div className="rc-modal__body">
          <div className="rc-modal__col rc-modal__col--preview">
            <div ref={mountRef} className="rc-notation__preview">
              <canvas
                ref={overlayRef}
                className="rc-notation__preview-overlay"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="rc-modal__col">
            <div className="rc-notation__group">
              <h3 className="rc-notation__heading">
                {t('rubiksCube.notation.facesHeading')}
              </h3>
              {FACE_GROUPS.map(renderGroup)}
            </div>
            <div className="rc-notation__group">
              <h3 className="rc-notation__heading">
                {t('rubiksCube.notation.slicesHeading')}
              </h3>
              {SLICE_GROUPS.map(renderGroup)}
            </div>
          </div>
        </div>

        <dl className="rc-notation__legend">
          <div className="rc-notation__legend-row">
            <dt>{t('rubiksCube.notation.legend.letterTerm')}</dt>
            <dd>{t('rubiksCube.notation.legend.letterDesc')}</dd>
          </div>
          <div className="rc-notation__legend-row">
            <dt>{t('rubiksCube.notation.legend.primeTerm')}</dt>
            <dd>{t('rubiksCube.notation.legend.primeDesc')}</dd>
          </div>
          <div className="rc-notation__legend-row">
            <dt>{t('rubiksCube.notation.legend.doubleTerm')}</dt>
            <dd>{t('rubiksCube.notation.legend.doubleDesc')}</dd>
          </div>
        </dl>

        <div className="rc-modal__actions">
          <button type="button" onClick={onClose} className="rc-modal__btn">
            {t('rubiksCube.notation.close')}
          </button>
        </div>
      </div>
    </div>
  );
}
