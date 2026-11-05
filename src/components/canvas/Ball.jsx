import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const IconFallback = ({ icon, name }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div data-icon-fallback={name} className="w-full h-full flex items-center justify-center rounded-full bg-jetLight text-timberWolf">
      {imageFailed ? (
        <span className="font-poppins text-lg font-semibold">{name}</span>
      ) : (
        <img src={icon} alt="" className="w-16 h-16 object-contain" onError={() => setImageFailed(true)} />
      )}
    </div>
  );
};

// Keep texture or graphics failures inside this icon instead of unmounting App.
class IconBoundary extends React.Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name = 'Technology' }) => {
  const fallback = <IconFallback icon={icon} name={name} />;

  return (
    <IconBoundary key={icon} fallback={fallback}>
      <Canvas frameloop="always" dpr={[1, 1.5]} gl={{ preserveDrawingBuffer: true }} fallback={fallback}>
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={false} position0={0} />
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </IconBoundary>
  );
};

export default BallCanvas;
