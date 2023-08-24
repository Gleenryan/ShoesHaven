import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import { Carousels } from '@/components'

const dosis = Dosis({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'shoesHaven',
  description: 'A place for shoes enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Navbar />
        <Carousels />
        {children}
      </body>
    </html>
  )
}
