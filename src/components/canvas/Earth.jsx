import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { FaArrowRight } from "react-icons/fa";

function Earth() {
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={5} position-y={0} rotation-y={0} />
  );
}

export default function EarthCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
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
      <div className="w-90 h-60 flex items-center justify-self-center justify-center rounded-2xl border border-zinc-400">
        <div className="text-center p-6">
          <div className="text-6xl mb-4 ">🌎</div>
          <h3 className="text-xl font-bold text-zinc-700 mb-2">Let's Connect</h3>
          <p className="text-zinc-700 text-sm">
            View on desktop for interactive 3D globe
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        frameLoop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
