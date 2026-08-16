'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Search, Star } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import { RevealWords, Reveal, EASE } from './Reveal'

const TAGS = ['Food', 'Breakfast', 'Budget', 'Photo']

/**
 * Discover — a real place appears on the map inside the app.
 * The Murthal spot card rises, then its tags animate in one at a time.
 * SPOT + TAG = context, shown not told.
 */
function DiscoverUI() {
  const reduce = useReducedMotion()
  return (
    <div className="relative h-full w-full">
      {/* faux map backdrop inside the phone */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 30% 10%, #e9efe6 0%, #dfe7dd 40%, #d4ddd2 100%)',
        }}
      >
        {/* subtle road lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 560" aria-hidden="true">
          <path d="M-20 180 C 80 160, 120 260, 320 240" fill="none" stroke="#c2cdbd" strokeWidth="10" strokeLinecap="round" />
          <path d="M40 -20 C 60 120, 180 200, 160 580" fill="none" stroke="#cfd8c9" strokeWidth="7" strokeLinecap="round" />
          <motion.path
            d="M40 40 C 90 140, 150 150, 168 250"
            fill="none" stroke="var(--color-amber-500)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.4, ease: EASE, delay: 0.3 }}
          />
        </svg>
      </div>

      {/* search bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
        className="absolute top-3 inset-x-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-2.5 shadow-sm"
        style={{ border: '1px solid rgba(23,20,15,0.08)' }}
      >
        <Search size={15} style={{ color: '#857a68' }} />
        <span className="text-[13px]" style={{ color: '#52493c' }}>Along your route…</span>
      </motion.div>

      {/* the discovered pin */}
      <motion.div
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, y: reduce ? 0 : -10 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="grid place-items-center w-11 h-11 rounded-full shadow-lg" style={{ background: 'var(--color-amber-500)' }}>
          <MapPin size={22} className="text-ink" fill="#17140f" />
        </div>
      </motion.div>

      {/* spot detail card sliding up */}
      <motion.div
        initial={{ y: 240, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
        className="absolute bottom-0 inset-x-0 rounded-t-3xl bg-white p-5 pb-7"
        style={{ boxShadow: '0 -12px 30px rgba(23,20,15,0.12)' }}
      >
        <div className="w-10 h-1 rounded-full mx-auto mb-4" style={{ background: 'rgba(23,20,15,0.15)' }} />
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[17px] font-semibold" style={{ color: '#17140f' }}>Amrik Sukhdev</p>
            <p className="text-[13px]" style={{ color: '#857a68' }}>Murthal · roadside dhaba</p>
          </div>
          <div className="flex items-center gap-1 text-[13px]" style={{ color: '#17140f' }}>
            <Star size={13} fill="var(--color-amber-500)" stroke="none" />
            4.6
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {TAGS.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.3 + i * 0.14, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-[12px] font-medium px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.14)', color: '#92400e' }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Discover() {
  return (
    <section
      className="relative py-24 lg:py-36"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink-text)' }}
      aria-label="Discover places along your route"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-label" style={{ color: 'var(--color-amber-ink)' }}>01 — Discover</span>
          <RevealWords
            text="The places nobody tells you about."
            className="text-display-lg mt-4 mb-5 max-w-[15ch]"
            accentFrom={5}
          />
          <Reveal delay={0.1}>
            <p className="text-body-lg max-w-[42ch]" style={{ color: 'var(--color-ink-text-muted)' }}>
              A roadside legend two hours out of Delhi. Travel Memory surfaces the
              real spots along your route — and every one carries its own context:
              what it&apos;s for, and whether it&apos;s worth the stop.
            </p>
          </Reveal>
        </div>

        <Reveal className="flex justify-center lg:justify-end" y={40}>
          <PhoneFrame tone="light">
            <DiscoverUI />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  )
}
