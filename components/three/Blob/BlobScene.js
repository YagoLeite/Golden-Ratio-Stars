import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
import { Html, OrbitControls } from "@react-three/drei";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import WavyText from "../../WavyText";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const BlobScene = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      <MyHTML />
      <OrbitControls enableZoom={false} />
      <Blob />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={0.4}
          luminanceThreshold={0.5}
          radius={0.4}
        />
      </EffectComposer>
    </Canvas>
  );
};

function MyHTML() {
  const breakPointSizes = useBreakpointValue({
    sm: "20px",
    md: "45px",
    lg: "72px",
  });
  return (
    <Html fullscreen>
      <Flex direction="column" w="100%" h="100%">
        <WavyText size={breakPointSizes} text="Welcome" delayDuration={1} />
        <WavyText size={breakPointSizes} text="I'm Yago" delayDuration={1.8} />
        <WavyText
          size={breakPointSizes}
          text="Frontend Developer"
          delayDuration={2.6}
        />
      </Flex>
    </Html>
  );
}

export default BlobScene;
