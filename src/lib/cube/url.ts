import type { Color, Layer, LearningMode } from './types';

export interface ShareState {
  scramble: string;
  solution: string;
  learning: LearningMode;
  step: number;
}

const BASE32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'; // Crockford alphabet

function encodeBase32(n: number): string {
  if (n === 0) return '0';
  let s = '';
  let v = n;
  while (v > 0) {
    s = BASE32[v & 31] + s;
    v = Math.floor(v / 32);
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

// Layer bit allocation:
//   y axis at bits 13..15 (legacy — keeps old share links working)
//   x axis at bits 16..18
//   z axis at bits 19..21
// Within each block, layer index (-1, 0, 1) maps to offset (0, 1, 2).
const LAYER_BIT_BASE: Record<'y' | 'x' | 'z', number> = { y: 13, x: 16, z: 19 };

function packLearning(l: LearningMode): number {
  let mask = 0;
  for (const c of l.hiddenColors) mask |= 1 << c;
  for (const f of l.hiddenFaces) mask |= 1 << (f + 6);
  if (l.enabled) mask |= 1 << 12;
  for (const axis of ['x', 'y', 'z'] as const) {
    for (const ly of l.hiddenLayers[axis]) mask |= 1 << (LAYER_BIT_BASE[axis] + (ly + 1));
  }
  return mask;
}

function unpackLearning(mask: number): LearningMode {
  const hiddenColors = new Set<Color>();
  const hiddenFaces = new Set<Color>();
  const hiddenLayers = { x: new Set<Layer>(), y: new Set<Layer>(), z: new Set<Layer>() };
  for (let i = 0; i < 6; i++) if (mask & (1 << i)) hiddenColors.add(i as Color);
  for (let i = 0; i < 6; i++) if (mask & (1 << (i + 6))) hiddenFaces.add(i as Color);
  for (const axis of ['x', 'y', 'z'] as const) {
    for (let i = 0; i < 3; i++) {
      if (mask & (1 << (LAYER_BIT_BASE[axis] + i))) hiddenLayers[axis].add((i - 1) as Layer);
    }
  }
  return { enabled: (mask & (1 << 12)) !== 0, hiddenColors, hiddenFaces, hiddenLayers };
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
  const lmaskRaw = params.has('l') ? decodeBase32(params.get('l')!) : 0;
  const stepRaw = params.has('t') ? parseInt(params.get('t')!, 10) : 0;
  return {
    scramble,
    solution,
    learning: unpackLearning(Number.isFinite(lmaskRaw) ? lmaskRaw : 0),
    step: Number.isFinite(stepRaw) ? stepRaw : 0,
  };
}
