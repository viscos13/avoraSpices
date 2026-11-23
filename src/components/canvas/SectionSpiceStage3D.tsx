'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import VolumetricSpiceConstellation, {
  SPICE_TEXTURES,
  SpiceKey,
} from './VolumetricSpiceConstellation';
import InteractiveAromaParticles from './InteractiveAromaParticles';
import ErrorBoundary from './ErrorBoundary';

interface SectionSpiceStage3DProps {
  spice?: SpiceKey;
  spiceId?: SpiceKey;
  direction?: 'left-to-center' | 'right-to-left' | 'left' | 'right';
}

function ScrollChoreographedSpice({
  spice,
  enterFrom,
  containerRef,
}: {
  spice: SpiceKey;
  enterFrom: 'left' | 'right';
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const rigRef = useRef<THREE.Group>(null);
  const spreadRef = useRef<number>(1.35);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const rig = rigRef.current;
    const el = containerRef.current;
    if (!rig || !el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const rawProgress = (vh - rect.top) / (vh + rect.height);
    const p = THREE.MathUtils.clamp(rawProgress, 0, 1);

    const entryEase = THREE.MathUtils.smoothstep(p, 0.05, 0.44);
    const exitEase = THREE.MathUtils.smoothstep(p, 0.78, 1.0);

    const startX = enterFrom === 'left' ? -2.4 : 2.4;
    const exitX = enterFrom === 'left' ? 0.55 : -0.55;

    const targetX =
      THREE.MathUtils.lerp(startX, 0, entryEase) +
      THREE.MathUtils.lerp(0, exitX, exitEase);

    const targetY = (0.5 - p) * 0.45;
    const targetScale =
      THREE.MathUtils.lerp(0.68, 1.04, entryEase) *
      THREE.MathUtils.lerp(1, 0.9, exitEase);

    const targetSpread = THREE.MathUtils.lerp(1.55, 1.0, entryEase);
    spreadRef.current = THREE.MathUtils.lerp(spreadRef.current, targetSpread, dt * 4);

    rig.position.x = THREE.MathUtils.lerp(rig.position.x, targetX, dt * 4.5);
    rig.position.y = THREE.MathUtils.lerp(rig.position.y, targetY, dt * 4.5);
    const nextScale = THREE.MathUtils.lerp(rig.scale.x, targetScale, dt * 4.5);
    rig.scale.set(nextScale, nextScale, nextScale);

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.35,
      dt * 2.5
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.25,
      dt * 2.5
    );
    state.camera.lookAt(0, 0, 0);
  });

  const spiceCfg = SPICE_TEXTURES[spice] ?? SPICE_TEXTURES.cardamom;

  return (
    <group ref={rigRef} scale={[0.75, 0.75, 0.75]}>
      <VolumetricSpiceConstellation
        heroScale={2.65}
        satelliteCount={9}
        showFloorShadow={true}
        spice={spice}
        spreadFactor={spreadRef}
      />
      <InteractiveAromaParticles
        color={spiceCfg.particleColor}
        count={42}
        radius={2.7}
        speed={0.24}
      />
    </group>
  );
}

export default function SectionSpiceStage3D({
  spice,
  spiceId,
  direction = 'left-to-center',
}: SectionSpiceStage3DProps) {
  const activeSpice: SpiceKey = spice ?? spiceId ?? 'cardamom';
  const enterFrom: 'left' | 'right' =
    direction === 'right-to-left' || direction === 'right' ? 'right' : 'left';

  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[490px] lg:h-[540px] select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <ErrorBoundary>
        <Canvas
          frameloop={inView ? 'always' : 'never'}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.1, 6.2], fov: 40 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.NoToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <Suspense fallback={null}>
            <ScrollChoreographedSpice
              containerRef={containerRef}
              enterFrom={enterFrom}
              spice={activeSpice}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export { SectionSpiceStage3D };

