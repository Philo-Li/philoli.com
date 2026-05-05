# 3D Rubik's Cube Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship an interactive 3D Rubik's Cube tool at `/projects/rubiks-cube` that accepts a scramble and a solution, plays the solution step-by-step with smooth animation, supports direct drag manipulation, and offers a learning mode that hides selected colors or faces.

**Architecture:** Astro page → React component (`client:only`) → Three.js scene managed in plain TS. Cube logic (state, parser, URL codec) is pure TS, fully unit-tested with Vitest. Animation is RAF-driven; pointer interaction is unified for mouse and touch.

**Tech Stack:** Astro 6 + React 19 (existing), Three.js (new, ~150KB gz), Vitest (new dev dep), CSS variables (existing site theme).

**Spec:** `docs/superpowers/specs/2026-05-06-rubiks-cube-design.md`

---

## File Structure

| Path | Role |
|---|---|
| `src/pages/projects/rubiks-cube.astro` | Astro route (default locale). |
| `src/pages/[locale]/projects/rubiks-cube.astro` | Localized routes (one per non-default locale). |
| `src/components/pages/RubiksCubePage.astro` | Page shell, SEO, locale plumbing. |
| `src/components/RubiksCube.tsx` | Top-level React component. State owner. |
| `src/styles/rubiks-cube.css` | Page styles using existing CSS vars. |
| `src/lib/cube/types.ts` | Shared types: `Move`, `Facelets`, `LearningMode`, etc. |
| `src/lib/cube/state.ts` | Facelet model, permutation tables, `applyMove`, `solvedState`. |
| `src/lib/cube/parser.ts` | WCA notation tokenizer + `parseAlgorithm`. |
| `src/lib/cube/scene.ts` | Three.js scene, cubie meshes, animation loop. |
| `src/lib/cube/interaction.ts` | Pointer drag → camera orbit or layer rotation. |
| `src/lib/cube/url.ts` | Encode/decode `{scramble, solution, learning, step}` ↔ URL hash. |
| `src/lib/cube/storage.ts` | Debounced localStorage adapter. |
| `src/lib/cube/__tests__/parser.test.ts` | Parser unit tests. |
| `src/lib/cube/__tests__/state.test.ts` | State engine + permutation tests. |
| `src/lib/cube/__tests__/url.test.ts` | URL codec round-trip tests. |
| `src/components/pages/ProjectsPage.astro` | Modified: add project card. |
| `src/i18n/en.json` | Modified: add `rubiksCube.*` keys. |
| `src/i18n/*.json` | Auto-translated by `npm run i18n:translate`. |
| `package.json` | Modified: add `three`, `@types/three`, `vitest`, `test` script. |

---

## Chunk 1: Setup + State Engine

### Task 1: Add dependencies and Vitest

**Files:**
- Modify: `C:/work/philoli.com/package.json`

- [ ] **Step 1.1: Install runtime + dev deps**

```bash
cd C:/work/philoli.com
npm install three
npm install -D @types/three vitest
```

Expected: deps appear in `package.json`, no install errors.

- [ ] **Step 1.2: Add `test` script to `package.json`**

In the `scripts` block, add:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 1.3: Verify Vitest runs (no tests yet, should report 0 files)**

```bash
npm test
```

Expected: "No test files found, exiting with code 0" — confirms Vitest is installed and discoverable.

- [ ] **Step 1.4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat(cube): add three.js and vitest dependencies"
```

---

### Task 2: Define shared types

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/types.ts`

- [ ] **Step 2.1: Write the file**

```ts
// src/lib/cube/types.ts

/** A facelet is one sticker on the cube; 54 of them total. Values are color
 * indices: 0=U(white), 1=R(red), 2=F(green), 3=D(yellow), 4=L(orange), 5=B(blue). */
export type Color = 0 | 1 | 2 | 3 | 4 | 5;
export type Facelets = Uint8Array; // length 54

/** Face name in URFDLB order (the standard WCA / Kociemba ordering). */
export const FACE_NAMES = ['U', 'R', 'F', 'D', 'L', 'B'] as const;
export type FaceName = (typeof FACE_NAMES)[number];

/** Indices into FACE_NAMES, kept synchronized with Color. */
export const FACE_INDEX: Record<FaceName, Color> = {
  U: 0, R: 1, F: 2, D: 3, L: 4, B: 5,
};

/** A move parsed from notation. `axis` is the rotation axis in cube-local
 * space; `layers` is which slices along that axis turn together; `turns`
 * is 1 (90° CW), 2 (180°), or 3 (90° CCW = 270° CW). */
export type Axis = 'x' | 'y' | 'z';
export type Layer = -1 | 0 | 1;

export interface Move {
  axis: Axis;
  layers: Layer[];
  turns: 1 | 2 | 3;
  /** Original token text, kept for display ("R'", "Rw2", etc.). */
  notation: string;
}

export interface ParseError {
  index: number;       // character offset in the source string
  token: string;       // the offending token
  message: string;
}

export interface LearningMode {
  enabled: boolean;
  hiddenColors: Set<Color>;
  hiddenFaces: Set<Color>;
}
```

- [ ] **Step 2.2: Commit**

```bash
git add src/lib/cube/types.ts
git commit -m "feat(cube): add shared types"
```

---

### Task 3: Solved cube state + face indexing helper (TDD)

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/state.ts`
- Create: `C:/work/philoli.com/src/lib/cube/__tests__/state.test.ts`

The facelet array uses URFDLB order, 9 stickers per face, row-major from
viewer's top-left:

```
indices 0..8   = U face   (white)
indices 9..17  = R face   (red)
indices 18..26 = F face   (green)
indices 27..35 = D face   (yellow)
indices 36..44 = L face   (orange)
indices 45..53 = B face   (blue)
```

- [ ] **Step 3.1: Write the failing test**

```ts
// src/lib/cube/__tests__/state.test.ts
import { describe, it, expect } from 'vitest';
import { solvedState, faceOf } from '../state';

describe('solvedState', () => {
  it('has 54 facelets, 9 of each color in URFDLB order', () => {
    const state = solvedState();
    expect(state.length).toBe(54);
    for (let face = 0; face < 6; face++) {
      for (let i = 0; i < 9; i++) {
        expect(state[face * 9 + i]).toBe(face);
      }
    }
  });
});

describe('faceOf', () => {
  it('returns the face index for any given facelet index', () => {
    expect(faceOf(0)).toBe(0);   // U
    expect(faceOf(8)).toBe(0);   // U
    expect(faceOf(9)).toBe(1);   // R
    expect(faceOf(53)).toBe(5);  // B
  });
});
```

- [ ] **Step 3.2: Run test to verify it fails**

```bash
npm test -- state
```

Expected: FAIL — `solvedState` and `faceOf` are not exported yet.

- [ ] **Step 3.3: Write minimal implementation**

```ts
// src/lib/cube/state.ts
import type { Color, Facelets } from './types';

export function solvedState(): Facelets {
  const state = new Uint8Array(54);
  for (let face = 0; face < 6; face++) {
    for (let i = 0; i < 9; i++) {
      state[face * 9 + i] = face as Color;
    }
  }
  return state;
}

export function faceOf(faceletIndex: number): Color {
  return Math.floor(faceletIndex / 9) as Color;
}
```

- [ ] **Step 3.4: Run test to verify it passes**

```bash
npm test -- state
```

Expected: PASS.

- [ ] **Step 3.5: Commit**

```bash
git add src/lib/cube/state.ts src/lib/cube/__tests__/state.test.ts
git commit -m "feat(cube): solved state and faceOf helper"
```

---

### Task 4: Permutation tables for the 6 face turns (TDD)

A face turn permutes 21 facelets: the 8 stickers on the turning face's
ring, plus 12 stickers on the four adjacent faces (3 per side). Each
table is a `Uint8Array(54)` where `table[i] = j` means "the sticker at
index `j` after the turn was at index `i` before".

We'll derive U, then R, F, D, L, B by analogy. **Tip during
implementation:** print a paper cube unfolded with indices labeled, or
draw it on paper, before typing the U table.

- [ ] **Step 4.1: Write the failing test**

```ts
// append to src/lib/cube/__tests__/state.test.ts
import { applyMove } from '../state';
import type { Move } from '../types';

const U: Move = { axis: 'y', layers: [1], turns: 1, notation: 'U' };
const U_PRIME: Move = { axis: 'y', layers: [1], turns: 3, notation: "U'" };
const U2: Move = { axis: 'y', layers: [1], turns: 2, notation: 'U2' };

describe('applyMove — U', () => {
  it('U turn rotates the U face clockwise (viewed from above)', () => {
    const state = solvedState();
    const after = applyMove(state, U);
    // U face center stays U
    expect(after[4]).toBe(0);
    // U face corners cycle: (0→2→8→6→0)
    expect(after[2]).toBe(state[0]);
    expect(after[8]).toBe(state[2]);
    expect(after[6]).toBe(state[8]);
    expect(after[0]).toBe(state[6]);
  });

  it('U cycles the top row of F → L → B → R → F', () => {
    const state = solvedState();
    const after = applyMove(state, U);
    // Top row of F (indices 18,19,20) was green (2); after U it's red (R, was at top of R: indices 9,10,11)
    expect(after[18]).toBe(state[9]);
    expect(after[19]).toBe(state[10]);
    expect(after[20]).toBe(state[11]);
  });

  it("U' is the inverse of U", () => {
    const state = solvedState();
    const scrambled = applyMove(state, U);
    const restored = applyMove(scrambled, U_PRIME);
    expect(Array.from(restored)).toEqual(Array.from(state));
  });

  it('U2 == U + U', () => {
    const state = solvedState();
    const a = applyMove(applyMove(state, U), U);
    const b = applyMove(state, U2);
    expect(Array.from(a)).toEqual(Array.from(b));
  });

  it('four U turns return to solved state', () => {
    let state = solvedState();
    for (let i = 0; i < 4; i++) state = applyMove(state, U);
    expect(Array.from(state)).toEqual(Array.from(solvedState()));
  });
});
```

- [ ] **Step 4.2: Run test to verify it fails**

```bash
npm test -- state
```

Expected: FAIL — `applyMove` not exported.

- [ ] **Step 4.3: Add the U-turn permutation table and `applyMove`**

```ts
// in src/lib/cube/state.ts, append:
import type { Move } from './types';

/** Permutation table for one CW quarter-turn of the U face.
 *  PERM_U[dst] = src — i.e., "the sticker that ends up at dst came from src". */
const PERM_U = (() => {
  const p = new Uint8Array(54);
  for (let i = 0; i < 54; i++) p[i] = i;
  // U face rotates CW: corners (0,2,8,6) and edges (1,5,7,3)
  // CW means dst = src rotated 90° CW: position 0 receives what was at position 6, etc.
  const cycle = (a: number, b: number, c: number, d: number) => {
    // a ← d, b ← a, c ← b, d ← c   (CW rotation of 4 positions)
    p[a] = d; p[b] = a; p[c] = b; p[d] = c;
  };
  cycle(0, 2, 8, 6);   // U corners
  cycle(1, 5, 7, 3);   // U edges
  // Side cycle: F-top → L-top → B-top → R-top → F-top
  // F top row = 18,19,20  L top row = 36,37,38  B top row = 45,46,47  R top row = 9,10,11
  cycle(18, 36, 45, 9);
  cycle(19, 37, 46, 10);
  cycle(20, 38, 47, 11);
  return p;
})();

/** Apply a permutation to a state, returning a new state. */
function permute(state: Facelets, perm: Uint8Array): Facelets {
  const out = new Uint8Array(54);
  for (let i = 0; i < 54; i++) out[i] = state[perm[i]];
  return out;
}

/** Apply N quarter turns of the same permutation. */
function permuteN(state: Facelets, perm: Uint8Array, n: number): Facelets {
  let s = state;
  for (let i = 0; i < n; i++) s = permute(s, perm);
  return s;
}

/** Pick the right permutation table for a move, then apply it `turns` times. */
export function applyMove(state: Facelets, move: Move): Facelets {
  const perm = pickPerm(move);
  return permuteN(state, perm, move.turns);
}

