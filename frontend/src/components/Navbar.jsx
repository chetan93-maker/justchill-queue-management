import { useEffect, useLayoutEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X, Zap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true

    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  // Track scroll position to switch the navbar from transparent to glass
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Apply / remove the `dark` class on <html> for Tailwind's class-based dark mode
  const toggleDarkMode = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 glass shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-app flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 shrink-0 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-105">
              <Zap className="h-5 w-5 text-white" fill="white" strokeWidth={0} />
            </span>
            <span className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
              JustChill
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-ink-600 dark:text-ink-100/80 rounded-full transition-colors duration-200 hover:text-ink-900 dark:hover:text-white hover:bg-ink-50 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 dark:border-white/10 text-ink-600 dark:text-ink-100 transition-colors duration-200 hover:bg-ink-50 dark:hover:bg-white/5"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-100 transition-colors duration-200 hover:text-ink-900 dark:hover:text-white"
            >
              Log in
            </Link>

            <motion.a
              href="#book-queue"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-500/40"
            >
              Book Queue
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 dark:border-white/10 text-ink-600 dark:text-ink-100"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 dark:border-white/10 text-ink-700 dark:text-ink-100"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white dark:bg-ink-900 border-l border-ink-100 dark:border-white/10 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100 dark:border-white/10">
                <span className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500">
                    <Zap className="h-4 w-4 text-white" fill="white" strokeWidth={0} />
                  </span>
                  <span className="text-base font-semibold text-ink-900 dark:text-white">
                    JustChill
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 dark:border-white/10 text-ink-600 dark:text-ink-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex-1 flex flex-col gap-1 px-4 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 dark:text-ink-100 hover:bg-ink-50 dark:hover:bg-white/5"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="px-6 py-6 border-t border-ink-100 dark:border-white/10 flex flex-col gap-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center rounded-full border border-ink-200 dark:border-white/15 px-5 py-3 text-sm font-medium text-ink-700 dark:text-ink-100"
                >
                  Log in
                </Link>
                <a
                  href="#book-queue"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
                >
                  Book Queue
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
