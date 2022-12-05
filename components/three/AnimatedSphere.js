import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352fd"
        distort={0.4}
        speed={3}
        roughness={0.8}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
