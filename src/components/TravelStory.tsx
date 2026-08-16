'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { STOPS } from '@/lib/journey'
import { RevealWords, Reveal, EASE } from './Reveal'

/* ------------------------------------------------------------------ *
 * TravelStory — the emotional payoff, back on paper.
 * The completed journey replays as ONE horizontal visual story: the route
 * line threads through every stop, each carrying a memory tile. Route +
 * places + photos become a single keepable artifact.
 * ------------------------------------------------------------------ */

// Memory tint per stop (placeholder photos — terrain-tinted, not stock people).
const TINTS = [
  'linear-gradient(135deg,#f5c453,#c98a2b)',
  'linear-gradient(135deg,#e8a15a,#a85f24)',
  'linear-gradient(135deg,#8fb4d6,#3d6b95)',
  'linear-gradient(135deg,#7fae7f,#33683a)',
  'linear-gradient(135deg,#c9a3c7,#6d4a75)',
  'linear-gradient(135deg,#fbbf24,#f97316)',
]

export default function TravelStory() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a222c 0%, var(--color-paper-2) 24%, var(--color-paper) 100%)',
        color: 'var(--color-ink-text)',
      }}
      aria-label="Your completed journey becomes a travel story"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 lg:mb-20">
          <span className="text-label" style={{ color: 'var(--color-amber-ink)' }}>05 — Your travel story</span>
          <RevealWords
            text="The whole trip becomes one living story."
            className="text-display-lg mt-4 mb-5 max-w-[16ch]"
            accentFrom={5}
          />
          <Reveal delay={0.1}>
            <p className="text-body-lg max-w-[44ch]" style={{ color: 'var(--color-ink-text-muted)' }}>
              Route, stops, photos and memories — replayable as a single journey you
              can keep, or share with whoever comes next.
            </p>
          </Reveal>
        </div>

        {/* The story strip */}
        <div className="relative">
          {/* connecting route line — sits on the dot row above the tiles */}
          <div className="absolute left-[8%] right-[8%] top-[-4px] hidden md:block" aria-hidden="true">
            <svg width="100%" height="8" preserveAspectRatio="none" viewBox="0 0 1000 8">
              <motion.line
                x1="0" y1="4" x2="1000" y2="4"
                stroke="var(--color-amber-500)" strokeWidth="2.5" strokeDasharray="3 8" strokeLinecap="round"
                initial={{ pathLength: reduce ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0 : 2, ease: EASE }}
              />
            </svg>
          </div>

          <ol className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-3 pt-2">
            {STOPS.map((stop, i) => (
              <motion.li
                key={stop.id}
                initial={{ opacity: 0, y: reduce ? 0 : 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.12, ease: EASE }}
                className="relative"
              >
                {/* memory tile */}
                <div
                  className="aspect-[3/4] rounded-2xl overflow-hidden relative"
                  style={{ boxShadow: '0 10px 24px rgba(23,20,15,0.16)' }}
                >
                  <div className="absolute inset-0" style={{ background: TINTS[i] }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
                  {/* stop dot on the line */}
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full hidden md:block z-10"
                    style={{
                      background: stop.kind === 'summit' ? 'var(--color-amber-500)' : '#0ea5e9',
                      border: '3px solid var(--color-paper)',
                      boxShadow: '0 1px 4px rgba(23,20,15,0.3)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <p className="text-[13px] font-semibold text-white leading-tight">{stop.name}</p>
                    <p className="text-[10px] text-white/85">{stop.day}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
