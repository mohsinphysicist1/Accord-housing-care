import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Accord Housing & Care - Residential Foster Care for Children',
  description: 'Providing safe, nurturing residential care and foster services for children aged 8-18. Empowering young lives with compassion and support.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
