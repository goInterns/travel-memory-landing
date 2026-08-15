'use client'

import { motion } from 'framer-motion'
import { MapPin, Compass, Camera, Map, Layers } from 'lucide-react'

const journeySteps = [
  {
    step: '01',
    phase: 'Discover',
    title: 'Smart POI Discovery',
    description: 'Hidden gems surfaced from OSM, Foursquare, and community layers — not just TripAdvisor top 10.',
    icon: Compass,
    color: 'sky',
    example: 'That sunrise viewpoint above McLeod Ganj that only has 23 reviews.',
  },
  {
    step: '02',
    phase: 'Plan',
    title: 'Visual Route Planning',
    description: 'Drag waypoints on a 3D map, auto-calculate drive times, flag timing conflicts.',
    icon: Map,
    color: 'forest',
    example: '"Day 3 is tight — move Triund to Day 4."',
  },
  {
    step: '03',
    phase: 'Experience',
    title: 'Live Navigation Companion',
    description: 'Turn-by-turn with context. "Approaching Murthal paratha stop in 2km — rated 4.7."',
    icon: MapPin,
    color: 'amber',
    example: 'Adaptive day/night map styles. Photo pinning to GPS tracks.',
  },
  {
    step: '04',
    phase: 'Remember',
    title: '3D Memory Replay',
    description: 'Fly through your trip in cinematic 3D. Export as 4K video or shareable web story.',
    icon: Camera,
    color: 'amber',
    example: '"Himalayan Loop 2024 — 520km, 6 days, 2,600m gain, 347 photos."',
  },
]

