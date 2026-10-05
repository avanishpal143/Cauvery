import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingSpicesProps {
  count?: number;
}

export const FloatingSpices: React.FC<FloatingSpicesProps> = ({ count = 24 }) => {
  const groupRef = useRef<THREE.Group>(null);

  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      type: i % 4, // 0: curry leaf, 1: red chilli, 2: mustard seed, 3: coconut flake
      initialPos: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4 + 0.5,
        (Math.random() - 0.5) * 3 - 0.5,
      ] as [number, number, number],
      rotSpeed: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ] as [number, number, number],
      floatPhase: Math.random() * Math.PI * 2,
      scale: 0.6 + Math.random() * 0.5,
    }));
  }, [count]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    groupRef.current.children.forEach((child, i) => {
      const item = items[i];
      if (!item) return;

      // Gentle floating bob
      child.position.y = item.initialPos[1] + Math.sin(time * 0.8 + item.floatPhase) * 0.2;
      child.position.x = item.initialPos[0] + Math.cos(time * 0.5 + item.floatPhase) * 0.1;
      
      // Slow rotation
      child.rotation.x += item.rotSpeed[0];
      child.rotation.y += item.rotSpeed[1];
      child.rotation.z += item.rotSpeed[2];
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((item) => {
        if (item.type === 0) {
          // Curved Green Curry Leaf
          return (
            <mesh
              key={item.id}
              position={item.initialPos}
              scale={[item.scale * 0.35, item.scale * 0.15, item.scale * 0.35]}
              rotation={[Math.random() * 3, Math.random() * 3, Math.random() * 3]}
            >
              <sphereGeometry args={[0.5, 12, 12]} />
              <meshStandardMaterial
                color="#2F6B3F"
                roughness={0.4}
                metalness={0.1}
                bumpScale={0.05}
              />
            </mesh>
          );
        } else if (item.type === 1) {
          // Dried Red Chilli
          return (
            <group
              key={item.id}
              position={item.initialPos}
              scale={item.scale * 0.2}
              rotation={[Math.random() * 3, Math.random() * 3, Math.random() * 3]}
            >
              <mesh position={[0, 0, 0]}>
                <coneGeometry args={[0.25, 1.2, 10]} />
                <meshStandardMaterial
                  color="#B8391F"
                  roughness={0.3}
                  metalness={0.15}
                />
              </mesh>
              <mesh position={[0, 0.65, 0]}>
                <cylinderGeometry args={[0.06, 0.08, 0.3, 8]} />
                <meshStandardMaterial color="#244B2D" roughness={0.7} />
              </mesh>
            </group>
          );
        } else if (item.type === 2) {
          // Black Mustard Seed
          return (
            <mesh
              key={item.id}
              position={item.initialPos}
              scale={item.scale * 0.07}
            >
              <sphereGeometry args={[0.5, 8, 8]} />
              <meshStandardMaterial
                color="#1B120B"
                roughness={0.6}
                metalness={0.3}
              />
            </mesh>
          );
        } else {
          // Golden Roasted Coconut Flake
          return (
            <mesh
              key={item.id}
              position={item.initialPos}
              scale={[item.scale * 0.22, item.scale * 0.04, item.scale * 0.18]}
              rotation={[Math.random() * 3, Math.random() * 3, Math.random() * 3]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#E8B04B"
                roughness={0.5}
                metalness={0.1}
              />
            </mesh>
          );
        }
      })}
    </group>
  );
};
