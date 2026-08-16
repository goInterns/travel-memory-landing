'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const navItems = [
  { href: '#journey', label: 'The journey' },
  { href: '#phases', label: 'How it works' },
  { href: '#trust', label: 'Privacy' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-display font-semibold text-lg text-fg" aria-label="Travel Memory home">
      <span className="grid place-items-center w-8 h-8 rounded-lg" style={{ background: 'var(--color-amber-500)' }} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1.5c-3 0-5.2 2.2-5.2 5 0 3.6 5.2 9 5.2 9s5.2-5.4 5.2-9c0-2.8-2.2-5-5.2-5Z" stroke="#07090c" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="9" cy="6.4" r="1.7" fill="#07090c" />
        </svg>
      </span>
      <span>Travel Memory</span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? 'rgba(7,9,12,0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Logo />
          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-body-sm text-fg-muted hover:text-fg transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link href="#waitlist" className="btn-primary text-body-sm px-5 py-2.5">Join the waitlist</Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-11 h-11 -mr-2 text-fg"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 top-16 z-40 bg-ink/60"
              onClick={() => setOpen(false)} aria-hidden="true"
            />
            <motion.div
              key="sheet" id="mobile-menu"
              initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="lg:hidden fixed inset-x-0 top-16 z-40 mx-3 rounded-2xl border p-5"
              style={{ background: 'var(--color-ink-800)', borderColor: 'var(--color-border-strong)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                    className="py-3.5 text-body-lg text-fg-muted hover:text-fg transition-colors border-b border-[var(--color-border)]">
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link href="#waitlist" onClick={() => setOpen(false)} className="btn-primary w-full mt-5 py-3.5 text-body-md">
                Join the waitlist
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
