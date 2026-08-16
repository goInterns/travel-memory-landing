import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-[var(--color-border)] py-14 lg:py-16" role="contentinfo">
      <div className="mx-auto max-w-[1160px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 font-display font-semibold text-lg text-fg mb-4" aria-label="Travel Memory home">
              <span className="grid place-items-center w-8 h-8 rounded-lg" style={{ background: 'var(--color-amber-500)' }} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1.5c-3 0-5.2 2.2-5.2 5 0 3.6 5.2 9 5.2 9s5.2-5.4 5.2-9c0-2.8-2.2-5-5.2-5Z" stroke="#07090c" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="9" cy="6.4" r="1.7" fill="#07090c" />
                </svg>
              </span>
              <span>Travel Memory</span>
            </Link>
            <p className="text-body-sm text-fg-muted leading-relaxed">
              Discover, plan, experience, and remember every journey — on a real, living 3D map.
            </p>
          </div>
          <div className="flex gap-14 sm:gap-20">
            <div>
              <h3 className="text-label text-fg-subtle mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="#journey" className="text-body-sm text-fg-muted hover:text-fg transition-colors">The journey</Link></li>
                <li><Link href="#remember" className="text-body-sm text-fg-muted hover:text-fg transition-colors">Memories</Link></li>
                <li><Link href="#waitlist" className="text-body-sm text-fg-muted hover:text-fg transition-colors">Early access</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-label text-fg-subtle mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="mailto:hello@travelmemory.app" className="text-body-sm text-fg-muted hover:text-fg transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-body-sm text-fg-subtle">© {year} Travel Memory. All rights reserved.</p>
          <p className="text-body-sm text-fg-subtle">Map imagery © Esri · Terrain Mapzen/AWS · Roads © OpenStreetMap</p>
        </div>
      </div>
    </footer>
  )
}
