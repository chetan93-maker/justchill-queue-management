import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function LiveTicket() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      whileHover={{ rotate: 0, y: -6 }}
      className="relative w-72 sm:w-80 select-none"
    >
      <div className="relative rounded-2xl glass shadow-2xl shadow-brand-900/10 overflow-hidden">
        {/* perforated top edge */}
        <div className="flex justify-between px-4 pt-3">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink-900/10 dark:bg-white/10" />
          ))}
        </div>

        <div className="px-6 pt-4 pb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-ink-400">
              JustChill Ticket
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>

          <div className="mt-4 font-mono text-5xl font-semibold text-gradient tracking-tight">
            A-042
          </div>
          <p className="mt-1 text-sm text-ink-400">Now serving · Counter 3</p>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-ink-900/5 dark:bg-white/5 px-4 py-3">
            <div>
              <p className="text-xs text-ink-400">Your position</p>
              <p className="font-mono text-lg font-semibold text-ink-900 dark:text-white">04</p>
            </div>
            <div className="h-8 w-px bg-ink-900/10 dark:bg-white/10" />
            <div>
              <p className="text-xs text-ink-400">Est. wait</p>
              <p className="font-mono text-lg font-semibold text-ink-900 dark:text-white">6 min</p>
            </div>
          </div>
        </div>

        {/* dashed tear line */}
        <div className="border-t border-dashed border-ink-900/15 dark:border-white/15" />
        <div className="px-6 py-3 flex items-center justify-between">
          <span className="text-[11px] text-ink-400">Scan to reserve your spot</span>
          <div className="h-8 w-8 rounded-md bg-[repeating-linear-gradient(45deg,theme(colors.ink.900/15),theme(colors.ink.900/15)_2px,transparent_2px,transparent_4px)] dark:bg-[repeating-linear-gradient(45deg,theme(colors.white/15),theme(colors.white/15)_2px,transparent_2px,transparent_4px)]" />
        </div>
      </div>

      {/* floating mini badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="animate-float absolute -right-6 -top-6 rounded-xl glass px-3 py-2 shadow-lg"
      >
        <p className="text-[11px] font-medium text-ink-600 dark:text-ink-100">
          🔔 You're up next!
        </p>
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="animate-blob absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-400/25 blur-3xl [animation-delay:3s]" />
        <div className="animate-blob absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl [animation-delay:6s]" />
      </div>

      <div className="container-app grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-brand-600 dark:text-brand-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Virtual queues, real calm
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 dark:text-white leading-[1.08]"
          >
            Skip the line.
            <br />
            <span className="text-gradient">Not the service.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg text-ink-600 dark:text-ink-100/70"
          >
            JustChill turns crowded waiting rooms into virtual queues. Customers
            join from their phone, watch their position update in real time, and
            walk in exactly when it's their turn.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 transition-shadow"
            >
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink-700 dark:text-ink-100 hover:text-ink-900 dark:hover:text-white transition-colors"
            >
              <PlayCircle className="h-5 w-5" />
              See how it works
            </a>
          </motion.div>

          <motion.p variants={item} className="mt-8 text-xs text-ink-400">
            No credit card required · Free for up to 50 tickets a month
          </motion.p>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <LiveTicket />
        </div>
      </div>
    </section>
  )
}

export default Hero
