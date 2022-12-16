import { Point } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Tornado = ({ x, y, z, frequency }) => {
  const pointRef = useRef(null);
  // useFrame((state) => {
  //   pointRef.current.position.x =
  //     2 * Math.sin(frequency * state.clock.elapsedTime);
  //   pointRef.current.position.y =
  //     2 * Math.cos(frequency * state.clock.elapsedTime);
  // });
  return (
    <>
      <pointsMaterial size={0.5} />
      <Point ref={pointRef} position={[x, y, z]} />
    </>
  );
};

export default Tornado;
