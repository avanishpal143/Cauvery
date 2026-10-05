import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SteamParticles } from './SteamParticles';
import { RotateCw, Sparkles, ZoomIn } from 'lucide-react';

// Procedural high-res texture for the organic Banana Leaf
function useBananaLeafTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Base fresh green leaf gradient
      const grad = ctx.createLinearGradient(0, 0, 1024, 0);
      grad.addColorStop(0, '#155829');
      grad.addColorStop(0.2, '#1E7A3B');
      grad.addColorStop(0.48, '#268E46');
      grad.addColorStop(0.5, '#48B868'); // Central midrib
      grad.addColorStop(0.52, '#268E46');
      grad.addColorStop(0.8, '#1E7A3B');
      grad.addColorStop(1, '#155829');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Central Spine
      ctx.strokeStyle = '#68D088';
      ctx.lineWidth = 16;
      ctx.beginPath();
      ctx.moveTo(512, 0);
      ctx.lineTo(512, 1024);
      ctx.stroke();

      // Delicate lateral leaf veins
      ctx.strokeStyle = 'rgba(120, 230, 150, 0.35)';
      ctx.lineWidth = 3;
      for (let y = 10; y < 1024; y += 14) {
        // Right side veins
        ctx.beginPath();
        ctx.moveTo(512, y);
        ctx.bezierCurveTo(700, y + 25, 880, y + 60, 1010, y + 80);
        ctx.stroke();

        // Left side veins
        ctx.beginPath();
        ctx.moveTo(512, y);
        ctx.bezierCurveTo(324, y + 25, 144, y + 60, 14, y + 80);
        ctx.stroke();
      }

      // Micro striations for realistic plant tissue
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        ctx.fillRect(x, y, 1.5, Math.random() * 15 + 5);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);
}

// Procedural texture for the crispy tawa-roasted golden Dosa
function useDosaCrustTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Golden fermented batter base
      const grad = ctx.createLinearGradient(0, 0, 1024, 0);
      grad.addColorStop(0, '#EBB246');
      grad.addColorStop(0.2, '#DE9E34');
      grad.addColorStop(0.4, '#BD7219');
      grad.addColorStop(0.55, '#E5A73E');
      grad.addColorStop(0.75, '#A65D15');
      grad.addColorStop(0.9, '#DA9732');
      grad.addColorStop(1, '#EBB246');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Roasted tawa swirl rings
      ctx.fillStyle = 'rgba(84, 38, 8, 0.28)';
      for (let i = 0; i < 60; i++) {
        const y = Math.random() * 1024;
        const h = Math.random() * 14 + 3;
        ctx.fillRect(0, y, 1024, h);
      }

      // Caramelized ghee crisp spots
      for (let i = 0; i < 600; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;
        const r = Math.random() * 3.5 + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.4 ? 'rgba(75, 30, 5, 0.45)' : 'rgba(255, 235, 175, 0.4)';
        ctx.fill();
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);
}

