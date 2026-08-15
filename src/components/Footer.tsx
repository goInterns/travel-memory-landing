import Link from 'next/link'
import { MessageSquare, ExternalLink } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'The Journey', href: '#journey' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'Help Center', href: '#help' },
    { label: 'Community', href: '#community' },
    { label: 'Status', href: '#status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
  ],
}

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socialLinks = [
  { icon: TwitterIcon, href: 'https://twitter.com/travelmemory', label: 'Twitter' },
  { icon: GithubIcon, href: 'https://github.com/travel-memory', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/company/travel-memory', label: 'LinkedIn' },
  { icon: MessageSquare, href: 'mailto:hello@travelmemory.app', label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      className="relative py-16 lg:py-20 border-t"
      style={{ borderColor: 'rgba(245, 158, 11, 0.08)' }}
      role="contentinfo"
    >
      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-semibold text-xl text-foreground mb-6" aria-label="Travel Memory Home">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-lg"
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sand-950">
                  <path d="M2 12l8.35 5.38a1 1 0 0 0 1.3 0L22 12" />
                  <path d="M2 12V4l9-3 9 3v8" />
                  <path d="M11 12l-9-5.38a1 1 0 0 1 0-1.1L11 4" />
                </svg>
              </div>
              <span>Travel Memory</span>
            </Link>
            <p className="text-body-sm text-sand-400 leading-relaxed mb-8 max-w-xs">
              The only app that connects discovery, planning, experience, and memory into one seamless journey.
              Built for travelers who don't just want to visit places — they want to remember them.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.08)' }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-sand-500 group-hover:text-amber-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-1">
            <h4 className="text-label text-foreground mb-4">Product</h4>
            <nav aria-label="Product links">
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-label text-foreground mb-4">Company</h4>
            <nav aria-label="Company links">
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-label text-foreground mb-4">Resources</h4>
            <nav aria-label="Resource links">
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-label text-foreground mb-4">Legal</h4>
            <nav aria-label="Legal links">
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col lg:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(245, 158, 11, 0.08)' }}>
          <p className="text-body-sm text-sand-500">
            © {new Date().getFullYear()} Travel Memory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-body-sm text-sand-500">Built for travelers, by travelers</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-pulse-gentle" style={{ background: '#f59e0b' }} aria-hidden="true" />
              <span className="text-body-sm text-amber-500">Early access live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
