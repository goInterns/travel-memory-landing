import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Travel Memory — Discover, Plan & Remember Trips in 3D",
  description: "The only travel app that connects discovery, planning, experience, and memory into one seamless journey. From Delhi to Triund — and every moment between.",
  keywords: [
    "travel app",
    "3D maps",
    "trip planning",
    "travel journal",
    "offline maps",
    "route planning",
    "community photos",
    "travel stories",
  ],
  authors: [{ name: "Travel Memory" }],
  creator: "Travel Memory",
  publisher: "Travel Memory",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travel-memory.app",
    title: "Travel Memory — Discover, Plan & Remember Trips",
    description: "The only travel app that connects discovery, planning, experience, and memory.",
    siteName: "Travel Memory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Memory — Discover, Plan & Remember Trips",
    description: "The only travel app that connects discovery, planning, experience, and memory.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
