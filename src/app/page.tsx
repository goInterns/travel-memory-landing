import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Discover from '@/components/Discover'
import Save from '@/components/Save'
import MapStage from '@/components/MapStage'
import Remember from '@/components/Remember'
import TravelStory from '@/components/TravelStory'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="font-sans text-foreground bg-background min-h-screen">
      <Navbar />
      <main id="main-content">
        {/* Light editorial chapters lead into… */}
        <Hero />
        <Discover />
        <Save />
        {/* …the dark cinematic 3D map journey… */}
        <MapStage />
        {/* …then the core memory moment and the payoff, back on paper. */}
        <Remember />
        <TravelStory />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
