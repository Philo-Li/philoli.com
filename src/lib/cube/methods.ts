/**
 * Solving-method definitions for the learning guide. Each stage names which
 * stickers to hide; the dialog passes them through `LearningMode.hiddenStickers`,
 * so the viewer sees only the parts the stage has accomplished (or, for OLL,
 * only the parts where orientation matters — yellow top, black sides).
 */

import type { Color } from './types';

export type MethodKey = 'lbl' | 'cfop' | 'roux';

export interface StageView {
  /** Camera orbit for this view. Omit to use the dialog's default angle. */
  view?: { azimuth: number; elevation: number };
  /** Optional sub-label key (e.g. "below") shown next to the stage name. */
  subKey?: 'side' | 'below';
}

export interface Stage {
  key: string;
  /** Sticker indices (0..53, URFDLB facelet order) to hide for this stage. */
  hiddenStickers: ReadonlySet<number>;
  /** One or more thumbnails to render. The cross stage gets two — a side
   * angle and one looking up at D so the cross shape is actually visible. */
  views: StageView[];
}

export interface Method {
  key: MethodKey;
  stages: Stage[];
}

// ---------------------------------------------------------------------------
// Sticker index helpers (kept in this file because methods is the only
// caller — if a second caller appears, hoist these to a shared util).
// ---------------------------------------------------------------------------

/** Facelet index for a given cubie's sticker on a given face. Mirrors the
 * URFDLB unfold mapping in scene.ts. */
function faceletAt(face: Color, x: number, y: number, z: number): number {
  switch (face) {
    case 0: return 0 * 9 + (z + 1) * 3 + (x + 1);   // U
    case 1: return 1 * 9 + (1 - y) * 3 + (1 - z);   // R
    case 2: return 2 * 9 + (1 - y) * 3 + (x + 1);   // F
    case 3: return 3 * 9 + (1 - z) * 3 + (x + 1);   // D
    case 4: return 4 * 9 + (1 - y) * 3 + (z + 1);   // L
    case 5: return 5 * 9 + (1 - y) * 3 + (1 - x);   // B
  }
}

/** All sticker indices belonging to the cubie at (x,y,z). */
function stickersOnCubie(x: number, y: number, z: number): number[] {
  const out: number[] = [];
  if (y === 1) out.push(faceletAt(0, x, y, z));
  if (x === 1) out.push(faceletAt(1, x, y, z));
  if (z === 1) out.push(faceletAt(2, x, y, z));
  if (y === -1) out.push(faceletAt(3, x, y, z));
  if (x === -1) out.push(faceletAt(4, x, y, z));
  if (z === -1) out.push(faceletAt(5, x, y, z));
  return out;
}

type Coord = readonly [number, number, number];

function visibleStickersForCubies(cubies: Iterable<Coord>): Set<number> {
  const out = new Set<number>();
  for (const [x, y, z] of cubies) {
    for (const f of stickersOnCubie(x, y, z)) out.add(f);
  }
  return out;
}

/** Hide everything not in the supplied visible set. */
function hideAllExcept(visible: Set<number>): Set<number> {
  const out = new Set<number>();
  for (let i = 0; i < 54; i++) if (!visible.has(i)) out.add(i);
  return out;
}

// ---------------------------------------------------------------------------
// Common cubie groups
// ---------------------------------------------------------------------------

const faceCenters: readonly Coord[] = [
  [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1],
];

// D-face center + 4 D-layer edges (the white cross).
const dCross: readonly Coord[] = [
  [0, -1, 0], [1, -1, 0], [-1, -1, 0], [0, -1, 1], [0, -1, -1],
];

// Whole bottom layer.
const dLayer: readonly Coord[] = (() => {
  const arr: Coord[] = [];
  for (let x = -1; x <= 1; x++) for (let z = -1; z <= 1; z++) arr.push([x, -1, z]);
  return arr;
})();

// First two layers — D layer plus the four E-slice edges.
const f2l: readonly Coord[] = [
  ...dLayer,
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
];

// Whole top layer.
const uLayer: readonly Coord[] = (() => {
  const arr: Coord[] = [];
  for (let x = -1; x <= 1; x++) for (let z = -1; z <= 1; z++) arr.push([x, 1, z]);
  return arr;
})();

