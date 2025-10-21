import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Float speed={2} rotationIntensity={2}>
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial color="#2563eb" distort={0.3} speed={2} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeScene;
