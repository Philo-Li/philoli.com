import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from '../i18n';
import { parseAlgorithm } from '../lib/cube/parser';
import { applyMove, solvedState } from '../lib/cube/state';
import type { CubeScene as CubeSceneT } from '../lib/cube/scene';
import { decodeShareState, encodeShareState, type ShareState } from '../lib/cube/url';
import { loadShareState, saveShareState } from '../lib/cube/storage';
import type { Color, LearningMode, Move } from '../lib/cube/types';
import '../styles/rubiks-cube.css';

interface Props {
  locale?: string;
}

const SPEED_STOPS = [0.25, 0.5, 1, 2, 4];
const BASE_STEP_MS = 350;

const COLORS: { color: Color; key: 'white' | 'red' | 'green' | 'yellow' | 'orange' | 'blue'; swatch: string }[] = [
  { color: 0, key: 'white', swatch: '#f6f6f0' },
  { color: 1, key: 'red', swatch: '#d23a2c' },
  { color: 2, key: 'green', swatch: '#3aa756' },
  { color: 3, key: 'yellow', swatch: '#f4d04a' },
  { color: 4, key: 'orange', swatch: '#f08537' },
  { color: 5, key: 'blue', swatch: '#3c6dde' },
];

const FACES: { face: Color; key: 'U' | 'R' | 'F' | 'D' | 'L' | 'B' }[] = [
  { face: 0, key: 'U' },
  { face: 1, key: 'R' },
  { face: 2, key: 'F' },
  { face: 3, key: 'D' },
  { face: 4, key: 'L' },
  { face: 5, key: 'B' },
];

function emptyLearning(): LearningMode {
  return { enabled: false, hiddenColors: new Set(), hiddenFaces: new Set() };
}

function inverseMove(m: Move): Move {
  return {
    ...m,
    turns: m.turns === 1 ? 3 : m.turns === 3 ? 1 : 2,
  };
}

