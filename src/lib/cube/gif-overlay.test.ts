import { describe, it, expect } from 'vitest';
import { layoutTokens } from './gif-overlay';

const measureMono =
  (charPx: number) =>
  (text: string): number =>
    text.length * charPx;

describe('layoutTokens', () => {
  it('places single-line tokens left-to-right with gap', () => {
    const layout = layoutTokens(['R', "U'", 'F2'], measureMono(10), {
      maxWidth: 1000,
      lineHeight: 20,
      padX: 8,
      padY: 8,
      gap: 8,
    });
    expect(layout).toHaveLength(3);
    expect(layout[0]).toEqual({ token: 'R', x: 8, y: 8, width: 10 });
    expect(layout[1].x).toBe(8 + 10 + 8);
    expect(layout[1].y).toBe(8);
    expect(layout[2].x).toBe(layout[1].x + 20 + 8);
  });

  it('wraps when next token would exceed maxWidth', () => {
    // Track the math: padX=8, gap=8, each token w=20.
    //   'RR' at (8,  8); after: x = 8 + 20 + 8 = 36
    //   'UU' end = 36 + 20 = 56. With maxWidth=70, 56 ≤ 70 → fits on line 1.
    //   'FF' would start at 36 + 20 + 8 = 64, end = 84 > 70 → wraps.
    const layout = layoutTokens(['RR', 'UU', 'FF'], measureMono(10), {
      maxWidth: 70,
      lineHeight: 20,
      padX: 8,
      padY: 8,
      gap: 8,
    });
    expect(layout[0].y).toBe(8);
    expect(layout[1].y).toBe(8);
    expect(layout[2].y).toBe(8 + 20);
    expect(layout[2].x).toBe(8);
  });

  it('returns empty for no tokens', () => {
    expect(
      layoutTokens([], measureMono(10), {
        maxWidth: 100,
        lineHeight: 20,
        padX: 8,
        padY: 8,
        gap: 8,
      }),
    ).toEqual([]);
  });
});
