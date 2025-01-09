'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Stars from './stars'
import Moon from './moon'

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <Moon />
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  )
}

