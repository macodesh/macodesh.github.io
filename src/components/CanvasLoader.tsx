import { Html, useProgress } from '@react-three/drei'

export default function CanvasLoader(): React.JSX.Element {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  )
}
