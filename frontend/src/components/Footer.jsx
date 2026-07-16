import { Zap } from 'lucide-react'

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Help center', href: '#' },
    { label: 'API docs', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy policy', href: '#' },
    { label: 'Terms of service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

const SOCIALS = [
  { label: 'X', href: '#' },
  { label: 'in', href: '#' },
  { label: 'ig', href: '#' },
  { label: 'fb', href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-ink-900/5 dark:border-white/5 pt-16 pb-8">
      <div className="container-app">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 shadow-lg shadow-brand-500/30">
                <Zap className="h-5 w-5 text-white" fill="white" strokeWidth={0} />
              </span>
              <span className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
                JustChill
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-600 dark:text-ink-100/70">
              Virtual queue management for teams who'd rather their customers
              wait comfortably than stand in line.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 dark:border-white/10 text-xs font-semibold text-ink-500 dark:text-ink-100/70 hover:text-brand-500 hover:border-brand-500/40 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-ink-900 dark:text-white">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-600 dark:text-ink-100/70 hover:text-brand-500 dark:hover:text-brand-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-900/5 dark:border-white/5 pt-8">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} JustChill. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">Made for calmer waiting rooms everywhere.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
