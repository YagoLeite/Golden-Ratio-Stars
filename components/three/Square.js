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
  const squareRef = useRef();
  useEffect(() => {
    if (vector) {
      squareRef.current.position.add(vector);
    }
    squareRef.current.translateY(6);
    squareRef.current.geometry.translate(0, -14, 0);
  }, []);
  useFrame((state) => {
    squareRef.current.rotation.z = Math.cos(
      frequency * state.clock.elapsedTime
    );
  });
  return (
    <Suspense fallback={null}>
      <mesh ref={squareRef} speed={0.08}>
        <sphereGeometry args={[2]} rotateX={30} />
        <meshLambertMaterial color="#7222D3" wireframe />
      </mesh>
    </Suspense>
  );
};

export default Square;
