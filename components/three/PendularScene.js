import { Flex, useBreakpointValue } from "@chakra-ui/react";
import {
  Environment,
  Html,
  OrbitControls,
  Sky,
  Stars,
} from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import WavyText from "../WavyText";
import Square from "./Square";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const PendularScene = () => {
  const breakPointSizes = useBreakpointValue({
    sm: "20px",
    md: "45px",
    lg: "72px",
  });

  const orbitRef = useRef(null);

  useFrame(() => {
    // console.log(orbitRef.current);
  });
  return (
    <Suspense fallback={null}>
      <Stars />
      <Sky />
      <Html fullscreen>
        <Flex
          h="100%"
          justify="center"
          align="center"
          mt="105px"
          direction="column"
          gap="15px"
        >
          <WavyText size={breakPointSizes} text="Welcome" delayDuration={1} />
          <WavyText
            size={breakPointSizes}
            text="I'm Yago"
            delayDuration={1.8}
          />
          <WavyText
            size={breakPointSizes}
            text="Frontend Developer"
            delayDuration={2.6}
          />
        </Flex>
      </Html>
      <OrbitControls ref={orbitRef} enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 1]} intensity={1} />
      {test.map((number, index) => {
        return (
          <Square
            vector={new THREE.Vector3(0, -1 - index, -number * 4.2)}
            frequency={1.2 + number * 0.05}
            number={number}
          />
        );
      })}
      {/* <Square /> */}
    </Suspense>
  );
};

export default PendularScene;
