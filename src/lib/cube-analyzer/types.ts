export type Penalty = 'none' | 'plus2' | 'dnf';

export interface Solve {
  /** Raw measured time, before penalty. */
  timeMs: number;
  penalty: Penalty;
  scramble: string;
  /** Unix time in milliseconds. */
  timestamp: number;
}

export interface Session {
  id: string;
  name: string;
  solves: Solve[];
}
