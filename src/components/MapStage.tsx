'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { MapHandle } from './TravelMap'
import TravelMap from './TravelMap'
import { STOPS } from '@/lib/journey'

/* ------------------------------------------------------------------ *
 * MapStage — the product IS the page.
 *
 * A single real 3D map is pinned to the viewport. As the user scrolls
 * through a tall track, we compute which "scene" is active and drive the
 * map camera (flyTo a stop, draw the route, frame the whole journey).
 * Editorial text scenes float over the live map — one idea each.
 *
 * Scenes map to the four phases: DISCOVER -> PLAN -> EXPERIENCE -> REMEMBER,
 * walking the real Delhi -> Triund journey.
 * ------------------------------------------------------------------ */

type Scene = {
  id: string
  phase: string
  eyebrow: string
  title: string
  body: string
  stopIndex: number | null // which stop to fly to (null = frame whole journey)
  progress: number // 0..1 route drawn at this scene
  align: 'left' | 'right' | 'center'
}

const SCENES: Scene[] = [
  {
    id: 'discover',
    phase: 'Discover',
    eyebrow: '01 — Discover',
    title: 'It starts with a place worth going.',
    body: 'Delhi, before dawn. The map already knows the paratha stop in Murthal and the sunrise ridge above McLeod Ganj — the gems, not the top-ten list.',
    stopIndex: 0,
    progress: 0.02,
    align: 'left',
  },
  {
    id: 'murthal',
    phase: 'Discover',
    eyebrow: '01 — Discover',
    title: 'The stops nobody tells you about.',
    body: 'Murthal. A roadside legend two hours in. Travel Memory surfaces the small, real places along the way.',
    stopIndex: 1,
    progress: 0.16,
    align: 'right',
  },
  {
    id: 'plan',
    phase: 'Plan',
    eyebrow: '02 — Plan',
    title: 'The route draws itself.',
    body: 'A real road route from Delhi through Chandigarh and up into the Dhauladhar — day by day, with drive times that actually add up.',
    stopIndex: 2,
    progress: 0.45,
    align: 'left',
  },
  {
    id: 'experience',
    phase: 'Experience',
    eyebrow: '03 — Experience',
    title: 'The air changes at Dharamshala.',
    body: 'Follow the line as it climbs into the mountains. The terrain is real elevation — tilt into the valleys the road carves through.',
    stopIndex: 3,
    progress: 0.78,
    align: 'right',
  },
  {
    id: 'mcleod',
    phase: 'Experience',
    eyebrow: '03 — Experience',
    title: 'McLeod Ganj. Monastery bells and momos.',
    body: 'The last town before the trail. Photos pin here, to the exact spot on the mountain where you stood.',
    stopIndex: 4,
    progress: 0.9,
    align: 'left',
  },
  {
    id: 'remember',
    phase: 'Remember',
    eyebrow: '04 — Remember',
    title: 'Sunrise at Triund. The summit.',
    body: 'Where the road ends, the trek begins — and the whole journey becomes a single 3D memory you can fly through, forever.',
    stopIndex: 5,
    progress: 1,
    align: 'right',
  },
  {
    id: 'whole',
    phase: 'Remember',
    eyebrow: '04 — Remember',
    title: 'Five days. 497 kilometres. One line you can relive.',
    body: 'Every trip becomes a living map — the route, the stops, the moments — held together as one thing you keep.',
    stopIndex: null,
    progress: 1,
    align: 'center',
  },
]

