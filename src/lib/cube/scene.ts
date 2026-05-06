import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { Color, Facelets, LearningMode, Move } from './types';

/** Display colors for each face (URFDLB). Stickerless GAN palette. */
const STICKER_COLORS: number[] = [
  0xfed130, // U yellow
  0xff8a00, // R orange
  0x009b48, // F green
  0xf0eee4, // D white
  0xc81d1f, // L red
  0x1c5cd6, // B blue
];

const HIDDEN_COLOR = 0x0a0a0a;
const CUBIE_BODY_COLOR = 0x1a1a1a;

const CUBIE_SIZE = 1;
const CUBIE_GAP = 0.04;
const STEP = CUBIE_SIZE + CUBIE_GAP;
const STICKER_INSET = 0.10;
const STICKER_LIFT = 0.005;
const HALF = STEP / 2 + STICKER_LIFT;

/** Bounding sphere radius of the assembled 3x3 cube (corner-to-center distance). */
const CUBE_BOUND_RADIUS = Math.sqrt(3) * (1.5 * STEP);
/** Extra space around the cube so it doesn't kiss the viewport edges. */
const CAMERA_FIT_MARGIN = 1.25;

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/** Index helper for the 27 cubie groups. */
function cubieIdx(x: number, y: number, z: number): number {
  return (x + 1) * 9 + (y + 1) * 3 + (z + 1);
}

export interface CubeSceneOptions {
  /** Optional callback invoked when the user finishes a layer-drag gesture. */
  onLayerMove?: (move: Move) => void;
}

export class CubeScene {
  private mount: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private cubeRoot: THREE.Group;
  private cubies: THREE.Group[] = new Array(27);
  /** 54 sticker meshes in URFDLB facelet order, parallel to the Facelets array. */
  private stickers: THREE.Mesh[] = new Array(54);
  private stickerMaterials: THREE.MeshPhysicalMaterial[];
  private hiddenMaterial: THREE.MeshStandardMaterial;
  private envTexture: THREE.Texture | null = null;
  /** Holds the lights + shadow-receiving floor. We rotate this to track the
   * camera's azimuth so that, from the user's POV, the light direction stays
   * fixed on screen — the user is "rotating the cube", not the studio. */
  private studio!: THREE.Group;
  private currentState: Facelets | null = null;
  private currentLearning: LearningMode | undefined;
  private dirty = true;
  private animating = false;
  private rafId: number | null = null;

  // Camera orbit state — radius is recomputed on every resize to fit the cube.
  // Default at -x +y +z octant so the user sees L (red) on the left, F (green)
  // on the right, U (yellow) on top.
  private static readonly INITIAL_AZIMUTH = Math.PI * 0.75;
  private azimuth = CubeScene.INITIAL_AZIMUTH;
  private elevation = Math.atan(1 / Math.sqrt(2));
  private radius = 7;

  // Pointer drag state
  private dragMode: 'none' | 'pending' | 'orbit' | 'layer' = 'none';
  private dragStartX = 0;
  private dragStartY = 0;
  private hitFaceNormal: THREE.Vector3 | null = null;
  private hitCubieCoord: { x: number; y: number; z: number } | null = null;
  private activePointerId: number | null = null;

  // External callbacks
  private onLayerMove: ((move: Move) => void) | undefined;

  // Dispose hooks
  private resizeObserver: ResizeObserver;
  private boundPointerDown = (e: PointerEvent) => this.onPointerDown(e);
  private boundPointerMove = (e: PointerEvent) => this.onPointerMove(e);
  private boundPointerUp = (e: PointerEvent) => this.onPointerUp(e);

