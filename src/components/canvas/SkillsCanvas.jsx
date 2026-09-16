import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const SkillBall = ({ position, imgUrl }) => {
  const decal = useTexture(imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1.4} position={position}>
      <mesh castShadow receiveShadow scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const SkillsGrid = ({ technologies }) => {
  const columns = technologies.length > 20 ? 7 : technologies.length > 12 ? 6 : 4;
  const spacing = 2.7;

  const positions = useMemo(() => {
    const rows = Math.ceil(technologies.length / columns);
    return technologies.map((_, i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      const x = (col - (columns - 1) / 2) * spacing;
      const y = ((rows - 1) / 2 - row) * spacing;
      return [x, y, 0];
    });
  }, [technologies, columns]);

  return (
    <>
      {technologies.map((tech, i) => (
        <SkillBall key={tech.name} position={positions[i]} imgUrl={tech.icon} />
      ))}
    </>
  );
};

const SkillsCanvas = ({ technologies }) => {
  const rows = Math.ceil(technologies.length / (technologies.length > 20 ? 7 : technologies.length > 12 ? 6 : 4));
  const cameraZ = 9 + rows * 1.6;

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [0, 0, cameraZ], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 0, 5]} intensity={0.6} />
        <OrbitControls enableZoom={false} />
        <SkillsGrid technologies={technologies} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SkillsCanvas;
