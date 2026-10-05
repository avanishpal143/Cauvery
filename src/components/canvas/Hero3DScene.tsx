import React, { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { DosaPlate } from './DosaPlate';
import { SteamParticles } from './SteamParticles';
import { FloatingSpices } from './FloatingSpices';

interface Hero3DSceneProps {
  className?: string;
  onKatoriSelect?: (name: string) => void;
}

// Gentle mouse-follow camera rig
function CameraRig() {
  useFrame((state) => {
    // Smooth lerp camera slightly following pointer
    const targetX = state.pointer.x * 0.4;
    const targetY = 2.4 + state.pointer.y * 0.25;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, 0.1, 0);
  });
  return null;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({
  className = '',
  onKatoriSelect,
}) => {
  const [steamIntense, setSteamIntense] = useState(false);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKatoriClick = (name: string) => {
    setClickedItem(name);
    if (onKatoriSelect) onKatoriSelect(name);
    setTimeout(() => {
      setClickedItem(null);
    }, 2800);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] md:min-h-[520px] select-none ${className}`}
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2.5, 4.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <CameraRig />

          {/* Warm Studio Lighting */}
          <ambientLight intensity={1.2} color="#FFF8EB" />
          <directionalLight
            position={[5, 8, 4]}
            intensity={2.4}
            color="#FFF0D4"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight
            position={[-5, 4, -4]}
            intensity={1.0}
            color="#C6E6B8" // subtle leaf rim light
          />
          <pointLight position={[0, 2, 1]} intensity={1.4} color="#FFB852" />

          {/* Floating Curry Leaves & Spices in background */}
          <FloatingSpices count={20} />

          {/* South Indian Dosa & Idli Platter */}
          <DosaPlate
            onHoverDosa={(isHovered) => setSteamIntense(isHovered)}
            onKatoriClick={handleKatoriClick}
          />

          {/* Hot Rising Steam Particles */}
          <SteamParticles count={40} intensify={steamIntense} position={[0.2, 0.2, 0.1]} />

          {/* Contact Shadows on Table */}
          <ContactShadows
            position={[0, -0.42, 0]}
            opacity={0.65}
            scale={6.5}
            blur={2.4}
            far={4}
            color="#0F2E1D"
          />
        </Suspense>
      </Canvas>

      {/* Interactive notification bubble when katori is tapped */}
      {clickedItem && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 animate-bounce">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-gold/40 shadow-xl bg-forest/90 text-cream text-xs sm:text-sm font-medium">
            <span className="text-gold">✦</span>
            <span>Tapped: <strong>{clickedItem}</strong></span>
            <span className="text-[10px] text-gold-light bg-gold/20 px-2 py-0.5 rounded-full">Fresh Batch</span>
          </div>
        </div>
      )}

      {/* Floating interactive hint badges */}
      <div className="absolute bottom-3 right-4 z-10 hidden sm:flex items-center gap-2 pointer-events-none opacity-75 hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
        <span className="text-[11px] font-medium tracking-wider uppercase text-forest/70 dark:text-cream/70">
          3D Canvas • Hover dosa for steam • Tap chutneys
        </span>
      </div>
    </div>
  );
};
