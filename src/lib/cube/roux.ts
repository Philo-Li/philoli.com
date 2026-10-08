import { CMLL_CASES, applyAlg, caseSetup, expandAlg, inverseAlg } from './cmll';
import type { Facelets, Layer, LearningMode } from './types';
import { encodeShareState } from './url';

/**
 * Algorithm library for the Roux method, one section per stage. Every case is a
 * (setup, alg) pair: apply `setup` to a solved cube to get the case, `alg` solves
 * it. `setup` defaults to the inverse of `alg`; LSE cases keep the setup they
 * were enumerated from so the alg shown is the shortest M/U solution for it.
 */
export type RouxStageKey = 'fb' | 'sb' | 'cmll' | 'lse';
export type Diagram = 'none' | 'corners' | 'cornerColors' | 'eo' | 'edges' | 'ulur' | 'full';

export interface RouxCase {
  key: string;
  alg: string;
  setup: string;
  diagram: Diagram;
  /** Translation key suffix for the case name; omitted when the key itself is the name (S, AS, …). */
  nameKey?: string;
  /** Translation key suffix for a one-line hint under the name. */
  hintKey?: string;
  /** Translation key suffix for a short tag in the card's corner (e.g. the bad-edge count). */
  tagKey?: string;
  /** Hide the algorithm text on the card (the 3D link still carries it). */
  hideAlg?: boolean;
  /** Photo/render to show instead of a generated diagram (public URL path). */
  image?: string;
  /** Don't render the name on the card (the image speaks for itself). */
  hideName?: boolean;
}

export interface RouxSection {
  key: string;
  cases: RouxCase[];
  /** Show this section's description even when the stage is terse. */
  showDesc?: boolean;
  /** Hide this section's description even when the stage shows them. */
  hideDesc?: boolean;
}

export interface RouxStage {
  key: RouxStageKey;
  sections: RouxSection[];
  /** Headings only — no stage intro or section descriptions. */
  terse?: boolean;
  /** Keep the stage intro but drop the per-section descriptions. */
  hideSectionDesc?: boolean;
}

const inv = (alg: string) => inverseAlg(alg);

const c = (key: string, alg: string, diagram: Diagram, opts: { setup?: string; name?: boolean; hint?: boolean; tag?: boolean; hideAlg?: boolean; image?: string; hideName?: boolean } = {}): RouxCase => ({
  key,
  alg,
  setup: opts.setup ?? inv(alg),
  diagram,
  nameKey: opts.name === false ? undefined : key,
  hintKey: opts.hint ? key : undefined,
  tagKey: opts.tag ? key : undefined,
  hideAlg: opts.hideAlg,
  image: opts.image,
  hideName: opts.hideName,
});

