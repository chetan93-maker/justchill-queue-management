import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const STATS = [
  { value: 4.2, suffix: 'M+', decimals: 1, label: 'Tickets served' },
  { value: 68, suffix: '%', label: 'Average wait time reduced' },
  { value: 1200, suffix: '+', label: 'Businesses onboard' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime' },
]

function AnimatedNumber({ value, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => latest.toFixed(decimals))

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration: 2, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, value, motionValue])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

function Statistics() {
  return (
    <section className="py-20">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-fuchsia-500 px-8 py-16 sm:px-16">
          <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {STATS.map(({ value, suffix, decimals, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-mono text-3xl sm:text-4xl font-semibold text-white">
                  <AnimatedNumber value={value} decimals={decimals} />
                  {suffix}
                </p>
                <p className="mt-2 text-sm text-white/80">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
