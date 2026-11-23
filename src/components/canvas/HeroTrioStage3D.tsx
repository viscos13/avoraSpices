'use client';

import React, { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { GoldAstrolabe } from './GoldAstrolabe';
import { InteractiveAromaParticles } from './InteractiveAromaParticles';
import { CanvasErrorBoundary } from './ErrorBoundary';

function HeroTrioMeshes() {
  const groupRef = useRef<THREE.Group>(null);
  const rotGroupRef = useRef<THREE.Group>(null);

  // Load all 3 flagship spice textures in parallel
  const [cardamomTex, pepperTex, cloveTex] = useLoader(THREE.TextureLoader, [
    '/images/spices/cardamom-hero.png',
    '/images/spices/pepper-hero.png',
    '/images/spices/clove-hero.png',
  ]);

  useMemo(() => {
    [cardamomTex, pepperTex, cloveTex].forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
    });
  }, [cardamomTex, pepperTex, cloveTex]);

  const cardamomMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: cardamomTex,
        transparent: true,
        alphaTest: 0.04,
        depthWrite: false,
        toneMapped: false,
        side: THREE.DoubleSide,
      }),
    [cardamomTex]
  );

  const pepperMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: pepperTex,
        transparent: true,
        alphaTest: 0.04,
        depthWrite: false,
        toneMapped: false,
        side: THREE.DoubleSide,
      }),
    [pepperTex]
  );

  const cloveMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: cloveTex,
        transparent: true,
        alphaTest: 0.04,
        depthWrite: false,
        toneMapped: false,
        side: THREE.DoubleSide,
      }),
    [cloveTex]
  );

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const ptr = state.pointer;

    if (groupRef.current) {
      // Gentle floating levitation
      groupRef.current.position.y = Math.sin(time * 0.9) * 0.05;
      // Soft cursor parallax tilt
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -ptr.y * 0.15, delta * 3.0);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, ptr.x * 0.2, delta * 3.0);
    }

    if (rotGroupRef.current) {
      // Smooth continuous auto-pilot orbit
      rotGroupRef.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Trio Spice Cluster with generous breathing room & zero crowding */}
      <group ref={rotGroupRef}>
        {/* 1. Green Cardamom (Top Left Anchor, spaced cleanly at x = -1.22, y = 0.72) */}
        <mesh material={cardamomMat} position={[-1.22, 0.72, 0.25]} rotation={[0, 0, -0.12]}>
          <planeGeometry args={[1.9, 1.9]} />
        </mesh>

        {/* 2. Tellicherry Black Pepper (Center Right Anchor, spaced cleanly at x = 1.18, y = -0.05) */}
        <mesh material={pepperMat} position={[1.18, -0.05, 0.38]} rotation={[0, 0, 0.15]}>
          <planeGeometry args={[1.8, 1.8]} />
        </mesh>

        {/* 3. Hand-Picked Whole Cloves (Bottom Anchor, spaced cleanly at x = -0.42, y = -1.02) */}
        <mesh material={cloveMat} position={[-0.42, -1.02, -0.2]} rotation={[0, 0, -0.2]}>
          <planeGeometry args={[1.85, 1.85]} />
        </mesh>
      </group>

      {/* Brushed Gold Astrolabe Gyroscope Rings with clean framing radius */}
      <GoldAstrolabe radius={2.65} speed={0.8} showGlassOrbs={true} />

      {/* Soft Contact Shadow at bottom */}
      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.25}
        scale={6.0}
        blur={2.2}
        far={4.0}
        color="#082920"
      />
    </group>
  );
}

export function HeroTrioStage3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

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
      className="relative w-full max-w-[360px] sm:max-w-[500px] h-[320px] sm:h-[460px] mx-auto select-none flex items-center justify-center pointer-events-auto"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Subtle warm halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3B2E]/6 via-[#C97E12]/5 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      <CanvasErrorBoundary>
        <Canvas
          frameloop={isInView ? 'always' : 'never'}
          camera={{ position: [0, 0, 6.2], fov: 44 }}
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
          {/* Natural Studio Daylight Lighting Foundation (Neutral, uncolored to preserve true spice photography) */}
          <ambientLight intensity={1.25} color="#FFFFFF" />
          <directionalLight position={[5, 6, 4]} intensity={2.0} color="#FFFFFF" />
          <directionalLight position={[-4, 3, -3]} intensity={1.0} color="#FAF8F5" />

          <Suspense fallback={null}>
            <HeroTrioMeshes />
            <InteractiveAromaParticles count={35} color="#E5A024" spread={5.0} />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
