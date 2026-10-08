import { describe, expect, it } from 'vitest';
import { CMLL_CASES, applyAlg, caseSetup, caseState, expandAlg, inverseAlg, topView } from '../cmll';
import { solvedState } from '../state';

// Stickers CMLL may touch in Roux: the whole U layer plus the M slice.
const ALLOWED = new Set<number>();
for (let i = 0; i < 9; i++) ALLOWED.add(i);
for (const f of [1, 2, 4, 5]) for (const i of [0, 1, 2]) ALLOWED.add(f * 9 + i);
for (const i of [19, 22, 25, 46, 49, 52, 28, 31, 34]) ALLOWED.add(i);

const U_CORNERS = [0, 2, 6, 8];
const SIDE_CORNERS = [9, 11, 18, 20, 36, 38, 45, 47];

describe('cmll helpers', () => {
  it('expands repeated groups and inverts', () => {
    expect(expandAlg("F (R U R' U')2 F'")).toBe("F R U R' U' R U R' U' F'");
    expect(inverseAlg("R U2 R'")).toBe("R U2 R'");
    expect(inverseAlg("F (R U R' U')1 F'")).toBe("F U R U' R' F'");
  });

  it('reads the top view with the right side adjacency', () => {
    expect(topView(applyAlg('F')).u.slice(6, 9)).toEqual([4, 4, 4]); // F brings L stickers onto U's front row
    expect(topView(applyAlg('B')).u.slice(0, 3)).toEqual([1, 1, 1]); // B brings R stickers onto U's back row
    expect(topView(applyAlg('U')).bottom).toEqual([1, 1, 1]);         // U brings R's top row to F
  });
});

describe('CMLL_CASES', () => {
  for (const c of CMLL_CASES) {
    it(`${c.key}: setup only touches U layer + M slice, alg solves the corners`, () => {
      const s = caseState(c);
      const solved = solvedState();
      for (let i = 0; i < 54; i++) {
        if (s[i] !== solved[i]) expect(ALLOWED.has(i), `sticker ${i} outside blocks changed`).toBe(true);
      }
      if (c.group === 'orient') {
        expect(U_CORNERS.filter(i => s[i] === 0)).toHaveLength(c.goodCorners!);
      } else {
        expect(U_CORNERS.filter(i => s[i] === 0)).toHaveLength(4);
      }
      const after = applyAlg(c.alg, s);
      for (const i of [...U_CORNERS, ...SIDE_CORNERS]) expect(after[i]).toBe(solved[i]);
      expect(caseSetup(c)).toBe(inverseAlg(c.alg));
    });
  }

  it('S case looks like the classic Sune diagram', () => {
    const v = topView(caseState(CMLL_CASES.find(c => c.key === 'S')!));
    expect(U_CORNERS.map(i => v.u[i] === 0)).toEqual([false, false, true, false]);
    expect(v.top[0]).toBe(0);    // yellow above the back-left corner
    expect(v.right[0]).toBe(0);  // yellow beside the back-right corner
    expect(v.bottom[2]).toBe(0); // yellow under the front-right corner
  });
});
