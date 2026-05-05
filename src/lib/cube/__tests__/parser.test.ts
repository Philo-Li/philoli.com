import { describe, it, expect } from 'vitest';
import { parseAlgorithm } from '../parser';

describe('parseAlgorithm', () => {
  it('parses a single face turn', () => {
    const { moves, errors } = parseAlgorithm('R');
    expect(errors).toEqual([]);
    expect(moves).toHaveLength(1);
    expect(moves[0]).toMatchObject({ axis: 'x', layers: [1], turns: 1, notation: 'R' });
  });

  it('parses primes and doubles', () => {
    const { moves, errors } = parseAlgorithm("R' R2 R2'");
    expect(errors).toEqual([]);
    expect(moves.map(m => m.turns)).toEqual([3, 2, 2]);
  });

  it('parses curly apostrophe', () => {
    const { moves, errors } = parseAlgorithm('R’');
    expect(errors).toEqual([]);
    expect(moves[0].turns).toBe(3);
  });

  it('parses sexy move', () => {
    const { moves, errors } = parseAlgorithm("R U R' U'");
    expect(errors).toEqual([]);
    expect(moves).toHaveLength(4);
    expect(moves.map(m => m.notation)).toEqual(['R', 'U', "R'", "U'"]);
  });

  it('handles whitespace, commas, parens', () => {
    const { moves, errors } = parseAlgorithm("(R U R')\t,  U'");
    expect(errors).toEqual([]);
    expect(moves).toHaveLength(4);
  });

  it('parses lowercase and Xw wide moves equivalently', () => {
    const a = parseAlgorithm('r').moves[0];
    const b = parseAlgorithm('Rw').moves[0];
    expect(a.layers).toEqual([0, 1]);
    expect(b.layers).toEqual([0, 1]);
    expect(a.axis).toBe('x');
    expect(b.axis).toBe('x');
  });

  it('parses lowercase l/d/b as wide L/D/B', () => {
    expect(parseAlgorithm('l').moves[0].layers).toEqual([-1, 0]);
    expect(parseAlgorithm('d').moves[0].layers).toEqual([-1, 0]);
    expect(parseAlgorithm('b').moves[0].layers).toEqual([-1, 0]);
  });

  it('parses slice moves', () => {
    expect(parseAlgorithm('M').moves[0]).toMatchObject({ axis: 'x', layers: [0] });
    expect(parseAlgorithm('E').moves[0]).toMatchObject({ axis: 'y', layers: [0] });
    expect(parseAlgorithm('S').moves[0]).toMatchObject({ axis: 'z', layers: [0] });
  });

  it('parses cube rotations', () => {
    expect(parseAlgorithm('x').moves[0].layers).toEqual([-1, 0, 1]);
    expect(parseAlgorithm('y').moves[0].layers).toEqual([-1, 0, 1]);
    expect(parseAlgorithm('z').moves[0].layers).toEqual([-1, 0, 1]);
  });

  it('rejects invalid tokens but keeps valid ones', () => {
    const { moves, errors } = parseAlgorithm('R Q U');
    expect(moves.map(m => m.notation)).toEqual(['R', 'U']);
    expect(errors).toHaveLength(1);
    expect(errors[0].token).toBe('Q');
  });

  it('rejects wide rotations and wide slices', () => {
    expect(parseAlgorithm('xw').errors).toHaveLength(1);
    expect(parseAlgorithm('Mw').errors).toHaveLength(1);
  });
});
