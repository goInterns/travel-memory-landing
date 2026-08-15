'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock,
  MapPin,
  Database,
  Smartphone,
  Globe,
} from 'lucide-react'

const trustBadges = [
  { label: 'SOC 2 Type II', icon: Shield },
  { label: 'GDPR Compliant', icon: Lock },
  { label: 'Bank-Level Encryption', icon: Database },
]

export default function SocialProof() {
  return (
    <section 
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="trust-heading"
    >
      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-label text-amber-500 mb-4 inline-block">Built for adventurers</span>
          <h2 id="trust-heading" className="text-display-lg mb-6">
            Trusted by travelers\nwho value privacy and craft.
          </h2>
          <p className="text-body-lg text-sand-400">
            Travel Memory is built for those who want their journeys to live forever — not locked behind proprietary walls.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 mb-12"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ 
                background: 'rgba(28, 25, 23, 0.8)',
                border: '1px solid rgba(245, 158, 11, 0.12)',
              }}
            >
              <badge.icon size={18} className="text-amber-500" />
              <span className="text-label text-sand-300">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          <div>
            <MapPin size={24} className="text-amber-500 mx-auto mb-2" />
            <p className="text-body-sm text-sand-400">Offline maps worldwide</p>
          </div>
          <div>
            <Smartphone size={24} className="text-amber-500 mx-auto mb-2" />
            <p className="text-body-sm text-sand-400">iOS & Android</p>
          </div>
          <div>
            <Globe size={24} className="text-amber-500 mx-auto mb-2" />
            <p className="text-body-sm text-sand-400">Web export, no app required</p>
          </div>
          <div>
            <Database size={24} className="text-amber-500 mx-auto mb-2" />
            <p className="text-body-sm text-sand-400">Open formats, always yours</p>
          </div>
        </motion.div>

        {/* Placeholder for future testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-10 border-t border-sand-800/50 text-center"
        >
          <p className="text-body-sm text-sand-500">
            Early access testimonials &amp; partner badges coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  )
}