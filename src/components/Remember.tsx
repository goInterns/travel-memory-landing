'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Lock, Globe, Camera, Heart } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import { RevealWords, Reveal, EASE } from './Reveal'

/* ------------------------------------------------------------------ *
 * Remember — the core product moment.
 *
 * A photo/memory is pinned at the exact Triund summit. A real PRIVATE ↔
 * PUBLIC toggle changes what the place holds:
 *   PRIVATE -> just your memory (your journal)
 *   PUBLIC  -> your memory + memories from other travelers who were there
 *
 * Placeholder memory tiles use terrain-tinted gradients with honest
 * location+time captions — NOT fabricated stock photos of real people.
 * ------------------------------------------------------------------ */

type Mode = 'private' | 'public'

// Public memories that appear around the same summit spot (clearly sample data).
const PUBLIC_MEMORIES = [
  { who: 'Aarav', when: 'last week', grad: 'linear-gradient(135deg,#f59e0b,#7c4a12)' },
  { who: 'Meira', when: 'in May', grad: 'linear-gradient(135deg,#38bdf8,#0b3a52)' },
  { who: 'Kabir', when: 'last autumn', grad: 'linear-gradient(135deg,#fda4af,#5c2733)' },
]

function MemoryUI({ mode }: { mode: Mode }) {
  const reduce = useReducedMotion()
  return (
    <div className="relative h-full w-full" style={{ background: '#0b0f16', color: '#f4f6f9' }}>
      {/* summit backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(130% 80% at 50% 0%, #1c2733 0%, #0b0f16 55%)' }}
      />

      {/* location header */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] tracking-[0.14em] font-semibold" style={{ color: 'var(--color-amber-400)' }}>TRIUND TOP</p>
          <p className="text-[12px]" style={{ color: '#b3bccb' }}>2,875 m · 32.274°N</p>
        </div>
        <span className="text-[12px] tabular-nums" style={{ color: '#b3bccb' }}>6:12 AM</span>
      </div>

      {/* the user's own memory — the anchor photo */}
      <motion.div
        initial={{ scale: reduce ? 1 : 0.85, opacity: 0, y: reduce ? 0 : 12 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute top-[64px] left-1/2 -translate-x-1/2 w-[196px]"
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '2px solid var(--color-amber-400)', boxShadow: '0 12px 30px rgba(0,0,0,0.5)' }}
        >
          {/* sunrise placeholder photo */}
          <div className="h-[128px] relative" style={{ background: 'linear-gradient(180deg,#fbbf24 0%,#f97316 42%,#7c2d12 100%)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 50% at 50% 90%, rgba(0,0,0,0.35), transparent)' }} />
            <div className="absolute bottom-0 inset-x-0 h-12" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }} />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
              <Camera size={13} className="text-white" />
              <span className="text-[11px] text-white">Sunrise over the Dhauladhar</span>
            </div>
          </div>
          <div className="px-3 py-2.5 flex items-center justify-between" style={{ background: '#11161f' }}>
            <span className="text-[12px]" style={{ color: '#f4f6f9' }}>Your memory</span>
            <span
              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full transition-colors"
              style={
                mode === 'private'
                  ? { background: 'rgba(148,163,176,0.18)', color: '#c3ccd8' }
                  : { background: 'rgba(245,158,11,0.18)', color: 'var(--color-amber-300)' }
              }
            >
              {mode === 'private' ? <Lock size={10} /> : <Globe size={10} />}
              {mode === 'private' ? 'Private' : 'Public'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* public memories from other travelers — appear only in public mode */}
      <div className="absolute top-[288px] inset-x-4">
        <AnimatePresence mode="wait">
          {mode === 'public' ? (
            <motion.div
              key="pub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[11px] mb-2.5" style={{ color: '#b3bccb' }}>
                3 travelers left a memory here
              </p>
              <div className="flex gap-2.5">
                {PUBLIC_MEMORIES.map((m, i) => (
                  <motion.div
                    key={m.who}
                    initial={{ opacity: 0, y: reduce ? 0 : 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex-1 rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="h-[52px]" style={{ background: m.grad }} />
                    <div className="px-2 py-1.5" style={{ background: '#11161f' }}>
                      <p className="text-[10px] font-medium truncate" style={{ color: '#f4f6f9' }}>{m.who}</p>
                      <p className="text-[9px]" style={{ color: '#b3bccb' }}>{m.when}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="priv"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 rounded-xl px-3.5 py-3"
              style={{ background: '#11161f', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Heart size={15} style={{ color: 'var(--color-amber-400)' }} />
              <span className="text-[12px]" style={{ color: '#c3ccd8' }}>
                Only you can see this. Your private journal.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Remember() {
  const [mode, setMode] = useState<Mode>('private')

  return (
    <section
      id="remember"
      className="relative py-24 lg:py-36"
      style={{ background: '#0b0f16', color: 'var(--color-fg)' }}
      aria-label="Every place can hold a memory"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-label" style={{ color: 'var(--color-amber-400)' }}>04 — Remember</span>
          <RevealWords
            text="Every place can hold a memory."
            className="text-display-lg mt-4 mb-5 max-w-[14ch]"
            accentFrom={4}
            as="h2"
          />
          <Reveal delay={0.1}>
            <p className="text-body-lg text-fg-muted max-w-[44ch] mb-8">
              At the summit, pin your photo to the exact spot it happened. Keep it{' '}
              <b className="text-fg">private</b> — your own travel journal — or make it{' '}
              <b className="text-fg">public</b>, so the next traveler discovers a memory
              from someone who actually stood there.
            </p>
          </Reveal>

          {/* the real toggle — drives the phone */}
          <Reveal delay={0.15}>
            <div
              className="inline-flex items-center p-1 rounded-full"
              style={{ background: 'var(--color-ink-700)', border: '1px solid var(--color-border-strong)' }}
              role="group"
              aria-label="Memory visibility"
            >
              {(['private', 'public'] as const).map((m) => {
                const active = mode === m
                const Icon = m === 'private' ? Lock : Globe
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    aria-pressed={active}
                    className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-body-sm font-medium transition-colors"
                    style={{ color: active ? 'var(--color-ink)' : 'var(--color-fg-muted)' }}
                  >
                    {active && (
                      <motion.span
                        layoutId="memtoggle"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'var(--color-amber-400)' }}
                        transition={{ duration: 0.3, ease: EASE }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <Icon size={15} />
                      {m === 'private' ? 'Private' : 'Public'}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <Reveal className="flex justify-center lg:justify-end" y={40}>
          <PhoneFrame tone="dark">
            <MemoryUI mode={mode} />
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  )
}
