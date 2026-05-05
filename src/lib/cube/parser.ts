import type { Axis, Layer, Move, ParseError } from './types';

interface Token {
  text: string;
  index: number;
}

const FACE_LETTERS = new Set(['U', 'D', 'L', 'R', 'F', 'B']);
const SLICE_LETTERS = new Set(['M', 'E', 'S']);
const ROTATION_LETTERS = new Set(['x', 'y', 'z']);

const AXIS_OF: Record<string, Axis> = {
  U: 'y', D: 'y', E: 'y', y: 'y',
  R: 'x', L: 'x', M: 'x', x: 'x',
  F: 'z', B: 'z', S: 'z', z: 'z',
};

const NATURAL_LAYER: Record<string, Layer> = {
  U: 1, D: -1, E: 0,
  R: 1, L: -1, M: 0,
  F: 1, B: -1, S: 0,
};

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  // Match a base letter followed by optional 'w' and optional ' or 2 modifiers.
  // (We allow either modifier order: R2', R'2 — both mean R2.)
  const re = /([UDLRFBudlrfbMESxyz])(w?)((?:[2'’])*)/g;
  const matched = new Set<number>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m[0].length === 0) {
      // Defensive: avoid infinite loops on zero-width matches.
      re.lastIndex++;
      continue;
    }
    tokens.push({ text: m[0], index: m.index });
    for (let i = m.index; i < m.index + m[0].length; i++) matched.add(i);
  }
  // Anything that wasn't matched and isn't whitespace/punctuation is an error token.
  let i = 0;
  while (i < text.length) {
    if (matched.has(i) || /[\s(),.、，]/.test(text[i])) {
      i++;
      continue;
    }
    let j = i;
    while (j < text.length && !matched.has(j) && !/[\s(),.、，]/.test(text[j])) j++;
    tokens.push({ text: text.slice(i, j), index: i });
    i = j;
  }
  tokens.sort((a, b) => a.index - b.index);
  return tokens;
}

function parseToken(tok: Token): { move?: Move; error?: ParseError } {
  const norm = tok.text.replace(/’/g, "'");
  const m = /^([UDLRFBudlrfbMESxyz])(w?)([2']*)$/.exec(norm);
  if (!m) {
    return { error: { index: tok.index, token: tok.text, message: 'Invalid token' } };
  }
  const letter = m[1];
  const wide = m[2] === 'w';
  const mods = m[3];
  const upper = letter.toUpperCase();
  const isLowerFace = FACE_LETTERS.has(upper) && letter !== upper;

  if (ROTATION_LETTERS.has(letter) && wide) {
    return { error: { index: tok.index, token: tok.text, message: 'Rotations cannot be wide' } };
  }
  if (SLICE_LETTERS.has(letter) && wide) {
    return { error: { index: tok.index, token: tok.text, message: 'Slice moves cannot be wide' } };
  }

  const axis = AXIS_OF[letter] ?? AXIS_OF[upper];
  let layers: Layer[];
  if (ROTATION_LETTERS.has(letter)) {
    layers = [-1, 0, 1];
  } else if (SLICE_LETTERS.has(letter)) {
    layers = [0];
  } else {
    const baseLayer = NATURAL_LAYER[upper];
    if (wide || isLowerFace) {
      // A wide face turn rotates the outer layer plus the adjacent slice.
      layers = baseLayer === 1 ? [0, 1] : [-1, 0];
    } else {
      layers = [baseLayer];
    }
  }

  const hasPrime = mods.includes("'");
  const hasDouble = mods.includes('2');
  const turns: 1 | 2 | 3 = hasDouble ? 2 : hasPrime ? 3 : 1;

  return { move: { axis, layers, turns, notation: tok.text } };
}

export function parseAlgorithm(text: string): { moves: Move[]; errors: ParseError[] } {
  const tokens = tokenize(text);
  const moves: Move[] = [];
  const errors: ParseError[] = [];
  for (const tok of tokens) {
    const { move, error } = parseToken(tok);
    if (move) moves.push(move);
    if (error) errors.push(error);
  }
  return { moves, errors };
}
