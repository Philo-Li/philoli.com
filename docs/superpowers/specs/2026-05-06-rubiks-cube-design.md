# Interactive 3D Rubik's Cube — Design

**Date:** 2026-05-06
**Status:** Approved (pending plan)
**Owner:** Philo Li

## Goal

A single in-browser tool on `philoli.com/projects/rubiks-cube` for visualizing
and learning 3x3 Rubik's Cube algorithms. The user types a scramble and a
solution, and steps through the solve with smooth 3D animation, optional
direct cube manipulation, and a "learning mode" that masks selected colors or
faces to drill memorization.

## Scope

**In scope (locked from brainstorm):**

- 3x3 only.
- Full WCA notation: face turns (`U/D/L/R/F/B`), wide (`r/Rw/u/Uw/...`), slice
  (`M/E/S`), rotations (`x/y/z`), with `'` and `2` modifiers.
- Step-by-step playback with prev/next/play/pause, speed slider 0.25x–4x,
  progress indicator, jump-to-start, jump-to-end.
- Direct cube interaction: drag empty space to rotate the camera; drag a
  sticker to turn its layer.
- Learning mode: combination of color masking (any subset of the 6 colors)
  and face masking (any subset of the 6 faces). Masked stickers render
  matte black.
- URL hash sharing of `{scramble, solution, learning-mode-state}`.
- localStorage persistence of last session.
- Mobile/touch support (touch == mouse for both view rotation and layer
  rotation).
- Full i18n across all locales already present in `src/i18n/`.

**Out of scope:**

- Solver. The user supplies the solution.
- Preset OLL/PLL/F2L libraries.
- Multiple cube sizes.
- Per-step keyboard shortcuts (J/F/I etc. — possible future addition).
- Stats / timer / history.

## Page Architecture

Following the `ebook-translator` pattern exactly:

| File | Role |
|---|---|
| `src/pages/projects/rubiks-cube.astro` | Astro route; thin wrapper. |
| `src/pages/[locale]/projects/rubiks-cube.astro` | Localized variant (matches existing routing). |
| `src/components/pages/RubiksCubePage.astro` | Page-level layout, SEO, locale plumbing. |
| `src/components/RubiksCube.tsx` | The single React entry component (`client:only="react"`). |
| `src/styles/rubiks-cube.css` | Page-specific CSS using existing CSS variables. |
| `src/components/pages/ProjectsPage.astro` | Add a third project card linking here. |

The Astro→React boundary mirrors `EbookTranslator.tsx`: SSR-rendered shell,
React mounts the cube canvas client-only.

## Component Structure (React)

```
RubiksCube (top-level state owner)
├── ScrambleInput        — textarea + "Apply" button
├── SolutionInput        — textarea + parse status
├── PlaybackControls     — prev / play-pause / next / speed / progress
├── LearningModeBar      — 6 color toggles + 6 face toggles + master switch
├── ShareBar             — copy URL, reset, current step indicator
└── CubeCanvas           — Three.js mount point
    ├── (camera, scene, lights — managed in a vanilla TS module)
    ├── (cube model — 27 cubies, 54 stickers)
    └── (drag handlers — view rotate vs. layer rotate)
```

State lives in `RubiksCube.tsx` as React state. The Three.js scene is
managed in a plain TypeScript module (`src/lib/cube/scene.ts`) and exposes an
imperative API the React component calls via `useEffect`. This follows React's
recommended pattern for wrapping imperative graphics libs and keeps Three.js
out of the React render loop.

## Data Model

### Cube state

The cube's logical state is stored as **54 facelets** (a `Uint8Array(54)`),
indexed by the standard URFDLB face order — 9 stickers per face,
row-major from top-left when looking straight at the face.

```ts
// 0..5 = U R F D L B colors (white, red, green, yellow, orange, blue
// in the default WCA color scheme)
type Facelets = Uint8Array; // length 54
```

