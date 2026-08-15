import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductVisualization from '@/components/ProductVisualization'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import SocialProof from '@/components/SocialProof'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background min-h-screen">
        <Hero />
        <ProductVisualization />
        <Features />
        <HowItWorks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  )
}