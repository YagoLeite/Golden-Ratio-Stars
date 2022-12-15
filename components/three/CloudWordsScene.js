import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  TrackballControls,
  OrbitControls,
  Stats,
  Html,
} from "@react-three/drei";
import { Flex, Text } from "@chakra-ui/react";

const mywords = [
  "React",
  "JavaScript",
  "TypeScript",
  "Frammer Motion",
  "Three JS",
  "3D",
  "Styles",
  "Web Dev",
  "Chakra UI",
  "REST",
];

function Word({ children, position, ...props }) {
  const color = new THREE.Color();
  // const fontLoader = new THREE.FontLoader();
  // const fontProps = {
  //   // font: useMemo(() => fontLoader.load("ShadowsIntoLight-Regular.ttf"), []),
  //   font: "ShadowsIntoLight-Regular.ttf",
  //   fontSize: 1.8,
  //   letterSpacing: -0.05,
  //   lineHeight: 1,
  //   // "material-toneMapped": false,
  // };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  console.log(ref);

  // useFrame(({ camera }) => {
  //   ref.current.quaternion.copy(camera.quaternion);
  //   // ref.current.material.color.lerp(
  //   //   color.set(hovered ? "#fa2720" : "white"),
  //   //   0.1
  //   // );
  // });
  return (
    <Html ref={ref} position={position}>
      <Flex w="fit-content" h="fit-content" justify="center" align="center">
        <Text
          ref={ref}
          onPointerOver={over}
          onPointerOut={out}
          onClick={() => console.log("clicked")}
          // {...props}
          // {...fontProps}
          children={children}
        />
      </Flex>
    </Html>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          mywords[Math.floor(Math.random() * mywords.length)],
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function CloudWordsScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 45], fov: 90 }}>
      <Stats />
      <OrbitControls autoRotate enableZoom={false} />
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Cloud count={6} radius={25} />
      {/* <TrackballControls /> */}
    </Canvas>
  );
}
