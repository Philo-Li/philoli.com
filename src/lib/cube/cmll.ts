import { parseAlgorithm } from './parser';
import { applyMove, solvedState } from './state';
import type { Color, Facelets } from './types';

/**
 * Two-look CMLL for the Roux method: first orient the four U corners (the seven
 * OCLL cases), then permute them (adjacent or diagonal swap). CMLL is allowed to
 * disturb the M slice, so these are plain OLL-corner / corner-swap algorithms.
 */
export type CmllGroup = 'orient' | 'permute';

export interface CmllCase {
  key: string;
  group: CmllGroup;
  /** Algorithm as written for display; `(…)N` repeats the group N times. */
  alg: string;
  /** Number of U corners already oriented in this case (orient group only). */
  goodCorners?: number;
}

export const CMLL_CASES: CmllCase[] = [
  { key: 'S', group: 'orient', alg: "R U R' U R U2 R'", goodCorners: 1 },
  { key: 'AS', group: 'orient', alg: "L' U' L U' L' U2 L", goodCorners: 1 },
  { key: 'U', group: 'orient', alg: "F (R U R' U')1 F'", goodCorners: 2 },
  { key: 'T', group: 'orient', alg: "R U R' U' R' F R F'", goodCorners: 2 },
  { key: 'L', group: 'orient', alg: "F R' F' R U R U' R'", goodCorners: 2 },
  { key: 'Pi', group: 'orient', alg: "F (R U R' U')2 F'", goodCorners: 0 },
  { key: 'H', group: 'orient', alg: "F (R U R' U')3 F'", goodCorners: 0 },
  { key: 'adjacent', group: 'permute', alg: "R U2 R' U' R U2 L' U R' U' L" },
  { key: 'diagonal', group: 'permute', alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
];

/** Expand `(R U R' U')3` into the repeated moves. */
export function expandAlg(alg: string): string {
  return alg.replace(/\((.*?)\)(\d)/g, (_, inner: string, n: string) => Array(Number(n)).fill(inner.trim()).join(' '));
}

export function inverseAlg(alg: string): string {
  return expandAlg(alg).trim().split(/\s+/).reverse().map(t => {
    if (t.endsWith("'")) return t.slice(0, -1);
    if (t.endsWith('2')) return t;
    return t + "'";
  }).join(' ');
}

export function applyAlg(alg: string, from: Facelets = solvedState()): Facelets {
  const { moves, errors } = parseAlgorithm(expandAlg(alg));
  if (errors.length) throw new Error(`cmll: cannot parse "${alg}": ${errors[0].message}`);
  let s: Facelets = new Uint8Array(from);
  for (const m of moves) s = applyMove(s, m);
  return s;
}

/** The scrambled state a case's algorithm solves: the inverse applied to a solved cube. */
export function caseSetup(c: CmllCase): string {
  return inverseAlg(c.alg);
}

export function caseState(c: CmllCase): Facelets {
  return applyAlg(caseSetup(c));
}

/**
 * Stickers visible from above. `u` is the U face row-major (back row first);
 * each side array runs along its edge in the same direction as the U rows /
 * columns it touches: top and bottom left→right, left and right top→bottom.
 */
export interface TopView {
  u: Color[];
  top: Color[];
  right: Color[];
  bottom: Color[];
  left: Color[];
}

export function topView(s: Facelets): TopView {
  const c = (i: number) => s[i] as Color;
  return {
    u: Array.from({ length: 9 }, (_, i) => c(i)),
    top: [47, 46, 45].map(c),    // B face top row, mirrored because B is seen from behind
    right: [11, 10, 9].map(c),   // R face top row, R1 is next to F
    bottom: [18, 19, 20].map(c), // F face top row
    left: [36, 37, 38].map(c),   // L face top row, L1 is next to B
  };
}
