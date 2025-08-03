import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useEffect } from "react";
import { useState } from "react";

function Computers({ isMobile }) {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  // Add error handling for the model
  if (!computer || !computer.scene) {
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="#fbbf24" />
      <pointLight intensity={1} distance={11} />
      <spotLight
        position={[5, -1, 3]}
        intensity={600}
        angle={0}
        decay={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.45}
        position={isMobile ? [0, -1.5, -0.5] : [2, -1.5, -1.4]}
        rotation={[-0.01, -0.8, -0.3]}
      />
    </mesh>
  );
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [10, 3, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          touchAction: isMobile ? "pan-y" : "auto",
          pointerEvents: isMobile ? "none" : "auto",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={!isMobile}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            touches={{
              ONE: isMobile ? "NONE" : "ROTATE",
              TWO: isMobile ? "NONE" : "DOLLY",
            }}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
