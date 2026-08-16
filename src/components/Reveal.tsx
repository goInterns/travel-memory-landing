'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.7, delay: reduce ? 0 : delay, ease: EASE },
    },
  }
  return (
    <motion.div className={className} variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
      {children}
    </motion.div>
  )
}

/** Word-by-word headline reveal for editorial moments. */
export function RevealWords({
  text,
  className,
  accentFrom,
  accentColor = 'var(--color-amber-ink)',
  as: Tag = 'h2',
  delay = 0,
}: {
  text: string
  className?: string
  accentFrom?: number
  accentColor?: string
  as?: 'h1' | 'h2' | 'h3'
  delay?: number
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={accentFrom !== undefined && i >= accentFrom ? { color: accentColor } : undefined}
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reduce ? 0.2 : 0.6, delay: reduce ? 0 : delay + i * 0.06, ease: EASE }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}

export { EASE }
