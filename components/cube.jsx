import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";

export const Cube = ({ cubeRef, ...props }) => {
  const { nodes } = useGLTF("models/cube.glb");

  useGSAP(() => {}, []);

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={1.5}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
        >
          <meshStandardMaterial color={"#f97289"} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");
