import { useGLTF } from "@react-three/drei";

const Model1 = () => {
  const model = useGLTF("./model.gltf");

  return <primitive object={model.scene} />;
};

export default Model1;
