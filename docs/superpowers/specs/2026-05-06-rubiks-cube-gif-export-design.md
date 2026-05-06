# Rubik's Cube — GIF Export Design

**Date:** 2026-05-06
**Status:** Approved
**Component:** `RubiksCube` page (`src/components/RubiksCube.tsx`)

## Goal

Let users export an animated GIF of any sub-range of the current solution sequence, optionally with the formula text overlaid on the canvas. Output is a downloadable `.gif` suitable for sharing in chat, blog posts, or tutorials.

## User Flow

1. User has entered a scramble and a solution; the playback bar shows `step / totalSteps`.
2. User clicks **Export GIF** in the share row (next to "Copy share link"). Button is disabled when `totalSteps === 0`.
3. A modal opens with:
   - **Range** — dual-handle slider over `[0, totalSteps]`, default full range. Caption: `从第 X 步到第 Y 步（共 N 步）`.
   - **Speed** — segmented control: `0.25× / 0.5× / 1× / 2× / 4×`, default `1×`.
   - **Show steps overlay** — checkbox `☑ 在画布上显示步骤`, default checked.
   - Buttons: **取消** / **生成 GIF**.
4. On Generate, the primary button becomes a progress bar (`生成中… 47%`).
5. When done, the browser downloads `rubiks-cube-YYYY-MM-DD.gif` and the modal closes.
6. Cancel during generation aborts the worker and closes the modal cleanly.

## Visual Output

- **Camera:** WYSIWYG — uses the canvas's current camera state (user's pan/rotate is preserved).
- **Background:** the canvas's existing surface color (no transparency).
- **Resolution:** the canvas's current device-pixel-corrected size (typically 480–720 px square depending on viewport).
- **FPS:** ~30 fps; each move samples ~12 frames spread across its animation arc.
- **Loop:** infinite (gif.js `repeat: 0`, the default).

### Step Overlay (when checked)

- **Position:** top-left of the canvas, with a small inset margin.
- **Content:** the entire formula tokenized into moves (e.g., `R U R' U' R' F R F'`), space-separated, monospace.
- **Highlight:** the move corresponding to the frame's logical step is drawn in the brand orange (`var(--color-accent)`); all other tokens are black.
- **Wrapping:** if the line would exceed the canvas width minus margin, wrap onto subsequent lines; the highlighted move tracks across lines correctly.
- **No background box** — pure text. Readability relies on the canvas's pale surface color.

## Technical Approach

### Library

- `gif.js` (MIT) — encodes via Web Worker to avoid blocking the main thread.
- Worker file (`gif.worker.js`) shipped from `node_modules` and resolved via `?worker&url` (Vite/Astro pattern) so it bundles correctly.

### Rendering

The current scene's `animateMove(move, durationMs)` is RAF-driven and runs in real time. For export we need deterministic, faster-than-realtime frame production. Two changes:

1. **`scene.ts` — expose a step-render API.** Add a method like `renderStillFrame(state, partialMove?, progress?)` that paints the cube at a given logical state with an optional in-progress rotation, then returns/exposes the underlying canvas. No animation loop, no awaiting.
2. **`gif-export.ts` (new).** Orchestrates the capture:
   - For each move in the selected range, sample N frames (`N = round(BASE_STEP_MS / speed * fps / 1000)`, clamped to a sensible range like 4–24).
   - For each frame: call `renderStillFrame`, copy the WebGL canvas onto a 2D `OffscreenCanvas` (or regular canvas), draw the overlay text using `measureText` to position each token, then `gif.addFrame(ctx, { delay })`.
   - When all moves are queued, `gif.render()`; report `progress` events to the modal; on `finished`, trigger download via a `Blob` URL.

### Overlay Composition

Per frame:

```
1. ctx.drawImage(threeCanvas, 0, 0)
2. for token in solutionTokens:
     measureText(token + " ")
     advance x; if x + width > canvasW - margin → wrap
     fillStyle = (tokenIndex === currentStep) ? accent : black
     fillText(token, x, y)
```

Tokens come from the parsed `solutionMoves` re-stringified (so the GIF formula display is always normalized, regardless of user whitespace).

### Cancellation

`AbortController`-based: `cancel()` aborts both the frame loop and the gif.js worker (`gif.abort()`).

## File Changes

| File | Change |
|---|---|
| `package.json` | add `gif.js` dependency |
| `src/lib/cube/scene.ts` | expose still-frame render API (no behavior change for live playback) |
| `src/lib/cube/gif-export.ts` | **new** — frame capture, overlay drawing, gif.js orchestration |
| `src/components/RubiksCube.tsx` | export button + modal state + wire-up |
| `src/components/cube/GifExportDialog.tsx` | **new** — modal component (range slider, speed select, checkbox, progress) |
| `src/styles/rubiks-cube.css` | modal styles |
| `src/i18n/*` | new keys: `rubiksCube.gif.*` (button, dialog labels, progress, errors) |

Splitting the dialog into its own component keeps `RubiksCube.tsx` from growing further; the dialog has self-contained local state and a single `onGenerate(opts)` callback.

## Failure Modes

- **No solution / `totalSteps === 0`** → export button disabled.
- **gif.js worker fails to load** → modal shows error, "重试" button.
- **WebGL context lost mid-export** → abort, surface error in modal.
- **User clicks Cancel mid-generation** → abort worker, free frame buffers, close modal.
- **Very long range (>200 steps)** → still works but generation may take many seconds; progress bar is the UX answer, no hard cap initially.

## Out of Scope (Explicit YAGNI)

- Custom output size selector (uses canvas size).
- Loop-once / play-once option (GIF default infinite loop is what users want).
- Preview-before-download (download immediately on completion).
- WebP / MP4 output formats.
- Server-side encoding.
- Camera angle override (always WYSIWYG).
