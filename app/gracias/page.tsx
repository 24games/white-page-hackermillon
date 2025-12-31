'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Componente de Botão Neon
const NeonButton = ({ children, onClick, className = '', href }: { children: React.ReactNode, onClick?: () => void, className?: string, href?: string }) => {
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.8)' }}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-block px-8 py-4 bg-neon-green text-black font-bold text-lg rounded-lg overflow-hidden group ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-green-alt opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.8)' }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-4 bg-neon-green text-black font-bold text-lg rounded-lg overflow-hidden group ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-green-alt opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </motion.button>
  )
}

// Componente de Card Glassmorphism
const GlassCard = ({ children, className = '', glow = false }: { children: React.ReactNode, className?: string, glow?: boolean }) => {
  return (
    <div className={`glass rounded-xl p-6 ${glow ? 'border-neon-green shadow-neon' : 'border-gray-800'} ${className}`}>
      {children}
    </div>
  )
}

// Componente de Partículas Matrix (simplificado)
const MatrixBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [particles] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      text: Math.random().toString(36).substring(7),
    }))
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.08] z-0">
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-neon-green font-mono text-xs"
            style={{ left: `${particle.x}%` }}
            initial={{ y: -100 }}
            animate={{
              y: dimensions.height + 100,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
          >
            {particle.text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function GraciasPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <main className="relative min-h-screen bg-dark-bg flex items-center justify-center px-4 py-20">
      {mounted && <MatrixBackground />}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Título Principal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-orbitron font-bold mb-12 leading-tight"
        >
          <span className="text-neon-green neon-glow">¡Gracias!</span>
        </motion.h1>

        {/* Texto de instrucción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          ¡Felicitaciones por asegurar tu acceso! Haz clic en el botón de abajo para recibir ahora mismo
        </motion.p>

        {/* Botón de WhatsApp */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <NeonButton 
            href="https://wa.me/11958065533?text=%C2%A1Realic%C3%A9%20el%20pago%20por%20flow!"
            className="text-xl px-12 py-6"
          >
            Haz Clic Aquí
          </NeonButton>
        </motion.div>
      </div>
    </main>
  )
}