// 3D Platter Scene with Banana Leaf, Dosa, Idlis & Brass Katoris
const PlatterModel: React.FC = () => {
  const leafTexture = useBananaLeafTexture();
  const dosaTexture = useDosaCrustTexture();
  const dosaRef = useRef<THREE.Group>(null);

  // Gentle breathing motion
  useFrame((state) => {
    if (dosaRef.current) {
      const t = state.clock.getElapsedTime();
      dosaRef.current.position.y = 0.28 + Math.sin(t * 1.5) * 0.02;
    }
  });

  return (
    <group position={[0, -0.3, 0]}>
      {/* 1. Traditional Brass Thali Rim (Underneath the Leaf) */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.55, 2.5, 0.08, 48]} />
        <meshStandardMaterial
          color="#D49B2E"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* 2. Curved Fresh Banana Leaf */}
      <group position={[0, 0.07, 0]}>
        {/* Main leaf body with curved oval geometry */}
        <mesh rotation={[-Math.PI / 2, 0, -0.15]}>
          <planeGeometry args={[4.4, 2.7, 32, 24]} />
          <meshStandardMaterial
            map={leafTexture}
            roughness={0.4}
            metalness={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 3. The Golden Rolled Masala Dosa */}
      <group ref={dosaRef} position={[0.1, 0.28, 0.25]} rotation={[0.08, 0.32, -0.06]}>
        {/* Outer Crispy Roll */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.34, 0.38, 3.2, 36, 1, true]} />
          <meshStandardMaterial
            map={dosaTexture}
            roughness={0.45}
            metalness={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Flaky inner roll layer */}
        <mesh rotation={[0, 0, Math.PI / 2]} scale={[0.88, 0.98, 0.88]}>
          <cylinderGeometry args={[0.34, 0.38, 3.1, 28, 1, true]} />
          <meshStandardMaterial
            map={dosaTexture}
            roughness={0.5}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Warm Spiced Potato Masala (Naturally nestled inside roll ends) */}
        <mesh position={[0, 0, 0]} scale={[0.22, 0.22, 2.5]}>
          <cylinderGeometry args={[0.9, 0.9, 1, 16]} />
          <meshStandardMaterial color="#D79328" roughness={0.7} />
        </mesh>

        {/* Golden Ghee Glistening Sheen */}
        <mesh rotation={[0, 0, Math.PI / 2]} scale={[1.01, 0.96, 1.01]}>
          <cylinderGeometry args={[0.342, 0.382, 3.15, 24, 1, true]} />
          <meshStandardMaterial
            color="#FFC252"
            transparent
            opacity={0.22}
            roughness={0.15}
            metalness={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 4. Two Steamed Malli-Poo Idlis */}
      <group position={[-1.1, 0.16, -0.3]}>
        {/* Idli 1 */}
        <mesh position={[0, 0.05, 0]} scale={[1, 0.48, 1]}>
          <sphereGeometry args={[0.42, 32, 16]} />
          <meshStandardMaterial color="#FCF9F2" roughness={0.8} />
        </mesh>
        {/* Podi & Ghee Sprinkle on Idli 1 */}
        <mesh position={[0, 0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.2, 16]} />
          <meshStandardMaterial color="#C8521A" roughness={0.9} transparent opacity={0.75} />
        </mesh>

        {/* Idli 2 */}
        <mesh position={[0.55, 0.03, -0.22]} scale={[0.95, 0.46, 0.95]}>
          <sphereGeometry args={[0.4, 32, 16]} />
          <meshStandardMaterial color="#FAF7EE" roughness={0.8} />
        </mesh>
      </group>

      {/* 5. Traditional Brass Katoris (Chutneys & Sambar) */}
      
      {/* Katori 1: Fresh Coconut Chutney (White with mustard seeds) */}
      <group position={[-0.15, 0.18, -0.85]}>
        {/* Brass Bowl */}
        <mesh>
          <cylinderGeometry args={[0.38, 0.28, 0.32, 28]} />
          <meshStandardMaterial color="#E5A93C" metalness={0.88} roughness={0.22} />
        </mesh>
        {/* Coconut Chutney Surface */}
        <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.36, 24]} />
          <meshStandardMaterial color="#F7F3EA" roughness={0.65} />
        </mesh>
        {/* Mustard Seed & Curry Leaf Fleck */}
        <mesh position={[0.08, 0.15, 0.04]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#1B120B" roughness={0.5} />
        </mesh>
        <mesh position={[-0.06, 0.15, -0.05]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#2E6B38" roughness={0.4} />
        </mesh>
      </group>

      {/* Katori 2: Piping Hot Drumstick Sambar */}
      <group position={[0.72, 0.18, -0.8]}>
        {/* Brass Bowl */}
        <mesh>
          <cylinderGeometry args={[0.4, 0.3, 0.34, 28]} />
          <meshStandardMaterial color="#E5A93C" metalness={0.88} roughness={0.22} />
        </mesh>
        {/* Sambar Surface */}
        <mesh position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.38, 24]} />
          <meshStandardMaterial color="#C86A1B" roughness={0.45} />
        </mesh>
        {/* Drumstick slice float */}
        <mesh position={[0.05, 0.16, 0]} rotation={[0, 0.3, 0]} scale={[0.16, 0.04, 0.08]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4A7533" roughness={0.6} />
        </mesh>
      </group>

      {/* Rising Steam Particles from hot Dosa and Sambar */}
      <SteamParticles count={32} intensify={true} position={[0.2, 0.3, 0.1]} />

      {/* Ground Contact Shadow */}
      <ContactShadows
        position={[0, -0.02, 0]}
        opacity={0.6}
        scale={6}
        blur={2}
        far={2}
        color="#082A14"
      />
    </group>
  );
};

interface BananaLeafDosa3DProps {
  className?: string;
  autoRotate?: boolean;
}

export const BananaLeafDosa3D: React.FC<BananaLeafDosa3DProps> = ({
  className = '',
  autoRotate = true,
}) => {
  const [isRotating, setIsRotating] = useState(autoRotate);

  return (
    <div className={`relative w-full h-full min-h-[380px] sm:min-h-[460px] select-none rounded-3xl overflow-hidden ${className}`}>
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2.4, 3.8], fov: 44 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} color="#FFFBF2" />
        <directionalLight
          position={[4, 7, 4]}
          intensity={2.2}
          color="#FFF6E0"
          castShadow
        />
        <directionalLight
          position={[-4, 3, -3]}
          intensity={1.1}
          color="#CBE8C4" // fresh leaf rim light
        />
        <pointLight position={[0, 2, 0.5]} intensity={1.2} color="#E8A72B" />

        {/* Floating motion */}
        <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.25}>
          <PlatterModel />
        </Float>

        {/* Orbit Controls (Full 360° Drag & Inspect) */}
        <OrbitControls
          enableZoom={true}
          minDistance={2.4}
          maxDistance={6.0}
          maxPolarAngle={Math.PI / 2.1} // Prevent looking from directly underneath table
          autoRotate={isRotating}
          autoRotateSpeed={1.4}
          dampingFactor={0.08}
        />
      </Canvas>

      {/* Floating 3D Control Badges */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-leaf/30 shadow-md text-forest text-xs font-bold backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>3D Banana Leaf Dosa</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`p-2 rounded-full border text-xs shadow-md backdrop-blur-sm transition-colors cursor-pointer ${
            isRotating
              ? 'bg-leaf text-cream border-leaf'
              : 'bg-white/90 text-forest border-leaf/30 hover:bg-leaf-tender'
          }`}
          title="Toggle 360° Auto-Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        </button>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] text-forest/75 bg-white/85 px-3 py-1.5 rounded-full border border-leaf/25 shadow-sm backdrop-blur-sm">
        <span className="flex items-center gap-1">
          <ZoomIn className="w-3 h-3 text-leaf" />
          <span>Drag to rotate 360° • Scroll to zoom</span>
        </span>
        <span className="font-bold text-leaf font-mono uppercase text-[10px]">
          ✦ Pure Desi Ghee
        </span>
      </div>
    </div>
  );
};
