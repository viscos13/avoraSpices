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

interface ProductsPedestal3DProps {
  spice?: SpiceKey;
  activeSpice?: SpiceKey;
}

function PedestalScene({ spice }: { spice: SpiceKey }) {
  const stageRef = useRef<THREE.Group>(null);
  const plinthRef = useRef<THREE.Group>(null);
  const spreadRef = useRef<number>(1.05);

  useEffect(() => {
    if (stageRef.current) {
      stageRef.current.scale.set(0.72, 0.72, 0.72);
    }
    spreadRef.current = 1.45;
  }, [spice]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);

    if (stageRef.current) {
      const s = THREE.MathUtils.lerp(stageRef.current.scale.x, 1, dt * 5);
      stageRef.current.scale.set(s, s, s);
    }
    spreadRef.current = THREE.MathUtils.lerp(spreadRef.current, 1.0, dt * 3.5);

    if (plinthRef.current) {
      plinthRef.current.rotation.y += dt * 0.18;
    }

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.5,
      dt * 2.5
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      0.25 + state.pointer.y * 0.3,
      dt * 2.5
    );
    state.camera.lookAt(0, -0.1, 0);
  });

  const spiceCfg = SPICE_TEXTURES[spice] ?? SPICE_TEXTURES.cardamom;

  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#FFF8EB" />
      <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#E6C687" />

      <group ref={stageRef} position={[0, 0.25, 0]}>
        <VolumetricSpiceConstellation
          heroScale={2.55}
          satelliteCount={10}
          showFloorShadow={true}
          spice={spice}
          spreadFactor={spreadRef}
        />
        <InteractiveAromaParticles
          color={spiceCfg.particleColor}
          count={45}
          radius={2.6}
          speed={0.25}
        />
      </group>

      <group ref={plinthRef} position={[0, -1.92, 0]}>
        <mesh>
          <cylinderGeometry args={[1.65, 1.78, 0.22, 64]} />
          <meshStandardMaterial color="#EFE8DC" roughness={0.65} metalness={0.05} />
        </mesh>
        <mesh position={[0, 0.115, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.64, 0.018, 16, 80]} />
          <meshStandardMaterial color="#C89B3C" roughness={0.25} metalness={0.85} />
        </mesh>
      </group>
    </>
  );
}

export default function ProductsPedestal3D({
  spice,
  activeSpice,
}: ProductsPedestal3DProps) {
  const currentSpice: SpiceKey = spice ?? activeSpice ?? 'cardamom';
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '150px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[440px] sm:h-[520px] select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <ErrorBoundary>
        <Canvas
          frameloop={inView ? 'always' : 'never'}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.25, 6.4], fov: 38 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.NoToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <Suspense fallback={null}>
            <PedestalScene spice={currentSpice} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export { ProductsPedestal3D };

