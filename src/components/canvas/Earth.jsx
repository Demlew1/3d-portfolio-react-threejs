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

  // Handle touch events to prevent scroll interference
  const handleTouchStart = (e) => {
    if (isMobile) {
      e.stopPropagation();
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile) {
      // Allow vertical scrolling but prevent horizontal gestures
      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - (touch.clientX || 0));
      const deltaY = Math.abs(touch.clientY - (touch.clientY || 0));

      if (deltaX > deltaY) {
        e.preventDefault();
      }
    }
  };

  return (
    <div
      className="w-full h-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={{ touchAction: isMobile ? "pan-y" : "auto" }}
    >
      <Canvas
        shadows
        frameLoop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        style={{ touchAction: isMobile ? "pan-y" : "auto" }}
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
