'use client'

import { Reveal } from './Reveal'

/* Phases — the four phases as an editorial numbered list, NOT a card grid.
   Big index numbers, generous whitespace, one line each. */

const phases = [
  { n: '01', name: 'Discover', line: 'Hidden gems from real community data — the dhaba, the ridge, the cafe only hikers know.' },
  { n: '02', name: 'Plan', line: 'Drag stops on the 3D map. Real drive times. A route that actually fits your days.' },
  { n: '03', name: 'Experience', line: 'Turn-by-turn with context, photos pinned to the exact spot on the mountain.' },
  { n: '04', name: 'Remember', line: 'The whole trip replays as a cinematic flight across the map you can keep and share.' },
]

export default function Phases() {
  return (
    <section id="phases" className="relative py-24 lg:py-36 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-label" style={{ color: 'var(--color-amber-400)' }}>The whole arc</span>
          <h2 className="text-display-lg mt-3">
            One app for the entire journey — from the idea to the memory.
          </h2>
        </Reveal>

        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[8rem_12rem_1fr] items-baseline gap-x-5 md:gap-x-8 gap-y-1 py-8 lg:py-10 group">
                <span
                  className="text-display-md font-semibold tabular-nums transition-colors"
                  style={{ color: 'var(--color-ink-400)' }}
                >
                  {p.n}
                </span>
                <h3 className="text-display-sm text-fg col-start-2 md:col-start-auto">{p.name}</h3>
                <p className="text-body-lg text-fg-muted col-span-2 md:col-span-1 max-w-[52ch] mt-2 md:mt-0">
                  {p.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
