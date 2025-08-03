import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useEffect, useState } from "react";

function Earth() {
  const earth = useGLTF("/planet/scene.gltf");

  // Add error handling for the model
  if (!earth || !earth.scene) {
    return null;
  }

  // Check if the model has valid geometry
  try {
    if (earth.scene.children.length === 0) {
      return null;
    }
  } catch (error) {
    console.warn("Error loading earth model:", error);
    return null;
  }

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
}

export default function EarthCanvas() {
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
          <div className="text-6xl mb-4">🌍</div>
          <p className="text-white text-lg">3D Earth Model</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Canvas
        shadows={!isMobile}
        frameLoop={isMobile ? "never" : "demand"}
        gl={{
          preserveDrawingBuffer: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
        }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        style={{
          touchAction: isMobile ? "pan-y" : "auto",
          pointerEvents: isMobile ? "none" : "auto",
        }}
        dpr={isMobile ? 1 : window.devicePixelRatio}
        onError={() => setModelError(true)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={!isMobile}
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
          <Earth />
        </Suspense>
        {!isMobile && <Preload all />}
      </Canvas>
    </div>
  );
}
