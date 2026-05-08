import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from '../../i18n';
import {
  METHODS,
  type Method,
  type MethodKey,
  type Stage,
} from '../../lib/cube/methods';
import type { CubeScene as CubeSceneT } from '../../lib/cube/scene';
import { solvedState } from '../../lib/cube/state';
import type { LearningMode } from '../../lib/cube/types';

const THUMB_PX = 220;

// Default camera orbit — mirrors CubeScene.INITIAL_AZIMUTH and the default
// elevation. Stages without a `view` override snap back to this so a previous
// stage's "from below" angle doesn't leak into the next render.
const DEFAULT_VIEW = {
  azimuth: Math.PI * 0.75,
  elevation: Math.atan(1 / Math.sqrt(2)),
};

interface Props {
  locale?: string;
}

function buildStageLearning(stage: Stage): LearningMode {
  return {
    enabled: true,
    hiddenColors: new Set(),
    hiddenFaces: new Set(),
    hiddenLayers: { x: new Set(), y: new Set(), z: new Set() },
    hiddenCubies: new Set(),
    highlightedCubies: new Set(),
    hiddenStickers: new Set(stage.hiddenStickers),
  };
}

function computeStageOffsets(method: Method): number[] {
  const offsets: number[] = [];
  let acc = 0;
  for (const stage of method.stages) {
    offsets.push(acc);
    acc += stage.views.length;
  }
  return offsets;
}

function totalThumbCount(method: Method): number {
  let n = 0;
  for (const stage of method.stages) n += stage.views.length;
  return n;
}

export default function MethodGuide({ locale }: Props) {
  const t = useTranslations(locale);
  const offscreenRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<CubeSceneT | null>(null);
  const thumbCanvasRefs = useRef<Array<HTMLCanvasElement | null>>([]);
  const [sceneReady, setSceneReady] = useState(false);
  const [methodKey, setMethodKey] = useState<MethodKey>('lbl');

  const currentMethod = METHODS.find((m) => m.key === methodKey)!;
  const stageOffsets = useMemo(() => computeStageOffsets(currentMethod), [currentMethod]);
  const thumbCount = useMemo(() => totalThumbCount(currentMethod), [currentMethod]);

  // Single offscreen scene for the lifetime of the page — tab switches just
  // re-render to it. Mounted once on first render of the section.
  useEffect(() => {
    const mount = offscreenRef.current;
    if (!mount) return;
    let cancelled = false;
    let scene: CubeSceneT | null = null;

    import('../../lib/cube/scene').then(({ CubeScene }) => {
      if (cancelled || !offscreenRef.current) return;
      scene = new CubeScene(offscreenRef.current);
      scene.reset(solvedState());
      sceneRef.current = scene;
      setSceneReady(true);
    });

    return () => {
      cancelled = true;
      setSceneReady(false);
      sceneRef.current = null;
      scene?.dispose();
    };
  }, []);

  // Render every (stage, view) pair to its own thumbnail. Camera angle is
  // applied per view so cross stages can show both a side and a from-below
  // shot. Re-runs on method switch.
  useEffect(() => {
    if (!sceneReady) return;
    const scene = sceneRef.current;
    if (!scene) return;

    let flatIdx = 0;
    for (const stage of currentMethod.stages) {
      const learning = buildStageLearning(stage);
      for (const view of stage.views) {
        const camera = view.view ?? DEFAULT_VIEW;
        scene.setView(camera.azimuth, camera.elevation);
        try {
          scene.renderStillFrame(solvedState(), learning);
        } catch {
          flatIdx++;
          continue;
        }
        const src = scene.getCanvas();
        const dst = thumbCanvasRefs.current[flatIdx];
        flatIdx++;
        if (!dst) continue;
        const ctx = dst.getContext('2d');
        if (!ctx) continue;
        ctx.clearRect(0, 0, dst.width, dst.height);
        ctx.drawImage(src, 0, 0, dst.width, dst.height);
      }
    }
  }, [sceneReady, currentMethod]);

  return (
    <>
      <div className="rc-method__tabs" role="tablist">
        {METHODS.map((m) => (
          <button
            key={m.key}
            type="button"
            role="tab"
            className="rc-method__tab"
            aria-selected={methodKey === m.key}
            onClick={() => setMethodKey(m.key)}
          >
            {t(`rubiksCube.methods.${m.key}.name`)}
          </button>
        ))}
      </div>

      <p className="rc-method__description">
        {t(`rubiksCube.methods.${methodKey}.description`)}
      </p>

      <div
        className="rc-method__stages"
        style={{ ['--total-thumbs' as string]: thumbCount }}
      >
        {currentMethod.stages.map((stage, sIdx) => {
          const startCol = stageOffsets[sIdx] + 1;
          const span = stage.views.length;
          return (
            <Fragment key={stage.key}>
              {stage.views.map((view, vIdx) => {
                const flatIdx = stageOffsets[sIdx] + vIdx;
                return (
                  <div
                    key={vIdx}
                    className="rc-method__thumb-wrap"
                    style={{ gridColumn: startCol + vIdx, gridRow: 1 }}
                  >
                    <canvas
                      ref={(el) => {
                        thumbCanvasRefs.current[flatIdx] = el;
                      }}
                      width={THUMB_PX}
                      height={THUMB_PX}
                      className="rc-method__thumb"
                    />
                    {view.subKey && (
                      <span className="rc-method__view-tag">
                        {t(`rubiksCube.methods.viewLabel.${view.subKey}`)}
                      </span>
                    )}
                  </div>
                );
              })}
              <div
                className="rc-method__stage-label"
                style={{
                  gridColumn: `${startCol} / span ${span}`,
                  gridRow: 2,
                }}
              >
                <span className="rc-method__stage-num">{sIdx + 1}</span>
                <span>{t(`rubiksCube.methods.${methodKey}.stages.${stage.key}`)}</span>
              </div>
            </Fragment>
          );
        })}
      </div>

      {/* Hidden offscreen WebGL host that drives the thumbnails. */}
      <div ref={offscreenRef} className="rc-method__offscreen" aria-hidden="true" />
    </>
  );
}
