import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travel Memory — Your journeys, on a living 3D map',
  description:
    'Not photos in a cloud. Travel Memory turns every trip into a real, interactive 3D map — discover the stops, plan the route, experience the drive, and relive it forever. Delhi to Triund and every moment between.',
  keywords: ['travel', '3D map', 'journey', 'itinerary', 'offline maps', 'travel journal', 'route planning', 'OpenStreetMap'],
  authors: [{ name: 'Travel Memory' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://travel-memory-landing.vercel.app',
    title: 'Travel Memory — Your journeys, on a living 3D map',
    description: 'Every journey becomes a living map.',
    siteName: 'Travel Memory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Memory — Your journeys, on a living 3D map',
    description: 'Every journey becomes a living map.',
  },
}

export const viewport: Viewport = {
  themeColor: '#07090c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-500 focus:text-ink">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
