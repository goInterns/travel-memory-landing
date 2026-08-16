'use client'

import type { ReactNode } from 'react'

/**
 * PhoneFrame — an oversized, rendered mobile device shell.
 * NOT a screenshot: children are live React UI so every product moment
 * animates. Kept deliberately minimal (no notch clutter) so the in-app
 * content is the star, Subbie-style.
 */
export default function PhoneFrame({
  children,
  className,
  tone = 'light',
}: {
  children: ReactNode
  className?: string
  tone?: 'light' | 'dark'
}) {
  const screenBg = tone === 'light' ? '#fbf9f5' : '#0b0f16'
  return (
    <div
      className={className}
      style={{
        width: 300,
        maxWidth: '100%',
        aspectRatio: '300 / 620',
        borderRadius: 44,
        padding: 10,
        background: 'linear-gradient(155deg, #2a2f38 0%, #0c0f14 60%, #05070a 100%)',
        boxShadow:
          '0 2px 2px rgba(255,255,255,0.18) inset, 0 40px 80px -20px rgba(0,0,0,0.55), 0 12px 28px -8px rgba(0,0,0,0.4)',
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ borderRadius: 34, background: screenBg }}
      >
        {/* status bar */}
        <div
          className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-medium"
          style={{ color: tone === 'light' ? '#17140f' : '#f4f6f9' }}
        >
          <span>9:41</span>
          <span className="w-16 h-5 rounded-full" style={{ background: tone === 'light' ? '#17140f' : '#000' }} aria-hidden="true" />
          <span className="tabular-nums">100%</span>
        </div>
        <div className="absolute inset-0 pt-9">{children}</div>
      </div>
    </div>
  )
}
