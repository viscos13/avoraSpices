'use client';

import React, { Suspense, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { GoldAstrolabe } from './GoldAstrolabe';
import { InteractiveAromaParticles } from './InteractiveAromaParticles';
import { VolumetricSpiceConstellation } from './VolumetricSpiceConstellation';
import { CanvasErrorBoundary } from './ErrorBoundary';

interface SectionSpiceStage3DProps {
  spiceType: 'cardamom' | 'pepper' | 'clove';
  direction?: 'left-to-center' | 'right-to-center';
  scrollProgress: number; // 0.0 to 1.0 within dedicated section
}

function SectionScene({
  spiceType,
  scrollProgress,
}: {
  spiceType: 'cardamom' | 'pepper' | 'clove';
  scrollProgress: number;
}) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const astrolabeGroupRef = useRef<THREE.Group>(null);

  const particleColorMap = {
    cardamom: '#0B3B2E',
    pepper: '#C97E12',
    clove: '#8F3518',
  };

  useFrame((_, delta) => {
    if (!masterGroupRef.current) return;

    // Damped interpolation of scroll progress (0 to 1)
    const t = Math.max(0, Math.min(1, scrollProgress));
    const smoothT = Math.sin(t * Math.PI); // peak around 0.5 (in view)

    // Strict Zoom Cap: 0.82 to 1.04 (NEVER blows up)
    const targetScale = THREE.MathUtils.lerp(0.82, 1.04, smoothT);

    // Directional translation based on spice identity
    let targetX = 0;
    let targetY = 0;
    let targetRotY = 0;
    let targetRotZ = 0;

    if (spiceType === 'cardamom') {
      targetX = THREE.MathUtils.lerp(-1.4, 0.0, smoothT);
      targetY = THREE.MathUtils.lerp(-0.15, 0.0, smoothT);
      targetRotY = THREE.MathUtils.lerp(-0.5, 0.2, t);
    } else if (spiceType === 'pepper') {
      targetX = THREE.MathUtils.lerp(1.4, 0.0, smoothT);
      targetY = THREE.MathUtils.lerp(0.2, 0.0, smoothT);
      targetRotZ = THREE.MathUtils.lerp(0.6, -0.2, t);
      targetRotY = THREE.MathUtils.lerp(0.4, -0.3, t);
    } else {
      targetX = THREE.MathUtils.lerp(-1.2, 0.0, smoothT);
      targetY = THREE.MathUtils.lerp(-1.0, 0.0, smoothT);
      targetRotY = THREE.MathUtils.lerp(-0.3, 0.3, t);
    }

    masterGroupRef.current.position.x = THREE.MathUtils.lerp(
      masterGroupRef.current.position.x,
      targetX,
      delta * 4.0
    );
    masterGroupRef.current.position.y = THREE.MathUtils.lerp(
      masterGroupRef.current.position.y,
      targetY,
      delta * 4.0
    );
    masterGroupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      delta * 4.0
    );
    masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      masterGroupRef.current.rotation.y,
      targetRotY,
      delta * 3.5
    );
    masterGroupRef.current.rotation.z = THREE.MathUtils.lerp(
      masterGroupRef.current.rotation.z,
      targetRotZ,
      delta * 3.5
    );

    if (astrolabeGroupRef.current) {
      astrolabeGroupRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={masterGroupRef}>
      {/* Volumetric Spice Constellation */}
      <VolumetricSpiceConstellation spiceType={spiceType} scale={1.0} />

      {/* 3D Brushed Gold Astrolabe Gyroscope Rings */}
      <group ref={astrolabeGroupRef}>
        <GoldAstrolabe radius={2.2} speed={0.85} showGlassOrbs={true} />
      </group>

      {/* Lightweight Ambient Aroma Sparkles (max 45 particles) */}
      <InteractiveAromaParticles
        count={45}
        color={particleColorMap[spiceType]}
        spread={4.8}
      />

      {/* Ground Contact Shadow */}
      <ContactShadows
        position={[0, -2.0, 0]}
        opacity={0.28}
        scale={5.2}
        blur={2.4}
        far={3.8}
        color="#082920"
      />
    </group>
  );
}

export function SectionSpiceStage3D({
  spiceType,
  direction = 'left-to-center',
  scrollProgress,
}: SectionSpiceStage3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[440px] flex items-center justify-center select-none pointer-events-auto"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Soft warm ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3B2E]/6 via-[#C97E12]/5 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

      <CanvasErrorBoundary>
        <Canvas
          frameloop={isInView ? 'always' : 'never'}
          camera={{ position: [0, 0, 5.8], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            toneMapping: THREE.NoToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          style={{ touchAction: 'pan-y' }}
        >
          {/* Studio Balanced Daylight Lighting (Neutral to preserve authentic spice photography) */}
          <ambientLight intensity={1.25} color="#FFFFFF" />
          <directionalLight position={[4, 6, 4]} intensity={2.0} color="#FFFFFF" />
          <directionalLight position={[-4, 3, -3]} intensity={1.0} color="#FAF8F5" />

          <Suspense fallback={null}>
            <SectionScene
              spiceType={spiceType}
              scrollProgress={scrollProgress}
            />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
