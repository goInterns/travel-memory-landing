'use client'

import { motion } from 'framer-motion'
import { MapPin, Compass, Camera, Mountain, Sunrise, Trees, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const journeyStops = [
  { name: 'Delhi', subtitle: 'Start your journey', icon: MapPin, color: '#f59e0b', duration: 'Day 1' },
  { name: 'Murthal', subtitle: 'Paratha stop 🥟', icon: MapPin, color: '#f59e0b', duration: '2hr' },
  { name: 'Chandigarh', subtitle: 'City break', icon: Compass, color: '#0ea5e9', duration: 'Day 2' },
  { name: 'Dharamshala', subtitle: 'Mountain air', icon: Mountain, color: '#3d803d', duration: 'Day 3' },
  { name: 'McLeod Ganj', subtitle: 'Monastery views', icon: Camera, color: '#f59e0b', duration: 'Day 4' },
  { name: 'Triund', subtitle: 'Summit sunrise', icon: Sunrise, color: '#fbbf24', duration: 'Day 5' },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="journey-heading"
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
          <span className="text-label text-amber-500 mb-4 inline-block">The Journey</span>
          <h2 id="journey-heading" className="text-display-lg mb-6">
            A journey from start to summit.
            <br />
            Watch it come alive.
          </h2>
          <p className="text-body-lg text-sand-400">
            Delhi → Murthal → Chandigarh → Dharamshala → McLeod Ganj → Triund.
            <br />
            520km, 6 days, 2,600m elevation gain — and every moment preserved.
          </p>
        </motion.div>

        {/* Interactive Journey Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline path */}
          <div className="absolute left-10 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/50 via-amber-500/80 to-transparent lg:translate-x-[-1px]" aria-hidden="true" />

          <div className="space-y-8 lg:space-y-0">
            {journeyStops.map((stop, index) => (
              <motion.div
                key={stop.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center gap-8 lg:even:flex-row-reverse"
              >
                {/* Stop node */}
                <div
                  className="absolute left-10 lg:left-1/2 lg:-translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-2xl border-2"
                  style={{
                    background: `linear(135deg, ${stop.color} 0%, #0c0a09 100%)`,
                    borderColor: stop.color,
                    boxShadow: `0 0 20px ${stop.color}30`,
                  }}
                >
                  <stop.icon size={18} className="text-sand-50" />
                </div>

                {/* Stop card */}
                <motion.div
                  className="ml-20 lg:ml-0 lg:w-5/12 bg-sand-950/80 border border-sand-800/50 rounded-2xl p-6 shadow-xl"
                  style={{
                    boxShadow: '0 12px 32px rgba(12, 10, 9, 0.2), 0 4px 8px rgba(12, 10, 9, 0.15)',
                  }}
                  whileHover={{ y: -4, borderColor: 'rgba(245, 158, 11, 0.3)' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-label font-medium"
                      style={{ color: stop.color }}
                    >
                      {stop.duration}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-sand-600" />
                    <span className="text-body-sm text-sand-500">{stop.subtitle}</span>
                  </div>

                  <h3 className="text-heading-md text-foreground mb-2">{stop.name}</h3>

                  {index === journeyStops.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-amber-400"
                    >
                      <span>The summit — sunrise over the Dhauladhar range</span>
                      <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ChevronRight size={14} />
                      </motion.div>
                    </motion.div>
                  )}

                  {index === 0 && (
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                        <Trees size={16} className="text-amber-500" />
                      </div>
                      <p className="text-body-sm text-sand-400">Starting elevation: 210m</p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Connecting line with dots */}
          <div className="mt-16 pt-12 border-t border-sand-800/30 text-center">
            <p className="text-body-sm text-sand-500 mb-4">
              Ready to start your own journey?
            </p>
            <Link
              href="#cta"
              className="btn-primary text-label px-8 py-4 inline-flex items-center gap-2"
            >
              Join the waitlist
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
