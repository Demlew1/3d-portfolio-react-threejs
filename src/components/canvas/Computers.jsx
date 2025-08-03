import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useEffect } from "react";
import { useState } from "react";

function Computers({ isMobile }) {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  if (!computer || !computer.scene) {
    return null;
  }
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

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br mt-16">
        <div className="text-center px-4">
          <div className="text-6xl mb-4">💻</div>
          <p className="text-white text-lg font-['Rubik'] mb-2">
            Interactive Portfolio
          </p>
          <p className="text-yellow-400 font-['Kanit'] text-sm">
            (View on desktop for 3D experience)
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full">
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [10, 3, 10], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={window.devicePixelRatio}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputerCanvas;
