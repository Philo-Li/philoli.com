import { describe, expect, it } from 'vitest';
import { ROUX_STAGES, applyAlg, cubieIndex, rouxCaseHash, rouxCaseHighlights, rouxCaseState, rouxStageLearning } from '../roux';
import { solvedState } from '../state';
import { decodeShareState } from '../url';
import { expandAlg } from '../cmll';

const SOLVED = solvedState();

// Piece sticker groups (U/D-facing sticker first for edges).
const E = { UF: [7, 19], UB: [1, 46], UL: [3, 37], UR: [5, 10], DF: [28, 25], DB: [34, 52] };
const LSE_STICKERS = [...Object.values(E).flat(), 4, 31]; // + U/D centers
const CORNERS = {
  DFL: [27, 44, 24], DBL: [33, 42, 53], DFR: [29, 26, 15], DBR: [35, 17, 51],
};
const EDGES = { FL: [21, 41], BL: [50, 39], FR: [23, 12], BR: [48, 14], DL: [30, 43], DR: [32, 16] };
const LEFT_BLOCK = [...CORNERS.DFL, ...CORNERS.DBL, ...EDGES.FL, ...EDGES.BL, ...EDGES.DL, 40];
const RIGHT_BLOCK = [...CORNERS.DFR, ...CORNERS.DBR, ...EDGES.FR, ...EDGES.BR, ...EDGES.DR, 13];

const same = (s: Uint8Array, idx: number[]) => idx.every(i => s[i] === SOLVED[i]);
const eoGood = (s: Uint8Array) => Object.values(E).every(([top]) => s[top] === 0 || s[top] === 3);
const centersOk = (s: Uint8Array) => s[4] === 0 && s[31] === 3;

const stage = (k: string) => ROUX_STAGES.find(s => s.key === k)!;
const section = (stageKey: string, k: string) => stage(stageKey).sections.find(s => s.key === k)!;

