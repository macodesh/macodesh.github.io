import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'
import CanvasLoader from '../CanvasLoader'

function Stars({ count }: { count: number }): React.JSX.Element {
  const points = useRef({
    rotation: {
      x: 0,
      y: 0
    }
  } as THREE.Points)

  // Função utilitária para "randomizar" as estrelas
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const distance = 1

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      const x = distance * Math.sin(theta) * Math.cos(phi)
      const y = distance * Math.sin(theta) * Math.sin(phi)
      const z = distance * Math.cos(theta)

      positions.set([x, y, z], i * 3)
    }

    return positions
  }, [count])

  useFrame((_, delta) => {
    points.current.rotation.x += delta / 10
    points.current.rotation.y += delta / 15
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.003}
        color="#5786F5"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function StarsCanvas(): React.JSX.Element {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 0.01] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars count={5000} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}
