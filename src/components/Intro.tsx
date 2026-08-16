'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { JOURNEY_META } from '@/lib/journey'

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Intro — a short editorial opening ABOVE the map stage.
 * Big confident type, almost no chrome. It sets the promise; the map
 * that follows delivers it. No stock photos, no destination cards.
 */
export default function Intro() {
  const reduce = useReducedMotion()

  const words = ['Every', 'journey', 'becomes', 'a', 'living', 'map.']

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden">
      {/* faint contour backdrop — pure SVG, no blobs */}
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${120 + i * 80} Q 360 ${60 + i * 80}, 720 ${120 + i * 80} T 1440 ${120 + i * 80}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-label"
          style={{ color: 'var(--color-amber-400)' }}
        >
          Discover · Plan · Experience · Remember
        </motion.span>

        <h1 className="text-display-2xl mt-6 mb-8 max-w-[16ch]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: reduce ? 0 : 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.1 + i * 0.08, ease: EASE }}
              className="inline-block mr-[0.28em]"
              style={i >= 4 ? { color: 'var(--color-amber-400)' } : undefined}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="text-body-lg text-fg-muted max-w-[46ch] mb-9"
        >
          Not photos in a cloud. A real, interactive 3D map that remembers where
          you went — the route, the stops, the moment at the summit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <Link href="#waitlist" className="btn-primary text-body-md px-7 py-3.5">Join the waitlist</Link>
          <Link href="#journey" className="btn-ghost text-body-md px-7 py-3.5">Travel the demo journey</Link>
        </motion.div>

        {/* the journey signature, as a line of numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-16 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-[var(--color-border)] pt-6 max-w-2xl"
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
      <div className="text-display-sm text-fg font-semibold leading-none">{value}</div>
      <div className="text-label text-fg-subtle mt-1.5">{label}</div>
    </div>
  )
}
