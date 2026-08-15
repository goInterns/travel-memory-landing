'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Compass, Camera, Map, ArrowRight, Sparkles } from 'lucide-react'

const heroContent = {
  badge: 'Discover → Plan → Experience → Remember',
  headline: 'Your travels deserve\nmore than photos in a cloud.',
  subheadline: 'One app that discovers hidden gems, plans intelligent routes, guides your journey, and turns every trip into an interactive 3D memory you can relive forever. From Delhi to Triund — and every moment between.',
  primaryCta: 'Join the Waitlist',
  secondaryCta: 'See the Journey',
  trustMetrics: [
    { value: 'Offline-first', label: 'Maps & routes' },
    { value: '3D terrain', label: 'Mapbox GL JS' },
    { value: 'Auto-story', label: 'Trip videos' },
  ],
  journeyStops: [
    { name: 'Delhi', coords: { lat: 28.7041, lng: 77.1025 }, icon: MapPin, highlight: true },
    { name: 'Murthal', coords: { lat: 29.0222, lng: 77.0708 }, icon: Compass },
    { name: 'Chandigarh', coords: { lat: 30.7333, lng: 76.7794 }, icon: MapPin },
    { name: 'Dharamshala', coords: { lat: 32.2190, lng: 76.3234 }, icon: Camera },
    { name: 'McLeod Ganj', coords: { lat: 32.2425, lng: 76.3388 }, icon: Camera },
    { name: 'Triund', coords: { lat: 32.2741, lng: 76.3667 }, icon: Compass, highlight: true },
  ],
}

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Forest glow */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 animate-float"
          style={{ background: 'radial-gradient(circle, #3d803d 0%, transparent 70%)' }}
        />
        {/* Amber glow */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 animate-float"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)', animationDelay: '-3s' }}
        />
        {/* Sky glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', animationDelay: '-1.5s' }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M 60 0 L 0 0 0 60\' fill=\'none\' stroke=\'%23f59e0b\' stroke-width=\'0.3\'/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
            >
              <Sparkles size={14} className="text-amber-500" />
              <span className="text-label text-amber-400">{heroContent.badge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl lg:text-[72px] leading-[1.05] tracking-tight"
            >
              Your travels deserve
              <br />
              <span className="text-gradient-amber">more than photos in a cloud.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-body-lg text-sand-400 max-w-xl leading-relaxed"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href="#cta"
                className="btn-primary text-label px-8 py-4 inline-flex items-center gap-2 w-full sm:w-auto"
              >
                {heroContent.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#journey"
                className="btn-secondary text-label px-8 py-4 inline-flex items-center gap-2 w-full sm:w-auto"
              >
                {heroContent.secondaryCta}
                <Map size={18} />
              </Link>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 lg:gap-10 pt-4 border-t border-sand-800/50"
            >
              {heroContent.trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2"
                >
                  <span className="text-display-sm font-semibold text-foreground">{metric.value}</span>
                  <span className="text-body-sm text-sand-500 hidden sm:inline">{metric.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Interactive Journey Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <JourneyMap stops={heroContent.journeyStops} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand-500"
        aria-hidden="true"
      >
        <span className="text-label">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

function JourneyMap({ stops }: { stops: { name: string; coords: { lat: number; lng: number }; icon: React.ComponentType<{ size?: number; className?: string }>; highlight?: boolean }[] }) {
  // Approximate SVG path for the route
  const routePath = "M100,380 C200,300 300,200 400,180 C480,140 580,100 680,60"
  
  return (
    <div className="relative aspect-[4/3] lg:aspect-[3/2] max-w-2xl mx-auto">
      {/* Map container */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ 
        background: 'linear-gradient(180deg, #0d1f0d 0%, #1c1917 50%, #0d1f0d 100%)',
        boxShadow: '0 0 0 1px rgba(245, 158, 11, 0.08), 0 40px 80px rgba(12, 10, 9, 0.4)',
      }}>
        {/* Terrain texture */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
        }} />
        
        {/* Route line - animated */}
        <motion.svg 
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 800 450"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.9} />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity={1} />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.9} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <motion.path
            d={routePath}
            stroke="url(#routeGradient)"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            className="route-line"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          
          {/* Route particles */}
          <motion.circle
            r={4}
            fill="#f59e0b"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              offset: [0, 1, 1]
            }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: 'linear' }}
          >
            <animateMotion path={routePath} dur="3s" repeatCount="indefinite" />
          </motion.circle>
        </motion.svg>

        {/* Elevation profile hint */}
        <div className="absolute bottom-6 left-6 right-6 h-16 rounded-lg" style={{ 
          background: 'rgba(12, 10, 9, 0.6)',
          border: '1px solid rgba(245, 158, 11, 0.1)',
          backdropFilter: 'blur(10px)',
        }}>
          <svg className="w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
            <path
              d="M10,50 C50,30 100,40 150,25 C200,10 250,20 300,15 C350,10 390,8"
              stroke="#f59e0b"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              opacity={0.8}
            />
            <text x="15" y="12" fill="#f59e0b" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">Elevation Profile</text>
            <text x="15" y="55" fill="#a8a29e" fontSize="9" fontFamily="Inter, sans-serif">200m → 2,828m</text>
          </svg>
        </div>
      </div>

      {/* Stop markers overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {stops.map((stop, index) => {
          // Approximate positions along the route
          const positions = [
            { x: 12.5, y: 84.4 },   // Delhi
            { x: 25, y: 66.7 },     // Murthal
            { x: 37.5, y: 55.6 },   // Chandigarh
            { x: 62.5, y: 33.3 },   // Dharamshala
            { x: 70, y: 26.7 },     // McLeod Ganj
            { x: 85, y: 13.3 },     // Triund
          ]
          const pos = positions[index] || { x: 50, y: 50 }
          
          return (
            <motion.div
              key={stop.name}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1 + index * 0.15, 
                ease: [0.34, 1.56, 0.64, 1] 
              }}
              className="absolute"
              style={{ 
                left: `${pos.x}%`, 
                top: `${pos.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative">
                {/* Pulse ring for highlights */}
                {stop.highlight && (
                  <motion.div
                    className="absolute -top-1/2 -left-1/2 w-16 h-16 rounded-full"
                    style={{ 
                      border: '2px solid rgba(245, 158, 11, 0.4)',
                      background: 'transparent',
                    }}
                    animate={{ 
                      scale: [1, 1.5], 
                      opacity: [0.6, 0] 
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                
                {/* Pin */}
                <div 
                  className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer group"
                  style={{ 
                    background: stop.highlight 
                      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                      : 'linear-gradient(135deg, #3d803d 0%, #2e662e 100%)',
                    boxShadow: '0 4px 20px rgba(12, 10, 9, 0.4), 0 0 0 3px rgba(12, 10, 9, 0.8)',
                    border: stop.highlight ? '2px solid #fbbf24' : '2px solid rgba(245, 158, 11, 0.2)',
                  }}
                >
                  <stop.icon size={18} className="text-sand-50" />
                </div>

                {/* Label tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.3 + index * 0.15 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap text-sand-950"
                  style={{ 
                    background: stop.highlight 
                      ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                      : 'linear-gradient(135deg, #3d803d 0%, #2e662e 100%)',
                    boxShadow: '0 4px 20px rgba(12, 10, 9, 0.3)',
                  }}
                >
                  {stop.name}
                  {stop.highlight && <span className="ml-1">★</span>}
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Legend / Context */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-80px] left-0 right-0 flex flex-col items-center gap-3 pointer-events-auto"
      >
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }} />
            <span className="text-body-sm text-sand-400">Key destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, #3d803d 0%, #2e662e 100%)' }} />
            <span className="text-body-sm text-sand-400">Waypoints</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-20 h-1 rounded" style={{ background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #38bdf8)' }} />
            <span className="text-body-sm text-sand-400">Your route</span>
          </div>
        </div>
        <p className="text-body-sm text-sand-500 text-center max-w-md">
          Delhi → Murthal → Chandigarh → Dharamshala → McLeod Ganj → Triund • 520km • 14hrs drive • 2,600m elevation gain
        </p>
      </motion.div>
    </div>
  )
}