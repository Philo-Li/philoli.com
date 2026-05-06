import { describe, it, expect } from 'vitest';
import { planFrames } from './gif-export';
import type { Move } from './types';

const move = (notation: string): Move => ({
  axis: 'x',
  layers: [1],
  turns: 1,
  notation,
});

describe('planFrames', () => {
  it('produces N intermediate frames per move plus one final settled frame', () => {
    const moves = [move('R'), move("U'")];
    const frames = planFrames({
      moves,
      startStep: 0,
      endStep: 2,
      framesPerMove: 4,
      stepDelayMs: 100,
    });
    expect(frames).toHaveLength(9);
    expect(frames[0]).toMatchObject({
      stepBeforeMove: 0,
      moveIndex: 0,
      progress: 0,
    });
    expect(frames[3].progress).toBeCloseTo(0.75, 5);
    expect(frames[4]).toMatchObject({
      stepBeforeMove: 1,
      moveIndex: 1,
      progress: 0,
    });
    expect(frames[8]).toMatchObject({
      stepBeforeMove: 2,
      moveIndex: null,
      progress: null,
    });
    expect(frames[0].delayMs).toBe(25);
  });

  it('supports a sub-range', () => {
    const moves = [move('R'), move('U'), move('F'), move('D')];
    const frames = planFrames({
      moves,
      startStep: 1,
      endStep: 3,
      framesPerMove: 2,
      stepDelayMs: 100,
    });
    expect(frames).toHaveLength(5);
    expect(frames[0].moveIndex).toBe(1);
    expect(frames[2].moveIndex).toBe(2);
    expect(frames[4].moveIndex).toBeNull();
  });

  it('handles empty range as a single settled frame', () => {
    const frames = planFrames({
      moves: [move('R')],
      startStep: 0,
      endStep: 0,
      framesPerMove: 4,
      stepDelayMs: 100,
    });
    expect(frames).toEqual([
      { stepBeforeMove: 0, moveIndex: null, progress: null, delayMs: 100 },
    ]);
  });
});
