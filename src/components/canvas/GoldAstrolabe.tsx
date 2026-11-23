'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface GoldAstrolabeProps {
  radius?: number;
  speed?: number;
  showGlassOrbs?: boolean; // Kept for API compatibility, renders lightweight gold satellite beads
}

export function GoldAstrolabe({
  radius = 2.2,
  speed = 1.0,
  showGlassOrbs = false,
}: GoldAstrolabeProps) {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const orbsGroupRef = useRef<THREE.Group>(null);

  // High-performance Brushed Champagne Gold Material (MeshStandardMaterial - No expensive glass transmission passes)
  const goldMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#D1A748'),
      metalness: 0.92,
      roughness: 0.22,
      emissive: new THREE.Color('#2A1C06'),
      emissiveIntensity: 0.12,
    });
  }, []);

  // Geometries memoized with low poly count for maximum 60fps fluidity
  const outerTorus = useMemo(() => new THREE.TorusGeometry(radius, 0.014, 16, 72), [radius]);
  const innerTorus = useMemo(() => new THREE.TorusGeometry(radius * 0.82, 0.011, 16, 64), [radius]);
  const beadGeometry = useMemo(() => new THREE.SphereGeometry(0.08, 14, 14), []);

  useFrame((_, delta) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.22 * speed;
      outerRingRef.current.rotation.y += delta * 0.3 * speed;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y -= delta * 0.28 * speed;
      innerRingRef.current.rotation.z += delta * 0.18 * speed;
    }
    if (orbsGroupRef.current) {
      orbsGroupRef.current.rotation.y += delta * 0.35 * speed;
    }
  });

  return (
    <group>
      {/* Outer Astrolabe Ring */}
      <mesh
        ref={outerRingRef}
        geometry={outerTorus}
        material={goldMaterial}
        rotation={[Math.PI / 4, Math.PI / 6, 0]}
      />

      {/* Inner Tilted Astrolabe Ring */}
      <mesh
        ref={innerRingRef}
        geometry={innerTorus}
        material={goldMaterial}
        rotation={[-Math.PI / 3, 0, Math.PI / 5]}
      />

      {/* Lightweight Gold Astrolabe Satellite Beads (Zero GPU Glass penalty) */}
      {showGlassOrbs && (
        <group ref={orbsGroupRef}>
          <mesh
            geometry={beadGeometry}
            material={goldMaterial}
            position={[radius * 0.85, 0.3, 0.2]}
          />
          <mesh
            geometry={beadGeometry}
            material={goldMaterial}
            position={[-radius * 0.75, -0.4, -0.3]}
            scale={0.8}
          />
        </group>
      )}
    </group>
  );
}
