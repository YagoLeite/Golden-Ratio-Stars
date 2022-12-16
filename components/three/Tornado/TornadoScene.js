import { OrbitControls, Points } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Tornado from "./Tornado";
import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
import { ArrayOfAngles, ArrayOfPositions } from "../../../helpers";
const test = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const positions = ArrayOfPositions(ArrayOfAngles(222.5)(500))(5);

const TornadoScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, -500] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <Points>
        {positions.map((position, index) => {
          return (
            <Tornado
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
            <Tornado
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
        <Glitch />
      </EffectComposer> */}
    </Canvas>
  );
};
export default TornadoScene;
