import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from "react-responsive";
import { PC } from './PC.jsx'
import HeroLights from "./HeroLights";
import CanvasLoader from "../Loader";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 786px)' });

  return (
    <Canvas camera={{position:[0.5, 4, 15], fov: 40}}>
        <ambientLight intensity={1} color="#84fae4" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <HeroLights/>
        <Suspense fallback={<CanvasLoader />}>
          <group
          scale={isMobile ? 0.5 : 1}
          position={[-0.5, -2.5, 0]}
          rotation={[0, -Math.PI/4, 0]}
          >
            <PC isMobile={isMobile}/>
          </group>
        </Suspense>

    </Canvas>
  )
}

export default HeroExperience