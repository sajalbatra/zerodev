'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Moon() {
  const moonRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.001
      moonRef.current.position.y = Math.sin(state.clock.elapsedTime / 2) * 0.1
    }
  })

  return (
    <mesh
      ref={moonRef}
      position={[2, 0, 0]}
      scale={0.2}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#CCCCCC" />
    </mesh>
  )
}