export default function MapStage() {
  const reduce = useReducedMotion()
  const mapRef = useRef<MapHandle>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)
  const activeRef = useRef(0)

  // Drive the camera whenever the active scene changes (once map is ready).
  useEffect(() => {
    if (!ready) return
    const scene = SCENES[active]
    if (scene.stopIndex === null) mapRef.current?.frameJourney()
    else mapRef.current?.flyToStop(scene.stopIndex)
    mapRef.current?.setRouteProgress(scene.progress)
  }, [active, ready])

  // On first ready, prime the opening scene so the map isn't blank.
  useEffect(() => {
    if (!ready) return
    mapRef.current?.flyToStop(SCENES[0].stopIndex ?? 0)
    mapRef.current?.setRouteProgress(SCENES[0].progress)
  }, [ready])

  // Scroll listener: figure out which scene is centered in the viewport.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const rect = track.getBoundingClientRect()
        const vh = window.innerHeight
        // progress through the track (0 when top hits top, 1 when bottom leaves)
        const total = rect.height - vh
        const scrolled = Math.min(Math.max(-rect.top, 0), total)
        const t = total > 0 ? scrolled / total : 0
        const idx = Math.min(SCENES.length - 1, Math.floor(t * SCENES.length))
        if (idx !== activeRef.current) {
          activeRef.current = idx
          setActive(idx)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="journey" aria-label="The journey, on a living 3D map" className="relative">
      {/* Tall scroll track; each scene ~one viewport */}
      <div ref={trackRef} style={{ height: `${SCENES.length * 100}vh` }} className="relative">
        {/* Pinned map + overlaid scene copy */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <TravelMap ref={mapRef} className="absolute inset-0 h-full w-full" onReady={() => setReady(true)} />

          {/* Legibility gradient so text stays readable over bright imagery */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(7,9,12,0.72) 0%, rgba(7,9,12,0.15) 30%, rgba(7,9,12,0.15) 62%, rgba(7,9,12,0.82) 100%)',
            }}
          />

          {/* Loading veil until the real map paints */}
          {!ready && (
            <div className="absolute inset-0 grid place-items-center bg-ink">
              <div className="flex flex-col items-center gap-3">
                <div className="h-6 w-6 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
                <span className="text-label text-fg-subtle">Loading the map…</span>
              </div>
            </div>
          )}

          {/* Progress rail of stops */}
          <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-3">
            {STOPS.map((stop, i) => {
              const isActive = SCENES[active]?.stopIndex === i
              return (
                <div key={stop.id} className="flex items-center gap-2 justify-end">
                  <span
                    className="text-label transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0, color: 'var(--color-amber-300)' }}
                  >
                    {stop.name}
                  </span>
                  <span
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? 10 : 7,
                      height: isActive ? 10 : 7,
                      background: isActive ? 'var(--color-amber-400)' : 'rgba(255,255,255,0.35)',
                      boxShadow: isActive ? '0 0 0 4px rgba(251,191,36,0.25)' : 'none',
                    }}
                    aria-hidden="true"
                  />
                </div>
              )
            })}
          </div>

          {/* Scene copy */}
          <div className="absolute inset-0 z-10 flex items-end lg:items-center">
            <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-6 lg:px-8 pb-24 lg:pb-0">
              {SCENES.map((scene, i) => (
                <motion.div
                  key={scene.id}
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : reduce ? 0 : 18,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute max-w-xl"
                  style={{
                    pointerEvents: active === i ? 'auto' : 'none',
                    left: scene.align === 'right' ? 'auto' : scene.align === 'center' ? '50%' : undefined,
                    right: scene.align === 'right' ? 0 : undefined,
                    transform: scene.align === 'center' ? 'translateX(-50%)' : undefined,
                    textAlign: scene.align === 'center' ? 'center' : 'left',
                  }}
                >
                  <span className="text-label" style={{ color: 'var(--color-amber-400)' }}>
                    {scene.eyebrow}
                  </span>
                  <h2 className="text-display-lg mt-3 mb-4">{scene.title}</h2>
                  <p
                    className="text-body-lg text-fg-muted"
                    style={{ maxWidth: scene.align === 'center' ? '46ch' : undefined, marginInline: scene.align === 'center' ? 'auto' : undefined }}
                  >
                    {scene.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* scroll hint on first scene */}
          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
            animate={{ opacity: active === 0 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            <span className="text-label text-fg-subtle">Scroll to travel</span>
            <motion.span
              className="text-fg-subtle"
              animate={reduce ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
