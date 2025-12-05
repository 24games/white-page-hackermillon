'use client'

import { motion } from 'framer-motion'
import { Bot, CheckCircle, MessageCircle } from 'lucide-react'
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  return (
    <main className="relative min-h-screen bg-dark-bg flex items-center justify-center px-4 py-20">
      {mounted && <MatrixBackground />}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Ícone de Sucesso */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neon-green/20 border-4 border-neon-green mb-6">
            <CheckCircle className="w-16 h-16 text-neon-green" />
          </div>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-orbitron font-bold mb-6 leading-tight"
        >
          <span className="text-neon-green neon-glow">¡Gracias por tu Compra!</span>
        </motion.h1>

        {/* Mensagem de Agradecimiento */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard glow={true} className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Tu acceso a <span className="text-neon-green font-bold">La Era de los Agentes Autónomos</span> está listo.
            </p>
            <p className="text-lg text-gray-400">
              Has dado el primer paso para convertirte en un <span className="text-neon-green">Arquitecto de Inteligencia</span>. 
              Ahora tienes todo lo necesario para crear agentes de IA que trabajen para ti.
            </p>
          </GlassCard>
        </motion.div>

        {/* Información Adicional */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <GlassCard className="max-w-xl mx-auto text-left">
            <h2 className="text-2xl font-space font-bold mb-4 text-neon-green">
              ¿Qué sigue ahora?
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                <span>Revisa tu correo para acceder al contenido completo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                <span>Sigue el tutorial paso a paso para crear tu primer agente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                <span>Aplica el Framework R.C.T.F. en tus proyectos</span>
              </li>
            </ul>
          </GlassCard>
        </motion.div>

        {/* Botón de WhatsApp */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <NeonButton 
            href="https://w.app/8qbvld"
            className="text-xl px-12 py-6"
          >
            <MessageCircle className="inline-block w-6 h-6" />
            Pedir Acceso Extra
          </NeonButton>
        </motion.div>

        {/* Mensaje Final */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
          className="mt-12 text-gray-500 text-lg"
        >
          ¡Bienvenido a la revolución de la IA! <Bot className="inline-block w-5 h-5 text-neon-green" />
        </motion.p>
      </div>
    </main>
  )
}