This gives O(1) move application via precomputed permutation tables
(one 54-entry table per atomic move). 18 face turns × 6 slice turns ×
6 rotations × 6 wide turns ≈ 36 tables, each generated once at module load.

The 3D scene maintains a parallel "cubie" model (27 `THREE.Group`s, one per
cubie position) for animation. After a move animates, we snap the cubies'
transforms to the new orientation by writing the rotated group's
transform into the parent scene graph and resetting the temporary
animation group — this is the standard trick for cube renderers and avoids
floating-point drift over many moves.

### Move type

```ts
type Axis = 'x' | 'y' | 'z';
type Layer = -1 | 0 | 1;          // which slice along the axis
type Move = {
  axis: Axis;
  layers: Layer[];                // which slices to rotate together
  turns: 1 | 2 | 3;               // 90° / 180° / 270°
  notation: string;               // original token, for display
};
```

Wide moves and rotations are just multi-layer moves — `Rw` rotates layers
`[0, 1]` along x; `x` rotates layers `[-1, 0, 1]`.

## Move Parser

Lives in `src/lib/cube/parser.ts`. Pure function, fully unit-tested:

```ts
parseAlgorithm(text: string): { moves: Move[]; errors: ParseError[] }
```

Tokenizer handles:

- Whitespace (any), commas, parentheses (ignored — flatten to flat list).
- Face turns: `U D L R F B`.
- Wide turns: `Uw u Dw d Lw l Rw r Fw f Bw b` (lowercase = wide synonym).
- Slice turns: `M E S`.
- Rotations: `x y z`.
- Modifiers: `'` (prime) and `2` (double), in either order: `R2'` ≡ `R2`.

Each token returns one `Move`. Errors are collected, not thrown — invalid
tokens get highlighted in the input UI in red, but valid tokens still play.
This matches how cstimer behaves and is much friendlier than failing the
whole input.

## Animation System

Lives in `src/lib/cube/scene.ts`. One animation loop driven by
`requestAnimationFrame`:

1. **Idle state:** scene renders only on dirty flag (camera change, hover
   highlight, learning-mode toggle). No constant repaint — saves battery.
2. **Animating a move:**
   - Detach the cubies for the moving layer(s) from the cube root.
   - Reparent them into a temporary `THREE.Group`.
   - Tween the group's rotation from 0 to ±90°/±180° along the move axis,
     using `easeInOutQuad`. Duration = `baseStepMs / speedMultiplier`,
     where `baseStepMs = 350`.
   - On completion: bake the group's transform into each cubie's local
     transform, reparent back to the cube root, dispose the temp group,
     update the facelet state via the precomputed permutation.
3. **Queueing:** If the user spams "next" faster than animations finish,
   moves queue. Each move waits for the previous to complete. "Skip to
   end" cancels queued moves and snaps the facelet state directly.

### Speed control

A `speedMultiplier` value (0.25 ↔ 4) divides `baseStepMs`. UI is a
horizontal slider with snap stops at 0.25, 0.5, 1, 2, 4 and a current value
label.

## Direct Interaction (Drag)

Lives in `src/lib/cube/interaction.ts`. Pointer events (covers mouse + touch
uniformly). On `pointerdown`:

1. Raycast from camera through pointer.
2. **If hit a sticker:** record the cubie + face, enter "potential layer
   drag" state. On `pointermove` past 8px threshold, determine the drag
   axis from the dominant component of the screen-space delta projected
   onto the two in-face axes. The combination (face hit, drag axis,
   drag direction) deterministically picks one of 12 layer rotations.
   Animate that rotation, append the move to the move log.
3. **If hit nothing (background) or pointer drag without crossing the
   threshold:** treat as orbit-camera drag. We use a minimal home-rolled
   orbit controller (azimuth + elevation, clamped elevation) — about 40
   lines, avoids pulling in `OrbitControls.js`. Inertia not necessary.

