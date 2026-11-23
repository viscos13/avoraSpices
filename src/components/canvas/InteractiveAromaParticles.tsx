'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface InteractiveAromaParticlesProps {
  count?: number;
  color?: string;
  secondaryColor?: string;
  radius?: number;
  speed?: number;
}

export default function InteractiveAromaParticles({
  count = 55,
  color = '#D49B35',
  secondaryColor = '#E8C57B',
  radius = 3.2,
  speed = 0.25,
}: InteractiveAromaParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const spriteTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(255, 245, 215, 0.75)');
      gradient.addColorStop(0.7, 'rgba(255, 230, 175, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 230, 175, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  const { positions, colors, seeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const seedArr = new Float32Array(count * 3);
    const c1 = new THREE.Color(color);
    const c2 = new THREE.Color(secondaryColor);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.6;
      const r = radius * (0.45 + Math.random() * 0.65);
      const y = (Math.random() - 0.5) * 3.4;

      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r * 0.75;

      const mix = Math.random();
      const chosen = c1.clone().lerp(c2, mix);
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;

      seedArr[i * 3] = angle;
      seedArr[i * 3 + 1] = r;
      seedArr[i * 3 + 2] = 0.5 + Math.random() * 1.2;
    }

    return { positions: pos, colors: col, seeds: seedArr };
  }, [count, color, secondaryColor, radius]);

  useEffect(() => {
    return () => {
      spriteTexture?.dispose();
    };
  }, [spriteTexture]);

  useFrame((state, delta) => {
    const pts = pointsRef.current;
    if (!pts) return;
    const clampedDelta = Math.min(delta, 0.05);
    const t = state.clock.getElapsedTime();
    const posAttr = pts.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const baseAngle = seeds[i * 3];
      const baseRadius = seeds[i * 3 + 1];
      const pace = seeds[i * 3 + 2];

      const a = baseAngle + t * speed * pace * 0.55;
      const targetX = Math.cos(a) * baseRadius + state.pointer.x * 0.25;
      const targetZ = Math.sin(a) * baseRadius * 0.75;

      arr[i * 3] = THREE.MathUtils.lerp(arr[i * 3], targetX, clampedDelta * 2.2);
      arr[i * 3 + 1] += clampedDelta * 0.14 * pace;
      if (arr[i * 3 + 1] > 2.1) arr[i * 3 + 1] = -2.1;
      arr[i * 3 + 2] = THREE.MathUtils.lerp(arr[i * 3 + 2], targetZ, clampedDelta * 2.2);
    }

    posAttr.needsUpdate = true;
  });

  if (!spriteTexture) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        map={spriteTexture}
        vertexColors
        transparent
        opacity={0.78}
        depthWrite={false}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
}
