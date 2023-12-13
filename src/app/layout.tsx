import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TEAM',
  description: 'Website for small and medium business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
