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

  // Check if the model has valid geometry
  try {
    if (computer.scene.children.length === 0) {
      return null;
    }
  } catch (error) {
    console.warn("Error loading computer model:", error);
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 1 : 2} groundColor="#fbbf24" />
      <pointLight intensity={isMobile ? 0.5 : 1} distance={11} />
      {!isMobile && (
        <spotLight
          position={[5, -1, 3]}
          intensity={600}
          angle={0}
          decay={2}
          castShadow
          shadow-mapSize={1024}
        />
      )}
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
  const [modelError, setModelError] = useState(false);

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

  // Fallback for mobile if 3D causes issues
  if (isMobile && modelError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="text-center">
          <div className="text-6xl mb-4">💻</div>
          <p className="text-white text-lg">3D Computer Model</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas
        frameLoop={isMobile ? "never" : "demand"}
        shadows={!isMobile}
        camera={{ position: [10, 3, 10], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
        }}
        style={{
          touchAction: isMobile ? "pan-y" : "auto",
          pointerEvents: isMobile ? "none" : "auto",
        }}
        dpr={isMobile ? 1 : window.devicePixelRatio}
        onError={() => setModelError(true)}
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
        {!isMobile && <Preload all />}
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
