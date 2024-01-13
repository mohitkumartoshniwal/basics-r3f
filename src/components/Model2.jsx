import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.course_cavalier.play();
    actions.course_loup.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_cavalier" rotation={[0, 0.483, 0]} scale={0.151}>
          <skinnedMesh
            name="Cavalier"
            geometry={nodes.Cavalier.geometry}
            material={materials["color_main.015"]}
            skeleton={nodes.Cavalier.skeleton}
          />
          <primitive object={nodes.root} />
        </group>
        <group name="Armature_loup" scale={0.612}>
          <skinnedMesh
            name="Loup"
            geometry={nodes.Loup.geometry}
            material={materials["color_main.002"]}
            skeleton={nodes.Loup.skeleton}
          />
          <primitive object={nodes.spine004} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model.gltf");
