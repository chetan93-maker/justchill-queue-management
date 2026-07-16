import { motion } from 'framer-motion'
import {
  BarChart3,
  Bell,
  Building,
  MonitorSmartphone,
  QrCode,
  Users,
} from 'lucide-react'

const FEATURES = [
  {
    icon: QrCode,
    title: 'Join in seconds',
    desc: 'Customers scan a QR code or tap a link to join the queue — no app download, no account needed.',
  },
  {
    icon: Bell,
    title: 'Smart notifications',
    desc: 'Automatic SMS and WhatsApp alerts tell customers when it\'s almost their turn, so they can wait wherever they like.',
  },
  {
    icon: BarChart3,
    title: 'Live analytics',
    desc: 'Track wait times, no-shows, and peak hours in a single dashboard to staff your counters better.',
  },
  {
    icon: Building,
    title: 'Multi-branch ready',
    desc: 'Manage queues across every location from one account, with permissions for each branch manager.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Kiosk & TV display',
    desc: 'Show the live queue on a waiting-room screen or self-service kiosk, no extra hardware required.',
  },
  {
    icon: Users,
    title: 'Staff console',
    desc: 'Call the next customer, add priority cases, or pause a counter with one tap from any device.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container-app">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
            Everything a waiting room needs, minus the waiting
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-100/70">
            JustChill replaces paper tickets and crowded lobbies with a queue
            your customers can watch from their pocket.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl glass p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 shadow-lg shadow-brand-500/25">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-100/70">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
