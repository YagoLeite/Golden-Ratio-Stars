import { useBreakpointValue } from "@chakra-ui/react";
import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";

const Square = ({ vector, frequency, number }) => {
  const breakpoints = useBreakpointValue(
    {
      sm: 0.3,
      md: 1,
      lg: 1,
    },
    { fallback: 1 }
  );
  const squareRef = useRef();
  useEffect(() => {
    if (vector) {
      squareRef.current.position.add(vector);
    }
    squareRef.current.translateY(6);
    squareRef.current.geometry.translate(0, -4, 0);
  }, []);
  useFrame((state) => {
    const acceleration = -squareRef.current.rotation.z * frequency;
    squareRef.current.speed += acceleration;

    squareRef.current.geometry.rotation += 0.01;

    squareRef.current.rotation.z = Math.cos(
      frequency * state.clock.elapsedTime
    );
  });
  return (
    <mesh ref={squareRef} speed={0.08}>
      <sphereGeometry args={[1]} rotateX={30} />
      {/* <meshLambertMaterial color="#7222D3" /> */}
      {/* <meshStandardMaterial roughness={0.1} metalness={0.1} color="#7222D3" /> */}
      {/* <MeshDistortMaterial
        color="#8352fd"
        distort={0.4}
        speed={8}
        roughness={0}
      /> */}
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  );
};

export default Square;
