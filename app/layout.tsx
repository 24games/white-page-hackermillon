import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A Era dos Agentes Autônomos - Revolução da IA',
  description: 'O guia definitivo para clonar sua produtividade configurando Inteligência Artificial do absoluto zero.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

