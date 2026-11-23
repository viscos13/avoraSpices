'use client';

import React, { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { VolumetricSpiceConstellation } from './VolumetricSpiceConstellation';
import { GoldAstrolabe } from './GoldAstrolabe';
import { InteractiveAromaParticles } from './InteractiveAromaParticles';
import { CanvasErrorBoundary } from './ErrorBoundary';

interface ProductsPedestal3DProps {
  spiceType: 'cardamom' | 'pepper' | 'clove';
}

function PedestalScene({ spiceType }: { spiceType: 'cardamom' | 'pepper' | 'clove' }) {
  const plinthRef = useRef<THREE.Group>(null);
  const spiceRotRef = useRef<THREE.Group>(null);

  // Architectural Travertine / Brushed Gold Plinth Materials
  const travertineMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F0EAE1'),
      roughness: 0.65,
      metalness: 0.08,
    });
  }, []);

  const goldRimMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#D1A748'),
      metalness: 0.92,
      roughness: 0.22,
    });
  }, []);

  useFrame((state, delta) => {
    if (plinthRef.current) {
      plinthRef.current.rotation.y += delta * 0.12;
    }
    if (spiceRotRef.current) {
      spiceRotRef.current.rotation.y += delta * 0.16;
      // Gentle vertical hover
      spiceRotRef.current.position.y = 0.35 + Math.sin(state.clock.elapsedTime * 1.1) * 0.05;
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Floating Volumetric Photorealistic Spice Cluster in 3D */}
      <group ref={spiceRotRef} position={[0, 0.35, 0]}>
        <VolumetricSpiceConstellation spiceType={spiceType} scale={1.05} />
      </group>

      {/* Orbiting Brushed Gold Astrolabe Gyroscope */}
      <group position={[0, 0.35, 0]}>
        <GoldAstrolabe radius={2.3} speed={0.8} showGlassOrbs={true} />
      </group>

      {/* Rotating Architectural Travertine Plinth Base */}
      <group ref={plinthRef} position={[0, -1.8, 0]}>
        {/* Upper Plinth Disc */}
        <mesh geometry={new THREE.CylinderGeometry(1.6, 1.7, 0.18, 36)} material={travertineMat} />
        {/* Gold Inlaid Accent Ring */}
        <mesh
          geometry={new THREE.CylinderGeometry(1.71, 1.71, 0.04, 36)}
          material={goldRimMat}
          position={[0, 0.08, 0]}
        />
        {/* Lower Stepped Foundation */}
        <mesh
          geometry={new THREE.CylinderGeometry(1.9, 2.0, 0.25, 36)}
          material={travertineMat}
          position={[0, -0.22, 0]}
        />
      </group>

      {/* Lightweight Shimmering Aroma Particle Cloud */}
      <InteractiveAromaParticles count={45} color="#E5A024" spread={4.8} />

      {/* Ground Contact Shadow */}
      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.3}
        scale={5.5}
        blur={2.2}
        far={3.8}
        color="#082920"
      />
    </group>
  );
}

export function ProductsPedestal3D({ spiceType }: ProductsPedestal3DProps) {
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
      className="relative w-full h-full min-h-[300px] sm:min-h-[440px] lg:min-h-[520px] flex items-center justify-center select-none pointer-events-auto"
      style={{ touchAction: 'pan-y' }}
    >
      <CanvasErrorBoundary>
        <Canvas
          frameloop={isInView ? 'always' : 'never'}
          camera={{ position: [0, 0.5, 5.8], fov: 46 }}
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
            <PedestalScene spiceType={spiceType} />
          </Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
