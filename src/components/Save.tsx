'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, Plus } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import { RevealWords, Reveal, EASE } from './Reveal'

const PLACES = [
  { name: 'Murthal', tag: 'Food stop', saved: true },
  { name: 'Chandigarh', tag: 'Overnight', saved: true },
  { name: 'Dharamshala', tag: 'Mountain air', saved: false },
]

/** Save UI — a place is saved, the route forms, list fills in. */
function SaveUI() {
  const reduce = useReducedMotion()
  return (
    <div className="relative h-full w-full" style={{ background: '#0b0f16', color: '#f4f6f9' }}>
      {/* forming route on a dark mini-map */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 90% at 70% 0%, #16202b 0%, #0b0f16 60%)' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 560" aria-hidden="true">
          <motion.path
            d="M60 90 C 110 180, 90 260, 150 320 S 210 430, 180 500"
            fill="none" stroke="var(--color-amber-500)" strokeWidth="3" strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.8, ease: EASE, delay: 0.4 }}
          />
          {[[60, 90], [150, 320], [180, 500]].map(([cx, cy], i) => (
            <motion.circle
              key={i} cx={cx} cy={cy} r="6"
              fill={i === 2 ? 'var(--color-amber-400)' : '#38bdf8'}
              stroke="#0b0f16" strokeWidth="2"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            />
          ))}
        </svg>
      </div>

      {/* "your journey" list */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        className="absolute bottom-0 inset-x-0 rounded-t-3xl p-5 pb-7"
        style={{ background: '#11161f', boxShadow: '0 -12px 30px rgba(0,0,0,0.4)' }}
      >
        <div className="w-10 h-1 rounded-full mx-auto mb-4" style={{ background: 'rgba(255,255,255,0.18)' }} />
        <p className="text-[13px] mb-3" style={{ color: '#b3bccb' }}>Your journey · 3 stops</p>
        <div className="space-y-2.5">
          {PLACES.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: reduce ? 0 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.25, ease: EASE }}
              className="flex items-center justify-between rounded-xl px-3.5 py-3"
              style={{ background: '#0b0f16', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div>
                <p className="text-[15px] font-medium" style={{ color: '#f4f6f9' }}>{p.name}</p>
                <p className="text-[12px]" style={{ color: '#b3bccb' }}>{p.tag}</p>
              </div>
              <span
                className="grid place-items-center w-7 h-7 rounded-full"
                style={{
                  background: p.saved ? 'var(--color-amber-500)' : 'transparent',
                  border: p.saved ? 'none' : '1.5px solid rgba(255,255,255,0.25)',
                }}
              >
                {p.saved ? <Check size={15} className="text-ink" /> : <Plus size={15} style={{ color: '#93a0b0' }} />}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/**
 * Save — the bridge chapter. Light paper at the top fades into the dark
 * map world at the bottom, so the next section (the real 3D map) feels
 * like we've physically entered the journey.
 */
export default function Save() {
  return (
    <section
      className="relative py-24 lg:py-36"
      style={{
        background: 'linear-gradient(180deg, var(--color-paper) 0%, var(--color-paper-2) 42%, #1a222c 100%)',
        color: 'var(--color-ink-text)',
      }}
      aria-label="Save places and form your route"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="flex justify-center lg:justify-start order-2 lg:order-1" y={40}>
          <PhoneFrame tone="dark">
            <SaveUI />
          </PhoneFrame>
        </Reveal>

        <div className="order-1 lg:order-2">
          <span className="text-label" style={{ color: 'var(--color-amber-ink)' }}>02 — Save &amp; plan</span>
          <RevealWords
            text="Save a spot. The route draws itself."
            className="text-display-lg mt-4 mb-5 max-w-[16ch]"
            accentFrom={4}
          />
          <Reveal delay={0.1}>
            <p className="text-body-lg max-w-[42ch]" style={{ color: 'var(--color-ink-text-muted)' }}>
              Tap to save a place and it drops onto your journey. Stop by stop, the
              line grows — and starts climbing toward the mountains.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
