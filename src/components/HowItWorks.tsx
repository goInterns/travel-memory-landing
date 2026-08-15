'use client'

import { motion } from 'framer-motion'
import { Search, Map, Navigation, Camera, Share2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover Your Route',
    description: 'Search any destination or route — Delhi to Triund, Coastal Highway, Everest Base Camp. We surface the best POIs, hidden gems, and traveler stories along the way.',
    icon: Search,
    detail: '50M+ points of interest from OSM + community',
  },
  {
    number: '02',
    title: 'Plan Together',
    description: 'Drag stops onto your 3D map, set timing, add photos. Real-time collaboration with travel partners. Export to GPX for offline use.',
    icon: Map,
    detail: 'Offline maps for areas with no signal',
  },
  {
    number: '03',
    title: 'Experience Live',
    description: 'Navigate with context-aware turn-by-turn directions. Photo pins auto-attach to your GPS track. Adaptive day/night map styles.',
    icon: Navigation,
    detail: 'Voice guidance + real-time rerouting',
  },
  {
    number: '04',
    title: 'Remember Forever',
    description: 'Your journey transforms into a 3D memory. Fly through your route, relive photos at capture points, generate cinematic story videos.',
    icon: Camera,
    detail: 'Export as 4K video or shareable web page',
  },
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
            Four steps to memories
            <br />
            that last forever.
          </h2>
          <p className="text-body-lg text-sand-400">
            Discover, plan, experience, remember — all in one seamless journey.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-10 lg:left-[140px] top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, rgba(245,158,11,0.3) 0%, rgba(245,158,11,0.6) 50%, rgba(245,158,11,0.3) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 lg:gap-8 items-start group"
              >
                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0 w-28">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                    className="relative z-10 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ml-auto"
                    style={{
                      background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)',
                      border: '1px solid rgba(245,158,11,0.2)',
                    }}
                  >
                    <step.icon size={24} className="text-amber-500" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="absolute top-8 lg:top-10 left-1/2 lg:left-auto lg:right-[-40px] text-label font-semibold text-amber-500 whitespace-nowrap"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                  >
                    Step {step.number}
                  </motion.div>
                </div>

                {/* Step Content */}
                <div className="flex-1 group relative pl-2 lg:pl-4">
                  <motion.div
                    className="p-6 lg:p-8 rounded-2xl relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(28, 25, 23, 0.8) 0%, rgba(12, 10, 9, 0.9) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.06)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-heading-md text-foreground mb-2">{step.title}</h3>
                        <p className="text-body-md text-sand-300 leading-relaxed mb-4">{step.description}</p>
                        <p className="text-body-sm text-sand-500 italic border-t border-sand-800/50 pt-4">{step.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.02) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
            }}
          >
            <Share2 size={24} className="text-amber-500 flex-shrink-0" />
            <div className="text-left">
              <p className="text-body-sm font-medium text-foreground">Ready in 5 minutes. Memories for life.</p>
              <p className="text-body-sm text-sand-500">No credit card required. Cancel anytime. Your memories, your control.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
