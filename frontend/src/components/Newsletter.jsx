import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="py-24 sm:py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl glass px-8 py-16 sm:px-16 text-center"
        >
          <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl animate-blob [animation-delay:4s]" />

          <div className="relative mx-auto max-w-xl">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-500 shadow-lg shadow-brand-500/30">
              <Mail className="h-5 w-5 text-white" />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
              Get queue management tips in your inbox
            </h2>
            <p className="mt-4 text-ink-600 dark:text-ink-100/70">
              One short email a month on cutting wait times, no spam, unsubscribe
              anytime.
            </p>

            {submitted ? (
              <p className="mt-8 text-sm font-medium text-brand-600 dark:text-brand-300">
                You're on the list — check your inbox for a confirmation.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row items-center gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full flex-1 rounded-full border border-ink-900/10 dark:border-white/15 bg-white/70 dark:bg-white/5 px-5 py-3.5 text-sm text-ink-900 dark:text-white placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
