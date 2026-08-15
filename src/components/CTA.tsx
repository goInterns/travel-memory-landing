'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Lock, Smartphone, Map } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="cta-heading"
    >
      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        {/* Background glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-20 blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.3) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl mx-auto p-8 lg:p-16 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(28, 25, 23, 0.8) 0%, rgba(12, 10, 9, 0.95) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.15)',
            boxShadow: '0 24px 48px rgba(12, 10, 9, 0.2), 0 8px 16px rgba(12, 10, 9, 0.1), inset 0 1px 0 rgba(245,158,11,0.05)',
          }}
        >
          {/* Decorative sparkles */}
          <div className="flex justify-center gap-2 mb-6" aria-hidden="true">
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full"
                style={{ background: '#f59e0b' }}
              />
            ))}
          </div>

          <span className="text-label text-amber-500 mb-4 inline-block">Early Access</span>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg mb-6"
          >
            Turn your next trip into a memory that lasts forever.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-sand-400 mb-10 max-w-2xl mx-auto"
          >
            Join 1,500+ early explorers building journeys from Delhi to Triund and beyond.
            First 500 waitlist members get lifetime Pro features.
          </motion.p>

          {/* Waitlist Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thanks for joining! We'll be in touch soon.")
            }}
          >
            <div className="relative w-full sm:flex-1">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-5 py-4 pl-12 rounded-xl text-foreground placeholder-sand-500 transition-all duration-300"
                style={{
                  background: 'rgba(12, 10, 9, 0.8)',
                  border: '1px solid rgba(245, 158, 11, 0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#f59e0b'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.15), inset 0 1px 0 rgba(255,255,255,0.02)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.15)'
                  e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.02)'
                }}
                aria-label="Email address"
              />
              <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-500" size={20} aria-hidden="true" />
            </div>
            <button
              type="submit"
              className="btn-primary text-label px-8 py-4 inline-flex items-center gap-3 w-full sm:w-auto justify-center group"
            >
              Join Waitlist
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </button>
          </motion.form>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-body-sm text-sand-500"
          >
            <div className="flex items-center gap-2">
              <Map size={16} className="text-amber-500" />
              <span>Offline maps included</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone size={16} className="text-amber-500" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-amber-500" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-amber-500" />
              <span>Privacy-first</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
