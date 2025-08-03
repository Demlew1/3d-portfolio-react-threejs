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

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
}

export default function EarthCanvas() {
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
        shadows
        frameLoop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        style={{
          touchAction: isMobile ? "pan-y" : "auto",
          pointerEvents: isMobile ? "none" : "auto",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
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
      </Canvas>
    </div>
  );
}
