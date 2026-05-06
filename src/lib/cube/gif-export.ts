import GIF from 'gif.js';
import gifWorkerUrl from 'gif.js/dist/gif.worker.js?url';
import { applyMove, solvedState } from './state';
import { drawOverlay, layoutTokens } from './gif-overlay';
import type { CubeScene } from './scene';
import type { Facelets, LearningMode, Move } from './types';

export interface FrameJob {
  /** Logical step at the START of this frame's move (cube's settled state before partialMove). */
  stepBeforeMove: number;
  /** Index of the move being mid-rotated, or null for the settled tail frame. */
  moveIndex: number | null;
  /** Rotation progress 0..1 within `moveIndex`, or null on the settled tail. */
  progress: number | null;
  /** GIF delay for this frame, in ms. */
  delayMs: number;
}

export interface PlanFramesOpts {
  moves: Move[];
  startStep: number;
  endStep: number;
  /** Frames rendered per move (>= 1). */
  framesPerMove: number;
  /** Wall-clock duration one move occupies in the GIF (ms). */
  stepDelayMs: number;
}

export function planFrames(opts: PlanFramesOpts): FrameJob[] {
  const { moves, startStep, endStep, framesPerMove, stepDelayMs } = opts;
  const out: FrameJob[] = [];
  const perFrameDelay = framesPerMove > 0 ? stepDelayMs / framesPerMove : stepDelayMs;

  for (let i = startStep; i < endStep; i++) {
    for (let f = 0; f < framesPerMove; f++) {
      out.push({
        stepBeforeMove: i,
        moveIndex: i,
        progress: f / framesPerMove,
        delayMs: perFrameDelay,
      });
    }
  }
  out.push({
    stepBeforeMove: endStep,
    moveIndex: null,
    progress: null,
    delayMs: stepDelayMs,
  });
  void moves;
  return out;
}

/** Compute the facelet state after applying scrambleMoves then the first `step` of solutionMoves. */
export function computeStateAt(
  scrambleMoves: Move[],
  solutionMoves: Move[],
  step: number,
): Facelets {
  let s = solvedState();
  for (const m of scrambleMoves) s = applyMove(s, m);
  const n = Math.min(step, solutionMoves.length);
  for (let i = 0; i < n; i++) s = applyMove(s, solutionMoves[i]);
  return s;
}

export interface ExportGifOpts {
  scene: CubeScene;
  scrambleMoves: Move[];
  solutionMoves: Move[];
  startStep: number;
  endStep: number;
  /** Speed multiplier (1 = BASE_STEP_MS per move, 2 = twice as fast, 0.5 = half-speed). */
  speed: number;
  showOverlay: boolean;
  learning?: LearningMode;
  signal?: AbortSignal;
  onProgress?: (fraction: number) => void;
}

const BASE_STEP_MS = 350;
const FRAMES_PER_MOVE = 12;
const OVERLAY_FONT = '20px ui-monospace, "JetBrains Mono", "SFMono-Regular", monospace';
const OVERLAY_ACCENT = '#f08537';
const OVERLAY_NORMAL = '#1a1a1a';

export async function exportGif(opts: ExportGifOpts): Promise<Blob> {
  const {
    scene,
    scrambleMoves,
    solutionMoves,
    startStep,
    endStep,
    speed,
    showOverlay,
    learning,
    signal,
    onProgress,
  } = opts;

  if (signal?.aborted) throw new Error('aborted');

  const stepDelayMs = BASE_STEP_MS / speed;
  const jobs = planFrames({
    moves: solutionMoves,
    startStep,
    endStep,
    framesPerMove: FRAMES_PER_MOVE,
    stepDelayMs,
  });

  const sourceCanvas = scene.getCanvas();
  const w = sourceCanvas.width;
  const h = sourceCanvas.height;

  const composite = document.createElement('canvas');
  composite.width = w;
  composite.height = h;
  const ctx = composite.getContext('2d');
  if (!ctx) throw new Error('2D context unavailable');

  const tokens = solutionMoves.map((m) => m.notation);
  ctx.font = OVERLAY_FONT;
  const layout = showOverlay
    ? layoutTokens(tokens, (t) => ctx.measureText(t).width, {
        maxWidth: w,
        lineHeight: 26,
        padX: 14,
        padY: 14,
        gap: 8,
      })
    : [];

  const gif = new GIF({
    workers: 2,
    quality: 10,
    workerScript: gifWorkerUrl,
    width: w,
    height: h,
    repeat: 0,
    background: '#fafafa',
  });

  const totalJobs = jobs.length;
  for (let i = 0; i < totalJobs; i++) {
    if (signal?.aborted) {
      gif.abort();
      throw new Error('aborted');
    }
    const job = jobs[i];
    const stateAt = computeStateAt(scrambleMoves, solutionMoves, job.stepBeforeMove);
    const partial =
      job.moveIndex !== null && job.progress !== null
        ? solutionMoves[job.moveIndex]
        : undefined;
    scene.renderStillFrame(stateAt, learning, partial, job.progress ?? undefined);

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(sourceCanvas, 0, 0, w, h);
    if (showOverlay) {
      const currentIdx = job.moveIndex ?? endStep - 1;
      drawOverlay(ctx, layout, currentIdx, {
        font: OVERLAY_FONT,
        accentColor: OVERLAY_ACCENT,
        normalColor: OVERLAY_NORMAL,
      });
    }
    gif.addFrame(ctx, { delay: Math.max(20, Math.round(job.delayMs)), copy: true });
    onProgress?.((i + 1) / (totalJobs * 2));
    if (i % 4 === 0) await new Promise((r) => setTimeout(r, 0));
  }

  return await new Promise<Blob>((resolve, reject) => {
    gif.on('progress', (p) => onProgress?.(0.5 + p * 0.5));
    gif.on('finished', (blob) => resolve(blob));
    gif.on('abort', () => reject(new Error('aborted')));
    if (signal) {
      signal.addEventListener('abort', () => gif.abort(), { once: true });
    }
    gif.render();
  });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
