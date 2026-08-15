'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="font-sans text-foreground bg-background min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Journey />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
