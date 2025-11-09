'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingBoxes() {
    const ref = useRef<THREE.Group>(null) // тип для group
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.002
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 6) * 0.1
        }
    })
    return (
        <group ref={ref as any}>
            <mesh position={[1.2, 0.3, -1.2]}>
                <boxGeometry args={[0.9, 0.9, 0.9]} />
                <meshStandardMaterial color="#7C3AED" metalness={0.6} roughness={0.1} />
            </mesh>
            <mesh position={[-1.2, -0.4, -0.6]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial color="#06B6D4" metalness={0.2} roughness={0.3} />
            </mesh>
        </group>
    )
}

export default function ThreeScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 4], fov: 50 }}
            style={{ height: '100%' }}
            // 🩹 обхід помилок типів
            gl={{ preserveDrawingBuffer: true } as any}
        >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <Suspense fallback={null}>
                <Stars radius={100} depth={50} count={3000} factor={4} fade />
                <FloatingBoxes />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Canvas>
    )
}
