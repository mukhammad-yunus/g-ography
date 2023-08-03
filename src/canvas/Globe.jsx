import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DirectionalLightHelper } from "three";

const Globe = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { nodes, materials } = useGLTF("/world_earth.glb");
  const globeRef = useRef();

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useFrame(() => {
    [globeRef].map((ref) => {
      ref.current?.rotateZ(0.002);
    });
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <directionalLight intensity={4} position={[90, 25, -45]} />
      <group ref={globeRef} rotation={[-Math.PI / 2, 0, 3]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
          scale={innerWidth < 640 ? 1.15 : innerWidth > 1440 ? 2 : 1.5}
        />
      </group>
    </>
  );
};

export default Globe;
