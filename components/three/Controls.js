import { useFrame, useThree } from "@react-three/fiber";
import React from "react";

const Controls = () => {
  const { camera } = useThree((state) => state.camera);
  console.log(camera);
};

export default Controls;