export const ROUX_STAGES: RouxStage[] = [
  {
    key: 'fb',
    hideSectionDesc: true,
    sections: [{
      key: 'insert',
      cases: [
        // Four hand-picked situations, each shown as a render of the start state; the
        // picture is the title, so no name is displayed.
        c('pairLeft', "U' L' U L", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/fb-pair-left.webp' }),
        c('mSlice', "M U' M' F'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/fb-m-slice.webp' }),
        c('edgeOnTop', "U' L' U L F'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/fb-edge-on-top.webp' }),
        c('misPaired', "F' L' U' L U' L' U L F'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/fb-mis-paired.webp' }),
      ],
    }],
  },
  {
    key: 'sb',
    hideSectionDesc: true,
    sections: [{
      key: 'insert',
      cases: [
        c('pairRight', "U R U' R'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/sb-pair-right.webp' }),
        c('mPair', "U M R U' R'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/sb-m-pair.webp' }),
        c('cornerInSlot', "U R U M U' R'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/sb-corner-in-slot.webp' }),
        // L F' L' temporarily opens the left block to flip the corner, then closes it again.
        c('twistedCorner', "L F' L' M U' M2 U2 R U' R'", 'none', { hint: true, hideName: true, image: '/uploads/images/roux/sb-twisted.webp' }),
      ],
    }],
  },
  {
    key: 'cmll',
    terse: true,
    sections: [
      {
        key: 'orient',
        cases: CMLL_CASES.filter(x => x.group === 'orient').map(x => ({
          key: x.key, alg: x.alg, setup: caseSetup(x), diagram: 'corners' as const, nameKey: undefined,
        })),
      },
      {
        key: 'permute',
        showDesc: true,
        cases: CMLL_CASES.filter(x => x.group === 'permute').map(x => ({
          key: x.key, alg: x.alg, setup: caseSetup(x), diagram: 'cornerColors' as const, nameKey: x.key, hintKey: x.key,
        })),
      },
    ],
  },
  {
    key: 'lse',
    sections: [
      {
        key: 'eo',
        cases: [
          c('arrow', "M' U M", 'eo', { setup: "M' U' M", hint: true, tag: true }),
          // Only the arrow gets its algorithm on the card; the others are turned into an arrow
          // by hand (M' U M / M' U2 M), so the card shows the pattern and the 3D link demonstrates.
          c('twoTwo', "M2 U M U M", 'eo', { setup: "M' U' M U' M U2 M'", hint: true, tag: true, hideAlg: true }),
          c('fourZero', "M U2 M U2 M U M", 'eo', { setup: "M U M U2 M U2 M", hint: true, tag: true, hideAlg: true }),
          c('twoTop', "M' U M U2 M' U M", 'eo', { setup: "M' U' M U2 M' U' M", hint: true, tag: true, hideAlg: true }),
          c('oneOne', "M U M U M' U M'", 'eo', { setup: "M U M U M' U M'", hint: true, tag: true, hideAlg: true }),
          c('twoBottom', "M U M U' M' U M'", 'eo', { setup: "M U M U M' U' M'", hint: true, tag: true, hideAlg: true }),
        ],
      },
      {
        // Place the yellow-red (UL) and yellow-orange (UR) edges: sink both to the
        // bottom opposite each other, turn the top to line up, then M2 U / M2 U'.
        // The centers end up flipped — the last-four-edges step fixes that with M2.
        key: 'ulur',
        cases: [
          // Both LR edges on top, opposite each other: M2 sinks both, U' lines them up, M2 U' places them.
          c('bothTop', "M2 U' M2 U'", 'ulur', { hint: true }),
          // One on top, one at the bottom: U2 to line up, M U2 M' sends the top one down opposite
          // the other, U' to line up, M2 U brings both up and places them.
          c('oneBottom', "U2 M U2 M' U' M2 U", 'ulur', { setup: "U' M2 U M U2 M' U2", hint: true }),
          c('bothBottom', 'M2 U', 'ulur', { setup: "M2 U' M2", hint: true }),
          // Same bottom pair the other way round; the top needs a U2 first, then M2 U'.
          c('bothBottomAlt', "U2 M2 U'", 'ulur', { setup: 'M2 U M2 U2', hint: true }),
        ],
      },
      {
        // Last four edges: fix the centers first (M2 if white is on top), then count the
        // white stickers on top — one white means one top/bottom swap, two whites mean two.
        key: 'l4e',
        hideDesc: true,
        cases: [
          c('needM2', 'M2', 'edges', { setup: 'M2', hint: true }),
          c('oneWhite', "M' U2 M", 'edges', { setup: "M' U2 M", hint: true }),
          c('twoWhite', "M' U2 M M U2 M'", 'edges', { setup: "M' U2 M M U2 M'", hint: true }),
          // No white on top but the front/back edges are swapped — solvable by looking.
          c('byLook', 'M2 U2 M2 U2', 'edges', { setup: 'U2 M2 U2 M2', hint: true }),
        ],
      },
    ],
  },
];

export function rouxCaseState(x: RouxCase): Facelets {
  return applyAlg(x.setup);
}

/** Cubie identity index, same formula as the 3D scene: (x+1)*9 + (y+1)*3 + (z+1), y up, z toward F. */
export const cubieIndex = (x: -1 | 0 | 1, y: -1 | 0 | 1, z: -1 | 0 | 1): number => (x + 1) * 9 + (y + 1) * 3 + (z + 1);

const ALL_PIECES = Array.from({ length: 27 }, (_, i) => i).filter(i => i !== cubieIndex(0, 0, 0));
const CORNERS = ([-1, 1] as const).flatMap(x => ([-1, 1] as const).flatMap(y => ([-1, 1] as const).map(z => cubieIndex(x, y, z))));
const U_EDGES = [cubieIndex(0, 1, 1), cubieIndex(0, 1, -1), cubieIndex(-1, 1, 0), cubieIndex(1, 1, 0)]; // UF UB UL UR
const M_CENTERS_AND_D_EDGES = [cubieIndex(0, 1, 0), cubieIndex(0, -1, 0), cubieIndex(0, 0, 1), cubieIndex(0, 0, -1), cubieIndex(0, -1, 1), cubieIndex(0, -1, -1)];
const LEFT_BLOCK = [cubieIndex(-1, -1, 1), cubieIndex(-1, -1, -1), cubieIndex(-1, 0, 1), cubieIndex(-1, 0, -1), cubieIndex(-1, -1, 0), cubieIndex(-1, 0, 0)]; // DFL DBL FL BL DL + L center
const RIGHT_BLOCK = [cubieIndex(1, -1, 1), cubieIndex(1, -1, -1), cubieIndex(1, 0, 1), cubieIndex(1, 0, -1), cubieIndex(1, -1, 0), cubieIndex(1, 0, 0)];
const BLOCK_EDGES_AND_CENTERS = [...LEFT_BLOCK, ...RIGHT_BLOCK].filter(i => !CORNERS.includes(i));
const except = (keep: number[]) => ALL_PIECES.filter(i => !keep.includes(i));

/**
 * Learning-mode preset for the 3D cube when a case is opened, so only the
 * pieces the stage works on are visible. Hidden sets are piece identities, which
 * the scene resolves from the current colors — hidden pieces stay hidden as the
 * scramble and the solution move them around.
 *  - first block: only the six left-block pieces (the pair being inserted included)
 *  - second block: both blocks' pieces (the finished left block gives the bearings)
 *  - CMLL: only the corners and the finished blocks (every other edge/center hidden)
 *  - LSE / EO: only the six edges and the M-slice centers; later LSE steps hide nothing
 */
export function rouxStageLearning(stage: RouxStageKey, sectionKey?: string): LearningMode {
  const hiddenCubies: Partial<Record<RouxStageKey, number[]>> = {
    fb: except(LEFT_BLOCK),
    sb: except([...LEFT_BLOCK, ...RIGHT_BLOCK]), // the finished left block stays visible for context
    cmll: [...U_EDGES, ...M_CENTERS_AND_D_EDGES],
    lse: sectionKey === 'eo' ? [...CORNERS, ...BLOCK_EDGES_AND_CENTERS] : [],
  };
  return {
    enabled: true,
    hiddenColors: new Set(),
    hiddenFaces: new Set(),
    hiddenLayers: { x: new Set<Layer>(), y: new Set<Layer>(), z: new Set<Layer>() },
    hiddenCubies: new Set(hiddenCubies[stage] ?? []),
    highlightedCubies: new Set(),
    hiddenStickers: new Set(),
  };
}

// The six LSE edge positions: facelet indices [U/D-facing sticker, side sticker] and the
// cubie coordinate of the position.
const LSE_EDGE_POSITIONS: { stickers: [number, number]; at: [-1 | 0 | 1, -1 | 0 | 1, -1 | 0 | 1] }[] = [
  { stickers: [7, 19], at: [0, 1, 1] },    // UF
  { stickers: [1, 46], at: [0, 1, -1] },   // UB
  { stickers: [3, 37], at: [-1, 1, 0] },   // UL
  { stickers: [5, 10], at: [1, 1, 0] },    // UR
  { stickers: [28, 25], at: [0, -1, 1] },  // DF
  { stickers: [34, 52], at: [0, -1, -1] }, // DB
];

// Where each color's face sits, so an edge's two colors give its home cubie coordinate.
const COLOR_AXIS: Record<number, [number, number, number]> = {
  0: [0, 1, 0], 1: [1, 0, 0], 2: [0, 0, 1], 3: [0, -1, 0], 4: [-1, 0, 0], 5: [0, 0, -1],
};

/** Identity (original cubie index) of the edge piece sitting at an LSE position in `state`. */
function edgeIdentityAt(state: Facelets, pos: typeof LSE_EDGE_POSITIONS[number]): number {
  const [a, b] = pos.stickers.map(i => COLOR_AXIS[state[i]]);
  return cubieIndex((a[0] + b[0]) as -1 | 0 | 1, (a[1] + b[1]) as -1 | 0 | 1, (a[2] + b[2]) as -1 | 0 | 1);
}

/**
 * Pieces to glow for an LSE case (as identities, so the glow follows the piece):
 * the misoriented edges for EO, the UL/UR pieces while placing them, and the
 * white-on-top edges (or, failing that, the misplaced top edges) in the last step.
 */
export function rouxCaseHighlights(sectionKey: string, state: Facelets): Set<number> {
  const out = new Set<number>();
  for (const pos of LSE_EDGE_POSITIONS) {
    const identity = edgeIdentityAt(state, pos);
    if (sectionKey === 'eo') {
      const top = state[pos.stickers[0]];
      if (top !== 0 && top !== 3) out.add(identity);
    } else if (sectionKey === 'ulur') {
      if (identity === cubieIndex(-1, 1, 0) || identity === cubieIndex(1, 1, 0)) out.add(identity);
    } else if (sectionKey === 'l4e') {
      // The step is read by the white stickers showing on top: those are the edges to swap down.
      if (pos.at[1] === 1 && state[pos.stickers[0]] === 3) out.add(identity);
    }
  }
  // No white on top: light the top edges that are simply out of place (the "by looking" case).
  if (sectionKey === 'l4e' && out.size === 0) {
    for (const pos of LSE_EDGE_POSITIONS) {
      const identity = edgeIdentityAt(state, pos);
      if (pos.at[1] === 1 && identity !== cubieIndex(...pos.at)) out.add(identity);
    }
  }
  return out;
}

/** Hash for the 3D cube page: case set up, algorithm loaded, irrelevant pieces hidden, working pieces highlighted. */
export function rouxCaseHash(stage: RouxStageKey, sectionKey: string, x: RouxCase): string {
  const learning = rouxStageLearning(stage, sectionKey);
  if (stage === 'lse') learning.highlightedCubies = rouxCaseHighlights(sectionKey, rouxCaseState(x));
  return encodeShareState({
    scramble: x.setup,
    solution: expandAlg(x.alg),
    learning,
    step: 0,
  });
}

export { applyAlg, inverseAlg };
