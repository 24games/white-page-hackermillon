'use client'

import { motion } from 'framer-motion'
import { Bot, Brain, Database, Zap, Code, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

// Componente de Botão Neon
const NeonButton = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
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

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <main className="relative min-h-screen bg-dark-bg">
      {mounted && <MatrixBackground />}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6 leading-tight"
          >
            La Revolución Silenciosa: Bienvenido a la{' '}
            <span className="text-neon-green neon-glow">Era de los Agentes Autónomos</span>.
          </motion.h1>
          
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            La guía definitiva para clonar tu productividad configurando Inteligencia Artificial desde cero absoluto. 
            Deja de conversar con la IA. Comienza a programarla.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <NeonButton>
              QUIERO CREAR MI PRIMER AGENTE <Bot className="inline-block w-5 h-5" />
            </NeonButton>
          </motion.div>
        </div>
      </section>

      {/* Problema vs Solução */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Card Passado */}
            <GlassCard className="opacity-70">
              <div className="text-6xl mb-4">🥱</div>
              <h3 className="text-2xl font-space font-bold mb-4 text-gray-400">El Chatbot Estándar</h3>
              <p className="text-gray-400 text-lg">
                Microgestionas cada paso. Es como un practicante en su primer día.
              </p>
            </GlassCard>

            {/* Card Futuro */}
            <GlassCard glow={true}>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-space font-bold mb-4 text-neon-green">El Agente de IA</h3>
              <p className="text-gray-300 text-lg">
                Un empleado senior. Conoce el contexto, entiende el tono de voz y entrega el resultado listo.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Os 3 Pilares */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          >
            La Arquitectura de un <span className="text-neon-green">Agente Funcional</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <GlassCard className="text-center h-full">
                <Brain className="w-16 h-16 mx-auto mb-4 text-neon-green" />
                <h3 className="text-2xl font-space font-bold mb-4">La Persona</h3>
                <p className="text-gray-300">
                  <span className="text-neon-green font-semibold">¿Quién es?</span> Basta de respuestas genéricas. 
                  Aprende a activar partes específicas de la red neuronal para crear especialistas.
                </p>
              </GlassCard>
            </motion.div>

            {/* Pilar 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="text-center h-full">
                <Database className="w-16 h-16 mx-auto mb-4 text-neon-green" />
                <h3 className="text-2xl font-space font-bold mb-4">La Base de Conocimiento</h3>
                <p className="text-gray-300">
                  <span className="text-neon-green font-semibold">¿Qué sabe?</span> Inserta el cerebro de tu empresa 
                  (Manuales, Tablas, Historial) dentro de la IA.
                </p>
              </GlassCard>
            </motion.div>

            {/* Pilar 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
            >
              <GlassCard className="text-center h-full">
                <Zap className="w-16 h-16 mx-auto mb-4 text-neon-green" />
                <h3 className="text-2xl font-space font-bold mb-4">Las Acciones</h3>
                <p className="text-gray-300">
                  <span className="text-neon-green font-semibold">¿Qué hace?</span> Transforma datos en tareas. 
                  De correo a Trello, de planilla a informe.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework R.C.T.F. */}
      <section className="relative py-20 px-4 z-10 bg-dark-bg-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <Code className="w-20 h-20 mx-auto mb-6 text-neon-green" />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              El Secreto: La <span className="text-neon-green neon-glow">Ingeniería del Prompt</span>
            </h2>
            <p className="text-2xl font-space text-neon-green mb-8">Framework R.C.T.F.</p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              El método validado para eliminar alucinaciones de la IA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: 'R', word: 'Role', desc: 'Rol' },
              { letter: 'C', word: 'Context', desc: 'Contexto' },
              { letter: 'T', word: 'Task', desc: 'Tarea' },
              { letter: 'F', word: 'Format', desc: 'Formato' },
            ].map((item, index) => (
              <motion.div
                key={item.letter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard glow={true} className="text-center">
                  <div className="text-5xl font-orbitron font-bold text-neon-green mb-2">{item.letter}</div>
                  <h3 className="text-xl font-space font-bold mb-2">{item.word}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Técnicas Avançadas */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
          >
            Técnicas <span className="text-neon-green">Avanzadas</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <GlassCard glow={true} className="h-full">
                <h3 className="text-2xl font-space font-bold mb-4 text-neon-green">
                  Few-Shot Prompting
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  El Poder de los Ejemplos
                </p>
                <p className="text-gray-400">
                  Muestra a la IA ejemplos concretos de lo que quieres. Aprende el patrón y replica con precisión.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <GlassCard glow={true} className="h-full">
                <h3 className="text-2xl font-space font-bold mb-4 text-neon-green">
                  Chain of Thought
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  Enseñando a la IA a "pensar" antes de responder
                </p>
                <p className="text-gray-400">
                  Fuerza a la IA a mostrar su razonamiento paso a paso. Resultados más precisos y confiables.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 px-4 z-10 bg-dark-bg-alt">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              Deja de ser un <span className="text-gray-400">Operador</span>.
              <br />
              Conviértete en un <span className="text-neon-green neon-glow">Arquitecto de Inteligencia</span>.
            </h2>

            <div className="glass rounded-xl p-8 mb-10 text-left max-w-2xl mx-auto">
              <h3 className="text-2xl font-space font-bold mb-6 text-neon-green">Lo que vas a recibir:</h3>
              <ul className="space-y-4">
                {[
                  'Acceso al Prompt Maestro',
                  'Tutorial Paso a Paso (GPTs & Claude)',
                  'Guía de Limpieza de Datos (RAG)',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <NeonButton className="text-xl px-12 py-6">
                ACCEDER AL GUÍA AHORA <Bot className="inline-block w-6 h-6" />
              </NeonButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 text-center text-gray-500 z-10">
        <p>© 2024. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