function pickPerm(move: Move): Uint8Array {
  // For now only U is implemented. Other moves added in Task 5.
  if (move.axis === 'y' && move.layers.length === 1 && move.layers[0] === 1) {
    return PERM_U;
  }
  throw new Error(`Move not yet implemented: ${move.notation}`);
}
```

- [ ] **Step 4.4: Run test to verify it passes**

```bash
npm test -- state
```

Expected: PASS for the U tests.

- [ ] **Step 4.5: Commit**

```bash
git add src/lib/cube/state.ts src/lib/cube/__tests__/state.test.ts
git commit -m "feat(cube): U-turn permutation and applyMove engine"
```

---

### Task 5: Add the other 5 face turns (TDD: test first, then table)

Repeat the Task 4 pattern for D, R, L, F, B. Each face turn permutes its
own 9 stickers (4-cycle of corners + 4-cycle of edges + center stays) and
cycles 3 stickers each on 4 adjacent faces.

- [ ] **Step 5.1: Write tests for all 5 remaining face turns**

For each of D, R, L, F, B, add tests asserting:
- Four turns return to solved state.
- Prime is the inverse.
- `X2 == X + X`.

(Pattern is identical to U's tests; structure as a `describe.each`.)

```ts
// in state.test.ts, replace the per-face tests with:
import type { Move as M } from '../types';

const Q = (axis: 'x'|'y'|'z', layer: -1|0|1, notation: string): M =>
  ({ axis, layers: [layer], turns: 1, notation });
const inv = (m: M): M => ({ ...m, turns: 3, notation: m.notation + "'" });
const dbl = (m: M): M => ({ ...m, turns: 2, notation: m.notation + '2' });

describe.each([
  ['U', Q('y',  1, 'U')],
  ['D', Q('y', -1, 'D')],
  ['R', Q('x',  1, 'R')],
  ['L', Q('x', -1, 'L')],
  ['F', Q('z',  1, 'F')],
  ['B', Q('z', -1, 'B')],
])('face turn %s', (_name, mv) => {
  it('four quarter turns = identity', () => {
    let s = solvedState();
    for (let i = 0; i < 4; i++) s = applyMove(s, mv);
    expect(Array.from(s)).toEqual(Array.from(solvedState()));
  });
  it('prime is inverse', () => {
    const s = applyMove(solvedState(), mv);
    const r = applyMove(s, inv(mv));
    expect(Array.from(r)).toEqual(Array.from(solvedState()));
  });
  it('double = quarter twice', () => {
    const a = applyMove(applyMove(solvedState(), mv), mv);
    const b = applyMove(solvedState(), dbl(mv));
    expect(Array.from(a)).toEqual(Array.from(b));
  });
});
```

- [ ] **Step 5.2: Run tests to confirm 5 failures**

```bash
npm test -- state
```

Expected: U passes, D/R/L/F/B fail (`Move not yet implemented`).

- [ ] **Step 5.3: Add permutation tables for D, R, L, F, B**

Use a small helper to keep cycles readable. Append to `state.ts`:

```ts
function makeTable(
  faceCorners: [number, number, number, number],
  faceEdges:   [number, number, number, number],
  side: [
    [number, number, number],   // first side, 3 stickers in order around the cycle
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ],
): Uint8Array {
  const p = new Uint8Array(54);
  for (let i = 0; i < 54; i++) p[i] = i;
  const cycle = (a: number, b: number, c: number, d: number) => {
    p[a] = d; p[b] = a; p[c] = b; p[d] = c;
  };
  cycle(...faceCorners);
  cycle(...faceEdges);
  for (let k = 0; k < 3; k++) {
    cycle(side[0][k], side[1][k], side[2][k], side[3][k]);
  }
  return p;
}

// Re-derive PERM_U using the helper (replaces the inline PERM_U definition):
const PERM_U_NEW = makeTable(
  [0, 2, 8, 6],
  [1, 5, 7, 3],
  [
    [18, 19, 20], // F top
    [36, 37, 38], // L top
    [45, 46, 47], // B top
    [ 9, 10, 11], // R top
  ],
);

// D: bottom face, CW viewed from BELOW. Side cycle goes F-bottom → R-bottom
// → B-bottom → L-bottom → F-bottom (opposite direction from U because
// "CW viewed from below" reverses).
const PERM_D = makeTable(
  [27, 29, 35, 33],
  [28, 32, 34, 30],
  [
    [24, 25, 26], // F bottom
    [15, 16, 17], // R bottom
    [51, 52, 53], // B bottom
    [42, 43, 44], // L bottom
  ],
);

// R: right face, CW viewed from the RIGHT. Side cycle: U-right → B-left
// (reversed because B is mirrored) → D-right → F-right → U-right.
const PERM_R = makeTable(
  [9, 11, 17, 15],
  [10, 14, 16, 12],
  [
    [ 2,  5,  8], // U right column (top-to-bottom)
    [51, 48, 45], // B left column (bottom-to-top, because B is viewed mirrored)
    [29, 32, 35], // D right column
    [20, 23, 26], // F right column
  ],
);

// L: left face, CW viewed from the LEFT.
const PERM_L = makeTable(
  [36, 38, 44, 42],
  [37, 41, 43, 39],
  [
    [18, 21, 24], // F left column
    [27, 30, 33], // D left column
    [53, 50, 47], // B right column (reversed)
    [ 0,  3,  6], // U left column
  ],
);

// F: front face, CW viewed from the FRONT.
const PERM_F = makeTable(
  [18, 20, 26, 24],
  [19, 23, 25, 21],
  [
    [ 6,  7,  8], // U bottom row (left-to-right)
    [ 9, 12, 15], // R left column (top-to-bottom)
    [29, 28, 27], // D top row (right-to-left)
    [44, 41, 38], // L right column (bottom-to-top)
  ],
);

// B: back face, CW viewed from the BACK.
const PERM_B = makeTable(
  [45, 47, 53, 51],
  [46, 50, 52, 48],
  [
    [ 2,  1,  0], // U top row (right-to-left)
    [36, 39, 42], // L left column (top-to-bottom)
    [33, 34, 35], // D bottom row (left-to-right)
    [17, 14, 11], // R right column (bottom-to-top)
  ],
);

// Update pickPerm to dispatch all six:
function pickPerm(move: Move): Uint8Array {
  if (move.layers.length !== 1) throw new Error(`Multi-layer moves not yet supported: ${move.notation}`);
  const layer = move.layers[0];
  const { axis } = move;
  if (axis === 'y' && layer ===  1) return PERM_U_NEW;
  if (axis === 'y' && layer === -1) return PERM_D;
  if (axis === 'x' && layer ===  1) return PERM_R;
  if (axis === 'x' && layer === -1) return PERM_L;
  if (axis === 'z' && layer ===  1) return PERM_F;
  if (axis === 'z' && layer === -1) return PERM_B;
  throw new Error(`Move not yet implemented: ${move.notation}`);
}
```

(Delete the original `PERM_U` constant — replaced by `PERM_U_NEW`.
Rename to `PERM_U` after deletion.)

- [ ] **Step 5.4: Run tests**

```bash
npm test -- state
```

Expected: ALL pass. If any cycle is wrong (an `X2 != XX` failure or `X X' != I`), the `side` cycle for that face has its column ordering reversed — flip the relevant `[a,b,c]` triple.

- [ ] **Step 5.5: Add the "sexy move sanity check" test**

```ts
it('classic sexy move R U R\' U\' applied 6 times returns to solved', () => {
  let s = solvedState();
  const seq: Move[] = [
    Q('x',  1, 'R'),
    Q('y',  1, 'U'),
    inv(Q('x',  1, 'R')),
    inv(Q('y',  1, 'U')),
  ];
  for (let i = 0; i < 6; i++) {
    for (const m of seq) s = applyMove(s, m);
  }
  expect(Array.from(s)).toEqual(Array.from(solvedState()));
});
```

This is a famous identity: `(R U R' U')⁶ = identity`. If this fails, our R or U is wrong.

```bash
npm test -- state
```

Expected: PASS.

- [ ] **Step 5.6: Commit**

```bash
git add src/lib/cube/state.ts src/lib/cube/__tests__/state.test.ts
git commit -m "feat(cube): all 6 face turn permutations + sexy-move sanity check"
```

---

### Task 6: Slice and middle-layer moves (M, E, S)

Slice moves rotate only the middle layer along an axis. Per WCA convention:
- `M` = middle layer between L and R, follows L direction (CW viewed from left).
- `E` = middle layer between U and D, follows D direction (CW viewed from below).
- `S` = middle layer between F and B, follows F direction (CW viewed from front).

- [ ] **Step 6.1: Write tests**

```ts
const M  = Q('x', 0, 'M');
const E_ = Q('y', 0, 'E');
const S  = Q('z', 0, 'S');

describe.each([['M', M], ['E', E_], ['S', S]])('slice %s', (_n, mv) => {
  it('four turns = identity', () => {
    let s = solvedState();
    for (let i = 0; i < 4; i++) s = applyMove(s, mv);
    expect(Array.from(s)).toEqual(Array.from(solvedState()));
  });
  it('does not move face centers of its parallel faces', () => {
    // M doesn't change L center (40) or R center (13). Only matters for parallel-axis faces.
    const s = applyMove(solvedState(), mv);
    if (mv === M)  { expect(s[40]).toBe(4); expect(s[13]).toBe(1); }
    if (mv === E_) { expect(s[ 4]).toBe(0); expect(s[31]).toBe(3); }
    if (mv === S)  { expect(s[22]).toBe(2); expect(s[49]).toBe(5); }
  });
});
```

- [ ] **Step 6.2: Run tests, expect failures**

```bash
npm test -- state
```

- [ ] **Step 6.3: Add slice permutations**

```ts
// M: middle vertical layer (between L and R). 12 stickers move (4 face
// centers along U/F/D/B + 8 edges in the column).
const PERM_M = makeTable(
  [-1,-1,-1,-1] as any, // no face corners — placeholder, see below
  [-1,-1,-1,-1] as any,
  [
    [ 1,  4,  7], // U middle column
    [49, 46, 52], // ...wait, need careful indexing
    [28, 31, 34], // D middle column
    [19, 22, 25], // F middle column
  ],
);
```

> ⚠️ The above is a placeholder — `makeTable` was designed for face turns
> and includes corner/edge cycles that don't apply to slices. **Refactor
> `makeTable`** to accept optional face cycles, OR write a new helper
> `makeSliceTable(side)` that does only the side cycle.

Refactor approach (cleaner):

```ts
function makeSliceTable(
  side: [
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ],
): Uint8Array {
  const p = new Uint8Array(54);
  for (let i = 0; i < 54; i++) p[i] = i;
  const cycle = (a: number, b: number, c: number, d: number) => {
    p[a] = d; p[b] = a; p[c] = b; p[d] = c;
  };
  for (let k = 0; k < 3; k++) {
    cycle(side[0][k], side[1][k], side[2][k], side[3][k]);
  }
  return p;
}

// M follows L (CW viewed from left): U-mid → F-mid → D-mid → B-mid (reversed) → U-mid
const PERM_M = makeSliceTable([
  [ 1,  4,  7], // U middle column (top-to-bottom)
  [19, 22, 25], // F middle column
  [28, 31, 34], // D middle column
  [52, 49, 46], // B middle column (reversed because B is mirror-viewed)
]);

// E follows D (CW viewed from below): F-mid → R-mid → B-mid → L-mid → F-mid
const PERM_E = makeSliceTable([
  [21, 22, 23], // F middle row
  [12, 13, 14], // R middle row
  [48, 49, 50], // B middle row
  [39, 40, 41], // L middle row
]);

// S follows F (CW viewed from front): U-mid-row → R-mid-col → D-mid-row(rev) → L-mid-col(rev)
const PERM_S = makeSliceTable([
  [ 3,  4,  5], // U middle row
  [10, 13, 16], // R middle column
  [32, 31, 30], // D middle row (reversed)
  [43, 40, 37], // L middle column (reversed)
]);
```

Update `pickPerm` to handle layer === 0:

```ts
if (axis === 'x' && layer === 0) return PERM_M;
if (axis === 'y' && layer === 0) return PERM_E;
if (axis === 'z' && layer === 0) return PERM_S;
```

- [ ] **Step 6.4: Run tests**

```bash
npm test -- state
```

Expected: PASS (if any "four turns ≠ identity", the side-cycle ordering is wrong for that slice — flip directions).

- [ ] **Step 6.5: Commit**

```bash
git add src/lib/cube/state.ts src/lib/cube/__tests__/state.test.ts
git commit -m "feat(cube): M/E/S slice permutations"
```

---

### Task 7: Wide moves and rotations (multi-layer)

Wide moves (`r`, `Rw`, `u`, `Uw`, etc.) rotate the outer layer + the
adjacent slice. Rotations (`x`, `y`, `z`) rotate all three layers (the
whole cube).