describe('ROUX_STAGES', () => {
  it('has unique case keys per stage', () => {
    for (const st of ROUX_STAGES) {
      const keys = st.sections.flatMap(s => s.cases.map(c => c.key));
      expect(new Set(keys).size).toBe(keys.length);
    }
  });

  it('every alg solves its setup', () => {
    const isSolved = (s: Uint8Array) => s.every((v, i) => v === SOLVED[i]);
    // A Roux solve ends with a free U turn, so LSE algs only need to solve up to that final AUF.
    const solvedUpToAuf = (s: Uint8Array) => ['', 'U', "U'", 'U2'].some(auf => isSolved(auf ? applyAlg(auf, s) : s));
    for (const st of ROUX_STAGES) for (const sec of st.sections) for (const x of sec.cases) {
      const after = applyAlg(x.alg, rouxCaseState(x));
      if (st.key === 'cmll') {
        // CMLL only promises the corners; the M slice is fixed later.
        for (const i of [0, 2, 6, 8, 9, 11, 18, 20, 36, 38, 45, 47]) expect(after[i], `${x.key} corner sticker ${i}`).toBe(SOLVED[i]);
      } else if (st.key === 'lse' && sec.key === 'eo') {
        // EO algs only orient the six edges; placing them is 4b/4c's job.
        expect(eoGood(after) && centersOk(after) && same(after, [...LEFT_BLOCK, ...RIGHT_BLOCK]), `${st.key}/${x.key}`).toBe(true);
      } else if (st.key === 'lse' && sec.key === 'ulur') {
        // Every UL/UR case ends with UL and UR solved and EO kept. Centers may be flipped
        // afterwards — the last-four-edges step fixes that.
        const ok = same(after, [...E.UL, ...E.UR]);
        expect(ok && eoGood(after) && same(after, [...LEFT_BLOCK, ...RIGHT_BLOCK]), `${st.key}/${x.key}`).toBe(true);
      } else if (st.key === 'lse') {
        expect(solvedUpToAuf(after), `${st.key}/${x.key}`).toBe(true);
      } else {
        expect(isSolved(after), `${st.key}/${x.key}`).toBe(true);
      }
    }
  });

  it('first-block cases leave the rest of the left block alone', () => {
    const slot = new Set([...CORNERS.DFL, ...EDGES.FL]);
    for (const x of section('fb', 'insert').cases) {
      expect(same(rouxCaseState(x), LEFT_BLOCK.filter(i => !slot.has(i))), x.key).toBe(true);
    }
  });

  it('second-block cases never touch the left block and only open the front-right slot', () => {
    const slot = new Set([...CORNERS.DFR, ...EDGES.FR]);
    for (const x of section('sb', 'insert').cases) {
      const s = rouxCaseState(x);
      expect(same(s, LEFT_BLOCK), x.key).toBe(true);
      expect(same(s, RIGHT_BLOCK.filter(i => !slot.has(i))), x.key).toBe(true);
    }
  });

  it('LSE cases only move the M slice and U layer; EO cases start with centers aligned', () => {
    for (const sec of stage('lse').sections) for (const x of sec.cases) {
      const s = rouxCaseState(x);
      expect(same(s, LEFT_BLOCK) && same(s, RIGHT_BLOCK), x.key).toBe(true);
      // From UL/UR on, an M2 may already have flipped the centers; EO always starts aligned.
      if (sec.key === 'eo') expect(centersOk(s), x.key).toBe(true);
    }
  });

  it('EO cases match their names and the other LSE sections start with EO done', () => {
    const bad = (s: Uint8Array) => {
      const up = (['UF', 'UB', 'UL', 'UR'] as const).filter(k => !(s[E[k][0]] === 0 || s[E[k][0]] === 3)).length;
      const down = (['DF', 'DB'] as const).filter(k => !(s[E[k][0]] === 0 || s[E[k][0]] === 3)).length;
      return `${up}/${down}`;
    };
    const expected: Record<string, string> = { arrow: '3/1', twoTwo: '2/2', fourZero: '4/0', twoTop: '2/0', oneOne: '1/1', twoBottom: '0/2' };
    for (const x of section('lse', 'eo').cases) expect(bad(rouxCaseState(x)), x.key).toBe(expected[x.key]);
    for (const x of [...section('lse', 'ulur').cases, ...section('lse', 'l4e').cases]) {
      expect(eoGood(rouxCaseState(x)), x.key).toBe(true);
    }
    // L4E starts with UL/UR placed, up to a turn of the top layer (the tutorial's final U2).
    const ulurUpToAuf = (s: Uint8Array) => ['', 'U', "U'", 'U2'].some(a => same(a ? applyAlg(a, s) : s, [...E.UL, ...E.UR]));
    for (const x of section('lse', 'l4e').cases) {
      expect(ulurUpToAuf(rouxCaseState(x)), `${x.key} UL/UR solved up to AUF`).toBe(true);
    }
    // The UL/UR cases really do start with the two LR pieces where their names say.
    const lrPositions = (s: Uint8Array) => {
      const at = (idx: number[]) => [s[idx[0]], s[idx[1]]].sort().join('');
      const top = (['UF', 'UB', 'UL', 'UR'] as const).filter(k => ['04', '01'].includes(at(E[k]))).length;
      const bottom = (['DF', 'DB'] as const).filter(k => ['04', '01'].includes(at(E[k]))).length;
      return `${top}/${bottom}`;
    };
    const expectedLr: Record<string, string> = { bothTop: '2/0', oneBottom: '1/1', bothBottom: '0/2', bothBottomAlt: '0/2' };
    for (const x of section('lse', 'ulur').cases) expect(lrPositions(rouxCaseState(x)), x.key).toBe(expectedLr[x.key]);
  });

  it('LSE highlights point at the pieces being worked on', () => {
    const eo = section('lse', 'eo').cases;
    const arrow = eo.find(x => x.key === 'arrow')!;
    expect(rouxCaseHighlights('eo', rouxCaseState(arrow)).size).toBe(4);
    expect(rouxCaseHighlights('eo', rouxCaseState(eo.find(x => x.key === 'twoTop')!)).size).toBe(2);
    expect(rouxCaseHighlights('eo', solvedState()).size).toBe(0);
    // Highlights are piece identities (the piece's home slot), all of them LSE edges.
    const LSE_EDGES = [7, 9, 11, 15, 17, 25];
    for (const s of rouxCaseHighlights('eo', rouxCaseState(arrow))) expect(LSE_EDGES).toContain(s);
    // UL/UR: always the yellow-red and yellow-orange pieces, wherever they are.
    for (const x of section('lse', 'ulur').cases) {
      expect([...rouxCaseHighlights('ulur', rouxCaseState(x))].sort((a, b) => a - b), x.key).toEqual([cubieIndex(-1, 1, 0), cubieIndex(1, 1, 0)]);
    }
    // L4E highlights the white edge stickers on top: 2 after M2, 1 for "one white", 2 for "two whites".
    const expectedWhite: Record<string, number> = { needM2: 2, oneWhite: 1, twoWhite: 2, byLook: 2 };
    for (const x of section('lse', 'l4e').cases) {
      const hl = rouxCaseHighlights('l4e', rouxCaseState(x));
      expect(hl.size, x.key).toBe(expectedWhite[x.key]);
      for (const s of hl) expect([9, 11, 15, 17]).toContain(s); // only M-slice edge pieces can be there
    }
    expect(rouxCaseHighlights('l4e', solvedState()).size).toBe(0);
    expect(rouxCaseHighlights('l4e', solvedState()).size).toBe(0);
  });

  it('share hash restores setup, alg, step 0 and the hidden layers for the stage', () => {
    for (const st of ROUX_STAGES) for (const sec of st.sections) for (const x of sec.cases) {
      const decoded = decodeShareState(rouxCaseHash(st.key, sec.key, x))!;
      if (st.key === 'lse') {
        expect([...decoded.learning.highlightedCubies].sort((a, b) => a - b)).toEqual([...rouxCaseHighlights(sec.key, rouxCaseState(x))].sort((a, b) => a - b));
      } else {
        expect(decoded.learning.highlightedCubies.size).toBe(0);
      }
      expect(decoded.scramble).toBe(x.setup);
      expect(decoded.solution).toBe(expandAlg(x.alg));
      expect(decoded.step).toBe(0);
      expect(decoded.learning.enabled).toBe(true);
      const preset = rouxStageLearning(st.key, sec.key);
      expect([...decoded.learning.hiddenLayers.x].sort()).toEqual([...preset.hiddenLayers.x].sort());
      expect([...decoded.learning.hiddenCubies].sort((a, b) => a - b)).toEqual([...preset.hiddenCubies].sort((a, b) => a - b));
    }
    // Blocks: everything except the block's own six pieces is hidden; no layer hiding anywhere.
    for (const k of ['fb', 'sb', 'cmll', 'lse'] as const) expect(rouxStageLearning(k, 'eo').hiddenLayers.x.size).toBe(0);
    const fb = rouxStageLearning('fb');
    expect(fb.hiddenCubies.size).toBe(26 - 6);
    for (const keep of [cubieIndex(-1, -1, 1), cubieIndex(-1, 0, 1), cubieIndex(-1, -1, 0), cubieIndex(-1, 0, 0)]) expect(fb.hiddenCubies.has(keep)).toBe(false);
    expect(fb.hiddenCubies.has(cubieIndex(0, 0, 0))).toBe(false); // the core is never listed
    const sb = rouxStageLearning('sb');
    expect(sb.hiddenCubies.size).toBe(26 - 12); // both blocks visible
    expect(sb.hiddenCubies.has(cubieIndex(1, -1, 1))).toBe(false);
    expect(sb.hiddenCubies.has(cubieIndex(-1, -1, 1))).toBe(false);
    expect(sb.hiddenCubies.has(cubieIndex(0, 1, 1))).toBe(true); // UF edge hidden
    // CMLL: UL (7) and UR (25) edges hidden along with the whole M slice; corners (0,2,6,8,18,20,24,26) visible.
    const cmll = rouxStageLearning('cmll');
    expect(cmll.hiddenLayers.x.size).toBe(0);
    expect(cmll.hiddenCubies.has(cubieIndex(-1, 1, 0)) && cmll.hiddenCubies.has(cubieIndex(1, 1, 0))).toBe(true);
    for (const corner of [0, 2, 6, 8, 18, 20, 24, 26]) expect(cmll.hiddenCubies.has(corner)).toBe(false);
    expect(cmll.hiddenCubies.size).toBe(10);
    // LSE / EO: corners and blocks hidden, UL/UR and the M slice visible. UL/UR and L4E hide nothing.
    const eo = rouxStageLearning('lse', 'eo');
    expect(eo.hiddenCubies.has(cubieIndex(-1, 1, 0)) || eo.hiddenCubies.has(cubieIndex(1, 1, 0))).toBe(false);
    expect(eo.hiddenCubies.has(cubieIndex(0, 1, 1)) || eo.hiddenCubies.has(cubieIndex(0, 1, 0))).toBe(false);
    expect(eo.hiddenCubies.size).toBe(16);
    expect(rouxStageLearning('lse', 'ulur').hiddenCubies.size).toBe(0);
    expect(rouxStageLearning('lse', 'l4e').hiddenCubies.size).toBe(0);
  });

  it('L4E cases are all distinct states and solve up to the final top turn', () => {
    const states = section('lse', 'l4e').cases.map(x => Array.from(rouxCaseState(x)).join(''));
    expect(new Set(states).size).toBe(states.length);
    expect(LSE_STICKERS.length).toBe(14);
    const isSolved = (s: Uint8Array) => s.every((v, i) => v === SOLVED[i]);
    for (const x of section('lse', 'l4e').cases) {
      const after = applyAlg(x.alg, rouxCaseState(x));
      expect(['', 'U', "U'", 'U2'].some(a => isSolved(a ? applyAlg(a, after) : after)), x.key).toBe(true);
    }
  });
});
