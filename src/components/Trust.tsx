'use client'

import { Reveal } from './Reveal'
import { MapPinned, WifiOff, Lock } from 'lucide-react'

/* Trust — honest, conservative claims only. No SOC 2 / GDPR / "bank-level"
   badges (none verified). Framed as design intentions for a pre-launch product. */

const points = [
  {
    icon: MapPinned,
    title: 'Built on open map data',
    body: 'Routes and places come from OpenStreetMap and open community sources — not a walled garden you can’t export from.',
  },
  {
    icon: WifiOff,
    title: 'Yours offline',
    body: 'Download a trip before you lose signal in the mountains. Your journey works without a connection.',
  },
  {
    icon: Lock,
    title: 'Your memories, your data',
    body: 'Trips export in open formats. No selling your location history, no ads targeted at where you’ve been.',
  },
]

export default function Trust() {
  return (
    <section id="trust" className="relative py-24 lg:py-32 border-t border-[var(--color-border)]" style={{ background: 'var(--color-ink-800)' }}>
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-label" style={{ color: 'var(--color-sky-400)' }}>Built for travelers</span>
          <h2 className="text-display-md mt-3">
            Open data. Works offline. Your memories stay yours.
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <Icon size={24} style={{ color: 'var(--color-sky-400)' }} />
                <h3 className="text-heading-md text-fg mt-4 mb-2" style={{ fontSize: '20px' }}>{p.title}</h3>
                <p className="text-body-sm text-fg-muted leading-relaxed">{p.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