  constructor(mountEl: HTMLElement, opts: CubeSceneOptions = {}) {
    this.mount = mountEl;
    this.onLayerMove = opts.onLayerMove;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

    this.cubeRoot = new THREE.Group();
    this.scene.add(this.cubeRoot);

    // PMREM env map drives the specular reflections that give the stickers
    // their plastic-gloss look. RoomEnvironment is a procedural neutral-lit
    // box, perfect for studio-style highlights without shipping an HDR file.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = this.envTexture;
    // Tone down the env reflection so the gloss reads as a subtle sheen
    // rather than a chrome-bright highlight.
    this.scene.environmentIntensity = 0.35;
    pmrem.dispose();

    // Studio group holds everything that should "follow" the camera's azimuth
    // so the user perceives a fixed lighting setup while the cube appears to
    // turn — lights, their shadow targets, and the contact-shadow floor.
    // Ambient light has no direction, so it stays at scene level.
    this.studio = new THREE.Group();
    this.scene.add(this.studio);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 0.95);
    key.position.set(5, 8, 6);
    key.castShadow = true;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 25;
    key.shadow.camera.left = -3.5;
    key.shadow.camera.right = 3.5;
    key.shadow.camera.top = 3.5;
    key.shadow.camera.bottom = -3.5;
    key.shadow.bias = -0.0008;
    key.shadow.normalBias = 0.02;
    // Lower-res shadow map + wide PCF radius + many blur samples gives a
    // soft, diffused contact shadow with feathered edges, not a hard
    // silhouette. Higher mapSize would re-introduce a crisp outline.
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.radius = 12;
    key.shadow.blurSamples = 24;
    this.studio.add(key);
    this.studio.add(key.target);
    const fill = new THREE.DirectionalLight(0xffffff, 0.45);
    fill.position.set(-5, 2, -3);
    this.studio.add(fill);
    this.studio.add(fill.target);

    // Contact-shadow floor: invisible except where shadows fall. Sits just
    // beneath the cube so the cast shadow grounds it without a visible plane
    // when the camera orbits below the horizon.
    const floorY = -(1.5 * STEP) - 0.05;
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.ShadowMaterial({ opacity: 0.18 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = floorY;
    floor.receiveShadow = true;
    this.studio.add(floor);

    // Materials — stickers use MeshPhysicalMaterial with a clearcoat layer to
    // mimic the lacquered plastic look of a real stickered cube: a colored
    // diffuse base with a glossy transparent coat that picks up sharp
    // environment highlights.
    this.stickerMaterials = STICKER_COLORS.map(
      (c) =>
        new THREE.MeshPhysicalMaterial({
          color: c,
          roughness: 0.45,
          metalness: 0,
          // Clearcoat too high turns the env-map reflection into a white film
          // that visibly washes the sticker color when it tilts toward a
          // light. Keep it as a faint sheen.
          clearcoat: 0.25,
          clearcoatRoughness: 0.5,
        }),
    );
    this.hiddenMaterial = new THREE.MeshStandardMaterial({
      color: HIDDEN_COLOR,
      roughness: 1,
      metalness: 0,
    });

    this.buildCube();
    this.applyCamera();
    this.mount.appendChild(this.renderer.domElement);

    // Pointer events for drag
    this.renderer.domElement.addEventListener('pointerdown', this.boundPointerDown);
    this.renderer.domElement.addEventListener('pointermove', this.boundPointerMove);
    this.renderer.domElement.addEventListener('pointerup', this.boundPointerUp);
    this.renderer.domElement.addEventListener('pointercancel', this.boundPointerUp);

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.mount);
    this.handleResize();

    this.startRenderLoop();
  }

  // -------------------------------------------------------------------------
  // Cube construction
  // -------------------------------------------------------------------------

  private buildCube(): void {
    const cubieGeom = new RoundedBoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE, 4, 0.08);
    const cubieMat = new THREE.MeshStandardMaterial({
      color: CUBIE_BODY_COLOR,
      roughness: 0.55,
      metalness: 0,
    });
    const stickerSize = CUBIE_SIZE - STICKER_INSET * 2;
    const stickerGeom = new THREE.PlaneGeometry(stickerSize, stickerSize);