Implementation: `applyMove` already accepts `layers: Layer[]`. Update
`pickPerm` to compose permutations when `layers.length > 1`:

- [ ] **Step 7.1: Write tests**

```ts
// Wide R = R + M' (M turning the opposite way as R)
// More general: a wide-R move turns layers [0, 1] along x.
const Rw: Move = { axis: 'x', layers: [0, 1], turns: 1, notation: 'Rw' };
// Cube rotation x = R + M' + L' = layers [-1, 0, 1] along x
const X: Move = { axis: 'x', layers: [-1, 0, 1], turns: 1, notation: 'x' };

it('Rw == R + M\' (for one quarter turn)', () => {
  const a = applyMove(solvedState(), Rw);
  let b = applyMove(solvedState(), Q('x',  1, 'R'));
  b = applyMove(b, { axis: 'x', layers: [0], turns: 3, notation: "M'" });
  expect(Array.from(a)).toEqual(Array.from(b));
});

it('cube rotation x preserves the relative cube state (still solved after x)', () => {
  // Hardest test: after rotating the whole cube, every face is a single
  // color, but the face index → color mapping changes. We just check that
  // each face is still uniform.
  const s = applyMove(solvedState(), X);
  for (let f = 0; f < 6; f++) {
    const c = s[f * 9];
    for (let i = 1; i < 9; i++) expect(s[f * 9 + i]).toBe(c);
  }
});

it('x x x x = identity', () => {
  let s = solvedState();
  for (let i = 0; i < 4; i++) s = applyMove(s, X);
  expect(Array.from(s)).toEqual(Array.from(solvedState()));
});
```

- [ ] **Step 7.2: Run tests, expect failures**

- [ ] **Step 7.3: Compose multi-layer permutations**

In `state.ts`, update `pickPerm` and add a helper:

```ts
function singleLayerPerm(axis: Axis, layer: Layer): Uint8Array {
  if (axis === 'x' && layer ===  1) return PERM_R;
  if (axis === 'x' && layer ===  0) return PERM_M_INV; // see note below
  if (axis === 'x' && layer === -1) return PERM_L_INV; // see note below
  if (axis === 'y' && layer ===  1) return PERM_U;
  if (axis === 'y' && layer ===  0) return PERM_E_INV;
  if (axis === 'y' && layer === -1) return PERM_D_INV;
  if (axis === 'z' && layer ===  1) return PERM_F;
  if (axis === 'z' && layer ===  0) return PERM_S;
  if (axis === 'z' && layer === -1) return PERM_B_INV;
  throw new Error(`Bad layer: ${axis} ${layer}`);
}
```

> **Why `_INV`:** When a wide R move says "rotate layers [0, 1] along x",
> we want both the R slice (layer 1) and the M slice (layer 0) to turn the
> *same way as R*. But our `PERM_M` table represents M's *standard* WCA
> direction, which follows L (opposite to R). So when composing wide
> moves, M's contribution must be inverted. Same for E (follows D),
> and L/D/B (which when included in a rotation all need to follow the
> +axis direction, opposite to their face's natural CW direction).
>
> **Implementation:** create inverted versions of L/D/B/M/E permutation
> tables. To invert a permutation `p`: `q[p[i]] = i`. Add a helper:

```ts
function invertPerm(p: Uint8Array): Uint8Array {
  const q = new Uint8Array(54);
  for (let i = 0; i < 54; i++) q[p[i]] = i;
  return q;
}
const PERM_L_INV = invertPerm(PERM_L);
const PERM_D_INV = invertPerm(PERM_D);
const PERM_B_INV = invertPerm(PERM_B);
const PERM_M_INV = invertPerm(PERM_M);
const PERM_E_INV = invertPerm(PERM_E);
// PERM_S already follows +z (F direction), so no inversion needed.
```

Now compose:

```ts
function composePerms(...perms: Uint8Array[]): Uint8Array {
  // Result of applying perms[0], then perms[1], etc., to a state.
  // Equivalent to a single permutation: out[i] = state[ p[i] ]
  // where p = perms[0] ∘ perms[1] ∘ ... composed as "function composition" in
  // the sense that applying `out` once equals applying each input once in order.
  let p = new Uint8Array(54);
  for (let i = 0; i < 54; i++) p[i] = i;
  for (const next of perms) {
    const composed = new Uint8Array(54);
    for (let i = 0; i < 54; i++) composed[i] = p[next[i]];
    p = composed;
  }
  return p;
}

function pickPerm(move: Move): Uint8Array {
  const tables = move.layers.map(l => singleLayerPerm(move.axis, l));
  if (tables.length === 1) return tables[0];
  return composePerms(...tables);
}
```

- [ ] **Step 7.4: Run tests**

```bash
npm test -- state
```

Expected: PASS. If `x x x x ≠ identity`, one of the L_INV/D_INV/B_INV is wrong — re-check signs.

- [ ] **Step 7.5: Commit**

```bash
git add src/lib/cube/state.ts src/lib/cube/__tests__/state.test.ts
git commit -m "feat(cube): wide moves and cube rotations via permutation composition"
```

---

## Chunk 2: Parser, URL Codec, Storage

### Task 8: WCA notation parser (TDD)

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/parser.ts`
- Create: `C:/work/philoli.com/src/lib/cube/__tests__/parser.test.ts`

- [ ] **Step 8.1: Write the failing tests**

```ts
// src/lib/cube/__tests__/parser.test.ts
import { describe, it, expect } from 'vitest';
import { parseAlgorithm } from '../parser';

describe('parseAlgorithm', () => {
  it('parses a single face turn', () => {
    const { moves, errors } = parseAlgorithm('R');
    expect(errors).toEqual([]);
    expect(moves).toHaveLength(1);
    expect(moves[0]).toMatchObject({ axis: 'x', layers: [1], turns: 1, notation: 'R' });
  });

  it('parses primes and doubles', () => {
    const { moves } = parseAlgorithm("R' R2 R2'");
    expect(moves.map(m => m.turns)).toEqual([3, 2, 2]);
  });

  it('parses sexy move', () => {
    const { moves, errors } = parseAlgorithm("R U R' U'");
    expect(errors).toEqual([]);
    expect(moves).toHaveLength(4);
    expect(moves.map(m => m.notation)).toEqual(['R', 'U', "R'", "U'"]);
  });

  it('handles whitespace, commas, parens', () => {
    const { moves, errors } = parseAlgorithm("(R U R')\t,  U'");
    expect(errors).toEqual([]);
    expect(moves).toHaveLength(4);
  });

  it('parses lowercase and Xw wide moves equivalently', () => {
    const a = parseAlgorithm('r').moves[0];
    const b = parseAlgorithm('Rw').moves[0];
    expect(a.layers).toEqual([0, 1]);
    expect(b.layers).toEqual([0, 1]);
    expect(a.axis).toBe('x');
    expect(b.axis).toBe('x');
  });

  it('parses slice moves', () => {
    expect(parseAlgorithm('M').moves[0]).toMatchObject({ axis: 'x', layers: [0] });
    expect(parseAlgorithm('E').moves[0]).toMatchObject({ axis: 'y', layers: [0] });
    expect(parseAlgorithm('S').moves[0]).toMatchObject({ axis: 'z', layers: [0] });
  });

  it('parses cube rotations', () => {
    expect(parseAlgorithm('x').moves[0].layers).toEqual([-1, 0, 1]);
    expect(parseAlgorithm('y').moves[0].layers).toEqual([-1, 0, 1]);
    expect(parseAlgorithm('z').moves[0].layers).toEqual([-1, 0, 1]);
  });

  it('collects errors for invalid tokens but keeps valid ones', () => {
    const { moves, errors } = parseAlgorithm('R Q U');
    expect(moves.map(m => m.notation)).toEqual(['R', 'U']);
    expect(errors).toHaveLength(1);
    expect(errors[0].token).toBe('Q');
  });
});
```

- [ ] **Step 8.2: Run tests, expect failures**

- [ ] **Step 8.3: Implement the parser**

```ts
// src/lib/cube/parser.ts
import type { Axis, Layer, Move, ParseError } from './types';

interface Token {
  text: string;
  index: number;
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  // Match: an optional letter (face/wide/slice/rotation) plus optional w/' /2 modifiers.
  // We'll be loose and let the parser validate.
  const re = /([UDLRFBudlrfbMESxyz])(w?)([2'’]*)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    tokens.push({ text: m[0], index: m.index });
  }
  // Also catch leftover non-whitespace runs as error tokens
  // by replacing matched runs with spaces and finding what's left.
  let scrubbed = text;
  for (const t of tokens) {
    scrubbed =
      scrubbed.slice(0, t.index) +
      ' '.repeat(t.text.length) +
      scrubbed.slice(t.index + t.text.length);
  }
  // Strip allowed punctuation (parens, commas, dots, quotes)
  scrubbed = scrubbed.replace(/[(),.\s]/g, ' ');
  const errRe = /\S+/g;
  let em: RegExpExecArray | null;
  while ((em = errRe.exec(scrubbed)) !== null) {
    tokens.push({ text: em[0], index: em.index });
  }
  tokens.sort((a, b) => a.index - b.index);
  return tokens;
}

const SINGLE_AXIS: Record<string, Axis> = {
  U: 'y', D: 'y', E: 'y', y: 'y',
  R: 'x', L: 'x', M: 'x', x: 'x',
  F: 'z', B: 'z', S: 'z', z: 'z',
};

const SINGLE_LAYER: Record<string, Layer> = {
  U: 1, D: -1, E: 0,
  R: 1, L: -1, M: 0,
  F: 1, B: -1, S: 0,
};

const ROTATION_LETTERS = new Set(['x', 'y', 'z']);

function parseToken(tok: Token): { move?: Move; error?: ParseError } {
  const text = tok.text;
  // Normalize curly apostrophe and quotes
  const norm = text.replace(/[’`]/g, "'");
  const m = /^([UDLRFBudlrfbMESxyz])(w?)([2'\d]*)$/.exec(norm);
  if (!m) {
    return { error: { index: tok.index, token: text, message: 'Invalid token' } };
  }
  const letter = m[1];
  const wide = m[2] === 'w';
  const mods = m[3];

  // Rotation letters can't be wide
  if (ROTATION_LETTERS.has(letter) && wide) {
    return { error: { index: tok.index, token: text, message: `${letter} can't be a wide move` } };
  }
  // Slice letters can't be wide
  if (letter === 'M' || letter === 'E' || letter === 'S') {
    if (wide) return { error: { index: tok.index, token: text, message: `${letter} can't be a wide move` } };
  }

  let layers: Layer[];
  let axis: Axis;

  if (ROTATION_LETTERS.has(letter)) {
    axis = letter as Axis;
    layers = [-1, 0, 1];
  } else {
    // Lowercase face letter (r, u, etc.) implies wide.
    const isLowerFace = /^[udlrfb]$/.test(letter);
    const upper = letter.toUpperCase();
    axis = SINGLE_AXIS[upper];
    const baseLayer = SINGLE_LAYER[upper];
    if (wide || isLowerFace) {
      // Wide turn: outer layer + adjacent slice. For R/U/F that's [1, 0]; for L/D/B that's [-1, 0].
      layers = baseLayer === 1 ? [0, 1] : baseLayer === -1 ? [-1, 0] : [baseLayer];
    } else {
      layers = [baseLayer];
    }
  }

  // Decode modifiers: ' (prime) and 2 (double). Normalize "2'" === "2", "'2" === "2".
  let turns: 1 | 2 | 3 = 1;
  const hasPrime = mods.includes("'");
  const hasDouble = mods.includes('2');
  if (hasDouble) turns = 2;
  else if (hasPrime) turns = 3;

  return { move: { axis, layers, turns, notation: text } };
}

export function parseAlgorithm(text: string): { moves: Move[]; errors: ParseError[] } {
  const tokens = tokenize(text);
  const moves: Move[] = [];
  const errors: ParseError[] = [];
  for (const tok of tokens) {
    const { move, error } = parseToken(tok);
    if (move) moves.push(move);
    if (error) errors.push(error);
  }
  return { moves, errors };
}
```

- [ ] **Step 8.4: Run tests**

```bash
npm test -- parser
```

Expected: PASS. If wide-move layers test fails, double-check the
`baseLayer === 1 ? [0, 1] : ...` branch (lowercase face letters need
the same treatment as `Xw`).

- [ ] **Step 8.5: Add a parser-to-state integration test**

```ts
// in state.test.ts:
import { parseAlgorithm } from '../parser';

it('integration: scramble and reverse return to solved', () => {
  const scrambleStr = "R U R' U' R' F R2 U' R' U' R U R' F'";
  const { moves } = parseAlgorithm(scrambleStr);
  let s = solvedState();
  for (const m of moves) s = applyMove(s, m);
  // Now apply reversed scramble (each move inverted, list reversed)
  for (let i = moves.length - 1; i >= 0; i--) {
    const m = moves[i];
    const inverse: Move = {
      ...m,
      turns: m.turns === 1 ? 3 : m.turns === 3 ? 1 : 2,
    };
    s = applyMove(s, inverse);
  }
  expect(Array.from(s)).toEqual(Array.from(solvedState()));
});
```

```bash
npm test
```

Expected: PASS.

- [ ] **Step 8.6: Commit**

```bash
git add src/lib/cube/parser.ts src/lib/cube/__tests__/parser.test.ts src/lib/cube/__tests__/state.test.ts
git commit -m "feat(cube): WCA notation parser + integration test"
```

---

### Task 9: URL hash codec (TDD)

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/url.ts`
- Create: `C:/work/philoli.com/src/lib/cube/__tests__/url.test.ts`

URL format: `#s=<scramble>&p=<solution>&l=<base32-mask>&t=<step>`. All keys optional.

`l` is a 13-bit value: bits 0-5 = hidden colors mask, bits 6-11 = hidden faces mask, bit 12 = enabled. Encoded as a base-32 string (Crockford alphabet, no padding).

- [ ] **Step 9.1: Write tests**

```ts
// src/lib/cube/__tests__/url.test.ts
import { describe, it, expect } from 'vitest';
import { encodeShareState, decodeShareState, type ShareState } from '../url';

describe('share state codec', () => {
  it('round-trips full state', () => {
    const state: ShareState = {
      scramble: "R U R' U'",
      solution: "U R U' R'",
      learning: {
        enabled: true,
        hiddenColors: new Set([0, 3]),
        hiddenFaces: new Set([1]),
      },
      step: 2,
    };
    const hash = encodeShareState(state);
    const decoded = decodeShareState(hash);
    expect(decoded?.scramble).toBe(state.scramble);
    expect(decoded?.solution).toBe(state.solution);
    expect(decoded?.learning.enabled).toBe(true);
    expect([...decoded!.learning.hiddenColors].sort()).toEqual([0, 3]);
    expect([...decoded!.learning.hiddenFaces]).toEqual([1]);
    expect(decoded?.step).toBe(2);
  });

  it('omits empty fields', () => {
    const empty: ShareState = {
      scramble: '',
      solution: '',
      learning: { enabled: false, hiddenColors: new Set(), hiddenFaces: new Set() },
      step: 0,
    };
    expect(encodeShareState(empty)).toBe('');
  });

  it('decodes empty hash to null', () => {
    expect(decodeShareState('')).toBeNull();
    expect(decodeShareState('#')).toBeNull();
  });

  it('handles URL-encoded apostrophes', () => {
    const hash = encodeShareState({
      scramble: "R'",
      solution: '',
      learning: { enabled: false, hiddenColors: new Set(), hiddenFaces: new Set() },
      step: 0,
    });
    expect(hash).toContain('R%27');
    const decoded = decodeShareState(hash);
    expect(decoded?.scramble).toBe("R'");
  });
});
```

- [ ] **Step 9.2: Run tests, expect failures**

- [ ] **Step 9.3: Implement the codec**

```ts
// src/lib/cube/url.ts
import type { Color, LearningMode } from './types';

export interface ShareState {
  scramble: string;
  solution: string;
  learning: LearningMode;
  step: number;
}

const BASE32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // Crockford

function encodeBase32(n: number): string {
  if (n === 0) return '0';
  let s = '';
  while (n > 0) {
    s = BASE32[n & 31] + s;
    n = Math.floor(n / 32);
  }
  return s;
}

function decodeBase32(s: string): number {
  let n = 0;
  for (const c of s.toUpperCase()) {
    const i = BASE32.indexOf(c);
    if (i === -1) return NaN;
    n = n * 32 + i;
  }
  return n;
}

function packLearning(l: LearningMode): number {
  let mask = 0;
  for (const c of l.hiddenColors) mask |= 1 << c;
  for (const f of l.hiddenFaces) mask |= 1 << (f + 6);
  if (l.enabled) mask |= 1 << 12;
  return mask;
}

function unpackLearning(mask: number): LearningMode {
  const hiddenColors = new Set<Color>();
  const hiddenFaces = new Set<Color>();
  for (let i = 0; i < 6; i++) if (mask & (1 << i)) hiddenColors.add(i as Color);
  for (let i = 0; i < 6; i++) if (mask & (1 << (i + 6))) hiddenFaces.add(i as Color);
  return { enabled: (mask & (1 << 12)) !== 0, hiddenColors, hiddenFaces };
}

export function encodeShareState(state: ShareState): string {
  const parts: string[] = [];
  if (state.scramble) parts.push(`s=${encodeURIComponent(state.scramble)}`);
  if (state.solution) parts.push(`p=${encodeURIComponent(state.solution)}`);
  const lmask = packLearning(state.learning);
  if (lmask !== 0) parts.push(`l=${encodeBase32(lmask)}`);
  if (state.step !== 0) parts.push(`t=${state.step}`);
  return parts.length ? '#' + parts.join('&') : '';
}

export function decodeShareState(hash: string): ShareState | null {
  const stripped = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!stripped) return null;
  const params = new URLSearchParams(stripped);
  const scramble = params.get('s') ?? '';
  const solution = params.get('p') ?? '';
  const lmask = params.has('l') ? decodeBase32(params.get('l')!) : 0;
  const step = params.has('t') ? parseInt(params.get('t')!, 10) : 0;
  return {
    scramble,
    solution,
    learning: unpackLearning(Number.isFinite(lmask) ? lmask : 0),
    step: Number.isFinite(step) ? step : 0,
  };
}
```

- [ ] **Step 9.4: Run tests**

```bash
npm test -- url
```

Expected: PASS.

- [ ] **Step 9.5: Commit**

```bash
git add src/lib/cube/url.ts src/lib/cube/__tests__/url.test.ts
git commit -m "feat(cube): URL hash codec for share state"
```

---

### Task 10: localStorage adapter

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/storage.ts`

Single function: `saveShareState(state)` (debounced) and `loadShareState()`.

- [ ] **Step 10.1: Write the file**

```ts
// src/lib/cube/storage.ts
import type { ShareState } from './url';
import type { Color } from './types';

const KEY = 'philoli/rubiks-cube/v1';

interface StoredV1 {
  scramble: string;
  solution: string;
  learning: {
    enabled: boolean;
    hiddenColors: number[];
    hiddenFaces: number[];
  };
  step: number;
}

let debounceTimer: number | undefined;

export function saveShareState(state: ShareState): void {
  if (typeof window === 'undefined') return;
  if (debounceTimer !== undefined) window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    const payload: StoredV1 = {
      scramble: state.scramble,
      solution: state.solution,
      learning: {
        enabled: state.learning.enabled,
        hiddenColors: [...state.learning.hiddenColors],
        hiddenFaces: [...state.learning.hiddenFaces],
      },
      step: state.step,
    };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(payload));
    } catch {
      // Quota exceeded or storage unavailable — ignore silently.
    }
  }, 300);
}

