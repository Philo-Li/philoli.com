import type { Color, Layer } from './types';
import type { ShareState } from './url';

const KEY = 'philoli/rubiks-cube/v1';

interface StoredV1 {
  scramble: string;
  solution: string;
  learning: {
    enabled: boolean;
    hiddenColors: number[];
    hiddenFaces: number[];
    /** Optional — added in a later version, defaults to []. */
    hiddenLayers?: number[];
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
        hiddenLayers: [...state.learning.hiddenLayers],
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
        hiddenFaces: new Set((parsed.learning?.hiddenFaces ?? []) as Color[]),
        hiddenLayers: new Set((parsed.learning?.hiddenLayers ?? []) as Layer[]),
      },
      step: parsed.step ?? 0,
    };
  } catch {
    return null;
  }
}
