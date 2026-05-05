import { describe, it, expect } from 'vitest';
import { solvedState, faceOf, applyMove } from '../state';
import type { Move } from '../types';
import { parseAlgorithm } from '../parser';

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
    expect(faceOf(0)).toBe(0);
    expect(faceOf(8)).toBe(0);
    expect(faceOf(9)).toBe(1);
    expect(faceOf(53)).toBe(5);
  });
});

const Q = (axis: 'x' | 'y' | 'z', layer: -1 | 0 | 1, notation: string): Move =>
  ({ axis, layers: [layer], turns: 1, notation });
const inv = (m: Move): Move => ({ ...m, turns: 3, notation: m.notation + "'" });
const dbl = (m: Move): Move => ({ ...m, turns: 2, notation: m.notation + '2' });

describe('applyMove — U', () => {
  const U = Q('y', 1, 'U');

  it('U turn rotates the U face clockwise (viewed from above)', () => {
    const state = solvedState();
    const after = applyMove(state, U);
    expect(after[4]).toBe(0);
    expect(after[2]).toBe(state[0]);
    expect(after[8]).toBe(state[2]);
    expect(after[6]).toBe(state[8]);
    expect(after[0]).toBe(state[6]);
  });

  it('U cycles the top row of F → L → B → R → F', () => {
    const state = solvedState();
    const after = applyMove(state, U);
    expect(after[18]).toBe(state[9]);
    expect(after[19]).toBe(state[10]);
    expect(after[20]).toBe(state[11]);
  });

  it("U' is the inverse of U", () => {
    const state = solvedState();
    const scrambled = applyMove(state, U);
    const restored = applyMove(scrambled, inv(U));
    expect(Array.from(restored)).toEqual(Array.from(state));
  });

  it('U2 == U + U', () => {
    const state = solvedState();
    const a = applyMove(applyMove(state, U), U);
    const b = applyMove(state, dbl(U));
    expect(Array.from(a)).toEqual(Array.from(b));
  });

  it('four U turns return to solved state', () => {
    let state = solvedState();
    for (let i = 0; i < 4; i++) state = applyMove(state, U);
    expect(Array.from(state)).toEqual(Array.from(solvedState()));
  });
});

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

describe('classic identities', () => {
  it("classic sexy move R U R' U' applied 6 times returns to solved", () => {
    let s = solvedState();
    const seq: Move[] = [
      Q('x', 1, 'R'),
      Q('y', 1, 'U'),
      inv(Q('x', 1, 'R')),
      inv(Q('y', 1, 'U')),
    ];
    for (let i = 0; i < 6; i++) {
      for (const m of seq) s = applyMove(s, m);
    }
    expect(Array.from(s)).toEqual(Array.from(solvedState()));
  });
});

describe('slice moves', () => {
  const M = Q('x', 0, 'M');
  const E = Q('y', 0, 'E');
  const S = Q('z', 0, 'S');

  it.each([['M', M], ['E', E], ['S', S]] as const)(
    'four turns of %s = identity',
    (_n, mv) => {
      let s = solvedState();
      for (let i = 0; i < 4; i++) s = applyMove(s, mv);
      expect(Array.from(s)).toEqual(Array.from(solvedState()));
    },
  );

  it('M does not change L center (40) or R center (13)', () => {
    const s = applyMove(solvedState(), M);
    expect(s[40]).toBe(4);
    expect(s[13]).toBe(1);
  });

  it('E does not change U center (4) or D center (31)', () => {
    const s = applyMove(solvedState(), E);
    expect(s[4]).toBe(0);
    expect(s[31]).toBe(3);
  });

  it('S does not change F center (22) or B center (49)', () => {
    const s = applyMove(solvedState(), S);
    expect(s[22]).toBe(2);
    expect(s[49]).toBe(5);
  });
});

describe('wide moves and rotations', () => {
  const Rw: Move = { axis: 'x', layers: [0, 1], turns: 1, notation: 'Rw' };
  const X: Move = { axis: 'x', layers: [-1, 0, 1], turns: 1, notation: 'x' };

  it("Rw == R + M' (each as composed permutations of the same state)", () => {
    const a = applyMove(solvedState(), Rw);
    let b = applyMove(solvedState(), Q('x', 1, 'R'));
    b = applyMove(b, { axis: 'x', layers: [0], turns: 3, notation: "M'" });
    expect(Array.from(a)).toEqual(Array.from(b));
  });

  it('cube rotation x: each face still uniform after rotation', () => {
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
});

describe('parser/state integration', () => {
  it('scramble + reversed scramble returns to solved', () => {
    const scrambleStr = "R U R' U' R' F R2 U' R' U' R U R' F'";
    const { moves } = parseAlgorithm(scrambleStr);
    let s = solvedState();
    for (const m of moves) s = applyMove(s, m);
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
});
