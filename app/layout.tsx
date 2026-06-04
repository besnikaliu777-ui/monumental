import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Monumental Decor',
  description: 'Statues et décorations artisanales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
