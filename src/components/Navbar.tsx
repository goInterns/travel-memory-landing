'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Compass, Camera, Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { href: '#journey', label: 'The Journey' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#differentiation', label: 'Why Travel Memory' },
  { href: '#cta', label: 'Get Early Access' },
]

const trustSignals = [
  { icon: MapPin, label: 'Offline maps' },
  { icon: Compass, label: 'Auto routes' },
  { icon: Camera, label: 'Photo memories' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const backdropBlur = useTransform(scrollY, [0, 100], ['0px', '20px'])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: `rgba(12, 10, 9, ${opacity.get() * 0.95})`,
        backdropFilter: `blur(${backdropBlur.get()})`,
        borderBottom: `1px solid rgba(245, 158, 11, ${opacity.get() * 0.15})`,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-semibold text-xl text-foreground z-10"
            aria-label="Travel Memory Home"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-8 h-8 flex items-center justify-center rounded-lg"
              style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
            >
              <Sparkles size={18} className="text-sand-950" />
            </motion.div>
            <span>Travel Memory</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="#cta"
                className="btn-primary text-label px-6 py-3 inline-flex items-center gap-2"
              >
                Get Early Access
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.div>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-amber-500 transition-colors z-10"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="lg:hidden fixed top-20 left-0 right-0 bg-sand-950/98 backdrop-blur-xl border-b border-amber-500/10 z-40 overflow-hidden"
      >
        <div className="w-[1280px] max-w-full mx-auto px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-body-md text-sand-400 hover:text-foreground transition-colors border-b border-sand-800/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Trust Signals Mobile */}
          <div className="flex items-center justify-center gap-8 pt-4 border-t border-sand-800/50">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="flex items-center gap-2 text-body-sm text-sand-500">
                <signal.icon size={16} className="text-amber-500" />
                <span>{signal.label}</span>
              </div>
            ))}
          </div>

          <Link
            href="#cta"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary text-label w-full py-4 text-center inline-flex items-center justify-center gap-2"
          >
            Get Early Access
            <span>→</span>
          </Link>
        </div>
      </motion.div>
    </motion.header>
  )
}