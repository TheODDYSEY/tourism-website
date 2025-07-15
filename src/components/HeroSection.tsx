'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

function KenyaGlobe() {
  const groupRef = useRef<THREE.Group>(null);

  // Animate the globe rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Earth Base - Dark Blue Oceans */}
      <Sphere args={[1, 64, 64]} scale={2.2}>
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Continents Layer - Green Landmasses */}
      <Sphere args={[1, 64, 64]} scale={2.201}>
        <meshStandardMaterial
          color="#166534"
          roughness={0.9}
          metalness={0.05}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Kenya Highlight - Bright Green */}
      <Sphere args={[1, 32, 32]} scale={2.202}>
        <meshStandardMaterial
          color="#007A33"
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.4}
          emissive="#007A33"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Wireframe Grid - Subtle Blue */}
      <Sphere args={[1, 24, 12]} scale={2.205}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Atmospheric Glow */}
      <Sphere args={[1, 32, 32]} scale={2.4}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Golden Pulse Effect */}
      <Sphere args={[1, 16, 16]} scale={2.3}>
        <meshBasicMaterial
          color="#FFD100"
          transparent
          opacity={0.03}
        />
      </Sphere>
    </group>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-safari-50 via-white to-kenya-green/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight"
            >
              Kenya{' '}
              <span className="text-kenya-green">Astra</span>{' '}
              <span className="text-kenya-red">Hub</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-black leading-relaxed max-w-2xl"
            >
              Transform your Kenyan adventure with cutting-edge AI, AR cultural tours, 
              and immersive VR experiences. Discover Kenya&apos;s rich heritage while supporting 
              sustainable tourism and local communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: [
                    "#007A33",
                    "#FFD100", 
                    "#CE1126",
                    "#007A33"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative overflow-hidden text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white shadow-xl transform transition-all duration-300"
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  ✨ Start Your Journey ✨
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  borderColor: [
                    "#000000",
                    "#007A33",
                    "#FFD100",
                    "#CE1126",
                    "#000000"
                  ],
                  color: [
                    "#000000",
                    "#007A33",
                    "#FFD100",
                    "#CE1126",
                    "#000000"
                  ],
                  boxShadow: [
                    "0 0 0 0 rgba(0, 0, 0, 0)",
                    "0 0 0 8px rgba(0, 122, 51, 0.2)",
                    "0 0 0 12px rgba(255, 209, 0, 0.3)",
                    "0 0 0 8px rgba(206, 17, 38, 0.2)",
                    "0 0 0 0 rgba(0, 0, 0, 0)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative border-1 bg-transparent hover:bg-kenya-green hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg"
              >
                <motion.span
                  animate={{ 
                    opacity: [1, 0.7, 1],
                    scale: [1, 1.03, 1] 
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  🎭 Watch AR Preview 🎭
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-800">$1.2B</div>
                <div className="text-sm text-black">GDP Contribution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800">1.5M</div>
                <div className="text-sm text-black">Annual Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-800">24/7</div>
                <div className="text-sm text-black">AI Concierge</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Kenya Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-[600px] w-full"
          >
            <Canvas 
              camera={{ position: [0, 0, 6], fov: 45 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#007A33" />
              <directionalLight position={[5, 5, 5]} intensity={0.3} color="#FFD100" />
              <KenyaGlobe />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={0.8}
                enablePan={false}
                maxPolarAngle={Math.PI}
                minPolarAngle={0}
              />
            </Canvas>
            
            {/* Floating Elements with Random Movement */}
            <motion.div
              animate={{ 
                y: [-10, 15, -5, 20, -10],
                x: [0, -15, 10, -8, 0],
                rotate: [0, 8, -5, 12, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              className="absolute top-20 right-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-2xl">🦁</div>
              <div className="text-xs text-gray-600 mt-1 font-semibold">Maasai Mara</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [10, -15, 8, -20, 10],
                x: [0, 12, -8, 15, 0],
                rotate: [0, -10, 6, -15, 0]
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 0.8, 1]
              }}
              className="absolute bottom-32 left-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-2xl">🏔️</div>
              <div className="text-xs text-gray-600 mt-1 font-semibold">Mt. Kenya</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [-5, 18, -12, 25, -5],
                x: [0, -10, 15, -20, 0],
                rotate: [0, 15, -8, 20, 0]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1]
              }}
              className="absolute top-1/2 left-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-2xl">🏖️</div>
              <div className="text-xs text-gray-600 mt-1 font-semibold">Diani Beach</div>
            </motion.div>

            {/* Additional Floating Elements with Complex Random Patterns */}
            <motion.div
              animate={{ 
                y: [5, -20, 12, -8, 25, 5],
                x: [0, 18, -12, 22, -15, 0],
                rotate: [0, 25, -15, 30, -10, 0],
                scale: [1, 1.1, 0.9, 1.2, 0.95, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
              className="absolute top-10 left-1/3 bg-gradient-to-br from-kenya-gold to-yellow-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">🐘</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [-8, 20, -15, 18, -25, -8],
                x: [0, -20, 15, -18, 25, 0],
                rotate: [0, -20, 12, -25, 18, 0],
                scale: [1, 0.9, 1.15, 0.85, 1.1, 1]
              }}
              transition={{ 
                duration: 11, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.18, 0.35, 0.55, 0.75, 1]
              }}
              className="absolute bottom-20 right-1/4 bg-gradient-to-br from-kenya-green to-green-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">🦒</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [15, -8, 22, -18, 12, 15],
                x: [0, 25, -18, 20, -22, 0],
                rotate: [0, 35, -20, 40, -15, 0],
                scale: [1, 1.2, 0.8, 1.3, 0.9, 1]
              }}
              transition={{ 
                duration: 8.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.25, 0.45, 0.65, 0.85, 1]
              }}
              className="absolute top-1/3 right-5 bg-gradient-to-br from-kenya-red to-red-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">🦓</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [-12, 25, -8, 20, -15, -12],
                x: [0, -15, 20, -25, 18, 0],
                rotate: [0, -25, 15, -30, 20, 0],
                scale: [1, 0.95, 1.25, 0.9, 1.15, 1]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
              className="absolute bottom-40 left-1/4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">🏛️</div>
              <div className="text-xs text-gray-600 mt-1 font-semibold text-center">Lamu</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [8, -22, 15, -12, 28, 8],
                x: [0, 22, -15, 25, -20, 0],
                rotate: [0, 30, -18, 35, -12, 0],
                scale: [1, 1.1, 0.85, 1.25, 0.95, 1]
              }}
              transition={{ 
                duration: 9.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.22, 0.42, 0.62, 0.82, 1]
              }}
              className="absolute top-40 right-16 bg-gradient-to-br from-blue-400 to-blue-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">🐠</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [-6, 30, -20, 18, -25, -6],
                x: [0, -25, 18, -20, 30, 0],
                rotate: [0, -40, 25, -30, 35, 0],
                scale: [1, 0.9, 1.3, 0.8, 1.2, 1]
              }}
              transition={{ 
                duration: 13, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.15, 0.35, 0.55, 0.75, 1]
              }}
              className="absolute bottom-10 left-16 bg-gradient-to-br from-purple-400 to-purple-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">🦩</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [12, -18, 25, -15, 20, 12],
                x: [0, 20, -25, 18, -22, 0],
                rotate: [0, 20, -30, 25, -18, 0],
                scale: [1, 1.15, 0.9, 1.2, 0.85, 1]
              }}
              transition={{ 
                duration: 10.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
              className="absolute top-60 left-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-xl">☕</div>
              <div className="text-xs text-gray-600 mt-1 font-semibold text-center">Coffee</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
