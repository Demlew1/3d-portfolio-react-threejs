import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader"; // Uncomment if it's 3D-compatible

function Computers() {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <pointLight
        position={[5, -1, 3]}
        intensity={600}
        penumbra={1}
        distance={11}
        angle={0}
        color="#f59e0b"
        decay={2}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={0.4}
        position={[-1, -1.25, -3.5]}
        rotation={[-0.01, -0.8, -0.2]}
      />
    </mesh>
  );
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
