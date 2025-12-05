import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'La Era de los Agentes Autónomos - Revolución de la IA',
  description: 'La guía definitiva para clonar tu productividad configurando Inteligencia Artificial desde cero absoluto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL">
      <body>{children}</body>
    </html>
  )
}

