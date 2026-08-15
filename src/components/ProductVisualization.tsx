'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Brain, 
  Shield, 
  Camera,
  Map,
  Star,
  Layers,
} from 'lucide-react'

const productFeatures = [
  {
    icon: Map,
    title: '3D Map Visualization',
    description: 'Terrain-accurate 3D maps with elevation profiles. See your route rise from Delhi plains to Triund summit.',
    metric: 'Terrain-accurate',
    color: 'sky',
  },
  {
    icon: Camera,
    title: 'Photo Memory Anchoring',
    description: 'Photos auto-attach to GPS coordinates. Tap any point on your route to see what was there.',
    metric: 'Geo-tagged',
    color: 'amber',
  },
  {
    icon: Brain,
    title: 'AI-Powered Discovery',
    description: 'Surfaces hidden gems from OSM + Foursquare + community data. That dhaba in Murthal only locals know.',
    metric: '50M+ POIs',
    color: 'forest',
  },
  {
    icon: Smartphone,
    title: 'Offline-First',
    description: 'Download entire routes, maps, and photos for offline use. No signal? No problem.',
    metric: 'Zero dependency',
    color: 'sky',
  },
  {
    icon: Star,
    title: 'Cinematic 3D Replay',
    description: 'Fly through your trip in 3D. Export as 4K video or shareable web story.',
    metric: '4K export',
    color: 'amber',
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Your journeys are yours. Export in open formats (GPX, KML, GeoJSON). Own your data.',
    metric: 'Open formats',
    color: 'forest',
  },
]

export default function ProductVisualization() {
  return (
    <section 
      id="product"
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="product-heading"
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
          <span className="text-label text-amber-500 mb-4 inline-block">Product</span>
          <h2 id="product-heading" className="text-display-lg mb-6">
            Your trip, reimagined\nin cinematic 3D.
          </h2>
          <p className="text-body-lg text-sand-400">
            Travel Memory doesn&apos;t just track where you went — it turns every journey into an
            interactive 3D experience you can relive forever.
          </p>
        </motion.div>

        {/* Mobile App Showcase with 3D Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          {/* Phone in landscape with 3D map */}
          <div className="relative mx-auto" style={{ 
            maxWidth: '640px', 
            aspectRatio: '640 / 360',
          }}>
            {/* Phone bezel */}
            <div 
              className="absolute inset-0 rounded-[32px] overflow-hidden"
              style={{ 
                background: 'linear-gradient(180deg, #0c0a09 0%, #1c361c 50%, #0c0a09 100%)',
                boxShadow: '0 0 0 4px rgba(12,10,9,1), 0 0 0 6px rgba(38,40,38,0.5), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,158,11,0.05)',
              }}
            >
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-5 rounded-full bg-sand-950/80 backdrop-blur-sm border border-sand-700/50 z-10" />
              
              {/* Screen Content - 3D Map */}
              <div className="absolute inset-[16px] rounded-[20px] overflow-hidden" style={{ background: '#0a0f14' }}>
                <div className="absolute inset-0">
                  {/* Terrain background */}
                  <div className="absolute inset-0" style={{ 
                    background: 'linear-gradient(180deg, #0d1f0d 0%, #0c0a09 50%, #0a0f14 100%)',
                  }} />
                  {/* Terrain texture */}
                  <div className="absolute inset-0 opacity-10" style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
                    backgroundSize: '200px',
                  }} />
                  {/* Terrain peaks */}
                  <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="elevationGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#2e662e" />
                        <stop offset="50%" stopColor="#3d803d" />
                        <stop offset="100%" stopColor="#0c0a09" />
                      </linearGradient>
                    </defs>
                    <path d="M0,260 C60,220 100,250 150,210 C220,160 280,200 350,160 C400,135 450,160 500,140 C550,120 600,150 600,140 L600,300 L0,300 Z"
                          fill="url(#elevationGradient)" />
                  </svg>
                  {/* Route path */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.9} />
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity={1} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0.9} />
                      </linearGradient>
                      <filter id="routeGlow">
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feMerge>
                          <feMergeNode in="blur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path
                      d="M40,260 C80,240 120,250 180,220 C240,190 280,200 340,180 C420,150 480,160 560,130"
                      stroke="url(#routeGradient)"
                      strokeWidth={4}
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#routeGlow)"
                      strokeDasharray="800"
                      strokeDashoffset="800"
                      initial={{ strokeDashoffset: 800 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Animated dot */}
                    <motion.circle
                      r={6}
                      fill="#f59e0b"
                      filter="url(#routeGlow)"
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{ offsetDistance: "100%", opacity: 1 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    >
                      <animateMotion 
                        path="M40,260 C80,240 120,250 180,220 C240,190 280,200 340,180 C420,150 480,160 560,130" 
                        dur="12s" 
                        repeatCount="indefinite" 
                      />
                    </motion.circle>
                    {/* Photo pins */}
                    <motion.circle cx="180" cy="200" r={8} fill="#38bdf8" />
                    <motion.circle cx="340" cy="160" r={8} fill="#22c55e" />
                    <motion.circle cx="480" cy="130" r={8} fill="#f59e0b" />
                  </svg>
                  {/* Labels */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 px-3 py-2 rounded-lg" style={{ 
                    background: 'rgba(12, 10, 9, 0.7)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                  }}>
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse-gentle" />
                    <span className="text-xs text-sand-300">Delhi → Triund</span>
                    <span className="text-xs text-sand-500">520km • 6 days</span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ 
                    background: 'rgba(12, 10, 9, 0.7)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                  }}>
                    <Layers size={14} className="text-sky-400" />
                    <span className="text-xs text-sand-300">3D mode active</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Control dots */}
            <motion.div
              className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex items-center gap-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="w-2 h-2 rounded-full"
                  style={{ 
                    background: index === 0 ? '#f59e0b' : 'rgba(168, 162, 158, 0.3)',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group feature-card relative p-6 lg:p-8 rounded-2xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(28, 25, 23, 0.8) 0%, rgba(12, 10, 9, 0.9) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.08)',
                boxShadow: '0 4px 12px rgba(12, 10, 9, 0.15)',
              }}
            >
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)' }} />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                  <feature.icon size={24} className="text-amber-500" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-heading-sm text-foreground">{feature.title}</h3>
                  <span className="text-label text-amber-500/80 whitespace-nowrap">{feature.metric}</span>
                </div>
                
                <p className="text-body-sm text-sand-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}