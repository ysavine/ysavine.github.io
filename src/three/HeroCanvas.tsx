import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const HeroCanvas = (): JSX.Element => (
  <div className="hero-canvas">
    <Canvas camera={{ position: [0, 0, 4] }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.35} castShadow />
      <Suspense fallback={null}>
        <mesh rotation={[0.4, 0.6, 0.2]} castShadow>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial color="#8B6F47" roughness={0.25} metalness={0.45} />
        </mesh>
      </Suspense>
    </Canvas>
    <p className="hero-canvas__note">
      TODO: Replace placeholder geometry with a bespoke 3D element that reinforces your brand.
    </p>
  </div>
);

export default HeroCanvas;
