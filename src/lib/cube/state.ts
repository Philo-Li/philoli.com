import type { Axis, Color, Facelets, Layer, Move } from './types';

/** A solved cube state: 9 stickers of each color, in URFDLB order.
 *
 *  Indexing: face f occupies indices [f*9 .. f*9+8].
 *  Within a face, indices 0..8 follow the Kociemba unfold convention
 *  (row-major, top-to-bottom, left-to-right when the face is laid flat
 *  in the standard cross-shaped unfold around the F face).
 */
export function solvedState(): Facelets {
  const state = new Uint8Array(54);
  for (let face = 0; face < 6; face++) {
    for (let i = 0; i < 9; i++) {
      state[face * 9 + i] = face as Color;
    }
  }
  return state;
}

/** Return the face index (0..5) of a given facelet index (0..53). */
export function faceOf(faceletIndex: number): Color {
  return Math.floor(faceletIndex / 9) as Color;
}

// ---------------------------------------------------------------------------
// Permutation tables
// ---------------------------------------------------------------------------
//
// `p[dst] = src` means: after applying the permutation, the sticker at
// position `dst` carries the value that was at position `src` before.
// State transition: `out[i] = state[p[i]]`.
//
// `cycle(a, b, c, d)` sets up a 4-cycle: sticker FROM a → b → c → d → a.
// Equivalently: p[b]=a, p[c]=b, p[d]=c, p[a]=d.

function cycle4(p: Uint8Array, a: number, b: number, c: number, d: number): void {
  p[a] = d;
  p[b] = a;
  p[c] = b;
  p[d] = c;
}

function identityPerm(): Uint8Array {
  const p = new Uint8Array(54);
  for (let i = 0; i < 54; i++) p[i] = i;
  return p;
}

function makeFaceTable(
  faceCorners: [number, number, number, number],
  faceEdges:   [number, number, number, number],
  side: [
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ],
): Uint8Array {
  const p = identityPerm();
  cycle4(p, ...faceCorners);
  cycle4(p, ...faceEdges);
  for (let k = 0; k < 3; k++) {
    cycle4(p, side[0][k], side[1][k], side[2][k], side[3][k]);
  }
  return p;
}

function makeSliceTable(
  side: [
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ],
): Uint8Array {
  const p = identityPerm();
  for (let k = 0; k < 3; k++) {
    cycle4(p, side[0][k], side[1][k], side[2][k], side[3][k]);
  }
  return p;
}

function invertPerm(p: Uint8Array): Uint8Array {
  const q = new Uint8Array(54);
  for (let i = 0; i < 54; i++) q[p[i]] = i;
  return q;
}

// --- Face turns -------------------------------------------------------------

const PERM_U = makeFaceTable(
  [0, 2, 8, 6],
  [1, 5, 7, 3],
  [
    [18, 19, 20], // F top
    [36, 37, 38], // L top
    [45, 46, 47], // B top
    [ 9, 10, 11], // R top
  ],
);

const PERM_D = makeFaceTable(
  [27, 29, 35, 33],
  [28, 32, 34, 30],
  [
    [24, 25, 26], // F bottom
    [15, 16, 17], // R bottom
    [51, 52, 53], // B bottom
    [42, 43, 44], // L bottom
  ],
);

const PERM_R = makeFaceTable(
  [9, 11, 17, 15],
  [10, 14, 16, 12],
  [
    [ 2,  5,  8], // U right column (top-to-bottom in unfold)
    [51, 48, 45], // B left column (reversed; B is unfolded as mirror)
    [29, 32, 35], // D right column
    [20, 23, 26], // F right column
  ],
);

const PERM_L = makeFaceTable(
  [36, 38, 44, 42],
  [37, 41, 43, 39],
  [
    [18, 21, 24], // F left column
    [27, 30, 33], // D left column
    [53, 50, 47], // B right column (reversed)
    [ 0,  3,  6], // U left column
  ],
);

const PERM_F = makeFaceTable(
  [18, 20, 26, 24],
  [19, 23, 25, 21],
  [
    [ 6,  7,  8], // U bottom row (left-to-right)
    [ 9, 12, 15], // R left column (top-to-bottom)
    [29, 28, 27], // D top row (right-to-left)
    [44, 41, 38], // L right column (bottom-to-top)
  ],
);

