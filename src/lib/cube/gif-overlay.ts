export interface LayoutOpts {
  maxWidth: number;
  lineHeight: number;
  padX: number;
  padY: number;
  gap: number;
}

export interface PlacedToken {
  token: string;
  x: number;
  y: number;
  width: number;
}

export function layoutTokens(
  tokens: string[],
  measure: (text: string) => number,
  opts: LayoutOpts,
): PlacedToken[] {
  const out: PlacedToken[] = [];
  let x = opts.padX;
  let y = opts.padY;
  for (const token of tokens) {
    const w = measure(token);
    if (x !== opts.padX && x + w > opts.maxWidth) {
      x = opts.padX;
      y += opts.lineHeight;
    }
    out.push({ token, x, y, width: w });
    x += w + opts.gap;
  }
  return out;
}

export interface DrawOpts {
  font: string;
  accentColor: string;
  normalColor: string;
}

export function drawOverlay(
  ctx: CanvasRenderingContext2D,
  layout: PlacedToken[],
  currentIdx: number,
  opts: DrawOpts,
): void {
  ctx.save();
  ctx.font = opts.font;
  ctx.textBaseline = 'top';
  for (let i = 0; i < layout.length; i++) {
    const p = layout[i];
    ctx.fillStyle = i === currentIdx ? opts.accentColor : opts.normalColor;
    ctx.fillText(p.token, p.x, p.y);
  }
  ctx.restore();
}
