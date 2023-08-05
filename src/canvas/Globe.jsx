import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DirectionalLightHelper } from "three";

const Globe = () => {
  const [scale, setScale] = useState(handleScale);
  const { nodes, materials } = useGLTF("/world_earth.glb");
  const globeRef = useRef();

  function handleScale() {
    const height = window.innerHeight;

    if (height < 500) {
      return 1.15;
    } else if (height > 500 && height < 1024) {
      return 1.5;
    } else if (1024 < height && height < 1228) {
      return 1.75;
    } else {
      return 2;
    }
  }
  useEffect(() => {
    function handleResize() {
      const scaleNum = handleScale();
      setScale(scaleNum);
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
          scale={scale}
        />
      </group>
    </>
  );
};

export default Globe;
