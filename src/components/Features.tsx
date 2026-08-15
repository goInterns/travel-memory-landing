'use client'

import { motion } from 'framer-motion'
import { 
  Compass, 
  Camera, 
  Map,
  Layers,
  Zap,
  Heart,
  Share2,
  Mountain,
} from 'lucide-react'

const features = [
  {
    category: 'Discover',
    icon: Compass,
    color: 'sky',
    bgColor: 'rgba(14, 165, 233, 0.1)',
    borderColor: 'rgba(14, 165, 233, 0.2)',
    items: [
      {
        title: 'Smart POI Discovery',
        description: 'OSM + Foursquare + community data surfaces hidden gems: that dhaba in Murthal, the sunrise spot above McLeod Ganj, the local cafe only hikers know.',
        metric: '50M+ POIs',
      },
      {
        title: 'Route Intelligence',
        description: 'Not just A→B. Scenic detours, elevation profiles, fuel stops, viewpoint alerts.',
        metric: 'Multi-criteria',
      },
      {
        title: 'Community Layers',
        description: 'Toggle photo heatmaps, recent traveler reviews, seasonal conditions.',
        metric: 'Real-time',
      },
    ],
  },
  {
    category: 'Plan',
    icon: Map,
    color: 'forest',
    bgColor: 'rgba(61, 128, 61, 0.1)',
    borderColor: 'rgba(61, 128, 61, 0.2)',
    items: [
      {
        title: 'Visual Itinerary Builder',
        description: 'Drag-and-drop days on a map. Auto-calculates drive times, suggests stop spacing.',
        metric: 'Smart scheduling',
      },
      {
        title: 'Collaborative Planning',
        description: 'Real-time co-editing with travel partners. Vote on stops, assign research.',
        metric: 'Multiplayer',
      },
      {
        title: 'Offline-First Export',
        description: 'One tap downloads maps, routes, POIs, and photos. GPX/KML export.',
        metric: 'Zero dependency',
      },
    ],
  },
  {
    category: 'Experience',
    icon: Mountain,
    color: 'amber',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.2)',
    items: [
      {
        title: 'Live Navigation Companion',
        description: 'Turn-by-turn with context: "Approaching Murthal paratha stop in 2km."',
        metric: 'Context-aware',
      },
      {
        title: 'Photo Pinning',
        description: 'Photos auto-attach to route coordinates. Tap a pin later to relive the view.',
        metric: 'Geo-tagged',
      },
      {
        title: 'Adaptive Day/Night',
        description: 'Map style shifts with ambient light. Dark mode for night drives.',
        metric: 'Auto-switch',
      },
    ],
  },
  {
    category: 'Remember',
    icon: Camera,
    color: 'amber',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.2)',
    items: [
      {
        title: '3D Memory Replay',
        description: 'Fly through your trip in 3D. Camera follows GPS track, photos appear at capture points.',
        metric: 'Cinematic',
      },
      {
        title: 'Auto-Story Generation',
        description: 'AI assembles highlight reels: best photos + route map + stats + music.',
        metric: 'One tap',
      },
      {
        title: 'Living Travel Journal',
        description: 'Each trip becomes an interactive web page. Share with a link.',
        metric: 'Web-native',
      },
    ],
  },
]

const differentiators = [
  {
    icon: Layers,
    title: 'Unified Data Model',
    desc: 'One trip = one data object. Discoveries, plans, GPS tracks, photos, notes — all linked, never siloed.',
    stat: 'Zero sync issues',
  },
  {
    icon: Zap,
    title: 'Real-Time Collaboration',
    desc: 'Plan together, navigate together, remember together. Changes sync instantly.',
    stat: 'Sub-100ms',
  },
  {
    icon: Heart,
    title: 'Memory-First Architecture',
    desc: 'Built from the ground up for recollection. Every feature serves the final memory.',
    stat: 'Forever accessible',
  },
  {
    icon: Share2,
    title: 'Shareable by Default',
    desc: 'Every trip generates a beautiful public page. No login needed to view.',
    stat: 'Web-native',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="features-heading"
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
          <span className="text-label text-amber-500 mb-4 inline-block">Core Experience</span>
          <h2 id="features-heading" className="text-display-lg mb-6">
            Four pillars.
            <br />
            One seamless journey.
          </h2>
          <p className="text-body-lg text-sand-400">
            Discover hidden gems. Plan with intelligence. Experience with context. Remember forever.
          </p>
        </motion.div>

        {/* Feature Categories */}
        <div className="space-y-20 lg:space-y-24">
          {features.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: category.bgColor, border: `1px solid ${category.borderColor}` }}
                >
                  <category.icon size={24} className={`text-${category.color}-500`} />
                </div>
                <div>
                  <span className="text-label text-amber-500">{category.category}</span>
                  <h3 className="text-display-md mt-1 text-foreground font-medium">{category.category} the journey</h3>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-500/30 via-transparent to-transparent" />
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.15 + itemIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="card-travel group relative p-6 lg:p-8 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(28, 25, 23, 0.8) 0%, rgba(12, 10, 9, 0.9) 100%)',
                      border: `1px solid ${category.borderColor}`,
                      boxShadow: '0 4px 12px rgba(12, 10, 9, 0.15)',
                    }}
                  >
                    {/* Accent top border */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          category.color === 'sky'
                            ? 'linear-gradient(90deg, transparent, #38bdf8, transparent)'
                            : category.color === 'forest'
                            ? 'linear-gradient(90deg, transparent, #3d803d, transparent)'
                            : 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
                      }}
                    />

                    <div className="relative">
                      <h4 className="text-heading-sm text-foreground mb-3">{item.title}</h4>
                      <p className="text-body-sm text-sand-400 leading-relaxed mb-6">{item.description}</p>
                      <span
                        className="text-label"
                        style={{
                          color:
                            category.color === 'sky'
                              ? '#38bdf8'
                              : category.color === 'forest'
                              ? '#3d803d'
                              : '#f59e0b',
                        }}
                      >
                        {item.metric}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentiation Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-24 pt-20 lg:pt-24 border-t border-sand-800/50"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-label text-amber-500 mb-4 inline-block">Why Travel Memory</span>
            <h3 className="text-display-lg mb-6">
              Different by design.
              <br />
              Not just different features.
            </h3>
            <p className="text-body-lg text-sand-400">
              Every travel app optimizes for one phase. Travel Memory is the only one that connects{' '}
              <span className="text-foreground font-medium">all four</span> — so your discovery becomes your plan,
              your plan guides your experience, and your experience becomes your memory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-travel p-6 lg:p-8 rounded-2xl text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(28, 25, 23, 0.8) 0%, rgba(12, 10, 9, 0.9) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.08)',
                  boxShadow: '0 4px 12px rgba(12, 10, 9, 0.15)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(245, 158, 11, 0.1)' }}
                >
                  <diff.icon size={24} className="text-amber-500" />
                </div>
                <h4 className="text-heading-sm text-foreground mb-3">{diff.title}</h4>
                <p className="text-body-sm text-sand-400 leading-relaxed mb-4">{diff.desc}</p>
                <span className="text-label text-amber-500">{diff.stat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
