// src/types/fiber.d.ts
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any
      group: any
      mesh: any
      boxGeometry: any
      sphereGeometry: any
      meshStandardMaterial: any
      ambientLight: any
      directionalLight: any
    }
  }
}

export {}
