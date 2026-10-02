import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";

function AnimatedObject() {
  const meshRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.35;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.15;
      ringRef.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshStandardMaterial
            color="#ff873d"
            roughness={0.2}
            metalness={0.75}
            flatShading
          />
        </mesh>
      </Float>

      <mesh ref={ringRef} rotation={[1.1, 0.3, 0.4]}>
        <torusGeometry args={[2, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#ffb16d"
          emissive="#ff873d"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh rotation={[0.5, 1.2, 0.2]}>
        <torusGeometry args={[2.3, 0.009, 12, 120]} />
        <meshStandardMaterial
          color="#6c7dff"
          emissive="#4c63ff"
          emissiveIntensity={0.7}
        />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 5]} intensity={2} />
      <pointLight position={[-4, -2, 2]} color="#596cff" intensity={15} />

      <AnimatedObject />
      <Environment preset="city" />
    </Canvas>
  );
}