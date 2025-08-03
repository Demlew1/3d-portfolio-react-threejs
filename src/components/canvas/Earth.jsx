import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Earth() {
  const earth = useGLTF("/planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
}
export default function EarthCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
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
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br  rounded-2xl border border-zinc-800">
        <div className="text-center p-6">
          <div className="text-6xl mb-4 text-yellow-500">🌎</div>
          <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
          <p className="text-yellow-300 text-sm">
            View on desktop for interactive 3D globe
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full">
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
