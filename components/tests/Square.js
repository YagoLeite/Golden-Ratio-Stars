import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect, Suspense } from "react";

const Square = ({ vector, frequency, number }) => {
  const squareRef = useRef();
  useEffect(() => {
    if (vector) {
      squareRef.current.position.add(vector);
    }
    // squareRef.current.translateY(6);
    // squareRef.current.geometry.translate(0, -14, 0);
  }, []);
  useFrame((state) => {
    // squareRef.current.rotation.z = Math.cos(
    //   frequency * state.clock.elapsedTime
    // );
    squareRef.current.position.x =
      number * Math.sin(frequency * state.clock.elapsedTime);
    squareRef.current.position.y =
      number * Math.cos(frequency * state.clock.elapsedTime);
  });
  return (
    <Suspense fallback={null}>
      <mesh ref={squareRef} speed={0.08}>
        <sphereGeometry args={[2]} rotateX={30} />
        {/* <meshLambertMaterial color="#7222D3" wireframe /> */}
        <meshStandardMaterial
          attach="material"
          color="pink"
          transparent
          opacity={0.5}
        />
      </mesh>
    </Suspense>
  );
};

export default Square;
