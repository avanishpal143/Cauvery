import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SteamProps {
  count?: number;
  intensify?: boolean;
  position?: [number, number, number];
}

export const SteamParticles: React.FC<SteamProps> = ({
  count = 45,
  intensify = false,
  position = [0, 0.4, 0],
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle attributes
  const [positions, scales, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const sp = new Float32Array(count);
    const ph = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Disperse around the hot dosa roll and sambar bowl
      pos[i * 3 + 0] = (Math.random() - 0.5) * 1.8;
      pos[i * 3 + 1] = Math.random() * 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2;

      sc[i] = Math.random() * 0.12 + 0.05;
      sp[i] = Math.random() * 0.015 + 0.01;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return [pos, sc, sp, ph];
  }, [count]);

  // Create soft round puff texture
  const steamTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      gradient.addColorStop(0.4, 'rgba(255, 245, 230, 0.25)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const posAttr = geometry.attributes.position;
    if (!posAttr) return;

    const time = state.clock.getElapsedTime();
    const speedMultiplier = intensify ? 1.8 : 1.0;

    for (let i = 0; i < count; i++) {
      let y = posAttr.getY(i);
      let x = posAttr.getX(i);
      const speed = speeds[i] * speedMultiplier;

      // Rise upwards
      y += speed;
      // Gentle horizontal drift
      x += Math.sin(time * 2 + phases[i]) * 0.003;

      // Reset when particle reaches top
      if (y > 2.2) {
        y = 0.1;
        x = (Math.random() - 0.5) * 1.8;
      }

      posAttr.setY(i, y);
      posAttr.setX(i, x);
    }

    posAttr.needsUpdate = true;
  });

  return (
    <group position={position}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-scale"
            args={[scales, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          map={steamTexture}
          size={intensify ? 0.35 : 0.25}
          transparent
          opacity={intensify ? 0.55 : 0.35}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          color="#FFF7EA"
        />
      </points>
    </group>
  );
};
