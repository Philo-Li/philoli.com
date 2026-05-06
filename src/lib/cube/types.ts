/** A facelet is one sticker on the cube; 54 of them total. Values are color
 * indices: 0=U(white), 1=R(red), 2=F(green), 3=D(yellow), 4=L(orange), 5=B(blue). */
export type Color = 0 | 1 | 2 | 3 | 4 | 5;
export type Facelets = Uint8Array;

/** Face name in URFDLB order (the standard WCA / Kociemba ordering). */
export const FACE_NAMES = ['U', 'R', 'F', 'D', 'L', 'B'] as const;
export type FaceName = (typeof FACE_NAMES)[number];

export const FACE_INDEX: Record<FaceName, Color> = {
  U: 0, R: 1, F: 2, D: 3, L: 4, B: 5,
};

/** A move parsed from notation. `axis` is the rotation axis in cube-local
 * space; `layers` is which slices along that axis turn together; `turns`
 * is 1 (90° CW), 2 (180°), or 3 (90° CCW = 270° CW). */
export type Axis = 'x' | 'y' | 'z';
export type Layer = -1 | 0 | 1;

export interface Move {
  axis: Axis;
  layers: Layer[];
  turns: 1 | 2 | 3;
  notation: string;
}

export interface ParseError {
  index: number;
  token: string;
  message: string;
}

export interface LearningMode {
  enabled: boolean;
  hiddenColors: Set<Color>;
  hiddenFaces: Set<Color>;
  /** Y-axis layer indices to hide. -1 = bottom (D), 0 = middle (E slice), 1 = top (U). */
  hiddenLayers: Set<Layer>;
}