const PERM_B = makeFaceTable(
  [45, 47, 53, 51],
  [46, 50, 52, 48],
  [
    [ 2,  1,  0], // U top row (right-to-left)
    [36, 39, 42], // L left column (top-to-bottom)
    [33, 34, 35], // D bottom row (left-to-right)
    [17, 14, 11], // R right column (bottom-to-top)
  ],
);

// --- Slice moves (M follows L, E follows D, S follows F) --------------------

const PERM_M = makeSliceTable([
  [ 1,  4,  7], // U middle column
  [19, 22, 25], // F middle column
  [28, 31, 34], // D middle column
  [52, 49, 46], // B middle column (reversed)
]);

const PERM_E = makeSliceTable([
  [21, 22, 23], // F middle row
  [12, 13, 14], // R middle row
  [48, 49, 50], // B middle row
  [39, 40, 41], // L middle row
]);

const PERM_S = makeSliceTable([
  [ 3,  4,  5], // U middle row
  [10, 13, 16], // R middle column
  [32, 31, 30], // D middle row (reversed)
  [43, 40, 37], // L middle column (reversed)
]);

// --- Inverted versions for axis-positive direction --------------------------

const PERM_L_INV = invertPerm(PERM_L);
const PERM_D_INV = invertPerm(PERM_D);
const PERM_B_INV = invertPerm(PERM_B);
const PERM_M_INV = invertPerm(PERM_M);
const PERM_E_INV = invertPerm(PERM_E);
// PERM_S follows +z (F direction) which IS the axis direction — no INV needed.

// ---------------------------------------------------------------------------
// Dispatch
// ---------------------------------------------------------------------------

/** Permutation for the canonical face/slice at this layer along this axis.
 *  Used for SINGLE-LAYER moves: U, D, R, L, F, B, M, E, S. */
function naturalPerm(axis: Axis, layer: Layer): Uint8Array {
  if (axis === 'x') return layer === 1 ? PERM_R : layer === 0 ? PERM_M : PERM_L;
  if (axis === 'y') return layer === 1 ? PERM_U : layer === 0 ? PERM_E : PERM_D;
  return layer === 1 ? PERM_F : layer === 0 ? PERM_S : PERM_B;
}

/** Permutation that rotates the given layer in the +axis direction
 *  (CW when viewed from the +axis end). Used to compose multi-layer moves
 *  (wide turns and full-cube rotations) where every included layer must
 *  rotate together in one consistent direction. */
function axisPositivePerm(axis: Axis, layer: Layer): Uint8Array {
  if (axis === 'x') return layer === 1 ? PERM_R : layer === 0 ? PERM_M_INV : PERM_L_INV;
  if (axis === 'y') return layer === 1 ? PERM_U : layer === 0 ? PERM_E_INV : PERM_D_INV;
  return layer === 1 ? PERM_F : layer === 0 ? PERM_S : PERM_B_INV;
}

/** Compose permutations: applying the result equals applying p1, then p2, ... in order. */
function composePerms(perms: Uint8Array[]): Uint8Array {
  let p = identityPerm();
  for (const next of perms) {
    const composed = new Uint8Array(54);
    for (let i = 0; i < 54; i++) composed[i] = p[next[i]];
    p = composed;
  }
  return p;
}

function pickPerm(move: Move): Uint8Array {
  if (move.layers.length === 1) {
    return naturalPerm(move.axis, move.layers[0]);
  }
  // Multi-layer (wide / cube rotation): rotate every layer in the +axis direction.
  return composePerms(move.layers.map(l => axisPositivePerm(move.axis, l)));
}

function permute(state: Facelets, perm: Uint8Array): Facelets {
  const out = new Uint8Array(54);
  for (let i = 0; i < 54; i++) out[i] = state[perm[i]];
  return out;
}

/** Apply a move to a state, returning a new state. The original is untouched. */
export function applyMove(state: Facelets, move: Move): Facelets {
  const perm = pickPerm(move);
  let s = state;
  for (let i = 0; i < move.turns; i++) {
    s = permute(s, perm);
  }
  return s;
}
