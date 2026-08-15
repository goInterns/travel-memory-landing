'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Mail, Lock, Shield } from 'lucide-react'

export default function CTA() {
  return (
    <section 
      id="cta"
      className="relative py-section-desktop lg:py-[140px]"
      aria-labelledby="cta-heading"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0" aria-hidden="true">
        <div 
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[175px] opacity-20 animate-float"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)', animationDelay: '-1s' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 animate-float"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', animationDelay: '-4s' }}
        />
      </div>

      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
          >
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-label text-amber-400">Early Access Available</span>
          </motion.div>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg mb-6"
          >
            Ready to turn your next trip
            <br />
            <span className="text-gradient-amber">into a living memory?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-sand-400 max-w-2xl mx-auto mb-12"
          >
            Join the waitlist for early access. No credit card required.
            No spam — ever. Unsubscribe at any time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@domain.com"
                  className="w-full px-4 py-4 rounded-xl bg-sand-900/80 border border-sand-700 text-foreground placeholder-sand-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  aria-label="Email address for early access"
                  required
                />
              </div>
              <motion.button
                type="submit"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-label px-6 lg:px-8 py-4 inline-flex items-center justify-center gap-2 flex-shrink-0"
                aria-label="Join the waitlist"
              >
                Get Early Access
                <ArrowRight size={18} />
              </motion.button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-6 mt-6 text-body-sm text-sand-500"
            >
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-sand-600" />
                <span>Privacy-first</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-sand-600" />
                <span>No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-sand-600" />
                <span>Unsubscribe anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}