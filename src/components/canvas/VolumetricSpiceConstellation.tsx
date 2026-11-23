'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';

interface VolumetricSpiceConstellationProps {
  spiceType: 'cardamom' | 'pepper' | 'clove';
  scale?: number;
}

const SPICE_TEXTURE_PATHS = {
  cardamom: {
    hero: '/images/spices/cardamom-hero.png',
    single: '/images/spices/cardamom-single.png',
  },
  pepper: {
    hero: '/images/spices/pepper-hero.png',
    single: '/images/spices/pepper-single.png',
  },
  clove: {
    hero: '/images/spices/clove-hero.png',
    single: '/images/spices/clove-single.png',
  },
};

export function VolumetricSpiceConstellation({
  spiceType,
  scale = 1.0,
}: VolumetricSpiceConstellationProps) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const heroMeshRef = useRef<THREE.Mesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);
  const flybyGroupRef = useRef<THREE.Group>(null);

  const paths = SPICE_TEXTURE_PATHS[spiceType];
  const [heroTexture, singleTexture] = useLoader(THREE.TextureLoader, [paths.hero, paths.single]);

  // Ensure true sRGB Color Space and high fidelity texture filtering (zero bleaching)
  useMemo(() => {
    heroTexture.colorSpace = THREE.SRGBColorSpace;
    heroTexture.generateMipmaps = true;
    heroTexture.minFilter = THREE.LinearMipmapLinearFilter;
    singleTexture.colorSpace = THREE.SRGBColorSpace;
    singleTexture.generateMipmaps = true;
    singleTexture.minFilter = THREE.LinearMipmapLinearFilter;
  }, [heroTexture, singleTexture]);

  // Materials with unbleached vibrant rendering (toneMapped: false)
  const heroMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: heroTexture,
      transparent: true,
      alphaTest: 0.04,
      depthWrite: false,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }, [heroTexture]);

  const singleMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: singleTexture,
      transparent: true,
      alphaTest: 0.04,
      depthWrite: false,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }, [singleTexture]);

  // Pre-calculated orbital satellite positions in 3D (bounded z from -0.8 to +0.6)
  const satellites = useMemo(() => {
    const list = [];
    const count = 5;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radiusX = 1.4 + Math.sin(i * 1.5) * 0.25;
      const radiusY = 1.1 + Math.cos(i * 1.8) * 0.2;
      const z = -0.7 + (i / count) * 1.3;
      list.push({
        x: Math.cos(angle) * radiusX,
        y: Math.sin(angle) * radiusY,
        z,
        scale: 0.45 + (i % 3) * 0.1,
        rotationZ: (i * Math.PI) / 3,
      });
    }
    return list;
  }, []);

  // Pre-calculated foreground cinematic fly-by pieces
  const flybyPieces = useMemo(
    () => [
      { x: -1.6, y: -0.9, z: 1.2, scale: 0.55, rot: 0.4 },
      { x: 1.6, y: 1.0, z: 1.3, scale: 0.6, rot: -0.5 },
    ],
    []
  );

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const ptr = state.pointer;

    // Smooth magnetic tilt toward user cursor
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        mainGroupRef.current.rotation.x,
        -ptr.y * 0.18,
        delta * 3.0
      );
      mainGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        mainGroupRef.current.rotation.y,
        ptr.x * 0.24,
        delta * 3.0
      );
    }

    // Hero cluster gentle floating breathing
    if (heroMeshRef.current) {
      heroMeshRef.current.position.y = Math.sin(time * 1.1) * 0.06;
      heroMeshRef.current.rotation.z = Math.sin(time * 0.7) * 0.03;
    }

    // Smooth continuous auto-rotation of orbiting pieces
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.z += delta * 0.14;
      orbitGroupRef.current.rotation.y = Math.sin(time * 0.4) * 0.12;
    }

    // Fly-by foreground parallax response
    if (flybyGroupRef.current) {
      flybyGroupRef.current.position.x = ptr.x * 0.25;
      flybyGroupRef.current.position.y = ptr.y * 0.2;
    }
  });

  return (
    <group ref={mainGroupRef} scale={[scale, scale, scale]}>
      {/* 1. Centre Hero Cluster (z = 0) */}
      <mesh ref={heroMeshRef} material={heroMaterial} position={[0, 0, 0]}>
        <planeGeometry args={[2.5, 2.5]} />
      </mesh>

      {/* 2. Mid-Depth Orbiting Satellite Spices */}
      <group ref={orbitGroupRef}>
        {satellites.map((sat, idx) => (
          <mesh
            key={`orbit-${idx}`}
            material={singleMaterial}
            position={[sat.x, sat.y, sat.z]}
            rotation={[0, 0, sat.rotationZ]}
            scale={[sat.scale, sat.scale, 1]}
          >
            <planeGeometry args={[1.5, 1.5]} />
          </mesh>
        ))}
      </group>

      {/* 3. Foreground Cinematic Fly-By Spices */}
      <group ref={flybyGroupRef}>
        {flybyPieces.map((fly, idx) => (
          <mesh
            key={`fly-${idx}`}
            material={singleMaterial}
            position={[fly.x, fly.y, fly.z]}
            rotation={[0, 0, fly.rot]}
            scale={[fly.scale, fly.scale, 1]}
          >
            <planeGeometry args={[1.5, 1.5]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
