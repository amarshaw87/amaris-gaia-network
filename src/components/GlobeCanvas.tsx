'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function RotatingEarth() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group>
      {/* Earth Core Sphere */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0f172a"
          emissive="#0284c7"
          emissiveIntensity={0.2}
          roughness={0.8}
          metalness={0.2}
          wireframe={false}
        />
      </Sphere>

      {/* Atmospheric Cloud Layer */}
      <Sphere ref={cloudsRef} args={[2.05, 32, 32]}>
        <meshStandardMaterial
          color="#38bdf8"
          transparent={true}
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Orbit Glow Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.3, 2.35, 64]} />
        <meshBasicMaterial color="#06b6d4" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <div className="w-full h-72 rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-black via-blue-950/40 to-black shadow-[0_0_35px_rgba(6,182,212,0.2)] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <RotatingEarth />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-center">
        <span className="text-[10px] font-mono tracking-widest text-cyan-300 bg-black/60 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
          🛰️ REAL-TIME 3D SPINNING EARTH & TELEMETRY ACTIVE
        </span>
      </div>
    </div>
  );
}
