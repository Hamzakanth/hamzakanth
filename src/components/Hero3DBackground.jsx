import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'

/* ── Glossy Torus Knot — main 3D accent (right side) ─────────── */
const GlassTorusKnot = () => {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = t * 0.15
    ref.current.rotation.y = t * 0.1
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={[3.2, 0.8, -1]} scale={0.9}>
        <torusKnotGeometry args={[1, 0.32, 128, 32]} />
        <meshPhysicalMaterial
          color="#00C9A7"
          roughness={0.05}
          metalness={0.1}
          transmission={0.6}
          thickness={1.2}
          ior={1.5}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

/* ── Floating Sphere — smooth circular 3D object (left side) ── */
const FloatingSphere = () => {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Gentle bobbing motion
    ref.current.position.y = -0.5 + Math.sin(t * 0.6) * 0.3
    ref.current.rotation.y = t * 0.08
  })

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={2}>
      <mesh ref={ref} position={[-3.5, -0.5, -2]} scale={1.3}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#2D3BCC"
          roughness={0.05}
          metalness={0.15}
          transmission={0.5}
          thickness={1}
          ior={1.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

/* ── Scene ────────────────────────────────────────────────────── */
export default function Hero3DBackground() {
  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[8, 8, 5]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#2D3BCC" />
        <pointLight position={[0, 5, 3]} intensity={0.6} color="#00C9A7" />

        <Suspense fallback={null}>
          <GlassTorusKnot />
          <FloatingSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}