const uCorners: readonly Coord[] = [
  [1, 1, 1], [-1, 1, 1], [1, 1, -1], [-1, 1, -1],
];

// Roux first block (1×2×3 on the left side).
const rouxLeft: readonly Coord[] = (() => {
  const arr: Coord[] = [];
  for (let z = -1; z <= 1; z++) {
    arr.push([-1, -1, z]);
    arr.push([-1, 0, z]);
  }
  return arr;
})();

// Both Roux blocks.
const rouxBlocks: readonly Coord[] = (() => {
  const arr: Coord[] = [...rouxLeft];
  for (let z = -1; z <= 1; z++) {
    arr.push([1, -1, z]);
    arr.push([1, 0, z]);
  }
  return arr;
})();

const rouxCmll: readonly Coord[] = [...rouxBlocks, ...uCorners];

// Top-layer non-U stickers (R/F/L/B top rows). Hidden for OLL — the user
// sees yellow on top with black where side colors haven't been resolved yet.
const topLayerSideStickers: ReadonlySet<number> = (() => {
  const s = new Set<number>();
  for (const [x, y, z] of uLayer) {
    if (x === 1) s.add(faceletAt(1, x, y, z));
    if (z === 1) s.add(faceletAt(2, x, y, z));
    if (x === -1) s.add(faceletAt(4, x, y, z));
    if (z === -1) s.add(faceletAt(5, x, y, z));
  }
  return s;
})();

const noneHidden: ReadonlySet<number> = new Set<number>();

/** Hide every sticker NOT on one of the listed cubies. By default the six
 * face centers are added so the viewer keeps orientation context, but Roux's
 * block stages opt out — its blocks already carry the L/R centers and the
 * extra context centers would clutter the silhouette. */
function hiddenForStageCubies(
  cubies: readonly Coord[],
  includeCenters = true,
): Set<number> {
  const all = includeCenters ? [...cubies, ...faceCenters] : cubies;
  return hideAllExcept(visibleStickersForCubies(all));
}

// ---------------------------------------------------------------------------
// Camera presets
// ---------------------------------------------------------------------------

const FROM_BELOW = {
  azimuth: Math.PI * 0.75,
  elevation: -Math.atan(1 / Math.sqrt(2)),
};

const crossViews: StageView[] = [
  { subKey: 'side' },
  { subKey: 'below', view: FROM_BELOW },
];

const oneView: StageView[] = [{}];

// ---------------------------------------------------------------------------
// Method definitions
// ---------------------------------------------------------------------------

export const METHODS: readonly Method[] = [
  {
    key: 'lbl',
    stages: [
      { key: 'cross', hiddenStickers: hiddenForStageCubies(dCross), views: crossViews },
      { key: 'firstLayer', hiddenStickers: hiddenForStageCubies(dLayer), views: crossViews },
      { key: 'secondLayer', hiddenStickers: hiddenForStageCubies(f2l), views: oneView },
      { key: 'solved', hiddenStickers: noneHidden, views: oneView },
    ],
  },
  {
    key: 'cfop',
    stages: [
      { key: 'cross', hiddenStickers: hiddenForStageCubies(dCross), views: crossViews },
      { key: 'f2l', hiddenStickers: hiddenForStageCubies(f2l), views: oneView },
      // OLL — top face yellow, top-layer side stickers hidden (those are what
      // OLL doesn't yet care about; PLL will resolve them).
      { key: 'oll', hiddenStickers: topLayerSideStickers, views: oneView },
      { key: 'pll', hiddenStickers: noneHidden, views: oneView },
    ],
  },
  {
    key: 'roux',
    stages: [
      { key: 'firstBlock', hiddenStickers: hiddenForStageCubies(rouxLeft, false), views: oneView },
      { key: 'secondBlock', hiddenStickers: hiddenForStageCubies(rouxBlocks, false), views: oneView },
      { key: 'cmll', hiddenStickers: hiddenForStageCubies(rouxCmll, false), views: oneView },
      { key: 'lse', hiddenStickers: noneHidden, views: oneView },
    ],
  },
];
