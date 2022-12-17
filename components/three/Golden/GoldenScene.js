import { OrbitControls, Points } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import GoldenPoint from "./GoldenPoint";
import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
import { ArrayOfAngles, ArrayOfPositions } from "../../../helpers";
import GoldenHTML from "./GoldenHTML";

const positions = ArrayOfPositions(ArrayOfAngles(222.5)(500))(5);

const GoldenScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, -500] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <GoldenHTML />
      <Points>
        {positions.map((position, index) => {
          return (
            <GoldenPoint
              key={index}
              z={index}
              x={position.x}
              y={position.y}
              frequency={1.2 + index * 0.05}
            />
          );
        })}
        {positions.map((position, index) => {
          return (
            <GoldenPoint
              key={index}
              z={-index}
              x={position.x}
              y={position.y}
              frequency={1.2 + index * 0.05}
            />
          );
        })}
      </Points>
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
      </EffectComposer> */}
    </Canvas>
  );
};
export default GoldenScene;
