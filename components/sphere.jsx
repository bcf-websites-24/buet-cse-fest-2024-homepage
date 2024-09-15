import { useGSAP } from "@gsap/react";
import { Float } from "@react-three/drei";

export const Sphere = ({ sphereRef }) => {
  useGSAP(() => {}, []);

  return (
    <Float floatIntensity={2}>
      <group
        position={[-9, 9, 0]}
        rotation={[0, 0, 0]}
        scale={1}
        dispose={null}
      >
        <mesh ref={sphereRef} castShadow receiveShadow>
          <torusGeometry args={[1.6, 0.7, 16, 100]} />
          <meshStandardMaterial color={"#59b5f8"} />
        </mesh>
      </group>
    </Float>
  );
};
