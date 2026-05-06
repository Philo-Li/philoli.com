import { describe, it, expect } from 'vitest';
import { encodeShareState, decodeShareState, type ShareState } from '../url';

const emptyLearning = () => ({
  enabled: false,
  hiddenColors: new Set<0 | 1 | 2 | 3 | 4 | 5>(),
  hiddenFaces: new Set<0 | 1 | 2 | 3 | 4 | 5>(),
  hiddenLayers: {
    x: new Set<-1 | 0 | 1>(),
    y: new Set<-1 | 0 | 1>(),
    z: new Set<-1 | 0 | 1>(),
  },
});

describe('share state codec', () => {
  it('round-trips full state', () => {
    const state: ShareState = {
      scramble: "R U R' U'",
      solution: "U R U' R'",
      learning: {
        enabled: true,
        hiddenColors: new Set([0, 3]),
        hiddenFaces: new Set([1]),
        hiddenLayers: {
          x: new Set([-1]),
          y: new Set([1]),
          z: new Set([-1, 0]),
        },
      },
      step: 2,
    };
    const hash = encodeShareState(state);
    const decoded = decodeShareState(hash);
    expect(decoded).not.toBeNull();
    expect(decoded!.scramble).toBe(state.scramble);
    expect(decoded!.solution).toBe(state.solution);
    expect(decoded!.learning.enabled).toBe(true);
    expect([...decoded!.learning.hiddenColors].sort()).toEqual([0, 3]);
    expect([...decoded!.learning.hiddenFaces]).toEqual([1]);
    expect([...decoded!.learning.hiddenLayers.x]).toEqual([-1]);
    expect([...decoded!.learning.hiddenLayers.y]).toEqual([1]);
    expect([...decoded!.learning.hiddenLayers.z].sort()).toEqual([-1, 0]);
    expect(decoded!.step).toBe(2);
  });

  it('omits empty fields', () => {
    const empty: ShareState = {
      scramble: '',
      solution: '',
      learning: emptyLearning(),
      step: 0,
    };
    expect(encodeShareState(empty)).toBe('');
  });

  it('decodes empty hash to null', () => {
    expect(decodeShareState('')).toBeNull();
    expect(decodeShareState('#')).toBeNull();
  });

  it('round-trips apostrophes in algorithms', () => {
    const hash = encodeShareState({
      scramble: "R'",
      solution: '',
      learning: emptyLearning(),
      step: 0,
    });
    const decoded = decodeShareState(hash);
    expect(decoded!.scramble).toBe("R'");
  });

  it('escapes ampersand in algorithm text safely', () => {
    const hash = encodeShareState({
      scramble: 'R&U',
      solution: '',
      learning: emptyLearning(),
      step: 0,
    });
    const decoded = decodeShareState(hash);
    expect(decoded!.scramble).toBe('R&U');
  });

  it('preserves only-step state', () => {
    const decoded = decodeShareState('#t=5');
    expect(decoded!.step).toBe(5);
    expect(decoded!.scramble).toBe('');
    expect(decoded!.solution).toBe('');
    expect(decoded!.learning.enabled).toBe(false);
    expect(decoded!.learning.hiddenLayers.x.size).toBe(0);
    expect(decoded!.learning.hiddenLayers.y.size).toBe(0);
    expect(decoded!.learning.hiddenLayers.z.size).toBe(0);
  });
});
