'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import InteractiveAromaParticles from './InteractiveAromaParticles';
import ErrorBoundary from './ErrorBoundary';

function HeroOrbitalCarousel() {
  const [
    cardamomHero,
    pepperHero,
    cloveHero,
    cardamomSingle,
    pepperSingle,
    cloveSingle,
  ] = useTexture([
    '/images/spices/cardamom-hero.png',
    '/images/spices/pepper-hero.png',
    '/images/spices/clove-hero.png',
    '/images/spices/cardamom-single.png',
    '/images/spices/pepper-single.png',
    '/images/spices/clove-single.png',
  ]);

  useEffect(() => {
    [
      cardamomHero,
      pepperHero,
      cloveHero,
      cardamomSingle,
      pepperSingle,
      cloveSingle,
    ].forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      tex.needsUpdate = true;
    });
  }, [
    cardamomHero,
    pepperHero,
    cloveHero,
    cardamomSingle,
    pepperSingle,
    cloveSingle,
  ]);

  const groupRef = useRef<THREE.Group>(null);
  const heroRefs = useRef<(THREE.Mesh | null)[]>([]);
  const accentRefs = useRef<(THREE.Mesh | null)[]>([]);

  const heroItems = useMemo(
    () => [
      { tex: cardamomHero, phase: 0, baseScale: 2.05 },
      { tex: pepperHero, phase: (Math.PI * 2) / 3, baseScale: 1.95 },
      { tex: cloveHero, phase: (Math.PI * 4) / 3, baseScale: 1.95 },
    ],
    [cardamomHero, pepperHero, cloveHero]
  );

  const accentPieces = useMemo(
    () => [
      { tex: cardamomSingle, radiusX: 2.45, radiusZ: 1.7, yBase: 0.95, phase: 0.4, speed: 0.42, scale: 0.55 },
      { tex: pepperSingle, radiusX: 2.35, radiusZ: 1.6, yBase: -0.85, phase: 1.5, speed: -0.36, scale: 0.48 },
      { tex: cloveSingle, radiusX: 2.55, radiusZ: 1.8, yBase: 0.25, phase: 2.7, speed: 0.38, scale: 0.52 },
      { tex: cardamomSingle, radiusX: 2.2, radiusZ: 1.5, yBase: -1.1, phase: 3.9, speed: -0.44, scale: 0.46 },
      { tex: pepperSingle, radiusX: 2.5, radiusZ: 1.75, yBase: 1.15, phase: 5.0, speed: 0.34, scale: 0.44 },
      { tex: cloveSingle, radiusX: 2.15, radiusZ: 1.4, yBase: -0.35, phase: 5.8, speed: -0.4, scale: 0.48 },
    ],
    [cardamomSingle, pepperSingle, cloveSingle]
  );

  const shadowTex = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
      grad.addColorStop(0, 'rgba(25, 20, 15, 0.16)');
      grad.addColorStop(0.55, 'rgba(25, 20, 15, 0.06)');
      grad.addColorStop(1, 'rgba(25, 20, 15, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => {
    return () => {
      shadowTex?.dispose();
    };
  }, [shadowTex]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const t = state.clock.getElapsedTime();

    const targetCamX = state.pointer.x * 0.45;
    const targetCamY = state.pointer.y * 0.32;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCamX, dt * 2.5);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCamY, dt * 2.5);
    state.camera.lookAt(0, 0, 0);

    heroItems.forEach((item, i) => {
      const mesh = heroRefs.current[i];
      if (!mesh) return;

      const angle = item.phase + t * 0.32;
      const x = Math.cos(angle) * 1.55;
      const z = Math.sin(angle) * 1.35;
      const y = Math.sin(angle + 0.6) * 0.48 + Math.cos(t * 0.9 + i) * 0.08;

      mesh.position.set(x, y, z);
      mesh.quaternion.copy(state.camera.quaternion);
      mesh.rotateZ(Math.sin(t * 0.55 + item.phase) * 0.08);

      const depthScale = THREE.MathUtils.mapLinear(z, -1.35, 1.35, 0.72, 1.18);
      const s = item.baseScale * depthScale;
      mesh.scale.set(s, s, 1);
    });

    accentPieces.forEach((piece, i) => {
      const mesh = accentRefs.current[i];
      if (!mesh) return;

      const angle = piece.phase + t * piece.speed;
      const x = Math.cos(angle) * piece.radiusX;
      const z = Math.sin(angle) * piece.radiusZ;
      const y = piece.yBase + Math.sin(t * 0.8 + piece.phase) * 0.22;

      mesh.position.set(x, y, z);
      mesh.quaternion.copy(state.camera.quaternion);
      mesh.rotateZ(piece.phase + t * piece.speed * 1.4);

      const depthScale = THREE.MathUtils.mapLinear(z, -1.8, 1.8, 0.7, 1.2);
      const s = piece.scale * depthScale;
      mesh.scale.set(s, s, 1);
    });
  });

  return (
    <group ref={groupRef}>
      {heroItems.map((item, idx) => (
        <mesh
          key={`hero-${idx}`}
          ref={(el) => {
            heroRefs.current[idx] = el;
          }}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={item.tex}
            transparent
            alphaTest={0.12}
            depthWrite={true}
            toneMapped={false}
          />
        </mesh>
      ))}

      {accentPieces.map((piece, idx) => (
        <mesh
          key={`accent-${idx}`}
          ref={(el) => {
            accentRefs.current[idx] = el;
          }}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={piece.tex}
            transparent
            alphaTest={0.12}
            depthWrite={true}
            toneMapped={false}
          />
        </mesh>
      ))}

      {shadowTex && (
        <mesh position={[0, -2.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4.6, 2.2]} />
          <meshBasicMaterial map={shadowTex} transparent depthWrite={false} />
        </mesh>
      )}

      <InteractiveAromaParticles count={50} radius={2.8} speed={0.22} />
    </group>
  );
}

export default function HeroTrioStage3D() {
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
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <ErrorBoundary>
        <Canvas
          frameloop={inView ? 'always' : 'never'}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.1, 6.8], fov: 40 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.NoToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
        >
          <Suspense fallback={null}>
            <HeroOrbitalCarousel />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export { HeroTrioStage3D };