export function loadShareState(): ShareState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredV1;
    return {
      scramble: parsed.scramble ?? '',
      solution: parsed.solution ?? '',
      learning: {
        enabled: !!parsed.learning?.enabled,
        hiddenColors: new Set((parsed.learning?.hiddenColors ?? []) as Color[]),
        hiddenFaces:  new Set((parsed.learning?.hiddenFaces  ?? []) as Color[]),
      },
      step: parsed.step ?? 0,
    };
  } catch {
    return null;
  }
}
```

- [ ] **Step 10.2: Commit**

```bash
git add src/lib/cube/storage.ts
git commit -m "feat(cube): debounced localStorage adapter"
```

---

## Chunk 3: Page Scaffold + Static 3D Scene

### Task 11: Astro routes + page wrapper

**Files:**
- Create: `C:/work/philoli.com/src/pages/projects/rubiks-cube.astro`
- Create: `C:/work/philoli.com/src/pages/[locale]/projects/rubiks-cube.astro`
- Create: `C:/work/philoli.com/src/components/pages/RubiksCubePage.astro`

- [ ] **Step 11.1: Default-locale route**

```astro
---
// src/pages/projects/rubiks-cube.astro
import RubiksCubePage from '../../components/pages/RubiksCubePage.astro';
---
<RubiksCubePage />
```

- [ ] **Step 11.2: Localized route**

```astro
---
// src/pages/[locale]/projects/rubiks-cube.astro
import RubiksCubePage from '../../../components/pages/RubiksCubePage.astro';
import { NON_DEFAULT_LOCALES } from '../../../i18n';

export async function getStaticPaths() {
  return NON_DEFAULT_LOCALES.map(locale => ({ params: { locale } }));
}
---
<RubiksCubePage />
```

- [ ] **Step 11.3: Page wrapper component**

```astro
---
// src/components/pages/RubiksCubePage.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import RubiksCube from '../RubiksCube.tsx';
import { DEFAULT_LOCALE, isLocale, useTranslations } from '../../i18n';

const locale = isLocale(Astro.currentLocale) ? Astro.currentLocale : DEFAULT_LOCALE;
const t = useTranslations(locale);
---

<BaseLayout
  title={t('rubiksCube.metadata.title')}
  description={t('rubiksCube.metadata.description')}
>
  <RubiksCube client:only="react" locale={locale} />
</BaseLayout>
```

- [ ] **Step 11.4: Commit (pages won't render yet — RubiksCube.tsx doesn't exist)**

```bash
git add src/pages/projects/rubiks-cube.astro src/pages/'[locale]'/projects/rubiks-cube.astro src/components/pages/RubiksCubePage.astro
git commit -m "feat(cube): Astro routes + page wrapper"
```

---

### Task 12: React component shell + minimum i18n keys

**Files:**
- Create: `C:/work/philoli.com/src/components/RubiksCube.tsx`
- Create: `C:/work/philoli.com/src/styles/rubiks-cube.css`
- Modify: `C:/work/philoli.com/src/i18n/en.json`

- [ ] **Step 12.1: Add minimum i18n keys to `en.json`**

In the existing `en.json`, add a new top-level section. Place after `ebookTranslator`:

```json
"rubiksCube": {
  "metadata": {
    "title": "3D Rubik's Cube — Philo Li",
    "description": "Interactive 3D Rubik's Cube. Set a scramble and a solution, play step by step, hide colors or faces for memorization drills."
  },
  "title": "3D Rubik's Cube",
  "intro": "Type a scramble and a solution. Step through the solve, drag to rotate the view, and use learning mode to drill algorithm cases.",
  "scramble": {
    "label": "Scramble",
    "placeholder": "R U R' U' R' F R2 U' R' U' R U R' F'",
    "apply": "Apply scramble"
  },
  "solution": {
    "label": "Solution",
    "placeholder": "y' R U' R' U R U' R' U R U R' F' R U R' U'",
    "parseError": "Unrecognized token: {token}"
  },
  "playback": {
    "play": "Play",
    "pause": "Pause",
    "prev": "Previous step",
    "next": "Next step",
    "first": "Jump to start",
    "last": "Jump to end",
    "speed": "Speed",
    "stepCounter": "{n} / {total}"
  },
  "learning": {
    "title": "Learning mode",
    "master": "Enable",
    "hideColors": "Hide colors",
    "hideFaces": "Hide faces",
    "faceLabel": {
      "U": "Up", "R": "Right", "F": "Front", "D": "Down", "L": "Left", "B": "Back"
    },
    "colorLabel": {
      "white": "White", "red": "Red", "green": "Green",
      "yellow": "Yellow", "orange": "Orange", "blue": "Blue"
    }
  },
  "share": {
    "copy": "Copy share link",
    "copied": "Copied!"
  },
  "reset": "Reset"
}
```

- [ ] **Step 12.2: Add the project to `metadata` section**

Also add to the existing `metadata` block in `en.json`:

```json
"rubiksCubeTitle": "3D Rubik's Cube — Philo Li",
"rubiksCubeDescription": "Interactive 3D Rubik's Cube..."
```

(Skip — we already added `rubiksCube.metadata.title` above.)

- [ ] **Step 12.3: Component shell with structure but no Three.js yet**

```tsx
// src/components/RubiksCube.tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '../i18n';
import { parseAlgorithm } from '../lib/cube/parser';
import { solvedState, applyMove } from '../lib/cube/state';
import type { Facelets, LearningMode } from '../lib/cube/types';
import '../styles/rubiks-cube.css';