On `pointerup` with no drag past threshold and no layer rotation
triggered: ignored (no click action — we don't need a "click to do
something" gesture).

## Learning Mode

Top-level state:

```ts
interface LearningMode {
  enabled: boolean;
  hiddenColors: Set<0|1|2|3|4|5>;   // by URFDLB color index
  hiddenFaces:  Set<0|1|2|3|4|5>;   // by URFDLB face position
}
```

Render rule per sticker: it renders matte black (no specular) if
`enabled && (hiddenColors.has(stickerColor) || hiddenFaces.has(stickerFace))`.

Implementation: each sticker mesh has two materials cached on the scene
(`materials.color[i]` and `materials.hidden`). On any learning-mode change
we walk the 54 stickers and swap `mesh.material`. This is O(54), runs in
~0.1ms, no shader work needed.

UI: a collapsible bar with two rows of 6 swatches:
- **Hide colors:** click swatch to toggle. Active = swatch shown crossed
  out + that color's stickers go black on the cube.
- **Hide faces:** 6 face buttons (U/R/F/D/L/B). Active = that face's 9
  stickers go black on the cube *regardless of color*.
- Master switch: enable/disable the entire mode without losing
  selections.

## Playback Controls

Below the cube canvas:

```
[<<] [<] [▶/⏸] [>] [>>]    [────●────] 5 / 13     0.25× ─●─── 4×
```

- `<<` jump to scramble state (= step 0)
- `<` previous step (instant if not animating; else cancels animation
  and applies remaining of current move + reverses one)
- `▶/⏸` play / pause
- `>` next step
- `>>` jump to solved-after-last-step
- Progress bar: scrubbing it jumps directly to a step (no animation —
  instant state apply via permutation tables, then a single 200ms
  flash so the user sees something happened).
- `n / total` step counter.
- Speed slider with discrete stops.

Keyboard shortcuts (desktop only, optional, not a v1 blocker):
`Space` = play/pause, `←/→` = prev/next, `Home/End` = first/last.

## URL Sharing

URL hash format (single line, no JSON):

```
#s=<scramble>&p=<solution>&l=<learning-mode>&t=<step>
```

Where `s` and `p` are URI-encoded algorithm strings, `l` is a 12-bit
bitmask (6 hidden-color bits + 6 hidden-face bits + 1 enabled bit, base32
encoded for compactness), `t` is current step number. All keys optional.

The `ShareBar` has a "Copy share link" button that snapshots the current
state into the URL and copies it to clipboard. The component also reads
from `location.hash` on mount — if a hash exists, it overrides
localStorage.

## localStorage

Key: `philoli/rubiks-cube/v1`. Value: the same object as the URL hash,
stored as JSON. Saved (debounced 300ms) on every state change. Loaded on
mount only if no URL hash is present.

The `v1` suffix lets us migrate cleanly later if the schema changes.

## i18n

New section in each locale JSON: `rubiksCube.*`. Initial keys:

```
rubiksCube.title
rubiksCube.intro
rubiksCube.scramble.label
rubiksCube.scramble.placeholder
rubiksCube.scramble.apply
rubiksCube.solution.label
rubiksCube.solution.placeholder
rubiksCube.solution.parseError
rubiksCube.playback.play
rubiksCube.playback.pause
rubiksCube.playback.prev
rubiksCube.playback.next
rubiksCube.playback.first
rubiksCube.playback.last
rubiksCube.playback.speed
rubiksCube.playback.stepCounter   // "{n} / {total}"
rubiksCube.learning.title
rubiksCube.learning.master
rubiksCube.learning.hideColors
rubiksCube.learning.hideFaces
rubiksCube.learning.faceLabel.U   // "Up"
rubiksCube.learning.faceLabel.R   // ... etc
rubiksCube.learning.colorLabel.white
rubiksCube.learning.colorLabel.red
... (6 colors)
rubiksCube.share.copy
rubiksCube.share.copied
rubiksCube.metadata.title
rubiksCube.metadata.description
```

Single-source rule: only `en.json` is edited by hand. Other locales get
machine-translated via existing `npm run i18n:translate` script.
WCA notation tokens (`R U R'`) are NOT translated — they're universal.

## Visual Design

Match site aesthetic (light tan / orange accent in light mode, near-black
in dark mode):

- Cube background: `var(--color-surface)`. Canvas takes ~520px tall on
  desktop, full-width on mobile.
- Cubie body: matte dark gray `#1a1a1a`, RoundedBoxGeometry with 4mm
  bevel.
- Stickers: slightly raised (~0.5mm), semi-matte (`roughness: 0.65`,
  `metalness: 0`). Standard speedcube colors with slightly desaturated
  palette to feel less "toy", more "premium":
  - White `#f6f6f0`, Yellow `#f4d04a`, Red `#d23a2c`,
  - Orange `#f08537`, Blue `#3c6dde`, Green `#3aa756`.
- Lighting: 1 directional key light at 45°, 1 fill at 90° opposite,
  1 ambient. Soft shadow on a faint floor disc below the cube.
- Hidden stickers (learning mode): `#0a0a0a`, full matte. Visually
  unmistakable from any color.
- Form controls reuse `.btn` / textarea styles from `ebook-translator.css`
  (we factor shared control styles into `global.css` if needed).

## Three.js Bundle

- Import only what we use: `three/src/...` paths or webpack tree-shake.
  Estimated ~150KB gzipped for `Scene`, `PerspectiveCamera`,
  `WebGLRenderer`, `RoundedBoxGeometry` (from three/examples), basic
  materials, and raycasting.
- Loaded only when `/projects/rubiks-cube` is visited
  (`client:only="react"` on the React component, route-level code split
  by Astro).

## Testing Strategy

- **Parser:** unit tests covering every notation form, every modifier,
  whitespace handling, parens, error cases.
- **State engine:** golden tests — apply known scrambles, assert facelet
  arrays match a reference (e.g., reverse-of-solution after solution
  applied to scramble == identity).
- **URL codec:** round-trip property test (encode → decode == identity).
- **Manual / browser:** scene rendering, drag interaction, animation
  smoothness, mobile touch — verified manually and (separately) via the
  `browse` skill after first cut.

## File Inventory

New files:

```
src/pages/projects/rubiks-cube.astro
src/pages/[locale]/projects/rubiks-cube.astro
src/components/pages/RubiksCubePage.astro
src/components/RubiksCube.tsx
src/styles/rubiks-cube.css
src/lib/cube/state.ts          # facelet model + permutation tables
src/lib/cube/parser.ts         # WCA notation parser
src/lib/cube/scene.ts          # Three.js scene + animation
src/lib/cube/interaction.ts    # pointer drag → camera or layer move
src/lib/cube/url.ts            # share-link encode/decode
src/lib/cube/storage.ts        # localStorage adapter
src/lib/cube/__tests__/parser.test.ts
src/lib/cube/__tests__/state.test.ts
src/lib/cube/__tests__/url.test.ts
docs/superpowers/specs/2026-05-06-rubiks-cube-design.md  # this file
```

Modified files:

```
package.json                                    # + three, + @types/three
src/i18n/en.json                                # + rubiksCube.* keys
src/i18n/*.json                                 # via i18n:translate script
src/components/pages/ProjectsPage.astro         # add project card
```

## Open Questions

None blocking. Two minor decisions deferred to implementation:

1. **Sticker geometry:** quad on cubie face vs. independent rounded-square
   mesh. Independent meshes look more like a real cube but cost 54 extra
   draws. Will start with quads and upgrade if it looks flat.
2. **Default camera angle:** isometric (30° elevation, 45° azimuth) is
   standard. Will lock that and revisit if it doesn't show enough faces.
