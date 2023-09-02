import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'

function Earth(): React.JSX.Element {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.2}
      position-y={0}
      rotation-y={0}
    />
  )
}

export default function EarthCanvas(): React.JSX.Element {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      title="Nosso planeta atualmente tem mais de 8 bilhões de pessoas!"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