interface Props {
  locale?: string;
}

export default function RubiksCube({ locale }: Props) {
  const t = useTranslations(locale);
  const [scramble, setScramble] = useState('');
  const [solution, setSolution] = useState('');
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <main className="rc">
      <header className="rc__header">
        <p className="rc__eyebrow">PROJECT</p>
        <h1 className="rc__title">{t('rubiksCube.title')}</h1>
        <p className="rc__intro">{t('rubiksCube.intro')}</p>
      </header>

      <section className="rc__canvas">
        <div ref={canvasRef} className="rc__canvas-mount" />
      </section>

      <section className="rc__controls">
        <label className="rc__field">
          <span>{t('rubiksCube.scramble.label')}</span>
          <textarea
            className="rc__input"
            rows={2}
            value={scramble}
            onChange={(e) => setScramble(e.target.value)}
            placeholder={t('rubiksCube.scramble.placeholder')}
            spellCheck={false}
          />
        </label>
        <label className="rc__field">
          <span>{t('rubiksCube.solution.label')}</span>
          <textarea
            className="rc__input"
            rows={2}
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder={t('rubiksCube.solution.placeholder')}
            spellCheck={false}
          />
        </label>
      </section>
    </main>
  );
}
```

- [ ] **Step 12.4: Minimal CSS**

```css
/* src/styles/rubiks-cube.css */
.rc {
  max-width: 980px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + var(--space-lg)) var(--space-md) var(--space-xl);
  color: var(--color-text);
}
.rc__header { margin-bottom: var(--space-lg); }
.rc__eyebrow {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-text-muted);
  margin-bottom: var(--space-xs);
}
.rc__title {
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: var(--space-sm);
  letter-spacing: -0.02em;
}
.rc__intro {
  font-size: 0.95rem;
  color: var(--color-text-subtle);
  max-width: 60ch;
  line-height: 1.55;
}

.rc__canvas {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  height: 520px;
  margin-bottom: var(--space-md);
  position: relative;
  touch-action: none;
}
.rc__canvas-mount {
  width: 100%;
  height: 100%;
}

.rc__controls {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}
.rc__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
.rc__field > span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-muted);
}
.rc__input {
  font-family: ui-monospace, "JetBrains Mono", "SFMono-Regular", monospace;
  font-size: 0.95rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: var(--space-sm);
  resize: vertical;
}
.rc__input:focus {
  outline: 1px solid var(--color-accent);
  outline-offset: -1px;
}

@media (max-width: 640px) {
  .rc__canvas { height: 380px; }
}
```

- [ ] **Step 12.5: Smoke test — does the page load?**

```bash
npm run dev
```

Visit `http://localhost:4321/projects/rubiks-cube`. Expected: title, intro, two textareas, an empty canvas area (no errors in console).

Stop the dev server.

- [ ] **Step 12.6: Commit**

```bash
git add src/components/RubiksCube.tsx src/styles/rubiks-cube.css src/i18n/en.json
git commit -m "feat(cube): page shell with inputs and canvas placeholder"
```

---

### Task 13: Three.js scene module — solved cube, no animation

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/scene.ts`
- Modify: `C:/work/philoli.com/src/components/RubiksCube.tsx`

The scene is managed imperatively. It exposes:

```ts
class CubeScene {
  constructor(mountEl: HTMLElement)
  setFacelets(state: Facelets): void  // bake colors into stickers
  dispose(): void
}
```

- [ ] **Step 13.1: Scene module**

```ts
// src/lib/cube/scene.ts
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import type { Facelets, Color } from './types';

const STICKER_COLORS: [number, number, number, number, number, number] = [
  0xf6f6f0, // U white
  0xd23a2c, // R red
  0x3aa756, // F green
  0xf4d04a, // D yellow
  0xf08537, // L orange
  0x3c6dde, // B blue
];

const HIDDEN_COLOR = 0x0a0a0a;

const CUBIE_SIZE = 1;
const CUBIE_GAP = 0.04;
const STEP = CUBIE_SIZE + CUBIE_GAP;
const STICKER_INSET = 0.06;
const STICKER_LIFT = 0.005;

export class CubeScene {
  private mount: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private cubeRoot: THREE.Group;
  /** 27 cubie groups, indexed by layer position (-1, 0, 1) packed as (x+1)*9 + (y+1)*3 + (z+1). */
  private cubies: THREE.Group[] = [];
  /** 54 sticker meshes in URFDLB facelet order, parallel to Facelets array. */
  private stickers: THREE.Mesh[] = [];
  private stickerMaterials: THREE.MeshStandardMaterial[];
  private hiddenMaterial: THREE.MeshStandardMaterial;
  private dirty = true;
  private resizeObserver: ResizeObserver;

  constructor(mountEl: HTMLElement) {
    this.mount = mountEl;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    this.camera.position.set(5, 4, 6);
    this.camera.lookAt(0, 0, 0);
    this.cubeRoot = new THREE.Group();
    this.scene.add(this.cubeRoot);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 0.7);
    key.position.set(5, 8, 6);
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.3);
    fill.position.set(-5, 2, -3);
    this.scene.add(fill);

    this.stickerMaterials = STICKER_COLORS.map(c => new THREE.MeshStandardMaterial({
      color: c,
      roughness: 0.65,
      metalness: 0,
    }));
    this.hiddenMaterial = new THREE.MeshStandardMaterial({
      color: HIDDEN_COLOR,
      roughness: 1,
      metalness: 0,
    });

    this.buildCube();
    this.mount.appendChild(this.renderer.domElement);
    this.handleResize();

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.mount);

    this.renderLoop();
  }

  private buildCube(): void {
    const cubieGeom = new RoundedBoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE, 4, 0.08);
    const cubieMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.85, metalness: 0 });
    const stickerGeom = new THREE.PlaneGeometry(CUBIE_SIZE - STICKER_INSET * 2, CUBIE_SIZE - STICKER_INSET * 2);

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const cubie = new THREE.Group();
          cubie.position.set(x * STEP, y * STEP, z * STEP);
          cubie.userData = { x, y, z };

          const body = new THREE.Mesh(cubieGeom, cubieMat);
          cubie.add(body);

          // Add stickers only on outer-facing sides.
          // Each sticker mesh is added to the scene later so we keep a flat
          // sticker list parallel to the URFDLB facelet array.
          this.cubies[(x + 1) * 9 + (y + 1) * 3 + (z + 1)] = cubie;
          this.cubeRoot.add(cubie);
        }
      }
    }

    // Now add stickers to the 54 outer faces, in URFDLB order.
    // Sticker geometry: a flat plane sitting on the cubie's face, oriented outward.
    // Mapping (face, row, col) → (x, y, z) of the cubie that owns this sticker:
    // (Conventions: row 0 is "top of face" when looking at it head-on; col 0 is "left of face".)
    const placeStickers = (
      faceIndex: 0|1|2|3|4|5,
      cubieAt: (row: number, col: number) => [number, number, number],
      orient: THREE.Quaternion,
      offset: THREE.Vector3,
    ) => {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const [cx, cy, cz] = cubieAt(row, col);
          const cubie = this.cubies[(cx + 1) * 9 + (cy + 1) * 3 + (cz + 1)];
          const sticker = new THREE.Mesh(stickerGeom, this.stickerMaterials[faceIndex]);
          sticker.quaternion.copy(orient);
          sticker.position.copy(offset);
          cubie.add(sticker);
          this.stickers[faceIndex * 9 + row * 3 + col] = sticker;
        }
      }
    };

    const half = STEP / 2 + STICKER_LIFT;

    // U face: y=+1, looking down at it; row 0 is at z=-1 (back), col 0 at x=-1 (left).
    placeStickers(0,
      (row, col) => [col - 1, 1, row - 1],
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2),
      new THREE.Vector3(0, half, 0),
    );
    // R face: x=+1, looking at it from +x; row 0 = top (y=+1), col 0 = front (z=+1).
    // When viewed head-on, "right" of the R face is at z=-1 (back). So col 2 = z=-1.
    placeStickers(1,
      (row, col) => [1, 1 - row, 1 - col],
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2),
      new THREE.Vector3(half, 0, 0),
    );
    // F face: z=+1, looking at it from +z; row 0 = top, col 0 = left.
    placeStickers(2,
      (row, col) => [col - 1, 1 - row, 1],
      new THREE.Quaternion(),
      new THREE.Vector3(0, 0, half),
    );
    // D face: y=-1, looking up at it from below; row 0 = front (z=+1), col 0 = left (x=-1).
    placeStickers(3,
      (row, col) => [col - 1, -1, 1 - row],
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
      new THREE.Vector3(0, -half, 0),
    );
    // L face: x=-1, looking from -x; row 0 = top, col 0 = back (z=-1).
    placeStickers(4,
      (row, col) => [-1, 1 - row, col - 1],
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2),
      new THREE.Vector3(-half, 0, 0),
    );
    // B face: z=-1, looking from -z; row 0 = top, col 0 = right-of-B (x=+1).
    placeStickers(5,
      (row, col) => [1 - col, 1 - row, -1],
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI),
      new THREE.Vector3(0, 0, -half),
    );

    this.markDirty();
  }

  /** Set sticker colors from a Facelets array. */
  public setFacelets(state: Facelets): void {
    for (let i = 0; i < 54; i++) {
      this.stickers[i].material = this.stickerMaterials[state[i] as Color];
    }
    this.markDirty();
  }

  private markDirty(): void {
    this.dirty = true;
  }

  private handleResize(): void {
    const { width, height } = this.mount.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.markDirty();
  }

  private renderLoop = (): void => {
    if (this.dirty) {
      this.renderer.render(this.scene, this.camera);
      this.dirty = false;
    }
    requestAnimationFrame(this.renderLoop);
  };

  public dispose(): void {
    this.resizeObserver.disconnect();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
```

> ⚠️ **Sticker orientation note:** The mappings in `placeStickers` may need
> tweaking once visually inspected. If a face shows colors in the wrong
> physical positions (e.g., the U-face row 0 appears at front instead of
> back when you look from above), swap `row`/`col` or flip a sign in that
> face's `cubieAt`. The unit tests in `state.test.ts` verify the *logical*
> facelet order is correct; this step verifies the *3D* mapping matches.

- [ ] **Step 13.2: Wire scene into the React component**

In `src/components/RubiksCube.tsx`, replace the `useEffect`-less component with:

```tsx
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '../i18n';
import { parseAlgorithm } from '../lib/cube/parser';
import { solvedState, applyMove } from '../lib/cube/state';
import { CubeScene } from '../lib/cube/scene';
import type { Facelets } from '../lib/cube/types';
import '../styles/rubiks-cube.css';

interface Props {
  locale?: string;
}

export default function RubiksCube({ locale }: Props) {
  const t = useTranslations(locale);
  const [scramble, setScramble] = useState('');
  const [solution, setSolution] = useState('');
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<CubeScene | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new CubeScene(canvasRef.current);
    scene.setFacelets(solvedState());
    sceneRef.current = scene;
    return () => { scene.dispose(); sceneRef.current = null; };
  }, []);

  // ... rest unchanged
}
```

- [ ] **Step 13.3: Smoke test**

```bash
npm run dev
```

Visit page. Expected: a solved 3x3 cube renders, three faces visible (U, F, R), correct colors. No console errors.

If colors look swapped on a face, fix `placeStickers` for that face per the orientation note in Step 13.1.

- [ ] **Step 13.4: Commit**

```bash
git add src/lib/cube/scene.ts src/components/RubiksCube.tsx
git commit -m "feat(cube): static 3D scene rendering a solved cube"
```

---

## Chunk 4: Animation + Playback

### Task 14: Animate a single move

**Files:**
- Modify: `C:/work/philoli.com/src/lib/cube/scene.ts`

Goal: `scene.animateMove(move, durationMs)` returns a Promise that resolves
when animation completes. During animation, the affected cubies are
reparented to a temporary group that rotates over time. On completion,
transforms are baked back to cubies and the facelet state is updated.

- [ ] **Step 14.1: Add `animateMove` method to `CubeScene`**

```ts
import type { Move } from './types';

private animating = false;

