import { describe, expect, it } from 'vitest';
import { CsTimerParseError, parseCsTimerExport } from '../parse';

const sample = JSON.stringify({
  session1: [
    [[0, 30000], "R U R' U'", '', 1_700_000_100],
    [[2000, 28000], 'F2 D', 'note', 1_700_000_000],
    [[-1, 50000], 'L2', '', 1_700_000_200],
  ],
  session2: [],
  session3: [[[0, 12000], 'U', '', 1_700_000_300]],
  properties: { sessionData: JSON.stringify({ 1: { name: 'Main' }, 3: { name: 42 } }) },
});

describe('parseCsTimerExport', () => {
  it('maps penalties, sorts by timestamp and converts seconds to ms', () => {
    const sessions = parseCsTimerExport(sample);
    expect(sessions.map(s => s.id)).toEqual(['1', '3']);
    const [s1] = sessions;
    expect(s1.name).toBe('Main');
    expect(s1.solves.map(s => s.penalty)).toEqual(['plus2', 'none', 'dnf']);
    expect(s1.solves[0].timestamp).toBe(1_700_000_000_000);
    expect(s1.solves[1].scramble).toBe("R U R' U'");
  });

  it('falls back to the session number when no name is set, and stringifies numeric names', () => {
    const sessions = parseCsTimerExport(sample);
    expect(sessions[1].name).toBe('42');
    const noMeta = parseCsTimerExport(JSON.stringify({ session7: [[[0, 1000], '', '', 1]] }));
    expect(noMeta[0].name).toBe('7');
  });

  it('skips malformed solve entries', () => {
    const sessions = parseCsTimerExport(JSON.stringify({
      session1: [[[0, 1000], 'R', '', 1], 'junk', [[0], 'R', '', 2]],
    }));
    expect(sessions[0].solves).toHaveLength(1);
  });

  it('throws typed errors for bad input', () => {
    expect(() => parseCsTimerExport('not json')).toThrow(CsTimerParseError);
    expect(() => parseCsTimerExport('[]')).toThrow('not-object');
    expect(() => parseCsTimerExport('{"properties":{}}')).toThrow('no-sessions');
  });
});
