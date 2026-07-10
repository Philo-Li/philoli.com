import { describe, it, expect } from 'vitest';
import { estimateColumnTops, computeEagerIndices } from '../gallery-layout';

const square = { width: 100, height: 100 };
const nullSize = { width: null, height: null };

describe('estimateColumnTops', () => {
  it('returns empty for an empty gallery', () => {
    expect(estimateColumnTops([], 2)).toEqual([]);
  });

  it('always includes the first item', () => {
    expect(estimateColumnTops([square], 2)).toEqual([0]);
  });

  it('splits uniform items evenly across two columns', () => {
    const items = Array.from({ length: 10 }, () => square);
    expect(estimateColumnTops(items, 2)).toEqual([0, 5]);
  });

  it('falls back to 4/3 ratio for items without dimensions', () => {
    const items = Array.from({ length: 8 }, () => nullSize);
    expect(estimateColumnTops(items, 2)).toEqual([0, 4]);
  });

  it('accounts for item aspect ratios when balancing', () => {
    // One tall item (ratio 1/2 => unit height 2) followed by four squares:
    // total height 6, so column two starts once cumulative height reaches 3.
    const tall = { width: 50, height: 100 };
    const items = [tall, square, square, square, square];
    expect(estimateColumnTops(items, 2)).toEqual([0, 2]);
  });

  it('returns one top per column at most', () => {
    const items = Array.from({ length: 12 }, () => square);
    expect(estimateColumnTops(items, 4)).toEqual([0, 3, 6, 9]);
  });
});

describe('computeEagerIndices', () => {
  it('covers a window around each column top', () => {
    const items = Array.from({ length: 10 }, () => square);
    const eager = computeEagerIndices(items, 2, 3);
    // Column tops at 0 and 5 => windows [0,3) and [4,8).
    expect([...eager].sort((a, b) => a - b)).toEqual([0, 1, 2, 4, 5, 6, 7]);
  });

  it('never exceeds the item range', () => {
    const eager = computeEagerIndices([square, square], 2, 3);
    for (const i of eager) {
      expect(i).toBeGreaterThanOrEqual(0);
      expect(i).toBeLessThan(2);
    }
  });
});
