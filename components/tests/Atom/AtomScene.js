import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Atom from "./Atom";

const AtomScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <OrbitControls enableZoom={false} autoRotate />
      {/* <color attach="background" args={["black"]} /> */}
      {/* <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      </Float> */}
      <Atom />
      {/* <Stars saturation={0} count={400} speed={0.5} /> */}
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
      </EffectComposer> */}
    </Canvas>
  );
};

export default AtomScene;
