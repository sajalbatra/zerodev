// 'use client'

// import { useRef, useMemo } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Points, PointMaterial } from '@react-three/drei'
// import * as random from 'maath/random'

// export default function Stars() {
//   const ref = useRef<any>()
//   const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), [])

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10
//       ref.current.rotation.y -= delta / 15
//     }
//   })

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
//         <PointMaterial
//           transparent
//           color="#ffffff"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   )
// }

