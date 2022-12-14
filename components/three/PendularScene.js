import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import WavyText from "../WavyText";
import Square from "./Square";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const PendularScene = () => {
  const breakPointSizes = useBreakpointValue({
    sm: "20px",
    md: "45px",
    lg: "72px",
  });

  const orbitRef = useRef(null);

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 15, 35] }}
      background={"white"}
    >
      <Suspense fallback={null}>
        {/* <Stars saturation={0} count={800} speed={0.5} /> */}
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.2} />
        <Html fullscreen>
          <Flex
            h="100%"
            justify="center"
            align="left"
            mt="105px"
            direction="column"
            gap="15px"
            px="30px"
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
        {test.map((number, index) => {
          return (
            <Square
              vector={new THREE.Vector3(0, -1 - index, -2 * number * 5.2)}
              frequency={1.2 + number * 0.05}
              number={number}
            />
          );
        })}
        {/* <Square /> */}
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default PendularScene;
