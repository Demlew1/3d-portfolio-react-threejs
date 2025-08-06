import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Computers({ isMobile }) {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const computerRef = useRef();
  useFrame((state) => {
    if (computerRef.current) {
      const elapsed = state.clock.getElapsedTime();
      computerRef.current.position.y = Math.sin(elapsed * 1.5) * 0.1 - 1.5;
    }
  });
  if (!computer?.scene) return null;
  return (
    <group>
      <hemisphereLight intensity={1.2} groundColor="black" />
      <pointLight intensity={2} position={[5, 5, 5]} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={computerRef}
        object={computer.scene}
        scale={isMobile ? 2.5 : 5}
        position={isMobile ? [0, -1.5, 1] : [1, -1, -1]}
        rotation={[-0.05, -0.4, -0.05]}
        castShadow
        receiveShadow
      />
    </group>
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
    <div className="w-full h-screen">
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: isMobile ? [0, 5, 12] : [8, 0, 12], fov: 28 }}
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
            enablePan={false}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 3}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
export default ComputerCanvas;
