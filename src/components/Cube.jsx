import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = ({ posititon, color }) => {
  const cubeRef = useRef();

  useFrame((_, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  function onClick(e) {
    e.stopPropagation();
    console.log(e);
  }
  return (
    <mesh ref={cubeRef} rotation-y={2} position={posititon} onClick={onClick}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Cube;
