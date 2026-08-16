'use client'

import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { Reveal, RevealWords, EASE } from './Reveal'

type Status = 'idle' | 'submitting' | 'success' | 'error'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Waitlist() {
  const reduce = useReducedMotion()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error'); setMessage('Please enter a valid email address.'); return
    }
    setStatus('submitting'); setMessage('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success'); setEmail('')
    } catch (err) {
      setStatus('error'); setMessage(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section
      id="waitlist"
      className="relative py-24 lg:py-40 scroll-mt-20"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink-text)' }}
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-label" style={{ color: 'var(--color-amber-ink)' }}>Early access</span>
            <RevealWords
              text="Where will your next memory begin?"
              className="text-display-xl mt-4 mb-6 max-w-[18ch] mx-auto"
              accentFrom={3}
              as="h2"
            />
            <Reveal delay={0.1}>
              <p className="text-body-lg max-w-[42ch] mx-auto mb-10" style={{ color: 'var(--color-ink-text-muted)' }}>
                Join the waitlist and we&apos;ll reach out when early access opens. No card, no spam.
              </p>
            </Reveal>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="mx-auto max-w-md flex items-center justify-center gap-3 rounded-xl px-5 py-4"
                style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)' }}
                role="status"
              >
                <span className="grid place-items-center w-7 h-7 rounded-full flex-shrink-0" style={{ background: 'var(--color-amber-500)' }}>
                  <Check size={16} className="text-ink" />
                </span>
                <p className="text-body-md text-left" style={{ color: 'var(--color-ink-text)' }}>You&apos;re on the list. See you on the trail.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md flex flex-col sm:flex-row gap-3" noValidate>
                <label htmlFor="wl-email" className="sr-only">Email address</label>
                <input
                  id="wl-email" type="email" inputMode="email" autoComplete="email"
                  placeholder="you@email.com" value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'wl-error' : undefined}
                  className="flex-1 h-[52px] px-4 rounded-full"
                  style={{ background: '#fff', border: '1px solid var(--color-paper-border-strong)', color: 'var(--color-ink-text)' }}
                />
                <button type="submit" disabled={status === 'submitting'} className="btn-primary h-[52px] px-6 text-body-md disabled:opacity-70">
                  {status === 'submitting' ? (<><Loader2 size={18} className="animate-spin" />Joining…</>) : (<>Join the waitlist<ArrowRight size={18} /></>)}
                </button>
              </form>
            )}

            {status === 'error' && (
              <p id="wl-error" role="alert" className="mt-3 text-body-sm" style={{ color: '#b91c1c' }}>{message}</p>
            )}

            {/* honest one-line trust row — no fake badges */}
            <p className="mt-10 text-body-sm" style={{ color: 'var(--color-ink-text-subtle)' }}>
              Built on open map data · Works offline · Your memories stay yours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
