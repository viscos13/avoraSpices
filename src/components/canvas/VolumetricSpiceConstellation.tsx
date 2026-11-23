'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export type SpiceKey = 'cardamom' | 'pepper' | 'clove';

export const SPICE_TEXTURES: Record<
  SpiceKey,
  { hero: string; single: string; glowColor: string; particleColor: string }
> = {
  cardamom: {
    hero: '/images/spices/cardamom-hero.png',
    single: '/images/spices/cardamom-single.png',
    glowColor: '#3D6B4F',
    particleColor: '#B89B4C',
  },
  pepper: {
    hero: '/images/spices/pepper-hero.png',
    single: '/images/spices/pepper-single.png',
    glowColor: '#4A443F',
    particleColor: '#C9963B',
  },
  clove: {
    hero: '/images/spices/clove-hero.png',
    single: '/images/spices/clove-single.png',
    glowColor: '#8B4A2B',
    particleColor: '#D48A3B',
  },
};

interface SatelliteConfig {
  radiusX: number;
  radiusY: number;
  radiusZ: number;
  speed: number;
  phase: number;
  tilt: number;
  scale: number;
  spinSpeed: number;
  yOffset: number;
}

interface VolumetricSpiceConstellationProps {
  spice: SpiceKey;
  spreadFactor?: React.MutableRefObject<number>;
  heroScale?: number;
  satelliteCount?: number;
  showFloorShadow?: boolean;
}

export default function VolumetricSpiceConstellation({
  spice,
  spreadFactor,
  heroScale = 2.55,
  satelliteCount = 9,
  showFloorShadow = true,
}: VolumetricSpiceConstellationProps) {
  const config = SPICE_TEXTURES[spice] ?? SPICE_TEXTURES.cardamom;
  const [heroTex, singleTex] = useTexture([config.hero, config.single]);

  useEffect(() => {
    heroTex.colorSpace = THREE.SRGBColorSpace;
    singleTex.colorSpace = THREE.SRGBColorSpace;
    heroTex.anisotropy = 8;
    singleTex.anisotropy = 8;
    heroTex.needsUpdate = true;
    singleTex.needsUpdate = true;
  }, [heroTex, singleTex]);

  const heroMeshRef = useRef<THREE.Mesh>(null);
  const shadowMeshRef = useRef<THREE.Mesh>(null);
  const satelliteRefs = useRef<(THREE.Mesh | null)[]>([]);

  const shadowTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(
        size / 2,
        size / 2,
        8,
        size / 2,
        size / 2,
        size / 2
      );
      grad.addColorStop(0, 'rgba(30, 24, 18, 0.22)');
      grad.addColorStop(0.45, 'rgba(30, 24, 18, 0.09)');
      grad.addColorStop(1, 'rgba(30, 24, 18, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useEffect(() => {
    return () => {
      shadowTexture?.dispose();
    };
  }, [shadowTexture]);

  const satellites = useMemo<SatelliteConfig[]>(() => {
    const items: SatelliteConfig[] = [];
    for (let i = 0; i < satelliteCount; i++) {
      const ratio = i / satelliteCount;
      const tier = i % 3;
      items.push({
        radiusX: 1.55 + tier * 0.42 + (i % 2) * 0.18,
        radiusY: 0.45 + tier * 0.28,
        radiusZ: 1.15 + tier * 0.38,
        speed: (0.28 + tier * 0.09) * (i % 2 === 0 ? 1 : -0.82),
        phase: ratio * Math.PI * 2,
        tilt: (i % 2 === 0 ? 1 : -1) * (0.22 + tier * 0.16),
        scale: 0.42 + (i % 3) * 0.13,
        spinSpeed: (i % 2 === 0 ? 1 : -1) * (0.35 + (i % 4) * 0.14),
        yOffset: (tier - 1) * 0.34,
      });
    }
    return items;
  }, [satelliteCount]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const t = state.clock.getElapsedTime();
    const spread = spreadFactor ? spreadFactor.current : 1;

    if (heroMeshRef.current) {
      const floatY = Math.sin(t * 1.15) * 0.11;
      const floatX = Math.cos(t * 0.75) * 0.05;

      heroMeshRef.current.position.y = THREE.MathUtils.lerp(
        heroMeshRef.current.position.y,
        floatY,
        dt * 4
      );
      heroMeshRef.current.position.x = THREE.MathUtils.lerp(
        heroMeshRef.current.position.x,
        floatX,
        dt * 4
      );

      heroMeshRef.current.quaternion.copy(state.camera.quaternion);
      heroMeshRef.current.rotateX(-state.pointer.y * 0.12 + Math.sin(t * 0.7) * 0.04);
      heroMeshRef.current.rotateY(state.pointer.x * 0.15 + Math.cos(t * 0.55) * 0.05);
      heroMeshRef.current.rotateZ(Math.sin(t * 0.5) * 0.04);

      if (shadowMeshRef.current) {
        const shadowScale = 2.6 - floatY * 1.2;
        shadowMeshRef.current.scale.set(shadowScale, shadowScale * 0.45, 1);
      }
    }

    satellites.forEach((sat, idx) => {
      const mesh = satelliteRefs.current[idx];
      if (!mesh) return;

      const angle = sat.phase + t * sat.speed;
      const x = Math.cos(angle) * sat.radiusX * spread;
      const z = Math.sin(angle) * sat.radiusZ * spread;
      const y =
        Math.sin(angle * 1.3 + sat.tilt) * sat.radiusY * spread +
        sat.yOffset +
        Math.cos(t * 0.9 + sat.phase) * 0.08;

      mesh.position.set(x, y, z);
      mesh.quaternion.copy(state.camera.quaternion);
      mesh.rotateZ(sat.phase + t * sat.spinSpeed);

      const depthBoost = THREE.MathUtils.mapLinear(z, -1.8, 1.8, 0.72, 1.22);
      const finalScale = sat.scale * depthBoost;
      mesh.scale.set(finalScale, finalScale, 1);
    });
  });

  return (
    <group>
      <mesh ref={heroMeshRef} position={[0, 0, 0]}>
        <planeGeometry args={[heroScale, heroScale]} />
        <meshBasicMaterial
          map={heroTex}
          transparent
          alphaTest={0.12}
          depthWrite={true}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {satellites.map((sat, idx) => (
        <mesh
          key={idx}
          ref={(el) => {
            satelliteRefs.current[idx] = el;
          }}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={singleTex}
            transparent
            alphaTest={0.12}
            depthWrite={true}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {showFloorShadow && shadowTexture && (
        <mesh
          ref={shadowMeshRef}
          position={[0, -1.78, -0.2]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[1.4, 1.4]} />
          <meshBasicMaterial
            map={shadowTexture}
            transparent
            depthWrite={false}
            opacity={0.85}
          />
        </mesh>
      )}
    </group>
  );
}
