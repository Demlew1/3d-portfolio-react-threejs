import { Suspense } from "react";
import { Canvas } from "@react-three/drei";
import { OrbitControls, Preload, useGLTF } from "@react-three/fiber";
import CanvasLoader from "../Loader";
export default function Earth() {
  return <div>Earth</div>;
}
function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader/>}
    </Canvas>
  );
}
