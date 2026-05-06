# Cube Timer — Design

Date: 2026-05-07

## Goal

A local-only Rubik's cube practice timer integrated into philoli.com.
Records solves, generates WCA-style scrambles, computes ao5/ao12 and
daily/weekly stats. All data lives in the browser (localStorage), with
JSON import/export for backup.

Modeled on cstimer.net's standard interaction. No cloud, no accounts.

## Scope

### In scope
- 3x3 only
- Spacebar / touch hold-to-start timer
- WCA-style scramble generator
- +2 / DNF penalties
- ao5 / ao12 (WCA averaging rules)
- Daily and weekly stats (week starts Monday)
- Solve list with delete / penalty toggle / note
- JSON export and import (overwrite or merge)
- Desktop and touch (mobile) support

### Out of scope (YAGNI)
- 2x2 / 4x4 / other puzzles
- Multiple sessions
- WCA inspection time (15s pre-solve)
- Cloud sync
- Charts / trend graphs
- PB animations

## Architecture

### Page placement
- New page: `/projects/cube-timer` (`src/pages/projects/cube-timer.astro`)
- Existing `/projects/rubiks-cube` learning page gets a small link
  "打开计时器 →" at the top, no other changes

### Tech
- React component (project already uses `@astrojs/react` + react 19)
- Persistence: `localStorage`, key `cube-timer-v1`
- No new npm dependencies

### File layout
```
src/pages/projects/cube-timer.astro       // page shell
src/components/cube-timer/
  CubeTimer.tsx                           // top-level container, owns state
  Timer.tsx                               // big time display + spacebar/touch logic
  Scramble.tsx                            // current scramble + manual reroll
  SolveList.tsx                           // history grouped by date
  Stats.tsx                               // ao5/ao12 + daily/weekly cards
  scramble.ts                             // pure scramble generator
  storage.ts                              // localStorage read/write + import/export
  averages.ts                             // ao5/ao12 (WCA rules)
  format.ts                               // ms → "mm:ss.ms"
  __tests__/
    scramble.test.ts
    averages.test.ts
    storage.test.ts
```

Files are split by responsibility so each stays small and testable; the
container `CubeTimer.tsx` only coordinates.

## Data model

```ts
type Penalty = 'none' | 'plus2' | 'dnf';

type Solve = {
  id: string;          // crypto.randomUUID()
  timeMs: number;      // raw measured time
  penalty: Penalty;
  scramble: string;    // e.g. "R U R' U' F2 ..."
  timestamp: number;   // Date.now(), used for date/week grouping
  note?: string;
};

type Storage = {
  version: 1;
  solves: Solve[];     // ascending by timestamp
};
```

Effective time:
- `none` → `timeMs`
- `plus2` → `timeMs + 2000`
- `dnf` → excluded from numeric averages, treated as "worst" for ao5/ao12

## Timer interaction

### Desktop (spacebar)
1. Idle: big number shows last time (or `0.00`)
2. Spacebar pressed → number turns red ("waiting")
3. Held ≥ 500 ms → number turns green ("ready")
4. Spacebar released → timer starts, number ticks
5. Any key OR click → timer stops, solve is recorded, next scramble appears
6. If spacebar released before 500 ms (red, not green) → cancel, no record

### Touch
Same flow with finger on screen instead of spacebar.

### During timing
Background and nav slightly dim to reduce visual distraction and
discourage accidental clicks.

## Scramble generator (3x3, WCA-style)

20 moves. Each move is `face + suffix` where:
- face ∈ `U D L R F B`
- suffix ∈ `'' '2' "'"` (clockwise / 180° / counter-clockwise)

Constraints:
- Two consecutive moves must not share the same face (avoids `R R'`)
- Three consecutive moves must not all lie on the same axis (avoids
  `R L R`; axes: U/D, L/R, F/B)

Pure function in `scramble.ts`, no React.

## Averages (WCA rules)

`ao5` over the last 5 solves:
- If fewer than 5 solves → `null` (UI shows `-`)
- Drop best and worst; mean of remaining 3
- DNF counts as worst
- If ≥ 2 DNF in window → result is `DNF`

`ao12` over last 12 solves: same rule, drop best/worst of 12, mean of 10.

## Stats panel

Cards row (top of page):
`current · ao5 · ao12 · today count · today best · this-week count · this-week best`

"Today" = local calendar day.
"This week" = Monday 00:00 to Sunday 24:00 (local time, Chinese convention).

## Solve list

Grouped by date, newest day first. Each day group header:
`2026-05-07  ·  18 次  ·  最快 14.32  ·  均 18.50`

Each row:
`#42  18.32  R U R' U' F2 ...  [+2] [DNF] [📝] [🗑]`

- Click row → expand to show full scramble + note
- `[+2]` / `[DNF]` toggle penalty (mutually exclusive; clicking the
  active one returns to `none`)
- `[📝]` opens an inline textarea to edit note
- `[🗑]` deletes after a small confirm

## Import / Export

Two buttons in a settings strip:

**Export JSON**
- Downloads `cube-timer-YYYYMMDD.json`
- Content is the full `Storage` object

**Import JSON**
- File picker → parse → validate `version: 1`
- Modal: `Overwrite / Merge / Cancel`
  - Overwrite: replace all solves
  - Merge: combine, dedupe by `id`, sort by timestamp ascending
- Bad JSON or wrong version → show error, no change

## Backup safety

Before every write to `cube-timer-v1`, copy the current value to
`cube-timer-v1-backup`. A "Restore previous" button in the settings
strip swaps backup back into primary (with confirm). Cheap insurance
against a bad import or a `Clear all` mistake.

## Testing

Project already uses vitest. Tests focus on pure logic:

- `scramble.test.ts` — length is 20, no same-face adjacency, no
  same-axis triples, distribution sanity
- `averages.test.ts` — ao5/ao12 with: insufficient solves, all clean, one
  DNF, two DNFs, one +2, all +2
- `storage.test.ts` — round-trip serialize, version check, merge dedupe

Interaction (Timer, SolveList) is verified manually in the dev server.

## Risks / open questions

- localStorage quota: a solve is ~150 bytes; 50k solves ≈ 7 MB, well
  within the typical 5–10 MB limit. Not a concern in practice.
- Touch long-press conflicts with mobile context menu / text selection
  on the timer area: suppress with `user-select: none` and
  `touch-action: manipulation` on the timer surface.
- Page navigation while timing: warn via `beforeunload` only when a
  timer is actively running.
