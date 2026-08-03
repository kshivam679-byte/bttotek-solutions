import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bttotek.com'),
  title: {
    default: 'BTTOTEK Solutions — 100+ Free Online Tools & Calculators',
    template: '%s | BTTOTEK Solutions',
  },
  description:
    'BTTOTEK Solutions offers 100+ fast, free, and reliable online tools and calculators — from PDF converters and image compressors to financial, health, and developer calculators. No signup required.',
  keywords: [
    'online tools',
    'free calculators',
    'PDF tools',
    'image converter',
    'unit converter',
    'SEO tools',
    'developer tools',
    'BTTOTEK',
  ],
  authors: [{ name: 'BTTOTEK Solutions' }],
  creator: 'BTTOTEK Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bttotek.com',
    siteName: 'BTTOTEK Solutions',
    title: 'BTTOTEK Solutions — 100+ Free Online Tools & Calculators',
    description:
      '100+ fast, free, and reliable online tools and calculators. No signup required.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTTOTEK Solutions — 100+ Free Online Tools & Calculators',
    description:
      '100+ fast, free, and reliable online tools and calculators. No signup required.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ea6a1f',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
