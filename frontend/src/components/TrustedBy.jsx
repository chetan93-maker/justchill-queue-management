import { motion } from 'framer-motion'
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react'

const INDUSTRIES = [
  { label: 'Healthcare clinics', icon: HeartPulse },
  { label: 'Retail stores', icon: ShoppingBag },
  { label: 'Banks & finance', icon: Landmark },
  { label: 'Government offices', icon: Building2 },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Campuses', icon: GraduationCap },
]

function TrustedBy() {
  const loop = [...INDUSTRIES, ...INDUSTRIES]

  return (
    <section className="py-14 border-y border-ink-900/5 dark:border-white/5">
      <div className="container-app">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-ink-400">
          Built for the places people wait
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-ink-900 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-ink-900 to-transparent z-10" />

        <motion.div className="flex w-max gap-10 animate-marquee">
          {loop.map(({ label, icon: Icon }, i) => (
            <div
              key={`${label}-${i}`}
              className="flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-ink-600 dark:text-ink-100/70 border border-ink-900/5 dark:border-white/10"
            >
              <Icon className="h-4 w-4 text-brand-500" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy
