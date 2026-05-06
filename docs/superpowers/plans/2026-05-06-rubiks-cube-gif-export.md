# Rubik's Cube GIF Export — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Export GIF" feature on the Rubik's Cube page that records a user-selected step range of the solution as an animated GIF, with optional formula overlay highlighting the current move.

**Architecture:** Client-side capture using `gif.js` (Web Worker encoder). The existing `CubeScene` gets a synchronous `renderStillFrame` method so we can paint frames faster than realtime without disturbing live playback. A new `gif-export.ts` orchestrates frame capture (per-move sub-frames at ~30fps) and overlays text via a 2D canvas before feeding frames to the worker. A `GifExportDialog` component handles range/speed/overlay selection and progress UI.

**Tech Stack:** TypeScript, React 19, Three.js 0.184, `gif.js` (new), Vitest (existing).

**Spec:** See `docs/superpowers/specs/2026-05-06-rubiks-cube-gif-export-design.md`.

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `package.json` | modify | add `gif.js` runtime dep, `@types/gif.js` dev dep (or local declaration) |
| `src/lib/cube/scene.ts` | modify | new public `renderStillFrame(state, partialMove?, progress?, learning?)` and `getCanvas()` methods |
| `src/lib/cube/gif-overlay.ts` | **new** | pure text-layout + draw helpers for the formula overlay (testable) |
| `src/lib/cube/gif-export.ts` | **new** | orchestrator: frame schedule → render → overlay → gif.js encode → Blob |
| `src/lib/cube/gif-export.test.ts` | **new** | Vitest unit tests for frame schedule + overlay layout (no WebGL) |
| `src/components/cube/GifExportDialog.tsx` | **new** | modal: range slider, speed select, overlay toggle, progress, cancel |
| `src/components/RubiksCube.tsx` | modify | add "Export GIF" button + dialog wiring |
| `src/styles/rubiks-cube.css` | modify | modal + dialog styles |
| `src/i18n/en.json` | modify | new keys `rubiksCube.gif.*` |
| `src/i18n/zh.json` | modify | parallel keys |
| Other locales | regenerate | run `npm run i18n:translate` |

**Decomposition rationale:** keeping the dialog component separate prevents `RubiksCube.tsx` from growing further. `gif-overlay.ts` is split out from `gif-export.ts` because text layout is pure logic worth testing; orchestration touches WebGL + Workers and is verified manually.

---

## Chunk 1: Dependencies & Scene API

### Task 1: Install gif.js

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install dependency**

```bash
npm install gif.js
```

- [ ] **Step 2: Add ambient type declarations**

`gif.js` ships no types. Create `src/lib/cube/gif.d.ts`:

```typescript
declare module 'gif.js' {
  interface GIFOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string;
    repeat?: number;
    background?: string;
    transparent?: number | null;
    debug?: boolean;
    dither?: boolean | string;
  }
  interface AddFrameOptions {
    delay?: number;
    copy?: boolean;
    dispose?: number;
  }
  type ImageSource =
    | HTMLCanvasElement
    | CanvasRenderingContext2D
    | HTMLImageElement
    | ImageData;
  class GIF {
    constructor(opts?: GIFOptions);
    addFrame(image: ImageSource, opts?: AddFrameOptions): void;
    render(): void;
    abort(): void;
    on(event: 'progress', cb: (p: number) => void): void;
    on(event: 'finished', cb: (blob: Blob) => void): void;
    on(event: 'abort', cb: () => void): void;
  }
  export default GIF;
}
```

- [ ] **Step 3: Verify it builds**

Run: `npm run build`
Expected: build succeeds, no missing-module errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json src/lib/cube/gif.d.ts
git commit -m "feat(rubiks-cube): add gif.js dependency for GIF export"
```

### Task 2: Expose still-frame rendering on `CubeScene`

**Files:**
- Modify: `src/lib/cube/scene.ts`

The renderer's draw buffer is only stable inside the same task as `render()`, so the new method will render and return the canvas — callers must `drawImage` immediately. We must also enable `preserveDrawingBuffer` so subsequent `drawImage` calls work even after the next paint cycle (insurance for export reliability).

- [ ] **Step 1: Enable `preserveDrawingBuffer` on the renderer**

In `scene.ts` constructor, change:

```typescript
this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
```

to:

```typescript
this.renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  preserveDrawingBuffer: true,
});
```

- [ ] **Step 2: Add `getCanvas()` method**

After the existing `dispose()` method (or near other public methods), add:

```typescript
/** The raw WebGL canvas. Use for capture/screenshot — do not mount elsewhere. */
public getCanvas(): HTMLCanvasElement {
  return this.renderer.domElement;
}
```

- [ ] **Step 3: Add `renderStillFrame` method**

Refactor: extract a private helper `renderWithPartialMove(state, learning, partialMove, progress)` that:
- Calls `setFacelets(state, learning)` (same as `reset`'s tail half — but we want positions canonical first)
- For frames during a move: temporarily attaches the moving cubies to a pivot, applies the partial rotation (`angleFor(partialMove) * easeInOutQuad(progress)`), renders, then detaches without committing the rotation (so next call starts from the same canonical state)

Add after `animateMove`:

```typescript
/**
 * Synchronously render one frame at `state`, optionally with an in-progress
 * `partialMove` rotated to `progress` (0..1). Pivot is detached afterwards
 * so cubies stay at canonical positions for the next call. Skips when an
 * animation is in flight.
 *
 * Caller must read the canvas (drawImage / toDataURL) immediately, before
 * any subsequent paint.
 */
public renderStillFrame(
  state: Facelets,
  learning?: LearningMode,
  partialMove?: Move,
  progress?: number,
): HTMLCanvasElement {
  if (this.animating) {
    throw new Error('renderStillFrame called during animateMove');
  }
  // Snap to canonical positions and set materials.
  this.reset(state, learning);

  let pivot: THREE.Group | null = null;
  let moving: THREE.Group[] = [];
  if (partialMove && typeof progress === 'number') {
    moving = this.collectMovingCubies(partialMove);
    pivot = new THREE.Group();
    this.cubeRoot.add(pivot);
    for (const c of moving) pivot.attach(c);
    const angle = this.angleFor(partialMove) * easeInOutQuad(Math.max(0, Math.min(1, progress)));
    pivot.setRotationFromAxisAngle(this.axisVec(partialMove.axis), angle);
  }

  this.renderer.render(this.scene, this.camera);

  if (pivot) {
    for (const c of [...moving]) this.cubeRoot.attach(c);
    this.cubeRoot.remove(pivot);
  }

  // Live render loop reads `dirty`; mark dirty so the next RAF still paints
  // (we just stomped its draw buffer).
  this.markDirty();
  return this.renderer.domElement;
}
```

- [ ] **Step 4: Verify build + page still works**

```bash
npm run build
npm run dev
```

In a browser: open `/projects/rubiks-cube`, enter scramble `R U R'`, press play. Confirm the cube animates normally — `preserveDrawingBuffer: true` shouldn't visibly change anything.

- [ ] **Step 5: Smoke test in DevTools**

In the browser console (with the cube page open), grab the React fiber's scene ref via the existing canvas-mount, OR temporarily expose `sceneRef.current` on `window` for testing. Call:

```js
const c = scene.renderStillFrame(scene.currentState ?? new Uint8Array([...]));
console.log(c.toDataURL().slice(0,60));
```

Expected: a `data:image/png;base64,…` string. Remove any temporary debug exposure before commit.

- [ ] **Step 6: Commit**

```bash
git add src/lib/cube/scene.ts
git commit -m "feat(cube): expose renderStillFrame for offline frame capture"
```

---

## Chunk 2: Overlay Text Layout (TDD)

### Task 3: Pure layout function

**Files:**
- Create: `src/lib/cube/gif-overlay.ts`
- Create: `src/lib/cube/gif-overlay.test.ts`

The overlay draws every move's notation at the canvas top-left, wrapping to multiple lines, with the current step highlighted in orange. We split this into:
- `layoutTokens(tokens, measure, maxWidth, lineHeight, padX, padY)` → array of `{ token, x, y }` (pure)
- `drawOverlay(ctx, layout, currentIdx, accent, normal, font)` → side-effecting paint

Layout is pure: takes a `measure(text) => number` so tests don't need a real canvas.

- [ ] **Step 1: Write failing test for `layoutTokens`**

`src/lib/cube/gif-overlay.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { layoutTokens } from './gif-overlay';

const measureMono =
  (charPx: number) =>
  (text: string): number =>
    text.length * charPx;

describe('layoutTokens', () => {
  it('places single-line tokens left-to-right with gap', () => {
    const layout = layoutTokens(['R', "U'", 'F2'], measureMono(10), {
      maxWidth: 1000,
      lineHeight: 20,
      padX: 8,
      padY: 8,
      gap: 8,
    });
    expect(layout).toHaveLength(3);
    expect(layout[0]).toEqual({ token: 'R', x: 8, y: 8, width: 10 });
    expect(layout[1].x).toBe(8 + 10 + 8); // padX + R width + gap
    expect(layout[1].y).toBe(8);
    expect(layout[2].x).toBe(layout[1].x + 20 + 8);
  });

  it('wraps when next token would exceed maxWidth', () => {
    const layout = layoutTokens(['RR', 'UU', 'FF'], measureMono(10), {
      maxWidth: 50, // 8 + 20 + 8 + 20 = 56 → second token still fits at x=36; third triggers wrap
      lineHeight: 20,
      padX: 8,
      padY: 8,
      gap: 8,
    });
    expect(layout[0].y).toBe(8);
    expect(layout[1].y).toBe(8); // fits on line 1
    expect(layout[2].y).toBe(8 + 20); // wrapped to line 2
    expect(layout[2].x).toBe(8); // back to padX
  });

  it('returns empty for no tokens', () => {
    expect(layoutTokens([], measureMono(10), {
      maxWidth: 100, lineHeight: 20, padX: 8, padY: 8, gap: 8,
    })).toEqual([]);
  });
});
```

- [ ] **Step 2: Run test, confirm failure**

```bash
npx vitest run src/lib/cube/gif-overlay.test.ts
```

Expected: import error / module not found.

- [ ] **Step 3: Implement `layoutTokens`**

Create `src/lib/cube/gif-overlay.ts`:

```typescript
export interface LayoutOpts {
  maxWidth: number;
  lineHeight: number;
  padX: number;
  padY: number;
  gap: number;
}

export interface PlacedToken {
  token: string;
  x: number;
  y: number;
  width: number;
}

export function layoutTokens(
  tokens: string[],
  measure: (text: string) => number,
  opts: LayoutOpts,
): PlacedToken[] {
  const out: PlacedToken[] = [];
  let x = opts.padX;
  let y = opts.padY;
  for (const token of tokens) {
    const w = measure(token);
    if (x !== opts.padX && x + w > opts.maxWidth - opts.padX) {
      x = opts.padX;
      y += opts.lineHeight;
    }
    out.push({ token, x, y, width: w });
    x += w + opts.gap;
  }
  return out;
}
```

- [ ] **Step 4: Run tests, confirm pass**

```bash
npx vitest run src/lib/cube/gif-overlay.test.ts
```

Expected: 3 passing.

- [ ] **Step 5: Add `drawOverlay` (no test — wraps `ctx.fillText`)**

Append to `gif-overlay.ts`:

```typescript
export interface DrawOpts {
  font: string;
  accentColor: string;
  normalColor: string;
}

export function drawOverlay(
  ctx: CanvasRenderingContext2D,
  layout: PlacedToken[],
  currentIdx: number,
  opts: DrawOpts,
): void {
  ctx.save();
  ctx.font = opts.font;
  ctx.textBaseline = 'top';
  for (let i = 0; i < layout.length; i++) {
    const p = layout[i];
    ctx.fillStyle = i === currentIdx ? opts.accentColor : opts.normalColor;
    ctx.fillText(p.token, p.x, p.y);
  }
  ctx.restore();
}
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/cube/gif-overlay.ts src/lib/cube/gif-overlay.test.ts
git commit -m "feat(cube): pure overlay text layout for GIF export"
```

---

## Chunk 3: Frame Schedule (TDD)

### Task 4: `planFrames`

The export captures one or more frames per move. `planFrames` returns the recipe — one entry per output frame — so that `gif-export.ts` is just a loop over its result.

**Files:**
- Modify: `src/lib/cube/gif-export.ts` (create)
- Modify: `src/lib/cube/gif-export.test.ts` (create)

- [ ] **Step 1: Write failing test for `planFrames`**

`src/lib/cube/gif-export.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { planFrames } from './gif-export';
import type { Move } from './types';

const move = (notation: string): Move => ({
  axis: 'x',
  layers: [1],
  turns: 1,
  notation,
});

describe('planFrames', () => {
  it('produces N intermediate frames per move plus one final settled frame', () => {
    const moves = [move('R'), move("U'")];
    const frames = planFrames({
      moves,
      startStep: 0,
      endStep: 2,
      framesPerMove: 4,
      stepDelayMs: 100, // total move duration
    });
    // 2 moves × 4 frames + 1 final = 9
    expect(frames).toHaveLength(9);
    // First frame: stepBeforeMove=0, partialMove=R, progress=0
    expect(frames[0]).toMatchObject({
      stepBeforeMove: 0,
      moveIndex: 0,
      progress: 0,
    });
    // Last "during" frame of first move: progress < 1
    expect(frames[3].progress).toBeCloseTo(0.75, 5);
    // First frame of second move: stepBeforeMove=1
    expect(frames[4]).toMatchObject({
      stepBeforeMove: 1,
      moveIndex: 1,
      progress: 0,
    });
    // Final frame: settled at endStep, no partial move
    expect(frames[8]).toMatchObject({
      stepBeforeMove: 2,
      moveIndex: null,
      progress: null,
    });
    // Per-frame delay = stepDelayMs / framesPerMove = 25
    expect(frames[0].delayMs).toBe(25);
  });

  it('supports a sub-range', () => {
    const moves = [move('R'), move('U'), move('F'), move('D')];
    const frames = planFrames({
      moves, startStep: 1, endStep: 3, framesPerMove: 2, stepDelayMs: 100,
    });
    // 2 moves in range × 2 frames + 1 final = 5
    expect(frames).toHaveLength(5);
    expect(frames[0].moveIndex).toBe(1);
    expect(frames[2].moveIndex).toBe(2);
    expect(frames[4].moveIndex).toBeNull();
  });

  it('handles empty range as a single settled frame', () => {
    const frames = planFrames({
      moves: [move('R')], startStep: 0, endStep: 0, framesPerMove: 4, stepDelayMs: 100,
    });
    expect(frames).toEqual([
      { stepBeforeMove: 0, moveIndex: null, progress: null, delayMs: 100 },
    ]);
  });
});
```

- [ ] **Step 2: Run test, confirm failure**

```bash
npx vitest run src/lib/cube/gif-export.test.ts
```

Expected: module not found.

- [ ] **Step 3: Implement `planFrames`**

Create `src/lib/cube/gif-export.ts` with just the planner first:

```typescript
import type { Move } from './types';

export interface FrameJob {
  /** Logical step at the START of this move (the cube's settled state before partialMove is applied). */
  stepBeforeMove: number;
  /** Index into the original moves array this frame is mid-rotating, or null for the settled final frame. */
  moveIndex: number | null;
  /** Rotation progress 0..1 within `moveIndex`, or null for the settled frame. */
  progress: number | null;
  /** GIF delay for this frame, in ms. */
  delayMs: number;
}

export interface PlanFramesOpts {
  moves: Move[];
  /** Inclusive start: the cube state *before* this move executes. */
  startStep: number;
  /** Inclusive end: the cube state *after* this move executes (= startStep of the next move). */
  endStep: number;
  /** How many frames to render per move (must be >= 1). */
  framesPerMove: number;
  /** Total wall-clock time one move should take in the GIF (ms). */
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
  // Settled tail frame so the GIF lingers on the final state for one full step duration.
  out.push({
    stepBeforeMove: endStep,
    moveIndex: null,
    progress: null,
    delayMs: stepDelayMs,
  });
  // Suppress unused-var lints on `moves` — present for API symmetry / future use.
  void moves;
  return out;
}
```

- [ ] **Step 4: Run tests, confirm pass**

```bash
npx vitest run src/lib/cube/gif-export.test.ts
```

Expected: 3 passing.

- [ ] **Step 5: Commit**

```bash
git add src/lib/cube/gif-export.ts src/lib/cube/gif-export.test.ts
git commit -m "feat(cube): plan GIF frame schedule"
```

---

## Chunk 4: Encode Orchestrator

### Task 5: `exportGif` end-to-end

**Files:**
- Modify: `src/lib/cube/gif-export.ts`

This is the wet end — it touches WebGL, Workers, and DOM, so we verify it manually (no automated test).

- [ ] **Step 1: Implement `computeStateAt` helper**

We need to know the cube's settled facelet state at step N for `renderStillFrame`. The page already does this in React; we replicate the logic so the export module is self-contained.

Append to `src/lib/cube/gif-export.ts`:

```typescript
import { applyMove, solvedState } from './state';
import type { Facelets, LearningMode } from './types';

/** Compute the facelet state after applying `scrambleMoves` then the first `step` of `solutionMoves`. */
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
```

- [ ] **Step 2: Implement `exportGif`**

Append to `src/lib/cube/gif-export.ts`:

```typescript
import GIF from 'gif.js';
// gif.js worker is shipped via npm; resolve it as a static asset URL so Vite/Astro bundle it.
import gifWorkerUrl from 'gif.js/dist/gif.worker.js?url';
import type { CubeScene } from './scene';
import { drawOverlay, layoutTokens } from './gif-overlay';

export interface ExportGifOpts {
  scene: CubeScene;
  scrambleMoves: Move[];
  solutionMoves: Move[];
  startStep: number;
  endStep: number;
  /** Speed multiplier (e.g. 1, 2, 0.5). 1 = BASE_STEP_MS per move. */
  speed: number;
  showOverlay: boolean;
  learning?: LearningMode;
  signal?: AbortSignal;
  onProgress?: (fraction: number) => void;
}

const BASE_STEP_MS = 350;
const OVERLAY_FONT = '20px ui-monospace, "JetBrains Mono", "SFMono-Regular", monospace';
const OVERLAY_ACCENT = '#f08537';
const OVERLAY_NORMAL = '#1a1a1a';

export async function exportGif(opts: ExportGifOpts): Promise<Blob> {
  const {
    scene, scrambleMoves, solutionMoves, startStep, endStep,
    speed, showOverlay, learning, signal, onProgress,
  } = opts;

  if (signal?.aborted) throw new Error('aborted');

  const stepDelayMs = BASE_STEP_MS / speed;
  const framesPerMove = 12;
  const jobs = planFrames({
    moves: solutionMoves,
    startStep, endStep,
    framesPerMove, stepDelayMs,
  });

  const sourceCanvas = scene.getCanvas();
  const w = sourceCanvas.width;
  const h = sourceCanvas.height;

  // 2D scratch canvas for compositing the WebGL frame + overlay.
  const composite = document.createElement('canvas');
  composite.width = w;
  composite.height = h;
  const ctx = composite.getContext('2d');
  if (!ctx) throw new Error('2D context unavailable');

  // Pre-compute tokens + layout once (formula is constant for the whole render).
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
      const currentIdx = job.moveIndex ?? endStep - 1; // settled frame highlights the last move executed
      drawOverlay(ctx, layout, currentIdx, {
        font: OVERLAY_FONT,
        accentColor: OVERLAY_ACCENT,
        normalColor: OVERLAY_NORMAL,
      });
    }
    gif.addFrame(ctx, { delay: Math.max(20, Math.round(job.delayMs)), copy: true });
    onProgress?.((i + 1) / (totalJobs * 2)); // first half of progress: capture
    // Yield so the UI can paint the progress bar.
    if (i % 4 === 0) await new Promise((r) => setTimeout(r, 0));
  }

  return await new Promise<Blob>((resolve, reject) => {
    gif.on('progress', (p) => onProgress?.(0.5 + p * 0.5)); // second half: encode
    gif.on('finished', (blob) => resolve(blob));
    gif.on('abort', () => reject(new Error('aborted')));
    if (signal) {
      signal.addEventListener('abort', () => gif.abort(), { once: true });
    }
    gif.render();
  });
}

/** Trigger a download of the given blob with the given filename. */
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
```

- [ ] **Step 3: Verify it builds**

```bash
npm run build
```

Expected: success. If `gif.js/dist/gif.worker.js?url` import fails, check `node_modules/gif.js/dist/` exists; the file is shipped with the package.

- [ ] **Step 4: Manual smoke test from DevTools**

Run `npm run dev`, open the cube page, enter scramble `R U R'`, leave solution as `R U R'`. In console (after temporarily exposing `sceneRef.current` as `window.__scene` in `RubiksCube.tsx`):

```js
const { exportGif, downloadBlob } = await import('/src/lib/cube/gif-export.ts');
const { parseAlgorithm } = await import('/src/lib/cube/parser.ts');
const blob = await exportGif({
  scene: window.__scene,
  scrambleMoves: parseAlgorithm("R U R'").moves,
  solutionMoves: parseAlgorithm("R U R'").moves,
  startStep: 0, endStep: 3,
  speed: 1, showOverlay: true,
  onProgress: (p) => console.log('progress', p),
});
downloadBlob(blob, 'test.gif');
```

Expected: a `test.gif` downloads showing the cube doing R U R' with `R U R'` at top-left, current move in orange. Remove the `window.__scene` debug line before next commit.

- [ ] **Step 5: Commit**

```bash
git add src/lib/cube/gif-export.ts
git commit -m "feat(cube): GIF export orchestrator with overlay"
```

---

## Chunk 5: Dialog Component

### Task 6: `GifExportDialog`

**Files:**
- Create: `src/components/cube/GifExportDialog.tsx`
- Modify: `src/styles/rubiks-cube.css`

The dialog uses two overlapping `<input type="range">` for the dual-handle slider. The CSS positions them on the same horizontal track; pointer-events on the lower-z thumb is restored via z-index per the W3C "two range inputs" pattern.

- [ ] **Step 1: Add i18n keys to `en.json`**

Find the `rubiksCube` block in `src/i18n/en.json` and add a new `gif` sub-object. Keys to add:

```json
"gif": {
  "exportButton": "Export GIF",
  "dialogTitle": "Export GIF",
  "rangeLabel": "Range",
  "rangeCaption": "From step {start} to step {end} ({count} steps)",
  "speedLabel": "Speed",
  "showOverlay": "Show step overlay on canvas",
  "cancel": "Cancel",
  "generate": "Generate GIF",
  "generating": "Generating… {percent}%",
  "errorGeneric": "Failed to generate GIF. Please try again.",
  "filenamePrefix": "rubiks-cube"
}
```

- [ ] **Step 2: Add the Chinese mirror in `zh.json`**

Same structure under `rubiksCube.gif` in `src/i18n/zh.json`:

```json
"gif": {
  "exportButton": "导出 GIF",
  "dialogTitle": "导出 GIF",
  "rangeLabel": "范围",
  "rangeCaption": "从第 {start} 步到第 {end} 步（共 {count} 步）",
  "speedLabel": "速度",
  "showOverlay": "在画布上显示步骤",
  "cancel": "取消",
  "generate": "生成 GIF",
  "generating": "生成中… {percent}%",
  "errorGeneric": "生成失败，请重试。",
  "filenamePrefix": "rubiks-cube"
}
```

- [ ] **Step 3: Create `GifExportDialog.tsx`**

```tsx
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
  /** Resolves once generation is finished (or rejects on error). */
  onSubmit: (opts: GifExportSubmit, signal: AbortSignal) => Promise<void>;
  onClose: () => void;
}

export default function GifExportDialog({ open, totalSteps, locale, onSubmit, onClose }: Props) {
  const t = useTranslations(locale);
  const titleId = useId();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(totalSteps);
  const [speed, setSpeed] = useState(1);
  const [showOverlay, setShowOverlay] = useState(true);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Reset on open
  useEffect(() => {
    if (open) {
      setStart(0);
      setEnd(totalSteps);
      setSpeed(1);
      setShowOverlay(true);
      setBusy(false);
      setProgress(0);
      setError(null);
    }
  }, [open, totalSteps]);

  if (!open) return null;

  const handleStart = (v: number) => setStart(Math.min(v, end));
  const handleEnd = (v: number) => setEnd(Math.max(v, start));
  const count = Math.max(0, end - start);

  const handleGenerate = async () => {
    setBusy(true);
    setError(null);
    setProgress(0);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      await onSubmit(
        { startStep: start, endStep: end, speed, showOverlay },
        ctrl.signal,
      );
      onClose();
    } catch (err) {
      if (ctrl.signal.aborted) {
        // user cancelled — quietly close
        return;
      }
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

  // Surface progress to dialog from outside via a ref the parent passes? Simpler:
  // we expose an onProgress through onSubmit's contract. Handled by parent calling
  // our setter — but here we don't know the setter. We use a different pattern:
  // parent calls onSubmit which itself wraps onProgress and calls a callback we
  // pass via context. Keep this simple: the parent component owns progress UI
  // through a ref. But for v1, leave progress at indeterminate when busy.

  return (
    <div className="rc-modal__backdrop" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="rc-modal">
        <h2 id={titleId} className="rc-modal__title">{t('rubiksCube.gif.dialogTitle')}</h2>

        <div className="rc-modal__field">
          <label className="rc-modal__label">{t('rubiksCube.gif.rangeLabel')}</label>
          <div className="rc-modal__range">
            <input
              type="range"
              min={0}
              max={totalSteps}
              value={start}
              onChange={(e) => handleStart(parseInt(e.currentTarget.value, 10))}
              disabled={busy}
              aria-label="start"
            />
            <input
              type="range"
              min={0}
              max={totalSteps}
              value={end}
              onChange={(e) => handleEnd(parseInt(e.currentTarget.value, 10))}
              disabled={busy}
              aria-label="end"
            />
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
              ? t('rubiksCube.gif.generating').replace('{percent}', String(Math.round(progress * 100)))
              : t('rubiksCube.gif.generate')}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Hook the dialog up to a parent-provided progress ref. Re-export the type. */
export { type GifExportSubmit as Submit };
```

**Note:** progress UI gets wired via a small refactor in Task 7 (parent passes a `progressRef` whose value the dialog reads). For now leave the local `progress` state at 0; we'll thread the ref through after integration.

- [ ] **Step 4: Add modal CSS**

Append to `src/styles/rubiks-cube.css`:

```css
/* GIF export modal */
.rc-modal__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: var(--space-md);
}

.rc-modal {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-lg);
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.rc-modal__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
}

.rc-modal__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.rc-modal__label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-muted);
}

.rc-modal__range {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.rc-modal__range input[type="range"] {
  accent-color: var(--color-accent);
  width: 100%;
}

.rc-modal__caption {
  font-size: 0.85rem;
  color: var(--color-text-subtle);
  margin: 0;
}

.rc-modal__speed {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.rc-modal__speed-btn {
  font-family: inherit;
  font-size: 0.85rem;
  padding: 0.35rem 0.7rem;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
}

.rc-modal__speed-btn[aria-pressed="true"] {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: white;
}

.rc-modal__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
  cursor: pointer;
}

.rc-modal__checkbox input[type="checkbox"] {
  accent-color: var(--color-accent);
}

.rc-modal__error {
  font-size: 0.85rem;
  color: #d23a2c;
  margin: 0;
}

.rc-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

.rc-modal__btn {
  font-family: inherit;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
}

.rc-modal__btn--primary {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: white;
  min-width: 8rem;
}

.rc-modal__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

- [ ] **Step 5: Verify TypeScript builds**

```bash
npm run build
```

Expected: success. (Component isn't wired up yet, so no functional verification — just type checking.)

- [ ] **Step 6: Commit**

```bash
git add src/components/cube/GifExportDialog.tsx src/styles/rubiks-cube.css src/i18n/en.json src/i18n/zh.json
git commit -m "feat(cube): GIF export dialog component + i18n keys"
```

---

## Chunk 6: Wire-up & Verification

### Task 7: Integrate into RubiksCube

**Files:**
- Modify: `src/components/RubiksCube.tsx`

- [ ] **Step 1: Add export-button + dialog state in `RubiksCube.tsx`**

Near the other `useState` declarations (around line 50-58):

```typescript
const [gifOpen, setGifOpen] = useState(false);
const [gifProgress, setGifProgress] = useState(0);
```

Add an import at the top:

```typescript
import GifExportDialog, { type GifExportSubmit } from './cube/GifExportDialog';
import { exportGif, downloadBlob } from '../lib/cube/gif-export';
```

- [ ] **Step 2: Add export-button to share section**

Replace the existing `<section className="rc__share">` JSX with:

```tsx
<section className="rc__share">
  <button type="button" onClick={copyShareLink}>
    {copied ? t('rubiksCube.share.copied') : t('rubiksCube.share.copy')}
  </button>
  <button
    type="button"
    onClick={() => setGifOpen(true)}
    disabled={totalSteps === 0 || !sceneReady}
  >
    {t('rubiksCube.gif.exportButton')}
  </button>
</section>
<GifExportDialog
  open={gifOpen}
  totalSteps={totalSteps}
  locale={locale}
  onClose={() => setGifOpen(false)}
  onSubmit={handleGifGenerate}
/>
```

- [ ] **Step 3: Implement `handleGifGenerate`**

Add near the other handlers (e.g. after `copyShareLink`):

```typescript
const handleGifGenerate = async (opts: GifExportSubmit, signal: AbortSignal) => {
  if (!sceneRef.current) throw new Error('scene not ready');
  setGifProgress(0);
  const blob = await exportGif({
    scene: sceneRef.current,
    scrambleMoves,
    solutionMoves,
    startStep: opts.startStep,
    endStep: opts.endStep,
    speed: opts.speed,
    showOverlay: opts.showOverlay,
    learning,
    signal,
    onProgress: setGifProgress,
  });
  const date = new Date().toISOString().slice(0, 10);
  downloadBlob(blob, `${t('rubiksCube.gif.filenamePrefix')}-${date}.gif`);
};
```

- [ ] **Step 4: Thread progress into the dialog**

Update the dialog's `Props` to optionally accept `progress: number`, and replace the dialog's local `progress` state usage with the prop. In `GifExportDialog.tsx`:

Change `Props` interface:

```typescript
interface Props {
  open: boolean;
  totalSteps: number;
  locale?: string;
  progress?: number; // 0..1, supplied by parent during onSubmit
  onSubmit: (opts: GifExportSubmit, signal: AbortSignal) => Promise<void>;
  onClose: () => void;
}
```

Replace the local `progress` state with `const progressPct = Math.round((progress ?? 0) * 100);` (delete the `setProgress(0)` calls and the local declaration), and use `progressPct` in the generating-button label.

In `RubiksCube.tsx` pass `progress={gifProgress}` to `<GifExportDialog>`.

- [ ] **Step 5: Run dev server and end-to-end smoke test**

```bash
npm run dev
```

Open `http://localhost:4321/projects/rubiks-cube`. Verify:

1. With no formula: "Export GIF" button is disabled.
2. Enter scramble `R U R' U' R' F R F'` and identical solution. Click play once to confirm playback works (regression check).
3. Click "Export GIF". Modal opens with range `0 → 8`, speed `1×`, overlay checked.
4. Drag the start handle to 2, drag end to 6. Caption updates to `2 → 6 (4 steps)`.
5. Pick speed `2×`, click "Generate GIF". Button shows progress.
6. After ~1-2 s, browser downloads `rubiks-cube-2026-05-06.gif`.
7. Open the GIF in an image viewer: confirm 4 moves animated, formula at top-left with current move highlighted orange.
8. Repeat with overlay unchecked — GIF should have no text.
9. While generating, click Cancel — verify the modal closes cleanly and no broken state.

- [ ] **Step 6: Run regression checks**

```bash
npm run build
npx vitest run
```

Expected: build passes, tests pass.

- [ ] **Step 7: Regenerate other locales**

```bash
npm run i18n:translate
```

Inspect `git diff src/i18n/` — only the new `gif` block should be added across the other 41 locales.

- [ ] **Step 8: Final commit**

```bash
git add src/components/RubiksCube.tsx src/components/cube/GifExportDialog.tsx src/i18n/
git commit -m "feat(cube): wire GIF export button + dialog into page"
```

---

## Done

The feature is complete when all tasks above are checked off and the manual verification in Step 5 of Task 7 passes.

## Things to Watch For

- **`gif.js` worker URL.** Vite/Astro's `?url` import suffix is the supported way to bundle a static asset path. If the runtime fetches `/...gif.worker.js` and 404s, fall back to copying `node_modules/gif.js/dist/gif.worker.js` to `public/` and using `/gif.worker.js` directly.
- **`preserveDrawingBuffer: true`** has a small performance cost. The cube scene is light enough that it shouldn't be noticeable, but watch for regressions on low-end devices.
- **The dialog's overlapping range inputs** can be tricky — if the right thumb gets stuck behind the left, set `pointer-events: auto` on the thumb pseudo-element with z-index. The simpler vertical-stacked layout (one slider for start, one for end on separate rows) is the fallback.
- **GIF file size.** A typical 5–10 step solution at 480×480 with 12 frames per move is ~500 KB – 1.5 MB. If users complain, lower `framesPerMove` to 8 or `quality` to a higher value (gif.js: lower number = better quality).
- **Aborting during gif.js encode.** The library's `abort()` fires the `abort` event but may not stop instantly. Don't block the UI on abort.