export default function RubiksCube({ locale }: Props) {
  const t = useTranslations(locale);

  const [scramble, setScramble] = useState('');
  const [solution, setSolution] = useState('');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [learning, setLearning] = useState<LearningMode>(emptyLearning);
  const [copied, setCopied] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<CubeSceneT | null>(null);
  const animatingRef = useRef(false);

  // Refs that mirror state, so async loops always see the freshest values.
  const stepRef = useRef(step);
  const speedRef = useRef(speed);
  const playingRef = useRef(playing);
  const learningRef = useRef(learning);

  useEffect(() => {
    stepRef.current = step;
  }, [step]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);
  useEffect(() => {
    learningRef.current = learning;
  }, [learning]);

  // ---------- Parsing ----------
  const scrambleParse = useMemo(() => parseAlgorithm(scramble), [scramble]);
  const solutionParse = useMemo(() => parseAlgorithm(solution), [solution]);
  const scrambleMoves = scrambleParse.moves;
  const solutionMoves = solutionParse.moves;

  const solutionMovesRef = useRef(solutionMoves);
  useEffect(() => {
    solutionMovesRef.current = solutionMoves;
  }, [solutionMoves]);

  // Clamp step when solution length changes
  useEffect(() => {
    if (step > solutionMoves.length) {
      setStep(solutionMoves.length);
    }
  }, [solutionMoves.length, step]);

  // ---------- State derivation ----------
  const scrambledState = useMemo(() => {
    let s = solvedState();
    for (const m of scrambleMoves) s = applyMove(s, m);
    return s;
  }, [scrambleMoves]);

  const currentState = useMemo(() => {
    let s = scrambledState;
    const n = Math.min(step, solutionMoves.length);
    for (let i = 0; i < n; i++) s = applyMove(s, solutionMoves[i]);
    return s;
  }, [scrambledState, solutionMoves, step]);

  // ---------- Scene init (lazy: Three.js loads as a separate chunk) ----------
  useEffect(() => {
    if (!canvasRef.current) return;
    let cancelled = false;
    let scene: CubeSceneT | null = null;

    import('../lib/cube/scene').then(({ CubeScene }) => {
      if (cancelled || !canvasRef.current) return;
      scene = new CubeScene(canvasRef.current, {
        onLayerMove: async (move) => {
          if (animatingRef.current) return;
          animatingRef.current = true;
          try {
            await scene!.animateMove(move, BASE_STEP_MS / speedRef.current);
          } finally {
            animatingRef.current = false;
          }
        },
      });
      scene.reset(solvedState(), learningRef.current);
      sceneRef.current = scene;
      setSceneReady(true);
    });

    return () => {
      cancelled = true;
      scene?.dispose();
      sceneRef.current = null;
      setSceneReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Snap cubies back to canonical positions and re-paint when the logical
  // state changes (scramble / solution / step). Skip while animating.
  useEffect(() => {
    if (!sceneRef.current) return;
    if (animatingRef.current) return;
    sceneRef.current.reset(currentState, learningRef.current);
  }, [currentState]);

  // Learning toggles must NOT touch cubie positions — just repaint materials
  // so any drag-rotated state stays visually intact.
  useEffect(() => {
    sceneRef.current?.refreshLearning(learning);
  }, [learning]);

  // ---------- Load from URL hash / localStorage on mount ----------
  useEffect(() => {
    const fromHash = decodeShareState(window.location.hash);
    const initial = fromHash ?? loadShareState();
    if (initial) {
      setScramble(initial.scramble);
      setSolution(initial.solution);
      setLearning({
        enabled: initial.learning.enabled,
        hiddenColors: new Set(initial.learning.hiddenColors),
        hiddenFaces: new Set(initial.learning.hiddenFaces),
      });
      setStep(initial.step);
    }
  }, []);

  // ---------- Save to localStorage on change ----------
  useEffect(() => {
    saveShareState({ scramble, solution, learning, step });
  }, [scramble, solution, learning, step]);

  // ---------- Playback actions ----------
  const stepNext = async (): Promise<void> => {
    if (!sceneRef.current) return;
    const moves = solutionMovesRef.current;
    const cur = stepRef.current;
    if (cur >= moves.length) return;
    if (animatingRef.current) return;
    animatingRef.current = true;
    try {
      await sceneRef.current.animateMove(moves[cur], BASE_STEP_MS / speedRef.current);
      setStep(cur + 1);
    } finally {
      animatingRef.current = false;
    }
  };

  const stepPrev = async (): Promise<void> => {
    if (!sceneRef.current) return;
    const moves = solutionMovesRef.current;
    const cur = stepRef.current;
    if (cur <= 0) return;
    if (animatingRef.current) return;
    animatingRef.current = true;
    try {
      await sceneRef.current.animateMove(
        inverseMove(moves[cur - 1]),
        BASE_STEP_MS / speedRef.current,
      );
      setStep(cur - 1);
    } finally {
      animatingRef.current = false;
    }
  };

  const jumpToStart = (): void => {
    if (animatingRef.current) return;
    setStep(0);
  };
  const jumpToEnd = (): void => {
    if (animatingRef.current) return;
    setStep(solutionMoves.length);
  };

  // ---------- Auto-play loop ----------
  useEffect(() => {
    if (!playing) return;
    let cancelled = false;
    (async () => {
      while (!cancelled) {
        const moves = solutionMovesRef.current;
        if (stepRef.current >= moves.length) break;
        if (!playingRef.current) break;
        await stepNext();
      }
      setPlaying(false);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  // ---------- Learning mode ----------
  // Toggling a color/face also auto-enables learning so the change is visible
  // without a separate master toggle click. If the user empties both sets,
  // learning auto-disables.
  const toggleHiddenColor = (c: Color) => {
    setLearning((prev) => {
      const next = new Set(prev.hiddenColors);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      const enabled = next.size > 0 || prev.hiddenFaces.size > 0;
      return { ...prev, hiddenColors: next, enabled };
    });
  };
  const toggleHiddenFace = (f: Color) => {
    setLearning((prev) => {
      const next = new Set(prev.hiddenFaces);
      if (next.has(f)) next.delete(f);
      else next.add(f);
      const enabled = prev.hiddenColors.size > 0 || next.size > 0;
      return { ...prev, hiddenFaces: next, enabled };
    });
  };

  // ---------- Share ----------
  const copyShareLink = async () => {
    const state: ShareState = { scramble, solution, learning, step };
    const hash = encodeShareState(state);
    const url = `${window.location.origin}${window.location.pathname}${hash}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be unavailable; user can copy from the address bar after we update history.
      window.history.replaceState(null, '', hash || ' ');
    }
  };

  const resetScramble = () => {
    if (animatingRef.current) return;
    setScramble('');
    setSolution('');
    setStep(0);
    setPlaying(false);
  };

  // ---------- UI ----------
  const totalSteps = solutionMoves.length;
  const speedIndex = SPEED_STOPS.indexOf(speed);

  return (
    <main className="rc">
      <header className="rc__header">
        <p className="rc__eyebrow">PROJECT</p>
        <h1 className="rc__title">{t('rubiksCube.title')}</h1>
        <p className="rc__intro">{t('rubiksCube.intro')}</p>
      </header>

      <section className="rc__canvas">
        <div ref={canvasRef} className="rc__canvas-mount" />
        {!sceneReady && (
          <div className="rc__canvas-loading" aria-hidden="true">
            <div className="rc__canvas-spinner" />
          </div>
        )}
      </section>

      <section className="rc__playback">
        <button type="button" onClick={jumpToStart} disabled={step === 0} aria-label={t('rubiksCube.playback.first')} title={t('rubiksCube.playback.first')}>
          ⏮
        </button>
        <button type="button" onClick={stepPrev} disabled={step === 0} aria-label={t('rubiksCube.playback.prev')} title={t('rubiksCube.playback.prev')}>
          ⏪
        </button>
        <button
          type="button"
          className="rc__btn-play"
          onClick={() => setPlaying((p) => !p)}
          disabled={totalSteps === 0 || (step >= totalSteps && !playing)}
        >
          {playing ? t('rubiksCube.playback.pause') : t('rubiksCube.playback.play')}
        </button>
        <button type="button" onClick={stepNext} disabled={step >= totalSteps} aria-label={t('rubiksCube.playback.next')} title={t('rubiksCube.playback.next')}>
          ⏩
        </button>
        <button type="button" onClick={jumpToEnd} disabled={step >= totalSteps} aria-label={t('rubiksCube.playback.last')} title={t('rubiksCube.playback.last')}>
          ⏭
        </button>
        <span className="rc__step-counter">
          {step} / {totalSteps}
        </span>
        <label className="rc__speed">
          <span>{t('rubiksCube.playback.speed')}</span>
          <input
            type="range"
            min={0}
            max={SPEED_STOPS.length - 1}
            step={1}
            value={speedIndex < 0 ? 2 : speedIndex}
            onChange={(e) => setSpeed(SPEED_STOPS[parseInt(e.currentTarget.value, 10)])}
          />
          <span>{speed}×</span>
        </label>
      </section>

      <section className="rc__learning">
        <header className="rc__learning-header">
          <h2 className="rc__learning-title">{t('rubiksCube.learning.title')}</h2>
          <label className="rc__toggle">
            <input
              type="checkbox"
              checked={learning.enabled}
              onChange={(e) =>
                setLearning((p) => ({ ...p, enabled: e.currentTarget.checked }))
              }
            />
            <span>{t('rubiksCube.learning.master')}</span>
          </label>
        </header>
        <div className="rc__learning-row">
          <span className="rc__learning-label">{t('rubiksCube.learning.hideColors')}</span>
          {COLORS.map(({ color, key, swatch }) => (
            <button
              key={key}
              type="button"
              className="rc__swatch"
              style={{ background: swatch }}
              aria-pressed={learning.hiddenColors.has(color)}
              aria-label={t(`rubiksCube.learning.colorLabel.${key}`)}
              title={t(`rubiksCube.learning.colorLabel.${key}`)}
              onClick={() => toggleHiddenColor(color)}
            >
              {learning.hiddenColors.has(color) ? '×' : ''}
            </button>
          ))}
        </div>
        <div className="rc__learning-row">
          <span className="rc__learning-label">{t('rubiksCube.learning.hideFaces')}</span>
          {FACES.map(({ face, key }) => (
            <button
              key={key}
              type="button"
              className="rc__face-btn"
              aria-pressed={learning.hiddenFaces.has(face)}
              title={t(`rubiksCube.learning.faceLabel.${key}`)}
              onClick={() => toggleHiddenFace(face)}
            >
              {key}
            </button>
          ))}
        </div>
      </section>

      <section className="rc__controls">
        <label className="rc__field">
          <div className="rc__field-header">
            <span className="rc__field-label">{t('rubiksCube.scramble.label')}</span>
            <button type="button" className="rc__field-action" onClick={resetScramble}>
              {t('rubiksCube.scramble.reset')}
            </button>
          </div>
          <textarea
            className="rc__input"
            rows={2}
            value={scramble}
            onChange={(e) => {
              setScramble(e.currentTarget.value);
              setStep(0);
              setPlaying(false);
            }}
            placeholder={t('rubiksCube.scramble.placeholder')}
            spellCheck={false}
          />
          {scrambleParse.errors.length > 0 && (
            <div className="rc__error">
              {t('rubiksCube.solution.parseError').replace('{token}', scrambleParse.errors[0].token)}
            </div>
          )}
        </label>
        <label className="rc__field">
          <div className="rc__field-header">
            <span className="rc__field-label">{t('rubiksCube.solution.label')}</span>
          </div>
          <textarea
            className="rc__input"
            rows={2}
            value={solution}
            onChange={(e) => {
              setSolution(e.currentTarget.value);
              setStep(0);
              setPlaying(false);
            }}
            placeholder={t('rubiksCube.solution.placeholder')}
            spellCheck={false}
          />
          {solutionParse.errors.length > 0 && (
            <div className="rc__error">
              {t('rubiksCube.solution.parseError').replace('{token}', solutionParse.errors[0].token)}
            </div>
          )}
        </label>
      </section>

      <section className="rc__share">
        <button type="button" onClick={copyShareLink}>
          {copied ? t('rubiksCube.share.copied') : t('rubiksCube.share.copy')}
        </button>
      </section>
    </main>
  );
}