public async animateMove(move: Move, durationMs: number): Promise<void> {
  if (this.animating) {
    throw new Error('CubeScene.animateMove called while another animation is in progress');
  }
  this.animating = true;

  // 1. Determine which cubies move based on move.axis + move.layers.
  const moving: THREE.Group[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const coord = move.axis === 'x' ? x : move.axis === 'y' ? y : z;
        if (move.layers.includes(coord as -1 | 0 | 1)) {
          moving.push(this.cubies[(x + 1) * 9 + (y + 1) * 3 + (z + 1)]);
        }
      }
    }
  }

  // 2. Reparent moving cubies into a temporary pivot group.
  const pivot = new THREE.Group();
  this.cubeRoot.add(pivot);
  for (const c of moving) {
    pivot.attach(c); // keeps world transform
  }

  // 3. Tween rotation.
  const axis = move.axis === 'x' ? new THREE.Vector3(1, 0, 0)
            : move.axis === 'y' ? new THREE.Vector3(0, 1, 0)
            : new THREE.Vector3(0, 0, 1);
  // CW around +axis when viewed from +axis. For face turns this matches the
  // permutation table convention. For prime turns (turns=3), the angle is negative.
  const fullAngle =
    move.turns === 1 ? -Math.PI / 2 :
    move.turns === 2 ? -Math.PI :
                       Math.PI / 2;

  const start = performance.now();
  await new Promise<void>(resolve => {
    const tick = () => {
      const elapsed = performance.now() - start;
      const rawT = Math.min(1, elapsed / durationMs);
      const t = easeInOutQuad(rawT);
      pivot.setRotationFromAxisAngle(axis, fullAngle * t);
      this.markDirty();
      if (rawT < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });

  // 4. Bake transforms back into cubies, dispose pivot.
  for (const c of [...moving]) {
    this.cubeRoot.attach(c);
  }
  this.cubeRoot.remove(pivot);

  this.animating = false;
}

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
```

(Place `easeInOutQuad` outside the class.)

- [ ] **Step 14.2: Add a debug button to RubiksCube.tsx (temporary)**

In `src/components/RubiksCube.tsx`, add a temp button below the inputs:

```tsx
<button
  type="button"
  onClick={async () => {
    if (!sceneRef.current) return;
    await sceneRef.current.animateMove(
      { axis: 'x', layers: [1], turns: 1, notation: 'R' },
      350,
    );
  }}
>
  DEBUG: animate R
</button>
```

- [ ] **Step 14.3: Smoke test**

```bash
npm run dev
```

Click the button. Expected: the right layer rotates smoothly 90° clockwise, with no visual breakage. Click again — animates again. The cubies' visual positions should accumulate (the "R" stays at the right side; their internal stickers rotate).

If it doesn't smoothly animate, check `attach` vs `add` — `attach` preserves world space, `add` doesn't.

- [ ] **Step 14.4: Remove the debug button and commit**

```bash
# remove the DEBUG button from RubiksCube.tsx
git add src/lib/cube/scene.ts src/components/RubiksCube.tsx
git commit -m "feat(cube): single-move animation with axis-angle pivot"
```

---

### Task 15: Sequential move queue + applyImmediate (snap)

**Files:**
- Modify: `C:/work/philoli.com/src/lib/cube/scene.ts`

The scene needs two related operations:
- `animateMove(move, durationMs)` — animates over time. Already done.
- `applyImmediate(move)` — applies the move *visually* with no animation.
  Used for "apply scramble" (instant) and progress-bar scrubbing.

For `applyImmediate`, we just rotate cubies' transforms instantly — no
pivot group needed. The cubies' `position` and `quaternion` are updated
to their post-move values directly.

- [ ] **Step 15.1: Add `applyImmediate` method**

```ts
public applyImmediate(move: Move): void {
  if (this.animating) throw new Error('Cannot applyImmediate during animation');
  // Same body as animateMove, but with instant rotation and no tween.
  const moving: THREE.Group[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const coord = move.axis === 'x' ? x : move.axis === 'y' ? y : z;
        if (move.layers.includes(coord as -1 | 0 | 1)) {
          moving.push(this.cubies[(x + 1) * 9 + (y + 1) * 3 + (z + 1)]);
        }
      }
    }
  }
  const pivot = new THREE.Group();
  this.cubeRoot.add(pivot);
  for (const c of moving) pivot.attach(c);
  const axis = move.axis === 'x' ? new THREE.Vector3(1, 0, 0)
            : move.axis === 'y' ? new THREE.Vector3(0, 1, 0)
            : new THREE.Vector3(0, 0, 1);
  const angle =
    move.turns === 1 ? -Math.PI / 2 :
    move.turns === 2 ? -Math.PI :
                       Math.PI / 2;
  pivot.setRotationFromAxisAngle(axis, angle);
  for (const c of [...moving]) this.cubeRoot.attach(c);
  this.cubeRoot.remove(pivot);
  this.markDirty();
}

/** Reset all cubies to their canonical positions and apply the given facelet
 * state via setFacelets. Used to jump to an arbitrary step without animating. */
public reset(state: Facelets): void {
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const c = this.cubies[(x + 1) * 9 + (y + 1) * 3 + (z + 1)];
        c.position.set(x * STEP, y * STEP, z * STEP);
        c.quaternion.identity();
      }
    }
  }
  this.setFacelets(state);
}
```

- [ ] **Step 15.2: Add a queue helper to `RubiksCube.tsx`** (in-component, no new file)

```tsx
// helper inside RubiksCube
const animatingRef = useRef(false);

async function animateSequence(
  moves: Move[],
  speedMultiplier: number,
  shouldStop: () => boolean,
) {
  if (!sceneRef.current) return;
  for (const move of moves) {
    if (shouldStop()) return;
    while (animatingRef.current) await new Promise(r => requestAnimationFrame(r));
    animatingRef.current = true;
    await sceneRef.current.animateMove(move, 350 / speedMultiplier);
    animatingRef.current = false;
  }
}
```

- [ ] **Step 15.3: Commit**

```bash
git add src/lib/cube/scene.ts src/components/RubiksCube.tsx
git commit -m "feat(cube): applyImmediate + reset + queue helper"
```

---

### Task 16: Playback state machine + controls UI

**Files:**
- Modify: `C:/work/philoli.com/src/components/RubiksCube.tsx`
- Modify: `C:/work/philoli.com/src/styles/rubiks-cube.css`

The component owns:
- Parsed scramble moves and parsed solution moves.
- The "scrambled" facelet state (after applying scramble).
- Current step in the solution (0 = at scrambled state, N = after solution[N-1]).
- Play/pause flag, speed multiplier.

Derived: facelet state at current step (computed by applying solution[0..step-1] to scrambledState).

- [ ] **Step 16.1: Refactor component state**

```tsx
// inside RubiksCube
const [scramble, setScramble] = useState('');
const [solution, setSolution] = useState('');
const [step, setStep] = useState(0);
const [playing, setPlaying] = useState(false);
const [speed, setSpeed] = useState(1);

// Parse memoized
const scrambleMoves = useMemo(() => parseAlgorithm(scramble).moves, [scramble]);
const solutionParse = useMemo(() => parseAlgorithm(solution), [solution]);
const solutionMoves = solutionParse.moves;
const solutionErrors = solutionParse.errors;

// Compute scrambled state once
const scrambledState = useMemo(() => {
  let s = solvedState();
  for (const m of scrambleMoves) s = applyMove(s, m);
  return s;
}, [scrambleMoves]);

// Compute state at current step
const currentState = useMemo(() => {
  let s = scrambledState;
  for (let i = 0; i < step && i < solutionMoves.length; i++) {
    s = applyMove(s, solutionMoves[i]);
  }
  return s;
}, [scrambledState, solutionMoves, step]);

// Push currentState into the scene whenever it changes (and we aren't animating)
useEffect(() => {
  if (sceneRef.current && !animatingRef.current) {
    sceneRef.current.reset(currentState);
  }
}, [currentState]);
```

> Note: The playback animation will *not* go through the `currentState`
> effect — it triggers `animateMove` directly and bumps `step` after.
> The effect only fires when the user scrubs / resets / changes scramble.

- [ ] **Step 16.2: Step actions**

```tsx
async function stepNext() {
  if (step >= solutionMoves.length) return;
  if (animatingRef.current || !sceneRef.current) return;
  animatingRef.current = true;
  await sceneRef.current.animateMove(solutionMoves[step], 350 / speed);
  animatingRef.current = false;
  setStep(step + 1);
}

async function stepPrev() {
  if (step <= 0) return;
  if (animatingRef.current || !sceneRef.current) return;
  // Animate the inverse of the previous move.
  const m = solutionMoves[step - 1];
  const inverse: Move = {
    ...m,
    turns: m.turns === 1 ? 3 : m.turns === 3 ? 1 : 2,
  };
  animatingRef.current = true;
  await sceneRef.current.animateMove(inverse, 350 / speed);
  animatingRef.current = false;
  setStep(step - 1);
}

function jumpToStart() {
  if (animatingRef.current) return;
  setStep(0);
}
function jumpToEnd() {
  if (animatingRef.current) return;
  setStep(solutionMoves.length);
}

// Auto-play loop: tick once per move when `playing` is true
useEffect(() => {
  if (!playing) return;
  if (step >= solutionMoves.length) { setPlaying(false); return; }
  let cancelled = false;
  (async () => {
    while (!cancelled && step + 1 <= solutionMoves.length) {
      await stepNext();
      if (cancelled) break;
    }
    setPlaying(false);
  })();
  return () => { cancelled = true; };
  // intentionally only depend on `playing` — the inner loop reads latest step via closure refs
}, [playing]);
```

- [ ] **Step 16.3: Controls UI**

```tsx
<section className="rc__playback">
  <button onClick={jumpToStart} disabled={step === 0}>{'⏮'}</button>
  <button onClick={stepPrev} disabled={step === 0}>{'⏪'}</button>
  <button
    onClick={() => setPlaying(p => !p)}
    disabled={step >= solutionMoves.length && !playing}
  >
    {playing ? t('rubiksCube.playback.pause') : t('rubiksCube.playback.play')}
  </button>
  <button onClick={stepNext} disabled={step >= solutionMoves.length}>{'⏩'}</button>
  <button onClick={jumpToEnd} disabled={step >= solutionMoves.length}>{'⏭'}</button>
  <span className="rc__step-counter">
    {step} / {solutionMoves.length}
  </span>
  <label className="rc__speed">
    <span>{t('rubiksCube.playback.speed')}</span>
    <input
      type="range"
      min={0}
      max={4}
      step={1}
      value={[0.25, 0.5, 1, 2, 4].indexOf(speed)}
      onChange={(e) => setSpeed([0.25, 0.5, 1, 2, 4][parseInt(e.target.value, 10)])}
    />
    <span>{speed}×</span>
  </label>
</section>
```

> ⚠️ Use refs for `step`, `solutionMoves`, `speed` inside the auto-play
> closure if React's stale-closure issues bite. Easiest fix:

```tsx
const stepRef = useRef(step);
useEffect(() => { stepRef.current = step; }, [step]);
const speedRef = useRef(speed);
useEffect(() => { speedRef.current = speed; }, [speed]);
const solutionMovesRef = useRef(solutionMoves);
useEffect(() => { solutionMovesRef.current = solutionMoves; }, [solutionMoves]);

