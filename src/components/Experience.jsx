import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { Center, OrbitControls, Text, Text3D } from "@react-three/drei";
import { useControls } from "leva";
import Model1 from "./Model1";
import { Model2 } from "./Model2";

const Experience = () => {
  //   const { groupPositionX } = useControls({
  //     groupPositionX: {
  //       value: 0,
  //       min: 0,
  //       max: 10,
  //     },
  //   });
  return (
    <Canvas>
      {/* <group position-x={groupPositionX}>
        <Cube posititon={[2, 1, 0]} color="orange" />
        <Cube posititon={[-2, 1, 0]} color="green" />
        <Cube posititon={[-2, -1, 0]} color="red" />
        <Cube posititon={[2, -1, 0]} color="yellow" />
      </group> */}
      <ambientLight />
      <directionalLight />
      <OrbitControls />

      {/* <Text color="white" anchorX="center" anchorY="middle">
        hello world!
      </Text> */}

      {/* <Center>
        <Text3D font="/Inter_Bold.json">
          Hello World
          <meshNormalMaterial />
        </Text3D>
      </Center> */}

      {/* <Model1 /> */}

      <Model2 scale={2} />
    </Canvas>
  );
};

export default Experience;
