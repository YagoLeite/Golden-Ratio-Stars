import { Sphere } from "@react-three/drei";
import Electron from "./Electron";
const Atom = (props) => {
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={6.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={7}
      />
      <Sphere args={[0.55, 64, 64]} position={[0, 0, 0.5]}>
        <meshBasicMaterial color="#61DBFB" toneMapped={false} />
      </Sphere>
    </group>
  );
};

export default Atom;
