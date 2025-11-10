'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

// 🩹 Обхід типів JSX елементів Three.js
const Group: any = 'group'
const Mesh: any = 'mesh'
const BoxGeometry: any = 'boxGeometry'
const SphereGeometry: any = 'sphereGeometry'
const MeshStandardMaterial: any = 'meshStandardMaterial'

function FloatingBoxes() {
    const groupRef = useRef<THREE.Group>(null!)

    useFrame((state) => {
        groupRef.current.rotation.y += 0.002
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 6) * 0.1
    })

    return (
        <Group ref={groupRef}>
            <Mesh position={[1.2, 0.3, -1.2]}>
                <BoxGeometry args={[0.9, 0.9, 0.9]} />
                <MeshStandardMaterial color="#7C3AED" metalness={0.6} roughness={0.1} />
            </Mesh>

            <Mesh position={[-1.2, -0.4, -0.6]}>
                <SphereGeometry args={[0.6, 32, 32]} />
                <MeshStandardMaterial color="#06B6D4" metalness={0.2} roughness={0.3} />
            </Mesh>
        </Group>
    )
}

export default function ThreeScene() {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ height: '100%' }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <Suspense fallback={null}>
                <Stars radius={100} depth={50} count={3000} factor={4} fade />
                <FloatingBoxes />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate />
        </Canvas>
    )
}
