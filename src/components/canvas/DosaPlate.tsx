import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DosaPlateProps {
  onHoverDosa?: (hovered: boolean) => void;
  onKatoriClick?: (name: string) => void;
}

export const DosaPlate: React.FC<DosaPlateProps> = ({
  onHoverDosa,
  onKatoriClick,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const dosaRef = useRef<THREE.Mesh>(null);
  const [activeRipple, setActiveRipple] = useState<{ katoriIndex: number; scale: number } | null>(null);

  // Procedural texture for the golden crispy dosa
  const dosaTexture = React.useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Base golden batter
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      grad.addColorStop(0, '#E8AC43');
      grad.addColorStop(0.2, '#D79331');
      grad.addColorStop(0.4, '#B36B18');
      grad.addColorStop(0.6, '#DF9F3B');
      grad.addColorStop(0.85, '#9C5814');
      grad.addColorStop(1, '#E6AB45');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Roasted tawa swirl rings & ghee crisp marks
      ctx.fillStyle = 'rgba(92, 45, 10, 0.25)';
      for (let i = 0; i < 40; i++) {
        const y = Math.random() * 512;
        const h = Math.random() * 8 + 2;
        ctx.fillRect(0, y, 512, h);
      }

      // Crisp speckles
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const r = Math.random() * 2 + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(80, 35, 6, 0.4)' : 'rgba(255, 235, 180, 0.3)';
        ctx.fill();
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  // Banana leaf texture
  const leafTexture = React.useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#265D34';
      ctx.fillRect(0, 0, 512, 512);

      // Central stem vein
      ctx.strokeStyle = '#4A8F5B';
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(256, 0);
      ctx.lineTo(256, 512);
      ctx.stroke();

      // Lateral veins
      ctx.lineWidth = 3;
      for (let y = 10; y < 512; y += 18) {
        ctx.beginPath();
        ctx.moveTo(256, y);
        ctx.lineTo(490, y + 35);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(256, y);
        ctx.lineTo(22, y + 35);
        ctx.stroke();
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  // Handle gentle hover & tilt animation
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Subtle breathing float
    groupRef.current.position.y = Math.sin(time * 1.2) * 0.04;
    groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.08 - 0.2;

    // Handle ripple expansion on katori click
    if (activeRipple) {
      if (activeRipple.scale < 2.5) {
        setActiveRipple((prev) => (prev ? { ...prev, scale: prev.scale + 0.08 } : null));
      } else {
        setActiveRipple(null);
      }
    }
  });

  const triggerKatori = (index: number, name: string) => {
    setActiveRipple({ katoriIndex: index, scale: 1 });
    if (onKatoriClick) onKatoriClick(name);
  };

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0.45, -0.2, 0]}>
      {/* 1. Traditional Banana Leaf Plate Base */}
      <group position={[0, -0.05, 0]}>
        {/* Steel Thali Rim Base underneath */}
        <mesh position={[0, -0.04, 0]}>
          <cylinderGeometry args={[2.55, 2.5, 0.06, 48]} />
          <meshStandardMaterial
            color="#D8DEE4"
            metalness={0.92}
            roughness={0.15}
          />
        </mesh>

        {/* Banana Leaf Oval Cutout */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
          <circleGeometry args={[2.45, 48]} />
          <meshStandardMaterial
            map={leafTexture}
            color="#2F6B3F"
            roughness={0.45}
            metalness={0.08}
            bumpScale={0.04}
          />
        </mesh>
      </group>

      {/* 2. The Golden Crisp Paper Roast Dosa Roll */}
      <group
        position={[0.1, 0.35, 0.3]}
        rotation={[0.1, 0.25, -0.1]}
        onPointerOver={() => onHoverDosa && onHoverDosa(true)}
        onPointerOut={() => onHoverDosa && onHoverDosa(false)}
      >
        <mesh ref={dosaRef} rotation={[0, 0, Math.PI / 2]}>
          {/* Tapered open roll cylinder */}
          <cylinderGeometry args={[0.38, 0.44, 3.4, 36, 1, true]} />
          <meshStandardMaterial
            map={dosaTexture}
            color="#FFFFFF"
            roughness={0.5}
            metalness={0.12}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Roasted Ghee Glaze Glow highlight */}
        <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0.02, 0.05]} scale={[1.02, 0.98, 1.02]}>
          <cylinderGeometry args={[0.385, 0.445, 3.3, 24, 1, true]} />
          <meshStandardMaterial
            color="#F0B345"
            roughness={0.3}
            metalness={0.25}
            transparent
            opacity={0.35}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Inner potato masala peek */}
        <mesh position={[0, -0.1, 0]} scale={[0.25, 0.25, 2.6]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#E8A72B" roughness={0.7} />
        </mesh>
      </group>

      {/* 3. Two Malli-Poo Steamed Idlis */}
      <group position={[-1.3, 0.18, -0.4]}>
        {/* Idli 1 */}
        <mesh position={[0, 0, 0]} rotation={[0.15, 0.1, -0.05]}>
          <sphereGeometry args={[0.48, 24, 16]} />
          <meshStandardMaterial
            color="#FCF9F2"
            roughness={0.85}
            metalness={0.02}
          />
        </mesh>
        {/* Soft podi powder speckle on Idli 1 */}
        <mesh position={[0.05, 0.22, 0.05]} rotation={[0.1, 0, 0]}>
          <circleGeometry args={[0.22, 16]} />
          <meshStandardMaterial color="#C24F18" roughness={0.9} transparent opacity={0.7} />
        </mesh>

        {/* Idli 2 resting gently beside Idli 1 */}
        <mesh position={[0.65, 0.02, -0.3]} rotation={[-0.1, 0.2, 0.1]}>
          <sphereGeometry args={[0.46, 24, 16]} />
          <meshStandardMaterial
            color="#FAF7F0"
            roughness={0.85}
            metalness={0.02}
          />
        </mesh>
      </group>

      {/* 4. Three Stainless Steel Katoris with Chutneys & Sambar */}
      
      {/* Katori 1: Fresh Coconut Chutney (White) */}
      <group
        position={[-0.15, 0.16, -1.2]}
        onClick={() => triggerKatori(0, 'Fresh Coconut Chutney')}
      >
        {/* Stainless Steel Bowl */}
        <mesh>
          <cylinderGeometry args={[0.42, 0.32, 0.35, 28]} />
          <meshStandardMaterial color="#E6EDF2" metalness={0.95} roughness={0.12} />
        </mesh>
        {/* Chutney Surface */}
        <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.4, 24]} />
          <meshStandardMaterial color="#F4EFE6" roughness={0.65} metalness={0.05} />
        </mesh>
        {/* Mustard seeds & tadka fleck */}
        <mesh position={[0.08, 0.15, 0.04]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#1B120B" roughness={0.5} />
        </mesh>
        <mesh position={[-0.07, 0.15, -0.06]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#2B5B33" roughness={0.4} />
        </mesh>
        {/* Ripple Effect */}
        {activeRipple?.katoriIndex === 0 && (
          <mesh position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={activeRipple.scale}>
            <ringGeometry args={[0.05, 0.08, 24]} />
            <meshBasicMaterial color="#E8B04B" transparent opacity={0.8 - activeRipple.scale * 0.25} />
          </mesh>
        )}
      </group>

      {/* Katori 2: Fiery Mysore Red Chutney */}
      <group
        position={[0.75, 0.16, -1.05]}
        onClick={() => triggerKatori(1, 'Fiery Mysore Red Chutney')}
      >
        <mesh>
          <cylinderGeometry args={[0.42, 0.32, 0.35, 28]} />
          <meshStandardMaterial color="#E6EDF2" metalness={0.95} roughness={0.12} />
        </mesh>
        <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.4, 24]} />
          <meshStandardMaterial color="#B8391F" roughness={0.4} metalness={0.15} />
        </mesh>
        {/* Ripple Effect */}
        {activeRipple?.katoriIndex === 1 && (
          <mesh position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={activeRipple.scale}>
            <ringGeometry args={[0.05, 0.08, 24]} />
            <meshBasicMaterial color="#FFAA55" transparent opacity={0.8 - activeRipple.scale * 0.25} />
          </mesh>
        )}
      </group>

      {/* Katori 3: Piping Hot Drumstick Sambar */}
      <group
        position={[1.5, 0.18, -0.55]}
        onClick={() => triggerKatori(2, 'Aromatic Shallot Sambar')}
      >
        <mesh>
          <cylinderGeometry args={[0.48, 0.36, 0.4, 28]} />
          <meshStandardMaterial color="#E6EDF2" metalness={0.95} roughness={0.12} />
        </mesh>
        {/* Sambar Broth */}
        <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.46, 24]} />
          <meshStandardMaterial color="#C46E20" roughness={0.3} metalness={0.2} />
        </mesh>
        {/* Drumstick slice floating */}
        <mesh position={[0.1, 0.17, 0.05]}>
          <cylinderGeometry args={[0.09, 0.09, 0.04, 12]} />
          <meshStandardMaterial color="#4A7538" roughness={0.6} />
        </mesh>
        {/* Ripple Effect */}
        {activeRipple?.katoriIndex === 2 && (
          <mesh position={[0, 0.17, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={activeRipple.scale}>
            <ringGeometry args={[0.05, 0.08, 24]} />
            <meshBasicMaterial color="#FFD077" transparent opacity={0.8 - activeRipple.scale * 0.25} />
          </mesh>
        )}
      </group>
    </group>
  );
};