// then in stepNext: read solutionMovesRef.current[stepRef.current], etc.
```

Refactor `stepNext` / `stepPrev` to use these refs so they always see the
latest values without re-creating the function.

- [ ] **Step 16.4: CSS for playback**

```css
.rc__playback {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-md);
}
.rc__playback button {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.4rem 0.7rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  min-width: 2.5rem;
}
.rc__playback button:hover:not(:disabled) {
  border-color: var(--color-accent);
}
.rc__playback button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.rc__step-counter {
  font-family: ui-monospace, monospace;
  font-size: 0.9rem;
  color: var(--color-text-subtle);
  min-width: 4rem;
  text-align: center;
}
.rc__speed {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.rc__speed input[type="range"] { accent-color: var(--color-accent); }
```

- [ ] **Step 16.5: Smoke test**

```bash
npm run dev
```

Type a scramble like `R U R' U' R' F R2 U' R' U' R U R' F'` and a solution
that returns to solved (the reverse): `F R U' R' U R U R2 F' R U R U' R'`.
Press play. Expected: cube animates step by step, stops at end. Step
counter shows `0 / 14` → `14 / 14`. Prev/next buttons work. Speed slider
changes pace.

- [ ] **Step 16.6: Commit**

```bash
git add src/components/RubiksCube.tsx src/styles/rubiks-cube.css
git commit -m "feat(cube): step-by-step playback with speed control"
```

---

## Chunk 5: Interaction (Camera + Layer Drag)

### Task 17: Camera orbit drag

**Files:**
- Create: `C:/work/philoli.com/src/lib/cube/interaction.ts`
- Modify: `C:/work/philoli.com/src/lib/cube/scene.ts`

Pointer events on the canvas DOM. Track pointerdown → pointermove
deltas. Update camera azimuth/elevation. Touch events use pointer
events natively (browser delivers them as pointer events).

- [ ] **Step 17.1: Interaction module**

```ts
// src/lib/cube/interaction.ts
import * as THREE from 'three';
import type { Move } from './types';

interface InteractionDeps {
  domElement: HTMLElement;
  camera: THREE.PerspectiveCamera;
  raycaster: THREE.Raycaster;
  scene: THREE.Scene;
  /** When the user finishes a layer-drag gesture, commit this move. */
  onLayerMove: (move: Move) => void;
  markDirty: () => void;
  /** Whether the scene is currently animating (in which case ignore layer drags). */
  isAnimating: () => boolean;
}

export class CubeInteraction {
  private deps: InteractionDeps;
  private azimuth = Math.PI / 4;     // 45°
  private elevation = Math.atan(1 / Math.sqrt(2)); // ~30°, isometric
  private radius = 8;
  private dragMode: 'none' | 'pending' | 'orbit' | 'layer' = 'none';
  private startX = 0;
  private startY = 0;
  // For layer drags:
  private hitFaceNormal: THREE.Vector3 | null = null;
  private hitCubieCoord: { x: number; y: number; z: number } | null = null;

  constructor(deps: InteractionDeps) {
    this.deps = deps;
    this.applyCamera();
    const el = deps.domElement;
    el.addEventListener('pointerdown', this.onPointerDown);
    el.addEventListener('pointermove', this.onPointerMove);
    el.addEventListener('pointerup', this.onPointerUp);
    el.addEventListener('pointercancel', this.onPointerUp);
  }

  public dispose(): void {
    const el = this.deps.domElement;
    el.removeEventListener('pointerdown', this.onPointerDown);
    el.removeEventListener('pointermove', this.onPointerMove);
    el.removeEventListener('pointerup', this.onPointerUp);
    el.removeEventListener('pointercancel', this.onPointerUp);
  }

  private applyCamera(): void {
    const x = this.radius * Math.cos(this.elevation) * Math.cos(this.azimuth);
    const y = this.radius * Math.sin(this.elevation);
    const z = this.radius * Math.cos(this.elevation) * Math.sin(this.azimuth);
    this.deps.camera.position.set(x, y, z);
    this.deps.camera.lookAt(0, 0, 0);
    this.deps.markDirty();
  }

  private onPointerDown = (e: PointerEvent) => {
    this.deps.domElement.setPointerCapture(e.pointerId);
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.dragMode = 'pending';
    // Record what we hit (for potential layer drag).
    if (this.deps.isAnimating()) return;
    const hit = this.raycastSticker(e);
    if (hit) {
      this.hitFaceNormal = hit.normal;
      this.hitCubieCoord = hit.cubie;
    } else {
      this.hitFaceNormal = null;
      this.hitCubieCoord = null;
    }
  };

  private onPointerMove = (e: PointerEvent) => {
    if (this.dragMode === 'none') return;
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    if (this.dragMode === 'pending') {
      const dist = Math.hypot(dx, dy);
      if (dist < 8) return;
      // Decide: layer drag if we hit a sticker, else orbit.
      if (this.hitFaceNormal && this.hitCubieCoord) this.dragMode = 'layer';
      else this.dragMode = 'orbit';
    }
    if (this.dragMode === 'orbit') {
      this.azimuth -= dx * 0.008;
      this.elevation = Math.max(-1.4, Math.min(1.4, this.elevation + dy * 0.008));
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.applyCamera();
    }
    // Layer drag finalization is on pointerup, see Task 18.
  };

  private onPointerUp = (e: PointerEvent) => {
    this.deps.domElement.releasePointerCapture(e.pointerId);
    if (this.dragMode === 'layer') {
      this.commitLayerDrag(e);
    }
    this.dragMode = 'none';
    this.hitFaceNormal = null;
    this.hitCubieCoord = null;
  };

  private raycastSticker(_e: PointerEvent): {
    normal: THREE.Vector3;
    cubie: { x: number; y: number; z: number };
  } | null {
    // Implemented in Task 18.
    return null;
  }

  private commitLayerDrag(_e: PointerEvent): void {
    // Implemented in Task 18.
  }
}
```

- [ ] **Step 17.2: Wire CubeInteraction into CubeScene**

In `scene.ts`, expose what the interaction module needs and create it:

```ts
// inside CubeScene constructor, after building the cube:
import { CubeInteraction } from './interaction';

private interaction: CubeInteraction | null = null;
private raycaster = new THREE.Raycaster();
private onLayerMoveCallback: ((m: Move) => void) | null = null;

public setOnLayerMove(cb: (m: Move) => void): void {
  this.onLayerMoveCallback = cb;
}

// at end of constructor:
this.interaction = new CubeInteraction({
  domElement: this.renderer.domElement,
  camera: this.camera,
  raycaster: this.raycaster,
  scene: this.scene,
  onLayerMove: (m) => this.onLayerMoveCallback?.(m),
  markDirty: () => this.markDirty(),
  isAnimating: () => this.animating,
});

// in dispose():
this.interaction?.dispose();
```

- [ ] **Step 17.3: Smoke test**

```bash
npm run dev
```

Drag on the canvas — view should orbit (azimuth + elevation). Touch on
mobile should also orbit. Doesn't matter that layer drags don't yet work.

- [ ] **Step 17.4: Commit**

```bash
git add src/lib/cube/interaction.ts src/lib/cube/scene.ts
git commit -m "feat(cube): camera orbit on background drag"
```

---

### Task 18: Layer drag → which face + which axis → which move

**Files:**
- Modify: `C:/work/philoli.com/src/lib/cube/interaction.ts`
- Modify: `C:/work/philoli.com/src/components/RubiksCube.tsx`

Determining which layer to rotate from a sticker drag:

1. **Hit detection**: raycast finds the sticker mesh. We get the cubie's
   `(x, y, z)` (stored in `userData`) and the face normal (which sticker
   was hit, given by parent `quaternion` × local +Z).
2. **Drag direction in screen space**: from `(startX, startY)` to
   `(endX, endY)`.
3. **Project onto in-face axes**: the face has two perpendicular tangent
   directions in 3D. Project both into screen space. The drag's dominant
   component picks one tangent, sign picks direction.
4. **Move = rotate the layer perpendicular to the chosen tangent in that face**.
   Concretely: the chosen tangent is one of the cube's three world axes;
   the rotation axis is the *other* in-face axis.

This is fiddly. We'll keep the implementation pragmatic — a lookup table
keyed by `(faceNormal, dominantTangent)` returning the rotation axis +
which layer (the cubie's coord along that axis).

- [ ] **Step 18.1: Implement raycastSticker**

```ts
// in CubeInteraction
private raycastSticker(e: PointerEvent): {
  normal: THREE.Vector3;
  cubie: { x: number; y: number; z: number };
} | null {
  const rect = this.deps.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(
    ((e.clientX - rect.left) / rect.width) * 2 - 1,
    -((e.clientY - rect.top) / rect.height) * 2 + 1,
  );
  this.deps.raycaster.setFromCamera(ndc, this.deps.camera);
  // Only intersect sticker meshes — they have userData.isSticker = true (set in scene.ts).
  const hits = this.deps.raycaster.intersectObjects(this.deps.scene.children, true);
  for (const h of hits) {
    if (h.object.userData.isSticker) {
      const cubie = h.object.parent;
      if (!cubie || cubie.userData.x === undefined) continue;
      const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(h.object.getWorldQuaternion(new THREE.Quaternion()));
      return {
        normal,
        cubie: { x: cubie.userData.x, y: cubie.userData.y, z: cubie.userData.z },
      };
    }
  }
  return null;
}
```

In `scene.ts`, in `placeStickers`, mark each sticker:

```ts
sticker.userData.isSticker = true;
```

- [ ] **Step 18.2: Implement commitLayerDrag**

```ts
// in CubeInteraction
private commitLayerDrag(e: PointerEvent): void {
  if (!this.hitFaceNormal || !this.hitCubieCoord) return;
  const dx = e.clientX - this.startX;
  const dy = e.clientY - this.startY;
  if (Math.hypot(dx, dy) < 8) return;

  // Pick the face we hit (snap normal to nearest axis).
  const n = this.hitFaceNormal;
  const ax = Math.abs(n.x), ay = Math.abs(n.y), az = Math.abs(n.z);
  let faceAxis: 'x' | 'y' | 'z';
  let faceSign: 1 | -1;
  if (ax >= ay && ax >= az) { faceAxis = 'x'; faceSign = n.x > 0 ? 1 : -1; }
  else if (ay >= az)        { faceAxis = 'y'; faceSign = n.y > 0 ? 1 : -1; }
  else                      { faceAxis = 'z'; faceSign = n.z > 0 ? 1 : -1; }

  // Two tangents in world space. Project each onto screen, see which the drag points along.
  const tangents = this.faceTangents(faceAxis);
  const projDeltas = tangents.map(t => this.projectToScreen(t));
  let bestIdx = 0;
  let bestScore = -Infinity;
  for (let i = 0; i < projDeltas.length; i++) {
    const p = projDeltas[i];
    const score = p.x * dx + p.y * dy; // signed projection of drag onto this tangent
    if (Math.abs(score) > Math.abs(bestScore)) { bestIdx = i; bestScore = score; }
  }
  const tangentAxis = tangents[bestIdx].axis;
  const tangentSign = bestScore > 0 ? 1 : -1;

  // Rotation axis is the third axis (perpendicular to faceAxis and tangentAxis).
  const allAxes: ('x' | 'y' | 'z')[] = ['x', 'y', 'z'];
  const rotAxis = allAxes.find(a => a !== faceAxis && a !== tangentAxis)!;

  // Layer to rotate: the cubie's coord along rotAxis.
  const layer = this.hitCubieCoord[rotAxis] as -1 | 0 | 1;

  // Direction: positive tangent sign + face sign + cube right-hand rule determines turn direction.
  // Empirical formula: turns = 1 (CW around +rotAxis) if (faceSign * tangentSign) follows
  // the "right hand" curl from rotAxis. Easiest to derive by experimentation; placeholder:
  const turns: 1 | 3 = (faceSign * tangentSign === 1) ? 1 : 3;

  const move: Move = {
    axis: rotAxis,
    layers: [layer],
    turns,
    notation: '?',  // we don't reverse-render to canonical notation; UI doesn't need it
  };
  this.deps.onLayerMove(move);
}

private faceTangents(faceAxis: 'x' | 'y' | 'z'): { axis: 'x' | 'y' | 'z'; vec: THREE.Vector3 }[] {
  if (faceAxis === 'x') return [
    { axis: 'y', vec: new THREE.Vector3(0, 1, 0) },
    { axis: 'z', vec: new THREE.Vector3(0, 0, 1) },
  ];
  if (faceAxis === 'y') return [
    { axis: 'x', vec: new THREE.Vector3(1, 0, 0) },
    { axis: 'z', vec: new THREE.Vector3(0, 0, 1) },
  ];
  return [
    { axis: 'x', vec: new THREE.Vector3(1, 0, 0) },
    { axis: 'y', vec: new THREE.Vector3(0, 1, 0) },
  ];
}

private projectToScreen(world: { vec: THREE.Vector3 }): { x: number; y: number } {
  const v = world.vec.clone();
  v.project(this.deps.camera);
  // After project, v.x / v.y are in NDC (-1..1). Convert to screen direction:
  return { x: v.x, y: -v.y };
}
```

> ⚠️ **The `turns` formula is the trickiest part.** It depends on the
> handedness of the chosen face/tangent/axis triple. Expect to test all
> 12 layer rotations manually after first implementation — if any
> rotates the wrong way, flip the `turns: 1 / 3` based on that triple.
> A pragmatic approach: replace the placeholder formula with an explicit
> 6-face × 4-direction lookup table once you know the right answers.

- [ ] **Step 18.3: Wire layer-drag callback into RubiksCube.tsx**

```tsx
useEffect(() => {
  if (!sceneRef.current) return;
  sceneRef.current.setOnLayerMove(async (move) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    await sceneRef.current!.animateMove(move, 350 / speed);
    animatingRef.current = false;
    // Append this move to the solution textarea so it shows up in the move list?
    // For now, we don't append — direct-drag is freeform manipulation, not part of
    // the solution. (The user can copy-paste from console if needed.)
  });
}, [speed]);
```

- [ ] **Step 18.4: Smoke test, fix turn directions**

```bash
npm run dev
```

Click and drag on the U (white) face top-to-bottom (toward you).
Expected: U layer turns CW. If it turns CCW, the move handler picked
`turns: 3` when it should have picked `turns: 1`.

Repeat for each of the 6 faces and 2 perpendicular directions. Wherever
direction is wrong, fix the `turns` formula or replace with a lookup
table.

- [ ] **Step 18.5: Commit**

```bash
git add src/lib/cube/interaction.ts src/lib/cube/scene.ts src/components/RubiksCube.tsx
git commit -m "feat(cube): drag a sticker to rotate that layer"
```

---

## Chunk 6: Learning Mode + Persistence + Integration

### Task 19: Learning mode UI + sticker masking

**Files:**
- Modify: `C:/work/philoli.com/src/lib/cube/scene.ts`
- Modify: `C:/work/philoli.com/src/components/RubiksCube.tsx`
- Modify: `C:/work/philoli.com/src/styles/rubiks-cube.css`

- [ ] **Step 19.1: Extend `setFacelets` to accept a learning mode**

Replace the existing `setFacelets` signature:

```ts
public setFacelets(state: Facelets, learning?: LearningMode): void {
  for (let i = 0; i < 54; i++) {
    const color = state[i] as Color;
    const face = Math.floor(i / 9) as Color;
    const hidden = !!learning?.enabled &&
      (learning.hiddenColors.has(color) || learning.hiddenFaces.has(face));
    this.stickers[i].material = hidden ? this.hiddenMaterial : this.stickerMaterials[color];
  }
  this.markDirty();
}
```

Update callers in `scene.ts` (constructor, `reset`) to pass `undefined`
for learning if not provided.

- [ ] **Step 19.2: React state for learning mode**

```tsx
const [learning, setLearning] = useState<LearningMode>({
  enabled: false,
  hiddenColors: new Set(),
  hiddenFaces: new Set(),
});

// Re-push state into scene when learning changes
useEffect(() => {
  if (sceneRef.current && !animatingRef.current) {
    sceneRef.current.setFacelets(currentState, learning);
  }
}, [learning, currentState]);
```

(Update the existing `currentState` effect to call
`setFacelets(currentState, learning)` instead of `reset(currentState)` —
or pass learning into `reset` similarly.)

- [ ] **Step 19.3: Learning mode UI**

```tsx
const COLORS: { color: Color; key: string; swatch: string }[] = [
  { color: 0, key: 'white',  swatch: '#f6f6f0' },
  { color: 1, key: 'red',    swatch: '#d23a2c' },
  { color: 2, key: 'green',  swatch: '#3aa756' },
  { color: 3, key: 'yellow', swatch: '#f4d04a' },
  { color: 4, key: 'orange', swatch: '#f08537' },
  { color: 5, key: 'blue',   swatch: '#3c6dde' },
];
const FACES: { face: Color; key: 'U'|'R'|'F'|'D'|'L'|'B' }[] = [
  { face: 0, key: 'U' }, { face: 1, key: 'R' }, { face: 2, key: 'F' },
  { face: 3, key: 'D' }, { face: 4, key: 'L' }, { face: 5, key: 'B' },
];

function toggleHiddenColor(c: Color) {
  setLearning(prev => {
    const next = new Set(prev.hiddenColors);
    if (next.has(c)) next.delete(c); else next.add(c);
    return { ...prev, hiddenColors: next };
  });
}
function toggleHiddenFace(f: Color) {
  setLearning(prev => {
    const next = new Set(prev.hiddenFaces);
    if (next.has(f)) next.delete(f); else next.add(f);
    return { ...prev, hiddenFaces: next };
  });
}
```

```tsx
<section className="rc__learning">
  <header className="rc__learning-header">
    <h2>{t('rubiksCube.learning.title')}</h2>
    <label className="rc__toggle">
      <input
        type="checkbox"
        checked={learning.enabled}
        onChange={(e) => setLearning(p => ({ ...p, enabled: e.target.checked }))}
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
        onClick={() => toggleHiddenColor(color)}
        aria-pressed={learning.hiddenColors.has(color)}
        className="rc__swatch"
        style={{ background: swatch }}
        aria-label={t(`rubiksCube.learning.colorLabel.${key}`)}
        title={t(`rubiksCube.learning.colorLabel.${key}`)}
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
        onClick={() => toggleHiddenFace(face)}
        aria-pressed={learning.hiddenFaces.has(face)}
        className="rc__face-btn"
      >
        {key}
      </button>
    ))}
  </div>
</section>
```

- [ ] **Step 19.4: CSS**

```css
.rc__learning {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: var(--space-md);
  margin-bottom: var(--space-md);
}
.rc__learning-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-sm);
}
.rc__learning-header h2 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: var(--color-heading);
}
.rc__toggle {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  font-size: 0.85rem;
}
.rc__learning-row {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
  flex-wrap: wrap;
}
.rc__learning-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-text-muted);
  margin-right: var(--space-xs);
  min-width: 7ch;
}
.rc__swatch, .rc__face-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  font-family: ui-monospace, monospace;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.rc__swatch[aria-pressed="true"] {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
.rc__face-btn {
  background: var(--color-surface);
  color: var(--color-text);
}
.rc__face-btn[aria-pressed="true"] {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}
```

- [ ] **Step 19.5: Smoke test**

Toggle master switch — visible cube doesn't change until toggled colors/faces.
Toggle "white" hidden — all white stickers go matte black. Toggle "U face"
hidden — all 9 U-position stickers go matte black (regardless of color).

- [ ] **Step 19.6: Commit**

```bash
git add src/lib/cube/scene.ts src/components/RubiksCube.tsx src/styles/rubiks-cube.css
git commit -m "feat(cube): learning mode with color and face masking"
```

---

### Task 20: URL hash + localStorage sync

**Files:**
- Modify: `C:/work/philoli.com/src/components/RubiksCube.tsx`

- [ ] **Step 20.1: Read on mount**

```tsx
import { encodeShareState, decodeShareState, type ShareState } from '../lib/cube/url';
import { saveShareState, loadShareState } from '../lib/cube/storage';

useEffect(() => {
  // Priority: URL hash > localStorage > defaults
  const fromHash = decodeShareState(window.location.hash);
  const initial = fromHash ?? loadShareState();
  if (initial) {
    setScramble(initial.scramble);
    setSolution(initial.solution);
    setLearning(initial.learning);
    setStep(initial.step);
  }
}, []);
```

- [ ] **Step 20.2: Write on state change**

```tsx
useEffect(() => {
  const state: ShareState = { scramble, solution, learning, step };
  saveShareState(state);
}, [scramble, solution, learning, step]);
```

- [ ] **Step 20.3: Share button**

```tsx
const [copied, setCopied] = useState(false);

async function copyShareLink() {
  const state: ShareState = { scramble, solution, learning, step };
  const hash = encodeShareState(state);
  const url = `${window.location.origin}${window.location.pathname}${hash}`;
  await navigator.clipboard.writeText(url);
  setCopied(true);
  window.setTimeout(() => setCopied(false), 1500);
}

// In JSX, add to the playback section or its own row:
<button type="button" onClick={copyShareLink}>
  {copied ? t('rubiksCube.share.copied') : t('rubiksCube.share.copy')}
</button>
```

- [ ] **Step 20.4: Smoke test**

Type a scramble + solution, toggle learning mode, copy share link.
Paste the URL into a new tab. Expected: same scramble/solution/learning
load instantly. Verify localStorage by clearing the hash and refreshing
the original tab.

- [ ] **Step 20.5: Commit**

```bash
git add src/components/RubiksCube.tsx
git commit -m "feat(cube): URL hash + localStorage state sync, share button"
```

---

### Task 21: Add project card and translate i18n

**Files:**
- Modify: `C:/work/philoli.com/src/components/pages/ProjectsPage.astro`
- Modify: `C:/work/philoli.com/src/i18n/en.json`

- [ ] **Step 21.1: Add project description keys**

In `en.json`, find `projectsPage.items` and add:

```json
"rubiksCube": {
  "name": "3D Rubik's Cube",
  "description": "Step through scrambles and solutions on an interactive 3D cube. Learning mode hides colors and faces for algorithm drills.",
  "cta": "Open the cube →"
}
```

- [ ] **Step 21.2: Add card to ProjectsPage.astro**

In `src/components/pages/ProjectsPage.astro`, append to the `projects` array:

```astro
{
  name: t('projectsPage.items.rubiksCube.name'),
  description: t('projectsPage.items.rubiksCube.description'),
  url: localizedPath('/projects/rubiks-cube', locale),
  cta: t('projectsPage.items.rubiksCube.cta'),
},
```

- [ ] **Step 21.3: Run i18n translate script**

```bash
npm run i18n:translate
```

Expected: all 41 locale JSONs get the `rubiksCube.*` keys translated.

- [ ] **Step 21.4: Smoke test**

```bash
npm run dev
```

- Visit `/projects` — see 4 cards including Rubik's Cube. Click it.
- Visit `/zh/projects/rubiks-cube` — title and intro are in Chinese, WCA notation in placeholder is unchanged.

- [ ] **Step 21.5: Commit**

```bash
git add src/components/pages/ProjectsPage.astro src/i18n/
git commit -m "feat(cube): add project card and translate i18n keys"
```

---

### Task 22: Final polish + manual QA

**Files:**
- Various, only as bugs surface.

- [ ] **Step 22.1: Build check**

```bash
npm run build
```

Expected: no errors, no missing types. Astro generates static pages for the default locale + each non-default locale's `/projects/rubiks-cube`.

- [ ] **Step 22.2: Manual checklist (run through in dev)**

- [ ] Page loads on `/projects/rubiks-cube` and `/zh/projects/rubiks-cube`
- [ ] Solved cube renders with correct sticker colors (W on top, G in front, R on right)
- [ ] Drag background → camera orbits smoothly, mobile touch works
- [ ] Drag a sticker → that layer rotates the right direction (test 6 faces × 2 directions = 12 cases)
- [ ] Type a scramble, click "Apply scramble" → cube snaps to scrambled state
- [ ] Type a solution, press Play → animates step by step
- [ ] Speed slider changes pace
- [ ] Prev/Next/First/Last all work, step counter is correct
- [ ] Toggle learning mode master → no visual change until colors/faces toggled
- [ ] Toggle a hidden color → all stickers of that color go matte black
- [ ] Toggle a hidden face → all 9 face-position stickers go matte black
- [ ] Copy share link → URL contains `#s=…&p=…&l=…`. Paste in incognito → same state loads
- [ ] Refresh page (no hash) → localStorage restores last session
- [ ] Mobile (Chrome DevTools device mode): canvas takes 380px, controls stack vertically, pinch-to-zoom doesn't break the cube

- [ ] **Step 22.3: Fix any issues, commit each fix separately**

```bash
git commit -m "fix(cube): <specific issue>"
```

- [ ] **Step 22.4: Final commit and PR**

If on a feature branch, push and open a PR. If on main, the work is done — no PR needed.

```bash
git status                    # should be clean
git log --oneline -20         # review commit history
```

---

## Notes for the Implementer

- **TDD discipline:** Every Chunk 1–2 task follows red → green → refactor.
  Don't skip the failing-test step; it verifies the test actually tests
  something.
- **Three.js debugging:** When something looks wrong in the 3D view, the
  fastest debugging tool is `console.log(facelets)` to verify the
  *logical* state is right. If logical state is right but visual is wrong,
  the bug is in `placeStickers` or `animateMove` — not in `state.ts`.
- **Don't over-engineer the parser:** This is a personal tool, not an
  industrial product. If a user types something weird and gets an error,
  that's fine. Don't add a "smart auto-correct" mode.
- **Performance budget:** the cube has 27 cubies + 54 stickers = ~80
  meshes. Even on low-end mobile, this renders at 60fps with the dirty
  flag pattern. If you ever hit a perf issue, the first fix is to reduce
  `RoundedBoxGeometry` segment count.
- **Test pyramid:** Pure logic (state, parser, URL codec) is unit tested.
  3D rendering and interaction are manually verified via the dev server.
  This is appropriate for a single-person tool — automating Three.js
  visual tests would cost more than they save.

---

**Plan complete and saved to `docs/superpowers/plans/2026-05-06-rubiks-cube.md`.** Ready to execute?
