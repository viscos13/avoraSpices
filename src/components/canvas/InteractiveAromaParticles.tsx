'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

interface AromaParticlesProps {
  count?: number;
  color?: string;
  spread?: number;
}

export function InteractiveAromaParticles({
  count = 45,
  color = '#E5A024',
  spread = 4.8,
}: AromaParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const actualCount = viewport.width < 7 ? Math.min(25, count) : Math.min(48, count);

  // Memoized positions and drift parameters
  const [positions, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3);
    const spd = new Float32Array(actualCount);
    const ph = new Float32Array(actualCount);

    for (let i = 0; i < actualCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * (spread * 0.85);
      pos[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.6);

      spd[i] = 0.25 + Math.random() * 0.35;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, spd, ph];
  }, [actualCount, spread]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < actualCount; i++) {
      const iy = i * 3 + 1;
      // Gentle natural hovering drift
      arr[iy] = positions[iy] + Math.sin(time * speeds[i] + phases[i]) * 0.12;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color={color}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
