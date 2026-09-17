import { useGLTF } from "@react-three/drei";

const PC = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 0, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [0, 0, -2.2] : [0.5, 1.5, 0]}
        rotation={[0, -1.25, 0]}
      />
    </mesh>
  );
};

export { PC };