    // 27 cubies
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const cubie = new THREE.Group();
          cubie.position.set(x * STEP, y * STEP, z * STEP);
          cubie.userData = { x, y, z };
          const body = new THREE.Mesh(cubieGeom, cubieMat);
          body.castShadow = true;
          body.receiveShadow = true;
          cubie.add(body);
          this.cubies[cubieIdx(x, y, z)] = cubie;
          this.cubeRoot.add(cubie);
        }
      }
    }

    // 54 stickers in URFDLB order, parallel to Facelets indexing.
    // For each face we define the facelet coordinate → cubie position mapping, the
    // sticker's local orientation (so the plane faces outward), and the offset to
    // lift it slightly above the cubie body.
    //
    // Coordinate convention (Kociemba unfold):
    // - U row 0 is at z=-1 (back), row 2 at z=+1 (front); col 0 at x=-1, col 2 at x=+1.
    // - F row 0 is at y=+1 (top), row 2 at y=-1 (bottom); col 0 at x=-1, col 2 at x=+1.
    // - R row 0 at y=+1, col 0 at z=+1, col 2 at z=-1 (right edge of unfold = back).
    // - D row 0 at z=+1 (front, adjacent to F bottom), row 2 at z=-1; col 0 at x=-1.
    // - L row 0 at y=+1, col 0 at z=-1 (back), col 2 at z=+1 (front, edge with F).
    // - B row 0 at y=+1, col 0 at x=+1 (edge with R), col 2 at x=-1.

    const faceConfigs: Array<{
      face: Color;
      cubieAt: (row: number, col: number) => { x: number; y: number; z: number };
      orient: THREE.Quaternion;
      offset: THREE.Vector3;
    }> = [
      // U face (+y face)
      {
        face: 0,
        cubieAt: (row, col) => ({ x: col - 1, y: 1, z: row - 1 }),
        orient: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2),
        offset: new THREE.Vector3(0, HALF, 0),
      },
      // R face (+x face)
      {
        face: 1,
        cubieAt: (row, col) => ({ x: 1, y: 1 - row, z: 1 - col }),
        orient: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2),
        offset: new THREE.Vector3(HALF, 0, 0),
      },
      // F face (+z face)
      {
        face: 2,
        cubieAt: (row, col) => ({ x: col - 1, y: 1 - row, z: 1 }),
        orient: new THREE.Quaternion(),
        offset: new THREE.Vector3(0, 0, HALF),
      },
      // D face (-y face)
      {
        face: 3,
        cubieAt: (row, col) => ({ x: col - 1, y: -1, z: 1 - row }),
        orient: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2),
        offset: new THREE.Vector3(0, -HALF, 0),
      },
      // L face (-x face)
      {
        face: 4,
        cubieAt: (row, col) => ({ x: -1, y: 1 - row, z: col - 1 }),
        orient: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2),
        offset: new THREE.Vector3(-HALF, 0, 0),
      },
      // B face (-z face)
      {
        face: 5,
        cubieAt: (row, col) => ({ x: 1 - col, y: 1 - row, z: -1 }),
        orient: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI),
        offset: new THREE.Vector3(0, 0, -HALF),
      },
    ];

    for (const cfg of faceConfigs) {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const { x, y, z } = cfg.cubieAt(row, col);
          const cubie = this.cubies[cubieIdx(x, y, z)];
          const sticker = new THREE.Mesh(stickerGeom, this.stickerMaterials[cfg.face]);
          sticker.quaternion.copy(cfg.orient);
          sticker.position.copy(cfg.offset);
          sticker.userData = { isSticker: true, faceIndex: cfg.face };
          sticker.castShadow = true;
          sticker.receiveShadow = true;
          cubie.add(sticker);
          this.stickers[cfg.face * 9 + row * 3 + col] = sticker;
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // State application
  // -------------------------------------------------------------------------

  /** Update sticker materials from a Facelets array, applying learning mode. */
  public setFacelets(state: Facelets, learning?: LearningMode): void {
    this.currentState = state;
    this.currentLearning = learning;
    for (let i = 0; i < 54; i++) {
      const color = state[i] as Color;
      const face = Math.floor(i / 9) as Color;
      const hidden =
        !!learning?.enabled &&
        (learning.hiddenColors.has(color) || learning.hiddenFaces.has(face));
      this.stickers[i].material = hidden ? this.hiddenMaterial : this.stickerMaterials[color];
    }
    this.markDirty();
  }

  /** Re-apply the most recent learning mode (used when toggling masks). */
  public refreshLearning(learning: LearningMode | undefined): void {
    if (this.currentState) this.setFacelets(this.currentState, learning);
    else this.currentLearning = learning;
  }

  /** Reset all cubies to their canonical positions and apply the given facelet state. */
  public reset(state: Facelets, learning?: LearningMode): void {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const c = this.cubies[cubieIdx(x, y, z)];
          c.position.set(x * STEP, y * STEP, z * STEP);
          c.quaternion.identity();
        }
      }
    }
    this.setFacelets(state, learning);
  }

  /** Apply a move's geometric rotation instantly (no animation). The 3D
   * cubie transforms get updated; the caller is responsible for also
   * updating the facelet state via setFacelets if needed. */
  public applyImmediate(move: Move): void {
    if (this.animating) return;
    const moving = this.collectMovingCubies(move);
    const pivot = new THREE.Group();
    this.cubeRoot.add(pivot);
    for (const c of moving) pivot.attach(c);
    pivot.setRotationFromAxisAngle(this.axisVec(move.axis), this.angleFor(move));
    for (const c of [...moving]) this.cubeRoot.attach(c);
    this.cubeRoot.remove(pivot);
    this.markDirty();
  }

  // -------------------------------------------------------------------------
  // Animation
  // -------------------------------------------------------------------------

  public isAnimating(): boolean {
    return this.animating;
  }

  /** The raw WebGL canvas. Use for capture/screenshot — do not mount elsewhere. */
  public getCanvas(): HTMLCanvasElement {
    return this.renderer.domElement;
  }

  /**
   * Synchronously render one frame at `state`, optionally with an in-progress
   * `partialMove` rotated to `progress` (0..1). Pivot is detached afterwards
   * so cubies stay at canonical positions for the next call. Throws when an
   * animation is already in flight.
   *
   * Caller must read the canvas (drawImage / toDataURL) before the next
   * paint cycle for reliable pixel data.
   */
  public renderStillFrame(
    state: Facelets,
    learning?: LearningMode,
    partialMove?: Move,
    progress?: number,
  ): HTMLCanvasElement {
    if (this.animating) {
      throw new Error('renderStillFrame called during animateMove');
    }
    this.reset(state, learning);

    let pivot: THREE.Group | null = null;
    let moving: THREE.Group[] = [];
    if (partialMove && typeof progress === 'number') {
      moving = this.collectMovingCubies(partialMove);
      pivot = new THREE.Group();
      this.cubeRoot.add(pivot);
      for (const c of moving) pivot.attach(c);
      const t = Math.max(0, Math.min(1, progress));
      const angle = this.angleFor(partialMove) * easeInOutQuad(t);
      pivot.setRotationFromAxisAngle(this.axisVec(partialMove.axis), angle);
    }

    this.renderer.render(this.scene, this.camera);

    if (pivot) {
      for (const c of [...moving]) this.cubeRoot.attach(c);
      this.cubeRoot.remove(pivot);
    }

    this.markDirty();
    return this.renderer.domElement;
  }

  /** Animate the given move over the given duration. Resolves when complete. */
  public async animateMove(move: Move, durationMs: number): Promise<void> {
    if (this.animating) {
      throw new Error('animateMove called while another animation is in progress');
    }
    this.animating = true;

    const moving = this.collectMovingCubies(move);
    const pivot = new THREE.Group();
    this.cubeRoot.add(pivot);
    for (const c of moving) pivot.attach(c);

    const axisVec = this.axisVec(move.axis);
    const fullAngle = this.angleFor(move);

    const start = performance.now();
    await new Promise<void>((resolve) => {
      const tick = () => {
        const elapsed = performance.now() - start;
        const rawT = Math.min(1, elapsed / durationMs);
        const t = easeInOutQuad(rawT);
        pivot.setRotationFromAxisAngle(axisVec, fullAngle * t);
        this.markDirty();
        if (rawT < 1) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });

    for (const c of [...moving]) this.cubeRoot.attach(c);
    this.cubeRoot.remove(pivot);

    this.animating = false;
    this.markDirty();
  }

  private collectMovingCubies(move: Move): THREE.Group[] {
    // The cubies array is indexed by ORIGINAL position; after rotations the
    // cubie at index (1,1,1) may now sit anywhere on the cube. Layer
    // membership is decided by the cubie's CURRENT position under cubeRoot.
    const moving: THREE.Group[] = [];
    for (const c of this.cubies) {
      const coord = this.layerCoord(c, move.axis);
      if (move.layers.includes(coord)) moving.push(c);
    }
    return moving;
  }

  /** Snap a cubie's current cubeRoot-space position along `axis` to {-1, 0, 1}. */
  private layerCoord(c: THREE.Group, axis: 'x' | 'y' | 'z'): -1 | 0 | 1 {
    const v = axis === 'x' ? c.position.x : axis === 'y' ? c.position.y : c.position.z;
    const r = Math.round(v / STEP);
    return (r < 0 ? -1 : r > 0 ? 1 : 0) as -1 | 0 | 1;
  }

  private axisVec(axis: 'x' | 'y' | 'z'): THREE.Vector3 {
    if (axis === 'x') return new THREE.Vector3(1, 0, 0);
    if (axis === 'y') return new THREE.Vector3(0, 1, 0);
    return new THREE.Vector3(0, 0, 1);
  }

  /** Total rotation angle for a move. Uses the same convention as the
   *  permutation tables: a single-layer face turn is CW when viewed from
   *  the +axis end (which is the natural face direction for U/R/F and the
   *  inverse direction for D/L/B). For multi-layer composites, the rotation
   *  is uniform CW from +axis. */
  private angleFor(move: Move): number {
    // CW from +axis is a negative rotation in three.js's right-hand convention.
    const quarter = -Math.PI / 2;
    // For single-layer face turns at layer -1 (D/L/B), the natural turn
    // direction is the OPPOSITE of CW-from-+axis. So flip the sign for them.
    let sign = 1;
    if (move.layers.length === 1) {
      const layer = move.layers[0];
      if (layer === -1) sign = -1;
      // Slice at layer 0: M follows L (-1 dir), E follows D (-1 dir), S follows F (+1 dir)
      if (layer === 0) {
        if (move.axis === 'x') sign = -1; // M follows L
        else if (move.axis === 'y') sign = -1; // E follows D
        // S follows F (+axis); leave sign = 1
      }
    }
    const base = quarter * sign;
    if (move.turns === 1) return base;
    if (move.turns === 2) return base * 2;
    return -base;
  }

  // -------------------------------------------------------------------------
  // Camera + render loop
  // -------------------------------------------------------------------------

  private applyCamera(): void {
    const x = this.radius * Math.cos(this.elevation) * Math.cos(this.azimuth);
    const y = this.radius * Math.sin(this.elevation);
    const z = this.radius * Math.cos(this.elevation) * Math.sin(this.azimuth);
    this.camera.position.set(x, y, z);
    this.camera.lookAt(0, 0, 0);
    // Counter-rotate the studio + env map by the azimuth delta so that, from
    // the camera's POV, the lighting and shadow stay locked to the same
    // screen direction — only the cube appears to spin.
    const delta = this.azimuth - CubeScene.INITIAL_AZIMUTH;
    this.studio.rotation.y = delta;
    this.scene.environmentRotation.y = delta;
    this.markDirty();
  }

  private markDirty(): void {
    this.dirty = true;
  }

  private handleResize(): void {
    const { width, height } = this.mount.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    this.renderer.setSize(width, height, true);
    const aspect = width / height;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();

    // Fit the cube's bounding sphere within both the vertical and horizontal
    // frustum planes. Vertical FOV is fixed; horizontal FOV scales with aspect.
    // For aspect < 1 (portrait), horizontal is the binding constraint.
    const halfVFov = THREE.MathUtils.degToRad(this.camera.fov) / 2;
    const fitV = (CUBE_BOUND_RADIUS * CAMERA_FIT_MARGIN) / Math.tan(halfVFov);
    const fitH = fitV / aspect;
    this.radius = Math.max(fitV, fitH);

    this.applyCamera();
  }

  private startRenderLoop(): void {
    const loop = () => {
      if (this.dirty) {
        this.renderer.render(this.scene, this.camera);
        this.dirty = false;
      }
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  // -------------------------------------------------------------------------
  // Pointer interaction
  // -------------------------------------------------------------------------

  private onPointerDown(e: PointerEvent): void {
    if (this.activePointerId !== null) return;
    this.activePointerId = e.pointerId;
    this.renderer.domElement.setPointerCapture(e.pointerId);
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragMode = 'pending';
    if (!this.animating) {
      const hit = this.raycastSticker(e);
      if (hit) {
        this.hitFaceNormal = hit.normal;
        this.hitCubieCoord = hit.cubie;
      } else {
        this.hitFaceNormal = null;
        this.hitCubieCoord = null;
      }
    }
  }

  private onPointerMove(e: PointerEvent): void {
    if (this.activePointerId !== e.pointerId) return;
    if (this.dragMode === 'none') return;
    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;
    if (this.dragMode === 'pending') {
      const dist = Math.hypot(dx, dy);
      if (dist < 8) return;
      this.dragMode = this.hitFaceNormal && this.hitCubieCoord ? 'layer' : 'orbit';
    }
    if (this.dragMode === 'orbit') {
      this.azimuth += dx * 0.008;
      this.elevation = Math.max(-1.45, Math.min(1.45, this.elevation + dy * 0.008));
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.applyCamera();
    }
  }

  private onPointerUp(e: PointerEvent): void {
    if (this.activePointerId !== e.pointerId) return;
    try {
      this.renderer.domElement.releasePointerCapture(e.pointerId);
    } catch {
      // Element may already have lost capture; ignore.
    }
    if (this.dragMode === 'layer') {
      this.commitLayerDrag(e);
    }
    this.dragMode = 'none';
    this.hitFaceNormal = null;
    this.hitCubieCoord = null;
    this.activePointerId = null;
  }

  private raycastSticker(
    e: PointerEvent,
  ): { normal: THREE.Vector3; cubie: { x: number; y: number; z: number } } | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, this.camera);
    const candidates = this.stickers.filter(Boolean);
    const hits = raycaster.intersectObjects(candidates, false);
    for (const h of hits) {
      const obj = h.object;
      if (!obj.userData?.isSticker) continue;
      const cubie = obj.parent;
      if (!cubie) continue;
      const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(
        obj.getWorldQuaternion(new THREE.Quaternion()),
      );
      // Use the cubie's CURRENT position (snapped to layer indices), not its
      // userData (which is the original solved-state position and goes stale
      // after the first turn).
      return {
        normal,
        cubie: {
          x: this.layerCoord(cubie as THREE.Group, 'x'),
          y: this.layerCoord(cubie as THREE.Group, 'y'),
          z: this.layerCoord(cubie as THREE.Group, 'z'),
        },
      };
    }
    return null;
  }

  private commitLayerDrag(e: PointerEvent): void {
    if (!this.hitFaceNormal || !this.hitCubieCoord) return;
    if (this.animating) return;
    const dx = e.clientX - this.dragStartX;
    const dy = e.clientY - this.dragStartY;
    if (Math.hypot(dx, dy) < 8) return;

    // Snap face normal to the dominant axis.
    const n = this.hitFaceNormal;
    const ax = Math.abs(n.x);
    const ay = Math.abs(n.y);
    const az = Math.abs(n.z);
    let faceAxis: 'x' | 'y' | 'z';
    let faceSign: 1 | -1;
    if (ax >= ay && ax >= az) {
      faceAxis = 'x';
      faceSign = n.x > 0 ? 1 : -1;
    } else if (ay >= az) {
      faceAxis = 'y';
      faceSign = n.y > 0 ? 1 : -1;
    } else {
      faceAxis = 'z';
      faceSign = n.z > 0 ? 1 : -1;
    }

    // Two in-face tangent axes (the axes perpendicular to faceAxis).
    const tangents: { axis: 'x' | 'y' | 'z'; vec: THREE.Vector3 }[] =
      faceAxis === 'x'
        ? [
            { axis: 'y', vec: new THREE.Vector3(0, 1, 0) },
            { axis: 'z', vec: new THREE.Vector3(0, 0, 1) },
          ]
        : faceAxis === 'y'
          ? [
              { axis: 'x', vec: new THREE.Vector3(1, 0, 0) },
              { axis: 'z', vec: new THREE.Vector3(0, 0, 1) },
            ]
          : [
              { axis: 'x', vec: new THREE.Vector3(1, 0, 0) },
              { axis: 'y', vec: new THREE.Vector3(0, 1, 0) },
            ];

    // Project both tangents to screen (y inverted), score with drag direction.
    let bestIdx = 0;
    let bestSigned = 0;
    for (let i = 0; i < tangents.length; i++) {
      const projected = tangents[i].vec.clone().project(this.camera);
      const sx = projected.x;
      const sy = -projected.y;
      const score = sx * dx + sy * dy;
      if (Math.abs(score) > Math.abs(bestSigned)) {
        bestIdx = i;
        bestSigned = score;
      }
    }
    const tangentAxis = tangents[bestIdx].axis;
    const tangentSign = bestSigned > 0 ? 1 : -1;

    // The rotation axis is the third axis (perpendicular to face and tangent).
    const allAxes: ('x' | 'y' | 'z')[] = ['x', 'y', 'z'];
    const rotAxis = allAxes.find((a) => a !== faceAxis && a !== tangentAxis)!;
    const layer = this.hitCubieCoord[rotAxis] as -1 | 0 | 1;

    // Predict the visual angle that a `turns: 1` move at this (rotAxis, layer)
    // would actually produce. `angleFor` flips sign for L/D/B/M/E layers (so
    // that "turns: 1" matches WCA notation, not "CW around +axis"), which
    // breaks any naive CCW/CW reasoning. Pick whichever of {1, 3} makes the
    // sticker move in the same tangent direction the user dragged.
    const cross = this.crossSign(faceAxis, tangentAxis, rotAxis);
    const probeAngleSign: 1 | -1 =
      this.angleFor({ axis: rotAxis, layers: [layer], turns: 1, notation: '' }) < 0 ? -1 : 1;
    // For a point at faceSign·faceAxis_hat, rotating by `angle` around +rotAxis
    // yields velocity along tangentAxis with sign = sign(angle) · faceSign · cross.
    const expectedTangentSign = probeAngleSign * faceSign * cross;
    const turns: 1 | 3 = expectedTangentSign === tangentSign ? 1 : 3;

    if (this.onLayerMove) {
      this.onLayerMove({
        axis: rotAxis,
        layers: [layer],
        turns,
        notation: '',
      });
    }
  }

  /** Sign of the rotAxis component of (faceAxis × tangentAxis). */
  private crossSign(
    faceAxis: 'x' | 'y' | 'z',
    tangentAxis: 'x' | 'y' | 'z',
    rotAxis: 'x' | 'y' | 'z',
  ): 1 | -1 {
    const order: Record<'x' | 'y' | 'z', number> = { x: 0, y: 1, z: 2 };
    // Standard cyclic order: x×y=z, y×z=x, z×x=y → +1.
    // Reverse order is -1.
    const a = order[faceAxis];
    const b = order[tangentAxis];
    // Compute (a, b, target) and check if it's a cyclic permutation of (0, 1, 2).
    const cyclic = (a + 1) % 3 === b;
    const expected = cyclic ? (a + 2) % 3 : (a + 1) % 3;
    if (expected !== order[rotAxis]) return cyclic ? 1 : -1; // shouldn't happen
    return cyclic ? 1 : -1;
  }

  // -------------------------------------------------------------------------
  // Cleanup
  // -------------------------------------------------------------------------

  public dispose(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.resizeObserver.disconnect();
    const el = this.renderer.domElement;
    el.removeEventListener('pointerdown', this.boundPointerDown);
    el.removeEventListener('pointermove', this.boundPointerMove);
    el.removeEventListener('pointerup', this.boundPointerUp);
    el.removeEventListener('pointercancel', this.boundPointerUp);
    this.envTexture?.dispose();
    this.envTexture = null;
    this.scene.environment = null;
    this.renderer.dispose();
    el.remove();
  }
}
