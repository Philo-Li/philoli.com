// The gallery uses CSS multi-column layout, so the item rendered at the top of
// each column is an LCP candidate but sits deep in DOM order (the browser
// balances columns by height). These helpers estimate where each column starts
// so those items can be preloaded / eagerly fetched.

const FALLBACK_RATIO = 4 / 3;

export interface GalleryItemSize {
  width: number | null;
  height: number | null;
}

function unitHeight(item: GalleryItemSize): number {
  const ratio = item.width && item.height ? item.width / item.height : FALLBACK_RATIO;
  return 1 / ratio;
}

/** Indices of the items estimated to sit at the top of each column. */
export function estimateColumnTops(items: GalleryItemSize[], columns: number): number[] {
  if (items.length === 0) return [];
  const heights = items.map(unitHeight);
  const total = heights.reduce((a, b) => a + b, 0);
  const target = total / columns;
  const tops = [0];
  let cumulative = 0;
  for (let i = 0; i < heights.length && tops.length < columns; i++) {
    cumulative += heights[i];
    if (cumulative >= target * tops.length) {
      tops.push(i + 1);
    }
  }
  return tops.filter(i => i < items.length);
}

/**
 * Indices worth eager-loading: a small window around each estimated column
 * top (one item of slack below the estimate, `windowSize` items above the
 * fold). Defaults to the 2-column mobile layout, where LCP matters most.
 */
export function computeEagerIndices(items: GalleryItemSize[], columns = 2, windowSize = 3): Set<number> {
  const eager = new Set<number>();
  for (const top of estimateColumnTops(items, columns)) {
    const from = Math.max(0, top - 1);
    const to = Math.min(items.length, top + windowSize);
    for (let i = from; i < to; i++) eager.add(i);
  }
  return eager;
}
