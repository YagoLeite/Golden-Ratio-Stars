import React, { useMemo, useRef, useState } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const Blob = () => {
  const ref = useRef();
  const hover = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  console.log(ref.current);

  useFrame((state) => {
    const { clock } = state;
    if (ref.current) {
      ref.current.material.uniforms.u_time.value = 0.6 * clock.elapsedTime;

      ref.current.rotation.z += 0.01;
      ref.current.rotation.y += 0.02;
      ref.current.rotation.x += 0.01;

      ref.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        ref.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });
  return (
    <mesh
      ref={ref}
      scale={1.5}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
