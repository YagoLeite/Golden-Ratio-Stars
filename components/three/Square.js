import { useBreakpointValue } from "@chakra-ui/react";
import {
  Environment,
  GradientTexture,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import WoodColor from "../../public/woodColor.jpg";

const Square = ({ vector, frequency, number }) => {
  const [color, displacement, normal, roughness, metalness] = useLoader(
    TextureLoader,
    [
      "/rock/rockColor.jpg",
      "/rock/rockDisplacement.jpg",
      "/rock/rockNormal.jpg",
      "/rock/rockRoughness.jpg",
      // "/fence/fenceMetalness.jpg",
    ]
  );
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
    <Suspense fallback={null}>
      <mesh ref={squareRef} speed={0.08}>
        <sphereGeometry rotateX={30} />
        <meshPhysicalMaterial
          roughness={0}
          metalness={0}
          transmission={1}
          ior={2.33}
        />
        {/* <meshLambertMaterial color="#7222D3" /> */}
        {/* <meshStandardMaterial
        map={color}
        displacementMap={displacement}
        // metalnessMap={metalness}
        roughnessMap={roughness}
        normalMap={normal}
        // color="red"
      /> */}
        {/* <MeshDistortMaterial
        color="#8352fd"
        distort={0.4}
        speed={8}
        roughness={0}
      /> */}
        {/* <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["aquamarine", "hotpink"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial> */}
      </mesh>
    </Suspense>
  );
};

export default Square;
