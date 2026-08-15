import Link from 'next/link'
import { Sparkles, MapPin, Mail } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'The Journey', href: '#how-it-works' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press', href: '#press' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#cta' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
  ],
}

const socialLinks = [
  { label: 'Website', href: 'https://travelmemory.app', icon: 'globe' },
  { label: 'Email', href: 'mailto:hello@travelmemory.app', icon: 'mail' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-16 lg:pt-24 pb-12 border-t border-sand-800/50">
      <div className="w-[1280px] max-w-full mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-semibold text-xl text-foreground mb-4" aria-label="Travel Memory Home">
              <div 
                className="w-8 h-8 flex items-center justify-center rounded-lg"
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
              >
                <Sparkles size={18} className="text-sand-950" />
              </div>
              <span>Travel Memory</span>
            </Link>
            <p className="text-body-sm text-sand-500 mb-4 max-w-[200px]">
              Discover, plan, experience, and remember every journey.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sand-400 hover:text-amber-500 hover:bg-sand-800/50 transition-all duration-200"
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {social.icon === 'globe' ? <MapPin size={18} /> : <Mail size={18} />}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-heading-sm text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-sm text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-sm text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-sm text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-sand-400 hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-sand-800/50 text-center text-body-sm text-sand-500">
          <p>© {currentYear} Travel Memory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
