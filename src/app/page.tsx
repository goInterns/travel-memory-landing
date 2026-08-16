import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import MapStage from '@/components/MapStage'
import Phases from '@/components/Phases'
import Trust from '@/components/Trust'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="font-sans text-foreground bg-background min-h-screen">
      <Navbar />
      <main id="main-content">
        <Intro />
        <MapStage />
        <Phases />
        <Trust />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
