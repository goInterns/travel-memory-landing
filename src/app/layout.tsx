import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Travel Memory — Discover, Plan, Experience, Remember",
  description: "Turn your travels into living memories. Discover hidden gems, plan intelligent routes, navigate with context, and relive every journey in cinematic 3D.",
  keywords: "travel, journey, itinerary, offline maps, 3d replay, travel journal, GPX, Mapbox",
  authors: [{ name: "Travel Memory" }],
  openGraph: {
    title: "Travel Memory — Discover, Plan, Experience, Remember",
    description: "Turn your travels into living memories.",
    type: "website",
    locale: "en-US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://travelmemory.app",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0c0a09" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="bg-background text-foreground"
        style={{
          background: 'radial-gradient(circle at top right, rgba(245,158,11,0.03) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(14,165,233,0.03) 0%, transparent 50%), #0c0a09',
        }}
      >
        <div id="noise-overlay" className="fixed inset-0 pointer-events-none opacity-2" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundSize: '300px',
          mixBlendMode: 'overlay',
        }} />
        {children}
      </body>
    </html>
  )
}