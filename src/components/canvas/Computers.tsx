import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'

function Computers({ isMobile }: { isMobile: boolean }): React.JSX.Element {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight
        intensity={1.5}
        groundColor="black"
      />
      <pointLight intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export default function ComputersCanvas(): React.JSX.Element {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Adiciona um listener para mudanças de tamanho de tela
    const mediaQuery = window.matchMedia('(max-width:500px)')

    // Define o valor inicial do estado "isMobile"
    setIsMobile(mediaQuery.matches)

    // Define uma callback para gerenciar o evento que é disparado ao mudar o tamanho da tela
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addListener(handleMediaQueryChange)

    // Remove o listener quando o componente é desmontado
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      title="Meu laboratório secreto, no porão de casa"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
