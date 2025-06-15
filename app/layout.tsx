import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Igreja Presbiteriana Metropolitana - São Paulo',
  description: 'Uma comunidade de fé no coração de São Paulo, vivenciando o amor de Cristo em comunhão. Junte-se a nós em nossos cultos dominicais.',
  keywords: 'igreja, presbiteriana, metropolitana, são paulo, culto, comunidade, fé, cristo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛪</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
