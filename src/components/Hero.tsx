'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { JOURNEY_META } from '@/lib/journey'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Hero — the beginning of a journey, on warm paper.
 * A single route line draws itself across the whitespace with one pulsing
 * "spot" — the seed of the map that the whole site will grow into.
 * No cards, big confident type.
 */
export default function Hero() {
  const reduce = useReducedMotion()
  const words = ['Where', 'will', 'your', 'journey', 'take', 'you?']

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink-text)' }}
    >
      {/* Route seed — a hand-drawn line easing across the page */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          d="M -50 700 C 240 660, 300 540, 520 520 S 860 560, 1040 300 S 1300 90, 1520 120"
          fill="none"
          stroke="var(--color-amber-500)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 10"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: reduce ? 0 : 2.6, ease: EASE, delay: 0.3 }}
        />
        {/* start + end spots */}
        <motion.circle cx="-50" cy="700" r="6" fill="var(--color-ink-text)"
          initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 0.4 }} />
        <motion.circle
          cx="1040" cy="300" r="7" fill="var(--color-amber-500)"
          initial={{ scale: 0 }} animate={reduce ? { scale: 1 } : { scale: [0, 1.15, 1] }}
          transition={{ delay: reduce ? 0 : 2.4, duration: 0.6, ease: EASE }}
        />
        {!reduce && (
          <motion.circle
            cx="1040" cy="300" r="7" fill="none" stroke="var(--color-amber-500)" strokeWidth="2"
            animate={{ r: [7, 22], opacity: [0.6, 0] }}
            transition={{ delay: 3, duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </svg>

      <div className="relative mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-label"
          style={{ color: 'var(--color-amber-ink)' }}
        >
          A living travel map
        </motion.span>

        <h1 className="text-display-2xl mt-6 mb-8 max-w-[15ch]" style={{ color: 'var(--color-ink-text)' }}>
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: reduce ? 0 : 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.15 + i * 0.08, ease: EASE }}
              className="inline-block mr-[0.28em]"
              style={i >= 5 ? { color: 'var(--color-amber-ink)' } : undefined}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="text-body-lg max-w-[44ch] mb-9"
          style={{ color: 'var(--color-ink-text-muted)' }}
        >
          A trip is more than a destination. It&apos;s the places, the detours, and the
          moments in between — saved to the exact spot on the map where they happened.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link href="#waitlist" className="btn-primary text-body-md px-7 py-3.5">Join the waitlist</Link>
          <Link href="#journey" className="btn-ghost-dark text-body-md px-7 py-3.5">Travel the demo journey</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
          className="mt-16 flex flex-wrap items-baseline gap-x-8 gap-y-3 pt-6 max-w-2xl"
          style={{ borderTop: '1px solid var(--color-paper-border)' }}
        >
          <Metric value="Delhi → Triund" label="the demo journey" />
          <Metric value={`${JOURNEY_META.distanceKm} km`} label="real road + trek" />
          <Metric value={`${JOURNEY_META.days} days`} label="6 stops" />
          <Metric value={`${JOURNEY_META.elevationGainM.toLocaleString()} m`} label="elevation gained" />
        </motion.div>
      </div>
    </section>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-display-sm font-semibold leading-none" style={{ color: 'var(--color-ink-text)' }}>{value}</div>
      <div className="text-label mt-1.5" style={{ color: 'var(--color-ink-text-subtle)' }}>{label}</div>
    </div>
  )
}
