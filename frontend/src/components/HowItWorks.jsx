import { motion } from 'framer-motion'
import { BellRing, ClipboardCheck, LogIn, QrCode } from 'lucide-react'

const STEPS = [
  {
    icon: QrCode,
    title: 'Join the queue',
    desc: 'Scan the counter\'s QR code or open the location\'s link to grab a virtual ticket.',
  },
  {
    icon: ClipboardCheck,
    title: 'See your position',
    desc: 'Watch your place in line and estimated wait update live, right on your phone.',
  },
  {
    icon: BellRing,
    title: 'Get notified',
    desc: 'We ping you by SMS or WhatsApp a few minutes before it\'s your turn.',
  },
  {
    icon: LogIn,
    title: 'Walk in and go',
    desc: 'Arrive when called and head straight to the counter — no standing required.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-ink-50/60 dark:bg-white/[0.03]">
      <div className="container-app">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            How it works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
            From tap to turn in four steps
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-ink-900/15 dark:via-white/15 to-transparent" />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-ink-900 border-2 border-brand-500 text-brand-500 font-mono text-sm font-semibold shadow-sm">
                0{i + 1}
              </div>
              <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl glass">
                <Icon className="h-5 w-5 text-brand-500" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-100/70 max-w-[220px]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