const stops = [
  { name: 'Delhi', date: 'Day 1', highlight: true },
  { name: 'Murthal', date: 'Day 1' },
  { name: 'Chandigarh', date: 'Day 2' },
  { name: 'Dharamshala', date: 'Day 3-4', highlight: true },
  { name: 'McLeod Ganj', date: 'Day 4' },
  { name: 'Triund', date: 'Day 5', highlight: true },
]

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works"
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="how-heading"
    >
      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-label text-amber-500 mb-4 inline-block">How It Works</span>
          <h2 id="how-heading" className="text-display-lg mb-6">
            The journey from start to memory.
          </h2>
          <p className="text-body-lg text-sand-400">
            See how Travel Memory connects every phase of travel into one seamless experience.
          </p>
        </motion.div>

        {/* Journey Flow */}
        <div className="relative">
          {/* Desktop: Horizontal flow */}
          <div className="hidden lg:block">
            <div className="flex items-start gap-8 xl:gap-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1"
                >
                  {/* Number badge */}
                  <div className="flex items-center justify-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                      style={{ 
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: '#0c0a09',
                      }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 text-center">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ 
                        background: step.color === 'sky' 
                          ? 'rgba(14, 165, 233, 0.1)' 
                          : step.color === 'forest' 
                            ? 'rgba(61, 128, 61, 0.1)' 
                            : 'rgba(245, 158, 11, 0.1)',
                        border: step.color === 'sky' 
                          ? '1px solid rgba(14, 165, 233, 0.2)' 
                          : step.color === 'forest' 
                            ? '1px solid rgba(61, 128, 61, 0.2)' 
                            : '1px solid rgba(245, 158, 11, 0.2)',
                      }}
                    >
                      <step.icon size={26} className={`text-${step.color}-500`} />
                    </div>
                    
                    <h3 className="text-heading-md text-sand-400">{step.phase}</h3>
                    <h4 className="text-heading-lg text-foreground">{step.title}</h4>
                    <p className="text-body-sm text-sand-400 leading-relaxed">{step.description}</p>
                    
                    <div 
                      className="mt-6 p-4 rounded-xl text-left" 
                      style={{ 
                        background: 'rgba(12, 10, 9, 0.6)',
                        border: '1px solid rgba(245, 158, 11, 0.08)',
                      }}
                    >
                      <p className="text-body-sm text-sand-400 italic">{step.example}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="lg:hidden space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      color: '#0c0a09',
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="w-[2px] h-full bg-sand-800/50 mt-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-sm text-sand-400 mb-1">{step.phase}</h3>
                  <h4 className="text-heading-md text-foreground mb-2">{step.title}</h4>
                  <p className="text-body-sm text-sand-400 leading-relaxed mb-4">{step.description}</p>
                  <p className="text-body-sm text-sand-500 italic">{step.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Showcase: Delhi → Triund */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 pt-12 border-t border-sand-800/50"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-label text-amber-500 mb-4 inline-block">Journey Showcase</span>
            <h3 className="text-display-lg mb-6">A real trip, reimagined.</h3>
            <p className="text-body-lg text-sand-400">
              Delhi → Murthal → Chandigarh → Dharamshala → McLeod Ganj → Triund
            </p>
            <p className="text-body-sm text-sand-500 mt-2">520km • 6 days • 2,600m elevation gain</p>
          </div>

          {/* Interactive map showcase */}
          <div className="relative max-w-4xl mx-auto">
            <JourneyMapShowcase stops={stops} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Journey Map Showcase Component
function JourneyMapShowcase({ stops }: { stops: { name: string; date: string; highlight?: boolean }[] }) {
  return (
    <div className="relative">
      {/* Map container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden" style={{ 
        background: 'linear-gradient(180deg, #0d1f0d 0%, #1c361c 50%, #0d1f0d 100%)',
        boxShadow: '0 40px 80px rgba(12, 10, 9, 0.4), inset 0 1px 0 rgba(245, 158, 11, 0.05)',
      }}>
        {/* Terrain texture */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
        }} />
        
        {/* Elevation profile / Terrain */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="none">
          <defs>
            <linearGradient id="elevationFill" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2e662e" />
              <stop offset="40%" stopColor="#3d803d" />
              <stop offset="70%" stopColor="#0c0a09" />
              <stop offset="100%" stopColor="#0a0f14" />
            </linearGradient>
            <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.9} />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity={1} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.9} />
            </linearGradient>
            <filter id="routeGlow">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Terrain */}
          <path d="M0,420 C100,380 150,400 250,370 C350,340 420,360 520,330 C620,300 700,330 800,300 L800,450 L0,450 Z"
                fill="url(#elevationFill)" />
          
          {/* Route line */}
          <motion.path
            d="M100,420 C200,380 250,340 320,320 C390,300 450,250 520,220 C600,180 680,100 760,60"
            stroke="url(#routeGradient)"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#routeGlow)"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            initial={{ strokeDashoffset: 1000, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Animated progress dot */}
          <motion.circle
            r={6}
            fill="#f59e0b"
            filter="url(#routeGlow)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
        
        {/* Stop markers */}
        <div className="absolute inset-0 pointer-events-none">
          {stops.map((stop, index) => {
            const positions = [
              { x: '12.5%', y: '93%' },   // Delhi
              { x: '31%', y: '84%' },      // Murthal
              { x: '48%', y: '76%' },     // Chandigarh
              { x: '65%', y: '62%' },     // Dharamshala
              { x: '75%', y: '51%' },     // McLeod Ganj
              { x: '90%', y: '23%' },     // Triund
            ]
            const pos = positions[index]
            
            return (
              <motion.div
                key={stop.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute"
                style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
              >
                {/* Pulse ring for highlights */}
                {stop.highlight && (
                  <motion.div
                    className="absolute -top-4 -left-4 w-16 h-16 rounded-full"
                    style={{ 
                      border: '2px solid rgba(245, 158, 11, 0.3)',
                      background: 'transparent',
                    }}
                    animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                
                {/* Pin */}
                <div 
                  className="relative w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ 
                    background: stop.highlight 
                      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                      : 'linear-gradient(135deg, #3d803d 0%, #2e662e 100%)',
                    boxShadow: '0 4px 20px rgba(12, 10, 9, 0.4), 0 0 0 3px rgba(12, 10, 9, 0.8)',
                    border: stop.highlight ? '2px solid #fbbf24' : '2px solid rgba(245, 158, 11, 0.15)',
                  }}
                >
                  <MapPin size={16} className="text-sand-50" />
                </div>

                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.15 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap text-sand-950"
                  style={{ 
                    background: stop.highlight 
                      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                      : 'linear-gradient(135deg, #3d803d 0%, #2e662e 100%)',
                    boxShadow: '0 4px 20px rgba(12, 10, 9, 0.3)',
                  }}
                >
                  {stop.name}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Photo thumbnail at Triund */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
          style={{ left: '90%', top: '23%', transform: 'translate(-50%, -120%)' }}
        >
          <div className="relative w-24 h-24 rounded-xl overflow-hidden" style={{ 
            border: '2px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 8px 32px rgba(12, 10, 9, 0.3)',
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-sand-800/30 to-sand-700/30 flex items-center justify-center">
              <Camera size={20} className="text-sand-300" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.4 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-sand-800/80 backdrop-blur-sm rounded text-xs text-sand-300 whitespace-nowrap"
          >
            Triund summit — 2,828m
          </motion.div>
        </motion.div>
        
        {/* Map style toggle */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
            className="p-2 rounded-lg bg-sand-950/80 border border-sand-700/50 text-sand-300 hover:text-amber-500 transition-all duration-200"
            aria-label="Toggle map style"
          >
            <Layers size={16} />
          </motion.button>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-3 gap-6 mt-10 text-center"
      >
        <div>
          <p className="text-2xl font-bold text-foreground">347</p>
          <p className="text-body-sm text-sand-500">Photos captured</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">14h</p>
          <p className="text-body-sm text-sand-500">Navigation time</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">2,600m</p>
          <p className="text-body-sm text-sand-500">Elevation gained</p>
        </div>
      </motion.div>
    </div>
  )
}