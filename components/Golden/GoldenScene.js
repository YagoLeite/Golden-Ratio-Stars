import { OrbitControls, Points } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import GoldenPoint from "./GoldenPoint";
import { EffectComposer, Bloom, Glitch } from "@react-three/postprocessing";
import { ArrayOfAngles, ArrayOfPositions } from "../../helpers";
import { useControls } from "leva";

const GoldenScene = () => {
  const orbit = useControls({
    autoRotate: { value: true },
    zoom: { value: false },
    stars: { value: 300, min: 50, max: 500, step: 5 },
    secondStream: { value: true },
  });
  const positions = ArrayOfPositions(ArrayOfAngles(222.5)(orbit.stars))(5);
  return (
    <Canvas camera={{ position: [0, 0, -500] }}>
      <OrbitControls enableZoom={orbit.zoom} autoRotate={orbit.autoRotate} />
      <Points>
        {positions?.map((position, index) => {
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
        {orbit.secondStream &&
          positions?.map((position, index) => {
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
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
      </EffectComposer>
    </Canvas>
  );
};
export default GoldenScene;
